# Advanced Planning Removal Notes

## Removal Rationale

Advanced planning previously improved some alert rewrite results, but later tests with examples showed lower performance. The benefit may have depended on running without examples, or on smaller/nano models that AIDA is no longer using.

The active rewrite flow now keeps only the local heuristic plan. That plan still supports example selection and guard logic without adding a separate model-planning call before each rewrite.

## Revisit Criteria

Before re-enabling this pattern, retest it against the current rewrite models and compare at least:

- examples on vs examples off
- local heuristic planning vs model planning
- current supported models vs any future smaller model option
- alert rewrites vs other rewrite tasks that may benefit from an explicit planning pass

Do not re-register this skill in `public/skills/manifest.json` unless the model-planning pass proves useful again in current AIDA workflows.

## Scope Note

The archive is stored outside `skills/alerts/` because the model-planning idea may apply to other rewriting tasks, not only alert rewrites. The archived implementation and visual are alert-specific examples of the broader pattern.

