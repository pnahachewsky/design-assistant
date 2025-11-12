import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { TagModule } from 'primeng/tag';
import { MetadataResult } from '../../../../services/metadata-assistant.service';
import { DocumentUploadComponent } from '../document-upload/document-upload.component';

@Component({
  selector: 'ca-metadata-result',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    AccordionModule,
    CardModule,
    ChipModule,
    ButtonModule,
    TagModule,
    TooltipModule,
    DocumentUploadComponent
  ],
  templateUrl: './metadata-result.component.html',
  styleUrls: ['./metadata-result.component.css']
})
export class MetadataResultComponent {
  @Input() results: MetadataResult[] = [];
  @Input() showTranslations = false;
  @Input() isProcessing = false;
  @Input() processingIndex: number | null = null;
  @Output() documentSelected = new EventEmitter<{ file: File, index: number }>();

  expandedStates: Record<number, boolean> = {};
  uploadedDocuments: Record<number, File> = {};

  toggleExpanded(index: number): void {
    this.expandedStates[index] = !this.expandedStates[index];
  }

  isExpanded(index: number): boolean {
    return this.expandedStates[index] || false;
  }

  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(() => {
      // Could add a toast notification here
    });
  }

  getKeywordsArray(keywords: string): string[] {
    return keywords.split(',').map(k => k.trim()).filter(k => k.length > 0);
  }

  getDomainFromUrl(url: string): string {
    try {
      const urlObj = new URL(url);
      return urlObj.hostname;
    } catch {
      return url;
    }
  }

  truncateContent(content: string, maxLength = 200): string {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength) + '...';
  }

  onDocumentFileSelected(file: File, index: number): void {
    this.documentSelected.emit({ file, index });
  }

  onFrenchDocumentFileSelected(file: File, index: number): void {
    // Store the uploaded French document for this result
    this.uploadedDocuments[index] = file;
  }

  onDocumentModeChanged(mode: string, index: number): void {
    console.log('Document mode changed for result index:', index, mode);
  }

  canUploadDocument(result: MetadataResult): boolean {
    const hasFrenchTranslation = !!result.frenchTranslatedDescription && !!result.frenchTranslatedKeywords;
    const hasEnglishTranslation = !!result.englishTranslatedDescription && !!result.englishTranslatedKeywords;

    return this.showTranslations &&
           (hasFrenchTranslation || hasEnglishTranslation) &&
           !result.evaluationResult;
  }

  isProcessingDocument(index: number): boolean {
    return this.isProcessing && this.processingIndex === index;
  }

  hasUploadedDocument(index: number): boolean {
    return !!this.uploadedDocuments[index];
  }

  processDocument(index: number): void {
    const file = this.uploadedDocuments[index];
    if (file) {
      this.documentSelected.emit({ file, index });
    }
  }
}