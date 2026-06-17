import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { LocalStorageService } from './services/local-storage.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { queryParams: of({}) },
        },
        {
          provide: Router,
          useValue: { navigate: jasmine.createSpy('navigate') },
        },
        {
          provide: LocalStorageService,
          useValue: {
            getData: jasmine.createSpy('getData').and.returnValue(null),
            saveData: jasmine.createSpy('saveData'),
          },
        },
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
