---
name: alerts-rewriting
description: Rewrite Canada.ca web alerts and return corrected output only. Use when the task is to produce updated alert HTML from identified issues.
---

# Canada.ca Alerts Rewriting

Use this skill only for alert rewriting. Do not return issue-analysis payloads.

## Workflow
1. Rewrite each eligible alert using provided issues and selected examples when available.
2. Keep edits scoped to the alert container.
3. Return JSON only.

## Resources
- Read `references/shared-rewrite-guidance.json` for shared rewrite, style, link, example, and self-check guidance.
- Read `references/runtime-rewrite-rules.json` for the live per-alert prompt contract, output fields, and retry instructions.
- Use `references/examples.json` for pattern guidance only. Do not copy wording.

## Source of Truth

`references/shared-rewrite-guidance.json` defines the shared behavioural
guidance used by the current AWS-AIDA runtime.

`references/runtime-rewrite-rules.json` defines the live per-alert prompt
and output contract used by the AWS-AIDA alert rewrite service, which has
custom parsing, retry, and repair behaviour.

## Output Boundary
- Return rewrite payloads only.
- Do not return issue-analysis payloads or prose commentary.
