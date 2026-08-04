import { LocationStrategy } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';
import { IaStructureService } from '../ia-structure.service';
import { TopicDoormatIaCheckService } from './topic-doormat-ia-check.service';
import { TopicDoormatSummary } from './topic-doormat.types';

class IaStructureServiceStub {
  children = [
    {
      label: 'Child one',
      data: {
        url: 'https://www.canada.ca/en/benefits/one.html',
        h1: 'Child one',
      },
    },
    {
      label: 'Missing child',
      data: {
        url: 'https://www.canada.ca/en/benefits/missing.html',
        h1: 'Missing child',
      },
    },
  ];

  getCachedResultFor() {
    return {
      tree: [
        {
          children: this.children,
        },
      ],
    };
  }
}

class TranslateServiceStub {
  instant(key: string, params?: Record<string, unknown>): string {
    if (key.includes('unnecessaryDoormat.evidence')) {
      return `These doormats were not found as direct child pages in the IA crawl: ${params?.['indexes']}`;
    }
    return key;
  }
}

describe('TopicDoormatIaCheckService', () => {
  let service: TopicDoormatIaCheckService;
  let iaStructure: IaStructureServiceStub;

  const summary = (
    index: number,
    href: string,
    linkText: string,
  ): TopicDoormatSummary => ({
    index,
    linkText,
    href,
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
    linkTextCharacterCount: linkText.length,
    descriptionCharacterCount: 0,
    sectionIndex: 1,
    sectionTitle: 'Benefits',
    sectionItemIndex: index,
    sectionDoormatCount: 2,
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TopicDoormatIaCheckService,
        { provide: IaStructureService, useClass: IaStructureServiceStub },
        { provide: TranslateService, useClass: TranslateServiceStub },
        {
          provide: HttpClient,
          useValue: {
            get: () =>
              of([
                {
                  url: 'https://www.canada.ca/en/benefits/one.html',
                  visits: 1200,
                },
              ]),
          },
        },
        {
          provide: LocationStrategy,
          useValue: { getBaseHref: () => '/' },
        },
      ],
    });
    service = TestBed.inject(TopicDoormatIaCheckService);
    iaStructure = TestBed.inject(
      IaStructureService,
    ) as unknown as IaStructureServiceStub;
  });

  it('reports missing child pages and non-child doormats', async () => {
    const result = await service.analyze(
      [
        summary(1, '/en/benefits/one.html', 'Child one'),
        summary(2, '/en/benefits/extra.html', 'Extra page'),
        summary(3, '/en/benefits/another-extra.html', 'Another extra page'),
      ],
      { originalUrl: 'https://www.canada.ca/en/benefits/index.html' },
    );

    expect(result.rows.map((row) => row.issueId)).toEqual([
      'missing-needed-doormat',
      'unnecessary-doormat',
    ]);
    expect(result.rows.map((row) => row.severity)).toEqual(['Medium', 'Low']);
    expect(result.rows[1]).toEqual(
      jasmine.objectContaining({
        rowType: 'section',
        sectionIndex: 1,
        sectionTitle: 'Benefits',
        evidence:
          'These doormats were not found as direct child pages in the IA crawl: 2, 3',
      }),
    );
    expect(result.metaByDoormatIndex.get(1)).toBe('child, 1,200');
    expect(result.metaByDoormatIndex.get(2)).toBe('no views');
    expect(result.metaByDoormatIndex.get(3)).toBe('no views');
  });

  it('does not report a missing child page when it is linked elsewhere in page body content', async () => {
    const result = await service.analyze(
      [summary(1, '/en/benefits/one.html', 'Child one')],
      {
        originalUrl: 'https://www.canada.ca/en/benefits/index.html',
        originalHtml: `
          <body>
            <main>
              <section class="gc-most-requested">
                <h2>Most requested</h2>
                <ul>
                  <li><a href="/en/benefits/missing.html">Missing child</a></li>
                </ul>
              </section>
              <section class="provisional gc-prtts">
                <h2>Features</h2>
                <a href="/en/benefits/feature.html">Feature link</a>
              </section>
            </main>
          </body>
        `,
      },
    );

    expect(result.rows.map((row) => row.issueId)).toEqual([]);
  });

  it('still reports a missing child page when the only matching page link is in a doormat section', async () => {
    const result = await service.analyze(
      [summary(1, '/en/benefits/one.html', 'Child one')],
      {
        originalUrl: 'https://www.canada.ca/en/benefits/index.html',
        originalHtml: `
          <body>
            <main>
              <section class="gc-srvinfo">
                <h2>Services and information</h2>
                <div>
                  <h3><a href="/en/benefits/missing.html">Missing child</a></h3>
                  <p>Description</p>
                </div>
              </section>
            </main>
          </body>
        `,
      },
    );

    expect(result.rows.map((row) => row.issueId)).toContain(
      'missing-needed-doormat',
    );
  });

  it('does not suppress missing child pages from social media links', async () => {
    iaStructure.children = [
      {
        label: 'Social child',
        data: {
          url: 'https://www.facebook.com/canrevagency/',
          h1: 'Social child',
        },
      },
    ];

    const result = await service.analyze(
      [summary(1, '/en/benefits/one.html', 'Child one')],
      {
        originalUrl: 'https://www.canada.ca/en/benefits/index.html',
        originalHtml: `
          <body>
            <main>
              <section class="gc-followus">
                <h2>On social media</h2>
                <a href="https://www.facebook.com/canrevagency/">Facebook</a>
              </section>
            </main>
          </body>
        `,
      },
    );

    expect(result.rows.map((row) => row.issueId)).toContain(
      'missing-needed-doormat',
    );
  });
});
