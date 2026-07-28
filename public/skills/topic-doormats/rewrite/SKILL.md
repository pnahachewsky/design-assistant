---
name: topic-doormats-rewrite
description: >
  Rewrite GCWeb topic doormat sets into consistent, concise link text and
  descriptions. Use for rewrite generation only.
---

# Topic Doormat Rewrite

Use this skill for rewriting topic doormat sets.

## Instructions

- Use the rewrite rules resource as the authoritative ruleset
- Use the rewrite output schema only when the caller requests structured JSON
- Preserve all unrelated page HTML
- Rewrite the doormat set consistently
- Keep link text concise while preserving the destination meaning
- Keep descriptions concise, specific, and parallel across the set
- If the user payload includes `topic_doormat_issue_analysis.selected_issues`,
  use those issues as rewrite priorities while still following the rewrite rules
- If the user payload includes `doormats_with_selected_issues`, use each
  affected doormat's destination title, H1, intro paragraphs, H2 headings,
  labels, and cleaned destination main HTML as source evidence for the rewrite
- Preserve doormats that do not have selected issues unless changing them is
  required to maintain valid HTML after editing the affected doormats
- If the user payload includes `page_html`, rewrite that HTML and return only the
  requested output format

If this file conflicts with loaded rewrite rules or a loaded output schema,
follow the loaded resource.
