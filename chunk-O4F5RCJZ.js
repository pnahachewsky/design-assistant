import {
  OutputFragment,
  OutputKey,
  PagePromptKey,
  ProblemPromptKey,
  RoleKey,
  RubricKey
} from "./chunk-YJPJTEWV.js";

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

// src/app/common/prompts/alert-rewrite.examples.ts
var AlertRewriteExamples = [
  {
    id: "ex-001",
    alertType: "info",
    tags: ["housing", "gst", "rebate", "legislation", "policy-update", "missing-heading"],
    purposeTags: ["policy-caveat", "legislative-update", "missing-heading", "remove-boilerplate"],
    criteria: ["C2_too_wordy", "C4_missing_heading", "C7_too_vague"],
    egHeading: "Rebate details may change",
    egText: "The details provided on this rebate are based on proposed legislation and may change.",
    egHtml: '<section class="alert alert-info"><h2 class="h3">Rebate details may change</h2><p>The details provided on this rebate are based on proposed legislation and may change.</p></section>',
    notes: "Adds a descriptive heading, removes update/link boilerplate, and keeps the core policy caveat short and clear."
  },
  {
    id: "ex-002",
    alertType: "info",
    tags: ["tax", "slips", "filing", "cra-account", "action-required"],
    purposeTags: ["action-required", "account-service", "remove-process-detail", "replace-vague-heading"],
    criteria: ["C1_missing_next_step", "C2_too_wordy"],
    egHeading: "Finding your tax slips",
    egText: "If you do not see a tax slip in your CRA account when you file your 2024 tax return, use the slip provided by your issuer (such as your employer or financial institution).",
    egHtml: '<section class="alert alert-info"><h2 class="h3">Finding your tax slips</h2><p>If you do not see a tax slip in your CRA account when you file your 2024 tax return, use the slip provided by your issuer (such as your employer or financial institution).</p></section>',
    notes: "Replaces a vague process heading with a descriptive one, removes process detail, and gives a direct next step."
  },
  {
    id: "ex-003",
    alertType: "info",
    tags: ["wildfire", "disaster-support", "benefits", "tax-affairs"],
    purposeTags: ["support-info", "keep-support-link"],
    criteria: [],
    egHeading: "Support for Canadians affected by wildfires",
    egText: "If you've been impacted by wildfires, visit our disaster support page for information on managing your taxes and accessing benefit and credit payments during and after a disaster.",
    egHtml: `<section class="alert alert-info"><h2 class="h3">Support for Canadians affected by wildfires</h2><p>If you've been impacted by wildfires, visit our <a href="https://www.canada.ca/en/revenue-agency/corporate/about-canada-revenue-agency-cra/managing-tax-affairs-during-after-disaster.html">disaster support page</a> for information on managing your taxes and accessing benefit and credit payments during and after a disaster.</p></section>`,
    egLinks: [
      {
        id: "L1",
        text: "disaster support page",
        href: "https://www.canada.ca/en/revenue-agency/corporate/about-canada-revenue-agency-cra/managing-tax-affairs-during-after-disaster.html"
      }
    ],
    notes: "Shows a complete support alert with a descriptive heading, visible content, and one clear service link."
  },
  {
    id: "ex-004",
    alertType: "info",
    tags: ["business", "tariffs", "tax-relief", "support"],
    purposeTags: ["support-info", "missing-source-context", "standalone-action-link"],
    criteria: ["C4_missing_heading", "C7_too_vague"],
    egHeading: "Support for businesses in response to tariffs",
    egText: "Find the CRA's latest tariff-related tax relief measures and support for businesses.",
    egHtml: `<section class="alert alert-info"><h2 class="h3">Support for businesses in response to tariffs</h2><p>Find the CRA's latest tariff-related <a href="https://www.canada.ca/en/revenue-agency/services/support-difficult-situations/tax-relief-businesses-tariffs.html">tax relief measures and support for businesses</a>.</p></section>`,
    egLinks: [
      {
        id: "L1",
        text: "tax relief measures and support for businesses",
        href: "https://www.canada.ca/en/revenue-agency/services/support-difficult-situations/tax-relief-businesses-tariffs.html"
      }
    ],
    notes: "Original source text is unavailable. Shows a complete support alert with a descriptive heading and one service link."
  },
  {
    id: "ex-005",
    alertType: "info",
    tags: ["luxury-tax", "aircraft", "vessels", "legislation", "date-sensitive"],
    purposeTags: ["legislative-update", "date-sensitive", "remove-secondary-link", "reference-link"],
    criteria: ["C2_too_wordy", "C7_too_vague"],
    egHeading: "Removal of the luxury tax on sales of aircraft and vessels",
    egText: "The Government of Canada has proposed legislation to remove the luxury tax on sales of aircraft and vessels as of November 5, 2025. For more information: Notice LTN5, Luxury tax not payable on subject aircraft and subject vessels",
    egHtml: '<section class="alert alert-info"><h2 class="h3">Removal of the luxury tax on sales of aircraft and vessels</h2><p>The Government of Canada has proposed legislation to remove the luxury tax on sales of aircraft and vessels as of November 5, 2025.</p><p>For more information: <a href="https://www.canada.ca/content/canadasite/en/revenue-agency/services/forms-publications/publications/ltn5/ltn5-luxury-tax-not-payable-subject-aircraft-and-vessels.html">Notice LTN5, Luxury tax not payable on subject aircraft and subject vessels</a></p></section>',
    egLinks: [
      {
        id: "L2",
        text: "Notice LTN5, Luxury tax not payable on subject aircraft and subject vessels",
        href: "https://www.canada.ca/content/canadasite/en/revenue-agency/services/forms-publications/publications/ltn5/ltn5-luxury-tax-not-payable-subject-aircraft-and-vessels.html"
      }
    ],
    notes: "Shortens a legislative update, explains the current impact, removes a secondary background link, and keeps one primary reference link."
  },
  {
    id: "ex-006",
    alertType: "info",
    tags: ["business", "gst", "hst", "access-code", "cra-account", "filing"],
    purposeTags: ["account-service", "action-required", "standalone-action-link", "missing-heading"],
    criteria: ["C1_missing_next_step", "C4_missing_heading"],
    egHeading: "Get your access code in your CRA account",
    egText: "Business owners can get their GST/HST access code in their CRA account (My Business Account). How to get an access code",
    egHtml: '<section class="alert alert-info"><h2 class="h3">Get your access code in your CRA account</h2><p>Business owners can get their GST/HST access code in their CRA account (My Business Account).</p><p><a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/file-gst-hst-return/how-file/get-gst-hst-access-code.html#hw_gt">How to get an access code</a></p></section>',
    egLinks: [
      {
        id: "L1",
        text: "How to get an access code",
        href: "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/file-gst-hst-return/how-file/get-gst-hst-access-code.html#hw_gt"
      }
    ],
    notes: "Adds a task-oriented heading and uses a standalone action-link paragraph without extra lead-in text."
  },
  {
    id: "ex-007",
    alertType: "warning",
    tags: ["postal-service", "labour-disruption", "service-update", "mail-service"],
    purposeTags: ["service-update", "status-change", "remove-secondary-link", "shorten-alert"],
    criteria: ["C2_too_wordy", "C7_too_vague"],
    egHeading: "Canada Post strike paused",
    egText: "Canada Post has reached tentative agreements with its union. Mail service has resumed.",
    egHtml: '<section class="alert alert-warning"><h2 class="h3">Canada Post strike paused</h2><p>Canada Post has reached tentative agreements with its union. Mail service has resumed.</p></section>',
    egLinks: [],
    notes: "Shortens a resolved labour-disruption status update and removes a secondary background link because the current service status is stated directly."
  },
  {
    id: "ex-008",
    alertType: "warning",
    tags: ["dtc", "disability-tax-credit", "processing-delay", "form-t2201", "service-standard"],
    purposeTags: ["service-delay", "action-required", "standalone-action-link", "remove-secondary-link"],
    criteria: ["C1_missing_next_step", "C4_missing_heading"],
    egHeading: "DTC processing delay",
    egText: "The CRA is experiencing delays in processing Form T2201 Disability Tax Credit Certificate. Check CRA processing times",
    egHtml: '<section class="alert alert-warning"><h2 class="h3">DTC processing delay</h2><p>The CRA is experiencing delays in processing Form T2201 Disability Tax Credit Certificate.</p><p><a href="https://www.canada.ca/en/revenue-agency/corporate/contact-information/check-cra-processing-times.html">Check CRA processing times</a>.</p></section>',
    egLinks: [
      {
        id: "L1",
        text: "Check CRA processing times",
        href: "https://www.canada.ca/en/revenue-agency/corporate/contact-information/check-cra-processing-times.html"
      }
    ],
    notes: "Uses a warning alert for a service delay and provides one clear standalone action link while removing secondary account-status detail."
  },
  {
    id: "ex-009",
    alertType: "info",
    tags: ["benefits", "gst", "hst", "groceries", "essentials", "payment", "date-sensitive"],
    purposeTags: ["benefit-change", "date-sensitive", "multiple-detail-links", "new-program"],
    criteria: ["C1_missing_next_step", "C2_too_wordy"],
    egHeading: "New Canada Groceries and Essentials Benefit",
    egText: "The Canada Groceries and Essentials Benefit will replace the GST/HST credit in July 2026. An additional one-time GST/HST credit top-up payment will be issued starting on June 5, 2026 to recipients who qualify. For details: Groceries and Essentials benefit One-time GST/HST payment",
    egHtml: '<section class="alert alert-info"><h2 class="h3">New Canada Groceries and Essentials Benefit</h2><p>The Canada Groceries and Essentials Benefit will replace the GST/HST credit in July 2026. An additional one-time GST/HST credit top-up payment will be issued starting on June 5, 2026 to recipients who qualify.</p><p>For details:</p><ul class="list-unstyled"><li><a href="https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-groceries-essentials-benefit.html">Groceries and Essentials benefit</a></li><li><a href="https://www.canada.ca/en/revenue-agency/services/child-family-benefits/gst-hst-credit/how-much/one-time-top-up.html">One-time GST/HST payment</a></li></ul></section>',
    egLinks: [
      {
        id: "L1",
        text: "Groceries and Essentials benefit",
        href: "https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-groceries-essentials-benefit.html"
      },
      {
        id: "L2",
        text: "One-time GST/HST payment",
        href: "https://www.canada.ca/en/revenue-agency/services/child-family-benefits/gst-hst-credit/how-much/one-time-top-up.html"
      }
    ],
    notes: "Keeps the alert short while using an unstyled list for two necessary final detail links after one lead-in paragraph."
  },
  {
    id: "ex-010",
    alertType: "warning",
    tags: ["benefits", "disinformation", "fraud-awareness", "payments", "official-sources"],
    purposeTags: ["fraud-warning", "correction", "official-source-warning", "missing-heading"],
    criteria: ["C4_missing_heading", "C7_too_vague"],
    egHeading: "Beware of false information online",
    egText: "There is false information online about a new one-time payment of $680 from the Government of Canada. This payment does not exist. To avoid disinformation about any benefits or payments, always check official government web pages.",
    egHtml: '<section class="alert alert-warning"><h2 class="h3">Beware of false information online</h2><p>There is false information online about a new one-time payment of $680 from the Government of Canada. This payment does not exist. To avoid disinformation about any benefits or payments, always check official government web pages.</p></section>',
    egLinks: [],
    notes: "Uses a warning alert for disinformation, adds a descriptive heading, and states the correction directly."
  },
  {
    id: "ex-011",
    alertType: "warning",
    tags: ["business", "registration", "business-number", "program-account", "service-change", "date-sensitive"],
    purposeTags: ["service-change", "date-sensitive", "action-required", "standalone-action-link"],
    criteria: ["C1_missing_next_step", "C4_missing_heading"],
    egHeading: "Business registration by phone is ending",
    egText: "As of November 5, 2026, you can no longer register a business number (BN) or CRA program account by phone. You must register using Business Registration Online (BRO). Learn more: Business registration online",
    egHtml: '<section class="alert alert-warning"><h2 class="h3">Business registration by phone is ending</h2><p>As of November 5, 2026, you can no longer register a business number (BN) or CRA program account by phone. You must register using Business Registration Online (BRO).</p><p>Learn more: <a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/business-registration/business-number-program-account/how-register/resident.html">Business registration online</a></p></section>',
    egLinks: [
      {
        id: "L1",
        text: "Business registration online",
        href: "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/business-registration/business-number-program-account/how-register/resident.html"
      }
    ],
    notes: "Uses a warning alert for a service-channel change and gives the required online next step with one primary link."
  },
  {
    id: "ex-012",
    alertType: "info",
    tags: ["excise-tax", "fuel", "legislation", "rates", "technical-information"],
    purposeTags: ["legislative-update", "technical-notice", "remove-secondary-link", "standalone-action-link"],
    criteria: ["C1_missing_next_step", "C4_missing_heading"],
    egText: "The Government of Canada intends to reduce the excise tax rates on some types of fuel. Review the proposed excise tax rates",
    egHtml: '<section class="alert alert-info"><p>The Government of Canada intends to reduce the excise tax rates on some types of fuel.</p><p><a href="https://www.canada.ca/content/canadasite/en/revenue-agency/services/tax/technical-information/excise-taxes-special-levies/excise-taxes-special-levies-notices/etsl82-proposed-temporary-rate-reductions-excise-tax-on-certain-types-fuel.html">Review the proposed excise tax rates</a></p></section>',
    egLinks: [
      {
        id: "L2",
        text: "Review the proposed excise tax rates",
        href: "https://www.canada.ca/content/canadasite/en/revenue-agency/services/tax/technical-information/excise-taxes-special-levies/excise-taxes-special-levies-notices/etsl82-proposed-temporary-rate-reductions-excise-tax-on-certain-types-fuel.html"
      }
    ],
    notes: "Uses concise legislative-update wording, removes a secondary announcement link, and keeps a separate action-link paragraph for the technical notice."
  },
  {
    id: "ex-013",
    alertType: "info",
    tags: ["tax-return", "filing", "cra-account", "online-services", "action-required"],
    purposeTags: ["online-service", "action-required", "duplicate-link-cleanup", "standalone-action-link"],
    criteria: ["C1_missing_next_step", "C4_missing_heading"],
    egHeading: "File your return online with your CRA Account",
    egText: "You can file your tax return online using your CRA account. Sign in or register for a CRA Account",
    egHtml: '<section class="alert alert-info"><h2 class="h3">File your return online with your CRA Account</h2><p>You can file your tax return online using your CRA account.</p><p>Sign in or register for a <a href="https://www.canada.ca/content/canadasite/en/revenue-agency/services/e-services/represent-a-client.html">CRA Account</a>.</p></section>',
    egLinks: [
      {
        id: "L1",
        text: "CRA Account",
        href: "https://www.canada.ca/content/canadasite/en/revenue-agency/services/e-services/represent-a-client.html"
      }
    ],
    notes: "Gives a direct filing action and consolidates repeated sign-in links into one standalone account action link."
  }
];

// src/app/common/prompts/alert-rewrite.prompt.ts
var AlertRewriteRules = {
  alertRewrite: {
    role: "You are an expert in Canada.ca alerts, accessibility, content design, and alert HTML rewriting.",
    styleRulesBase: [
      "Keep edits proportionate. Resolve selected issues and use selected examples only as style guidance. Preserve the alert's supported meaning, facts, and purpose.",
      "Preserve the original alert type, such as info, warning, danger, or success, unless a selected issue explicitly identifies the alert type as incorrect.",
      "Do not invent facts, dates, URLs, program names, or destination details.",
      "Prefer short sentences. Use 1 or 2 sentences when the sentences are short, or 1 sentence when the sentence is longer. Treat these as flexible guidance, not hard limits.",
      "Do not use semicolons to combine ideas just to reduce the sentence count.",
      "If the alert includes a standalone lead-in to a link, first include one substantive sentence that explains the alert.",
      "Do not output an alert whose only body text is a link-introduction sentence such as Learn about: or Refer to:.",
      "Add or preserve a short, descriptive heading.",
      "Do not rewrite alert content into accordions, disclosure widgets, expand-collapse components, or other containers that hide content from visual display. Inline assistive text that uses the wb-inv class is allowed: preserve it when it is needed, keep it in its original reading order, and make sure it flows with the surrounding visible text. Do not treat wb-inv text as prohibited hidden content.",
      "Do not add new images or icons. Preserve meaningful non-text content and useful existing text alternatives. When a selected issue identifies a missing or incorrect text alternative for retained non-text content, add or correct it using only information supported by the source content. Keep decorative non-text content hidden from assistive technology with an empty text alternative where appropriate.",
      "State what happened, then what to do.",
      "Use plain, active, neutral language.",
      "Include a next step when possible.",
      "Keep alert content concise for UI.",
      "Ensure each applicable selected issue that can be fixed within the alert results in a meaningful change. Do not claim an issue is fixed when the alert is unchanged, or alter valid content merely to show a change. Issues outside the alert, including placement, do not by themselves require a content change.",
      "Do not add new links.",
      'Set rewrittenAlertHtml to full .alert wrapper HTML (for example: <div class="alert alert-info">...</div>).'
    ],
    systemPromptWithExamplesLines: [
      "Use examples as pattern guidance only.",
      "When examples include egHtml, use that field as the example's final HTML pattern.",
      "Keep wording specific to the input alert's own facts and wording.",
      "Do not introduce wording from an example unless it is supported by the input alert. Valid wording already present in the input alert may be preserved.",
      "Only include exampleIdsUsed values that match the provided example ids."
    ],
    systemPromptWithoutExamplesLines: ["No examples are provided for this request.", "Return exampleIdsUsed as an empty array: []."],
    outputRequirement: OutputFragment[OutputKey.Json],
    outputSchemas: {
      withExamples: '{"rewrittenAlertHtml":"string","rewrittenHeading":"string","rewrittenAlert":"string","exampleIdsUsed":["ex-XXX"]}',
      withoutExamples: '{"rewrittenAlertHtml":"string","rewrittenHeading":"string","rewrittenAlert":"string","exampleIdsUsed":[]}'
    },
    conditionalInstructions: {
      preserveFinalStandaloneLink: 'The original alert already ends with an acceptable standalone final link sentence or paragraph. Preserve that wording and placement unless a selected issue clearly requires a change. Do not rewrite a valid existing lead-in such as "For details:" to "Refer to:" when it already reads naturally.',
      enforceLinkManifest: "Use linkManifest as the source of truth for original links. If linkManifest.mustPreserveAtLeastOne is true, rewrittenAlertHtml must include at least one real <a> element whose href exactly matches one of linkManifest.items[].href values. If linkManifest.allowRemoval is true, you may remove extra links, but you must still keep at least one original link."
    },
    retryInstructions: {
      invalidWrapperHtml: "Return valid rewrittenAlertHtml as a full .alert wrapper element.",
      noLinksAllowed: "The original alert has no links. Do not add hyperlinks. Return rewrittenAlertHtml without any <a> tags.",
      mustKeepLink: "An earlier rewrite attempt removed every original link. In this rewrite, retain the appropriate original link or links using the link-selection rule. Use only original href values and do not introduce new links.",
      mustHaveHeading: 'Alerts must include a semantic heading element in rewrittenAlertHtml. Add a short, descriptive heading using <h2 class="h3"> or <h3> to <h6> as needed, and place it before the body text.',
      avoidExampleCopy: "Your previous output matched example wording. Rewrite using alert-specific wording and facts only.",
      fullSentenceLinksNeedLeadIn: 'If a link stands alone as its own sentence or paragraph, or if a sentence mainly directs the user to a link, place that link direction in its own paragraph. Prefer putting a standalone link sentence or paragraph last in the alert content, but do not treat placement as a hard requirement. Use a natural lead-in before the anchor when the standalone link text does not already contain a clear action verb. "Refer to:" and "For details:" are both valid for supporting detail, reference, status, or explanatory links. Prefer "Refer to:" for required task, service, form, or procedural reference links. Prefer "For details:" when the link provides supporting information or more context. Prefer "Learn more:" for optional background, status, or update links. For French content, choose a concise lead-in that fits the purpose; valid options include "En savoir plus :" and "Consultez :". Treat them as meaning-based options, not fixed translations. Do not use "Apprenez-en plus" or "Apprenez-en davantage" as lead-ins. Avoid wordy constructions such as "Pour plus d\u2019informations, consultez la page". Do not add a lead-in before standalone action links such as "View CRA processing times", "Check CRA processing times", "Get an access code", "Sign up for direct deposit", "Create an account", "Cancel a payment", "Send documents", "Confirm your information", "Review the proposed rates", "Register a business", "Sign in or register for a CRA account", "Learn about the Canada Groceries and Essentials Benefit", "Find out how to get an access code", or "How to get an access code". Use "Learn about" without a colon when the linked text naturally completes the phrase, especially for explainer or topic pages. If the phrase needs an article, place it before the anchor, for example "Learn about the <a>Canada Groceries and Essentials Benefit</a>". Do not put a period or other punctuation after the closing anchor in a standalone link sentence or paragraph.'
    }
  }
};

// src/app/common/prompts/canada-ca-style.prompt.ts
var CanadaCaStyleRules = [
  {
    id: "C1_avoid_please",
    severity: "must",
    condition: "always",
    text: 'Do not use "please" as a courtesy filler in instructions or task-oriented copy. Start with the action verb when possible. If simply removing "please" leaves awkward wording, rewrite the sentence while preserving meaning.'
  },
  {
    id: "C2_direct_instructions",
    severity: "should",
    condition: "task_or_instruction",
    text: "Use direct imperative wording for task instructions. Lead with the action users need to take and avoid unnecessary introductory phrases."
  },
  {
    id: "C3_plain_language",
    severity: "should",
    condition: "always",
    text: "Use plain, concise language. Prefer familiar words and short sentences when meaning and required detail are preserved."
  },
  {
    id: "C4_preserve_required_meaning",
    severity: "must",
    condition: "always",
    text: "Preserve legal, eligibility, deadline, service, and policy meaning. Do not simplify content in a way that changes who qualifies, what action is required, when something happens, or what a service provides."
  },
  {
    id: "C5_do_not_invent_operational_details",
    severity: "must",
    condition: "always",
    text: "Do not invent service standards, contact channels, or other operational details that are not supported by the source content."
  },
  {
    id: "C6_no_unverified_qa_claims",
    severity: "must",
    condition: "always",
    text: "Do not claim that content passed a full quality assurance review unless the request explicitly states that a full review was performed."
  }
];
var CanadaCaStyleExamples = [
  { ruleId: "C1_avoid_please", avoid: "Please note that processing times may vary.", prefer: "Processing times may vary." },
  { ruleId: "C1_avoid_please", avoid: "Please ensure your information is accurate.", prefer: "Make sure your information is accurate." },
  {
    ruleId: "C2_direct_instructions",
    avoid: "You may want to review your information before submitting.",
    prefer: "Review your information before submitting."
  },
  {
    ruleId: "C2_direct_instructions",
    avoid: "It is important that you keep a copy for your records.",
    prefer: "Keep a copy for your records."
  },
  {
    ruleId: "C3_plain_language",
    avoid: "Prior to submitting your application, verify that all required fields have been completed.",
    prefer: "Before you submit your application, make sure you have completed all required fields."
  },
  {
    ruleId: "C3_plain_language",
    avoid: "Individuals experiencing difficulty accessing their account may contact us for assistance.",
    prefer: "If you cannot access your account, contact us for help."
  },
  {
    ruleId: "C4_preserve_required_meaning",
    avoid: "Apply by June 30 to keep receiving payments.",
    prefer: "Apply by June 30 to keep receiving payments."
  },
  {
    ruleId: "C4_preserve_required_meaning",
    avoid: "You must be 18 years of age or older and live in Canada to apply.",
    prefer: "You must be 18 years of age or older and live in Canada to apply."
  }
];
function getCanadaCaStylePromptRules(options = {}) {
  const rules = CanadaCaStyleRules.map((rule) => `[Canada.ca style ${rule.id} ${rule.severity}] ${rule.text}`);
  if (options.includeExamples === false)
    return rules;
  const examples = CanadaCaStyleExamples.map((example) => `[Canada.ca style example ${example.ruleId}] Avoid: "${example.avoid}" Prefer: "${example.prefer}"`);
  return [...rules, ...examples];
}

// src/app/common/prompts/link-writing.prompt.ts
var LinkWritingRules = [
  {
    id: "L1_keep_links_default",
    condition: "always",
    text: "Keep links by default. If the original alert has exactly one <a> link, the rewritten alert must include one real <a> element with the same href."
  },
  {
    id: "L2_keep_url_change_text",
    condition: "always",
    text: "Link text may be rewritten, but any kept link must keep its original URL. Do not convert a kept link to plain text, omit it, or replace it with placeholder text."
  },
  {
    id: "L3_descriptive_text",
    condition: "always",
    text: "Link text must clearly describe the intended destination using available context (URL path/slug, current link text, and surrounding sentence), and avoid inventing destination details not supported by that context."
  },
  {
    id: "L4_avoid_duplicate_link_text",
    condition: "always",
    text: 'Avoid duplicate wording. Do not repeat the linked phrase outside the anchor when meaning is preserved. Keep the destination phrase in the link. For phrasal lead-ins such as "Find out" or "Learn about", let the link text complete the phrase instead of repeating the object before the anchor. Avoid using "see" before links; use inclusive alternatives like "refer to" or "visit". When a link is present, prefer a short plain-text lead-in plus unique link text, with minimal repeated wording outside the anchor.'
  },
  {
    id: "L5_no_vague_anchor_text",
    condition: "always",
    text: 'Never use vague anchor text (for example: "click here", "here", "learn more", or similar).'
  },
  {
    id: "L6_sentence_end_preferred",
    condition: "always",
    text: "Prefer placing links at the end of their sentence."
  },
  {
    id: "L7_standalone_link_structure",
    condition: "always",
    text: "If a link is an entire sentence, or if a sentence mainly directs the user to a link, move it to a new paragraph. When possible, place that standalone link paragraph last in the content. Add a natural lead-in before the anchor when the standalone link text does not already contain a clear action verb."
  },
  {
    id: "L7a_multiple_standalone_links_list",
    condition: "always",
    text: 'When more than one standalone link must be kept at the end of the content, use one lead-in paragraph followed by <ul class="list-unstyled"> with one link per <li>. Do not use separate standalone link paragraphs for multiple final links.'
  },
  {
    id: "L7b_standalone_link_terminal_punctuation",
    condition: "always",
    text: "Do not put a period or other terminal punctuation after the closing anchor in a standalone link sentence or paragraph."
  },
  {
    id: "L8_remove_only_when_too_many",
    condition: "too_many_links",
    text: "For a too-many-links issue, retain at most two original links. Keep two only when they serve distinct, complementary purposes\u2014for example, one provides information or guidance and the other provides account access or a direct action. Otherwise, keep the single link most relevant to the alert's primary purpose. Prefer information central to the alert unless completing an action is its primary purpose. If more than two seem necessary, the alert's purpose is unclear; keep only the single most relevant link. Base the choice on the alert text, link text, URL, and surrounding context; do not assume unsupported destination details. Preserve original href values."
  },
  {
    id: "L9_do_not_remove_without_issue",
    condition: "not_too_many_links",
    text: "Do not remove links unless the original alert has multiple links and a too-many-links issue is identified. If only one link is present, preserve a real <a> element with the original href."
  },
  {
    id: "L10_concise_link_text",
    condition: "always",
    text: 'Keep link text concise when possible. Remove details already present in the alert or page context (for example, " - Canada.ca" is not needed).'
  },
  {
    id: "L11_find_out_usage",
    condition: "always",
    text: 'Do not use "Find out:" with a colon. Use "Find out" only when the anchor text completes it naturally, for example "Find out how to...", "Find out if...", or "Find out whether...". Do not use "Find out" before imperative link text such as "Get...", "Apply...", or "Register...".'
  },
  {
    id: "L12_lead_in_selection",
    condition: "always",
    text: 'Choose the lead-in that matches the destination and keep it in its own paragraph when the sentence mainly directs the user to the link. Prefer placing that paragraph last in the content, but treat this as a preference rather than a strict rule. Prefer "Refer to:" when the link is needed to complete a task, access a service, sign in, apply, register, submit, get a code, or take a required next step. Prefer "For details:" when the link provides supporting detail, reference, explanation, or more context. Prefer "Learn more:" when the link provides optional background, status, or update information. Use "Learn about" without a colon when the linked text naturally completes the phrase for explainer or topic pages. If the phrase needs an article, place it before the anchor, for example "Learn about the <a>Canada Groceries and Essentials Benefit</a>". Avoid repeating the topic noun outside the link if the anchor already names it.'
  },
  {
    id: "L13_action_link_no_lead_in",
    condition: "always",
    text: 'If a standalone link already contains a clear action verb, do not add lead-in text such as "Refer to:", "For details:", or "Learn more:". Examples include standalone links such as "View CRA processing times", "Get an access code", "Apply for benefits", "Register a business", "Sign in or register for a CRA account", "File your return online", "Review the proposed rates", "Learn about the Canada Groceries and Essentials Benefit", "Find out how to get an access code", and "How to get an access code".'
  }
];
function getLinkWritingPromptRules(options) {
  return LinkWritingRules.filter((rule) => {
    if (rule.condition === "always")
      return true;
    if (rule.condition === "too_many_links")
      return options.hasTooManyLinksIssue;
    return !options.hasTooManyLinksIssue;
  }).map((rule) => rule.text);
}

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
  AlertRewriteExamples,
  AlertRewriteRules,
  getCanadaCaStylePromptRules,
  getLinkWritingPromptRules,
  PagePrompts
};
//# sourceMappingURL=chunk-O4F5RCJZ.js.map
