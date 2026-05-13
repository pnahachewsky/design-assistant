import { TestBed } from '@angular/core/testing';

import {
  AlertRewriteExample,
  AlertRewritePlan,
  AlertRewriteService,
} from './alert-rewrite.service';

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

  it('does not rank examples by alert type', () => {
    const examples: AlertRewriteExample[] = [
      {
        id: 'same-type-generic',
        alertType: 'info',
        tags: [],
        criteria: [],
        before: 'Generic info alert',
        after: 'Generic info rewrite',
      },
      {
        id: 'different-type-matching-criteria',
        alertType: 'warning',
        tags: [],
        criteria: ['C1_missing_next_step'],
        before: 'Relevant warning alert',
        after: 'Relevant warning rewrite',
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
        before: 'Payment support topic alert',
        after: 'Payment support topic rewrite',
      },
      {
        id: 'purpose-match',
        alertType: 'warning',
        tags: [],
        purposeTags: ['service-delay'],
        criteria: [],
        before: 'Processing delay alert',
        after: 'Processing delay rewrite',
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
        before: 'Business owners can get their GST/HST access code in My Business Account.',
        after: 'Business owners can get their access code online.',
      },
      {
        id: 'dtc-delay',
        alertType: 'warning',
        tags: [],
        purposeTags: ['action-required'],
        criteria: ['C1_missing_next_step'],
        before:
          'The Canada Revenue Agency is experiencing delays in processing Form T2201, Disability Tax Credit Certificate. The most up-to-date processing times can be found on Check CRA processing times.',
        after:
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
      before:
        'The Canada Revenue Agency is experiencing delays in processing Form T2201, Disability Tax Credit Certificate. The most up-to-date processing times can be found on Check CRA processing times.',
      after:
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
      before: 'Some unrelated alert text.',
      after:
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
        before: 'Before two',
        after: 'After two',
      },
      {
        id: 'ex-001',
        alertType: 'info',
        tags: [],
        criteria: [],
        before: 'Before one',
        after: 'After one',
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
          before: 'Before one',
          after: 'After one',
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
          before: 'Before one',
          after: 'After one',
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
