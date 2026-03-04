import { TestBed } from '@angular/core/testing';

import { PromptComposerService } from './prompt-composer.service';

describe('PromptComposerService', () => {
  let service: PromptComposerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromptComposerService);
  });

  it('includes selected task fragments and base fragments', () => {
    const result = service.compose({
      basePrompt: 'You are a page rewrite assistant.',
      selectedSkillIds: ['plain-language'],
      mode: 'balanced',
      outputFormat: 'text',
    });

    expect(result.fragmentIds).toContain('base-preserve-intent');
    expect(result.fragmentIds).toContain('task-plain-language');
    expect(result.fragmentIds).toContain('mode-balanced');
    expect(result.fragmentIds).toContain('output-text');
  });

  it('keeps only one mode and one output fragment', () => {
    const result = service.compose({
      basePrompt: 'You are a page rewrite assistant.',
      selectedSkillIds: ['alerts-rewrite'],
      mode: 'strict-rewrite',
      outputFormat: 'json',
    });

    expect(result.fragmentIds.some((id) => id === 'mode-strict-rewrite')).toBeTrue();
    expect(result.fragmentIds.some((id) => id === 'mode-balanced')).toBeFalse();
    expect(result.fragmentIds.some((id) => id === 'output-json')).toBeTrue();
    expect(result.fragmentIds.some((id) => id === 'output-text')).toBeFalse();
  });
});
