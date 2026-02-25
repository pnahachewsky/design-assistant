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
import { CompareTask, PromptKey, AiModel, AlertRewriteMode } from '../data/data.model'
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
  @Output() alertRewriteModeChange = new EventEmitter<AlertRewriteMode>();
  @Output() aiSubmit = new EventEmitter<void>();

  visible = false;

  //Gets upload type for task = compare with prototype
  get uploadType(): 'url' | 'paste' | 'word' {
    return this.uploadState.getSelectedUploadType(); // returns signal().value
  }

  trackById(index: number, item: { id: string | number }): string | number {
    return item.id;
  }

  //Comparison task
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

  //AI prompt
  selectedPrompt: PromptKey = PromptKey.PlainLanguage;
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

  //AI model

  selectedAi: AiModel = AiModel.Nemotron;
  selectedAis: AiModel[] = [];

  selectedAlertRewriteMode: AlertRewriteMode = AlertRewriteMode.AB;
  includeLinkWritingRules = true;
  get alertRewriteModeModel(): AlertRewriteMode {
    return this.selectedAlertRewriteMode;
  }
  set alertRewriteModeModel(mode: AlertRewriteMode) {
    this.onAlertRewriteModeSelect(mode);
  }
  alertRewriteModeOptions = [
    {
      id: AlertRewriteMode.AB,
      label: 'A->B mode (plan + rewrite)',
      disabled: false,
    },
    {
      id: AlertRewriteMode.GoodResultsOnly,
      label: 'Good-results-only mode',
      disabled: false,
    },
  ];

  freeAiOptions = [
    { id: AiModel.Nemotron, label: 'page.ai-options.model.Nemotron', disabled: false },
    { id: AiModel.Arcee, label: 'page.ai-options.model.Arcee', disabled: false },
    { id: AiModel.Zai, label: 'page.ai-options.model.Zai', disabled: false },
    { id: AiModel.DeepSeek, label: 'page.ai-options.model.DeepSeek', disabled: false },
  ];
  paidAiOptions = [
    { id: AiModel.GptOSS, label: 'page.ai-options.model.GptOSS', disabled: false },
    { id: AiModel.Gemini, label: 'page.ai-options.model.Gemini', disabled: false },
    { id: AiModel.Gpt5Mini, label: 'page.ai-options.model.Gpt5Mini', disabled: false },
  ];

  ngOnInit(): void {
    const freeIds = new Set(this.freeAiOptions.map((option) => option.id));
    if (!freeIds.has(this.selectedAi)) {
      this.selectedAi = this.freeAiOptions[0]?.id ?? this.selectedAi;
    }
    this.selectedAis = this.selectedAis.filter((id) => freeIds.has(id));
    this.selectedAlertRewriteMode = this.uploadState.getAlertRewriteMode();
    this.includeLinkWritingRules = this.uploadState.getIncludeLinkWritingRules();
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

  onAlertRewriteModeSelect(mode: AlertRewriteMode): void {
    this.selectedAlertRewriteMode = mode;
    this.uploadState.setAlertRewriteMode(mode);
    this.alertRewriteModeChange.emit(mode);
  }

  onIncludeLinkWritingRulesSelect(include: boolean): void {
    this.includeLinkWritingRules = include;
    this.uploadState.setIncludeLinkWritingRules(include);
  }

  //submit selected prompt and model to AI
  onSubmit(): void {
    this.visible = false;
    this.aiSubmit.emit();
  }

  //Append custom instructions to prompt
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

  //Number of changes for AI to make
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
