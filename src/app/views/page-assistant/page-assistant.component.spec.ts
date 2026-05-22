import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAssistantCompareComponent } from './page-assistant.component';

describe('PageAssistantCompareComponent', () => {
  let component: PageAssistantCompareComponent;
  let fixture: ComponentFixture<PageAssistantCompareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAssistantCompareComponent]
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
});
