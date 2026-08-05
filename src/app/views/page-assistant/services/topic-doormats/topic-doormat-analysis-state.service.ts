import { Injectable, computed, signal } from '@angular/core';

import {
  TOPIC_DOORMAT_DIAGNOSTIC_ISSUE_IDS,
  TopicDoormatIssueRow,
  TopicDoormatSummary,
} from './topic-doormat.types';

export interface TopicDoormatIssueRewriteInput {
  rowType: 'section' | 'doormat';
  severity: string;
  issueId: string;
  issue: string;
  recommendation: string;
  evidence?: string;
  evidenceMetric?: string;
  sectionIndex?: number;
  sectionTitle?: string;
  sectionItemIndex?: number;
  doormatIndex?: number;
  affectedDoormatIndexes?: number[];
  doormatLabel?: string;
}

@Injectable({ providedIn: 'root' })
export class TopicDoormatAnalysisStateService {
  private analyzedHtml = signal('');
  private issueRows = signal<TopicDoormatIssueRow[]>([]);
  private doormatSummaries = signal<TopicDoormatSummary[]>([]);
  private responseReceived = signal(false);

  getAnalyzedHtml = computed(() => this.analyzedHtml());
  getIssueRows = computed(() => this.issueRows());
  getDoormatSummaries = computed(() => this.doormatSummaries());
  hasAnalysis = computed(() => this.responseReceived());

  setAnalysis(
    html: string,
    rows: TopicDoormatIssueRow[],
    doormatSummaries: TopicDoormatSummary[] = [],
  ): void {
    this.analyzedHtml.set(html || '');
    this.issueRows.set(rows);
    this.doormatSummaries.set(doormatSummaries);
    this.responseReceived.set(true);
  }

  clear(): void {
    this.analyzedHtml.set('');
    this.issueRows.set([]);
    this.doormatSummaries.set([]);
    this.responseReceived.set(false);
  }

  getSelectedRewriteIssues(): TopicDoormatIssueRewriteInput[] {
    return this.issueRows()
      .filter(
	        (row) =>
	          row.include &&
	          row.issueId !== 'no-issues' &&
	          !TOPIC_DOORMAT_DIAGNOSTIC_ISSUE_IDS.has(row.issueId),
	      )
      .map((row) => ({
        rowType: row.rowType,
        severity: row.severity,
        issueId: row.issueId,
        issue: row.issue,
        recommendation: row.recommendation,
        evidence: row.evidence || undefined,
        evidenceMetric: row.evidenceMetric || undefined,
        sectionIndex: row.sectionIndex,
        sectionTitle: row.sectionTitle,
        sectionItemIndex: row.sectionItemIndex,
        doormatIndex: row.doormatIndex,
        affectedDoormatIndexes: row.affectedDoormatIndexes,
        doormatLabel: row.doormatLabel || undefined,
      }));
  }
}
