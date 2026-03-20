import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { ApiKeyService } from '../../../services/api-key.service';
import { AiModel } from '../data/data.model';

export type ChatRole = 'system' | 'user' | 'assistant';
export interface ChatMessage {
  role: ChatRole;
  content: string;
}
export interface OpenRouterChoice {
  message?: { role?: string; content?: string };
}
export interface OpenRouterResponse {
  choices?: OpenRouterChoice[];
}
export interface OpenRouterCallOptions {
  temperature?: number;
  title?: string;
  throwOnError?: boolean;
}

@Injectable({ providedIn: 'root' })
export class OpenRouterService {
  private readonly http = inject(HttpClient);
  private readonly apiKeyService = inject(ApiKeyService);

  private readonly openRouterApiUrl = 'https://openrouter.ai/api/v1/chat/completions';
  private readonly freeModelSet = new Set<string>([
    AiModel.NemotronNano,
    AiModel.NemotronSuper,
    AiModel.Arcee,
    AiModel.Zai,
  ]);
  // Canonical model lists used by the assistant UI and fallback helpers.
  readonly models: string[] = Object.values(AiModel);
  readonly freeModels: string[] = this.models.filter((model) =>
    this.freeModelSet.has(model),
  );

  get hasApiKey(): boolean {
    return !!this.apiKeyService.getCurrentKey();
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
      const resp = (await this.http
        .post(this.openRouterApiUrl, payload, {
          headers,
          responseType: 'text',
          observe: 'response',
        })
        .toPromise()) as HttpResponse<string> | null;

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
}
