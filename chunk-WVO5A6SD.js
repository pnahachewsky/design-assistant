import {
  InventoryPromptKey,
  OutputKey,
  RoleKey,
  RubricKey
} from "./chunk-IMZ3OWQV.js";

// src/app/common/prompts/inventory.prompts.ts
var InventoryPrompts = {
  [InventoryPromptKey.Metadata]: {
    role: RoleKey.SeoExpert,
    task: "Generate a new SEO meta description and a list of target keywords for a webpage in both English and French. The French and English versions should be closely aligned in meaning but localized appropriately, not just translated word-for-word.",
    rubric: [RubricKey.Description, RubricKey.DescriptionEN, RubricKey.DescriptionFR, RubricKey.Keywords, RubricKey.CraTermTranslations],
    output: OutputKey.Json,
    jsonSchema: `{
"en": {
"description": "string (120-160 chars)",
"keywords": ["string", "string", "string", "string", "string", "string", "string", "string", "string", "string"]
},
"fr": {
"description": "string (120-200 chars)",
"keywords": ["string", "string", "string", "string", "string", "string", "string", "string", "string", "string"]
}
}`
  },
  [InventoryPromptKey.Description]: {
    role: RoleKey.SeoExpert,
    task: "Generate a concise meta description in English for the following web page content. The description must capture the main topic and use terminology found in the content.",
    rubric: [RubricKey.CharacterLimit, RubricKey.NoCommentary],
    output: OutputKey.Json,
    jsonSchema: `{
  "title": "string (max 60 chars)",
  "description": "string (max 275 chars)",
  "keywords": ["string", "string", ...]
}`
  },
  [InventoryPromptKey.Keywords]: {
    role: RoleKey.SeoExpert,
    task: "Generate 10 meaningful, topic-specific meta keywords that are DIRECTLY EXTRACTED from or strongly implied by the content. Return only a comma separated list of keywords.",
    rubric: [RubricKey.CharacterLimit, RubricKey.NoCommentary],
    output: OutputKey.Text
  }
};

export {
  InventoryPrompts
};
//# sourceMappingURL=chunk-WVO5A6SD.js.map
