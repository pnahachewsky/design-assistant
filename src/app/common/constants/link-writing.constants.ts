export interface LinkWritingRulesOptions {
  hasTooManyLinksIssue: boolean;
}

export type LinkWritingRuleCondition =
  | 'always'
  | 'too_many_links'
  | 'not_too_many_links';

export interface LinkWritingRule {
  id: string;
  condition: LinkWritingRuleCondition;
  text: string;
}

export interface LinkWritingRulesJson {
  version: string;
  rules: readonly LinkWritingRule[];
}

const LINK_WRITING_RULES_PATH = new URL(
  'ai-prompts/link-writing-rules.json',
  document.baseURI,
).toString();

const LINK_WRITING_RULES_FALLBACK: LinkWritingRulesJson = {
  version: 'fallback-empty',
  rules: [],
};

let linkWritingRulesCache: LinkWritingRulesJson | null = null;

function isRuleCondition(value: string): value is LinkWritingRuleCondition {
  return (
    value === 'always' ||
    value === 'too_many_links' ||
    value === 'not_too_many_links'
  );
}

function toValidatedRulesJson(raw: unknown): LinkWritingRulesJson | null {
  if (!raw || typeof raw !== 'object') return null;
  const root = raw as Record<string, unknown>;
  const version =
    typeof root['version'] === 'string' ? root['version'].trim() : '';
  const rulesRaw = Array.isArray(root['rules']) ? root['rules'] : [];
  const rules: LinkWritingRule[] = [];

  for (const item of rulesRaw) {
    if (!item || typeof item !== 'object') continue;
    const entry = item as Record<string, unknown>;
    const id = typeof entry['id'] === 'string' ? entry['id'].trim() : '';
    const conditionRaw =
      typeof entry['condition'] === 'string' ? entry['condition'].trim() : '';
    const text = typeof entry['text'] === 'string' ? entry['text'].trim() : '';
    if (!id || !text || !isRuleCondition(conditionRaw)) continue;
    rules.push({ id, condition: conditionRaw, text });
  }

  if (!version || !rules.length) return null;
  return { version, rules };
}

async function loadRulesSource(): Promise<LinkWritingRulesJson> {
  if (linkWritingRulesCache) return linkWritingRulesCache;
  try {
    const response = await fetch(LINK_WRITING_RULES_PATH);
    if (!response.ok) {
      throw new Error(`Failed to load link writing rules (${response.status}).`);
    }
    const payload = (await response.json()) as unknown;
    const validated = toValidatedRulesJson(payload);
    if (!validated) {
      throw new Error('Invalid link writing rules JSON schema.');
    }
    linkWritingRulesCache = validated;
  } catch (err) {
    console.warn('Unable to load link writing rules JSON; using empty fallback.', err);
    linkWritingRulesCache = LINK_WRITING_RULES_FALLBACK;
  }
  return linkWritingRulesCache;
}

function filterRules(
  source: LinkWritingRulesJson,
  options: LinkWritingRulesOptions,
): LinkWritingRule[] {
  return source.rules.filter((rule) => {
    if (rule.condition === 'always') return true;
    if (rule.condition === 'too_many_links') return options.hasTooManyLinksIssue;
    return !options.hasTooManyLinksIssue;
  });
}

export async function getLinkWritingRulesJson(
  options: LinkWritingRulesOptions,
): Promise<LinkWritingRule[]> {
  const source = await loadRulesSource();
  return filterRules(source, options);
}

export async function getLinkWritingRules(
  options: LinkWritingRulesOptions,
): Promise<string[]> {
  const rules = await getLinkWritingRulesJson(options);
  return rules.map((rule) => rule.text);
}
