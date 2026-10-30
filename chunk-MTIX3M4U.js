// src/app/common/ai-models.config.ts
var AI_FREE_MODELS = [
  "nvidia/nemotron-3-ultra-550b-a55b:free",
  "openrouter/free",
  "openai/gpt-oss-20b:free",
  "nvidia/nemotron-3.5-lightning:free",
  "nvidia/nemotron-3-super-120b-a12b:free"
];
var AI_DEFAULT_MODEL = "nvidia/nemotron-3-ultra-550b-a55b:free";
var AI_ALERT_TRANSLATION_MODEL = "openrouter/free";
var AI_PAID_MODELS = [
  { value: "openai/gpt-oss-20b", price: "$" },
  { value: "google/gemini-3.1-flash-lite", price: "$$" },
  { value: "deepseek/deepseek-v4-flash-latest", price: "$$" },
  { value: "openai/gpt-5.6-luna-pro", price: "$$" },
  { value: "openai/gpt-5-mini", price: "$$" },
  { value: "openai/gpt-5.4-mini", price: "$$$" },
  { value: "openrouter/auto", price: "$$$$" }
];

export {
  AI_FREE_MODELS,
  AI_DEFAULT_MODEL,
  AI_ALERT_TRANSLATION_MODEL,
  AI_PAID_MODELS
};
//# sourceMappingURL=chunk-MTIX3M4U.js.map
