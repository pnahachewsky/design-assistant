export interface AlertRewriteRulesJson {
  version: string;
  alertPlanning: {
    systemPromptLines: string[];
  };
  alertRewrite: {
    styleRulesBase: string[];
    styleRulesWithExamples: string[];
    systemPromptWithExamplesLines: string[];
    systemPromptWithoutExamplesLines: string[];
    retryInstructions: {
      invalidWrapperHtml: string;
      placeholderLinks: string;
      noLinksAllowed: string;
      mustKeepLink: string;
      avoidExampleCopy: string;
      fullSentenceLinksNeedLeadIn: string;
    };
  };
}

const ALERT_REWRITE_RULES_PATH = new URL(
  'ai-prompts/alerts-rewrite-rules.json',
  document.baseURI,
).toString();

const ALERT_REWRITE_RULES_FALLBACK: AlertRewriteRulesJson = {
  version: 'fallback-inline',
  alertPlanning: {
    systemPromptLines: [],
  },
  alertRewrite: {
    styleRulesBase: [],
    styleRulesWithExamples: [],
    systemPromptWithExamplesLines: [],
    systemPromptWithoutExamplesLines: [],
    retryInstructions: {
      invalidWrapperHtml: '',
      placeholderLinks: '',
      noLinksAllowed: '',
      mustKeepLink: '',
      avoidExampleCopy: '',
      fullSentenceLinksNeedLeadIn: '',
    },
  },
};

let alertRewriteRulesCache: AlertRewriteRulesJson | null = null;

function isStringArray(value: unknown): value is string[] {
  return (
    Array.isArray(value) &&
    value.every((item) => typeof item === 'string' && item.trim().length > 0)
  );
}

function toValidatedRules(raw: unknown): AlertRewriteRulesJson | null {
  if (!raw || typeof raw !== 'object') return null;
  const root = raw as Record<string, unknown>;
  const version = typeof root['version'] === 'string' ? root['version'].trim() : '';
  const alertPlanning =
    root['alertPlanning'] && typeof root['alertPlanning'] === 'object'
      ? (root['alertPlanning'] as Record<string, unknown>)
      : null;
  const alertRewrite =
    root['alertRewrite'] && typeof root['alertRewrite'] === 'object'
      ? (root['alertRewrite'] as Record<string, unknown>)
      : null;
  if (!version || !alertPlanning || !alertRewrite) return null;

  const alertPlanningSystem = alertPlanning['systemPromptLines'];
  const styleRulesBase = alertRewrite['styleRulesBase'];
  const styleRulesWithExamples = alertRewrite['styleRulesWithExamples'];
  const systemWithExamples = alertRewrite['systemPromptWithExamplesLines'];
  const systemWithoutExamples = alertRewrite['systemPromptWithoutExamplesLines'];
  const retryInstructionsRaw =
    alertRewrite['retryInstructions'] && typeof alertRewrite['retryInstructions'] === 'object'
      ? (alertRewrite['retryInstructions'] as Record<string, unknown>)
      : null;

  if (
    !isStringArray(alertPlanningSystem) ||
    !isStringArray(styleRulesBase) ||
    !isStringArray(styleRulesWithExamples) ||
    !isStringArray(systemWithExamples) ||
    !isStringArray(systemWithoutExamples) ||
    !retryInstructionsRaw
  ) {
    return null;
  }
  const invalidWrapperHtml = retryInstructionsRaw['invalidWrapperHtml'];
  const placeholderLinks = retryInstructionsRaw['placeholderLinks'];
  const noLinksAllowed = retryInstructionsRaw['noLinksAllowed'];
  const mustKeepLink = retryInstructionsRaw['mustKeepLink'];
  const avoidExampleCopy = retryInstructionsRaw['avoidExampleCopy'];
  const fullSentenceLinksNeedLeadIn =
    retryInstructionsRaw['fullSentenceLinksNeedLeadIn'];
  if (
    typeof invalidWrapperHtml !== 'string' ||
    typeof placeholderLinks !== 'string' ||
    typeof noLinksAllowed !== 'string' ||
    typeof mustKeepLink !== 'string' ||
    typeof avoidExampleCopy !== 'string' ||
    typeof fullSentenceLinksNeedLeadIn !== 'string' ||
    !invalidWrapperHtml.trim() ||
    !placeholderLinks.trim() ||
    !noLinksAllowed.trim() ||
    !mustKeepLink.trim() ||
    !avoidExampleCopy.trim() ||
    !fullSentenceLinksNeedLeadIn.trim()
  ) {
    return null;
  }

  return {
    version,
    alertPlanning: {
      systemPromptLines: alertPlanningSystem,
    },
    alertRewrite: {
      styleRulesBase,
      styleRulesWithExamples,
      systemPromptWithExamplesLines: systemWithExamples,
      systemPromptWithoutExamplesLines: systemWithoutExamples,
      retryInstructions: {
        invalidWrapperHtml,
        placeholderLinks,
        noLinksAllowed,
        mustKeepLink,
        avoidExampleCopy,
        fullSentenceLinksNeedLeadIn,
      },
    },
  };
}

export async function getAlertRewriteRules(): Promise<AlertRewriteRulesJson> {
  if (alertRewriteRulesCache) return alertRewriteRulesCache;

  try {
    const response = await fetch(ALERT_REWRITE_RULES_PATH);
    if (!response.ok) {
      throw new Error(`Failed to load alert rewrite rules (${response.status}).`);
    }
    const payload = (await response.json()) as unknown;
    const validated = toValidatedRules(payload);
    if (!validated) {
      throw new Error('Invalid alert rewrite rules JSON schema.');
    }
    alertRewriteRulesCache = validated;
  } catch (err) {
    console.warn(
      'Unable to load alert rewrite rules JSON; using inline fallback.',
      err,
    );
    alertRewriteRulesCache = ALERT_REWRITE_RULES_FALLBACK;
  }

  return alertRewriteRulesCache;
}
