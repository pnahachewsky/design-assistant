import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { ApiKeyService } from '../../../services/api-key.service';
import { PromptTemplates } from '../data/ai-prompts.constants';
import { PromptKey } from '../data/data.model';
import type { AlertIssue } from '../components/problems/component-guidance/alerts-guidance/alerts-guidance.component';

export interface AlertCriteria {
  category: string;
  description: string;
  recommendation: string;
}
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
  private cachedAlertIssues: { html: string; issues: AlertIssue[] } | null = null;
  private cachedAlertRecommendations:
    | { key: string; output: string; htmls: string[] }
    | null = null;
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
  private readonly models: string[] = [
    'meta-llama/llama-3.3-70b-instruct:free',
    'google/gemini-2.0-flash-exp:free',
    'google/gemini-exp-1206:free',
    'cognitivecomputations/dolphin3.0-mistral-24b:free',
    'cognitivecomputations/dolphin3.0-r1-mistral-24b:free',
    'nvidia/llama-3.1-nemotron-70b-instruct:free',
    'deepseek/deepseek-r1:free',
  ];

  /** Call OpenRouter with the AlertsIssues prompt and return normalized issues. */
  async analyzeIssues(alertHtml: string, pageContext?: string): Promise<AlertIssue[]> {
    const systemPrompt = PromptTemplates[PromptKey.AlertsIssues];
    const extractedAlerts = this.extractAlerts(alertHtml);
    const userPayload = {
      alertHtml: this.trimText(extractedAlerts),
      pageContext: this.trimText(pageContext ?? alertHtml),
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

  async recommend(
    alertHtml: string,
    pageContext: string | undefined,
    criteria: AlertCriteria[],
  ): Promise<{ output: string; htmls: string[] }> {
    const systemPrompt = PromptTemplates[PromptKey.AlertsRecommendations];
    const extractedAlerts = this.extractAlerts(alertHtml);
    const userPayload = {
      alertHtml: this.trimText(extractedAlerts),
      pageContext: this.trimText(pageContext ?? alertHtml),
      criteria,
    };

    const messages: ChatMessage[] = [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: JSON.stringify(userPayload) },
    ];

    for (const model of this.models) {
      const resp = await this.callOpenRouter(model, messages);
      const text = resp?.choices?.[0]?.message?.content;
      if (!text) continue;

      const htmls = this.parseRecommendations(text);
      if (htmls.length) {
        this.cacheRecommendations(alertHtml, criteria, text, htmls);
        return { output: text, htmls };
      }
    }

    return { output: '', htmls: [] };
  }

  /** Backwards-compatible wrapper. */
  async analyze(alertHtml: string, pageContext?: string): Promise<AlertIssue[]> {
    return this.analyzeIssues(alertHtml, pageContext);
  }

  getCachedIssues(alertHtml: string): AlertIssue[] | null {
    const normalized = this.trimText(alertHtml);
    if (!this.cachedAlertIssues) return null;
    if (this.cachedAlertIssues.html !== normalized) return null;
    return this.cachedAlertIssues.issues;
  }

  getCachedRecommendations(
    alertHtml: string,
    criteria: AlertCriteria[],
  ): { output: string; htmls: string[] } | null {
    const key = this.buildRecommendationsCacheKey(alertHtml, criteria);
    if (!this.cachedAlertRecommendations) return null;
    if (this.cachedAlertRecommendations.key !== key) return null;
    return {
      output: this.cachedAlertRecommendations.output,
      htmls: [...this.cachedAlertRecommendations.htmls],
    };
  }

  cacheIssues(alertHtml: string, issues: AlertIssue[]): void {
    const normalized = this.trimText(alertHtml);
    this.cachedAlertIssues = {
      html: normalized,
      issues: issues.map((issue) => ({ ...issue })),
    };
  }

  cacheRecommendations(
    alertHtml: string,
    criteria: AlertCriteria[],
    output: string,
    htmls: string[],
  ): void {
    this.cachedAlertRecommendations = {
      key: this.buildRecommendationsCacheKey(alertHtml, criteria),
      output,
      htmls: htmls.map((h) => String(h)),
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

  private parseRecommendations(text: string): string[] {
    const cleaned = this.stripCodeFences(text);
    const parsed = this.looseJsonParse(cleaned);
    const root: Record<string, unknown> | null =
      parsed && typeof parsed === 'object' ? (parsed as Record<string, unknown>) : null;

    const alertsArray = Array.isArray(root?.['alerts'])
      ? (root?.['alerts'] as unknown[])
      : Array.isArray(parsed)
        ? (parsed as unknown[])
        : [];

      const htmls = alertsArray
        .map((item) => {
          if (typeof item === 'string') return this.sanitizeHtmlSnippet(item.trim());
          if (!item || typeof item !== 'object') return '';
          const obj = item as Record<string, unknown>;
          const html =
            this.cleanString(obj['final_html'] ?? obj['finalHtml'] ?? obj['html']);
          return this.sanitizeHtmlSnippet(html);
        })
        .filter((x) => x);

      return htmls;
    }

    private sanitizeHtmlSnippet(html: string): string {
      if (!html) return html;
      let out = html.replace(/&quot;/g, '"').replace(/\\"/g, '"');
      out = out.replace(/class="\\?\"/g, 'class="');
      out = out.replace(/class="([^"]*)"\s+([a-zA-Z0-9_-]+)=""/g, 'class="$1 $2"');
      return out;
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

  private extractAlerts(html: string): string {
    const trimmed = this.trimText(html, 20000);
    if (!trimmed) return '';
    const doc = new DOMParser().parseFromString(trimmed, 'text/html');
    const alerts = Array.from(doc.querySelectorAll('.alert'));
    if (!alerts.length) return trimmed;
    return alerts.map((el) => el.outerHTML).join('\n');
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

  private buildRecommendationsCacheKey(
    alertHtml: string,
    criteria: AlertCriteria[],
  ): string {
    const normalized = this.trimText(alertHtml);
    const normalizedCriteria = criteria
      .map((item) => ({
        category: item.category.trim(),
        description: item.description.trim(),
        recommendation: item.recommendation.trim(),
      }))
      .sort((a, b) => a.category.localeCompare(b.category, undefined, { sensitivity: 'base' }));
    return JSON.stringify({ html: normalized, criteria: normalizedCriteria });
  }
}
