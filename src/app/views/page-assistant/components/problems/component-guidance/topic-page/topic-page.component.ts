import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';

interface TopicIssue {
  id: string;
  category: string;
  severity: string;
  description: string;
  recommendation: string;
  detail?: string;
  include: boolean;
}

@Component({
  selector: 'ca-topic-page',
  standalone: true,
  imports: [CommonModule, FormsModule, TableModule, CheckboxModule],
  templateUrl: './topic-page.component.html',
  styleUrls: [
    '../alerts-guidance/alerts-guidance.component.css',
    '../component-guidance.component.css',
  ],
})
export class TopicPageComponent {
  expandedRows: Record<string, boolean> = {};
  topicIssues: TopicIssue[] = [
    {
      id: 'nav-clarity',
      category: 'Navigation clarity',
      severity: 'High',
      description: 'Primary topic links are not grouped, making the page hard to scan.',
      recommendation: 'Group links under clear headings and add brief summaries.',
      detail: 'Users must scan long lists without visual grouping.',
      include: true,
    },
    {
      id: 'content-hierarchy',
      category: 'Content hierarchy',
      severity: 'Medium',
      description: 'Headings skip levels (H2 to H4), which impacts accessibility.',
      recommendation: 'Use consecutive heading levels and add section summaries.',
      detail: 'Screen reader navigation becomes inconsistent.',
      include: true,
    },
    {
      id: 'search-discoverability',
      category: 'Search discoverability',
      severity: 'Low',
      description: 'No in-page search or jump links for long topic lists.',
      recommendation: 'Add a sticky jump list or search/filter for topics.',
      detail: 'Long pages increase time to find content.',
      include: false,
    },
  ];

  severityClass(severity: string | undefined | null): string {
    const s = (severity || '').toLowerCase();
    if (s === 'low') return 'chip-minor';
    if (s === 'medium') return 'chip-med';
    if (s === 'high') return 'chip-severe';
    return 'chip-unk';
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
}
