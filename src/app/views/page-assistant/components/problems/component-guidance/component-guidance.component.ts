// src/app/views/page-assistant/components/tools/component-guidance.component.ts
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipModule } from 'primeng/chip';
import { TooltipModule } from 'primeng/tooltip';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { MessageService, SortEvent } from 'primeng/api';
import {
  AlertsGuidanceComponent,
  ALERT_SEVERITY_RANK,
  computeAlertCategories,
  computeAlertMaxSeverity,
} from './alerts-guidance/alerts-guidance.component';

import { UploadStateService } from '../../../services/upload-state.service';
import { ValidatorService } from '../../../services/validator.service';
import { AlertAiService } from '../../../services/alert-ai.service';
import {
  coerceInteractiveResultLeadIns,
  getReportableAlertsFromHtml,
} from '../../../services/alert-reportable.utils';
import {
  ComponentAiService,
  ComponentAiInput,
  ComponentAiResult,
} from '../../../services/component-ai.service';

import { HttpClient } from '@angular/common/http';
import { Subscription, firstValueFrom } from 'rxjs';
import { environment } from '../../../../../../environments/environment';
import { ChangeDetectorRef } from '@angular/core';
import { AiModel, PromptKey } from '../../../data/data.model';
import { ChatMessage, OpenRouterService } from '../../../services/openrouter.service';
import { SkillManagerService } from '../../../services/skill-manager.service';

// UI shows these:
type UiHealth = 'severe' | 'minor' | 'ok' | 'unknown';

interface GuidanceRow {
  order: number;
  component: string; // translated label
  url: string; // translated URL
  // AI fields mapped to UI:
  health: UiHealth;
  codeUpToDate?: boolean;
  issues?: string[];
  rationale?: string;
  // internal:
  __nameKey?: string;
  __urlKey?: string;
  __id?: string;
}

interface TopicDoormatIssueRow {
  include: boolean;
  severity: string;
  doormat: string;
  issue: string;
  evidence: string;
  recommendation: string;
  doormatIndex?: number;
}

interface TopicDoormatSummary {
  index: number;
  linkText: string;
  href: string;
  description: string;
  linkTextCharacterCount: number;
  descriptionCharacterCount: number;
  sectionIndex: number;
  sectionItemIndex: number;
  sectionDoormatCount: number;
}

@Component({
  selector: 'ca-component-guidance',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ButtonModule,
    CheckboxModule,
    ChipModule,
    TooltipModule,
    TranslateModule,
    AlertsGuidanceComponent,
  ],
  templateUrl: './component-guidance.component.html',
  styleUrls: ['./component-guidance.component.css'],
  styles: [
    `
      .muted {
        color: #6b7280;
        font-size: 12px;
      }
      .issues {
        margin: 0;
        padding-left: 1rem;
      }
      .health-cell {
        /* display: flex; */
        gap: 0.4rem;
        align-items: center;
        flex-wrap: wrap;
      }
      .chip-list {
        display: flex;
        flex-wrap: wrap;
        gap: 0.25rem;
        padding: 0;
        margin: 0;
      }
      .chip-list .chip,
      .chip-list .p-chip {
        white-space: normal;
        word-break: break-word;
        max-width: 100%;
      }
      .expansion-table {
        width: 100%;
        max-width: 100%;
        overflow: hidden;
      }
      /* Expansion tables */
      :host ::ng-deep .expansion-table .p-datatable-table {
        width: 100%;
        border: 1px solid #d1d5db;
        border-radius: 6px;
      }
      :host ::ng-deep .expansion-table .p-datatable-wrapper {
        width: 100%;
        overflow-x: auto;
      }
      :host ::ng-deep .expansion-table .p-datatable-tbody > tr > td,
      :host ::ng-deep .expansion-table .p-datatable-thead > tr > th {
        white-space: normal;
        word-break: normal;
        overflow-wrap: normal;
      }

      .tag {
        font-size: 11px;
        padding: 0.05rem 0.4rem;
        border-radius: 6px;
        border: 1px solid transparent;
      }

      .ai-btn {
        font-weight: 600;
      }
      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
    `,
    `
      .caption-actions {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 0.5rem;
      }
    `,
  ],
})
export class ComponentGuidanceComponent implements OnInit, OnDestroy {
  private uploadState = inject(UploadStateService);
  private translate = inject(TranslateService);
  private validator = inject(ValidatorService);
  private http = inject(HttpClient);
  private ai = inject(ComponentAiService);
  private alertAi = inject(AlertAiService);
  private cdr = inject(ChangeDetectorRef);
  private openRouter = inject(OpenRouterService);
  private skillManager = inject(SkillManagerService);
  private messageService = inject(MessageService);
  private alertIssuesSub?: Subscription;
  private readonly topicDoormatDebugStorageKey =
    'pageAssistant.topicDoormatDebug';
  private readonly topicDoormatIssueLengthLimits: Record<string, number> = {
    'link-name-too-long': 35,
    'description-too-long': 120,
  };

  production: boolean = environment.production;

  guidanceList: { id?: string; name: string; url: string }[] = [];
  rows: GuidanceRow[] = [];
  alertCategories: { label: string; severity: string }[] = [];
  alertMaxSeverity: string | null = null;
  alertSelectAll = true;
  alertLoading = false;
  alertHasIssues = false;
  alertDataLoaded = false;
  alertLoadAttempted = false;
  alertError = false;
  topicDoormatIssuesLoading = false;
  topicDoormatIssuesResponseReceived = false;
  topicDoormatIssuesError = false;
  topicDoormatIssuesErrorDetail = '';
  topicDoormatIssueRows: TopicDoormatIssueRow[] = [];
  private prevAlertHasIssues = false;

  // multi-select
  selectedRows: GuidanceRow[] = [];
  isLoading = false;
  // controlled expansion keys for PrimeNG table
  expandedRows: Record<string, boolean> = {};
  readonly alertsNameKey = 'page.tools.guidance.craVariant.alerts.title';
  readonly topicDoormatsId = 'topicDoormats';
  readonly subwayDoormatsId = 'subwayDoormats';

  cols = [
    { field: 'order', header: 'Index' },
    { field: 'component', header: 'Component' },
    { field: 'url', header: 'UCDG guidance' },
    { field: 'health', header: 'Component health' },
    { field: 'rationale', header: 'Explanation' },
  ];

  // rank for custom sort (severe > minor > ok > unknown)
  private readonly HEALTH_RANK: Record<UiHealth, number> = {
    severe: 3,
    minor: 2,
    ok: 1,
    unknown: 0,
  };

  ngOnInit() {
    const data = this.uploadState.getUploadData();
    if (data?.originalHtml) {
      this.guidanceList = this.validator.collectGuidanceUrls(data.originalHtml);
      this.rows = this.buildRows(this.guidanceList);
      this.removeAlertRowWhenNoReportableAlerts(data.originalHtml);
      this.removeTopicDoormatRowWhenNoTopicDoormats(data.originalHtml);
      this.syncAlertRowSelection();
    }
    this.applyCachedAlertIssues();
    this.alertIssuesSub = this.alertAi.issuesUpdated$.subscribe(() => {
      this.applyCachedAlertIssues();
    });
  }

  ngOnDestroy(): void {
    this.alertIssuesSub?.unsubscribe();
  }

  /** Build sorted, de-duped table rows from validator findings. */
  private buildRows(list: { id?: string; name: string; url: string }[]): GuidanceRow[] {
    const unique = new Map<string, { id?: string; nameKey: string; urlKey: string }>();
    for (const g of list) {
      const key = `${g.id ?? g.name}|${g.name}|${g.url}`;
      if (!unique.has(key)) {
        unique.set(key, { id: g.id, nameKey: g.name, urlKey: g.url });
      }
    }

    const resolved = Array.from(unique.values()).map((it) => ({
      component: this.translate.instant(it.nameKey) || it.nameKey,
      url: this.translate.instant(it.urlKey) || it.urlKey,
      __id: it.id,
      __nameKey: it.nameKey,
      __urlKey: it.urlKey,
    }));

    resolved.sort((a, b) => {
      const rankDiff =
        this.getGuidanceSortRank(a.__nameKey, a.__id) -
        this.getGuidanceSortRank(b.__nameKey, b.__id);
      if (rankDiff !== 0) return rankDiff;

      return a.component.localeCompare(b.component, undefined, {
        sensitivity: 'base',
      });
    });

    return resolved.map((r, i) => ({
      order: i + 1,
      component: r.component,
      url: r.url,
      __id: r.__id,
      __nameKey: r.__nameKey,
      __urlKey: r.__urlKey,
      health: 'unknown',
    }));
  }

  private removeAlertRowWhenNoReportableAlerts(html: string): void {
    const reportableAlerts = getReportableAlertsFromHtml(html, {
      interactiveResultLeadIns: this.getInteractiveResultLeadIns(),
    });
    if (reportableAlerts.length) return;

    this.rows = this.rows.filter((row) => row.__nameKey !== this.alertsNameKey);
    this.selectedRows = this.selectedRows.filter(
      (row) => row.__nameKey !== this.alertsNameKey,
    );
    this.reindexRows();
  }

  private removeTopicDoormatRowWhenNoTopicDoormats(html: string): void {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    if (doc.querySelector('.gc-srvinfo')) return;

    this.rows = this.rows.filter(
      (row) => row.__id !== this.topicDoormatsId,
    );
    this.selectedRows = this.selectedRows.filter(
      (row) => row.__id !== this.topicDoormatsId,
    );
    this.reindexRows();
  }

  private getGuidanceSortRank(nameKey?: string, id?: string): number {
    if (nameKey === this.alertsNameKey) return 0;
    if (id === this.topicDoormatsId) return 1;
    return 2;
  }

  private reindexRows(): void {
    this.rows.forEach((row, index) => {
      row.order = index + 1;
    });
  }

  private getInteractiveResultLeadIns(): string[] {
    return coerceInteractiveResultLeadIns(
      this.translate.instant('page.alerts.interactiveResultLeadIns'),
    );
  }

  /** Click handler for the GenAI button. */
  async sendToAI(): Promise<void> {
    if (!this.selectedRows.length || this.isLoading) return;
    this.isLoading = true;

    try {
      const html = this.uploadState.getUploadData()?.originalHtml || '';
      const doc = new DOMParser().parseFromString(html, 'text/html');

      // Build inputs for selected rows
      const inputs: ComponentAiInput[] = this.selectedRows.map((row) => ({
        componentLabel: row.component,
        guidanceUrl: row.url,
        htmlSnippet: this.findSnippetForRow(doc) || this.trimHtml(html, 8000),
      }));

      const results = await this.ai.assess(inputs);
      this.applyResults(results);
    } finally {
      this.isLoading = false;
    }
  }

  /** Try to find a compact snippet in the current page that matches the component */
  private findSnippetForRow(doc: Document): string | null {
    const candidate = doc.querySelector('[class]');
    if (!candidate) return null;
    const html = candidate.outerHTML;
    return html.length > 2000 ? html.slice(0, 2000) : html;
  }

  private trimHtml(s: string, max = 12000): string {
    const t = (s || '').replace(/\s+/g, ' ').trim();
    return t.length > max ? t.slice(0, max) : t;
  }

  /** Merge AI outputs back into table rows (derive 4-state UI health) */
  private applyResults(results: ComponentAiResult[]) {
    const byLabel = new Map(results.map((r) => [r.componentLabel, r]));

    this.rows = this.rows.map((r) => {
      const ai = byLabel.get(r.component);
      if (!ai) return r;

      // collect issues (content issues + code outdated counts as an issue)
      const issues = [...(ai.issues ?? [])];
      if (ai.codeUpToDate === false) {
        issues.push('Code not up to date');
      }

      const uiHealth: UiHealth =
        ai.health === 'unknown'
          ? 'unknown'
          : issues.length >= 2
            ? 'severe'
            : issues.length === 1
              ? 'minor'
              : 'ok';

      const out: GuidanceRow = {
        ...r,
        health: uiHealth,
        codeUpToDate: ai.codeUpToDate,
        issues,
        rationale: ai.rationale || '',
      };
      return out;
    });
  }

  // ---- Sorting (Index & Health only) ----

  /** Map UI health to a numeric rank for sorting. */
  private healthRank(h: UiHealth | undefined | null): number {
    return this.HEALTH_RANK[(h ?? 'unknown') as UiHealth];
  }

  /** Custom sort: supports 'order' (numeric) and 'health' (by rank). */
  onCustomSort(event: SortEvent): void {
    const data = (event.data ?? []) as GuidanceRow[];
    const order = (event.order ?? 1) as 1 | -1;
    const field = (event.field ?? '') as keyof GuidanceRow;

    if (!Array.isArray(data) || data.length === 0) return;

    switch (field) {
      case 'order': {
        data.sort((a, b) => (a.order - b.order) * order);
        break;
      }
      case 'health': {
        data.sort(
          (a, b) =>
            (this.healthRank(a.health) - this.healthRank(b.health)) * order,
        );
        break;
      }
      default:
        // no-op: we don't sort other columns
        break;
    }
  }

  /** Label used in the chip */
  healthLabel(h?: UiHealth | null): string {
    switch (h) {
      case 'severe':
        return 'Severe';
      case 'minor':
        return 'Minor';
      case 'ok':
        return 'OK';
      default:
        return 'Unknown';
    }
  }

  private normalizeCategoryLabel(label: string): string {
    const trimmed = (label || '').trim();
    if (!trimmed) return trimmed;
    const lower = trimmed.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

  private applyCachedAlertIssues(): void {
    const html = this.uploadState.getUploadData()?.originalHtml || '';
    if (!html) return;
    const cached = this.alertAi.getCachedIssues(html);
    if (!cached?.length) return;

      const normalizedIssues = this.alertAi.normalizeAlertIssues(cached).map(
        (issue) => ({
          ...issue,
          category: this.normalizeCategoryLabel(issue.category),
        }),
      );
    this.alertCategories = this.sortCategories(
      computeAlertCategories(normalizedIssues),
    );
    this.alertMaxSeverity = computeAlertMaxSeverity(normalizedIssues);
    this.alertHasIssues = normalizedIssues.length > 0;
    this.alertLoading = false;
    this.alertError = false;
    this.alertLoadAttempted = true;
    this.alertDataLoaded = true;
    this.syncAlertRowSelection();
    this.prevAlertHasIssues = this.alertHasIssues;
    this.cdr.markForCheck();
  }

  isDoormatRow(row: GuidanceRow): boolean {
    return (
      row.__id === this.topicDoormatsId ||
      row.__id === this.subwayDoormatsId
    );
  }

  // (leftover dev helper if you still need it)
  // TEMP FXN FOR BUILDING WHITELIST
  classes: string[] = [];
  async extractCSS(url: string): Promise<string[]> {
    const css = await firstValueFrom(
      this.http.get(url, { responseType: 'text' }),
    );
    const classPattern = /\.([a-zA-Z0-9_-]+)/g;
    const classes = new Set<string>();
    let match: RegExpExecArray | null;
    while ((match = classPattern.exec(css)) !== null) classes.add(match[1]);
    return [...classes].sort();
  }

  // Expose computed table rows if you still want via getter:
  get tableRows(): GuidanceRow[] {
    return this.rows;
  }

  // ---- Row expansion control (for PrimeNG controlled expansion) ----
  onRowExpand(event: any): void {
    const key = event?.data?.url;
    if (!key) return;
    this.expandedRows = { ...this.expandedRows, [key]: true };
    if (event?.data?.__id === this.topicDoormatsId) {
      void this.analyzeTopicDoormatIssues();
    }
  }

  onRowCollapse(event: any): void {
    const key = event?.data?.url;
    if (!key) return;
    const copy = { ...this.expandedRows };
    delete copy[key];
    this.expandedRows = copy;
  }

  expandAll(): void {
    this.expandedRows = Object.fromEntries(this.tableRows.map((r) => [r.url, true]));
  }

  collapseAll(): void {
    this.expandedRows = {};
  }

  private async analyzeTopicDoormatIssues(): Promise<void> {
    if (
      this.topicDoormatIssuesLoading ||
      this.topicDoormatIssuesResponseReceived
    ) {
      return;
    }

    const html = this.uploadState.getUploadData()?.originalHtml || '';
    const doormatSets = this.extractTopicDoormatSets(html);
    if (!doormatSets.length) return;
    const analysisStart = performance.now();
    const mostRequestedLinks = this.extractMostRequestedLinks(html);
    const doormatSummaries = this.extractTopicDoormatSummaries(html);

    this.topicDoormatIssuesLoading = true;
    this.topicDoormatIssuesError = false;
    this.topicDoormatIssuesErrorDetail = '';

    try {
      const composed = await this.skillManager.composePrompt({
        basePrompt: '',
        queryText:
          'analyze topic doormats gc-srvinfo issue report for each doormat',
        promptKey: PromptKey.Doormats,
        outputMode: 'json',
        includeReferences: true,
        includeAssets: true,
        requireSkill: true,
      });

      const messages: ChatMessage[] = [
        { role: 'system', content: composed.prompt },
        {
          role: 'user',
          content: JSON.stringify({
            doormatSets,
            doormats: doormatSummaries,
            mostRequestedLinks,
          }),
        },
      ];
      const selectedModel = this.uploadState.getSelectedAiModel();
      const modelRotation = this.buildTopicDoormatModelRotation(selectedModel);
      this.debugTopicDoormatIssues('request prepared', {
        selectedModel,
        modelRotation,
        doormatSetCount: doormatSets.length,
        doormatSummaryCount: doormatSummaries.length,
        sectionCounts: this.buildTopicDoormatSectionCounts(doormatSummaries),
        overLimitSummaryIndexes:
          this.getTopicDoormatOverLimitSectionIndexes(doormatSummaries),
        doormatSummaries: doormatSummaries.map((summary) => ({
          index: summary.index,
          linkText: summary.linkText,
          linkTextCharacterCount: summary.linkTextCharacterCount,
          descriptionCharacterCount: summary.descriptionCharacterCount,
          sectionIndex: summary.sectionIndex,
          sectionItemIndex: summary.sectionItemIndex,
          sectionDoormatCount: summary.sectionDoormatCount,
        })),
        mostRequestedLinkCount: mostRequestedLinks.length,
        loadedSkillResources: composed.loadedPaths,
        estimatedSystemPromptTokens: composed.estimatedPromptTokens,
        systemPromptCharacters: composed.prompt.length,
        userPayloadCharacters: messages[1].content.length,
        totalMessageCharacters: messages.reduce(
          (total, message) => total + message.content.length,
          0,
        ),
      });

      const { text, model } = await this.callTopicDoormatIssuesWithFallback(
        messages,
        modelRotation,
      );
      this.topicDoormatIssuesResponseReceived = !!text;
      if (text) {
        this.messageService.add({
          severity: 'info',
          summary: this.translate.instant('common.ai.generating'),
          life: 2000,
        });
      }
      this.topicDoormatIssueRows = text
        ? this.parseTopicDoormatIssueRows(text, doormatSummaries)
        : [];
      this.debugTopicDoormatIssues('response parsed', {
        model,
        responseCharacters: text.length,
        parsedIssueRows: this.topicDoormatIssueRows.length,
        totalElapsedMs: Math.round(performance.now() - analysisStart),
      });
      if (!text) {
        this.topicDoormatIssuesError = true;
        this.topicDoormatIssuesErrorDetail =
          'The model response was empty or did not include message content.';
      } else {
        this.messageService.add({
          severity: 'info',
          summary: this.translate.instant('common.ai.topicDoormatIssuesReceived', {
            model: this.getShortModelName(model),
          }),
          sticky: true,
        });
        const primaryModel = modelRotation[0];
        if (model !== primaryModel) {
          this.messageService.add({
            severity: 'warn',
            summary: this.translate.instant('common.ai.fallback.summary'),
            detail: this.translate.instant('common.ai.fallback.detail', {
              requested: primaryModel,
              used: model,
            }),
            sticky: true,
          });
        }
        this.messageService.add({
          severity: 'success',
          summary: this.translate.instant('common.ai.responseReceived.summary'),
          detail: this.translate.instant('common.ai.responseReceived.detail'),
          sticky: true,
        });
      }
    } catch (err) {
      this.topicDoormatIssuesError = true;
      const detail =
        err instanceof Error
          ? err.message
          : this.translate.instant('common.ai.requestFailed.detailUnknown');
      this.debugTopicDoormatIssues('request failed', {
        error: detail,
        totalElapsedMs: Math.round(performance.now() - analysisStart),
      });
      this.topicDoormatIssuesErrorDetail = detail;
      this.messageService.add({
        severity: 'error',
        summary: this.translate.instant('common.ai.requestFailed.summary'),
        detail,
        sticky: true,
      });
    } finally {
      this.topicDoormatIssuesLoading = false;
      this.cdr.markForCheck();
    }
  }

  private async callTopicDoormatIssuesWithFallback(
    messages: ChatMessage[],
    models: string[],
  ): Promise<{ text: string; model: string }> {
    let lastError: unknown;

    for (let index = 0; index < models.length; index += 1) {
      const model = models[index];
      const modelStart = performance.now();
      try {
        this.debugTopicDoormatIssues('model attempt started', {
          attempt: index + 1,
          totalAttempts: models.length,
          model,
        });
        const resp = await this.openRouter.call(model, messages, {
          temperature: 0,
          title: 'Content Assistant - Topic Doormat Issues',
          throwOnError: true,
        });
        const text = resp?.choices?.[0]?.message?.content?.trim() || '';
        if (text) {
          this.debugTopicDoormatIssues('model attempt succeeded', {
            attempt: index + 1,
            model,
            elapsedMs: Math.round(performance.now() - modelStart),
            responseCharacters: text.length,
          });
          return { text, model };
        }
        this.debugTopicDoormatIssues('model attempt returned empty content', {
          attempt: index + 1,
          model,
          elapsedMs: Math.round(performance.now() - modelStart),
        });
      } catch (err) {
        lastError = err;
        this.debugTopicDoormatIssues('model attempt failed', {
          attempt: index + 1,
          model,
          elapsedMs: Math.round(performance.now() - modelStart),
          error: err instanceof Error ? err.message : String(err),
        });
      }
    }

    throw lastError instanceof Error
      ? lastError
      : new Error(this.translate.instant('common.ai.errorCommunicatingOpenRouter'));
  }

  private buildTopicDoormatModelRotation(requested?: string): string[] {
    const freeModels = this.openRouter.freeModels;
    if (requested && this.openRouter.models.includes(requested)) {
      return [
        requested,
        ...freeModels.filter((candidate) => candidate !== requested),
      ];
    }
    return freeModels;
  }

  private getShortModelName(model: string): string {
    const normalizedModel = (model || '')
      .replace(/-\d{4}-\d{2}-\d{2}$/, '')
      .replace(/:free$/, ':free');
    const modelKey = (Object.keys(AiModel) as Array<keyof typeof AiModel>).find(
      (key) =>
        AiModel[key] === model ||
        AiModel[key] === normalizedModel ||
        model.startsWith(AiModel[key]),
    );
    return modelKey
      ? this.translate.instant(`page.ai-options.model.short.${modelKey}`)
      : model;
  }

  private debugTopicDoormatIssues(
    event: string,
    details: Record<string, unknown>,
  ): void {
    if (!this.isTopicDoormatDebugEnabled()) return;
    console.debug(`[TopicDoormatIssues] ${event}`, details);
  }

  private isTopicDoormatDebugEnabled(): boolean {
    try {
      return localStorage.getItem(this.topicDoormatDebugStorageKey) === 'true';
    } catch {
      return false;
    }
  }

  private parseTopicDoormatIssueRows(
    text: string,
    doormatSummaries: TopicDoormatSummary[] = [],
  ): TopicDoormatIssueRow[] {
    const parsed = this.looseJsonParse(this.stripCodeFences(text));
    if (!parsed || typeof parsed !== 'object') {
      const fallbackRows = this.buildTopicDoormatFallbackRows(doormatSummaries);
      this.debugTopicDoormatIssues('response parse fallback', {
        reason: 'invalid-json-or-non-object',
        doormatSummaryCount: doormatSummaries.length,
        fallbackRows: fallbackRows.length,
      });
      return fallbackRows;
    }
    const root = parsed as Record<string, unknown>;
    const doormats = Array.isArray(root['doormats']) ? root['doormats'] : [];

    const summariesByIndex = new Map(
      doormatSummaries.map((summary) => [summary.index, summary]),
    );

    const rows: TopicDoormatIssueRow[] = doormats.flatMap((rawDoormat) => {
      if (!rawDoormat || typeof rawDoormat !== 'object') return [];
      const doormat = rawDoormat as Record<string, unknown>;
      const index = this.toNumber(doormat['doormat_index']);
      const linkText = this.cleanString(doormat['link_text']);
      const href = this.cleanString(doormat['href']);
      const issues = Array.isArray(doormat['issues']) ? doormat['issues'] : [];
      const summary = index ? summariesByIndex.get(index) : undefined;
      const label = [index ? `${index}.` : '', linkText || href || 'Doormat']
        .filter(Boolean)
        .join(' ');

      if (!issues.length) {
        return [
          this.buildTopicDoormatNoIssueRow(
            summary ?? {
              index: index ?? 0,
              linkText,
              href,
              description: '',
              linkTextCharacterCount: linkText.length,
              descriptionCharacterCount: 0,
              sectionIndex: 0,
              sectionItemIndex: 0,
              sectionDoormatCount: 0,
            },
          ),
        ];
      }

      return issues
        .map((rawIssue): TopicDoormatIssueRow | null => {
          if (!rawIssue || typeof rawIssue !== 'object') return null;
          const issue = rawIssue as Record<string, unknown>;
          if (!this.isReportableTopicDoormatIssue(issue, summary)) return null;
          const evidence = this.buildTopicDoormatEvidence(issue, summary);
          return {
            include:
              typeof issue['include'] === 'boolean'
                ? issue['include']
                : true,
            severity: this.cleanString(issue['severity']) || 'Unknown',
            doormat: label,
            issue: this.cleanString(issue['issue_category']) || 'Issue',
            evidence,
            recommendation: this.cleanString(issue['recommendation']),
            doormatIndex: index ?? undefined,
          } satisfies TopicDoormatIssueRow;
        })
        .filter((row): row is TopicDoormatIssueRow => row !== null);
    });

    const deterministicRows = this.buildDeterministicTopicDoormatIssueRows(
      doormatSummaries,
      rows,
    );

    const representedIndexes = new Set(
      [...rows, ...deterministicRows]
        .map((row) => row.doormatIndex)
        .filter((index): index is number => typeof index === 'number' && index > 0),
    );
    const missingNoIssueRows = doormatSummaries
      .filter((summary) => !representedIndexes.has(summary.index))
      .map((summary) => this.buildTopicDoormatNoIssueRow(summary));

    const resolvedRows = this.removeConflictingTopicDoormatNoIssueRows([
      ...rows,
      ...deterministicRows,
      ...missingNoIssueRows,
    ].sort((a, b) => {
      const aIndex = a.doormatIndex ?? Number.MAX_SAFE_INTEGER;
      const bIndex = b.doormatIndex ?? Number.MAX_SAFE_INTEGER;
      return aIndex - bIndex;
    }));
    this.debugTopicDoormatIssues('response row resolution', {
      modelDoormatCount: doormats.length,
      doormatSummaryCount: doormatSummaries.length,
      sectionCounts: this.buildTopicDoormatSectionCounts(doormatSummaries),
      overLimitSummaryIndexes:
        this.getTopicDoormatOverLimitSectionIndexes(doormatSummaries),
      parsedIssueRows: rows.length,
      fallbackNoIssueRows: missingNoIssueRows.length,
      deterministicRows: deterministicRows.length,
      resolvedRows: resolvedRows.length,
    });
    return resolvedRows;
  }

  private removeConflictingTopicDoormatNoIssueRows(
    rows: TopicDoormatIssueRow[],
  ): TopicDoormatIssueRow[] {
    const indexesWithIssues = new Set(
      rows
        .filter((row) => !this.isNoIssueRow(row))
        .map((row) => row.doormatIndex)
        .filter((index): index is number => typeof index === 'number' && index > 0),
    );

    return rows.filter(
      (row) =>
        !this.isNoIssueRow(row) ||
        !row.doormatIndex ||
        !indexesWithIssues.has(row.doormatIndex),
    );
  }

  private buildTopicDoormatFallbackRows(
    doormatSummaries: TopicDoormatSummary[],
  ): TopicDoormatIssueRow[] {
    return doormatSummaries.map((summary) =>
      this.buildTopicDoormatNoIssueRow(summary),
    );
  }

  private buildDeterministicTopicDoormatIssueRows(
    doormatSummaries: TopicDoormatSummary[],
    existingRows: TopicDoormatIssueRow[],
  ): TopicDoormatIssueRow[] {
    const existingIssueKeys = new Set(
      existingRows.map((row) => `${row.doormatIndex ?? 0}|${row.issue}`),
    );

    return doormatSummaries.flatMap((summary) => {
      if (
        summary.sectionDoormatCount <= 9 ||
        summary.sectionItemIndex <= 9 ||
        existingIssueKeys.has(
          `${summary.index}|too-many-doormats-in-section`,
        )
      ) {
        return [];
      }

      return [
        {
          include: true,
          severity: 'Medium',
          doormat: this.buildTopicDoormatLabel(summary),
          issue: 'too-many-doormats-in-section',
          evidence: `${summary.sectionDoormatCount}/9 doormats in section ${summary.sectionIndex}; item ${summary.sectionItemIndex}`,
          recommendation:
            'Reduce the section to 9 doormats or split lower-priority destinations into another section.',
          doormatIndex: summary.index,
        } satisfies TopicDoormatIssueRow,
      ];
    });
  }

  private buildTopicDoormatSectionCounts(
    doormatSummaries: TopicDoormatSummary[],
  ): { sectionIndex: number; count: number }[] {
    const counts = new Map<number, number>();
    doormatSummaries.forEach((summary) => {
      if (!summary.sectionIndex) return;
      counts.set(
        summary.sectionIndex,
        Math.max(counts.get(summary.sectionIndex) ?? 0, summary.sectionDoormatCount),
      );
    });
    return Array.from(counts.entries())
      .map(([sectionIndex, count]) => ({ sectionIndex, count }))
      .sort((a, b) => a.sectionIndex - b.sectionIndex);
  }

  private getTopicDoormatOverLimitSectionIndexes(
    doormatSummaries: TopicDoormatSummary[],
  ): number[] {
    return doormatSummaries
      .filter(
        (summary) =>
          summary.sectionDoormatCount > 9 && summary.sectionItemIndex > 9,
      )
      .map((summary) => summary.index);
  }

  private buildTopicDoormatNoIssueRow(
    doormat: TopicDoormatSummary,
  ): TopicDoormatIssueRow {
    return {
      include: false,
      severity: 'OK',
      doormat: this.buildTopicDoormatLabel(doormat),
      issue: 'No issues',
      evidence: 'No issues reported by AI.',
      recommendation: '',
      doormatIndex: doormat.index || undefined,
    };
  }

  private buildTopicDoormatLabel(doormat: TopicDoormatSummary): string {
    return [
      doormat.index ? `${doormat.index}.` : '',
      doormat.linkText || doormat.href || 'Doormat',
    ]
      .filter(Boolean)
      .join(' ');
  }

  private isReportableTopicDoormatIssue(
    issue: Record<string, unknown>,
    doormat?: TopicDoormatSummary,
  ): boolean {
    const issueCategory = this.cleanString(issue['issue_category']);
    if (
      issueCategory !== 'link-name-too-long' &&
      issueCategory !== 'description-too-long'
    ) {
      return true;
    }

    const exactCount = this.getTopicDoormatExactCharacterCount(
      issueCategory,
      doormat,
    );
    if (exactCount == null) return true;

    const details =
      issue['evidence_details'] && typeof issue['evidence_details'] === 'object'
        ? (issue['evidence_details'] as Record<string, unknown>)
        : null;
    const limit =
      this.toNumber(details?.['character_limit']) ??
      this.topicDoormatIssueLengthLimits[issueCategory];
    if (limit == null) return true;

    return exactCount > limit;
  }

  private buildTopicDoormatEvidence(
    issue: Record<string, unknown>,
    doormat?: TopicDoormatSummary,
  ): string {
    const evidence = this.cleanString(issue['evidence']);
    const issueCategory = this.cleanString(issue['issue_category']);
    const details =
      issue['evidence_details'] && typeof issue['evidence_details'] === 'object'
        ? (issue['evidence_details'] as Record<string, unknown>)
        : null;
    const detailParts: string[] = [];

    if (details) {
      const count =
        this.getTopicDoormatExactCharacterCount(issueCategory, doormat) ??
        this.toNumber(details['actual_character_count']);
      const limit = this.toNumber(details['character_limit']);
      if (count != null && limit != null) {
        detailParts.push(`${count}/${limit} characters`);
      }

      const doormatHref = this.cleanString(details['doormat_href']);
      const mostRequestedHref = this.cleanString(details['most_requested_href']);
      if (doormatHref || mostRequestedHref) {
        detailParts.push(
          `Doormat: ${doormatHref || 'n/a'}; Most requested: ${
            mostRequestedHref || 'n/a'
          }`,
        );
      }

      const destinationTitle = this.cleanString(details['destination_page_title']);
      if (destinationTitle) {
        detailParts.push(`Destination title: ${destinationTitle}`);
      }
    }

    const builtEvidence = [evidence, ...detailParts].filter(Boolean).join(' ');
    if (builtEvidence) return builtEvidence;

    if (issueCategory === 'duplicate-link-in-most-requested') {
      return 'Link also appears in Most requested';
    }

    return '';
  }

  private getTopicDoormatExactCharacterCount(
    issueCategory: string,
    doormat?: TopicDoormatSummary,
  ): number | null {
    if (!doormat) return null;
    if (issueCategory === 'link-name-too-long') {
      return doormat.linkTextCharacterCount;
    }
    if (issueCategory === 'description-too-long') {
      return doormat.descriptionCharacterCount;
    }
    return null;
  }

  private stripCodeFences(value: string): string {
    return value
      .replace(/^```(?:json)?\s*/i, '')
      .replace(/\s*```$/i, '')
      .trim();
  }

  private looseJsonParse(value: string): unknown | null {
    try {
      return JSON.parse(value);
    } catch {
      const match = value.match(/\{[\s\S]*\}/);
      if (!match) return null;
      try {
        return JSON.parse(match[0]);
      } catch {
        return null;
      }
    }
  }

  private toNumber(value: unknown): number | null {
    const num =
      typeof value === 'number'
        ? value
        : typeof value === 'string'
          ? Number.parseInt(value, 10)
          : Number.NaN;
    return Number.isFinite(num) ? num : null;
  }

  private cleanString(value: unknown): string {
    return typeof value === 'string' ? value.trim() : '';
  }

  private cleanVisibleText(value: string | null | undefined): string {
    return (value || '').replace(/\s+/g, ' ').trim();
  }

  private extractTopicDoormatSets(html: string): string[] {
    if (!html) return [];
    try {
      const doc = new DOMParser().parseFromString(html, 'text/html');
      return Array.from(doc.querySelectorAll<HTMLElement>('.gc-srvinfo')).map(
        (set) => set.outerHTML,
      );
    } catch {
      return [];
    }
  }

  private extractTopicDoormatSummaries(html: string): TopicDoormatSummary[] {
    if (!html) return [];
    try {
      const doc = new DOMParser().parseFromString(html, 'text/html');
      const seen = new Set<string>();
      const summaries: TopicDoormatSummary[] = [];
      const sections = Array.from(doc.querySelectorAll<HTMLElement>('.gc-srvinfo'));

      sections.forEach((section, sectionIndex) => {
        const links = Array.from(
          section.querySelectorAll<HTMLAnchorElement>('h2 a, h3 a'),
        );
        const sectionSummaries: TopicDoormatSummary[] = [];

        for (const link of links) {
          const linkText = this.cleanVisibleText(link.textContent);
          const href = link.getAttribute('href') || '';
          const key = `${href}|${linkText}`;
          if (!linkText && !href) continue;
          if (seen.has(key)) continue;
          seen.add(key);
          const item = this.findTopicDoormatItem(link);
          const description = this.cleanVisibleText(
            item?.querySelector('p')?.textContent,
          );
          sectionSummaries.push({
            index: summaries.length + sectionSummaries.length + 1,
            linkText,
            href,
            description,
            linkTextCharacterCount: linkText.length,
            descriptionCharacterCount: description.length,
            sectionIndex: sectionIndex + 1,
            sectionItemIndex: sectionSummaries.length + 1,
            sectionDoormatCount: 0,
          });
        }

        sectionSummaries.forEach((summary) => {
          summary.sectionDoormatCount = sectionSummaries.length;
          summaries.push(summary);
        });
      });

      return summaries;
    } catch {
      return [];
    }
  }

  private findTopicDoormatItem(link: HTMLAnchorElement): HTMLElement | null {
    let current: HTMLElement | null = link;
    while (current && !current.classList.contains('gc-srvinfo')) {
      if (current !== link && current.querySelector('p')) return current;
      current = current.parentElement;
    }
    return null;
  }

  private extractMostRequestedLinks(html: string): {
    text: string;
    href: string;
  }[] {
    if (!html) return [];
    try {
      const doc = new DOMParser().parseFromString(html, 'text/html');
      const selectors = [
        '.gc-most-requested a',
        '.most-requested a',
        '.most-requested-bullets a',
      ];
      return selectors.flatMap((selector) =>
        Array.from(doc.querySelectorAll<HTMLAnchorElement>(selector)).map(
          (link) => ({
            text: this.cleanString(link.textContent || ''),
            href: link.getAttribute('href') || '',
          }),
        ),
      );
    } catch {
      return [];
    }
  }

  onSelectionChange(selection: GuidanceRow[]): void {
    this.selectedRows = selection;
    const alertRow = this.rows.find((r) => r.__nameKey === this.alertsNameKey);
    if (!alertRow) return;
    const selectedUrls = new Set(this.selectedRows.map((r) => r.url));
    const alertSelected = selectedUrls.has(alertRow.url);
    this.alertSelectAll = alertSelected;
  }

  private ensureAlertRowSelection(): void {
    this.syncAlertRowSelection();
  }

  onAlertCategoriesChange(cats: { label: string; severity: string }[]): void {
    this.alertCategories = this.sortCategories(cats ?? []);
    this.alertHasIssues = this.alertCategories.length > 0;
    this.syncAlertRowSelection();
    this.prevAlertHasIssues = this.alertHasIssues;
    if (this.alertHasIssues) {
      this.alertError = false;
    }
  }

  onAlertMaxSeverityChange(sev: string | null): void {
    this.alertMaxSeverity = sev;
  }

  onAlertLoadingChange(flag: boolean): void {
    Promise.resolve().then(() => {
      this.alertLoading = flag;
      if (flag) {
        this.alertLoadAttempted = true;
        this.alertDataLoaded = false;
        this.alertError = false;
      } else if (this.alertLoadAttempted) {
        this.alertDataLoaded = true;
      }
      this.cdr.markForCheck();
    });
  }

  onAlertErrorChange(flag: boolean): void {
    Promise.resolve().then(() => {
      this.alertError = flag;
      this.alertDataLoaded = true;
      if (flag) {
        this.alertCategories = [];
        this.alertHasIssues = false;
        this.alertMaxSeverity = null;
      }
      this.cdr.markForCheck();
    });
  }

  onAlertIssuesCleared(): void {
    const alertRow = this.rows.find((r) => r.__nameKey === this.alertsNameKey);
    this.alertCategories = [];
    this.alertMaxSeverity = null;
    this.alertHasIssues = false;
    this.alertLoading = false;
    this.alertError = false;
    this.alertDataLoaded = false;
    this.alertLoadAttempted = false;
    this.prevAlertHasIssues = false;
    if (alertRow) {
      this.selectedRows = this.selectedRows.filter((r) => r.url !== alertRow.url);
      this.alertSelectAll = false;
      const expandedRows = { ...this.expandedRows };
      delete expandedRows[alertRow.url];
      this.expandedRows = expandedRows;
    }
    this.cdr.markForCheck();
  }

  private syncAlertRowSelection(): void {
    const alertRow = this.rows.find((r) => r.__nameKey === this.alertsNameKey);
    if (!alertRow) return;

    const selected = this.selectedRows.some((r) => r.url === alertRow.url);

    // If no issues, make sure row is not selected
    if (!this.alertHasIssues) {
      if (selected) {
        this.selectedRows = this.selectedRows.filter((r) => r.url !== alertRow.url);
      }
      return;
    }

    // Auto-select only on first availability or when forced
    if (!this.prevAlertHasIssues && this.alertHasIssues && !selected) {
      this.selectedRows = [...this.selectedRows, alertRow];
      this.alertSelectAll = true;
    }
  }

  private sortCategories(cats: { label: string; severity: string }[]): {
    label: string;
    severity: string;
  }[] {
    return [...cats].sort((a, b) => {
      const ra = ALERT_SEVERITY_RANK[a.severity.toLowerCase()] ?? -1;
      const rb = ALERT_SEVERITY_RANK[b.severity.toLowerCase()] ?? -1;
      if (ra !== rb) return rb - ra;
      return a.label.localeCompare(b.label, undefined, { sensitivity: 'base' });
    });
  }

  severityChip(severity: string | undefined | null): string {
    const s = (severity || '').toLowerCase();
    if (s === 'ok') return 'chip-ok';
    if (s === 'low') return 'chip-minor';
    if (s === 'medium') return 'chip-med';
    if (s === 'high') return 'chip-severe';
    return 'chip-unk';
  }

  isNoIssueRow(issue: TopicDoormatIssueRow): boolean {
    return issue.issue === 'No issues';
  }

  alertHealthLabel(severity: string | null): string {
    const s = (severity || '').toLowerCase();
    if (s === 'high') return 'Severe';
    if (s === 'medium') return 'Moderate';
    if (s === 'low') return 'Minor';
    if (!severity || s === 'unknown') return 'Unknown';
    return severity;
  }

  alertHealthIcon(severity: string | null): string {
    const s = (severity || '').toLowerCase();
    if (s === 'high') return 'pi pi-exclamation-triangle';
    if (s === 'medium') return 'pi pi-exclamation-circle';
    if (s === 'low') return 'pi pi-times-circle';
    return 'pi pi-question-circle';
  }
}
