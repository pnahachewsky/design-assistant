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
  rowType: 'section' | 'doormat';
  severity: string;
  doormat: string;
  doormatLabel: string;
  issueId: string;
  issue: string;
  evidence: string;
  evidenceMetric?: string;
  recommendation: string;
  doormatIndex?: number;
  sectionIndex?: number;
  sectionTitle?: string;
  sectionItemIndex?: number;
}

interface TopicDoormatIssueGroup {
  sectionIndex: number;
  sectionTitle: string;
  doormatCount: number;
  sectionRows: TopicDoormatIssueRow[];
  doormatRows: TopicDoormatIssueRow[];
}

interface TopicDoormatIssueSummary {
  label: string;
  severity: string;
  rowType: 'section' | 'doormat';
}

interface TopicDoormatSummary {
  index: number;
  linkText: string;
  href: string;
  description: string;
  headingLevel: number | null;
  itemLinkCount: number;
  descriptionLinkCount: number;
  hasDescriptionLink: boolean;
  hasDescriptionIconOrImage: boolean;
  hasDescriptionSpecialFormatting: boolean;
  rawItemText: string;
  linkTextCharacterCount: number;
  descriptionCharacterCount: number;
  sectionIndex: number;
  sectionTitle: string;
  sectionItemIndex: number;
  sectionDoormatCount: number;
}

interface TopicDoormatIssueCategory {
  id?: unknown;
  label?: unknown;
}

interface TopicDoormatIssueTaxonomy {
  issue_categories?: unknown;
}

type TopicDoormatDescriptionStyle =
  | 'noun-topic'
  | 'action-oriented'
  | 'how-to'
  | 'benefit-summary'
  | 'question-or-sentence'
  | 'status-or-date-change'
  | 'unclear';

interface TopicDoormatSectionStyleAnalysis {
  sectionIndex: number;
  sectionTitle: string;
  summaries: TopicDoormatSummary[];
  dominantStyle: Exclude<TopicDoormatDescriptionStyle, 'unclear'> | null;
  styleCounts: Map<TopicDoormatDescriptionStyle, number>;
  examplesByStyle: Map<TopicDoormatDescriptionStyle, number[]>;
  isMixed: boolean;
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

      .topic-doormat-evidence-metric {
        display: inline-flex;
        margin-right: 0.2rem;
        vertical-align: baseline;
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
  private readonly topicDoormatForceParseFailureStorageKey =
    'pageAssistant.topicDoormatForceParseFailure';
  private readonly topicDoormatIssueTaxonomyPath =
    'skills/topic-doormats/issues/references/issue-taxonomy.json';
  private readonly topicDoormatIssueLengthLimits: Record<string, number> = {
    'link-name-too-long': 35,
    'description-too-long': 90,
  };
  private readonly topicDoormatDescriptionStyleOrder: Exclude<
    TopicDoormatDescriptionStyle,
    'unclear'
  >[] = [
    'noun-topic',
    'benefit-summary',
    'status-or-date-change',
    'action-oriented',
    'how-to',
    'question-or-sentence',
  ];
  private topicDoormatIssueTaxonomyLoad?: Promise<void>;
  private topicDoormatIssueIdToLabel = new Map<string, string>();
  private topicDoormatIssueAliasToId = new Map<string, string>();

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
  topicDoormatIssueGroups: TopicDoormatIssueGroup[] = [];
  topicDoormatIssueCategories: TopicDoormatIssueSummary[] = [];
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
    const doc = this.parseHtmlDocument(html);
    if (!doc) return;
    const doormatSummaries = this.extractTopicDoormatSummaries(doc);
    if (!doormatSummaries.length) return;
    const analysisStart = performance.now();
    const mostRequestedLinks = this.extractMostRequestedLinks(doc);

    this.topicDoormatIssuesLoading = true;
    this.topicDoormatIssuesError = false;
    this.topicDoormatIssuesErrorDetail = '';
    this.topicDoormatIssueRows = [];
    this.topicDoormatIssueGroups = [];
    this.topicDoormatIssueCategories = [];
    this.updateTopicDoormatRowHealth('unknown');

    try {
      await this.loadTopicDoormatIssueTaxonomy();
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
        doormatSummaryCount: doormatSummaries.length,
        sectionCounts: this.buildTopicDoormatSectionCounts(doormatSummaries),
        overLimitSummaryIndexes:
          this.getTopicDoormatOverLimitSectionIndexes(doormatSummaries),
        doormatSummaries: doormatSummaries.map((summary) => ({
          index: summary.index,
          linkText: summary.linkText,
          linkTextCharacterCount: summary.linkTextCharacterCount,
          descriptionCharacterCount: summary.descriptionCharacterCount,
          headingLevel: summary.headingLevel,
          itemLinkCount: summary.itemLinkCount,
          descriptionLinkCount: summary.descriptionLinkCount,
          hasDescriptionLink: summary.hasDescriptionLink,
          hasDescriptionIconOrImage: summary.hasDescriptionIconOrImage,
          hasDescriptionSpecialFormatting:
            summary.hasDescriptionSpecialFormatting,
          sectionIndex: summary.sectionIndex,
          sectionTitle: summary.sectionTitle,
          sectionItemIndex: summary.sectionItemIndex,
          sectionDoormatCount: summary.sectionDoormatCount,
        })),
        mostRequestedLinkCount: mostRequestedLinks.length,
        loadedSkillResources: composed.loadedPaths,
        loadedIssueTaxonomyLabels: this.topicDoormatIssueIdToLabel.size,
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
        doormatSummaries,
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
        : this.buildTopicDoormatFallbackRows(doormatSummaries);
      this.topicDoormatIssueGroups = this.buildTopicDoormatIssueGroups(
        this.topicDoormatIssueRows,
      );
      this.updateTopicDoormatSummaryState();
      this.debugTopicDoormatIssues('response parsed', {
        model,
        responseCharacters: text.length,
        displayedRows: this.topicDoormatIssueRows.length,
        displayedGroups: this.topicDoormatIssueGroups.length,
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
      this.topicDoormatIssueCategories = [];
      this.updateTopicDoormatRowHealth('unknown');
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
    doormatSummaries: TopicDoormatSummary[],
  ): Promise<{ text: string; model: string }> {
    let lastError: unknown;
    let lastModel = models[0] ?? '';

    for (let index = 0; index < models.length; index += 1) {
      const model = models[index];
      lastModel = model;
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
          const forcedParseFailureMode =
            this.getTopicDoormatForceParseFailureMode();
          if (forcedParseFailureMode === 'local-only') {
            this.debugTopicDoormatIssues('forced parse failure enabled', {
              mode: forcedParseFailureMode,
              model,
              responseCharacters: text.length,
            });
            return { text: '', model };
          }
          const textToValidate =
            forcedParseFailureMode === 'repair'
              ? '{"doormats": ['
              : text;
          if (forcedParseFailureMode === 'repair') {
            this.debugTopicDoormatIssues('forced parse failure enabled', {
              mode: forcedParseFailureMode,
              model,
              responseCharacters: text.length,
            });
          }
          if (this.isParseableTopicDoormatIssueResponseText(textToValidate)) {
            this.debugTopicDoormatIssues('model attempt succeeded', {
              attempt: index + 1,
              model,
              elapsedMs: Math.round(performance.now() - modelStart),
              responseCharacters: text.length,
            });
            return { text, model };
          }

          this.debugTopicDoormatIssues('model attempt returned invalid json', {
            attempt: index + 1,
            model,
            elapsedMs: Math.round(performance.now() - modelStart),
            responseCharacters: text.length,
          });

          const repairedText = await this.repairTopicDoormatIssueJson(
            model,
            text,
            doormatSummaries,
          );
          if (
            repairedText &&
            this.isParseableTopicDoormatIssueResponseText(repairedText)
          ) {
            this.debugTopicDoormatIssues('model json repair succeeded', {
              attempt: index + 1,
              model,
              elapsedMs: Math.round(performance.now() - modelStart),
              originalResponseCharacters: text.length,
              repairedResponseCharacters: repairedText.length,
            });
            return { text: repairedText, model };
          }

          this.debugTopicDoormatIssues('model json repair failed', {
            attempt: index + 1,
            model,
            elapsedMs: Math.round(performance.now() - modelStart),
          });
          lastError = new Error(`Invalid Topic doormat JSON from ${model}`);
          continue;
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

    this.debugTopicDoormatIssues('model attempts exhausted', {
      models,
      lastModel,
      error: lastError instanceof Error ? lastError.message : String(lastError),
    });
    return { text: '', model: lastModel };
  }

  private async repairTopicDoormatIssueJson(
    model: string,
    invalidText: string,
    doormatSummaries: TopicDoormatSummary[],
  ): Promise<string> {
    try {
      const repairMessages: ChatMessage[] = [
        {
          role: 'system',
          content:
            'Convert the supplied response to valid JSON that matches the Topic doormat issue schema. Fix format only. Do not add, remove, reinterpret, or re-analyze issues. Return JSON only.',
        },
        {
          role: 'user',
          content: JSON.stringify({
            requiredShape:
              '{ "section_issues": [], "doormats": [{ "doormat_index": number, "link_text": string, "href": string, "issues": [] }] }',
            validDoormatIndexes: doormatSummaries.map((summary) => summary.index),
            responseToRepair: invalidText,
          }),
        },
      ];
      const resp = await this.openRouter.call(model, repairMessages, {
        temperature: 0,
        title: 'Content Assistant - Topic Doormat JSON Repair',
        throwOnError: true,
      });
      return resp?.choices?.[0]?.message?.content?.trim() || '';
    } catch (err) {
      this.debugTopicDoormatIssues('model json repair request failed', {
        model,
        error: err instanceof Error ? err.message : String(err),
      });
      return '';
    }
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

  private getTopicDoormatForceParseFailureMode():
    | ''
    | 'repair'
    | 'local-only' {
    try {
      const value = (
        localStorage.getItem(this.topicDoormatForceParseFailureStorageKey) || ''
      )
        .trim()
        .toLowerCase();
      if (value === 'repair') return 'repair';
      if (value === 'local-only' || value === 'true') return 'local-only';
      return '';
    } catch {
      return '';
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
    const sectionIssueRows = this.parseTopicDoormatSectionIssueRows(
      root['section_issues'],
      doormatSummaries,
    );
    const sectionIssueKeys = new Set(
      sectionIssueRows.map(
      (row) => `${row.sectionIndex ?? 0}|${row.issueId}`,
      ),
    );

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
      const label = summary
        ? this.buildTopicDoormatLabel(summary)
        : [index ? `${index}.` : '', linkText || href || 'Doormat']
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
              headingLevel: null,
              itemLinkCount: 0,
              descriptionLinkCount: 0,
              hasDescriptionLink: false,
              hasDescriptionIconOrImage: false,
              hasDescriptionSpecialFormatting: false,
              rawItemText: '',
              linkTextCharacterCount: linkText.length,
              descriptionCharacterCount: 0,
              sectionIndex: 0,
              sectionTitle: '',
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
          const issueId = this.getTopicDoormatIssueId(issue);
          if (!this.isReportableTopicDoormatIssue(issue, summary)) return null;
          if (
            issueId === 'mixed-description-style-in-section' ||
            issueId === 'mixed-link-name-styles-in-section'
          ) {
            const sectionRow = this.buildTopicDoormatSectionIssueRow(
              issue,
              summary?.sectionIndex,
            );
            const sectionKey = `${sectionRow.sectionIndex ?? 0}|${
              sectionRow.issueId
            }`;
            if (!sectionIssueKeys.has(sectionKey)) {
              sectionIssueRows.push(sectionRow);
              sectionIssueKeys.add(sectionKey);
            }
            return null;
          }
          if (issueId === 'multiple-links') {
            return null;
          }
          if (issueId === 'link-name-too-long') {
            return null;
          }
          if (issueId === 'description-too-long') {
            return null;
          }
          if (!this.hasValidTopicDoormatObjectiveEvidence(issueId, summary)) {
            return null;
          }
          if (issueId === 'too-many-doormats-in-section') {
            return null;
          }
          const evidence = this.buildTopicDoormatEvidence(issue, summary);
          return {
            include:
              typeof issue['include'] === 'boolean'
                ? issue['include']
                : true,
            rowType: 'doormat',
            severity: this.cleanString(issue['severity']) || 'Unknown',
            doormat: label,
            doormatLabel: summary?.linkText || linkText || href || 'Doormat',
            issueId,
            issue: this.getTopicDoormatIssueLabel(issueId),
            evidence,
            recommendation: this.cleanString(issue['recommendation']),
            doormatIndex: index ?? undefined,
            sectionIndex: summary?.sectionIndex,
            sectionTitle: summary?.sectionTitle,
            sectionItemIndex: summary?.sectionItemIndex,
          } satisfies TopicDoormatIssueRow;
        })
        .filter((row): row is TopicDoormatIssueRow => row !== null);
    });

    const reportableSectionIssueRows = sectionIssueRows.filter(
      (row) => row.issueId !== 'too-many-doormats-in-section',
    );
    const mixedDescriptionStyleSectionIndexes = new Set(
      reportableSectionIssueRows
        .filter((row) => row.issueId === 'mixed-description-style-in-section')
        .map((row) => row.sectionIndex)
        .filter((index): index is number => typeof index === 'number' && index > 0),
    );
    const mixedLinkNameStyleSectionIndexes = new Set(
      reportableSectionIssueRows
        .filter((row) => row.issueId === 'mixed-link-name-styles-in-section')
        .map((row) => row.sectionIndex)
        .filter((index): index is number => typeof index === 'number' && index > 0),
    );
    const inconsistentLinkNameStyleCountsBySection = rows.reduce<
      Map<number, number>
    >((counts, row) => {
      if (
        row.issueId !== 'inconsistent-link-name-style' ||
        !row.sectionIndex
      ) {
        return counts;
      }
      counts.set(row.sectionIndex, (counts.get(row.sectionIndex) ?? 0) + 1);
      return counts;
    }, new Map<number, number>());
    const suppressedModelIssueRows = rows.filter(
      (row) => {
        if (!row.sectionIndex) return false;
        if (
          row.issueId === 'inconsistent-description-style' &&
          mixedDescriptionStyleSectionIndexes.has(row.sectionIndex)
        ) {
          return true;
        }
        if (row.issueId !== 'inconsistent-link-name-style') return false;
        if (mixedLinkNameStyleSectionIndexes.has(row.sectionIndex)) return true;
        const sectionCount =
          doormatSummaries.find(
            (summary) => summary.sectionIndex === row.sectionIndex,
          )?.sectionDoormatCount ?? 0;
        const flaggedCount =
          inconsistentLinkNameStyleCountsBySection.get(row.sectionIndex) ?? 0;
        return sectionCount > 0 && flaggedCount >= Math.max(2, sectionCount - 1);
      },
    );
    const modelIssueRows = rows.filter(
      (row) => !suppressedModelIssueRows.includes(row),
    );

    const deterministicRows = this.buildDeterministicTopicDoormatIssueRows(
      doormatSummaries,
      [...modelIssueRows, ...reportableSectionIssueRows],
    );

    const representedIndexes = new Set(
      [...modelIssueRows, ...deterministicRows, ...reportableSectionIssueRows]
        .map((row) => row.doormatIndex)
        .filter((index): index is number => typeof index === 'number' && index > 0),
    );
    const missingNoIssueRows = doormatSummaries
      .filter((summary) => !representedIndexes.has(summary.index))
      .map((summary) => this.buildTopicDoormatNoIssueRow(summary));

    const resolvedRows = this.removeConflictingTopicDoormatNoIssueRows([
      ...modelIssueRows,
      ...deterministicRows,
      ...reportableSectionIssueRows,
      ...missingNoIssueRows,
    ].sort((a, b) => {
      const aIndex = this.getTopicDoormatRowSortIndex(a, doormatSummaries);
      const bIndex = this.getTopicDoormatRowSortIndex(b, doormatSummaries);
      return aIndex - bIndex;
    }));
    this.debugTopicDoormatIssues('response row resolution', {
      modelDoormatCount: doormats.length,
      doormatSummaryCount: doormatSummaries.length,
      sectionCounts: this.buildTopicDoormatSectionCounts(doormatSummaries),
      overLimitSummaryIndexes:
        this.getTopicDoormatOverLimitSectionIndexes(doormatSummaries),
      modelRawIssueRows: rows.length,
      modelRawIssueBreakdown: this.countTopicDoormatRowsByIssue(rows),
      modelDisplayedIssueRows: modelIssueRows.length,
      modelDisplayedIssueBreakdown:
        this.countTopicDoormatRowsByIssue(modelIssueRows),
      suppressedModelIssueRows: suppressedModelIssueRows.length,
      suppressedModelIssueBreakdown: this.countTopicDoormatRowsByIssue(
        suppressedModelIssueRows,
      ),
      modelRawSectionIssueRows: sectionIssueRows.length,
      modelDisplayedSectionIssueRows: reportableSectionIssueRows.length,
      fallbackNoIssueRows: missingNoIssueRows.length,
      deterministicRows: deterministicRows.length,
      displayedRows: resolvedRows.length,
    });
    return resolvedRows;
  }

  private parseTopicDoormatSectionIssueRows(
    rawSectionIssues: unknown,
    doormatSummaries: TopicDoormatSummary[],
  ): TopicDoormatIssueRow[] {
    if (!Array.isArray(rawSectionIssues)) return [];

    return rawSectionIssues
      .map((rawIssue): TopicDoormatIssueRow | null => {
        if (!rawIssue || typeof rawIssue !== 'object') return null;
        const issue = rawIssue as Record<string, unknown>;
        return this.buildTopicDoormatSectionIssueRow(issue, undefined, doormatSummaries);
      })
      .filter((row): row is TopicDoormatIssueRow => row !== null);
  }

  private buildTopicDoormatSectionIssueRow(
    issue: Record<string, unknown>,
    fallbackSectionIndex?: number,
    doormatSummaries: TopicDoormatSummary[] = [],
  ): TopicDoormatIssueRow {
    const details =
      issue['evidence_details'] && typeof issue['evidence_details'] === 'object'
        ? (issue['evidence_details'] as Record<string, unknown>)
        : null;
    const sectionIndex =
      this.toNumber(issue['section_index']) ??
      this.toNumber(details?.['section_index']) ??
      fallbackSectionIndex ??
      this.buildTopicDoormatSectionCounts(doormatSummaries)[0]?.sectionIndex ??
      1;

    return {
      include:
        typeof issue['include'] === 'boolean' ? issue['include'] : true,
      rowType: 'section',
      severity: this.cleanString(issue['severity']) || 'Unknown',
      doormat: this.buildTopicDoormatSectionLabel(
        sectionIndex,
        doormatSummaries,
      ),
      doormatLabel: 'All doormats in section',
      issueId: this.getTopicDoormatIssueId(issue),
      issue: this.getTopicDoormatIssueLabel(
        this.getTopicDoormatIssueId(issue),
      ),
      evidence: this.buildTopicDoormatEvidence(issue),
      recommendation: this.cleanString(issue['recommendation']),
      sectionIndex,
      sectionTitle:
        doormatSummaries.find((summary) => summary.sectionIndex === sectionIndex)
          ?.sectionTitle || '',
    };
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
    const deterministicRows = this.buildDeterministicTopicDoormatIssueRows(
      doormatSummaries,
      [],
    );
    const representedIndexes = new Set(
      deterministicRows
        .map((row) => row.doormatIndex)
        .filter((index): index is number => typeof index === 'number' && index > 0),
    );
    const noIssueRows = doormatSummaries
      .filter((summary) => !representedIndexes.has(summary.index))
      .map((summary) => this.buildTopicDoormatNoIssueRow(summary));

    return this.removeConflictingTopicDoormatNoIssueRows([
      ...deterministicRows,
      ...noIssueRows,
    ].sort((a, b) => {
      const aIndex = this.getTopicDoormatRowSortIndex(a, doormatSummaries);
      const bIndex = this.getTopicDoormatRowSortIndex(b, doormatSummaries);
      return aIndex - bIndex;
    }));
  }

  private buildDeterministicTopicDoormatIssueRows(
    doormatSummaries: TopicDoormatSummary[],
    existingRows: TopicDoormatIssueRow[],
  ): TopicDoormatIssueRow[] {
    const existingIssueKeys = new Set(
      existingRows.map((row) => `${row.sectionIndex ?? 0}|${row.issueId}`),
    );

    const overLimitRows = this.buildTopicDoormatSectionCounts(doormatSummaries).flatMap(
      (section) => {
      if (
        section.count <= 9 ||
        existingIssueKeys.has(`${section.sectionIndex}|too-many-doormats-in-section`)
      ) {
        return [];
      }

      return [
        {
          include: true,
          rowType: 'section',
          severity: 'Medium',
          doormat: this.buildTopicDoormatSectionLabel(
            section.sectionIndex,
            doormatSummaries,
          ),
          doormatLabel: 'All doormats in section',
          issueId: 'too-many-doormats-in-section',
          issue: this.getTopicDoormatIssueLabel('too-many-doormats-in-section'),
          evidence: `There are ${section.count} doormats in this section.`,
          recommendation:
            'Either remove doormats or break down the section into sections that have 9 or fewer doormats.',
          sectionIndex: section.sectionIndex,
          sectionTitle: section.sectionTitle,
        } satisfies TopicDoormatIssueRow,
      ];
    });

    return [
      ...overLimitRows,
      ...this.buildLocalTopicDoormatLinkNameLengthRows(doormatSummaries),
      ...this.buildLocalTopicDoormatDescriptionLengthRows(doormatSummaries),
      ...this.buildLocalTopicDoormatMultipleLinkRows(doormatSummaries),
      ...this.buildLocalTopicDoormatStyleIssueRows(
        doormatSummaries,
        existingIssueKeys,
      ),
    ];
  }

  private buildLocalTopicDoormatLinkNameLengthRows(
    doormatSummaries: TopicDoormatSummary[],
  ): TopicDoormatIssueRow[] {
    const limit = this.topicDoormatIssueLengthLimits['link-name-too-long'];
    return doormatSummaries
      .filter((summary) => summary.linkTextCharacterCount > limit)
      .map((summary) => {
        const count = summary.linkTextCharacterCount;
        const metric = `${count}/${limit} characters`;
        return {
          include: true,
          rowType: 'doormat',
          severity: this.getTopicDoormatLinkNameLengthSeverity(count),
          doormat: this.buildTopicDoormatLabel(summary),
          doormatLabel: summary.linkText || summary.href || 'Doormat',
          issueId: 'link-name-too-long',
          issue: this.getTopicDoormatIssueLabel('link-name-too-long'),
          evidence:
            'The French version must be <= 75 characters. Aim for the English version to be <= 45 characters.',
          evidenceMetric: metric,
          recommendation:
            'Shorten the link text. Keep link text under 35 characters.',
          doormatIndex: summary.index || undefined,
          sectionIndex: summary.sectionIndex || undefined,
          sectionTitle: summary.sectionTitle || undefined,
          sectionItemIndex: summary.sectionItemIndex || undefined,
        } satisfies TopicDoormatIssueRow;
      });
  }

  private getTopicDoormatLinkNameLengthSeverity(count: number): string {
    if (count <= 45) return 'Low';
    if (count <= 60) return 'Medium';
    return 'High';
  }

  private buildLocalTopicDoormatDescriptionLengthRows(
    doormatSummaries: TopicDoormatSummary[],
  ): TopicDoormatIssueRow[] {
    const limit = this.topicDoormatIssueLengthLimits['description-too-long'];
    return doormatSummaries
      .filter((summary) => summary.descriptionCharacterCount > limit)
      .map((summary) => {
        const count = summary.descriptionCharacterCount;
        const metric = `${count}/${limit} characters`;
        return {
          include: true,
          rowType: 'doormat',
          severity: this.getTopicDoormatDescriptionLengthSeverity(count),
          doormat: this.buildTopicDoormatLabel(summary),
          doormatLabel: summary.linkText || summary.href || 'Doormat',
          issueId: 'description-too-long',
          issue: this.getTopicDoormatIssueLabel('description-too-long'),
          evidence:
            'The French version must be <= 120 characters. Aim for the English version to be <= 90 characters.',
          evidenceMetric: metric,
          recommendation:
            'Shorten the description. Keep the English version under 90 characters where possible.',
          doormatIndex: summary.index || undefined,
          sectionIndex: summary.sectionIndex || undefined,
          sectionTitle: summary.sectionTitle || undefined,
          sectionItemIndex: summary.sectionItemIndex || undefined,
        } satisfies TopicDoormatIssueRow;
      });
  }

  private getTopicDoormatDescriptionLengthSeverity(count: number): string {
    if (count <= 105) return 'Low';
    if (count <= 120) return 'Medium';
    return 'High';
  }

  private buildLocalTopicDoormatMultipleLinkRows(
    doormatSummaries: TopicDoormatSummary[],
  ): TopicDoormatIssueRow[] {
    return doormatSummaries
      .filter((summary) => summary.itemLinkCount > 1)
      .map((summary) => ({
        include: true,
        rowType: 'doormat',
        severity: 'High',
        doormat: this.buildTopicDoormatLabel(summary),
        doormatLabel: summary.linkText || summary.href || 'Doormat',
        issueId: 'multiple-links',
        issue: this.getTopicDoormatIssueLabel('multiple-links'),
        evidence: this.buildTopicDoormatMultipleLinksEvidence(summary),
        recommendation:
          'Use one link per doormat. Move any extra destination to a separate doormat if it is needed.',
        doormatIndex: summary.index || undefined,
        sectionIndex: summary.sectionIndex || undefined,
        sectionTitle: summary.sectionTitle || undefined,
        sectionItemIndex: summary.sectionItemIndex || undefined,
      }));
  }

  private buildTopicDoormatMultipleLinksEvidence(
    doormat: TopicDoormatSummary,
  ): string {
    const additionalLinkCount = Math.max(doormat.itemLinkCount - 1, 0);
    const additionalLabel =
      additionalLinkCount === 1 ? '1 additional link' : `${additionalLinkCount} additional links`;
    return `This doormat contains ${doormat.itemLinkCount} links: the main doormat link plus ${additionalLabel}.`;
  }

  private buildLocalTopicDoormatStyleIssueRows(
    doormatSummaries: TopicDoormatSummary[],
    existingIssueKeys: Set<string>,
  ): TopicDoormatIssueRow[] {
    const analyses = this.analyzeTopicDoormatDescriptionStyles(doormatSummaries);
    const rows: TopicDoormatIssueRow[] = [];

    analyses.forEach((analysis) => {
      const key = `${analysis.sectionIndex}|mixed-description-style-in-section`;
      if (!analysis.isMixed || existingIssueKeys.has(key)) return;
      rows.push({
        include: true,
        rowType: 'section',
        severity: 'Medium',
        doormat: this.buildTopicDoormatSectionLabel(
          analysis.sectionIndex,
          doormatSummaries,
        ),
        doormatLabel: 'All doormats in section',
        issueId: 'mixed-description-style-in-section',
        issue: this.getTopicDoormatIssueLabel(
          'mixed-description-style-in-section',
        ),
        evidence: this.buildTopicDoormatMixedStyleEvidence(analysis),
        recommendation:
          'Rewrite the descriptions so they use one consistent description style across the section.',
        sectionIndex: analysis.sectionIndex,
        sectionTitle: analysis.sectionTitle,
      });
    });

    const internallyConsistentAnalyses = analyses.filter(
      (analysis) => !analysis.isMixed && !!analysis.dominantStyle,
    );
    const pageDominantStyle =
      this.getDominantTopicDoormatSectionStyle(
        internallyConsistentAnalyses,
      ) ??
      this.getTwoSectionTopicDoormatReferenceStyle(
      internallyConsistentAnalyses,
      );
    if (!pageDominantStyle) return rows;

    internallyConsistentAnalyses.forEach((analysis) => {
      const sectionStyle = analysis.dominantStyle;
      if (!sectionStyle || sectionStyle === pageDominantStyle) return;
      const key = `${analysis.sectionIndex}|section-description-style-outlier`;
      if (existingIssueKeys.has(key)) return;
      rows.push({
        include: true,
        rowType: 'section',
        severity: 'Low',
        doormat: this.buildTopicDoormatSectionLabel(
          analysis.sectionIndex,
          doormatSummaries,
        ),
        doormatLabel: 'All doormats in section',
        issueId: 'section-description-style-outlier',
        issue: this.getTopicDoormatIssueLabel(
          'section-description-style-outlier',
        ),
        evidence: `This section uses ${this.getTopicDoormatStyleLabel(
          sectionStyle,
        )}, while the page mostly uses ${this.getTopicDoormatStyleLabel(
          pageDominantStyle,
        )}.`,
        recommendation:
          'Align this section with the dominant page description style unless the section has a clear reason to use a different pattern.',
        sectionIndex: analysis.sectionIndex,
        sectionTitle: analysis.sectionTitle,
      });
    });

    return rows;
  }

  private analyzeTopicDoormatDescriptionStyles(
    doormatSummaries: TopicDoormatSummary[],
  ): TopicDoormatSectionStyleAnalysis[] {
    const sections = new Map<number, TopicDoormatSummary[]>();
    doormatSummaries.forEach((summary) => {
      if (!summary.sectionIndex) return;
      const rows = sections.get(summary.sectionIndex) ?? [];
      rows.push(summary);
      sections.set(summary.sectionIndex, rows);
    });

    return Array.from(sections.entries())
      .map(([sectionIndex, summaries]) => {
        const styleCounts = new Map<TopicDoormatDescriptionStyle, number>();
        const examplesByStyle = new Map<TopicDoormatDescriptionStyle, number[]>();

        summaries.forEach((summary) => {
          const style = this.classifyTopicDoormatDescriptionStyle(
            summary.description,
          );
          styleCounts.set(style, (styleCounts.get(style) ?? 0) + 1);
          const examples = examplesByStyle.get(style) ?? [];
          examples.push(summary.sectionItemIndex);
          examplesByStyle.set(style, examples);
        });

        const relevantStyles = this.topicDoormatDescriptionStyleOrder.filter(
          (style) => (styleCounts.get(style) ?? 0) > 0,
        );
        const dominantStyle =
          this.getDominantTopicDoormatDescriptionStyle(styleCounts);
        const rankedRelevantStyles = relevantStyles
          .map((style) => ({ style, count: styleCounts.get(style) ?? 0 }))
          .sort((a, b) => b.count - a.count);
        const secondStyleCount = rankedRelevantStyles[1]?.count ?? 0;
        const isMixed =
          summaries.length >= 3 &&
          relevantStyles.length >= 2 &&
          (secondStyleCount >= 2 || summaries.length <= 4);

        return {
          sectionIndex,
          sectionTitle: summaries[0]?.sectionTitle || `Section ${sectionIndex}`,
          summaries,
          dominantStyle,
          styleCounts,
          examplesByStyle,
          isMixed,
        };
      })
      .sort((a, b) => a.sectionIndex - b.sectionIndex);
  }

  private classifyTopicDoormatDescriptionStyle(
    description: string,
  ): TopicDoormatDescriptionStyle {
    const text = this.cleanVisibleText(description).toLowerCase();
    if (!text) return 'unclear';
    if (/^how to\b/.test(text)) return 'how-to';
    if (
      /^(answer|find|find out|get|learn|apply|claim|calculate|check|confirm|report|see|use|update|manage|register|sign in|pay|file)\b/.test(
        text,
      )
    ) {
      return 'action-oriented';
    }
    if (
      /^(will be|starts?|closed|temporary|you may still|as of|from \w+ \d{1,2}|effective|replaced|replacement)\b/.test(
        text,
      ) ||
      /\b(reviewed|changed|replacement|replace|replaced|starts?|closed)\b/.test(
        text,
      )
    ) {
      return 'status-or-date-change';
    }
    if (
      /^(monthly|quarterly|annual|one-time)?\s*(payment|payments|benefit|benefits|credit|tax credit|temporary relief)\b/.test(
        text,
      ) ||
      /^(benefit|benefits|tax credit|credit|monthly payment|quarterly payments)\s+(for|to|that)\b/.test(
        text,
      )
    ) {
      return 'benefit-summary';
    }
    if (/^(what|who|when|where|why|whether)\b/.test(text)) {
      return 'question-or-sentence';
    }
    return 'noun-topic';
  }

  private getDominantTopicDoormatDescriptionStyle(
    styleCounts: Map<TopicDoormatDescriptionStyle, number>,
  ): Exclude<TopicDoormatDescriptionStyle, 'unclear'> | null {
    const candidates = this.topicDoormatDescriptionStyleOrder
      .map((style) => ({ style, count: styleCounts.get(style) ?? 0 }))
      .filter((entry) => entry.count > 0)
      .sort((a, b) => b.count - a.count);
    if (!candidates.length) return null;
    if (candidates.length > 1 && candidates[0].count === candidates[1].count) {
      return null;
    }
    return candidates[0].style;
  }

  private getDominantTopicDoormatSectionStyle(
    analyses: TopicDoormatSectionStyleAnalysis[],
  ): Exclude<TopicDoormatDescriptionStyle, 'unclear'> | null {
    const counts = new Map<Exclude<TopicDoormatDescriptionStyle, 'unclear'>, number>();
    analyses.forEach((analysis) => {
      if (!analysis.dominantStyle) return;
      counts.set(
        analysis.dominantStyle,
        (counts.get(analysis.dominantStyle) ?? 0) + 1,
      );
    });
    const ranked = Array.from(counts.entries()).sort((a, b) => b[1] - a[1]);
    if (ranked.length < 2) return null;
    if (ranked[0][1] === ranked[1][1]) return null;
    return ranked[0][0];
  }

  private getTwoSectionTopicDoormatReferenceStyle(
    analyses: TopicDoormatSectionStyleAnalysis[],
  ): Exclude<TopicDoormatDescriptionStyle, 'unclear'> | null {
    if (analyses.length !== 2) return null;
    const firstStyle = analyses[0].dominantStyle;
    const secondStyle = analyses[1].dominantStyle;
    if (!firstStyle || !secondStyle || firstStyle === secondStyle) return null;
    return firstStyle;
  }

  private buildTopicDoormatMixedStyleEvidence(
    analysis: TopicDoormatSectionStyleAnalysis,
  ): string {
    const groups = this.buildTopicDoormatMixedStyleEvidenceGroups(analysis);
    if (!groups.length) return 'Mixes description styles in this section.';

    if (groups.length === 2) {
      const [first, second] = groups;
      return [
        `Mixes ${first.label} with ${second.label}.`,
        `${first.exampleLabel} examples: ${first.examples.join(', ')}.`,
        `${second.exampleLabel} examples: ${second.examples.join(', ')}.`,
      ].join(' ');
    }

    const styleParts = groups.map(
      (group) => `${group.exampleLabel} examples: ${group.examples.join(', ')}`,
    );
    return `Mixes description styles in this section. ${styleParts.join('. ')}.`;
  }

  private buildTopicDoormatMixedStyleEvidenceGroups(
    analysis: TopicDoormatSectionStyleAnalysis,
  ): { label: string; exampleLabel: string; examples: number[] }[] {
    const evidenceGroups = [
      {
        label: 'summary-style descriptions',
        exampleLabel: 'Summary',
        styles: [
          'noun-topic',
          'benefit-summary',
          'question-or-sentence',
        ] satisfies TopicDoormatDescriptionStyle[],
      },
      {
        label: 'task/action descriptions',
        exampleLabel: 'Task/action',
        styles: [
          'action-oriented',
          'how-to',
        ] satisfies TopicDoormatDescriptionStyle[],
      },
      {
        label: 'status or date-change descriptions',
        exampleLabel: 'Status/date-change',
        styles: [
          'status-or-date-change',
        ] satisfies TopicDoormatDescriptionStyle[],
      },
    ];

    return evidenceGroups
      .map((group) => ({
        label: group.label,
        exampleLabel: group.exampleLabel,
        examples: group.styles
          .flatMap((style) => analysis.examplesByStyle.get(style) ?? [])
          .sort((a, b) => a - b)
          .slice(0, 4),
      }))
      .filter((group) => group.examples.length > 0);
  }

  private getTopicDoormatStyleLabel(
    style: Exclude<TopicDoormatDescriptionStyle, 'unclear'>,
  ): string {
    if (style === 'noun-topic') return 'noun/topic summaries';
    if (style === 'benefit-summary') return 'benefit summaries';
    if (style === 'status-or-date-change') {
      return 'status or date-change descriptions';
    }
    if (style === 'how-to') return 'How to descriptions';
    if (style === 'question-or-sentence') {
      return 'question or sentence descriptions';
    }
    return 'action-oriented descriptions';
  }

  private buildTopicDoormatIssueGroups(
    rows: TopicDoormatIssueRow[],
  ): TopicDoormatIssueGroup[] {
    this.topicDoormatIssueCategories =
      this.buildTopicDoormatIssueCategories(rows);
    this.updateTopicDoormatRowHealth(
      this.getTopicDoormatHealthFromCategories(this.topicDoormatIssueCategories),
    );

    const groups = new Map<number, TopicDoormatIssueGroup>();

    rows.forEach((row) => {
      const sectionIndex = row.sectionIndex ?? 0;
      const group = groups.get(sectionIndex) ?? {
        sectionIndex,
        sectionTitle:
          row.sectionTitle ||
          (sectionIndex ? `Section ${sectionIndex}` : 'Topic doormats'),
        doormatCount: 0,
        sectionRows: [],
        doormatRows: [],
      };
      if (!group.sectionTitle && row.sectionTitle) {
        group.sectionTitle = row.sectionTitle;
      }
      if (row.rowType === 'section') {
        group.sectionRows.push(row);
      } else if (!this.isNoIssueRow(row)) {
        group.doormatRows.push(row);
      }
      if (row.rowType === 'doormat' && row.sectionItemIndex) {
        group.doormatCount = Math.max(group.doormatCount, row.sectionItemIndex);
      }
      groups.set(sectionIndex, group);
    });

    return Array.from(groups.values())
      .map((group) => ({
        ...group,
        sectionRows: this.sortTopicDoormatRowsForGroup(group.sectionRows),
        doormatRows: this.sortTopicDoormatRowsForGroup(group.doormatRows),
      }))
      .sort((a, b) => a.sectionIndex - b.sectionIndex);
  }

  private updateTopicDoormatSummaryState(): void {
    this.topicDoormatIssueCategories =
      this.buildTopicDoormatIssueCategories(this.topicDoormatIssueRows);
    this.updateTopicDoormatRowHealth(
      this.getTopicDoormatHealthFromCategories(this.topicDoormatIssueCategories),
    );
  }

  private buildTopicDoormatIssueCategories(
    rows: TopicDoormatIssueRow[],
  ): TopicDoormatIssueSummary[] {
    const byIssue = new Map<string, TopicDoormatIssueSummary>();

    rows.forEach((row) => {
      if (this.isNoIssueRow(row)) return;
      const issueId = row.issueId || row.issue;
      if (!issueId) return;
      const existing = byIssue.get(issueId);
      if (!existing) {
        byIssue.set(issueId, {
          label: row.issue,
          severity: row.severity,
          rowType: row.rowType,
        });
        return;
      }

      if (this.getSeverityRank(row.severity) > this.getSeverityRank(existing.severity)) {
        existing.severity = row.severity;
      }
      if (row.rowType === 'section') {
        existing.rowType = 'section';
      }
    });

    return Array.from(byIssue.values()).sort((a, b) => {
      if (a.rowType !== b.rowType) return a.rowType === 'section' ? -1 : 1;
      const severityDiff =
        this.getSeverityRank(b.severity) - this.getSeverityRank(a.severity);
      if (severityDiff !== 0) return severityDiff;
      return a.label.localeCompare(b.label, undefined, { sensitivity: 'base' });
    });
  }

  private getTopicDoormatHealthFromCategories(
    categories: TopicDoormatIssueSummary[],
  ): UiHealth {
    if (!categories.length) return 'ok';
    const maxSeverity = categories.reduce(
      (max, category) =>
        this.getSeverityRank(category.severity) > this.getSeverityRank(max)
          ? category.severity
          : max,
      '',
    );
    return this.topicDoormatSeverityToHealth(maxSeverity);
  }

  private topicDoormatSeverityToHealth(severity: string | undefined | null): UiHealth {
    const s = (severity || '').toLowerCase();
    if (s === 'high') return 'severe';
    if (s === 'medium' || s === 'low') return 'minor';
    if (s === 'ok') return 'ok';
    return 'unknown';
  }

  private updateTopicDoormatRowHealth(health: UiHealth): void {
    const topicRow = this.rows.find((row) => row.__id === this.topicDoormatsId);
    if (topicRow) {
      topicRow.health = health;
    }
  }

  private getSeverityRank(severity: string | undefined | null): number {
    return ALERT_SEVERITY_RANK[(severity || '').toLowerCase()] ?? -1;
  }

  getTopicDoormatIssueCategoriesForDisplay(): TopicDoormatIssueSummary[] {
    return this.topicDoormatIssueCategories.length
      ? this.topicDoormatIssueCategories
      : this.buildTopicDoormatIssueCategories(this.topicDoormatIssueRows);
  }

  private sortTopicDoormatRowsForGroup(
    rows: TopicDoormatIssueRow[],
  ): TopicDoormatIssueRow[] {
    return [...rows].sort((a, b) => {
      const aItem = a.sectionItemIndex ?? 0;
      const bItem = b.sectionItemIndex ?? 0;
      if (aItem !== bItem) return aItem - bItem;
      if (a.rowType !== b.rowType) return a.rowType === 'section' ? -1 : 1;
      return a.issue.localeCompare(b.issue);
    });
  }

  private buildTopicDoormatSectionCounts(
    doormatSummaries: TopicDoormatSummary[],
  ): { sectionIndex: number; sectionTitle: string; count: number }[] {
    const counts = new Map<
      number,
      { sectionIndex: number; sectionTitle: string; count: number }
    >();
    doormatSummaries.forEach((summary) => {
      if (!summary.sectionIndex) return;
      const existing = counts.get(summary.sectionIndex);
      counts.set(summary.sectionIndex, {
        sectionIndex: summary.sectionIndex,
        sectionTitle: summary.sectionTitle,
        count: Math.max(existing?.count ?? 0, summary.sectionDoormatCount),
      });
    });
    return Array.from(counts.values())
      .sort((a, b) => a.sectionIndex - b.sectionIndex);
  }

  private getTopicDoormatRowSortIndex(
    row: TopicDoormatIssueRow,
    doormatSummaries: TopicDoormatSummary[],
  ): number {
    if (row.doormatIndex) return row.doormatIndex;
    if (!row.sectionIndex) return Number.MAX_SAFE_INTEGER;

    const firstSectionItem = doormatSummaries.find(
      (summary) => summary.sectionIndex === row.sectionIndex,
    );
    return (firstSectionItem?.index ?? row.sectionIndex) - 0.5;
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
      rowType: 'doormat',
      severity: 'OK',
      doormat: this.buildTopicDoormatLabel(doormat),
      doormatLabel: doormat.linkText || doormat.href || 'Doormat',
      issueId: 'no-issues',
      issue: 'No issues',
      evidence: 'No issues reported by AI.',
      recommendation: '',
      doormatIndex: doormat.index || undefined,
      sectionIndex: doormat.sectionIndex || undefined,
      sectionTitle: doormat.sectionTitle || undefined,
      sectionItemIndex: doormat.sectionItemIndex || undefined,
    };
  }

  private countTopicDoormatRowsByIssue(
    rows: TopicDoormatIssueRow[],
  ): Record<string, number> {
    return rows.reduce<Record<string, number>>((counts, row) => {
      counts[row.issueId] = (counts[row.issueId] ?? 0) + 1;
      return counts;
    }, {});
  }

  private getTopicDoormatIssueId(issue: Record<string, unknown>): string {
    const rawCategory = this.cleanString(issue['issue_category']);
    return this.getTopicDoormatIssueIdFromText(rawCategory) || 'issue';
  }

  private async loadTopicDoormatIssueTaxonomy(): Promise<void> {
    if (!this.topicDoormatIssueTaxonomyLoad) {
      this.topicDoormatIssueTaxonomyLoad = firstValueFrom(
        this.http.get<TopicDoormatIssueTaxonomy>(
          this.topicDoormatIssueTaxonomyPath,
        ),
      )
        .then((taxonomy) => {
          const categories = Array.isArray(taxonomy.issue_categories)
            ? taxonomy.issue_categories
            : [];
          categories.forEach((rawCategory) => {
            if (!rawCategory || typeof rawCategory !== 'object') return;
            const category = rawCategory as TopicDoormatIssueCategory;
            const id = this.cleanString(category.id);
            const label = this.cleanString(category.label);
            if (!id) return;

            this.topicDoormatIssueIdToLabel.set(
              id,
              label || this.toTitleCase(id.replace(/-/g, ' ')),
            );
            this.registerTopicDoormatIssueAlias(id, id);
            if (label) {
              this.registerTopicDoormatIssueAlias(label, id);
            }
          });
          this.registerTopicDoormatIssueAlias('No issues', 'no-issues');
        })
        .catch((err: unknown) => {
          this.debugTopicDoormatIssues('issue taxonomy load failed', {
            path: this.topicDoormatIssueTaxonomyPath,
            error: err instanceof Error ? err.message : String(err),
          });
        });
    }

    await this.topicDoormatIssueTaxonomyLoad;
  }

  private registerTopicDoormatIssueAlias(alias: string, issueId: string): void {
    const key = this.normalizeTopicDoormatIssueKey(alias);
    if (key) {
      this.topicDoormatIssueAliasToId.set(key, issueId);
    }
  }

  private getTopicDoormatIssueIdFromText(rawCategory: string): string {
    const normalized = this.normalizeTopicDoormatIssueKey(rawCategory);
    if (!normalized) return '';
    return this.topicDoormatIssueAliasToId.get(normalized) ?? normalized;
  }

  private normalizeTopicDoormatIssueKey(value: string): string {
    return value
      .trim()
      .toLowerCase()
      .replace(/[']/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  private normalizeTopicDoormatIssueId(rawCategory: string): string {
    const normalized = rawCategory
      .trim()
      .toLowerCase()
      .replace(/[’']/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');

    if (!normalized) return '';
    return this.topicDoormatIssueAliasToId.get(normalized) ?? normalized;
  }

  private getTopicDoormatIssueLabel(issueId: string): string {
    if (issueId === 'no-issues') return 'No issues';
    return (
      this.topicDoormatIssueIdToLabel.get(issueId) ??
      this.toTitleCase(issueId.replace(/-/g, ' '))
    );
  }

  private toTitleCase(value: string): string {
    return value.replace(/\b\w/g, (match) => match.toUpperCase());
  }

  private hasValidTopicDoormatObjectiveEvidence(
    issueId: string,
    doormat?: TopicDoormatSummary,
  ): boolean {
    if (issueId !== 'description-trailing-punctuation') return true;
    if (!doormat?.description) return false;
    return /[.:;?!,]$/.test(doormat.description.trim());
  }

  private buildTopicDoormatLabel(doormat: TopicDoormatSummary): string {
    const itemIndex = doormat.sectionItemIndex || doormat.index;
    const itemLabel = [
      itemIndex ? `${itemIndex}.` : '',
      doormat.linkText || doormat.href || 'Doormat',
    ]
      .filter(Boolean)
      .join(' ');
    if (doormat.sectionTitle) {
      return `${doormat.sectionTitle}: ${itemLabel}`;
    }
    return [
      doormat.index ? `${doormat.index}.` : '',
      doormat.linkText || doormat.href || 'Doormat',
    ]
      .filter(Boolean)
      .join(' ');
  }

  private buildTopicDoormatSectionLabel(
    sectionIndex: number,
    doormatSummaries: TopicDoormatSummary[],
  ): string {
    const sectionTitle =
      doormatSummaries.find((summary) => summary.sectionIndex === sectionIndex)
        ?.sectionTitle || '';
    return sectionTitle
      ? `Section ${sectionIndex}: ${sectionTitle}`
      : `Section ${sectionIndex}`;
  }

  private isReportableTopicDoormatIssue(
    issue: Record<string, unknown>,
    doormat?: TopicDoormatSummary,
  ): boolean {
    const issueCategory = this.getTopicDoormatIssueId(issue);
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
    const issueCategory = this.getTopicDoormatIssueId(issue);
    const details =
      issue['evidence_details'] && typeof issue['evidence_details'] === 'object'
        ? (issue['evidence_details'] as Record<string, unknown>)
        : null;
    const detailParts: string[] = [];

    if (issueCategory === 'too-many-doormats-in-section') {
      const normalizedEvidence =
        this.buildTooManyTopicDoormatsEvidence(doormat);
      if (normalizedEvidence) return normalizedEvidence;
    }

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

  private buildTooManyTopicDoormatsEvidence(
    doormat?: TopicDoormatSummary,
  ): string {
    if (
      !doormat?.sectionDoormatCount ||
      !doormat.sectionIndex ||
      !doormat.sectionItemIndex
    ) {
      return '';
    }

    const sectionLabel = doormat.sectionTitle
      ? `"${doormat.sectionTitle}"`
      : `section ${doormat.sectionIndex}`;
    return `${doormat.sectionDoormatCount}/9 doormats in ${sectionLabel}; item ${doormat.sectionItemIndex}`;
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

  private isParseableTopicDoormatIssueResponseText(text: string): boolean {
    const parsed = this.looseJsonParse(this.stripCodeFences(text));
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
      return false;
    }
    const root = parsed as Record<string, unknown>;
    return (
      Array.isArray(root['doormats']) ||
      Array.isArray(root['section_issues'])
    );
  }

  private stripCodeFences(value: string): string {
    const trimmed = value.trim();
    const fencedJson = trimmed.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);
    return (fencedJson?.[1] ?? trimmed)
      .replace(/^```(?:json)?\s*/i, '')
      .replace(/\s*```$/i, '')
      .trim();
  }

  private looseJsonParse(value: string): unknown | null {
    const candidates = [
      value,
      this.extractJsonObjectText(value),
    ].filter((candidate): candidate is string => !!candidate);

    for (const candidate of candidates) {
      const normalizedCandidates = [
        candidate,
        this.removeJsonTrailingCommas(candidate),
      ];
      for (const normalized of normalizedCandidates) {
        try {
          return JSON.parse(normalized);
        } catch {
          // Try the next local repair candidate before asking a model to repair JSON.
        }
      }
    }

    return null;
  }

  private extractJsonObjectText(value: string): string | null {
    const start = value.indexOf('{');
    const end = value.lastIndexOf('}');
    if (start < 0 || end <= start) return null;
    return value.slice(start, end + 1);
  }

  private removeJsonTrailingCommas(value: string): string {
    let inString = false;
    let escaped = false;
    let output = '';

    for (let i = 0; i < value.length; i += 1) {
      const char = value[i];
      if (escaped) {
        output += char;
        escaped = false;
        continue;
      }
      if (char === '\\') {
        output += char;
        escaped = inString;
        continue;
      }
      if (char === '"') {
        inString = !inString;
        output += char;
        continue;
      }
      if (char === ',' && !inString) {
        const nextNonWhitespace = value.slice(i + 1).match(/\S/)?.[0];
        if (nextNonWhitespace === '}' || nextNonWhitespace === ']') {
          continue;
        }
      }
      output += char;
    }

    return output;
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

  private parseHtmlDocument(html: string): Document | null {
    if (!html) return null;
    try {
      return new DOMParser().parseFromString(html, 'text/html');
    } catch {
      return null;
    }
  }

  private extractTopicDoormatSummaries(doc: Document): TopicDoormatSummary[] {
    try {
      const seen = new Set<string>();
      const summaries: TopicDoormatSummary[] = [];
      const sectionIndexes = new Map<HTMLElement | string, number>();
      const sectionTitles = new Map<number, string>();
      const sectionSummaries = new Map<number, TopicDoormatSummary[]>();
      const links = Array.from(
        doc.querySelectorAll<HTMLAnchorElement>(
          '.gc-srvinfo h2 a, .gc-srvinfo h3 a',
        ),
      );

      for (const link of links) {
        const linkText = this.cleanVisibleText(link.textContent);
        const href = link.getAttribute('href') || '';
        const key = `${href}|${linkText}`;
        if (!linkText && !href) continue;
        if (seen.has(key)) continue;
        seen.add(key);

        const wrapper = link.closest<HTMLElement>('.gc-srvinfo');
        const sectionHeading = this.findTopicDoormatSectionHeading(link, wrapper);
        const sectionKey: HTMLElement | string =
          sectionHeading ?? wrapper ?? 'topic-doormats';
        let sectionIndex = sectionIndexes.get(sectionKey);
        if (!sectionIndex) {
          sectionIndex = sectionIndexes.size + 1;
          sectionIndexes.set(sectionKey, sectionIndex);
          sectionTitles.set(
            sectionIndex,
            this.cleanVisibleText(sectionHeading?.textContent) ||
              `Topic doormats ${sectionIndex}`,
          );
        }

        const sectionRows = sectionSummaries.get(sectionIndex) ?? [];
        sectionSummaries.set(sectionIndex, sectionRows);
        const item = this.findTopicDoormatItem(link);
        const descriptionElement = item?.querySelector('p') ?? null;
        const description = this.cleanVisibleText(
          descriptionElement?.textContent,
        );
        const heading = link.closest('h2, h3');
        const summary: TopicDoormatSummary = {
          index: summaries.length + 1,
          linkText,
          href,
          description,
          headingLevel: heading ? this.toNumber(heading.tagName.slice(1)) : null,
          itemLinkCount: item ? item.querySelectorAll('a[href]').length : 0,
          descriptionLinkCount: descriptionElement
            ? descriptionElement.querySelectorAll('a[href]').length
            : 0,
          hasDescriptionLink: !!descriptionElement?.querySelector('a[href]'),
          hasDescriptionIconOrImage: !!descriptionElement?.querySelector(
            'img, svg, i[class*="glyphicon"], i[class*="fa"], span[class*="glyphicon"], span[class*="fa"]',
          ),
          hasDescriptionSpecialFormatting:
            !!descriptionElement?.querySelector(
              'strong, b, em, i, ul, ol, li, mark, code',
            ),
          rawItemText: this.cleanVisibleText(item?.textContent).slice(0, 500),
          linkTextCharacterCount: linkText.length,
          descriptionCharacterCount: description.length,
          sectionIndex,
          sectionTitle: sectionTitles.get(sectionIndex) ?? '',
          sectionItemIndex: sectionRows.length + 1,
          sectionDoormatCount: 0,
        };
        summaries.push(summary);
        sectionRows.push(summary);
      }

      sectionSummaries.forEach((sectionRows) => {
        sectionRows.forEach((summary) => {
          summary.sectionDoormatCount = sectionRows.length;
        });
      });

      return summaries;
    } catch {
      return [];
    }
  }

  private findTopicDoormatSectionHeading(
    link: HTMLAnchorElement,
    wrapper: HTMLElement | null,
  ): HTMLElement | null {
    const linkHeading = link.closest('h2');
    const searchRoot = wrapper ?? link.ownerDocument.body;
    const headings = Array.from(searchRoot.querySelectorAll<HTMLElement>('h2'));
    const precedingHeading = headings
      .filter(
        (heading) =>
          heading !== linkHeading &&
          !!(
            heading.compareDocumentPosition(link) &
            Node.DOCUMENT_POSITION_FOLLOWING
          ),
      )
      .pop();
    if (precedingHeading) return precedingHeading;

    let current: HTMLElement | null = wrapper;
    while (current) {
      let previous = current.previousElementSibling as HTMLElement | null;
      while (previous) {
        if (previous.matches('h2')) return previous;
        const nestedHeading = Array.from(
          previous.querySelectorAll<HTMLElement>('h2'),
        ).pop();
        if (nestedHeading) return nestedHeading;
        previous = previous.previousElementSibling as HTMLElement | null;
      }
      current = current.parentElement;
    }

    return null;
  }

  private findTopicDoormatItem(link: HTMLAnchorElement): HTMLElement | null {
    let current: HTMLElement | null = link;
    while (current && !current.classList.contains('gc-srvinfo')) {
      if (current !== link && current.querySelector('p')) return current;
      current = current.parentElement;
    }
    return null;
  }

  private extractMostRequestedLinks(doc: Document): {
    text: string;
    href: string;
  }[] {
    try {
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
    return issue.issueId === 'no-issues';
  }

  topicDoormatRowTypeLabel(issue: TopicDoormatIssueRow): string {
    return issue.rowType === 'section' ? 'Section' : 'Doormat';
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
