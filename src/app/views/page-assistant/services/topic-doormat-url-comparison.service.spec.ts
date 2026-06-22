import { TestBed } from '@angular/core/testing';
import { TopicDoormatUrlComparisonService } from './topic-doormat-url-comparison.service';

describe('TopicDoormatUrlComparisonService', () => {
  let service: TopicDoormatUrlComparisonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TopicDoormatUrlComparisonService],
    });
    service = TestBed.inject(TopicDoormatUrlComparisonService);
  });

  it('treats URL fragments as part of a Most requested destination', () => {
    const uploadData = {
      originalUrl: 'https://www.canada.ca/en/benefits/index.html',
    };

    expect(
      service.findMostRequestedDuplicate(
        '/en/benefits/one.html#eligibility',
        [{ text: 'Benefit', href: '/en/benefits/one.html' }],
        uploadData,
      ),
    ).toBeNull();
    expect(
      service.findMostRequestedDuplicate(
        '/en/benefits/one.html#eligibility',
        [
          {
            text: 'Benefit eligibility',
            href: '/en/benefits/one.html#eligibility',
          },
        ],
        uploadData,
      )?.text,
    ).toBe('Benefit eligibility');
  });
});
