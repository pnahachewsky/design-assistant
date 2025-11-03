import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface FileProcessingResult {
  fileName: string;
  type: 'image' | 'pdf';
  status: 'pending' | 'processing' | 'completed' | 'error';
  data: {
    imageBase64: string | null;
    english: string | null;
    french: string | null;
    error: string | null;
  };
  showFullText: boolean;
}

export interface ProcessingState {
  results: Record<string, FileProcessingResult>;
  filesInProgress: number;
  processedCount: number;
  progressText: string;
  showProgressArea: boolean;
  selectedTranslationModel: string;
}

@Injectable({
  providedIn: 'root'
})
export class ImageAssistantStateService {
  private stateSubject = new BehaviorSubject<ProcessingState>({
    results: {},
    filesInProgress: 0,
    processedCount: 0,
    progressText: '',
    showProgressArea: false,
    selectedTranslationModel: 'anthropic/claude-3.5-sonnet' // Default to best translation model
  });

  public state$ = this.stateSubject.asObservable();

  getCurrentState(): ProcessingState {
    return this.stateSubject.value;
  }

  updateState(updates: Partial<ProcessingState>): void {
    const currentState = this.stateSubject.value;
    this.stateSubject.next({ ...currentState, ...updates });
  }

  addResult(fileName: string, result: FileProcessingResult): void {
    const currentState = this.stateSubject.value;
    const newResults = { ...currentState.results, [fileName]: result };
    this.updateState({ results: newResults });
  }

  updateResult(fileName: string, updates: Partial<FileProcessingResult>): void {
    const currentState = this.stateSubject.value;
    if (currentState.results[fileName]) {
      const updatedResult = { ...currentState.results[fileName], ...updates };
      const newResults = { ...currentState.results, [fileName]: updatedResult };
      this.updateState({ results: newResults });
    }
  }

  resetState(): void {
    const currentState = this.stateSubject.value;
    this.stateSubject.next({
      results: {},
      filesInProgress: 0,
      processedCount: 0,
      progressText: '',
      showProgressArea: false,
      selectedTranslationModel: currentState.selectedTranslationModel // Preserve selected model
    });
  }

  setSelectedTranslationModel(model: string): void {
    this.updateState({ selectedTranslationModel: model });
  }

  incrementProcessedCount(): void {
    const currentState = this.stateSubject.value;
    this.updateState({ processedCount: currentState.processedCount + 1 });
  }
}