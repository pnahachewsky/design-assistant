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
    criteriaMatched: [],
    directives: [],
  } satisfies AlertRewritePlan;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlertRewriteService],
    });

    service = TestBed.inject(AlertRewriteService);
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

  it('adds a visible failure notice above the original alert for passthrough fallbacks', () => {
    const result = service.buildPassthroughResult({
      alertHtml: '<section class="alert alert-info"><p>Original alert text.</p></section>',
      originalHeading: '',
      originalAlertText: 'Original alert text.',
      failureReasons: ['invalidWrapperHtml', 'mustKeepLink'],
    });

    expect(result.rewrittenAlertHtml).toContain(
      'data-alert-rewrite-status="failed"',
    );
    expect(result.rewrittenAlertHtml).toContain(
      'The assistant could not rewrite this alert after multiple attempts.',
    );
    expect(result.rewrittenAlertHtml).toContain(
      '<section class="alert alert-info"><p>Original alert text.</p></section>',
    );
    expect(result.rewrittenAlertHtml).toContain(
      'data-alert-rewrite-failure-reasons="invalidWrapperHtml, mustKeepLink"',
    );
  });
});
