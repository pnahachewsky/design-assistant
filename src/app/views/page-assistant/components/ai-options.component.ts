import { Component, Output, EventEmitter, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { AccordionModule } from 'primeng/accordion';
import { ChipModule } from 'primeng/chip';
import { TextareaModule } from 'primeng/textarea';
import { IftaLabelModule } from 'primeng/iftalabel';
import { SliderModule } from 'primeng/slider';

import { TranslateModule } from "@ngx-translate/core";

//Services
import { CompareTask, PromptKey, AiModel } from '../data/data.model'
import { UploadStateService } from '../services/upload-state.service';
import { UploadUrlComponent } from './upload/upload-url.component';
import { UploadPasteComponent } from './upload/upload-paste.component';
import { UploadWordComponent } from './upload/upload-word.component';

@Component({
  selector: 'ca-ai-options',
  imports: [TranslateModule, CommonModule, FormsModule,
    ButtonModule, DrawerModule, RadioButtonModule, CheckboxModule, AccordionModule, ChipModule, TextareaModule, IftaLabelModule, SliderModule,
    UploadUrlComponent, UploadPasteComponent, UploadWordComponent],
  templateUrl: './ai-options.component.html',
  styles: ``,
})
export class AiOptionsComponent implements OnInit {
  private uploadState = inject(UploadStateService);

  @Output() promptChange = new EventEmitter<PromptKey>();
  @Output() customPrompt = new EventEmitter<string>();
  @Output() editPrompt = new EventEmitter<string>();
  @Output() aiChange = new EventEmitter<AiModel>();
  @Output() aiSubmit = new EventEmitter<void>();

  visible = false;

  // The upload picker changes when the workflow is "compare with prototype".
  get uploadType(): 'url' | 'paste' | 'word' {
    return this.uploadState.getSelectedUploadType(); // returns signal().value
  }

  trackById(index: number, item: { id: string | number }): string | number {
    return item.id;
  }

  // Top-level compare workflow selection that drives which controls are shown.
  private _selectedTask: CompareTask = CompareTask.AiGenerated;
  isTwoPrompts = false;
  isTwoAis = false;
  isPrototype = false;

  get selectedTask(): CompareTask {
    return this._selectedTask;
  }
  set selectedTask(value: CompareTask) {
    this._selectedTask = value;
    this.isTwoPrompts = (value === CompareTask.TwoPrompts);
    this.isTwoAis = (value === CompareTask.TwoModels);
    this.isPrototype = (value === CompareTask.PrototypeUrl);
  }

  taskOptions = [
    { id: CompareTask.AiGenerated, label: 'page.ai-options.task.AiGenerated', disabled: false },
    { id: CompareTask.PrototypeUrl, label: 'page.ai-options.task.PrototypeUrl', disabled: false },
    { id: CompareTask.TwoModels, label: 'page.ai-options.task.TwoModels', disabled: false },
    { id: CompareTask.TwoPrompts, label: 'page.ai-options.task.TwoPrompts', disabled: false }
  ];

  // Prompt family selection for single- and dual-prompt runs.
  selectedPrompt: PromptKey = PromptKey.Doormats;
  selectedPrompts: PromptKey[] = [];

  promptOptions = [
    { id: PromptKey.Headings, label: 'page.ai-options.prompt.Headings', disabled: false },
    { id: PromptKey.Doormats, label: 'page.ai-options.prompt.Doormats', disabled: false },
    { id: PromptKey.PlainLanguage, label: 'page.ai-options.prompt.PlainLanguage', disabled: false },
    { id: PromptKey.AlertsRecommendations, label: 'page.ai-options.prompt.Alerts', disabled: false }
  ];

  isPromptCheckboxDisabled(id: PromptKey): boolean {
    return (
      !this.selectedPrompts.includes(id) &&
      this.selectedPrompts.length >= 2
    );
  }

  onPromptSelect(key: PromptKey) {
    this.promptChange.emit(key);
  }

  // Model and alert-specific options persisted through UploadStateService.
  selectedAi: AiModel = AiModel.Gemini;
  selectedAis: AiModel[] = [];

  includeAlertRewriteExamples = true;
  includeTopicDoormatRewriteExamples = false;
  useCompactAlertsPageContext = true;
  useDescriptionStyleAsPrimaryIssue = false;

  // Free and paid model groups are rendered separately in the UI.
  freeAiOptions = [
    { id: AiModel.NemotronUltra, label: 'page.ai-options.model.NemotronUltra', disabled: false },
    { id: AiModel.NemotronLightning, label: 'page.ai-options.model.NemotronLightning', disabled: false },
    { id: AiModel.NemotronSuper, label: 'page.ai-options.model.NemotronSuper', disabled: false },
    { id: AiModel.FreeModelsRouter, label: 'page.ai-options.model.FreeModelsRouter', disabled: false },
  ];
  paidAiOptions = [
    { id: AiModel.AutoRouter, label: 'page.ai-options.model.AutoRouter', disabled: false },
    { id: AiModel.GptOSS20B, label: 'page.ai-options.model.GptOSS20B', disabled: false },
    { id: AiModel.DeepSeekV4Flash, label: 'page.ai-options.model.DeepSeekV4Flash', disabled: false },
    { id: AiModel.DeepSeekV4Pro, label: 'page.ai-options.model.DeepSeekV4Pro', disabled: false },
    { id: AiModel.Gemini, label: 'page.ai-options.model.Gemini', disabled: false },
    { id: AiModel.GPT56LunaPro, label: 'page.ai-options.model.GPT56LunaPro', disabled: false },
    { id: AiModel.GPT5Mini, label: 'page.ai-options.model.GPT5Mini', disabled: false },
    { id: AiModel.GPT54Mini, label: 'page.ai-options.model.GPT54Mini', disabled: false },
  ];

  ngOnInit(): void {
    // Restore persisted toggles, but keep the selected model inside the currently rendered option set.
    const freeIds = new Set(this.freeAiOptions.map((option) => option.id));
    const modelIds = new Set([
      ...this.freeAiOptions.map((option) => option.id),
      ...this.paidAiOptions.map((option) => option.id),
    ]);
    this.selectedAi = this.uploadState.getSelectedAiModel();
    if (!modelIds.has(this.selectedAi)) {
      this.selectedAi = this.freeAiOptions[0]?.id ?? this.selectedAi;
    }
    this.selectedAis = this.selectedAis.filter((id) => freeIds.has(id));
    this.includeAlertRewriteExamples =
      this.uploadState.getIncludeAlertRewriteExamples();
    this.includeTopicDoormatRewriteExamples =
      this.uploadState.getIncludeTopicDoormatRewriteExamples();
    this.useCompactAlertsPageContext =
      this.uploadState.getUseCompactAlertsPageContext();
    this.useDescriptionStyleAsPrimaryIssue =
      this.uploadState.getUseDescriptionStyleAsPrimaryIssue();
  }

  isAiCheckboxDisabled(id: AiModel): boolean {
    return (
      !this.selectedAis.includes(id) &&
      this.selectedAis.length >= 2
    );
  }

  onAiSelect(key: AiModel) {
    this.aiChange.emit(key);
  }

  onIncludeAlertRewriteExamplesSelect(include: boolean): void {
    this.includeAlertRewriteExamples = include;
    this.uploadState.setIncludeAlertRewriteExamples(include);
  }

  onIncludeTopicDoormatRewriteExamplesSelect(include: boolean): void {
    this.includeTopicDoormatRewriteExamples = include;
    this.uploadState.setIncludeTopicDoormatRewriteExamples(include);
  }

  onUseCompactAlertsPageContextSelect(useCompact: boolean): void {
    this.useCompactAlertsPageContext = useCompact;
    this.uploadState.setUseCompactAlertsPageContext(useCompact);
  }

  onUseDescriptionStyleAsPrimaryIssueSelect(useAsPrimary: boolean): void {
    this.useDescriptionStyleAsPrimaryIssue = useAsPrimary;
    this.uploadState.setUseDescriptionStyleAsPrimaryIssue(useAsPrimary);
  }

  // Close the drawer and let the parent component execute the request.
  onSubmit(): void {
    this.visible = false;
    this.aiSubmit.emit();
  }

  // Optional free-form instructions appended after the base/skill prompt.
  addCustom = false;
  customInstruction = '';
  emitCustomPrompt(prompt: string): void {
    this.customPrompt.emit(prompt);
  }
  resetCustom(): void {
    if (!this.addCustom) {
      this.customInstruction = '';
      this.emitCustomPrompt('');
    }
  }

  // Slider presets that prepend an edit-strength instruction to non-alert prompts.
  editLevel = 50;
  editLevels = [
    { value: 0, label: 'Grammar and spelling only', prompt: 'Make minor edits to correct spelling or grammar errors only. Mostly ignore the other instructions provided.' },
    { value: 25, label: 'Minor edits', prompt: 'Make minor edits only to improve readability. Loosely follow the other instructions provided without making unnecessary changes.' },
    { value: 50, label: 'Normal edits', prompt: '' },
    { value: 75, label: 'Extensive edits', prompt: 'Heavily rewrite and reorganize the content to follow the instructions provided.' },
    { value: 100, label: 'Complete rewrite', prompt: 'Aggressively rewrite the content. If there is a clear task on the page, feel free to remove unrelated content.' }
  ];

  get currentEditLevel() {
    return this.editLevels.find(level => level.value === this.editLevel);
  }
  emitEditPrompt(prompt: string): void {
    this.editPrompt.emit(prompt);
  }
}
