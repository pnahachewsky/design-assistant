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
import { Textarea } from 'primeng/textarea';
import { StepperModule } from 'primeng/stepper';
import {
  Tree,
  TreeNodeContextMenuSelectEvent,
  TreeNodeDropEvent,
} from 'primeng/tree';
import { ContextMenuModule, ContextMenu } from 'primeng/contextmenu';
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';

//Services
import { UploadStateService } from '../../../../services/upload-state.service';
import { IaStructureService } from '../../../../services/ia-structure.service';
import { OpenRouterService, ChatMessage } from '../../../../services/openrouter.service';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { ThemeService } from '../../../../../../services/theme.service';
import { CommsObjectivePrompt } from '../../../../data/ai-prompts.constants';

import { MenuItem, TreeNode, TreeDragDropService, MessageService } from 'primeng/api';
import { FullscreenHTMLElement } from '../../../../../../views/ia-assistant/data/data.model';

import { environment } from '../../../../../../../environments/environment';

type TopicSection = 'most' | 'doormats' | 'feature';
type TopicPageLinkInfo = {
  section: TopicSection;
  label: string;
};
interface TopicAiRecommendation {
  url?: string;
  label?: string;
  reason?: string;
  currentSection?: string;
}
interface TopicAiResult {
  targetSection?: string;
  recommendations: TopicAiRecommendation[];
}

@Component({
  selector: 'ca-topic-ia-json',
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
    Textarea,
    StepperModule,
    Tree,
    ContextMenuModule,
    InputGroup,
    InputGroupAddonModule,
  ],
  providers: [TreeDragDropService],
  templateUrl: './topic-ia-json.component.html',
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

    :host ::ng-deep .topic-ia-steps .topic-ia-step-list {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 0.5rem;
      margin: 0;
    }

    @media (max-width: 1500px) {
      :host ::ng-deep .topic-ia-steps .topic-ia-step-list {
        grid-template-columns: minmax(0, 1fr);
        gap: 0.1rem;
      }
    }

    @media (max-width: 1500px) {
      :host ::ng-deep .topic-ia-steps .p-step-header {
        padding: 0;
      }

      :host ::ng-deep .topic-ia-steps .p-stepper-separator {
        margin: 0;
      }
    }

    :host ::ng-deep .topic-ia-steps {
      margin-bottom: 0;
    }

    :host ::ng-deep .topic-ia-steps .p-step-title {
      font-weight: 600;
      font-size: 1.02rem;
    }

    :host ::ng-deep .topic-ia-steps .topic-ia-step-list .p-step {
      justify-content: flex-start;
      text-align: left;
      width: 100%;
    }

    :host ::ng-deep .topic-ia-panels {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 1rem;
      margin-top: 0.75rem;
    }

    @media (max-width: 1500px) {
      :host ::ng-deep .topic-ia-panels {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }

    @media (max-width: 1000px) {
      :host ::ng-deep .topic-ia-panels {
        grid-template-columns: minmax(0, 1fr);
      }
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

    ::ng-deep .topic-ia-comm-badge {
      border-color: #93c5fd;
      background: #dbeafe;
      color: #1e3a8a;
    }

    :host-context(.dark-mode) ::ng-deep .topic-ia-comm-badge {
      border-color: #1d4ed8;
      background: #1e40af;
      color: #e0e7ff;
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
export class TopicIaJsonComponent implements OnInit {
  private uploadState = inject(UploadStateService);
  private translate = inject(TranslateService);
  private locationStrategy = inject(LocationStrategy);
  private theme = inject(ThemeService);
  private iaStructure = inject(IaStructureService);
  private messageService = inject(MessageService);
  private openRouter = inject(OpenRouterService);

  production: boolean = environment.production;
  activeStep = 1;

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
  step1Complete = false;
  topicPageTree: TreeNode[] = [];
  visitsByUrl = new Map<string, number>();
  visitsLoaded = false;
  visitsEntryCount = 0;
  visitsSourcePath = 'visits-urls.json';
  isTopicPage = false;
  topicPageSections = new Map<string, TopicPageLinkInfo>();
  commObjectivesInput = '';
  feedbackInsightsInput = '';
  callTroubleInput = '';
  isAiLoading = false;
  private aiRecommendedUrls = new Set<string>();
  private aiTargetSection: TopicSection | 'notOnTopics' = 'most';
  private aiModels: string[] = this.openRouter.freeModels;

  //Button fxn
  async checkIA() {
    this.step1Complete = false;
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
    this.step1Complete = true;
    this.expandStep(2);
    await this.loadVisitsFromJson();
    this.expandStep(3);
    this.applyVisitsToIaTree();
    this.rebuildTopicPageTreeFromIa();
    this.expandStep(4);

    // Avoid shifting the view after crawl completion.
  }

  async sendContextInputToGenAI(): Promise<void> {
    if (this.isAiLoading) return;
    const input = (this.commObjectivesInput || '').trim();
    if (!input) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Missing input',
        detail: 'Add communications objectives to send to GenAI.',
        life: 3000,
      });
      return;
    }

    const targetSectionHint = this.parseTargetSection(input);
    const candidates = this.buildSectionCandidates();
    if (!candidates.length) {
      this.messageService.add({
        severity: 'warn',
        summary: 'No candidates available',
        detail: 'Run the IA crawl to populate Most requested suggestions.',
        life: 4000,
      });
      return;
    }

    this.isAiLoading = true;
    try {
      const recommendations = await this.requestCommsRecommendations(
        input,
        candidates,
        targetSectionHint,
      );
      this.applyCommsRecommendations(recommendations, targetSectionHint);
    } catch (err) {
      console.error('GenAI recommendation failed:', err);
      this.messageService.add({
        severity: 'error',
        summary: 'GenAI request failed',
        detail: 'Unable to get recommendations. Please try again.',
        life: 4000,
      });
    } finally {
      this.isAiLoading = false;
    }
  }

  private buildSectionCandidates(): {
    label: string;
    url: string;
    visits: number | null;
    section: string;
  }[] {
    const root = this.topicPageTree[0];
    const categories = root?.children ?? [];
    const sectionMap: { section: string; node?: TreeNode }[] = [
      { section: 'most', node: categories[0] },
      { section: 'doormats', node: categories[1] },
      { section: 'feature', node: categories[2] },
      { section: 'notOnTopics', node: categories[3] },
    ];

    return sectionMap.flatMap((entry) => {
      const nodes = entry.node?.children ?? [];
      return nodes
        .filter((node) => !node.data?.isCategory)
        .map((node) => ({
          label: this.getCandidateLabel(node),
          url: node.data?.url ?? '',
          visits: this.getVisitsForNode(node),
          section: entry.section,
        }))
        .filter((candidate) => candidate.label || candidate.url);
    });
  }

  private getCandidateLabel(node: TreeNode): string {
    if (
      typeof node.data?.originalLabel === 'string' &&
      node.data.originalLabel.trim().length
    ) {
      return node.data.originalLabel.trim();
    }
    return this.stripBadges(this.getTopicNodeBaseLabel(node));
  }

  private async requestCommsRecommendations(
    input: string,
    candidates: { label: string; url: string; visits: number | null; section: string }[],
    targetSectionHint: TopicSection | 'notOnTopics',
  ): Promise<TopicAiResult> {
    if (!this.openRouter.hasApiKey) {
      this.messageService.add({
        severity: 'warn',
        summary: 'API key required',
        detail: 'Add your API key before sending input to GenAI.',
        life: 4000,
      });
      return { recommendations: [] };
    }

    const system = CommsObjectivePrompt;

    const payload = {
      objective: input,
      targetSectionHint,
      candidates: candidates.map((c) => ({
        label: c.label,
        url: c.url,
        visits: c.visits,
        section: c.section,
      })),
    };

    const messages: ChatMessage[] = [
      { role: 'system', content: system },
      { role: 'user', content: JSON.stringify(payload) },
    ];

    for (const model of this.aiModels) {
      const resp = await this.openRouter.call(model, messages, {
        temperature: 0.0,
        title: 'Content Assistant - Topic IA',
      });
      const text = resp?.choices?.[0]?.message?.content;
      if (!text) continue;
      const parsed = this.parseRecommendations(text);
      if (parsed) return parsed;
    }

    return { recommendations: [] };
  }

  private applyCommsRecommendations(
    aiResult: TopicAiResult,
    targetSectionHint: TopicSection | 'notOnTopics',
  ): void {
    const recommendations = aiResult.recommendations ?? [];
    const nodes = this.getAllCandidateNodes();
    const targetSection = this.pickTargetSection(
      aiResult.targetSection,
      targetSectionHint,
    );
    this.aiTargetSection = targetSection;
    const bestMatch = this.findBestRecommendationNode(
      recommendations,
      targetSection,
    );

    this.aiRecommendedUrls = new Set(
      bestMatch?.data?.url ? [this.normalizeUrl(bestMatch.data.url)] : [],
    );

    nodes.forEach((node) => {
      const isMatch = bestMatch === node;
      node.data = { ...(node.data ?? {}), aiRecommended: isMatch };
    });

    if (bestMatch) {
      this.moveNodeToSection(bestMatch, targetSection);
    }
    this.applyCommsRecommendationsToLabels();
    this.updateTopicPageTreeStyles(this.topicPageTree, 0);

    this.messageService.add({
      severity: bestMatch ? 'success' : 'info',
      summary: bestMatch
        ? 'GenAI recommendations applied.'
        : 'No GenAI matches found.',
      life: 3000,
    });
  }

  private applyCommsRecommendationsToLabels(): void {
    const nodes = this.getAllCandidateNodes();
    nodes.forEach((node) => {
      if (typeof node.label !== 'string') return;
      const cleaned = this.removeCommsBadge(node.label);
      if (node.data?.aiRecommended) {
        node.label = `${cleaned} <span class="topic-ia-badge topic-ia-comm-badge">Comms highlight</span>`;
      } else {
        node.label = cleaned;
      }
    });
  }

  private getMostRequestedCategory(): TreeNode | null {
    const root = this.topicPageTree[0];
    const categories = root?.children ?? [];
    return (
      categories.find(
        (node) => node.data?.isCategory && node.label === 'Most requested',
      ) ?? categories[0] ?? null
    );
  }

  private getCategoryBySection(
    section: TopicSection | 'notOnTopics',
  ): TreeNode | null {
    const root = this.topicPageTree[0];
    const categories = root?.children ?? [];
    switch (section) {
      case 'most':
        return categories[0] ?? null;
      case 'doormats':
        return categories[1] ?? null;
      case 'feature':
        return categories[2] ?? null;
      case 'notOnTopics':
        return categories[3] ?? null;
      default:
        return categories[0] ?? null;
    }
  }

  private getAllCandidateNodes(): TreeNode[] {
    const root = this.topicPageTree[0];
    const categories = root?.children ?? [];
    return categories.flatMap((category) => category?.children ?? []);
  }

  private moveNodeToSection(
    node: TreeNode,
    targetSection: TopicSection | 'notOnTopics',
  ): void {
    const targetCategory = this.getCategoryBySection(targetSection);
    if (!targetCategory) return;
    targetCategory.children = targetCategory.children || [];

    const root = this.topicPageTree[0];
    const categories = root?.children ?? [];

    const currentCategory = categories.find((cat) =>
      (cat?.children ?? []).includes(node),
    );
    if (!currentCategory || currentCategory === targetCategory) return;
    currentCategory.children = (currentCategory.children ?? []).filter(
      (child) => child !== node,
    );
    targetCategory.children.unshift(node);
  }

  private parseTargetSection(
    input: string,
  ): TopicSection | 'notOnTopics' {
    const normalized = (input || '').toLowerCase();
    if (normalized.includes('doormat')) return 'doormats';
    if (normalized.includes('feature')) return 'feature';
    if (normalized.includes('not on topic')) return 'notOnTopics';
    if (normalized.includes('not on the topic')) return 'notOnTopics';
    if (normalized.includes('not on topic page')) return 'notOnTopics';
    if (normalized.includes('most requested')) return 'most';
    return 'most';
  }

  private pickTargetSection(
    modelTarget: string | undefined,
    hint: TopicSection | 'notOnTopics',
  ): TopicSection | 'notOnTopics' {
    const normalizedModel = this.parseTargetSection(modelTarget || '');
    const model =
      normalizedModel === 'most' ||
      normalizedModel === 'doormats' ||
      normalizedModel === 'feature' ||
      normalizedModel === 'notOnTopics'
        ? normalizedModel
        : null;
    return model ?? hint ?? 'most';
  }

  private findBestRecommendationNode(
    recommendations: TopicAiRecommendation[],
    targetSection: TopicSection | 'notOnTopics',
  ): TreeNode | null {
    const nodes = this.getAllCandidateNodes();
    for (const rec of recommendations) {
      const recUrl = this.normalizeUrl(rec.url ?? '');
      const recLabel = this.normalizeLabel(rec.label ?? '');
      const node = nodes.find((candidate) => {
        const url = this.normalizeUrl(candidate.data?.url ?? '');
        const label = this.normalizeLabel(this.getCandidateLabel(candidate));
        const matches =
          (recUrl && url === recUrl) ||
          (recLabel && label === recLabel);
        if (!matches) return false;
        const section = this.getSectionForNode(candidate);
        return section !== targetSection;
      });
      if (node) return node;
    }
    return null;
  }

  private getSectionForNode(
    node: TreeNode,
  ): TopicSection | 'notOnTopics' | null {
    const root = this.topicPageTree[0];
    const categories = root?.children ?? [];
    const sectionMap: { section: TopicSection | 'notOnTopics'; node?: TreeNode }[] = [
      { section: 'most', node: categories[0] },
      { section: 'doormats', node: categories[1] },
      { section: 'feature', node: categories[2] },
      { section: 'notOnTopics', node: categories[3] },
    ];
    const match = sectionMap.find((entry) =>
      (entry.node?.children ?? []).includes(node),
    );
    return match?.section ?? null;
  }

  private normalizeLabel(label: string): string {
    return (label || '').replace(/\s+/g, ' ').trim().toLowerCase();
  }

  private stripBadges(label: string): string {
    return label.replace(/<span[^>]*>.*?<\/span>/g, '').trim();
  }

  private removeCommsBadge(label: string): string {
    return label
      .replace(
        /\s*<span class="topic-ia-badge topic-ia-comm-badge">.*?<\/span>/g,
        '',
      )
      .trim();
  }

  private parseRecommendations(text: string): TopicAiResult | null {
    const cleaned = this.stripCodeFences(text);
    const parsed = this.looseJsonParse(cleaned);
    if (!parsed || typeof parsed !== 'object') return null;
    const targetSection =
      typeof (parsed as { targetSection?: unknown }).targetSection === 'string'
        ? ((parsed as { targetSection?: unknown }).targetSection as string)
        : undefined;
    const recs = (parsed as { recommended?: unknown }).recommended;
    if (!Array.isArray(recs)) {
      return { targetSection, recommendations: [] };
    }
    const recommendations = recs
      .map((rec) => {
        if (!rec || typeof rec !== 'object') return null;
        const obj = rec as Record<string, unknown>;
        return {
          url: typeof obj['url'] === 'string' ? obj['url'] : undefined,
          label: typeof obj['label'] === 'string' ? obj['label'] : undefined,
          reason: typeof obj['reason'] === 'string' ? obj['reason'] : undefined,
          currentSection:
            typeof obj['currentSection'] === 'string'
              ? obj['currentSection']
              : undefined,
        } as TopicAiRecommendation;
      })
      .filter((rec): rec is TopicAiRecommendation => !!rec);
    return { targetSection, recommendations };
  }

  private stripCodeFences(s: string): string {
    return s
      .replace(/^```(?:json)?\s*/i, '')
      .replace(/\s*```$/i, '')
      .trim();
  }

  private tryParseJSON<T = unknown>(s: string): T | null {
    try {
      return JSON.parse(s) as T;
    } catch {
      return null;
    }
  }

  private looseJsonParse(s: string): unknown | null {
    const direct = this.tryParseJSON(s);
    if (direct !== null) return direct;
    const match = s.match(/\{[\s\S]*\}/);
    return match ? this.tryParseJSON(match[0]!) : null;
  }

  private async loadVisitsFromJson(): Promise<boolean> {
    this.visitsLoaded = false;
    this.visitsEntryCount = 0;
    this.visitsByUrl = new Map();

    const baseHref = this.baseHref ?? '/';
    const resourceUrl = new URL(
      this.visitsSourcePath,
      `${window.location.origin}${baseHref}`,
    ).toString();

    try {
      const response = await fetch(resourceUrl);
      if (!response.ok) {
        this.messageService.add({
          severity: 'error',
          summary: 'Unable to load visits JSON.',
          detail: `Request failed (${response.status}).`,
          life: 4000,
        });
        return false;
      }

      const data: unknown = await response.json();
      if (!Array.isArray(data)) {
        this.messageService.add({
          severity: 'error',
          summary: 'Visits JSON format is invalid.',
          detail: 'Expected a JSON array of { url, title, visits } entries.',
          life: 4000,
        });
        return false;
      }

      const map = new Map<string, number>();
      for (const entry of data) {
        if (!entry || typeof entry !== 'object') continue;
        const typed = entry as {
          url?: string;
          visits?: number | string;
        };
        const url = typed.url?.trim();
        if (!url) continue;
        const visitsRaw = typed.visits;
        const visits =
          typeof visitsRaw === 'number'
            ? Math.round(visitsRaw)
            : typeof visitsRaw === 'string'
              ? this.parseVisits(visitsRaw)
              : null;
        if (visits === null) continue;
        const normalized = this.normalizeUrl(url);
        map.set(normalized, visits);
        map.set(this.normalizeUrl(this.decodeUrl(url)), visits);
      }

      this.visitsByUrl = map;
      this.visitsEntryCount = map.size;
      this.visitsLoaded = true;

      this.messageService.add({
        severity: 'success',
        summary: 'Visits loaded from JSON.',
        detail: `${this.visitsEntryCount} URLs matched.`,
        life: 3000,
      });

      return true;
    } catch (err) {
      console.error('Failed to load visits JSON:', err);
      this.messageService.add({
        severity: 'error',
        summary: 'Unable to load visits JSON.',
        life: 4000,
      });
      return false;
    }
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

  private expandStep(stepIndex: number): void {
    this.activeStep = stepIndex;
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
    this.applyCommsRecommendationsToLabels();
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
    this.applyCommsRecommendationsToLabels();
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
