import { LocationStrategy } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { TreeNode } from 'primeng/api';
import { UploadData } from '../data/data.model';
import { IaStructureService } from './ia-structure.service';
import {
  TopicDoormatIssueRow,
  TopicDoormatSummary,
} from './topic-doormat.types';

interface VisitEntry {
  url?: string;
  visits?: number | string;
}

interface ChildPageCandidate {
  label: string;
  url: string;
  key: string;
}

export interface TopicDoormatIaCheckResult {
  rows: TopicDoormatIssueRow[];
  metaByDoormatIndex: Map<number, string>;
}

@Injectable({ providedIn: 'root' })
export class TopicDoormatIaCheckService {
  private readonly iaStructure = inject(IaStructureService);
  private readonly http = inject(HttpClient);
  private readonly locationStrategy = inject(LocationStrategy);
  private readonly visitsSourcePath = 'visits-urls.json';
  private visitsLoad?: Promise<{
    byUrl: Map<string, number>;
    byPath: Map<string, number>;
  }>;

  async analyze(
    doormatSummaries: TopicDoormatSummary[],
    uploadData?: Partial<UploadData> | null,
  ): Promise<TopicDoormatIaCheckResult> {
    const topicUrl = this.getTopicPageUrl(uploadData);
    if (!topicUrl || !doormatSummaries.length) {
      return { rows: [], metaByDoormatIndex: new Map() };
    }

    const [iaResult, visits] = await Promise.all([
      this.getChildPageCandidates(topicUrl),
      this.loadVisits(),
    ]);

    const childByKey = new Map(iaResult.map((child) => [child.key, child]));
    const doormatByKey = new Map<string, TopicDoormatSummary>();
    doormatSummaries.forEach((summary) => {
      const key = this.getComparableUrlKey(
        summary.destinationUrl || summary.href,
        topicUrl,
      );
      if (key) {
        doormatByKey.set(key, summary);
      }
    });

    return {
      rows: [
        ...(iaResult.length ? this.buildMissingRows(iaResult, doormatByKey) : []),
        ...(iaResult.length
          ? this.buildExtraRows(doormatSummaries, childByKey, visits, topicUrl)
          : []),
      ],
      metaByDoormatIndex: this.buildDoormatMetaMap(
        doormatSummaries,
        childByKey,
        visits,
        topicUrl,
      ),
    };
  }

  private async getChildPageCandidates(
    topicUrl: string,
  ): Promise<ChildPageCandidate[]> {
    const cached = this.iaStructure.getCachedResultFor(topicUrl);
    const result =
      cached ?? (await this.iaStructure.buildIaTree([topicUrl], 2));
    const root = result.tree[0];
    const children = root?.children ?? [];

    return children
      .map((node) => this.toChildPageCandidate(node, topicUrl))
      .filter(
        (candidate): candidate is ChildPageCandidate =>
          !!candidate && !!candidate.key,
      );
  }

  private toChildPageCandidate(
    node: TreeNode,
    topicUrl: string,
  ): ChildPageCandidate | null {
    const rawUrl = this.cleanString(node.data?.url);
    const key = this.getComparableUrlKey(rawUrl, topicUrl);
    if (!key) return null;

    return {
      label:
        this.cleanString(node.data?.h1) ||
        this.cleanString(node.label) ||
        rawUrl,
      url: rawUrl,
      key,
    };
  }

  private buildMissingRows(
    childPages: ChildPageCandidate[],
    doormatByKey: Map<string, TopicDoormatSummary>,
  ): TopicDoormatIssueRow[] {
    return childPages
      .filter((child) => !doormatByKey.has(child.key))
      .map((child) => ({
        include: true,
        rowType: 'section',
        severity: 'High',
        doormat: 'Topic page doormat set',
        doormatLabel: 'Doormat set',
        issueId: 'missing-needed-doormat',
        issue: 'Missing a needed doormat',
        evidence: 'Child page not found in doormats:',
        evidenceLinkText: child.label,
        evidenceLinkHref: child.url,
        recommendation:
          'Review and consider adding a doormat for the missing child page.',
      }));
  }

  private buildExtraRows(
    doormatSummaries: TopicDoormatSummary[],
    childByKey: Map<string, ChildPageCandidate>,
    visits: { byUrl: Map<string, number>; byPath: Map<string, number> },
    topicUrl: string,
  ): TopicDoormatIssueRow[] {
    return doormatSummaries.flatMap((summary) => {
      const key = this.getComparableUrlKey(
        summary.destinationUrl || summary.href,
        topicUrl,
      );
      if (!key || childByKey.has(key)) return [];

      return [
        {
          include: true,
          rowType: 'doormat',
          severity: 'Medium',
          doormat: this.buildDoormatLabel(summary),
          doormatLabel: summary.linkText || summary.href || 'Doormat',
          issueId: 'unnecessary-doormat',
          issue: 'Non-child-page doormat',
          evidence:
            'This doormat destination was not found as a direct child page in the IA crawl.',
          recommendation:
            'Flag for manual review and consider removing or replacing the doormat.',
          doormatIndex: summary.index || undefined,
          sectionIndex: summary.sectionIndex || undefined,
          sectionTitle: summary.sectionTitle || undefined,
          sectionItemIndex: summary.sectionItemIndex || undefined,
          sectionItemMeta: this.buildDoormatMeta(
            summary,
            childByKey,
            visits,
            topicUrl,
          ),
        } satisfies TopicDoormatIssueRow,
      ];
    });
  }

  private buildDoormatMetaMap(
    doormatSummaries: TopicDoormatSummary[],
    childByKey: Map<string, ChildPageCandidate>,
    visits: { byUrl: Map<string, number>; byPath: Map<string, number> },
    topicUrl: string,
  ): Map<number, string> {
    const metaByIndex = new Map<number, string>();
    doormatSummaries.forEach((summary) => {
      if (!summary.index) return;
      const meta = this.buildDoormatMeta(summary, childByKey, visits, topicUrl);
      if (meta) {
        metaByIndex.set(summary.index, meta);
      }
    });
    return metaByIndex;
  }

  private buildDoormatMeta(
    summary: TopicDoormatSummary,
    childByKey: Map<string, ChildPageCandidate>,
    visits: { byUrl: Map<string, number>; byPath: Map<string, number> },
    topicUrl: string,
  ): string {
    const key = this.getComparableUrlKey(
      summary.destinationUrl || summary.href,
      topicUrl,
    );
    const isChild = !!key && childByKey.has(key);
    const visitCount = this.getVisitsForUrl(
      summary.destinationUrl || summary.href,
      visits,
      topicUrl,
    );
    const parts = [
      isChild ? 'child' : '',
      visitCount !== null ? this.formatVisits(visitCount) : 'no views',
    ].filter(Boolean);
    return parts.join(', ');
  }

  private async loadVisits(): Promise<{
    byUrl: Map<string, number>;
    byPath: Map<string, number>;
  }> {
    if (!this.visitsLoad) {
      this.visitsLoad = this.fetchVisits().catch(() => ({
        byUrl: new Map<string, number>(),
        byPath: new Map<string, number>(),
      }));
    }
    return this.visitsLoad;
  }

  private async fetchVisits(): Promise<{
    byUrl: Map<string, number>;
    byPath: Map<string, number>;
  }> {
    const baseHref = this.locationStrategy.getBaseHref() || '/';
    const resourceUrl = new URL(
      this.visitsSourcePath,
      `${window.location.origin}${baseHref}`,
    ).toString();
    const data = await firstValueFrom(this.http.get<unknown>(resourceUrl));
    const byUrl = new Map<string, number>();
    const byPath = new Map<string, number>();

    if (!Array.isArray(data)) return { byUrl, byPath };

    data.forEach((entry) => {
      if (!entry || typeof entry !== 'object') return;
      const typed = entry as VisitEntry;
      const url = this.cleanString(typed.url);
      const visits = this.parseVisits(typed.visits);
      if (!url || visits === null) return;
      const normalized = this.normalizeUrl(url);
      byUrl.set(normalized, visits);
      byUrl.set(this.normalizeUrl(this.decodeUrl(url)), visits);
      const pathKey = this.getPathSuffixKey(url);
      if (pathKey) {
        byPath.set(pathKey, visits);
      }
    });

    return { byUrl, byPath };
  }

  private getVisitsForUrl(
    rawUrl: string,
    visits: { byUrl: Map<string, number>; byPath: Map<string, number> },
    baseUrl: string,
  ): number | null {
    const absoluteUrl = this.resolveUrl(rawUrl, baseUrl);
    if (!absoluteUrl) return null;
    const normalized = this.normalizeUrl(absoluteUrl);
    const direct =
      visits.byUrl.get(normalized) ??
      visits.byUrl.get(this.normalizeUrl(this.decodeUrl(absoluteUrl)));
    if (direct !== undefined) return direct;

    const pathKey = this.getPathSuffixKey(absoluteUrl);
    if (!pathKey) return null;
    return (
      visits.byPath.get(pathKey) ??
      visits.byPath.get(this.normalizePath(pathKey)) ??
      null
    );
  }

  private getTopicPageUrl(uploadData?: Partial<UploadData> | null): string {
    const pageUrl =
      this.cleanString(uploadData?.originalUrl) ||
      this.cleanString(uploadData?.modifiedUrl);
    return this.resolveUrl(pageUrl, pageUrl);
  }

  private getComparableUrlKey(rawUrl: string, baseUrl: string): string {
    const resolved = this.resolveUrl(rawUrl, baseUrl);
    if (!resolved) return '';
    return this.normalizeUrl(resolved);
  }

  private resolveUrl(rawUrl: string, baseUrl: string): string {
    const trimmed = this.cleanString(rawUrl);
    if (!trimmed || trimmed.startsWith('#')) return '';
    try {
      const resolved = baseUrl ? new URL(trimmed, baseUrl) : new URL(trimmed);
      resolved.hash = '';
      return resolved.toString();
    } catch {
      return '';
    }
  }

  private normalizeUrl(url: string): string {
    try {
      const parsed = new URL(this.ensureUrlScheme(url));
      const normalized = `${parsed.origin.toLowerCase()}${parsed.pathname}`;
      return normalized.replace(/\/+$/, '');
    } catch {
      const stripped = url.split('#')[0].split('?')[0];
      return stripped.replace(/\/+$/, '');
    }
  }

  private ensureUrlScheme(url: string): string {
    const trimmed = url.trim();
    if (/^https?:\/\//i.test(trimmed)) return trimmed;
    if (/^www\./i.test(trimmed)) return `https://${trimmed}`;
    if (/^canada\.ca\//i.test(trimmed)) return `https://${trimmed}`;
    return trimmed;
  }

  private getPathSuffixKey(url: string): string | null {
    const path = this.extractPathname(url);
    if (!path) return null;
    const normalizedPath = this.normalizePath(path);
    const langMarker = this.findLangMarker(normalizedPath);
    if (!langMarker) return normalizedPath;
    return normalizedPath.slice(normalizedPath.indexOf(langMarker));
  }

  private extractPathname(url: string): string | null {
    try {
      const parsed = new URL(this.ensureUrlScheme(url));
      return parsed.pathname || null;
    } catch {
      const stripped = url.split('#')[0].split('?')[0];
      const slashIndex = stripped.indexOf('/');
      return slashIndex >= 0 ? stripped.slice(slashIndex) : null;
    }
  }

  private findLangMarker(path: string): string | null {
    if (path.includes('/en/')) return '/en/';
    if (path.includes('/fr/')) return '/fr/';
    return null;
  }

  private normalizePath(path: string): string {
    return path.toLowerCase().replace(/\/+$/, '');
  }

  private parseVisits(raw: number | string | undefined): number | null {
    if (typeof raw === 'number') {
      return Number.isFinite(raw) ? Math.round(raw) : null;
    }
    if (typeof raw !== 'string') return null;
    const cleaned = raw.replace(/[^\d.]/g, '');
    if (!cleaned) return null;
    const value = Number.parseFloat(cleaned);
    return Number.isFinite(value) ? Math.round(value) : null;
  }

  private decodeUrl(url: string): string {
    try {
      return decodeURI(url);
    } catch {
      return url;
    }
  }

  private buildDoormatLabel(summary: TopicDoormatSummary): string {
    const itemLabel = [
      summary.sectionItemIndex ? `${summary.sectionItemIndex}.` : '',
      summary.linkText || summary.href || 'Doormat',
    ]
      .filter(Boolean)
      .join(' ');
    return summary.sectionTitle
      ? `${summary.sectionTitle}: ${itemLabel}`
      : [
          summary.index ? `${summary.index}.` : '',
          summary.linkText || summary.href || 'Doormat',
        ]
          .filter(Boolean)
          .join(' ');
  }

  private formatVisits(value: number): string {
    return new Intl.NumberFormat('en-CA').format(value);
  }

  private cleanString(value: unknown): string {
    return typeof value === 'string' ? value.trim() : '';
  }
}
