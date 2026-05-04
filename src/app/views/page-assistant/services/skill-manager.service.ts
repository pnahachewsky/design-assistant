import { Injectable } from '@angular/core';

import { PromptKey } from '../data/data.model';

export type SkillOutputMode = 'json' | 'html' | 'text' | 'any';

export interface SkillManifestEntry {
  id: string;
  name: string;
  description: string;
  skillMdPath: string;
  triggerPhrases: string[];
  selectable?: boolean;
  includedSkillIds?: string[];
  promptKeys?: PromptKey[];
  outputModes?: SkillOutputMode[];
  defaultReferencePaths?: string[];
  optionalReferencePaths?: string[];
  defaultAssetPaths?: string[];
  referencePathsByPromptKey?: Partial<Record<PromptKey, string[]>>;
  optionalReferencePathsByPromptKey?: Partial<Record<PromptKey, string[]>>;
  assetPathsByPromptKey?: Partial<Record<PromptKey, string[]>>;
}

interface SkillManifestFile {
  skills?: SkillManifestEntry[];
}

export interface SkillSelectionRequest {
  queryText: string;
  promptKey?: PromptKey;
  outputMode?: SkillOutputMode;
}

export interface SkillCandidateScore {
  skill: SkillManifestEntry;
  score: number;
  reasons: string[];
}

export interface SkillComposeRequest extends SkillSelectionRequest {
  basePrompt: string;
  includeReferences?: boolean;
  includeOptionalReferences?: boolean;
  includeAssets?: boolean;
  requireSkill?: boolean;
  debugStorageKey?: string;
}

export interface SkillComposeResult {
  prompt: string;
  selectedSkill: SkillManifestEntry | null;
  candidates: SkillCandidateScore[];
  loadedPaths: string[];
  estimatedPromptTokens: number;
}

@Injectable({ providedIn: 'root' })
export class SkillManagerService {
  private readonly manifestUrl = new URL('skills/manifest.json', document.baseURI).toString();
  private manifestPromise: Promise<SkillManifestEntry[]> | null = null;
  private readonly textCache = new Map<string, Promise<string>>();

  async getSkillMetadata(): Promise<SkillManifestEntry[]> {
    return this.loadManifest();
  }

  async composePrompt(request: SkillComposeRequest): Promise<SkillComposeResult> {
    const candidates = await this.rankSkills(request);
    const selectedCandidate = candidates[0];
    const selectedSkill =
      selectedCandidate && selectedCandidate.score > 0 ? selectedCandidate.skill : null;

    const loadedPaths: string[] = [];
    const promptSections = [request.basePrompt.trim()].filter(Boolean);

    if (!selectedSkill && request.requireSkill) {
      throw new Error('No matching skill found for required skill prompt composition.');
    }

    if (selectedSkill) {
      try {
        const skills = await this.loadManifest();
        const skillMap = new Map(skills.map((skill) => [skill.id, skill]));
        await this.appendSkillSections({
          skill: selectedSkill,
          request,
          loadedPaths,
          promptSections,
          skillMap,
          loadedSkillIds: new Set<string>(),
          sectionLabel: 'Activated Skill',
        });
      } catch (err) {
        if (request.requireSkill) {
          throw err;
        }
        console.warn('Skill composition failed, using base prompt fallback:', err);
        promptSections.length = 0;
        promptSections.push(request.basePrompt.trim());
      }
    }

    const prompt = this.joinUniqueSections(promptSections);
    if (!prompt && request.requireSkill) {
      throw new Error('Required skill prompt composition produced an empty prompt.');
    }
    const estimatedPromptTokens = Math.ceil(prompt.length / 4);
    this.maybeLogDiagnostics({
      request,
      selectedSkill,
      candidates,
      loadedPaths,
      estimatedPromptTokens,
    });

    return {
      prompt,
      selectedSkill,
      candidates,
      loadedPaths,
      estimatedPromptTokens,
    };
  }

  async rankSkills(request: SkillSelectionRequest): Promise<SkillCandidateScore[]> {
    const skills = await this.loadManifest();
    const normalizedQuery = this.normalize(request.queryText);
    const queryTokens = this.getQueryTokens(normalizedQuery);

    const scored = skills
      .filter((skill) => skill.selectable !== false)
      .map((skill) => this.scoreSkill(skill, request, normalizedQuery, queryTokens));
    return scored.sort((a, b) => b.score - a.score);
  }

  private scoreSkill(
    skill: SkillManifestEntry,
    request: SkillSelectionRequest,
    normalizedQuery: string,
    queryTokens: string[],
  ): SkillCandidateScore {
    let score = 0;
    const reasons: string[] = [];

    if (request.promptKey && (skill.promptKeys ?? []).includes(request.promptKey)) {
      score += 4;
      reasons.push(`promptKey:${request.promptKey}`);
    }

    const requestedOutputMode = request.outputMode ?? 'any';
    if (requestedOutputMode !== 'any') {
      const supported = skill.outputModes ?? ['any'];
      if (supported.includes(requestedOutputMode) || supported.includes('any')) {
        score += 3;
        reasons.push(`outputMode:${requestedOutputMode}`);
      } else {
        score -= 2;
      }
    }

    const triggerHits = (skill.triggerPhrases ?? []).filter((phrase) =>
      normalizedQuery.includes(this.normalize(phrase)),
    );
    if (triggerHits.length) {
      score += Math.min(8, triggerHits.length * 2);
      reasons.push(`triggers:${triggerHits.length}`);
    }

    const description = this.normalize(skill.description);
    const overlap = queryTokens.filter((token) => description.includes(token)).length;
    if (overlap > 0) {
      score += Math.min(2, overlap * 0.25);
      reasons.push(`descriptionOverlap:${overlap}`);
    }

    return { skill, score, reasons };
  }

  private async loadManifest(): Promise<SkillManifestEntry[]> {
    if (!this.manifestPromise) {
      this.manifestPromise = (async () => {
        try {
          const response = await fetch(this.manifestUrl);
          if (!response.ok) {
            throw new Error(`Skill manifest request failed (${response.status}).`);
          }
          const data = (await response.json()) as SkillManifestFile;
          const skills = Array.isArray(data.skills) ? data.skills : [];
          return skills.filter((skill) => this.isValidSkill(skill));
        } catch (err) {
          console.warn('Failed to load skill manifest:', err);
          return [];
        }
      })();
    }
    return this.manifestPromise;
  }

  private isValidSkill(skill: SkillManifestEntry): boolean {
    return Boolean(skill?.id && skill?.name && skill?.description && skill?.skillMdPath);
  }

  private async loadText(path: string): Promise<string> {
    const pathUrl = new URL(path, document.baseURI).toString();
    if (!this.textCache.has(pathUrl)) {
      this.textCache.set(
        pathUrl,
        (async () => {
          try {
            const response = await fetch(pathUrl);
            if (!response.ok) {
              throw new Error(`Skill resource request failed (${response.status}): ${path}`);
            }
            return response.text();
          } catch (err) {
            this.textCache.delete(pathUrl);
            throw err;
          }
        })(),
      );
    }
    return this.textCache.get(pathUrl) as Promise<string>;
  }

  private stripFrontmatter(content: string): string {
    const frontmatterPattern = /^---\r?\n[\s\S]*?\r?\n---\r?\n?/;
    return content.replace(frontmatterPattern, '').trim();
  }

  private async appendSkillSections(params: {
    skill: SkillManifestEntry;
    request: SkillComposeRequest;
    loadedPaths: string[];
    promptSections: string[];
    skillMap: Map<string, SkillManifestEntry>;
    loadedSkillIds: Set<string>;
    sectionLabel: 'Activated Skill' | 'Included Skill';
  }): Promise<void> {
    const {
      skill,
      request,
      loadedPaths,
      promptSections,
      skillMap,
      loadedSkillIds,
      sectionLabel,
    } = params;

    if (loadedSkillIds.has(skill.id)) {
      return;
    }
    loadedSkillIds.add(skill.id);

    const skillRaw = await this.loadText(skill.skillMdPath);
    loadedPaths.push(skill.skillMdPath);
    const skillBody = this.stripFrontmatter(skillRaw);
    promptSections.push(
      [
        `### ${sectionLabel}`,
        `Skill: ${skill.name}`,
        `Description: ${skill.description}`,
      ].join('\n'),
    );
    promptSections.push(`### Skill Instructions\n${skillBody}`);

    const includeReferences = request.includeReferences !== false;
    if (includeReferences) {
      const referencePaths = this.getReferencePathsForRequest(skill, request);
      for (const path of referencePaths) {
        const content = await this.loadText(path);
        loadedPaths.push(path);
        promptSections.push(this.wrapResourceSection(path, 'Reference', content));
      }
    }

    const includeOptionalReferences = request.includeOptionalReferences === true;
    if (includeOptionalReferences) {
      const optionalPaths = this.getOptionalReferencePathsForRequest(skill, request);
      for (const path of optionalPaths) {
        const content = await this.loadText(path);
        loadedPaths.push(path);
        promptSections.push(this.wrapResourceSection(path, 'Optional Reference', content));
      }
    }

    const includeAssets = request.includeAssets === true;
    if (includeAssets) {
      const assetPaths = this.getAssetPathsForRequest(skill, request);
      for (const path of assetPaths) {
        const content = await this.loadText(path);
        loadedPaths.push(path);
        promptSections.push(this.wrapResourceSection(path, 'Asset', content));
      }
    }

    const includedSkillIds = skill.includedSkillIds ?? [];
    for (const includedSkillId of includedSkillIds) {
      const includedSkill = skillMap.get(includedSkillId);
      if (!includedSkill) {
        throw new Error(`Included skill not found: ${includedSkillId}`);
      }
      await this.appendSkillSections({
        skill: includedSkill,
        request,
        loadedPaths,
        promptSections,
        skillMap,
        loadedSkillIds,
        sectionLabel: 'Included Skill',
      });
    }
  }

  private wrapResourceSection(path: string, label: string, content: string): string {
    const fileName = path.split('/').pop() || path;
    return `### ${label}: ${fileName}\n${content.trim()}`;
  }

  private joinUniqueSections(sections: string[]): string {
    const unique: string[] = [];
    const seen = new Set<string>();
    for (const section of sections) {
      const normalized = section.trim();
      if (!normalized) continue;
      const dedupeKey = normalized.toLowerCase();
      if (seen.has(dedupeKey)) continue;
      seen.add(dedupeKey);
      unique.push(normalized);
    }
    return unique.join('\n\n');
  }

  private normalize(value: string): string {
    return (value || '').toLowerCase().replace(/\s+/g, ' ').trim();
  }

  private getQueryTokens(query: string): string[] {
    return query
      .split(/[^a-z0-9]+/g)
      .map((token) => token.trim())
      .filter((token) => token.length >= 4);
  }

  private getReferencePathsForRequest(
    skill: SkillManifestEntry,
    request: SkillComposeRequest,
  ): string[] {
    if (!request.promptKey) {
      return skill.defaultReferencePaths ?? [];
    }
    return (
      skill.referencePathsByPromptKey?.[request.promptKey] ??
      skill.defaultReferencePaths ??
      []
    );
  }

  private getOptionalReferencePathsForRequest(
    skill: SkillManifestEntry,
    request: SkillComposeRequest,
  ): string[] {
    if (!request.promptKey) {
      return skill.optionalReferencePaths ?? [];
    }
    return (
      skill.optionalReferencePathsByPromptKey?.[request.promptKey] ??
      skill.optionalReferencePaths ??
      []
    );
  }

  private getAssetPathsForRequest(
    skill: SkillManifestEntry,
    request: SkillComposeRequest,
  ): string[] {
    if (!request.promptKey) {
      return skill.defaultAssetPaths ?? [];
    }
    return (
      skill.assetPathsByPromptKey?.[request.promptKey] ??
      skill.defaultAssetPaths ??
      []
    );
  }

  private maybeLogDiagnostics(params: {
    request: SkillComposeRequest;
    selectedSkill: SkillManifestEntry | null;
    candidates: SkillCandidateScore[];
    loadedPaths: string[];
    estimatedPromptTokens: number;
  }): void {
    const storageKey = params.request.debugStorageKey || 'pageAssistant.skillDebug';
    if (!this.isDebugEnabled(storageKey)) {
      return;
    }
    const topCandidates = params.candidates.slice(0, 3).map((candidate) => ({
      id: candidate.skill.id,
      score: candidate.score,
      reasons: candidate.reasons,
    }));
    console.groupCollapsed('[SkillManager] prompt composition');
    console.log('Selected skill:', params.selectedSkill?.id || 'none');
    console.log('Top candidates:', topCandidates);
    console.log('Loaded resources:', params.loadedPaths);
    console.log('Estimated prompt tokens:', params.estimatedPromptTokens);
    console.groupEnd();
  }

  private isDebugEnabled(storageKey: string): boolean {
    try {
      return localStorage.getItem(storageKey) === 'true';
    } catch {
      return false;
    }
  }
}
