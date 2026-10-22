import {
  Tab,
  TabList,
  TabPanel,
  Tabs,
  TabsModule
} from "./chunk-4ECWLYHO.js";
import {
  Message,
  MessageModule
} from "./chunk-GGIC4QUJ.js";
import {
  StyleCardService
} from "./chunk-XN4WNFGN.js";
import "./chunk-OFBI5QRC.js";
import {
  Textarea,
  TextareaModule
} from "./chunk-Y576ZK6L.js";
import {
  IftaLabel,
  IftaLabelModule
} from "./chunk-FQDO2XGS.js";
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
  InputText,
  InputTextModule,
  NgControlStatus,
  NgModel,
  Tooltip,
  TooltipModule,
  marker
} from "./chunk-QN4TTD5X.js";
import {
  UserSettingsService
} from "./chunk-7YP54JN5.js";
import {
  ChangeDetectionStrategy,
  Component,
  TranslatePipe,
  ViewChildren,
  effect,
  inject,
  setClassMetadata,
  signal,
  viewChildren,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
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
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
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
  __async
} from "./chunk-YCXP4XZS.js";

// src/app/views/toolbox/dev-tools/design-patterns/design-patterns.component.ts
var _c0 = ["codeContainer"];
var _forTrack0 = ($index, $item) => $item.label;
function DesignPatternsComponent_For_24_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const example_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, example_r2.description));
  }
}
function DesignPatternsComponent_For_24_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-message", 12);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const example_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("icon", example_r2.previewConfig.icon)("severity", example_r2.previewConfig.severity)("size", example_r2.previewConfig.size)("text", \u0275\u0275pipeBind1(1, 5, example_r2.previewConfig.text))("variant", example_r2.previewConfig.variant);
  }
}
function DesignPatternsComponent_For_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "h3", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, DesignPatternsComponent_For_24_Conditional_3_Template, 3, 3, "p", 10);
    \u0275\u0275elementStart(4, "div", 11);
    \u0275\u0275conditionalCreate(5, DesignPatternsComponent_For_24_Conditional_5_Template, 2, 7, "p-message", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 13)(7, "p-button", 14);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275listener("onClick", function DesignPatternsComponent_For_24_Template_p_button_onClick_7_listener() {
      const ctx_r2 = \u0275\u0275restoreView(_r1);
      const example_r2 = ctx_r2.$implicit;
      const \u0275$index_34_r4 = ctx_r2.$index;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.copyCode(example_r2.code, "message-" + \u0275$index_34_r4));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "pre", 15, 0);
    \u0275\u0275element(11, "code", 16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const example_r2 = ctx.$implicit;
    const \u0275$index_34_r4 = ctx.$index;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(example_r2.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(example_r2.description ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(example_r2.previewConfig ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ariaLabel", \u0275\u0275pipeBind1(8, 7, "common.copyCode"))("icon", ctx_r4.copiedIndex() === "message-" + \u0275$index_34_r4 ? "pi pi-check" : "pi pi-copy")("rounded", true);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-code", example_r2.code);
  }
}
function DesignPatternsComponent_For_28_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const example_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, example_r7.description));
  }
}
function DesignPatternsComponent_For_28_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-button", 18);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    const btn_r8 = ctx.$implicit;
    \u0275\u0275property("icon", btn_r8.icon)("label", btn_r8.label ? \u0275\u0275pipeBind1(1, 8, btn_r8.label) : void 0)("outlined", btn_r8.outlined)("pTooltip", btn_r8.tooltip ? \u0275\u0275pipeBind1(2, 10, btn_r8.tooltip) : void 0)("rounded", btn_r8.rounded)("severity", btn_r8.severity)("styleClass", btn_r8.styleClass)("text", btn_r8.text);
  }
}
function DesignPatternsComponent_For_28_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275repeaterCreate(1, DesignPatternsComponent_For_28_Conditional_5_For_2_Template, 3, 12, "p-button", 18, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const example_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(example_r7.previewConfig.buttons);
  }
}
function DesignPatternsComponent_For_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "h3", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, DesignPatternsComponent_For_28_Conditional_3_Template, 3, 3, "p", 10);
    \u0275\u0275elementStart(4, "div", 11);
    \u0275\u0275conditionalCreate(5, DesignPatternsComponent_For_28_Conditional_5_Template, 3, 0, "div", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 13)(7, "p-button", 14);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275listener("onClick", function DesignPatternsComponent_For_28_Template_p_button_onClick_7_listener() {
      const ctx_r8 = \u0275\u0275restoreView(_r6);
      const example_r7 = ctx_r8.$implicit;
      const \u0275$index_64_r10 = ctx_r8.$index;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.copyCode(example_r7.code, "button-" + \u0275$index_64_r10));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "pre", 15, 0);
    \u0275\u0275element(11, "code", 16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const example_r7 = ctx.$implicit;
    const \u0275$index_64_r10 = ctx.$index;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(example_r7.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(example_r7.description ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(example_r7.previewConfig ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ariaLabel", \u0275\u0275pipeBind1(8, 7, "common.copyCode"))("icon", ctx_r4.copiedIndex() === "button-" + \u0275$index_64_r10 ? "pi pi-check" : "pi pi-copy")("rounded", true);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-code", example_r7.code);
  }
}
function DesignPatternsComponent_For_32_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const example_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, example_r12.description));
  }
}
function DesignPatternsComponent_For_32_Conditional_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const example_r12 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r4.styleCardService.cardStyles());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", example_r12.previewConfig.content, " ");
  }
}
function DesignPatternsComponent_For_32_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const example_r12 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r4.styleCardService.cardStyles(true));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", example_r12.previewConfig.content, " ");
  }
}
function DesignPatternsComponent_For_32_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const example_r12 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r4.styleCardService.cardStyles(true, true));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", example_r12.previewConfig.content, " ");
  }
}
function DesignPatternsComponent_For_32_Conditional_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const example_r12 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r4.styleCardService.cardStyles(true, false, false, void 0, "border-red-500"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", example_r12.previewConfig.content, " ");
  }
}
function DesignPatternsComponent_For_32_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DesignPatternsComponent_For_32_Conditional_5_Conditional_0_Template, 2, 3, "div", 8);
    \u0275\u0275conditionalCreate(1, DesignPatternsComponent_For_32_Conditional_5_Conditional_1_Template, 2, 3, "div", 8);
    \u0275\u0275conditionalCreate(2, DesignPatternsComponent_For_32_Conditional_5_Conditional_2_Template, 2, 3, "div", 8);
    \u0275\u0275conditionalCreate(3, DesignPatternsComponent_For_32_Conditional_5_Conditional_3_Template, 2, 3, "div", 8);
  }
  if (rf & 2) {
    const example_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(example_r12.previewConfig.type === "standard" ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(example_r12.previewConfig.type === "hover" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(example_r12.previewConfig.type === "active" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(example_r12.previewConfig.type === "deleted" ? 3 : -1);
  }
}
function DesignPatternsComponent_For_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "h3", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, DesignPatternsComponent_For_32_Conditional_3_Template, 3, 3, "p", 10);
    \u0275\u0275elementStart(4, "div", 11);
    \u0275\u0275conditionalCreate(5, DesignPatternsComponent_For_32_Conditional_5_Template, 4, 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 13)(7, "p-button", 14);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275listener("onClick", function DesignPatternsComponent_For_32_Template_p_button_onClick_7_listener() {
      const ctx_r12 = \u0275\u0275restoreView(_r11);
      const example_r12 = ctx_r12.$implicit;
      const \u0275$index_98_r14 = ctx_r12.$index;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.copyCode(example_r12.code, "card-" + \u0275$index_98_r14));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "pre", 15, 0);
    \u0275\u0275element(11, "code", 16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const example_r12 = ctx.$implicit;
    const \u0275$index_98_r14 = ctx.$index;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r4.styleCardService.cardStyles());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(example_r12.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(example_r12.description ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(example_r12.previewConfig ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ariaLabel", \u0275\u0275pipeBind1(8, 9, "common.copyCode"))("icon", ctx_r4.copiedIndex() === "card-" + \u0275$index_98_r14 ? "pi pi-check" : "pi pi-copy")("rounded", true);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-code", example_r12.code);
  }
}
function DesignPatternsComponent_For_36_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const example_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, example_r16.description));
  }
}
function DesignPatternsComponent_For_36_Conditional_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-iftalabel")(1, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function DesignPatternsComponent_For_36_Conditional_5_Conditional_0_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r4 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r4.exampleValue, $event) || (ctx_r4.exampleValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 20);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const example_r16 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.exampleValue);
    \u0275\u0275property("id", example_r16.previewConfig.id);
    \u0275\u0275advance();
    \u0275\u0275property("for", example_r16.previewConfig.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, example_r16.previewConfig.label));
  }
}
function DesignPatternsComponent_For_36_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-iftalabel")(1, "textarea", 21);
    \u0275\u0275twoWayListener("ngModelChange", function DesignPatternsComponent_For_36_Conditional_5_Conditional_1_Template_textarea_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r4 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r4.exampleTextarea, $event) || (ctx_r4.exampleTextarea = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 20);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const example_r16 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.exampleTextarea);
    \u0275\u0275property("id", example_r16.previewConfig.id)("rows", example_r16.previewConfig.rows);
    \u0275\u0275advance();
    \u0275\u0275property("for", example_r16.previewConfig.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, example_r16.previewConfig.label));
  }
}
function DesignPatternsComponent_For_36_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-iftalabel")(1, "p-select", 22);
    \u0275\u0275twoWayListener("ngModelChange", function DesignPatternsComponent_For_36_Conditional_5_Conditional_2_Template_p_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r4 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r4.selectedOption, $event) || (ctx_r4.selectedOption = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 20);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const example_r16 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.selectedOption);
    \u0275\u0275property("inputId", example_r16.previewConfig.id)("options", ctx_r4.exampleOptions);
    \u0275\u0275advance();
    \u0275\u0275property("for", example_r16.previewConfig.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, example_r16.previewConfig.label));
  }
}
function DesignPatternsComponent_For_36_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DesignPatternsComponent_For_36_Conditional_5_Conditional_0_Template, 5, 6, "p-iftalabel");
    \u0275\u0275conditionalCreate(1, DesignPatternsComponent_For_36_Conditional_5_Conditional_1_Template, 5, 7, "p-iftalabel");
    \u0275\u0275conditionalCreate(2, DesignPatternsComponent_For_36_Conditional_5_Conditional_2_Template, 5, 7, "p-iftalabel");
  }
  if (rf & 2) {
    const example_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(example_r16.previewConfig.type === "text" ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(example_r16.previewConfig.type === "textarea" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(example_r16.previewConfig.type === "select" ? 2 : -1);
  }
}
function DesignPatternsComponent_For_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "h3", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, DesignPatternsComponent_For_36_Conditional_3_Template, 3, 3, "p", 10);
    \u0275\u0275elementStart(4, "div", 11);
    \u0275\u0275conditionalCreate(5, DesignPatternsComponent_For_36_Conditional_5_Template, 3, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 13)(7, "p-button", 14);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275listener("onClick", function DesignPatternsComponent_For_36_Template_p_button_onClick_7_listener() {
      const ctx_r19 = \u0275\u0275restoreView(_r15);
      const example_r16 = ctx_r19.$implicit;
      const \u0275$index_141_r21 = ctx_r19.$index;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.copyCode(example_r16.code, "input-" + \u0275$index_141_r21));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "pre", 15, 0);
    \u0275\u0275element(11, "code", 16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const example_r16 = ctx.$implicit;
    const \u0275$index_141_r21 = ctx.$index;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(example_r16.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(example_r16.description ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(example_r16.previewConfig ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ariaLabel", \u0275\u0275pipeBind1(8, 7, "common.copyCode"))("icon", ctx_r4.copiedIndex() === "input-" + \u0275$index_141_r21 ? "pi pi-check" : "pi pi-copy")("rounded", true);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-code", example_r16.code);
  }
}
var DesignPatternsComponent = class _DesignPatternsComponent {
  settingsService = inject(UserSettingsService);
  styleCardService = inject(StyleCardService);
  codeContainers = viewChildren("codeContainer", ...ngDevMode ? [{ debugName: "codeContainers" }] : (
    /* istanbul ignore next */
    []
  ));
  prismLoaded = false;
  copiedIndex = signal(null, ...ngDevMode ? [{ debugName: "copiedIndex" }] : (
    /* istanbul ignore next */
    []
  ));
  markForTranslation() {
    marker("dev.patterns.message.info");
    marker("dev.patterns.message.success");
    marker("dev.patterns.message.warn");
    marker("dev.patterns.message.error");
    marker("dev.patterns.message.info.desc");
    marker("dev.patterns.message.success.desc");
    marker("dev.patterns.message.warn.desc");
    marker("dev.patterns.message.error.desc");
    marker("dev.patterns.button.primary.desc");
    marker("dev.patterns.button.danger.desc");
    marker("dev.patterns.button.task.desc");
    marker("dev.patterns.button.icon.desc");
    marker("dev.patterns.button.tooltip");
    marker("dev.patterns.button.taskLabel");
    marker("dev.patterns.card.desc");
    marker("dev.patterns.cardHover.desc");
    marker("dev.patterns.cardText");
    marker("dev.patterns.input.text.label");
    marker("dev.patterns.input.text.desc");
    marker("dev.patterns.input.textarea.label");
    marker("dev.patterns.input.textarea.desc");
    marker("dev.patterns.input.select.label");
    marker("dev.patterns.input.select.desc");
  }
  messageExamples = [
    {
      label: "Info",
      code: `<p-message severity="info" icon="pi pi-info-circle font-bold" [text]="'dev.patterns.message.info' | translate" />`,
      description: "dev.patterns.message.info.desc",
      previewType: "message",
      previewConfig: {
        severity: "info",
        icon: "pi pi-info-circle font-bold",
        text: "dev.patterns.message.info"
      }
    },
    {
      label: "Success",
      code: `<p-message severity="success" icon="pi pi-check-circle font-bold" [text]="'dev.patterns.message.success' | translate" />`,
      description: "dev.patterns.message.success.desc",
      previewType: "message",
      previewConfig: {
        severity: "success",
        icon: "pi pi-check-circle font-bold",
        text: "dev.patterns.message.success"
      }
    },
    {
      label: "Warning",
      code: `<p-message severity="warn" icon="pi pi-exclamation-triangle font-bold" [text]="'dev.patterns.message.warn' | translate" />`,
      description: "dev.patterns.message.warn.desc",
      previewType: "message",
      previewConfig: {
        severity: "warn",
        icon: "pi pi-exclamation-triangle font-bold",
        text: "dev.patterns.message.warn"
      }
    },
    {
      label: "Error",
      code: `<p-message severity="error" icon="pi pi-times-circle font-bold" [text]="'dev.patterns.message.error' | translate" />`,
      description: "dev.patterns.message.error.desc",
      previewType: "message",
      previewConfig: {
        severity: "error",
        icon: "pi pi-times-circle font-bold",
        text: "dev.patterns.message.error"
      }
    },
    {
      label: "Text version",
      code: `<p-message variant="simple" size="small" severity="error" [text]="'dev.patterns.message.error' | translate" />`,
      description: "dev.patterns.message.error.desc",
      previewType: "message",
      previewConfig: {
        variant: "simple",
        size: "small",
        severity: "error",
        text: "dev.patterns.message.error"
      }
    }
  ];
  buttonExamples = [
    {
      label: "Primary & Secondary Outline",
      code: `<div class="flex gap-2">
    <p-button [label]="'common.save' | translate" icon="pi pi-check" />
    <p-button [label]="'common.cancel' | translate" icon="pi pi-times" severity="secondary" outlined styleClass='secondary-outline' />
</div>`,
      description: "dev.patterns.button.primary.desc",
      previewType: "buttons",
      previewConfig: {
        type: "primary-secondary",
        buttons: [
          { label: "common.save", icon: "pi pi-check", severity: "primary" },
          { label: "common.cancel", icon: "pi pi-times", severity: "secondary", outlined: true, styleClass: "secondary-outline" }
        ]
      }
    },
    {
      label: "Danger & Secondary Outline",
      code: `<div class="flex gap-2">
    <p-button [label]="'common.delete' | translate" icon="pi pi-trash" severity="danger" />
    <p-button [label]="'common.cancel' | translate" icon="pi pi-times" severity="secondary" outlined styleClass='secondary-outline' />
</div>`,
      description: "dev.patterns.button.danger.desc",
      previewType: "buttons",
      previewConfig: {
        type: "danger-secondary",
        buttons: [
          { label: "common.delete", icon: "pi pi-trash", severity: "danger" },
          { label: "common.cancel", icon: "pi pi-times", severity: "secondary", outlined: true, styleClass: "secondary-outline" }
        ]
      }
    },
    {
      label: "Secondary Task Button",
      code: `<p-button [label]="'dev.patterns.button.taskLabel' | translate" icon="pi pi-cog" outlined styleClass="secondary-outline" />`,
      description: "dev.patterns.button.task.desc",
      previewType: "buttons",
      previewConfig: {
        type: "task",
        buttons: [{ label: "dev.patterns.button.taskLabel", icon: "pi pi-cog", severity: "secondary", outlined: true, styleClass: "secondary-outline" }]
      }
    },
    {
      label: "Icon Buttons",
      code: `<div class="flex gap-2">
    <p-button icon="pi pi-trash" severity="danger" text rounded [pTooltip]="'dev.patterns.button.tooltip' | translate" tooltipPosition="top" />
    <p-button icon="pi pi-share-alt" text rounded [pTooltip]="'dev.patterns.button.tooltip' | translate" tooltipPosition="top" />
    <p-button icon="pi pi-sync" [pTooltip]="'dev.patterns.button.tooltip' | translate" tooltipPosition="top" />
</div>`,
      description: "dev.patterns.button.icon.desc",
      previewType: "buttons",
      previewConfig: {
        type: "icon",
        buttons: [
          { icon: "pi pi-trash", severity: "danger", text: true, rounded: true, tooltip: "dev.patterns.button.tooltip" },
          { icon: "pi pi-share-alt", severity: "primary", text: true, rounded: true, tooltip: "dev.patterns.button.tooltip" },
          { icon: "pi pi-sync", severity: "primary", tooltip: "dev.patterns.button.tooltip" }
        ]
      }
    }
  ];
  cardExamples = [
    {
      label: "Card",
      code: `<div class="${this.styleCardService.cardStyles()}">
    <!-- Content here -->
</div>`,
      description: "dev.patterns.card.desc",
      previewType: "card",
      previewConfig: {
        type: "standard",
        content: "Example content in a standard card"
      }
    },
    {
      label: "Card with hover effect",
      code: `<div class="${this.styleCardService.cardStyles(true)}">
    <!-- Content here -->
</div>`,
      description: "dev.patterns.cardHover.desc",
      previewType: "card",
      previewConfig: {
        type: "hover",
        content: "Example content in a hover card"
      }
    },
    {
      label: "Active card with hover effect",
      code: `<div class="${this.styleCardService.cardStyles(true, true)}">
    <!-- Content here -->
</div>`,
      description: "dev.patterns.cardHover.desc",
      previewType: "card",
      previewConfig: {
        type: "active",
        content: "Example content in an active hover card"
      }
    },
    {
      label: "Deleted card with hover effect",
      code: `<div class="${this.styleCardService.cardStyles(true, true, false, void 0, "border-red-500")}">
    <!-- Content here -->
</div>`,
      description: "dev.patterns.cardHover.desc",
      previewType: "card",
      previewConfig: {
        type: "deleted",
        content: "Example content in a deleted hover card"
      }
    }
  ];
  inputExamples = [
    {
      label: "Input Text with IFTA Label",
      code: `<p-iftalabel>
    <input pInputText id="example-input" [(ngModel)]="value" fluid />
    <label for="example-input">{{ 'dev.patterns.input.text.label' | translate }}</label>
</p-iftalabel>`,
      description: "dev.patterns.input.text.desc",
      previewType: "input",
      previewConfig: {
        type: "text",
        id: "example-input",
        label: "dev.patterns.input.text.label",
        model: "exampleValue"
      }
    },
    {
      label: "Textarea with IFTA Label",
      code: `<p-iftalabel>
    <textarea pInputTextarea id="example-textarea" [(ngModel)]="value" rows="3" fluid></textarea>
    <label for="example-textarea">{{ 'dev.patterns.input.textarea.label' | translate }}</label>
</p-iftalabel>`,
      description: "dev.patterns.input.textarea.desc",
      previewType: "input",
      previewConfig: {
        type: "textarea",
        id: "example-textarea",
        label: "dev.patterns.input.textarea.label",
        rows: 3,
        model: "exampleTextarea"
      }
    },
    {
      label: "Select with IFTA Label",
      code: `<p-iftalabel>
    <p-select 
        inputId="example-select" 
        [options]="options" [(ngModel)]="selectedOption" 
        optionLabel="label" optionValue="value"
        fluid
    />
    <label for="example-select">{{ 'dev.patterns.input.select.label' | translate }}</label>
</p-iftalabel>`,
      description: "dev.patterns.input.select.desc",
      previewType: "input",
      previewConfig: {
        type: "select",
        id: "example-select",
        label: "dev.patterns.input.select.label",
        model: "selectedOption"
      }
    }
  ];
  exampleValue = "";
  exampleTextarea = "";
  exampleOptions = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" }
  ];
  selectedOption = "";
  constructor() {
    effect(() => {
      const isDarkMode = this.settingsService.darkMode();
      if (this.prismLoaded) {
        this.loadPrismTheme(isDarkMode);
      }
    });
    effect(() => {
      this.codeContainers();
      setTimeout(() => {
        this.highlightAllCode();
      }, 100);
    });
  }
  highlightAllCode() {
    return __async(this, null, function* () {
      try {
        const { default: Prism } = yield import("./chunk-7W6HYFOI.js");
        yield import("./chunk-EOCUCU3P.js");
        this.prismLoaded = true;
        this.loadPrismTheme(this.settingsService.darkMode());
        this.codeContainers().forEach((container) => {
          const pre = container.nativeElement;
          const codeBlock = pre.querySelector("code");
          const code = pre.getAttribute("data-code");
          if (codeBlock && code) {
            codeBlock.className = "language-html";
            codeBlock.textContent = code;
            Prism.highlightElement(codeBlock);
          }
        });
      } catch (error) {
        console.error("Failed to load Prism:", error);
      }
    });
  }
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
  copyCode(code, index) {
    return __async(this, null, function* () {
      try {
        yield navigator.clipboard.writeText(code);
        this.copiedIndex.set(index);
        setTimeout(() => this.copiedIndex.set(null), 2e3);
      } catch (err) {
        console.error("Failed to copy code:", err);
      }
    });
  }
  static \u0275fac = function DesignPatternsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DesignPatternsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DesignPatternsComponent, selectors: [["aida-design-patterns"]], viewQuery: function DesignPatternsComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.codeContainers, _c0, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, decls: 37, vars: 21, consts: [["codeContainer", ""], ["id", "wb-cont"], ["value", "0"], ["value", "1"], ["value", "2"], ["value", "3"], [1, "flex", "flex-column", "gap-4"], [1, "surface-section", "border-1", "surface-border", "border-round", "p-4"], [3, "class"], [1, "mt-0"], [1, "text-color-secondary", "mt-0"], [1, "mb-3"], [3, "icon", "severity", "size", "text", "variant"], [1, "relative"], ["severity", "secondary", "size", "small", "styleClass", "absolute top-0 right-0 mt-2 mr-2 secondary-outline", 3, "onClick", "ariaLabel", "icon", "rounded"], [1, "m-0"], [1, "language-html"], [1, "flex", "gap-2"], ["tooltipPosition", "top", 3, "icon", "label", "outlined", "pTooltip", "rounded", "severity", "styleClass", "text"], ["fluid", "", "pInputText", "", 3, "ngModelChange", "ngModel", "id"], [3, "for"], ["fluid", "", "pInputTextarea", "", 3, "ngModelChange", "ngModel", "id", "rows"], ["fluid", "", "optionLabel", "label", "optionValue", "value", 3, "ngModelChange", "ngModel", "inputId", "options"]], template: function DesignPatternsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h1", 1);
      \u0275\u0275text(1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p");
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p-tabs", 2)(8, "p-tablist")(9, "p-tab", 2);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "p-tab", 3);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "p-tab", 4);
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "p-tab", 5);
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "p-tabpanel", 2)(22, "div", 6);
      \u0275\u0275repeaterCreate(23, DesignPatternsComponent_For_24_Template, 12, 9, "div", 7, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "p-tabpanel", 3)(26, "div", 6);
      \u0275\u0275repeaterCreate(27, DesignPatternsComponent_For_28_Template, 12, 9, "div", 7, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "p-tabpanel", 4)(30, "div", 6);
      \u0275\u0275repeaterCreate(31, DesignPatternsComponent_For_32_Template, 12, 11, "div", 8, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "p-tabpanel", 5)(34, "div", 6);
      \u0275\u0275repeaterCreate(35, DesignPatternsComponent_For_36_Template, 12, 9, "div", 7, _forTrack0);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 7, "dev.patterns._title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(5, 9, "dev.patterns.description"), "", \u0275\u0275pipeBind1(6, 11, "dev.patterns.description2"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 13, "dev.patterns.tab.messages"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 15, "dev.patterns.tab.buttons"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 17, "dev.patterns.tab.cards"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 19, "dev.patterns.tab.inputs"));
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.messageExamples);
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.buttonExamples);
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.cardExamples);
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.inputExamples);
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, ButtonModule, Button, IftaLabelModule, IftaLabel, InputTextModule, InputText, MessageModule, Message, SelectModule, Select, TabsModule, Tabs, TabPanel, TabList, Tab, TextareaModule, Textarea, TooltipModule, Tooltip, TranslatePipe], styles: ['\npre[_ngcontent-%COMP%] {\n  background-color: var(--surface-ground);\n  border: 1px solid var(--surface-border);\n  border-radius: var(--border-radius);\n  padding: 1rem;\n  overflow-x: auto;\n}\npre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-family:\n    "Courier New",\n    Courier,\n    monospace;\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n/*# sourceMappingURL=design-patterns.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DesignPatternsComponent, [{
    type: Component,
    args: [{ selector: "aida-design-patterns", standalone: true, imports: [FormsModule, TranslatePipe, ButtonModule, IftaLabelModule, InputTextModule, MessageModule, SelectModule, TabsModule, TextareaModule, TooltipModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<h1 id="wb-cont">{{ 'dev.patterns._title' | translate }}</h1>
<p>{{ 'dev.patterns.description' | translate }}{{ 'dev.patterns.description2' | translate }}</p>

<p-tabs value="0">
  <p-tablist>
    <p-tab value="0">{{ 'dev.patterns.tab.messages' | translate }}</p-tab>
    <p-tab value="1">{{ 'dev.patterns.tab.buttons' | translate }}</p-tab>
    <p-tab value="2">{{ 'dev.patterns.tab.cards' | translate }}</p-tab>
    <p-tab value="3">{{ 'dev.patterns.tab.inputs' | translate }}</p-tab>
  </p-tablist>
  <!-- Messages Tab -->
  <p-tabpanel value="0">
    <div class="flex flex-column gap-4">
      @for (example of messageExamples; track example.label; let i = $index) {
        <div class="surface-section border-1 surface-border border-round p-4">
          <h3 class="mt-0">{{ example.label }}</h3>
          @if (example.description) {
            <p class="text-color-secondary mt-0">{{ example.description | translate }}</p>
          }

          <!-- Live Preview (config-driven) -->
          <div class="mb-3">
            @if (example.previewConfig) {
              <p-message
                [icon]="example.previewConfig.icon"
                [severity]="example.previewConfig.severity"
                [size]="example.previewConfig.size"
                [text]="example.previewConfig.text | translate"
                [variant]="example.previewConfig.variant"
              />
            }
          </div>

          <!-- Code Block -->
          <div class="relative">
            <p-button
              [ariaLabel]="'common.copyCode' | translate"
              [icon]="copiedIndex() === 'message-' + i ? 'pi pi-check' : 'pi pi-copy'"
              [rounded]="true"
              (onClick)="copyCode(example.code, 'message-' + i)"
              severity="secondary"
              size="small"
              styleClass="absolute top-0 right-0 mt-2 mr-2 secondary-outline"
            />
            <pre [attr.data-code]="example.code" class="m-0" #codeContainer><code class="language-html"></code></pre>
          </div>
        </div>
      }
    </div>
  </p-tabpanel>

  <!-- Buttons Tab -->
  <p-tabpanel value="1">
    <div class="flex flex-column gap-4">
      @for (example of buttonExamples; track example.label; let i = $index) {
        <div class="surface-section border-1 surface-border border-round p-4">
          <h3 class="mt-0">{{ example.label }}</h3>
          @if (example.description) {
            <p class="text-color-secondary mt-0">{{ example.description | translate }}</p>
          }

          <!-- Live Preview (config-driven) -->
          <div class="mb-3">
            @if (example.previewConfig) {
              <div class="flex gap-2">
                @for (btn of example.previewConfig.buttons; track $index) {
                  <p-button
                    [icon]="btn.icon"
                    [label]="btn.label ? (btn.label | translate) : undefined"
                    [outlined]="btn.outlined"
                    [pTooltip]="btn.tooltip ? (btn.tooltip | translate) : undefined"
                    [rounded]="btn.rounded"
                    [severity]="btn.severity"
                    [styleClass]="btn.styleClass"
                    [text]="btn.text"
                    tooltipPosition="top"
                  />
                }
              </div>
            }
          </div>

          <!-- Code Block -->
          <div class="relative">
            <p-button
              [ariaLabel]="'common.copyCode' | translate"
              [icon]="copiedIndex() === 'button-' + i ? 'pi pi-check' : 'pi pi-copy'"
              [rounded]="true"
              (onClick)="copyCode(example.code, 'button-' + i)"
              severity="secondary"
              size="small"
              styleClass="absolute top-0 right-0 mt-2 mr-2 secondary-outline"
            />
            <pre [attr.data-code]="example.code" class="m-0" #codeContainer><code class="language-html"></code></pre>
          </div>
        </div>
      }
    </div>
  </p-tabpanel>

  <!-- Card Styles Tab -->
  <p-tabpanel value="2">
    <div class="flex flex-column gap-4">
      @for (example of cardExamples; track example.label; let i = $index) {
        <div [class]="styleCardService.cardStyles()">
          <h3 class="mt-0">{{ example.label }}</h3>
          @if (example.description) {
            <p class="text-color-secondary mt-0">{{ example.description | translate }}</p>
          }

          <!-- Live Preview (config-driven) -->
          <div class="mb-3">
            @if (example.previewConfig) {
              @if (example.previewConfig.type === 'standard') {
                <div [class]="styleCardService.cardStyles()">
                  {{ example.previewConfig.content }}
                </div>
              }
              @if (example.previewConfig.type === 'hover') {
                <div [class]="styleCardService.cardStyles(true)">
                  {{ example.previewConfig.content }}
                </div>
              }
              @if (example.previewConfig.type === 'active') {
                <div [class]="styleCardService.cardStyles(true, true)">
                  {{ example.previewConfig.content }}
                </div>
              }
              @if (example.previewConfig.type === 'deleted') {
                <div [class]="styleCardService.cardStyles(true, false, false, undefined, 'border-red-500')">
                  {{ example.previewConfig.content }}
                </div>
              }
            }
          </div>

          <!-- Code Block -->
          <div class="relative">
            <p-button
              [ariaLabel]="'common.copyCode' | translate"
              [icon]="copiedIndex() === 'card-' + i ? 'pi pi-check' : 'pi pi-copy'"
              [rounded]="true"
              (onClick)="copyCode(example.code, 'card-' + i)"
              severity="secondary"
              size="small"
              styleClass="absolute top-0 right-0 mt-2 mr-2 secondary-outline"
            />
            <pre [attr.data-code]="example.code" class="m-0" #codeContainer><code class="language-html"></code></pre>
          </div>
        </div>
      }
    </div>
  </p-tabpanel>

  <!-- Input Fields Tab -->
  <p-tabpanel value="3">
    <div class="flex flex-column gap-4">
      @for (example of inputExamples; track example.label; let i = $index) {
        <div class="surface-section border-1 surface-border border-round p-4">
          <h3 class="mt-0">{{ example.label }}</h3>
          @if (example.description) {
            <p class="text-color-secondary mt-0">{{ example.description | translate }}</p>
          }

          <!-- Live Preview (config-driven) -->
          <div class="mb-3">
            @if (example.previewConfig) {
              @if (example.previewConfig.type === 'text') {
                <p-iftalabel>
                  <input [(ngModel)]="exampleValue" [id]="example.previewConfig.id" fluid pInputText />
                  <label [for]="example.previewConfig.id">{{ example.previewConfig.label | translate }}</label>
                </p-iftalabel>
              }
              @if (example.previewConfig.type === 'textarea') {
                <p-iftalabel>
                  <textarea [(ngModel)]="exampleTextarea" [id]="example.previewConfig.id" [rows]="example.previewConfig.rows" fluid pInputTextarea></textarea>
                  <label [for]="example.previewConfig.id">{{ example.previewConfig.label | translate }}</label>
                </p-iftalabel>
              }
              @if (example.previewConfig.type === 'select') {
                <p-iftalabel>
                  <p-select [(ngModel)]="selectedOption" [inputId]="example.previewConfig.id" [options]="exampleOptions" fluid optionLabel="label" optionValue="value" />
                  <label [for]="example.previewConfig.id">{{ example.previewConfig.label | translate }}</label>
                </p-iftalabel>
              }
            }
          </div>

          <!-- Code Block -->
          <div class="relative">
            <p-button
              [ariaLabel]="'common.copyCode' | translate"
              [icon]="copiedIndex() === 'input-' + i ? 'pi pi-check' : 'pi pi-copy'"
              [rounded]="true"
              (onClick)="copyCode(example.code, 'input-' + i)"
              severity="secondary"
              size="small"
              styleClass="absolute top-0 right-0 mt-2 mr-2 secondary-outline"
            />
            <pre [attr.data-code]="example.code" class="m-0" #codeContainer><code class="language-html"></code></pre>
          </div>
        </div>
      }
    </div>
  </p-tabpanel>
</p-tabs>
`, styles: ['/* src/app/views/toolbox/dev-tools/design-patterns/design-patterns.component.css */\npre {\n  background-color: var(--surface-ground);\n  border: 1px solid var(--surface-border);\n  border-radius: var(--border-radius);\n  padding: 1rem;\n  overflow-x: auto;\n}\npre code {\n  font-family:\n    "Courier New",\n    Courier,\n    monospace;\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n/*# sourceMappingURL=design-patterns.component.css.map */\n'] }]
  }], () => [], { codeContainers: [{ type: ViewChildren, args: ["codeContainer", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DesignPatternsComponent, { className: "DesignPatternsComponent", filePath: "src/app/views/toolbox/dev-tools/design-patterns/design-patterns.component.ts", lineNumber: 74 });
})();
export {
  DesignPatternsComponent
};
//# sourceMappingURL=chunk-5AXIVMBU.js.map
