import {
  HtmlNormalizationService
} from "./chunk-FO2K6X5T.js";
import {
  environment
} from "./chunk-AGPMTYRP.js";
import {
  HttpClient
} from "./chunk-MDI4WJGA.js";
import {
  Injectable,
  firstValueFrom,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-KRHY6Z2H.js";
import {
  __async,
  __spreadProps,
  __spreadValues
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
  ProblemPromptKey2["AlertIssues"] = "aiPrompt.problem.alertIssues";
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
  [RubricKey.Description]: "Description: The description must capture the main topic and use terminology found in the content.",
  [RubricKey.DescriptionEN]: "English description: Must be between 130 and 160 characters (including spaces).",
  [RubricKey.DescriptionFR]: "French description: Must be concise but is permitted to be longer than the English version, up to a maximum of 275 characters (including spaces).",
  [RubricKey.Keywords]: 'Keywords: Provide 10 highly relevant words or short phrases directly extracted from or strongly implied by the content. Do NOT include "Canada Revenue Agency" or "Agence du revenu du Canada" in the keyword list.',
  [RubricKey.CraTermTranslations]: `Important CRA-specific translations:
    - "Canada Revenue Agency" \u2192 "Agence du revenu du Canada"
    - "income tax" \u2192 "imp\xF4t sur le revenu"
    - "benefits" \u2192 "prestations"
    - "tax return" \u2192 "d\xE9claration de revenus"
    - "GST/HST" \u2192 "TPS/TVH"
    - "business number" \u2192 "num\xE9ro d'entreprise"
    - "tax credit" \u2192 "cr\xE9dit d'imp\xF4t"
    - "deduction" \u2192 "d\xE9duction"
    - "tax-free savings account (TFSA)" \u2192 "compte d'\xE9pargne libre d'imp\xF4t (CELI)"
    - "registered retirement savings plan (RRSP)" \u2192 "r\xE9gime enregistr\xE9 d'\xE9pargne-retraite (REER)"`,
  [RubricKey.NoCommentary]: "Response contains no preamble or explanatory text beyond what was requested.",
  [RubricKey.PreserveHtmlStructure]: "Original HTML structure, attributes, and formatting are maintained where possible.",
  [RubricKey.CharacterLimit]: "Response must be under the specified character limit."
};

// src/app/services/ai/skill.service.ts
var SkillService = class _SkillService {
  manifestUrl = new URL("skills/manifest.json", document.baseURI);
  manifestBaseUrl = new URL(".", this.manifestUrl);
  manifestPromise = null;
  textCache = /* @__PURE__ */ new Map();
  getManifest() {
    return __async(this, null, function* () {
      this.manifestPromise ??= this.fetchJson(this.manifestUrl).then((manifest) => this.validateManifest(manifest));
      try {
        return yield this.manifestPromise;
      } catch (error) {
        this.manifestPromise = null;
        throw error;
      }
    });
  }
  resolveBindings(bindings, output) {
    return __async(this, null, function* () {
      if (!bindings.length) {
        return { bindings: [], skills: [], resources: [], warnings: [] };
      }
      const manifest = yield this.getManifest();
      const skillMap = new Map(manifest.skills.map((skill) => [skill.id, skill]));
      const loadedSkillIds = /* @__PURE__ */ new Set();
      const loadedResourcePaths = /* @__PURE__ */ new Set();
      const skills = [];
      const resources = [];
      const warnings = [];
      for (const binding of bindings) {
        const skill = skillMap.get(binding.id);
        if (!skill)
          throw new Error(`Skill not found in manifest: ${binding.id}`);
        this.validateOutputMode(skill, output);
        yield this.resolveSkill({
          skill,
          skillMap,
          includeOptionalReferences: binding.includeOptionalReferences === true,
          included: false,
          activePath: [],
          loadedSkillIds,
          loadedResourcePaths,
          skills,
          resources
        });
      }
      if (new Set(bindings.map((binding) => binding.id)).size !== bindings.length) {
        warnings.push("Duplicate prompt skill bindings were loaded once.");
      }
      return { bindings: [...bindings], skills, resources, warnings };
    });
  }
  resolveSkill(params) {
    return __async(this, null, function* () {
      const { skill, skillMap, includeOptionalReferences, included, activePath, loadedSkillIds, loadedResourcePaths, skills, resources } = params;
      if (activePath.includes(skill.id)) {
        throw new Error(`Circular skill dependency: ${[...activePath, skill.id].join(" -> ")}`);
      }
      if (loadedSkillIds.has(skill.id))
        return;
      loadedSkillIds.add(skill.id);
      skills.push(skill);
      const nextPath = [...activePath, skill.id];
      yield this.addResource(skill, "instructions", skill.skillMdPath, included, loadedResourcePaths, resources, true);
      for (const resourcePath of skill.defaultReferencePaths) {
        yield this.addResource(skill, "reference", resourcePath, included, loadedResourcePaths, resources);
      }
      if (includeOptionalReferences) {
        for (const resourcePath of skill.optionalReferencePaths) {
          yield this.addResource(skill, "optionalReference", resourcePath, included, loadedResourcePaths, resources);
        }
      }
      for (const resourcePath of skill.defaultAssetPaths) {
        yield this.addResource(skill, "asset", resourcePath, included, loadedResourcePaths, resources);
      }
      for (const includedSkillId of skill.includedSkillIds) {
        const includedSkill = skillMap.get(includedSkillId);
        if (!includedSkill)
          throw new Error(`Included skill not found in manifest: ${includedSkillId}`);
        yield this.resolveSkill(__spreadProps(__spreadValues({}, params), {
          skill: includedSkill,
          includeOptionalReferences: false,
          included: true,
          activePath: nextPath
        }));
      }
    });
  }
  addResource(skill, kind, resourcePath, included, loadedPaths, resources, stripFrontmatter = false) {
    return __async(this, null, function* () {
      const url = new URL(resourcePath, this.manifestBaseUrl);
      const cacheKey = url.toString();
      if (loadedPaths.has(cacheKey))
        return;
      let content = yield this.fetchText(url);
      if (stripFrontmatter)
        content = this.stripFrontmatter(content);
      loadedPaths.add(cacheKey);
      resources.push({
        skillId: skill.id,
        skillName: skill.name,
        kind,
        path: resourcePath,
        content,
        included
      });
    });
  }
  validateOutputMode(skill, output) {
    if (!skill.outputModes.length || skill.outputModes.includes("any"))
      return;
    const requestedMode = output.split(".").pop()?.toLowerCase();
    if (!requestedMode || !skill.outputModes.includes(requestedMode)) {
      throw new Error(`Skill ${skill.id} does not support the ${requestedMode ?? output} output mode.`);
    }
  }
  validateManifest(manifest) {
    if (!manifest || manifest.version !== 1 || !Array.isArray(manifest.skills)) {
      throw new Error("The AWS-AIDA skill manifest is invalid or unsupported.");
    }
    const ids = /* @__PURE__ */ new Set();
    for (const skill of manifest.skills) {
      if (!skill?.id || !skill.name || !skill.description || !skill.skillMdPath) {
        throw new Error("The AWS-AIDA skill manifest contains an incomplete skill entry.");
      }
      if (ids.has(skill.id))
        throw new Error(`Duplicate skill id in manifest: ${skill.id}`);
      ids.add(skill.id);
      skill.includedSkillIds ??= [];
      skill.defaultReferencePaths ??= [];
      skill.optionalReferencePaths ??= [];
      skill.defaultAssetPaths ??= [];
      skill.outputModes ??= [];
    }
    return manifest;
  }
  fetchJson(url) {
    return __async(this, null, function* () {
      const response = yield fetch(url);
      if (!response.ok)
        throw new Error(`Skill resource request failed (${response.status}): ${url.pathname}`);
      return response.json();
    });
  }
  fetchText(url) {
    return __async(this, null, function* () {
      const cacheKey = url.toString();
      if (!this.textCache.has(cacheKey)) {
        this.textCache.set(cacheKey, fetch(url).then((response) => {
          if (!response.ok)
            throw new Error(`Skill resource request failed (${response.status}): ${url.pathname}`);
          return response.text();
        }));
      }
      try {
        return yield this.textCache.get(cacheKey);
      } catch (error) {
        this.textCache.delete(cacheKey);
        throw error;
      }
    });
  }
  stripFrontmatter(content) {
    return content.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, "").trim();
  }
  static \u0275fac = function SkillService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SkillService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SkillService, factory: _SkillService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SkillService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/services/ai/prompt.service.ts
var AiPromptService = class _AiPromptService {
  skillService = inject(SkillService);
  composePrompt(config) {
    return __async(this, null, function* () {
      return (yield this.composePromptDetails(config)).prompt;
    });
  }
  composePromptDetails(config) {
    return __async(this, null, function* () {
      const resolvedSkills = yield this.skillService.resolveBindings(config.skills ?? [], config.output);
      const instructionResources = resolvedSkills.resources.filter((resource) => resource.kind !== "asset");
      const assetResources = resolvedSkills.resources.filter((resource) => resource.kind === "asset");
      if (config.jsonSchema && assetResources.length) {
        throw new Error("Prompt configuration cannot define jsonSchema when an attached skill supplies an output asset.");
      }
      const parts = [
        config.role ? `### Role
${RoleFragment[config.role]}` : null,
        config.task ? `### Task
${config.task}` : null,
        this.formatRubric(config.rubric),
        ...instructionResources.map((resource) => this.formatSkillResource(resource)),
        config.output ? `### Output requirements
${OutputFragment[config.output]}` : null
      ].filter((p) => p);
      if (config.output === OutputKey.Json && config.jsonSchema) {
        parts.push(`### JSON schema
${config.jsonSchema}`);
      }
      parts.push(...assetResources.map((resource) => this.formatSkillResource(resource)));
      const prompt = parts.join("\n\n");
      return {
        prompt,
        loadedSkills: resolvedSkills.skills.map((skill) => skill.id),
        loadedResources: resolvedSkills.resources.map((resource) => resource.path),
        estimatedTokens: Math.ceil(prompt.length / 4),
        warnings: resolvedSkills.warnings
      };
    });
  }
  formatRubric(rubricKeys) {
    if (!rubricKeys?.length)
      return "";
    const criteria = rubricKeys.map((key) => RubricFragment[key]);
    return `### Quality criteria
${criteria.map((c, i) => `${i + 1}. ${c}`).join("\n")}`;
  }
  formatSkillResource(resource) {
    const relationship = resource.included ? "Included" : "Activated";
    if (resource.kind === "instructions") {
      return `### ${relationship} skill: ${resource.skillName}
${resource.content}`;
    }
    const label = resource.kind === "asset" ? "Skill asset" : resource.kind === "optionalReference" ? "Optional skill reference" : "Skill reference";
    const fileName = resource.path.split("/").pop() || resource.path;
    return `### ${label}: ${fileName}
${resource.content}`;
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

// src/app/common/ai-models.config.ts
var AI_FREE_MODELS = ["nvidia/nemotron-3-ultra-550b-a55b:free", "openai/gpt-oss-20b:free", "nvidia/nemotron-3-super-120b-a12b:free", "openrouter/free"];
var AI_PAID_MODELS = [
  { value: "openai/gpt-oss-20b", price: "$" },
  { value: "deepseek/deepseek-v4-flash", price: "$" },
  { value: "deepseek/deepseek-v4-pro", price: "$$" },
  { value: "google/gemini-3.1-flash-lite", price: "$$" },
  { value: "openai/gpt-5.4-mini", price: "$$$" }
];

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
  sendToAI(config, content, preferredModel, temperature = 0) {
    return __async(this, null, function* () {
      const systemPrompt = yield this.aiPromptService.composePrompt(config);
      console.log(systemPrompt);
      return this.sendRawPrompt(systemPrompt, content, preferredModel, temperature);
    });
  }
  // Sends an already-composed system/user message pair. Specialized runtimes,
  // such as alert rewriting, use this to preserve their tuned prompt assembly.
  sendMessages(messages, preferredModel, temperature = 0) {
    return __async(this, null, function* () {
      const systemPrompt = messages.find((message) => message.role === "system")?.content ?? "";
      const content = messages.find((message) => message.role === "user")?.content ?? "";
      if (!systemPrompt)
        throw new Error("A system message is required.");
      const response = yield this.sendRawPrompt(systemPrompt, content, preferredModel, temperature);
      return {
        text: response.choices?.[0]?.message?.content ?? "",
        usedModel: response.model ?? preferredModel ?? "unknown"
      };
    });
  }
  // Returns just the text from the OpenRouter response
  getTextFromAI(config, content, preferredModel, temperature = 0) {
    return __async(this, null, function* () {
      const response = yield this.sendToAI(config, content, preferredModel, temperature);
      const responseContent = response.choices?.[0]?.message?.content ?? "";
      if (config.output === OutputKey.Html) {
        this.htmlNormalizationService.aiCleanup(responseContent);
        yield this.htmlNormalizationService.formatHtml(responseContent);
      }
      return responseContent;
    });
  }
  sendRawPrompt(systemPrompt, content, preferredModel, temperature = 0) {
    return __async(this, null, function* () {
      this.state.set({ loading: true, error: null, respondingModel: null });
      const MAX_FALLBACK_MODELS = 3;
      const models = (preferredModel ? [preferredModel, ...AI_FREE_MODELS.filter((model) => model !== preferredModel)] : AI_FREE_MODELS).slice(0, MAX_FALLBACK_MODELS);
      try {
        const response = yield firstValueFrom(this.http.post(this.apiUrl, {
          models,
          systemPrompt,
          content,
          temperature
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
  AI_FREE_MODELS,
  AI_PAID_MODELS,
  OpenRouterService
};
//# sourceMappingURL=chunk-EQGCRKEQ.js.map
