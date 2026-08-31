import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { firstValueFrom } from 'rxjs';
import { PromptKey, UploadData } from '../../data/data.model';
import { ChatMessage } from '../openrouter.service';
import { SkillManagerService } from '../skill-manager.service';
import {
  TopicDoormatIaCheckResult,
  TopicDoormatIaCheckService,
} from './topic-doormat-ia-check.service';
import {
  TopicDoormatModelClientResult,
  TopicDoormatModelClientService,
} from './topic-doormat-model-client.service';
import { TopicDoormatUrlComparisonService } from './topic-doormat-url-comparison.service';
import {
  MostRequestedLinkSummary,
  TopicDoormatDescriptionStyle,
  TopicDoormatDestinationLinkRelationshipBasis,
  TopicDoormatDestinationLinkRelationship,
  TopicDoormatEvidenceMetricPart,
  TopicDoormatIssueCategory,
  TopicDoormatIssueRow,
  TopicDoormatIssueTaxonomy,
  TopicDoormatLinkTextStyle,
  TopicDoormatPageLanguage,
  TopicDoormatReportLanguage,
  TopicDoormatSectionStyleAnalysis,
  TopicDoormatSummary,
} from './topic-doormat.types';

export interface TopicDoormatIssueAnalysisInput {
  doormatSummaries: TopicDoormatSummary[];
  pageLanguage: TopicDoormatPageLanguage;
  reportLanguage?: TopicDoormatReportLanguage;
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
  type: 'intro' | 'h2' | 'doormat';
  text: string;
  source?: 'topic-doormat' | 'subway-doormat';
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

interface TopicDoormatIncompleteIssueFieldTarget {
  targetType: 'doormat' | 'section';
  issueId: string;
  issue: Record<string, unknown>;
  missingEvidence: boolean;
  missingRecommendation: boolean;
  doormatIndex?: number;
  sectionIndex?: number;
  summary?: TopicDoormatSummary;
}

interface TopicDoormatIssueDecisionRepairTarget {
  issueId: 'description-repeats-link-text';
  summary: TopicDoormatSummary;
  currentDecision: string;
  currentReason: string;
  localGuardrailReason: string;
  overlapTokens: string[];
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
  private readonly topicDoormatDestinationContextElementLimit = 20;
  private readonly topicDoormatDestinationContextTextLimit = 300;
  private readonly topicDoormatTrailingPunctuationPattern = /[.:;?!,]$/;
  private readonly topicDoormatDestinationStopWords = new Set([
    'and',
    'or',
    'the',
    'a',
    'an',
    'for',
    'to',
    'of',
    'in',
    'on',
    'with',
    'your',
    'you',
    'individuals',
    'families',
    'benefit',
    'benefits',
    'credit',
    'credits',
    'tax',
    'le',
    'la',
    'les',
    'un',
    'une',
    'des',
    'du',
    'de',
    'd',
    'pour',
    'aux',
    'avec',
    'dans',
    'sur',
    'vous',
    'votre',
    'vos',
    'particuliers',
    'familles',
    'prestation',
    'prestations',
    'impot',
    'impots',
  ]);
  private readonly topicDoormatConceptPatterns: Record<string, RegExp> = {
    eligibility:
      /\b(?:eligibility|eligible|qualify|qualifies|admissibilite|admissible|admissibles|admissibilites)\b/,
    application:
      /\b(?:apply|application|register|registration|claim|request|demande|demandes|inscription|inscrire|presenter une demande|faire une demande)\b/,
    payment:
      /\b(?:payment|payments|pay|paid|quarterly|monthly|versement|versements|paiement|paiements|trimestriel|trimestriels|mensuel|mensuels)\b/,
    amount:
      /\b(?:amount|amounts|rate|rates|maximum|minimum|montant|montants|taux)\b/,
    deadline:
      /\b(?:deadline|due date|before|after|date limite|echeance|avant|apres)\b/,
    document:
      /\b(?:document|documents|form|forms|proof|attestation|formulaire|formulaires|preuve|pieces justificatives)\b/,
    audience:
      /\b(?:individual|individuals|family|families|child|children|person|people|resident|residents|particulier|particuliers|famille|familles|enfant|enfants|personne|personnes|menage|menages)\b/,
    program:
      /\b(?:program|programs|benefit|benefits|credit|credits|rebate|allowance|relief|programme|programmes|prestation|prestations|remise|allocation|aide)\b/,
    age: /\b(?:age|aged|under|over|younger|older|less than|more than|moins de|plus de|ans|years old)\b/,
    disability:
      /\b(?:disability|disabled|impairment|severe|grave|handicap|handicape|handicapes|deficience|invalidite)\b/,
    income:
      /\b(?:income|low income|middle income|revenu|faible revenu|revenu faible|revenu moyen)\b/,
    'family-status':
      /\b(?:care|caring|support|supporting|s occupe|occupent|subvenir|subviennent|charge|soins)\b/,
  };
  private readonly topicDoormatLifecycleStatusElementPatterns = [
    /^status (?:closed|archived|inactive|expired|ended)\b/,
    /^(?:closed|archived|inactive|expired|ended)$/,
    /\b(?:closed|archived|inactive|expired|ended|stopped|replaced|formerly|no longer available|not available|new|updated|temporary|provisional|final payment|no further payments)\b/,
    /\b(?:ferme|fermee|archive|expire|termine|terminee|fin|remplace|remplacee|anciennement|plus disponible|n est plus disponible|ne sont plus disponibles|temporaire|provisoire|dernier versement|plus aucun versement|autres versements|nouveau|nouvelle|mis a jour|mise a jour)\b/,
  ];
  private readonly topicDoormatLifecycleStatusTextPatterns = [
    /\b(?:status )?(?:closed|archived|inactive|expired|ended|stopped|replaced|formerly|no longer available|not available|new|updated|temporary|provisional|final payment|no further payments)\b/,
    /\b(?:ferme|fermee|archive|expire|termine|terminee|fin|remplace|remplacee|anciennement|plus disponible|n est plus disponible|ne sont plus disponibles|temporaire|provisoire|dernier versement|plus aucun versement|autres versements|nouveau|nouvelle|mis a jour|mise a jour)\b/,
  ];
  private readonly locallyOwnedTopicDoormatIssueIds = new Set([
    'broken-link',
    'description-contains-link',
    'description-missing-needed-information',
    'description-too-long',
    'description-trailing-punctuation',
    'description-uses-first-or-second-person',
    'duplicate-link-in-most-requested',
    'link-name-too-long',
    'link-name-too-different-from-destination-title',
    'link-name-trailing-punctuation',
    'missing-needed-doormat',
    'mixed-description-style-in-section',
    'mixed-link-name-styles-in-section',
    'multiple-links',
    'repeated-description-opening',
    'split-heading-link',
    'too-many-doormats-in-section',
    'unnecessary-doormat',
    'inconsistent-link-name-style',
  ]);
  private readonly topicDoormatRequiredIssueDecisionIds = [
    'missing-description',
    'description-uses-icons-or-images',
    'description-special-formatting',
    'description-capitalization',
    'description-list-separators',
    'description-uses-and-before-final-item',
    'misdirected-link',
    'link-name-lacks-clarity',
    'link-name-not-unique',
    'description-lacks-clarity',
    'description-incorrect-style',
    'description-repeats-link-text',
    'duplicate-or-near-duplicate-description',
    'inconsistent-description-style',
    'enhancement-label-not-needed',
    'enhancement-label-wrong-type',
  ] as const;
  private readonly topicDoormatIssueDecisionValues = new Set([
    'applies',
    'does_not_apply',
    'not_applicable',
  ]);
  private readonly topicDoormatDescriptionStyleOrder: Exclude<
    TopicDoormatDescriptionStyle,
    'mixed-or-unclear'
  >[] = [
    'keyword-list',
    'task-list',
    'benefit-eligibility',
    'dropdown-enhancement',
  ];
  private readonly topicDoormatLinkTextStyleOrder: Exclude<
    TopicDoormatLinkTextStyle,
    'mixed-or-unclear'
  >[] = ['topic', 'product-or-service', 'action', 'audience-group'];
  private topicDoormatIssueTaxonomyLoad?: Promise<void>;
  private topicDoormatModelIssueContract = '';
  private topicDoormatIssueIdToLabel = new Map<string, string>();
  private topicDoormatIssueAliasToId = new Map<string, string>();
  private topicDoormatLengthLimits = new Map<string, number>();

  async analyze(
    input: TopicDoormatIssueAnalysisInput,
  ): Promise<TopicDoormatIssueAnalysisResult> {
    const analysisStart = performance.now();
    await this.loadTopicDoormatIssueTaxonomy();
    const composed = await this.skillManager.composePrompt({
      basePrompt: '',
      queryText: 'analyze topic doormats issue report for each doormat',
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
      'Classify the description using the CRA doormat description style options, not grammatical construction alone.',
    ].join('\n');
    const reportLanguageInstruction =
      this.buildTopicDoormatReportLanguageInstruction(input.reportLanguage);
    const systemPrompt = [
      composed.prompt,
      this.topicDoormatModelIssueContract,
      localOwnershipInstruction,
      reportLanguageInstruction,
      this.buildTopicDoormatJsonOnlyInstruction(),
    ]
      .filter(Boolean)
      .join('\n\n');
    const messages = this.buildTopicDoormatIssueMessages(
      systemPrompt,
      input.doormatSummaries,
    );
    const modelRotation = this.modelClient.buildModelRotation(
      input.selectedModel,
    );
    this.debugTopicDoormatIssues('request prepared', {
      selectedModel: input.selectedModel,
      modelRotation,
      pageLanguage: input.pageLanguage,
      doormatSummaryCount: input.doormatSummaries.length,
      sectionCounts: this.buildTopicDoormatSectionCounts(
        input.doormatSummaries,
      ),
      overLimitSummaryIndexes: this.getTopicDoormatOverLimitSectionIndexes(
        input.doormatSummaries,
      ),
      doormatSummaries: input.doormatSummaries.map((summary) => ({
        index: summary.index,
        linkText: summary.linkText,
        href: summary.href,
        labels: summary.labels,
        destinationUrl: summary.destinationUrl,
        destinationHttpStatus: summary.destinationHttpStatus,
        destinationFetchError: summary.destinationFetchError,
        destinationPageTitle: summary.destinationPageTitle,
        destinationPageHeading: summary.destinationPageHeading,
        destinationPageType: summary.destinationPageType,
        destinationContextStatus: summary.destinationContextStatus,
        destinationIntroParagraphs: summary.destinationIntroParagraphs,
        destinationSectionHeadings: summary.destinationSectionHeadings,
        destinationNavigationItems: summary.destinationNavigationItems,
        destinationLabelEvidence: summary.destinationLabelEvidence,
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
      this.requestTopicDoormatIssueJsonBySection({
        systemPrompt,
        selectedModel: input.selectedModel,
        doormatSummaries: input.doormatSummaries,
      }),
      this.iaCheck
        .analyze(input.doormatSummaries, input.uploadData)
        .catch((err: unknown) => {
          this.debugTopicDoormatIssues('local IA checks failed', {
            error: err instanceof Error ? err.message : String(err),
          });
          return {
            rows: [],
            metaByDoormatIndex: new Map<number, string>(),
          } satisfies TopicDoormatIaCheckResult;
        }),
    ]);
    const { text, model } = issueJson;
    const decisionGuardedText = text
      ? await this.repairTopicDoormatIssueDecisions(text, model, input)
      : text;
    const resolvedText = decisionGuardedText
      ? await this.repairTopicDoormatIncompleteIssueFields(
          decisionGuardedText,
          model,
          input,
        )
      : decisionGuardedText;
    const localIaRows = localIaResult.rows;
    const rows = resolvedText
      ? this.parseTopicDoormatIssueRows(
          resolvedText,
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
      text: resolvedText,
      usedLocalFallback: !resolvedText,
      model,
      modelRotation: issueJson.modelRotation,
      elapsedMs: Math.round(performance.now() - analysisStart),
    };
  }

  private async requestTopicDoormatIssueJsonBySection(params: {
    systemPrompt: string;
    selectedModel?: string;
    doormatSummaries: TopicDoormatSummary[];
  }): Promise<TopicDoormatModelClientResult> {
    const sectionBatches = this.buildTopicDoormatSectionBatches(
      params.doormatSummaries,
    );
    const modelRotation = this.modelClient.buildModelRotation(
      params.selectedModel,
    );

    if (sectionBatches.length <= 1) {
      return this.modelClient.requestIssueJson({
        messages: this.buildTopicDoormatIssueMessages(
          params.systemPrompt,
          params.doormatSummaries,
        ),
        requestedModel: params.selectedModel,
        doormatSummaries: params.doormatSummaries,
        isParseableResponseText: (value) =>
          this.isParseableTopicDoormatIssueResponseText(value),
        debug: (event, details) => this.debugTopicDoormatIssues(event, details),
      });
    }

    const sectionResults: TopicDoormatModelClientResult[] = [];
    for (const batch of sectionBatches) {
      this.debugTopicDoormatIssues('section batch request prepared', {
        sectionIndex: batch.sectionIndex,
        sectionTitle: batch.sectionTitle,
        doormatCount: batch.doormatSummaries.length,
        doormatIndexes: batch.doormatSummaries.map((summary) => summary.index),
      });
      const result = await this.modelClient.requestIssueJson({
        messages: this.buildTopicDoormatIssueMessages(
          params.systemPrompt,
          batch.doormatSummaries,
        ),
        requestedModel: params.selectedModel,
        doormatSummaries: batch.doormatSummaries,
        isParseableResponseText: (value) =>
          this.isParseableTopicDoormatIssueResponseText(value),
        debug: (event, details) =>
          this.debugTopicDoormatIssues(event, {
            ...details,
            sectionIndex: batch.sectionIndex,
            sectionTitle: batch.sectionTitle,
          }),
      });
      sectionResults.push(result);
    }

    const successfulResults = sectionResults.filter((result) => !!result.text);
    this.debugTopicDoormatIssues('section batch requests resolved', {
      sectionCount: sectionBatches.length,
      successfulSectionCount: successfulResults.length,
      failedSectionIndexes: sectionBatches
        .filter((_, index) => !sectionResults[index]?.text)
        .map((batch) => batch.sectionIndex),
      modelsUsed: Array.from(
        new Set(
          successfulResults.map((result) => result.model).filter(Boolean),
        ),
      ),
    });

    return {
      text: this.mergeTopicDoormatIssueJsonResponses(
        successfulResults.map((result) => result.text),
      ),
      model: this.summarizeTopicDoormatBatchModel(successfulResults),
      modelRotation,
    };
  }

  private buildTopicDoormatIssueMessages(
    systemPrompt: string,
    doormatSummaries: TopicDoormatSummary[],
  ): ChatMessage[] {
    return [
      {
        role: 'system',
        content: systemPrompt,
      },
      {
        role: 'user',
        content: JSON.stringify({
          doormats: doormatSummaries.map((summary) => ({
            index: summary.index,
            linkText: summary.linkText,
            labels: summary.labels ?? [],
            analysisLinkText: this.removeTopicDoormatLabels(
              summary.linkText,
              summary.labels,
            ),
            href: summary.href,
            description: summary.description,
            analysisDescription: this.removeTopicDoormatLabels(
              summary.description,
              summary.labels,
            ),
            destinationUrl: summary.destinationUrl,
            destinationHttpStatus: summary.destinationHttpStatus,
            destinationPageTitle: summary.destinationPageTitle,
            destinationPageHeading: summary.destinationPageHeading,
            destinationContext: {
              status: summary.destinationContextStatus ?? 'insufficient',
              httpStatus: summary.destinationHttpStatus,
              pageType: summary.destinationPageType ?? 'content',
              pageTitle: summary.destinationPageTitle ?? '',
              h1: summary.destinationPageHeading ?? '',
              labelEvidence: summary.labels?.length
                ? (summary.destinationLabelEvidence ?? [])
                : [],
              elements:
                this.buildTopicDoormatDestinationContextElements(summary),
            },
            sectionIndex: summary.sectionIndex,
            sectionTitle: summary.sectionTitle,
            sectionItemIndex: summary.sectionItemIndex,
          })),
          response_format: this.buildTopicDoormatIssueResponseFormat(),
        }),
      },
    ];
  }

  private buildTopicDoormatJsonOnlyInstruction(): string {
    return [
      '### Required JSON response',
      'Return one valid JSON object and nothing else.',
      'The first non-whitespace character must be { and the last non-whitespace character must be }.',
      'Do not return Markdown, code fences, comments, explanations, or a schema description.',
      'Use double-quoted JSON strings and no trailing commas.',
      'Root keys required: section_issues and doormats.',
      'Return section_issues: [] when there are no section-level issues.',
      'Return exactly one doormats[] object for each input doormat index, even when that doormat has no issues.',
      'Return issues: [] on a doormat when no model-owned issues apply to that doormat.',
    ].join('\n');
  }

  private buildTopicDoormatIssueResponseFormat(): Record<string, unknown> {
    return {
      output: 'json_object_only',
      no_markdown: true,
      no_code_fences: true,
      root_required_keys: ['section_issues', 'doormats'],
      section_issues: 'array of section-level issue objects, or []',
      doormats:
        'array with exactly one object for each input doormat index, in input order',
      required_doormat_fields: [
        'doormat_index',
        'link_text',
        'href',
        'description',
        'detected_link_text_style',
        'detected_description_style',
        'destination_link_relationship',
        'destination_link_relationship_basis',
        'destination_link_relationship_reason',
        'destination_content_assessment',
        'issue_decisions',
        'issues',
      ],
      empty_issue_arrays:
        'Use [] for section_issues and doormat issues when no model-owned issues apply.',
    };
  }

  private buildTopicDoormatSectionBatches(
    doormatSummaries: TopicDoormatSummary[],
  ): {
    sectionIndex: number;
    sectionTitle: string;
    doormatSummaries: TopicDoormatSummary[];
  }[] {
    const bySection = new Map<number, TopicDoormatSummary[]>();
    doormatSummaries.forEach((summary) => {
      const sectionIndex = summary.sectionIndex || 1;
      const sectionSummaries = bySection.get(sectionIndex) ?? [];
      sectionSummaries.push(summary);
      bySection.set(sectionIndex, sectionSummaries);
    });

    return Array.from(bySection.entries())
      .sort(([a], [b]) => a - b)
      .map(([sectionIndex, summaries]) => ({
        sectionIndex,
        sectionTitle: summaries[0]?.sectionTitle ?? '',
        doormatSummaries: summaries.sort((a, b) => a.index - b.index),
      }));
  }

  private mergeTopicDoormatIssueJsonResponses(texts: string[]): string {
    const sectionIssues: unknown[] = [];
    const doormats: unknown[] = [];

    texts.forEach((text) => {
      const parsed = this.looseJsonParse(this.stripCodeFences(text));
      if (!parsed || typeof parsed !== 'object') return;
      const root = parsed as Record<string, unknown>;
      if (Array.isArray(root['section_issues'])) {
        sectionIssues.push(...root['section_issues']);
      }
      if (Array.isArray(root['doormats'])) {
        doormats.push(...root['doormats']);
      }
    });

    return doormats.length || sectionIssues.length
      ? JSON.stringify({ section_issues: sectionIssues, doormats })
      : '';
  }

  private async repairTopicDoormatIssueDecisions(
    text: string,
    model: string,
    input: TopicDoormatIssueAnalysisInput,
  ): Promise<string> {
    const parsed = this.looseJsonParse(this.stripCodeFences(text));
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
      return text;
    }
    const root = parsed as Record<string, unknown>;
    const targets = this.getTopicDoormatIssueDecisionRepairTargets(
      root,
      input.doormatSummaries,
    );
    if (!targets.length) return text;

    const repairModel =
      model && model !== 'multiple models' ? model : input.selectedModel || '';
    const repairText = await this.modelClient.requestIssueDecisionRepair({
      model: repairModel,
      messages: this.buildTopicDoormatIssueDecisionRepairMessages(
        targets,
        input.reportLanguage,
      ),
      doormatSummaries: targets.map((target) => target.summary),
      debug: (event, details) => this.debugTopicDoormatIssues(event, details),
    });
    const repairedCount = this.mergeTopicDoormatIssueDecisionRepairs(
      root,
      targets,
      repairText,
    );
    this.debugTopicDoormatIssues('model issue decision repair resolved', {
      requestedDecisionCount: targets.length,
      repairedDecisionCount: repairedCount,
    });
    return repairedCount ? JSON.stringify(root) : text;
  }

  private getTopicDoormatIssueDecisionRepairTargets(
    root: Record<string, unknown>,
    doormatSummaries: TopicDoormatSummary[],
  ): TopicDoormatIssueDecisionRepairTarget[] {
    const doormats = Array.isArray(root['doormats']) ? root['doormats'] : [];
    const doormatsByIndex = new Map<number, Record<string, unknown>>();
    doormats.forEach((rawDoormat) => {
      if (!rawDoormat || typeof rawDoormat !== 'object') return;
      const doormat = rawDoormat as Record<string, unknown>;
      const index = this.toNumber(doormat['doormat_index']);
      if (index) doormatsByIndex.set(index, doormat);
    });

    return doormatSummaries.flatMap((summary) => {
      const doormat = doormatsByIndex.get(summary.index);
      if (!doormat) return [];
      const issues = Array.isArray(doormat['issues']) ? doormat['issues'] : [];
      if (
        issues.some(
          (issue) =>
            !!issue &&
            typeof issue === 'object' &&
            this.getTopicDoormatIssueId(issue as Record<string, unknown>) ===
              'description-repeats-link-text',
        )
      ) {
        return [];
      }
      const decisions = Array.isArray(doormat['issue_decisions'])
        ? doormat['issue_decisions']
        : [];
      const decision = decisions.find(
        (rawDecision) =>
          !!rawDecision &&
          typeof rawDecision === 'object' &&
          this.cleanString(
            (rawDecision as Record<string, unknown>)['issue_id'],
          ) === 'description-repeats-link-text',
      ) as Record<string, unknown> | undefined;
      if (this.cleanString(decision?.['decision']) === 'applies') return [];
      const candidate =
        this.getTopicDoormatDescriptionRepeatCandidate(summary);
      if (!candidate) return [];
      return [
        {
          issueId: 'description-repeats-link-text',
          summary,
          currentDecision:
            this.cleanString(decision?.['decision']) || 'missing',
          currentReason: this.cleanString(decision?.['reason']),
          localGuardrailReason: candidate.reason,
          overlapTokens: candidate.overlapTokens,
        } satisfies TopicDoormatIssueDecisionRepairTarget,
      ];
    });
  }

  private buildTopicDoormatIssueDecisionRepairMessages(
    targets: TopicDoormatIssueDecisionRepairTarget[],
    reportLanguage?: TopicDoormatReportLanguage,
  ): ChatMessage[] {
    return [
      {
        role: 'system',
        content: [
          'You repair only Topic doormat issue decisions.',
          'Return JSON only.',
          this.buildTopicDoormatReportLanguageInstruction(reportLanguage),
          'Do not re-analyze unrelated doormats or unrelated issues.',
          'For each supplied candidate, decide only whether description-repeats-link-text applies.',
          'The model owns the final decision. Confirm applies only when the description repeats the same words or meaning already present in the link text and adds little distinct decision-making information.',
          'If decision is applies, include a complete issue object for description-repeats-link-text with description, evidence, recommendation, and severity.',
        ].join('\n'),
      },
      {
        role: 'user',
        content: JSON.stringify({
          requiredShape:
            '{ "repairs": [{ "doormat_index": number, "issue_id": "description-repeats-link-text", "decision": "applies|does_not_apply|not_applicable", "reason": string, "issue": { "issue_category": "description-repeats-link-text", "description": string, "evidence": string, "recommendation": string, "severity": "High|Medium|Low" } }] }',
          candidates: targets.map((target) => ({
            doormat_index: target.summary.index,
            link_text: target.summary.linkText,
            description: target.summary.description,
            current_decision: target.currentDecision,
            current_reason: target.currentReason,
            local_guardrail_reason: target.localGuardrailReason,
            overlap_tokens: target.overlapTokens,
          })),
        }),
      },
    ];
  }

  private mergeTopicDoormatIssueDecisionRepairs(
    root: Record<string, unknown>,
    targets: TopicDoormatIssueDecisionRepairTarget[],
    repairText: string,
  ): number {
    if (!repairText) return 0;
    const parsed = this.looseJsonParse(this.stripCodeFences(repairText));
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
      return 0;
    }
    const repairs = Array.isArray((parsed as Record<string, unknown>)['repairs'])
      ? ((parsed as Record<string, unknown>)['repairs'] as unknown[])
      : [];
    if (!repairs.length) return 0;
    const targetIndexes = new Set(targets.map((target) => target.summary.index));
    const doormats = Array.isArray(root['doormats']) ? root['doormats'] : [];
    const doormatsByIndex = new Map<number, Record<string, unknown>>();
    doormats.forEach((rawDoormat) => {
      if (!rawDoormat || typeof rawDoormat !== 'object') return;
      const doormat = rawDoormat as Record<string, unknown>;
      const index = this.toNumber(doormat['doormat_index']);
      if (index) doormatsByIndex.set(index, doormat);
    });

    let repairedCount = 0;
    repairs.forEach((rawRepair) => {
      if (!rawRepair || typeof rawRepair !== 'object') return;
      const repair = rawRepair as Record<string, unknown>;
      const doormatIndex = this.toNumber(repair['doormat_index']);
      if (!doormatIndex || !targetIndexes.has(doormatIndex)) return;
      if (this.cleanString(repair['issue_id']) !== 'description-repeats-link-text') {
        return;
      }
      const decision = this.cleanString(repair['decision']);
      if (!this.topicDoormatIssueDecisionValues.has(decision)) return;
      const doormat = doormatsByIndex.get(doormatIndex);
      if (!doormat) return;
      this.upsertTopicDoormatIssueDecision(doormat, {
        issue_id: 'description-repeats-link-text',
        decision,
        reason: this.cleanString(repair['reason']),
      });
      repairedCount += 1;
      if (decision !== 'applies') return;
      const issue =
        repair['issue'] && typeof repair['issue'] === 'object'
          ? (repair['issue'] as Record<string, unknown>)
          : null;
      if (!issue) return;
      issue['issue_category'] = 'description-repeats-link-text';
      if (!this.isValidTopicDoormatModelIssue(issue, false)) return;
      const issues = Array.isArray(doormat['issues'])
        ? (doormat['issues'] as unknown[])
        : [];
      if (
        issues.some(
          (rawIssue) =>
            !!rawIssue &&
            typeof rawIssue === 'object' &&
            this.getTopicDoormatIssueId(rawIssue as Record<string, unknown>) ===
              'description-repeats-link-text',
        )
      ) {
        return;
      }
      issues.push(issue);
      doormat['issues'] = issues;
    });
    return repairedCount;
  }

  private upsertTopicDoormatIssueDecision(
    doormat: Record<string, unknown>,
    decision: Record<string, unknown>,
  ): void {
    const decisions = Array.isArray(doormat['issue_decisions'])
      ? (doormat['issue_decisions'] as unknown[])
      : [];
    const existingIndex = decisions.findIndex(
      (rawDecision) =>
        !!rawDecision &&
        typeof rawDecision === 'object' &&
        this.cleanString(
          (rawDecision as Record<string, unknown>)['issue_id'],
        ) === this.cleanString(decision['issue_id']),
    );
    if (existingIndex >= 0) {
      decisions[existingIndex] = decision;
    } else {
      decisions.push(decision);
    }
    doormat['issue_decisions'] = decisions;
  }

  private getTopicDoormatDescriptionRepeatCandidate(
    summary: TopicDoormatSummary,
  ): { reason: string; overlapTokens: string[] } | null {
    const linkTokens = this.getTopicDoormatRepeatCheckTokens(summary.linkText);
    const descriptionTokens = this.getTopicDoormatRepeatCheckTokens(
      summary.description,
    );
    if (linkTokens.length < 2 || descriptionTokens.length < 2) return null;
    const linkTokenSet = new Set(linkTokens);
    const overlapTokens = descriptionTokens.filter((token) =>
      linkTokenSet.has(token),
    );
    const distinctDescriptionTokens = descriptionTokens.filter(
      (token) => !linkTokenSet.has(token),
    );
    const descriptionOverlapRatio =
      overlapTokens.length / descriptionTokens.length;
    const linkOverlapRatio = overlapTokens.length / linkTokens.length;
    if (
      overlapTokens.length >= 2 &&
      descriptionOverlapRatio >= 0.67 &&
      linkOverlapRatio >= 0.4 &&
      distinctDescriptionTokens.length <= 1
    ) {
      return {
        reason:
          'The description has high token overlap with the link text and adds little distinct information.',
        overlapTokens,
      };
    }
    return null;
  }

  private getTopicDoormatRepeatCheckTokens(value: string): string[] {
    const repeatStopWords = new Set([
      ...this.topicDoormatDestinationStopWords,
      'find',
      'learn',
      'information',
      'info',
      'about',
      'how',
      'what',
      'when',
      'where',
      'why',
      'savoir',
      'renseignement',
      'renseignements',
      'information',
      'informations',
      'comment',
      'quand',
      'quoi',
      'ou',
      'pourquoi',
    ]);
    return Array.from(
      new Set(
        this.normalizeTopicDoormatDestinationComparisonText(value)
          .split(/\s+/)
          .filter(
            (token) =>
              token.length > 2 &&
              !repeatStopWords.has(token),
          ),
      ),
    );
  }

  private async repairTopicDoormatIncompleteIssueFields(
    text: string,
    model: string,
    input: TopicDoormatIssueAnalysisInput,
  ): Promise<string> {
    const parsed = this.looseJsonParse(this.stripCodeFences(text));
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
      return text;
    }
    const root = parsed as Record<string, unknown>;
    const targets = this.getIncompleteTopicDoormatModelIssueFieldTargets(
      root,
      input.doormatSummaries,
    );
    if (!targets.length) return text;

    const repairModel =
      model && model !== 'multiple models' ? model : input.selectedModel || '';
    const repairText = await this.modelClient.requestIssueFieldRepair({
      model: repairModel,
      messages: this.buildTopicDoormatIssueFieldRepairMessages(
        targets,
        input.reportLanguage,
      ),
      doormatSummaries: input.doormatSummaries,
      debug: (event, details) => this.debugTopicDoormatIssues(event, details),
    });
    const repairedCount = this.mergeTopicDoormatIssueFieldRepairs(
      targets,
      repairText,
    );
    this.debugTopicDoormatIssues('model issue field repair resolved', {
      requestedIssueCount: targets.length,
      repairedIssueCount: repairedCount,
    });
    return JSON.stringify(root);
  }

  private getIncompleteTopicDoormatModelIssueFieldTargets(
    root: Record<string, unknown>,
    doormatSummaries: TopicDoormatSummary[],
  ): TopicDoormatIncompleteIssueFieldTarget[] {
    const targets: TopicDoormatIncompleteIssueFieldTarget[] = [];
    const summariesByIndex = new Map(
      doormatSummaries.map((summary) => [summary.index, summary]),
    );
    const doormats = Array.isArray(root['doormats']) ? root['doormats'] : [];
    doormats.forEach((rawDoormat) => {
      if (!rawDoormat || typeof rawDoormat !== 'object') return;
      const doormat = rawDoormat as Record<string, unknown>;
      const doormatIndex = this.toNumber(doormat['doormat_index']);
      const issues = Array.isArray(doormat['issues']) ? doormat['issues'] : [];
      const summary = doormatIndex
        ? summariesByIndex.get(doormatIndex)
        : undefined;
      issues.forEach((rawIssue) => {
        if (!rawIssue || typeof rawIssue !== 'object') return;
        const issue = rawIssue as Record<string, unknown>;
        const issueId = this.getTopicDoormatIssueId(issue);
        if (!this.isRepairableTopicDoormatModelIssue(issueId, issue)) return;
        const target = this.buildIncompleteTopicDoormatIssueFieldTarget({
          targetType: 'doormat',
          issueId,
          issue,
          summary,
          doormatIndex: doormatIndex ?? undefined,
          sectionIndex: summary?.sectionIndex,
        });
        if (target) targets.push(target);
      });
    });

    const sectionIssues = Array.isArray(root['section_issues'])
      ? root['section_issues']
      : [];
    sectionIssues.forEach((rawIssue) => {
      if (!rawIssue || typeof rawIssue !== 'object') return;
      const issue = rawIssue as Record<string, unknown>;
      const issueId = this.getTopicDoormatIssueId(issue);
      if (!this.isRepairableTopicDoormatModelIssue(issueId, issue)) return;
      const details =
        issue['evidence_details'] &&
        typeof issue['evidence_details'] === 'object'
          ? (issue['evidence_details'] as Record<string, unknown>)
          : null;
      const sectionIndex =
        this.toNumber(issue['section_index']) ??
        this.toNumber(details?.['section_index']);
      const target = this.buildIncompleteTopicDoormatIssueFieldTarget({
        targetType: 'section',
        issueId,
        issue,
        sectionIndex: sectionIndex ?? undefined,
      });
      if (target) targets.push(target);
    });

    return targets;
  }

  private isRepairableTopicDoormatModelIssue(
    issueId: string,
    issue: Record<string, unknown>,
  ): boolean {
    return (
      this.topicDoormatIssueIdToLabel.has(issueId) &&
      !this.locallyOwnedTopicDoormatIssueIds.has(issueId) &&
      !!this.normalizeTopicDoormatModelSeverity(issue['severity'])
    );
  }

  private buildIncompleteTopicDoormatIssueFieldTarget(params: {
    targetType: 'doormat' | 'section';
    issueId: string;
    issue: Record<string, unknown>;
    summary?: TopicDoormatSummary;
    doormatIndex?: number;
    sectionIndex?: number;
  }): TopicDoormatIncompleteIssueFieldTarget | null {
    const missingEvidence = !this.hasUsableTopicDoormatIssueText(
      this.buildTopicDoormatEvidence(params.issue, params.summary),
    );
    const missingRecommendation = !this.hasUsableTopicDoormatIssueText(
      this.cleanString(params.issue['recommendation']),
    );
    if (!missingEvidence && !missingRecommendation) return null;
    return {
      ...params,
      missingEvidence,
      missingRecommendation,
    };
  }

  private buildTopicDoormatIssueFieldRepairMessages(
    targets: TopicDoormatIncompleteIssueFieldTarget[],
    reportLanguage?: TopicDoormatReportLanguage,
  ): ChatMessage[] {
    return [
      {
        role: 'system',
        content: [
          'You repair incomplete Topic doormat issue fields.',
          'Return JSON only.',
          this.buildTopicDoormatReportLanguageInstruction(reportLanguage),
          'Fill only the missing evidence and/or recommendation fields for each supplied issue.',
          'Do not add, remove, reclassify, reinterpret, or reorder issues.',
          'Do not use empty strings, dash-only placeholders, "n/a", or generic filler.',
          'Evidence must be concise and grounded only in the supplied issue and doormat/section context.',
        ].join('\n'),
      },
      {
        role: 'user',
        content: JSON.stringify({
          requiredShape:
            '{ "repairs": [{ "target_type": "doormat" | "section", "doormat_index": number, "section_index": number, "issue_category": string, "evidence": string, "recommendation": string }] }',
          incompleteIssues: targets.map((target) => ({
            target_type: target.targetType,
            doormat_index: target.doormatIndex,
            section_index: target.sectionIndex,
            issue_category: target.issueId,
            missing_evidence: target.missingEvidence,
            missing_recommendation: target.missingRecommendation,
            current_issue: {
              issue_category: target.issue['issue_category'],
              description: target.issue['description'],
              evidence: target.issue['evidence'],
              evidence_details: target.issue['evidence_details'],
              recommendation: target.issue['recommendation'],
              severity: target.issue['severity'],
            },
            doormat_context: target.summary
              ? {
                  index: target.summary.index,
                  linkText: target.summary.linkText,
                  href: target.summary.href,
                  description: target.summary.description,
                  sectionIndex: target.summary.sectionIndex,
                  sectionTitle: target.summary.sectionTitle,
                  sectionItemIndex: target.summary.sectionItemIndex,
                  destinationPageTitle: target.summary.destinationPageTitle,
                  destinationPageHeading: target.summary.destinationPageHeading,
                  destinationContext: {
                    status:
                      target.summary.destinationContextStatus ?? 'insufficient',
                    pageType: target.summary.destinationPageType ?? 'content',
                    elements: this.buildTopicDoormatDestinationContextElements(
                      target.summary,
                    ),
                  },
                }
              : null,
          })),
        }),
      },
    ];
  }

  private buildTopicDoormatReportLanguageInstruction(
    reportLanguage?: TopicDoormatReportLanguage,
  ): string {
    const language = reportLanguage === 'fr' ? 'French' : 'English';
    return [
      `Write all issue evidence and recommendation fields in ${language}, matching the AIDA interface language.`,
      'Do not switch the issue evidence or recommendation language to match the page content language.',
      'Short quoted source text, page titles, program names, URLs, and proper nouns may remain in the original page language when needed as evidence.',
    ].join(' ');
  }

  private mergeTopicDoormatIssueFieldRepairs(
    targets: TopicDoormatIncompleteIssueFieldTarget[],
    repairText: string,
  ): number {
    if (!repairText) return 0;
    const parsed = this.looseJsonParse(this.stripCodeFences(repairText));
    if (!parsed || typeof parsed !== 'object') return 0;
    const repairs = Array.isArray(parsed)
      ? parsed
      : Array.isArray((parsed as Record<string, unknown>)['repairs'])
        ? ((parsed as Record<string, unknown>)['repairs'] as unknown[])
        : [];
    const targetsByKey = new Map(
      targets.map((target) => [
        this.getTopicDoormatIssueRepairKey(target),
        target,
      ]),
    );
    let repairedCount = 0;

    repairs.forEach((rawRepair) => {
      if (!rawRepair || typeof rawRepair !== 'object') return;
      const repair = rawRepair as Record<string, unknown>;
      const targetType = this.cleanString(repair['target_type']);
      const issueId = this.getTopicDoormatIssueIdFromText(
        this.cleanString(repair['issue_category']),
      );
      const key = this.getTopicDoormatIssueRepairKey({
        targetType: targetType === 'section' ? 'section' : 'doormat',
        issueId,
        doormatIndex: this.toNumber(repair['doormat_index']) ?? undefined,
        sectionIndex: this.toNumber(repair['section_index']) ?? undefined,
      });
      const target = targetsByKey.get(key);
      if (!target) return;

      let repaired = false;
      const evidence = this.cleanString(repair['evidence']);
      if (
        target.missingEvidence &&
        this.hasUsableTopicDoormatIssueText(evidence)
      ) {
        target.issue['evidence'] = evidence;
        if (
          !this.hasUsableTopicDoormatIssueText(
            this.cleanString(target.issue['description']),
          )
        ) {
          target.issue['description'] = evidence;
        }
        repaired = true;
      }

      const recommendation = this.cleanString(repair['recommendation']);
      if (
        target.missingRecommendation &&
        this.hasUsableTopicDoormatIssueText(recommendation)
      ) {
        target.issue['recommendation'] = recommendation;
        repaired = true;
      }

      if (repaired) repairedCount += 1;
    });

    return repairedCount;
  }

  private getTopicDoormatIssueRepairKey(
    target: Pick<
      TopicDoormatIncompleteIssueFieldTarget,
      'targetType' | 'issueId' | 'doormatIndex' | 'sectionIndex'
    >,
  ): string {
    return [
      target.targetType,
      target.targetType === 'section'
        ? (target.sectionIndex ?? 0)
        : (target.doormatIndex ?? 0),
      target.issueId,
    ].join('|');
  }

  private summarizeTopicDoormatBatchModel(
    results: TopicDoormatModelClientResult[],
  ): string {
    const models = Array.from(
      new Set(results.map((result) => result.model).filter(Boolean)),
    );
    if (!models.length) return '';
    if (models.length === 1) return models[0];
    return 'multiple models';
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
      sectionIssueRows.map((row) => `${row.sectionIndex ?? 0}|${row.issueId}`),
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
          if (!this.topicDoormatIssueIdToLabel.has(issueId) || !severity) {
            return null;
          }
          if (
            this.isTopicDoormatStatusRepetitionIssue(issueId, issue, summary)
          ) {
            return null;
          }
          if (
            !this.isReportableTopicDoormatIssue(issue, summary, pageLanguage)
          ) {
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
          const evidence = this.getTopicDoormatDisplayedModelEvidence(
            issue,
            summary,
          );
          const recommendation =
            this.getTopicDoormatDisplayedModelRecommendation(issue);
          return {
            include:
              typeof issue['include'] === 'boolean'
                ? issue['include']
                : this.getDefaultTopicDoormatIssueInclude(issueId, severity),
            rowType: 'doormat',
            severity,
            doormat: label,
            doormatLabel: summary?.linkText || linkText || href || 'Doormat',
            issueId,
            issue: this.getTopicDoormatIssueLabel(issueId),
            evidence,
            recommendation,
            provenance: {
              issue: ['model'],
              evidence: ['model'],
              recommendation: ['model'],
            },
            doormatIndex: index ?? undefined,
            sectionIndex: summary?.sectionIndex,
            sectionTitle: summary?.sectionTitle,
            sectionItemIndex: summary?.sectionItemIndex,
          } satisfies TopicDoormatIssueRow;
        })
        .filter((row): row is TopicDoormatIssueRow => row !== null);
    });

    const reportableSectionIssueRows = sectionIssueRows.filter(
      (row) => !this.locallyOwnedTopicDoormatIssueIds.has(row.issueId),
    );
    const effectiveDescriptionStylesByDoormatIndex =
      this.applyTopicDoormatDescriptionStyleOverrides(
        doormatSummaries,
        descriptionStylesByDoormatIndex,
      );
    const descriptionStyleAnalyses = this.analyzeTopicDoormatDescriptionStyles(
      doormatSummaries,
      effectiveDescriptionStylesByDoormatIndex,
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
        .filter(
          (index): index is number => typeof index === 'number' && index > 0,
        ),
    );
    const localDescriptionTrailingPunctuationSectionIndexes =
      this.getLocalDescriptionTrailingPunctuationSectionIndexes(
        doormatSummaries,
      );
    const inconsistentLinkNameStyleCountsBySection = rows.reduce<
      Map<number, number>
    >((counts, row) => {
      if (row.issueId !== 'inconsistent-link-name-style' || !row.sectionIndex) {
        return counts;
      }
      counts.set(row.sectionIndex, (counts.get(row.sectionIndex) ?? 0) + 1);
      return counts;
    }, new Map<number, number>());
    const suppressedModelIssueRows = rows.filter((row) => {
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
            ? effectiveDescriptionStylesByDoormatIndex.get(row.doormatIndex)
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
    });
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
      effectiveDescriptionStylesByDoormatIndex,
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
        .filter(
          (index): index is number => typeof index === 'number' && index > 0,
        ),
    );
    const missingNoIssueRows = doormatSummaries
      .filter((summary) => !representedIndexes.has(summary.index))
      .map((summary) => this.buildTopicDoormatNoIssueRow(summary));

    const resolvedRows = this.removeConflictingTopicDoormatNoIssueRows(
      [
        ...modelIssueRows,
        ...deterministicRows,
        ...reportableSectionIssueRows,
        ...localIaRows,
        ...missingNoIssueRows,
      ].sort((a, b) => {
        const aIndex = this.getTopicDoormatRowSortIndex(a, doormatSummaries);
        const bIndex = this.getTopicDoormatRowSortIndex(b, doormatSummaries);
        return aIndex - bIndex;
      }),
    );
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
          effectiveDescriptionStylesByDoormatIndex.get(summary.index) ??
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
            destinationLinkAssessmentsByDoormatIndex.get(summary.index) ?? null,
        }),
      ),
      destinationContentAssessmentsByDoormatIndex: doormatSummaries.map(
        (summary) => ({
          doormatIndex: summary.index,
          contextStatus: summary.destinationContextStatus ?? 'insufficient',
          httpStatus: summary.destinationHttpStatus,
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
        return this.buildTopicDoormatSectionIssueRow(
          issue,
          undefined,
          doormatSummaries,
        );
      })
      .filter((row): row is TopicDoormatIssueRow => row !== null);
  }

  private parseTopicDoormatDescriptionStyles(
    rawDoormats: unknown[],
  ): Map<number, TopicDoormatDescriptionStyle> {
    const stylesByDoormatIndex = new Map<
      number,
      TopicDoormatDescriptionStyle
    >();
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
    const assessments = new Map<
      number,
      TopicDoormatDestinationLinkAssessment
    >();
    rawDoormats.forEach((rawDoormat) => {
      if (!rawDoormat || typeof rawDoormat !== 'object') return;
      const doormat = rawDoormat as Record<string, unknown>;
      const index = this.toNumber(doormat['doormat_index']);
      const relationship =
        this.normalizeTopicDoormatDestinationLinkRelationship(
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
      if (
        !index ||
        !this.isValidTopicDoormatDestinationContentAssessment(rawAssessment)
      ) {
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
    const evidence = this.getTopicDoormatDisplayedModelEvidence(issue);
    const recommendation =
      this.getTopicDoormatDisplayedModelRecommendation(issue);

    return {
      include:
        typeof issue['include'] === 'boolean'
          ? issue['include']
          : this.getDefaultTopicDoormatIssueInclude(issueId, severity),
      rowType: 'section',
      severity,
      doormat: this.buildTopicDoormatSectionLabel(
        sectionIndex,
        doormatSummaries,
      ),
      doormatLabel: 'All doormats in section',
      issueId,
      issue: this.getTopicDoormatIssueLabel(issueId),
      evidence,
      recommendation,
      provenance: {
        issue: ['model'],
        evidence: ['model'],
        recommendation: ['model'],
      },
      sectionIndex,
      sectionTitle:
        doormatSummaries.find(
          (summary) => summary.sectionIndex === sectionIndex,
        )?.sectionTitle || '',
    };
  }

  private removeConflictingTopicDoormatNoIssueRows(
    rows: TopicDoormatIssueRow[],
  ): TopicDoormatIssueRow[] {
    const indexesWithIssues = new Set(
      rows
        .filter((row) => !this.isNoIssueRow(row))
        .map((row) => row.doormatIndex)
        .filter(
          (index): index is number => typeof index === 'number' && index > 0,
        ),
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
        .flatMap((row) => [
          row.doormatIndex,
          ...(row.affectedDoormatIndexes ?? []),
        ])
        .filter(
          (index): index is number => typeof index === 'number' && index > 0,
        ),
    );
    const noIssueRows = doormatSummaries
      .filter((summary) => !representedIndexes.has(summary.index))
      .map((summary) => this.buildTopicDoormatNoIssueRow(summary));

    return this.removeConflictingTopicDoormatNoIssueRows(
      [...deterministicRows, ...localIaRows, ...noIssueRows].sort((a, b) => {
        const aIndex = this.getTopicDoormatRowSortIndex(a, doormatSummaries);
        const bIndex = this.getTopicDoormatRowSortIndex(b, doormatSummaries);
        return aIndex - bIndex;
      }),
    );
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
    > = new Map<number, TopicDoormatDescriptionStyle>(),
    destinationContentAssessmentsByDoormatIndex: Map<
      number,
      TopicDoormatDestinationContentAssessment
    > = new Map<number, TopicDoormatDestinationContentAssessment>(),
    linkStylesByDoormatIndex: Map<number, TopicDoormatLinkTextStyle> = new Map<
      number,
      TopicDoormatLinkTextStyle
    >(),
    destinationLinkAssessmentsByDoormatIndex: Map<
      number,
      TopicDoormatDestinationLinkAssessment
    > = new Map<number, TopicDoormatDestinationLinkAssessment>(),
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
              issue: this.getTopicDoormatIssueLabel(
                'outdated-topic-page-template',
              ),
              evidence: this.getTopicDoormatDeterministicText(
                'outdatedTemplate.evidence',
              ),
              recommendation: this.getTopicDoormatDeterministicText(
                'outdatedTemplate.recommendation',
              ),
              sectionIndex: 1,
              sectionTitle:
                doormatSummaries.find((summary) => summary.sectionIndex === 1)
                  ?.sectionTitle || '',
            } satisfies TopicDoormatIssueRow,
          ]
        : [];

    const overLimitRows = this.buildTopicDoormatSectionCounts(
      doormatSummaries,
    ).flatMap((section) => {
      if (
        section.count <= 9 ||
        existingIssueKeys.has(
          `${section.sectionIndex}|too-many-doormats-in-section`,
        )
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
          evidence: this.getTopicDoormatDeterministicText(
            'tooManyDoormats.evidence',
            { count: section.count },
          ),
          recommendation: this.getTopicDoormatDeterministicText(
            'tooManyDoormats.recommendation',
          ),
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
      ...this.buildLocalTopicDoormatDescriptionPersonRows(doormatSummaries),
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
    const fallbackLimit = this.getTopicDoormatLengthLimit(
      'link-name-too-long',
      pageLanguage,
    );
    if (fallbackLimit == null) return [];
    const overLimitSummaries = doormatSummaries.filter((summary) => {
      const limit =
        this.getTopicDoormatLinkNameLengthLimit(summary, pageLanguage) ??
        fallbackLimit;
      return this.getTopicDoormatLinkNameLengthCount(summary) > limit;
    });
    return this.buildLocalTopicDoormatLengthSectionRows(
      overLimitSummaries,
      'link-name-too-long',
      (summary) =>
        this.getTopicDoormatLinkNameLengthSeverity(summary, pageLanguage),
      (summary) =>
        this.buildTopicDoormatLengthMetric(
          summary,
          'link-name-too-long',
          pageLanguage,
        ),
      (summary) =>
        this.buildTopicDoormatLengthMetricParts(
          summary,
          'link-name-too-long',
          pageLanguage,
        ),
      this.getTopicDoormatLinkNameLengthRecommendation(),
    );
  }

  private getTopicDoormatLinkNameLengthSeverity(
    summary: TopicDoormatSummary,
    pageLanguage: TopicDoormatPageLanguage = 'en',
  ): string {
    const count = this.getTopicDoormatLinkNameLengthCount(summary);
    const limit = this.getTopicDoormatLinkNameLengthLimit(
      summary,
      pageLanguage,
    );
    if (limit == null) return 'Low';
    if (this.hasTopicDoormatBilingualLinkLength(summary)) {
      if (count <= limit + 15) return 'Low';
      if (count <= limit + 30) return 'Medium';
      return 'High';
    }
    if (pageLanguage === 'fr') {
      if (count <= limit + 15) return 'Low';
      if (count <= limit + 30) return 'Medium';
      return 'High';
    }

    if (count <= limit + 15) return 'Low';
    if (count <= limit + 30) return 'Medium';
    return 'High';
  }

  private buildLocalTopicDoormatDescriptionLengthRows(
    doormatSummaries: TopicDoormatSummary[],
    pageLanguage: TopicDoormatPageLanguage,
  ): TopicDoormatIssueRow[] {
    const fallbackLimit = this.getTopicDoormatLengthLimit(
      'description-too-long',
      pageLanguage,
    );
    if (fallbackLimit == null) return [];
    const overLimitSummaries = doormatSummaries.filter((summary) => {
      const limit =
        this.getTopicDoormatDescriptionLengthLimit(summary, pageLanguage) ??
        fallbackLimit;
      return this.getTopicDoormatDescriptionLengthCount(summary) > limit;
    });
    return this.buildLocalTopicDoormatLengthSectionRows(
      overLimitSummaries,
      'description-too-long',
      (summary) =>
        this.getTopicDoormatDescriptionLengthSeverity(summary, pageLanguage),
      (summary) =>
        this.buildTopicDoormatLengthMetric(
          summary,
          'description-too-long',
          pageLanguage,
        ),
      (summary) =>
        this.buildTopicDoormatLengthMetricParts(
          summary,
          'description-too-long',
          pageLanguage,
        ),
      this.getTopicDoormatDescriptionLengthRecommendation(),
    );
  }

  private buildLocalTopicDoormatLengthSectionRows(
    overLimitSummaries: TopicDoormatSummary[],
    issueId: 'link-name-too-long' | 'description-too-long',
    getSeverity: (summary: TopicDoormatSummary) => string,
    getMetric: (summary: TopicDoormatSummary) => string,
    getMetricParts: (
      summary: TopicDoormatSummary,
    ) => TopicDoormatEvidenceMetricPart[],
    recommendation: string,
  ): TopicDoormatIssueRow[] {
    const summariesBySectionAndIssue = new Map<
      string,
      { sectionIndex: number; issue: string; summaries: TopicDoormatSummary[] }
    >();
    overLimitSummaries.forEach((summary) => {
      const sectionIndex = summary.sectionIndex || 0;
      const key = `${sectionIndex}|${issueId}`;
      const group = summariesBySectionAndIssue.get(key) ?? {
        sectionIndex,
        issue: this.getTopicDoormatLengthIssueLabel(issueId),
        summaries: [],
      };
      const summaries = group.summaries;
      summaries.push(summary);
      summariesBySectionAndIssue.set(key, group);
    });

    return Array.from(summariesBySectionAndIssue.values()).map(
      ({ sectionIndex, issue, summaries }) => {
        const evidenceItems = summaries
          .slice()
          .sort(
            (a, b) =>
              (a.sectionItemIndex || a.index) - (b.sectionItemIndex || b.index),
          )
          .map((summary) => {
            return {
              label: `Doormat ${summary.sectionItemIndex || summary.index}`,
              metric: getMetric(summary),
              metricParts: getMetricParts(summary),
              severity: getSeverity(summary),
            };
          });
        const affectedDoormatIndexes = summaries
          .map((summary) => summary.index)
          .filter((index): index is number => Number.isFinite(index));
        const severity = this.getHighestTopicDoormatSeverity(
          evidenceItems.map((item) => item.severity),
        );

        return {
          include: this.getDefaultTopicDoormatIssueInclude(issueId, severity),
          rowType: 'section',
          severity,
          doormat: this.buildTopicDoormatSectionLabel(
            sectionIndex,
            overLimitSummaries,
          ),
          doormatLabel: 'Affected doormats in section',
          issueId,
          issue,
          evidence: '',
          evidenceItems,
          affectedDoormatIndexes,
          recommendation,
          sectionIndex: sectionIndex || undefined,
          sectionTitle: summaries[0]?.sectionTitle || undefined,
        } satisfies TopicDoormatIssueRow;
      },
    );
  }

  private getHighestTopicDoormatSeverity(severities: string[]): string {
    const rank: Record<string, number> = {
      Low: 1,
      Medium: 2,
      High: 3,
    };
    return severities.reduce(
      (highest, severity) =>
        (rank[severity] ?? 0) > (rank[highest] ?? 0) ? severity : highest,
      'Low',
    );
  }

  private getTopicDoormatDescriptionLengthSeverity(
    summary: TopicDoormatSummary,
    pageLanguage: TopicDoormatPageLanguage = 'en',
  ): string {
    const count = this.getTopicDoormatDescriptionLengthCount(summary);
    const limit = this.getTopicDoormatDescriptionLengthLimit(
      summary,
      pageLanguage,
    );
    if (limit == null) return 'Low';
    if (this.hasTopicDoormatBilingualDescriptionLength(summary)) {
      if (count <= limit + 10) return 'Low';
      if (count <= limit + 20) return 'Medium';
      return 'High';
    }
    if (pageLanguage === 'fr') {
      if (count <= limit + 10) return 'Low';
      if (count <= limit + 20) return 'Medium';
      return 'High';
    }

    if (count <= limit + 10) return 'Low';
    if (count <= limit + 20) return 'Medium';
    return 'High';
  }

  private getTopicDoormatLinkNameLengthCount(
    summary: TopicDoormatSummary,
  ): number {
    const oppositeCount = summary.oppositeLanguageLinkTextCharacterCount;
    return typeof oppositeCount === 'number'
      ? Math.max(summary.linkTextCharacterCount, oppositeCount)
      : summary.linkTextCharacterCount;
  }

  private getTopicDoormatDescriptionLengthCount(
    summary: TopicDoormatSummary,
  ): number {
    const oppositeCount = summary.oppositeLanguageDescriptionCharacterCount;
    return typeof oppositeCount === 'number'
      ? Math.max(summary.descriptionCharacterCount, oppositeCount)
      : summary.descriptionCharacterCount;
  }

  private getTopicDoormatLinkNameLengthLimit(
    summary: TopicDoormatSummary,
    pageLanguage: TopicDoormatPageLanguage,
  ): number | null {
    return this.getTopicDoormatBilingualLengthLimit(
      summary,
      'link-name-too-long',
      pageLanguage,
    );
  }

  private getTopicDoormatDescriptionLengthLimit(
    summary: TopicDoormatSummary,
    pageLanguage: TopicDoormatPageLanguage,
  ): number | null {
    return this.getTopicDoormatBilingualLengthLimit(
      summary,
      'description-too-long',
      pageLanguage,
    );
  }

  private getTopicDoormatBilingualLengthLimit(
    summary: TopicDoormatSummary,
    issueId: 'link-name-too-long' | 'description-too-long',
    pageLanguage: TopicDoormatPageLanguage,
  ): number | null {
    const currentLimit = this.getTopicDoormatLengthLimit(issueId, pageLanguage);
    const oppositeLanguage = summary.oppositeLanguage;
    if (!oppositeLanguage) return currentLimit;
    const oppositeLimit = this.getTopicDoormatLengthLimit(
      issueId,
      oppositeLanguage,
    );
    if (currentLimit == null) return oppositeLimit;
    if (oppositeLimit == null) return currentLimit;
    return Math.max(currentLimit, oppositeLimit);
  }

  private hasTopicDoormatBilingualLinkLength(
    summary: TopicDoormatSummary,
  ): boolean {
    return typeof summary.oppositeLanguageLinkTextCharacterCount === 'number';
  }

  private hasTopicDoormatBilingualDescriptionLength(
    summary: TopicDoormatSummary,
  ): boolean {
    return (
      typeof summary.oppositeLanguageDescriptionCharacterCount === 'number'
    );
  }

  private buildTopicDoormatLengthMetric(
    summary: TopicDoormatSummary,
    issueId: 'link-name-too-long' | 'description-too-long',
    pageLanguage: TopicDoormatPageLanguage,
  ): string {
    const metrics = this.getTopicDoormatLengthMetricData(
      summary,
      issueId,
      pageLanguage,
    );

    if (!metrics.oppositeMetric) {
      return metrics.currentMetric;
    }

    return `${metrics.currentLabel} ${metrics.currentMetric}; ${metrics.oppositeLabel} ${metrics.oppositeMetric}`;
  }

  private buildTopicDoormatLengthMetricParts(
    summary: TopicDoormatSummary,
    issueId: 'link-name-too-long' | 'description-too-long',
    pageLanguage: TopicDoormatPageLanguage,
  ): TopicDoormatEvidenceMetricPart[] {
    const metrics = this.getTopicDoormatLengthMetricData(
      summary,
      issueId,
      pageLanguage,
    );

    if (typeof metrics.oppositeCount !== 'number' || !metrics.oppositeMetric) {
      return [
        {
          metric: metrics.currentMetric,
          severity:
            issueId === 'link-name-too-long'
              ? this.getTopicDoormatLinkNameLengthSeverity(
                  summary,
                  pageLanguage,
                )
              : this.getTopicDoormatDescriptionLengthSeverity(
                  summary,
                  pageLanguage,
                ),
        },
      ];
    }

    return [
      {
        metric: `${metrics.currentLabel} ${metrics.currentMetric}`,
        severity: this.getTopicDoormatBilingualLengthSeverity(
          metrics.currentCount,
          issueId,
          metrics.currentLimit,
        ),
      },
      {
        metric: `${metrics.oppositeLabel} ${metrics.oppositeMetric}`,
        severity: this.getTopicDoormatBilingualLengthSeverity(
          metrics.oppositeCount,
          issueId,
          metrics.oppositeLimit ?? metrics.currentLimit,
        ),
      },
    ];
  }

  private getTopicDoormatLengthMetricData(
    summary: TopicDoormatSummary,
    issueId: 'link-name-too-long' | 'description-too-long',
    pageLanguage: TopicDoormatPageLanguage,
  ): {
    currentLabel: string;
    oppositeLabel: string;
    currentCount: number;
    oppositeCount?: number;
    currentMetric: string;
    oppositeMetric?: string;
    currentLimit: number | null;
    oppositeLimit?: number | null;
  } {
    const isLinkLengthIssue = issueId === 'link-name-too-long';
    const currentCount = isLinkLengthIssue
      ? summary.linkTextCharacterCount
      : summary.descriptionCharacterCount;
    const oppositeCount = isLinkLengthIssue
      ? summary.oppositeLanguageLinkTextCharacterCount
      : summary.oppositeLanguageDescriptionCharacterCount;
    const currentLimit = this.getTopicDoormatLengthLimit(
      issueId,
      pageLanguage,
    );
    const oppositeLanguage =
      summary.oppositeLanguage ?? (pageLanguage === 'fr' ? 'en' : 'fr');
    const oppositeLimit = this.getTopicDoormatLengthLimit(
      issueId,
      oppositeLanguage,
    );
    const formatMetric = (count: number, limit: number | null): string =>
      isLinkLengthIssue && limit != null ? `${count}/${limit}` : `${count}`;

    return {
      currentLabel: pageLanguage.toUpperCase(),
      oppositeLabel: oppositeLanguage.toUpperCase(),
      currentCount,
      oppositeCount,
      currentMetric: formatMetric(currentCount, currentLimit),
      oppositeMetric:
        typeof oppositeCount === 'number'
          ? formatMetric(oppositeCount, oppositeLimit)
          : undefined,
      currentLimit,
      oppositeLimit,
    };
  }

  private getTopicDoormatBilingualLengthSeverity(
    count: number,
    issueId: 'link-name-too-long' | 'description-too-long',
    limit: number | null,
  ): string {
    if (limit == null) return 'OK';
    if (issueId === 'link-name-too-long') {
      if (count <= limit) return 'OK';
      if (count <= limit + 15) return 'Low';
      if (count <= limit + 30) return 'Medium';
      return 'High';
    }

    if (count <= limit) return 'OK';
    if (count <= limit + 10) return 'Low';
    if (count <= limit + 20) return 'Medium';
    return 'High';
  }

  private getTopicDoormatLengthIssueLabel(
    issueId: 'link-name-too-long' | 'description-too-long',
  ): string {
    return this.getTopicDoormatIssueLabel(issueId);
  }

  private getDefaultTopicDoormatIssueInclude(
    issueId: string,
    severity: string,
  ): boolean {
    if (issueId !== 'link-name-too-long') return true;
    return severity.trim().toLowerCase() === 'high';
  }

  private buildLocalTopicDoormatDescriptionPersonRows(
    doormatSummaries: TopicDoormatSummary[],
  ): TopicDoormatIssueRow[] {
    return doormatSummaries.flatMap((summary) => {
      const matchedPronoun = this.getFirstOrSecondPersonPronoun(
        summary.description,
      );
      if (!matchedPronoun) return [];

      return [
        {
          include: true,
          rowType: 'doormat',
          severity: 'Medium',
          doormat: this.buildTopicDoormatLabel(summary),
          doormatLabel: summary.linkText || summary.href || 'Doormat',
          issueId: 'description-uses-first-or-second-person',
          issue: this.getTopicDoormatIssueLabel(
            'description-uses-first-or-second-person',
          ),
          evidence: this.getTopicDoormatDeterministicText(
            'descriptionPerson.evidence',
            { pronoun: matchedPronoun },
          ),
          recommendation: this.getTopicDoormatDeterministicText(
            'descriptionPerson.recommendation',
          ),
          doormatIndex: summary.index || undefined,
          sectionIndex: summary.sectionIndex || undefined,
          sectionTitle: summary.sectionTitle || undefined,
          sectionItemIndex: summary.sectionItemIndex || undefined,
        } satisfies TopicDoormatIssueRow,
      ];
    });
  }

  private getFirstOrSecondPersonPronoun(description: string): string {
    const text = this.cleanVisibleText(description);
    const firstToken =
      text.match(
        /^\s*["'([]?\s*([\p{L}\p{M}\p{N}_]+(?:['’][\p{L}\p{M}\p{N}_]+)?)/u,
      )?.[1] ?? '';
    if (firstToken === 'US') return '';

    const normalizedToken = firstToken
      .normalize('NFKC')
      .replace(/[’]/g, "'")
      .toLocaleLowerCase();
    const normalizedBase = normalizedToken.split("'")[0];
    const openingPronouns = new Set([
      'i',
      'me',
      'my',
      'mine',
      'myself',
      'we',
      'us',
      'our',
      'ours',
      'ourselves',
      'you',
      'your',
      'yours',
      'yourself',
      'yourselves',
      'je',
      'j',
      'm',
      'moi',
      'mon',
      'ma',
      'mes',
      'nous',
      'notre',
      'nos',
      'tu',
      'te',
      't',
      'toi',
      'ton',
      'ta',
      'tes',
      'vous',
      'votre',
      'vos',
    ]);
    return openingPronouns.has(normalizedBase) ? firstToken : '';
    /*
    const pronounPattern =
      /(?:^|[^\p{L}\p{M}\p{N}_])((?:i['’](?:m|ve|ll|d)|i|me|my|mine|myself|we['’](?:re|ve|ll|d)|we|us|our|ours|ourselves|you['’](?:re|ve|ll|d)|you|your|yours|yourself|yourselves|j['’]|je|m['’]|me|moi|mon|ma|mes|nous|notre|nos|t['’]|tu|te|toi|ton|ta|tes|vous|votre|vos))(?=$|[^\p{L}\p{M}\p{N}_])/giu;
    let match: RegExpExecArray | null;
    while ((match = pronounPattern.exec(text))) {
      const pronoun = match?.[1] ?? '';
      if (pronoun === 'US') continue;
      return pronoun;
    }
    return '';
    */
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
      this.getLocalDescriptionTrailingPunctuationSectionIndexes(
        doormatSummaries,
      );
    const descriptionPunctuationBySection =
      this.groupTopicDoormatsWithDescriptionTrailingPunctuation(
        doormatSummaries,
      );
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
          evidence:
            this.buildTopicDoormatSectionTrailingPunctuationEvidence(affected),
          recommendation: this.getTopicDoormatDeterministicText(
            'descriptionTrailingPunctuation.sectionRecommendation',
          ),
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
            'linkName',
            summary.linkText,
          ),
          recommendation: this.getTopicDoormatDeterministicText(
            'linkTrailingPunctuation.recommendation',
          ),
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
            'description',
            summary.description,
          ),
          recommendation: this.getTopicDoormatDeterministicText(
            'descriptionTrailingPunctuation.recommendation',
          ),
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
    labelKey: 'linkName' | 'description',
    value: string,
  ): string {
    const trimmed = value.trim();
    const punctuation = trimmed.slice(-1);
    return this.getTopicDoormatDeterministicText(
      'trailingPunctuation.evidence',
      {
        label: this.getTopicDoormatDeterministicText(`labels.${labelKey}`),
        punctuation,
      },
    );
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
    const descriptionLabel = this.getTopicDoormatDeterministicText(
      count === 1 ? 'labels.descriptionLower' : 'labels.descriptionsLower',
    );
    const doormatLabel = this.getTopicDoormatDeterministicText(
      count === 1 ? 'labels.doormatLower' : 'labels.doormatsLower',
    );
    return this.getTopicDoormatDeterministicText(
      'descriptionTrailingPunctuation.sectionEvidence',
      { count, descriptionLabel, doormatLabel, indexes },
    );
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
          recommendation: this.getTopicDoormatDeterministicText(
            'duplicateMostRequested.recommendation',
          ),
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
    return this.getTopicDoormatDeterministicText(
      'duplicateMostRequested.evidence',
    );
  }

 private getTopicDoormatLengthLimit(
    issueId: 'link-name-too-long' | 'description-too-long',
    pageLanguage: TopicDoormatPageLanguage,
  ): number | null {
    return this.topicDoormatLengthLimits.get(`${pageLanguage}|${issueId}`) ?? null;
  }

  private getTopicDoormatDeterministicText(
    key: string,
    params?: Record<string, unknown>,
  ): string {
    return this.translate.instant(
      `page.tools.guidance.topicDoormats.${key}`,
      params,
    );
  }

  private getTopicDoormatLinkNameLengthRecommendation(): string {
    return this.translate.instant(
      'page.tools.guidance.topicDoormats.length.link.recommendation',
    );
  }

  private getTopicDoormatDescriptionLengthRecommendation(): string {
    return this.translate.instant(
      'page.tools.guidance.topicDoormats.length.description.recommendation',
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
          recommendation: this.getTopicDoormatDeterministicText(
            'splitHeadingLink.recommendation',
          ),
        } satisfies TopicDoormatIssueRow);
      }

      const brokenLinkEvidence =
        this.getTopicDoormatBrokenLinkEvidence(summary);
      if (brokenLinkEvidence) {
        rows.push({
          ...baseRow,
          issueId: 'broken-link',
          issue: this.getTopicDoormatIssueLabel('broken-link'),
          evidence: brokenLinkEvidence,
          recommendation: this.getTopicDoormatDeterministicText(
            'brokenLink.recommendation',
          ),
        } satisfies TopicDoormatIssueRow);
      }

      if (summary.hasDescriptionLink) {
        rows.push({
          ...baseRow,
          severity: 'Medium',
          issueId: 'description-contains-link',
          issue: this.getTopicDoormatIssueLabel('description-contains-link'),
          evidence: this.buildTopicDoormatDescriptionLinkEvidence(summary),
          recommendation: this.getTopicDoormatDeterministicText(
            'descriptionContainsLink.recommendation',
          ),
        } satisfies TopicDoormatIssueRow);
      }

      if (
        this.getTopicDoormatRogueItemLinkCount(summary) > 1 &&
        !summary.hasSplitHeadingLink &&
        !summary.hasDescriptionLink
      ) {
        rows.push({
          ...baseRow,
          issueId: 'multiple-links',
          issue: this.getTopicDoormatIssueLabel('multiple-links'),
          evidence: this.buildTopicDoormatMultipleLinksEvidence(summary),
          recommendation: this.getTopicDoormatDeterministicText(
            'multipleLinks.recommendation',
          ),
        } satisfies TopicDoormatIssueRow);
      }

      return rows;
    });
  }

  private getTopicDoormatBrokenLinkEvidence(
    doormat: TopicDoormatSummary,
  ): string {
    const href = this.cleanString(doormat.href);
    if (!href) {
      return this.getTopicDoormatDeterministicText(
        'brokenLink.emptyHrefEvidence',
      );
    }

    const status = doormat.destinationHttpStatus;
    if (typeof status === 'number' && status >= 400) {
      return this.getTopicDoormatDeterministicText(
        'brokenLink.httpStatusEvidence',
        { status },
      );
    }

    if (doormat.destinationUrl || href.startsWith('#')) return '';

    const isAbsoluteUrl = /^[a-z][a-z0-9+.-]*:/i.test(href);
    if (isAbsoluteUrl) {
      try {
        const url = new URL(href);
        if (url.protocol === 'https:') return '';
      } catch {
        // Fall through to invalid href evidence.
      }
    }

    if (isAbsoluteUrl || /[\s<>"]/.test(href)) {
      return this.getTopicDoormatDeterministicText(
        'brokenLink.invalidHrefEvidence',
        { href },
      );
    }

    return '';
  }

  private buildTopicDoormatSplitHeadingLinkEvidence(
    doormat: TopicDoormatSummary,
  ): string {
    const linkLabel =
      doormat.headingLinkCount === 1
        ? this.getTopicDoormatDeterministicText('labels.oneLink')
        : this.getTopicDoormatDeterministicText('labels.linkCount', {
            count: doormat.headingLinkCount,
          });
    return this.getTopicDoormatDeterministicText('splitHeadingLink.evidence', {
      linkLabel,
      linkText: doormat.linkText,
    });
  }

  private buildTopicDoormatDescriptionLinkEvidence(
    doormat: TopicDoormatSummary,
  ): string {
    const linkLabel =
      doormat.descriptionLinkCount === 1
        ? this.getTopicDoormatDeterministicText('labels.oneLink')
        : this.getTopicDoormatDeterministicText('labels.linkCount', {
            count: doormat.descriptionLinkCount,
          });
    return this.getTopicDoormatDeterministicText(
      'descriptionContainsLink.evidence',
      { linkLabel },
    );
  }

  private buildTopicDoormatMultipleLinksEvidence(
    doormat: TopicDoormatSummary,
  ): string {
    const linkCount = this.getTopicDoormatRogueItemLinkCount(doormat);
    const additionalLinkCount = Math.max(linkCount - 1, 0);
    const additionalLabel =
      additionalLinkCount === 1
        ? this.getTopicDoormatDeterministicText('labels.oneAdditionalLink')
        : this.getTopicDoormatDeterministicText('labels.additionalLinkCount', {
            count: additionalLinkCount,
          });
    return this.getTopicDoormatDeterministicText('multipleLinks.evidence', {
      linkCount,
      additionalLabel,
    });
  }

  private getTopicDoormatRogueItemLinkCount(doormat: TopicDoormatSummary): number {
    return Math.max(
      doormat.itemLinkCount - (doormat.fieldflowLinkCount ?? 0),
      0,
    );
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

        const repeatedOpeningGroups = Array.from(
          summariesByOpening.values(),
        ).flatMap((group) => {
          if (group.summaries.length < 2) return [];
          const affectedIndexes = group.summaries
            .map((summary) => summary.sectionItemIndex || summary.index)
            .sort((a, b) => a - b);
          const repeatedRatio =
            group.summaries.length / sectionSummaries.length;
          if (repeatedRatio < 0.4) return [];
          const hasAdjacentRepeatedOpening = affectedIndexes.some(
            (index, position) =>
              position > 0 && index === affectedIndexes[position - 1] + 1,
          );
          return [
            {
              group,
              affectedIndexes,
              severity:
                hasAdjacentRepeatedOpening || repeatedRatio > 0.6
                  ? 'Medium'
                  : 'Low',
            },
          ];
        });
        if (!repeatedOpeningGroups.length) return [];

        const severity = repeatedOpeningGroups.some(
          (group) => group.severity === 'Medium',
        )
          ? 'Medium'
          : 'Low';
        const firstSummary = sectionSummaries[0];
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
            evidence: repeatedOpeningGroups
              .map(({ group, affectedIndexes }) =>
                this.getTopicDoormatDeterministicText(
                  'repeatedDescriptionOpening.evidence',
                  {
                    count: group.summaries.length,
                    total: sectionSummaries.length,
                    opening: group.label,
                    indexes: affectedIndexes.join(', '),
                  },
                ),
              )
              .join(' '),
            recommendation: this.getTopicDoormatDeterministicText(
              'repeatedDescriptionOpening.recommendation',
            ),
            sectionIndex,
            sectionTitle: firstSummary.sectionTitle,
          } satisfies TopicDoormatIssueRow,
        ];
      },
    );
  }

  private getTopicDoormatDescriptionOpening(
    description: string,
  ): { key: string; label: string } | null {
    const words =
      this.cleanVisibleText(description).match(
        /[\p{L}\p{M}\p{N}]+(?:['’-][\p{L}\p{M}\p{N}]+)*/gu,
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
    const navigationItems = summary.destinationNavigationItems ?? [];
    if (navigationItems.length) {
      return this.compactTopicDoormatDestinationContextElements(
        navigationItems
          .map((item) => ({
            text: this.cleanVisibleText(
              [item.linkText, item.description].filter(Boolean).join(': '),
            ),
            source: item.source,
          }))
          .filter((item) => item.text)
          .map((item, index) => ({
            id: `doormat-${index + 1}`,
            type: 'doormat' as const,
            text: item.text,
            source: item.source,
          })),
      );
    }

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
    return this.compactTopicDoormatDestinationContextElements([
      ...introElements,
      ...sectionElements,
    ]);
  }

  private compactTopicDoormatDestinationContextElements(
    elements: TopicDoormatDestinationContextElement[],
  ): TopicDoormatDestinationContextElement[] {
    return elements
      .slice(0, this.topicDoormatDestinationContextElementLimit)
      .map((element) => ({
        ...element,
        text: element.text.slice(0, this.topicDoormatDestinationContextTextLimit),
      }));
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
          style: stylesByDoormatIndex.get(summary.index) ?? 'mixed-or-unclear',
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
        const isSectionMix = secondStyleCount >= 2 || summaries.length <= 4;
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
              severity: 'Low',
              doormat: this.buildTopicDoormatSectionLabel(
                sectionIndex,
                doormatSummaries,
              ),
              doormatLabel: 'All doormats in section',
              issueId: 'mixed-link-name-styles-in-section',
              issue: this.getTopicDoormatIssueLabel(
                'mixed-link-name-styles-in-section',
              ),
              evidence: this.getTopicDoormatDeterministicText(
                'mixedLinkNameStyles.evidence',
                { groups: groups.join('; ') },
              ),
              recommendation: this.getTopicDoormatDeterministicText(
                'mixedLinkNameStyles.recommendation',
              ),
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
        return outliers.map(
          ({ summary, style }) =>
            ({
              include: true,
              rowType: 'doormat',
              severity: 'Low',
              doormat: this.buildTopicDoormatLabel(summary),
              doormatLabel: summary.linkText || summary.href || 'Doormat',
              issueId: 'inconsistent-link-name-style',
              issue: this.getTopicDoormatIssueLabel(
                'inconsistent-link-name-style',
              ),
              evidence: this.getTopicDoormatDeterministicText(
                'inconsistentLinkNameStyle.evidence',
                {
                  dominantStyle:
                    this.getTopicDoormatLinkStyleLabel(dominantStyle),
                  style: this.getTopicDoormatLinkStyleLabel(style),
                },
              ),
              recommendation: this.getTopicDoormatDeterministicText(
                'inconsistentLinkNameStyle.recommendation',
              ),
              doormatIndex: summary.index,
              sectionIndex: summary.sectionIndex,
              sectionTitle: summary.sectionTitle,
              sectionItemIndex: summary.sectionItemIndex,
            }) satisfies TopicDoormatIssueRow,
        );
      },
    );
  }

  private getTopicDoormatLinkStyleLabel(
    style: TopicDoormatLinkTextStyle,
  ): string {
    return this.getTopicDoormatDeterministicText(`linkStyles.${style}`);
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
          evidence: this.getTopicDoormatDeterministicText(
            'destinationMismatch.evidence',
            {
              linkText: summary.linkText,
              destinationEvidence,
              reason: assessment.reason,
            },
          ),
          recommendation: this.getTopicDoormatDeterministicText(
            'destinationMismatch.recommendation',
          ),
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

      const uniqueEvidenceParts = Array.from(
        new Set(
          missingElements.map((element) => {
            if (element.type === 'intro') {
              return this.getTopicDoormatDeterministicText(
                'contentGap.introMissing',
              );
            }
            if (element.type === 'doormat') {
              const text = this.formatTopicDoormatContentGapDoormatEvidence(
                element.text,
              );
              return this.getTopicDoormatDeterministicText(
                'contentGap.doormat',
                { text },
              );
            }
            const text =
              element.text.length > 140
                ? `${element.text.slice(0, 137).trimEnd()}...`
                : element.text;
            return this.getTopicDoormatDeterministicText('contentGap.h2', {
              text,
            });
          }),
        ),
      );
      const evidenceParts = uniqueEvidenceParts.slice(0, 3);
      if (uniqueEvidenceParts.length > evidenceParts.length) {
        evidenceParts.push(
          `and ${uniqueEvidenceParts.length - evidenceParts.length} more`,
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
          evidence: this.getTopicDoormatDeterministicText(
            'contentGap.evidence',
            { elements: evidenceParts.join('; ') },
          ),
          recommendation: this.getTopicDoormatDeterministicText(
            'contentGap.recommendation',
          ),
          doormatIndex: summary.index,
          sectionIndex: summary.sectionIndex,
          sectionTitle: summary.sectionTitle,
          sectionItemIndex: summary.sectionItemIndex,
        } satisfies TopicDoormatIssueRow,
      ];
    });
  }

  private formatTopicDoormatContentGapDoormatEvidence(text: string): string {
    const linkText = this.cleanString(text.split(':')[0] ?? text);
    const displayText = linkText || text;
    return displayText.length > 140
      ? `${displayText.slice(0, 137).trimEnd()}...`
      : displayText;
  }

  private getValidatedTopicDoormatMissingElements(
    summary: TopicDoormatSummary,
    assessment?: TopicDoormatDestinationContentAssessment,
  ): TopicDoormatDestinationContextElement[] {
    if (summary.destinationContextStatus !== 'available' || !assessment) {
      return [];
    }
    const elementsById = new Map(
      this.buildTopicDoormatDestinationContextElements(summary).map(
        (element) => [element.id, element],
      ),
    );
    const importantIds = new Set(
      assessment.importantElementIds.filter((id) => elementsById.has(id)),
    );
    const coveredIds = new Set(
      assessment.coveredElementIds.filter((id) => elementsById.has(id)),
    );
    const seen = new Set<string>();
    return assessment.missingImportantElementIds.flatMap((id) => {
      if (seen.has(id) || !importantIds.has(id) || coveredIds.has(id)) {
        return [];
      }
      const element = elementsById.get(id);
      if (!element) return [];
      seen.add(id);
      if (this.isTopicDoormatContentGapNoise(summary, element)) {
        return [];
      }
      return [element];
    });
  }

  private isTopicDoormatContentGapNoise(
    summary: TopicDoormatSummary,
    element: TopicDoormatDestinationContextElement,
  ): boolean {
    if (this.isTopicDoormatLifecycleStatusAlreadyCovered(summary, element)) {
      return true;
    }
    if (this.isTopicDoormatDestinationElementCovered(summary, element)) {
      return true;
    }
    if (
      element.type === 'intro' &&
      this.isTopicDoormatLifecycleStatusElement(element.text) &&
      !this.hasTopicDoormatDecisionCriticalText(element.text)
    ) {
      return true;
    }
    if (element.type === 'h2') {
      return (
        this.isTopicDoormatLifecycleStatusElement(element.text) ||
        !this.hasTopicDoormatDecisionCriticalText(element.text)
      );
    }
    if (element.type === 'doormat') {
      return !this.hasTopicDoormatDecisionCriticalText(element.text);
    }
    return false;
  }

  private buildLocalTopicDoormatStyleIssueRows(
    doormatSummaries: TopicDoormatSummary[],
    existingIssueKeys: Set<string>,
    descriptionStylesByDoormatIndex: Map<number, TopicDoormatDescriptionStyle>,
  ): TopicDoormatIssueRow[] {
    const analyses = this.analyzeTopicDoormatDescriptionStyles(
      doormatSummaries,
      descriptionStylesByDoormatIndex,
    );
    const rows: TopicDoormatIssueRow[] = [];

    analyses.forEach((analysis) => {
      if (analysis.fieldflowSummaries.length) {
        analysis.fieldflowSummaries.forEach((summary) => {
          rows.push({
            include: false,
            rowType: 'doormat',
            severity: 'OK',
            doormat: summary.linkText,
            doormatLabel: summary.linkText,
            issueId: 'valid-dropdown-enhancement',
            issue: this.getTopicDoormatIssueLabel('valid-dropdown-enhancement'),
            evidence: this.getTopicDoormatDeterministicText(
              'dropdownEnhancementNote.evidence',
            ),
            recommendation: this.getTopicDoormatDeterministicText(
              'dropdownEnhancementNote.recommendation',
            ),
            doormatIndex: summary.index,
            sectionIndex: summary.sectionIndex,
            sectionTitle: summary.sectionTitle,
            sectionItemIndex: summary.sectionItemIndex,
          });
        });
      }

      const key = `${analysis.sectionIndex}|mixed-description-style-in-section`;
      if (analysis.isMixed) {
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
          issueId: 'mixed-description-style-in-section',
          issue: this.getTopicDoormatIssueLabel(
            'mixed-description-style-in-section',
          ),
          evidence: this.buildTopicDoormatMixedStyleEvidence(analysis),
          recommendation: this.getTopicDoormatDeterministicText(
            'mixedDescriptionStyle.recommendation',
          ),
          sectionIndex: analysis.sectionIndex,
          sectionTitle: analysis.sectionTitle,
        });
        return;
      }

      if (
        !analysis.dominantStyle ||
        analysis.summaries.length < 2 ||
        (analysis.styleCounts.get(analysis.dominantStyle) ?? 0) !==
          analysis.summaries.length
      ) {
        return;
      }
      rows.push({
        include: false,
        rowType: 'section',
        severity: 'OK',
        doormat: this.buildTopicDoormatSectionLabel(
          analysis.sectionIndex,
          doormatSummaries,
        ),
        doormatLabel: 'All doormats in section',
        issueId: 'consistent-description-style-in-section',
        issue: this.getTopicDoormatIssueLabel(
          'consistent-description-style-in-section',
        ),
        evidence: this.getTopicDoormatDeterministicText(
          'consistentDescriptionStyle.evidence',
          {
            count: analysis.summaries.length,
            style: this.getTopicDoormatStyleLabel(analysis.dominantStyle),
          },
        ),
        recommendation: this.getTopicDoormatDeterministicText(
          'consistentDescriptionStyle.recommendation',
        ),
        sectionIndex: analysis.sectionIndex,
        sectionTitle: analysis.sectionTitle,
      });
    });

    return rows;
  }

  private applyTopicDoormatDescriptionStyleOverrides(
    doormatSummaries: TopicDoormatSummary[],
    descriptionStylesByDoormatIndex: Map<number, TopicDoormatDescriptionStyle>,
  ): Map<number, TopicDoormatDescriptionStyle> {
    const effectiveStyles = new Map(descriptionStylesByDoormatIndex);
    const rejectedDropdownIndexes: number[] = [];
    doormatSummaries.forEach((summary) => {
      if (effectiveStyles.get(summary.index) === 'dropdown-enhancement') {
        effectiveStyles.set(summary.index, 'mixed-or-unclear');
        rejectedDropdownIndexes.push(summary.index);
      }
    });
    if (rejectedDropdownIndexes.length) {
      this.debugTopicDoormatIssues('description style overrides applied', {
        reason: 'dropdown enhancement is noted from fieldflow, not used as text style',
        doormatIndexes: rejectedDropdownIndexes,
      });
    }
    return effectiveStyles;
  }

  private analyzeTopicDoormatDescriptionStyles(
    doormatSummaries: TopicDoormatSummary[],
    descriptionStylesByDoormatIndex: Map<number, TopicDoormatDescriptionStyle>,
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
        const examplesByStyle = new Map<
          TopicDoormatDescriptionStyle,
          number[]
        >();
        const fieldflowSummaries = summaries.filter(
          (summary) => summary.hasFieldflow,
        );

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
          fieldflowSummaries,
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

  private buildTopicDoormatMixedStyleEvidence(
    analysis: TopicDoormatSectionStyleAnalysis,
  ): string {
    const groups = this.buildTopicDoormatMixedStyleEvidenceGroups(analysis);
    if (!groups.length) {
      return this.getTopicDoormatDeterministicText(
        'mixedDescriptionStyle.evidence.default',
      );
    }

    if (groups.length === 2) {
      const [first, second] = groups;
      return this.getTopicDoormatDeterministicText(
        'mixedDescriptionStyle.evidence.twoGroups',
        {
          firstStyle: first.label,
          secondStyle: second.label,
          firstExampleLabel: first.exampleLabel,
          firstExamples: first.examples.join(', '),
          secondExampleLabel: second.exampleLabel,
          secondExamples: second.examples.join(', '),
        },
      );
    }

    const styleParts = groups.map(
      (group) => `${group.exampleLabel} examples: ${group.examples.join(', ')}`,
    );
    return this.getTopicDoormatDeterministicText(
      'mixedDescriptionStyle.evidence.multipleGroups',
      { styleParts: styleParts.join('. ') },
    );
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
    return this.getTopicDoormatDeterministicText(`descriptionStyles.${style}`);
  }

  private getTopicDoormatStyleEvidenceLabel(
    style: Exclude<TopicDoormatDescriptionStyle, 'mixed-or-unclear'>,
  ): string {
    return this.getTopicDoormatDeterministicText(
      `descriptionStyleEvidenceLabels.${style}`,
    );
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
    return Array.from(counts.values()).sort(
      (a, b) => a.sectionIndex - b.sectionIndex,
    );
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
      issue: this.getTopicDoormatIssueLabel('no-issues'),
      evidence: this.getTopicDoormatDeterministicText('noIssues.evidence'),
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
          this.loadTopicDoormatLanguageThresholds(taxonomy);
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

  private loadTopicDoormatLanguageThresholds(
    taxonomy: TopicDoormatIssueTaxonomy,
  ): void {
    this.topicDoormatLengthLimits.clear();
    const thresholds =
      taxonomy.language_thresholds &&
      typeof taxonomy.language_thresholds === 'object'
        ? (taxonomy.language_thresholds as Record<string, unknown>)
        : {};
    (['en', 'fr'] as TopicDoormatPageLanguage[]).forEach((language) => {
      const rawLanguageThresholds = thresholds[language];
      if (!rawLanguageThresholds || typeof rawLanguageThresholds !== 'object') {
        return;
      }
      const languageThresholds = rawLanguageThresholds as Record<
        string,
        unknown
      >;
      const linkTextLimit = this.toNumber(
        languageThresholds['link_text_max_characters'],
      );
      const descriptionLimit = this.toNumber(
        languageThresholds['description_max_characters'],
      );
      if (linkTextLimit != null) {
        this.topicDoormatLengthLimits.set(
          `${language}|link-name-too-long`,
          linkTextLimit,
        );
      }
      if (descriptionLimit != null) {
        this.topicDoormatLengthLimits.set(
          `${language}|description-too-long`,
          descriptionLimit,
        );
      }
    });
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
      required_per_doormat_issue_decisions:
        source['required_per_doormat_issue_decisions'],
      style_detection: source['style_detection'],
      destination_content_assessment: source['destination_content_assessment'],
      destination_link_relationship: source['destination_link_relationship'],
      style_inconsistency_reporting: source['style_inconsistency_reporting'],
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
    const translationKey = `page.tools.guidance.topicDoormats.issues.${issueId}`;
    const translated = this.translate.instant(translationKey);
    if (translated && translated !== translationKey) return translated;
    const legacyKey = this.getLegacyTopicDoormatIssueLabelKey(issueId);
    if (legacyKey) {
      const legacyTranslated = this.getTopicDoormatDeterministicText(legacyKey);
      if (legacyTranslated && legacyTranslated !== legacyKey) {
        return legacyTranslated;
      }
    }
    return (
      this.topicDoormatIssueIdToLabel.get(issueId) ??
      this.toTitleCase(issueId.replace(/-/g, ' '))
    );
  }

  private getLegacyTopicDoormatIssueLabelKey(issueId: string): string {
    const legacyKeys: Record<string, string> = {
      'link-name-too-long': 'length.link.issue',
      'description-too-long': 'length.description.issue',
      'description-missing-needed-information': 'contentGap.issue',
      'consistent-description-style-in-section':
        'consistentDescriptionStyle.issue',
      'valid-dropdown-enhancement': 'dropdownEnhancementNote.issue',
      'no-issues': 'noIssues.issue',
      'missing-needed-doormat': 'missingNeededDoormat.issue',
      'unnecessary-doormat': 'unnecessaryDoormat.issue',
      'outdated-topic-page-template': 'outdatedTemplate.issue',
    };
    return legacyKeys[issueId] ?? '';
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
      issueId === 'missing-needed-doormat' || issueId === 'unnecessary-doormat'
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
    const linkKey = this.normalizeTopicDoormatSubstantiveDestinationText(
      doormat.linkText,
      doormat.labels,
    );
    if (!linkKey) return true;

    const destinationKeys = [
      doormat.destinationPageTitle,
      doormat.destinationPageHeading,
      this.cleanString(details?.['destination_page_title']),
      this.cleanString(details?.['destination_page_heading']),
    ]
      .map((value) =>
        this.normalizeTopicDoormatSubstantiveDestinationText(value),
      )
      .filter(Boolean);

    if (!destinationKeys.length) return true;
    return !destinationKeys.some((destinationKey) =>
      this.hasTopicDoormatSubstantiveDestinationTextMatch(
        linkKey,
        destinationKey,
      ),
    );
  }

  private hasSubstantiveTopicDoormatDestinationSurfaceMatch(
    summary: TopicDoormatSummary,
  ): boolean {
    const linkText = this.normalizeTopicDoormatSubstantiveDestinationText(
      summary.linkText,
      summary.labels,
    );
    if (!linkText) return false;
    return [summary.destinationPageTitle, summary.destinationPageHeading]
      .map((value) =>
        this.normalizeTopicDoormatSubstantiveDestinationText(value),
      )
      .filter(Boolean)
      .some((destinationText) =>
        this.hasTopicDoormatSubstantiveDestinationTextMatch(
          linkText,
          destinationText,
        ),
      );
  }

  private hasTopicDoormatSubstantiveDestinationTextMatch(
    linkText: string,
    destinationText: string,
  ): boolean {
    const paddedDestinationText = ` ${destinationText} `;
    const paddedLinkText = ` ${linkText} `;
    if (
      destinationText === linkText ||
      paddedDestinationText.includes(paddedLinkText) ||
      paddedLinkText.includes(paddedDestinationText)
    ) {
      return true;
    }
    const linkTokens =
      this.getTopicDoormatMeaningfulDestinationTokens(linkText);
    const destinationTokens =
      this.getTopicDoormatMeaningfulDestinationTokens(destinationText);
    if (linkTokens.length < 2 || destinationTokens.length < 2) {
      return false;
    }
    const destinationTokenSet = new Set(destinationTokens);
    const matchingTokens = linkTokens.filter((token) =>
      destinationTokenSet.has(token),
    );
    return (
      matchingTokens.length >= 2 &&
      matchingTokens.length /
        Math.min(linkTokens.length, destinationTokens.length) >=
        0.6
    );
  }

  private normalizeTopicDoormatSubstantiveDestinationText(
    value: string | undefined,
    labels: string[] = [],
  ): string {
    return this.normalizeTopicDoormatDestinationComparisonText(
      this.removeTopicDoormatLabels(value, labels),
    );
  }

  private removeTopicDoormatLabels(
    value: string | undefined,
    labels: string[] = [],
  ): string {
    let cleaned = this.cleanVisibleText(value);
    labels.forEach((label) => {
      const normalizedLabel = this.cleanVisibleText(label);
      if (!normalizedLabel) return;
      cleaned = cleaned.replace(
        new RegExp(this.escapeRegExp(normalizedLabel), 'gi'),
        ' ',
      );
    });
    return cleaned
      .replace(/\bstatus\s*:\s*[^.;|]+/gi, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  private escapeRegExp(value: string): string {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  private getTopicDoormatMeaningfulDestinationTokens(value: string): string[] {
    return Array.from(
      new Set(
        value
          .split(/\s+/)
          .filter(
            (token) =>
              token.length > 2 &&
              !this.topicDoormatDestinationStopWords.has(token),
          ),
      ),
    );
  }

  private isTopicDoormatDestinationElementCovered(
    summary: TopicDoormatSummary,
    element: TopicDoormatDestinationContextElement,
  ): boolean {
    const doormatText = this.normalizeTopicDoormatDestinationComparisonText(
      [
        summary.linkText,
        summary.description,
        summary.rawItemText,
        ...(summary.labels ?? []),
      ].join(' '),
    );
    const elementText = this.normalizeTopicDoormatDestinationComparisonText(
      element.text,
    );
    if (!doormatText || !elementText) return false;

    if (element.type === 'h2') {
      return (
        this.isTopicDoormatConceptCovered(elementText, doormatText) ||
        this.isTopicDoormatGenericEligibilityCovered(elementText, doormatText)
      );
    }

    if (element.type === 'doormat') {
      return this.hasTopicDoormatMeaningfulTokenCoverage(
        elementText,
        doormatText,
      );
    }

    return (
      this.isTopicDoormatIntroConceptCovered(elementText, doormatText) ||
      this.hasTopicDoormatMeaningfulTokenCoverage(elementText, doormatText)
    );
  }

  private isTopicDoormatIntroConceptCovered(
    elementText: string,
    doormatText: string,
  ): boolean {
    const groups = this.getTopicDoormatCoveredConceptGroups(
      elementText,
      doormatText,
    );
    if (groups >= 2) return true;
    return (
      groups >= 1 &&
      this.hasTopicDoormatConcept(elementText, ['program']) &&
      this.hasTopicDoormatConcept(doormatText, ['program'])
    );
  }

  private isTopicDoormatConceptCovered(
    elementText: string,
    doormatText: string,
  ): boolean {
    return (
      this.getTopicDoormatCoveredConceptGroups(elementText, doormatText) > 0
    );
  }

  private isTopicDoormatGenericEligibilityCovered(
    elementText: string,
    doormatText: string,
  ): boolean {
    if (!this.hasTopicDoormatConcept(elementText, ['eligibility'])) {
      return false;
    }
    const criteria = [
      ['audience'],
      ['age'],
      ['disability'],
      ['income'],
      ['family-status'],
    ];
    const coveredCriteria = criteria.filter((group) =>
      this.hasTopicDoormatConcept(doormatText, group),
    ).length;
    return coveredCriteria >= 2;
  }

  private getTopicDoormatCoveredConceptGroups(
    elementText: string,
    doormatText: string,
  ): number {
    const conceptGroups = [
      ['eligibility'],
      ['application'],
      ['payment'],
      ['amount'],
      ['deadline'],
      ['document'],
      ['audience'],
      ['program'],
    ];
    return conceptGroups.filter(
      (group) =>
        this.hasTopicDoormatConcept(elementText, group) &&
        this.hasTopicDoormatConcept(doormatText, group),
    ).length;
  }

  private hasTopicDoormatConcept(value: string, groups: string[]): boolean {
    return groups.some((group) => {
      const pattern = this.getTopicDoormatConceptPattern(group);
      return pattern ? pattern.test(value) : false;
    });
  }

  private getTopicDoormatConceptPattern(group: string): RegExp | null {
    return this.topicDoormatConceptPatterns[group] ?? null;
  }

  private hasTopicDoormatMeaningfulTokenCoverage(
    elementText: string,
    doormatText: string,
  ): boolean {
    const elementTokens =
      this.getTopicDoormatMeaningfulDestinationTokens(elementText);
    if (elementTokens.length < 4) return false;
    const doormatTokenSet = new Set(
      this.getTopicDoormatMeaningfulDestinationTokens(doormatText),
    );
    const coveredCount = elementTokens.filter((token) =>
      doormatTokenSet.has(token),
    ).length;
    return coveredCount >= 3 && coveredCount / elementTokens.length >= 0.3;
  }

  private isTopicDoormatLifecycleStatusAlreadyCovered(
    summary: TopicDoormatSummary,
    element: TopicDoormatDestinationContextElement,
  ): boolean {
    if (!this.hasTopicDoormatLifecycleStatusText(element.text)) return false;
    return this.hasTopicDoormatLifecycleStatusText(
      [
        summary.linkText,
        summary.description,
        summary.rawItemText,
        ...(summary.labels ?? []),
      ].join(' '),
    );
  }

  private isTopicDoormatLifecycleStatusElement(value: string): boolean {
    const normalized =
      this.normalizeTopicDoormatDestinationComparisonText(value);
    return this.topicDoormatLifecycleStatusElementPatterns.some((pattern) =>
      pattern.test(normalized),
    );
  }

  private hasTopicDoormatLifecycleStatusText(value: string): boolean {
    const normalized =
      this.normalizeTopicDoormatDestinationComparisonText(value);
    return this.topicDoormatLifecycleStatusTextPatterns.some((pattern) =>
      pattern.test(normalized),
    );
  }

  private hasTopicDoormatDecisionCriticalText(value: string): boolean {
    const normalized =
      this.normalizeTopicDoormatDestinationComparisonText(value);
    return /\b(?:eligibility|eligible|qualify|who can|who is eligible|apply|application|register|deadline|due date|required document|documents required|amount|payment amount|rates|before you start|admissibilite|admissible|qui peut|faire une demande|presenter une demande|demande|inscription|date limite|echeance|document requis|documents requis|montant|montant du paiement|taux|avant de commencer)\b/.test(
      normalized,
    );
  }

  private isTopicDoormatStatusRepetitionIssue(
    issueId: string,
    issue: Record<string, unknown>,
    summary?: TopicDoormatSummary,
  ): boolean {
    if (
      issueId !== 'enhancement-label-not-needed' &&
      issueId !== 'description-lacks-clarity'
    ) {
      return false;
    }
    if (!summary) return false;
    const visibleDoormatText = [
      summary.linkText,
      summary.description,
      summary.rawItemText,
      ...(summary.labels ?? []),
    ].join(' ');
    if (!this.hasTopicDoormatLifecycleStatusText(visibleDoormatText)) {
      return false;
    }

    const issueText = this.getTopicDoormatIssueSearchText(issue);
    return (
      this.hasTopicDoormatLifecycleStatusText(issueText) &&
      /\b(?:destination|title|h1|heading|label|status)\b/i.test(issueText)
    );
  }

  private getTopicDoormatIssueSearchText(
    issue: Record<string, unknown>,
  ): string {
    const details =
      issue['evidence_details'] && typeof issue['evidence_details'] === 'object'
        ? JSON.stringify(issue['evidence_details'])
        : '';
    return [
      issue['issue_category'],
      issue['description'],
      issue['evidence'],
      issue['recommendation'],
      details,
    ]
      .map((value) => (typeof value === 'string' ? value : ''))
      .join(' ');
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
    return this.hasSubstantiveTopicDoormatDestinationSurfaceMatch(summary);
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
        detailParts.push(
          issueCategory === 'description-too-long'
            ? `${count}`
            : `${count}/${limit}`,
        );
      }

      const doormatHref = this.cleanString(details['doormat_href']);
      const mostRequestedHref = this.cleanString(
        details['most_requested_href'],
      );
      if (doormatHref || mostRequestedHref) {
        detailParts.push(
          `Doormat: ${doormatHref || 'n/a'}; Most requested: ${
            mostRequestedHref || 'n/a'
          }`,
        );
      }

      const destinationTitle = this.cleanString(
        details['destination_page_title'],
      );
      if (destinationTitle) {
        detailParts.push(`Destination title: ${destinationTitle}`);
      }
    }

    const builtEvidence = [evidence, ...detailParts].filter(Boolean).join(' ');
    if (builtEvidence) return builtEvidence;

    const description = this.cleanString(issue['description']);
    if (this.hasUsableTopicDoormatIssueText(description)) return description;

    if (issueCategory === 'duplicate-link-in-most-requested') {
      return 'Link also appears in Most requested';
    }

    return '';
  }

  private getTopicDoormatDisplayedModelEvidence(
    issue: Record<string, unknown>,
    doormat?: TopicDoormatSummary,
  ): string {
    const evidence = this.buildTopicDoormatEvidence(issue, doormat);
    return this.hasUsableTopicDoormatIssueText(evidence)
      ? evidence
      : this.getTopicDoormatDeterministicText('missingAiEvidence');
  }

  private getTopicDoormatDisplayedModelRecommendation(
    issue: Record<string, unknown>,
  ): string {
    const recommendation = this.cleanString(issue['recommendation']);
    return this.hasUsableTopicDoormatIssueText(recommendation)
      ? recommendation
      : this.getTopicDoormatDeterministicText('missingAiRecommendation');
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
      this.isValidTopicDoormatIssueDecisions(doormat['issue_decisions']) &&
      Array.isArray(doormat['issues']) &&
      doormat['issues'].every((issue: unknown) =>
        this.isValidTopicDoormatModelIssue(issue, false),
      )
    );
  }

  private isValidTopicDoormatIssueDecisions(value: unknown): boolean {
    if (!Array.isArray(value)) return false;
    const decisionsByIssueId = new Map<string, Record<string, unknown>>();
    value.forEach((rawDecision) => {
      if (!rawDecision || typeof rawDecision !== 'object') return;
      const decision = rawDecision as Record<string, unknown>;
      const issueId = this.cleanString(decision['issue_id']);
      if (issueId) decisionsByIssueId.set(issueId, decision);
    });

    return this.topicDoormatRequiredIssueDecisionIds.every((issueId) => {
      const decision = decisionsByIssueId.get(issueId);
      return (
        !!decision &&
        this.topicDoormatIssueDecisionValues.has(
          this.cleanString(decision['decision']),
        ) &&
        typeof decision['reason'] === 'string'
      );
    });
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
      (ids) => Array.isArray(ids) && ids.every((id) => typeof id === 'string'),
    );
  }

  private normalizeTopicDoormatDescriptionStyle(
    value: unknown,
  ): TopicDoormatDescriptionStyle | null {
    if (value === 'sentence' || value === 'phrase') return 'task-list';
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
    if (value === 'task') return 'action';
    if (value === 'situation') return 'audience-group';
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
    const candidates = [value, this.extractJsonObjectText(value)].filter(
      (candidate): candidate is string => !!candidate,
    );

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

  private hasUsableTopicDoormatIssueText(value: string): boolean {
    const text = this.cleanString(value);
    if (!text) return false;
    return /[^\s\-–—]/.test(text);
  }

  private cleanVisibleText(value: string | null | undefined): string {
    return (value || '').replace(/\s+/g, ' ').trim();
  }

  private isNoIssueRow(issue: TopicDoormatIssueRow): boolean {
    return issue.issueId === 'no-issues';
  }
}
