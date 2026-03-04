export type SkillId = 'plain-language' | 'headings' | 'alerts-rewrite';

export interface SkillDefinition {
  id: SkillId;
  name: string;
  description: string;
  triggers: string[];
  antiTriggers: string[];
  priority: number;
  systemInstructions: string;
  outputContract: string;
  outputChecklist: string[];
}

export const PAGE_ASSISTANT_SKILLS: readonly SkillDefinition[] = [
  {
    id: 'plain-language',
    name: 'Plain language rewrite',
    description:
      'Simplify wording, shorten sentences, and keep critical meaning unchanged.',
    triggers: [
      'plain language',
      'simplify',
      'rewrite for clarity',
      'make this easier',
      'reduce reading level',
    ],
    antiTriggers: ['technical spec only', 'do not rewrite', 'verbatim only'],
    priority: 2,
    systemInstructions:
      'Rewrite content in clear plain language. Keep facts and legal meaning intact. Use direct verbs and short sentences.',
    outputContract:
      'Return revised content only; avoid implementation commentary unless requested.',
    outputChecklist: ['clear', 'short', 'direct'],
  },
  {
    id: 'headings',
    name: 'Heading structure cleanup',
    description:
      'Improve heading hierarchy and scanability while preserving section intent.',
    triggers: [
      'heading',
      'headings',
      'h1',
      'h2',
      'hierarchy',
      'outline',
      'scanability',
    ],
    antiTriggers: ['links only', 'url audit only'],
    priority: 1,
    systemInstructions:
      'Fix heading hierarchy and wording for scanability. Keep only one H1 and ensure nesting is logical.',
    outputContract:
      'Return ordered heading suggestions with the proposed text and hierarchy level.',
    outputChecklist: ['h1', 'h2', 'hierarchy'],
  },
  {
    id: 'alerts-rewrite',
    name: 'Alerts rewrite',
    description:
      'Rewrite alert banners and related links with clear action-oriented phrasing.',
    triggers: [
      'alert',
      'alerts',
      'warning',
      'banner',
      'recommendation',
      'rewrite alert',
      'link writing rules',
    ],
    antiTriggers: ['headings only', 'grammar only'],
    priority: 3,
    systemInstructions:
      'Rewrite alerts for clarity and action. Keep severity intent and place key action early.',
    outputContract:
      'Return per-alert before/after rewrites and include link-text recommendations when needed.',
    outputChecklist: ['before', 'after', 'link'],
  },
];
