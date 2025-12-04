import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { TabsModule } from 'primeng/tabs';
import { MessageService } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';
import { MetadataAssistantService, MetadataResult } from '../../services/metadata-assistant.service';
import { MetadataAssistantStateService, MetadataProcessingState, ComparisonResult } from '../../services/metadata-assistant-state.service';
import { ApiKeyService } from '../../services/api-key.service';
import { SharedModelSelectorComponent, ModelOption } from '../../components/model-selector/model-selector.component';
import { ProgressIndicatorComponent } from '../../components/progress-indicator/progress-indicator.component';
import { UrlInputComponent } from './components/url-input/url-input.component';
import { MetadataResultComponent } from './components/metadata-result/metadata-result.component';
import { CsvExportComponent } from './components/csv-export/csv-export.component';
import { DocumentUploadComponent } from './components/document-upload/document-upload.component';
import { MetadataComparisonComponent } from './components/metadata-comparison/metadata-comparison.component';

@Component({
  selector: 'ca-metadata-assistant',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ButtonModule,
    CardModule,
    MessageModule,
    ToastModule,
    TabsModule,
    SharedModelSelectorComponent,
    ProgressIndicatorComponent,
    UrlInputComponent,
    MetadataResultComponent,
    CsvExportComponent,
    DocumentUploadComponent,
    MetadataComparisonComponent
  ],
  providers: [MessageService],
  templateUrl: './metadata-assistant.component.html',
  styleUrls: ['./metadata-assistant.component.css']
})
export class MetadataAssistantComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  private translate = inject(TranslateService);
  private metadataService = inject(MetadataAssistantService);
  private stateService = inject(MetadataAssistantStateService);
  public apiKeyService = inject(ApiKeyService);
  private messageService = inject(MessageService);
  
  state: MetadataProcessingState = {
    isProcessing: false,
    currentUrl: '',
    currentStep: 'idle',
    progress: 0,
    totalUrls: 0,
    processedUrls: 0,
    results: [],
    error: null,
    selectedModel: 'qwen/qwen3-235b-a22b:free',
    selectedTranslationModel: 'anthropic/claude-3.5-sonnet',
    translateToFrench: false,
    documentProcessingIndex: null,
    documentMode: 'english-only',
    englishDocument: null,
    frenchDocument: null,
    comparisonResult: null
  };

  urlInput = '';
  urls: string[] = [];

  // Document tab properties
  selectedDocument: File | null = null;
  documentLanguage: 'en' | 'fr' | null = null;
  documentText = '';
  documentResults: MetadataResult[] = [];
  documentTranslateOption = false;
  documentProcessingIndex: number | null = null;
  activeTabIndex = '0';

  models: ModelOption[] = [
    {
      name: 'metadata.model.claudeSonnet45',
      value: 'anthropic/claude-sonnet-4.5',
      description: 'metadata.model.claudeSonnet45Description'
    },
    {
      name: 'metadata.model.gpt4oMini',
      value: 'openai/gpt-4o-mini',
      description: 'metadata.model.gpt4oMiniDescription'
    },
    {
      name: 'metadata.model.gemini25Pro',
      value: 'google/gemini-2.5-pro',
      description: 'metadata.model.gemini25ProDescription'
    },
    {
      name: 'metadata.model.qwen3235b',
      value: 'qwen/qwen3-235b-a22b:free',
      description: 'metadata.model.qwen3235bDescription'
    },
    {
      name: 'metadata.model.gemini20Flash',
      value: 'google/gemini-2.0-flash-exp:free',
      description: 'metadata.model.gemini20FlashDescription'
    },
    {
      name: 'metadata.model.llama33',
      value: 'meta-llama/llama-3.3-70b-instruct:free',
      description: 'metadata.model.llama33Description'
    },
    {
      name: 'metadata.model.gemma327b',
      value: 'google/gemma-3-27b-it:free',
      description: 'metadata.model.gemma327bDescription'
    }
  ];

  translationModels: ModelOption[] = [
    {
      name: 'metadata.translationModel.claude35Sonnet',
      value: 'anthropic/claude-3.5-sonnet',
      description: 'metadata.translationModel.claude35SonnetDescription'
    },
    {
      name: 'metadata.translationModel.gpt4oMini',
      value: 'openai/gpt-4o-mini',
      description: 'metadata.translationModel.gpt4oMiniDescription'
    },
    {
      name: 'metadata.translationModel.gemini20Flash',
      value: 'google/gemini-2.0-flash-exp:free',
      description: 'metadata.translationModel.gemini20FlashDescription'
    },
    {
      name: 'metadata.translationModel.llama33',
      value: 'meta-llama/llama-3.3-70b-instruct:free',
      description: 'metadata.translationModel.llama33Description'
    },
    {
      name: 'metadata.translationModel.gemma327b',
      value: 'google/gemma-3-27b-it:free',
      description: 'metadata.translationModel.gemma327bDescription'
    }
  ];

  ngOnInit(): void {
    this.stateService.state$
      .pipe(takeUntil(this.destroy$))
      .subscribe(state => {
        this.state = state;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onUrlsChange(urls: string[]): void {
    this.urls = urls;
  }

  onUrlInputChange(input: string): void {
    this.urlInput = input;
  }

  isValidUrl(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  onModelChange(model: string): void {
    this.stateService.setSelectedModel(model);
  }

  onTranslationModelChange(model: string): void {
    this.stateService.setSelectedTranslationModel(model);
  }

  onTranslateToggle(translate: boolean): void {
    this.stateService.setTranslateToFrench(translate);
  }

  onTabChange(index: string | number): void {
    this.activeTabIndex = String(index);
    // Reset currentStep to idle when switching tabs (unless currently processing)
    if (!this.state.isProcessing) {
      this.stateService.updateState({ currentStep: 'idle' });
    }
  }

  startProcessing(): void {
    if (!this.apiKeyService.hasApiKey$.value) {
      this.stateService.setError(this.translate.instant('metadata.errors.noApiKey'));
      return;
    }

    if (this.urls.length === 0) {
      this.stateService.setError(this.translate.instant('metadata.errors.noUrls'));
      return;
    }

    this.stateService.startProcessing(
      this.urls,
      this.state.selectedModel,
      this.state.translateToFrench
    );

    const fallbackModels = this.models
      .map(m => m.value)
      .filter(m => m !== this.state.selectedModel);

    this.metadataService.processUrls({
      urls: this.urls,
      model: this.state.selectedModel,
      translateToFrench: this.state.translateToFrench,
      translationModel: this.state.selectedTranslationModel,
      fallbackModels: fallbackModels
    }).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (results) => {
        results.forEach(result => {
          this.stateService.addResult(result);

          if (result.fallbackUsed && result.modelUsed) {
            this.messageService.add({
              severity: 'info',
              summary: this.translate.instant('metadata.fallback.usingModel', { model: this.getModelDisplayName(result.modelUsed) }),
              life: 4000
            });
          }
        });
      },
      error: (error) => {
        console.error('Processing error:', error);
        let errorMessage = error.message || this.translate.instant('metadata.errors.processingFailed');

        if (error.message?.includes('All models failed')) {
          errorMessage = this.translate.instant('metadata.errors.allModelsFailed');
        }
        
        this.stateService.setError(errorMessage);
      },
      complete: () => {
        this.stateService.completeProcessing();
      }
    });
  }

  reset(): void {
    this.stateService.reset();
    this.urlInput = '';
    this.urls = [];
  }

  canProcess(): boolean {
    return this.apiKeyService.hasApiKey$.value && this.urls.length > 0 && !this.state.isProcessing;
  }

  getProgressText(): string {
    if (this.state.currentStep === 'scraping') {
      return this.translate.instant('metadata.progress.scrapingContent');
    } else if (this.state.currentStep === 'generating') {
      return this.translate.instant('metadata.progress.generatingMetadata');
    } else if (this.state.currentStep === 'translating') {
      return this.translate.instant('metadata.progress.translatingContent');
    } else if (this.state.currentStep === 'extracting-text') {
      return this.translate.instant('metadata.progress.extractingText');
    } else if (this.state.currentStep === 'processing-document') {
      return this.translate.instant('metadata.progress.processingDocument');
    } else if (this.state.currentStep === 'evaluating') {
      return this.translate.instant('metadata.progress.evaluatingMetadata');
    } else if (this.state.currentStep === 'comparing') {
      return this.translate.instant('metadata.progress.comparingDocuments');
    } else if (this.state.currentStep === 'complete') {
      return this.translate.instant('metadata.progress.completeTitle');
    }
    return '';
  }

  shouldShowTranslationModelSelector(): boolean {
    return (this.state.documentMode === 'english-only' && this.documentTranslateOption) ||
           (this.state.documentMode === 'french-only' && this.documentTranslateOption) ||
           this.state.documentMode === 'both';
  }

  getTranslationModelSelectorTitle(): string {
    if (this.state.documentMode === 'french-only' && this.documentTranslateOption) {
      return 'metadata.translationModelSelector.titleToEnglish';
    }
    return 'metadata.translationModelSelector.title';
  }

  private getModelDisplayName(modelValue: string): string {
    const model = this.models.find(m => m.value === modelValue);
    return model ? model.name : modelValue;
  }

  onDocumentSelected(file: File, resultIndex: number): void {
    if (!this.apiKeyService.hasApiKey$.value) {
      this.stateService.setError(this.translate.instant('metadata.errors.noApiKey'));
      return;
    }

    const result = this.state.results[resultIndex];
    if (!result.frenchTranslatedDescription || !result.frenchTranslatedKeywords) {
      this.messageService.add({
        severity: 'warn',
        summary: this.translate.instant('metadata.document.errors.noTranslation'),
        life: 4000
      });
      return;
    }

    this.stateService.setDocumentProcessingIndex(resultIndex);
    this.stateService.updateState({
      isProcessing: true,
      currentStep: 'processing-document'
    });

    this.metadataService.processDocument(file).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (documentMetadata) => {
        this.stateService.updateResultWithDocumentMetadata(resultIndex, documentMetadata);
        this.stateService.updateState({ currentStep: 'evaluating' });
        this.evaluateMetadata(resultIndex, documentMetadata);
      },
      error: (error) => {
        console.error('Document processing error:', error);
        this.stateService.updateState({
          isProcessing: false,
          documentProcessingIndex: null,
          currentStep: 'complete'
        });
        this.messageService.add({
          severity: 'error',
          summary: this.translate.instant('metadata.document.errors.processingFailed'),
          detail: error.message,
          life: 5000
        });
      }
    });
  }

  private evaluateMetadata(resultIndex: number, documentMetadata: { description: string, keywords: string }): void {
    const result = this.state.results[resultIndex];
    const translatedMetadata = {
      description: result.frenchTranslatedDescription!,
      keywords: result.frenchTranslatedKeywords!
    };

    this.metadataService.evaluateMetadata(translatedMetadata, documentMetadata).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (evaluationResult) => {
        this.stateService.updateResultWithEvaluation(resultIndex, evaluationResult);
        this.stateService.updateState({
          isProcessing: false
        });
        this.messageService.add({
          severity: 'success',
          summary: this.translate.instant('metadata.document.evaluationComplete'),
          life: 4000
        });
      },
      error: (error) => {
        console.error('Evaluation error:', error);
        this.stateService.updateState({
          isProcessing: false,
          documentProcessingIndex: null,
          currentStep: 'complete'
        });
        this.messageService.add({
          severity: 'error',
          summary: this.translate.instant('metadata.document.errors.evaluationFailed'),
          detail: error.message,
          life: 5000
        });
      }
    });
  }

  onEnglishDocumentSelected(file: File): void {
    this.selectedDocument = file;
    this.documentLanguage = null;
    this.documentText = '';
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onFrenchDocumentSelected(_file: File): void {
    // Event handler for French document selection - currently unused
    // File is stored via state service in the Document Upload tab
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onDocumentModeChanged(_mode: string): void {
    // Event handler for mode changes - resets document state
    // Mode parameter not used as state is managed through state service
    this.selectedDocument = null;
    this.documentLanguage = null;
    this.documentText = '';
    this.documentResults = [];
    this.documentTranslateOption = false;
  }

  onDocumentTranslateOptionChanged(shouldTranslate: boolean): void {
    this.documentTranslateOption = shouldTranslate;
  }

  onDocumentUploadEvaluation(event: { file: File, index: number }): void {
    const { file, index } = event;

    if (!this.apiKeyService.hasApiKey$.value) {
      this.messageService.add({
        severity: 'error',
        summary: this.translate.instant('metadata.errors.noApiKey'),
        life: 4000
      });
      return;
    }

    const result = this.documentResults[index];

    // Check if translation exists based on document mode
    if (this.state.documentMode === 'english-only') {
      if (!result.frenchTranslatedDescription || !result.frenchTranslatedKeywords) {
        this.messageService.add({
          severity: 'warn',
          summary: this.translate.instant('metadata.document.errors.noTranslation'),
          detail: this.translate.instant('metadata.document.errors.translationRequired'),
          life: 4000
        });
        return;
      }
    } else if (this.state.documentMode === 'french-only') {
      if (!result.englishTranslatedDescription || !result.englishTranslatedKeywords) {
        this.messageService.add({
          severity: 'warn',
          summary: this.translate.instant('metadata.document.errors.noTranslation'),
          detail: this.translate.instant('metadata.document.errors.translationRequired'),
          life: 4000
        });
        return;
      }
    }

    // Set processing state
    this.documentProcessingIndex = index;
    this.stateService.updateState({
      isProcessing: true,
      currentStep: 'processing-document'
    });

    // Process the uploaded document to extract metadata
    this.metadataService.processDocument(file).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (documentMetadata) => {
        this.stateService.updateState({ currentStep: 'evaluating' });
        this.evaluateDocumentUploadMetadata(index, documentMetadata);
      },
      error: (error) => {
        console.error('Document processing error:', error);
        this.documentProcessingIndex = null;
        this.stateService.updateState({
          isProcessing: false,
          currentStep: 'complete'
        });
        this.messageService.add({
          severity: 'error',
          summary: this.translate.instant('metadata.document.errors.processingFailed'),
          detail: error.message,
          life: 5000
        });
      }
    });
  }

  private evaluateDocumentUploadMetadata(resultIndex: number, documentMetadata: { description: string, keywords: string }): void {
    const result = this.documentResults[resultIndex];

    // Determine which direction to evaluate based on document mode
    if (this.state.documentMode === 'french-only') {
      // French document with English translation - evaluate English translation vs English reference
      const translatedMetadata = {
        description: result.englishTranslatedDescription!,
        keywords: result.englishTranslatedKeywords!
      };

      this.metadataService.evaluateMetadataEnglish(translatedMetadata, documentMetadata).pipe(
        takeUntil(this.destroy$)
      ).subscribe({
        next: (evaluationResult) => {
          // Update the document result with evaluation
          this.documentResults[resultIndex] = {
            ...result,
            documentMetadata,
            evaluationResult
          };

          this.documentProcessingIndex = null;
          this.stateService.updateState({
            isProcessing: false,
            currentStep: 'complete'
          });

          this.messageService.add({
            severity: 'success',
            summary: this.translate.instant('metadata.progress.completeTitle'),
            detail: this.translate.instant('metadata.document.evaluationComplete'),
            life: 4000
          });
        },
        error: (error) => {
          console.error('Evaluation error:', error);
          this.documentProcessingIndex = null;
          this.stateService.updateState({
            isProcessing: false,
            currentStep: 'complete'
          });
          this.messageService.add({
            severity: 'error',
            summary: this.translate.instant('metadata.errors.evaluationFailed'),
            detail: error.message,
            life: 5000
          });
        }
      });
    } else {
      // English document with French translation - evaluate French translation vs French reference
      const translatedMetadata = {
        description: result.frenchTranslatedDescription!,
        keywords: result.frenchTranslatedKeywords!
      };

      this.metadataService.evaluateMetadata(translatedMetadata, documentMetadata).pipe(
        takeUntil(this.destroy$)
      ).subscribe({
        next: (evaluationResult) => {
          // Update the document result with evaluation
          this.documentResults[resultIndex] = {
            ...result,
            documentMetadata,
            evaluationResult
          };

          this.documentProcessingIndex = null;
          this.stateService.updateState({
            isProcessing: false,
            currentStep: 'complete'
          });

          this.messageService.add({
            severity: 'success',
            summary: this.translate.instant('metadata.progress.completeTitle'),
            detail: this.translate.instant('metadata.document.evaluationComplete'),
            life: 4000
          });
        },
        error: (error) => {
          console.error('Evaluation error:', error);
          this.documentProcessingIndex = null;
          this.stateService.updateState({
            isProcessing: false,
            currentStep: 'complete'
          });
          this.messageService.add({
            severity: 'error',
            summary: this.translate.instant('metadata.errors.evaluationFailed'),
            detail: error.message,
            life: 5000
          });
        }
      });
    }
  }

  // Keep old handler for compatibility
  onDocumentFileSelected(file: File): void {
    this.selectedDocument = file;
    this.documentLanguage = null;
    this.documentText = '';
  }

  startDocumentProcessing(): void {
    if (!this.apiKeyService.hasApiKey$.value) {
      this.stateService.setError(this.translate.instant('metadata.errors.noApiKey'));
      return;
    }

    const mode = this.state.documentMode;

    // Validate files are present for the selected mode
    if (mode === 'english-only' && !this.state.englishDocument) {
      this.stateService.setError(this.translate.instant('metadata.document.errors.processingFailed'));
      return;
    }
    if (mode === 'french-only' && !this.state.frenchDocument) {
      this.stateService.setError(this.translate.instant('metadata.document.errors.processingFailed'));
      return;
    }
    if (mode === 'both' && (!this.state.englishDocument || !this.state.frenchDocument)) {
      this.stateService.setError(this.translate.instant('metadata.document.errors.processingFailed'));
      return;
    }

    this.stateService.updateState({
      isProcessing: true,
      currentStep: 'extracting-text',
      totalUrls: 1,
      processedUrls: 0
    });

    // Route to appropriate processing method based on mode
    switch (mode) {
      case 'english-only':
        this.processEnglishOnly();
        break;
      case 'french-only':
        this.processFrenchOnly();
        break;
      case 'both':
        this.processBothDocuments();
        break;
    }
  }

  private processEnglishOnly(): void {
    const englishFile = this.state.englishDocument!;

    this.stateService.updateState({
      currentUrl: englishFile.name,
      currentStep: 'generating'
    });

    if (this.documentTranslateOption) {
      // Process with translation to French
      this.metadataService.processEnglishDocument(englishFile, this.state.selectedModel, this.state.selectedTranslationModel).pipe(
        takeUntil(this.destroy$)
      ).subscribe({
        next: (result) => {
          this.documentLanguage = 'en';
          this.documentResults = [{
            url: englishFile.name,
            scrapedContent: '',
            metaDescription: result.englishMetadata.description,
            metaKeywords: result.englishMetadata.keywords,
            frenchTranslatedDescription: result.frenchTranslation.description,
            frenchTranslatedKeywords: result.frenchTranslation.keywords,
            language: 'en',
            modelUsed: this.state.selectedModel,
            fallbackUsed: false
          }];

          this.stateService.updateState({
            isProcessing: false,
            currentStep: 'complete',
            processedUrls: 1
          });

          this.messageService.add({
            severity: 'success',
            summary: this.translate.instant('metadata.progress.completeTitle'),
            detail: this.translate.instant('metadata.document.languageDetected') + ': ' +
                    this.translate.instant('common.language.english'),
            life: 4000
          });
        },
        error: (error) => {
          this.handleDocumentProcessingError(error);
        }
      });
    } else {
      // Process without translation - generate English metadata only
      this.metadataService.processDocumentForMetadata(englishFile, this.state.selectedModel).pipe(
        takeUntil(this.destroy$)
      ).subscribe({
        next: (result) => {
          this.documentLanguage = 'en';
          this.documentResults = [{
            url: englishFile.name,
            scrapedContent: '',
            metaDescription: result.metadata.metaDescription,
            metaKeywords: result.metadata.metaKeywords,
            language: 'en',
            modelUsed: this.state.selectedModel,
            fallbackUsed: false
          }];

          this.stateService.updateState({
            isProcessing: false,
            currentStep: 'complete',
            processedUrls: 1
          });

          this.messageService.add({
            severity: 'success',
            summary: this.translate.instant('metadata.progress.completeTitle'),
            detail: this.translate.instant('metadata.document.languageDetected') + ': ' +
                    this.translate.instant('common.language.english'),
            life: 4000
          });
        },
        error: (error) => {
          this.handleDocumentProcessingError(error);
        }
      });
    }
  }

  private processFrenchOnly(): void {
    const frenchFile = this.state.frenchDocument!;

    this.stateService.updateState({
      currentUrl: frenchFile.name,
      currentStep: 'generating'
    });

    if (this.documentTranslateOption) {
      // Process with translation to English
      this.metadataService.processFrenchDocumentWithEnglishTranslation(frenchFile, this.state.selectedModel, this.state.selectedTranslationModel).pipe(
        takeUntil(this.destroy$)
      ).subscribe({
        next: (result) => {
          this.documentLanguage = 'fr';
          this.documentResults = [{
            url: frenchFile.name,
            scrapedContent: '',
            metaDescription: result.frenchMetadata.description,
            metaKeywords: result.frenchMetadata.keywords,
            englishTranslatedDescription: result.englishTranslation.description,
            englishTranslatedKeywords: result.englishTranslation.keywords,
            language: 'fr',
            modelUsed: this.state.selectedModel,
            fallbackUsed: false
          }];

          this.stateService.updateState({
            isProcessing: false,
            currentStep: 'complete',
            processedUrls: 1
          });

          this.messageService.add({
            severity: 'success',
            summary: this.translate.instant('metadata.progress.completeTitle'),
            detail: this.translate.instant('metadata.document.languageDetected') + ': ' +
                    this.translate.instant('common.language.french'),
            life: 4000
          });
        },
        error: (error) => {
          this.handleDocumentProcessingError(error);
        }
      });
    } else {
      // Process without translation - generate French metadata only
      this.metadataService.processDocumentForMetadata(frenchFile, this.state.selectedModel).pipe(
        takeUntil(this.destroy$)
      ).subscribe({
        next: (result) => {
          this.documentLanguage = 'fr';
          this.documentResults = [{
            url: frenchFile.name,
            scrapedContent: '',
            metaDescription: result.metadata.metaDescription,
            metaKeywords: result.metadata.metaKeywords,
            language: 'fr',
            modelUsed: result.metadata.modelUsed || this.state.selectedModel,
            fallbackUsed: false
          }];

          this.stateService.updateState({
            isProcessing: false,
            currentStep: 'complete',
            processedUrls: 1
          });

          this.messageService.add({
            severity: 'success',
            summary: this.translate.instant('metadata.progress.completeTitle'),
            detail: this.translate.instant('metadata.document.languageDetected') + ': ' +
                    this.translate.instant('common.language.french'),
            life: 4000
          });
        },
        error: (error) => {
          this.handleDocumentProcessingError(error);
        }
      });
    }
  }

  private processBothDocuments(): void {
    const englishFile = this.state.englishDocument!;
    const frenchFile = this.state.frenchDocument!;

    this.stateService.updateState({
      currentUrl: `${englishFile.name}, ${frenchFile.name}`,
      currentStep: 'comparing'
    });

    this.metadataService.processBothDocuments(
      englishFile,
      frenchFile,
      this.state.selectedModel
    ).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (result) => {
        this.documentLanguage = 'en';

        // Store comparison result in state
        const comparisonResult: ComparisonResult = {
          englishMetadata: {
            description: result.englishMetadata.description,
            keywords: result.englishMetadata.keywords
          },
          autoTranslatedFrench: {
            description: result.autoTranslatedFrench.description,
            keywords: result.autoTranslatedFrench.keywords
          },
          frenchDocMetadata: {
            description: result.frenchDocMetadata.description,
            keywords: result.frenchDocMetadata.keywords
          },
          suggested: {
            description: result.comparison.suggestedDescription,
            keywords: result.comparison.suggestedKeywords
          },
          rationale: result.comparison.rationale,
          rationaleEnglish: result.comparison.rationaleEnglish
        };

        this.stateService.setComparisonResult(comparisonResult);

        // Also store as regular result for display
        this.documentResults = [{
          url: `${englishFile.name} & ${frenchFile.name}`,
          scrapedContent: '',
          metaDescription: result.englishMetadata.description,
          metaKeywords: result.englishMetadata.keywords,
          frenchTranslatedDescription: result.autoTranslatedFrench.description,
          frenchTranslatedKeywords: result.autoTranslatedFrench.keywords,
          language: 'en',
          modelUsed: this.state.selectedModel,
          fallbackUsed: false
        }];

        this.stateService.updateState({
          isProcessing: false,
          currentStep: 'complete',
          processedUrls: 1
        });

        this.messageService.add({
          severity: 'success',
          summary: this.translate.instant('metadata.progress.completeTitle'),
          detail: this.translate.instant('metadata.comparison.title'),
          life: 4000
        });
      },
      error: (error) => {
        this.handleDocumentProcessingError(error);
      }
    });
  }

  private handleDocumentProcessingError(error: Error): void {
    console.error('Document processing error:', error);
    this.stateService.updateState({
      isProcessing: false,
      currentStep: 'idle'
    });
    this.messageService.add({
      severity: 'error',
      summary: this.translate.instant('metadata.document.errors.processingFailed'),
      detail: error.message,
      life: 5000
    });
  }

  resetDocumentTab(): void {
    this.selectedDocument = null;
    this.documentLanguage = null;
    this.documentText = '';
    this.documentResults = [];
    this.stateService.clearDocumentData();
    this.stateService.updateState({
      isProcessing: false,
      currentStep: 'idle',
      error: null
    });
  }

  canProcessDocument(): boolean {
    if (!this.apiKeyService.hasApiKey$.value || this.state.isProcessing) {
      return false;
    }

    const mode = this.state.documentMode;

    switch (mode) {
      case 'english-only':
        return this.state.englishDocument !== null;
      case 'french-only':
        return this.state.frenchDocument !== null;
      case 'both':
        return this.state.englishDocument !== null && this.state.frenchDocument !== null;
      default:
        return false;
    }
  }
}