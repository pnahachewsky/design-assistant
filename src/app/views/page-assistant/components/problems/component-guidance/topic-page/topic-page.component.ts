import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';

interface TopicSection {
  id: string;
  heading: string;
  selectAll: boolean;
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
  selectAllSections = false;
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
}
