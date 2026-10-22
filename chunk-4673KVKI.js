import {
  BaseComponent,
  Bind,
  BindModule,
  PARENT_INSTANCE
} from "./chunk-QN4TTD5X.js";
import {
  BaseStyle,
  CommonModule,
  NgClass,
  NgIf,
  NgTemplateOutlet,
  PrimeTemplate,
  SharedModule
} from "./chunk-7YP54JN5.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  HostBinding,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  ViewEncapsulation,
  booleanAttribute,
  inject,
  setClassMetadata,
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
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-KRHY6Z2H.js";

// node_modules/@primeuix/styles/dist/tag/index.mjs
var style = "\n    .p-tag {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        background: dt('tag.primary.background');\n        color: dt('tag.primary.color');\n        font-size: dt('tag.font.size');\n        font-weight: dt('tag.font.weight');\n        padding: dt('tag.padding');\n        border-radius: dt('tag.border.radius');\n        gap: dt('tag.gap');\n    }\n\n    .p-tag-icon {\n        font-size: dt('tag.icon.size');\n        width: dt('tag.icon.size');\n        height: dt('tag.icon.size');\n    }\n\n    .p-tag-rounded {\n        border-radius: dt('tag.rounded.border.radius');\n    }\n\n    .p-tag-success {\n        background: dt('tag.success.background');\n        color: dt('tag.success.color');\n    }\n\n    .p-tag-info {\n        background: dt('tag.info.background');\n        color: dt('tag.info.color');\n    }\n\n    .p-tag-warn {\n        background: dt('tag.warn.background');\n        color: dt('tag.warn.color');\n    }\n\n    .p-tag-danger {\n        background: dt('tag.danger.background');\n        color: dt('tag.danger.color');\n    }\n\n    .p-tag-secondary {\n        background: dt('tag.secondary.background');\n        color: dt('tag.secondary.color');\n    }\n\n    .p-tag-contrast {\n        background: dt('tag.contrast.background');\n        color: dt('tag.contrast.color');\n    }\n";

// node_modules/primeng/fesm2022/primeng-tag.mjs
var _c0 = ["icon"];
var _c1 = ["*"];
function Tag_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.cx("icon"));
    \u0275\u0275property("ngClass", ctx_r0.icon)("pBind", ctx_r0.ptm("icon"));
  }
}
function Tag_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Tag_ng_container_1_span_1_Template, 1, 4, "span", 3);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.icon);
  }
}
function Tag_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Tag_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Tag_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Tag_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275template(1, Tag_span_2_1_Template, 1, 0, null, 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("icon"));
    \u0275\u0275property("pBind", ctx_r0.ptm("icon"));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.iconTemplate || ctx_r0._iconTemplate);
  }
}
var classes = {
  root: ({
    instance
  }) => ["p-tag p-component", {
    "p-tag-info": instance.severity === "info",
    "p-tag-success": instance.severity === "success",
    "p-tag-warn": instance.severity === "warn",
    "p-tag-danger": instance.severity === "danger",
    "p-tag-secondary": instance.severity === "secondary",
    "p-tag-contrast": instance.severity === "contrast",
    "p-tag-rounded": instance.rounded
  }],
  icon: "p-tag-icon",
  label: "p-tag-label"
};
var TagStyle = class _TagStyle extends BaseStyle {
  name = "tag";
  style = style;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TagStyle_BaseFactory;
    return function TagStyle_Factory(__ngFactoryType__) {
      return (\u0275TagStyle_BaseFactory || (\u0275TagStyle_BaseFactory = \u0275\u0275getInheritedFactory(_TagStyle)))(__ngFactoryType__ || _TagStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TagStyle,
    factory: _TagStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TagStyle, [{
    type: Injectable
  }], null, null);
})();
var TagClasses;
(function(TagClasses2) {
  TagClasses2["root"] = "p-tag";
  TagClasses2["icon"] = "p-tag-icon";
  TagClasses2["label"] = "p-tag-label";
})(TagClasses || (TagClasses = {}));
var TAG_INSTANCE = new InjectionToken("TAG_INSTANCE");
var Tag = class _Tag extends BaseComponent {
  componentName = "Tag";
  $pcTag = inject(TAG_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  /**
   * Style class of the component.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Severity type of the tag.
   * @group Props
   */
  severity;
  /**
   * Value to display inside the tag.
   * @group Props
   */
  value;
  /**
   * Icon of the tag to display next to the value.
   * @group Props
   */
  icon;
  /**
   * Whether the corners of the tag are rounded.
   * @group Props
   */
  rounded;
  /**
   * Custom icon template.
   * @group Templates
   */
  iconTemplate;
  templates;
  _iconTemplate;
  _componentStyle = inject(TagStyle);
  onAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "icon":
          this._iconTemplate = item.template;
          break;
      }
    });
  }
  get dataP() {
    return this.cn({
      rounded: this.rounded,
      [this.severity]: this.severity
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Tag_BaseFactory;
    return function Tag_Factory(__ngFactoryType__) {
      return (\u0275Tag_BaseFactory || (\u0275Tag_BaseFactory = \u0275\u0275getInheritedFactory(_Tag)))(__ngFactoryType__ || _Tag);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Tag,
    selectors: [["p-tag"]],
    contentQueries: function Tag_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c0, 4)(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.iconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostVars: 3,
    hostBindings: function Tag_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("data-p", ctx.dataP);
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      styleClass: "styleClass",
      severity: "severity",
      value: "value",
      icon: "icon",
      rounded: [2, "rounded", "rounded", booleanAttribute]
    },
    features: [\u0275\u0275ProvidersFeature([TagStyle, {
      provide: TAG_INSTANCE,
      useExisting: _Tag
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Tag
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c1,
    decls: 5,
    vars: 6,
    consts: [[4, "ngIf"], [3, "class", "pBind", 4, "ngIf"], [3, "pBind"], [3, "class", "ngClass", "pBind", 4, "ngIf"], [3, "ngClass", "pBind"], [4, "ngTemplateOutlet"]],
    template: function Tag_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
        \u0275\u0275template(1, Tag_ng_container_1_Template, 2, 1, "ng-container", 0)(2, Tag_span_2_Template, 2, 4, "span", 1);
        \u0275\u0275elementStart(3, "span", 2);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.iconTemplate && !ctx._iconTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.iconTemplate || ctx._iconTemplate);
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("label"));
        \u0275\u0275property("pBind", ctx.ptm("label"));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.value);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, SharedModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Tag, [{
    type: Component,
    args: [{
      selector: "p-tag",
      standalone: true,
      imports: [CommonModule, SharedModule, Bind],
      template: `
        <ng-content></ng-content>
        <ng-container *ngIf="!iconTemplate && !_iconTemplate">
            <span [class]="cx('icon')" [ngClass]="icon" [pBind]="ptm('icon')" *ngIf="icon"></span>
        </ng-container>
        <span [class]="cx('icon')" [pBind]="ptm('icon')" *ngIf="iconTemplate || _iconTemplate">
            <ng-template *ngTemplateOutlet="iconTemplate || _iconTemplate"></ng-template>
        </span>
        <span [class]="cx('label')" [pBind]="ptm('label')">{{ value }}</span>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [TagStyle, {
        provide: TAG_INSTANCE,
        useExisting: Tag
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Tag
      }],
      host: {
        "[class]": "cn(cx('root'), styleClass)",
        "[attr.data-p]": "dataP"
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    styleClass: [{
      type: Input
    }],
    severity: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    rounded: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    iconTemplate: [{
      type: ContentChild,
      args: ["icon", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var TagModule = class _TagModule {
  static \u0275fac = function TagModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TagModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _TagModule,
    imports: [Tag, SharedModule],
    exports: [Tag, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Tag, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TagModule, [{
    type: NgModule,
    args: [{
      imports: [Tag, SharedModule],
      exports: [Tag, SharedModule]
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/inputgroup/index.mjs
var style2 = "\n    .p-inputgroup,\n    .p-inputgroup .p-iconfield,\n    .p-inputgroup .p-floatlabel,\n    .p-inputgroup .p-iftalabel {\n        display: flex;\n        align-items: stretch;\n        width: 100%;\n    }\n\n    .p-inputgroup .p-floatlabel .p-inputwrapper,\n    .p-inputgroup .p-iftalabel .p-inputwrapper {\n        display: inline-flex;\n    }\n\n    .p-inputgroup .p-inputtext,\n    .p-inputgroup .p-inputwrapper {\n        flex: 1 1 auto;\n        width: 1%;\n    }\n\n    .p-inputgroupaddon {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        padding: dt('inputgroup.addon.padding');\n        background: dt('inputgroup.addon.background');\n        color: dt('inputgroup.addon.color');\n        border-block-start: 1px solid dt('inputgroup.addon.border.color');\n        border-block-end: 1px solid dt('inputgroup.addon.border.color');\n        min-width: dt('inputgroup.addon.min.width');\n    }\n\n    .p-inputgroupaddon:first-child,\n    .p-inputgroupaddon + .p-inputgroupaddon {\n        border-inline-start: 1px solid dt('inputgroup.addon.border.color');\n    }\n\n    .p-inputgroupaddon:last-child {\n        border-inline-end: 1px solid dt('inputgroup.addon.border.color');\n    }\n\n    .p-inputgroupaddon:has(.p-button) {\n        padding: 0;\n        overflow: hidden;\n    }\n\n    .p-inputgroupaddon .p-button {\n        border-radius: 0;\n    }\n\n    .p-inputgroup > .p-component,\n    .p-inputgroup > .p-inputwrapper > .p-component,\n    .p-inputgroup > .p-iconfield > .p-component,\n    .p-inputgroup > .p-floatlabel > .p-component,\n    .p-inputgroup > .p-floatlabel > .p-inputwrapper > .p-component,\n    .p-inputgroup > .p-iftalabel > .p-component,\n    .p-inputgroup > .p-iftalabel > .p-inputwrapper > .p-component {\n        border-radius: 0;\n        margin: 0;\n    }\n\n    .p-inputgroupaddon:first-child,\n    .p-inputgroup > .p-component:first-child,\n    .p-inputgroup > .p-inputwrapper:first-child > .p-component,\n    .p-inputgroup > .p-iconfield:first-child > .p-component,\n    .p-inputgroup > .p-floatlabel:first-child > .p-component,\n    .p-inputgroup > .p-floatlabel:first-child > .p-inputwrapper > .p-component,\n    .p-inputgroup > .p-iftalabel:first-child > .p-component,\n    .p-inputgroup > .p-iftalabel:first-child > .p-inputwrapper > .p-component {\n        border-start-start-radius: dt('inputgroup.addon.border.radius');\n        border-end-start-radius: dt('inputgroup.addon.border.radius');\n    }\n\n    .p-inputgroupaddon:last-child,\n    .p-inputgroup > .p-component:last-child,\n    .p-inputgroup > .p-inputwrapper:last-child > .p-component,\n    .p-inputgroup > .p-iconfield:last-child > .p-component,\n    .p-inputgroup > .p-floatlabel:last-child > .p-component,\n    .p-inputgroup > .p-floatlabel:last-child > .p-inputwrapper > .p-component,\n    .p-inputgroup > .p-iftalabel:last-child > .p-component,\n    .p-inputgroup > .p-iftalabel:last-child > .p-inputwrapper > .p-component {\n        border-start-end-radius: dt('inputgroup.addon.border.radius');\n        border-end-end-radius: dt('inputgroup.addon.border.radius');\n    }\n\n    .p-inputgroup .p-component:focus,\n    .p-inputgroup .p-component.p-focus,\n    .p-inputgroup .p-inputwrapper-focus,\n    .p-inputgroup .p-component:focus ~ label,\n    .p-inputgroup .p-component.p-focus ~ label,\n    .p-inputgroup .p-inputwrapper-focus ~ label,\n    .p-inputgroup .p-floatlabel .p-inputwrapper ~ label,\n    .p-inputgroup .p-iftalabel .p-inputwrapper ~ label {\n        z-index: 1;\n    }\n\n    .p-inputgroup > .p-button:not(.p-button-icon-only) {\n        width: auto;\n    }\n\n    .p-inputgroup .p-iconfield + .p-iconfield .p-inputtext {\n        border-inline-start: 0;\n    }\n";

// node_modules/primeng/fesm2022/primeng-inputgroup.mjs
var _c02 = ["*"];
var style3 = (
  /*css*/
  `
    ${style2}

    /*For PrimeNG*/

    .p-inputgroup > .p-component,
    .p-inputgroup > .p-inputwrapper > .p-component,
    .p-inputgroup:first-child > p-button > .p-button,
    .p-inputgroup > .p-floatlabel > .p-component,
    .p-inputgroup > .p-floatlabel > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iftalabel > .p-component,
    .p-inputgroup > .p-iftalabel > .p-inputwrapper > .p-component {
        border-radius: 0;
        margin: 0;
    }

    .p-inputgroup p-button:first-child,
    .p-inputgroup p-button:last-child {
        display: inline-flex;
    }

    .p-inputgroup:has(> p-button:first-child) .p-button {
        border-start-start-radius: dt('inputgroup.addon.border.radius');
        border-end-start-radius: dt('inputgroup.addon.border.radius');
    }

    .p-inputgroup:has(> p-button:last-child) .p-button {
        border-start-end-radius: dt('inputgroup.addon.border.radius');
        border-end-end-radius: dt('inputgroup.addon.border.radius');
    }

    .p-inputgroup > p-inputmask > .p-inputtext {
        width: 100%;
    }
`
);
var classes2 = {
  root: ({
    instance
  }) => ["p-inputgroup", {
    "p-inputgroup-fluid": instance.fluid
  }]
};
var InputGroupStyle = class _InputGroupStyle extends BaseStyle {
  name = "inputgroup";
  style = style3;
  classes = classes2;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275InputGroupStyle_BaseFactory;
    return function InputGroupStyle_Factory(__ngFactoryType__) {
      return (\u0275InputGroupStyle_BaseFactory || (\u0275InputGroupStyle_BaseFactory = \u0275\u0275getInheritedFactory(_InputGroupStyle)))(__ngFactoryType__ || _InputGroupStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _InputGroupStyle,
    factory: _InputGroupStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputGroupStyle, [{
    type: Injectable
  }], null, null);
})();
var InputGroupClasses;
(function(InputGroupClasses2) {
  InputGroupClasses2["root"] = "p-inputgroup";
})(InputGroupClasses || (InputGroupClasses = {}));
var INPUTGROUP_INSTANCE = new InjectionToken("INPUTGROUP_INSTANCE");
var InputGroup = class _InputGroup extends BaseComponent {
  componentName = "InputGroup";
  _componentStyle = inject(InputGroupStyle);
  $pcInputGroup = inject(INPUTGROUP_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  /**
   * Class of the element.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275InputGroup_BaseFactory;
    return function InputGroup_Factory(__ngFactoryType__) {
      return (\u0275InputGroup_BaseFactory || (\u0275InputGroup_BaseFactory = \u0275\u0275getInheritedFactory(_InputGroup)))(__ngFactoryType__ || _InputGroup);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _InputGroup,
    selectors: [["p-inputgroup"], ["p-inputGroup"], ["p-input-group"]],
    hostVars: 2,
    hostBindings: function InputGroup_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      styleClass: "styleClass"
    },
    features: [\u0275\u0275ProvidersFeature([InputGroupStyle, {
      provide: INPUTGROUP_INSTANCE,
      useExisting: _InputGroup
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _InputGroup
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function InputGroup_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    dependencies: [BindModule],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputGroup, [{
    type: Component,
    args: [{
      selector: "p-inputgroup, p-inputGroup, p-input-group",
      standalone: true,
      imports: [BindModule],
      template: ` <ng-content></ng-content> `,
      providers: [InputGroupStyle, {
        provide: INPUTGROUP_INSTANCE,
        useExisting: InputGroup
      }, {
        provide: PARENT_INSTANCE,
        useExisting: InputGroup
      }],
      hostDirectives: [Bind],
      host: {
        "[class]": "cn(cx('root'), styleClass)"
      }
    }]
  }], null, {
    styleClass: [{
      type: Input
    }]
  });
})();
var InputGroupModule = class _InputGroupModule {
  static \u0275fac = function InputGroupModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputGroupModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _InputGroupModule,
    imports: [InputGroup, SharedModule],
    exports: [InputGroup, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [InputGroup, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputGroupModule, [{
    type: NgModule,
    args: [{
      imports: [InputGroup, SharedModule],
      exports: [InputGroup, SharedModule]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-inputgroupaddon.mjs
var _c03 = ["*"];
var classes3 = {
  root: "p-inputgroupaddon"
};
var InputGroupAddonStyle = class _InputGroupAddonStyle extends BaseStyle {
  name = "inputgroupaddon";
  classes = classes3;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275InputGroupAddonStyle_BaseFactory;
    return function InputGroupAddonStyle_Factory(__ngFactoryType__) {
      return (\u0275InputGroupAddonStyle_BaseFactory || (\u0275InputGroupAddonStyle_BaseFactory = \u0275\u0275getInheritedFactory(_InputGroupAddonStyle)))(__ngFactoryType__ || _InputGroupAddonStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _InputGroupAddonStyle,
    factory: _InputGroupAddonStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputGroupAddonStyle, [{
    type: Injectable
  }], null, null);
})();
var INPUTGROUPADDON_INSTANCE = new InjectionToken("INPUTGROUPADDON_INSTANCE");
var InputGroupAddon = class _InputGroupAddon extends BaseComponent {
  componentName = "InputGroupAddon";
  _componentStyle = inject(InputGroupAddonStyle);
  $pcInputGroupAddon = inject(INPUTGROUPADDON_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  get hostStyle() {
    return this.style;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275InputGroupAddon_BaseFactory;
    return function InputGroupAddon_Factory(__ngFactoryType__) {
      return (\u0275InputGroupAddon_BaseFactory || (\u0275InputGroupAddon_BaseFactory = \u0275\u0275getInheritedFactory(_InputGroupAddon)))(__ngFactoryType__ || _InputGroupAddon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _InputGroupAddon,
    selectors: [["p-inputgroup-addon"], ["p-inputGroupAddon"]],
    hostVars: 4,
    hostBindings: function InputGroupAddon_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275styleMap(ctx.hostStyle);
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      style: "style",
      styleClass: "styleClass"
    },
    features: [\u0275\u0275ProvidersFeature([InputGroupAddonStyle, {
      provide: INPUTGROUPADDON_INSTANCE,
      useExisting: _InputGroupAddon
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _InputGroupAddon
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c03,
    decls: 1,
    vars: 0,
    template: function InputGroupAddon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    dependencies: [BindModule],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputGroupAddon, [{
    type: Component,
    args: [{
      selector: "p-inputgroup-addon, p-inputGroupAddon",
      template: ` <ng-content></ng-content> `,
      standalone: true,
      imports: [BindModule],
      host: {
        "[class]": "cn(cx('root'), styleClass)"
      },
      providers: [InputGroupAddonStyle, {
        provide: INPUTGROUPADDON_INSTANCE,
        useExisting: InputGroupAddon
      }, {
        provide: PARENT_INSTANCE,
        useExisting: InputGroupAddon
      }],
      hostDirectives: [Bind]
    }]
  }], null, {
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    hostStyle: [{
      type: HostBinding,
      args: ["style"]
    }]
  });
})();
var InputGroupAddonModule = class _InputGroupAddonModule {
  static \u0275fac = function InputGroupAddonModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputGroupAddonModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _InputGroupAddonModule,
    imports: [InputGroupAddon, SharedModule],
    exports: [InputGroupAddon, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [InputGroupAddon, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputGroupAddonModule, [{
    type: NgModule,
    args: [{
      imports: [InputGroupAddon, SharedModule],
      exports: [InputGroupAddon, SharedModule]
    }]
  }], null, null);
})();

export {
  Tag,
  TagModule,
  InputGroup,
  InputGroupModule,
  InputGroupAddon,
  InputGroupAddonModule
};
//# sourceMappingURL=chunk-4673KVKI.js.map
