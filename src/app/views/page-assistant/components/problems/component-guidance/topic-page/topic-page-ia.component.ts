import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  effect,
  inject,
} from '@angular/core';
import { CommonModule, LocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';

//primeNG
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { IftaLabel } from 'primeng/iftalabel';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import {
  Tree,
  TreeNodeContextMenuSelectEvent,
  TreeNodeDropEvent,
} from 'primeng/tree';
import { ContextMenuModule, ContextMenu } from 'primeng/contextmenu';
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import {
  FileUploadModule,
  FileUploadHandlerEvent,
} from 'primeng/fileupload';

//Services
import { UploadStateService } from '../../../../services/upload-state.service';
import { IaStructureService } from '../../../../services/ia-structure.service';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { ThemeService } from '../../../../../../services/theme.service';

import { MenuItem, TreeNode, TreeDragDropService, MessageService } from 'primeng/api';
import { FullscreenHTMLElement } from '../../../../../../views/ia-assistant/data/data.model';

import { environment } from '../../../../../../../environments/environment';

type TopicSection = 'most' | 'doormats' | 'feature';
type TopicPageLinkInfo = {
  section: TopicSection;
  label: string;
};

@Component({
  selector: 'ca-topic-page-ia',
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    TableModule,
    ButtonModule,
    IftaLabel,
    BreadcrumbModule,
    OrganizationChartModule,
    ProgressBarModule,
    InputNumberModule,
    InputTextModule,
    Tree,
    ContextMenuModule,
    InputGroup,
    InputGroupAddonModule,
    FileUploadModule,
  ],
  providers: [TreeDragDropService],
  templateUrl: './topic-page-ia.component.html',
  styles: `
    /* remove link style from tree & fix indentation for line breaks in table */
    .ia-label {
      white-space: pre-line;
      display: inline-block;
      color: var(--text-color) !important;
      text-decoration: none !important;
    }

    /* fix tree text color for dark backgrounds */
    ::ng-deep .p-tree li[class*='text-white'] > .p-tree-node-content .ia-label {
      color: #ffffff !important;
    }

    /* fix tree text color for light backgrounds */
    ::ng-deep .p-tree li[class*='text-black'] > .p-tree-node-content .ia-label {
      color: #000000 !important;
    }

    /* remove default hover style from tree nodes */
    ::ng-deep .p-tree .p-tree-node-content:hover {
      background-color: unset !important;
    }

    ::ng-deep .topic-ia-badge {
      display: inline-block;
      margin-left: 0.5rem;
      padding: 0.1rem 0.45rem;
      border-radius: 9999px;
      font-size: 0.875rem;
      font-weight: 600;
      border: 1px solid #d1d5db;
      background: #e5e7eb;
      color: #374151;
      white-space: nowrap;
    }

    :host-context(.dark-mode) ::ng-deep .topic-ia-badge {
      border-color: #4b5563;
      background: #374151;
      color: #f9fafb;
    }


    /* remove link style from IA chart */
    ::ng-deep .ia-chart-container .p-organizationchart-node a {
      color: var(--text-color) !important;
      text-decoration: none !important;
    }

    /* fix chart text color for dark backgrounds */
    ::ng-deep .ia-chart-container .p-organizationchart-node.text-white a {
      color: #ffffff !important;
    }

    /* fix chart text color for light backgrounds */
    ::ng-deep .ia-chart-container .p-organizationchart-node.text-black a {
      color: #000000 !important;
    }

  `,
})
export class TopicPageIaComponent implements OnInit {
  private uploadState = inject(UploadStateService);
  private translate = inject(TranslateService);
  private locationStrategy = inject(LocationStrategy);
  private theme = inject(ThemeService);
  private iaStructure = inject(IaStructureService);
  private messageService = inject(MessageService);

  production: boolean = environment.production;

  constructor() {
    effect(() => {
      this.theme.darkMode(); // track dark mode changes
      this.updateNodeStyles(this.iaChart, 0);
      this.updateTopicPageTreeStyles(this.topicPageTree, 0);
    });
  }

  ngOnInit() {
    const data = this.uploadState.getUploadData();
    this.breadcrumb = data?.breadcrumb || [];
    this.originalUrl = data?.originalUrl || '';
    this.options = [...this.baseMenu];
    this.baseHref = this.locationStrategy.getBaseHref();
    this.topicPageTree = this.buildTopicPageTree(this.getCurrentPageLabel());
    this.updateTopicPageTreeStyles(this.topicPageTree, 0);
  }

  originalUrl = '';
  //Breadcrumb & orphan status
  breadcrumb: MenuItem[] = [];
  urlFound: boolean | null = null;

  //IA chart
  iaChart: TreeNode[] | null = null;
  brokenLinks: { parentUrl?: string; url: string; status: number }[] = [];
  depth = 3; //default value

  //For tracking progress while building IA chart
  isChartLoading = false;
  iaProgress = 0;
  totalUrls = 0;
  processedUrls = 0;
  showCsvUpload = false;
  csvFileName = '';
  urlColumnIndex: number | null = null;
  topicPageTree: TreeNode[] = [];
  visitsByUrl = new Map<string, number>();
  visitsColumnIndex: number | null = null;
  isTopicPage = false;
  topicPageSections = new Map<string, TopicPageLinkInfo>();

  //Button fxn
  async checkIA() {
    //IA orphan status
    this.urlFound = await this.checkParentLinks(
      this.breadcrumb,
      this.originalUrl,
    );

    //IA tree
    this.isChartLoading = true;
    this.iaProgress = 5;
    this.processedUrls = 0;
    this.totalUrls = 0;
    const result = await this.iaStructure.buildIaTree(
      [this.originalUrl],
      this.depth,
      {
        onStart: (total) => {
          this.totalUrls = total;
        },
        onProgress: (processed, total) => {
          this.processedUrls = processed;
          this.totalUrls = total;
          this.iaProgress =
            total > 0 ? Math.round((processed / total) * 100) : 0;
        },
        onDone: () => {
          this.iaProgress = 100;
          setTimeout(() => {
            this.isChartLoading = false;
            this.iaProgress = 0;
          }, 1000);
        },
      },
    );
    this.iaChart = result.tree;
    this.brokenLinks = result.brokenLinks;
    this.updateNodeStyles(this.iaChart, 0);
    this.applyVisitsToIaTree();
    this.rebuildTopicPageTreeFromIa();

    // Avoid shifting the view after crawl completion.
  }

  //Step 1: Check if breadcrumb orphan via parent page
  async checkParentLinks(
    breadcrumbs: MenuItem[],
    originalUrl: string,
  ): Promise<boolean> {
    if (!breadcrumbs?.length) return false;

    const lastBreadcrumb = breadcrumbs[breadcrumbs.length - 1]; //get breadcrumb parent
    const targetUrl = lastBreadcrumb.url;
    if (!targetUrl) {
      console.error('Last breadcrumb has no URL');
      return false;
    }

    try {
      const response = await fetch(targetUrl);
      if (!response.ok) {
        console.error(`Failed to fetch breadcrumb page: ${response.status}`);
        return false;
      }

      const html = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');

      const links = Array.from(doc.querySelectorAll('a')) //get all links on parent page
        .map((a) => a.getAttribute('href'))
        .filter((href): href is string => !!href);

      // Make links absolute
      const absoluteLinks = links.map((href) => {
        try {
          return new URL(href, targetUrl).href;
        } catch {
          return href; // fallback
        }
      });

      const found = absoluteLinks.includes(originalUrl);
      console.log(
        `Original URL ${found ? 'found' : 'NOT found'} in ${targetUrl}`,
      );
      return found;
    } catch (err) {
      console.error('Error checking breadcrumb target:', err);
      return false;
    }
  }

  //Set background color

  get bgColors(): string[] {
    return this.theme.darkMode() ? this.bgColorsDark : this.bgColorsLight;
  }

  bgColorsLight: string[] = [
    'surface-0 hover:bg-primary-50',
    'bg-primary-50 hover:bg-primary-100',
    'bg-primary-100 hover:bg-primary-200',
    'bg-primary-200 hover:bg-primary-300',
    'bg-primary-300 hover:bg-primary-400',
    'bg-primary-400 hover:bg-primary-500',
    'bg-primary-500 hover:bg-primary-600 text-white',
    'bg-primary-600 hover:bg-primary-700 text-white',
    'bg-primary-700 hover:bg-primary-800 text-white',
    'bg-primary-800 hover:bg-primary-900 text-white',
  ];

  bgColorsDark: string[] = [
    'surface-0 hover:bg-primary-900',
    'bg-primary-900 hover:bg-primary-800',
    'bg-primary-800 hover:bg-primary-700',
    'bg-primary-700 hover:bg-primary-600',
    'bg-primary-600 hover:bg-primary-500',
    'bg-primary-500 hover:bg-primary-400',
    'bg-primary-400 hover:bg-primary-300  text-black',
    'bg-primary-300 hover:bg-primary-200 text-black',
    'bg-primary-200 hover:bg-primary-100 text-black',
    'bg-primary-100 hover:bg-primary-50 text-black',
  ];

  get contextStyles(): Record<string, string> {
    return this.theme.darkMode()
      ? this.contextStylesDark
      : this.contextStylesLight;
  }

  contextStylesLight: Record<string, string> = {
    new: 'bg-green-200 hover:bg-green-300 text-black',
    rot: 'bg-red-200 hover:bg-red-300 text-black',
    move: 'bg-yellow-200 hover:bg-yellow-300 text-black',
    template: 'surface-200 hover:surface-300 text-black',
  };

  contextStylesDark: Record<string, string> = {
    new: 'bg-green-700 hover:bg-green-600 text-white',
    rot: 'bg-red-700 hover:bg-red-600 text-white',
    move: 'bg-yellow-700 hover:bg-yellow-600 text-black',
    template: 'surface-200 hover:surface-300 text-white',
  };


  //Prevent default click on org chart links <-- Do we want this??
  onNodeClick(event: MouseEvent) {
    if (event.button === 0) {
      event.preventDefault();
    }
  }

  //Full screen element
  @ViewChild('chartContainer') chartContainer!: ElementRef;
  maximize(elRef: ElementRef) {
    const element = elRef.nativeElement as FullscreenHTMLElement;
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen(); // Safari
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen(); // IE11
    }
  }

  async copyUrlsToClipboard() {
    const urls = this.collectUrls(this.iaChart);
    if (!urls.length) {
      this.messageService.add({
        severity: 'warn',
        summary: this.translate.instant('page.topicIa.copyUrls.empty'),
        life: 3000,
      });
      return;
    }

    const text = urls.join('\n');
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        this.fallbackCopyText(text);
      }
      this.messageService.add({
        severity: 'success',
        summary: this.translate.instant('page.topicIa.copyUrls.success'),
        life: 3000,
      });
      this.showCsvUpload = true;
    } catch (err) {
      console.error('Failed to copy URLs:', err);
      this.messageService.add({
        severity: 'error',
        summary: this.translate.instant('page.topicIa.copyUrls.error'),
        life: 4000,
      });
    }
  }

  onCsvUpload(event: FileUploadHandlerEvent) {
    const file = event.files?.[0];
    if (!file) return;
    this.csvFileName = file.name;
    this.readCsvFile(file);
  }

  private readCsvFile(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      const text = typeof reader.result === 'string' ? reader.result : '';
      const rows = this.parseCsv(text);
      const headers = this.getHeadersFromRows(rows);
      this.urlColumnIndex = this.getUrlColumnIndex(headers);
      this.visitsColumnIndex = this.getVisitsColumnIndex(headers);
      this.visitsByUrl = this.buildVisitsMap(
        rows,
        this.urlColumnIndex,
        this.visitsColumnIndex,
      );
      this.applyVisitsToIaTree();
      this.rebuildTopicPageTreeFromIa();
      this.messageService.add({
        severity: 'success',
        summary: this.translate.instant('page.topicIa.csvUpload.toast.summary'),
        detail: this.translate.instant('page.topicIa.csvUpload.toast.detail', {
          fileName: file.name,
        }),
        life: 4000,
      });
      if (!rows.slice(1).length) {
        this.messageService.add({
          severity: 'warn',
          summary: 'No rows found in the CSV.',
          life: 3000,
        });
      }
    };
    reader.onerror = () => {
      this.messageService.add({
        severity: 'error',
        summary: 'Unable to read the CSV file.',
        life: 4000,
      });
    };
    reader.readAsText(file);
  }

  private getHeadersFromRows(rows: string[][]): string[] {
    if (!rows.length) return [];
    return rows[0].map((cell, index) =>
      (index === 0 ? cell.replace(/^\uFEFF/, '') : cell).trim(),
    );
  }

  private getUrlColumnIndex(headers: string[]): number | null {
    if (!headers.length) return null;
    const index = headers.findIndex((header) =>
      header.toLowerCase().includes('url') || header.toLowerCase().includes('page'),
    );
    return index >= 0 ? index : null;
  }

  private getVisitsColumnIndex(headers: string[]): number | null {
    if (!headers.length) return null;
    const index = headers.findIndex((header) =>
      header.toLowerCase().includes('visit'),
    );
    return index >= 0 ? index : null;
  }

  private buildTopicPageTree(rootLabel: string): TreeNode[] {
    return [
      {
        label: rootLabel,
        data: {
          url: this.originalUrl,
          isRoot: true,
        },
        expanded: true,
        children: [
          {
            label: 'Most requested',
            data: { url: '', isCategory: true },
            expanded: true,
            children: [],
          },
          {
            label: 'Doormats',
            data: { url: '', isCategory: true },
            expanded: true,
            children: [],
          },
          {
            label: 'Features',
            data: { url: '', isCategory: true },
            expanded: true,
            children: [],
          },
          {
            label: 'Not on topic page',
            data: { url: '', isCategory: true },
            expanded: true,
            children: [],
          },
        ],
      },
    ];
  }

  private rebuildTopicPageTreeFromIa(): void {
    this.updateTopicPageSectionMap();
    const baseTree = this.buildTopicPageTree(this.getCurrentPageLabel());
    if (!this.iaChart?.length) {
      this.topicPageTree = baseTree;
      this.updateTopicPageTreeStyles(this.topicPageTree, 0);
      return;
    }

    const doormats: TreeNode[] = [];
    const notOnTopics: TreeNode[] = [];
    const mostRequestedCandidates: { node: TreeNode; visits: number }[] = [];

    const walk = (nodes: TreeNode[], depth: number) => {
      for (const node of nodes) {
        if (depth > 0) {
          const cloned = this.cloneFlatNode(node, depth);
          if (depth === 1) {
            doormats.push(cloned);
          } else {
            notOnTopics.push(cloned);
            const visits = this.getVisitsForNode(node);
            if (visits !== null) {
              mostRequestedCandidates.push({ node: cloned, visits });
            }
          }
        }
        if (node.children?.length) {
          walk(node.children, depth + 1);
        }
      }
    };

    walk(this.iaChart, 0);

    const root = baseTree[0];
    const categories = root.children ?? [];
    const mostRequested = categories[0];
    const doormatsCategory = categories[1];
    const feature = categories[2];
    const notOnTopicsCategory = categories[3];

    if (mostRequested) {
      if (this.visitsByUrl.size > 0 && mostRequestedCandidates.length > 0) {
        const top = [...mostRequestedCandidates]
          .sort((a, b) => b.visits - a.visits)
          .slice(0, 6);
        const topUrls = new Set(
          top.map((item) =>
            this.normalizeUrl(item.node.data?.url ?? ''),
          ),
        );
        mostRequested.children = top.map((item) => item.node);
        const remaining = notOnTopics.filter(
          (node) => !topUrls.has(this.normalizeUrl(node.data?.url ?? '')),
        );
        notOnTopicsCategory.children = this.sortByVisitsDesc(remaining);
      } else {
        mostRequested.children = [];
      }
    }
    if (feature) feature.children = [];
    if (doormatsCategory) doormatsCategory.children = doormats;
    if (notOnTopicsCategory && !notOnTopicsCategory.children) {
      notOnTopicsCategory.children =
        this.visitsByUrl.size > 0
          ? this.sortByVisitsDesc(notOnTopics)
          : notOnTopics;
    }

    this.addMissingIaNodes(baseTree);

    if (mostRequested?.children?.length) {
      this.applySectionDiffState(mostRequested.children, 'most');
    }
    if (doormatsCategory?.children?.length) {
      this.applySectionDiffState(doormatsCategory.children, 'doormats');
    }
    if (feature?.children?.length) {
      this.applySectionDiffState(feature.children, 'feature');
    }
    if (notOnTopicsCategory?.children?.length) {
      this.applySectionDiffState(notOnTopicsCategory.children, 'notOnTopics');
    }
    this.reorderNotOnTopicsBadged(root);

    this.topicPageTree = [root];
    this.updateTopicPageTreeStyles(this.topicPageTree, 0);
  }

  private getVisitsForNode(node: TreeNode): number | null {
    const url = node.data?.url?.trim();
    if (!url) return null;
    const normalized = this.normalizeUrl(url);
    const visits =
      this.visitsByUrl.get(normalized) ??
      this.visitsByUrl.get(this.normalizeUrl(this.decodeUrl(url)));
    return visits ?? null;
  }

  private sortByVisitsDesc(nodes: TreeNode[]): TreeNode[] {
    return [...nodes].sort((a, b) => {
      const visitsA = this.getVisitsForNode(a) ?? -1;
      const visitsB = this.getVisitsForNode(b) ?? -1;
      return visitsB - visitsA;
    });
  }

  private cloneFlatNode(node: TreeNode, depth: number): TreeNode {
    const visits = this.getVisitsForNode(node);
    const baseLabel =
      typeof node.data?.originalLabel === 'string' &&
      node.data.originalLabel.trim().length
        ? node.data.originalLabel
        : (node.label ?? '').toString();
    const iaLevel = depth + 1;
    const label =
      visits !== null
        ? `${baseLabel} (${this.formatVisits(visits)} visits, level ${iaLevel})`
        : baseLabel;
    return {
      label,
      data: {
        url: node.data?.url ?? '',
        isCategory: false,
        diffState: null,
        iaLevel,
        originalLabel: baseLabel,
      },
    };
  }

  private updateTopicPageSectionMap(): void {
    const html = this.uploadState.getUploadData()?.originalHtml || '';
    if (!html) {
      this.isTopicPage = false;
      this.topicPageSections = new Map();
      return;
    }

    const doc = new DOMParser().parseFromString(html, 'text/html');
    const hasDoormats = !!doc.querySelector('.gc-srvinfo');
    this.isTopicPage = hasDoormats;
    if (!hasDoormats) {
      this.topicPageSections = new Map();
      return;
    }

    const map = new Map<string, TopicPageLinkInfo>();
    const baseUrl = this.originalUrl || '';
    const sections: Array<{ key: TopicSection; selector: string }> = [
      { key: 'most', selector: '.gc-most-requested' },
      { key: 'doormats', selector: '.gc-srvinfo' },
      { key: 'feature', selector: '.gc-features' },
    ];

    for (const section of sections) {
      const container = doc.querySelector(section.selector);
      if (!container) continue;
      const links = container.querySelectorAll('a[href]');
      links.forEach((link) => {
        const href = link.getAttribute('href');
        if (!href) return;
        const text = (link.textContent || '').trim();
        const normalized = this.normalizeUrl(
          this.resolveUrl(href, baseUrl),
        );
        if (normalized) {
          map.set(normalized, {
            section: section.key,
            label: text || href,
          });
        }
      });
    }

    this.topicPageSections = map;
  }

  private resolveUrl(href: string, baseUrl: string): string {
    try {
      return new URL(href, baseUrl || undefined).href;
    } catch {
      return href;
    }
  }

  private applySectionDiffState(
    nodes: TreeNode[],
    section: TopicSection | 'notOnTopics',
  ): void {
    nodes.forEach((node) => {
      if (node.data?.isMissingIa) {
        this.applyMissingIaLabel(node, section);
        return;
      }
      if (!this.isTopicPage) {
        node.data.diffState = null;
        node.label = this.getTopicNodeBaseLabel(node);
        return;
      }
      const url = node.data?.url?.trim();
      if (!url) {
        node.data.diffState = null;
        node.label = this.getTopicNodeBaseLabel(node);
        return;
      }
      const normalized = this.normalizeUrl(url);
      const currentInfo =
        this.topicPageSections.get(normalized) ??
        this.topicPageSections.get(this.normalizeUrl(this.decodeUrl(url)));
      if (!currentInfo) {
        node.data.diffState = null; // all new stays grey
        node.label = this.getTopicNodeBaseLabel(node);
        return;
      }
      if (section === 'notOnTopics') {
        node.data.diffState = 'missing';
        node.label = `${this.getTopicNodeBaseLabel(node)} <span class="topic-ia-badge">Was in ${this.getSectionLabel(currentInfo.section)}</span>`;
        return;
      }

      node.data.diffState =
        currentInfo.section === section ? 'match' : 'move';
      if (node.data.diffState === 'move') {
        node.label = `${this.getTopicNodeBaseLabel(node)} <span class="topic-ia-badge">Was in ${this.getSectionLabel(currentInfo.section)}</span>`;
      } else {
        node.label = this.getTopicNodeBaseLabel(node);
      }
    });
  }

  private addMissingIaNodes(baseTree: TreeNode[]): void {
    if (!this.isTopicPage) return;
    const iaUrls = this.buildIaUrlSet();
    if (!iaUrls.size) return;

    const root = baseTree[0];
    const categories = root.children ?? [];
    const mostRequested = categories[0];
    const doormatsCategory = categories[1];
    const feature = categories[2];

    const addToCategory = (
      category: TreeNode | undefined,
      node: TreeNode,
    ) => {
      if (!category) return;
      category.children = category.children || [];
      const existing = new Set(
        category.children
          .map((child) => this.normalizeUrl(child.data?.url ?? ''))
          .filter((value) => value.length > 0),
      );
      const normalized = this.normalizeUrl(node.data?.url ?? '');
      if (!existing.has(normalized)) {
        category.children.push(node);
      }
    };

    for (const [url, info] of this.topicPageSections.entries()) {
      if (iaUrls.has(url)) continue;
      const label = `${info.label} <span class="topic-ia-badge">Not in IA structure</span>`;
      const node: TreeNode = {
        label,
        data: {
          url,
          isCategory: false,
          diffState: 'missingIa',
          originalLabel: info.label,
          originalSuggestedSection: info.section,
          isMissingIa: true,
        },
      };
      if (info.section === 'most') {
        addToCategory(mostRequested, node);
      } else if (info.section === 'doormats') {
        addToCategory(doormatsCategory, node);
      } else {
        addToCategory(feature, node);
      }
    }
  }

  private buildIaUrlSet(): Set<string> {
    const urls = new Set<string>();
    const walk = (nodes: TreeNode[]) => {
      for (const node of nodes) {
        const url = node.data?.url?.trim();
        if (url) {
          urls.add(this.normalizeUrl(url));
          urls.add(this.normalizeUrl(this.decodeUrl(url)));
        }
        if (node.children?.length) {
          walk(node.children);
        }
      }
    };
    if (this.iaChart?.length) {
      walk(this.iaChart);
    }
    return urls;
  }

  private refreshTopicPageDiffStyles(): void {
    if (!this.topicPageTree.length) return;
    if (!this.isTopicPage) return;

    const root = this.topicPageTree[0];
    const categories = root.children ?? [];
    const mostRequested = categories[0];
    const doormatsCategory = categories[1];
    const feature = categories[2];
    const notOnTopicsCategory = categories[3];

    if (mostRequested?.children?.length) {
      this.applySectionDiffState(mostRequested.children, 'most');
    }
    if (doormatsCategory?.children?.length) {
      this.applySectionDiffState(doormatsCategory.children, 'doormats');
    }
    if (feature?.children?.length) {
      this.applySectionDiffState(feature.children, 'feature');
    }
    if (notOnTopicsCategory?.children?.length) {
      this.applySectionDiffState(notOnTopicsCategory.children, 'notOnTopics');
    }
    this.reorderNotOnTopicsBadged();
  }

  private getTopicNodeBaseLabel(node: TreeNode): string {
    const visits = this.getVisitsForNode(node);
    const baseLabel =
      typeof node.data?.originalLabel === 'string' &&
      node.data.originalLabel.trim().length
        ? node.data.originalLabel
        : (node.label ?? '').toString();
    const iaLevel =
      typeof node.data?.iaLevel === 'number' ? node.data.iaLevel : null;
    if (visits !== null && iaLevel !== null) {
      return `${baseLabel} (${this.formatVisits(visits)} visits, level ${iaLevel})`;
    }
    return baseLabel;
  }

  private getSectionLabel(section: TopicSection): string {
    switch (section) {
      case 'most':
        return 'Most requested';
      case 'doormats':
        return 'Doormats';
      case 'feature':
      default:
        return 'Features';
    }
  }

  private applyMissingIaLabel(
    node: TreeNode,
    section: TopicSection | 'notOnTopics',
  ): void {
    const baseLabel = this.getMissingIaBaseLabel(node);
    if (!this.isTopicPage) {
      node.label = baseLabel;
      node.data.diffState = 'missingIa';
      return;
    }

    const url = node.data?.url?.trim();
    if (!url) {
      node.label = baseLabel;
      return;
    }

    const normalized = this.normalizeUrl(url);
    const currentInfo =
      this.topicPageSections.get(normalized) ??
      this.topicPageSections.get(this.normalizeUrl(this.decodeUrl(url)));
    if (!currentInfo) {
      node.label = baseLabel;
      node.data.diffState = 'missingIa';
      return;
    }

    if (currentInfo.section === section) {
      node.label = baseLabel;
      node.data.diffState = 'missingIaMatch';
      return;
    }

    const previousText = `<span class="topic-ia-badge">Was in ${this.getSectionLabel(
      currentInfo.section,
    )}</span>`;
    node.label = `${baseLabel} ${previousText}`;

    if (section === 'notOnTopics') {
      node.data.diffState = 'missingIaMissing';
      return;
    }

    node.data.diffState = 'missingIaMove';
  }

  private getMissingIaBaseLabel(node: TreeNode): string {
    const baseLabel =
      typeof node.data?.originalLabel === 'string' &&
      node.data.originalLabel.trim().length
        ? node.data.originalLabel
        : (node.label ?? '').toString();
    return `${baseLabel} <span class="topic-ia-badge">Not in IA structure</span>`;
  }

  private getCurrentPageLabel(): string {
    const label = this.iaChart?.[0]?.label;
    if (typeof label === 'string' && label.trim().length) {
      return label;
    }
    return this.originalUrl || 'Current page';
  }

  private parseCsv(text: string): string[][] {
    const rows: string[][] = [];
    let row: string[] = [];
    let value = '';
    let inQuotes = false;

    for (let i = 0; i < text.length; i += 1) {
      const char = text[i];
      const nextChar = text[i + 1];

      if (char === '"' && inQuotes && nextChar === '"') {
        value += '"';
        i += 1;
        continue;
      }

      if (char === '"') {
        inQuotes = !inQuotes;
        continue;
      }

      if (char === ',' && !inQuotes) {
        row.push(value.trim());
        value = '';
        continue;
      }

      if ((char === '\n' || char === '\r') && !inQuotes) {
        if (char === '\r' && nextChar === '\n') {
          i += 1;
        }
        row.push(value.trim());
        if (row.some((cell) => cell.length)) {
          rows.push(row);
        }
        row = [];
        value = '';
        continue;
      }

      value += char;
    }

    row.push(value.trim());
    if (row.some((cell) => cell.length)) {
      rows.push(row);
    }

    return rows;
  }

  private buildVisitsMap(
    rows: string[][],
    urlIndex: number | null,
    visitsIndex: number | null,
  ): Map<string, number> {
    if (
      !rows.length ||
      urlIndex === null ||
      visitsIndex === null ||
      urlIndex < 0 ||
      visitsIndex < 0
    ) {
      return new Map();
    }

    const map = new Map<string, number>();
    const dataRows = rows.slice(1);
    for (const row of dataRows) {
      const urlRaw = row[urlIndex]?.trim();
      const visitsRaw = row[visitsIndex]?.trim();
      if (!urlRaw || !visitsRaw) continue;
      const visits = this.parseVisits(visitsRaw);
      if (visits === null) continue;
      const normalized = this.normalizeUrl(urlRaw);
      map.set(normalized, visits);
      map.set(this.normalizeUrl(this.decodeUrl(urlRaw)), visits);
    }
    return map;
  }

  private applyVisitsToIaTree(): void {
    if (!this.iaChart?.length || this.visitsByUrl.size === 0) return;

    const walk = (nodes: TreeNode[]) => {
      for (const node of nodes) {
        const url = node?.data?.url?.trim();
        if (url) {
          const visits =
            this.visitsByUrl.get(this.normalizeUrl(url)) ??
            this.visitsByUrl.get(this.normalizeUrl(this.decodeUrl(url)));
          if (visits !== undefined) {
            const baseLabel =
              node.data?.originalLabel ?? (node.label ?? '').toString();
            if (!node.data.originalLabel) {
              node.data.originalLabel = baseLabel;
            }
            node.label = `${baseLabel} (${this.formatVisits(visits)} visits)`;
          }
        }
        if (node.children?.length) {
          walk(node.children);
        }
      }
    };

    walk(this.iaChart);
  }

  private parseVisits(raw: string): number | null {
    const cleaned = raw.replace(/[^\d.]/g, '');
    if (!cleaned) return null;
    const value = Number.parseFloat(cleaned);
    if (!Number.isFinite(value)) return null;
    return Math.round(value);
  }

  private formatVisits(value: number): string {
    return new Intl.NumberFormat('en-CA').format(value);
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

  private decodeUrl(url: string): string {
    try {
      return decodeURI(url);
    } catch {
      return url;
    }
  }

  private collectUrls(nodes: TreeNode[] | null): string[] {
    if (!nodes?.length) return [];

    const urls: string[] = [];
    const seen = new Set<string>();
    const stack: TreeNode[] = [...nodes];

    while (stack.length) {
      const node = stack.pop()!;
      const url = node?.data?.url?.trim();
      if (url && !seen.has(url)) {
        seen.add(url);
        urls.push(url);
      }
      if (node.children?.length) {
        stack.push(...node.children);
      }
    }

    return urls;
  }

  private fallbackCopyText(text: string) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }

  //Context menu
  @ViewChild('cm') cm!: ContextMenu;
  options: MenuItem[] = []; //options for editing chart nodes

  baseMenu: MenuItem[] = [
    {
      label: 'Edit label',
      icon: 'pi pi-pen-to-square',
      command: () => {
        console.log('Edit ', this.selectedNode);
        this.editNode('label');
      },
    },
    {
      label: 'Edit url',
      icon: 'pi pi-link',
      command: () => {
        console.log('Edit ', this.selectedNode);
        this.editNode('link');
      },
    },
    {
      separator: true,
    },
    {
      label: 'Add child page',
      icon: 'pi pi-plus',
      command: () => {
        console.log('Add ', this.selectedNode);
        this.addChildNode();
      },
    },
    {
      label: 'Delete page',
      icon: 'pi pi-trash',
      command: () => {
        console.log('Delete ', this.selectedNode);
        this.deleteNode();
      },
    },
    {
      separator: true,
    },
    {
      label: 'Change template',
      icon: 'pi pi-sync',
      items: [
        {
          label: 'Split into subway pattern',
          icon: 'pi pi-sitemap',
          command: () => {
            console.log('Change template ', this.selectedNode);
            this.addParentNode('subway');
          },
        },
        {
          label: 'Combine into single page',
          icon: 'pi pi-file-check',
          command: () => {
            console.log('Change template ', this.selectedNode);
            this.addParentNode('combine');
          },
        },
      ],
    },
    {
      label: 'Change style',
      icon: 'pi pi-palette',
      items: [
        {
          label: 'New page',
          icon: 'pi pi-file-plus',
          command: () => {
            this.selectedNode.data.customStyleKey = 'new';
            this.selectedNode.data.borderStyle =
              'border-2 border-primary border-round border-dashed shadow-2';
            this.updateNodeStyles(this.iaChart, 0);
            this.selectedNode = null!;
          },
        },
        {
          label: 'ROT',
          icon: 'pi pi-trash',
          command: () => {
            this.selectedNode.data.customStyleKey = 'rot';
            this.selectedNode.data.borderStyle =
              'border-2 border-primary border-round border-dashed shadow-2';
            this.updateNodeStyles(this.iaChart, 0);
            this.selectedNode = null!;
          },
        },
        {
          label: 'Page move',
          icon: 'pi pi-sitemap',
          command: () => {
            this.selectedNode.data.customStyleKey = 'move';
            this.selectedNode.data.borderStyle =
              'border-2 border-primary border-round border-dashed shadow-2';
            this.updateNodeStyles(this.iaChart, 0);
            this.selectedNode = null!;
          },
        },
        {
          separator: true,
        },
        {
          label: 'Reset custom style',
          icon: 'pi pi-replay',
          command: () => {
            this.selectedNode.data.customStyle = false;
            this.selectedNode.data.customStyleKey = null;
            this.selectedNode.data.borderStyle =
              'border-2 border-primary border-round shadow-2';
            this.updateNodeStyles(this.iaChart, 0);
            this.selectedNode = null!;
          },
        },
      ],
    },
    {
      separator: true,
    },
    {
      label: 'Export to CSV',
      icon: 'pi pi-file-export',
      disabled: true, // TODO: implement export
      command: () => {
        console.log('Export ', this.selectedNode);
        this.exportTable();
      },
    },
    {
      separator: true,
    },
    {
      label: 'Open page in new page assistant',
      icon: 'pi pi-sparkles',
      command: () => {
        console.log('Open link in page assistant ', this.selectedNode);
        this.openInPageAssistant();
      },
    },
    {
      label: 'Open page in new tab',
      icon: 'pi pi-external-link',
      command: () => {
        console.log('Open link in new tab ', this.selectedNode);
        this.openNodeUrl();
      },
    },
  ];
  selectedNode!: TreeNode;
  draggable = true;
  selectable = true;

  //For tracking previous states
  editingNode: TreeNode | null = null;
  undoArray: { node: TreeNode; parent: TreeNode; index: number }[] = [];

  //for loading in page assistant
  baseHref: string | null = null;

  onNodeContextMenu(event: TreeNodeContextMenuSelectEvent) {
    if (this.editingNode) {
      //auto-save before switching
      this.editingNode.data.editing = null;
    }
    this.selectedNode = event.node;
    const customStyle = this.selectedNode.data.customStyle;

    this.options.forEach((item) => {
      if (
        item.label === 'Open page in new page assistant' ||
        item.label === 'Open page in new tab'
      ) {
        item.disabled = !this.selectedNode?.data?.url?.trim(); //disable if no URL
      }
      if (item.label === 'Change template' || item.label === 'Change style') {
        item.disabled = customStyle; //disable if custom style
      }
    });
  }

  onInputKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.saveNode();
      console.log('Saved ', this.selectedNode);
      event.stopPropagation();
      event.preventDefault();
    }

    if (event.key === ' ') {
      event.stopPropagation(); //allows space to work in tree
    }
  }

  editNode(mode: 'label' | 'link' = 'label') {
    if (this.selectedNode) {
      this.selectedNode.data.editing = mode;
      this.editingNode = this.selectedNode;
      this.draggable = false;
      this.selectable = false;
      // auto-focus on input
      setTimeout(() => {
        const input =
          document.querySelector<HTMLInputElement>('input.ia-label');
        input?.focus();
      });
    }
  }

  saveNode() {
    if (this.selectedNode) {
      this.selectedNode.data.editing = null;
    }
    if (this.selectedNode.data.url === 'https://www.canada.ca/') {
      this.editNode('link');
      return;
    } // don't allow default URLs
    this.draggable = true;
    this.selectable = false;
  }

  addChildNode() {
    if (!this.selectedNode) return;

    // Ensure children array exists
    if (!this.selectedNode.children) {
      this.selectedNode.children = [];
    }

    // Create the new node
    const newNode: TreeNode = {
      label: 'New page',
      data: {
        h1: 'New page',
        url: 'https://www.canada.ca/', // default URL
        editing: false,
        customStyle: false,
        customStyleKey: 'new',
        borderStyle:
          'border-2 border-primary border-round border-dashed shadow-2',
      },
      children: [],
    };

    // Push into parent
    this.selectedNode.children.push(newNode);

    // Expand parent so the new child is visible
    this.selectedNode.expanded = true;

    // Select the new node so the user can start editing
    this.selectedNode = newNode;
    this.editNode('label');

    this.updateMenu(); // refresh context menu, undo, etc.
    this.updateNodeStyles(this.iaChart, 0); // refresh styles
  }

  //Will be used to create a container to mark pages for template change
  addParentNode(action: 'subway' | 'combine') {
    if (!this.selectedNode) return;

    // Find the parent node and the array the selected node is in
    const findParent = (
      nodes: TreeNode[],
      parentNode?: TreeNode,
    ): { parentContainer: TreeNode[]; parentNode: TreeNode | null } | null => {
      for (const node of nodes) {
        if (node === this.selectedNode) {
          return {
            parentContainer: nodes, // found at this level
            parentNode: parentNode ?? null,
          };
        }
        if (node.children) {
          const searchChildNodes = findParent(node.children, node);
          if (searchChildNodes) return searchChildNodes;
        }
      }
      return null;
    };

    const location = findParent(this.iaChart || []);
    if (!location) return; // if not found

    const { parentContainer, parentNode } = location;

    const label =
      action === 'subway'
        ? 'Split into subway pattern'
        : 'Combine into single page';

    //Create new parent node
    const newParentNode: TreeNode = {
      label: label,
      data: {
        h1: label,
        url: '',
        originalParent: parentNode?.data?.url ?? '',
        editing: false,
        customStyle: true, // prevents style changes
        customStyleKey: 'template',
        isContainer: true, // used to keep child nodes at proper level and prevent drag/drop of these wrappers into each other
        borderStyle:
          'border-2 border-primary border-round border-dashed shadow-2',
      },
      expanded: true,
      children: [this.selectedNode],
    };

    // Replace the original node with the new parent node (which contains the original node as a child)
    const index = parentContainer.indexOf(this.selectedNode);
    if (index !== -1) {
      parentContainer.splice(index, 1, newParentNode);
    }

    // Make the new parent the selection
    this.selectedNode = newParentNode;

    // UI refresh
    this.updateMenu();
    this.updateNodeStyles(this.iaChart, 0);
  }

  deleteNode() {
    if (!this.iaChart || !this.selectedNode) return;

    const nodeToDelete = this.selectedNode;

    // Root-level (don't delete the root!!!)
    const rootIndex = this.iaChart.findIndex((n) => n === nodeToDelete);
    if (rootIndex > -1) {
      console.warn('Cannot delete root node.');
      return;
    }

    // Child node
    const findAndDelete = (nodes: TreeNode[]): boolean => {
      for (const node of nodes) {
        const children: TreeNode[] = node.children ?? [];
        const childIndex = children.findIndex((c) => c === nodeToDelete);
        if (childIndex > -1) {
          this.undoArray.push({
            node: nodeToDelete,
            parent: node,
            index: childIndex,
          });
          children.splice(childIndex, 1);
          node.children = children.length ? children : undefined;
          return true;
        }
        // recurse into grandchildren
        if (children.length && findAndDelete(children)) {
          return true;
        }
      }
      return false;
    };

    findAndDelete(this.iaChart);
    this.updateMenu();
  }

  restoreNode() {
    if (this.undoArray.length === 0) return;

    const last = this.undoArray.pop()!;

    if (last.parent?.children) {
      last.parent.children.splice(last.index, 0, last.node);
    } else {
      console.warn('Cannot restore node: parent missing.');
      return;
    }

    this.selectedNode = last.node;
    if (!this.selectedNode.data.customStyle) {
      this.selectedNode.data.customStyleKey = 'rot';
      this.selectedNode.data.borderStyle =
        'border-2 border-primary border-round border-dashed shadow-2';
      this.updateNodeStyles(this.iaChart, 0);
    }
    this.updateMenu();
  }

  //Add undo option under delete if there is something to restore
  updateMenu() {
    this.options = [...this.baseMenu];

    const deleteIndex = this.options.findIndex(
      (option) => option.label === 'Delete page',
    );

    if (this.undoArray.length > 0 && deleteIndex !== -1) {
      this.options.splice(deleteIndex + 1, 0, {
        label: 'Restore page',
        icon: 'pi pi-history',
        command: () => this.restoreNode(),
      });
    }
  }

  //Placeholder for export function
  exportTable() {}

  //Open link in new tab
  openNodeUrl() {
    window.open(this.selectedNode.data.url, '_blank');
  }

  //Make share link a service so it can be used on both share.component.ts and here
  openInPageAssistant() {
    const baseUrl = (window.location.origin + this.baseHref).replace(
      /\/+$/,
      '',
    );
    const urlParam = encodeURIComponent(this.selectedNode.data.url);
    const shareLink = `${baseUrl}/page-assistant/share?url=${urlParam}`;
    console.log('Open in page assistant: ', shareLink);
    window.open(shareLink, '_blank');
  }

  handleNodeDrop(event: TreeNodeDropEvent): void {
    const dragNode = event.dragNode;
    const dropNode = event.dropNode;

    if (!dragNode || !dropNode) return;

    if (
      (dropNode.data.isContainer || dropNode.parent?.data?.isContainer) &&
      dragNode.data.isContainer
    )
      return; // not foolproof but tries to prevent dropping a container into another container
    event.accept?.(); // accept the drop

    //Reset move style so move style can be removed if user puts it back
    if (dragNode.data.customStyleKey === 'move') {
      dragNode.data.customStyleKey = '';
      dragNode.data.borderStyle =
        'border-2 border-primary border-round shadow-2';
    }

    //Get target element
    const targetEl = event.originalEvent?.target as HTMLElement;
    const tag = targetEl.tagName.toLowerCase(); // will be <a> or <div> if dropped on a node or <li> if dropped between nodes
    const droppedOnNode: boolean = tag !== 'li';

    //Check if no change to IA structure
    const dragParentUrl = dragNode.data.originalParent; //parentUrl is the original parent before any changes
    const dropUrl = dropNode.data.url;
    const dropParentUrl = dropNode.parent?.data?.url ?? '';
    const dropGrandparentUrl = dropNode.parent?.data?.originalParent ?? '';

    //console.log('Tag should be a if dropped on node:\n', tag);
    if (droppedOnNode) {
      console.log('Dropped on node');
      console.log('Checking if parentUrl matches node Url:\n', dropUrl);
    } else {
      console.log('Dropped between nodes');
      console.log(
        'Checking if parentUrl matches sibling parent Url:\n',
        dropParentUrl,
      );
    }
    //console.log('Drag parentUrl:\n', dragParentUrl);

    const droppedOnParent = droppedOnNode && dragParentUrl === dropUrl;
    const reorderedSiblings = !droppedOnNode && dragParentUrl === dropParentUrl;

    //console.log('Sibling reorder: ', reorderedSiblings);
    //console.log('Dropped on parent: ', droppedOnParent);

    //Check if dropping sibling onto a container
    const droppedOnContainerSibling =
      dropNode.data.isContainer &&
      droppedOnNode &&
      dragParentUrl === dropParentUrl;
    const droppedBetweenContainerSibling =
      dropNode.parent?.data?.isContainer &&
      !droppedOnNode &&
      dragParentUrl === dropGrandparentUrl;
    //console.log('Dropped on container sibling: ', droppedOnContainerSibling);
    //console.log('Dropped between container sibling: ', droppedBetweenContainerSibling);

    //Check for custom style (containers & dummy nodes)
    const isCustom = dragNode.data.customStyle;
    //console.log('Container or dummy node: ', isCustom);

    //console.log('Event drop', event);

    //Set move style when not reordering siblings, moving siblings into a template container, dragging a custom style node, or moving a new page
    if (
      !(
        droppedOnParent ||
        reorderedSiblings ||
        droppedOnContainerSibling ||
        droppedBetweenContainerSibling ||
        isCustom ||
        dragNode.data.customStyleKey === 'new'
      )
    ) {
      dragNode.data.customStyleKey = 'move';
      dragNode.data.borderStyle =
        'border-2 border-primary border-round border-dashed shadow-2';
    }

    //Cleanup dragover style (happens when hovering on parent but dropping between parent and top child)
    const treeRoot = targetEl.closest('.p-tree');
    treeRoot?.querySelectorAll('.p-tree-node-dragover').forEach((el) => {
      el.classList.remove('p-tree-node-dragover');
    });

    console.log('Drag parent URL', dragNode.data.originalParent);
    this.updateNodeStyles(this.iaChart, 0);
  }

  private updateNodeStyles(nodes: TreeNode[] | null, level = 0): void {
    if (!nodes) return;

    for (const node of nodes) {
      const borderStyle =
        node.data?.borderStyle ||
        'border-2 border-primary border-round shadow-2';

      const bgClass = this.bgColors[level % this.bgColors.length];
      const bgStyle = this.contextStyles[node.data?.customStyleKey] ?? bgClass;

      node.styleClass = `${borderStyle} ${bgStyle}`;

      if (node.children && node.children.length > 0) {
        //console.log('Node status', node.data.isContainer, level);
        const nextLevel = node.data.isContainer ? level : level + 1;
        this.updateNodeStyles(node.children, nextLevel);
      }
    }
  }

  private updateTopicPageTreeStyles(nodes: TreeNode[] | null, level = 0): void {
    if (!nodes) return;

    const bgColors = this.theme.darkMode()
      ? this.topicTreeBgColorsDark
      : this.topicTreeBgColorsLight;

    for (const node of nodes) {
      const borderStyle =
        node.data?.borderStyle ||
        'border-2 border-round shadow-2 border-green-500';

      const isMostRequested =
        node.data?.isCategory && node.label === 'Most requested';
      const bgClass = isMostRequested
        ? this.topicTreeMostRequestedBgClass
        : node.data?.diffState === 'match'
          ? this.topicTreeMatchBgClass
          : node.data?.diffState === 'move'
            ? this.topicTreeMoveBgClass
            : node.data?.diffState === 'missingIaMatch'
              ? this.topicTreeMissingIaMatchBgClass
              : node.data?.diffState === 'missingIaMove'
                ? this.topicTreeMissingIaMoveBgClass
                : node.data?.diffState === 'missingIaMissing'
                  ? this.topicTreeMissingIaMissingBgClass
                  : node.data?.diffState === 'missingIa'
                    ? this.topicTreeMissingIaBgClass
                    : node.data?.diffState === 'missing'
                      ? this.topicTreeMissingBgClass
                      : bgColors[level % bgColors.length];
      node.styleClass = `${borderStyle} ${bgClass}`;

      if (node.children && node.children.length > 0) {
        this.updateTopicPageTreeStyles(node.children, level + 1);
      }
    }
  }

  topicTreeBgColorsLight: string[] = [
    'surface-0 hover:surface-100',
    'surface-50 hover:surface-200',
    'surface-100 hover:surface-300',
    'surface-200 hover:surface-400',
    'surface-300 hover:surface-500 text-black',
    'surface-400 hover:surface-600 text-white',
  ];

  topicTreeBgColorsDark: string[] = [
    'surface-900 hover:surface-800 text-white',
    'surface-800 hover:surface-700 text-white',
    'surface-700 hover:surface-600 text-white',
    'surface-600 hover:surface-500 text-white',
    'surface-500 hover:surface-400 text-black',
    'surface-400 hover:surface-300 text-black',
  ];

  get topicTreeMostRequestedBgClass(): string {
    return this.theme.darkMode()
      ? 'bg-blue-800 hover:bg-blue-700 text-white'
      : 'bg-blue-100 hover:bg-blue-200 text-black';
  }

  get topicTreeMatchBgClass(): string {
    return this.theme.darkMode()
      ? 'bg-green-800 hover:bg-green-700 text-white'
      : 'bg-green-100 hover:bg-green-200 text-black';
  }

  get topicTreeMoveBgClass(): string {
    return this.theme.darkMode()
      ? 'bg-yellow-700 hover:bg-yellow-600 text-black'
      : 'bg-yellow-100 hover:bg-yellow-200 text-black';
  }

  get topicTreeMissingBgClass(): string {
    return this.theme.darkMode()
      ? 'bg-red-700 hover:bg-red-600 text-white'
      : 'bg-red-100 hover:bg-red-200 text-black';
  }

  get topicTreeMissingIaBgClass(): string {
    return this.theme.darkMode()
      ? 'bg-purple-800 hover:bg-purple-700 text-white'
      : 'bg-purple-200 hover:bg-purple-300 text-black';
  }

  get topicTreeMissingIaMatchBgClass(): string {
    return this.theme.darkMode()
      ? 'bg-green-900 hover:bg-green-800 text-white'
      : 'bg-green-700 hover:bg-green-600 text-white';
  }

  get topicTreeMissingIaMoveBgClass(): string {
    return this.theme.darkMode()
      ? 'bg-yellow-800 hover:bg-yellow-700 text-black'
      : 'bg-yellow-600 hover:bg-yellow-500 text-black';
  }

  get topicTreeMissingIaMissingBgClass(): string {
    return this.theme.darkMode()
      ? 'bg-red-800 hover:bg-red-700 text-white'
      : 'bg-red-700 hover:bg-red-600 text-white';
  }

  onTopicPageNodeDrop(event: TreeNodeDropEvent): void {
    const dragNode = event.dragNode;
    const dropNode = event.dropNode;
    if (!dragNode || !dropNode) return;

    if (dragNode.data?.isCategory || dragNode.data?.isRoot) {
      return;
    }

    const dropOnCategory = dropNode.data?.isCategory === true;
    const dropWithinCategory = dropNode.parent?.data?.isCategory === true;
    if (!dropOnCategory && !dropWithinCategory) {
      return;
    }

    event.accept?.();
    if (dropOnCategory) {
      const targetCategory = dropNode;
      if (targetCategory?.children?.length) {
        const index = targetCategory.children.indexOf(dragNode);
        if (index > 0) {
          targetCategory.children.splice(index, 1);
          targetCategory.children.unshift(dragNode);
        }
      }
    }
    dropNode.expanded = true;
    if (dropNode.parent?.data?.isCategory) {
      dropNode.parent.expanded = true;
    }
    this.refreshTopicPageDiffStyles();
    this.updateTopicPageTreeStyles(this.topicPageTree, 0);
  }

  private reorderNotOnTopicsBadged(rootOverride?: TreeNode): void {
    const root = rootOverride ?? this.topicPageTree[0];
    if (!root) return;
    const categories = root.children ?? [];
    const notOnTopicsCategory =
      categories.find(
        (node) => node.data?.isCategory && node.label === 'Not on topic page',
      ) ?? categories[3];
    const children = notOnTopicsCategory?.children;
    if (!children?.length) return;

    const priority = (node: TreeNode): number => {
      if (node.data?.diffState === 'missing') return 0;
      if (node.data?.isMissingIa) return 1;
      return 2;
    };

    notOnTopicsCategory.children = [...children].sort((a, b) => {
      const aPriority = priority(a);
      const bPriority = priority(b);
      if (aPriority !== bPriority) {
        return aPriority - bPriority;
      }
      return 0;
    });
  }

  private nodeHasBadge(node: TreeNode): boolean {
    return typeof node.label === 'string' && node.label.includes('topic-ia-badge');
  }
}
