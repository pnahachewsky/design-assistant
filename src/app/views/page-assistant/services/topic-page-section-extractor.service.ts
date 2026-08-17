import { Injectable, inject } from '@angular/core';

import { TopicDoormatExtractorService } from './topic-doormats/topic-doormat-extractor.service';
import { TopicDoormatTemplateNormalizerService } from './topic-doormats/topic-doormat-template-normalizer.service';

export type TopicPageSection = 'most' | 'doormats' | 'focus' | 'feature';

export interface TopicPageLinkInfo {
  section: TopicPageSection;
  label: string;
  description?: string;
}

export interface TopicPageSectionExtractionResult {
  isTopicPage: boolean;
  normalizedHtml: string;
  introHtml: string;
  preDoormatHtml: string;
  sections: Map<string, TopicPageLinkInfo>;
  nonTopicPageLinks: Map<string, string>;
}

@Injectable({ providedIn: 'root' })
export class TopicPageSectionExtractorService {
  private readonly topicDoormatExtractor = inject(TopicDoormatExtractorService);
  private readonly topicDoormatTemplateNormalizer = inject(
    TopicDoormatTemplateNormalizerService,
  );

  extract(
    html: string,
    options: {
      baseUrl: string;
      excludedUrlFragments?: string[];
    },
  ): TopicPageSectionExtractionResult {
    if (!html) {
      return this.emptyResult('');
    }

    const normalization =
      this.topicDoormatTemplateNormalizer.normalizeLegacyDoormats(html);
    const normalizedHtml = normalization.html;
    const doc = new DOMParser().parseFromString(normalizedHtml, 'text/html');
    const hasTopicDoormatCandidates =
      this.topicDoormatExtractor.hasCandidates(doc);

    if (!hasTopicDoormatCandidates) {
      return {
        isTopicPage: false,
        normalizedHtml,
        introHtml: this.extractTopicIntroHtml(doc),
        preDoormatHtml: this.extractPreDoormatHtml(doc),
        sections: new Map(),
        nonTopicPageLinks: this.collectNonTopicPageLinks(doc, options),
      };
    }

    return {
      isTopicPage: true,
      normalizedHtml,
      introHtml: this.extractTopicIntroHtml(doc),
      preDoormatHtml: this.extractPreDoormatHtml(doc),
      sections: this.collectTopicPageSections(doc, options),
      nonTopicPageLinks: new Map(),
    };
  }

  private emptyResult(normalizedHtml: string): TopicPageSectionExtractionResult {
    return {
      isTopicPage: false,
      normalizedHtml,
      introHtml: '',
      preDoormatHtml: '',
      sections: new Map(),
      nonTopicPageLinks: new Map(),
    };
  }

  private extractTopicIntroHtml(doc: Document): string {
    const hgroup = doc.querySelector('hgroup#wb-cont');
    const h1 =
      hgroup?.querySelector('h1') ??
      doc.querySelector('main h1#wb-cont, main h1, h1#wb-cont, h1');
    const hgroupContainer = hgroup?.parentElement ?? h1?.parentElement ?? null;

    const introContainer =
      hgroupContainer?.querySelector<HTMLElement>(
        ':scope > .gc-srvinfo:not(section)',
      ) ??
      hgroupContainer?.querySelector<HTMLElement>(
        ':scope > div.gc-srvinfo, :scope > section.gc-srvinfo',
      ) ??
      null;
    const containerParagraph = introContainer
      ? this.findFirstMeaningfulParagraph(introContainer, hgroup ?? h1)
      : null;
    if (containerParagraph) return containerParagraph.outerHTML;

    const leadParagraph =
      this.findLeadIntroParagraph(hgroupContainer, hgroup ?? h1) ??
      this.findLeadIntroParagraph(h1?.parentElement ?? null, hgroup ?? h1);
    if (leadParagraph && this.cleanVisibleText(leadParagraph.textContent)) {
      return leadParagraph.outerHTML;
    }

    const main = this.findMainContentElement(doc) ?? doc.body;
    if (!main) return '';

    const boundary = this.findIntroBoundary(main);
    const headingBoundary = hgroup ?? h1;
    const paragraphs = Array.from(main.querySelectorAll<HTMLElement>('p'));
    const candidates = paragraphs.filter((paragraph) => {
      if (!this.isIntroParagraphCandidate(paragraph)) return false;
      if (
        paragraph.closest(
          'nav, header, footer, aside, details, .gc-most-requested, section.gc-srvinfo, .gc-features, .pagedetails, .gc-subway',
        )
      ) {
        return false;
      }
      if (this.isRescueParagraph(paragraph)) return false;
      if (headingBoundary && !this.isAfter(paragraph, headingBoundary)) {
        return false;
      }
      if (boundary && !this.isBefore(paragraph, boundary)) return false;
      return true;
    });

    return candidates.map((paragraph) => paragraph.outerHTML).join('\n');
  }

  private extractPreDoormatHtml(doc: Document): string {
    const hgroup = doc.querySelector('hgroup#wb-cont');
    const h1 =
      hgroup?.querySelector('h1') ??
      doc.querySelector('main h1#wb-cont, main h1, h1#wb-cont, h1');
    const headingBoundary = hgroup ?? h1;
    const main = this.findMainContentElement(doc) ?? doc.body;
    if (!main || !headingBoundary) return '';

    const doormatBoundary = this.findDoormatBoundary(main);
    const introNodes = new Set(
      this.getIntroParagraphElements(main, headingBoundary, doormatBoundary),
    );
    const preserved: string[] = [];
    let current = this.getNextContentSibling(headingBoundary);

    while (current) {
      if (doormatBoundary && current === doormatBoundary) break;
      if (this.shouldPreservePreDoormatElement(current, introNodes)) {
        preserved.push(current.outerHTML);
      }
      current = current.nextElementSibling as HTMLElement | null;
    }

    return preserved.join('\n');
  }

  private findFirstMeaningfulParagraph(
    container: Element,
    headingBoundary: Element | null,
  ): HTMLElement | null {
    return (
      Array.from(container.querySelectorAll<HTMLElement>('p')).find((paragraph) => {
        if (!this.isIntroParagraphCandidate(paragraph)) return false;
        if (headingBoundary && !this.isAfter(paragraph, headingBoundary)) {
          return false;
        }
        return true;
      }) ?? null
    );
  }

  private findLeadIntroParagraph(
    container: Element | null,
    headingBoundary: Element | null,
  ): HTMLElement | null {
    if (!container) return null;
    return (
      Array.from(
        container.querySelectorAll<HTMLElement>(
          ':scope > p.gc-lead, :scope > p.pagetagline, :scope > p.lead',
        ),
      ).find((paragraph) => {
        if (!this.isIntroParagraphCandidate(paragraph)) return false;
        if (headingBoundary && !this.isAfter(paragraph, headingBoundary)) {
          return false;
        }
        return true;
      }) ?? null
    );
  }

  private isIntroParagraphCandidate(paragraph: HTMLElement): boolean {
    if (!this.cleanVisibleText(paragraph.textContent)) return false;
    if (paragraph.getAttribute('aria-hidden') === 'true') return false;
    if (paragraph.classList.contains('text-muted')) return false;
    return true;
  }

  private findIntroBoundary(container: Element): Element | null {
    return (
      container.querySelector('section.gc-most-requested') ||
      container.querySelector('section.gc-srvinfo') ||
      container.querySelector('.mwsdoormat-links-container') ||
      container.querySelector('.gc-drmt') ||
      container.querySelector('section.gc-features') ||
      container.querySelector('h2')
    );
  }

  private findDoormatBoundary(container: Element): Element | null {
    return (
      container.querySelector('section.gc-most-requested') ||
      container.querySelector('section.gc-srvinfo') ||
      container.querySelector('.mwsdoormat-links-container') ||
      container.querySelector('.gc-drmt') ||
      this.findLegacyDoormatSectionHeading(container)
    );
  }

  private findLegacyDoormatSectionHeading(container: Element): Element | null {
    return (
      Array.from(container.querySelectorAll<HTMLElement>('h2, h3')).find((heading) =>
        /^(topics|services and information|services et renseignements|services et information|sujets)$/i.test(
          this.cleanVisibleText(heading.textContent),
        ),
      ) ?? null
    );
  }

  private getIntroParagraphElements(
    container: Element,
    headingBoundary: Element,
    boundary: Element | null,
  ): HTMLElement[] {
    return Array.from(container.querySelectorAll<HTMLElement>('p')).filter(
      (paragraph) => {
        if (!this.isIntroParagraphCandidate(paragraph)) return false;
        if (
          paragraph.closest(
            'nav, header, footer, aside, details, .gc-most-requested, section.gc-srvinfo, .gc-features, .pagedetails, .gc-subway',
          )
        ) {
          return false;
        }
        if (this.isRescueParagraph(paragraph)) return false;
        if (!this.isAfter(paragraph, headingBoundary)) return false;
        if (boundary && !this.isBefore(paragraph, boundary)) return false;
        return true;
      },
    );
  }

  private getNextContentSibling(element: Element): HTMLElement | null {
    const container = element.closest('hgroup') ?? element;
    return container.nextElementSibling as HTMLElement | null;
  }

  private shouldPreservePreDoormatElement(
    element: HTMLElement,
    introNodes: Set<HTMLElement>,
  ): boolean {
    if (introNodes.has(element)) return false;
    if (!this.cleanVisibleText(element.textContent)) return false;
    if (
      element.matches(
        'nav, header, footer, aside, details, .alert, .gc-most-requested, .gc-srvinfo, .gc-features, .pagedetails, .gc-subway',
      )
    ) {
      return false;
    }
    if (element.closest('.alert, .gc-most-requested, .gc-srvinfo, .gc-features')) {
      return false;
    }
    if (element.getAttribute('aria-hidden') === 'true') return false;
    if (element.classList.contains('text-muted')) return false;
    if (this.isRescueParagraph(element)) return false;
    return true;
  }

  private isBefore(a: Element, b: Element): boolean {
    const pos = a.compareDocumentPosition(b);
    return Boolean(pos & Node.DOCUMENT_POSITION_FOLLOWING);
  }

  private isAfter(a: Element, b: Element): boolean {
    const pos = a.compareDocumentPosition(b);
    return Boolean(pos & Node.DOCUMENT_POSITION_PRECEDING);
  }

  private isRescueParagraph(paragraph: Element): boolean {
    return (paragraph.textContent || '')
      .toLowerCase()
      .includes('you may be looking for');
  }

  private collectTopicPageSections(
    doc: Document,
    options: {
      baseUrl: string;
      excludedUrlFragments?: string[];
    },
  ): Map<string, TopicPageLinkInfo> {
    const map = new Map<string, TopicPageLinkInfo>();
    const sections: Array<{ key: TopicPageSection; selector: string }> = [
      { key: 'most', selector: '.gc-most-requested' },
      { key: 'doormats', selector: '.gc-srvinfo' },
      { key: 'focus', selector: '' },
      { key: 'feature', selector: '.gc-features' },
    ];

    for (const section of sections) {
      const container =
        section.key === 'focus'
          ? this.findFocusOnContainer(doc)
          : section.key === 'feature'
            ? this.findFeaturesContainer(doc)
            : doc.querySelector(section.selector);
      if (!container) continue;

      container.querySelectorAll('a[href]').forEach((link) => {
        if (section.key === 'feature' && this.isSocialMediaLink(link)) return;
        const href = link.getAttribute('href');
        if (!href) return;
        const normalized = this.normalizeUrl(
          this.resolveUrl(href, options.baseUrl),
        );
        if (!normalized || this.isExcludedUrl(normalized, options)) return;

        const text = this.extractTopicSectionLinkLabel(link, section.key);
        map.set(normalized, {
          section: section.key,
          label: text || href,
          description:
            section.key === 'doormats'
              ? this.extractDoormatDescription(link)
              : section.key === 'feature'
                ? this.extractFeatureDescription(link)
                : undefined,
        });
      });
    }

    return map;
  }

  private collectNonTopicPageLinks(
    doc: Document,
    options: {
      baseUrl: string;
      excludedUrlFragments?: string[];
    },
  ): Map<string, string> {
    const map = new Map<string, string>();
    const container =
      this.findMainContentElement(doc) ?? doc.body ?? doc.documentElement;
    if (!container) return map;

    container.querySelectorAll('a[href]').forEach((link) => {
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#')) return;
      const normalized = this.normalizeUrl(
        this.resolveUrl(href, options.baseUrl),
      );
      if (!normalized || this.isExcludedUrl(normalized, options)) return;
      const text = (link.textContent || '').trim();
      map.set(normalized, text || href);
    });

    return map;
  }

  private findFeaturesContainer(doc: Document): Element | null {
    const gcFeatures = doc.querySelector('section.gc-features');
    if (gcFeatures) return gcFeatures;

    const headings = Array.from(doc.querySelectorAll('h2'));
    const match = headings.find(
      (h) => (h.textContent || '').trim().toLowerCase() === 'features',
    );
    return match?.closest('section') ?? null;
  }

  private findFocusOnContainer(doc: Document): Element | null {
    const headings = Array.from(doc.querySelectorAll('h2'));
    const match = headings.find(
      (h) => (h.textContent || '').trim().toLowerCase() === 'focus on',
    );
    if (!match) return null;
    return match.closest('.well') ?? match.parentElement ?? match;
  }

  private findMainContentElement(doc: Document): Element | null {
    const selectors = [
      'main[property="mainContentOfPage"][resource="#wb-main"][typeof="WebPageElement"]',
      'main[property="mainContentOfPage"][resource="#wb-main"][typeof="WebPageElement"].col-md-9.col-md-push-3',
      'main[role="main"][property="mainContentOfPage"].container',
      'main[role="main"][property="mainContentOfPage"]',
      'main[role="main"]',
      'main',
      '[role="main"]',
    ];

    for (const selector of selectors) {
      const element = doc.querySelector(selector);
      if (!element) continue;
      const containerDiv = element.querySelector('div.container');
      return containerDiv ?? element;
    }

    return null;
  }

  private extractTopicSectionLinkLabel(
    link: Element,
    section: TopicPageSection,
  ): string {
    if (section === 'feature') {
      const caption = (link.querySelector('figcaption')?.textContent || '')
        .replace(/\s+/g, ' ')
        .trim();
      if (caption) return caption;
    }
    return (link.textContent || '').replace(/\s+/g, ' ').trim();
  }

  private extractDoormatDescription(link: Element): string {
    const item = link.closest('.col-lg-4, .col-md-6, li');
    const paragraph = item?.querySelector('p');
    return (paragraph?.textContent || '').replace(/\s+/g, ' ').trim();
  }

  private extractFeatureDescription(link: Element): string {
    const paragraph = link.querySelector('p');
    return (paragraph?.textContent || '').replace(/\s+/g, ' ').trim();
  }

  private isSocialMediaLink(link: Element): boolean {
    const href = link.getAttribute('href') || '';
    if (!href) return false;
    try {
      const host = new URL(href, window.location.origin).hostname.toLowerCase();
      return [
        'facebook.com',
        'instagram.com',
        'linkedin.com',
        'threads.net',
        'twitter.com',
        'x.com',
        'youtube.com',
      ].some((domain) => host === domain || host.endsWith(`.${domain}`));
    } catch {
      return false;
    }
  }

  private isExcludedUrl(
    url: string,
    options: {
      excludedUrlFragments?: string[];
    },
  ): boolean {
    if (!url) return false;
    const normalized = url.toLowerCase();
    return (options.excludedUrlFragments ?? []).some((fragment) =>
      normalized.includes(fragment),
    );
  }

  private resolveUrl(href: string, baseUrl: string): string {
    try {
      return new URL(href, baseUrl || undefined).href;
    } catch {
      return href;
    }
  }

  private normalizeUrl(url: string): string {
    try {
      const parsed = new URL(url);
      const normalized = `${parsed.origin.toLowerCase()}${parsed.pathname}`;
      return normalized.replace(/\/+$/, '');
    } catch {
      return url.split('#')[0].split('?')[0].replace(/\/+$/, '');
    }
  }

  private cleanVisibleText(value: string | null | undefined): string {
    return (value || '').replace(/\s+/g, ' ').trim();
  }
}
