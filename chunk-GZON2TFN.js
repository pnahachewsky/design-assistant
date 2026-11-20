import {
  AlertRewriteExamples,
  CanadaCaStyleRules,
  LinkWritingPromptRuleGroups,
  PagePrompts,
  ProblemPrompts
} from "./chunk-NK457JNB.js";
import {
  require_types
} from "./chunk-YIFK26D6.js";
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
  ToolsPromptKey,
  ToolsPrompts
} from "./chunk-UANO6U7W.js";
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
  UserSettingsService
} from "./chunk-JF73CZCV.js";
import "./chunk-6PPBJKXF.js";
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
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstoreLet,
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
  __toESM
} from "./chunk-YCXP4XZS.js";

// src/app/views/toolbox/dev-tools/prompt-editor/prompt-editor.component.ts
var import_types = __toESM(require_types());
var _c0 = ["diffContainer"];
var _c1 = ["filePreview"];
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
    \u0275\u0275elementStart(0, "p-tab", 22);
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
      const prompt_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.togglePrompt(prompt_r9.enumKey));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 28);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const prompt_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("binary", true)("inputId", "show_" + prompt_r9.enumKey)("ngModel", ctx_r2.isPromptVisible(prompt_r9.enumKey));
    \u0275\u0275advance();
    \u0275\u0275classProp("text-red", ctx_r2.isPromptConfig(prompt_r9) ? !prompt_r9.promptText.available : false);
    \u0275\u0275property("for", "show_" + prompt_r9.enumKey);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 7, prompt_r9.translationKey), " ");
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, PromptEditorComponent_For_23_Conditional_2_Conditional_5_For_1_Template, 5, 9, "div", 29, _forTrack2);
  }
  if (rf & 2) {
    const tab_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275repeater(tab_r7.prompts);
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_7_For_1_Conditional_0_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-iftalabel")(1, "textarea", 30);
    \u0275\u0275twoWayListener("ngModelChange", function PromptEditorComponent_For_23_Conditional_2_Conditional_7_For_1_Conditional_0_For_4_Template_textarea_ngModelChange_1_listener($event) {
      const item_r11 = \u0275\u0275restoreView(_r10).$implicit;
      \u0275\u0275twoWayBindingSet(item_r11.promptText, $event) || (item_r11.promptText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function PromptEditorComponent_For_23_Conditional_2_Conditional_7_For_1_Conditional_0_For_4_Template_textarea_ngModelChange_1_listener() {
      \u0275\u0275restoreView(_r10);
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
    const item_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", item_r11.promptText);
    \u0275\u0275property("autoResize", true)("id", item_r11.enumKey);
    \u0275\u0275advance();
    \u0275\u0275property("for", item_r11.enumKey);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, item_r11.translationKey));
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_7_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, PromptEditorComponent_For_23_Conditional_2_Conditional_7_For_1_Conditional_0_For_4_Template, 5, 7, "p-iftalabel", null, _forTrack2);
  }
  if (rf & 2) {
    const fragment_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, fragment_r12.label));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(fragment_r12.data);
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_7_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PromptEditorComponent_For_23_Conditional_2_Conditional_7_For_1_Conditional_0_Template, 5, 3);
  }
  if (rf & 2) {
    const fragment_r12 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional(ctx_r2.isFragmentVisible(fragment_r12.key) ? 0 : -1);
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, PromptEditorComponent_For_23_Conditional_2_Conditional_7_For_1_Template, 1, 1, null, null, _forTrack1);
  }
  if (rf & 2) {
    const tab_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275repeater(tab_r7.fragments);
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-iftalabel")(1, "textarea", 30);
    \u0275\u0275twoWayListener("ngModelChange", function PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_0_Template_textarea_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r13);
      const prompt_r14 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(prompt_r14.promptText, $event) || (prompt_r14.promptText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_0_Template_textarea_ngModelChange_1_listener() {
      \u0275\u0275restoreView(_r13);
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
    const prompt_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", prompt_r14.promptText);
    \u0275\u0275property("autoResize", true)("id", prompt_r14.enumKey);
    \u0275\u0275advance();
    \u0275\u0275property("for", prompt_r14.enumKey);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, prompt_r14.translationKey));
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_1_For_4_For_5_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r15 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, section_r15.label));
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_1_For_4_For_5_Conditional_0_For_4_Conditional_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r16 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r16);
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_1_For_4_For_5_Conditional_0_For_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 37);
    \u0275\u0275repeaterCreate(1, PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_1_For_4_For_5_Conditional_0_For_4_Conditional_3_For_2_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(option_r17.bulletItems);
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_1_For_4_For_5_Conditional_0_For_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r17.content);
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_1_For_4_For_5_Conditional_0_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "p-fieldset", 36);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275conditionalCreate(3, PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_1_For_4_For_5_Conditional_0_For_4_Conditional_3_Template, 3, 0, "ul", 37)(4, PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_1_For_4_For_5_Conditional_0_For_4_Conditional_4_Template, 2, 1, "pre", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const option_r17 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("collapsed", option_r17.collapsed)("legend", \u0275\u0275pipeBind1(2, 4, option_r17.label))("toggleable", true);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((option_r17.bulletItems == null ? null : option_r17.bulletItems.length) ? 3 : 4);
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_1_For_4_For_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section");
    \u0275\u0275conditionalCreate(1, PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_1_For_4_For_5_Conditional_0_Conditional_1_Template, 3, 3, "h4");
    \u0275\u0275elementStart(2, "div", 34);
    \u0275\u0275repeaterCreate(3, PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_1_For_4_For_5_Conditional_0_For_4_Template, 5, 6, "div", 35, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const section_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(!section_r15.hideLabel && section_r15.label ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(section_r15.options);
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_1_For_4_For_5_Conditional_1_Conditional_2_For_2_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r18 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(line_r18);
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_1_For_4_For_5_Conditional_1_Conditional_2_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 37);
    \u0275\u0275repeaterCreate(1, PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_1_For_4_For_5_Conditional_1_Conditional_2_For_2_Conditional_4_For_2_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r19 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(item_r19.bulletItems);
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_1_For_4_For_5_Conditional_1_Conditional_2_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r19 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r19.instruction);
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_1_For_4_For_5_Conditional_1_Conditional_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_1_For_4_For_5_Conditional_1_Conditional_2_For_2_Conditional_4_Template, 3, 0, "ul", 37)(5, PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_1_For_4_For_5_Conditional_1_Conditional_2_For_2_Conditional_5_Template, 2, 1, "p");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r19 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, item_r19.condition));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((item_r19.bulletItems == null ? null : item_r19.bulletItems.length) ? 4 : 5);
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_1_For_4_For_5_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275repeaterCreate(1, PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_1_For_4_For_5_Conditional_1_Conditional_2_For_2_Template, 6, 4, "div", 39, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r15 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(section_r15.conditionItems);
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_1_For_4_For_5_Conditional_1_Conditional_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r20 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r20);
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_1_For_4_For_5_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 37);
    \u0275\u0275repeaterCreate(1, PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_1_For_4_For_5_Conditional_1_Conditional_3_For_2_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r15 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(section_r15.bulletItems);
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_1_For_4_For_5_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r15 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(section_r15.content);
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_1_For_4_For_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-fieldset", 33);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275conditionalCreate(2, PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_1_For_4_For_5_Conditional_1_Conditional_2_Template, 3, 0, "div", 38)(3, PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_1_For_4_For_5_Conditional_1_Conditional_3_Template, 3, 0, "ul", 37)(4, PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_1_For_4_For_5_Conditional_1_Conditional_4_Template, 2, 1, "pre", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("collapsed", section_r15.collapsed)("legend", \u0275\u0275pipeBind1(1, 4, section_r15.label ?? ""))("toggleable", true);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((section_r15.conditionItems == null ? null : section_r15.conditionItems.length) ? 2 : (section_r15.bulletItems == null ? null : section_r15.bulletItems.length) ? 3 : 4);
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_1_For_4_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_1_For_4_For_5_Conditional_0_Template, 5, 1, "section")(1, PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_1_For_4_For_5_Conditional_1_Template, 5, 6, "p-fieldset", 33);
  }
  if (rf & 2) {
    const section_r15 = ctx.$implicit;
    \u0275\u0275conditional((section_r15.options == null ? null : section_r15.options.length) ? 0 : 1);
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_1_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 32)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_1_For_4_For_5_Template, 2, 1, null, null, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r21 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, group_r21.label));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(group_r21.sections);
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_1_For_4_Template, 6, 3, "section", 32, _forTrack1);
  }
  if (rf & 2) {
    const prompt_r14 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, prompt_r14.translationKey));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.alertRewritePipelineGroups);
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const option_r23 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, option_r23.label), " ");
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const option_r24 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, option_r24.label), " ");
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_2_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const option_r25 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, option_r25.label), " ");
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_2_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const option_r26 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, option_r26.label), " ");
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_2_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-iftalabel")(1, "textarea", 30);
    \u0275\u0275twoWayListener("ngModelChange", function PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_2_Conditional_29_Template_textarea_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r27);
      const prompt_r14 = \u0275\u0275nextContext(2).$implicit;
      \u0275\u0275twoWayBindingSet(prompt_r14.promptText.jsonSchema, $event) || (prompt_r14.promptText.jsonSchema = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_2_Conditional_29_Template_textarea_ngModelChange_1_listener() {
      \u0275\u0275restoreView(_r27);
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
    const prompt_r14 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", prompt_r14.promptText.jsonSchema);
    \u0275\u0275property("autoResize", true)("id", prompt_r14.enumKey + "_jsonSchema");
    \u0275\u0275advance();
    \u0275\u0275property("for", prompt_r14.enumKey + "_jsonSchema");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, "aiPrompt.component.jsonSchema"));
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 40)(4, "p-iftalabel", 41)(5, "p-select", 42);
    \u0275\u0275twoWayListener("ngModelChange", function PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_2_Template_p_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r22);
      const prompt_r14 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(prompt_r14.promptText.role, $event) || (prompt_r14.promptText.role = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onChange", function PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_2_Template_p_select_onChange_5_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.updateDiff());
    });
    \u0275\u0275template(6, PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_2_ng_template_6_Template, 2, 3, "ng-template", 43)(7, PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_2_ng_template_7_Template, 2, 3, "ng-template", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "label", 31);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "p-iftalabel", 41)(12, "p-select", 42);
    \u0275\u0275twoWayListener("ngModelChange", function PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_2_Template_p_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r22);
      const prompt_r14 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(prompt_r14.promptText.output, $event) || (prompt_r14.promptText.output = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onChange", function PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_2_Template_p_select_onChange_12_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.updateDiff());
    });
    \u0275\u0275template(13, PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_2_ng_template_13_Template, 2, 3, "ng-template", 43)(14, PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_2_ng_template_14_Template, 2, 3, "ng-template", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "label", 31);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "p-iftalabel", 41)(19, "p-multiselect", 45);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_2_Template_p_multiselect_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r22);
      const prompt_r14 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(prompt_r14.promptText.rubric, $event) || (prompt_r14.promptText.rubric = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onChange", function PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_2_Template_p_multiselect_onChange_19_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.updateDiff());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "label", 31);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "p-iftalabel")(25, "textarea", 30);
    \u0275\u0275twoWayListener("ngModelChange", function PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_2_Template_textarea_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r22);
      const prompt_r14 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(prompt_r14.promptText.task, $event) || (prompt_r14.promptText.task = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_2_Template_textarea_ngModelChange_25_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.updateDiff());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "label", 31);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(29, PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_2_Conditional_29_Template, 5, 7, "p-iftalabel");
  }
  if (rf & 2) {
    const prompt_r14 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 23, prompt_r14.translationKey));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", prompt_r14.promptText.role);
    \u0275\u0275property("id", prompt_r14.enumKey + "_role")("options", ctx_r2.roleOptions);
    \u0275\u0275advance(3);
    \u0275\u0275property("for", prompt_r14.enumKey + "_role");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 25, "aiPrompt.component.role"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", prompt_r14.promptText.output);
    \u0275\u0275property("id", prompt_r14.enumKey + "_output")("options", ctx_r2.outputOptions);
    \u0275\u0275advance(3);
    \u0275\u0275property("for", prompt_r14.enumKey + "_output");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 27, "aiPrompt.component.output"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", prompt_r14.promptText.rubric);
    \u0275\u0275property("id", prompt_r14.enumKey + "_rubric")("options", ctx_r2.rubricOptions())("placeholder", \u0275\u0275pipeBind1(20, 29, "common.none"));
    \u0275\u0275advance(2);
    \u0275\u0275property("for", prompt_r14.enumKey + "_rubric");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 31, "aiPrompt.component.rubric"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", prompt_r14.promptText.task);
    \u0275\u0275property("autoResize", true)("id", prompt_r14.enumKey + "_task");
    \u0275\u0275advance();
    \u0275\u0275property("for", prompt_r14.enumKey + "_task");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 33, "aiPrompt.component.task"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(prompt_r14.promptText.output === ctx_r2.OutputKey.Json ? 29 : -1);
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_0_Template, 5, 7, "p-iftalabel");
    \u0275\u0275conditionalCreate(1, PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_1_Template, 5, 3);
    \u0275\u0275conditionalCreate(2, PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_2_Template, 30, 35);
  }
  if (rf & 2) {
    const prompt_r14 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional(ctx_r2.isPromptString(prompt_r14) ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isPromptConfig(prompt_r14) && ctx_r2.isPromptVisible(prompt_r14.enumKey) && ctx_r2.isAlertRewritePipeline(prompt_r14) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isPromptConfig(prompt_r14) && ctx_r2.isPromptVisible(prompt_r14.enumKey) && !ctx_r2.isAlertRewritePipeline(prompt_r14) ? 2 : -1);
  }
}
function PromptEditorComponent_For_23_Conditional_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, PromptEditorComponent_For_23_Conditional_2_Conditional_8_For_1_Template, 3, 3, null, null, _forTrack2);
  }
  if (rf & 2) {
    const tab_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275repeater(tab_r7.prompts);
  }
}
function PromptEditorComponent_For_23_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 24);
    \u0275\u0275conditionalCreate(4, PromptEditorComponent_For_23_Conditional_2_Conditional_4_Template, 2, 0)(5, PromptEditorComponent_For_23_Conditional_2_Conditional_5_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 25);
    \u0275\u0275conditionalCreate(7, PromptEditorComponent_For_23_Conditional_2_Conditional_7_Template, 2, 0);
    \u0275\u0275conditionalCreate(8, PromptEditorComponent_For_23_Conditional_2_Conditional_8_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 4, tab_r7.description));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.isFragmentsTab(tab_r7) ? 4 : 5);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.isFragmentsTab(tab_r7) ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.isFragmentsTab(tab_r7) ? 8 : -1);
  }
}
function PromptEditorComponent_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-tabpanel", 13)(1, "div", 14);
    \u0275\u0275conditionalCreate(2, PromptEditorComponent_For_23_Conditional_2_Template, 9, 6);
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
    const group_r28 = ctx.$implicit;
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(1, 1, group_r28.label));
  }
}
function PromptEditorComponent_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const selected_r29 = ctx.$implicit;
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(1, 1, selected_r29.translationKey));
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
    const prompt_r30 = ctx.$implicit;
    \u0275\u0275classProp("text-red", !prompt_r30.promptText.available);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 3, prompt_r30.translationKey));
  }
}
function PromptEditorComponent_Conditional_41_For_4_For_5_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r31 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, section_r31.label));
  }
}
function PromptEditorComponent_Conditional_41_For_4_For_5_Conditional_0_For_4_Conditional_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r32 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r32);
  }
}
function PromptEditorComponent_Conditional_41_For_4_For_5_Conditional_0_For_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 37);
    \u0275\u0275repeaterCreate(1, PromptEditorComponent_Conditional_41_For_4_For_5_Conditional_0_For_4_Conditional_3_For_2_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r33 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(option_r33.bulletItems);
  }
}
function PromptEditorComponent_Conditional_41_For_4_For_5_Conditional_0_For_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r33 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r33.content);
  }
}
function PromptEditorComponent_Conditional_41_For_4_For_5_Conditional_0_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "p-fieldset", 36);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275conditionalCreate(3, PromptEditorComponent_Conditional_41_For_4_For_5_Conditional_0_For_4_Conditional_3_Template, 3, 0, "ul", 37)(4, PromptEditorComponent_Conditional_41_For_4_For_5_Conditional_0_For_4_Conditional_4_Template, 2, 1, "pre", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const option_r33 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("collapsed", option_r33.collapsed)("legend", \u0275\u0275pipeBind1(2, 4, option_r33.label))("toggleable", true);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((option_r33.bulletItems == null ? null : option_r33.bulletItems.length) ? 3 : 4);
  }
}
function PromptEditorComponent_Conditional_41_For_4_For_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section");
    \u0275\u0275conditionalCreate(1, PromptEditorComponent_Conditional_41_For_4_For_5_Conditional_0_Conditional_1_Template, 3, 3, "h4");
    \u0275\u0275elementStart(2, "div", 34);
    \u0275\u0275repeaterCreate(3, PromptEditorComponent_Conditional_41_For_4_For_5_Conditional_0_For_4_Template, 5, 6, "div", 35, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const section_r31 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(!section_r31.hideLabel && section_r31.label ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(section_r31.options);
  }
}
function PromptEditorComponent_Conditional_41_For_4_For_5_Conditional_1_Conditional_2_For_2_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r34 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(line_r34);
  }
}
function PromptEditorComponent_Conditional_41_For_4_For_5_Conditional_1_Conditional_2_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 37);
    \u0275\u0275repeaterCreate(1, PromptEditorComponent_Conditional_41_For_4_For_5_Conditional_1_Conditional_2_For_2_Conditional_4_For_2_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r35 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(item_r35.bulletItems);
  }
}
function PromptEditorComponent_Conditional_41_For_4_For_5_Conditional_1_Conditional_2_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r35 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r35.instruction);
  }
}
function PromptEditorComponent_Conditional_41_For_4_For_5_Conditional_1_Conditional_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, PromptEditorComponent_Conditional_41_For_4_For_5_Conditional_1_Conditional_2_For_2_Conditional_4_Template, 3, 0, "ul", 37)(5, PromptEditorComponent_Conditional_41_For_4_For_5_Conditional_1_Conditional_2_For_2_Conditional_5_Template, 2, 1, "p");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r35 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, item_r35.condition));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((item_r35.bulletItems == null ? null : item_r35.bulletItems.length) ? 4 : 5);
  }
}
function PromptEditorComponent_Conditional_41_For_4_For_5_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275repeaterCreate(1, PromptEditorComponent_Conditional_41_For_4_For_5_Conditional_1_Conditional_2_For_2_Template, 6, 4, "div", 39, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r31 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(section_r31.conditionItems);
  }
}
function PromptEditorComponent_Conditional_41_For_4_For_5_Conditional_1_Conditional_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r36 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r36);
  }
}
function PromptEditorComponent_Conditional_41_For_4_For_5_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 37);
    \u0275\u0275repeaterCreate(1, PromptEditorComponent_Conditional_41_For_4_For_5_Conditional_1_Conditional_3_For_2_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r31 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(section_r31.bulletItems);
  }
}
function PromptEditorComponent_Conditional_41_For_4_For_5_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r31 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(section_r31.content);
  }
}
function PromptEditorComponent_Conditional_41_For_4_For_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-fieldset", 33);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275conditionalCreate(2, PromptEditorComponent_Conditional_41_For_4_For_5_Conditional_1_Conditional_2_Template, 3, 0, "div", 38)(3, PromptEditorComponent_Conditional_41_For_4_For_5_Conditional_1_Conditional_3_Template, 3, 0, "ul", 37)(4, PromptEditorComponent_Conditional_41_For_4_For_5_Conditional_1_Conditional_4_Template, 2, 1, "pre", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r31 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("collapsed", section_r31.collapsed)("legend", \u0275\u0275pipeBind1(1, 4, section_r31.label ?? ""))("toggleable", true);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((section_r31.conditionItems == null ? null : section_r31.conditionItems.length) ? 2 : (section_r31.bulletItems == null ? null : section_r31.bulletItems.length) ? 3 : 4);
  }
}
function PromptEditorComponent_Conditional_41_For_4_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PromptEditorComponent_Conditional_41_For_4_For_5_Conditional_0_Template, 5, 1, "section")(1, PromptEditorComponent_Conditional_41_For_4_For_5_Conditional_1_Template, 5, 6, "p-fieldset", 33);
  }
  if (rf & 2) {
    const section_r31 = ctx.$implicit;
    \u0275\u0275conditional((section_r31.options == null ? null : section_r31.options.length) ? 0 : 1);
  }
}
function PromptEditorComponent_Conditional_41_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 32)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, PromptEditorComponent_Conditional_41_For_4_For_5_Template, 2, 1, null, null, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r37 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, group_r37.label));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(group_r37.sections);
  }
}
function PromptEditorComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, PromptEditorComponent_Conditional_41_For_4_Template, 6, 3, "section", 32, _forTrack1);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "dev.prompts.alertRewrite.testUnavailable"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.alertRewritePipelineGroups);
  }
}
function PromptEditorComponent_Conditional_42_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-fieldset", 33)(1, "pre", 20);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "json");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const example_r38 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("collapsed", true)("legend", ctx_r2.getAlertRewriteExampleLegend(example_r38))("toggleable", true);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, example_r38));
  }
}
function PromptEditorComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275repeaterCreate(1, PromptEditorComponent_Conditional_42_For_2_Template, 4, 6, "p-fieldset", 33, _forTrack3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.alertRewriteExamples);
  }
}
function PromptEditorComponent_Conditional_43_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-fieldset", 33);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "pre", 20);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const section_r39 = ctx.$implicit;
    \u0275\u0275property("collapsed", section_r39.collapsed)("legend", \u0275\u0275pipeBind1(1, 4, section_r39.label ?? ""))("toggleable", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(section_r39.content);
  }
}
function PromptEditorComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, PromptEditorComponent_Conditional_43_For_1_Template, 4, 6, "p-fieldset", 33, _forTrack1);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.alertProblemsSections);
  }
}
function PromptEditorComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.aiPrompt());
  }
}
function PromptEditorComponent_Conditional_45_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-progressspinner");
  }
}
function PromptEditorComponent_Conditional_45_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-message", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.aiState().error);
  }
}
function PromptEditorComponent_Conditional_45_Conditional_18_Template(rf, ctx) {
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
function PromptEditorComponent_Conditional_45_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.result, " ");
  }
}
function PromptEditorComponent_Conditional_45_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre", 20);
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
function PromptEditorComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "h3", 17);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p-iftalabel")(5, "textarea", 46);
    \u0275\u0275twoWayListener("ngModelChange", function PromptEditorComponent_Conditional_45_Template_textarea_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r40);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.description, $event) || (ctx_r2.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "label", 47);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 48)(10, "p-button", 49);
    \u0275\u0275listener("onClick", function PromptEditorComponent_Conditional_45_Template_p_button_onClick_10_listener() {
      \u0275\u0275restoreView(_r40);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.testResult());
    });
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p-button", 49);
    \u0275\u0275listener("onClick", function PromptEditorComponent_Conditional_45_Template_p_button_onClick_13_listener() {
      \u0275\u0275restoreView(_r40);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.testResponse());
    });
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(16, PromptEditorComponent_Conditional_45_Conditional_16_Template, 1, 0, "p-progressspinner");
    \u0275\u0275conditionalCreate(17, PromptEditorComponent_Conditional_45_Conditional_17_Template, 2, 1, "p-message", 50);
    \u0275\u0275conditionalCreate(18, PromptEditorComponent_Conditional_45_Conditional_18_Template, 2, 1, "small");
    \u0275\u0275conditionalCreate(19, PromptEditorComponent_Conditional_45_Conditional_19_Template, 1, 1);
    \u0275\u0275conditionalCreate(20, PromptEditorComponent_Conditional_45_Conditional_20_Template, 3, 3, "pre", 20);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 12, "dev.prompts.preview.testContent"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 14, "dev.prompts.preview.testContentLabel"));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r2.getSelectedPromptConfig());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 16, "dev.prompts.preview.getResult"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r2.getSelectedPromptConfig());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 18, "dev.prompts.preview.getResponse"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.aiState().loading ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.aiState().error ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.aiState().respondingModel ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.result ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.response ? 20 : -1);
  }
}
function PromptEditorComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = \u0275\u0275getCurrentView();
    \u0275\u0275declareLet(0);
    \u0275\u0275element(1, "div", null, 3);
    \u0275\u0275elementStart(3, "p-fieldset", 51);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "pre", null, 4)(7, "code", 52);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "p-button", 53);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("onClick", function PromptEditorComponent_Conditional_51_Template_p_button_onClick_9_listener() {
      \u0275\u0275restoreView(_r41);
      const prompts_r42 = \u0275\u0275readContextLet(0);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openPullRequest(ctx_r2.tabs[ctx_r2.selectedPromptTab()].tool, prompts_r42));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    const prompts_r43 = \u0275\u0275storeLet(ctx_r2.tabs[ctx_r2.selectedPromptTab()].prompts);
    \u0275\u0275advance(3);
    \u0275\u0275property("collapsed", true)("legend", \u0275\u0275pipeBind1(4, 7, "dev.prompts.pr.filePreview"))("toggleable", true);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(prompts_r43 ? ctx_r2.rebuildPromptFile(ctx_r2.tabs[ctx_r2.selectedPromptTab()].tool, prompts_r43) : ctx_r2.rebuildSharedFile());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r2.signInService.user())("label", \u0275\u0275pipeBind1(10, 9, "dev.prompts.button.openPR"));
  }
}
function PromptEditorComponent_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-message", 21);
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
  settingsService = inject(UserSettingsService);
  openRouterService = inject(OpenRouterService);
  aiPromptService = inject(AiPromptService);
  signInService = inject(SignInService);
  styleCardService = inject(StyleCardService);
  constructor() {
    effect(() => {
      void this.settingsService.darkMode();
      this.updateDiff();
    });
    effect(() => {
      const tab = this.selectedTab();
      if (tab < 5) {
        this.selectedPromptTab.set(tab);
      }
      this.updateDiff();
    });
  }
  // Type guard
  isPromptConfig(entry) {
    return typeof entry.promptText === "object" && entry.promptText !== null;
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
  problemPrompts = Object.keys(ProblemPromptKey).map((enumKey) => ({
    enumKey,
    translationKey: ProblemPromptKey[enumKey],
    promptText: ProblemPrompts[ProblemPromptKey[enumKey]]
  }));
  alertRewritePipelineGroups = this.buildAlertRewritePipelineGroups();
  alertProblemsSections = this.buildAlertProblemsSections();
  alertRewriteExamples = AlertRewriteExamples;
  selectedPrompts = new Set([this.inventoryPrompts[0]?.enumKey, this.pagePrompts[0]?.enumKey, this.problemPrompts[0]?.enumKey].filter(Boolean));
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
    }
  ];
  // Dropdown
  promptGroups = [
    {
      label: "aiPrompt.alerts._title",
      items: [
        ...this.problemPrompts.filter((prompt) => prompt.enumKey === "AlertsProblems" || prompt.enumKey === "TranslateIssueDetails"),
        ...this.pagePrompts.filter((prompt) => prompt.enumKey === "AlertRewrite"),
        {
          enumKey: "AlertExamples",
          translationKey: "aiPrompt.page.alertExamples",
          promptText: ""
        }
      ]
    },
    { label: "aiPrompt.tools._title", items: this.inventoryPrompts },
    { label: "aiPrompt.page._title", items: this.pagePrompts.filter((prompt) => prompt.enumKey !== "AlertRewrite") },
    {
      label: "aiPrompt.problems._title",
      items: this.problemPrompts.filter((prompt) => prompt.enumKey !== "AlertsProblems" && prompt.enumKey !== "TranslateIssueDetails")
    }
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
  aiPrompt = computed(() => {
    const selected = this.selectedPrompt();
    if (!selected || !this.isPromptConfig(selected))
      return "";
    return this.aiPromptService.composePrompt(selected.promptText);
  }, ...ngDevMode ? [{ debugName: "aiPrompt" }] : (
    /* istanbul ignore next */
    []
  ));
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
                condition: "dev.prompts.alertRewrite.retry.invalidWrapperHtml",
                instruction: rules.retryInstructions.invalidWrapperHtml
              },
              {
                condition: "dev.prompts.alertRewrite.retry.noLinksAllowed",
                instruction: rules.retryInstructions.noLinksAllowed
              },
              {
                condition: "dev.prompts.alertRewrite.retry.mustKeepLink",
                instruction: rules.retryInstructions.mustKeepLink
              },
              {
                condition: "dev.prompts.alertRewrite.retry.mustKeepAllLinks",
                instruction: rules.retryInstructions.mustKeepAllLinks
              },
              {
                condition: "dev.prompts.alertRewrite.retry.mustHaveHeading",
                instruction: rules.retryInstructions.mustHaveHeading
              },
              {
                condition: "dev.prompts.alertRewrite.retry.avoidExampleCopy",
                instruction: rules.retryInstructions.avoidExampleCopy
              },
              {
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
            bulletItems: LinkWritingPromptRuleGroups.common.map((rule) => rule.text),
            collapsed: false
          },
          {
            key: "linkRules",
            hideLabel: true,
            options: [
              {
                key: "linkRulesDefault",
                label: "dev.prompts.alertRewrite.linkRulesDefault",
                bulletItems: LinkWritingPromptRuleGroups.preserveLinks.map((rule) => rule.text),
                collapsed: false
              },
              {
                key: "linkRulesTooMany",
                label: "dev.prompts.alertRewrite.linkRulesTooMany",
                bulletItems: LinkWritingPromptRuleGroups.tooManyLinks.map((rule) => rule.text),
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
    const rules = CanadaCaStyleRules.map((rule) => `{
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
  }
  // Test prompts
  aiState = this.openRouterService.state;
  description = "Official CRA information on Canadian taxes. File your return, manage payments, and explore credits and deductions for individuals and businesses.";
  response = null;
  result = "";
  testResponse() {
    return __async(this, null, function* () {
      const config = this.getSelectedPromptConfig();
      if (!config)
        return;
      this.response = yield this.openRouterService.sendToAI(config, this.description);
    });
  }
  testResult() {
    return __async(this, null, function* () {
      const config = this.getSelectedPromptConfig();
      if (!config)
        return;
      this.result = yield this.openRouterService.getTextFromAI(config, this.description);
    });
  }
  // Rebuild prompt file
  rebuildPromptFile(tool, prompts) {
    const updatedPrompts = prompts.map((prompt) => {
      let value;
      if (this.isPromptConfig(prompt)) {
        value = this.serializePromptConfig(prompt.promptText, prompt.enumKey);
      } else if (this.isPromptString(prompt)) {
        value = this.toTemplateLiteral(prompt.promptText);
      } else {
        throw new Error(`Unsupported prompt value for ${prompt.enumKey}`);
      }
      return `	[${tool}PromptKey.${prompt.enumKey}]: ${value},`;
    }).join("\n");
    const isPagePrompts = tool === "Page";
    const configType = isPagePrompts ? "PagePromptConfigs" : `Record<${tool}PromptKey, PromptConfig>`;
    const configImport = isPagePrompts ? "PagePromptConfigs" : "PromptConfig";
    const imports = ["OutputKey", `${tool}PromptKey`, configImport, "RoleKey", "RubricKey"].sort();
    const pipelineImport = isPagePrompts ? `import { AlertRewritePipeline } from './alert-rewrite.prompt';
` : "";
    return `${pipelineImport}import { ${imports.join(", ")} } from './prompt.model';

export const ${tool}Prompts: ${configType} = {
${updatedPrompts}
};
`;
  }
  getSelectedPromptConfig() {
    const selected = this.selectedPrompt();
    return selected && this.isPromptConfig(selected) ? selected.promptText : null;
  }
  serializePromptConfig(config, enumKey) {
    const lines = [
      "{",
      `		role: RoleKey.${this.getEnumKey(RoleKey, config.role)},`,
      `		task: ${this.toTemplateLiteral(config.task)},`,
      `		rubric: [${config.rubric.map((rubric) => `RubricKey.${this.getEnumKey(RubricKey, rubric)}`).join(", ")}],`,
      `		output: OutputKey.${this.getEnumKey(OutputKey, config.output)},`
    ];
    if (config.jsonSchema !== void 0)
      lines.push(`		jsonSchema: ${this.toTemplateLiteral(config.jsonSchema)},`);
    if (config.examples !== void 0)
      lines.push(`		examples: ${this.toTemplateLiteral(config.examples)},`);
    if (config.available !== void 0)
      lines.push(`		available: ${config.available},`);
    if (config.pipeline !== void 0) {
      if (enumKey === "AlertRewrite") {
        lines.push("		pipeline: AlertRewritePipeline,");
      } else {
        const pipeline = JSON.stringify(config.pipeline, null, 2).split("\n").map((line, index) => index === 0 ? line : `		${line}`).join("\n");
        lines.push(`		pipeline: ${pipeline},`);
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
  toTemplateLiteral(value) {
    return `\`${value.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${")}\``;
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
  /** Tracks if changes have been made to current tab */
  hasChanges(promptTab) {
    const tabNumber = promptTab ?? this.selectedPromptTab();
    const tab = this.tabs[tabNumber];
    if (tabNumber === 0) {
      const updatedContent2 = this.rebuildSharedFile();
      const originalContent2 = tab.original;
      return updatedContent2 !== originalContent2;
    }
    if (!tab?.prompts)
      return false;
    const updatedContent = this.rebuildPromptFile(tab.tool, tab.prompts);
    const originalContent = tab.original;
    return updatedContent !== originalContent;
  }
  // Open pull request
  pullRequestUrl = null;
  /** Open pull request for selected tab */
  openPullRequest(tool, prompts) {
    return __async(this, null, function* () {
      const content = !prompts ? this.rebuildSharedFile() : this.rebuildPromptFile(tool, prompts);
      const toolLC = tool.toLowerCase();
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
      const updatedContent = this.selectedPromptTab() === 0 ? this.rebuildSharedFile() : tab.prompts ? this.rebuildPromptFile(tab.tool, tab.prompts) : "";
      const originalContent = tab.original;
      const patch = createPatch(`${tab.tool.toLowerCase()}.prompts.ts`, originalContent, updatedContent);
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
      const prompts = this.tabs[this.selectedPromptTab()].prompts;
      if (!prompts)
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
          codeBlock.textContent = this.rebuildPromptFile(this.tabs[this.selectedPromptTab()].tool, prompts);
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
  }, decls: 53, vars: 41, consts: [["group", ""], ["selectedItem", ""], ["item", ""], ["diffContainer", ""], ["filePreview", ""], ["id", "wb-cont"], [1, "w-limited", 3, "valueChange", "value"], [1, "surface-ground"], [1, "surface-card", "border-1", "border-bottom-none", "surface-border", "hover:bg-primary-light", 3, "value"], [1, "ml-auto", "surface-card", "border-1", "border-bottom-none", "surface-border", "hover:bg-primary-light", 3, "value"], [1, "flex", "align-content-center", "gap-2"], [1, "material-icons-outlined", "text-primary"], [1, "p-0", "m-0"], [3, "value"], [1, "w-limited"], [1, "flex", "flex-column", "gap-2"], [1, "my-0"], [1, "my-1"], ["inputId", "promptSelect", "optionGroupChildren", "items", "optionGroupLabel", "label", "optionLabel", "translationKey", 1, "w-20rem", 3, "ngModelChange", "group", "ngModel", "options"], [1, "flex", "flex-column", "gap-3", "mt-3"], [1, "prompt-preview"], ["icon", "pi pi-info-circle", "severity", "info"], [1, "surface-card", "border-1", "border-bottom-none", "surface-border", "hover:bg-primary-light", 3, "click", "value"], [1, "mt-0"], [1, "flex", "flex-row", "flex-wrap", "gap-4", "mt-0", "mb-4"], [1, "flex", "flex-column", "gap-3", "mt-0"], [1, "flex", "flex-row", "align-items-center", "gap-2"], [3, "ngModelChange", "binary", "inputId", "ngModel"], [1, "cursor-pointer", "font-semibold", 3, "for"], [1, "flex", "flex-row", "align-content-center", "gap-2"], ["fluid", "", "pTextarea", "", "rows", "2", 3, "ngModelChange", "ngModel", "autoResize", "id"], [3, "for"], [1, "prompt-pipeline-group"], [3, "collapsed", "legend", "toggleable"], [1, "grid"], [1, "col-12", "lg:col-6"], ["styleClass", "h-full", 3, "collapsed", "legend", "toggleable"], [1, "prompt-bullet-list"], [1, "prompt-condition-list"], [1, "prompt-condition-item"], [1, "flex", "flex-column", "lg:flex-row", "gap-2"], [1, "flex-1"], ["appendTo", "body", "fluid", "", "optionLabel", "label", "optionValue", "value", 1, "h-full", 3, "ngModelChange", "onChange", "ngModel", "id", "options"], ["pTemplate", "item"], ["pTemplate", "selectedItem"], ["appendTo", "body", "fluid", "", "optionLabel", "label", "optionValue", "value", 1, "h-full", 3, "ngModelChange", "onChange", "ngModel", "id", "options", "placeholder"], ["id", "content", "autoResize", "true", "fluid", "", "pTextarea", "", "rows", "3", "variant", "outlined", 1, "secondary-outline", "min-h-6rem", 3, "ngModelChange", "ngModel"], ["for", "content"], [1, "flex", "gap-2"], [3, "onClick", "disabled"], ["severity", "error"], ["styleClass", "secondary-outline mb-3", 3, "collapsed", "legend", "toggleable"], [1, "language-typescript"], ["icon", "pi pi-send", 3, "onClick", "disabled", "label"]], template: function PromptEditorComponent_Template(rf, ctx) {
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
      \u0275\u0275conditionalCreate(41, PromptEditorComponent_Conditional_41_Template, 5, 3)(42, PromptEditorComponent_Conditional_42_Template, 3, 0, "div", 19)(43, PromptEditorComponent_Conditional_43_Template, 2, 0)(44, PromptEditorComponent_Conditional_44_Template, 2, 1, "pre", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(45, PromptEditorComponent_Conditional_45_Template, 21, 20);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(46, "p-tabpanel", 13)(47, "div", 14)(48, "h2", 17);
      \u0275\u0275text(49);
      \u0275\u0275pipe(50, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(51, PromptEditorComponent_Conditional_51_Template, 11, 11)(52, PromptEditorComponent_Conditional_52_Template, 3, 3, "p-message", 21);
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
      \u0275\u0275conditional(ctx.selectedPromptIsAlertRewritePipeline() ? 41 : ctx.selectedPromptIsAlertRewriteExamples() ? 42 : ctx.selectedPromptIsAlertProblems() ? 43 : 44);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(!ctx.selectedPromptIsAlertRewritePipeline() && !ctx.selectedPromptIsAlertRewriteExamples() ? 45 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("value", 11);
      \u0275\u0275advance();
      \u0275\u0275classMap(ctx.styleCardService.cardStyles(void 0, void 0, void 0, void 0, void 0, "border-top-none border-noround-top"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(50, 39, "dev.prompts.pr.header"));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.hasChanges() ? 51 : 52);
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
  ], styles: ["\npre.prompt-preview[_ngcontent-%COMP%] {\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  min-width: 0;\n  max-width: 100%;\n  font-size: 1rem;\n  white-space: pre-wrap !important;\n  overflow-wrap: anywhere;\n  word-break: break-word;\n  overflow-x: hidden;\n}\n.prompt-bullet-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.4rem;\n  margin: 0;\n  padding-inline-start: 1.5rem;\n}\n.prompt-condition-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.75rem;\n}\n.prompt-condition-item[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.25rem;\n}\n.prompt-condition-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=prompt-editor.component-OAC5CYIB.css.map */"], changeDetection: 0 });
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
              <!--Full prompts-->
              @if (!isFragmentsTab(tab)) {
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
                    <h2 class="my-0">{{ prompt.translationKey | translate }}</h2>
                    @for (group of alertRewritePipelineGroups; track group.key) {
                      <section class="prompt-pipeline-group">
                        <h3>{{ group.label | translate }}</h3>
                        @for (section of group.sections; track section.key) {
                          @if (section.options?.length) {
                            <section>
                              @if (!section.hideLabel && section.label) {
                                <h4>{{ section.label | translate }}</h4>
                              }
                              <div class="grid">
                                @for (option of section.options; track option.key) {
                                  <div class="col-12 lg:col-6">
                                    <p-fieldset [collapsed]="option.collapsed" [legend]="option.label | translate" [toggleable]="true" styleClass="h-full">
                                      @if (option.bulletItems?.length) {
                                        <ul class="prompt-bullet-list">
                                          @for (item of option.bulletItems; track $index) {
                                            <li>{{ item }}</li>
                                          }
                                        </ul>
                                      } @else {
                                        <pre class="prompt-preview">{{ option.content }}</pre>
                                      }
                                    </p-fieldset>
                                  </div>
                                }
                              </div>
                            </section>
                          } @else {
                            <p-fieldset [collapsed]="section.collapsed" [legend]="section.label ?? '' | translate" [toggleable]="true">
                              @if (section.conditionItems?.length) {
                                <div class="prompt-condition-list">
                                  @for (item of section.conditionItems; track $index) {
                                    <div class="prompt-condition-item">
                                      <strong>{{ item.condition | translate }}</strong>
                                      @if (item.bulletItems?.length) {
                                        <ul class="prompt-bullet-list">
                                          @for (line of item.bulletItems; track $index) {
                                            <li>{{ line }}</li>
                                          }
                                        </ul>
                                      } @else {
                                        <p>{{ item.instruction }}</p>
                                      }
                                    </div>
                                  }
                                </div>
                              } @else if (section.bulletItems?.length) {
                                <ul class="prompt-bullet-list">
                                  @for (item of section.bulletItems; track $index) {
                                    <li>{{ item }}</li>
                                  }
                                </ul>
                              } @else {
                                <pre class="prompt-preview">{{ section.content }}</pre>
                              }
                            </p-fieldset>
                          }
                        }
                      </section>
                    }
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
                      <textarea [(ngModel)]="prompt.promptText.task" [autoResize]="true" [id]="prompt.enumKey + '_task'" (ngModelChange)="updateDiff()" fluid pTextarea rows="2"></textarea>
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
                <section class="prompt-pipeline-group">
                  <h3>{{ group.label | translate }}</h3>
                  @for (section of group.sections; track section.key) {
                    @if (section.options?.length) {
                      <section>
                        @if (!section.hideLabel && section.label) {
                          <h4>{{ section.label | translate }}</h4>
                        }
                        <div class="grid">
                          @for (option of section.options; track option.key) {
                            <div class="col-12 lg:col-6">
                              <p-fieldset [collapsed]="option.collapsed" [legend]="option.label | translate" [toggleable]="true" styleClass="h-full">
                                @if (option.bulletItems?.length) {
                                  <ul class="prompt-bullet-list">
                                    @for (item of option.bulletItems; track $index) {
                                      <li>{{ item }}</li>
                                    }
                                  </ul>
                                } @else {
                                  <pre class="prompt-preview">{{ option.content }}</pre>
                                }
                              </p-fieldset>
                            </div>
                          }
                        </div>
                      </section>
                    } @else {
                      <p-fieldset [collapsed]="section.collapsed" [legend]="section.label ?? '' | translate" [toggleable]="true">
                        @if (section.conditionItems?.length) {
                          <div class="prompt-condition-list">
                            @for (item of section.conditionItems; track $index) {
                              <div class="prompt-condition-item">
                                <strong>{{ item.condition | translate }}</strong>
                                @if (item.bulletItems?.length) {
                                  <ul class="prompt-bullet-list">
                                    @for (line of item.bulletItems; track $index) {
                                      <li>{{ line }}</li>
                                    }
                                  </ul>
                                } @else {
                                  <p>{{ item.instruction }}</p>
                                }
                              </div>
                            }
                          </div>
                        } @else if (section.bulletItems?.length) {
                          <ul class="prompt-bullet-list">
                            @for (item of section.bulletItems; track $index) {
                              <li>{{ item }}</li>
                            }
                          </ul>
                        } @else {
                          <pre class="prompt-preview">{{ section.content }}</pre>
                        }
                      </p-fieldset>
                    }
                  }
                </section>
              }
            } @else if (selectedPromptIsAlertRewriteExamples()) {
              <div class="flex flex-column gap-3 mt-3">
                @for (example of alertRewriteExamples; track example.id) {
                  <p-fieldset [collapsed]="true" [legend]="getAlertRewriteExampleLegend(example)" [toggleable]="true">
                    <pre class="prompt-preview">{{ example | json }}</pre>
                  </p-fieldset>
                }
              </div>
            } @else if (selectedPromptIsAlertProblems()) {
              @for (section of alertProblemsSections; track section.key) {
                <p-fieldset [collapsed]="section.collapsed" [legend]="section.label ?? '' | translate" [toggleable]="true">
                  <pre class="prompt-preview">{{ section.content }}</pre>
                </p-fieldset>
              }
            } @else {
              <pre class="prompt-preview">{{ aiPrompt() }}</pre>
            }
          </div>
          @if (!selectedPromptIsAlertRewritePipeline() && !selectedPromptIsAlertRewriteExamples()) {
            <div>
              <h3 class="my-1">{{ 'dev.prompts.preview.testContent' | translate }}</h3>
              <p-iftalabel>
                <textarea id="content" [(ngModel)]="description" class="secondary-outline min-h-6rem" autoResize="true" fluid pTextarea rows="3" variant="outlined"></textarea>
                <label for="content">{{ 'dev.prompts.preview.testContentLabel' | translate }}</label>
              </p-iftalabel>
            </div>
            <div class="flex gap-2">
              <p-button [disabled]="!getSelectedPromptConfig()" (onClick)="testResult()">{{ 'dev.prompts.preview.getResult' | translate }}</p-button>
              <p-button [disabled]="!getSelectedPromptConfig()" (onClick)="testResponse()">{{ 'dev.prompts.preview.getResponse' | translate }}</p-button>
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
              {{ result }}
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
          @let prompts = tabs[selectedPromptTab()].prompts;
          <!--Review-->
          <div #diffContainer></div>
          <!--Export-->
          <p-fieldset [collapsed]="true" [legend]="'dev.prompts.pr.filePreview' | translate" [toggleable]="true" styleClass="secondary-outline mb-3">
            <pre #filePreview><code class="language-typescript">{{ prompts ? rebuildPromptFile(tabs[selectedPromptTab()].tool, prompts) : rebuildSharedFile() }}</code></pre>
          </p-fieldset>
          <!--Open PR-->
          <p-button [disabled]="!signInService.user()" [label]="'dev.prompts.button.openPR' | translate" (onClick)="openPullRequest(tabs[selectedPromptTab()].tool, prompts)" icon="pi pi-send" />
        } @else {
          <p-message icon="pi pi-info-circle" severity="info">{{ 'dev.prompts.pr.noChangesMessage' | translate }}</p-message>
        }
      </div>
    </p-tabpanel>
  </p-tabpanels>
</p-tabs>
`, styles: ["/* angular:styles/component:css;e5ed3f3479eecfaf4f6560dfa0b09a0617508e956bc29aefe063475e5bd20407;C:/my-working-files/GitHub/design-assistant-aws/src/app/views/toolbox/dev-tools/prompt-editor/prompt-editor.component.ts */\npre.prompt-preview {\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  min-width: 0;\n  max-width: 100%;\n  font-size: 1rem;\n  white-space: pre-wrap !important;\n  overflow-wrap: anywhere;\n  word-break: break-word;\n  overflow-x: hidden;\n}\n.prompt-bullet-list {\n  display: grid;\n  gap: 0.4rem;\n  margin: 0;\n  padding-inline-start: 1.5rem;\n}\n.prompt-condition-list {\n  display: grid;\n  gap: 0.75rem;\n}\n.prompt-condition-item {\n  display: grid;\n  gap: 0.25rem;\n}\n.prompt-condition-item p {\n  margin: 0;\n}\n/*# sourceMappingURL=prompt-editor.component-OAC5CYIB.css.map */\n"] }]
  }], () => [], { diffContainer: [{ type: ViewChild, args: ["diffContainer", { isSignal: true }] }], filePreview: [{ type: ViewChild, args: ["filePreview", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PromptEditorComponent, { className: "PromptEditorComponent", filePath: "src/app/views/toolbox/dev-tools/prompt-editor/prompt-editor.component.ts", lineNumber: 143 });
})();
export {
  PromptEditorComponent
};
//# sourceMappingURL=chunk-GZON2TFN.js.map
