import { TestBed } from '@angular/core/testing';

import { FetchService } from '../../../../services/fetch.service';
import { TopicDoormatExtractorService } from './topic-doormat-extractor.service';

class FetchServiceStub {
  fetchContentWithResponse = jasmine
    .createSpy('fetchContentWithResponse')
    .and.resolveTo(
      {
        document: new DOMParser().parseFromString(
          `<html><head><title>Destination</title></head><body><main>
          <h1>Destination heading</h1>
          <p>First introductory paragraph.</p>
          <aside><p>Interface text to exclude.</p></aside>
          <p>Second introductory paragraph.</p>
          <p>For more information, see <a href="/reference.html">supporting reference material</a>.</p>
          <h2>Eligibility</h2>
          <p>Section body text to exclude.</p>
          <h2>How to apply</h2>
        </main></body></html>`,
          'text/html',
        ),
        status: 200,
        statusText: 'OK',
        url: 'https://www.canada.ca/en/benefits/one.html',
      },
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

  it('excludes status labels after modern topic doormat links from link text counts', () => {
    const doc = service.parseHtmlDocument(`
      <main>
        <h2>Benefits</h2>
        <div class="gc-srvinfo">
          <div class="col-lg-4 col-md-6">
            <h3 class="h5">
              <a href="/en/revenue-agency/services/child-family-benefits/gst-hst-credit.html">GST/HST credit</a>
              <br>
              <span class="label label-warning">Will be replaced in July 2026</span>
            </h3>
            <p>Quarterly payments for people with low and modest incomes</p>
          </div>
        </div>
      </main>
    `);

    expect(doc).not.toBeNull();
    const summaries = service.extractSummaries(doc as Document);

    expect(summaries.length).toBe(1);
    expect(summaries[0].linkText).toBe('GST/HST credit');
    expect(summaries[0].labels).toEqual(['Will be replaced in July 2026']);
    expect(summaries[0].linkTextCharacterCount).toBe(14);
  });

  it('excludes labels from split heading and description character counts', () => {
    const doc = service.parseHtmlDocument(`
      <main>
        <h2>Benefits</h2>
        <div class="gc-srvinfo">
          <div class="col-lg-4 col-md-6">
            <h3 class="h5">
              <a href="/en/benefits/one.html">Benefit one</a>
              <a href="/en/benefits/one.html" class="label label-info">New</a>
            </h3>
            <p>
              Find benefit one information
              <span class="label label-warning">Updated</span>
            </p>
          </div>
        </div>
      </main>
    `);

    expect(doc).not.toBeNull();
    const summaries = service.extractSummaries(doc as Document);

    expect(summaries.length).toBe(1);
    expect(summaries[0].linkText).toBe('Benefit one');
    expect(summaries[0].description).toBe('Find benefit one information');
    expect(summaries[0].labels).toEqual(['New', 'Updated']);
    expect(summaries[0].linkTextCharacterCount).toBe(11);
    expect(summaries[0].descriptionCharacterCount).toBe(28);
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

    expect(fetchService.fetchContentWithResponse).toHaveBeenCalledOnceWith(
      'https://www.canada.ca/en/benefits/one.html',
      'both',
      1,
      'none',
    );
    expect(enriched[0].destinationPageTitle).toBe('Destination');
    expect(enriched[0].destinationPageHeading).toBe('Destination heading');
    expect(enriched[0].destinationIntroParagraphs).toEqual([
      'First introductory paragraph.',
      'Second introductory paragraph.',
    ]);
    expect(enriched[0].destinationSectionHeadings).toEqual([
      'Eligibility',
      'How to apply',
    ]);
    expect(enriched[0].destinationContextStatus).toBe('available');
    expect(enriched[0].destinationHttpStatus).toBe(200);
  });

  it('adds opposite-language length counts from the alternate page by section item position', async () => {
    fetchService.fetchContentWithResponse.and.callFake((url: string) => {
      expect(url).toBe('https://www.canada.ca/fr/services/prestations.html');
      return Promise.resolve({
        document: new DOMParser().parseFromString(
          `<html><body><main>
            <h2>Prestations</h2>
            <div class="gc-srvinfo">
              <div>
                <h3><a href="/fr/prestations/un.html">Nom de prestation un tres long</a></h3>
                <p>
                  Description francaise plus longue pour la prestation un
                  <span class="label label-warning">Mise a jour</span>
                </p>
              </div>
              <div>
                <h3><a href="/fr/prestations/deux.html">Prestation deux</a></h3>
                <p>Description deux</p>
              </div>
            </div>
          </main></body></html>`,
          'text/html',
        ),
        status: 200,
        statusText: 'OK',
        url,
      });
    });

    const enriched = await service.enrichOppositeLanguageLengths(
      [
        {
          index: 1,
          linkText: 'Benefit one',
          href: '/en/benefits/one.html',
          description: 'Benefit one description',
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
          descriptionCharacterCount: 23,
          sectionIndex: 1,
          sectionTitle: 'Benefits',
          sectionItemIndex: 1,
          sectionDoormatCount: 2,
        },
      ],
      {
        originalUrl: 'https://www.canada.ca/en/services/benefits.html',
        metadata: [
          {
            name: 'alternate',
            content: 'https://www.canada.ca/fr/services/prestations.html',
          },
        ],
      },
      'en',
    );

    expect(enriched[0]).toEqual(
      jasmine.objectContaining({
        oppositeLanguage: 'fr',
        oppositeLanguageLinkTextCharacterCount: 30,
        oppositeLanguageDescriptionCharacterCount: 55,
      }),
    );
  });

  it('keeps the destination HTTP status when destination context fetch fails', async () => {
    fetchService.fetchContentWithResponse.and.returnValue(Promise.reject(
      Object.assign(new Error('Fetch failed. Status: 410'), {
        status: 410,
        statusText: 'Gone',
      }),
    ));

    const enriched = await service.enrichDestinationContext(
      [
        {
          index: 1,
          linkText: 'Closed benefit',
          href: '/en/benefits/closed.html',
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
          linkTextCharacterCount: 14,
          descriptionCharacterCount: 0,
          sectionIndex: 1,
          sectionTitle: 'Benefits',
          sectionItemIndex: 1,
          sectionDoormatCount: 1,
        },
      ],
      { originalUrl: 'https://www.canada.ca/en/services/benefits.html' },
    );

    expect(enriched[0].destinationContextStatus).toBe('failed');
    expect(enriched[0].destinationHttpStatus).toBe(410);
    expect(enriched[0].destinationFetchError).toContain('Status: 410');
  });
});
