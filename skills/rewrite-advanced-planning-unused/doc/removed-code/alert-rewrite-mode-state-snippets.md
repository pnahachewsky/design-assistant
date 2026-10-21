# Alert Rewrite Mode State Snippets

These snippets record the removed UI/state plumbing for the archived advanced planning mode.

## Enum

```ts
export enum AlertRewriteMode {
  ModelPlanning = 'model-planning',
  HeuristicPlanning = 'heuristic-planning',
}
```

## UI Checkbox

```html
<div class="p-field-checkbox mt-2">
  <p-checkbox
    [(ngModel)]="useAlertPlanning"
    [binary]="true"
    inputId="useAlertPlanning"
  />
  <label for="useAlertPlanning" class="pl-2">
    Advanced AI planning before rewrite
  </label>
</div>
```

## Component Mapping

```ts
get useAlertPlanning(): boolean {
  return this.selectedAlertRewriteMode === AlertRewriteMode.ModelPlanning;
}

set useAlertPlanning(useAlertPlanning: boolean) {
  this.onUseAlertPlanningSelect(useAlertPlanning);
}

onUseAlertPlanningSelect(useAlertPlanning: boolean): void {
  const mode = useAlertPlanning
    ? AlertRewriteMode.ModelPlanning
    : AlertRewriteMode.HeuristicPlanning;
  this.selectedAlertRewriteMode = mode;
  this.uploadState.setAlertRewriteMode(mode);
  this.alertRewriteModeChange.emit();
}
```

## Persistence

```ts
private readonly alertRewriteModeKey = 'pageAssistant.alertRewriteMode';

private selectedAlertRewriteMode = signal<AlertRewriteMode>(
  AlertRewriteMode.HeuristicPlanning,
);

getAlertRewriteMode = computed(() => this.selectedAlertRewriteMode());

setAlertRewriteMode(mode: AlertRewriteMode) {
  this.selectedAlertRewriteMode.set(mode);
  this.storage.saveData(this.alertRewriteModeKey, mode);
}
```

