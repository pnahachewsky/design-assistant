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
  Devstral = 'mistralai/devstral-2512:free', //262.1K context
  Xiaomi = 'xiaomi/mimo-v2-flash:free', //262.1K context
  Qwen = 'qwen/qwen3-next-80b-a3b-instruct:free', //262k context
  Nemotron = 'nvidia/nemotron-3-nano-30b-a3b:free', //256k context
  DeepSeek = 'deepseek/deepseek-r1-0528:free', //164k context
  Gemma = 'google/gemma-3-27b-it:free', //131k context
  Mistral = 'mistralai/mistral-small-3.1-24b-instruct:free', //128k context
  Llama32 = 'meta-llama/llama-3.2-3b-instruct:free', //131k context = wonky results for some reason
  Llama31 = 'meta-llama/llama-3.1-405b-instruct:free' //66k context = fine???
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

