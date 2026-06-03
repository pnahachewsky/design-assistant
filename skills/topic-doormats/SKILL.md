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

## Resource Authority

Detailed task rules live in task-specific skill files and JSON resources, not
in this shared file:
- Issue analysis instructions: `issues/SKILL.md`
- Issue analysis rules: `issues/references/issue-taxonomy.json`
- Issue output shape: `issues/assets/issues-output-schema.json`
- Rewrite instructions: `rewrite/SKILL.md`
- Rewrite rules: `rewrite/references/rewrite-rules.json`
- Rewrite output shape: `rewrite/assets/rewrite-output-schema.json`

If this file conflicts with a loaded task-specific skill or JSON resource,
follow the task-specific skill or JSON resource.
