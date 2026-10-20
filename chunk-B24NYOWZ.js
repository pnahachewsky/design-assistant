import {
  Chip,
  TimesCircleIcon
} from "./chunk-VUVEB27N.js";
import {
  BaseInput,
  Overlay,
  Scroller
} from "./chunk-3SPBARR4.js";
import {
  AutoFocus,
  BaseComponent,
  BaseStyle,
  Bind,
  BindModule,
  ChevronDownIcon,
  InputText,
  NG_VALUE_ACCESSOR,
  OverlayService,
  PARENT_INSTANCE,
  PrimeTemplate,
  Ripple,
  SharedModule,
  SpinnerIcon,
  TimesIcon,
  TranslationKeys,
  V,
  Z,
  bt,
  k,
  l,
  p,
  s,
  s2
} from "./chunk-AGPMTYRP.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-MDI4WJGA.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  HostListener,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Output,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  forwardRef,
  inject,
  input,
  numberAttribute,
  setClassMetadata,
  signal,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-KRHY6Z2H.js";

// node_modules/@primeuix/styles/dist/progressbar/index.mjs
var style = "\n    .p-progressbar {\n        display: block;\n        position: relative;\n        overflow: hidden;\n        height: dt('progressbar.height');\n        background: dt('progressbar.background');\n        border-radius: dt('progressbar.border.radius');\n    }\n\n    .p-progressbar-value {\n        margin: 0;\n        background: dt('progressbar.value.background');\n    }\n\n    .p-progressbar-label {\n        color: dt('progressbar.label.color');\n        font-size: dt('progressbar.label.font.size');\n        font-weight: dt('progressbar.label.font.weight');\n    }\n\n    .p-progressbar-determinate .p-progressbar-value {\n        height: 100%;\n        width: 0%;\n        position: absolute;\n        display: none;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        overflow: hidden;\n        transition: width 1s ease-in-out;\n    }\n\n    .p-progressbar-determinate .p-progressbar-label {\n        display: inline-flex;\n    }\n\n    .p-progressbar-indeterminate .p-progressbar-value::before {\n        content: '';\n        position: absolute;\n        background: inherit;\n        inset-block-start: 0;\n        inset-inline-start: 0;\n        inset-block-end: 0;\n        will-change: inset-inline-start, inset-inline-end;\n        animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n    }\n\n    .p-progressbar-indeterminate .p-progressbar-value::after {\n        content: '';\n        position: absolute;\n        background: inherit;\n        inset-block-start: 0;\n        inset-inline-start: 0;\n        inset-block-end: 0;\n        will-change: inset-inline-start, inset-inline-end;\n        animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n        animation-delay: 1.15s;\n    }\n\n    @keyframes p-progressbar-indeterminate-anim {\n        0% {\n            inset-inline-start: -35%;\n            inset-inline-end: 100%;\n        }\n        60% {\n            inset-inline-start: 100%;\n            inset-inline-end: -90%;\n        }\n        100% {\n            inset-inline-start: 100%;\n            inset-inline-end: -90%;\n        }\n    }\n    @-webkit-keyframes p-progressbar-indeterminate-anim {\n        0% {\n            inset-inline-start: -35%;\n            inset-inline-end: 100%;\n        }\n        60% {\n            inset-inline-start: 100%;\n            inset-inline-end: -90%;\n        }\n        100% {\n            inset-inline-start: 100%;\n            inset-inline-end: -90%;\n        }\n    }\n\n    @keyframes p-progressbar-indeterminate-anim-short {\n        0% {\n            inset-inline-start: -200%;\n            inset-inline-end: 100%;\n        }\n        60% {\n            inset-inline-start: 107%;\n            inset-inline-end: -8%;\n        }\n        100% {\n            inset-inline-start: 107%;\n            inset-inline-end: -8%;\n        }\n    }\n    @-webkit-keyframes p-progressbar-indeterminate-anim-short {\n        0% {\n            inset-inline-start: -200%;\n            inset-inline-end: 100%;\n        }\n        60% {\n            inset-inline-start: 107%;\n            inset-inline-end: -8%;\n        }\n        100% {\n            inset-inline-start: 107%;\n            inset-inline-end: -8%;\n        }\n    }\n";

// node_modules/primeng/fesm2022/primeng-progressbar.mjs
var _c0 = ["content"];
var _c1 = (a0) => ({
  $implicit: a0
});
function ProgressBar_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("display", ctx_r0.value != null && ctx_r0.value !== 0 ? "flex" : "none");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r0.value, "", ctx_r0.unit);
  }
}
function ProgressBar_div_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ProgressBar_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 2);
    \u0275\u0275template(2, ProgressBar_div_0_div_2_Template, 2, 4, "div", 3)(3, ProgressBar_div_0_ng_container_3_Template, 1, 0, "ng-container", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("value"), ctx_r0.valueStyleClass));
    \u0275\u0275styleProp("width", ctx_r0.value + "%")("display", "flex")("background", ctx_r0.color);
    \u0275\u0275property("pBind", ctx_r0.ptm("value"));
    \u0275\u0275attribute("data-p", ctx_r0.dataP);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.cx("label"));
    \u0275\u0275property("pBind", ctx_r0.ptm("label"));
    \u0275\u0275attribute("data-p", ctx_r0.dataP);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showValue && !ctx_r0.contentTemplate && !ctx_r0._contentTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.contentTemplate || ctx_r0._contentTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(17, _c1, ctx_r0.value));
  }
}
function ProgressBar_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("value"), ctx_r0.valueStyleClass));
    \u0275\u0275styleProp("background", ctx_r0.color);
    \u0275\u0275property("pBind", ctx_r0.ptm("value"));
    \u0275\u0275attribute("data-p", ctx_r0.dataP);
  }
}
var classes = {
  root: ({
    instance
  }) => ["p-progressbar p-component", {
    "p-progressbar-determinate": instance.mode == "determinate",
    "p-progressbar-indeterminate": instance.mode == "indeterminate"
  }],
  value: "p-progressbar-value",
  label: "p-progressbar-label"
};
var ProgressBarStyle = class _ProgressBarStyle extends BaseStyle {
  name = "progressbar";
  style = style;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ProgressBarStyle_BaseFactory;
    return function ProgressBarStyle_Factory(__ngFactoryType__) {
      return (\u0275ProgressBarStyle_BaseFactory || (\u0275ProgressBarStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ProgressBarStyle)))(__ngFactoryType__ || _ProgressBarStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ProgressBarStyle,
    factory: _ProgressBarStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressBarStyle, [{
    type: Injectable
  }], null, null);
})();
var ProgressBarClasses;
(function(ProgressBarClasses2) {
  ProgressBarClasses2["root"] = "p-progressbar";
  ProgressBarClasses2["value"] = "p-progressbar-value";
  ProgressBarClasses2["label"] = "p-progressbar-label";
})(ProgressBarClasses || (ProgressBarClasses = {}));
var PROGRESSBAR_INSTANCE = new InjectionToken("PROGRESSBAR_INSTANCE");
var ProgressBar = class _ProgressBar extends BaseComponent {
  componentName = "ProgressBar";
  $pcProgressBar = inject(PROGRESSBAR_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  /**
   * Current value of the progress.
   * @group Props
   */
  value;
  /**
   * Whether to display the progress bar value.
   * @group Props
   */
  showValue = true;
  /**
   * Style class of the element.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Style class of the value element.
   * @group Props
   */
  valueStyleClass;
  /**
   * Unit sign appended to the value.
   * @group Props
   */
  unit = "%";
  /**
   * Defines the mode of the progress
   * @defaultValue 'determinate'
   * @group Props
   */
  mode = "determinate";
  /**
   * Color for the background of the progress.
   * @group Props
   */
  color;
  /**
   * Template of the content.
   * @param {ProgressBarContentTemplateContext} context - content context.
   * @see {@link ProgressBarContentTemplateContext}
   * @group Templates
   */
  contentTemplate;
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  _componentStyle = inject(ProgressBarStyle);
  templates;
  _contentTemplate;
  onAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this._contentTemplate = item.template;
          break;
        default:
          this._contentTemplate = item.template;
      }
    });
  }
  get dataP() {
    return this.cn({
      determinate: this.mode === "determinate",
      indeterminate: this.mode === "indeterminate"
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ProgressBar_BaseFactory;
    return function ProgressBar_Factory(__ngFactoryType__) {
      return (\u0275ProgressBar_BaseFactory || (\u0275ProgressBar_BaseFactory = \u0275\u0275getInheritedFactory(_ProgressBar)))(__ngFactoryType__ || _ProgressBar);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ProgressBar,
    selectors: [["p-progressBar"], ["p-progressbar"], ["p-progress-bar"]],
    contentQueries: function ProgressBar_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c0, 4)(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostAttrs: ["role", "progressbar"],
    hostVars: 7,
    hostBindings: function ProgressBar_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-valuemin", 0)("aria-valuenow", ctx.value)("aria-valuemax", 100)("aria-level", ctx.value + ctx.unit)("data-p", ctx.dataP);
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      value: [2, "value", "value", numberAttribute],
      showValue: [2, "showValue", "showValue", booleanAttribute],
      styleClass: "styleClass",
      valueStyleClass: "valueStyleClass",
      unit: "unit",
      mode: "mode",
      color: "color"
    },
    features: [\u0275\u0275ProvidersFeature([ProgressBarStyle, {
      provide: PROGRESSBAR_INSTANCE,
      useExisting: _ProgressBar
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _ProgressBar
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    decls: 2,
    vars: 2,
    consts: [[3, "class", "pBind", "width", "display", "background", 4, "ngIf"], [3, "class", "pBind", "background", 4, "ngIf"], [3, "pBind"], [3, "display", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function ProgressBar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ProgressBar_div_0_Template, 4, 19, "div", 0)(1, ProgressBar_div_1_Template, 1, 6, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.mode === "determinate");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.mode === "indeterminate");
      }
    },
    dependencies: [CommonModule, NgIf, NgTemplateOutlet, SharedModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressBar, [{
    type: Component,
    args: [{
      selector: "p-progressBar, p-progressbar, p-progress-bar",
      standalone: true,
      imports: [CommonModule, SharedModule, Bind],
      template: `
        <div *ngIf="mode === 'determinate'" [class]="cn(cx('value'), valueStyleClass)" [pBind]="ptm('value')" [style.width]="value + '%'" [style.display]="'flex'" [style.background]="color" [attr.data-p]="dataP">
            <div [class]="cx('label')" [pBind]="ptm('label')" [attr.data-p]="dataP">
                <div *ngIf="showValue && !contentTemplate && !_contentTemplate" [style.display]="value != null && value !== 0 ? 'flex' : 'none'">{{ value }}{{ unit }}</div>
                <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate; context: { $implicit: value }"></ng-container>
            </div>
        </div>
        <div *ngIf="mode === 'indeterminate'" [class]="cn(cx('value'), valueStyleClass)" [pBind]="ptm('value')" [style.background]="color" [attr.data-p]="dataP"></div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [ProgressBarStyle, {
        provide: PROGRESSBAR_INSTANCE,
        useExisting: ProgressBar
      }, {
        provide: PARENT_INSTANCE,
        useExisting: ProgressBar
      }],
      host: {
        role: "progressbar",
        "[attr.aria-valuemin]": "0",
        "[attr.aria-valuenow]": "value",
        "[attr.aria-valuemax]": "100",
        "[attr.aria-level]": "value + unit",
        "[class]": "cn(cx('root'), styleClass)",
        "[attr.data-p]": "dataP"
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    value: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    showValue: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    styleClass: [{
      type: Input
    }],
    valueStyleClass: [{
      type: Input
    }],
    unit: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    contentTemplate: [{
      type: ContentChild,
      args: ["content", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var ProgressBarModule = class _ProgressBarModule {
  static \u0275fac = function ProgressBarModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProgressBarModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ProgressBarModule,
    imports: [ProgressBar, SharedModule],
    exports: [ProgressBar, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [ProgressBar, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressBarModule, [{
    type: NgModule,
    args: [{
      imports: [ProgressBar, SharedModule],
      exports: [ProgressBar, SharedModule]
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/autocomplete/index.mjs
var style2 = "\n    .p-autocomplete {\n        display: inline-flex;\n    }\n\n    .p-autocomplete-loader {\n        position: absolute;\n        top: 50%;\n        margin-top: -0.5rem;\n        inset-inline-end: dt('autocomplete.padding.x');\n    }\n\n    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-loader {\n        inset-inline-end: calc(dt('autocomplete.dropdown.width') + dt('autocomplete.padding.x'));\n    }\n\n    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input {\n        flex: 1 1 auto;\n        width: 1%;\n    }\n\n    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input,\n    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input-multiple {\n        border-start-end-radius: 0;\n        border-end-end-radius: 0;\n    }\n\n    .p-autocomplete-dropdown {\n        cursor: pointer;\n        display: inline-flex;\n        user-select: none;\n        align-items: center;\n        justify-content: center;\n        overflow: hidden;\n        position: relative;\n        width: dt('autocomplete.dropdown.width');\n        border-start-end-radius: dt('autocomplete.dropdown.border.radius');\n        border-end-end-radius: dt('autocomplete.dropdown.border.radius');\n        background: dt('autocomplete.dropdown.background');\n        border: 1px solid dt('autocomplete.dropdown.border.color');\n        border-inline-start: 0 none;\n        color: dt('autocomplete.dropdown.color');\n        transition:\n            background dt('autocomplete.transition.duration'),\n            color dt('autocomplete.transition.duration'),\n            border-color dt('autocomplete.transition.duration'),\n            outline-color dt('autocomplete.transition.duration'),\n            box-shadow dt('autocomplete.transition.duration');\n        outline-color: transparent;\n    }\n\n    .p-autocomplete-dropdown:not(:disabled):hover {\n        background: dt('autocomplete.dropdown.hover.background');\n        border-color: dt('autocomplete.dropdown.hover.border.color');\n        color: dt('autocomplete.dropdown.hover.color');\n    }\n\n    .p-autocomplete-dropdown:not(:disabled):active {\n        background: dt('autocomplete.dropdown.active.background');\n        border-color: dt('autocomplete.dropdown.active.border.color');\n        color: dt('autocomplete.dropdown.active.color');\n    }\n\n    .p-autocomplete-dropdown:focus-visible {\n        box-shadow: dt('autocomplete.dropdown.focus.ring.shadow');\n        outline: dt('autocomplete.dropdown.focus.ring.width') dt('autocomplete.dropdown.focus.ring.style') dt('autocomplete.dropdown.focus.ring.color');\n        outline-offset: dt('autocomplete.dropdown.focus.ring.offset');\n    }\n\n    .p-autocomplete-overlay {\n        position: absolute;\n        top: 0;\n        left: 0;\n        background: dt('autocomplete.overlay.background');\n        color: dt('autocomplete.overlay.color');\n        border: 1px solid dt('autocomplete.overlay.border.color');\n        border-radius: dt('autocomplete.overlay.border.radius');\n        box-shadow: dt('autocomplete.overlay.shadow');\n        min-width: 100%;\n    }\n\n    .p-autocomplete-list-container {\n        overflow: auto;\n    }\n\n    .p-autocomplete-list {\n        margin: 0;\n        list-style-type: none;\n        display: flex;\n        flex-direction: column;\n        gap: dt('autocomplete.list.gap');\n        padding: dt('autocomplete.list.padding');\n    }\n\n    .p-autocomplete-option {\n        cursor: pointer;\n        white-space: nowrap;\n        position: relative;\n        overflow: hidden;\n        display: flex;\n        align-items: center;\n        padding: dt('autocomplete.option.padding');\n        border: 0 none;\n        color: dt('autocomplete.option.color');\n        background: transparent;\n        transition:\n            background dt('autocomplete.transition.duration'),\n            color dt('autocomplete.transition.duration'),\n            border-color dt('autocomplete.transition.duration');\n        border-radius: dt('autocomplete.option.border.radius');\n    }\n\n    .p-autocomplete-option:not(.p-autocomplete-option-selected):not(.p-disabled).p-focus {\n        background: dt('autocomplete.option.focus.background');\n        color: dt('autocomplete.option.focus.color');\n    }\n\n    .p-autocomplete-option:not(.p-autocomplete-option-selected):not(.p-disabled):hover {\n        background: dt('autocomplete.option.focus.background');\n        color: dt('autocomplete.option.focus.color');\n    }\n\n    .p-autocomplete-option-selected {\n        background: dt('autocomplete.option.selected.background');\n        color: dt('autocomplete.option.selected.color');\n    }\n\n    .p-autocomplete-option-selected.p-focus {\n        background: dt('autocomplete.option.selected.focus.background');\n        color: dt('autocomplete.option.selected.focus.color');\n    }\n\n    .p-autocomplete-option-group {\n        margin: 0;\n        padding: dt('autocomplete.option.group.padding');\n        color: dt('autocomplete.option.group.color');\n        background: dt('autocomplete.option.group.background');\n        font-weight: dt('autocomplete.option.group.font.weight');\n    }\n\n    .p-autocomplete-input-multiple {\n        margin: 0;\n        list-style-type: none;\n        cursor: text;\n        overflow: hidden;\n        display: flex;\n        align-items: center;\n        flex-wrap: wrap;\n        padding: calc(dt('autocomplete.padding.y') / 2) dt('autocomplete.padding.x');\n        gap: calc(dt('autocomplete.padding.y') / 2);\n        color: dt('autocomplete.color');\n        background: dt('autocomplete.background');\n        border: 1px solid dt('autocomplete.border.color');\n        border-radius: dt('autocomplete.border.radius');\n        width: 100%;\n        transition:\n            background dt('autocomplete.transition.duration'),\n            color dt('autocomplete.transition.duration'),\n            border-color dt('autocomplete.transition.duration'),\n            outline-color dt('autocomplete.transition.duration'),\n            box-shadow dt('autocomplete.transition.duration');\n        outline-color: transparent;\n        box-shadow: dt('autocomplete.shadow');\n    }\n\n    .p-autocomplete-input-multiple.p-disabled {\n        opacity: 1;\n        background: dt('autocomplete.disabled.background');\n        color: dt('autocomplete.disabled.color');\n    }\n\n    .p-autocomplete-input-multiple:not(.p-disabled):hover {\n        border-color: dt('autocomplete.hover.border.color');\n    }\n\n    .p-autocomplete.p-focus .p-autocomplete-input-multiple:not(.p-disabled) {\n        border-color: dt('autocomplete.focus.border.color');\n        box-shadow: dt('autocomplete.focus.ring.shadow');\n        outline: dt('autocomplete.focus.ring.width') dt('autocomplete.focus.ring.style') dt('autocomplete.focus.ring.color');\n        outline-offset: dt('autocomplete.focus.ring.offset');\n    }\n\n    .p-autocomplete.p-invalid .p-autocomplete-input-multiple {\n        border-color: dt('autocomplete.invalid.border.color');\n    }\n\n    .p-variant-filled.p-autocomplete-input-multiple {\n        background: dt('autocomplete.filled.background');\n    }\n\n    .p-autocomplete-input-multiple.p-variant-filled:not(.p-disabled):hover {\n        background: dt('autocomplete.filled.hover.background');\n    }\n\n    .p-autocomplete.p-focus .p-autocomplete-input-multiple.p-variant-filled:not(.p-disabled) {\n        background: dt('autocomplete.filled.focus.background');\n    }\n\n    .p-autocomplete-chip.p-chip {\n        padding-block-start: calc(dt('autocomplete.padding.y') / 2);\n        padding-block-end: calc(dt('autocomplete.padding.y') / 2);\n        border-radius: dt('autocomplete.chip.border.radius');\n    }\n\n    .p-autocomplete-input-multiple:has(.p-autocomplete-chip) {\n        padding-inline-start: calc(dt('autocomplete.padding.y') / 2);\n        padding-inline-end: calc(dt('autocomplete.padding.y') / 2);\n    }\n\n    .p-autocomplete-chip-item.p-focus .p-autocomplete-chip {\n        background: dt('autocomplete.chip.focus.background');\n        color: dt('autocomplete.chip.focus.color');\n    }\n\n    .p-autocomplete-input-chip {\n        flex: 1 1 auto;\n        display: inline-flex;\n        padding-block-start: calc(dt('autocomplete.padding.y') / 2);\n        padding-block-end: calc(dt('autocomplete.padding.y') / 2);\n    }\n\n    .p-autocomplete-input-chip input {\n        border: 0 none;\n        outline: 0 none;\n        background: transparent;\n        margin: 0;\n        padding: 0;\n        box-shadow: none;\n        border-radius: 0;\n        width: 100%;\n        font-family: inherit;\n        font-feature-settings: inherit;\n        font-size: 1rem;\n        color: inherit;\n    }\n\n    .p-autocomplete-input-chip input::placeholder {\n        color: dt('autocomplete.placeholder.color');\n    }\n\n    .p-autocomplete.p-invalid .p-autocomplete-input-chip input::placeholder {\n        color: dt('autocomplete.invalid.placeholder.color');\n    }\n\n    .p-autocomplete-empty-message {\n        padding: dt('autocomplete.empty.message.padding');\n    }\n\n    .p-autocomplete-fluid {\n        display: flex;\n    }\n\n    .p-autocomplete-fluid:has(.p-autocomplete-dropdown) .p-autocomplete-input {\n        width: 1%;\n    }\n\n    .p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown {\n        width: dt('autocomplete.dropdown.sm.width');\n    }\n\n    .p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown .p-icon {\n        font-size: dt('form.field.sm.font.size');\n        width: dt('form.field.sm.font.size');\n        height: dt('form.field.sm.font.size');\n    }\n\n    .p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown {\n        width: dt('autocomplete.dropdown.lg.width');\n    }\n\n    .p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown .p-icon {\n        font-size: dt('form.field.lg.font.size');\n        width: dt('form.field.lg.font.size');\n        height: dt('form.field.lg.font.size');\n    }\n\n    .p-autocomplete-clear-icon {\n        position: absolute;\n        top: 50%;\n        margin-top: -0.5rem;\n        cursor: pointer;\n        color: dt('form.field.icon.color');\n        inset-inline-end: dt('autocomplete.padding.x');\n    }\n\n    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-clear-icon {\n        inset-inline-end: calc(dt('autocomplete.padding.x') + dt('autocomplete.dropdown.width'));\n    }\n\n    .p-autocomplete:has(.p-autocomplete-clear-icon) .p-autocomplete-input {\n        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));\n    }\n\n    .p-inputgroup .p-autocomplete-dropdown {\n        border-radius: 0;\n    }\n\n    .p-inputgroup > .p-autocomplete:last-child:has(.p-autocomplete-dropdown) > .p-autocomplete-input {\n        border-start-end-radius: 0;\n        border-end-end-radius: 0;\n    }\n\n    .p-inputgroup > .p-autocomplete:last-child .p-autocomplete-dropdown {\n        border-start-end-radius: dt('autocomplete.dropdown.border.radius');\n        border-end-end-radius: dt('autocomplete.dropdown.border.radius');\n    }\n";

// node_modules/primeng/fesm2022/primeng-autocomplete.mjs
var _c02 = ["item"];
var _c12 = ["empty"];
var _c2 = ["header"];
var _c3 = ["footer"];
var _c4 = ["selecteditem"];
var _c5 = ["group"];
var _c6 = ["loader"];
var _c7 = ["removeicon"];
var _c8 = ["loadingicon"];
var _c9 = ["clearicon"];
var _c10 = ["dropdownicon"];
var _c11 = ["focusInput"];
var _c122 = ["multiIn"];
var _c13 = ["multiContainer"];
var _c14 = ["ddBtn"];
var _c15 = ["items"];
var _c16 = ["scroller"];
var _c17 = ["overlay"];
var _c18 = (a0) => ({
  i: a0
});
var _c19 = (a0) => ({
  $implicit: a0
});
var _c20 = (a0, a1, a2) => ({
  removeCallback: a0,
  index: a1,
  class: a2
});
var _c21 = (a0) => ({
  height: a0
});
var _c22 = (a0, a1) => ({
  $implicit: a0,
  options: a1
});
var _c23 = (a0) => ({
  options: a0
});
var _c24 = () => ({});
var _c25 = (a0, a1, a2) => ({
  option: a0,
  i: a1,
  scrollerOptions: a2
});
var _c26 = (a0, a1) => ({
  $implicit: a0,
  index: a1
});
function AutoComplete_input_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 18, 2);
    \u0275\u0275listener("input", function AutoComplete_input_0_Template_input_input_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInput($event));
    })("keydown", function AutoComplete_input_0_Template_input_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onKeyDown($event));
    })("change", function AutoComplete_input_0_Template_input_change_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInputChange($event));
    })("focus", function AutoComplete_input_0_Template_input_focus_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInputFocus($event));
    })("blur", function AutoComplete_input_0_Template_input_blur_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInputBlur($event));
    })("paste", function AutoComplete_input_0_Template_input_paste_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInputPaste($event));
    })("keyup", function AutoComplete_input_0_Template_input_keyup_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInputKeyUp($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.cn(ctx_r2.cx("pcInputText"), ctx_r2.inputStyleClass));
    \u0275\u0275property("pAutoFocus", ctx_r2.autofocus)("pt", ctx_r2.ptm("pcInputText"))("ngStyle", ctx_r2.inputStyle)("variant", ctx_r2.$variant())("invalid", ctx_r2.invalid())("pSize", ctx_r2.size())("fluid", ctx_r2.hasFluid)("pInputTextUnstyled", ctx_r2.unstyled());
    \u0275\u0275attribute("type", ctx_r2.type)("value", ctx_r2.inputValue())("id", ctx_r2.inputId)("autocomplete", ctx_r2.autocomplete)("placeholder", ctx_r2.placeholder)("name", ctx_r2.name())("minlength", ctx_r2.minlength())("min", ctx_r2.min())("max", ctx_r2.max())("pattern", ctx_r2.pattern())("size", ctx_r2.inputSize())("maxlength", ctx_r2.maxlength())("tabindex", !ctx_r2.$disabled() ? ctx_r2.tabindex : -1)("required", ctx_r2.required() ? "" : void 0)("readonly", ctx_r2.readonly ? "" : void 0)("disabled", ctx_r2.$disabled() ? "" : void 0)("aria-label", ctx_r2.ariaLabel)("aria-labelledby", ctx_r2.ariaLabelledBy)("aria-required", ctx_r2.required())("aria-expanded", ctx_r2.overlayVisible ?? false)("aria-controls", ctx_r2.overlayVisible ? ctx_r2.id + "_list" : null)("aria-activedescendant", ctx_r2.focused ? ctx_r2.focusedOptionId : void 0);
  }
}
function AutoComplete_ng_container_1__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 21);
    \u0275\u0275listener("click", function AutoComplete_ng_container_1__svg_svg_1_Template_svg_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.clear());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r2.cx("clearIcon"));
    \u0275\u0275property("pBind", ctx_r2.ptm("clearIcon"));
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function AutoComplete_ng_container_1_span_2_1_ng_template_0_Template(rf, ctx) {
}
function AutoComplete_ng_container_1_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AutoComplete_ng_container_1_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function AutoComplete_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275listener("click", function AutoComplete_ng_container_1_span_2_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.clear());
    });
    \u0275\u0275template(1, AutoComplete_ng_container_1_span_2_1_Template, 1, 0, null, 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r2.cx("clearIcon"));
    \u0275\u0275property("pBind", ctx_r2.ptm("clearIcon"));
    \u0275\u0275attribute("aria-hidden", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.clearIconTemplate || ctx_r2._clearIconTemplate);
  }
}
function AutoComplete_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AutoComplete_ng_container_1__svg_svg_1_Template, 1, 4, "svg", 19)(2, AutoComplete_ng_container_1_span_2_Template, 2, 5, "span", 20);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.clearIconTemplate && !ctx_r2._clearIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.clearIconTemplate || ctx_r2._clearIconTemplate);
  }
}
function AutoComplete_ul_2_li_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function AutoComplete_ul_2_li_2_ng_template_4_span_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275listener("click", function AutoComplete_ul_2_li_2_ng_template_4_span_0_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const i_r8 = \u0275\u0275nextContext(2).index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(!ctx_r2.readonly && !ctx_r2.$disabled() ? ctx_r2.removeOption($event, i_r8) : "");
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(1, "svg", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r2.cx("chipIcon"));
    \u0275\u0275property("pBind", ctx_r2.ptm("chipIcon"));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.cx("chipIcon"));
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function AutoComplete_ul_2_li_2_ng_template_4_span_1_1_ng_template_0_Template(rf, ctx) {
}
function AutoComplete_ul_2_li_2_ng_template_4_span_1_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AutoComplete_ul_2_li_2_ng_template_4_span_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function AutoComplete_ul_2_li_2_ng_template_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275template(1, AutoComplete_ul_2_li_2_ng_template_4_span_1_1_Template, 1, 0, null, 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r8 = \u0275\u0275nextContext(2).index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("pBind", ctx_r2.ptm("chipIcon"));
    \u0275\u0275attribute("aria-hidden", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.removeIconTemplate || ctx_r2._removeIconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction3(4, _c20, ctx_r2.removeOption.bind(ctx_r2), i_r8, ctx_r2.cx("chipIcon")));
  }
}
function AutoComplete_ul_2_li_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AutoComplete_ul_2_li_2_ng_template_4_span_0_Template, 2, 6, "span", 20)(1, AutoComplete_ul_2_li_2_ng_template_4_span_1_Template, 2, 8, "span", 30);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", !ctx_r2.removeIconTemplate && !ctx_r2._removeIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.removeIconTemplate || ctx_r2._removeIconTemplate);
  }
}
function AutoComplete_ul_2_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 26, 5)(2, "p-chip", 28);
    \u0275\u0275listener("onRemove", function AutoComplete_ul_2_li_2_Template_p_chip_onRemove_2_listener($event) {
      const i_r8 = \u0275\u0275restoreView(_r7).index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(!ctx_r2.readonly ? ctx_r2.removeOption($event, i_r8) : "");
    });
    \u0275\u0275template(3, AutoComplete_ul_2_li_2_ng_container_3_Template, 1, 0, "ng-container", 29)(4, AutoComplete_ul_2_li_2_ng_template_4_Template, 2, 2, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const option_r10 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r2.cx("chipItem", \u0275\u0275pureFunction1(17, _c18, i_r8)));
    \u0275\u0275property("pBind", ctx_r2.ptm("chipItem"));
    \u0275\u0275attribute("id", ctx_r2.id + "_multiple_option_" + i_r8)("aria-label", ctx_r2.getOptionLabel(option_r10))("aria-setsize", ctx_r2.modelValue().length)("aria-posinset", i_r8 + 1)("aria-selected", true);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.cx("pcChip"));
    \u0275\u0275property("pt", ctx_r2.ptm("pcChip"))("label", !ctx_r2.selectedItemTemplate && !ctx_r2._selectedItemTemplate && ctx_r2.getOptionLabel(option_r10))("disabled", ctx_r2.$disabled())("removable", true)("unstyled", ctx_r2.unstyled());
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.selectedItemTemplate || ctx_r2._selectedItemTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(19, _c19, option_r10));
  }
}
function AutoComplete_ul_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ul", 24, 3);
    \u0275\u0275listener("focus", function AutoComplete_ul_2_Template_ul_focus_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onMultipleContainerFocus($event));
    })("blur", function AutoComplete_ul_2_Template_ul_blur_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onMultipleContainerBlur($event));
    })("keydown", function AutoComplete_ul_2_Template_ul_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onMultipleContainerKeyDown($event));
    });
    \u0275\u0275template(2, AutoComplete_ul_2_li_2_Template, 6, 21, "li", 25);
    \u0275\u0275elementStart(3, "li", 26)(4, "input", 27, 4);
    \u0275\u0275listener("input", function AutoComplete_ul_2_Template_input_input_4_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInput($event));
    })("keydown", function AutoComplete_ul_2_Template_input_keydown_4_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onKeyDown($event));
    })("change", function AutoComplete_ul_2_Template_input_change_4_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInputChange($event));
    })("focus", function AutoComplete_ul_2_Template_input_focus_4_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInputFocus($event));
    })("blur", function AutoComplete_ul_2_Template_input_blur_4_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInputBlur($event));
    })("paste", function AutoComplete_ul_2_Template_input_paste_4_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInputPaste($event));
    })("keyup", function AutoComplete_ul_2_Template_input_keyup_4_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInputKeyUp($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.cx("inputMultiple"));
    \u0275\u0275property("pBind", ctx_r2.ptm("inputMultiple"))("tabindex", -1);
    \u0275\u0275attribute("data-p", ctx_r2.inputMultipleDataP)("aria-orientation", "horizontal")("aria-activedescendant", ctx_r2.focused ? ctx_r2.focusedMultipleOptionId : void 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.modelValue());
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.cx("inputChip"));
    \u0275\u0275property("pBind", ctx_r2.ptm("inputChip"));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.cx("pcInputText"));
    \u0275\u0275property("pAutoFocus", ctx_r2.autofocus)("pBind", ctx_r2.ptm("input"))("ngStyle", ctx_r2.inputStyle);
    \u0275\u0275attribute("type", ctx_r2.type)("id", ctx_r2.inputId)("autocomplete", ctx_r2.autocomplete)("name", ctx_r2.name())("minlength", ctx_r2.minlength())("maxlength", ctx_r2.maxlength())("size", ctx_r2.size())("min", ctx_r2.min())("max", ctx_r2.max())("pattern", ctx_r2.pattern())("placeholder", !ctx_r2.$filled() ? ctx_r2.placeholder : null)("tabindex", !ctx_r2.$disabled() ? ctx_r2.tabindex : -1)("required", ctx_r2.required() ? "" : void 0)("readonly", ctx_r2.readonly ? "" : void 0)("disabled", ctx_r2.$disabled() ? "" : void 0)("aria-label", ctx_r2.ariaLabel)("aria-labelledby", ctx_r2.ariaLabelledBy)("aria-required", ctx_r2.required())("aria-expanded", ctx_r2.overlayVisible ?? false)("aria-controls", ctx_r2.overlayVisible ? ctx_r2.id + "_list" : null)("aria-activedescendant", ctx_r2.focused ? ctx_r2.focusedOptionId : void 0);
  }
}
function AutoComplete_ng_container_3__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 35);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r2.cx("loader"));
    \u0275\u0275property("pBind", ctx_r2.ptm("loader"))("spin", true);
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function AutoComplete_ng_container_3_span_2_1_ng_template_0_Template(rf, ctx) {
}
function AutoComplete_ng_container_3_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AutoComplete_ng_container_3_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function AutoComplete_ng_container_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275template(1, AutoComplete_ng_container_3_span_2_1_Template, 1, 0, null, 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r2.cx("loader"));
    \u0275\u0275property("pBind", ctx_r2.ptm("loader"));
    \u0275\u0275attribute("aria-hidden", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.loadingIconTemplate || ctx_r2._loadingIconTemplate);
  }
}
function AutoComplete_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AutoComplete_ng_container_3__svg_svg_1_Template, 1, 5, "svg", 33)(2, AutoComplete_ng_container_3_span_2_Template, 2, 5, "span", 34);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.loadingIconTemplate && !ctx_r2._loadingIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.loadingIconTemplate || ctx_r2._loadingIconTemplate);
  }
}
function AutoComplete_button_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 38);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r2.dropdownIcon);
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function AutoComplete_button_4_ng_container_3__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 40);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("pBind", ctx_r2.ptm("dropdown"));
  }
}
function AutoComplete_button_4_ng_container_3_2_ng_template_0_Template(rf, ctx) {
}
function AutoComplete_button_4_ng_container_3_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AutoComplete_button_4_ng_container_3_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function AutoComplete_button_4_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AutoComplete_button_4_ng_container_3__svg_svg_1_Template, 1, 1, "svg", 39)(2, AutoComplete_button_4_ng_container_3_2_Template, 1, 0, null, 23);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.dropdownIconTemplate && !ctx_r2._dropdownIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.dropdownIconTemplate || ctx_r2._dropdownIconTemplate);
  }
}
function AutoComplete_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36, 7);
    \u0275\u0275listener("click", function AutoComplete_button_4_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleDropdownClick($event));
    });
    \u0275\u0275template(2, AutoComplete_button_4_span_2_Template, 1, 2, "span", 37)(3, AutoComplete_button_4_ng_container_3_Template, 3, 2, "ng-container", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.cx("dropdown"));
    \u0275\u0275property("pBind", ctx_r2.ptm("dropdown"))("disabled", ctx_r2.$disabled());
    \u0275\u0275attribute("aria-label", ctx_r2.dropdownAriaLabel)("tabindex", ctx_r2.tabindex);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.dropdownIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.dropdownIcon);
  }
}
function AutoComplete_ng_template_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function AutoComplete_ng_template_7_p_scroller_3_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function AutoComplete_ng_template_7_p_scroller_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AutoComplete_ng_template_7_p_scroller_3_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 29);
  }
  if (rf & 2) {
    const items_r13 = ctx.$implicit;
    const scrollerOptions_r14 = ctx.options;
    \u0275\u0275nextContext(2);
    const buildInItems_r15 = \u0275\u0275reference(6);
    \u0275\u0275property("ngTemplateOutlet", buildInItems_r15)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c22, items_r13, scrollerOptions_r14));
  }
}
function AutoComplete_ng_template_7_p_scroller_3_ng_container_4_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function AutoComplete_ng_template_7_p_scroller_3_ng_container_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AutoComplete_ng_template_7_p_scroller_3_ng_container_4_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 29);
  }
  if (rf & 2) {
    const scrollerOptions_r16 = ctx.options;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.loaderTemplate || ctx_r2._loaderTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c23, scrollerOptions_r16));
  }
}
function AutoComplete_ng_template_7_p_scroller_3_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AutoComplete_ng_template_7_p_scroller_3_ng_container_4_ng_template_1_Template, 1, 4, "ng-template", null, 10, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
}
function AutoComplete_ng_template_7_p_scroller_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-scroller", 45, 9);
    \u0275\u0275listener("onLazyLoad", function AutoComplete_ng_template_7_p_scroller_3_Template_p_scroller_onLazyLoad_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onLazyLoad.emit($event));
    });
    \u0275\u0275template(2, AutoComplete_ng_template_7_p_scroller_3_ng_template_2_Template, 1, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(4, AutoComplete_ng_template_7_p_scroller_3_ng_container_4_Template, 3, 0, "ng-container", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleMap(\u0275\u0275pureFunction1(10, _c21, ctx_r2.scrollHeight));
    \u0275\u0275property("tabindex", -1)("pt", ctx_r2.ptm("virtualScroller"))("items", ctx_r2.visibleOptions())("itemSize", ctx_r2.virtualScrollItemSize)("autoSize", true)("lazy", ctx_r2.lazy)("options", ctx_r2.virtualScrollOptions);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.loaderTemplate || ctx_r2._loaderTemplate);
  }
}
function AutoComplete_ng_template_7_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function AutoComplete_ng_template_7_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AutoComplete_ng_template_7_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 29);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const buildInItems_r15 = \u0275\u0275reference(6);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", buildInItems_r15)("ngTemplateOutletContext", \u0275\u0275pureFunction2(3, _c22, ctx_r2.visibleOptions(), \u0275\u0275pureFunction0(2, _c24)));
  }
}
function AutoComplete_ng_template_7_ng_template_5_ng_template_2_ng_container_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r17 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getOptionGroupLabel(option_r17.optionGroup));
  }
}
function AutoComplete_ng_template_7_ng_template_5_ng_template_2_ng_container_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function AutoComplete_ng_template_7_ng_template_5_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "li", 49);
    \u0275\u0275template(2, AutoComplete_ng_template_7_ng_template_5_ng_template_2_ng_container_0_span_2_Template, 2, 1, "span", 14)(3, AutoComplete_ng_template_7_ng_template_5_ng_template_2_ng_container_0_ng_container_3_Template, 1, 0, "ng-container", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r17 = \u0275\u0275nextContext();
    const option_r17 = ctx_r17.$implicit;
    const i_r19 = ctx_r17.index;
    const scrollerOptions_r20 = \u0275\u0275nextContext().options;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.cx("optionGroup"));
    \u0275\u0275property("pBind", ctx_r2.ptm("optionGroup"))("ngStyle", \u0275\u0275pureFunction1(8, _c21, scrollerOptions_r20.itemSize + "px"));
    \u0275\u0275attribute("id", ctx_r2.id + "_" + ctx_r2.getOptionIndex(i_r19, scrollerOptions_r20));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.groupTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.groupTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(10, _c19, option_r17.optionGroup));
  }
}
function AutoComplete_ng_template_7_ng_template_5_ng_template_2_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r17 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getOptionLabel(option_r17));
  }
}
function AutoComplete_ng_template_7_ng_template_5_ng_template_2_ng_container_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function AutoComplete_ng_template_7_ng_template_5_ng_template_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "li", 50);
    \u0275\u0275listener("click", function AutoComplete_ng_template_7_ng_template_5_ng_template_2_ng_container_1_Template_li_click_1_listener($event) {
      \u0275\u0275restoreView(_r21);
      const option_r17 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onOptionSelect($event, option_r17));
    })("mouseenter", function AutoComplete_ng_template_7_ng_template_5_ng_template_2_ng_container_1_Template_li_mouseenter_1_listener($event) {
      \u0275\u0275restoreView(_r21);
      const i_r19 = \u0275\u0275nextContext().index;
      const scrollerOptions_r20 = \u0275\u0275nextContext().options;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onOptionMouseEnter($event, ctx_r2.getOptionIndex(i_r19, scrollerOptions_r20)));
    });
    \u0275\u0275template(2, AutoComplete_ng_template_7_ng_template_5_ng_template_2_ng_container_1_span_2_Template, 2, 1, "span", 14)(3, AutoComplete_ng_template_7_ng_template_5_ng_template_2_ng_container_1_ng_container_3_Template, 1, 0, "ng-container", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r17 = \u0275\u0275nextContext();
    const option_r17 = ctx_r17.$implicit;
    const i_r19 = ctx_r17.index;
    const scrollerOptions_r20 = \u0275\u0275nextContext().options;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.cx("option", \u0275\u0275pureFunction3(15, _c25, option_r17, i_r19, scrollerOptions_r20)));
    \u0275\u0275property("pBind", ctx_r2.getPTOptions(option_r17, scrollerOptions_r20, i_r19, "option"))("ngStyle", \u0275\u0275pureFunction1(19, _c21, scrollerOptions_r20.itemSize + "px"));
    \u0275\u0275attribute("id", ctx_r2.id + "_" + ctx_r2.getOptionIndex(i_r19, scrollerOptions_r20))("aria-label", ctx_r2.getOptionLabel(option_r17))("aria-selected", ctx_r2.isSelected(option_r17))("data-p-selected", ctx_r2.isSelected(option_r17))("aria-disabled", ctx_r2.isOptionDisabled(option_r17))("data-p-focused", ctx_r2.focusedOptionIndex() === ctx_r2.getOptionIndex(i_r19, scrollerOptions_r20))("aria-setsize", ctx_r2.ariaSetSize)("aria-posinset", ctx_r2.getAriaPosInset(ctx_r2.getOptionIndex(i_r19, scrollerOptions_r20)));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.itemTemplate && !ctx_r2._itemTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.itemTemplate || ctx_r2._itemTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(21, _c26, option_r17, scrollerOptions_r20.getOptions ? scrollerOptions_r20.getOptions(i_r19) : i_r19));
  }
}
function AutoComplete_ng_template_7_ng_template_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AutoComplete_ng_template_7_ng_template_5_ng_template_2_ng_container_0_Template, 4, 12, "ng-container", 14)(1, AutoComplete_ng_template_7_ng_template_5_ng_template_2_ng_container_1_Template, 4, 24, "ng-container", 14);
  }
  if (rf & 2) {
    const option_r17 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", ctx_r2.isOptionGroup(option_r17));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isOptionGroup(option_r17));
  }
}
function AutoComplete_ng_template_7_ng_template_5_li_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.searchResultMessageText, " ");
  }
}
function AutoComplete_ng_template_7_ng_template_5_li_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, null, 12);
  }
}
function AutoComplete_ng_template_7_ng_template_5_li_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 49);
    \u0275\u0275template(1, AutoComplete_ng_template_7_ng_template_5_li_3_ng_container_1_Template, 2, 1, "ng-container", 51)(2, AutoComplete_ng_template_7_ng_template_5_li_3_ng_container_2_Template, 2, 0, "ng-container", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const scrollerOptions_r20 = \u0275\u0275nextContext().options;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r2.cx("emptyMessage"));
    \u0275\u0275property("pBind", ctx_r2.ptm("emptyMessage"))("ngStyle", \u0275\u0275pureFunction1(7, _c21, scrollerOptions_r20.itemSize + "px"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.emptyTemplate && !ctx_r2._emptyTemplate)("ngIfElse", ctx_r2.empty);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.emptyTemplate || ctx_r2._emptyTemplate);
  }
}
function AutoComplete_ng_template_7_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 46, 11);
    \u0275\u0275template(2, AutoComplete_ng_template_7_ng_template_5_ng_template_2_Template, 2, 2, "ng-template", 47)(3, AutoComplete_ng_template_7_ng_template_5_li_3_Template, 3, 9, "li", 48);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const items_r22 = ctx.$implicit;
    const scrollerOptions_r20 = ctx.options;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleMap(scrollerOptions_r20.contentStyle);
    \u0275\u0275classMap(ctx_r2.cn(ctx_r2.cx("list"), scrollerOptions_r20.contentStyleClass));
    \u0275\u0275property("pBind", ctx_r2.ptm("list"));
    \u0275\u0275attribute("id", ctx_r2.id + "_list")("aria-label", ctx_r2.listLabel);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", items_r22);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !items_r22 || items_r22 && items_r22.length === 0 && ctx_r2.showEmptyMessage);
  }
}
function AutoComplete_ng_template_7_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function AutoComplete_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275template(1, AutoComplete_ng_template_7_ng_container_1_Template, 1, 0, "ng-container", 23);
    \u0275\u0275elementStart(2, "div", 42);
    \u0275\u0275template(3, AutoComplete_ng_template_7_p_scroller_3_Template, 5, 12, "p-scroller", 43)(4, AutoComplete_ng_template_7_ng_container_4_Template, 2, 6, "ng-container", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, AutoComplete_ng_template_7_ng_template_5_Template, 4, 9, "ng-template", null, 8, \u0275\u0275templateRefExtractor)(7, AutoComplete_ng_template_7_ng_container_7_Template, 1, 0, "ng-container", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 44);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.cn(ctx_r2.cx("overlay"), ctx_r2.panelStyleClass));
    \u0275\u0275property("pBind", ctx_r2.ptm("overlay"))("ngStyle", ctx_r2.panelStyle);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.headerTemplate || ctx_r2._headerTemplate);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.cx("listContainer"));
    \u0275\u0275styleProp("max-height", ctx_r2.virtualScroll ? "auto" : ctx_r2.scrollHeight);
    \u0275\u0275property("pBind", ctx_r2.ptm("listContainer"))("tabindex", -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.virtualScroll);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.virtualScroll);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.footerTemplate || ctx_r2._footerTemplate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.selectedMessageText, " ");
  }
}
var style3 = (
  /*css*/
  `
${style2}

/* For PrimeNG */
p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input,
p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input-multiple,
p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input,
p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input-multiple p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input,
p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input-multiple {
    border-color: dt('autocomplete.invalid.border.color');
}

p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input:enabled:focus,
p-autoComplete.ng-invalid.ng-dirty:not(.p-disabled).p-focus .p-autocomplete-input-multiple,
p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input:enabled:focus,
p-auto-complete.ng-invalid.ng-dirty:not(.p-disabled).p-focus .p-autocomplete-input-multiple,
p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input:enabled:focus,
p-autocomplete.ng-invalid.ng-dirty:not(.p-disabled).p-focus .p-autocomplete-input-multiple {
    border-color: dt('autocomplete.focus.border.color');
}

p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input-chip input::placeholder,
p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input-chip input::placeholder,
p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input-chip input::placeholder {
    color: dt('autocomplete.invalid.placeholder.color');
}

p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input::placeholder,
p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input::placeholder,
p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input::placeholder {
    color: dt('autocomplete.invalid.placeholder.color');
}
`
);
var inlineStyles = {
  root: {
    position: "relative"
  }
};
var classes2 = {
  root: ({
    instance
  }) => ["p-autocomplete p-component p-inputwrapper", {
    "p-invalid": instance.invalid(),
    "p-focus": instance.focused,
    "p-inputwrapper-filled": instance.$filled(),
    "p-inputwrapper-focus": instance.focused && !instance.$disabled() || instance.autofocus || instance.overlayVisible,
    "p-autocomplete-open": instance.overlayVisible,
    "p-autocomplete-clearable": instance.showClear && !instance.$disabled(),
    "p-autocomplete-fluid": instance.hasFluid
  }],
  pcInputText: "p-autocomplete-input",
  inputMultiple: ({
    instance
  }) => ["p-autocomplete-input-multiple", {
    "p-disabled": instance.$disabled(),
    "p-variant-filled": instance.$variant() === "filled"
  }],
  chipItem: ({
    instance,
    i
  }) => ["p-autocomplete-chip-item", {
    "p-focus": instance.focusedMultipleOptionIndex() === i
  }],
  pcChip: "p-autocomplete-chip",
  chipIcon: "p-autocomplete-chip-icon",
  inputChip: "p-autocomplete-input-chip",
  loader: "p-autocomplete-loader",
  dropdown: "p-autocomplete-dropdown",
  overlay: ({
    instance
  }) => ["p-autocomplete-overlay p-component-overlay p-component", {
    "p-input-filled": instance.$variant() === "filled",
    "p-ripple-disabled": instance.config.ripple() === false
  }],
  listContainer: "p-autocomplete-list-container",
  list: "p-autocomplete-list",
  optionGroup: "p-autocomplete-option-group",
  option: ({
    instance,
    option,
    i,
    scrollerOptions
  }) => ({
    "p-autocomplete-option": true,
    "p-autocomplete-option-selected": instance.isSelected(option),
    "p-focus": instance.focusedOptionIndex() === instance.getOptionIndex(i, scrollerOptions),
    "p-disabled": instance.isOptionDisabled(option)
  }),
  emptyMessage: "p-autocomplete-empty-message",
  clearIcon: "p-autocomplete-clear-icon"
};
var AutoCompleteStyle = class _AutoCompleteStyle extends BaseStyle {
  name = "autocomplete";
  style = style3;
  classes = classes2;
  inlineStyles = inlineStyles;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AutoCompleteStyle_BaseFactory;
    return function AutoCompleteStyle_Factory(__ngFactoryType__) {
      return (\u0275AutoCompleteStyle_BaseFactory || (\u0275AutoCompleteStyle_BaseFactory = \u0275\u0275getInheritedFactory(_AutoCompleteStyle)))(__ngFactoryType__ || _AutoCompleteStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AutoCompleteStyle,
    factory: _AutoCompleteStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoCompleteStyle, [{
    type: Injectable
  }], null, null);
})();
var AutoCompleteClasses;
(function(AutoCompleteClasses2) {
  AutoCompleteClasses2["root"] = "p-autocomplete";
  AutoCompleteClasses2["pcInputText"] = "p-autocomplete-input";
  AutoCompleteClasses2["inputMultiple"] = "p-autocomplete-input-multiple";
  AutoCompleteClasses2["chipItem"] = "p-autocomplete-chip-item";
  AutoCompleteClasses2["pcChip"] = "p-autocomplete-chip";
  AutoCompleteClasses2["chipIcon"] = "p-autocomplete-chip-icon";
  AutoCompleteClasses2["inputChip"] = "p-autocomplete-input-chip";
  AutoCompleteClasses2["loader"] = "p-autocomplete-loader";
  AutoCompleteClasses2["dropdown"] = "p-autocomplete-dropdown";
  AutoCompleteClasses2["panel"] = "p-autocomplete-overlay";
  AutoCompleteClasses2["list"] = "p-autocomplete-list";
  AutoCompleteClasses2["optionGroup"] = "p-autocomplete-option-group";
  AutoCompleteClasses2["option"] = "p-autocomplete-option";
  AutoCompleteClasses2["emptyMessage"] = "p-autocomplete-empty-message";
  AutoCompleteClasses2["clearIcon"] = "p-autocomplete-clear-icon";
})(AutoCompleteClasses || (AutoCompleteClasses = {}));
var AUTOCOMPLETE_INSTANCE = new InjectionToken("AUTOCOMPLETE_INSTANCE");
var AUTOCOMPLETE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => AutoComplete),
  multi: true
};
var AutoComplete = class _AutoComplete extends BaseInput {
  overlayService;
  zone;
  componentName = "AutoComplete";
  $pcAutoComplete = inject(AUTOCOMPLETE_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  /**
   * Minimum number of characters to initiate a search.
   * @deprecated since v20.0.0, use `minQueryLength` instead.
   * @group Props
   */
  minLength = 1;
  /**
   * Minimum number of characters to initiate a search.
   * @group Props
   */
  minQueryLength;
  /**
   * Delay between keystrokes to wait before sending a query.
   * @group Props
   */
  delay = 300;
  /**
   * Inline style of the overlay panel element.
   * @group Props
   */
  panelStyle;
  /**
   * Style class of the component.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Style class of the overlay panel element.
   * @group Props
   */
  panelStyleClass;
  /**
   * Inline style of the input field.
   * @group Props
   */
  inputStyle;
  /**
   * Identifier of the focus input to match a label defined for the component.
   * @group Props
   */
  inputId;
  /**
   * Inline style of the input field.
   * @group Props
   */
  inputStyleClass;
  /**
   * Hint text for the input field.
   * @group Props
   */
  placeholder;
  /**
   * When present, it specifies that the input cannot be typed.
   * @group Props
   */
  readonly;
  /**
   * Maximum height of the suggestions panel.
   * @group Props
   */
  scrollHeight = "200px";
  /**
   * Defines if data is loaded and interacted with in lazy manner.
   * @group Props
   */
  lazy = false;
  /**
   * Whether the data should be loaded on demand during scroll.
   * @group Props
   */
  virtualScroll;
  /**
   * Height of an item in the list for VirtualScrolling.
   * @group Props
   */
  virtualScrollItemSize;
  /**
   * Whether to use the scroller feature. The properties of scroller component can be used like an object in it.
   * @group Props
   */
  virtualScrollOptions;
  /**
   * When enabled, highlights the first item in the list by default.
   * @group Props
   */
  autoHighlight;
  /**
   * When present, autocomplete clears the manual input if it does not match of the suggestions to force only accepting values from the suggestions.
   * @group Props
   */
  forceSelection;
  /**
   * Type of the input, defaults to "text".
   * @group Props
   */
  type = "text";
  /**
   * Whether to automatically manage layering.
   * @group Props
   */
  autoZIndex = true;
  /**
   * Base zIndex value to use in layering.
   * @group Props
   */
  baseZIndex = 0;
  /**
   * Defines a string that labels the input for accessibility.
   * @group Props
   */
  ariaLabel;
  /**
   * Defines a string that labels the dropdown button for accessibility.
   * @group Props
   */
  dropdownAriaLabel;
  /**
   * Specifies one or more IDs in the DOM that labels the input field.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Icon class of the dropdown icon.
   * @group Props
   */
  dropdownIcon;
  /**
   * Ensures uniqueness of selected items on multiple mode.
   * @group Props
   */
  unique = true;
  /**
   * Whether to display options as grouped when nested options are provided.
   * @group Props
   */
  group;
  /**
   * Whether to run a query when input receives focus.
   * @group Props
   */
  completeOnFocus = false;
  /**
   * When enabled, a clear icon is displayed to clear the value.
   * @group Props
   */
  showClear = false;
  /**
   * Displays a button next to the input field when enabled.
   * @group Props
   */
  dropdown;
  /**
   * Whether to show the empty message or not.
   * @group Props
   */
  showEmptyMessage = true;
  /**
   * Specifies the behavior dropdown button. Default "blank" mode sends an empty string and "current" mode sends the input value.
   * @group Props
   */
  dropdownMode = "blank";
  /**
   * Specifies if multiple values can be selected.
   * @group Props
   */
  multiple;
  /**
   * When enabled, the input value is added to the selected items on tab key press when multiple is true and typeahead is false.
   * @group Props
   */
  addOnTab = false;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex;
  /**
   * A property to uniquely identify a value in options.
   * @group Props
   */
  dataKey;
  /**
   * Text to display when there is no data. Defaults to global value in i18n translation configuration.
   * @group Props
   */
  emptyMessage;
  /**
   * Transition options of the show animation.
   * @group Props
   * @deprecated since v21.0.0, use `motionOptions` instead.
   */
  showTransitionOptions = ".12s cubic-bezier(0, 0, 0.2, 1)";
  /**
   * Transition options of the hide animation.
   * @group Props
   * @deprecated since v21.0.0, use `motionOptions` instead.
   */
  hideTransitionOptions = ".1s linear";
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Used to define a string that autocomplete attribute the current element.
   * @group Props
   */
  autocomplete = "off";
  /**
   * Name of the options field of an option group.
   * @group Props
   */
  optionGroupChildren = "items";
  /**
   * Name of the label field of an option group.
   * @group Props
   */
  optionGroupLabel = "label";
  /**
   * Options for the overlay element.
   * @group Props
   */
  overlayOptions;
  /**
   * An array of suggestions to display.
   * @group Props
   */
  get suggestions() {
    return this._suggestions();
  }
  set suggestions(value) {
    this._suggestions.set(value);
    this.handleSuggestionsChange();
  }
  /**
   * Property name or getter function to use as the label of an option.
   * @group Props
   */
  optionLabel;
  /**
   * Property name or getter function to use as the value of an option.
   * @group Props
   */
  optionValue;
  /**
   * Unique identifier of the component.
   * @group Props
   */
  id;
  /**
   * Text to display when the search is active. Defaults to global value in i18n translation configuration.
   * @group Props
   * @defaultValue '{0} results are available'
   */
  searchMessage;
  /**
   * Text to display when filtering does not return any results. Defaults to global value in i18n translation configuration.
   * @group Props
   * @defaultValue 'No selected item'
   */
  emptySelectionMessage;
  /**
   * Text to be displayed in hidden accessible field when options are selected. Defaults to global value in i18n translation configuration.
   * @group Props
   * @defaultValue '{0} items selected'
   */
  selectionMessage;
  /**
   * Whether to focus on the first visible or selected element when the overlay panel is shown.
   * @group Props
   */
  autoOptionFocus = false;
  /**
   * When enabled, the focused option is selected.
   * @group Props
   */
  selectOnFocus;
  /**
   * Locale to use in searching. The default locale is the host environment's current locale.
   * @group Props
   */
  searchLocale;
  /**
   * Property name or getter function to use as the disabled flag of an option, defaults to false when not defined.
   * @group Props
   */
  optionDisabled;
  /**
   * When enabled, the hovered option will be focused.
   * @group Props
   */
  focusOnHover = true;
  /**
   * Whether typeahead is active or not.
   * @defaultValue true
   * @group Props
   */
  typeahead = true;
  /**
   * Whether to add an item on blur event if the input has value and typeahead is false with multiple mode.
   * @defaultValue false
   * @group Props
   */
  addOnBlur = false;
  /**
   * Separator char to add item when typeahead is false and multiple mode is enabled.
   * @group Props
   */
  separator;
  /**
   * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @defaultValue 'self'
   * @group Props
   */
  appendTo = input(void 0, ...ngDevMode ? [{
    debugName: "appendTo"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * The motion options.
   * @group Props
   */
  motionOptions = input(void 0, ...ngDevMode ? [{
    debugName: "motionOptions"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Callback to invoke to search for suggestions.
   * @param {AutoCompleteCompleteEvent} event - Custom complete event.
   * @group Emits
   */
  completeMethod = new EventEmitter();
  /**
   * Callback to invoke when a suggestion is selected.
   * @param {AutoCompleteSelectEvent} event - custom select event.
   * @group Emits
   */
  onSelect = new EventEmitter();
  /**
   * Callback to invoke when a selected value is removed.
   * @param {AutoCompleteUnselectEvent} event - custom unselect event.
   * @group Emits
   */
  onUnselect = new EventEmitter();
  /**
   * Callback to invoke when an item is added via addOnBlur or separator features.
   * @param {AutoCompleteAddEvent} event - Custom add event.
   * @group Emits
   */
  onAdd = new EventEmitter();
  /**
   * Callback to invoke when the component receives focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to invoke when the component loses focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  /**
   * Callback to invoke to when dropdown button is clicked.
   * @param {AutoCompleteDropdownClickEvent} event - custom dropdown click event.
   * @group Emits
   */
  onDropdownClick = new EventEmitter();
  /**
   * Callback to invoke when clear button is clicked.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onClear = new EventEmitter();
  /**
   * Callback to invoke on input key down.
   * @param {KeyboardEvent} event - Keyboard event.
   * @group Emits
   */
  onInputKeydown = new EventEmitter();
  /**
   * Callback to invoke on input key up.
   * @param {KeyboardEvent} event - Keyboard event.
   * @group Emits
   */
  onKeyUp = new EventEmitter();
  /**
   * Callback to invoke on overlay is shown.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onShow = new EventEmitter();
  /**
   * Callback to invoke on overlay is hidden.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onHide = new EventEmitter();
  /**
   * Callback to invoke on lazy load data.
   * @param {AutoCompleteLazyLoadEvent} event - Lazy load event.
   * @group Emits
   */
  onLazyLoad = new EventEmitter();
  inputEL;
  multiInputEl;
  multiContainerEL;
  dropdownButton;
  itemsViewChild;
  scroller;
  overlayViewChild;
  itemsWrapper;
  /**
   * Custom item template.
   * @group Templates
   */
  itemTemplate;
  /**
   * Custom empty message template.
   * @group Templates
   */
  emptyTemplate;
  /**
   * Custom header template.
   * @group Templates
   */
  headerTemplate;
  /**
   * Custom footer template.
   * @group Templates
   */
  footerTemplate;
  /**
   * Custom selected item template.
   * @group Templates
   */
  selectedItemTemplate;
  /**
   * Custom group template.
   * @group Templates
   */
  groupTemplate;
  /**
   * Custom loader template.
   * @group Templates
   */
  loaderTemplate;
  /**
   * Custom remove icon template.
   * @group Templates
   */
  removeIconTemplate;
  /**
   * Custom loading icon template.
   * @group Templates
   */
  loadingIconTemplate;
  /**
   * Custom clear icon template.
   * @group Templates
   */
  clearIconTemplate;
  /**
   * Custom dropdown icon template.
   * @group Templates
   */
  dropdownIconTemplate;
  onHostClick(event) {
    this.onContainerClick(event);
  }
  value;
  _suggestions = signal(null, ...ngDevMode ? [{
    debugName: "_suggestions"
  }] : (
    /* istanbul ignore next */
    []
  ));
  timeout;
  overlayVisible;
  suggestionsUpdated;
  highlightOption;
  highlightOptionChanged;
  focused = false;
  loading;
  scrollHandler;
  listId;
  searchTimeout;
  dirty = false;
  _itemTemplate;
  _groupTemplate;
  _selectedItemTemplate;
  _headerTemplate;
  _emptyTemplate;
  _footerTemplate;
  _loaderTemplate;
  _removeIconTemplate;
  _loadingIconTemplate;
  _clearIconTemplate;
  _dropdownIconTemplate;
  focusedMultipleOptionIndex = signal(-1, ...ngDevMode ? [{
    debugName: "focusedMultipleOptionIndex"
  }] : (
    /* istanbul ignore next */
    []
  ));
  focusedOptionIndex = signal(-1, ...ngDevMode ? [{
    debugName: "focusedOptionIndex"
  }] : (
    /* istanbul ignore next */
    []
  ));
  _componentStyle = inject(AutoCompleteStyle);
  $appendTo = computed(() => this.appendTo() || this.config.overlayAppendTo(), ...ngDevMode ? [{
    debugName: "$appendTo"
  }] : (
    /* istanbul ignore next */
    []
  ));
  visibleOptions = computed(() => {
    return this.group ? this.flatOptions(this._suggestions()) : this._suggestions() || [];
  }, ...ngDevMode ? [{
    debugName: "visibleOptions"
  }] : (
    /* istanbul ignore next */
    []
  ));
  inputValue = computed(() => {
    const modelValue = this.modelValue();
    const selectedOption = this.optionValueSelected ? (this.suggestions || []).find((option) => k(option, modelValue, this.equalityKey())) : modelValue;
    if (s(modelValue)) {
      if (typeof modelValue === "object" || this.optionValueSelected) {
        const label = this.getOptionLabel(selectedOption);
        return label != null ? label : modelValue;
      } else {
        return modelValue;
      }
    } else {
      return "";
    }
  }, ...ngDevMode ? [{
    debugName: "inputValue"
  }] : (
    /* istanbul ignore next */
    []
  ));
  get focusedMultipleOptionId() {
    return this.focusedMultipleOptionIndex() !== -1 ? `${this.id}_multiple_option_${this.focusedMultipleOptionIndex()}` : null;
  }
  get focusedOptionId() {
    return this.focusedOptionIndex() !== -1 ? `${this.id}_${this.focusedOptionIndex()}` : null;
  }
  get searchResultMessageText() {
    return s(this.visibleOptions()) && this.overlayVisible ? this.searchMessageText.replaceAll("{0}", this.visibleOptions().length) : this.emptySearchMessageText;
  }
  get searchMessageText() {
    return this.searchMessage || this.config.translation.searchMessage || "";
  }
  get emptySearchMessageText() {
    return this.emptyMessage || this.config.translation.emptySearchMessage || "";
  }
  get selectionMessageText() {
    return this.selectionMessage || this.config.translation.selectionMessage || "";
  }
  get emptySelectionMessageText() {
    return this.emptySelectionMessage || this.config.translation.emptySelectionMessage || "";
  }
  get selectedMessageText() {
    return this.hasSelectedOption() ? this.selectionMessageText.replaceAll("{0}", this.multiple ? this.modelValue()?.length : "1") : this.emptySelectionMessageText;
  }
  get ariaSetSize() {
    return this.visibleOptions().filter((option) => !this.isOptionGroup(option)).length;
  }
  get listLabel() {
    return this.config.getTranslation(TranslationKeys.ARIA)["listLabel"];
  }
  get virtualScrollerDisabled() {
    return !this.virtualScroll;
  }
  get optionValueSelected() {
    return typeof this.modelValue() === "string" && this.optionValue;
  }
  chipItemClass(index) {
    return this._componentStyle.classes.chipItem({
      instance: this,
      i: index
    });
  }
  constructor(overlayService, zone) {
    super();
    this.overlayService = overlayService;
    this.zone = zone;
  }
  onInit() {
    this.id = this.id || s2("pn_id_");
    this.cd.detectChanges();
  }
  templates;
  onAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "item":
          this._itemTemplate = item.template;
          break;
        case "group":
          this._groupTemplate = item.template;
          break;
        case "selecteditem":
          this._selectedItemTemplate = item.template;
          break;
        case "selectedItem":
          this._selectedItemTemplate = item.template;
          break;
        case "header":
          this._headerTemplate = item.template;
          break;
        case "empty":
          this._emptyTemplate = item.template;
          break;
        case "footer":
          this._footerTemplate = item.template;
          break;
        case "loader":
          this._loaderTemplate = item.template;
          break;
        case "removetokenicon":
          this._removeIconTemplate = item.template;
          break;
        case "loadingicon":
          this._loadingIconTemplate = item.template;
          break;
        case "clearicon":
          this._clearIconTemplate = item.template;
          break;
        case "dropdownicon":
          this._dropdownIconTemplate = item.template;
          break;
        default:
          this._itemTemplate = item.template;
          break;
      }
    });
  }
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
    if (this.suggestionsUpdated && this.overlayViewChild) {
      this.zone.runOutsideAngular(() => {
        setTimeout(() => {
          if (this.overlayViewChild) {
            this.overlayViewChild.alignOverlay();
          }
        }, 1);
        this.suggestionsUpdated = false;
      });
    }
  }
  handleSuggestionsChange() {
    if (this.loading) {
      this._suggestions()?.length > 0 || this.showEmptyMessage || !!this.emptyTemplate ? this.show() : this.hide();
      const focusedOptionIndex = this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
      this.focusedOptionIndex.set(focusedOptionIndex);
      this.suggestionsUpdated = true;
      this.loading = false;
      this.cd.markForCheck();
    }
  }
  flatOptions(options) {
    return (options || []).reduce((result, option, index) => {
      result.push({
        optionGroup: option,
        group: true,
        index
      });
      const optionGroupChildren = this.getOptionGroupChildren(option);
      optionGroupChildren && optionGroupChildren.forEach((o) => result.push(o));
      return result;
    }, []);
  }
  isOptionGroup(option) {
    return this.optionGroupLabel && option.optionGroup && option.group;
  }
  findFirstOptionIndex() {
    return this.visibleOptions().findIndex((option) => this.isValidOption(option));
  }
  findLastOptionIndex() {
    return V(this.visibleOptions(), (option) => this.isValidOption(option));
  }
  findFirstFocusedOptionIndex() {
    const selectedIndex = this.findSelectedOptionIndex();
    return selectedIndex < 0 ? this.findFirstOptionIndex() : selectedIndex;
  }
  findLastFocusedOptionIndex() {
    const selectedIndex = this.findSelectedOptionIndex();
    return selectedIndex < 0 ? this.findLastOptionIndex() : selectedIndex;
  }
  findSelectedOptionIndex() {
    return this.hasSelectedOption() ? this.visibleOptions().findIndex((option) => this.isValidSelectedOption(option)) : -1;
  }
  findNextOptionIndex(index) {
    const matchedOptionIndex = index < this.visibleOptions().length - 1 ? this.visibleOptions().slice(index + 1).findIndex((option) => this.isValidOption(option)) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index;
  }
  findPrevOptionIndex(index) {
    const matchedOptionIndex = index > 0 ? V(this.visibleOptions().slice(0, index), (option) => this.isValidOption(option)) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex : index;
  }
  isValidSelectedOption(option) {
    return this.isValidOption(option) && this.isSelected(option);
  }
  isValidOption(option) {
    return option && !(this.isOptionDisabled(option) || this.isOptionGroup(option));
  }
  isOptionDisabled(option) {
    return this.optionDisabled ? p(option, this.optionDisabled) : false;
  }
  isSelected(option) {
    if (this.multiple) {
      return this.unique ? this.modelValue()?.some((model) => k(model, option, this.equalityKey())) : false;
    }
    return k(this.modelValue(), option, this.equalityKey());
  }
  isOptionMatched(option, value) {
    return this.isValidOption(option) && this.getOptionLabel(option).toLocaleLowerCase(this.searchLocale) === value.toLocaleLowerCase(this.searchLocale);
  }
  isInputClicked(event) {
    return event.target === this.inputEL?.nativeElement;
  }
  isDropdownClicked(event) {
    return this.dropdownButton?.nativeElement ? event.target === this.dropdownButton.nativeElement || this.dropdownButton.nativeElement.contains(event.target) : false;
  }
  equalityKey() {
    return this.optionValue ? void 0 : this.dataKey;
  }
  onContainerClick(event) {
    if (this.$disabled() || this.loading || this.isInputClicked(event) || this.isDropdownClicked(event)) {
      return;
    }
    if (!this.overlayViewChild || !this.overlayViewChild.overlayViewChild?.nativeElement.contains(event.target)) {
      bt(this.inputEL?.nativeElement);
    }
  }
  handleDropdownClick(event) {
    let query = void 0;
    if (this.overlayVisible) {
      this.hide(true);
    } else {
      bt(this.inputEL?.nativeElement);
      query = this.inputEL?.nativeElement?.value;
      if (this.dropdownMode === "blank") this.search(event, "", "dropdown");
      else if (this.dropdownMode === "current") this.search(event, query, "dropdown");
    }
    this.onDropdownClick.emit({
      originalEvent: event,
      query
    });
  }
  onInput(event) {
    if (this.typeahead) {
      const _minLength = this.minQueryLength || this.minLength;
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
      }
      let query = event.target.value;
      if (this.maxlength() !== null) {
        query = query.split("").slice(0, this.maxlength()).join("");
      }
      if (!this.multiple && !this.forceSelection) {
        this.updateModel(query);
      }
      if (query.length === 0 && !this.multiple) {
        this.onClear.emit();
        setTimeout(() => {
          this.hide();
        }, this.delay / 2);
      } else {
        if (query.length >= _minLength) {
          this.focusedOptionIndex.set(-1);
          this.searchTimeout = setTimeout(() => {
            this.search(event, query, "input");
          }, this.delay);
        } else {
          this.hide();
        }
      }
    }
  }
  onInputChange(event) {
    this.updateInputWithForceSelection(event);
  }
  onInputFocus(event) {
    if (this.$disabled()) {
      return;
    }
    if (!this.dirty && this.completeOnFocus) {
      this.search(event, event.target.value, "focus");
    }
    this.dirty = true;
    this.focused = true;
    const focusedOptionIndex = this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
    this.focusedOptionIndex.set(focusedOptionIndex);
    this.overlayVisible && this.scrollInView(this.focusedOptionIndex());
    this.onFocus.emit(event);
  }
  onMultipleContainerFocus(event) {
    if (this.$disabled()) {
      return;
    }
    this.focused = true;
  }
  onMultipleContainerBlur(event) {
    this.focusedMultipleOptionIndex.set(-1);
    this.focused = false;
  }
  onMultipleContainerKeyDown(event) {
    if (this.$disabled()) {
      event.preventDefault();
      return;
    }
    switch (event.code) {
      case "ArrowLeft":
        this.onArrowLeftKeyOnMultiple(event);
        break;
      case "ArrowRight":
        this.onArrowRightKeyOnMultiple(event);
        break;
      case "Backspace":
        this.onBackspaceKeyOnMultiple(event);
        break;
      default:
        break;
    }
  }
  onInputBlur(event) {
    this.dirty = false;
    this.focused = false;
    this.focusedOptionIndex.set(-1);
    if (this.addOnBlur && this.multiple && !this.typeahead) {
      const inputValue = (this.multiInputEl?.nativeElement?.value || event.target.value || "").trim();
      if (inputValue && !this.isSelected(inputValue)) {
        this.updateModel([...this.modelValue() || [], inputValue]);
        this.onAdd.emit({
          originalEvent: event,
          value: inputValue
        });
        if (this.multiInputEl?.nativeElement) {
          this.multiInputEl.nativeElement.value = "";
        } else {
          event.target.value = "";
        }
      }
    }
    this.onModelTouched();
    this.onBlur.emit(event);
  }
  onInputPaste(event) {
    if (this.separator && this.multiple && !this.typeahead) {
      const pastedData = (event.clipboardData || window["clipboardData"])?.getData("Text");
      if (pastedData) {
        const values = pastedData.split(this.separator);
        const newValues = [...this.modelValue() || []];
        values.forEach((value) => {
          const trimmedValue = value.trim();
          if (trimmedValue && !this.isSelected(trimmedValue)) {
            newValues.push(trimmedValue);
          }
        });
        if (newValues.length > (this.modelValue() || []).length) {
          const addedValues = newValues.slice((this.modelValue() || []).length);
          this.updateModel(newValues);
          addedValues.forEach((addedValue) => {
            this.onAdd.emit({
              originalEvent: event,
              value: addedValue
            });
          });
          if (this.multiInputEl?.nativeElement) {
            this.multiInputEl.nativeElement.value = "";
          } else {
            event.target.value = "";
          }
          event.preventDefault();
        }
      }
    } else {
      this.onKeyDown(event);
    }
  }
  onInputKeyUp(event) {
    this.onKeyUp.emit(event);
  }
  onKeyDown(event) {
    if (this.$disabled()) {
      event.preventDefault();
      return;
    }
    this.onInputKeydown.emit(event);
    switch (event.code) {
      case "ArrowDown":
        this.onArrowDownKey(event);
        break;
      case "ArrowUp":
        this.onArrowUpKey(event);
        break;
      case "ArrowLeft":
        this.onArrowLeftKey(event);
        break;
      case "ArrowRight":
        this.onArrowRightKey(event);
        break;
      case "Home":
        this.onHomeKey(event);
        break;
      case "End":
        this.onEndKey(event);
        break;
      case "PageDown":
        this.onPageDownKey(event);
        break;
      case "PageUp":
        this.onPageUpKey(event);
        break;
      case "Enter":
      case "NumpadEnter":
        this.onEnterKey(event);
        break;
      case "Escape":
        this.onEscapeKey(event);
        break;
      case "Tab":
        this.onTabKey(event);
        break;
      case "Backspace":
        this.onBackspaceKey(event);
        break;
      case "ShiftLeft":
      case "ShiftRight":
        break;
      default:
        this.handleSeparatorKey(event);
        break;
    }
  }
  handleSeparatorKey(event) {
    if (this.separator && this.multiple && !this.typeahead) {
      if (this.separator === event.key || typeof this.separator === "string" && event.key === this.separator || this.separator instanceof RegExp && event.key.match(this.separator)) {
        const inputValue = (this.multiInputEl?.nativeElement?.value || event.target.value || "").trim();
        if (inputValue && !this.isSelected(inputValue)) {
          this.updateModel([...this.modelValue() || [], inputValue]);
          this.onAdd.emit({
            originalEvent: event,
            value: inputValue
          });
          if (this.multiInputEl?.nativeElement) {
            this.multiInputEl.nativeElement.value = "";
          } else {
            event.target.value = "";
          }
          event.preventDefault();
        }
      }
    }
  }
  onArrowDownKey(event) {
    if (!this.overlayVisible) {
      return;
    }
    const optionIndex = this.focusedOptionIndex() !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex()) : this.findFirstFocusedOptionIndex();
    this.changeFocusedOptionIndex(event, optionIndex);
    event.preventDefault();
    event.stopPropagation();
  }
  onArrowUpKey(event) {
    if (!this.overlayVisible) {
      return;
    }
    if (event.altKey) {
      if (this.focusedOptionIndex() !== -1) {
        this.onOptionSelect(event, this.visibleOptions()[this.focusedOptionIndex()]);
      }
      this.overlayVisible && this.hide();
      event.preventDefault();
    } else {
      const optionIndex = this.focusedOptionIndex() !== -1 ? this.findPrevOptionIndex(this.focusedOptionIndex()) : this.findLastFocusedOptionIndex();
      this.changeFocusedOptionIndex(event, optionIndex);
      event.preventDefault();
      event.stopPropagation();
    }
  }
  onArrowLeftKey(event) {
    const target = event.currentTarget;
    this.focusedOptionIndex.set(-1);
    if (this.multiple) {
      if (l(target.value) && this.hasSelectedOption()) {
        bt(this.multiContainerEL?.nativeElement);
        this.focusedMultipleOptionIndex.set(this.modelValue().length);
      } else {
        event.stopPropagation();
      }
    }
  }
  onArrowRightKey(event) {
    this.focusedOptionIndex.set(-1);
    this.multiple && event.stopPropagation();
  }
  onHomeKey(event) {
    const {
      currentTarget
    } = event;
    const len = currentTarget.value.length;
    currentTarget.setSelectionRange(0, event.shiftKey ? len : 0);
    this.focusedOptionIndex.set(-1);
    event.preventDefault();
  }
  onEndKey(event) {
    const {
      currentTarget
    } = event;
    const len = currentTarget.value.length;
    currentTarget.setSelectionRange(event.shiftKey ? 0 : len, len);
    this.focusedOptionIndex.set(-1);
    event.preventDefault();
  }
  onPageDownKey(event) {
    this.scrollInView(this.visibleOptions().length - 1);
    event.preventDefault();
  }
  onPageUpKey(event) {
    this.scrollInView(0);
    event.preventDefault();
  }
  onEnterKey(event) {
    if (!this.typeahead && !this.forceSelection) {
      if (this.multiple) {
        const inputValue = event.target.value?.trim();
        if (inputValue && !this.isSelected(inputValue)) {
          this.updateModel([...this.modelValue() || [], inputValue]);
          this.onAdd.emit({
            originalEvent: event,
            value: inputValue
          });
          this.inputEL?.nativeElement && (this.inputEL.nativeElement.value = "");
        }
      }
    }
    if (!this.overlayVisible) {
      return;
    } else {
      if (this.focusedOptionIndex() !== -1) {
        this.onOptionSelect(event, this.visibleOptions()[this.focusedOptionIndex()]);
      }
      this.hide();
    }
    event.preventDefault();
  }
  onEscapeKey(event) {
    this.overlayVisible && this.hide(true);
    event.preventDefault();
  }
  onTabKey(event) {
    if (this.focusedOptionIndex() !== -1) {
      this.onOptionSelect(event, this.visibleOptions()[this.focusedOptionIndex()]);
      return;
    }
    if (this.multiple && !this.typeahead) {
      const inputValue = (this.multiInputEl?.nativeElement?.value || this.inputEL?.nativeElement?.value || "").trim();
      if (this.addOnTab) {
        if (inputValue && !this.isSelected(inputValue)) {
          this.updateModel([...this.modelValue() || [], inputValue]);
          this.onAdd.emit({
            originalEvent: event,
            value: inputValue
          });
          if (this.multiInputEl?.nativeElement) {
            this.multiInputEl.nativeElement.value = "";
          } else if (this.inputEL?.nativeElement) {
            this.inputEL.nativeElement.value = "";
          }
          this.updateInputValue();
          event.preventDefault();
          this.overlayVisible && this.hide();
          return;
        }
      }
    }
    this.overlayVisible && this.hide();
  }
  onBackspaceKey(event) {
    if (this.multiple) {
      if (s(this.modelValue()) && !this.inputEL?.nativeElement?.value) {
        const removedValue = this.modelValue()[this.modelValue().length - 1];
        const newValue = this.modelValue().slice(0, -1);
        this.updateModel(newValue);
        this.onUnselect.emit({
          originalEvent: event,
          value: removedValue
        });
      }
      event.stopPropagation();
    }
  }
  onArrowLeftKeyOnMultiple(event) {
    const optionIndex = this.focusedMultipleOptionIndex() < 1 ? 0 : this.focusedMultipleOptionIndex() - 1;
    this.focusedMultipleOptionIndex.set(optionIndex);
  }
  onArrowRightKeyOnMultiple(event) {
    let optionIndex = this.focusedMultipleOptionIndex();
    optionIndex++;
    this.focusedMultipleOptionIndex.set(optionIndex);
    if (optionIndex > this.modelValue().length - 1) {
      this.focusedMultipleOptionIndex.set(-1);
      bt(this.inputEL?.nativeElement);
    }
  }
  onBackspaceKeyOnMultiple(event) {
    if (this.focusedMultipleOptionIndex() !== -1) {
      this.removeOption(event, this.focusedMultipleOptionIndex());
    }
  }
  onOptionSelect(event, option, isHide = true) {
    if (this.multiple) {
      this.inputEL?.nativeElement && (this.inputEL.nativeElement.value = "");
      if (!this.isSelected(option)) {
        this.updateModel([...this.modelValue() || [], option]);
      }
    } else {
      this.updateModel(option);
    }
    this.onSelect.emit({
      originalEvent: event,
      value: option
    });
    isHide && this.hide(true);
  }
  onOptionMouseEnter(event, index) {
    if (this.focusOnHover) {
      this.changeFocusedOptionIndex(event, index);
    }
  }
  search(event, query, source) {
    if (query === void 0 || query === null) {
      return;
    }
    if (source === "input" && query.trim().length === 0) {
      return;
    }
    this.loading = true;
    this.completeMethod.emit({
      originalEvent: event,
      query
    });
  }
  removeOption(event, index) {
    event.stopPropagation();
    const removedOption = this.modelValue()[index];
    const value = this.modelValue().filter((_, i) => i !== index);
    this.updateModel(value);
    this.onUnselect.emit({
      originalEvent: event,
      value: removedOption
    });
    bt(this.inputEL?.nativeElement);
  }
  updateModel(options) {
    let value = null;
    if (options) {
      value = this.multiple ? options.map((option) => this.getOptionValue(option)) : this.getOptionValue(options);
    }
    this.value = value;
    this.writeModelValue(options);
    this.onModelChange(value);
    this.updateInputValue();
    this.cd.markForCheck();
  }
  updateInputValue() {
    if (this.inputEL && this.inputEL.nativeElement) {
      if (!this.multiple) {
        this.inputEL.nativeElement.value = this.inputValue();
      } else {
        this.inputEL.nativeElement.value = "";
      }
    }
  }
  updateInputWithForceSelection(event) {
    const input2 = this.inputEL?.nativeElement;
    const inputCleared = !input2?.value && s(this.modelValue());
    if (!this.forceSelection || this.overlayVisible || !input2?.value && !inputCleared) {
      return;
    }
    const _minLength = this.minQueryLength ?? this.minLength;
    if (!inputCleared && input2.value.length < _minLength) {
      return;
    }
    const matchedOption = this.visibleOptions()?.find((option) => this.isOptionMatched(option, input2.value));
    if (!matchedOption) {
      input2.value = "";
      if (!this.multiple) {
        this.clear();
      }
      return;
    }
    if (matchedOption && !this.isSelected(matchedOption)) {
      this.onOptionSelect(event, matchedOption);
    }
  }
  autoUpdateModel() {
    if ((this.selectOnFocus || this.autoHighlight) && this.autoOptionFocus && !this.hasSelectedOption()) {
      const focusedOptionIndex = this.findFirstFocusedOptionIndex();
      this.focusedOptionIndex.set(focusedOptionIndex);
      this.onOptionSelect(null, this.visibleOptions()[this.focusedOptionIndex()], false);
    }
  }
  scrollInView(index = -1) {
    const id = index !== -1 ? `${this.id}_${index}` : this.focusedOptionId;
    if (this.itemsViewChild && this.itemsViewChild.nativeElement) {
      const element = Z(this.itemsViewChild.nativeElement, `li[id="${id}"]`);
      if (element) {
        element.scrollIntoView && element.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        });
      } else if (!this.virtualScrollerDisabled) {
        setTimeout(() => {
          this.virtualScroll && this.scroller?.scrollToIndex(index !== -1 ? index : this.focusedOptionIndex());
        }, 0);
      }
    }
  }
  changeFocusedOptionIndex(event, index) {
    if (this.focusedOptionIndex() !== index) {
      this.focusedOptionIndex.set(index);
      this.scrollInView();
      if (this.selectOnFocus) {
        this.onOptionSelect(event, this.visibleOptions()[index], false);
      }
    }
  }
  show(isFocus = false) {
    this.dirty = true;
    this.overlayVisible = true;
    const focusedOptionIndex = this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
    this.focusedOptionIndex.set(focusedOptionIndex);
    isFocus && bt(this.inputEL?.nativeElement);
    if (isFocus) {
      bt(this.inputEL?.nativeElement);
    }
    this.onShow.emit();
    this.cd.markForCheck();
  }
  hide(isFocus = false) {
    const _hide = () => {
      this.dirty = isFocus;
      this.overlayVisible = false;
      this.focusedOptionIndex.set(-1);
      isFocus && bt(this.inputEL?.nativeElement);
      this.onHide.emit();
      this.updateInputWithForceSelection(null);
      this.cd.markForCheck();
    };
    setTimeout(() => {
      _hide();
    }, 0);
  }
  clear() {
    this.updateModel(null);
    this.inputEL?.nativeElement && (this.inputEL.nativeElement.value = "");
    this.onClear.emit();
  }
  hasSelectedOption() {
    return s(this.modelValue());
  }
  getAriaPosInset(index) {
    return (this.optionGroupLabel ? index - this.visibleOptions().slice(0, index).filter((option) => this.isOptionGroup(option)).length : index) + 1;
  }
  getOptionLabel(option) {
    return this.optionLabel ? p(option, this.optionLabel) : option && option.label != void 0 ? option.label : option;
  }
  getOptionValue(option) {
    return this.optionValue ? p(option, this.optionValue) : option && option.value != void 0 ? option.value : option;
  }
  getOptionIndex(index, scrollerOptions) {
    return this.virtualScrollerDisabled ? index : scrollerOptions && scrollerOptions.getItemOptions(index)["index"];
  }
  getOptionGroupLabel(optionGroup) {
    return this.optionGroupLabel ? p(optionGroup, this.optionGroupLabel) : optionGroup && optionGroup.label != void 0 ? optionGroup.label : optionGroup;
  }
  getOptionGroupChildren(optionGroup) {
    return this.optionGroupChildren ? p(optionGroup, this.optionGroupChildren) : optionGroup.items;
  }
  getPTOptions(option, scrollerOptions, index, key) {
    return this.ptm(key, {
      context: {
        option,
        index: this.getOptionIndex(index, scrollerOptions),
        selected: this.isSelected(option),
        focused: this.focusedOptionIndex() === this.getOptionIndex(index, scrollerOptions),
        disabled: this.isOptionDisabled(option)
      }
    });
  }
  onOverlayBeforeEnter() {
    this.itemsWrapper = Z(this.overlayViewChild.overlayViewChild?.nativeElement, this.virtualScroll ? '[data-pc-name="virtualscroller"]' : '[data-pc-name="pcoverlay"]');
    if (this.virtualScroll) {
      this.scroller?.setContentEl(this.itemsViewChild?.nativeElement);
      this.scroller?.viewInit();
    }
    if (this.visibleOptions() && this.visibleOptions().length) {
      if (this.virtualScroll) {
        const selectedIndex = this.modelValue() ? this.focusedOptionIndex() : -1;
        if (selectedIndex !== -1) {
          this.scroller?.scrollToIndex(selectedIndex);
        }
      } else {
        let selectedListItem = Z(this.itemsWrapper, '[data-pc-section="option"][data-p-selected="true"]');
        if (selectedListItem) {
          selectedListItem.scrollIntoView({
            block: "nearest",
            inline: "center"
          });
        }
      }
    }
  }
  get containerDataP() {
    return this.cn({
      fluid: this.hasFluid
    });
  }
  get overlayDataP() {
    return this.cn({
      [`overlay-${this.$appendTo()}`]: true
    });
  }
  get inputMultipleDataP() {
    return this.cn({
      invalid: this.invalid(),
      disabled: this.$disabled(),
      focus: this.focused,
      fluid: this.hasFluid,
      filled: this.$variant() === "filled",
      empty: !this.$filled(),
      [this.size()]: this.size()
    });
  }
  /**
   * @override
   *
   * @see {@link BaseEditableHolder.writeControlValue}
   * Writes the value to the control.
   */
  writeControlValue(value, setModelValue) {
    if (this.multiple) {
      const resolved = (value || []).map((val) => {
        const match = this.visibleOptions().find((option) => k(val, option, this.equalityKey()));
        return match ?? val;
      });
      setModelValue(l(value) ? value : resolved);
    } else {
      const option = this.visibleOptions().find((option2) => k(value, option2, this.equalityKey()));
      setModelValue(l(option) ? value : option);
    }
    this.value = value;
    this.updateInputValue();
    this.cd.markForCheck();
  }
  onDestroy() {
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
  }
  static \u0275fac = function AutoComplete_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AutoComplete)(\u0275\u0275directiveInject(OverlayService), \u0275\u0275directiveInject(NgZone));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _AutoComplete,
    selectors: [["p-autoComplete"], ["p-autocomplete"], ["p-auto-complete"]],
    contentQueries: function AutoComplete_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c02, 5)(dirIndex, _c12, 5)(dirIndex, _c2, 5)(dirIndex, _c3, 5)(dirIndex, _c4, 5)(dirIndex, _c5, 5)(dirIndex, _c6, 5)(dirIndex, _c7, 5)(dirIndex, _c8, 5)(dirIndex, _c9, 5)(dirIndex, _c10, 5)(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.itemTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.emptyTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.footerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.selectedItemTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.groupTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.loaderTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.removeIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.loadingIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.clearIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.dropdownIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function AutoComplete_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c11, 5)(_c122, 5)(_c13, 5)(_c14, 5)(_c15, 5)(_c16, 5)(_c17, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.inputEL = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.multiInputEl = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.multiContainerEL = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.dropdownButton = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.itemsViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.scroller = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayViewChild = _t.first);
      }
    },
    hostVars: 5,
    hostBindings: function AutoComplete_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function AutoComplete_click_HostBindingHandler($event) {
          return ctx.onHostClick($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("data-p", ctx.containerDataP);
        \u0275\u0275styleMap(ctx.sx("root"));
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      minLength: [2, "minLength", "minLength", numberAttribute],
      minQueryLength: [2, "minQueryLength", "minQueryLength", numberAttribute],
      delay: [2, "delay", "delay", numberAttribute],
      panelStyle: "panelStyle",
      styleClass: "styleClass",
      panelStyleClass: "panelStyleClass",
      inputStyle: "inputStyle",
      inputId: "inputId",
      inputStyleClass: "inputStyleClass",
      placeholder: "placeholder",
      readonly: [2, "readonly", "readonly", booleanAttribute],
      scrollHeight: "scrollHeight",
      lazy: [2, "lazy", "lazy", booleanAttribute],
      virtualScroll: [2, "virtualScroll", "virtualScroll", booleanAttribute],
      virtualScrollItemSize: [2, "virtualScrollItemSize", "virtualScrollItemSize", numberAttribute],
      virtualScrollOptions: "virtualScrollOptions",
      autoHighlight: [2, "autoHighlight", "autoHighlight", booleanAttribute],
      forceSelection: [2, "forceSelection", "forceSelection", booleanAttribute],
      type: "type",
      autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
      baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
      ariaLabel: "ariaLabel",
      dropdownAriaLabel: "dropdownAriaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      dropdownIcon: "dropdownIcon",
      unique: [2, "unique", "unique", booleanAttribute],
      group: [2, "group", "group", booleanAttribute],
      completeOnFocus: [2, "completeOnFocus", "completeOnFocus", booleanAttribute],
      showClear: [2, "showClear", "showClear", booleanAttribute],
      dropdown: [2, "dropdown", "dropdown", booleanAttribute],
      showEmptyMessage: [2, "showEmptyMessage", "showEmptyMessage", booleanAttribute],
      dropdownMode: "dropdownMode",
      multiple: [2, "multiple", "multiple", booleanAttribute],
      addOnTab: [2, "addOnTab", "addOnTab", booleanAttribute],
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      dataKey: "dataKey",
      emptyMessage: "emptyMessage",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      autocomplete: "autocomplete",
      optionGroupChildren: "optionGroupChildren",
      optionGroupLabel: "optionGroupLabel",
      overlayOptions: "overlayOptions",
      suggestions: "suggestions",
      optionLabel: "optionLabel",
      optionValue: "optionValue",
      id: "id",
      searchMessage: "searchMessage",
      emptySelectionMessage: "emptySelectionMessage",
      selectionMessage: "selectionMessage",
      autoOptionFocus: [2, "autoOptionFocus", "autoOptionFocus", booleanAttribute],
      selectOnFocus: [2, "selectOnFocus", "selectOnFocus", booleanAttribute],
      searchLocale: [2, "searchLocale", "searchLocale", booleanAttribute],
      optionDisabled: "optionDisabled",
      focusOnHover: [2, "focusOnHover", "focusOnHover", booleanAttribute],
      typeahead: [2, "typeahead", "typeahead", booleanAttribute],
      addOnBlur: [2, "addOnBlur", "addOnBlur", booleanAttribute],
      separator: "separator",
      appendTo: [1, "appendTo"],
      motionOptions: [1, "motionOptions"]
    },
    outputs: {
      completeMethod: "completeMethod",
      onSelect: "onSelect",
      onUnselect: "onUnselect",
      onAdd: "onAdd",
      onFocus: "onFocus",
      onBlur: "onBlur",
      onDropdownClick: "onDropdownClick",
      onClear: "onClear",
      onInputKeydown: "onInputKeydown",
      onKeyUp: "onKeyUp",
      onShow: "onShow",
      onHide: "onHide",
      onLazyLoad: "onLazyLoad"
    },
    features: [\u0275\u0275ProvidersFeature([AUTOCOMPLETE_VALUE_ACCESSOR, AutoCompleteStyle, {
      provide: AUTOCOMPLETE_INSTANCE,
      useExisting: _AutoComplete
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _AutoComplete
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    decls: 9,
    vars: 14,
    consts: [["overlay", ""], ["content", ""], ["focusInput", ""], ["multiContainer", ""], ["focusInput", "", "multiIn", ""], ["token", ""], ["removeicon", ""], ["ddBtn", ""], ["buildInItems", ""], ["scroller", ""], ["loader", ""], ["items", ""], ["empty", ""], ["pInputText", "", "aria-autocomplete", "list", "role", "combobox", 3, "pAutoFocus", "pt", "class", "ngStyle", "variant", "invalid", "pSize", "fluid", "pInputTextUnstyled", "input", "keydown", "change", "focus", "blur", "paste", "keyup", 4, "ngIf"], [4, "ngIf"], ["role", "listbox", 3, "pBind", "class", "tabindex", "focus", "blur", "keydown", 4, "ngIf"], ["type", "button", "pRipple", "", 3, "pBind", "class", "disabled", "click", 4, "ngIf"], [3, "visibleChange", "onBeforeEnter", "onHide", "hostAttrSelector", "visible", "options", "target", "appendTo", "unstyled", "pt", "motionOptions"], ["pInputText", "", "aria-autocomplete", "list", "role", "combobox", 3, "input", "keydown", "change", "focus", "blur", "paste", "keyup", "pAutoFocus", "pt", "ngStyle", "variant", "invalid", "pSize", "fluid", "pInputTextUnstyled"], ["data-p-icon", "times", 3, "pBind", "class", "click", 4, "ngIf"], [3, "pBind", "class", "click", 4, "ngIf"], ["data-p-icon", "times", 3, "click", "pBind"], [3, "click", "pBind"], [4, "ngTemplateOutlet"], ["role", "listbox", 3, "focus", "blur", "keydown", "pBind", "tabindex"], ["role", "option", 3, "pBind", "class", 4, "ngFor", "ngForOf"], ["role", "option", 3, "pBind"], ["role", "combobox", "aria-autocomplete", "list", 3, "input", "keydown", "change", "focus", "blur", "paste", "keyup", "pAutoFocus", "pBind", "ngStyle"], [3, "onRemove", "pt", "label", "disabled", "removable", "unstyled"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "pBind", 4, "ngIf"], ["data-p-icon", "times-circle"], [3, "pBind"], ["data-p-icon", "spinner", 3, "pBind", "class", "spin", 4, "ngIf"], [3, "pBind", "class", 4, "ngIf"], ["data-p-icon", "spinner", 3, "pBind", "spin"], ["type", "button", "pRipple", "", 3, "click", "pBind", "disabled"], [3, "ngClass", 4, "ngIf"], [3, "ngClass"], ["data-p-icon", "chevron-down", 3, "pBind", 4, "ngIf"], ["data-p-icon", "chevron-down", 3, "pBind"], [3, "pBind", "ngStyle"], [3, "pBind", "tabindex"], [3, "tabindex", "pt", "items", "style", "itemSize", "autoSize", "lazy", "options", "onLazyLoad", 4, "ngIf"], ["role", "status", "aria-live", "polite", 1, "p-hidden-accessible"], [3, "onLazyLoad", "tabindex", "pt", "items", "itemSize", "autoSize", "lazy", "options"], ["role", "listbox", 3, "pBind"], ["ngFor", "", 3, "ngForOf"], ["role", "option", 3, "pBind", "class", "ngStyle", 4, "ngIf"], ["role", "option", 3, "pBind", "ngStyle"], ["pRipple", "", "role", "option", 3, "click", "mouseenter", "pBind", "ngStyle"], [4, "ngIf", "ngIfElse"]],
    template: function AutoComplete_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275template(0, AutoComplete_input_0_Template, 2, 32, "input", 13)(1, AutoComplete_ng_container_1_Template, 3, 2, "ng-container", 14)(2, AutoComplete_ul_2_Template, 7, 37, "ul", 15)(3, AutoComplete_ng_container_3_Template, 3, 2, "ng-container", 14)(4, AutoComplete_button_4_Template, 4, 8, "button", 16);
        \u0275\u0275elementStart(5, "p-overlay", 17, 0);
        \u0275\u0275twoWayListener("visibleChange", function AutoComplete_Template_p_overlay_visibleChange_5_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.overlayVisible, $event) || (ctx.overlayVisible = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("onBeforeEnter", function AutoComplete_Template_p_overlay_onBeforeEnter_5_listener() {
          return ctx.onOverlayBeforeEnter();
        })("onHide", function AutoComplete_Template_p_overlay_onHide_5_listener() {
          return ctx.hide();
        });
        \u0275\u0275template(7, AutoComplete_ng_template_7_Template, 10, 15, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", !ctx.multiple);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.$filled() && !ctx.$disabled() && ctx.showClear && !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.multiple);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.dropdown);
        \u0275\u0275advance();
        \u0275\u0275property("hostAttrSelector", ctx.$attrSelector);
        \u0275\u0275twoWayProperty("visible", ctx.overlayVisible);
        \u0275\u0275property("options", ctx.overlayOptions)("target", "@parent")("appendTo", ctx.$appendTo())("unstyled", ctx.unstyled())("pt", ctx.ptm("pcOverlay"))("motionOptions", ctx.motionOptions());
        \u0275\u0275attribute("data-p", ctx.overlayDataP);
      }
    },
    dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, Overlay, InputText, Ripple, Scroller, AutoFocus, TimesCircleIcon, SpinnerIcon, ChevronDownIcon, Chip, SharedModule, TimesIcon, BindModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoComplete, [{
    type: Component,
    args: [{
      selector: "p-autoComplete, p-autocomplete, p-auto-complete",
      standalone: true,
      imports: [CommonModule, Overlay, InputText, Ripple, Scroller, AutoFocus, TimesCircleIcon, SpinnerIcon, ChevronDownIcon, Chip, SharedModule, TimesIcon, BindModule],
      template: `
        <input
            *ngIf="!multiple"
            #focusInput
            [pAutoFocus]="autofocus"
            pInputText
            [pt]="ptm('pcInputText')"
            [class]="cn(cx('pcInputText'), inputStyleClass)"
            [ngStyle]="inputStyle"
            [attr.type]="type"
            [attr.value]="inputValue()"
            [variant]="$variant()"
            [invalid]="invalid()"
            [attr.id]="inputId"
            [attr.autocomplete]="autocomplete"
            aria-autocomplete="list"
            role="combobox"
            [attr.placeholder]="placeholder"
            [attr.name]="name()"
            [attr.minlength]="minlength()"
            [pSize]="size()"
            [attr.min]="min()"
            [attr.max]="max()"
            [attr.pattern]="pattern()"
            [attr.size]="inputSize()"
            [attr.maxlength]="maxlength()"
            [attr.tabindex]="!$disabled() ? tabindex : -1"
            [attr.required]="required() ? '' : undefined"
            [attr.readonly]="readonly ? '' : undefined"
            [attr.disabled]="$disabled() ? '' : undefined"
            [attr.aria-label]="ariaLabel"
            [attr.aria-labelledby]="ariaLabelledBy"
            [attr.aria-required]="required()"
            [attr.aria-expanded]="overlayVisible ?? false"
            [attr.aria-controls]="overlayVisible ? id + '_list' : null"
            [attr.aria-activedescendant]="focused ? focusedOptionId : undefined"
            (input)="onInput($event)"
            (keydown)="onKeyDown($event)"
            (change)="onInputChange($event)"
            (focus)="onInputFocus($event)"
            (blur)="onInputBlur($event)"
            (paste)="onInputPaste($event)"
            (keyup)="onInputKeyUp($event)"
            [fluid]="hasFluid"
            [pInputTextUnstyled]="unstyled()"
        />
        <ng-container *ngIf="$filled() && !$disabled() && showClear && !loading">
            <svg data-p-icon="times" *ngIf="!clearIconTemplate && !_clearIconTemplate" [pBind]="ptm('clearIcon')" [class]="cx('clearIcon')" (click)="clear()" [attr.aria-hidden]="true" />
            <span *ngIf="clearIconTemplate || _clearIconTemplate" [pBind]="ptm('clearIcon')" [class]="cx('clearIcon')" (click)="clear()" [attr.aria-hidden]="true">
                <ng-template *ngTemplateOutlet="clearIconTemplate || _clearIconTemplate"></ng-template>
            </span>
        </ng-container>

        <ul
            *ngIf="multiple"
            #multiContainer
            [pBind]="ptm('inputMultiple')"
            [class]="cx('inputMultiple')"
            [attr.data-p]="inputMultipleDataP"
            [tabindex]="-1"
            role="listbox"
            [attr.aria-orientation]="'horizontal'"
            [attr.aria-activedescendant]="focused ? focusedMultipleOptionId : undefined"
            (focus)="onMultipleContainerFocus($event)"
            (blur)="onMultipleContainerBlur($event)"
            (keydown)="onMultipleContainerKeyDown($event)"
        >
            <li
                #token
                *ngFor="let option of modelValue(); let i = index"
                [pBind]="ptm('chipItem')"
                [class]="cx('chipItem', { i })"
                [attr.id]="id + '_multiple_option_' + i"
                role="option"
                [attr.aria-label]="getOptionLabel(option)"
                [attr.aria-setsize]="modelValue().length"
                [attr.aria-posinset]="i + 1"
                [attr.aria-selected]="true"
            >
                <p-chip
                    [pt]="ptm('pcChip')"
                    [class]="cx('pcChip')"
                    [label]="!selectedItemTemplate && !_selectedItemTemplate && getOptionLabel(option)"
                    [disabled]="$disabled()"
                    [removable]="true"
                    (onRemove)="!readonly ? removeOption($event, i) : ''"
                    [unstyled]="unstyled()"
                >
                    <ng-container *ngTemplateOutlet="selectedItemTemplate || _selectedItemTemplate; context: { $implicit: option }"></ng-container>
                    <ng-template #removeicon>
                        <span *ngIf="!removeIconTemplate && !_removeIconTemplate" [pBind]="ptm('chipIcon')" [class]="cx('chipIcon')" (click)="!readonly && !$disabled() ? removeOption($event, i) : ''">
                            <svg data-p-icon="times-circle" [class]="cx('chipIcon')" [attr.aria-hidden]="true" />
                        </span>
                        <span *ngIf="removeIconTemplate || _removeIconTemplate" [pBind]="ptm('chipIcon')" [attr.aria-hidden]="true">
                            <ng-template *ngTemplateOutlet="removeIconTemplate || _removeIconTemplate; context: { removeCallback: removeOption.bind(this), index: i, class: cx('chipIcon') }"></ng-template>
                        </span>
                    </ng-template>
                </p-chip>
            </li>
            <li [pBind]="ptm('inputChip')" [class]="cx('inputChip')" role="option">
                <input
                    #focusInput
                    #multiIn
                    [pAutoFocus]="autofocus"
                    [pBind]="ptm('input')"
                    [class]="cx('pcInputText')"
                    [ngStyle]="inputStyle"
                    [attr.type]="type"
                    [attr.id]="inputId"
                    [attr.autocomplete]="autocomplete"
                    [attr.name]="name()"
                    [attr.minlength]="minlength()"
                    [attr.maxlength]="maxlength()"
                    [attr.size]="size()"
                    [attr.min]="min()"
                    [attr.max]="max()"
                    [attr.pattern]="pattern()"
                    role="combobox"
                    [attr.placeholder]="!$filled() ? placeholder : null"
                    aria-autocomplete="list"
                    [attr.tabindex]="!$disabled() ? tabindex : -1"
                    [attr.required]="required() ? '' : undefined"
                    [attr.readonly]="readonly ? '' : undefined"
                    [attr.disabled]="$disabled() ? '' : undefined"
                    [attr.aria-label]="ariaLabel"
                    [attr.aria-labelledby]="ariaLabelledBy"
                    [attr.aria-required]="required()"
                    [attr.aria-expanded]="overlayVisible ?? false"
                    [attr.aria-controls]="overlayVisible ? id + '_list' : null"
                    [attr.aria-activedescendant]="focused ? focusedOptionId : undefined"
                    (input)="onInput($event)"
                    (keydown)="onKeyDown($event)"
                    (change)="onInputChange($event)"
                    (focus)="onInputFocus($event)"
                    (blur)="onInputBlur($event)"
                    (paste)="onInputPaste($event)"
                    (keyup)="onInputKeyUp($event)"
                />
            </li>
        </ul>
        <ng-container *ngIf="loading">
            <svg data-p-icon="spinner" *ngIf="!loadingIconTemplate && !_loadingIconTemplate" [pBind]="ptm('loader')" [class]="cx('loader')" [spin]="true" [attr.aria-hidden]="true" />
            <span *ngIf="loadingIconTemplate || _loadingIconTemplate" [pBind]="ptm('loader')" [class]="cx('loader')" [attr.aria-hidden]="true">
                <ng-template *ngTemplateOutlet="loadingIconTemplate || _loadingIconTemplate"></ng-template>
            </span>
        </ng-container>
        <button #ddBtn type="button" [pBind]="ptm('dropdown')" [attr.aria-label]="dropdownAriaLabel" [class]="cx('dropdown')" [disabled]="$disabled()" pRipple (click)="handleDropdownClick($event)" *ngIf="dropdown" [attr.tabindex]="tabindex">
            <span *ngIf="dropdownIcon" [ngClass]="dropdownIcon" [attr.aria-hidden]="true"></span>
            <ng-container *ngIf="!dropdownIcon">
                <svg data-p-icon="chevron-down" [pBind]="ptm('dropdown')" *ngIf="!dropdownIconTemplate && !_dropdownIconTemplate" />
                <ng-template *ngTemplateOutlet="dropdownIconTemplate || _dropdownIconTemplate"></ng-template>
            </ng-container>
        </button>
        <p-overlay
            #overlay
            [hostAttrSelector]="$attrSelector"
            [(visible)]="overlayVisible"
            [options]="overlayOptions"
            [target]="'@parent'"
            [appendTo]="$appendTo()"
            [unstyled]="unstyled()"
            [pt]="ptm('pcOverlay')"
            [motionOptions]="motionOptions()"
            (onBeforeEnter)="onOverlayBeforeEnter()"
            (onHide)="hide()"
            [attr.data-p]="overlayDataP"
        >
            <ng-template #content>
                <div [pBind]="ptm('overlay')" [class]="cn(cx('overlay'), panelStyleClass)" [ngStyle]="panelStyle">
                    <ng-container *ngTemplateOutlet="headerTemplate || _headerTemplate"></ng-container>
                    <div [pBind]="ptm('listContainer')" [class]="cx('listContainer')" [style.max-height]="virtualScroll ? 'auto' : scrollHeight" [tabindex]="-1">
                        <p-scroller
                            *ngIf="virtualScroll"
                            #scroller
                            [tabindex]="-1"
                            [pt]="ptm('virtualScroller')"
                            [items]="visibleOptions()"
                            [style]="{ height: scrollHeight }"
                            [itemSize]="virtualScrollItemSize"
                            [autoSize]="true"
                            [lazy]="lazy"
                            (onLazyLoad)="onLazyLoad.emit($event)"
                            [options]="virtualScrollOptions"
                        >
                            <ng-template #content let-items let-scrollerOptions="options">
                                <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: items, options: scrollerOptions }"></ng-container>
                            </ng-template>
                            <ng-container *ngIf="loaderTemplate || _loaderTemplate">
                                <ng-template #loader let-scrollerOptions="options">
                                    <ng-container *ngTemplateOutlet="loaderTemplate || _loaderTemplate; context: { options: scrollerOptions }"></ng-container>
                                </ng-template>
                            </ng-container>
                        </p-scroller>
                        <ng-container *ngIf="!virtualScroll">
                            <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: visibleOptions(), options: {} }"></ng-container>
                        </ng-container>
                    </div>

                    <ng-template #buildInItems let-items let-scrollerOptions="options">
                        <ul #items [pBind]="ptm('list')" [class]="cn(cx('list'), scrollerOptions.contentStyleClass)" [style]="scrollerOptions.contentStyle" role="listbox" [attr.id]="id + '_list'" [attr.aria-label]="listLabel">
                            <ng-template ngFor let-option [ngForOf]="items" let-i="index">
                                <ng-container *ngIf="isOptionGroup(option)">
                                    <li [pBind]="ptm('optionGroup')" [attr.id]="id + '_' + getOptionIndex(i, scrollerOptions)" [class]="cx('optionGroup')" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option">
                                        <span *ngIf="!groupTemplate">{{ getOptionGroupLabel(option.optionGroup) }}</span>
                                        <ng-container *ngTemplateOutlet="groupTemplate; context: { $implicit: option.optionGroup }"></ng-container>
                                    </li>
                                </ng-container>
                                <ng-container *ngIf="!isOptionGroup(option)">
                                    <li
                                        pRipple
                                        [pBind]="getPTOptions(option, scrollerOptions, i, 'option')"
                                        [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }"
                                        [class]="cx('option', { option, i, scrollerOptions })"
                                        [attr.id]="id + '_' + getOptionIndex(i, scrollerOptions)"
                                        role="option"
                                        [attr.aria-label]="getOptionLabel(option)"
                                        [attr.aria-selected]="isSelected(option)"
                                        [attr.data-p-selected]="isSelected(option)"
                                        [attr.aria-disabled]="isOptionDisabled(option)"
                                        [attr.data-p-focused]="focusedOptionIndex() === getOptionIndex(i, scrollerOptions)"
                                        [attr.aria-setsize]="ariaSetSize"
                                        [attr.aria-posinset]="getAriaPosInset(getOptionIndex(i, scrollerOptions))"
                                        (click)="onOptionSelect($event, option)"
                                        (mouseenter)="onOptionMouseEnter($event, getOptionIndex(i, scrollerOptions))"
                                    >
                                        <span *ngIf="!itemTemplate && !_itemTemplate">{{ getOptionLabel(option) }}</span>
                                        <ng-container
                                            *ngTemplateOutlet="
                                                itemTemplate || _itemTemplate;
                                                context: {
                                                    $implicit: option,
                                                    index: scrollerOptions.getOptions ? scrollerOptions.getOptions(i) : i
                                                }
                                            "
                                        ></ng-container>
                                    </li>
                                </ng-container>
                            </ng-template>
                            <li *ngIf="!items || (items && items.length === 0 && showEmptyMessage)" [pBind]="ptm('emptyMessage')" [class]="cx('emptyMessage')" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option">
                                <ng-container *ngIf="!emptyTemplate && !_emptyTemplate; else empty">
                                    {{ searchResultMessageText }}
                                </ng-container>
                                <ng-container #empty *ngTemplateOutlet="emptyTemplate || _emptyTemplate"></ng-container>
                            </li>
                        </ul>
                    </ng-template>
                    <ng-container *ngTemplateOutlet="footerTemplate || _footerTemplate"></ng-container>
                </div>
                <span role="status" aria-live="polite" class="p-hidden-accessible">
                    {{ selectedMessageText }}
                </span>
            </ng-template>
        </p-overlay>
    `,
      providers: [AUTOCOMPLETE_VALUE_ACCESSOR, AutoCompleteStyle, {
        provide: AUTOCOMPLETE_INSTANCE,
        useExisting: AutoComplete
      }, {
        provide: PARENT_INSTANCE,
        useExisting: AutoComplete
      }],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": "cn(cx('root'), styleClass)",
        "[style]": "sx('root')",
        "[attr.data-p]": "containerDataP"
      },
      hostDirectives: [Bind]
    }]
  }], () => [{
    type: OverlayService
  }, {
    type: NgZone
  }], {
    minLength: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    minQueryLength: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    delay: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    panelStyle: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    panelStyleClass: [{
      type: Input
    }],
    inputStyle: [{
      type: Input
    }],
    inputId: [{
      type: Input
    }],
    inputStyleClass: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    readonly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    scrollHeight: [{
      type: Input
    }],
    lazy: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    virtualScroll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    virtualScrollItemSize: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    virtualScrollOptions: [{
      type: Input
    }],
    autoHighlight: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    forceSelection: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    type: [{
      type: Input
    }],
    autoZIndex: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    baseZIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    ariaLabel: [{
      type: Input
    }],
    dropdownAriaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    dropdownIcon: [{
      type: Input
    }],
    unique: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    group: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    completeOnFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showClear: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    dropdown: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showEmptyMessage: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    dropdownMode: [{
      type: Input
    }],
    multiple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    addOnTab: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    dataKey: [{
      type: Input
    }],
    emptyMessage: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autocomplete: [{
      type: Input
    }],
    optionGroupChildren: [{
      type: Input
    }],
    optionGroupLabel: [{
      type: Input
    }],
    overlayOptions: [{
      type: Input
    }],
    suggestions: [{
      type: Input
    }],
    optionLabel: [{
      type: Input
    }],
    optionValue: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    searchMessage: [{
      type: Input
    }],
    emptySelectionMessage: [{
      type: Input
    }],
    selectionMessage: [{
      type: Input
    }],
    autoOptionFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectOnFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    searchLocale: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    optionDisabled: [{
      type: Input
    }],
    focusOnHover: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    typeahead: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    addOnBlur: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    separator: [{
      type: Input
    }],
    appendTo: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "appendTo",
        required: false
      }]
    }],
    motionOptions: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "motionOptions",
        required: false
      }]
    }],
    completeMethod: [{
      type: Output
    }],
    onSelect: [{
      type: Output
    }],
    onUnselect: [{
      type: Output
    }],
    onAdd: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onDropdownClick: [{
      type: Output
    }],
    onClear: [{
      type: Output
    }],
    onInputKeydown: [{
      type: Output
    }],
    onKeyUp: [{
      type: Output
    }],
    onShow: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    onLazyLoad: [{
      type: Output
    }],
    inputEL: [{
      type: ViewChild,
      args: ["focusInput"]
    }],
    multiInputEl: [{
      type: ViewChild,
      args: ["multiIn"]
    }],
    multiContainerEL: [{
      type: ViewChild,
      args: ["multiContainer"]
    }],
    dropdownButton: [{
      type: ViewChild,
      args: ["ddBtn"]
    }],
    itemsViewChild: [{
      type: ViewChild,
      args: ["items"]
    }],
    scroller: [{
      type: ViewChild,
      args: ["scroller"]
    }],
    overlayViewChild: [{
      type: ViewChild,
      args: ["overlay"]
    }],
    itemTemplate: [{
      type: ContentChild,
      args: ["item"]
    }],
    emptyTemplate: [{
      type: ContentChild,
      args: ["empty"]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: ["header"]
    }],
    footerTemplate: [{
      type: ContentChild,
      args: ["footer"]
    }],
    selectedItemTemplate: [{
      type: ContentChild,
      args: ["selecteditem"]
    }],
    groupTemplate: [{
      type: ContentChild,
      args: ["group"]
    }],
    loaderTemplate: [{
      type: ContentChild,
      args: ["loader"]
    }],
    removeIconTemplate: [{
      type: ContentChild,
      args: ["removeicon"]
    }],
    loadingIconTemplate: [{
      type: ContentChild,
      args: ["loadingicon"]
    }],
    clearIconTemplate: [{
      type: ContentChild,
      args: ["clearicon"]
    }],
    dropdownIconTemplate: [{
      type: ContentChild,
      args: ["dropdownicon"]
    }],
    onHostClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var AutoCompleteModule = class _AutoCompleteModule {
  static \u0275fac = function AutoCompleteModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AutoCompleteModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _AutoCompleteModule,
    imports: [AutoComplete, SharedModule],
    exports: [AutoComplete, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [AutoComplete, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoCompleteModule, [{
    type: NgModule,
    args: [{
      imports: [AutoComplete, SharedModule],
      exports: [AutoComplete, SharedModule]
    }]
  }], null, null);
})();

export {
  AutoComplete,
  AutoCompleteModule,
  ProgressBar,
  ProgressBarModule
};
//# sourceMappingURL=chunk-B24NYOWZ.js.map
