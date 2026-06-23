import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { firstValueFrom } from 'rxjs';
import { PromptKey, UploadData } from '../data/data.model';
import { ChatMessage } from './openrouter.service';
import { SkillManagerService } from './skill-manager.service';
import {
  TopicDoormatIaCheckResult,
  TopicDoormatIaCheckService,
} from './topic-doormat-ia-check.service';
import { TopicDoormatModelClientService } from './topic-doormat-model-client.service';
import { TopicDoormatUrlComparisonService } from './topic-doormat-url-comparison.service';
import {
  MostRequestedLinkSummary,
  TopicDoormatDescriptionStyle,
  TopicDoormatDestinationLinkRelationshipBasis,
  TopicDoormatDestinationLinkRelationship,
  TopicDoormatIssueCategory,
  TopicDoormatIssueRow,
  TopicDoormatIssueTaxonomy,
  TopicDoormatLinkTextStyle,
  TopicDoormatPageLanguage,
  TopicDoormatSectionStyleAnalysis,
  TopicDoormatSummary,
} from './topic-doormat.types';

export interface TopicDoormatIssueAnalysisInput {
  doormatSummaries: TopicDoormatSummary[];
  pageLanguage: TopicDoormatPageLanguage;
  hasLegacyTopicDoormatTemplate: boolean;
  mostRequestedLinks: MostRequestedLinkSummary[];
  uploadData?: Partial<UploadData> | null;
  selectedModel?: string;
}

export interface TopicDoormatIssueAnalysisResult {
  rows: TopicDoormatIssueRow[];
  text: string;
  usedLocalFallback: boolean;
  model: string;
  modelRotation: string[];
  elapsedMs: number;
}

interface TopicDoormatDestinationContextElement {
  id: string;
  type: 'intro' | 'h2';
  text: string;
}

interface TopicDoormatDestinationContentAssessment {
  importantElementIds: string[];
  coveredElementIds: string[];
  missingImportantElementIds: string[];
}

interface TopicDoormatDestinationLinkAssessment {
  relationship: TopicDoormatDestinationLinkRelationship;
  basis: TopicDoormatDestinationLinkRelationshipBasis;
  reason: string;
}

@Injectable({ providedIn: 'root' })
export class TopicDoormatIssueAnalysisService {
  private readonly http = inject(HttpClient);
  private readonly translate = inject(TranslateService);
  private readonly skillManager = inject(SkillManagerService);
  private readonly modelClient = inject(TopicDoormatModelClientService);
  private readonly iaCheck = inject(TopicDoormatIaCheckService);
  private readonly urlComparison = inject(TopicDoormatUrlComparisonService);
  private readonly topicDoormatDebugStorageKey =
    'pageAssistant.topicDoormatDebug';
  private readonly topicDoormatIssueTaxonomyPath =
    'skills/topic-doormats/issues/references/issue-taxonomy.json';
  private readonly topicDoormatIssueLengthLimits: Record<
    TopicDoormatPageLanguage,
    Record<string, number>
  > = {
    en: {
      'link-name-too-long': 35,
      'description-too-long': 95,
    },
    fr: {
      'link-name-too-long': 45,
      'description-too-long': 120,
    },
  };
  private readonly topicDoormatTrailingPunctuationPattern = /[.:;?!,]$/;
  private readonly locallyOwnedTopicDoormatIssueIds = new Set([
    'description-contains-link',
    'description-missing-needed-information',
    'description-too-long',
    'description-trailing-punctuation',
    'duplicate-link-in-most-requested',
    'link-name-too-long',
    'link-name-too-different-from-destination-title',
    'link-name-trailing-punctuation',
    'missing-needed-doormat',
    'mixed-description-style-in-section',
    'mixed-link-name-styles-in-section',
    'multiple-links',
    'repeated-description-opening',
    'section-description-style-outlier',
    'split-heading-link',
    'too-many-doormats-in-section',
    'unnecessary-doormat',
    'inconsistent-link-name-style',
  ]);
  private readonly topicDoormatDescriptionStyleOrder: Exclude<
    TopicDoormatDescriptionStyle,
    'mixed-or-unclear'
  >[] = [
    'action-verb-task-summary',
    'noun-topic-summary',
    'keyword-list',
    'task-list',
    'eligibility-or-benefit-summary',
  ];
  private readonly topicDoormatLinkTextStyleOrder: Exclude<
    TopicDoormatLinkTextStyle,
    'mixed-or-unclear'
  >[] = [
    'action-verb',
    'noun-topic',
    'product-or-service',
    'audience-group',
  ];
  private topicDoormatIssueTaxonomyLoad?: Promise<void>;
  private topicDoormatModelIssueContract = '';
  private topicDoormatIssueIdToLabel = new Map<string, string>();
  private topicDoormatIssueAliasToId = new Map<string, string>();

  async analyze(
    input: TopicDoormatIssueAnalysisInput,
  ): Promise<TopicDoormatIssueAnalysisResult> {
    const analysisStart = performance.now();
    await this.loadTopicDoormatIssueTaxonomy();
    const composed = await this.skillManager.composePrompt({
      basePrompt: '',
      queryText:
        'analyze topic doormats issue report for each doormat',
      promptKey: PromptKey.Doormats,
      outputMode: 'json',
      includeReferences: false,
      includeAssets: true,
      requireSkill: true,
    });

    const localOwnershipInstruction = [
      'Runtime issue ownership: AIDA calculates the following issues locally.',
      'Do not return them in section_issues or doormat issues:',
      Array.from(this.locallyOwnedTopicDoormatIssueIds).join(', '),
      'You must still return exactly one allowed detected_description_style for every doormat.',
      'You must still return exactly one allowed detected_link_text_style, destination_link_relationship, and destination_link_relationship_basis for every doormat.',
      'Classify the rhetorical construction, not the subject matter. An action-framed description remains action-verb-task-summary when it discusses eligibility, benefits, residency, dates, or status.',
    ].join('\n');
    const systemPrompt = [
      composed.prompt,
      this.topicDoormatModelIssueContract,
      localOwnershipInstruction,
    ]
      .filter(Boolean)
      .join('\n\n');
    const messages: ChatMessage[] = [
      {
        role: 'system',
        content: systemPrompt,
      },
      {
        role: 'user',
        content: JSON.stringify({
          doormats: input.doormatSummaries.map((summary) => ({
            index: summary.index,
            linkText: summary.linkText,
            href: summary.href,
            description: summary.description,
            destinationUrl: summary.destinationUrl,
            destinationPageTitle: summary.destinationPageTitle,
            destinationPageHeading: summary.destinationPageHeading,
            destinationContext: {
              status: summary.destinationContextStatus ?? 'insufficient',
              pageTitle: summary.destinationPageTitle ?? '',
              h1: summary.destinationPageHeading ?? '',
              elements:
                this.buildTopicDoormatDestinationContextElements(summary),
            },
            sectionIndex: summary.sectionIndex,
            sectionTitle: summary.sectionTitle,
            sectionItemIndex: summary.sectionItemIndex,
          })),
        }),
      },
    ];
    const modelRotation = this.modelClient.buildModelRotation(
      input.selectedModel,
    );
    this.debugTopicDoormatIssues('request prepared', {
      selectedModel: input.selectedModel,
      modelRotation,
      pageLanguage: input.pageLanguage,
      doormatSummaryCount: input.doormatSummaries.length,
      sectionCounts: this.buildTopicDoormatSectionCounts(input.doormatSummaries),
      overLimitSummaryIndexes:
        this.getTopicDoormatOverLimitSectionIndexes(input.doormatSummaries),
      doormatSummaries: input.doormatSummaries.map((summary) => ({
        index: summary.index,
        linkText: summary.linkText,
        href: summary.href,
        destinationUrl: summary.destinationUrl,
        destinationPageTitle: summary.destinationPageTitle,
        destinationPageHeading: summary.destinationPageHeading,
        destinationContextStatus: summary.destinationContextStatus,
        destinationIntroParagraphs: summary.destinationIntroParagraphs,
        destinationSectionHeadings: summary.destinationSectionHeadings,
        linkTextCharacterCount: summary.linkTextCharacterCount,
        descriptionCharacterCount: summary.descriptionCharacterCount,
        headingLevel: summary.headingLevel,
        itemLinkCount: summary.itemLinkCount,
        headingLinkCount: summary.headingLinkCount,
        descriptionLinkCount: summary.descriptionLinkCount,
        hasSplitHeadingLink: summary.hasSplitHeadingLink,
        hasDescriptionLink: summary.hasDescriptionLink,
        hasDescriptionIconOrImage: summary.hasDescriptionIconOrImage,
        hasDescriptionSpecialFormatting:
          summary.hasDescriptionSpecialFormatting,
        sectionIndex: summary.sectionIndex,
        sectionTitle: summary.sectionTitle,
        sectionItemIndex: summary.sectionItemIndex,
        sectionDoormatCount: summary.sectionDoormatCount,
      })),
      mostRequestedLinkCount: input.mostRequestedLinks.length,
      loadedSkillResources: composed.loadedPaths,
      loadedIssueTaxonomyLabels: this.topicDoormatIssueIdToLabel.size,
      estimatedSystemPromptTokens: Math.ceil(systemPrompt.length / 4),
      systemPromptCharacters: systemPrompt.length,
      compactModelIssueContractCharacters:
        this.topicDoormatModelIssueContract.length,
      userPayloadCharacters: messages[1].content.length,
      totalMessageCharacters: messages.reduce(
        (total, message) => total + message.content.length,
        0,
      ),
    });

    const [issueJson, localIaResult] = await Promise.all([
      this.modelClient.requestIssueJson({
        messages,
        requestedModel: input.selectedModel,
        doormatSummaries: input.doormatSummaries,
        isParseableResponseText: (value) =>
          this.isParseableTopicDoormatIssueResponseText(value),
        debug: (event, details) => this.debugTopicDoormatIssues(event, details),
      }),
      this.iaCheck.analyze(input.doormatSummaries, input.uploadData).catch(
        (err: unknown) => {
          this.debugTopicDoormatIssues('local IA checks failed', {
            error: err instanceof Error ? err.message : String(err),
          });
          return {
            rows: [],
            metaByDoormatIndex: new Map<number, string>(),
          } satisfies TopicDoormatIaCheckResult;
        },
      ),
    ]);
    const { text, model } = issueJson;
    const localIaRows = localIaResult.rows;
    const rows = text
      ? this.parseTopicDoormatIssueRows(
          text,
          input.doormatSummaries,
          input.hasLegacyTopicDoormatTemplate,
          input.pageLanguage,
          input.mostRequestedLinks,
          input.uploadData,
          localIaRows,
        )
      : this.buildTopicDoormatFallbackRows(
          input.doormatSummaries,
          input.hasLegacyTopicDoormatTemplate,
          input.pageLanguage,
          input.mostRequestedLinks,
          input.uploadData,
          localIaRows,
        );
    const rowsWithIaMeta = this.applyTopicDoormatSectionItemMeta(
      rows,
      localIaResult.metaByDoormatIndex,
    );

    return {
      rows: rowsWithIaMeta,
      text,
      usedLocalFallback: !text,
      model,
      modelRotation: issueJson.modelRotation,
      elapsedMs: Math.round(performance.now() - analysisStart),
    };
  }

  debug(event: string, details: Record<string, unknown>): void {
    this.debugTopicDoormatIssues(event, details);
  }
  private debugTopicDoormatIssues(
    event: string,
    details: Record<string, unknown>,
  ): void {
    if (!this.isTopicDoormatDebugEnabled()) return;
    console.debug(`[TopicDoormatIssues] ${event}`, details);
  }

  private isTopicDoormatDebugEnabled(): boolean {
    try {
      return localStorage.getItem(this.topicDoormatDebugStorageKey) === 'true';
    } catch {
      return false;
    }
  }

  private parseTopicDoormatIssueRows(
    text: string,
    doormatSummaries: TopicDoormatSummary[] = [],
    hasLegacyTopicDoormatTemplate = false,
    pageLanguage: TopicDoormatPageLanguage = 'en',
    mostRequestedLinks: MostRequestedLinkSummary[] = [],
    uploadData?: Partial<UploadData> | null,
    localIaRows: TopicDoormatIssueRow[] = [],
  ): TopicDoormatIssueRow[] {
    const parsed = this.looseJsonParse(this.stripCodeFences(text));
    if (!parsed || typeof parsed !== 'object') {
      const fallbackRows = this.buildTopicDoormatFallbackRows(
        doormatSummaries,
        hasLegacyTopicDoormatTemplate,
        pageLanguage,
        mostRequestedLinks,
        uploadData,
        localIaRows,
      );
      this.debugTopicDoormatIssues('response parse fallback', {
        reason: 'invalid-json-or-non-object',
        doormatSummaryCount: doormatSummaries.length,
        fallbackRows: fallbackRows.length,
      });
      return fallbackRows;
    }
    const root = parsed as Record<string, unknown>;
    const doormats = Array.isArray(root['doormats']) ? root['doormats'] : [];
    const descriptionStylesByDoormatIndex =
      this.parseTopicDoormatDescriptionStyles(doormats);
    const linkStylesByDoormatIndex =
      this.parseTopicDoormatLinkTextStyles(doormats);
    const destinationLinkAssessmentsByDoormatIndex =
      this.parseTopicDoormatDestinationLinkAssessments(doormats);
    const destinationContentAssessmentsByDoormatIndex =
      this.parseTopicDoormatDestinationContentAssessments(doormats);
    const sectionIssueRows = this.parseTopicDoormatSectionIssueRows(
      root['section_issues'],
      doormatSummaries,
    );
    const sectionIssueKeys = new Set(
      sectionIssueRows.map(
      (row) => `${row.sectionIndex ?? 0}|${row.issueId}`,
      ),
    );

    const summariesByIndex = new Map(
      doormatSummaries.map((summary) => [summary.index, summary]),
    );
    const contentGapDoormatIndexes = new Set(
      doormatSummaries
        .filter(
          (summary) =>
            this.getValidatedTopicDoormatMissingElements(
              summary,
              destinationContentAssessmentsByDoormatIndex.get(summary.index),
            ).length > 0,
        )
        .map((summary) => summary.index),
    );

    const rows: TopicDoormatIssueRow[] = doormats.flatMap((rawDoormat) => {
      if (!rawDoormat || typeof rawDoormat !== 'object') return [];
      const doormat = rawDoormat as Record<string, unknown>;
      const index = this.toNumber(doormat['doormat_index']);
      const linkText = this.cleanString(doormat['link_text']);
      const href = this.cleanString(doormat['href']);
      const issues = Array.isArray(doormat['issues']) ? doormat['issues'] : [];
      const summary = index ? summariesByIndex.get(index) : undefined;
      const label = summary
        ? this.buildTopicDoormatLabel(summary)
        : [index ? `${index}.` : '', linkText || href || 'Doormat']
            .filter(Boolean)
            .join(' ');

      if (!issues.length) {
        return [
          this.buildTopicDoormatNoIssueRow(
            summary ?? {
              index: index ?? 0,
              linkText,
              href,
              description: '',
              headingLevel: null,
              itemLinkCount: 0,
              headingLinkCount: 0,
              descriptionLinkCount: 0,
              hasSplitHeadingLink: false,
              hasDescriptionLink: false,
              hasDescriptionIconOrImage: false,
              hasDescriptionSpecialFormatting: false,
              rawItemText: '',
              linkTextCharacterCount: linkText.length,
              descriptionCharacterCount: 0,
              sectionIndex: 0,
              sectionTitle: '',
              sectionItemIndex: 0,
              sectionDoormatCount: 0,
            },
          ),
        ];
      }

      return issues
        .map((rawIssue): TopicDoormatIssueRow | null => {
          if (!rawIssue || typeof rawIssue !== 'object') return null;
          const issue = rawIssue as Record<string, unknown>;
          const issueId = this.getTopicDoormatIssueId(issue);
          const severity = this.normalizeTopicDoormatModelSeverity(
            issue['severity'],
          );
          if (
            !this.topicDoormatIssueIdToLabel.has(issueId) ||
            !severity
          ) {
            return null;
          }
          if (!this.isReportableTopicDoormatIssue(
            issue,
            summary,
            pageLanguage,
          )) {
            return null;
          }
          if (
            issueId === 'description-lacks-clarity' &&
            index &&
            contentGapDoormatIndexes.has(index)
          ) {
            return null;
          }
          if (
            issueId === 'mixed-description-style-in-section' ||
            issueId === 'mixed-link-name-styles-in-section'
          ) {
            const sectionRow = this.buildTopicDoormatSectionIssueRow(
              issue,
              summary?.sectionIndex,
            );
            if (!sectionRow) return null;
            const sectionKey = `${sectionRow.sectionIndex ?? 0}|${
              sectionRow.issueId
            }`;
            if (!sectionIssueKeys.has(sectionKey)) {
              sectionIssueRows.push(sectionRow);
              sectionIssueKeys.add(sectionKey);
            }
            return null;
          }
          if (this.locallyOwnedTopicDoormatIssueIds.has(issueId)) return null;
          if (!this.hasValidTopicDoormatObjectiveEvidence(issueId, summary)) {
            return null;
          }
          const evidence = this.buildTopicDoormatEvidence(issue, summary);
          return {
            include:
              typeof issue['include'] === 'boolean'
                ? issue['include']
                : true,
            rowType: 'doormat',
            severity,
            doormat: label,
            doormatLabel: summary?.linkText || linkText || href || 'Doormat',
            issueId,
            issue: this.getTopicDoormatIssueLabel(issueId),
            evidence,
            recommendation: this.cleanString(issue['recommendation']),
            doormatIndex: index ?? undefined,
            sectionIndex: summary?.sectionIndex,
            sectionTitle: summary?.sectionTitle,
            sectionItemIndex: summary?.sectionItemIndex,
          } satisfies TopicDoormatIssueRow;
        })
        .filter((row): row is TopicDoormatIssueRow => row !== null);
    });

    const reportableSectionIssueRows = sectionIssueRows.filter(
      (row) =>
        !this.locallyOwnedTopicDoormatIssueIds.has(row.issueId),
    );
    const descriptionStyleAnalyses = this.analyzeTopicDoormatDescriptionStyles(
      doormatSummaries,
      descriptionStylesByDoormatIndex,
    );
    const descriptionStyleAnalysisBySection = new Map(
      descriptionStyleAnalyses.map((analysis) => [
        analysis.sectionIndex,
        analysis,
      ]),
    );
    const mixedDescriptionStyleSectionIndexes = new Set(
      descriptionStyleAnalyses
        .filter((analysis) => analysis.isMixed)
        .map((analysis) => analysis.sectionIndex),
    );
    const mixedLinkNameStyleSectionIndexes = new Set(
      reportableSectionIssueRows
        .filter((row) => row.issueId === 'mixed-link-name-styles-in-section')
        .map((row) => row.sectionIndex)
        .filter((index): index is number => typeof index === 'number' && index > 0),
    );
    const localDescriptionTrailingPunctuationSectionIndexes =
      this.getLocalDescriptionTrailingPunctuationSectionIndexes(doormatSummaries);
    const inconsistentLinkNameStyleCountsBySection = rows.reduce<
      Map<number, number>
    >((counts, row) => {
      if (
        row.issueId !== 'inconsistent-link-name-style' ||
        !row.sectionIndex
      ) {
        return counts;
      }
      counts.set(row.sectionIndex, (counts.get(row.sectionIndex) ?? 0) + 1);
      return counts;
    }, new Map<number, number>());
    const suppressedModelIssueRows = rows.filter(
      (row) => {
        if (this.isLocalIaOwnedTopicDoormatIssue(row.issueId)) return true;
        if (!row.sectionIndex) return false;
        if (
          row.issueId === 'inconsistent-description-style' &&
          mixedDescriptionStyleSectionIndexes.has(row.sectionIndex)
        ) {
          return true;
        }
        if (row.issueId === 'inconsistent-description-style') {
          const analysis = descriptionStyleAnalysisBySection.get(
            row.sectionIndex,
          );
          const rowStyle = row.doormatIndex
            ? descriptionStylesByDoormatIndex.get(row.doormatIndex)
            : undefined;
          return (
            !analysis?.dominantStyle ||
            !rowStyle ||
            rowStyle === 'mixed-or-unclear' ||
            rowStyle === analysis.dominantStyle
          );
        }
        if (
          row.issueId === 'description-trailing-punctuation' &&
          localDescriptionTrailingPunctuationSectionIndexes.has(row.sectionIndex)
        ) {
          return true;
        }
        if (row.issueId !== 'inconsistent-link-name-style') return false;
        if (mixedLinkNameStyleSectionIndexes.has(row.sectionIndex)) return true;
        const sectionCount =
          doormatSummaries.find(
            (summary) => summary.sectionIndex === row.sectionIndex,
          )?.sectionDoormatCount ?? 0;
        const flaggedCount =
          inconsistentLinkNameStyleCountsBySection.get(row.sectionIndex) ?? 0;
        return sectionCount > 0 && flaggedCount >= Math.max(2, sectionCount - 1);
      },
    );
    const modelIssueRows = rows.filter(
      (row) => !suppressedModelIssueRows.includes(row),
    );

    const deterministicRows = this.buildDeterministicTopicDoormatIssueRows(
      doormatSummaries,
      [...modelIssueRows, ...reportableSectionIssueRows, ...localIaRows],
      hasLegacyTopicDoormatTemplate,
      pageLanguage,
      mostRequestedLinks,
      uploadData,
      descriptionStylesByDoormatIndex,
      destinationContentAssessmentsByDoormatIndex,
      linkStylesByDoormatIndex,
      destinationLinkAssessmentsByDoormatIndex,
    );

    const representedIndexes = new Set(
      [
        ...modelIssueRows,
        ...deterministicRows,
        ...reportableSectionIssueRows,
        ...localIaRows,
      ]
        .map((row) => row.doormatIndex)
        .filter((index): index is number => typeof index === 'number' && index > 0),
    );
    const missingNoIssueRows = doormatSummaries
      .filter((summary) => !representedIndexes.has(summary.index))
      .map((summary) => this.buildTopicDoormatNoIssueRow(summary));

    const resolvedRows = this.removeConflictingTopicDoormatNoIssueRows([
      ...modelIssueRows,
      ...deterministicRows,
      ...reportableSectionIssueRows,
      ...localIaRows,
      ...missingNoIssueRows,
    ].sort((a, b) => {
      const aIndex = this.getTopicDoormatRowSortIndex(a, doormatSummaries);
      const bIndex = this.getTopicDoormatRowSortIndex(b, doormatSummaries);
      return aIndex - bIndex;
    }));
    this.debugTopicDoormatIssues('response row resolution', {
      modelDoormatCount: doormats.length,
      doormatSummaryCount: doormatSummaries.length,
      sectionCounts: this.buildTopicDoormatSectionCounts(doormatSummaries),
      overLimitSummaryIndexes:
        this.getTopicDoormatOverLimitSectionIndexes(doormatSummaries),
      modelRawIssueRows: rows.length,
      modelRawIssueBreakdown: this.countTopicDoormatRowsByIssue(rows),
      modelDisplayedIssueRows: modelIssueRows.length,
      modelDisplayedIssueBreakdown:
        this.countTopicDoormatRowsByIssue(modelIssueRows),
      suppressedModelIssueRows: suppressedModelIssueRows.length,
      suppressedModelIssueBreakdown: this.countTopicDoormatRowsByIssue(
        suppressedModelIssueRows,
      ),
      modelRawSectionIssueRows: sectionIssueRows.length,
      modelDisplayedSectionIssueRows: reportableSectionIssueRows.length,
      descriptionStylesByDoormatIndex: doormatSummaries.map((summary) => ({
        doormatIndex: summary.index,
        sectionIndex: summary.sectionIndex,
        sectionItemIndex: summary.sectionItemIndex,
        style:
          descriptionStylesByDoormatIndex.get(summary.index) ??
          'missing-or-invalid',
      })),
      linkStylesByDoormatIndex: doormatSummaries.map((summary) => ({
        doormatIndex: summary.index,
        sectionIndex: summary.sectionIndex,
        sectionItemIndex: summary.sectionItemIndex,
        style:
          linkStylesByDoormatIndex.get(summary.index) ?? 'missing-or-invalid',
      })),
      destinationLinkAssessmentsByDoormatIndex: doormatSummaries.map(
        (summary) => ({
          doormatIndex: summary.index,
          assessment:
            destinationLinkAssessmentsByDoormatIndex.get(summary.index) ??
            null,
        }),
      ),
      destinationContentAssessmentsByDoormatIndex: doormatSummaries.map(
        (summary) => ({
          doormatIndex: summary.index,
          contextStatus: summary.destinationContextStatus ?? 'insufficient',
          contextElements:
            this.buildTopicDoormatDestinationContextElements(summary),
          assessment:
            destinationContentAssessmentsByDoormatIndex.get(summary.index) ??
            null,
        }),
      ),
      fallbackNoIssueRows: missingNoIssueRows.length,
      deterministicRows: deterministicRows.length,
      localIaRows: localIaRows.length,
      localIaBreakdown: this.countTopicDoormatRowsByIssue(localIaRows),
      displayedRows: resolvedRows.length,
    });
    return resolvedRows;
  }

  private parseTopicDoormatSectionIssueRows(
    rawSectionIssues: unknown,
    doormatSummaries: TopicDoormatSummary[],
  ): TopicDoormatIssueRow[] {
    if (!Array.isArray(rawSectionIssues)) return [];

    return rawSectionIssues
      .map((rawIssue): TopicDoormatIssueRow | null => {
        if (!rawIssue || typeof rawIssue !== 'object') return null;
        const issue = rawIssue as Record<string, unknown>;
        return this.buildTopicDoormatSectionIssueRow(issue, undefined, doormatSummaries);
      })
      .filter((row): row is TopicDoormatIssueRow => row !== null);
  }

  private parseTopicDoormatDescriptionStyles(
    rawDoormats: unknown[],
  ): Map<number, TopicDoormatDescriptionStyle> {
    const stylesByDoormatIndex = new Map<number, TopicDoormatDescriptionStyle>();
    rawDoormats.forEach((rawDoormat) => {
      if (!rawDoormat || typeof rawDoormat !== 'object') return;
      const doormat = rawDoormat as Record<string, unknown>;
      const index = this.toNumber(doormat['doormat_index']);
      const style = this.normalizeTopicDoormatDescriptionStyle(
        doormat['detected_description_style'],
      );
      if (index && style) stylesByDoormatIndex.set(index, style);
    });
    return stylesByDoormatIndex;
  }

  private parseTopicDoormatLinkTextStyles(
    rawDoormats: unknown[],
  ): Map<number, TopicDoormatLinkTextStyle> {
    const stylesByDoormatIndex = new Map<number, TopicDoormatLinkTextStyle>();
    rawDoormats.forEach((rawDoormat) => {
      if (!rawDoormat || typeof rawDoormat !== 'object') return;
      const doormat = rawDoormat as Record<string, unknown>;
      const index = this.toNumber(doormat['doormat_index']);
      const style = this.normalizeTopicDoormatLinkTextStyle(
        doormat['detected_link_text_style'],
      );
      if (index && style) stylesByDoormatIndex.set(index, style);
    });
    return stylesByDoormatIndex;
  }

  private parseTopicDoormatDestinationLinkAssessments(
    rawDoormats: unknown[],
  ): Map<number, TopicDoormatDestinationLinkAssessment> {
    const assessments = new Map<number, TopicDoormatDestinationLinkAssessment>();
    rawDoormats.forEach((rawDoormat) => {
      if (!rawDoormat || typeof rawDoormat !== 'object') return;
      const doormat = rawDoormat as Record<string, unknown>;
      const index = this.toNumber(doormat['doormat_index']);
      const relationship = this.normalizeTopicDoormatDestinationLinkRelationship(
        doormat['destination_link_relationship'],
      );
      const basis = this.normalizeTopicDoormatDestinationLinkRelationshipBasis(
        doormat['destination_link_relationship_basis'],
      );
      if (!index || !relationship || !basis) return;
      assessments.set(index, {
        relationship,
        basis,
        reason: this.cleanString(
          doormat['destination_link_relationship_reason'],
        ),
      });
    });
    return assessments;
  }

  private parseTopicDoormatDestinationContentAssessments(
    rawDoormats: unknown[],
  ): Map<number, TopicDoormatDestinationContentAssessment> {
    const assessments = new Map<
      number,
      TopicDoormatDestinationContentAssessment
    >();
    rawDoormats.forEach((rawDoormat) => {
      if (!rawDoormat || typeof rawDoormat !== 'object') return;
      const doormat = rawDoormat as Record<string, unknown>;
      const index = this.toNumber(doormat['doormat_index']);
      const rawAssessment = doormat['destination_content_assessment'];
      if (!index || !this.isValidTopicDoormatDestinationContentAssessment(
        rawAssessment,
      )) {
        return;
      }
      assessments.set(index, {
        importantElementIds: [...rawAssessment['important_element_ids']],
        coveredElementIds: [...rawAssessment['covered_element_ids']],
        missingImportantElementIds: [
          ...rawAssessment['missing_important_element_ids'],
        ],
      });
    });
    return assessments;
  }

  private buildTopicDoormatSectionIssueRow(
    issue: Record<string, unknown>,
    fallbackSectionIndex?: number,
    doormatSummaries: TopicDoormatSummary[] = [],
  ): TopicDoormatIssueRow | null {
    const issueId = this.getTopicDoormatIssueId(issue);
    const severity = this.normalizeTopicDoormatModelSeverity(issue['severity']);
    if (!this.topicDoormatIssueIdToLabel.has(issueId) || !severity) {
      return null;
    }
    const details =
      issue['evidence_details'] && typeof issue['evidence_details'] === 'object'
        ? (issue['evidence_details'] as Record<string, unknown>)
        : null;
    const sectionIndex =
      this.toNumber(issue['section_index']) ??
      this.toNumber(details?.['section_index']) ??
      fallbackSectionIndex ??
      this.buildTopicDoormatSectionCounts(doormatSummaries)[0]?.sectionIndex ??
      1;

    return {
      include:
        typeof issue['include'] === 'boolean' ? issue['include'] : true,
      rowType: 'section',
      severity,
      doormat: this.buildTopicDoormatSectionLabel(
        sectionIndex,
        doormatSummaries,
      ),
      doormatLabel: 'All doormats in section',
      issueId,
      issue: this.getTopicDoormatIssueLabel(issueId),
      evidence: this.buildTopicDoormatEvidence(issue),
      recommendation: this.cleanString(issue['recommendation']),
      sectionIndex,
      sectionTitle:
        doormatSummaries.find((summary) => summary.sectionIndex === sectionIndex)
          ?.sectionTitle || '',
    };
  }

  private removeConflictingTopicDoormatNoIssueRows(
    rows: TopicDoormatIssueRow[],
  ): TopicDoormatIssueRow[] {
    const indexesWithIssues = new Set(
      rows
        .filter((row) => !this.isNoIssueRow(row))
        .map((row) => row.doormatIndex)
        .filter((index): index is number => typeof index === 'number' && index > 0),
    );

    return rows.filter(
      (row) =>
        !this.isNoIssueRow(row) ||
        !row.doormatIndex ||
        !indexesWithIssues.has(row.doormatIndex),
    );
  }

  private applyTopicDoormatSectionItemMeta(
    rows: TopicDoormatIssueRow[],
    metaByDoormatIndex: Map<number, string>,
  ): TopicDoormatIssueRow[] {
    if (!metaByDoormatIndex.size) return rows;
    return rows.map((row) => {
      if (row.rowType !== 'doormat' || !row.doormatIndex) return row;
      const sectionItemMeta = metaByDoormatIndex.get(row.doormatIndex);
      return sectionItemMeta ? { ...row, sectionItemMeta } : row;
    });
  }

  private buildTopicDoormatFallbackRows(
    doormatSummaries: TopicDoormatSummary[],
    hasLegacyTopicDoormatTemplate = false,
    pageLanguage: TopicDoormatPageLanguage = 'en',
    mostRequestedLinks: MostRequestedLinkSummary[] = [],
    uploadData?: Partial<UploadData> | null,
    localIaRows: TopicDoormatIssueRow[] = [],
  ): TopicDoormatIssueRow[] {
    const deterministicRows = this.buildDeterministicTopicDoormatIssueRows(
      doormatSummaries,
      localIaRows,
      hasLegacyTopicDoormatTemplate,
      pageLanguage,
      mostRequestedLinks,
      uploadData,
    );
    const representedIndexes = new Set(
      [...deterministicRows, ...localIaRows]
        .map((row) => row.doormatIndex)
        .filter((index): index is number => typeof index === 'number' && index > 0),
    );
    const noIssueRows = doormatSummaries
      .filter((summary) => !representedIndexes.has(summary.index))
      .map((summary) => this.buildTopicDoormatNoIssueRow(summary));

    return this.removeConflictingTopicDoormatNoIssueRows([
      ...deterministicRows,
      ...localIaRows,
      ...noIssueRows,
    ].sort((a, b) => {
      const aIndex = this.getTopicDoormatRowSortIndex(a, doormatSummaries);
      const bIndex = this.getTopicDoormatRowSortIndex(b, doormatSummaries);
      return aIndex - bIndex;
    }));
  }

  private buildDeterministicTopicDoormatIssueRows(
    doormatSummaries: TopicDoormatSummary[],
    existingRows: TopicDoormatIssueRow[],
    hasLegacyTopicDoormatTemplate = false,
    pageLanguage: TopicDoormatPageLanguage = 'en',
    mostRequestedLinks: MostRequestedLinkSummary[] = [],
    uploadData?: Partial<UploadData> | null,
    descriptionStylesByDoormatIndex: Map<
      number,
      TopicDoormatDescriptionStyle
    > = new Map(),
    destinationContentAssessmentsByDoormatIndex: Map<
      number,
      TopicDoormatDestinationContentAssessment
    > = new Map(),
    linkStylesByDoormatIndex: Map<
      number,
      TopicDoormatLinkTextStyle
    > = new Map(),
    destinationLinkAssessmentsByDoormatIndex: Map<
      number,
      TopicDoormatDestinationLinkAssessment
    > = new Map(),
  ): TopicDoormatIssueRow[] {
    const existingIssueKeys = new Set(
      existingRows.map((row) => `${row.sectionIndex ?? 0}|${row.issueId}`),
    );

    const outdatedTemplateRows =
      hasLegacyTopicDoormatTemplate &&
      !existingIssueKeys.has('1|outdated-topic-page-template')
        ? [
            {
              include: true,
              rowType: 'section',
              severity: 'High',
              doormat: this.buildTopicDoormatSectionLabel(1, doormatSummaries),
              doormatLabel: 'All doormats in section',
              issueId: 'outdated-topic-page-template',
              issue: 'Topic page template is outdated',
              evidence:
                'This section uses legacy topic doormat markup: .gc-drmt or .mwsdoormat-links-container.',
              recommendation:
                'Update the page to use the current GCWeb topic page doormat template.',
              sectionIndex: 1,
              sectionTitle:
                doormatSummaries.find((summary) => summary.sectionIndex === 1)
                  ?.sectionTitle || '',
            } satisfies TopicDoormatIssueRow,
          ]
        : [];

    const overLimitRows = this.buildTopicDoormatSectionCounts(doormatSummaries).flatMap(
      (section) => {
      if (
        section.count <= 9 ||
        existingIssueKeys.has(`${section.sectionIndex}|too-many-doormats-in-section`)
      ) {
        return [];
      }

      return [
        {
          include: true,
          rowType: 'section',
          severity: 'Low',
          doormat: this.buildTopicDoormatSectionLabel(
            section.sectionIndex,
            doormatSummaries,
          ),
          doormatLabel: 'All doormats in section',
          issueId: 'too-many-doormats-in-section',
          issue: this.getTopicDoormatIssueLabel('too-many-doormats-in-section'),
          evidence: `There are ${section.count} doormats in this section.`,
          recommendation:
            'Either remove doormats or break down the section into sections that have 9 or fewer doormats.',
          sectionIndex: section.sectionIndex,
          sectionTitle: section.sectionTitle,
        } satisfies TopicDoormatIssueRow,
      ];
    });

    return [
      ...outdatedTemplateRows,
      ...overLimitRows,
      ...this.buildLocalTopicDoormatLinkNameLengthRows(
        doormatSummaries,
        pageLanguage,
      ),
      ...this.buildLocalTopicDoormatDescriptionLengthRows(
        doormatSummaries,
        pageLanguage,
      ),
      ...this.buildLocalTopicDoormatTrailingPunctuationRows(
        doormatSummaries,
        existingRows,
      ),
      ...this.buildLocalTopicDoormatMostRequestedDuplicateRows(
        doormatSummaries,
        mostRequestedLinks,
        existingRows,
        uploadData,
      ),
      ...this.buildLocalTopicDoormatLinkCodeRows(doormatSummaries),
      ...this.buildLocalTopicDoormatRepeatedDescriptionOpeningRows(
        doormatSummaries,
      ),
      ...this.buildLocalTopicDoormatContentGapRows(
        doormatSummaries,
        destinationContentAssessmentsByDoormatIndex,
      ),
      ...this.buildLocalTopicDoormatLinkStyleIssueRows(
        doormatSummaries,
        linkStylesByDoormatIndex,
      ),
      ...this.buildLocalTopicDoormatDestinationMismatchRows(
        doormatSummaries,
        destinationLinkAssessmentsByDoormatIndex,
      ),
      ...this.buildLocalTopicDoormatStyleIssueRows(
        doormatSummaries,
        existingIssueKeys,
        descriptionStylesByDoormatIndex,
      ),
    ];
  }

  private buildLocalTopicDoormatLinkNameLengthRows(
    doormatSummaries: TopicDoormatSummary[],
    pageLanguage: TopicDoormatPageLanguage,
  ): TopicDoormatIssueRow[] {
    const limit = this.getTopicDoormatLengthLimit(
      'link-name-too-long',
      pageLanguage,
    );
    return doormatSummaries
      .filter((summary) => summary.linkTextCharacterCount > limit)
      .map((summary) => {
        const count = summary.linkTextCharacterCount;
        const metric = `${count}/${limit} characters`;
        return {
          include: true,
          rowType: 'doormat',
          severity: this.getTopicDoormatLinkNameLengthSeverity(
            count,
            pageLanguage,
          ),
          doormat: this.buildTopicDoormatLabel(summary),
          doormatLabel: summary.linkText || summary.href || 'Doormat',
          issueId: 'link-name-too-long',
          issue: this.getTopicDoormatIssueLabel('link-name-too-long'),
          evidence: this.getTopicDoormatLinkNameLengthEvidence(),
          evidenceMetric: metric,
          recommendation: this.getTopicDoormatLinkNameLengthRecommendation(
            pageLanguage,
            limit,
          ),
          doormatIndex: summary.index || undefined,
          sectionIndex: summary.sectionIndex || undefined,
          sectionTitle: summary.sectionTitle || undefined,
          sectionItemIndex: summary.sectionItemIndex || undefined,
        } satisfies TopicDoormatIssueRow;
      });
  }

  private getTopicDoormatLinkNameLengthSeverity(
    count: number,
    pageLanguage: TopicDoormatPageLanguage = 'en',
  ): string {
    if (pageLanguage === 'fr') {
      if (count <= 60) return 'Low';
      if (count <= 75) return 'Medium';
      return 'High';
    }

    if (count <= 45) return 'Low';
    if (count <= 60) return 'Medium';
    return 'High';
  }

  private buildLocalTopicDoormatDescriptionLengthRows(
    doormatSummaries: TopicDoormatSummary[],
    pageLanguage: TopicDoormatPageLanguage,
  ): TopicDoormatIssueRow[] {
    const limit = this.getTopicDoormatLengthLimit(
      'description-too-long',
      pageLanguage,
    );
    return doormatSummaries
      .filter((summary) => summary.descriptionCharacterCount > limit)
      .map((summary) => {
        const count = summary.descriptionCharacterCount;
        const metric = `${count}/${limit} characters`;
        return {
          include: true,
          rowType: 'doormat',
          severity: this.getTopicDoormatDescriptionLengthSeverity(
            count,
            pageLanguage,
          ),
          doormat: this.buildTopicDoormatLabel(summary),
          doormatLabel: summary.linkText || summary.href || 'Doormat',
          issueId: 'description-too-long',
          issue: this.getTopicDoormatIssueLabel('description-too-long'),
          evidence: this.getTopicDoormatDescriptionLengthEvidence(),
          evidenceMetric: metric,
          recommendation: this.getTopicDoormatDescriptionLengthRecommendation(
            pageLanguage,
            limit,
          ),
          doormatIndex: summary.index || undefined,
          sectionIndex: summary.sectionIndex || undefined,
          sectionTitle: summary.sectionTitle || undefined,
          sectionItemIndex: summary.sectionItemIndex || undefined,
        } satisfies TopicDoormatIssueRow;
      });
  }

  private getTopicDoormatDescriptionLengthSeverity(
    count: number,
    pageLanguage: TopicDoormatPageLanguage = 'en',
  ): string {
    if (pageLanguage === 'fr') {
      if (count <= 135) return 'Low';
      if (count <= 150) return 'Medium';
      return 'High';
    }

    if (count <= 105) return 'Low';
    if (count <= 120) return 'Medium';
    return 'High';
  }

  private buildLocalTopicDoormatTrailingPunctuationRows(
    doormatSummaries: TopicDoormatSummary[],
    existingRows: TopicDoormatIssueRow[],
  ): TopicDoormatIssueRow[] {
    const existingDoormatIssueKeys = new Set(
      existingRows
        .filter((row) => row.doormatIndex)
        .map((row) => `${row.doormatIndex}|${row.issueId}`),
    );
    const sectionLevelDescriptionPunctuationIndexes =
      this.getLocalDescriptionTrailingPunctuationSectionIndexes(doormatSummaries);
    const descriptionPunctuationBySection =
      this.groupTopicDoormatsWithDescriptionTrailingPunctuation(doormatSummaries);
    const sectionRows = Array.from(
      sectionLevelDescriptionPunctuationIndexes,
    ).flatMap((sectionIndex) => {
      if (
        existingRows.some(
          (row) =>
            row.rowType === 'section' &&
            row.sectionIndex === sectionIndex &&
            row.issueId === 'description-trailing-punctuation',
        )
      ) {
        return [];
      }

      const affected = descriptionPunctuationBySection.get(sectionIndex) ?? [];
      if (affected.length < 2) return [];
      const firstSummary = affected[0];
      return [
        {
          include: true,
          rowType: 'section',
          severity: 'Low',
          doormat: this.buildTopicDoormatSectionLabel(
            sectionIndex,
            doormatSummaries,
          ),
          doormatLabel: 'Multiple doormats in section',
          issueId: 'description-trailing-punctuation',
          issue: this.getTopicDoormatIssueLabel(
            'description-trailing-punctuation',
          ),
          evidence: this.buildTopicDoormatSectionTrailingPunctuationEvidence(
            affected,
          ),
          recommendation: 'Remove final punctuation from the descriptions.',
          sectionIndex,
          sectionTitle: firstSummary.sectionTitle,
        } satisfies TopicDoormatIssueRow,
      ];
    });

    const doormatRows = doormatSummaries.flatMap((summary) => {
      const rows: TopicDoormatIssueRow[] = [];
      const baseRow = {
        include: true,
        rowType: 'doormat',
        severity: 'Low',
        doormat: this.buildTopicDoormatLabel(summary),
        doormatLabel: summary.linkText || summary.href || 'Doormat',
        doormatIndex: summary.index || undefined,
        sectionIndex: summary.sectionIndex || undefined,
        sectionTitle: summary.sectionTitle || undefined,
        sectionItemIndex: summary.sectionItemIndex || undefined,
      } satisfies Partial<TopicDoormatIssueRow>;

      if (
        this.hasTopicDoormatTrailingPunctuation(summary.linkText) &&
        !existingDoormatIssueKeys.has(
          `${summary.index}|link-name-trailing-punctuation`,
        )
      ) {
        rows.push({
          ...baseRow,
          issueId: 'link-name-trailing-punctuation',
          issue: this.getTopicDoormatIssueLabel(
            'link-name-trailing-punctuation',
          ),
          evidence: this.buildTopicDoormatTrailingPunctuationEvidence(
            'Link name',
            summary.linkText,
          ),
          recommendation: 'Remove trailing punctuation from the link text.',
        } satisfies TopicDoormatIssueRow);
      }

      if (
        this.hasTopicDoormatTrailingPunctuation(summary.description) &&
        !sectionLevelDescriptionPunctuationIndexes.has(summary.sectionIndex) &&
        !existingDoormatIssueKeys.has(
          `${summary.index}|description-trailing-punctuation`,
        )
      ) {
        rows.push({
          ...baseRow,
          issueId: 'description-trailing-punctuation',
          issue: this.getTopicDoormatIssueLabel(
            'description-trailing-punctuation',
          ),
          evidence: this.buildTopicDoormatTrailingPunctuationEvidence(
            'Description',
            summary.description,
          ),
          recommendation: 'Remove final punctuation from the description.',
        } satisfies TopicDoormatIssueRow);
      }

      return rows;
    });

    return [...sectionRows, ...doormatRows];
  }

  private hasTopicDoormatTrailingPunctuation(value: string): boolean {
    return this.topicDoormatTrailingPunctuationPattern.test(value.trim());
  }

  private buildTopicDoormatTrailingPunctuationEvidence(
    label: 'Link name' | 'Description',
    value: string,
  ): string {
    const trimmed = value.trim();
    const punctuation = trimmed.slice(-1);
    return `${label} ends with '${punctuation}'.`;
  }

  private getLocalDescriptionTrailingPunctuationSectionIndexes(
    doormatSummaries: TopicDoormatSummary[],
  ): Set<number> {
    return new Set(
      Array.from(
        this.groupTopicDoormatsWithDescriptionTrailingPunctuation(
          doormatSummaries,
        ).entries(),
      )
        .filter(([, summaries]) => summaries.length > 1)
        .map(([sectionIndex]) => sectionIndex),
    );
  }

  private groupTopicDoormatsWithDescriptionTrailingPunctuation(
    doormatSummaries: TopicDoormatSummary[],
  ): Map<number, TopicDoormatSummary[]> {
    return doormatSummaries.reduce<Map<number, TopicDoormatSummary[]>>(
      (groups, summary) => {
        if (!this.hasTopicDoormatTrailingPunctuation(summary.description)) {
          return groups;
        }
        const sectionIndex = summary.sectionIndex || 0;
        const sectionSummaries = groups.get(sectionIndex) ?? [];
        sectionSummaries.push(summary);
        groups.set(sectionIndex, sectionSummaries);
        return groups;
      },
      new Map<number, TopicDoormatSummary[]>(),
    );
  }

  private buildTopicDoormatSectionTrailingPunctuationEvidence(
    doormatSummaries: TopicDoormatSummary[],
  ): string {
    const indexes = doormatSummaries
      .map((summary) => summary.sectionItemIndex || summary.index)
      .filter((index) => index > 0)
      .join(', ');
    const count = doormatSummaries.length;
    const descriptionLabel = count === 1 ? 'description' : 'descriptions';
    const doormatLabel = count === 1 ? 'doormat' : 'doormats';
    return `${count} ${descriptionLabel} end with punctuation: ${doormatLabel} ${indexes}.`;
  }

  private buildLocalTopicDoormatMostRequestedDuplicateRows(
    doormatSummaries: TopicDoormatSummary[],
    mostRequestedLinks: MostRequestedLinkSummary[],
    existingRows: TopicDoormatIssueRow[],
    uploadData?: Partial<UploadData> | null,
  ): TopicDoormatIssueRow[] {
    if (!mostRequestedLinks.length) return [];
    const existingDoormatIssueKeys = new Set(
      existingRows
        .filter((row) => row.doormatIndex)
        .map((row) => `${row.doormatIndex}|${row.issueId}`),
    );

    return doormatSummaries.flatMap((summary) => {
      if (
        existingDoormatIssueKeys.has(
          `${summary.index}|duplicate-link-in-most-requested`,
        )
      ) {
        return [];
      }
      const duplicate = this.findTopicDoormatMostRequestedDuplicate(
        summary.href,
        mostRequestedLinks,
        uploadData,
      );
      if (!duplicate) return [];

      return [
        {
          include: true,
          rowType: 'doormat',
          severity: 'Medium',
          doormat: this.buildTopicDoormatLabel(summary),
          doormatLabel: summary.linkText || summary.href || 'Doormat',
          issueId: 'duplicate-link-in-most-requested',
          issue: this.getTopicDoormatIssueLabel(
            'duplicate-link-in-most-requested',
          ),
          evidence: this.buildTopicDoormatMostRequestedDuplicateEvidence(),
          evidenceLinkText: duplicate.text || duplicate.href,
          evidenceLinkHref: duplicate.href,
          recommendation:
            'Flag for manual review. In most cases, remove the duplicate from Most requested unless there is a strong page-specific reason to keep it.',
          doormatIndex: summary.index || undefined,
          sectionIndex: summary.sectionIndex || undefined,
          sectionTitle: summary.sectionTitle || undefined,
          sectionItemIndex: summary.sectionItemIndex || undefined,
        } satisfies TopicDoormatIssueRow,
      ];
    });
  }

  private findTopicDoormatMostRequestedDuplicate(
    href: string,
    mostRequestedLinks: MostRequestedLinkSummary[],
    uploadData?: Partial<UploadData> | null,
  ): MostRequestedLinkSummary | null {
    return this.urlComparison.findMostRequestedDuplicate(
      href,
      mostRequestedLinks,
      uploadData,
    );
  }

  private buildTopicDoormatMostRequestedDuplicateEvidence(): string {
    return 'This doormat links to the same destination as this Most requested link:';
  }

  private getTopicDoormatLengthLimit(
    issueId: 'link-name-too-long' | 'description-too-long',
    pageLanguage: TopicDoormatPageLanguage,
  ): number {
    return this.topicDoormatIssueLengthLimits[pageLanguage][issueId];
  }

  private getTopicDoormatLinkNameLengthEvidence(): string {
    return this.translate.instant(
      'page.tools.guidance.topicDoormats.length.link.evidence',
    );
  }

  private getTopicDoormatDescriptionLengthEvidence(): string {
    return this.translate.instant(
      'page.tools.guidance.topicDoormats.length.description.evidence',
    );
  }

  private getTopicDoormatLinkNameLengthRecommendation(
    pageLanguage: TopicDoormatPageLanguage,
    limit: number,
  ): string {
    return this.translate.instant(
      `page.tools.guidance.topicDoormats.length.link.recommendation.${pageLanguage}`,
      { limit },
    );
  }

  private getTopicDoormatDescriptionLengthRecommendation(
    pageLanguage: TopicDoormatPageLanguage,
    limit: number,
  ): string {
    return this.translate.instant(
      `page.tools.guidance.topicDoormats.length.description.recommendation.${pageLanguage}`,
      { limit },
    );
  }

  private buildLocalTopicDoormatLinkCodeRows(
    doormatSummaries: TopicDoormatSummary[],
  ): TopicDoormatIssueRow[] {
    return doormatSummaries.flatMap((summary) => {
      const rows: TopicDoormatIssueRow[] = [];
      const baseRow = {
        include: true,
        rowType: 'doormat',
        severity: 'High',
        doormat: this.buildTopicDoormatLabel(summary),
        doormatLabel: summary.linkText || summary.href || 'Doormat',
        doormatIndex: summary.index || undefined,
        sectionIndex: summary.sectionIndex || undefined,
        sectionTitle: summary.sectionTitle || undefined,
        sectionItemIndex: summary.sectionItemIndex || undefined,
      } satisfies Partial<TopicDoormatIssueRow>;

      if (summary.hasSplitHeadingLink) {
        rows.push({
          ...baseRow,
          issueId: 'split-heading-link',
          issue: this.getTopicDoormatIssueLabel('split-heading-link'),
          evidence: this.buildTopicDoormatSplitHeadingLinkEvidence(summary),
          recommendation:
            'Use one link around the complete doormat heading text.',
        } satisfies TopicDoormatIssueRow);
      }

      if (summary.hasDescriptionLink) {
        rows.push({
          ...baseRow,
          severity: 'Medium',
          issueId: 'description-contains-link',
          issue: this.getTopicDoormatIssueLabel('description-contains-link'),
          evidence: this.buildTopicDoormatDescriptionLinkEvidence(summary),
          recommendation:
            'Remove links from the description. The doormat heading should contain the only link.',
        } satisfies TopicDoormatIssueRow);
      }

      if (
        summary.itemLinkCount > 1 &&
        !summary.hasSplitHeadingLink &&
        !summary.hasDescriptionLink
      ) {
        rows.push({
          ...baseRow,
          issueId: 'multiple-links',
          issue: this.getTopicDoormatIssueLabel('multiple-links'),
          evidence: this.buildTopicDoormatMultipleLinksEvidence(summary),
          recommendation:
            'Use one link per doormat. Move any extra destination to a separate doormat if it is needed.',
        } satisfies TopicDoormatIssueRow);
      }

      return rows;
    });
  }

  private buildTopicDoormatSplitHeadingLinkEvidence(
    doormat: TopicDoormatSummary,
  ): string {
    const linkLabel =
      doormat.headingLinkCount === 1
        ? '1 link'
        : `${doormat.headingLinkCount} links`;
    return `The doormat heading is split into ${linkLabel}: '${doormat.linkText}'.`;
  }

  private buildTopicDoormatDescriptionLinkEvidence(
    doormat: TopicDoormatSummary,
  ): string {
    const linkLabel =
      doormat.descriptionLinkCount === 1
        ? '1 link'
        : `${doormat.descriptionLinkCount} links`;
    return `The doormat description contains ${linkLabel}.`;
  }

  private buildTopicDoormatMultipleLinksEvidence(
    doormat: TopicDoormatSummary,
  ): string {
    const additionalLinkCount = Math.max(doormat.itemLinkCount - 1, 0);
    const additionalLabel =
      additionalLinkCount === 1 ? '1 additional link' : `${additionalLinkCount} additional links`;
    return `This doormat contains ${doormat.itemLinkCount} links: the main doormat link plus ${additionalLabel}.`;
  }

  private buildLocalTopicDoormatRepeatedDescriptionOpeningRows(
    doormatSummaries: TopicDoormatSummary[],
  ): TopicDoormatIssueRow[] {
    const summariesBySection = doormatSummaries.reduce<
      Map<number, TopicDoormatSummary[]>
    >((sections, summary) => {
      const sectionIndex = summary.sectionIndex || 0;
      const sectionSummaries = sections.get(sectionIndex) ?? [];
      sectionSummaries.push(summary);
      sections.set(sectionIndex, sectionSummaries);
      return sections;
    }, new Map<number, TopicDoormatSummary[]>());

    return Array.from(summariesBySection.entries()).flatMap(
      ([sectionIndex, sectionSummaries]) => {
        const summariesByOpening = new Map<
          string,
          { label: string; summaries: TopicDoormatSummary[] }
        >();
        sectionSummaries.forEach((summary) => {
          const opening = this.getTopicDoormatDescriptionOpening(
            summary.description,
          );
          if (!opening) return;
          const group = summariesByOpening.get(opening.key) ?? {
            label: opening.label,
            summaries: [],
          };
          group.summaries.push(summary);
          summariesByOpening.set(opening.key, group);
        });

        return Array.from(summariesByOpening.values()).flatMap((group) => {
          if (group.summaries.length < 2) return [];
          const affectedIndexes = group.summaries
            .map((summary) => summary.sectionItemIndex || summary.index)
            .sort((a, b) => a - b);
          const severity =
            group.summaries.length / sectionSummaries.length > 0.5
              ? 'Medium'
              : 'Low';
          const firstSummary = group.summaries[0];
          return [
            {
              include: true,
              rowType: 'section',
              severity,
              doormat: this.buildTopicDoormatSectionLabel(
                sectionIndex,
                doormatSummaries,
              ),
              doormatLabel: 'Multiple doormats in section',
              issueId: 'repeated-description-opening',
              issue: this.getTopicDoormatIssueLabel(
                'repeated-description-opening',
              ),
              evidence: `${group.summaries.length} of ${sectionSummaries.length} descriptions begin with "${group.label}": doormats ${affectedIndexes.join(', ')}.`,
              recommendation:
                'Vary the description openings so users can scan and distinguish the doormats more easily.',
              sectionIndex,
              sectionTitle: firstSummary.sectionTitle,
            } satisfies TopicDoormatIssueRow,
          ];
        });
      },
    );
  }

  private getTopicDoormatDescriptionOpening(
    description: string,
  ): { key: string; label: string } | null {
    const words =
      this.cleanVisibleText(description).match(
        /[\p{L}\p{M}\p{N}]+(?:['’\-][\p{L}\p{M}\p{N}]+)*/gu,
      ) ?? [];
    if (words.length < 2) return null;
    const firstTwoWords = words.slice(0, 2);
    const label = firstTwoWords.join(' ');
    const key = label
      .normalize('NFKC')
      .replace(/[’]/g, "'")
      .toLocaleLowerCase();
    return { key, label };
  }

  private buildTopicDoormatDestinationContextElements(
    summary: TopicDoormatSummary,
  ): TopicDoormatDestinationContextElement[] {
    const introElements = (summary.destinationIntroParagraphs ?? [])
      .map((text) => this.cleanVisibleText(text))
      .filter(Boolean)
      .map((text, index) => ({
        id: `intro-${index + 1}`,
        type: 'intro' as const,
        text,
      }));
    const sectionElements = (summary.destinationSectionHeadings ?? [])
      .map((text) => this.cleanVisibleText(text))
      .filter(Boolean)
      .map((text, index) => ({
        id: `h2-${index + 1}`,
        type: 'h2' as const,
        text,
      }));
    return [...introElements, ...sectionElements];
  }

  private buildLocalTopicDoormatLinkStyleIssueRows(
    doormatSummaries: TopicDoormatSummary[],
    stylesByDoormatIndex: Map<number, TopicDoormatLinkTextStyle>,
  ): TopicDoormatIssueRow[] {
    const sections = new Map<number, TopicDoormatSummary[]>();
    doormatSummaries.forEach((summary) => {
      if (!summary.sectionIndex) return;
      const summaries = sections.get(summary.sectionIndex) ?? [];
      summaries.push(summary);
      sections.set(summary.sectionIndex, summaries);
    });

    return Array.from(sections.entries()).flatMap<TopicDoormatIssueRow>(
      ([sectionIndex, summaries]): TopicDoormatIssueRow[] => {
        if (summaries.length < 3) return [];
        const classified = summaries.map((summary) => ({
          summary,
          style:
            stylesByDoormatIndex.get(summary.index) ?? 'mixed-or-unclear',
        }));
        if (classified.some((entry) => entry.style === 'mixed-or-unclear')) {
          return [];
        }
        const counts = new Map<TopicDoormatLinkTextStyle, number>();
        classified.forEach(({ style }) => {
          counts.set(style, (counts.get(style) ?? 0) + 1);
        });
        const ranked = this.topicDoormatLinkTextStyleOrder
          .map((style) => ({ style, count: counts.get(style) ?? 0 }))
          .filter((entry) => entry.count > 0)
          .sort((a, b) => b.count - a.count);
        if (ranked.length < 2) return [];

        const secondStyleCount = ranked[1]?.count ?? 0;
        const isSectionMix =
          secondStyleCount >= 2 || summaries.length <= 4;
        if (isSectionMix) {
          const groups = ranked.map(({ style }) => {
            const indexes = classified
              .filter((entry) => entry.style === style)
              .map((entry) => entry.summary.sectionItemIndex)
              .slice(0, 4);
            return `${this.getTopicDoormatLinkStyleLabel(style)}: ${indexes.join(', ')}`;
          });
          const firstSummary = summaries[0];
          return [
            {
              include: true,
              rowType: 'section',
              severity: 'Medium',
              doormat: this.buildTopicDoormatSectionLabel(
                sectionIndex,
                doormatSummaries,
              ),
              doormatLabel: 'All doormats in section',
              issueId: 'mixed-link-name-styles-in-section',
              issue: this.getTopicDoormatIssueLabel(
                'mixed-link-name-styles-in-section',
              ),
              evidence: `Link name styles in this section: ${groups.join('; ')}.`,
              recommendation:
                'Rewrite the link names so they use one consistent link name style across the section.',
              sectionIndex,
              sectionTitle: firstSummary.sectionTitle,
            } satisfies TopicDoormatIssueRow,
          ];
        }

        if (ranked[0].count === ranked[1].count) return [];
        const dominantStyle = ranked[0].style;
        const outliers = classified.filter(
          (entry) => entry.style !== dominantStyle,
        );
        if (!outliers.length || outliers.length > 2) return [];
        return outliers.map(({ summary, style }) => ({
          include: true,
          rowType: 'doormat',
          severity: 'Low',
          doormat: this.buildTopicDoormatLabel(summary),
          doormatLabel: summary.linkText || summary.href || 'Doormat',
          issueId: 'inconsistent-link-name-style',
          issue: this.getTopicDoormatIssueLabel('inconsistent-link-name-style'),
          evidence: `The section mostly uses ${this.getTopicDoormatLinkStyleLabel(
            dominantStyle,
          )} link names; this doormat uses ${this.getTopicDoormatLinkStyleLabel(
            style,
          )}.`,
          recommendation:
            'Use the dominant link name style unless this doormat has a clear reason to differ.',
          doormatIndex: summary.index,
          sectionIndex: summary.sectionIndex,
          sectionTitle: summary.sectionTitle,
          sectionItemIndex: summary.sectionItemIndex,
        } satisfies TopicDoormatIssueRow));
      },
    );
  }

  private getTopicDoormatLinkStyleLabel(
    style: TopicDoormatLinkTextStyle,
  ): string {
    if (style === 'action-verb') return 'action-verb';
    if (style === 'noun-topic') return 'noun/topic';
    if (style === 'product-or-service') return 'product/service';
    if (style === 'audience-group') return 'audience/group';
    return 'mixed/unclear';
  }

  private buildLocalTopicDoormatDestinationMismatchRows(
    doormatSummaries: TopicDoormatSummary[],
    assessmentsByDoormatIndex: Map<
      number,
      TopicDoormatDestinationLinkAssessment
    >,
  ): TopicDoormatIssueRow[] {
    return doormatSummaries.flatMap((summary) => {
      const assessment = assessmentsByDoormatIndex.get(summary.index);
      const destinationTitle = summary.destinationPageTitle ?? '';
      const destinationHeading = summary.destinationPageHeading ?? '';
      if (
        assessment?.relationship !== 'materially-different' ||
        assessment.basis !== 'conflicting-core-concept' ||
        !assessment.reason ||
        (!destinationTitle && !destinationHeading) ||
        this.hasEquivalentTopicDoormatDestinationSurface(summary)
      ) {
        return [];
      }
      const destinationEvidence = destinationHeading
        ? `Destination H1: "${destinationHeading}".`
        : `Destination title: "${destinationTitle}".`;
      return [
        {
          include: true,
          rowType: 'doormat',
          severity: 'Medium',
          doormat: this.buildTopicDoormatLabel(summary),
          doormatLabel: summary.linkText || summary.href || 'Doormat',
          issueId: 'link-name-too-different-from-destination-title',
          issue: this.getTopicDoormatIssueLabel(
            'link-name-too-different-from-destination-title',
          ),
          evidence: `Link name: "${summary.linkText}". ${destinationEvidence} ${assessment.reason}`,
          recommendation:
            'Rewrite the link name so it accurately describes the destination topic, task, audience, and scope.',
          doormatIndex: summary.index,
          sectionIndex: summary.sectionIndex,
          sectionTitle: summary.sectionTitle,
          sectionItemIndex: summary.sectionItemIndex,
        } satisfies TopicDoormatIssueRow,
      ];
    });
  }

  private buildLocalTopicDoormatContentGapRows(
    doormatSummaries: TopicDoormatSummary[],
    assessmentsByDoormatIndex: Map<
      number,
      TopicDoormatDestinationContentAssessment
    >,
  ): TopicDoormatIssueRow[] {
    return doormatSummaries.flatMap((summary) => {
      const assessment = assessmentsByDoormatIndex.get(summary.index);
      const missingElements = this.getValidatedTopicDoormatMissingElements(
        summary,
        assessment,
      );
      if (!missingElements.length) return [];

      const evidenceParts = missingElements.slice(0, 3).map((element) => {
        const text =
          element.text.length > 140
            ? `${element.text.slice(0, 137).trimEnd()}...`
            : element.text;
        return `${element.type === 'h2' ? 'H2' : 'Intro'}: "${text}"`;
      });
      if (missingElements.length > evidenceParts.length) {
        evidenceParts.push(
          `and ${missingElements.length - evidenceParts.length} more`,
        );
      }

      return [
        {
          include: true,
          rowType: 'doormat',
          severity: 'Medium',
          doormat: this.buildTopicDoormatLabel(summary),
          doormatLabel: summary.linkText || summary.href || 'Doormat',
          issueId: 'description-missing-needed-information',
          issue: this.getTopicDoormatIssueLabel(
            'description-missing-needed-information',
          ),
          evidence: `Important destination elements not covered by the link text or description: ${evidenceParts.join('; ')}.`,
          recommendation:
            'Add the missing decision-making information to the description without repeating the link text.',
          doormatIndex: summary.index,
          sectionIndex: summary.sectionIndex,
          sectionTitle: summary.sectionTitle,
          sectionItemIndex: summary.sectionItemIndex,
        } satisfies TopicDoormatIssueRow,
      ];
    });
  }

  private getValidatedTopicDoormatMissingElements(
    summary: TopicDoormatSummary,
    assessment?: TopicDoormatDestinationContentAssessment,
  ): TopicDoormatDestinationContextElement[] {
    if (summary.destinationContextStatus !== 'available' || !assessment) {
      return [];
    }
    const elementsById = new Map(
      this.buildTopicDoormatDestinationContextElements(summary).map((element) => [
        element.id,
        element,
      ]),
    );
    const importantIds = new Set(
      assessment.importantElementIds.filter((id) => elementsById.has(id)),
    );
    const coveredIds = new Set(
      assessment.coveredElementIds.filter((id) => elementsById.has(id)),
    );
    const seen = new Set<string>();
    return assessment.missingImportantElementIds.flatMap((id) => {
      if (
        seen.has(id) ||
        !importantIds.has(id) ||
        coveredIds.has(id)
      ) {
        return [];
      }
      const element = elementsById.get(id);
      if (!element) return [];
      seen.add(id);
      return [element];
    });
  }

  private buildLocalTopicDoormatStyleIssueRows(
    doormatSummaries: TopicDoormatSummary[],
    existingIssueKeys: Set<string>,
    descriptionStylesByDoormatIndex: Map<
      number,
      TopicDoormatDescriptionStyle
    >,
  ): TopicDoormatIssueRow[] {
    const analyses = this.analyzeTopicDoormatDescriptionStyles(
      doormatSummaries,
      descriptionStylesByDoormatIndex,
    );
    const rows: TopicDoormatIssueRow[] = [];

    analyses.forEach((analysis) => {
      const key = `${analysis.sectionIndex}|mixed-description-style-in-section`;
      if (!analysis.isMixed || existingIssueKeys.has(key)) return;
      rows.push({
        include: true,
        rowType: 'section',
        severity: 'Medium',
        doormat: this.buildTopicDoormatSectionLabel(
          analysis.sectionIndex,
          doormatSummaries,
        ),
        doormatLabel: 'All doormats in section',
        issueId: 'mixed-description-style-in-section',
        issue: this.getTopicDoormatIssueLabel(
          'mixed-description-style-in-section',
        ),
        evidence: this.buildTopicDoormatMixedStyleEvidence(analysis),
        recommendation:
          'Rewrite the descriptions so they use one consistent description style across the section.',
        sectionIndex: analysis.sectionIndex,
        sectionTitle: analysis.sectionTitle,
      });
    });

    const internallyConsistentAnalyses = analyses.filter(
      (analysis) => !analysis.isMixed && !!analysis.dominantStyle,
    );
    const pageDominantStyle =
      this.getDominantTopicDoormatSectionStyle(
        internallyConsistentAnalyses,
      ) ??
      this.getTwoSectionTopicDoormatReferenceStyle(
      internallyConsistentAnalyses,
      );
    if (!pageDominantStyle) return rows;

    internallyConsistentAnalyses.forEach((analysis) => {
      const sectionStyle = analysis.dominantStyle;
      if (!sectionStyle || sectionStyle === pageDominantStyle) return;
      const key = `${analysis.sectionIndex}|section-description-style-outlier`;
      if (existingIssueKeys.has(key)) return;
      rows.push({
        include: true,
        rowType: 'section',
        severity: 'Low',
        doormat: this.buildTopicDoormatSectionLabel(
          analysis.sectionIndex,
          doormatSummaries,
        ),
        doormatLabel: 'All doormats in section',
        issueId: 'section-description-style-outlier',
        issue: this.getTopicDoormatIssueLabel(
          'section-description-style-outlier',
        ),
        evidence: `This section uses ${this.getTopicDoormatStyleLabel(
          sectionStyle,
        )}, while the page mostly uses ${this.getTopicDoormatStyleLabel(
          pageDominantStyle,
        )}.`,
        recommendation:
          'Align this section with the dominant page description style unless the section has a clear reason to use a different pattern.',
        sectionIndex: analysis.sectionIndex,
        sectionTitle: analysis.sectionTitle,
      });
    });

    return rows;
  }

  private analyzeTopicDoormatDescriptionStyles(
    doormatSummaries: TopicDoormatSummary[],
    descriptionStylesByDoormatIndex: Map<
      number,
      TopicDoormatDescriptionStyle
    >,
  ): TopicDoormatSectionStyleAnalysis[] {
    const sections = new Map<number, TopicDoormatSummary[]>();
    doormatSummaries.forEach((summary) => {
      if (!summary.sectionIndex) return;
      const rows = sections.get(summary.sectionIndex) ?? [];
      rows.push(summary);
      sections.set(summary.sectionIndex, rows);
    });

    return Array.from(sections.entries())
      .map(([sectionIndex, summaries]) => {
        const styleCounts = new Map<TopicDoormatDescriptionStyle, number>();
        const examplesByStyle = new Map<TopicDoormatDescriptionStyle, number[]>();

        summaries.forEach((summary) => {
          const style =
            descriptionStylesByDoormatIndex.get(summary.index) ??
            'mixed-or-unclear';
          styleCounts.set(style, (styleCounts.get(style) ?? 0) + 1);
          const examples = examplesByStyle.get(style) ?? [];
          examples.push(summary.sectionItemIndex);
          examplesByStyle.set(style, examples);
        });

        const relevantStyles = this.topicDoormatDescriptionStyleOrder.filter(
          (style) => (styleCounts.get(style) ?? 0) > 0,
        );
        const dominantStyle =
          this.getDominantTopicDoormatDescriptionStyle(styleCounts);
        const rankedRelevantStyles = relevantStyles
          .map((style) => ({ style, count: styleCounts.get(style) ?? 0 }))
          .sort((a, b) => b.count - a.count);
        const secondStyleCount = rankedRelevantStyles[1]?.count ?? 0;
        const isMixed =
          summaries.length >= 3 &&
          relevantStyles.length >= 2 &&
          (secondStyleCount >= 2 || summaries.length <= 4);

        return {
          sectionIndex,
          sectionTitle: summaries[0]?.sectionTitle || `Section ${sectionIndex}`,
          summaries,
          dominantStyle,
          styleCounts,
          examplesByStyle,
          isMixed,
        };
      })
      .sort((a, b) => a.sectionIndex - b.sectionIndex);
  }

  private getDominantTopicDoormatDescriptionStyle(
    styleCounts: Map<TopicDoormatDescriptionStyle, number>,
  ): Exclude<TopicDoormatDescriptionStyle, 'mixed-or-unclear'> | null {
    const candidates = this.topicDoormatDescriptionStyleOrder
      .map((style) => ({ style, count: styleCounts.get(style) ?? 0 }))
      .filter((entry) => entry.count > 0)
      .sort((a, b) => b.count - a.count);
    if (!candidates.length) return null;
    if (candidates.length > 1 && candidates[0].count === candidates[1].count) {
      return null;
    }
    return candidates[0].style;
  }

  private getDominantTopicDoormatSectionStyle(
    analyses: TopicDoormatSectionStyleAnalysis[],
  ): Exclude<TopicDoormatDescriptionStyle, 'mixed-or-unclear'> | null {
    const counts = new Map<
      Exclude<TopicDoormatDescriptionStyle, 'mixed-or-unclear'>,
      number
    >();
    analyses.forEach((analysis) => {
      if (!analysis.dominantStyle) return;
      counts.set(
        analysis.dominantStyle,
        (counts.get(analysis.dominantStyle) ?? 0) + 1,
      );
    });
    const ranked = Array.from(counts.entries()).sort((a, b) => b[1] - a[1]);
    if (ranked.length < 2) return null;
    if (ranked[0][1] === ranked[1][1]) return null;
    return ranked[0][0];
  }

  private getTwoSectionTopicDoormatReferenceStyle(
    analyses: TopicDoormatSectionStyleAnalysis[],
  ): Exclude<TopicDoormatDescriptionStyle, 'mixed-or-unclear'> | null {
    if (analyses.length !== 2) return null;
    const firstStyle = analyses[0].dominantStyle;
    const secondStyle = analyses[1].dominantStyle;
    if (!firstStyle || !secondStyle || firstStyle === secondStyle) return null;
    return firstStyle;
  }

  private buildTopicDoormatMixedStyleEvidence(
    analysis: TopicDoormatSectionStyleAnalysis,
  ): string {
    const groups = this.buildTopicDoormatMixedStyleEvidenceGroups(analysis);
    if (!groups.length) return 'Mixes description styles in this section.';

    if (groups.length === 2) {
      const [first, second] = groups;
      return [
        `Mixes ${first.label} with ${second.label}.`,
        `${first.exampleLabel} examples: ${first.examples.join(', ')}.`,
        `${second.exampleLabel} examples: ${second.examples.join(', ')}.`,
      ].join(' ');
    }

    const styleParts = groups.map(
      (group) => `${group.exampleLabel} examples: ${group.examples.join(', ')}`,
    );
    return `Mixes description styles in this section. ${styleParts.join('. ')}.`;
  }

  private buildTopicDoormatMixedStyleEvidenceGroups(
    analysis: TopicDoormatSectionStyleAnalysis,
  ): { label: string; exampleLabel: string; examples: number[] }[] {
    return this.topicDoormatDescriptionStyleOrder
      .map((style) => ({
        label: this.getTopicDoormatStyleLabel(style),
        exampleLabel: this.getTopicDoormatStyleEvidenceLabel(style),
        examples: (analysis.examplesByStyle.get(style) ?? [])
          .sort((a, b) => a - b)
          .slice(0, 4),
      }))
      .filter((group) => group.examples.length > 0);
  }

  private getTopicDoormatStyleLabel(
    style: Exclude<TopicDoormatDescriptionStyle, 'mixed-or-unclear'>,
  ): string {
    if (style === 'action-verb-task-summary') return 'action/task summaries';
    if (style === 'noun-topic-summary') return 'noun/topic summaries';
    if (style === 'keyword-list') return 'keyword lists';
    if (style === 'task-list') return 'task lists';
    return 'eligibility or benefit summaries';
  }

  private getTopicDoormatStyleEvidenceLabel(
    style: Exclude<TopicDoormatDescriptionStyle, 'mixed-or-unclear'>,
  ): string {
    if (style === 'action-verb-task-summary') return 'Action/task';
    if (style === 'noun-topic-summary') return 'Noun/topic';
    if (style === 'keyword-list') return 'Keyword list';
    if (style === 'task-list') return 'Task list';
    return 'Eligibility/benefit';
  }

  private buildTopicDoormatSectionCounts(
    doormatSummaries: TopicDoormatSummary[],
  ): { sectionIndex: number; sectionTitle: string; count: number }[] {
    const counts = new Map<
      number,
      { sectionIndex: number; sectionTitle: string; count: number }
    >();
    doormatSummaries.forEach((summary) => {
      if (!summary.sectionIndex) return;
      const existing = counts.get(summary.sectionIndex);
      counts.set(summary.sectionIndex, {
        sectionIndex: summary.sectionIndex,
        sectionTitle: summary.sectionTitle,
        count: Math.max(existing?.count ?? 0, summary.sectionDoormatCount),
      });
    });
    return Array.from(counts.values())
      .sort((a, b) => a.sectionIndex - b.sectionIndex);
  }

  private getTopicDoormatRowSortIndex(
    row: TopicDoormatIssueRow,
    doormatSummaries: TopicDoormatSummary[],
  ): number {
    if (row.doormatIndex) return row.doormatIndex;
    if (!row.sectionIndex) return Number.MAX_SAFE_INTEGER;

    const firstSectionItem = doormatSummaries.find(
      (summary) => summary.sectionIndex === row.sectionIndex,
    );
    return (firstSectionItem?.index ?? row.sectionIndex) - 0.5;
  }

  private getTopicDoormatOverLimitSectionIndexes(
    doormatSummaries: TopicDoormatSummary[],
  ): number[] {
    return doormatSummaries
      .filter(
        (summary) =>
          summary.sectionDoormatCount > 9 && summary.sectionItemIndex > 9,
      )
      .map((summary) => summary.index);
  }

  private buildTopicDoormatNoIssueRow(
    doormat: TopicDoormatSummary,
  ): TopicDoormatIssueRow {
    return {
      include: false,
      rowType: 'doormat',
      severity: 'OK',
      doormat: this.buildTopicDoormatLabel(doormat),
      doormatLabel: doormat.linkText || doormat.href || 'Doormat',
      issueId: 'no-issues',
      issue: 'No issues',
      evidence: 'No issues reported by AI.',
      recommendation: '',
      doormatIndex: doormat.index || undefined,
      sectionIndex: doormat.sectionIndex || undefined,
      sectionTitle: doormat.sectionTitle || undefined,
      sectionItemIndex: doormat.sectionItemIndex || undefined,
    };
  }

  private countTopicDoormatRowsByIssue(
    rows: TopicDoormatIssueRow[],
  ): Record<string, number> {
    return rows.reduce<Record<string, number>>((counts, row) => {
      counts[row.issueId] = (counts[row.issueId] ?? 0) + 1;
      return counts;
    }, {});
  }

  private getTopicDoormatIssueId(issue: Record<string, unknown>): string {
    const rawCategory = this.cleanString(issue['issue_category']);
    return this.getTopicDoormatIssueIdFromText(rawCategory) || 'issue';
  }

  private async loadTopicDoormatIssueTaxonomy(): Promise<void> {
    if (!this.topicDoormatIssueTaxonomyLoad) {
      this.topicDoormatIssueTaxonomyLoad = firstValueFrom(
        this.http.get<TopicDoormatIssueTaxonomy>(
          this.topicDoormatIssueTaxonomyPath,
        ),
      )
        .then((taxonomy) => {
          const categories = Array.isArray(taxonomy.issue_categories)
            ? taxonomy.issue_categories
            : [];
          const modelIssueCategories: Record<string, unknown>[] = [];
          categories.forEach((rawCategory) => {
            if (!rawCategory || typeof rawCategory !== 'object') return;
            const category = rawCategory as TopicDoormatIssueCategory;
            const id = this.cleanString(category.id);
            const label = this.cleanString(category.label);
            if (!id) return;

            this.topicDoormatIssueIdToLabel.set(
              id,
              label || this.toTitleCase(id.replace(/-/g, ' ')),
            );
            this.registerTopicDoormatIssueAlias(id, id);
            if (label) {
              this.registerTopicDoormatIssueAlias(label, id);
            }
            if (!this.locallyOwnedTopicDoormatIssueIds.has(id)) {
              const source = rawCategory as Record<string, unknown>;
              modelIssueCategories.push(
                this.compactTopicDoormatIssueCategory(source),
              );
            }
          });
          this.topicDoormatModelIssueContract =
            this.buildCompactTopicDoormatModelIssueContract(
              taxonomy,
              modelIssueCategories,
            );
          this.registerTopicDoormatIssueAlias('No issues', 'no-issues');
        })
        .catch((err: unknown) => {
          this.debugTopicDoormatIssues('issue taxonomy load failed', {
            path: this.topicDoormatIssueTaxonomyPath,
            error: err instanceof Error ? err.message : String(err),
          });
        });
    }

    await this.topicDoormatIssueTaxonomyLoad;
  }

  private compactTopicDoormatIssueCategory(
    category: Record<string, unknown>,
  ): Record<string, unknown> {
    const compact: Record<string, unknown> = {};
    [
      'id',
      'label',
      'group',
      'severity',
      'condition',
      'recommendation',
      'reporting',
      'evidence_required',
      'severity_override',
    ].forEach((key) => {
      if (category[key] !== undefined) compact[key] = category[key];
    });
    return compact;
  }

  private buildCompactTopicDoormatModelIssueContract(
    taxonomy: TopicDoormatIssueTaxonomy,
    modelIssueCategories: Record<string, unknown>[],
  ): string {
    const source = taxonomy as TopicDoormatIssueTaxonomy &
      Record<string, unknown>;
    const contract = {
      instruction:
        'This compact runtime contract is authoritative. Report only allowed_issue_categories. Complete the required per-doormat classification fields before reporting issues.',
      evidence_style: source['evidence_style'],
      runtime_editorial_evidence_overrides:
        source['runtime_editorial_evidence_overrides'],
      destination_content_assessment:
        source['destination_content_assessment'],
      destination_link_relationship:
        source['destination_link_relationship'],
      style_inconsistency_reporting:
        source['style_inconsistency_reporting'],
      link_name_style_reporting: source['link_name_style_reporting'],
      allowed_issue_categories: modelIssueCategories,
    };
    return `### Compact model-owned issue contract\n${JSON.stringify(contract)}`;
  }

  private registerTopicDoormatIssueAlias(alias: string, issueId: string): void {
    const key = this.normalizeTopicDoormatIssueKey(alias);
    if (key) {
      this.topicDoormatIssueAliasToId.set(key, issueId);
    }
  }

  private getTopicDoormatIssueIdFromText(rawCategory: string): string {
    const normalized = this.normalizeTopicDoormatIssueKey(rawCategory);
    if (!normalized) return '';
    return this.topicDoormatIssueAliasToId.get(normalized) ?? normalized;
  }

  private normalizeTopicDoormatIssueKey(value: string): string {
    return value
      .trim()
      .toLowerCase()
      .replace(/[']/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  private normalizeTopicDoormatIssueId(rawCategory: string): string {
    const normalized = rawCategory
      .trim()
      .toLowerCase()
      .replace(/[’']/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');

    if (!normalized) return '';
    return this.topicDoormatIssueAliasToId.get(normalized) ?? normalized;
  }

  private getTopicDoormatIssueLabel(issueId: string): string {
    if (issueId === 'no-issues') return 'No issues';
    return (
      this.topicDoormatIssueIdToLabel.get(issueId) ??
      this.toTitleCase(issueId.replace(/-/g, ' '))
    );
  }

  private toTitleCase(value: string): string {
    return value.replace(/\b\w/g, (match) => match.toUpperCase());
  }

  private hasValidTopicDoormatObjectiveEvidence(
    issueId: string,
    doormat?: TopicDoormatSummary,
  ): boolean {
    if (issueId === 'link-name-trailing-punctuation') {
      if (!doormat?.linkText) return false;
      return this.hasTopicDoormatTrailingPunctuation(doormat.linkText);
    }
    if (issueId === 'description-trailing-punctuation') {
      if (!doormat?.description) return false;
      return this.hasTopicDoormatTrailingPunctuation(doormat.description);
    }
    return true;
  }

  private isLocalIaOwnedTopicDoormatIssue(issueId: string): boolean {
    return (
      issueId === 'missing-needed-doormat' ||
      issueId === 'unnecessary-doormat'
    );
  }

  private buildTopicDoormatLabel(doormat: TopicDoormatSummary): string {
    const itemIndex = doormat.sectionItemIndex || doormat.index;
    const itemLabel = [
      itemIndex ? `${itemIndex}.` : '',
      doormat.linkText || doormat.href || 'Doormat',
    ]
      .filter(Boolean)
      .join(' ');
    if (doormat.sectionTitle) {
      return `${doormat.sectionTitle}: ${itemLabel}`;
    }
    return [
      doormat.index ? `${doormat.index}.` : '',
      doormat.linkText || doormat.href || 'Doormat',
    ]
      .filter(Boolean)
      .join(' ');
  }

  private buildTopicDoormatSectionLabel(
    sectionIndex: number,
    doormatSummaries: TopicDoormatSummary[],
  ): string {
    const sectionTitle =
      doormatSummaries.find((summary) => summary.sectionIndex === sectionIndex)
        ?.sectionTitle || '';
    return sectionTitle
      ? `Section ${sectionIndex}: ${sectionTitle}`
      : `Section ${sectionIndex}`;
  }

  private isReportableTopicDoormatIssue(
    issue: Record<string, unknown>,
    doormat?: TopicDoormatSummary,
    pageLanguage: TopicDoormatPageLanguage = 'en',
  ): boolean {
    const issueCategory = this.getTopicDoormatIssueId(issue);
    if (issueCategory === 'link-name-too-different-from-destination-title') {
      return this.hasMeaningfulTopicDoormatDestinationTitleMismatch(
        issue,
        doormat,
      );
    }
    if (issueCategory === 'misdirected-link') {
      return this.hasMeaningfulTopicDoormatDestinationTitleMismatch(
        issue,
        doormat,
      );
    }
    if (issueCategory === 'description-lacks-clarity') {
      return this.hasValidTopicDoormatClarityEvidence(issue, doormat);
    }
    if (
      issueCategory !== 'link-name-too-long' &&
      issueCategory !== 'description-too-long'
    ) {
      return true;
    }

    const exactCount = this.getTopicDoormatExactCharacterCount(
      issueCategory,
      doormat,
    );
    if (exactCount == null) return true;

    const details =
      issue['evidence_details'] && typeof issue['evidence_details'] === 'object'
        ? (issue['evidence_details'] as Record<string, unknown>)
        : null;
    const limit =
      this.toNumber(details?.['character_limit']) ??
      this.getTopicDoormatLengthLimit(
        issueCategory as 'link-name-too-long' | 'description-too-long',
        pageLanguage,
      );
    if (limit == null) return true;

    return exactCount > limit;
  }

  private hasValidTopicDoormatClarityEvidence(
    issue: Record<string, unknown>,
    doormat?: TopicDoormatSummary,
  ): boolean {
    if (!doormat?.description) return false;
    const details =
      issue['evidence_details'] && typeof issue['evidence_details'] === 'object'
        ? (issue['evidence_details'] as Record<string, unknown>)
        : null;
    const unclearPhrase = this.cleanVisibleText(
      this.cleanString(details?.['unclear_phrase']),
    );
    const ambiguityExplanation = this.cleanVisibleText(
      this.cleanString(details?.['ambiguity_explanation']),
    );
    if (!unclearPhrase || !ambiguityExplanation) return false;
    return this.cleanVisibleText(doormat.description)
      .toLocaleLowerCase()
      .includes(unclearPhrase.toLocaleLowerCase());
  }

  private hasMeaningfulTopicDoormatDestinationTitleMismatch(
    issue: Record<string, unknown>,
    doormat?: TopicDoormatSummary,
  ): boolean {
    if (!doormat?.linkText) return true;
    const details =
      issue['evidence_details'] && typeof issue['evidence_details'] === 'object'
        ? (issue['evidence_details'] as Record<string, unknown>)
        : null;
    const linkKey = this.normalizeTopicDoormatDestinationComparisonText(
      doormat.linkText,
    );
    if (!linkKey) return true;

    const destinationKeys = [
      doormat.destinationPageTitle,
      doormat.destinationPageHeading,
      this.cleanString(details?.['destination_page_title']),
      this.cleanString(details?.['destination_page_heading']),
    ]
      .map((value) =>
        this.normalizeTopicDoormatDestinationComparisonText(value),
      )
      .filter(Boolean);

    if (!destinationKeys.length) return true;
    return !destinationKeys.includes(linkKey);
  }

  private normalizeTopicDoormatDestinationComparisonText(
    value: string | undefined,
  ): string {
    return this.cleanVisibleText(value)
      .replace(/\s*(?:[-|]\s*)?canada\.ca\s*$/i, '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[\u2018\u2019\u201b\u2032]/g, "'")
      .replace(/[^a-z0-9]+/gi, ' ')
      .trim()
      .toLowerCase();
  }

  private hasEquivalentTopicDoormatDestinationSurface(
    summary: TopicDoormatSummary,
  ): boolean {
    const linkText = this.normalizeTopicDoormatDestinationComparisonText(
      summary.linkText,
    );
    if (!linkText) return false;

    const paddedLinkText = ` ${linkText} `;
    return [summary.destinationPageTitle, summary.destinationPageHeading]
      .map((value) =>
        this.normalizeTopicDoormatDestinationComparisonText(value),
      )
      .filter(Boolean)
      .some((destinationText) => {
        const paddedDestinationText = ` ${destinationText} `;
        return (
          destinationText === linkText ||
          paddedDestinationText.includes(paddedLinkText) ||
          paddedLinkText.includes(paddedDestinationText)
        );
      });
  }

  private buildTopicDoormatEvidence(
    issue: Record<string, unknown>,
    doormat?: TopicDoormatSummary,
  ): string {
    const evidence = this.cleanString(issue['evidence']);
    const issueCategory = this.getTopicDoormatIssueId(issue);
    const details =
      issue['evidence_details'] && typeof issue['evidence_details'] === 'object'
        ? (issue['evidence_details'] as Record<string, unknown>)
        : null;
    const detailParts: string[] = [];

    if (issueCategory === 'too-many-doormats-in-section') {
      const normalizedEvidence =
        this.buildTooManyTopicDoormatsEvidence(doormat);
      if (normalizedEvidence) return normalizedEvidence;
    }

    if (details) {
      const count =
        this.getTopicDoormatExactCharacterCount(issueCategory, doormat) ??
        this.toNumber(details['actual_character_count']);
      const limit = this.toNumber(details['character_limit']);
      if (count != null && limit != null) {
        detailParts.push(`${count}/${limit} characters`);
      }

      const doormatHref = this.cleanString(details['doormat_href']);
      const mostRequestedHref = this.cleanString(details['most_requested_href']);
      if (doormatHref || mostRequestedHref) {
        detailParts.push(
          `Doormat: ${doormatHref || 'n/a'}; Most requested: ${
            mostRequestedHref || 'n/a'
          }`,
        );
      }

      const destinationTitle = this.cleanString(details['destination_page_title']);
      if (destinationTitle) {
        detailParts.push(`Destination title: ${destinationTitle}`);
      }
    }

    const builtEvidence = [evidence, ...detailParts].filter(Boolean).join(' ');
    if (builtEvidence) return builtEvidence;

    if (issueCategory === 'duplicate-link-in-most-requested') {
      return 'Link also appears in Most requested';
    }

    return '';
  }

  private buildTooManyTopicDoormatsEvidence(
    doormat?: TopicDoormatSummary,
  ): string {
    if (
      !doormat?.sectionDoormatCount ||
      !doormat.sectionIndex ||
      !doormat.sectionItemIndex
    ) {
      return '';
    }

    const sectionLabel = doormat.sectionTitle
      ? `"${doormat.sectionTitle}"`
      : `section ${doormat.sectionIndex}`;
    return `${doormat.sectionDoormatCount}/9 doormats in ${sectionLabel}; item ${doormat.sectionItemIndex}`;
  }

  private getTopicDoormatExactCharacterCount(
    issueCategory: string,
    doormat?: TopicDoormatSummary,
  ): number | null {
    if (!doormat) return null;
    if (issueCategory === 'link-name-too-long') {
      return doormat.linkTextCharacterCount;
    }
    if (issueCategory === 'description-too-long') {
      return doormat.descriptionCharacterCount;
    }
    return null;
  }

  private isParseableTopicDoormatIssueResponseText(text: string): boolean {
    const parsed = this.looseJsonParse(this.stripCodeFences(text));
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
      return false;
    }
    const root = parsed as Record<string, unknown>;
    const doormats = root['doormats'];
    const sectionIssues = root['section_issues'];
    if (!Array.isArray(doormats)) return false;
    if (sectionIssues !== undefined && !Array.isArray(sectionIssues)) {
      return false;
    }
    return (
      doormats.every((value) => this.isValidTopicDoormatModelResult(value)) &&
      (sectionIssues ?? []).every((value: unknown) =>
        this.isValidTopicDoormatModelIssue(value, true),
      )
    );
  }

  private isValidTopicDoormatModelResult(value: unknown): boolean {
    if (!value || typeof value !== 'object' || Array.isArray(value)) {
      return false;
    }
    const doormat = value as Record<string, unknown>;
    const index = this.toNumber(doormat['doormat_index']);
    return (
      index !== null &&
      index > 0 &&
      typeof doormat['link_text'] === 'string' &&
      typeof doormat['href'] === 'string' &&
      typeof doormat['description'] === 'string' &&
      this.normalizeTopicDoormatLinkTextStyle(
        doormat['detected_link_text_style'],
      ) !== null &&
      this.normalizeTopicDoormatDescriptionStyle(
        doormat['detected_description_style'],
      ) !== null &&
      this.normalizeTopicDoormatDestinationLinkRelationship(
        doormat['destination_link_relationship'],
      ) !== null &&
      this.normalizeTopicDoormatDestinationLinkRelationshipBasis(
        doormat['destination_link_relationship_basis'],
      ) !== null &&
      typeof doormat['destination_link_relationship_reason'] === 'string' &&
      this.isValidTopicDoormatDestinationContentAssessment(
        doormat['destination_content_assessment'],
      ) &&
      Array.isArray(doormat['issues']) &&
      doormat['issues'].every((issue: unknown) =>
        this.isValidTopicDoormatModelIssue(issue, false),
      )
    );
  }

  private isValidTopicDoormatDestinationContentAssessment(
    value: unknown,
  ): value is {
    important_element_ids: string[];
    covered_element_ids: string[];
    missing_important_element_ids: string[];
  } {
    if (!value || typeof value !== 'object' || Array.isArray(value)) {
      return false;
    }
    const assessment = value as Record<string, unknown>;
    return [
      assessment['important_element_ids'],
      assessment['covered_element_ids'],
      assessment['missing_important_element_ids'],
    ].every(
      (ids) =>
        Array.isArray(ids) &&
        ids.every((id) => typeof id === 'string'),
    );
  }

  private normalizeTopicDoormatDescriptionStyle(
    value: unknown,
  ): TopicDoormatDescriptionStyle | null {
    if (value === 'mixed-or-unclear') return value;
    if (
      typeof value === 'string' &&
      this.topicDoormatDescriptionStyleOrder.includes(
        value as Exclude<TopicDoormatDescriptionStyle, 'mixed-or-unclear'>,
      )
    ) {
      return value as TopicDoormatDescriptionStyle;
    }
    return null;
  }

  private normalizeTopicDoormatLinkTextStyle(
    value: unknown,
  ): TopicDoormatLinkTextStyle | null {
    if (value === 'mixed-or-unclear') return value;
    if (
      typeof value === 'string' &&
      this.topicDoormatLinkTextStyleOrder.includes(
        value as Exclude<TopicDoormatLinkTextStyle, 'mixed-or-unclear'>,
      )
    ) {
      return value as TopicDoormatLinkTextStyle;
    }
    return null;
  }

  private normalizeTopicDoormatDestinationLinkRelationship(
    value: unknown,
  ): TopicDoormatDestinationLinkRelationship | null {
    if (
      value === 'equivalent' ||
      value === 'narrower-but-accurate' ||
      value === 'broader-but-accurate' ||
      value === 'materially-different' ||
      value === 'unavailable'
    ) {
      return value;
    }
    return null;
  }

  private normalizeTopicDoormatDestinationLinkRelationshipBasis(
    value: unknown,
  ): TopicDoormatDestinationLinkRelationshipBasis | null {
    if (
      value === 'literal-match' ||
      value === 'phrase-containment' ||
      value === 'grammatical-variant' ||
      value === 'synonym-or-paraphrase' ||
      value === 'acronym-or-program-term' ||
      value === 'compatible-scope' ||
      value === 'conflicting-core-concept' ||
      value === 'unavailable'
    ) {
      return value;
    }
    return null;
  }

  private isValidTopicDoormatModelIssue(
    value: unknown,
    requireSectionIndex: boolean,
  ): boolean {
    if (!value || typeof value !== 'object' || Array.isArray(value)) {
      return false;
    }
    const issue = value as Record<string, unknown>;
    const issueId = this.getTopicDoormatIssueId(issue);
    const sectionIndex = this.toNumber(issue['section_index']);
    return (
      this.topicDoormatIssueIdToLabel.has(issueId) &&
      !!this.normalizeTopicDoormatModelSeverity(issue['severity']) &&
      typeof issue['description'] === 'string' &&
      typeof issue['recommendation'] === 'string' &&
      (!requireSectionIndex || (sectionIndex !== null && sectionIndex > 0))
    );
  }

  private normalizeTopicDoormatModelSeverity(value: unknown): string | null {
    const severity = this.cleanString(value).toLowerCase();
    if (severity === 'high') return 'High';
    if (severity === 'medium') return 'Medium';
    if (severity === 'low') return 'Low';
    return null;
  }

  private stripCodeFences(value: string): string {
    const trimmed = value.trim();
    const fencedJson = trimmed.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);
    return (fencedJson?.[1] ?? trimmed)
      .replace(/^```(?:json)?\s*/i, '')
      .replace(/\s*```$/i, '')
      .trim();
  }

  private looseJsonParse(value: string): unknown | null {
    const candidates = [
      value,
      this.extractJsonObjectText(value),
    ].filter((candidate): candidate is string => !!candidate);

    for (const candidate of candidates) {
      const normalizedCandidates = [
        candidate,
        this.removeJsonTrailingCommas(candidate),
      ];
      for (const normalized of normalizedCandidates) {
        try {
          return JSON.parse(normalized);
        } catch {
          // Try the next local repair candidate before asking a model to repair JSON.
        }
      }
    }

    return null;
  }

  private extractJsonObjectText(value: string): string | null {
    const start = value.indexOf('{');
    const end = value.lastIndexOf('}');
    if (start < 0 || end <= start) return null;
    return value.slice(start, end + 1);
  }

  private removeJsonTrailingCommas(value: string): string {
    let inString = false;
    let escaped = false;
    let output = '';

    for (let i = 0; i < value.length; i += 1) {
      const char = value[i];
      if (escaped) {
        output += char;
        escaped = false;
        continue;
      }
      if (char === '\\') {
        output += char;
        escaped = inString;
        continue;
      }
      if (char === '"') {
        inString = !inString;
        output += char;
        continue;
      }
      if (char === ',' && !inString) {
        const nextNonWhitespace = value.slice(i + 1).match(/\S/)?.[0];
        if (nextNonWhitespace === '}' || nextNonWhitespace === ']') {
          continue;
        }
      }
      output += char;
    }

    return output;
  }

  private toNumber(value: unknown): number | null {
    const num =
      typeof value === 'number'
        ? value
        : typeof value === 'string'
          ? Number.parseInt(value, 10)
          : Number.NaN;
    return Number.isFinite(num) ? num : null;
  }

  private cleanString(value: unknown): string {
    return typeof value === 'string' ? value.trim() : '';
  }

  private cleanVisibleText(value: string | null | undefined): string {
    return (value || '').replace(/\s+/g, ' ').trim();
  }

  private isNoIssueRow(issue: TopicDoormatIssueRow): boolean {
    return issue.issueId === 'no-issues';
  }
}
