import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { ComparisonResult } from '../../../../services/metadata-assistant-state.service';

@Component({
  selector: 'ca-metadata-comparison',
  standalone: true,
  imports: [CommonModule, TranslateModule, CardModule, AccordionModule, ButtonModule, TooltipModule],
  templateUrl: './metadata-comparison.component.html',
  styleUrls: ['./metadata-comparison.component.css']
})
export class MetadataComparisonComponent {
  @Input() comparisonData: ComparisonResult | null = null;

  copyToClipboard(text: string, event: Event): void {
    event.stopPropagation();
    navigator.clipboard.writeText(text).then(() => {
      console.log('Copied to clipboard:', text);
    }).catch(err => {
      console.error('Failed to copy text:', err);
    });
  }
}
