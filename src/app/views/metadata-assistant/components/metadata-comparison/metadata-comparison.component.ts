import { Component, Input, OnInit, AfterViewInit, ViewChild, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { createPatch } from 'diff';
import { Diff2HtmlUI } from 'diff2html/lib/ui/js/diff2html-ui-slim';
import type { Diff2HtmlUIConfig } from 'diff2html/lib/ui/js/diff2html-ui-slim';
import { ComparisonResult } from '../../../../services/metadata-assistant-state.service';

@Component({
  selector: 'ca-metadata-comparison',
  standalone: true,
  imports: [CommonModule, TranslateModule, CardModule, AccordionModule],
  templateUrl: './metadata-comparison.component.html',
  styleUrls: ['./metadata-comparison.component.css']
})
export class MetadataComparisonComponent implements OnInit, AfterViewInit {
  @Input() comparisonData: ComparisonResult | null = null;

  @ViewChild('descriptionDiff') descriptionDiffContainer!: ElementRef<HTMLElement>;
  @ViewChild('keywordsDiff') keywordsDiffContainer!: ElementRef<HTMLElement>;

  ngOnInit(): void {
    this.loadDiff2HtmlStyles();
  }

  ngAfterViewInit(): void {
    if (this.comparisonData) {
      // Use setTimeout to ensure DOM is fully rendered
      setTimeout(() => {
        this.renderDescriptionDiff();
        this.renderKeywordsDiff();
      }, 100);
    }
  }

  private loadDiff2HtmlStyles(): void {
    const isDarkMode = document.documentElement.classList.contains('dark-mode');
    const existingLink = document.getElementById('diff2html-theme') as HTMLLinkElement;

    // Load diff2html CSS if not already loaded
    if (!existingLink) {
      const link = document.createElement('link');
      link.id = 'diff2html-theme';
      link.rel = 'stylesheet';
      link.href = 'https://cdn.jsdelivr.net/npm/diff2html@3.4.47/bundles/css/diff2html.min.css';
      document.head.appendChild(link);
    }
  }

  private renderDescriptionDiff(): void {
    if (!this.comparisonData || !this.descriptionDiffContainer) {
      return;
    }

    const autoTranslated = this.comparisonData.autoTranslatedFrench.description;
    const fromFrenchDoc = this.comparisonData.frenchDocMetadata.description;

    this.renderDiff(
      this.descriptionDiffContainer.nativeElement,
      autoTranslated,
      fromFrenchDoc,
      'Auto-Translated',
      'From French Document'
    );
  }

  private renderKeywordsDiff(): void {
    if (!this.comparisonData || !this.keywordsDiffContainer) {
      return;
    }

    const autoTranslated = this.comparisonData.autoTranslatedFrench.keywords;
    const fromFrenchDoc = this.comparisonData.frenchDocMetadata.keywords;

    this.renderDiff(
      this.keywordsDiffContainer.nativeElement,
      autoTranslated,
      fromFrenchDoc,
      'Auto-Translated',
      'From French Document'
    );
  }

  private renderDiff(
    container: HTMLElement,
    originalText: string,
    modifiedText: string,
    originalLabel: string,
    modifiedLabel: string
  ): void {
    try {
      // Create patch for diff
      const patch = createPatch(
        '',
        originalText,
        modifiedText,
        originalLabel,
        modifiedLabel,
        {
          ignoreWhitespace: false,
        }
      );

      // Configure diff2html
      const diffOptions: Diff2HtmlUIConfig = {
        outputFormat: 'side-by-side',
        drawFileList: false,
        fileContentToggle: false,
        matching: 'words',
        synchronisedScroll: true,
        highlight: true,
      };

      // Clear previous content
      container.innerHTML = '';

      // Create diff2html UI
      const diff2 = new Diff2HtmlUI(container, patch, diffOptions);
      diff2.highlightCode();
      diff2.draw();

      // Apply theme class
      const isDarkMode = document.documentElement.classList.contains('dark-mode');
      const diffWrapper = container.querySelector('.d2h-wrapper');
      if (diffWrapper) {
        diffWrapper.classList.add(isDarkMode ? 'd2h-dark-color-scheme' : 'd2h-light-color-scheme');
      }
    } catch (error) {
      console.error('Error generating diff:', error);
      container.innerHTML = '<p class="text-red-500">Error generating comparison view.</p>';
    }
  }
}
