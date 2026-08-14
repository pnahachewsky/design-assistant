import { Injectable, inject } from '@angular/core';
import { FetchService } from '../../../../services/fetch.service';
import {
  MostRequestedLinkSummary,
  TopicDoormatDestinationNavigationItem,
  TopicDoormatDestinationPageType,
  TopicDoormatPageLanguage,
  TopicDoormatSummary,
  TopicDoormatUploadData,
} from './topic-doormat.types';

interface TopicDoormatLegacyLinkCandidate {
  link: HTMLAnchorElement;
  wrapper: HTMLElement | null;
  item: HTMLElement | null;
  descriptionOverride?: string;
}

@Injectable({ providedIn: 'root' })
export class TopicDoormatExtractorService {
  private readonly fetchService = inject(FetchService);
  private readonly destinationMainHtmlCharacterLimit = 12000;

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
      Promise<
        Pick<
          TopicDoormatSummary,
          | 'destinationUrl'
          | 'destinationPageTitle'
          | 'destinationPageHeading'
          | 'destinationMainHtml'
          | 'destinationMainHtmlTruncated'
          | 'destinationIntroParagraphs'
          | 'destinationSectionHeadings'
          | 'destinationPageType'
          | 'destinationNavigationItems'
          | 'destinationLabelEvidence'
          | 'destinationContextStatus'
          | 'destinationHttpStatus'
          | 'destinationFetchError'
        >
      >
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

  async enrichOppositeLanguageLengths(
    doormatSummaries: TopicDoormatSummary[],
    uploadData: TopicDoormatUploadData,
    pageLanguage: TopicDoormatPageLanguage,
  ): Promise<TopicDoormatSummary[]> {
    if (!doormatSummaries.length) return doormatSummaries;
    const alternateUrl = this.resolveAlternateLanguageUrl(uploadData);
    if (!alternateUrl) return doormatSummaries;

    try {
      const response = await this.fetchService.fetchContentWithResponse(
        alternateUrl,
        'both',
        1,
        'none',
      );
      const oppositeSummaries = this.extractSummaries(response.document);
      if (!oppositeSummaries.length) return doormatSummaries;

      const oppositeByPosition = new Map<string, TopicDoormatSummary>();
      oppositeSummaries.forEach((summary) => {
        oppositeByPosition.set(
          this.getSectionItemKey(
            summary.sectionIndex,
            summary.sectionItemIndex,
          ),
          summary,
        );
      });

      const oppositeLanguage: TopicDoormatPageLanguage =
        pageLanguage === 'fr' ? 'en' : 'fr';
      const canMatchByGlobalOrder =
        oppositeSummaries.length === doormatSummaries.length;
      return doormatSummaries.map((summary) => {
        const opposite = this.findOppositeLanguageSummary(
          summary,
          oppositeByPosition,
          oppositeSummaries,
          canMatchByGlobalOrder,
        );
        if (!opposite) return summary;
        return {
          ...summary,
          oppositeLanguage,
          oppositeLanguageLinkTextCharacterCount:
            opposite.linkTextCharacterCount,
          oppositeLanguageDescriptionCharacterCount:
            opposite.descriptionCharacterCount,
        };
      });
    } catch {
      return doormatSummaries;
    }
  }

  private findOppositeLanguageSummary(
    summary: TopicDoormatSummary,
    oppositeByPosition: Map<string, TopicDoormatSummary>,
    oppositeSummaries: TopicDoormatSummary[],
    canMatchByGlobalOrder: boolean,
  ): TopicDoormatSummary | undefined {
    const positionMatch = oppositeByPosition.get(
      this.getSectionItemKey(summary.sectionIndex, summary.sectionItemIndex),
    );
    if (positionMatch) return positionMatch;
    if (!canMatchByGlobalOrder) return undefined;
    return oppositeSummaries[summary.index - 1];
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
    if (uploadLanguage === 'fra' || uploadLanguage?.startsWith('fr'))
      return 'fr';
    if (uploadLanguage === 'eng' || uploadLanguage?.startsWith('en'))
      return 'en';

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
        descriptionOverride = '',
      ): void => {
        const heading = link.closest('h2, h3');
        const headingLinkCount = heading
          ? heading.querySelectorAll('a[href]').length
          : 1;
        const headingText = this.cleanVisibleElementText(heading);
        const linkText =
          this.cleanVisibleText(linkTextOverride) ||
          (headingLinkCount > 1 ? headingText : '') ||
          this.cleanVisibleElementText(link);
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
        const description =
          this.cleanVisibleText(descriptionOverride) ||
          this.cleanVisibleElementText(descriptionElement);
        const fieldflowLinkCount = item
          ? item.querySelectorAll('.wb-fieldflow a[href]').length
          : 0;
        const summary: TopicDoormatSummary = {
          index: summaries.length + 1,
          linkText,
          href,
          labels: this.extractDoormatLabels(item),
          description,
          headingLevel: heading
            ? this.toNumber(heading.tagName.slice(1))
            : null,
          itemLinkCount: item ? item.querySelectorAll('a[href]').length : 0,
          fieldflowLinkCount,
          headingLinkCount,
          descriptionLinkCount: descriptionElement
            ? descriptionElement.querySelectorAll('a[href]').length
            : 0,
          hasSplitHeadingLink: headingLinkCount > 1,
          hasFieldflow: fieldflowLinkCount > 0,
          hasDescriptionLink: !!descriptionElement?.querySelector('a[href]'),
          hasDescriptionIconOrImage: !!descriptionElement?.querySelector(
            'img, svg, i[class*="glyphicon"], i[class*="fa"], span[class*="glyphicon"], span[class*="fa"]',
          ),
          hasDescriptionSpecialFormatting: !!descriptionElement?.querySelector(
            'strong, b, em, i, ul, ol, li, mark, code',
          ),
          rawItemText: this.cleanVisibleElementText(item).slice(0, 500),
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
        doc.querySelectorAll<HTMLElement>('.gc-srvinfo h2, .gc-srvinfo h3'),
      );
      modernLinks.forEach((heading) => {
        const link = heading.querySelector<HTMLAnchorElement>('a[href]');
        if (!link) return;
        const wrapper = heading.closest<HTMLElement>('.gc-srvinfo');
        const headingLinkCount = heading.querySelectorAll('a[href]').length;
        addSummary(
          link,
          wrapper,
          this.findItem(link, wrapper),
          headingLinkCount > 1 ? this.cleanVisibleElementText(heading) : '',
        );
      });

      this.getLegacyLinks(doc).forEach(
        ({ link, wrapper, item, descriptionOverride }) => {
          addSummary(link, wrapper, item, '', descriptionOverride);
        },
      );

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

  private extractDoormatLabels(item: HTMLElement | null): string[] {
    if (!item) return [];
    const labels = Array.from(
      item.querySelectorAll<HTMLElement>(this.getDoormatLabelSelector()),
    )
      .map((element) => this.cleanVisibleText(element.textContent))
      .filter(Boolean);
    return Array.from(new Set(labels));
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
      !!doc.querySelector('.mwsdoormat-links-container') ||
      this.getLegacyListGroupLinks(doc).length >= 2 ||
      this.getLegacyLinks(doc).length >= 2
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

  private resolveAlternateLanguageUrl(
    uploadData?: TopicDoormatUploadData,
  ): string {
    const alternate = this.cleanString(
      uploadData?.metadata?.find((item) => item.name === 'alternate')?.content,
    );
    const pageUrl =
      this.cleanString(uploadData?.originalUrl) ||
      this.cleanString(uploadData?.modifiedUrl);
    if (!alternate) return this.resolveLanguageSwapUrl(pageUrl);
    try {
      const resolved = pageUrl
        ? new URL(alternate, pageUrl)
        : new URL(alternate);
      if (resolved.protocol !== 'https:') return '';
      resolved.hash = '';
      return resolved.toString();
    } catch {
      return '';
    }
  }

  private resolveLanguageSwapUrl(pageUrl: string): string {
    if (!pageUrl) return '';
    try {
      const resolved = new URL(pageUrl);
      if (resolved.protocol !== 'https:') return '';
      if (resolved.pathname.includes('/fr/')) {
        resolved.pathname = resolved.pathname.replace('/fr/', '/en/');
      } else if (resolved.pathname.includes('/en/')) {
        resolved.pathname = resolved.pathname.replace('/en/', '/fr/');
      } else {
        return '';
      }
      resolved.hash = '';
      return resolved.toString();
    } catch {
      return '';
    }
  }

  private getSectionItemKey(
    sectionIndex: number,
    sectionItemIndex: number,
  ): string {
    return `${sectionIndex}|${sectionItemIndex}`;
  }

  private async fetchDestinationContext(
    destinationUrl: string,
  ): Promise<
    Pick<
      TopicDoormatSummary,
      | 'destinationUrl'
      | 'destinationPageTitle'
      | 'destinationPageHeading'
      | 'destinationMainHtml'
      | 'destinationMainHtmlTruncated'
      | 'destinationIntroParagraphs'
      | 'destinationSectionHeadings'
      | 'destinationPageType'
      | 'destinationNavigationItems'
      | 'destinationLabelEvidence'
      | 'destinationContextStatus'
      | 'destinationHttpStatus'
      | 'destinationFetchError'
    >
  > {
    try {
      const response = await this.fetchService.fetchContentWithResponse(
        destinationUrl,
        'both',
        1,
        'none',
      );
      const destinationDoc = response.document;
      const main = destinationDoc.querySelector<HTMLElement>('main');
      const heading =
        main?.querySelector<HTMLElement>('h1') ??
        destinationDoc.querySelector<HTMLElement>('h1');
      const sectionHeadingElements = main
        ? Array.from(main.querySelectorAll<HTMLElement>('h2'))
        : [];
      const firstSectionHeading = heading
        ? (sectionHeadingElements.find(
            (sectionHeading) =>
              !!(
                heading.compareDocumentPosition(sectionHeading) &
                Node.DOCUMENT_POSITION_FOLLOWING
              ),
          ) ?? null)
        : null;
      const destinationIntroParagraphs =
        main && heading
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
      const destinationNavigationItems =
        this.extractDestinationNavigationItems(destinationDoc);
      const destinationPageType = this.detectDestinationPageType(
        destinationDoc,
        destinationNavigationItems,
      );
      const destinationLabelEvidence = this.extractDestinationLabelEvidence(
        destinationDoc,
        main,
        heading,
        destinationIntroParagraphs,
      );
      const mainHtml = this.extractDestinationMainHtml(main);
      return {
        destinationUrl,
        destinationPageTitle: this.cleanVisibleText(
          destinationDoc.querySelector('title')?.textContent,
        ),
        destinationPageHeading: this.cleanVisibleText(heading?.textContent),
        destinationMainHtml: mainHtml.html,
        destinationMainHtmlTruncated: mainHtml.truncated,
        destinationIntroParagraphs,
        destinationSectionHeadings,
        destinationPageType,
        destinationNavigationItems,
        destinationLabelEvidence,
        destinationHttpStatus: response.status,
        destinationContextStatus:
          destinationNavigationItems.length ||
          destinationIntroParagraphs.length ||
          destinationSectionHeadings.length
            ? 'available'
            : 'insufficient',
      };
    } catch (error) {
      return {
        destinationUrl,
        destinationIntroParagraphs: [],
        destinationSectionHeadings: [],
        destinationPageType: 'content',
        destinationNavigationItems: [],
        destinationLabelEvidence: [],
        destinationMainHtml: '',
        destinationMainHtmlTruncated: false,
        destinationContextStatus: 'failed',
        destinationHttpStatus: this.getFetchErrorStatus(error),
        destinationFetchError:
          error instanceof Error ? error.message : String(error),
      };
    }
  }

  private detectDestinationPageType(
    doc: Document,
    navigationItems: TopicDoormatDestinationNavigationItem[],
  ): TopicDoormatDestinationPageType {
    if (this.hasSubwayDoormatStructure(doc)) return 'subway';
    if (
      this.hasCandidates(doc) ||
      navigationItems.some((item) => item.source === 'topic-doormat')
    ) {
      return 'topic';
    }
    return 'content';
  }

  private extractDestinationNavigationItems(
    doc: Document,
  ): TopicDoormatDestinationNavigationItem[] {
    const subwayItems = this.extractSubwayDoormatItems(doc);
    if (subwayItems.length) return subwayItems;
    if (!this.hasCandidates(doc)) return [];

    return this.extractSummaries(doc).map((summary) => ({
      linkText: summary.linkText,
      description: summary.description,
      sectionTitle: summary.sectionTitle,
      source: 'topic-doormat',
    }));
  }

  private hasSubwayDoormatStructure(root: ParentNode): boolean {
    return !!(
      root.querySelector('nav.gc-subway dl dt a[href]') &&
      root.querySelector('nav.gc-subway dl dd')
    );
  }

  private extractSubwayDoormatItems(
    doc: Document,
  ): TopicDoormatDestinationNavigationItem[] {
    const items: TopicDoormatDestinationNavigationItem[] = [];
    const navs = Array.from(doc.querySelectorAll<HTMLElement>('nav.gc-subway'));
    navs.forEach((nav) => {
      const terms = Array.from(nav.querySelectorAll<HTMLElement>('dl dt'));
      terms.forEach((term) => {
        const link = term.querySelector<HTMLAnchorElement>('a[href]');
        if (!link) return;
        const descriptionElement = this.getSubwayDescriptionElement(term);
        const description = this.cleanVisibleElementText(descriptionElement);
        if (!description) return;
        items.push({
          linkText: this.cleanVisibleElementText(link),
          description,
          source: 'subway-doormat',
        });
      });
    });
    return items;
  }

  private getSubwayDescriptionElement(term: HTMLElement): HTMLElement | null {
    let current = term.nextElementSibling as HTMLElement | null;
    while (current) {
      if (current.matches('dd')) return current;
      if (current.matches('dt')) return null;
      current = current.nextElementSibling as HTMLElement | null;
    }
    return null;
  }

  private getFetchErrorStatus(error: unknown): number | undefined {
    if (!error || typeof error !== 'object') return undefined;
    const status = (error as { status?: unknown }).status;
    return typeof status === 'number' && Number.isFinite(status)
      ? status
      : undefined;
  }

  private extractDestinationLabelEvidence(
    doc: Document,
    main: HTMLElement | null,
    heading: HTMLElement | null | undefined,
    introParagraphs: string[],
  ): string[] {
    const evidence = new Set<string>();
    [
      this.cleanVisibleText(doc.querySelector('title')?.textContent),
      this.cleanVisibleText(heading?.textContent),
      ...introParagraphs,
    ].forEach((text) => this.addDestinationLabelEvidence(evidence, text));

    const root = main ?? doc.body;
    Array.from(
      root.querySelectorAll<HTMLElement>(
        [
          '.alert',
          '[class*="alert"]',
          '.label',
          '.badge',
          '[class*="label"]',
          '[class*="badge"]',
          'time',
          '[datetime]',
        ].join(', '),
      ),
    ).forEach((element) => {
      this.addDestinationLabelEvidence(
        evidence,
        this.cleanVisibleText(
          element.getAttribute('datetime') || element.textContent,
        ),
      );
    });

    Array.from(
      doc.querySelectorAll<HTMLMetaElement>(
        [
          'meta[name="dcterms.modified"]',
          'meta[name="dcterms.issued"]',
          'meta[property="dcterms:modified"]',
          'meta[property="article:modified_time"]',
        ].join(', '),
      ),
    ).forEach((meta) => {
      this.addDestinationLabelEvidence(evidence, meta.content);
    });

    return Array.from(evidence).slice(0, 8);
  }

  private addDestinationLabelEvidence(
    evidence: Set<string>,
    text: string,
  ): void {
    const cleaned = this.cleanVisibleText(text);
    if (!cleaned) return;
    if (
      this.hasDestinationLabelStatusText(cleaned) ||
      this.hasDestinationLabelDateText(cleaned)
    ) {
      evidence.add(cleaned.slice(0, 240));
    }
  }

  private hasDestinationLabelStatusText(text: string): boolean {
    return /\b(?:new|updated|modified|changed|launched|added|closed|archived|inactive|expired|ended|replaced|no longer available|not available)\b/i.test(
      text,
    );
  }

  private hasDestinationLabelDateText(text: string): boolean {
    return /\b(?:20\d{2}(?:[-/]\d{1,2}){0,2}|(?:january|february|march|april|may|june|july|august|september|october|november|december)\s+\d{1,2},?\s+20\d{2}|(?:jan|feb|mar|apr|jun|jul|aug|sept?|oct|nov|dec)\.?\s+\d{1,2},?\s+20\d{2})\b/i.test(
      text,
    );
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
    if (this.isRescueParagraph(paragraph)) return false;
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
      'services et renseignements',
      'tps/tvh',
      'imp\u00f4t',
      'imp\u00f4ts',
      'renseignements',
      'd\u00e9claration',
      'remboursement',
      'compte de tps/tvh',
    ].some((pattern) => text.includes(pattern));
  }

  private getLegacyLinks(doc: Document): TopicDoormatLegacyLinkCandidate[] {
    const candidates: TopicDoormatLegacyLinkCandidate[] = [];

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

    Array.from(doc.querySelectorAll<HTMLElement>('.gc-drmt')).forEach(
      (item) => {
        const wrapper =
          item.closest<HTMLElement>(
            '.mwsdoormat-links-container.section, .mwsdoormat-links-container',
          ) ?? item.parentElement;
        const link =
          item.querySelector<HTMLAnchorElement>('h2 a[href], h3 a[href]') ??
          item.querySelector<HTMLAnchorElement>('a[href]');
        if (!link) return;
        candidates.push({ link, wrapper, item });
      },
    );

    const topicHeading = this.getLegacyDoormatHeadingElement(doc);
    if (topicHeading) {
      let current = topicHeading.nextElementSibling as HTMLElement | null;
      while (current) {
        const headingText = this.cleanVisibleText(
          current.textContent,
        ).toLowerCase();
        if (
          current.matches('h2') &&
          headingText &&
          !this.isLegacyDoormatSectionHeadingText(headingText)
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

    candidates.push(...this.getLegacyListGroupLinks(doc));

    return candidates;
  }

  private getLegacyListGroupLinks(
    doc: Document,
  ): TopicDoormatLegacyLinkCandidate[] {
    const candidates: TopicDoormatLegacyLinkCandidate[] = [];
    Array.from(doc.querySelectorAll<HTMLElement>('main ul.list-group')).forEach(
      (list) => {
        if (!this.isLegacyTopicListGroup(list)) return;
        Array.from(list.children)
          .filter((child): child is HTMLElement => child.matches('li'))
          .forEach((item) => {
            const link = this.getLegacyListGroupItemLink(item);
            if (!link) return;
            const descriptionOverride =
              this.getLegacyListGroupItemDescription(item);
            if (!descriptionOverride) return;
            candidates.push({
              link,
              wrapper: list,
              item,
              descriptionOverride,
            });
          });
      },
    );
    return candidates;
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
      const link = this.getLegacyListGroupItemLink(item);
      return !!link && !!this.getLegacyListGroupItemDescription(item);
    }).length;
    if (qualifyingItemCount < 2) return false;

    return (
      this.hasLegacyTopicListHeading(list) ||
      list.classList.contains('background-medium') ||
      !!list.querySelector('.background-medium')
    );
  }

  private getLegacyListGroupItemLink(
    item: HTMLElement,
  ): HTMLAnchorElement | null {
    return item.querySelector<HTMLAnchorElement>('a[href]');
  }

  private getLegacyListGroupItemDescription(item: HTMLElement): string {
    const clone = item.cloneNode(true) as HTMLElement;
    const link = clone.querySelector('a[href]');
    link?.remove();
    clone
      .querySelectorAll(
        'ul, ol, nav, details, [hidden], [aria-hidden="true"], .pagedetails',
      )
      .forEach((element) => element.remove());
    return this.cleanVisibleText(clone.textContent);
  }

  private hasLegacyTopicListHeading(list: HTMLElement): boolean {
    let current = list.previousElementSibling as HTMLElement | null;
    while (current) {
      if (current.matches('h2, h3')) {
        const text = this.cleanVisibleText(current.textContent).toLowerCase();
        return /^(services and information|topics|services et renseignements|services et information|sujets)$/.test(
          text,
        );
      }
      if (current.matches('h1')) return false;
      current = current.previousElementSibling as HTMLElement | null;
    }
    return false;
  }

  private isRescueParagraph(paragraph: HTMLElement): boolean {
    return /^you may be looking for:?$/i.test(
      this.cleanVisibleText(paragraph.textContent),
    );
  }

  private getLegacyDoormatHeadingElement(doc: Document): HTMLElement | null {
    return (
      Array.from(
        doc.querySelectorAll<HTMLElement>('main h2, main h3, h2, h3'),
      ).find(
        (heading) =>
          this.isLegacyDoormatSectionHeadingText(
            this.cleanVisibleText(heading.textContent).toLowerCase(),
          ),
      ) ?? null
    );
  }

  private isLegacyDoormatSectionHeadingText(text: string): boolean {
    return /^(topics|services and information|services et renseignements|services et information|sujets)$/.test(
      text,
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

  private cleanVisibleElementText(element: Element | null | undefined): string {
    if (!element) return '';
    const clone = element.cloneNode(true) as Element;
    clone
      .querySelectorAll(this.getDoormatLabelSelector())
      .forEach((label) => label.remove());
    return this.cleanVisibleText(clone.textContent);
  }

  private getDoormatLabelSelector(): string {
    return '.label, .badge, [class*="label-"], [class*="badge-"]';
  }

  private cleanVisibleText(value: string | null | undefined): string {
    return (value || '').replace(/\s+/g, ' ').trim();
  }

  private extractDestinationMainHtml(main: HTMLElement | null): {
    html: string;
    truncated: boolean;
  } {
    if (!main) return { html: '', truncated: false };
    const clone = main.cloneNode(true) as HTMLElement;
    clone
      .querySelectorAll(
        [
          'script',
          'style',
          'noscript',
          'svg',
          'canvas',
          'iframe',
          'form',
          'nav',
          'aside',
          '[hidden]',
          '[aria-hidden="true"]',
          '.pagedetails',
          '.wb-share',
          '.wb-disable',
          '.gc-most-requested',
          '.gc-srvinfo',
          '.gc-followus',
          '.gc-contributors',
          '.gc-contextual',
          '.reportaproblem',
          '[class*="pagedetails"]',
          '[class*="feedback"]',
          '[class*="social"]',
        ].join(', '),
      )
      .forEach((element) => element.remove());

    const html = clone.innerHTML.replace(/\s+/g, ' ').trim();
    if (html.length <= this.destinationMainHtmlCharacterLimit) {
      return { html, truncated: false };
    }

    return {
      html: html.slice(0, this.destinationMainHtmlCharacterLimit),
      truncated: true,
    };
  }
}
