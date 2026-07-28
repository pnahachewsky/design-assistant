import { TestBed } from '@angular/core/testing';

import { PromptKey } from '../data/data.model';
import { SkillManagerService } from './skill-manager.service';

describe('SkillManagerService', () => {
  let service: SkillManagerService;
  let fetchSpy: jasmine.Spy<(input: RequestInfo | URL, init?: RequestInit) => Promise<Response>>;

  const manifestPayload = {
    skills: [
      {
        id: 'alerts-issues',
        name: 'alerts-issues',
        description: 'Analyzes Canada.ca web alerts.',
        skillMdPath: 'skills/alerts/alerts-issues/SKILL.md',
        triggerPhrases: ['alert', 'analyze alert', 'issues', 'wcag'],
        promptKeys: ['alertsIssues'],
        outputModes: ['json'],
        defaultReferencePaths: [
          'skills/alerts/alerts-issues/references/issue-analysis-instructions.json',
        ],
        defaultAssetPaths: ['skills/alerts/alerts-issues/assets/issues-output-schema.json'],
      },
      {
        id: 'alerts-rewriting',
        name: 'alerts-rewriting',
        description: 'Rewrites Canada.ca web alerts.',
        skillMdPath: 'skills/alerts/alerts-rewriting/SKILL.md',
        includedSkillIds: ['link-writing', 'canada-ca-style'],
        triggerPhrases: ['alert', 'rewrite alert', 'updated html'],
        promptKeys: ['alertsRecommendations'],
        outputModes: ['json'],
        defaultReferencePaths: [
          'skills/alerts/alerts-rewriting/references/shared-rewrite-guidance.json',
          'skills/alerts/alerts-rewriting/references/rewrite-instructions.json',
          'skills/alerts/alerts-rewriting/references/runtime-rewrite-rules.json',
        ],
        optionalReferencePaths: ['skills/alerts/alerts-rewriting/references/examples.json'],
        defaultAssetPaths: ['skills/alerts/alerts-rewriting/assets/rewriting-output-schema.json'],
      },
      {
        id: 'link-writing',
        name: 'link-writing',
        description: 'Shared link-writing rules.',
        skillMdPath: 'skills/link-writing/SKILL.md',
        selectable: false,
        triggerPhrases: [],
        defaultReferencePaths: ['skills/link-writing/references/link-writing-rules.json'],
      },
      {
        id: 'canada-ca-style',
        name: 'canada-ca-style',
        description: 'Shared Canada.ca writing style rules.',
        skillMdPath: 'skills/canada-ca-style/SKILL.md',
        selectable: false,
        triggerPhrases: [],
        defaultReferencePaths: ['skills/canada-ca-style/references/writing-rules.json'],
      },
      {
        id: 'topic-doormats',
        name: 'topic-doormats',
        description: 'Shared GCWeb topic doormat guidance.',
        skillMdPath: 'skills/topic-doormats/SKILL.md',
        selectable: false,
        triggerPhrases: [],
      },
      {
        id: 'topic-doormats-issues',
        name: 'topic-doormats-issues',
        description: 'Analyzes GCWeb topic doormats for issues.',
        skillMdPath: 'skills/topic-doormats/issues/SKILL.md',
        includedSkillIds: ['topic-doormats'],
        triggerPhrases: ['doormat', 'doormats', 'topic doormat', 'analyze topic doormats', 'issues'],
        promptKeys: ['doormats'],
        outputModes: ['json', 'html'],
        defaultReferencePaths: ['skills/topic-doormats/issues/references/issue-taxonomy.json'],
        defaultAssetPaths: ['skills/topic-doormats/issues/assets/issues-output-schema.json'],
      },
      {
        id: 'topic-doormats-rewrite',
        name: 'topic-doormats-rewrite',
        description: 'Rewrites GCWeb topic doormats into consistent link text and descriptions.',
        skillMdPath: 'skills/topic-doormats/rewrite/SKILL.md',
        includedSkillIds: ['topic-doormats'],
        triggerPhrases: [
          'doormat',
          'doormats',
          'topic doormat',
          'rewrite doormat',
          'rewrite doormats',
          'rewrite',
          'replacement',
          'updated html',
          'recommendations',
        ],
        promptKeys: ['doormats'],
        outputModes: ['json', 'html'],
        defaultReferencePaths: ['skills/topic-doormats/rewrite/references/rewrite-rules.json'],
        defaultAssetPaths: ['skills/topic-doormats/rewrite/assets/rewrite-output-schema.json'],
      },
    ],
  };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillManagerService);
    fetchSpy = spyOn(window, 'fetch').and.callFake(
      async (input: RequestInfo | URL): Promise<Response> => {
        const url = String(input);
        if (url.includes('skills/manifest.json')) {
          return new Response(JSON.stringify(manifestPayload), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
          });
        }
        if (url.includes('skills/alerts/alerts-issues/SKILL.md')) {
          return new Response(
            '---\nname: test-issues-skill\ndescription: test\n---\n# Instructions\nFollow alert issues rubric.',
            { status: 200 },
          );
        }
        if (url.includes('skills/alerts/alerts-rewriting/SKILL.md')) {
          return new Response(
            '---\nname: test-rewriting-skill\ndescription: test\n---\n# Instructions\nRewrite alert HTML.',
            { status: 200 },
          );
        }
        if (url.includes('skills/link-writing/SKILL.md')) {
          return new Response(
            '---\nname: test-link-skill\ndescription: test\n---\n# Instructions\nApply shared link rules.',
            { status: 200 },
          );
        }
        if (url.includes('skills/canada-ca-style/SKILL.md')) {
          return new Response(
            '---\nname: test-canada-ca-style\ndescription: test\n---\n# Instructions\nApply Canada.ca style rules.',
            { status: 200 },
          );
        }
        if (url.includes('skills/topic-doormats/rewrite/SKILL.md')) {
          return new Response(
            '---\nname: test-topic-doormats-rewrite\ndescription: test\n---\n# Instructions\nRewrite topic doormats.',
            { status: 200 },
          );
        }
        if (url.includes('skills/topic-doormats/issues/SKILL.md')) {
          return new Response(
            '---\nname: test-topic-doormats-issues\ndescription: test\n---\n# Instructions\nAnalyze topic doormat issues.',
            { status: 200 },
          );
        }
        if (url.includes('skills/topic-doormats/SKILL.md')) {
          return new Response(
            '---\nname: test-topic-doormats\ndescription: test\n---\n# Instructions\nApply shared topic doormat rules.',
            { status: 200 },
          );
        }
        if (url.includes('skills/alerts/alerts-rewriting/references/examples.json')) {
          return new Response('[{"id":"ex-1"}]', { status: 200 });
        }
        if (url.includes('skills/link-writing/references/link-writing-rules.json')) {
          return new Response(
            '{"version":"test","rules":[{"id":"L1","condition":"always","text":"Use descriptive link text."}]}',
            { status: 200 },
          );
        }
        if (url.includes('skills/canada-ca-style/references/writing-rules.json')) {
          return new Response('{"rules":[{"id":"C1"}]}', { status: 200 });
        }
        if (url.includes('issue-analysis-instructions.json')) {
          return new Response('{"objective":"Analyze alerts."}', { status: 200 });
        }
        if (url.includes('shared-rewrite-guidance.json')) {
          return new Response(
            '{"styleRules":["Use shared guidance."],"exampleRules":["Use examples as patterns."]}',
            { status: 200 },
          );
        }
        if (url.includes('rewrite-instructions.json')) {
          return new Response('{"rewriteRules":["Use one link max."]}', { status: 200 });
        }
        if (url.includes('runtime-rewrite-rules.json')) {
          return new Response(
            JSON.stringify({
              version: 'test',
              alertRewrite: {
                styleRulesBase: [],
                styleRulesWithExamples: [],
                systemPromptWithExamplesLines: [],
                systemPromptWithoutExamplesLines: [],
                retryInstructions: {},
              },
            }),
            { status: 200 },
          );
        }
        if (url.includes('issues-output-schema.json')) {
          return new Response('{"type":"object"}', { status: 200 });
        }
        if (url.includes('rewriting-output-schema.json')) {
          return new Response('{"type":"object"}', { status: 200 });
        }
        if (url.includes('topic-doormats/rewrite/references/rewrite-rules.json')) {
          return new Response('{"rules":[{"id":"rewrite-complete-set"}]}', {
            status: 200,
          });
        }
        if (url.includes('topic-doormats/rewrite/assets/rewrite-output-schema.json')) {
          return new Response('{"type":"object"}', { status: 200 });
        }
        if (url.includes('topic-doormats/issues/references/issue-taxonomy.json')) {
          return new Response('{"issues":[]}', { status: 200 });
        }
        if (url.includes('topic-doormats/issues/assets/issues-output-schema.json')) {
          return new Response('{"type":"object"}', { status: 200 });
        }
        return new Response('Not found', { status: 404 });
      },
    );
  });

  it('loads only metadata when no skill is selected', async () => {
    const result = await service.composePrompt({
      basePrompt: 'Base prompt',
      queryText: 'rewrite headings only',
      promptKey: PromptKey.Headings,
      outputMode: 'text',
    });

    expect(result.selectedSkill).toBeNull();
    const loadedSkillFile = fetchSpy.calls
      .allArgs()
      .some((args) => String(args[0]).includes('/SKILL.md'));
    expect(loadedSkillFile).toBeFalse();
  });

  it('selects and loads matching skill resources when output mode matches', async () => {
    const result = await service.composePrompt({
      basePrompt: 'Base prompt',
      queryText: 'rewrite alert content using json schema',
      promptKey: PromptKey.AlertsIssues,
      outputMode: 'json',
      includeReferences: true,
      includeOptionalReferences: true,
      includeAssets: true,
    });

    expect(result.selectedSkill?.id).toBe('alerts-issues');
    expect(result.loadedPaths).toContain('skills/alerts/alerts-issues/SKILL.md');
    expect(result.loadedPaths).toContain(
      'skills/alerts/alerts-issues/references/issue-analysis-instructions.json',
    );
    expect(result.loadedPaths).toContain(
      'skills/alerts/alerts-issues/assets/issues-output-schema.json',
    );
    expect(result.prompt).toContain('### Activated Skill');
  });

  it('falls back when html output is requested and no html-compatible skill is configured', async () => {
    const result = await service.composePrompt({
      basePrompt: 'Base prompt',
      queryText: 'rewrite alert content and return raw html',
      promptKey: PromptKey.AlertsIssues,
      outputMode: 'html',
    });

    expect(result.selectedSkill).toBeNull();
    expect(result.prompt).toBe('Base prompt');
  });

  it('loads rewriting schema for alertsRecommendations prompt key', async () => {
    const result = await service.composePrompt({
      basePrompt: 'Base prompt',
      queryText: 'rewrite alert content and return json replacements',
      promptKey: PromptKey.AlertsRecommendations,
      outputMode: 'json',
      includeReferences: true,
      includeOptionalReferences: true,
      includeAssets: true,
    });

    expect(result.selectedSkill?.id).toBe('alerts-rewriting');
    expect(result.loadedPaths).toContain(
      'skills/alerts/alerts-rewriting/assets/rewriting-output-schema.json',
    );
    expect(result.loadedPaths).not.toContain(
      'skills/alerts/alerts-issues/assets/issues-output-schema.json',
    );
    expect(result.loadedPaths).toContain(
      'skills/alerts/alerts-rewriting/references/shared-rewrite-guidance.json',
    );
    expect(result.loadedPaths).toContain(
      'skills/alerts/alerts-rewriting/references/rewrite-instructions.json',
    );
    expect(result.loadedPaths).toContain(
      'skills/alerts/alerts-rewriting/references/runtime-rewrite-rules.json',
    );
    expect(result.loadedPaths).toContain(
      'skills/alerts/alerts-rewriting/references/examples.json',
    );
    expect(result.loadedPaths).toContain(
      'skills/link-writing/SKILL.md',
    );
    expect(result.loadedPaths).toContain(
      'skills/link-writing/references/link-writing-rules.json',
    );
    expect(result.loadedPaths).toContain(
      'skills/canada-ca-style/SKILL.md',
    );
    expect(result.loadedPaths).toContain(
      'skills/canada-ca-style/references/writing-rules.json',
    );
    expect(result.prompt).toContain('### Included Skill');
  });

  it('selects the topic doormat rewrite skill for doormat HTML rewrites', async () => {
    const result = await service.composePrompt({
      basePrompt: 'Return full updated HTML.',
      queryText:
        'rewrite topic doormats replacement updated html doormat overview list content design',
      promptKey: PromptKey.Doormats,
      outputMode: 'html',
      includeReferences: true,
      includeAssets: false,
      requireSkill: true,
    });

    expect(result.selectedSkill?.id).toBe('topic-doormats-rewrite');
    expect(result.loadedPaths).toContain(
      'skills/topic-doormats/rewrite/SKILL.md',
    );
    expect(result.loadedPaths).toContain(
      'skills/topic-doormats/rewrite/references/rewrite-rules.json',
    );
    expect(result.loadedPaths).toContain('skills/topic-doormats/SKILL.md');
    expect(result.loadedPaths).not.toContain(
      'skills/topic-doormats/rewrite/assets/rewrite-output-schema.json',
    );
    expect(result.prompt).toContain('Rewrite topic doormats.');
    expect(result.prompt).toContain('Return full updated HTML.');
  });

  it('loads structured JSON from a skill default reference', async () => {
    const rules = await service.loadSkillReferenceJson<{
      version: string;
      rules: Array<{ id: string; text: string }>;
    }>('link-writing');

    expect(rules.version).toBe('test');
    expect(rules.rules[0]).toEqual(
      jasmine.objectContaining({
        id: 'L1',
        text: 'Use descriptive link text.',
      }),
    );
  });

  it('falls back to base prompt when skill resources fail to load', async () => {
    fetchSpy.and.callFake(async (input: RequestInfo | URL): Promise<Response> => {
      const url = String(input);
      if (url.includes('skills/manifest.json')) {
        return new Response(JSON.stringify(manifestPayload), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });
      }
      if (
        url.includes('skills/alerts/alerts-issues/SKILL.md') ||
        url.includes('skills/alerts/alerts-rewriting/SKILL.md')
      ) {
        return new Response('Not found', { status: 404 });
      }
      return new Response('Not found', { status: 404 });
    });

    const result = await service.composePrompt({
      basePrompt: 'Base prompt',
      queryText: 'rewrite alert content using json schema',
      promptKey: PromptKey.AlertsIssues,
      outputMode: 'json',
      includeReferences: true,
      includeAssets: true,
    });

    expect(result.prompt).toBe('Base prompt');
  });
});
