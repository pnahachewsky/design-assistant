import {
  BaseComponent,
  BaseStyle,
  Bind,
  BindModule,
  PARENT_INSTANCE,
  SharedModule
} from "./chunk-AGPMTYRP.js";
import {
  CommonModule,
  RouterModule
} from "./chunk-MDI4WJGA.js";
import {
  ChangeDetectionStrategy,
  Component,
  Injectable,
  InjectionToken,
  NgModule,
  ViewEncapsulation,
  inject,
  setClassMetadata,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵgetInheritedFactory,
  ɵɵprojection,
  ɵɵprojectionDef
} from "./chunk-KRHY6Z2H.js";

// node_modules/@primeuix/styles/dist/iftalabel/index.mjs
var style = "\n    .p-iftalabel {\n        display: block;\n        position: relative;\n    }\n\n    .p-iftalabel label {\n        position: absolute;\n        pointer-events: none;\n        top: dt('iftalabel.top');\n        transition-property: all;\n        transition-timing-function: ease;\n        line-height: 1;\n        font-size: dt('iftalabel.font.size');\n        font-weight: dt('iftalabel.font.weight');\n        inset-inline-start: dt('iftalabel.position.x');\n        color: dt('iftalabel.color');\n        transition-duration: dt('iftalabel.transition.duration');\n    }\n\n    .p-iftalabel .p-inputtext,\n    .p-iftalabel .p-textarea,\n    .p-iftalabel .p-select-label,\n    .p-iftalabel .p-multiselect-label,\n    .p-iftalabel .p-multiselect-label:has(.p-chip),\n    .p-iftalabel .p-autocomplete-input-multiple,\n    .p-iftalabel .p-cascadeselect-label,\n    .p-iftalabel .p-treeselect-label {\n        padding-block-start: dt('iftalabel.input.padding.top');\n        padding-block-end: dt('iftalabel.input.padding.bottom');\n    }\n\n    .p-iftalabel:has(.p-invalid) label {\n        color: dt('iftalabel.invalid.color');\n    }\n\n    .p-iftalabel:has(input:focus) label,\n    .p-iftalabel:has(input:-webkit-autofill) label,\n    .p-iftalabel:has(textarea:focus) label,\n    .p-iftalabel:has(.p-inputwrapper-focus) label {\n        color: dt('iftalabel.focus.color');\n    }\n\n    .p-iftalabel .p-inputicon {\n        top: dt('iftalabel.input.padding.top');\n        transform: translateY(25%);\n        margin-top: 0;\n    }\n";

// node_modules/primeng/fesm2022/primeng-iftalabel.mjs
var _c0 = ["*"];
var style2 = (
  /*css*/
  `
    ${style}

    /* For PrimeNG */
    .p-iftalabel:has(.ng-invalid.ng-dirty) label {
        color: dt('iftalabel.invalid.color');
    }
`
);
var classes = {
  root: "p-iftalabel"
};
var IftaLabelStyle = class _IftaLabelStyle extends BaseStyle {
  name = "iftalabel";
  style = style2;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275IftaLabelStyle_BaseFactory;
    return function IftaLabelStyle_Factory(__ngFactoryType__) {
      return (\u0275IftaLabelStyle_BaseFactory || (\u0275IftaLabelStyle_BaseFactory = \u0275\u0275getInheritedFactory(_IftaLabelStyle)))(__ngFactoryType__ || _IftaLabelStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _IftaLabelStyle,
    factory: _IftaLabelStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IftaLabelStyle, [{
    type: Injectable
  }], null, null);
})();
var IftaLabelClasses;
(function(IftaLabelClasses2) {
  IftaLabelClasses2["root"] = "p-iftalabel";
})(IftaLabelClasses || (IftaLabelClasses = {}));
var IFTALABEL_INSTANCE = new InjectionToken("IFTALABEL_INSTANCE");
var IftaLabel = class _IftaLabel extends BaseComponent {
  componentName = "IftaLabel";
  _componentStyle = inject(IftaLabelStyle);
  $pcIftaLabel = inject(IFTALABEL_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275IftaLabel_BaseFactory;
    return function IftaLabel_Factory(__ngFactoryType__) {
      return (\u0275IftaLabel_BaseFactory || (\u0275IftaLabel_BaseFactory = \u0275\u0275getInheritedFactory(_IftaLabel)))(__ngFactoryType__ || _IftaLabel);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _IftaLabel,
    selectors: [["p-iftalabel"], ["p-iftaLabel"], ["p-ifta-label"]],
    hostVars: 2,
    hostBindings: function IftaLabel_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    features: [\u0275\u0275ProvidersFeature([IftaLabelStyle, {
      provide: IFTALABEL_INSTANCE,
      useExisting: _IftaLabel
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _IftaLabel
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IftaLabel_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    dependencies: [BindModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IftaLabel, [{
    type: Component,
    args: [{
      selector: "p-iftalabel, p-iftaLabel, p-ifta-label",
      standalone: true,
      imports: [BindModule],
      template: ` <ng-content></ng-content> `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [IftaLabelStyle, {
        provide: IFTALABEL_INSTANCE,
        useExisting: IftaLabel
      }, {
        provide: PARENT_INSTANCE,
        useExisting: IftaLabel
      }],
      hostDirectives: [Bind],
      host: {
        "[class]": "cx('root')"
      }
    }]
  }], null, null);
})();
var IftaLabelModule = class _IftaLabelModule {
  static \u0275fac = function IftaLabelModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IftaLabelModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _IftaLabelModule,
    imports: [IftaLabel, CommonModule, SharedModule, RouterModule],
    exports: [IftaLabel, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [IftaLabel, CommonModule, SharedModule, RouterModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IftaLabelModule, [{
    type: NgModule,
    args: [{
      imports: [IftaLabel, CommonModule, SharedModule, RouterModule],
      exports: [IftaLabel, SharedModule]
    }]
  }], null, null);
})();

export {
  IftaLabel,
  IftaLabelModule
};
//# sourceMappingURL=chunk-SFFTHMKD.js.map
