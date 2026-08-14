// src/app/views/page-assistant/components/tools/component-guidance.component.ts
import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  effect,
  inject,
} from '@angular/core';
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
import { AlertAiService } from '../../../services/alerts/alert-ai.service';
import {
  coerceInteractiveResultLeadIns,
  getReportableAlertsFromHtml,
} from '../../../services/alerts/alert-reportable.utils';
import {
  ComponentAiService,
  ComponentAiInput,
  ComponentAiResult,
} from '../../../services/component-ai.service';

import { HttpClient } from '@angular/common/http';
import { Subscription, firstValueFrom } from 'rxjs';
import { environment } from '../../../../../../environments/environment';
import { ChangeDetectorRef } from '@angular/core';
import { AiModel } from '../../../data/data.model';
import { TopicDoormatExtractorService } from '../../../services/topic-doormats/topic-doormat-extractor.service';
import { TopicDoormatIssueAnalysisService } from '../../../services/topic-doormats/topic-doormat-issue-analysis.service';
import { TopicDoormatPresenterService } from '../../../services/topic-doormats/topic-doormat-presenter.service';
import { TopicDoormatAnalysisStateService } from '../../../services/topic-doormats/topic-doormat-analysis-state.service';
import { TopicDoormatTemplateNormalizerService } from '../../../services/topic-doormats/topic-doormat-template-normalizer.service';
import {
  TOPIC_DOORMAT_DIAGNOSTIC_ISSUE_IDS,
  TopicDoormatCellProvenance,
  TopicDoormatEvidenceItem,
  TopicDoormatIssueGroup,
  TopicDoormatIssueRow,
  TopicDoormatIssueSummary,
} from '../../../services/topic-doormats/topic-doormat.types';

// UI shows these:
type UiHealth = 'severe' | 'moderate' | 'minor' | 'ok' | 'unknown';

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

      .topic-doormat-evidence-list {
        list-style: none;
        display: grid;
        gap: 0.25rem;
        margin: 0;
        padding: 0;
      }

      .topic-doormat-evidence-list li {
        display: flex;
        align-items: center;
        gap: 0.35rem;
        flex-wrap: wrap;
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
  private messageService = inject(MessageService);
  private topicDoormatExtractor = inject(TopicDoormatExtractorService);
  private topicDoormatIssueAnalysis = inject(TopicDoormatIssueAnalysisService);
  private topicDoormatPresenter = inject(TopicDoormatPresenterService);
  private topicDoormatAnalysisState = inject(TopicDoormatAnalysisStateService);
  private topicDoormatTemplateNormalizer = inject(
    TopicDoormatTemplateNormalizerService,
  );
  private alertIssuesSub?: Subscription;
  private lastGuidanceRevision = -1;
  private lastExpandedAlertAnalysisHtml = '';

  @Output() analysisAvailable = new EventEmitter<void>();

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
  topicDoormatReanalysisRecommended = false;
  private prevAlertHasIssues = false;
  private topicDoormatAnalyzedHtml = '';

  // multi-select
  selectedRows: GuidanceRow[] = [];
  isLoading = false;
  // controlled expansion keys for PrimeNG table
  expandedRows: Record<string, boolean> = {};
  readonly alertsNameKey = 'page.tools.guidance.craVariant.alerts.title';
  readonly topicDoormatsId = 'topicDoormats';
  readonly topicDoormatsNameKey =
    'page.tools.guidance.craVariant.topicDoormats.title';
  readonly topicDoormatsUrlKey =
    'page.tools.guidance.craVariant.doormats.url';
  readonly subwayDoormatsId = 'subwayDoormats';
  private readonly aiAssistedAidaTopicDoormatIssueIds = new Set([
    'description-missing-needed-information',
    'inconsistent-link-name-style',
    'link-name-too-different-from-destination-title',
    'mixed-description-style-in-section',
    'mixed-link-name-styles-in-section',
  ]);
  private readonly modelOwnedTopicDoormatIssueIds = new Set([
    'description-capitalization',
    'description-incorrect-style',
    'description-lacks-clarity',
    'description-list-separators',
    'description-repeats-link-text',
    'description-special-formatting',
    'description-uses-and-before-final-item',
    'description-uses-icons-or-images',
    'duplicate-or-near-duplicate-description',
    'enhancement-label-not-needed',
    'enhancement-label-wrong-type',
    'inconsistent-description-style',
    'link-name-lacks-clarity',
    'link-name-not-unique',
    'misdirected-link',
    'missing-description',
  ]);

  cols = [
    { field: 'order', header: 'Index' },
    { field: 'component', header: 'Component' },
    { field: 'url', header: 'UCDG guidance' },
    { field: 'health', header: 'Component health' },
    { field: 'rationale', header: 'Explanation' },
  ];

  // rank for custom sort (severe > moderate > minor > ok > unknown)
  private readonly HEALTH_RANK: Record<UiHealth, number> = {
    severe: 4,
    moderate: 3,
    minor: 2,
    ok: 1,
    unknown: 0,
  };

  constructor() {
    effect(() => {
      const revision = this.uploadState.getWorkingContentRevision();
      const html = this.uploadState.getWorkingHtml();
      if (revision === this.lastGuidanceRevision) return;
      this.lastGuidanceRevision = revision;
      this.syncAlertGuidanceRowForWorkingHtml(html);
      this.syncTopicDoormatGuidanceRowForWorkingHtml(html);
      this.applySharedTopicDoormatAnalysis(
        this.topicDoormatAnalysisState.hasAnalysis(),
        this.topicDoormatAnalysisState.getAnalyzedHtml(),
        this.topicDoormatAnalysisState.getIssueRows(),
      );
    });
    effect(() => {
      const analyzedHtml = this.topicDoormatAnalysisState.getAnalyzedHtml();
      const rows = this.topicDoormatAnalysisState.getIssueRows();
      const hasAnalysis = this.topicDoormatAnalysisState.hasAnalysis();
      this.applySharedTopicDoormatAnalysis(hasAnalysis, analyzedHtml, rows);
    });
  }

  ngOnInit() {
    const data = this.uploadState.getUploadData();
    if (data?.originalHtml) {
      const workingHtml = this.uploadState.getWorkingHtml();
      const originalGuidance = this.validator.collectGuidanceUrls(
        data.originalHtml,
      );
      const workingDynamicGuidance = this.validator
        .collectGuidanceUrls(workingHtml)
        .filter(
          (item) =>
            item.name === this.alertsNameKey ||
            item.id === this.topicDoormatsId,
        );
      this.guidanceList = [
        ...originalGuidance.filter(
          (item) =>
            item.name !== this.alertsNameKey &&
            item.id !== this.topicDoormatsId,
        ),
        ...workingDynamicGuidance,
      ];
      this.rows = this.buildRows(this.guidanceList);
      this.removeAlertRowWhenNoReportableAlerts(workingHtml);
      this.syncTopicDoormatGuidanceRowForWorkingHtml(workingHtml);
      this.syncAlertRowSelection();
    }
    this.applyCachedAlertIssues();
    this.applySharedTopicDoormatAnalysis(
      this.topicDoormatAnalysisState.hasAnalysis(),
      this.topicDoormatAnalysisState.getAnalyzedHtml(),
      this.topicDoormatAnalysisState.getIssueRows(),
    );
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

  private syncAlertGuidanceRowForWorkingHtml(html: string): void {
    if (!html) return;
    const reportableAlerts = getReportableAlertsFromHtml(html, {
      interactiveResultLeadIns: this.getInteractiveResultLeadIns(),
    });
    const alertRow = this.rows.find(
      (row) => row.__nameKey === this.alertsNameKey,
    );

    if (!reportableAlerts.length) {
      if (!alertRow) return;
      this.rows = this.rows.filter((row) => row !== alertRow);
      this.selectedRows = this.selectedRows.filter((row) => row !== alertRow);
      const expandedRows = { ...this.expandedRows };
      delete expandedRows[alertRow.url];
      this.expandedRows = expandedRows;
      this.reindexRows();
      this.cdr.markForCheck();
      return;
    }

    if (alertRow) return;
    const alertGuidance = this.validator
      .collectGuidanceUrls(html)
      .find((item) => item.name === this.alertsNameKey);
    if (!alertGuidance) return;
    const newRow = this.buildRows([alertGuidance])[0];
    this.rows = [...this.rows, newRow].sort((a, b) => {
      const rankDiff =
        this.getGuidanceSortRank(a.__nameKey, a.__id) -
        this.getGuidanceSortRank(b.__nameKey, b.__id);
      return rankDiff || a.component.localeCompare(b.component);
    });
    this.reindexRows();
    this.cdr.markForCheck();
  }

  private syncTopicDoormatGuidanceRowForWorkingHtml(html: string): void {
    const doc = this.topicDoormatExtractor.parseHtmlDocument(html);
    const hasCandidates = !!doc && this.topicDoormatExtractor.hasCandidates(doc);
    const topicRow = this.rows.find(
      (row) => row.__id === this.topicDoormatsId,
    );

    if (hasCandidates) {
      if (!topicRow) {
        const newRow = this.buildRows([
          {
            id: this.topicDoormatsId,
            name: this.topicDoormatsNameKey,
            url: this.topicDoormatsUrlKey,
          },
        ])[0];
        this.rows = [...this.rows, newRow].sort((a, b) => {
          const rankDiff =
            this.getGuidanceSortRank(a.__nameKey, a.__id) -
            this.getGuidanceSortRank(b.__nameKey, b.__id);
          return rankDiff || a.component.localeCompare(b.component);
        });
        this.reindexRows();
      }

      if (this.topicDoormatAnalyzedHtml && this.topicDoormatAnalyzedHtml !== html) {
        const uploadData = this.uploadState.getUploadData();
        if (uploadData?.originalHtml === html) {
          this.resetTopicDoormatAnalysisState();
        } else if (
          this.topicDoormatAnalysisState.getAnalyzedHtml() ===
          this.topicDoormatAnalyzedHtml
        ) {
          this.topicDoormatAnalysisState.clear();
        }
      }
      this.cdr.markForCheck();
      return;
    }

    this.rows = this.rows.filter(
      (row) => row.__id !== this.topicDoormatsId,
    );
    this.selectedRows = this.selectedRows.filter(
      (row) => row.__id !== this.topicDoormatsId,
    );
    if (topicRow) {
      const expandedRows = { ...this.expandedRows };
      delete expandedRows[topicRow.url];
      this.expandedRows = expandedRows;
    }
    this.resetTopicDoormatAnalysisState();
    this.reindexRows();
    this.cdr.markForCheck();
  }

  private resetTopicDoormatAnalysisState(): void {
    this.topicDoormatIssuesResponseReceived = false;
    this.topicDoormatIssuesError = false;
    this.topicDoormatIssuesErrorDetail = '';
    this.topicDoormatIssueRows = [];
    this.topicDoormatIssueGroups = [];
    this.topicDoormatIssueCategories = [];
    this.topicDoormatReanalysisRecommended = false;
    this.topicDoormatAnalyzedHtml = '';
    this.topicDoormatAnalysisState.clear();
    this.updateTopicDoormatRowHealth('unknown');
  }

  private applySharedTopicDoormatAnalysis(
    hasAnalysis: boolean,
    analyzedHtml: string,
    rows: TopicDoormatIssueRow[],
  ): void {
    if (!hasAnalysis || !analyzedHtml || !rows.length) {
      return;
    }
    const currentHtml = this.uploadState.getWorkingHtml();
    const uploadData = this.uploadState.getUploadData();
    const analysisMatchesCurrentHtml = analyzedHtml === currentHtml;
    const currentHtmlIsGenerated =
      !!uploadData?.originalHtml && uploadData.originalHtml !== currentHtml;
    if (!analysisMatchesCurrentHtml && !currentHtmlIsGenerated) {
      return;
    }
    if (
      this.topicDoormatIssuesResponseReceived &&
      this.topicDoormatAnalyzedHtml === analyzedHtml &&
      this.topicDoormatIssueRows === rows
    ) {
      return;
    }

    this.topicDoormatIssuesLoading = false;
    this.topicDoormatIssuesError = false;
    this.topicDoormatIssuesErrorDetail = '';
    this.topicDoormatIssuesResponseReceived = true;
    this.topicDoormatIssueRows = rows;
    this.topicDoormatAnalyzedHtml = analyzedHtml;
    this.topicDoormatIssueGroups = this.buildTopicDoormatIssueGroups(rows);
    this.topicDoormatReanalysisRecommended = !analysisMatchesCurrentHtml;
    this.expandTopicDoormatRow();
    this.analysisAvailable.emit();
    this.cdr.markForCheck();
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
      case 'moderate':
        return 'Moderate';
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
    const html = this.uploadState.getWorkingHtml();
    if (!html) return;
    const cached = this.alertAi.getCachedIssues(html);
    const analysis =
      cached !== null
        ? { html, issues: cached }
        : this.alertAi.getLatestCachedAnalysis();
    if (!analysis) return;

    const normalizedIssues = this.alertAi
      .normalizeAlertIssues(analysis.issues)
      .map((issue) => ({
        ...issue,
        category: this.normalizeCategoryLabel(issue.category),
      }));
    this.alertCategories = this.sortCategories(
      computeAlertCategories(normalizedIssues),
    );
    this.alertMaxSeverity = computeAlertMaxSeverity(normalizedIssues);
    this.alertHasIssues = this.alertCategories.length > 0;
    this.alertLoading = false;
    this.alertError = false;
    this.alertLoadAttempted = true;
    this.alertDataLoaded = true;
    this.syncAlertRowSelection();
    this.prevAlertHasIssues = this.alertHasIssues;
    const alertRow = this.rows.find(
      (row) => row.__nameKey === this.alertsNameKey,
    );
    if (alertRow) {
      this.expandedRows = { ...this.expandedRows, [alertRow.url]: true };
    }
    if (
      alertRow &&
      analysis.html !== this.lastExpandedAlertAnalysisHtml
    ) {
      this.lastExpandedAlertAnalysisHtml = analysis.html;
      this.analysisAvailable.emit();
    }
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
    if (
      event?.data?.__id === this.topicDoormatsId &&
      !this.topicDoormatIssuesResponseReceived &&
      !this.topicDoormatIssueRows.length
    ) {
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

  rerunTopicDoormatIssues(): void {
    this.topicDoormatIssuesResponseReceived = false;
    this.topicDoormatReanalysisRecommended = false;
    this.topicDoormatAnalyzedHtml = '';
    void this.analyzeTopicDoormatIssues();
  }

  clearTopicDoormatIssuesReport(): void {
    this.resetTopicDoormatAnalysisState();
    this.cdr.markForCheck();
  }

  expandAll(): void {
    this.expandedRows = Object.fromEntries(this.tableRows.map((r) => [r.url, true]));
  }

  collapseAll(): void {
    this.expandedRows = {};
  }

  private async analyzeTopicDoormatIssues(): Promise<void> {
    if (this.topicDoormatIssuesLoading) {
      return;
    }

    const uploadData = this.uploadState.getUploadData();
    const sourceHtml = this.uploadState.getWorkingHtml();
    const normalization =
      this.topicDoormatTemplateNormalizer.normalizeLegacyDoormats(sourceHtml);
    const html = normalization.html;
    if (
      this.topicDoormatIssuesResponseReceived &&
      this.topicDoormatAnalyzedHtml === html
    ) {
      return;
    }
    const doc = this.topicDoormatExtractor.parseHtmlDocument(html);
    if (!doc) return;
    const extractedDoormatSummaries =
      this.topicDoormatExtractor.extractSummaries(doc);
    if (!extractedDoormatSummaries.length) return;
    this.topicDoormatIssuesLoading = true;
    this.topicDoormatIssuesError = false;
    this.topicDoormatIssuesErrorDetail = '';
    this.topicDoormatIssueRows = [];
    this.topicDoormatIssueGroups = [];
    this.topicDoormatIssueCategories = [];
    this.updateTopicDoormatRowHealth('unknown');
    const analysisStart = performance.now();

    try {
      const pageLanguage = this.topicDoormatExtractor.detectPageLanguage(
        doc,
        uploadData,
      );
      const bilingualDoormatSummaries =
        await this.topicDoormatExtractor.enrichOppositeLanguageLengths(
          extractedDoormatSummaries,
          uploadData,
          pageLanguage,
        );
      const doormatSummaries = await this.topicDoormatExtractor.enrichDestinationContext(
        bilingualDoormatSummaries,
        uploadData,
      );
      if (this.uploadState.getWorkingHtml() !== sourceHtml) return;
      const hasLegacyTopicDoormatTemplate =
        this.topicDoormatExtractor.hasLegacyTemplate(doc);
      const mostRequestedLinks =
        this.topicDoormatExtractor.extractMostRequestedLinks(doc);
      const result = await this.topicDoormatIssueAnalysis.analyze({
        doormatSummaries,
        pageLanguage,
        hasLegacyTopicDoormatTemplate,
        mostRequestedLinks,
        uploadData,
        selectedModel: this.uploadState.getSelectedAiModel(),
      });
      if (this.uploadState.getWorkingHtml() !== sourceHtml) return;

      this.topicDoormatIssuesResponseReceived = true;
      if (result.text) {
        this.messageService.add({
          severity: 'info',
          summary: this.translate.instant('common.ai.generating'),
          life: 2000,
        });
      }
      this.topicDoormatIssueRows = result.rows;
      this.topicDoormatAnalyzedHtml = html;
      this.topicDoormatReanalysisRecommended = false;
      this.topicDoormatAnalysisState.setAnalysis(
        html,
        this.topicDoormatIssueRows,
        doormatSummaries,
      );
      this.topicDoormatIssueGroups = this.buildTopicDoormatIssueGroups(
        this.topicDoormatIssueRows,
      );
      this.updateTopicDoormatSummaryState();
      this.expandTopicDoormatRow();
      this.topicDoormatIssueAnalysis.debug('response parsed', {
        model: result.model,
        responseCharacters: result.text.length,
        displayedRows: this.topicDoormatIssueRows.length,
        displayedGroups: this.topicDoormatIssueGroups.length,
        totalElapsedMs: result.elapsedMs,
      });
      if (result.usedLocalFallback) {
        this.messageService.add({
          severity: 'warn',
          summary: 'Topic doormat AI response unavailable',
          detail: 'Showing deterministic local checks only.',
          sticky: true,
        });
      } else {
        this.messageService.add({
          severity: 'info',
          summary: this.translate.instant('common.ai.topicDoormatIssuesReceived', {
            model: this.getShortModelName(result.model),
          }),
          sticky: true,
        });
        const primaryModel = result.modelRotation[0];
        if (result.model !== primaryModel) {
          this.messageService.add({
            severity: 'warn',
            summary: this.translate.instant('common.ai.fallback.summary'),
            detail: this.translate.instant('common.ai.fallback.detail', {
              requested: primaryModel,
              used: result.model,
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
      this.topicDoormatIssueAnalysis.debug('request failed', {
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

  private buildTopicDoormatIssueGroups(
    rows: TopicDoormatIssueRow[],
  ): TopicDoormatIssueGroup[] {
    this.topicDoormatIssueCategories =
      this.topicDoormatPresenter.buildIssueCategories(rows);
    this.updateTopicDoormatRowHealth(
      this.topicDoormatPresenter.getHealthFromCategories(
        this.topicDoormatIssueCategories,
      ),
    );

    return this.topicDoormatPresenter.buildIssueGroups(rows);
  }

  private updateTopicDoormatSummaryState(): void {
    this.topicDoormatIssueCategories =
      this.topicDoormatPresenter.buildIssueCategories(
        this.topicDoormatIssueRows,
      );
    this.updateTopicDoormatRowHealth(
      this.topicDoormatPresenter.getHealthFromCategories(
        this.topicDoormatIssueCategories,
      ),
    );
  }

  private updateTopicDoormatRowHealth(health: UiHealth): void {
    const topicRow = this.rows.find((row) => row.__id === this.topicDoormatsId);
    if (topicRow) {
      topicRow.health = health;
    }
  }

  private expandTopicDoormatRow(): void {
    const topicRow = this.rows.find((row) => row.__id === this.topicDoormatsId);
    if (!topicRow) return;
    this.expandedRows = { ...this.expandedRows, [topicRow.url]: true };
  }

  getTopicDoormatIssueCategoriesForDisplay(): TopicDoormatIssueSummary[] {
    return this.topicDoormatIssueCategories.length
      ? this.topicDoormatIssueCategories
      : this.topicDoormatPresenter.buildIssueCategories(
          this.topicDoormatIssueRows,
        );
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
    return (
      issue.issueId === 'no-issues' ||
      TOPIC_DOORMAT_DIAGNOSTIC_ISSUE_IDS.has(issue.issueId)
    );
  }

  topicDoormatCellProvenance(
    issue: TopicDoormatIssueRow,
    cell: 'issue' | 'evidence' | 'recommendation',
  ): TopicDoormatCellProvenance[] {
    const explicit = issue.provenance?.[cell]?.filter(
      (source): source is TopicDoormatCellProvenance =>
        source === 'model' || source === 'aida',
    );
    if (explicit?.length) return Array.from(new Set(explicit));
    if (
      cell === 'issue' &&
      this.aiAssistedAidaTopicDoormatIssueIds.has(issue.issueId)
    ) {
      return ['aida', 'model'];
    }
    if (
      cell === 'issue' &&
      this.modelOwnedTopicDoormatIssueIds.has(issue.issueId)
    ) {
      return ['model'];
    }
    return ['aida'];
  }

  topicDoormatProvenanceIcon(source: TopicDoormatCellProvenance): string {
    return source === 'model' ? 'smart_toy' : 'rule';
  }

  topicDoormatProvenanceLabel(source: TopicDoormatCellProvenance): string {
    return source === 'model'
      ? this.translate.instant('page.tools.guidance.topicDoormats.provenance.model')
      : this.translate.instant('page.tools.guidance.topicDoormats.provenance.aida');
  }

  evidenceMetricParts(
    item:
      | Pick<TopicDoormatEvidenceItem, 'metric' | 'metricParts' | 'severity'>
      | string
      | undefined
      | null,
  ): { metric: string; severity?: string }[] {
    if (typeof item === 'string' || !item) {
      return (item || '')
        .split(';')
        .map((part) => part.trim())
        .filter(Boolean)
        .map((metric) => ({ metric }));
    }

    if (item.metricParts?.length) {
      return item.metricParts;
    }

    return (item.metric || '')
      .split(';')
      .map((part) => part.trim())
      .filter(Boolean)
      .map((metric) => ({ metric, severity: item.severity }));
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
