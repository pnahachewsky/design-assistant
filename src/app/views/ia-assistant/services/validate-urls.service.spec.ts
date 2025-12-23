import { TestBed } from '@angular/core/testing';

import { ValidateUrlsService } from './validate-urls.service';

describe('ValidateUrlsService', () => {
  let service: ValidateUrlsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidateUrlsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
