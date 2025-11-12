import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
  selector: 'ca-progress-indicator',
  standalone: true,
  imports: [CommonModule, ProgressBarModule],
  templateUrl: './progress-indicator.component.html',
  styles: [`
    .spinner {
      width: 24px;
      height: 24px;
      border: 4px solid var(--surface-300);
      border-top-color: var(--primary-color);
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `]
})
export class ProgressIndicatorComponent {
  @Input() progressText = '';
  @Input() processedCount = 0;
  @Input() totalFiles = 0;
  @Input() showProgress = false;
  @Input() showSpinner = true;
  
  get progressValue(): number {
    if (this.totalFiles === 0) return 0;
    return Math.round((this.processedCount / this.totalFiles) * 100);
  }
}