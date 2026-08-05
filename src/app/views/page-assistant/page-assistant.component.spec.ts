import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TranslateModule } from '@ngx-translate/core';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { ConfirmationService, MessageService } from 'primeng/api';

import { PageAssistantCompareComponent } from './page-assistant.component';
import { TopicDoormatAnalysisStateService } from './services/topic-doormats/topic-doormat-analysis-state.service';
import { UploadStateService } from './services/upload-state.service';

describe('PageAssistantCompareComponent', () => {
  let component: PageAssistantCompareComponent;
  let fixture: ComponentFixture<PageAssistantCompareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAssistantCompareComponent, TranslateModule.forRoot()],
      providers: [
        ConfirmationService,
        MessageService,
        provideHttpClient(),
        provideHttpClientTesting(),
        provideNoopAnimations(),
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAssistantCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('recognizes valid alert issue JSON shapes before accepting a model response', () => {
    const validWrapped = '{"issues":[]}';
    const validArray = '[]';
    const invalidRewriteJson =
      '{"rewrittenAlertHtml":"<div class=\\"alert alert-info\\"><p>Updated.</p></div>"}';

    expect(
      (component as any).isValidAlertsIssuesResponse(validWrapped),
    ).toBeTrue();
    expect(
      (component as any).isValidAlertsIssuesResponse(validArray),
    ).toBeTrue();
    expect(
      (component as any).isValidAlertsIssuesResponse(invalidRewriteJson),
    ).toBeFalse();
  });

  it('recognizes structured JSON so generic HTML rendering can reject it', () => {
    const jsonWithLeadIn =
      'First-time home buyers\\n\\n{ "rewrittenAlertHtml": "<div class=\\"alert alert-info\\"><p>Updated.</p></div>" }';

    expect(
      (component as any).looksLikeStructuredAiJsonResponse(jsonWithLeadIn),
    ).toBeTrue();
    expect(
      (component as any).looksLikeStructuredAiJsonResponse(
        '<main><h1>First-time home buyers</h1></main>',
      ),
      ).toBeFalse();
  });

  it('sends destination main HTML only for doormats with selected issues', () => {
    const analysisState = (component as any).topicDoormatAnalysisState;
    analysisState.setAnalysis(
      '<main>Topic page</main>',
      [
        {
          include: true,
          rowType: 'doormat',
          severity: 'Medium',
          doormat: 'Before you give',
          doormatLabel: 'Before you give',
          issueId: 'content-gap',
          issue: 'Description is missing destination information',
          evidence: 'Destination explains receipts.',
          recommendation: 'Mention receipts.',
          doormatIndex: 1,
          sectionIndex: 1,
          sectionTitle: 'Giving',
          sectionItemIndex: 1,
        },
        {
          include: false,
          rowType: 'doormat',
          severity: 'Low',
          doormat: 'Tax credits',
          doormatLabel: 'Tax credits',
          issueId: 'description-too-long',
          issue: 'Description is too long',
          evidence: '130 characters.',
          recommendation: 'Shorten it.',
          doormatIndex: 2,
          sectionIndex: 1,
          sectionTitle: 'Giving',
          sectionItemIndex: 2,
        },
      ],
      [
        {
          index: 1,
          linkText: 'Before you give',
          href: '/before-you-give.html',
          description: 'Donor information',
          destinationUrl: 'https://www.canada.ca/before-you-give.html',
          destinationPageTitle: 'What to know before you give - Canada.ca',
          destinationPageHeading: 'What to know before you give',
          destinationIntroParagraphs: ['Qualified donees can issue receipts.'],
          destinationSectionHeadings: ['Before you donate'],
          destinationMainHtml: '<h1>What to know before you give</h1>',
          destinationMainHtmlTruncated: false,
          destinationContextStatus: 'available',
          headingLevel: 3,
          itemLinkCount: 1,
          headingLinkCount: 1,
          descriptionLinkCount: 0,
          hasSplitHeadingLink: false,
          hasDescriptionLink: false,
          hasDescriptionIconOrImage: false,
          hasDescriptionSpecialFormatting: false,
          rawItemText: '',
          linkTextCharacterCount: 15,
          descriptionCharacterCount: 17,
          sectionIndex: 1,
          sectionTitle: 'Giving',
          sectionItemIndex: 1,
          sectionDoormatCount: 2,
        },
        {
          index: 2,
          linkText: 'Tax credits',
          href: '/tax-credits.html',
          description: 'Tax credit information',
          destinationMainHtml: '<h1>Tax credits</h1>',
          headingLevel: 3,
          itemLinkCount: 1,
          headingLinkCount: 1,
          descriptionLinkCount: 0,
          hasSplitHeadingLink: false,
          hasDescriptionLink: false,
          hasDescriptionIconOrImage: false,
          hasDescriptionSpecialFormatting: false,
          rawItemText: '',
          linkTextCharacterCount: 11,
          descriptionCharacterCount: 22,
          sectionIndex: 1,
          sectionTitle: 'Giving',
          sectionItemIndex: 2,
          sectionDoormatCount: 2,
        },
      ],
    );

    const payload = JSON.parse(
      (component as any).buildDoormatRewriteUserContent(
        '<main>Topic page</main>',
      ),
    );

    expect(payload.doormats_with_selected_issues.length).toBe(1);
    expect(payload.doormats_with_selected_issues[0].index).toBe(1);
    expect(
      payload.doormats_with_selected_issues[0].destination.main_html,
    ).toContain('What to know before you give');
    expect(JSON.stringify(payload.doormats_with_selected_issues)).not.toContain(
      'Tax credits',
    );
    expect(payload.topic_doormat_issue_analysis.instruction).toContain(
      'Preserve doormats that do not have selected issues',
    );
  });

  it('clears shared doormat analysis when accepting all changes', () => {
    const uploadState = TestBed.inject(UploadStateService);
    const analysisState = TestBed.inject(TopicDoormatAnalysisStateService);
    uploadState.setUploadData({
      originalHtml: '<main><h1>Original</h1></main>',
      originalUrl: 'https://www.canada.ca/en/original.html',
      modifiedHtml: '<main><h1>Modified</h1></main>',
      modifiedUrl: 'https://www.canada.ca/en/modified.html',
    } as any);
    analysisState.setAnalysis(
      '<main><h1>Original</h1></main>',
      [
        {
          include: true,
          rowType: 'section',
          severity: 'Low',
          issueId: 'link-name-too-long',
          issue: 'Link is too long in at least one language',
          evidence: 'Doormat 1: 38/35',
          recommendation: 'Shorten the link.',
          sectionIndex: 1,
          sectionTitle: 'Make a donation',
        },
      ] as any,
      [],
    );

    component.toolbarAcceptAll();

    expect(analysisState.hasAnalysis()).toBeFalse();
  });

  it('applies a doormat fragment rewrite without removing the rest of the page', () => {
    const originalHtml = `
      <main>
        <h1>Benefits</h1>
        <p>Intro text remains.</p>
        <div class="gc-srvinfo">
          <div class="col-lg-4 col-md-6"><h3 class="h5"><a href="/old.html">Old doormat</a></h3><p>Old text</p></div>
          <div class="col-lg-4 col-md-6"><h3 class="h5"><a href="/keep.html">Kept doormat</a></h3><p>Kept text</p></div>
        </div>
        <section><h2>After doormats</h2><p>More page content.</p></section>
      </main>
    `;
    const rewriteHtml = `
      <div class="gc-srvinfo">
        <div><h3><a href="/old.html">Updated doormat</a></h3><p>Updated text</p></div>
      </div>
    `;

    const result = (component as any).applyDoormatRewriteToPageHtml(
      originalHtml,
      rewriteHtml,
    );

    expect(result).toContain('<h1>Benefits</h1>');
    expect(result).toContain('Intro text remains.');
    expect(result).toContain('<div class="col-lg-4 col-md-6"><h3 class="h5"><a href="/old.html">Updated doormat</a></h3><p>Updated text</p></div>');
    expect(result).toContain('Updated doormat');
    expect(result).toContain('Updated text');
    expect(result).toContain('Kept doormat');
    expect(result).toContain('Kept text');
    expect(result).toContain('After doormats');
    expect(result).toContain('More page content.');
    expect(result).not.toContain('Old doormat');
  });

  it('applies a doormat item fragment rewrite without a gc-srvinfo wrapper', () => {
    const originalHtml = `
      <main>
        <h1>Benefits</h1>
        <div class="gc-srvinfo">
          <div class="col-lg-4 col-md-6"><h3 class="h5"><a href="/old.html">Old doormat</a></h3><p>Old text</p></div>
          <div class="col-lg-4 col-md-6"><h3 class="h5"><a href="/keep.html">Kept doormat</a></h3><p>Kept text</p></div>
        </div>
      </main>
    `;
    const rewriteHtml = `
      <div class="col-lg-4 col-md-6">
        <section>
          <h3><a href="/old.html">Updated doormat</a></h3>
          <p>Updated text</p>
        </section>
      </div>
    `;

    const result = (component as any).applyDoormatRewriteToPageHtml(
      originalHtml,
      rewriteHtml,
    );

    expect(result).toContain('<h1>Benefits</h1>');
    expect(result).toContain('<a href="/old.html">Updated doormat</a>');
    expect(result).toContain('<p>Updated text</p>');
    expect(result).toContain('Kept doormat');
    expect(result).toContain('Kept text');
    expect(result).not.toContain('Old doormat');
  });

  it('patches doormat labels while preserving original item formatting', () => {
    const originalHtml = `
      <main>
        <div class="gc-srvinfo">
          <div class="col-lg-4 col-md-6">
            <h3 class="h5">
              <a href="/credit.html">Credit</a>
              <span class="label label-danger">Closed</span>
            </h3>
            <p>Original description</p>
          </div>
        </div>
      </main>
    `;
    const rewriteHtml = `
      <div class="gc-srvinfo">
        <section>
          <h3>
            <a href="/credit.html">Updated credit</a>
            <span class="label label-info">No longer available</span>
          </h3>
          <p>Updated description</p>
        </section>
      </div>
    `;

    const result = (component as any).applyDoormatRewriteToPageHtml(
      originalHtml,
      rewriteHtml,
    );

    expect(result).toContain('class="col-lg-4 col-md-6"');
    expect(result).toContain('<h3 class="h5">');
    expect(result).toContain('<a href="/credit.html">Updated credit</a>');
    expect(result).toContain(
      '<span class="label label-info">No longer available</span>',
    );
    expect(result).toContain('<p>Updated description</p>');
    expect(result).not.toContain('label-danger');
    expect(result).not.toContain('<section><h3>');
  });

  it('ignores returned doormat items that do not match an original href', () => {
    const originalHtml = `
      <main>
        <div class="gc-srvinfo">
          <div><h3><a href="/one.html">One</a></h3><p>Original one</p></div>
        </div>
      </main>
    `;
    const rewriteHtml = `
      <div class="gc-srvinfo">
        <div><h3><a href="/missing.html">Missing updated</a></h3><p>Unexpected new item</p></div>
      </div>
    `;

    const result = (component as any).applyDoormatRewriteToPageHtml(
      originalHtml,
      rewriteHtml,
    );

    expect(result).toContain('One');
    expect(result).toContain('Original one');
    expect(result).not.toContain('Missing updated');
    expect(result).not.toContain('Unexpected new item');
  });

  it('normalizes legacy doormat markup before applying doormat rewrites', () => {
    const originalHtml = `
      <main>
        <h1>Giving</h1>
        <div class="mwsdoormat-links-container section">
          <h2>Topics</h2>
          <div class="wb-eqht row">
            <div class="col-md-4">
              <section class="gc-drmt">
                <h3 class="h5"><a href="/before-you-give.html">Before you give</a></h3>
                <p>Original description</p>
              </section>
            </div>
          </div>
        </div>
      </main>
    `;
    const rewriteHtml = `
      <section class="gc-srvinfo">
        <div>
          <h3><a href="/before-you-give.html">What to know before you give</a></h3>
          <p>Updated description</p>
        </div>
      </section>
    `;

    const result = (component as any).applyDoormatRewriteToPageHtml(
      originalHtml,
      rewriteHtml,
    );

    expect(result).toContain('<section class="gc-srvinfo">');
    expect(result).toContain('What to know before you give');
    expect(result).toContain('Updated description');
    expect(result).not.toContain('mwsdoormat-links-container');
    expect(result).not.toContain('gc-drmt');
    expect(result).not.toContain('Original description');
  });
});
