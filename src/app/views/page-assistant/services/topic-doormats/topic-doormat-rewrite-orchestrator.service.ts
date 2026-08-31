import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';

import { AlertAiService } from '../alerts/alert-ai.service';
import { SkillManagerService } from '../skill-manager.service';
import { UploadStateService } from '../upload-state.service';
import { UrlDataService } from '../url-data.service';
import { ChatMessage, OpenRouterService } from '../openrouter.service';
import { PromptKey, AiModel } from '../../data/data.model';
import {
  TopicDoormatAnalysisStateService,
  TopicDoormatIssueRewriteInput,
} from './topic-doormat-analysis-state.service';
import { TopicDoormatExtractorService } from './topic-doormat-extractor.service';
import { TopicDoormatIssueAnalysisService } from './topic-doormat-issue-analysis.service';
import { TopicDoormatTemplateNormalizerService } from './topic-doormat-template-normalizer.service';
import {
  TopicDoormatIssueRow,
  TopicDoormatPageLanguage,
  TopicDoormatSummary,
} from './topic-doormat.types';

interface TopicDoormatRewriteExampleLanguageSet {
  sourceHtmlShape?: unknown;
  items?: unknown;
  sourceHtml?: unknown;
}

interface TopicDoormatRewriteExampleItem {
  position?: unknown;
  linkText?: unknown;
  description?: unknown;
}

interface TopicDoormatRewriteExample {
  id?: unknown;
  languages?: unknown;
  languagePair?: unknown;
  pageTopic?: unknown;
  setSize?: unknown;
  setSizeBand?: unknown;
  pageType?: unknown;
  domainTags?: unknown;
  patternTags?: unknown;
  issueTags?: unknown;
  notes?: unknown;
  sets?: Partial<Record<TopicDoormatPageLanguage, TopicDoormatRewriteExampleLanguageSet>>;
}

export interface TopicDoormatAnalyzeAndRewriteResult {
  analyzedHtml: string;
  rewrittenHtml: string;
  issueRows: TopicDoormatIssueRow[];
  analysisModel?: string;
  rewriteModel?: string;
}

export interface TopicDoormatDraftResult {
  rewrittenHtml: string;
  rewriteModel?: string;
}

export interface TopicFeatureDraftResult {
  rewrittenHtml: string;
  rewriteModel?: string;
}

@Injectable({ providedIn: 'root' })
export class TopicDoormatRewriteOrchestratorService {
  private readonly translate = inject(TranslateService);
  private readonly messageService = inject(MessageService);
  private readonly uploadState = inject(UploadStateService);
  private readonly skillManager = inject(SkillManagerService);
  private readonly alertAi = inject(AlertAiService);
  private readonly openRouter = inject(OpenRouterService);
  private readonly urlDataService = inject(UrlDataService);
  private readonly topicDoormatAnalysisState = inject(TopicDoormatAnalysisStateService);
  private readonly topicDoormatExtractor = inject(TopicDoormatExtractorService);
  private readonly topicDoormatIssueAnalysis = inject(TopicDoormatIssueAnalysisService);
  private readonly topicDoormatTemplateNormalizer = inject(
    TopicDoormatTemplateNormalizerService,
  );
  private readonly topicDoormatRewriteAttemptTimeoutMs = 150000;
  private readonly examplesPath = new URL(
    'skills/topic-doormats/rewrite/references/examples.json',
    document.baseURI,
  ).toString();
  private examplesCache: TopicDoormatRewriteExample[] | null = null;

  async analyzeAndRewriteGeneratedTopicHtml(
    html: string,
    model: AiModel,
  ): Promise<TopicDoormatAnalyzeAndRewriteResult | null> {
    const normalized =
      this.topicDoormatTemplateNormalizer.normalizeLegacyDoormats(html);
    const analyzedHtml = normalized.html;
    const doc = this.topicDoormatExtractor.parseHtmlDocument(analyzedHtml);
    if (!doc) return null;

    const extractedSummaries = this.topicDoormatExtractor.extractSummaries(doc);
    if (!extractedSummaries.length) {
      this.messageService.add({
        severity: 'info',
        summary: this.translate.instant('common.ai.topicDoormatsNotFound'),
        life: 3000,
      });
      return null;
    }

    this.messageService.add({
      severity: 'info',
      summary: this.translate.instant('common.ai.generating'),
      life: 2000,
    });

    const uploadData = this.uploadState.getUploadData();
    const pageLanguage = this.topicDoormatExtractor.detectPageLanguage(
      doc,
      uploadData,
    );
    const hasCurrentAnalysis =
      this.topicDoormatAnalysisState.hasAnalysis() &&
      this.topicDoormatAnalysisState.getAnalyzedHtml() === analyzedHtml &&
      this.topicDoormatAnalysisState.getDoormatSummaries().length > 0;
    let doormatSummaries: TopicDoormatSummary[];
    let issueRows: TopicDoormatIssueRow[];
    let analysisModel: string | undefined;

    if (hasCurrentAnalysis) {
      doormatSummaries = this.topicDoormatAnalysisState.getDoormatSummaries();
      issueRows = this.topicDoormatAnalysisState.getIssueRows();
    } else {
      const bilingualSummaries =
        await this.topicDoormatExtractor.enrichOppositeLanguageLengths(
          extractedSummaries,
          uploadData,
          pageLanguage,
        );
      doormatSummaries =
        await this.topicDoormatExtractor.enrichDestinationContext(
          bilingualSummaries,
          uploadData,
        );

      const analysis = await this.topicDoormatIssueAnalysis.analyze({
        doormatSummaries,
        pageLanguage,
        reportLanguage: this.translate.currentLang === 'fr' ? 'fr' : 'en',
        hasLegacyTopicDoormatTemplate:
          this.topicDoormatExtractor.hasLegacyTemplate(doc),
        mostRequestedLinks:
          this.topicDoormatExtractor.extractMostRequestedLinks(doc),
        uploadData,
        selectedModel: model,
      });
      issueRows = analysis.rows;
      analysisModel = analysis.model;
      this.topicDoormatAnalysisState.setAnalysis(
        analyzedHtml,
        issueRows,
        doormatSummaries,
      );
      this.messageService.add({
        severity: 'info',
        summary: issueRows.length
          ? this.translate.instant('common.ai.topicDoormatIssuesReceived', {
              model: this.getShortModelName(analysis.model || model),
            })
          : this.translate.instant('common.ai.topicDoormatIssuesNotIdentified'),
        life: 3000,
      });
    }

    const prompt = await this.buildRewritePrompt();
    const examples = await this.getExamplesForLanguage(pageLanguage);
    const userContent = this.buildRewriteUserContent(
      analyzedHtml,
      issueRows,
      doormatSummaries,
      pageLanguage,
      examples,
    );
    const rewrite = await this.callOpenRouterForRewrite(model, [
      { role: 'system', content: prompt },
      { role: 'user', content: userContent },
    ]);
    const rewriteHtml =
      this.extractDoormatRewriteHtmlFromStructuredResponse(rewrite.text) ??
      rewrite.text;
    if (this.looksLikeStructuredAiJsonResponse(rewriteHtml)) {
      throw new Error(
        'The AI returned structured JSON where HTML was expected. No comparison update was applied.',
      );
    }

    const patchedHtml = this.applyDoormatRewriteToPageHtml(
      analyzedHtml,
      rewriteHtml,
    );
    const rewrittenHtml = await this.urlDataService.formatHtml(patchedHtml, 'ai');
    return {
      analyzedHtml,
      rewrittenHtml,
      issueRows,
      analysisModel,
      rewriteModel: rewrite.usedModel,
    };
  }

  async draftGeneratedTopicDoormatsFromDestinationContext(
    html: string,
    model: AiModel,
  ): Promise<TopicDoormatDraftResult | null> {
    const normalized =
      this.topicDoormatTemplateNormalizer.normalizeLegacyDoormats(html);
    const workingHtml = normalized.html;
    const doc = this.topicDoormatExtractor.parseHtmlDocument(workingHtml);
    if (!doc) return null;

    const extractedSummaries = this.topicDoormatExtractor.extractSummaries(doc);
    if (!extractedSummaries.length) return null;

    const uploadData = this.uploadState.getUploadData();
    const pageLanguage = this.topicDoormatExtractor.detectPageLanguage(
      doc,
      uploadData,
    );
    const bilingualSummaries =
      await this.topicDoormatExtractor.enrichOppositeLanguageLengths(
        extractedSummaries,
        uploadData,
        pageLanguage,
      );
    const doormatSummaries =
      await this.topicDoormatExtractor.enrichDestinationContext(
        bilingualSummaries,
        uploadData,
      );

    const prompt = await this.buildRewritePrompt();
    const examples = await this.getExamplesForLanguage(pageLanguage);
    const userContent = this.buildDraftUserContent(
      workingHtml,
      doormatSummaries,
      pageLanguage,
      examples,
    );
    const rewrite = await this.callOpenRouterForRewrite(model, [
      { role: 'system', content: prompt },
      { role: 'user', content: userContent },
    ]);
    const rewriteHtml =
      this.extractDoormatRewriteHtmlFromStructuredResponse(rewrite.text) ??
      rewrite.text;
    if (this.looksLikeStructuredAiJsonResponse(rewriteHtml)) {
      throw new Error(
        'The AI returned structured JSON where HTML was expected. No comparison update was applied.',
      );
    }

    const patchedHtml = this.applyDoormatRewriteToPageHtml(
      workingHtml,
      rewriteHtml,
    );
    return {
      rewrittenHtml: await this.urlDataService.formatHtml(patchedHtml, 'ai'),
      rewriteModel: rewrite.usedModel,
    };
  }

  async draftGeneratedTopicFeaturesFromDestinationContext(
    html: string,
    model: AiModel,
  ): Promise<TopicFeatureDraftResult | null> {
    const doc = this.topicDoormatExtractor.parseHtmlDocument(html);
    if (!doc) return null;

    const featureSummaries = this.extractGeneratedFeatureSummaries(doc);
    if (!featureSummaries.length) return null;

    const summariesWithContext =
      await this.topicDoormatExtractor.enrichDestinationContext(
        featureSummaries,
        this.uploadState.getUploadData(),
      );
    const prompt = await this.buildFeatureDraftPrompt();
    const userContent = this.buildFeatureDraftUserContent(
      html,
      summariesWithContext,
    );
    const rewrite = await this.callOpenRouterForRewrite(model, [
      { role: 'system', content: prompt },
      { role: 'user', content: userContent },
    ]);
    const rewriteHtml =
      this.extractDoormatRewriteHtmlFromStructuredResponse(rewrite.text) ??
      rewrite.text;
    if (this.looksLikeStructuredAiJsonResponse(rewriteHtml)) {
      throw new Error(
        'The AI returned structured JSON where HTML was expected. No comparison update was applied.',
      );
    }

    const patchedHtml = this.applyFeatureRewriteToPageHtml(html, rewriteHtml);
    return {
      rewrittenHtml: await this.urlDataService.formatHtml(patchedHtml, 'ai'),
      rewriteModel: rewrite.usedModel,
    };
  }

  private async buildRewritePrompt(): Promise<string> {
    const composed = await this.skillManager.composePrompt({
      basePrompt:
        'Return raw HTML only. Return the full HTML input with only the doormat section updated. Do not return JSON, Markdown, schema-shaped output, or fields such as rewritten_doormat_set_html or full_updated_html. Do not remove, reorder, or rewrite unrelated sections. Preserve page title, alerts, headings, and all other components exactly as provided. Return only updated HTML code with no other commentary.',
      queryText:
        'rewrite topic doormats replacement updated html doormat overview list content design',
      promptKey: PromptKey.Doormats,
      outputMode: 'html',
      includeReferences: true,
      includeAssets: false,
      requireSkill: true,
    });
    return composed.prompt;
  }

  private async buildFeatureDraftPrompt(): Promise<string> {
    const composed = await this.skillManager.composePrompt({
      basePrompt:
        'Return raw HTML only. Return the full HTML input with only generated topic feature card descriptions updated. Do not return JSON, Markdown, schema-shaped output, or explanatory text. Preserve feature link text, hrefs, images, layout, headings, doormats, intro, alerts, and all unrelated page HTML exactly as provided. Use the topic doormat writing rules for concise, destination-specific descriptions: write from destination context, do not copy destination intro paragraphs verbatim, do not use rescue-link text such as "You may be looking for", and do not invent unsupported details.',
      queryText:
        'rewrite topic feature card descriptions from destination context using doormat description rules',
      promptKey: PromptKey.Doormats,
      outputMode: 'html',
      includeReferences: true,
      includeAssets: false,
      requireSkill: true,
    });
    return composed.prompt;
  }

  private buildRewriteUserContent(
    html: string,
    rows: TopicDoormatIssueRow[],
    summaries: TopicDoormatSummary[],
    pageLanguage: TopicDoormatPageLanguage,
    examples: Record<string, unknown>[],
  ): string {
    const selectedStateIssues =
      this.topicDoormatAnalysisState.hasAnalysis() &&
      this.topicDoormatAnalysisState.getAnalyzedHtml() === html
        ? this.topicDoormatAnalysisState.getSelectedRewriteIssues()
        : [];
    const selectedIssues = selectedStateIssues.length
      ? selectedStateIssues
      : rows
          .filter((row) => row.include && row.issueId !== 'no-issues')
          .map((row) => this.toRewriteIssueInput(row));
    const placeholderIssues = summaries
      .filter((summary) => this.hasGeneratedPlaceholderDescription(summary))
      .map((summary) => this.toGeneratedPlaceholderIssue(summary));
    const allIssues = [...selectedIssues, ...placeholderIssues];
    const affectedDoormatIndexes = this.getAffectedDoormatIndexesForRewrite(
      allIssues,
    );
    const summariesByIndex = new Map(
      summaries.map((summary) => [summary.index, summary]),
    );

    return JSON.stringify({
      page_html: html,
      topic_doormat_issue_analysis: {
        status: allIssues.length
          ? 'selected-issues'
          : 'analysis-available-no-selected-issues',
        instruction:
          'Use selected issues as rewrite priorities. Fix them when possible without violating the rewrite rules. Preserve doormats that do not have selected issues. If a doormat has a generated placeholder description, write a concise description from destination context.',
        selected_issues: allIssues.map((issue) =>
          this.toDoormatRewriteIssuePayload(issue),
        ),
      },
      doormats_with_selected_issues: Array.from(affectedDoormatIndexes)
        .map((index) => summariesByIndex.get(index))
        .filter((summary): summary is TopicDoormatSummary => summary !== undefined)
        .map((summary) => this.toDoormatDestinationRewritePayload(summary)),
      ...(examples.length
        ? {
            topic_doormat_examples: {
              status: 'language-filtered',
              page_language: pageLanguage,
              instruction:
                'Use these examples as set-level pattern guidance only. Do not copy example wording or legacy source markup. Follow the rewrite rules and preserve the current page language.',
              examples,
            },
          }
        : {}),
    });
  }

  private buildDraftUserContent(
    html: string,
    summaries: TopicDoormatSummary[],
    pageLanguage: TopicDoormatPageLanguage,
    examples: Record<string, unknown>[],
  ): string {
    const draftIssues = summaries.map((summary) =>
      this.toGeneratedPlaceholderIssue(summary),
    );
    return JSON.stringify({
      page_html: html,
      topic_doormat_issue_analysis: {
        status: 'generated-topic-draft',
        instruction:
          'This is a newly generated topic page. Write every generated topic doormat link name and description from destination context. Keep hrefs, order, and valid GCWeb doormat markup. Use concise link text and short, specific descriptions. After drafting, preserve unrelated page HTML.',
        selected_issues: draftIssues.map((issue) =>
          this.toDoormatRewriteIssuePayload(issue),
        ),
      },
      doormats_with_selected_issues: summaries.map((summary) =>
        this.toDoormatDestinationRewritePayload(summary),
      ),
      ...(examples.length
        ? {
            topic_doormat_examples: {
              status: 'language-filtered',
              page_language: pageLanguage,
              instruction:
                'Use these examples as set-level pattern guidance only. Do not copy example wording or legacy source markup. Follow the rewrite rules and preserve the current page language.',
              examples,
            },
          }
        : {}),
    });
  }

  private buildFeatureDraftUserContent(
    html: string,
    summaries: TopicDoormatSummary[],
  ): string {
    return JSON.stringify({
      page_html: html,
      topic_feature_description_draft: {
        status: 'generated-topic-feature-draft',
        instruction:
          'Write only the missing generated feature card descriptions. Use the same concise destination-specific description rules as topic doormats. Use destination context as evidence, not copy text. Do not use rescue-link text, page furniture, generic labels, or destination intro paragraphs verbatim. Preserve feature card link text, hrefs, images, order, and unrelated page HTML.',
      },
      features_requiring_descriptions: summaries.map((summary) =>
        this.toDoormatDestinationRewritePayload(summary),
      ),
    });
  }

  private extractGeneratedFeatureSummaries(doc: Document): TopicDoormatSummary[] {
    const summaries: TopicDoormatSummary[] = [];
    const featureSections = Array.from(
      doc.body.querySelectorAll<HTMLElement>('.gc-features'),
    );
    featureSections.forEach((section, sectionIndex) => {
      const links = Array.from(
        section.querySelectorAll<HTMLAnchorElement>('h2 a[href], h3 a[href]'),
      );
      links.forEach((link) => {
        const item = this.findFeatureItemForRewrite(link, section);
        const description = this.cleanDoormatRewriteText(
          item?.querySelector('p')?.textContent,
        );
        if (!this.hasGeneratedFeaturePlaceholderDescription(description)) {
          return;
        }
        const href = link.getAttribute('href')?.trim() || '';
        const linkText = this.cleanDoormatRewriteText(link.textContent);
        if (!href || !linkText) return;
        summaries.push({
          index: summaries.length + 1,
          linkText,
          href,
          description,
          headingLevel: this.toHeadingLevel(link.closest('h2, h3')),
          itemLinkCount: item?.querySelectorAll('a[href]').length ?? 1,
          headingLinkCount: link.closest('h2, h3')?.querySelectorAll('a[href]')
            .length ?? 1,
          descriptionLinkCount: item?.querySelector('p')?.querySelectorAll(
            'a[href]',
          ).length ?? 0,
          hasSplitHeadingLink: false,
          hasDescriptionLink: !!item?.querySelector('p a[href]'),
          hasDescriptionIconOrImage: !!item?.querySelector('p img, p svg'),
          hasDescriptionSpecialFormatting: !!item?.querySelector(
            'p strong, p b, p em, p i, p ul, p ol, p li, p mark, p code',
          ),
          rawItemText: this.cleanDoormatRewriteText(item?.textContent).slice(
            0,
            500,
          ),
          linkTextCharacterCount: linkText.length,
          descriptionCharacterCount: description.length,
          sectionIndex: sectionIndex + 1,
          sectionTitle: 'Features',
          sectionItemIndex: summaries.length + 1,
          sectionDoormatCount: links.length,
        });
      });
    });
    return summaries;
  }

  private hasGeneratedFeaturePlaceholderDescription(description: string): boolean {
    return (
      !description ||
      /\[\*\*\*.*(?:brief description|feature being promoted|action verbs|keywords|tasks|links to).*?\*\*\*\]/i.test(
        description,
      )
    );
  }

  private toRewriteIssueInput(
    row: TopicDoormatIssueRow,
  ): TopicDoormatIssueRewriteInput {
    return {
      rowType: row.rowType,
      severity: row.severity,
      issueId: row.issueId,
      issue: row.issue,
      recommendation: row.recommendation,
      evidence: row.evidence || undefined,
      evidenceMetric: row.evidenceMetric || undefined,
      sectionIndex: row.sectionIndex,
      sectionTitle: row.sectionTitle,
      sectionItemIndex: row.sectionItemIndex,
      doormatIndex: row.doormatIndex,
      affectedDoormatIndexes: row.affectedDoormatIndexes,
      doormatLabel: row.doormatLabel || undefined,
    };
  }

  private toGeneratedPlaceholderIssue(
    summary: TopicDoormatSummary,
  ): TopicDoormatIssueRewriteInput {
    return {
      rowType: 'doormat',
      severity: 'Medium',
      issueId: 'generated-topic-placeholder-description',
      issue: 'Generated doormat needs a destination-specific description',
      recommendation:
        'Write a concise doormat description from the destination page context.',
      evidence: summary.description,
      sectionIndex: summary.sectionIndex,
      sectionTitle: summary.sectionTitle,
      sectionItemIndex: summary.sectionItemIndex,
      doormatIndex: summary.index,
      doormatLabel: summary.linkText,
    };
  }

  private hasGeneratedPlaceholderDescription(summary: TopicDoormatSummary): boolean {
    return /\[\*\*\*.*(?:action verbs|keywords|tasks|links to).*?\*\*\*\]/i.test(
      summary.description || '',
    );
  }

  private async getExamplesForLanguage(
    pageLanguage: TopicDoormatPageLanguage,
  ): Promise<Record<string, unknown>[]> {
    const examples = await this.loadExamples();
    return examples
      .map((example) => this.toLanguageFilteredExample(example, pageLanguage))
      .filter((example): example is Record<string, unknown> => !!example);
  }

  private async loadExamples(): Promise<TopicDoormatRewriteExample[]> {
    if (this.examplesCache) {
      return this.examplesCache;
    }

    try {
      const response = await fetch(this.examplesPath);
      if (!response.ok) {
        throw new Error(`Failed to load topic doormat examples (${response.status}).`);
      }
      const payload = (await response.json()) as unknown;
      const rawExamples = Array.isArray(payload)
        ? payload
        : payload &&
            typeof payload === 'object' &&
            Array.isArray((payload as Record<string, unknown>)['examples'])
          ? ((payload as Record<string, unknown>)['examples'] as unknown[])
          : [];
      this.examplesCache = rawExamples
        .filter(
          (example): example is TopicDoormatRewriteExample =>
            !!example && typeof example === 'object' && !Array.isArray(example),
        )
        .map((example) => example as TopicDoormatRewriteExample);
      return this.examplesCache;
    } catch (err) {
      console.warn('Unable to load topic doormat rewrite examples:', err);
      this.examplesCache = [];
      return [];
    }
  }

  private toLanguageFilteredExample(
    example: TopicDoormatRewriteExample,
    pageLanguage: TopicDoormatPageLanguage,
  ): Record<string, unknown> | null {
    const languageSet = example.sets?.[pageLanguage];
    if (!languageSet || typeof languageSet !== 'object') return null;

    return {
      id: example.id,
      languages: example.languages,
      languagePair: example.languagePair,
      pageTopic: example.pageTopic,
      setSize: example.setSize,
      setSizeBand: example.setSizeBand,
      pageType: example.pageType,
      domainTags: example.domainTags,
      patternTags: example.patternTags,
      issueTags: example.issueTags,
      notes: example.notes,
      selectedLanguage: pageLanguage,
      set: this.toModelExampleSet(languageSet),
    };
  }

  private toModelExampleSet(
    languageSet: TopicDoormatRewriteExampleLanguageSet,
  ): Record<string, unknown> {
    return {
      sourceHtmlShape: languageSet.sourceHtmlShape,
      items: Array.isArray(languageSet.items)
        ? languageSet.items
            .filter(
              (item): item is TopicDoormatRewriteExampleItem =>
                !!item && typeof item === 'object' && !Array.isArray(item),
            )
            .map((item) => ({
              position: item.position,
              linkText: item.linkText,
              description: item.description,
            }))
        : [],
    };
  }

  private async callOpenRouterForRewrite(
    model: AiModel,
    messages: ChatMessage[],
  ): Promise<{ text: string; usedModel: string }> {
    const candidates = this.buildModelRotation(model);
    let lastError: Error | undefined;

    for (const candidate of candidates) {
      try {
        const response = await this.openRouter.call(candidate, messages, {
          temperature: 0,
          title: 'Content Assistant - Topic Doormat Rewrite',
          throwOnError: true,
          timeoutMs: this.topicDoormatRewriteAttemptTimeoutMs,
        });
        if (this.hasNoOpenRouterChoices(response)) {
          console.info('[TopicDoormatRewrite] model attempt failed', {
            model: candidate,
            timeoutMs: this.topicDoormatRewriteAttemptTimeoutMs,
            error: `OpenRouter provider returned no choices for ${candidate}.`,
            response: this.openRouter.buildResponseMetadata(response),
          });
          lastError = new Error(
            `Doormat rewrite failed for ${this.getShortModelName(candidate)}: OpenRouter provider returned no choices.`,
          );
          continue;
        }
        const text = response?.choices?.[0]?.message?.content?.trim() || '';
        if (!text) {
          console.info('[TopicDoormatRewrite] model attempt returned empty content', {
            model: candidate,
            timeoutMs: this.topicDoormatRewriteAttemptTimeoutMs,
            response: this.openRouter.buildResponseMetadata(response),
          });
          lastError = new Error(
            `Doormat rewrite response was empty (${this.getShortModelName(candidate)}).`,
          );
          continue;
        }
        return { text, usedModel: candidate };
      } catch (err) {
        lastError = new Error(
          `Doormat rewrite failed for ${this.getShortModelName(candidate)}: ${
            err instanceof Error ? err.message : String(err)
          }`,
        );
        continue;
      }
    }

    throw lastError ?? new Error('Doormat rewrite response was empty.');
  }

  private buildModelRotation(model: AiModel): string[] {
    const fallbackOrder: AiModel[] = [
      AiModel.NemotronUltra,
      AiModel.NemotronLightning,
      AiModel.NemotronSuper,
      AiModel.FreeModelsRouter,
    ];
    if (model === AiModel.FreeModelsRouter) {
      return fallbackOrder;
    }
    return [
      model,
      ...fallbackOrder.filter((candidate) => candidate !== model),
    ];
  }

  private hasNoOpenRouterChoices(response: unknown): boolean {
    return (
      !!response &&
      (!Array.isArray((response as { choices?: unknown }).choices) ||
        (response as { choices?: unknown[] }).choices?.length === 0)
    );
  }

  private extractDoormatRewriteHtmlFromStructuredResponse(
    text: string,
  ): string | null {
    const cleaned = (text || '').trim();
    if (!cleaned) return null;
    const stripped = this.alertAi.stripCodeFences(cleaned);
    const parsed = this.alertAi.looseJsonParse(stripped);
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
      return null;
    }
    const payload = parsed as Record<string, unknown>;
    const candidates = [
      payload['fullUpdatedHtml'],
      payload['full_updated_html'],
      payload['rewrittenDoormatSetHtml'],
      payload['rewritten_doormat_set_html'],
      payload['updatedHtml'],
      payload['updated_html'],
    ];
    for (const candidate of candidates) {
      if (typeof candidate !== 'string') continue;
      const html = candidate.trim();
      if (this.containsRenderableHtml(html)) return html;
    }
    return this.extractDoormatUpdatedHtmlFragments(payload['doormats']);
  }

  private extractDoormatUpdatedHtmlFragments(value: unknown): string | null {
    if (!Array.isArray(value)) return null;
    const fragments = value
      .map((entry) => {
        if (!entry || typeof entry !== 'object') return '';
        const item = entry as Record<string, unknown>;
        const html = item['updatedHtml'] ?? item['updated_html'];
        return typeof html === 'string' && this.containsRenderableHtml(html)
          ? html.trim()
          : '';
      })
      .filter(Boolean);
    return fragments.length ? fragments.join('\n') : null;
  }

  private looksLikeStructuredAiJsonResponse(text: string): boolean {
    const cleaned = (text || '').trim();
    if (!cleaned) return false;
    if (cleaned.startsWith('<') && this.containsRenderableHtml(cleaned)) {
      return false;
    }
    const stripped = this.alertAi.stripCodeFences(cleaned);
    const parsed = this.alertAi.looseJsonParse(stripped);
    if (parsed && typeof parsed === 'object') return true;
    return /"(?:rewrittenDoormatSetHtml|rewritten_doormat_set_html|fullUpdatedHtml|full_updated_html|updatedHtml|updated_html|doormats)"\s*:/i.test(
      stripped,
    );
  }

  private containsRenderableHtml(value: string): boolean {
    return /<[a-z][\s\S]*>/i.test(value);
  }

  private applyDoormatRewriteToPageHtml(
    originalHtml: string,
    rewriteHtml: string,
  ): string {
    const normalizedOriginal =
      this.topicDoormatTemplateNormalizer.normalizeLegacyDoormats(originalHtml);
    const htmlToPatch = normalizedOriginal.html;
    const parser = new DOMParser();
    const originalDoc = parser.parseFromString(htmlToPatch, 'text/html');
    const rewriteDoc = parser.parseFromString(rewriteHtml, 'text/html');
    const originalDoormatSections = Array.from(
      originalDoc.body.querySelectorAll('.gc-srvinfo'),
    );
    const rewrittenDoormatSections = Array.from(
      rewriteDoc.body.querySelectorAll('.gc-srvinfo'),
    );

    if (!originalDoormatSections.length) {
      throw new Error(
        'The current page does not contain a topic doormat section to update.',
      );
    }
    if (!rewrittenDoormatSections.length) {
      if (this.getDoormatItemsByHref(rewriteDoc.body).size) {
        originalDoormatSections.forEach((section) => {
          this.applyDoormatItemRewritesByHref(originalDoc, section, rewriteDoc.body);
        });
        return this.serializeParsedHtmlLikeInput(htmlToPatch, originalDoc);
      }
      throw new Error(
        'The AI response did not include a topic doormat section. No comparison update was applied.',
      );
    }
    rewrittenDoormatSections.forEach((section) => {
      const originalSection = this.findOriginalDoormatSectionForRewrite(
        originalDoormatSections,
        section,
      );
      if (!originalSection) return;
      this.applyDoormatItemRewritesByHref(originalDoc, originalSection, section);
    });

    return this.serializeParsedHtmlLikeInput(htmlToPatch, originalDoc);
  }

  private applyFeatureRewriteToPageHtml(
    originalHtml: string,
    rewriteHtml: string,
  ): string {
    const parser = new DOMParser();
    const originalDoc = parser.parseFromString(originalHtml, 'text/html');
    const rewriteDoc = parser.parseFromString(rewriteHtml, 'text/html');
    const originalFeatures = this.getFeatureItemsByHref(originalDoc.body);
    const rewrittenFeatures = this.getFeatureItemsByHref(rewriteDoc.body);

    if (!originalFeatures.size) {
      throw new Error(
        'The current page does not contain generated topic feature cards to update.',
      );
    }
    if (!rewrittenFeatures.size) {
      throw new Error(
        'The AI response did not include topic feature cards. No comparison update was applied.',
      );
    }

    rewrittenFeatures.forEach((rewrittenItem, href) => {
      const originalItem = originalFeatures.get(href);
      if (!originalItem) return;
      const originalDescription = originalItem.querySelector('p');
      const rewrittenDescription = rewrittenItem.querySelector('p');
      if (!originalDescription || !rewrittenDescription) return;
      if (
        !this.hasGeneratedFeaturePlaceholderDescription(
          this.cleanDoormatRewriteText(originalDescription.textContent),
        )
      ) {
        return;
      }
      originalDescription.innerHTML = rewrittenDescription.innerHTML;
    });

    return this.serializeParsedHtmlLikeInput(originalHtml, originalDoc);
  }

  private findOriginalDoormatSectionForRewrite(
    originalSections: Element[],
    rewrittenSection: Element,
  ): Element | null {
    const rewrittenHrefs = this.getDoormatSectionHrefs(rewrittenSection);
    if (!rewrittenHrefs.size) return null;
    const candidates = originalSections
      .map((section) => ({
        section,
        matchCount: Array.from(rewrittenHrefs).filter((href) =>
          this.getDoormatSectionHrefs(section).has(href),
        ).length,
      }))
      .filter((candidate) => candidate.matchCount > 0)
      .sort((a, b) => b.matchCount - a.matchCount);
    return candidates[0]?.section ?? null;
  }

  private applyDoormatItemRewritesByHref(
    originalDoc: Document,
    originalSection: Element,
    rewrittenSection: Element,
  ): void {
    const originalItemsByHref = this.getDoormatItemsByHref(originalSection);
    this.getDoormatItemsByHref(rewrittenSection).forEach(
      (rewrittenItem, href) => {
        const originalItem = originalItemsByHref.get(href);
        if (!originalItem) return;
        this.patchOriginalDoormatItemFromRewrite(
          originalDoc,
          originalItem,
          rewrittenItem,
          href,
        );
      },
    );
  }

  private patchOriginalDoormatItemFromRewrite(
    originalDoc: Document,
    originalItem: Element,
    rewrittenItem: Element,
    href: string,
  ): void {
    const originalLink = this.findDoormatLinkByHref(originalItem, href);
    const rewrittenLink = this.findDoormatLinkByHref(rewrittenItem, href);
    if (originalLink && rewrittenLink) {
      originalLink.textContent = this.cleanDoormatRewriteText(
        rewrittenLink.textContent,
      );
    }
    const originalDescription = originalItem.querySelector('p');
    const rewrittenDescription = rewrittenItem.querySelector('p');
    if (originalDescription && rewrittenDescription) {
      originalDescription.innerHTML = rewrittenDescription.innerHTML;
    }
    this.patchOriginalDoormatLabelsFromRewrite(
      originalDoc,
      originalItem,
      rewrittenItem,
      originalLink,
    );
  }

  private patchOriginalDoormatLabelsFromRewrite(
    originalDoc: Document,
    originalItem: Element,
    rewrittenItem: Element,
    originalLink: HTMLAnchorElement | null,
  ): void {
    const originalLabels = Array.from(
      originalItem.querySelectorAll(this.getDoormatLabelSelector()),
    );
    const rewrittenLabels = Array.from(
      rewrittenItem.querySelectorAll(this.getDoormatLabelSelector()),
    );
    originalLabels.forEach((label) => label.remove());
    if (!rewrittenLabels.length || !originalLink) return;
    const parent = originalLink.parentElement;
    if (!parent) return;
    let insertionPoint: ChildNode = originalLink;
    rewrittenLabels.forEach((label) => {
      const spacer = originalDoc.createTextNode(' ');
      const importedLabel = originalDoc.importNode(label, true);
      parent.insertBefore(spacer, insertionPoint.nextSibling);
      parent.insertBefore(importedLabel, spacer.nextSibling);
      insertionPoint = importedLabel;
    });
  }

  private findDoormatLinkByHref(
    item: Element,
    href: string,
  ): HTMLAnchorElement | null {
    return (
      Array.from(
        item.querySelectorAll<HTMLAnchorElement>('h2 a[href], h3 a[href]'),
      ).find((link) => link.getAttribute('href')?.trim() === href) ?? null
    );
  }

  private getDoormatSectionHrefs(section: Element): Set<string> {
    return new Set(this.getDoormatItemsByHref(section).keys());
  }

  private getDoormatItemsByHref(section: Element): Map<string, Element> {
    const itemsByHref = new Map<string, Element>();
    Array.from(
      section.querySelectorAll<HTMLAnchorElement>('h2 a[href], h3 a[href]'),
    ).forEach((link) => {
      const href = link.getAttribute('href')?.trim();
      if (!href || itemsByHref.has(href)) return;
      const item = this.findDoormatItemForRewrite(link, section);
      if (item) itemsByHref.set(href, item);
    });
    return itemsByHref;
  }

  private findDoormatItemForRewrite(
    link: HTMLAnchorElement,
    section: Element,
  ): Element | null {
    let current: Element | null = link;
    while (current && current !== section) {
      if (current !== link && current.querySelector('p')) return current;
      current = current.parentElement;
    }
    return section.querySelector('p') ? section : null;
  }

  private getFeatureItemsByHref(container: ParentNode): Map<string, Element> {
    const itemsByHref = new Map<string, Element>();
    Array.from(
      container.querySelectorAll<HTMLAnchorElement>(
        '.gc-features h2 a[href], .gc-features h3 a[href]',
      ),
    ).forEach((link) => {
      const href = link.getAttribute('href')?.trim();
      if (!href || itemsByHref.has(href)) return;
      const section = link.closest('.gc-features');
      const item = section ? this.findFeatureItemForRewrite(link, section) : null;
      if (item) itemsByHref.set(href, item);
    });
    return itemsByHref;
  }

  private findFeatureItemForRewrite(
    link: HTMLAnchorElement,
    section: Element,
  ): Element | null {
    const column = link.closest(
      '.col-lg-4, .col-md-6, .col-sm-6, .col-md-12',
    );
    if (column?.querySelector('p')) return column;
    let current: Element | null = link;
    while (current && current !== section) {
      if (current !== link && current.querySelector('p')) return current;
      current = current.parentElement;
    }
    return section.querySelector('p') ? section : null;
  }

  private getDoormatLabelSelector(): string {
    return '.label, .badge, [class*="label-"], [class*="badge-"]';
  }

  private cleanDoormatRewriteText(value: string | null | undefined): string {
    return (value || '').replace(/\s+/g, ' ').trim();
  }

  private toHeadingLevel(heading: Element | null): number | null {
    if (!heading) return null;
    const level = Number.parseInt(heading.tagName.slice(1), 10);
    return Number.isFinite(level) ? level : null;
  }

  private serializeParsedHtmlLikeInput(originalHtml: string, doc: Document): string {
    if (/<html[\s>]/i.test(originalHtml)) {
      const doctype = originalHtml.trimStart().toLowerCase().startsWith('<!doctype')
        ? '<!doctype html>\n'
        : '';
      return `${doctype}${doc.documentElement.outerHTML}`;
    }
    if (/<body[\s>]/i.test(originalHtml)) return doc.body.outerHTML;
    return doc.body.innerHTML;
  }

  private getAffectedDoormatIndexesForRewrite(
    issues: TopicDoormatIssueRewriteInput[],
  ): Set<number> {
    const indexes = new Set<number>();
    issues.forEach((issue) => {
      if (typeof issue.doormatIndex === 'number') indexes.add(issue.doormatIndex);
      (issue.affectedDoormatIndexes ?? []).forEach((index) => {
        if (typeof index === 'number') indexes.add(index);
      });
    });
    return indexes;
  }

  private toDoormatDestinationRewritePayload(
    summary: TopicDoormatSummary,
  ): Record<string, unknown> {
    return {
      index: summary.index,
      section_index: summary.sectionIndex,
      section_title: summary.sectionTitle,
      section_item_index: summary.sectionItemIndex,
      href: summary.href,
      current_link_text: summary.linkText,
      current_description: summary.description,
      destination: {
        url: summary.destinationUrl,
        http_status: summary.destinationHttpStatus,
        title: summary.destinationPageTitle,
        h1: summary.destinationPageHeading,
        intro_paragraphs: summary.destinationIntroParagraphs ?? [],
        h2_headings: summary.destinationSectionHeadings ?? [],
        label_evidence: summary.destinationLabelEvidence ?? [],
        main_html: summary.destinationMainHtml || '',
        main_html_truncated: !!summary.destinationMainHtmlTruncated,
        context_status: summary.destinationContextStatus,
      },
    };
  }

  private toDoormatRewriteIssuePayload(
    issue: TopicDoormatIssueRewriteInput,
  ): Record<string, unknown> {
    return {
      row_type: issue.rowType,
      severity: issue.severity,
      issue_id: issue.issueId,
      issue: issue.issue,
      recommendation: issue.recommendation,
      evidence: issue.evidence,
      evidence_metric: issue.evidenceMetric,
      section_index: issue.sectionIndex,
      section_title: issue.sectionTitle,
      section_item_index: issue.sectionItemIndex,
      doormat_index: issue.doormatIndex,
      affected_doormat_indexes: issue.affectedDoormatIndexes,
      doormat_label: issue.doormatLabel,
    };
  }

  private getShortModelName(model: string): string {
    const parts = model.split('/');
    return parts[parts.length - 1] || model;
  }
}
