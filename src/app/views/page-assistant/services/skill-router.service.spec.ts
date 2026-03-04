import { TestBed } from '@angular/core/testing';

import { SkillRouterService } from './skill-router.service';

describe('SkillRouterService', () => {
  let service: SkillRouterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillRouterService);
  });

  it('routes plain-language requests to plain-language skill', () => {
    const routed = service.routeSkills(
      'Please rewrite this content in plain language and simplify it.',
    );

    expect(routed.some((entry) => entry.skill.id === 'plain-language')).toBeTrue();
  });

  it('returns one skill when top score is not very close to second', () => {
    const routed = service.routeSkills(
      'Rewrite alert banners and apply link writing rules.',
    );

    expect(routed.length).toBe(1);
    expect(routed[0]?.skill.id).toBe('alerts-rewrite');
  });

  it('returns two skills when top scores are very close', () => {
    const routed = service.routeSkills(
      'Use plain language and fix heading hierarchy for this page.',
    );

    expect(routed.length).toBe(2);
    expect(
      routed.some((entry) => entry.skill.id === 'plain-language'),
    ).toBeTrue();
    expect(routed.some((entry) => entry.skill.id === 'headings')).toBeTrue();
  });

  it('prefers alerts skill for alert rewrite requests', () => {
    const routed = service.routeSkills(
      'Rewrite alert banners and apply link writing rules.',
    );

    expect(routed[0]?.skill.id).toBe('alerts-rewrite');
  });

  it('returns a passing rubric for a matching skill selection', () => {
    const selected = service.routeSkills(
      'Fix heading hierarchy and headings for better scanability.',
      1,
    );
    const result = service.evaluateRubric({
      userText: 'Fix heading hierarchy and headings for better scanability.',
      selectedSkills: selected.map((entry) => entry.skill),
    });

    expect(result.passed).toBeTrue();
  });
});
