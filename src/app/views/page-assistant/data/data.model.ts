import { MenuItem } from 'primeng/api';

// Upload data (from html, copy/paste, or word)
export interface UploadData {
  originalHtml: string;
  modifiedHtml: string;
  originalUrl: string;
  modifiedUrl: string;
  found?: {
    original: { hidden: boolean; modal: boolean; dynamic: boolean };
    modified: { hidden: boolean; modal: boolean; dynamic: boolean };
  };
  metadata?: MetadataData[];
  breadcrumb?: MenuItem[];
}

// Modified data (from upload or AI generated content)
export interface ModifiedData {
  modifiedUrl: string;
  modifiedHtml: string;
}

//Original data (from user edits or saving AI changes)
export interface OriginalData {
  originalUrl: string;
  originalHtml: string;
}

export interface MetadataData {
  name: string | void;
  content: string | void;
}

//Data structure for extractContent fxn 
export interface htmlProcessingResult {
  html: string;
  found: {
    hidden: boolean;
    modal: boolean;
    dynamic: boolean;
  };
  metadata?: MetadataData[];
  breadcrumb?: MenuItem[];
}

// Diff options to tweaks how sensitive HTML diff is to whitespace, word repitition, etc.
export interface DiffOptions {
  repeatingWordsAccuracy?: number;
  ignoreWhiteSpaceDifferences?: boolean;
  orphanMatchThreshold?: number;
  matchGranularity?: number;
  combineWords?: boolean;
}

//View options for horizontal radio buttons
export enum WebViewType {
  Original = 'original',
  Modified = 'modified',
  Diff = 'diff'
}

export enum SourceViewType {
  Original = 'original',
  Modified = 'modified',
  SideBySide = 'side-by-side',
  LineByLine = 'line-by-line'
}

export interface ViewOption<T = string> {
  label: string;
  value: T;
  icon: string;
}

//Compare options for drawer radio buttons
export enum CompareTask {
  AiGenerated = 'compareAI',
  PrototypeUrl = 'compareUrl',
  TwoModels = 'compare2Models',
  TwoPrompts = 'compare2Prompts'
}

export enum PromptKey {
  Headings = 'headings',
  Doormats = 'doormats',
  PlainLanguage = 'plainLanguage',
  AlertsIssues = 'alertsIssues',
  AlertsRecommendations = 'alertsRecommendations'
}

export enum AiModel {
  //Free models
  Nemotron = 'nvidia/nemotron-3-nano-30b-a3b:free', //256k context, 17B weekly, 30B parameters
  //Chimera = 'tngtech/deepseek-r1t2-chimera:free', //164k context, 72B weekly, 671B parameters, 37B active
  //Gemma = 'google/gemma-3-27b-it:free', //131k context, 2B weekly, 27B parameters
  //Mistral = 'mistralai/mistral-small-3.1-24b-instruct:free', //128k context, 178M weekly, 24B parameters
  //Llama33 = 'meta-llama/llama-3.3-70b-instruct:free', //262k context, 3.9B weekly, 70B parameters
  Arcee = 'arcee-ai/trinity-large-preview:free', //131k context, 458B weekly, 13B parameters
  Zai = 'z-ai/glm-4.5-air:free', //131k context, 57B
  DeepSeek = 'deepseek/deepseek-r1-0528:free', //164k context, 20B weekly, 671B parameters, 37B active
  ///Paid models
  GptOSS = 'openai/gpt-oss-120b', //131k context paid - $0.039/M input tokens$0.19/M output tokens
  Gemini = 'google/gemini-2.5-flash-lite', // 1.05M context paid - $0.10/M input tokens, $0.40/M output tokens
  Gpt5Mini = 'openai/gpt-5-mini', // 400k context paid - $0.25/M input tokens, $2/M output tokens
}

export interface LinkData {
  text: string;
  href: string;
  insText: string;
  element: Element;
}

export interface SelectionTypes {
  count: number;
  startId: number | null;
  endId: number | null;
};

