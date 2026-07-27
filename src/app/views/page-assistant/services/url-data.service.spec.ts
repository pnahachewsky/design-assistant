import { TestBed } from '@angular/core/testing';

import { UrlDataService } from './url-data.service';

describe('UrlDataService', () => {
  let service: UrlDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('normalizes relative URLs without adding preview-only link targets', () => {
    const doc = new DOMParser().parseFromString(
      `
        <main>
          <a id="relative" href="/help.html">Relative</a>
          <a id="absolute" href="https://example.com/help.html">Absolute</a>
          <a id="authored" href="/authored.html" target="_blank">Authored target</a>
        </main>
      `,
      'text/html',
    );

    (service as any).updateRelativeURLs(doc, 'https://www.canada.ca');

    const relative = doc.querySelector<HTMLAnchorElement>('#relative');
    const absolute = doc.querySelector<HTMLAnchorElement>('#absolute');
    const authored = doc.querySelector<HTMLAnchorElement>('#authored');
    expect(relative?.getAttribute('href')).toBe(
      'https://www.canada.ca/help.html',
    );
    expect(relative?.hasAttribute('target')).toBeFalse();
    expect(absolute?.hasAttribute('target')).toBeFalse();
    expect(authored?.getAttribute('target')).toBe('_blank');
  });

  it('uses the visible language selector as alternate metadata when head alternate is missing', async () => {
    const doc = new DOMParser().parseFromString(
      `
        <html lang="fr">
          <head>
            <meta name="dcterms.language" content="fra">
          </head>
          <body>
            <section id="wb-lng">
              <a lang="en" hreflang="en" href="https://www.canada.ca/en/revenue-agency/services/charities-giving/giving-charity-information-donors.html">
                English
              </a>
            </section>
            <main>
              <h1>Faire un don</h1>
            </main>
          </body>
        </html>
      `,
      'text/html',
    );

    const result = await service.extractContent(doc);

    expect(result.metadata).toContain(
      jasmine.objectContaining({
        name: 'alternate',
        content:
          'https://www.canada.ca/en/revenue-agency/services/charities-giving/giving-charity-information-donors.html',
      }),
    );
  });
});
