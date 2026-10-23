import { inject, Injectable } from '@angular/core';

import { SkillService } from './skill.service';

import { PromptConfig, ReferenceKey, RubricKey } from '../../common/prompts/prompt.model';
import { ReferenceFragment } from '../../common/prompts/reference.prompt';
import { OutputFragment, RoleFragment, RubricFragment } from '../../common/prompts/shared.prompts';
import { ResolvedSkillResource } from '../../common/skills/skill.model';

export interface ComposedPrompt {
  prompt: string;
  loadedSkills: string[];
  loadedResources: string[];
  estimatedTokens: number;
  warnings: string[];
}

@Injectable({ providedIn: 'root' })
export class AiPromptService {
  private readonly skillService = inject(SkillService);

  async composePrompt(config: PromptConfig): Promise<string> {
    return (await this.composePromptDetails(config)).prompt;
  }

  async composePromptDetails(config: PromptConfig): Promise<ComposedPrompt> {
    const resolvedSkills = await this.skillService.resolveBindings(config.skills ?? [], config.output);
    const instructionResources = resolvedSkills.resources.filter((resource) => resource.kind !== 'asset');
    const assetResources = resolvedSkills.resources.filter((resource) => resource.kind === 'asset');

    if (config.jsonSchema && assetResources.length) {
      throw new Error('Prompt configuration cannot define jsonSchema when an attached skill supplies an output asset.');
    }

    const parts = [
      config.role ? `### Role\n${RoleFragment[config.role]}` : null,
      config.task ? `### Task\n${config.task}` : null,
      this.formatRubric(config.rubric),
      config.skill ? `### Activated skill: ${config.skill}` : null,
      this.formatSkillReferences(config.skillReferences),
      config.output ? `### Output requirements\n${OutputFragment[config.output]}` : null,
      config.jsonSchema ? `### JSON schema\n${config.jsonSchema}` : null,
      config.skillJsonSchema ? `### Skill asset: ${config.skillJsonSchema}` : null,
    ].filter((p) => p);
    return parts.join('\n\n');
  }

  private formatRubric(rubricKeys: RubricKey[]): string | null {
    if (!rubricKeys?.length) return null;
    const criteria = rubricKeys.flatMap((key) => RubricFragment[key]);
    return `### Quality criteria\n${criteria.map((c, i) => `${i + 1}. ${c}`).join('\n')}`;
  }

  private formatSkillReferences(referenceKeys: ReferenceKey[] | undefined): string | null {
    if (!referenceKeys?.length) return null;
    const references = referenceKeys.flatMap((key) => ReferenceFragment[key]);
    return `### Skill reference: ${references.map((c) => c).join('\n')}`;
  }
}
