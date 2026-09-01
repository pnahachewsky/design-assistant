import { MenuItem } from 'primeng/api';

// Shared types for the page assistant's upload, diff, prompt, and model flows.

// Canonical page payload stored in state after a URL, paste, or Word import.
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

// Minimal patch used when only the modified side changes.
export interface ModifiedData {
  modifiedUrl: string;
  modifiedHtml: string;
}

// Minimal patch used when only the original side changes.
export interface OriginalData {
  originalUrl: string;
  originalHtml: string;
}

export interface MetadataData {
  name: string | void;
  content: string | void;
}

// Result returned by URL/content extraction before it is normalized into UploadData.
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

// Diff tuning flags used by the source/web compare views.
export interface DiffOptions {
  repeatingWordsAccuracy?: number;
  ignoreWhiteSpaceDifferences?: boolean;
  orphanMatchThreshold?: number;
  matchGranularity?: number;
  combineWords?: boolean;
}

// View modes for the rendered page preview.
export enum WebViewType {
  Original = 'original',
  Modified = 'modified',
  Diff = 'diff'
}

// View modes for the source-code diff panel.
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

// Top-level compare workflows exposed in the AI options drawer.
export enum CompareTask {
  AiGenerated = 'compareAI',
  PrototypeUrl = 'compareUrl',
  TwoModels = 'compare2Models',
  TwoPrompts = 'compare2Prompts'
}

// Prompt families supported by the page assistant.
export enum PromptKey {
  Headings = 'headings',
  Doormats = 'doormats',
  PlainLanguage = 'plainLanguage',
  AlertsIssues = 'alertsIssues',
  AlertsRecommendations = 'alertsRecommendations'
}

// OpenRouter model ids supported by the assistant UI.
// These values are also the canonical ids used for friendly-name resolution.
export enum AiModel {
  // Free models
  NemotronUltra = 'nvidia/nemotron-3-ultra-550b-a55b:free',
  NemotronLightning = 'nvidia/nemotron-3.5-lightning:free',
  NemotronSuper = 'nvidia/nemotron-3-super-120b-a12b:free', //262k context, 263B weekly, 120B parameters
  FreeModelsRouter = 'openrouter/free',
  // Paid models
  AutoRouter = 'openrouter/auto',
  GptOSS20B = 'openai/gpt-oss-20b', // 131k context paid
  Gemini = 'google/gemini-3.1-flash-lite',
  GPT56LunaPro = 'openai/gpt-5.6-luna-pro',
  GPT5Mini = 'openai/gpt-5-mini',
  GPT54Mini = 'openai/gpt-5.4-mini',
  DeepSeekV4Flash = 'deepseek/deepseek-v4-flash-latest',
  DeepSeekV4Pro = 'deepseek/deepseek-v4-pro',
}

// Normalized link metadata used by rewrite/diff logic.
export interface LinkData {
  text: string;
  href: string;
  insText: string;
  element: Element;
}

// Selection shape shared with the shadow DOM diff utilities.
export interface SelectionTypes {
  count: number;
  startId: number | null;
  endId: number | null;
};

