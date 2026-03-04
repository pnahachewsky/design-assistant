# Alert Success Criteria & Rubric

## 1. Content Rules
* [cite_start]**Short and simple:** Must be 1-2 sentences maximum[cite: 748, 749].
* [cite_start]**Descriptive title:** Must include a specific title[cite: 750]. [cite_start]Never use vague or general titles like "Note", "Info", or "Important"[cite: 751].
* [cite_start]**Clear impact:** Describe the impact on the user [cite: 752] (state what happened, then what the user needs to do).
* [cite_start]**One link maximum:** Limit to one primary call-to-action link per alert[cite: 755, 756].

## 2. Anti-Patterns (Must Not Do)
* [cite_start]**DO NOT** use alerts for standard process steps[cite: 733].
* [cite_start]**DO NOT** use expand/collapse (accordions) inside an alert[cite: 776]. [cite_start]The alert content should be visible immediately[cite: 776].
* [cite_start]**DO NOT** rely on color alone to convey meaning[cite: 722].
* **DO NOT** invent or hallucinate URLs.

## 3. Strict HTML Formatting
[cite_start]Alerts must strictly follow these templates using `<section>` wrappers[cite: 639, 642]. [cite_start]Do not use `<section>` within another section, or validation issues occur[cite: 645]. You MUST include the `data-alert-index` attribute corresponding to the input's order.

**With Title:**
<section class="alert alert-[info|success|warning|danger]" data-alert-index="[#]">
  <p class="h3 mrgn-tp-0">Descriptive title here</p>
  <p>Alert content goes here with an <a href="#">active link</a>.</p>
</section>

**Without Title:**
<section class="alert alert-[info|success|warning|danger]" data-alert-index="[#]">
  <span class="wb-inv">Alert: [Info|Success|Warning|Danger]</span>
  <p>Alert content goes here with an <a href="#">active link</a>.</p>
</section>
