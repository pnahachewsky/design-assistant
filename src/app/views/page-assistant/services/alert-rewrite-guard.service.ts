import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {
  AlertRewriteExample,
  AlertRewriteIssueInput,
  AlertRewritePlan,
  AlertRewriteResult,
  AlertRewriteService,
} from './alert-rewrite.service';
import {
  coerceInteractiveResultLeadIns,
  getReportableAlerts,
} from './alert-reportable.utils';

export interface AlertHtmlRewrite {
  alert_index: number;
  rewritten_alert_html: string;
}

@Injectable({ providedIn: 'root' })
export class AlertRewriteGuardService {
  private alertRewrite = inject(AlertRewriteService);
  private translate = inject(TranslateService);

  // Extracts the alert body text used by planning and copy-detection logic.
  getAlertTextForRewrite(alertElement: Element): string {
    const firstParagraph = alertElement.querySelector('p');
    const paragraphText = firstParagraph?.textContent?.trim() || '';
    if (paragraphText) return paragraphText;
    return (alertElement.textContent || '').trim();
  }

  // Pulls the alert heading so rewrite prompts and diagnostics can preserve it.
  getAlertHeadingForRewrite(alertElement: Element): string {
    const headingEl = alertElement.querySelector<HTMLElement>('h1, h2, h3, h4, h5, h6');
    return (headingEl?.textContent || '').trim();
  }

  // Keeps per-alert issues aligned with the alert being rewritten while still
  // preserving any global issues that apply to every alert.
  getIssuesForAlertIndex(
    issues: AlertRewriteIssueInput[],
    alertIndex: number,
  ): AlertRewriteIssueInput[] {
    const hasIndexedIssues = issues.some((issue) => Number.isFinite(issue.alertIndex));
    const globalIssues = issues.filter((issue) => !Number.isFinite(issue.alertIndex));
    const specificIssues = issues.filter((issue) => issue.alertIndex === alertIndex);

    if (!hasIndexedIssues) {
      return issues;
    }
    if (specificIssues.length) {
      return [...globalIssues, ...specificIssues];
    }
    return globalIssues;
  }

  // Placeholder link tokens are always invalid at this stage because the final
  // rewrite contract expects real anchors or plain text.
  containsLinkPlaceholderSyntax(value: string): boolean {
    return /\[(?:\/?\s*LINK|END\s+LINK)\]/i.test(value || '');
  }

  // Alerts must expose a semantic heading for screen reader navigation.
  hasSemanticHeading(alertHtml: string): boolean {
    try {
      const doc = new DOMParser().parseFromString(alertHtml, 'text/html');
      return !!doc.body.querySelector('h1, h2, h3, h4, h5, h6');
    } catch {
      return false;
    }
  }

  // Final heading insertion keeps the wrapper valid if retries and local repair
  // still return body-only content.
  ensureSemanticHeading(alertHtml: string, headingText: string): string {
    try {
      const doc = new DOMParser().parseFromString(alertHtml, 'text/html');
      const root = doc.body.firstElementChild as HTMLElement | null;
      if (!root) return alertHtml;
      if (root.querySelector('h1, h2, h3, h4, h5, h6')) return root.outerHTML.trim();

      const normalizedHeading = (headingText || '').trim();
      if (!normalizedHeading) return root.outerHTML.trim();

      const headingEl = doc.createElement('h3');
      headingEl.textContent = normalizedHeading;
      root.insertBefore(headingEl, root.firstChild);
      return root.outerHTML.trim();
    } catch {
      return alertHtml;
    }
  }

  // Rejects outputs where link-direction text is malformed:
  // link-only sentences, embedded lead-ins, or lead-ins in the wrong paragraph shape.
  hasFullSentenceLinkWithoutAllowedLeadIn(alertHtml: string): boolean {
    try {
      const doc = new DOMParser().parseFromString(alertHtml, 'text/html');
      const root = doc.body.firstElementChild as HTMLElement | null;
      if (!root) return false;

      const blocks = this.getLeadInCheckBlocks(root, doc);
      return blocks.some((block) => {
        const anchors = Array.from(block.querySelectorAll('a'));
        if (!anchors.length) return false;

        const markerPrefix = '[[link:';
        const markerSuffix = ']]';
        const paragraphWithMarkers = this.normalizeLeadInText(
          Array.from(block.childNodes)
            .map((node) => {
              if (
                node.nodeType === Node.ELEMENT_NODE &&
                (node as Element).tagName.toLowerCase() === 'a'
              ) {
                const anchorText = this.normalizeLeadInText(node.textContent || '');
                return `${markerPrefix}${anchorText}${markerSuffix}`;
              }
              return node.textContent || '';
            })
            .join(' '),
        );
        if (!paragraphWithMarkers) return false;

        const sentences = paragraphWithMarkers
          .match(/[^.!?]+[.!?]?/g)
          ?.map((sentence) => sentence.trim())
          .filter((sentence) => !!sentence) ?? [];
        if (!sentences.length) return false;

        return sentences.some((sentence) => {
          if (!sentence.includes(markerPrefix)) return false;

          const sentenceWithoutLinks = this.normalizeLeadInText(
            sentence.replace(/\[\[link:[^\]]+\]\]/g, ' '),
          );
          const leadInText = sentenceWithoutLinks
            .replace(/[.!?]\s*$/g, '')
            .trim();
          const hasAllowedLeadIn = this.isValidStandaloneLinkLeadIn(leadInText);
          const hasDirectionalLeadIn = this.hasDirectionalLinkLeadIn(leadInText);
          const nonLinkText = sentenceWithoutLinks.replace(
            /[:;,.!?()\-\u2013\u2014]/g,
            '',
          ).trim();
          const linkSentenceOnly = !nonLinkText;

          if (hasAllowedLeadIn && sentences.length > 1) {
            return true;
          }

          if (hasAllowedLeadIn) {
            return false;
          }

          if (hasDirectionalLeadIn) {
            return true;
          }

          return linkSentenceOnly;
        });
      });
    } catch {
      return false;
    }
  }

  // Local repair is the last deterministic cleanup pass after model retries are exhausted.
  // It fixes wrapper/link issues without making another network call.
  tryLocalAlertRewriteRepair(params: {
    result: AlertRewriteResult;
    originalAlertHtml: string;
    originalHeading?: string;
    originalAlertText: string;
    plan: AlertRewritePlan;
    selectedExamples: AlertRewriteExample[];
    allowLinkRemoval: boolean;
  }): AlertRewriteResult | null {
    const originalHasAnchor = /<a\b/i.test(params.originalAlertHtml);

    const initialCandidate = this.alertRewrite.parseAlertRewriteResponse(
      JSON.stringify({
        rewrittenAlertHtml: this.stripLinkPlaceholders(
          params.result.rewrittenAlertHtml || '',
        ),
        rewrittenHeading: this.stripLinkPlaceholders(
          params.result.rewrittenHeading || '',
        ),
        rewrittenAlert: this.stripLinkPlaceholders(params.result.rewrittenAlert || ''),
        appliedDirectives: params.result.appliedDirectives,
        exampleIdsUsed: params.result.exampleIdsUsed,
      }),
      params.plan,
      params.selectedExamples,
    );

    const wrapperFallbackHtml =
      this.buildAlertWrapperFromOriginal({
        originalAlertHtml: params.originalAlertHtml,
        heading:
          this.stripLinkPlaceholders(params.result.rewrittenHeading || '') ||
          params.originalHeading ||
          '',
        text:
          this.stripLinkPlaceholders(params.result.rewrittenAlert || '') ||
          params.originalAlertText,
      }) || '';

    let candidate = initialCandidate;
    if (!candidate?.rewrittenAlertHtml && wrapperFallbackHtml) {
      candidate = this.alertRewrite.parseAlertRewriteResponse(
        JSON.stringify({
          rewrittenAlertHtml: wrapperFallbackHtml,
          rewrittenHeading:
            this.stripLinkPlaceholders(params.result.rewrittenHeading || '') ||
            params.originalHeading ||
            '',
          rewrittenAlert:
            this.stripLinkPlaceholders(params.result.rewrittenAlert || '') ||
            params.originalAlertText,
          appliedDirectives: params.result.appliedDirectives,
          exampleIdsUsed: params.result.exampleIdsUsed,
        }),
        params.plan,
        params.selectedExamples,
      );
    }

    if (!candidate?.rewrittenAlertHtml) return null;

    let repairedHtml = candidate.rewrittenAlertHtml;
    if (!originalHasAnchor) {
      repairedHtml = this.removeAnchorsPreservingText(repairedHtml);
    } else if (!params.allowLinkRemoval && !/<a\b/i.test(repairedHtml)) {
      repairedHtml = this.ensureAtLeastOneOriginalLink(
        repairedHtml,
        params.originalAlertHtml,
      );
    }
    if (!this.hasSemanticHeading(repairedHtml)) {
      repairedHtml = this.ensureSemanticHeading(
        repairedHtml,
        candidate.rewrittenHeading || params.originalHeading || '',
      );
    }

    const repaired = this.alertRewrite.parseAlertRewriteResponse(
      JSON.stringify({
        rewrittenAlertHtml: repairedHtml,
        rewrittenHeading: candidate.rewrittenHeading,
        rewrittenAlert: candidate.rewrittenAlert,
        appliedDirectives: candidate.appliedDirectives,
        exampleIdsUsed: candidate.exampleIdsUsed,
      }),
      params.plan,
      params.selectedExamples,
    );
    if (!repaired?.rewrittenAlertHtml) return null;

    if (
      this.containsLinkPlaceholderSyntax(repaired.rewrittenAlertHtml) ||
      this.containsLinkPlaceholderSyntax(repaired.rewrittenAlert)
    ) {
      return null;
    }

    const repairedHasAnchor = /<a\b/i.test(repaired.rewrittenAlertHtml);
    if (!this.hasSemanticHeading(repaired.rewrittenAlertHtml)) return null;
    if (!originalHasAnchor && repairedHasAnchor) return null;
    if (originalHasAnchor && !repairedHasAnchor && !params.allowLinkRemoval) {
      return null;
    }
    if (
      repairedHasAnchor &&
      this.hasFullSentenceLinkWithoutAllowedLeadIn(repaired.rewrittenAlertHtml)
    ) {
      return null;
    }

    const copyCheck = this.alertRewrite.detectExampleCopy({
      result: repaired,
      selectedExamples: params.selectedExamples,
      originalHeading: params.originalHeading,
      originalAlertText: params.originalAlertText,
    });
    if (copyCheck.isCopy) return null;

    return repaired;
  }

  // The rewrite may only drop links when the issue list or plan explicitly supports it.
  shouldAllowAlertLinkRemoval(
    issues: AlertRewriteIssueInput[],
    plan: AlertRewritePlan,
  ): boolean {
    const hasTooManyLinksIssue = issues.some((issue) =>
      (issue.category || '').toLowerCase().includes('too many links'),
    );
    return (
      hasTooManyLinksIssue ||
      plan.criteriaMatched.includes('C3_too_many_links') ||
      plan.directives.some((directive) => directive.op === 'limit_links')
    );
  }

  // Applies the successful per-alert rewrites back onto the original document.
  applyAlertHtmlRewrites(
    originalHtml: string,
    rewrites: AlertHtmlRewrite[],
  ): string | null {
    if (!rewrites.length) return null;

    const parser = new DOMParser();
    const doc = parser.parseFromString(originalHtml, 'text/html');
    const alerts = getReportableAlerts(doc, {
      interactiveResultLeadIns: this.getInteractiveResultLeadIns(),
    });
    if (!alerts.length) return null;

    for (const rewrite of rewrites) {
      const target = alerts[rewrite.alert_index - 1];
      if (!target) continue;
      const updatedDoc = parser.parseFromString(rewrite.rewritten_alert_html, 'text/html');
      const updatedEl = updatedDoc.body.firstElementChild;
      if (!updatedEl || !updatedEl.classList.contains('alert')) continue;
      target.replaceWith(updatedEl);
    }

    return doc.body.outerHTML;
  }

  // The remaining helpers support the guard logic above and stay private so the
  // orchestration layer only depends on the high-level validation/repair API.
  private normalizeLeadInText(value: string): string {
    return (value || '')
      .toLowerCase()
      .replace(/\s+/g, ' ')
      .trim();
  }

  // Reuses paragraph validation when present, and falls back to direct alert-body
  // nodes when the model omits paragraph wrappers entirely.
  private getLeadInCheckBlocks(root: HTMLElement, doc: Document): HTMLElement[] {
    const blocks = Array.from(root.querySelectorAll('p'));
    const fallback = doc.createElement('div');

    Array.from(root.childNodes).forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        if ((node.textContent || '').trim()) {
          fallback.appendChild(node.cloneNode(true));
        }
        return;
      }
      if (node.nodeType !== Node.ELEMENT_NODE) return;

      const element = node as HTMLElement;
      const tagName = element.tagName.toLowerCase();
      if (/^h[1-6]$/.test(tagName) || tagName === 'p') return;
      fallback.appendChild(element.cloneNode(true));
    });

    if (fallback.querySelector('a')) {
      blocks.push(fallback);
    }

    return blocks;
  }

  private getInteractiveResultLeadIns(): string[] {
    return coerceInteractiveResultLeadIns(
      this.translate.instant('page.alerts.interactiveResultLeadIns'),
    );
  }

  private isValidStandaloneLinkLeadIn(leadInText: string): boolean {
    const normalized = this.normalizeLeadInText(
      leadInText.replace(/[.!?]\s*$/g, ''),
    );
    if (!normalized) return false;

    if (
      normalized === 'refer to:' ||
      normalized === 'learn more:' ||
      /^learn about(?: the)?$/.test(normalized)
    ) {
      return true;
    }
    return normalized.startsWith('find out');
  }

  // Broader than the valid-lead-in check: used to catch malformed directional
  // sentences such as "refer to <link>" inside a substantive paragraph.
  private hasDirectionalLinkLeadIn(leadInText: string): boolean {
    const normalized = this.normalizeLeadInText(
      leadInText.replace(/[.!?]\s*$/g, ''),
    );
    if (!normalized) return false;

    return /\blearn more\b/.test(normalized);
  }

  private stripLinkPlaceholders(value: string): string {
    return (value || '').replace(/\[(?:\/?\s*LINK|END\s+LINK)\]/gi, '').trim();
  }

  // Converts unexpected anchors back to plain text when the original alert had no links.
  private removeAnchorsPreservingText(alertHtml: string): string {
    try {
      const doc = new DOMParser().parseFromString(alertHtml, 'text/html');
      const root = doc.body.firstElementChild as HTMLElement | null;
      if (!root) return alertHtml;
      root.querySelectorAll('a').forEach((anchor) => {
        const textNode = doc.createTextNode(anchor.textContent || '');
        anchor.replaceWith(textNode);
      });
      return root.outerHTML.trim();
    } catch {
      return alertHtml;
    }
  }

  // Restores one original link when the rewrite incorrectly removed a required anchor.
  private ensureAtLeastOneOriginalLink(
    rewrittenHtml: string,
    originalAlertHtml: string,
  ): string {
    try {
      const sourceDoc = new DOMParser().parseFromString(originalAlertHtml, 'text/html');
      const sourceAnchor = sourceDoc.body.querySelector('a');
      if (!sourceAnchor) return rewrittenHtml;

      const rewrittenDoc = new DOMParser().parseFromString(rewrittenHtml, 'text/html');
      const root = rewrittenDoc.body.firstElementChild as HTMLElement | null;
      if (!root) return rewrittenHtml;
      if (root.querySelector('a')) return root.outerHTML.trim();

      const target = (root.querySelector('p, li, div, span') || root) as HTMLElement;
      target.insertAdjacentHTML('beforeend', ` ${sourceAnchor.outerHTML}`);
      return root.outerHTML.trim();
    } catch {
      return rewrittenHtml;
    }
  }

  // Rebuilds a minimal alert wrapper when the model returns usable text but invalid structure.
  private buildAlertWrapperFromOriginal(params: {
    originalAlertHtml: string;
    heading: string;
    text: string;
  }): string | null {
    try {
      const sourceDoc = new DOMParser().parseFromString(
        params.originalAlertHtml,
        'text/html',
      );
      const sourceRoot = sourceDoc.body.firstElementChild as HTMLElement | null;

      const doc = document.implementation.createHTMLDocument('');
      const wrapperTag = sourceRoot?.tagName?.toLowerCase() || 'div';
      const wrapper = doc.createElement(wrapperTag);
      wrapper.setAttribute(
        'class',
        sourceRoot?.getAttribute('class') || 'alert alert-info',
      );

      const headingText = (params.heading || '').trim();
      if (headingText) {
        const headingEl = doc.createElement('h3');
        headingEl.textContent = headingText;
        wrapper.appendChild(headingEl);
      }

      const bodyText = (params.text || '').trim();
      if (bodyText) {
        const bodyEl = doc.createElement('p');
        bodyEl.textContent = bodyText;
        wrapper.appendChild(bodyEl);
      }

      return wrapper.outerHTML.trim();
    } catch {
      return null;
    }
  }
}
