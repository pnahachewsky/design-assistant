import { TestBed } from '@angular/core/testing';

import {
  AlertRewritePlan,
  AlertRewriteResult,
  AlertRewriteService,
} from './alert-rewrite.service';
import { AlertRewriteGuardService } from './alert-rewrite-guard.service';

describe('AlertRewriteGuardService', () => {
  let service: AlertRewriteGuardService;
  let alertRewriteSpy: jasmine.SpyObj<AlertRewriteService>;

  const invalidRootLevelLinkHtml =
    '<div class="alert alert-info"><h3>Disability tax credit (DTC)</h3>Processing times for Form T2201 are currently delayed. <a href="/status">view your application status</a></div>';

  beforeEach(() => {
    alertRewriteSpy = jasmine.createSpyObj<AlertRewriteService>(
      'AlertRewriteService',
      ['parseAlertRewriteResponse', 'detectExampleCopy'],
    );

    TestBed.configureTestingModule({
      providers: [
        AlertRewriteGuardService,
        { provide: AlertRewriteService, useValue: alertRewriteSpy },
      ],
    });

    service = TestBed.inject(AlertRewriteGuardService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('flags a root-level link-only sentence without a lead-in', () => {
    expect(
      service.hasFullSentenceLinkWithoutAllowedLeadIn(invalidRootLevelLinkHtml),
    ).toBeTrue();
  });

  it('allows a standalone paragraph that uses learn about the before the link', () => {
    expect(
      service.hasFullSentenceLinkWithoutAllowedLeadIn(
        '<div class="alert alert-info"><h3>Canada Groceries and Essentials Benefit increase</h3><p>The benefit will increase by 25% starting July 2026.</p><p>Learn about the <a href="/benefit">Canada Groceries and Essentials Benefit</a>.</p></div>',
      ),
    ).toBeFalse();
  });

  it('rejects learn about the when it is embedded in the explanatory paragraph', () => {
    expect(
      service.hasFullSentenceLinkWithoutAllowedLeadIn(
        '<div class="alert alert-info"><h3>Canada Groceries and Essentials Benefit increase</h3><p>The benefit will increase by 25% starting July 2026. Learn about the <a href="/benefit">Canada Groceries and Essentials Benefit</a>.</p></div>',
      ),
    ).toBeTrue();
  });

  it('rejects local repair output when the link direction still lacks a lead-in', () => {
    alertRewriteSpy.parseAlertRewriteResponse.and.callFake(
      (text: string): AlertRewriteResult => {
        const payload = JSON.parse(text) as {
          rewrittenAlertHtml: string;
          rewrittenHeading?: string;
          rewrittenAlert: string;
          appliedDirectives?: string[];
          exampleIdsUsed?: string[];
        };

        return {
          rewrittenAlertHtml: payload.rewrittenAlertHtml,
          rewrittenHeading: payload.rewrittenHeading || '',
          rewrittenAlert: payload.rewrittenAlert,
          appliedDirectives: payload.appliedDirectives || [],
          exampleIdsUsed: payload.exampleIdsUsed || [],
        };
      },
    );
    alertRewriteSpy.detectExampleCopy.and.returnValue({ isCopy: false });

    const result = service.tryLocalAlertRewriteRepair({
      result: {
        rewrittenAlertHtml: invalidRootLevelLinkHtml,
        rewrittenHeading: 'Disability tax credit (DTC)',
        rewrittenAlert:
          'Processing times for Form T2201 are currently delayed. view your application status',
        appliedDirectives: [],
        exampleIdsUsed: [],
      },
      originalAlertHtml:
        '<div class="alert alert-info"><h3>Disability tax credit (DTC)</h3><p>Processing times for Form T2201 are currently delayed.</p><p><a href="/status">View your application status</a></p></div>',
      originalHeading: 'Disability tax credit (DTC)',
      originalAlertText: 'Processing times for Form T2201 are currently delayed.',
      plan: {
        alertType: 'info',
        domainTags: [],
        criteriaMatched: [],
        directives: [],
      } satisfies AlertRewritePlan,
      selectedExamples: [],
      allowLinkRemoval: false,
    });

    expect(result).toBeNull();
  });
});
