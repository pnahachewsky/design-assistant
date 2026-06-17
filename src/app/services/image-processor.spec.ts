import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';

import { ApiKeyService } from './api-key.service';
import { ImageProcessorService } from './image-processor';

describe('ImageProcessorService', () => {
  let service: ImageProcessorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ImageProcessorService,
        {
          provide: HttpClient,
          useValue: {},
        },
        {
          provide: ApiKeyService,
          useValue: { getCurrentKey: jasmine.createSpy('getCurrentKey') },
        },
        {
          provide: TranslateService,
          useValue: { instant: (key: string) => key },
        },
      ],
    });
    service = TestBed.inject(ImageProcessorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
