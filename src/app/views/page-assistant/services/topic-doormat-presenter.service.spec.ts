import { TestBed } from '@angular/core/testing';

import { TopicDoormatIssueRow } from './topic-doormat.types';
import { TopicDoormatPresenterService } from './topic-doormat-presenter.service';

describe('TopicDoormatPresenterService', () => {
  let service: TopicDoormatPresenterService;

  const row = (
    partial: Partial<TopicDoormatIssueRow>,
  ): TopicDoormatIssueRow => ({
    include: true,
    rowType: 'doormat',
    severity: 'Low',
    doormat: 'Doormat',
    doormatLabel: 'Doormat',
    issueId: 'test-issue',
    issue: 'Test issue',
    evidence: 'Evidence',
    recommendation: 'Recommendation',
    sectionIndex: 1,
    sectionTitle: 'Benefits',
    sectionItemIndex: 1,
    doormatIndex: 1,
    ...partial,
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TopicDoormatPresenterService],
    });

    service = TestBed.inject(TopicDoormatPresenterService);
  });

  it('groups section rows separately from doormat issue rows and skips no-issue rows', () => {
    const groups = service.buildIssueGroups([
      row({
        rowType: 'section',
        issueId: 'too-many-doormats-in-section',
        issue: 'Too many doormats',
        sectionItemIndex: undefined,
        doormatIndex: undefined,
      }),
      row({
        issueId: 'no-issues',
        issue: 'No issues',
        severity: 'OK',
        include: false,
        sectionItemIndex: 2,
        doormatIndex: 2,
      }),
      row({
        issueId: 'description-too-long',
        issue: 'Description too long',
        severity: 'Medium',
        sectionItemIndex: 3,
        doormatIndex: 3,
      }),
    ]);

    expect(groups.length).toBe(1);
    expect(groups[0].sectionRows.map((item) => item.issueId)).toEqual([
      'too-many-doormats-in-section',
    ]);
    expect(groups[0].doormatRows.map((item) => item.issueId)).toEqual([
      'description-too-long',
    ]);
    expect(groups[0].doormatCount).toBe(3);
  });

  it('summarizes categories by issue and keeps the highest severity', () => {
    const categories = service.buildIssueCategories([
      row({
        issueId: 'description-too-long',
        issue: 'Description too long',
        severity: 'Low',
      }),
      row({
        issueId: 'description-too-long',
        issue: 'Description too long',
        severity: 'High',
      }),
      row({
        rowType: 'section',
        issueId: 'too-many-doormats-in-section',
        issue: 'Too many doormats',
        severity: 'Medium',
      }),
      row({
        issueId: 'no-issues',
        issue: 'No issues',
        severity: 'OK',
        include: false,
      }),
    ]);

    expect(categories.map((category) => category.label)).toEqual([
      'Too many doormats',
      'Description too long',
    ]);
    expect(categories[1].severity).toBe('High');
    expect(service.getHealthFromCategories(categories)).toBe('severe');
  });
});
