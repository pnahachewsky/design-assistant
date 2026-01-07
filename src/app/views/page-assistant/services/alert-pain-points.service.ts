import { Injectable, computed, signal } from '@angular/core';

export interface AlertPainPoint {
  label: string;
  severity?: string;
}

@Injectable({ providedIn: 'root' })
export class AlertPainPointsService {
  private readonly painPoints = signal<AlertPainPoint[]>([]);
  private readonly rawOutput = signal<string>('');
  readonly painPointsSignal = computed(() => this.painPoints());
  readonly rawOutputSignal = computed(() => this.rawOutput());

  setPainPoints(points: AlertPainPoint[]): void {
    this.painPoints.set(points);
  }

  setRawOutput(output: string): void {
    this.rawOutput.set(output);
  }

  clear(): void {
    this.painPoints.set([]);
    this.rawOutput.set('');
  }
}
