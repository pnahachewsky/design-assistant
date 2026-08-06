import { Injectable } from '@angular/core';
import { allowedElements, allowedClasses, disallowedAttributes, guidanceMap, guidanceExclusionMap, guidanceContentMap } from '../data/css-list.config';

const SUBWAY_DOORMATS_GUIDANCE = {
  id: 'subwayDoormats',
  name: 'page.tools.guidance.craVariant.subwayDoormats.title',
  url: 'page.tools.guidance.craVariant.doormats.url',
};

const TOPIC_DOORMATS_GUIDANCE = {
  id: 'topicDoormats',
  name: 'page.tools.guidance.craVariant.topicDoormats.title',
  url: 'page.tools.guidance.craVariant.doormats.url',
};

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  validateHtml(html: string) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    const violations: { type: string; detail: string; node: Element }[] = [];

    this.walkNodes(doc.body, violations);

    return violations;
  }

  private walkNodes(node: Element, violations: { type: string, detail: string, node: Element }[]) {
    if (node.nodeType === Node.ELEMENT_NODE) {
      const tagName = node.tagName.toLowerCase();

      // Check element whitelist
      if (!allowedElements.includes(tagName)) {
        violations.push({
          type: 'element',
          detail: `Unexpected element <${tagName}>`,
          node
        });
      }

      // Check class whitelist
      node.classList.forEach(cls => {
        if (!this.isClassAllowed(cls)) {
          violations.push({
            type: 'class',
            detail: `Unexpected class "${cls}" on <${tagName}>`,
            node
          });
        }
      });

      // Check attributes
      Array.from(node.attributes).forEach(attr => {
        if (this.isAttributeDisallowed(attr.name)) {
          violations.push({
            type: 'attribute',
            detail: `Disallowed attribute "${attr.name}" on <${tagName}>`,
            node
          });
        }
      });
    }

    // Recurse children
    node.childNodes.forEach(child => {
      if (child.nodeType === Node.ELEMENT_NODE) {
        this.walkNodes(child as Element, violations);
      }
    });
  }

  private isClassAllowed(cls: string): boolean {
    return allowedClasses.some(allowed => {
      if (typeof allowed === 'string') return allowed === cls;
      if (allowed instanceof RegExp) return allowed.test(cls);
      return false;
    });
  }

  private isAttributeDisallowed(attr: string): boolean {
    return disallowedAttributes.some(bad => {
      if (typeof bad === 'string') return bad === attr;
      if (bad instanceof RegExp) return bad.test(attr);
      return false;
    });
  }

  collectGuidanceUrls(html: string): { id?: string; name: string; url: string }[] {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const found = new Map<string, { id?: string; name: string; url: string }>();

    this.walkForGuidance(doc.body, found);
    this.walkForContentGuidance(doc.body, found);
    this.collectStructuralGuidance(doc.body, found);
    this.walkForGuidanceByExclusion(doc.body, found);

    return Array.from(found.values()); // unique by url
  }

  private collectStructuralGuidance(
    root: Element,
    found: Map<string, { id?: string; name: string; url: string }>
  ): void {
    if (
      root.querySelector('nav.gc-subway dl dt a') &&
      root.querySelector('nav.gc-subway dl dd')
    ) {
      this.addGuidance(found, SUBWAY_DOORMATS_GUIDANCE);
    }
    if (this.hasLegacyTopicDoormatStructure(root)) {
      this.addGuidance(found, TOPIC_DOORMATS_GUIDANCE);
    }
  }

  private hasLegacyTopicDoormatStructure(root: Element): boolean {
    if (
      root.querySelector('.gc-srvinfo') ||
      root.querySelector('.gc-drmt') ||
      root.querySelector('.mwsdoormat-links-container') ||
      this.hasLegacyTopicListGroup(root)
    ) {
      return true;
    }

    const topicsHeading = Array.from(root.querySelectorAll('h2, h3')).find(
      (heading) => (heading.textContent || '').replace(/\s+/g, ' ').trim().toLowerCase() === 'topics',
    );
    if (!topicsHeading) return false;

    let linkedHeadingCount = 0;
    let current = topicsHeading.nextElementSibling;
    while (current && linkedHeadingCount < 2) {
      const text = (current.textContent || '').replace(/\s+/g, ' ').trim().toLowerCase();
      if (
        current.matches('h2') &&
        text &&
        text !== 'topics'
      ) {
        break;
      }
      if (
        current.matches('h2, h3') &&
        current.querySelectorAll('a[href]').length === 1
      ) {
        linkedHeadingCount += 1;
      }
      current = current.nextElementSibling;
    }

    return linkedHeadingCount >= 2;
  }

  private hasLegacyTopicListGroup(root: Element): boolean {
    return Array.from(root.querySelectorAll<HTMLElement>('main ul.list-group'))
      .some((list) => this.isLegacyTopicListGroup(list));
  }

  private isLegacyTopicListGroup(list: HTMLElement): boolean {
    if (
      list.closest(
        'nav, header, footer, aside, details, [hidden], [aria-hidden="true"], .gc-most-requested, .pagedetails, .gc-srvinfo, .gc-subway',
      )
    ) {
      return false;
    }

    const items = Array.from(list.children).filter(
      (child): child is HTMLElement => child.matches('li'),
    );
    const qualifyingItemCount = items.filter((item) => {
      const link = item.querySelector<HTMLAnchorElement>('a[href]');
      return !!link && !!this.getLegacyListGroupItemDescription(item);
    }).length;
    if (qualifyingItemCount < 2) return false;

    return (
      this.hasLegacyTopicListHeading(list) ||
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
    return (clone.textContent || '').replace(/\s+/g, ' ').trim();
  }

  private hasLegacyTopicListHeading(list: HTMLElement): boolean {
    let current = list.previousElementSibling as HTMLElement | null;
    while (current) {
      if (current.matches('h2, h3')) {
        const text = (current.textContent || '')
          .replace(/\s+/g, ' ')
          .trim()
          .toLowerCase();
        return /^(services and information|topics|services et renseignements|services et information|sujets)$/.test(
          text,
        );
      }
      if (current.matches('h1')) return false;
      current = current.previousElementSibling as HTMLElement | null;
    }
    return false;
  }

  private walkForGuidance(node: Element, found: Map<string, { id?: string; name: string; url: string }>) {
    if (node.nodeType === Node.ELEMENT_NODE) {
      node.classList.forEach(cls => {
        for (const group of guidanceMap) {
          if (group.patterns.some(pat =>
            typeof pat === 'string' ? pat === cls : pat.test(cls)
          )) {
            this.addGuidance(found, group);
          }
        }
      });
    }

    node.childNodes.forEach(child => {
      if (child.nodeType === Node.ELEMENT_NODE) {
        this.walkForGuidance(child as Element, found);
      }
    });
  }

  private walkForContentGuidance(
    node: Element,
    found: Map<string, { id?: string; name: string; url: string }>
  ) {
    if (node.nodeType === Node.ELEMENT_NODE) {
      const tagName = node.tagName.toLowerCase();

      const text = node.textContent?.trim();
      if (text) {
        for (const group of guidanceContentMap) {
          const tagMatches =
            typeof group.tag === 'string'
              ? group.tag === tagName
              : group.tag.test(tagName);

          if (tagMatches &&
            group.patterns.some(pat =>
              typeof pat === 'string' ? pat === text : pat.test(text)
            )
          ) {
            this.addGuidance(found, group);
          }
        }
      }
    }

    node.childNodes.forEach(child => {
      if (child.nodeType === Node.ELEMENT_NODE) {
        this.walkForContentGuidance(child as Element, found);
      }
    });
  }

  //Adds guidance if specific classes aren't found (example: it's probably a basic page if no doormats or subway pattern detected)
  private walkForGuidanceByExclusion(
    root: Element,
    found: Map<string, { id?: string; name: string; url: string }>
  ) {
    for (const group of guidanceExclusionMap) {

      const hasExclusion = group.patterns.some(pat => {
        if (typeof pat === 'string') {
          return root.querySelector(`.${pat}`) !== null;
        } else {
          return Array.from(root.querySelectorAll('[class]')).some(el =>
            el.className.split(/\s+/).some(cls => pat.test(cls))
          );
        }
      });

      if (!hasExclusion) {
        this.addGuidance(found, group);
      }
    }
  }

  private addGuidance(
    found: Map<string, { id?: string; name: string; url: string }>,
    group: { id?: string; name: string; url: string }
  ): void {
    found.set(`${group.id ?? group.name}|${group.name}|${group.url}`, {
      id: group.id,
      name: group.name,
      url: group.url,
    });
  }

}


