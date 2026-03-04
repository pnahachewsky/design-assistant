import { Injectable } from '@angular/core';

import {
  PAGE_ASSISTANT_PROMPT_FRAGMENTS,
  PROMPT_LEVEL_ORDER,
  PromptFragment,
  PromptMode,
  PromptOutputFormat,
} from '../data/prompt-fragments';
import { SkillId } from '../data/skill-registry';

export interface ComposePromptInput {
  basePrompt: string;
  selectedSkillIds: SkillId[];
  mode?: PromptMode;
  outputFormat?: PromptOutputFormat;
}

export interface ComposePromptResult {
  prompt: string;
  fragmentIds: string[];
  fragments: PromptFragment[];
}

@Injectable({
  providedIn: 'root',
})
export class PromptComposerService {
  compose(input: ComposePromptInput): ComposePromptResult {
    const mode = input.mode ?? 'balanced';
    const outputFormat = input.outputFormat ?? 'text';
    const selectedSkillIds = new Set(input.selectedSkillIds ?? []);

    let selected = PAGE_ASSISTANT_PROMPT_FRAGMENTS.filter((fragment) => {
      if (fragment.level === 'base') {
        return true;
      }
      if (fragment.level === 'task') {
        return (
          !!fragment.skillIds &&
          fragment.skillIds.some((skillId) => selectedSkillIds.has(skillId))
        );
      }
      if (fragment.level === 'mode') {
        return fragment.mode === mode;
      }
      if (fragment.level === 'output') {
        return fragment.outputFormat === outputFormat;
      }
      return false;
    });

    selected = this.applyRequirements(selected);
    selected = this.applyConflictResolution(selected);
    selected = this.deduplicateByText(selected);
    selected = this.sortForAssembly(selected);

    const promptParts = [
      input.basePrompt.trim(),
      ...selected.map((fragment) => fragment.text.trim()),
    ].filter(Boolean);

    return {
      prompt: promptParts.join('\n\n'),
      fragmentIds: selected.map((fragment) => fragment.id),
      fragments: selected,
    };
  }

  private applyRequirements(fragments: PromptFragment[]): PromptFragment[] {
    const ids = new Set(fragments.map((fragment) => fragment.id));
    return fragments.filter(
      (fragment) =>
        !fragment.requires || fragment.requires.every((requiredId) => ids.has(requiredId)),
    );
  }

  private applyConflictResolution(fragments: PromptFragment[]): PromptFragment[] {
    const sorted = [...fragments].sort((a, b) => b.priority - a.priority);
    const kept: PromptFragment[] = [];

    for (const fragment of sorted) {
      const conflictsWithKept = kept.some(
        (keptFragment) =>
          (fragment.conflictsWith ?? []).includes(keptFragment.id) ||
          (keptFragment.conflictsWith ?? []).includes(fragment.id),
      );
      if (!conflictsWithKept) {
        kept.push(fragment);
      }
    }

    return kept;
  }

  private deduplicateByText(fragments: PromptFragment[]): PromptFragment[] {
    const seen = new Set<string>();
    const deduplicated: PromptFragment[] = [];

    for (const fragment of fragments) {
      const normalizedText = fragment.text.toLowerCase().trim();
      if (seen.has(normalizedText)) {
        continue;
      }
      seen.add(normalizedText);
      deduplicated.push(fragment);
    }

    return deduplicated;
  }

  private sortForAssembly(fragments: PromptFragment[]): PromptFragment[] {
    return [...fragments].sort((a, b) => {
      const levelDiff = PROMPT_LEVEL_ORDER[a.level] - PROMPT_LEVEL_ORDER[b.level];
      if (levelDiff !== 0) {
        return levelDiff;
      }
      return b.priority - a.priority;
    });
  }
}
