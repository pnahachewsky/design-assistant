import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AlertIssuesContextService {
  // Builds the compact alert-analysis payload used when we want the model to
  // reason over structured page signals instead of parsing the full page HTML.
  buildCompactAlertsIssuesPayload(sourceHtml: string): Record<string, unknown> {
    const parser = new DOMParser();
    const doc = parser.parseFromString(sourceHtml, 'text/html');
    const alerts = Array.from(doc.querySelectorAll('.alert'));
    const main = (doc.querySelector('main') as HTMLElement | null) || doc.body;
    const h2Elements = Array.from(main.querySelectorAll('h2'));
    const h2Headings = h2Elements
      .map((h2) => this.truncateContextText(h2.textContent || '', 120))
      .filter((value) => !!value)
      .slice(0, 20);

    const mainElements = Array.from(main.querySelectorAll('*'));
    const mainIndexMap = new Map<Element, number>(
      mainElements.map((el, idx) => [el, idx]),
    );
    const h2IndexPairs = h2Elements
      .map((h2) => ({
        text: this.truncateContextText(h2.textContent || '', 120),
        idx: mainIndexMap.get(h2),
      }))
      .filter((item) => Number.isFinite(item.idx)) as { text: string; idx: number }[];
    const firstH2Index = h2IndexPairs.length ? h2IndexPairs[0].idx : -1;

    const title = this.truncateContextText(
      doc.querySelector('title')?.textContent || '',
      120,
    );
    const h1 = this.truncateContextText(
      main.querySelector('h1')?.textContent || '',
      120,
    );
    const introSnippet = this.truncateContextText(
      main.querySelector('p')?.textContent || '',
      280,
    );
    const pageTypeSignal = this.inferPageTypeSignal(title, h1);

    // Per-alert placement cues help the issues model judge relevance,
    // proximity to headings, and whether the alert appears in a sensible spot.
    const alertPlacementContext = alerts.map((alertEl, index) => {
      const mainIndex = mainIndexMap.get(alertEl);
      const positionPercentInMain =
        typeof mainIndex === 'number' && mainElements.length > 1
          ? Math.round((mainIndex / (mainElements.length - 1)) * 100)
          : null;

      const beforeCandidates = h2IndexPairs.filter(
        (item) => typeof mainIndex === 'number' && item.idx < mainIndex,
      );
      const afterCandidates = h2IndexPairs.filter(
        (item) => typeof mainIndex === 'number' && item.idx > mainIndex,
      );
      const nearestH2Above = beforeCandidates.length
        ? beforeCandidates[beforeCandidates.length - 1].text
        : '';
      const nearestH2Below = afterCandidates.length ? afterCandidates[0].text : '';

      return {
        alert_index: index + 1,
        is_before_first_h2:
          typeof mainIndex === 'number' && firstH2Index >= 0
            ? mainIndex < firstH2Index
            : false,
        position_percent_in_main: positionPercentInMain,
        nearest_h2_above: nearestH2Above,
        nearest_h2_below: nearestH2Below,
        section_snippet_before: this.collectSiblingTextSnippet(alertEl, 'before', 220),
        section_snippet_after: this.collectSiblingTextSnippet(alertEl, 'after', 220),
      };
    });

    // Per-alert structural signals let the prompt focus on judgment instead of
    // repeatedly inferring link counts, heading presence, hidden content, etc.
    const alertSignals = alerts.map((alertEl, index) => {
      const heading = this.getAlertHeadingMetadata(alertEl);
      const links = this.getAlertLinks(alertEl);
      const paragraphCount = this.getAlertParagraphCount(alertEl);
      const visibleText = this.truncateContextText(alertEl.textContent || '', 400);
      const previousSiblingIsAlert =
        alertEl.previousElementSibling?.classList.contains('alert') ?? false;
      const nextSiblingIsAlert =
        alertEl.nextElementSibling?.classList.contains('alert') ?? false;

      return {
        alert_index: index + 1,
        alert_type: this.getAlertTypeClass(alertEl),
        heading_text: heading.text,
        heading_level: heading.level,
        heading_source: heading.source,
        heading_tag: heading.tag,
        has_heading: heading.source !== 'none',
        paragraph_count: paragraphCount,
        has_multiple_paragraphs: paragraphCount > 1,
        text_length_chars: visibleText.length,
        link_count: links.length,
        has_multiple_links: links.length > 1,
        links,
        has_hidden_content: this.hasHiddenAlertContent(alertEl),
        previous_sibling_is_alert: previousSiblingIsAlert,
        next_sibling_is_alert: nextSiblingIsAlert,
        adjacent_alert_cluster_size: this.getAdjacentAlertClusterSize(alertEl),
      };
    });

    const alertsBeforeFirstH2Count = alertPlacementContext.filter(
      (item) => item.is_before_first_h2,
    ).length;
    const adjacentAlertCount = alertSignals.filter(
      (item) => item.previous_sibling_is_alert || item.next_sibling_is_alert,
    ).length;

    return {
      alerts: alerts.map((alertEl) => alertEl.outerHTML),
      alertCount: alerts.length,
      pageContext: `Title: ${title || 'N/A'}\nH1: ${h1 || 'N/A'}\nPage type signal: ${pageTypeSignal}\nMain intro: ${introSnippet || 'N/A'}\nH2 headings (${h2Headings.length}): ${h2Headings.join(' | ') || 'N/A'}`,
      pageSignals: {
        title,
        h1,
        pageTypeSignal,
        h2Headings,
        alertCount: alerts.length,
        hasMultipleAlerts: alerts.length > 1,
        alertsBeforeFirstH2Count,
        adjacentAlertCount,
      },
      alertPlacementContext,
      // Compact mode precomputes structural alert checks so the issues skill can spend more reasoning on judgment than HTML parsing.
      alertSignals,
    };
  }

  // Normalizes page text into short snippets so the compact payload stays cheap.
  private truncateContextText(
    value: string | null | undefined,
    maxChars: number,
  ): string {
    const normalized = (value || '').replace(/\s+/g, ' ').trim();
    if (!normalized) return '';
    return normalized.length > maxChars
      ? normalized.slice(0, maxChars).trim()
      : normalized;
  }

  // Pulls nearby sibling text so alerts carry a little surrounding context
  // without shipping the whole DOM back to the model.
  private collectSiblingTextSnippet(
    alertEl: Element,
    direction: 'before' | 'after',
    maxChars: number,
  ): string {
    const collected: string[] = [];
    let node =
      direction === 'before'
        ? alertEl.previousElementSibling
        : alertEl.nextElementSibling;
    let hops = 0;

    while (node && hops < 4) {
      const lowerTag = node.tagName.toLowerCase();
      if (
        lowerTag !== 'script' &&
        lowerTag !== 'style' &&
        !node.classList.contains('alert')
      ) {
        const text = this.truncateContextText(node.textContent || '', maxChars);
        if (text) {
          if (direction === 'before') {
            collected.unshift(text);
          } else {
            collected.push(text);
          }
          const joined = this.truncateContextText(collected.join(' '), maxChars);
          if (joined.length >= maxChars) {
            return joined;
          }
        }
      }
      node =
        direction === 'before'
          ? node.previousElementSibling
          : node.nextElementSibling;
      hops += 1;
    }

    return this.truncateContextText(collected.join(' '), maxChars);
  }

  // A coarse page-type hint gives the issues prompt lightweight task-vs-content context.
  private inferPageTypeSignal(title: string, h1: string): string {
    const context = `${title} ${h1}`.toLowerCase();
    if (!context.trim()) return 'content';
    if (/\b(home|welcome|overview|what'?s new|landing)\b/.test(context)) {
      return 'landing';
    }
    if (/\b(apply|submit|file|register|sign in|log in|payment|pay|request)\b/.test(context)) {
      return 'task';
    }
    return 'content';
  }

  // Supports alert headings that use utility classes instead of semantic heading tags.
  private getHeadingUtilityLevel(element: Element | null): number | null {
    if (!element) return null;
    for (let level = 1; level <= 6; level += 1) {
      if (element.classList.contains(`h${level}`)) {
        return level;
      }
    }
    return null;
  }

  // Normalizes heading metadata so downstream prompts can reason over one shape
  // regardless of whether the alert used semantic headings or utility classes.
  private getAlertHeadingMetadata(alertElement: Element): {
    text: string;
    level: number | null;
    source: 'semantic' | 'utility-class' | 'none';
    tag: string;
  } {
    const semanticHeading = alertElement.querySelector<HTMLElement>(
      'h1, h2, h3, h4, h5, h6',
    );
    if (semanticHeading) {
      const headingLevel = Number(semanticHeading.tagName.slice(1));
      return {
        text: this.truncateContextText(semanticHeading.textContent || '', 160),
        level: Number.isFinite(headingLevel) ? headingLevel : null,
        source: 'semantic',
        tag: semanticHeading.tagName.toLowerCase(),
      };
    }

    const utilityHeading = alertElement.querySelector<HTMLElement>(
      '.h1, .h2, .h3, .h4, .h5, .h6',
    );
    const utilityLevel = this.getHeadingUtilityLevel(utilityHeading);
    if (utilityHeading && utilityLevel) {
      return {
        text: this.truncateContextText(utilityHeading.textContent || '', 160),
        level: utilityLevel,
        source: 'utility-class',
        tag: utilityHeading.tagName.toLowerCase(),
      };
    }

    return {
      text: '',
      level: null,
      source: 'none',
      tag: '',
    };
  }

  // Reduces the alert class list to the alert type signal the prompt cares about.
  private getAlertTypeClass(alertElement: Element): string {
    const classNames = Array.from(alertElement.classList).map((name) =>
      name.toLowerCase(),
    );
    if (classNames.includes('alert-danger') || classNames.includes('alert-error')) {
      return 'danger';
    }
    if (classNames.includes('alert-warning')) {
      return 'warning';
    }
    if (classNames.includes('alert-success')) {
      return 'success';
    }
    if (classNames.includes('alert-info')) {
      return 'info';
    }
    return 'unknown';
  }

  // Extracts links in a compact form so prompts can reason over link count and intent.
  private getAlertLinks(alertElement: Element): Array<{ text: string; href: string }> {
    return Array.from(alertElement.querySelectorAll<HTMLAnchorElement>('a[href]'))
      .map((anchor) => ({
        text: this.truncateContextText(anchor.textContent || '', 120),
        href: (anchor.getAttribute('href') || '').trim(),
      }))
      .filter((link) => !!link.href);
  }

  // Hidden or collapsible content inside an alert is a useful accessibility signal.
  private hasHiddenAlertContent(alertElement: Element): boolean {
    return Boolean(
      alertElement.querySelector(
        'details, [hidden], [aria-hidden="true"], [aria-expanded], .wb-toggle, .collapse, .collapsible, .accordion, [data-toggle]',
      ),
    );
  }

  // Counts body paragraphs while ignoring utility-class heading wrappers.
  private getAlertParagraphCount(alertElement: Element): number {
    return Array.from(alertElement.querySelectorAll('p')).filter((paragraph) => {
      const text = this.truncateContextText(paragraph.textContent || '', 80);
      return !!text && !this.getHeadingUtilityLevel(paragraph);
    }).length;
  }

  // Adjacent alerts are a strong overload signal, so we calculate the whole cluster size.
  private getAdjacentAlertClusterSize(alertElement: Element): number {
    let clusterSize = 1;

    let previous = alertElement.previousElementSibling;
    while (previous?.classList.contains('alert')) {
      clusterSize += 1;
      previous = previous.previousElementSibling;
    }

    let next = alertElement.nextElementSibling;
    while (next?.classList.contains('alert')) {
      clusterSize += 1;
      next = next.nextElementSibling;
    }

    return clusterSize;
  }
}
