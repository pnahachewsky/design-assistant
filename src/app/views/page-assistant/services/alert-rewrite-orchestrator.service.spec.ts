/// <reference types="jasmine" />

import { TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';

import { AlertRewriteOrchestratorService } from './alert-rewrite-orchestrator.service';
import {
  AlertRewritePlan,
  AlertRewriteRepairCandidate,
  AlertRewriteResult,
  AlertRewriteService,
} from './alert-rewrite.service';
import {
  AlertRewriteGuardService,
  type AlertHtmlRewrite,
} from './alert-rewrite-guard.service';
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
    purposeTags: [],
    criteriaMatched: [],
    directives: [],
  } satisfies AlertRewritePlan;

  const originalHtml =
    '<div class="alert alert-info"><p>Original alert text <a href="/times">Check CRA processing times</a></p></div>';
  const includedIssue = {
    alertIndex: 1,
    category: 'Missing heading',
    include: true,
  };

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
      'parseAlertRewriteRepairCandidate',
      'selectExamples',
      'loadExamples',
      'detectExampleCopy',
      'buildPassthroughResult',
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
        'getFullSentenceLinkLeadInIssue',
        'repairEmbeddedStandaloneLeadInParagraphs',
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
        {
          provide: TranslateService,
          useValue: {
            instant: () => [
              'Based on your selections above',
              'Based on your selection above',
            ],
          },
        },
      ],
    });

    service = TestBed.inject(AlertRewriteOrchestratorService);

    alertRewriteGuardSpy.getIssuesForAlertIndex.and.returnValue([includedIssue]);
    alertRewriteGuardSpy.getAlertHeadingForRewrite.and.returnValue('');
    alertRewriteGuardSpy.getAlertTextForRewrite.and.returnValue(
      'Original alert text',
    );
    alertRewriteGuardSpy.shouldAllowAlertLinkRemoval.and.returnValue(false);
    alertRewriteGuardSpy.hasSemanticHeading.and.returnValue(false);
    alertRewriteGuardSpy.containsLinkPlaceholderSyntax.and.returnValue(false);
    alertRewriteGuardSpy.hasFullSentenceLinkWithoutAllowedLeadIn.and.returnValue(true);
    alertRewriteGuardSpy.getFullSentenceLinkLeadInIssue.and.returnValue(
      'fullSentenceLinksNeedLeadIn',
    );
    alertRewriteGuardSpy.repairEmbeddedStandaloneLeadInParagraphs.and.callFake(
      (html: string) => html,
    );
    alertRewriteGuardSpy.tryLocalAlertRewriteRepair.and.returnValue(null);
    alertRewriteGuardSpy.ensureSemanticHeading.and.callFake(
      (html: string, heading: string) =>
        `<div class="alert alert-info"><h3>${heading}</h3><p>Processing of Form T2201 is delayed.</p><p>Check <a href="/times">Check CRA processing times</a>.</p></div>`,
    );
    alertRewriteGuardSpy.applyAlertHtmlRewrites.and.callFake(
      (_html: string, rewrites: AlertHtmlRewrite[]) => {
        return rewrites[0]?.rewritten_alert_html || '';
      },
    );

    alertRewriteSpy.inferAlertType.and.returnValue('info');
    alertRewriteSpy.buildHeuristicPlan.and.returnValue(plan);
    alertRewriteSpy.buildAlertRewriteMessages.and.resolveTo([]);
    alertRewriteSpy.parseAlertRewriteResponse.and.returnValue(softFailureCandidate);
    alertRewriteSpy.parseAlertRewriteRepairCandidate.and.returnValue(
      softFailureCandidate,
    );
    alertRewriteSpy.selectExamples.and.returnValue([]);
    alertRewriteSpy.loadExamples.and.resolveTo([]);
    alertRewriteSpy.detectExampleCopy.and.returnValue({ isCopy: false });
    alertRewriteSpy.buildPassthroughResult.and.returnValue({
      rewrittenAlertHtml: originalHtml,
      rewrittenHeading: '',
      rewrittenAlert: 'Original alert text',
      appliedDirectives: [],
      exampleIdsUsed: [],
    });

    urlDataSpy.formatHtml.and.callFake(async (html: string) => html);
  });

  it('keeps a soft-failure rewrite after retries and inserts the fallback heading', async () => {
    const callOpenRouterForMessages = jasmine
      .createSpy('callOpenRouterForMessages')
      .and.resolveTo({
        text: '{"rewrittenAlertHtml":"ignored"}',
        usedModel: AiModel.NemotronSuper,
      });

    const result = await service.generateRecommendations({
      html: originalHtml,
      issues: [],
      model: AiModel.NemotronSuper,
      headers: {},
      url: 'https://example.test',
      mode: AlertRewriteMode.GoodResultsOnly,
      includeExamples: false,
      useCompactAlertsPageContext: false,
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

  it('repairs an embedded valid lead-in before retrying', async () => {
    const embeddedCandidate: AlertRewriteResult = {
      rewrittenAlertHtml:
        '<div class="alert alert-info"><h3>Benefit increase</h3><p>The benefit will increase by 25% starting in July 2026. Learn about the <a href="/benefit">Canada Groceries and Essentials Benefit</a>.</p></div>',
      rewrittenHeading: 'Benefit increase',
      rewrittenAlert:
        'The benefit will increase by 25% starting in July 2026. Learn about the Canada Groceries and Essentials Benefit.',
      appliedDirectives: [],
      exampleIdsUsed: [],
    };
    const repairedHtml =
      '<div class="alert alert-info"><h3>Benefit increase</h3><p>The benefit will increase by 25% starting in July 2026.</p><p>Learn about the <a href="/benefit">Canada Groceries and Essentials Benefit</a></p></div>';
    const repairedCandidate: AlertRewriteResult = {
      ...embeddedCandidate,
      rewrittenAlertHtml: repairedHtml,
    };

    alertRewriteGuardSpy.hasSemanticHeading.and.returnValue(true);
    alertRewriteGuardSpy.getFullSentenceLinkLeadInIssue.and.returnValues(
      'linkLeadInNotStandalone',
      null,
    );
    alertRewriteGuardSpy.repairEmbeddedStandaloneLeadInParagraphs.and.returnValue(
      repairedHtml,
    );
    alertRewriteSpy.parseAlertRewriteResponse.and.returnValues(
      embeddedCandidate,
      repairedCandidate,
    );

    const callOpenRouterForMessages = jasmine
      .createSpy('callOpenRouterForMessages')
      .and.resolveTo({
        text: '{"rewrittenAlertHtml":"ignored"}',
        usedModel: AiModel.NemotronSuper,
      });

    const result = await service.generateRecommendations({
      html: originalHtml,
      issues: [],
      model: AiModel.NemotronSuper,
      headers: {},
      url: 'https://example.test',
      mode: AlertRewriteMode.GoodResultsOnly,
      includeExamples: false,
      useCompactAlertsPageContext: false,
      forceLocalRepairForTesting: false,
      callOpenRouterForMessages,
      getShortModelName: (model) => model,
    });

    expect(callOpenRouterForMessages).toHaveBeenCalledTimes(1);
    expect(alertRewriteGuardSpy.tryLocalAlertRewriteRepair).not.toHaveBeenCalled();
    expect(result.formattedHtml).toContain(repairedHtml);
  });

  it('attempts local repair from a partial response when wrapper html is invalid on every retry', async () => {
    const partialCandidate: AlertRewriteRepairCandidate = {
      rewrittenAlertHtml:
        '<h3>Benefit increase</h3><p>The benefit will increase by 25% starting in July 2026.</p><p>Learn about the <a href="/benefit">Canada Groceries and Essentials Benefit</a>.</p>',
      rewrittenHeading: 'Benefit increase',
      rewrittenAlert:
        'The benefit will increase by 25% starting in July 2026. Learn about the Canada Groceries and Essentials Benefit.',
      appliedDirectives: [],
      exampleIdsUsed: [],
    };
    const repairedResult: AlertRewriteResult = {
      rewrittenAlertHtml:
        '<section class="alert alert-info"><h3>Benefit increase</h3><p>The benefit will increase by 25% starting in July 2026.</p><p>Learn about the <a href="/benefit">Canada Groceries and Essentials Benefit</a>.</p></section>',
      rewrittenHeading: 'Benefit increase',
      rewrittenAlert:
        'The benefit will increase by 25% starting in July 2026. Learn about the Canada Groceries and Essentials Benefit.',
      appliedDirectives: [],
      exampleIdsUsed: [],
    };

    alertRewriteSpy.parseAlertRewriteResponse.and.returnValue(null);
    alertRewriteSpy.parseAlertRewriteRepairCandidate.and.returnValue(partialCandidate);
    alertRewriteGuardSpy.tryLocalAlertRewriteRepair.and.returnValue(repairedResult);
    alertRewriteGuardSpy.ensureSemanticHeading.and.callFake((html: string) => html);
    alertRewriteGuardSpy.applyAlertHtmlRewrites.and.callFake(
      (_html: string, rewrites: AlertHtmlRewrite[]) => {
        return rewrites[0]?.rewritten_alert_html || '';
      },
    );

    const callOpenRouterForMessages = jasmine
      .createSpy('callOpenRouterForMessages')
      .and.resolveTo({
        text: '{"rewrittenAlertHtml":"<p>invalid</p>"}',
        usedModel: AiModel.NemotronSuper,
      });

    const result = await service.generateRecommendations({
      html: originalHtml,
      issues: [],
      model: AiModel.NemotronSuper,
      headers: {},
      url: 'https://example.test',
      mode: AlertRewriteMode.GoodResultsOnly,
      includeExamples: false,
      useCompactAlertsPageContext: false,
      forceLocalRepairForTesting: false,
      callOpenRouterForMessages,
      getShortModelName: (model) => model,
    });

    expect(callOpenRouterForMessages).toHaveBeenCalledTimes(2);
    expect(alertRewriteSpy.parseAlertRewriteRepairCandidate).toHaveBeenCalledTimes(2);
    expect(alertRewriteGuardSpy.tryLocalAlertRewriteRepair).toHaveBeenCalledWith(
      jasmine.objectContaining({
        result: partialCandidate,
        originalAlertHtml: originalHtml,
      }),
    );
    expect(alertRewriteSpy.buildPassthroughResult).not.toHaveBeenCalled();
    expect(result.formattedHtml).toContain(
      '<section class="alert alert-info"><h3>Benefit increase</h3>',
    );
  });

  it('returns retry reasons as UI fallback notices', async () => {
    alertRewriteSpy.parseAlertRewriteResponse.and.returnValue(null);
    alertRewriteSpy.parseAlertRewriteRepairCandidate.and.returnValue(null);
    alertRewriteGuardSpy.tryLocalAlertRewriteRepair.and.returnValue(null);

    const callOpenRouterForMessages = jasmine
      .createSpy('callOpenRouterForMessages')
      .and.resolveTo({
        text: '{"rewrittenAlertHtml":"<p>invalid</p>"}',
        usedModel: AiModel.NemotronSuper,
      });

    const result = await service.generateRecommendations({
      html: originalHtml,
      issues: [],
      model: AiModel.NemotronSuper,
      headers: {},
      url: 'https://example.test',
      mode: AlertRewriteMode.GoodResultsOnly,
      includeExamples: false,
      useCompactAlertsPageContext: false,
      forceLocalRepairForTesting: false,
      callOpenRouterForMessages,
      getShortModelName: (model) => model,
    });

    expect(alertRewriteSpy.buildPassthroughResult).toHaveBeenCalledWith(
      jasmine.objectContaining({
        alertHtml: originalHtml,
        originalAlertText: 'Original alert text',
      }),
    );
    expect(result.fallbackNotices).toEqual([
      {
        alertIndex: 1,
        reasons: ['invalidWrapperHtml'],
      },
    ]);
  });
});
