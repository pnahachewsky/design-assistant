import { ComponentFixture, TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';
import { Subject } from 'rxjs';

import {
  AlertsGuidanceComponent,
  AlertIssue,
  computeAlertCategories,
  computeAlertMaxSeverity,
} from './alerts-guidance.component';
import { UploadStateService } from '../../../../services/upload-state.service';
import { AlertAiService } from '../../../../services/alerts/alert-ai.service';
import { DEFAULT_ALERT_ISSUES } from './alerts-guidance.component';

class UploadStateServiceStub {
  private workingHtml = signal('<section class="alert">Modified</section>');
  private revision = signal(1);
  private recommendationReviewPending = signal(false);

  getUploadData() {
    return {
      originalHtml: '<section class="alert">Original</section>',
      modifiedHtml: '<section class="alert">Modified</section>',
    };
  }
  getWorkingHtml() {
    return this.workingHtml();
  }
  getWorkingContentRevision() {
    return this.revision();
  }
  getRecommendationReviewPending() {
    return this.recommendationReviewPending();
  }
  getEditPromptText() {
    return '';
  }
  getSelectedAiModel() {
    return undefined;
  }
  updateWorkingHtml(html: string) {
    this.workingHtml.set(html);
    this.revision.update((revision) => revision + 1);
  }
  setRecommendationReviewPending(pending: boolean) {
    this.recommendationReviewPending.set(pending);
  }
}

class AlertAiServiceStub {
  issuesUpdatedSubject = new Subject<{ html: string; issues: unknown[] }>();
  issuesUpdated$ = this.issuesUpdatedSubject.asObservable();
  analysisStateSubject = new Subject<{
    html: string;
    loading: boolean;
    error: boolean;
  }>();
  analysisState$ = this.analysisStateSubject.asObservable();
  analyze = jasmine.createSpy('analyze').and.resolveTo(DEFAULT_ALERT_ISSUES);
  getCachedIssues = jasmine.createSpy('getCachedIssues').and.returnValue(null);
  cacheIssues = jasmine.createSpy('cacheIssues');
  prepareForReanalysis = jasmine.createSpy('prepareForReanalysis');
  failAnalysis = jasmine.createSpy('failAnalysis');
  getLatestCachedAnalysis = jasmine
    .createSpy('getLatestCachedAnalysis')
    .and.returnValue(null);
  normalizeAlertIssues(issues: typeof DEFAULT_ALERT_ISSUES) {
    return issues;
  }
}

describe('AlertsGuidanceComponent', () => {
  let component: AlertsGuidanceComponent;
  let fixture: ComponentFixture<AlertsGuidanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertsGuidanceComponent],
      providers: [
        { provide: UploadStateService, useClass: UploadStateServiceStub },
        { provide: AlertAiService, useClass: AlertAiServiceStub },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AlertsGuidanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('excludes No issues rows from alert health calculations', () => {
    const noIssue: AlertIssue = {
      alertIndex: 1,
      category: 'No issues',
      severity: 'N/A',
      description: 'Alert 1: No issues found for this alert.',
      recommendation: 'No changes required.',
      include: false,
    };

    expect(computeAlertCategories([noIssue])).toEqual([]);
    expect(computeAlertMaxSeverity([noIssue])).toBeNull();
    expect(component.isNoIssueRow(noIssue)).toBeTrue();
  });

  it('analyzes alerts from the current working page', async () => {
    await fixture.whenStable();
    const alertAi = TestBed.inject(AlertAiService) as unknown as AlertAiServiceStub;

    expect(alertAi.analyze).toHaveBeenCalledWith(
      '<section class="alert">Modified</section>',
      undefined,
      undefined,
    );
  });

  it('keeps the existing issues and recommends re-analysis after content changes', async () => {
    await fixture.whenStable();
    fixture.detectChanges();
    const uploadState = TestBed.inject(
      UploadStateService,
    ) as unknown as UploadStateServiceStub;
    const previousIssues = [...component.issues];

    uploadState.updateWorkingHtml(
      '<section class="alert">Manually edited</section>',
    );
    fixture.detectChanges();

    expect(component.issues).toEqual(previousIssues);
    expect(component.reanalysisRecommended).toBeTrue();
  });

  it('disables re-analysis while recommendations are unresolved', async () => {
    await fixture.whenStable();
    const uploadState = TestBed.inject(
      UploadStateService,
    ) as unknown as UploadStateServiceStub;

    uploadState.setRecommendationReviewPending(true);
    fixture.detectChanges();

    expect(component.reanalysisDisabled).toBeTrue();
  });

  it('clears the table only when re-analysis is selected', async () => {
    await fixture.whenStable();
    const alertAi = TestBed.inject(AlertAiService) as unknown as AlertAiServiceStub;
    alertAi.analyze.calls.reset();
    alertAi.prepareForReanalysis.calls.reset();

    await component.analyzeCurrentPage();

    expect(alertAi.prepareForReanalysis).toHaveBeenCalledWith(
      '<section class="alert">Modified</section>',
    );
    expect(alertAi.analyze).toHaveBeenCalledWith(
      '<section class="alert">Modified</section>',
      undefined,
      undefined,
    );
  });

  it('clears stale issues when Send to GenAI starts fresh analysis', async () => {
    await fixture.whenStable();
    const alertAi = TestBed.inject(AlertAiService) as unknown as AlertAiServiceStub;
    component.issues = [...DEFAULT_ALERT_ISSUES];

    alertAi.analysisStateSubject.next({
      html: '<section class="alert">Modified</section>',
      loading: true,
      error: false,
    });
    alertAi.issuesUpdatedSubject.next({
      html: '<section class="alert">Modified</section>',
      issues: [],
    });

    expect(component.issues).toEqual([]);
    expect(component.isLoading).toBeTrue();
    expect(component.reanalysisRecommended).toBeTrue();
  });

  it('shows an error instead of OK when shared analysis fails', async () => {
    await fixture.whenStable();
    const alertAi = TestBed.inject(AlertAiService) as unknown as AlertAiServiceStub;
    let emittedError = false;
    component.errorChange.subscribe((error) => {
      emittedError = error;
    });

    alertAi.analysisStateSubject.next({
      html: '<section class="alert">Modified</section>',
      loading: false,
      error: true,
    });

    expect(component.isLoading).toBeFalse();
    expect(emittedError).toBeTrue();
  });

  it('treats a successful empty response as a current clean analysis', async () => {
    await fixture.whenStable();
    const alertAi = TestBed.inject(AlertAiService) as unknown as AlertAiServiceStub;
    alertAi.analyze.and.resolveTo([]);
    alertAi.cacheIssues.calls.reset();

    await component.analyzeCurrentPage();

    expect(alertAi.cacheIssues).toHaveBeenCalledWith(
      '<section class="alert">Modified</section>',
      [],
    );
    expect(component.issues).toEqual([]);
    expect(component.reanalysisRecommended).toBeFalse();
  });

  it('discards a response when the working HTML changes during analysis', async () => {
    await fixture.whenStable();
    const uploadState = TestBed.inject(
      UploadStateService,
    ) as unknown as UploadStateServiceStub;
    const alertAi = TestBed.inject(AlertAiService) as unknown as AlertAiServiceStub;
    let resolveAnalysis!: (issues: typeof DEFAULT_ALERT_ISSUES) => void;
    alertAi.analyze.and.returnValue(
      new Promise((resolve) => {
        resolveAnalysis = resolve;
      }),
    );
    alertAi.cacheIssues.calls.reset();

    const analysis = component.analyzeCurrentPage();
    uploadState.updateWorkingHtml(
      '<section class="alert">Changed during request</section>',
    );
    fixture.detectChanges();
    resolveAnalysis(DEFAULT_ALERT_ISSUES);
    await analysis;

    expect(alertAi.cacheIssues).not.toHaveBeenCalled();
    expect(component.reanalysisRecommended).toBeTrue();
  });
});
