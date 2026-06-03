---
name: topic-doormats
description: >
  Analyze and rewrite GCWeb topic doormats for Canada.ca and CRA pages.
  Use this skill for topic page doormat sets, GCWeb doormat navigation tiles,
  linked tile groups with short descriptions, and topic page link sections.
---

# Topic Doormats

Use this skill for topic page doormats only. Subway doormats are detected
separately and should not be analyzed by this skill unless the caller
explicitly asks for them.

## Core Rule

Always treat doormats as a complete set.

Do not analyze or rewrite one doormat in isolation when the full set is
available. Compare link text, descriptions, style, order, and destination
choices across the set before reporting issues or making recommendations.

## Issue Analysis

For issue analysis:
- Use the issue taxonomy resource as the authoritative ruleset
- Use the issues output schema as the required response shape
- Run deterministic structural checks first, then judgment/editorial checks
- Use caller-provided `linkTextCharacterCount` and
  `descriptionCharacterCount` values when present; do not recalculate
  character counts from HTML
- Return JSON only
- Report issues per affected doormat
- Report section-level problems in `section_issues` rather than repeating
  them on each doormat
- Include evidence whenever the taxonomy asks for evidence

Do not invent issue categories outside the taxonomy unless the issue is
important and no existing category fits.

## Rewrite

For rewrite tasks:
- Use the rewrite rules resource as the authoritative ruleset
- Use the rewrite output schema as the required response shape
- Preserve all unrelated page HTML
- Rewrite the doormat set consistently

## Resource Authority

Detailed rules live in JSON resources, not in this file:
- Issue analysis rules: `issues/references/issue-taxonomy.json`
- Issue output shape: `issues/assets/issues-output-schema.json`
- Rewrite rules: `rewrite/references/rewrite-rules.json`
- Rewrite output shape: `rewrite/assets/rewrite-output-schema.json`

If this file conflicts with a loaded JSON resource, follow the JSON resource.
