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
import {
  MostRequestedLinkSummary,
  TopicDoormatComparableUrl,
  TopicDoormatDescriptionStyle,
  TopicDoormatIssueCategory,
  TopicDoormatIssueRow,
  TopicDoormatIssueTaxonomy,
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
  model: string;
  modelRotation: string[];
  elapsedMs: number;
}

@Injectable({ providedIn: 'root' })
export class TopicDoormatIssueAnalysisService {
  private readonly http = inject(HttpClient);
  private readonly translate = inject(TranslateService);
  private readonly skillManager = inject(SkillManagerService);
  private readonly modelClient = inject(TopicDoormatModelClientService);
  private readonly iaCheck = inject(TopicDoormatIaCheckService);
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
  private readonly topicDoormatDescriptionStyleOrder: Exclude<
    TopicDoormatDescriptionStyle,
    'unclear'
  >[] = [
    'noun-topic',
    'benefit-summary',
    'status-or-date-change',
    'action-oriented',
    'how-to',
    'question-or-sentence',
  ];
  private topicDoormatIssueTaxonomyLoad?: Promise<void>;
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
      includeReferences: true,
      includeAssets: true,
      requireSkill: true,
    });

    const messages: ChatMessage[] = [
      { role: 'system', content: composed.prompt },
      {
        role: 'user',
        content: JSON.stringify({
          doormats: input.doormatSummaries,
          mostRequestedLinks: input.mostRequestedLinks,
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
      estimatedSystemPromptTokens: composed.estimatedPromptTokens,
      systemPromptCharacters: composed.prompt.length,
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
          if (!this.isReportableTopicDoormatIssue(
            issue,
            summary,
            pageLanguage,
          )) {
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
            const sectionKey = `${sectionRow.sectionIndex ?? 0}|${
              sectionRow.issueId
            }`;
            if (!sectionIssueKeys.has(sectionKey)) {
              sectionIssueRows.push(sectionRow);
              sectionIssueKeys.add(sectionKey);
            }
            return null;
          }
          if (issueId === 'multiple-links') {
            return null;
          }
          if (issueId === 'split-heading-link') {
            return null;
          }
          if (issueId === 'description-contains-link') {
            return null;
          }
          if (issueId === 'link-name-too-long') {
            return null;
          }
          if (issueId === 'description-too-long') {
            return null;
          }
          if (issueId === 'duplicate-link-in-most-requested') {
            return null;
          }
          if (!this.hasValidTopicDoormatObjectiveEvidence(issueId, summary)) {
            return null;
          }
          if (issueId === 'too-many-doormats-in-section') {
            return null;
          }
          const evidence = this.buildTopicDoormatEvidence(issue, summary);
          return {
            include:
              typeof issue['include'] === 'boolean'
                ? issue['include']
                : true,
            rowType: 'doormat',
            severity: this.cleanString(issue['severity']) || 'Unknown',
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
        row.issueId !== 'too-many-doormats-in-section' &&
        !this.isLocalIaOwnedTopicDoormatIssue(row.issueId),
    );
    const mixedDescriptionStyleSectionIndexes = new Set(
      reportableSectionIssueRows
        .filter((row) => row.issueId === 'mixed-description-style-in-section')
        .map((row) => row.sectionIndex)
        .filter((index): index is number => typeof index === 'number' && index > 0),
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

  private buildTopicDoormatSectionIssueRow(
    issue: Record<string, unknown>,
    fallbackSectionIndex?: number,
    doormatSummaries: TopicDoormatSummary[] = [],
  ): TopicDoormatIssueRow {
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
      severity: this.cleanString(issue['severity']) || 'Unknown',
      doormat: this.buildTopicDoormatSectionLabel(
        sectionIndex,
        doormatSummaries,
      ),
      doormatLabel: 'All doormats in section',
      issueId: this.getTopicDoormatIssueId(issue),
      issue: this.getTopicDoormatIssueLabel(
        this.getTopicDoormatIssueId(issue),
      ),
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
          severity: 'Medium',
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
      ...this.buildLocalTopicDoormatStyleIssueRows(
        doormatSummaries,
        existingIssueKeys,
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
    return `${count} ${descriptionLabel} in this section end with punctuation: ${doormatLabel} ${indexes}.`;
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
    const doormatUrl = this.parseTopicDoormatComparableUrl(href, uploadData);
    if (!doormatUrl) return null;
    return (
      mostRequestedLinks.find((link) => {
        const mostRequestedUrl = this.parseTopicDoormatComparableUrl(
          link.href,
          uploadData,
        );
        return (
          !!mostRequestedUrl &&
          this.areTopicDoormatComparableUrlsEqual(
            doormatUrl,
            mostRequestedUrl,
          )
        );
      }) ?? null
    );
  }

  private parseTopicDoormatComparableUrl(
    href: string,
    uploadData?: Partial<UploadData> | null,
  ): TopicDoormatComparableUrl | null {
    const trimmedHref = this.cleanString(href);
    if (!trimmedHref || trimmedHref.startsWith('#')) return null;
    const baseUrl =
      this.cleanString(uploadData?.originalUrl) ||
      this.cleanString(uploadData?.modifiedUrl);

    if (baseUrl) {
      try {
        return this.buildTopicDoormatComparableAbsoluteUrl(
          new URL(trimmedHref, baseUrl),
        );
      } catch {
        return null;
      }
    }

    try {
      return this.buildTopicDoormatComparableAbsoluteUrl(new URL(trimmedHref));
    } catch {
      if (!trimmedHref.startsWith('/')) return null;
      const parts = trimmedHref.split('#')[0].split('?');
      const path = this.normalizeTopicDoormatComparablePath(parts[0]);
      const query = parts[1] ? `?${parts[1]}` : '';
      if (!path) return null;
      return {
        kind: 'root-relative',
        pathKey: `${path}${query}`,
        allowedHost: false,
      };
    }
  }

  private buildTopicDoormatComparableAbsoluteUrl(
    url: URL,
  ): TopicDoormatComparableUrl | null {
    if (url.protocol !== 'https:' && url.protocol !== 'http:') return null;
    url.hash = '';
    const protocol = url.protocol.toLowerCase();
    const host = url.hostname.toLowerCase();
    const port = this.getTopicDoormatComparablePort(url);
    const path = this.normalizeTopicDoormatComparablePath(url.pathname);
    const pathKey = `${path}${url.search}`;
    return {
      kind: 'absolute',
      absoluteKey: `${protocol}//${host}${port}${pathKey}`,
      pathKey,
      allowedHost: this.isAllowedTopicDoormatComparisonHost(host),
    };
  }

  private getTopicDoormatComparablePort(url: URL): string {
    if (!url.port) return '';
    if (url.protocol === 'https:' && url.port === '443') return '';
    if (url.protocol === 'http:' && url.port === '80') return '';
    return `:${url.port}`;
  }

  private normalizeTopicDoormatComparablePath(path: string): string {
    const normalized = path || '/';
    if (normalized.length > 1 && normalized.endsWith('/')) {
      return normalized.replace(/\/+$/, '');
    }
    return normalized;
  }

  private isAllowedTopicDoormatComparisonHost(host: string): boolean {
    return [
      'www.canada.ca',
      'test.canada.ca',
      'proto-cra.github.io',
      'cra-design.github.io',
      'cra-test-arc.canada.ca',
      'cra-proto.github.io',
    ].includes(host);
  }

  private areTopicDoormatComparableUrlsEqual(
    first: TopicDoormatComparableUrl,
    second: TopicDoormatComparableUrl,
  ): boolean {
    if (first.kind === 'absolute' && second.kind === 'absolute') {
      return first.absoluteKey === second.absoluteKey;
    }
    if (first.kind === 'root-relative' && second.kind === 'root-relative') {
      return first.pathKey === second.pathKey;
    }
    const absolute = first.kind === 'absolute' ? first : second;
    const relative = first.kind === 'root-relative' ? first : second;
    return absolute.allowedHost && absolute.pathKey === relative.pathKey;
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

  private buildLocalTopicDoormatStyleIssueRows(
    doormatSummaries: TopicDoormatSummary[],
    existingIssueKeys: Set<string>,
  ): TopicDoormatIssueRow[] {
    const analyses = this.analyzeTopicDoormatDescriptionStyles(doormatSummaries);
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
          const style = this.classifyTopicDoormatDescriptionStyle(
            summary.description,
          );
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

  private classifyTopicDoormatDescriptionStyle(
    description: string,
  ): TopicDoormatDescriptionStyle {
    const text = this.cleanVisibleText(description).toLowerCase();
    if (!text) return 'unclear';
    if (/^how to\b/.test(text)) return 'how-to';
    if (
      /^(answer|find|find out|get|learn|apply|claim|calculate|check|confirm|report|see|use|update|manage|register|sign in|pay|file)\b/.test(
        text,
      )
    ) {
      return 'action-oriented';
    }
    if (
      /^(will be|starts?|closed|temporary|you may still|as of|from \w+ \d{1,2}|effective|replaced|replacement)\b/.test(
        text,
      ) ||
      /\b(reviewed|changed|replacement|replace|replaced|starts?|closed)\b/.test(
        text,
      )
    ) {
      return 'status-or-date-change';
    }
    if (
      /^(monthly|quarterly|annual|one-time)?\s*(payment|payments|benefit|benefits|credit|tax credit|temporary relief)\b/.test(
        text,
      ) ||
      /^(benefit|benefits|tax credit|credit|monthly payment|quarterly payments)\s+(for|to|that)\b/.test(
        text,
      )
    ) {
      return 'benefit-summary';
    }
    if (/^(what|who|when|where|why|whether)\b/.test(text)) {
      return 'question-or-sentence';
    }
    return 'noun-topic';
  }

  private getDominantTopicDoormatDescriptionStyle(
    styleCounts: Map<TopicDoormatDescriptionStyle, number>,
  ): Exclude<TopicDoormatDescriptionStyle, 'unclear'> | null {
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
  ): Exclude<TopicDoormatDescriptionStyle, 'unclear'> | null {
    const counts = new Map<Exclude<TopicDoormatDescriptionStyle, 'unclear'>, number>();
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
  ): Exclude<TopicDoormatDescriptionStyle, 'unclear'> | null {
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
    const evidenceGroups = [
      {
        label: 'summary-style descriptions',
        exampleLabel: 'Summary',
        styles: [
          'noun-topic',
          'benefit-summary',
          'question-or-sentence',
        ] satisfies TopicDoormatDescriptionStyle[],
      },
      {
        label: 'task/action descriptions',
        exampleLabel: 'Task/action',
        styles: [
          'action-oriented',
          'how-to',
        ] satisfies TopicDoormatDescriptionStyle[],
      },
      {
        label: 'status or date-change descriptions',
        exampleLabel: 'Status/date-change',
        styles: [
          'status-or-date-change',
        ] satisfies TopicDoormatDescriptionStyle[],
      },
    ];

    return evidenceGroups
      .map((group) => ({
        label: group.label,
        exampleLabel: group.exampleLabel,
        examples: group.styles
          .flatMap((style) => analysis.examplesByStyle.get(style) ?? [])
          .sort((a, b) => a - b)
          .slice(0, 4),
      }))
      .filter((group) => group.examples.length > 0);
  }

  private getTopicDoormatStyleLabel(
    style: Exclude<TopicDoormatDescriptionStyle, 'unclear'>,
  ): string {
    if (style === 'noun-topic') return 'noun/topic summaries';
    if (style === 'benefit-summary') return 'benefit summaries';
    if (style === 'status-or-date-change') {
      return 'status or date-change descriptions';
    }
    if (style === 'how-to') return 'How to descriptions';
    if (style === 'question-or-sentence') {
      return 'question or sentence descriptions';
    }
    return 'action-oriented descriptions';
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
          });
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
    return (
      Array.isArray(root['doormats']) ||
      Array.isArray(root['section_issues'])
    );
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
