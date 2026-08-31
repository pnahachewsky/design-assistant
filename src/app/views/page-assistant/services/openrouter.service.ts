import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { timeout } from 'rxjs';
import { ApiKeyService } from '../../../services/api-key.service';
import { AiModel } from '../data/data.model';

export type ChatRole = 'system' | 'user' | 'assistant';
export interface ChatMessage {
  role: ChatRole;
  content: string;
}
export interface OpenRouterChoice {
  message?: { role?: string; content?: string };
  finish_reason?: string;
  native_finish_reason?: string;
  error?: unknown;
}
export interface OpenRouterResponse {
  id?: string;
  model?: string;
  choices?: OpenRouterChoice[];
  usage?: unknown;
  error?: unknown;
  provider?: unknown;
  openrouter?: unknown;
  openrouter_metadata?: unknown;
}
export interface OpenRouterCallOptions {
  temperature?: number;
  title?: string;
  throwOnError?: boolean;
  timeoutMs?: number;
}

@Injectable({ providedIn: 'root' })
export class OpenRouterService {
  static readonly defaultRequestTimeoutMs = 240000;

  private readonly http = inject(HttpClient);
  private readonly apiKeyService = inject(ApiKeyService);

  private readonly openRouterApiUrl = 'https://openrouter.ai/api/v1/chat/completions';
  private readonly freeModelOrder: string[] = [
    AiModel.NemotronUltra,
    AiModel.NemotronLightning,
    AiModel.NemotronSuper,
    AiModel.FreeModelsRouter,
  ];
  // Canonical model lists used by the assistant UI and fallback helpers.
  readonly models: string[] = Object.values(AiModel);
  readonly freeModels: string[] = [...this.freeModelOrder];

  get hasApiKey(): boolean {
    return !!this.apiKeyService.getCurrentKey();
  }

  buildResponseMetadata(
    response: OpenRouterResponse | undefined,
  ): Record<string, unknown> {
    if (!response) {
      return {
        receivedResponse: false,
      };
    }

    const choices = Array.isArray(response.choices) ? response.choices : [];
    return {
      receivedResponse: true,
      id: response.id || '',
      responseModel: response.model || '',
      choiceCount: choices.length,
      choices: choices.map((choice) => this.buildChoiceMetadata(choice)),
      usage: this.sanitizeMetadata(response.usage),
      error: this.sanitizeMetadata(response.error),
      provider: this.sanitizeMetadata(response.provider),
      openrouter: this.sanitizeMetadata(response.openrouter),
      openrouterMetadata: this.sanitizeMetadata(response.openrouter_metadata),
      responseKeys: Object.keys(response),
    };
  }

  // Minimal transport wrapper around OpenRouter chat completions.
  // Callers own prompt construction, fallback policy, and response interpretation.
  async call(
    model: string,
    messages: ChatMessage[],
    options: OpenRouterCallOptions = {},
  ): Promise<OpenRouterResponse | undefined> {
    const apiKey = this.apiKeyService.getCurrentKey();
    if (!apiKey) {
      throw new Error('API key is required.');
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'X-Title': options.title ?? 'Content Assistant',
    });

    const payload = {
      model,
      messages,
      temperature: options.temperature ?? 0.0,
    };

    try {
      const effectiveTimeoutMs =
        options.timeoutMs ?? OpenRouterService.defaultRequestTimeoutMs;
      let request$ = this.http.post(this.openRouterApiUrl, payload, {
        headers,
        responseType: 'text',
        observe: 'response',
      });
      if (effectiveTimeoutMs > 0) {
        request$ = request$.pipe(timeout(effectiveTimeoutMs));
      }
      const resp = (await request$.toPromise()) as HttpResponse<string> | null;

      const ct = resp?.headers.get('content-type') || '';
      if (ct.includes('application/json') && typeof resp?.body === 'string') {
        return JSON.parse(resp.body) as OpenRouterResponse;
      }
      // Some upstream/provider failures come back as plain text; keep the caller in control of retry behavior.
      const nonJsonMessage = `OpenRouter non-JSON (status ${resp?.status}, ${ct})`;
      console.error(
        `${nonJsonMessage}:\n`,
        (resp?.body || '').slice(0, 500),
      );
      if (options.throwOnError) {
        throw new Error(nonJsonMessage);
      }
      return undefined;
    } catch (err: unknown) {
      // Return undefined by default so higher-level flows can rotate models or surface custom messages.
      const timeoutErr = err as { name?: string };
      if (timeoutErr?.name === 'TimeoutError') {
        const effectiveTimeoutMs =
          options.timeoutMs ?? OpenRouterService.defaultRequestTimeoutMs;
        const message =
          `OpenRouter request timed out (model: ${model}, timeoutMs: ${effectiveTimeoutMs})`;
        console.error(message);
        if (options.throwOnError) {
          throw new Error(message);
        }
        return undefined;
      }

      const httpErr = err as { status?: number; error?: unknown };
      const status = httpErr?.status;
      const bodySnippet =
        typeof httpErr?.error === 'string'
          ? httpErr.error.slice(0, 500)
          : JSON.stringify(httpErr?.error);
      const message = `OpenRouter HTTP error (model: ${model}) status=${status}: ${bodySnippet}`;
      console.error(message);
      if (options.throwOnError) {
        throw new Error(message);
      }
      return undefined;
    }
  }

  private buildChoiceMetadata(choice: OpenRouterChoice): Record<string, unknown> {
    const message = choice.message;
    const content =
      typeof message?.content === 'string' ? message.content : '';
    return {
      finishReason: choice.finish_reason || '',
      nativeFinishReason: choice.native_finish_reason || '',
      hasMessage: !!message,
      messageRole: message?.role || '',
      messageKeys:
        message && typeof message === 'object' ? Object.keys(message) : [],
      contentCharacters: content.length,
      trimmedContentCharacters: content.trim().length,
      error: this.sanitizeMetadata(choice.error),
      choiceKeys: Object.keys(choice),
    };
  }

  private sanitizeMetadata(value: unknown): unknown {
    if (value == null) return value;
    if (typeof value === 'string') {
      return value.length > 500 ? `${value.slice(0, 500)}...` : value;
    }
    if (typeof value === 'number' || typeof value === 'boolean') return value;
    if (Array.isArray(value)) {
      return value.slice(0, 10).map((item) => this.sanitizeMetadata(item));
    }
    if (typeof value === 'object') {
      return Object.fromEntries(
        Object.entries(value as Record<string, unknown>)
          .filter(([key]) => !/content|prompt|message/i.test(key))
          .map(([key, nestedValue]) => [
            key,
            this.sanitizeMetadata(nestedValue),
          ]),
      );
    }
    return String(value);
  }
}
