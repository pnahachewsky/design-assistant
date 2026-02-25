import { Injectable, signal, computed, inject } from '@angular/core';
import { UploadData, ModifiedData, OriginalData, AiModel, AlertRewriteMode } from '../data/data.model'
import { LocalStorageService } from '../../../services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UploadStateService {
  private storage = inject(LocalStorageService);
  private readonly uploadDataKey = 'pageAssistant.uploadData';
  private readonly uploadTypeKey = 'pageAssistant.uploadType';
  private readonly aiModelKey = 'pageAssistant.aiModel';
  private readonly editPromptKey = 'pageAssistant.editPrompt';
  private readonly alertRewriteModeKey = 'pageAssistant.alertRewriteMode';

  //Upload type
  private selectedUploadType = signal<'url' | 'paste' | 'word'>('url');
  getSelectedUploadType = computed(() => this.selectedUploadType());
  setUploadType(type: 'url' | 'paste' | 'word') {
    this.selectedUploadType.set(type);
    this.storage.saveData(this.uploadTypeKey, type);
  }

  //AI model
  private selectedAiModel = signal<AiModel>(AiModel.Nemotron);
  getSelectedAiModel = computed(() => this.selectedAiModel());
  setSelectedAiModel(model: AiModel) {
    this.selectedAiModel.set(model);
    this.storage.saveData(this.aiModelKey, model);
  }

  //AI edit prompt prefix (slider)
  private editPromptText = signal<string>('');
  getEditPromptText = computed(() => this.editPromptText());
  setEditPromptText(prompt: string) {
    this.editPromptText.set(prompt ?? '');
    this.storage.saveData(this.editPromptKey, prompt ?? '');
  }

  //Alert rewrite mode (A->B vs good-results-only)
  private selectedAlertRewriteMode = signal<AlertRewriteMode>(AlertRewriteMode.AB);
  getAlertRewriteMode = computed(() => this.selectedAlertRewriteMode());
  setAlertRewriteMode(mode: AlertRewriteMode) {
    this.selectedAlertRewriteMode.set(mode);
    this.storage.saveData(this.alertRewriteModeKey, mode);
  }

  //Upload data
  private uploadData = signal<Partial<UploadData> | null>(null);
  private originalUploadData: Partial<UploadData> | null = null; //for the compare with original button (not implemented yet)
  private prevUploadData: (Partial<UploadData> | null)[] = []; //for the undo button
  private maxHistory = 20; //max size of undo array
  getUploadData = computed(() => this.uploadData());

  constructor() {
    if (this.isPageReload()) {
      this.storage.removeData(this.uploadTypeKey);
      this.storage.removeData(this.aiModelKey);
      this.storage.removeData(this.uploadDataKey);
      return;
    }
    this.restoreState();
  }

  setUploadData(data: Partial<UploadData>) {
    this.uploadData.set(data);
    this.persistUploadData();
  }

  mergeModifiedData(modified: ModifiedData): void {
    const current = this.uploadData() || {};
    this.uploadData.set({
      ...current,
      modifiedHtml: modified.modifiedHtml,
      modifiedUrl: modified.modifiedUrl,
    });
    this.persistUploadData();
  }

  mergeOriginalData(original: OriginalData): void {
    const current = this.uploadData() || {};
    this.uploadData.set({
      ...current,
      originalHtml: original.originalHtml,
      originalUrl: original.originalUrl,
    });
    this.persistUploadData();
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

  // Restore the previous state (for undo button)
  undoLastChange(): void {
    if (this.prevUploadData.length === 0) return;
    const lastState = this.prevUploadData.pop() ?? null;
    this.uploadData.set(lastState);
  }

  isUndoDisabled(): boolean { return this.prevUploadData.length === 0; }

  // Save a copy of uploadData before overwriting
  savePreviousUploadData(): void {
    const current = this.uploadData();
    this.prevUploadData.push(current ? structuredClone(current) : null);
    // Remove oldest item if array gets too big
    if (this.prevUploadData.length > this.maxHistory) {
      this.prevUploadData.shift();
    }
  }

  //Reset
  resetUploadFlow(): void {
    this.selectedUploadType.set('url'); // default to URL
    this.selectedAiModel.set(AiModel.Nemotron);
    this.editPromptText.set('');
    this.selectedAlertRewriteMode.set(AlertRewriteMode.AB);
    this.uploadData.set(null);
    this.prevUploadData = [];
    this.storage.removeData(this.uploadTypeKey);
    this.storage.removeData(this.aiModelKey);
    this.storage.removeData(this.editPromptKey);
    this.storage.removeData(this.alertRewriteModeKey);
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

    const storedAlertRewriteMode = this.storage.getData(this.alertRewriteModeKey);
    if (
      storedAlertRewriteMode &&
      Object.values(AlertRewriteMode).includes(
        storedAlertRewriteMode as AlertRewriteMode,
      )
    ) {
      this.selectedAlertRewriteMode.set(storedAlertRewriteMode as AlertRewriteMode);
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

  private isPageReload(): boolean {
    try {
      const navEntries = performance.getEntriesByType('navigation');
      const nav = navEntries[0] as PerformanceNavigationTiming | undefined;
      if (nav?.type) {
        return nav.type === 'reload';
      }
      // Fallback for older browsers
      const legacy = (performance as Performance & { navigation?: { type?: number } }).navigation;
      return legacy?.type === 1;
    } catch {
      return false;
    }
  }
}
