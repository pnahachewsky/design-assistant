# Alert Success Criteria & Rubric

## 1. Content Rules
* **Short and simple:** Must be 1-2 sentences maximum.
* **Descriptive title:** Must include a specific title. Never use generic titles like "Note", "Info", or "Important".
* **Clear impact:** State what happened, then what the user needs to do.
* **One link maximum:** Limit to one primary call-to-action link per alert.

## 2. Anti-Patterns (Must Not Do)
* **DO NOT** use alerts for standard process steps.
* **DO NOT** use expand/collapse (accordions) inside an alert.
* **DO NOT** rely on color alone to convey meaning.
* **DO NOT** invent or hallucinate URLs.

## 3. Strict HTML Formatting
Alerts must strictly follow these HTML templates based on their type.

**With Title:**
<section class="alert alert-[info|success|warning|danger]">
  <p class="h3 mrgn-tp-0">Descriptive title here</p>
  <p>Alert content goes here with an <a href="#">active link</a>.</p>
</section>

**Without Title:**
<section class="alert alert-[info|success|warning|danger]">
  <span class="wb-inv">Alert: [Info|Success|Warning|Danger]</span>
  <p>Alert content goes here with an <a href="#">active link</a>.</p>
</section>
