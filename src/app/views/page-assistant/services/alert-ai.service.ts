import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { ApiKeyService } from '../../../services/api-key.service';
import { PromptTemplates } from '../data/ai-prompts.constants';
import { PromptKey } from '../data/data.model';
import type { AlertIssue } from '../components/problems/component-guidance/alerts-guidance/alerts-guidance.component';

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

@Injectable({ providedIn: 'root' })
export class AlertAiService {
  private readonly http = inject(HttpClient);
  private readonly apiKeyService = inject(ApiKeyService);

  private readonly openRouterApiUrl = 'https://openrouter.ai/api/v1/chat/completions';
  private readonly models: string[] = [
    'meta-llama/llama-3.3-70b-instruct:free',
    'google/gemini-2.0-flash-exp:free',
    'google/gemini-exp-1206:free',
    'cognitivecomputations/dolphin3.0-mistral-24b:free',
    'cognitivecomputations/dolphin3.0-r1-mistral-24b:free',
    'nvidia/llama-3.1-nemotron-70b-instruct:free',
    'deepseek/deepseek-r1:free',
  ];

  /** Call OpenRouter with the AlertsGuidance prompt and return normalized issues. */
  async analyze(alertHtml: string, pageContext?: string): Promise<AlertIssue[]> {
    const systemPrompt = PromptTemplates[PromptKey.AlertsGuidance];
    const userPayload = {
      alertHtml: this.trimText(alertHtml),
      pageContext: this.trimText(pageContext),
    };

    const messages: ChatMessage[] = [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: JSON.stringify(userPayload) },
    ];

    for (const model of this.models) {
      const resp = await this.callOpenRouter(model, messages);
      const text = resp?.choices?.[0]?.message?.content;
      if (!text) continue;

      const issues = this.parseIssues(text);
      if (issues.length) return issues;
    }

    return [];
  }

  // ---------- OpenRouter plumbing ----------
  private async callOpenRouter(
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
      'X-Title': 'Content Assistant - Alert Guidance',
    });

    const payload = { model, messages, temperature };

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
      } else {
        console.error(
          `OpenRouter non-JSON (status ${resp?.status}, ${ct}):\n`,
          (resp?.body || '').slice(0, 500),
        );
        return undefined;
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
      return undefined;
    }
  }

  // ---------- Output parsing ----------
  private parseIssues(text: string): AlertIssue[] {
    const cleaned = this.stripCodeFences(text);
    const parsed = this.looseJsonParse(cleaned);
    const root: Record<string, unknown> | null =
      parsed && typeof parsed === 'object' ? (parsed as Record<string, unknown>) : null;

    const issuesArray = Array.isArray(root?.['issues'])
      ? root?.['issues']
      : Array.isArray(root)
        ? (root as unknown[])
        : [];

    const mapped = issuesArray
      .map((raw) => {
        if (!raw || typeof raw !== 'object') return null;
        const obj = raw as Record<string, unknown>;
        const category = this.cleanString(obj['issue_category'] ?? obj['category']);
        const description = this.cleanString(obj['description']);
        const recommendation = this.cleanString(obj['recommendation']);
        const severity = this.normalizeSeverity(obj['severity']);
        const include =
          typeof obj['include'] === 'boolean' ? obj['include'] : true;

        if (!category || !description || !recommendation) return null;
        const issue: AlertIssue = {
          category,
          description,
          recommendation,
          severity,
          include,
        };
        return issue;
      })
      .filter((x): x is AlertIssue => !!x);

    return mapped;
  }

  private stripCodeFences(s: string): string {
    return s
      .replace(/^```(?:json)?\s*/i, '')
      .replace(/\s*```$/i, '')
      .trim();
  }

  private looseJsonParse(s: string): unknown | null {
    try {
      return JSON.parse(s);
    } catch {
      // fall through
    }
    const m = s.match(/\{[\s\S]*\}/);
    if (m) {
      try {
        return JSON.parse(m[0] as string);
      } catch {
        return null;
      }
    }
    return null;
  }

  private trimText(s: string | undefined, max = 12000): string {
    const t = (s || '').trim();
    return t.length > max ? t.slice(0, max) : t;
  }

  private cleanString(v: unknown): string {
    return typeof v === 'string' ? v.trim() : '';
  }

  private normalizeSeverity(v: unknown): string {
    const raw = this.cleanString(v).toLowerCase();
    if (!raw) return 'Unknown';
    if (raw === 'high' || raw === 'critical') return 'High';
    if (raw === 'medium' || raw === 'med' || raw === 'moderate') return 'Medium';
    if (raw === 'low' || raw === 'minor') return 'Low';
    return raw.charAt(0).toUpperCase() + raw.slice(1);
  }
}
