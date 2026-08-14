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
        sections: new Map(),
        nonTopicPageLinks: this.collectNonTopicPageLinks(doc, options),
      };
    }

    return {
      isTopicPage: true,
      normalizedHtml,
      sections: this.collectTopicPageSections(doc, options),
      nonTopicPageLinks: new Map(),
    };
  }

  private emptyResult(normalizedHtml: string): TopicPageSectionExtractionResult {
    return {
      isTopicPage: false,
      normalizedHtml,
      sections: new Map(),
      nonTopicPageLinks: new Map(),
    };
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
}
