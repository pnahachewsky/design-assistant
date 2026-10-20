import {
  Dialog,
  DialogModule
} from "./chunk-WLUUE74Y.js";
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
  FormsModule,
  NgControlStatus,
  NgModel,
  PrimeTemplate,
  Tooltip,
  TooltipModule,
  UserSettingsService,
  marker
} from "./chunk-AGPMTYRP.js";
import {
  CommonModule,
  NgTemplateOutlet
} from "./chunk-MDI4WJGA.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  TranslatePipe,
  TranslateService,
  effect,
  forwardRef,
  inject,
  input,
  setClassMetadata,
  setClassMetadataAsync,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefer,
  ɵɵdeferOnIdle,
  ɵɵdefineComponent,
  ɵɵdomTemplate,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-KRHY6Z2H.js";

// src/app/components/user-settings/user-settings.component.ts
var UserSettingsComponent_Conditional_4_Defer_24_DepsFn = () => [import("./chunk-XR4R7HYW.js").then((m) => m.DoormatsComponent), TranslatePipe];
var _c0 = () => ({ width: "50vw" });
var _c1 = () => ({ "1199px": "75vw", "575": "90vw" });
var _c2 = () => ({ showPreview: true });
var _c3 = () => ({ showPreview: false });
var _forTrack0 = ($index, $item) => $item.label;
function UserSettingsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "settings.description"), " ");
  }
}
function UserSettingsComponent_Conditional_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r3.label, " ");
  }
}
function UserSettingsComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "span", 3);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p-selectbutton", 4);
    \u0275\u0275twoWayListener("ngModelChange", function UserSettingsComponent_Conditional_2_Template_p_selectbutton_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedLang, $event) || (ctx_r1.selectedLang = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(5, UserSettingsComponent_Conditional_2_ng_template_5_Template, 1, 1, "ng-template", 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "settings.language"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedLang);
    \u0275\u0275property("options", ctx_r1.langOptions);
  }
}
function UserSettingsComponent_Conditional_3_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r5.label, " ");
  }
}
function UserSettingsComponent_Conditional_3_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r6.label, " ");
  }
}
function UserSettingsComponent_Conditional_3_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const selectedItem_r7 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", selectedItem_r7.label, " ");
  }
}
function UserSettingsComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "span", 3);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 6)(5, "p-selectbutton", 7);
    \u0275\u0275twoWayListener("ngModelChange", function UserSettingsComponent_Conditional_3_Template_p_selectbutton_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedTheme, $event) || (ctx_r1.selectedTheme = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onChange", function UserSettingsComponent_Conditional_3_Template_p_selectbutton_onChange_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changeTheme());
    });
    \u0275\u0275template(6, UserSettingsComponent_Conditional_3_ng_template_6_Template, 1, 1, "ng-template", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p-select", 8);
    \u0275\u0275twoWayListener("ngModelChange", function UserSettingsComponent_Conditional_3_Template_p_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedScheme, $event) || (ctx_r1.selectedScheme = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onChange", function UserSettingsComponent_Conditional_3_Template_p_select_onChange_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changeScheme());
    });
    \u0275\u0275template(8, UserSettingsComponent_Conditional_3_ng_template_8_Template, 1, 1, "ng-template", 5)(9, UserSettingsComponent_Conditional_3_ng_template_9_Template, 1, 1, "ng-template", 9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 5, "settings.theme"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedTheme);
    \u0275\u0275property("options", ctx_r1.themeOptions);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedScheme);
    \u0275\u0275property("options", ctx_r1.colorSchemes);
  }
}
function UserSettingsComponent_Conditional_4_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "p-checkbox", 18);
    \u0275\u0275twoWayListener("ngModelChange", function UserSettingsComponent_Conditional_4_For_6_Template_p_checkbox_ngModelChange_1_listener($event) {
      const checkbox_r10 = \u0275\u0275restoreView(_r9).$implicit;
      \u0275\u0275twoWayBindingSet(checkbox_r10["value"], $event) || (checkbox_r10["value"] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 19);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const checkbox_r10 = ctx.$implicit;
    const \u0275$index_49_r11 = ctx.$index;
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", checkbox_r10["value"]);
    \u0275\u0275property("binary", true)("inputId", "version" + \u0275$index_49_r11);
    \u0275\u0275advance();
    \u0275\u0275property("for", "version" + \u0275$index_49_r11);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(checkbox_r10.label);
  }
}
function UserSettingsComponent_Conditional_4_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const paragraph_r12 = ctx.$implicit;
    const \u0275$index_60_r13 = ctx.$index;
    \u0275\u0275classProp("mt-0", \u0275$index_60_r13 === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(paragraph_r12);
  }
}
function UserSettingsComponent_Conditional_4_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function UserSettingsComponent_Conditional_4_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function UserSettingsComponent_Conditional_4_Defer_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "aida-doormats", 20);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 5, "settings.relatedTools"));
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("topic");
    \u0275\u0275property("headingLevel", "h3")("keys", ctx_r1.versionDoormats);
  }
}
function UserSettingsComponent_Conditional_4_ng_template_26_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", \u0275\u0275pipeBind1(2, 1, "common.excluded"), ")");
  }
}
function UserSettingsComponent_Conditional_4_ng_template_26_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", \u0275\u0275pipeBind1(2, 1, "common.excluded"), ")");
  }
}
function UserSettingsComponent_Conditional_4_ng_template_26_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", \u0275\u0275pipeBind1(2, 1, "common.excluded"), ")");
  }
}
function UserSettingsComponent_Conditional_4_ng_template_26_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", \u0275\u0275pipeBind1(2, 1, "common.excluded"), ")");
  }
}
function UserSettingsComponent_Conditional_4_ng_template_26_Conditional_20_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", \u0275\u0275pipeBind1(2, 1, "common.excluded"), ")");
  }
}
function UserSettingsComponent_Conditional_4_ng_template_26_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275conditionalCreate(1, UserSettingsComponent_Conditional_4_ng_template_26_Conditional_20_Conditional_1_Template, 3, 3, "span", 21);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("line-through", !ctx_r1.settingsService.includePreview());
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.settingsService.includePreview() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "common.source.preview"), " ");
  }
}
function UserSettingsComponent_Conditional_4_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul")(1, "li");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "li");
    \u0275\u0275conditionalCreate(5, UserSettingsComponent_Conditional_4_ng_template_26_Conditional_5_Template, 3, 3, "span", 21);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "li");
    \u0275\u0275conditionalCreate(9, UserSettingsComponent_Conditional_4_ng_template_26_Conditional_9_Template, 3, 3, "span", 21);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "li");
    \u0275\u0275conditionalCreate(13, UserSettingsComponent_Conditional_4_ng_template_26_Conditional_13_Template, 3, 3, "span", 21);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "li");
    \u0275\u0275conditionalCreate(17, UserSettingsComponent_Conditional_4_ng_template_26_Conditional_17_Template, 3, 3, "span", 21);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(20, UserSettingsComponent_Conditional_4_ng_template_26_Conditional_20_Template, 4, 6, "li", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const showPreview_r14 = ctx.showPreview;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 18, "common.source.live"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("line-through", !ctx_r1.settingsService.includeGitHub());
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.settingsService.includeGitHub() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 20, "common.source.protoGH"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("line-through", !ctx_r1.settingsService.includeGitHub() || !ctx_r1.settingsService.includeBaseline());
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.settingsService.includeGitHub() || !ctx_r1.settingsService.includeBaseline() ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 22, "common.source.baseGH"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("line-through", !ctx_r1.settingsService.includeLocal());
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.settingsService.includeLocal() ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 24, "common.source.protoUT"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("line-through", !ctx_r1.settingsService.includeLocal() || !ctx_r1.settingsService.includeBaseline());
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.settingsService.includeLocal() || !ctx_r1.settingsService.includeBaseline() ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 26, "common.source.baseUT"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(showPreview_r14 ? 20 : -1);
  }
}
function UserSettingsComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "p-button", 11);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("click", function UserSettingsComponent_Conditional_4_Template_p_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showVersionHelp = true);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 6);
    \u0275\u0275repeaterCreate(5, UserSettingsComponent_Conditional_4_For_6_Template, 4, 5, "div", 12, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p-dialog", 13);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275twoWayListener("visibleChange", function UserSettingsComponent_Conditional_4_Template_p_dialog_visibleChange_7_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.showVersionHelp, $event) || (ctx_r1.showVersionHelp = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(9, UserSettingsComponent_Conditional_4_For_10_Template, 2, 3, "p", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementStart(12, "div", 15)(13, "div")(14, "h2", 16);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, UserSettingsComponent_Conditional_4_ng_container_17_Template, 1, 0, "ng-container", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div")(19, "h2", 16);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, UserSettingsComponent_Conditional_4_ng_container_22_Template, 1, 0, "ng-container", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275domTemplate(23, UserSettingsComponent_Conditional_4_Defer_23_Template, 4, 7);
    \u0275\u0275defer(24, 23, UserSettingsComponent_Conditional_4_Defer_24_DepsFn);
    \u0275\u0275deferOnIdle();
    \u0275\u0275template(26, UserSettingsComponent_Conditional_4_ng_template_26_Template, 21, 28, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sourceList_r15 = \u0275\u0275reference(27);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("label", \u0275\u0275pipeBind1(2, 16, "settings.versions.label"))("pTooltip", \u0275\u0275pipeBind1(3, 18, "settings.versions.tooltip"));
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.versionOptions);
    \u0275\u0275advance(2);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(28, _c0));
    \u0275\u0275property("header", \u0275\u0275interpolate(\u0275\u0275pipeBind1(8, 20, "settings.versions.tooltip")));
    \u0275\u0275twoWayProperty("visible", ctx_r1.showVersionHelp);
    \u0275\u0275property("appendTo", "body")("breakpoints", \u0275\u0275pureFunction0(29, _c1))("modal", true);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(11, 22, "settings.versions.help").split("|"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 24, "settings.versions.compareList"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", sourceList_r15)("ngTemplateOutletContext", \u0275\u0275pureFunction0(30, _c2));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 26, "settings.versions.exportList"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", sourceList_r15)("ngTemplateOutletContext", \u0275\u0275pureFunction0(31, _c3));
  }
}
function UserSettingsComponent_Conditional_5_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r17 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r17.label, " ");
  }
}
function UserSettingsComponent_Conditional_5_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const paragraph_r18 = ctx.$implicit;
    const \u0275$index_164_r19 = ctx.$index;
    \u0275\u0275classProp("mt-0", \u0275$index_164_r19 === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(paragraph_r18);
  }
}
function UserSettingsComponent_Conditional_5_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const listItem_r20 = ctx.$implicit;
    const \u0275$index_171_r21 = ctx.$index;
    \u0275\u0275classProp("mt-0", \u0275$index_171_r21 === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(listItem_r20);
  }
}
function UserSettingsComponent_Conditional_5_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const paragraph_r22 = ctx.$implicit;
    const \u0275$index_176_r23 = ctx.$index;
    \u0275\u0275classProp("mt-0", \u0275$index_176_r23 === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(paragraph_r22);
  }
}
function UserSettingsComponent_Conditional_5_Defer_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "aida-doormats", 20);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 5, "settings.relatedTools"));
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("topic");
    \u0275\u0275property("headingLevel", "h2")("keys", ctx_r1.childPagesDoormats);
  }
}
function UserSettingsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "p-button", 11);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("click", function UserSettingsComponent_Conditional_5_Template_p_button_click_1_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showChildrenHelp = true);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p-selectbutton", 23);
    \u0275\u0275listener("ngModelChange", function UserSettingsComponent_Conditional_5_Template_p_selectbutton_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.settingsService.setAutoAddChildren($event));
    });
    \u0275\u0275template(5, UserSettingsComponent_Conditional_5_ng_template_5_Template, 1, 1, "ng-template", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p-dialog", 13);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275twoWayListener("visibleChange", function UserSettingsComponent_Conditional_5_Template_p_dialog_visibleChange_6_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.showChildrenHelp, $event) || (ctx_r1.showChildrenHelp = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(8, UserSettingsComponent_Conditional_5_For_9_Template, 2, 3, "p", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementStart(11, "ul");
    \u0275\u0275repeaterCreate(12, UserSettingsComponent_Conditional_5_For_13_Template, 2, 3, "li", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(15, UserSettingsComponent_Conditional_5_For_16_Template, 2, 3, "p", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275domTemplate(18, UserSettingsComponent_Conditional_5_Defer_18_Template, 4, 7);
    \u0275\u0275defer(19, 18, UserSettingsComponent_Conditional_4_Defer_24_DepsFn);
    \u0275\u0275deferOnIdle();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("label", \u0275\u0275pipeBind1(2, 14, "settings.childPages"))("pTooltip", \u0275\u0275pipeBind1(3, 16, "settings.childPages.tooltip"));
    \u0275\u0275advance(3);
    \u0275\u0275property("allowEmpty", false)("ngModel", ctx_r1.settingsService.autoAddChildren())("options", ctx_r1.childPagesOptions)("unselectable", true);
    \u0275\u0275advance(2);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(26, _c0));
    \u0275\u0275property("header", \u0275\u0275interpolate(\u0275\u0275pipeBind1(7, 18, "settings.childPages.tooltip")));
    \u0275\u0275twoWayProperty("visible", ctx_r1.showChildrenHelp);
    \u0275\u0275property("appendTo", "body")("breakpoints", \u0275\u0275pureFunction0(27, _c1))("modal", true);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(10, 20, "settings.childPages.help.p1").split("|"));
    \u0275\u0275advance(4);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(14, 22, "settings.childPages.help.l1").split("|"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(17, 24, "settings.childPages.help.p2").split("|"));
  }
}
var UserSettingsComponent = class _UserSettingsComponent {
  settingsService = inject(UserSettingsService);
  translate = inject(TranslateService);
  projectState = inject(ProjectStateService);
  mode = input("all", ...ngDevMode ? [{ debugName: "mode" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    effect(() => {
      this.selectedTheme = this.settingsService.darkMode();
      this.selectedScheme = this.settingsService.colorScheme();
    });
  }
  // Language
  get langOptions() {
    return [
      { label: this.translate.instant("common.language.english"), value: "en" },
      { label: this.translate.instant("common.language.french"), value: "fr" }
    ];
  }
  get selectedLang() {
    return this.settingsService.currentLang();
  }
  set selectedLang(value) {
    this.settingsService.setLanguage(value);
  }
  // Dark & Light theme
  get themeOptions() {
    return [
      { label: this.translate.instant("settings.theme.light"), value: false },
      { label: this.translate.instant("settings.theme.dark"), value: true }
    ];
  }
  selectedTheme = this.settingsService.darkMode();
  changeTheme() {
    this.settingsService.toggle();
  }
  // Default & other themes
  get colorSchemes() {
    return [
      { label: this.translate.instant("settings.theme.default"), value: "default" },
      { label: this.translate.instant("settings.theme.deutan"), value: "deutan" },
      { label: this.translate.instant("settings.theme.protan"), value: "protan" },
      { label: this.translate.instant("settings.theme.tritan"), value: "tritan" },
      { label: this.translate.instant("settings.theme.custom"), value: "custom" }
    ];
  }
  selectedScheme = this.settingsService.colorScheme();
  changeScheme() {
    this.settingsService.setColorScheme(this.selectedScheme);
  }
  // Versions
  get versionOptions() {
    const options = [
      { label: this.translate.instant("common.source.preview"), value: this.settingsService.includePreview },
      { label: this.translate.instant("project.repo.storage.github"), value: this.settingsService.includeGitHub },
      { label: this.translate.instant("project.repo.storage.local"), value: this.settingsService.includeLocal }
    ];
    if (this.projectState.getProject().github.hasBaselineRepo) {
      options.push({ label: this.translate.instant("common.version.baseline"), value: this.settingsService.includeBaseline });
    }
    return options;
  }
  showVersionHelp = false;
  versionDoormats = ["exportPages", "editPages", "compare"];
  // Auto-add child pages
  get childPagesOptions() {
    return [
      { label: this.translate.instant("settings.childPages.promptToAdd"), value: false },
      { label: this.translate.instant("settings.childPages.autoAdd"), value: true }
    ];
  }
  showChildrenHelp = false;
  childPagesDoormats = ["iaDiagram", "addPages"];
  markForTranslation() {
    marker("settings.versions.help");
    marker("settings.childPages.help.l1");
    marker("settings.childPages.help.p1");
    marker("settings.childPages.help.p2");
  }
  static \u0275fac = function UserSettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserSettingsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserSettingsComponent, selectors: [["aida-user-settings"]], inputs: { mode: [1, "mode"] }, decls: 6, vars: 5, consts: [["sourceList", ""], [1, "flex", "flex-column", "gap-2"], [1, "flex", "flex-column", "border-round", "p-1", "text-color-secondary", "hover:surface-100", "hover:text-primary"], [1, "text-xs", "my-1"], ["optionLabel", "label", "optionValue", "value", "unselectable", "true", 1, "mb-0", 3, "ngModelChange", "ngModel", "options"], ["pTemplate", "item"], [1, "flex", "flex-row", "gap-2"], ["optionLabel", "label", "optionValue", "value", "unselectable", "true", 1, "mb-0", 3, "ngModelChange", "onChange", "ngModel", "options"], ["appendTo", "body", "optionLabel", "label", "optionValue", "value", 1, "flex-1", 3, "ngModelChange", "onChange", "ngModel", "options"], ["pTemplate", "selectedItem"], [1, "flex", "flex-column", "border-round", "p-1", "text-color-secondary", "hover:surface-100"], ["icon", "pi pi-question-circle", "iconPos", "right", "severity", "secondary", "size", "small", "styleClass", "p-0 my-1 hover:text-primary", "text", "", "tooltipPosition", "top", "tooltipStyleClass", "white-space-nowrap", 3, "click", "label", "pTooltip"], [1, "flex", "gap-1", "align-items-center"], [3, "visibleChange", "visible", "appendTo", "breakpoints", "modal", "header"], [3, "mt-0"], [1, "flex", "flex-wrap", "gap-5"], [1, "text-lg"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["size", "large", 3, "ngModelChange", "ngModel", "binary", "inputId"], [1, "white-space-nowrap", "hover:text-primary", 3, "for"], [3, "headingLevel", "keys"], [1, "sr-only"], [3, "line-through"], ["optionLabel", "label", "optionValue", "value", 1, "mb-0", 3, "ngModelChange", "allowEmpty", "ngModel", "options", "unselectable"]], template: function UserSettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275conditionalCreate(1, UserSettingsComponent_Conditional_1_Template, 2, 3);
      \u0275\u0275conditionalCreate(2, UserSettingsComponent_Conditional_2_Template, 6, 5, "div", 2);
      \u0275\u0275conditionalCreate(3, UserSettingsComponent_Conditional_3_Template, 10, 7, "div", 2);
      \u0275\u0275conditionalCreate(4, UserSettingsComponent_Conditional_4_Template, 28, 32);
      \u0275\u0275conditionalCreate(5, UserSettingsComponent_Conditional_5_Template, 21, 28);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.mode() === "all" ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.mode() === "language" || ctx.mode() === "all" ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.mode() === "theme" || ctx.mode() === "all" ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.mode() === "versions" || ctx.mode() === "all" ? 4 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.mode() === "autoChildren" || ctx.mode() === "all" ? 5 : -1);
    }
  }, dependencies: () => [CommonModule, NgTemplateOutlet, FormsModule, NgControlStatus, NgModel, ButtonModule, Button, PrimeTemplate, CheckboxModule, Checkbox, DialogModule, Dialog, SelectButtonModule, SelectButton, SelectModule, Select, TooltipModule, Tooltip, TranslatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadataAsync(UserSettingsComponent, () => [import("./chunk-XR4R7HYW.js").then((m) => m.DoormatsComponent)], (DoormatsComponent) => {
    setClassMetadata(UserSettingsComponent, [{
      type: Component,
      args: [{ selector: "aida-user-settings", imports: [CommonModule, FormsModule, TranslatePipe, ButtonModule, CheckboxModule, DialogModule, SelectButtonModule, SelectModule, TooltipModule, forwardRef(() => DoormatsComponent)], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="flex flex-column gap-2">
  @if (mode() === 'all') {
    {{ 'settings.description' | translate }}
  }
  @if (mode() === 'language' || mode() === 'all') {
    <div class="flex flex-column border-round p-1 text-color-secondary hover:surface-100 hover:text-primary">
      <span class="text-xs my-1">{{ 'settings.language' | translate }}</span>
      <p-selectbutton [(ngModel)]="selectedLang" [options]="langOptions" class="mb-0" optionLabel="label" optionValue="value" unselectable="true">
        <ng-template let-item pTemplate="item">
          {{ item.label }}
        </ng-template>
      </p-selectbutton>
    </div>
  }
  @if (mode() === 'theme' || mode() === 'all') {
    <div class="flex flex-column border-round p-1 text-color-secondary hover:surface-100 hover:text-primary">
      <span class="text-xs my-1">{{ 'settings.theme' | translate }}</span>
      <div class="flex flex-row gap-2">
        <p-selectbutton [(ngModel)]="selectedTheme" [options]="themeOptions" (onChange)="changeTheme()" class="mb-0" optionLabel="label" optionValue="value" unselectable="true">
          <ng-template let-item pTemplate="item">
            {{ item.label }}
          </ng-template>
        </p-selectbutton>

        <p-select [(ngModel)]="selectedScheme" [options]="colorSchemes" (onChange)="changeScheme()" class="mb-0" class="flex-1" appendTo="body" optionLabel="label" optionValue="value">
          <ng-template let-item pTemplate="item">
            {{ item.label }}
          </ng-template>
          <ng-template let-selectedItem pTemplate="selectedItem">
            {{ selectedItem.label }}
          </ng-template>
        </p-select>
      </div>
    </div>
  }
  @if (mode() === 'versions' || mode() === 'all') {
    <div class="flex flex-column border-round p-1 text-color-secondary hover:surface-100">
      <p-button
        [label]="'settings.versions.label' | translate"
        [pTooltip]="'settings.versions.tooltip' | translate"
        (click)="showVersionHelp = true"
        icon="pi pi-question-circle"
        iconPos="right"
        severity="secondary"
        size="small"
        styleClass="p-0 my-1 hover:text-primary"
        text
        tooltipPosition="top"
        tooltipStyleClass="white-space-nowrap"
      />

      <div class="flex flex-row gap-2">
        @for (checkbox of versionOptions; track checkbox.label; let i = $index) {
          <div class="flex gap-1 align-items-center">
            <p-checkbox [(ngModel)]="checkbox['value']" [binary]="true" [inputId]="'version' + i" size="large" />
            <label [for]="'version' + i" class="white-space-nowrap hover:text-primary">{{ checkbox.label }}</label>
          </div>
        }
      </div>
    </div>
    <!--Version availability help Dialog-->
    <p-dialog
      [(visible)]="showVersionHelp"
      [appendTo]="'body'"
      [breakpoints]="{ '1199px': '75vw', '575': '90vw' }"
      [modal]="true"
      [style]="{ width: '50vw' }"
      header="{{ 'settings.versions.tooltip' | translate }}"
    >
      @for (paragraph of ('settings.versions.help' | translate).split('|'); track paragraph; let first = $first) {
        <p [class.mt-0]="$first">{{ paragraph }}</p>
      }

      <div class="flex flex-wrap gap-5">
        <div>
          <h2 class="text-lg">{{ 'settings.versions.compareList' | translate }}</h2>
          <ng-container *ngTemplateOutlet="sourceList; context: { showPreview: true }" />
        </div>
        <div>
          <h2 class="text-lg">{{ 'settings.versions.exportList' | translate }}</h2>
          <ng-container *ngTemplateOutlet="sourceList; context: { showPreview: false }" />
        </div>
      </div>

      @defer {
        <h2>{{ 'settings.relatedTools' | translate }}</h2>
        <aida-doormats [headingLevel]="'h3'" [keys]="versionDoormats" [style]="'topic'" />
      }

      <!--Source list template-->
      <ng-template #sourceList let-showPreview="showPreview">
        <ul>
          <li>{{ 'common.source.live' | translate }}</li>
          <li [class.line-through]="!settingsService.includeGitHub()">
            @if (!settingsService.includeGitHub()) {
              <span class="sr-only"> ({{ 'common.excluded' | translate }})</span>
            }
            {{ 'common.source.protoGH' | translate }}
          </li>
          <li [class.line-through]="!settingsService.includeGitHub() || !settingsService.includeBaseline()">
            @if (!settingsService.includeGitHub() || !settingsService.includeBaseline()) {
              <span class="sr-only"> ({{ 'common.excluded' | translate }})</span>
            }
            {{ 'common.source.baseGH' | translate }}
          </li>
          <li [class.line-through]="!settingsService.includeLocal()">
            @if (!settingsService.includeLocal()) {
              <span class="sr-only"> ({{ 'common.excluded' | translate }})</span>
            }
            {{ 'common.source.protoUT' | translate }}
          </li>
          <li [class.line-through]="!settingsService.includeLocal() || !settingsService.includeBaseline()">
            @if (!settingsService.includeLocal() || !settingsService.includeBaseline()) {
              <span class="sr-only"> ({{ 'common.excluded' | translate }})</span>
            }
            {{ 'common.source.baseUT' | translate }}
          </li>
          @if (showPreview) {
            <li [class.line-through]="!settingsService.includePreview()">
              @if (!settingsService.includePreview()) {
                <span class="sr-only"> ({{ 'common.excluded' | translate }})</span>
              }
              {{ 'common.source.preview' | translate }}
            </li>
          }
        </ul>
      </ng-template>
    </p-dialog>
  }
  @if (mode() === 'autoChildren' || mode() === 'all') {
    <div class="flex flex-column border-round p-1 text-color-secondary hover:surface-100 hover:text-primary">
      <p-button
        [label]="'settings.childPages' | translate"
        [pTooltip]="'settings.childPages.tooltip' | translate"
        (click)="showChildrenHelp = true"
        icon="pi pi-question-circle"
        iconPos="right"
        severity="secondary"
        size="small"
        styleClass="p-0 my-1 hover:text-primary"
        text
        tooltipPosition="top"
        tooltipStyleClass="white-space-nowrap"
      />
      <p-selectbutton
        [allowEmpty]="false"
        [ngModel]="settingsService.autoAddChildren()"
        [options]="childPagesOptions"
        [unselectable]="true"
        (ngModelChange)="settingsService.setAutoAddChildren($event)"
        class="mb-0"
        optionLabel="label"
        optionValue="value"
      >
        <ng-template let-item pTemplate="item">
          {{ item.label }}
        </ng-template>
      </p-selectbutton>
    </div>
    <!--Toggle how AIDA adds children dialog-->
    <p-dialog
      [(visible)]="showChildrenHelp"
      [appendTo]="'body'"
      [breakpoints]="{ '1199px': '75vw', '575': '90vw' }"
      [modal]="true"
      [style]="{ width: '50vw' }"
      header="{{ 'settings.childPages.tooltip' | translate }}"
    >
      @for (paragraph of ('settings.childPages.help.p1' | translate).split('|'); track paragraph; let first = $first) {
        <p [class.mt-0]="$first">{{ paragraph }}</p>
      }
      <ul>
        @for (listItem of ('settings.childPages.help.l1' | translate).split('|'); track listItem; let first = $first) {
          <li [class.mt-0]="$first">{{ listItem }}</li>
        }
      </ul>
      @for (paragraph of ('settings.childPages.help.p2' | translate).split('|'); track paragraph; let first = $first) {
        <p [class.mt-0]="$first">{{ paragraph }}</p>
      }
      @defer {
        <h2>{{ 'settings.relatedTools' | translate }}</h2>
        <aida-doormats [headingLevel]="'h2'" [keys]="childPagesDoormats" [style]="'topic'" />
      }
    </p-dialog>
  }
</div>
` }]
    }], () => [], { mode: [{ type: Input, args: [{ isSignal: true, alias: "mode", required: false }] }] });
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserSettingsComponent, { className: "UserSettingsComponent", filePath: "src/app/components/user-settings/user-settings.component.ts", lineNumber: 30 });
})();

export {
  UserSettingsComponent
};
//# sourceMappingURL=chunk-N437RI73.js.map
