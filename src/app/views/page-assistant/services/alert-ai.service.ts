import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
import { ApiKeyService } from '../../../services/api-key.service';
import { PromptTemplates } from '../data/ai-prompts.constants';
import { PromptKey, AiModel } from '../data/data.model';
import type { AlertIssue } from '../components/problems/component-guidance/alerts-guidance/alerts-guidance.component';
import fallbackSeverityJson from '../components/problems/component-guidance/alerts-guidance/severity-include-fallback.json';

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
  private readonly messageService = inject(MessageService);
  private readonly translate = inject(TranslateService);
  private cachedAlertIssues: { html: string; issues: AlertIssue[] } | null = null;
  private readonly fallbackSeverities: Record<string, { severity: string; include?: boolean }> =
    Object.fromEntries(
      Object.entries(
        fallbackSeverityJson as Record<
          string,
          string | { severity?: string; include?: boolean }
        >,
      ).map(([k, v]) => {
        if (typeof v === 'string') {
          return [k.toLowerCase(), { severity: String(v) }];
        }
        const severity = typeof v?.severity === 'string' ? v.severity : '';
        const include = typeof v?.include === 'boolean' ? v.include : undefined;
        return [k.toLowerCase(), { severity, include }];
      }),
    );

  private readonly openRouterApiUrl = 'https://openrouter.ai/api/v1/chat/completions';
  private readonly models: string[] = Object.values(AiModel);

  /** Call OpenRouter with the AlertsIssues prompt and return normalized issues. */
  async analyze(alertHtml: string, pageContext?: string): Promise<AlertIssue[]> {
    const startTime = performance.now();
    this.messageService.add({
      severity: 'info',
      summary: this.translate.instant('common.ai.sending'),
      life: 2000,
    });
    const systemPrompt = PromptTemplates[PromptKey.AlertsIssues];
    const userPayload = {
      alertHtml: this.trimText(alertHtml),
      pageContext: this.trimText(pageContext),
    };

    const messages: ChatMessage[] = [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: JSON.stringify(userPayload) },
    ];

    let sawResponse = false;
    let generatingNotified = false;
    let errorNotified = false;
    let lastError: unknown | undefined;
    let resolvedIssues: AlertIssue[] = [];
    const primaryModel = this.models[0];

    try {
      for (let i = 0; i < this.models.length; i += 1) {
        const model = this.models[i];
        try {
          const resp = await this.callOpenRouter(model, messages);
          const text = resp?.choices?.[0]?.message?.content;
          if (!text) continue;
          sawResponse = true;
          if (!generatingNotified) {
            this.messageService.add({
              severity: 'info',
              summary: this.translate.instant('common.ai.generating'),
              life: 2000,
            });
            generatingNotified = true;
          }

          const issues = this.parseIssues(text);
          if (issues.length) {
            resolvedIssues = issues;
            if (i > 0 && primaryModel) {
              this.messageService.add({
                severity: 'warn',
                summary: this.translate.instant('common.ai.fallback.summary'),
                detail: this.translate.instant('common.ai.fallback.detail', {
                  requested: primaryModel,
                  used: model,
                }),
                life: 10000,
              });
            }
            this.messageService.add({
              severity: 'success',
              summary: this.translate.instant('common.ai.responseReceived.summary'),
              detail: this.translate.instant('common.ai.responseReceived.detail'),
              life: 5000,
            });
            break;
          }
        } catch (err) {
          lastError = err;
          if (err instanceof Error && /api key/i.test(err.message)) {
            this.notifyError(err);
            errorNotified = true;
            break;
          }
        }
      }

      if (!resolvedIssues.length && !errorNotified && !sawResponse) {
        this.notifyError(
          lastError ??
            new Error(
              this.translate.instant('common.ai.errorCommunicatingOpenRouter'),
            ),
        );
      }
      return resolvedIssues;
    } finally {
      const durationInSeconds = ((performance.now() - startTime) / 1000).toFixed(
        2,
      );
      this.messageService.add({
        severity: 'info',
        summary: this.translate.instant('common.requestComplete'),
        detail: this.translate.instant('common.totalTime', {
          time: durationInSeconds,
        }),
        life: 10000,
      });
    }
  }

  getCachedIssues(alertHtml: string): AlertIssue[] | null {
    const normalized = this.trimText(alertHtml);
    if (!this.cachedAlertIssues) return null;
    if (this.cachedAlertIssues.html !== normalized) return null;
    return this.cachedAlertIssues.issues;
  }

  cacheIssues(alertHtml: string, issues: AlertIssue[]): void {
    const normalized = this.trimText(alertHtml);
    this.cachedAlertIssues = {
      html: normalized,
      issues: issues.map((issue) => ({ ...issue })),
    };
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
      }
      const nonJsonMessage = `OpenRouter non-JSON (status ${resp?.status}, ${ct})`;
      console.error(
        `${nonJsonMessage}:\n`,
        (resp?.body || '').slice(0, 500),
      );
      throw new Error(nonJsonMessage);
    } catch (err: unknown) {
      const httpErr = err as { status?: number; error?: unknown };
      const status = httpErr?.status;
      const bodySnippet =
        typeof httpErr?.error === 'string'
          ? httpErr.error.slice(0, 500)
          : JSON.stringify(httpErr?.error);
      const message = `OpenRouter HTTP error (model: ${model}) status=${status}: ${bodySnippet}`;
      console.error(message);
      throw new Error(message);
    }
  }

  private notifyError(err: unknown): void {
    const message =
      err instanceof Error
        ? err.message
        : this.translate.instant('common.ai.requestFailed.detailUnknown');
    this.messageService.add({
      severity: 'error',
      summary: this.translate.instant('common.ai.requestFailed.summary'),
      detail: message,
      sticky: true,
    });
  }

  // ---------- Output parsing ----------
  parseIssuesFromText(text: string): AlertIssue[] {
    return this.parseIssues(text);
  }
  
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
        const severity = this.normalizeSeverity(obj['severity'], category);
        const include =
          typeof obj['include'] === 'boolean'
            ? obj['include']
            : this.lookupFallbackInclude(category) ?? true;

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

  stripCodeFences(s: string): string {
    return s
      .replace(/^```(?:json)?\s*/i, '')
      .replace(/\s*```$/i, '')
      .trim();
  }

  looseJsonParse(s: string): unknown | null {
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

  private normalizeSeverity(v: unknown, category?: string): string {
    const rawLower = this.cleanString(v).toLowerCase();
    if (!rawLower) {
      const fallback = this.lookupFallbackSeverity(category);
      return fallback ?? 'Unknown';
    }
    return this.normalizeSeverityValue(rawLower);
  }

  private normalizeSeverityValue(rawLower: string): string {
    if (rawLower === 'high' || rawLower === 'critical') return 'High';
    if (rawLower === 'medium' || rawLower === 'med' || rawLower === 'moderate')
      return 'Medium';
    if (rawLower === 'low' || rawLower === 'minor') return 'Low';
    return rawLower.charAt(0).toUpperCase() + rawLower.slice(1);
  }

  private lookupFallbackSeverity(category: unknown): string | null {
    const key = this.cleanString(category).toLowerCase();
    if (!key) return null;
    const mapped = this.fallbackSeverities[key];
    if (!mapped?.severity) return null;
    return this.normalizeSeverityValue(this.cleanString(mapped.severity).toLowerCase());
  }

  private lookupFallbackInclude(category: unknown): boolean | null {
    const key = this.cleanString(category).toLowerCase();
    if (!key) return null;
    const mapped = this.fallbackSeverities[key];
    return typeof mapped?.include === 'boolean' ? mapped.include : null;
  }
}
