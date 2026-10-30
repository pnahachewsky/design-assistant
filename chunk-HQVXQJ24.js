import {
  OutputKey,
  PagePromptKey,
  ProblemPromptKey,
  RoleKey,
  RubricKey
} from "./chunk-APIICZKQ.js";

// src/app/common/prompts/reference.prompt.ts
var AlertIssuesInstructions = `{
  "inputs": {
    "alerts": "Array of alert HTML strings in source order. Each item is the full alert container.",
    "pageSignals": {
      "optional": true,
      "description": "Structured page-level hints such as title, h1, pageTypeSignal, introSnippet, and h2Headings."
    },
    "alertPlacementContext": {
      "optional": true,
      "description": "Structured per-alert placement hints such as is_before_first_h2, position_percent_in_main, nearest_h2_above, nearest_h2_below, section snippets, and alert clustering."
    },
    "alertSignals": {
      "optional": true,
      "description": "Precomputed per-alert structural signals such as alert_type, heading metadata, paragraph count, link count, links, hidden-content flags, and adjacency flags."
    }
  },
  "workflow": [
    { "step": 1,
      "name": "enumerate_alerts",
      "instruction": "Analyze every alert in the alerts array. Use array order as alert_index, starting at 1."
    },
    { "step": 2,
      "name": "use_structured_context",
      "instruction": "Use pageSignals as page-level evidence when present. For each alert, use the alertPlacementContext and alertSignals objects with the same alert_index as primary evidence. If structured context conflicts with a weak inference from raw HTML, prefer the structured context."
    },
    { "step": 3,
      "name": "check_simple_issues",
      "instruction": "For each alert, evaluate every simple issue category independently."
    },
    { "step": 4,
      "name": "check_complex_issues",
      "instruction": "For each alert, evaluate every complex issue category independently."
    }
  ],
  "simpleIssueCategories": [
    { "name": "Misuse",
      "rule": "Do not use alerts for standard process steps, low-risk warnings, routine information, or emphasis. Use pageTypeSignal, title, and h1 to assess page-wide appropriateness."
    },
    { "name": "Too wordy",
      "rule": "Alerts must be short and easy to scan. Flag multiple paragraphs, avoidable detail, or more than 2 sentences unless the sentences are short. Do not flag based on character count alone; use paragraph_count and text_length_chars as supporting evidence. For longer content, recommend a short summary linking to the full details."
    },
    { "name": "Generic titles",
      "rule": "Flag headings such as Note, Info, Important, or New. Alert titles must be descriptive."
    },
    { "name": "Unclear impact",
      "rule": "The alert must explain any consequence that is not obvious to the user, and not just state a fact."
    },
    { "name": "Outdated",
      "rule": "Flag past dates, expired notices, or resolved events. Alerts are temporary."
    },
    { "name": "Missing heading",
      "rule": "Alerts must contain an appropriate heading pattern when a heading is needed for scanability and context. Use has_heading, heading_level, heading_source, and heading_tag as evidence. Recommend a descriptive heading and do not suggest generic labels such as Note, Important, Info, or New."
    },
    { "name": "Wrong type",
      "rule": "The alert type must match the severity; use alert_type as evidence. For example, use alert-info (blue) for updates, clarifications, delays, expected outages; use alert-warning (yellow/orange) for unexpected outages, serious service disruptions or termination, possible consequences of an action or inaction; use alert-danger (red) only rarely, for situations that could place someone in danger, or an issue that could cause them to be unable to complete their task."
    },
    { "name": "Hidden content",
      "rule": "Do not use accordions, expand-collapse patterns, or hidden content inside alerts. Alert content must be visible; use has_hidden_content as evidence."
    },
    { "name": "Wrong component",
      "rule": "Do not use alerts for content better handled by another component, such as labels for New items. These alerts should usually be removed."
    },
    { "name": "Too many links",
      "rule": "Limit alerts to one primary link when possible. Use link_count, has_multiple_links, and links as evidence and for link-related recommendations."
    },
    { "name": "Wrong placement",
      "rule": "Flag only when an alert applies to specific content but is placed globally or far from the relevant section. Use h2Headings, nearest_h2_above, nearest_h2_below, is_before_first_h2, position_percent_in_main, and nearby section snippets as supporting evidence. Do not flag an alert solely because it appears before the first substantive section."
    },
    { "name": "Alert overload",
      "rule": "Flag multiple stacked or clustered alerts that may create alert fatigue. Use the full set of placement objects, previous_sibling_is_alert, next_sibling_is_alert, and adjacent_alert_cluster_size to assess clustering."
    },
    { "name": "Low relevance",
      "rule": "On home, landing, or broad overview pages, alerts should apply to more than half of the audience. Use pageTypeSignal, title, and h1 to assess whether an alert is narrowly targeted relative to the page."
    },
    { "name": "Incorrect hierarchy",
      "rule": "Alert headings must follow the heading structure of the page (e.g., there should never be an H4 after an H2). Use has_heading, heading_level, heading_source, heading_tag, h2Headings, nearest_h2_above, and nearest_h2_below to compare the alert heading pattern with nearby page headings and section position, not just the alert markup in isolation."
    },
    { "name": "Nothing actionable",
      "rule": "If no next-step link exists, flag the alert to confirm that none is needed or whether it needs to be deleted and the information added to the page instead."
    }
  ],
  "complexIssueCategories": [
    { "name": "Focus order",
      "rule": "Ensure the alert's logical reading order is preserved and not skipped by assistive technologies."
    },
    { "name": "Content clarity",
      "rule": "Use plain language and keep the reading level around Grade 6-8."
    },
    { "name": "Non-text content",
      "rule": "Images and icons need descriptive alternatives."
    },
    { "name": "Missing alert semantics",
      "rule": "Flag visually styled alerts whose alert or notice purpose is not programmatically identifiable to assistive technologies. Do not use this category for missing headings or defects covered by another category. Recommend design-system review only. Do not recommend role=alert, role=status, aria-live, or any other unapproved semantic markup for static content."
    },
    { "name": "Accessibility/code",
      "rule": "Flag accessibility or markup defects not covered by another issue category. Do not flag a heading solely because its visual heading class differs from its semantic heading tag. This is acceptable when the tag follows the page hierarchy; classes such as h4 may intentionally control appearance."
    }
  ],
  "outputRules": {
    "requirements": [
      "Include the alert number in the description, for example: Alert 2: ...",
      "Emit a separate issue item for every category that applies to each alert."
    ]
  }
}`;

// src/app/common/prompts/problems.prompts.ts
var ProblemPrompts = {
  [ProblemPromptKey.AlertsProblems]: {
    role: RoleKey.ContentDesigner,
    task: `Analyze the reportable alerts in the supplied page context and identify applicable content design, accessibility, and markup issues.
Return issue reports only. Do not rewrite alert HTML.

### Analysis instructions
${AlertIssuesInstructions}`,
    rubric: [],
    output: OutputKey.Json,
    jsonSchema: `{
  "type": "object",
  "required": ["issues"],
  "properties": {
    "issues": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "alert_index",
          "issue_category",
          "description",
          "recommendation",
          "severity"
        ],
        "properties": {
          "alert_index": { "type": "integer", "minimum": 1 },
          "issue_category": { "type": "string" },
          "description": { "type": "string" },
          "recommendation": { "type": "string" },
          "severity": { "type": "string", "enum": ["High", "Medium", "Low"] }
        }
      }
    }
  }
}`,
    available: false
  },
  [ProblemPromptKey.AlertsRewrite]: {
    role: RoleKey.ContentDesigner,
    task: "Analyze the reportable alerts in the supplied page context and identify applicable content design, accessibility, and markup issues.",
    rubric: [RubricKey.NoCommentary],
    output: OutputKey.Json,
    available: false
  },
  [ProblemPromptKey.TranslateIssueDetails]: {
    role: RoleKey.Translator,
    task: `Translate only the description and recommendation values in the supplied JSON from English into Canadian French.
Return only valid JSON with this exact shape: {"items":[{"translation_id":"1","description":"...","recommendation":"..."}]}.
Preserve every translation_id exactly. Do not add, remove, combine, split, or reorder items.
Preserve HTML tags and attributes, URLs, code, placeholders, CSS classes, ARIA attributes, and quoted source text exactly.`,
    rubric: [],
    output: OutputKey.Json,
    jsonSchema: `{
  "type": "object",
  "required": ["items"],
  "properties": {
    "items": {
      "type": "array",
      "items": {
        "type": "object",
        "required": ["translation_id", "description", "recommendation"],
        "properties": {
          "translation_id": { "type": "string" },
          "description": { "type": "string" },
          "recommendation": { "type": "string" }
        }
      }
    }
  }
}`
  }
};

// src/app/common/prompts/page.prompts.ts
var PagePrompts = {
  [PagePromptKey.AlertRewrite]: {
    role: RoleKey.ContentDesigner,
    task: "Rewrite the supplied alerts, using identified issues where available, preserving valid content and returning safe alert replacements.",
    rubric: [RubricKey.NoCommentary],
    output: OutputKey.Json,
    available: true
  },
  [PagePromptKey.Headings]: {
    role: RoleKey.ContentDesigner,
    task: `Structure content into clear, hierarchical headings at h1, h2, h3 and more rarely h4 and h5 levels to improve scannability of the tasks on the page.
Reorganize content between sections and rewrite where necessary to fit the new semantic structure. Avoid rewriting where possible to keep text like the original.
Guidelines: 
Make sure the H1 accurately reflects the content of the whole page.
Make sure other headings (for example, H2, H3, etc.) accurately describe the content of their section.
If search terms are provided, try to reflect common terms in the H1 for best SEO practices.
When writing a heading or subheading, make sure that it:
\xB7 Gives a clear idea of what follows.
\xB7 Is short and contains no unnecessary words.
\xB7 Contains the most relevant terms at the beginning.
Also ensure that you are meeting the following style requirements:
\xB7 Do not include punctuation in headings.
\xB7 Headings should not be questions \u2013 avoid the use of FAQ patterns.
When thinking of the hierarchy of the headings, apply the following concepts of good information architecture:
\xB7 Keep the page structure consistent, logical and straightforward.
\xB7 Categorize the content into tasks the user of the page can complete or things they need to learn about.
\xB7 Prioritize the content so the most important tasks are easiest to find.
\xB7 Consider the logical order in which the user of the page will need information as they are learning how to complete the task, giving them information gradually.
\xB7 If there are multiple tasks on the page, consider which tasks the user needs to complete or understand before they begin another task, and order the headings accordingly.
\xB7 Do not duplicate sections.
Tone: use an informative tone while addressing the user directly. Phrase headings where possible as tasks the user of the page can complete or learn about in that section.
Return only updated HTML code with no other commentary.`,
    rubric: [RubricKey.NoCommentary, RubricKey.PreserveHtmlStructure],
    output: OutputKey.Html
  },
  [PagePromptKey.Doormats]: {
    role: RoleKey.ContentDesigner,
    task: `Writing clear and easy-to-differentiate navigation options for pages with links to different services or tasks.
Write navigation links as "doormats", a convention that includes a link and description.
You may be asked to create a single doormat, or to create a set of doormats based on supplied content, or to refine a set of supplied doormat links to meet best practices around style and length restrictions.
Doormat style length and punctuation requirements:
\xB7 Link Title: Ideally under 35 characters, maximum 75 characters, no punctuation at the end.
\xB7 Short description: Ideally under 100 characters, maximum 120 characters, no punctuation, no period.
Best Practices:
\xB7 Link Title: Must be descriptive, unique, and distinguishable from other link titles on the page. Avoid vague terms, duplication, and unnecessary words.
\xB7 Short description: The description should describe the linked page concisely, including what to expect when clicking on the link title. It should, however, avoid repeating text from the title. It can be:
  o A list of short phrases indicating tasks that can be completed on the linked page.
  o A list of keywords, separated by commas that would generally correspond to the link titles of doormats of the navigation page it links to, or h2s of a content page.
If one of the 2 above styles is used for a doormat description, it should generally match the other doormats on that navigation page.
In some exceptional cases a doormat can be written as a sentence if it is hard to describe in a set of phrases, but this would only apply to a specific doormat, not all doormats on the page. A sentence doormat should not have a period or other punctuation at the end.
Avoid promotional language, introductory phrases, or redundant content.
Maintain consistent capitalization, formatting, and style (e.g., Topics, Products/Services, Actions, Audience Groups).
Prompt reminders:
\xB7 Ask the user for the topic and purpose of the page if more context is needed.
\xB7 If useful to the refinement of the navigation links, request additional details such as target audience, key keywords, or specific tone/style (e.g., formal, casual, technical).
Remove Placeholders: Only include doormat(s) that have been fully customized based on user input. Do not include generic or placeholder text.
Provide a Preview: Display the suggested doormat(s) in a clear, easy-to-read list for the user to review and adjust as needed.
Doormat examples:
1. Title: Tax-free savings accounts Description: Tax-free savings accounts, registered savings plans, pooled pension plans, plan administrators.
2. Title: Apply for a clearance certificate Description: Required for final tax returns, legal representatives, estate executors, outstanding balances.
3. Title: Renewable energy grants Description: Government grants, solar panel incentives, wind energy funding, green energy initiatives.
Return only updated HTML code with no other commentary.`,
    rubric: [RubricKey.NoCommentary, RubricKey.PreserveHtmlStructure],
    output: OutputKey.Html
  },
  [PagePromptKey.PlainLanguage]: {
    role: RoleKey.ContentDesigner,
    task: `Your primary function is to help web publishers rewrite technical content to be easy to understand for the general public.
Your task is to convert text into content which is aimed at improving:
\xB7 Comprehension
\xB7 Flow
\xB7 Logical transitions
Apply the Canada.ca Content Style Guide rules to the content and tailor it for a web page layout.
Avoid the passive voice. Use active voice to inform the user in a direct manner.
Use action verbs, preferably at the beginning of your sentences.
Prioritize the use of positive constructions over negative ones whenever possible.
Write in short sentences that do not run-on.
Use simple, direct phrasing.
Aim to structure the content to have a logical flow like a story would with a beginning, middle, and end, providing a task resolution.
Lists must have a lead-in sentence.
Bullet points should be short and convey one idea.
When rewriting content do not remove important details or instructions.
Reorganize ideas and arrange them in stepped processes, logical hierarchies or for clarity of cause and effect.
Make sure to use the inverted pyramid concept when organizing information.
Examples of using action verbs, preferably at the beginning of your sentences:
\xB7 "Report your business income on line x of the form"
\xB7 "Refer to the guide for more instructions on claiming a deduction"
Return only updated HTML code with no other commentary.`,
    rubric: [RubricKey.NoCommentary, RubricKey.PreserveHtmlStructure],
    output: OutputKey.Html
  },
  [PagePromptKey.Tense]: {
    role: RoleKey.HTMLeditor,
    task: `Your only task is to rewrite the tense of all human-readable sentences in the HTML content below to {{TARGET_TENSE}} tense.

# PRESERVE EXACTLY (character-for-character, unchanged):
- All HTML tags, attributes, attribute values, classes, ids, and inline styles
- All whitespace, line breaks, and indentation
- URLs, href/src values, code samples, <script>/<style> contents, HTML entities, numbers, dates, proper nouns
- Direct quotations attributed to a speaker (leave their original tense intact)

# CONTENT RULES:
- Change verb tense only. Do not reword, rephrase, correct grammar, fix typos, summarize, or expand any sentence beyond what the tense change itself requires.
- Do not add, remove, or reorder any content, tags, or attributes.
- If text has no verb or unclear tense (headings, labels, button text, standalone nouns), leave it unchanged.
- Apply tense consistently across the entire document \u2014 every text node, including alt text, table cells, and nested elements, not just the first paragraph.`,
    rubric: [RubricKey.NoCommentary, RubricKey.PreserveHtmlStructure],
    output: OutputKey.Html,
    available: true
  }
};

export {
  ProblemPrompts,
  PagePrompts
};
//# sourceMappingURL=chunk-HQVXQJ24.js.map
