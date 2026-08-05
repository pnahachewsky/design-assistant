import { UploadData } from '../../data/data.model';

export type TopicDoormatPageLanguage = 'en' | 'fr';
export type TopicDoormatReportLanguage = 'en' | 'fr';
export type TopicDoormatDestinationContextStatus =
  | 'available'
  | 'insufficient'
  | 'failed';
export type TopicDoormatCellProvenance = 'model' | 'aida';
export type TopicDoormatDestinationPageType = 'content' | 'topic' | 'subway';

export interface TopicDoormatDestinationNavigationItem {
  linkText: string;
  description: string;
  sectionTitle?: string;
  source: 'topic-doormat' | 'subway-doormat';
}

export interface TopicDoormatIssueRowProvenance {
  issue?: TopicDoormatCellProvenance[];
  evidence?: TopicDoormatCellProvenance[];
  recommendation?: TopicDoormatCellProvenance[];
}

export interface TopicDoormatIssueRow {
  include: boolean;
  rowType: 'section' | 'doormat';
  severity: string;
  doormat: string;
  doormatLabel: string;
  issueId: string;
  issue: string;
  evidence: string;
  evidenceMetric?: string;
  evidenceItems?: TopicDoormatEvidenceItem[];
  evidenceLinkText?: string;
  evidenceLinkHref?: string;
  recommendation: string;
  provenance?: TopicDoormatIssueRowProvenance;
  doormatIndex?: number;
  affectedDoormatIndexes?: number[];
  sectionIndex?: number;
  sectionTitle?: string;
  sectionItemIndex?: number;
  sectionItemMeta?: string;
}

export interface TopicDoormatEvidenceItem {
  label: string;
  metric: string;
  metricParts?: TopicDoormatEvidenceMetricPart[];
  severity?: string;
}

export interface TopicDoormatEvidenceMetricPart {
  metric: string;
  severity?: string;
}

export interface TopicDoormatIssueGroup {
  sectionIndex: number;
  sectionTitle: string;
  doormatCount: number;
  sectionRows: TopicDoormatIssueRow[];
  doormatRows: TopicDoormatIssueRow[];
}

export interface TopicDoormatIssueSummary {
  label: string;
  severity: string;
  rowType: 'section' | 'doormat';
}

export const TOPIC_DOORMAT_DIAGNOSTIC_ISSUE_IDS = new Set([
  'consistent-description-style-in-section',
  'valid-dropdown-enhancement',
]);

export interface TopicDoormatSummary {
  index: number;
  linkText: string;
  href: string;
  labels?: string[];
  destinationUrl?: string;
  destinationPageTitle?: string;
  destinationPageHeading?: string;
  destinationMainHtml?: string;
  destinationMainHtmlTruncated?: boolean;
  destinationIntroParagraphs?: string[];
  destinationSectionHeadings?: string[];
  destinationPageType?: TopicDoormatDestinationPageType;
  destinationNavigationItems?: TopicDoormatDestinationNavigationItem[];
  destinationLabelEvidence?: string[];
  destinationContextStatus?: TopicDoormatDestinationContextStatus;
  destinationHttpStatus?: number;
  destinationFetchError?: string;
  description: string;
  headingLevel: number | null;
  itemLinkCount: number;
  fieldflowLinkCount?: number;
  headingLinkCount: number;
  descriptionLinkCount: number;
  hasSplitHeadingLink: boolean;
  hasFieldflow?: boolean;
  hasDescriptionLink: boolean;
  hasDescriptionIconOrImage: boolean;
  hasDescriptionSpecialFormatting: boolean;
  rawItemText: string;
  linkTextCharacterCount: number;
  descriptionCharacterCount: number;
  oppositeLanguage?: TopicDoormatPageLanguage;
  oppositeLanguageLinkTextCharacterCount?: number;
  oppositeLanguageDescriptionCharacterCount?: number;
  sectionIndex: number;
  sectionTitle: string;
  sectionItemIndex: number;
  sectionDoormatCount: number;
}

export interface MostRequestedLinkSummary {
  text: string;
  href: string;
}

export interface TopicDoormatComparableUrl {
  kind: 'absolute' | 'root-relative';
  absoluteKey?: string;
  pathKey: string;
  allowedHost: boolean;
}

export interface TopicDoormatIssueCategory {
  id?: unknown;
  label?: unknown;
}

export interface TopicDoormatIssueTaxonomy {
  issue_categories?: unknown;
  language_thresholds?: unknown;
}

export type TopicDoormatDescriptionStyle =
  | 'keyword-list'
  | 'task-list'
  | 'benefit-eligibility'
  | 'dropdown-enhancement'
  | 'mixed-or-unclear';

export type TopicDoormatLinkTextStyle =
  | 'task'
  | 'topic'
  | 'situation'
  | 'mixed-or-unclear';

export type TopicDoormatDestinationLinkRelationship =
  | 'equivalent'
  | 'narrower-but-accurate'
  | 'broader-but-accurate'
  | 'materially-different'
  | 'unavailable';

export type TopicDoormatDestinationLinkRelationshipBasis =
  | 'literal-match'
  | 'phrase-containment'
  | 'grammatical-variant'
  | 'synonym-or-paraphrase'
  | 'acronym-or-program-term'
  | 'compatible-scope'
  | 'conflicting-core-concept'
  | 'unavailable';

export interface TopicDoormatSectionStyleAnalysis {
  sectionIndex: number;
  sectionTitle: string;
  summaries: TopicDoormatSummary[];
  fieldflowSummaries: TopicDoormatSummary[];
  dominantStyle: Exclude<
    TopicDoormatDescriptionStyle,
    'mixed-or-unclear'
  > | null;
  styleCounts: Map<TopicDoormatDescriptionStyle, number>;
  examplesByStyle: Map<TopicDoormatDescriptionStyle, number[]>;
  isMixed: boolean;
}

export type TopicDoormatUploadData = Partial<UploadData> | null | undefined;
