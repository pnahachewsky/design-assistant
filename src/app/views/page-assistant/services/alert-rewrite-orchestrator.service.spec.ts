import { TestBed } from '@angular/core/testing';

import { AlertRewriteOrchestratorService } from './alert-rewrite-orchestrator.service';
import {
  AlertRewritePlan,
  AlertRewriteResult,
  AlertRewriteService,
} from './alert-rewrite.service';
import { AlertRewriteGuardService } from './alert-rewrite-guard.service';
import { UrlDataService } from './url-data.service';
import { AiModel, AlertRewriteMode } from '../data/data.model';

describe('AlertRewriteOrchestratorService', () => {
  let service: AlertRewriteOrchestratorService;
  let alertRewriteSpy: jasmine.SpyObj<AlertRewriteService>;
  let alertRewriteGuardSpy: jasmine.SpyObj<AlertRewriteGuardService>;
  let urlDataSpy: jasmine.SpyObj<UrlDataService>;

  const plan = {
    alertType: 'info',
    domainTags: [],
    criteriaMatched: [],
    directives: [],
  } satisfies AlertRewritePlan;

  const originalHtml =
    '<div class="alert alert-info"><p>Original alert text <a href="/times">Check CRA processing times</a></p></div>';

  const softFailureCandidate: AlertRewriteResult = {
    rewrittenAlertHtml:
      '<div class="alert alert-info"><p>Processing of Form T2201 is delayed.</p><p>Check <a href="/times">Check CRA processing times</a>.</p></div>',
    rewrittenHeading: '[GenAI failure: include a heading]',
    rewrittenAlert: 'Processing of Form T2201 is delayed. Check current processing times.',
    appliedDirectives: [],
    exampleIdsUsed: [],
  };

  beforeEach(() => {
    spyOn(globalThis, 'fetch').and.rejectWith(new Error('test rules fetch failure'));

    alertRewriteSpy = jasmine.createSpyObj<AlertRewriteService>('AlertRewriteService', [
      'buildHeuristicPlan',
      'inferAlertType',
      'buildAlertRewriteMessages',
      'parseAlertRewriteResponse',
      'selectExamples',
      'loadExamples',
      'detectExampleCopy',
    ]);
    alertRewriteGuardSpy = jasmine.createSpyObj<AlertRewriteGuardService>(
      'AlertRewriteGuardService',
      [
        'getIssuesForAlertIndex',
        'getAlertHeadingForRewrite',
        'getAlertTextForRewrite',
        'shouldAllowAlertLinkRemoval',
        'hasSemanticHeading',
        'containsLinkPlaceholderSyntax',
        'hasFullSentenceLinkWithoutAllowedLeadIn',
        'tryLocalAlertRewriteRepair',
        'ensureSemanticHeading',
        'applyAlertHtmlRewrites',
      ],
    );
    urlDataSpy = jasmine.createSpyObj<UrlDataService>('UrlDataService', ['formatHtml']);

    TestBed.configureTestingModule({
      providers: [
        AlertRewriteOrchestratorService,
        { provide: AlertRewriteService, useValue: alertRewriteSpy },
        { provide: AlertRewriteGuardService, useValue: alertRewriteGuardSpy },
        { provide: UrlDataService, useValue: urlDataSpy },
      ],
    });

    service = TestBed.inject(AlertRewriteOrchestratorService);

    alertRewriteGuardSpy.getIssuesForAlertIndex.and.returnValue([]);
    alertRewriteGuardSpy.getAlertHeadingForRewrite.and.returnValue('');
    alertRewriteGuardSpy.getAlertTextForRewrite.and.returnValue(
      'Original alert text',
    );
    alertRewriteGuardSpy.shouldAllowAlertLinkRemoval.and.returnValue(false);
    alertRewriteGuardSpy.hasSemanticHeading.and.returnValue(false);
    alertRewriteGuardSpy.containsLinkPlaceholderSyntax.and.returnValue(false);
    alertRewriteGuardSpy.hasFullSentenceLinkWithoutAllowedLeadIn.and.returnValue(true);
    alertRewriteGuardSpy.tryLocalAlertRewriteRepair.and.returnValue(null);
    alertRewriteGuardSpy.ensureSemanticHeading.and.callFake((html, heading) =>
      `<div class="alert alert-info"><h3>${heading}</h3><p>Processing of Form T2201 is delayed.</p><p>Check <a href="/times">Check CRA processing times</a>.</p></div>`,
    );
    alertRewriteGuardSpy.applyAlertHtmlRewrites.and.callFake((_html, rewrites) => {
      return rewrites[0]?.rewritten_alert_html || '';
    });

    alertRewriteSpy.inferAlertType.and.returnValue('info');
    alertRewriteSpy.buildHeuristicPlan.and.returnValue(plan);
    alertRewriteSpy.buildAlertRewriteMessages.and.resolveTo([]);
    alertRewriteSpy.parseAlertRewriteResponse.and.returnValue(softFailureCandidate);
    alertRewriteSpy.selectExamples.and.returnValue([]);
    alertRewriteSpy.loadExamples.and.resolveTo([]);
    alertRewriteSpy.detectExampleCopy.and.returnValue({ isCopy: false });

    urlDataSpy.formatHtml.and.callFake(async (html: string) => html);
  });

  it('keeps a soft-failure rewrite after retries and inserts the fallback heading', async () => {
    const callOpenRouterForMessages = jasmine
      .createSpy('callOpenRouterForMessages')
      .and.resolveTo({
        text: '{"rewrittenAlertHtml":"ignored"}',
        usedModel: AiModel.NemotronNano,
      });

    const result = await service.generateRecommendations({
      html: originalHtml,
      issues: [],
      model: AiModel.NemotronNano,
      headers: {},
      url: 'https://example.test',
      mode: AlertRewriteMode.GoodResultsOnly,
      includeExamples: false,
      includeBeforeTextInExamples: false,
      includeLinkWritingRules: false,
      forceLocalRepairForTesting: false,
      callOpenRouterForMessages,
      getShortModelName: (model) => model,
    });

    expect(callOpenRouterForMessages).toHaveBeenCalledTimes(2);
    expect(alertRewriteGuardSpy.tryLocalAlertRewriteRepair).toHaveBeenCalledTimes(1);
    expect(alertRewriteGuardSpy.ensureSemanticHeading).toHaveBeenCalledWith(
      softFailureCandidate.rewrittenAlertHtml,
      '[GenAI failure: include a heading]',
    );
    expect(result.formattedHtml).toContain(
      '<h3>[GenAI failure: include a heading]</h3>',
    );
    expect(result.formattedHtml).toContain(
      'Check <a href="/times">Check CRA processing times</a>.',
    );
  });
});
