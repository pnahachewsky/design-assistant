import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';

import { OpenRouterService } from '../openrouter.service';
import { SkillManagerService } from '../skill-manager.service';
import { TopicDoormatIaCheckService } from './topic-doormat-ia-check.service';
import { TopicDoormatIssueAnalysisService } from './topic-doormat-issue-analysis.service';
import { TopicDoormatSummary } from './topic-doormat.types';

class HttpClientStub {
  get = jasmine.createSpy('get').and.returnValue(
    of({
      issue_categories: [
        { id: 'broken-link', label: 'Broken link' },
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
        {
          id: 'mixed-description-style-in-section',
          label: 'Mixed description styles in section',
        },
        {
          id: 'inconsistent-description-style',
          label: 'Inconsistent description style',
        },
        {
          id: 'description-missing-needed-information',
          label: 'Description has content gap',
        },
        { id: 'description-lacks-clarity', label: 'Description lacks clarity' },
        { id: 'misdirected-link', label: 'Misdirected link' },
        {
          id: 'mixed-link-name-styles-in-section',
          label: 'Mixed link styles in section',
        },
        {
          id: 'inconsistent-link-name-style',
          label: 'Inconsistent link name style',
        },
        { id: 'too-many-doormats-in-section', label: 'Too many doormats' },
      ],
    }),
  );
}

class TranslateServiceStub {
  instant(key: string, params?: Record<string, unknown>): string {
    if (key.includes('length.link.recommendation')) {
      return `Shorten the link name to ${params?.['limit']} characters.`;
    }
    if (key.includes('length.description.recommendation')) {
      return `Shorten the description to ${params?.['limit']} characters.`;
    }
    if (key.includes('brokenLink.httpStatusEvidence')) {
      return `The destination request returned HTTP ${params?.['status']}.`;
    }
    if (key.includes('brokenLink.recommendation')) {
      return 'Replace the link with a valid destination URL.';
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

  const emptyDestinationContentAssessment = () => ({
    important_element_ids: [],
    covered_element_ids: [],
    missing_important_element_ids: [],
  });

  const defaultLinkClassifications = () => ({
    detected_link_text_style: 'topic',
    destination_link_relationship: 'unavailable',
    destination_link_relationship_basis: 'unavailable',
    destination_link_relationship_reason: '',
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
                  detected_description_style: 'phrase',
                  ...defaultLinkClassifications(),
                  destination_content_assessment:
                    emptyDestinationContentAssessment(),
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
    const skillManager = TestBed.inject(
      SkillManagerService,
    ) as unknown as SkillManagerServiceStub;
    expect(skillManager.composePrompt).toHaveBeenCalledWith(
      jasmine.objectContaining({
        includeReferences: false,
        includeAssets: true,
      }),
    );
    const systemPrompt = openRouter.call.calls.mostRecent().args[1][0].content;
    expect(systemPrompt).toContain('Compact model-owned issue contract');
    expect(systemPrompt).toContain('"description-lacks-clarity"');
    expect(systemPrompt).not.toContain('"description-too-long"');
    expect(systemPrompt).not.toContain('"broken-link"');
    const requestPayload = JSON.parse(
      openRouter.call.calls.mostRecent().args[1][1].content,
    );
    expect(requestPayload.doormats[0]).toEqual(
      jasmine.objectContaining({
        analysisLinkText: 'Benefit one',
        analysisDescription: 'Find benefit one information',
      }),
    );
  });

  it('reports broken links from local destination HTTP status instead of model issues', async () => {
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
                  detected_description_style: 'phrase',
                  ...defaultLinkClassifications(),
                  destination_content_assessment:
                    emptyDestinationContentAssessment(),
                  issues: [
                    {
                      issue_category: 'broken-link',
                      severity: 'High',
                      evidence: 'The destination appears closed.',
                      recommendation: 'Replace the link.',
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
          destinationUrl: 'https://www.canada.ca/en/benefits/one.html',
          destinationContextStatus: 'failed',
          destinationHttpStatus: 410,
        }),
      ],
      pageLanguage: 'en',
      hasLegacyTopicDoormatTemplate: false,
      mostRequestedLinks: [],
      selectedModel: 'selected-model',
    });

    const brokenLinkRows = result.rows.filter(
      (row) => row.issueId === 'broken-link',
    );
    expect(brokenLinkRows.length).toBe(1);
    expect(brokenLinkRows[0]).toEqual(
      jasmine.objectContaining({
        severity: 'High',
        evidence: 'The destination request returned HTTP 410.',
        recommendation: 'Replace the link with a valid destination URL.',
      }),
    );
    expect(brokenLinkRows[0].evidence).not.toContain('appears closed');
  });

  it('suppresses a model mixed-style issue when all model classifications match', async () => {
    const descriptions = [
      'Find out who should file and when to file a trust return.',
      'Find out what the tax year-end is for different types of trust.',
      'Find out how to submit and file documents online.',
      'Find out when to pay a balance owing.',
      'Find out about the residency status of a trust.',
      'Find out when you need a clearance certificate.',
    ];
    openRouter.call.and.resolveTo({
      choices: [
        {
          message: {
            content: JSON.stringify({
              section_issues: [
                {
                  section_index: 1,
                  issue_category: 'mixed-description-style-in-section',
                  description: 'The section mixes description styles.',
                  recommendation: 'Use one style.',
                  severity: 'Medium',
                },
              ],
              doormats: descriptions.map((description, index) => ({
                doormat_index: index + 1,
                link_text: `Trust topic ${index + 1}`,
                href: `/trust/topic-${index + 1}.html`,
                description,
                detected_description_style: 'sentence',
                ...defaultLinkClassifications(),
                destination_content_assessment:
                  emptyDestinationContentAssessment(),
                issues:
                  index === 0
                    ? [
                        {
                          issue_category:
                            'description-missing-needed-information',
                          description: 'The description has a content gap.',
                          recommendation: 'Add more information.',
                          severity: 'High',
                        },
                      ]
                    : index === 1
                      ? [
                          {
                            issue_category: 'description-lacks-clarity',
                            description: 'The description is generic.',
                            recommendation: 'Add more detail.',
                            severity: 'Medium',
                          },
                        ]
                    : index === 4
                    ? [
                        {
                          issue_category: 'inconsistent-description-style',
                          description:
                            'This description uses a different style.',
                          recommendation: 'Use the dominant style.',
                          severity: 'Low',
                        },
                      ]
                    : [],
              })),
            }),
          },
        },
      ],
    });

    const result = await service.analyze({
      doormatSummaries: descriptions.map((description, index) =>
        summary({
          index: index + 1,
          linkText: `Trust topic ${index + 1}`,
          href: `/trust/topic-${index + 1}.html`,
          description,
          sectionItemIndex: index + 1,
          sectionDoormatCount: descriptions.length,
        }),
      ),
      pageLanguage: 'en',
      hasLegacyTopicDoormatTemplate: false,
      mostRequestedLinks: [],
      selectedModel: 'selected-model',
    });

    expect(
      result.rows.some(
        (row) => row.issueId === 'mixed-description-style-in-section',
      ),
    ).toBeFalse();
    expect(
      result.rows.some(
        (row) => row.issueId === 'inconsistent-description-style',
      ),
    ).toBeFalse();
    expect(
      result.rows.some(
        (row) => row.issueId === 'description-missing-needed-information',
      ),
    ).toBeFalse();
    expect(
      result.rows.some((row) => row.issueId === 'description-lacks-clarity'),
    ).toBeFalse();
  });

  it('keeps a clarity issue only when it identifies exact ambiguous wording', async () => {
    openRouter.call.and.resolveTo({
      choices: [
        {
          message: {
            content: JSON.stringify({
              doormats: [
                {
                  doormat_index: 1,
                  link_text: 'Trust account',
                  href: '/trust/account.html',
                  description: 'Use it to manage their account',
                  detected_description_style: 'sentence',
                  ...defaultLinkClassifications(),
                  destination_content_assessment:
                    emptyDestinationContentAssessment(),
                  issues: [
                    {
                      issue_category: 'description-lacks-clarity',
                      description: 'The pronouns have unclear referents.',
                      evidence: 'It is unclear who or what the pronouns refer to.',
                      evidence_details: {
                        unclear_phrase: 'it to manage their account',
                        ambiguity_explanation:
                          "'it' and 'their' can refer to different people or accounts.",
                      },
                      recommendation: 'Name the user and account explicitly.',
                      severity: 'Medium',
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
          linkText: 'Trust account',
          href: '/trust/account.html',
          description: 'Use it to manage their account',
        }),
      ],
      pageLanguage: 'en',
      hasLegacyTopicDoormatTemplate: false,
      mostRequestedLinks: [],
      selectedModel: 'selected-model',
    });

    expect(
      result.rows.find((row) => row.issueId === 'description-lacks-clarity'),
    ).toEqual(
      jasmine.objectContaining({ severity: 'Medium', doormatIndex: 1 }),
    );
  });

  it('builds a mixed-style section issue from per-doormat model classifications', async () => {
    const classifiedDescriptions = [
      {
        description: 'Learn how to submit a trust return.',
        style: 'sentence',
      },
      {
        description: 'Apply for a trust account number.',
        style: 'sentence',
      },
      {
        description: 'Available to qualifying resident trusts.',
        style: 'phrase',
      },
      {
        description: 'Monthly support for eligible beneficiaries.',
        style: 'phrase',
      },
    ];
    openRouter.call.and.resolveTo({
      choices: [
        {
          message: {
            content: JSON.stringify({
              doormats: classifiedDescriptions.map((item, index) => ({
                doormat_index: index + 1,
                link_text: `Trust topic ${index + 1}`,
                href: `/trust/topic-${index + 1}.html`,
                description: item.description,
                detected_description_style: item.style,
                ...defaultLinkClassifications(),
                destination_content_assessment:
                  emptyDestinationContentAssessment(),
                issues: [],
              })),
            }),
          },
        },
      ],
    });

    const result = await service.analyze({
      doormatSummaries: classifiedDescriptions.map((item, index) =>
        summary({
          index: index + 1,
          linkText: `Trust topic ${index + 1}`,
          href: `/trust/topic-${index + 1}.html`,
          description: item.description,
          sectionItemIndex: index + 1,
          sectionDoormatCount: classifiedDescriptions.length,
        }),
      ),
      pageLanguage: 'en',
      hasLegacyTopicDoormatTemplate: false,
      mostRequestedLinks: [],
      selectedModel: 'selected-model',
    });

    const mixedStyleRow = result.rows.find(
      (row) => row.issueId === 'mixed-description-style-in-section',
    );
    expect(mixedStyleRow).toEqual(
      jasmine.objectContaining({
        rowType: 'section',
        severity: 'Medium',
        sectionIndex: 1,
      }),
    );
    expect(mixedStyleRow?.evidence).toContain(
      'Sentence examples: 1, 2.',
    );
    expect(mixedStyleRow?.evidence).toContain(
      'Phrase examples: 3, 4.',
    );
  });

  it('derives link-style and destination rows from classifications for the trust-page regression case', async () => {
    const linkCases = [
      {
        linkText: 'Filing a trust return',
        style: 'task',
        relationship: 'unavailable',
      },
      {
        linkText: 'Tax year-end and fiscal period',
        style: 'topic',
        relationship: 'unavailable',
      },
      {
        linkText: 'Submitting and filing documents online related to trusts',
        style: 'task',
        relationship: 'broader-but-accurate',
        destinationPageTitle:
          'Submitting and filing electronic documents to the T3 Estate and Trust Return programs - Canada.ca',
        destinationPageHeading: 'Submit and file documents online related to T3',
      },
      {
        linkText: 'When to pay a balance you owe on your trust return',
        style: 'task',
        relationship: 'unavailable',
      },
      {
        linkText: 'Residency and how to contact us',
        style: 'topic',
        relationship: 'equivalent',
        destinationPageTitle: 'Residency and contact us information - Canada.ca',
        destinationPageHeading: 'Trust residency and how to contact us',
      },
      {
        linkText: 'Clearance certificate',
        style: 'topic',
        relationship: 'equivalent',
        destinationPageTitle: 'Apply for a clearance certificate - Canada.ca',
        destinationPageHeading: 'Apply for a clearance certificate',
      },
    ];
    openRouter.call.and.resolveTo({
      choices: [
        {
          message: {
            content: JSON.stringify({
              doormats: linkCases.map((item, index) => ({
                doormat_index: index + 1,
                link_text: item.linkText,
                href: `/trust/topic-${index + 1}.html`,
                description: `Description ${index + 1}`,
                detected_link_text_style: item.style,
                detected_description_style: 'phrase',
                destination_link_relationship: item.relationship,
                destination_link_relationship_basis:
                  item.relationship === 'broader-but-accurate'
                    ? 'acronym-or-program-term'
                    : item.relationship === 'equivalent'
                      ? 'phrase-containment'
                      : 'unavailable',
                destination_link_relationship_reason:
                  item.relationship === 'broader-but-accurate'
                    ? 'Trusts accurately describes the T3 trust-return program context.'
                    : '',
                destination_content_assessment:
                  emptyDestinationContentAssessment(),
                issues:
                  index === 1
                    ? [
                        {
                          issue_category: 'inconsistent-link-name-style',
                          description: 'This is the only noun/topic link.',
                          recommendation: 'Use an action verb.',
                          severity: 'Low',
                        },
                      ]
                    : [2, 4, 5].includes(index)
                      ? [
                          {
                            issue_category:
                              'link-name-too-different-from-destination-title',
                            description: 'The wording differs.',
                            recommendation: 'Align the wording.',
                            severity: 'Medium',
                          },
                        ]
                      : [],
              })),
            }),
          },
        },
      ],
    });

    const result = await service.analyze({
      doormatSummaries: linkCases.map((item, index) =>
        summary({
          index: index + 1,
          linkText: item.linkText,
          href: `/trust/topic-${index + 1}.html`,
          description: `Description ${index + 1}`,
          sectionItemIndex: index + 1,
          sectionDoormatCount: linkCases.length,
          destinationPageTitle: item.destinationPageTitle,
          destinationPageHeading: item.destinationPageHeading,
        }),
      ),
      pageLanguage: 'en',
      hasLegacyTopicDoormatTemplate: false,
      mostRequestedLinks: [],
      selectedModel: 'selected-model',
    });

    expect(
      result.rows.filter(
        (row) => row.issueId === 'mixed-link-name-styles-in-section',
      ).length,
    ).toBe(1);
    expect(
      result.rows.some((row) => row.issueId === 'inconsistent-link-name-style'),
    ).toBeFalse();
    expect(
      result.rows.some(
        (row) =>
          row.issueId === 'link-name-too-different-from-destination-title',
      ),
    ).toBeFalse();
  });

  it('reports a materially different classified destination', async () => {
    openRouter.call.and.resolveTo({
      choices: [
        {
          message: {
            content: JSON.stringify({
              doormats: [
                {
                  doormat_index: 1,
                  link_text: 'Trust filing deadlines',
                  href: '/benefits/payment-dates.html',
                  description: 'Find trust return filing deadlines',
                  detected_link_text_style: 'topic',
                  detected_description_style: 'sentence',
                  destination_link_relationship: 'materially-different',
                  destination_link_relationship_basis:
                    'conflicting-core-concept',
                  destination_link_relationship_reason:
                    'The destination concerns benefit payment dates, not trust filing deadlines.',
                  destination_content_assessment:
                    emptyDestinationContentAssessment(),
                  issues: [],
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
          linkText: 'Trust filing deadlines',
          href: '/benefits/payment-dates.html',
          description: 'Find trust return filing deadlines',
          destinationPageTitle: 'Benefit payment dates - Canada.ca',
          destinationPageHeading: 'Benefit payment dates',
        }),
      ],
      pageLanguage: 'en',
      hasLegacyTopicDoormatTemplate: false,
      mostRequestedLinks: [],
      selectedModel: 'selected-model',
    });

    expect(
      result.rows.find(
        (row) =>
          row.issueId === 'link-name-too-different-from-destination-title',
      ),
    ).toEqual(
      jasmine.objectContaining({ severity: 'Medium', doormatIndex: 1 }),
    );
  });

  it('suppresses a destination mismatch when normalized link text is contained in the destination heading', async () => {
    openRouter.call.and.resolveTo({
      choices: [
        {
          message: {
            content: JSON.stringify({
              doormats: [
                {
                  doormat_index: 1,
                  link_text: 'Clearance certificate',
                  href: '/trust/clearance-certificate.html',
                  description: 'Find out when you need a clearance certificate',
                  detected_link_text_style: 'topic',
                  detected_description_style: 'sentence',
                  destination_link_relationship: 'materially-different',
                  destination_link_relationship_basis:
                    'conflicting-core-concept',
                  destination_link_relationship_reason:
                    'The destination is framed as an application task.',
                  destination_content_assessment:
                    emptyDestinationContentAssessment(),
                  issues: [],
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
          linkText: 'Clearance certificate',
          href: '/trust/clearance-certificate.html',
          description: 'Find out when you need a clearance certificate',
          destinationPageTitle: 'Apply for a clearance certificate - Canada.ca',
          destinationPageHeading: 'Apply for a clearance certificate',
        }),
      ],
      pageLanguage: 'en',
      hasLegacyTopicDoormatTemplate: false,
      mostRequestedLinks: [],
      selectedModel: 'selected-model',
    });

    expect(
      result.rows.some(
        (row) =>
          row.issueId === 'link-name-too-different-from-destination-title',
      ),
    ).toBeFalse();
  });

  it('builds a content-gap row from grounded destination element IDs', async () => {
    openRouter.call.and.resolveTo({
      choices: [
        {
          message: {
            content: JSON.stringify({
              doormats: [
                {
                  doormat_index: 1,
                  link_text: 'Trust returns',
                  href: '/trust/returns.html',
                  description: 'Find out how to file a trust return',
                  detected_description_style: 'sentence',
                  ...defaultLinkClassifications(),
                  destination_content_assessment: {
                    important_element_ids: ['intro-1', 'h2-1'],
                    covered_element_ids: ['h2-1'],
                    missing_important_element_ids: ['intro-1'],
                  },
                  issues: [
                    {
                      issue_category: 'description-lacks-clarity',
                      description: 'The description is unclear.',
                      evidence_details: {
                        unclear_phrase: 'trust return',
                        ambiguity_explanation:
                          'The phrase could refer to different return types.',
                      },
                      recommendation: 'Clarify the return type.',
                      severity: 'Medium',
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
          linkText: 'Trust returns',
          href: '/trust/returns.html',
          description: 'Find out how to file a trust return',
          destinationContextStatus: 'available',
          destinationIntroParagraphs: [
            'Use this page if you administer a resident or non-resident trust.',
          ],
          destinationSectionHeadings: ['How to file'],
        }),
      ],
      pageLanguage: 'en',
      hasLegacyTopicDoormatTemplate: false,
      mostRequestedLinks: [],
      selectedModel: 'selected-model',
    });

    const contentGapRow = result.rows.find(
      (row) => row.issueId === 'description-missing-needed-information',
    );
    expect(contentGapRow).toEqual(
      jasmine.objectContaining({
        rowType: 'doormat',
        severity: 'Medium',
        doormatIndex: 1,
      }),
    );
    expect(contentGapRow?.evidence).toContain(
      'Intro: "Use this page if you administer a resident or non-resident trust."',
    );
    expect(
      result.rows.some((row) => row.issueId === 'description-lacks-clarity'),
    ).toBeFalse();
  });

  it('does not build a content-gap row from destination element IDs that were not supplied', async () => {
    openRouter.call.and.resolveTo({
      choices: [
        {
          message: {
            content: JSON.stringify({
              doormats: [
                {
                  doormat_index: 1,
                  link_text: 'Trust returns',
                  href: '/trust/returns.html',
                  description: 'Find out how to file a trust return',
                  detected_description_style: 'sentence',
                  ...defaultLinkClassifications(),
                  destination_content_assessment: {
                    important_element_ids: ['h2-99'],
                    covered_element_ids: [],
                    missing_important_element_ids: ['h2-99'],
                  },
                  issues: [],
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
          linkText: 'Trust returns',
          href: '/trust/returns.html',
          description: 'Find out how to file a trust return',
          destinationContextStatus: 'available',
          destinationIntroParagraphs: [],
          destinationSectionHeadings: ['How to file'],
        }),
      ],
      pageLanguage: 'en',
      hasLegacyTopicDoormatTemplate: false,
      mostRequestedLinks: [],
      selectedModel: 'selected-model',
    });

    expect(
      result.rows.some(
        (row) => row.issueId === 'description-missing-needed-information',
      ),
    ).toBeFalse();
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
                  detected_description_style: 'phrase',
                  ...defaultLinkClassifications(),
                  destination_content_assessment:
                    emptyDestinationContentAssessment(),
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

  it('suppresses title mismatch and misdirection when the link matches the destination title', async () => {
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
                  detected_description_style: 'phrase',
                  ...defaultLinkClassifications(),
                  destination_content_assessment:
                    emptyDestinationContentAssessment(),
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
                    {
                      include: true,
                      severity: 'High',
                      issue_category: 'misdirected-link',
                      description:
                        'The URL path suggests a different section.',
                      evidence:
                        'The destination title matches, but the URL path differs.',
                      recommendation: 'Use a destination in this section.',
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
    expect(result.rows.map((row) => row.issueId)).not.toContain(
      'misdirected-link',
    );
  });

  it('suppresses lifecycle-only misdirected link findings when the destination meaning matches', async () => {
    openRouter.call.and.resolveTo({
      choices: [
        {
          message: {
            content: JSON.stringify({
              doormats: [
                {
                  doormat_index: 1,
                  link_text: 'Canada Carbon Rebate (CCR)',
                  href: '/en/revenue-agency/services/child-family-benefits/cai-payment.html',
                  description: 'Quarterly payments for people in eligible provinces',
                  detected_description_style: 'phrase',
                  ...defaultLinkClassifications(),
                  destination_content_assessment:
                    emptyDestinationContentAssessment(),
                  issues: [
                    {
                      include: true,
                      severity: 'High',
                      issue_category: 'misdirected-link',
                      evidence:
                        'The destination indicates the Canada Carbon Rebate is closed and no longer available.',
                      recommendation: 'Update the href.',
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
          linkText: 'Canada Carbon Rebate (CCR)',
          href: '/en/revenue-agency/services/child-family-benefits/cai-payment.html',
          description: 'Quarterly payments for people in eligible provinces',
          destinationPageTitle:
            'Canada Carbon Rebate for individuals - Canada.ca',
          destinationPageHeading: 'Canada Carbon Rebate for individuals',
          linkTextCharacterCount: 26,
        }),
      ],
      pageLanguage: 'en',
      hasLegacyTopicDoormatTemplate: false,
      mostRequestedLinks: [],
      selectedModel: 'selected-model',
    });

    expect(result.rows.map((row) => row.issueId)).not.toContain(
      'misdirected-link',
    );
  });

  it('does not report a status-only content gap when the doormat already shows the status', async () => {
    openRouter.call.and.resolveTo({
      choices: [
        {
          message: {
            content: JSON.stringify({
              doormats: [
                {
                  doormat_index: 1,
                  link_text: 'GST/HST break',
                  href: '/en/services/taxes/child-and-family-benefits/gst-hst-break.html',
                  description: 'Temporary tax relief',
                  detected_description_style: 'phrase',
                  ...defaultLinkClassifications(),
                  destination_content_assessment: {
                    important_element_ids: ['intro-1'],
                    covered_element_ids: [],
                    missing_important_element_ids: ['intro-1'],
                  },
                  issues: [],
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
          linkText: 'GST/HST break',
          href: '/en/services/taxes/child-and-family-benefits/gst-hst-break.html',
          description: 'Status: Closed Temporary tax relief',
          rawItemText: 'GST/HST break Status: Closed Temporary tax relief',
          destinationContextStatus: 'available',
          destinationIntroParagraphs: ['Status: Closed'],
          destinationPageHeading: 'GST/HST break',
        }),
      ],
      pageLanguage: 'en',
      hasLegacyTopicDoormatTemplate: false,
      mostRequestedLinks: [],
      selectedModel: 'selected-model',
    });

    expect(result.rows.map((row) => row.issueId)).not.toContain(
      'description-missing-needed-information',
    );
    const requestPayload = JSON.parse(
      openRouter.call.calls.mostRecent().args[1][1].content,
    );
    expect(requestPayload.doormats[0]).toEqual(
      jasmine.objectContaining({
        analysisLinkText: 'GST/HST break',
        analysisDescription: 'Temporary tax relief',
      }),
    );
  });

  it('removes all extracted labels from model analysis text', async () => {
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
                  description: 'New Benefit programs and services',
                  detected_description_style: 'phrase',
                  ...defaultLinkClassifications(),
                  destination_content_assessment:
                    emptyDestinationContentAssessment(),
                  issues: [],
                },
              ],
            }),
          },
        },
      ],
    });

    await service.analyze({
      doormatSummaries: [
        summary({
          linkText: 'New Benefit one',
          description: 'New Benefit programs and services',
          labels: ['New'],
        }),
      ],
      pageLanguage: 'en',
      hasLegacyTopicDoormatTemplate: false,
      mostRequestedLinks: [],
      selectedModel: 'selected-model',
    });

    const requestPayload = JSON.parse(
      openRouter.call.calls.mostRecent().args[1][1].content,
    );
    expect(requestPayload.doormats[0]).toEqual(
      jasmine.objectContaining({
        analysisLinkText: 'Benefit one',
        analysisDescription: 'Benefit programs and services',
      }),
    );
  });
});
