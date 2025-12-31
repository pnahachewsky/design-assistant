import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertsGuidanceComponent } from './alerts-guidance.component';

describe('AlertsGuidanceComponent', () => {
  let component: AlertsGuidanceComponent;
  let fixture: ComponentFixture<AlertsGuidanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertsGuidanceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AlertsGuidanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
