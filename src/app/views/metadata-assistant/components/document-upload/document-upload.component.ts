import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { MetadataAssistantStateService, DocumentMode } from '../../../../services/metadata-assistant-state.service';

@Component({
  selector: 'ca-document-upload',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    CardModule,
    ButtonModule,
    RadioButtonModule,
    CheckboxModule
  ],
  templateUrl: './document-upload.component.html',
  styleUrls: ['./document-upload.component.css']
})
export class DocumentUploadComponent {
  @Input() disabled = false;
  @Input() simplifiedMode = false; // When true, hides mode selection and forces french-only
  @Output() englishFileSelected = new EventEmitter<File>();
  @Output() frenchFileSelected = new EventEmitter<File>();
  @Output() modeChanged = new EventEmitter<DocumentMode>();
  @Output() translateOptionChanged = new EventEmitter<boolean>();

  private stateService = inject(MetadataAssistantStateService);

  selectedMode: DocumentMode = 'english-only';
  englishFile: File | null = null;
  frenchFile: File | null = null;
  isDraggingEnglish = false;
  isDraggingFrench = false;
  translateToOtherLanguage = false;

  onModeChange(): void {
    this.clearFiles();
    this.translateToOtherLanguage = false; // Reset translation option when mode changes
    this.modeChanged.emit(this.selectedMode);
    this.stateService.setDocumentMode(this.selectedMode);
  }

  onTranslateOptionChange(): void {
    this.translateOptionChanged.emit(this.translateToOtherLanguage);
  }

  shouldShowTranslateOption(): boolean {
    return !this.simplifiedMode && (this.selectedMode === 'english-only' || this.selectedMode === 'french-only');
  }

  getTranslateLabel(): string {
    return this.selectedMode === 'english-only' ? 'metadata.document.translateToFrench' : 'metadata.document.translateToEnglish';
  }

  getFrenchUploadLabel(): string {
    if (this.selectedMode === 'both') {
      return 'metadata.document.uploadFrench';
    } else if (this.selectedMode === 'english-only' && this.translateToOtherLanguage) {
      return 'metadata.document.uploadFrenchOptional';
    } else {
      return 'metadata.document.uploadEnglish';
    }
  }

  getEnglishUploadLabel(): string {
    if (this.selectedMode === 'both') {
      return 'metadata.document.uploadEnglish';
    } else if (this.selectedMode === 'french-only' && this.translateToOtherLanguage) {
      return 'metadata.document.uploadEnglishOptional';
    } else {
      return 'metadata.document.uploadEnglish';
    }
  }

  // English file handlers
  onEnglishFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      if (this.isDocx(file)) {
        this.englishFile = file;
        this.englishFileSelected.emit(this.englishFile);
        this.stateService.setEnglishDocument(this.englishFile);
      }
    }
    input.value = '';
  }

  onEnglishFileInputClick(event: Event): void {
    const input = event.target as HTMLInputElement;
    input.value = '';
  }

  onEnglishDragOver(event: DragEvent): void {
    event.preventDefault();
    this.isDraggingEnglish = true;
  }

  onEnglishDragLeave(event: DragEvent): void {
    event.preventDefault();
    this.isDraggingEnglish = false;
  }

  onEnglishDrop(event: DragEvent): void {
    event.preventDefault();
    this.isDraggingEnglish = false;

    if (event.dataTransfer?.files.length) {
      const droppedFile = event.dataTransfer.files[0];
      if (this.isDocx(droppedFile)) {
        this.englishFile = droppedFile;
        this.englishFileSelected.emit(this.englishFile);
        this.stateService.setEnglishDocument(this.englishFile);
      }
    }
  }

  clearEnglishFile(): void {
    this.englishFile = null;
    this.stateService.setEnglishDocument(null);
  }

  // French file handlers
  onFrenchFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      if (this.isDocx(file)) {
        this.frenchFile = file;
        this.frenchFileSelected.emit(this.frenchFile);
        this.stateService.setFrenchDocument(this.frenchFile);
      }
    }
    input.value = '';
  }

  onFrenchFileInputClick(event: Event): void {
    const input = event.target as HTMLInputElement;
    input.value = '';
  }

  onFrenchDragOver(event: DragEvent): void {
    event.preventDefault();
    this.isDraggingFrench = true;
  }

  onFrenchDragLeave(event: DragEvent): void {
    event.preventDefault();
    this.isDraggingFrench = false;
  }

  onFrenchDrop(event: DragEvent): void {
    event.preventDefault();
    this.isDraggingFrench = false;

    if (event.dataTransfer?.files.length) {
      const droppedFile = event.dataTransfer.files[0];
      if (this.isDocx(droppedFile)) {
        this.frenchFile = droppedFile;
        this.frenchFileSelected.emit(this.frenchFile);
        this.stateService.setFrenchDocument(this.frenchFile);
      }
    }
  }

  clearFrenchFile(): void {
    this.frenchFile = null;
    this.stateService.setFrenchDocument(null);
  }

  // Utility methods
  isDocx(file: File): boolean {
    return file.name.toLowerCase().endsWith('.docx');
  }

  clearFiles(): void {
    this.clearEnglishFile();
    this.clearFrenchFile();
  }

  canProcess(): boolean {
    if (this.disabled) return false;

    switch (this.selectedMode) {
      case 'english-only':
        return this.englishFile !== null;
      case 'french-only':
        return this.frenchFile !== null;
      case 'both':
        return this.englishFile !== null && this.frenchFile !== null;
      default:
        return false;
    }
  }
}
