import { Injectable, inject } from '@angular/core';

import { TOPIC_PAGE_SNIPPETS } from '../../data/canada-ca-snippets.constants';
import { SnippetService } from '../snippet.service';

export interface TopicDoormatTemplateNormalizationResult {
  html: string;
  changed: boolean;
}

@Injectable({ providedIn: 'root' })
export class TopicDoormatTemplateNormalizerService {
  private readonly snippetService = inject(SnippetService);

  normalizeLegacyDoormats(
    html: string,
  ): TopicDoormatTemplateNormalizationResult {
    if (!html || !this.hasLegacyDoormatMarkup(html)) {
      return { html, changed: false };
    }

    const doc = new DOMParser().parseFromString(html, 'text/html');
    let changed = false;

    Array.from(
      doc.body.querySelectorAll<HTMLElement>(
        '.mwsdoormat-links-container.section, .mwsdoormat-links-container',
      ),
    ).forEach((container) => {
      const modernSection = this.buildModernSection(container);
      if (!modernSection) return;
      container.replaceWith(modernSection);
      changed = true;
    });

    if (!doc.body.querySelector('.gc-srvinfo')) {
      const standaloneSection = this.buildStandaloneModernSection(doc);
      if (standaloneSection) {
        standaloneSection.source.replaceWith(standaloneSection.section);
        changed = true;
      }
    }

    if (!changed) return { html, changed: false };

    return {
      html: this.serializeParsedHtmlLikeInput(html, doc),
      changed: true,
    };
  }

  private hasLegacyDoormatMarkup(html: string): boolean {
    return /\b(?:mwsdoormat-links-container|gc-drmt)\b/.test(html);
  }

  private buildModernSection(container: HTMLElement): HTMLElement | null {
    const items = this.extractLegacyItems(container);
    if (!items.length) return null;

    const doc = container.ownerDocument;
    const section = doc.createElement('section');
    section.className = 'gc-srvinfo';

    const isGenericHeading = this.hasGenericLegacyHeading(container);
    const heading = doc.createElement('h2');
    heading.textContent = this.getModernSectionHeading(container);
    if (isGenericHeading) {
      heading.className = 'wb-inv';
    }
    section.appendChild(heading);

    const row = doc.createElement('div');
    row.className = 'row wb-eqht-grd';
    row.innerHTML = items
      .map((item) =>
        this.snippetService.applySnippet(TOPIC_PAGE_SNIPPETS.serviceItem, {
          url: this.escapeHtml(item.href),
          label: this.escapeHtml(item.label),
          description: this.escapeHtml(item.description),
        }),
      )
      .join('\n');
    section.appendChild(row);

    return section;
  }

  private extractLegacyItems(
    container: HTMLElement,
  ): { href: string; label: string; description: string }[] {
    return Array.from(container.querySelectorAll<HTMLElement>('.gc-drmt'))
      .map((item) => {
        const link =
          item.querySelector<HTMLAnchorElement>('h2 a[href], h3 a[href]') ??
          item.querySelector<HTMLAnchorElement>('a[href]');
        const href = link?.getAttribute('href')?.trim() ?? '';
        const label = this.cleanVisibleText(link?.textContent);
        const description = this.cleanVisibleText(
          item.querySelector('p')?.textContent,
        );
        return { href, label, description };
      })
      .filter((item) => item.href && item.label);
  }

  private buildStandaloneModernSection(
    doc: Document,
  ): { source: HTMLElement; section: HTMLElement } | null {
    const legacyItems = Array.from(doc.body.querySelectorAll<HTMLElement>('.gc-drmt'));
    if (!legacyItems.length) return null;

    const source =
      legacyItems[0].closest<HTMLElement>('.row') ??
      legacyItems[0].parentElement;
    if (!source) return null;

    const section = this.buildModernSectionFromItems(
      doc,
      legacyItems,
      this.findStandaloneSectionHeading(legacyItems[0]),
    );
    return section ? { source, section } : null;
  }

  private buildModernSectionFromItems(
    doc: Document,
    legacyItems: HTMLElement[],
    sectionHeading: string,
  ): HTMLElement | null {
    const items = legacyItems
      .map((item) => {
        const link =
          item.querySelector<HTMLAnchorElement>('h2 a[href], h3 a[href]') ??
          item.querySelector<HTMLAnchorElement>('a[href]');
        const href = link?.getAttribute('href')?.trim() ?? '';
        const label = this.cleanVisibleText(link?.textContent);
        const description = this.cleanVisibleText(
          item.querySelector('p')?.textContent,
        );
        return { href, label, description };
      })
      .filter((item) => item.href && item.label);
    if (!items.length) return null;

    const section = doc.createElement('section');
    section.className = 'gc-srvinfo';

    const heading = doc.createElement('h2');
    heading.textContent = sectionHeading || 'Services and information';
    if (!sectionHeading || this.isGenericLegacyHeading(sectionHeading)) {
      heading.className = 'wb-inv';
      heading.textContent = 'Services and information';
    }
    section.appendChild(heading);

    const row = doc.createElement('div');
    row.className = 'row wb-eqht-grd';
    row.innerHTML = items
      .map((item) =>
        this.snippetService.applySnippet(TOPIC_PAGE_SNIPPETS.serviceItem, {
          url: this.escapeHtml(item.href),
          label: this.escapeHtml(item.label),
          description: this.escapeHtml(item.description),
        }),
      )
      .join('\n');
    section.appendChild(row);

    return section;
  }

  private findStandaloneSectionHeading(firstItem: HTMLElement): string {
    let current = firstItem.parentElement;
    while (current) {
      let previous = current.previousElementSibling as HTMLElement | null;
      while (previous) {
        if (previous.matches('h2, h3')) {
          return this.cleanVisibleText(previous.textContent);
        }
        previous = previous.previousElementSibling as HTMLElement | null;
      }
      current = current.parentElement;
    }
    return '';
  }

  private getModernSectionHeading(container: HTMLElement): string {
    const legacyHeading = Array.from(
      container.children,
    ).find((child): child is HTMLElement => child.matches('h2, h3'));
    const headingText = this.cleanVisibleText(legacyHeading?.textContent);
    if (!headingText || this.isGenericLegacyHeading(headingText)) {
      return 'Services and information';
    }
    return headingText;
  }

  private hasGenericLegacyHeading(container: HTMLElement): boolean {
    const legacyHeading = Array.from(
      container.children,
    ).find((child): child is HTMLElement => child.matches('h2, h3'));
    return this.isGenericLegacyHeading(legacyHeading?.textContent);
  }

  private isGenericLegacyHeading(value: string | null | undefined): boolean {
    return this.cleanVisibleText(value).toLowerCase() === 'topics';
  }

  private serializeParsedHtmlLikeInput(originalHtml: string, doc: Document): string {
    if (/<html[\s>]/i.test(originalHtml)) {
      const doctype = originalHtml.trimStart().toLowerCase().startsWith('<!doctype')
        ? '<!doctype html>\n'
        : '';
      return `${doctype}${doc.documentElement.outerHTML}`;
    }
    if (/<body[\s>]/i.test(originalHtml)) {
      return doc.body.outerHTML;
    }
    return doc.body.innerHTML;
  }

  private cleanVisibleText(value: string | null | undefined): string {
    return (value || '').replace(/\s+/g, ' ').trim();
  }

  private escapeHtml(value: string): string {
    return value
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }
}
