import { Injectable } from '@angular/core';
import { TreeNode } from 'primeng/api';

export interface IaBuildResult {
  tree: TreeNode[];
  brokenLinks: { parentUrl?: string; url: string; status: number }[];
}

export interface IaBuildOptions {
  onStart?: (totalUrls: number) => void;
  onProgress?: (processed: number, total: number) => void;
  onDone?: () => void;
}

@Injectable({
  providedIn: 'root',
})
export class IaStructureService {
  private lastResult: { url: string; result: IaBuildResult } | null = null;
  private readonly skipFormsAndPubs = new Set<string>([
    'https://www.canada.ca/en/revenue-agency/services/forms-publications/forms.html',
    'https://www.canada.ca/fr/agence-revenu/services/formulaires-publications/formulaires.html',
    'https://www.canada.ca/en/revenue-agency/services/forms-publications/publications.html',
    'https://www.canada.ca/fr/agence-revenu/services/formulaires-publications/publications.html',
  ]);

  async buildIaTree(
    urls: string[],
    depth: number,
    options?: IaBuildOptions,
  ): Promise<IaBuildResult> {
    const brokenLinks: { parentUrl?: string; url: string; status: number }[] =
      [];
    const state = {
      total: urls.length,
      processed: 0,
      started: false,
    };

    if (!state.started) {
      state.started = true;
      options?.onStart?.(state.total);
    }

    const tree = await this.buildIaTreeInternal(
      urls,
      depth,
      undefined,
      0,
      state,
      brokenLinks,
      options,
    );

    options?.onDone?.();
    const result = { tree, brokenLinks };
    if (urls.length === 1) {
      this.lastResult = { url: urls[0], result };
    }
    return result;
  }

  getCachedResultFor(url: string): IaBuildResult | null {
    if (!this.lastResult) return null;
    return this.lastResult.url === url ? this.lastResult.result : null;
  }

  flattenTree(
    nodes: TreeNode[],
    level = 1,
  ): Array<{ url: string; level: number }> {
    const rows: Array<{ url: string; level: number }> = [];
    for (const node of nodes) {
      const url = node.data?.url;
      if (url) {
        rows.push({ url, level });
      }
      if (node.children?.length) {
        rows.push(...this.flattenTree(node.children, level + 1));
      }
    }
    return rows;
  }

  private async buildIaTreeInternal(
    urls: string[],
    depth: number,
    parentUrl?: string,
    level = 0,
    state?: { total: number; processed: number },
    brokenLinks?: { parentUrl?: string; url: string; status: number }[],
    options?: IaBuildOptions,
  ): Promise<TreeNode[]> {
    if (depth <= 0) return [];

    const nodes: TreeNode[] = [];

    for (const url of urls) {
      const meta = await this.getPageMetaAndLinks(url);

      if (state) {
        state.processed += 1;
        options?.onProgress?.(state.processed, state.total);
      }

      if (!meta || meta.status !== 200) {
        if (brokenLinks) {
          brokenLinks.push({
            parentUrl,
            url,
            status: meta?.status || 0,
          });
        }
        continue;
      }
      if (!meta.breadcrumb || !meta.links) continue;

      if (parentUrl && meta.breadcrumb.at(-1) !== parentUrl) {
        continue;
      }

      const node: TreeNode = {
        label: meta.h1,
        data: {
          h1: meta.h1,
          url: url,
          originalParent: parentUrl,
          editing: null,
          customStyle: false,
          customStyleKey: null,
          borderStyle: 'border-2 border-primary border-round shadow-2',
        },
        expanded: true,
        children: [],
      };

      if (meta.links?.length && depth > 1) {
        const total = meta.links.length;
        let limit = total;
        if (this.skipFormsAndPubs.has(url)) {
          limit = 5;
        }

        if (state) {
          state.total += total;
          options?.onProgress?.(state.processed, state.total);
        }

        const links = meta.links.slice(0, limit);
        node.children = await this.buildIaTreeInternal(
          links,
          depth - 1,
          url,
          level + 1,
          state,
          brokenLinks,
          options,
        );

        if (total > limit) {
          node.children?.push({
            label: `+ ${total - limit} more...`,
            data: {
              h1: `+ ${total - limit} more...`,
              url: null,
              originalParent: parentUrl,
              editing: null,
              customStyle: true,
              customStyleKey: 'template',
              borderStyle:
                'border-2 border-primary border-round shadow-2 border-dashed',
            },
            expanded: true,
            children: [],
          });
        }
      }

      nodes.push(node);
    }

    return nodes;
  }

  private async getPageMetaAndLinks(url: string): Promise<{
    h1?: string;
    breadcrumb?: string[];
    links?: string[];
    status: number;
  } | null> {
    try {
      const res = await fetch(url);
      const status = res.status;
      if (!res.ok) return { status };
      const html = await res.text();

      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');

      const h1Elements = Array.from(doc.querySelectorAll('h1'));
      const h1: string = h1Elements
        .map((e) => e.textContent?.trim())
        .filter(Boolean)
        .join('<br>');

      const breadcrumb = Array.from(
        doc.querySelectorAll('.breadcrumb li a'),
      ).map(
        (a) =>
          new URL((a as HTMLAnchorElement).getAttribute('href') || '', url)
            .href,
      );

      const anchors = Array.from(
        doc.querySelectorAll('main a[href]'),
      ) as HTMLAnchorElement[];
      const baseUrl = new URL(url).origin;
      const links = Array.from(
        new Set(
          anchors
            .map((a) => {
              const u = new URL(a.getAttribute('href') || '', url);
              u.hash = '';
              return u.href;
            })
            .filter((u) => u.startsWith(baseUrl) && u !== url),
        ),
      );

      return { h1, breadcrumb, links, status };
    } catch (err) {
      console.error(`Failed to fetch ${url}`, err);
      return { status: 0 };
    }
  }
}
