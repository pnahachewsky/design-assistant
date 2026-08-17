import { TestBed } from '@angular/core/testing';

import { WritingRulesService } from './writing-rules.service';

describe('WritingRulesService', () => {
  let service: WritingRulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WritingRulesService],
    });

    service = TestBed.inject(WritingRulesService);
  });

  it('removes spaces before commas from plain text', () => {
    expect(
      service.normalizeText('English , French\u00a0, and narrow\u202f, spacing.'),
    ).toBe('English, French, and narrow, spacing.');
  });

  it('removes English spaces before punctuation', () => {
    expect(
      service.normalizeText('One , two . three ; four : five ! six ?', 'en'),
    ).toBe('One, two. three; four: five! six?');
  });

  it('uses French Canada spacing before punctuation', () => {
    expect(
      service.normalizeText('Un , deux . trois ; quatre : cinq ! six ?', 'fr'),
    ).toBe('Un, deux. trois; quatre\u00a0: cinq! six?');
  });

  it('adds French non-breaking spacing before a missing colon space', () => {
    expect(service.normalizeText('Remarque: consultez votre compte.', 'fr')).toBe(
      'Remarque\u00a0: consultez votre compte.',
    );
  });

  it('does not treat URL schemes or numeric times as French colons', () => {
    expect(service.normalizeText('https://example.ca 10 : 30', 'fr')).toBe(
      'https://example.ca 10 : 30',
    );
  });

  it('detects spaces before commas in plain text', () => {
    expect(service.hasSpaceBeforeComma('Text , with a problem.')).toBeTrue();
    expect(service.hasSpaceBeforeComma('Text, without a problem.')).toBeFalse();
  });

  it('normalizes page text and writing attributes without changing links', () => {
    const result = service.normalizeHtmlDocument(
      '<main><a href="/search?q=a ,b" title="CRA , forms">CRA , forms</a><img alt="Tax , benefit" src="/img.png"></main>',
      'en',
    );

    expect(result).toContain('>CRA, forms</a>');
    expect(result).toContain('title="CRA, forms"');
    expect(result).toContain('alt="Tax, benefit"');
    expect(result).toContain('href="/search?q=a ,b"');
  });

  it('does not normalize script or style text', () => {
    const result = service.normalizeHtmlDocument(
      '<main><p>Visible , text.</p><script>const text = "Do not change , here";</script><style>.x::before { content: "Do not change , here"; }</style></main>',
      'en',
    );

    expect(result).toContain('<p>Visible, text.</p>');
    expect(result).toContain('Do not change , here');
  });
});
