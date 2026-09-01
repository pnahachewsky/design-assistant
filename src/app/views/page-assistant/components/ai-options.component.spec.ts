import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';

import { AiOptionsComponent } from './ai-options.component';

describe('AiOptionsComponent', () => {
  let component: AiOptionsComponent;
  let fixture: ComponentFixture<AiOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiOptionsComponent, TranslateModule.forRoot()],
      providers: [provideNoopAnimations()],
    }).compileComponents();

    fixture = TestBed.createComponent(AiOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
