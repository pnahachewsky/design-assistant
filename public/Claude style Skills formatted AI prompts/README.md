# Canada.ca Alerts Writer Skill

## Overview
This repository contains the **Canada.ca Alerts Writer**, an AI agent skill designed to evaluate, fix, and rewrite web alerts to ensure they meet content design best practices, WCAG 2.1 accessibility standards, and strict Canada.ca Design System HTML requirements. 

This project was recently refactored from a set of prompt files into a modular **Agent Skills** framework. 

## Why We Refactored
The previous system may have had some issues that the new architecture is attempting to solve:
* **Token Bloat & Duplication:** Some instructions could've been duplicated across different `.txt` and `.json` files. 
* **Link Hallucinations:** The prompt instructed the model *not* to use `[LINK]` placeholders, but the examples file heavily used them. This contradictory training data caused the model to fail at writing valid HTML anchor tags.
* **Invalid HTML Formatting:** The old system requested `<div class="alert...">` wrappers and standard `<h3>` tags. The Canada.ca Design System strictly requires `<section>` wrappers, `<p class="h3 mrgn-tp-0">` for titles, and `<span class="wb-inv">` for hidden text on title-less alerts. 

## Skill Architecture 
We adopted the Agent Skills standard, which uses "progressive disclosure" to load instructions efficiently. The skill is broken down into modular components:

```text
canada-alerts-writer/
├── README.md                              # This file
├── SKILL.md                               # The core orchestrator
├── references/
│   ├── rubric-and-guidelines.md           # Rules, anti-patterns, and HTML templates
│   └── examples.json                      # Before/after examples
└── assets/
    └── output-schema.json                 # Strict JSON schema

Component Breakdown

1.SKILL.md (The Orchestrator)
This is the main entry point for the AI. It contains the YAML frontmatter (metadata that tells the AI when to use the skill)  and the high-level, step-by-step instructions. It directs the AI to consult the rubric, read the examples, and output via the strict schema.

2. references/rubric-and-guidelines.md (The Rules Engine)
Consolidates all previous rule sets (e.g., "Too wordy", "Missing heading") into a single, unambiguous markdown file. It explicitly defines anti-patterns ("Must Not Do") and provides the exact HTML templates required for Info, Success, Warning, and Danger alerts.

3. references/examples.json (The Training Data)
The rewritten examples file replaces abstract pseudo-code with real, semantic HTML. By demonstrating the expected <section> wrappers and native <a href="..."> link integrations, the model learns the correct structural output via few-shot prompting.

4. assets/output-schema.json (The Enforcer)
Defines the exact JSON structure the model must return. Crucially, it forces the model to extract and write the "rewritten_heading" as an isolated string before generating the final "updated_html", which drastically reduces the "missing heading" failure mode.

How to Use
Because this follows the open Agent Skills standard, you can load this folder directly into supported AI environments (like Claude.ai or an API integration). The AI will read SKILL.md first, then dynamically pull in the references/ and assets/ as needed to process an alert request.
