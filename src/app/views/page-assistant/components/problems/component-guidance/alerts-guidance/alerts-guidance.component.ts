import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { UploadStateService } from '../../../../services/upload-state.service';
import { AlertAiService } from '../../../../services/alert-ai.service';

export interface AlertIssue {
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
  imports: [CommonModule, FormsModule, TableModule, CheckboxModule],
  templateUrl: './alerts-guidance.component.html',
  styleUrls: ['./alerts-guidance.component.css', '../component-guidance.component.css'],
})
export class AlertsGuidanceComponent implements OnInit, OnChanges {
  private readonly uploadState = inject(UploadStateService);
  private readonly alertAi = inject(AlertAiService);

  @Input() selectAll = true;
  @Output() maxSeverityChange = new EventEmitter<string | null>();
  @Output() categoriesChange = new EventEmitter<{ label: string; severity: string }[]>();

  issues: AlertIssue[] = DEFAULT_ALERT_ISSUES.map((i) => ({ ...i }));
  isLoading = false;

  ngOnInit(): void {
    this.sortIssues();
    this.applySelectAll(this.selectAll);
    this.emitDerived();
    void this.loadFromAi();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectAll'] && !changes['selectAll'].firstChange) {
      this.applySelectAll(this.selectAll);
      this.emitDerived();
    }
  }

  onIncludeToggle(): void {
    this.sortIssues();
    this.emitDerived();
  }

  private applySelectAll(flag: boolean): void {
    this.issues = this.issues.map((issue) => ({ ...issue, include: flag }));
    this.sortIssues();
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

    this.isLoading = true;
    try {
      const aiIssues = await this.alertAi.analyze(html);
      if (aiIssues?.length) {
        this.issues = aiIssues.map((issue) => ({
          ...issue,
          severity: issue.severity || 'Medium',
          include: issue.include ?? true,
        }));
        this.sortIssues();
        this.applySelectAll(this.selectAll);
        this.emitDerived();
      }
    } catch (err) {
      console.error('Alert AI call failed', err);
    } finally {
      this.isLoading = false;
    }
  }
}
