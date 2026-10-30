import {
  AI_FREE_MODELS
} from "./chunk-MTIX3M4U.js";
import {
  HtmlNormalizationService
} from "./chunk-G6GBOHXB.js";
import {
  HttpClient,
  environment
} from "./chunk-7YP54JN5.js";
import {
  Injectable,
  firstValueFrom,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-KRHY6Z2H.js";
import {
  __async
} from "./chunk-YCXP4XZS.js";

// src/app/common/prompts/prompt.model.ts
var RoleKey;
(function(RoleKey2) {
  RoleKey2["None"] = "aiPrompt.role.none";
  RoleKey2["ContentDesigner"] = "aiPrompt.role.contentDesigner";
  RoleKey2["SeoExpert"] = "aiPrompt.role.seoExpert";
  RoleKey2["AccessibilityExpert"] = "aiPrompt.role.accessibilityExpert";
  RoleKey2["Translator"] = "aiPrompt.role.translator";
  RoleKey2["HTMLeditor"] = "aiPrompt.role.htmlEditor";
})(RoleKey || (RoleKey = {}));
var OutputKey;
(function(OutputKey2) {
  OutputKey2["Text"] = "aiPrompt.output.text";
  OutputKey2["Html"] = "aiPrompt.output.html";
  OutputKey2["Json"] = "aiPrompt.output.json";
})(OutputKey || (OutputKey = {}));
var RubricKey;
(function(RubricKey2) {
  RubricKey2["NoCommentary"] = "aiPrompt.rubric.noCommentary";
  RubricKey2["PreserveHtmlStructure"] = "aiPrompt.rubric.preserveHtmlStructure";
  RubricKey2["CharacterLimit"] = "aiPrompt.rubric.characterLimit";
  RubricKey2["Description"] = "aiPrompt.rubric.description";
  RubricKey2["DescriptionEN"] = "aiPrompt.rubric.descriptionEN";
  RubricKey2["DescriptionFR"] = "aiPrompt.rubric.descriptionFR";
  RubricKey2["Keywords"] = "aiPrompt.rubric.keywords";
  RubricKey2["CraTermTranslations"] = "aiPrompt.rubric.craTermTranslations";
})(RubricKey || (RubricKey = {}));
var InventoryPromptKey;
(function(InventoryPromptKey2) {
  InventoryPromptKey2["Metadata"] = "aiPrompt.inventory.metadata";
  InventoryPromptKey2["Description"] = "aiPrompt.inventory.description";
  InventoryPromptKey2["Keywords"] = "aiPrompt.inventory.keywords";
})(InventoryPromptKey || (InventoryPromptKey = {}));
var PagePromptKey;
(function(PagePromptKey2) {
  PagePromptKey2["AlertRewrite"] = "aiPrompt.page.alertRewrite";
  PagePromptKey2["Headings"] = "aiPrompt.page.headings";
  PagePromptKey2["Doormats"] = "aiPrompt.page.doormats";
  PagePromptKey2["PlainLanguage"] = "aiPrompt.page.plainLanguage";
  PagePromptKey2["Tense"] = "aiPrompt.page.tense";
})(PagePromptKey || (PagePromptKey = {}));
var ProblemPromptKey;
(function(ProblemPromptKey2) {
  ProblemPromptKey2["AlertsRewrite"] = "aiPrompt.problem.alertsRewrite";
  ProblemPromptKey2["AlertsProblems"] = "aiPrompt.problem.alertsProblems";
  ProblemPromptKey2["TranslateIssueDetails"] = "aiPrompt.problem.translateIssueDetails";
})(ProblemPromptKey || (ProblemPromptKey = {}));

// src/app/common/prompts/shared.prompts.ts
var RoleFragment = {
  [RoleKey.SeoExpert]: "You are a bilingual search engine optimization expert (Canadian French and English).",
  [RoleKey.ContentDesigner]: "You are an expert web content designer with 10 years of experience in the Canadian public service.",
  [RoleKey.AccessibilityExpert]: "You are a web accessibility expert.",
  [RoleKey.Translator]: "You are an expert government translator for Canadian English and French.",
  [RoleKey.HTMLeditor]: "You are a precise HTML text editor.",
  [RoleKey.None]: ""
};
var OutputFragment = {
  [OutputKey.Text]: "Provide ONLY the requested output as plain text with absolutely NO additional commentary, explanations, markdown formatting, or preamble.",
  [OutputKey.Html]: "Return ONLY valid HTML with no markdown code blocks (no ```html). Preserve the original code structure where possible, only modifying the specific elements needed to meet the task requirements.",
  [OutputKey.Json]: "You must return ONLY valid JSON. No markdown (no ```json), no explanations, no preamble. The response must be directly parseable by JSON.parse()."
};
var RubricFragment = {
  [RubricKey.Description]: ["Description: The description must capture the main topic and use terminology found in the content."],
  [RubricKey.DescriptionEN]: ["English description: Must be between 130 and 160 characters (including spaces)."],
  [RubricKey.DescriptionFR]: ["French description: Must be concise but is permitted to be longer than the English version, up to a maximum of 275 characters (including spaces)."],
  [RubricKey.Keywords]: [
    'Keywords: Provide 10 highly relevant words or short phrases directly extracted from or strongly implied by the content. Do NOT include "Canada Revenue Agency" or "Agence du revenu du Canada" in the keyword list.'
  ],
  [RubricKey.CraTermTranslations]: [
    `Important CRA-specific translations:
    - "Canada Revenue Agency" \u2192 "Agence du revenu du Canada"
    - "income tax" \u2192 "imp\xF4t sur le revenu"
    - "benefits" \u2192 "prestations"
    - "tax return" \u2192 "d\xE9claration de revenus"
    - "GST/HST" \u2192 "TPS/TVH"
    - "business number" \u2192 "num\xE9ro d'entreprise"
    - "tax credit" \u2192 "cr\xE9dit d'imp\xF4t"
    - "deduction" \u2192 "d\xE9duction"
    - "tax-free savings account (TFSA)" \u2192 "compte d'\xE9pargne libre d'imp\xF4t (CELI)"
    - "payroll deductions" \u2192 "retenues sur la paie"
    - "registered retirement savings plan (RRSP)" \u2192 "r\xE9gime enregistr\xE9 d'\xE9pargne-retraite (REER)"`
  ],
  [RubricKey.NoCommentary]: ["Response contains no preamble or explanatory text beyond what was requested."],
  [RubricKey.PreserveHtmlStructure]: ["Original HTML structure, attributes, and formatting are maintained where possible."],
  [RubricKey.CharacterLimit]: ["Response must be under the specified character limit."]
};

// src/app/services/ai/prompt.service.ts
var AiPromptService = class _AiPromptService {
  composePrompt(config) {
    const parts = [
      config.role ? `### Role
${RoleFragment[config.role]}` : null,
      config.task ? `### Task
${config.task}` : null,
      this.formatRubric(config.rubric),
      config.output ? `### Output requirements
${OutputFragment[config.output]}` : null,
      config.jsonSchema ? `### JSON schema
${config.jsonSchema}` : null
    ].filter((p) => p);
    return parts.join("\n\n");
  }
  formatRubric(rubricKeys) {
    if (!rubricKeys?.length)
      return null;
    const criteria = rubricKeys.flatMap((key) => RubricFragment[key]);
    return `### Quality criteria
${criteria.map((c, i) => `${i + 1}. ${c}`).join("\n")}`;
  }
  static \u0275fac = function AiPromptService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AiPromptService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AiPromptService, factory: _AiPromptService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AiPromptService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/services/ai/openrouter.service.ts
var OpenRouterService = class _OpenRouterService {
  http = inject(HttpClient);
  aiPromptService = inject(AiPromptService);
  htmlNormalizationService = inject(HtmlNormalizationService);
  apiUrl = environment.openrouterFunctionUrl;
  state = signal({
    loading: false,
    error: null,
    respondingModel: null
  }, ...ngDevMode ? [{ debugName: "state" }] : (
    /* istanbul ignore next */
    []
  ));
  // Returns full OpenRouter response
  sendToAI(config, content, preferredModel, temperature = 0, keyType = "paid") {
    return __async(this, null, function* () {
      const systemPrompt = yield this.aiPromptService.composePrompt(config);
      console.log(systemPrompt);
      return this.sendRawPrompt(systemPrompt, content, preferredModel, temperature, keyType);
    });
  }
  // Sends the first precomposed system/user pair, as used by alert rewriting.
  sendMessages(messages, preferredModel, temperature = 0, keyType = "paid") {
    return __async(this, null, function* () {
      const systemPrompt = messages.find((message) => message.role === "system")?.content ?? "";
      const content = messages.find((message) => message.role === "user")?.content ?? "";
      if (!systemPrompt)
        throw new Error("A system message is required.");
      const response = yield this.sendRawPrompt(systemPrompt, content, preferredModel, temperature, keyType);
      return {
        text: response.choices?.[0]?.message?.content ?? "",
        usedModel: response.model ?? preferredModel ?? "unknown"
      };
    });
  }
  // Returns just the text from the OpenRouter response
  getTextFromAI(config, content, preferredModel, temperature = 0, keyType = "paid") {
    return __async(this, null, function* () {
      const response = yield this.sendToAI(config, content, preferredModel, temperature, keyType);
      const responseContent = response.choices?.[0]?.message?.content ?? "";
      if (config.output === OutputKey.Html) {
        this.htmlNormalizationService.aiCleanup(responseContent);
        yield this.htmlNormalizationService.formatHtml(responseContent);
      }
      return responseContent;
    });
  }
  // Centralizes OpenRouter fallbacks, transport, and request state.
  sendRawPrompt(systemPrompt, content, preferredModel, temperature = 0, keyType = "paid") {
    return __async(this, null, function* () {
      this.state.set({ loading: true, error: null, respondingModel: null });
      const MAX_FALLBACK_MODELS = 3;
      const models = (preferredModel ? [preferredModel, ...AI_FREE_MODELS.filter((model) => model !== preferredModel)] : AI_FREE_MODELS).slice(0, MAX_FALLBACK_MODELS);
      try {
        const response = yield firstValueFrom(this.http.post(this.apiUrl, {
          models,
          systemPrompt,
          content,
          temperature,
          keyType
        }));
        this.state.set({ loading: false, error: null, respondingModel: response.model ?? null });
        return response;
      } catch (error) {
        const message = error instanceof Error ? error.message : "Unknown error";
        this.state.set({ loading: false, error: message, respondingModel: null });
        throw error;
      }
    });
  }
  static \u0275fac = function OpenRouterService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OpenRouterService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OpenRouterService, factory: _OpenRouterService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OpenRouterService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  RoleKey,
  OutputKey,
  RubricKey,
  InventoryPromptKey,
  PagePromptKey,
  ProblemPromptKey,
  RoleFragment,
  OutputFragment,
  RubricFragment,
  AiPromptService,
  OpenRouterService
};
//# sourceMappingURL=chunk-APIICZKQ.js.map
