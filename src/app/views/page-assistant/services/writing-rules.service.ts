import { Injectable } from '@angular/core';

export type WritingRulesLanguage = 'en' | 'fr';

@Injectable({ providedIn: 'root' })
export class WritingRulesService {
  private readonly spaceBeforeCommaCheckPattern = /[ \t\u00a0\u202f]+,/;
  private readonly englishSpaceBeforePunctuationPattern =
    /[ \t\u00a0\u202f]+([,.;:!?])/g;
  private readonly frenchSpaceBeforePunctuationPattern =
    /[ \t\u00a0\u202f]+([,.;!?])/g;
  private readonly frenchSpaceBeforeColonPattern =
    /([\p{L})\]"»])[ \t\u00a0\u202f]+:(?![\d/])/gu;
  private readonly frenchMissingSpaceBeforeColonPattern =
    /([\p{L})\]"»])(?=:(?![\d/]))/gu;
  private readonly writingAttributeNames = [
    'alt',
    'aria-description',
    'aria-label',
    'label',
    'placeholder',
    'title',
  ];

  normalizeText(value: string, language: WritingRulesLanguage = 'en'): string {
    const text = value || '';
    if (language === 'fr') {
      return text
        .replace(this.frenchSpaceBeforePunctuationPattern, '$1')
        .replace(this.frenchSpaceBeforeColonPattern, '$1\u00a0:')
        .replace(this.frenchMissingSpaceBeforeColonPattern, '$1\u00a0');
    }

    return text.replace(this.englishSpaceBeforePunctuationPattern, '$1');
  }

  hasSpaceBeforeComma(value: string): boolean {
    return this.spaceBeforeCommaCheckPattern.test(value || '');
  }

  normalizeHtmlDocument(
    html: string,
    language: WritingRulesLanguage = 'en',
  ): string {
    if (!html) return html;

    try {
      const doc = new DOMParser().parseFromString(html, 'text/html');
      this.normalizeNodeText(doc.body, language);
      this.normalizeWritingAttributes(doc, language);
      return this.serializeParsedHtmlLikeInput(html, doc);
    } catch {
      return this.normalizeText(html, language);
    }
  }

  private normalizeNodeText(
    root: ParentNode,
    language: WritingRulesLanguage,
  ): void {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const textNodes: Text[] = [];
    while (walker.nextNode()) {
      const node = walker.currentNode as Text;
      if (this.shouldSkipTextNode(node)) continue;
      textNodes.push(node);
    }
    textNodes.forEach((node) => {
      node.nodeValue = this.normalizeText(node.nodeValue || '', language);
    });
  }

  private shouldSkipTextNode(node: Text): boolean {
    const parent = node.parentElement;
    if (!parent) return false;
    return ['script', 'style', 'template'].includes(parent.tagName.toLowerCase());
  }

  private normalizeWritingAttributes(
    doc: Document,
    language: WritingRulesLanguage,
  ): void {
    this.writingAttributeNames.forEach((attributeName) => {
      doc.querySelectorAll(`[${attributeName}]`).forEach((element) => {
        const value = element.getAttribute(attributeName);
        if (value === null) return;
        element.setAttribute(attributeName, this.normalizeText(value, language));
      });
    });
    doc
      .querySelectorAll(
        [
          'meta[name="description"][content]',
          'meta[name="dc.description"][content]',
          'meta[name="dcterms.description"][content]',
          'meta[name="twitter:description"][content]',
          'meta[property="og:description"][content]',
        ].join(', '),
      )
      .forEach((element) => {
        const value = element.getAttribute('content');
        if (value === null) return;
        element.setAttribute('content', this.normalizeText(value, language));
      });
  }

  private serializeParsedHtmlLikeInput(originalHtml: string, doc: Document): string {
    if (/<html[\s>]/i.test(originalHtml)) {
      const doctype = originalHtml.trimStart().toLowerCase().startsWith('<!doctype')
        ? '<!doctype html>\n'
        : '';
      return `${doctype}${doc.documentElement.outerHTML}`;
    }
    if (/<body[\s>]/i.test(originalHtml)) return doc.body.outerHTML;
    return doc.body.innerHTML;
  }
}
