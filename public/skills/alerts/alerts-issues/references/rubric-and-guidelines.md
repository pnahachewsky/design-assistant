# Alert Issues Rubric

## Inputs
- `alerts`: array of alert HTML strings in source order
- `pageContext`: surrounding context needed for relevance and placement checks
- `pageSignals` (optional): structured page-level hints such as `title`, `h1`, `pageTypeSignal`, and `h2Headings`
- `alertPlacementContext` (optional): structured per-alert placement hints such as `is_before_first_h2`, `position_percent_in_main`, `nearest_h2_above`, `nearest_h2_below`, `section_snippet_before`, and `section_snippet_after`
- `alertSignals` (optional): precomputed per-alert structural signals such as `alert_type`, heading metadata, paragraph count, link count, link list, hidden-content flags, and adjacency flags

## Objective
Scan the input content, identify specific issues based on the categories below, and return a JSON report of issues or `No issues` where appropriate.

## Requirements
- Analyze every alert in the `alerts` array.
- Use `pageContext` for placement, relevance, and hierarchy checks.
- If `pageSignals` is present, use it for page-type, section, and hierarchy judgments instead of inferring only from raw HTML.
- If `alertPlacementContext` is present, use it for placement, overload, and local relevance judgments instead of relying only on the alert markup itself.
- If `alertSignals` is present, use it for structural checks instead of re-deriving those facts from raw HTML.

## Analysis Procedure
1. Enumerate alerts in array order and use that order as `alert_index` (1-based).
2. For each alert, check every simple issue category below.
3. For each alert, check every complex issue category below.
4. Emit a separate issue item for every category that applies to that alert.
5. One alert can produce multiple issue items, and the same category can appear for multiple alerts if it applies.
6. When `alertPlacementContext` is present, match each `alert_index` to its corresponding placement object and use that data during analysis.
7. When `alertSignals` is present, match each `alert_index` to its corresponding signal object and use that data during analysis.

## Structured Context Guidance
- Use `pageSignals.pageTypeSignal`, `title`, and `h1` to assess `Low relevance`, `Misuse`, and page-wide appropriateness.
- Use `pageSignals.h2Headings` plus `nearest_h2_above` and `nearest_h2_below` to assess `Wrong placement` and `Incorrect hierarchy`.
- Use `is_before_first_h2`, `position_percent_in_main`, and nearby section snippets to judge whether an alert is too global, misplaced, or disconnected from the section it affects.
- Use the full set of placement objects to assess `Alert overload`, especially when multiple alerts appear near each other or before primary content starts.
- Use `alertSignals.alert_type` for `Wrong type`.
- Use `alertSignals.has_heading`, `heading_level`, `heading_source`, and `heading_tag` for `Missing heading` and `Incorrect hierarchy`.
- Use `alertSignals.link_count`, `has_multiple_links`, and `links` for `Too many links` and link-related recommendations.
- Use `alertSignals.has_hidden_content` for `Hidden content`.
- Use `alertSignals.paragraph_count` and `text_length_chars` as supporting evidence for `Too wordy`.
- Use `alertSignals.previous_sibling_is_alert`, `next_sibling_is_alert`, and `adjacent_alert_cluster_size` to strengthen `Alert overload` judgments.
- If structured context conflicts with a weak inference from raw HTML, prefer the structured context.

## Issue Taxonomy

### Simple issues
- Misuse: do not use alerts for standard process steps, low-risk warnings, or emphasis.
- Too wordy: alerts must be short, usually 1-2 sentences. If longer, recommend a summary plus a link to fuller information.
- Generic titles: avoid headings like "Note", "Info", "Important", or "New".
- Unclear impact: explain the consequence to the user, not just a fact.
- Outdated: flag past dates or resolved events.
- Missing heading: alerts must contain a heading pattern when appropriate.
- Wrong type: severity and alert class should match.
- Hidden content: avoid accordions or expand-collapse content inside alerts.
- Wrong component: do not use alerts for content better handled by another component, such as using Labels for "New" items. These alerts should usually be removed.
- Accessibility/code: ensure text alternatives and proper hierarchy.
- Too many links: limit to one primary link.
- Wrong placement: place the alert near the relevant section.
- Alert overload: multiple stacked alerts can create fatigue.
- Low relevance: on landing or home pages, alerts should apply broadly.
- Incorrect hierarchy: heading level should fit the page outline.
- Nothing actionable: if no action or consequence is present, flag the alert for deletion and recommend moving the information into regular page content or another page.

## Context-Sensitive Heuristics
- `Wrong placement`: strongly consider this category when the alert appears before the first substantive section, far from related headings, or when nearby section snippets do not support the alert topic.
- `Alert overload`: strongly consider this category when page-level or placement context indicates multiple alerts clustered together near the same part of the page.
- `Low relevance`: strongly consider this category on home, landing, or broad overview pages when the alert appears narrowly targeted relative to the page signals.
- `Incorrect hierarchy`: compare the alert heading pattern with nearby page headings and the section position, not just the alert markup in isolation.

### Complex issues
- Focus order: logical reading order should be preserved.
- Content clarity: use plain language and keep the reading level around Grade 6-8.
- Non-text content: images and icons need descriptive alternatives.

## Output Contract
- Return JSON only.
- Use `assets/issues-output-schema.json`.
- Include `alert_index` in every issue item.
- Include the alert number in the description, for example `Alert 2: ...`.
- The output must cover every alert in the input array.
- For each alert, check every category and emit a separate issue item for each applicable category.
- If an alert has no issues, emit one issue item with:
  - `issue_category`: `No issues`
  - `severity`: `Low`
  - `description`: `Alert {alert_index}: No issues found for this alert.`
  - `recommendation`: `No changes required.`
- Do not emit a `No issues` item for alerts that already have one or more real issues.
