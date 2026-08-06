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
      style_detection: {
        link_text_style_definitions: {
          topic:
            'A broad subject area or information category.',
          'product-or-service':
            'A named product, program, plan, benefit, credit, form, tool, service, or account.',
          action:
            'A link name framed as an action the user can take or a task they can complete.',
          'audience-group':
            'A link name framed as an audience or user group.',
        },
      },
      language_thresholds: {
        en: {
          link_text_max_characters: 45,
          description_max_characters: 120,
        },
        fr: {
          link_text_max_characters: 45,
          description_max_characters: 120,
        },
      },
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
          id: 'description-repeats-link-text',
          label: 'Description repeats link text',
        },
        {
          id: 'description-missing-needed-information',
          label: 'Doormat has at least one content gap',
        },
        {
          id: 'description-uses-first-or-second-person',
          label: 'Description starts with first or second person',
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
      return 'Ensure both French and English are close to the ideal length.';
    }
    if (key.includes('length.link.issue')) {
      return 'Link is too long in at least one language';
    }
    if (key.includes('length.description.recommendation')) {
      return 'Ensure the French and English are both within 120 characters (with spaces).';
    }
    if (key.includes('length.description.issue')) {
      return 'Description is too long in at least one language';
    }
    if (key.includes('brokenLink.httpStatusEvidence')) {
      return `The destination request returned HTTP ${params?.['status']}.`;
    }
    if (key.includes('brokenLink.recommendation')) {
      return 'Replace the link with a valid destination URL.';
    }
    if (key.includes('mixedDescriptionStyle.evidence.twoGroups')) {
      return `Mixes ${params?.['firstStyle']} with ${params?.['secondStyle']}. ${params?.['firstExampleLabel']} examples: ${params?.['firstExamples']}. ${params?.['secondExampleLabel']} examples: ${params?.['secondExamples']}.`;
    }
    if (key.includes('mixedDescriptionStyle.evidence.multipleGroups')) {
      return `Mixes description styles in this section. ${params?.['styleParts']}.`;
    }
    if (key.includes('mixedDescriptionStyle.evidence.default')) {
      return 'Mixes description styles in this section.';
    }
    if (key.includes('mixedDescriptionStyle.recommendation')) {
      return 'Rewrite the descriptions so they use one consistent description style across the section.';
    }
    if (key.includes('consistentDescriptionStyle.issue')) {
      return 'Consistent description style';
    }
    if (key.includes('consistentDescriptionStyle.evidence')) {
      return `All ${params?.['count']} descriptions classified as ${params?.['style']}.`;
    }
    if (key.includes('consistentDescriptionStyle.recommendation')) {
      return 'Temporary diagnostic row for reviewing AI classification.';
    }
    if (key.includes('dropdownEnhancementNote.issue')) {
      return 'Valid dropdown enhancement';
    }
    if (key.includes('dropdownEnhancementNote.evidence')) {
      return 'This doormat uses a valid fieldflow dropdown enhancement.';
    }
    if (key.includes('dropdownEnhancementNote.recommendation')) {
      return 'Temporary diagnostic row for reviewing fieldflow dropdown handling.';
    }
    if (key.includes('descriptionStyles.keyword-list')) return 'keyword lists';
    if (key.includes('descriptionStyles.task-list')) return 'task lists';
    if (key.includes('descriptionStyles.benefit-eligibility')) {
      return 'benefit and eligibility descriptions';
    }
    if (key.includes('descriptionStyles.dropdown-enhancement')) {
      return 'dropdown enhancements';
    }
    if (key.includes('descriptionStyleEvidenceLabels.keyword-list')) {
      return 'Keyword list';
    }
    if (key.includes('descriptionStyleEvidenceLabels.task-list')) {
      return 'Task list';
    }
    if (key.includes('descriptionStyleEvidenceLabels.benefit-eligibility')) {
      return 'Benefit and eligibility';
    }
    if (key.includes('descriptionStyleEvidenceLabels.dropdown-enhancement')) {
      return 'Dropdown enhancement';
    }
    if (key.includes('linkStyles.topic')) return 'topic';
    if (key.includes('linkStyles.product-or-service')) {
      return 'product or service';
    }
    if (key.includes('linkStyles.action')) return 'action';
    if (key.includes('linkStyles.audience-group')) return 'audience group';
    if (key.includes('linkStyles.mixed-or-unclear')) return 'mixed or unclear';
    if (key.includes('repeatedDescriptionOpening.evidence')) {
      return `${params?.['count']} of ${params?.['total']} descriptions begin with "${params?.['opening']}": doormats ${params?.['indexes']}.`;
    }
    if (key.includes('repeatedDescriptionOpening.recommendation')) {
      return 'Vary the description openings so users can scan and distinguish the doormats more easily.';
    }
    if (key.includes('contentGap.evidence')) {
      return `Important destination elements not covered by the link text or description: ${params?.['elements']}.`;
    }
    if (key.includes('contentGap.h2')) {
      return `H2: "${params?.['text']}"`;
    }
    if (key.includes('contentGap.doormat')) {
      return `Destination doormat: "${params?.['text']}"`;
    }
    if (key.includes('contentGap.introMissing')) {
      return 'Intro content not represented by the link or description';
    }
    if (key.includes('contentGap.recommendation')) {
      return 'Add the missing decision-making information to the description without repeating the link text.';
    }
    if (key.includes('contentGap.issue')) {
      return 'Doormat has at least one content gap';
    }
    if (key.includes('descriptionPerson.evidence')) {
      return `Description starts with first or second person: '${params?.['pronoun']}'.`;
    }
    if (key.includes('descriptionPerson.recommendation')) {
      return 'Rewrite the description without first or second person.';
    }
    if (key.includes('noIssues.issue')) return 'No issues';
    if (key.includes('noIssues.evidence')) return 'No issues reported by AI.';
    if (key.includes('missingAiEvidence')) {
      return 'No AI evidence was received.';
    }
    if (key.includes('missingAiRecommendation')) {
      return 'No AI recommendation was received.';
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

  const defaultIssueDecisions = () =>
    [
      'missing-description',
      'description-uses-icons-or-images',
      'description-special-formatting',
      'description-capitalization',
      'description-list-separators',
      'description-uses-and-before-final-item',
      'misdirected-link',
      'link-name-lacks-clarity',
      'link-name-not-unique',
      'description-lacks-clarity',
      'description-incorrect-style',
      'description-repeats-link-text',
      'duplicate-or-near-duplicate-description',
      'inconsistent-description-style',
      'enhancement-label-not-needed',
      'enhancement-label-wrong-type',
    ].map((issueId) => ({
      issue_id: issueId,
      decision: 'does_not_apply',
      reason: 'No matching evidence.',
    }));

  const defaultLinkClassifications = () => ({
    detected_link_text_style: 'topic',
    destination_link_relationship: 'unavailable',
    destination_link_relationship_basis: 'unavailable',
    destination_link_relationship_reason: '',
    issue_decisions: defaultIssueDecisions(),
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
    expect(systemPrompt).toContain('"style_detection"');
    expect(systemPrompt).toContain('"link_text_style_definitions"');
    expect(systemPrompt).toContain('"product-or-service"');
    expect(systemPrompt).toContain('"action"');
    expect(systemPrompt).toContain('"audience-group"');
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

  it('repairs model-owned issues that have empty or dash-only evidence and recommendation', async () => {
    openRouter.call.and.returnValues(
      Promise.resolve({
        choices: [
          {
            message: {
              content: JSON.stringify({
                doormats: [
                  {
                    doormat_index: 1,
                    link_text: 'Benefit one',
                    href: '/en/benefits/one.html',
                    description: 'Benefit one information',
                    detected_description_style: 'phrase',
                    ...defaultLinkClassifications(),
                    destination_content_assessment:
                      emptyDestinationContentAssessment(),
                    issues: [
                      {
                        include: true,
                        severity: 'Medium',
                        issue_category: 'description-repeats-link-text',
                        description: '-',
                        recommendation: ' - ',
                      },
                    ],
                  },
                ],
              }),
            },
          },
        ],
      }),
      Promise.resolve({
        choices: [
          {
            message: {
              content: JSON.stringify({
                repairs: [
                  {
                    target_type: 'doormat',
                    doormat_index: 1,
                    issue_category: 'description-repeats-link-text',
                    evidence:
                      'The description repeats the link text instead of adding decision-making detail.',
                    recommendation:
                      'Use the description to add distinct information about the destination.',
                  },
                ],
              }),
            },
          },
        ],
      }),
    );

    const result = await service.analyze({
      doormatSummaries: [summary()],
      pageLanguage: 'fr',
      reportLanguage: 'en',
      hasLegacyTopicDoormatTemplate: false,
      mostRequestedLinks: [],
      selectedModel: 'selected-model',
    });

    const issueRow = result.rows.find(
      (row) => row.issueId === 'description-repeats-link-text',
    );
    expect(openRouter.call).toHaveBeenCalledTimes(2);
    expect(openRouter.call.calls.allArgs()[1][2]).toEqual(
      jasmine.objectContaining({
        title: 'Content Assistant - Topic Doormat Issue Field Repair',
      }),
    );
    expect(openRouter.call.calls.allArgs()[0][1][0].content).toContain(
      'Write all issue evidence and recommendation fields in English',
    );
    expect(openRouter.call.calls.allArgs()[0][1][0].content).toContain(
      'Do not switch the issue evidence or recommendation language to match the page content language',
    );
    expect(openRouter.call.calls.allArgs()[1][1][0].content).toContain(
      'Write all issue evidence and recommendation fields in English',
    );
    expect(issueRow).toEqual(
      jasmine.objectContaining({
        evidence:
          'The description repeats the link text instead of adding decision-making detail.',
        recommendation:
          'Use the description to add distinct information about the destination.',
      }),
    );
  });

  it('asks the model to repair high-confidence missed description-repeat decisions', async () => {
    const issueDecisions = defaultIssueDecisions().map((decision) =>
      decision.issue_id === 'description-repeats-link-text'
        ? {
            ...decision,
            decision: 'does_not_apply',
            reason: 'The description appears to add enough context.',
          }
        : decision,
    );
    openRouter.call.and.returnValues(
      Promise.resolve({
        choices: [
          {
            message: {
              content: JSON.stringify({
                doormats: [
                  {
                    doormat_index: 1,
                    link_text:
                      'Quand payer le solde dû sur votre déclaration de fiducie',
                    href: '/fr/fiducies/quand-payer.html',
                    description: 'Pour savoir quand payer un solde dû',
                    detected_description_style: 'task-list',
                    ...defaultLinkClassifications(),
                    issue_decisions: issueDecisions,
                    destination_content_assessment:
                      emptyDestinationContentAssessment(),
                    issues: [],
                  },
                ],
              }),
            },
          },
        ],
      }),
      Promise.resolve({
        choices: [
          {
            message: {
              content: JSON.stringify({
                repairs: [
                  {
                    doormat_index: 1,
                    issue_id: 'description-repeats-link-text',
                    decision: 'applies',
                    reason:
                      'The description repeats the same payment timing meaning.',
                    issue: {
                      issue_category: 'description-repeats-link-text',
                      description:
                        'The description repeats the link text meaning.',
                      evidence:
                        'The description repeats when to pay a balance due.',
                      recommendation:
                        'Use the description to add distinct decision-making information.',
                      severity: 'Medium',
                    },
                  },
                ],
              }),
            },
          },
        ],
      }),
    );

    const result = await service.analyze({
      doormatSummaries: [
        summary({
          linkText:
            'Quand payer le solde dû sur votre déclaration de fiducie',
          href: '/fr/fiducies/quand-payer.html',
          description: 'Pour savoir quand payer un solde dû',
          rawItemText:
            'Quand payer le solde dû sur votre déclaration de fiducie Pour savoir quand payer un solde dû',
        }),
      ],
      pageLanguage: 'fr',
      hasLegacyTopicDoormatTemplate: false,
      mostRequestedLinks: [],
      selectedModel: 'selected-model',
    });

    expect(openRouter.call).toHaveBeenCalledTimes(2);
    expect(openRouter.call.calls.allArgs()[1][2]).toEqual(
      jasmine.objectContaining({
        title: 'Content Assistant - Topic Doormat Issue Decision Repair',
      }),
    );
    expect(
      result.rows.find(
        (row) => row.issueId === 'description-repeats-link-text',
      ),
    ).toEqual(
      jasmine.objectContaining({
        severity: 'Medium',
        doormatIndex: 1,
        evidence: 'The description repeats when to pay a balance due.',
      }),
    );
  });

  it('keeps model-owned issues visible when repair returns dash-only placeholders', async () => {
    openRouter.call.and.returnValues(
      Promise.resolve({
        choices: [
          {
            message: {
              content: JSON.stringify({
                doormats: [
                  {
                    doormat_index: 1,
                    link_text: 'Benefit one',
                    href: '/en/benefits/one.html',
                    description: 'Benefit one information',
                    detected_description_style: 'phrase',
                    ...defaultLinkClassifications(),
                    destination_content_assessment:
                      emptyDestinationContentAssessment(),
                    issues: [
                      {
                        include: true,
                        severity: 'Medium',
                        issue_category: 'description-repeats-link-text',
                        description: '-',
                        recommendation: '--',
                      },
                    ],
                  },
                ],
              }),
            },
          },
        ],
      }),
      Promise.resolve({
        choices: [
          {
            message: {
              content: JSON.stringify({
                repairs: [
                  {
                    target_type: 'doormat',
                    doormat_index: 1,
                    issue_category: 'description-repeats-link-text',
                    evidence: '-',
                    recommendation: '--',
                  },
                ],
              }),
            },
          },
        ],
      }),
    );

    const result = await service.analyze({
      doormatSummaries: [summary()],
      pageLanguage: 'en',
      hasLegacyTopicDoormatTemplate: false,
      mostRequestedLinks: [],
      selectedModel: 'selected-model',
    });

    expect(openRouter.call).toHaveBeenCalledTimes(2);
    expect(result.rows).toContain(
      jasmine.objectContaining({
        issueId: 'description-repeats-link-text',
        evidence: 'No AI evidence was received.',
        recommendation: 'No AI recommendation was received.',
      }),
    );
  });

  it('sends multi-section doormat analysis as separate section calls', async () => {
    openRouter.call.and.callFake(
      (_model: string, messages: { role: string; content: string }[]) => {
        const payload = JSON.parse(messages[1].content) as {
          doormats: { index: number; linkText: string; href: string }[];
        };
        expect(payload.doormats.length).toBe(1);
        const doormat = payload.doormats[0];
        return Promise.resolve({
          choices: [
            {
              message: {
                content: JSON.stringify({
                  doormats: [
                    {
                      doormat_index: doormat.index,
                      link_text: doormat.linkText,
                      href: doormat.href,
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
        } as any);
      },
    );

    const result = await service.analyze({
      doormatSummaries: [
        summary({
          index: 1,
          sectionIndex: 1,
          sectionTitle: 'Benefits',
          sectionItemIndex: 1,
          sectionDoormatCount: 1,
        }),
        summary({
          index: 2,
          linkText: 'Credits',
          href: '/en/benefits/credits.html',
          sectionIndex: 2,
          sectionTitle: 'Credits',
          sectionItemIndex: 1,
          sectionDoormatCount: 1,
        }),
      ],
      pageLanguage: 'en',
      hasLegacyTopicDoormatTemplate: false,
      mostRequestedLinks: [],
      selectedModel: 'selected-model',
    });

    expect(openRouter.call.calls.count()).toBe(2);
    const sectionPayloads = openRouter.call.calls.allArgs().map((args) => {
      const messages = args[1] as { role: string; content: string }[];
      return JSON.parse(messages[1].content) as {
        doormats: { index: number; sectionIndex: number }[];
      };
    });
    expect(sectionPayloads.map((payload) => payload.doormats[0].index)).toEqual(
      [1, 2],
    );
    expect(
      sectionPayloads.map((payload) => payload.doormats[0].sectionIndex),
    ).toEqual([1, 2]);
    expect(result.usedLocalFallback).toBeFalse();
    expect(
      result.rows.filter((row) => row.issueId === 'no-issues').length,
    ).toBe(2);
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

  it('does not report valid absolute https hrefs as broken when destination context is unavailable', async () => {
    openRouter.call.and.resolveTo({
      choices: [{ message: { content: '' } }],
    });

    const result = await service.analyze({
      doormatSummaries: [
        summary({
          href: 'https://www.canada.ca/en/revenue-agency/services/charities-giving/about-registered-charities.html',
          destinationUrl: undefined,
          destinationContextStatus: 'failed',
          destinationHttpStatus: undefined,
          destinationFetchError: 'Failed to fetch',
        }),
      ],
      pageLanguage: 'en',
      hasLegacyTopicDoormatTemplate: false,
      mostRequestedLinks: [],
      selectedModel: 'selected-model',
    });

    expect(
      result.rows.some((row) => row.issueId === 'broken-link'),
    ).toBeFalse();
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
                  severity: 'Low',
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
                          description: 'The doormat has a content gap.',
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
                      evidence:
                        'It is unclear who or what the pronouns refer to.',
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
        style: 'task-list',
      },
      {
        description: 'Apply for a trust account number.',
        style: 'task-list',
      },
      {
        description: 'Available to qualifying resident trusts.',
        style: 'benefit-eligibility',
      },
      {
        description: 'Monthly support for eligible beneficiaries.',
        style: 'benefit-eligibility',
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
        severity: 'Low',
        sectionIndex: 1,
      }),
    );
    expect(mixedStyleRow?.evidence).toContain('Task list examples: 1, 2.');
    expect(mixedStyleRow?.evidence).toContain(
      'Benefit and eligibility examples: 3, 4.',
    );
  });

  it('adds a non-actionable section row for a consistent description style', async () => {
    const descriptions = [
      'File income tax, get the benefit package',
      'Apply for benefits, check payment status',
      'Update direct deposit, view tax slips',
    ];
    openRouter.call.and.resolveTo({
      choices: [
        {
          message: {
            content: JSON.stringify({
              doormats: descriptions.map((description, index) => ({
                doormat_index: index + 1,
                link_text: `Benefit task ${index + 1}`,
                href: `/benefits/task-${index + 1}.html`,
                description,
                detected_description_style: 'task-list',
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
      doormatSummaries: descriptions.map((description, index) =>
        summary({
          index: index + 1,
          linkText: `Benefit task ${index + 1}`,
          href: `/benefits/task-${index + 1}.html`,
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

    const styleRow = result.rows.find(
      (row) => row.issueId === 'consistent-description-style-in-section',
    );
    expect(styleRow).toEqual(
      jasmine.objectContaining({
        include: false,
        rowType: 'section',
        severity: 'OK',
        sectionIndex: 1,
        issue: 'Consistent description style',
        evidence: 'All 3 descriptions classified as task lists.',
        recommendation: 'Temporary diagnostic row for reviewing AI classification.',
      }),
    );
    expect(
      result.rows.some(
        (row) => row.issueId === 'mixed-description-style-in-section',
      ),
    ).toBeFalse();
  });

  it('notes fieldflow dropdown enhancements while checking their description text style', async () => {
    openRouter.call.and.resolveTo({
      choices: [
        {
          message: {
            content: JSON.stringify({
              doormats: [
                {
                  doormat_index: 1,
                  link_text: 'Provincial and territorial benefits',
                  href: '/benefits/provincial.html',
                  description:
                    'Benefits that the CRA administers for the provinces and territories',
                  detected_description_style: 'benefit-eligibility',
                  ...defaultLinkClassifications(),
                  destination_content_assessment:
                    emptyDestinationContentAssessment(),
                  issues: [],
                },
                {
                  doormat_index: 2,
                  link_text: 'Benefit payment dates',
                  href: '/benefits/dates.html',
                  description: 'Monthly payment dates for eligible families',
                  detected_description_style: 'benefit-eligibility',
                  ...defaultLinkClassifications(),
                  destination_content_assessment:
                    emptyDestinationContentAssessment(),
                  issues: [],
                },
                {
                  doormat_index: 3,
                  link_text: 'Child benefit',
                  href: '/benefits/child.html',
                  description: 'Monthly payment for eligible families',
                  detected_description_style: 'benefit-eligibility',
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
      doormatSummaries: [
        summary({
          index: 1,
          linkText: 'Provincial and territorial benefits',
          href: '/benefits/provincial.html',
          description:
            'Benefits that the CRA administers for the provinces and territories',
          itemLinkCount: 14,
          fieldflowLinkCount: 13,
          hasFieldflow: true,
          sectionItemIndex: 1,
          sectionDoormatCount: 3,
        }),
        summary({
          index: 2,
          linkText: 'Benefit payment dates',
          href: '/benefits/dates.html',
          description: 'Monthly payment dates for eligible families',
          sectionItemIndex: 2,
          sectionDoormatCount: 3,
        }),
        summary({
          index: 3,
          linkText: 'Child benefit',
          href: '/benefits/child.html',
          description: 'Monthly payment for eligible families',
          sectionItemIndex: 3,
          sectionDoormatCount: 3,
        }),
      ],
      pageLanguage: 'en',
      hasLegacyTopicDoormatTemplate: false,
      mostRequestedLinks: [],
      selectedModel: 'selected-model',
    });

    expect(result.rows.some((row) => row.issueId === 'multiple-links')).toBeFalse();
    const dropdownNoteRow = result.rows.find(
      (row) => row.issueId === 'valid-dropdown-enhancement',
    );
    expect(dropdownNoteRow).toEqual(
      jasmine.objectContaining({
        rowType: 'doormat',
        severity: 'OK',
        include: false,
        doormatIndex: 1,
        sectionItemIndex: 1,
        evidence:
          'This doormat uses a valid fieldflow dropdown enhancement.',
      }),
    );

    const consistentStyleRow = result.rows.find(
      (row) => row.issueId === 'consistent-description-style-in-section',
    );
	    expect(consistentStyleRow).toEqual(
	      jasmine.objectContaining({
	        include: false,
	        rowType: 'section',
	        severity: 'OK',
	        evidence:
	          'All 3 descriptions classified as benefit and eligibility descriptions.',
	      }),
	    );
    expect(
      result.rows.some(
        (row) => row.issueId === 'mixed-description-style-in-section',
      ),
    ).toBeFalse();
  });

  it('checks mixed description styles across all doormats including fieldflow doormats', async () => {
    openRouter.call.and.resolveTo({
      choices: [
        {
          message: {
            content: JSON.stringify({
              doormats: [
                {
                  doormat_index: 1,
                  link_text: 'Provincial and territorial benefits',
                  href: '/benefits/provincial.html',
                  description:
                    'Benefits that the CRA administers for the provinces and territories',
                  detected_description_style: 'benefit-eligibility',
                  ...defaultLinkClassifications(),
                  destination_content_assessment:
                    emptyDestinationContentAssessment(),
                  issues: [],
                },
                {
                  doormat_index: 2,
                  link_text: 'Benefit topics',
                  href: '/benefits/topics.html',
                  description: 'Payment dates, eligibility, application status',
                  detected_description_style: 'keyword-list',
                  ...defaultLinkClassifications(),
                  destination_content_assessment:
                    emptyDestinationContentAssessment(),
                  issues: [],
                },
                {
                  doormat_index: 3,
                  link_text: 'Credit topics',
                  href: '/benefits/credits.html',
                  description: 'Amounts, payment dates, eligibility',
                  detected_description_style: 'keyword-list',
                  ...defaultLinkClassifications(),
                  destination_content_assessment:
                    emptyDestinationContentAssessment(),
                  issues: [],
                },
                {
                  doormat_index: 4,
                  link_text: 'Apply for a benefit',
                  href: '/benefits/apply.html',
                  description: 'Apply for benefits, check application status',
                  detected_description_style: 'task-list',
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
      doormatSummaries: [
        summary({
          index: 1,
          linkText: 'Provincial and territorial benefits',
          href: '/benefits/provincial.html',
          description:
            'Benefits that the CRA administers for the provinces and territories',
          itemLinkCount: 14,
          fieldflowLinkCount: 13,
          hasFieldflow: true,
          sectionItemIndex: 1,
          sectionDoormatCount: 4,
        }),
        summary({
          index: 2,
          linkText: 'Benefit topics',
          href: '/benefits/topics.html',
          description: 'Payment dates, eligibility, application status',
          sectionItemIndex: 2,
          sectionDoormatCount: 4,
        }),
        summary({
          index: 3,
          linkText: 'Credit topics',
          href: '/benefits/credits.html',
          description: 'Amounts, payment dates, eligibility',
          sectionItemIndex: 3,
          sectionDoormatCount: 4,
        }),
        summary({
          index: 4,
          linkText: 'Apply for a benefit',
          href: '/benefits/apply.html',
          description: 'Apply for benefits, check application status',
          sectionItemIndex: 4,
          sectionDoormatCount: 4,
        }),
      ],
      pageLanguage: 'en',
      hasLegacyTopicDoormatTemplate: false,
      mostRequestedLinks: [],
      selectedModel: 'selected-model',
    });

    const dropdownNoteRow = result.rows.find(
      (row) => row.issueId === 'valid-dropdown-enhancement',
    );
    expect(dropdownNoteRow?.evidence).toBe(
      'This doormat uses a valid fieldflow dropdown enhancement.',
    );
    expect(dropdownNoteRow?.rowType).toBe('doormat');
    expect(dropdownNoteRow?.doormatIndex).toBe(1);
    const mixedStyleRow = result.rows.find(
      (row) => row.issueId === 'mixed-description-style-in-section',
    );
	    expect(mixedStyleRow).toEqual(
	      jasmine.objectContaining({
	        rowType: 'section',
	        severity: 'Low',
	      }),
	    );
	    expect(mixedStyleRow?.evidence).toContain('Keyword list examples: 2, 3.');
	    expect(mixedStyleRow?.evidence).toContain('Task list examples: 4.');
	    expect(mixedStyleRow?.evidence).toContain(
	      'Benefit and eligibility examples: 1.',
	    );
  });

  it('rejects dropdown enhancement classifications on doormats without fieldflow', async () => {
    const descriptions = [
      'Benefits that the CRA administers for the provinces and territories',
      'Quarterly payment for people with low and modest incomes',
      'Monthly payment for eligible families',
    ];
    openRouter.call.and.resolveTo({
      choices: [
        {
          message: {
            content: JSON.stringify({
              doormats: descriptions.map((description, index) => ({
                doormat_index: index + 1,
                link_text: `Benefit ${index + 1}`,
                href: `/benefits/${index + 1}.html`,
                description,
                detected_description_style: 'dropdown-enhancement',
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
      doormatSummaries: descriptions.map((description, index) =>
        summary({
          index: index + 1,
          linkText: `Benefit ${index + 1}`,
          href: `/benefits/${index + 1}.html`,
          description,
          itemLinkCount: index === 0 ? 14 : 1,
          fieldflowLinkCount: index === 0 ? 13 : 0,
          hasFieldflow: index === 0,
          sectionItemIndex: index + 1,
          sectionDoormatCount: descriptions.length,
        }),
      ),
      pageLanguage: 'en',
      hasLegacyTopicDoormatTemplate: false,
      mostRequestedLinks: [],
      selectedModel: 'selected-model',
    });

    const consistentStyleRow = result.rows.find(
      (row) => row.issueId === 'consistent-description-style-in-section',
    );
    expect(consistentStyleRow).toBeUndefined();
    const dropdownNoteRow = result.rows.find(
      (row) => row.issueId === 'valid-dropdown-enhancement',
    );
    expect(dropdownNoteRow).toEqual(
      jasmine.objectContaining({
        rowType: 'doormat',
        include: false,
        severity: 'OK',
        doormatIndex: 1,
        evidence:
          'This doormat uses a valid fieldflow dropdown enhancement.',
      }),
    );
    expect(
      result.rows.some(
        (row) => row.issueId === 'mixed-description-style-in-section',
      ),
    ).toBeFalse();
    expect(result.rows.some((row) => row.issueId === 'multiple-links')).toBeFalse();
  });

  it('derives link-style and destination rows from classifications for the trust-page regression case', async () => {
    const linkCases = [
      {
        linkText: 'Filing a trust return',
        style: 'action',
        relationship: 'unavailable',
      },
      {
        linkText: 'Tax year-end and fiscal period',
        style: 'topic',
        relationship: 'unavailable',
      },
      {
        linkText: 'Submitting and filing documents online related to trusts',
        style: 'action',
        relationship: 'broader-but-accurate',
        destinationPageTitle:
          'Submitting and filing electronic documents to the T3 Estate and Trust Return programs - Canada.ca',
        destinationPageHeading:
          'Submit and file documents online related to T3',
      },
      {
        linkText: 'When to pay a balance you owe on your trust return',
        style: 'action',
        relationship: 'unavailable',
      },
      {
        linkText: 'Residency and how to contact us',
        style: 'topic',
        relationship: 'equivalent',
        destinationPageTitle:
          'Residency and contact us information - Canada.ca',
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
                issue_decisions: defaultIssueDecisions(),
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

    const mixedLinkStyleRows = result.rows.filter(
      (row) => row.issueId === 'mixed-link-name-styles-in-section',
    );
    expect(mixedLinkStyleRows.length).toBe(1);
    expect(mixedLinkStyleRows[0].severity).toBe('Low');
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
                  issue_decisions: defaultIssueDecisions(),
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
                    important_element_ids: ['intro-1', 'intro-2', 'h2-1'],
                    covered_element_ids: ['h2-1'],
                    missing_important_element_ids: ['intro-1', 'intro-2'],
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
            'Find information for trustees, beneficiaries, and contributors.',
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
        issue: 'Doormat has at least one content gap',
      }),
    );
    expect(contentGapRow?.evidence).toContain(
      'Intro content not represented by the link or description',
    );
    expect(contentGapRow?.evidence).not.toContain(
      'Use this page if you administer',
    );
    expect(contentGapRow?.evidence).not.toContain(
      'Find information for trustees',
    );
    expect(
      contentGapRow?.evidence.match(
        /Intro content not represented by the link or description/g,
      )?.length,
    ).toBe(1);
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

  it('sends destination doormats as compact context for navigation destination pages', async () => {
    openRouter.call.and.resolveTo({
      choices: [
        {
          message: {
            content: JSON.stringify({
              doormats: [
                {
                  doormat_index: 1,
                  link_text: 'Benefits',
                  href: '/benefits.html',
                  description: 'Benefit program information',
                  detected_description_style: 'phrase',
                  ...defaultLinkClassifications(),
                  destination_content_assessment: {
                    important_element_ids: ['doormat-1', 'doormat-2'],
                    covered_element_ids: ['doormat-1'],
                    missing_important_element_ids: ['doormat-2'],
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
          linkText: 'Benefits',
          href: '/benefits.html',
          description: 'Benefit program information',
          destinationContextStatus: 'available',
          destinationPageType: 'topic',
          destinationIntroParagraphs: [
            'Intro text that should not be compacted',
          ],
          destinationSectionHeadings: ['H2 that should not be compacted'],
          destinationNavigationItems: [
            {
              linkText: 'Eligibility',
              description: 'Who can get benefits',
              sectionTitle: 'Benefit topics',
              source: 'topic-doormat',
            },
            {
              linkText: 'Apply for benefits',
              description: 'Applications, documents, deadlines',
              sectionTitle: 'Benefit topics',
              source: 'topic-doormat',
            },
          ],
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
    expect(requestPayload.doormats[0].destinationContext).toEqual(
      jasmine.objectContaining({
        pageType: 'topic',
        elements: [
          {
            id: 'doormat-1',
            type: 'doormat',
            text: 'Eligibility: Who can get benefits',
            source: 'topic-doormat',
          },
          {
            id: 'doormat-2',
            type: 'doormat',
            text: 'Apply for benefits: Applications, documents, deadlines',
            source: 'topic-doormat',
          },
        ],
      }),
    );
    expect(requestPayload.doormats[0].destinationContext.elements).not.toEqual(
      jasmine.arrayContaining([
        jasmine.objectContaining({ id: 'intro-1' }),
        jasmine.objectContaining({ id: 'h2-1' }),
      ]),
    );
    expect(
      result.rows.find(
        (row) => row.issueId === 'description-missing-needed-information',
      ),
    ).toEqual(
      jasmine.objectContaining({
        evidence:
          'Important destination elements not covered by the link text or description: Destination doormat: "Apply for benefits".',
      }),
    );
    expect(
      result.rows.find(
        (row) => row.issueId === 'description-missing-needed-information',
      )?.evidence,
    ).not.toContain('Applications, documents, deadlines');
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
    expect(
      result.rows.some((row) => row.issueId === 'invented-issue'),
    ).toBeFalse();
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
          linkTextCharacterCount: 46,
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
    expect(result.rows).toContain(
      jasmine.objectContaining({
        issue: 'Link is too long in at least one language',
        severity: 'Low',
      }),
    );
    expect(result.rows.some((row) => row.issueId === 'no-issues')).toBeFalse();
  });

  it('does not flag English link names that are below the current 45 character ideal', async () => {
    openRouter.call.and.resolveTo({
      choices: [{ message: { content: '' } }],
    });

    const result = await service.analyze({
      doormatSummaries: [
        summary({
          linkText: 'Confirm registration as a qualified',
          linkTextCharacterCount: 38,
        }),
      ],
      pageLanguage: 'en',
      hasLegacyTopicDoormatTemplate: false,
      mostRequestedLinks: [],
      selectedModel: 'selected-model',
    });

    expect(
      result.rows.some((row) => row.issueId === 'link-name-too-long'),
    ).toBeFalse();
  });

  it('combines description length findings into one section row', async () => {
    openRouter.call.and.resolveTo({
      choices: [{ message: { content: '' } }],
    });

    const result = await service.analyze({
      doormatSummaries: [
        summary({
          index: 1,
          sectionItemIndex: 1,
          linkText: 'Allowed description',
          descriptionCharacterCount: 120,
        }),
        summary({
          index: 2,
          sectionItemIndex: 2,
          linkText: 'Too long description',
          descriptionCharacterCount: 121,
        }),
        summary({
          index: 3,
          sectionItemIndex: 3,
          linkText: 'Opposite language description',
          descriptionCharacterCount: 120,
        }),
        summary({
          index: 4,
          sectionItemIndex: 4,
          linkText: 'Very long description',
          descriptionCharacterCount: 141,
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
        rowType: 'section',
        severity: 'High',
        issue: 'Description is too long in at least one language',
        evidenceItems: [
          {
            label: 'Doormat 2',
            metric: '121',
            metricParts: [{ metric: '121', severity: 'Low' }],
            severity: 'Low',
          },
          {
            label: 'Doormat 4',
            metric: '141',
            metricParts: [{ metric: '141', severity: 'High' }],
            severity: 'High',
          },
        ],
      }),
    );
  });

  it('uses paired bilingual counts for length decisions when available', async () => {
    openRouter.call.and.resolveTo({
      choices: [{ message: { content: '' } }],
    });

    const result = await service.analyze({
      doormatSummaries: [
        summary({
          index: 1,
          sectionItemIndex: 1,
          linkText: 'English warning fallback length',
          linkTextCharacterCount: 40,
          oppositeLanguage: 'fr',
          oppositeLanguageLinkTextCharacterCount: 44,
          descriptionCharacterCount: 100,
          oppositeLanguageDescriptionCharacterCount: 119,
        }),
        summary({
          index: 2,
          sectionItemIndex: 2,
          linkText: 'Bilingual link issue',
          linkTextCharacterCount: 42,
          oppositeLanguage: 'fr',
          oppositeLanguageLinkTextCharacterCount: 61,
          descriptionCharacterCount: 90,
          oppositeLanguageDescriptionCharacterCount: 125,
        }),
        summary({
          index: 3,
          sectionItemIndex: 3,
          linkText: 'Both bilingual link issue',
          linkTextCharacterCount: 46,
          oppositeLanguage: 'fr',
          oppositeLanguageLinkTextCharacterCount: 50,
          descriptionCharacterCount: 120,
          oppositeLanguageDescriptionCharacterCount: 120,
        }),
      ],
      pageLanguage: 'en',
      hasLegacyTopicDoormatTemplate: false,
      mostRequestedLinks: [],
      selectedModel: 'selected-model',
    });

    const linkRows = result.rows.filter(
      (row) => row.issueId === 'link-name-too-long',
    );
    const descriptionRows = result.rows.filter(
      (row) => row.issueId === 'description-too-long',
    );

    expect(linkRows.length).toBe(1);
    expect(linkRows[0]).toEqual(
      jasmine.objectContaining({
        issue: 'Link is too long in at least one language',
        severity: 'Medium',
        evidenceItems: [
          {
            label: 'Doormat 2',
            metric: 'EN 42/45; FR 61/45',
            metricParts: [
              { metric: 'EN 42/45', severity: 'OK' },
              { metric: 'FR 61/45', severity: 'Medium' },
            ],
            severity: 'Medium',
          },
          {
            label: 'Doormat 3',
            metric: 'EN 46/45; FR 50/45',
            metricParts: [
              { metric: 'EN 46/45', severity: 'Low' },
              { metric: 'FR 50/45', severity: 'Low' },
            ],
            severity: 'Low',
          },
        ],
      }),
    );
    expect(descriptionRows.length).toBe(1);
    expect(descriptionRows[0]).toEqual(
      jasmine.objectContaining({
        issue: 'Description is too long in at least one language',
        severity: 'Low',
        evidenceItems: [
          {
            label: 'Doormat 2',
            metric: 'EN 90; FR 125',
            metricParts: [
              { metric: 'EN 90', severity: 'OK' },
              { metric: 'FR 125', severity: 'Low' },
            ],
            severity: 'Low',
          },
        ],
      }),
    );
  });

  it('flags descriptions that use first or second person', async () => {
    openRouter.call.and.resolveTo({
      choices: [{ message: { content: '' } }],
    });

    const result = await service.analyze({
      doormatSummaries: [
        summary({
          linkText: 'Canada Carbon Rebate (CCR)',
          labels: ['Closed'],
          description:
            'You may still be eligible if you are filing for a tax year 2021, 2022, 2023, or 2024',
          linkTextCharacterCount: 26,
          descriptionCharacterCount: 91,
        }),
      ],
      pageLanguage: 'en',
      hasLegacyTopicDoormatTemplate: false,
      mostRequestedLinks: [],
      selectedModel: 'selected-model',
    });

    const personRows = result.rows.filter(
      (row) => row.issueId === 'description-uses-first-or-second-person',
    );
    expect(personRows.length).toBe(1);
    expect(personRows[0]).toEqual(
      jasmine.objectContaining({
        rowType: 'doormat',
        severity: 'Medium',
        doormatIndex: 1,
        evidence: "Description starts with first or second person: 'You'.",
        recommendation:
          'Rewrite the description without first or second person.',
      }),
    );
  });

  it('allows imperative descriptions and later second-person references', async () => {
    openRouter.call.and.resolveTo({
      choices: [{ message: { content: '' } }],
    });

    const result = await service.analyze({
      doormatSummaries: [
        summary({
          index: 1,
          sectionItemIndex: 1,
          description: 'Find benefit payment dates',
        }),
        summary({
          index: 2,
          sectionItemIndex: 2,
          description: 'Determine eligibility before you apply',
        }),
      ],
      pageLanguage: 'en',
      hasLegacyTopicDoormatTemplate: false,
      mostRequestedLinks: [],
      selectedModel: 'selected-model',
    });

    expect(
      result.rows.some(
        (row) => row.issueId === 'description-uses-first-or-second-person',
      ),
    ).toBeFalse();
  });

  it('does not report a repeated description opening below 40 percent of a section', async () => {
    openRouter.call.and.resolveTo({
      choices: [{ message: { content: '' } }],
    });

    const result = await service.analyze({
      doormatSummaries: [
        summary({
          index: 1,
          sectionItemIndex: 1,
          description: 'Find benefit payment dates',
        }),
        summary({
          index: 2,
          sectionItemIndex: 2,
          description: 'Apply for a benefit',
        }),
        summary({
          index: 3,
          sectionItemIndex: 3,
          description: 'find benefit eligibility details',
        }),
        summary({
          index: 4,
          sectionItemIndex: 4,
          description: 'Manage your benefit account',
        }),
        summary({
          index: 5,
          sectionItemIndex: 5,
          description: 'Claim a tax credit',
        }),
        summary({
          index: 6,
          sectionItemIndex: 6,
          description: 'Review your payment dates',
        }),
      ],
      pageLanguage: 'en',
      hasLegacyTopicDoormatTemplate: false,
      mostRequestedLinks: [],
      selectedModel: 'selected-model',
    });

    expect(
      result.rows.some((row) => row.issueId === 'repeated-description-opening'),
    ).toBeFalse();
  });

  it('reports a non-adjacent repeated description opening as Low at 40 percent of a section', async () => {
    openRouter.call.and.resolveTo({
      choices: [{ message: { content: '' } }],
    });

    const result = await service.analyze({
      doormatSummaries: [
        summary({
          index: 1,
          sectionItemIndex: 1,
          description: 'Find, benefit payment dates',
        }),
        summary({
          index: 2,
          sectionItemIndex: 2,
          description: 'Apply for a benefit',
        }),
        summary({
          index: 3,
          sectionItemIndex: 3,
          description: 'find benefit eligibility details',
        }),
        summary({
          index: 4,
          sectionItemIndex: 4,
          description: 'Manage your benefit account',
        }),
        summary({
          index: 5,
          sectionItemIndex: 5,
          description: 'Claim a tax credit',
        }),
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
      '2 of 5 descriptions begin with "Find benefit": doormats 1, 3.',
    );
  });

  it('reports multiple repeated description openings in one section entry', async () => {
    openRouter.call.and.resolveTo({
      choices: [{ message: { content: '' } }],
    });

    const result = await service.analyze({
      doormatSummaries: [
        summary({
          index: 1,
          sectionItemIndex: 1,
          description: 'Find benefit payment dates',
        }),
        summary({
          index: 2,
          sectionItemIndex: 2,
          description: 'Apply for a benefit',
        }),
        summary({
          index: 3,
          sectionItemIndex: 3,
          description: 'find benefit eligibility details',
        }),
        summary({
          index: 4,
          sectionItemIndex: 4,
          description: 'Apply for tax credits',
        }),
        summary({
          index: 5,
          sectionItemIndex: 5,
          description: 'Claim a tax credit',
        }),
      ],
      pageLanguage: 'en',
      hasLegacyTopicDoormatTemplate: false,
      mostRequestedLinks: [],
      selectedModel: 'selected-model',
    });

    const repeatedRows = result.rows.filter(
      (row) => row.issueId === 'repeated-description-opening',
    );
    expect(repeatedRows.length).toBe(1);
    expect(repeatedRows[0]).toEqual(
      jasmine.objectContaining({
        rowType: 'section',
        severity: 'Low',
        sectionIndex: 1,
      }),
    );
    expect(repeatedRows[0].evidence).toContain(
      '2 of 5 descriptions begin with "Find benefit": doormats 1, 3.',
    );
    expect(repeatedRows[0].evidence).toContain(
      '2 of 5 descriptions begin with "Apply for": doormats 2, 4.',
    );
  });

  it('reports adjacent repeated description openings as Medium', async () => {
    openRouter.call.and.resolveTo({
      choices: [{ message: { content: '' } }],
    });

    const result = await service.analyze({
      doormatSummaries: [
        summary({
          index: 1,
          sectionItemIndex: 1,
          description: 'Find benefit payment dates',
        }),
        summary({
          index: 2,
          sectionItemIndex: 2,
          description: 'Find benefit eligibility details',
        }),
        summary({
          index: 3,
          sectionItemIndex: 3,
          description: 'Manage your benefit account',
        }),
        summary({
          index: 4,
          sectionItemIndex: 4,
          description: 'Claim a tax credit',
        }),
        summary({
          index: 5,
          sectionItemIndex: 5,
          description: 'Review your payment dates',
        }),
      ],
      pageLanguage: 'en',
      hasLegacyTopicDoormatTemplate: false,
      mostRequestedLinks: [],
      selectedModel: 'selected-model',
    });

    expect(
      result.rows.find((row) => row.issueId === 'repeated-description-opening'),
    ).toEqual(
      jasmine.objectContaining({ severity: 'Medium', sectionIndex: 1 }),
    );
  });

  it('reports a repeated description opening as Medium above 60 percent of a section', async () => {
    openRouter.call.and.resolveTo({
      choices: [{ message: { content: '' } }],
    });

    const result = await service.analyze({
      doormatSummaries: [
        summary({
          index: 1,
          sectionItemIndex: 1,
          description: 'Find benefit payment dates',
        }),
        summary({
          index: 2,
          sectionItemIndex: 2,
          description: 'Find benefit eligibility details',
        }),
        summary({
          index: 3,
          sectionItemIndex: 3,
          description: 'Find benefit account information',
        }),
        summary({
          index: 4,
          sectionItemIndex: 4,
          description: 'Manage your benefit account',
        }),
      ],
      pageLanguage: 'en',
      hasLegacyTopicDoormatTemplate: false,
      mostRequestedLinks: [],
      selectedModel: 'selected-model',
    });

    expect(
      result.rows.find((row) => row.issueId === 'repeated-description-opening'),
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
      result.rows.some((row) => row.issueId === 'repeated-description-opening'),
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
                  link_text:
                    'Credits impot et prestations pour les particuliers',
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
                      evidence: 'Destination title closely matches link text.',
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
                      description: 'The URL path suggests a different section.',
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
                  description:
                    'Quarterly payments for people in eligible provinces',
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
          labels: ['Status: Closed'],
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

  it('suppresses French lifecycle-only destination content gaps', async () => {
    openRouter.call.and.resolveTo({
      choices: [
        {
          message: {
            content: JSON.stringify({
              doormats: [
                {
                  doormat_index: 1,
                  link_text: 'Remise canadienne sur le carbone (RCC)',
                  href: '/fr/services/impots/prestations/remise-carbone.html',
                  description:
                    'Voyez les paiements pour les provinces admissibles',
                  detected_description_style: 'phrase',
                  ...defaultLinkClassifications(),
                  destination_content_assessment: {
                    important_element_ids: ['intro-1', 'intro-2'],
                    covered_element_ids: [],
                    missing_important_element_ids: ['intro-1', 'intro-2'],
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
          linkText: 'Remise canadienne sur le carbone (RCC)',
          href: '/fr/services/impots/prestations/remise-carbone.html',
          description: 'Voyez les paiements pour les provinces admissibles',
          destinationContextStatus: 'available',
          destinationIntroParagraphs: [
            'Le 15 mars 2025, le gouvernement du Canada a annoncé la fin de la redevance sur les combustibles et de la Remise canadienne sur le carbone.',
            "Après le versement d'avril 2025, il n'y aura pas d'autres versements trimestriels.",
          ],
        }),
      ],
      pageLanguage: 'fr',
      hasLegacyTopicDoormatTemplate: false,
      mostRequestedLinks: [],
      selectedModel: 'selected-model',
    });

    expect(result.rows.map((row) => row.issueId)).not.toContain(
      'description-missing-needed-information',
    );
  });

  it('suppresses non-decision-critical French H2 content gaps', async () => {
    openRouter.call.and.resolveTo({
      choices: [
        {
          message: {
            content: JSON.stringify({
              doormats: [
                {
                  doormat_index: 1,
                  link_text: 'Programmes provinciaux et territoriaux',
                  href: '/fr/services/impots/prestations/provinciaux.html',
                  description: 'Programmes offerts par province et territoire',
                  detected_description_style: 'phrase',
                  ...defaultLinkClassifications(),
                  destination_content_assessment: {
                    important_element_ids: ['h2-1'],
                    covered_element_ids: [],
                    missing_important_element_ids: ['h2-1'],
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
          linkText: 'Programmes provinciaux et territoriaux',
          href: '/fr/services/impots/prestations/provinciaux.html',
          description: 'Programmes offerts par province et territoire',
          destinationContextStatus: 'available',
          destinationSectionHeadings: ['Nouveau calcul des prestations'],
        }),
      ],
      pageLanguage: 'fr',
      hasLegacyTopicDoormatTemplate: false,
      mostRequestedLinks: [],
      selectedModel: 'selected-model',
    });

    expect(result.rows.map((row) => row.issueId)).not.toContain(
      'description-missing-needed-information',
    );
  });

  it('suppresses generic French H2 content gaps when the concept is covered', async () => {
    openRouter.call.and.resolveTo({
      choices: [
        {
          message: {
            content: JSON.stringify({
              doormats: [
                {
                  doormat_index: 1,
                  link_text: 'Prestation pour enfants handicapes',
                  href: '/fr/services/impots/prestations/enfants-handicapes.html',
                  description: 'Paiements pour les familles admissibles',
                  detected_description_style: 'phrase',
                  ...defaultLinkClassifications(),
                  destination_content_assessment: {
                    important_element_ids: ['h2-1'],
                    covered_element_ids: [],
                    missing_important_element_ids: ['h2-1'],
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
          linkText: 'Prestation pour enfants handicapes',
          href: '/fr/services/impots/prestations/enfants-handicapes.html',
          description: 'Paiements pour les familles admissibles',
          destinationContextStatus: 'available',
          destinationSectionHeadings: ['Admissibilite'],
        }),
      ],
      pageLanguage: 'fr',
      hasLegacyTopicDoormatTemplate: false,
      mostRequestedLinks: [],
      selectedModel: 'selected-model',
    });

    expect(result.rows.map((row) => row.issueId)).not.toContain(
      'description-missing-needed-information',
    );
  });

  it('suppresses encoded French H2 content gaps when the concept is covered', async () => {
    openRouter.call.and.resolveTo({
      choices: [
        {
          message: {
            content: JSON.stringify({
              doormats: [
                {
                  doormat_index: 1,
                  link_text: 'Prestation pour enfants handicapés',
                  href: '/fr/services/impots/prestations/enfants-handicapes.html',
                  description: 'Paiements pour les familles admissibles',
                  detected_description_style: 'phrase',
                  ...defaultLinkClassifications(),
                  destination_content_assessment: {
                    important_element_ids: ['h2-1'],
                    covered_element_ids: [],
                    missing_important_element_ids: ['h2-1'],
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
          linkText: 'Prestation pour enfants handicapés',
          href: '/fr/services/impots/prestations/enfants-handicapes.html',
          description: 'Paiements pour les familles admissibles',
          destinationContextStatus: 'available',
          destinationSectionHeadings: ['Admissibilité'],
        }),
      ],
      pageLanguage: 'fr',
      hasLegacyTopicDoormatTemplate: false,
      mostRequestedLinks: [],
      selectedModel: 'selected-model',
    });

    expect(result.rows.map((row) => row.issueId)).not.toContain(
      'description-missing-needed-information',
    );
  });

  it('suppresses generic eligibility H2 content gaps when the doormat includes concrete eligibility cues', async () => {
    openRouter.call.and.resolveTo({
      choices: [
        {
          message: {
            content: JSON.stringify({
              doormats: [
                {
                  doormat_index: 1,
                  link_text: 'Prestation pour enfants handicapes',
                  href: '/fr/agence-revenu/services/prestations-enfants-familles/prestation-enfants-handicapes.html',
                  description:
                    'Versement mensuel aux familles qui s occupent d un enfant de moins de 18 ans qui a une deficience grave',
                  detected_description_style: 'phrase',
                  ...defaultLinkClassifications(),
                  destination_content_assessment: {
                    important_element_ids: ['h2-1'],
                    covered_element_ids: [],
                    missing_important_element_ids: ['h2-1'],
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
          linkText: 'Prestation pour enfants handicapes',
          href: '/fr/agence-revenu/services/prestations-enfants-familles/prestation-enfants-handicapes.html',
          description:
            'Versement mensuel aux familles qui s occupent d un enfant de moins de 18 ans qui a une deficience grave',
          destinationContextStatus: 'available',
          destinationSectionHeadings: ['Admissibilite'],
        }),
      ],
      pageLanguage: 'fr',
      hasLegacyTopicDoormatTemplate: false,
      mostRequestedLinks: [],
      selectedModel: 'selected-model',
    });

    expect(result.rows.map((row) => row.issueId)).not.toContain(
      'description-missing-needed-information',
    );
  });

  it('keeps decision-critical French application H2 content gaps when the concept is missing', async () => {
    openRouter.call.and.resolveTo({
      choices: [
        {
          message: {
            content: JSON.stringify({
              doormats: [
                {
                  doormat_index: 1,
                  link_text: 'Prestation pour enfants handicapes',
                  href: '/fr/services/impots/prestations/enfants-handicapes.html',
                  description: 'Paiements pour les familles admissibles',
                  detected_description_style: 'phrase',
                  ...defaultLinkClassifications(),
                  destination_content_assessment: {
                    important_element_ids: ['h2-1'],
                    covered_element_ids: [],
                    missing_important_element_ids: ['h2-1'],
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
          linkText: 'Prestation pour enfants handicapes',
          href: '/fr/services/impots/prestations/enfants-handicapes.html',
          description: 'Paiements pour les familles admissibles',
          destinationContextStatus: 'available',
          destinationSectionHeadings: ['Faire une demande'],
        }),
      ],
      pageLanguage: 'fr',
      hasLegacyTopicDoormatTemplate: false,
      mostRequestedLinks: [],
      selectedModel: 'selected-model',
    });

    expect(result.rows.map((row) => row.issueId)).toContain(
      'description-missing-needed-information',
    );
  });

  it('suppresses French intro content gaps when the doormat covers the broad program definition', async () => {
    openRouter.call.and.resolveTo({
      choices: [
        {
          message: {
            content: JSON.stringify({
              doormats: [
                {
                  doormat_index: 1,
                  link_text: 'Credit pour la TPS/TVH',
                  href: '/fr/services/impots/prestations/tps-tvh.html',
                  description:
                    'Versements pour les particuliers et les familles a revenu faible ou moyen',
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
          linkText: 'Credit pour la TPS/TVH',
          href: '/fr/services/impots/prestations/tps-tvh.html',
          description:
            'Versements pour les particuliers et les familles a revenu faible ou moyen',
          destinationContextStatus: 'available',
          destinationIntroParagraphs: [
            'Le credit pour la TPS/TVH etait un versement trimestriel non imposable verse aux particuliers et aux familles a revenu faible ou moyen.',
          ],
        }),
      ],
      pageLanguage: 'fr',
      hasLegacyTopicDoormatTemplate: false,
      mostRequestedLinks: [],
      selectedModel: 'selected-model',
    });

    expect(result.rows.map((row) => row.issueId)).not.toContain(
      'description-missing-needed-information',
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
