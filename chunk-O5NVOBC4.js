import {
  require_types
} from "./chunk-YIFK26D6.js";
import {
  PagePrompts,
  ProblemPrompts
} from "./chunk-QATIKESV.js";
import {
  InventoryPrompts
} from "./chunk-ZB2DKZKM.js";
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
} from "./chunk-EQGCRKEQ.js";
import {
  ProgressSpinner,
  ProgressSpinnerModule
} from "./chunk-37MIQF4I.js";
import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  TabsModule
} from "./chunk-ZJEDW3IY.js";
import {
  MultiSelect,
  MultiSelectModule
} from "./chunk-CZNSKZ7C.js";
import {
  Fieldset,
  FieldsetModule
} from "./chunk-BD6KUTBP.js";
import {
  Textarea,
  TextareaModule
} from "./chunk-X3PHMRYB.js";
import "./chunk-VUVEB27N.js";
import {
  RadioButton,
  RadioButtonModule
} from "./chunk-JUMOWLCN.js";
import "./chunk-5F7XDNYM.js";
import {
  IftaLabel,
  IftaLabelModule
} from "./chunk-SFFTHMKD.js";
import {
  Message,
  MessageModule
} from "./chunk-HIIG3TAV.js";
import "./chunk-EM76WITV.js";
import {
  Checkbox,
  CheckboxModule,
  ExportGitHubService
} from "./chunk-2N7OESPV.js";
import "./chunk-FO2K6X5T.js";
import "./chunk-WMXZG7VZ.js";
import "./chunk-ICFR3RAH.js";
import "./chunk-53YNRXA3.js";
import {
  Select,
  SelectModule
} from "./chunk-3SPBARR4.js";
import {
  Button,
  ButtonModule,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  PrimeTemplate,
  UserSettingsService,
  marker
} from "./chunk-AGPMTYRP.js";
import {
  CommonModule,
  JsonPipe
} from "./chunk-MDI4WJGA.js";
import {
  ChangeDetectionStrategy,
  Component,
  TranslatePipe,
  ViewChild,
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
  ɵɵrepeaterTrackByIdentity,
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
var _forTrack3 = ($index, $item) => $item.id;
function PromptEditorComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-tab", 19);
    \u0275\u0275listener("click", function PromptEditorComponent_For_10_Template_p_tab_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateDiff());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r3 = ctx.$implicit;
    \u0275\u0275property("value", tab_r3.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, tab_r3.title));
  }
}
function PromptEditorComponent_For_13_Conditional_1_Conditional_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "p-radiobutton", 23);
    \u0275\u0275listener("ngModelChange", function PromptEditorComponent_For_13_Conditional_1_Conditional_1_For_1_Template_p_radiobutton_ngModelChange_1_listener() {
      const fragment_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.toggleFragment(fragment_r5.key));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 24);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const fragment_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("binary", true)("inputId", "show_" + fragment_r5.key)("ngModel", ctx_r1.isFragmentVisible(fragment_r5.key));
    \u0275\u0275advance();
    \u0275\u0275property("for", "show_" + fragment_r5.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, fragment_r5.label));
  }
}
function PromptEditorComponent_For_13_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, PromptEditorComponent_For_13_Conditional_1_Conditional_1_For_1_Template, 5, 7, "div", 22, _forTrack1);
  }
  if (rf & 2) {
    const tab_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275repeater(tab_r6.fragments);
  }
}
function PromptEditorComponent_For_13_Conditional_1_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "p-checkbox", 23);
    \u0275\u0275listener("ngModelChange", function PromptEditorComponent_For_13_Conditional_1_Conditional_2_For_1_Template_p_checkbox_ngModelChange_1_listener() {
      const prompt_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.togglePrompt(prompt_r8.enumKey));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 24);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const prompt_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("binary", true)("inputId", "show_" + prompt_r8.enumKey)("ngModel", ctx_r1.isPromptVisible(prompt_r8.enumKey));
    \u0275\u0275advance();
    \u0275\u0275property("for", "show_" + prompt_r8.enumKey);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, prompt_r8.translationKey));
  }
}
function PromptEditorComponent_For_13_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, PromptEditorComponent_For_13_Conditional_1_Conditional_2_For_1_Template, 5, 7, "div", 25, _forTrack2);
  }
  if (rf & 2) {
    const tab_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275repeater(tab_r6.prompts);
  }
}
function PromptEditorComponent_For_13_Conditional_1_Conditional_4_For_1_Conditional_0_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-iftalabel")(1, "textarea", 27);
    \u0275\u0275twoWayListener("ngModelChange", function PromptEditorComponent_For_13_Conditional_1_Conditional_4_For_1_Conditional_0_For_4_Template_textarea_ngModelChange_1_listener($event) {
      const item_r10 = \u0275\u0275restoreView(_r9).$implicit;
      \u0275\u0275twoWayBindingSet(item_r10.promptText, $event) || (item_r10.promptText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function PromptEditorComponent_For_13_Conditional_1_Conditional_4_For_1_Conditional_0_For_4_Template_textarea_ngModelChange_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.updateDiff());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 28);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", item_r10.promptText);
    \u0275\u0275property("autoResize", true)("id", item_r10.enumKey);
    \u0275\u0275advance();
    \u0275\u0275property("for", item_r10.enumKey);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, item_r10.translationKey));
  }
}
function PromptEditorComponent_For_13_Conditional_1_Conditional_4_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 26);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, PromptEditorComponent_For_13_Conditional_1_Conditional_4_For_1_Conditional_0_For_4_Template, 5, 7, "p-iftalabel", null, _forTrack2);
  }
  if (rf & 2) {
    const fragment_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, fragment_r11.label));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(fragment_r11.data);
  }
}
function PromptEditorComponent_For_13_Conditional_1_Conditional_4_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PromptEditorComponent_For_13_Conditional_1_Conditional_4_For_1_Conditional_0_Template, 5, 3);
  }
  if (rf & 2) {
    const fragment_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional(ctx_r1.isFragmentVisible(fragment_r11.key) ? 0 : -1);
  }
}
function PromptEditorComponent_For_13_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, PromptEditorComponent_For_13_Conditional_1_Conditional_4_For_1_Template, 1, 1, null, null, _forTrack1);
  }
  if (rf & 2) {
    const tab_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275repeater(tab_r6.fragments);
  }
}
function PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-iftalabel")(1, "textarea", 27);
    \u0275\u0275twoWayListener("ngModelChange", function PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_0_Template_textarea_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r12);
      const prompt_r13 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(prompt_r13.promptText, $event) || (prompt_r13.promptText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_0_Template_textarea_ngModelChange_1_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.updateDiff());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 28);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const prompt_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", prompt_r13.promptText);
    \u0275\u0275property("autoResize", true)("id", prompt_r13.enumKey);
    \u0275\u0275advance();
    \u0275\u0275property("for", prompt_r13.enumKey);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, prompt_r13.translationKey));
  }
}
function PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const option_r15 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, option_r15.label), " ");
  }
}
function PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const option_r16 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, option_r16.label), " ");
  }
}
function PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const option_r17 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, option_r17.label), " ");
  }
}
function PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const option_r18 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, option_r18.label), " ");
  }
}
function PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const option_r19 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, option_r19.label), " ");
  }
}
function PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_ng_template_23_Conditional_0_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const option_r20 = ctx.$implicit;
    const \u0275$index_127_r21 = ctx.$index;
    const \u0275$count_127_r22 = ctx.$count;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(1, 2, option_r20.label), "", \u0275$index_127_r21 === \u0275$count_127_r22 - 1 ? "" : ", ", " ");
  }
}
function PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_ng_template_23_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_ng_template_23_Conditional_0_For_1_Template, 2, 4, null, null, _forTrack0);
  }
  if (rf & 2) {
    const options_r23 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275repeater(options_r23);
  }
}
function PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_ng_template_23_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const options_r23 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate2(" ", options_r23 == null ? null : options_r23.length, " ", \u0275\u0275pipeBind1(1, 2, "common.selected"), " ");
  }
}
function PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_ng_template_23_Conditional_0_Template, 2, 0)(1, PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_ng_template_23_Conditional_1_Template, 2, 4);
  }
  if (rf & 2) {
    const options_r23 = ctx.$implicit;
    \u0275\u0275conditional((options_r23 == null ? null : options_r23.length) <= 2 ? 0 : 1);
  }
}
function PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_Conditional_33_For_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "aiPrompt.component.skillOptionalReferences"));
  }
}
function PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_Conditional_33_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "code");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_Conditional_33_For_4_Conditional_3_Template, 3, 3, "small");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const skill_r24 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(skill_r24.id);
    \u0275\u0275advance();
    \u0275\u0275conditional(skill_r24.includeOptionalReferences ? 3 : -1);
  }
}
function PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-fieldset", 34);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "div", 36);
    \u0275\u0275repeaterCreate(3, PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_Conditional_33_For_4_Template, 4, 2, "div", 37, _forTrack3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const prompt_r13 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("legend", \u0275\u0275pipeBind1(1, 1, "aiPrompt.component.skills"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(prompt_r13.promptText.skills);
  }
}
function PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-iftalabel")(1, "textarea", 27);
    \u0275\u0275twoWayListener("ngModelChange", function PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_Conditional_34_Template_textarea_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r25);
      const prompt_r13 = \u0275\u0275nextContext(2).$implicit;
      \u0275\u0275twoWayBindingSet(prompt_r13.promptText.jsonSchema, $event) || (prompt_r13.promptText.jsonSchema = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_Conditional_34_Template_textarea_ngModelChange_1_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.updateDiff());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 28);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const prompt_r13 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", prompt_r13.promptText.jsonSchema);
    \u0275\u0275property("autoResize", true)("id", prompt_r13.enumKey + "_jsonSchema");
    \u0275\u0275advance();
    \u0275\u0275property("for", prompt_r13.enumKey + "_jsonSchema");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, "aiPrompt.component.jsonSchema"));
  }
}
function PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-message", 35);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275property("text", \u0275\u0275pipeBind1(1, 1, "aiPrompt.component.skillSchema"));
  }
}
function PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2", 26);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 29)(4, "p-iftalabel", 30)(5, "p-select", 31);
    \u0275\u0275twoWayListener("ngModelChange", function PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_Template_p_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r14);
      const prompt_r13 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(prompt_r13.promptText.role, $event) || (prompt_r13.promptText.role = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onChange", function PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_Template_p_select_onChange_5_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.updateDiff());
    });
    \u0275\u0275template(6, PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_ng_template_6_Template, 2, 3, "ng-template", 9)(7, PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_ng_template_7_Template, 2, 3, "ng-template", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "label", 28);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "p-iftalabel", 30)(12, "p-select", 32);
    \u0275\u0275twoWayListener("ngModelChange", function PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_Template_p_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r14);
      const prompt_r13 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(prompt_r13.promptText.output, $event) || (prompt_r13.promptText.output = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onChange", function PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_Template_p_select_onChange_12_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.updateDiff());
    });
    \u0275\u0275template(13, PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_ng_template_13_Template, 2, 3, "ng-template", 9)(14, PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_ng_template_14_Template, 2, 3, "ng-template", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "label", 28);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "p-iftalabel", 30)(19, "p-multiselect", 33);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_Template_p_multiselect_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r14);
      const prompt_r13 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(prompt_r13.promptText.rubric, $event) || (prompt_r13.promptText.rubric = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onChange", function PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_Template_p_multiselect_onChange_19_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.updateDiff());
    });
    \u0275\u0275template(21, PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_ng_template_21_Template, 2, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(23, PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_ng_template_23_Template, 2, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "label", 28);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "p-iftalabel")(29, "textarea", 27);
    \u0275\u0275twoWayListener("ngModelChange", function PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_Template_textarea_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r14);
      const prompt_r13 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(prompt_r13.promptText.task, $event) || (prompt_r13.promptText.task = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_Template_textarea_ngModelChange_29_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.updateDiff());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "label", 28);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(33, PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_Conditional_33_Template, 5, 3, "p-fieldset", 34);
    \u0275\u0275conditionalCreate(34, PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_Conditional_34_Template, 5, 7, "p-iftalabel")(35, PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_Conditional_35_Template, 2, 3, "p-message", 35);
  }
  if (rf & 2) {
    const prompt_r13 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 24, prompt_r13.translationKey));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", prompt_r13.promptText.role);
    \u0275\u0275property("id", prompt_r13.enumKey + "_role")("options", ctx_r1.roleOptions);
    \u0275\u0275advance(3);
    \u0275\u0275property("for", prompt_r13.enumKey + "_role");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 26, "aiPrompt.component.role"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", prompt_r13.promptText.output);
    \u0275\u0275property("id", prompt_r13.enumKey + "_output")("options", ctx_r1.outputOptions);
    \u0275\u0275advance(3);
    \u0275\u0275property("for", prompt_r13.enumKey + "_output");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 28, "aiPrompt.component.output"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", prompt_r13.promptText.rubric);
    \u0275\u0275property("id", prompt_r13.enumKey + "_rubric")("options", ctx_r1.rubricOptions)("placeholder", \u0275\u0275pipeBind1(20, 30, "common.none"));
    \u0275\u0275advance(6);
    \u0275\u0275property("for", prompt_r13.enumKey + "_rubric");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 32, "aiPrompt.component.rubric"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", prompt_r13.promptText.task);
    \u0275\u0275property("autoResize", true)("id", prompt_r13.enumKey + "_task");
    \u0275\u0275advance();
    \u0275\u0275property("for", prompt_r13.enumKey + "_task");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 34, "aiPrompt.component.task"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((prompt_r13.promptText.skills == null ? null : prompt_r13.promptText.skills.length) ? 33 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(prompt_r13.promptText.output === ctx_r1.OutputKey.Json && !(prompt_r13.promptText.skills == null ? null : prompt_r13.promptText.skills.length) ? 34 : prompt_r13.promptText.output === ctx_r1.OutputKey.Json ? 35 : -1);
  }
}
function PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_0_Template, 5, 7, "p-iftalabel");
    \u0275\u0275conditionalCreate(1, PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Conditional_1_Template, 36, 36);
  }
  if (rf & 2) {
    const prompt_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional(ctx_r1.isPromptString(prompt_r13) ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isPromptConfig(prompt_r13) && ctx_r1.isPromptVisible(prompt_r13.enumKey) ? 1 : -1);
  }
}
function PromptEditorComponent_For_13_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, PromptEditorComponent_For_13_Conditional_1_Conditional_5_For_1_Template, 2, 2, null, null, _forTrack2);
  }
  if (rf & 2) {
    const tab_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275repeater(tab_r6.prompts);
  }
}
function PromptEditorComponent_For_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275conditionalCreate(1, PromptEditorComponent_For_13_Conditional_1_Conditional_1_Template, 2, 0)(2, PromptEditorComponent_For_13_Conditional_1_Conditional_2_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 21);
    \u0275\u0275conditionalCreate(4, PromptEditorComponent_For_13_Conditional_1_Conditional_4_Template, 2, 0);
    \u0275\u0275conditionalCreate(5, PromptEditorComponent_For_13_Conditional_1_Conditional_5_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isFragmentsTab(tab_r6) ? 1 : 2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.isFragmentsTab(tab_r6) ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isFragmentsTab(tab_r6) ? 5 : -1);
  }
}
function PromptEditorComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-tabpanel", 5);
    \u0275\u0275conditionalCreate(1, PromptEditorComponent_For_13_Conditional_1_Template, 6, 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", tab_r6.value);
    \u0275\u0275advance();
    \u0275\u0275conditional(tab_r6.value === ctx_r1.selectedTab ? 1 : -1);
  }
}
function PromptEditorComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const option_r26 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, option_r26.label), " ");
  }
}
function PromptEditorComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const option_r27 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, option_r27.label), " ");
  }
}
function PromptEditorComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-progressspinner", 12);
  }
}
function PromptEditorComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-message", 13);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("text", ctx_r1.compositionError());
  }
}
function PromptEditorComponent_Conditional_26_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-message", 38);
  }
  if (rf & 2) {
    const warning_r28 = ctx.$implicit;
    \u0275\u0275property("text", warning_r28);
  }
}
function PromptEditorComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "div")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div")(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div")(14, "strong");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(18, PromptEditorComponent_Conditional_26_For_19_Template, 1, 1, "p-message", 38, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "h3", 39);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "pre", 40);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const composed_r29 = ctx;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 8, "dev.prompts.test.loadedSkills"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", composed_r29.loadedSkills.length ? composed_r29.loadedSkills.join(", ") : \u0275\u0275pipeBind1(6, 10, "common.none"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(10, 12, "dev.prompts.test.loadedResources"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", composed_r29.loadedResources.length ? composed_r29.loadedResources.join(", ") : \u0275\u0275pipeBind1(12, 14, "common.none"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(16, 16, "dev.prompts.test.estimatedTokens"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", composed_r29.estimatedTokens, " ");
    \u0275\u0275advance();
    \u0275\u0275repeater(composed_r29.warnings);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 18, "dev.prompts.test.prompt"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(composed_r29.prompt);
  }
}
function PromptEditorComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 39);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "pre", 40);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, "dev.prompts.test.result"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.result);
  }
}
function PromptEditorComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 39);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "pre", 40);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "json");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, "dev.prompts.test.response"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, ctx_r1.response));
  }
}
function PromptEditorComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-progressspinner");
  }
}
function PromptEditorComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-message", 13);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("text", ctx_r1.aiState().error);
  }
}
function PromptEditorComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Answered by: ", ctx_r1.aiState().respondingModel);
  }
}
function PromptEditorComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 41);
    \u0275\u0275text(1, "Review changes");
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "div", null, 2)(4, "p-fieldset", 42)(5, "p-button", 43);
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
  exportGitHubService = inject(ExportGitHubService);
  settingsService = inject(UserSettingsService);
  openRouterService = inject(OpenRouterService);
  aiPromptService = inject(AiPromptService);
  constructor() {
    effect(() => {
      const isDarkMode = this.settingsService.darkMode();
      this.updateDiff();
    });
    void this.resolveTestPrompt();
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
  rubricOptions = Object.values(RubricKey).map((key) => ({
    value: key,
    label: key
  }));
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
    marker("aiPrompt.component.skills");
    marker("aiPrompt.component.skillOptionalReferences");
    marker("aiPrompt.component.skillSchema");
    marker("dev.prompts.button.openPR");
    marker("dev.prompts.button.resolve");
    marker("dev.prompts.test._title");
    marker("dev.prompts.test.compositionError");
    marker("dev.prompts.test.description");
    marker("dev.prompts.test.estimatedTokens");
    marker("dev.prompts.test.loadedResources");
    marker("dev.prompts.test.loadedSkills");
    marker("dev.prompts.test.prompt");
    marker("dev.prompts.test.response");
    marker("dev.prompts.test.result");
  }
  // Resolve and test prompts
  aiState = this.openRouterService.state;
  composedPrompt = signal(null, ...ngDevMode ? [{ debugName: "composedPrompt" }] : (
    /* istanbul ignore next */
    []
  ));
  compositionError = signal(null, ...ngDevMode ? [{ debugName: "compositionError" }] : (
    /* istanbul ignore next */
    []
  ));
  compositionLoading = signal(false, ...ngDevMode ? [{ debugName: "compositionLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  description = "Official CRA information on Canadian taxes. File your return, manage payments, and explore credits and deductions for individuals and businesses.";
  response = null;
  result = "";
  testPromptOptions = this.tabs.flatMap((tab) => (tab.prompts ?? []).map((prompt) => ({
    value: `${tab.tool}.${prompt.enumKey}`,
    label: prompt.translationKey,
    prompt
  })));
  selectedTestPrompt = this.testPromptOptions[0]?.value ?? "";
  resolveTestPrompt() {
    return __async(this, null, function* () {
      const config = this.getSelectedTestPromptConfig();
      this.composedPrompt.set(null);
      this.compositionError.set(null);
      if (!config)
        return;
      this.compositionLoading.set(true);
      try {
        this.composedPrompt.set(yield this.aiPromptService.composePromptDetails(config));
      } catch (error) {
        this.compositionError.set(error instanceof Error ? error.message : "Unknown prompt composition error");
      } finally {
        this.compositionLoading.set(false);
      }
    });
  }
  testResponse() {
    return __async(this, null, function* () {
      const config = this.getSelectedTestPromptConfig();
      if (!config)
        return;
      this.response = yield this.openRouterService.sendToAI(config, this.description);
    });
  }
  testResult() {
    return __async(this, null, function* () {
      const config = this.getSelectedTestPromptConfig();
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
  getSelectedTestPromptConfig() {
    const selected = this.testPromptOptions.find((option) => option.value === this.selectedTestPrompt)?.prompt;
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
    if (config.skills?.length) {
      const skills = config.skills.map((skill) => `{ id: '${skill.id}'${skill.includeOptionalReferences === true ? ", includeOptionalReferences: true" : ""} }`).join(", ");
      lines.push(`    skills: [${skills}],`);
    }
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
  }, decls: 43, vars: 37, consts: [["item", ""], ["selectedItems", ""], ["diffContainer", ""], ["id", "wb-cont"], [3, "valueChange", "value"], [3, "value"], [1, "flex", "flex-column", "gap-3"], [1, "flex", "flex-column", "md:flex-row", "gap-2"], ["fluid", "", "optionLabel", "label", "optionValue", "value", 1, "flex-1", 3, "ngModelChange", "onChange", "ngModel", "options"], ["pTemplate", "item"], ["pTemplate", "selectedItem"], ["icon", "pi pi-refresh", 3, "click", "label"], ["ariaLabel", "Loading"], ["severity", "error", 3, "text"], ["id", "test_description", "fluid", "", "pTextarea", "", "rows", "4", 3, "ngModelChange", "ngModel"], ["for", "test_description"], [1, "flex", "flex-row", "flex-wrap", "gap-2"], [3, "click", "label"], ["severity", "secondary", 3, "click", "label"], [3, "click", "value"], [1, "flex", "flex-row", "flex-wrap", "gap-4", "mt-0", "mb-4"], [1, "flex", "flex-column", "gap-3", "mt-0"], [1, "flex", "flex-row", "align-items-center", "gap-2"], [3, "ngModelChange", "binary", "inputId", "ngModel"], [1, "cursor-pointer", "font-semibold", 3, "for"], [1, "flex", "flex-row", "align-content-center", "gap-2"], [1, "my-0"], ["fluid", "", "pTextarea", "", "rows", "2", 3, "ngModelChange", "ngModel", "autoResize", "id"], [3, "for"], [1, "flex", "flex-column", "lg:flex-row", "gap-2"], [1, "flex-1"], ["appendTo", "body", "fluid", "", "optionLabel", "label", "optionValue", "value", "styleClass", "h-full", 3, "ngModelChange", "onChange", "ngModel", "id", "options"], ["appendTo", "body", "fluid", "", "optionLabel", "label", "optionValue", "value", 1, "h-full", 3, "ngModelChange", "onChange", "ngModel", "id", "options"], ["appendTo", "body", "fluid", "", "optionLabel", "label", "optionValue", "value", 1, "h-full", 3, "ngModelChange", "onChange", "ngModel", "id", "options", "placeholder"], [3, "legend"], ["severity", "info", 3, "text"], [1, "flex", "flex-column", "gap-2"], [1, "flex", "flex-row", "flex-wrap", "align-items-center", "gap-2"], ["severity", "warn", 3, "text"], [1, "mb-0"], [1, "white-space-pre-wrap"], [1, "my-1"], ["legend", "Full File Preview", "styleClass", "secondary-outline mb-3", 3, "collapsed", "toggleable"], ["disabled", "", "icon", "pi pi-send", 3, "label"]], template: function PromptEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h1", 3);
      \u0275\u0275text(1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p");
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p-tabs", 4);
      \u0275\u0275twoWayListener("valueChange", function PromptEditorComponent_Template_p_tabs_valueChange_7_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedTab, $event) || (ctx.selectedTab = $event);
        return $event;
      });
      \u0275\u0275elementStart(8, "p-tablist");
      \u0275\u0275repeaterCreate(9, PromptEditorComponent_For_10_Template, 3, 4, "p-tab", 5, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "p-tabpanels");
      \u0275\u0275repeaterCreate(12, PromptEditorComponent_For_13_Template, 2, 2, "p-tabpanel", 5, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "h2");
      \u0275\u0275text(15);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 6)(18, "div", 7)(19, "p-select", 8);
      \u0275\u0275twoWayListener("ngModelChange", function PromptEditorComponent_Template_p_select_ngModelChange_19_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedTestPrompt, $event) || (ctx.selectedTestPrompt = $event);
        return $event;
      });
      \u0275\u0275listener("onChange", function PromptEditorComponent_Template_p_select_onChange_19_listener() {
        return ctx.resolveTestPrompt();
      });
      \u0275\u0275template(20, PromptEditorComponent_ng_template_20_Template, 2, 3, "ng-template", 9)(21, PromptEditorComponent_ng_template_21_Template, 2, 3, "ng-template", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "p-button", 11);
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275listener("click", function PromptEditorComponent_Template_p_button_click_22_listener() {
        return ctx.resolveTestPrompt();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(24, PromptEditorComponent_Conditional_24_Template, 1, 0, "p-progressspinner", 12);
      \u0275\u0275conditionalCreate(25, PromptEditorComponent_Conditional_25_Template, 1, 1, "p-message", 13);
      \u0275\u0275conditionalCreate(26, PromptEditorComponent_Conditional_26_Template, 25, 20);
      \u0275\u0275elementStart(27, "p-iftalabel")(28, "textarea", 14);
      \u0275\u0275twoWayListener("ngModelChange", function PromptEditorComponent_Template_textarea_ngModelChange_28_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.description, $event) || (ctx.description = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "label", 15);
      \u0275\u0275text(30);
      \u0275\u0275pipe(31, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 16)(33, "p-button", 17);
      \u0275\u0275pipe(34, "translate");
      \u0275\u0275listener("click", function PromptEditorComponent_Template_p_button_click_33_listener() {
        return ctx.testResult();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "p-button", 18);
      \u0275\u0275pipe(36, "translate");
      \u0275\u0275listener("click", function PromptEditorComponent_Template_p_button_click_35_listener() {
        return ctx.testResponse();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(37, PromptEditorComponent_Conditional_37_Template, 5, 4);
      \u0275\u0275conditionalCreate(38, PromptEditorComponent_Conditional_38_Template, 6, 6);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(39, PromptEditorComponent_Conditional_39_Template, 1, 0, "p-progressspinner");
      \u0275\u0275conditionalCreate(40, PromptEditorComponent_Conditional_40_Template, 1, 1, "p-message", 13);
      \u0275\u0275conditionalCreate(41, PromptEditorComponent_Conditional_41_Template, 2, 1, "small");
      \u0275\u0275conditionalCreate(42, PromptEditorComponent_Conditional_42_Template, 7, 5);
    }
    if (rf & 2) {
      let tmp_11_0;
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 21, "dev.prompts._title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(5, 23, "dev.prompts.description"), " ", \u0275\u0275pipeBind1(6, 25, "dev.prompts.description2"));
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("value", ctx.selectedTab);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.tabs);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.tabs);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 27, "dev.prompts.test._title"));
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedTestPrompt);
      \u0275\u0275property("options", ctx.testPromptOptions);
      \u0275\u0275advance(3);
      \u0275\u0275property("label", \u0275\u0275pipeBind1(23, 29, "dev.prompts.button.resolve"));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.compositionLoading() ? 24 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.compositionError() ? 25 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_11_0 = ctx.composedPrompt()) ? 26 : -1, tmp_11_0);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.description);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 31, "dev.prompts.test.description"));
      \u0275\u0275advance(3);
      \u0275\u0275property("label", \u0275\u0275pipeBind1(34, 33, "dev.prompts.test.result"));
      \u0275\u0275advance(2);
      \u0275\u0275property("label", \u0275\u0275pipeBind1(36, 35, "dev.prompts.test.response"));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.result ? 37 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.response ? 38 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.aiState().loading ? 39 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.aiState().error ? 40 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.aiState().respondingModel ? 41 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.hasChanges() ? 42 : -1);
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
  ], encapsulation: 2, changeDetection: 0 });
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
                        [options]="rubricOptions"
                        [placeholder]="'common.none' | translate"
                        (onChange)="updateDiff()"
                        class="h-full"
                        appendTo="body"
                        fluid
                        optionLabel="label"
                        optionValue="value"
                      >
                        <ng-template #item let-option>
                          {{ option.label | translate }}
                        </ng-template>
                        <ng-template #selectedItems let-options>
                          @if (options?.length <= 2) {
                            @for (option of options; track option.value; let last = $last) {
                              {{ option.label | translate }}{{ last ? '' : ', ' }}
                            }
                          } @else {
                            {{ options?.length }} {{ 'common.selected' | translate }}
                          }
                        </ng-template>
                      </p-multiselect>
                      <label [for]="prompt.enumKey + '_rubric'">{{ 'aiPrompt.component.rubric' | translate }}</label>
                    </p-iftalabel>
                  </div>
                  <!-- Task textarea -->
                  <p-iftalabel>
                    <textarea [(ngModel)]="prompt.promptText.task" [autoResize]="true" [id]="prompt.enumKey + '_task'" (ngModelChange)="updateDiff()" fluid pTextarea rows="2"></textarea>
                    <label [for]="prompt.enumKey + '_task'">{{ 'aiPrompt.component.task' | translate }}</label>
                  </p-iftalabel>

                  <!-- Skill bindings are resolved from the generated skills manifest. -->
                  @if (prompt.promptText.skills?.length) {
                    <p-fieldset [legend]="'aiPrompt.component.skills' | translate">
                      <div class="flex flex-column gap-2">
                        @for (skill of prompt.promptText.skills; track skill.id) {
                          <div class="flex flex-row flex-wrap align-items-center gap-2">
                            <code>{{ skill.id }}</code>
                            @if (skill.includeOptionalReferences) {
                              <small>{{ 'aiPrompt.component.skillOptionalReferences' | translate }}</small>
                            }
                          </div>
                        }
                      </div>
                    </p-fieldset>
                  }

                  <!-- JSON schema -->
                  @if (prompt.promptText.output === OutputKey.Json && !prompt.promptText.skills?.length) {
                    <p-iftalabel>
                      <textarea [(ngModel)]="prompt.promptText.jsonSchema" [autoResize]="true" [id]="prompt.enumKey + '_jsonSchema'" (ngModelChange)="updateDiff()" fluid pTextarea rows="2"></textarea>
                      <label [for]="prompt.enumKey + '_jsonSchema'">{{ 'aiPrompt.component.jsonSchema' | translate }}</label>
                    </p-iftalabel>
                  } @else if (prompt.promptText.output === OutputKey.Json) {
                    <p-message [text]="'aiPrompt.component.skillSchema' | translate" severity="info" />
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

<h2>{{ 'dev.prompts.test._title' | translate }}</h2>
<div class="flex flex-column gap-3">
  <div class="flex flex-column md:flex-row gap-2">
    <p-select [(ngModel)]="selectedTestPrompt" [options]="testPromptOptions" (onChange)="resolveTestPrompt()" class="flex-1" fluid optionLabel="label" optionValue="value">
      <ng-template let-option pTemplate="item">
        {{ option.label | translate }}
      </ng-template>
      <ng-template let-option pTemplate="selectedItem">
        {{ option.label | translate }}
      </ng-template>
    </p-select>
    <p-button [label]="'dev.prompts.button.resolve' | translate" (click)="resolveTestPrompt()" icon="pi pi-refresh" />
  </div>

  @if (compositionLoading()) {
    <p-progressspinner ariaLabel="Loading" />
  }
  @if (compositionError()) {
    <p-message [text]="compositionError()!" severity="error" />
  }
  @if (composedPrompt(); as composed) {
    <div class="flex flex-column gap-2">
      <div>
        <strong>{{ 'dev.prompts.test.loadedSkills' | translate }}:</strong>
        {{ composed.loadedSkills.length ? composed.loadedSkills.join(', ') : ('common.none' | translate) }}
      </div>
      <div>
        <strong>{{ 'dev.prompts.test.loadedResources' | translate }}:</strong>
        {{ composed.loadedResources.length ? composed.loadedResources.join(', ') : ('common.none' | translate) }}
      </div>
      <div>
        <strong>{{ 'dev.prompts.test.estimatedTokens' | translate }}:</strong>
        {{ composed.estimatedTokens }}
      </div>
      @for (warning of composed.warnings; track warning) {
        <p-message [text]="warning" severity="warn" />
      }
    </div>
    <h3 class="mb-0">{{ 'dev.prompts.test.prompt' | translate }}</h3>
    <pre class="white-space-pre-wrap">{{ composed.prompt }}</pre>
  }

  <p-iftalabel>
    <textarea id="test_description" [(ngModel)]="description" fluid pTextarea rows="4"></textarea>
    <label for="test_description">{{ 'dev.prompts.test.description' | translate }}</label>
  </p-iftalabel>
  <div class="flex flex-row flex-wrap gap-2">
    <p-button [label]="'dev.prompts.test.result' | translate" (click)="testResult()" />
    <p-button [label]="'dev.prompts.test.response' | translate" (click)="testResponse()" severity="secondary" />
  </div>
  @if (result) {
    <h3 class="mb-0">{{ 'dev.prompts.test.result' | translate }}</h3>
    <pre class="white-space-pre-wrap">{{ result }}</pre>
  }
  @if (response) {
    <h3 class="mb-0">{{ 'dev.prompts.test.response' | translate }}</h3>
    <pre class="white-space-pre-wrap">{{ response | json }}</pre>
  }
</div>
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
` }]
  }], () => [], { diffContainer: [{ type: ViewChild, args: ["diffContainer", { isSignal: true }] }], filePreview: [{ type: ViewChild, args: ["filePreview", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PromptEditorComponent, { className: "PromptEditorComponent", filePath: "src/app/views/toolbox/dev-tools/prompt-editor/prompt-editor.component.ts", lineNumber: 77 });
})();
export {
  PromptEditorComponent
};
//# sourceMappingURL=chunk-O5NVOBC4.js.map
