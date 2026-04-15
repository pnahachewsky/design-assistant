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
  AlertRewriteIssueInput,
} from './services/alert-rewrite.service';
import { OpenRouterService } from './services/openrouter.service';
import { SkillManagerService, SkillOutputMode } from './services/skill-manager.service';
import { AlertIssuesContextService } from './services/alert-issues-context.service';
import {
  coerceInteractiveResultLeadIns,
  removeNonReportableAlertsFromHtml,
} from './services/alert-reportable.utils';
import { AlertRewriteOrchestratorService } from './services/alert-rewrite-orchestrator.service';

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
  private alertIssuesContext = inject(AlertIssuesContextService);
  private alertRewriteOrchestrator = inject(AlertRewriteOrchestratorService);
  private openRouter = inject(OpenRouterService);
  private skillManager = inject(SkillManagerService);
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
    const useSkillPrompts = this.uploadState.getUseSkillPrompts();
    if (!useSkillPrompts) {
      return custom ? `${promptBody}\n\n${custom}` : promptBody;
    }

    const queryText = this.buildSkillQueryText(key, custom);
    const outputMode = this.resolveSkillOutputMode(key);
    const composed = await this.skillManager.composePrompt({
      basePrompt: promptBody,
      queryText,
      promptKey: key,
      outputMode,
      includeReferences:
        key === PromptKey.AlertsIssues || key === PromptKey.AlertsRecommendations,
      includeOptionalReferences: key === PromptKey.AlertsRecommendations,
      includeAssets:
        key === PromptKey.AlertsIssues || key === PromptKey.AlertsRecommendations,
    });

    return custom
      ? `${composed.prompt}\n\n${custom}`
      : composed.prompt; //Note: a heading can be added to the custom instructions here, something like ${base}\n\nPrioritize the following:\n${custom}
  }

  private buildSkillQueryText(key: PromptKey, custom: string): string {
    const promptIntents: Record<PromptKey, string> = {
      [PromptKey.Headings]: 'heading hierarchy scanability h1 h2 h3',
      [PromptKey.Doormats]: 'doormat overview list content design',
      [PromptKey.PlainLanguage]: 'plain language simplify readability rewrite',
      [PromptKey.AlertsIssues]: 'analyze alert issues wcag accessibility content design',
      [PromptKey.AlertsRecommendations]:
        'rewrite canada.ca alerts and provide corrected output',
    };
    return [promptIntents[key], custom].filter(Boolean).join('\n');
  }

  private resolveSkillOutputMode(key: PromptKey): SkillOutputMode {
    if (key === PromptKey.AlertsIssues || key === PromptKey.AlertsRecommendations) {
      return 'json';
    }
    return 'text';
  }

  private shouldForceLocalRepairForTesting(): boolean {
    try {
      return localStorage.getItem('pageAssistant.forceLocalRepair') === 'true';
    } catch {
      return false;
    }
  }

  private async callOpenRouterForMessages(
    model: AiModel,
    headers: Record<string, string>,
    url: string,
    messages: Array<{ role: string; content: string }>,
    contextLabel: string,
    temperature = 0,
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
          temperature,
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
      const text = message ? this.extractOpenRouterMessageText(message) : '';
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

  private extractOpenRouterMessageText(message: Record<string, unknown>): string {
    // OpenRouter usually returns a string, but some providers return content
    // blocks. Collapse text blocks so the parser does not see a false empty response.
    const content = message['content'];
    if (typeof content === 'string') return content;

    if (Array.isArray(content)) {
      return content
        .map((part) => {
          if (typeof part === 'string') return part;
          if (part && typeof part === 'object') {
            const block = part as Record<string, unknown>;
            const text = block['text'] ?? block['content'];
            return typeof text === 'string' ? text : '';
          }
          return '';
        })
        .filter((part) => !!part.trim())
        .join('\n')
        .trim();
    }

    return '';
  }

  // UI-facing summary of the alert rewrite options currently active.
  private buildAlertRewriteStatusMessage(): string {
    const includeExamples = this.uploadState.getIncludeAlertRewriteExamples();
    const includeBeforeTextInExamples =
      includeExamples &&
      this.uploadState.getIncludeBeforeTextInAlertRewriteExamples();
    return `Generating alert rewrites (${this.selectedAlertRewriteMode === AlertRewriteMode.AB ? 'planning on' : 'planning off'}, ${includeExamples ? 'good examples on' : 'good examples off'}, ${includeBeforeTextInExamples ? 'before text on' : 'before text off'}).`;
  }

  // Thin component-level handoff into the extracted alert rewrite workflow.
  // The component keeps status updates and final state writes, while the service
  // owns planning, retries, guards, and HTML rewrite orchestration.
  private async applyAlertRecommendations(params: {
    html: string;
    issues: AlertRewriteIssueInput[];
    model: AiModel;
    headers: Record<string, string>;
    url: string;
  }): Promise<void> {
    const includeExamples = this.uploadState.getIncludeAlertRewriteExamples();
    const includeBeforeTextInExamples =
      includeExamples &&
      this.uploadState.getIncludeBeforeTextInAlertRewriteExamples();
    this.statusMessage = this.buildAlertRewriteStatusMessage();

    const recommendationResult =
      await this.alertRewriteOrchestrator.generateRecommendations({
        html: params.html,
        issues: params.issues,
        model: params.model,
        headers: params.headers,
        url: params.url,
        mode: this.selectedAlertRewriteMode,
        includeExamples,
        includeBeforeTextInExamples,
        includeLinkWritingRules: this.uploadState.getIncludeLinkWritingRules(),
        forceLocalRepairForTesting: this.shouldForceLocalRepairForTesting(),
        callOpenRouterForMessages: this.callOpenRouterForMessages.bind(this),
        getShortModelName: this.getShortModelName.bind(this),
      });

    this.uploadState.mergeModifiedData({
      modifiedUrl: 'AI generated',
      modifiedHtml: recommendationResult.formattedHtml,
    });
  }

  //AI Model
  selectedAiModel: AiModel = AiModel.NemotronNano;

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

  private normalizeModelId(value: string): string {
    return (value || '')
      .trim()
      .toLowerCase()
      .replace(/-\d{8,}(?=:[a-z0-9-]+$|$)/g, '');
  }

  private resolveAiModelKey(model: string): keyof typeof AiModel | undefined {
    const exactMatch = this.getEnumKeyByValue(AiModel, model);
    if (exactMatch) return exactMatch;

    const normalizedModel = this.normalizeModelId(model);
    return (Object.keys(AiModel) as Array<keyof typeof AiModel>).find((key) => {
      const enumValue = this.normalizeModelId(AiModel[key]);
      return (
        normalizedModel === enumValue ||
        normalizedModel.startsWith(enumValue) ||
        enumValue.startsWith(normalizedModel)
      );
    });
  }

  private isSameAiModelFamily(requested: string, used: string): boolean {
    const requestedKey = this.resolveAiModelKey(requested);
    const usedKey = this.resolveAiModelKey(used);
    if (requestedKey && usedKey) {
      return requestedKey === usedKey;
    }
    return this.normalizeModelId(requested) === this.normalizeModelId(used);
  }

  private getShortModelName(model: string): string {
    const key = this.resolveAiModelKey(model);
    return key ? this.translate.instant(`page.ai-options.model.short.${key}`) : model;
  }

  private getInteractiveResultLeadIns(): string[] {
    return coerceInteractiveResultLeadIns(
      this.translate.instant('page.alerts.interactiveResultLeadIns'),
    );
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
      const sanitizedAlertsIssuesHtml =
        promptKeyForRequest === PromptKey.AlertsIssues
          ? removeNonReportableAlertsFromHtml(html, {
              interactiveResultLeadIns: this.getInteractiveResultLeadIns(),
            })
          : html;
      const alertsIssuesUserContent = useCompactAlertsPageContext
        ? JSON.stringify(
            this.alertIssuesContext.buildCompactAlertsIssuesPayload(html),
          )
        : sanitizedAlertsIssuesHtml;

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
          await this.applyAlertRecommendations({
            html,
            issues: selectedIssues,
            model,
            headers,
            url,
          });
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
      const requestedModel = this.getShortModelName(model);
      const usedModel = this.getShortModelName(aiResponse.model);

      if (!this.isSameAiModelFamily(model, aiResponse.model)) {
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
          await this.applyAlertRecommendations({
            html,
            issues: selectedIssues,
            model,
            headers,
            url,
          });
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
