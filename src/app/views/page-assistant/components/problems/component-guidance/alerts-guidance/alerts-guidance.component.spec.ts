import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertsGuidanceComponent } from './alerts-guidance.component';
import { UploadStateService } from '../../../../services/upload-state.service';
import { AlertAiService } from '../../../../services/alert-ai.service';
import { DEFAULT_ALERT_ISSUES } from './alerts-guidance.component';

class UploadStateServiceStub {
  getUploadData() {
    return { originalHtml: '<section class="alert">Test</section>' };
  }
}

class AlertAiServiceStub {
  analyzeIssues = jasmine
    .createSpy('analyzeIssues')
    .and.resolveTo(DEFAULT_ALERT_ISSUES);
  getCachedIssues = jasmine.createSpy('getCachedIssues').and.returnValue(null);
  getCachedRecommendations = jasmine
    .createSpy('getCachedRecommendations')
    .and.returnValue(null);
  cacheIssues = jasmine.createSpy('cacheIssues');
  recommend = jasmine
    .createSpy('recommend')
    .and.resolveTo({ output: '', htmls: [] });
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
});
