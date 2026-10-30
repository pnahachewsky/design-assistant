import {
  require_types
} from "./chunk-YIFK26D6.js";
import {
  PagePrompts,
  ProblemPrompts
} from "./chunk-HQVXQJ24.js";
import {
  InventoryPrompts
} from "./chunk-UOUG4HGI.js";
import {
  AiPromptService,
  InventoryPromptKey,
  OpenRouterService,
  OutputFragment,
  OutputKey,
  PagePromptKey,
  ProblemPromptKey,
  RoleFragment,
  RoleKey,
  RubricFragment,
  RubricKey
} from "./chunk-APIICZKQ.js";
import "./chunk-MTIX3M4U.js";
import {
  ProgressSpinner,
  ProgressSpinnerModule
} from "./chunk-22EMPEFJ.js";
import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  TabsModule
} from "./chunk-4ECWLYHO.js";
import {
  MultiSelect,
  MultiSelectModule
} from "./chunk-46XQ7NCU.js";
import "./chunk-ULNRCSK5.js";
import {
  Message,
  MessageModule
} from "./chunk-GGIC4QUJ.js";
import {
  RadioButton,
  RadioButtonModule
} from "./chunk-NQRO2LC7.js";
import "./chunk-OFBI5QRC.js";
import {
  Fieldset,
  FieldsetModule
} from "./chunk-FLJXSAP4.js";
import {
  Textarea,
  TextareaModule
} from "./chunk-Y576ZK6L.js";
import {
  IftaLabel,
  IftaLabelModule
} from "./chunk-FQDO2XGS.js";
import "./chunk-MKX7R2UM.js";
import {
  Checkbox,
  CheckboxModule,
  ExportGitHubService
} from "./chunk-RB7Q4TO5.js";
import "./chunk-G6GBOHXB.js";
import "./chunk-NJENQTX6.js";
import "./chunk-Y3MLV2IT.js";
import "./chunk-BHVFX6OF.js";
import {
  Select,
  SelectModule
} from "./chunk-JR3PODJQ.js";
import {
  Button,
  ButtonModule,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  marker
} from "./chunk-QN4TTD5X.js";
import {
  CommonModule,
  JsonPipe,
  PrimeTemplate,
  UserSettingsService
} from "./chunk-7YP54JN5.js";
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
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
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
} from "./chunk-KRHY6Z2H.js";
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
function PromptEditorComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-tab", 11);
    \u0275\u0275listener("click", function PromptEditorComponent_For_10_Template_p_tab_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateDiff());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r4 = ctx.$implicit;
    \u0275\u0275property("value", tab_r4.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, tab_r4.title));
  }
}
function PromptEditorComponent_For_13_Conditional_1_Conditional_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "p-radiobutton", 15);
    \u0275\u0275listener("ngModelChange", function PromptEditorComponent_For_13_Conditional_1_Conditional_1_For_1_Template_p_radiobutton_ngModelChange_1_listener() {
      const fragment_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.toggleFragment(fragment_r6.key));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 16);
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
function PromptEditorComponent_For_13_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, PromptEditorComponent_For_13_Conditional_1_Conditional_1_For_1_Template, 5, 7, "div", 14, _forTrack1);
  }
  if (rf & 2) {
    const tab_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275repeater(tab_r7.fragments);
  }
}
function PromptEditorComponent_For_13_Conditional_1_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "p-checkbox", 15);
    \u0275\u0275listener("ngModelChange", function PromptEditorComponent_For_13_Conditional_1_Conditional_2_For_1_Template_p_checkbox_ngModelChange_1_listener() {
      const prompt_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.togglePrompt(prompt_r9.enumKey));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 16);
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
    \u0275\u0275property("for", "show_" + prompt_r9.enumKey);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, prompt_r9.translationKey));
  }
}
function PromptEditorComponent_For_13_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, PromptEditorComponent_For_13_Conditional_1_Conditional_2_For_1_Template, 5, 7, "div", 17, _forTrack2);
  }
  if (rf & 2) {
    const tab_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275repeater(tab_r7.prompts);
  }
}
function PromptEditorComponent_For_13_Conditional_1_Conditional_4_For_1_Conditional_0_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-iftalabel")(1, "textarea", 19);
    \u0275\u0275twoWayListener("ngModelChange", function PromptEditorComponent_For_13_Conditional_1_Conditional_4_For_1_Conditional_0_For_4_Template_textarea_ngModelChange_1_listener($event) {
      const item_r11 = \u0275\u0275restoreView(_r10).$implicit;
      \u0275\u0275twoWayBindingSet(item_r11.promptText, $event) || (item_r11.promptText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function PromptEditorComponent_For_13_Conditional_1_Conditional_4_For_1_Conditional_0_For_4_Template_textarea_ngModelChange_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.updateDiff());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 20);
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
function PromptEditorComponent_For_13_Conditional_1_Conditional_4_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, PromptEditorComponent_For_13_Conditional_1_Conditional_4_For_1_Conditional_0_For_4_Template, 5, 7, "p-iftalabel", null, _forTrack2);
  }
  if (rf & 2) {
    const fragment_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, fragment_r12.label));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(fragment_r12.data);
  }
}
function PromptEditorComponent_For_13_Conditional_1_Conditional_4_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PromptEditorComponent_For_13_Conditional_1_Conditional_4_For_1_Conditional_0_Template, 5, 3);
  }
  if (rf & 2) {
    const fragment_r12 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional(ctx_r2.isFragmentVisible(fragment_r12.key) ? 0 : -1);
  }
}
function PromptEditorComponent_For_13_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, PromptEditorComponent_For_13_Conditional_1_Conditional_4_For_1_Template, 1, 1, null, null, _forTrack1);
  }
  if (rf & 2) {
    const tab_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275repeater(tab_r7.fragments);
  }
}
function PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-iftalabel")(1, "textarea", 19);
    \u0275\u0275twoWayListener("ngModelChange", function PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_0_Template_textarea_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r13);
      const prompt_r14 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(prompt_r14.promptText, $event) || (prompt_r14.promptText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_0_Template_textarea_ngModelChange_1_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.updateDiff());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 20);
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
function PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const option_r16 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, option_r16.label), " ");
  }
}
function PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const option_r17 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, option_r17.label), " ");
  }
}
function PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const option_r18 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, option_r18.label), " ");
  }
}
function PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const option_r19 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, option_r19.label), " ");
  }
}
function PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-iftalabel")(1, "textarea", 19);
    \u0275\u0275twoWayListener("ngModelChange", function PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_Conditional_29_Template_textarea_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r20);
      const prompt_r14 = \u0275\u0275nextContext(2).$implicit;
      \u0275\u0275twoWayBindingSet(prompt_r14.promptText.jsonSchema, $event) || (prompt_r14.promptText.jsonSchema = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_Conditional_29_Template_textarea_ngModelChange_1_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.updateDiff());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 20);
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
function PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 21)(4, "p-iftalabel", 22)(5, "p-select", 23);
    \u0275\u0275twoWayListener("ngModelChange", function PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_Template_p_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r15);
      const prompt_r14 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(prompt_r14.promptText.role, $event) || (prompt_r14.promptText.role = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onChange", function PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_Template_p_select_onChange_5_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.updateDiff());
    });
    \u0275\u0275template(6, PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_ng_template_6_Template, 2, 3, "ng-template", 24)(7, PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_ng_template_7_Template, 2, 3, "ng-template", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "label", 20);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "p-iftalabel", 22)(12, "p-select", 26);
    \u0275\u0275twoWayListener("ngModelChange", function PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_Template_p_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r15);
      const prompt_r14 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(prompt_r14.promptText.output, $event) || (prompt_r14.promptText.output = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onChange", function PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_Template_p_select_onChange_12_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.updateDiff());
    });
    \u0275\u0275template(13, PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_ng_template_13_Template, 2, 3, "ng-template", 24)(14, PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_ng_template_14_Template, 2, 3, "ng-template", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "label", 20);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "p-iftalabel", 22)(19, "p-multiselect", 27);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_Template_p_multiselect_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r15);
      const prompt_r14 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(prompt_r14.promptText.rubric, $event) || (prompt_r14.promptText.rubric = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onChange", function PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_Template_p_multiselect_onChange_19_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.updateDiff());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "label", 20);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "p-iftalabel")(25, "textarea", 19);
    \u0275\u0275twoWayListener("ngModelChange", function PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_Template_textarea_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r15);
      const prompt_r14 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(prompt_r14.promptText.task, $event) || (prompt_r14.promptText.task = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_Template_textarea_ngModelChange_25_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.updateDiff());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "label", 20);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(29, PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_Conditional_29_Template, 5, 7, "p-iftalabel");
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
function PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_0_Template, 5, 7, "p-iftalabel");
    \u0275\u0275conditionalCreate(1, PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_Template, 30, 35);
  }
  if (rf & 2) {
    const prompt_r14 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional(ctx_r2.isPromptString(prompt_r14) ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isPromptConfig(prompt_r14) && ctx_r2.isPromptVisible(prompt_r14.enumKey) ? 1 : -1);
  }
}
function PromptEditorComponent_For_13_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Template, 2, 2, null, null, _forTrack2);
  }
  if (rf & 2) {
    const tab_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275repeater(tab_r7.prompts);
  }
}
function PromptEditorComponent_For_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275conditionalCreate(1, PromptEditorComponent_For_13_Conditional_1_Conditional_1_Template, 2, 0)(2, PromptEditorComponent_For_13_Conditional_1_Conditional_2_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13);
    \u0275\u0275conditionalCreate(4, PromptEditorComponent_For_13_Conditional_1_Conditional_4_Template, 2, 0);
    \u0275\u0275conditionalCreate(5, PromptEditorComponent_For_13_Conditional_1_Conditional_5_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isFragmentsTab(tab_r7) ? 1 : 2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.isFragmentsTab(tab_r7) ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.isFragmentsTab(tab_r7) ? 5 : -1);
  }
}
function PromptEditorComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-tabpanel", 6);
    \u0275\u0275conditionalCreate(1, PromptEditorComponent_For_13_Conditional_1_Template, 6, 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("value", tab_r7.value);
    \u0275\u0275advance();
    \u0275\u0275conditional(tab_r7.value === ctx_r2.selectedTab ? 1 : -1);
  }
}
function PromptEditorComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const group_r21 = ctx.$implicit;
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(1, 1, group_r21.label));
  }
}
function PromptEditorComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const selected_r22 = ctx.$implicit;
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(1, 1, selected_r22.translationKey));
  }
}
function PromptEditorComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const prompt_r23 = ctx.$implicit;
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(1, 1, prompt_r23.translationKey));
  }
}
function PromptEditorComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-progressspinner");
  }
}
function PromptEditorComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-message", 10);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("text", ctx_r2.aiState().error);
  }
}
function PromptEditorComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Answered by: ", ctx_r2.aiState().respondingModel);
  }
}
function PromptEditorComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 28);
    \u0275\u0275text(1, "Review changes");
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "div", null, 3)(4, "p-fieldset", 29)(5, "p-button", 30);
    \u0275\u0275pipe(6, "translate");
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275property("collapsed", true)("toggleable", true);
    \u0275\u0275advance();
    \u0275\u0275property("label", \u0275\u0275pipeBind1(6, 3, "dev.prompts.button.openPR"));
  }
}
var PromptEditorComponent = class _PromptEditorComponent {
  translate = inject(TranslateService);
  exportGitHubService = inject(ExportGitHubService);
  settingsService = inject(UserSettingsService);
  openRouterService = inject(OpenRouterService);
  aiPromptService = inject(AiPromptService);
  constructor() {
    effect(() => {
      const isDarkMode = this.settingsService.darkMode();
      this.updateDiff();
    });
    effect(() => {
      const tab = this.selectedTab;
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
    { key: "role", label: "aiPrompt.component.role", data: this.roleFragment },
    { key: "output", label: "aiPrompt.component.output", data: this.outputFragment },
    { key: "rubric", label: "aiPrompt.component.rubric", data: this.rubricFragment }
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
  inventoryPrompts = Object.keys(InventoryPromptKey).map((enumKey) => ({
    enumKey,
    translationKey: InventoryPromptKey[enumKey],
    promptText: InventoryPrompts[InventoryPromptKey[enumKey]]
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
  selectedTab = 1;
  tabs = [
    { title: "aiPrompt.shared._title", value: 0, fragments: this.fragments, tool: "Shared", original: this.rebuildSharedFile() },
    { title: "aiPrompt.inventory._title", value: 1, prompts: this.inventoryPrompts, tool: "Inventory", original: this.rebuildPromptFile("Inventory", this.inventoryPrompts) },
    { title: "aiPrompt.pages._title", value: 2, prompts: this.pagePrompts, tool: "Page", original: this.rebuildPromptFile("Page", this.pagePrompts) },
    { title: "aiPrompt.problems._title", value: 3, prompts: this.problemPrompts, tool: "Problem", original: this.rebuildPromptFile("Problem", this.problemPrompts) }
  ];
  // Dropdown
  promptGroups = [
    { label: "aiPrompt.inventory._title", items: this.inventoryPrompts },
    { label: "aiPrompt.pages._title", items: this.pagePrompts },
    { label: "aiPrompt.problems._title", items: this.problemPrompts }
  ];
  selectedPrompt = signal(this.problemPrompts.find((p) => p.enumKey === "Alerts"), ...ngDevMode ? [{ debugName: "selectedPrompt" }] : (
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
  markForTranslation() {
    marker("aiPrompt.shared._title");
    marker("aiPrompt.inventory._title");
    marker("aiPrompt.pages._title");
    marker("aiPrompt.problems._title");
    marker("aiPrompt.component.role");
    marker("aiPrompt.component.output");
    marker("aiPrompt.component.rubric");
    marker("aiPrompt.component.task");
    marker("aiPrompt.component.jsonSchema");
    marker("dev.prompts.button.openPR");
  }
  // Test prompts
  aiState = this.openRouterService.state;
  //aiPrompt = this.aiPromptService.composePrompt(InventoryPrompts[InventoryPromptKey.Metadata]);
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
        value = this.serializePromptConfig(prompt.promptText);
      } else if (this.isPromptString(prompt)) {
        value = this.toTemplateLiteral(prompt.promptText);
      } else {
        throw new Error(`Unsupported prompt value for ${prompt.enumKey}`);
      }
      return `  [${tool}PromptKey.${prompt.enumKey}]: ${value},`;
    }).join("\n");
    return `import { OutputKey, ${tool}PromptKey, PromptConfig, RoleKey, RubricKey } from './prompt.model';

export const ${tool}Prompts: Record<${tool}PromptKey, PromptConfig> = {
${updatedPrompts}
};
`;
  }
  getSelectedPromptConfig() {
    const selected = this.selectedPrompt();
    return selected && this.isPromptConfig(selected) ? selected.promptText : null;
  }
  serializePromptConfig(config) {
    const lines = [
      "{",
      `    role: RoleKey.${this.getEnumKey(RoleKey, config.role)},`,
      `    task: ${this.toTemplateLiteral(config.task)},`,
      `    rubric: [${config.rubric.map((rubric) => `RubricKey.${this.getEnumKey(RubricKey, rubric)}`).join(", ")}],`,
      `    output: OutputKey.${this.getEnumKey(OutputKey, config.output)},`
    ];
    if (config.jsonSchema !== void 0)
      lines.push(`    jsonSchema: ${this.toTemplateLiteral(config.jsonSchema)},`);
    if (config.examples !== void 0)
      lines.push(`    examples: ${this.toTemplateLiteral(config.examples)},`);
    if (config.available !== void 0)
      lines.push(`    available: ${config.available},`);
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
  rebuildSharedFile() {
    const roleEntries = this.roleFragment.map((p) => ` [RoleKey.${p.enumKey}]: \`${p.promptText}\`,`).join("\n");
    const outputEntries = this.outputFragment.map((p) => ` [OutputKey.${p.enumKey}]: \`${p.promptText}\`,`).join("\n");
    const rubricEntries = this.rubricFragment.map((p) => ` [RubricKey.${p.enumKey}]: \`${p.promptText}\`,`).join("\n");
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
  // Tracks if changes have been made to current tab
  hasChanges() {
    if (!this.selectedTab)
      return false;
    const prompts = this.tabs[this.selectedTab].prompts;
    if (!prompts)
      return false;
    const tab = this.tabs[this.selectedTab];
    const updatedContent = this.rebuildPromptFile(tab.tool, prompts);
    const originalContent = tab.original;
    return updatedContent !== originalContent;
  }
  // Open pull request
  pullRequestUrl = null;
  openPullRequest(tool, prompts) {
    return __async(this, null, function* () {
      const content = this.rebuildPromptFile(tool, prompts);
      const toolLC = tool.toLowerCase();
      try {
        const result = yield this.exportGitHubService.createPullRequestForPrompts(toolLC, `src/app/common/prompts/${toolLC}.prompts.ts`, `${toolLC}.prompts.ts`, content);
        this.pullRequestUrl = result.prUrl;
      } catch (error) {
        console.error("Failed to create PR:", error);
      }
    });
  }
  // Update prompts diff
  diffContainer = viewChild("diffContainer", ...ngDevMode ? [{ debugName: "diffContainer" }] : (
    /* istanbul ignore next */
    []
  ));
  updateDiff() {
    return __async(this, null, function* () {
      const diffContainer = this.diffContainer();
      if (!diffContainer)
        return;
      const prompts = this.tabs[this.selectedTab].prompts;
      if (!prompts)
        return;
      const [{ createPatch }, { Diff2HtmlUI }] = yield Promise.all([import("./chunk-YMQ63AP2.js"), import("./chunk-WG3URZ2B.js")]);
      const tab = this.tabs[this.selectedTab];
      const updatedContent = this.rebuildPromptFile(tab.tool, prompts);
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
  // Highlight code for export preview
  filePreview = viewChild("filePreview", ...ngDevMode ? [{ debugName: "filePreview" }] : (
    /* istanbul ignore next */
    []
  ));
  highlightFilePreview() {
    return __async(this, null, function* () {
      const filePreview = this.filePreview();
      if (!filePreview)
        return;
      const prompts = this.tabs[this.selectedTab].prompts;
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
          codeBlock.textContent = this.rebuildPromptFile(this.tabs[this.selectedTab].tool, prompts);
          Prism.highlightElement(codeBlock);
        }
      } catch (error) {
        console.error("Failed to load Prism:", error);
      }
    });
  }
  // Load light/dark prism theme
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
  }, decls: 42, vars: 23, consts: [["group", ""], ["selectedItem", ""], ["item", ""], ["diffContainer", ""], ["id", "wb-cont"], [3, "valueChange", "value"], [3, "value"], ["inputId", "promptSelect", "optionGroupChildren", "items", "optionGroupLabel", "label", "optionLabel", "translationKey", "styleClass", "w-20rem", 3, "ngModelChange", "group", "ngModel", "options"], [1, "prompt-preview"], [3, "click"], ["severity", "error", 3, "text"], [3, "click", "value"], [1, "flex", "flex-row", "flex-wrap", "gap-4", "mt-0", "mb-4"], [1, "flex", "flex-column", "gap-3", "mt-0"], [1, "flex", "flex-row", "align-items-center", "gap-2"], [3, "ngModelChange", "binary", "inputId", "ngModel"], [1, "cursor-pointer", "font-semibold", 3, "for"], [1, "flex", "flex-row", "align-content-center", "gap-2"], [1, "my-0"], ["fluid", "", "pTextarea", "", "rows", "2", 3, "ngModelChange", "ngModel", "autoResize", "id"], [3, "for"], [1, "flex", "flex-column", "lg:flex-row", "gap-2"], [1, "flex-1"], ["appendTo", "body", "fluid", "", "optionLabel", "label", "optionValue", "value", "styleClass", "h-full", 3, "ngModelChange", "onChange", "ngModel", "id", "options"], ["pTemplate", "item"], ["pTemplate", "selectedItem"], ["appendTo", "body", "fluid", "", "optionLabel", "label", "optionValue", "value", 1, "h-full", 3, "ngModelChange", "onChange", "ngModel", "id", "options"], ["appendTo", "body", "fluid", "", "optionLabel", "label", "optionValue", "value", 1, "h-full", 3, "ngModelChange", "onChange", "ngModel", "id", "options", "placeholder"], [1, "my-1"], ["legend", "Full File Preview", "styleClass", "secondary-outline mb-3", 3, "collapsed", "toggleable"], ["disabled", "", "icon", "pi pi-send", 3, "label"]], template: function PromptEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "h1", 4);
      \u0275\u0275text(1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p");
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p-tabs", 5);
      \u0275\u0275twoWayListener("valueChange", function PromptEditorComponent_Template_p_tabs_valueChange_7_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedTab, $event) || (ctx.selectedTab = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(8, "p-tablist");
      \u0275\u0275repeaterCreate(9, PromptEditorComponent_For_10_Template, 3, 4, "p-tab", 6, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "p-tabpanels");
      \u0275\u0275repeaterCreate(12, PromptEditorComponent_For_13_Template, 2, 2, "p-tabpanel", 6, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "h2");
      \u0275\u0275text(15, "Test prompt");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "p-select", 7);
      \u0275\u0275listener("ngModelChange", function PromptEditorComponent_Template_p_select_ngModelChange_16_listener($event) {
        return ctx.selectedPrompt.set($event);
      });
      \u0275\u0275template(17, PromptEditorComponent_ng_template_17_Template, 2, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(19, PromptEditorComponent_ng_template_19_Template, 2, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(21, PromptEditorComponent_ng_template_21_Template, 2, 3, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "pre", 8);
      \u0275\u0275text(24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "h2");
      \u0275\u0275text(26, "Test description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "p");
      \u0275\u0275text(28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "p-button", 9);
      \u0275\u0275listener("click", function PromptEditorComponent_Template_p_button_click_29_listener() {
        return ctx.testResult();
      });
      \u0275\u0275text(30, "Test result");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "p");
      \u0275\u0275text(32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "p-button", 9);
      \u0275\u0275listener("click", function PromptEditorComponent_Template_p_button_click_33_listener() {
        return ctx.testResponse();
      });
      \u0275\u0275text(34, "Test response");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "pre", 8);
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "json");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(38, PromptEditorComponent_Conditional_38_Template, 1, 0, "p-progressspinner");
      \u0275\u0275conditionalCreate(39, PromptEditorComponent_Conditional_39_Template, 1, 1, "p-message", 10);
      \u0275\u0275conditionalCreate(40, PromptEditorComponent_Conditional_40_Template, 2, 1, "small");
      \u0275\u0275conditionalCreate(41, PromptEditorComponent_Conditional_41_Template, 7, 5);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 15, "dev.prompts._title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(5, 17, "dev.prompts.description"), " ", \u0275\u0275pipeBind1(6, 19, "dev.prompts.description2"));
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("value", ctx.selectedTab);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.tabs);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.tabs);
      \u0275\u0275advance(4);
      \u0275\u0275property("group", true)("ngModel", ctx.selectedPrompt())("options", ctx.promptGroups);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.aiPrompt());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.description);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("Result: ", ctx.result);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("Response: ", \u0275\u0275pipeBind1(37, 21, ctx.response));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.aiState().loading ? 38 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.aiState().error ? 39 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.aiState().respondingModel ? 40 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.hasChanges() ? 41 : -1);
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
  ], styles: ["\npre.prompt-preview[_ngcontent-%COMP%] {\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  min-width: 0;\n  max-width: 100%;\n  font-size: 1rem;\n  white-space: pre-wrap !important;\n  overflow-wrap: anywhere;\n  word-break: break-word;\n  overflow-x: hidden;\n}\n/*# sourceMappingURL=prompt-editor.component.css.map */"], changeDetection: 0 });
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

<p-tabs [(value)]="selectedTab">
  <p-tablist>
    @for (tab of tabs; track tab.value) {
      <p-tab [value]="tab.value" (click)="updateDiff()">{{ tab.title | translate }}</p-tab>
    }
  </p-tablist>
  <p-tabpanels>
    @for (tab of tabs; track tab.value) {
      <p-tabpanel [value]="tab.value">
        @if (tab.value === selectedTab) {
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
                  <label [for]="'show_' + prompt.enumKey" class="cursor-pointer font-semibold">{{ prompt.translationKey | translate }}</label>
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
                @if (isPromptConfig(prompt) && isPromptVisible(prompt.enumKey)) {
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
                        appendTo="body"
                        fluid
                        optionLabel="label"
                        optionValue="value"
                        styleClass="h-full"
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
                      <textarea [(ngModel)]="prompt.promptText.jsonSchema" [autoResize]="true" [id]="prompt.enumKey + '_jsonSchema'" (ngModelChange)="updateDiff()" fluid pTextarea rows="2"></textarea>
                      <label [for]="prompt.enumKey + '_jsonSchema'">{{ 'aiPrompt.component.jsonSchema' | translate }}</label>
                    </p-iftalabel>
                  }
                }
              }
            }
          </div>
        }
      </p-tabpanel>
    }
  </p-tabpanels>
</p-tabs>

<h2>Test prompt</h2>
<p-select
  [group]="true"
  [ngModel]="selectedPrompt()"
  [options]="promptGroups"
  (ngModelChange)="selectedPrompt.set($event)"
  inputId="promptSelect"
  optionGroupChildren="items"
  optionGroupLabel="label"
  optionLabel="translationKey"
  styleClass="w-20rem"
>
  <ng-template #group let-group>{{ group.label | translate }}</ng-template>
  <ng-template #selectedItem let-selected>{{ selected.translationKey | translate }}</ng-template>
  <ng-template #item let-prompt>{{ prompt.translationKey | translate }}</ng-template>
</p-select>
<pre class="prompt-preview">{{ aiPrompt() }}</pre>
<h2>Test description</h2>
<p>{{ description }}</p>
<p-button (click)="testResult()">Test result</p-button>
<p>Result: {{ result }}</p>
<p-button (click)="testResponse()">Test response</p-button>
<pre class="prompt-preview">Response: {{ response | json }}</pre>
@if (aiState().loading) {
  <p-progressspinner />
}
@if (aiState().error) {
  <p-message [text]="aiState().error!" severity="error" />
}
@if (aiState().respondingModel) {
  <small>Answered by: {{ aiState().respondingModel }}</small>
}

@if (hasChanges()) {
  <!--Review-->
  <h2 class="my-1">Review changes</h2>
  <div #diffContainer></div>
  <!--Export-->
  <p-fieldset [collapsed]="true" [toggleable]="true" legend="Full File Preview" styleClass="secondary-outline mb-3">
    <!--pre #filePreview><code class="language-typescript">{{ rebuildPromptFile(tabs[selectedTab].tool, tabs[selectedTab].prompts) }}</code></pre-->
  </p-fieldset>
  <p-button [label]="'dev.prompts.button.openPR' | translate" disabled icon="pi pi-send" />
}
`, styles: ["/* angular:styles/component:css;7024e500bd8685665ff8aa9ee57160cbcad07610618ee047f58bf355b6d8987c;C:/my-working-files/GitHub/design-assistant-aws/src/app/views/toolbox/dev-tools/prompt-editor/prompt-editor.component.ts */\npre.prompt-preview {\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  min-width: 0;\n  max-width: 100%;\n  font-size: 1rem;\n  white-space: pre-wrap !important;\n  overflow-wrap: anywhere;\n  word-break: break-word;\n  overflow-x: hidden;\n}\n/*# sourceMappingURL=prompt-editor.component.css.map */\n"] }]
  }], () => [], { diffContainer: [{ type: ViewChild, args: ["diffContainer", { isSignal: true }] }], filePreview: [{ type: ViewChild, args: ["filePreview", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PromptEditorComponent, { className: "PromptEditorComponent", filePath: "src/app/views/toolbox/dev-tools/prompt-editor/prompt-editor.component.ts", lineNumber: 85 });
})();
export {
  PromptEditorComponent
};
//# sourceMappingURL=chunk-SG5ZNUQK.js.map
