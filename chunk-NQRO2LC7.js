import {
  AutoFocus,
  BaseEditableHolder,
  Bind,
  BindModule,
  NG_VALUE_ACCESSOR,
  NgControl,
  PARENT_INSTANCE
} from "./chunk-QN4TTD5X.js";
import {
  BaseStyle,
  CommonModule,
  SharedModule
} from "./chunk-7YP54JN5.js";
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  Output,
  ViewChild,
  booleanAttribute,
  computed,
  forwardRef,
  inject,
  input,
  numberAttribute,
  setClassMetadata,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵviewQuery
} from "./chunk-KRHY6Z2H.js";

// node_modules/@primeuix/styles/dist/radiobutton/index.mjs
var style = "\n    .p-radiobutton {\n        position: relative;\n        display: inline-flex;\n        user-select: none;\n        vertical-align: bottom;\n        width: dt('radiobutton.width');\n        height: dt('radiobutton.height');\n    }\n\n    .p-radiobutton-input {\n        cursor: pointer;\n        appearance: none;\n        position: absolute;\n        top: 0;\n        inset-inline-start: 0;\n        width: 100%;\n        height: 100%;\n        padding: 0;\n        margin: 0;\n        opacity: 0;\n        z-index: 1;\n        outline: 0 none;\n        border: 1px solid transparent;\n        border-radius: 50%;\n    }\n\n    .p-radiobutton-box {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        border-radius: 50%;\n        border: 1px solid dt('radiobutton.border.color');\n        background: dt('radiobutton.background');\n        width: dt('radiobutton.width');\n        height: dt('radiobutton.height');\n        transition:\n            background dt('radiobutton.transition.duration'),\n            color dt('radiobutton.transition.duration'),\n            border-color dt('radiobutton.transition.duration'),\n            box-shadow dt('radiobutton.transition.duration'),\n            outline-color dt('radiobutton.transition.duration');\n        outline-color: transparent;\n        box-shadow: dt('radiobutton.shadow');\n    }\n\n    .p-radiobutton-icon {\n        transition-duration: dt('radiobutton.transition.duration');\n        background: transparent;\n        font-size: dt('radiobutton.icon.size');\n        width: dt('radiobutton.icon.size');\n        height: dt('radiobutton.icon.size');\n        border-radius: 50%;\n        backface-visibility: hidden;\n        transform: translateZ(0) scale(0.1);\n    }\n\n    .p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {\n        border-color: dt('radiobutton.hover.border.color');\n    }\n\n    .p-radiobutton-checked .p-radiobutton-box {\n        border-color: dt('radiobutton.checked.border.color');\n        background: dt('radiobutton.checked.background');\n    }\n\n    .p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {\n        background: dt('radiobutton.icon.checked.color');\n        transform: translateZ(0) scale(1, 1);\n        visibility: visible;\n    }\n\n    .p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {\n        border-color: dt('radiobutton.checked.hover.border.color');\n        background: dt('radiobutton.checked.hover.background');\n    }\n\n    .p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {\n        background: dt('radiobutton.icon.checked.hover.color');\n    }\n\n    .p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {\n        border-color: dt('radiobutton.focus.border.color');\n        box-shadow: dt('radiobutton.focus.ring.shadow');\n        outline: dt('radiobutton.focus.ring.width') dt('radiobutton.focus.ring.style') dt('radiobutton.focus.ring.color');\n        outline-offset: dt('radiobutton.focus.ring.offset');\n    }\n\n    .p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {\n        border-color: dt('radiobutton.checked.focus.border.color');\n    }\n\n    .p-radiobutton.p-invalid > .p-radiobutton-box {\n        border-color: dt('radiobutton.invalid.border.color');\n    }\n\n    .p-radiobutton.p-variant-filled .p-radiobutton-box {\n        background: dt('radiobutton.filled.background');\n    }\n\n    .p-radiobutton.p-variant-filled.p-radiobutton-checked .p-radiobutton-box {\n        background: dt('radiobutton.checked.background');\n    }\n\n    .p-radiobutton.p-variant-filled:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box {\n        background: dt('radiobutton.checked.hover.background');\n    }\n\n    .p-radiobutton.p-disabled {\n        opacity: 1;\n    }\n\n    .p-radiobutton.p-disabled .p-radiobutton-box {\n        background: dt('radiobutton.disabled.background');\n        border-color: dt('radiobutton.checked.disabled.border.color');\n    }\n\n    .p-radiobutton-checked.p-disabled .p-radiobutton-box .p-radiobutton-icon {\n        background: dt('radiobutton.icon.disabled.color');\n    }\n\n    .p-radiobutton-sm,\n    .p-radiobutton-sm .p-radiobutton-box {\n        width: dt('radiobutton.sm.width');\n        height: dt('radiobutton.sm.height');\n    }\n\n    .p-radiobutton-sm .p-radiobutton-icon {\n        font-size: dt('radiobutton.icon.sm.size');\n        width: dt('radiobutton.icon.sm.size');\n        height: dt('radiobutton.icon.sm.size');\n    }\n\n    .p-radiobutton-lg,\n    .p-radiobutton-lg .p-radiobutton-box {\n        width: dt('radiobutton.lg.width');\n        height: dt('radiobutton.lg.height');\n    }\n\n    .p-radiobutton-lg .p-radiobutton-icon {\n        font-size: dt('radiobutton.icon.lg.size');\n        width: dt('radiobutton.icon.lg.size');\n        height: dt('radiobutton.icon.lg.size');\n    }\n";

// node_modules/primeng/fesm2022/primeng-radiobutton.mjs
var _c0 = ["input"];
var style2 = (
  /*css*/
  `
    ${style}

    /* For PrimeNG */
    p-radioButton.ng-invalid.ng-dirty .p-radiobutton-box,
    p-radio-button.ng-invalid.ng-dirty .p-radiobutton-box,
    p-radiobutton.ng-invalid.ng-dirty .p-radiobutton-box {
        border-color: dt('radiobutton.invalid.border.color');
    }
`
);
var classes = {
  root: ({
    instance
  }) => ["p-radiobutton p-component", {
    "p-radiobutton-checked": instance.checked,
    "p-disabled": instance.$disabled(),
    "p-invalid": instance.invalid(),
    "p-variant-filled": instance.$variant() === "filled",
    "p-radiobutton-sm p-inputfield-sm": instance.size() === "small",
    "p-radiobutton-lg p-inputfield-lg": instance.size() === "large"
  }],
  box: "p-radiobutton-box",
  input: "p-radiobutton-input",
  icon: "p-radiobutton-icon"
};
var RadioButtonStyle = class _RadioButtonStyle extends BaseStyle {
  name = "radiobutton";
  style = style2;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275RadioButtonStyle_BaseFactory;
    return function RadioButtonStyle_Factory(__ngFactoryType__) {
      return (\u0275RadioButtonStyle_BaseFactory || (\u0275RadioButtonStyle_BaseFactory = \u0275\u0275getInheritedFactory(_RadioButtonStyle)))(__ngFactoryType__ || _RadioButtonStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _RadioButtonStyle,
    factory: _RadioButtonStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioButtonStyle, [{
    type: Injectable
  }], null, null);
})();
var RadioButtonClasses;
(function(RadioButtonClasses2) {
  RadioButtonClasses2["root"] = "p-radiobutton";
  RadioButtonClasses2["box"] = "p-radiobutton-box";
  RadioButtonClasses2["input"] = "p-radiobutton-input";
  RadioButtonClasses2["icon"] = "p-radiobutton-icon";
})(RadioButtonClasses || (RadioButtonClasses = {}));
var RADIOBUTTON_INSTANCE = new InjectionToken("RADIOBUTTON_INSTANCE");
var RADIO_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioButton),
  multi: true
};
var RadioControlRegistry = class _RadioControlRegistry {
  accessors = [];
  add(control, accessor) {
    this.accessors.push([control, accessor]);
  }
  remove(accessor) {
    this.accessors = this.accessors.filter((c) => {
      return c[1] !== accessor;
    });
  }
  select(accessor) {
    this.accessors.forEach((c) => {
      if (this.isSameGroup(c, accessor) && c[1] !== accessor) {
        c[1].writeValue(accessor.value);
      }
    });
  }
  isSameGroup(controlPair, accessor) {
    if (!controlPair[0].control) {
      return false;
    }
    return controlPair[0].control.root === accessor.control.control.root && controlPair[1].name() === accessor.name();
  }
  static \u0275fac = function RadioControlRegistry_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RadioControlRegistry)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _RadioControlRegistry,
    factory: _RadioControlRegistry.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlRegistry, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var RadioButton = class _RadioButton extends BaseEditableHolder {
  componentName = "RadioButton";
  $pcRadioButton = inject(RADIOBUTTON_INSTANCE, {
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
   * Value of the radiobutton.
   * @group Props
   */
  value;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex;
  /**
   * Identifier of the focus input to match a label defined for the component.
   * @group Props
   */
  inputId;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Used to define a string that labels the input element.
   * @group Props
   */
  ariaLabel;
  /**
   * Style class of the component.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Allows to select a boolean value.
   * @group Props
   */
  binary;
  /**
   * Specifies the input variant of the component.
   * @defaultValue undefined
   * @group Props
   */
  variant = input(...ngDevMode ? [void 0, {
    debugName: "variant"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Specifies the size of the component.
   * @defaultValue undefined
   * @group Props
   */
  size = input(...ngDevMode ? [void 0, {
    debugName: "size"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Callback to invoke on radio button click.
   * @param {RadioButtonClickEvent} event - Custom click event.
   * @group Emits
   */
  onClick = new EventEmitter();
  /**
   * Callback to invoke when the receives focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to invoke when the loses focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  inputViewChild;
  $variant = computed(() => this.variant() || this.config.inputStyle() || this.config.inputVariant(), ...ngDevMode ? [{
    debugName: "$variant"
  }] : (
    /* istanbul ignore next */
    []
  ));
  checked;
  focused;
  control;
  _componentStyle = inject(RadioButtonStyle);
  injector = inject(Injector);
  registry = inject(RadioControlRegistry);
  onInit() {
    this.control = this.injector.get(NgControl);
    this.registry.add(this.control, this);
  }
  onChange(event) {
    if (!this.$disabled()) {
      this.select(event);
    }
  }
  select(event) {
    if (!this.$disabled()) {
      this.checked = true;
      this.writeModelValue(this.checked);
      this.onModelChange(this.value);
      this.registry.select(this);
      this.onClick.emit({
        originalEvent: event,
        value: this.value
      });
    }
  }
  onInputFocus(event) {
    this.focused = true;
    this.onFocus.emit(event);
  }
  onInputBlur(event) {
    this.focused = false;
    this.onModelTouched();
    this.onBlur.emit(event);
  }
  /**
   * Applies focus to input field.
   * @group Method
   */
  focus() {
    this.inputViewChild.nativeElement.focus();
  }
  /**
   * @override
   *
   * @see {@link BaseEditableHolder.writeControlValue}
   * Writes the value to the control.
   */
  writeControlValue(value, setModelValue) {
    this.checked = !this.binary ? value == this.value : !!value;
    setModelValue(this.checked);
    this.cd.markForCheck();
  }
  onDestroy() {
    this.registry.remove(this);
  }
  get dataP() {
    return this.cn({
      invalid: this.invalid(),
      checked: this.checked,
      disabled: this.$disabled(),
      filled: this.$variant() === "filled",
      [this.size()]: this.size()
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275RadioButton_BaseFactory;
    return function RadioButton_Factory(__ngFactoryType__) {
      return (\u0275RadioButton_BaseFactory || (\u0275RadioButton_BaseFactory = \u0275\u0275getInheritedFactory(_RadioButton)))(__ngFactoryType__ || _RadioButton);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _RadioButton,
    selectors: [["p-radioButton"], ["p-radiobutton"], ["p-radio-button"]],
    viewQuery: function RadioButton_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.inputViewChild = _t.first);
      }
    },
    hostVars: 5,
    hostBindings: function RadioButton_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("data-p-disabled", ctx.$disabled())("data-p-checked", ctx.checked)("data-p", ctx.dataP);
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    inputs: {
      value: "value",
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      inputId: "inputId",
      ariaLabelledBy: "ariaLabelledBy",
      ariaLabel: "ariaLabel",
      styleClass: "styleClass",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      binary: [2, "binary", "binary", booleanAttribute],
      variant: [1, "variant"],
      size: [1, "size"]
    },
    outputs: {
      onClick: "onClick",
      onFocus: "onFocus",
      onBlur: "onBlur"
    },
    features: [\u0275\u0275ProvidersFeature([RADIO_VALUE_ACCESSOR, RadioButtonStyle, {
      provide: RADIOBUTTON_INSTANCE,
      useExisting: _RadioButton
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _RadioButton
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    decls: 4,
    vars: 20,
    consts: [["input", ""], ["type", "radio", 3, "focus", "blur", "change", "checked", "pAutoFocus", "pBind"], [3, "pBind"]],
    template: function RadioButton_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "input", 1, 0);
        \u0275\u0275listener("focus", function RadioButton_Template_input_focus_0_listener($event) {
          return ctx.onInputFocus($event);
        })("blur", function RadioButton_Template_input_blur_0_listener($event) {
          return ctx.onInputBlur($event);
        })("change", function RadioButton_Template_input_change_0_listener($event) {
          return ctx.onChange($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div", 2);
        \u0275\u0275element(3, "div", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("input"));
        \u0275\u0275property("checked", ctx.checked)("pAutoFocus", ctx.autofocus)("pBind", ctx.ptm("input"));
        \u0275\u0275attribute("id", ctx.inputId)("name", ctx.name())("required", ctx.required() ? "" : void 0)("disabled", ctx.$disabled() ? "" : void 0)("value", ctx.modelValue())("aria-labelledby", ctx.ariaLabelledBy)("aria-label", ctx.ariaLabel)("aria-checked", ctx.checked)("tabindex", ctx.tabindex);
        \u0275\u0275advance(2);
        \u0275\u0275classMap(ctx.cx("box"));
        \u0275\u0275property("pBind", ctx.ptm("box"));
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("icon"));
        \u0275\u0275property("pBind", ctx.ptm("icon"));
      }
    },
    dependencies: [CommonModule, AutoFocus, SharedModule, BindModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioButton, [{
    type: Component,
    args: [{
      selector: "p-radioButton, p-radiobutton, p-radio-button",
      standalone: true,
      imports: [CommonModule, AutoFocus, SharedModule, BindModule],
      template: `
        <input
            #input
            [attr.id]="inputId"
            type="radio"
            [class]="cx('input')"
            [attr.name]="name()"
            [attr.required]="required() ? '' : undefined"
            [attr.disabled]="$disabled() ? '' : undefined"
            [checked]="checked"
            [attr.value]="modelValue()"
            [attr.aria-labelledby]="ariaLabelledBy"
            [attr.aria-label]="ariaLabel"
            [attr.aria-checked]="checked"
            [attr.tabindex]="tabindex"
            (focus)="onInputFocus($event)"
            (blur)="onInputBlur($event)"
            (change)="onChange($event)"
            [pAutoFocus]="autofocus"
            [pBind]="ptm('input')"
        />
        <div [class]="cx('box')" [pBind]="ptm('box')">
            <div [class]="cx('icon')" [pBind]="ptm('icon')"></div>
        </div>
    `,
      providers: [RADIO_VALUE_ACCESSOR, RadioButtonStyle, {
        provide: RADIOBUTTON_INSTANCE,
        useExisting: RadioButton
      }, {
        provide: PARENT_INSTANCE,
        useExisting: RadioButton
      }],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class]": "cx('root')",
        "[attr.data-p-disabled]": "$disabled()",
        "[attr.data-p-checked]": "checked",
        "[attr.data-p]": "dataP"
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    value: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    inputId: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    binary: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    variant: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "variant",
        required: false
      }]
    }],
    size: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "size",
        required: false
      }]
    }],
    onClick: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    inputViewChild: [{
      type: ViewChild,
      args: ["input"]
    }]
  });
})();
var RadioButtonModule = class _RadioButtonModule {
  static \u0275fac = function RadioButtonModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RadioButtonModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _RadioButtonModule,
    imports: [RadioButton, SharedModule],
    exports: [RadioButton, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [RadioButton, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioButtonModule, [{
    type: NgModule,
    args: [{
      imports: [RadioButton, SharedModule],
      exports: [RadioButton, SharedModule]
    }]
  }], null, null);
})();

export {
  RadioButton,
  RadioButtonModule
};
//# sourceMappingURL=chunk-NQRO2LC7.js.map
