import { TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';

import {
  AlertRewritePlan,
  AlertRewriteResult,
  AlertRewriteService,
} from './alert-rewrite.service';
import { AlertRewriteGuardService } from './alert-rewrite-guard.service';

describe('AlertRewriteGuardService', () => {
  let service: AlertRewriteGuardService;
  let alertRewriteSpy: jasmine.SpyObj<AlertRewriteService>;
  const infoPlan = {
    alertType: 'info',
    domainTags: [],
    purposeTags: [],
    criteriaMatched: [],
    directives: [],
  } satisfies AlertRewritePlan;

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
        {
          provide: TranslateService,
          useValue: {
            instant: () => [
              'Based on your selections above',
              'Based on your selection above',
            ],
          },
        },
      ],
    });

    service = TestBed.inject(AlertRewriteGuardService);
  });

  function mockParsedAlertRewriteResult(): void {
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
  }

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('flags a root-level link-only sentence without a lead-in', () => {
    expect(
      service.hasFullSentenceLinkWithoutAllowedLeadIn(invalidRootLevelLinkHtml),
    ).toBeTrue();
  });

  it('detects when an alert html fragment is missing a semantic heading', () => {
    expect(
      service.hasSemanticHeading(
        '<div class="alert alert-info"><p>Body only</p></div>',
      ),
    ).toBeFalse();
  });

  it('inserts a semantic heading when the alert html is missing one', () => {
    expect(
      service.ensureSemanticHeading(
        '<div class="alert alert-info"><p>Body only</p></div>',
        '[GenAI failure: include a heading]',
      ),
    ).toContain('<h3>[GenAI failure: include a heading]</h3>');
  });

  it('allows a standalone paragraph that uses learn about the before the link', () => {
    expect(
      service.hasFullSentenceLinkWithoutAllowedLeadIn(
        '<div class="alert alert-info"><h3>Canada Groceries and Essentials Benefit increase</h3><p>The benefit will increase by 25% starting July 2026.</p><p>Learn about the <a href="/benefit">Canada Groceries and Essentials Benefit</a></p></div>',
      ),
    ).toBeFalse();
  });

  it('allows a standalone action-verb link without a lead-in', () => {
    expect(
      service.hasFullSentenceLinkWithoutAllowedLeadIn(
        '<div class="alert alert-warning"><h3>DTC processing delay</h3><p>The CRA is experiencing delays in processing Form T2201.</p><p><a href="/times">View CRA processing times</a></p></div>',
      ),
    ).toBeFalse();
  });

  it('allows a standalone how-to action link without a lead-in', () => {
    expect(
      service.hasFullSentenceLinkWithoutAllowedLeadIn(
        '<div class="alert alert-info"><h3>Get your access code in your CRA account</h3><p>Business owners can get their GST/HST access code in My Business Account.</p><p><a href="/access-code">How to get an access code</a></p></div>',
      ),
    ).toBeFalse();
  });

  it('allows standalone learn and find out action links without a lead-in', () => {
    expect(
      service.hasFullSentenceLinkWithoutAllowedLeadIn(
        '<div class="alert alert-info"><h3>Access code</h3><p>Business owners can get their GST/HST access code in My Business Account.</p><p><a href="/access-code">Find out how to get an access code</a></p></div>',
      ),
    ).toBeFalse();
    expect(
      service.hasFullSentenceLinkWithoutAllowedLeadIn(
        '<div class="alert alert-info"><h3>Benefit update</h3><p>The benefit will change in July 2026.</p><p><a href="/benefit">Learn about the Canada Groceries and Essentials Benefit</a></p></div>',
      ),
    ).toBeFalse();
  });

  it('removes redundant lead-ins before standalone action links', () => {
    const repaired = service.removeRedundantLeadInsBeforeActionLinks(
      '<div class="alert alert-warning"><h3>DTC processing delay</h3><p>The CRA is experiencing delays in processing Form T2201.</p><p>Refer to: <a href="/times">Check CRA processing times</a></p></div>',
    );

    expect(repaired).toContain('<p><a href="/times">Check CRA processing times</a></p>');
    expect(repaired).not.toContain('Refer to:');
  });

  it('removes terminal punctuation from standalone link paragraphs', () => {
    const repaired = service.removeStandaloneLinkTerminalPunctuation(
      '<div class="alert alert-info"><h3>Benefit update</h3><p>The benefit will change in July 2026.</p><p>Learn about the <a href="/benefit">Canada Groceries and Essentials Benefit</a>.</p><p>Refer to: <a href="/details">benefit details</a>!</p></div>',
    );

    expect(repaired).toContain(
      '<p>Learn about the <a href="/benefit">Canada Groceries and Essentials Benefit</a></p>',
    );
    expect(repaired).toContain(
      '<p>Refer to: <a href="/details">benefit details</a></p>',
    );
  });

  it('keeps punctuation when a link is part of normal prose', () => {
    const repaired = service.removeStandaloneLinkTerminalPunctuation(
      '<div class="alert alert-info"><h3>Benefit update</h3><p>You can apply for the <a href="/benefit">Canada Groceries and Essentials Benefit</a>.</p></div>',
    );

    expect(repaired).toContain(
      '<p>You can apply for the <a href="/benefit">Canada Groceries and Essentials Benefit</a>.</p>',
    );
  });

  it('rejects a standalone vague link without a lead-in', () => {
    expect(
      service.hasFullSentenceLinkWithoutAllowedLeadIn(
        '<div class="alert alert-info"><h3>Benefit update</h3><p>The benefit will change in July 2026.</p><p><a href="/benefit">More information</a></p></div>',
      ),
    ).toBeTrue();
  });

  it('rejects learn about the when it is embedded in the explanatory paragraph', () => {
    expect(
      service.hasFullSentenceLinkWithoutAllowedLeadIn(
        '<div class="alert alert-info"><h3>Canada Groceries and Essentials Benefit increase</h3><p>The benefit will increase by 25% starting July 2026. Learn about the <a href="/benefit">Canada Groceries and Essentials Benefit</a>.</p></div>',
      ),
    ).toBeTrue();
  });

  it('rejects local repair output when the link direction still lacks a lead-in', () => {
    mockParsedAlertRewriteResult();

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
      plan: infoPlan,
      selectedExamples: [],
      allowLinkRemoval: false,
    });

    expect(result).toBeNull();
  });

  it('adds the candidate heading during local repair when the html is missing one', () => {
    mockParsedAlertRewriteResult();

    const result = service.tryLocalAlertRewriteRepair({
      result: {
        rewrittenAlertHtml:
          '<div class="alert alert-info"><p>Updated body text.</p></div>',
        rewrittenHeading: '[GenAI failure: include a heading]',
        rewrittenAlert: 'Updated body text.',
        appliedDirectives: [],
        exampleIdsUsed: [],
      },
      originalAlertHtml:
        '<div class="alert alert-info"><p>Original body text.</p></div>',
      originalHeading: '',
      originalAlertText: 'Original body text.',
      plan: infoPlan,
      selectedExamples: [],
      allowLinkRemoval: false,
    });

    expect(result?.rewrittenAlertHtml).toContain(
      '<h3>[GenAI failure: include a heading]</h3>',
    );
    expect(result?.rewrittenAlertHtml).toContain('<p>Updated body text.</p>');
  });

  it('restores a required original link as a standalone final paragraph during local repair', () => {
    mockParsedAlertRewriteResult();

    const result = service.tryLocalAlertRewriteRepair({
      result: {
        rewrittenAlertHtml:
          '<div class="alert alert-warning"><h3>First-time home buyers rebate</h3><p>The rebate has received Royal Assent.</p></div>',
        rewrittenHeading: 'First-time home buyers rebate',
        rewrittenAlert: 'The rebate has received Royal Assent.',
        appliedDirectives: [],
        exampleIdsUsed: [],
      },
      originalAlertHtml:
        '<div class="alert alert-warning"><p>The rebate has received Royal Assent. <a href="/en/revenue-agency/services/forms-publications/publications/rc7190/fthb-gst-hst-rebate.html">First-time home buyers’ (FTHB) GST/HST rebate</a></p></div>',
      originalHeading: '',
      originalAlertText: 'The rebate has received Royal Assent.',
      plan: infoPlan,
      selectedExamples: [],
      allowLinkRemoval: false,
    });

    expect(result?.rewrittenAlertHtml).toContain(
      '<p>The rebate has received Royal Assent.</p><p>Refer to: <a href="/en/revenue-agency/services/forms-publications/publications/rc7190/fthb-gst-hst-rebate.html">First-time home buyers’ (FTHB) GST/HST rebate</a></p>',
    );
    expect(
      service.hasFullSentenceLinkWithoutAllowedLeadIn(
        result?.rewrittenAlertHtml || '',
      ),
    ).toBeFalse();
  });

  it('preserves multi-node alert replacements so fallback notices can appear above the alert', () => {
    const result = service.applyAlertHtmlRewrites(
      '<body><main><section class="alert alert-info"><p>Original alert text.</p></section></main></body>',
      [
        {
          alert_index: 1,
          rewritten_alert_html:
            '<div class="alert alert-danger" data-alert-rewrite-status="failed"><p>GenAI alert rewrite failed.</p></div><section class="alert alert-info"><p>Original alert text.</p></section>',
        },
      ],
    );

    expect(result).toContain('data-alert-rewrite-status="failed"');
    expect(result).toContain('<section class="alert alert-info"><p>Original alert text.</p></section>');
  });
});
