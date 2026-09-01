import { Injectable, signal, computed, inject } from '@angular/core';
import { UploadData, ModifiedData, OriginalData, AiModel } from '../data/data.model'
import { LocalStorageService } from '../../../services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UploadStateService {
  private storage = inject(LocalStorageService);
  // Local-storage keys are kept here so reset/restore logic stays in sync.
  private readonly uploadDataKey = 'pageAssistant.uploadData';
  private readonly uploadTypeKey = 'pageAssistant.uploadType';
  private readonly aiModelKey = 'pageAssistant.aiModel';
  private readonly editPromptKey = 'pageAssistant.editPrompt';
  private readonly includeAlertRewriteExamplesKey =
    'pageAssistant.includeAlertRewriteExamples';
  private readonly useCompactAlertsPageContextKey =
    'pageAssistant.useCompactAlertsPageContext';
  private readonly useDescriptionStyleAsPrimaryIssueKey =
    'pageAssistant.useDescriptionStyleAsPrimaryIssue';

  // Upload source chosen in the drawer.
  private selectedUploadType = signal<'url' | 'paste' | 'word'>('url');
  getSelectedUploadType = computed(() => this.selectedUploadType());
  setUploadType(type: 'url' | 'paste' | 'word') {
    this.selectedUploadType.set(type);
    this.storage.saveData(this.uploadTypeKey, type);
  }

  // Primary AI model selected for the current session.
  private selectedAiModel = signal<AiModel>(AiModel.Gemini);
  getSelectedAiModel = computed(() => this.selectedAiModel());
  setSelectedAiModel(model: AiModel) {
    this.selectedAiModel.set(model);
    this.storage.saveData(this.aiModelKey, model);
  }

  // Edit-strength prefix injected ahead of non-alert prompts.
  private editPromptText = signal<string>('');
  getEditPromptText = computed(() => this.editPromptText());
  setEditPromptText(prompt: string) {
    this.editPromptText.set(prompt ?? '');
    this.storage.saveData(this.editPromptKey, prompt ?? '');
  }

  // Whether rewrite prompts should include selected good examples.
  private includeAlertRewriteExamples = signal<boolean>(true);
  getIncludeAlertRewriteExamples = computed(() =>
    this.includeAlertRewriteExamples(),
  );
  setIncludeAlertRewriteExamples(include: boolean) {
    this.includeAlertRewriteExamples.set(!!include);
    this.storage.saveData(this.includeAlertRewriteExamplesKey, String(!!include));
  }

  // Whether alert issue analysis uses compact extracted page context instead of raw HTML.
  private useCompactAlertsPageContext = signal<boolean>(true);
  getUseCompactAlertsPageContext = computed(() =>
    this.useCompactAlertsPageContext(),
  );
  setUseCompactAlertsPageContext(useCompact: boolean) {
    this.useCompactAlertsPageContext.set(!!useCompact);
    this.storage.saveData(this.useCompactAlertsPageContextKey, String(!!useCompact));
  }

  // Whether doormat analysis treats description style as a primary issue again.
  private useDescriptionStyleAsPrimaryIssue = signal<boolean>(false);
  getUseDescriptionStyleAsPrimaryIssue = computed(() =>
    this.useDescriptionStyleAsPrimaryIssue(),
  );
  setUseDescriptionStyleAsPrimaryIssue(useAsPrimary: boolean) {
    this.useDescriptionStyleAsPrimaryIssue.set(!!useAsPrimary);
    this.storage.saveData(
      this.useDescriptionStyleAsPrimaryIssueKey,
      String(!!useAsPrimary),
    );
  }

  // Working page data plus shallow history for undo.
  private uploadData = signal<Partial<UploadData> | null>(null);
  private originalUploadData: Partial<UploadData> | null = null; // reserved for future compare-with-original behavior
  private prevUploadData: Array<{
    data: Partial<UploadData> | null;
    recommendationReviewPending: boolean;
  }> = []; // undo stack
  private maxHistory = 20; // max undo depth
  private workingContentRevision = signal(0);
  private recommendationReviewPending = signal(false);
  getUploadData = computed(() => this.uploadData());
  getWorkingHtml = computed(() => {
    const data = this.uploadData();
    return data?.modifiedHtml || data?.originalHtml || '';
  });
  getWorkingContentRevision = computed(() => this.workingContentRevision());
  getRecommendationReviewPending = computed(() =>
    this.recommendationReviewPending(),
  );

  constructor() {
    // A hard reload should start a fresh assistant session rather than restoring stale page state.
    if (this.isPageReload()) {
      this.storage.removeData(this.uploadTypeKey);
      this.storage.removeData(this.aiModelKey);
      this.storage.removeData(this.uploadDataKey);
      this.storage.removeData(this.includeAlertRewriteExamplesKey);
      this.storage.removeData('pageAssistant.useJsonAlertsIssuesPrompt');
      this.storage.removeData(this.useCompactAlertsPageContextKey);
      this.storage.removeData(this.useDescriptionStyleAsPrimaryIssueKey);
      this.storage.removeData('pageAssistant.useSkillPrompts');
      return;
    }
    this.restoreState();
  }

  setUploadData(data: Partial<UploadData>) {
    this.uploadData.set(data);
    this.recommendationReviewPending.set(false);
    this.bumpWorkingContentRevision();
    this.persistUploadData();
  }

  mergeModifiedData(modified: ModifiedData): void {
    const current = this.uploadData() || {};
    this.uploadData.set({
      ...current,
      modifiedHtml: modified.modifiedHtml,
      modifiedUrl: modified.modifiedUrl,
    });
    this.bumpWorkingContentRevision();
    this.persistUploadData();
  }

  mergeOriginalData(original: OriginalData): void {
    const current = this.uploadData() || {};
    this.uploadData.set({
      ...current,
      originalHtml: original.originalHtml,
      originalUrl: original.originalUrl,
    });
    this.bumpWorkingContentRevision();
    this.persistUploadData();
  }

  setRecommendationReviewPending(pending: boolean): void {
    this.recommendationReviewPending.set(!!pending);
  }

  mergeFoundFlags(version: 'original' | 'modified', flags: { hidden: boolean; modal: boolean; dynamic: boolean }) {
    const current = this.uploadData() || {};
    const currentFound = current.found || {
      original: { hidden: true, modal: true, dynamic: true },
      modified: { hidden: true, modal: true, dynamic: true }
    };
    this.uploadData.set({
      ...current,
      found: {
        ...currentFound,
        [version]: {
          ...currentFound[version],
          ...flags
        }
      }
    });
    this.persistUploadData();
  }

  // Restore the most recent pre-edit snapshot.
  undoLastChange(): void {
    if (this.prevUploadData.length === 0) return;
    const lastState = this.prevUploadData.pop();
    if (!lastState) return;
    this.uploadData.set(lastState.data);
    this.recommendationReviewPending.set(
      lastState.recommendationReviewPending,
    );
    this.bumpWorkingContentRevision();
  }

  isUndoDisabled(): boolean { return this.prevUploadData.length === 0; }

  // Capture state before an accept/reject action mutates the working HTML.
  savePreviousUploadData(): void {
    const current = this.uploadData();
    this.prevUploadData.push({
      data: current ? structuredClone(current) : null,
      recommendationReviewPending: this.recommendationReviewPending(),
    });
    // Trim the oldest snapshot when the undo buffer exceeds its cap.
    if (this.prevUploadData.length > this.maxHistory) {
      this.prevUploadData.shift();
    }
  }

  // Clear both in-memory state and the persisted assistant session.
  resetUploadFlow(): void {
    this.selectedUploadType.set('url'); // default to URL
    this.selectedAiModel.set(AiModel.Gemini);
    this.editPromptText.set('');
    this.includeAlertRewriteExamples.set(true);
    this.useCompactAlertsPageContext.set(true);
    this.useDescriptionStyleAsPrimaryIssue.set(false);
    this.uploadData.set(null);
    this.recommendationReviewPending.set(false);
    this.bumpWorkingContentRevision();
    this.prevUploadData = [];
    this.storage.removeData(this.uploadTypeKey);
    this.storage.removeData(this.aiModelKey);
    this.storage.removeData(this.editPromptKey);
    this.storage.removeData(this.includeAlertRewriteExamplesKey);
    this.storage.removeData('pageAssistant.useJsonAlertsIssuesPrompt');
    this.storage.removeData(this.useCompactAlertsPageContextKey);
    this.storage.removeData(this.useDescriptionStyleAsPrimaryIssueKey);
    this.storage.removeData('pageAssistant.useSkillPrompts');
    this.storage.removeData(this.uploadDataKey);
  }

  private persistUploadData(): void {
    try {
      const data = this.uploadData();
      if (!data) {
        this.storage.removeData(this.uploadDataKey);
        return;
      }
      this.storage.saveData(this.uploadDataKey, JSON.stringify(data));
    } catch (err) {
      console.warn('Failed to persist upload state:', err);
    }
  }

  private restoreState(): void {
    // Each setting is restored independently so invalid/stale entries can be ignored safely.
    const storedType = this.storage.getData(this.uploadTypeKey);
    if (storedType === 'url' || storedType === 'paste' || storedType === 'word') {
      this.selectedUploadType.set(storedType);
    }

    const storedModel = this.storage.getData(this.aiModelKey);
    if (storedModel && Object.values(AiModel).includes(storedModel as AiModel)) {
      this.selectedAiModel.set(storedModel as AiModel);
    }

    const storedEditPrompt = this.storage.getData(this.editPromptKey);
    if (typeof storedEditPrompt === 'string') {
      this.editPromptText.set(storedEditPrompt);
    }

    const storedIncludeAlertRewriteExamples = this.storage.getData(
      this.includeAlertRewriteExamplesKey,
    );
    if (
      storedIncludeAlertRewriteExamples === 'true' ||
      storedIncludeAlertRewriteExamples === 'false'
    ) {
      this.includeAlertRewriteExamples.set(
        storedIncludeAlertRewriteExamples === 'true',
      );
    }

    const storedUseCompactAlertsPageContext = this.storage.getData(
      this.useCompactAlertsPageContextKey,
    );
    if (
      storedUseCompactAlertsPageContext === 'true' ||
      storedUseCompactAlertsPageContext === 'false'
    ) {
      this.useCompactAlertsPageContext.set(
        storedUseCompactAlertsPageContext === 'true',
      );
    }

    const storedUseDescriptionStyleAsPrimaryIssue = this.storage.getData(
      this.useDescriptionStyleAsPrimaryIssueKey,
    );
    if (
      storedUseDescriptionStyleAsPrimaryIssue === 'true' ||
      storedUseDescriptionStyleAsPrimaryIssue === 'false'
    ) {
      this.useDescriptionStyleAsPrimaryIssue.set(
        storedUseDescriptionStyleAsPrimaryIssue === 'true',
      );
    }

    const storedData = this.storage.getData(this.uploadDataKey);
    if (!storedData) return;
    try {
      const parsed = JSON.parse(storedData) as Partial<UploadData>;
      if (parsed && typeof parsed === 'object') {
        this.uploadData.set(parsed);
      }
    } catch (err) {
      console.warn('Failed to restore upload state:', err);
    }
  }

  private bumpWorkingContentRevision(): void {
    this.workingContentRevision.update((revision) => revision + 1);
  }

  private isPageReload(): boolean {
    try {
      const navEntries = performance.getEntriesByType('navigation');
      const nav = navEntries[0] as PerformanceNavigationTiming | undefined;
      if (nav?.type) {
        return nav.type === 'reload';
      }
      // Fallback for older browsers that still expose performance.navigation.
      const legacy = (performance as Performance & { navigation?: { type?: number } }).navigation;
      return legacy?.type === 1;
    } catch {
      return false;
    }
  }
}
