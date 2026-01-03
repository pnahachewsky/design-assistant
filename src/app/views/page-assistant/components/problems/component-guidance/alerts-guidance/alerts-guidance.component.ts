import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';

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
    description: 'Alert contains 4 sentences; guidance recommends 1-2',
    recommendation: "Rewrite to: 'Processing for the Disability tax credit...'.",
    include: true,
  },
  {
    category: 'Too many links',
    severity: 'Low',
    description: 'Alert contains references to multiple tools/links (Process...)',
    recommendation: 'Limit to one primary link',
    include: true,
  },
  {
    category: 'Missing heading',
    severity: 'High',
    description: 'Alert lacs a descriptive heading, reducing accessibility...',
    recommendation: "Add a heading like 'Processing update'.",
    include: true,
  },
  {
    category: 'Accessibility - Focus order',
    severity: 'High',
    description: 'Lack of heading prevents efficient screen reader navigation...',
    recommendation: 'Implement semantic heading tag within the alert component...',
    include: true,
  },
    {
    category: 'Too wordy',
    severity: 'Medium',
    description: 'Alert contains 4 sentences; guidance recommends 1-2',
    recommendation: "Rewrite to: 'Processing for the Disability tax credit...'.",
    include: true,
  },
  {
    category: 'Too many links',
    severity: 'Low',
    description: 'Alert contains references to multiple tools/links (Process...)',
    recommendation: 'Limit to one primary link',
    include: true,
  },
  {
    category: 'Missing heading',
    severity: 'High',
    description: 'Alert lacs a descriptive heading, reducing accessibility...',
    recommendation: "Add a heading like 'Processing update'.",
    include: true,
  },
  {
    category: 'Accessibility - Focus order',
    severity: 'High',
    description: 'Lack of heading prevents efficient screen reader navigation...',
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
  styleUrls: ['./alerts-guidance.component.css', '../chip-styles.css'],
})
export class AlertsGuidanceComponent implements OnInit, OnChanges {
  @Input() selectAll = true;
  @Output() maxSeverityChange = new EventEmitter<string | null>();
  @Output() categoriesChange = new EventEmitter<{ label: string; severity: string }[]>();

  issues: AlertIssue[] = DEFAULT_ALERT_ISSUES.map((i) => ({ ...i }));

  ngOnInit(): void {
    this.applySelectAll(this.selectAll);
    this.emitDerived();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectAll'] && !changes['selectAll'].firstChange) {
      this.applySelectAll(this.selectAll);
      this.emitDerived();
    }
  }

  onIncludeToggle(): void {
    this.emitDerived();
  }

  private applySelectAll(flag: boolean): void {
    this.issues = this.issues.map((issue) => ({ ...issue, include: flag }));
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
}
