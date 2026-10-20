import {
  InputGroup,
  InputGroupAddon,
  InputGroupAddonModule,
  InputGroupModule,
  Tag,
  TagModule
} from "./chunk-7EZBCBFO.js";
import {
  Fieldset,
  FieldsetModule
} from "./chunk-BD6KUTBP.js";
import {
  Textarea,
  TextareaModule
} from "./chunk-X3PHMRYB.js";
import {
  IftaLabel,
  IftaLabelModule
} from "./chunk-SFFTHMKD.js";
import {
  Message,
  MessageModule
} from "./chunk-HIIG3TAV.js";
import {
  ProjectStateService
} from "./chunk-Y6P4PL7N.js";
import {
  SelectButton,
  SelectButtonModule
} from "./chunk-AU75ZWE3.js";
import {
  Checkbox,
  CheckboxModule
} from "./chunk-2N7OESPV.js";
import {
  Select,
  SelectModule
} from "./chunk-3SPBARR4.js";
import {
  Button,
  ButtonModule,
  DefaultValueAccessor,
  FormsModule,
  InputText,
  InputTextModule,
  NgControlStatus,
  NgModel
} from "./chunk-AGPMTYRP.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe
} from "./chunk-MDI4WJGA.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  TranslatePipe,
  TranslateService,
  computed,
  effect,
  inject,
  input,
  output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-KRHY6Z2H.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-YCXP4XZS.js";

// src/app/components/edit-node/edit-node.component.ts
var _c0 = (a0) => ({ days: a0 });
function EditNodeComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 14);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 17)(5, "div", 18)(6, "p-checkbox", 19);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_Conditional_24_Template_p_checkbox_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data.status.inScope, $event) || (ctx_r1.node().data.status.inScope = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_Conditional_24_Template_p_checkbox_ngModelChange_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.markChanges());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "label", 20);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 18)(11, "p-checkbox", 21);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_Conditional_24_Template_p_checkbox_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data.status.isNew, $event) || (ctx_r1.node().data.status.isNew = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_Conditional_24_Template_p_checkbox_ngModelChange_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.markChanges());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "label", 22);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 18)(16, "p-checkbox", 23);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_Conditional_24_Template_p_checkbox_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data.status.isROT, $event) || (ctx_r1.node().data.status.isROT = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_Conditional_24_Template_p_checkbox_ngModelChange_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.markChanges());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "label", 24);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 18)(21, "p-checkbox", 25);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_Conditional_24_Template_p_checkbox_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data.status.isMoved, $event) || (ctx_r1.node().data.status.isMoved = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_Conditional_24_Template_p_checkbox_ngModelChange_21_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.markChanges());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "label", 26);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 13, "common.status"));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.node().data.status.inScope);
    \u0275\u0275property("binary", true);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 15, "editNode.inScope"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.node().data.status.isNew);
    \u0275\u0275property("binary", true);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 17, "editNode.isNew"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.node().data.status.isROT);
    \u0275\u0275property("binary", true);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 19, "editNode.isROT"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.node().data.status.isMoved);
    \u0275\u0275property("binary", true);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 21, "editNode.isMoved"));
  }
}
function EditNodeComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-message", 16)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-button", 27);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275listener("onClick", function EditNodeComponent_Conditional_30_Template_p_button_onClick_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.enableEdits());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const config_r4 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("icon", config_r4.icon)("severity", config_r4.severity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(config_r4.text);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.editsEnabled())("label", \u0275\u0275pipeBind1(4, 5, "common.enableEdits"));
  }
}
function EditNodeComponent_Conditional_31_Conditional_1_Conditional_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-iftalabel")(1, "input", 76);
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_1_Conditional_11_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onFragmentInput($event, "en"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 77);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-red-500", ctx_r1.pathEN().startsWith("new-page"));
    \u0275\u0275property("disabled", !!ctx_r1.versionConfig() && !ctx_r1.editsEnabled())("ngModel", ctx_r1.pathEN());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, "editNode.pageUrl"));
  }
}
function EditNodeComponent_Conditional_31_Conditional_1_Conditional_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-message", 39)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "editNode.pathError"));
  }
}
function EditNodeComponent_Conditional_31_Conditional_1_Conditional_1_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78)(1, "span", 79);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(page_r8.label);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", page_r8.path, " ");
  }
}
function EditNodeComponent_Conditional_31_Conditional_1_Conditional_1_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-message", 39)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "editNode.moveError"));
  }
}
function EditNodeComponent_Conditional_31_Conditional_1_Conditional_1_Conditional_158_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-tag", 75);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("severity", ctx_r1.node().data[ctx_r1.selectedVersion()].en.is404 === ctx_r1.node().data[ctx_r1.selectedVersion()].fr.is404 ? void 0 : "danger");
  }
}
function EditNodeComponent_Conditional_31_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-fieldset", 30);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "div", 34)(3, "p-inputgroup")(4, "p-iftalabel")(5, "input", 35);
    \u0275\u0275listener("blur", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_1_Template_input_blur_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.updateFragment("en"));
    })("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_1_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onPathInput($event, "en"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "label", 36);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p-inputgroup-addon", 37)(10, "p-button", 38);
    \u0275\u0275listener("onClick", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_1_Template_p_button_onClick_10_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.enableUrlEdits());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(11, EditNodeComponent_Conditional_31_Conditional_1_Conditional_1_Conditional_11_Template, 5, 7, "p-iftalabel");
    \u0275\u0275conditionalCreate(12, EditNodeComponent_Conditional_31_Conditional_1_Conditional_1_Conditional_12_Template, 4, 3, "p-message", 39);
    \u0275\u0275elementStart(13, "p-iftalabel")(14, "input", 40);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_1_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data[ctx_r1.selectedVersion()].en.doubleH1, $event) || (ctx_r1.node().data[ctx_r1.selectedVersion()].en.doubleH1 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_1_Template_input_ngModelChange_14_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.markChanges());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "label", 41);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "p-iftalabel")(19, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_1_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data[ctx_r1.selectedVersion()].en.h1, $event) || (ctx_r1.node().data[ctx_r1.selectedVersion()].en.h1 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_1_Template_input_ngModelChange_19_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.markChanges();
      return \u0275\u0275resetView(ctx_r1.syncNewName(ctx_r1.node(), ctx_r1.selectedVersion(), "en"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "label", 43);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "p-iftalabel")(24, "p-select", 44);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_1_Template_p_select_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data[ctx_r1.selectedVersion()].en.template, $event) || (ctx_r1.node().data[ctx_r1.selectedVersion()].en.template = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_1_Template_p_select_ngModelChange_24_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.markChanges();
      return \u0275\u0275resetView(ctx_r1.syncData(ctx_r1.node(), "template", "ENtoFR"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "label", 45);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "p-iftalabel")(29, "p-select", 46);
    \u0275\u0275listener("onChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_1_Template_p_select_onChange_29_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.moveNode(ctx_r1.node(), $event.value, "en", ctx_r1.selectedVersion()));
    });
    \u0275\u0275template(30, EditNodeComponent_Conditional_31_Conditional_1_Conditional_1_ng_template_30_Template, 4, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "label", 47);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(35, EditNodeComponent_Conditional_31_Conditional_1_Conditional_1_Conditional_35_Template, 4, 3, "p-message", 39);
    \u0275\u0275elementStart(36, "h3", 48);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "p-iftalabel")(40, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_1_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data[ctx_r1.selectedVersion()].en.title, $event) || (ctx_r1.node().data[ctx_r1.selectedVersion()].en.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_1_Template_input_ngModelChange_40_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.markChanges());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "label", 50);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "p-iftalabel")(45, "textarea", 51);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_1_Template_textarea_ngModelChange_45_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data[ctx_r1.selectedVersion()].en.description, $event) || (ctx_r1.node().data[ctx_r1.selectedVersion()].en.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_1_Template_textarea_ngModelChange_45_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.markChanges());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "label", 52);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "p-iftalabel")(50, "textarea", 53);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_1_Template_textarea_ngModelChange_50_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data[ctx_r1.selectedVersion()].en.keywords, $event) || (ctx_r1.node().data[ctx_r1.selectedVersion()].en.keywords = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_1_Template_textarea_ngModelChange_50_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.markChanges());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "label", 54);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "h3", 48);
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "p-iftalabel")(58, "input", 55);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_1_Template_input_ngModelChange_58_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data[ctx_r1.selectedVersion()].en.owner, $event) || (ctx_r1.node().data[ctx_r1.selectedVersion()].en.owner = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_1_Template_input_ngModelChange_58_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.markChanges();
      return \u0275\u0275resetView(ctx_r1.syncData(ctx_r1.node(), "owner", "ENtoFR"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "label", 56);
    \u0275\u0275text(60);
    \u0275\u0275pipe(61, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "p-iftalabel")(63, "input", 57);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_1_Template_input_ngModelChange_63_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data[ctx_r1.selectedVersion()].en.email, $event) || (ctx_r1.node().data[ctx_r1.selectedVersion()].en.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_1_Template_input_ngModelChange_63_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.markChanges();
      return \u0275\u0275resetView(ctx_r1.syncData(ctx_r1.node(), "email", "ENtoFR"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "label", 58);
    \u0275\u0275text(65);
    \u0275\u0275pipe(66, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "h3", 48);
    \u0275\u0275text(68);
    \u0275\u0275pipe(69, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "div", 59)(71, "div", 60)(72, "p-checkbox", 61);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_1_Template_p_checkbox_ngModelChange_72_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data[ctx_r1.selectedVersion()].en.isArchived, $event) || (ctx_r1.node().data[ctx_r1.selectedVersion()].en.isArchived = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_1_Template_p_checkbox_ngModelChange_72_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.markChanges();
      return \u0275\u0275resetView(ctx_r1.syncData(ctx_r1.node(), "isArchived", "ENtoFR"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "label", 62);
    \u0275\u0275text(74);
    \u0275\u0275pipe(75, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "div", 60)(77, "p-checkbox", 63);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_1_Template_p_checkbox_ngModelChange_77_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data[ctx_r1.selectedVersion()].en.noindex, $event) || (ctx_r1.node().data[ctx_r1.selectedVersion()].en.noindex = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_1_Template_p_checkbox_ngModelChange_77_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.markChanges();
      return \u0275\u0275resetView(ctx_r1.syncData(ctx_r1.node(), "noindex", "ENtoFR"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "label", 64);
    \u0275\u0275text(79);
    \u0275\u0275pipe(80, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "div", 60)(82, "p-checkbox", 65);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_1_Template_p_checkbox_ngModelChange_82_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data[ctx_r1.selectedVersion()].en.isOrphan, $event) || (ctx_r1.node().data[ctx_r1.selectedVersion()].en.isOrphan = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_1_Template_p_checkbox_ngModelChange_82_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.markChanges());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "label", 66);
    \u0275\u0275text(84);
    \u0275\u0275pipe(85, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(86, "div", 60)(87, "p-checkbox", 67);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_1_Template_p_checkbox_ngModelChange_87_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data[ctx_r1.selectedVersion()].en.linksToPortal, $event) || (ctx_r1.node().data[ctx_r1.selectedVersion()].en.linksToPortal = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_1_Template_p_checkbox_ngModelChange_87_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.markChanges());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "label", 68);
    \u0275\u0275text(89);
    \u0275\u0275pipe(90, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(91, "div", 60)(92, "p-checkbox", 69);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_1_Template_p_checkbox_ngModelChange_92_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data[ctx_r1.selectedVersion()].en.linksToSignIn, $event) || (ctx_r1.node().data[ctx_r1.selectedVersion()].en.linksToSignIn = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_1_Template_p_checkbox_ngModelChange_92_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.markChanges());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "label", 70);
    \u0275\u0275text(94);
    \u0275\u0275pipe(95, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(96, "div", 60)(97, "p-checkbox", 71);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_1_Template_p_checkbox_ngModelChange_97_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data[ctx_r1.selectedVersion()].en.hasChatbot, $event) || (ctx_r1.node().data[ctx_r1.selectedVersion()].en.hasChatbot = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_1_Template_p_checkbox_ngModelChange_97_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.markChanges());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "label", 72);
    \u0275\u0275text(99);
    \u0275\u0275pipe(100, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(101, "div", 73)(102, "span", 74);
    \u0275\u0275text(103);
    \u0275\u0275pipe(104, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "span");
    \u0275\u0275pipe(106, "date");
    \u0275\u0275pipe(107, "date");
    \u0275\u0275text(108);
    \u0275\u0275pipe(109, "date");
    \u0275\u0275pipe(110, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(111, "div", 73)(112, "span", 74);
    \u0275\u0275text(113);
    \u0275\u0275pipe(114, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(115);
    \u0275\u0275pipe(116, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "div", 73)(118, "span", 74);
    \u0275\u0275text(119);
    \u0275\u0275pipe(120, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(121, "span");
    \u0275\u0275text(122);
    \u0275\u0275pipe(123, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(124, "div", 73)(125, "span", 74);
    \u0275\u0275text(126);
    \u0275\u0275pipe(127, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(128, "span");
    \u0275\u0275text(129);
    \u0275\u0275pipe(130, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(131, "div", 73)(132, "span", 74);
    \u0275\u0275text(133);
    \u0275\u0275pipe(134, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(135, "span");
    \u0275\u0275text(136);
    \u0275\u0275pipe(137, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(138, "div", 73)(139, "span", 74);
    \u0275\u0275text(140);
    \u0275\u0275pipe(141, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(142);
    \u0275\u0275pipe(143, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(144, "div", 73)(145, "span", 74);
    \u0275\u0275text(146);
    \u0275\u0275pipe(147, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(148, "span");
    \u0275\u0275text(149);
    \u0275\u0275pipe(150, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(151, "div", 73)(152, "span", 74);
    \u0275\u0275text(153);
    \u0275\u0275pipe(154, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(155, "span");
    \u0275\u0275text(156);
    \u0275\u0275pipe(157, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(158, EditNodeComponent_Conditional_31_Conditional_1_Conditional_1_Conditional_158_Template, 1, 1, "p-tag", 75);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_92_0;
    let tmp_93_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("legend", \u0275\u0275pipeBind1(1, 119, "common.language.english"));
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", !ctx_r1.urlEditsEnabled() || !!ctx_r1.versionConfig() && !ctx_r1.editsEnabled())("ngModel", ctx_r1.node().data.path.en);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 121, "editNode.path"));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.urlEditsEnabled());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.node().data.status.isNew && ctx_r1.selectedVersion() === "prototype" ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.pathError() ? 12 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.node().data[ctx_r1.selectedVersion()].en.doubleH1);
    \u0275\u0275property("disabled", !!ctx_r1.versionConfig() && !ctx_r1.editsEnabled());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 123, "editNode.doubleh1"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("text-red-500", ctx_r1.node().data[ctx_r1.selectedVersion()].en.h1 === "New page");
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.node().data[ctx_r1.selectedVersion()].en.h1);
    \u0275\u0275property("disabled", !!ctx_r1.versionConfig() && !ctx_r1.editsEnabled());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 125, "editNode.h1"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.node().data[ctx_r1.selectedVersion()].en.template);
    \u0275\u0275property("disabled", !!ctx_r1.versionConfig() && !ctx_r1.editsEnabled())("filter", true)("options", ctx_r1.projectState.templateOptions());
    \u0275\u0275advance();
    \u0275\u0275classProp("text-red-500", ctx_r1.node().data[ctx_r1.selectedVersion()].en.template !== ctx_r1.node().data[ctx_r1.selectedVersion()].fr.template);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 127, "editNode.template"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !!ctx_r1.versionConfig() && !ctx_r1.editsEnabled())("filter", true)("ngModel", ctx_r1.node().data[ctx_r1.selectedVersion()].en.parentPath)("options", ctx_r1.enPages());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 129, "editNode.parent"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.moveError() ? 35 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 131, "editNode.metadata"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.node().data[ctx_r1.selectedVersion()].en.title);
    \u0275\u0275property("disabled", !!ctx_r1.versionConfig() && !ctx_r1.editsEnabled());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 133, "editNode.title"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.node().data[ctx_r1.selectedVersion()].en.description);
    \u0275\u0275property("disabled", !!ctx_r1.versionConfig() && !ctx_r1.editsEnabled());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(48, 135, "editNode.description"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.node().data[ctx_r1.selectedVersion()].en.keywords);
    \u0275\u0275property("disabled", !!ctx_r1.versionConfig() && !ctx_r1.editsEnabled());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(53, 137, "editNode.keywords"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(56, 139, "editNode.pageOwner"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.node().data[ctx_r1.selectedVersion()].en.owner);
    \u0275\u0275property("disabled", !!ctx_r1.versionConfig() && !ctx_r1.editsEnabled());
    \u0275\u0275advance();
    \u0275\u0275classProp("text-red-500", ctx_r1.node().data[ctx_r1.selectedVersion()].en.owner !== ctx_r1.node().data[ctx_r1.selectedVersion()].fr.owner);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(61, 141, "editNode.owner"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.node().data[ctx_r1.selectedVersion()].en.email);
    \u0275\u0275property("disabled", !!ctx_r1.versionConfig() && !ctx_r1.editsEnabled());
    \u0275\u0275advance();
    \u0275\u0275classProp("text-red-500", ctx_r1.node().data[ctx_r1.selectedVersion()].en.email !== ctx_r1.node().data[ctx_r1.selectedVersion()].fr.email);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(66, 143, "editNode.email"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(69, 145, "editNode.info"));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.node().data[ctx_r1.selectedVersion()].en.isArchived);
    \u0275\u0275property("binary", true)("disabled", !!ctx_r1.versionConfig() && !ctx_r1.editsEnabled());
    \u0275\u0275advance();
    \u0275\u0275classProp("text-red-500", ctx_r1.node().data[ctx_r1.selectedVersion()].en.isArchived !== ctx_r1.node().data[ctx_r1.selectedVersion()].fr.isArchived);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(75, 147, "editNode.isArchived"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.node().data[ctx_r1.selectedVersion()].en.noindex);
    \u0275\u0275property("binary", true)("disabled", !!ctx_r1.versionConfig() && !ctx_r1.editsEnabled());
    \u0275\u0275advance();
    \u0275\u0275classProp("text-red-500", ctx_r1.node().data[ctx_r1.selectedVersion()].en.noindex !== ctx_r1.node().data[ctx_r1.selectedVersion()].fr.noindex);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(80, 149, "editNode.noindex"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.node().data[ctx_r1.selectedVersion()].en.isOrphan);
    \u0275\u0275property("binary", true)("disabled", ctx_r1.selectedVersion() === "prototype" ? !ctx_r1.urlEditsEnabled() : !ctx_r1.editsEnabled());
    \u0275\u0275advance();
    \u0275\u0275classProp("text-red-500", ctx_r1.node().data[ctx_r1.selectedVersion()].en.isOrphan !== ctx_r1.node().data[ctx_r1.selectedVersion()].fr.isOrphan);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(85, 151, "editNode.isOrphan"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.node().data[ctx_r1.selectedVersion()].en.linksToPortal);
    \u0275\u0275property("binary", true)("disabled", ctx_r1.selectedVersion() === "prototype" ? !ctx_r1.urlEditsEnabled() : !ctx_r1.editsEnabled());
    \u0275\u0275advance();
    \u0275\u0275classProp("text-red-500", ctx_r1.node().data[ctx_r1.selectedVersion()].en.linksToPortal !== ctx_r1.node().data[ctx_r1.selectedVersion()].fr.linksToPortal);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(90, 153, "editNode.linksToPortal"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.node().data[ctx_r1.selectedVersion()].en.linksToSignIn);
    \u0275\u0275property("binary", true)("disabled", ctx_r1.selectedVersion() === "prototype" ? !ctx_r1.urlEditsEnabled() : !ctx_r1.editsEnabled());
    \u0275\u0275advance();
    \u0275\u0275classProp("text-red-500", ctx_r1.node().data[ctx_r1.selectedVersion()].en.linksToSignIn !== ctx_r1.node().data[ctx_r1.selectedVersion()].fr.linksToSignIn);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(95, 155, "editNode.linksToSignIn"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.node().data[ctx_r1.selectedVersion()].en.hasChatbot);
    \u0275\u0275property("binary", true)("disabled", ctx_r1.selectedVersion() === "prototype" ? !ctx_r1.urlEditsEnabled() : !ctx_r1.editsEnabled());
    \u0275\u0275advance();
    \u0275\u0275classProp("text-red-500", ctx_r1.node().data[ctx_r1.selectedVersion()].en.hasChatbot !== ctx_r1.node().data[ctx_r1.selectedVersion()].fr.hasChatbot);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(100, 157, "editNode.hasChatbot"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(104, 159, "editNode.lastPublished"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-red-500", \u0275\u0275pipeBind1(106, 161, ctx_r1.node().data[ctx_r1.selectedVersion()].en.lastPublished) !== \u0275\u0275pipeBind1(107, 163, ctx_r1.node().data[ctx_r1.selectedVersion()].fr.lastPublished));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(109, 165, ctx_r1.node().data[ctx_r1.selectedVersion()].en.lastPublished) ?? \u0275\u0275pipeBind1(110, 167, "common.never"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(114, 169, "editNode.wordCount"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(116, 171, ctx_r1.node().data[ctx_r1.selectedVersion()].en.wordCount) ?? "\u2014", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(120, 173, "editNode.linkCount"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-red-500", ctx_r1.node().data[ctx_r1.selectedVersion()].en.linkCount !== ctx_r1.node().data[ctx_r1.selectedVersion()].fr.linkCount);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(123, 175, ctx_r1.node().data[ctx_r1.selectedVersion()].en.linkCount) ?? "\u2014", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(127, 177, "editNode.vanityCount"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-red-500", ctx_r1.node().data.vanity.en.length !== ctx_r1.node().data.vanity.fr.length);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(130, 179, ctx_r1.node().data.vanity.en.length) ?? "\u2014", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(134, 181, "editNode.phoneCount"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-red-500", ((tmp_92_0 = ctx_r1.node().data[ctx_r1.selectedVersion()].en.phoneNumbers) == null ? null : tmp_92_0.length) !== ((tmp_92_0 = ctx_r1.node().data[ctx_r1.selectedVersion()].fr.phoneNumbers) == null ? null : tmp_92_0.length));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(137, 183, (tmp_93_0 = ctx_r1.node().data[ctx_r1.selectedVersion()].en.phoneNumbers) == null ? null : tmp_93_0.length) ?? "\u2014", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(141, 185, "editNode.visits"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(143, 187, ctx_r1.node().data[ctx_r1.selectedVersion()].en.visits) ?? "\u2014", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(147, 189, "common.readability.fleschKincaid"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-orange-400", ctx_r1.node().data[ctx_r1.selectedVersion()].en.fleschKincaid < 12 && ctx_r1.node().data[ctx_r1.selectedVersion()].en.fleschKincaid > 8)("text-red-500", ctx_r1.node().data[ctx_r1.selectedVersion()].en.fleschKincaid >= 12);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(150, 191, ctx_r1.node().data[ctx_r1.selectedVersion()].en.fleschKincaid) ?? "\u2014", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(154, 193, "common.readability.gunningFog"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-orange-400", ctx_r1.node().data[ctx_r1.selectedVersion()].en.gunningFog < 12 && ctx_r1.node().data[ctx_r1.selectedVersion()].en.gunningFog > 8)("text-red-500", ctx_r1.node().data[ctx_r1.selectedVersion()].en.gunningFog >= 12);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(157, 195, ctx_r1.node().data[ctx_r1.selectedVersion()].en.gunningFog) ?? "\u2014", " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.node().data[ctx_r1.selectedVersion()].en.is404 ? 158 : -1);
  }
}
function EditNodeComponent_Conditional_31_Conditional_1_Conditional_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-iftalabel")(1, "input", 112);
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_2_Conditional_11_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onFragmentInput($event, "en"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 113);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-red-500", ctx_r1.pathFR().startsWith("nouvelle-page"));
    \u0275\u0275property("disabled", !!ctx_r1.versionConfig() && !ctx_r1.editsEnabled())("ngModel", ctx_r1.pathFR());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, "editNode.pageUrl"));
  }
}
function EditNodeComponent_Conditional_31_Conditional_1_Conditional_2_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78)(1, "span", 79);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r11 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(page_r11.label);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", page_r11.path, " ");
  }
}
function EditNodeComponent_Conditional_31_Conditional_1_Conditional_2_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-message", 39)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "editNode.moveError"));
  }
}
function EditNodeComponent_Conditional_31_Conditional_1_Conditional_2_Conditional_157_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-tag", 75);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("severity", ctx_r1.node().data[ctx_r1.selectedVersion()].en.is404 === ctx_r1.node().data[ctx_r1.selectedVersion()].fr.is404 ? void 0 : "danger");
  }
}
function EditNodeComponent_Conditional_31_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-fieldset", 30);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "div", 34)(3, "p-inputgroup")(4, "p-iftalabel")(5, "input", 80);
    \u0275\u0275listener("blur", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_2_Template_input_blur_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.updateFragment("fr"));
    })("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_2_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onPathInput($event, "fr"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "label", 81);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p-inputgroup-addon", 37)(10, "p-button", 38);
    \u0275\u0275listener("onClick", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_2_Template_p_button_onClick_10_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.enableUrlEdits());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(11, EditNodeComponent_Conditional_31_Conditional_1_Conditional_2_Conditional_11_Template, 5, 7, "p-iftalabel");
    \u0275\u0275elementStart(12, "p-iftalabel")(13, "input", 82);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_2_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data[ctx_r1.selectedVersion()].fr.doubleH1, $event) || (ctx_r1.node().data[ctx_r1.selectedVersion()].fr.doubleH1 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_2_Template_input_ngModelChange_13_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.markChanges());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "label", 83);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "p-iftalabel")(18, "input", 84);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_2_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data[ctx_r1.selectedVersion()].fr.h1, $event) || (ctx_r1.node().data[ctx_r1.selectedVersion()].fr.h1 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_2_Template_input_ngModelChange_18_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.markChanges();
      return \u0275\u0275resetView(ctx_r1.syncNewName(ctx_r1.node(), ctx_r1.selectedVersion(), "fr"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "label", 85);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "p-iftalabel")(23, "p-select", 86);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_2_Template_p_select_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data[ctx_r1.selectedVersion()].fr.template, $event) || (ctx_r1.node().data[ctx_r1.selectedVersion()].fr.template = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_2_Template_p_select_ngModelChange_23_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.markChanges();
      return \u0275\u0275resetView(ctx_r1.syncData(ctx_r1.node(), "template", "FRtoEN"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "label", 87);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "p-iftalabel")(28, "p-select", 88);
    \u0275\u0275listener("onChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_2_Template_p_select_onChange_28_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.moveNode(ctx_r1.node(), $event.value, "fr", ctx_r1.selectedVersion()));
    });
    \u0275\u0275template(29, EditNodeComponent_Conditional_31_Conditional_1_Conditional_2_ng_template_29_Template, 4, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "label", 89);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(34, EditNodeComponent_Conditional_31_Conditional_1_Conditional_2_Conditional_34_Template, 4, 3, "p-message", 39);
    \u0275\u0275elementStart(35, "h3", 48);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "p-iftalabel")(39, "input", 90);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_2_Template_input_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data[ctx_r1.selectedVersion()].fr.title, $event) || (ctx_r1.node().data[ctx_r1.selectedVersion()].fr.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_2_Template_input_ngModelChange_39_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.markChanges());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "label", 91);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "p-iftalabel")(44, "textarea", 92);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_2_Template_textarea_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data[ctx_r1.selectedVersion()].fr.description, $event) || (ctx_r1.node().data[ctx_r1.selectedVersion()].fr.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_2_Template_textarea_ngModelChange_44_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.markChanges());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "label", 93);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "p-iftalabel")(49, "textarea", 94);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_2_Template_textarea_ngModelChange_49_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data[ctx_r1.selectedVersion()].fr.keywords, $event) || (ctx_r1.node().data[ctx_r1.selectedVersion()].fr.keywords = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_2_Template_textarea_ngModelChange_49_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.markChanges());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "label", 95);
    \u0275\u0275text(51);
    \u0275\u0275pipe(52, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "h3", 48);
    \u0275\u0275text(54);
    \u0275\u0275pipe(55, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "p-iftalabel")(57, "input", 96);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_2_Template_input_ngModelChange_57_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data[ctx_r1.selectedVersion()].fr.owner, $event) || (ctx_r1.node().data[ctx_r1.selectedVersion()].fr.owner = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_2_Template_input_ngModelChange_57_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.markChanges();
      return \u0275\u0275resetView(ctx_r1.syncData(ctx_r1.node(), "owner", "FRtoEN"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "label", 97);
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "p-iftalabel")(62, "input", 98);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_2_Template_input_ngModelChange_62_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data[ctx_r1.selectedVersion()].fr.email, $event) || (ctx_r1.node().data[ctx_r1.selectedVersion()].fr.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_2_Template_input_ngModelChange_62_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.markChanges();
      return \u0275\u0275resetView(ctx_r1.syncData(ctx_r1.node(), "email", "FRtoEN"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "label", 99);
    \u0275\u0275text(64);
    \u0275\u0275pipe(65, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "h3", 48);
    \u0275\u0275text(67);
    \u0275\u0275pipe(68, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "div", 59)(70, "div", 60)(71, "p-checkbox", 100);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_2_Template_p_checkbox_ngModelChange_71_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data[ctx_r1.selectedVersion()].fr.isArchived, $event) || (ctx_r1.node().data[ctx_r1.selectedVersion()].fr.isArchived = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_2_Template_p_checkbox_ngModelChange_71_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.markChanges();
      return \u0275\u0275resetView(ctx_r1.syncData(ctx_r1.node(), "isArchived", "FRtoEN"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "label", 101);
    \u0275\u0275text(73);
    \u0275\u0275pipe(74, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "div", 60)(76, "p-checkbox", 102);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_2_Template_p_checkbox_ngModelChange_76_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data[ctx_r1.selectedVersion()].fr.noindex, $event) || (ctx_r1.node().data[ctx_r1.selectedVersion()].fr.noindex = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_2_Template_p_checkbox_ngModelChange_76_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.markChanges();
      return \u0275\u0275resetView(ctx_r1.syncData(ctx_r1.node(), "noindex", "FRtoEN"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "label", 103);
    \u0275\u0275text(78);
    \u0275\u0275pipe(79, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "div", 60)(81, "p-checkbox", 104);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_2_Template_p_checkbox_ngModelChange_81_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data[ctx_r1.selectedVersion()].fr.isOrphan, $event) || (ctx_r1.node().data[ctx_r1.selectedVersion()].fr.isOrphan = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_2_Template_p_checkbox_ngModelChange_81_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.markChanges());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "label", 105);
    \u0275\u0275text(83);
    \u0275\u0275pipe(84, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "div", 60)(86, "p-checkbox", 106);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_2_Template_p_checkbox_ngModelChange_86_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data[ctx_r1.selectedVersion()].fr.linksToPortal, $event) || (ctx_r1.node().data[ctx_r1.selectedVersion()].fr.linksToPortal = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_2_Template_p_checkbox_ngModelChange_86_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.markChanges());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "label", 107);
    \u0275\u0275text(88);
    \u0275\u0275pipe(89, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(90, "div", 60)(91, "p-checkbox", 108);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_2_Template_p_checkbox_ngModelChange_91_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data[ctx_r1.selectedVersion()].fr.linksToSignIn, $event) || (ctx_r1.node().data[ctx_r1.selectedVersion()].fr.linksToSignIn = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_2_Template_p_checkbox_ngModelChange_91_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.markChanges());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "label", 109);
    \u0275\u0275text(93);
    \u0275\u0275pipe(94, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(95, "div", 60)(96, "p-checkbox", 110);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_2_Template_p_checkbox_ngModelChange_96_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data[ctx_r1.selectedVersion()].fr.hasChatbot, $event) || (ctx_r1.node().data[ctx_r1.selectedVersion()].fr.hasChatbot = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_1_Conditional_2_Template_p_checkbox_ngModelChange_96_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.markChanges());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "label", 111);
    \u0275\u0275text(98);
    \u0275\u0275pipe(99, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(100, "div", 73)(101, "span", 74);
    \u0275\u0275text(102);
    \u0275\u0275pipe(103, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "span");
    \u0275\u0275pipe(105, "date");
    \u0275\u0275pipe(106, "date");
    \u0275\u0275text(107);
    \u0275\u0275pipe(108, "date");
    \u0275\u0275pipe(109, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(110, "div", 73)(111, "span", 74);
    \u0275\u0275text(112);
    \u0275\u0275pipe(113, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(114);
    \u0275\u0275pipe(115, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "div", 73)(117, "span", 74);
    \u0275\u0275text(118);
    \u0275\u0275pipe(119, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(120, "span");
    \u0275\u0275text(121);
    \u0275\u0275pipe(122, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(123, "div", 73)(124, "span", 74);
    \u0275\u0275text(125);
    \u0275\u0275pipe(126, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(127, "span");
    \u0275\u0275text(128);
    \u0275\u0275pipe(129, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(130, "div", 73)(131, "span", 74);
    \u0275\u0275text(132);
    \u0275\u0275pipe(133, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(134, "span");
    \u0275\u0275text(135);
    \u0275\u0275pipe(136, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(137, "div", 73)(138, "span", 74);
    \u0275\u0275text(139);
    \u0275\u0275pipe(140, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(141);
    \u0275\u0275pipe(142, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(143, "div", 73)(144, "span", 74);
    \u0275\u0275text(145);
    \u0275\u0275pipe(146, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(147, "span");
    \u0275\u0275text(148);
    \u0275\u0275pipe(149, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(150, "div", 73)(151, "span", 74);
    \u0275\u0275text(152);
    \u0275\u0275pipe(153, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(154, "span");
    \u0275\u0275text(155);
    \u0275\u0275pipe(156, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(157, EditNodeComponent_Conditional_31_Conditional_1_Conditional_2_Conditional_157_Template, 1, 1, "p-tag", 75);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_91_0;
    let tmp_92_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("legend", \u0275\u0275pipeBind1(1, 118, "common.language.french"));
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", !ctx_r1.urlEditsEnabled() || !!ctx_r1.versionConfig() && !ctx_r1.editsEnabled())("ngModel", ctx_r1.node().data.path.fr);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 120, "editNode.path"));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.urlEditsEnabled());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.node().data.status.isNew && ctx_r1.selectedVersion() === "prototype" ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.node().data[ctx_r1.selectedVersion()].fr.doubleH1);
    \u0275\u0275property("disabled", !!ctx_r1.versionConfig() && !ctx_r1.editsEnabled());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 122, "editNode.doubleh1"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("text-red-500", ctx_r1.node().data[ctx_r1.selectedVersion()].fr.h1 === "Nouvelle page");
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.node().data[ctx_r1.selectedVersion()].fr.h1);
    \u0275\u0275property("disabled", !!ctx_r1.versionConfig() && !ctx_r1.editsEnabled());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 124, "editNode.h1"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.node().data[ctx_r1.selectedVersion()].fr.template);
    \u0275\u0275property("disabled", !!ctx_r1.versionConfig() && !ctx_r1.editsEnabled())("filter", true)("options", ctx_r1.projectState.templateOptions());
    \u0275\u0275advance();
    \u0275\u0275classProp("text-red-500", ctx_r1.node().data[ctx_r1.selectedVersion()].en.template !== ctx_r1.node().data[ctx_r1.selectedVersion()].fr.template);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 126, "editNode.template"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !!ctx_r1.versionConfig() && !ctx_r1.editsEnabled())("filter", true)("ngModel", ctx_r1.node().data[ctx_r1.selectedVersion()].fr.parentPath)("options", ctx_r1.frPages());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 128, "editNode.parent"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.moveError() ? 34 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 130, "editNode.metadata"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.node().data[ctx_r1.selectedVersion()].fr.title);
    \u0275\u0275property("disabled", !!ctx_r1.versionConfig() && !ctx_r1.editsEnabled());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(42, 132, "editNode.title"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.node().data[ctx_r1.selectedVersion()].fr.description);
    \u0275\u0275property("disabled", !!ctx_r1.versionConfig() && !ctx_r1.editsEnabled());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(47, 134, "editNode.description"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.node().data[ctx_r1.selectedVersion()].fr.keywords);
    \u0275\u0275property("disabled", !!ctx_r1.versionConfig() && !ctx_r1.editsEnabled());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(52, 136, "editNode.keywords"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(55, 138, "editNode.pageOwner"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.node().data[ctx_r1.selectedVersion()].fr.owner);
    \u0275\u0275property("disabled", !!ctx_r1.versionConfig() && !ctx_r1.editsEnabled());
    \u0275\u0275advance();
    \u0275\u0275classProp("text-red-500", ctx_r1.node().data[ctx_r1.selectedVersion()].en.owner !== ctx_r1.node().data[ctx_r1.selectedVersion()].fr.owner);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(60, 140, "editNode.owner"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.node().data[ctx_r1.selectedVersion()].fr.email);
    \u0275\u0275property("disabled", !!ctx_r1.versionConfig() && !ctx_r1.editsEnabled());
    \u0275\u0275advance();
    \u0275\u0275classProp("text-red-500", ctx_r1.node().data[ctx_r1.selectedVersion()].en.email !== ctx_r1.node().data[ctx_r1.selectedVersion()].fr.email);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(65, 142, "editNode.email"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(68, 144, "editNode.info"));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.node().data[ctx_r1.selectedVersion()].fr.isArchived);
    \u0275\u0275property("binary", true)("disabled", !!ctx_r1.versionConfig() && !ctx_r1.editsEnabled());
    \u0275\u0275advance();
    \u0275\u0275classProp("text-red-500", ctx_r1.node().data[ctx_r1.selectedVersion()].en.isArchived !== ctx_r1.node().data[ctx_r1.selectedVersion()].fr.isArchived);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(74, 146, "editNode.isArchived"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.node().data[ctx_r1.selectedVersion()].fr.noindex);
    \u0275\u0275property("binary", true)("disabled", !!ctx_r1.versionConfig() && !ctx_r1.editsEnabled());
    \u0275\u0275advance();
    \u0275\u0275classProp("text-red-500", ctx_r1.node().data[ctx_r1.selectedVersion()].en.noindex !== ctx_r1.node().data[ctx_r1.selectedVersion()].fr.noindex);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(79, 148, "editNode.noindex"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.node().data[ctx_r1.selectedVersion()].fr.isOrphan);
    \u0275\u0275property("binary", true)("disabled", ctx_r1.selectedVersion() === "prototype" ? !ctx_r1.urlEditsEnabled() : !ctx_r1.editsEnabled());
    \u0275\u0275advance();
    \u0275\u0275classProp("text-red-500", ctx_r1.node().data[ctx_r1.selectedVersion()].en.isOrphan !== ctx_r1.node().data[ctx_r1.selectedVersion()].fr.isOrphan);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(84, 150, "editNode.isOrphan"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.node().data[ctx_r1.selectedVersion()].fr.linksToPortal);
    \u0275\u0275property("binary", true)("disabled", ctx_r1.selectedVersion() === "prototype" ? !ctx_r1.urlEditsEnabled() : !ctx_r1.editsEnabled());
    \u0275\u0275advance();
    \u0275\u0275classProp("text-red-500", ctx_r1.node().data[ctx_r1.selectedVersion()].en.linksToPortal !== ctx_r1.node().data[ctx_r1.selectedVersion()].fr.linksToPortal);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(89, 152, "editNode.linksToPortal"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.node().data[ctx_r1.selectedVersion()].fr.linksToSignIn);
    \u0275\u0275property("binary", true)("disabled", ctx_r1.selectedVersion() === "prototype" ? !ctx_r1.urlEditsEnabled() : !ctx_r1.editsEnabled());
    \u0275\u0275advance();
    \u0275\u0275classProp("text-red-500", ctx_r1.node().data[ctx_r1.selectedVersion()].en.linksToSignIn !== ctx_r1.node().data[ctx_r1.selectedVersion()].fr.linksToSignIn);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(94, 154, "editNode.linksToSignIn"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.node().data[ctx_r1.selectedVersion()].fr.hasChatbot);
    \u0275\u0275property("binary", true)("disabled", ctx_r1.selectedVersion() === "prototype" ? !ctx_r1.urlEditsEnabled() : !ctx_r1.editsEnabled());
    \u0275\u0275advance();
    \u0275\u0275classProp("text-red-500", ctx_r1.node().data[ctx_r1.selectedVersion()].en.hasChatbot !== ctx_r1.node().data[ctx_r1.selectedVersion()].fr.hasChatbot);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(99, 156, "editNode.hasChatbot"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(103, 158, "editNode.lastPublished"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-red-500", \u0275\u0275pipeBind1(105, 160, ctx_r1.node().data[ctx_r1.selectedVersion()].en.lastPublished) !== \u0275\u0275pipeBind1(106, 162, ctx_r1.node().data[ctx_r1.selectedVersion()].fr.lastPublished));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(108, 164, ctx_r1.node().data[ctx_r1.selectedVersion()].fr.lastPublished) ?? \u0275\u0275pipeBind1(109, 166, "common.never"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(113, 168, "editNode.wordCount"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(115, 170, ctx_r1.node().data[ctx_r1.selectedVersion()].fr.wordCount) ?? "\u2014", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(119, 172, "editNode.linkCount"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-red-500", ctx_r1.node().data[ctx_r1.selectedVersion()].en.linkCount !== ctx_r1.node().data[ctx_r1.selectedVersion()].fr.linkCount);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(122, 174, ctx_r1.node().data[ctx_r1.selectedVersion()].fr.linkCount) ?? "\u2014", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(126, 176, "editNode.vanityCount"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-red-500", ctx_r1.node().data.vanity.en.length !== ctx_r1.node().data.vanity.fr.length);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(129, 178, ctx_r1.node().data.vanity.fr.length) ?? "\u2014", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(133, 180, "editNode.phoneCount"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-red-500", ((tmp_91_0 = ctx_r1.node().data[ctx_r1.selectedVersion()].en.phoneNumbers) == null ? null : tmp_91_0.length) !== ((tmp_91_0 = ctx_r1.node().data[ctx_r1.selectedVersion()].fr.phoneNumbers) == null ? null : tmp_91_0.length));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(136, 182, (tmp_92_0 = ctx_r1.node().data[ctx_r1.selectedVersion()].fr.phoneNumbers) == null ? null : tmp_92_0.length) ?? "\u2014", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(140, 184, "editNode.visits"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(142, 186, ctx_r1.node().data[ctx_r1.selectedVersion()].fr.visits) ?? "\u2014", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(146, 188, "common.readability.fleschKincaid"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-orange-400", ctx_r1.node().data[ctx_r1.selectedVersion()].fr.fleschKincaid < 12 && ctx_r1.node().data[ctx_r1.selectedVersion()].fr.fleschKincaid > 8)("text-red-500", ctx_r1.node().data[ctx_r1.selectedVersion()].fr.fleschKincaid >= 12);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(149, 190, ctx_r1.node().data[ctx_r1.selectedVersion()].fr.fleschKincaid) ?? "\u2014", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(153, 192, "common.readability.gunningFog"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-orange-400", ctx_r1.node().data[ctx_r1.selectedVersion()].fr.gunningFog < 12 && ctx_r1.node().data[ctx_r1.selectedVersion()].fr.gunningFog > 8)("text-red-500", ctx_r1.node().data[ctx_r1.selectedVersion()].fr.gunningFog >= 12);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(156, 194, ctx_r1.node().data[ctx_r1.selectedVersion()].fr.gunningFog) ?? "\u2014", " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.node().data[ctx_r1.selectedVersion()].fr.is404 ? 157 : -1);
  }
}
function EditNodeComponent_Conditional_31_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275conditionalCreate(1, EditNodeComponent_Conditional_31_Conditional_1_Conditional_1_Template, 159, 197, "p-fieldset", 30);
    \u0275\u0275conditionalCreate(2, EditNodeComponent_Conditional_31_Conditional_1_Conditional_2_Template, 158, 196, "p-fieldset", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.selectedLanguage() !== "fr" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.selectedLanguage() !== "en" ? 2 : -1);
  }
}
function EditNodeComponent_Conditional_31_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-fieldset", 30);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "div", 34)(3, "p-iftalabel")(4, "textarea", 114);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_2_Template_textarea_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data.notes.issue, $event) || (ctx_r1.node().data.notes.issue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_2_Template_textarea_ngModelChange_4_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.markChanges());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "label", 115);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p-iftalabel")(9, "textarea", 116);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_2_Template_textarea_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data.notes.solution, $event) || (ctx_r1.node().data.notes.solution = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_Conditional_31_Conditional_2_Template_textarea_ngModelChange_9_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.markChanges());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "label", 117);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("legend", \u0275\u0275pipeBind1(1, 5, "editNode.notes"));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.node().data.notes.issue);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 7, "inventory.header.issue"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.node().data.notes.solution);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 9, "inventory.header.solution"));
  }
}
function EditNodeComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275conditionalCreate(1, EditNodeComponent_Conditional_31_Conditional_1_Template, 3, 2, "div", 29)(2, EditNodeComponent_Conditional_31_Conditional_2_Template, 13, 11, "p-fieldset", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 31)(4, "p-button", 32);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275listener("onClick", function EditNodeComponent_Conditional_31_Template_p_button_onClick_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p-button", 33);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275listener("onClick", function EditNodeComponent_Conditional_31_Template_p_button_onClick_6_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.toggleNotes() ? 1 : ((tmp_1_0 = ctx_r1.node().data) == null ? null : tmp_1_0.notes) ? 2 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(5, 4, "common.cancel"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.hasChanges() || ctx_r1.pathError() || ctx_r1.moveError())("label", \u0275\u0275pipeBind1(7, 6, "common.save"));
  }
}
var EditNodeComponent = class _EditNodeComponent {
  projectState = inject(ProjectStateService);
  translate = inject(TranslateService);
  node = input.required(...ngDevMode ? [{ debugName: "node" }] : (
    /* istanbul ignore next */
    []
  ));
  isOpen = input(false, ...ngDevMode ? [{ debugName: "isOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  initialShowNotes = input(false, ...ngDevMode ? [{ debugName: "initialShowNotes" }] : (
    /* istanbul ignore next */
    []
  ));
  dialogClose = output();
  originalData = signal(null, ...ngDevMode ? [{ debugName: "originalData" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedLanguage = signal(this.projectState.detectPrimaryLanguage(), ...ngDevMode ? [{ debugName: "selectedLanguage" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedVersion = signal("prototype", ...ngDevMode ? [{ debugName: "selectedVersion" }] : (
    /* istanbul ignore next */
    []
  ));
  pathEN = signal("", ...ngDevMode ? [{ debugName: "pathEN" }] : (
    /* istanbul ignore next */
    []
  ));
  pathFR = signal("", ...ngDevMode ? [{ debugName: "pathFR" }] : (
    /* istanbul ignore next */
    []
  ));
  autoPath = signal({ en: false, fr: false }, ...ngDevMode ? [{ debugName: "autoPath" }] : (
    /* istanbul ignore next */
    []
  ));
  hasChanges = signal(false, ...ngDevMode ? [{ debugName: "hasChanges" }] : (
    /* istanbul ignore next */
    []
  ));
  moveError = signal(false, ...ngDevMode ? [{ debugName: "moveError" }] : (
    /* istanbul ignore next */
    []
  ));
  pathError = signal(false, ...ngDevMode ? [{ debugName: "pathError" }] : (
    /* istanbul ignore next */
    []
  ));
  editsEnabled = signal(false, ...ngDevMode ? [{ debugName: "editsEnabled" }] : (
    /* istanbul ignore next */
    []
  ));
  urlEditsEnabled = signal(false, ...ngDevMode ? [{ debugName: "urlEditsEnabled" }] : (
    /* istanbul ignore next */
    []
  ));
  toggleNotes = signal(this.initialShowNotes(), ...ngDevMode ? [{ debugName: "toggleNotes" }] : (
    /* istanbul ignore next */
    []
  ));
  DEFAULT_H1 = { en: "New page", fr: "Nouvelle page" };
  markChanges() {
    this.hasChanges.set(true);
  }
  constructor() {
    effect(() => {
      const node = this.node();
      const open = this.isOpen();
      const isAuto = (lang) => {
        const fragment = node.data.path[lang].split("/").pop()?.replace(".html", "") ?? "";
        const isPlaceholder = lang === "en" ? fragment.startsWith("new-page-") : fragment.startsWith("nouvelle-page-");
        return isPlaceholder || this.projectState.sanitizeUrlFragment(node.data.prototype[lang].h1 ?? "") === fragment;
      };
      if (open && node?.data) {
        this.originalData.set(structuredClone(node.data));
        this.selectedVersion.set("prototype");
        this.pathEN.set(node.data.path.en.split("/").pop());
        this.pathFR.set(node.data.path.fr.split("/").pop());
        this.autoPath.set({ en: isAuto("en"), fr: isAuto("fr") });
        this.hasChanges.set(false);
        this.moveError.set(false);
        this.pathError.set(false);
        this.editsEnabled.set(false);
        this.urlEditsEnabled.set(false);
        this.toggleNotes.set(this.initialShowNotes());
      }
    });
  }
  save() {
    this.projectState.setModifiedDate();
    this.hasChanges.set(false);
    this.toggleNotes.set(false);
    this.originalData.set(structuredClone(this.node().data));
    this.dialogClose.emit();
  }
  cancel() {
    Object.assign(this.node().data, structuredClone(this.originalData()));
    this.hasChanges.set(false);
    this.toggleNotes.set(false);
    this.dialogClose.emit();
  }
  enableEdits() {
    this.editsEnabled.set(true);
  }
  enableUrlEdits() {
    this.urlEditsEnabled.set(true);
  }
  refresh() {
    return __async(this, null, function* () {
      const version = this.selectedVersion();
      const repoType = this.projectState.getProject().repoType === "github" ? "GH" : "UT";
      const urlVersion = version === "live" ? "live" : version === "prototype" ? `proto${repoType}` : `base${repoType}`;
      this.projectState.refreshing.update((r) => __spreadProps(__spreadValues({}, r), { [version]: true }));
      yield this.projectState.refreshNode(this.node(), urlVersion);
      this.projectState.refreshing.update((r) => __spreadProps(__spreadValues({}, r), { [version]: false }));
      this.hasChanges.set(true);
    });
  }
  syncData(node, field, direction) {
    if (direction === "ENtoFR") {
      node.data[this.selectedVersion()].fr[field] = node.data[this.selectedVersion()].en[field];
    }
    if (direction === "FRtoEN") {
      node.data[this.selectedVersion()].en[field] = node.data[this.selectedVersion()].fr[field];
    }
  }
  /** Try to set full path, returns false and sets pathError if path is a duplicate */
  trySetPath(newPath, lang) {
    const existingNode = this.projectState.findNodeByPath(this.projectState.getProjectTree(), newPath, lang);
    if (existingNode && existingNode !== this.node()) {
      this.pathError.set(true);
      return false;
    }
    this.pathError.set(false);
    this.node().data.path[lang] = newPath;
    this.markChanges();
    return true;
  }
  /** Update full path from final segment input */
  updatePath(lang) {
    const suffix = (lang === "fr" ? this.pathFR() : this.pathEN()).replace(".html", "");
    const prefix = this.node().parent?.data.path[lang].replaceAll(".html", "") ?? this.node().data.path[lang].split("/").slice(0, -1).join("/");
    return this.trySetPath(`${prefix}/${suffix}.html`, lang);
  }
  /** Update full path from full path input */
  onPathInput(value, lang) {
    this.trySetPath(this.projectState.sanitizeUrlPath(value), lang);
  }
  /** Update final segment from final segment input then sync to full path */
  onFragmentInput(value, lang) {
    const sanitized = this.projectState.sanitizeUrlFragment(value);
    (lang === "fr" ? this.pathFR : this.pathEN).set(sanitized);
    this.autoPath.update((a) => __spreadProps(__spreadValues({}, a), { [lang]: false }));
    this.updatePath(lang);
  }
  /** Sync final segment signal after full path changes (on blur) */
  updateFragment(lang) {
    if (!this.node().data.status.isNew)
      return;
    (lang === "fr" ? this.pathFR : this.pathEN).set(this.node().data.path[lang].split("/").pop());
  }
  /** Sync name to all versions and to url for new pages until they go live */
  syncNewName(node, version, lang) {
    if (version !== "prototype" || !node.data.live[lang].is404)
      return;
    const h1 = node.data.prototype[lang].h1;
    node.data.baseline[lang].h1 = h1;
    node.data.live[lang].h1 = h1;
    if (!this.autoPath()[lang])
      return;
    if (h1?.trim() === this.DEFAULT_H1[lang])
      return;
    const newFragment = this.projectState.sanitizeUrlFragment(h1);
    if (!newFragment)
      return;
    (lang === "fr" ? this.pathFR : this.pathEN).set(newFragment);
    const isUpdated = this.updatePath(lang);
    if (!isUpdated) {
      (lang === "fr" ? this.pathFR : this.pathEN).set(this.node().data.path[lang].split("/").pop()?.replace(".html", "") ?? "");
    }
  }
  moveNode(node, newParentUrl, lang, version) {
    this.moveError.set(false);
    if (version === "prototype") {
      const tree = this.projectState.getProjectTree();
      const newParent = this.projectState.findNodeByPath(tree, newParentUrl, lang);
      if (!newParent)
        return;
      const result = this.projectState.moveNode(node, newParent);
      if (result === "circular") {
        this.moveError.set(true);
        return;
      }
    } else {
      if (node.data[version][lang].parentPath !== newParentUrl) {
        node.data[version][lang].parentPath = newParentUrl;
        this.projectState.setModifiedDate();
        if (version === "baseline") {
          const enMoved = node.data.prototype.en.parentPath !== node.data.baseline.en.parentPath;
          const frMoved = node.data.prototype.fr.parentPath !== node.data.baseline.fr.parentPath;
          node.data.status.isMoved = enMoved || frMoved;
        }
      }
    }
    this.markChanges();
  }
  //Language options
  get languageOptions() {
    return [
      { label: this.translate.instant("common.language.english"), value: "en" },
      { label: this.translate.instant("common.language.french"), value: "fr" },
      { label: this.translate.instant("common.both"), value: "both" }
    ];
  }
  //Version options
  get versionOptions() {
    return [
      { label: this.translate.instant("common.version.prototype"), value: "prototype" },
      { label: this.translate.instant("common.version.live"), value: "live" },
      { label: this.translate.instant("common.version.baseline"), value: "baseline" }
    ];
  }
  //Version-specific warning messages
  versionConfig = computed(() => {
    switch (this.selectedVersion()) {
      case "baseline":
        return { severity: "error", icon: "pi pi-times-circle font-bold", text: this.translate.instant("editNode.baselineWarning") };
      case "live":
        return { severity: "warn", icon: "pi pi-exclamation-triangle font-bold", text: this.translate.instant("editNode.liveWarning") };
      default:
        return null;
    }
  }, ...ngDevMode ? [{ debugName: "versionConfig" }] : (
    /* istanbul ignore next */
    []
  ));
  //Reset editsEnabled whenever selectedVersion changes
  versionWatcher = effect(() => {
    this.selectedVersion();
    this.editsEnabled.set(false);
    this.urlEditsEnabled.set(false);
  }, ...ngDevMode ? [{ debugName: "versionWatcher" }] : (
    /* istanbul ignore next */
    []
  ));
  //Days since refresh
  daysSinceRefresh = computed(() => {
    const data = this.node().data?.[this.selectedVersion()];
    if (!data)
      return null;
    const getDays = (lastChecked) => {
      if (!lastChecked)
        return null;
      const diff = Date.now() - new Date(lastChecked).getTime();
      return Math.floor(diff / (1e3 * 60 * 60 * 24));
    };
    const lang = this.selectedLanguage();
    if (lang === "en")
      return getDays(data.en.lastChecked);
    if (lang === "fr")
      return getDays(data.fr.lastChecked);
    const enDays = getDays(data.en.lastChecked);
    const frDays = getDays(data.fr.lastChecked);
    if (enDays === null && frDays === null)
      return null;
    return Math.max(enDays ?? 0, frDays ?? 0);
  }, ...ngDevMode ? [{ debugName: "daysSinceRefresh" }] : (
    /* istanbul ignore next */
    []
  ));
  //Notes
  editNotes() {
    const node = this.node();
    if (!node.data?.notes) {
      node.data.notes = { issue: "", solution: "" };
    } else if (!node?.data?.notes?.issue) {
      node.data.notes.issue = "";
    } else if (!node?.data?.notes?.solution) {
      node.data.notes.solution = "";
    }
    this.toggleNotes.set(!this.toggleNotes());
  }
  get noteConfig() {
    const node = this.node();
    const hasNotes = (node.data?.notes?.issue?.length ?? 0) + (node.data?.notes?.solution?.length ?? 0) > 0;
    if (this.toggleNotes()) {
      return { label: this.translate.instant("editNode.notes.save"), icon: "pi pi-save" };
    }
    return hasNotes ? { label: this.translate.instant("editNode.notes.edit"), icon: "pi pi-file-edit" } : { label: this.translate.instant("editNode.notes.add"), icon: "pi pi-file-plus" };
  }
  //Parent page dropdown
  enPages = computed(() => this.projectState.getAllPages("en", "live", "all"), ...ngDevMode ? [{ debugName: "enPages" }] : (
    /* istanbul ignore next */
    []
  ));
  frPages = computed(() => this.projectState.getAllPages("fr", "live", "all"), ...ngDevMode ? [{ debugName: "frPages" }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function EditNodeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditNodeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditNodeComponent, selectors: [["aida-edit-node"]], inputs: { node: [1, "node"], isOpen: [1, "isOpen"], initialShowNotes: [1, "initialShowNotes"] }, outputs: { dialogClose: "dialogClose" }, decls: 32, vars: 34, consts: [["item", ""], [1, "flex", "flex-column", "h-full"], [1, "flex", "flex-row", "justify-content-between", "gap-2"], [1, "flex", "flex-row", "flex-wrap", "gap-3"], [1, "flex", "flex-column", "hover:text-primary"], ["for", "lang", 1, "text-xs", "font-semibold"], ["id", "lang", "allowEmpty", "false", "optionLabel", "label", "optionValue", "value", "size", "small", "styleClass", "secondary-outline text-primary max-h-3rem", 3, "ngModelChange", "ngModel", "options"], ["for", "version", 1, "text-xs", "font-semibold"], ["id", "version", "allowEmpty", "false", "optionLabel", "label", "optionValue", "value", "size", "small", "styleClass", "secondary-outline text-primary max-h-3rem", 3, "ngModelChange", "ngModel", "options"], ["for", "refresh", 1, "text-xs", "font-semibold"], ["id", "refresh", 1, "flex", "gap-2", "align-items-center"], ["icon", "pi pi-refresh", "outlined", "", "size", "small", "styleClass", "secondary-outline", 3, "onClick", "disabled", "label", "loading"], [1, "text-sm", "text-color-secondary", "white-space-nowrap"], [1, "flex", "flex-column", "hover:text-primary", "mr-3"], ["for", "status", 1, "text-xs", "font-semibold"], ["fluid", "", "outlined", "", "size", "small", "styleClass", "secondary-outline white-space-nowrap", 3, "onClick", "icon", "label"], ["styleClass", "mt-2", 3, "icon", "severity"], ["id", "status", 1, "flex", "flex-row", "gap-2", "align-items-center", "h-full"], [1, "flex", "gap-1", "align-items-center"], ["inputId", "inScope", "size", "large", 3, "ngModelChange", "ngModel", "binary"], ["for", "inScope"], ["inputId", "isNew", "size", "large", 3, "ngModelChange", "ngModel", "binary"], ["for", "isNew"], ["inputId", "isROT", "size", "large", 3, "ngModelChange", "ngModel", "binary"], ["for", "isROT"], ["inputId", "isMoved", "size", "large", 3, "ngModelChange", "ngModel", "binary"], ["for", "isMoved"], ["icon", "pi pi-file-edit", "outlined", "", "severity", "danger", "size", "small", "styleClass", "secondary-outline white-space-nowrap", 3, "onClick", "disabled", "label"], [1, "flex-1", "overflow-y-auto"], [1, "flex", "flex-row", "gap-2", "min-w-min"], [1, "flex-1", 3, "legend"], [1, "flex", "flex-row", "justify-content-end", "gap-2", "mt-2"], ["icon", "pi pi-times", "severity", "secondary", 3, "onClick", "label"], ["icon", "pi pi-save", "severity", "success", 3, "onClick", "disabled", "label"], [1, "flex", "flex-column", "gap-1"], ["id", "path", "fluid", "", "pInputText", "", "type", "text", "variant", "outlined", 1, "secondary-outline", 3, "blur", "ngModelChange", "disabled", "ngModel"], ["for", "path"], [1, "secondary-outline"], ["icon", "pi pi-pen-to-square", "text", "", 1, "w-full", "h-full", 3, "onClick", "disabled"], ["icon", "pi pi-times-circle font-bold", "severity", "error", "styleClass", "mb-2"], ["id", "doubleh1", "fluid", "", "pInputText", "", "type", "text", "variant", "outlined", 1, "secondary-outline", 3, "ngModelChange", "ngModel", "disabled"], ["for", "doubleh1"], ["id", "h1", "fluid", "", "pInputText", "", "type", "text", "variant", "outlined", 1, "secondary-outline", 3, "ngModelChange", "ngModel", "disabled"], ["for", "h1"], ["id", "template", "appendTo", "body", "filterBy", "label", "fluid", "", "optionLabel", "label", "optionValue", "value", "styleClass", "secondary-outline", 3, "ngModelChange", "ngModel", "disabled", "filter", "options"], ["for", "template"], ["id", "parentPath", "appendTo", "body", "filterBy", "label", "fluid", "", "optionLabel", "label", "optionValue", "path", "styleClass", "secondary-outline", 3, "onChange", "disabled", "filter", "ngModel", "options"], ["for", "parentPath"], [1, "my-0"], ["id", "title", "fluid", "", "pInputText", "", "type", "text", "variant", "outlined", 1, "secondary-outline", 3, "ngModelChange", "ngModel", "disabled"], ["for", "title"], ["id", "description", "autoResize", "true", "fluid", "", "pTextarea", "", "rows", "1", "variant", "outlined", 1, "secondary-outline", 3, "ngModelChange", "ngModel", "disabled"], ["for", "description"], ["id", "keywords", "autoResize", "true", "fluid", "", "pTextarea", "", "rows", "1", "variant", "outlined", 1, "secondary-outline", 3, "ngModelChange", "ngModel", "disabled"], ["for", "keywords"], ["id", "owner", "fluid", "", "pInputText", "", "type", "text", "variant", "outlined", 1, "secondary-outline", 3, "ngModelChange", "ngModel", "disabled"], ["for", "owner"], ["id", "email", "fluid", "", "pInputText", "", "type", "text", "variant", "outlined", 1, "secondary-outline", 3, "ngModelChange", "ngModel", "disabled"], ["for", "email"], [1, "flex", "flex-row", "gap-3", "flex-wrap"], [1, "flex", "align-items-center"], ["inputId", "isArchived", 3, "ngModelChange", "ngModel", "binary", "disabled"], ["for", "isArchived", 1, "ml-2"], ["inputId", "noindex", 3, "ngModelChange", "ngModel", "binary", "disabled"], ["for", "noindex", 1, "ml-2"], ["inputId", "isOrphan", 3, "ngModelChange", "ngModel", "binary", "disabled"], ["for", "isOrphan", 1, "ml-2"], ["inputId", "linksToPortal", 3, "ngModelChange", "ngModel", "binary", "disabled"], ["for", "linksToPortal", 1, "ml-2"], ["inputId", "linksToSignIn", 3, "ngModelChange", "ngModel", "binary", "disabled"], ["for", "linksToSignIn", 1, "ml-2"], ["inputId", "hasChatbot", 3, "ngModelChange", "ngModel", "binary", "disabled"], ["for", "hasChatbot", 1, "ml-2"], [1, "flex", "flex-column", "text-sm", "text-color-secondary"], [1, "font-bold"], ["value", "404", 3, "severity"], ["id", "pathSegment", "fluid", "", "pInputText", "", "type", "text", "variant", "outlined", 1, "secondary-outline", 3, "ngModelChange", "disabled", "ngModel"], ["for", "pathSegment"], [1, "flex", "flex-column"], [1, "font-bold", "-mb-1"], ["id", "path-fr", "fluid", "", "pInputText", "", "type", "text", "variant", "outlined", 1, "secondary-outline", 3, "blur", "ngModelChange", "disabled", "ngModel"], ["for", "path-fr"], ["id", "doubleh1-fr", "fluid", "", "pInputText", "", "type", "text", "variant", "outlined", 1, "secondary-outline", 3, "ngModelChange", "ngModel", "disabled"], ["for", "doubleh1-fr"], ["id", "h1-fr", "fluid", "", "pInputText", "", "type", "text", "variant", "outlined", 1, "secondary-outline", 3, "ngModelChange", "ngModel", "disabled"], ["for", "h1-fr"], ["id", "template-fr", "appendTo", "body", "filterBy", "label", "fluid", "", "optionLabel", "label", "optionValue", "value", "styleClass", "secondary-outline", 3, "ngModelChange", "ngModel", "disabled", "filter", "options"], ["for", "template-fr"], ["id", "parentPath-fr", "appendTo", "body", "filterBy", "label", "fluid", "", "optionLabel", "label", "optionValue", "path", "styleClass", "secondary-outline", 3, "onChange", "disabled", "filter", "ngModel", "options"], ["for", "parentPath-fr"], ["id", "title-fr", "fluid", "", "pInputText", "", "type", "text", "variant", "outlined", 1, "secondary-outline", 3, "ngModelChange", "ngModel", "disabled"], ["for", "title-fr"], ["id", "description-fr", "autoResize", "true", "fluid", "", "pTextarea", "", "rows", "1", "variant", "outlined", 1, "secondary-outline", 3, "ngModelChange", "ngModel", "disabled"], ["for", "description-fr"], ["id", "keywords-fr", "autoResize", "true", "fluid", "", "pTextarea", "", "rows", "1", "variant", "outlined", 1, "secondary-outline", 3, "ngModelChange", "ngModel", "disabled"], ["for", "keywords-fr"], ["id", "owner-fr", "fluid", "", "pInputText", "", "type", "text", "variant", "outlined", 1, "secondary-outline", 3, "ngModelChange", "ngModel", "disabled"], ["for", "owner-fr"], ["id", "email-fr", "fluid", "", "pInputText", "", "type", "text", "variant", "outlined", 1, "secondary-outline", 3, "ngModelChange", "ngModel", "disabled"], ["for", "email-fr"], ["inputId", "isArchived-fr", 3, "ngModelChange", "ngModel", "binary", "disabled"], ["for", "isArchived-fr", 1, "ml-2"], ["inputId", "noindex-fr", 3, "ngModelChange", "ngModel", "binary", "disabled"], ["for", "noindex-fr", 1, "ml-2"], ["inputId", "isOrphan-fr", 3, "ngModelChange", "ngModel", "binary", "disabled"], ["for", "isOrphan-fr", 1, "ml-2"], ["inputId", "linksToPortal-fr", 3, "ngModelChange", "ngModel", "binary", "disabled"], ["for", "linksToPortal-fr", 1, "ml-2"], ["inputId", "linksToSignIn-fr", 3, "ngModelChange", "ngModel", "binary", "disabled"], ["for", "linksToSignIn-fr", 1, "ml-2"], ["inputId", "hasChatbot-fr", 3, "ngModelChange", "ngModel", "binary", "disabled"], ["for", "hasChatbot-fr", 1, "ml-2"], ["id", "pathSegment-fr", "fluid", "", "pInputText", "", "type", "text", "variant", "outlined", 1, "secondary-outline", 3, "ngModelChange", "disabled", "ngModel"], ["for", "pathSegment-fr"], ["id", "issue", "autoResize", "true", "fluid", "", "pTextarea", "", "rows", "3", "variant", "outlined", 1, "secondary-outline", "min-h-6rem", 3, "ngModelChange", "ngModel"], ["for", "issue"], ["id", "solution", "autoResize", "true", "fluid", "", "pTextarea", "", "rows", "3", "variant", "outlined", 1, "secondary-outline", "min-h-6rem", 3, "ngModelChange", "ngModel"], ["for", "solution"]], template: function EditNodeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "label", 5);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p-selectbutton", 6);
      \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_Template_p_selectbutton_ngModelChange_7_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedLanguage, $event) || (ctx.selectedLanguage = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 4)(9, "label", 7);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "p-selectbutton", 8);
      \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_Template_p_selectbutton_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedVersion, $event) || (ctx.selectedVersion = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 4)(14, "label", 9);
      \u0275\u0275text(15);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 10)(18, "p-button", 11);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275listener("onClick", function EditNodeComponent_Template_p_button_onClick_18_listener() {
        return ctx.refresh();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "span", 12);
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(24, EditNodeComponent_Conditional_24_Template, 25, 23, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 13)(26, "label", 14);
      \u0275\u0275text(27);
      \u0275\u0275pipe(28, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "p-button", 15);
      \u0275\u0275listener("onClick", function EditNodeComponent_Template_p_button_onClick_29_listener() {
        return ctx.editNotes();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(30, EditNodeComponent_Conditional_30_Template, 5, 7, "p-message", 16);
      \u0275\u0275conditionalCreate(31, EditNodeComponent_Conditional_31_Template, 8, 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_11_0;
      let tmp_15_0;
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 17, "common.language"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedLanguage);
      \u0275\u0275property("options", ctx.languageOptions);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 19, "common.version"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedVersion);
      \u0275\u0275property("options", ctx.versionOptions);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 21, "common.data"));
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.selectedVersion() === "baseline" && !ctx.editsEnabled())("label", \u0275\u0275pipeBind1(19, 23, "common.refresh"))("loading", ctx.projectState.refreshing()[ctx.selectedVersion()]);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.daysSinceRefresh() !== null ? \u0275\u0275pipeBind2(22, 25, "editNode.lastRefreshed", \u0275\u0275pureFunction1(32, _c0, ctx.daysSinceRefresh())) : \u0275\u0275pipeBind1(23, 28, "editNode.neverRefreshed"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275conditional(((tmp_11_0 = ctx.node().data) == null ? null : tmp_11_0.status) ? 24 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 30, "editNode.notes"));
      \u0275\u0275advance(2);
      \u0275\u0275property("icon", ctx.noteConfig.icon)("label", ctx.noteConfig.label);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_15_0 = ctx.versionConfig()) ? 30 : -1, tmp_15_0);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.node().data ? 31 : -1);
    }
  }, dependencies: [
    CommonModule,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    ButtonModule,
    Button,
    CheckboxModule,
    Checkbox,
    FieldsetModule,
    Fieldset,
    IftaLabelModule,
    IftaLabel,
    InputGroupAddonModule,
    InputGroupAddon,
    InputGroupModule,
    InputGroup,
    InputTextModule,
    InputText,
    MessageModule,
    Message,
    SelectButtonModule,
    SelectButton,
    SelectModule,
    Select,
    TagModule,
    Tag,
    TextareaModule,
    Textarea,
    DecimalPipe,
    DatePipe,
    TranslatePipe
  ], styles: ["\n[_nghost-%COMP%]     .p-message-content {\n  width: 100%;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]     .p-message-text {\n  flex: 1;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]     .p-textarea {\n  color: var(--p-inputtext-color) !important;\n  background: var(--p-inputtext-background) !important;\n}\n[_nghost-%COMP%]     .p-textarea:disabled {\n  opacity: 1 !important;\n  background: var(--p-inputtext-disabled-background) !important;\n  color: var(--p-inputtext-disabled-color) !important;\n}\n[_nghost-%COMP%]     .p-select {\n  color: var(--p-inputtext-color) !important;\n  background: var(--p-inputtext-background) !important;\n}\n[_nghost-%COMP%]     .p-select.p-disabled {\n  opacity: 1 !important;\n  background: var(--p-inputtext-disabled-background) !important;\n  color: var(--p-inputtext-disabled-color) !important;\n}\n.min-h-6rem[_ngcontent-%COMP%] {\n  min-height: 6rem;\n}\n/*# sourceMappingURL=edit-node.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditNodeComponent, [{
    type: Component,
    args: [{ selector: "aida-edit-node", imports: [
      CommonModule,
      FormsModule,
      TranslatePipe,
      ButtonModule,
      CheckboxModule,
      FieldsetModule,
      IftaLabelModule,
      InputGroupAddonModule,
      InputGroupModule,
      InputTextModule,
      MessageModule,
      SelectButtonModule,
      SelectModule,
      TagModule,
      TextareaModule
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="flex flex-column h-full">
  <div class="flex flex-row justify-content-between gap-2">
    <div class="flex flex-row flex-wrap gap-3">
      <div class="flex flex-column hover:text-primary">
        <label class="text-xs font-semibold" for="lang">{{ 'common.language' | translate }}</label>
        <p-selectbutton
          id="lang"
          [(ngModel)]="selectedLanguage"
          [options]="languageOptions"
          allowEmpty="false"
          optionLabel="label"
          optionValue="value"
          size="small"
          styleClass="secondary-outline text-primary max-h-3rem"
        />
      </div>
      <div class="flex flex-column hover:text-primary">
        <label class="text-xs font-semibold" for="version">{{ 'common.version' | translate }}</label>
        <p-selectbutton
          id="version"
          [(ngModel)]="selectedVersion"
          [options]="versionOptions"
          allowEmpty="false"
          optionLabel="label"
          optionValue="value"
          size="small"
          styleClass="secondary-outline text-primary max-h-3rem"
        />
      </div>
      <div class="flex flex-column hover:text-primary">
        <label class="text-xs font-semibold" for="refresh">{{ 'common.data' | translate }}</label>
        <div id="refresh" class="flex gap-2 align-items-center">
          <p-button
            [disabled]="selectedVersion() === 'baseline' && !editsEnabled()"
            [label]="'common.refresh' | translate"
            [loading]="projectState.refreshing()[selectedVersion()]"
            (onClick)="refresh()"
            icon="pi pi-refresh"
            outlined
            size="small"
            styleClass="secondary-outline"
          />
          <span class="text-sm text-color-secondary white-space-nowrap">
            {{ daysSinceRefresh() !== null ? ('editNode.lastRefreshed' | translate: { days: daysSinceRefresh() }) : ('editNode.neverRefreshed' | translate) }}
          </span>
        </div>
      </div>
      @if (node().data?.status) {
        <div class="flex flex-column hover:text-primary">
          <label class="text-xs font-semibold" for="status">{{ 'common.status' | translate }}</label>
          <div id="status" class="flex flex-row gap-2 align-items-center h-full">
            <div class="flex gap-1 align-items-center">
              <p-checkbox [(ngModel)]="node().data.status.inScope" [binary]="true" (ngModelChange)="markChanges()" inputId="inScope" size="large" />
              <label for="inScope">{{ 'editNode.inScope' | translate }}</label>
            </div>
            <div class="flex gap-1 align-items-center">
              <p-checkbox [(ngModel)]="node().data.status.isNew" [binary]="true" (ngModelChange)="markChanges()" inputId="isNew" size="large" />
              <label for="isNew">{{ 'editNode.isNew' | translate }}</label>
            </div>
            <div class="flex gap-1 align-items-center">
              <p-checkbox [(ngModel)]="node().data.status.isROT" [binary]="true" (ngModelChange)="markChanges()" inputId="isROT" size="large" />
              <label for="isROT">{{ 'editNode.isROT' | translate }}</label>
            </div>
            <div class="flex gap-1 align-items-center">
              <p-checkbox [(ngModel)]="node().data.status.isMoved" [binary]="true" (ngModelChange)="markChanges()" inputId="isMoved" size="large" />
              <label for="isMoved">{{ 'editNode.isMoved' | translate }}</label>
            </div>
          </div>
        </div>
      }
    </div>
    <div class="flex flex-column hover:text-primary mr-3">
      <label class="text-xs font-semibold" for="status">{{ 'editNode.notes' | translate }}</label>
      <p-button [icon]="noteConfig.icon" [label]="noteConfig.label" (onClick)="editNotes()" fluid outlined size="small" styleClass="secondary-outline white-space-nowrap" />
    </div>
  </div>
  @if (versionConfig(); as config) {
    <p-message [icon]="config.icon" [severity]="config.severity" styleClass="mt-2">
      <span>{{ config.text }}</span>
      <p-button
        [disabled]="editsEnabled()"
        [label]="'common.enableEdits' | translate"
        (onClick)="enableEdits()"
        icon="pi pi-file-edit"
        outlined
        severity="danger"
        size="small"
        styleClass="secondary-outline white-space-nowrap"
      />
    </p-message>
  }
  @if (node().data) {
    <div class="flex-1 overflow-y-auto">
      @if (!toggleNotes()) {
        <div class="flex flex-row gap-2 min-w-min">
          @if (selectedLanguage() !== 'fr') {
            <p-fieldset [legend]="'common.language.english' | translate" class="flex-1">
              <div class="flex flex-column gap-1">
                <p-inputgroup>
                  <p-iftalabel>
                    <input
                      id="path"
                      [disabled]="!urlEditsEnabled() || (!!versionConfig() && !editsEnabled())"
                      [ngModel]="node().data.path.en"
                      (blur)="updateFragment('en')"
                      (ngModelChange)="onPathInput($event, 'en')"
                      class="secondary-outline"
                      fluid
                      pInputText
                      type="text"
                      variant="outlined"
                    />
                    <label for="path">{{ 'editNode.path' | translate }}</label>
                  </p-iftalabel>
                  <p-inputgroup-addon class="secondary-outline">
                    <p-button [disabled]="urlEditsEnabled()" (onClick)="enableUrlEdits()" class="w-full h-full" icon="pi pi-pen-to-square" text />
                  </p-inputgroup-addon>
                </p-inputgroup>
                @if (node().data.status.isNew && selectedVersion() === 'prototype') {
                  <p-iftalabel>
                    <input
                      id="pathSegment"
                      [class.text-red-500]="pathEN().startsWith('new-page')"
                      [disabled]="!!versionConfig() && !editsEnabled()"
                      [ngModel]="pathEN()"
                      (ngModelChange)="onFragmentInput($event, 'en')"
                      class="secondary-outline"
                      fluid
                      pInputText
                      type="text"
                      variant="outlined"
                    />
                    <label for="pathSegment">{{ 'editNode.pageUrl' | translate }}</label>
                  </p-iftalabel>
                }
                @if (pathError()) {
                  <p-message icon="pi pi-times-circle font-bold" severity="error" styleClass="mb-2">
                    <span>{{ 'editNode.pathError' | translate }}</span>
                  </p-message>
                }
                <p-iftalabel>
                  <input
                    id="doubleh1"
                    [(ngModel)]="node().data[selectedVersion()].en.doubleH1"
                    [disabled]="!!versionConfig() && !editsEnabled()"
                    (ngModelChange)="markChanges()"
                    class="secondary-outline"
                    fluid
                    pInputText
                    type="text"
                    variant="outlined"
                  />
                  <label for="doubleh1">{{ 'editNode.doubleh1' | translate }}</label>
                </p-iftalabel>
                <p-iftalabel>
                  <input
                    id="h1"
                    [(ngModel)]="node().data[selectedVersion()].en.h1"
                    [class.text-red-500]="node().data[selectedVersion()].en.h1 === 'New page'"
                    [disabled]="!!versionConfig() && !editsEnabled()"
                    (ngModelChange)="markChanges(); syncNewName(node(), selectedVersion(), 'en')"
                    class="secondary-outline"
                    fluid
                    pInputText
                    type="text"
                    variant="outlined"
                  />
                  <label for="h1">{{ 'editNode.h1' | translate }}</label>
                </p-iftalabel>

                <!-- Template -->
                <p-iftalabel>
                  <p-select
                    id="template"
                    [(ngModel)]="node().data[selectedVersion()].en.template"
                    [disabled]="!!versionConfig() && !editsEnabled()"
                    [filter]="true"
                    [options]="projectState.templateOptions()"
                    (ngModelChange)="markChanges(); syncData(node(), 'template', 'ENtoFR')"
                    appendTo="body"
                    filterBy="label"
                    fluid
                    optionLabel="label"
                    optionValue="value"
                    styleClass="secondary-outline"
                  />
                  <label [class.text-red-500]="node().data[selectedVersion()].en.template !== node().data[selectedVersion()].fr.template" for="template">
                    {{ 'editNode.template' | translate }}
                  </label>
                </p-iftalabel>

                <!-- Parent page -->
                <p-iftalabel>
                  <p-select
                    id="parentPath"
                    [disabled]="!!versionConfig() && !editsEnabled()"
                    [filter]="true"
                    [ngModel]="node().data[selectedVersion()].en.parentPath"
                    [options]="enPages()"
                    (onChange)="moveNode(node(), $event.value, 'en', selectedVersion())"
                    appendTo="body"
                    filterBy="label"
                    fluid
                    optionLabel="label"
                    optionValue="path"
                    styleClass="secondary-outline"
                  >
                    <ng-template #item let-page>
                      <div class="flex flex-column">
                        <span class="font-bold -mb-1">{{ page.label }}</span>
                        {{ page.path }}
                      </div>
                    </ng-template></p-select
                  >
                  <label for="parentPath">{{ 'editNode.parent' | translate }}</label>
                </p-iftalabel>
                @if (moveError()) {
                  <p-message icon="pi pi-times-circle font-bold" severity="error" styleClass="mb-2">
                    <span>{{ 'editNode.moveError' | translate }}</span>
                  </p-message>
                }

                <h3 class="my-0">{{ 'editNode.metadata' | translate }}</h3>
                <p-iftalabel>
                  <input
                    id="title"
                    [(ngModel)]="node().data[selectedVersion()].en.title"
                    [disabled]="!!versionConfig() && !editsEnabled()"
                    (ngModelChange)="markChanges()"
                    class="secondary-outline"
                    fluid
                    pInputText
                    type="text"
                    variant="outlined"
                  />
                  <label for="title">{{ 'editNode.title' | translate }}</label>
                </p-iftalabel>
                <p-iftalabel>
                  <textarea
                    id="description"
                    [(ngModel)]="node().data[selectedVersion()].en.description"
                    [disabled]="!!versionConfig() && !editsEnabled()"
                    (ngModelChange)="markChanges()"
                    class="secondary-outline"
                    autoResize="true"
                    fluid
                    pTextarea
                    rows="1"
                    variant="outlined"
                  ></textarea>
                  <label for="description">{{ 'editNode.description' | translate }}</label>
                </p-iftalabel>
                <p-iftalabel>
                  <textarea
                    id="keywords"
                    [(ngModel)]="node().data[selectedVersion()].en.keywords"
                    [disabled]="!!versionConfig() && !editsEnabled()"
                    (ngModelChange)="markChanges()"
                    class="secondary-outline"
                    autoResize="true"
                    fluid
                    pTextarea
                    rows="1"
                    variant="outlined"
                  ></textarea>
                  <label for="keywords">{{ 'editNode.keywords' | translate }}</label>
                </p-iftalabel>

                <h3 class="my-0">{{ 'editNode.pageOwner' | translate }}</h3>
                <p-iftalabel>
                  <input
                    id="owner"
                    [(ngModel)]="node().data[selectedVersion()].en.owner"
                    [disabled]="!!versionConfig() && !editsEnabled()"
                    (ngModelChange)="markChanges(); syncData(node(), 'owner', 'ENtoFR')"
                    class="secondary-outline"
                    fluid
                    pInputText
                    type="text"
                    variant="outlined"
                  />
                  <label [class.text-red-500]="node().data[selectedVersion()].en.owner !== node().data[selectedVersion()].fr.owner" for="owner">
                    {{ 'editNode.owner' | translate }}
                  </label>
                </p-iftalabel>
                <p-iftalabel>
                  <input
                    id="email"
                    [(ngModel)]="node().data[selectedVersion()].en.email"
                    [disabled]="!!versionConfig() && !editsEnabled()"
                    (ngModelChange)="markChanges(); syncData(node(), 'email', 'ENtoFR')"
                    class="secondary-outline"
                    fluid
                    pInputText
                    type="text"
                    variant="outlined"
                  />
                  <label [class.text-red-500]="node().data[selectedVersion()].en.email !== node().data[selectedVersion()].fr.email" for="email">
                    {{ 'editNode.email' | translate }}
                  </label>
                </p-iftalabel>

                <h3 class="my-0">{{ 'editNode.info' | translate }}</h3>
                <div class="flex flex-row gap-3 flex-wrap">
                  <div class="flex align-items-center">
                    <p-checkbox
                      [(ngModel)]="node().data[selectedVersion()].en.isArchived"
                      [binary]="true"
                      [disabled]="!!versionConfig() && !editsEnabled()"
                      (ngModelChange)="markChanges(); syncData(node(), 'isArchived', 'ENtoFR')"
                      inputId="isArchived"
                    />
                    <label [class.text-red-500]="node().data[selectedVersion()].en.isArchived !== node().data[selectedVersion()].fr.isArchived" class="ml-2" for="isArchived">
                      {{ 'editNode.isArchived' | translate }}
                    </label>
                  </div>
                  <div class="flex align-items-center">
                    <p-checkbox
                      [(ngModel)]="node().data[selectedVersion()].en.noindex"
                      [binary]="true"
                      [disabled]="!!versionConfig() && !editsEnabled()"
                      (ngModelChange)="markChanges(); syncData(node(), 'noindex', 'ENtoFR')"
                      inputId="noindex"
                    />
                    <label [class.text-red-500]="node().data[selectedVersion()].en.noindex !== node().data[selectedVersion()].fr.noindex" class="ml-2" for="noindex">
                      {{ 'editNode.noindex' | translate }}
                    </label>
                  </div>
                  <div class="flex align-items-center">
                    <p-checkbox
                      [(ngModel)]="node().data[selectedVersion()].en.isOrphan"
                      [binary]="true"
                      [disabled]="selectedVersion() === 'prototype' ? !urlEditsEnabled() : !editsEnabled()"
                      (ngModelChange)="markChanges()"
                      inputId="isOrphan"
                    />
                    <label [class.text-red-500]="node().data[selectedVersion()].en.isOrphan !== node().data[selectedVersion()].fr.isOrphan" class="ml-2" for="isOrphan">
                      {{ 'editNode.isOrphan' | translate }}
                    </label>
                  </div>
                  <div class="flex align-items-center">
                    <p-checkbox
                      [(ngModel)]="node().data[selectedVersion()].en.linksToPortal"
                      [binary]="true"
                      [disabled]="selectedVersion() === 'prototype' ? !urlEditsEnabled() : !editsEnabled()"
                      (ngModelChange)="markChanges()"
                      inputId="linksToPortal"
                    />
                    <label [class.text-red-500]="node().data[selectedVersion()].en.linksToPortal !== node().data[selectedVersion()].fr.linksToPortal" class="ml-2" for="linksToPortal">
                      {{ 'editNode.linksToPortal' | translate }}
                    </label>
                  </div>
                  <div class="flex align-items-center">
                    <p-checkbox
                      [(ngModel)]="node().data[selectedVersion()].en.linksToSignIn"
                      [binary]="true"
                      [disabled]="selectedVersion() === 'prototype' ? !urlEditsEnabled() : !editsEnabled()"
                      (ngModelChange)="markChanges()"
                      inputId="linksToSignIn"
                    />
                    <label [class.text-red-500]="node().data[selectedVersion()].en.linksToSignIn !== node().data[selectedVersion()].fr.linksToSignIn" class="ml-2" for="linksToSignIn">
                      {{ 'editNode.linksToSignIn' | translate }}
                    </label>
                  </div>
                  <div class="flex align-items-center">
                    <p-checkbox
                      [(ngModel)]="node().data[selectedVersion()].en.hasChatbot"
                      [binary]="true"
                      [disabled]="selectedVersion() === 'prototype' ? !urlEditsEnabled() : !editsEnabled()"
                      (ngModelChange)="markChanges()"
                      inputId="hasChatbot"
                    />
                    <label [class.text-red-500]="node().data[selectedVersion()].en.hasChatbot !== node().data[selectedVersion()].fr.hasChatbot" class="ml-2" for="hasChatbot">
                      {{ 'editNode.hasChatbot' | translate }}
                    </label>
                  </div>
                  <div class="flex flex-column text-sm text-color-secondary">
                    <span class="font-bold">
                      {{ 'editNode.lastPublished' | translate }}
                    </span>
                    <span [class.text-red-500]="(node().data[selectedVersion()].en.lastPublished | date) !== (node().data[selectedVersion()].fr.lastPublished | date)">
                      {{ (node().data[selectedVersion()].en.lastPublished | date) ?? ('common.never' | translate) }}
                    </span>
                  </div>
                  <div class="flex flex-column text-sm text-color-secondary">
                    <span class="font-bold">
                      {{ 'editNode.wordCount' | translate }}
                    </span>
                    {{ (node().data[selectedVersion()].en.wordCount | number) ?? '\u2014' }}
                  </div>
                  <div class="flex flex-column text-sm text-color-secondary">
                    <span class="font-bold">
                      {{ 'editNode.linkCount' | translate }}
                    </span>
                    <span [class.text-red-500]="node().data[selectedVersion()].en.linkCount !== node().data[selectedVersion()].fr.linkCount">
                      {{ (node().data[selectedVersion()].en.linkCount | number) ?? '\u2014' }}
                    </span>
                  </div>
                  <div class="flex flex-column text-sm text-color-secondary">
                    <span class="font-bold">
                      {{ 'editNode.vanityCount' | translate }}
                    </span>
                    <span [class.text-red-500]="node().data.vanity.en.length !== node().data.vanity.fr.length">
                      {{ (node().data.vanity.en.length | number) ?? '\u2014' }}
                    </span>
                  </div>
                  <div class="flex flex-column text-sm text-color-secondary">
                    <span class="font-bold">
                      {{ 'editNode.phoneCount' | translate }}
                    </span>
                    <span [class.text-red-500]="node().data[selectedVersion()].en.phoneNumbers?.length !== node().data[selectedVersion()].fr.phoneNumbers?.length">
                      {{ (node().data[selectedVersion()].en.phoneNumbers?.length | number) ?? '\u2014' }}
                    </span>
                  </div>
                  <div class="flex flex-column text-sm text-color-secondary">
                    <span class="font-bold">
                      {{ 'editNode.visits' | translate }}
                    </span>
                    {{ (node().data[selectedVersion()].en.visits | number) ?? '\u2014' }}
                  </div>
                  <div class="flex flex-column text-sm text-color-secondary">
                    <span class="font-bold">
                      {{ 'common.readability.fleschKincaid' | translate }}
                    </span>
                    <span
                      [class.text-orange-400]="node().data[selectedVersion()].en.fleschKincaid < 12 && node().data[selectedVersion()].en.fleschKincaid > 8"
                      [class.text-red-500]="node().data[selectedVersion()].en.fleschKincaid >= 12"
                    >
                      {{ (node().data[selectedVersion()].en.fleschKincaid | number) ?? '\u2014' }}
                    </span>
                  </div>
                  <div class="flex flex-column text-sm text-color-secondary">
                    <span class="font-bold">
                      {{ 'common.readability.gunningFog' | translate }}
                    </span>
                    <span
                      [class.text-orange-400]="node().data[selectedVersion()].en.gunningFog < 12 && node().data[selectedVersion()].en.gunningFog > 8"
                      [class.text-red-500]="node().data[selectedVersion()].en.gunningFog >= 12"
                    >
                      {{ (node().data[selectedVersion()].en.gunningFog | number) ?? '\u2014' }}
                    </span>
                  </div>
                  @if (node().data[selectedVersion()].en.is404) {
                    <p-tag value="404" [severity]="node().data[selectedVersion()].en.is404 === node().data[selectedVersion()].fr.is404 ? undefined : 'danger'" />
                  }
                </div>
              </div>
            </p-fieldset>
          }
          @if (selectedLanguage() !== 'en') {
            <p-fieldset [legend]="'common.language.french' | translate" class="flex-1">
              <div class="flex flex-column gap-1">
                <p-inputgroup>
                  <p-iftalabel>
                    <input
                      id="path-fr"
                      [disabled]="!urlEditsEnabled() || (!!versionConfig() && !editsEnabled())"
                      [ngModel]="node().data.path.fr"
                      (blur)="updateFragment('fr')"
                      (ngModelChange)="onPathInput($event, 'fr')"
                      class="secondary-outline"
                      fluid
                      pInputText
                      type="text"
                      variant="outlined"
                    />
                    <label for="path-fr">{{ 'editNode.path' | translate }}</label>
                  </p-iftalabel>
                  <p-inputgroup-addon class="secondary-outline">
                    <p-button [disabled]="urlEditsEnabled()" (onClick)="enableUrlEdits()" class="w-full h-full" icon="pi pi-pen-to-square" text />
                  </p-inputgroup-addon>
                </p-inputgroup>
                @if (node().data.status.isNew && selectedVersion() === 'prototype') {
                  <p-iftalabel>
                    <input
                      id="pathSegment-fr"
                      [class.text-red-500]="pathFR().startsWith('nouvelle-page')"
                      [disabled]="!!versionConfig() && !editsEnabled()"
                      [ngModel]="pathFR()"
                      (ngModelChange)="onFragmentInput($event, 'en')"
                      class="secondary-outline"
                      fluid
                      pInputText
                      type="text"
                      variant="outlined"
                    />
                    <label for="pathSegment-fr">{{ 'editNode.pageUrl' | translate }}</label>
                  </p-iftalabel>
                }
                <p-iftalabel>
                  <input
                    id="doubleh1-fr"
                    [(ngModel)]="node().data[selectedVersion()].fr.doubleH1"
                    [disabled]="!!versionConfig() && !editsEnabled()"
                    (ngModelChange)="markChanges()"
                    class="secondary-outline"
                    fluid
                    pInputText
                    type="text"
                    variant="outlined"
                  />
                  <label for="doubleh1-fr">{{ 'editNode.doubleh1' | translate }}</label>
                </p-iftalabel>
                <p-iftalabel>
                  <input
                    id="h1-fr"
                    [(ngModel)]="node().data[selectedVersion()].fr.h1"
                    [class.text-red-500]="node().data[selectedVersion()].fr.h1 === 'Nouvelle page'"
                    [disabled]="!!versionConfig() && !editsEnabled()"
                    (ngModelChange)="markChanges(); syncNewName(node(), selectedVersion(), 'fr')"
                    class="secondary-outline"
                    fluid
                    pInputText
                    type="text"
                    variant="outlined"
                  />
                  <label for="h1-fr">{{ 'editNode.h1' | translate }}</label>
                </p-iftalabel>

                <!-- Template -->
                <p-iftalabel>
                  <p-select
                    id="template-fr"
                    [(ngModel)]="node().data[selectedVersion()].fr.template"
                    [disabled]="!!versionConfig() && !editsEnabled()"
                    [filter]="true"
                    [options]="projectState.templateOptions()"
                    (ngModelChange)="markChanges(); syncData(node(), 'template', 'FRtoEN')"
                    appendTo="body"
                    filterBy="label"
                    fluid
                    optionLabel="label"
                    optionValue="value"
                    styleClass="secondary-outline"
                  />
                  <label [class.text-red-500]="node().data[selectedVersion()].en.template !== node().data[selectedVersion()].fr.template" for="template-fr">
                    {{ 'editNode.template' | translate }}
                  </label>
                </p-iftalabel>

                <!-- Parent page -->
                <p-iftalabel>
                  <p-select
                    id="parentPath-fr"
                    [disabled]="!!versionConfig() && !editsEnabled()"
                    [filter]="true"
                    [ngModel]="node().data[selectedVersion()].fr.parentPath"
                    [options]="frPages()"
                    (onChange)="moveNode(node(), $event.value, 'fr', selectedVersion())"
                    appendTo="body"
                    filterBy="label"
                    fluid
                    optionLabel="label"
                    optionValue="path"
                    styleClass="secondary-outline"
                  >
                    <ng-template #item let-page>
                      <div class="flex flex-column">
                        <span class="font-bold -mb-1">{{ page.label }}</span>
                        {{ page.path }}
                      </div>
                    </ng-template></p-select
                  >
                  <label for="parentPath-fr">{{ 'editNode.parent' | translate }}</label>
                </p-iftalabel>
                @if (moveError()) {
                  <p-message icon="pi pi-times-circle font-bold" severity="error" styleClass="mb-2">
                    <span>{{ 'editNode.moveError' | translate }}</span>
                  </p-message>
                }

                <h3 class="my-0">{{ 'editNode.metadata' | translate }}</h3>
                <p-iftalabel>
                  <input
                    id="title-fr"
                    [(ngModel)]="node().data[selectedVersion()].fr.title"
                    [disabled]="!!versionConfig() && !editsEnabled()"
                    (ngModelChange)="markChanges()"
                    class="secondary-outline"
                    fluid
                    pInputText
                    type="text"
                    variant="outlined"
                  />
                  <label for="title-fr">{{ 'editNode.title' | translate }}</label>
                </p-iftalabel>
                <p-iftalabel>
                  <textarea
                    id="description-fr"
                    [(ngModel)]="node().data[selectedVersion()].fr.description"
                    [disabled]="!!versionConfig() && !editsEnabled()"
                    (ngModelChange)="markChanges()"
                    class="secondary-outline"
                    autoResize="true"
                    fluid
                    pTextarea
                    rows="1"
                    variant="outlined"
                  ></textarea>
                  <label for="description-fr">{{ 'editNode.description' | translate }}</label>
                </p-iftalabel>
                <p-iftalabel>
                  <textarea
                    id="keywords-fr"
                    [(ngModel)]="node().data[selectedVersion()].fr.keywords"
                    [disabled]="!!versionConfig() && !editsEnabled()"
                    (ngModelChange)="markChanges()"
                    class="secondary-outline"
                    autoResize="true"
                    fluid
                    pTextarea
                    rows="1"
                    variant="outlined"
                  ></textarea>
                  <label for="keywords-fr">{{ 'editNode.keywords' | translate }}</label>
                </p-iftalabel>

                <h3 class="my-0">{{ 'editNode.pageOwner' | translate }}</h3>
                <p-iftalabel>
                  <input
                    id="owner-fr"
                    [(ngModel)]="node().data[selectedVersion()].fr.owner"
                    [disabled]="!!versionConfig() && !editsEnabled()"
                    (ngModelChange)="markChanges(); syncData(node(), 'owner', 'FRtoEN')"
                    class="secondary-outline"
                    fluid
                    pInputText
                    type="text"
                    variant="outlined"
                  />
                  <label [class.text-red-500]="node().data[selectedVersion()].en.owner !== node().data[selectedVersion()].fr.owner" for="owner-fr">
                    {{ 'editNode.owner' | translate }}
                  </label>
                </p-iftalabel>
                <p-iftalabel>
                  <input
                    id="email-fr"
                    [(ngModel)]="node().data[selectedVersion()].fr.email"
                    [disabled]="!!versionConfig() && !editsEnabled()"
                    (ngModelChange)="markChanges(); syncData(node(), 'email', 'FRtoEN')"
                    class="secondary-outline"
                    fluid
                    pInputText
                    type="text"
                    variant="outlined"
                  />
                  <label [class.text-red-500]="node().data[selectedVersion()].en.email !== node().data[selectedVersion()].fr.email" for="email-fr">
                    {{ 'editNode.email' | translate }}
                  </label>
                </p-iftalabel>

                <h3 class="my-0">{{ 'editNode.info' | translate }}</h3>
                <div class="flex flex-row gap-3 flex-wrap">
                  <div class="flex align-items-center">
                    <p-checkbox
                      [(ngModel)]="node().data[selectedVersion()].fr.isArchived"
                      [binary]="true"
                      [disabled]="!!versionConfig() && !editsEnabled()"
                      (ngModelChange)="markChanges(); syncData(node(), 'isArchived', 'FRtoEN')"
                      inputId="isArchived-fr"
                    />
                    <label [class.text-red-500]="node().data[selectedVersion()].en.isArchived !== node().data[selectedVersion()].fr.isArchived" class="ml-2" for="isArchived-fr">
                      {{ 'editNode.isArchived' | translate }}
                    </label>
                  </div>
                  <div class="flex align-items-center">
                    <p-checkbox
                      [(ngModel)]="node().data[selectedVersion()].fr.noindex"
                      [binary]="true"
                      [disabled]="!!versionConfig() && !editsEnabled()"
                      (ngModelChange)="markChanges(); syncData(node(), 'noindex', 'FRtoEN')"
                      inputId="noindex-fr"
                    />
                    <label [class.text-red-500]="node().data[selectedVersion()].en.noindex !== node().data[selectedVersion()].fr.noindex" class="ml-2" for="noindex-fr">
                      {{ 'editNode.noindex' | translate }}
                    </label>
                  </div>
                  <div class="flex align-items-center">
                    <p-checkbox
                      [(ngModel)]="node().data[selectedVersion()].fr.isOrphan"
                      [binary]="true"
                      [disabled]="selectedVersion() === 'prototype' ? !urlEditsEnabled() : !editsEnabled()"
                      (ngModelChange)="markChanges()"
                      inputId="isOrphan-fr"
                    />
                    <label [class.text-red-500]="node().data[selectedVersion()].en.isOrphan !== node().data[selectedVersion()].fr.isOrphan" class="ml-2" for="isOrphan-fr">
                      {{ 'editNode.isOrphan' | translate }}
                    </label>
                  </div>
                  <div class="flex align-items-center">
                    <p-checkbox
                      [(ngModel)]="node().data[selectedVersion()].fr.linksToPortal"
                      [binary]="true"
                      [disabled]="selectedVersion() === 'prototype' ? !urlEditsEnabled() : !editsEnabled()"
                      (ngModelChange)="markChanges()"
                      inputId="linksToPortal-fr"
                    />
                    <label [class.text-red-500]="node().data[selectedVersion()].en.linksToPortal !== node().data[selectedVersion()].fr.linksToPortal" class="ml-2" for="linksToPortal-fr">
                      {{ 'editNode.linksToPortal' | translate }}
                    </label>
                  </div>
                  <div class="flex align-items-center">
                    <p-checkbox
                      [(ngModel)]="node().data[selectedVersion()].fr.linksToSignIn"
                      [binary]="true"
                      [disabled]="selectedVersion() === 'prototype' ? !urlEditsEnabled() : !editsEnabled()"
                      (ngModelChange)="markChanges()"
                      inputId="linksToSignIn-fr"
                    />
                    <label [class.text-red-500]="node().data[selectedVersion()].en.linksToSignIn !== node().data[selectedVersion()].fr.linksToSignIn" class="ml-2" for="linksToSignIn-fr">
                      {{ 'editNode.linksToSignIn' | translate }}
                    </label>
                  </div>
                  <div class="flex align-items-center">
                    <p-checkbox
                      [(ngModel)]="node().data[selectedVersion()].fr.hasChatbot"
                      [binary]="true"
                      [disabled]="selectedVersion() === 'prototype' ? !urlEditsEnabled() : !editsEnabled()"
                      (ngModelChange)="markChanges()"
                      inputId="hasChatbot-fr"
                    />
                    <label [class.text-red-500]="node().data[selectedVersion()].en.hasChatbot !== node().data[selectedVersion()].fr.hasChatbot" class="ml-2" for="hasChatbot-fr">
                      {{ 'editNode.hasChatbot' | translate }}
                    </label>
                  </div>
                  <div class="flex flex-column text-sm text-color-secondary">
                    <span class="font-bold">
                      {{ 'editNode.lastPublished' | translate }}
                    </span>
                    <span [class.text-red-500]="(node().data[selectedVersion()].en.lastPublished | date) !== (node().data[selectedVersion()].fr.lastPublished | date)">
                      {{ (node().data[selectedVersion()].fr.lastPublished | date) ?? ('common.never' | translate) }}
                    </span>
                  </div>
                  <div class="flex flex-column text-sm text-color-secondary">
                    <span class="font-bold">
                      {{ 'editNode.wordCount' | translate }}
                    </span>
                    {{ (node().data[selectedVersion()].fr.wordCount | number) ?? '\u2014' }}
                  </div>
                  <div class="flex flex-column text-sm text-color-secondary">
                    <span class="font-bold">
                      {{ 'editNode.linkCount' | translate }}
                    </span>
                    <span [class.text-red-500]="node().data[selectedVersion()].en.linkCount !== node().data[selectedVersion()].fr.linkCount">
                      {{ (node().data[selectedVersion()].fr.linkCount | number) ?? '\u2014' }}
                    </span>
                  </div>
                  <div class="flex flex-column text-sm text-color-secondary">
                    <span class="font-bold">
                      {{ 'editNode.vanityCount' | translate }}
                    </span>
                    <span [class.text-red-500]="node().data.vanity.en.length !== node().data.vanity.fr.length">
                      {{ (node().data.vanity.fr.length | number) ?? '\u2014' }}
                    </span>
                  </div>
                  <div class="flex flex-column text-sm text-color-secondary">
                    <span class="font-bold">
                      {{ 'editNode.phoneCount' | translate }}
                    </span>
                    <span [class.text-red-500]="node().data[selectedVersion()].en.phoneNumbers?.length !== node().data[selectedVersion()].fr.phoneNumbers?.length">
                      {{ (node().data[selectedVersion()].fr.phoneNumbers?.length | number) ?? '\u2014' }}
                    </span>
                  </div>
                  <div class="flex flex-column text-sm text-color-secondary">
                    <span class="font-bold">
                      {{ 'editNode.visits' | translate }}
                    </span>
                    {{ (node().data[selectedVersion()].fr.visits | number) ?? '\u2014' }}
                  </div>
                  <div class="flex flex-column text-sm text-color-secondary">
                    <span class="font-bold">
                      {{ 'common.readability.fleschKincaid' | translate }}
                    </span>
                    <span
                      [class.text-orange-400]="node().data[selectedVersion()].fr.fleschKincaid < 12 && node().data[selectedVersion()].fr.fleschKincaid > 8"
                      [class.text-red-500]="node().data[selectedVersion()].fr.fleschKincaid >= 12"
                    >
                      {{ (node().data[selectedVersion()].fr.fleschKincaid | number) ?? '\u2014' }}
                    </span>
                  </div>
                  <div class="flex flex-column text-sm text-color-secondary">
                    <span class="font-bold">
                      {{ 'common.readability.gunningFog' | translate }}
                    </span>
                    <span
                      [class.text-orange-400]="node().data[selectedVersion()].fr.gunningFog < 12 && node().data[selectedVersion()].fr.gunningFog > 8"
                      [class.text-red-500]="node().data[selectedVersion()].fr.gunningFog >= 12"
                    >
                      {{ (node().data[selectedVersion()].fr.gunningFog | number) ?? '\u2014' }}
                    </span>
                  </div>
                  @if (node().data[selectedVersion()].fr.is404) {
                    <p-tag value="404" [severity]="node().data[selectedVersion()].en.is404 === node().data[selectedVersion()].fr.is404 ? undefined : 'danger'" />
                  }
                </div>
              </div>
            </p-fieldset>
          }
        </div>
      } @else if (node().data?.notes) {
        <p-fieldset [legend]="'editNode.notes' | translate" class="flex-1">
          <div class="flex flex-column gap-1">
            <p-iftalabel>
              <textarea
                id="issue"
                [(ngModel)]="node().data.notes.issue"
                (ngModelChange)="markChanges()"
                class="secondary-outline min-h-6rem"
                autoResize="true"
                fluid
                pTextarea
                rows="3"
                variant="outlined"
              ></textarea>
              <label for="issue">{{ 'inventory.header.issue' | translate }}</label>
            </p-iftalabel>
            <p-iftalabel>
              <textarea
                id="solution"
                [(ngModel)]="node().data.notes.solution"
                (ngModelChange)="markChanges()"
                class="secondary-outline min-h-6rem"
                autoResize="true"
                fluid
                pTextarea
                rows="3"
                variant="outlined"
              ></textarea>
              <label for="solution">{{ 'inventory.header.solution' | translate }}</label>
            </p-iftalabel>
          </div>
        </p-fieldset>
      }
    </div>

    <div class="flex flex-row justify-content-end gap-2 mt-2">
      <p-button [label]="'common.cancel' | translate" (onClick)="cancel()" icon="pi pi-times" severity="secondary" />
      <p-button [disabled]="!hasChanges() || pathError() || moveError()" [label]="'common.save' | translate" (onClick)="save()" icon="pi pi-save" severity="success" />
    </div>
  }
</div>
`, styles: ["/* src/app/components/edit-node/edit-node.component.css */\n:host ::ng-deep .p-message-content {\n  width: 100%;\n  justify-content: space-between;\n}\n:host ::ng-deep .p-message-text {\n  flex: 1;\n  justify-content: space-between;\n}\n:host ::ng-deep .p-textarea {\n  color: var(--p-inputtext-color) !important;\n  background: var(--p-inputtext-background) !important;\n}\n:host ::ng-deep .p-textarea:disabled {\n  opacity: 1 !important;\n  background: var(--p-inputtext-disabled-background) !important;\n  color: var(--p-inputtext-disabled-color) !important;\n}\n:host ::ng-deep .p-select {\n  color: var(--p-inputtext-color) !important;\n  background: var(--p-inputtext-background) !important;\n}\n:host ::ng-deep .p-select.p-disabled {\n  opacity: 1 !important;\n  background: var(--p-inputtext-disabled-background) !important;\n  color: var(--p-inputtext-disabled-color) !important;\n}\n.min-h-6rem {\n  min-height: 6rem;\n}\n/*# sourceMappingURL=edit-node.component.css.map */\n"] }]
  }], () => [], { node: [{ type: Input, args: [{ isSignal: true, alias: "node", required: true }] }], isOpen: [{ type: Input, args: [{ isSignal: true, alias: "isOpen", required: false }] }], initialShowNotes: [{ type: Input, args: [{ isSignal: true, alias: "initialShowNotes", required: false }] }], dialogClose: [{ type: Output, args: ["dialogClose"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditNodeComponent, { className: "EditNodeComponent", filePath: "src/app/components/edit-node/edit-node.component.ts", lineNumber: 48 });
})();

export {
  EditNodeComponent
};
//# sourceMappingURL=chunk-F4UAJCXQ.js.map
