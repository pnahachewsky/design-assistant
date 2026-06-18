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
- Report `too-many-doormats-in-section` as one section-level issue for the
  affected H2 section, not as repeated per-doormat issues
- Apply consistency checks, including style consistency, across the complete
  topic doormat set unless the taxonomy explicitly scopes a check to one
  section
- Audit description style within each H2 section. Report a section-level mixed
  description style issue when a section mixes noun/topic or benefit-summary
  descriptions with action-oriented, question-answer, or "How to" descriptions,
  even in small sections when the split is visible
- Audit link name style within each H2 section. Report a section-level mixed
  link name style issue when a section visibly mixes noun/topic link names with
  action-verb link names. Do not report every doormat in a section as an
  individual link-name style outlier
- Compare internally consistent H2 sections with each other. Report a
  section-level style outlier when one section's dominant description style
  clearly differs from the dominant page-level section style
- Use caller-provided `linkTextCharacterCount` and
  `descriptionCharacterCount` values when present; do not recalculate
  character counts from HTML
- Use caller-provided `destinationPageTitle` and `destinationPageHeading` values
  as destination context when present, especially for
  `link-name-too-different-from-destination-title`. Do not invent destination
  titles or headings when these values are absent.
- For `link-name-too-different-from-destination-title`, compare meaning and
  information scent, not exact wording. Ignore boilerplate suffixes such as
  `- Canada.ca`. It is acceptable for the link name wording to be shortened or
  adjusted to match the doormat style on the page. Report this issue only when
  the link name is misleading, points to a different topic/task/audience, or
  no longer gives users the same destination scent as the destination title or
  heading.
- Do not report `link-name-too-long`, `description-too-long`,
  `link-name-trailing-punctuation`, `description-trailing-punctuation`, or
  `duplicate-link-in-most-requested`, `missing-needed-doormat`,
  `unnecessary-doormat`, or `wrong-doormat-order`; AIDA calculates and reports
  those issues deterministically from the extracted doormat text, Most requested
  links, IA child-page relationships, page-view data, and character counts
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
