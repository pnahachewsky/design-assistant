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
