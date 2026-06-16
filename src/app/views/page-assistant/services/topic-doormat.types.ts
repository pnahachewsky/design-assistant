import { UploadData } from '../data/data.model';

export type TopicDoormatPageLanguage = 'en' | 'fr';

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
  recommendation: string;
  doormatIndex?: number;
  sectionIndex?: number;
  sectionTitle?: string;
  sectionItemIndex?: number;
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
  destinationUrl?: string;
  destinationPageTitle?: string;
  destinationPageHeading?: string;
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
  | 'noun-topic'
  | 'action-oriented'
  | 'how-to'
  | 'benefit-summary'
  | 'question-or-sentence'
  | 'status-or-date-change'
  | 'unclear';

export interface TopicDoormatSectionStyleAnalysis {
  sectionIndex: number;
  sectionTitle: string;
  summaries: TopicDoormatSummary[];
  dominantStyle: Exclude<TopicDoormatDescriptionStyle, 'unclear'> | null;
  styleCounts: Map<TopicDoormatDescriptionStyle, number>;
  examplesByStyle: Map<TopicDoormatDescriptionStyle, number[]>;
  isMixed: boolean;
}

export type TopicDoormatUploadData = Partial<UploadData> | null | undefined;
