import { SkillId } from './skill-registry';

export type PromptFragmentLevel = 'base' | 'task' | 'mode' | 'output';

export type PromptMode = 'balanced' | 'light-edit' | 'strict-rewrite';

export type PromptOutputFormat = 'text' | 'json';

export interface PromptFragment {
  id: string;
  level: PromptFragmentLevel;
  text: string;
  priority: number;
  skillIds?: SkillId[];
  mode?: PromptMode;
  outputFormat?: PromptOutputFormat;
  requires?: string[];
  conflictsWith?: string[];
}

export const PROMPT_LEVEL_ORDER: Record<PromptFragmentLevel, number> = {
  base: 0,
  task: 1,
  mode: 2,
  output: 3,
};

export const PAGE_ASSISTANT_PROMPT_FRAGMENTS: readonly PromptFragment[] = [
  {
    id: 'base-preserve-intent',
    level: 'base',
    priority: 10,
    text: 'Preserve factual meaning, legal intent, and key actions unless explicitly asked to change them.',
  },
  {
    id: 'base-concise',
    level: 'base',
    priority: 9,
    text: 'Be concise and avoid unnecessary commentary in the final response.',
  },
  {
    id: 'task-plain-language',
    level: 'task',
    priority: 8,
    skillIds: ['plain-language'],
    text: 'Use plain language with short sentences, common words, and direct verbs.',
  },
  {
    id: 'task-heading-hierarchy',
    level: 'task',
    priority: 8,
    skillIds: ['headings'],
    text: 'Enforce logical heading hierarchy with one H1 and clear H2/H3 nesting.',
  },
  {
    id: 'task-alerts',
    level: 'task',
    priority: 8,
    skillIds: ['alerts-rewrite'],
    text: 'Rewrite alerts to lead with the key action and keep severity intent clear.',
  },
  {
    id: 'mode-balanced',
    level: 'mode',
    priority: 7,
    mode: 'balanced',
    conflictsWith: ['mode-light-edit', 'mode-strict-rewrite'],
    text: 'Make normal edits that improve clarity without over-rewriting.',
  },
  {
    id: 'mode-light-edit',
    level: 'mode',
    priority: 7,
    mode: 'light-edit',
    conflictsWith: ['mode-balanced', 'mode-strict-rewrite'],
    text: 'Make minor edits only and leave most wording unchanged.',
  },
  {
    id: 'mode-strict-rewrite',
    level: 'mode',
    priority: 7,
    mode: 'strict-rewrite',
    conflictsWith: ['mode-balanced', 'mode-light-edit'],
    text: 'Rewrite aggressively for clarity and task completion while preserving facts.',
  },
  {
    id: 'output-text',
    level: 'output',
    priority: 6,
    outputFormat: 'text',
    conflictsWith: ['output-json'],
    text: 'Return plain text output suitable for direct copy and review.',
  },
  {
    id: 'output-json',
    level: 'output',
    priority: 6,
    outputFormat: 'json',
    conflictsWith: ['output-text'],
    text: 'Return strict JSON with deterministic keys and no prose outside JSON.',
  },
];
