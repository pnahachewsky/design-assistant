import { Injectable, inject } from '@angular/core';
import { FetchService } from '../../../services/fetch.service';
import {
  MostRequestedLinkSummary,
  TopicDoormatPageLanguage,
  TopicDoormatSummary,
  TopicDoormatUploadData,
} from './topic-doormat.types';

@Injectable({ providedIn: 'root' })
export class TopicDoormatExtractorService {
  private readonly fetchService = inject(FetchService);

  parseHtmlDocument(html: string): Document | null {
    if (!html) return null;
    try {
      return new DOMParser().parseFromString(html, 'text/html');
    } catch {
      return null;
    }
  }

  async enrichDestinationContext(
    doormatSummaries: TopicDoormatSummary[],
    uploadData?: TopicDoormatUploadData,
  ): Promise<TopicDoormatSummary[]> {
    if (!doormatSummaries.length) return doormatSummaries;

    const contextByUrl = new Map<
      string,
      Promise<Pick<
        TopicDoormatSummary,
        | 'destinationUrl'
        | 'destinationPageTitle'
        | 'destinationPageHeading'
        | 'destinationIntroParagraphs'
        | 'destinationSectionHeadings'
        | 'destinationContextStatus'
      >>
    >();

    return Promise.all(
      doormatSummaries.map(async (summary) => {
        const destinationUrl = this.resolveDestinationUrl(
          summary.href,
          uploadData,
        );
        if (!destinationUrl) return summary;

        let contextPromise = contextByUrl.get(destinationUrl);
        if (!contextPromise) {
          contextPromise = this.fetchDestinationContext(destinationUrl);
          contextByUrl.set(destinationUrl, contextPromise);
        }

        const context = await contextPromise;
        return {
          ...summary,
          ...context,
        };
      }),
    );
  }

  detectPageLanguage(
    doc: Document,
    uploadData?: TopicDoormatUploadData,
  ): TopicDoormatPageLanguage {
    const htmlLang =
      doc.documentElement.getAttribute('lang') ||
      doc.querySelector('html')?.getAttribute('lang') ||
      '';
    const normalizedHtmlLang = htmlLang.trim().toLowerCase();
    if (normalizedHtmlLang.startsWith('fr')) return 'fr';
    if (normalizedHtmlLang.startsWith('en')) return 'en';

    const metaLanguage = (
      doc.querySelector<HTMLMetaElement>('meta[name="dcterms.language"]')
        ?.content || ''
    )
      .trim()
      .toLowerCase();
    if (metaLanguage === 'fra' || metaLanguage.startsWith('fr')) return 'fr';
    if (metaLanguage === 'eng' || metaLanguage.startsWith('en')) return 'en';

    const uploadLanguage = String(
      (uploadData?.metadata ?? []).find(
        (item) => item.name === 'dcterms.language',
      )?.content ?? '',
    )
      .trim()
      .toLowerCase();
    if (uploadLanguage === 'fra' || uploadLanguage?.startsWith('fr')) return 'fr';
    if (uploadLanguage === 'eng' || uploadLanguage?.startsWith('en')) return 'en';

    const urlLanguage = this.detectLanguageFromUrl(
      uploadData?.originalUrl,
      uploadData?.modifiedUrl,
    );
    if (urlLanguage) return urlLanguage;

    if (this.hasFrenchTopicDoormatText(doc)) return 'fr';
    return 'en';
  }

  extractSummaries(doc: Document): TopicDoormatSummary[] {
    try {
      const seen = new Set<string>();
      const summaries: TopicDoormatSummary[] = [];
      const sectionIndexes = new Map<HTMLElement | string, number>();
      const sectionTitles = new Map<number, string>();
      const sectionSummaries = new Map<number, TopicDoormatSummary[]>();

      const addSummary = (
        link: HTMLAnchorElement,
        wrapper: HTMLElement | null,
        item: HTMLElement | null,
        linkTextOverride = '',
      ): void => {
        const heading = link.closest('h2, h3');
        const headingLinkCount = heading
          ? heading.querySelectorAll('a[href]').length
          : 1;
        const headingText = this.cleanVisibleText(heading?.textContent);
        const linkText =
          this.cleanVisibleText(linkTextOverride) ||
          (headingLinkCount > 1 ? headingText : '') ||
          this.cleanVisibleText(link.textContent);
        const href = link.getAttribute('href') || '';
        const key = item ? this.getItemKey(item) : `${href}|${linkText}`;
        if (!linkText && !href) return;
        if (seen.has(key)) return;
        seen.add(key);

        const sectionHeading = this.findSectionHeading(link, wrapper);
        const sectionKey: HTMLElement | string =
          sectionHeading ?? wrapper ?? 'topic-doormats';
        let sectionIndex = sectionIndexes.get(sectionKey);
        if (!sectionIndex) {
          sectionIndex = sectionIndexes.size + 1;
          sectionIndexes.set(sectionKey, sectionIndex);
          sectionTitles.set(
            sectionIndex,
            this.cleanVisibleText(sectionHeading?.textContent) ||
              `Topic doormats ${sectionIndex}`,
          );
        }

        const sectionRows = sectionSummaries.get(sectionIndex) ?? [];
        sectionSummaries.set(sectionIndex, sectionRows);
        const descriptionElement = item?.querySelector('p') ?? null;
        const description = this.cleanVisibleText(
          descriptionElement?.textContent,
        );
        const summary: TopicDoormatSummary = {
          index: summaries.length + 1,
          linkText,
          href,
          description,
          headingLevel: heading ? this.toNumber(heading.tagName.slice(1)) : null,
          itemLinkCount: item ? item.querySelectorAll('a[href]').length : 0,
          headingLinkCount,
          descriptionLinkCount: descriptionElement
            ? descriptionElement.querySelectorAll('a[href]').length
            : 0,
          hasSplitHeadingLink: headingLinkCount > 1,
          hasDescriptionLink: !!descriptionElement?.querySelector('a[href]'),
          hasDescriptionIconOrImage: !!descriptionElement?.querySelector(
            'img, svg, i[class*="glyphicon"], i[class*="fa"], span[class*="glyphicon"], span[class*="fa"]',
          ),
          hasDescriptionSpecialFormatting:
            !!descriptionElement?.querySelector(
              'strong, b, em, i, ul, ol, li, mark, code',
            ),
          rawItemText: this.cleanVisibleText(item?.textContent).slice(0, 500),
          linkTextCharacterCount: linkText.length,
          descriptionCharacterCount: description.length,
          sectionIndex,
          sectionTitle: sectionTitles.get(sectionIndex) ?? '',
          sectionItemIndex: sectionRows.length + 1,
          sectionDoormatCount: 0,
        };
        summaries.push(summary);
        sectionRows.push(summary);
      };

      const modernLinks = Array.from(
        doc.querySelectorAll<HTMLElement>(
          '.gc-srvinfo h2, .gc-srvinfo h3',
        ),
      );
      modernLinks.forEach((heading) => {
        const link = heading.querySelector<HTMLAnchorElement>('a[href]');
        if (!link) return;
        const wrapper = heading.closest<HTMLElement>('.gc-srvinfo');
        addSummary(
          link,
          wrapper,
          this.findItem(link, wrapper),
          heading.textContent ?? '',
        );
      });

      this.getLegacyLinks(doc).forEach(({ link, wrapper, item }) => {
        addSummary(link, wrapper, item);
      });

      sectionSummaries.forEach((sectionRows) => {
        sectionRows.forEach((summary) => {
          summary.sectionDoormatCount = sectionRows.length;
        });
      });

      return summaries;
    } catch {
      return [];
    }
  }

  hasCandidates(doc: Document): boolean {
    return (
      !!doc.querySelector('.gc-srvinfo') ||
      !!doc.querySelector('.gc-drmt') ||
      !!doc.querySelector('.mwsdoormat-links-container') ||
      this.getLegacyLinks(doc).length >= 2
    );
  }

  hasLegacyTemplate(doc: Document): boolean {
    return (
      !!doc.querySelector('.gc-drmt') ||
      !!doc.querySelector('.mwsdoormat-links-container')
    );
  }

  extractMostRequestedLinks(doc: Document): MostRequestedLinkSummary[] {
    try {
      const selectors = [
        '.gc-most-requested a',
        '.most-requested a',
        '.most-requested-bullets a',
      ];
      return selectors.flatMap((selector) =>
        Array.from(doc.querySelectorAll<HTMLAnchorElement>(selector)).map(
          (link) => ({
            text: this.cleanString(link.textContent || ''),
            href: link.getAttribute('href') || '',
          }),
        ),
      );
    } catch {
      return [];
    }
  }

  private resolveDestinationUrl(
    href: string,
    uploadData?: TopicDoormatUploadData,
  ): string {
    const trimmedHref = this.cleanString(href);
    if (!trimmedHref || trimmedHref.startsWith('#')) return '';

    const pageUrl =
      this.cleanString(uploadData?.originalUrl) ||
      this.cleanString(uploadData?.modifiedUrl);

    try {
      const resolved = pageUrl
        ? new URL(trimmedHref, pageUrl)
        : new URL(trimmedHref);
      if (resolved.protocol !== 'https:') return '';
      resolved.hash = '';
      return resolved.toString();
    } catch {
      return '';
    }
  }

  private async fetchDestinationContext(
    destinationUrl: string,
  ): Promise<
    Pick<
      TopicDoormatSummary,
      | 'destinationUrl'
      | 'destinationPageTitle'
      | 'destinationPageHeading'
      | 'destinationIntroParagraphs'
      | 'destinationSectionHeadings'
      | 'destinationContextStatus'
    >
  > {
    try {
      const destinationDoc = await this.fetchService.fetchContent(
        destinationUrl,
        'both',
        1,
        'none',
      );
      const main = destinationDoc.querySelector<HTMLElement>('main');
      const heading =
        main?.querySelector<HTMLElement>('h1') ??
        destinationDoc.querySelector<HTMLElement>('h1');
      const sectionHeadingElements = main
        ? Array.from(main.querySelectorAll<HTMLElement>('h2'))
        : [];
      const firstSectionHeading = heading
        ? sectionHeadingElements.find((sectionHeading) =>
            !!(
              heading.compareDocumentPosition(sectionHeading) &
              Node.DOCUMENT_POSITION_FOLLOWING
            ),
          ) ?? null
        : null;
      const destinationIntroParagraphs = main && heading
        ? Array.from(main.querySelectorAll<HTMLElement>('p'))
            .filter((paragraph) =>
              this.isDestinationIntroParagraph(
                paragraph,
                heading,
                firstSectionHeading,
              ),
            )
            .map((paragraph) => this.cleanVisibleText(paragraph.textContent))
            .filter(Boolean)
        : [];
      const destinationSectionHeadings = main
        ? sectionHeadingElements
            .map((sectionHeading) =>
              this.cleanVisibleText(sectionHeading.textContent),
            )
            .filter(Boolean)
        : [];
      return {
        destinationUrl,
        destinationPageTitle: this.cleanVisibleText(
          destinationDoc.querySelector('title')?.textContent,
        ),
        destinationPageHeading: this.cleanVisibleText(heading?.textContent),
        destinationIntroParagraphs,
        destinationSectionHeadings,
        destinationContextStatus:
          destinationIntroParagraphs.length || destinationSectionHeadings.length
            ? 'available'
            : 'insufficient',
      };
    } catch {
      return {
        destinationUrl,
        destinationIntroParagraphs: [],
        destinationSectionHeadings: [],
        destinationContextStatus: 'failed',
      };
    }
  }

  private isDestinationIntroParagraph(
    paragraph: HTMLElement,
    heading: HTMLElement,
    firstSectionHeading: HTMLElement | null,
  ): boolean {
    if (
      paragraph.closest(
        'nav, header, footer, aside, details, [hidden], [aria-hidden="true"], .breadcrumb, .gc-most-requested, .pagedetails',
      )
    ) {
      return false;
    }
    if (this.isSupportingReferenceParagraph(paragraph)) return false;
    const followsHeading = !!(
      heading.compareDocumentPosition(paragraph) &
      Node.DOCUMENT_POSITION_FOLLOWING
    );
    if (!followsHeading) return false;
    if (!firstSectionHeading) return true;
    return !!(
      paragraph.compareDocumentPosition(firstSectionHeading) &
      Node.DOCUMENT_POSITION_FOLLOWING
    );
  }

  private isSupportingReferenceParagraph(paragraph: HTMLElement): boolean {
    if (!paragraph.querySelector('a[href]')) return false;
    const text = this.cleanVisibleText(paragraph.textContent).toLowerCase();
    return /^(?:for (?:more|additional) information|to learn more|pour (?:en savoir plus|plus de renseignements|obtenir plus de renseignements)|pour en apprendre davantage)\b/.test(
      text,
    );
  }

  private detectLanguageFromUrl(
    ...urls: (string | undefined)[]
  ): TopicDoormatPageLanguage | null {
    for (const url of urls) {
      const lower = (url || '').toLowerCase();
      if (/(^|[/_-])fr([/_-]|$)/.test(lower)) return 'fr';
      if (/(^|[/_-])en([/_-]|$)/.test(lower)) return 'en';
    }
    return null;
  }

  private hasFrenchTopicDoormatText(doc: Document): boolean {
    const text = this.cleanVisibleText(doc.body?.textContent).toLowerCase();
    if (!text) return false;
    return [
      'services et information',
      'tps/tvh',
      'imp\u00f4t',
      'imp\u00f4ts',
      'renseignements',
      'd\u00e9claration',
      'remboursement',
      'compte de tps/tvh',
    ].some((pattern) => text.includes(pattern));
  }

  private getLegacyLinks(doc: Document): {
    link: HTMLAnchorElement;
    wrapper: HTMLElement | null;
    item: HTMLElement | null;
  }[] {
    const candidates: {
      link: HTMLAnchorElement;
      wrapper: HTMLElement | null;
      item: HTMLElement | null;
    }[] = [];

    const legacyContainers = Array.from(
      doc.querySelectorAll<HTMLElement>(
        '.mwsdoormat-links-container.section, .mwsdoormat-links-container',
      ),
    );
    legacyContainers.forEach((wrapper) => {
      const links = Array.from(
        wrapper.querySelectorAll<HTMLAnchorElement>('h2 a[href], h3 a[href]'),
      );
      links.forEach((link) => {
        candidates.push({
          link,
          wrapper,
          item: this.findItem(link, wrapper),
        });
      });
    });

    Array.from(doc.querySelectorAll<HTMLElement>('.gc-drmt')).forEach((item) => {
      const wrapper =
        item.closest<HTMLElement>(
          '.mwsdoormat-links-container.section, .mwsdoormat-links-container',
        ) ?? item.parentElement;
      const link =
        item.querySelector<HTMLAnchorElement>('h2 a[href], h3 a[href]') ??
        item.querySelector<HTMLAnchorElement>('a[href]');
      if (!link) return;
      candidates.push({ link, wrapper, item });
    });

    const topicHeading = this.getTopicHeadingElement(doc);
    if (topicHeading) {
      let current = topicHeading.nextElementSibling as HTMLElement | null;
      while (current) {
        const headingText = this.cleanVisibleText(
          current.textContent,
        ).toLowerCase();
        if (
          current.matches('h2') &&
          headingText &&
          headingText !== 'topics'
        ) {
          break;
        }
        if (current.matches('h2, h3')) {
          const links = current.querySelectorAll<HTMLAnchorElement>('a[href]');
          if (links.length === 1) {
            candidates.push({
              link: links[0],
              wrapper: topicHeading,
              item: this.findLegacyTopicHeadingItem(current),
            });
          }
        }
        current = current.nextElementSibling as HTMLElement | null;
      }
    }

    return candidates;
  }

  private getTopicHeadingElement(doc: Document): HTMLElement | null {
    return (
      Array.from(doc.querySelectorAll<HTMLElement>('main h2, main h3, h2, h3')).find(
        (heading) =>
          this.cleanVisibleText(heading.textContent).toLowerCase() === 'topics',
      ) ?? null
    );
  }

  private findLegacyTopicHeadingItem(heading: HTMLElement): HTMLElement {
    const doc = heading.ownerDocument;
    const item = doc.createElement('div');
    item.appendChild(heading.cloneNode(true));
    let current = heading.nextElementSibling as HTMLElement | null;
    while (current && !current.matches('h2, h3')) {
      item.appendChild(current.cloneNode(true));
      current = current.nextElementSibling as HTMLElement | null;
    }
    return item;
  }

  private findSectionHeading(
    link: HTMLAnchorElement,
    wrapper: HTMLElement | null,
  ): HTMLElement | null {
    if (wrapper?.matches('h2, h3')) return wrapper;
    const linkHeading = link.closest('h2');
    const searchRoot = wrapper ?? link.ownerDocument.body;
    const headings = Array.from(searchRoot.querySelectorAll<HTMLElement>('h2'));
    const precedingHeading = headings
      .filter(
        (heading) =>
          heading !== linkHeading &&
          !!(
            heading.compareDocumentPosition(link) &
            Node.DOCUMENT_POSITION_FOLLOWING
          ),
      )
      .pop();
    if (precedingHeading) return precedingHeading;

    let current: HTMLElement | null = wrapper;
    while (current) {
      let previous = current.previousElementSibling as HTMLElement | null;
      while (previous) {
        if (previous.matches('h2')) return previous;
        const nestedHeading = Array.from(
          previous.querySelectorAll<HTMLElement>('h2'),
        ).pop();
        if (nestedHeading) return nestedHeading;
        previous = previous.previousElementSibling as HTMLElement | null;
      }
      current = current.parentElement;
    }

    return null;
  }

  private findItem(
    link: HTMLAnchorElement,
    wrapper: HTMLElement | null,
  ): HTMLElement | null {
    let current: HTMLElement | null = link;
    while (current && current !== wrapper) {
      if (current !== link && current.querySelector('p')) return current;
      current = current.parentElement;
    }
    return wrapper?.querySelector('p') ? wrapper : null;
  }

  private getItemKey(item: HTMLElement): string {
    const doc = item.ownerDocument;
    const items = Array.from(
      doc.querySelectorAll<HTMLElement>(
        '.gc-srvinfo h2, .gc-srvinfo h3, .gc-drmt, .mwsdoormat-links-container h2, .mwsdoormat-links-container h3',
      ),
    );
    const index = items.findIndex(
      (candidate) => candidate === item || item.contains(candidate),
    );
    if (index >= 0) return `item:${index}`;
    return `item:${this.cleanVisibleText(item.textContent)}|${
      item.querySelectorAll('a[href]').length
    }`;
  }

  private toNumber(value: unknown): number | null {
    const num =
      typeof value === 'number'
        ? value
        : typeof value === 'string'
          ? Number.parseInt(value, 10)
          : Number.NaN;
    return Number.isFinite(num) ? num : null;
  }

  private cleanString(value: unknown): string {
    return typeof value === 'string' ? value.trim() : '';
  }

  private cleanVisibleText(value: string | null | undefined): string {
    return (value || '').replace(/\s+/g, ' ').trim();
  }
}
