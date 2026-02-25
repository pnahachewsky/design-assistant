import { Injectable } from '@angular/core';
import { ChatMessage } from './openrouter.service';
import { AlertRewriteMode } from '../data/data.model';
import { getLinkWritingRules } from '../../../common/constants/link-writing.constants';

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
  criteriaMatched: string[];
  directives: AlertRewriteDirective[];
}

export interface AlertRewriteExample {
  id: string;
  alertType: string;
  tags: string[];
  criteria: string[];
  before: string;
  after: string;
  headingBefore?: string;
  headingAfter?: string;
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
    const directives: AlertRewriteDirective[] = [];

    if (criteriaMatched.includes('C1_missing_next_step')) {
      directives.push({ op: 'add_next_step' });
    }
    if (criteriaMatched.includes('C7_too_vague')) {
      directives.push({ op: 'specify_subject' });
    }
    if (criteriaMatched.includes('C2_too_wordy')) {
      directives.push({ op: 'keep_under_chars', value: 140 });
    }
    directives.push({ op: 'add_heading' });
    directives.push({ op: 'avoid_jargon' });

    return {
      alertType: input.alertType || 'info',
      domainTags,
      criteriaMatched,
      directives: this.uniqueDirectives(directives),
    };
  }

  buildPromptAMessages(input: AlertRewriteInput): ChatMessage[] {
    const systemPrompt = [
      'You are Prompt A for UI alert rewriting.',
      'Classify the alert and produce a deterministic rewrite plan.',
      'Return JSON only and follow this exact schema:',
      '{"alertType":"error|warning|info|success","domainTags":["..."],"criteriaMatched":["C..."],"directives":[{"op":"string","value":"optional"}]}',
      'Allowed directive ops:',
      'specify_subject, add_next_step, add_fallback, add_heading, avoid_jargon, keep_under_chars, limit_links, preserve_tone.',
      'Rules:',
      '- Keep domainTags short and specific.',
      '- criteriaMatched should be stable identifiers (e.g., C1_missing_next_step).',
      '- Directives must be concrete operations.',
      '- If no max length is needed, do not include keep_under_chars.',
      '- Return JSON only. No prose.',
    ].join('\n');

    const userPayload = {
      alertHtml: input.alertHtml,
      alertText: input.alertText,
      alertType: input.alertType,
      issues: input.issues.map((issue) => ({
        category: (issue.category || '').trim(),
        severity: (issue.severity || '').trim(),
        description: (issue.description || '').trim(),
        recommendation: (issue.recommendation || '').trim(),
      })),
    };

    return [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: JSON.stringify(userPayload) },
    ];
  }

  parsePlanResponse(text: string, fallback: AlertRewritePlan): AlertRewritePlan | null {
    const parsed = this.looseJsonParse(this.stripCodeFences(text));
    if (!parsed || typeof parsed !== 'object') {
      return null;
    }
    const root = parsed as Record<string, unknown>;
    const alertType = this.cleanString(root['alertType']) || fallback.alertType;
    const domainTags = this.toStringArray(root['domainTags']);
    const criteriaMatched = this.toStringArray(root['criteriaMatched']);
    const rawDirectives = Array.isArray(root['directives']) ? root['directives'] : [];
    const directives = rawDirectives
      .map((raw) => this.toDirective(raw))
      .filter((directive): directive is AlertRewriteDirective => !!directive);

    return {
      alertType,
      domainTags: domainTags.length ? domainTags : fallback.domainTags,
      criteriaMatched: criteriaMatched.length ? criteriaMatched : fallback.criteriaMatched,
      directives: directives.length ? this.uniqueDirectives(directives) : fallback.directives,
    };
  }

  selectExamples(
    plan: AlertRewritePlan,
    examples: AlertRewriteExample[],
    count = 4,
  ): AlertRewriteExample[] {
    const requestedCount = Math.max(1, count);
    const criteria = new Set(plan.criteriaMatched || []);
    const tags = new Set(plan.domainTags || []);

    const scored = examples.map((example) => {
      let score = 0;
      if (example.alertType === plan.alertType) {
        score += 3;
      } else {
        score -= 2;
      }
      for (const criterion of example.criteria || []) {
        if (criteria.has(criterion)) score += 2;
      }
      for (const tag of example.tags || []) {
        if (tags.has(tag)) score += 1;
      }
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

  async buildPromptBMessages(params: {
    mode: AlertRewriteMode;
    originalAlertText: string;
    originalHeading?: string;
    originalAlertHtml: string;
    plan: AlertRewritePlan;
    examples: AlertRewriteExample[];
    includeLinkWritingRules?: boolean;
    retryInstruction?: string;
  }): Promise<ChatMessage[]> {
    const maxChars = this.getCharLimit(params.plan.directives);
    const hasTooManyLinksIssue =
      params.plan.criteriaMatched.includes('C3_too_many_links') ||
      params.plan.directives.some((directive) => directive.op === 'limit_links');
    const shouldIncludeLinkWritingRules = params.includeLinkWritingRules !== false;
    const linkRules = shouldIncludeLinkWritingRules
      ? await getLinkWritingRules({
          hasTooManyLinksIssue,
        })
      : [];
    const styleRules = [
      '1 sentence preferred, 2 max if needed.',
      'Every alert must have a short, descriptive heading.',
      'Start with what happened, then what to do.',
      'Use plain language, active voice, and no blame.',
      'Include a next step when available.',
      ...linkRules,
      maxChars ? `Keep under ${maxChars} characters.` : 'Keep concise for UI alerts.',
      'Return full updated alert wrapper HTML in rewrittenAlertHtml (for example: <div class="alert alert-info">...</div>).',
      'Never copy example wording directly. Keep wording specific to the input alert.',
    ];
    if (params.retryInstruction) {
      styleRules.push(params.retryInstruction);
    }

    const examplesBlock = params.examples.map((example, index) => {
      const linksBefore = this.linkListToString(example.linksBefore);
      const linksAfter = this.linkListToString(example.linksAfter);
      const linkEdits = this.linkEditsToString(example.linkEdits);
      return [
        `Example ${index + 1} (${example.id})`,
        example.headingBefore ? `Heading before: ${example.headingBefore}` : '',
        example.headingAfter ? `Heading after: ${example.headingAfter}` : '',
        `Before: ${example.before}`,
        `After: ${example.after}`,
        linksBefore ? `Links before: ${linksBefore}` : '',
        linksAfter ? `Links after: ${linksAfter}` : '',
        linkEdits ? `Link edits: ${linkEdits}` : '',
      ].join('\n');
    });

    const planPayload =
      params.mode === AlertRewriteMode.AB
        ? params.plan
        : {
            alertType: params.plan.alertType,
            domainTags: params.plan.domainTags,
            criteriaMatched: params.plan.criteriaMatched,
            directives: [],
          };

    const systemPrompt = [
      'You are Prompt B for rewriting UI alerts.',
      'Use examples as pattern guidance, not copy/paste text.',
      'Keep the alert wrapper and classes valid.',
      'Do not return any sentence copied from the examples.',
      'Return JSON only. No extra text.',
      'Output schema:',
      '{"rewrittenAlertHtml":"string","rewrittenHeading":"string","rewrittenAlert":"string","appliedDirectives":["..."],"exampleIdsUsed":["ex-001"]}',
    ].join('\n');

    const userPayload = {
      mode: params.mode,
      styleRules,
      examples: params.examples.map((example) => ({
        id: example.id,
        headingBefore: example.headingBefore || '',
        headingAfter: example.headingAfter || '',
        before: example.before,
        after: example.after,
        criteria: example.criteria,
        tags: example.tags,
        linksBefore: example.linksBefore || [],
        linksAfter: example.linksAfter || [],
        linkEdits: example.linkEdits || [],
      })),
      examplesText: examplesBlock.join('\n\n'),
      plan: planPayload,
      originalHeading: (params.originalHeading || '').trim(),
      originalAlertText: (params.originalAlertText || '').trim(),
      originalAlertHtml: (params.originalAlertHtml || '').trim(),
    };

    return [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: JSON.stringify(userPayload) },
    ];
  }

  parseRewriteResponse(
    text: string,
    plan: AlertRewritePlan,
    selectedExamples: AlertRewriteExample[],
  ): AlertRewriteResult | null {
    const parsed = this.looseJsonParse(this.stripCodeFences(text));
    if (!parsed || typeof parsed !== 'object') {
      return null;
    }
    const root = parsed as Record<string, unknown>;
    const rawAlertHtml = this.cleanString(root['rewrittenAlertHtml']);
    const normalizedAlertHtml = this.normalizeAlertWrapperHtml(rawAlertHtml);
    if (!normalizedAlertHtml) {
      return null;
    }
    const parsedHeading = this.cleanString(root['rewrittenHeading']);
    const rawAlert = this.cleanString(root['rewrittenAlert']);
    const extractedHeading = this.extractHeadingFromAlertHtml(normalizedAlertHtml);
    const extractedBodyText = this.extractBodyTextFromAlertHtml(normalizedAlertHtml);
    const rewrittenHeading =
      parsedHeading || extractedHeading || this.buildFallbackHeading(plan.alertType);
    const baseBodyText = rawAlert || extractedBodyText;
    if (!baseBodyText) return null;
    const maxChars = this.getCharLimit(plan.directives);
    const rewrittenAlert = this.applyCharLimit(baseBodyText, maxChars);
    const appliedDirectives = this.toStringArray(root['appliedDirectives']);
    const exampleIdsUsedRaw = this.toStringArray(root['exampleIdsUsed']);
    const fallbackExampleIds = selectedExamples.map((example) => example.id);
    const exampleIdsUsed = exampleIdsUsedRaw.length
      ? exampleIdsUsedRaw
      : fallbackExampleIds;

    return {
      rewrittenAlertHtml: normalizedAlertHtml,
      rewrittenHeading,
      rewrittenAlert,
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

      if (rewrittenCombined === exampleCombined && rewrittenCombined !== originalCombined) {
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
      const originalSimilarity = this.calculateJaccardSimilarity(
        originalCombined,
        exampleCombined,
      );

      if (similarity >= 0.92 && originalSimilarity < 0.8) {
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
      rewrittenHeading: rewrittenHeading || this.buildFallbackHeading('info'),
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
      criteria: this.toStringArray(root['criteria']),
      before,
      after,
      headingBefore: this.cleanString(root['headingBefore']) || undefined,
      headingAfter: this.cleanString(root['headingAfter']) || undefined,
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

  private getCharLimit(directives: AlertRewriteDirective[]): number | null {
    for (const directive of directives) {
      if (directive.op !== 'keep_under_chars') continue;
      const value =
        typeof directive.value === 'number'
          ? directive.value
          : typeof directive.value === 'string'
            ? Number.parseInt(directive.value, 10)
            : NaN;
      if (Number.isFinite(value) && value > 0) {
        return value;
      }
    }
    return null;
  }

  private applyCharLimit(text: string, maxChars: number | null): string {
    const trimmed = text.trim();
    if (!maxChars || trimmed.length <= maxChars) {
      return trimmed;
    }
    const shortened = trimmed.slice(0, maxChars).trim();
    return shortened.endsWith('.') ? shortened : `${shortened}.`;
  }

  private stripCodeFences(input: string): string {
    return input
      .replace(/^```(?:json)?\s*/i, '')
      .replace(/\s*```$/i, '')
      .trim();
  }

  private looseJsonParse(input: string): unknown | null {
    try {
      return JSON.parse(input);
    } catch {
      // fall through
    }
    const match = input.match(/\{[\s\S]*\}/);
    if (!match) return null;
    try {
      return JSON.parse(match[0]);
    } catch {
      return null;
    }
  }

  private toStringArray(raw: unknown): string[] {
    if (!Array.isArray(raw)) return [];
    return raw
      .filter((value): value is string => typeof value === 'string')
      .map((value) => value.trim())
      .filter((value) => !!value);
  }

  private cleanString(value: unknown): string {
    return typeof value === 'string' ? value.trim() : '';
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

  private buildFallbackHeading(alertType: string): string {
    const normalized = alertType.toLowerCase();
    if (normalized === 'error') return 'Error';
    if (normalized === 'warning') return 'Important';
    if (normalized === 'success') return 'Success';
    return 'Information';
  }

  private normalizeAlertWrapperHtml(rawHtml: string): string | null {
    if (!rawHtml) return null;
    try {
      const doc = new DOMParser().parseFromString(rawHtml, 'text/html');
      const alertEl = doc.body.firstElementChild;
      if (!alertEl || !alertEl.classList.contains('alert')) return null;
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

  private linkListToString(links: AlertRewriteExampleLink[] | undefined): string {
    if (!links?.length) return '';
    return links
      .map((link) =>
        link.href
          ? `${link.id}: "${link.text}" (${link.href})`
          : `${link.id}: "${link.text}"`,
      )
      .join('; ');
  }

  private linkEditsToString(
    edits: AlertRewriteExampleLinkEdit[] | undefined,
  ): string {
    if (!edits?.length) return '';
    return edits
      .map((edit) => {
        const before = edit.beforeText ? ` before="${edit.beforeText}"` : '';
        const after = edit.afterText ? ` after="${edit.afterText}"` : '';
        const note = edit.note ? ` note="${edit.note}"` : '';
        return `${edit.id}:${edit.action}${before}${after}${note}`;
      })
      .join('; ');
  }
}
