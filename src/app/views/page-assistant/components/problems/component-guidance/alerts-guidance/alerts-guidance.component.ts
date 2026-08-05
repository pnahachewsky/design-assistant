import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  effect,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { Subscription } from 'rxjs';
import { UploadStateService } from '../../../../services/upload-state.service';
import { AlertAiService } from '../../../../services/alerts/alert-ai.service';

export interface AlertIssue {
  alertIndex?: number;
  category: string;
  severity: string;
  description: string;
  recommendation: string;
  include: boolean;
}

export const ALERT_SEVERITY_RANK: Record<string, number> = {
  high: 3,
  medium: 2,
  low: 1,
};

export function isNoAlertIssue(issue: Pick<AlertIssue, 'category'>): boolean {
  return (issue.category || '').trim().toLowerCase() === 'no issues';
}

export const DEFAULT_ALERT_ISSUES: AlertIssue[] = [
  {
    category: 'Too wordy',
    severity: 'Medium',
    description: 'Sample: Alert contains 4 sentences; guidance recommends 1-2',
    recommendation: "Rewrite to: 'Processing for the Disability tax credit...'.",
    include: true,
  },
  {
    category: 'Too many links',
    severity: 'Low',
    description: 'Sample: Alert contains references to multiple tools/links (Process...)',
    recommendation: 'Limit to one primary link',
    include: true,
  },
  {
    category: 'Missing heading',
    severity: 'High',
    description: 'Sample: Alert lacs a descriptive heading, reducing accessibility...',
    recommendation: "Add a heading like 'Processing update'.",
    include: true,
  },
  {
    category: 'Accessibility - Focus order',
    severity: 'High',
    description: 'Sample: Lack of heading prevents efficient screen reader navigation...',
    recommendation: 'Implement semantic heading tag within the alert component...',
    include: true,
  }
];

export function computeAlertCategories(
  issues: AlertIssue[],
  rank: Record<string, number> = ALERT_SEVERITY_RANK,
): { label: string; severity: string }[] {
  const bestSeverity = new Map<string, string>();
  for (const issue of issues) {
    if (isNoAlertIssue(issue)) continue;
    const cat = issue.category;
    if (!cat) continue;
    const current = bestSeverity.get(cat);
    const next = issue.severity ?? '';
    const currentRank = current ? rank[current.toLowerCase()] ?? 0 : -1;
    const nextRank = rank[next.toLowerCase()] ?? 0;
    if (nextRank >= currentRank) {
      bestSeverity.set(cat, next);
    }
  }
  return Array.from(bestSeverity.entries()).map(([label, severity]) => ({ label, severity }));
}

export function computeAlertMaxSeverity(
  issues: AlertIssue[],
  rank: Record<string, number> = ALERT_SEVERITY_RANK,
): string | null {
  let max: string | null = null;
  let maxRank = -1;
  for (const issue of issues) {
    if (isNoAlertIssue(issue)) continue;
    const sev = (issue.severity || '').toLowerCase();
    const r = rank[sev] ?? -1;
    if (r > maxRank) {
      maxRank = r;
      max = issue.severity;
    }
  }
  return max;
}

@Component({
  selector: 'ca-alerts-guidance',
  standalone: true,
  imports: [CommonModule, FormsModule, TableModule, CheckboxModule, ButtonModule],
  templateUrl: './alerts-guidance.component.html',
  styleUrls: ['./alerts-guidance.component.css', '../component-guidance.component.css'],
})
export class AlertsGuidanceComponent implements OnInit, OnChanges, OnDestroy {
  private readonly uploadState = inject(UploadStateService);
  private readonly alertAi = inject(AlertAiService);
  private issuesUpdatedSub?: Subscription;
  private analysisStateSub?: Subscription;
  private suppressIncludeToggle = false;

  @Input() selectAll = true;
  @Output() maxSeverityChange = new EventEmitter<string | null>();
  @Output() categoriesChange = new EventEmitter<{ label: string; severity: string }[]>();
  @Output() loadingChange = new EventEmitter<boolean>();
  @Output() errorChange = new EventEmitter<boolean>();

  issues: AlertIssue[] = [];
  isLoading = false;
  reanalysisRecommended = true;
  private analyzedHtml = '';
  private analyzedRevision = -1;
  private requestHtml = '';

  constructor() {
    effect(() => {
      const revision = this.uploadState.getWorkingContentRevision();
      const html = this.uploadState.getWorkingHtml();
      this.uploadState.getRecommendationReviewPending();

      if (
        this.analyzedRevision >= 0 &&
        revision !== this.analyzedRevision
      ) {
        this.reanalysisRecommended = true;
      }
      if (this.requestHtml && html !== this.requestHtml) {
        this.reanalysisRecommended = true;
      }
    });
  }

  ngOnInit(): void {
    this.sortIssues();
    this.applySelectAll(this.selectAll);
    this.emitDerived();
    this.issuesUpdatedSub = this.alertAi.issuesUpdated$.subscribe((update) => {
      const html = this.uploadState.getWorkingHtml();
      if (!html) return;
      const cached = this.alertAi.getCachedIssues(html);
      if (cached === null) {
        if (update.html !== html) return;
        this.issues = [];
        this.analyzedHtml = '';
        this.analyzedRevision = -1;
        this.reanalysisRecommended = true;
        this.emitDerived();
        return;
      }
      this.applyAnalysis(cached, html, false);
    });
    this.analysisStateSub = this.alertAi.analysisState$.subscribe((state) => {
      if (state.html !== this.uploadState.getWorkingHtml()) return;
      this.setLoading(state.loading);
      this.setError(state.error);
    });
    this.restoreOrAnalyze();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectAll'] && !changes['selectAll'].firstChange) {
      this.applySelectAll(this.selectAll);
      this.emitDerived();
    }
  }

  ngOnDestroy(): void {
    this.issuesUpdatedSub?.unsubscribe();
    this.analysisStateSub?.unsubscribe();
  }

  onIncludeToggle(): void {
    if (this.suppressIncludeToggle) return;
    this.sortIssues();
    this.emitDerived();
    this.syncCache();
  }

  get reanalysisDisabled(): boolean {
    return (
      this.isLoading || this.uploadState.getRecommendationReviewPending()
    );
  }

  async analyzeCurrentPage(): Promise<void> {
    const html = this.uploadState.getWorkingHtml();
    if (!html || this.reanalysisDisabled) return;

    this.alertAi.prepareForReanalysis(html);
    this.issues = [];
    this.analyzedHtml = '';
    this.analyzedRevision = -1;
    this.reanalysisRecommended = true;
    this.emitDerived();
    await this.loadFromAi(true, true);
  }

  private applySelectAll(flag: boolean, sync = true): void {
    if (!sync) return;
    this.suppressIncludeToggle = true;
    try {
      this.issues = this.issues.map((issue) => ({
        ...issue,
        include: isNoAlertIssue(issue) ? false : flag,
      }));
      this.sortIssues();
    } finally {
      this.suppressIncludeToggle = false;
    }
    this.syncCache();
  }

  private sortIssues(): void {
    this.issues = [...this.issues].sort((a, b) => {
      const ra = ALERT_SEVERITY_RANK[a.severity.toLowerCase()] ?? -1;
      const rb = ALERT_SEVERITY_RANK[b.severity.toLowerCase()] ?? -1;
      if (ra !== rb) return rb - ra;
      return a.category.localeCompare(b.category, undefined, { sensitivity: 'base' });
    });
  }

  private emitDerived(): void {
    this.maxSeverityChange.emit(computeAlertMaxSeverity(this.issues));
    this.categoriesChange.emit(computeAlertCategories(this.issues));
  }

  private normalizeCategoryLabel(label: string): string {
    const trimmed = (label || '').trim();
    if (!trimmed) return trimmed;
    const lower = trimmed.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

  severityClass(severity: string | undefined | null): string {
    const s = (severity || '').toLowerCase();
    if (s === 'low') return 'chip-minor';
    if (s === 'medium') return 'chip-med';
    if (s === 'high') return 'chip-severe';
    return 'chip-unk';
  }

  isNoIssueRow(issue: AlertIssue): boolean {
    return isNoAlertIssue(issue);
  }

  private restoreOrAnalyze(): void {
    const html = this.uploadState.getWorkingHtml();
    if (!html) return;

    const cached = this.alertAi.getCachedIssues(html);
    if (cached !== null) {
      this.applyAnalysis(cached, html, false);
      return;
    }

    const latest = this.alertAi.getLatestCachedAnalysis();
    if (latest) {
      this.applyAnalysis(latest.issues, latest.html, true);
      return;
    }

    void this.loadFromAi();
  }

  private async loadFromAi(force = false, allowWhileLoading = false): Promise<void> {
    const html = this.uploadState.getWorkingHtml();
    if (!html || (this.isLoading && !allowWhileLoading)) return;

    const cached = this.alertAi.getCachedIssues(html);
    if (!force && cached !== null) {
      this.applyAnalysis(cached, html, false);
      return;
    }

    const requestHtml = html;
    this.setLoading(true);
    this.setError(false);
    this.requestHtml = requestHtml;
    try {
      const selectedModel = this.uploadState.getSelectedAiModel();
      const aiIssues = await this.alertAi.analyze(
        requestHtml,
        undefined,
        selectedModel,
      );
      if (this.uploadState.getWorkingHtml() !== requestHtml) {
        this.reanalysisRecommended = true;
        return;
      }
      const normalizedIssues = aiIssues.map((issue) => ({
        ...issue,
        category: this.normalizeCategoryLabel(issue.category),
        severity: issue.severity || 'Unknown',
        include: issue.include ?? true,
      }));
      this.alertAi.cacheIssues(requestHtml, normalizedIssues);
      this.applyAnalysis(normalizedIssues, requestHtml, false);
    } catch (err) {
      console.error('Alert AI call failed', err);
      this.reanalysisRecommended = true;
      this.alertAi.failAnalysis(requestHtml);
      this.setError(true);
    } finally {
      this.requestHtml = '';
      this.setLoading(false);
    }
  }

  private applyAnalysis(
    issues: AlertIssue[],
    analyzedHtml: string,
    reanalysisRecommended: boolean,
  ): void {
    this.issues = this.alertAi.normalizeAlertIssues(issues).map((issue) => ({
      ...issue,
      category: this.normalizeCategoryLabel(issue.category),
    }));
    this.analyzedHtml = analyzedHtml;
    this.analyzedRevision = this.uploadState.getWorkingContentRevision();
    this.reanalysisRecommended = reanalysisRecommended;
    this.sortIssues();
    this.applySelectAll(this.selectAll, false);
    this.emitDerived();
    this.setError(false);
  }

  private setLoading(flag: boolean): void {
    this.isLoading = flag;
    this.loadingChange.emit(flag);
  }

  private setError(flag: boolean): void {
    this.errorChange.emit(flag);
  }

  private syncCache(): void {
    // Keep AlertAiService cache in sync with current checkbox selections so
    // other flows can reuse the user's chosen pain points without re-calling AI.
    const html = this.analyzedHtml || this.uploadState.getWorkingHtml();
    if (!html || !this.issues.length) return;
    this.alertAi.cacheIssues(html, this.issues);
  }
}
