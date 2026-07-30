import { TestBed } from '@angular/core/testing';

import { TopicDoormatTemplateNormalizerService } from './topic-doormat-template-normalizer.service';

describe('TopicDoormatTemplateNormalizerService', () => {
  let service: TopicDoormatTemplateNormalizerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TopicDoormatTemplateNormalizerService],
    });
    service = TestBed.inject(TopicDoormatTemplateNormalizerService);
  });

  it('converts legacy topic doormat containers to modern gc-srvinfo markup', () => {
    const html = `
      <body class="cnt-wdth-lmtd">
        <main class="container">
          <div class="mwsbodytext text parbase section">
            <p>Intro text remains.</p>
          </div>
          <div class="mwsdoormat-links-container section">
            <h2 style="border: 2px solid rgb(111, 159, 255);">Topics</h2>
            <div class="wb-eqht row">
              <div class="col-md-4">
                <section class="gc-drmt">
                  <h3 data-emptytext="Enter heading" class="h5">
                    <a href="/before-you-give.html">What to know before you give</a>
                  </h3>
                  <p>Eligible gifts and official donation receipts</p>
                </section>
              </div>
              <div class="col-md-4">
                <section class="gc-drmt"></section>
              </div>
            </div>
          </div>
          <section class="pagedetails"><h2>Page details</h2></section>
        </main>
      </body>
    `;

    const result = service.normalizeLegacyDoormats(html);

    expect(result.changed).toBeTrue();
    expect(result.html).toContain('<section class="gc-srvinfo">');
    expect(result.html).toContain('<h2 class="wb-inv">Services and information</h2>');
    expect(result.html).toContain('<div class="row wb-eqht-grd">');
    expect(result.html).toContain(
      '<h3><a href="/before-you-give.html">What to know before you give</a></h3>',
    );
    expect(result.html).toContain(
      '<p>Eligible gifts and official donation receipts</p>',
    );
    expect(result.html).toContain('Intro text remains.');
    expect(result.html).toContain('Page details');
    expect(result.html).not.toContain('mwsdoormat-links-container');
    expect(result.html).not.toContain('gc-drmt');
    expect(result.html).not.toContain('Enter heading');
  });

  it('leaves modern doormat markup unchanged', () => {
    const html = `
      <main>
        <section class="gc-srvinfo">
          <h2 class="wb-inv">Services and information</h2>
          <div class="row wb-eqht-grd">
            <div class="col-lg-4 col-md-6">
              <h3><a href="/one.html">One</a></h3>
              <p>One description</p>
            </div>
          </div>
        </section>
      </main>
    `;

    const result = service.normalizeLegacyDoormats(html);

    expect(result).toEqual({ html, changed: false });
  });

  it('converts standalone legacy gc-drmt rows when no mws container is present', () => {
    const html = `
      <main>
        <h2>Topics</h2>
        <div class="row">
          <div class="col-md-4">
            <section class="gc-drmt">
              <h3><a href="/one.html">One</a></h3>
              <p>One description</p>
            </section>
          </div>
          <div class="col-md-4">
            <section class="gc-drmt">
              <h3><a href="/two.html">Two</a></h3>
              <p>Two description</p>
            </section>
          </div>
        </div>
      </main>
    `;

    const result = service.normalizeLegacyDoormats(html);

    expect(result.changed).toBeTrue();
    expect(result.html).toContain('<section class="gc-srvinfo">');
    expect(result.html).toContain('<h2 class="wb-inv">Services and information</h2>');
    expect(result.html).toContain('<a href="/one.html">One</a>');
    expect(result.html).toContain('<a href="/two.html">Two</a>');
    expect(result.html).not.toContain('gc-drmt');
  });
});
