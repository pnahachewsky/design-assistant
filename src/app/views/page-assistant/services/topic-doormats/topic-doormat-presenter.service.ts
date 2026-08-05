import { Injectable } from '@angular/core';
import {
  TOPIC_DOORMAT_DIAGNOSTIC_ISSUE_IDS,
  TopicDoormatIssueGroup,
  TopicDoormatIssueRow,
  TopicDoormatIssueSummary,
} from './topic-doormat.types';

export type TopicDoormatHealth = 'severe' | 'moderate' | 'minor' | 'ok' | 'unknown';

const SEVERITY_RANK: Record<string, number> = {
  high: 3,
  medium: 2,
  low: 1,
  ok: 0,
};

@Injectable({ providedIn: 'root' })
export class TopicDoormatPresenterService {
  buildIssueGroups(rows: TopicDoormatIssueRow[]): TopicDoormatIssueGroup[] {
    const groups = new Map<number, TopicDoormatIssueGroup>();
    const realSectionIndexes = new Set<number>();
    const realSectionTitles = new Map<number, string>();
    rows.forEach((row) => {
      const sectionIndex = row.sectionIndex ?? 0;
      if (sectionIndex <= 0) return;
      realSectionIndexes.add(sectionIndex);
      if (row.sectionTitle) realSectionTitles.set(sectionIndex, row.sectionTitle);
    });
    const soleSectionIndex =
      realSectionIndexes.size === 1
        ? Array.from(realSectionIndexes)[0]
        : undefined;

    rows.forEach((row) => {
      const sourceSectionIndex = row.sectionIndex ?? 0;
      const sectionIndex =
        sourceSectionIndex === 0 && soleSectionIndex !== undefined
          ? soleSectionIndex
          : sourceSectionIndex;
      const group = groups.get(sectionIndex) ?? {
        sectionIndex,
        sectionTitle:
          row.sectionTitle ||
          realSectionTitles.get(sectionIndex) ||
          (sectionIndex ? `Section ${sectionIndex}` : 'Topic doormats'),
        doormatCount: 0,
        sectionRows: [],
        doormatRows: [],
      };
      if (!group.sectionTitle && row.sectionTitle) {
        group.sectionTitle = row.sectionTitle;
      }
      if (row.rowType === 'section') {
        group.sectionRows.push(row);
      } else if (row.issueId !== 'no-issues') {
        group.doormatRows.push(row);
      }
      if (row.rowType === 'doormat' && row.sectionItemIndex) {
        group.doormatCount = Math.max(group.doormatCount, row.sectionItemIndex);
      }
      groups.set(sectionIndex, group);
    });

    return Array.from(groups.values())
      .map((group) => ({
        ...group,
        sectionRows: this.sortRowsForGroup(group.sectionRows),
        doormatRows: this.sortRowsForGroup(group.doormatRows),
      }))
      .sort((a, b) => a.sectionIndex - b.sectionIndex);
  }

  buildIssueCategories(
    rows: TopicDoormatIssueRow[],
  ): TopicDoormatIssueSummary[] {
    const byIssue = new Map<string, TopicDoormatIssueSummary>();

    rows.forEach((row) => {
      if (this.isNonCategoryRow(row)) return;
      const issueId = row.issueId || row.issue;
      if (!issueId) return;
      const existing = byIssue.get(issueId);
      if (!existing) {
        byIssue.set(issueId, {
          label: row.issue,
          severity: row.severity,
          rowType: row.rowType,
        });
        return;
      }

      if (this.getSeverityRank(row.severity) > this.getSeverityRank(existing.severity)) {
        existing.severity = row.severity;
      }
      if (row.rowType === 'section') {
        existing.rowType = 'section';
      }
    });

    return Array.from(byIssue.values()).sort((a, b) => {
      if (a.rowType !== b.rowType) return a.rowType === 'section' ? -1 : 1;
      const severityDiff =
        this.getSeverityRank(b.severity) - this.getSeverityRank(a.severity);
      if (severityDiff !== 0) return severityDiff;
      return a.label.localeCompare(b.label, undefined, { sensitivity: 'base' });
    });
  }

  getHealthFromCategories(
    categories: TopicDoormatIssueSummary[],
  ): TopicDoormatHealth {
    if (!categories.length) return 'ok';
    const maxSeverity = categories.reduce(
      (max, category) =>
        this.getSeverityRank(category.severity) > this.getSeverityRank(max)
          ? category.severity
          : max,
      '',
    );
    return this.severityToHealth(maxSeverity);
  }

  getSeverityRank(severity: string | undefined | null): number {
    return SEVERITY_RANK[(severity || '').toLowerCase()] ?? -1;
  }

  private sortRowsForGroup(
    rows: TopicDoormatIssueRow[],
  ): TopicDoormatIssueRow[] {
    return [...rows].sort((a, b) => {
      const aItem = a.sectionItemIndex ?? 0;
      const bItem = b.sectionItemIndex ?? 0;
      if (aItem !== bItem) return aItem - bItem;
      if (a.rowType !== b.rowType) return a.rowType === 'section' ? -1 : 1;
      return a.issue.localeCompare(b.issue);
    });
  }

  private severityToHealth(
    severity: string | undefined | null,
  ): TopicDoormatHealth {
    const s = (severity || '').toLowerCase();
    if (s === 'high') return 'severe';
    if (s === 'medium') return 'moderate';
    if (s === 'low') return 'minor';
    if (s === 'ok') return 'ok';
    return 'unknown';
  }

  private isNonCategoryRow(issue: TopicDoormatIssueRow): boolean {
    return (
      issue.issueId === 'no-issues' ||
      TOPIC_DOORMAT_DIAGNOSTIC_ISSUE_IDS.has(issue.issueId)
    );
  }
}
