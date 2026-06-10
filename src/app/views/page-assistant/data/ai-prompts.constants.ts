import { PromptKey } from './data.model';

const PROMPT_BASE_URL = new URL('ai-prompts/', document.baseURI);
type StaticPromptKey = Exclude<
  PromptKey,
  PromptKey.AlertsIssues | PromptKey.AlertsRecommendations
>;

const promptFiles: Record<StaticPromptKey, string> = {
  [PromptKey.Headings]: new URL('headings.txt', PROMPT_BASE_URL).toString(),
  [PromptKey.Doormats]: new URL('doormats.txt', PROMPT_BASE_URL).toString(),
  [PromptKey.PlainLanguage]: new URL('plain-language.txt', PROMPT_BASE_URL).toString(),
};

const commsObjectivePath = new URL('comms-objective.txt', PROMPT_BASE_URL).toString();
const promptCache = new Map<string, string>();

async function loadPromptText(path: string): Promise<string> {
  const cached = promptCache.get(path);
  if (cached) return cached;
  const resp = await fetch(path);
  if (!resp.ok) {
    throw new Error(`Prompt file request failed (${resp.status}): ${path}`);
  }
  const text = await resp.text();
  promptCache.set(path, text);
  return text;
}

export async function getPromptTemplate(key: StaticPromptKey): Promise<string> {
  return loadPromptText(promptFiles[key]);
}

export async function getCommsObjectivePrompt(): Promise<string> {
  return loadPromptText(commsObjectivePath);
}
