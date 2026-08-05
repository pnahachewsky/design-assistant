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
- Apply consistency checks within the caller-provided H2 section unless the
  taxonomy explicitly scopes a check more broadly
- Classify every doormat description using exactly one
  `detected_description_style` value from the output schema. Classify its
  grammatical construction, not the subject it discusses. A sentence-like
  description remains `sentence` even when the final period is intentionally
  omitted. For example, "Find out whether you are eligible" is `sentence`, not
  `phrase`.
- Do not return `mixed-description-style-in-section`. AIDA derives that section
  issue by aggregating the per-doormat description style classifications.
- Audit link name style within each H2 section. Report a section-level mixed
  link name style by returning exactly one `detected_link_text_style` for every
  doormat. Classify grammatical construction, not destination subject matter.
- Classify link names as `task` when they are framed as an action, process,
  outcome, or user goal. This includes imperative openings such as "Find",
  "Apply", "Get", and "Determine", and gerund/action-noun openings such as
  "Getting" when the link name means getting, finding, receiving, claiming,
  updating, or managing something. Treat a gerund opening as `task` when it can
  be paraphrased as "how to [verb/action]". For example, "Getting the right CRA
  benefits and credits for your family" means "how to get the right CRA benefits
  and credits for your family", so it is `task`, not `topic`.
- For link name style disambiguation, use the frontloaded wording as the main
  style signal because Canada.ca writing frontloads important information. Later
  situation wording does not override a frontloaded task frame. For example,
  "Getting your tax benefits and credits when in an abusive situation" is
  `task`, not `situation`.
- Classify link names as `topic` only when they are noun phrases, program names,
  subject labels, or information categories that name what the destination is
  about without framing it as an action or situation.
- Return one `destination_link_relationship` and one
  `destination_link_relationship_basis` for every doormat by comparing meaning
  and information scent with the supplied destination title and H1. Use
  `analysisLinkText` and `analysisDescription` for this comparison when they
  are present; those fields remove doormat labels from the doormat text.
  Added action wording, shortened wording, grammatical inflection, acronyms,
  and program terminology are accurate when they preserve meaning. Use
  `materially-different` only for a different topic, task, audience, or scope.
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
- Doormat labels are acceptable. Do not report `misdirected-link` only because
  of a label or because the destination is closed, archived, replaced,
  inactive, or no longer available. Judge the non-label portion of the link
  against the destination title/H1 by meaning and information scent, not exact
  wording.
- Do not treat a destination label/status line as a description content gap
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
  the link name is misleading, points to a different topic/task/audience, or
  no longer gives users the same destination scent as the destination title or
  heading.
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
