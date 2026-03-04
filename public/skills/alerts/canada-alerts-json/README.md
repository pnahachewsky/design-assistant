# Canada.ca Alerts Writer Skill

## Overview
This folder contains the `canada-alerts-json` skill used by the page assistant to evaluate and rewrite Canada.ca alerts.

## Skill Architecture

```text
public/skills/alerts/canada-alerts-json/
|-- README.md
|-- SKILL.md
|-- references/
|   |-- rubric-and-guidelines.md
|   `-- examples.json
`-- assets/
    `-- output-schema.json
```

## Component Breakdown

1. `SKILL.md`
- Main orchestrator instructions and frontmatter trigger metadata.

2. `references/rubric-and-guidelines.md`
- Core alert rules, anti-patterns, and required HTML patterns.

3. `references/examples.json`
- Before/after examples used as few-shot style guidance.

4. `assets/output-schema.json`
- Output shape contract for JSON responses.

## How to Use
The app loads metadata from `public/skills/manifest.json`, then activates this skill when alert-related routing conditions match.
