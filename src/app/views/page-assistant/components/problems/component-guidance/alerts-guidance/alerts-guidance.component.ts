import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { Subscription } from 'rxjs';
import { UploadStateService } from '../../../../services/upload-state.service';
import { AlertAiService } from '../../../../services/alert-ai.service';

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
  if (!issues.length) return null;
  let max: string | null = null;
  let maxRank = -1;
  for (const issue of issues) {
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
  private suppressIncludeToggle = false;

  @Input() selectAll = true;
  @Output() maxSeverityChange = new EventEmitter<string | null>();
  @Output() categoriesChange = new EventEmitter<{ label: string; severity: string }[]>();
  @Output() loadingChange = new EventEmitter<boolean>();
  @Output() errorChange = new EventEmitter<boolean>();
  @Output() issuesCleared = new EventEmitter<void>();

  issues: AlertIssue[] = [];
  isLoading = false;

  ngOnInit(): void {
    this.sortIssues();
    this.applySelectAll(this.selectAll);
    this.emitDerived();
    this.issuesUpdatedSub = this.alertAi.issuesUpdated$.subscribe(() => {
      const html = this.uploadState.getUploadData()?.originalHtml || '';
      if (!html) return;
      const cached = this.alertAi.getCachedIssues(html);
      if (!cached?.length) return;
      this.issues = this.alertAi.normalizeAlertIssues(cached).map((issue) => ({
        ...issue,
        category: this.normalizeCategoryLabel(issue.category),
      }));
      this.sortIssues();
      this.applySelectAll(this.selectAll, false);
      this.emitDerived();
    });
    void this.loadFromAi();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectAll'] && !changes['selectAll'].firstChange) {
      this.applySelectAll(this.selectAll);
      this.emitDerived();
    }
  }

  ngOnDestroy(): void {
    this.issuesUpdatedSub?.unsubscribe();
  }

  onIncludeToggle(): void {
    if (this.suppressIncludeToggle) return;
    this.sortIssues();
    this.emitDerived();
    this.syncCache();
  }

  clearPersistedIssues(): void {
    const html = this.uploadState.getUploadData()?.originalHtml || '';
    this.alertAi.clearCachedIssues(html);
    this.issues = [];
    this.isLoading = false;
    this.emitDerived();
    this.issuesCleared.emit();
  }

  private applySelectAll(flag: boolean, sync = true): void {
    if (!sync) return;
    this.suppressIncludeToggle = true;
    try {
      this.issues = this.issues.map((issue) => ({ ...issue, include: flag }));
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

  private async loadFromAi(): Promise<void> {
    const html = this.uploadState.getUploadData()?.originalHtml || '';
    if (!html || this.isLoading) return;

    const cached = this.alertAi.getCachedIssues(html);
    if (cached?.length) {
      this.issues = this.alertAi.normalizeAlertIssues(cached).map((issue) => ({
        ...issue,
        category: this.normalizeCategoryLabel(issue.category),
      }));
      this.sortIssues();
      this.applySelectAll(this.selectAll);
      this.emitDerived();
      this.syncCache();
      return;
    }

    this.setLoading(true);
    this.setError(false);
    try {
      const selectedModel = this.uploadState.getSelectedAiModel();
      const aiIssues = await this.alertAi.analyze(
        html,
        undefined,
        selectedModel,
      );
      if (!aiIssues?.length) {
        this.setError(true);
        return;
      }
      const normalizedIssues = aiIssues.map((issue) => ({
        ...issue,
        category: this.normalizeCategoryLabel(issue.category),
        severity: issue.severity || 'Unknown',
        include: issue.include ?? true,
      }));
      this.alertAi.cacheIssues(html, normalizedIssues);
      this.issues = normalizedIssues;
      this.sortIssues();
      this.applySelectAll(this.selectAll);
      this.emitDerived();
      this.syncCache();
    } catch (err) {
      console.error('Alert AI call failed', err);
      this.setError(true);
    } finally {
      this.setLoading(false);
    }
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
    const html = this.uploadState.getUploadData()?.originalHtml || '';
    if (!html || !this.issues.length) return;
    this.alertAi.cacheIssues(html, this.issues);
  }
}
