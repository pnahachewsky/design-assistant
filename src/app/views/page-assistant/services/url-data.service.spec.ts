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

  it('does not add rendered whitespace before commas after inline nowrap spans', async () => {
    const result = await service.formatHtml(
      '<main><p>Temporary GST/HST relief on certain items from <span class="nowrap">December 14, 2024</span>, to <span class="nowrap">February 15, 2025</span></p></main>',
    );

    expect(result).toContain(
      '<span class="nowrap">December 14, 2024</span>, to',
    );
    expect(result).not.toContain(
      '<span class="nowrap">December 14, 2024</span>\n                  , to',
    );
  });

  it('removes formatter whitespace before colons in English', async () => {
    const result = (service as any).cleanupFormattedSpacing(
      '<p>For details<span class="nowrap"> online</span>\n  : check your account.</p>',
      'en',
    );

    expect(result).toContain('<span class="nowrap"> online</span>: check');
  });

  it('preserves formatter whitespace before colons in French', async () => {
    const result = (service as any).cleanupFormattedSpacing(
      '<p>Pour en savoir plus<span class="nowrap"> en ligne</span>\n  : consultez votre compte.</p>',
      'fr',
    );

    expect(result).not.toContain('<span class="nowrap"> en ligne</span>:');
    expect(result).toContain('<span class="nowrap"> en ligne</span>\n  :');
  });

  it('normalizes authored English spaces before punctuation at the formatter boundary', async () => {
    const result = await service.formatHtml(
      '<html lang="en"><body><main><p>One , two . three ; four : five ! six ?</p></main></body></html>',
    );

    expect(result).toContain('One, two. three; four: five! six?');
  });

  it('normalizes authored French spaces before punctuation at the formatter boundary', async () => {
    const result = await service.formatHtml(
      '<html lang="fr"><body><main><p>Un , deux . trois ; remarque : cinq ! six ?</p></main></body></html>',
    );

    expect(result.replace(/&nbsp;/g, '\u00a0')).toContain(
      'Un, deux. trois; remarque\u00a0: cinq! six?',
    );
  });
});
