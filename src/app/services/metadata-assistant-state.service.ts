import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MetadataResult } from './metadata-assistant.service';

export type DocumentMode = 'english-only' | 'french-only' | 'both';

export interface ComparisonResult {
  englishMetadata: {
    description: string;
    keywords: string;
  };
  autoTranslatedFrench: {
    description: string;
    keywords: string;
  };
  frenchDocMetadata: {
    description: string;
    keywords: string;
  };
  suggested: {
    description: string;
    keywords: string;
  };
  rationale: string;
}

export interface MetadataProcessingState {
  isProcessing: boolean;
  currentUrl: string;
  currentStep: 'idle' | 'scraping' | 'generating' | 'translating' | 'extracting-text' | 'processing-document' | 'evaluating' | 'comparing' | 'complete';
  progress: number;
  totalUrls: number;
  processedUrls: number;
  results: MetadataResult[];
  error: string | null;
  selectedModel: string;
  selectedTranslationModel: string;
  translateToFrench: boolean;
  documentProcessingIndex: number | null;
  documentMode: DocumentMode;
  englishDocument: File | null;
  frenchDocument: File | null;
  comparisonResult: ComparisonResult | null;
}

@Injectable({
  providedIn: 'root'
})
export class MetadataAssistantStateService {
  private readonly initialState: MetadataProcessingState = {
    isProcessing: false,
    currentUrl: '',
    currentStep: 'idle',
    progress: 0,
    totalUrls: 0,
    processedUrls: 0,
    results: [],
    error: null,
    selectedModel: 'openai/gpt-oss-20b:free',
    selectedTranslationModel: 'anthropic/claude-3.5-sonnet', // Default to best translation model
    translateToFrench: false,
    documentProcessingIndex: null,
    documentMode: 'english-only',
    englishDocument: null,
    frenchDocument: null,
    comparisonResult: null
  };

  private stateSubject = new BehaviorSubject<MetadataProcessingState>(this.initialState);
  public state$: Observable<MetadataProcessingState> = this.stateSubject.asObservable();

  getState(): MetadataProcessingState {
    return this.stateSubject.value;
  }

  updateState(updates: Partial<MetadataProcessingState>): void {
    const currentState = this.getState();
    this.stateSubject.next({ ...currentState, ...updates });
  }

  startProcessing(urls: string[], model: string, translateToFrench: boolean): void {
    this.updateState({
      isProcessing: true,
      currentStep: 'scraping',
      progress: 0,
      totalUrls: urls.length,
      processedUrls: 0,
      results: [],
      error: null,
      selectedModel: model,
      translateToFrench: translateToFrench
    });
  }

  updateProgress(currentUrl: string, step: 'scraping' | 'generating' | 'translating'): void {
    const state = this.getState();
    const stepProgress = step === 'scraping' ? 0.3 : step === 'generating' ? 0.6 : 0.9;
    const urlProgress = state.processedUrls / Math.max(state.totalUrls, 1);
    const currentUrlProgress = stepProgress / Math.max(state.totalUrls, 1);
    
    this.updateState({
      currentUrl,
      currentStep: step,
      progress: Math.min((urlProgress + currentUrlProgress) * 100, 100)
    });
  }

  addResult(result: MetadataResult): void {
    const state = this.getState();
    this.updateState({
      results: [...state.results, result],
      processedUrls: state.processedUrls + 1,
      progress: ((state.processedUrls + 1) / Math.max(state.totalUrls, 1)) * 100
    });
  }

  completeProcessing(): void {
    this.updateState({
      isProcessing: false,
      currentStep: 'complete',
      progress: 100,
      currentUrl: ''
    });
  }

  setError(error: string): void {
    this.updateState({
      isProcessing: false,
      currentStep: 'idle',
      error
    });
  }

  reset(): void {
    this.stateSubject.next(this.initialState);
  }

  setSelectedModel(model: string): void {
    this.updateState({ selectedModel: model });
  }

  setSelectedTranslationModel(model: string): void {
    this.updateState({ selectedTranslationModel: model });
  }

  setTranslateToFrench(translate: boolean): void {
    this.updateState({ translateToFrench: translate });
  }

  clearResults(): void {
    this.updateState({
      results: [],
      progress: 0,
      processedUrls: 0,
      totalUrls: 0,
      currentStep: 'idle',
      error: null
    });
  }

  // Document processing methods
  updateResultWithDocumentMetadata(index: number, documentMetadata: { description: string, keywords: string }): void {
    const state = this.getState();
    const updatedResults = [...state.results];
    if (updatedResults[index]) {
      updatedResults[index] = {
        ...updatedResults[index],
        documentMetadata
      };
      this.updateState({ results: updatedResults });
    }
  }

  updateResultWithEvaluation(index: number, evaluationResult: { suggestedDescription: string, suggestedKeywords: string, rationale: string }): void {
    const state = this.getState();
    const updatedResults = [...state.results];
    if (updatedResults[index]) {
      updatedResults[index] = {
        ...updatedResults[index],
        evaluationResult
      };
      this.updateState({
        results: updatedResults,
        documentProcessingIndex: null,
        currentStep: 'complete'
      });
    }
  }

  setDocumentProcessingIndex(index: number | null): void {
    this.updateState({ documentProcessingIndex: index });
  }

  // New document mode management methods
  setDocumentMode(mode: DocumentMode): void {
    this.updateState({
      documentMode: mode,
      englishDocument: null,
      frenchDocument: null,
      comparisonResult: null
    });
  }

  setEnglishDocument(file: File | null): void {
    this.updateState({ englishDocument: file });
  }

  setFrenchDocument(file: File | null): void {
    this.updateState({ frenchDocument: file });
  }

  setComparisonResult(result: ComparisonResult | null): void {
    this.updateState({ comparisonResult: result });
  }

  clearDocumentData(): void {
    this.updateState({
      documentMode: 'english-only',
      englishDocument: null,
      frenchDocument: null,
      comparisonResult: null
    });
  }
}