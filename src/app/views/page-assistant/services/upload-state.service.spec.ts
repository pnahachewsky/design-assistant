import { TestBed } from '@angular/core/testing';

import { UploadStateService } from './upload-state.service';
import { AiModel } from '../data/data.model';

describe('UploadSettingsService', () => {
  let service: UploadStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('resets the selected model to Owl Alpha', () => {
    service.setSelectedAiModel(AiModel.GptOSS20BFree);

    service.resetUploadFlow();

    expect(service.getSelectedAiModel()).toBe(AiModel.OwlAlpha);
  });
});
