// src/app/views/page-assistant/components/tools/component-guidance.component.ts
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { TooltipModule } from 'primeng/tooltip';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { SortEvent } from 'primeng/api';

import { UploadStateService } from '../../../services/upload-state.service';
import { ValidatorService } from '../../../services/validator.service';
import {
  ComponentAiService,
  ComponentAiInput,
  ComponentAiResult,
} from '../../../services/component-ai.service';

import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../../../../environments/environment';

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
}

interface AlertIssue {
  category: string;
  severity: string;
  description: string;
  recommendation: string;
  include: boolean;
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
    TooltipModule,
    TranslateModule,
  ],
  templateUrl: './component-guidance.component.html',
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
        //display: flex;
        gap: 0.4rem;
        align-items: center;
        flex-wrap: wrap;
      }

      /* Base chip */
      .chip {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        padding: 0.15rem 0.55rem;
        border-radius: 9999px;
        border: 1px solid transparent;
        font-weight: 500;
        line-height: 1.1;
      }

      /* Make the PrimeIcons inherit the chip color (wins over theme) */
      .chip .pi {
        color: inherit !important;
      }

      /* Variants */
      .chip-severe {
        background: #fee2e2;
        border-color: #fecaca;
        color: #b91c1c; /* text + icon */
      }
      .chip-minor {
        background: #fef3c7;
        border-color: #fde68a;
        color: #92400e;
      }
      .chip-med {
        background: #fde7c3;
        border-color: #f9d29b;
        color: #9a4a00;
      }
      .chip-ok {
        background: #dcfce7;
        border-color: #86efac;
        color: #166534;
      }
      .chip-unk {
        background: #e5e7eb;
        border-color: #cbd5e1;
        color: #334155;
      }
      .chip-list {
        display: flex;
        flex-wrap: wrap;
        gap: 0.25rem;
        padding: 0;
        margin: 0;
      }
      /* Expansion tables */
      :host ::ng-deep .expansion-table .p-datatable-table {
        border: 1px solid #d1d5db;
        border-radius: 6px;
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
        justify-content: flex-end;
        gap: 0.5rem;
      }
    `,
    `
      /* Alerts sub-table tweaks */
      :host ::ng-deep .alert-table .p-datatable-tbody > tr > td,
      :host ::ng-deep .alert-table .p-datatable-thead > tr > th {
        white-space: normal !important;
        word-break: normal;
        overflow-wrap: normal;
        vertical-align: top;
      }
      :host ::ng-deep .alert-table .wrap-col {
        min-width: 180px;
      }
      :host ::ng-deep .alert-table .severity-col {
        white-space: nowrap !important;
      }
      :host ::ng-deep .alert-table .include-col {
        width: 140px;
        text-align: center;
      }
      :host ::ng-deep .alert-table .include-col .p-checkbox {
        display: inline-flex;
      }
    `,
  ],
})
export class ComponentGuidanceComponent implements OnInit {
  private uploadState = inject(UploadStateService);
  private translate = inject(TranslateService);
  private validator = inject(ValidatorService);
  private http = inject(HttpClient);
  private ai = inject(ComponentAiService);

  production: boolean = environment.production;

  guidanceList: { name: string; url: string }[] = [];
  rows: GuidanceRow[] = [];
  alertIssues: AlertIssue[] = [
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
  ];

  private readonly ALERT_SEVERITY_RANK: Record<string, number> = {
    high: 3,
    medium: 2,
    low: 1,
  };

  // multi-select
  selectedRows: GuidanceRow[] = [];
  isLoading = false;
  // controlled expansion keys for PrimeNG table
  expandedRows: Record<string, boolean> = {};
  readonly alertsNameKey = 'page.tools.guidance.craVariant.alerts.title';

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
    this.sortAlertIssues();
    const data = this.uploadState.getUploadData();
    if (data?.originalHtml) {
      this.guidanceList = this.validator.collectGuidanceUrls(data.originalHtml);
      this.rows = this.buildRows(this.guidanceList);
    }
  }

  /** Build sorted, de-duped table rows from validator findings. */
  private buildRows(list: { name: string; url: string }[]): GuidanceRow[] {
    const unique = new Map<string, { nameKey: string; urlKey: string }>();
    for (const g of list) {
      if (!unique.has(g.url)) {
        unique.set(g.url, { nameKey: g.name, urlKey: g.url });
      }
    }

    const resolved = Array.from(unique.values()).map((it) => ({
      component: this.translate.instant(it.nameKey) || it.nameKey,
      url: this.translate.instant(it.urlKey) || it.urlKey,
      __nameKey: it.nameKey,
      __urlKey: it.urlKey,
    }));

    resolved.sort((a, b) =>
      a.component.localeCompare(b.component, undefined, {
        sensitivity: 'base',
      }),
    );

    return resolved.map((r, i) => ({
      order: i + 1,
      component: r.component,
      url: r.url,
      __nameKey: r.__nameKey,
      __urlKey: r.__urlKey,
      health: 'unknown',
    }));
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

  onSelectionChange(selection: GuidanceRow[]): void {
    this.selectedRows = selection;
    const alertRow = this.rows.find((r) => r.__nameKey === this.alertsNameKey);
    if (!alertRow) return;
    const selectedUrls = new Set(this.selectedRows.map((r) => r.url));
    const alertSelected = selectedUrls.has(alertRow.url);
    this.setAlertIncludes(alertSelected);
  }

  private setAlertIncludes(flag: boolean): void {
    this.alertIssues = this.alertIssues.map((issue) => ({ ...issue, include: flag }));
  }

  private sortAlertIssues(): void {
    const rank = this.ALERT_SEVERITY_RANK;
    this.alertIssues.sort((a, b) => (rank[b.severity.toLowerCase()] ?? 0) - (rank[a.severity.toLowerCase()] ?? 0));
  }

  get alertPainPointCategories(): string[] {
    const unique = new Set<string>();
    for (const issue of this.alertIssues) {
      if (issue.category) unique.add(issue.category);
    }
    return [...unique];
  }

  get alertCategoryChips(): { label: string; severity: string }[] {
    const rank = this.ALERT_SEVERITY_RANK;
    const bestSeverity = new Map<string, string>();
    for (const issue of this.alertIssues) {
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
    return Array.from(bestSeverity.entries()).map(([label, severity]) => ({
      label,
      severity,
    }));
  }

  get alertMaxSeverity(): string | null {
    if (!this.alertIssues.length) return null;
    const rank = this.ALERT_SEVERITY_RANK;
    let max: string | null = null;
    let maxRank = -1;
    for (const issue of this.alertIssues) {
      const sev = (issue.severity || '').toLowerCase();
      const r = rank[sev] ?? -1;
      if (r > maxRank) {
        maxRank = r;
        max = issue.severity;
      }
    }
    return max;
  }

  severityChip(severity: string | undefined | null): string {
    const s = (severity || '').toLowerCase();
    if (s === 'low') return 'chip-minor';
    if (s === 'medium') return 'chip-med';
    if (s === 'high') return 'chip-severe';
    return 'chip-unk';
  }
}
