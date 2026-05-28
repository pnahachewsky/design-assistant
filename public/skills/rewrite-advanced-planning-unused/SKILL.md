---
name: rewrite-advanced-planning-unused
description: Archived, unused model-planning mode for rewrite tasks. Do not use in active AIDA rewrite generation.
---

# Rewrite Advanced Mode Unused

This AIDA skill archives the removed advanced rewrite planning mode for future review. It is intentionally not registered in `public/skills/manifest.json`, so AIDA does not load it during normal prompt composition.

## Status

Unused. The active alert rewrite flow now uses only the local heuristic plan before generating rewrites. This archive may be revisited for other rewrite tasks if a model-planning pass becomes useful again.

## Archived Flow

The removed alert implementation added one model call before each alert rewrite:

1. Build the local heuristic plan from alert HTML, alert text, alert type, and selected issues.
2. Send a compact planning payload to the model.
3. Parse the model response into the same plan shape.
4. Use the model-generated plan for example selection and rewrite prompt context.
5. Generate the final alert rewrite with the selected examples and guardrail checks.

The archived planning response schema was:

```json
{
  "alertType": "error|warning|info|success",
  "domainTags": ["..."],
  "purposeTags": ["..."],
  "criteriaMatched": ["C..."],
  "directives": [
    {
      "op": "string",
      "value": "optional"
    }
  ]
}
```

Allowed directive operations were:

```text
specify_subject, add_next_step, add_fallback, add_heading, avoid_jargon, limit_links, preserve_tone
```

## Removed Active Code

The active implementation previously included:

- `AlertRewriteMode.ModelPlanning`
- the "Advanced AI planning before rewrite" checkbox
- persisted `pageAssistant.alertRewriteMode`
- `AlertRewriteService.buildAlertPlanningMessages`
- `AlertRewriteService.parseAlertPlanningResponse`
- the model-planning branch inside `AlertRewriteOrchestratorService.generateRecommendations`
- `alertPlanning.systemPromptLines` in `public/ai-prompts/alerts-rewrite-rules.json`

## Documentation

- `doc/advanced-planning-removal-notes.md` records why this mode was removed and when to revisit it.
- `doc/advanced-planning-flow-visual.html` keeps the old flow visualization for review.
- `doc/removed-code/alert-planning-service-methods.ts.txt` archives the removed planner prompt builder and response parser.
- `doc/removed-code/model-planning-orchestrator-snippet.ts.txt` archives the removed orchestration branch.
- `doc/removed-code/alert-rewrite-mode-state-snippets.md` archives the removed UI and persisted-state plumbing.
- `doc/removed-prompts/alert-planning-system-prompt.json` archives the removed planning system prompt.
