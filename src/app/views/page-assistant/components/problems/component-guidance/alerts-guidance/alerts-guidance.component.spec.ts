import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Subject } from 'rxjs';

import { AlertsGuidanceComponent } from './alerts-guidance.component';
import { UploadStateService } from '../../../../services/upload-state.service';
import { AlertAiService } from '../../../../services/alert-ai.service';
import { DEFAULT_ALERT_ISSUES } from './alerts-guidance.component';

class UploadStateServiceStub {
  getUploadData() {
    return { originalHtml: '<section class="alert">Test</section>' };
  }
  getEditPromptText() {
    return '';
  }
}

class AlertAiServiceStub {
  issuesUpdated$ = new Subject().asObservable();
  analyze = jasmine.createSpy('analyze').and.resolveTo(DEFAULT_ALERT_ISSUES);
  getCachedIssues = jasmine.createSpy('getCachedIssues').and.returnValue(null);
  cacheIssues = jasmine.createSpy('cacheIssues');
  clearCachedIssues = jasmine.createSpy('clearCachedIssues');
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

  it('clears persisted alert issues for the current page', async () => {
    await fixture.whenStable();
    fixture.detectChanges();
    const alertAi = TestBed.inject(AlertAiService) as unknown as AlertAiServiceStub;
    const clearedSpy = jasmine.createSpy('issuesCleared');
    component.issuesCleared.subscribe(clearedSpy);

    component.clearPersistedIssues();
    fixture.detectChanges();

    expect(alertAi.clearCachedIssues).toHaveBeenCalledWith(
      '<section class="alert">Test</section>',
    );
    expect(component.issues).toEqual([]);
    expect(clearedSpy).toHaveBeenCalled();
    expect(
      fixture.debugElement.query(By.css('.alert-table-actions')),
    ).toBeNull();
  });
});
