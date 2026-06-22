import { Injectable } from '@angular/core';
import { UploadData } from '../data/data.model';
import {
  MostRequestedLinkSummary,
  TopicDoormatComparableUrl,
} from './topic-doormat.types';

@Injectable({ providedIn: 'root' })
export class TopicDoormatUrlComparisonService {
  findMostRequestedDuplicate(
    href: string,
    mostRequestedLinks: MostRequestedLinkSummary[],
    uploadData?: Partial<UploadData> | null,
  ): MostRequestedLinkSummary | null {
    const doormatUrl = this.parseComparableUrl(href, uploadData);
    if (!doormatUrl) return null;
    return (
      mostRequestedLinks.find((link) => {
        const mostRequestedUrl = this.parseComparableUrl(
          link.href,
          uploadData,
        );
        return (
          !!mostRequestedUrl &&
          this.areComparableUrlsEqual(doormatUrl, mostRequestedUrl)
        );
      }) ?? null
    );
  }

  private parseComparableUrl(
    href: string,
    uploadData?: Partial<UploadData> | null,
  ): TopicDoormatComparableUrl | null {
    const trimmedHref = this.cleanString(href);
    if (!trimmedHref) return null;
    const baseUrl =
      this.cleanString(uploadData?.originalUrl) ||
      this.cleanString(uploadData?.modifiedUrl);

    if (baseUrl) {
      try {
        return this.buildComparableAbsoluteUrl(new URL(trimmedHref, baseUrl));
      } catch {
        return null;
      }
    }

    try {
      return this.buildComparableAbsoluteUrl(new URL(trimmedHref));
    } catch {
      if (!trimmedHref.startsWith('/')) return null;
      const fragmentIndex = trimmedHref.indexOf('#');
      const fragment =
        fragmentIndex >= 0 ? trimmedHref.slice(fragmentIndex) : '';
      const hrefWithoutFragment =
        fragmentIndex >= 0 ? trimmedHref.slice(0, fragmentIndex) : trimmedHref;
      const queryIndex = hrefWithoutFragment.indexOf('?');
      const path = this.normalizeComparablePath(
        queryIndex >= 0
          ? hrefWithoutFragment.slice(0, queryIndex)
          : hrefWithoutFragment,
      );
      const query =
        queryIndex >= 0 ? hrefWithoutFragment.slice(queryIndex) : '';
      if (!path) return null;
      return {
        kind: 'root-relative',
        pathKey: `${path}${query}${fragment}`,
        allowedHost: false,
      };
    }
  }

  private buildComparableAbsoluteUrl(
    url: URL,
  ): TopicDoormatComparableUrl | null {
    if (url.protocol !== 'https:' && url.protocol !== 'http:') return null;
    const protocol = url.protocol.toLowerCase();
    const host = url.hostname.toLowerCase();
    const port = this.getComparablePort(url);
    const path = this.normalizeComparablePath(url.pathname);
    const pathKey = `${path}${url.search}${url.hash}`;
    return {
      kind: 'absolute',
      absoluteKey: `${protocol}//${host}${port}${pathKey}`,
      pathKey,
      allowedHost: this.isAllowedComparisonHost(host),
    };
  }

  private getComparablePort(url: URL): string {
    if (!url.port) return '';
    if (url.protocol === 'https:' && url.port === '443') return '';
    if (url.protocol === 'http:' && url.port === '80') return '';
    return `:${url.port}`;
  }

  private normalizeComparablePath(path: string): string {
    const normalized = path || '/';
    return normalized.length > 1 && normalized.endsWith('/')
      ? normalized.replace(/\/+$/, '')
      : normalized;
  }

  private isAllowedComparisonHost(host: string): boolean {
    return [
      'www.canada.ca',
      'test.canada.ca',
      'proto-cra.github.io',
      'cra-design.github.io',
      'cra-test-arc.canada.ca',
      'cra-proto.github.io',
    ].includes(host);
  }

  private areComparableUrlsEqual(
    first: TopicDoormatComparableUrl,
    second: TopicDoormatComparableUrl,
  ): boolean {
    if (first.kind === 'absolute' && second.kind === 'absolute') {
      return first.absoluteKey === second.absoluteKey;
    }
    if (first.kind === 'root-relative' && second.kind === 'root-relative') {
      return first.pathKey === second.pathKey;
    }
    const absolute = first.kind === 'absolute' ? first : second;
    const relative = first.kind === 'root-relative' ? first : second;
    return absolute.allowedHost && absolute.pathKey === relative.pathKey;
  }

  private cleanString(value: unknown): string {
    return typeof value === 'string' ? value.trim() : '';
  }
}
