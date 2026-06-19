import { TestBed } from '@angular/core/testing';
import { MessageService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';

import { AlertAiService } from './alert-ai.service';
import { OpenRouterService } from './openrouter.service';
import { SkillManagerService } from './skill-manager.service';
import { UploadStateService } from './upload-state.service';
import type { AlertIssue } from '../components/problems/component-guidance/alerts-guidance/alerts-guidance.component';

describe('AlertAiService cache', () => {
  let service: AlertAiService;
  const issue: AlertIssue = {
    category: 'Test issue',
    severity: 'Low',
    description: 'Description',
    recommendation: 'Recommendation',
    include: true,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AlertAiService,
        { provide: OpenRouterService, useValue: { models: [] } },
        { provide: MessageService, useValue: { add: () => undefined } },
        { provide: TranslateService, useValue: { instant: (key: string) => key } },
        { provide: UploadStateService, useValue: {} },
        { provide: SkillManagerService, useValue: {} },
      ],
    });
    service = TestBed.inject(AlertAiService);
  });

  it('caches a successful analysis with no issues', () => {
    service.cacheIssues('<main>Clean</main>', []);

    expect(service.getCachedIssues('<main>Clean</main>')).toEqual([]);
  });

  it('keeps successful analyses for multiple HTML versions', () => {
    service.cacheIssues('<main>Version one</main>', [issue]);
    service.cacheIssues('<main>Version two</main>', []);

    expect(service.getCachedIssues('<main>Version one</main>')).toEqual([issue]);
    expect(service.getCachedIssues('<main>Version two</main>')).toEqual([]);
    expect(service.getLatestCachedAnalysis()?.html).toBe(
      '<main>Version two</main>',
    );
  });

  it('distinguishes long HTML versions that differ after the prompt trim limit', () => {
    const sharedPrefix = `<main>${'x'.repeat(12000)}`;
    const firstHtml = `${sharedPrefix}<div>Version one</div></main>`;
    const secondHtml = `${sharedPrefix}<div>Version two</div></main>`;

    service.cacheIssues(firstHtml, [issue]);
    service.cacheIssues(secondHtml, []);

    expect(service.getCachedIssues(firstHtml)).toEqual([issue]);
    expect(service.getCachedIssues(secondHtml)).toEqual([]);
  });

  it('prepares one HTML version for a fresh analysis', () => {
    service.cacheIssues('<main>Earlier</main>', [issue]);
    service.cacheIssues('<main>Current</main>', []);

    service.prepareForReanalysis('<main>Current</main>');

    expect(service.getCachedIssues('<main>Current</main>')).toBeNull();
    expect(service.getCachedIssues('<main>Earlier</main>')).toEqual([issue]);
    expect(service.getLatestCachedAnalysis()).toBeNull();
  });

  it('requires fresh analysis for generated HTML until that version is analyzed', () => {
    const generatedHtml = '<main><section class="alert">Generated</section></main>';
    service.cacheIssues(generatedHtml, [issue]);

    service.markAnalysisStale(generatedHtml);

    expect(service.getCachedIssues(generatedHtml)).toBeNull();

    service.cacheIssues(generatedHtml, []);

    expect(service.getCachedIssues(generatedHtml)).toEqual([]);
  });

  it('reports loading until a fresh analysis is cached', () => {
    const html = '<main><section class="alert">Current</section></main>';
    const states: Array<{ loading: boolean; error: boolean }> = [];
    service.analysisState$.subscribe((state) => {
      states.push({ loading: state.loading, error: state.error });
    });

    service.prepareForReanalysis(html);
    service.cacheIssues(html, []);

    expect(states).toEqual([
      { loading: true, error: false },
      { loading: false, error: false },
    ]);
  });

  it('reports a failed fresh analysis without marking it clean', () => {
    const html = '<main><section class="alert">Current</section></main>';
    let latestState: { loading: boolean; error: boolean } | undefined;
    service.analysisState$.subscribe((state) => {
      latestState = { loading: state.loading, error: state.error };
    });

    service.prepareForReanalysis(html);
    service.failAnalysis(html);

    expect(latestState).toEqual({ loading: false, error: true });
    expect(service.getCachedIssues(html)).toBeNull();
  });
});
