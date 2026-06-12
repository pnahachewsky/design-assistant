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
- Run deterministic structural checks first, then judgment/editorial checks
- Treat caller-provided H2 section metadata as authoritative for section-local
  doormat numbering and the 9-doormat limit
- Apply the 9-doormat limit per H2 section only; reset the count at each H2
  section
- Apply consistency checks, including style consistency, across the complete
  topic doormat set unless the taxonomy explicitly scopes a check to one
  section
- Use caller-provided `linkTextCharacterCount` and
  `descriptionCharacterCount` values when present; do not recalculate
  character counts from HTML
- Return JSON only
- Report issues per affected doormat
- Report section-level problems in `section_issues` rather than repeating
  them on each doormat
- Include evidence whenever the taxonomy asks for evidence
- Keep evidence concise. For section-level issues, summarize the pattern and
  include only representative doormat numbers instead of quoting full
  descriptions. For mixed description style, include 2 to 4 representative
  doormat numbers per style group and do not list every doormat
- Do not include destination URLs or "Most requested: n/a" in evidence unless
  the issue depends on links, destination matching, duplicate links, or
  destination context

Do not invent issue categories outside the taxonomy unless the issue is
important and no existing category fits.

If this file conflicts with the issue taxonomy or output schema, follow the
taxonomy or schema.
