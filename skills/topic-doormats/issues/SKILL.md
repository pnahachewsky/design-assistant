---
name: topic-doormats-issues
description: >
  Analyze GCWeb topic doormats for content, structure, consistency, and
  destination issues. Use for issue reporting only.
---

# Topic Doormat Issue Analysis

Use this skill for issue analysis of topic doormat sets.

## Instructions

- Use the issue taxonomy resource as the authoritative ruleset
- Use the issues output schema as the required response shape
- Treat caller-provided H2 section metadata as authoritative for section-local
  doormat numbering, the 9-doormat limit, and style consistency checks
- Return exactly one allowed `detected_description_style` and
  `detected_link_text_style` for every doormat; classify grammatical
  construction, not destination subject matter
- Do not return style issues directly. AIDA derives description and link style
  issues from the required per-doormat classifications.
- Return one `destination_link_relationship`,
  `destination_link_relationship_basis`, and
  `destination_link_relationship_reason` for every doormat. Compare meaning and
  information scent, not exact wording.
- Use caller-provided `destinationPageTitle` and `destinationPageHeading` values
  as destination context when present. Do not invent destination titles or
  headings when these values are absent.
- Return `destination_content_assessment` for every doormat. Use only supplied
  `destinationContext.elements` IDs, select only elements users need to choose
  the destination, and do not treat every H2 as important.
- Doormat labels are acceptable. Do not report `misdirected-link` only because
  of a label or because the destination is closed, archived, replaced,
  inactive, or no longer available. Judge the non-label portion of the link
  against the destination title/H1 by meaning and information scent, not exact
  wording.
- Do not treat a destination label/status line as a description content gap
  when the doormat already exposes that same label/status state in its label or
  visible item text.
- When `destinationContext.status` is not `available`, return empty arrays for
  all destination content assessment fields.
- Report `description-lacks-clarity` only when the wording itself is ambiguous.
  Return the exact ambiguous wording in `evidence_details.unclear_phrase` and
  explain the competing interpretations in
  `evidence_details.ambiguity_explanation`. Generic wording, missing detail,
  repetition, or failure to summarize destination content are not clarity
  issues.
- Do not return locally owned deterministic issues listed by the runtime
  instruction; AIDA calculates and reports those issues
- Return JSON only
- Report issues per affected doormat
- Report section-level problems in `section_issues` rather than repeating
  them on each doormat
- Include evidence whenever the taxonomy asks for evidence
- Keep evidence concise. For section-level issues, summarize the pattern and
  include only representative doormat numbers instead of quoting full
  descriptions
- Do not include destination URLs or "Most requested: n/a" in evidence unless
  the issue depends on links, destination matching, duplicate links, or
  destination context

Do not invent issue categories outside the taxonomy.

If this file conflicts with the issue taxonomy or output schema, follow the
taxonomy or schema.
