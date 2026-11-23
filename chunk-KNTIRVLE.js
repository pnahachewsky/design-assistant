import {
  Injectable,
  TranslateService,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-MB4XCYRB.js";

// src/app/common/alert-rewrite-status.utils.ts
var PLACEMENT_REVIEW_NOTICE_SELECTOR = '[data-alert-rewrite-status="placement-review"]';
function removeAlertRewritePlacementReviewNotices(root) {
  root.querySelectorAll(PLACEMENT_REVIEW_NOTICE_SELECTOR).forEach((notice) => notice.remove());
}

// src/app/components/compare/compare-problems/design-components/alerts/alert-reportable.utils.ts
var HIDDEN_STYLE_RE = /(display\s*:\s*none|visibility\s*:\s*hidden)/i;
var HIDDEN_CLASS_NAMES = /* @__PURE__ */ new Set(["hidden", "hide", "d-none", "is-hidden", "wb-inv"]);
var IGNORED_ALERT_IDS = /* @__PURE__ */ new Set(["norun"]);
function getReportableAlerts(root, options) {
  return Array.from(root.querySelectorAll(".alert")).filter((alert) => !alert.parentElement?.closest(".alert") && !isConditionalInteractiveAlert(alert, options));
}
function getReportableAlertsFromHtml(sourceHtml, options) {
  if (!sourceHtml)
    return [];
  const doc = new DOMParser().parseFromString(sourceHtml, "text/html");
  return getReportableAlerts(doc, options);
}
function coerceInteractiveResultLeadIns(value) {
  if (!Array.isArray(value))
    return [];
  return value.filter((item) => typeof item === "string").map((item) => item.trim()).filter((item) => !!item);
}
function isConditionalInteractiveAlert(alert, options) {
  if (isAlertRewriteStatusMessage(alert))
    return true;
  if (isIgnoredAlertId(alert))
    return true;
  if (hasInteractiveResultLeadIn(alert, options?.interactiveResultLeadIns ?? [])) {
    return true;
  }
  return isHiddenAlert(alert);
}
function hasInteractiveResultLeadIn(alert, leadIns) {
  const normalizedLeadIns = leadIns.map(normalizeLeadInText).filter((leadIn) => !!leadIn);
  if (!normalizedLeadIns.length)
    return false;
  const firstLeadInCandidate = getFirstLeadInCandidate(alert);
  const normalizedCandidate = normalizeLeadInText(firstLeadInCandidate);
  return normalizedLeadIns.some((leadIn) => !!normalizedCandidate && normalizedCandidate.startsWith(leadIn));
}
function getFirstLeadInCandidate(alert) {
  for (const child of Array.from(alert.children)) {
    const tagName = child.tagName.toLowerCase();
    if (/^h[1-6]$/.test(tagName))
      continue;
    const text = (child.textContent || "").replace(/\s+/g, " ").trim();
    if (text)
      return text;
  }
  return (alert.textContent || "").replace(/\s+/g, " ").trim();
}
function isIgnoredAlertId(alert) {
  const id = (alert.getAttribute("id") || "").trim().toLowerCase();
  return !!id && IGNORED_ALERT_IDS.has(id);
}
function isAlertRewriteStatusMessage(alert) {
  return !!(alert.getAttribute("data-alert-rewrite-status") || "").trim();
}
function normalizeLeadInText(value) {
  return (value || "").replace(/\s+/g, " ").trim().toLowerCase().replace(/[:.]$/, "").trim();
}
function isHiddenAlert(alert) {
  if (alert.hasAttribute("hidden"))
    return true;
  if ((alert.getAttribute("aria-hidden") || "").trim().toLowerCase() === "true") {
    return true;
  }
  const style = (alert.getAttribute("style") || "").trim().toLowerCase();
  if (style && HIDDEN_STYLE_RE.test(style))
    return true;
  return Array.from(alert.classList).some((className) => HIDDEN_CLASS_NAMES.has(className.toLowerCase()));
}

// src/app/components/compare/compare-problems/design-components/alerts/alert-context.service.ts
var AlertContextService = class _AlertContextService {
  translate = inject(TranslateService);
  // Builds the compact alert-analysis payload used when we want the model to
  // reason over structured page signals instead of parsing the full page HTML.
  buildCompactAlertsIssuesPayload(sourceHtml) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(sourceHtml, "text/html");
    const context = this.buildCompactPageContext(doc);
    const alertPlacementContext = context.alerts.map((alertEl, index) => this.buildCompactAlertPlacementContext(alertEl, index + 1, context));
    const alertSignals = context.alerts.map((alertEl, index) => this.buildCompactAlertSignals(alertEl, index + 1, context));
    const alertsBeforeFirstH2Count = alertPlacementContext.filter((item) => item.is_before_first_h2).length;
    const adjacentAlertCount = alertSignals.filter((item) => item.previous_sibling_is_alert || item.next_sibling_is_alert).length;
    return {
      alerts: context.alerts.map((alertEl) => alertEl.outerHTML),
      pageSignals: {
        title: context.title,
        h1: context.h1,
        pageTypeSignal: context.pageTypeSignal,
        introSnippet: context.introSnippet,
        h2Headings: context.h2Headings,
        alertCount: context.alerts.length,
        hasMultipleAlerts: context.alerts.length > 1,
        alertsBeforeFirstH2Count,
        adjacentAlertCount
      },
      alertPlacementContext,
      alertSignals
    };
  }
  // Collects the shared page frame used by issue detection and rewrite prompts:
  // reportable alerts, heading landmarks, title/H1 context, and a coarse
  // page-type hint. Keeping this in one place prevents prompt paths from
  // drifting in how they understand the same source document.
  buildCompactPageContext(sourceDoc) {
    removeAlertRewritePlacementReviewNotices(sourceDoc);
    const alerts = getReportableAlerts(sourceDoc, {
      interactiveResultLeadIns: this.getInteractiveResultLeadIns()
    });
    const main = sourceDoc.querySelector("main") ?? sourceDoc.body;
    const h2Elements = Array.from(main.querySelectorAll("h2")).filter((h2) => !h2.closest(".alert"));
    const h2Headings = h2Elements.map((h2) => this.truncateContextText(h2.textContent || "", 120)).filter((value) => !!value).slice(0, 20);
    const mainElements = Array.from(main.querySelectorAll("*"));
    const mainIndexMap = new Map(mainElements.map((el, idx) => [el, idx]));
    const h2IndexPairs = h2Elements.map((h2) => ({
      text: this.truncateContextText(h2.textContent || "", 120),
      idx: mainIndexMap.get(h2)
    })).filter((item) => Number.isFinite(item.idx));
    const firstH2Index = h2IndexPairs.length ? h2IndexPairs[0].idx : -1;
    const title = this.truncateContextText(sourceDoc.querySelector("title")?.textContent || "", 200);
    const h1Element = main.querySelector("h1");
    const h1 = this.truncateContextText(h1Element?.textContent || "", 200);
    const introSnippet = this.extractIntroSnippet(main, h1Element);
    const pageTypeSignal = this.inferPageTypeSignal(title, h1);
    const alertsBeforeFirstH2Count = alerts.filter((alertEl) => {
      const mainIndex = mainIndexMap.get(alertEl);
      return typeof mainIndex === "number" && firstH2Index >= 0 && mainIndex < firstH2Index;
    }).length;
    return {
      alerts,
      main,
      h2Elements,
      h2Headings,
      mainElements,
      mainIndexMap,
      h2IndexPairs,
      firstH2Index,
      title,
      h1,
      introSnippet,
      pageTypeSignal,
      alertsBeforeFirstH2Count
    };
  }
  // Converts an alert's DOM position into section-aware context: before/after
  // the first H2, nearest surrounding H2s, and nearby body text.
  buildCompactAlertPlacementContext(alertElement, alertIndex, context) {
    const mainIndex = context.mainIndexMap.get(alertElement);
    const positionPercentInMain = typeof mainIndex === "number" && context.mainElements.length > 1 ? Math.round(mainIndex / (context.mainElements.length - 1) * 100) : null;
    const beforeCandidates = context.h2IndexPairs.filter((item) => typeof mainIndex === "number" && item.idx < mainIndex);
    const afterCandidates = context.h2IndexPairs.filter((item) => typeof mainIndex === "number" && item.idx > mainIndex);
    const nearestH2Above = beforeCandidates.length ? beforeCandidates[beforeCandidates.length - 1].text : "";
    const nearestH2Below = afterCandidates.length ? afterCandidates[0].text : "";
    return {
      alert_index: alertIndex,
      is_before_first_h2: typeof mainIndex === "number" && context.firstH2Index >= 0 ? mainIndex < context.firstH2Index : false,
      position_percent_in_main: positionPercentInMain,
      nearest_h2_above: nearestH2Above,
      nearest_h2_below: nearestH2Below,
      section_snippet_before: this.collectSiblingTextSnippet(alertElement, "before", 220),
      section_snippet_after: this.collectSiblingTextSnippet(alertElement, "after", 220)
    };
  }
  // Builds the per-alert facts that commonly drive issue decisions.
  buildCompactAlertSignals(alertElement, alertIndex, context) {
    const heading = this.getAlertHeadingMetadata(alertElement);
    const links = this.getAlertLinks(alertElement);
    const paragraphCount = this.getAlertParagraphCount(alertElement);
    const visibleText = this.truncateContextText(alertElement.textContent || "", 400);
    const flowElement = this.getMainFlowElement(alertElement, context.main);
    const previousSiblingIsAlert = this.containsReportableAlert(flowElement.previousElementSibling, context.alerts);
    const nextSiblingIsAlert = this.containsReportableAlert(flowElement.nextElementSibling, context.alerts);
    return {
      alert_index: alertIndex,
      alert_type: this.getAlertTypeClass(alertElement),
      heading_text: heading.text,
      heading_level: heading.level,
      heading_source: heading.source,
      heading_tag: heading.tag,
      has_heading: heading.source !== "none",
      paragraph_count: paragraphCount,
      has_multiple_paragraphs: paragraphCount > 1,
      text_length_chars: visibleText.length,
      link_count: links.length,
      has_multiple_links: links.length > 1,
      links,
      has_hidden_content: this.hasHiddenAlertContent(alertElement),
      previous_sibling_is_alert: previousSiblingIsAlert,
      next_sibling_is_alert: nextSiblingIsAlert,
      adjacent_alert_cluster_size: this.getAdjacentAlertClusterSize(flowElement, context.alerts)
    };
  }
  getInteractiveResultLeadIns() {
    return coerceInteractiveResultLeadIns(this.translate.instant("problems.alerts.interactiveResultLeadIns"));
  }
  // Collects the introductory region after the H1 until substantive page
  // content begins. Alerts and layout wrappers do not define the intro, while
  // headings and content components end it. At least one paragraph is required.
  extractIntroSnippet(main, h1Element) {
    if (!h1Element)
      return "";
    const introTags = /* @__PURE__ */ new Set(["P", "UL", "OL", "DL", "BLOCKQUOTE", "HR"]);
    const structuralTags = /* @__PURE__ */ new Set(["DIV", "SECTION", "ARTICLE"]);
    const ignoredTags = /* @__PURE__ */ new Set(["SCRIPT", "STYLE", "TEMPLATE"]);
    const introParts = [];
    const elements = Array.from(main.querySelectorAll("*"));
    const h1Index = elements.indexOf(h1Element);
    if (h1Index < 0)
      return "";
    let hasParagraph = false;
    let consumedIntroRoot = null;
    const buildSnippet = () => hasParagraph ? this.truncateContextText(introParts.join(" "), 350) : "";
    for (const element of elements.slice(h1Index + 1)) {
      if (h1Element.contains(element))
        continue;
      if (consumedIntroRoot?.contains(element))
        continue;
      consumedIntroRoot = null;
      if (element.closest('.alert, [hidden], [aria-hidden="true"]'))
        continue;
      if (ignoredTags.has(element.tagName))
        continue;
      if (structuralTags.has(element.tagName))
        continue;
      if (introTags.has(element.tagName)) {
        consumedIntroRoot = element;
        if (element.tagName === "HR")
          continue;
        const text = this.truncateContextText(element.textContent || "", 350);
        if (text) {
          introParts.push(text);
          hasParagraph ||= element.tagName === "P";
        }
        continue;
      }
      return buildSnippet();
    }
    return buildSnippet();
  }
  // Normalizes page text into short snippets so the compact payload stays cheap.
  truncateContextText(value, maxChars) {
    const normalized = (value || "").replace(/\s+/g, " ").trim();
    if (!normalized)
      return "";
    return normalized.length > maxChars ? normalized.slice(0, maxChars).trim() : normalized;
  }
  // Pulls nearby sibling text so alerts carry a little surrounding context
  // without shipping the whole DOM back to the model.
  collectSiblingTextSnippet(alertElement, direction, maxChars) {
    const collected = [];
    let node = direction === "before" ? alertElement.previousElementSibling : alertElement.nextElementSibling;
    let hops = 0;
    while (node && hops < 4) {
      const lowerTag = node.tagName.toLowerCase();
      if (lowerTag !== "script" && lowerTag !== "style" && !node.classList.contains("alert")) {
        const text = this.truncateContextText(node.textContent || "", maxChars);
        if (text) {
          if (direction === "before") {
            collected.unshift(text);
          } else {
            collected.push(text);
          }
          const joined = this.truncateContextText(collected.join(" "), maxChars);
          if (joined.length >= maxChars) {
            return joined;
          }
        }
      }
      node = direction === "before" ? node.previousElementSibling : node.nextElementSibling;
      hops += 1;
    }
    return this.truncateContextText(collected.join(" "), maxChars);
  }
  // A coarse page-type hint gives the issues prompt lightweight task-vs-content context.
  inferPageTypeSignal(title, h1) {
    const context = `${title} ${h1}`.toLowerCase();
    if (!context.trim())
      return "content";
    if (/\b(home|welcome|overview|what'?s new|landing)\b/.test(context)) {
      return "landing";
    }
    if (/\b(apply|submit|file|register|sign in|log in|payment|pay|request)\b/.test(context)) {
      return "task";
    }
    return "content";
  }
  // Supports alert headings that use utility classes instead of semantic heading tags.
  getHeadingUtilityLevel(element) {
    if (!element)
      return null;
    for (let level = 1; level <= 6; level += 1) {
      if (element.classList.contains(`h${level}`)) {
        return level;
      }
    }
    return null;
  }
  // Normalizes heading metadata so downstream prompts can reason over one shape
  // regardless of whether the alert used semantic headings or utility classes.
  getAlertHeadingMetadata(alertElement) {
    const semanticHeading = alertElement.querySelector("h1, h2, h3, h4, h5, h6");
    if (semanticHeading) {
      const headingLevel = Number(semanticHeading.tagName.slice(1));
      return {
        text: this.truncateContextText(semanticHeading.textContent || "", 160),
        level: Number.isFinite(headingLevel) ? headingLevel : null,
        source: "semantic",
        tag: semanticHeading.tagName.toLowerCase()
      };
    }
    const utilityHeading = alertElement.querySelector(".h1, .h2, .h3, .h4, .h5, .h6");
    const utilityLevel = this.getHeadingUtilityLevel(utilityHeading);
    if (utilityHeading && utilityLevel) {
      return {
        text: this.truncateContextText(utilityHeading.textContent || "", 160),
        level: utilityLevel,
        source: "utility-class",
        tag: utilityHeading.tagName.toLowerCase()
      };
    }
    return {
      text: "",
      level: null,
      source: "none",
      tag: ""
    };
  }
  // Reduces the alert class list to the alert type signal the prompt cares about.
  getAlertTypeClass(alertElement) {
    const classNames = Array.from(alertElement.classList).map((name) => name.toLowerCase());
    if (classNames.includes("alert-danger") || classNames.includes("alert-error")) {
      return "danger";
    }
    if (classNames.includes("alert-warning")) {
      return "warning";
    }
    if (classNames.includes("alert-success")) {
      return "success";
    }
    if (classNames.includes("alert-info")) {
      return "info";
    }
    return "unknown";
  }
  // Builds compact context for one alert rewrite. This path is useful when the
  // caller already has a specific alert element rather than a full alert list.
  buildCompactAlertRewritePayload(alertElement, sourceDoc, alertIndex) {
    const context = this.buildCompactPageContext(sourceDoc);
    return this.buildCompactAlertRewritePayloadFromContext(alertElement, alertIndex, context);
  }
  // Builds rewrite payloads for all reportable alerts while reusing the shared
  // page context. The orchestrator uses this batch path to avoid rescanning the
  // same document for every alert.
  buildCompactAlertRewritePayloads(sourceDoc) {
    const context = this.buildCompactPageContext(sourceDoc);
    return context.alerts.map((alertElement, index) => this.buildCompactAlertRewritePayloadFromContext(alertElement, index + 1, context));
  }
  buildCompactAlertRewritePayloadFromContext(alertElement, alertIndex, context) {
    const alertSignals = this.buildCompactAlertSignals(alertElement, alertIndex, context);
    const adjacentAlertCount = alertSignals.previous_sibling_is_alert || alertSignals.next_sibling_is_alert ? Math.max(alertSignals.adjacent_alert_cluster_size - 1, 0) : 0;
    return {
      alertIndex,
      alertType: this.getAlertTypeClass(alertElement),
      pageSignals: {
        title: context.title,
        h1: context.h1,
        pageTypeSignal: context.pageTypeSignal,
        introSnippet: context.introSnippet,
        h2Headings: context.h2Headings,
        alertCount: context.alerts.length,
        hasMultipleAlerts: context.alerts.length > 1,
        alertsBeforeFirstH2Count: context.alertsBeforeFirstH2Count,
        adjacentAlertCount,
        adjacentAlertClusterSize: alertSignals.adjacent_alert_cluster_size
      },
      alertPlacementContext: this.buildCompactAlertPlacementContext(alertElement, alertIndex, context),
      alertSignals
    };
  }
  // Extracts links in a compact form so prompts can reason over link count and intent.
  getAlertLinks(alertElement) {
    return Array.from(alertElement.querySelectorAll("a[href]")).map((anchor) => ({
      text: this.truncateContextText(anchor.textContent || "", 120),
      href: (anchor.getAttribute("href") || "").trim()
    })).filter((link) => !!link.href);
  }
  // Hidden or collapsible content inside an alert is a useful accessibility signal.
  hasHiddenAlertContent(alertElement) {
    return Boolean(alertElement.querySelector('details, [hidden], [aria-hidden="true"], [aria-expanded], .wb-toggle, .collapse, .collapsible, .accordion, [data-toggle]'));
  }
  // Counts body paragraphs while ignoring utility-class heading wrappers.
  getAlertParagraphCount(alertElement) {
    return Array.from(alertElement.querySelectorAll("p")).filter((paragraph) => {
      const text = this.truncateContextText(paragraph.textContent || "", 80);
      return !!text && !this.getHeadingUtilityLevel(paragraph);
    }).length;
  }
  // Counts the contiguous alert run that contains this alert, including itself.
  getAdjacentAlertClusterSize(flowElement, reportableAlerts) {
    let clusterSize = 1;
    let previous = flowElement.previousElementSibling;
    while (this.containsReportableAlert(previous, reportableAlerts)) {
      clusterSize += 1;
      previous = previous?.previousElementSibling ?? null;
    }
    let next = flowElement.nextElementSibling;
    while (this.containsReportableAlert(next, reportableAlerts)) {
      clusterSize += 1;
      next = next?.nextElementSibling ?? null;
    }
    return clusterSize;
  }
  // AEM and prototype pages often wrap an alert in a component div. Use the
  // direct child of <main> as the alert's page-flow element so adjacency
  // reflects rendered components rather than inner markup.
  getMainFlowElement(element, main) {
    let flowElement = element;
    while (flowElement.parentElement && flowElement.parentElement !== main) {
      flowElement = flowElement.parentElement;
    }
    return flowElement;
  }
  containsReportableAlert(element, reportableAlerts) {
    if (!element)
      return false;
    return reportableAlerts.some((alertElement) => element === alertElement || element.contains(alertElement));
  }
  static \u0275fac = function AlertContextService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AlertContextService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AlertContextService, factory: _AlertContextService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlertContextService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  removeAlertRewritePlacementReviewNotices,
  getReportableAlerts,
  getReportableAlertsFromHtml,
  coerceInteractiveResultLeadIns,
  AlertContextService
};
//# sourceMappingURL=chunk-KNTIRVLE.js.map
