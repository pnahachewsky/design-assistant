import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';

import { OpenRouterService } from './openrouter.service';
import { SkillManagerService } from './skill-manager.service';
import { TopicDoormatIaCheckService } from './topic-doormat-ia-check.service';
import { TopicDoormatIssueAnalysisService } from './topic-doormat-issue-analysis.service';
import { TopicDoormatSummary } from './topic-doormat.types';

class HttpClientStub {
  get = jasmine.createSpy('get').and.returnValue(
    of({
      issue_categories: [
        { id: 'description-too-long', label: 'Description too long' },
        {
          id: 'link-name-too-different-from-destination-title',
          label: 'Link name too different from destination',
        },
        { id: 'link-name-too-long', label: 'Link too long' },
        {
          id: 'repeated-description-opening',
          label: 'Repeated description opening',
        },
        { id: 'too-many-doormats-in-section', label: 'Too many doormats' },
      ],
    }),
  );
}

class TranslateServiceStub {
  instant(key: string, params?: Record<string, unknown>): string {
    if (key.includes('length.link.evidence')) return 'Link name is too long.';
    if (key.includes('length.description.evidence')) {
      return 'Description too long.';
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

class TopicDoormatIaCheckServiceStub {
  analyze = jasmine.createSpy('analyze').and.resolveTo({
    rows: [],
    metaByDoormatIndex: new Map<number, string>(),
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
        {
          provide: TopicDoormatIaCheckService,
          useClass: TopicDoormatIaCheckServiceStub,
        },
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
                  description: 'Benefit programs and services',
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

  it('rejects unknown model issue categories and uses local fallback rows', async () => {
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
                  description: 'Benefit programs and services',
                  issues: [
                    {
                      issue_category: 'invented-issue',
                      description: 'Invented issue.',
                      recommendation: 'Invented recommendation.',
                      severity: 'Low',
                    },
                  ],
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

    expect(result.usedLocalFallback).toBeTrue();
    expect(result.rows.some((row) => row.issueId === 'invented-issue')).toBeFalse();
    expect(result.rows.some((row) => row.issueId === 'no-issues')).toBeTrue();
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

  it('flags English descriptions only when they exceed 95 characters', async () => {
    openRouter.call.and.resolveTo({
      choices: [{ message: { content: '' } }],
    });

    const result = await service.analyze({
      doormatSummaries: [
        summary({
          index: 1,
          sectionItemIndex: 1,
          linkText: 'Allowed description',
          descriptionCharacterCount: 95,
        }),
        summary({
          index: 2,
          sectionItemIndex: 2,
          linkText: 'Too long description',
          descriptionCharacterCount: 96,
        }),
      ],
      pageLanguage: 'en',
      hasLegacyTopicDoormatTemplate: false,
      mostRequestedLinks: [],
      selectedModel: 'selected-model',
    });

    const descriptionRows = result.rows.filter(
      (row) => row.issueId === 'description-too-long',
    );
    expect(descriptionRows.length).toBe(1);
    expect(descriptionRows[0]).toEqual(
      jasmine.objectContaining({
        doormatIndex: 2,
        evidenceMetric: '96/95 characters',
      }),
    );
  });

  it('reports a repeated description opening as Low at 50 percent of a section', async () => {
    openRouter.call.and.resolveTo({
      choices: [{ message: { content: '' } }],
    });

    const result = await service.analyze({
      doormatSummaries: [
        summary({ index: 1, sectionItemIndex: 1, description: 'Find, benefit payment dates' }),
        summary({ index: 2, sectionItemIndex: 2, description: 'Apply for a benefit' }),
        summary({ index: 3, sectionItemIndex: 3, description: 'find benefit eligibility details' }),
        summary({ index: 4, sectionItemIndex: 4, description: 'Manage your benefit account' }),
      ],
      pageLanguage: 'en',
      hasLegacyTopicDoormatTemplate: false,
      mostRequestedLinks: [],
      selectedModel: 'selected-model',
    });

    const repeatedRow = result.rows.find(
      (row) => row.issueId === 'repeated-description-opening',
    );
    expect(repeatedRow).toEqual(
      jasmine.objectContaining({
        rowType: 'section',
        severity: 'Low',
        sectionIndex: 1,
      }),
    );
    expect(repeatedRow?.evidence).toContain(
      '2 of 4 descriptions begin with "Find benefit": doormats 1, 3.',
    );
  });

  it('reports a repeated description opening as Medium above 50 percent of a section', async () => {
    openRouter.call.and.resolveTo({
      choices: [{ message: { content: '' } }],
    });

    const result = await service.analyze({
      doormatSummaries: [
        summary({ index: 1, sectionItemIndex: 1, description: 'Find benefit payment dates' }),
        summary({ index: 2, sectionItemIndex: 2, description: 'Manage your benefit account' }),
        summary({ index: 3, sectionItemIndex: 3, description: 'Find benefit eligibility details' }),
      ],
      pageLanguage: 'en',
      hasLegacyTopicDoormatTemplate: false,
      mostRequestedLinks: [],
      selectedModel: 'selected-model',
    });

    expect(
      result.rows.find(
        (row) => row.issueId === 'repeated-description-opening',
      ),
    ).toEqual(
      jasmine.objectContaining({ severity: 'Medium', sectionIndex: 1 }),
    );
  });

  it('does not compare description openings across H2 sections', async () => {
    openRouter.call.and.resolveTo({
      choices: [{ message: { content: '' } }],
    });

    const result = await service.analyze({
      doormatSummaries: [
        summary({
          index: 1,
          sectionIndex: 1,
          sectionTitle: 'Benefits',
          sectionItemIndex: 1,
          description: 'Find benefit payment dates',
        }),
        summary({
          index: 2,
          sectionIndex: 2,
          sectionTitle: 'Credits',
          sectionItemIndex: 1,
          description: 'Find benefit eligibility details',
        }),
      ],
      pageLanguage: 'en',
      hasLegacyTopicDoormatTemplate: false,
      mostRequestedLinks: [],
      selectedModel: 'selected-model',
    });

    expect(
      result.rows.some(
        (row) => row.issueId === 'repeated-description-opening',
      ),
    ).toBeFalse();
  });

  it('treats URL fragments as part of Most requested destinations', async () => {
    openRouter.call.and.resolveTo({
      choices: [{ message: { content: '' } }],
    });

    const analyzeDuplicate = async (
      doormatHref: string,
      mostRequestedHref: string,
    ) => {
      const result = await service.analyze({
        doormatSummaries: [summary({ href: doormatHref })],
        pageLanguage: 'en',
        hasLegacyTopicDoormatTemplate: false,
        mostRequestedLinks: [
          { text: 'Most requested benefit', href: mostRequestedHref },
        ],
        uploadData: {
          originalUrl: 'https://www.canada.ca/en/benefits/index.html',
        },
        selectedModel: 'selected-model',
      });
      return result.rows.some(
        (row) => row.issueId === 'duplicate-link-in-most-requested',
      );
    };

    expect(
      await analyzeDuplicate(
        '/en/benefits/one.html#eligibility',
        '/en/benefits/one.html',
      ),
    ).toBeFalse();
    expect(
      await analyzeDuplicate(
        '/en/benefits/one.html',
        '/en/benefits/one.html#eligibility',
      ),
    ).toBeFalse();
    expect(
      await analyzeDuplicate(
        '/en/benefits/one.html#eligibility',
        '/en/benefits/one.html#apply',
      ),
    ).toBeFalse();
    expect(
      await analyzeDuplicate(
        '/en/benefits/one.html#eligibility',
        '/en/benefits/one.html#eligibility',
      ),
    ).toBeTrue();
  });

  it('suppresses destination title mismatch when only Canada.ca boilerplate differs', async () => {
    openRouter.call.and.resolveTo({
      choices: [
        {
          message: {
            content: JSON.stringify({
              doormats: [
                {
                  doormat_index: 1,
                  link_text: 'Credits impot et prestations pour les particuliers',
                  href: '/fr/services/impots/prestations.html',
                  description: 'Credits et prestations disponibles',
                  issues: [
                    {
                      include: true,
                      severity: 'Low',
                      issue_category:
                        'link-name-too-different-from-destination-title',
                      description:
                        'The link name differs from the destination title.',
                      evidence:
                        'Destination title closely matches link text.',
                      evidence_details: {
                        destination_page_title:
                          "Credits d'impot et prestations pour les particuliers - Canada.ca",
                      },
                      recommendation: 'Align the link text.',
                    },
                  ],
                },
              ],
            }),
          },
        },
      ],
    });

    const result = await service.analyze({
      doormatSummaries: [
        summary({
          linkText: "Credits d'impot et prestations pour les particuliers",
          href: '/fr/services/impots/prestations.html',
          destinationPageTitle:
            "Credits d'impot et prestations pour les particuliers - Canada.ca",
          linkTextCharacterCount: 52,
        }),
      ],
      pageLanguage: 'fr',
      hasLegacyTopicDoormatTemplate: false,
      mostRequestedLinks: [],
      selectedModel: 'selected-model',
    });

    expect(result.rows.map((row) => row.issueId)).not.toContain(
      'link-name-too-different-from-destination-title',
    );
  });
});
