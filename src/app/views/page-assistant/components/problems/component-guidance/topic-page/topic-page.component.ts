import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { UploadStateService } from '../../../../services/upload-state.service';
import { IaStructureService } from '../../../../services/ia-structure.service';

interface TopicSection {
  id: string;
  heading: string;
  selectAll: boolean;
}

@Component({
  selector: 'ca-topic-page',
  standalone: true,
  imports: [CommonModule, FormsModule, TableModule, CheckboxModule, ButtonModule],
  templateUrl: './topic-page.component.html',
  styleUrls: [
    '../alerts-guidance/alerts-guidance.component.css',
    '../component-guidance.component.css',
  ],
})
export class TopicPageComponent {
  private uploadState = inject(UploadStateService);
  private iaStructure = inject(IaStructureService);
  expandedRows: Record<string, boolean> = {};
  selectAllSections = false;
  isGenerating = false;
  readonly exportDepth = 3;
  topicSections: TopicSection[] = [
    {
      id: 'most-requested-links',
      heading: 'Most requested links',
      selectAll: false,
    },
    {
      id: 'doormats',
      heading: 'Doormats',
      selectAll: false,
    },
    {
      id: 'features',
      heading: 'Features',
      selectAll: false,
    },
  ];

  toggleAllSelections(): void {
    const next = this.selectAllSections;
    this.topicSections = this.topicSections.map((section) => ({
      ...section,
      selectAll: next,
    }));
  }

  onRowExpand(event: any): void {
    const key = event?.data?.id;
    if (!key) return;
    this.expandedRows = { ...this.expandedRows, [key]: true };
  }

  onRowCollapse(event: any): void {
    const key = event?.data?.id;
    if (!key) return;
    const copy = { ...this.expandedRows };
    delete copy[key];
    this.expandedRows = copy;
  }

  async generateIaStructureExcel(): Promise<void> {
    if (this.isGenerating) return;
    this.isGenerating = true;
    try {
      const originalUrl = this.uploadState.getUploadData()?.originalUrl;
      if (!originalUrl) {
        console.warn('No original URL found for IA export.');
        return;
      }
      const cached = this.iaStructure.getCachedResultFor(originalUrl);
      const result =
        cached ??
        (await this.iaStructure.buildIaTree(
          [originalUrl],
          this.exportDepth,
        ));
      const rows = this.iaStructure.flattenTree(result.tree);
      const filename = this.buildFilename(originalUrl);
      this.downloadCsv(rows, filename);
    } finally {
      this.isGenerating = false;
    }
  }

  private downloadCsv(
    rows: Array<{ url: string; level: number }>,
    filename: string,
  ): void {
    const header = ['URL', 'Level', 'Page visits'];
    const csvRows = [header.join(',')];
    for (const row of rows) {
      csvRows.push([
        this.escapeCsv(row.url),
        row.level.toString(),
        ''
      ].join(','));
    }
    const blob = new Blob([csvRows.join('\n')], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  }

  private buildFilename(originalUrl: string): string {
    try {
      const parsed = new URL(originalUrl);
      const segments = parsed.pathname.split('/').filter(Boolean);
      const last = segments[segments.length - 1] || 'page';
      const base = last.replace(/\.html$/i, '') || 'page';
      return `IA structure table for ${base}.csv`;
    } catch {
      return 'IA structure table.csv';
    }
  }

  private escapeCsv(value: string): string {
    if (value.includes('"') || value.includes(',') || value.includes('\n')) {
      return `"${value.replace(/"/g, '""')}"`;
    }
    return value;
  }

}
