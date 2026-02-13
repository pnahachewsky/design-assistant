import { PromptKey } from './data.model';

const PROMPT_BASE_PATH = '/ai-prompts';
const promptFiles: Record<PromptKey, string> = {
  [PromptKey.Headings]: `${PROMPT_BASE_PATH}/headings.txt`,
  [PromptKey.Doormats]: `${PROMPT_BASE_PATH}/doormats.txt`,
  [PromptKey.PlainLanguage]: `${PROMPT_BASE_PATH}/plain-language.txt`,
  [PromptKey.AlertsIssues]: `${PROMPT_BASE_PATH}/alerts-issues.txt`,
  [PromptKey.AlertsRecommendations]: `${PROMPT_BASE_PATH}/alerts-recommendations.txt`,
};

const commsObjectivePath = `${PROMPT_BASE_PATH}/comms-objective.txt`;
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

export async function getPromptTemplate(key: PromptKey): Promise<string> {
  return loadPromptText(promptFiles[key]);
}

export async function getCommsObjectivePrompt(): Promise<string> {
  return loadPromptText(commsObjectivePath);
}
