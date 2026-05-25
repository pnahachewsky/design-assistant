import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { ApiKeyService } from './api-key.service';

/** Minimal OpenRouter chat types */
type ChatRole = 'system' | 'user' | 'assistant';
interface ChatMessage {
  role: ChatRole;
  content: string;
}
interface OpenRouterChoice {
  message?: { role?: string; content?: string };
}
interface OpenRouterResponse {
  choices?: OpenRouterChoice[];
}
export interface TranslationAlignmentResult {
  html: string;
  modelUsed: string;
}

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private openRouterApiUrl = 'https://openrouter.ai/api/v1/chat/completions';

  // prefer-inject over constructor DI
  private readonly http = inject(HttpClient);
  private readonly apiKeyService = inject(ApiKeyService);

  private docxPrompt = `You are a document formatting assistant. 
You will be provided two inputs in HTML format:
1. An English HTML document that contains unique identifiers for each text segment (e.g., <p id="P1">, <p id="P2">).
2. A block of French text that is the translation of the English document.

Your task: return the French document in HTML format such that:
1. All English text is replaced with its correct French translation.
2. The HTML structure (tags, attributes, order) remains unchanged.
3. Each text element retains its original unique ID.
Do not add extra commentary or leftover English text.`;

  private pptxPrompt = `You are a presentation formatting assistant. 
Inputs:
1. English HTML containing IDs like S3_T1, S3_T2.
2. A block of French text.

Your task: 
1. Replace the English text with correct French translation.
2. Preserve the same HTML structure and unique IDs.
3. If the French text is one paragraph but the English input is split into multiple segments, split it appropriately.
Return only the French HTML document.`;

  private readonly models: string[] = [
    'nvidia/nemotron-3-nano-30b-a3b:free',
    'openai/gpt-oss-20b:free',
    'google/gemma-4-26b-a4b-it:free',
    'nvidia/nemotron-nano-9b-v2:free',
    'nvidia/nemotron-nano-12b-v2-vl:free',
    'z-ai/glm-4.5-air:free',
    'qwen/qwen3-next-80b-a3b-instruct:free',
    'deepseek/deepseek-v4-flash:free',
    'meta-llama/llama-3.2-3b-instruct:free',
  ];

  /**
   * Aligns French text with the English HTML structure.
   */
  async alignTranslation(
    englishHtml: string,
    frenchText: string,
    englishFile: File | null,
  ): Promise<TranslationAlignmentResult | null> {
    // Clean English HTML
    englishHtml = englishHtml.replace(/<img[^>]*>/g, '');

    // Select prompt based on file type
    const fileExtension = englishFile?.name.split('.').pop()?.toLowerCase();
    const systemPrompt =
      fileExtension === 'pptx' ? this.pptxPrompt : this.docxPrompt;

    // Build chat request
    const combinedPrompt = `${systemPrompt}\n\nEnglish Document (HTML):\n${englishHtml}\n\nFrench Text:\n${frenchText}\n\nReturn the French document in HTML format that exactly follows the structure of the English document.`;

    const requestMessages: ChatMessage[] = [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: combinedPrompt },
    ];
    // Guardrail: the formatter must preserve every source paragraph ID.
    // If a model drops or reorders IDs, the generated file can be misaligned.
    const expectedParagraphIds = this.extractParagraphIds(englishHtml);

    for (const model of this.models) {
      console.log(`Translation assistant trying model: ${model}`);
      const aiResponse = await this.getORData(model, requestMessages, 0.0);
      const text = aiResponse?.choices?.[0]?.message?.content;
      if (text) {
        const html = this.removeCodeFences(text);
        const validation = this.validateParagraphIds(
          html,
          expectedParagraphIds,
        );
        if (!validation.isValid) {
          console.warn(
            `Translation assistant rejected model ${model}: ${validation.reason}`,
          );
          continue;
        }

        console.log(`Translation assistant used model: ${model}`);
        return {
          html,
          modelUsed: model,
        };
      }
    }

    console.warn('Translation assistant did not receive a usable response from any model.');
    return null;
  }

  /**
   * Fetches data from OpenRouter API
   */
  private async getORData(
    model: string,
    messages: ChatMessage[],
    temperature = 0.0,
  ): Promise<OpenRouterResponse | undefined> {
    const apiKey = this.apiKeyService.getCurrentKey();
    if (!apiKey) throw new Error('API key is required.');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'X-Title': 'Content Assistant',
    });

    const payload = { model, messages, temperature };

    try {
      const resp = (await this.http
        .post(this.openRouterApiUrl, payload, {
          headers,
          responseType: 'text', // keep text to check content-type ourselves
          observe: 'response',
        })
        .toPromise()) as HttpResponse<string> | null;

      const ct = resp?.headers.get('content-type') || '';
      if (ct.includes('application/json') && typeof resp?.body === 'string') {
        return JSON.parse(resp.body) as OpenRouterResponse;
      } else {
        console.error(
          `OpenRouter non-JSON (status ${resp?.status}, ${ct}):\n`,
          (resp?.body || '').slice(0, 500),
        );
        return undefined; // let alignTranslation() try the next model
      }
    } catch (err: unknown) {
      const httpErr = err as { status?: number; error?: unknown };
      const status = httpErr?.status;
      const bodySnippet =
        typeof httpErr?.error === 'string'
          ? httpErr.error.slice(0, 500)
          : JSON.stringify(httpErr?.error);
      console.error(
        `OpenRouter HTTP error (model: ${model}) status=${status}: ${bodySnippet}`,
      );
      return undefined; // keep falling back
    }
  }

  /**
   * Removes ``` code fences from AI output
   */
  private removeCodeFences(str: string): string {
    return str
      .replace(/^```(?:html|json)?\s*/i, '')
      .replace(/\s*```$/i, '')
      .trim();
  }

  private extractParagraphIds(html: string): string[] {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    return Array.from(tempDiv.querySelectorAll('p[id]'))
      .map((p) => p.getAttribute('id'))
      .filter((id): id is string => Boolean(id));
  }

  private validateParagraphIds(
    html: string,
    expectedIds: string[],
  ): { isValid: boolean; reason: string } {
    if (expectedIds.length === 0) {
      return { isValid: true, reason: '' };
    }

    const actualIds = this.extractParagraphIds(html);
    if (actualIds.length !== expectedIds.length) {
      return {
        isValid: false,
        reason: `expected ${expectedIds.length} paragraph IDs, received ${actualIds.length}`,
      };
    }

    const mismatchIndex = expectedIds.findIndex(
      (id, index) => actualIds[index] !== id,
    );
    if (mismatchIndex !== -1) {
      return {
        isValid: false,
        reason: `expected ${expectedIds[mismatchIndex]} at position ${mismatchIndex + 1}, received ${actualIds[mismatchIndex] || 'missing'}`,
      };
    }

    return { isValid: true, reason: '' };
  }

  /**
   * Builds a mapping of paragraph IDs to French text from HTML.
   */
  buildFrenchTextMap(finalFrenchHtml: string): Record<string, string> {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = finalFrenchHtml;
    const frenchMap: Record<string, string> = {};
    tempDiv.querySelectorAll('p[id]').forEach((p) => {
      const id = p.getAttribute('id');
      const text = p.textContent?.trim() || '';
      if (id && text) frenchMap[id] = text;
    });
    return frenchMap;
  }
}
