import { Injectable, inject } from '@angular/core';
import { Subject } from 'rxjs';
import { MessageService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
import { PromptKey, AiModel } from '../data/data.model';
import { OpenRouterService, ChatMessage } from './openrouter.service';
import { UploadStateService } from './upload-state.service';
import { SkillManagerService } from './skill-manager.service';
import type { AlertIssue } from '../components/problems/component-guidance/alerts-guidance/alerts-guidance.component';
import fallbackSeverityJson from '../components/problems/component-guidance/alerts-guidance/severity-include-fallback.json';
import {
  coerceInteractiveResultLeadIns,
  getReportableAlerts,
} from './alert-reportable.utils';

@Injectable({ providedIn: 'root' })
export class AlertAiService {
  private readonly openRouter = inject(OpenRouterService);
  private readonly messageService = inject(MessageService);
  private readonly translate = inject(TranslateService);
  private readonly uploadState = inject(UploadStateService);
  private readonly skillManager = inject(SkillManagerService);
  private readonly issuesUpdatedSubject = new Subject<{
    html: string;
    issues: AlertIssue[];
  }>();
  readonly issuesUpdated$ = this.issuesUpdatedSubject.asObservable();
  // Cache the last analyzed alert HTML so repeat opens of the same page do not re-call the model.
  private cachedAlertIssues: { html: string; issues: AlertIssue[] } | null = null;
  // Fallback metadata fills gaps when the model omits severity/include fields.
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

  private buildModelRotation(requested?: string): string[] {
    // Alerts issue analysis can try the requested model first, then fall through the configured model list.
    const available = this.openRouter.models;
    if (requested && available.includes(requested)) {
      return [requested, ...available.filter((candidate) => candidate !== requested)];
    }
    return available;
  }

  /** Call OpenRouter with the AlertsIssues prompt and return normalized issues. */
  async analyze(
    alertHtml: string,
    pageContext?: string,
    model?: AiModel,
  ): Promise<AlertIssue[]> {
    const cached = this.getCachedIssues(alertHtml);
    if (cached?.length) {
      return cached;
    }
    const startTime = performance.now();
    this.messageService.add({
      severity: 'info',
      summary: this.translate.instant('common.ai.sending'),
      life: 2000,
    });
    const composed = await this.skillManager.composePrompt({
      basePrompt: '',
      queryText: 'analyze canada.ca html alerts for issues and accessibility',
      promptKey: PromptKey.AlertsIssues,
      outputMode: 'json',
      includeReferences: true,
      includeAssets: true,
      requireSkill: true,
    });
    const systemPrompt = composed.prompt;
    //console.log('[AlertAiService] AlertsIssues system prompt:', systemPrompt);
    // Only alert fragments are sent to the model; full-page context is trimmed separately.
    const alerts = this.extractAlerts(alertHtml);
    const userPayload = {
      alerts,
      alertCount: alerts.length,
      pageContext: this.trimText(pageContext),
    };

    const messages: ChatMessage[] = [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: JSON.stringify(userPayload) },
    ];

    // These flags let the service distinguish transport failure, empty output, and successful-but-unusable output.
    let sawResponse = false;
    let generatingNotified = false;
    let errorNotified = false;
    let lastError: unknown | undefined;
    let resolvedIssues: AlertIssue[] = [];
    const modelRotation = this.buildModelRotation(model);
    const primaryModel = modelRotation[0];

    try {
      for (let i = 0; i < modelRotation.length; i += 1) {
        const model = modelRotation[i];
        try {
          const resp = await this.openRouter.call(model, messages, {
            temperature: 0.0,
            title: 'Content Assistant - Alert Guidance',
            throwOnError: true,
          });
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
            this.messageService.add({
              severity: 'info',
              summary: this.translate.instant('common.ai.alertIssuesReceived', {
                model: this.getShortModelName(model),
              }),
              life: 3000,
            });
            if (i > 0 && primaryModel) {
              // Surface model rotation explicitly so the caller can tell when the primary model did not serve the request.
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
      } else if (!resolvedIssues.length && !errorNotified && sawResponse) {
        this.messageService.add({
          severity: 'warn',
          summary: this.translate.instant('common.ai.alertIssuesNotIdentified'),
          life: 5000,
        });
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
    // Cache and emit copied objects so downstream views cannot mutate the shared source array by reference.
    const normalized = this.trimText(alertHtml);
    const copied = issues.map((issue) => ({ ...issue }));
    this.cachedAlertIssues = {
      html: normalized,
      issues: copied,
    };
    this.issuesUpdatedSubject.next({
      html: normalized,
      issues: copied.map((issue) => ({ ...issue })),
    });
  }

  clearCachedIssues(alertHtml?: string): void {
    const normalized = this.trimText(alertHtml);
    if (
      normalized &&
      this.cachedAlertIssues &&
      this.cachedAlertIssues.html !== normalized
    ) {
      return;
    }

    this.cachedAlertIssues = null;
    this.issuesUpdatedSubject.next({
      html: normalized,
      issues: [],
    });
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

  normalizeAlertIssues(
    issues: AlertIssue[],
    options?: { useIncludeFallback?: boolean },
  ): AlertIssue[] {
    // Normalization makes model output predictable before it reaches the guidance UI.
    const useIncludeFallback = options?.useIncludeFallback !== false;
    return issues.map((issue) => {
      const category = this.cleanString(issue.category);
      const description = this.cleanString(issue.description);
      const recommendation = this.cleanString(issue.recommendation);
      const severity = this.normalizeSeverity(issue.severity, category);
      const alertIndex =
        typeof issue.alertIndex === 'number'
          ? issue.alertIndex
          : typeof issue.alertIndex === 'string'
            ? Number.parseInt(issue.alertIndex, 10)
            : undefined;
      const include =
        typeof issue.include === 'boolean'
          ? issue.include
          : useIncludeFallback
            ? this.lookupFallbackInclude(category) ?? true
            : true;
      return {
        ...issue,
        alertIndex: Number.isFinite(alertIndex) ? alertIndex : undefined,
        category,
        description,
        recommendation,
        severity,
        include,
      };
    });
  }

  private getShortModelName(model: string): string {
    // OpenRouter may return version-stamped model ids; normalize them back to the configured model family for display.
    const normalizedModel = (model || '')
      .trim()
      .toLowerCase()
      .replace(/-\d{8,}(?=:[a-z0-9-]+$|$)/g, '');
    const modelKey = (Object.keys(AiModel) as Array<keyof typeof AiModel>).find(
      (key) => {
        const enumValue = (AiModel[key] || '')
          .trim()
          .toLowerCase()
          .replace(/-\d{8,}(?=:[a-z0-9-]+$|$)/g, '');
        return (
          normalizedModel === enumValue ||
          normalizedModel.startsWith(enumValue) ||
          enumValue.startsWith(normalizedModel)
        );
      },
    );
    return modelKey
      ? this.translate.instant(`page.ai-options.model.short.${modelKey}`)
      : model;
  }
  
  private parseIssues(text: string): AlertIssue[] {
    // The model is asked for JSON, but this parser stays defensive around code fences and loose wrappers.
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
        const alertIndexRaw = obj['alert_index'];
        const alertIndex =
          typeof alertIndexRaw === 'number'
            ? alertIndexRaw
            : typeof alertIndexRaw === 'string'
              ? Number.parseInt(alertIndexRaw, 10)
              : undefined;
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
          alertIndex: Number.isFinite(alertIndex) ? alertIndex : undefined,
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

  private extractAlerts(sourceHtml: string): string[] {
    if (!sourceHtml) return [];
    try {
      const doc = new DOMParser().parseFromString(sourceHtml, 'text/html');
      // Issue analysis is intentionally scoped to reportable alerts, excluding
      // hidden decision-path result panels that are not page-level alerts.
      const alerts = getReportableAlerts(doc.body, {
        interactiveResultLeadIns: this.getInteractiveResultLeadIns(),
      });
      return alerts.map((el) => el.outerHTML);
    } catch (err) {
      console.warn('Failed to extract alerts from HTML', err);
      return [];
    }
  }

  private getInteractiveResultLeadIns(): string[] {
    return coerceInteractiveResultLeadIns(
      this.translate.instant('page.alerts.interactiveResultLeadIns'),
    );
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
