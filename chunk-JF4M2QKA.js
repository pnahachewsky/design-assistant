import {
  AlertContextService
} from "./chunk-KNTIRVLE.js";
import {
  AlertRewriteExamples,
  PagePrompts,
  ProblemPrompts,
  SkillPrompts
} from "./chunk-H2HMG54Z.js";
import {
  require_types
} from "./chunk-YIFK26D6.js";
import {
  CompareService
} from "./chunk-CHTZ3US5.js";
import {
  AiPromptService,
  OpenRouterService,
  OutputFragment,
  OutputKey,
  PagePromptKey,
  ProblemPromptKey,
  RoleFragment,
  RoleKey,
  RubricFragment,
  RubricKey,
  SkillPromptKey,
  ToolsPromptKey,
  ToolsPrompts
} from "./chunk-ZIRIQAQJ.js";
import {
  MultiSelect,
  MultiSelectModule
} from "./chunk-QMVBWT6I.js";
import {
  ProgressSpinner,
  ProgressSpinnerModule
} from "./chunk-C3LQMI76.js";
import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  TabsModule
} from "./chunk-XNRBXGSS.js";
import "./chunk-SVH34SV7.js";
import {
  StyleCardService
} from "./chunk-KT52MSVV.js";
import {
  RadioButton,
  RadioButtonModule
} from "./chunk-UBDTR5JP.js";
import "./chunk-2CL5S6F2.js";
import {
  Fieldset,
  FieldsetModule
} from "./chunk-QN62CGZV.js";
import {
  Textarea,
  TextareaModule
} from "./chunk-75C7HDON.js";
import {
  Message,
  MessageModule
} from "./chunk-BNXTMTI4.js";
import {
  IftaLabel,
  IftaLabelModule
} from "./chunk-33T4MMID.js";
import {
  ExportGitHubService
} from "./chunk-WCHNT3WN.js";
import "./chunk-I4JBRU6I.js";
import {
  Checkbox,
  CheckboxModule
} from "./chunk-CRHMMQLM.js";
import "./chunk-KXKV56UQ.js";
import "./chunk-CXFKKNCP.js";
import {
  SignInService
} from "./chunk-6HPKKU65.js";
import {
  Select,
  SelectModule
} from "./chunk-FKOWSWSA.js";
import {
  InputText,
  InputTextModule,
  UserSettingsService
} from "./chunk-JF73CZCV.js";
import {
  FetchService
} from "./chunk-6PPBJKXF.js";
import {
  marker
} from "./chunk-NJX644NS.js";
import {
  Button,
  ButtonModule,
  CommonModule,
  DefaultValueAccessor,
  FormsModule,
  JsonPipe,
  NgControlStatus,
  NgModel,
  PrimeTemplate
} from "./chunk-WQJJFENA.js";
import {
  ChangeDetectionStrategy,
  Component,
  TranslatePipe,
  TranslateService,
  ViewChild,
  computed,
  effect,
  inject,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-MB4XCYRB.js";
import "./chunk-DKTF6WIM.js";
import "./chunk-G55EJPVD.js";
import "./chunk-7XEOGBZ2.js";
import "./chunk-3RPP55HA.js";
import "./chunk-DBOW7BSZ.js";
import "./chunk-XMWDIV4O.js";
import {
  __async,
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-YCXP4XZS.js";

// src/app/views/toolbox/dev-tools/prompt-editor/prompt-editor.component.ts
var import_types = __toESM(require_types());
var _c0 = ["diffContainer"];
var _c1 = ["filePreview"];
var _c2 = (a0) => ({ number: a0 });
var _c3 = (a0) => ({ error: a0 });
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.key;
var _forTrack2 = ($index, $item) => $item.enumKey;
var _forTrack3 = ($index, $item) => $item.id;
function PromptEditorComponent_For_10_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "edit");
    \u0275\u0275elementEnd();
  }
}
function PromptEditorComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-tab", 21);
    \u0275\u0275listener("click", function PromptEditorComponent_For_10_Template_p_tab_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateDiff());
    });
    \u0275\u0275elementStart(1, "div", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275conditionalCreate(4, PromptEditorComponent_For_10_Conditional_4_Template, 2, 0, "span", 11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("value", tab_r4.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, tab_r4.title), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.hasChanges(tab_r4.value) ? 4 : -1);
  }
}
function PromptEditorComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "preview");
    \u0275\u0275elementEnd();
  }
}
function PromptEditorComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "change_circle");
    \u0275\u0275elementEnd();
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_4_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "p-radiobutton", 27);
    \u0275\u0275listener("ngModelChange", function PromptEditorComponent_For_23_Conditional_2_Conditional_4_For_1_Template_p_radiobutton_ngModelChange_1_listener() {
      const fragment_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.toggleFragment(fragment_r6.key));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 28);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const fragment_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("binary", true)("inputId", "show_" + fragment_r6.key)("ngModel", ctx_r2.isFragmentVisible(fragment_r6.key));
    \u0275\u0275advance();
    \u0275\u0275property("for", "show_" + fragment_r6.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, fragment_r6.label));
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, PromptEditorComponent_For_23_Conditional_2_Conditional_4_For_1_Template, 5, 7, "div", 26, _forTrack1);
  }
  if (rf & 2) {
    const tab_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275repeater(tab_r7.fragments);
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_5_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "p-checkbox", 27);
    \u0275\u0275listener("ngModelChange", function PromptEditorComponent_For_23_Conditional_2_Conditional_5_For_1_Template_p_checkbox_ngModelChange_1_listener() {
      const skill_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.togglePrompt(skill_r9.enumKey));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 28);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const skill_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("binary", true)("inputId", "show_" + skill_r9.enumKey)("ngModel", ctx_r2.isPromptVisible(skill_r9.enumKey));
    \u0275\u0275advance();
    \u0275\u0275property("for", "show_" + skill_r9.enumKey);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, skill_r9.translationKey));
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, PromptEditorComponent_For_23_Conditional_2_Conditional_5_For_1_Template, 5, 7, "div", 29, _forTrack2);
  }
  if (rf & 2) {
    const tab_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275repeater(tab_r7.skills);
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_6_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "p-radiobutton", 27);
    \u0275\u0275listener("ngModelChange", function PromptEditorComponent_For_23_Conditional_2_Conditional_6_For_1_Template_p_radiobutton_ngModelChange_1_listener() {
      const exampleSet_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.selectExampleSet(exampleSet_r11));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 28);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const exampleSet_r11 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("binary", true)("inputId", "show_example_set_" + exampleSet_r11.key)("ngModel", ctx_r2.selectedExampleSet().key === exampleSet_r11.key);
    \u0275\u0275advance();
    \u0275\u0275property("for", "show_example_set_" + exampleSet_r11.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, exampleSet_r11.title));
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, PromptEditorComponent_For_23_Conditional_2_Conditional_6_For_1_Template, 5, 7, "div", 26, _forTrack1);
  }
  if (rf & 2) {
    const tab_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275repeater(tab_r7.exampleSets);
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_7_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "p-checkbox", 27);
    \u0275\u0275listener("ngModelChange", function PromptEditorComponent_For_23_Conditional_2_Conditional_7_For_1_Template_p_checkbox_ngModelChange_1_listener() {
      const prompt_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.togglePrompt(prompt_r13.enumKey));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 28);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const prompt_r13 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("binary", true)("inputId", "show_" + prompt_r13.enumKey)("ngModel", ctx_r2.isPromptVisible(prompt_r13.enumKey));
    \u0275\u0275advance();
    \u0275\u0275classProp("text-red", ctx_r2.isPromptConfig(prompt_r13) ? !prompt_r13.promptText.available : false);
    \u0275\u0275property("for", "show_" + prompt_r13.enumKey);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 7, prompt_r13.translationKey), " ");
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, PromptEditorComponent_For_23_Conditional_2_Conditional_7_For_1_Template, 5, 9, "div", 29, _forTrack2);
  }
  if (rf & 2) {
    const tab_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275repeater(tab_r7.prompts);
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_9_For_1_Conditional_0_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-iftalabel")(1, "textarea", 30);
    \u0275\u0275twoWayListener("ngModelChange", function PromptEditorComponent_For_23_Conditional_2_Conditional_9_For_1_Conditional_0_For_4_Template_textarea_ngModelChange_1_listener($event) {
      const item_r15 = \u0275\u0275restoreView(_r14).$implicit;
      \u0275\u0275twoWayBindingSet(item_r15.promptText, $event) || (item_r15.promptText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function PromptEditorComponent_For_23_Conditional_2_Conditional_9_For_1_Conditional_0_For_4_Template_textarea_ngModelChange_1_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.updateDiff());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 31);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r15 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", item_r15.promptText);
    \u0275\u0275property("autoResize", true)("id", item_r15.enumKey);
    \u0275\u0275advance();
    \u0275\u0275property("for", item_r15.enumKey);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, item_r15.translationKey));
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_9_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, PromptEditorComponent_For_23_Conditional_2_Conditional_9_For_1_Conditional_0_For_4_Template, 5, 7, "p-iftalabel", null, _forTrack2);
  }
  if (rf & 2) {
    const fragment_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, fragment_r16.label));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(fragment_r16.data);
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_9_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PromptEditorComponent_For_23_Conditional_2_Conditional_9_For_1_Conditional_0_Template, 5, 3);
  }
  if (rf & 2) {
    const fragment_r16 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional(ctx_r2.isFragmentVisible(fragment_r16.key) ? 0 : -1);
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, PromptEditorComponent_For_23_Conditional_2_Conditional_9_For_1_Template, 1, 1, null, null, _forTrack1);
  }
  if (rf & 2) {
    const tab_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275repeater(tab_r7.fragments);
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_10_For_2_Conditional_0_For_4_For_4_Conditional_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const option_r20 = ctx.$implicit;
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(1, 1, option_r20.label));
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_10_For_2_Conditional_0_For_4_For_4_Conditional_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const option_r21 = ctx.$implicit;
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(1, 1, option_r21.label));
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_10_For_2_Conditional_0_For_4_For_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-iftalabel", 32)(1, "p-select", 33);
    \u0275\u0275twoWayListener("ngModelChange", function PromptEditorComponent_For_23_Conditional_2_Conditional_10_For_2_Conditional_0_For_4_For_4_Conditional_1_Template_p_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r18);
      const rule_r19 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(rule_r19.severity, $event) || (rule_r19.severity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onChange", function PromptEditorComponent_For_23_Conditional_2_Conditional_10_For_2_Conditional_0_For_4_For_4_Conditional_1_Template_p_select_onChange_1_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext(8);
      return \u0275\u0275resetView(ctx_r2.updateDiff());
    });
    \u0275\u0275template(2, PromptEditorComponent_For_23_Conditional_2_Conditional_10_For_2_Conditional_0_For_4_For_4_Conditional_1_ng_template_2_Template, 2, 3, "ng-template", 34)(3, PromptEditorComponent_For_23_Conditional_2_Conditional_10_For_2_Conditional_0_For_4_For_4_Conditional_1_ng_template_3_Template, 2, 3, "ng-template", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "label", 31);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const rule_r19 = \u0275\u0275nextContext().$implicit;
    const skill_r22 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", rule_r19.severity);
    \u0275\u0275property("id", skill_r22.enumKey + "_" + rule_r19.id + "_severity")("options", ctx_r2.skillSeverityOptions);
    \u0275\u0275advance(3);
    \u0275\u0275property("for", skill_r22.enumKey + "_" + rule_r19.id + "_severity");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 5, "dev.prompts.skills.severity._label"));
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_10_For_2_Conditional_0_For_4_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275conditionalCreate(1, PromptEditorComponent_For_23_Conditional_2_Conditional_10_For_2_Conditional_0_For_4_For_4_Conditional_1_Template, 7, 7, "p-iftalabel", 32);
    \u0275\u0275elementStart(2, "p-iftalabel")(3, "textarea", 30);
    \u0275\u0275twoWayListener("ngModelChange", function PromptEditorComponent_For_23_Conditional_2_Conditional_10_For_2_Conditional_0_For_4_For_4_Template_textarea_ngModelChange_3_listener($event) {
      const rule_r19 = \u0275\u0275restoreView(_r17).$implicit;
      \u0275\u0275twoWayBindingSet(rule_r19.text, $event) || (rule_r19.text = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function PromptEditorComponent_For_23_Conditional_2_Conditional_10_For_2_Conditional_0_For_4_For_4_Template_textarea_ngModelChange_3_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext(7);
      return \u0275\u0275resetView(ctx_r2.updateDiff());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "label", 31);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const rule_r19 = ctx.$implicit;
    const skill_r22 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(rule_r19.severity ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", rule_r19.text);
    \u0275\u0275property("autoResize", true)("id", skill_r22.enumKey + "_" + rule_r19.id);
    \u0275\u0275advance();
    \u0275\u0275property("for", skill_r22.enumKey + "_" + rule_r19.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(rule_r19.id);
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_10_For_2_Conditional_0_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, PromptEditorComponent_For_23_Conditional_2_Conditional_10_For_2_Conditional_0_For_4_For_4_Template, 6, 6, "div", 15, _forTrack3);
  }
  if (rf & 2) {
    const group_r23 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r2.getSkillGroupLabel(group_r23.key)));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(group_r23.rules);
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_10_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, PromptEditorComponent_For_23_Conditional_2_Conditional_10_For_2_Conditional_0_For_4_Template, 5, 3, null, null, _forTrack1);
  }
  if (rf & 2) {
    const skill_r22 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, skill_r22.translationKey));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.getSkillGroups(skill_r22));
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PromptEditorComponent_For_23_Conditional_2_Conditional_10_For_2_Conditional_0_Template, 5, 3);
  }
  if (rf & 2) {
    const skill_r22 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional(ctx_r2.isPromptVisible(skill_r22.enumKey) ? 0 : -1);
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275repeaterCreate(1, PromptEditorComponent_For_23_Conditional_2_Conditional_10_For_2_Template, 1, 1, null, null, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(tab_r7.skills);
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_11_For_8_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-message", 41);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx));
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_11_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h3", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 37)(3, "pre", 38);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "textarea", 39);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275listener("ngModelChange", function PromptEditorComponent_For_23_Conditional_2_Conditional_11_For_8_Template_textarea_ngModelChange_6_listener($event) {
      const example_r25 = \u0275\u0275restoreView(_r24).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.updateExampleJsonDraft(example_r25, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "pre", 40);
    \u0275\u0275text(9, "}");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(10, PromptEditorComponent_For_23_Conditional_2_Conditional_11_For_8_Conditional_10_Template, 3, 3, "p-message", 41);
  }
  if (rf & 2) {
    let tmp_32_0;
    const example_r25 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("id", example_r25.id + "_heading");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getAlertRewriteExampleLegend(example_r25));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(4, 8, "dev.prompts.examples.selectionMetadata"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getExampleSelectionMetadata(example_r25));
    \u0275\u0275advance();
    \u0275\u0275property("id", example_r25.id + "_json")("ngModel", ctx_r2.getExampleJsonDraft(example_r25));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(7, 10, "dev.prompts.examples.editableFinalExample"));
    \u0275\u0275advance(4);
    \u0275\u0275conditional((tmp_32_0 = ctx_r2.getExampleJsonError(example_r25)) ? 10 : -1, tmp_32_0);
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "h2", 16);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(7, PromptEditorComponent_For_23_Conditional_2_Conditional_11_For_8_Template, 11, 12, null, null, _forTrack3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, ctx_r2.selectedExampleSet().title));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, ctx_r2.selectedExampleSet().description));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.selectedExampleSet().examples);
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-iftalabel")(1, "textarea", 30);
    \u0275\u0275twoWayListener("ngModelChange", function PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_0_Template_textarea_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r26);
      const prompt_r27 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(prompt_r27.promptText, $event) || (prompt_r27.promptText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_0_Template_textarea_ngModelChange_1_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.updateDiff());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 31);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const prompt_r27 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", prompt_r27.promptText);
    \u0275\u0275property("autoResize", true)("id", prompt_r27.enumKey);
    \u0275\u0275advance();
    \u0275\u0275property("for", prompt_r27.enumKey);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, prompt_r27.translationKey));
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_1_For_5_For_1_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r28 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, section_r28.label));
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_1_For_5_For_1_Conditional_0_For_2_Conditional_3_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-iftalabel")(1, "textarea", 42);
    \u0275\u0275listener("ngModelChange", function PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_1_For_5_For_1_Conditional_0_For_2_Conditional_3_For_1_Template_textarea_ngModelChange_1_listener($event) {
      const \u0275$index_222_r30 = \u0275\u0275restoreView(_r29).$index;
      const option_r31 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(9);
      return \u0275\u0275resetView(ctx_r2.updateAlertRewriteSystemInstruction(option_r31.key, \u0275$index_222_r30, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 31);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const instruction_r32 = ctx.$implicit;
    const \u0275$index_222_r30 = ctx.$index;
    const option_r31 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("autoResize", true)("id", "alert_rewrite_" + option_r31.key + "_" + \u0275$index_222_r30)("ngModel", instruction_r32);
    \u0275\u0275advance();
    \u0275\u0275property("for", "alert_rewrite_" + option_r31.key + "_" + \u0275$index_222_r30);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 5, "dev.prompts.alertRewrite.instructionLabel", \u0275\u0275pureFunction1(8, _c2, \u0275$index_222_r30 + 1)), " ");
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_1_For_5_For_1_Conditional_0_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_1_For_5_For_1_Conditional_0_For_2_Conditional_3_For_1_Template, 5, 10, "p-iftalabel", null, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    const option_r31 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275repeater(option_r31.bulletItems);
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_1_For_5_For_1_Conditional_0_For_2_Conditional_4_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-message", 41);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx));
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_1_For_5_For_1_Conditional_0_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-iftalabel")(1, "textarea", 43);
    \u0275\u0275listener("ngModelChange", function PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_1_For_5_For_1_Conditional_0_For_2_Conditional_4_Template_textarea_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r33);
      const option_r31 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(9);
      return \u0275\u0275resetView(ctx_r2.updateAlertRewriteOutputSchema(option_r31.key, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 31);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(5, PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_1_For_5_For_1_Conditional_0_For_2_Conditional_4_Conditional_5_Template, 3, 3, "p-message", 41);
  }
  if (rf & 2) {
    let tmp_63_0;
    const option_r31 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(9);
    \u0275\u0275advance();
    \u0275\u0275property("autoResize", true)("id", "alert_rewrite_" + option_r31.key)("ngModel", ctx_r2.getAlertRewriteOutputSchemaDraft(option_r31.key));
    \u0275\u0275advance();
    \u0275\u0275property("for", "alert_rewrite_" + option_r31.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 6, "dev.prompts.alertRewrite.outputSchemaLabel"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_63_0 = ctx_r2.getAlertRewriteOutputSchemaError(option_r31.key)) ? 5 : -1, tmp_63_0);
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_1_For_5_For_1_Conditional_0_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r31 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(9);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getPipelineOptionContent(option_r31));
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_1_For_5_For_1_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_1_For_5_For_1_Conditional_0_For_2_Conditional_3_Template, 2, 0)(4, PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_1_For_5_For_1_Conditional_0_For_2_Conditional_4_Template, 6, 8)(5, PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_1_For_5_For_1_Conditional_0_For_2_Conditional_5_Template, 2, 1, "pre", 19);
  }
  if (rf & 2) {
    const option_r31 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, option_r31.label));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((option_r31.key === "systemWithExamples" || option_r31.key === "systemWithoutExamples") && option_r31.bulletItems ? 3 : option_r31.key === "outputSchemaWithExamples" || option_r31.key === "outputSchemaWithoutExamples" ? 4 : 5);
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_1_For_5_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_1_For_5_For_1_Conditional_0_Conditional_0_Template, 3, 3, "h3");
    \u0275\u0275repeaterCreate(1, PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_1_For_5_For_1_Conditional_0_For_2_Template, 6, 4, null, null, _forTrack1);
  }
  if (rf & 2) {
    const section_r28 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(!section_r28.hideLabel && section_r28.label ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(section_r28.options);
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_1_For_5_For_1_Conditional_1_Conditional_3_For_1_Conditional_3_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-iftalabel")(1, "textarea", 42);
    \u0275\u0275listener("ngModelChange", function PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_1_For_5_For_1_Conditional_1_Conditional_3_For_1_Conditional_3_For_1_Template_textarea_ngModelChange_1_listener($event) {
      const \u0275$index_261_r35 = \u0275\u0275restoreView(_r34).$index;
      const retry_r36 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(10);
      return \u0275\u0275resetView(ctx_r2.updateAlertRewriteRetryInstruction(retry_r36.key, $event, \u0275$index_261_r35));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 31);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const instruction_r37 = ctx.$implicit;
    const \u0275$index_261_r35 = ctx.$index;
    const retry_r36 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("autoResize", true)("id", "alert_rewrite_retry_" + retry_r36.key + "_" + \u0275$index_261_r35)("ngModel", instruction_r37);
    \u0275\u0275advance();
    \u0275\u0275property("for", "alert_rewrite_retry_" + retry_r36.key + "_" + \u0275$index_261_r35);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 5, "dev.prompts.alertRewrite.instructionLabel", \u0275\u0275pureFunction1(8, _c2, \u0275$index_261_r35 + 1)), " ");
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_1_For_5_For_1_Conditional_1_Conditional_3_For_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_1_For_5_For_1_Conditional_1_Conditional_3_For_1_Conditional_3_For_1_Template, 5, 10, "p-iftalabel", null, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    const retry_r36 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275repeater(retry_r36.bulletItems);
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_1_For_5_For_1_Conditional_1_Conditional_3_For_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "textarea", 42);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("ngModelChange", function PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_1_For_5_For_1_Conditional_1_Conditional_3_For_1_Conditional_4_Template_textarea_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r38);
      const retry_r36 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(10);
      return \u0275\u0275resetView(ctx_r2.updateAlertRewriteRetryInstruction(retry_r36.key, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const retry_r36 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("autoResize", true)("id", "alert_rewrite_retry_" + retry_r36.key)("ngModel", retry_r36.instruction);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 4, retry_r36.condition));
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_1_For_5_For_1_Conditional_1_Conditional_3_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_1_For_5_For_1_Conditional_1_Conditional_3_For_1_Conditional_3_Template, 2, 0)(4, PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_1_For_5_For_1_Conditional_1_Conditional_3_For_1_Conditional_4_Template, 2, 6, "textarea", 44);
  }
  if (rf & 2) {
    const retry_r36 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, retry_r36.condition));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(retry_r36.bulletItems ? 3 : 4);
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_1_For_5_For_1_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_1_For_5_For_1_Conditional_1_Conditional_3_For_1_Template, 5, 4, null, null, _forTrack1);
  }
  if (rf & 2) {
    const section_r28 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275repeater(section_r28.conditionItems);
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_1_For_5_For_1_Conditional_1_Conditional_4_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-iftalabel")(1, "textarea", 42);
    \u0275\u0275listener("ngModelChange", function PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_1_For_5_For_1_Conditional_1_Conditional_4_For_1_Template_textarea_ngModelChange_1_listener($event) {
      const \u0275$index_275_r40 = \u0275\u0275restoreView(_r39).$index;
      const ctx_r2 = \u0275\u0275nextContext(10);
      return \u0275\u0275resetView(ctx_r2.updateAlertRewriteBaseRule(\u0275$index_275_r40, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 31);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const rule_r41 = ctx.$implicit;
    const \u0275$index_275_r40 = ctx.$index;
    \u0275\u0275advance();
    \u0275\u0275property("autoResize", true)("id", "alert_rewrite_base_rule_" + \u0275$index_275_r40)("ngModel", rule_r41);
    \u0275\u0275advance();
    \u0275\u0275property("for", "alert_rewrite_base_rule_" + \u0275$index_275_r40);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 5, "dev.prompts.alertRewrite.baseRuleLabel", \u0275\u0275pureFunction1(8, _c2, \u0275$index_275_r40 + 1)), " ");
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_1_For_5_For_1_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_1_For_5_For_1_Conditional_1_Conditional_4_For_1_Template, 5, 10, "p-iftalabel", null, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    const section_r28 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275repeater(section_r28.bulletItems);
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_1_For_5_For_1_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "textarea", 42);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("ngModelChange", function PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_1_For_5_For_1_Conditional_1_Conditional_5_Template_textarea_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r42);
      const section_r28 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(7);
      return \u0275\u0275resetView(ctx_r2.updateAlertRewriteConditionalInstruction(section_r28.key, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r28 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("autoResize", true)("id", "alert_rewrite_" + section_r28.key)("ngModel", section_r28.content);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 4, section_r28.label ?? ""));
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_1_For_5_For_1_Conditional_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r28 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getPipelineSectionContent(section_r28));
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_1_For_5_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_1_For_5_For_1_Conditional_1_Conditional_3_Template, 2, 0)(4, PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_1_For_5_For_1_Conditional_1_Conditional_4_Template, 2, 0)(5, PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_1_For_5_For_1_Conditional_1_Conditional_5_Template, 2, 6, "textarea", 44)(6, PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_1_For_5_For_1_Conditional_1_Conditional_6_Template, 2, 1, "pre", 19);
  }
  if (rf & 2) {
    const section_r28 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, section_r28.label ?? ""));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(section_r28.key === "retryInstructions" && section_r28.conditionItems ? 3 : section_r28.key === "baseRules" && section_r28.bulletItems ? 4 : section_r28.key === "preserveFinalStandaloneLink" || section_r28.key === "enforceLinkManifest" ? 5 : 6);
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_1_For_5_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_1_For_5_For_1_Conditional_0_Template, 3, 1)(1, PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_1_For_5_For_1_Conditional_1_Template, 7, 4);
  }
  if (rf & 2) {
    const section_r28 = ctx.$implicit;
    \u0275\u0275conditional((section_r28.options == null ? null : section_r28.options.length) ? 0 : 1);
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_1_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_1_For_5_For_1_Template, 2, 1, null, null, _forTrack1);
  }
  if (rf & 2) {
    const group_r43 = ctx.$implicit;
    \u0275\u0275repeater(group_r43.sections);
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "h2", 16);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_1_For_5_Template, 2, 0, null, null, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const prompt_r27 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, prompt_r27.translationKey));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.alertRewritePipelineGroups);
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const option_r45 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, option_r45.label), " ");
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const option_r46 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, option_r46.label), " ");
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_2_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const option_r47 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, option_r47.label), " ");
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_2_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const option_r48 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, option_r48.label), " ");
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_2_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-iftalabel")(1, "textarea", 30);
    \u0275\u0275twoWayListener("ngModelChange", function PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_2_Conditional_29_Template_textarea_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r49);
      const prompt_r27 = \u0275\u0275nextContext(2).$implicit;
      \u0275\u0275twoWayBindingSet(prompt_r27.promptText.jsonSchema, $event) || (prompt_r27.promptText.jsonSchema = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_2_Conditional_29_Template_textarea_ngModelChange_1_listener() {
      \u0275\u0275restoreView(_r49);
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.updateDiff());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 31);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const prompt_r27 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", prompt_r27.promptText.jsonSchema);
    \u0275\u0275property("autoResize", true)("id", prompt_r27.enumKey + "_jsonSchema");
    \u0275\u0275advance();
    \u0275\u0275property("for", prompt_r27.enumKey + "_jsonSchema");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, "aiPrompt.component.jsonSchema"));
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 45)(4, "p-iftalabel", 46)(5, "p-select", 47);
    \u0275\u0275twoWayListener("ngModelChange", function PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_2_Template_p_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r44);
      const prompt_r27 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(prompt_r27.promptText.role, $event) || (prompt_r27.promptText.role = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onChange", function PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_2_Template_p_select_onChange_5_listener() {
      \u0275\u0275restoreView(_r44);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.updateDiff());
    });
    \u0275\u0275template(6, PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_2_ng_template_6_Template, 2, 3, "ng-template", 34)(7, PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_2_ng_template_7_Template, 2, 3, "ng-template", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "label", 31);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "p-iftalabel", 46)(12, "p-select", 47);
    \u0275\u0275twoWayListener("ngModelChange", function PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_2_Template_p_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r44);
      const prompt_r27 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(prompt_r27.promptText.output, $event) || (prompt_r27.promptText.output = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onChange", function PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_2_Template_p_select_onChange_12_listener() {
      \u0275\u0275restoreView(_r44);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.updateDiff());
    });
    \u0275\u0275template(13, PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_2_ng_template_13_Template, 2, 3, "ng-template", 34)(14, PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_2_ng_template_14_Template, 2, 3, "ng-template", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "label", 31);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "p-iftalabel", 46)(19, "p-multiselect", 48);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_2_Template_p_multiselect_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r44);
      const prompt_r27 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(prompt_r27.promptText.rubric, $event) || (prompt_r27.promptText.rubric = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onChange", function PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_2_Template_p_multiselect_onChange_19_listener() {
      \u0275\u0275restoreView(_r44);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.updateDiff());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "label", 31);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "p-iftalabel")(25, "textarea", 30);
    \u0275\u0275twoWayListener("ngModelChange", function PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_2_Template_textarea_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r44);
      const prompt_r27 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(prompt_r27.promptText.task, $event) || (prompt_r27.promptText.task = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_2_Template_textarea_ngModelChange_25_listener() {
      \u0275\u0275restoreView(_r44);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.updateDiff());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "label", 31);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(29, PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_2_Conditional_29_Template, 5, 7, "p-iftalabel");
  }
  if (rf & 2) {
    const prompt_r27 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 25, prompt_r27.translationKey));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", prompt_r27.promptText.role);
    \u0275\u0275property("id", prompt_r27.enumKey + "_role")("options", ctx_r2.roleOptions);
    \u0275\u0275advance(3);
    \u0275\u0275property("for", prompt_r27.enumKey + "_role");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 27, "aiPrompt.component.role"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", prompt_r27.promptText.output);
    \u0275\u0275property("id", prompt_r27.enumKey + "_output")("options", ctx_r2.outputOptions);
    \u0275\u0275advance(3);
    \u0275\u0275property("for", prompt_r27.enumKey + "_output");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 29, "aiPrompt.component.output"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", prompt_r27.promptText.rubric);
    \u0275\u0275property("id", prompt_r27.enumKey + "_rubric")("options", ctx_r2.rubricOptions())("placeholder", \u0275\u0275pipeBind1(20, 31, "common.none"));
    \u0275\u0275advance(2);
    \u0275\u0275property("for", prompt_r27.enumKey + "_rubric");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 33, "aiPrompt.component.rubric"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("prompt-content-sized", prompt_r27.enumKey === "AlertsProblems");
    \u0275\u0275twoWayProperty("ngModel", prompt_r27.promptText.task);
    \u0275\u0275property("autoResize", prompt_r27.enumKey !== "AlertsProblems")("id", prompt_r27.enumKey + "_task");
    \u0275\u0275advance();
    \u0275\u0275property("for", prompt_r27.enumKey + "_task");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 35, "aiPrompt.component.task"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(prompt_r27.promptText.output === ctx_r2.OutputKey.Json ? 29 : -1);
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_0_Template, 5, 7, "p-iftalabel");
    \u0275\u0275conditionalCreate(1, PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_1_Template, 6, 3, "div", 25);
    \u0275\u0275conditionalCreate(2, PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Conditional_2_Template, 30, 37);
  }
  if (rf & 2) {
    const prompt_r27 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional(ctx_r2.isPromptString(prompt_r27) ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isPromptConfig(prompt_r27) && ctx_r2.isPromptVisible(prompt_r27.enumKey) && ctx_r2.isAlertRewritePipeline(prompt_r27) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isPromptConfig(prompt_r27) && ctx_r2.isPromptVisible(prompt_r27.enumKey) && !ctx_r2.isAlertRewritePipeline(prompt_r27) ? 2 : -1);
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, PromptEditorComponent_For_23_Conditional_2_Conditional_12_For_1_Template, 3, 3, null, null, _forTrack2);
  }
  if (rf & 2) {
    const tab_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275repeater(tab_r7.prompts);
  }
}
function PromptEditorComponent_For_23_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 23);
    \u0275\u0275conditionalCreate(4, PromptEditorComponent_For_23_Conditional_2_Conditional_4_Template, 2, 0)(5, PromptEditorComponent_For_23_Conditional_2_Conditional_5_Template, 2, 0)(6, PromptEditorComponent_For_23_Conditional_2_Conditional_6_Template, 2, 0)(7, PromptEditorComponent_For_23_Conditional_2_Conditional_7_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 24);
    \u0275\u0275conditionalCreate(9, PromptEditorComponent_For_23_Conditional_2_Conditional_9_Template, 2, 0);
    \u0275\u0275conditionalCreate(10, PromptEditorComponent_For_23_Conditional_2_Conditional_10_Template, 3, 0, "div", 25);
    \u0275\u0275conditionalCreate(11, PromptEditorComponent_For_23_Conditional_2_Conditional_11_Template, 9, 6, "div", 25);
    \u0275\u0275conditionalCreate(12, PromptEditorComponent_For_23_Conditional_2_Conditional_12_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 6, tab_r7.description));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.isFragmentsTab(tab_r7) ? 4 : ctx_r2.isSkillsTab(tab_r7) ? 5 : ctx_r2.isExamplesTab(tab_r7) ? 6 : 7);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r2.isFragmentsTab(tab_r7) ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isSkillsTab(tab_r7) ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isExamplesTab(tab_r7) ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.isFragmentsTab(tab_r7) && !ctx_r2.isSkillsTab(tab_r7) && !ctx_r2.isExamplesTab(tab_r7) ? 12 : -1);
  }
}
function PromptEditorComponent_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-tabpanel", 13)(1, "div", 14);
    \u0275\u0275conditionalCreate(2, PromptEditorComponent_For_23_Conditional_2_Template, 13, 8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("value", tab_r7.value);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.styleCardService.cardStyles(void 0, void 0, void 0, void 0, void 0, "border-top-none border-noround-top"));
    \u0275\u0275advance();
    \u0275\u0275conditional(tab_r7.value === ctx_r2.selectedTab() ? 2 : -1);
  }
}
function PromptEditorComponent_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const group_r50 = ctx.$implicit;
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(1, 1, group_r50.label));
  }
}
function PromptEditorComponent_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const selected_r51 = ctx.$implicit;
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(1, 1, selected_r51.translationKey));
  }
}
function PromptEditorComponent_ng_template_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const prompt_r52 = ctx.$implicit;
    \u0275\u0275classProp("text-red", !prompt_r52.promptText.available);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 3, prompt_r52.translationKey));
  }
}
function PromptEditorComponent_Conditional_41_For_4_For_1_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r53 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, section_r53.label));
  }
}
function PromptEditorComponent_Conditional_41_For_4_For_1_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "pre", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r54 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, option_r54.label));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.getPipelineOptionContent(option_r54));
  }
}
function PromptEditorComponent_Conditional_41_For_4_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PromptEditorComponent_Conditional_41_For_4_For_1_Conditional_0_Conditional_0_Template, 3, 3, "h3");
    \u0275\u0275repeaterCreate(1, PromptEditorComponent_Conditional_41_For_4_For_1_Conditional_0_For_2_Template, 5, 4, null, null, _forTrack1);
  }
  if (rf & 2) {
    const section_r53 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(!section_r53.hideLabel && section_r53.label ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(section_r53.options);
  }
}
function PromptEditorComponent_Conditional_41_For_4_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "pre", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r53 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, section_r53.label ?? ""));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.getPipelineSectionContent(section_r53));
  }
}
function PromptEditorComponent_Conditional_41_For_4_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PromptEditorComponent_Conditional_41_For_4_For_1_Conditional_0_Template, 3, 1)(1, PromptEditorComponent_Conditional_41_For_4_For_1_Conditional_1_Template, 5, 4);
  }
  if (rf & 2) {
    const section_r53 = ctx.$implicit;
    \u0275\u0275conditional((section_r53.options == null ? null : section_r53.options.length) ? 0 : 1);
  }
}
function PromptEditorComponent_Conditional_41_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, PromptEditorComponent_Conditional_41_For_4_For_1_Template, 2, 1, null, null, _forTrack1);
  }
  if (rf & 2) {
    const group_r55 = ctx.$implicit;
    \u0275\u0275repeater(group_r55.sections);
  }
}
function PromptEditorComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, PromptEditorComponent_Conditional_41_For_4_Template, 2, 0, null, null, _forTrack1);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "dev.prompts.alertRewrite.testUnavailable"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.alertRewritePipelineGroups);
  }
}
function PromptEditorComponent_Conditional_42_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "pre", 19);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const example_r56 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getAlertRewriteExampleLegend(example_r56));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getFormattedExamplePreview(example_r56));
  }
}
function PromptEditorComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, PromptEditorComponent_Conditional_42_For_1_Template, 4, 2, null, null, _forTrack3);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.alertRewriteExamples);
  }
}
function PromptEditorComponent_Conditional_43_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "pre", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r57 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, section_r57.label ?? ""));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(section_r57.content);
  }
}
function PromptEditorComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, PromptEditorComponent_Conditional_43_For_1_Template, 5, 4, null, null, _forTrack1);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.alertProblemsSections);
  }
}
function PromptEditorComponent_Conditional_44_For_4_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "pre", 19);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rule_r58 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(rule_r58.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(rule_r58.text);
  }
}
function PromptEditorComponent_Conditional_44_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, PromptEditorComponent_Conditional_44_For_4_For_4_Template, 4, 2, null, null, _forTrack3);
  }
  if (rf & 2) {
    const group_r59 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r2.getSkillGroupLabel(group_r59.key)));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(group_r59.rules);
  }
}
function PromptEditorComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, PromptEditorComponent_Conditional_44_For_4_Template, 5, 3, null, null, _forTrack1);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "dev.prompts.skills.testUnavailable"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.getSelectedSkillGroups());
  }
}
function PromptEditorComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.aiPrompt());
  }
}
function PromptEditorComponent_Conditional_46_Conditional_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-progressspinner");
  }
}
function PromptEditorComponent_Conditional_46_Conditional_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-message", 41);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "dev.prompts.preview.alertProblems.loadError", \u0275\u0275pureFunction1(4, _c3, ctx_r2.alertProblemsTestError())), " ");
  }
}
function PromptEditorComponent_Conditional_46_Conditional_1_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-message", 41);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "dev.prompts.preview.alertProblems.invalidPayload"));
  }
}
function PromptEditorComponent_Conditional_46_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h3", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 51)(4, "div", 52)(5, "input", 53);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275listener("ngModelChange", function PromptEditorComponent_Conditional_46_Conditional_1_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r61);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onAlertProblemsTestUrlChange($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p-button", 54);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275listener("onClick", function PromptEditorComponent_Conditional_46_Conditional_1_Template_p_button_onClick_8_listener() {
      \u0275\u0275restoreView(_r61);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.loadAlertProblemsTestPage());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(10, PromptEditorComponent_Conditional_46_Conditional_1_Conditional_10_Template, 1, 0, "p-progressspinner");
    \u0275\u0275conditionalCreate(11, PromptEditorComponent_Conditional_46_Conditional_1_Conditional_11_Template, 3, 6, "p-message", 41);
    \u0275\u0275elementStart(12, "h3");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "textarea", 55);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function PromptEditorComponent_Conditional_46_Conditional_1_Template_textarea_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r61);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.alertProblemsTestContent, $event) || (ctx_r2.alertProblemsTestContent = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function PromptEditorComponent_Conditional_46_Conditional_1_Template_textarea_ngModelChange_15_listener() {
      \u0275\u0275restoreView(_r61);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.alertProblemsTestPayloadInvalid.set(false));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(17, PromptEditorComponent_Conditional_46_Conditional_1_Conditional_17_Template, 3, 3, "p-message", 41);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 12, "dev.prompts.preview.alertProblems.testPage"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r2.alertProblemsTestUrl)("placeholder", \u0275\u0275pipeBind1(6, 14, "dev.prompts.preview.alertProblems.enterTestPageUrl"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(7, 16, "dev.prompts.preview.alertProblems.enterTestPageUrl"));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r2.alertProblemsTestUrl.trim() || ctx_r2.alertProblemsTestLoading())("label", \u0275\u0275pipeBind1(9, 18, "dev.prompts.preview.alertProblems.loadPage"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.alertProblemsTestLoading() ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.alertProblemsTestError() ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 20, "dev.prompts.preview.alertProblems.generatedPayload"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.alertProblemsTestContent);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(16, 22, "dev.prompts.preview.alertProblems.generatedPayload"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.alertProblemsTestPayloadInvalid() ? 17 : -1);
  }
}
function PromptEditorComponent_Conditional_46_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h3", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-iftalabel")(4, "textarea", 56);
    \u0275\u0275twoWayListener("ngModelChange", function PromptEditorComponent_Conditional_46_Conditional_2_Template_textarea_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r62);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.description, $event) || (ctx_r2.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "label", 57);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 3, "dev.prompts.preview.testContent"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 5, "dev.prompts.preview.testContentLabel"));
  }
}
function PromptEditorComponent_Conditional_46_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-progressspinner");
  }
}
function PromptEditorComponent_Conditional_46_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-message", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.aiState().error);
  }
}
function PromptEditorComponent_Conditional_46_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Answered by: ", ctx_r2.aiState().respondingModel);
  }
}
function PromptEditorComponent_Conditional_46_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.formatTestResult(ctx_r2.result));
  }
}
function PromptEditorComponent_Conditional_46_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "json");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r2.response));
  }
}
function PromptEditorComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r60 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275conditionalCreate(1, PromptEditorComponent_Conditional_46_Conditional_1_Template, 18, 24)(2, PromptEditorComponent_Conditional_46_Conditional_2_Template, 8, 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 49)(4, "p-button", 50);
    \u0275\u0275listener("onClick", function PromptEditorComponent_Conditional_46_Template_p_button_onClick_4_listener() {
      \u0275\u0275restoreView(_r60);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.testResult());
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p-button", 50);
    \u0275\u0275listener("onClick", function PromptEditorComponent_Conditional_46_Template_p_button_onClick_7_listener() {
      \u0275\u0275restoreView(_r60);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.testResponse());
    });
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(10, PromptEditorComponent_Conditional_46_Conditional_10_Template, 1, 0, "p-progressspinner");
    \u0275\u0275conditionalCreate(11, PromptEditorComponent_Conditional_46_Conditional_11_Template, 2, 1, "p-message", 41);
    \u0275\u0275conditionalCreate(12, PromptEditorComponent_Conditional_46_Conditional_12_Template, 2, 1, "small");
    \u0275\u0275conditionalCreate(13, PromptEditorComponent_Conditional_46_Conditional_13_Template, 2, 1, "pre", 19);
    \u0275\u0275conditionalCreate(14, PromptEditorComponent_Conditional_46_Conditional_14_Template, 3, 3, "pre", 19);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.selectedPromptIsAlertProblems() ? 1 : 2);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r2.getSelectedPromptConfig() || !ctx_r2.hasTestContent() || ctx_r2.alertProblemsTestLoading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 10, "dev.prompts.preview.getResult"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r2.getSelectedPromptConfig() || !ctx_r2.hasTestContent() || ctx_r2.alertProblemsTestLoading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 12, "dev.prompts.preview.getResponse"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.aiState().loading ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.aiState().error ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.aiState().respondingModel ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.result ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.response ? 14 : -1);
  }
}
function PromptEditorComponent_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "div", null, 3);
    \u0275\u0275elementStart(2, "p-fieldset", 58);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "pre", null, 4)(6, "code", 59);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "p-button", 60);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275listener("onClick", function PromptEditorComponent_Conditional_52_Template_p_button_onClick_8_listener() {
      \u0275\u0275restoreView(_r63);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openPullRequest(ctx_r2.tabs[ctx_r2.selectedPromptTab()]));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("collapsed", true)("legend", \u0275\u0275pipeBind1(3, 6, "dev.prompts.pr.filePreview"))("toggleable", true);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.rebuildTabFile(ctx_r2.tabs[ctx_r2.selectedPromptTab()]));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r2.signInService.user() || ctx_r2.isExamplesTab(ctx_r2.tabs[ctx_r2.selectedPromptTab()]) && ctx_r2.hasInvalidExampleJson() || ctx_r2.tabs[ctx_r2.selectedPromptTab()].tool === "Page" && ctx_r2.hasInvalidAlertRewriteOutputSchema())("label", \u0275\u0275pipeBind1(9, 8, "dev.prompts.button.openPR"));
  }
}
function PromptEditorComponent_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-message", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "dev.prompts.pr.noChangesMessage"));
  }
}
var PromptEditorComponent = class _PromptEditorComponent {
  translate = inject(TranslateService);
  exportGitHubService = inject(ExportGitHubService);
  fetchService = inject(FetchService);
  settingsService = inject(UserSettingsService);
  openRouterService = inject(OpenRouterService);
  aiPromptService = inject(AiPromptService);
  alertContextService = inject(AlertContextService);
  compareService = inject(CompareService);
  signInService = inject(SignInService);
  styleCardService = inject(StyleCardService);
  constructor() {
    effect(() => {
      void this.settingsService.darkMode();
      this.updateDiff();
    });
    effect(() => {
      const tab = this.selectedTab();
      if (this.tabs.some((candidate) => candidate.value === tab)) {
        this.selectedPromptTab.set(tab);
      }
      this.updateDiff();
    });
  }
  // Type guard
  isPromptConfig(entry) {
    return typeof entry.promptText === "object" && entry.promptText !== null && "role" in entry.promptText && "task" in entry.promptText;
  }
  isPromptString(entry) {
    return typeof entry.promptText === "string";
  }
  isAlertRewritePipeline(entry) {
    return entry.enumKey === "AlertRewrite";
  }
  isAlertRewriteExamples(entry) {
    return entry.enumKey === "AlertExamples";
  }
  isFragmentsTab(tab) {
    return tab.fragments !== void 0;
  }
  isSkillsTab(tab) {
    return tab.skills !== void 0;
  }
  isExamplesTab(tab) {
    return tab.exampleSets !== void 0;
  }
  isSkillEntry(entry) {
    return typeof entry.promptText === "object" && entry.promptText !== null && "groups" in entry.promptText;
  }
  OutputKey = OutputKey;
  // Shared prompt fragments
  roleFragment = Object.keys(RoleKey).map((enumKey) => ({
    enumKey,
    translationKey: RoleKey[enumKey],
    promptText: RoleFragment[RoleKey[enumKey]]
  }));
  outputFragment = Object.keys(OutputKey).map((enumKey) => ({
    enumKey,
    translationKey: OutputKey[enumKey],
    promptText: OutputFragment[OutputKey[enumKey]]
  }));
  rubricFragment = Object.keys(RubricKey).map((enumKey) => ({
    enumKey,
    translationKey: RubricKey[enumKey],
    promptText: RubricFragment[RubricKey[enumKey]]
  }));
  fragments = [
    { key: "role", label: marker("aiPrompt.component.role"), data: this.roleFragment },
    { key: "output", label: marker("aiPrompt.component.output"), data: this.outputFragment },
    { key: "rubric", label: marker("aiPrompt.component.rubric"), data: this.rubricFragment }
  ];
  selectedFragment = "role";
  toggleFragment(type) {
    this.selectedFragment = type;
  }
  isFragmentVisible(type) {
    return this.selectedFragment === type;
  }
  // Dropdown values
  roleOptions = Object.values(RoleKey).map((key) => ({
    value: key,
    label: key
  }));
  rubricOptions = computed(() => {
    this.translate.currentLang();
    return Object.values(RubricKey).map((key) => ({
      value: key,
      label: this.translate.instant(key)
    }));
  }, ...ngDevMode ? [{ debugName: "rubricOptions" }] : (
    /* istanbul ignore next */
    []
  ));
  outputOptions = Object.values(OutputKey).map((key) => ({
    value: key,
    label: key
  }));
  skillSeverityOptions = [
    { value: "must", label: marker("dev.prompts.skills.severity.must") },
    { value: "should", label: marker("dev.prompts.skills.severity.should") }
  ];
  // Prompts
  inventoryPrompts = Object.keys(ToolsPromptKey).map((enumKey) => ({
    enumKey,
    translationKey: ToolsPromptKey[enumKey],
    promptText: ToolsPrompts[ToolsPromptKey[enumKey]]
  }));
  pagePrompts = Object.keys(PagePromptKey).map((enumKey) => ({
    enumKey,
    translationKey: PagePromptKey[enumKey],
    promptText: PagePrompts[PagePromptKey[enumKey]]
  }));
  get alertRewritePipeline() {
    return PagePrompts[PagePromptKey.AlertRewrite].pipeline;
  }
  problemPrompts = Object.keys(ProblemPromptKey).map((enumKey) => ({
    enumKey,
    translationKey: ProblemPromptKey[enumKey],
    promptText: ProblemPrompts[ProblemPromptKey[enumKey]]
  }));
  skillPrompts = Object.keys(SkillPromptKey).map((enumKey) => ({
    enumKey,
    translationKey: SkillPromptKey[enumKey],
    promptText: SkillPrompts[SkillPromptKey[enumKey]]
  }));
  exampleSets = [
    {
      key: "alertRewrite",
      kind: "alertRewrite",
      title: marker("aiPrompt.examples.alertRewrite"),
      description: marker("aiPrompt.examples.alertRewriteDescription"),
      sourcePath: "src/app/common/prompts/alert-rewrite.examples.ts",
      fileName: "alert-rewrite.examples.ts",
      examples: AlertRewriteExamples,
      original: this.rebuildAlertRewriteExamplesFile(AlertRewriteExamples)
    }
  ];
  selectedExampleSet = signal(this.exampleSets[0], ...ngDevMode ? [{ debugName: "selectedExampleSet" }] : (
    /* istanbul ignore next */
    []
  ));
  exampleJsonDrafts = signal(Object.fromEntries(AlertRewriteExamples.map((example) => [example.id, this.formatExampleJson(example)])), ...ngDevMode ? [{ debugName: "exampleJsonDrafts" }] : (
    /* istanbul ignore next */
    []
  ));
  exampleJsonErrors = signal({}, ...ngDevMode ? [{ debugName: "exampleJsonErrors" }] : (
    /* istanbul ignore next */
    []
  ));
  hasInvalidExampleJson = computed(() => Object.keys(this.exampleJsonErrors()).length > 0, ...ngDevMode ? [{ debugName: "hasInvalidExampleJson" }] : (
    /* istanbul ignore next */
    []
  ));
  alertRewriteOutputSchemaDrafts = signal({
    outputSchemaWithExamples: this.formatPromptSchema(this.alertRewritePipeline.outputSchemas.withExamples),
    outputSchemaWithoutExamples: this.formatPromptSchema(this.alertRewritePipeline.outputSchemas.withoutExamples)
  }, ...ngDevMode ? [{ debugName: "alertRewriteOutputSchemaDrafts" }] : (
    /* istanbul ignore next */
    []
  ));
  alertRewriteOutputSchemaErrors = signal({}, ...ngDevMode ? [{ debugName: "alertRewriteOutputSchemaErrors" }] : (
    /* istanbul ignore next */
    []
  ));
  hasInvalidAlertRewriteOutputSchema = computed(() => Object.keys(this.alertRewriteOutputSchemaErrors()).length > 0, ...ngDevMode ? [{ debugName: "hasInvalidAlertRewriteOutputSchema" }] : (
    /* istanbul ignore next */
    []
  ));
  get alertRewritePipelineGroups() {
    return this.buildAlertRewritePipelineGroups();
  }
  get alertProblemsSections() {
    return this.buildAlertProblemsSections();
  }
  alertRewriteExamples = AlertRewriteExamples;
  selectedPrompts = new Set([this.inventoryPrompts[0]?.enumKey, this.pagePrompts[0]?.enumKey, this.problemPrompts[0]?.enumKey, this.skillPrompts[0]?.enumKey].filter(Boolean));
  togglePrompt(enumKey) {
    if (this.selectedPrompts.has(enumKey)) {
      this.selectedPrompts.delete(enumKey);
    } else {
      this.selectedPrompts.add(enumKey);
    }
  }
  isPromptVisible(enumKey) {
    return this.selectedPrompts.has(enumKey);
  }
  // Tabs
  selectedTab = signal(1, ...ngDevMode ? [{ debugName: "selectedTab" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedPromptTab = signal(1, ...ngDevMode ? [{ debugName: "selectedPromptTab" }] : (
    /* istanbul ignore next */
    []
  ));
  tabs = [
    { title: marker("aiPrompt.shared._title"), description: marker("aiPrompt.shared._description"), value: 0, fragments: this.fragments, tool: "Shared", original: this.rebuildSharedFile() },
    {
      title: marker("aiPrompt.tools._title"),
      description: marker("aiPrompt.tools._description"),
      value: 1,
      prompts: this.inventoryPrompts,
      tool: "Tools",
      original: this.rebuildPromptFile("Tools", this.inventoryPrompts)
    },
    {
      title: marker("aiPrompt.page._title"),
      description: marker("aiPrompt.page._description"),
      value: 2,
      prompts: this.pagePrompts,
      tool: "Page",
      original: this.rebuildPromptFile("Page", this.pagePrompts)
    },
    {
      title: marker("aiPrompt.problems._title"),
      description: marker("aiPrompt.problems._description"),
      value: 3,
      prompts: this.problemPrompts,
      tool: "Problem",
      original: this.rebuildPromptFile("Problem", this.problemPrompts)
    },
    {
      title: marker("aiPrompt.skills._title"),
      description: marker("aiPrompt.skills._description"),
      value: 4,
      skills: this.skillPrompts,
      tool: "Skills",
      original: this.rebuildSkillsFile()
    },
    {
      title: marker("aiPrompt.examples._title"),
      description: marker("aiPrompt.examples._description"),
      value: 5,
      exampleSets: this.exampleSets,
      tool: "Examples",
      original: ""
    }
  ];
  // Dropdown
  promptGroups = [
    {
      label: "aiPrompt.alerts._title",
      items: [
        ...this.problemPrompts.filter((prompt) => prompt.enumKey === "AlertsProblems"),
        ...this.pagePrompts.filter((prompt) => prompt.enumKey === "AlertRewrite"),
        {
          enumKey: "AlertExamples",
          translationKey: "aiPrompt.page.alertExamples",
          promptText: ""
        }
      ]
    },
    { label: "aiPrompt.tools._title", items: this.inventoryPrompts },
    { label: "aiPrompt.skills._title", items: this.skillPrompts },
    { label: "aiPrompt.page._title", items: this.pagePrompts.filter((prompt) => prompt.enumKey !== "AlertRewrite") }
  ];
  selectedPrompt = signal(this.pagePrompts.find((prompt) => prompt.enumKey === "AlertRewrite"), ...ngDevMode ? [{ debugName: "selectedPrompt" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedPromptIsAlertRewritePipeline = computed(() => {
    const selected = this.selectedPrompt();
    return !!selected && this.isAlertRewritePipeline(selected);
  }, ...ngDevMode ? [{ debugName: "selectedPromptIsAlertRewritePipeline" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedPromptIsAlertRewriteExamples = computed(() => {
    const selected = this.selectedPrompt();
    return !!selected && this.isAlertRewriteExamples(selected);
  }, ...ngDevMode ? [{ debugName: "selectedPromptIsAlertRewriteExamples" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedPromptIsAlertProblems = computed(() => this.selectedPrompt()?.enumKey === "AlertsProblems", ...ngDevMode ? [{ debugName: "selectedPromptIsAlertProblems" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedPromptIsSkill = computed(() => {
    const selected = this.selectedPrompt();
    return !!selected && this.isSkillEntry(selected);
  }, ...ngDevMode ? [{ debugName: "selectedPromptIsSkill" }] : (
    /* istanbul ignore next */
    []
  ));
  aiPrompt() {
    const selected = this.selectedPrompt();
    if (!selected || this.isSkillEntry(selected) || !this.isPromptConfig(selected))
      return "";
    return this.aiPromptService.composePrompt(selected.promptText);
  }
  getSkillGroups(skill) {
    return Object.entries(skill.promptText.groups).map(([key, rules]) => ({ key, rules }));
  }
  getSelectedSkillGroups() {
    const selected = this.selectedPrompt();
    return selected && this.isSkillEntry(selected) ? this.getSkillGroups(selected) : [];
  }
  getSkillGroupLabel(groupKey) {
    return `dev.prompts.skills.group.${groupKey}`;
  }
  buildAlertRewritePipelineGroups() {
    const promptConfig = PagePrompts[PagePromptKey.AlertRewrite];
    const rules = promptConfig.pipeline;
    return [
      {
        key: "alertRewrite",
        label: "dev.prompts.alertRewrite.group.alertRewrite",
        sections: [
          {
            key: "role",
            label: "dev.prompts.alertRewrite.role",
            content: RoleFragment[promptConfig.role],
            collapsed: false
          },
          {
            key: "aiInstructions",
            hideLabel: true,
            options: [
              {
                key: "systemWithExamples",
                label: "dev.prompts.alertRewrite.examplesIncluded",
                bulletItems: rules.systemPromptWithExamplesLines,
                collapsed: false
              },
              {
                key: "systemWithoutExamples",
                label: "dev.prompts.alertRewrite.examplesNotIncluded",
                bulletItems: rules.systemPromptWithoutExamplesLines,
                collapsed: false
              }
            ]
          },
          {
            key: "baseRules",
            label: "dev.prompts.alertRewrite.baseRules",
            bulletItems: rules.styleRulesBase,
            collapsed: false
          },
          {
            key: "outputRequirement",
            label: "dev.prompts.alertRewrite.outputRequirement",
            content: OutputFragment[promptConfig.output],
            collapsed: false
          },
          {
            key: "outputSchemas",
            hideLabel: true,
            options: [
              {
                key: "outputSchemaWithExamples",
                label: "dev.prompts.alertRewrite.outputSchemaWithExamples",
                content: this.formatPromptSchema(rules.outputSchemas.withExamples),
                collapsed: false
              },
              {
                key: "outputSchemaWithoutExamples",
                label: "dev.prompts.alertRewrite.outputSchemaWithoutExamples",
                content: this.formatPromptSchema(rules.outputSchemas.withoutExamples),
                collapsed: false
              }
            ]
          },
          {
            key: "retryInstructions",
            label: "dev.prompts.alertRewrite.retryInstructions",
            conditionItems: [
              {
                key: "invalidWrapperHtml",
                condition: "dev.prompts.alertRewrite.retry.invalidWrapperHtml",
                instruction: rules.retryInstructions.invalidWrapperHtml
              },
              {
                key: "noLinksAllowed",
                condition: "dev.prompts.alertRewrite.retry.noLinksAllowed",
                instruction: rules.retryInstructions.noLinksAllowed
              },
              {
                key: "mustKeepLink",
                condition: "dev.prompts.alertRewrite.retry.mustKeepLink",
                instruction: rules.retryInstructions.mustKeepLink
              },
              {
                key: "mustKeepAllLinks",
                condition: "dev.prompts.alertRewrite.retry.mustKeepAllLinks",
                instruction: rules.retryInstructions.mustKeepAllLinks
              },
              {
                key: "mustHaveHeading",
                condition: "dev.prompts.alertRewrite.retry.mustHaveHeading",
                instruction: rules.retryInstructions.mustHaveHeading
              },
              {
                key: "avoidExampleCopy",
                condition: "dev.prompts.alertRewrite.retry.avoidExampleCopy",
                instruction: rules.retryInstructions.avoidExampleCopy
              },
              {
                key: "fullSentenceLinksNeedLeadIn",
                condition: "dev.prompts.alertRewrite.retry.fullSentenceLinksNeedLeadIn",
                bulletItems: rules.retryInstructions.fullSentenceLinksNeedLeadIn
              }
            ],
            collapsed: false
          }
        ]
      },
      {
        key: "style",
        label: "dev.prompts.alertRewrite.group.style",
        sections: [
          {
            key: "canadaCaStyleRules",
            label: "dev.prompts.alertRewrite.canadaCaStyle",
            content: this.formatCanadaCaStyleRulesJson(),
            collapsed: false
          }
        ]
      },
      {
        key: "links",
        label: "dev.prompts.alertRewrite.group.links",
        sections: [
          {
            key: "linkRulesCommon",
            label: "dev.prompts.alertRewrite.linkRulesCommon",
            bulletItems: SkillPrompts[SkillPromptKey.LinkWriting].groups.common.map((rule) => rule.text),
            collapsed: false
          },
          {
            key: "linkRules",
            hideLabel: true,
            options: [
              {
                key: "linkRulesDefault",
                label: "dev.prompts.alertRewrite.linkRulesDefault",
                bulletItems: SkillPrompts[SkillPromptKey.LinkWriting].groups.preserveLinks.map((rule) => rule.text),
                collapsed: false
              },
              {
                key: "linkRulesTooMany",
                label: "dev.prompts.alertRewrite.linkRulesTooMany",
                bulletItems: SkillPrompts[SkillPromptKey.LinkWriting].groups.tooManyLinks.map((rule) => rule.text),
                collapsed: false
              }
            ]
          },
          {
            key: "preserveFinalStandaloneLink",
            label: "dev.prompts.alertRewrite.condition.finalStandaloneLink",
            content: rules.conditionalInstructions.preserveFinalStandaloneLink,
            collapsed: false
          },
          {
            key: "enforceLinkManifest",
            label: "dev.prompts.alertRewrite.condition.originalHasLinks",
            content: rules.conditionalInstructions.enforceLinkManifest,
            collapsed: false
          }
        ]
      }
    ];
  }
  updateAlertRewriteBaseRule(index, value) {
    this.alertRewritePipeline.styleRulesBase[index] = value;
    void this.updateDiff();
  }
  updateAlertRewriteSystemInstruction(optionKey, index, value) {
    const instructions = optionKey === "systemWithExamples" ? this.alertRewritePipeline.systemPromptWithExamplesLines : this.alertRewritePipeline.systemPromptWithoutExamplesLines;
    instructions[index] = value;
    void this.updateDiff();
  }
  updateAlertRewriteConditionalInstruction(sectionKey, value) {
    if (sectionKey === "preserveFinalStandaloneLink") {
      this.alertRewritePipeline.conditionalInstructions.preserveFinalStandaloneLink = value;
    } else {
      this.alertRewritePipeline.conditionalInstructions.enforceLinkManifest = value;
    }
    void this.updateDiff();
  }
  updateAlertRewriteRetryInstruction(key, value, index) {
    const retryInstructions = this.alertRewritePipeline.retryInstructions;
    if (key === "fullSentenceLinksNeedLeadIn" && index !== void 0) {
      retryInstructions.fullSentenceLinksNeedLeadIn = retryInstructions.fullSentenceLinksNeedLeadIn.map((instruction, instructionIndex) => instructionIndex === index ? value : instruction);
    } else if (key === "invalidWrapperHtml") {
      retryInstructions.invalidWrapperHtml = value;
    } else if (key === "noLinksAllowed") {
      retryInstructions.noLinksAllowed = value;
    } else if (key === "mustKeepLink") {
      retryInstructions.mustKeepLink = value;
    } else if (key === "mustKeepAllLinks") {
      retryInstructions.mustKeepAllLinks = value;
    } else if (key === "mustHaveHeading") {
      retryInstructions.mustHaveHeading = value;
    } else if (key === "avoidExampleCopy") {
      retryInstructions.avoidExampleCopy = value;
    }
    void this.updateDiff();
  }
  getAlertRewriteOutputSchemaDraft(optionKey) {
    return this.alertRewriteOutputSchemaDrafts()[optionKey] ?? "";
  }
  getAlertRewriteOutputSchemaError(optionKey) {
    return this.alertRewriteOutputSchemaErrors()[optionKey];
  }
  updateAlertRewriteOutputSchema(optionKey, value) {
    this.alertRewriteOutputSchemaDrafts.update((drafts) => __spreadProps(__spreadValues({}, drafts), { [optionKey]: value }));
    let parsed;
    try {
      parsed = JSON.parse(value);
    } catch (e) {
      this.alertRewriteOutputSchemaErrors.update((errors) => __spreadProps(__spreadValues({}, errors), { [optionKey]: "dev.prompts.alertRewrite.invalidOutputSchema" }));
      return;
    }
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      this.alertRewriteOutputSchemaErrors.update((errors) => __spreadProps(__spreadValues({}, errors), { [optionKey]: "dev.prompts.alertRewrite.invalidOutputSchema" }));
      return;
    }
    const schema = JSON.stringify(parsed);
    if (optionKey === "outputSchemaWithExamples") {
      this.alertRewritePipeline.outputSchemas.withExamples = schema;
    } else {
      this.alertRewritePipeline.outputSchemas.withoutExamples = schema;
    }
    this.alertRewriteOutputSchemaErrors.update((errors) => {
      const updated = __spreadValues({}, errors);
      delete updated[optionKey];
      return updated;
    });
    void this.updateDiff();
  }
  buildAlertProblemsSections() {
    const prompt = ProblemPrompts[ProblemPromptKey.AlertsProblems];
    const rubric = prompt.rubric.flatMap((key) => RubricFragment[key]);
    return [
      {
        key: "role",
        label: "aiPrompt.component.role",
        content: RoleFragment[prompt.role],
        collapsed: false
      },
      {
        key: "task",
        label: "aiPrompt.component.task",
        content: prompt.task,
        collapsed: false
      },
      ...rubric.length ? [
        {
          key: "rubric",
          label: "aiPrompt.component.rubric",
          content: rubric.map((criterion, index) => `${index + 1}. ${criterion}`).join("\n"),
          collapsed: false
        }
      ] : [],
      {
        key: "outputRequirement",
        label: "dev.prompts.alertRewrite.outputRequirement",
        content: OutputFragment[prompt.output],
        collapsed: false
      },
      ...prompt.jsonSchema ? [
        {
          key: "jsonSchema",
          label: "aiPrompt.component.jsonSchema",
          content: prompt.jsonSchema,
          collapsed: false
        }
      ] : []
    ];
  }
  getAlertRewriteExampleLegend(example) {
    return `${example.id} \u2014 ${example.egHeading || example.egText}`;
  }
  getPipelineOptionContent(option) {
    return option.content ?? option.bulletItems?.map((item) => `- ${item}`).join("\n") ?? "";
  }
  getPipelineSectionContent(section) {
    if (section.content)
      return section.content;
    if (section.bulletItems?.length)
      return section.bulletItems.map((item) => `- ${item}`).join("\n");
    return (section.conditionItems ?? []).map((item) => {
      const instruction = item.bulletItems?.length ? item.bulletItems.map((line) => `- ${line}`).join("\n") : item.instruction ?? "";
      return `${this.translate.instant(item.condition)}
${instruction}`.trim();
    }).join("\n\n");
  }
  formatPromptSchema(schema) {
    try {
      const lines = JSON.stringify(JSON.parse(schema), null, 2).replace(/\[\n\s+("(?:\\.|[^"\\])*")\n\s+\]/g, "[$1]").split("\n");
      if (lines.length < 3)
        return lines.join("\n");
      lines[1] = `{ ${lines[1].trimStart()}`;
      lines[lines.length - 2] = `${lines[lines.length - 2]} }`;
      return lines.slice(1, -1).join("\n");
    } catch (e) {
      return schema;
    }
  }
  formatCanadaCaStyleRulesJson() {
    const rules = SkillPrompts[SkillPromptKey.CanadaCaStyle].groups.common.map((rule) => `{
      "id": ${JSON.stringify(rule.id)}, "severity": ${JSON.stringify(rule.severity)},
      "text": ${JSON.stringify(rule.text)} }`).join(",\n    ");
    return `{ "rules": [ ${rules} ]}`;
  }
  markForTranslation() {
    marker("aiPrompt.alerts._title");
    marker("aiPrompt.page.alertExamples");
    marker("dev.prompts.alertRewrite.baseRules");
    marker("dev.prompts.alertRewrite.canadaCaStyle");
    marker("dev.prompts.alertRewrite.linkRulesDefault");
    marker("dev.prompts.alertRewrite.linkRulesTooMany");
    marker("dev.prompts.alertRewrite.outputRequirement");
    marker("dev.prompts.alertRewrite.outputSchemaWithExamples");
    marker("dev.prompts.alertRewrite.outputSchemaWithoutExamples");
    marker("dev.prompts.alertRewrite.invalidOutputSchema");
    marker("dev.prompts.alertRewrite.linkRulesCommon");
    marker("dev.prompts.alertRewrite.group.alertRewrite");
    marker("dev.prompts.alertRewrite.group.style");
    marker("dev.prompts.alertRewrite.group.links");
    marker("dev.prompts.alertRewrite.condition.finalStandaloneLink");
    marker("dev.prompts.alertRewrite.condition.originalHasLinks");
    marker("dev.prompts.alertRewrite.retry.invalidWrapperHtml");
    marker("dev.prompts.alertRewrite.retry.noLinksAllowed");
    marker("dev.prompts.alertRewrite.retry.mustKeepLink");
    marker("dev.prompts.alertRewrite.retry.mustKeepAllLinks");
    marker("dev.prompts.alertRewrite.retry.mustHaveHeading");
    marker("dev.prompts.alertRewrite.retry.avoidExampleCopy");
    marker("dev.prompts.alertRewrite.retry.fullSentenceLinksNeedLeadIn");
    marker("dev.prompts.alertRewrite.retryInstructions");
    marker("dev.prompts.alertRewrite.role");
    marker("dev.prompts.alertRewrite.examplesIncluded");
    marker("dev.prompts.alertRewrite.examplesNotIncluded");
    marker("dev.prompts.alertRewrite.testUnavailable");
    marker("dev.prompts.examples.invalidJson");
    marker("dev.prompts.examples.invalidStructure");
    marker("dev.prompts.skills.group.common");
    marker("dev.prompts.skills.group.preserveLinks");
    marker("dev.prompts.skills.group.tooManyLinks");
  }
  // Test prompts
  aiState = this.openRouterService.state;
  description = "Official CRA information on Canadian taxes. File your return, manage payments, and explore credits and deductions for individuals and businesses.";
  alertProblemsTestUrl = "";
  alertProblemsTestContent = "";
  alertProblemsTestLoading = signal(false, ...ngDevMode ? [{ debugName: "alertProblemsTestLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  alertProblemsTestError = signal(null, ...ngDevMode ? [{ debugName: "alertProblemsTestError" }] : (
    /* istanbul ignore next */
    []
  ));
  alertProblemsTestPayloadInvalid = signal(false, ...ngDevMode ? [{ debugName: "alertProblemsTestPayloadInvalid" }] : (
    /* istanbul ignore next */
    []
  ));
  response = null;
  result = "";
  onAlertProblemsTestUrlChange(url) {
    this.alertProblemsTestUrl = url;
    this.alertProblemsTestContent = "";
    this.alertProblemsTestError.set(null);
    this.alertProblemsTestPayloadInvalid.set(false);
    this.response = null;
    this.result = "";
  }
  loadAlertProblemsTestPage() {
    return __async(this, null, function* () {
      const url = this.alertProblemsTestUrl.trim();
      this.alertProblemsTestError.set(null);
      this.alertProblemsTestPayloadInvalid.set(false);
      this.alertProblemsTestContent = "";
      this.response = null;
      this.result = "";
      if (!url)
        return;
      this.alertProblemsTestLoading.set(true);
      try {
        let doc;
        try {
          doc = yield this.fetchService.fetchContent(url, "both", 3, "none");
        } catch (e) {
          doc = this.fetchService.stringToDoc(yield this.fetchService.fetchViaProxy(url));
        }
        const payload = this.alertContextService.buildCompactAlertsIssuesPayload(doc.documentElement.outerHTML);
        const alerts = payload["alerts"];
        if (!Array.isArray(alerts) || alerts.length === 0) {
          throw new Error(this.translate.instant("dev.prompts.preview.alertProblems.noAlerts"));
        }
        this.alertProblemsTestContent = JSON.stringify(payload, null, 2);
      } catch (error) {
        this.alertProblemsTestError.set(error instanceof Error ? error.message : String(error));
      } finally {
        this.alertProblemsTestLoading.set(false);
      }
    });
  }
  hasTestContent() {
    return (this.selectedPromptIsAlertProblems() ? this.alertProblemsTestContent : this.description).trim().length > 0;
  }
  getTestContent() {
    if (!this.selectedPromptIsAlertProblems())
      return this.description;
    try {
      const compactPayload = JSON.stringify(JSON.parse(this.alertProblemsTestContent));
      this.alertProblemsTestPayloadInvalid.set(false);
      return compactPayload;
    } catch (e) {
      this.alertProblemsTestPayloadInvalid.set(true);
      return null;
    }
  }
  formatTestResult(result) {
    try {
      return JSON.stringify(JSON.parse(result), null, 2);
    } catch (e) {
      return result;
    }
  }
  testResponse() {
    return __async(this, null, function* () {
      const config = this.getSelectedPromptConfig();
      if (!config)
        return;
      const testContent = this.getTestContent();
      if (testContent === null)
        return;
      this.response = yield this.openRouterService.sendToAI(config, testContent, this.compareService.selectedModel());
    });
  }
  testResult() {
    return __async(this, null, function* () {
      const config = this.getSelectedPromptConfig();
      if (!config)
        return;
      const testContent = this.getTestContent();
      if (testContent === null)
        return;
      this.result = yield this.openRouterService.getTextFromAI(config, testContent, this.compareService.selectedModel());
    });
  }
  // Rebuild prompt file
  rebuildPromptFile(tool, prompts) {
    const updatedPrompts = prompts.map((prompt) => {
      let value;
      if (this.isPromptConfig(prompt)) {
        value = this.serializePromptConfig(prompt.promptText, prompt.enumKey);
      } else if (this.isPromptString(prompt)) {
        value = this.toSourceStringLiteral(prompt.promptText);
      } else {
        throw new Error(`Unsupported prompt value for ${prompt.enumKey}`);
      }
      return `  [${tool}PromptKey.${prompt.enumKey}]: ${value},`;
    }).join("\n");
    const isPagePrompts = tool === "Page";
    const configType = isPagePrompts ? "PagePromptConfigs" : `Record<${tool}PromptKey, PromptConfig>`;
    const configImport = isPagePrompts ? "PagePromptConfigs" : "PromptConfig";
    const imports = ["OutputKey", `${tool}PromptKey`, configImport, "RoleKey", "RubricKey"].sort();
    return `import { ${imports.join(", ")} } from './prompt.model';

export const ${tool}Prompts: ${configType} = {
${updatedPrompts}
};
`;
  }
  getSelectedPromptConfig() {
    const selected = this.selectedPrompt();
    return selected && !this.isSkillEntry(selected) && this.isPromptConfig(selected) ? selected.promptText : null;
  }
  serializePromptConfig(config, enumKey) {
    const lines = ["{", `    role: RoleKey.${this.getEnumKey(RoleKey, config.role)},`];
    if (enumKey === "AlertRewrite") {
      lines.push("    // Placeholder for the future PromptConfig migration. The working alert rewrite", "    // prompt is currently assembled from pipeline fragments and runtime context in", "    // AlertRewriteService.buildAlertRewriteMessages(). Do not add this task text to", "    // the system prompt as-is; replace it with the working payload-generation", "    // structure when the alert rewrite prompt is consolidated into PromptConfig.");
    }
    lines.push(`    task: ${this.toSourceStringLiteral(config.task)},`, `    rubric: [${config.rubric.map((rubric) => `RubricKey.${this.getEnumKey(RubricKey, rubric)}`).join(", ")}],`, `    output: OutputKey.${this.getEnumKey(OutputKey, config.output)},`);
    if (config.jsonSchema !== void 0)
      lines.push(`    jsonSchema: ${this.toSourceStringLiteral(config.jsonSchema)},`);
    if (config.examples !== void 0)
      lines.push(`    examples: ${this.toSourceStringLiteral(config.examples)},`);
    if (config.available !== void 0)
      lines.push(`    available: ${config.available},`);
    if (config.pipeline !== void 0) {
      if (enumKey === "AlertRewrite") {
        lines.push(`    pipeline: ${this.serializeAlertRewritePipeline()},`);
      } else {
        const pipeline = JSON.stringify(config.pipeline, null, 2).split("\n").map((line, index) => index === 0 ? line : `    ${line}`).join("\n");
        lines.push(`    pipeline: ${pipeline},`);
      }
    }
    lines.push("  }");
    return lines.join("\n");
  }
  getEnumKey(enumObject, value) {
    const key = Object.entries(enumObject).find(([, enumValue]) => enumValue === value)?.[0];
    if (!key)
      throw new Error(`Unknown prompt enum value: ${value}`);
    return key;
  }
  toSourceStringLiteral(value) {
    if (!/[\r\n]/.test(value)) {
      return `'${value.replace(/\\/g, "\\\\").replace(/'/g, "\\'")}'`;
    }
    return `\`${value.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${")}\``;
  }
  rebuildSkillsFile() {
    const skillEntries = this.skillPrompts.map((skill) => {
      const groupEntries = this.getSkillGroups(skill).map((group) => {
        const ruleEntries = group.rules.map((rule) => {
          const severity = rule.severity ? `
          severity: '${rule.severity}',` : "";
          return `        {
          id: '${rule.id}',${severity}
          text: ${this.toSkillStringLiteral(rule.text)},
        },`;
        }).join("\n");
        return `      ${group.key}: [
${ruleEntries}
      ],`;
      }).join("\n");
      return `  [SkillPromptKey.${skill.enumKey}]: {
    groups: {
${groupEntries}
    },
  },`;
    }).join("\n");
    return `import { SkillPromptKey } from './prompt.model';

export type SkillPromptRuleSeverity = 'must' | 'should';

export interface SkillPromptRule {
  id: string;
  severity?: SkillPromptRuleSeverity;
  text: string;
}

export interface SkillPromptConfig {
  groups: Readonly<Record<string, readonly SkillPromptRule[]>>;
}

export const SkillPrompts = {
${skillEntries}
} satisfies Record<SkillPromptKey, SkillPromptConfig>;

export interface LinkWritingPromptOptions {
  hasTooManyLinksIssue: boolean;
}

export function getCanadaCaStylePromptRules(): string[] {
  return SkillPrompts[SkillPromptKey.CanadaCaStyle].groups.common.map((rule) => \`[Canada.ca style \${rule.id} \${rule.severity}] \${rule.text}\`);
}

export function getLinkWritingPromptRules(options: LinkWritingPromptOptions): string[] {
  const groups = SkillPrompts[SkillPromptKey.LinkWriting].groups;
  const conditionalRules = options.hasTooManyLinksIssue ? groups.tooManyLinks : groups.preserveLinks;
  return [...groups.common, ...conditionalRules].map((rule) => rule.text);
}
`;
  }
  toSkillStringLiteral(value) {
    if (value.includes("'"))
      return JSON.stringify(value);
    return `'${value.replace(/\\/g, "\\\\")}'`;
  }
  serializeAlertRewritePipeline() {
    const rules = this.alertRewritePipeline;
    const arrayLines = (values, indentation = "        ") => values.map((value) => `${indentation}${this.toExampleStringLiteral(value)},`).join("\n");
    const inlineArray = (values) => `[${values.map((value) => this.toExampleStringLiteral(value)).join(", ")}]`;
    return `{
      styleRulesBase: [
${arrayLines(rules.styleRulesBase)}
      ],
      // Keep example guidance intentionally reinforced in both the base rules and
      // the system prompt. Keep the two source-wording instructions below separate:
      // egHtml should anchor structure, while the input alert should anchor wording.
      // A-B-A testing showed that consolidating them caused generic example actions
      // to leak into rewrites and made other internal guidance more likely to surface.
      systemPromptWithExamplesLines: [
${arrayLines(rules.systemPromptWithExamplesLines)}
      ],
      systemPromptWithoutExamplesLines: ${inlineArray(rules.systemPromptWithoutExamplesLines)},
      outputSchemas: {
        withExamples: ${this.toExampleStringLiteral(rules.outputSchemas.withExamples)},
        withoutExamples: ${this.toExampleStringLiteral(rules.outputSchemas.withoutExamples)},
      },
      conditionalInstructions: {
        preserveFinalStandaloneLink:
          ${this.toExampleStringLiteral(rules.conditionalInstructions.preserveFinalStandaloneLink)},
        enforceLinkManifest:
          ${this.toExampleStringLiteral(rules.conditionalInstructions.enforceLinkManifest)},
      },
      retryInstructions: {
        invalidWrapperHtml: ${this.toExampleStringLiteral(rules.retryInstructions.invalidWrapperHtml)},
        noLinksAllowed: ${this.toExampleStringLiteral(rules.retryInstructions.noLinksAllowed)},
        mustKeepLink:
          ${this.toExampleStringLiteral(rules.retryInstructions.mustKeepLink)},
        mustKeepAllLinks:
          ${this.toExampleStringLiteral(rules.retryInstructions.mustKeepAllLinks)},
        mustHaveHeading:
          ${this.toExampleStringLiteral(rules.retryInstructions.mustHaveHeading)},
        avoidExampleCopy: ${this.toExampleStringLiteral(rules.retryInstructions.avoidExampleCopy)},
        // This intentionally reinforces permanent link rules on a fresh retry call.
        // A-B testing showed that suppressing it when noLinksAllowed also applied
        // caused the regenerated alert to weaken a precise source timing distinction.
        fullSentenceLinksNeedLeadIn: [
${arrayLines(rules.retryInstructions.fullSentenceLinksNeedLeadIn, "          ")}
        ],
      },
    }`;
  }
  rebuildAlertRewriteExamplesFile(examples) {
    const serializedExamples = examples.map((example) => this.serializeAlertRewriteExample(example)).join("\n");
    return `export interface AlertRewriteExample {
  id: string;
  tags: string[];
  purposeTags?: string[];
  criteria: string[];
  egText: string;
  egHeading?: string;
  egHtml?: string;
  egLinks?: AlertRewriteExampleLink[];
  notes?: string;
}

export interface AlertRewriteExampleLink {
  id: string;
  text: string;
  href?: string;
}

export const AlertRewriteExamples: AlertRewriteExample[] = [
${serializedExamples}
];
`;
  }
  serializeAlertRewriteExample(example) {
    const properties = [
      `    id: ${this.toExampleStringLiteral(example.id)},`,
      this.serializeExampleArrayProperty("tags", example.tags),
      ...example.purposeTags ? [this.serializeExampleArrayProperty("purposeTags", example.purposeTags)] : [],
      this.serializeExampleArrayProperty("criteria", example.criteria),
      ...example.egHeading !== void 0 ? [this.serializeExampleStringProperty("egHeading", example.egHeading)] : [],
      this.serializeExampleStringProperty("egText", example.egText),
      ...example.egHtml !== void 0 ? [this.serializeExampleStringProperty("egHtml", example.egHtml)] : [],
      ...example.egLinks !== void 0 ? [this.serializeExampleLinks(example.egLinks)] : [],
      ...example.notes !== void 0 ? [this.serializeExampleStringProperty("notes", example.notes)] : []
    ];
    return `  {
${properties.join("\n")}
  },`;
  }
  serializeExampleStringProperty(name, value) {
    const literal = this.toExampleStringLiteral(value);
    const singleLine = `    ${name}: ${literal},`;
    return singleLine.length <= 200 ? singleLine : `    ${name}:
      ${literal},`;
  }
  serializeExampleArrayProperty(name, values) {
    const literals = values.map((value) => this.toExampleStringLiteral(value));
    const singleLine = `    ${name}: [${literals.join(", ")}],`;
    if (singleLine.length <= 200)
      return singleLine;
    return `    ${name}: [
${literals.map((literal) => `      ${literal},`).join("\n")}
    ],`;
  }
  serializeExampleLinks(links) {
    if (!links?.length)
      return "    egLinks: [],";
    const serializedLinks = links.map((link) => {
      const properties = [`        id: ${this.toExampleStringLiteral(link.id)},`, `        text: ${this.toExampleStringLiteral(link.text)},`];
      if (link.href !== void 0)
        properties.push(`        href: ${this.toExampleStringLiteral(link.href)},`);
      return `      {
${properties.join("\n")}
      },`;
    }).join("\n");
    return `    egLinks: [
${serializedLinks}
    ],`;
  }
  toExampleStringLiteral(value) {
    if (value.includes("'") && !value.includes('"'))
      return JSON.stringify(value);
    return `'${value.replace(/\\/g, "\\\\").replace(/'/g, "\\'")}'`;
  }
  getExampleJsonDraft(example) {
    return this.exampleJsonDrafts()[example.id] ?? this.formatExampleJson(example);
  }
  formatExampleJson(example) {
    const editableExample = __spreadValues(__spreadValues(__spreadProps(__spreadValues({}, example.egHeading !== void 0 ? { egHeading: example.egHeading } : {}), {
      egText: example.egText
    }), example.egHtml !== void 0 ? { egHtml: example.egHtml } : {}), example.egLinks !== void 0 ? { egLinks: example.egLinks } : {});
    return this.formatJsonWithInlineStringArrays(editableExample).split("\n").slice(1, -1).join("\n");
  }
  formatJsonWithInlineStringArrays(value) {
    return JSON.stringify(value, null, 2).replace(/\[\n((?:\s+"(?:\\.|[^"\\])*",?\n)+)\s*\]/g, (_match, items) => {
      const values = items.match(/"(?:\\.|[^"\\])*"/g) ?? [];
      return `[${values.join(", ")}]`;
    });
  }
  getExampleSelectionMetadata(example) {
    const lines = this.formatJsonWithInlineStringArrays({
      id: example.id,
      tags: example.tags,
      purposeTags: example.purposeTags,
      criteria: example.criteria,
      notes: example.notes
    }).split("\n");
    lines.splice(-1, 1);
    lines[lines.length - 1] += ",";
    return lines.join("\n");
  }
  getFormattedExamplePreview(example) {
    return this.formatJsonWithInlineStringArrays(example);
  }
  getExampleJsonError(example) {
    return this.exampleJsonErrors()[example.id];
  }
  updateExampleJsonDraft(example, value) {
    this.exampleJsonDrafts.update((drafts) => __spreadProps(__spreadValues({}, drafts), { [example.id]: value }));
    let parsed;
    try {
      parsed = JSON.parse(`{
${value}
}`);
    } catch (e) {
      this.setExampleJsonError(example.id, "dev.prompts.examples.invalidJson");
      return;
    }
    if (!this.isValidAlertRewriteExample(parsed)) {
      this.setExampleJsonError(example.id, "dev.prompts.examples.invalidStructure");
      return;
    }
    const mutableExample = example;
    for (const key of ["egHeading", "egText", "egHtml", "egLinks"])
      delete mutableExample[key];
    Object.assign(mutableExample, parsed);
    this.exampleJsonErrors.update((errors) => {
      const updated = __spreadValues({}, errors);
      delete updated[example.id];
      return updated;
    });
    void this.updateDiff();
  }
  setExampleJsonError(exampleId, translationKey) {
    this.exampleJsonErrors.update((errors) => __spreadProps(__spreadValues({}, errors), { [exampleId]: translationKey }));
  }
  isValidAlertRewriteExample(value) {
    if (!value || typeof value !== "object" || Array.isArray(value))
      return false;
    const example = value;
    const allowedKeys = /* @__PURE__ */ new Set(["egText", "egHeading", "egHtml", "egLinks"]);
    if (Object.keys(example).some((key) => !allowedKeys.has(key)))
      return false;
    if (typeof example["egText"] !== "string")
      return false;
    for (const key of ["egHeading", "egHtml"]) {
      if (example[key] !== void 0 && typeof example[key] !== "string")
        return false;
    }
    if (example["egLinks"] !== void 0) {
      if (!Array.isArray(example["egLinks"]))
        return false;
      if (example["egLinks"].some((link) => !link || typeof link !== "object" || Array.isArray(link) || typeof link["id"] !== "string" || typeof link["text"] !== "string" || link["href"] !== void 0 && typeof link["href"] !== "string"))
        return false;
    }
    return true;
  }
  selectExampleSet(exampleSet) {
    this.selectedExampleSet.set(exampleSet);
    void this.updateDiff();
  }
  // Rebuild prompt file (older version)
  rebuildPromptFileOld(tool, prompts) {
    const updatedPrompts = prompts.map((p) => ` [${tool}PromptKey.${p.enumKey}]: \`${p.promptText}\`,`).join("\n");
    return `import { ${tool}PromptKey } from './prompt.model'
export const ${tool}Prompts: Record<${tool}PromptKey, string> = {
${updatedPrompts}
};`;
  }
  rebuildSharedFile() {
    const roleEntries = this.roleFragment.map((p) => `	[RoleKey.${p.enumKey}]: \`${p.promptText}\`,`).join("\n");
    const outputEntries = this.outputFragment.map((p) => `	[OutputKey.${p.enumKey}]: \`${p.promptText}\`,`).join("\n");
    const rubricEntries = this.rubricFragment.map((p) => `	[RubricKey.${p.enumKey}]: \`${p.promptText}\`,`).join("\n");
    return `import { RoleKey, OutputKey, RubricKey } from './prompt.model'

export const RoleFragment: Record<RoleKey, string> = {
${roleEntries}
}

export const OutputFragment: Record<OutputKey, string> = {
${outputEntries}
}

export const RubricFragment: Record<RubricKey, string> = {
${rubricEntries}
}`;
  }
  rebuildTabFile(tab) {
    if (tab.fragments)
      return this.rebuildSharedFile();
    if (tab.skills)
      return this.rebuildSkillsFile();
    if (tab.exampleSets)
      return this.rebuildAlertRewriteExamplesFile(this.selectedExampleSet().examples);
    if (tab.tool === "Page")
      return this.rebuildPromptFile("Page", this.pagePrompts);
    if (tab.prompts)
      return this.rebuildPromptFile(tab.tool, tab.prompts);
    return "";
  }
  /** Tracks if changes have been made to current tab */
  hasChanges(promptTab) {
    const tabNumber = promptTab ?? this.selectedPromptTab();
    const tab = this.tabs[tabNumber];
    if (!tab)
      return false;
    const original = tab.exampleSets ? this.selectedExampleSet().original : tab.original;
    return this.rebuildTabFile(tab) !== original;
  }
  // Open pull request
  pullRequestUrl = null;
  /** Open pull request for selected tab */
  openPullRequest(tab) {
    return __async(this, null, function* () {
      const content = this.rebuildTabFile(tab);
      if (tab.exampleSets) {
        const exampleSet = this.selectedExampleSet();
        try {
          const result = yield this.exportGitHubService.createPullRequestForPrompts(exampleSet.key.toLowerCase(), exampleSet.sourcePath, exampleSet.fileName, content);
          this.pullRequestUrl = result.prUrl;
        } catch (error) {
          console.error("Failed to create PR:", error);
        }
        return;
      }
      const toolLC = tab.tool.toLowerCase();
      try {
        const result = yield this.exportGitHubService.createPullRequestForPrompts(toolLC, `src/app/common/prompts/${toolLC}.prompts.ts`, `${toolLC}.prompts.ts`, content);
        this.pullRequestUrl = result.prUrl;
      } catch (error) {
        console.error("Failed to create PR:", error);
      }
    });
  }
  /** Update prompts diff */
  diffContainer = viewChild("diffContainer", ...ngDevMode ? [{ debugName: "diffContainer" }] : (
    /* istanbul ignore next */
    []
  ));
  updateDiff() {
    return __async(this, null, function* () {
      const diffContainer = this.diffContainer();
      if (!diffContainer)
        return;
      const [{ createPatch }, { Diff2HtmlUI }] = yield Promise.all([import("./chunk-56GJLXIB.js"), import("./chunk-7G2QHIEK.js")]);
      const tab = this.tabs[this.selectedPromptTab()];
      const updatedContent = this.rebuildTabFile(tab);
      const originalContent = tab.exampleSets ? this.selectedExampleSet().original : tab.original;
      const diffFileName = tab.exampleSets ? this.selectedExampleSet().fileName : `${tab.tool.toLowerCase()}.prompts.ts`;
      const patch = createPatch(diffFileName, originalContent, updatedContent);
      const config = {
        drawFileList: false,
        matching: "words",
        outputFormat: "line-by-line",
        // or 'side-by-side'
        highlight: true,
        colorScheme: this.settingsService.darkMode() ? import_types.ColorSchemeType.DARK : import_types.ColorSchemeType.LIGHT
      };
      const diff2htmlUi = new Diff2HtmlUI(diffContainer.nativeElement, patch, config);
      diff2htmlUi.draw();
      this.highlightFilePreview();
    });
  }
  /** Highlight code for export preview */
  filePreview = viewChild("filePreview", ...ngDevMode ? [{ debugName: "filePreview" }] : (
    /* istanbul ignore next */
    []
  ));
  highlightFilePreview() {
    return __async(this, null, function* () {
      const filePreview = this.filePreview();
      if (!filePreview)
        return;
      const tab = this.tabs[this.selectedPromptTab()];
      if (!tab)
        return;
      try {
        const { default: Prism } = yield import("./chunk-7W6HYFOI.js");
        yield import("./chunk-J4HMK3D4.js");
        this.loadPrismTheme(this.settingsService.darkMode());
        const pre = filePreview.nativeElement;
        const codeBlock = pre.querySelector("code");
        if (codeBlock) {
          pre.className = "";
          pre.removeAttribute("data-highlighted");
          pre.removeAttribute("tabindex");
          codeBlock.className = "language-typescript";
          codeBlock.textContent = this.rebuildTabFile(tab);
          Prism.highlightElement(codeBlock);
        }
      } catch (error) {
        console.error("Failed to load Prism:", error);
      }
    });
  }
  /** Load light/dark prism theme */
  loadPrismTheme(isDarkMode) {
    const existingLink = document.getElementById("prism-theme");
    const newHref = isDarkMode ? "css/prism-okaidia.min.css" : "css/prism.min.css";
    if (existingLink) {
      if (existingLink.href.endsWith(newHref))
        return;
      existingLink.href = newHref;
    } else {
      const link = document.createElement("link");
      link.id = "prism-theme";
      link.rel = "stylesheet";
      link.href = newHref;
      document.head.appendChild(link);
    }
  }
  static \u0275fac = function PromptEditorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PromptEditorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PromptEditorComponent, selectors: [["aida-prompt-editor"]], viewQuery: function PromptEditorComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.diffContainer, _c0, 5)(ctx.filePreview, _c1, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance(2);
    }
  }, decls: 54, vars: 41, consts: [["group", ""], ["selectedItem", ""], ["item", ""], ["diffContainer", ""], ["filePreview", ""], ["id", "wb-cont"], [1, "w-limited", 3, "valueChange", "value"], [1, "surface-ground"], [1, "surface-card", "border-1", "border-bottom-none", "surface-border", "hover:bg-primary-light", 3, "value"], [1, "ml-auto", "surface-card", "border-1", "border-bottom-none", "surface-border", "hover:bg-primary-light", 3, "value"], [1, "flex", "align-content-center", "gap-2"], [1, "material-icons-outlined", "text-primary"], [1, "p-0", "m-0"], [3, "value"], [1, "w-limited"], [1, "flex", "flex-column", "gap-2"], [1, "my-0"], [1, "my-1"], ["inputId", "promptSelect", "optionGroupChildren", "items", "optionGroupLabel", "label", "optionLabel", "translationKey", 1, "w-20rem", 3, "ngModelChange", "group", "ngModel", "options"], [1, "prompt-preview"], ["icon", "pi pi-info-circle", "severity", "info"], [1, "surface-card", "border-1", "border-bottom-none", "surface-border", "hover:bg-primary-light", 3, "click", "value"], [1, "mt-0"], [1, "flex", "flex-row", "flex-wrap", "gap-4", "mt-0", "mb-4"], [1, "flex", "flex-column", "gap-3", "mt-0"], [1, "compact-prompt-editor"], [1, "flex", "flex-row", "align-items-center", "gap-2"], [3, "ngModelChange", "binary", "inputId", "ngModel"], [1, "cursor-pointer", "font-semibold", 3, "for"], [1, "flex", "flex-row", "align-content-center", "gap-2"], ["fluid", "", "pTextarea", "", "rows", "2", 3, "ngModelChange", "ngModel", "autoResize", "id"], [3, "for"], [1, "w-12rem"], ["appendTo", "body", "fluid", "", "optionLabel", "label", "optionValue", "value", 3, "ngModelChange", "onChange", "ngModel", "id", "options"], ["pTemplate", "item"], ["pTemplate", "selectedItem"], [3, "id"], [1, "example-json-object"], [1, "prompt-preview", "example-metadata"], ["fluid", "", "pTextarea", "", "rows", "6", 1, "example-json-editor", 3, "ngModelChange", "id", "ngModel"], ["aria-hidden", "true", 1, "prompt-preview", "example-metadata"], ["severity", "error"], ["fluid", "", "pTextarea", "", "rows", "2", 1, "rewrite-prompt-editor", 3, "ngModelChange", "autoResize", "id", "ngModel"], ["fluid", "", "pTextarea", "", "rows", "3", 1, "rewrite-prompt-editor", 3, "ngModelChange", "autoResize", "id", "ngModel"], ["fluid", "", "pTextarea", "", "rows", "2", 1, "rewrite-prompt-editor", 3, "autoResize", "id", "ngModel"], [1, "flex", "flex-column", "lg:flex-row", "gap-2"], [1, "flex-1"], ["appendTo", "body", "fluid", "", "optionLabel", "label", "optionValue", "value", 1, "h-full", 3, "ngModelChange", "onChange", "ngModel", "id", "options"], ["appendTo", "body", "fluid", "", "optionLabel", "label", "optionValue", "value", 1, "h-full", 3, "ngModelChange", "onChange", "ngModel", "id", "options", "placeholder"], [1, "flex", "gap-2"], ["type", "button", 3, "onClick", "disabled"], [1, "flex", "flex-column", "md:flex-row", "gap-2", "align-items-start"], [1, "flex-1", "w-full"], ["id", "alertProblemsTestUrl", "fluid", "", "pInputText", "", "type", "url", 1, "w-full", 3, "ngModelChange", "ngModel", "placeholder"], ["icon", "pi pi-download", 3, "onClick", "disabled", "label"], ["id", "alertProblemsTestContent", "fluid", "", "pTextarea", "", "rows", "12", "variant", "outlined", 1, "secondary-outline", "min-h-6rem", 3, "ngModelChange", "ngModel"], ["id", "content", "autoResize", "true", "fluid", "", "pTextarea", "", "rows", "3", "variant", "outlined", 1, "secondary-outline", "min-h-6rem", 3, "ngModelChange", "ngModel"], ["for", "content"], ["styleClass", "secondary-outline mb-3", 3, "collapsed", "legend", "toggleable"], [1, "language-typescript"], ["icon", "pi pi-send", 3, "onClick", "disabled", "label"]], template: function PromptEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "h1", 5);
      \u0275\u0275text(1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p");
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p-tabs", 6);
      \u0275\u0275twoWayListener("valueChange", function PromptEditorComponent_Template_p_tabs_valueChange_7_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedTab, $event) || (ctx.selectedTab = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(8, "p-tablist", 7);
      \u0275\u0275repeaterCreate(9, PromptEditorComponent_For_10_Template, 5, 5, "p-tab", 8, _forTrack0);
      \u0275\u0275elementStart(11, "p-tab", 9)(12, "div", 10);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275conditionalCreate(15, PromptEditorComponent_Conditional_15_Template, 2, 0, "span", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "p-tab", 8)(17, "div", 10);
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275conditionalCreate(20, PromptEditorComponent_Conditional_20_Template, 2, 0, "span", 11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "p-tabpanels", 12);
      \u0275\u0275repeaterCreate(22, PromptEditorComponent_For_23_Template, 3, 4, "p-tabpanel", 13, _forTrack0);
      \u0275\u0275elementStart(24, "p-tabpanel", 13)(25, "div", 14)(26, "div", 15)(27, "div")(28, "h2", 16);
      \u0275\u0275text(29);
      \u0275\u0275pipe(30, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "p", 17);
      \u0275\u0275text(32);
      \u0275\u0275pipe(33, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "p-select", 18);
      \u0275\u0275listener("ngModelChange", function PromptEditorComponent_Template_p_select_ngModelChange_34_listener($event) {
        return ctx.selectedPrompt.set($event);
      });
      \u0275\u0275template(35, PromptEditorComponent_ng_template_35_Template, 2, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(37, PromptEditorComponent_ng_template_37_Template, 2, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(39, PromptEditorComponent_ng_template_39_Template, 3, 5, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(41, PromptEditorComponent_Conditional_41_Template, 5, 3)(42, PromptEditorComponent_Conditional_42_Template, 2, 0)(43, PromptEditorComponent_Conditional_43_Template, 2, 0)(44, PromptEditorComponent_Conditional_44_Template, 5, 3)(45, PromptEditorComponent_Conditional_45_Template, 2, 1, "pre", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(46, PromptEditorComponent_Conditional_46_Template, 15, 14);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(47, "p-tabpanel", 13)(48, "div", 14)(49, "h2", 17);
      \u0275\u0275text(50);
      \u0275\u0275pipe(51, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(52, PromptEditorComponent_Conditional_52_Template, 10, 10)(53, PromptEditorComponent_Conditional_53_Template, 3, 3, "p-message", 20);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 25, "dev.prompts._title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(5, 27, "dev.prompts.description"), " ", \u0275\u0275pipeBind1(6, 29, "dev.prompts.description2"));
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("value", ctx.selectedTab);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.tabs);
      \u0275\u0275advance(2);
      \u0275\u0275property("value", 10);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 31, "dev.prompts.preview._title"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.hasChanges() ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("value", 11);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 33, "dev.prompts.pr._title"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.hasChanges() ? 20 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.tabs);
      \u0275\u0275advance(2);
      \u0275\u0275property("value", 10);
      \u0275\u0275advance();
      \u0275\u0275classMap(ctx.styleCardService.cardStyles(void 0, void 0, void 0, void 0, void 0, "border-top-none border-noround-top"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 35, "dev.prompts.preview.header"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 37, "dev.prompts.preview.description"));
      \u0275\u0275advance(2);
      \u0275\u0275property("group", true)("ngModel", ctx.selectedPrompt())("options", ctx.promptGroups);
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.selectedPromptIsAlertRewritePipeline() ? 41 : ctx.selectedPromptIsAlertRewriteExamples() ? 42 : ctx.selectedPromptIsAlertProblems() ? 43 : ctx.selectedPromptIsSkill() ? 44 : 45);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(!ctx.selectedPromptIsAlertRewritePipeline() && !ctx.selectedPromptIsAlertRewriteExamples() && !ctx.selectedPromptIsSkill() ? 46 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("value", 11);
      \u0275\u0275advance();
      \u0275\u0275classMap(ctx.styleCardService.cardStyles(void 0, void 0, void 0, void 0, void 0, "border-top-none border-noround-top"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(51, 39, "dev.prompts.pr.header"));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.hasChanges() ? 52 : 53);
    }
  }, dependencies: [
    CommonModule,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    ButtonModule,
    Button,
    PrimeTemplate,
    CheckboxModule,
    Checkbox,
    FieldsetModule,
    Fieldset,
    IftaLabelModule,
    IftaLabel,
    InputTextModule,
    InputText,
    MessageModule,
    Message,
    MultiSelectModule,
    MultiSelect,
    ProgressSpinnerModule,
    ProgressSpinner,
    RadioButtonModule,
    RadioButton,
    SelectModule,
    Select,
    TabsModule,
    Tabs,
    TabPanels,
    TabPanel,
    TabList,
    Tab,
    TextareaModule,
    Textarea,
    JsonPipe,
    TranslatePipe
  ], styles: ["\npre.prompt-preview[_ngcontent-%COMP%] {\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  min-width: 0;\n  max-width: 100%;\n  font-size: 1rem;\n  white-space: pre-wrap !important;\n  overflow-wrap: anywhere;\n  word-break: break-word;\n  overflow-x: hidden;\n}\n.prompt-content-sized[_ngcontent-%COMP%] {\n  field-sizing: content;\n  min-height: 24rem;\n  overflow-y: auto;\n}\n.example-json-editor[_ngcontent-%COMP%] {\n  field-sizing: content;\n  min-height: 8rem;\n  overflow-y: auto;\n  font-size: 1.25rem !important;\n}\n.example-metadata[_ngcontent-%COMP%] {\n  margin: 0.5rem 0;\n  font-size: 1.25rem !important;\n}\n.example-json-object[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.rewrite-prompt-editor[_ngcontent-%COMP%] {\n  font-size: 1.25rem !important;\n}\n.compact-prompt-editor[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.compact-prompt-editor[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.compact-prompt-editor[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.compact-prompt-editor[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.compact-prompt-editor[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.compact-prompt-editor[_ngcontent-%COMP%]   pre.prompt-preview[_ngcontent-%COMP%] {\n  margin-block: 0;\n}\n/*# sourceMappingURL=prompt-editor.component-3WYLZMNX.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PromptEditorComponent, [{
    type: Component,
    args: [{ selector: "aida-prompt-editor", standalone: true, imports: [
      CommonModule,
      FormsModule,
      TranslatePipe,
      ButtonModule,
      CheckboxModule,
      FieldsetModule,
      IftaLabelModule,
      InputTextModule,
      MessageModule,
      MultiSelectModule,
      ProgressSpinnerModule,
      RadioButtonModule,
      SelectModule,
      TabsModule,
      TextareaModule
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<h1 id="wb-cont">{{ 'dev.prompts._title' | translate }}</h1>
<p>{{ 'dev.prompts.description' | translate }} {{ 'dev.prompts.description2' | translate }}</p>

<p-tabs [(value)]="selectedTab" class="w-limited">
  <p-tablist class="surface-ground">
    @for (tab of tabs; track tab.value) {
      <p-tab [value]="tab.value" (click)="updateDiff()" class="surface-card border-1 border-bottom-none surface-border hover:bg-primary-light">
        <div class="flex align-content-center gap-2">
          {{ tab.title | translate }}
          @if (hasChanges(tab.value)) {
            <span class="material-icons-outlined text-primary">edit</span>
          }
        </div>
      </p-tab>
    }
    <p-tab [value]="10" class="ml-auto surface-card border-1 border-bottom-none surface-border hover:bg-primary-light">
      <div class="flex align-content-center gap-2">
        {{ 'dev.prompts.preview._title' | translate }}
        @if (hasChanges()) {
          <span class="material-icons-outlined text-primary">preview</span>
        }
      </div>
    </p-tab>
    <p-tab [value]="11" class="surface-card border-1 border-bottom-none surface-border hover:bg-primary-light">
      <div class="flex align-content-center gap-2">
        {{ 'dev.prompts.pr._title' | translate }}
        @if (hasChanges()) {
          <span class="material-icons-outlined text-primary">change_circle</span>
        }
      </div>
    </p-tab>
  </p-tablist>
  <p-tabpanels class="p-0 m-0">
    @for (tab of tabs; track tab.value) {
      <p-tabpanel [value]="tab.value">
        <div [class]="styleCardService.cardStyles(undefined, undefined, undefined, undefined, undefined, 'border-top-none border-noround-top')" class="w-limited">
          @if (tab.value === selectedTab()) {
            <p class="mt-0">{{ tab.description | translate }}</p>
            <!--Checkboxes-->
            <div class="flex flex-row flex-wrap gap-4 mt-0 mb-4">
              @if (isFragmentsTab(tab)) {
                @for (fragment of tab.fragments; track fragment.key) {
                  <div class="flex flex-row align-items-center gap-2">
                    <p-radiobutton [binary]="true" [inputId]="'show_' + fragment.key" [ngModel]="isFragmentVisible(fragment.key)" (ngModelChange)="toggleFragment(fragment.key)" />
                    <label [for]="'show_' + fragment.key" class="cursor-pointer font-semibold">{{ fragment.label | translate }}</label>
                  </div>
                }
              } @else if (isSkillsTab(tab)) {
                @for (skill of tab.skills; track skill.enumKey) {
                  <div class="flex flex-row align-content-center gap-2">
                    <p-checkbox [binary]="true" [inputId]="'show_' + skill.enumKey" [ngModel]="isPromptVisible(skill.enumKey)" (ngModelChange)="togglePrompt(skill.enumKey)" />
                    <label [for]="'show_' + skill.enumKey" class="cursor-pointer font-semibold">{{ skill.translationKey | translate }}</label>
                  </div>
                }
              } @else if (isExamplesTab(tab)) {
                @for (exampleSet of tab.exampleSets; track exampleSet.key) {
                  <div class="flex flex-row align-items-center gap-2">
                    <p-radiobutton
                      [binary]="true"
                      [inputId]="'show_example_set_' + exampleSet.key"
                      [ngModel]="selectedExampleSet().key === exampleSet.key"
                      (ngModelChange)="selectExampleSet(exampleSet)"
                    />
                    <label [for]="'show_example_set_' + exampleSet.key" class="cursor-pointer font-semibold">{{ exampleSet.title | translate }}</label>
                  </div>
                }
              } @else {
                @for (prompt of tab.prompts; track prompt.enumKey) {
                  <div class="flex flex-row align-content-center gap-2">
                    <p-checkbox [binary]="true" [inputId]="'show_' + prompt.enumKey" [ngModel]="isPromptVisible(prompt.enumKey)" (ngModelChange)="togglePrompt(prompt.enumKey)" />
                    <label [class.text-red]="isPromptConfig(prompt) ? !prompt.promptText.available : false" [for]="'show_' + prompt.enumKey" class="cursor-pointer font-semibold">
                      {{ prompt.translationKey | translate }}
                    </label>
                  </div>
                }
              }
            </div>
            <!--Inputs-->
            <div class="flex flex-column gap-3 mt-0">
              <!--Fragments-->
              @if (isFragmentsTab(tab)) {
                @for (fragment of tab.fragments; track fragment.key) {
                  @if (isFragmentVisible(fragment.key)) {
                    <h2 class="my-0">{{ fragment.label | translate }}</h2>
                    @for (item of fragment.data; track item.enumKey) {
                      <p-iftalabel>
                        <textarea [(ngModel)]="item.promptText" [autoResize]="true" [id]="item.enumKey" (ngModelChange)="updateDiff()" fluid pTextarea rows="2"></textarea>
                        <label [for]="item.enumKey">{{ item.translationKey | translate }}</label>
                      </p-iftalabel>
                    }
                  }
                }
              }
              <!--Skills-->
              @if (isSkillsTab(tab)) {
                <div class="compact-prompt-editor">
                  @for (skill of tab.skills; track skill.enumKey) {
                    @if (isPromptVisible(skill.enumKey)) {
                      <h2 class="my-0">{{ skill.translationKey | translate }}</h2>
                      @for (group of getSkillGroups(skill); track group.key) {
                        <h3>{{ getSkillGroupLabel(group.key) | translate }}</h3>
                        @for (rule of group.rules; track rule.id) {
                          <div class="flex flex-column gap-2">
                            @if (rule.severity) {
                              <p-iftalabel class="w-12rem">
                                <p-select
                                  [(ngModel)]="rule.severity"
                                  [id]="skill.enumKey + '_' + rule.id + '_severity'"
                                  [options]="skillSeverityOptions"
                                  (onChange)="updateDiff()"
                                  appendTo="body"
                                  fluid
                                  optionLabel="label"
                                  optionValue="value"
                                >
                                  <ng-template let-option pTemplate="item">{{ option.label | translate }}</ng-template>
                                  <ng-template let-option pTemplate="selectedItem">{{ option.label | translate }}</ng-template>
                                </p-select>
                                <label [for]="skill.enumKey + '_' + rule.id + '_severity'">{{ 'dev.prompts.skills.severity._label' | translate }}</label>
                              </p-iftalabel>
                            }
                            <p-iftalabel>
                              <textarea [(ngModel)]="rule.text" [autoResize]="true" [id]="skill.enumKey + '_' + rule.id" (ngModelChange)="updateDiff()" fluid pTextarea rows="2"></textarea>
                              <label [for]="skill.enumKey + '_' + rule.id">{{ rule.id }}</label>
                            </p-iftalabel>
                          </div>
                        }
                      }
                    }
                  }
                </div>
              }
              <!--Examples-->
              @if (isExamplesTab(tab)) {
                <div class="compact-prompt-editor">
                  <h2 class="my-0">{{ selectedExampleSet().title | translate }}</h2>
                  <p>{{ selectedExampleSet().description | translate }}</p>
                  @for (example of selectedExampleSet().examples; track example.id) {
                    <h3 [id]="example.id + '_heading'">{{ getAlertRewriteExampleLegend(example) }}</h3>
                    <div class="example-json-object">
                      <pre [attr.aria-label]="'dev.prompts.examples.selectionMetadata' | translate" class="prompt-preview example-metadata">{{ getExampleSelectionMetadata(example) }}</pre>
                      <textarea
                        [attr.aria-label]="'dev.prompts.examples.editableFinalExample' | translate"
                        [id]="example.id + '_json'"
                        [ngModel]="getExampleJsonDraft(example)"
                        (ngModelChange)="updateExampleJsonDraft(example, $event)"
                        class="example-json-editor"
                        fluid
                        pTextarea
                        rows="6"
                      ></textarea>
                      <pre class="prompt-preview example-metadata" aria-hidden="true">&#125;</pre>
                    </div>
                    @if (getExampleJsonError(example); as errorKey) {
                      <p-message severity="error">{{ errorKey | translate }}</p-message>
                    }
                  }
                </div>
              }
              <!--Full prompts-->
              @if (!isFragmentsTab(tab) && !isSkillsTab(tab) && !isExamplesTab(tab)) {
                @for (prompt of tab.prompts; track prompt.enumKey) {
                  <!-- String editor -->
                  @if (isPromptString(prompt)) {
                    <p-iftalabel>
                      <textarea [(ngModel)]="prompt.promptText" [autoResize]="true" [id]="prompt.enumKey" (ngModelChange)="updateDiff()" fluid pTextarea rows="2"></textarea>
                      <label [for]="prompt.enumKey">{{ prompt.translationKey | translate }}</label>
                    </p-iftalabel>
                  }
                  <!-- Config editor -->
                  @if (isPromptConfig(prompt) && isPromptVisible(prompt.enumKey) && isAlertRewritePipeline(prompt)) {
                    <div class="compact-prompt-editor">
                      <h2 class="my-0">{{ prompt.translationKey | translate }}</h2>
                      @for (group of alertRewritePipelineGroups; track group.key) {
                        @for (section of group.sections; track section.key) {
                          @if (section.options?.length) {
                            @if (!section.hideLabel && section.label) {
                              <h3>{{ section.label | translate }}</h3>
                            }
                            @for (option of section.options; track option.key) {
                              <h4>{{ option.label | translate }}</h4>
                              @if ((option.key === 'systemWithExamples' || option.key === 'systemWithoutExamples') && option.bulletItems) {
                                @for (instruction of option.bulletItems; track $index; let instructionIndex = $index) {
                                  <p-iftalabel>
                                    <textarea
                                      [autoResize]="true"
                                      [id]="'alert_rewrite_' + option.key + '_' + instructionIndex"
                                      [ngModel]="instruction"
                                      (ngModelChange)="updateAlertRewriteSystemInstruction(option.key, instructionIndex, $event)"
                                      class="rewrite-prompt-editor"
                                      fluid
                                      pTextarea
                                      rows="2"
                                    ></textarea>
                                    <label [for]="'alert_rewrite_' + option.key + '_' + instructionIndex">
                                      {{ 'dev.prompts.alertRewrite.instructionLabel' | translate: { number: instructionIndex + 1 } }}
                                    </label>
                                  </p-iftalabel>
                                }
                              } @else if (option.key === 'outputSchemaWithExamples' || option.key === 'outputSchemaWithoutExamples') {
                                <p-iftalabel>
                                  <textarea
                                    [autoResize]="true"
                                    [id]="'alert_rewrite_' + option.key"
                                    [ngModel]="getAlertRewriteOutputSchemaDraft(option.key)"
                                    (ngModelChange)="updateAlertRewriteOutputSchema(option.key, $event)"
                                    class="rewrite-prompt-editor"
                                    fluid
                                    pTextarea
                                    rows="3"
                                  ></textarea>
                                  <label [for]="'alert_rewrite_' + option.key">{{ 'dev.prompts.alertRewrite.outputSchemaLabel' | translate }}</label>
                                </p-iftalabel>
                                @if (getAlertRewriteOutputSchemaError(option.key); as errorKey) {
                                  <p-message severity="error">{{ errorKey | translate }}</p-message>
                                }
                              } @else {
                                <pre class="prompt-preview">{{ getPipelineOptionContent(option) }}</pre>
                              }
                            }
                          } @else {
                            <h3>{{ section.label ?? '' | translate }}</h3>
                            @if (section.key === 'retryInstructions' && section.conditionItems) {
                              @for (retry of section.conditionItems; track retry.key) {
                                <h4>{{ retry.condition | translate }}</h4>
                                @if (retry.bulletItems) {
                                  @for (instruction of retry.bulletItems; track $index; let instructionIndex = $index) {
                                    <p-iftalabel>
                                      <textarea
                                        [autoResize]="true"
                                        [id]="'alert_rewrite_retry_' + retry.key + '_' + instructionIndex"
                                        [ngModel]="instruction"
                                        (ngModelChange)="updateAlertRewriteRetryInstruction(retry.key, $event, instructionIndex)"
                                        class="rewrite-prompt-editor"
                                        fluid
                                        pTextarea
                                        rows="2"
                                      ></textarea>
                                      <label [for]="'alert_rewrite_retry_' + retry.key + '_' + instructionIndex">
                                        {{ 'dev.prompts.alertRewrite.instructionLabel' | translate: { number: instructionIndex + 1 } }}
                                      </label>
                                    </p-iftalabel>
                                  }
                                } @else {
                                  <textarea
                                    [attr.aria-label]="retry.condition | translate"
                                    [autoResize]="true"
                                    [id]="'alert_rewrite_retry_' + retry.key"
                                    [ngModel]="retry.instruction"
                                    (ngModelChange)="updateAlertRewriteRetryInstruction(retry.key, $event)"
                                    class="rewrite-prompt-editor"
                                    fluid
                                    pTextarea
                                    rows="2"
                                  ></textarea>
                                }
                              }
                            } @else if (section.key === 'baseRules' && section.bulletItems) {
                              @for (rule of section.bulletItems; track $index; let ruleIndex = $index) {
                                <p-iftalabel>
                                  <textarea
                                    [autoResize]="true"
                                    [id]="'alert_rewrite_base_rule_' + ruleIndex"
                                    [ngModel]="rule"
                                    (ngModelChange)="updateAlertRewriteBaseRule(ruleIndex, $event)"
                                    class="rewrite-prompt-editor"
                                    fluid
                                    pTextarea
                                    rows="2"
                                  ></textarea>
                                  <label [for]="'alert_rewrite_base_rule_' + ruleIndex">
                                    {{ 'dev.prompts.alertRewrite.baseRuleLabel' | translate: { number: ruleIndex + 1 } }}
                                  </label>
                                </p-iftalabel>
                              }
                            } @else if (section.key === 'preserveFinalStandaloneLink' || section.key === 'enforceLinkManifest') {
                              <textarea
                                [attr.aria-label]="section.label ?? '' | translate"
                                [autoResize]="true"
                                [id]="'alert_rewrite_' + section.key"
                                [ngModel]="section.content"
                                (ngModelChange)="updateAlertRewriteConditionalInstruction(section.key, $event)"
                                class="rewrite-prompt-editor"
                                fluid
                                pTextarea
                                rows="2"
                              ></textarea>
                            } @else {
                              <pre class="prompt-preview">{{ getPipelineSectionContent(section) }}</pre>
                            }
                          }
                        }
                      }
                    </div>
                  }
                  @if (isPromptConfig(prompt) && isPromptVisible(prompt.enumKey) && !isAlertRewritePipeline(prompt)) {
                    <h2 class="my-0">{{ prompt.translationKey | translate }}</h2>
                    <!--Fragment dropdowns-->
                    <div class="flex flex-column lg:flex-row gap-2">
                      <!-- Role dropdown -->
                      <p-iftalabel class="flex-1">
                        <p-select
                          [(ngModel)]="prompt.promptText.role"
                          [id]="prompt.enumKey + '_role'"
                          [options]="roleOptions"
                          (onChange)="updateDiff()"
                          class="h-full"
                          appendTo="body"
                          fluid
                          optionLabel="label"
                          optionValue="value"
                        >
                          <ng-template let-option pTemplate="item">
                            {{ option.label | translate }}
                          </ng-template>
                          <ng-template let-option pTemplate="selectedItem">
                            {{ option.label | translate }}
                          </ng-template>
                        </p-select>
                        <label [for]="prompt.enumKey + '_role'">{{ 'aiPrompt.component.role' | translate }}</label>
                      </p-iftalabel>
                      <!-- Output format dropdown -->
                      <p-iftalabel class="flex-1">
                        <p-select
                          [(ngModel)]="prompt.promptText.output"
                          [id]="prompt.enumKey + '_output'"
                          [options]="outputOptions"
                          (onChange)="updateDiff()"
                          class="h-full"
                          appendTo="body"
                          fluid
                          optionLabel="label"
                          optionValue="value"
                        >
                          <ng-template let-option pTemplate="item">
                            {{ option.label | translate }}
                          </ng-template>
                          <ng-template let-option pTemplate="selectedItem">
                            {{ option.label | translate }}
                          </ng-template>
                        </p-select>
                        <label [for]="prompt.enumKey + '_output'">{{ 'aiPrompt.component.output' | translate }}</label>
                      </p-iftalabel>
                      <!-- Rubric multi-select -->
                      <p-iftalabel class="flex-1">
                        <p-multiselect
                          [(ngModel)]="prompt.promptText.rubric"
                          [id]="prompt.enumKey + '_rubric'"
                          [options]="rubricOptions()"
                          [placeholder]="'common.none' | translate"
                          (onChange)="updateDiff()"
                          class="h-full"
                          appendTo="body"
                          fluid
                          optionLabel="label"
                          optionValue="value"
                        />
                        <label [for]="prompt.enumKey + '_rubric'">{{ 'aiPrompt.component.rubric' | translate }}</label>
                      </p-iftalabel>
                    </div>
                    <!-- Task textarea -->
                    <p-iftalabel>
                      <textarea
                        [(ngModel)]="prompt.promptText.task"
                        [autoResize]="prompt.enumKey !== 'AlertsProblems'"
                        [class.prompt-content-sized]="prompt.enumKey === 'AlertsProblems'"
                        [id]="prompt.enumKey + '_task'"
                        (ngModelChange)="updateDiff()"
                        fluid
                        pTextarea
                        rows="2"
                      ></textarea>
                      <label [for]="prompt.enumKey + '_task'">{{ 'aiPrompt.component.task' | translate }}</label>
                    </p-iftalabel>

                    <!-- JSON schema -->
                    @if (prompt.promptText.output === OutputKey.Json) {
                      <p-iftalabel>
                        <textarea
                          [(ngModel)]="prompt.promptText.jsonSchema"
                          [autoResize]="true"
                          [id]="prompt.enumKey + '_jsonSchema'"
                          (ngModelChange)="updateDiff()"
                          fluid
                          pTextarea
                          rows="2"
                        ></textarea>
                        <label [for]="prompt.enumKey + '_jsonSchema'">{{ 'aiPrompt.component.jsonSchema' | translate }}</label>
                      </p-iftalabel>
                    }
                  }
                }
              }
            </div>
          }
        </div>
      </p-tabpanel>
    }
    <p-tabpanel [value]="10">
      <div [class]="styleCardService.cardStyles(undefined, undefined, undefined, undefined, undefined, 'border-top-none border-noround-top')" class="w-limited">
        <div class="flex flex-column gap-2">
          <div>
            <h2 class="my-0">{{ 'dev.prompts.preview.header' | translate }}</h2>
            <p class="my-1">{{ 'dev.prompts.preview.description' | translate }}</p>
            <p-select
              [group]="true"
              [ngModel]="selectedPrompt()"
              [options]="promptGroups"
              (ngModelChange)="selectedPrompt.set($event)"
              class="w-20rem"
              inputId="promptSelect"
              optionGroupChildren="items"
              optionGroupLabel="label"
              optionLabel="translationKey"
            >
              <ng-template #group let-group>{{ group.label | translate }}</ng-template>
              <ng-template #selectedItem let-selected>{{ selected.translationKey | translate }}</ng-template>
              <ng-template #item let-prompt>
                <span [class.text-red]="!prompt.promptText.available">{{ prompt.translationKey | translate }}</span>
              </ng-template>
            </p-select>
            @if (selectedPromptIsAlertRewritePipeline()) {
              <p>{{ 'dev.prompts.alertRewrite.testUnavailable' | translate }}</p>
              @for (group of alertRewritePipelineGroups; track group.key) {
                @for (section of group.sections; track section.key) {
                  @if (section.options?.length) {
                    @if (!section.hideLabel && section.label) {
                      <h3>{{ section.label | translate }}</h3>
                    }
                    @for (option of section.options; track option.key) {
                      <h4>{{ option.label | translate }}</h4>
                      <pre class="prompt-preview">{{ getPipelineOptionContent(option) }}</pre>
                    }
                  } @else {
                    <h3>{{ section.label ?? '' | translate }}</h3>
                    <pre class="prompt-preview">{{ getPipelineSectionContent(section) }}</pre>
                  }
                }
              }
            } @else if (selectedPromptIsAlertRewriteExamples()) {
              @for (example of alertRewriteExamples; track example.id) {
                <h3>{{ getAlertRewriteExampleLegend(example) }}</h3>
                <pre class="prompt-preview">{{ getFormattedExamplePreview(example) }}</pre>
              }
            } @else if (selectedPromptIsAlertProblems()) {
              @for (section of alertProblemsSections; track section.key) {
                <h3>{{ section.label ?? '' | translate }}</h3>
                <pre class="prompt-preview">{{ section.content }}</pre>
              }
            } @else if (selectedPromptIsSkill()) {
              <p>{{ 'dev.prompts.skills.testUnavailable' | translate }}</p>
              @for (group of getSelectedSkillGroups(); track group.key) {
                <h3>{{ getSkillGroupLabel(group.key) | translate }}</h3>
                @for (rule of group.rules; track rule.id) {
                  <h4>{{ rule.id }}</h4>
                  <pre class="prompt-preview">{{ rule.text }}</pre>
                }
              }
            } @else {
              <pre class="prompt-preview">{{ aiPrompt() }}</pre>
            }
          </div>
          @if (!selectedPromptIsAlertRewritePipeline() && !selectedPromptIsAlertRewriteExamples() && !selectedPromptIsSkill()) {
            <div>
              @if (selectedPromptIsAlertProblems()) {
                <h3 class="my-1">{{ 'dev.prompts.preview.alertProblems.testPage' | translate }}</h3>
                <div class="flex flex-column md:flex-row gap-2 align-items-start">
                  <div class="flex-1 w-full">
                    <input
                      id="alertProblemsTestUrl"
                      [attr.aria-label]="'dev.prompts.preview.alertProblems.enterTestPageUrl' | translate"
                      [ngModel]="alertProblemsTestUrl"
                      [placeholder]="'dev.prompts.preview.alertProblems.enterTestPageUrl' | translate"
                      (ngModelChange)="onAlertProblemsTestUrlChange($event)"
                      class="w-full"
                      fluid
                      pInputText
                      type="url"
                    />
                  </div>
                  <p-button
                    [disabled]="!alertProblemsTestUrl.trim() || alertProblemsTestLoading()"
                    [label]="'dev.prompts.preview.alertProblems.loadPage' | translate"
                    (onClick)="loadAlertProblemsTestPage()"
                    icon="pi pi-download"
                  />
                </div>
                @if (alertProblemsTestLoading()) {
                  <p-progressspinner />
                }
                @if (alertProblemsTestError()) {
                  <p-message severity="error">
                    {{ 'dev.prompts.preview.alertProblems.loadError' | translate: { error: alertProblemsTestError() } }}
                  </p-message>
                }
                <h3>{{ 'dev.prompts.preview.alertProblems.generatedPayload' | translate }}</h3>
                <textarea
                  id="alertProblemsTestContent"
                  [(ngModel)]="alertProblemsTestContent"
                  [attr.aria-label]="'dev.prompts.preview.alertProblems.generatedPayload' | translate"
                  (ngModelChange)="alertProblemsTestPayloadInvalid.set(false)"
                  class="secondary-outline min-h-6rem"
                  fluid
                  pTextarea
                  rows="12"
                  variant="outlined"
                ></textarea>
                @if (alertProblemsTestPayloadInvalid()) {
                  <p-message severity="error">{{ 'dev.prompts.preview.alertProblems.invalidPayload' | translate }}</p-message>
                }
              } @else {
                <h3 class="my-1">{{ 'dev.prompts.preview.testContent' | translate }}</h3>
                <p-iftalabel>
                  <textarea id="content" [(ngModel)]="description" class="secondary-outline min-h-6rem" autoResize="true" fluid pTextarea rows="3" variant="outlined"></textarea>
                  <label for="content">{{ 'dev.prompts.preview.testContentLabel' | translate }}</label>
                </p-iftalabel>
              }
            </div>
            <div class="flex gap-2">
              <p-button [disabled]="!getSelectedPromptConfig() || !hasTestContent() || alertProblemsTestLoading()" (onClick)="testResult()" type="button">
                {{ 'dev.prompts.preview.getResult' | translate }}
              </p-button>
              <p-button [disabled]="!getSelectedPromptConfig() || !hasTestContent() || alertProblemsTestLoading()" (onClick)="testResponse()" type="button">
                {{ 'dev.prompts.preview.getResponse' | translate }}
              </p-button>
            </div>
            @if (aiState().loading) {
              <p-progressspinner />
            }
            @if (aiState().error) {
              <p-message severity="error">{{ aiState().error! }}</p-message>
            }
            @if (aiState().respondingModel) {
              <small>Answered by: {{ aiState().respondingModel }}</small>
            }
            @if (result) {
              <pre class="prompt-preview">{{ formatTestResult(result) }}</pre>
            }
            @if (response) {
              <pre class="prompt-preview">{{ response | json }}</pre>
            }
          }
        </div>
      </div>
    </p-tabpanel>
    <p-tabpanel [value]="11">
      <div [class]="styleCardService.cardStyles(undefined, undefined, undefined, undefined, undefined, 'border-top-none border-noround-top')" class="w-limited">
        <h2 class="my-1">{{ 'dev.prompts.pr.header' | translate }}</h2>
        @if (hasChanges()) {
          <!--Review-->
          <div #diffContainer></div>
          <!--Export-->
          <p-fieldset [collapsed]="true" [legend]="'dev.prompts.pr.filePreview' | translate" [toggleable]="true" styleClass="secondary-outline mb-3">
            <pre #filePreview><code class="language-typescript">{{ rebuildTabFile(tabs[selectedPromptTab()]) }}</code></pre>
          </p-fieldset>
          <!--Open PR-->
          <p-button
            [disabled]="
              !signInService.user() || (isExamplesTab(tabs[selectedPromptTab()]) && hasInvalidExampleJson()) || (tabs[selectedPromptTab()].tool === 'Page' && hasInvalidAlertRewriteOutputSchema())
            "
            [label]="'dev.prompts.button.openPR' | translate"
            (onClick)="openPullRequest(tabs[selectedPromptTab()])"
            icon="pi pi-send"
          />
        } @else {
          <p-message icon="pi pi-info-circle" severity="info">{{ 'dev.prompts.pr.noChangesMessage' | translate }}</p-message>
        }
      </div>
    </p-tabpanel>
  </p-tabpanels>
</p-tabs>
`, styles: ["/* angular:styles/component:css;7752ade55252de3884c9ed9d7d4a7264364f33ff6b8718e5a1cb3a3e7601a795;C:/my-working-files/GitHub/design-assistant-aws/src/app/views/toolbox/dev-tools/prompt-editor/prompt-editor.component.ts */\npre.prompt-preview {\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  min-width: 0;\n  max-width: 100%;\n  font-size: 1rem;\n  white-space: pre-wrap !important;\n  overflow-wrap: anywhere;\n  word-break: break-word;\n  overflow-x: hidden;\n}\n.prompt-content-sized {\n  field-sizing: content;\n  min-height: 24rem;\n  overflow-y: auto;\n}\n.example-json-editor {\n  field-sizing: content;\n  min-height: 8rem;\n  overflow-y: auto;\n  font-size: 1.25rem !important;\n}\n.example-metadata {\n  margin: 0.5rem 0;\n  font-size: 1.25rem !important;\n}\n.example-json-object {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.rewrite-prompt-editor {\n  font-size: 1.25rem !important;\n}\n.compact-prompt-editor {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.compact-prompt-editor h2,\n.compact-prompt-editor h3,\n.compact-prompt-editor h4,\n.compact-prompt-editor p,\n.compact-prompt-editor pre.prompt-preview {\n  margin-block: 0;\n}\n/*# sourceMappingURL=prompt-editor.component-3WYLZMNX.css.map */\n"] }]
  }], () => [], { diffContainer: [{ type: ViewChild, args: ["diffContainer", { isSignal: true }] }], filePreview: [{ type: ViewChild, args: ["filePreview", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PromptEditorComponent, { className: "PromptEditorComponent", filePath: "src/app/views/toolbox/dev-tools/prompt-editor/prompt-editor.component.ts", lineNumber: 195 });
})();
export {
  PromptEditorComponent
};
//# sourceMappingURL=chunk-JF4M2QKA.js.map
