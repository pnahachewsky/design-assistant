import { TestBed } from '@angular/core/testing';

import {
  AlertRewriteExample,
  AlertRewritePlan,
  AlertRewriteService,
} from './alert-rewrite.service';
import { AlertRewriteMode } from '../data/data.model';

describe('AlertRewriteService', () => {
  let service: AlertRewriteService;

  const plan = {
    alertType: 'info',
    domainTags: [],
    purposeTags: [],
    criteriaMatched: [],
    directives: [],
  } satisfies AlertRewritePlan;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlertRewriteService],
    });

    service = TestBed.inject(AlertRewriteService);
  });

  it('includes reusable Canada.ca style rules in alert rewrite messages', async () => {
    const fetchSpy = spyOn(window, 'fetch').and.callFake(
      async (input: RequestInfo | URL): Promise<Response> => {
        const url = String(input);
        if (url.includes('skills/canada-ca-style/references/writing-rules.json')) {
          return new Response(
            JSON.stringify({
              version: 'test',
              rules: [
                {
                  id: 'C1_avoid_please',
                  severity: 'must',
                  condition: 'always',
                  text: 'Do not use "please" as a courtesy filler.',
                },
              ],
              examples: [
                {
                  ruleId: 'C1_avoid_please',
                  avoid: 'Please upload your documents.',
                  prefer: 'Upload your documents.',
                },
              ],
            }),
            { status: 200 },
          );
        }
        if (url.includes('ai-prompts/alerts-rewrite-rules.json')) {
          return new Response(
            JSON.stringify({
              version: 'test',
              alertPlanning: {
                systemPromptLines: ['Plan alert rewrites.'],
              },
              alertRewrite: {
                styleRulesBase: ['Keep the alert scoped.'],
                styleRulesWithExamples: [],
                systemPromptWithExamplesLines: ['Rewrite alert with examples.'],
                systemPromptWithoutExamplesLines: ['Rewrite alert.'],
                retryInstructions: {
                  invalidWrapperHtml: 'Return one valid alert wrapper.',
                  placeholderLinks: 'Do not use placeholder links.',
                  noLinksAllowed: 'Do not add links.',
                  mustKeepLink: 'Keep required links.',
                  mustHaveHeading: 'Include a heading.',
                  avoidExampleCopy: 'Do not copy examples.',
                  fullSentenceLinksNeedLeadIn: 'Use a clear link lead-in.',
                },
              },
            }),
            { status: 200 },
          );
        }
        return new Response('Not found', { status: 404 });
      },
    );

    const messages = await service.buildAlertRewriteMessages({
      mode: AlertRewriteMode.GoodResultsOnly,
      originalAlertText: 'Please upload your documents.',
      originalAlertHtml: '<section class="alert alert-info"><p>Please upload your documents.</p></section>',
      plan,
      issues: [],
      examples: [],
      includeLinkWritingRules: false,
    });

    const userPayload = JSON.parse(messages[1]?.content || '{}') as {
      styleRules: string[];
    };

    expect(fetchSpy).toHaveBeenCalled();
    expect(userPayload.styleRules).toContain(
      '[Canada.ca style C1_avoid_please must] Do not use "please" as a courtesy filler.',
    );
    expect(userPayload.styleRules).toContain(
      '[Canada.ca style example C1_avoid_please] Avoid: "Please upload your documents." Prefer: "Upload your documents."',
    );
  });

  it('includes a deterministic link manifest in alert rewrite messages', async () => {
    spyOn(window, 'fetch').and.callFake(
      async (input: RequestInfo | URL): Promise<Response> => {
        const url = String(input);
        if (url.includes('ai-prompts/link-writing-rules.json')) {
          return new Response(
            JSON.stringify({
              version: 'test',
              rules: [
                {
                  id: 'L1',
                  condition: 'always',
                  text: 'Use link manifest links.',
                },
              ],
            }),
            { status: 200 },
          );
        }
        if (url.includes('skills/canada-ca-style/references/writing-rules.json')) {
          return new Response(
            JSON.stringify({
              version: 'test',
              rules: [],
              examples: [],
            }),
            { status: 200 },
          );
        }
        if (url.includes('ai-prompts/alerts-rewrite-rules.json')) {
          return new Response(
            JSON.stringify({
              version: 'test',
              alertPlanning: {
                systemPromptLines: ['Plan alert rewrites.'],
              },
              alertRewrite: {
                styleRulesBase: ['Keep the alert scoped.'],
                styleRulesWithExamples: [],
                systemPromptWithExamplesLines: ['Rewrite alert with examples.'],
                systemPromptWithoutExamplesLines: ['Rewrite alert.'],
                retryInstructions: {
                  invalidWrapperHtml: 'Return one valid alert wrapper.',
                  placeholderLinks: 'Do not use placeholder links.',
                  noLinksAllowed: 'Do not add links.',
                  mustKeepLink: 'Keep required links.',
                  mustHaveHeading: 'Include a heading.',
                  avoidExampleCopy: 'Do not copy examples.',
                  fullSentenceLinksNeedLeadIn: 'Use a clear link lead-in.',
                },
              },
            }),
            { status: 200 },
          );
        }
        return new Response('Not found', { status: 404 });
      },
    );

    const messages = await service.buildAlertRewriteMessages({
      mode: AlertRewriteMode.GoodResultsOnly,
      originalAlertText:
        'The rebate has received Royal Assent. First-time home buyers rebate',
      originalAlertHtml:
        '<section class="alert alert-info"><p>The rebate has received Royal Assent. <a href="/rebate.html">First-time home buyers rebate</a></p></section>',
      plan,
      issues: [],
      examples: [],
    });

    const userPayload = JSON.parse(messages[1]?.content || '{}') as {
      styleRules: string[];
      linkManifest: {
        count: number;
        hasLinks: boolean;
        allowRemoval: boolean;
        mustPreserveAtLeastOne: boolean;
        items: Array<{ href: string; text: string; surroundingText?: string }>;
      };
    };

    expect(userPayload.linkManifest.count).toBe(1);
    expect(userPayload.linkManifest.hasLinks).toBeTrue();
    expect(userPayload.linkManifest.allowRemoval).toBeFalse();
    expect(userPayload.linkManifest.mustPreserveAtLeastOne).toBeTrue();
    expect(userPayload.linkManifest.items[0]).toEqual(
      jasmine.objectContaining({
        href: '/rebate.html',
        text: 'First-time home buyers rebate',
      }),
    );
    expect(userPayload.linkManifest.items[0].surroundingText).toContain(
      'The rebate has received Royal Assent.',
    );
    expect(
      userPayload.styleRules.some((rule) =>
        rule.includes('Use linkManifest as the source of truth'),
      ),
    ).toBeTrue();

    const misclassifiedMessages = await service.buildAlertRewriteMessages({
      mode: AlertRewriteMode.GoodResultsOnly,
      originalAlertText: 'The rebate has received Royal Assent.',
      originalAlertHtml:
        '<section class="alert alert-info"><p>The rebate has received Royal Assent. <a href="/rebate.html">First-time home buyers rebate</a></p></section>',
      plan,
      issues: [{ category: 'Too many links' }],
      examples: [],
    });
    const misclassifiedPayload = JSON.parse(
      misclassifiedMessages[1]?.content || '{}',
    ) as { linkManifest: { allowRemoval: boolean; mustPreserveAtLeastOne: boolean } };
    expect(misclassifiedPayload.linkManifest.allowRemoval).toBeFalse();
    expect(misclassifiedPayload.linkManifest.mustPreserveAtLeastOne).toBeTrue();
  });

  it('does not rank examples by alert type', () => {
    const examples: AlertRewriteExample[] = [
      {
        id: 'same-type-generic',
        alertType: 'info',
        tags: [],
        criteria: [],
        egText: 'Generic info rewrite',
      },
      {
        id: 'different-type-matching-criteria',
        alertType: 'warning',
        tags: [],
        criteria: ['C1_missing_next_step'],
        egText: 'Relevant warning rewrite',
      },
    ];

    const selected = service.selectExamples(
      {
        alertType: 'info',
        domainTags: [],
        purposeTags: [],
        criteriaMatched: ['C1_missing_next_step'],
        directives: [],
      },
      examples,
      1,
    );

    expect(selected.map((example) => example.id)).toEqual([
      'different-type-matching-criteria',
    ]);
  });

  it('ranks purpose tag matches ahead of generic topic matches', () => {
    const examples: AlertRewriteExample[] = [
      {
        id: 'topic-only',
        alertType: 'info',
        tags: ['payment', 'support', 'deadline'],
        purposeTags: [],
        criteria: [],
        egText: 'Payment support topic rewrite',
      },
      {
        id: 'purpose-match',
        alertType: 'warning',
        tags: [],
        purposeTags: ['service-delay'],
        criteria: [],
        egText: 'Processing delay rewrite',
      },
    ];

    const selected = service.selectExamples(
      {
        alertType: 'info',
        domainTags: ['payment', 'support', 'deadline'],
        purposeTags: ['service-delay'],
        criteriaMatched: [],
        directives: [],
      },
      examples,
      1,
    );

    expect(selected.map((example) => example.id)).toEqual(['purpose-match']);
  });

  it('uses alert text relevance as a bounded boost for direct example matches', () => {
    const examples: AlertRewriteExample[] = [
      {
        id: 'generic-action',
        alertType: 'info',
        tags: [],
        purposeTags: ['action-required'],
        criteria: ['C1_missing_next_step'],
        egText: 'Business owners can get their access code online.',
      },
      {
        id: 'dtc-delay',
        alertType: 'warning',
        tags: [],
        purposeTags: ['action-required'],
        criteria: ['C1_missing_next_step'],
        egText:
          'The CRA is experiencing delays in processing Form T2201 Disability Tax Credit Certificate. Check CRA processing times',
      },
    ];

    const selected = service.selectExamples(
      {
        alertType: 'info',
        domainTags: [],
        purposeTags: ['action-required'],
        criteriaMatched: ['C1_missing_next_step'],
        directives: [],
      },
      examples,
      1,
      {
        originalAlertText:
          'The Canada Revenue Agency is experiencing delays in processing Form T2201, Disability Tax Credit Certificate. Check CRA processing times.',
      },
    );

    expect(selected.map((example) => example.id)).toEqual(['dtc-delay']);
  });

  it('does not flag exact example wording when the original alert is already a close match', () => {
    const example: AlertRewriteExample = {
      id: 'dtc-delay',
      alertType: 'warning',
      tags: [],
      criteria: [],
      egText:
        'The CRA is experiencing delays in processing Form T2201 Disability Tax Credit Certificate. Check CRA processing times',
    };

    const result = service.detectExampleCopy({
      result: {
        rewrittenAlertHtml:
          '<section class="alert alert-warning"><h2 class="h3">DTC processing delay</h2><p>The CRA is experiencing delays in processing Form T2201 Disability Tax Credit Certificate. Check CRA processing times</p></section>',
        rewrittenHeading: 'DTC processing delay',
        rewrittenAlert:
          'The CRA is experiencing delays in processing Form T2201 Disability Tax Credit Certificate. Check CRA processing times',
        appliedDirectives: [],
        exampleIdsUsed: [],
      },
      selectedExamples: [example],
      originalHeading: '',
      originalAlertText:
        'The Canada Revenue Agency is experiencing delays in processing Form T2201, Disability Tax Credit Certificate. Check CRA processing times.',
    });

    expect(result.isCopy).toBeFalse();
  });

  it('flags exact example wording when the original alert is not a close match', () => {
    const example: AlertRewriteExample = {
      id: 'dtc-delay',
      alertType: 'warning',
      tags: [],
      criteria: [],
      egText:
        'The CRA is experiencing delays in processing Form T2201 Disability Tax Credit Certificate. Check CRA processing times',
    };

    const result = service.detectExampleCopy({
      result: {
        rewrittenAlertHtml:
          '<section class="alert alert-warning"><h2 class="h3">DTC processing delay</h2><p>The CRA is experiencing delays in processing Form T2201 Disability Tax Credit Certificate. Check CRA processing times</p></section>',
        rewrittenHeading: 'DTC processing delay',
        rewrittenAlert:
          'The CRA is experiencing delays in processing Form T2201 Disability Tax Credit Certificate. Check CRA processing times',
        appliedDirectives: [],
        exampleIdsUsed: [],
      },
      selectedExamples: [example],
      originalHeading: '',
      originalAlertText: 'A different alert about a benefit payment.',
    });

    expect(result.isCopy).toBeTrue();
    expect(result.reason).toBe('exact-example-match');
  });

  it('forces exampleIdsUsed to an empty array when no examples were selected', () => {
    const result = service.parseAlertRewriteResponse(
      JSON.stringify({
        rewrittenAlertHtml:
          '<div class="alert alert-info"><p>Updated alert text.</p></div>',
        rewrittenHeading: 'Updated heading',
        rewrittenAlert: 'Updated alert text.',
        appliedDirectives: [],
        exampleIdsUsed: ['ex-001'],
      }),
      plan,
      [],
    );

    expect(result?.exampleIdsUsed).toEqual([]);
  });

  it('keeps only selected example ids and removes duplicates', () => {
    const selectedExamples: AlertRewriteExample[] = [
      {
        id: 'ex-002',
        alertType: 'info',
        tags: [],
        criteria: [],
        egText: 'After two',
      },
      {
        id: 'ex-001',
        alertType: 'info',
        tags: [],
        criteria: [],
        egText: 'After one',
      },
    ];

    const result = service.parseAlertRewriteResponse(
      JSON.stringify({
        rewrittenAlertHtml:
          '<div class="alert alert-info"><p>Updated alert text.</p></div>',
        rewrittenHeading: 'Updated heading',
        rewrittenAlert: 'Updated alert text.',
        appliedDirectives: [],
        exampleIdsUsed: ['ex-002', 'hallucinated-id', 'ex-002', 'ex-001'],
      }),
      plan,
      selectedExamples,
    );

    expect(result?.exampleIdsUsed).toEqual(['ex-002', 'ex-001']);
  });

  it('extracts a repair candidate when the model returns body html instead of a full alert wrapper', () => {
    const result = service.parseAlertRewriteRepairCandidate(
      JSON.stringify({
        rewrittenAlertHtml:
          '<h3>Benefit increase</h3><p>The benefit will increase by 25% starting in July 2026.</p><p>Learn about the <a href="/benefit">Canada Groceries and Essentials Benefit</a>.</p>',
        rewrittenHeading: 'Benefit increase',
        rewrittenAlert:
          'The benefit will increase by 25% starting in July 2026. Learn about the Canada Groceries and Essentials Benefit.',
        appliedDirectives: [],
        exampleIdsUsed: ['ex-001'],
      }),
      [
        {
          id: 'ex-001',
          alertType: 'info',
          tags: [],
          criteria: [],
          egText: 'After one',
        },
      ],
    );

    expect(result?.rewrittenAlertHtml).toContain('<p>The benefit will increase');
    expect(result?.rewrittenHeading).toBe('Benefit increase');
    expect(result?.rewrittenAlert).toContain('July 2026');
    expect(result?.exampleIdsUsed).toEqual(['ex-001']);
  });

  it('accepts nested snake_case rewrite fields from model output', () => {
    const result = service.parseAlertRewriteResponse(
      JSON.stringify({
        output: {
          rewritten_alert_html:
            '<section class="alert alert-info"><h3>File online</h3><p>You can file your return in My Business Account.</p></section>',
          rewritten_heading: 'File online',
          rewritten_alert: 'You can file your return in My Business Account.',
          applied_directives: ['add_heading'],
          example_ids_used: ['ex-001'],
        },
      }),
      plan,
      [
        {
          id: 'ex-001',
          alertType: 'info',
          tags: [],
          criteria: [],
          egText: 'After one',
        },
      ],
    );

    expect(result?.rewrittenAlertHtml).toContain(
      '<section class="alert alert-info">',
    );
    expect(result?.rewrittenHeading).toBe('File online');
    expect(result?.rewrittenAlert).toBe(
      'You can file your return in My Business Account.',
    );
    expect(result?.appliedDirectives).toEqual(['add_heading']);
    expect(result?.exampleIdsUsed).toEqual(['ex-001']);
  });

  it('extracts a repair candidate when the model returns raw alert html', () => {
    const result = service.parseAlertRewriteRepairCandidate(
      [
        '```html',
        '<section class="alert alert-info"><h3>File online</h3><p>You can file your return in My Business Account.</p></section>',
        '```',
      ].join('\n'),
      [],
    );

    expect(result?.rewrittenAlertHtml).toContain(
      '<section class="alert alert-info">',
    );
    expect(result?.rewrittenHeading).toBe('File online');
    expect(result?.rewrittenAlert).toBe(
      'You can file your return in My Business Account.',
    );
  });

  it('preserves the original alert for passthrough fallbacks', () => {
    const result = service.buildPassthroughResult({
      alertHtml: '<section class="alert alert-info"><p>Original alert text.</p></section>',
      originalHeading: '',
      originalAlertText: 'Original alert text.',
    });

    expect(result.rewrittenAlertHtml).toBe(
      '<section class="alert alert-info"><p>Original alert text.</p></section>',
    );
  });
});
