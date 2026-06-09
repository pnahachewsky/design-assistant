---
name: alerts-rewriting
description: Rewrite Canada.ca web alerts and return corrected output only. Use when the task is to produce updated alert HTML from identified issues.
---

# Canada.ca Alerts Rewriting

Use this skill only for alert rewriting. Do not return issue-analysis payloads.

## Workflow
1. Rewrite each alert based on the provided issues.
2. Keep edits scoped to the alert container.
3. Return JSON only.

## Resources
- Read `references/rewrite-instructions.json` for rewrite rules, style rules, markup rules, link rules, and output rules.
- Read `references/runtime-rewrite-rules.json` for the active AIDA runtime prompt lines, style rules, example rules, and retry instructions.
- Read `references/rubric-and-guidelines.json` for the structured rewriting rubric and self-check guidance.
- Use `references/examples.json` for pattern guidance only. Do not copy wording.
- Apply the included `link-writing` skill for reusable link-writing rules.
- Match `assets/rewriting-output-schema.json` exactly.

## Output Boundary
- Return rewrite payloads only.
- Do not return issue-analysis payloads or prose commentary.
