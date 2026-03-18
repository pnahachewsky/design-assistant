import { Injectable, inject } from '@angular/core';
import { getAlertRewriteRules } from '../../../common/constants/alert-rewrite-rules.constants';
import { AlertRewriteMode, AiModel } from '../data/data.model';
import { UrlDataService } from './url-data.service';
import {
  AlertRewriteIssueInput,
  AlertRewriteResult,
  AlertRewriteService,
} from './alert-rewrite.service';
import { AlertRewriteGuardService } from './alert-rewrite-guard.service';

export interface OpenRouterMessageCaller {
  (
    model: AiModel,
    headers: Record<string, string>,
    url: string,
    messages: Array<{ role: string; content: string }>,
    contextLabel: string,
    temperature?: number,
  ): Promise<{ text: string; usedModel: string }>;
}

@Injectable({ providedIn: 'root' })
export class AlertRewriteOrchestratorService {
  private alertRewrite = inject(AlertRewriteService);
  private alertRewriteGuard = inject(AlertRewriteGuardService);
  private urlDataService = inject(UrlDataService);

  // Runs the full alert-rewrite workflow:
  // plan each alert, generate rewrites, apply retry/repair guards, then patch the page HTML.
  async generateRecommendations(params: {
    html: string;
    issues: AlertRewriteIssueInput[];
    model: AiModel;
    headers: Record<string, string>;
    url: string;
    mode: AlertRewriteMode;
    includeExamples: boolean;
    includeBeforeTextInExamples: boolean;
    includeLinkWritingRules: boolean;
    forceLocalRepairForTesting: boolean;
    callOpenRouterForMessages: OpenRouterMessageCaller;
    getShortModelName: (model: string) => string;
  }): Promise<{ formattedHtml: string }> {
    const start = performance.now();
    const rewriteRules = await getAlertRewriteRules();
    const retryInstructions = rewriteRules.alertRewrite.retryInstructions;

    const alertDoc = new DOMParser().parseFromString(params.html, 'text/html');
    const alertEls = Array.from(alertDoc.querySelectorAll('.alert'));
    if (!alertEls.length) {
      throw new Error('No .alert elements found in the page.');
    }

    const examples = params.includeExamples
      ? await this.alertRewrite.loadExamples()
      : [];
    const rewrites: Array<{
      alert_index: number;
      rewritten_alert_html: string;
    }> = [];

    // Each alert is planned and rewritten independently so a bad output for one
    // alert does not block the others from being generated.
    for (let i = 0; i < alertEls.length; i += 1) {
      const alertElement = alertEls[i];
      if (!alertElement) continue;
      const alertIndex = i + 1;
      const relevantIssues = this.alertRewriteGuard.getIssuesForAlertIndex(
        params.issues,
        alertIndex,
      );

      const alertHtml = alertElement.outerHTML;
      const originalHeading =
        this.alertRewriteGuard.getAlertHeadingForRewrite(alertElement);
      const alertText = this.alertRewriteGuard.getAlertTextForRewrite(alertElement);
      if (!alertText) continue;

      const initialPlan = this.alertRewrite.buildHeuristicPlan({
        alertHtml,
        alertText,
        alertType: this.alertRewrite.inferAlertType(alertHtml),
        issues: relevantIssues,
      });
      let plan = initialPlan;
      let planModelName = 'heuristic';

      // Advanced-planning mode adds a model-generated plan on top of the local heuristic plan.
      if (params.mode === AlertRewriteMode.AB) {
        const alertPlanningMessages =
          await this.alertRewrite.buildAlertPlanningMessages({
            alertHtml,
            alertText,
            alertType: initialPlan.alertType,
            issues: relevantIssues,
          });
        const alertPlanningResponse = await params.callOpenRouterForMessages(
          params.model,
          params.headers,
          params.url,
          alertPlanningMessages,
          `Alert ${alertIndex} alertPlanning`,
        );
        const parsedPlan = this.alertRewrite.parseAlertPlanningResponse(
          alertPlanningResponse.text,
          initialPlan,
        );
        if (parsedPlan) {
          plan = parsedPlan;
        }
        planModelName = params.getShortModelName(alertPlanningResponse.usedModel);
      }

      const selectedExamples = params.includeExamples
        ? this.alertRewrite.selectExamples(plan, examples, 2)
        : [];
      let rewriteResult = null;
      let rewriteModelName = 'unknown';
      let copyGuardTriggered = false;
      let blockedExampleId: string | null = null;
      let lastParsedResult: AlertRewriteResult | null = null;
      let softRejectedResult: AlertRewriteResult | null = null;
      let softRejectedReasons: string[] = [];
      let lastRetryReasons: string[] = [];
      const originalHasAnchor = /<a\b/i.test(alertHtml);
      const allowLinkRemoval = this.alertRewriteGuard.shouldAllowAlertLinkRemoval(
        relevantIssues,
        plan,
      );

      // We allow one retry with additional corrective instructions before
      // falling back to deterministic local repair.
      let retryInstructionsForAttempt: string[] = [];
      for (let attempt = 0; attempt < 2; attempt += 1) {
        // Rebuild the rewrite prompt on each attempt so any retry instructions
        // are appended to the style rules seen by the model.
        const alertRewriteMessages = await this.alertRewrite.buildAlertRewriteMessages({
          mode: params.mode,
          originalHeading,
          originalAlertText: alertText,
          originalAlertHtml: alertHtml,
          plan,
          issues: relevantIssues,
          examples: selectedExamples,
          includeBeforeTextInExamples: params.includeBeforeTextInExamples,
          includeLinkWritingRules: params.includeLinkWritingRules,
          retryInstructions: retryInstructionsForAttempt,
        });
        const rewriteResponse = await params.callOpenRouterForMessages(
          params.model,
          params.headers,
          params.url,
          alertRewriteMessages,
          `Alert ${alertIndex} alertRewrite`,
          attempt > 0 ? 0.2 : 0,
        );
        rewriteModelName = params.getShortModelName(rewriteResponse.usedModel);

        // Parse the model response back into the normalized rewrite contract
        // used by the rest of the pipeline. If parsing fails we cannot safely
        // patch the alert into the page, so we retry with a structure-specific instruction.
        const parsedResult = this.alertRewrite.parseAlertRewriteResponse(
          rewriteResponse.text,
          plan,
          selectedExamples,
        );
        console.warn('Alert rewrite parsed model output', {
          alertIndex,
          attempt: attempt + 1,
          rewrittenAlertHtml: parsedResult?.rewrittenAlertHtml,
          rewrittenAlert: parsedResult?.rewrittenAlert,
        });
        if (!parsedResult?.rewrittenAlertHtml) {
          console.warn('Alert rewrite retry triggered', {
            alertIndex,
            attempt: attempt + 1,
            reasons: ['invalidWrapperHtml'],
            reasonsText: 'invalidWrapperHtml',
            willRetryWithNewModelCall: true,
          });
          lastRetryReasons = ['invalidWrapperHtml'];
          retryInstructionsForAttempt = [retryInstructions.invalidWrapperHtml];
          continue;
        }
        lastParsedResult = parsedResult;

        const retryReasons: string[] = [];
        const retryInstructionsForResult: string[] = [];
        const addRetryInstruction = (reason: string, instruction: string): void => {
          retryReasons.push(reason);
          retryInstructionsForResult.push(instruction);
        };

        // Guard 1: semantic alert headings are required for accessibility.
        if (
          !this.alertRewriteGuard.hasSemanticHeading(parsedResult.rewrittenAlertHtml)
        ) {
          addRetryInstruction('mustHaveHeading', retryInstructions.mustHaveHeading);
        }

        // Guard 2: placeholder tokens are never valid final output. This catches
        // cases where the model copied a prompt convention instead of returning
        // real HTML anchors or plain text.
        const hasLinkPlaceholders =
          this.alertRewriteGuard.containsLinkPlaceholderSyntax(
            parsedResult.rewrittenAlertHtml,
          ) ||
          this.alertRewriteGuard.containsLinkPlaceholderSyntax(
            parsedResult.rewrittenAlert,
          );
        if (hasLinkPlaceholders) {
          addRetryInstruction('placeholderLinks', retryInstructions.placeholderLinks);
        }

        // Guard 3: compare link presence before vs after rewrite so we do not
        // accidentally add links that were never in the source alert.
        const rewrittenHasAnchor = /<a\b/i.test(parsedResult.rewrittenAlertHtml);
        if (!originalHasAnchor && rewrittenHasAnchor) {
          addRetryInstruction('noLinksAllowed', retryInstructions.noLinksAllowed);
        }

        // Guard 4: if the source alert had a required link, do not let the
        // rewrite drop it unless the issues/plan explicitly allow link removal.
        if (originalHasAnchor && !rewrittenHasAnchor && !allowLinkRemoval) {
          addRetryInstruction('mustKeepLink', retryInstructions.mustKeepLink);
        }

        // Guard 5: enforce the paragraph-level link-direction conventions
        // handled by AlertRewriteGuardService. This is where malformed
        // "refer to <link>" or link-only sentence patterns trigger a retry.
        if (
          rewrittenHasAnchor &&
          this.alertRewriteGuard.hasFullSentenceLinkWithoutAllowedLeadIn(
            parsedResult.rewrittenAlertHtml,
          )
        ) {
          addRetryInstruction(
            'fullSentenceLinksNeedLeadIn',
            retryInstructions.fullSentenceLinksNeedLeadIn,
          );
        }

        // Guard 6: if examples are enabled, reject outputs that are too close
        // to an example rewrite instead of specific to the current alert.
        const copyCheck = this.alertRewrite.detectExampleCopy({
          result: parsedResult,
          selectedExamples,
          originalHeading,
          originalAlertText: alertText,
        });
        if (copyCheck.isCopy) {
          copyGuardTriggered = true;
          blockedExampleId = copyCheck.exampleId || null;
          addRetryInstruction('avoidExampleCopy', retryInstructions.avoidExampleCopy);
          console.warn('Alert rewrite copy guard triggered', {
            alertIndex,
            attempt: attempt + 1,
            reason: copyCheck.reason,
            exampleId: copyCheck.exampleId,
            similarity: copyCheck.similarity,
          });
        }

        if (retryReasons.length) {
          const hardRetryReasons = retryReasons.filter(
            (reason) =>
              reason !== 'mustHaveHeading' &&
              reason !== 'fullSentenceLinksNeedLeadIn',
          );
          if (!hardRetryReasons.length) {
            softRejectedResult = parsedResult;
            softRejectedReasons = [...retryReasons];
          }
          console.warn('Alert rewrite retry triggered', {
            alertIndex,
            attempt: attempt + 1,
            reasons: retryReasons,
            reasonsText: retryReasons.join(', '),
            willRetryWithNewModelCall: true,
          });
          lastRetryReasons = [...retryReasons];
          retryInstructionsForAttempt = Array.from(new Set(retryInstructionsForResult));
          continue;
        }

        if (!copyCheck.isCopy) {
          if (params.forceLocalRepairForTesting) {
            console.warn('Forcing local repair for testing', { alertIndex });
            break;
          }
          rewriteResult = parsedResult;
          break;
        }
      }

      // If model retries still fail, attempt one deterministic repair pass locally.
      if (!rewriteResult && lastParsedResult) {
        console.warn('Alert rewrite attempting local repair', {
          alertIndex,
          hadModelOutput: true,
          lastRetryReasons,
          lastRetryReasonsText: lastRetryReasons.join(', '),
          willRetryWithNewModelCall: false,
        });
        rewriteResult = this.alertRewriteGuard.tryLocalAlertRewriteRepair({
          result: lastParsedResult,
          originalAlertHtml: alertHtml,
          originalHeading,
          originalAlertText: alertText,
          plan,
          selectedExamples,
          allowLinkRemoval,
        });
      }

      if (!rewriteResult && softRejectedResult) {
        console.warn('Alert rewrite using soft-failure candidate', {
          alertIndex,
          softRejectedReasons,
          softRejectedReasonsText: softRejectedReasons.join(', '),
          willRetryWithNewModelCall: false,
        });
        rewriteResult = softRejectedResult;
        lastRetryReasons = [...softRejectedReasons];
      }

      // Final safety net: preserve the original alert rather than dropping it.
      if (!rewriteResult) {
        console.warn('Alert rewrite falling back to passthrough result', {
          alertIndex,
          lastRetryReasons,
          lastRetryReasonsText: lastRetryReasons.join(', '),
          willRetryWithNewModelCall: false,
        });
        rewriteResult = this.alertRewrite.buildPassthroughResult({
          alertHtml,
          originalHeading,
          originalAlertText: alertText,
        });
      }
      rewriteResult.rewrittenAlertHtml = this.alertRewriteGuard.ensureSemanticHeading(
        rewriteResult.rewrittenAlertHtml,
        rewriteResult.rewrittenHeading,
      );

      // At this point we have exactly one final rewrite for the current alert,
      // whether it came from the model, local repair, or passthrough fallback.
      rewrites.push({
        alert_index: alertIndex,
        rewritten_alert_html: rewriteResult.rewrittenAlertHtml,
      });

      // These debug logs keep a clean distinction between the examples we
      // selected and the subset the model explicitly reported using.
      const examplesUsedDetails = rewriteResult.exampleIdsUsed
        .map((id) => selectedExamples.find((example) => example.id === id))
        .filter((example): example is NonNullable<typeof example> => !!example)
        .map((example) => ({
          id: example.id,
          alertType: example.alertType,
          criteria: example.criteria,
          tags: example.tags,
          headingBefore: example.headingBefore || '',
          headingAfter: example.headingAfter || '',
          before: example.before,
          after: example.after,
        }));

      console.log('Alert rewrite examples used', {
        alertIndex,
        exampleIdsUsed: rewriteResult.exampleIdsUsed,
        examplesUsedDetails,
      });

      console.log('Alert rewrite iteration', {
        mode: params.mode,
        alertIndex,
        plan,
        selectedExampleIds: selectedExamples.map((example) => example.id),
        originalHeading,
        finalHeading: rewriteResult.rewrittenHeading,
        finalRewrite: rewriteResult.rewrittenAlert,
        finalRewriteHtml: rewriteResult.rewrittenAlertHtml,
        appliedDirectives: rewriteResult.appliedDirectives,
        exampleIdsUsed: rewriteResult.exampleIdsUsed,
        planModel: planModelName,
        rewriteModel: rewriteModelName,
        copyGuardTriggered,
        blockedExampleId,
        lastRetryReasons,
        humanRating: null,
      });
    }

    // Once each alert has a final rewrite, patch them back into the original page.
    const finalHtml = this.alertRewriteGuard.applyAlertHtmlRewrites(
      params.html,
      rewrites,
    );
    if (!finalHtml) {
      throw new Error('No alert rewrites were generated.');
    }

    console.log('Alert rewrite model + time', {
      requestedModel: params.model,
      mode: params.mode,
      rewrites: rewrites.length,
      ms: Math.round(performance.now() - start),
    });

    // Keep final output formatting consistent with the rest of the assistant flow.
    const formattedHtml = await this.urlDataService.formatHtml(finalHtml, 'ai');
    return { formattedHtml };
  }
}
