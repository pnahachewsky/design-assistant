import { TestBed } from '@angular/core/testing';

import { FetchService } from '../../../services/fetch.service';
import { TopicDoormatExtractorService } from './topic-doormat-extractor.service';

class FetchServiceStub {
  fetchContent = jasmine
    .createSpy('fetchContent')
    .and.resolveTo(
      new DOMParser().parseFromString(
        '<html><head><title>Destination</title></head><body><main><h1>Destination heading</h1></main></body></html>',
        'text/html',
      ),
    );
}

describe('TopicDoormatExtractorService', () => {
  let service: TopicDoormatExtractorService;
  let fetchService: FetchServiceStub;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TopicDoormatExtractorService,
        { provide: FetchService, useClass: FetchServiceStub },
      ],
    });

    service = TestBed.inject(TopicDoormatExtractorService);
    fetchService = TestBed.inject(FetchService) as unknown as FetchServiceStub;
  });

  it('extracts modern topic doormat summaries with section metadata', () => {
    const doc = service.parseHtmlDocument(`
      <main>
        <h2>Benefits</h2>
        <div class="gc-srvinfo">
          <div>
            <h3><a href="/en/benefits/one.html">Benefit one</a></h3>
            <p>Find benefit one information</p>
          </div>
          <div>
            <h3><a href="/en/benefits/two.html">Benefit two</a></h3>
            <p>Find benefit two information</p>
          </div>
        </div>
      </main>
    `);

    expect(doc).not.toBeNull();
    const summaries = service.extractSummaries(doc as Document);

    expect(service.hasCandidates(doc as Document)).toBeTrue();
    expect(summaries.length).toBe(2);
    expect(summaries[0]).toEqual(
      jasmine.objectContaining({
        index: 1,
        linkText: 'Benefit one',
        href: '/en/benefits/one.html',
        description: 'Find benefit one information',
        sectionIndex: 1,
        sectionTitle: 'Benefits',
        sectionItemIndex: 1,
        sectionDoormatCount: 2,
      }),
    );
    expect(summaries[1].sectionItemIndex).toBe(2);
  });

  it('detects French pages from metadata and extracts Most requested links', () => {
    const doc = service.parseHtmlDocument(`
      <html>
        <head><meta name="dcterms.language" content="fra"></head>
        <body>
          <section class="gc-most-requested">
            <a href="/fr/impots.html">Impots</a>
          </section>
        </body>
      </html>
    `);

    expect(doc).not.toBeNull();
    expect(service.detectPageLanguage(doc as Document)).toBe('fr');
    expect(service.extractMostRequestedLinks(doc as Document)).toEqual([
      { text: 'Impots', href: '/fr/impots.html' },
    ]);
  });

  it('enriches destination context once per unique destination URL', async () => {
    const enriched = await service.enrichDestinationContext(
      [
        {
          index: 1,
          linkText: 'Benefit one',
          href: '/en/benefits/one.html',
          description: '',
          headingLevel: 3,
          itemLinkCount: 1,
          headingLinkCount: 1,
          descriptionLinkCount: 0,
          hasSplitHeadingLink: false,
          hasDescriptionLink: false,
          hasDescriptionIconOrImage: false,
          hasDescriptionSpecialFormatting: false,
          rawItemText: '',
          linkTextCharacterCount: 11,
          descriptionCharacterCount: 0,
          sectionIndex: 1,
          sectionTitle: 'Benefits',
          sectionItemIndex: 1,
          sectionDoormatCount: 1,
        },
      ],
      { originalUrl: 'https://www.canada.ca/en/services/benefits.html' },
    );

    expect(fetchService.fetchContent).toHaveBeenCalledOnceWith(
      'https://www.canada.ca/en/benefits/one.html',
      'both',
      1,
      'none',
    );
    expect(enriched[0].destinationPageTitle).toBe('Destination');
    expect(enriched[0].destinationPageHeading).toBe('Destination heading');
  });
});
