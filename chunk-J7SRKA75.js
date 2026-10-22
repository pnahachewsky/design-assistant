import {
  ProjectCacheService
} from "./chunk-ZP7AMFPN.js";
import {
  ProjectStateService
} from "./chunk-AW5MQYZC.js";
import {
  SelectButton,
  SelectButtonModule
} from "./chunk-5IS2DW3I.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-QN4TTD5X.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  TranslatePipe,
  TranslateService,
  effect,
  inject,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-KRHY6Z2H.js";

// src/app/components/project-settings/project-settings.component.ts
var _c0 = ["*"];
function ProjectSettingsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 2);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p-selectbutton", 3);
    \u0275\u0275listener("ngModelChange", function ProjectSettingsComponent_Conditional_1_Template_p_selectbutton_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.projectCache.selectedLang.set($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "common.language"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.projectCache.selectedLang())("options", ctx_r1.languageOptions);
  }
}
function ProjectSettingsComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 4);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p-selectbutton", 5);
    \u0275\u0275listener("ngModelChange", function ProjectSettingsComponent_Conditional_2_Template_p_selectbutton_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.projectCache.selectedScope.set($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "common.scope"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.projectCache.selectedScope())("options", ctx_r1.scopeOptions);
  }
}
function ProjectSettingsComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 6);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p-selectbutton", 7);
    \u0275\u0275listener("ngModelChange", function ProjectSettingsComponent_Conditional_3_Template_p_selectbutton_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.projectCache.selectedVersion.set($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "common.version"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.projectCache.selectedVersion())("options", ctx_r1.versionOptions);
  }
}
function ProjectSettingsComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p-selectbutton", 9);
    \u0275\u0275listener("ngModelChange", function ProjectSettingsComponent_Conditional_4_Template_p_selectbutton_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.projectCache.selectedSource.set($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "common.source"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.projectCache.selectedSource())("options", ctx_r1.sourceOptions);
  }
}
function ProjectSettingsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p-selectbutton", 11);
    \u0275\u0275listener("ngModelChange", function ProjectSettingsComponent_Conditional_5_Template_p_selectbutton_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.projectCache.selectedDisplayIA.set($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "common.display"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.projectCache.selectedDisplayIA())("options", ctx_r1.displayIAOptions);
  }
}
function ProjectSettingsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 12);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p-selectbutton", 13);
    \u0275\u0275listener("ngModelChange", function ProjectSettingsComponent_Conditional_6_Template_p_selectbutton_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.projectCache.selectedViewIA.set($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "common.view"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.projectCache.selectedViewIA())("options", ctx_r1.viewIAOptions);
  }
}
function ProjectSettingsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 14);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p-selectbutton", 15);
    \u0275\u0275listener("ngModelChange", function ProjectSettingsComponent_Conditional_7_Template_p_selectbutton_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.projectCache.selectedMeta.set($event ?? []));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "common.view"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.projectCache.selectedMeta())("options", ctx_r1.metaOptions);
  }
}
function ProjectSettingsComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 16);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p-selectbutton", 17);
    \u0275\u0275listener("ngModelChange", function ProjectSettingsComponent_Conditional_8_Template_p_selectbutton_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.projectCache.selectedDisplay.set($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "common.display"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.projectCache.selectedDisplay())("options", ctx_r1.displayOptions);
  }
}
function ProjectSettingsComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 18);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p-selectbutton", 19);
    \u0275\u0275listener("ngModelChange", function ProjectSettingsComponent_Conditional_9_Template_p_selectbutton_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.projectCache.selectedFilter.set($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "common.filter"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.projectCache.selectedFilter())("options", ctx_r1.filterOptions);
  }
}
var ProjectSettingsComponent = class _ProjectSettingsComponent {
  projectCache = inject(ProjectCacheService);
  projectState = inject(ProjectStateService);
  translate = inject(TranslateService);
  showLang = input(false, ...ngDevMode ? [{ debugName: "showLang" }] : (
    /* istanbul ignore next */
    []
  ));
  allowBoth = input(false, ...ngDevMode ? [{ debugName: "allowBoth" }] : (
    /* istanbul ignore next */
    []
  ));
  showScope = input(false, ...ngDevMode ? [{ debugName: "showScope" }] : (
    /* istanbul ignore next */
    []
  ));
  showVersion = input(false, ...ngDevMode ? [{ debugName: "showVersion" }] : (
    /* istanbul ignore next */
    []
  ));
  allowLive = input(false, ...ngDevMode ? [{ debugName: "allowLive" }] : (
    /* istanbul ignore next */
    []
  ));
  isPrototype = input(false, ...ngDevMode ? [{ debugName: "isPrototype" }] : (
    /* istanbul ignore next */
    []
  ));
  showSource = input(false, ...ngDevMode ? [{ debugName: "showSource" }] : (
    /* istanbul ignore next */
    []
  ));
  allowPreview = input(false, ...ngDevMode ? [{ debugName: "allowPreview" }] : (
    /* istanbul ignore next */
    []
  ));
  onlyValid = input(false, ...ngDevMode ? [{ debugName: "onlyValid" }] : (
    /* istanbul ignore next */
    []
  ));
  showFilter = input(false, ...ngDevMode ? [{ debugName: "showFilter" }] : (
    /* istanbul ignore next */
    []
  ));
  showViewIA = input(false, ...ngDevMode ? [{ debugName: "showViewIA" }] : (
    /* istanbul ignore next */
    []
  ));
  showDisplayIA = input(false, ...ngDevMode ? [{ debugName: "showDisplayIA" }] : (
    /* istanbul ignore next */
    []
  ));
  showMeta = input(false, ...ngDevMode ? [{ debugName: "showMeta" }] : (
    /* istanbul ignore next */
    []
  ));
  showDisplay = input(false, ...ngDevMode ? [{ debugName: "showDisplay" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    effect(() => {
      if (!this.allowBoth() && this.projectCache.selectedLang() === "both") {
        this.projectCache.selectedLang.set(this.projectState.detectPrimaryLanguage());
      }
    });
    effect(() => {
      if (!this.allowLive() && this.projectCache.selectedVersion() === "live") {
        this.projectCache.selectedVersion.set("prototype");
      }
    });
    effect(() => {
      const isPrototype = this.isPrototype();
      if (isPrototype) {
        this.projectCache.selectedVersion.set("prototype");
      }
    });
    effect(() => {
      if (!this.allowPreview() && this.projectCache.selectedSource() === "preview") {
        this.projectCache.selectedSource.set("live");
      }
    });
    effect(() => {
      const validValues = this.sourceOptions.map((opt) => opt.value);
      if (!validValues.includes(this.projectCache.selectedSource())) {
        this.projectCache.selectedSource.set("live");
      }
    });
  }
  //Choose language
  get languageOptions() {
    const options = [];
    const primaryLang = this.projectState.detectPrimaryLanguage();
    const enLabel = { label: this.translate.instant("common.language.english"), value: "en" };
    const frLabel = { label: this.translate.instant("common.language.french"), value: "fr" };
    const bothLabel = { label: this.translate.instant("common.both"), value: "both" };
    if (primaryLang === "en") {
      options.push(enLabel, frLabel);
    } else {
      options.push(frLabel, enLabel);
    }
    if (this.allowBoth()) {
      options.push(bothLabel);
    }
    return options;
  }
  //Choose scope
  get scopeOptions() {
    return [
      { label: this.translate.instant("common.scope.inScope"), value: "inScope" },
      { label: this.translate.instant("common.scope.all"), value: "all" }
    ];
  }
  //Choose version (for AIDA data storage)
  get versionOptions() {
    const options = [{ label: this.translate.instant("common.version.prototype"), value: "prototype" }];
    if (this.allowLive()) {
      options.push({ label: this.translate.instant("common.version.live"), value: "live" });
    }
    options.push({ label: this.translate.instant("common.version.baseline"), value: "baseline" });
    return options;
  }
  //Choose source (for external data storage)
  get sourceOptions() {
    const options = [{ label: this.translate.instant("common.source.live"), value: "live" }];
    if (this.projectCache.hasGitHub() || !this.onlyValid()) {
      options.push({ label: this.translate.instant("common.source.protoGH"), value: "protoGH" });
    }
    if (this.projectCache.hasLocal() || !this.onlyValid()) {
      options.push({ label: this.translate.instant("common.source.protoUT"), value: "protoUT" });
    }
    if (this.projectState.getProject().github.hasBaselineRepo) {
      if (this.projectCache.hasGitHubBL() || !this.onlyValid()) {
        options.push({ label: this.translate.instant("common.source.baseGH"), value: "baseGH" });
      }
      if (this.projectCache.hasLocalBL() || !this.onlyValid()) {
        options.push({ label: this.translate.instant("common.source.baseUT"), value: "baseUT" });
      }
    }
    if (this.allowPreview()) {
      options.push({ label: this.translate.instant("common.source.preview"), value: "preview" });
    }
    return options;
  }
  //Choose filter for changes (metadata to start)
  get filterOptions() {
    return [
      { label: this.translate.instant("common.filter.all"), value: "all" },
      { label: this.translate.instant("common.filter.changes"), value: "changes" }
    ];
  }
  //Choose view (for IA diagram)
  get viewIAOptions() {
    return [
      { label: this.translate.instant("common.view.baseline"), value: "baseline" },
      { label: this.translate.instant("common.view.changes"), value: "changes" },
      { label: this.translate.instant("common.view.final"), value: "final" }
    ];
  }
  //Choose display type (for IA diagram)
  get displayIAOptions() {
    return [
      { label: this.translate.instant("common.display.tree"), value: "tree" },
      { label: this.translate.instant("common.display.list"), value: "list" }
    ];
  }
  //Choose metadata options (for metadata table)
  get metaOptions() {
    return [
      { label: this.translate.instant("editNode.title"), value: "title" },
      { label: this.translate.instant("editNode.description"), value: "description" },
      { label: this.translate.instant("editNode.keywords"), value: "keywords" }
    ];
  }
  //Choose display (for view project urls drawer)
  get displayOptions() {
    return [
      { label: this.translate.instant("common.display.url"), value: "url" },
      { label: this.translate.instant("common.display.title"), value: "title" }
    ];
  }
  static \u0275fac = function ProjectSettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjectSettingsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectSettingsComponent, selectors: [["aida-project-settings"]], inputs: { showLang: [1, "showLang"], allowBoth: [1, "allowBoth"], showScope: [1, "showScope"], showVersion: [1, "showVersion"], allowLive: [1, "allowLive"], isPrototype: [1, "isPrototype"], showSource: [1, "showSource"], allowPreview: [1, "allowPreview"], onlyValid: [1, "onlyValid"], showFilter: [1, "showFilter"], showViewIA: [1, "showViewIA"], showDisplayIA: [1, "showDisplayIA"], showMeta: [1, "showMeta"], showDisplay: [1, "showDisplay"] }, ngContentSelectors: _c0, decls: 11, vars: 9, consts: [[1, "flex", "flex-row", "flex-wrap", "align-items-end", "gap-2"], [1, "flex", "flex-column", "hover:text-primary"], ["for", "language", 1, "text-xs", "font-semibold", "xl:my-1"], ["id", "language", "allowEmpty", "false", "optionLabel", "label", "optionValue", "value", "size", "small", "styleClass", "secondary-outline white-space-nowrap text-primary max-h-3rem", 3, "ngModelChange", "ngModel", "options"], ["for", "scope", 1, "text-xs", "font-semibold", "xl:my-1"], ["id", "scope", "allowEmpty", "false", "optionLabel", "label", "optionValue", "value", "size", "small", "styleClass", "secondary-outline white-space-nowrap text-primary max-h-3rem", 3, "ngModelChange", "ngModel", "options"], ["for", "version", 1, "text-xs", "font-semibold", "xl:my-1"], ["id", "version", "allowEmpty", "false", "optionLabel", "label", "optionValue", "value", "size", "small", "styleClass", "secondary-outline white-space-nowrap text-primary max-h-3rem", 3, "ngModelChange", "ngModel", "options"], ["for", "source", 1, "text-xs", "font-semibold", "xl:my-1"], ["id", "source", "allowEmpty", "false", "optionLabel", "label", "optionValue", "value", "size", "small", "styleClass", "secondary-outline white-space-nowrap text-primary max-h-3rem", 3, "ngModelChange", "ngModel", "options"], ["for", "displayIA", 1, "text-xs", "font-semibold", "xl:my-1"], ["id", "displayIA", "allowEmpty", "false", "optionLabel", "label", "optionValue", "value", "size", "small", "styleClass", "secondary-outline white-space-nowrap text-primary max-h-3rem", 3, "ngModelChange", "ngModel", "options"], ["for", "viewIA", 1, "text-xs", "font-semibold", "xl:my-1"], ["id", "viewIA", "allowEmpty", "false", "optionLabel", "label", "optionValue", "value", "size", "small", "styleClass", "secondary-outline white-space-nowrap text-primary max-h-3rem", 3, "ngModelChange", "ngModel", "options"], ["for", "meta", 1, "text-xs", "font-semibold", "xl:my-1"], ["id", "meta", "allowEmpty", "true", "multiple", "true", "optionLabel", "label", "optionValue", "value", "size", "small", "styleClass", "secondary-outline white-space-nowrap text-primary max-h-3rem", 3, "ngModelChange", "ngModel", "options"], ["for", "display", 1, "text-xs", "font-semibold", "xl:my-1"], ["id", "display", "allowEmpty", "false", "optionLabel", "label", "optionValue", "value", "size", "small", "styleClass", "secondary-outline white-space-nowrap text-primary max-h-3rem", 3, "ngModelChange", "ngModel", "options"], ["for", "filter", 1, "text-xs", "font-semibold", "xl:my-1"], ["id", "filter", "allowEmpty", "false", "optionLabel", "label", "optionValue", "value", "size", "small", "styleClass", "secondary-outline white-space-nowrap text-primary max-h-3rem", 3, "ngModelChange", "ngModel", "options"]], template: function ProjectSettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, ProjectSettingsComponent_Conditional_1_Template, 5, 5, "div", 1);
      \u0275\u0275conditionalCreate(2, ProjectSettingsComponent_Conditional_2_Template, 5, 5, "div", 1);
      \u0275\u0275conditionalCreate(3, ProjectSettingsComponent_Conditional_3_Template, 5, 5, "div", 1);
      \u0275\u0275conditionalCreate(4, ProjectSettingsComponent_Conditional_4_Template, 5, 5, "div", 1);
      \u0275\u0275conditionalCreate(5, ProjectSettingsComponent_Conditional_5_Template, 5, 5, "div", 1);
      \u0275\u0275conditionalCreate(6, ProjectSettingsComponent_Conditional_6_Template, 5, 5, "div", 1);
      \u0275\u0275conditionalCreate(7, ProjectSettingsComponent_Conditional_7_Template, 5, 5, "div", 1);
      \u0275\u0275conditionalCreate(8, ProjectSettingsComponent_Conditional_8_Template, 5, 5, "div", 1);
      \u0275\u0275conditionalCreate(9, ProjectSettingsComponent_Conditional_9_Template, 5, 5, "div", 1);
      \u0275\u0275projection(10);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showLang() ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showScope() ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showVersion() && !ctx.isPrototype() ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showSource() && ctx.sourceOptions.length > 1 ? 4 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showDisplayIA() ? 5 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showViewIA() ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showMeta() ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showDisplay() ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showFilter() ? 9 : -1);
    }
  }, dependencies: [FormsModule, NgControlStatus, NgModel, SelectButtonModule, SelectButton, TranslatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectSettingsComponent, [{
    type: Component,
    args: [{ selector: "aida-project-settings", imports: [FormsModule, TranslatePipe, SelectButtonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="flex flex-row flex-wrap align-items-end gap-2">
  <!--Choose language-->
  @if (showLang()) {
    <div class="flex flex-column hover:text-primary">
      <label class="text-xs font-semibold xl:my-1" for="language">{{ 'common.language' | translate }}</label>
      <p-selectbutton
        id="language"
        [ngModel]="projectCache.selectedLang()"
        [options]="languageOptions"
        (ngModelChange)="projectCache.selectedLang.set($event)"
        allowEmpty="false"
        optionLabel="label"
        optionValue="value"
        size="small"
        styleClass="secondary-outline white-space-nowrap text-primary max-h-3rem"
      />
    </div>
  }

  <!--Choose scope-->
  @if (showScope()) {
    <div class="flex flex-column hover:text-primary">
      <label class="text-xs font-semibold xl:my-1" for="scope">{{ 'common.scope' | translate }}</label>
      <p-selectbutton
        id="scope"
        [ngModel]="projectCache.selectedScope()"
        [options]="scopeOptions"
        (ngModelChange)="projectCache.selectedScope.set($event)"
        allowEmpty="false"
        optionLabel="label"
        optionValue="value"
        size="small"
        styleClass="secondary-outline white-space-nowrap text-primary max-h-3rem"
      />
    </div>
  }

  <!--Choose version-->
  @if (showVersion() && !isPrototype()) {
    <div class="flex flex-column hover:text-primary">
      <label class="text-xs font-semibold xl:my-1" for="version">{{ 'common.version' | translate }}</label>
      <p-selectbutton
        id="version"
        [ngModel]="projectCache.selectedVersion()"
        [options]="versionOptions"
        (ngModelChange)="projectCache.selectedVersion.set($event)"
        allowEmpty="false"
        optionLabel="label"
        optionValue="value"
        size="small"
        styleClass="secondary-outline white-space-nowrap text-primary max-h-3rem"
      />
    </div>
  }

  <!--Choose source-->
  @if (showSource() && sourceOptions.length > 1) {
    <div class="flex flex-column hover:text-primary">
      <label class="text-xs font-semibold xl:my-1" for="source">{{ 'common.source' | translate }}</label>
      <p-selectbutton
        id="source"
        [ngModel]="projectCache.selectedSource()"
        [options]="sourceOptions"
        (ngModelChange)="projectCache.selectedSource.set($event)"
        allowEmpty="false"
        optionLabel="label"
        optionValue="value"
        size="small"
        styleClass="secondary-outline white-space-nowrap text-primary max-h-3rem"
      />
    </div>
  }

  <!-- Niche use-cases ----------------------------------------------->

  <!--Choose IA display-->
  @if (showDisplayIA()) {
    <div class="flex flex-column hover:text-primary">
      <label class="text-xs font-semibold xl:my-1" for="displayIA">{{ 'common.display' | translate }}</label>
      <p-selectbutton
        id="displayIA"
        [ngModel]="projectCache.selectedDisplayIA()"
        [options]="displayIAOptions"
        (ngModelChange)="projectCache.selectedDisplayIA.set($event)"
        allowEmpty="false"
        optionLabel="label"
        optionValue="value"
        size="small"
        styleClass="secondary-outline white-space-nowrap text-primary max-h-3rem"
      />
    </div>
  }

  <!--Choose IA view-->
  @if (showViewIA()) {
    <div class="flex flex-column hover:text-primary">
      <label class="text-xs font-semibold xl:my-1" for="viewIA">{{ 'common.view' | translate }}</label>
      <p-selectbutton
        id="viewIA"
        [ngModel]="projectCache.selectedViewIA()"
        [options]="viewIAOptions"
        (ngModelChange)="projectCache.selectedViewIA.set($event)"
        allowEmpty="false"
        optionLabel="label"
        optionValue="value"
        size="small"
        styleClass="secondary-outline white-space-nowrap text-primary max-h-3rem"
      />
    </div>
  }

  <!--Choose metadata view-->
  @if (showMeta()) {
    <div class="flex flex-column hover:text-primary">
      <label class="text-xs font-semibold xl:my-1" for="meta">{{ 'common.view' | translate }}</label>
      <p-selectbutton
        id="meta"
        [ngModel]="projectCache.selectedMeta()"
        [options]="metaOptions"
        (ngModelChange)="projectCache.selectedMeta.set($event ?? [])"
        allowEmpty="true"
        multiple="true"
        optionLabel="label"
        optionValue="value"
        size="small"
        styleClass="secondary-outline white-space-nowrap text-primary max-h-3rem"
      />
    </div>
  }

  <!--Choose display-->
  @if (showDisplay()) {
    <div class="flex flex-column hover:text-primary">
      <label class="text-xs font-semibold xl:my-1" for="display">{{ 'common.display' | translate }}</label>
      <p-selectbutton
        id="display"
        [ngModel]="projectCache.selectedDisplay()"
        [options]="displayOptions"
        (ngModelChange)="projectCache.selectedDisplay.set($event)"
        allowEmpty="false"
        optionLabel="label"
        optionValue="value"
        size="small"
        styleClass="secondary-outline white-space-nowrap text-primary max-h-3rem"
      />
    </div>
  }

  <!--Choose filter-->
  @if (showFilter()) {
    <div class="flex flex-column hover:text-primary">
      <label class="text-xs font-semibold xl:my-1" for="filter">{{ 'common.filter' | translate }}</label>
      <p-selectbutton
        id="filter"
        [ngModel]="projectCache.selectedFilter()"
        [options]="filterOptions"
        (ngModelChange)="projectCache.selectedFilter.set($event)"
        allowEmpty="false"
        optionLabel="label"
        optionValue="value"
        size="small"
        styleClass="secondary-outline white-space-nowrap text-primary max-h-3rem"
      />
    </div>
  }

  <!--Custom space to insert component-specific content-->
  <ng-content />
</div>
` }]
  }], () => [], { showLang: [{ type: Input, args: [{ isSignal: true, alias: "showLang", required: false }] }], allowBoth: [{ type: Input, args: [{ isSignal: true, alias: "allowBoth", required: false }] }], showScope: [{ type: Input, args: [{ isSignal: true, alias: "showScope", required: false }] }], showVersion: [{ type: Input, args: [{ isSignal: true, alias: "showVersion", required: false }] }], allowLive: [{ type: Input, args: [{ isSignal: true, alias: "allowLive", required: false }] }], isPrototype: [{ type: Input, args: [{ isSignal: true, alias: "isPrototype", required: false }] }], showSource: [{ type: Input, args: [{ isSignal: true, alias: "showSource", required: false }] }], allowPreview: [{ type: Input, args: [{ isSignal: true, alias: "allowPreview", required: false }] }], onlyValid: [{ type: Input, args: [{ isSignal: true, alias: "onlyValid", required: false }] }], showFilter: [{ type: Input, args: [{ isSignal: true, alias: "showFilter", required: false }] }], showViewIA: [{ type: Input, args: [{ isSignal: true, alias: "showViewIA", required: false }] }], showDisplayIA: [{ type: Input, args: [{ isSignal: true, alias: "showDisplayIA", required: false }] }], showMeta: [{ type: Input, args: [{ isSignal: true, alias: "showMeta", required: false }] }], showDisplay: [{ type: Input, args: [{ isSignal: true, alias: "showDisplay", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectSettingsComponent, { className: "ProjectSettingsComponent", filePath: "src/app/components/project-settings/project-settings.component.ts", lineNumber: 17 });
})();

export {
  ProjectSettingsComponent
};
//# sourceMappingURL=chunk-J7SRKA75.js.map
