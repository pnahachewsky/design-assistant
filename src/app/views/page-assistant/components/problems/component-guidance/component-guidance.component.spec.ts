import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';

import { ComponentGuidanceComponent } from './component-guidance.component';

describe('ComponentGuidanceComponent', () => {
  let component: ComponentGuidanceComponent;
  let fixture: ComponentFixture<ComponentGuidanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentGuidanceComponent, TranslateModule.forRoot()],
      providers: [
        MessageService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentGuidanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('synchronizes the Topic doormat guidance row with working HTML', () => {
    const topicHtml = `
      <main>
        <h2>Benefits</h2>
        <div class="gc-srvinfo">
          <h3><a href="/en/benefits.html">Benefits</a></h3>
          <p>Benefit programs and services</p>
        </div>
      </main>
    `;

    (component as any).syncTopicDoormatGuidanceRowForWorkingHtml(topicHtml);

    const topicRow = component.rows.find(
      (row: any) => row.__id === component.topicDoormatsId,
    );
    expect(topicRow).toBeDefined();

    component.expandedRows = { [topicRow!.url]: true };
    component.topicDoormatIssuesResponseReceived = true;
    (component as any).topicDoormatAnalyzedHtml = topicHtml;

    (component as any).syncTopicDoormatGuidanceRowForWorkingHtml(
      '<main><h1>Page without doormats</h1></main>',
    );

    expect(
      component.rows.some(
        (row: any) => row.__id === component.topicDoormatsId,
      ),
    ).toBeFalse();
    expect(component.expandedRows[topicRow!.url]).toBeUndefined();
    expect(component.topicDoormatIssuesResponseReceived).toBeFalse();
  });

  it('does not publish Topic doormat results for outdated working HTML', async () => {
    const requestHtml = `
      <main>
        <h2>Benefits</h2>
        <div class="gc-srvinfo">
          <h3><a href="/en/benefits.html">Benefits</a></h3>
          <p>Benefit programs and services</p>
        </div>
      </main>
    `;
    let workingHtml = requestHtml;
    const uploadState = (component as any).uploadState;
    const extractor = (component as any).topicDoormatExtractor;
    const analysis = (component as any).topicDoormatIssueAnalysis;

    spyOn(uploadState, 'getUploadData').and.returnValue({
      originalHtml: requestHtml,
      originalUrl: 'https://www.canada.ca/en/services/benefits.html',
    });
    spyOn(uploadState, 'getWorkingHtml').and.callFake(() => workingHtml);
    spyOn(uploadState, 'getSelectedAiModel').and.returnValue('selected-model');
    spyOn(extractor, 'enrichDestinationContext').and.callFake(
      async (summaries: unknown[]) => summaries,
    );
    spyOn(analysis, 'analyze').and.callFake(async () => {
      workingHtml = '<main><h1>Edited while analysis was running</h1></main>';
      return {
        rows: [
          {
            include: false,
            rowType: 'doormat',
            severity: 'OK',
            doormat: 'Benefits: 1. Benefits',
            doormatLabel: 'Benefits',
            issueId: 'no-issues',
            issue: 'No issues',
            evidence: 'No issues reported by AI.',
            recommendation: '',
            doormatIndex: 1,
            sectionIndex: 1,
            sectionTitle: 'Benefits',
            sectionItemIndex: 1,
          },
        ],
        text: '{"doormats":[]}',
        usedLocalFallback: false,
        model: 'selected-model',
        modelRotation: ['selected-model'],
        elapsedMs: 1,
      };
    });

    await (component as any).analyzeTopicDoormatIssues();

    expect(component.topicDoormatIssueRows).toEqual([]);
    expect(component.topicDoormatIssuesResponseReceived).toBeFalse();
    expect((component as any).topicDoormatAnalyzedHtml).toBe('');
  });

  it('shows deterministic fallback results without marking the analysis as failed', async () => {
    const requestHtml = `
      <main>
        <h2>Benefits</h2>
        <div class="gc-srvinfo">
          <h3><a href="/en/benefits.html">Benefits</a></h3>
          <p>Benefit programs and services</p>
        </div>
      </main>
    `;
    const uploadState = (component as any).uploadState;
    const extractor = (component as any).topicDoormatExtractor;
    const analysis = (component as any).topicDoormatIssueAnalysis;
    const messageService = (component as any).messageService;

    spyOn(uploadState, 'getUploadData').and.returnValue({
      originalHtml: requestHtml,
      originalUrl: 'https://www.canada.ca/en/services/benefits.html',
    });
    spyOn(uploadState, 'getWorkingHtml').and.returnValue(requestHtml);
    spyOn(uploadState, 'getSelectedAiModel').and.returnValue('selected-model');
    spyOn(extractor, 'enrichDestinationContext').and.callFake(
      async (summaries: unknown[]) => summaries,
    );
    spyOn(analysis, 'analyze').and.resolveTo({
      rows: [],
      text: '',
      usedLocalFallback: true,
      model: 'selected-model',
      modelRotation: ['selected-model'],
      elapsedMs: 1,
    });
    const messageSpy = spyOn(messageService, 'add');

    await (component as any).analyzeTopicDoormatIssues();

    expect(component.topicDoormatIssuesResponseReceived).toBeTrue();
    expect(component.topicDoormatIssuesError).toBeFalse();
    expect(messageSpy).toHaveBeenCalledWith(
      jasmine.objectContaining({
        severity: 'warn',
        summary: 'Topic doormat AI response unavailable',
      }),
    );
  });
});
