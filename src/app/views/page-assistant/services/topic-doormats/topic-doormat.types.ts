import { UploadData } from '../../data/data.model';

export type TopicDoormatPageLanguage = 'en' | 'fr';
export type TopicDoormatDestinationContextStatus =
  | 'available'
  | 'insufficient'
  | 'failed';

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
  evidenceLinkText?: string;
  evidenceLinkHref?: string;
  recommendation: string;
  doormatIndex?: number;
  sectionIndex?: number;
  sectionTitle?: string;
  sectionItemIndex?: number;
  sectionItemMeta?: string;
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

export interface TopicDoormatSummary {
  index: number;
  linkText: string;
  href: string;
  labels?: string[];
  destinationUrl?: string;
  destinationPageTitle?: string;
  destinationPageHeading?: string;
  destinationIntroParagraphs?: string[];
  destinationSectionHeadings?: string[];
  destinationContextStatus?: TopicDoormatDestinationContextStatus;
  destinationHttpStatus?: number;
  destinationFetchError?: string;
  description: string;
  headingLevel: number | null;
  itemLinkCount: number;
  headingLinkCount: number;
  descriptionLinkCount: number;
  hasSplitHeadingLink: boolean;
  hasDescriptionLink: boolean;
  hasDescriptionIconOrImage: boolean;
  hasDescriptionSpecialFormatting: boolean;
  rawItemText: string;
  linkTextCharacterCount: number;
  descriptionCharacterCount: number;
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
}

export type TopicDoormatDescriptionStyle =
  | 'sentence'
  | 'phrase'
  | 'keyword-list'
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
  dominantStyle: Exclude<TopicDoormatDescriptionStyle, 'mixed-or-unclear'> | null;
  styleCounts: Map<TopicDoormatDescriptionStyle, number>;
  examplesByStyle: Map<TopicDoormatDescriptionStyle, number[]>;
  isMixed: boolean;
}

export type TopicDoormatUploadData = Partial<UploadData> | null | undefined;
