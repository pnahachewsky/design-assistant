import {
  Component,
  ViewChild,
  OnInit,
  AfterViewInit,
  OnDestroy,
  inject, //decorators & lifecycle
  ElementRef, //DOM utilities
  signal,
  effect,
  computed, //Signals/reactivity
} from '@angular/core';
import { CommonModule, LocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, Params } from '@angular/router';

//Translation
import { TranslateModule, TranslateService } from '@ngx-translate/core';

//PrimeNG
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TabsModule } from 'primeng/tabs';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MessageModule } from 'primeng/message';
import { MessageService, ConfirmationService, MenuItem } from 'primeng/api';
import { Toast } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { SplitButtonModule } from 'primeng/splitbutton';

//Services
import { UploadStateService } from './services/upload-state.service';
import { UrlDataService } from './services/url-data.service';
import { SourceDiffService } from './services/source-diff.service';
import { ShadowDomService } from './services/shadowdom.service';
import { AlertAiService } from './services/alert-ai.service';
import {
  AlertRewriteService,
  AlertRewriteExample,
  AlertRewriteIssueInput,
  AlertRewritePlan,
  AlertRewriteResult,
} from './services/alert-rewrite.service';
import { OpenRouterService } from './services/openrouter.service';

//Data
import {
  UploadData,
  ViewOption,
  WebViewType,
  SourceViewType,
  PromptKey,
  AiModel,
  AlertRewriteMode,
} from './data/data.model';
import { getPromptTemplate } from './data/ai-prompts.constants';
import { getAlertRewriteRules } from '../../common/constants/alert-rewrite-rules.constants';

//Components
import { AiOptionsComponent } from './components/ai-options.component';
import { HorizontalRadioButtonsComponent } from '../../components/horizontal-radio-buttons/horizontal-radio-buttons.component';
import { PageProblemsComponent } from './components/problems.component';
import { PageDataComponent } from './components/data.component';
import { PageToolsComponent } from './components/tools.component';

@Component({
  selector: 'ca-page-assistant-compare',
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    ButtonModule,
    MessageModule,
    Toast,
    CardModule,
    TabsModule,
    RadioButtonModule,
    ToolbarModule,
    ToggleButtonModule,
    TooltipModule,
    ConfirmDialogModule,
    PageToolsComponent,
    SplitButtonModule,
    AiOptionsComponent,
    HorizontalRadioButtonsComponent,
    PageProblemsComponent,
    PageDataComponent,
  ],
  templateUrl: './page-assistant.component.html',
  styleUrl: './page-assistant.component.css',
})
export class PageAssistantCompareComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  problemsFeatureCount = 0;

  onProblemsSummary(flags: Record<string, boolean>) {
    this.problemsFeatureCount = Object.values(flags).filter(Boolean).length;
  }
  private translate = inject(TranslateService);
  private messageService = inject(MessageService);
  private confirmationService = inject(ConfirmationService);
  private uploadState = inject(UploadStateService);
  private sourceDiffService = inject(SourceDiffService);
  private shadowDomService = inject(ShadowDomService);
  private alertAi = inject(AlertAiService);
  private alertRewrite = inject(AlertRewriteService);
  private openRouter = inject(OpenRouterService);
  private urlDataService = inject(UrlDataService);
  private router = inject(Router);
  private locationStrategy = inject(LocationStrategy);

  constructor() {
    effect(async () => {
      const data = this.uploadState.getUploadData();
      const viewType = this.webSelectedView();
      const shadowRoot = this.shadowDOM();
      //console.log("[Web tab] received new data");
      if (data?.originalHtml && data?.modifiedHtml && shadowRoot) {
        //console.log("[Web tab] generating diff");
        await this.shadowDomService.generateShadowDOMContent(
          shadowRoot,
          viewType,
          data.originalHtml,
          data.modifiedHtml,
        );
        //Click listener for ShadowDom
        if (this.shadowClickHandler) {
          this.shadowClickHandler();
          console.log('Reset shadow click handler');
        }
        this.shadowClickHandler = this.shadowDomService.handleDocumentClick(
          shadowRoot,
          (index: number) => {
            this.currentIndex = index;
          },
        );
        //Selection listener for ShadowDom
        if (this.shadowSelectionHandler) {
          this.shadowSelectionHandler();
          console.log('Reset shadow selection handler');
        }
        this.shadowSelectionHandler =
          this.shadowDomService.handleSelection(shadowRoot);

        //Get DOM element with a data-id
        this.elements = this.shadowDomService.getDataIdElements(shadowRoot);
        if (this.elements.length > 0) {
          this.focusOnIndex(this.currentIndex); //set initial focus to 1st element
          this.isDisabled = true;
          this.aiDisabled = 'Accept or reject changes first';
        } else {
          this.isDisabled = false;
          this.aiDisabled = '';
        }
      }
      this.toggleEdit = false;
      //Disable undo button
      const undoText = this.translate.instant('page.compare.button.undo');
      [this.acceptItems, this.rejectItems].forEach((arr) => {
        const undoItem = arr.find((item) => item.label === undoText);
        if (undoItem) {
          undoItem.disabled = this.uploadState.isUndoDisabled();
        }
      });
      //Checks if content is shareable
      const canShareOriginal = this.urlDataService.isValidUrl(
        data?.originalUrl,
      );
      const canShareModified = this.urlDataService.isValidUrl(
        data?.modifiedUrl,
      );
      this.canShare = canShareOriginal || canShareModified;
    });
    effect(() => {
      const data = this.uploadState.getUploadData();
      const viewType = this.sourceSelectedView();
      const container = this.sourceContainerSignal();
      //console.log("[Source tab] received new data");
      if (data?.originalHtml && data?.modifiedHtml && container) {
        //console.log("[Source tab] generating diff");
        this.sourceDiffService.generateSourceContent(
          container.nativeElement,
          viewType,
          data.originalHtml,
          data.modifiedHtml,
          data.originalUrl ?? 'Original',
          data.modifiedUrl ?? 'Modified',
        );
      }
    });
    this.baseHref = this.locationStrategy.getBaseHref();
  }

  //Disable AI if there are changes to accept/reject
  isDisabled = false;
  aiDisabled = '';

  acceptItems: MenuItem[] = [];
  rejectItems: MenuItem[] = [];

  get uploadType(): 'url' | 'paste' | 'word' {
    return this.uploadState.getSelectedUploadType(); // returns signal().value
  }

  get uploadData(): Partial<UploadData> | null {
    return this.uploadState.getUploadData(); // returns signal().value
  }

  readonly baseLegendItems = signal<
    { text: string; colour: string; style: string; lineStyle?: string }[]
  >([
    { text: 'Previous version', colour: '#F3A59D', style: 'highlight' },
    { text: 'Updated version', colour: '#83d5a8', style: 'highlight' },
    { text: 'Updated link', colour: '#FFEE8C', style: 'highlight' },
    { text: 'Hidden content', colour: '#6F9FFF', style: 'line' },
    {
      text: 'Modal content',
      colour: '#666666',
      style: 'line',
      lineStyle: 'dashed',
    },
    {
      text: 'Dynamic content',
      colour: '#fbc02f',
      style: 'line',
      lineStyle: 'dashed',
    },
  ]);

  legendItems = computed(() => {
    const view = this.webSelectedView();
    const items = this.baseLegendItems();
    const data = this.uploadState.getUploadData();
    const flags = data?.found;
    //console.log(`Legend items:`, flags);

    return items
      .map((item) => {
        if (item.text === 'Previous version') {
          if (view === WebViewType.Modified) {
            return null; // hide in Modified view
          }
          if (view === WebViewType.Original) {
            return { ...item, style: 'line' }; // change style in Original view
          }
          return item;
        }

        if (item.text === 'Updated version') {
          if (view === WebViewType.Original) {
            return null; // hide in Original view
          }
          if (view === WebViewType.Modified) {
            return { ...item, style: 'line' }; // change style in Modified view
          }
          return item;
        }

        if (
          item.text === 'Updated link' &&
          (view === WebViewType.Original || view === WebViewType.Modified)
        )
          return null; //hide in both original and modified view
        if (
          item.text === 'Hidden content' &&
          !flags?.original.hidden &&
          !flags?.modified.hidden
        )
          return null; //hide if hidden content not found in either original or modified
        if (
          item.text === 'Modal content' &&
          !flags?.original.modal &&
          !flags?.modified.modal
        )
          return null; //hide if modal content not found in either original or modified
        if (
          item.text === 'Dynamic content' &&
          !flags?.original.dynamic &&
          !flags?.modified.dynamic
        )
          return null; //hide if dynamic content not found in either original or modified

        return item;
      })
      .filter(Boolean) as typeof items;
  });

  //Web view options
  WebViewType = WebViewType;
  webSelectedView = signal<WebViewType>(WebViewType.Diff);

  webViewOptions: ViewOption<WebViewType>[] = [
    {
      label: 'page.compare.view.original',
      value: WebViewType.Original,
      icon: 'pi pi-file',
    },
    {
      label: 'page.compare.view.modified',
      value: WebViewType.Modified,
      icon: 'pi pi-file-edit',
    },
    {
      label: 'page.compare.view.diff',
      value: WebViewType.Diff,
      icon: 'pi pi-sort-alt',
    },
  ];

  // Source view options
  sourceSelectedView = signal<SourceViewType>(SourceViewType.SideBySide);

  sourceViewOptions: ViewOption<SourceViewType>[] = [
    {
      label: 'page.compare.view.original',
      value: SourceViewType.Original,
      icon: 'pi pi-file',
    },
    {
      label: 'page.compare.view.modified',
      value: SourceViewType.Modified,
      icon: 'pi pi-file-edit',
    },
    {
      label: 'page.compare.view.sidebyside',
      value: SourceViewType.SideBySide,
      icon: 'pi pi-pause',
    },
    {
      label: 'page.compare.view.linebyline',
      value: SourceViewType.LineByLine,
      icon: 'pi pi-equals',
    },
  ];

  //Change web view
  async onWebViewChange(viewType: WebViewType) {
    this.webSelectedView.set(viewType);
  }

  //Change source view
  onSourceViewChange(viewType: SourceViewType) {
    this.sourceSelectedView.set(viewType);
  }

  //Get DOM elements from template
  @ViewChild('liveContainer', { static: false }) liveContainer!: ElementRef;
  @ViewChild('sourceContainer', { static: false }) sourceContainer!: ElementRef;

  shadowDOM = signal<ShadowRoot | null>(null);
  sourceContainerSignal = signal<ElementRef | null>(null);

  //Runs when view is initialized
  ngAfterViewInit(): void {
    const shadowRoot = this.shadowDomService.initializeShadowDOM(
      this.liveContainer.nativeElement,
    );
    if (shadowRoot) {
      this.shadowDOM.set(shadowRoot);
      console.log('Shadow DOM is initialized.');
    }
    if (this.sourceContainer) {
      this.sourceContainerSignal.set(this.sourceContainer);
      console.log('Source container is initialized.');
    }
  }

  ngOnInit(): void {
    this.observeDarkMode();
    this.uploadState.setSelectedAiModel(this.selectedAiModel);
    this.customEditText = this.uploadState.getEditPromptText();
    this.selectedAlertRewriteMode = this.uploadState.getAlertRewriteMode();

    //Translations
    const undoText = this.translate.instant('page.compare.button.undo');
    //Button array
    this.acceptItems = [
      {
        label: 'Accept all',
        icon: 'pi pi-check-circle',
        command: () => {
          this.toolbarAcceptAll();
        },
      },
      {
        separator: true,
      },
      {
        label: undoText,
        icon: 'pi pi-refresh',
        command: () => {
          this.uploadState.undoLastChange();
        },
        disabled: true,
      },
    ];
    this.rejectItems = [
      {
        label: 'Reject all',
        icon: 'pi pi-times-circle',
        command: () => {
          this.toolbarRejectAll();
        },
      },
      {
        separator: true,
      },
      {
        label: undoText,
        icon: 'pi pi-refresh',
        command: () => {
          this.uploadState.undoLastChange();
        },
        disabled: true,
      },
    ];
  }
  ngOnDestroy(): void {
    if (this.shadowDOM) {
      this.shadowDomService.clearShadowDOM(this.shadowDOM()!);
      this.shadowDOM.set(null);
    }
    this.sourceContainerSignal.set(null);
    this.darkModeObserver?.disconnect();
    if (this.shadowClickHandler) {
      this.shadowClickHandler();
    }
    if (this.shadowSelectionHandler) {
      this.shadowSelectionHandler();
    }
  }

  clearAll(event: Event) {
    console.log('Clicked reset');
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: `<p class="mt-0">This will clear all uploaded content and any changes you made.</p>\n\n<p>You will lose your work and return to the upload screen.</p><p class="mb-0">Are you sure you want to reset?</p>`,
      header: 'Confirm reset',
      icon: 'pi pi-exclamation-circle',
      rejectLabel: 'Cancel',
      rejectButtonProps: {
        label: 'Cancel',
        icon: 'pi pi-undo',
        severity: 'secondary',
        outlined: true,
      },
      acceptButtonProps: {
        label: 'Reset',
        icon: 'pi pi-trash',
        severity: 'danger',
      },
      accept: () => {
        this.uploadState.resetUploadFlow();
        this.shadowDomService.lastSelection = {
          count: 1,
          startId: null,
          endId: null,
        }; //reset selection
        this.router.navigate(['page-assistant']);
        console.log('Reset page comparison');
      },
      reject: () => {
        console.log('Cancel reset page comparison');
      },
    });
  }

  canShare = false;
  baseHref: string | null = null;
  shareLink() {
    console.log('Clicked share');
    const data = this.uploadState.getUploadData();
    if (!data) return;
    const params: Params = {};
    if (this.urlDataService.isValidUrl(data.originalUrl)) {
      params['url'] = data.originalUrl;
    } else if (this.urlDataService.isValidUrl(data.modifiedUrl)) {
      params['url'] = data.modifiedUrl;
    }
    if (
      this.urlDataService.isValidUrl(data.originalUrl) &&
      this.urlDataService.isValidUrl(data.modifiedUrl) &&
      data.originalUrl !== data.modifiedUrl
    ) {
      params['compareUrl'] = data.modifiedUrl;
    }
    const treeLink = this.router.createUrlTree(['page-assistant/share'], {
      queryParams: params,
    });
    const shareLink = `${window.location.origin}${this.baseHref}${this.router.serializeUrl(treeLink).replace(/^\//, '')}`;

    navigator.clipboard
      .writeText(shareLink)
      .then(() => {
        this.messageService.add({
          severity: 'success',
          summary: 'Copied share link to clipboard',
          detail: `${shareLink}`,
          life: 1000,
        });
      })
      .catch((err) => console.error('Clipboard copy failed:', err));
  }

  private darkModeObserver?: MutationObserver;
  private observeDarkMode(): void {
    this.darkModeObserver = new MutationObserver(() => {
      this.sourceDiffService.loadPrismTheme();
    });

    //Checks for any changes to classes on <html> ie. dark-mode
    this.darkModeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
  }

  //AI Prompt
  selectedPromptKey: PromptKey = PromptKey.PlainLanguage;
  onPromptChange(key: PromptKey) {
    this.selectedPromptKey = key;
  }

  selectedAlertRewriteMode: AlertRewriteMode = AlertRewriteMode.GoodResultsOnly;
  onAlertRewriteModeChange(): void {
    this.selectedAlertRewriteMode = this.uploadState.getAlertRewriteMode();
  }

  customPromptText = '';
  onAppendCustom(prompt: string) {
    this.customPromptText = prompt;
  }

  customEditText = '';
  onPrependLevel(prompt: string) {
    this.customEditText = prompt;
    this.uploadState.setEditPromptText(prompt);
  }

  private async getPromptForKey(key: PromptKey): Promise<string> {
    const base = await getPromptTemplate(key, {
      useJsonAlertsIssuesPrompt: this.uploadState.getUseJsonAlertsIssuesPrompt(),
    });
    const custom = this.customPromptText.trim();
    const includeEditPrompt =
      key !== PromptKey.AlertsIssues &&
      key !== PromptKey.AlertsRecommendations;
    const editPrefix = includeEditPrompt ? this.customEditText : '';
    const promptBody = editPrefix ? `${editPrefix}\n\n${base}` : base;

    return custom
      ? `${promptBody}\n\n${custom}`
      : promptBody; //Note: a heading can be added to the custom instructions here, something like ${base}\n\nPrioritize the following:\n${custom}
  }

  private truncateContextText(value: string | null | undefined, maxChars: number): string {
    const normalized = (value || '').replace(/\s+/g, ' ').trim();
    if (!normalized) return '';
    return normalized.length > maxChars
      ? normalized.slice(0, maxChars).trim()
      : normalized;
  }

  private collectSiblingTextSnippet(
    alertEl: Element,
    direction: 'before' | 'after',
    maxChars: number,
  ): string {
    const collected: string[] = [];
    let node =
      direction === 'before'
        ? alertEl.previousElementSibling
        : alertEl.nextElementSibling;
    let hops = 0;

    while (node && hops < 4) {
      const lowerTag = node.tagName.toLowerCase();
      if (
        lowerTag !== 'script' &&
        lowerTag !== 'style' &&
        !node.classList.contains('alert')
      ) {
        const text = this.truncateContextText(node.textContent || '', maxChars);
        if (text) {
          if (direction === 'before') {
            collected.unshift(text);
          } else {
            collected.push(text);
          }
          const joined = this.truncateContextText(collected.join(' '), maxChars);
          if (joined.length >= maxChars) {
            return joined;
          }
        }
      }
      node =
        direction === 'before'
          ? node.previousElementSibling
          : node.nextElementSibling;
      hops += 1;
    }

    return this.truncateContextText(collected.join(' '), maxChars);
  }

  private inferPageTypeSignal(title: string, h1: string): string {
    const context = `${title} ${h1}`.toLowerCase();
    if (!context.trim()) return 'content';
    if (/\b(home|welcome|overview|what'?s new|landing)\b/.test(context)) {
      return 'landing';
    }
    if (/\b(apply|submit|file|register|sign in|log in|payment|pay|request)\b/.test(context)) {
      return 'task';
    }
    return 'content';
  }

  private buildCompactAlertsIssuesPayload(sourceHtml: string): Record<string, unknown> {
    const parser = new DOMParser();
    const doc = parser.parseFromString(sourceHtml, 'text/html');
    const alerts = Array.from(doc.querySelectorAll('.alert'));
    const main = (doc.querySelector('main') as HTMLElement | null) || doc.body;
    const h2Elements = Array.from(main.querySelectorAll('h2'));
    const h2Headings = h2Elements
      .map((h2) => this.truncateContextText(h2.textContent || '', 120))
      .filter((value) => !!value)
      .slice(0, 20);

    const mainElements = Array.from(main.querySelectorAll('*'));
    const mainIndexMap = new Map<Element, number>(
      mainElements.map((el, idx) => [el, idx]),
    );
    const h2IndexPairs = h2Elements
      .map((h2) => ({ text: this.truncateContextText(h2.textContent || '', 120), idx: mainIndexMap.get(h2) }))
      .filter((item) => Number.isFinite(item.idx)) as { text: string; idx: number }[];
    const firstH2Index = h2IndexPairs.length ? h2IndexPairs[0].idx : -1;

    const title = this.truncateContextText(doc.querySelector('title')?.textContent || '', 120);
    const h1 = this.truncateContextText(main.querySelector('h1')?.textContent || '', 120);
    const introSnippet = this.truncateContextText(
      main.querySelector('p')?.textContent || '',
      280,
    );

    const alertPlacementContext = alerts.map((alertEl, index) => {
      const mainIndex = mainIndexMap.get(alertEl);
      const positionPercentInMain =
        typeof mainIndex === 'number' && mainElements.length > 1
          ? Math.round((mainIndex / (mainElements.length - 1)) * 100)
          : null;

      const beforeCandidates = h2IndexPairs.filter(
        (item) => typeof mainIndex === 'number' && item.idx < mainIndex,
      );
      const afterCandidates = h2IndexPairs.filter(
        (item) => typeof mainIndex === 'number' && item.idx > mainIndex,
      );
      const nearestH2Above = beforeCandidates.length
        ? beforeCandidates[beforeCandidates.length - 1].text
        : '';
      const nearestH2Below = afterCandidates.length ? afterCandidates[0].text : '';

      return {
        alert_index: index + 1,
        is_before_first_h2:
          typeof mainIndex === 'number' && firstH2Index >= 0
            ? mainIndex < firstH2Index
            : false,
        position_percent_in_main: positionPercentInMain,
        nearest_h2_above: nearestH2Above,
        nearest_h2_below: nearestH2Below,
        section_snippet_before: this.collectSiblingTextSnippet(alertEl, 'before', 220),
        section_snippet_after: this.collectSiblingTextSnippet(alertEl, 'after', 220),
      };
    });

    return {
      alerts: alerts.map((alertEl) => alertEl.outerHTML),
      alertCount: alerts.length,
      pageContext: `Title: ${title || 'N/A'}\nH1: ${h1 || 'N/A'}\nPage type signal: ${this.inferPageTypeSignal(title, h1)}\nMain intro: ${introSnippet || 'N/A'}\nH2 headings (${h2Headings.length}): ${h2Headings.join(' | ') || 'N/A'}`,
      pageSignals: {
        title,
        h1,
        pageTypeSignal: this.inferPageTypeSignal(title, h1),
        h2Headings,
      },
      alertPlacementContext,
    };
  }

  private getAlertTextForRewrite(alertElement: Element): string {
    const firstParagraph = alertElement.querySelector('p');
    const paragraphText = firstParagraph?.textContent?.trim() || '';
    if (paragraphText) return paragraphText;
    return (alertElement.textContent || '').trim();
  }

  private getAlertHeadingForRewrite(alertElement: Element): string {
    const headingEl = alertElement.querySelector<HTMLElement>('h1, h2, h3, h4, h5, h6');
    return (headingEl?.textContent || '').trim();
  }

  private getIssuesForAlertIndex(
    issues: AlertRewriteIssueInput[],
    alertIndex: number,
  ): AlertRewriteIssueInput[] {
    const hasIndexedIssues = issues.some((issue) => Number.isFinite(issue.alertIndex));
    const globalIssues = issues.filter((issue) => !Number.isFinite(issue.alertIndex));
    const specificIssues = issues.filter((issue) => issue.alertIndex === alertIndex);

    if (!hasIndexedIssues) {
      return issues;
    }
    if (specificIssues.length) {
      return [...globalIssues, ...specificIssues];
    }
    return globalIssues;
  }

  private containsLinkPlaceholderSyntax(value: string): boolean {
    return /\[(?:\/?\s*LINK|END\s+LINK)\]/i.test(value || '');
  }

  private shouldForceLocalRepairForTesting(): boolean {
    try {
      return localStorage.getItem('pageAssistant.forceLocalRepair') === 'true';
    } catch {
      return false;
    }
  }

  private tryLocalAlertRewriteRepair(params: {
    result: AlertRewriteResult;
    originalAlertHtml: string;
    originalHeading?: string;
    originalAlertText: string;
    plan: AlertRewritePlan;
    selectedExamples: AlertRewriteExample[];
    allowLinkRemoval: boolean;
  }): AlertRewriteResult | null {
    const originalHasAnchor = /<a\b/i.test(params.originalAlertHtml);

    const initialCandidate = this.alertRewrite.parseAlertRewriteResponse(
      JSON.stringify({
        rewrittenAlertHtml: this.stripLinkPlaceholders(
          params.result.rewrittenAlertHtml || '',
        ),
        rewrittenHeading: this.stripLinkPlaceholders(
          params.result.rewrittenHeading || '',
        ),
        rewrittenAlert: this.stripLinkPlaceholders(params.result.rewrittenAlert || ''),
        appliedDirectives: params.result.appliedDirectives,
        exampleIdsUsed: params.result.exampleIdsUsed,
      }),
      params.plan,
      params.selectedExamples,
    );

    const wrapperFallbackHtml =
      this.buildAlertWrapperFromOriginal({
        originalAlertHtml: params.originalAlertHtml,
        heading:
          this.stripLinkPlaceholders(params.result.rewrittenHeading || '') ||
          params.originalHeading ||
          '',
        text:
          this.stripLinkPlaceholders(params.result.rewrittenAlert || '') ||
          params.originalAlertText,
      }) || '';

    let candidate = initialCandidate;
    if (!candidate?.rewrittenAlertHtml && wrapperFallbackHtml) {
      candidate = this.alertRewrite.parseAlertRewriteResponse(
        JSON.stringify({
          rewrittenAlertHtml: wrapperFallbackHtml,
          rewrittenHeading:
            this.stripLinkPlaceholders(params.result.rewrittenHeading || '') ||
            params.originalHeading ||
            '',
          rewrittenAlert:
            this.stripLinkPlaceholders(params.result.rewrittenAlert || '') ||
            params.originalAlertText,
          appliedDirectives: params.result.appliedDirectives,
          exampleIdsUsed: params.result.exampleIdsUsed,
        }),
        params.plan,
        params.selectedExamples,
      );
    }

    if (!candidate?.rewrittenAlertHtml) return null;

    let repairedHtml = candidate.rewrittenAlertHtml;
    if (!originalHasAnchor) {
      repairedHtml = this.removeAnchorsPreservingText(repairedHtml);
    } else if (!params.allowLinkRemoval && !/<a\b/i.test(repairedHtml)) {
      repairedHtml = this.ensureAtLeastOneOriginalLink(
        repairedHtml,
        params.originalAlertHtml,
      );
    }

    const repaired = this.alertRewrite.parseAlertRewriteResponse(
      JSON.stringify({
        rewrittenAlertHtml: repairedHtml,
        rewrittenHeading: candidate.rewrittenHeading,
        rewrittenAlert: candidate.rewrittenAlert,
        appliedDirectives: candidate.appliedDirectives,
        exampleIdsUsed: candidate.exampleIdsUsed,
      }),
      params.plan,
      params.selectedExamples,
    );
    if (!repaired?.rewrittenAlertHtml) return null;

    if (
      this.containsLinkPlaceholderSyntax(repaired.rewrittenAlertHtml) ||
      this.containsLinkPlaceholderSyntax(repaired.rewrittenAlert)
    ) {
      return null;
    }

    const repairedHasAnchor = /<a\b/i.test(repaired.rewrittenAlertHtml);
    if (!originalHasAnchor && repairedHasAnchor) return null;
    if (originalHasAnchor && !repairedHasAnchor && !params.allowLinkRemoval) {
      return null;
    }

    const copyCheck = this.alertRewrite.detectExampleCopy({
      result: repaired,
      selectedExamples: params.selectedExamples,
      originalHeading: params.originalHeading,
      originalAlertText: params.originalAlertText,
    });
    if (copyCheck.isCopy) return null;

    return repaired;
  }

  private stripLinkPlaceholders(value: string): string {
    return (value || '').replace(/\[(?:\/?\s*LINK|END\s+LINK)\]/gi, '').trim();
  }

  private removeAnchorsPreservingText(alertHtml: string): string {
    try {
      const doc = new DOMParser().parseFromString(alertHtml, 'text/html');
      const root = doc.body.firstElementChild as HTMLElement | null;
      if (!root) return alertHtml;
      root.querySelectorAll('a').forEach((anchor) => {
        const textNode = doc.createTextNode(anchor.textContent || '');
        anchor.replaceWith(textNode);
      });
      return root.outerHTML.trim();
    } catch {
      return alertHtml;
    }
  }

  private ensureAtLeastOneOriginalLink(
    rewrittenHtml: string,
    originalAlertHtml: string,
  ): string {
    try {
      const sourceDoc = new DOMParser().parseFromString(originalAlertHtml, 'text/html');
      const sourceAnchor = sourceDoc.body.querySelector('a');
      if (!sourceAnchor) return rewrittenHtml;

      const rewrittenDoc = new DOMParser().parseFromString(rewrittenHtml, 'text/html');
      const root = rewrittenDoc.body.firstElementChild as HTMLElement | null;
      if (!root) return rewrittenHtml;
      if (root.querySelector('a')) return root.outerHTML.trim();

      const target = (root.querySelector('p, li, div, span') || root) as HTMLElement;
      target.insertAdjacentHTML('beforeend', ` ${sourceAnchor.outerHTML}`);
      return root.outerHTML.trim();
    } catch {
      return rewrittenHtml;
    }
  }

  private buildAlertWrapperFromOriginal(params: {
    originalAlertHtml: string;
    heading: string;
    text: string;
  }): string | null {
    try {
      const sourceDoc = new DOMParser().parseFromString(
        params.originalAlertHtml,
        'text/html',
      );
      const sourceRoot = sourceDoc.body.firstElementChild as HTMLElement | null;

      const doc = document.implementation.createHTMLDocument('');
      const wrapperTag = sourceRoot?.tagName?.toLowerCase() || 'div';
      const wrapper = doc.createElement(wrapperTag);
      wrapper.setAttribute('class', sourceRoot?.getAttribute('class') || 'alert alert-info');

      const headingText = (params.heading || '').trim();
      if (headingText) {
        const headingEl = doc.createElement('h3');
        headingEl.textContent = headingText;
        wrapper.appendChild(headingEl);
      }

      const bodyText = (params.text || '').trim();
      if (bodyText) {
        const bodyEl = doc.createElement('p');
        bodyEl.textContent = bodyText;
        wrapper.appendChild(bodyEl);
      }

      return wrapper.outerHTML.trim();
    } catch {
      return null;
    }
  }

  private shouldAllowAlertLinkRemoval(
    issues: AlertRewriteIssueInput[],
    plan: AlertRewritePlan,
  ): boolean {
    const hasTooManyLinksIssue = issues.some((issue) =>
      (issue.category || '').toLowerCase().includes('too many links'),
    );
    return (
      hasTooManyLinksIssue ||
      plan.criteriaMatched.includes('C3_too_many_links') ||
      plan.directives.some((directive) => directive.op === 'limit_links')
    );
  }

  private applyAlertHtmlRewrites(
    originalHtml: string,
    rewrites: Array<{
      alert_index: number;
      rewritten_alert_html: string;
    }>,
  ): string | null {
    if (!rewrites.length) return null;

    const parser = new DOMParser();
    const doc = parser.parseFromString(originalHtml, 'text/html');
    const alerts = Array.from(doc.querySelectorAll('.alert'));
    if (!alerts.length) return null;

    for (const rewrite of rewrites) {
      const target = alerts[rewrite.alert_index - 1];
      if (!target) continue;
      const updatedDoc = parser.parseFromString(rewrite.rewritten_alert_html, 'text/html');
      const updatedEl = updatedDoc.body.firstElementChild;
      if (!updatedEl || !updatedEl.classList.contains('alert')) continue;
      target.replaceWith(updatedEl);
    }

    return doc.body.outerHTML;
  }

  private async callOpenRouterForMessages(
    model: AiModel,
    headers: Record<string, string>,
    url: string,
    messages: Array<{ role: string; content: string }>,
    contextLabel: string,
  ): Promise<{ text: string; usedModel: string }> {
    const candidates = this.buildModelRotation(model);
    let lastError: Error | undefined;

    for (const candidate of candidates) {
      const response = await fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          models: [candidate],
          messages,
          temperature: 0,
          provider: { allow_fallbacks: false },
        }),
      });

      if (response.status !== 200) {
        const shortName = this.getShortModelName(candidate);
        if (response.status === 429) {
          const retryAfter = Number.parseInt(
            response.headers.get('retry-after') || '',
            10,
          );
          const delayMs = Number.isFinite(retryAfter) ? retryAfter * 1000 : 600;
          console.warn(
            `${contextLabel} rate-limited (${shortName}); retrying next model in ${delayMs}ms.`,
          );
          await new Promise((resolve) => setTimeout(resolve, delayMs));
        }
        lastError = new Error(
          `${contextLabel} failed (${response.status}) for ${shortName}.`,
        );
        continue;
      }

      const rawJson = ((await response.json().catch(() => ({}))) || {}) as Record<
        string,
        unknown
      >;
      const errorObj = rawJson['error'];
      if (errorObj && typeof errorObj === 'object') {
        const errorMessage = (errorObj as Record<string, unknown>)['message'];
        lastError = new Error(
          `${contextLabel} error (${this.getShortModelName(candidate)}): ${
            typeof errorMessage === 'string' ? errorMessage : 'Unknown error'
          }`,
        );
        continue;
      }

      const choices = Array.isArray(rawJson['choices'])
        ? (rawJson['choices'] as Array<Record<string, unknown>>)
        : [];
      const firstChoice = choices[0];
      const message =
        firstChoice && typeof firstChoice['message'] === 'object'
          ? (firstChoice['message'] as Record<string, unknown>)
          : null;
      const text = message && typeof message['content'] === 'string'
        ? message['content']
        : '';
      const usedModel =
        typeof rawJson['model'] === 'string' ? rawJson['model'] : candidate;

      if (!text) {
        lastError = new Error(
          `${contextLabel} response was empty (${this.getShortModelName(candidate)}).`,
        );
        continue;
      }

      return { text, usedModel };
    }

    throw lastError ?? new Error(`${contextLabel} response was empty.`);
  }

  private async runAlertRecommendations(
    html: string,
    issues: AlertRewriteIssueInput[],
    model: AiModel,
    headers: Record<string, string>,
    url: string,
  ): Promise<void> {
    const start = performance.now();
    const mode = this.selectedAlertRewriteMode;
    const includeExamples = this.uploadState.getIncludeAlertRewriteExamples();
    const includeBeforeTextInExamples =
      includeExamples &&
      this.uploadState.getIncludeBeforeTextInAlertRewriteExamples();
    const rewriteRules = await getAlertRewriteRules();
    const retryInstructions = rewriteRules.alertRewrite.retryInstructions;
    this.statusMessage = `Generating alert rewrites (${mode === AlertRewriteMode.AB ? 'planning on' : 'planning off'}, ${includeExamples ? 'good examples on' : 'good examples off'}, ${includeBeforeTextInExamples ? 'before text on' : 'before text off'}).`;

    const alertDoc = new DOMParser().parseFromString(html, 'text/html');
    const alertEls = Array.from(alertDoc.querySelectorAll('.alert'));
    if (!alertEls.length) {
      throw new Error('No .alert elements found in the page.');
    }

    const examples = includeExamples ? await this.alertRewrite.loadExamples() : [];
    const rewrites: Array<{
      alert_index: number;
      rewritten_alert_html: string;
    }> = [];

    for (let i = 0; i < alertEls.length; i += 1) {
      const alertElement = alertEls[i];
      if (!alertElement) continue;
      const alertIndex = i + 1;
      const relevantIssues = this.getIssuesForAlertIndex(issues, alertIndex);

      const alertHtml = alertElement.outerHTML;
      const originalHeading = this.getAlertHeadingForRewrite(alertElement);
      const alertText = this.getAlertTextForRewrite(alertElement);
      if (!alertText) continue;

      const initialPlan = this.alertRewrite.buildHeuristicPlan({
        alertHtml,
        alertText,
        alertType: this.alertRewrite.inferAlertType(alertHtml),
        issues: relevantIssues,
      });
      let plan: AlertRewritePlan = initialPlan;
      let planModelName = 'heuristic';

      if (mode === AlertRewriteMode.AB) {
        const alertPlanningMessages =
          await this.alertRewrite.buildAlertPlanningMessages({
          alertHtml,
          alertText,
          alertType: initialPlan.alertType,
          issues: relevantIssues,
        });
        const alertPlanningResponse = await this.callOpenRouterForMessages(
          model,
          headers,
          url,
          alertPlanningMessages,
          `Alert ${alertIndex} alertPlanning`,
        );
        const parsedPlan = this.alertRewrite.parseAlertPlanningResponse(
          alertPlanningResponse.text,
          initialPlan,
        );
        if (parsedPlan) {
          plan = parsedPlan;
        }
        planModelName = this.getShortModelName(alertPlanningResponse.usedModel);
      }

      const selectedExamples = includeExamples
        ? this.alertRewrite.selectExamples(plan, examples, 2)
        : [];
      let rewriteResult: AlertRewriteResult | null = null;
      let rewriteModelName = 'unknown';
      let copyGuardTriggered = false;
      let blockedExampleId: string | null = null;
      let lastParsedResult: AlertRewriteResult | null = null;
      const originalHasAnchor = /<a\b/i.test(alertHtml);
      const allowLinkRemoval = this.shouldAllowAlertLinkRemoval(
        relevantIssues,
        plan,
      );

      let retryInstruction: string | undefined;
      for (let attempt = 0; attempt < 2; attempt += 1) {
        const alertRewriteMessages = await this.alertRewrite.buildAlertRewriteMessages({
          mode,
          originalHeading,
          originalAlertText: alertText,
          originalAlertHtml: alertHtml,
          plan,
          examples: selectedExamples,
          includeBeforeTextInExamples,
          includeLinkWritingRules: this.uploadState.getIncludeLinkWritingRules(),
          retryInstruction,
        });
        const rewriteResponse = await this.callOpenRouterForMessages(
          model,
          headers,
          url,
          alertRewriteMessages,
          `Alert ${alertIndex} alertRewrite`,
        );
        rewriteModelName = this.getShortModelName(rewriteResponse.usedModel);
        const parsedResult = this.alertRewrite.parseAlertRewriteResponse(
          rewriteResponse.text,
          plan,
          selectedExamples,
        );
        if (!parsedResult?.rewrittenAlertHtml) {
          retryInstruction = retryInstructions.invalidWrapperHtml;
          continue;
        }
        lastParsedResult = parsedResult;

        const hasLinkPlaceholders =
          this.containsLinkPlaceholderSyntax(parsedResult.rewrittenAlertHtml) ||
          this.containsLinkPlaceholderSyntax(parsedResult.rewrittenAlert);
        if (hasLinkPlaceholders) {
          retryInstruction = retryInstructions.placeholderLinks;
          continue;
        }

        const rewrittenHasAnchor = /<a\b/i.test(parsedResult.rewrittenAlertHtml);
        if (!originalHasAnchor && rewrittenHasAnchor) {
          retryInstruction = retryInstructions.noLinksAllowed;
          continue;
        }
        if (originalHasAnchor && !rewrittenHasAnchor && !allowLinkRemoval) {
          retryInstruction = retryInstructions.mustKeepLink;
          continue;
        }

        const copyCheck = this.alertRewrite.detectExampleCopy({
          result: parsedResult,
          selectedExamples,
          originalHeading,
          originalAlertText: alertText,
        });
        if (!copyCheck.isCopy) {
          if (this.shouldForceLocalRepairForTesting()) {
            console.warn('Forcing local repair for testing', { alertIndex });
            break;
          }
          rewriteResult = parsedResult;
          break;
        }

        copyGuardTriggered = true;
        blockedExampleId = copyCheck.exampleId || null;
        retryInstruction = retryInstructions.avoidExampleCopy;
        console.warn('Alert rewrite copy guard triggered', {
          alertIndex,
          attempt: attempt + 1,
          reason: copyCheck.reason,
          exampleId: copyCheck.exampleId,
          similarity: copyCheck.similarity,
        });
      }

      if (!rewriteResult && lastParsedResult) {
        rewriteResult = this.tryLocalAlertRewriteRepair({
          result: lastParsedResult,
          originalAlertHtml: alertHtml,
          originalHeading,
          originalAlertText: alertText,
          plan,
          selectedExamples,
          allowLinkRemoval,
        });
      }

      if (!rewriteResult) {
        rewriteResult = this.alertRewrite.buildPassthroughResult({
          alertHtml,
          originalHeading,
          originalAlertText: alertText,
        });
      }

      rewrites.push({
        alert_index: alertIndex,
        rewritten_alert_html: rewriteResult.rewrittenAlertHtml,
      });

      const examplesUsedDetails = (rewriteResult.exampleIdsUsed.length
        ? rewriteResult.exampleIdsUsed
            .map((id) => selectedExamples.find((example) => example.id === id))
            .filter((example): example is NonNullable<typeof example> => !!example)
        : selectedExamples
      ).map((example) => ({
        id: example.id,
        alertType: example.alertType,
        criteria: example.criteria,
        tags: example.tags,
        headingBefore: example.headingBefore || '',
        headingAfter: example.headingAfter || '',
        before: example.before,
        after: example.after,
      }));

      console.log('Alert rewrite examples used', {
        alertIndex,
        exampleIdsUsed: rewriteResult.exampleIdsUsed,
        examplesUsedDetails,
      });

      console.log('Alert rewrite iteration', {
        mode,
        alertIndex,
        plan,
        selectedExampleIds: selectedExamples.map((example) => example.id),
        originalHeading,
        finalHeading: rewriteResult.rewrittenHeading,
        finalRewrite: rewriteResult.rewrittenAlert,
        finalRewriteHtml: rewriteResult.rewrittenAlertHtml,
        appliedDirectives: rewriteResult.appliedDirectives,
        exampleIdsUsed: rewriteResult.exampleIdsUsed,
        planModel: planModelName,
        rewriteModel: rewriteModelName,
        copyGuardTriggered,
        blockedExampleId,
        humanRating: null,
      });
    }

    const finalHtml = this.applyAlertHtmlRewrites(html, rewrites);
    if (!finalHtml) {
      throw new Error('No alert rewrites were generated.');
    }

    console.log('Alert rewrite model + time', {
      requestedModel: model,
      mode,
      rewrites: rewrites.length,
      ms: Math.round(performance.now() - start),
    });

    const formattedHtml = await this.urlDataService.formatHtml(finalHtml, 'ai');
    this.uploadState.mergeModifiedData({
      modifiedUrl: 'AI generated',
      modifiedHtml: formattedHtml,
    });
  }

  //AI Model
  selectedAiModel: AiModel = AiModel.Nemotron;

  onAiChange(key: AiModel) {
    this.selectedAiModel = key;
    this.uploadState.setSelectedAiModel(key);
  }

  private getEnumKeyByValue<T extends Record<string, string>>(
    enumObj: T,
    value: string,
  ): keyof T | undefined {
    return Object.keys(enumObj).find((k) => enumObj[k as keyof T] === value) as
      | keyof T
      | undefined;
  }

  private getShortModelName(model: string): string {
    const key = this.getEnumKeyByValue(AiModel, model);
    return key ? this.translate.instant(`page.ai-options.model.short.${key}`) : model;
  }

  private buildModelRotation(model: AiModel): string[] {
    // Fallback order after the user-selected model.
    const fallbackOrder: AiModel[] = [AiModel.Arcee, AiModel.Zai];
    const available = new Set(this.openRouter.freeModels);
    const rotation: string[] = [model];

    for (const candidate of fallbackOrder) {
      if (candidate !== model && available.has(candidate)) {
        rotation.push(candidate);
      }
    }

    return rotation;
  }
  //AI interaction
  isLoading = false;
  statusMessage = '';
  statusSeverity: 'info' | 'warn' | 'error' | 'success' = 'info';

  async sendToAI(): Promise<void> {
    console.time('Time until AI response');
    const startTime = performance.now();
    this.isLoading = true;
    this.aiDisabled = 'Wait for response from AI';
    this.statusSeverity = 'info';
    this.statusMessage = this.translate.instant('common.ai.sending');

    try {
      const apiKey = localStorage.getItem('apiKey');
      if (!apiKey) throw new Error('Missing API key');

      const uploadData = this.uploadState.getUploadData();
      const html = uploadData?.originalHtml;
      if (!html) throw new Error('No HTML to send');

      const isAlertsRecommendations =
        this.selectedPromptKey === PromptKey.AlertsRecommendations;
      const isAlertsIssues = this.selectedPromptKey === PromptKey.AlertsIssues;
      const isAlertFlow = isAlertsRecommendations || isAlertsIssues;
      const promptKeyForRequest = isAlertsRecommendations
        ? PromptKey.AlertsIssues
        : this.selectedPromptKey;
      const prompt = await this.getPromptForKey(promptKeyForRequest);
      const model = this.selectedAiModel;
      const requestedModelShort = this.getShortModelName(model);
      const url = 'https://openrouter.ai/api/v1/chat/completions';

      const headers = {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      };
      const useCompactAlertsPageContext =
        promptKeyForRequest === PromptKey.AlertsIssues &&
        this.uploadState.getUseCompactAlertsPageContext();
      const alertsIssuesUserContent = useCompactAlertsPageContext
        ? JSON.stringify(this.buildCompactAlertsIssuesPayload(html))
        : html;

      const payload = {
        models: this.buildModelRotation(model),
        messages: [
          { role: 'system', content: prompt },
          { role: 'user', content: alertsIssuesUserContent },
        ],
        temperature: 0,
        provider: {
          allow_fallbacks: true,
          //"data_collection": "deny"
        },
      };

      if (isAlertFlow) {
        const cachedIssues = this.alertAi.getCachedIssues(html);
        if (cachedIssues) {
          const selectedIssues: AlertRewriteIssueInput[] = cachedIssues
            .filter((issue) => issue.include)
            .map((issue) => ({ ...issue }));
          if (!selectedIssues.length) {
            this.messageService.add({
              severity: 'info',
              summary: this.translate.instant('common.ai.alertIssuesNotIdentified'),
              life: 3000,
            });
          }
          await this.runAlertRecommendations(
            html,
            selectedIssues,
            model,
            headers,
            url,
          );
          this.statusSeverity = 'success';
          this.statusMessage = this.translate.instant(
            'common.ai.alertRecommendationsGenerated',
          );
          this.messageService.add({
            severity: 'success',
            summary: this.translate.instant('common.ai.responseReceived.summary'),
            detail: this.translate.instant(
              'common.ai.alertRecommendationsGenerated',
            ),
            life: 5000,
          });
          return;
        }
      }

      const candidates = this.buildModelRotation(model);
      let aiResponse: any | null = null;
      let lastAttemptedModel = model;

      for (let i = 0; i < candidates.length; i += 1) {
        const candidate = candidates[i];
        lastAttemptedModel = candidate as AiModel;
        const attemptPayload = {
          ...payload,
          models: [candidate],
          provider: { allow_fallbacks: false },
        };

        console.log('Sending to OpenRouter:', { payload: attemptPayload });

        const orResponse = await fetch(url, {
          method: 'POST',
          headers,
          body: JSON.stringify(attemptPayload),
        });

        console.log(`OpenRouter response status: `, orResponse.status);
        if (orResponse.status === 200) {
          console.log('Waiting for AI response');
          this.statusMessage = this.translate.instant('common.ai.generating');
        }

        const attemptResponse =
          (await orResponse.json().catch(() => ({}))) || {};

        if (orResponse.status === 404 && i < candidates.length - 1) {
          console.warn(
            `Model not found (404): ${candidate}. Retrying next model in rotation.`,
          );
          continue;
        }
        if (orResponse.status === 429 && i < candidates.length - 1) {
          const retryAfterHeader = orResponse.headers.get('retry-after');
          const retryAfterMs = retryAfterHeader
            ? Math.min(Math.max(Number(retryAfterHeader) * 1000, 600), 30000)
            : 600;
          console.warn(
            `Rate limited (429): ${candidate}. Retrying next model in ${retryAfterMs}ms.`,
          );
          await new Promise((resolve) => setTimeout(resolve, retryAfterMs));
          continue;
        }

        if (attemptResponse.error) {
          const attemptModelShort = this.getShortModelName(candidate);
          console.groupCollapsed('AI Error');
          console.error(attemptResponse.error?.status);
          console.warn(`400: Bad Request (invalid or missing params, CORS)\n
                    401: Invalid credentials (OAuth session expired, disabled/invalid API key)\n
                    402: Your account or API key has insufficient credits. Add more credits and retry the request.\n
                    403: Your chosen model requires moderation and your input was flagged\n
                    408: Your request timed out\n
                    429: You are being rate limited\n
                    502: Your chosen model is down or we received an invalid response from it\n
                    503: There is no available model provider that meets your routing requirements`);
          console.error(attemptResponse.error?.message);
          console.groupEnd();
          this.statusSeverity = 'error';
          this.statusMessage = this.translate.instant(
            'common.ai.errorCommunicatingAi',
          );
          throw new Error(
            `AI error (${attemptModelShort}): ${
              attemptResponse.error?.message || 'Unknown error'
            }`,
          );
        }

        aiResponse = attemptResponse;
        break;
      }

      if (!aiResponse) {
        throw new Error(
          `AI response was empty (${this.getShortModelName(lastAttemptedModel)}).`,
        );
      }

      const aiHtml = aiResponse.choices?.[0].message.content;
      if (!aiHtml) {
        throw new Error(`AI response was empty (${requestedModelShort}).`);
      }

      console.groupCollapsed('AI Response');
      console.log(`AI model: `, aiResponse.model);
      console.log(`Prompt tokens: `, aiResponse.usage.prompt_tokens);
      console.log(`Response tokens: `, aiResponse.usage.completion_tokens);
      console.log(`Total tokens: `, aiResponse.usage.total_tokens);
      console.dir(aiResponse);
      console.groupEnd();

      //AI model translation
      const requestedModelKey = this.getEnumKeyByValue(AiModel, model);
      const usedModelKey = this.getEnumKeyByValue(AiModel, aiResponse.model);
      const requestedModel = this.translate.instant(
        `page.ai-options.model.short.${requestedModelKey}`,
      );
      const usedModel = this.translate.instant(
        `page.ai-options.model.short.${usedModelKey}`,
      );

      if (model != aiResponse.model) {
        const fallbackOrder = this.buildModelRotation(model)
          .map((candidate) => this.getShortModelName(candidate))
          .join(' -> ');
        console.warn('A FALLBACK MODEL WAS USED');
        console.groupCollapsed('Fallback model info');
        console.log(`Requested model: `, model);
        console.log(`Fallback model: `, aiResponse.model);
        console.log(`Fallback order: `, fallbackOrder);
        console.log(
          `Your requested model may be down or you have exceeded the rate limit`,
        );
        console.groupEnd();
        this.statusSeverity = 'warn';
        this.statusMessage = this.translate.instant('common.ai.fallbackStatus', {
          model: usedModel,
        });
        this.messageService.add({
          severity: 'warn',
          summary: this.translate.instant('common.ai.fallback.summary'),
          detail: this.translate.instant('common.ai.fallback.detail', {
            requested: requestedModel,
            used: usedModel,
          }),
          life: 10000,
        });
      }

      if (promptKeyForRequest === PromptKey.AlertsIssues) {
          // Step 1: parse issues from AlertsIssues output (JSON response expected).
          const issues = this.alertAi.parseIssuesFromText(aiHtml);
          const cachedIssues = this.alertAi.getCachedIssues(html);
          let selectedIssues: AlertRewriteIssueInput[] = [];
          if (cachedIssues) {
            selectedIssues = cachedIssues
              .filter((issue) => issue.include)
              .map((issue) => ({ ...issue }));
          } else {
            const normalizedIssues = issues.length
              ? this.alertAi.normalizeAlertIssues(issues, {
                  useIncludeFallback: false,
                })
              : [];
            this.alertAi.cacheIssues(html, normalizedIssues);
            selectedIssues = normalizedIssues
              .filter((issue) => issue.include)
              .map((issue) => ({ ...issue }));
          }
          if (selectedIssues.length) {
            this.messageService.add({
              severity: 'info',
              summary: this.translate.instant('common.ai.alertIssuesReceived', {
                model: usedModel,
              }),
              life: 3000,
            });
          } else {
            this.messageService.add({
              severity: 'info',
              summary: this.translate.instant('common.ai.alertIssuesNotIdentified'),
              life: 3000,
            });
          }
          // Step 2: run alert rewrite flow with selected issues, or example-only when none are selected.
          await this.runAlertRecommendations(
            html,
            selectedIssues,
            model,
            headers,
            url,
          );
        } else {
        const formattedHtml = await this.urlDataService.formatHtml(aiHtml, 'ai');

        this.uploadState.mergeModifiedData({
          modifiedUrl: 'AI generated',
          modifiedHtml: formattedHtml,
        });
      }

      this.statusSeverity = 'success';
      this.statusMessage = this.translate.instant(
        'common.ai.comparisonUpdatedWithModel',
        { model: usedModel },
      );

      this.messageService.add({
        severity: 'success',
        summary: this.translate.instant('common.ai.responseReceived.summary'),
        detail: this.translate.instant('common.ai.responseReceived.detail'),
        life: 5000,
      });
    } catch (err) {
      console.error(`sendToAI function failed:`, err);
      this.statusSeverity = 'error';
      this.statusMessage = this.translate.instant(
        'common.ai.errorCommunicatingOpenRouter',
      );
      this.messageService.add({
        severity: 'error',
        summary: this.translate.instant('common.ai.requestFailed.summary'),
        detail:
          err instanceof Error
            ? err.message
            : this.translate.instant('common.ai.requestFailed.detailUnknown'),
        sticky: true,
      });
    } finally {
      this.isLoading = false;
      this.aiDisabled = '';
      console.timeEnd('Time until AI response');
      const endTime = performance.now();
      const durationInSeconds = ((endTime - startTime) / 1000).toFixed(2);
      this.messageService.add({
        severity: 'info',
        summary: this.translate.instant('common.requestComplete'),
        detail: this.translate.instant('common.totalTime', {
          time: durationInSeconds,
        }),
        life: 10000,
      });
    }
  }
  /*TOOLBAR FUNCTIONS*/

  //Start of shadow DOM navigation
  private shadowClickHandler: (() => void) | null = null;
  private shadowSelectionHandler: (() => void) | null = null;

  currentIndex = 0;
  elements: HTMLElement[] = [];

  next() {
    if (this.elements.length === 0) return;
    this.currentIndex = (this.currentIndex + 1) % this.elements.length;
    this.focusOnIndex(this.currentIndex);
    this.shadowDomService.lastSelection = {
      count: 1,
      startId: null,
      endId: null,
    }; //reset selection
  }

  prev() {
    if (this.elements.length === 0) return;
    this.currentIndex =
      (this.currentIndex - 1 + this.elements.length) % this.elements.length;
    this.focusOnIndex(this.currentIndex);
    this.shadowDomService.lastSelection = {
      count: 1,
      startId: null,
      endId: null,
    }; //reset selection
  }

  private focusOnIndex(index: number) {
    const shadowRoot = this.shadowDOM();
    if (!shadowRoot) return;
    const el = this.elements[index];
    this.shadowDomService.highlightElement(el);
    this.shadowDomService.openParentDetails(el);
    this.shadowDomService.closeAllDetailsExcept(shadowRoot, el);
    this.shadowDomService.scrollToElement(el);
  }

  get displayCounter(): string {
    if (!this.elements?.length) return '0\u00A0of\u00A00';

    // nothing highlighted
    if (this.shadowDomService.lastSelection.count === 0) {
      return `–\u00A0of\u00A0${this.elements.length}`;
    }
    // multiple highlighted
    if (this.shadowDomService.lastSelection.count > 1) {
      if (
        this.shadowDomService.lastSelection.startId != null &&
        this.shadowDomService.lastSelection.endId != null
      ) {
        this.currentIndex = this.shadowDomService.lastSelection.endId - 1; //needed so next button goes to next diff
        return `${this.shadowDomService.lastSelection.startId}–${this.shadowDomService.lastSelection.endId}\u00A0of\u00A0${this.elements.length}`;
      }
      return `–\u00A0of\u00A0${this.elements.length}`;
    }

    // single highlighted
    return `${this.currentIndex + 1}\u00A0of\u00A0${this.elements.length}`;
  }

  get displayNumHighlighted(): string {
    if (this.shadowDomService.lastSelection.count < 1) return '';
    else
      return `${this.shadowDomService.lastSelection.count}\u00A0items selected`;
  }
  //End of shadow DOM navigation

  //Edit
  toggleEdit = false;
  async toolbarToggleEdit(view: WebViewType): Promise<void> {
    const shadowRoot = this.shadowDOM();
    const editable = shadowRoot?.getElementById('editable');
    if (!editable) {
      console.warn('Editable area not found.');
      this.toggleEdit = false;
      return;
    }
    if (this.toggleEdit) {
      //edit
      editable.setAttribute('contenteditable', 'true');
      editable.focus();
    } else {
      //save
      this.uploadState.savePreviousUploadData(); //save previous data for undo button
      editable.setAttribute('contenteditable', 'false');
      const editedHtml = await this.urlDataService.formatHtml(
        editable.innerHTML,
        'edit',
      );
      if (view === WebViewType.Original) {
        this.uploadState.mergeOriginalData({
          originalUrl: 'User edited',
          originalHtml: editedHtml,
        });
      } else if (view === WebViewType.Modified) {
        this.uploadState.mergeModifiedData({
          modifiedUrl: 'User edited',
          modifiedHtml: editedHtml,
        });
      }
      this.toggleEdit = false;
    }
  }

  //Copy
  toggleCopy = false;
  toolbarToggleCopy(view: WebViewType): void {
    const data = this.uploadState.getUploadData();
    if (!data) return;
    let htmlToCopy = '';
    if (view === WebViewType.Original) {
      htmlToCopy = data.originalHtml ?? '';
    } else if (view === WebViewType.Modified) {
      htmlToCopy = data.modifiedHtml ?? '';
    }
    navigator.clipboard
      .writeText(htmlToCopy)
      .then(() => {
        setTimeout(() => (this.toggleCopy = false), 1000);
      })
      .catch((err) => console.error('Clipboard copy failed:', err));
  }

  //Accept All
  toolbarAcceptAll() {
    const data = this.uploadState.getUploadData();
    console.log('Accept all changes');
    if (!data?.modifiedHtml || !data?.modifiedUrl) return;
    this.uploadState.savePreviousUploadData(); //save previous data for undo button
    this.uploadState.mergeOriginalData({
      originalHtml: data.modifiedHtml,
      originalUrl: data.modifiedUrl,
    });
    this.currentIndex = 0;
  }

  //Reject All
  toolbarRejectAll() {
    const data = this.uploadState.getUploadData();
    console.log('Reject all changes');
    if (!data?.originalHtml || !data?.originalUrl) return;
    this.uploadState.savePreviousUploadData(); //save previous data for undo button
    this.uploadState.mergeModifiedData({
      modifiedHtml: data.originalHtml,
      modifiedUrl: data.originalUrl,
    });
    this.currentIndex = 0;
  }

  toolbarAccept(): void {
    this.processDiffChange('accept');
  }

  toolbarReject(): void {
    this.processDiffChange('reject');
  }

  processDiffChange(mode: 'accept' | 'reject'): void {
    //Get diff container
    const shadowRoot = this.shadowDOM();
    if (!shadowRoot) {
      console.warn('Shadow root not found.');
      return;
    }
    const diffContainer = shadowRoot.querySelector(
      '.diff-content',
    ) as HTMLElement;
    if (!diffContainer) {
      console.warn('Diff container not found');
      return;
    }

    //HANDLE HIGHLIGHTED DIFF//
    //Get highlighted <ins> or <del> or <span>
    const highlightedEls = diffContainer.querySelectorAll<HTMLElement>(
      'ins.highlight, del.highlight, span.diff-group.highlight, span.updated-link.highlight',
    );
    if (!highlightedEls.length) {
      console.warn('highlighted elements not found');
      return;
    }

    const keepTag = mode === 'accept' ? 'ins' : 'del';
    const removeTag = mode === 'accept' ? 'del' : 'ins';

    highlightedEls.forEach((highlighted) => {
      //Keep highlighted tag (accept mode keep tag = ins)
      if (highlighted.tagName.toLowerCase() === keepTag) {
        highlighted.insertAdjacentHTML('beforebegin', highlighted.innerHTML);
        highlighted.remove();
      }

      //Remove highlighted tag (accept mode remove tag = del)
      else if (highlighted.tagName.toLowerCase() === removeTag) {
        highlighted.remove();
      }

      //Handle highlighted .diff-group or .updated-link (accept mode keep tag = ins)
      else if (highlighted.tagName.toLowerCase() === 'span') {
        const el = highlighted.querySelector(keepTag);
        const link = highlighted.querySelector('a');
        //console.log(`Highlighted group: `,el);
        //console.log(`Highlighted link: `,link);
        //diff-group
        if (el) {
          highlighted.insertAdjacentHTML('beforebegin', el.innerHTML);
          highlighted.remove();
        }
        //updated-link
        else if (link) {
          if (mode === 'accept') {
            highlighted.replaceWith(link);
          } else {
            const oldHref =
              highlighted.getAttribute('title')?.replace(/^Old URL:\s*/, '') ||
              '';
            link.setAttribute('href', oldHref);
            highlighted.replaceWith(link);
          }
        }
        //neither found
        else {
          console.log(
            `No <${keepTag}> or updated-link found. Leaving content as-is.`,
          );
          return;
        }
      }
    });

    //HANDLE ALL OTHER CHANGES (OPPOSITE OF WHAT IS DONE WITH THE HIGHLIGHTED CHANGE)//
    //Keep and unwrap remaining elements of opposite tag (including inside diff-group)
    diffContainer
      .querySelectorAll(`${removeTag}, span.diff-group`)
      .forEach((el) => {
        const parent = el.parentNode;
        while (el.firstChild) {
          parent?.insertBefore(el.firstChild, el);
        }
        parent?.removeChild(el);
      });

    // Remove remaining elements of the keep tag
    diffContainer.querySelectorAll(keepTag).forEach((el) => {
      el.remove();
    });

    // Remove new/old link highlights
    diffContainer.querySelectorAll('span.updated-link').forEach((span) => {
      const link = span.querySelector('a');
      if (!link) return;
      if (mode === 'reject') {
        span.replaceWith(link);
      } else {
        const oldHref =
          span.getAttribute('title')?.replace(/^Old URL:\s*/, '') || '';
        link.setAttribute('href', oldHref);
        span.replaceWith(link);
      }
    });

    this.shadowDomService.lastSelection = {
      count: 1,
      startId: null,
      endId: null,
    }; //reset selection
    //Merge with modified HTML
    const updatedHtml = diffContainer.innerHTML;
    const data = this.uploadState.getUploadData();
    if (!data) return;
    this.uploadState.savePreviousUploadData(); //save previous data for undo button
    if (mode === 'accept') {
      this.uploadState.mergeOriginalData({
        originalUrl: 'Change accepted',
        originalHtml: updatedHtml,
      });
      const modHtml = data.modifiedHtml?.replace(
        /<(\w+)([\s\S]*?)\s*\/>/g,
        '<$1$2>',
      ); //removes self-closing slash
      this.uploadState.mergeModifiedData({
        modifiedUrl: data.modifiedUrl!,
        modifiedHtml: modHtml!,
      });
    } else {
      this.uploadState.mergeModifiedData({
        modifiedUrl: 'Change rejected',
        modifiedHtml: updatedHtml,
      });
      const oriHtml = data.originalHtml?.replace(
        /<(\w+)([\s\S]*?)\s*\/>/g,
        '<$1$2>',
      ); //removes self-closing slash
      this.uploadState.mergeOriginalData({
        originalUrl: data.originalUrl!,
        originalHtml: oriHtml!,
      });
    }
  }
}
