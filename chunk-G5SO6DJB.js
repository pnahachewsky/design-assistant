import {
  Fieldset,
  FieldsetModule
} from "./chunk-LP7BVF5R.js";
import {
  Tag,
  TagModule
} from "./chunk-443LQ3PC.js";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupAddonModule,
  InputGroupModule
} from "./chunk-XXWXX2BK.js";
import {
  Textarea,
  TextareaModule
} from "./chunk-CNL4NKIR.js";
import {
  Dialog,
  DialogModule
} from "./chunk-UGCPSE5Y.js";
import {
  Message,
  MessageModule
} from "./chunk-B7HGCLXR.js";
import {
  IftaLabel,
  IftaLabelModule
} from "./chunk-S4R55H3T.js";
import {
  ProjectCacheService,
  ProjectSettingsComponent
} from "./chunk-QULNYV2G.js";
import {
  ProjectStateService
} from "./chunk-UNKRLY4U.js";
import {
  Checkbox,
  CheckboxModule
} from "./chunk-J3OIGQNT.js";
import {
  Select,
  SelectModule
} from "./chunk-4MT26M6X.js";
import {
  InputText,
  InputTextModule,
  Tooltip,
  TooltipModule
} from "./chunk-77PLZMEA.js";
import {
  Button,
  ButtonModule,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-CLIVXUA2.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  NgTemplateOutlet
} from "./chunk-34V6ZG4B.js";
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
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
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
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-YCXP4XZS.js";

// src/app/components/edit-node/edit-metadata/edit-metadata.component.ts
function EditMetadataComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-inputgroup-addon")(1, "p-button", 5);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("onClick", function EditMetadataComponent_Conditional_7_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.generateTitleFromH1());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(2, 1, "metadata.tooltip.generateTitle"));
  }
}
var EditMetadataComponent = class _EditMetadataComponent {
  projectCache = inject(ProjectCacheService);
  meta = input.required(...ngDevMode ? [{ debugName: "meta" }] : (
    /* istanbul ignore next */
    []
  ));
  isProto = input(false, ...ngDevMode ? [{ debugName: "isProto" }] : (
    /* istanbul ignore next */
    []
  ));
  lang = input("en", ...ngDevMode ? [{ debugName: "lang" }] : (
    /* istanbul ignore next */
    []
  ));
  disabled = input(false, ...ngDevMode ? [{ debugName: "disabled" }] : (
    /* istanbul ignore next */
    []
  ));
  changed = output();
  addonClasses(tooLong) {
    const colour = tooLong ? "text-red" : "text-green";
    const width = this.projectCache.selectedLang() === "both" ? "w-2" : "w-1";
    return `secondary-outline text-center min-w-min ${colour} ${width}`;
  }
  generateTitleFromH1() {
    const h1 = this.meta().h1;
    const doubleH1 = this.meta().doubleH1 ? ` - ${this.meta().doubleH1}` : "";
    this.meta().title = h1 + doubleH1;
    this.changed.emit();
  }
  static \u0275fac = function EditMetadataComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditMetadataComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditMetadataComponent, selectors: [["aida-edit-metadata"]], inputs: { meta: [1, "meta"], isProto: [1, "isProto"], lang: [1, "lang"], disabled: [1, "disabled"] }, outputs: { changed: "changed" }, decls: 26, vars: 28, consts: [[1, "flex", "flex-column", "gap-1"], ["fluid", "", "pInputText", "", "type", "text", "variant", "outlined", 1, "secondary-outline", "block", 3, "ngModelChange", "ngModel", "disabled", "id"], [3, "for"], [3, "styleClass"], ["autoResize", "true", "fluid", "", "pTextarea", "", "rows", "1", "variant", "outlined", 1, "secondary-outline", "block", 3, "ngModelChange", "ngModel", "disabled", "id"], ["icon", "pi pi-sparkles", "severity", "secondary", 1, "h-full", 3, "onClick", "pTooltip"]], template: function EditMetadataComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "p-inputgroup")(2, "p-iftalabel")(3, "input", 1);
      \u0275\u0275twoWayListener("ngModelChange", function EditMetadataComponent_Template_input_ngModelChange_3_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.meta().title, $event) || (ctx.meta().title = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function EditMetadataComponent_Template_input_ngModelChange_3_listener() {
        return ctx.changed.emit();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "label", 2);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(7, EditMetadataComponent_Conditional_7_Template, 3, 3, "p-inputgroup-addon");
      \u0275\u0275elementStart(8, "p-inputgroup-addon", 3);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "p-inputgroup")(11, "p-iftalabel")(12, "textarea", 4);
      \u0275\u0275twoWayListener("ngModelChange", function EditMetadataComponent_Template_textarea_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.meta().description, $event) || (ctx.meta().description = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function EditMetadataComponent_Template_textarea_ngModelChange_12_listener() {
        return ctx.changed.emit();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "label", 2);
      \u0275\u0275text(14);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "p-inputgroup-addon", 3);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "p-inputgroup")(19, "p-iftalabel")(20, "textarea", 4);
      \u0275\u0275twoWayListener("ngModelChange", function EditMetadataComponent_Template_textarea_ngModelChange_20_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.meta().keywords, $event) || (ctx.meta().keywords = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function EditMetadataComponent_Template_textarea_ngModelChange_20_listener() {
        return ctx.changed.emit();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "label", 2);
      \u0275\u0275text(22);
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "p-inputgroup-addon", 3);
      \u0275\u0275text(25);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.meta().title);
      \u0275\u0275property("disabled", ctx.disabled())("id", "title-" + ctx.lang());
      \u0275\u0275advance();
      \u0275\u0275property("for", "title-" + ctx.lang());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 22, "editNode.title"));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isProto() ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("styleClass", ctx.addonClasses(ctx.meta().title.length > 60));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1("", ctx.meta().title.length, "/60");
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.meta().description);
      \u0275\u0275property("disabled", ctx.disabled())("id", "description-" + ctx.lang());
      \u0275\u0275advance();
      \u0275\u0275property("for", "description-" + ctx.lang());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 24, "editNode.description"));
      \u0275\u0275advance(2);
      \u0275\u0275property("styleClass", ctx.addonClasses(ctx.meta().description.length > 160));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1("", ctx.meta().description.length, "/160");
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.meta().keywords);
      \u0275\u0275property("disabled", ctx.disabled())("id", "keywords-" + ctx.lang());
      \u0275\u0275advance();
      \u0275\u0275property("for", "keywords-" + ctx.lang());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 26, "editNode.keywords"));
      \u0275\u0275advance(2);
      \u0275\u0275property("styleClass", ctx.addonClasses(ctx.meta().keywords.length > 160));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1("", ctx.meta().keywords.length, "/160");
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, ButtonModule, Button, IftaLabelModule, IftaLabel, InputGroupAddonModule, InputGroupAddon, InputGroupModule, InputGroup, InputTextModule, InputText, TextareaModule, Textarea, TooltipModule, Tooltip, TranslatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditMetadataComponent, [{
    type: Component,
    args: [{ selector: "aida-edit-metadata", imports: [FormsModule, TranslatePipe, ButtonModule, IftaLabelModule, InputGroupAddonModule, InputGroupModule, InputTextModule, TextareaModule, TooltipModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="flex flex-column gap-1">
  <p-inputgroup>
    <p-iftalabel>
      <input
        [(ngModel)]="meta().title"
        [disabled]="disabled()"
        [id]="'title-' + lang()"
        (ngModelChange)="changed.emit()"
        class="secondary-outline block"
        fluid
        pInputText
        type="text"
        variant="outlined"
      />
      <label [for]="'title-' + lang()">{{ 'editNode.title' | translate }}</label>
    </p-iftalabel>
    @if (isProto()) {
      <p-inputgroup-addon>
        <p-button [pTooltip]="'metadata.tooltip.generateTitle' | translate" (onClick)="generateTitleFromH1()" class="h-full" icon="pi pi-sparkles" severity="secondary" />
      </p-inputgroup-addon>
    }
    <p-inputgroup-addon [styleClass]="addonClasses(meta().title.length > 60)">{{ meta().title.length }}/60</p-inputgroup-addon>
  </p-inputgroup>
  <p-inputgroup>
    <p-iftalabel>
      <textarea
        [(ngModel)]="meta().description"
        [disabled]="disabled()"
        [id]="'description-' + lang()"
        (ngModelChange)="changed.emit()"
        class="secondary-outline block"
        autoResize="true"
        fluid
        pTextarea
        rows="1"
        variant="outlined"
      ></textarea>
      <label [for]="'description-' + lang()">{{ 'editNode.description' | translate }}</label>
    </p-iftalabel>
    <p-inputgroup-addon [styleClass]="addonClasses(meta().description.length > 160)">{{ meta().description.length }}/160</p-inputgroup-addon>
  </p-inputgroup>
  <p-inputgroup>
    <p-iftalabel>
      <textarea
        [(ngModel)]="meta().keywords"
        [disabled]="disabled()"
        [id]="'keywords-' + lang()"
        (ngModelChange)="changed.emit()"
        class="secondary-outline block"
        autoResize="true"
        fluid
        pTextarea
        rows="1"
        variant="outlined"
      ></textarea>
      <label [for]="'keywords-' + lang()">{{ 'editNode.keywords' | translate }}</label>
    </p-iftalabel>
    <p-inputgroup-addon [styleClass]="addonClasses(meta().keywords.length > 160)">{{ meta().keywords.length }}/160</p-inputgroup-addon>
  </p-inputgroup>
</div>
` }]
  }], null, { meta: [{ type: Input, args: [{ isSignal: true, alias: "meta", required: true }] }], isProto: [{ type: Input, args: [{ isSignal: true, alias: "isProto", required: false }] }], lang: [{ type: Input, args: [{ isSignal: true, alias: "lang", required: false }] }], disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false }] }], changed: [{ type: Output, args: ["changed"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditMetadataComponent, { className: "EditMetadataComponent", filePath: "src/app/components/edit-node/edit-metadata/edit-metadata.component.ts", lineNumber: 22 });
})();

// src/app/components/edit-node/edit-node.component.ts
var _c0 = () => ({ height: "90vh" });
var _c1 = (a0) => ({ days: a0 });
function EditNodeComponent_Conditional_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function EditNodeComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-dialog", 3);
    \u0275\u0275listener("visibleChange", function EditNodeComponent_Conditional_0_Template_p_dialog_visibleChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(!$event && ctx_r1.dialogClose.emit());
    });
    \u0275\u0275template(1, EditNodeComponent_Conditional_0_ng_container_1_Template, 1, 0, "ng-container", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    const editNode_r3 = \u0275\u0275reference(3);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(7, _c0));
    \u0275\u0275property("header", (tmp_3_0 = ctx_r1.node().data) == null ? null : tmp_3_0.prototype == null ? null : (tmp_3_0 = tmp_3_0.prototype[ctx_r1.uiLang()]) == null ? null : tmp_3_0.h1)("maximizable", true)("modal", true)("visible", ctx_r1.isOpen());
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", editNode_r3);
  }
}
function EditNodeComponent_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function EditNodeComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, EditNodeComponent_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 4);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const editNode_r3 = \u0275\u0275reference(3);
    \u0275\u0275property("ngTemplateOutlet", editNode_r3);
  }
}
function EditNodeComponent_ng_template_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "label", 18);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 19)(5, "div", 20)(6, "p-checkbox", 21);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_ng_template_2_Conditional_15_Template_p_checkbox_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data.status.inScope, $event) || (ctx_r1.node().data.status.inScope = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_ng_template_2_Conditional_15_Template_p_checkbox_ngModelChange_6_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.markChanges());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "label", 22);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 20)(11, "p-checkbox", 23);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_ng_template_2_Conditional_15_Template_p_checkbox_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data.status.isNew, $event) || (ctx_r1.node().data.status.isNew = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_ng_template_2_Conditional_15_Template_p_checkbox_ngModelChange_11_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.markChanges());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "label", 24);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 20)(16, "p-checkbox", 25);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_ng_template_2_Conditional_15_Template_p_checkbox_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data.status.isROT, $event) || (ctx_r1.node().data.status.isROT = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_ng_template_2_Conditional_15_Template_p_checkbox_ngModelChange_16_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.markChanges());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "label", 26);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 20)(21, "p-checkbox", 27);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_ng_template_2_Conditional_15_Template_p_checkbox_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data.status.isMoved, $event) || (ctx_r1.node().data.status.isMoved = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_ng_template_2_Conditional_15_Template_p_checkbox_ngModelChange_21_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.markChanges());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "label", 28);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
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
function EditNodeComponent_ng_template_2_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-message", 17)(1, "div", 29)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p-button", 30);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275listener("onClick", function EditNodeComponent_ng_template_2_Conditional_21_Template_p_button_onClick_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.enableEdits());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const config_r7 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("icon", config_r7.icon)("severity", config_r7.severity);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(config_r7.text);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.editsEnabled())("label", \u0275\u0275pipeBind1(5, 5, "common.enableEdits"));
  }
}
function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-iftalabel")(1, "input", 73);
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_1_Conditional_11_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.onFragmentInput($event, "en"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 74);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-red", ctx_r1.pathEN().startsWith("new-page"));
    \u0275\u0275property("disabled", !!ctx_r1.versionConfig() && !ctx_r1.editsEnabled())("ngModel", ctx_r1.pathEN());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, "editNode.pageUrl"));
  }
}
function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-message", 42)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "editNode.pathError"));
  }
}
function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_1_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "span", 76);
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
function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_1_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-message", 42)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "editNode.moveError"));
  }
}
function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_1_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h3", 51);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "aida-edit-metadata", 77);
    \u0275\u0275listener("changed", function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_1_Conditional_36_Template_aida_edit_metadata_changed_3_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.markChanges());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 4, "editNode.metadata"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !!ctx_r1.versionConfig() && !ctx_r1.editsEnabled())("isProto", ctx_r1.projectCache.selectedVersion() === "prototype")("meta", ctx);
  }
}
function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_1_Conditional_141_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-tag", 72);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("severity", ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.is404 === ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.is404 ? void 0 : "danger");
  }
}
function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-fieldset", 33);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "div", 37)(3, "p-inputgroup")(4, "p-iftalabel")(5, "input", 38);
    \u0275\u0275listener("blur", function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_1_Template_input_blur_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.updateFragment("en"));
    })("ngModelChange", function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_1_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onPathInput($event, "en"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "label", 39);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p-inputgroup-addon", 40)(10, "p-button", 41);
    \u0275\u0275listener("onClick", function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_1_Template_p_button_onClick_10_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.enableUrlEdits());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(11, EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_1_Conditional_11_Template, 5, 7, "p-iftalabel");
    \u0275\u0275conditionalCreate(12, EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_1_Conditional_12_Template, 4, 3, "p-message", 42);
    \u0275\u0275elementStart(13, "p-iftalabel")(14, "input", 43);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_1_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.doubleH1, $event) || (ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.doubleH1 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_1_Template_input_ngModelChange_14_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.markChanges());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "label", 44);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "p-iftalabel")(19, "input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_1_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.h1, $event) || (ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.h1 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_1_Template_input_ngModelChange_19_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(4);
      ctx_r1.markChanges();
      return \u0275\u0275resetView(ctx_r1.syncNewName(ctx_r1.node(), ctx_r1.projectCache.selectedVersion(), "en"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "label", 46);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "p-iftalabel")(24, "p-select", 47);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_1_Template_p_select_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.template, $event) || (ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.template = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_1_Template_p_select_ngModelChange_24_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(4);
      ctx_r1.markChanges();
      return \u0275\u0275resetView(ctx_r1.syncData(ctx_r1.node(), "template", "ENtoFR"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "label", 48);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "p-iftalabel")(29, "p-select", 49);
    \u0275\u0275listener("onChange", function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_1_Template_p_select_onChange_29_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.moveNode(ctx_r1.node(), $event.value, "en", ctx_r1.projectCache.selectedVersion()));
    });
    \u0275\u0275template(30, EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_1_ng_template_30_Template, 4, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "label", 50);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(35, EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_1_Conditional_35_Template, 4, 3, "p-message", 42);
    \u0275\u0275conditionalCreate(36, EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_1_Conditional_36_Template, 4, 6);
    \u0275\u0275elementStart(37, "h3", 51);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "p-iftalabel")(41, "input", 52);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_1_Template_input_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.owner, $event) || (ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.owner = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_1_Template_input_ngModelChange_41_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(4);
      ctx_r1.markChanges();
      return \u0275\u0275resetView(ctx_r1.syncData(ctx_r1.node(), "owner", "ENtoFR"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "label", 53);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "p-iftalabel")(46, "input", 54);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_1_Template_input_ngModelChange_46_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.email, $event) || (ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_1_Template_input_ngModelChange_46_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(4);
      ctx_r1.markChanges();
      return \u0275\u0275resetView(ctx_r1.syncData(ctx_r1.node(), "email", "ENtoFR"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "label", 55);
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "h3", 51);
    \u0275\u0275text(51);
    \u0275\u0275pipe(52, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 56)(54, "div", 57)(55, "p-checkbox", 58);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_1_Template_p_checkbox_ngModelChange_55_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.isArchived, $event) || (ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.isArchived = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_1_Template_p_checkbox_ngModelChange_55_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(4);
      ctx_r1.markChanges();
      return \u0275\u0275resetView(ctx_r1.syncData(ctx_r1.node(), "isArchived", "ENtoFR"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "label", 59);
    \u0275\u0275text(57);
    \u0275\u0275pipe(58, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 57)(60, "p-checkbox", 60);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_1_Template_p_checkbox_ngModelChange_60_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.noindex, $event) || (ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.noindex = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_1_Template_p_checkbox_ngModelChange_60_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(4);
      ctx_r1.markChanges();
      return \u0275\u0275resetView(ctx_r1.syncData(ctx_r1.node(), "noindex", "ENtoFR"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "label", 61);
    \u0275\u0275text(62);
    \u0275\u0275pipe(63, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 57)(65, "p-checkbox", 62);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_1_Template_p_checkbox_ngModelChange_65_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.isOrphan, $event) || (ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.isOrphan = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_1_Template_p_checkbox_ngModelChange_65_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.markChanges());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "label", 63);
    \u0275\u0275text(67);
    \u0275\u0275pipe(68, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div", 57)(70, "p-checkbox", 64);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_1_Template_p_checkbox_ngModelChange_70_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.linksToPortal, $event) || (ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.linksToPortal = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_1_Template_p_checkbox_ngModelChange_70_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.markChanges());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "label", 65);
    \u0275\u0275text(72);
    \u0275\u0275pipe(73, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 57)(75, "p-checkbox", 66);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_1_Template_p_checkbox_ngModelChange_75_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.linksToSignIn, $event) || (ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.linksToSignIn = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_1_Template_p_checkbox_ngModelChange_75_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.markChanges());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "label", 67);
    \u0275\u0275text(77);
    \u0275\u0275pipe(78, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "div", 57)(80, "p-checkbox", 68);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_1_Template_p_checkbox_ngModelChange_80_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.hasChatbot, $event) || (ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.hasChatbot = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_1_Template_p_checkbox_ngModelChange_80_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.markChanges());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "label", 69);
    \u0275\u0275text(82);
    \u0275\u0275pipe(83, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "div", 70)(85, "span", 71);
    \u0275\u0275text(86);
    \u0275\u0275pipe(87, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "span");
    \u0275\u0275pipe(89, "date");
    \u0275\u0275pipe(90, "date");
    \u0275\u0275text(91);
    \u0275\u0275pipe(92, "date");
    \u0275\u0275pipe(93, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(94, "div", 70)(95, "span", 71);
    \u0275\u0275text(96);
    \u0275\u0275pipe(97, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(98);
    \u0275\u0275pipe(99, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "div", 70)(101, "span", 71);
    \u0275\u0275text(102);
    \u0275\u0275pipe(103, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "span");
    \u0275\u0275text(105);
    \u0275\u0275pipe(106, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(107, "div", 70)(108, "span", 71);
    \u0275\u0275text(109);
    \u0275\u0275pipe(110, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "span");
    \u0275\u0275text(112);
    \u0275\u0275pipe(113, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(114, "div", 70)(115, "span", 71);
    \u0275\u0275text(116);
    \u0275\u0275pipe(117, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "span");
    \u0275\u0275text(119);
    \u0275\u0275pipe(120, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(121, "div", 70)(122, "span", 71);
    \u0275\u0275text(123);
    \u0275\u0275pipe(124, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(125);
    \u0275\u0275pipe(126, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(127, "div", 70)(128, "span", 71);
    \u0275\u0275text(129);
    \u0275\u0275pipe(130, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(131, "span");
    \u0275\u0275text(132);
    \u0275\u0275pipe(133, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(134, "div", 70)(135, "span", 71);
    \u0275\u0275text(136);
    \u0275\u0275pipe(137, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(138, "span");
    \u0275\u0275text(139);
    \u0275\u0275pipe(140, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(141, EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_1_Conditional_141_Template, 1, 1, "p-tag", 72);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_32_0;
    let tmp_85_0;
    let tmp_86_0;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("legend", \u0275\u0275pipeBind1(1, 110, "common.language.english"));
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", !ctx_r1.urlEditsEnabled() || !!ctx_r1.versionConfig() && !ctx_r1.editsEnabled())("ngModel", ctx_r1.node().data.path.en);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 112, "editNode.path"));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.urlEditsEnabled());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.node().data.status.isNew && ctx_r1.projectCache.selectedVersion() === "prototype" ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.pathError() ? 12 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.doubleH1);
    \u0275\u0275property("disabled", !!ctx_r1.versionConfig() && !ctx_r1.editsEnabled());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 114, "editNode.doubleh1"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("text-red", ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.h1 === "New page");
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.h1);
    \u0275\u0275property("disabled", !!ctx_r1.versionConfig() && !ctx_r1.editsEnabled());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 116, "editNode.h1"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.template);
    \u0275\u0275property("disabled", !!ctx_r1.versionConfig() && !ctx_r1.editsEnabled())("filter", true)("options", ctx_r1.projectState.templateOptions());
    \u0275\u0275advance();
    \u0275\u0275classProp("text-red", ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.template !== ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.template);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 118, "editNode.template"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !!ctx_r1.versionConfig() && !ctx_r1.editsEnabled())("filter", true)("ngModel", ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.parentPath)("options", ctx_r1.enPages());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 120, "editNode.parent"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.moveError() ? 35 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_32_0 = ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en) ? 36 : -1, tmp_32_0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(39, 122, "editNode.pageOwner"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.owner);
    \u0275\u0275property("disabled", !!ctx_r1.versionConfig() && !ctx_r1.editsEnabled());
    \u0275\u0275advance();
    \u0275\u0275classProp("text-red", ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.owner !== ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.owner);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(44, 124, "editNode.owner"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.email);
    \u0275\u0275property("disabled", !!ctx_r1.versionConfig() && !ctx_r1.editsEnabled());
    \u0275\u0275advance();
    \u0275\u0275classProp("text-red", ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.email !== ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.email);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(49, 126, "editNode.email"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(52, 128, "editNode.info"));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.isArchived);
    \u0275\u0275property("binary", true)("disabled", !!ctx_r1.versionConfig() && !ctx_r1.editsEnabled());
    \u0275\u0275advance();
    \u0275\u0275classProp("text-red", ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.isArchived !== ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.isArchived);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(58, 130, "editNode.isArchived"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.noindex);
    \u0275\u0275property("binary", true)("disabled", !!ctx_r1.versionConfig() && !ctx_r1.editsEnabled());
    \u0275\u0275advance();
    \u0275\u0275classProp("text-red", ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.noindex !== ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.noindex);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(63, 132, "editNode.noindex"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.isOrphan);
    \u0275\u0275property("binary", true)("disabled", ctx_r1.projectCache.selectedVersion() === "prototype" ? !ctx_r1.urlEditsEnabled() : !ctx_r1.editsEnabled());
    \u0275\u0275advance();
    \u0275\u0275classProp("text-red", ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.isOrphan !== ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.isOrphan);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(68, 134, "editNode.isOrphan"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.linksToPortal);
    \u0275\u0275property("binary", true)("disabled", ctx_r1.projectCache.selectedVersion() === "prototype" ? !ctx_r1.urlEditsEnabled() : !ctx_r1.editsEnabled());
    \u0275\u0275advance();
    \u0275\u0275classProp("text-red", ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.linksToPortal !== ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.linksToPortal);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(73, 136, "editNode.linksToPortal"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.linksToSignIn);
    \u0275\u0275property("binary", true)("disabled", ctx_r1.projectCache.selectedVersion() === "prototype" ? !ctx_r1.urlEditsEnabled() : !ctx_r1.editsEnabled());
    \u0275\u0275advance();
    \u0275\u0275classProp("text-red", ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.linksToSignIn !== ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.linksToSignIn);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(78, 138, "editNode.linksToSignIn"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.hasChatbot);
    \u0275\u0275property("binary", true)("disabled", ctx_r1.projectCache.selectedVersion() === "prototype" ? !ctx_r1.urlEditsEnabled() : !ctx_r1.editsEnabled());
    \u0275\u0275advance();
    \u0275\u0275classProp("text-red", ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.hasChatbot !== ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.hasChatbot);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(83, 140, "editNode.hasChatbot"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(87, 142, "editNode.lastPublished"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-red", \u0275\u0275pipeBind1(89, 144, ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.lastPublished) !== \u0275\u0275pipeBind1(90, 146, ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.lastPublished));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(92, 148, ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.lastPublished) ?? \u0275\u0275pipeBind1(93, 150, "common.never"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(97, 152, "editNode.wordCount"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(99, 154, ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.wordCount) ?? "\u2014", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(103, 156, "editNode.linkCount"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-red", ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.linkCount !== ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.linkCount);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(106, 158, ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.linkCount) ?? "\u2014", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(110, 160, "editNode.vanityCount"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-red", ctx_r1.node().data.vanity.en.length !== ctx_r1.node().data.vanity.fr.length);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(113, 162, ctx_r1.node().data.vanity.en.length) ?? "\u2014", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(117, 164, "editNode.phoneCount"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-red", ((tmp_85_0 = ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.phoneNumbers) == null ? null : tmp_85_0.length) !== ((tmp_85_0 = ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.phoneNumbers) == null ? null : tmp_85_0.length));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(120, 166, (tmp_86_0 = ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.phoneNumbers) == null ? null : tmp_86_0.length) ?? "\u2014", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(124, 168, "editNode.visits"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(126, 170, ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.visits) ?? "\u2014", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(130, 172, "common.readability.fleschKincaid"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-orange-400", ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.fleschKincaid < 12 && ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.fleschKincaid > 8)("text-red", ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.fleschKincaid >= 12);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(133, 174, ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.fleschKincaid) ?? "\u2014", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(137, 176, "common.readability.gunningFog"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-orange-400", ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.gunningFog < 12 && ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.gunningFog > 8)("text-red", ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.gunningFog >= 12);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(140, 178, ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.gunningFog) ?? "\u2014", " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.is404 ? 141 : -1);
  }
}
function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-iftalabel")(1, "input", 104);
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_2_Conditional_11_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.onFragmentInput($event, "en"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 105);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-red", ctx_r1.pathFR().startsWith("nouvelle-page"));
    \u0275\u0275property("disabled", !!ctx_r1.versionConfig() && !ctx_r1.editsEnabled())("ngModel", ctx_r1.pathFR());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, "editNode.pageUrl"));
  }
}
function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_2_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "span", 76);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r15 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(page_r15.label);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", page_r15.path, " ");
  }
}
function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_2_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-message", 42)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "editNode.moveError"));
  }
}
function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_2_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h3", 51);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "aida-edit-metadata", 77);
    \u0275\u0275listener("changed", function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_2_Conditional_35_Template_aida_edit_metadata_changed_3_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.markChanges());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 4, "editNode.metadata"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !!ctx_r1.versionConfig() && !ctx_r1.editsEnabled())("isProto", ctx_r1.projectCache.selectedVersion() === "prototype")("meta", ctx);
  }
}
function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_2_Conditional_140_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-tag", 72);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("severity", ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.is404 === ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.is404 ? void 0 : "danger");
  }
}
function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-fieldset", 33);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "div", 37)(3, "p-inputgroup")(4, "p-iftalabel")(5, "input", 78);
    \u0275\u0275listener("blur", function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_2_Template_input_blur_5_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.updateFragment("fr"));
    })("ngModelChange", function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_2_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onPathInput($event, "fr"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "label", 79);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p-inputgroup-addon", 40)(10, "p-button", 41);
    \u0275\u0275listener("onClick", function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_2_Template_p_button_onClick_10_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.enableUrlEdits());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(11, EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_2_Conditional_11_Template, 5, 7, "p-iftalabel");
    \u0275\u0275elementStart(12, "p-iftalabel")(13, "input", 80);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_2_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.doubleH1, $event) || (ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.doubleH1 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_2_Template_input_ngModelChange_13_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.markChanges());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "label", 81);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "p-iftalabel")(18, "input", 82);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_2_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.h1, $event) || (ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.h1 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_2_Template_input_ngModelChange_18_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(4);
      ctx_r1.markChanges();
      return \u0275\u0275resetView(ctx_r1.syncNewName(ctx_r1.node(), ctx_r1.projectCache.selectedVersion(), "fr"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "label", 83);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "p-iftalabel")(23, "p-select", 84);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_2_Template_p_select_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.template, $event) || (ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.template = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_2_Template_p_select_ngModelChange_23_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(4);
      ctx_r1.markChanges();
      return \u0275\u0275resetView(ctx_r1.syncData(ctx_r1.node(), "template", "FRtoEN"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "label", 85);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "p-iftalabel")(28, "p-select", 86);
    \u0275\u0275listener("onChange", function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_2_Template_p_select_onChange_28_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.moveNode(ctx_r1.node(), $event.value, "fr", ctx_r1.projectCache.selectedVersion()));
    });
    \u0275\u0275template(29, EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_2_ng_template_29_Template, 4, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "label", 87);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(34, EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_2_Conditional_34_Template, 4, 3, "p-message", 42);
    \u0275\u0275conditionalCreate(35, EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_2_Conditional_35_Template, 4, 6);
    \u0275\u0275elementStart(36, "h3", 51);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "p-iftalabel")(40, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_2_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.owner, $event) || (ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.owner = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_2_Template_input_ngModelChange_40_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(4);
      ctx_r1.markChanges();
      return \u0275\u0275resetView(ctx_r1.syncData(ctx_r1.node(), "owner", "FRtoEN"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "label", 89);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "p-iftalabel")(45, "input", 90);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_2_Template_input_ngModelChange_45_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.email, $event) || (ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_2_Template_input_ngModelChange_45_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(4);
      ctx_r1.markChanges();
      return \u0275\u0275resetView(ctx_r1.syncData(ctx_r1.node(), "email", "FRtoEN"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "label", 91);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "h3", 51);
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 56)(53, "div", 57)(54, "p-checkbox", 92);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_2_Template_p_checkbox_ngModelChange_54_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.isArchived, $event) || (ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.isArchived = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_2_Template_p_checkbox_ngModelChange_54_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(4);
      ctx_r1.markChanges();
      return \u0275\u0275resetView(ctx_r1.syncData(ctx_r1.node(), "isArchived", "FRtoEN"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "label", 93);
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 57)(59, "p-checkbox", 94);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_2_Template_p_checkbox_ngModelChange_59_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.noindex, $event) || (ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.noindex = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_2_Template_p_checkbox_ngModelChange_59_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(4);
      ctx_r1.markChanges();
      return \u0275\u0275resetView(ctx_r1.syncData(ctx_r1.node(), "noindex", "FRtoEN"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "label", 95);
    \u0275\u0275text(61);
    \u0275\u0275pipe(62, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 57)(64, "p-checkbox", 96);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_2_Template_p_checkbox_ngModelChange_64_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.isOrphan, $event) || (ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.isOrphan = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_2_Template_p_checkbox_ngModelChange_64_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.markChanges());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "label", 97);
    \u0275\u0275text(66);
    \u0275\u0275pipe(67, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "div", 57)(69, "p-checkbox", 98);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_2_Template_p_checkbox_ngModelChange_69_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.linksToPortal, $event) || (ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.linksToPortal = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_2_Template_p_checkbox_ngModelChange_69_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.markChanges());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "label", 99);
    \u0275\u0275text(71);
    \u0275\u0275pipe(72, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "div", 57)(74, "p-checkbox", 100);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_2_Template_p_checkbox_ngModelChange_74_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.linksToSignIn, $event) || (ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.linksToSignIn = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_2_Template_p_checkbox_ngModelChange_74_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.markChanges());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "label", 101);
    \u0275\u0275text(76);
    \u0275\u0275pipe(77, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "div", 57)(79, "p-checkbox", 102);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_2_Template_p_checkbox_ngModelChange_79_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.hasChatbot, $event) || (ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.hasChatbot = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_2_Template_p_checkbox_ngModelChange_79_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.markChanges());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "label", 103);
    \u0275\u0275text(81);
    \u0275\u0275pipe(82, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(83, "div", 70)(84, "span", 71);
    \u0275\u0275text(85);
    \u0275\u0275pipe(86, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "span");
    \u0275\u0275pipe(88, "date");
    \u0275\u0275pipe(89, "date");
    \u0275\u0275text(90);
    \u0275\u0275pipe(91, "date");
    \u0275\u0275pipe(92, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(93, "div", 70)(94, "span", 71);
    \u0275\u0275text(95);
    \u0275\u0275pipe(96, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(97);
    \u0275\u0275pipe(98, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "div", 70)(100, "span", 71);
    \u0275\u0275text(101);
    \u0275\u0275pipe(102, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "span");
    \u0275\u0275text(104);
    \u0275\u0275pipe(105, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(106, "div", 70)(107, "span", 71);
    \u0275\u0275text(108);
    \u0275\u0275pipe(109, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "span");
    \u0275\u0275text(111);
    \u0275\u0275pipe(112, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(113, "div", 70)(114, "span", 71);
    \u0275\u0275text(115);
    \u0275\u0275pipe(116, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "span");
    \u0275\u0275text(118);
    \u0275\u0275pipe(119, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(120, "div", 70)(121, "span", 71);
    \u0275\u0275text(122);
    \u0275\u0275pipe(123, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(124);
    \u0275\u0275pipe(125, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(126, "div", 70)(127, "span", 71);
    \u0275\u0275text(128);
    \u0275\u0275pipe(129, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(130, "span");
    \u0275\u0275text(131);
    \u0275\u0275pipe(132, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(133, "div", 70)(134, "span", 71);
    \u0275\u0275text(135);
    \u0275\u0275pipe(136, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(137, "span");
    \u0275\u0275text(138);
    \u0275\u0275pipe(139, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(140, EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_2_Conditional_140_Template, 1, 1, "p-tag", 72);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_31_0;
    let tmp_84_0;
    let tmp_85_0;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("legend", \u0275\u0275pipeBind1(1, 109, "common.language.french"));
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", !ctx_r1.urlEditsEnabled() || !!ctx_r1.versionConfig() && !ctx_r1.editsEnabled())("ngModel", ctx_r1.node().data.path.fr);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 111, "editNode.path"));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.urlEditsEnabled());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.node().data.status.isNew && ctx_r1.projectCache.selectedVersion() === "prototype" ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.doubleH1);
    \u0275\u0275property("disabled", !!ctx_r1.versionConfig() && !ctx_r1.editsEnabled());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 113, "editNode.doubleh1"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("text-red", ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.h1 === "Nouvelle page");
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.h1);
    \u0275\u0275property("disabled", !!ctx_r1.versionConfig() && !ctx_r1.editsEnabled());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 115, "editNode.h1"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.template);
    \u0275\u0275property("disabled", !!ctx_r1.versionConfig() && !ctx_r1.editsEnabled())("filter", true)("options", ctx_r1.projectState.templateOptions());
    \u0275\u0275advance();
    \u0275\u0275classProp("text-red", ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.template !== ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.template);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 117, "editNode.template"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !!ctx_r1.versionConfig() && !ctx_r1.editsEnabled())("filter", true)("ngModel", ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.parentPath)("options", ctx_r1.frPages());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 119, "editNode.parent"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.moveError() ? 34 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_31_0 = ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr) ? 35 : -1, tmp_31_0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 121, "editNode.pageOwner"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.owner);
    \u0275\u0275property("disabled", !!ctx_r1.versionConfig() && !ctx_r1.editsEnabled());
    \u0275\u0275advance();
    \u0275\u0275classProp("text-red", ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.owner !== ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.owner);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(43, 123, "editNode.owner"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.email);
    \u0275\u0275property("disabled", !!ctx_r1.versionConfig() && !ctx_r1.editsEnabled());
    \u0275\u0275advance();
    \u0275\u0275classProp("text-red", ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.email !== ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.email);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(48, 125, "editNode.email"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(51, 127, "editNode.info"));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.isArchived);
    \u0275\u0275property("binary", true)("disabled", !!ctx_r1.versionConfig() && !ctx_r1.editsEnabled());
    \u0275\u0275advance();
    \u0275\u0275classProp("text-red", ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.isArchived !== ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.isArchived);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(57, 129, "editNode.isArchived"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.noindex);
    \u0275\u0275property("binary", true)("disabled", !!ctx_r1.versionConfig() && !ctx_r1.editsEnabled());
    \u0275\u0275advance();
    \u0275\u0275classProp("text-red", ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.noindex !== ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.noindex);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(62, 131, "editNode.noindex"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.isOrphan);
    \u0275\u0275property("binary", true)("disabled", ctx_r1.projectCache.selectedVersion() === "prototype" ? !ctx_r1.urlEditsEnabled() : !ctx_r1.editsEnabled());
    \u0275\u0275advance();
    \u0275\u0275classProp("text-red", ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.isOrphan !== ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.isOrphan);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(67, 133, "editNode.isOrphan"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.linksToPortal);
    \u0275\u0275property("binary", true)("disabled", ctx_r1.projectCache.selectedVersion() === "prototype" ? !ctx_r1.urlEditsEnabled() : !ctx_r1.editsEnabled());
    \u0275\u0275advance();
    \u0275\u0275classProp("text-red", ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.linksToPortal !== ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.linksToPortal);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(72, 135, "editNode.linksToPortal"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.linksToSignIn);
    \u0275\u0275property("binary", true)("disabled", ctx_r1.projectCache.selectedVersion() === "prototype" ? !ctx_r1.urlEditsEnabled() : !ctx_r1.editsEnabled());
    \u0275\u0275advance();
    \u0275\u0275classProp("text-red", ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.linksToSignIn !== ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.linksToSignIn);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(77, 137, "editNode.linksToSignIn"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.hasChatbot);
    \u0275\u0275property("binary", true)("disabled", ctx_r1.projectCache.selectedVersion() === "prototype" ? !ctx_r1.urlEditsEnabled() : !ctx_r1.editsEnabled());
    \u0275\u0275advance();
    \u0275\u0275classProp("text-red", ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.hasChatbot !== ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.hasChatbot);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(82, 139, "editNode.hasChatbot"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(86, 141, "editNode.lastPublished"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-red", \u0275\u0275pipeBind1(88, 143, ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.lastPublished) !== \u0275\u0275pipeBind1(89, 145, ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.lastPublished));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(91, 147, ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.lastPublished) ?? \u0275\u0275pipeBind1(92, 149, "common.never"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(96, 151, "editNode.wordCount"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(98, 153, ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.wordCount) ?? "\u2014", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(102, 155, "editNode.linkCount"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-red", ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.linkCount !== ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.linkCount);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(105, 157, ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.linkCount) ?? "\u2014", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(109, 159, "editNode.vanityCount"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-red", ctx_r1.node().data.vanity.en.length !== ctx_r1.node().data.vanity.fr.length);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(112, 161, ctx_r1.node().data.vanity.fr.length) ?? "\u2014", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(116, 163, "editNode.phoneCount"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-red", ((tmp_84_0 = ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].en.phoneNumbers) == null ? null : tmp_84_0.length) !== ((tmp_84_0 = ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.phoneNumbers) == null ? null : tmp_84_0.length));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(119, 165, (tmp_85_0 = ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.phoneNumbers) == null ? null : tmp_85_0.length) ?? "\u2014", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(123, 167, "editNode.visits"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(125, 169, ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.visits) ?? "\u2014", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(129, 171, "common.readability.fleschKincaid"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-orange-400", ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.fleschKincaid < 12 && ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.fleschKincaid > 8)("text-red", ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.fleschKincaid >= 12);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(132, 173, ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.fleschKincaid) ?? "\u2014", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(136, 175, "common.readability.gunningFog"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-orange-400", ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.gunningFog < 12 && ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.gunningFog > 8)("text-red", ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.gunningFog >= 12);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(139, 177, ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.gunningFog) ?? "\u2014", " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.node().data[ctx_r1.projectCache.selectedVersion()].fr.is404 ? 140 : -1);
  }
}
function EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275conditionalCreate(1, EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_1_Template, 142, 180, "p-fieldset", 33);
    \u0275\u0275conditionalCreate(2, EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Conditional_2_Template, 141, 179, "p-fieldset", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.projectCache.selectedLang() !== "fr" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.projectCache.selectedLang() !== "en" ? 2 : -1);
  }
}
function EditNodeComponent_ng_template_2_Conditional_22_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-fieldset", 33);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "div", 37)(3, "p-iftalabel")(4, "textarea", 106);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_ng_template_2_Conditional_22_Conditional_2_Template_textarea_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data.notes.issue, $event) || (ctx_r1.node().data.notes.issue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_ng_template_2_Conditional_22_Conditional_2_Template_textarea_ngModelChange_4_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.markChanges());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "label", 107);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p-iftalabel")(9, "textarea", 108);
    \u0275\u0275twoWayListener("ngModelChange", function EditNodeComponent_ng_template_2_Conditional_22_Conditional_2_Template_textarea_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.node().data.notes.solution, $event) || (ctx_r1.node().data.notes.solution = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EditNodeComponent_ng_template_2_Conditional_22_Conditional_2_Template_textarea_ngModelChange_9_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.markChanges());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "label", 109);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
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
function EditNodeComponent_ng_template_2_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275conditionalCreate(1, EditNodeComponent_ng_template_2_Conditional_22_Conditional_1_Template, 3, 2, "div", 32)(2, EditNodeComponent_ng_template_2_Conditional_22_Conditional_2_Template, 13, 11, "p-fieldset", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 34)(4, "p-button", 35);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275listener("onClick", function EditNodeComponent_ng_template_2_Conditional_22_Template_p_button_onClick_4_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p-button", 36);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275listener("onClick", function EditNodeComponent_ng_template_2_Conditional_22_Template_p_button_onClick_6_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.toggleNotes() ? 1 : ((tmp_3_0 = ctx_r1.node().data) == null ? null : tmp_3_0.notes) ? 2 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(5, 4, "common.cancel"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.hasChanges() || ctx_r1.pathError() || ctx_r1.moveError())("label", \u0275\u0275pipeBind1(7, 6, "common.save"));
  }
}
function EditNodeComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "div", 7)(3, "aida-project-settings", 8)(4, "div", 9)(5, "label", 10);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 11)(9, "p-button", 12);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("onClick", function EditNodeComponent_ng_template_2_Template_p_button_onClick_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.refresh());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 13);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(15, EditNodeComponent_ng_template_2_Conditional_15_Template, 25, 23, "div", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 14)(17, "label", 15);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p-button", 16);
    \u0275\u0275listener("onClick", function EditNodeComponent_ng_template_2_Template_p_button_onClick_20_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editNotes());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(21, EditNodeComponent_ng_template_2_Conditional_21_Template, 6, 7, "p-message", 17);
    \u0275\u0275conditionalCreate(22, EditNodeComponent_ng_template_2_Conditional_22_Template, 8, 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_11_0;
    let tmp_15_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("allowBoth", true)("allowLive", true)("showLang", true)("showVersion", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 15, "common.data"));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.projectCache.selectedVersion() === "baseline" && !ctx_r1.editsEnabled())("label", \u0275\u0275pipeBind1(10, 17, "common.refresh"))("loading", ctx_r1.projectState.refreshing()[ctx_r1.projectCache.selectedVersion()]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.daysSinceRefresh() !== null ? \u0275\u0275pipeBind2(13, 19, "editNode.lastRefreshed", \u0275\u0275pureFunction1(26, _c1, ctx_r1.daysSinceRefresh())) : \u0275\u0275pipeBind1(14, 22, "editNode.neverRefreshed"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(((tmp_11_0 = ctx_r1.node().data) == null ? null : tmp_11_0.status) ? 15 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 24, "editNode.notes"));
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r1.noteConfig.icon)("label", ctx_r1.noteConfig.label);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_15_0 = ctx_r1.versionConfig()) ? 21 : -1, tmp_15_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.node().data ? 22 : -1);
  }
}
var EditNodeComponent = class _EditNodeComponent {
  projectState = inject(ProjectStateService);
  projectCache = inject(ProjectCacheService);
  translate = inject(TranslateService);
  dialogMode = input(false, ...ngDevMode ? [{ debugName: "dialogMode" }] : (
    /* istanbul ignore next */
    []
  ));
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
  /* Current UI language */
  uiLang = computed(() => this.translate.currentLang()?.startsWith("fr") ? "fr" : "en", ...ngDevMode ? [{ debugName: "uiLang" }] : (
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
        this.projectCache.selectedVersion.set("prototype");
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
      const version = this.projectCache.selectedVersion();
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
      node.data[this.projectCache.selectedVersion()].fr[field] = node.data[this.projectCache.selectedVersion()].en[field];
    }
    if (direction === "FRtoEN") {
      node.data[this.projectCache.selectedVersion()].en[field] = node.data[this.projectCache.selectedVersion()].fr[field];
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
    switch (this.projectCache.selectedVersion()) {
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
    this.projectCache.selectedVersion();
    this.editsEnabled.set(false);
    this.urlEditsEnabled.set(false);
  }, ...ngDevMode ? [{ debugName: "versionWatcher" }] : (
    /* istanbul ignore next */
    []
  ));
  //Days since refresh
  daysSinceRefresh = computed(() => {
    const data = this.node().data?.[this.projectCache.selectedVersion()];
    if (!data)
      return null;
    const getDays = (lastChecked) => {
      if (!lastChecked)
        return null;
      const diff = Date.now() - new Date(lastChecked).getTime();
      return Math.floor(diff / (1e3 * 60 * 60 * 24));
    };
    const lang = this.projectCache.selectedLang();
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditNodeComponent, selectors: [["aida-edit-node"]], inputs: { dialogMode: [1, "dialogMode"], node: [1, "node"], isOpen: [1, "isOpen"], initialShowNotes: [1, "initialShowNotes"] }, outputs: { dialogClose: "dialogClose" }, decls: 4, vars: 1, consts: [["editNode", ""], ["item", ""], ["appendTo", "body", "styleClass", "w-10", 3, "header", "maximizable", "modal", "style", "visible"], ["appendTo", "body", "styleClass", "w-10", 3, "visibleChange", "header", "maximizable", "modal", "visible"], [4, "ngTemplateOutlet"], [1, "flex", "flex-column", "h-full"], [1, "flex", "flex-row", "justify-content-between", "gap-2"], [1, "flex", "flex-row", "flex-wrap", "gap-3"], [3, "allowBoth", "allowLive", "showLang", "showVersion"], [1, "flex", "flex-column", "hover:text-primary"], ["for", "refresh", 1, "text-xs", "font-semibold", "mb-1"], ["id", "refresh", 1, "flex", "gap-2", "align-items-center"], ["icon", "pi pi-refresh", "outlined", "", "styleClass", "secondary-outline h-3rem", 3, "onClick", "disabled", "label", "loading"], [1, "text-sm", "text-color-secondary", "white-space-nowrap"], [1, "flex", "flex-column", "hover:text-primary", "mr-3"], ["for", "status", 1, "text-xs", "font-semibold", "mb-1"], ["fluid", "", "outlined", "", "styleClass", "secondary-outline h-3rem white-space-nowrap", 3, "onClick", "icon", "label"], ["styleClass", "mt-2", 3, "icon", "severity"], ["for", "status", 1, "text-xs", "font-semibold"], ["id", "status", 1, "flex", "flex-row", "gap-2", "align-items-center", "h-full"], [1, "flex", "gap-1", "align-items-center"], ["inputId", "inScope", "size", "large", 3, "ngModelChange", "ngModel", "binary"], ["for", "inScope"], ["inputId", "isNew", "size", "large", 3, "ngModelChange", "ngModel", "binary"], ["for", "isNew"], ["inputId", "isROT", "size", "large", 3, "ngModelChange", "ngModel", "binary"], ["for", "isROT"], ["inputId", "isMoved", "size", "large", 3, "ngModelChange", "ngModel", "binary"], ["for", "isMoved"], [1, "flex", "justify-content-between", "align-items-center"], ["icon", "pi pi-file-edit", "severity", "warn", "styleClass", "secondary-outline white-space-nowrap", "text", "", 3, "onClick", "disabled", "label"], [1, "flex-1", "overflow-y-auto"], [1, "flex", "flex-row", "gap-2", "min-w-min"], [1, "flex-1", 3, "legend"], [1, "flex", "flex-row", "justify-content-end", "gap-2", "mt-2"], ["icon", "pi pi-times", "severity", "secondary", 3, "onClick", "label"], ["icon", "pi pi-save", "severity", "success", 3, "onClick", "disabled", "label"], [1, "flex", "flex-column", "gap-1"], ["id", "path", "fluid", "", "pInputText", "", "type", "text", "variant", "outlined", 1, "secondary-outline", 3, "blur", "ngModelChange", "disabled", "ngModel"], ["for", "path"], [1, "secondary-outline"], ["icon", "pi pi-pen-to-square", "text", "", 1, "w-full", "h-full", 3, "onClick", "disabled"], ["icon", "pi pi-times-circle font-bold", "severity", "error", "styleClass", "mb-2"], ["id", "doubleh1", "fluid", "", "pInputText", "", "type", "text", "variant", "outlined", 1, "secondary-outline", 3, "ngModelChange", "ngModel", "disabled"], ["for", "doubleh1"], ["id", "h1", "fluid", "", "pInputText", "", "type", "text", "variant", "outlined", 1, "secondary-outline", 3, "ngModelChange", "ngModel", "disabled"], ["for", "h1"], ["id", "template", "appendTo", "body", "filterBy", "label", "fluid", "", "optionLabel", "label", "optionValue", "value", "styleClass", "secondary-outline", 3, "ngModelChange", "ngModel", "disabled", "filter", "options"], ["for", "template"], ["id", "parentPath", "appendTo", "body", "filterBy", "label", "fluid", "", "optionLabel", "label", "optionValue", "path", "styleClass", "secondary-outline", 3, "onChange", "disabled", "filter", "ngModel", "options"], ["for", "parentPath"], [1, "my-0"], ["id", "owner", "fluid", "", "pInputText", "", "type", "text", "variant", "outlined", 1, "secondary-outline", 3, "ngModelChange", "ngModel", "disabled"], ["for", "owner"], ["id", "email", "fluid", "", "pInputText", "", "type", "text", "variant", "outlined", 1, "secondary-outline", 3, "ngModelChange", "ngModel", "disabled"], ["for", "email"], [1, "flex", "flex-row", "gap-3", "flex-wrap"], [1, "flex", "align-items-center"], ["inputId", "isArchived", 3, "ngModelChange", "ngModel", "binary", "disabled"], ["for", "isArchived", 1, "ml-2"], ["inputId", "noindex", 3, "ngModelChange", "ngModel", "binary", "disabled"], ["for", "noindex", 1, "ml-2"], ["inputId", "isOrphan", 3, "ngModelChange", "ngModel", "binary", "disabled"], ["for", "isOrphan", 1, "ml-2"], ["inputId", "linksToPortal", 3, "ngModelChange", "ngModel", "binary", "disabled"], ["for", "linksToPortal", 1, "ml-2"], ["inputId", "linksToSignIn", 3, "ngModelChange", "ngModel", "binary", "disabled"], ["for", "linksToSignIn", 1, "ml-2"], ["inputId", "hasChatbot", 3, "ngModelChange", "ngModel", "binary", "disabled"], ["for", "hasChatbot", 1, "ml-2"], [1, "flex", "flex-column", "text-sm", "text-color-secondary"], [1, "font-bold"], ["value", "404", 3, "severity"], ["id", "pathSegment", "fluid", "", "pInputText", "", "type", "text", "variant", "outlined", 1, "secondary-outline", 3, "ngModelChange", "disabled", "ngModel"], ["for", "pathSegment"], [1, "flex", "flex-column"], [1, "font-bold", "-mb-1"], [3, "changed", "disabled", "isProto", "meta"], ["id", "path-fr", "fluid", "", "pInputText", "", "type", "text", "variant", "outlined", 1, "secondary-outline", 3, "blur", "ngModelChange", "disabled", "ngModel"], ["for", "path-fr"], ["id", "doubleh1-fr", "fluid", "", "pInputText", "", "type", "text", "variant", "outlined", 1, "secondary-outline", 3, "ngModelChange", "ngModel", "disabled"], ["for", "doubleh1-fr"], ["id", "h1-fr", "fluid", "", "pInputText", "", "type", "text", "variant", "outlined", 1, "secondary-outline", 3, "ngModelChange", "ngModel", "disabled"], ["for", "h1-fr"], ["id", "template-fr", "appendTo", "body", "filterBy", "label", "fluid", "", "optionLabel", "label", "optionValue", "value", "styleClass", "secondary-outline", 3, "ngModelChange", "ngModel", "disabled", "filter", "options"], ["for", "template-fr"], ["id", "parentPath-fr", "appendTo", "body", "filterBy", "label", "fluid", "", "optionLabel", "label", "optionValue", "path", "styleClass", "secondary-outline", 3, "onChange", "disabled", "filter", "ngModel", "options"], ["for", "parentPath-fr"], ["id", "owner-fr", "fluid", "", "pInputText", "", "type", "text", "variant", "outlined", 1, "secondary-outline", 3, "ngModelChange", "ngModel", "disabled"], ["for", "owner-fr"], ["id", "email-fr", "fluid", "", "pInputText", "", "type", "text", "variant", "outlined", 1, "secondary-outline", 3, "ngModelChange", "ngModel", "disabled"], ["for", "email-fr"], ["inputId", "isArchived-fr", 3, "ngModelChange", "ngModel", "binary", "disabled"], ["for", "isArchived-fr", 1, "ml-2"], ["inputId", "noindex-fr", 3, "ngModelChange", "ngModel", "binary", "disabled"], ["for", "noindex-fr", 1, "ml-2"], ["inputId", "isOrphan-fr", 3, "ngModelChange", "ngModel", "binary", "disabled"], ["for", "isOrphan-fr", 1, "ml-2"], ["inputId", "linksToPortal-fr", 3, "ngModelChange", "ngModel", "binary", "disabled"], ["for", "linksToPortal-fr", 1, "ml-2"], ["inputId", "linksToSignIn-fr", 3, "ngModelChange", "ngModel", "binary", "disabled"], ["for", "linksToSignIn-fr", 1, "ml-2"], ["inputId", "hasChatbot-fr", 3, "ngModelChange", "ngModel", "binary", "disabled"], ["for", "hasChatbot-fr", 1, "ml-2"], ["id", "pathSegment-fr", "fluid", "", "pInputText", "", "type", "text", "variant", "outlined", 1, "secondary-outline", 3, "ngModelChange", "disabled", "ngModel"], ["for", "pathSegment-fr"], ["id", "issue", "autoResize", "true", "fluid", "", "pTextarea", "", "rows", "3", "variant", "outlined", 1, "secondary-outline", "min-h-6rem", 3, "ngModelChange", "ngModel"], ["for", "issue"], ["id", "solution", "autoResize", "true", "fluid", "", "pTextarea", "", "rows", "3", "variant", "outlined", 1, "secondary-outline", "min-h-6rem", 3, "ngModelChange", "ngModel"], ["for", "solution"]], template: function EditNodeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, EditNodeComponent_Conditional_0_Template, 2, 8, "p-dialog", 2)(1, EditNodeComponent_Conditional_1_Template, 1, 1, "ng-container");
      \u0275\u0275template(2, EditNodeComponent_ng_template_2_Template, 23, 28, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.dialogMode() ? 0 : 1);
    }
  }, dependencies: [
    CommonModule,
    NgTemplateOutlet,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    ButtonModule,
    Button,
    CheckboxModule,
    Checkbox,
    DialogModule,
    Dialog,
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
    SelectModule,
    Select,
    TagModule,
    Tag,
    TextareaModule,
    Textarea,
    EditMetadataComponent,
    ProjectSettingsComponent,
    DecimalPipe,
    DatePipe,
    TranslatePipe
  ], styles: ["\n[_nghost-%COMP%]     .p-message-content {\n  width: 100%;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]     .p-message-text {\n  flex: 1;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]     .p-textarea {\n  color: var(--p-inputtext-color) !important;\n  background: var(--p-inputtext-background) !important;\n}\n[_nghost-%COMP%]     .p-textarea:disabled {\n  opacity: 1 !important;\n  background: var(--p-inputtext-disabled-background) !important;\n  color: var(--p-inputtext-disabled-color) !important;\n}\n[_nghost-%COMP%]     .p-select {\n  color: var(--p-inputtext-color) !important;\n  background: var(--p-inputtext-background) !important;\n}\n[_nghost-%COMP%]     .p-select.p-disabled {\n  opacity: 1 !important;\n  background: var(--p-inputtext-disabled-background) !important;\n  color: var(--p-inputtext-disabled-color) !important;\n}\n.min-h-6rem[_ngcontent-%COMP%] {\n  min-height: 6rem;\n}\n/*# sourceMappingURL=edit-node.component-KEIS4ALV.css.map */"], changeDetection: 0 });
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
      DialogModule,
      FieldsetModule,
      IftaLabelModule,
      InputGroupAddonModule,
      InputGroupModule,
      InputTextModule,
      MessageModule,
      SelectModule,
      TagModule,
      TextareaModule,
      EditMetadataComponent,
      ProjectSettingsComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `@if (dialogMode()) {
  <p-dialog
    [header]="node().data?.prototype?.[uiLang()]?.h1"
    [maximizable]="true"
    [modal]="true"
    [style]="{ height: '90vh' }"
    [visible]="isOpen()"
    (visibleChange)="!$event && dialogClose.emit()"
    appendTo="body"
    styleClass="w-10"
  >
    <ng-container *ngTemplateOutlet="editNode" />
  </p-dialog>
} @else {
  <ng-container *ngTemplateOutlet="editNode" />
}

<ng-template #editNode>
  <div class="flex flex-column h-full">
    <div class="flex flex-row justify-content-between gap-2">
      <div class="flex flex-row flex-wrap gap-3">
        <aida-project-settings [allowBoth]="true" [allowLive]="true" [showLang]="true" [showVersion]="true">
          <div class="flex flex-column hover:text-primary">
            <label class="text-xs font-semibold mb-1" for="refresh">{{ 'common.data' | translate }}</label>
            <div id="refresh" class="flex gap-2 align-items-center">
              <p-button
                [disabled]="projectCache.selectedVersion() === 'baseline' && !editsEnabled()"
                [label]="'common.refresh' | translate"
                [loading]="projectState.refreshing()[projectCache.selectedVersion()]"
                (onClick)="refresh()"
                icon="pi pi-refresh"
                outlined
                styleClass="secondary-outline h-3rem"
              />
              <span class="text-sm text-color-secondary white-space-nowrap">
                {{ daysSinceRefresh() !== null ? ('editNode.lastRefreshed' | translate: { days: daysSinceRefresh() }) : ('editNode.neverRefreshed' | translate) }}
              </span>
            </div>
          </div>
        </aida-project-settings>

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
        <label class="text-xs font-semibold mb-1" for="status">{{ 'editNode.notes' | translate }}</label>
        <p-button [icon]="noteConfig.icon" [label]="noteConfig.label" (onClick)="editNotes()" fluid outlined styleClass="secondary-outline h-3rem white-space-nowrap" />
      </div>
    </div>
    @if (versionConfig(); as config) {
      <p-message [icon]="config.icon" [severity]="config.severity" styleClass="mt-2">
        <div class="flex justify-content-between align-items-center">
          <span>{{ config.text }}</span>
          <p-button
            [disabled]="editsEnabled()"
            [label]="'common.enableEdits' | translate"
            (onClick)="enableEdits()"
            icon="pi pi-file-edit"
            severity="warn"
            styleClass="secondary-outline white-space-nowrap"
            text
          />
        </div>
      </p-message>
    }
    @if (node().data) {
      <div class="flex-1 overflow-y-auto">
        @if (!toggleNotes()) {
          <div class="flex flex-row gap-2 min-w-min">
            @if (projectCache.selectedLang() !== 'fr') {
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
                  @if (node().data.status.isNew && projectCache.selectedVersion() === 'prototype') {
                    <p-iftalabel>
                      <input
                        id="pathSegment"
                        [class.text-red]="pathEN().startsWith('new-page')"
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
                      [(ngModel)]="node().data[projectCache.selectedVersion()].en.doubleH1"
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
                      [(ngModel)]="node().data[projectCache.selectedVersion()].en.h1"
                      [class.text-red]="node().data[projectCache.selectedVersion()].en.h1 === 'New page'"
                      [disabled]="!!versionConfig() && !editsEnabled()"
                      (ngModelChange)="markChanges(); syncNewName(node(), projectCache.selectedVersion(), 'en')"
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
                      [(ngModel)]="node().data[projectCache.selectedVersion()].en.template"
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
                    <label [class.text-red]="node().data[projectCache.selectedVersion()].en.template !== node().data[projectCache.selectedVersion()].fr.template" for="template">
                      {{ 'editNode.template' | translate }}
                    </label>
                  </p-iftalabel>

                  <!-- Parent page -->
                  <p-iftalabel>
                    <p-select
                      id="parentPath"
                      [disabled]="!!versionConfig() && !editsEnabled()"
                      [filter]="true"
                      [ngModel]="node().data[projectCache.selectedVersion()].en.parentPath"
                      [options]="enPages()"
                      (onChange)="moveNode(node(), $event.value, 'en', projectCache.selectedVersion())"
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

                  @if (node().data[projectCache.selectedVersion()].en; as meta) {
                    <h3 class="my-0">{{ 'editNode.metadata' | translate }}</h3>
                    <aida-edit-metadata [disabled]="!!versionConfig() && !editsEnabled()" [isProto]="projectCache.selectedVersion() === 'prototype'" [meta]="meta" (changed)="markChanges()" />
                  }

                  <h3 class="my-0">{{ 'editNode.pageOwner' | translate }}</h3>
                  <p-iftalabel>
                    <input
                      id="owner"
                      [(ngModel)]="node().data[projectCache.selectedVersion()].en.owner"
                      [disabled]="!!versionConfig() && !editsEnabled()"
                      (ngModelChange)="markChanges(); syncData(node(), 'owner', 'ENtoFR')"
                      class="secondary-outline"
                      fluid
                      pInputText
                      type="text"
                      variant="outlined"
                    />
                    <label [class.text-red]="node().data[projectCache.selectedVersion()].en.owner !== node().data[projectCache.selectedVersion()].fr.owner" for="owner">
                      {{ 'editNode.owner' | translate }}
                    </label>
                  </p-iftalabel>
                  <p-iftalabel>
                    <input
                      id="email"
                      [(ngModel)]="node().data[projectCache.selectedVersion()].en.email"
                      [disabled]="!!versionConfig() && !editsEnabled()"
                      (ngModelChange)="markChanges(); syncData(node(), 'email', 'ENtoFR')"
                      class="secondary-outline"
                      fluid
                      pInputText
                      type="text"
                      variant="outlined"
                    />
                    <label [class.text-red]="node().data[projectCache.selectedVersion()].en.email !== node().data[projectCache.selectedVersion()].fr.email" for="email">
                      {{ 'editNode.email' | translate }}
                    </label>
                  </p-iftalabel>

                  <h3 class="my-0">{{ 'editNode.info' | translate }}</h3>
                  <div class="flex flex-row gap-3 flex-wrap">
                    <div class="flex align-items-center">
                      <p-checkbox
                        [(ngModel)]="node().data[projectCache.selectedVersion()].en.isArchived"
                        [binary]="true"
                        [disabled]="!!versionConfig() && !editsEnabled()"
                        (ngModelChange)="markChanges(); syncData(node(), 'isArchived', 'ENtoFR')"
                        inputId="isArchived"
                      />
                      <label [class.text-red]="node().data[projectCache.selectedVersion()].en.isArchived !== node().data[projectCache.selectedVersion()].fr.isArchived" class="ml-2" for="isArchived">
                        {{ 'editNode.isArchived' | translate }}
                      </label>
                    </div>
                    <div class="flex align-items-center">
                      <p-checkbox
                        [(ngModel)]="node().data[projectCache.selectedVersion()].en.noindex"
                        [binary]="true"
                        [disabled]="!!versionConfig() && !editsEnabled()"
                        (ngModelChange)="markChanges(); syncData(node(), 'noindex', 'ENtoFR')"
                        inputId="noindex"
                      />
                      <label [class.text-red]="node().data[projectCache.selectedVersion()].en.noindex !== node().data[projectCache.selectedVersion()].fr.noindex" class="ml-2" for="noindex">
                        {{ 'editNode.noindex' | translate }}
                      </label>
                    </div>
                    <div class="flex align-items-center">
                      <p-checkbox
                        [(ngModel)]="node().data[projectCache.selectedVersion()].en.isOrphan"
                        [binary]="true"
                        [disabled]="projectCache.selectedVersion() === 'prototype' ? !urlEditsEnabled() : !editsEnabled()"
                        (ngModelChange)="markChanges()"
                        inputId="isOrphan"
                      />
                      <label [class.text-red]="node().data[projectCache.selectedVersion()].en.isOrphan !== node().data[projectCache.selectedVersion()].fr.isOrphan" class="ml-2" for="isOrphan">
                        {{ 'editNode.isOrphan' | translate }}
                      </label>
                    </div>
                    <div class="flex align-items-center">
                      <p-checkbox
                        [(ngModel)]="node().data[projectCache.selectedVersion()].en.linksToPortal"
                        [binary]="true"
                        [disabled]="projectCache.selectedVersion() === 'prototype' ? !urlEditsEnabled() : !editsEnabled()"
                        (ngModelChange)="markChanges()"
                        inputId="linksToPortal"
                      />
                      <label
                        [class.text-red]="node().data[projectCache.selectedVersion()].en.linksToPortal !== node().data[projectCache.selectedVersion()].fr.linksToPortal"
                        class="ml-2"
                        for="linksToPortal"
                      >
                        {{ 'editNode.linksToPortal' | translate }}
                      </label>
                    </div>
                    <div class="flex align-items-center">
                      <p-checkbox
                        [(ngModel)]="node().data[projectCache.selectedVersion()].en.linksToSignIn"
                        [binary]="true"
                        [disabled]="projectCache.selectedVersion() === 'prototype' ? !urlEditsEnabled() : !editsEnabled()"
                        (ngModelChange)="markChanges()"
                        inputId="linksToSignIn"
                      />
                      <label
                        [class.text-red]="node().data[projectCache.selectedVersion()].en.linksToSignIn !== node().data[projectCache.selectedVersion()].fr.linksToSignIn"
                        class="ml-2"
                        for="linksToSignIn"
                      >
                        {{ 'editNode.linksToSignIn' | translate }}
                      </label>
                    </div>
                    <div class="flex align-items-center">
                      <p-checkbox
                        [(ngModel)]="node().data[projectCache.selectedVersion()].en.hasChatbot"
                        [binary]="true"
                        [disabled]="projectCache.selectedVersion() === 'prototype' ? !urlEditsEnabled() : !editsEnabled()"
                        (ngModelChange)="markChanges()"
                        inputId="hasChatbot"
                      />
                      <label [class.text-red]="node().data[projectCache.selectedVersion()].en.hasChatbot !== node().data[projectCache.selectedVersion()].fr.hasChatbot" class="ml-2" for="hasChatbot">
                        {{ 'editNode.hasChatbot' | translate }}
                      </label>
                    </div>
                    <div class="flex flex-column text-sm text-color-secondary">
                      <span class="font-bold">
                        {{ 'editNode.lastPublished' | translate }}
                      </span>
                      <span [class.text-red]="(node().data[projectCache.selectedVersion()].en.lastPublished | date) !== (node().data[projectCache.selectedVersion()].fr.lastPublished | date)">
                        {{ (node().data[projectCache.selectedVersion()].en.lastPublished | date) ?? ('common.never' | translate) }}
                      </span>
                    </div>
                    <div class="flex flex-column text-sm text-color-secondary">
                      <span class="font-bold">
                        {{ 'editNode.wordCount' | translate }}
                      </span>
                      {{ (node().data[projectCache.selectedVersion()].en.wordCount | number) ?? '\u2014' }}
                    </div>
                    <div class="flex flex-column text-sm text-color-secondary">
                      <span class="font-bold">
                        {{ 'editNode.linkCount' | translate }}
                      </span>
                      <span [class.text-red]="node().data[projectCache.selectedVersion()].en.linkCount !== node().data[projectCache.selectedVersion()].fr.linkCount">
                        {{ (node().data[projectCache.selectedVersion()].en.linkCount | number) ?? '\u2014' }}
                      </span>
                    </div>
                    <div class="flex flex-column text-sm text-color-secondary">
                      <span class="font-bold">
                        {{ 'editNode.vanityCount' | translate }}
                      </span>
                      <span [class.text-red]="node().data.vanity.en.length !== node().data.vanity.fr.length">
                        {{ (node().data.vanity.en.length | number) ?? '\u2014' }}
                      </span>
                    </div>
                    <div class="flex flex-column text-sm text-color-secondary">
                      <span class="font-bold">
                        {{ 'editNode.phoneCount' | translate }}
                      </span>
                      <span [class.text-red]="node().data[projectCache.selectedVersion()].en.phoneNumbers?.length !== node().data[projectCache.selectedVersion()].fr.phoneNumbers?.length">
                        {{ (node().data[projectCache.selectedVersion()].en.phoneNumbers?.length | number) ?? '\u2014' }}
                      </span>
                    </div>
                    <div class="flex flex-column text-sm text-color-secondary">
                      <span class="font-bold">
                        {{ 'editNode.visits' | translate }}
                      </span>
                      {{ (node().data[projectCache.selectedVersion()].en.visits | number) ?? '\u2014' }}
                    </div>
                    <div class="flex flex-column text-sm text-color-secondary">
                      <span class="font-bold">
                        {{ 'common.readability.fleschKincaid' | translate }}
                      </span>
                      <span
                        [class.text-orange-400]="node().data[projectCache.selectedVersion()].en.fleschKincaid < 12 && node().data[projectCache.selectedVersion()].en.fleschKincaid > 8"
                        [class.text-red]="node().data[projectCache.selectedVersion()].en.fleschKincaid >= 12"
                      >
                        {{ (node().data[projectCache.selectedVersion()].en.fleschKincaid | number) ?? '\u2014' }}
                      </span>
                    </div>
                    <div class="flex flex-column text-sm text-color-secondary">
                      <span class="font-bold">
                        {{ 'common.readability.gunningFog' | translate }}
                      </span>
                      <span
                        [class.text-orange-400]="node().data[projectCache.selectedVersion()].en.gunningFog < 12 && node().data[projectCache.selectedVersion()].en.gunningFog > 8"
                        [class.text-red]="node().data[projectCache.selectedVersion()].en.gunningFog >= 12"
                      >
                        {{ (node().data[projectCache.selectedVersion()].en.gunningFog | number) ?? '\u2014' }}
                      </span>
                    </div>
                    @if (node().data[projectCache.selectedVersion()].en.is404) {
                      <p-tag value="404" [severity]="node().data[projectCache.selectedVersion()].en.is404 === node().data[projectCache.selectedVersion()].fr.is404 ? undefined : 'danger'" />
                    }
                  </div>
                </div>
              </p-fieldset>
            }
            @if (projectCache.selectedLang() !== 'en') {
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
                  @if (node().data.status.isNew && projectCache.selectedVersion() === 'prototype') {
                    <p-iftalabel>
                      <input
                        id="pathSegment-fr"
                        [class.text-red]="pathFR().startsWith('nouvelle-page')"
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
                      [(ngModel)]="node().data[projectCache.selectedVersion()].fr.doubleH1"
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
                      [(ngModel)]="node().data[projectCache.selectedVersion()].fr.h1"
                      [class.text-red]="node().data[projectCache.selectedVersion()].fr.h1 === 'Nouvelle page'"
                      [disabled]="!!versionConfig() && !editsEnabled()"
                      (ngModelChange)="markChanges(); syncNewName(node(), projectCache.selectedVersion(), 'fr')"
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
                      [(ngModel)]="node().data[projectCache.selectedVersion()].fr.template"
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
                    <label [class.text-red]="node().data[projectCache.selectedVersion()].en.template !== node().data[projectCache.selectedVersion()].fr.template" for="template-fr">
                      {{ 'editNode.template' | translate }}
                    </label>
                  </p-iftalabel>

                  <!-- Parent page -->
                  <p-iftalabel>
                    <p-select
                      id="parentPath-fr"
                      [disabled]="!!versionConfig() && !editsEnabled()"
                      [filter]="true"
                      [ngModel]="node().data[projectCache.selectedVersion()].fr.parentPath"
                      [options]="frPages()"
                      (onChange)="moveNode(node(), $event.value, 'fr', projectCache.selectedVersion())"
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

                  @if (node().data[projectCache.selectedVersion()].fr; as meta) {
                    <h3 class="my-0">{{ 'editNode.metadata' | translate }}</h3>
                    <aida-edit-metadata [disabled]="!!versionConfig() && !editsEnabled()" [isProto]="projectCache.selectedVersion() === 'prototype'" [meta]="meta" (changed)="markChanges()" />
                  }

                  <h3 class="my-0">{{ 'editNode.pageOwner' | translate }}</h3>
                  <p-iftalabel>
                    <input
                      id="owner-fr"
                      [(ngModel)]="node().data[projectCache.selectedVersion()].fr.owner"
                      [disabled]="!!versionConfig() && !editsEnabled()"
                      (ngModelChange)="markChanges(); syncData(node(), 'owner', 'FRtoEN')"
                      class="secondary-outline"
                      fluid
                      pInputText
                      type="text"
                      variant="outlined"
                    />
                    <label [class.text-red]="node().data[projectCache.selectedVersion()].en.owner !== node().data[projectCache.selectedVersion()].fr.owner" for="owner-fr">
                      {{ 'editNode.owner' | translate }}
                    </label>
                  </p-iftalabel>
                  <p-iftalabel>
                    <input
                      id="email-fr"
                      [(ngModel)]="node().data[projectCache.selectedVersion()].fr.email"
                      [disabled]="!!versionConfig() && !editsEnabled()"
                      (ngModelChange)="markChanges(); syncData(node(), 'email', 'FRtoEN')"
                      class="secondary-outline"
                      fluid
                      pInputText
                      type="text"
                      variant="outlined"
                    />
                    <label [class.text-red]="node().data[projectCache.selectedVersion()].en.email !== node().data[projectCache.selectedVersion()].fr.email" for="email-fr">
                      {{ 'editNode.email' | translate }}
                    </label>
                  </p-iftalabel>

                  <h3 class="my-0">{{ 'editNode.info' | translate }}</h3>
                  <div class="flex flex-row gap-3 flex-wrap">
                    <div class="flex align-items-center">
                      <p-checkbox
                        [(ngModel)]="node().data[projectCache.selectedVersion()].fr.isArchived"
                        [binary]="true"
                        [disabled]="!!versionConfig() && !editsEnabled()"
                        (ngModelChange)="markChanges(); syncData(node(), 'isArchived', 'FRtoEN')"
                        inputId="isArchived-fr"
                      />
                      <label
                        [class.text-red]="node().data[projectCache.selectedVersion()].en.isArchived !== node().data[projectCache.selectedVersion()].fr.isArchived"
                        class="ml-2"
                        for="isArchived-fr"
                      >
                        {{ 'editNode.isArchived' | translate }}
                      </label>
                    </div>
                    <div class="flex align-items-center">
                      <p-checkbox
                        [(ngModel)]="node().data[projectCache.selectedVersion()].fr.noindex"
                        [binary]="true"
                        [disabled]="!!versionConfig() && !editsEnabled()"
                        (ngModelChange)="markChanges(); syncData(node(), 'noindex', 'FRtoEN')"
                        inputId="noindex-fr"
                      />
                      <label [class.text-red]="node().data[projectCache.selectedVersion()].en.noindex !== node().data[projectCache.selectedVersion()].fr.noindex" class="ml-2" for="noindex-fr">
                        {{ 'editNode.noindex' | translate }}
                      </label>
                    </div>
                    <div class="flex align-items-center">
                      <p-checkbox
                        [(ngModel)]="node().data[projectCache.selectedVersion()].fr.isOrphan"
                        [binary]="true"
                        [disabled]="projectCache.selectedVersion() === 'prototype' ? !urlEditsEnabled() : !editsEnabled()"
                        (ngModelChange)="markChanges()"
                        inputId="isOrphan-fr"
                      />
                      <label [class.text-red]="node().data[projectCache.selectedVersion()].en.isOrphan !== node().data[projectCache.selectedVersion()].fr.isOrphan" class="ml-2" for="isOrphan-fr">
                        {{ 'editNode.isOrphan' | translate }}
                      </label>
                    </div>
                    <div class="flex align-items-center">
                      <p-checkbox
                        [(ngModel)]="node().data[projectCache.selectedVersion()].fr.linksToPortal"
                        [binary]="true"
                        [disabled]="projectCache.selectedVersion() === 'prototype' ? !urlEditsEnabled() : !editsEnabled()"
                        (ngModelChange)="markChanges()"
                        inputId="linksToPortal-fr"
                      />
                      <label
                        [class.text-red]="node().data[projectCache.selectedVersion()].en.linksToPortal !== node().data[projectCache.selectedVersion()].fr.linksToPortal"
                        class="ml-2"
                        for="linksToPortal-fr"
                      >
                        {{ 'editNode.linksToPortal' | translate }}
                      </label>
                    </div>
                    <div class="flex align-items-center">
                      <p-checkbox
                        [(ngModel)]="node().data[projectCache.selectedVersion()].fr.linksToSignIn"
                        [binary]="true"
                        [disabled]="projectCache.selectedVersion() === 'prototype' ? !urlEditsEnabled() : !editsEnabled()"
                        (ngModelChange)="markChanges()"
                        inputId="linksToSignIn-fr"
                      />
                      <label
                        [class.text-red]="node().data[projectCache.selectedVersion()].en.linksToSignIn !== node().data[projectCache.selectedVersion()].fr.linksToSignIn"
                        class="ml-2"
                        for="linksToSignIn-fr"
                      >
                        {{ 'editNode.linksToSignIn' | translate }}
                      </label>
                    </div>
                    <div class="flex align-items-center">
                      <p-checkbox
                        [(ngModel)]="node().data[projectCache.selectedVersion()].fr.hasChatbot"
                        [binary]="true"
                        [disabled]="projectCache.selectedVersion() === 'prototype' ? !urlEditsEnabled() : !editsEnabled()"
                        (ngModelChange)="markChanges()"
                        inputId="hasChatbot-fr"
                      />
                      <label
                        [class.text-red]="node().data[projectCache.selectedVersion()].en.hasChatbot !== node().data[projectCache.selectedVersion()].fr.hasChatbot"
                        class="ml-2"
                        for="hasChatbot-fr"
                      >
                        {{ 'editNode.hasChatbot' | translate }}
                      </label>
                    </div>
                    <div class="flex flex-column text-sm text-color-secondary">
                      <span class="font-bold">
                        {{ 'editNode.lastPublished' | translate }}
                      </span>
                      <span [class.text-red]="(node().data[projectCache.selectedVersion()].en.lastPublished | date) !== (node().data[projectCache.selectedVersion()].fr.lastPublished | date)">
                        {{ (node().data[projectCache.selectedVersion()].fr.lastPublished | date) ?? ('common.never' | translate) }}
                      </span>
                    </div>
                    <div class="flex flex-column text-sm text-color-secondary">
                      <span class="font-bold">
                        {{ 'editNode.wordCount' | translate }}
                      </span>
                      {{ (node().data[projectCache.selectedVersion()].fr.wordCount | number) ?? '\u2014' }}
                    </div>
                    <div class="flex flex-column text-sm text-color-secondary">
                      <span class="font-bold">
                        {{ 'editNode.linkCount' | translate }}
                      </span>
                      <span [class.text-red]="node().data[projectCache.selectedVersion()].en.linkCount !== node().data[projectCache.selectedVersion()].fr.linkCount">
                        {{ (node().data[projectCache.selectedVersion()].fr.linkCount | number) ?? '\u2014' }}
                      </span>
                    </div>
                    <div class="flex flex-column text-sm text-color-secondary">
                      <span class="font-bold">
                        {{ 'editNode.vanityCount' | translate }}
                      </span>
                      <span [class.text-red]="node().data.vanity.en.length !== node().data.vanity.fr.length">
                        {{ (node().data.vanity.fr.length | number) ?? '\u2014' }}
                      </span>
                    </div>
                    <div class="flex flex-column text-sm text-color-secondary">
                      <span class="font-bold">
                        {{ 'editNode.phoneCount' | translate }}
                      </span>
                      <span [class.text-red]="node().data[projectCache.selectedVersion()].en.phoneNumbers?.length !== node().data[projectCache.selectedVersion()].fr.phoneNumbers?.length">
                        {{ (node().data[projectCache.selectedVersion()].fr.phoneNumbers?.length | number) ?? '\u2014' }}
                      </span>
                    </div>
                    <div class="flex flex-column text-sm text-color-secondary">
                      <span class="font-bold">
                        {{ 'editNode.visits' | translate }}
                      </span>
                      {{ (node().data[projectCache.selectedVersion()].fr.visits | number) ?? '\u2014' }}
                    </div>
                    <div class="flex flex-column text-sm text-color-secondary">
                      <span class="font-bold">
                        {{ 'common.readability.fleschKincaid' | translate }}
                      </span>
                      <span
                        [class.text-orange-400]="node().data[projectCache.selectedVersion()].fr.fleschKincaid < 12 && node().data[projectCache.selectedVersion()].fr.fleschKincaid > 8"
                        [class.text-red]="node().data[projectCache.selectedVersion()].fr.fleschKincaid >= 12"
                      >
                        {{ (node().data[projectCache.selectedVersion()].fr.fleschKincaid | number) ?? '\u2014' }}
                      </span>
                    </div>
                    <div class="flex flex-column text-sm text-color-secondary">
                      <span class="font-bold">
                        {{ 'common.readability.gunningFog' | translate }}
                      </span>
                      <span
                        [class.text-orange-400]="node().data[projectCache.selectedVersion()].fr.gunningFog < 12 && node().data[projectCache.selectedVersion()].fr.gunningFog > 8"
                        [class.text-red]="node().data[projectCache.selectedVersion()].fr.gunningFog >= 12"
                      >
                        {{ (node().data[projectCache.selectedVersion()].fr.gunningFog | number) ?? '\u2014' }}
                      </span>
                    </div>
                    @if (node().data[projectCache.selectedVersion()].fr.is404) {
                      <p-tag value="404" [severity]="node().data[projectCache.selectedVersion()].en.is404 === node().data[projectCache.selectedVersion()].fr.is404 ? undefined : 'danger'" />
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
</ng-template>
`, styles: ["/* src/app/components/edit-node/edit-node.component.css */\n:host ::ng-deep .p-message-content {\n  width: 100%;\n  justify-content: space-between;\n}\n:host ::ng-deep .p-message-text {\n  flex: 1;\n  justify-content: space-between;\n}\n:host ::ng-deep .p-textarea {\n  color: var(--p-inputtext-color) !important;\n  background: var(--p-inputtext-background) !important;\n}\n:host ::ng-deep .p-textarea:disabled {\n  opacity: 1 !important;\n  background: var(--p-inputtext-disabled-background) !important;\n  color: var(--p-inputtext-disabled-color) !important;\n}\n:host ::ng-deep .p-select {\n  color: var(--p-inputtext-color) !important;\n  background: var(--p-inputtext-background) !important;\n}\n:host ::ng-deep .p-select.p-disabled {\n  opacity: 1 !important;\n  background: var(--p-inputtext-disabled-background) !important;\n  color: var(--p-inputtext-disabled-color) !important;\n}\n.min-h-6rem {\n  min-height: 6rem;\n}\n/*# sourceMappingURL=edit-node.component-KEIS4ALV.css.map */\n"] }]
  }], () => [], { dialogMode: [{ type: Input, args: [{ isSignal: true, alias: "dialogMode", required: false }] }], node: [{ type: Input, args: [{ isSignal: true, alias: "node", required: true }] }], isOpen: [{ type: Input, args: [{ isSignal: true, alias: "isOpen", required: false }] }], initialShowNotes: [{ type: Input, args: [{ isSignal: true, alias: "initialShowNotes", required: false }] }], dialogClose: [{ type: Output, args: ["dialogClose"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditNodeComponent, { className: "EditNodeComponent", filePath: "src/app/components/edit-node/edit-node.component.ts", lineNumber: 55 });
})();

export {
  EditMetadataComponent,
  EditNodeComponent
};
//# sourceMappingURL=chunk-G5SO6DJB.js.map
