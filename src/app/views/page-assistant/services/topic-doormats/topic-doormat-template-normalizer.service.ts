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

    if (!doc.body.querySelector('.gc-srvinfo')) {
      if (this.normalizeLegacyListGroupTopicDoormats(doc)) {
        changed = true;
      }
    }

    if (!doc.body.querySelector('.gc-srvinfo')) {
      if (this.normalizeLegacyHeadingTopicDoormats(doc)) {
        changed = true;
      }
    }

    if (this.normalizeGcSrvinfoLayouts(doc)) {
      changed = true;
    }

    if (!changed) return { html, changed: false };

    return {
      html: this.serializeParsedHtmlLikeInput(html, doc),
      changed: true,
    };
  }

  private hasLegacyDoormatMarkup(html: string): boolean {
    return (
      /\b(?:mwsdoormat-links-container|gc-drmt)\b/.test(html) ||
      /\bgc-srvinfo\b/.test(html) ||
      /\blist-group\b/.test(html) ||
      /\b(?:Services and information|Services et renseignements|Services et information|Topics|Sujets)\b/.test(
        html,
      )
    );
  }

  private normalizeGcSrvinfoLayouts(doc: Document): boolean {
    let changed = false;

    Array.from(doc.body.querySelectorAll<HTMLElement>('.gc-srvinfo')).forEach(
      (section) => {
        if (this.removeGridClasses(section)) {
          changed = true;
        }

        Array.from(section.children)
          .filter(
            (child): child is HTMLElement =>
              child instanceof HTMLElement &&
              child.classList.contains('row') &&
              child.classList.contains('wb-eqht'),
          )
          .forEach((row) => {
            row.classList.remove('wb-eqht');
            row.classList.add('wb-eqht-grd');
            changed = true;
          });
      },
    );

    return changed;
  }

  private normalizeLegacyListGroupTopicDoormats(doc: Document): boolean {
    let changed = false;

    Array.from(
      doc.body.querySelectorAll<HTMLElement>('main ul.list-group'),
    ).forEach((list) => {
      if (!this.isLegacyTopicListGroup(list)) return;
      const section = this.buildModernSectionFromLegacyListGroup(list);
      if (!section) return;

      const heading = this.findLegacyTopicListHeading(list);
      if (heading) {
        heading.replaceWith(section);
        list.remove();
      } else {
        list.replaceWith(section);
      }
      changed = true;
    });

    return changed;
  }

  private buildModernSectionFromLegacyListGroup(
    list: HTMLElement,
  ): HTMLElement | null {
    const items = Array.from(list.children)
      .filter((child): child is HTMLElement => child.matches('li'))
      .map((item) => {
        const link = item.querySelector<HTMLAnchorElement>('a[href]');
        const href = link?.getAttribute('href')?.trim() ?? '';
        const label = this.cleanVisibleText(link?.textContent);
        const description = this.getLegacyListGroupItemDescription(item);
        return { href, label, description };
      })
      .filter((item) => item.href && item.label && item.description);
    if (items.length < 2) return null;

    const doc = list.ownerDocument;
    const section = doc.createElement('section');
    section.className = 'gc-srvinfo';

    const heading = doc.createElement('h2');
    heading.textContent =
      this.cleanVisibleText(this.findLegacyTopicListHeading(list)?.textContent) ||
      'Services and information';
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

  private isLegacyTopicListGroup(list: HTMLElement): boolean {
    if (
      list.closest(
        'nav, header, footer, aside, details, [hidden], [aria-hidden="true"], .gc-most-requested, .pagedetails, .gc-srvinfo, .gc-subway',
      )
    ) {
      return false;
    }

    const qualifyingItemCount = Array.from(list.children)
      .filter((child): child is HTMLElement => child.matches('li'))
      .filter((item) => {
        const link = item.querySelector<HTMLAnchorElement>('a[href]');
        return !!link && !!this.getLegacyListGroupItemDescription(item);
      }).length;
    if (qualifyingItemCount < 2) return false;

    return (
      !!this.findLegacyTopicListHeading(list) ||
      list.classList.contains('background-medium') ||
      !!list.querySelector('.background-medium')
    );
  }

  private getLegacyListGroupItemDescription(item: HTMLElement): string {
    const clone = item.cloneNode(true) as HTMLElement;
    clone.querySelector('a[href]')?.remove();
    clone
      .querySelectorAll(
        'ul, ol, nav, details, [hidden], [aria-hidden="true"], .pagedetails',
      )
      .forEach((element) => element.remove());
    return this.cleanVisibleText(clone.textContent);
  }

  private normalizeLegacyHeadingTopicDoormats(doc: Document): boolean {
    const heading = this.findLegacyHeadingTopicSection(doc);
    if (!heading) return false;

    const groups = this.collectLegacyHeadingTopicItems(heading);
    if (groups.length < 2) return false;

    const section = this.buildModernSectionFromItems(
      doc,
      groups.map((group) => group.item),
      this.cleanVisibleText(heading.textContent),
    );
    if (!section) return false;

    heading.parentElement?.insertBefore(section, heading);
    heading.remove();
    groups
      .flatMap((group) => group.sourceNodes)
      .forEach((node) => node.parentElement?.removeChild(node));
    return true;
  }

  private findLegacyHeadingTopicSection(doc: Document): HTMLElement | null {
    return (
      Array.from(
        doc.body.querySelectorAll<HTMLElement>('main h2, main h3, h2, h3'),
      ).find((heading) =>
        this.isGenericLegacyHeading(
          this.cleanVisibleText(heading.textContent),
        ),
      ) ?? null
    );
  }

  private collectLegacyHeadingTopicItems(
    heading: HTMLElement,
  ): Array<{ item: HTMLElement; sourceNodes: HTMLElement[] }> {
    const items: Array<{ item: HTMLElement; sourceNodes: HTMLElement[] }> = [];
    let current = heading.nextElementSibling as HTMLElement | null;
    while (current) {
      if (
        current.matches('h2') &&
          !this.isGenericLegacyHeading(
          this.cleanVisibleText(current.textContent),
        )
      ) {
        break;
      }
      if (current.matches('h2, h3')) {
        const sourceNodes = this.getLegacyHeadingTopicSourceNodes(current);
        const item = this.cloneLegacyHeadingTopicItem(sourceNodes);
        const link = item.querySelector<HTMLAnchorElement>('h2 a[href], h3 a[href]');
        if (link) items.push({ item, sourceNodes });
      }
      current = current.nextElementSibling as HTMLElement | null;
    }
    return items;
  }

  private getLegacyHeadingTopicSourceNodes(heading: HTMLElement): HTMLElement[] {
    const nodes = [heading];
    let current = heading.nextElementSibling as HTMLElement | null;
    while (current && !current.matches('h2, h3')) {
      nodes.push(current);
      current = current.nextElementSibling as HTMLElement | null;
    }
    return nodes;
  }

  private cloneLegacyHeadingTopicItem(nodes: HTMLElement[]): HTMLElement {
    const doc = nodes[0].ownerDocument;
    const item = doc.createElement('div');
    nodes.forEach((node) => item.appendChild(node.cloneNode(true)));
    return item;
  }

  private findLegacyTopicListHeading(list: HTMLElement): HTMLElement | null {
    let current = list.previousElementSibling as HTMLElement | null;
    while (current) {
      if (current.matches('h2, h3')) {
        const text = this.cleanVisibleText(current.textContent).toLowerCase();
        return /^(services and information|topics|services et renseignements|services et information|sujets)$/.test(
          text,
        )
          ? current
          : null;
      }
      if (current.matches('h1')) return null;
      current = current.previousElementSibling as HTMLElement | null;
    }
    return null;
  }

  private removeGridClasses(element: HTMLElement): boolean {
    const gridClassPattern = /^col-(?:xs|sm|md|lg|xl)-\d+$/;
    const classesToRemove = Array.from(element.classList).filter((className) =>
      gridClassPattern.test(className),
    );
    classesToRemove.forEach((className) => element.classList.remove(className));
    return classesToRemove.length > 0;
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
    return /^(topics|services and information|services et renseignements|services et information|sujets)$/.test(
      this.cleanVisibleText(value).toLowerCase(),
    );
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
