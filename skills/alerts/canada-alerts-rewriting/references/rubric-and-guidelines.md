# Alert Rewriting Rubric

## Rewrite Rules
- Edit only the alert content needed to resolve the provided issues.
- Keep one replacement entry for every `alert_index` in the alerts list.
- Every `alert_index` must appear exactly once in `replacements`.
- Each relevant issue must cause at least one HTML change for each affected alert.
- Prefer preserving the original meaning and existing links.
- Prefer original wording; edit text only when required.
- Keep alerts in place unless incorrect placement is itself one of the reported issues.
- Do not add new alerts.
- Do not invent URLs.
- Do not use placeholder tokens like `[LINK]`.
- Keep to one primary link when possible.
- Do not add new link text.

## Style Rules
- Prefer 1 sentence, not counting any sentence that only introduces a link; use 2 only if needed. 
- If the alert includes a standalone lead-in to a link, first include one substantive sentence that explains the alert. Do not output an alert whose only body text is a link-introduction sentence such as "Learn about:" or "Refer to:".
- Add a short, descriptive heading.
- State what happened, then what to do.
- Use plain, active, neutral language.
- Include a next step when possible.
- Keep concise for UI.
- Include a heading, use valid heading levels, avoid hidden content, and add text alternatives if needed.

## Wrapper And Markup Rules
- Use `<section class="alert alert-[info|success|warning|danger]">`.
- Preferred titled structure:
  - `<p class="h3 mrgn-tp-0">...</p>`
  - `<p>...</p>`
- Title-less structure:
  - `<span class="wb-inv">Alert: [Info|Success|Warning|Danger]</span>`
  - `<p>...</p>`

## Output Contract
- Return JSON only.
- Do not include prose, Markdown, or code fences.
- Use `assets/rewriting-output-schema.json`.
- Output structure uses `replacements[]`.
- Each replacement entry must include:
  - `alert_index`
  - `rewritten_heading`
  - `updated_html`
- `updated_html` must be the full alert wrapper with the correct `alert-*` class.

## Link Rules
- Apply the included `link-writing` skill for shared link-writing behavior.
- Only use URLs already present in the source input.
- Ensure links are valid HTML `<a href="...">` tags.
- Do not leave placeholder text such as `[LINK]` or `[END LINK]`.
- If the original alert has no links, do not add hyperlinks.
- If the original alert has a link, keep at least one real hyperlink unless a too-many-links issue justifies removing extras.
- If a link stands alone as its own sentence or paragraph, or if a sentence mainly directs the user to a link, force a separate paragraph with one of these lead-ins before the anchor: "Refer to:", "Learn more:", or "Learn about:". Prefer "Refer to:" when the link is needed to complete a task, access a service, sign in, apply, register, submit, get a code, or take a required next step. Prefer "Learn more:" when the link is optional background, a status page, an update page, or supplemental information. Use "Learn about:" for explainer or topic pages. Use "Find out" only without a colon and only when the linked text naturally completes the phrase, such as `Find out how to...` or `Find out if...`. Do not append these lead-ins to the explanatory sentence.

## Self-Check Before Final Output
- If wrapper HTML is invalid, regenerate `updated_html` as a full `.alert` wrapper element.
- If placeholder link tokens remain, replace them with real HTML anchors.
- If the output copies wording too closely from examples, rewrite using the input alert's own facts and wording.
