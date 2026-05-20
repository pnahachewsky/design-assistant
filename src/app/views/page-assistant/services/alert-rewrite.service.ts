import { Injectable } from '@angular/core';
import { ChatMessage } from './openrouter.service';
import { AlertRewriteMode } from '../data/data.model';
import { getLinkWritingRules } from '../../../common/constants/link-writing.constants';
import { getAlertRewriteRules } from '../../../common/constants/alert-rewrite-rules.constants';
import { getCanadaCaStyleRules } from '../../../common/constants/canada-ca-style.constants';

export interface AlertRewriteIssueInput {
  alertIndex?: number;
  category?: string;
  severity?: string;
  description?: string;
  recommendation?: string;
  include?: boolean;
}

export interface AlertRewriteDirective {
  op: string;
  value?: string | number;
}

export interface AlertRewritePlan {
  alertType: string;
  domainTags: string[];
  purposeTags: string[];
  criteriaMatched: string[];
  directives: AlertRewriteDirective[];
}

export interface AlertRewriteExample {
  id: string;
  alertType: string;
  tags: string[];
  purposeTags?: string[];
  criteria: string[];
  before: string;
  after: string;
  headingBefore?: string;
  headingAfter?: string;
  updatedHtml?: string;
  linksBefore?: AlertRewriteExampleLink[];
  linksAfter?: AlertRewriteExampleLink[];
  linkEdits?: AlertRewriteExampleLinkEdit[];
  notes?: string;
}

export interface AlertRewriteExampleLink {
  id: string;
  text: string;
  href?: string;
}

export interface AlertRewriteExampleLinkEdit {
  id: string;
  action: 'keep' | 'rename' | 'remove' | 'add';
  beforeText?: string;
  afterText?: string;
  note?: string;
}

export interface AlertRewriteResult {
  rewrittenAlertHtml: string;
  rewrittenHeading: string;
  rewrittenAlert: string;
  appliedDirectives: string[];
  exampleIdsUsed: string[];
}

// Repair candidates may carry invalid wrapper HTML, but still preserve usable
// heading/body fields for deterministic local recovery.
export interface AlertRewriteRepairCandidate {
  rewrittenAlertHtml: string;
  rewrittenHeading: string;
  rewrittenAlert: string;
  appliedDirectives: string[];
  exampleIdsUsed: string[];
}

export interface AlertRewriteCopyCheck {
  isCopy: boolean;
  exampleId?: string;
  reason?: string;
  similarity?: number;
}

export interface AlertRewriteInput {
  alertHtml: string;
  alertText: string;
  alertType: string;
  issues: AlertRewriteIssueInput[];
}

@Injectable({ providedIn: 'root' })
export class AlertRewriteService {
  private readonly examplesPath = new URL(
    'ai-prompts/alerts-rewrite-examples.json',
    document.baseURI,
  ).toString();
  private examplesCache: AlertRewriteExample[] | null = null;

  async loadExamples(): Promise<AlertRewriteExample[]> {
    if (this.examplesCache) {
      return this.examplesCache;
    }
    try {
      const response = await fetch(this.examplesPath);
      if (!response.ok) {
        throw new Error(`Failed to load alert examples (${response.status}).`);
      }
      const payload = (await response.json()) as unknown;
      const rawExamples = Array.isArray(payload)
        ? payload
        : payload &&
            typeof payload === 'object' &&
            Array.isArray((payload as Record<string, unknown>)['examples'])
          ? ((payload as Record<string, unknown>)['examples'] as unknown[])
          : [];
      const parsed = rawExamples
        .map((raw) => this.toExample(raw))
        .filter((example): example is AlertRewriteExample => !!example);
      this.examplesCache = parsed;
      return parsed;
    } catch (err) {
      console.warn('Unable to load alert rewrite examples:', err);
      this.examplesCache = [];
      return [];
    }
  }

  inferAlertType(alertHtml: string): string {
    const lower = alertHtml.toLowerCase();
    if (lower.includes('alert-danger') || lower.includes('alert-error')) return 'error';
    if (lower.includes('alert-warning')) return 'warning';
    if (lower.includes('alert-success')) return 'success';
    return 'info';
  }

  buildHeuristicPlan(input: AlertRewriteInput): AlertRewritePlan {
    const criteriaMatched = this.inferCriteriaFromIssues(input.issues);
    const domainTags = this.inferDomainTags(input.alertText, input.issues);
    const purposeTags = this.inferPurposeTags(
      input.alertHtml,
      input.alertText,
      input.issues,
      criteriaMatched,
    );
    const directives: AlertRewriteDirective[] = [];

    if (criteriaMatched.includes('C1_missing_next_step')) {
      directives.push({ op: 'add_next_step' });
    }
    if (criteriaMatched.includes('C7_too_vague')) {
      directives.push({ op: 'specify_subject' });
    }
    directives.push({ op: 'add_heading' });
    directives.push({ op: 'avoid_jargon' });

    return {
      alertType: input.alertType || 'info',
      domainTags,
      purposeTags,
      criteriaMatched,
      directives: this.uniqueDirectives(directives),
    };
  }

  async buildAlertPlanningMessages(
    input: AlertRewriteInput,
  ): Promise<ChatMessage[]> {
    const rules = await getAlertRewriteRules();
    const systemPrompt = rules.alertPlanning.systemPromptLines.join('\n');
    const compactAlertText = this.toDescriptionSnippet(input.alertText, 500);
    const linkCount = (input.alertHtml.match(/<a\b/gi) || []).length;
    const issues = input.issues
      .map((issue) => {
        const category = this.cleanString(issue.category);
        const severity = this.cleanString(issue.severity);
        const description = this.cleanString(issue.description);
        const descriptionSnippet =
          category && this.shouldIncludePlanningDescriptionSnippet(category)
            ? this.toDescriptionSnippet(description, 140)
            : '';
        return {
          category,
          severity,
          ...(descriptionSnippet ? { descriptionSnippet } : {}),
        };
      })
      .filter((issue) => issue.category || issue.severity || issue.descriptionSnippet);

    const userPayload = {
      alertText: compactAlertText,
      alertType: input.alertType,
      signals: {
        hasHeading: /<h[1-6]\b/i.test(input.alertHtml || ''),
        hasLink: linkCount > 0,
        linkCount,
        wordCount: this.tokenizeComparisonText(input.alertText || '').length,
      },
      issues,
    };

    return [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: JSON.stringify(userPayload) },
    ];
  }

  parseAlertPlanningResponse(
    text: string,
    fallback: AlertRewritePlan,
  ): AlertRewritePlan | null {
    const parsed = this.looseJsonParse(this.stripCodeFences(text));
    if (!parsed || typeof parsed !== 'object') {
      return null;
    }
    const root = parsed as Record<string, unknown>;
    const alertType = this.cleanString(root['alertType']) || fallback.alertType;
    const domainTags = this.toStringArray(root['domainTags']);
    const purposeTags = this.toStringArray(root['purposeTags']);
    const criteriaMatched = this.toStringArray(root['criteriaMatched']);
    const rawDirectives = Array.isArray(root['directives']) ? root['directives'] : [];
    const directives = rawDirectives
      .map((raw) => this.toDirective(raw))
      .filter((directive): directive is AlertRewriteDirective => !!directive);

    return {
      alertType,
      domainTags: domainTags.length ? domainTags : fallback.domainTags,
      purposeTags: purposeTags.length ? purposeTags : fallback.purposeTags,
      criteriaMatched: criteriaMatched.length ? criteriaMatched : fallback.criteriaMatched,
      directives: directives.length ? this.uniqueDirectives(directives) : fallback.directives,
    };
  }

  selectExamples(
    plan: AlertRewritePlan,
    examples: AlertRewriteExample[],
    count = 2,
    context?: {
      originalHeading?: string;
      originalAlertText?: string;
    },
  ): AlertRewriteExample[] {
    const requestedCount = Math.max(1, count);
    const criteria = new Set(plan.criteriaMatched || []);
    const tags = new Set(plan.domainTags || []);
    const purposeTags = new Set(plan.purposeTags || []);
    const sourceText = this.normalizeComparisonText(
      `${context?.originalHeading || ''} ${context?.originalAlertText || ''}`,
    );

    const scored = examples.map((example) => {
      let score = 0;
      for (const purposeTag of example.purposeTags || []) {
        if (purposeTags.has(purposeTag)) score += 3;
      }
      for (const criterion of example.criteria || []) {
        if (criteria.has(criterion)) score += 2;
      }
      for (const tag of example.tags || []) {
        if (tags.has(tag)) score += 0.25;
      }
      score += this.calculateExampleTextRelevance(sourceText, example);
      return { example, score };
    });

    scored.sort((a, b) => b.score - a.score);

    const selected: AlertRewriteExample[] = [];
    const seenCriteriaSignatures = new Set<string>();

    for (const item of scored) {
      if (selected.length >= requestedCount) break;
      const signature = JSON.stringify((item.example.criteria || []).slice().sort());
      const isDuplicateSignature = seenCriteriaSignatures.has(signature);
      if (isDuplicateSignature && selected.length < requestedCount - 1) {
        continue;
      }
      selected.push(item.example);
      seenCriteriaSignatures.add(signature);
    }

    return selected;
  }

  async buildAlertRewriteMessages(params: {
    mode: AlertRewriteMode;
    originalAlertText: string;
    originalHeading?: string;
    originalAlertHtml: string;
    compactAlertPayload?: Record<string, unknown>;
    plan: AlertRewritePlan;
    issues: AlertRewriteIssueInput[];
    examples: AlertRewriteExample[];
    includeBeforeTextInExamples?: boolean;
    includeLinkWritingRules?: boolean;
    retryInstructions?: string[];
  }): Promise<ChatMessage[]> {
    const hasTooManyLinksIssue =
      params.plan.criteriaMatched.includes('C3_too_many_links') ||
      params.plan.directives.some((directive) => directive.op === 'limit_links');
    const originalHasLink = /<a\b/i.test(params.originalAlertHtml || '');
    const shouldIncludeLinkWritingRules =
      params.includeLinkWritingRules !== false && originalHasLink;
    const [linkRules, canadaCaStyleRules, rules] = await Promise.all([
      shouldIncludeLinkWritingRules
        ? getLinkWritingRules({
            hasTooManyLinksIssue,
          })
        : Promise.resolve([]),
      getCanadaCaStyleRules({
        includeExamples: true,
      }),
      getAlertRewriteRules(),
    ]);
    const styleRules = [
      ...rules.alertRewrite.styleRulesBase,
      ...canadaCaStyleRules,
      ...linkRules,
      ...(params.examples.length ? rules.alertRewrite.styleRulesWithExamples : []),
    ];
    if (this.hasAcceptableFinalStandaloneLinkSentence(params.originalAlertHtml)) {
      styleRules.push(
        'The original alert already ends with an acceptable standalone final link sentence or paragraph. Preserve that wording and placement unless a selected issue clearly requires a change.',
      );
    }
    const retryInstructions = Array.from(
      new Set(
        (params.retryInstructions || [])
          .map((instruction) => (instruction || '').trim())
          .filter((instruction) => !!instruction),
      ),
    );
    if (retryInstructions.length) {
      styleRules.push(...retryInstructions);
    }
    const includeBeforeText = params.includeBeforeTextInExamples === true;
    const rawIssues = params.issues
      .map((issue) => {
        const category = this.cleanString(issue.category);
        const severity = this.cleanString(issue.severity);
        const description = this.cleanString(issue.description);
        const recommendation = this.cleanString(issue.recommendation);
        const alertIndex =
          typeof issue.alertIndex === 'number' && Number.isFinite(issue.alertIndex)
            ? issue.alertIndex
            : undefined;
        const include =
          typeof issue.include === 'boolean' ? issue.include : undefined;

        if (
          !category &&
          !severity &&
          !description &&
          !recommendation &&
          alertIndex === undefined &&
          include === undefined
        ) {
          return null;
        }

        return {
          ...(alertIndex !== undefined ? { alertIndex } : {}),
          ...(category ? { category } : {}),
          ...(severity ? { severity } : {}),
          ...(description ? { description } : {}),
          ...(recommendation ? { recommendation } : {}),
          ...(include !== undefined ? { include } : {}),
        };
      })
      .filter((issue): issue is NonNullable<typeof issue> => !!issue);

    const planPayload =
      params.mode === AlertRewriteMode.AB
        ? params.plan
        : {
            alertType: params.plan.alertType,
            domainTags: params.plan.domainTags,
            purposeTags: params.plan.purposeTags,
            criteriaMatched: params.plan.criteriaMatched,
            directives: [],
          };

    const systemPrompt = (
      params.examples.length
        ? rules.alertRewrite.systemPromptWithExamplesLines
        : rules.alertRewrite.systemPromptWithoutExamplesLines
    ).join('\n');

    const userPayload = {
      mode: params.mode,
      styleRules,
      examples: params.examples.map((example) => ({
        id: example.id,
        ...(includeBeforeText
          ? {
              headingBefore: example.headingBefore || '',
              before: example.before,
              linksBefore: example.linksBefore || [],
            }
          : {}),
        headingAfter: example.headingAfter || '',
        after: example.after,
        updatedHtml: example.updatedHtml || '',
        criteria: example.criteria,
        tags: example.tags,
        purposeTags: example.purposeTags || [],
        linksAfter: example.linksAfter || [],
        linkEdits: example.linkEdits || [],
      })),
      plan: planPayload,
      issues: rawIssues,
      originalHeading: (params.originalHeading || '').trim(),
      originalAlertText: (params.originalAlertText || '').trim(),
      originalAlertHtml: (params.originalAlertHtml || '').trim(),
      ...(params.compactAlertPayload
        ? { compactAlertPayload: params.compactAlertPayload }
        : {}),
    };

    return [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: JSON.stringify(userPayload) },
    ];
  }

  private hasAcceptableFinalStandaloneLinkSentence(alertHtml: string): boolean {
    try {
      const doc = new DOMParser().parseFromString(alertHtml || '', 'text/html');
      const root = doc.body.firstElementChild as HTMLElement | null;
      if (!root) return false;

      const paragraphs = Array.from(root.querySelectorAll('p'));
      const lastParagraph = paragraphs[paragraphs.length - 1];
      if (!lastParagraph) return false;

      const anchors = Array.from(lastParagraph.querySelectorAll('a'));
      if (!anchors.length) return false;

      const markerPrefix = '[[link:';
      const markerSuffix = ']]';
      const paragraphWithMarkers = Array.from(lastParagraph.childNodes)
        .map((node) => {
          if (
            node.nodeType === Node.ELEMENT_NODE &&
            (node as Element).tagName.toLowerCase() === 'a'
          ) {
            const anchorText = (node.textContent || '').trim();
            return `${markerPrefix}${anchorText}${markerSuffix}`;
          }
          return node.textContent || '';
        })
        .join(' ')
        .replace(/\s+/g, ' ')
        .trim()
        .toLowerCase();
      if (!paragraphWithMarkers) return false;

      const sentences =
        paragraphWithMarkers
          .match(/[^.!?]+[.!?]?/g)
          ?.map((sentence) => sentence.trim())
          .filter((sentence) => !!sentence) ?? [];
      if (sentences.length !== 1) return false;

      return (
        /^find out\s+\[\[link:[^\]]+\]\][.!?]?$/.test(paragraphWithMarkers) ||
        /^learn about(?: the)?\s+\[\[link:[^\]]+\]\][.!?]?$/.test(paragraphWithMarkers) ||
        /^refer to:\s*\[\[link:[^\]]+\]\][.!?]?$/.test(paragraphWithMarkers) ||
        /^learn more:\s*\[\[link:[^\]]+\]\][.!?]?$/.test(paragraphWithMarkers)
      );
    } catch {
      return false;
    }
  }

  parseAlertRewriteResponse(
    text: string,
    plan: AlertRewritePlan,
    selectedExamples: AlertRewriteExample[],
  ): AlertRewriteResult | null {
    const parsed = this.looseJsonParse(this.stripCodeFences(text));
    if (!parsed || typeof parsed !== 'object') {
      return null;
    }
    // Some models return the right fields with snake_case names or nested under
    // output/result objects. Normalize that shape before enforcing the contract.
    const root = this.resolveAlertRewriteRoot(parsed);
    const rawAlertHtml = this.cleanStringFromKeys(root, [
      'rewrittenAlertHtml',
      'rewritten_alert_html',
      'alertHtml',
      'alert_html',
      'html',
    ]);
    const normalizedAlertHtml = this.normalizeAlertWrapperHtml(rawAlertHtml);
    if (!normalizedAlertHtml) {
      return null;
    }
    const parsedHeading = this.cleanStringFromKeys(root, [
      'rewrittenHeading',
      'rewritten_heading',
      'heading',
    ]);
    const rawAlert = this.cleanStringFromKeys(root, [
      'rewrittenAlert',
      'rewritten_alert',
      'alertText',
      'alert_text',
      'text',
    ]);
    const extractedHeading = this.extractHeadingFromAlertHtml(normalizedAlertHtml);
    const extractedBodyText = this.extractBodyTextFromAlertHtml(normalizedAlertHtml);
    const rewrittenHeading =
      parsedHeading || extractedHeading || this.buildFallbackHeading();
    const baseBodyText = rawAlert || extractedBodyText;
    if (!baseBodyText) return null;
    const rewrittenAlert = baseBodyText.trim();
    const appliedDirectives = this.toStringArray(
      root['appliedDirectives'] ?? root['applied_directives'],
    );
    const exampleIdsUsed = this.sanitizeExampleIdsUsed(
      this.toStringArray(root['exampleIdsUsed'] ?? root['example_ids_used']),
      selectedExamples,
    );

    return {
      rewrittenAlertHtml: normalizedAlertHtml,
      rewrittenHeading,
      rewrittenAlert,
      appliedDirectives,
      exampleIdsUsed,
    };
  }

  parseAlertRewriteRepairCandidate(
    text: string,
    selectedExamples: AlertRewriteExample[],
  ): AlertRewriteRepairCandidate | null {
    const parsed = this.looseJsonParse(this.stripCodeFences(text));
    if (!parsed || typeof parsed !== 'object') {
      // If the model ignored the JSON schema but returned usable alert HTML,
      // keep it as a local-repair candidate instead of forcing a hard failure.
      const rawHtml = this.extractAlertHtmlFragment(text);
      const normalizedHtml = this.normalizeAlertWrapperHtml(rawHtml);
      const rawText = normalizedHtml
        ? this.extractBodyTextFromAlertHtml(normalizedHtml)
        : this.extractBodyTextFromHtmlFragment(rawHtml);
      if (!rawHtml && !rawText) {
        return null;
      }
      return {
        rewrittenAlertHtml: normalizedHtml || rawHtml,
        rewrittenHeading:
          this.extractHeadingFromAlertHtml(rawHtml) || this.buildFallbackHeading(),
        rewrittenAlert: rawText,
        appliedDirectives: [],
        exampleIdsUsed: [],
      };
    }
    const root = this.resolveAlertRewriteRoot(parsed);
    const rawAlertHtml = this.cleanStringFromKeys(root, [
      'rewrittenAlertHtml',
      'rewritten_alert_html',
      'alertHtml',
      'alert_html',
      'html',
    ]);
    const normalizedAlertHtml = this.normalizeAlertWrapperHtml(rawAlertHtml);
    const parsedHeading = this.cleanStringFromKeys(root, [
      'rewrittenHeading',
      'rewritten_heading',
      'heading',
    ]);
    const rawAlert = this.cleanStringFromKeys(root, [
      'rewrittenAlert',
      'rewritten_alert',
      'alertText',
      'alert_text',
      'text',
    ]);
    const extractedHeading = normalizedAlertHtml
      ? this.extractHeadingFromAlertHtml(normalizedAlertHtml)
      : '';
    const extractedBodyText = normalizedAlertHtml
      ? this.extractBodyTextFromAlertHtml(normalizedAlertHtml)
      : this.extractBodyTextFromHtmlFragment(rawAlertHtml);
    const rewrittenHeading =
      parsedHeading || extractedHeading || this.buildFallbackHeading();
    const baseBodyText = rawAlert || extractedBodyText;
    if (!rawAlertHtml && !baseBodyText) {
      return null;
    }
    const appliedDirectives = this.toStringArray(
      root['appliedDirectives'] ?? root['applied_directives'],
    );
    const exampleIdsUsed = this.sanitizeExampleIdsUsed(
      this.toStringArray(root['exampleIdsUsed'] ?? root['example_ids_used']),
      selectedExamples,
    );

    return {
      rewrittenAlertHtml: normalizedAlertHtml || rawAlertHtml,
      rewrittenHeading,
      rewrittenAlert: (baseBodyText || '').trim(),
      appliedDirectives,
      exampleIdsUsed,
    };
  }

  detectExampleCopy(params: {
    result: AlertRewriteResult;
    selectedExamples: AlertRewriteExample[];
    originalHeading?: string;
    originalAlertText: string;
  }): AlertRewriteCopyCheck {
    const rewrittenCombined = this.normalizeComparisonText(
      `${params.result.rewrittenHeading || ''} ${params.result.rewrittenAlert || ''}`,
    );
    const originalCombined = this.normalizeComparisonText(
      `${params.originalHeading || ''} ${params.originalAlertText || ''}`,
    );
    if (!rewrittenCombined) {
      return { isCopy: false };
    }

    const rewrittenTokenCount = this.tokenizeComparisonText(rewrittenCombined).length;

    for (const example of params.selectedExamples) {
      const exampleCombined = this.normalizeComparisonText(
        `${example.headingAfter || ''} ${example.after || ''}`,
      );
      if (!exampleCombined) continue;

      const exampleBeforeCombined = this.normalizeComparisonText(
        `${example.headingBefore || ''} ${example.before || ''}`,
      );
      const originalSimilarity = this.calculateJaccardSimilarity(
        originalCombined,
        exampleCombined,
      );
      const sourceSimilarityToExampleBefore = this.calculateJaccardSimilarity(
        originalCombined,
        exampleBeforeCombined,
      );

      if (
        rewrittenCombined === exampleCombined &&
        rewrittenCombined !== originalCombined &&
        originalSimilarity < 0.8 &&
        sourceSimilarityToExampleBefore < 0.8
      ) {
        return {
          isCopy: true,
          exampleId: example.id,
          reason: 'exact-example-match',
          similarity: 1,
        };
      }

      if (rewrittenTokenCount < 8) continue;
      const similarity = this.calculateJaccardSimilarity(
        rewrittenCombined,
        exampleCombined,
      );

      if (
        similarity >= 0.92 &&
        originalSimilarity < 0.8 &&
        sourceSimilarityToExampleBefore < 0.8
      ) {
        return {
          isCopy: true,
          exampleId: example.id,
          reason: 'near-example-match',
          similarity,
        };
      }
    }

    return { isCopy: false };
  }

  buildPassthroughResult(params: {
    alertHtml: string;
    originalHeading?: string;
    originalAlertText: string;
  }): AlertRewriteResult {
    const normalizedAlertHtml =
      this.normalizeAlertWrapperHtml(params.alertHtml) || params.alertHtml.trim();
    const extractedHeading = this.extractHeadingFromAlertHtml(normalizedAlertHtml);
    const rewrittenHeading = (params.originalHeading || '').trim() || extractedHeading;

    return {
      rewrittenAlertHtml: normalizedAlertHtml,
      rewrittenHeading: rewrittenHeading || this.buildFallbackHeading(),
      rewrittenAlert: (params.originalAlertText || '').trim(),
      appliedDirectives: [],
      exampleIdsUsed: [],
    };
  }

  private inferCriteriaFromIssues(issues: AlertRewriteIssueInput[]): string[] {
    const criteria = new Set<string>();
    for (const issue of issues) {
      const category = (issue.category || '').toLowerCase();
      if (!category) continue;
      if (category.includes('nothing actionable') || category.includes('unclear impact')) {
        criteria.add('C1_missing_next_step');
      }
      if (category.includes('too wordy')) {
        criteria.add('C2_too_wordy');
      }
      if (category.includes('too many links')) {
        criteria.add('C3_too_many_links');
      }
      if (category.includes('missing heading')) {
        criteria.add('C4_missing_heading');
      }
      if (category.includes('focus order')) {
        criteria.add('C5_focus_order');
      }
      if (category.includes('misuse') || category.includes('wrong component')) {
        criteria.add('C6_component_misuse');
      }
      if (category.includes('vague')) {
        criteria.add('C7_too_vague');
      }
    }
    if (!criteria.size) {
      criteria.add('C7_too_vague');
    }
    return Array.from(criteria);
  }

  private inferDomainTags(
    alertText: string,
    issues: AlertRewriteIssueInput[],
  ): string[] {
    const tags = new Set<string>();
    const lower = (alertText || '').toLowerCase();
    const issueText = issues
      .map((issue) => `${issue.category || ''} ${issue.description || ''}`)
      .join(' ')
      .toLowerCase();

    const maybeAdd = (tag: string, pattern: RegExp): void => {
      if (pattern.test(lower) || pattern.test(issueText)) {
        tags.add(tag);
      }
    };

    maybeAdd('form', /\bform\b/);
    maybeAdd('submission', /\bsubmit|submission\b/);
    maybeAdd('login', /\blog ?in|sign ?in|account\b/);
    maybeAdd('payment', /\bpayment|pay|billing|invoice\b/);
    maybeAdd('deadline', /\bdue|deadline|date\b/);
    maybeAdd('support', /\bsupport|contact|help\b/);
    maybeAdd('missing-action', /\bnothing actionable|next step|action\b/);
    maybeAdd('vague', /\bvague|unclear\b/);

    return Array.from(tags).slice(0, 6);
  }

  private inferPurposeTags(
    alertHtml: string,
    alertText: string,
    issues: AlertRewriteIssueInput[],
    criteriaMatched: string[],
  ): string[] {
    const tags = new Set<string>();
    const lower = (alertText || '').toLowerCase();
    const issueText = issues
      .map(
        (issue) =>
          `${issue.category || ''} ${issue.description || ''} ${issue.recommendation || ''}`,
      )
      .join(' ')
      .toLowerCase();
    const combined = `${lower} ${issueText}`;
    const criteria = new Set(criteriaMatched || []);
    const linkCount = (alertHtml.match(/<a\b/gi) || []).length;

    const maybeAdd = (tag: string, pattern: RegExp): void => {
      if (pattern.test(combined)) {
        tags.add(tag);
      }
    };

    if (criteria.has('C4_missing_heading')) tags.add('missing-heading');
    if (criteria.has('C1_missing_next_step')) tags.add('action-required');
    if (criteria.has('C2_too_wordy')) tags.add('shorten-alert');
    if (criteria.has('C3_too_many_links')) tags.add('remove-secondary-link');
    if (linkCount === 1) tags.add('standalone-action-link');
    if (linkCount > 1) {
      tags.add('multiple-detail-links');
      tags.add('duplicate-link-cleanup');
    }

    maybeAdd('service-delay', /\bdelay|processing time|service standard\b/);
    maybeAdd('service-change', /\bno longer|ending|must register|effective\b/);
    maybeAdd('service-update', /\bresumed|paused|interruption|operations\b/);
    maybeAdd('status-change', /\bresumed|paused|tentative agreement|strike|lockout\b/);
    maybeAdd('fraud-warning', /\bfalse information|disinformation|fraud|scam\b/);
    maybeAdd('correction', /\bdoes not exist|false information|correction\b/);
    maybeAdd('legislative-update', /\bproposed legislation|legislative|budget|tabled legislation\b/);
    maybeAdd('policy-caveat', /\bmay change|subject to parliamentary approval|proposal\b/);
    maybeAdd('date-sensitive', /\bas of|effective|starting|january|february|march|april|may|june|july|august|september|october|november|december\b/);
    maybeAdd('account-service', /\bcra account|my business account|access code|sign in\b/);
    maybeAdd('online-service', /\bonline|electronically|sign in|register\b/);
    maybeAdd('support-info', /\bsupport|relief|help|affected\b/);
    maybeAdd('technical-notice', /\bnotice [a-z]{2,}|technical information|excise\b/i);
    maybeAdd('benefit-change', /\bbenefit|credit|payment|top-up\b/);
    maybeAdd('new-program', /\bnew |replace|will replace\b/);
    maybeAdd('official-source-warning', /\bofficial government|official source|official web\b/);

    return Array.from(tags).slice(0, 8);
  }

  private calculateExampleTextRelevance(
    sourceText: string,
    example: AlertRewriteExample,
  ): number {
    if (!sourceText) return 0;

    const exampleText = this.normalizeComparisonText(
      `${example.headingBefore || ''} ${example.before || ''}`,
    );
    if (!exampleText || exampleText.includes('original text unavailable')) {
      return 0;
    }

    const sourceTokens = new Set(this.tokenizeComparisonText(sourceText));
    const exampleTokens = new Set(this.tokenizeComparisonText(exampleText));
    if (sourceTokens.size < 4 || exampleTokens.size < 4) return 0;

    const stopWords = new Set([
      'a',
      'an',
      'and',
      'are',
      'as',
      'at',
      'be',
      'by',
      'can',
      'for',
      'from',
      'has',
      'have',
      'in',
      'is',
      'it',
      'its',
      'of',
      'on',
      'or',
      'our',
      'the',
      'their',
      'this',
      'to',
      'we',
      'will',
      'with',
      'you',
      'your',
    ]);
    const distinctiveMatches = Array.from(sourceTokens).filter(
      (token) =>
        token.length >= 4 && !stopWords.has(token) && exampleTokens.has(token),
    ).length;
    const containment =
      this.calculateJaccardSimilarity(sourceText, exampleText) +
      this.calculateJaccardSimilarity(exampleText, sourceText);

    return Math.min(2.5, distinctiveMatches * 0.35 + containment);
  }

  private toExample(raw: unknown): AlertRewriteExample | null {
    if (!raw || typeof raw !== 'object') return null;
    const root = raw as Record<string, unknown>;
    const id = this.cleanString(root['id']);
    const alertType = this.cleanString(root['alertType']);
    const before = this.cleanString(root['before']);
    const after = this.cleanString(root['after']);
    if (!id || !alertType || !before || !after) return null;
    return {
      id,
      alertType,
      tags: this.toStringArray(root['tags']),
      purposeTags: this.toStringArray(root['purposeTags']),
      criteria: this.toStringArray(root['criteria']),
      before,
      after,
      headingBefore: this.cleanString(root['headingBefore']) || undefined,
      headingAfter: this.cleanString(root['headingAfter']) || undefined,
      updatedHtml: this.cleanString(root['updatedHtml']) || undefined,
      linksBefore: this.toExampleLinkArray(root['linksBefore']),
      linksAfter: this.toExampleLinkArray(root['linksAfter']),
      linkEdits: this.toExampleLinkEditArray(root['linkEdits']),
      notes: this.cleanString(root['notes']) || undefined,
    };
  }

  private toDirective(raw: unknown): AlertRewriteDirective | null {
    if (!raw || typeof raw !== 'object') return null;
    const root = raw as Record<string, unknown>;
    const op = this.cleanString(root['op']);
    if (!op) return null;
    const valueRaw = root['value'];
    const value =
      typeof valueRaw === 'number' || typeof valueRaw === 'string'
        ? valueRaw
        : undefined;
    return value !== undefined ? { op, value } : { op };
  }

  private uniqueDirectives(directives: AlertRewriteDirective[]): AlertRewriteDirective[] {
    const seen = new Set<string>();
    const output: AlertRewriteDirective[] = [];
    for (const directive of directives) {
      const key = `${directive.op}::${directive.value ?? ''}`;
      if (seen.has(key)) continue;
      seen.add(key);
      output.push(directive);
    }
    return output;
  }

  private stripCodeFences(input: string): string {
    return input
      .replace(/^```(?:json)?\s*/i, '')
      .replace(/\s*```$/i, '')
      .trim();
  }

  private looseJsonParse(input: string): unknown | null {
    const wholeInput = input.trim();
    // Prefer the full response, then recover balanced JSON blocks from
    // markdown/prose wrappers that small models sometimes add.
    const candidates = [
      wholeInput,
      ...this.extractBalancedJsonCandidates(input)
        .filter((candidate) => candidate !== wholeInput)
        .sort((a, b) => b.length - a.length),
    ].filter((candidate, index, all) => {
      return !!candidate && all.indexOf(candidate) === index;
    });

    for (const candidate of candidates) {
      try {
        return JSON.parse(candidate);
      } catch {
        // Try the next recoverable JSON block.
      }
    }

    return null;
  }

  private extractBalancedJsonCandidates(input: string): string[] {
    const candidates: string[] = [];
    for (let start = 0; start < input.length; start += 1) {
      const first = input[start];
      if (first !== '{' && first !== '[') continue;

      const stack: string[] = [];
      let inString = false;
      let escaped = false;

      for (let index = start; index < input.length; index += 1) {
        const char = input[index];

        if (inString) {
          if (escaped) {
            escaped = false;
          } else if (char === '\\') {
            escaped = true;
          } else if (char === '"') {
            inString = false;
          }
          continue;
        }

        if (char === '"') {
          inString = true;
          continue;
        }

        if (char === '{') {
          stack.push('}');
        } else if (char === '[') {
          stack.push(']');
        } else if (char === '}' || char === ']') {
          if (stack[stack.length - 1] !== char) {
            break;
          }
          stack.pop();
          if (!stack.length) {
            candidates.push(input.slice(start, index + 1).trim());
            break;
          }
        }
      }
    }

    return candidates;
  }

  private resolveAlertRewriteRoot(parsed: unknown): Record<string, unknown> {
    // Accept equivalent wrapper objects so the parser is resilient to common
    // model variations without weakening downstream alert validation.
    const fromArray = (values: unknown[]): Record<string, unknown> | null => {
      for (const value of values) {
        if (value && typeof value === 'object' && !Array.isArray(value)) {
          const record = value as Record<string, unknown>;
          if (this.hasAlertRewriteShape(record)) return record;
        }
      }
      return null;
    };

    if (Array.isArray(parsed)) {
      return fromArray(parsed) || {};
    }

    const root =
      parsed && typeof parsed === 'object'
        ? (parsed as Record<string, unknown>)
        : {};
    if (this.hasAlertRewriteShape(root)) return root;

    const nestedKeys = [
      'alertRewrite',
      'alert_rewrite',
      'rewrite',
      'rewrittenAlert',
      'rewritten_alert',
      'result',
      'output',
      'alert',
      'data',
    ];
    for (const key of nestedKeys) {
      const value = root[key];
      if (Array.isArray(value)) {
        const arrayMatch = fromArray(value);
        if (arrayMatch) return arrayMatch;
      } else if (value && typeof value === 'object') {
        const record = value as Record<string, unknown>;
        if (this.hasAlertRewriteShape(record)) return record;
      }
    }

    for (const value of Object.values(root)) {
      if (value && typeof value === 'object' && !Array.isArray(value)) {
        const record = value as Record<string, unknown>;
        if (this.hasAlertRewriteShape(record)) return record;
      }
    }

    return root;
  }

  private hasAlertRewriteShape(root: Record<string, unknown>): boolean {
    return [
      'rewrittenAlertHtml',
      'rewritten_alert_html',
      'alertHtml',
      'alert_html',
      'rewrittenAlert',
      'rewritten_alert',
      'rewrittenHeading',
      'rewritten_heading',
    ].some((key) => Object.prototype.hasOwnProperty.call(root, key));
  }

  private cleanStringFromKeys(
    root: Record<string, unknown>,
    keys: string[],
  ): string {
    for (const key of keys) {
      const value = this.cleanString(root[key]);
      if (value) return value;
    }
    return '';
  }

  private extractAlertHtmlFragment(text: string): string {
    // Last-chance recovery for responses that contain HTML instead of JSON.
    // The guard service still validates/rebuilds the wrapper before insertion.
    const stripped = this.stripCodeFences(text);
    const fencedHtmlMatch = stripped.match(/```(?:html)?\s*([\s\S]*?)\s*```/i);
    const candidates = [
      fencedHtmlMatch?.[1] || '',
      stripped,
    ].filter((candidate) => !!candidate.trim());

    for (const candidate of candidates) {
      const normalizedAlert = this.normalizeAlertWrapperHtml(candidate);
      if (normalizedAlert) return normalizedAlert;

      try {
        const doc = new DOMParser().parseFromString(candidate, 'text/html');
        const alertEl = doc.body.querySelector('.alert');
        if (alertEl) return alertEl.outerHTML.trim();

        const bodyHtml = doc.body.innerHTML.trim();
        if (bodyHtml && /<\/?(h[1-6]|p|a|ul|ol|li)\b/i.test(bodyHtml)) {
          return bodyHtml;
        }
      } catch {
        // Try the next candidate.
      }
    }

    return '';
  }

  private toStringArray(raw: unknown): string[] {
    if (!Array.isArray(raw)) return [];
    return raw
      .filter((value): value is string => typeof value === 'string')
      .map((value) => value.trim())
      .filter((value) => !!value);
  }

  private sanitizeExampleIdsUsed(
    rawIds: string[],
    selectedExamples: AlertRewriteExample[],
  ): string[] {
    if (!selectedExamples.length || !rawIds.length) return [];

    const allowedIds = new Set(selectedExamples.map((example) => example.id));
    const seen = new Set<string>();

    return rawIds.filter((id) => {
      if (!allowedIds.has(id) || seen.has(id)) return false;
      seen.add(id);
      return true;
    });
  }

  private cleanString(value: unknown): string {
    return typeof value === 'string' ? value.trim() : '';
  }

  private shouldIncludePlanningDescriptionSnippet(category: string): boolean {
    const lower = (category || '').toLowerCase();
    if (!lower) return false;
    return (
      lower.includes('misuse') ||
      lower.includes('wrong component') ||
      lower.includes('wrong type') ||
      lower.includes('wrong placement') ||
      lower.includes('low relevance') ||
      lower.includes('focus order') ||
      lower.includes('content clarity') ||
      lower.includes('non-text') ||
      lower.includes('accessibility/code') ||
      lower.includes('outdated') ||
      lower.includes('incorrect hierarchy')
    );
  }

  private toDescriptionSnippet(value: string, maxLength: number): string {
    const normalized = this.cleanString(value).replace(/\s+/g, ' ');
    if (!normalized) return '';
    if (normalized.length <= maxLength) return normalized;

    const truncated = normalized.slice(0, maxLength);
    const boundary = Math.max(
      truncated.lastIndexOf('. '),
      truncated.lastIndexOf('; '),
      truncated.lastIndexOf(', '),
      truncated.lastIndexOf(' '),
    );
    const clipped =
      boundary > Math.floor(maxLength * 0.6)
        ? truncated.slice(0, boundary).trim()
        : truncated.trim();
    return `${clipped}...`;
  }

  private normalizeComparisonText(value: string): string {
    return (value || '')
      .toLowerCase()
      .replace(/<[^>]*>/g, ' ')
      .replace(/&nbsp;/g, ' ')
      .replace(/[^a-z0-9\s]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  private tokenizeComparisonText(value: string): string[] {
    const normalized = this.normalizeComparisonText(value);
    return normalized ? normalized.split(' ') : [];
  }

  private calculateJaccardSimilarity(a: string, b: string): number {
    const aTokens = new Set(this.tokenizeComparisonText(a));
    const bTokens = new Set(this.tokenizeComparisonText(b));
    if (!aTokens.size || !bTokens.size) return 0;

    let intersection = 0;
    for (const token of aTokens) {
      if (bTokens.has(token)) intersection += 1;
    }
    const union = aTokens.size + bTokens.size - intersection;
    return union > 0 ? intersection / union : 0;
  }

  private buildFallbackHeading(): string {
    return '[GenAI failure: include a heading]';
  }

  private normalizeAlertWrapperHtml(rawHtml: string): string | null {
    if (!rawHtml) return null;
    try {
      const doc = new DOMParser().parseFromString(rawHtml, 'text/html');
      const firstElement = doc.body.firstElementChild;
      // A model may prepend prose or markdown artifacts before the alert; keep
      // the actual .alert element if one is present.
      const alertEl = firstElement?.classList.contains('alert')
        ? firstElement
        : doc.body.querySelector('.alert');
      if (!alertEl) return null;
      return alertEl.outerHTML.trim();
    } catch {
      return null;
    }
  }

  private extractHeadingFromAlertHtml(alertHtml: string): string {
    try {
      const doc = new DOMParser().parseFromString(alertHtml, 'text/html');
      const heading = doc.body.querySelector('h1, h2, h3, h4, h5, h6');
      return (heading?.textContent || '').trim();
    } catch {
      return '';
    }
  }

  private extractBodyTextFromAlertHtml(alertHtml: string): string {
    try {
      const doc = new DOMParser().parseFromString(alertHtml, 'text/html');
      const alertEl = doc.body.firstElementChild;
      if (!alertEl) return '';
      const clone = alertEl.cloneNode(true) as HTMLElement;
      clone.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach((el) => el.remove());
      return (clone.textContent || '').trim();
    } catch {
      return '';
    }
  }

  private extractTextFromHtmlFragment(fragmentHtml: string): string {
    if (!fragmentHtml) return '';
    try {
      const doc = new DOMParser().parseFromString(fragmentHtml, 'text/html');
      return (doc.body.textContent || '').trim();
    } catch {
      return '';
    }
  }

  private extractBodyTextFromHtmlFragment(fragmentHtml: string): string {
    if (!fragmentHtml) return '';
    try {
      const doc = new DOMParser().parseFromString(fragmentHtml, 'text/html');
      const clone = doc.body.cloneNode(true) as HTMLElement;
      clone.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach((el) => el.remove());
      return (clone.textContent || '').trim();
    } catch {
      return '';
    }
  }

  private toExampleLinkArray(raw: unknown): AlertRewriteExampleLink[] {
    if (!Array.isArray(raw)) return [];
    const links: AlertRewriteExampleLink[] = [];
    for (const item of raw) {
      if (!item || typeof item !== 'object') continue;
      const root = item as Record<string, unknown>;
      const id = this.cleanString(root['id']);
      const text = this.cleanString(root['text']);
      const href = this.cleanString(root['href']) || undefined;
      if (!id || !text) continue;
      links.push(href ? { id, text, href } : { id, text });
    }
    return links;
  }

  private toExampleLinkEditArray(raw: unknown): AlertRewriteExampleLinkEdit[] {
    if (!Array.isArray(raw)) return [];
    const edits: AlertRewriteExampleLinkEdit[] = [];
    for (const item of raw) {
      if (!item || typeof item !== 'object') continue;
      const root = item as Record<string, unknown>;
      const id = this.cleanString(root['id']);
      const actionRaw = this.cleanString(root['action']).toLowerCase();
      const action =
        actionRaw === 'keep' ||
        actionRaw === 'rename' ||
        actionRaw === 'remove' ||
        actionRaw === 'add'
          ? (actionRaw as AlertRewriteExampleLinkEdit['action'])
          : null;
      if (!id || !action) continue;
      const beforeText = this.cleanString(root['beforeText']) || undefined;
      const afterText = this.cleanString(root['afterText']) || undefined;
      const note = this.cleanString(root['note']) || undefined;
      edits.push({
        id,
        action,
        ...(beforeText ? { beforeText } : {}),
        ...(afterText ? { afterText } : {}),
        ...(note ? { note } : {}),
      });
    }
    return edits;
  }

}
