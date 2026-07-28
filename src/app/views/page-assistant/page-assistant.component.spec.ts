import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TranslateModule } from '@ngx-translate/core';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { ConfirmationService, MessageService } from 'primeng/api';

import { PageAssistantCompareComponent } from './page-assistant.component';

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
});
