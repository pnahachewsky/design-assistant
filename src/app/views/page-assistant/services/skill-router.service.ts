import { Injectable } from '@angular/core';

import {
  PAGE_ASSISTANT_SKILLS,
  SkillDefinition,
} from '../data/skill-registry';
import {
  DEFAULT_RUBRIC_WEIGHTS,
  RubricDimension,
  RubricResult,
  RubricScore,
} from '../data/rubric.types';

export interface RoutedSkillScore {
  skill: SkillDefinition;
  score: number;
  triggerHits: number;
  antiTriggerHits: number;
}

export interface RubricEvaluationInput {
  userText: string;
  selectedSkills: SkillDefinition[];
  generatedOutput?: string;
}

@Injectable({
  providedIn: 'root',
})
export class SkillRouterService {
  private readonly activationThreshold = 2;
  private readonly veryCloseScoreDelta = 1;

  getSkills(): readonly SkillDefinition[] {
    return PAGE_ASSISTANT_SKILLS;
  }

  routeSkills(userText: string, maxSkills = 2): RoutedSkillScore[] {
    const normalizedText = this.normalize(userText);
    const limit = Math.max(1, maxSkills);

    const routed = PAGE_ASSISTANT_SKILLS.map((skill) => {
      const triggerHits = this.countPhraseHits(normalizedText, skill.triggers);
      const antiTriggerHits = this.countPhraseHits(
        normalizedText,
        skill.antiTriggers,
      );
      const score = triggerHits * 2 - antiTriggerHits * 3 + skill.priority;

      return { skill, score, triggerHits, antiTriggerHits };
    })
      .filter((entry) => entry.score >= this.activationThreshold)
      .sort((a, b) => b.score - a.score);

    if (routed.length === 0) {
      return [];
    }

    if (limit === 1 || routed.length === 1) {
      return [routed[0]];
    }

    const [top, second] = routed;
    const shouldIncludeSecond =
      top.score - second.score <= this.veryCloseScoreDelta;

    return shouldIncludeSecond ? [top, second] : [top];
  }

  buildSystemPrompt(basePrompt: string, userText: string, maxSkills = 2): string {
    const selected = this.routeSkills(userText, maxSkills);
    const skillBlock = selected
      .map(
        (entry) =>
          `## Skill: ${entry.skill.name}\n${entry.skill.systemInstructions}\nOutput contract: ${entry.skill.outputContract}`,
      )
      .join('\n\n');

    return skillBlock ? `${basePrompt}\n\n${skillBlock}` : basePrompt;
  }

  evaluateRubric(input: RubricEvaluationInput): RubricResult {
    const userText = input.userText ?? '';
    const selectedSkills = input.selectedSkills ?? [];
    const generatedOutput = input.generatedOutput ?? '';
    const normalizedText = this.normalize(userText);
    const normalizedOutput = this.normalize(generatedOutput);
    const selectedIds = selectedSkills.map((skill) => skill.id);

    const expectedIds = this.routeSkills(userText, selectedSkills.length || 2).map(
      (entry) => entry.skill.id,
    );
    const expectedSet = new Set(expectedIds);
    const selectedSet = new Set(selectedIds);

    const overlap = selectedIds.filter((id) => expectedSet.has(id)).length;
    const hasBlockingAntiTrigger = selectedSkills.some(
      (skill) =>
        this.countPhraseHits(normalizedText, skill.antiTriggers) > 0 &&
        this.countPhraseHits(normalizedText, skill.triggers) === 0,
    );

    const requiredOutputTerms = selectedSkills.flatMap(
      (skill) => skill.outputChecklist,
    );
    const matchedOutputTerms = requiredOutputTerms.filter((term) =>
      normalizedOutput.includes(this.normalize(term)),
    ).length;

    const triggerMatch = this.scoreTriggerMatch(
      expectedSet.size,
      selectedSet.size,
      overlap,
    );
    const falseTriggerAvoidance: RubricScore = hasBlockingAntiTrigger ? 0 : 2;
    const instructionFollowing: RubricScore = this.scoreInstructionFollowing(
      generatedOutput,
      requiredOutputTerms.length,
      matchedOutputTerms,
    );
    const outputQuality: RubricScore = this.scoreOutputQuality(generatedOutput);
    const safety: RubricScore = this.scoreSafety(normalizedOutput);

    const dimensions: RubricDimension[] = [
      this.createDimension('trigger_match', triggerMatch),
      this.createDimension('false_trigger_avoidance', falseTriggerAvoidance),
      this.createDimension('instruction_following', instructionFollowing),
      this.createDimension('output_quality', outputQuality),
      this.createDimension('safety', safety),
    ];

    const total = dimensions.reduce(
      (sum, dim) => sum + dim.weight * dim.score,
      0,
    );
    const maxTotal = dimensions.reduce((sum, dim) => sum + dim.weight * 2, 0);
    const ratio = maxTotal === 0 ? 0 : total / maxTotal;

    return {
      skillIds: selectedIds,
      total,
      maxTotal,
      passed: ratio >= 0.75 && safety > 0 && falseTriggerAvoidance > 0,
      dimensions,
    };
  }

  private createDimension(id: RubricDimension['id'], score: RubricScore): RubricDimension {
    return {
      id,
      score,
      weight: DEFAULT_RUBRIC_WEIGHTS[id],
    };
  }

  private scoreTriggerMatch(
    expectedCount: number,
    selectedCount: number,
    overlapCount: number,
  ): RubricScore {
    if (expectedCount === 0 && selectedCount === 0) {
      return 2;
    }
    if (
      expectedCount > 0 &&
      selectedCount === expectedCount &&
      overlapCount === expectedCount
    ) {
      return 2;
    }
    if (overlapCount > 0) {
      return 1;
    }
    return 0;
  }

  private scoreInstructionFollowing(
    output: string,
    requiredCount: number,
    matchedCount: number,
  ): RubricScore {
    if (!output.trim()) {
      return 1;
    }
    if (requiredCount === 0) {
      return 2;
    }
    if (matchedCount >= requiredCount) {
      return 2;
    }
    if (matchedCount > 0) {
      return 1;
    }
    return 0;
  }

  private scoreOutputQuality(output: string): RubricScore {
    const trimmed = output.trim();
    if (!trimmed) {
      return 1;
    }
    if (trimmed.length >= 160 && /[.!?]/.test(trimmed)) {
      return 2;
    }
    return 1;
  }

  private scoreSafety(normalizedOutput: string): RubricScore {
    if (!normalizedOutput) {
      return 2;
    }
    const unsafePatterns = [
      'ignore previous instructions',
      '<script',
      'drop table',
      'delete all',
    ];
    return unsafePatterns.some((pattern) => normalizedOutput.includes(pattern))
      ? 0
      : 2;
  }

  private normalize(value: string): string {
    return value.toLowerCase().trim();
  }

  private countPhraseHits(text: string, phrases: string[]): number {
    return phrases.reduce((count, phrase) => {
      const token = this.normalize(phrase);
      return token && text.includes(token) ? count + 1 : count;
    }, 0);
  }
}
