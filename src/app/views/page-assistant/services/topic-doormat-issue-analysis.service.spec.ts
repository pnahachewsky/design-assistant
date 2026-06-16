import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';

import { OpenRouterService } from './openrouter.service';
import { SkillManagerService } from './skill-manager.service';
import { TopicDoormatIssueAnalysisService } from './topic-doormat-issue-analysis.service';
import { TopicDoormatSummary } from './topic-doormat.types';

class HttpClientStub {
  get = jasmine.createSpy('get').and.returnValue(
    of({
      issue_categories: [
        { id: 'description-too-long', label: 'Description too long' },
        { id: 'link-name-too-long', label: 'Link name too long' },
        { id: 'too-many-doormats-in-section', label: 'Too many doormats' },
      ],
    }),
  );
}

class TranslateServiceStub {
  instant(key: string, params?: Record<string, unknown>): string {
    if (key.includes('length.link.evidence')) return 'Link name is too long.';
    if (key.includes('length.description.evidence')) {
      return 'Description is too long.';
    }
    if (key.includes('length.link.recommendation')) {
      return `Shorten the link name to ${params?.['limit']} characters.`;
    }
    if (key.includes('length.description.recommendation')) {
      return `Shorten the description to ${params?.['limit']} characters.`;
    }
    return key;
  }
}

class OpenRouterServiceStub {
  models = ['selected-model', 'fallback-model'];
  freeModels = ['selected-model', 'fallback-model'];
  call = jasmine.createSpy('call');
}

class SkillManagerServiceStub {
  composePrompt = jasmine.createSpy('composePrompt').and.resolveTo({
    prompt: 'Analyze Topic doormats.',
    loadedPaths: ['skills/topic-doormats/issues/SKILL.md'],
    estimatedPromptTokens: 42,
  });
}

describe('TopicDoormatIssueAnalysisService', () => {
  let service: TopicDoormatIssueAnalysisService;
  let openRouter: OpenRouterServiceStub;

  const summary = (
    partial: Partial<TopicDoormatSummary> = {},
  ): TopicDoormatSummary => ({
    index: 1,
    linkText: 'Benefit one',
    href: '/en/benefits/one.html',
    description: 'Find benefit one information',
    headingLevel: 3,
    itemLinkCount: 1,
    headingLinkCount: 1,
    descriptionLinkCount: 0,
    hasSplitHeadingLink: false,
    hasDescriptionLink: false,
    hasDescriptionIconOrImage: false,
    hasDescriptionSpecialFormatting: false,
    rawItemText: 'Benefit one Find benefit one information',
    linkTextCharacterCount: 11,
    descriptionCharacterCount: 28,
    sectionIndex: 1,
    sectionTitle: 'Benefits',
    sectionItemIndex: 1,
    sectionDoormatCount: 1,
    ...partial,
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TopicDoormatIssueAnalysisService,
        { provide: HttpClient, useClass: HttpClientStub },
        { provide: TranslateService, useClass: TranslateServiceStub },
        { provide: OpenRouterService, useClass: OpenRouterServiceStub },
        { provide: SkillManagerService, useClass: SkillManagerServiceStub },
      ],
    });

    service = TestBed.inject(TopicDoormatIssueAnalysisService);
    openRouter = TestBed.inject(
      OpenRouterService,
    ) as unknown as OpenRouterServiceStub;
  });

  it('preserves no-issue rows when the model reports no issues', async () => {
    openRouter.call.and.resolveTo({
      choices: [
        {
          message: {
            content: JSON.stringify({
              doormats: [
                {
                  doormat_index: 1,
                  link_text: 'Benefit one',
                  href: '/en/benefits/one.html',
                  issues: [],
                },
              ],
            }),
          },
        },
      ],
    });

    const result = await service.analyze({
      doormatSummaries: [summary()],
      pageLanguage: 'en',
      hasLegacyTopicDoormatTemplate: false,
      mostRequestedLinks: [],
      selectedModel: 'selected-model',
    });

    expect(result.text).toContain('doormats');
    expect(result.model).toBe('selected-model');
    expect(result.rows.length).toBe(1);
    expect(result.rows[0]).toEqual(
      jasmine.objectContaining({
        include: false,
        issueId: 'no-issues',
        issue: 'No issues',
        severity: 'OK',
        doormatIndex: 1,
      }),
    );
  });

  it('falls back to deterministic rows when the model returns empty content', async () => {
    openRouter.call.and.resolveTo({
      choices: [{ message: { content: '' } }],
    });

    const result = await service.analyze({
      doormatSummaries: [
        summary({
          linkText: 'This link name is definitely too long',
          linkTextCharacterCount: 37,
        }),
      ],
      pageLanguage: 'en',
      hasLegacyTopicDoormatTemplate: false,
      mostRequestedLinks: [],
      selectedModel: 'selected-model',
    });

    expect(result.text).toBe('');
    expect(result.rows.map((row) => row.issueId)).toContain(
      'link-name-too-long',
    );
    expect(result.rows.some((row) => row.issueId === 'no-issues')).toBeFalse();
  });
});
