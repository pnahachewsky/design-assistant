## Overview
This Agent Skill evaluates, fixes, and rewrites web alerts to meet Canada.ca Design System and WCAG 2.1 accessibility standards. 

Unlike the JSON-based variant, this skill is optimized to output **pure, raw HTML**. It uses HTML comments for reasoning and `data-alert-index` attributes to allow downstream scripts to map the rewritten alerts back to their original page locations.
EOF
# Canada.ca Alerts Writer Skill (HTML Edition)

## Overview
This Agent Skill evaluates, fixes, and rewrites web alerts to meet Canada.ca Design System and WCAG 2.1 accessibility standards. 

Unlike the JSON-based variant, this skill is optimized to output **pure, raw HTML**. It uses HTML comments for reasoning and `data-alert-index` attributes to allow downstream scripts to map the rewritten alerts back to their original page locations.

## Architecture
* `SKILL.md`: The core AI orchestrator.
* `references/rubric-and-guidelines.md`: Rules, anti-patterns, and HTML templates.
* `references/examples.json`: Before/after training examples.
* `assets/output-template.html`: The strict HTML output format.
