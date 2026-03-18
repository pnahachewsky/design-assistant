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
});
