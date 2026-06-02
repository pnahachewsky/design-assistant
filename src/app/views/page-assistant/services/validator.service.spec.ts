import { TestBed } from '@angular/core/testing';

import { ValidatorService } from './validator.service';

describe('ValidatorService', () => {
  let service: ValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('detects subway doormats from gc-subway definition-list navigation', () => {
    const rows = service.collectGuidanceUrls(`
      <main>
        <nav class="provisional gc-subway">
          <h2>Sections</h2>
          <dl>
            <dt><a href="/reporting.html">Reporting requirements and deadlines</a></dt>
            <dd>Who must file returns and when returns are due</dd>
            <dt><a href="/how-file.html">How to file</a></dt>
            <dd>Determine the best method for your situation</dd>
          </dl>
        </nav>
      </main>
    `);

    expect(rows).toContain(
      jasmine.objectContaining({
        id: 'subwayDoormats',
        name: 'page.tools.guidance.craVariant.subwayDoormats.title',
        url: 'page.tools.guidance.craVariant.doormats.url',
      }),
    );
  });

  it('does not detect subway doormats from gc-subway navigation without descriptions', () => {
    const rows = service.collectGuidanceUrls(`
      <main>
        <nav class="provisional gc-subway">
          <h2>Sections</h2>
          <ul>
            <li><a href="/reporting.html">Reporting requirements and deadlines</a></li>
            <li><a href="/how-file.html">How to file</a></li>
          </ul>
        </nav>
      </main>
    `);

    expect(rows).not.toContain(
      jasmine.objectContaining({
        id: 'subwayDoormats',
      }),
    );
  });
});
