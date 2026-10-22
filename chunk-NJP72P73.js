import {
  Divider,
  DividerModule
} from "./chunk-ATVW4L4U.js";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupAddonModule,
  InputGroupModule,
  Tag,
  TagModule
} from "./chunk-4673KVKI.js";
import {
  Message,
  MessageModule
} from "./chunk-GGIC4QUJ.js";
import {
  UserSettingsComponent
} from "./chunk-RBME4FR2.js";
import {
  Textarea,
  TextareaModule
} from "./chunk-Y576ZK6L.js";
import "./chunk-2YFXSVHN.js";
import {
  IftaLabel,
  IftaLabelModule
} from "./chunk-FQDO2XGS.js";
import "./chunk-AW5MQYZC.js";
import "./chunk-REIT3HFO.js";
import "./chunk-6U2RHGUD.js";
import "./chunk-5IS2DW3I.js";
import "./chunk-NJENQTX6.js";
import "./chunk-M6FDN6OY.js";
import {
  Overlay,
  OverlayModule,
  Select,
  SelectModule
} from "./chunk-JR3PODJQ.js";
import {
  AutoFocus,
  AutoFocusModule,
  Badge,
  BadgeModule,
  BaseEditableHolder,
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
  PARENT_INSTANCE,
  zindexutils
} from "./chunk-QN4TTD5X.js";
import "./chunk-DMOF7S63.js";
import {
  BaseStyle,
  CommonModule,
  NgClass,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  OverlayService,
  PrimeNG,
  RouterLink,
  SharedModule,
  TranslationKeys,
  UserSettingsService
} from "./chunk-7YP54JN5.js";
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
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
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
var _c02 = () => [];
var _c12 = () => ({ shade: 400, textColor: "#000000E6", textColorName: "Black", requiredRatio: 4.5 });
var _c22 = () => ({ shade: 500, textColor: "#ffffff", textColorName: "White", requiredRatio: 4.5 });
var _c32 = (a0, a1) => [a0, a1];
var _c42 = () => ({ label: "surface-card", value: "surface-card" });
var _c52 = (a0) => [a0];
var _c6 = (a0) => ({ background: a0 });
var _c7 = () => [0, 1, 2, 3];
var _c8 = () => ({ shade: "bg-primary", reverse: false });
var _c9 = () => ({ shade: "bg-green", reverse: false });
var _c10 = () => ({ shade: "bg-red", reverse: false });
var _c11 = () => ({ shade: "bg-orange", reverse: false });
var _c122 = () => ({ shade: "bg-blue", reverse: false });
var _c13 = () => ({ shade: "bg-purple", reverse: false });
var _c14 = () => ({ shade: "surface", reverse: false });
var _c15 = () => ({ shade: "surface", reverse: true });
function ColorGeneratorComponent_For_579_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 260);
    \u0275\u0275listener("click", function ColorGeneratorComponent_For_579_Template_div_click_1_listener() {
      const i_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.activeCard.set(i_r3));
    })("keydown.enter", function ColorGeneratorComponent_For_579_Template_div_keydown_enter_1_listener() {
      const i_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.activeCard.set(i_r3));
    });
    \u0275\u0275elementStart(2, "h2", 261);
    \u0275\u0275text(3, "Interactive card");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const i_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r3.cardStyles(true, ctx_r3.activeCard() === i_r3));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Lorem ipsum dolor sit amet, consectetur adipiscing elit. ", ctx_r3.cardStyles(true, ctx_r3.activeCard() === i_r3), ".");
  }
}
function ColorGeneratorComponent_ng_container_631_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ColorGeneratorComponent_ng_container_635_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ColorGeneratorComponent_ng_container_639_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ColorGeneratorComponent_ng_container_643_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ColorGeneratorComponent_ng_container_647_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ColorGeneratorComponent_ng_container_651_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ColorGeneratorComponent_ng_container_655_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ColorGeneratorComponent_ng_container_659_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ColorGeneratorComponent_ng_template_661_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 262);
    \u0275\u0275element(1, "div")(2, "div")(3, "div")(4, "div")(5, "div")(6, "div")(7, "div")(8, "div")(9, "div")(10, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reverse_r5 = ctx.reverse;
    const shade_r6 = ctx.shade;
    \u0275\u0275classProp("flex-row-reverse", reverse_r5);
    \u0275\u0275advance();
    \u0275\u0275classMap("flex-1 h-3rem " + shade_r6 + "-50 border-round");
    \u0275\u0275advance();
    \u0275\u0275classMap("flex-1 h-3rem " + shade_r6 + "-100 border-round");
    \u0275\u0275advance();
    \u0275\u0275classMap("flex-1 h-3rem " + shade_r6 + "-200 border-round");
    \u0275\u0275advance();
    \u0275\u0275classMap("flex-1 h-3rem " + shade_r6 + "-300 border-round");
    \u0275\u0275advance();
    \u0275\u0275classMap("flex-1 h-3rem " + shade_r6 + "-400 border-round");
    \u0275\u0275advance();
    \u0275\u0275classMap("flex-1 h-3rem " + shade_r6 + "-500 border-round");
    \u0275\u0275advance();
    \u0275\u0275classMap("flex-1 h-3rem " + shade_r6 + "-600 border-round");
    \u0275\u0275advance();
    \u0275\u0275classMap("flex-1 h-3rem " + shade_r6 + "-700 border-round");
    \u0275\u0275advance();
    \u0275\u0275classMap("flex-1 h-3rem " + shade_r6 + "-800 border-round");
    \u0275\u0275advance();
    \u0275\u0275classMap("flex-1 h-3rem " + shade_r6 + "-900 border-round");
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
  borderWidthOptions = [
    { label: "undefined", value: null },
    { label: "border-none", value: "border-none" },
    { label: "border-1", value: "border-1" },
    { label: "border-2", value: "border-2" },
    { label: "border-3", value: "border-3" }
  ];
  borderColorOptions = [
    { label: "undefined", value: null },
    { label: "border-transparent", value: "border-transparent" },
    { label: "border-primary", value: "border-primary" },
    { label: "surface-border", value: "surface-border" },
    { label: "border-0", value: "border-0" },
    { label: "border-50", value: "border-50" },
    { label: "border-100", value: "border-100" },
    { label: "border-200", value: "border-200" },
    { label: "border-300", value: "border-300" },
    { label: "border-400", value: "border-400" },
    { label: "border-500", value: "border-500" },
    { label: "border-600", value: "border-600" },
    { label: "border-700", value: "border-700" },
    { label: "border-800", value: "border-800" },
    { label: "border-900", value: "border-900" }
  ];
  borderRadiusOptions = [
    { label: "undefined", value: null },
    { label: "border-noround", value: "border-noround" },
    { label: "border-round", value: "border-round" },
    { label: "border-round-xs", value: "border-round-xs" },
    { label: "border-round-sm", value: "border-round-sm" },
    { label: "border-round-md", value: "border-round-md" },
    { label: "border-round-lg", value: "border-round-lg" },
    { label: "border-round-xl", value: "border-round-xl" },
    { label: "border-round-2xl", value: "border-round-2xl" },
    { label: "border-round-3xl", value: "border-round-3xl" },
    { label: "border-circle", value: "border-circle" }
  ];
  shadowOptions = [
    { label: "undefined", value: null },
    { label: "shadow-none", value: "shadow-none" },
    { label: "shadow-1", value: "shadow-1" },
    { label: "shadow-2", value: "shadow-2" },
    { label: "shadow-3", value: "shadow-3" },
    { label: "shadow-4", value: "shadow-4" },
    { label: "shadow-5", value: "shadow-5" },
    { label: "shadow-6", value: "shadow-6" },
    { label: "shadow-7", value: "shadow-7" },
    { label: "shadow-8", value: "shadow-8" }
  ];
  backgroundOptions = computed(() => {
    const primaryShades = this.settingsService.darkMode() ? [900, 800, 700] : [50, 100, 200];
    return [
      { label: "undefined", value: null },
      { label: "surface-50", value: "surface-50" },
      { label: "surface-100", value: "surface-100" },
      { label: "surface-200", value: "surface-200" },
      ...primaryShades.map((s) => ({ label: `primary-${s}`, value: `bg-primary-${s}` }))
    ];
  }, ...ngDevMode ? [{ debugName: "backgroundOptions" }] : (
    /* istanbul ignore next */
    []
  ));
  palettes = ["slate", "gray", "zinc", "neutral", "stone"];
  groundOptions = computed(() => {
    const shades = this.settingsService.darkMode() ? [950, 900, 800] : [50, 100, 200];
    return [{ label: "undefined", value: null }, ...this.palettes.flatMap((palette) => shades.map((shade) => ({ label: `${palette}-${shade}`, value: this.getColour(`--p-${palette}-${shade}`) })))];
  }, ...ngDevMode ? [{ debugName: "groundOptions" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedGroundLabel = computed(() => this.groundOptions().find((o) => o.value === this.selectedGround())?.label ?? "", ...ngDevMode ? [{ debugName: "selectedGroundLabel" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    effect(() => {
      this.selectedGround.set(this.getColour(this.settingsService.darkMode() ? "--p-zinc-950" : "--p-zinc-50"));
      this.selectedHoverBackground.set("surface-50");
      this.selectedActiveBackground.set(this.settingsService.darkMode() ? "bg-primary-900" : "bg-primary-50");
    });
  }
  getColour(variable) {
    return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
  }
  //Global card settings
  selectedBorderWidth = "border-1";
  selectedBorderColor = "surface-border";
  selectedBorderRadius = "border-round-md";
  selectedBackground = "surface-card";
  //Flat only
  selectedFlatShadow = "null";
  //Interactive only
  selectedInteractiveShadow = "shadow-1";
  selectedHoverShadow = "shadow-3";
  selectedHoverBorderColor = "border-primary";
  //Active only
  activeCard = signal(2, ...ngDevMode ? [{ debugName: "activeCard" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedActiveBorderWidth = "border-2";
  selectedActiveBorderColor = "border-primary";
  //Background colours
  selectedActiveBackground = signal("bg-primary-50", ...ngDevMode ? [{ debugName: "selectedActiveBackground" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedHoverBackground = signal("surface-50", ...ngDevMode ? [{ debugName: "selectedHoverBackground" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedGround = signal(null, ...ngDevMode ? [{ debugName: "selectedGround" }] : (
    /* istanbul ignore next */
    []
  ));
  cardStyles(isInteractive = false, isActive = false) {
    const borderRadius = this.selectedBorderRadius ? this.selectedBorderRadius + " " : "";
    const borderWidth = this.selectedBorderWidth && !isActive ? this.selectedBorderWidth + " " : "";
    const borderColor = this.selectedBorderColor && !isActive ? this.selectedBorderColor + " " : "";
    const flatShadow = this.selectedFlatShadow && !isInteractive ? this.selectedFlatShadow + " " : "";
    const interactiveShadow = this.selectedInteractiveShadow && isInteractive ? this.selectedInteractiveShadow + " " : "";
    const hoverBorderColor = this.selectedHoverBorderColor && isInteractive ? "hover:" + this.selectedHoverBorderColor + " " : "";
    const hoverShadow = this.selectedHoverShadow && isInteractive ? "hover:" + this.selectedHoverShadow + " " : "";
    const hoverBG = this.selectedHoverBackground() && isInteractive ? "hover:" + this.selectedHoverBackground() + " " : "";
    const cursor = isInteractive ? "cursor-pointer " : "";
    const activeBG = this.selectedActiveBackground() && isActive ? this.selectedActiveBackground() + " " : "surface-card ";
    const activeBorderWidth = this.selectedActiveBorderWidth && isActive ? this.selectedActiveBorderWidth + " " : "";
    const activeBorderColor = this.selectedActiveBorderColor && isActive ? this.selectedActiveBorderColor + " " : "";
    return (borderRadius + flatShadow + interactiveShadow + borderWidth + activeBorderWidth + borderColor + activeBorderColor + activeBG + hoverShadow + hoverBorderColor + hoverBG + cursor).trim();
  }
  static \u0275fac = function ColorGeneratorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ColorGeneratorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ColorGeneratorComponent, selectors: [["aida-color-generator"]], decls: 663, vars: 183, consts: [["shades", ""], ["id", "wb-cont"], [1, "text-xl", "mb-1"], [1, "mt-0"], ["fragment", "semantic-groups", 3, "routerLink"], ["fragment", "all-components", 3, "routerLink"], ["fragment", "messages", 3, "routerLink"], ["fragment", "cards", 3, "routerLink"], ["fragment", "palettes", 3, "routerLink"], ["mode", "theme"], [1, "mb-6"], ["id", "semantic-groups", 1, "mb-3"], [1, "mb-3", "text-sm", "text-color-secondary"], [1, "grid"], [1, "col-12", "md:col-6"], [1, "surface-50", "border-round", "p-4", "max-h-full"], [1, "mt-0", "mb-3", "text-center", "text-lg", "font-bold", "text-green-600"], [1, "grid", "h-full"], [1, "col-6"], [1, "flex", "flex-column", "justify-content-between", "text-center", "h-full", "gap-2"], [1, "flex", "flex-column", "gap-2"], [1, "text-sm", "font-semibold", "mb-0"], [1, "flex", "flex-wrap", "justify-content-center", "align-items-center", "gap-2"], ["label", "Primary button", "size", "small"], ["label", "Primary button", "outlined", "", "size", "small", "styleClass", "secondary-outline"], ["value", "Primary tag"], ["value", "1"], [1, "flex", "flex-row", "gap-2"], [1, "w-full", "h-3rem", "bg-primary-400", "border-round", "align-content-center", "text-black-alpha-90"], [1, "w-full", "h-3rem", "bg-primary-500", "border-round", "align-content-center", "text-white"], ["initialColor", "bg-primary-500", 3, "colorChanged", "contrastTests", "externalShades", "key"], ["label", "Success button", "severity", "success", "size", "small"], ["label", "Success button", "outlined", "", "severity", "success", "size", "small", "styleClass", "secondary-outline"], ["value", "Success tag", "severity", "success"], ["value", "2", "severity", "success"], [1, "w-full", "h-3rem", "bg-green-400", "border-round", "align-content-center", "text-black-alpha-90"], [1, "w-full", "h-3rem", "bg-green-500", "border-round", "align-content-center", "text-white"], ["icon", "pi pi-check-circle", "severity", "success", "text", "Success: message"], ["initialColor", "bg-green-500", 3, "colorChanged", "contrastTests", "externalShades", "key"], [1, "mt-0", "mb-3", "text-center", "text-lg", "font-bold", "text-red-600"], ["label", "Danger button", "severity", "danger", "size", "small"], ["label", "Danger button", "outlined", "", "severity", "danger", "size", "small", "styleClass", "secondary-outline"], ["value", "Danger tag", "severity", "danger"], ["value", "3", "severity", "danger"], [1, "w-full", "h-3rem", "bg-red-400", "border-round", "align-content-center", "text-black-alpha-90"], [1, "w-full", "h-3rem", "bg-red-500", "border-round", "align-content-center", "text-white"], ["icon", "pi pi-times-circle", "severity", "error", "text", "Error: message"], ["initialColor", "bg-red-500", 3, "colorChanged", "contrastTests", "externalShades", "key"], ["label", "Warning button", "severity", "warn", "size", "small"], ["label", "Warning button", "outlined", "", "severity", "warn", "size", "small", "styleClass", "secondary-outline"], ["value", "Warning tag", "severity", "warn"], ["value", "4", "severity", "warn"], [1, "w-full", "h-3rem", "bg-orange-400", "border-round", "align-content-center", "text-black-alpha-90"], [1, "w-full", "h-3rem", "bg-orange-500", "border-round", "align-content-center", "text-white"], ["icon", "pi pi-exclamation-triangle", "severity", "warn", "text", "Warning: message"], ["initialColor", "bg-orange-500", 3, "colorChanged", "contrastTests", "externalShades", "key"], [1, "mt-0", "mb-3", "text-center", "text-lg", "font-bold", "text-blue-600"], ["label", "Info button", "severity", "info", "size", "small"], ["label", "Info button", "outlined", "", "severity", "info", "size", "small", "styleClass", "secondary-outline"], ["value", "Info tag", "severity", "info"], ["value", "5", "severity", "info"], [1, "w-full", "h-3rem", "bg-blue-400", "border-round", "align-content-center", "text-black-alpha-90"], [1, "w-full", "h-3rem", "bg-blue-500", "border-round", "align-content-center", "text-white"], ["icon", "pi pi-info-circle", "severity", "info", "text", "Info: message"], ["initialColor", "bg-blue-500", 3, "colorChanged", "contrastTests", "externalShades", "key"], ["label", "Help button", "severity", "help", "size", "small"], ["label", "Help button", "outlined", "", "severity", "help", "size", "small", "styleClass", "secondary-outline"], [1, "w-full", "h-3rem", "bg-purple-400", "border-round", "align-content-center", "text-black-alpha-90"], [1, "w-full", "h-3rem", "bg-purple-500", "border-round", "align-content-center", "text-white"], ["initialColor", "bg-purple-500", 3, "colorChanged", "contrastTests", "externalShades", "key"], [1, "surface-50", "border-round", "p-4", "h-full"], [1, "mt-0", "mb-3", "text-center", "text-lg", "font-bold", "text-color-secondary"], ["label", "Secondary button", "severity", "secondary", "size", "small"], ["label", "Secondary button", "outlined", "", "severity", "secondary", "size", "small", "styleClass", "secondary-outline"], ["value", "Secondary tag", "severity", "secondary"], ["value", "7", "severity", "secondary"], [1, "w-full", "h-3rem", "surface-100", "border-round", "align-content-center"], ["severity", "secondary", "text", "Secondary: message"], [1, "text-xs", "text-color-secondary"], ["label", "Contrast button", "severity", "contrast", "size", "small"], ["label", "Contrast button", "outlined", "", "severity", "contrast", "size", "small", "styleClass", "secondary-outline"], ["value", "Contrast tag", "severity", "contrast"], ["value", "8", "severity", "contrast"], [1, "w-full", "h-3rem", "surface-900", "border-round", "align-content-center"], ["severity", "contrast", "text", "Contrast: message"], ["id", "all-components", 1, "mb-3"], [1, "flex", "flex-wrap", "gap-2", "mb-4"], ["label", "Primary"], ["label", "Success", "severity", "success"], ["label", "Danger", "severity", "danger"], ["label", "Warning", "severity", "warn"], ["label", "Info", "severity", "info"], ["label", "Help", "severity", "help"], ["label", "Secondary", "severity", "secondary"], ["label", "Contrast", "severity", "contrast"], ["label", "Primary", "outlined", ""], ["label", "Success", "outlined", "", "severity", "success"], ["label", "Danger", "outlined", "", "severity", "danger"], ["label", "Warning", "outlined", "", "severity", "warn"], ["label", "Info", "outlined", "", "severity", "info"], ["label", "Help", "outlined", "", "severity", "help"], ["label", "Secondary", "outlined", "", "severity", "secondary"], ["label", "Contrast", "outlined", "", "severity", "contrast"], ["label", "Primary", "outlined", "", "styleClass", "secondary-outline"], ["label", "Success", "outlined", "", "severity", "success", "styleClass", "secondary-outline"], ["label", "Danger", "outlined", "", "severity", "danger", "styleClass", "secondary-outline"], ["label", "Warning", "outlined", "", "severity", "warn", "styleClass", "secondary-outline"], ["label", "Info", "outlined", "", "severity", "info", "styleClass", "secondary-outline"], ["label", "Help", "outlined", "", "severity", "help", "styleClass", "secondary-outline"], ["label", "Secondary", "outlined", "", "severity", "secondary", "styleClass", "secondary-outline"], ["label", "Contrast", "outlined", "", "severity", "contrast", "styleClass", "secondary-outline"], ["icon", "pi pi-bars", "outlined", "", "styleClass", "secondary-outline"], ["icon", "pi pi-check-circle", "outlined", "", "severity", "success", "styleClass", "secondary-outline"], ["icon", "pi pi-trash", "outlined", "", "severity", "danger", "styleClass", "secondary-outline"], ["icon", "pi pi-refresh", "outlined", "", "severity", "warn", "styleClass", "secondary-outline"], ["icon", "pi pi-question-circle", "outlined", "", "severity", "info", "styleClass", "secondary-outline"], ["icon", "pi pi-ellipsis-h", "outlined", "", "severity", "help", "styleClass", "secondary-outline"], ["icon", "pi pi-ellipsis-v", "outlined", "", "severity", "secondary", "styleClass", "secondary-outline"], ["icon", "pi pi-external-link", "outlined", "", "severity", "contrast", "styleClass", "secondary-outline"], ["value", "Primary"], ["value", "Success", "severity", "success"], ["value", "Danger", "severity", "danger"], ["value", "Warning", "severity", "warn"], ["value", "Info", "severity", "info"], ["value", "Secondary", "severity", "secondary"], ["value", "Contrast", "severity", "contrast"], [1, "flex", "gap-1", "mb-2"], [1, "flex-1", "h-4rem", "bg-primary-500", "border-round", "flex", "align-items-center", "justify-content-center", "text-white", "text-xs", "font-semibold"], [1, "flex-1", "h-4rem", "bg-green-500", "border-round", "flex", "align-items-center", "justify-content-center", "text-white", "text-xs", "font-semibold"], [1, "flex-1", "h-4rem", "bg-red-500", "border-round", "flex", "align-items-center", "justify-content-center", "text-white", "text-xs", "font-semibold"], [1, "flex-1", "h-4rem", "bg-orange-500", "border-round", "flex", "align-items-center", "justify-content-center", "text-white", "text-xs", "font-semibold"], [1, "flex-1", "h-4rem", "bg-blue-500", "border-round", "flex", "align-items-center", "justify-content-center", "text-white", "text-xs", "font-semibold"], [1, "flex-1", "h-4rem", "bg-purple-500", "border-round", "flex", "align-items-center", "justify-content-center", "text-white", "text-xs", "font-semibold"], [1, "flex-1", "h-4rem", "surface-100", "border-round", "flex", "align-items-center", "justify-content-center", "text-color", "text-xs", "font-semibold"], [1, "flex-1", "h-4rem", "surface-900", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold"], [1, "flex", "flex-column", "gap-1", "mb-2"], ["id", "messages", 1, "mb-3"], [1, "mb-2", "text-sm", "font-semibold", "uppercase", "text-green-600"], [1, "flex", "flex-column", "gap-2", "mb-4"], [1, "mb-2", "text-sm", "font-semibold", "uppercase", "text-red-600"], [1, "mb-2", "text-sm", "font-semibold", "uppercase", "text-blue-600"], [1, "mb-2", "text-sm", "font-semibold", "uppercase", "text-color-secondary"], ["id", "cards", 1, "mb-3"], [1, "flex", "flex-column", "gap-3"], [1, "flex", "gap-3", "mb-2"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "border-1", "border-0"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "border-1", "border-50"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "border-1", "border-100"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "border-1", "surface-border"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "border-1", "border-200"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "border-1", "border-300"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "border-1", "border-400"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "border-1", "border-500"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "border-1", "border-600"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "border-1", "border-700"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "border-1", "border-800"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "border-1", "border-900"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "border-1", "border-primary"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "border-2", "border-0"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "border-2", "border-50"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "border-2", "border-100"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "border-2", "surface-border"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "border-2", "border-200"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "border-2", "border-300"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "border-2", "border-400"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "border-2", "border-500"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "border-2", "border-600"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "border-2", "border-700"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "border-2", "border-800"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "border-2", "border-900"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "border-2", "border-primary"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "border-3", "border-0"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "border-3", "border-50"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "border-3", "border-100"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "border-3", "surface-border"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "border-3", "border-200"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "border-3", "border-300"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "border-3", "border-400"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "border-3", "border-500"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "border-3", "border-600"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "border-3", "border-700"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "border-3", "border-800"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "border-3", "border-900"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "border-3", "border-primary"], [1, "flex", "gap-5", "my-5"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "shadow-none"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "shadow-1"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "shadow-2"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "shadow-3"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "shadow-4"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "shadow-5"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "shadow-6"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "shadow-7"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "shadow-8"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "shadow-none", "hover:shadow-1"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "shadow-none", "hover:shadow-2"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "shadow-1", "hover:shadow-2"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "shadow-1", "hover:shadow-3"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "shadow-2", "hover:shadow-3"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "shadow-2", "hover:shadow-4"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "shadow-3", "hover:shadow-4"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "shadow-3", "hover:shadow-5"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "shadow-1", "hover:shadow-3", "hover:surface-50"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "shadow-1", "hover:shadow-3", "hover:surface-100"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "shadow-1", "hover:shadow-3", "hover:surface-200"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "shadow-1", "hover:shadow-3", "hover:bg-primary-50"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "shadow-1", "hover:shadow-3", "hover:bg-primary-100"], [1, "flex-1", "h-4rem", "surface-card", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold", "shadow-1", "hover:shadow-3", "hover:bg-primary-200"], [1, "grid", "mt-3"], [1, "col-9"], [1, "mb-0"], [1, "col-3"], ["fluid", "", "inputId", "border-width", 3, "ngModelChange", "ngModel", "options"], ["for", "border-width"], ["fluid", "", "inputId", "border-color", 3, "ngModelChange", "ngModel", "options"], ["for", "border-color"], ["fluid", "", "inputId", "background", 3, "ngModelChange", "ngModel", "options"], ["for", "background"], ["fluid", "", "inputId", "border-radius", 3, "ngModelChange", "ngModel", "options"], ["for", "border-radius"], ["fluid", "", "inputId", "active-border-width", 3, "ngModelChange", "ngModel", "options"], ["for", "active-border-width"], ["fluid", "", "inputId", "active-border-color", 3, "ngModelChange", "ngModel", "options"], ["for", "active-border-color"], ["fluid", "", "inputId", "active-background", 3, "ngModelChange", "ngModel", "options"], ["for", "active-background"], [1, "col-3", "col-offset-3"], ["fluid", "", "inputId", "hover-border-color", 3, "ngModelChange", "ngModel", "options"], ["for", "hover-border-color"], ["fluid", "", "inputId", "hover-background", 3, "ngModelChange", "ngModel", "options"], ["for", "hover-background"], [1, "col-3", "border-3", "border-dashed", "surface-border"], [1, "col-12", "mb-5"], ["fluid", "", "inputId", "flat-shadow", 3, "ngModelChange", "ngModel", "options"], ["for", "flat-shadow"], ["fluid", "", "inputId", "interactive-shadow", 3, "ngModelChange", "ngModel", "options"], ["for", "interactive-shadow"], [1, "col-12"], ["fluid", "", "inputId", "hover-shadow", 3, "ngModelChange", "ngModel", "options"], ["for", "hover-shadow"], [1, "flex", "justify-content-between", "align-items-end", "gap-2", "mt-2"], [1, "flex", "align-items-end", "gap-2"], [1, "flex", "flex-column", "border-round", "p-1", "text-color-secondary", "hover:surface-100", "hover:text-primary"], [1, "text-xs", "my-1"], ["inputId", "ground", 3, "ngModelChange", "ngModel", "options"], [1, "mb-5", "p-8", "surface-border", "border-1", 3, "ngStyle"], [1, "flex", "gap-2", "justify-content-between"], ["fluid", "", "label", "Primary button"], ["fluid", "", "label", "Secondary button", "outlined", "", 1, "secondary", "outline"], [1, "p-4", "w-full", 3, "ngClass"], [1, "col-12", "xl:col-2"], [1, "col-12", "xl:col-10"], [1, "m-0"], ["id", "palettes", 1, "mb-3"], [1, "flex", "flex-row", "gap-2", "mt-2"], [1, "flex", "flex-column"], ["initialColor", " bg-primary-500", 3, "colorChanged", "contrastTests", "externalShades", "key"], [1, "text-sm"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "customShades"], ["tabindex", "0", 1, "p-4", "w-full", "h-full", 3, "click", "keydown.enter", "ngClass"], [1, "mt-0", "text-primary", "hover:underline"], [1, "flex", "gap-1", "mb-3"]], template: function ColorGeneratorComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "h1", 1);
      \u0275\u0275text(1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p");
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h2", 2);
      \u0275\u0275text(8, "On this page");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "ul", 3)(10, "li")(11, "a", 4);
      \u0275\u0275text(12, "Semantic colour grouping");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "li")(14, "a", 5);
      \u0275\u0275text(15, "All components side-by-side");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "li")(17, "a", 6);
      \u0275\u0275text(18, "Messages by semantic meaning");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "li")(20, "a", 7);
      \u0275\u0275text(21, "Card contrast comparison");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "li")(23, "a", 8);
      \u0275\u0275text(24, "Full colour palettes");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(25, "aida-user-settings", 9);
      \u0275\u0275elementStart(26, "div", 10)(27, "h2", 11);
      \u0275\u0275text(28, "Semantic colour grouping");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "p", 12);
      \u0275\u0275text(30, " Colours should be clearly distinguishable between quadrants. Contrast ratio must be above 4.5 for normal text and above 3:1 for large text (24px or 18.5px bold) to meet AA WCAG requirements. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 13)(32, "div", 14)(33, "div", 15)(34, "h3", 16);
      \u0275\u0275text(35, "POSITIVE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 17)(37, "div", 18)(38, "div", 19)(39, "div", 20)(40, "p", 21);
      \u0275\u0275text(41, "PRIMARY");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 22);
      \u0275\u0275element(43, "p-button", 23)(44, "p-button", 24)(45, "p-tag", 25)(46, "p-badge", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 27)(48, "div", 28);
      \u0275\u0275text(49, "Black text");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "div", 29);
      \u0275\u0275text(51, "White text");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(52, "aida-color-picker", 30);
      \u0275\u0275listener("colorChanged", function ColorGeneratorComponent_Template_aida_color_picker_colorChanged_52_listener($event) {
        return ctx.onColorChange($event, "primary");
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(53, "div", 18)(54, "div", 19)(55, "div", 20)(56, "p", 21);
      \u0275\u0275text(57, "SUCCESS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "div", 22);
      \u0275\u0275element(59, "p-button", 31)(60, "p-button", 32)(61, "p-tag", 33)(62, "p-badge", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "div", 27)(64, "div", 35);
      \u0275\u0275text(65, "Black text");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "div", 36);
      \u0275\u0275text(67, "White text");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(68, "p-message", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "aida-color-picker", 38);
      \u0275\u0275listener("colorChanged", function ColorGeneratorComponent_Template_aida_color_picker_colorChanged_69_listener($event) {
        return ctx.onColorChange($event, "green");
      });
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(70, "div", 14)(71, "div", 15)(72, "h3", 39);
      \u0275\u0275text(73, "NEGATIVE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "div", 17)(75, "div", 18)(76, "div", 19)(77, "div", 20)(78, "p", 21);
      \u0275\u0275text(79, "DANGER");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "div", 22);
      \u0275\u0275element(81, "p-button", 40)(82, "p-button", 41)(83, "p-tag", 42)(84, "p-badge", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "div", 27)(86, "div", 44);
      \u0275\u0275text(87, "Black text");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "div", 45);
      \u0275\u0275text(89, "White text");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(90, "p-message", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "aida-color-picker", 47);
      \u0275\u0275listener("colorChanged", function ColorGeneratorComponent_Template_aida_color_picker_colorChanged_91_listener($event) {
        return ctx.onColorChange($event, "red");
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(92, "div", 18)(93, "div", 19)(94, "div", 20)(95, "p", 21);
      \u0275\u0275text(96, "WARNING");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "div", 22);
      \u0275\u0275element(98, "p-button", 48)(99, "p-button", 49)(100, "p-tag", 50)(101, "p-badge", 51);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "div", 27)(103, "div", 52);
      \u0275\u0275text(104, "Black text");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "div", 53);
      \u0275\u0275text(106, "White text");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(107, "p-message", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "aida-color-picker", 55);
      \u0275\u0275listener("colorChanged", function ColorGeneratorComponent_Template_aida_color_picker_colorChanged_108_listener($event) {
        return ctx.onWarnColorChange($event);
      });
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(109, "div", 14)(110, "div", 15)(111, "h3", 56);
      \u0275\u0275text(112, "INFORMATION");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "div", 17)(114, "div", 18)(115, "div", 19)(116, "div", 20)(117, "p", 21);
      \u0275\u0275text(118, "INFO");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "div", 22);
      \u0275\u0275element(120, "p-button", 57)(121, "p-button", 58)(122, "p-tag", 59)(123, "p-badge", 60);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "div", 27)(125, "div", 61);
      \u0275\u0275text(126, "Black text");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "div", 62);
      \u0275\u0275text(128, "White text");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(129, "p-message", 63);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "aida-color-picker", 64);
      \u0275\u0275listener("colorChanged", function ColorGeneratorComponent_Template_aida_color_picker_colorChanged_130_listener($event) {
        return ctx.onInfoColorChange($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(131, "div", 18)(132, "div", 19)(133, "div", 20)(134, "p", 21);
      \u0275\u0275text(135, "HELP");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "div", 22);
      \u0275\u0275element(137, "p-button", 65)(138, "p-button", 66);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "div", 27)(140, "div", 67);
      \u0275\u0275text(141, "Black text");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(142, "div", 68);
      \u0275\u0275text(143, "White text");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(144, "aida-color-picker", 69);
      \u0275\u0275listener("colorChanged", function ColorGeneratorComponent_Template_aida_color_picker_colorChanged_144_listener($event) {
        return ctx.onColorChange($event, "purple");
      });
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(145, "div", 14)(146, "div", 70)(147, "h3", 71);
      \u0275\u0275text(148, "NEUTRAL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(149, "div", 17)(150, "div", 18)(151, "div", 19)(152, "div", 20)(153, "p", 21);
      \u0275\u0275text(154, "SECONDARY");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "div", 22);
      \u0275\u0275element(156, "p-button", 72)(157, "p-button", 73)(158, "p-tag", 74)(159, "p-badge", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(160, "div", 76);
      \u0275\u0275text(161, "Secondary background");
      \u0275\u0275elementEnd();
      \u0275\u0275element(162, "p-message", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(163, "p", 78);
      \u0275\u0275text(164, "No customization available");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(165, "div", 18)(166, "div", 19)(167, "div", 20)(168, "p", 21);
      \u0275\u0275text(169, "CONTRAST");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "div", 22);
      \u0275\u0275element(171, "p-button", 79)(172, "p-button", 80)(173, "p-tag", 81)(174, "p-badge", 82);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(175, "div", 83);
      \u0275\u0275text(176, "Contrast background");
      \u0275\u0275elementEnd();
      \u0275\u0275element(177, "p-message", 84);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(178, "p", 78);
      \u0275\u0275text(179, "No customization available");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275element(180, "p-divider");
      \u0275\u0275elementStart(181, "div", 10)(182, "h2", 85);
      \u0275\u0275text(183, "All components side-by-side");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(184, "div", 86)(185, "p");
      \u0275\u0275text(186, "Regular Buttons");
      \u0275\u0275elementEnd();
      \u0275\u0275element(187, "p-button", 87)(188, "p-button", 88)(189, "p-button", 89)(190, "p-button", 90)(191, "p-button", 91)(192, "p-button", 92)(193, "p-button", 93)(194, "p-button", 94);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(195, "div", 86)(196, "p");
      \u0275\u0275text(197, "Outlined Buttons");
      \u0275\u0275elementEnd();
      \u0275\u0275element(198, "p-button", 95)(199, "p-button", 96)(200, "p-button", 97)(201, "p-button", 98)(202, "p-button", 99)(203, "p-button", 100)(204, "p-button", 101)(205, "p-button", 102);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(206, "div", 86)(207, "p");
      \u0275\u0275text(208, "Grey Outlined Buttons");
      \u0275\u0275elementEnd();
      \u0275\u0275element(209, "p-button", 103)(210, "p-button", 104)(211, "p-button", 105)(212, "p-button", 106)(213, "p-button", 107)(214, "p-button", 108)(215, "p-button", 109)(216, "p-button", 110);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(217, "div", 86)(218, "p");
      \u0275\u0275text(219, "Icon Buttons");
      \u0275\u0275elementEnd();
      \u0275\u0275element(220, "p-button", 111)(221, "p-button", 112)(222, "p-button", 113)(223, "p-button", 114)(224, "p-button", 115)(225, "p-button", 116)(226, "p-button", 117)(227, "p-button", 118);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(228, "div", 86)(229, "span");
      \u0275\u0275text(230, "Tags");
      \u0275\u0275elementEnd();
      \u0275\u0275element(231, "p-tag", 119)(232, "p-tag", 120)(233, "p-tag", 121)(234, "p-tag", 122)(235, "p-tag", 123)(236, "p-tag", 124)(237, "p-tag", 125);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(238, "div", 86)(239, "span");
      \u0275\u0275text(240, "Badges");
      \u0275\u0275elementEnd();
      \u0275\u0275element(241, "p-badge", 26)(242, "p-badge", 34)(243, "p-badge", 43)(244, "p-badge", 51)(245, "p-badge", 60)(246, "p-badge", 75)(247, "p-badge", 82);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(248, "div", 126)(249, "p");
      \u0275\u0275text(250, "Backgrounds");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(251, "div", 127);
      \u0275\u0275text(252, "Primary");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(253, "div", 128);
      \u0275\u0275text(254, "Success");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(255, "div", 129);
      \u0275\u0275text(256, "Danger");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(257, "div", 130);
      \u0275\u0275text(258, "Warning");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(259, "div", 131);
      \u0275\u0275text(260, "Info");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(261, "div", 132);
      \u0275\u0275text(262, "Help");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(263, "div", 133);
      \u0275\u0275text(264, "Secondary");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(265, "div", 134);
      \u0275\u0275text(266, " Contrast ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(267, "div", 135)(268, "p");
      \u0275\u0275text(269, "Messages");
      \u0275\u0275elementEnd();
      \u0275\u0275element(270, "p-message", 63)(271, "p-message", 37)(272, "p-message", 46)(273, "p-message", 54)(274, "p-message", 77)(275, "p-message", 84);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(276, "p-divider");
      \u0275\u0275elementStart(277, "div", 10)(278, "h2", 136);
      \u0275\u0275text(279, "Messages by semantic meaning");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(280, "p", 12);
      \u0275\u0275text(281, "Colours should be clearly distinguishable between quadrants.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(282, "div", 13)(283, "div", 14)(284, "h4", 137);
      \u0275\u0275text(285, "Positive Messages");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(286, "div", 138);
      \u0275\u0275element(287, "p-message", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(288, "div", 14)(289, "h4", 139);
      \u0275\u0275text(290, "Negative Messages");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(291, "div", 138);
      \u0275\u0275element(292, "p-message", 46)(293, "p-message", 54);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(294, "div", 14)(295, "h4", 140);
      \u0275\u0275text(296, "Information Messages");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(297, "div", 138);
      \u0275\u0275element(298, "p-message", 63);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(299, "div", 14)(300, "h4", 141);
      \u0275\u0275text(301, "Neutral Messages");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(302, "div", 138);
      \u0275\u0275element(303, "p-message", 77)(304, "p-message", 84);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(305, "p-divider");
      \u0275\u0275elementStart(306, "div", 10)(307, "h2", 142);
      \u0275\u0275text(308, "Card contrast comparison");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(309, "p", 12);
      \u0275\u0275text(310, "Cards should be clearly distinguishable from the background.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(311, "div", 143)(312, "div", 144)(313, "p");
      \u0275\u0275text(314, "Width: border-1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(315, "div", 145);
      \u0275\u0275text(316, "border-0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(317, "div", 146);
      \u0275\u0275text(318, "border-50");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(319, "div", 147);
      \u0275\u0275text(320, "border-100");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(321, "div", 148);
      \u0275\u0275text(322, "surface-border");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(323, "div", 149);
      \u0275\u0275text(324, "border-200");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(325, "div", 150);
      \u0275\u0275text(326, "border-300");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(327, "div", 151);
      \u0275\u0275text(328, "border-400");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(329, "div", 152);
      \u0275\u0275text(330, "border-500");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(331, "div", 153);
      \u0275\u0275text(332, "border-600");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(333, "div", 154);
      \u0275\u0275text(334, "border-700");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(335, "div", 155);
      \u0275\u0275text(336, "border-800");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(337, "div", 156);
      \u0275\u0275text(338, "border-900");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(339, "div", 157);
      \u0275\u0275text(340, "border-primary");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(341, "div", 144)(342, "p");
      \u0275\u0275text(343, "Width: border-2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(344, "div", 158);
      \u0275\u0275text(345, "border-0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(346, "div", 159);
      \u0275\u0275text(347, "border-50");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(348, "div", 160);
      \u0275\u0275text(349, "border-100");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(350, "div", 161);
      \u0275\u0275text(351, "surface-border");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(352, "div", 162);
      \u0275\u0275text(353, "border-200");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(354, "div", 163);
      \u0275\u0275text(355, "border-300");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(356, "div", 164);
      \u0275\u0275text(357, "border-400");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(358, "div", 165);
      \u0275\u0275text(359, "border-500");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(360, "div", 166);
      \u0275\u0275text(361, "border-600");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(362, "div", 167);
      \u0275\u0275text(363, "border-700");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(364, "div", 168);
      \u0275\u0275text(365, "border-800");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(366, "div", 169);
      \u0275\u0275text(367, "border-900");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(368, "div", 170);
      \u0275\u0275text(369, "border-primary");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(370, "div", 144)(371, "p");
      \u0275\u0275text(372, "Width: border-3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(373, "div", 171);
      \u0275\u0275text(374, "border-0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(375, "div", 172);
      \u0275\u0275text(376, "border-50");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(377, "div", 173);
      \u0275\u0275text(378, "border-100");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(379, "div", 174);
      \u0275\u0275text(380, "surface-border");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(381, "div", 175);
      \u0275\u0275text(382, "border-200");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(383, "div", 176);
      \u0275\u0275text(384, "border-300");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(385, "div", 177);
      \u0275\u0275text(386, "border-400");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(387, "div", 178);
      \u0275\u0275text(388, "border-500");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(389, "div", 179);
      \u0275\u0275text(390, "border-600");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(391, "div", 180);
      \u0275\u0275text(392, "border-700");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(393, "div", 181);
      \u0275\u0275text(394, "border-800");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(395, "div", 182);
      \u0275\u0275text(396, "border-900");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(397, "div", 183);
      \u0275\u0275text(398, "border-primary");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(399, "div", 184)(400, "p");
      \u0275\u0275text(401, "Shadow");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(402, "div", 185);
      \u0275\u0275text(403, "shadow-none");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(404, "div", 186);
      \u0275\u0275text(405, "shadow-1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(406, "div", 187);
      \u0275\u0275text(407, "shadow-2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(408, "div", 188);
      \u0275\u0275text(409, "shadow-3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(410, "div", 189);
      \u0275\u0275text(411, "shadow-4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(412, "div", 190);
      \u0275\u0275text(413, "shadow-5");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(414, "div", 191);
      \u0275\u0275text(415, "shadow-6");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(416, "div", 192);
      \u0275\u0275text(417, "shadow-7");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(418, "div", 193);
      \u0275\u0275text(419, "shadow-8");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(420, "div", 144)(421, "p");
      \u0275\u0275text(422, "Hover effects");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(423, "div", 194);
      \u0275\u0275text(424, "shadow-none");
      \u0275\u0275element(425, "br");
      \u0275\u0275text(426, "hover:shadow-1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(427, "div", 195);
      \u0275\u0275text(428, "shadow-none");
      \u0275\u0275element(429, "br");
      \u0275\u0275text(430, "hover:shadow-2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(431, "div", 196);
      \u0275\u0275text(432, "shadow-1");
      \u0275\u0275element(433, "br");
      \u0275\u0275text(434, "hover:shadow-2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(435, "div", 197);
      \u0275\u0275text(436, "shadow-1");
      \u0275\u0275element(437, "br");
      \u0275\u0275text(438, "hover:shadow-3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(439, "div", 198);
      \u0275\u0275text(440, "shadow-2");
      \u0275\u0275element(441, "br");
      \u0275\u0275text(442, "hover:shadow-3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(443, "div", 199);
      \u0275\u0275text(444, "shadow-2");
      \u0275\u0275element(445, "br");
      \u0275\u0275text(446, "hover:shadow-4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(447, "div", 200);
      \u0275\u0275text(448, "shadow-3");
      \u0275\u0275element(449, "br");
      \u0275\u0275text(450, "hover:shadow-4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(451, "div", 201);
      \u0275\u0275text(452, "shadow-3");
      \u0275\u0275element(453, "br");
      \u0275\u0275text(454, "hover:shadow-5");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(455, "div", 144)(456, "p");
      \u0275\u0275text(457, "Hover effects");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(458, "div", 202);
      \u0275\u0275text(459, " shadow-1 & hover:shadow-3");
      \u0275\u0275element(460, "br");
      \u0275\u0275text(461, "hover:surface-50 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(462, "div", 203);
      \u0275\u0275text(463, " shadow-1 & hover:shadow-3");
      \u0275\u0275element(464, "br");
      \u0275\u0275text(465, "hover:surface-100 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(466, "div", 204);
      \u0275\u0275text(467, " shadow-1 & hover:shadow-3");
      \u0275\u0275element(468, "br");
      \u0275\u0275text(469, "hover:surface-200 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(470, "div", 144)(471, "p");
      \u0275\u0275text(472, "Hover effects");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(473, "div", 205);
      \u0275\u0275text(474, " shadow-1 & hover:shadow-3");
      \u0275\u0275element(475, "br");
      \u0275\u0275text(476, "hover:primary-50 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(477, "div", 206);
      \u0275\u0275text(478, " shadow-1 & hover:shadow-3");
      \u0275\u0275element(479, "br");
      \u0275\u0275text(480, "hover:primary-100 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(481, "div", 207);
      \u0275\u0275text(482, " shadow-1 & hover:shadow-3");
      \u0275\u0275element(483, "br");
      \u0275\u0275text(484, "hover:primary-200 ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(485, "div", 208)(486, "div", 209)(487, "h3", 210);
      \u0275\u0275text(488, "Global card options");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(489, "div", 13)(490, "p-iftalabel", 211)(491, "p-select", 212);
      \u0275\u0275twoWayListener("ngModelChange", function ColorGeneratorComponent_Template_p_select_ngModelChange_491_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedBorderWidth, $event) || (ctx.selectedBorderWidth = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(492, "label", 213);
      \u0275\u0275text(493, "Border width");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(494, "p-iftalabel", 211)(495, "p-select", 214);
      \u0275\u0275twoWayListener("ngModelChange", function ColorGeneratorComponent_Template_p_select_ngModelChange_495_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedBorderColor, $event) || (ctx.selectedBorderColor = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(496, "label", 215);
      \u0275\u0275text(497, "Border colour");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(498, "p-iftalabel", 211)(499, "p-select", 216);
      \u0275\u0275twoWayListener("ngModelChange", function ColorGeneratorComponent_Template_p_select_ngModelChange_499_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedBackground, $event) || (ctx.selectedBackground = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(500, "label", 217);
      \u0275\u0275text(501, "Background");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(502, "p-iftalabel", 211)(503, "p-select", 218);
      \u0275\u0275twoWayListener("ngModelChange", function ColorGeneratorComponent_Template_p_select_ngModelChange_503_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedBorderRadius, $event) || (ctx.selectedBorderRadius = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(504, "label", 219);
      \u0275\u0275text(505, "Border radius");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(506, "h3", 210);
      \u0275\u0275text(507, "Active state card options (interactive cards only)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(508, "div", 13)(509, "p-iftalabel", 211)(510, "p-select", 220);
      \u0275\u0275twoWayListener("ngModelChange", function ColorGeneratorComponent_Template_p_select_ngModelChange_510_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedActiveBorderWidth, $event) || (ctx.selectedActiveBorderWidth = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(511, "label", 221);
      \u0275\u0275text(512, "Active border width");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(513, "p-iftalabel", 211)(514, "p-select", 222);
      \u0275\u0275twoWayListener("ngModelChange", function ColorGeneratorComponent_Template_p_select_ngModelChange_514_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedActiveBorderColor, $event) || (ctx.selectedActiveBorderColor = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(515, "label", 223);
      \u0275\u0275text(516, "Active border colour");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(517, "p-iftalabel", 211)(518, "p-select", 224);
      \u0275\u0275listener("ngModelChange", function ColorGeneratorComponent_Template_p_select_ngModelChange_518_listener($event) {
        return ctx.selectedActiveBackground.set($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(519, "label", 225);
      \u0275\u0275text(520, "Active background");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(521, "h3", 210);
      \u0275\u0275text(522, "Hover state card options (interactive cards only)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(523, "div", 13)(524, "p-iftalabel", 226)(525, "p-select", 227);
      \u0275\u0275twoWayListener("ngModelChange", function ColorGeneratorComponent_Template_p_select_ngModelChange_525_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedHoverBorderColor, $event) || (ctx.selectedHoverBorderColor = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(526, "label", 228);
      \u0275\u0275text(527, "Hover border colour");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(528, "p-iftalabel", 211)(529, "p-select", 229);
      \u0275\u0275listener("ngModelChange", function ColorGeneratorComponent_Template_p_select_ngModelChange_529_listener($event) {
        return ctx.selectedHoverBackground.set($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(530, "label", 230);
      \u0275\u0275text(531, "Hover background");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(532, "div", 231)(533, "h3", 210);
      \u0275\u0275text(534, "Shadow options");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(535, "div", 13)(536, "p-iftalabel", 232)(537, "p-select", 233);
      \u0275\u0275twoWayListener("ngModelChange", function ColorGeneratorComponent_Template_p_select_ngModelChange_537_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedFlatShadow, $event) || (ctx.selectedFlatShadow = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(538, "label", 234);
      \u0275\u0275text(539, "Static shadow");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(540, "p-iftalabel", 232)(541, "p-select", 235);
      \u0275\u0275twoWayListener("ngModelChange", function ColorGeneratorComponent_Template_p_select_ngModelChange_541_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedInteractiveShadow, $event) || (ctx.selectedInteractiveShadow = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(542, "label", 236);
      \u0275\u0275text(543, "Interactive shadow");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(544, "p-iftalabel", 237)(545, "p-select", 238);
      \u0275\u0275twoWayListener("ngModelChange", function ColorGeneratorComponent_Template_p_select_ngModelChange_545_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedHoverShadow, $event) || (ctx.selectedHoverShadow = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(546, "label", 239);
      \u0275\u0275text(547, "Hover shadow");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(548, "div", 240)(549, "h3", 210);
      \u0275\u0275text(550, "Preview");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(551, "div", 241);
      \u0275\u0275element(552, "aida-user-settings", 9);
      \u0275\u0275elementStart(553, "div", 242)(554, "span", 243);
      \u0275\u0275text(555, "Ground");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(556, "p-select", 244);
      \u0275\u0275listener("ngModelChange", function ColorGeneratorComponent_Template_p_select_ngModelChange_556_listener($event) {
        return ctx.selectedGround.set($event);
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(557, "div", 245)(558, "div", 246)(559, "div")(560, "h1");
      \u0275\u0275text(561, "Page header");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(562, "p");
      \u0275\u0275text(563, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis autem vel eum iure reprehenderit qui in ea voluptate velit. Temporibus autem quibusdam et aut officiis debitis aut rerum.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(564, "div", 20);
      \u0275\u0275element(565, "p-button", 247)(566, "p-button", 248);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(567, "div", 143)(568, "div", 249)(569, "h2", 3);
      \u0275\u0275text(570, "Static card");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(571, "p");
      \u0275\u0275text(572, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis autem vel eum iure reprehenderit qui in ea voluptate velit. Temporibus autem quibusdam et aut officiis debitis aut rerum.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(573, "p");
      \u0275\u0275text(574, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem. Neque porro quisquam est, qui dolorem ipsum quia dolor sit.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(575, "p");
      \u0275\u0275text(576);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(577, "div", 13);
      \u0275\u0275repeaterCreate(578, ColorGeneratorComponent_For_579_Template, 6, 2, "div", 14, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(580, "p");
      \u0275\u0275text(581, "If you are happy with your selections, send these class lists to Amber so AIDA can be updated.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(582, "div", 13)(583, "div", 250);
      \u0275\u0275text(584, "Flat card:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(585, "div", 251)(586, "pre", 252);
      \u0275\u0275text(587);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(588, "div", 250);
      \u0275\u0275text(589, "Interactive card:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(590, "div", 251)(591, "pre", 252);
      \u0275\u0275text(592);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(593, "div", 250);
      \u0275\u0275text(594, "Active card:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(595, "div", 251)(596, "pre", 252);
      \u0275\u0275text(597);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(598, "div", 250);
      \u0275\u0275text(599, "Global app background:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(600, "div", 251)(601, "pre", 252);
      \u0275\u0275text(602);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(603, "p-divider");
      \u0275\u0275elementStart(604, "div", 10)(605, "h2", 253);
      \u0275\u0275text(606, "Full colour palettes");
      \u0275\u0275elementEnd();
      \u0275\u0275element(607, "aida-user-settings", 9);
      \u0275\u0275elementStart(608, "div", 254)(609, "div", 255);
      \u0275\u0275text(610, " Primary ");
      \u0275\u0275elementStart(611, "aida-color-picker", 256);
      \u0275\u0275listener("colorChanged", function ColorGeneratorComponent_Template_aida_color_picker_colorChanged_611_listener($event) {
        return ctx.onColorChange($event, "primary");
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(612, "div", 255);
      \u0275\u0275text(613, " Green (success) ");
      \u0275\u0275elementStart(614, "aida-color-picker", 38);
      \u0275\u0275listener("colorChanged", function ColorGeneratorComponent_Template_aida_color_picker_colorChanged_614_listener($event) {
        return ctx.onColorChange($event, "green");
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(615, "div", 255);
      \u0275\u0275text(616, " Red (danger) ");
      \u0275\u0275elementStart(617, "aida-color-picker", 47);
      \u0275\u0275listener("colorChanged", function ColorGeneratorComponent_Template_aida_color_picker_colorChanged_617_listener($event) {
        return ctx.onColorChange($event, "red");
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(618, "div", 255);
      \u0275\u0275text(619, " Orange (warn) ");
      \u0275\u0275elementStart(620, "aida-color-picker", 55);
      \u0275\u0275listener("colorChanged", function ColorGeneratorComponent_Template_aida_color_picker_colorChanged_620_listener($event) {
        return ctx.onWarnColorChange($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(621, "div", 255);
      \u0275\u0275text(622, " Blue (info) ");
      \u0275\u0275elementStart(623, "aida-color-picker", 64);
      \u0275\u0275listener("colorChanged", function ColorGeneratorComponent_Template_aida_color_picker_colorChanged_623_listener($event) {
        return ctx.onInfoColorChange($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(624, "div", 255);
      \u0275\u0275text(625, " Purple (help) ");
      \u0275\u0275elementStart(626, "aida-color-picker", 69);
      \u0275\u0275listener("colorChanged", function ColorGeneratorComponent_Template_aida_color_picker_colorChanged_626_listener($event) {
        return ctx.onColorChange($event, "purple");
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(627, "div", 13)(628, "div", 14)(629, "h4", 257);
      \u0275\u0275text(630, "Primary");
      \u0275\u0275elementEnd();
      \u0275\u0275template(631, ColorGeneratorComponent_ng_container_631_Template, 1, 0, "ng-container", 258);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(632, "div", 14)(633, "h4", 257);
      \u0275\u0275text(634, "Green (success)");
      \u0275\u0275elementEnd();
      \u0275\u0275template(635, ColorGeneratorComponent_ng_container_635_Template, 1, 0, "ng-container", 258);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(636, "div", 14)(637, "h4", 257);
      \u0275\u0275text(638, "Red (danger)");
      \u0275\u0275elementEnd();
      \u0275\u0275template(639, ColorGeneratorComponent_ng_container_639_Template, 1, 0, "ng-container", 258);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(640, "div", 14)(641, "h4", 257);
      \u0275\u0275text(642, "Orange (warn)");
      \u0275\u0275elementEnd();
      \u0275\u0275template(643, ColorGeneratorComponent_ng_container_643_Template, 1, 0, "ng-container", 258);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(644, "div", 14)(645, "h4", 257);
      \u0275\u0275text(646, "Blue (info)");
      \u0275\u0275elementEnd();
      \u0275\u0275template(647, ColorGeneratorComponent_ng_container_647_Template, 1, 0, "ng-container", 258);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(648, "div", 14)(649, "h4", 257);
      \u0275\u0275text(650, "Purple (help)");
      \u0275\u0275elementEnd();
      \u0275\u0275template(651, ColorGeneratorComponent_ng_container_651_Template, 1, 0, "ng-container", 258);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(652, "div", 14)(653, "h4", 257);
      \u0275\u0275text(654, "Surface (secondary)");
      \u0275\u0275elementEnd();
      \u0275\u0275template(655, ColorGeneratorComponent_ng_container_655_Template, 1, 0, "ng-container", 258);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(656, "div", 14)(657, "h4", 257);
      \u0275\u0275text(658, "Surface (contrast)");
      \u0275\u0275elementEnd();
      \u0275\u0275template(659, ColorGeneratorComponent_ng_container_659_Template, 1, 0, "ng-container", 258);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(660, "aida-copy-preset", 259);
      \u0275\u0275elementEnd();
      \u0275\u0275template(661, ColorGeneratorComponent_ng_template_661_Template, 11, 22, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const shades_r7 = \u0275\u0275reference(662);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 98, "dev.colors._title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(5, 100, "dev.colors.description"), "", \u0275\u0275pipeBind1(6, 102, "dev.colors.description2"));
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(104, _c02));
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(105, _c02));
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(106, _c02));
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(107, _c02));
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(108, _c02));
      \u0275\u0275advance(29);
      \u0275\u0275property("contrastTests", \u0275\u0275pureFunction2(111, _c32, \u0275\u0275pureFunction0(109, _c12), \u0275\u0275pureFunction0(110, _c22)))("externalShades", ctx.customShades()["primary"])("key", ctx.settingsService.colorScheme() + "-primary");
      \u0275\u0275advance(17);
      \u0275\u0275property("contrastTests", \u0275\u0275pureFunction2(116, _c32, \u0275\u0275pureFunction0(114, _c12), \u0275\u0275pureFunction0(115, _c22)))("externalShades", ctx.customShades()["green"])("key", ctx.settingsService.colorScheme() + "-success");
      \u0275\u0275advance(22);
      \u0275\u0275property("contrastTests", \u0275\u0275pureFunction2(121, _c32, \u0275\u0275pureFunction0(119, _c12), \u0275\u0275pureFunction0(120, _c22)))("externalShades", ctx.customShades()["red"])("key", ctx.settingsService.colorScheme() + "-danger");
      \u0275\u0275advance(17);
      \u0275\u0275property("contrastTests", \u0275\u0275pureFunction2(126, _c32, \u0275\u0275pureFunction0(124, _c12), \u0275\u0275pureFunction0(125, _c22)))("externalShades", ctx.customShades()["orange"])("key", ctx.settingsService.colorScheme() + "-warn");
      \u0275\u0275advance(22);
      \u0275\u0275property("contrastTests", \u0275\u0275pureFunction2(131, _c32, \u0275\u0275pureFunction0(129, _c12), \u0275\u0275pureFunction0(130, _c22)))("externalShades", ctx.customShades()["blue"])("key", ctx.settingsService.colorScheme() + "-info");
      \u0275\u0275advance(14);
      \u0275\u0275property("contrastTests", \u0275\u0275pureFunction2(136, _c32, \u0275\u0275pureFunction0(134, _c12), \u0275\u0275pureFunction0(135, _c22)))("externalShades", ctx.customShades()["purple"])("key", ctx.settingsService.colorScheme() + "-help");
      \u0275\u0275advance(31);
      \u0275\u0275classMap(ctx.settingsService.darkMode() ? "text-black-alpha-90" : "text-white");
      \u0275\u0275advance(90);
      \u0275\u0275classMap(ctx.settingsService.darkMode() ? "text-black-alpha-90" : "text-white");
      \u0275\u0275advance(226);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedBorderWidth);
      \u0275\u0275property("options", ctx.borderWidthOptions);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedBorderColor);
      \u0275\u0275property("options", ctx.borderColorOptions);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedBackground);
      \u0275\u0275property("options", \u0275\u0275pureFunction1(140, _c52, \u0275\u0275pureFunction0(139, _c42)));
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedBorderRadius);
      \u0275\u0275property("options", ctx.borderRadiusOptions);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedActiveBorderWidth);
      \u0275\u0275property("options", ctx.borderWidthOptions);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedActiveBorderColor);
      \u0275\u0275property("options", ctx.borderColorOptions);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngModel", ctx.selectedActiveBackground())("options", ctx.backgroundOptions());
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedHoverBorderColor);
      \u0275\u0275property("options", ctx.borderColorOptions);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngModel", ctx.selectedHoverBackground())("options", ctx.backgroundOptions());
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedFlatShadow);
      \u0275\u0275property("options", ctx.shadowOptions);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedInteractiveShadow);
      \u0275\u0275property("options", ctx.shadowOptions);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedHoverShadow);
      \u0275\u0275property("options", ctx.shadowOptions);
      \u0275\u0275advance(11);
      \u0275\u0275property("ngModel", ctx.selectedGround())("options", ctx.groundOptions());
      \u0275\u0275advance();
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(142, _c6, ctx.selectedGround()));
      \u0275\u0275advance(11);
      \u0275\u0275property("ngClass", ctx.cardStyles());
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1("Lorem ipsum dolor sit amet, consectetur adipiscing elit ", ctx.cardStyles(), ".");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(\u0275\u0275pureFunction0(144, _c7));
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.cardStyles());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.cardStyles(true));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.cardStyles(true, true));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("var(--p-", ctx.selectedGroundLabel(), ")");
      \u0275\u0275advance(9);
      \u0275\u0275property("contrastTests", \u0275\u0275pureFunction2(147, _c32, \u0275\u0275pureFunction0(145, _c12), \u0275\u0275pureFunction0(146, _c22)))("externalShades", ctx.customShades()["primary"])("key", ctx.settingsService.colorScheme() + "-primary");
      \u0275\u0275advance(3);
      \u0275\u0275property("contrastTests", \u0275\u0275pureFunction2(152, _c32, \u0275\u0275pureFunction0(150, _c12), \u0275\u0275pureFunction0(151, _c22)))("externalShades", ctx.customShades()["green"])("key", ctx.settingsService.colorScheme() + "-success");
      \u0275\u0275advance(3);
      \u0275\u0275property("contrastTests", \u0275\u0275pureFunction2(157, _c32, \u0275\u0275pureFunction0(155, _c12), \u0275\u0275pureFunction0(156, _c22)))("externalShades", ctx.customShades()["red"])("key", ctx.settingsService.colorScheme() + "-danger");
      \u0275\u0275advance(3);
      \u0275\u0275property("contrastTests", \u0275\u0275pureFunction2(162, _c32, \u0275\u0275pureFunction0(160, _c12), \u0275\u0275pureFunction0(161, _c22)))("externalShades", ctx.customShades()["orange"])("key", ctx.settingsService.colorScheme() + "-warn");
      \u0275\u0275advance(3);
      \u0275\u0275property("contrastTests", \u0275\u0275pureFunction2(167, _c32, \u0275\u0275pureFunction0(165, _c12), \u0275\u0275pureFunction0(166, _c22)))("externalShades", ctx.customShades()["blue"])("key", ctx.settingsService.colorScheme() + "-info");
      \u0275\u0275advance(3);
      \u0275\u0275property("contrastTests", \u0275\u0275pureFunction2(172, _c32, \u0275\u0275pureFunction0(170, _c12), \u0275\u0275pureFunction0(171, _c22)))("externalShades", ctx.customShades()["purple"])("key", ctx.settingsService.colorScheme() + "-help");
      \u0275\u0275advance(5);
      \u0275\u0275property("ngTemplateOutlet", shades_r7)("ngTemplateOutletContext", \u0275\u0275pureFunction0(175, _c8));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngTemplateOutlet", shades_r7)("ngTemplateOutletContext", \u0275\u0275pureFunction0(176, _c9));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngTemplateOutlet", shades_r7)("ngTemplateOutletContext", \u0275\u0275pureFunction0(177, _c10));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngTemplateOutlet", shades_r7)("ngTemplateOutletContext", \u0275\u0275pureFunction0(178, _c11));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngTemplateOutlet", shades_r7)("ngTemplateOutletContext", \u0275\u0275pureFunction0(179, _c122));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngTemplateOutlet", shades_r7)("ngTemplateOutletContext", \u0275\u0275pureFunction0(180, _c13));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngTemplateOutlet", shades_r7)("ngTemplateOutletContext", \u0275\u0275pureFunction0(181, _c14));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngTemplateOutlet", shades_r7)("ngTemplateOutletContext", \u0275\u0275pureFunction0(182, _c15));
      \u0275\u0275advance();
      \u0275\u0275property("customShades", ctx.customShades());
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    NgTemplateOutlet,
    NgStyle,
    FormsModule,
    NgControlStatus,
    NgModel,
    RouterLink,
    BadgeModule,
    Badge,
    ButtonModule,
    Button,
    DividerModule,
    Divider,
    IftaLabelModule,
    IftaLabel,
    MessageModule,
    Message,
    SelectModule,
    Select,
    TagModule,
    Tag,
    ColorPickerComponent,
    CopyPresetComponent,
    UserSettingsComponent,
    TranslatePipe
  ], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorGeneratorComponent, [{
    type: Component,
    args: [{ selector: "aida-color-generator", standalone: true, imports: [
      CommonModule,
      FormsModule,
      RouterLink,
      TranslatePipe,
      BadgeModule,
      ButtonModule,
      DividerModule,
      IftaLabelModule,
      MessageModule,
      SelectModule,
      TagModule,
      ColorPickerComponent,
      CopyPresetComponent,
      UserSettingsComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<h1 id="wb-cont">{{ 'dev.colors._title' | translate }}</h1>
<p>{{ 'dev.colors.description' | translate }}{{ 'dev.colors.description2' | translate }}</p>

<h2 class="text-xl mb-1">On this page</h2>
<ul class="mt-0">
  <li><a [routerLink]="[]" fragment="semantic-groups">Semantic colour grouping</a></li>
  <li><a [routerLink]="[]" fragment="all-components">All components side-by-side</a></li>
  <li><a [routerLink]="[]" fragment="messages">Messages by semantic meaning</a></li>
  <li><a [routerLink]="[]" fragment="cards">Card contrast comparison</a></li>
  <li><a [routerLink]="[]" fragment="palettes">Full colour palettes</a></li>
</ul>

<aida-user-settings mode="theme" />

<!-- Semantic Color Grid -->
<div class="mb-6">
  <h2 id="semantic-groups" class="mb-3">Semantic colour grouping</h2>
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
                <p-message icon="pi pi-check-circle" severity="success" text="Success: message" />
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
                <p-message icon="pi pi-times-circle" severity="error" text="Error: message" />
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
                <p-message icon="pi pi-exclamation-triangle" severity="warn" text="Warning: message" />
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
                <p-message icon="pi pi-info-circle" severity="info" text="Info: message" />
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
    <h2 id="all-components" class="mb-3">All components side-by-side</h2>
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
      <p>Grey Outlined Buttons</p>
      <p-button label="Primary" outlined styleClass="secondary-outline" />
      <p-button label="Success" outlined severity="success" styleClass="secondary-outline" />
      <p-button label="Danger" outlined severity="danger" styleClass="secondary-outline" />
      <p-button label="Warning" outlined severity="warn" styleClass="secondary-outline" />
      <p-button label="Info" outlined severity="info" styleClass="secondary-outline" />
      <p-button label="Help" outlined severity="help" styleClass="secondary-outline" />
      <p-button label="Secondary" outlined severity="secondary" styleClass="secondary-outline" />
      <p-button label="Contrast" outlined severity="contrast" styleClass="secondary-outline" />
    </div>

    <div class="flex flex-wrap gap-2 mb-4">
      <p>Icon Buttons</p>
      <p-button icon="pi pi-bars" outlined styleClass="secondary-outline" />
      <p-button icon="pi pi-check-circle" outlined severity="success" styleClass="secondary-outline" />
      <p-button icon="pi pi-trash" outlined severity="danger" styleClass="secondary-outline" />
      <p-button icon="pi pi-refresh" outlined severity="warn" styleClass="secondary-outline" />
      <p-button icon="pi pi-question-circle" outlined severity="info" styleClass="secondary-outline" />
      <p-button icon="pi pi-ellipsis-h" outlined severity="help" styleClass="secondary-outline" />
      <p-button icon="pi pi-ellipsis-v" outlined severity="secondary" styleClass="secondary-outline" />
      <p-button icon="pi pi-external-link" outlined severity="contrast" styleClass="secondary-outline" />
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
      <p-message icon="pi pi-info-circle" severity="info" text="Info: message" />
      <p-message icon="pi pi-check-circle" severity="success" text="Success: message" />
      <p-message icon="pi pi-times-circle" severity="error" text="Error: message" />
      <p-message icon="pi pi-exclamation-triangle" severity="warn" text="Warning: message" />
      <p-message severity="secondary" text="Secondary: message" />
      <p-message severity="contrast" text="Contrast: message" />
    </div>
  </div>

  <p-divider />

  <!-- Messages Grouped by Semantic Meaning -->
  <div class="mb-6">
    <h2 id="messages" class="mb-3">Messages by semantic meaning</h2>
    <p class="mb-3 text-sm text-color-secondary">Colours should be clearly distinguishable between quadrants.</p>

    <div class="grid">
      <div class="col-12 md:col-6">
        <h4 class="mb-2 text-sm font-semibold uppercase text-green-600">Positive Messages</h4>
        <div class="flex flex-column gap-2 mb-4">
          <!--p-message text="Primary: Click here to continue" /-->
          <p-message icon="pi pi-check-circle" severity="success" text="Success: message" />
        </div>
      </div>

      <div class="col-12 md:col-6">
        <h4 class="mb-2 text-sm font-semibold uppercase text-red-600">Negative Messages</h4>
        <div class="flex flex-column gap-2 mb-4">
          <p-message icon="pi pi-times-circle" severity="error" text="Error: message" />
          <p-message icon="pi pi-exclamation-triangle" severity="warn" text="Warning: message" />
        </div>
      </div>

      <div class="col-12 md:col-6">
        <h4 class="mb-2 text-sm font-semibold uppercase text-blue-600">Information Messages</h4>
        <div class="flex flex-column gap-2 mb-4">
          <p-message icon="pi pi-info-circle" severity="info" text="Info: message" />
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

  <!-- Card contrast comparison -->
  <div class="mb-6">
    <h2 id="cards" class="mb-3">Card contrast comparison</h2>
    <p class="mb-3 text-sm text-color-secondary">Cards should be clearly distinguishable from the background.</p>
    <div class="flex flex-column gap-3">
      <div class="flex gap-3 mb-2">
        <p>Width: border-1</p>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold border-1 border-0">border-0</div>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold border-1 border-50">border-50</div>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold border-1 border-100">border-100</div>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold border-1 surface-border">surface-border</div>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold border-1 border-200">border-200</div>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold border-1 border-300">border-300</div>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold border-1 border-400">border-400</div>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold border-1 border-500">border-500</div>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold border-1 border-600">border-600</div>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold border-1 border-700">border-700</div>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold border-1 border-800">border-800</div>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold border-1 border-900">border-900</div>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold border-1 border-primary">border-primary</div>
      </div>
      <div class="flex gap-3 mb-2">
        <p>Width: border-2</p>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold border-2 border-0">border-0</div>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold border-2 border-50">border-50</div>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold border-2 border-100">border-100</div>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold border-2 surface-border">surface-border</div>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold border-2 border-200">border-200</div>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold border-2 border-300">border-300</div>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold border-2 border-400">border-400</div>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold border-2 border-500">border-500</div>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold border-2 border-600">border-600</div>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold border-2 border-700">border-700</div>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold border-2 border-800">border-800</div>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold border-2 border-900">border-900</div>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold border-2 border-primary">border-primary</div>
      </div>
      <div class="flex gap-3 mb-2">
        <p>Width: border-3</p>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold border-3 border-0">border-0</div>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold border-3 border-50">border-50</div>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold border-3 border-100">border-100</div>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold border-3 surface-border">surface-border</div>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold border-3 border-200">border-200</div>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold border-3 border-300">border-300</div>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold border-3 border-400">border-400</div>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold border-3 border-500">border-500</div>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold border-3 border-600">border-600</div>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold border-3 border-700">border-700</div>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold border-3 border-800">border-800</div>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold border-3 border-900">border-900</div>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold border-3 border-primary">border-primary</div>
      </div>
      <div class="flex gap-5 my-5">
        <p>Shadow</p>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold shadow-none">shadow-none</div>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold shadow-1">shadow-1</div>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold shadow-2">shadow-2</div>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold shadow-3">shadow-3</div>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold shadow-4">shadow-4</div>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold shadow-5">shadow-5</div>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold shadow-6">shadow-6</div>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold shadow-7">shadow-7</div>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold shadow-8">shadow-8</div>
      </div>
      <div class="flex gap-3 mb-2">
        <p>Hover effects</p>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold shadow-none hover:shadow-1">shadow-none<br />hover:shadow-1</div>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold shadow-none hover:shadow-2">shadow-none<br />hover:shadow-2</div>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold shadow-1 hover:shadow-2">shadow-1<br />hover:shadow-2</div>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold shadow-1 hover:shadow-3">shadow-1<br />hover:shadow-3</div>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold shadow-2 hover:shadow-3">shadow-2<br />hover:shadow-3</div>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold shadow-2 hover:shadow-4">shadow-2<br />hover:shadow-4</div>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold shadow-3 hover:shadow-4">shadow-3<br />hover:shadow-4</div>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold shadow-3 hover:shadow-5">shadow-3<br />hover:shadow-5</div>
      </div>
      <div class="flex gap-3 mb-2">
        <p>Hover effects</p>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold shadow-1 hover:shadow-3 hover:surface-50">
          shadow-1 & hover:shadow-3<br />hover:surface-50
        </div>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold shadow-1 hover:shadow-3 hover:surface-100">
          shadow-1 & hover:shadow-3<br />hover:surface-100
        </div>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold shadow-1 hover:shadow-3 hover:surface-200">
          shadow-1 & hover:shadow-3<br />hover:surface-200
        </div>
      </div>
      <div class="flex gap-3 mb-2">
        <p>Hover effects</p>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold shadow-1 hover:shadow-3 hover:bg-primary-50">
          shadow-1 & hover:shadow-3<br />hover:primary-50
        </div>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold shadow-1 hover:shadow-3 hover:bg-primary-100">
          shadow-1 & hover:shadow-3<br />hover:primary-100
        </div>
        <div class="flex-1 h-4rem surface-card border-round flex align-items-center justify-content-center text-xs font-semibold shadow-1 hover:shadow-3 hover:bg-primary-200">
          shadow-1 & hover:shadow-3<br />hover:primary-200
        </div>
      </div>
    </div>

    <div class="grid mt-3">
      <div class="col-9">
        <h3 class="mb-0">Global card options</h3>
        <div class="grid">
          <p-iftalabel class="col-3">
            <p-select [(ngModel)]="selectedBorderWidth" [options]="borderWidthOptions" fluid inputId="border-width" />
            <label for="border-width">Border width</label>
          </p-iftalabel>
          <p-iftalabel class="col-3">
            <p-select [(ngModel)]="selectedBorderColor" [options]="borderColorOptions" fluid inputId="border-color" />
            <label for="border-color">Border colour</label>
          </p-iftalabel>
          <p-iftalabel class="col-3">
            <p-select [(ngModel)]="selectedBackground" [options]="[{ label: 'surface-card', value: 'surface-card' }]" fluid inputId="background" />
            <label for="background">Background</label>
          </p-iftalabel>
          <p-iftalabel class="col-3">
            <p-select [(ngModel)]="selectedBorderRadius" [options]="borderRadiusOptions" fluid inputId="border-radius" />
            <label for="border-radius">Border radius</label>
          </p-iftalabel>
        </div>
        <h3 class="mb-0">Active state card options (interactive cards only)</h3>
        <div class="grid">
          <p-iftalabel class="col-3">
            <p-select [(ngModel)]="selectedActiveBorderWidth" [options]="borderWidthOptions" fluid inputId="active-border-width" />
            <label for="active-border-width">Active border width</label>
          </p-iftalabel>
          <p-iftalabel class="col-3">
            <p-select [(ngModel)]="selectedActiveBorderColor" [options]="borderColorOptions" fluid inputId="active-border-color" />
            <label for="active-border-color">Active border colour</label>
          </p-iftalabel>
          <p-iftalabel class="col-3">
            <p-select [ngModel]="selectedActiveBackground()" [options]="backgroundOptions()" (ngModelChange)="selectedActiveBackground.set($event)" fluid inputId="active-background" />
            <label for="active-background">Active background</label>
          </p-iftalabel>
        </div>
        <h3 class="mb-0">Hover state card options (interactive cards only)</h3>
        <div class="grid">
          <p-iftalabel class="col-3 col-offset-3">
            <p-select [(ngModel)]="selectedHoverBorderColor" [options]="borderColorOptions" fluid inputId="hover-border-color" />
            <label for="hover-border-color">Hover border colour</label>
          </p-iftalabel>
          <p-iftalabel class="col-3">
            <p-select [ngModel]="selectedHoverBackground()" [options]="backgroundOptions()" (ngModelChange)="selectedHoverBackground.set($event)" fluid inputId="hover-background" />
            <label for="hover-background">Hover background</label>
          </p-iftalabel>
        </div>
      </div>
      <div class="col-3 border-3 border-dashed surface-border">
        <h3 class="mb-0">Shadow options</h3>
        <div class="grid">
          <p-iftalabel class="col-12 mb-5">
            <p-select [(ngModel)]="selectedFlatShadow" [options]="shadowOptions" fluid inputId="flat-shadow" />
            <label for="flat-shadow">Static shadow</label>
          </p-iftalabel>
          <p-iftalabel class="col-12 mb-5">
            <p-select [(ngModel)]="selectedInteractiveShadow" [options]="shadowOptions" fluid inputId="interactive-shadow" />
            <label for="interactive-shadow">Interactive shadow</label>
          </p-iftalabel>
          <p-iftalabel class="col-12">
            <p-select [(ngModel)]="selectedHoverShadow" [options]="shadowOptions" fluid inputId="hover-shadow" />
            <label for="hover-shadow">Hover shadow</label>
          </p-iftalabel>
        </div>
      </div>
    </div>

    <div class="flex justify-content-between align-items-end gap-2 mt-2">
      <h3 class="mb-0">Preview</h3>
      <div class="flex align-items-end gap-2">
        <aida-user-settings mode="theme" />
        <div class="flex flex-column border-round p-1 text-color-secondary hover:surface-100 hover:text-primary">
          <span class="text-xs my-1">Ground</span>
          <p-select [ngModel]="selectedGround()" [options]="groundOptions()" (ngModelChange)="selectedGround.set($event)" inputId="ground" />
        </div>
      </div>
    </div>
    <div [ngStyle]="{ background: selectedGround() }" class="mb-5 p-8 surface-border border-1">
      <div class="flex gap-2 justify-content-between">
        <div>
          <h1>Page header</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis autem vel eum iure reprehenderit qui in ea voluptate velit. Temporibus autem quibusdam et aut officiis debitis aut rerum.</p>
        </div>
        <div class="flex flex-column gap-2">
          <p-button fluid label="Primary button" />
          <p-button class="secondary outline" fluid label="Secondary button" outlined />
        </div>
      </div>
      <div class="flex flex-column gap-3">
        <div [ngClass]="cardStyles()" class="p-4 w-full">
          <h2 class="mt-0">Static card</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis autem vel eum iure reprehenderit qui in ea voluptate velit. Temporibus autem quibusdam et aut officiis debitis aut rerum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem. Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit {{ cardStyles() }}.</p>
        </div>
        <div class="grid">
          @for (i of [0, 1, 2, 3]; track i) {
            <div class="col-12 md:col-6">
              <div [ngClass]="cardStyles(true, activeCard() === i)" (click)="activeCard.set(i)" (keydown.enter)="activeCard.set(i)" class="p-4 w-full h-full" tabindex="0">
                <h2 class="mt-0 text-primary hover:underline">Interactive card</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. {{ cardStyles(true, activeCard() === i) }}.</p>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
    <p>If you are happy with your selections, send these class lists to Amber so AIDA can be updated.</p>
    <div class="grid">
      <div class="col-12 xl:col-2">Flat card:</div>
      <div class="col-12 xl:col-10">
        <pre class="m-0">{{ cardStyles() }}</pre>
      </div>
      <div class="col-12 xl:col-2">Interactive card:</div>
      <div class="col-12 xl:col-10">
        <pre class="m-0">{{ cardStyles(true) }}</pre>
      </div>
      <div class="col-12 xl:col-2">Active card:</div>
      <div class="col-12 xl:col-10">
        <pre class="m-0">{{ cardStyles(true, true) }}</pre>
      </div>
      <div class="col-12 xl:col-2">Global app background:</div>
      <div class="col-12 xl:col-10">
        <pre class="m-0">var(--p-{{ selectedGroundLabel() }})</pre>
      </div>
    </div>

    <p-divider />

    <!-- Color Palette Swatches -->
    <div class="mb-6">
      <h2 id="palettes" class="mb-3">Full colour palettes</h2>
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
</div>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ColorGeneratorComponent, { className: "ColorGeneratorComponent", filePath: "src/app/views/toolbox/dev-tools/color-generator/color-generator.component.ts", lineNumber: 49 });
})();
export {
  ColorGeneratorComponent
};
//# sourceMappingURL=chunk-NJP72P73.js.map
