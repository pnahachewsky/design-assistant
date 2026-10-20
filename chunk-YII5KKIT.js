import {
  UserSettingsComponent
} from "./chunk-N437RI73.js";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupAddonModule,
  InputGroupModule,
  Tag,
  TagModule
} from "./chunk-7EZBCBFO.js";
import {
  Textarea,
  TextareaModule
} from "./chunk-X3PHMRYB.js";
import {
  Divider,
  DividerModule
} from "./chunk-UTOG6HJ7.js";
import "./chunk-WLUUE74Y.js";
import {
  Message,
  MessageModule
} from "./chunk-HIIG3TAV.js";
import "./chunk-Y6P4PL7N.js";
import "./chunk-AU75ZWE3.js";
import "./chunk-2N7OESPV.js";
import "./chunk-FO2K6X5T.js";
import "./chunk-WMXZG7VZ.js";
import "./chunk-ICFR3RAH.js";
import {
  Overlay,
  OverlayModule
} from "./chunk-3SPBARR4.js";
import {
  AutoFocus,
  AutoFocusModule,
  Badge,
  BadgeModule,
  BaseEditableHolder,
  BaseStyle,
  Bind,
  Button,
  ButtonModule,
  DefaultValueAccessor,
  FormsModule,
  InputText,
  InputTextModule,
  MotionModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel,
  OverlayService,
  PARENT_INSTANCE,
  PrimeNG,
  SharedModule,
  TranslationKeys,
  UserSettingsService,
  zindexutils
} from "./chunk-AGPMTYRP.js";
import "./chunk-DMOF7S63.js";
import {
  CommonModule,
  NgIf,
  NgTemplateOutlet
} from "./chunk-MDI4WJGA.js";
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  Output,
  TranslatePipe,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  effect,
  forwardRef,
  inject,
  input,
  setClassMetadata,
  signal,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
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
import "./chunk-DKTF6WIM.js";
import "./chunk-G55EJPVD.js";
import "./chunk-7XEOGBZ2.js";
import "./chunk-3RPP55HA.js";
import "./chunk-DBOW7BSZ.js";
import "./chunk-XMWDIV4O.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-YCXP4XZS.js";

// node_modules/@primeuix/styles/dist/colorpicker/index.mjs
var style = "\n    .p-colorpicker {\n        display: inline-block;\n        position: relative;\n    }\n\n    .p-colorpicker-dragging {\n        cursor: pointer;\n    }\n\n    .p-colorpicker-preview {\n        width: dt('colorpicker.preview.width');\n        height: dt('colorpicker.preview.height');\n        padding: 0;\n        border: 0 none;\n        border-radius: dt('colorpicker.preview.border.radius');\n        transition:\n            background dt('colorpicker.transition.duration'),\n            color dt('colorpicker.transition.duration'),\n            border-color dt('colorpicker.transition.duration'),\n            outline-color dt('colorpicker.transition.duration'),\n            box-shadow dt('colorpicker.transition.duration');\n        outline-color: transparent;\n        cursor: pointer;\n    }\n\n    .p-colorpicker-preview:enabled:focus-visible {\n        border-color: dt('colorpicker.preview.focus.border.color');\n        box-shadow: dt('colorpicker.preview.focus.ring.shadow');\n        outline: dt('colorpicker.preview.focus.ring.width') dt('colorpicker.preview.focus.ring.style') dt('colorpicker.preview.focus.ring.color');\n        outline-offset: dt('colorpicker.preview.focus.ring.offset');\n    }\n\n    .p-colorpicker-panel {\n        background: dt('colorpicker.panel.background');\n        border: 1px solid dt('colorpicker.panel.border.color');\n        border-radius: dt('colorpicker.panel.border.radius');\n        box-shadow: dt('colorpicker.panel.shadow');\n        width: 193px;\n        height: 166px;\n        position: absolute;\n        top: 0;\n        left: 0;\n    }\n\n    .p-colorpicker-panel-inline {\n        box-shadow: none;\n        position: static;\n    }\n\n    .p-colorpicker-content {\n        position: relative;\n    }\n\n    .p-colorpicker-color-selector {\n        width: 150px;\n        height: 150px;\n        inset-block-start: 8px;\n        inset-inline-start: 8px;\n        position: absolute;\n    }\n\n    .p-colorpicker-color-background {\n        width: 100%;\n        height: 100%;\n        background: linear-gradient(to top, #000 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);\n    }\n\n    .p-colorpicker-color-handle {\n        position: absolute;\n        inset-block-start: 0px;\n        inset-inline-start: 150px;\n        border-radius: 100%;\n        width: 10px;\n        height: 10px;\n        border-width: 1px;\n        border-style: solid;\n        margin: -5px 0 0 -5px;\n        cursor: pointer;\n        opacity: 0.85;\n        border-color: dt('colorpicker.handle.color');\n    }\n\n    .p-colorpicker-hue {\n        width: 17px;\n        height: 150px;\n        inset-block-start: 8px;\n        inset-inline-start: 167px;\n        position: absolute;\n        opacity: 0.85;\n        background: linear-gradient(0deg, red 0, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, red);\n    }\n\n    .p-colorpicker-hue-handle {\n        position: absolute;\n        inset-block-start: 150px;\n        inset-inline-start: 0px;\n        width: 21px;\n        margin-inline-start: -2px;\n        margin-block-start: -5px;\n        height: 10px;\n        border-width: 2px;\n        border-style: solid;\n        opacity: 0.85;\n        cursor: pointer;\n        border-color: dt('colorpicker.handle.color');\n    }\n";

// node_modules/primeng/fesm2022/primeng-colorpicker.mjs
var _c0 = ["input"];
var _c1 = ["overlay"];
var _c2 = ["colorSelector"];
var _c3 = ["colorHandle"];
var _c4 = ["hue"];
var _c5 = ["hueHandle"];
function ColorPicker_input_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 9, 2);
    \u0275\u0275listener("click", function ColorPicker_input_0_Template_input_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInputClick());
    })("keydown", function ColorPicker_input_0_Template_input_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInputKeydown($event));
    })("focus", function ColorPicker_input_0_Template_input_focus_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInputFocus());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.cx("preview"));
    \u0275\u0275styleProp("background-color", ctx_r2.inputBgColor);
    \u0275\u0275property("pAutoFocus", ctx_r2.autofocus)("pBind", ctx_r2.ptm("preview"));
    \u0275\u0275attribute("tabindex", ctx_r2.tabindex)("disabled", ctx_r2.$disabled() ? "" : void 0)("id", ctx_r2.inputId)("aria-label", ctx_r2.ariaLabel);
  }
}
function ColorPicker_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 10)(2, "div", 11, 3);
    \u0275\u0275listener("touchstart", function ColorPicker_ng_template_3_Template_div_touchstart_2_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onColorDragStart($event));
    })("touchmove", function ColorPicker_ng_template_3_Template_div_touchmove_2_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDrag($event));
    })("touchend", function ColorPicker_ng_template_3_Template_div_touchend_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDragEnd());
    })("mousedown", function ColorPicker_ng_template_3_Template_div_mousedown_2_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onColorMousedown($event));
    });
    \u0275\u0275elementStart(4, "div", 10);
    \u0275\u0275element(5, "div", 10, 4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 12, 5);
    \u0275\u0275listener("mousedown", function ColorPicker_ng_template_3_Template_div_mousedown_7_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onHueMousedown($event));
    })("touchstart", function ColorPicker_ng_template_3_Template_div_touchstart_7_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onHueDragStart($event));
    })("touchmove", function ColorPicker_ng_template_3_Template_div_touchmove_7_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDrag($event));
    })("touchend", function ColorPicker_ng_template_3_Template_div_touchend_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDragEnd());
    });
    \u0275\u0275element(9, "div", 10, 6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.cx("panel"));
    \u0275\u0275property("pBind", ctx_r2.ptm("panel"));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.cx("content"));
    \u0275\u0275property("pBind", ctx_r2.ptm("content"));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.cx("colorSelector"));
    \u0275\u0275property("pBind", ctx_r2.ptm("colorSelector"));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.cx("colorBackground"));
    \u0275\u0275property("pBind", ctx_r2.ptm("colorBackground"));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.cx("colorHandle"));
    \u0275\u0275property("pBind", ctx_r2.ptm("colorHandle"));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.cx("hue"));
    \u0275\u0275property("pBind", ctx_r2.ptm("hue"));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.cx("hueHandle"));
    \u0275\u0275property("pBind", ctx_r2.ptm("hueHandle"));
  }
}
var classes = {
  root: ({
    instance
  }) => ["p-colorpicker p-component", {
    "p-colorpicker-overlay": !instance.inline,
    "p-colorpicker-dragging": instance.colorDragging || instance.hueDragging
  }],
  preview: ({
    instance
  }) => ["p-colorpicker-preview", {
    "p-disabled": instance.$disabled()
  }],
  panel: ({
    instance
  }) => ["p-colorpicker-panel", {
    "p-colorpicker-panel-inline": instance.inline,
    "p-disabled": instance.$disabled()
  }],
  content: "p-colorpicker-content",
  colorSelector: "p-colorpicker-color-selector",
  colorBackground: "p-colorpicker-color-background",
  colorHandle: "p-colorpicker-color-handle",
  hue: "p-colorpicker-hue",
  hueHandle: "p-colorpicker-hue-handle"
};
var ColorPickerStyle = class _ColorPickerStyle extends BaseStyle {
  name = "colorpicker";
  style = style;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ColorPickerStyle_BaseFactory;
    return function ColorPickerStyle_Factory(__ngFactoryType__) {
      return (\u0275ColorPickerStyle_BaseFactory || (\u0275ColorPickerStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ColorPickerStyle)))(__ngFactoryType__ || _ColorPickerStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ColorPickerStyle,
    factory: _ColorPickerStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorPickerStyle, [{
    type: Injectable
  }], null, null);
})();
var ColorPickerClasses;
(function(ColorPickerClasses2) {
  ColorPickerClasses2["root"] = "p-colorpicker";
  ColorPickerClasses2["preview"] = "p-colorpicker-preview";
  ColorPickerClasses2["panel"] = "p-colorpicker-panel";
  ColorPickerClasses2["colorSelector"] = "p-colorpicker-color-selector";
  ColorPickerClasses2["colorBackground"] = "p-colorpicker-color-background";
  ColorPickerClasses2["colorHandle"] = "p-colorpicker-color-handle";
  ColorPickerClasses2["hue"] = "p-colorpicker-hue";
  ColorPickerClasses2["hueHandle"] = "p-colorpicker-hue-handle";
})(ColorPickerClasses || (ColorPickerClasses = {}));
var COLORPICKER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ColorPicker),
  multi: true
};
var COLORPICKER_INSTANCE = new InjectionToken("COLORPICKER_INSTANCE");
var ColorPicker = class _ColorPicker extends BaseEditableHolder {
  overlayService;
  componentName = "ColorPicker";
  $pcColorPicker = inject(COLORPICKER_INSTANCE, {
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
   * Whether to display as an overlay or not.
   * @group Props
   */
  inline;
  /**
   * Format to use in value binding.
   * @group Props
   */
  format = "hex";
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex;
  /**
   * Identifier of the focus input to match a label defined for the dropdown.
   * @group Props
   */
  inputId;
  /**
   * Whether to automatically manage layering.
   * @group Props
   */
  autoZIndex = true;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Default color to display initially when model value is not present.
   * @group Props
   */
  defaultColor = "ff0000";
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
   * Whether to use overlay API feature. The properties of overlay API can be used like an object in it.
   * @group Props
   */
  overlayOptions = input(void 0, ...ngDevMode ? [{
    debugName: "overlayOptions"
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
   * Callback to invoke on value change.
   * @param {ColorPickerChangeEvent} event - Custom value change event.
   * @group Emits
   */
  onChange = new EventEmitter();
  /**
   * Callback to invoke on panel is shown.
   * @group Emits
   */
  onShow = new EventEmitter();
  /**
   * Callback to invoke on panel is hidden.
   * @group Emits
   */
  onHide = new EventEmitter();
  inputViewChild;
  overlayViewChild;
  $appendTo = computed(() => this.appendTo() || this.config.overlayAppendTo(), ...ngDevMode ? [{
    debugName: "$appendTo"
  }] : (
    /* istanbul ignore next */
    []
  ));
  value = {
    h: 0,
    s: 100,
    b: 100
  };
  inputBgColor;
  shown;
  overlayVisible;
  documentMousemoveListener;
  documentMouseupListener;
  documentHueMoveListener;
  scrollHandler;
  colorDragging;
  hueDragging;
  overlay;
  colorSelectorViewChild;
  colorHandleViewChild;
  hueViewChild;
  hueHandleViewChild;
  _componentStyle = inject(ColorPickerStyle);
  constructor(overlayService) {
    super();
    this.overlayService = overlayService;
  }
  set colorSelector(element) {
    this.colorSelectorViewChild = element;
  }
  set colorHandle(element) {
    this.colorHandleViewChild = element;
  }
  set hue(element) {
    this.hueViewChild = element;
  }
  set hueHandle(element) {
    this.hueHandleViewChild = element;
  }
  get ariaLabel() {
    return this.config?.getTranslation(TranslationKeys.ARIA)[TranslationKeys.SELECT_COLOR];
  }
  onHueMousedown(event) {
    if (this.$disabled()) {
      return;
    }
    this.bindDocumentMousemoveListener();
    this.bindDocumentMouseupListener();
    this.hueDragging = true;
    this.pickHue(event);
  }
  onHueDragStart(event) {
    if (this.$disabled()) {
      return;
    }
    this.hueDragging = true;
    this.pickHue(event, event.changedTouches[0]);
  }
  onColorDragStart(event) {
    if (this.$disabled()) {
      return;
    }
    this.colorDragging = true;
    this.pickColor(event, event.changedTouches[0]);
    this.el.nativeElement.setAttribute("p-colorpicker-dragging", "true");
  }
  pickHue(event, position) {
    let pageY = position ? position.pageY : event.pageY;
    let top = this.hueViewChild?.nativeElement.getBoundingClientRect().top + (this.document.defaultView.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0);
    this.value = this.validateHSB({
      h: Math.floor(360 * (150 - Math.max(0, Math.min(150, pageY - top))) / 150),
      s: this.value.s,
      b: this.value.b
    });
    this.updateColorSelector();
    this.updateUI();
    this.updateModel();
    this.onChange.emit({
      originalEvent: event,
      value: this.getValueToUpdate()
    });
  }
  onColorMousedown(event) {
    if (this.$disabled()) {
      return;
    }
    this.bindDocumentMousemoveListener();
    this.bindDocumentMouseupListener();
    this.colorDragging = true;
    this.pickColor(event);
  }
  onDrag(event) {
    if (this.colorDragging) {
      this.pickColor(event, event.changedTouches[0]);
      event.preventDefault();
    }
    if (this.hueDragging) {
      this.pickHue(event, event.changedTouches[0]);
      event.preventDefault();
    }
  }
  onDragEnd() {
    this.colorDragging = false;
    this.hueDragging = false;
    this.el.nativeElement.setAttribute("p-colorpicker-dragging", "false");
    this.unbindDocumentMousemoveListener();
    this.unbindDocumentMouseupListener();
  }
  pickColor(event, position) {
    let pageX = position ? position.pageX : event.pageX;
    let pageY = position ? position.pageY : event.pageY;
    let rect = this.colorSelectorViewChild?.nativeElement.getBoundingClientRect();
    let top = rect.top + (this.document.defaultView.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0);
    let left = rect.left + this.document.body.scrollLeft;
    let saturation = Math.floor(100 * Math.max(0, Math.min(150, pageX - left)) / 150);
    let brightness = Math.floor(100 * (150 - Math.max(0, Math.min(150, pageY - top))) / 150);
    this.value = this.validateHSB({
      h: this.value.h,
      s: saturation,
      b: brightness
    });
    this.updateUI();
    this.updateModel();
    this.onChange.emit({
      originalEvent: event,
      value: this.getValueToUpdate()
    });
  }
  getValueToUpdate() {
    let val;
    switch (this.format) {
      case "hex":
        val = "#" + this.HSBtoHEX(this.value);
        break;
      case "rgb":
        val = this.HSBtoRGB(this.value);
        break;
      case "hsb":
        val = this.value;
        break;
    }
    return val;
  }
  updateModel() {
    this.onModelChange(this.getValueToUpdate());
    this.cd.markForCheck();
  }
  updateColorSelector() {
    if (this.colorSelectorViewChild) {
      const hsb = {};
      hsb.s = 100;
      hsb.b = 100;
      hsb.h = this.value.h;
      this.colorSelectorViewChild.nativeElement.style.backgroundColor = "#" + this.HSBtoHEX(hsb);
    }
  }
  updateUI() {
    if (this.colorHandleViewChild && this.hueHandleViewChild?.nativeElement) {
      this.colorHandleViewChild.nativeElement.style.left = Math.floor(150 * this.value.s / 100) + "px";
      this.colorHandleViewChild.nativeElement.style.top = Math.floor(150 * (100 - this.value.b) / 100) + "px";
      this.hueHandleViewChild.nativeElement.style.top = Math.floor(150 - 150 * this.value.h / 360) + "px";
    }
    this.inputBgColor = "#" + this.HSBtoHEX(this.value);
  }
  onInputFocus() {
    this.onModelTouched();
  }
  show() {
    this.overlayVisible = true;
    this.cd.markForCheck();
  }
  onOverlayBeforeEnter() {
    if (!this.inline) {
      this.updateColorSelector();
      this.updateUI();
      this.onShow.emit({});
    }
  }
  onOverlayAfterLeave() {
    if (!this.inline) {
      this.onHide.emit({});
    }
  }
  hide() {
    this.overlayVisible = false;
    this.cd.markForCheck();
  }
  onInputClick() {
    this.togglePanel();
  }
  togglePanel() {
    if (!this.overlayVisible) this.show();
    else this.hide();
  }
  onInputKeydown(event) {
    switch (event.code) {
      case "Space":
        this.togglePanel();
        event.preventDefault();
        break;
      case "Escape":
      case "Tab":
        this.hide();
        break;
      default:
        break;
    }
  }
  onOverlayClick(event) {
    this.overlayService.add({
      originalEvent: event,
      target: this.el.nativeElement
    });
  }
  bindDocumentMousemoveListener() {
    if (!this.documentMousemoveListener) {
      const documentTarget = this.el ? this.el.nativeElement.ownerDocument : "document";
      this.documentMousemoveListener = this.renderer.listen(documentTarget, "mousemove", (event) => {
        if (this.colorDragging) {
          this.pickColor(event);
        }
        if (this.hueDragging) {
          this.pickHue(event);
        }
      });
    }
  }
  unbindDocumentMousemoveListener() {
    if (this.documentMousemoveListener) {
      this.documentMousemoveListener();
      this.documentMousemoveListener = null;
    }
  }
  bindDocumentMouseupListener() {
    if (!this.documentMouseupListener) {
      const documentTarget = this.el ? this.el.nativeElement.ownerDocument : "document";
      this.documentMouseupListener = this.renderer.listen(documentTarget, "mouseup", () => {
        this.colorDragging = false;
        this.hueDragging = false;
        this.unbindDocumentMousemoveListener();
        this.unbindDocumentMouseupListener();
      });
    }
  }
  unbindDocumentMouseupListener() {
    if (this.documentMouseupListener) {
      this.documentMouseupListener();
      this.documentMouseupListener = null;
    }
  }
  validateHSB(hsb) {
    return {
      h: Math.min(360, Math.max(0, hsb.h)),
      s: Math.min(100, Math.max(0, hsb.s)),
      b: Math.min(100, Math.max(0, hsb.b))
    };
  }
  validateRGB(rgb) {
    return {
      r: Math.min(255, Math.max(0, rgb.r)),
      g: Math.min(255, Math.max(0, rgb.g)),
      b: Math.min(255, Math.max(0, rgb.b))
    };
  }
  validateHEX(hex) {
    var len = 6 - hex.length;
    if (len > 0) {
      var o = [];
      for (var i = 0; i < len; i++) {
        o.push("0");
      }
      o.push(hex);
      hex = o.join("");
    }
    return hex;
  }
  HEXtoRGB(hex) {
    if (!hex || typeof hex !== "string") {
      return {
        r: 0,
        g: 0,
        b: 0
      };
    }
    let hexValue = parseInt(hex.indexOf("#") > -1 ? hex.substring(1) : hex, 16);
    return {
      r: hexValue >> 16,
      g: (hexValue & 65280) >> 8,
      b: hexValue & 255
    };
  }
  HEXtoHSB(hex) {
    return this.RGBtoHSB(this.HEXtoRGB(hex));
  }
  RGBtoHSB(rgb) {
    var hsb = {
      h: 0,
      s: 0,
      b: 0
    };
    var min = Math.min(rgb.r, rgb.g, rgb.b);
    var max = Math.max(rgb.r, rgb.g, rgb.b);
    var delta = max - min;
    hsb.b = max;
    hsb.s = max != 0 ? 255 * delta / max : 0;
    if (hsb.s != 0) {
      if (rgb.r == max) {
        hsb.h = (rgb.g - rgb.b) / delta;
      } else if (rgb.g == max) {
        hsb.h = 2 + (rgb.b - rgb.r) / delta;
      } else {
        hsb.h = 4 + (rgb.r - rgb.g) / delta;
      }
    } else {
      hsb.h = -1;
    }
    hsb.h *= 60;
    if (hsb.h < 0) {
      hsb.h += 360;
    }
    hsb.s *= 100 / 255;
    hsb.b *= 100 / 255;
    return hsb;
  }
  HSBtoRGB(hsb) {
    var rgb = {
      r: 0,
      g: 0,
      b: 0
    };
    let h = hsb.h;
    let s = hsb.s * 255 / 100;
    let v = hsb.b * 255 / 100;
    if (s == 0) {
      rgb = {
        r: v,
        g: v,
        b: v
      };
    } else {
      let t1 = v;
      let t2 = (255 - s) * v / 255;
      let t3 = (t1 - t2) * (h % 60) / 60;
      if (h == 360) h = 0;
      if (h < 60) {
        rgb.r = t1;
        rgb.b = t2;
        rgb.g = t2 + t3;
      } else if (h < 120) {
        rgb.g = t1;
        rgb.b = t2;
        rgb.r = t1 - t3;
      } else if (h < 180) {
        rgb.g = t1;
        rgb.r = t2;
        rgb.b = t2 + t3;
      } else if (h < 240) {
        rgb.b = t1;
        rgb.r = t2;
        rgb.g = t1 - t3;
      } else if (h < 300) {
        rgb.b = t1;
        rgb.g = t2;
        rgb.r = t2 + t3;
      } else if (h < 360) {
        rgb.r = t1;
        rgb.g = t2;
        rgb.b = t1 - t3;
      } else {
        rgb.r = 0;
        rgb.g = 0;
        rgb.b = 0;
      }
    }
    return {
      r: Math.round(rgb.r),
      g: Math.round(rgb.g),
      b: Math.round(rgb.b)
    };
  }
  RGBtoHEX(rgb) {
    var hex = [rgb.r.toString(16), rgb.g.toString(16), rgb.b.toString(16)];
    for (var key in hex) {
      if (hex[key].length == 1) {
        hex[key] = "0" + hex[key];
      }
    }
    return hex.join("");
  }
  HSBtoHEX(hsb) {
    return this.RGBtoHEX(this.HSBtoRGB(hsb));
  }
  onAfterViewInit() {
    if (this.inline) {
      this.updateColorSelector();
      this.updateUI();
    }
  }
  /**
   * @override
   *
   * @see {@link BaseEditableHolder.writeControlValue}
   * Writes the value to the control.
   */
  writeControlValue(value) {
    if (value) {
      switch (this.format) {
        case "hex":
          this.value = this.HEXtoHSB(value);
          break;
        case "rgb":
          this.value = this.RGBtoHSB(value);
          break;
        case "hsb":
          this.value = value;
          break;
      }
    } else {
      this.value = this.HEXtoHSB(this.defaultColor);
    }
    this.updateColorSelector();
    this.updateUI();
    this.cd.markForCheck();
  }
  onDestroy() {
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    if (this.overlayViewChild?.nativeElement && this.autoZIndex) {
      zindexutils.clear(this.overlayViewChild?.nativeElement);
    }
  }
  static \u0275fac = function ColorPicker_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ColorPicker)(\u0275\u0275directiveInject(OverlayService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ColorPicker,
    selectors: [["p-colorPicker"], ["p-colorpicker"], ["p-color-picker"]],
    viewQuery: function ColorPicker_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5)(_c1, 5)(_c2, 5)(_c3, 5)(_c4, 5)(_c5, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.inputViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.colorSelector = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.colorHandle = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.hue = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.hueHandle = _t.first);
      }
    },
    hostVars: 2,
    hostBindings: function ColorPicker_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      styleClass: "styleClass",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      inline: [2, "inline", "inline", booleanAttribute],
      format: "format",
      tabindex: "tabindex",
      inputId: "inputId",
      autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      defaultColor: "defaultColor",
      appendTo: [1, "appendTo"],
      overlayOptions: [1, "overlayOptions"],
      motionOptions: [1, "motionOptions"]
    },
    outputs: {
      onChange: "onChange",
      onShow: "onShow",
      onHide: "onHide"
    },
    features: [\u0275\u0275ProvidersFeature([COLORPICKER_VALUE_ACCESSOR, ColorPickerStyle, {
      provide: COLORPICKER_INSTANCE,
      useExisting: _ColorPicker
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _ColorPicker
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    decls: 5,
    vars: 10,
    consts: [["overlay", ""], ["content", ""], ["input", ""], ["colorSelector", ""], ["colorHandle", ""], ["hue", ""], ["hueHandle", ""], ["type", "text", "readonly", "", 3, "class", "backgroundColor", "pAutoFocus", "pBind", "click", "keydown", "focus", 4, "ngIf"], [3, "visibleChange", "onBeforeEnter", "onAfterLeave", "onHide", "hostAttrSelector", "visible", "options", "target", "inline", "appendTo", "unstyled", "pt", "motionOptions"], ["type", "text", "readonly", "", 3, "click", "keydown", "focus", "pAutoFocus", "pBind"], [3, "pBind"], [3, "touchstart", "touchmove", "touchend", "mousedown", "pBind"], [3, "mousedown", "touchstart", "touchmove", "touchend", "pBind"]],
    template: function ColorPicker_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275template(0, ColorPicker_input_0_Template, 2, 10, "input", 7);
        \u0275\u0275elementStart(1, "p-overlay", 8, 0);
        \u0275\u0275twoWayListener("visibleChange", function ColorPicker_Template_p_overlay_visibleChange_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.overlayVisible, $event) || (ctx.overlayVisible = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("onBeforeEnter", function ColorPicker_Template_p_overlay_onBeforeEnter_1_listener() {
          return ctx.onOverlayBeforeEnter();
        })("onAfterLeave", function ColorPicker_Template_p_overlay_onAfterLeave_1_listener() {
          return ctx.onOverlayAfterLeave();
        })("onHide", function ColorPicker_Template_p_overlay_onHide_1_listener() {
          return ctx.hide();
        });
        \u0275\u0275template(3, ColorPicker_ng_template_3_Template, 11, 21, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", !ctx.inline);
        \u0275\u0275advance();
        \u0275\u0275property("hostAttrSelector", ctx.$attrSelector);
        \u0275\u0275twoWayProperty("visible", ctx.overlayVisible);
        \u0275\u0275property("options", ctx.overlayOptions())("target", "@parent")("inline", ctx.inline)("appendTo", ctx.$appendTo())("unstyled", ctx.unstyled())("pt", ctx.ptm("pcOverlay"))("motionOptions", ctx.motionOptions());
      }
    },
    dependencies: [CommonModule, NgIf, AutoFocusModule, AutoFocus, SharedModule, Bind, MotionModule, OverlayModule, Overlay],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorPicker, [{
    type: Component,
    args: [{
      selector: "p-colorPicker, p-colorpicker, p-color-picker",
      standalone: true,
      imports: [CommonModule, AutoFocusModule, SharedModule, Bind, MotionModule, OverlayModule],
      hostDirectives: [Bind],
      template: `
        <input
            *ngIf="!inline"
            #input
            type="text"
            [class]="cx('preview')"
            readonly
            [attr.tabindex]="tabindex"
            [attr.disabled]="$disabled() ? '' : undefined"
            (click)="onInputClick()"
            (keydown)="onInputKeydown($event)"
            (focus)="onInputFocus()"
            [attr.id]="inputId"
            [style.backgroundColor]="inputBgColor"
            [attr.aria-label]="ariaLabel"
            [pAutoFocus]="autofocus"
            [pBind]="ptm('preview')"
        />

        <p-overlay
            #overlay
            [hostAttrSelector]="$attrSelector"
            [(visible)]="overlayVisible"
            [options]="overlayOptions()"
            [target]="'@parent'"
            [inline]="inline"
            [appendTo]="$appendTo()"
            [unstyled]="unstyled()"
            [pt]="ptm('pcOverlay')"
            [motionOptions]="motionOptions()"
            (onBeforeEnter)="onOverlayBeforeEnter()"
            (onAfterLeave)="onOverlayAfterLeave()"
            (onHide)="hide()"
        >
            <ng-template #content>
                <div [class]="cx('panel')" [pBind]="ptm('panel')">
                    <div [class]="cx('content')" [pBind]="ptm('content')">
                        <div #colorSelector [class]="cx('colorSelector')" (touchstart)="onColorDragStart($event)" (touchmove)="onDrag($event)" (touchend)="onDragEnd()" (mousedown)="onColorMousedown($event)" [pBind]="ptm('colorSelector')">
                            <div [class]="cx('colorBackground')" [pBind]="ptm('colorBackground')">
                                <div #colorHandle [class]="cx('colorHandle')" [pBind]="ptm('colorHandle')"></div>
                            </div>
                        </div>
                        <div #hue [class]="cx('hue')" (mousedown)="onHueMousedown($event)" (touchstart)="onHueDragStart($event)" (touchmove)="onDrag($event)" (touchend)="onDragEnd()" [pBind]="ptm('hue')">
                            <div #hueHandle [class]="cx('hueHandle')" [pBind]="ptm('hueHandle')"></div>
                        </div>
                    </div>
                </div>
            </ng-template>
        </p-overlay>
    `,
      providers: [COLORPICKER_VALUE_ACCESSOR, ColorPickerStyle, {
        provide: COLORPICKER_INSTANCE,
        useExisting: ColorPicker
      }, {
        provide: PARENT_INSTANCE,
        useExisting: ColorPicker
      }],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": "cn(cx('root'), styleClass)"
      }
    }]
  }], () => [{
    type: OverlayService
  }], {
    styleClass: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    inline: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    format: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    inputId: [{
      type: Input
    }],
    autoZIndex: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    defaultColor: [{
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
    overlayOptions: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "overlayOptions",
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
    onChange: [{
      type: Output
    }],
    onShow: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    inputViewChild: [{
      type: ViewChild,
      args: ["input"]
    }],
    overlayViewChild: [{
      type: ViewChild,
      args: ["overlay"]
    }],
    colorSelector: [{
      type: ViewChild,
      args: ["colorSelector"]
    }],
    colorHandle: [{
      type: ViewChild,
      args: ["colorHandle"]
    }],
    hue: [{
      type: ViewChild,
      args: ["hue"]
    }],
    hueHandle: [{
      type: ViewChild,
      args: ["hueHandle"]
    }]
  });
})();
var ColorPickerModule = class _ColorPickerModule {
  static \u0275fac = function ColorPickerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ColorPickerModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ColorPickerModule,
    imports: [ColorPicker, SharedModule],
    exports: [ColorPicker, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [ColorPicker, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorPickerModule, [{
    type: NgModule,
    args: [{
      imports: [ColorPicker, SharedModule],
      exports: [ColorPicker, SharedModule]
    }]
  }], null, null);
})();

// src/app/common/color-converter.util.ts
var ColorConverter = class {
  // Convert hex to RGB array
  static hexToRgb(hex) {
    hex = hex.replace("#", "");
    hex = hex.substring(0, 6);
    return [parseInt(hex.substring(0, 2), 16), parseInt(hex.substring(2, 4), 16), parseInt(hex.substring(4, 6), 16)];
  }
  // Convert RGB to hex
  static rgbToHex(r, g, b) {
    return "#" + [r, g, b].map((x) => {
      const hex = Math.max(0, Math.min(255, x)).toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    }).join("");
  }
  // Convert RGB string (e.g., "rgb(255, 0, 255)") to hex
  static rgbStringToHex(rgb) {
    const match = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (match) {
      return this.rgbToHex(parseInt(match[1]), parseInt(match[2]), parseInt(match[3]));
    }
    return "#000000";
  }
  // Convert hex to HSL
  static hexToHsl(hex) {
    const rgb = this.hexToRgb(hex);
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0;
    let s = 0;
    const l = (max + min) / 2;
    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
          break;
        case g:
          h = ((b - r) / d + 2) / 6;
          break;
        case b:
          h = ((r - g) / d + 4) / 6;
          break;
      }
    }
    return { h: h * 360, s: s * 100, l: l * 100 };
  }
  // Convert HSL to hex
  static hslToHex(h, s, l) {
    s = s / 100;
    l = l / 100;
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(h / 60 % 2 - 1));
    const m = l - c / 2;
    let r = 0, g = 0, b = 0;
    if (h >= 0 && h < 60) {
      r = c;
      g = x;
      b = 0;
    } else if (h >= 60 && h < 120) {
      r = x;
      g = c;
      b = 0;
    } else if (h >= 120 && h < 180) {
      r = 0;
      g = c;
      b = x;
    } else if (h >= 180 && h < 240) {
      r = 0;
      g = x;
      b = c;
    } else if (h >= 240 && h < 300) {
      r = x;
      g = 0;
      b = c;
    } else {
      r = c;
      g = 0;
      b = x;
    }
    return this.rgbToHex(Math.round((r + m) * 255), Math.round((g + m) * 255), Math.round((b + m) * 255));
  }
};

// src/app/common/contrast.util.ts
var ContrastUtil = class {
  /**
   * Calculate WCAG contrast ratio between two hex colors
   * @param foreground Foreground/text color (e.g., '#000000' or '#000000E6' with alpha)
   * @param background Background color (e.g., '#ffffff')
   * @returns Contrast ratio (1-21)
   */
  static getContrastRatio(foreground, background) {
    const compositedForeground = this.compositeColorOverBackground(foreground, background);
    const lum1 = this.getLuminance(compositedForeground);
    const lum2 = this.getLuminance(background);
    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);
    const ratio = (brightest + 0.05) / (darkest + 0.05);
    return ratio;
  }
  /**
   * Composite a foreground color (potentially with alpha) over a background color
   */
  static compositeColorOverBackground(foreground, background) {
    foreground = foreground.replace("#", "");
    background = background.replace("#", "");
    if (foreground.length === 6) {
      return "#" + foreground;
    }
    if (foreground.length === 8) {
      const fgR = parseInt(foreground.substring(0, 2), 16);
      const fgG = parseInt(foreground.substring(2, 4), 16);
      const fgB = parseInt(foreground.substring(4, 6), 16);
      const alpha = parseInt(foreground.substring(6, 8), 16) / 255;
      const bgR = parseInt(background.substring(0, 2), 16);
      const bgG = parseInt(background.substring(2, 4), 16);
      const bgB = parseInt(background.substring(4, 6), 16);
      const resultR = Math.round(fgR * alpha + bgR * (1 - alpha));
      const resultG = Math.round(fgG * alpha + bgG * (1 - alpha));
      const resultB = Math.round(fgB * alpha + bgB * (1 - alpha));
      return ColorConverter.rgbToHex(resultR, resultG, resultB);
    }
    return "#" + foreground;
  }
  /**
   * Get relative luminance of a color
   */
  static getLuminance(hexColor) {
    const rgb = this.hexToRgb(hexColor);
    const [r, g, b] = rgb.map((val) => {
      const sRGB = val / 255;
      return sRGB <= 0.03928 ? sRGB / 12.92 : Math.pow((sRGB + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  }
  // Convert hex color to RGB array
  static hexToRgb(hex) {
    hex = hex.replace("#", "");
    return [parseInt(hex.substring(0, 2), 16), parseInt(hex.substring(2, 4), 16), parseInt(hex.substring(4, 6), 16)];
  }
  /**
   * Check if contrast meets WCAG AA standard (4.5:1 for normal text)
   */
  static meetsWCAG_AA(color1, color2) {
    return this.getContrastRatio(color1, color2) >= 4.5;
  }
  /**
   * Check if contrast meets WCAG AAA standard (7:1 for normal text)
   */
  static meetsWCAG_AAA(color1, color2) {
    return this.getContrastRatio(color1, color2) >= 7;
  }
  /**
   * Get WCAG compliance level
   */
  static getComplianceLevel(color1, color2) {
    const ratio = this.getContrastRatio(color1, color2);
    if (ratio >= 7)
      return "AAA";
    if (ratio >= 4.5)
      return "AA";
    return "Fail";
  }
};

// src/app/views/toolbox/dev-tools/color-generator/color-picker.component.ts
var _forTrack0 = ($index, $item) => $item.shade;
function ColorPickerComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-inputgroup-addon")(1, "p-button", 5);
    \u0275\u0275listener("onClick", function ColorPickerComponent_Conditional_6_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reset());
    });
    \u0275\u0275elementEnd()();
  }
}
function ColorPickerComponent_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 7)(4, "span", 8);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "span", 9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const test_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", test_r3.shade, " vs ", test_r3.textColorName, ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getContrastRatio(test_r3));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getContrastPasses(test_r3) ? "text-green-500" : "text-red-500");
    \u0275\u0275classProp("pi-check", ctx_r1.getContrastPasses(test_r3))("pi-times", !ctx_r1.getContrastPasses(test_r3));
  }
}
function ColorPickerComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275repeaterCreate(1, ColorPickerComponent_Conditional_7_For_2_Template, 7, 9, "div", 6, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.contrastTests());
  }
}
var ColorPickerComponent = class _ColorPickerComponent {
  key = input("", ...ngDevMode ? [{ debugName: "key" }] : (
    /* istanbul ignore next */
    []
  ));
  initialColor = input("#000000", ...ngDevMode ? [{ debugName: "initialColor" }] : (
    /* istanbul ignore next */
    []
  ));
  // Can be hex like '#00cccc' or CSS class like 'bg-green-500'
  externalShades = input(...ngDevMode ? [void 0, { debugName: "externalShades" }] : (
    /* istanbul ignore next */
    []
  ));
  contrastTests = input(...ngDevMode ? [void 0, { debugName: "contrastTests" }] : (
    /* istanbul ignore next */
    []
  ));
  showReset = input(true, ...ngDevMode ? [{ debugName: "showReset" }] : (
    /* istanbul ignore next */
    []
  ));
  colorChanged = new EventEmitter();
  currentColor = signal("", ...ngDevMode ? [{ debugName: "currentColor" }] : (
    /* istanbul ignore next */
    []
  ));
  defaultColor = signal("", ...ngDevMode ? [{ debugName: "defaultColor" }] : (
    /* istanbul ignore next */
    []
  ));
  generatedShades = signal({}, ...ngDevMode ? [{ debugName: "generatedShades" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    effect(() => {
      this.key();
      untracked(() => this.loadColor());
    });
    effect(() => {
      const shades = this.externalShades();
      if (shades) {
        untracked(() => {
          this.generatedShades.set(shades);
          this.currentColor.set(shades[500] || this.currentColor());
        });
      }
    });
  }
  loadColor() {
    this.currentColor.set(this.parseInitialColor(this.initialColor()));
    this.defaultColor.set(this.currentColor());
    this.loadShadesFromTheme();
  }
  loadShadesFromTheme() {
    const root = getComputedStyle(document.documentElement);
    const colorMatch = this.initialColor().match(/bg-(\w+)-\d+/);
    const colorName = colorMatch ? colorMatch[1] : "primary";
    const shades = {};
    [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].forEach((shade) => {
      const cssVar = `--p-${colorName}-${shade}`;
      const color = root.getPropertyValue(cssVar).trim();
      if (color?.startsWith("#")) {
        shades[shade] = color;
      } else if (color?.startsWith("rgb")) {
        shades[shade] = ColorConverter.rgbStringToHex(color);
      }
    });
    if (Object.keys(shades).length > 0) {
      this.generatedShades.set(shades);
    } else {
      this.generateShades();
    }
  }
  parseInitialColor(value) {
    if (value.startsWith("#")) {
      return value;
    }
    if (value.includes("-")) {
      const tempDiv = document.createElement("div");
      tempDiv.className = value;
      tempDiv.style.display = "none";
      document.body.appendChild(tempDiv);
      const computedColor = window.getComputedStyle(tempDiv).backgroundColor;
      document.body.removeChild(tempDiv);
      if (computedColor && computedColor !== "rgba(0, 0, 0, 0)") {
        return ColorConverter.rgbStringToHex(computedColor);
      }
    }
    return value;
  }
  onColorChange() {
    if (!this.currentColor().match(/^#?[0-9A-Fa-f]{6}$/)) {
      return;
    }
    const normalizedHex = this.currentColor().startsWith("#") ? this.currentColor() : "#" + this.currentColor();
    this.currentColor.set(normalizedHex);
    this.generateShades();
    this.emitChange();
  }
  generateShades() {
    this.generatedShades.set(this.generateColorShades(this.currentColor()));
  }
  generateColorShades(baseColor) {
    const hsl = ColorConverter.hexToHsl(baseColor);
    const lightnessMap = {
      50: 95,
      100: 88,
      200: 81,
      300: 74,
      400: 67,
      500: hsl.l,
      600: hsl.l * 0.85,
      700: hsl.l * 0.7,
      800: hsl.l * 0.55,
      900: hsl.l * 0.45,
      950: hsl.l * 0.4
    };
    const shades = {};
    Object.entries(lightnessMap).forEach(([shade, lightness]) => {
      shades[Number(shade)] = ColorConverter.hslToHex(hsl.h, hsl.s, lightness);
    });
    return shades;
  }
  getContrastRatio(test) {
    const bgColor = this.generatedShades()[test.shade] || this.currentColor();
    const ratio = ContrastUtil.getContrastRatio(test.textColor, bgColor);
    return ratio.toFixed(1);
  }
  getContrastPasses(test) {
    const bgColor = this.generatedShades()[test.shade] || this.currentColor();
    const ratio = ContrastUtil.getContrastRatio(test.textColor, bgColor);
    return ratio >= test.requiredRatio;
  }
  reset() {
    this.currentColor.set(this.defaultColor());
    this.generateShades();
    this.emitChange();
  }
  emitChange() {
    this.colorChanged.emit({
      hex: this.currentColor(),
      shades: this.generatedShades()
    });
  }
  static \u0275fac = function ColorPickerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ColorPickerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ColorPickerComponent, selectors: [["aida-color-picker"]], inputs: { key: [1, "key"], initialColor: [1, "initialColor"], externalShades: [1, "externalShades"], contrastTests: [1, "contrastTests"], showReset: [1, "showReset"] }, outputs: { colorChanged: "colorChanged" }, decls: 8, vars: 4, consts: [[1, "flex", "flex-column", "gap-2"], [1, "flex", "align-items-center", "gap-2", "mb-2"], ["appendTo", "body", 3, "ngModelChange", "onChange", "ngModel"], ["pInputText", "", "placeholder", "#000000", "type", "text", 3, "change", "ngModelChange", "ngModel"], [1, "text-xs"], ["label", "Reset", "severity", "secondary", "size", "small", "text", "", 1, "w-full", "h-full", 3, "onClick"], [1, "flex", "align-items-center", "justify-content-between"], [1, "flex", "align-items-center", "gap-2"], [1, "font-semibold"], [1, "pi"]], template: function ColorPickerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p-inputgroup")(3, "p-inputgroup-addon")(4, "p-colorpicker", 2);
      \u0275\u0275listener("ngModelChange", function ColorPickerComponent_Template_p_colorpicker_ngModelChange_4_listener($event) {
        return ctx.currentColor.set($event);
      })("onChange", function ColorPickerComponent_Template_p_colorpicker_onChange_4_listener() {
        return ctx.onColorChange();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "input", 3);
      \u0275\u0275listener("change", function ColorPickerComponent_Template_input_change_5_listener() {
        return ctx.onColorChange();
      })("ngModelChange", function ColorPickerComponent_Template_input_ngModelChange_5_listener($event) {
        return ctx.currentColor.set($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(6, ColorPickerComponent_Conditional_6_Template, 2, 0, "p-inputgroup-addon");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(7, ColorPickerComponent_Conditional_7_Template, 3, 0, "div", 4);
    }
    if (rf & 2) {
      let tmp_3_0;
      \u0275\u0275advance(4);
      \u0275\u0275property("ngModel", ctx.currentColor());
      \u0275\u0275advance();
      \u0275\u0275property("ngModel", ctx.currentColor());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showReset() ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_3_0 = ctx.contrastTests()) == null ? null : tmp_3_0.length) ? 7 : -1);
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, ButtonModule, Button, ColorPickerModule, ColorPicker, InputGroupAddonModule, InputGroupAddon, InputGroupModule, InputGroup, InputTextModule, InputText], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorPickerComponent, [{
    type: Component,
    args: [{ selector: "aida-color-picker", standalone: true, imports: [FormsModule, ButtonModule, ColorPickerModule, InputGroupAddonModule, InputGroupModule, InputTextModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="flex flex-column gap-2">
  <!-- Color Picker -->
  <div class="flex align-items-center gap-2 mb-2">
    <p-inputgroup>
      <p-inputgroup-addon>
        <p-colorpicker [ngModel]="currentColor()" (ngModelChange)="currentColor.set($event)" (onChange)="onColorChange()" appendTo="body" />
      </p-inputgroup-addon>
      <input [ngModel]="currentColor()" (change)="onColorChange()" (ngModelChange)="currentColor.set($event)" pInputText placeholder="#000000" type="text" />
      @if (showReset()) {
        <p-inputgroup-addon>
          <p-button (onClick)="reset()" class="w-full h-full" label="Reset" severity="secondary" size="small" text />
        </p-inputgroup-addon>
      }
    </p-inputgroup>
  </div>
</div>

<!-- Contrast Tests -->
@if (contrastTests()?.length) {
  <div class="text-xs">
    @for (test of contrastTests(); track test.shade) {
      <div class="flex align-items-center justify-content-between">
        <span>{{ test.shade }} vs {{ test.textColorName }}:</span>
        <div class="flex align-items-center gap-2">
          <span class="font-semibold">{{ getContrastRatio(test) }}</span>
          <span [class.pi-check]="getContrastPasses(test)" [class.pi-times]="!getContrastPasses(test)" [class]="getContrastPasses(test) ? 'text-green-500' : 'text-red-500'" class="pi"> </span>
        </div>
      </div>
    }
  </div>
}
` }]
  }], () => [], { key: [{ type: Input, args: [{ isSignal: true, alias: "key", required: false }] }], initialColor: [{ type: Input, args: [{ isSignal: true, alias: "initialColor", required: false }] }], externalShades: [{ type: Input, args: [{ isSignal: true, alias: "externalShades", required: false }] }], contrastTests: [{ type: Input, args: [{ isSignal: true, alias: "contrastTests", required: false }] }], showReset: [{ type: Input, args: [{ isSignal: true, alias: "showReset", required: false }] }], colorChanged: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ColorPickerComponent, { className: "ColorPickerComponent", filePath: "src/app/views/toolbox/dev-tools/color-generator/color-picker.component.ts", lineNumber: 31 });
})();

// src/app/views/toolbox/dev-tools/color-generator/copy-preset.component.ts
var CopyPresetComponent = class _CopyPresetComponent {
  customShades = input({}, ...ngDevMode ? [{ debugName: "customShades" }] : (
    /* istanbul ignore next */
    []
  ));
  copied = signal(false, ...ngDevMode ? [{ debugName: "copied" }] : (
    /* istanbul ignore next */
    []
  ));
  generatedCode = computed(() => this.generatePresetCode(this.customShades()), ...ngDevMode ? [{ debugName: "generatedCode" }] : (
    /* istanbul ignore next */
    []
  ));
  generatePresetCode(shades) {
    const formatShade = (shade, hex) => {
      let comment = "";
      if (shade === 400) {
        const ratio = ContrastUtil.getContrastRatio("#000000", hex);
        const pass = ContrastUtil.meetsWCAG_AA("#000000", hex) ? "" : "(fail)";
        comment = ` // ${ratio.toFixed(1)} vs. black ${pass}`;
      } else if (shade === 500) {
        const ratio = ContrastUtil.getContrastRatio("#ffffff", hex);
        const pass = ContrastUtil.meetsWCAG_AA("#ffffff", hex) ? "" : "(fail)";
        comment = ` // ${ratio.toFixed(1)} vs. white ${pass}`;
      }
      return `            ${shade}: '${hex}',${comment}`;
    };
    const primaryShades = shades["primary"] || this.getDefaultShades("primary");
    const primaryLines = Object.entries(primaryShades).map(([shade, hex]) => formatShade(Number(shade), hex)).join("\n");
    const primitiveColors = [
      { key: "green", name: "success" },
      { key: "red", name: "danger" },
      { key: "orange", name: "warn buttons" },
      { key: "yellow", name: "warn messages" },
      { key: "sky", name: "info buttons" },
      { key: "blue", name: "info messages" },
      { key: "purple", name: "help" }
    ];
    const primitiveSections = primitiveColors.map(({ key, name }) => {
      const colorShades = shades[key] || this.getDefaultShades(key);
      const lines = Object.entries(colorShades).map(([shade, hex]) => formatShade(Number(shade), hex)).join("\n");
      return `        ${key}: { // ${name}
${lines}
        }`;
    }).join(",\n");
    const darkPrimaryShades = this.reversePrimaryShades(primaryShades);
    const darkPrimaryLines = Object.entries(darkPrimaryShades).map(([shade, hex]) => `            ${shade}: '${hex}',`).join("\n");
    return `import { definePreset } from '@primeng/themes';
import Material from '@primeng/themes/material';

const CustomPreset = definePreset(Material, {
    semantic: {
        primary: {
            // primary
${primaryLines}
        },
    },
    primitive: {
${primitiveSections}
    },
    dark: {
        primary: {
${darkPrimaryLines}
        },
    }
});

export default CustomPreset;`;
  }
  getDefaultShades(key) {
    const root = getComputedStyle(document.documentElement);
    const shades = {};
    const cssVarPrefix = key === "primary" ? "primary" : key;
    [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].forEach((shade) => {
      const cssVar = `--p-${cssVarPrefix}-${shade}`;
      const color = root.getPropertyValue(cssVar).trim();
      if (color) {
        if (color.startsWith("#")) {
          shades[shade] = color;
        } else if (color.startsWith("rgb")) {
          shades[shade] = this.rgbStringToHex(color);
        } else {
          shades[shade] = color;
        }
      }
    });
    if (Object.keys(shades).length > 0) {
      return shades;
    }
    return {
      50: "#e5e7eb",
      100: "#d1d5db",
      200: "#9ca3af",
      300: "#6b7280",
      400: "#4b5563",
      500: "#374151",
      600: "#1f2937",
      700: "#111827",
      800: "#030712",
      900: "#000000",
      950: "#000000"
    };
  }
  rgbStringToHex(rgb) {
    const match = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (match) {
      return ColorConverter.rgbToHex(parseInt(match[1]), parseInt(match[2]), parseInt(match[3]));
    }
    return "#000000";
  }
  reversePrimaryShades(lightShades) {
    return {
      50: lightShades[950],
      100: lightShades[900],
      200: lightShades[800],
      300: lightShades[700],
      400: lightShades[600],
      500: lightShades[500],
      600: lightShades[400],
      700: lightShades[300],
      800: lightShades[200],
      900: lightShades[100],
      950: lightShades[50]
    };
  }
  copyToClipboard() {
    navigator.clipboard.writeText(this.generatedCode()).then(() => {
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 3e3);
    });
  }
  static \u0275fac = function CopyPresetComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CopyPresetComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CopyPresetComponent, selectors: [["aida-copy-preset"]], inputs: { customShades: [1, "customShades"] }, decls: 9, vars: 3, consts: [[1, "surface-card", "border-round", "p-4"], [1, "flex", "align-items-center", "justify-content-between", "mb-3"], [1, "m-0"], ["icon", "pi pi-copy", "label", "Copy to clipboard", "size", "small", 3, "onClick", "severity"], [1, "text-sm", "text-color-secondary", "mb-3"], ["pInputTextarea", "", "readonly", "", "rows", "30", 1, "w-full", "font-mono", "text-sm", 2, "resize", "vertical", 3, "value"]], template: function CopyPresetComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
      \u0275\u0275text(3, "Custom preset code");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p-button", 3);
      \u0275\u0275listener("onClick", function CopyPresetComponent_Template_p_button_onClick_4_listener() {
        return ctx.copyToClipboard();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "p", 4);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "textarea", 5);
      \u0275\u0275text(8, " ");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("severity", ctx.copied() ? "success" : "primary");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.copied() ? "Copied! Send this to the AIDA development team." : "Copy this code to share your custom color scheme.", " ");
      \u0275\u0275advance();
      \u0275\u0275property("value", ctx.generatedCode());
    }
  }, dependencies: [ButtonModule, Button, TextareaModule, Textarea], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CopyPresetComponent, [{
    type: Component,
    args: [{ selector: "aida-copy-preset", standalone: true, imports: [ButtonModule, TextareaModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="surface-card border-round p-4">
  <div class="flex align-items-center justify-content-between mb-3">
    <h3 class="m-0">Custom preset code</h3>
    <p-button [severity]="copied() ? 'success' : 'primary'" (onClick)="copyToClipboard()" icon="pi pi-copy" label="Copy to clipboard" size="small" />
  </div>

  <p class="text-sm text-color-secondary mb-3">
    {{ copied() ? 'Copied! Send this to the AIDA development team.' : 'Copy this code to share your custom color scheme.' }}
  </p>

  <textarea [value]="generatedCode()" class="w-full font-mono text-sm" pInputTextarea readonly rows="30" style="resize: vertical"> </textarea>
</div>
` }]
  }], null, { customShades: [{ type: Input, args: [{ isSignal: true, alias: "customShades", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CopyPresetComponent, { className: "CopyPresetComponent", filePath: "src/app/views/toolbox/dev-tools/color-generator/copy-preset.component.ts", lineNumber: 20 });
})();

// src/app/views/toolbox/dev-tools/color-generator/color-generator.component.ts
var _c02 = () => ({ shade: 400, textColor: "#000000E6", textColorName: "Black", requiredRatio: 4.5 });
var _c12 = () => ({ shade: 500, textColor: "#ffffff", textColorName: "White", requiredRatio: 4.5 });
var _c22 = (a0, a1) => [a0, a1];
var _c32 = () => ({ shade: "bg-primary", reverse: false });
var _c42 = () => ({ shade: "bg-green", reverse: false });
var _c52 = () => ({ shade: "bg-red", reverse: false });
var _c6 = () => ({ shade: "bg-orange", reverse: false });
var _c7 = () => ({ shade: "bg-blue", reverse: false });
var _c8 = () => ({ shade: "bg-purple", reverse: false });
var _c9 = () => ({ shade: "surface", reverse: false });
var _c10 = () => ({ shade: "surface", reverse: true });
function ColorGeneratorComponent_ng_container_293_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ColorGeneratorComponent_ng_container_297_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ColorGeneratorComponent_ng_container_301_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ColorGeneratorComponent_ng_container_305_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ColorGeneratorComponent_ng_container_309_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ColorGeneratorComponent_ng_container_313_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ColorGeneratorComponent_ng_container_317_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ColorGeneratorComponent_ng_container_321_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ColorGeneratorComponent_ng_template_323_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 123);
    \u0275\u0275element(1, "div")(2, "div")(3, "div")(4, "div")(5, "div")(6, "div")(7, "div")(8, "div")(9, "div")(10, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reverse_r1 = ctx.reverse;
    const shade_r2 = ctx.shade;
    \u0275\u0275classProp("flex-row-reverse", reverse_r1);
    \u0275\u0275advance();
    \u0275\u0275classMap("flex-1 h-3rem " + shade_r2 + "-50 border-round");
    \u0275\u0275advance();
    \u0275\u0275classMap("flex-1 h-3rem " + shade_r2 + "-100 border-round");
    \u0275\u0275advance();
    \u0275\u0275classMap("flex-1 h-3rem " + shade_r2 + "-200 border-round");
    \u0275\u0275advance();
    \u0275\u0275classMap("flex-1 h-3rem " + shade_r2 + "-300 border-round");
    \u0275\u0275advance();
    \u0275\u0275classMap("flex-1 h-3rem " + shade_r2 + "-400 border-round");
    \u0275\u0275advance();
    \u0275\u0275classMap("flex-1 h-3rem " + shade_r2 + "-500 border-round");
    \u0275\u0275advance();
    \u0275\u0275classMap("flex-1 h-3rem " + shade_r2 + "-600 border-round");
    \u0275\u0275advance();
    \u0275\u0275classMap("flex-1 h-3rem " + shade_r2 + "-700 border-round");
    \u0275\u0275advance();
    \u0275\u0275classMap("flex-1 h-3rem " + shade_r2 + "-800 border-round");
    \u0275\u0275advance();
    \u0275\u0275classMap("flex-1 h-3rem " + shade_r2 + "-900 border-round");
  }
}
var ColorGeneratorComponent = class _ColorGeneratorComponent {
  primeNGConfig = inject(PrimeNG);
  settingsService = inject(UserSettingsService);
  customShades = signal({}, ...ngDevMode ? [{ debugName: "customShades" }] : (
    /* istanbul ignore next */
    []
  ));
  onColorChange(event, color) {
    this.customShades.update((current) => __spreadProps(__spreadValues({}, current), { [color]: event.shades }));
    this.updateTheme();
  }
  onInfoColorChange(event) {
    this.customShades.update((current) => __spreadProps(__spreadValues({}, current), { sky: event.shades, blue: event.shades }));
    this.updateTheme();
  }
  onWarnColorChange(event) {
    this.customShades.update((current) => __spreadProps(__spreadValues({}, current), { orange: event.shades, yellow: event.shades }));
    this.updateTheme();
  }
  updateTheme() {
    const scheme = this.settingsService.colorScheme();
    let presetPromise;
    switch (scheme) {
      case "deutan":
        presetPromise = import("./chunk-3EQMMWML.js");
        break;
      case "protan":
        presetPromise = import("./chunk-K55FE7SY.js");
        break;
      case "tritan":
        presetPromise = import("./chunk-55H4UYA4.js");
        break;
      case "custom":
        presetPromise = import("./chunk-KQFGOCSR.js");
        break;
      default:
        presetPromise = import("./chunk-BZBNNUPF.js");
    }
    presetPromise.then((module) => {
      const basePreset = module.default;
      const shades = this.customShades();
      const customPreset = __spreadProps(__spreadValues({}, basePreset), {
        primitive: __spreadValues(__spreadValues({}, basePreset.primitive), shades),
        semantic: __spreadValues(__spreadValues({}, basePreset.semantic), shades["primary"] ? { primary: shades["primary"] } : {})
      });
      this.primeNGConfig.theme.set({
        preset: customPreset,
        options: {
          colorScheme: "light",
          theme: "blue",
          ripple: true,
          darkModeSelector: ".dark-mode"
        }
      });
    });
  }
  static \u0275fac = function ColorGeneratorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ColorGeneratorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ColorGeneratorComponent, selectors: [["aida-color-generator"]], decls: 325, vars: 134, consts: [["shades", ""], ["id", "wb-cont"], ["mode", "theme"], [1, "mb-6"], [1, "mb-3"], [1, "mb-3", "text-sm", "text-color-secondary"], [1, "grid"], [1, "col-12", "md:col-6"], [1, "surface-50", "border-round", "p-4", "max-h-full"], [1, "mt-0", "mb-3", "text-center", "text-lg", "font-bold", "text-green-600"], [1, "grid", "h-full"], [1, "col-6"], [1, "flex", "flex-column", "justify-content-between", "text-center", "h-full", "gap-2"], [1, "flex", "flex-column", "gap-2"], [1, "text-sm", "font-semibold", "mb-0"], [1, "flex", "flex-wrap", "justify-content-center", "align-items-center", "gap-2"], ["label", "Primary button", "size", "small"], ["label", "Primary button", "outlined", "", "size", "small", "styleClass", "secondary-outline"], ["value", "Primary tag"], ["value", "1"], [1, "flex", "flex-row", "gap-2"], [1, "w-full", "h-3rem", "bg-primary-400", "border-round", "align-content-center", "text-black-alpha-90"], [1, "w-full", "h-3rem", "bg-primary-500", "border-round", "align-content-center", "text-white"], ["initialColor", "bg-primary-500", 3, "colorChanged", "contrastTests", "externalShades", "key"], ["label", "Success button", "severity", "success", "size", "small"], ["label", "Success button", "outlined", "", "severity", "success", "size", "small", "styleClass", "secondary-outline"], ["value", "Success tag", "severity", "success"], ["value", "2", "severity", "success"], [1, "w-full", "h-3rem", "bg-green-400", "border-round", "align-content-center", "text-black-alpha-90"], [1, "w-full", "h-3rem", "bg-green-500", "border-round", "align-content-center", "text-white"], ["severity", "success", "text", "Success: message"], ["initialColor", "bg-green-500", 3, "colorChanged", "contrastTests", "externalShades", "key"], [1, "mt-0", "mb-3", "text-center", "text-lg", "font-bold", "text-red-600"], ["label", "Danger button", "severity", "danger", "size", "small"], ["label", "Danger button", "outlined", "", "severity", "danger", "size", "small", "styleClass", "secondary-outline"], ["value", "Danger tag", "severity", "danger"], ["value", "3", "severity", "danger"], [1, "w-full", "h-3rem", "bg-red-400", "border-round", "align-content-center", "text-black-alpha-90"], [1, "w-full", "h-3rem", "bg-red-500", "border-round", "align-content-center", "text-white"], ["severity", "error", "text", "Error: message"], ["initialColor", "bg-red-500", 3, "colorChanged", "contrastTests", "externalShades", "key"], ["label", "Warning button", "severity", "warn", "size", "small"], ["label", "Warning button", "outlined", "", "severity", "warn", "size", "small", "styleClass", "secondary-outline"], ["value", "Warning tag", "severity", "warn"], ["value", "4", "severity", "warn"], [1, "w-full", "h-3rem", "bg-orange-400", "border-round", "align-content-center", "text-black-alpha-90"], [1, "w-full", "h-3rem", "bg-orange-500", "border-round", "align-content-center", "text-white"], ["severity", "warn", "text", "Warning: message"], ["initialColor", "bg-orange-500", 3, "colorChanged", "contrastTests", "externalShades", "key"], [1, "mt-0", "mb-3", "text-center", "text-lg", "font-bold", "text-blue-600"], ["label", "Info button", "severity", "info", "size", "small"], ["label", "Info button", "outlined", "", "severity", "info", "size", "small", "styleClass", "secondary-outline"], ["value", "Info tag", "severity", "info"], ["value", "5", "severity", "info"], [1, "w-full", "h-3rem", "bg-blue-400", "border-round", "align-content-center", "text-black-alpha-90"], [1, "w-full", "h-3rem", "bg-blue-500", "border-round", "align-content-center", "text-white"], ["severity", "info", "text", "Info: message"], ["initialColor", "bg-blue-500", 3, "colorChanged", "contrastTests", "externalShades", "key"], ["label", "Help button", "severity", "help", "size", "small"], ["label", "Help button", "outlined", "", "severity", "help", "size", "small", "styleClass", "secondary-outline"], [1, "w-full", "h-3rem", "bg-purple-400", "border-round", "align-content-center", "text-black-alpha-90"], [1, "w-full", "h-3rem", "bg-purple-500", "border-round", "align-content-center", "text-white"], ["initialColor", "bg-purple-500", 3, "colorChanged", "contrastTests", "externalShades", "key"], [1, "surface-50", "border-round", "p-4", "h-full"], [1, "mt-0", "mb-3", "text-center", "text-lg", "font-bold", "text-color-secondary"], ["label", "Secondary button", "severity", "secondary", "size", "small"], ["label", "Secondary button", "outlined", "", "severity", "secondary", "size", "small", "styleClass", "secondary-outline"], ["value", "Secondary tag", "severity", "secondary"], ["value", "7", "severity", "secondary"], [1, "w-full", "h-3rem", "surface-100", "border-round", "align-content-center"], ["severity", "secondary", "text", "Secondary: message"], [1, "text-xs", "text-color-secondary"], ["label", "Contrast button", "severity", "contrast", "size", "small"], ["label", "Contrast button", "outlined", "", "severity", "contrast", "size", "small", "styleClass", "secondary-outline"], ["value", "Contrast tag", "severity", "contrast"], ["value", "8", "severity", "contrast"], [1, "w-full", "h-3rem", "surface-900", "border-round", "align-content-center"], ["severity", "contrast", "text", "Contrast: message"], [1, "flex", "flex-wrap", "gap-2", "mb-4"], ["label", "Primary"], ["label", "Success", "severity", "success"], ["label", "Danger", "severity", "danger"], ["label", "Warning", "severity", "warn"], ["label", "Info", "severity", "info"], ["label", "Help", "severity", "help"], ["label", "Secondary", "severity", "secondary"], ["label", "Contrast", "severity", "contrast"], ["label", "Primary", "outlined", ""], ["label", "Success", "outlined", "", "severity", "success"], ["label", "Danger", "outlined", "", "severity", "danger"], ["label", "Warning", "outlined", "", "severity", "warn"], ["label", "Info", "outlined", "", "severity", "info"], ["label", "Help", "outlined", "", "severity", "help"], ["label", "Secondary", "outlined", "", "severity", "secondary"], ["label", "Contrast", "outlined", "", "severity", "contrast"], ["value", "Primary"], ["value", "Success", "severity", "success"], ["value", "Danger", "severity", "danger"], ["value", "Warning", "severity", "warn"], ["value", "Info", "severity", "info"], ["value", "Secondary", "severity", "secondary"], ["value", "Contrast", "severity", "contrast"], [1, "flex", "gap-1", "mb-2"], [1, "flex-1", "h-4rem", "bg-primary-500", "border-round", "flex", "align-items-center", "justify-content-center", "text-white", "text-xs", "font-semibold"], [1, "flex-1", "h-4rem", "bg-green-500", "border-round", "flex", "align-items-center", "justify-content-center", "text-white", "text-xs", "font-semibold"], [1, "flex-1", "h-4rem", "bg-red-500", "border-round", "flex", "align-items-center", "justify-content-center", "text-white", "text-xs", "font-semibold"], [1, "flex-1", "h-4rem", "bg-orange-500", "border-round", "flex", "align-items-center", "justify-content-center", "text-white", "text-xs", "font-semibold"], [1, "flex-1", "h-4rem", "bg-blue-500", "border-round", "flex", "align-items-center", "justify-content-center", "text-white", "text-xs", "font-semibold"], [1, "flex-1", "h-4rem", "bg-purple-500", "border-round", "flex", "align-items-center", "justify-content-center", "text-white", "text-xs", "font-semibold"], [1, "flex-1", "h-4rem", "surface-100", "border-round", "flex", "align-items-center", "justify-content-center", "text-color", "text-xs", "font-semibold"], [1, "flex-1", "h-4rem", "surface-900", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold"], [1, "flex", "flex-column", "gap-1", "mb-2"], [1, "mb-2", "text-sm", "font-semibold", "uppercase", "text-green-600"], [1, "flex", "flex-column", "gap-2", "mb-4"], [1, "mb-2", "text-sm", "font-semibold", "uppercase", "text-red-600"], [1, "mb-2", "text-sm", "font-semibold", "uppercase", "text-blue-600"], [1, "mb-2", "text-sm", "font-semibold", "uppercase", "text-color-secondary"], [1, "flex", "flex-row", "gap-2", "mt-2"], [1, "flex", "flex-column"], ["initialColor", " bg-primary-500", 3, "colorChanged", "contrastTests", "externalShades", "key"], [1, "text-sm"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "customShades"], [1, "flex", "gap-1", "mb-3"]], template: function ColorGeneratorComponent_Template(rf, ctx) {
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
      \u0275\u0275element(7, "aida-user-settings", 2);
      \u0275\u0275elementStart(8, "div", 3)(9, "h2", 4);
      \u0275\u0275text(10, "Semantic colour grouping");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "p", 5);
      \u0275\u0275text(12, " Colours should be clearly distinguishable between quadrants. Contrast ratio must be above 4.5 for normal text and above 3:1 for large text (24px or 18.5px bold) to meet AA WCAG requirements. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 6)(14, "div", 7)(15, "div", 8)(16, "h3", 9);
      \u0275\u0275text(17, "POSITIVE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 10)(19, "div", 11)(20, "div", 12)(21, "div", 13)(22, "p", 14);
      \u0275\u0275text(23, "PRIMARY");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 15);
      \u0275\u0275element(25, "p-button", 16)(26, "p-button", 17)(27, "p-tag", 18)(28, "p-badge", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 20)(30, "div", 21);
      \u0275\u0275text(31, "Black text");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 22);
      \u0275\u0275text(33, "White text");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(34, "aida-color-picker", 23);
      \u0275\u0275listener("colorChanged", function ColorGeneratorComponent_Template_aida_color_picker_colorChanged_34_listener($event) {
        return ctx.onColorChange($event, "primary");
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "div", 11)(36, "div", 12)(37, "div", 13)(38, "p", 14);
      \u0275\u0275text(39, "SUCCESS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 15);
      \u0275\u0275element(41, "p-button", 24)(42, "p-button", 25)(43, "p-tag", 26)(44, "p-badge", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div", 20)(46, "div", 28);
      \u0275\u0275text(47, "Black text");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 29);
      \u0275\u0275text(49, "White text");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(50, "p-message", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "aida-color-picker", 31);
      \u0275\u0275listener("colorChanged", function ColorGeneratorComponent_Template_aida_color_picker_colorChanged_51_listener($event) {
        return ctx.onColorChange($event, "green");
      });
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(52, "div", 7)(53, "div", 8)(54, "h3", 32);
      \u0275\u0275text(55, "NEGATIVE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "div", 10)(57, "div", 11)(58, "div", 12)(59, "div", 13)(60, "p", 14);
      \u0275\u0275text(61, "DANGER");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "div", 15);
      \u0275\u0275element(63, "p-button", 33)(64, "p-button", 34)(65, "p-tag", 35)(66, "p-badge", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "div", 20)(68, "div", 37);
      \u0275\u0275text(69, "Black text");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "div", 38);
      \u0275\u0275text(71, "White text");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(72, "p-message", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "aida-color-picker", 40);
      \u0275\u0275listener("colorChanged", function ColorGeneratorComponent_Template_aida_color_picker_colorChanged_73_listener($event) {
        return ctx.onColorChange($event, "red");
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(74, "div", 11)(75, "div", 12)(76, "div", 13)(77, "p", 14);
      \u0275\u0275text(78, "WARNING");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "div", 15);
      \u0275\u0275element(80, "p-button", 41)(81, "p-button", 42)(82, "p-tag", 43)(83, "p-badge", 44);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "div", 20)(85, "div", 45);
      \u0275\u0275text(86, "Black text");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "div", 46);
      \u0275\u0275text(88, "White text");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(89, "p-message", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "aida-color-picker", 48);
      \u0275\u0275listener("colorChanged", function ColorGeneratorComponent_Template_aida_color_picker_colorChanged_90_listener($event) {
        return ctx.onWarnColorChange($event);
      });
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(91, "div", 7)(92, "div", 8)(93, "h3", 49);
      \u0275\u0275text(94, "INFORMATION");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "div", 10)(96, "div", 11)(97, "div", 12)(98, "div", 13)(99, "p", 14);
      \u0275\u0275text(100, "INFO");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "div", 15);
      \u0275\u0275element(102, "p-button", 50)(103, "p-button", 51)(104, "p-tag", 52)(105, "p-badge", 53);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "div", 20)(107, "div", 54);
      \u0275\u0275text(108, "Black text");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "div", 55);
      \u0275\u0275text(110, "White text");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(111, "p-message", 56);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "aida-color-picker", 57);
      \u0275\u0275listener("colorChanged", function ColorGeneratorComponent_Template_aida_color_picker_colorChanged_112_listener($event) {
        return ctx.onInfoColorChange($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(113, "div", 11)(114, "div", 12)(115, "div", 13)(116, "p", 14);
      \u0275\u0275text(117, "HELP");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "div", 15);
      \u0275\u0275element(119, "p-button", 58)(120, "p-button", 59);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "div", 20)(122, "div", 60);
      \u0275\u0275text(123, "Black text");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "div", 61);
      \u0275\u0275text(125, "White text");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(126, "aida-color-picker", 62);
      \u0275\u0275listener("colorChanged", function ColorGeneratorComponent_Template_aida_color_picker_colorChanged_126_listener($event) {
        return ctx.onColorChange($event, "purple");
      });
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(127, "div", 7)(128, "div", 63)(129, "h3", 64);
      \u0275\u0275text(130, "NEUTRAL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(131, "div", 10)(132, "div", 11)(133, "div", 12)(134, "div", 13)(135, "p", 14);
      \u0275\u0275text(136, "SECONDARY");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(137, "div", 15);
      \u0275\u0275element(138, "p-button", 65)(139, "p-button", 66)(140, "p-tag", 67)(141, "p-badge", 68);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(142, "div", 69);
      \u0275\u0275text(143, "Secondary background");
      \u0275\u0275elementEnd();
      \u0275\u0275element(144, "p-message", 70);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(145, "p", 71);
      \u0275\u0275text(146, "No customization available");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(147, "div", 11)(148, "div", 12)(149, "div", 13)(150, "p", 14);
      \u0275\u0275text(151, "CONTRAST");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(152, "div", 15);
      \u0275\u0275element(153, "p-button", 72)(154, "p-button", 73)(155, "p-tag", 74)(156, "p-badge", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(157, "div", 76);
      \u0275\u0275text(158, "Contrast background");
      \u0275\u0275elementEnd();
      \u0275\u0275element(159, "p-message", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(160, "p", 71);
      \u0275\u0275text(161, "No customization available");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275element(162, "p-divider");
      \u0275\u0275elementStart(163, "div", 3)(164, "h2", 4);
      \u0275\u0275text(165, "All components side-by-side");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(166, "div", 78)(167, "p");
      \u0275\u0275text(168, "Regular Buttons");
      \u0275\u0275elementEnd();
      \u0275\u0275element(169, "p-button", 79)(170, "p-button", 80)(171, "p-button", 81)(172, "p-button", 82)(173, "p-button", 83)(174, "p-button", 84)(175, "p-button", 85)(176, "p-button", 86);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(177, "div", 78)(178, "p");
      \u0275\u0275text(179, "Outlined Buttons");
      \u0275\u0275elementEnd();
      \u0275\u0275element(180, "p-button", 87)(181, "p-button", 88)(182, "p-button", 89)(183, "p-button", 90)(184, "p-button", 91)(185, "p-button", 92)(186, "p-button", 93)(187, "p-button", 94);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(188, "div", 78)(189, "span");
      \u0275\u0275text(190, "Tags");
      \u0275\u0275elementEnd();
      \u0275\u0275element(191, "p-tag", 95)(192, "p-tag", 96)(193, "p-tag", 97)(194, "p-tag", 98)(195, "p-tag", 99)(196, "p-tag", 100)(197, "p-tag", 101);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(198, "div", 78)(199, "span");
      \u0275\u0275text(200, "Badges");
      \u0275\u0275elementEnd();
      \u0275\u0275element(201, "p-badge", 19)(202, "p-badge", 27)(203, "p-badge", 36)(204, "p-badge", 44)(205, "p-badge", 53)(206, "p-badge", 68)(207, "p-badge", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(208, "div", 102)(209, "p");
      \u0275\u0275text(210, "Backgrounds");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(211, "div", 103);
      \u0275\u0275text(212, "Primary");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(213, "div", 104);
      \u0275\u0275text(214, "Success");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(215, "div", 105);
      \u0275\u0275text(216, "Danger");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(217, "div", 106);
      \u0275\u0275text(218, "Warning");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(219, "div", 107);
      \u0275\u0275text(220, "Info");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(221, "div", 108);
      \u0275\u0275text(222, "Help");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(223, "div", 109);
      \u0275\u0275text(224, "Secondary");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(225, "div", 110);
      \u0275\u0275text(226, " Contrast ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(227, "div", 111)(228, "p");
      \u0275\u0275text(229, "Messages");
      \u0275\u0275elementEnd();
      \u0275\u0275element(230, "p-message", 56)(231, "p-message", 30)(232, "p-message", 39)(233, "p-message", 47)(234, "p-message", 70)(235, "p-message", 77);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(236, "p-divider");
      \u0275\u0275elementStart(237, "div", 3)(238, "h2", 4);
      \u0275\u0275text(239, "Messages by semantic meaning");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(240, "p", 5);
      \u0275\u0275text(241, "Colours should be clearly distinguishable between quadrants.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(242, "div", 6)(243, "div", 7)(244, "h4", 112);
      \u0275\u0275text(245, "Positive Messages");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(246, "div", 113);
      \u0275\u0275element(247, "p-message", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(248, "div", 7)(249, "h4", 114);
      \u0275\u0275text(250, "Negative Messages");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(251, "div", 113);
      \u0275\u0275element(252, "p-message", 39)(253, "p-message", 47);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(254, "div", 7)(255, "h4", 115);
      \u0275\u0275text(256, "Information Messages");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(257, "div", 113);
      \u0275\u0275element(258, "p-message", 56);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(259, "div", 7)(260, "h4", 116);
      \u0275\u0275text(261, "Neutral Messages");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(262, "div", 113);
      \u0275\u0275element(263, "p-message", 70)(264, "p-message", 77);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(265, "p-divider");
      \u0275\u0275elementStart(266, "div", 3)(267, "h2", 4);
      \u0275\u0275text(268, "Full colour palettes");
      \u0275\u0275elementEnd();
      \u0275\u0275element(269, "aida-user-settings", 2);
      \u0275\u0275elementStart(270, "div", 117)(271, "div", 118);
      \u0275\u0275text(272, " Primary ");
      \u0275\u0275elementStart(273, "aida-color-picker", 119);
      \u0275\u0275listener("colorChanged", function ColorGeneratorComponent_Template_aida_color_picker_colorChanged_273_listener($event) {
        return ctx.onColorChange($event, "primary");
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(274, "div", 118);
      \u0275\u0275text(275, " Green (success) ");
      \u0275\u0275elementStart(276, "aida-color-picker", 31);
      \u0275\u0275listener("colorChanged", function ColorGeneratorComponent_Template_aida_color_picker_colorChanged_276_listener($event) {
        return ctx.onColorChange($event, "green");
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(277, "div", 118);
      \u0275\u0275text(278, " Red (danger) ");
      \u0275\u0275elementStart(279, "aida-color-picker", 40);
      \u0275\u0275listener("colorChanged", function ColorGeneratorComponent_Template_aida_color_picker_colorChanged_279_listener($event) {
        return ctx.onColorChange($event, "red");
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(280, "div", 118);
      \u0275\u0275text(281, " Orange (warn) ");
      \u0275\u0275elementStart(282, "aida-color-picker", 48);
      \u0275\u0275listener("colorChanged", function ColorGeneratorComponent_Template_aida_color_picker_colorChanged_282_listener($event) {
        return ctx.onWarnColorChange($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(283, "div", 118);
      \u0275\u0275text(284, " Blue (info) ");
      \u0275\u0275elementStart(285, "aida-color-picker", 57);
      \u0275\u0275listener("colorChanged", function ColorGeneratorComponent_Template_aida_color_picker_colorChanged_285_listener($event) {
        return ctx.onInfoColorChange($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(286, "div", 118);
      \u0275\u0275text(287, " Purple (help) ");
      \u0275\u0275elementStart(288, "aida-color-picker", 62);
      \u0275\u0275listener("colorChanged", function ColorGeneratorComponent_Template_aida_color_picker_colorChanged_288_listener($event) {
        return ctx.onColorChange($event, "purple");
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(289, "div", 6)(290, "div", 7)(291, "h4", 120);
      \u0275\u0275text(292, "Primary");
      \u0275\u0275elementEnd();
      \u0275\u0275template(293, ColorGeneratorComponent_ng_container_293_Template, 1, 0, "ng-container", 121);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(294, "div", 7)(295, "h4", 120);
      \u0275\u0275text(296, "Green (success)");
      \u0275\u0275elementEnd();
      \u0275\u0275template(297, ColorGeneratorComponent_ng_container_297_Template, 1, 0, "ng-container", 121);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(298, "div", 7)(299, "h4", 120);
      \u0275\u0275text(300, "Red (danger)");
      \u0275\u0275elementEnd();
      \u0275\u0275template(301, ColorGeneratorComponent_ng_container_301_Template, 1, 0, "ng-container", 121);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(302, "div", 7)(303, "h4", 120);
      \u0275\u0275text(304, "Orange (warn)");
      \u0275\u0275elementEnd();
      \u0275\u0275template(305, ColorGeneratorComponent_ng_container_305_Template, 1, 0, "ng-container", 121);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(306, "div", 7)(307, "h4", 120);
      \u0275\u0275text(308, "Blue (info)");
      \u0275\u0275elementEnd();
      \u0275\u0275template(309, ColorGeneratorComponent_ng_container_309_Template, 1, 0, "ng-container", 121);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(310, "div", 7)(311, "h4", 120);
      \u0275\u0275text(312, "Purple (help)");
      \u0275\u0275elementEnd();
      \u0275\u0275template(313, ColorGeneratorComponent_ng_container_313_Template, 1, 0, "ng-container", 121);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(314, "div", 7)(315, "h4", 120);
      \u0275\u0275text(316, "Surface (secondary)");
      \u0275\u0275elementEnd();
      \u0275\u0275template(317, ColorGeneratorComponent_ng_container_317_Template, 1, 0, "ng-container", 121);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(318, "div", 7)(319, "h4", 120);
      \u0275\u0275text(320, "Surface (contrast)");
      \u0275\u0275elementEnd();
      \u0275\u0275template(321, ColorGeneratorComponent_ng_container_321_Template, 1, 0, "ng-container", 121);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(322, "aida-copy-preset", 122);
      \u0275\u0275elementEnd();
      \u0275\u0275template(323, ColorGeneratorComponent_ng_template_323_Template, 11, 22, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const shades_r3 = \u0275\u0275reference(324);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 60, "dev.colors._title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(5, 62, "dev.colors.description"), "", \u0275\u0275pipeBind1(6, 64, "dev.colors.description2"));
      \u0275\u0275advance(30);
      \u0275\u0275property("contrastTests", \u0275\u0275pureFunction2(68, _c22, \u0275\u0275pureFunction0(66, _c02), \u0275\u0275pureFunction0(67, _c12)))("externalShades", ctx.customShades()["primary"])("key", ctx.settingsService.colorScheme() + "-primary");
      \u0275\u0275advance(17);
      \u0275\u0275property("contrastTests", \u0275\u0275pureFunction2(73, _c22, \u0275\u0275pureFunction0(71, _c02), \u0275\u0275pureFunction0(72, _c12)))("externalShades", ctx.customShades()["green"])("key", ctx.settingsService.colorScheme() + "-success");
      \u0275\u0275advance(22);
      \u0275\u0275property("contrastTests", \u0275\u0275pureFunction2(78, _c22, \u0275\u0275pureFunction0(76, _c02), \u0275\u0275pureFunction0(77, _c12)))("externalShades", ctx.customShades()["red"])("key", ctx.settingsService.colorScheme() + "-danger");
      \u0275\u0275advance(17);
      \u0275\u0275property("contrastTests", \u0275\u0275pureFunction2(83, _c22, \u0275\u0275pureFunction0(81, _c02), \u0275\u0275pureFunction0(82, _c12)))("externalShades", ctx.customShades()["orange"])("key", ctx.settingsService.colorScheme() + "-warn");
      \u0275\u0275advance(22);
      \u0275\u0275property("contrastTests", \u0275\u0275pureFunction2(88, _c22, \u0275\u0275pureFunction0(86, _c02), \u0275\u0275pureFunction0(87, _c12)))("externalShades", ctx.customShades()["blue"])("key", ctx.settingsService.colorScheme() + "-info");
      \u0275\u0275advance(14);
      \u0275\u0275property("contrastTests", \u0275\u0275pureFunction2(93, _c22, \u0275\u0275pureFunction0(91, _c02), \u0275\u0275pureFunction0(92, _c12)))("externalShades", ctx.customShades()["purple"])("key", ctx.settingsService.colorScheme() + "-help");
      \u0275\u0275advance(31);
      \u0275\u0275classMap(ctx.settingsService.darkMode() ? "text-black-alpha-90" : "text-white");
      \u0275\u0275advance(68);
      \u0275\u0275classMap(ctx.settingsService.darkMode() ? "text-black-alpha-90" : "text-white");
      \u0275\u0275advance(48);
      \u0275\u0275property("contrastTests", \u0275\u0275pureFunction2(98, _c22, \u0275\u0275pureFunction0(96, _c02), \u0275\u0275pureFunction0(97, _c12)))("externalShades", ctx.customShades()["primary"])("key", ctx.settingsService.colorScheme() + "-primary");
      \u0275\u0275advance(3);
      \u0275\u0275property("contrastTests", \u0275\u0275pureFunction2(103, _c22, \u0275\u0275pureFunction0(101, _c02), \u0275\u0275pureFunction0(102, _c12)))("externalShades", ctx.customShades()["green"])("key", ctx.settingsService.colorScheme() + "-success");
      \u0275\u0275advance(3);
      \u0275\u0275property("contrastTests", \u0275\u0275pureFunction2(108, _c22, \u0275\u0275pureFunction0(106, _c02), \u0275\u0275pureFunction0(107, _c12)))("externalShades", ctx.customShades()["red"])("key", ctx.settingsService.colorScheme() + "-danger");
      \u0275\u0275advance(3);
      \u0275\u0275property("contrastTests", \u0275\u0275pureFunction2(113, _c22, \u0275\u0275pureFunction0(111, _c02), \u0275\u0275pureFunction0(112, _c12)))("externalShades", ctx.customShades()["orange"])("key", ctx.settingsService.colorScheme() + "-warn");
      \u0275\u0275advance(3);
      \u0275\u0275property("contrastTests", \u0275\u0275pureFunction2(118, _c22, \u0275\u0275pureFunction0(116, _c02), \u0275\u0275pureFunction0(117, _c12)))("externalShades", ctx.customShades()["blue"])("key", ctx.settingsService.colorScheme() + "-info");
      \u0275\u0275advance(3);
      \u0275\u0275property("contrastTests", \u0275\u0275pureFunction2(123, _c22, \u0275\u0275pureFunction0(121, _c02), \u0275\u0275pureFunction0(122, _c12)))("externalShades", ctx.customShades()["purple"])("key", ctx.settingsService.colorScheme() + "-help");
      \u0275\u0275advance(5);
      \u0275\u0275property("ngTemplateOutlet", shades_r3)("ngTemplateOutletContext", \u0275\u0275pureFunction0(126, _c32));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngTemplateOutlet", shades_r3)("ngTemplateOutletContext", \u0275\u0275pureFunction0(127, _c42));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngTemplateOutlet", shades_r3)("ngTemplateOutletContext", \u0275\u0275pureFunction0(128, _c52));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngTemplateOutlet", shades_r3)("ngTemplateOutletContext", \u0275\u0275pureFunction0(129, _c6));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngTemplateOutlet", shades_r3)("ngTemplateOutletContext", \u0275\u0275pureFunction0(130, _c7));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngTemplateOutlet", shades_r3)("ngTemplateOutletContext", \u0275\u0275pureFunction0(131, _c8));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngTemplateOutlet", shades_r3)("ngTemplateOutletContext", \u0275\u0275pureFunction0(132, _c9));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngTemplateOutlet", shades_r3)("ngTemplateOutletContext", \u0275\u0275pureFunction0(133, _c10));
      \u0275\u0275advance();
      \u0275\u0275property("customShades", ctx.customShades());
    }
  }, dependencies: [CommonModule, NgTemplateOutlet, FormsModule, BadgeModule, Badge, ButtonModule, Button, DividerModule, Divider, MessageModule, Message, TagModule, Tag, ColorPickerComponent, CopyPresetComponent, UserSettingsComponent, TranslatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorGeneratorComponent, [{
    type: Component,
    args: [{ selector: "aida-color-generator", standalone: true, imports: [CommonModule, FormsModule, TranslatePipe, BadgeModule, ButtonModule, DividerModule, MessageModule, TagModule, ColorPickerComponent, CopyPresetComponent, UserSettingsComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<h1 id="wb-cont">{{ 'dev.colors._title' | translate }}</h1>
<p>{{ 'dev.colors.description' | translate }}{{ 'dev.colors.description2' | translate }}</p>

<aida-user-settings mode="theme" />

<!-- Semantic Color Grid -->
<div class="mb-6">
  <h2 class="mb-3">Semantic colour grouping</h2>
  <p class="mb-3 text-sm text-color-secondary">
    Colours should be clearly distinguishable between quadrants. Contrast ratio must be above 4.5 for normal text and above 3:1 for large text (24px or 18.5px bold) to meet AA WCAG requirements.
  </p>

  <div class="grid">
    <!-- POSITIVE -->
    <div class="col-12 md:col-6">
      <div class="surface-50 border-round p-4 max-h-full">
        <h3 class="mt-0 mb-3 text-center text-lg font-bold text-green-600">POSITIVE</h3>
        <div class="grid h-full">
          <div class="col-6">
            <div class="flex flex-column justify-content-between text-center h-full gap-2">
              <div class="flex flex-column gap-2">
                <p class="text-sm font-semibold mb-0">PRIMARY</p>
                <div class="flex flex-wrap justify-content-center align-items-center gap-2">
                  <p-button label="Primary button" size="small" />
                  <p-button label="Primary button" outlined size="small" styleClass="secondary-outline" />
                  <p-tag value="Primary tag" />
                  <p-badge value="1" />
                </div>
                <div class="flex flex-row gap-2">
                  <div class="w-full h-3rem bg-primary-400 border-round align-content-center text-black-alpha-90">Black text</div>
                  <div class="w-full h-3rem bg-primary-500 border-round align-content-center text-white">White text</div>
                </div>
              </div>
              <aida-color-picker
                [contrastTests]="[
                  { shade: 400, textColor: '#000000E6', textColorName: 'Black', requiredRatio: 4.5 },
                  { shade: 500, textColor: '#ffffff', textColorName: 'White', requiredRatio: 4.5 },
                ]"
                [externalShades]="customShades()['primary']"
                [key]="settingsService.colorScheme() + '-primary'"
                (colorChanged)="onColorChange($event, 'primary')"
                initialColor="bg-primary-500"
              />
            </div>
          </div>
          <div class="col-6">
            <div class="flex flex-column justify-content-between text-center h-full gap-2">
              <div class="flex flex-column gap-2">
                <p class="text-sm font-semibold mb-0">SUCCESS</p>
                <div class="flex flex-wrap justify-content-center align-items-center gap-2">
                  <p-button label="Success button" severity="success" size="small" />
                  <p-button label="Success button" outlined severity="success" size="small" styleClass="secondary-outline" />
                  <p-tag value="Success tag" severity="success" />
                  <p-badge value="2" severity="success" />
                </div>
                <div class="flex flex-row gap-2">
                  <div class="w-full h-3rem bg-green-400 border-round align-content-center text-black-alpha-90">Black text</div>
                  <div class="w-full h-3rem bg-green-500 border-round align-content-center text-white">White text</div>
                </div>
                <p-message severity="success" text="Success: message" />
              </div>
              <aida-color-picker
                [contrastTests]="[
                  { shade: 400, textColor: '#000000E6', textColorName: 'Black', requiredRatio: 4.5 },
                  { shade: 500, textColor: '#ffffff', textColorName: 'White', requiredRatio: 4.5 },
                ]"
                [externalShades]="customShades()['green']"
                [key]="settingsService.colorScheme() + '-success'"
                (colorChanged)="onColorChange($event, 'green')"
                initialColor="bg-green-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- NEGATIVE -->
    <div class="col-12 md:col-6">
      <div class="surface-50 border-round p-4 max-h-full">
        <h3 class="mt-0 mb-3 text-center text-lg font-bold text-red-600">NEGATIVE</h3>
        <div class="grid h-full">
          <div class="col-6">
            <div class="flex flex-column justify-content-between text-center h-full gap-2">
              <div class="flex flex-column gap-2">
                <p class="text-sm font-semibold mb-0">DANGER</p>
                <div class="flex flex-wrap justify-content-center align-items-center gap-2">
                  <p-button label="Danger button" severity="danger" size="small" />
                  <p-button label="Danger button" outlined severity="danger" size="small" styleClass="secondary-outline" />
                  <p-tag value="Danger tag" severity="danger" />
                  <p-badge value="3" severity="danger" />
                </div>
                <div class="flex flex-row gap-2">
                  <div class="w-full h-3rem bg-red-400 border-round align-content-center text-black-alpha-90">Black text</div>
                  <div class="w-full h-3rem bg-red-500 border-round align-content-center text-white">White text</div>
                </div>
                <p-message severity="error" text="Error: message" />
              </div>
              <aida-color-picker
                [contrastTests]="[
                  { shade: 400, textColor: '#000000E6', textColorName: 'Black', requiredRatio: 4.5 },
                  { shade: 500, textColor: '#ffffff', textColorName: 'White', requiredRatio: 4.5 },
                ]"
                [externalShades]="customShades()['red']"
                [key]="settingsService.colorScheme() + '-danger'"
                (colorChanged)="onColorChange($event, 'red')"
                initialColor="bg-red-500"
              />
            </div>
          </div>
          <div class="col-6">
            <div class="flex flex-column justify-content-between text-center h-full gap-2">
              <div class="flex flex-column gap-2">
                <p class="text-sm font-semibold mb-0">WARNING</p>
                <div class="flex flex-wrap justify-content-center align-items-center gap-2">
                  <p-button label="Warning button" severity="warn" size="small" />
                  <p-button label="Warning button" outlined severity="warn" size="small" styleClass="secondary-outline" />
                  <p-tag value="Warning tag" severity="warn" />
                  <p-badge value="4" severity="warn" />
                </div>
                <div class="flex flex-row gap-2">
                  <div class="w-full h-3rem bg-orange-400 border-round align-content-center text-black-alpha-90">Black text</div>
                  <div class="w-full h-3rem bg-orange-500 border-round align-content-center text-white">White text</div>
                </div>
                <p-message severity="warn" text="Warning: message" />
              </div>
              <aida-color-picker
                [contrastTests]="[
                  { shade: 400, textColor: '#000000E6', textColorName: 'Black', requiredRatio: 4.5 },
                  { shade: 500, textColor: '#ffffff', textColorName: 'White', requiredRatio: 4.5 },
                ]"
                [externalShades]="customShades()['orange']"
                [key]="settingsService.colorScheme() + '-warn'"
                (colorChanged)="onWarnColorChange($event)"
                initialColor="bg-orange-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- INFORMATION -->
    <div class="col-12 md:col-6">
      <div class="surface-50 border-round p-4 max-h-full">
        <h3 class="mt-0 mb-3 text-center text-lg font-bold text-blue-600">INFORMATION</h3>
        <div class="grid h-full">
          <div class="col-6">
            <div class="flex flex-column justify-content-between text-center h-full gap-2">
              <div class="flex flex-column gap-2">
                <p class="text-sm font-semibold mb-0">INFO</p>
                <div class="flex flex-wrap justify-content-center align-items-center gap-2">
                  <p-button label="Info button" severity="info" size="small" />
                  <p-button label="Info button" outlined severity="info" size="small" styleClass="secondary-outline" />
                  <p-tag value="Info tag" severity="info" />
                  <p-badge value="5" severity="info" />
                </div>
                <div class="flex flex-row gap-2">
                  <div class="w-full h-3rem bg-blue-400 border-round align-content-center text-black-alpha-90">Black text</div>
                  <div class="w-full h-3rem bg-blue-500 border-round align-content-center text-white">White text</div>
                </div>
                <p-message severity="info" text="Info: message" />
              </div>
              <aida-color-picker
                [contrastTests]="[
                  { shade: 400, textColor: '#000000E6', textColorName: 'Black', requiredRatio: 4.5 },
                  { shade: 500, textColor: '#ffffff', textColorName: 'White', requiredRatio: 4.5 },
                ]"
                [externalShades]="customShades()['blue']"
                [key]="settingsService.colorScheme() + '-info'"
                (colorChanged)="onInfoColorChange($event)"
                initialColor="bg-blue-500"
              />
            </div>
          </div>
          <div class="col-6">
            <div class="flex flex-column justify-content-between text-center h-full gap-2">
              <div class="flex flex-column gap-2">
                <p class="text-sm font-semibold mb-0">HELP</p>
                <div class="flex flex-wrap justify-content-center align-items-center gap-2">
                  <p-button label="Help button" severity="help" size="small" />
                  <p-button label="Help button" outlined severity="help" size="small" styleClass="secondary-outline" />
                  <!--p-tag value="Help" severity="help" class="mb-2 mx-1" /-->
                </div>
                <div class="flex flex-row gap-2">
                  <div class="w-full h-3rem bg-purple-400 border-round align-content-center text-black-alpha-90">Black text</div>
                  <div class="w-full h-3rem bg-purple-500 border-round align-content-center text-white">White text</div>
                </div>
              </div>
              <aida-color-picker
                [contrastTests]="[
                  { shade: 400, textColor: '#000000E6', textColorName: 'Black', requiredRatio: 4.5 },
                  { shade: 500, textColor: '#ffffff', textColorName: 'White', requiredRatio: 4.5 },
                ]"
                [externalShades]="customShades()['purple']"
                [key]="settingsService.colorScheme() + '-help'"
                (colorChanged)="onColorChange($event, 'purple')"
                initialColor="bg-purple-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- NEUTRAL -->
    <div class="col-12 md:col-6">
      <div class="surface-50 border-round p-4 h-full">
        <h3 class="mt-0 mb-3 text-center text-lg font-bold text-color-secondary">NEUTRAL</h3>
        <div class="grid h-full">
          <div class="col-6">
            <div class="flex flex-column justify-content-between text-center h-full gap-2">
              <div class="flex flex-column gap-2">
                <p class="text-sm font-semibold mb-0">SECONDARY</p>
                <div class="flex flex-wrap justify-content-center align-items-center gap-2">
                  <p-button label="Secondary button" severity="secondary" size="small" />
                  <p-button label="Secondary button" outlined severity="secondary" size="small" styleClass="secondary-outline" />
                  <p-tag value="Secondary tag" severity="secondary" />
                  <p-badge value="7" severity="secondary" />
                </div>
                <div class="w-full h-3rem surface-100 border-round align-content-center">Secondary background</div>
                <p-message severity="secondary" text="Secondary: message" />
              </div>
              <p class="text-xs text-color-secondary">No customization available</p>
            </div>
          </div>
          <div class="col-6">
            <div class="flex flex-column justify-content-between text-center h-full gap-2">
              <div class="flex flex-column gap-2">
                <p class="text-sm font-semibold mb-0">CONTRAST</p>
                <div class="flex flex-wrap justify-content-center align-items-center gap-2">
                  <p-button label="Contrast button" severity="contrast" size="small" />
                  <p-button label="Contrast button" outlined severity="contrast" size="small" styleClass="secondary-outline" />
                  <p-tag value="Contrast tag" severity="contrast" />
                  <p-badge value="8" severity="contrast" />
                </div>
                <div [class]="settingsService.darkMode() ? 'text-black-alpha-90' : 'text-white'" class="w-full h-3rem surface-900 border-round align-content-center">Contrast background</div>
                <p-message severity="contrast" text="Contrast: message" />
              </div>
              <p class="text-xs text-color-secondary">No customization available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <p-divider />

  <!-- All Colors in One Row -->
  <div class="mb-6">
    <h2 class="mb-3">All components side-by-side</h2>
    <div class="flex flex-wrap gap-2 mb-4">
      <p>Regular Buttons</p>
      <p-button label="Primary" />
      <p-button label="Success" severity="success" />
      <p-button label="Danger" severity="danger" />
      <p-button label="Warning" severity="warn" />
      <p-button label="Info" severity="info" />
      <p-button label="Help" severity="help" />
      <p-button label="Secondary" severity="secondary" />
      <p-button label="Contrast" severity="contrast" />
    </div>

    <div class="flex flex-wrap gap-2 mb-4">
      <p>Outlined Buttons</p>
      <p-button label="Primary" outlined />
      <p-button label="Success" outlined severity="success" />
      <p-button label="Danger" outlined severity="danger" />
      <p-button label="Warning" outlined severity="warn" />
      <p-button label="Info" outlined severity="info" />
      <p-button label="Help" outlined severity="help" />
      <p-button label="Secondary" outlined severity="secondary" />
      <p-button label="Contrast" outlined severity="contrast" />
    </div>

    <div class="flex flex-wrap gap-2 mb-4">
      <span>Tags</span>
      <p-tag value="Primary" />
      <p-tag value="Success" severity="success" />
      <p-tag value="Danger" severity="danger" />
      <p-tag value="Warning" severity="warn" />
      <p-tag value="Info" severity="info" />
      <!--p-tag value="Help" severity="help" /-->
      <p-tag value="Secondary" severity="secondary" />
      <p-tag value="Contrast" severity="contrast" />
    </div>
    <div class="flex flex-wrap gap-2 mb-4">
      <span>Badges</span>
      <p-badge value="1" />
      <p-badge value="2" severity="success" />
      <p-badge value="3" severity="danger" />
      <p-badge value="4" severity="warn" />
      <p-badge value="5" severity="info" />
      <!--p-badge value="6" severity="help" /-->
      <p-badge value="7" severity="secondary" />
      <p-badge value="8" severity="contrast" />
    </div>

    <div class="flex gap-1 mb-2">
      <p>Backgrounds</p>
      <div class="flex-1 h-4rem bg-primary-500 border-round flex align-items-center justify-content-center text-white text-xs font-semibold">Primary</div>
      <div class="flex-1 h-4rem bg-green-500 border-round flex align-items-center justify-content-center text-white text-xs font-semibold">Success</div>
      <div class="flex-1 h-4rem bg-red-500 border-round flex align-items-center justify-content-center text-white text-xs font-semibold">Danger</div>
      <div class="flex-1 h-4rem bg-orange-500 border-round flex align-items-center justify-content-center text-white text-xs font-semibold">Warning</div>
      <div class="flex-1 h-4rem bg-blue-500 border-round flex align-items-center justify-content-center text-white text-xs font-semibold">Info</div>
      <div class="flex-1 h-4rem bg-purple-500 border-round flex align-items-center justify-content-center text-white text-xs font-semibold">Help</div>
      <div class="flex-1 h-4rem surface-100 border-round flex align-items-center justify-content-center text-color text-xs font-semibold">Secondary</div>
      <div
        [class]="settingsService.darkMode() ? 'text-black-alpha-90' : 'text-white'"
        class="flex-1 h-4rem surface-900 border-round flex align-items-center justify-content-center text-xs font-semibold"
      >
        Contrast
      </div>
    </div>

    <div class="flex flex-column gap-1 mb-2">
      <p>Messages</p>
      <p-message severity="info" text="Info: message" />
      <p-message severity="success" text="Success: message" />
      <p-message severity="error" text="Error: message" />
      <p-message severity="warn" text="Warning: message" />
      <p-message severity="secondary" text="Secondary: message" />
      <p-message severity="contrast" text="Contrast: message" />
    </div>
  </div>

  <p-divider />

  <!-- Messages Grouped by Semantic Meaning -->
  <div class="mb-6">
    <h2 class="mb-3">Messages by semantic meaning</h2>
    <p class="mb-3 text-sm text-color-secondary">Colours should be clearly distinguishable between quadrants.</p>

    <div class="grid">
      <div class="col-12 md:col-6">
        <h4 class="mb-2 text-sm font-semibold uppercase text-green-600">Positive Messages</h4>
        <div class="flex flex-column gap-2 mb-4">
          <!--p-message text="Primary: Click here to continue" /-->
          <p-message severity="success" text="Success: message" />
        </div>
      </div>

      <div class="col-12 md:col-6">
        <h4 class="mb-2 text-sm font-semibold uppercase text-red-600">Negative Messages</h4>
        <div class="flex flex-column gap-2 mb-4">
          <p-message severity="error" text="Error: message" />
          <p-message severity="warn" text="Warning: message" />
        </div>
      </div>

      <div class="col-12 md:col-6">
        <h4 class="mb-2 text-sm font-semibold uppercase text-blue-600">Information Messages</h4>
        <div class="flex flex-column gap-2 mb-4">
          <p-message severity="info" text="Info: message" />
          <!--p-message text="Help: Click here for assistance" /-->
        </div>
      </div>

      <div class="col-12 md:col-6">
        <h4 class="mb-2 text-sm font-semibold uppercase text-color-secondary">Neutral Messages</h4>
        <div class="flex flex-column gap-2 mb-4">
          <p-message severity="secondary" text="Secondary: message" />
          <p-message severity="contrast" text="Contrast: message" />
        </div>
      </div>
    </div>
  </div>

  <p-divider />

  <!-- Color Palette Swatches -->
  <div class="mb-6">
    <h2 class="mb-3">Full colour palettes</h2>
    <aida-user-settings mode="theme" />
    <div class="flex flex-row gap-2 mt-2">
      <div class="flex flex-column">
        Primary
        <aida-color-picker
          [contrastTests]="[
            { shade: 400, textColor: '#000000E6', textColorName: 'Black', requiredRatio: 4.5 },
            { shade: 500, textColor: '#ffffff', textColorName: 'White', requiredRatio: 4.5 },
          ]"
          [externalShades]="customShades()['primary']"
          [key]="settingsService.colorScheme() + '-primary'"
          (colorChanged)="onColorChange($event, 'primary')"
          initialColor=" bg-primary-500"
        />
      </div>
      <div class="flex flex-column">
        Green (success)
        <aida-color-picker
          [contrastTests]="[
            { shade: 400, textColor: '#000000E6', textColorName: 'Black', requiredRatio: 4.5 },
            { shade: 500, textColor: '#ffffff', textColorName: 'White', requiredRatio: 4.5 },
          ]"
          [externalShades]="customShades()['green']"
          [key]="settingsService.colorScheme() + '-success'"
          (colorChanged)="onColorChange($event, 'green')"
          initialColor="bg-green-500"
        />
      </div>
      <div class="flex flex-column">
        Red (danger)
        <aida-color-picker
          [contrastTests]="[
            { shade: 400, textColor: '#000000E6', textColorName: 'Black', requiredRatio: 4.5 },
            { shade: 500, textColor: '#ffffff', textColorName: 'White', requiredRatio: 4.5 },
          ]"
          [externalShades]="customShades()['red']"
          [key]="settingsService.colorScheme() + '-danger'"
          (colorChanged)="onColorChange($event, 'red')"
          initialColor="bg-red-500"
        />
      </div>
      <div class="flex flex-column">
        Orange (warn)
        <aida-color-picker
          [contrastTests]="[
            { shade: 400, textColor: '#000000E6', textColorName: 'Black', requiredRatio: 4.5 },
            { shade: 500, textColor: '#ffffff', textColorName: 'White', requiredRatio: 4.5 },
          ]"
          [externalShades]="customShades()['orange']"
          [key]="settingsService.colorScheme() + '-warn'"
          (colorChanged)="onWarnColorChange($event)"
          initialColor="bg-orange-500"
        />
      </div>
      <div class="flex flex-column">
        Blue (info)
        <aida-color-picker
          [contrastTests]="[
            { shade: 400, textColor: '#000000E6', textColorName: 'Black', requiredRatio: 4.5 },
            { shade: 500, textColor: '#ffffff', textColorName: 'White', requiredRatio: 4.5 },
          ]"
          [externalShades]="customShades()['blue']"
          [key]="settingsService.colorScheme() + '-info'"
          (colorChanged)="onInfoColorChange($event)"
          initialColor="bg-blue-500"
        />
      </div>
      <div class="flex flex-column">
        Purple (help)
        <aida-color-picker
          [contrastTests]="[
            { shade: 400, textColor: '#000000E6', textColorName: 'Black', requiredRatio: 4.5 },
            { shade: 500, textColor: '#ffffff', textColorName: 'White', requiredRatio: 4.5 },
          ]"
          [externalShades]="customShades()['purple']"
          [key]="settingsService.colorScheme() + '-help'"
          (colorChanged)="onColorChange($event, 'purple')"
          initialColor="bg-purple-500"
        />
      </div>
    </div>
    <div class="grid">
      <div class="col-12 md:col-6">
        <h4 class="text-sm">Primary</h4>
        <ng-container *ngTemplateOutlet="shades; context: { shade: 'bg-primary', reverse: false }" />
      </div>
      <div class="col-12 md:col-6">
        <h4 class="text-sm">Green (success)</h4>
        <ng-container *ngTemplateOutlet="shades; context: { shade: 'bg-green', reverse: false }" />
      </div>
      <div class="col-12 md:col-6">
        <h4 class="text-sm">Red (danger)</h4>
        <ng-container *ngTemplateOutlet="shades; context: { shade: 'bg-red', reverse: false }" />
      </div>
      <div class="col-12 md:col-6">
        <h4 class="text-sm">Orange (warn)</h4>
        <ng-container *ngTemplateOutlet="shades; context: { shade: 'bg-orange', reverse: false }" />
      </div>
      <div class="col-12 md:col-6">
        <h4 class="text-sm">Blue (info)</h4>
        <ng-container *ngTemplateOutlet="shades; context: { shade: 'bg-blue', reverse: false }" />
      </div>
      <div class="col-12 md:col-6">
        <h4 class="text-sm">Purple (help)</h4>
        <ng-container *ngTemplateOutlet="shades; context: { shade: 'bg-purple', reverse: false }" />
      </div>
      <div class="col-12 md:col-6">
        <h4 class="text-sm">Surface (secondary)</h4>
        <ng-container *ngTemplateOutlet="shades; context: { shade: 'surface', reverse: false }" />
      </div>
      <div class="col-12 md:col-6">
        <h4 class="text-sm">Surface (contrast)</h4>
        <ng-container *ngTemplateOutlet="shades; context: { shade: 'surface', reverse: true }" />
      </div>
    </div>
  </div>
  <aida-copy-preset [customShades]="customShades()" />
</div>

<ng-template #shades let-reverse="reverse" let-shade="shade">
  <div [class.flex-row-reverse]="reverse" class="flex gap-1 mb-3">
    <div [class]="'flex-1 h-3rem ' + shade + '-50 border-round'"></div>
    <div [class]="'flex-1 h-3rem ' + shade + '-100 border-round'"></div>
    <div [class]="'flex-1 h-3rem ' + shade + '-200 border-round'"></div>
    <div [class]="'flex-1 h-3rem ' + shade + '-300 border-round'"></div>
    <div [class]="'flex-1 h-3rem ' + shade + '-400 border-round'"></div>
    <div [class]="'flex-1 h-3rem ' + shade + '-500 border-round'"></div>
    <div [class]="'flex-1 h-3rem ' + shade + '-600 border-round'"></div>
    <div [class]="'flex-1 h-3rem ' + shade + '-700 border-round'"></div>
    <div [class]="'flex-1 h-3rem ' + shade + '-800 border-round'"></div>
    <div [class]="'flex-1 h-3rem ' + shade + '-900 border-round'"></div>
  </div>
</ng-template>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ColorGeneratorComponent, { className: "ColorGeneratorComponent", filePath: "src/app/views/toolbox/dev-tools/color-generator/color-generator.component.ts", lineNumber: 31 });
})();
export {
  ColorGeneratorComponent
};
//# sourceMappingURL=chunk-YII5KKIT.js.map
