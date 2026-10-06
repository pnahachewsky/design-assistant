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
- Evaluate each doormat independently. Use the same reporting threshold for
  every doormat, regardless of whether other doormats have obvious issues.
- For every doormat, return `issue_decisions` with one decision for each
  required model-owned per-doormat check in the output schema. Complete these
  decisions before writing the `issues` array. If a decision is `applies`, add
  the corresponding issue to `issues` unless another instruction says AIDA
  owns or derives that issue.
- Treat caller-provided H2 section metadata as authoritative for section-local
  doormat numbering and the 9-doormat limit
- Apply the 9-doormat limit per H2 section only; reset the count at each H2
  section
- Report `too-many-doormats-in-section` as one section-level issue for the
  affected H2 section, not as repeated per-doormat issues
- Apply consistency checks within the caller-provided H2 section unless the
  taxonomy explicitly scopes a check more broadly
- Audit link name style within each H2 section. Report a section-level mixed
  link name style by returning exactly one `detected_link_text_style` for every
  doormat. Classify using the CRA link name style options: `topic`,
  `product-or-service`, `action`, `audience-group`, or `mixed-or-unclear`.
  Link name style is the primary style consistency requirement because link
  names are the first scannable part of a doormat set.
- Unless runtime instructions say the description-style primary issue flag is
  enabled, treat description style as secondary rewrite guidance. Return
  exactly one `description_rewrite_guidance` value for every doormat. Prefer
  retaining accurate phrase-style descriptions when they are clear. Do not
  recommend converting descriptions to keyword lists unless that materially
  improves scanning for a description with several distinct concepts.
- Unless runtime instructions say the description-style primary issue flag is
  enabled, do not return `mixed-description-style-in-section`,
  `description-incorrect-style`, or `inconsistent-description-style`; AIDA does
  not use description style classification as a primary issue driver by
  default.
- Classify link names as `topic` when they name a broad subject area or
  information category, such as "Arts and media", "History and heritage",
  "Cultural trade and investment", or "Sport".
- Classify link names as `product-or-service` when they name a product, program,
  plan, benefit, credit, form, tool, service, or account, such as "Registered
  retirement savings plan", "Tax-free savings accounts", "Registered education
  savings plan", "Registered disability savings plan", or "First home savings
  account".
- Classify link names as `action` when they are framed as an action the user can
  take or a task they can complete, such as "Notify the CRA of the date of
  death", "Apply for the CPP/QPP death benefit", "Represent someone who died",
  or "Apply for a clearance certificate".
- Classify gerund link names such as "Filing a trust return" or "Submitting
  documents online" as `topic` when they frame the destination as how to or
  instructions for a task. Do not classify a gerund as `action` only because
  the underlying subject is a task. Classify only imperative task commands such
  as "File a trust return" or "Submit documents online" as `action`, unless
  destination evidence clearly shows the gerund link is being used as a direct
  transactional entry point.
- Classify link names as `audience-group` when they are framed as an audience or
  user group, such as "Individuals", "Businesses", "Charitable organizations",
  "Non-Canadians", or "Tax professionals".
- Return one `destination_link_relationship` and one
  `destination_link_relationship_basis` for every doormat by comparing meaning
  and information scent with the supplied destination title and H1. Use
  `analysisLinkText` and `analysisDescription` for this comparison when they
  are present; those fields remove doormat labels from the doormat text.
  Added action wording, shortened wording, grammatical inflection, acronyms,
  and program terminology are accurate when they preserve meaning. Use
  `materially-different` only for a different topic, product/service, action,
  audience, or scope.
  Pair it with `conflicting-core-concept` only when a core concept actually
  conflicts, and explain the conflict in `destination_link_relationship_reason`.
- Do not return `inconsistent-link-name-style`,
  `mixed-link-name-styles-in-section`, or
  `link-name-too-different-from-destination-title`. AIDA derives those issues
  from the required classifications.
- Use caller-provided `linkTextCharacterCount` and
  `descriptionCharacterCount` values when present; do not recalculate
  character counts from HTML
- Use caller-provided `destinationPageTitle` and `destinationPageHeading` values
  as destination context when present, especially for
  `link-name-too-different-from-destination-title`. Do not invent destination
  titles or headings when these values are absent.
- For every doormat, return `destination_content_assessment` before reporting
  issues. Use only the supplied `destinationContext.elements` IDs. When
  `destinationContext.pageType` is `topic` or `subway`, AIDA supplies the
  destination page's own doormat choices as `doormat-*` elements; treat those
  as the primary compact destination information because the important content
  on a topic or subway page is the set of doormats. For ordinary content pages,
  AIDA supplies intro paragraphs and H2 headings instead. First select the
  supplied elements that contain information users need to decide whether to
  follow the doormat. Then identify which important elements are covered by
  `analysisLinkText` and `analysisDescription` when present, otherwise the link
  text and description, and which are missing.
- Do not treat every destination H2 as important. Secondary navigation,
  supporting details, and information users can reasonably discover after
  choosing the destination are not content gaps.
- For doormats about a benefit, program, credit, rebate, payment, allowance,
  relief measure, service, form, or tool, do not require the doormat to list
  every expected destination facet such as who is eligible, what the program
  is, and how to apply, file, or use it. Treat those facets as covered when
  they are clearly implied by the link text and description together. Report a
  content gap only when a missing facet changes whether users can decide that
  this destination is relevant.
- Doormat labels are acceptable. Do not report `misdirected-link` only because
  of a label or because the destination is closed, archived, replaced,
  inactive, or no longer available. Judge the non-label portion of the link
  against the destination title/H1 by meaning and information scent, not exact
  wording.
- Do not treat a destination label/status line as a doormat content gap
  when the doormat already exposes that same label/status state in its label or
  visible item text.
- Doormat labels may carry lifecycle or status information such as Closed,
  No longer available, Formerly, Replaced, New, or Updated. Do not require the
  doormat description to repeat lifecycle/status information when it is already
  exposed in the doormat label or visible doormat text. Evaluate the description
  for whether it explains the destination page's broad subject, purpose, or
  task, not whether it repeats the label.
- When the link text is a program, benefit, credit, rebate, payment, allowance,
  or relief name, do not treat the name alone as covering a destination intro
  that explains what the program or benefit was or is. If the doormat
  description only gives status, timing, eligibility, or residual filing
  context, mark the intro explanation as missing.
- When `destinationContext.status` is not `available`, return empty arrays for
  all destination content assessment fields.
- Do not return `description-missing-needed-information`. AIDA reports that
  issue only when `missing_important_element_ids` contains IDs grounded in the
  supplied destination context.
- Report `description-lacks-clarity` only when the wording itself is ambiguous.
  Return the exact ambiguous wording in `evidence_details.unclear_phrase` and
  explain the competing interpretations in
  `evidence_details.ambiguity_explanation`. Generic wording, missing detail,
  repetition, or failure to summarize destination content are not clarity
  issues.
- Do not report `misdirected-link` from URL path structure or assumptions about
  where a page belongs in the site hierarchy. When the non-label link name
  matches the destination title or H1 in meaning, do not report it as
  misdirected. Section suitability is handled by AIDA's IA checks.
- For `link-name-too-different-from-destination-title`, compare meaning and
  information scent, not exact wording. Ignore boilerplate suffixes such as
  `- Canada.ca`. It is acceptable for the link name wording to be shortened or
  adjusted to match the doormat style on the page. Report this issue only when
  the link name is misleading, points to a different topic, product/service,
  action, audience, or no longer gives users the same destination scent as the
  destination title or heading.
- Do not report `broken-link`, `link-name-too-long`, `description-too-long`,
  `link-name-trailing-punctuation`, `description-trailing-punctuation`,
  `description-uses-first-or-second-person`, `duplicate-link-in-most-requested`,
  `missing-needed-doormat`, `unnecessary-doormat`, or
  `repeated-description-opening`; AIDA calculates and reports those issues
  deterministically from the extracted doormat text, Most requested links,
  destination HTTP status, IA child-page relationships, page-view data, and
  character counts
- Return JSON only
- Report issues per affected doormat
- Report section-level problems in `section_issues` rather than repeating
  them on each doormat
- Include evidence whenever the taxonomy asks for evidence
- Keep evidence concise. For section-level issues, summarize the pattern and
  include only representative doormat numbers instead of quoting full
  descriptions
- AIDA checks model-owned issues for missing evidence or recommendation after
  the response is parsed. Empty strings and dash-only placeholders are treated
  as missing. AIDA sends only those incomplete issue fields back to the model
  for repair; if repair still does not provide usable text, AIDA keeps the
  issue visible and displays "No AI evidence was received." or "No AI
  recommendation was received." for the missing field.
- Do not include destination URLs or "Most requested: n/a" in evidence unless
  the issue depends on links, destination matching, duplicate links, or
  destination context

Do not invent issue categories outside the taxonomy unless the issue is
important and no existing category fits.

If this file conflicts with the issue taxonomy or output schema, follow the
taxonomy or schema.
