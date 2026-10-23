import {
  SignInBannerComponent
} from "./chunk-BLX7X6ST.js";
import {
  SetupRepoComponent
} from "./chunk-NM764PDY.js";
import {
  ProgressBar,
  ProgressBarModule
} from "./chunk-OE6OK7VB.js";
import {
  Divider,
  DividerModule
} from "./chunk-ATVW4L4U.js";
import {
  Chip,
  ChipModule
} from "./chunk-ULNRCSK5.js";
import {
  Message,
  MessageModule
} from "./chunk-GGIC4QUJ.js";
import {
  AddPagesLinkComponent
} from "./chunk-3Y4CZOCC.js";
import {
  ProjectSettingsComponent
} from "./chunk-PN5M4GQP.js";
import {
  StyleCardService
} from "./chunk-XN4WNFGN.js";
import {
  Table,
  TableModule
} from "./chunk-FLOCU5FK.js";
import "./chunk-P3TRDY63.js";
import "./chunk-NQRO2LC7.js";
import "./chunk-5QMHUOJQ.js";
import "./chunk-OFBI5QRC.js";
import "./chunk-ILW73YBV.js";
import "./chunk-FQDO2XGS.js";
import {
  ProjectCacheService
} from "./chunk-2FR4EOOH.js";
import "./chunk-D57SAGZH.js";
import {
  AidaLinks
} from "./chunk-JNZO32C5.js";
import {
  PlusIcon
} from "./chunk-MKX7R2UM.js";
import {
  ProjectStateService
} from "./chunk-KTNEX2EU.js";
import {
  Checkbox,
  CheckboxModule,
  ExportGitHubService,
  MinusIcon
} from "./chunk-GW63RQCY.js";
import {
  HtmlNormalizationService
} from "./chunk-XFA5GYX6.js";
import {
  UsageService
} from "./chunk-R6QXKFAV.js";
import {
  SignInService
} from "./chunk-NJENQTX6.js";
import {
  FetchService
} from "./chunk-B6BNTBK3.js";
import "./chunk-BHVFX6OF.js";
import "./chunk-JR3PODJQ.js";
import {
  BaseComponent,
  Bind,
  BindModule,
  Button,
  ButtonModule,
  ConnectedOverlayScrollHandler,
  FormsModule,
  MotionDirective,
  MotionModule,
  NgControlStatus,
  NgModel,
  PARENT_INSTANCE,
  Tooltip,
  TooltipModule,
  marker,
  s,
  zindexutils
} from "./chunk-QN4TTD5X.js";
import "./chunk-DMOF7S63.js";
import {
  BaseStyle,
  CommonModule,
  DatePipe,
  DomSanitizer,
  Footer,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  OverlayService,
  P,
  PrimeTemplate,
  Router,
  SharedModule,
  V2 as V,
  Yt,
  Z,
  _,
  isPlatformBrowser,
  qt,
  rr,
  ut
} from "./chunk-7YP54JN5.js";
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
  TranslatePipe,
  TranslateService,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  effect,
  inject,
  input,
  numberAttribute,
  setClassMetadata,
  signal,
  untracked,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryAdvance,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery,
  ɵɵviewQuerySignal
} from "./chunk-KRHY6Z2H.js";
import "./chunk-DKTF6WIM.js";
import "./chunk-G55EJPVD.js";
import "./chunk-7XEOGBZ2.js";
import "./chunk-3RPP55HA.js";
import "./chunk-DBOW7BSZ.js";
import "./chunk-XMWDIV4O.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-YCXP4XZS.js";

// node_modules/@primeuix/styles/dist/panel/index.mjs
var style = "\n    .p-panel {\n        display: block;\n        border: 1px solid dt('panel.border.color');\n        border-radius: dt('panel.border.radius');\n        background: dt('panel.background');\n        color: dt('panel.color');\n    }\n\n    .p-panel-header {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        padding: dt('panel.header.padding');\n        background: dt('panel.header.background');\n        color: dt('panel.header.color');\n        border-style: solid;\n        border-width: dt('panel.header.border.width');\n        border-color: dt('panel.header.border.color');\n        border-radius: dt('panel.header.border.radius');\n    }\n\n    .p-panel-toggleable .p-panel-header {\n        padding: dt('panel.toggleable.header.padding');\n    }\n\n    .p-panel-title {\n        line-height: 1;\n        font-weight: dt('panel.title.font.weight');\n    }\n\n    .p-panel-content-container {\n        display: grid;\n        grid-template-rows: 1fr;\n    }\n\n    .p-panel-content-wrapper {\n        min-height: 0;\n    }\n\n    .p-panel-content {\n        padding: dt('panel.content.padding');\n    }\n\n    .p-panel-footer {\n        padding: dt('panel.footer.padding');\n    }\n";

// node_modules/primeng/fesm2022/primeng-panel.mjs
var _c0 = ["header"];
var _c1 = ["icons"];
var _c2 = ["content"];
var _c3 = ["footer"];
var _c4 = ["headericons"];
var _c5 = ["contentWrapper"];
var _c6 = ["*", [["p-header"]], [["p-footer"]]];
var _c7 = ["*", "p-header", "p-footer"];
var _c8 = (a0) => ({
  $implicit: a0
});
function Panel_div_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cx("title"));
    \u0275\u0275property("pBind", ctx_r1.ptm("title"));
    \u0275\u0275attribute("id", ctx_r1.id + "_header");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1._header);
  }
}
function Panel_div_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Panel_div_0_5_ng_template_0_Template(rf, ctx) {
}
function Panel_div_0_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Panel_div_0_5_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Panel_div_0_p_button_6_ng_template_1_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(1, "svg", 12);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("pBind", ctx_r1.ptm("pcToggleButton.icon"));
  }
}
function Panel_div_0_p_button_6_ng_template_1_ng_container_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(1, "svg", 13);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("pBind", ctx_r1.ptm("pcToggleButton.icon"));
  }
}
function Panel_div_0_p_button_6_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Panel_div_0_p_button_6_ng_template_1_ng_container_0_ng_container_1_Template, 2, 1, "ng-container", 10)(2, Panel_div_0_p_button_6_ng_template_1_ng_container_0_ng_container_2_Template, 2, 1, "ng-container", 10);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.collapsed);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.collapsed);
  }
}
function Panel_div_0_p_button_6_ng_template_1_1_ng_template_0_Template(rf, ctx) {
}
function Panel_div_0_p_button_6_ng_template_1_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Panel_div_0_p_button_6_ng_template_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Panel_div_0_p_button_6_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Panel_div_0_p_button_6_ng_template_1_ng_container_0_Template, 3, 2, "ng-container", 10)(1, Panel_div_0_p_button_6_ng_template_1_1_Template, 1, 0, null, 11);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", !ctx_r1.headerIconsTemplate && !ctx_r1._headerIconsTemplate && !(ctx_r1.toggleButtonProps == null ? null : ctx_r1.toggleButtonProps.icon));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.headerIconsTemplate || ctx_r1._headerIconsTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(3, _c8, ctx_r1.collapsed));
  }
}
function Panel_div_0_p_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 9);
    \u0275\u0275listener("click", function Panel_div_0_p_button_6_Template_p_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onIconClick($event));
    })("keydown", function Panel_div_0_p_button_6_Template_p_button_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onKeyDown($event));
    });
    \u0275\u0275template(1, Panel_div_0_p_button_6_ng_template_1_Template, 2, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("text", true)("rounded", true)("styleClass", ctx_r1.cx("pcToggleButton"))("buttonProps", ctx_r1.toggleButtonProps)("pt", ctx_r1.ptm("pcToggleButton"))("unstyled", ctx_r1.unstyled());
    \u0275\u0275attribute("id", ctx_r1.id + "_header")("aria-label", ctx_r1.buttonAriaLabel)("aria-controls", ctx_r1.id + "_content")("aria-expanded", !ctx_r1.collapsed);
  }
}
function Panel_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275listener("click", function Panel_div_0_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onHeaderClick($event));
    });
    \u0275\u0275template(1, Panel_div_0_span_1_Template, 2, 5, "span", 6);
    \u0275\u0275projection(2, 1);
    \u0275\u0275template(3, Panel_div_0_ng_container_3_Template, 1, 0, "ng-container", 5);
    \u0275\u0275elementStart(4, "div", 4);
    \u0275\u0275template(5, Panel_div_0_5_Template, 1, 0, null, 5)(6, Panel_div_0_p_button_6_Template, 3, 10, "p-button", 8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.cx("header"));
    \u0275\u0275property("pBind", ctx_r1.ptm("header"));
    \u0275\u0275attribute("id", ctx_r1.id + "-titlebar")("data-p", ctx_r1.dataP);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1._header);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.headerTemplate || ctx_r1._headerTemplate);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("headerActions"));
    \u0275\u0275property("pBind", ctx_r1.ptm("headerActions"));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.iconsTemplate || ctx_r1._iconsTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.toggleable);
  }
}
function Panel_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Panel_div_7_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Panel_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275projection(1, 2);
    \u0275\u0275template(2, Panel_div_7_ng_container_2_Template, 1, 0, "ng-container", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.cx("footer"));
    \u0275\u0275property("pBind", ctx_r1.ptm("footer"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.footerTemplate || ctx_r1._footerTemplate);
  }
}
var classes = {
  root: ({
    instance
  }) => ["p-panel p-component", {
    "p-panel-toggleable": instance.toggleable,
    "p-panel-expanded": !instance._collapsed && instance.toggleable,
    "p-panel-collapsed": instance._collapsed && instance.toggleable
  }],
  header: "p-panel-header",
  title: "p-panel-title",
  headerActions: ({
    instance
  }) => ["p-panel-header-actions", {
    "p-panel-icons-start": instance.iconPos === "start",
    "p-panel-icons-end": instance.iconPos === "end",
    "p-panel-icons-center": instance.iconPos === "center"
  }],
  pcToggleButton: "p-panel-toggle-button",
  contentContainer: "p-panel-content-container",
  contentWrapper: "p-panel-content-wrapper",
  content: "p-panel-content",
  footer: "p-panel-footer"
};
var PanelStyle = class _PanelStyle extends BaseStyle {
  name = "panel";
  style = style;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275PanelStyle_BaseFactory;
    return function PanelStyle_Factory(__ngFactoryType__) {
      return (\u0275PanelStyle_BaseFactory || (\u0275PanelStyle_BaseFactory = \u0275\u0275getInheritedFactory(_PanelStyle)))(__ngFactoryType__ || _PanelStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _PanelStyle,
    factory: _PanelStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelStyle, [{
    type: Injectable
  }], null, null);
})();
var PanelClasses;
(function(PanelClasses2) {
  PanelClasses2["root"] = "p-panel";
  PanelClasses2["header"] = "p-panel-header";
  PanelClasses2["title"] = "p-panel-title";
  PanelClasses2["headerActions"] = "p-panel-header-actions";
  PanelClasses2["pcToggleButton"] = "p-panel-toggle-button";
  PanelClasses2["contentContainer"] = "p-panel-content-container";
  PanelClasses2["contentWrapper"] = "p-panel-content-wrapper";
  PanelClasses2["content"] = "p-panel-content";
  PanelClasses2["footer"] = "p-panel-footer";
})(PanelClasses || (PanelClasses = {}));
var PANEL_INSTANCE = new InjectionToken("PANEL_INSTANCE");
var Panel = class _Panel extends BaseComponent {
  componentName = "Panel";
  $pcPanel = inject(PANEL_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  _componentStyle = inject(PanelStyle);
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  /**
   * Id of the component.
   */
  id = s("pn_id_");
  /**
   * Defines if content of panel can be expanded and collapsed.
   * @group Props
   */
  toggleable;
  /**
   * Header text of the panel.
   * @group Props
   */
  _header;
  /**
   * Internal collapsed state
   */
  _collapsed;
  /**
   * Defines the initial state of panel content, supports one or two-way binding as well.
   * @group Props
   */
  get collapsed() {
    return this._collapsed;
  }
  set collapsed(value) {
    this._collapsed = value;
  }
  /**
   * Style class of the component.
   * @group Props
   * @deprecated since v20.0.0, use `class` instead.
   */
  styleClass;
  /**
   * Position of the icons.
   * @group Props
   */
  iconPos = "end";
  /**
   * Specifies if header of panel cannot be displayed.
   * @group Props
   */
  showHeader = true;
  /**
   * Specifies the toggler element to toggle the panel content.
   * @group Props
   */
  toggler = "icon";
  /**
   * Transition options of the animation.
   * @group Props
   * @deprecated since v21.0.0, use `motionOptions` instead.
   */
  transitionOptions = "400ms cubic-bezier(0.86, 0, 0.07, 1)";
  /**
   * Used to pass all properties of the ButtonProps to the Button component.
   * @group Props
   */
  toggleButtonProps;
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
  computedMotionOptions = computed(() => {
    return __spreadValues(__spreadValues({}, this.ptm("motion")), this.motionOptions());
  }, ...ngDevMode ? [{
    debugName: "computedMotionOptions"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Emitted when the collapsed changes.
   * @param {boolean} value - New Value.
   * @group Emits
   */
  collapsedChange = new EventEmitter();
  /**
   * Callback to invoke before panel toggle.
   * @param {PanelBeforeToggleEvent} event - Custom panel toggle event
   * @group Emits
   */
  onBeforeToggle = new EventEmitter();
  /**
   * Callback to invoke after panel toggle.
   * @param {PanelAfterToggleEvent} event - Custom panel toggle event
   * @group Emits
   */
  onAfterToggle = new EventEmitter();
  footerFacet;
  /**
   * Defines template option for header.
   * @group Templates
   */
  headerTemplate;
  /**
   * Defines template option for icons.
   * @example
   * ```html
   * <ng-template #icons> </ng-template>
   * ```
   * @group Templates
   */
  iconsTemplate;
  /**
   * Defines template option for content.
   * @example
   * ```html
   * <ng-template #content> </ng-template>
   * ```
   * @group Templates
   */
  contentTemplate;
  /**
   * Defines template option for footer.
   * @example
   * ```html
   * <ng-template #footer> </ng-template>
   * ```
   * @group Templates
   */
  footerTemplate;
  /**
   * Defines template option for headerIcon.
   * @param {PanelHeaderIconsTemplateContext} context - context of the template.
   * @example
   * ```html
   * <ng-template #headericons let-collapsed> </ng-template>
   * ```
   * @see {@link PanelHeaderIconsTemplateContext}
   * @group Templates
   */
  headerIconsTemplate;
  _headerTemplate;
  _iconsTemplate;
  _contentTemplate;
  _footerTemplate;
  _headerIconsTemplate;
  contentWrapperViewChild;
  get buttonAriaLabel() {
    return this._header;
  }
  onHeaderClick(event) {
    if (this.toggler === "header") {
      this.toggle(event);
    }
  }
  onIconClick(event) {
    if (this.toggler === "icon") {
      this.toggle(event);
    }
  }
  toggle(event) {
    this.onBeforeToggle.emit({
      originalEvent: event,
      collapsed: this.collapsed
    });
    if (this.collapsed) this.expand();
    else this.collapse();
    event.preventDefault();
  }
  expand() {
    this._collapsed = false;
    this.collapsedChange.emit(false);
    this.updateTabIndex();
  }
  collapse() {
    this._collapsed = true;
    this.collapsedChange.emit(true);
    this.updateTabIndex();
  }
  getBlockableElement() {
    return this.el.nativeElement;
  }
  updateTabIndex() {
    if (this.contentWrapperViewChild) {
      const focusableElements = this.contentWrapperViewChild.nativeElement.querySelectorAll("input, button, select, a, textarea, [tabindex]");
      focusableElements.forEach((element) => {
        if (this.collapsed) {
          element.setAttribute("tabindex", "-1");
        } else {
          element.removeAttribute("tabindex");
        }
      });
    }
  }
  onKeyDown(event) {
    if (event.code === "Enter" || event.code === "Space") {
      this.toggle(event);
      event.preventDefault();
    }
  }
  onToggleDone(event) {
    this.onAfterToggle.emit({
      originalEvent: event,
      collapsed: this.collapsed
    });
  }
  templates;
  onAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "header":
          this._headerTemplate = item.template;
          break;
        case "content":
          this._contentTemplate = item.template;
          break;
        case "footer":
          this._footerTemplate = item.template;
          break;
        case "icons":
          this._iconsTemplate = item.template;
          break;
        case "headericons":
          this._headerIconsTemplate = item.template;
          break;
        default:
          this._contentTemplate = item.template;
          break;
      }
    });
  }
  get dataP() {
    return this.cn({
      toggleable: this.toggleable
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Panel_BaseFactory;
    return function Panel_Factory(__ngFactoryType__) {
      return (\u0275Panel_BaseFactory || (\u0275Panel_BaseFactory = \u0275\u0275getInheritedFactory(_Panel)))(__ngFactoryType__ || _Panel);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Panel,
    selectors: [["p-panel"]],
    contentQueries: function Panel_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, Footer, 5)(dirIndex, _c0, 4)(dirIndex, _c1, 4)(dirIndex, _c2, 4)(dirIndex, _c3, 4)(dirIndex, _c4, 4)(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.footerFacet = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.iconsTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.footerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerIconsTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Panel_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c5, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentWrapperViewChild = _t.first);
      }
    },
    hostVars: 4,
    hostBindings: function Panel_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275domProperty("id", ctx.id);
        \u0275\u0275attribute("data-p", ctx.dataP);
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      id: "id",
      toggleable: [2, "toggleable", "toggleable", booleanAttribute],
      _header: [0, "header", "_header"],
      collapsed: [2, "collapsed", "collapsed", booleanAttribute],
      styleClass: "styleClass",
      iconPos: "iconPos",
      showHeader: [2, "showHeader", "showHeader", booleanAttribute],
      toggler: "toggler",
      transitionOptions: "transitionOptions",
      toggleButtonProps: "toggleButtonProps",
      motionOptions: [1, "motionOptions"]
    },
    outputs: {
      collapsedChange: "collapsedChange",
      onBeforeToggle: "onBeforeToggle",
      onAfterToggle: "onAfterToggle"
    },
    features: [\u0275\u0275ProvidersFeature([PanelStyle, {
      provide: PANEL_INSTANCE,
      useExisting: _Panel
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Panel
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c7,
    decls: 8,
    vars: 18,
    consts: [["contentWrapper", ""], ["icon", ""], [3, "pBind", "class", "click", 4, "ngIf"], ["pMotionName", "p-collapsible", "role", "region", 3, "pMotionOnAfterEnter", "pBind", "pMotion", "pMotionOptions", "id"], [3, "pBind"], [4, "ngTemplateOutlet"], [3, "pBind", "class", 4, "ngIf"], [3, "click", "pBind"], ["severity", "secondary", "type", "button", "role", "button", 3, "text", "rounded", "styleClass", "buttonProps", "pt", "unstyled", "click", "keydown", 4, "ngIf"], ["severity", "secondary", "type", "button", "role", "button", 3, "click", "keydown", "text", "rounded", "styleClass", "buttonProps", "pt", "unstyled"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["data-p-icon", "minus", 3, "pBind"], ["data-p-icon", "plus", 3, "pBind"]],
    template: function Panel_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c6);
        \u0275\u0275template(0, Panel_div_0_Template, 7, 12, "div", 2);
        \u0275\u0275elementStart(1, "div", 3);
        \u0275\u0275listener("pMotionOnAfterEnter", function Panel_Template_div_pMotionOnAfterEnter_1_listener($event) {
          return ctx.onToggleDone($event);
        });
        \u0275\u0275elementStart(2, "div", 4)(3, "div", 4, 0);
        \u0275\u0275projection(5);
        \u0275\u0275template(6, Panel_ng_container_6_Template, 1, 0, "ng-container", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, Panel_div_7_Template, 3, 4, "div", 6);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.showHeader);
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("contentContainer"));
        \u0275\u0275property("pBind", ctx.ptm("contentContainer"))("pMotion", !ctx.toggleable || ctx.toggleable && !ctx.collapsed)("pMotionOptions", ctx.computedMotionOptions())("id", ctx.id + "_content");
        \u0275\u0275attribute("aria-labelledby", ctx.id + "_header")("aria-hidden", ctx.collapsed)("tabindex", ctx.collapsed ? "-1" : void 0);
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("contentWrapper"));
        \u0275\u0275property("pBind", ctx.ptm("contentWrapper"));
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("content"));
        \u0275\u0275property("pBind", ctx.ptm("content"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngTemplateOutlet", ctx.contentTemplate || ctx._contentTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.footerFacet || ctx.footerTemplate || ctx._footerTemplate);
      }
    },
    dependencies: [CommonModule, NgIf, NgTemplateOutlet, PlusIcon, MinusIcon, ButtonModule, Button, SharedModule, BindModule, Bind, MotionModule, MotionDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Panel, [{
    type: Component,
    args: [{
      selector: "p-panel",
      standalone: true,
      imports: [CommonModule, PlusIcon, MinusIcon, ButtonModule, SharedModule, BindModule, MotionModule],
      template: `
        <div [pBind]="ptm('header')" [class]="cx('header')" *ngIf="showHeader" (click)="onHeaderClick($event)" [attr.id]="id + '-titlebar'" [attr.data-p]="dataP">
            <span [pBind]="ptm('title')" [class]="cx('title')" *ngIf="_header" [attr.id]="id + '_header'">{{ _header }}</span>
            <ng-content select="p-header"></ng-content>
            <ng-container *ngTemplateOutlet="headerTemplate || _headerTemplate"></ng-container>
            <div [pBind]="ptm('headerActions')" [class]="cx('headerActions')">
                <ng-template *ngTemplateOutlet="iconsTemplate || _iconsTemplate"></ng-template>
                <p-button
                    *ngIf="toggleable"
                    [attr.id]="id + '_header'"
                    severity="secondary"
                    [text]="true"
                    [rounded]="true"
                    type="button"
                    role="button"
                    [styleClass]="cx('pcToggleButton')"
                    [attr.aria-label]="buttonAriaLabel"
                    [attr.aria-controls]="id + '_content'"
                    [attr.aria-expanded]="!collapsed"
                    (click)="onIconClick($event)"
                    (keydown)="onKeyDown($event)"
                    [buttonProps]="toggleButtonProps"
                    [pt]="ptm('pcToggleButton')"
                    [unstyled]="unstyled()"
                >
                    <ng-template #icon>
                        <ng-container *ngIf="!headerIconsTemplate && !_headerIconsTemplate && !toggleButtonProps?.icon">
                            <ng-container *ngIf="!collapsed">
                                <svg data-p-icon="minus" [pBind]="ptm('pcToggleButton.icon')" />
                            </ng-container>

                            <ng-container *ngIf="collapsed">
                                <svg data-p-icon="plus" [pBind]="ptm('pcToggleButton.icon')" />
                            </ng-container>
                        </ng-container>

                        <ng-template *ngTemplateOutlet="headerIconsTemplate || _headerIconsTemplate; context: { $implicit: collapsed }"></ng-template>
                    </ng-template>
                </p-button>
            </div>
        </div>
        <div
            [pBind]="ptm('contentContainer')"
            [pMotion]="!toggleable || (toggleable && !collapsed)"
            pMotionName="p-collapsible"
            [pMotionOptions]="computedMotionOptions()"
            [class]="cx('contentContainer')"
            [id]="id + '_content'"
            role="region"
            [attr.aria-labelledby]="id + '_header'"
            [attr.aria-hidden]="collapsed"
            [attr.tabindex]="collapsed ? '-1' : undefined"
            (pMotionOnAfterEnter)="onToggleDone($event)"
        >
            <div [pBind]="ptm('contentWrapper')" [class]="cx('contentWrapper')">
                <div [pBind]="ptm('content')" [class]="cx('content')" #contentWrapper>
                    <ng-content></ng-content>
                    <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate"></ng-container>
                </div>

                <div [pBind]="ptm('footer')" [class]="cx('footer')" *ngIf="footerFacet || footerTemplate || _footerTemplate">
                    <ng-content select="p-footer"></ng-content>
                    <ng-container *ngTemplateOutlet="footerTemplate || _footerTemplate"></ng-container>
                </div>
            </div>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [PanelStyle, {
        provide: PANEL_INSTANCE,
        useExisting: Panel
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Panel
      }],
      host: {
        "[id]": "id",
        "[class]": "cn(cx('root'), styleClass)",
        "[attr.data-p]": "dataP"
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    id: [{
      type: Input
    }],
    toggleable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    _header: [{
      type: Input,
      args: ["header"]
    }],
    collapsed: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    styleClass: [{
      type: Input
    }],
    iconPos: [{
      type: Input
    }],
    showHeader: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    toggler: [{
      type: Input
    }],
    transitionOptions: [{
      type: Input
    }],
    toggleButtonProps: [{
      type: Input
    }],
    motionOptions: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "motionOptions",
        required: false
      }]
    }],
    collapsedChange: [{
      type: Output
    }],
    onBeforeToggle: [{
      type: Output
    }],
    onAfterToggle: [{
      type: Output
    }],
    footerFacet: [{
      type: ContentChild,
      args: [Footer]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: ["header", {
        descendants: false
      }]
    }],
    iconsTemplate: [{
      type: ContentChild,
      args: ["icons", {
        descendants: false
      }]
    }],
    contentTemplate: [{
      type: ContentChild,
      args: ["content", {
        descendants: false
      }]
    }],
    footerTemplate: [{
      type: ContentChild,
      args: ["footer", {
        descendants: false
      }]
    }],
    headerIconsTemplate: [{
      type: ContentChild,
      args: ["headericons", {
        descendants: false
      }]
    }],
    contentWrapperViewChild: [{
      type: ViewChild,
      args: ["contentWrapper"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var PanelModule = class _PanelModule {
  static \u0275fac = function PanelModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PanelModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _PanelModule,
    imports: [Panel, SharedModule, BindModule],
    exports: [Panel, SharedModule, BindModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Panel, SharedModule, BindModule, SharedModule, BindModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelModule, [{
    type: NgModule,
    args: [{
      imports: [Panel, SharedModule, BindModule],
      exports: [Panel, SharedModule, BindModule]
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/popover/index.mjs
var style2 = "\n    .p-popover {\n        margin-block-start: dt('popover.gutter');\n        background: dt('popover.background');\n        color: dt('popover.color');\n        border: 1px solid dt('popover.border.color');\n        border-radius: dt('popover.border.radius');\n        box-shadow: dt('popover.shadow');\n        will-change: transform;\n    }\n\n    .p-popover-content {\n        padding: dt('popover.content.padding');\n    }\n\n    .p-popover-flipped {\n        margin-block-start: calc(dt('popover.gutter') * -1);\n        margin-block-end: dt('popover.gutter');\n    }\n\n    .p-popover:after,\n    .p-popover:before {\n        bottom: 100%;\n        left: calc(dt('popover.arrow.offset') + dt('popover.arrow.left'));\n        content: ' ';\n        height: 0;\n        width: 0;\n        position: absolute;\n        pointer-events: none;\n    }\n\n    .p-popover:after {\n        border-width: calc(dt('popover.gutter') - 2px);\n        margin-left: calc(-1 * (dt('popover.gutter') - 2px));\n        border-style: solid;\n        border-color: transparent;\n        border-bottom-color: dt('popover.background');\n    }\n\n    .p-popover:before {\n        border-width: dt('popover.gutter');\n        margin-left: calc(-1 * dt('popover.gutter'));\n        border-style: solid;\n        border-color: transparent;\n        border-bottom-color: dt('popover.border.color');\n    }\n\n    .p-popover-flipped:after,\n    .p-popover-flipped:before {\n        bottom: auto;\n        top: 100%;\n    }\n\n    .p-popover.p-popover-flipped:after {\n        border-bottom-color: transparent;\n        border-top-color: dt('popover.background');\n    }\n\n    .p-popover.p-popover-flipped:before {\n        border-bottom-color: transparent;\n        border-top-color: dt('popover.border.color');\n    }\n";

// node_modules/primeng/fesm2022/primeng-popover.mjs
var _c02 = ["content"];
var _c12 = ["*"];
var _c22 = (a0) => ({
  closeCallback: a0
});
function Popover_Conditional_0_3_ng_template_0_Template(rf, ctx) {
}
function Popover_Conditional_0_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Popover_Conditional_0_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Popover_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function Popover_Conditional_0_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onOverlayClick($event));
    })("pMotionOnEnter", function Popover_Conditional_0_Template_div_pMotionOnEnter_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAnimationStart($event));
    })("pMotionOnAfterLeave", function Popover_Conditional_0_Template_div_pMotionOnAfterLeave_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAnimationEnd());
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275listener("click", function Popover_Conditional_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onContentClick($event));
    })("mousedown", function Popover_Conditional_0_Template_div_mousedown_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onContentClick($event));
    });
    \u0275\u0275projection(2);
    \u0275\u0275template(3, Popover_Conditional_0_3_Template, 1, 0, null, 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(ctx_r1.sx("root"));
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("root"), ctx_r1.styleClass));
    \u0275\u0275property("pBind", ctx_r1.ptm("root"))("ngStyle", ctx_r1.style)("pMotion", ctx_r1.overlayVisible)("pMotionAppear", true)("pMotionOptions", ctx_r1.computedMotionOptions());
    \u0275\u0275attribute("aria-modal", ctx_r1.overlayVisible)("aria-label", ctx_r1.ariaLabel)("aria-labelledBy", ctx_r1.ariaLabelledBy);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("content"));
    \u0275\u0275property("pBind", ctx_r1.ptm("content"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.contentTemplate || ctx_r1._contentTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(17, _c22, ctx_r1.onCloseClick.bind(ctx_r1)));
  }
}
var inlineStyles = {
  root: () => ({
    position: "absolute"
  })
};
var classes2 = {
  root: "p-popover p-component",
  content: "p-popover-content"
};
var PopoverStyle = class _PopoverStyle extends BaseStyle {
  name = "popover";
  style = style2;
  classes = classes2;
  inlineStyles = inlineStyles;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275PopoverStyle_BaseFactory;
    return function PopoverStyle_Factory(__ngFactoryType__) {
      return (\u0275PopoverStyle_BaseFactory || (\u0275PopoverStyle_BaseFactory = \u0275\u0275getInheritedFactory(_PopoverStyle)))(__ngFactoryType__ || _PopoverStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _PopoverStyle,
    factory: _PopoverStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopoverStyle, [{
    type: Injectable
  }], null, null);
})();
var POPOVER_INSTANCE = new InjectionToken("POPOVER_INSTANCE");
var Popover = class _Popover extends BaseComponent {
  componentName = "Popover";
  $pcPopover = inject(POPOVER_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptm("host"));
  }
  /**
   * Defines a string that labels the input for accessibility.
   * @group Props
   */
  ariaLabel;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Enables to hide the overlay when outside is clicked.
   * @group Props
   */
  dismissable = true;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @defaultValue 'self'
   * @group Props
   */
  appendTo = input("body", ...ngDevMode ? [{
    debugName: "appendTo"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Whether to automatically manage layering.
   * @group Props
   */
  autoZIndex = true;
  /**
   * Aria label of the close icon.
   * @group Props
   */
  ariaCloseLabel;
  /**
   * Base zIndex value to use in layering.
   * @group Props
   */
  baseZIndex = 0;
  /**
   * When enabled, first button receives focus on show.
   * @group Props
   */
  focusOnShow = true;
  /**
   * Transition options of the show animation.
   * @group Props
   * @deprecated since v21.0.0. Use `motionOptions` instead.
   */
  showTransitionOptions = ".12s cubic-bezier(0, 0, 0.2, 1)";
  /**
   * Transition options of the hide animation.
   * @group Props
   * @deprecated since v21.0.0. Use `motionOptions` instead.
   */
  hideTransitionOptions = ".1s linear";
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
  computedMotionOptions = computed(() => {
    return __spreadValues(__spreadValues({}, this.ptm("motion")), this.motionOptions());
  }, ...ngDevMode ? [{
    debugName: "computedMotionOptions"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Callback to invoke when an overlay becomes visible.
   * @group Emits
   */
  onShow = new EventEmitter();
  /**
   * Callback to invoke when an overlay gets hidden.
   * @group Emits
   */
  onHide = new EventEmitter();
  $appendTo = computed(() => this.appendTo() || this.config.overlayAppendTo(), ...ngDevMode ? [{
    debugName: "$appendTo"
  }] : (
    /* istanbul ignore next */
    []
  ));
  container;
  overlayVisible = false;
  render = false;
  selfClick = false;
  documentClickListener;
  target;
  willHide;
  scrollHandler;
  documentResizeListener;
  /**
   * Custom content template.
   * @param {PopoverContentTemplateContext} context - content context.
   * @see {@link PopoverContentTemplateContext}
   * @group Templates
   */
  contentTemplate;
  templates;
  _contentTemplate;
  destroyCallback;
  overlayEventListener;
  overlaySubscription;
  _componentStyle = inject(PopoverStyle);
  zone = inject(NgZone);
  overlayService = inject(OverlayService);
  onAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this._contentTemplate = item.template;
          break;
      }
    });
  }
  bindDocumentClickListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.documentClickListener) {
        let documentEvent = qt() ? "touchstart" : "click";
        const documentTarget = this.el ? this.el.nativeElement.ownerDocument : this.document;
        this.documentClickListener = this.renderer.listen(documentTarget, documentEvent, (event) => {
          if (!this.dismissable) {
            return;
          }
          if (!this.container?.contains(event.target) && this.target !== event.target && !this.target.contains(event.target) && !this.selfClick) {
            this.hide();
          }
          this.selfClick = false;
          this.cd.markForCheck();
        });
      }
    }
  }
  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
      this.selfClick = false;
    }
  }
  /**
   * Toggles the visibility of the panel.
   * @param {Event} event - Browser event
   * @param {Target} target - Target element.
   * @group Method
   */
  toggle(event, target) {
    if (this.overlayVisible) {
      if (this.hasTargetChanged(event, target)) {
        this.destroyCallback = () => {
          this.show(null, target || event.currentTarget || event.target);
        };
      }
      this.hide();
    } else {
      this.show(event, target);
    }
  }
  /**
   * Displays the panel.
   * @param {Event} event - Browser event
   * @param {Target} target - Target element.
   * @group Method
   */
  show(event, target) {
    target && event && event.stopPropagation();
    if (this.container && !this.overlayVisible) {
      this.container = null;
    }
    this.target = target || event.currentTarget || event.target;
    this.overlayVisible = true;
    this.render = true;
    this.cd.markForCheck();
  }
  onOverlayClick(event) {
    this.overlayService.add({
      originalEvent: event,
      target: this.el.nativeElement
    });
    this.selfClick = true;
  }
  onContentClick(event) {
    const targetElement = event.target;
    this.selfClick = event.offsetX < targetElement.clientWidth && event.offsetY < targetElement.clientHeight;
  }
  hasTargetChanged(event, target) {
    return this.target != null && this.target !== (target || event.currentTarget || event.target);
  }
  appendOverlay() {
    if (this.$appendTo() && this.$appendTo() !== "self") {
      if (this.$appendTo() === "body") {
        ut(this.document.body, this.container);
      } else {
        ut(this.$appendTo(), this.container);
      }
    }
  }
  restoreAppend() {
    if (this.container && this.$appendTo() && this.$appendTo() !== "self") {
      ut(this.el.nativeElement, this.container);
    }
  }
  setZIndex() {
    if (this.autoZIndex) {
      zindexutils.set("overlay", this.container, this.baseZIndex + this.config.zIndex.overlay);
    }
  }
  align() {
    if (this.target && this.container) {
      V(this.container, this.target, false);
      const containerOffset = _(this.container);
      const targetOffset = _(this.target);
      const borderRadius = this.document.defaultView?.getComputedStyle(this.container).getPropertyValue("border-radius");
      let arrowLeft = 0;
      if (containerOffset.left < targetOffset.left) {
        arrowLeft = targetOffset.left - containerOffset.left - parseFloat(borderRadius) * 2;
      }
      this.container.style.setProperty(rr("popover.arrow.left").name, `${arrowLeft}px`);
      if (containerOffset.top < targetOffset.top) {
        this.container.setAttribute("data-p-popover-flipped", "true");
        !this.$unstyled() && P(this.container, "p-popover-flipped");
      }
    }
  }
  onAnimationStart(event) {
    this.container = event.element;
    this.container?.setAttribute(this.$attrSelector, "");
    this.appendOverlay();
    this.align();
    this.setZIndex();
    this.bindDocumentClickListener();
    this.bindDocumentResizeListener();
    this.bindScrollListener();
    if (this.focusOnShow) {
      this.focus();
    }
    this.overlayEventListener = (e) => {
      if (this.container && this.container.contains(e.target)) {
        this.selfClick = true;
      }
    };
    this.overlaySubscription = this.overlayService.clickObservable.subscribe(this.overlayEventListener);
    this.onShow.emit(null);
  }
  onAnimationEnd() {
    if (!this.overlayVisible) {
      if (this.destroyCallback) {
        this.destroyCallback();
        this.destroyCallback = null;
      }
      if (this.overlaySubscription) {
        this.overlaySubscription.unsubscribe();
      }
      if (this.autoZIndex) {
        zindexutils.clear(this.container);
      }
      this.onContainerDestroy();
      this.onHide.emit({});
      this.render = false;
      this.container = null;
    }
  }
  focus() {
    let focusable = Z(this.container, "[autofocus]");
    if (focusable) {
      this.zone.runOutsideAngular(() => {
        setTimeout(() => focusable.focus(), 5);
      });
    }
  }
  /**
   * Hides the panel.
   * @group Method
   */
  hide() {
    this.overlayVisible = false;
    this.cd.markForCheck();
  }
  onCloseClick(event) {
    this.hide();
    event.preventDefault();
  }
  onEscapeKeydown(_event) {
    this.hide();
  }
  onWindowResize() {
    if (this.overlayVisible && !Yt()) {
      this.hide();
    }
  }
  bindDocumentResizeListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.documentResizeListener) {
        const window2 = this.document.defaultView;
        this.documentResizeListener = this.renderer.listen(window2, "resize", this.onWindowResize.bind(this));
      }
    }
  }
  unbindDocumentResizeListener() {
    if (this.documentResizeListener) {
      this.documentResizeListener();
      this.documentResizeListener = null;
    }
  }
  bindScrollListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.scrollHandler) {
        this.scrollHandler = new ConnectedOverlayScrollHandler(this.target, () => {
          if (this.overlayVisible) {
            this.hide();
          }
        });
      }
      this.scrollHandler.bindScrollListener();
    }
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
    }
  }
  onContainerDestroy() {
    if (!this.cd.destroyed) {
      this.target = null;
    }
    this.unbindDocumentClickListener();
    this.unbindDocumentResizeListener();
    this.unbindScrollListener();
  }
  onDestroy() {
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    if (this.container && this.autoZIndex) {
      zindexutils.clear(this.container);
    }
    if (!this.cd.destroyed) {
      this.target = null;
    }
    this.destroyCallback = null;
    if (this.container) {
      this.restoreAppend();
      this.onContainerDestroy();
    }
    if (this.overlaySubscription) {
      this.overlaySubscription.unsubscribe();
    }
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Popover_BaseFactory;
    return function Popover_Factory(__ngFactoryType__) {
      return (\u0275Popover_BaseFactory || (\u0275Popover_BaseFactory = \u0275\u0275getInheritedFactory(_Popover)))(__ngFactoryType__ || _Popover);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Popover,
    selectors: [["p-popover"]],
    contentQueries: function Popover_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c02, 4)(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostBindings: function Popover_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown.escape", function Popover_keydown_escape_HostBindingHandler($event) {
          return ctx.onEscapeKeydown($event);
        }, \u0275\u0275resolveDocument);
      }
    },
    inputs: {
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      dismissable: [2, "dismissable", "dismissable", booleanAttribute],
      style: "style",
      styleClass: "styleClass",
      appendTo: [1, "appendTo"],
      autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
      ariaCloseLabel: "ariaCloseLabel",
      baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
      focusOnShow: [2, "focusOnShow", "focusOnShow", booleanAttribute],
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      motionOptions: [1, "motionOptions"]
    },
    outputs: {
      onShow: "onShow",
      onHide: "onHide"
    },
    features: [\u0275\u0275ProvidersFeature([PopoverStyle, {
      provide: POPOVER_INSTANCE,
      useExisting: _Popover
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Popover
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c12,
    decls: 1,
    vars: 1,
    consts: [["role", "dialog", "pMotionName", "p-anchored-overlay", 3, "pBind", "class", "style", "ngStyle", "pMotion", "pMotionAppear", "pMotionOptions"], ["role", "dialog", "pMotionName", "p-anchored-overlay", 3, "click", "pMotionOnEnter", "pMotionOnAfterLeave", "pBind", "ngStyle", "pMotion", "pMotionAppear", "pMotionOptions"], [3, "click", "mousedown", "pBind"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function Popover_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275conditionalCreate(0, Popover_Conditional_0_Template, 4, 19, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.render ? 0 : -1);
      }
    },
    dependencies: [CommonModule, NgTemplateOutlet, NgStyle, SharedModule, Bind, MotionModule, MotionDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Popover, [{
    type: Component,
    args: [{
      selector: "p-popover",
      standalone: true,
      imports: [CommonModule, SharedModule, Bind, MotionModule],
      providers: [PopoverStyle, {
        provide: POPOVER_INSTANCE,
        useExisting: Popover
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Popover
      }],
      hostDirectives: [Bind],
      template: `
        @if (render) {
            <div
                [pBind]="ptm('root')"
                [class]="cn(cx('root'), styleClass)"
                [style]="sx('root')"
                [ngStyle]="style"
                (click)="onOverlayClick($event)"
                role="dialog"
                [attr.aria-modal]="overlayVisible"
                [attr.aria-label]="ariaLabel"
                [attr.aria-labelledBy]="ariaLabelledBy"
                [pMotion]="overlayVisible"
                pMotionName="p-anchored-overlay"
                [pMotionAppear]="true"
                (pMotionOnEnter)="onAnimationStart($event)"
                (pMotionOnAfterLeave)="onAnimationEnd()"
                [pMotionOptions]="computedMotionOptions()"
            >
                <div [pBind]="ptm('content')" [class]="cx('content')" (click)="onContentClick($event)" (mousedown)="onContentClick($event)">
                    <ng-content></ng-content>
                    <ng-template *ngTemplateOutlet="contentTemplate || _contentTemplate; context: { closeCallback: onCloseClick.bind(this) }"></ng-template>
                </div>
            </div>
        }
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None
    }]
  }], null, {
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    dismissable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
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
    autoZIndex: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    ariaCloseLabel: [{
      type: Input
    }],
    baseZIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    focusOnShow: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    motionOptions: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "motionOptions",
        required: false
      }]
    }],
    onShow: [{
      type: Output
    }],
    onHide: [{
      type: Output
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
    }],
    onEscapeKeydown: [{
      type: HostListener,
      args: ["document:keydown.escape", ["$event"]]
    }]
  });
})();
var PopoverModule = class _PopoverModule {
  static \u0275fac = function PopoverModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PopoverModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _PopoverModule,
    imports: [Popover, SharedModule],
    exports: [Popover, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Popover, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopoverModule, [{
    type: NgModule,
    args: [{
      imports: [Popover, SharedModule],
      exports: [Popover, SharedModule]
    }]
  }], null, null);
})();

// src/app/components/bookmarklet/bookmarklet.component.ts
var _c03 = (a0) => ({ repo: a0 });
var BookmarkletComponent = class _BookmarkletComponent {
  projectState = inject(ProjectStateService);
  sanitizer = inject(DomSanitizer);
  mode = input("github", ...ngDevMode ? [{ debugName: "mode" }] : (
    /* istanbul ignore next */
    []
  ));
  modified = {
    github: "2026-07-28",
    local: "2026-07-29"
  };
  markForTranslation() {
    marker("project.bookmarklet.github._title");
    marker("project.bookmarklet.github.description");
    marker("project.bookmarklet.local._title");
    marker("project.bookmarklet.local.description");
  }
  projectData = this.projectState.getProject;
  projectBookmarklet = computed(() => {
    return this.mode() === "github" ? this.ghBookmarklet() : this.utBookmarklet();
  }, ...ngDevMode ? [{ debugName: "projectBookmarklet" }] : (
    /* istanbul ignore next */
    []
  ));
  ghBookmarklet = computed(() => {
    const owner = this.projectData().github.owner;
    const repo = this.projectData().github.repo;
    if (!owner || !repo) {
      return this.sanitizer.bypassSecurityTrustUrl("javascript:void(0)");
    }
    const js = `javascript:(function(){const owner='${owner}';const repo='${repo}';const currentUrl=window.location.href;const isInMyRepo=currentUrl.includes(owner+'/'+repo)||currentUrl.includes(owner+'.github.io/'+repo)||currentUrl.includes('cra-test-arc.canada.ca/'+repo);const isGitHubEdit=currentUrl.includes('github.com');const isGitHubPreview=currentUrl.includes('.github.io')||currentUrl.includes('test.canada.ca')||currentUrl.includes('cra-test-arc.canada.ca');const isCanadaCa=currentUrl.includes('canada.ca')&&!isGitHubPreview;if(isGitHubEdit){const isRoot=currentUrl.match(/^https:\\/\\/github\\.com\\/([^\\/]+)\\/([^\\/]+)\\/?$/);const isGcProto=currentUrl.includes('github.com/gc-proto/');const isCraProto=currentUrl.includes('github.com/cra-proto/');if(isCraProto){if(isRoot){window.location.href='https://cra-test-arc.canada.ca/'+isRoot[2]+'/'}else{window.location.href=currentUrl.replace(/^https:\\/\\/github\\.com\\/cra-proto\\/(.*?)\\/(blob|tree|edit)\\/.*?\\/(.*?)(\\/)?(\\.\\w+)?$/,'https://cra-test-arc.canada.ca/$1/$3$5');}}else if(isGcProto){if(isRoot){window.location.href='https://test.canada.ca/'+isRoot[2]+'/'}else{window.location.href=currentUrl.replace(/^https:\\/\\/github\\.com\\/gc-proto\\/(.*?)\\/(blob|tree|edit)\\/.*?\\/(.*?)(\\/)?(\\.\\w+)?$/,'https://test.canada.ca/$1/$3$5');}}else{if(isRoot){window.location.href='https://'+isRoot[1]+'.github.io/'+isRoot[2]+'/'}else{window.location.href=currentUrl.replace(/^https:\\/\\/github\\.com\\/(.*?)\\/(.*?)\\/(blob|tree|edit)\\/.*?\\/(.*?)(\\/)?(\\.\\w+)?$/,'https://$1.github.io/$2/$4$6');}}}else if(isGitHubPreview&&isInMyRepo){const path=currentUrl.split(repo)[1];window.location.href='https://www.canada.ca'+path;}else if(isCanadaCa){const path=currentUrl.replace(/^https:\\/\\/(www\\.)?canada\\.ca/,'');if(owner==='cra-proto'){window.location.href='https://cra-test-arc.canada.ca/'+repo+path}else if(owner==='gc-proto'){window.location.href='https://test.canada.ca/'+repo+path}else{window.location.href='https://'+owner+'.github.io/'+repo+path}}else{if(owner==='cra-proto'){window.location.href='https://cra-test-arc.canada.ca/'+repo}else if(owner==='gc-proto'){window.location.href='https://test.canada.ca/'+repo}else{window.location.href='https://'+owner+'.github.io/'+repo}}})();`;
    return this.sanitizer.bypassSecurityTrustUrl(js);
  }, ...ngDevMode ? [{ debugName: "ghBookmarklet" }] : (
    /* istanbul ignore next */
    []
  ));
  utBookmarklet = computed(() => {
    const repo = this.projectData().github.repo;
    if (!repo) {
      return this.sanitizer.bypassSecurityTrustUrl("javascript:void(0)");
    }
    const js = `javascript:(function(){const repo='${repo}';const currentUrl=window.location.href;const isUTPreview=currentUrl.includes('test/AIDA/'+repo);const isGitHubPreview=currentUrl.includes('.github.io')||currentUrl.includes('test.canada.ca')||currentUrl.includes('cra-test-arc.canada.ca');const isCanadaCa=currentUrl.includes('canada.ca');if(isUTPreview){const path=currentUrl.split(repo)[1];window.location.href='https://www.canada.ca'+path;}else if(isCanadaCa&&!isGitHubPreview){const path=currentUrl.replace(/^https:\\/\\/(www\\.)?canada\\.ca/,'');window.location.href='http://cra-ut.isvcs.net/test/AIDA/'+repo+path;}else{window.location.href='http://cra-ut.isvcs.net/test/AIDA/'+repo;}})();`;
    return this.sanitizer.bypassSecurityTrustUrl(js);
  }, ...ngDevMode ? [{ debugName: "utBookmarklet" }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function BookmarkletComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BookmarkletComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookmarkletComponent, selectors: [["aida-bookmarklet"]], inputs: { mode: [1, "mode"] }, decls: 16, vars: 17, consts: [[1, "flex", "flex-column", "lg:flex-row", "lg:gap-4"], [1, "text-2xl", "my-1", "capitalize"], [1, "my-1"], [1, "text-xl", "font-semibold", 3, "click", "href"], [1, "text-color-secondary", "mt-2"]], template: function BookmarkletComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "h2", 1);
      \u0275\u0275text(2);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "div", 2)(5, "a", 3);
      \u0275\u0275domListener("click", function BookmarkletComponent_Template_a_click_5_listener($event) {
        return $event.preventDefault();
      });
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(8, "p", 4);
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275domElement(11, "br");
      \u0275\u0275domElementStart(12, "strong");
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(15);
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 6, "common.bookmarklet"));
      \u0275\u0275advance(3);
      \u0275\u0275domProperty("href", ctx.projectBookmarklet(), \u0275\u0275sanitizeUrl);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 8, "project.bookmarklet." + ctx.mode() + "._title", \u0275\u0275pureFunction1(15, _c03, ctx.projectData().github.repo)));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 11, "project.bookmarklet." + ctx.mode() + ".description"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(14, 13, "common.modified"), ": ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("", ctx.modified[ctx.mode()], " ");
    }
  }, dependencies: [TranslatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookmarkletComponent, [{
    type: Component,
    args: [{ selector: "aida-bookmarklet", imports: [TranslatePipe], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="flex flex-column lg:flex-row lg:gap-4">
  <h2 class="text-2xl my-1 capitalize">{{ 'common.bookmarklet' | translate }}</h2>
  <div class="my-1">
    <a [href]="projectBookmarklet()" (click)="$event.preventDefault()" class="text-xl font-semibold">{{
      'project.bookmarklet.' + mode() + '._title' | translate: { repo: projectData().github.repo }
    }}</a>
    <p class="text-color-secondary mt-2">
      {{ 'project.bookmarklet.' + mode() + '.description' | translate }}<br />
      <strong>{{ 'common.modified' | translate }}: </strong>{{ modified[mode()] }}
    </p>
  </div>
</div>
` }]
  }], null, { mode: [{ type: Input, args: [{ isSignal: true, alias: "mode", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookmarkletComponent, { className: "BookmarkletComponent", filePath: "src/app/components/bookmarklet/bookmarklet.component.ts", lineNumber: 15 });
})();

// src/app/common/cdts.template.ts
var CDTS_TEMPLATE_ENG = `<!DOCTYPE html>
<html class="no-js" dir="ltr" lang="en" xmlns="https://www.w3.org/1999/xhtml">
    <head prefix="og: https://ogp.me/ns#">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta charset="utf-8">
        <!-- Web Experience Toolkit (WET) / Bo\xEEte \xE0 outils de l'exp\xE9rience Web (BOEW) wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html -->
        <title>{{TITLE}}</title>
        <meta content="width=device-width, initial-scale=1" name="viewport">
        <link rel="schema.dcterms" href="https://purl.org/dc/terms/">
        <link rel="alternate" hreflang="fr" href="{{ALTLINK}}"/>
        <!-- Meta data -->
        <meta name="description" content="{{DESCRIPTION}}">
        <meta name="keywords" content="{{KEYWORDS}}">
        <meta name="author" content="Canada Revenue Agency">
        <meta name="dcterms.creator" content="Canada Revenue Agency">
        <meta name="robots" content="{{ROBOTS}}">
        <meta name="dcterms.subject" content="{{SUBJECT}}">
        <meta name="dcterms.language" title="ISO639-2/T" content="eng">
        <meta name="dcterms.audience" content="general public">
        <meta name="dcterms.spatial" content="Canada">
        <meta name="dcterms.type" content="service description">
        <meta name="dcterms.identifier" content="Canada_Revenue_Agency">
        <!-- Meta data -->
        <link rel="stylesheet" href="https://www.canada.ca/etc/designs/canada/wet-boew/css/theme.min.css">
        <link rel="stylesheet" href="https://www.canada.ca/etc/designs/canada/wet-boew/m\xE9li-m\xE9lo/2025-12-mille-iles.min.css">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css">
        <!-- START of GitHub only testing banner CSS -->
        <link rel="stylesheet" href="https://cra-test-arc.canada.ca/core-prototype/source/css/testing-banner.css">
        <!-- END of GitHub only testing banner CSS -->
        {{STYLES}}
        <link href="https://www.canada.ca/etc/designs/canada/cdts/gcweb/v5_0_4/wet-boew/assets/favicon.ico" rel="shortcut icon">
    </head>
    <body vocab="https://schema.org/" typeof="WebPage" resource="#wb-webpage">
        <noscript>
            <!-- Write closure fall-back static file -->
            <!-- /ROOT/etc/designs/canada/cdts/gcweb/v4_0_43/cdts/static/refTop.html -->
            <!--#include virtual="/app/cls/WET/gcweb/v4_0_43/cdts/static/refTop.html" -->
        </noscript>
        <!-- Load closure template scripts -->
        <!--<script src="https://www.canada.ca/etc/designs/canada/cdts/gcweb/v4_0_43/cdts/compiled/soyutils.js"><\/script>-->
        <script src="https://www.canada.ca/etc/designs/canada/cdts/gcweb/v5_0_4/cdts/compiled/wet-en.js"><\/script>
        <!-- START of GitHub only template section -->
        <data id="devoptions" data-loc-storage="gitCRATemplateDevOptions" value="true"></data>
        <data id="exitpage" data-exit-by-url="false" data-mod-link-file="{{DEPTH}}source/data/exclude-redirect-links.json" value="{{DEPTH}}source/exit-intent-e.html"></data>
        <data id="relextlnk" data-origin="https://www.canada.ca" value="false"></data>
        <div id="site-banner-inc" class="wb-disable-allow" data-ajax-replace="https://cra-test-arc.canada.ca/core-prototype/source/includes/site-banner-e.inc"></div>
        <!-- END of GitHub only template section -->
        <div id="def-top">
            <!-- Write closure fall-back static file -->
            <!-- /ROOT/etc/designs/canada/cdts/gcweb/v4_0_43/cdts/static/top-en.html -->
            <!--#include virtual="/app/cls/WET/gcweb/v4_0_43/cdts/static/top-en.html" -->
        </div>
        <!-- Write closure template -->
        <script>
            var defTop = document.getElementById("def-top");
            defTop.outerHTML = wet.builder.top({
                lngLinks: [{
                    lang: "fr", 
                    href: "{{FRENCH}}", 
                    text: "Fran\xE7ais"
                }], 
                customSearch: [{
                    action: "https://www.canada.ca/en/revenue-agency/search.html", 
                    placeholder: "CRA", 
                    method: "get", 
                }], 
                auth: [{
                    type: "contextual", 
                    label: "sign in", 
                    labelExtended: "CRA sign in", 
                    link: "https://www.canada.ca/en/revenue-agency/services/e-services/cra-login-services.html"
                }], 
                breadcrumbs: [{{BREADCRUMBS}}]
            });
        <\/script>
        <!-- Write closure template -->
        <div class="container">
            <div class="row">
                <main property="mainContentOfPage" resource="#wb-main" typeof="WebPageElement" class="container">
                    {{HEADER}}

                    {{CONTENT}}

                    <section class="pagedetails">
                        <h2 class="wb-inv">Page details</h2>
                        <div class="row">
                            <div class="col-sm-8 col-md-9 col-lg-9">
                                <div data-ajax-replace="https://www.canada.ca/etc/designs/canada/wet-boew/assets/feedback/page-feedback-en.html" class="wb-disable-allow" data-feedback-section="{{TITLE}}" data-feedback-theme="Taxes" data-feedback-institution="."></div>
                            </div>
                        </div>
                        <dl id="wb-dtmd">
                            <dt>Date modified:&#160</dt>
                            <dd><time property="dateModified">{{MODIFIED}}</time></dd>
                        </dl>
                    </section>
                    <div id="def-preFooter">
                        <!-- Write closure fall-back static file -->
                        <!-- /ROOT/etc/designs/canada/cdts/gcweb/v4_0_43/cdts/static/preFooter-en.html -->
                        <!--#include virtual="/app/cls/WET/gcweb/v4_0_43/cdts/static/preFooter-en.html" -->
                    </div>
                </main>
            </div>
        </div>
        <!-- Write closure template -->
        <script>
            var defPreFooter = document.getElementById("def-preFooter");
            defPreFooter.outerHTML = wet.builder.preFooter({
                showShare: false, 
                pagedetails: false
            });
        <\/script>
        <div id="def-footer">
            <!-- Write closure fall-back static file -->
            <!-- /ROOT/app/cls/WET/gcweb/v4_0_43/cdts/static/footer-en.html -->
            <!--#include virtual="/app/cls/WET/gcweb/v4_0_43/cdts/static/footer-en.html" -->
        </div>
        <!-- Write closure template -->
        <script>
            var defFooter = document.getElementById("def-footer");
            defFooter.outerHTML = wet.builder.footer({
                privacyLink: {
                    href: "https://www.canada.ca/en/revenue-agency/corporate/privacy-notice.html"
                }, 
                contextualFooter: {
                    title: "Canada Revenue Agency (CRA)", 
                    links: [{
                        text: "Contact the CRA", 
                        href: "https://www.canada.ca/en/revenue-agency/corporate/contact-information.html"
                    }, {
                        text: "Update your information", 
                        href: "https://www.canada.ca/en/revenue-agency/services/update-information-cra.html"
                    }, {
                        text: "About the CRA", 
                        href: "https://www.canada.ca/en/revenue-agency/corporate/about-canada-revenue-agency-cra.html"
                    }]
                }
            });
        <\/script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"><\/script>
        <script src="https://www.canada.ca/etc/designs/canada/wet-boew/js/wet-boew.min.js"><\/script>
        <span id="wb-rsz" class="wb-init">&nbsp;</span>
        <script src="https://www.canada.ca/etc/designs/canada/wet-boew/js/theme.min.js"><\/script>
        <script src="https://www.canada.ca/etc/designs/canada/wet-boew/m\xE9li-m\xE9lo/2025-12-mille-iles.min.js"><\/script>
        <script src="{{DEPTH}}source/scripts/external-link-detour.js"><\/script>
        {{SCRIPTS}}
    </body>
</html>`;
var CDTS_TEMPLATE_FRA = `<!DOCTYPE html>
<html class="no-js" dir="ltr" lang="fr" xmlns="https://www.w3.org/1999/xhtml">
    <head prefix="og: https://ogp.me/ns#">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta charset="utf-8">
        <!-- Web Experience Toolkit (WET) / Bo\xEEte \xE0 outils de l'exp\xE9rience Web (BOEW) wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html -->
        <title>{{TITLE}}</title>
        <meta content="width=device-width, initial-scale=1" name="viewport">
        <link rel="schema.dcterms" href="https://purl.org/dc/terms/">
        <link rel="alternate" hreflang="en" href="{{ALTLINK}}"/>
        <!-- Meta data -->
        <meta name="description" content="{{DESCRIPTION}}">
        <meta name="keywords" content="{{KEYWORDS}}">
        <meta name="author" content="Agence du revenu du Canada">
        <meta name="dcterms.creator" content="Agence du revenu du Canada">
        <meta name="robots" content="{{ROBOTS}}">
        <meta name="dcterms.subject" content="{{SUBJECT}}">
        <meta name="dcterms.language" title="ISO639-2/T" content="fra">
        <meta name="dcterms.audience" content="general public">
        <meta name="dcterms.spatial" content="Canada">
        <meta name="dcterms.type" content="service description">
        <meta name="dcterms.identifier" content="Agence_du_revenu_du_Canada">
        <!-- Meta data -->
        <link rel="stylesheet" href="https://www.canada.ca/etc/designs/canada/wet-boew/css/theme.min.css">
        <link rel="stylesheet" href="https://www.canada.ca/etc/designs/canada/wet-boew/m\xE9li-m\xE9lo/2025-12-mille-iles.min.css">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css">
        <!-- START of GitHub only testing banner CSS -->
        <link rel="stylesheet" href="https://cra-test-arc.canada.ca/core-prototype/source/css/testing-banner.css">
        <!-- END of GitHub only testing banner CSS -->
        {{STYLES}}
        <link href="https://www.canada.ca/etc/designs/canada/cdts/gcweb/v5_0_4/wet-boew/assets/favicon.ico" rel="shortcut icon">
    </head>
    <body vocab="https://schema.org/" typeof="WebPage" resource="#wb-webpage">
        <noscript>
            <!-- Write closure fall-back static file -->
            <!-- /ROOT/etc/designs/canada/cdts/gcweb/v4_0_43/cdts/static/refTop.html -->
            <!--#include virtual="/app/cls/WET/gcweb/v4_0_43/cdts/static/refTop.html" -->
        </noscript>
        <!-- Load closure template scripts -->
        <!--<script src="https://www.canada.ca/etc/designs/canada/cdts/gcweb/v4_0_43/cdts/compiled/soyutils.js"><\/script>-->
        <script src="https://www.canada.ca/etc/designs/canada/cdts/gcweb/v5_0_4/cdts/compiled/wet-fr.js"><\/script>
        <!-- START of GitHub only template section -->
        <data id="devoptions" data-loc-storage="gitCRATemplateDevOptions" value="true"></data>
        <data id="exitpage" data-exit-by-url="false" data-mod-link-file="{{DEPTH}}source/data/exclude-redirect-links.json" value="{{DEPTH}}source/exit-intent-f.html"></data>
        <data id="relextlnk" data-origin="https://www.canada.ca" value="false"></data>
        <div id="site-banner-inc" class="wb-disable-allow" data-ajax-replace="https://cra-test-arc.canada.ca/core-prototype/source/includes/site-banner-f.inc"></div>
        <!-- END of GitHub only template section -->
        <div id="def-top">
            <!-- Write closure fall-back static file -->
            <!-- /ROOT/etc/designs/canada/cdts/gcweb/v4_0_43/cdts/static/top-fr.html -->
            <!--#include virtual="/app/cls/WET/gcweb/v4_0_43/cdts/static/top-fr.html" -->
        </div>
        <!-- Write closure template -->
        <script>
            var defTop = document.getElementById("def-top");
            defTop.outerHTML = wet.builder.top({
                lngLinks: [{
                    lang: "en", 
                    href: "{{ENGLISH}}", 
                    text: "English"
                }], 
                customSearch: [{
                    action: "https://www.canada.ca/fr/agence-revenu/recherche.html", 
                    placeholder: "ARC", 
                    method: "get", 
                }], 
                auth: [{
                    type: "contextual", 
                    label: "Se connecter", 
                    labelExtended: "Se connecter \xE0 l'ARC", 
                    link: "https://www.canada.ca/fr/agence-revenu/services/services-electroniques/services-ouverture-session-arc.html"
                }], 
                breadcrumbs: [{{BREADCRUMBS}}]
            });
        <\/script>
        <!-- Write closure template -->
        <div class="container">
            <div class="row">
                <main property="mainContentOfPage" resource="#wb-main" typeof="WebPageElement" class="container">
                    {{HEADER}}

                    {{CONTENT}}

                    <section class="pagedetails">
                        <h2 class="wb-inv">D\xE9tails de la page</h2>
                        <div class="row">
                            <div class="col-sm-8 col-md-9 col-lg-9">
                                <div data-ajax-replace="https://www.canada.ca/etc/designs/canada/wet-boew/assets/feedback/page-feedback-fr.html" class="wb-disable-allow" data-feedback-section="{{TITLE}}" data-feedback-theme="Taxes" data-feedback-institution="."></div>
                            </div>
                        </div>
                        <dl id="wb-dtmd">
                            <dt>Date de modification&#160;:&#160;</dt>
                            <dd><time property="dateModified">{{MODIFIED}}</time></dd>
                        </dl>
                    </section>
                    <div id="def-preFooter">
                        <!-- Write closure fall-back static file -->
                        <!-- /ROOT/etc/designs/canada/cdts/gcweb/v4_0_43/cdts/static/preFooter-fr.html -->
                        <!--#include virtual="/app/cls/WET/gcweb/v4_0_43/cdts/static/preFooter-fr.html" -->
                    </div>
                </main>
            </div>
        </div>
        <!-- Write closure template -->
        <script>
            var defPreFooter = document.getElementById("def-preFooter");
            defPreFooter.outerHTML = wet.builder.preFooter({
                showShare: false, 
                pagedetails: false
            });
        <\/script>
        <div id="def-footer">
            <!-- Write closure fall-back static file -->
            <!-- /ROOT/app/cls/WET/gcweb/v4_0_43/cdts/static/footer-fr.html -->
            <!--#include virtual="/app/cls/WET/gcweb/v4_0_43/cdts/static/footer-fr.html" -->
        </div>
        <!-- Write closure template -->
        <script>
            var defFooter = document.getElementById("def-footer");
            defFooter.outerHTML = wet.builder.footer({
                privacyLink: {
                    href: "https://www.canada.ca/fr/agence-revenu/organisation/avis-confidentialite.html"
                }, 
                contextualFooter: {
                    title: "Agence du revenu du Canada (ARC)", 
                    links: [{
                        text: "Contacter l'ARC", 
                        href: "https://www.canada.ca/fr/agence-revenu/organisation/coordonnees.html"
                    }, {
                        text: "Mettre \xE0 jour vos renseignements", 
                        href: "https://www.canada.ca/fr/agence-revenu/services/mettre-a-jour-renseignements-arc.html"
                    }, {
                        text: "\xC0 propos de l'ARC", 
                        href: "https://www.canada.ca/fr/agence-revenu/organisation/a-propos-agence-revenu-canada-arc.html"
                    }]
                }
            });
        <\/script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"><\/script>
        <script src="https://www.canada.ca/etc/designs/canada/wet-boew/js/wet-boew.min.js"><\/script>
        <span id="wb-rsz" class="wb-init">&nbsp;</span>
        <script src="https://www.canada.ca/etc/designs/canada/wet-boew/js/theme.min.js"><\/script>
        <script src="https://www.canada.ca/etc/designs/canada/wet-boew/m\xE9li-m\xE9lo/2025-12-mille-iles.min.js"><\/script>
        <script src="{{DEPTH}}source/scripts/external-link-detour.js"><\/script>
        {{SCRIPTS}}
    </body>
</html>`;
var EXIT_PAGE_TEMPLATE_ENG = `<!DOCTYPE html>
<html class="no-js" lang="en" dir="ltr">
<head>
<meta charset="utf-8">
<title>The page you have requested is outside this CRA testing environment - Canada.ca</title>
<meta content="width=device-width, initial-scale=1" name="viewport">
<meta name="dcterms.language" content="eng">
<meta name="robots" content="noindex, nofollow">
<link rel="shortcut icon" href="https://www.canada.ca/etc/designs/canada/cdts/gcweb/v5_0_4/wet-boew/assets/favicon.ico" >
<link rel="stylesheet" href="https://www.canada.ca/etc/designs/canada/wet-boew/css/theme.min.css">
<link rel="stylesheet" href="https://cra-test-arc.canada.ca/core-prototype/source/css/testing-banner.css">
</head>
<body vocab="http://schema.org/" typeof="WebPage">
<nav><ul id="wb-tphp">
    <li class="wb-slc"><a class="wb-sl" href="#wb-cont">Skip to main content</a></li>
</ul></nav>
<data id="devoptions" data-loc-storage="gitCRATemplateDevOptions" value="false"></data>
<data id="exitpage" data-exit-by-url="false" data-mod-link-file="{{DEPTH}}source/data/exclude-redirect-links.json" value="{{DEPTH}}source/exit-intent-e.html"></data>
<data id="relextlnk" data-origin="https://www.canada.ca" value="false"></data>
<header>
    <div id="wb-bnr" class="container"><div class="row">
        <div class="brand col-xs-9 col-sm-5 col-md-4" property="publisher" typeof="GovernmentOrganization">
            <a href="https://www.canada.ca/en.html" property="url">
                <img src="https://www.canada.ca/etc/designs/canada/wet-boew/assets/sig-blk-en.svg" alt="Government of Canada" property="logo">
            </a>
        </div>
    </div></div>
</header>
<main class="container" property="mainContentOfPage" resource="#wb-main" typeof="WebPageElement">
    <h1 property="name" id="wb-cont">The page you have requested is outside this CRA testing environment</h1>
    <p>Please press the back button to return to the previous page.</p>
    <ul class="list-inline">
        <li><button id="back" class="btn btn-call-to-action btn-lg" type="button">Go Back!</button></li>
        <li id="exitLink" class="hidden"><button id="leavesitelnk" class="btn btn-link btn-lg" type="button">Leave the test site</button></li>
        <li id="exitWETLink" class="hidden"><span class="wb-exitscript wb-exitscript-urlparam"></span></li>
    </ul>
    <section class="pagedetails">
        <h2 class="wb-inv">Page details</h2>
        <dl id="wb-dtmd"><dt>Date modified:&#160;</dt><dd><time property="dateModified">{{MODIFIED}}</time></dd></dl>
    </section>
</main>
<footer id="wb-info">
    <div class="gc-sub-footer"><div class="container d-flex align-items-center">
        <nav><ul>
            <li><a href="https://www.canada.ca/en/transparency/terms.html">Terms and conditions</a></li>
            <li><a href="https://www.canada.ca/en/revenue-agency/corporate/privacy-notice.html">Privacy</a></li>
        </ul></nav>
        <div class="wtrmrk align-self-end">
            <img src="https://www.canada.ca/etc/designs/canada/wet-boew/assets/wmms-blk.svg" alt="Symbol of the Government of Canada">
        </div>
    </div></div>
</footer>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js" integrity="sha384-rY/jv8mMhqDabXSo+UCggqKtdmBfd3qC2/KvyTDNQ6PcUJXaxK1tMepoQda4g5vB" crossorigin="anonymous"><\/script>
<script src="https://www.canada.ca/etc/designs/canada/wet-boew/js/wet-boew.min.js"><\/script>
<script src="https://www.canada.ca/etc/designs/canada/wet-boew/js/theme.min.js"><\/script>
<script src="{{DEPTH}}source/scripts/external-link-detour.js"><\/script>
<script src="https://cra-test-arc.canada.ca/core-prototype/source/scripts/exit-page.js"><\/script>
</body>
</html>`;
var EXIT_PAGE_TEMPLATE_FRA = `<!DOCTYPE html>
<html class="no-js" lang="fr" dir="ltr">
<head>
<meta charset="utf-8">
<title>La page que vous avez demand\xE9e est \xE0 l'ext\xE9rieur de cet environnement de test de l'ARC - Canada.ca</title>
<meta content="width=device-width, initial-scale=1" name="viewport">
<meta name="dcterms.language" content="fra">
<meta name="robots" content="noindex, nofollow">
<link rel="shortcut icon" href="https://www.canada.ca/etc/designs/canada/cdts/gcweb/v5_0_4/wet-boew/assets/favicon.ico">
<link rel="stylesheet" href="https://www.canada.ca/etc/designs/canada/wet-boew/css/theme.min.css">
<link rel="stylesheet" href="https://cra-test-arc.canada.ca/core-prototype/source/css/testing-banner.css">
</head>
<body vocab="http://schema.org/" typeof="WebPage">
<nav><ul id="wb-tphp">
    <li class="wb-slc"><a class="wb-sl" href="#wb-cont">Passer au contenu principal</a></li>
</ul></nav>
<data id="devoptions" data-loc-storage="gitCRATemplateDevOptions" value="false"></data>
<data id="exitpage" data-exit-by-url="false" data-mod-link-file="{{DEPTH}}source/data/exclude-redirect-links.json" value="{{DEPTH}}source/exit-intent-f.html"></data>
<data id="relextlnk" data-origin="https://www.canada.ca" value="false"></data>
<header>
    <div id="wb-bnr" class="container"><div class="row">
        <div class="brand col-xs-9 col-sm-5 col-md-4" property="publisher" typeof="GovernmentOrganization">
            <a href="https://www.canada.ca/fr.html" property="url">
                <img src="https://www.canada.ca/etc/designs/canada/wet-boew/assets/sig-blk-fr.svg" alt="Gouvernement du Canada" property="logo">
            </a>
        </div>
    </div></div>
</header>
<main class="container" property="mainContentOfPage" resource="#wb-main" typeof="WebPageElement">
    <h1 property="name" id="wb-cont">La page que vous avez demand\xE9e est \xE0 l'ext\xE9rieur de cet environnement de test de l'ARC</h1>
    <p>Veuillez appuyer sur le bouton de retour pour revenir \xE0 la page pr\xE9c\xE9dente.</p>
    <ul class="list-inline">
        <li><button id="back" class="btn btn-call-to-action btn-lg" type="button">Retour!</button></li>
        <li id="exitLink" class="hidden"><button id="leavesitelnk" class="btn btn-link btn-lg" type="button">Quitter le site de test</button></li>
        <li id="exitWETLink" class="hidden"><span class="wb-exitscript wb-exitscript-urlparam"></span></li>
    </ul>
    <section class="pagedetails">
        <h2 class="wb-inv">D\xE9tails de la page</h2>
        <dl id="wb-dtmd"><dt>Date de modification&#160;:&#160;</dt><dd><time property="dateModified">{{MODIFIED}}</time></dd></dl>
    </section>
</main>
<footer id="wb-info">
    <div class="gc-sub-footer"><div class="container d-flex align-items-center">
        <nav><ul>
            <li><a href="https://www.canada.ca/fr/transparence/avis.html">Avis</a></li>
            <li><a href="https://www.canada.ca/fr/agence-revenu/organisation/avis-confidentialite.html">Confidentialit\xE9</a></li>
        </ul></nav>
        <div class="wtrmrk align-self-end">
            <img src="https://www.canada.ca/etc/designs/canada/wet-boew/assets/wmms-blk.svg" alt="Symbole du gouvernement du Canada">
        </div>
    </div></div>
</footer>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js" integrity="sha384-rY/jv8mMhqDabXSo+UCggqKtdmBfd3qC2/KvyTDNQ6PcUJXaxK1tMepoQda4g5vB" crossorigin="anonymous"><\/script>
<script src="https://www.canada.ca/etc/designs/canada/wet-boew/js/wet-boew.min.js"><\/script>
<script src="https://www.canada.ca/etc/designs/canada/wet-boew/js/theme.min.js"><\/script>
<script src="{{DEPTH}}source/scripts/external-link-detour.js"><\/script>
<script src="https://cra-test-arc.canada.ca/core-prototype/source/scripts/exit-page.js"><\/script>
</body>
</html>`;
var INDEX_PAGE_TEMPLATE_ENG = `<!DOCTYPE html>
<html class="no-js" lang="en" dir="ltr">
<head>
<meta charset="utf-8">
<title>Repository sitemap</title>
<meta content="width=device-width, initial-scale=1" name="viewport">
<meta name="dcterms.language" content="eng">
<meta name="robots" content="noindex, nofollow">
<link rel="shortcut icon" href="https://www.canada.ca/etc/designs/canada/cdts/gcweb/v5_0_4/wet-boew/assets/favicon.ico" >
<link rel="stylesheet" href="https://www.canada.ca/etc/designs/canada/wet-boew/css/theme.min.css">
<link rel="stylesheet" href="https://cra-test-arc.canada.ca/core-prototype/source/css/testing-banner.css">
<style>
  .link-context-menu {
    position: fixed;
    z-index: 1000;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    min-width: 180px;
    padding: 4px 0;
    font-size: 14px;
  }
  .link-context-menu button {
    display: block;
    width: 100%;
    text-align: left;
    padding: 6px 12px;
    border: none;
    background: none;
    cursor: pointer;
    font: inherit;
  }
  .link-context-menu button:hover,
  .link-context-menu button:focus {
    background: #f0f0f0;
    outline: none;
  }
</style>
</head>
<body vocab="http://schema.org/" typeof="WebPage">
<nav><ul id="wb-tphp">
    <li class="wb-slc"><a class="wb-sl" href="#wb-cont">Skip to main content</a></li>
</ul></nav>
<header>
    <div id="wb-bnr" class="container"><div class="row">
        <div class="brand col-xs-9 col-sm-5 col-md-4" property="publisher" typeof="GovernmentOrganization">
            <a href="https://www.canada.ca/en.html" property="url">
                <img src="https://www.canada.ca/etc/designs/canada/wet-boew/assets/sig-blk-en.svg" alt="Government of Canada" property="logo">
            </a>
        </div>
    </div></div>
</header>
<main class="container" property="mainContentOfPage" resource="#wb-main" typeof="WebPageElement">
    <h1 property="name" id="wb-cont">Repository sitemap ({{REPO}})</h1>
    
    {{CONTENT}}

    <div id="linkContextMenu" class="link-context-menu" hidden></div>

    <section class="pagedetails">
        <h2 class="wb-inv">Page details</h2>
        <dl id="wb-dtmd"><dt>Date modified:&#160;</dt><dd><time property="dateModified">{{MODIFIED}}</time></dd></dl>
    </section>
</main>
<footer id="wb-info">
    <div class="gc-sub-footer"><div class="container d-flex align-items-center">
        <nav><ul>
            <li><a href="https://www.canada.ca/en/transparency/terms.html">Terms and conditions</a></li>
            <li><a href="https://www.canada.ca/en/revenue-agency/corporate/privacy-notice.html">Privacy</a></li>
        </ul></nav>
        <div class="wtrmrk align-self-end">
            <img src="https://www.canada.ca/etc/designs/canada/wet-boew/assets/wmms-blk.svg" alt="Symbol of the Government of Canada">
        </div>
    </div></div>
</footer>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js" integrity="sha384-rY/jv8mMhqDabXSo+UCggqKtdmBfd3qC2/KvyTDNQ6PcUJXaxK1tMepoQda4g5vB" crossorigin="anonymous"><\/script>
<script src="https://www.canada.ca/etc/designs/canada/wet-boew/js/wet-boew.min.js"><\/script>
<script src="https://www.canada.ca/etc/designs/canada/wet-boew/js/theme.min.js"><\/script>
<script>
  (function () {
    const menu = document.getElementById('linkContextMenu');

    document.addEventListener('contextmenu', function (e) {
      const link = e.target.closest('a[data-versions]');
      if (!link) return;

      e.preventDefault();

      let versions;
      try {
        versions = JSON.parse(link.dataset.versions);
      } catch (err) {
        return;
      }

      menu.innerHTML = '';
      versions.forEach(function (v) {
        const btn = document.createElement('button');
        btn.textContent = v.label;
        btn.addEventListener('click', function () {
          window.open(v.href, '_blank', 'noopener');
          closeMenu();
        });
        menu.appendChild(btn);
      });

      menu.style.left = e.clientX + 'px';
      menu.style.top = e.clientY + 'px';
      menu.hidden = false;

      const rect = menu.getBoundingClientRect();
      if (rect.right > window.innerWidth) {
        menu.style.left = (window.innerWidth - rect.width - 8) + 'px';
      }
      if (rect.bottom > window.innerHeight) {
        menu.style.top = (window.innerHeight - rect.height - 8) + 'px';
      }
    });

    document.addEventListener('click', closeMenu);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
    window.addEventListener('scroll', closeMenu, { passive: true });

    function closeMenu() {
      menu.hidden = true;
    }
  })();
<\/script>
</body>
</html>`;
var INDEX_PAGE_TEMPLATE_FRA = `<!DOCTYPE html>
<html class="no-js" lang="fr" dir="ltr">
<head>
<meta charset="utf-8">
<title>Plan du site du r\xE9pertoire</title>
<meta content="width=device-width, initial-scale=1" name="viewport">
<meta name="dcterms.language" content="fra">
<meta name="robots" content="noindex, nofollow">
<link rel="shortcut icon" href="https://www.canada.ca/etc/designs/canada/cdts/gcweb/v5_0_4/wet-boew/assets/favicon.ico">
<link rel="stylesheet" href="https://www.canada.ca/etc/designs/canada/wet-boew/css/theme.min.css">
<link rel="stylesheet" href="https://cra-test-arc.canada.ca/core-prototype/source/css/testing-banner.css">
<style>
  .link-context-menu {
    position: fixed;
    z-index: 1000;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    min-width: 180px;
    padding: 4px 0;
    font-size: 14px;
  }
  .link-context-menu button {
    display: block;
    width: 100%;
    text-align: left;
    padding: 6px 12px;
    border: none;
    background: none;
    cursor: pointer;
    font: inherit;
  }
  .link-context-menu button:hover,
  .link-context-menu button:focus {
    background: #f0f0f0;
    outline: none;
  }
</style>
</head>
<body vocab="http://schema.org/" typeof="WebPage">
<nav><ul id="wb-tphp">
    <li class="wb-slc"><a class="wb-sl" href="#wb-cont">Passer au contenu principal</a></li>
</ul></nav>
<header>
    <div id="wb-bnr" class="container"><div class="row">
        <div class="brand col-xs-9 col-sm-5 col-md-4" property="publisher" typeof="GovernmentOrganization">
            <a href="https://www.canada.ca/fr.html" property="url">
                <img src="https://www.canada.ca/etc/designs/canada/wet-boew/assets/sig-blk-fr.svg" alt="Gouvernement du Canada" property="logo">
            </a>
        </div>
    </div></div>
</header>
<main class="container" property="mainContentOfPage" resource="#wb-main" typeof="WebPageElement">
    <h1 property="name" id="wb-cont">Plan du site du r\xE9pertoire ({{REPO}})</h1>
    
    {{CONTENT}}

    <div id="linkContextMenu" class="link-context-menu" hidden></div>

    <section class="pagedetails">
        <h2 class="wb-inv">D\xE9tails de la page</h2>
        <dl id="wb-dtmd"><dt>Date de modification&#160;:&#160;</dt><dd><time property="dateModified">{{MODIFIED}}</time></dd></dl>
    </section>
</main>
<footer id="wb-info">
    <div class="gc-sub-footer"><div class="container d-flex align-items-center">
        <nav><ul>
            <li><a href="https://www.canada.ca/fr/transparence/avis.html">Avis</a></li>
            <li><a href="https://www.canada.ca/fr/agence-revenu/organisation/avis-confidentialite.html">Confidentialit\xE9</a></li>
        </ul></nav>
        <div class="wtrmrk align-self-end">
            <img src="https://www.canada.ca/etc/designs/canada/wet-boew/assets/wmms-blk.svg" alt="Symbole du gouvernement du Canada">
        </div>
    </div></div>
</footer>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js" integrity="sha384-rY/jv8mMhqDabXSo+UCggqKtdmBfd3qC2/KvyTDNQ6PcUJXaxK1tMepoQda4g5vB" crossorigin="anonymous"><\/script>
<script src="https://www.canada.ca/etc/designs/canada/wet-boew/js/wet-boew.min.js"><\/script>
<script src="https://www.canada.ca/etc/designs/canada/wet-boew/js/theme.min.js"><\/script>
<script>
  (function () {
    const menu = document.getElementById('linkContextMenu');

    document.addEventListener('contextmenu', function (e) {
      const link = e.target.closest('a[data-versions]');
      if (!link) return;

      e.preventDefault();

      let versions;
      try {
        versions = JSON.parse(link.dataset.versions);
      } catch (err) {
        return;
      }

      menu.innerHTML = '';
      versions.forEach(function (v) {
        const btn = document.createElement('button');
        btn.textContent = v.label;
        btn.addEventListener('click', function () {
          window.open(v.href, '_blank', 'noopener');
          closeMenu();
        });
        menu.appendChild(btn);
      });

      menu.style.left = e.clientX + 'px';
      menu.style.top = e.clientY + 'px';
      menu.hidden = false;

      const rect = menu.getBoundingClientRect();
      if (rect.right > window.innerWidth) {
        menu.style.left = (window.innerWidth - rect.width - 8) + 'px';
      }
      if (rect.bottom > window.innerHeight) {
        menu.style.top = (window.innerHeight - rect.height - 8) + 'px';
      }
    });

    document.addEventListener('click', closeMenu);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
    window.addEventListener('scroll', closeMenu, { passive: true });

    function closeMenu() {
      menu.hidden = true;
    }
  })();
<\/script>
</body>
</html>`;
var LINK_DETOUR_JS = `
"use strict";

(function () {
  var exitPage = document.getElementById("exitpage");
  var relExternalLnk = document.getElementById("relextlnk");
  var redirectMap = [];

  if (!exitPage) return;

  function findRedirect(originUrl) {
    return redirectMap.find(function (entry) {
      return entry.origin && entry.origin.toLowerCase() === originUrl.toLowerCase();
    });
  }

  // protocol + hostname + pathname only (no query/hash), for matching against the JSON file
  function originOf(rawUrl) {
    var a = document.createElement("a");
    a.href = rawUrl;
    return a.protocol + "//" + a.hostname + a.pathname;
  }

  function updateLink(el, attr) {
    var raw = el.getAttribute(attr);
    if (!raw || el.dataset.exit === "false" || el.classList.contains("wb-exitscript")) return;

    var isAbsolute = /^https?:\\/\\//i.test(raw);
    var relativeEnabled = relExternalLnk && relExternalLnk.value.toLowerCase() === "true";
    var isRootRelative = raw.charAt(0) === "/";

    if (!isAbsolute && !(isRootRelative && relativeEnabled)) return; // leave internal prototype links alone

    var lookupUrl = isRootRelative && relExternalLnk.dataset.origin
      ? originOf(relExternalLnk.dataset.origin + raw)
      : originOf(raw);

    var match = findRedirect(lookupUrl);
    var destination;

    if (match && match.destination) {
      var queryHash = raw.substring(match.origin.length);
      destination = match.destination + queryHash;
    } else {
      destination = exitPage.value + "?uri=" + encodeURIComponent(
        isRootRelative ? relExternalLnk.dataset.origin + raw : raw
      );
    }

    el.setAttribute(attr, destination);
  }

  function processLinks(root) {
    root.querySelectorAll("a[href], area[href]").forEach(function (el) { updateLink(el, "href"); });
    root.querySelectorAll("form[action]").forEach(function (el) { updateLink(el, "action"); });
    root.querySelectorAll("[formaction]").forEach(function (el) { updateLink(el, "formaction"); });
  }

  function init() {
    processLinks(document);

    // Re-process links inserted by AJAX content replacement (site-banner, includes, etc.)
    $(document).on("wb-contentupdated", "[data-ajax-after], [data-ajax-append], [data-ajax-before], [data-ajax-prepend], [data-ajax-replace]", function () {
      processLinks(this);
    });
  }

  if (exitPage.dataset.modLinkFile) {
    $.getJSON(exitPage.dataset.modLinkFile).done(function (data) {
      redirectMap = data || [];
    }).always(init);
  } else {
    init();
  }
})();
`;

// src/app/views/tasks/export-pages/export-pages.component.ts
var _c04 = ["settingsPopover"];
var _c13 = (a0, a1) => ({ updated: a0, count: a1 });
var _c23 = (a0, a1) => ({ New: a0, Updated: a1 });
function ExportPagesComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-message", 3)(1, "div", 22);
    \u0275\u0275element(2, "i", 23);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "exportPages.github.warningMessage"));
  }
}
function ExportPagesComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label", 24);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 25);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "project.github.label.owner"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.projectData().github.owner);
  }
}
function ExportPagesComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label", 26);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 27);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "project.github.label.branch"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.projectData().github.branch);
  }
}
function ExportPagesComponent_Conditional_32_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "aida-project-settings", 31);
  }
  if (rf & 2) {
    \u0275\u0275property("showVersion", true);
  }
}
function ExportPagesComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 28);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function ExportPagesComponent_Conditional_32_Template_p_button_click_0_listener($event) {
      let tmp_3_0;
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView((tmp_3_0 = ctx_r0.settingsOverlay()) == null ? null : tmp_3_0.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-popover", 29, 0);
    \u0275\u0275element(4, "aida-setup-repo", 30);
    \u0275\u0275conditionalCreate(5, ExportPagesComponent_Conditional_32_Conditional_5_Template, 1, 1, "aida-project-settings", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 2, "exportPages.settings.changeButton"));
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.projectData().github.hasBaselineRepo ? 5 : -1);
  }
}
function ExportPagesComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 32);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("onClick", function ExportPagesComponent_Conditional_33_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openRepo());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 1, "exportPages.github.openRepo"));
  }
}
function ExportPagesComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "aida-sign-in-banner");
  }
}
function ExportPagesComponent_Conditional_35_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "aida-project-settings", 31);
  }
  if (rf & 2) {
    \u0275\u0275property("showVersion", true);
  }
}
function ExportPagesComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275element(1, "aida-setup-repo");
    \u0275\u0275conditionalCreate(2, ExportPagesComponent_Conditional_35_Conditional_2_Template, 1, 1, "aida-project-settings", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.styleCardService.cardStyles());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.projectData().github.hasBaselineRepo ? 2 : -1);
  }
}
function ExportPagesComponent_Conditional_36_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
    \u0275\u0275pipe(2, "date");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, ctx_r0.projectData().lastExported, "mediumDate"), ", ", \u0275\u0275pipeBind2(2, 5, ctx_r0.projectData().lastExported, "shortTime"), " ");
  }
}
function ExportPagesComponent_Conditional_36_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
    \u0275\u0275pipe(2, "date");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, ctx_r0.projectData().lastDownloaded, "mediumDate"), ", ", \u0275\u0275pipeBind2(2, 5, ctx_r0.projectData().lastDownloaded, "shortTime"), " ");
  }
}
function ExportPagesComponent_Conditional_36_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "common.never"), " ");
  }
}
function ExportPagesComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "h2", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 34)(5, "div", 35);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 36);
    \u0275\u0275conditionalCreate(10, ExportPagesComponent_Conditional_36_Conditional_10_Template, 3, 8)(11, ExportPagesComponent_Conditional_36_Conditional_11_Template, 3, 8)(12, ExportPagesComponent_Conditional_36_Conditional_12_Template, 2, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "p-divider");
    \u0275\u0275elementStart(14, "div", 35);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 37)(18, "div")(19, "div", 38);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 39);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div")(26, "div", 38);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 39);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(31, "p-divider");
    \u0275\u0275elementStart(32, "div", 35);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 37)(36, "div")(37, "div", 40);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 39);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div")(43, "div", 40);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 39);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div")(49, "div", 40);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 39);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.styleCardService.cardStyles());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 17, "exportPages.data"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.repoType() === "github" ? \u0275\u0275pipeBind1(7, 19, "exportPages.data.lastExported") : \u0275\u0275pipeBind1(8, 21, "exportPages.data.lastDownloaded"));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.repoType() === "github" && ctx_r0.projectData().lastExported && (((tmp_4_0 = ctx_r0.projectData().lastExported) == null ? null : tmp_4_0.getTime()) ?? 0) > 0 ? 10 : ctx_r0.repoType() === "local" && ctx_r0.projectData().lastDownloaded && (((tmp_4_0 = ctx_r0.projectData().lastDownloaded) == null ? null : tmp_4_0.getTime()) ?? 0) > 0 ? 11 : 12);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 23, "exportPages.data.totalFiles"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.projectFileCount(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.projectCache.selectedVersion() === "prototype" ? \u0275\u0275pipeBind1(23, 25, "exportPages.data.totalFiles.inScope") : \u0275\u0275pipeBind1(24, 27, "exportPages.data.totalFiles.baseline"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.templateFileCount(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 29, "exportPages.data.totalFiles.template"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 31, "exportPages.data.includedPages"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.newCount(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(41, 33, "exportPages.data.includedPages.new"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.updatedCount(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(47, 35, "exportPages.data.includedPages.existing"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.skippedCount(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(53, 37, "exportPages.data.includedPages.skipped"), " ");
  }
}
function ExportPagesComponent_Conditional_45_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "th", 49)(2, "p-checkbox", 50);
    \u0275\u0275listener("onChange", function ExportPagesComponent_Conditional_45_ng_template_1_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setAll(ctx_r0.allExported("project") ? "skip" : "export", "project"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "th", 51);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 51)(8, "span", 52);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementStart(11, "p-button", 53);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275listener("onClick", function ExportPagesComponent_Conditional_45_ng_template_1_Template_p_button_onClick_11_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.compareFiles());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p-button", 54);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275listener("onClick", function ExportPagesComponent_Conditional_45_ng_template_1_Template_p_button_onClick_13_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setAll("skip", "project"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p-button", 55);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275listener("onClick", function ExportPagesComponent_Conditional_45_ng_template_1_Template_p_button_onClick_15_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setAll("export", "project"));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("binary", true)("ngModel", ctx_r0.allExported("project"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.projectCache.selectedVersion() === "prototype" ? \u0275\u0275pipeBind1(5, 7, "exportPages.data.totalFiles.inScope") : \u0275\u0275pipeBind1(6, 9, "exportPages.data.totalFiles.baseline"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 11, "common.status"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(12, 13, "exportPages.toggle.default"));
    \u0275\u0275advance(2);
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(14, 15, "exportPages.toggle.skipAll"));
    \u0275\u0275advance(2);
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(16, 17, "exportPages.toggle.updateAll"));
  }
}
function ExportPagesComponent_Conditional_45_ng_template_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "br");
  }
  if (rf & 2) {
    const file_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(file_r6.label);
  }
}
function ExportPagesComponent_Conditional_45_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "p-checkbox", 56);
    \u0275\u0275listener("onChange", function ExportPagesComponent_Conditional_45_ng_template_2_Template_p_checkbox_onChange_2_listener() {
      const file_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleUpdate(file_r6));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275conditionalCreate(4, ExportPagesComponent_Conditional_45_ng_template_2_Conditional_4_Template, 3, 1);
    \u0275\u0275elementStart(5, "span", 57);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "p-chip", 58);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275listener("click", function ExportPagesComponent_Conditional_45_ng_template_2_Template_p_chip_click_8_listener() {
      const file_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(file_r6.status === ctx_r0.ExportStatus.AddToProject || file_r6.status === ctx_r0.ExportStatus.OppLanguage ? ctx_r0.addToProject(file_r6) : ctx_r0.toggleUpdate(file_r6));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const file_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("binary", true)("disabled", file_r6.status === ctx_r0.ExportStatus.AddToProject)("ngModel", ctx_r0.includedInExport(file_r6.status));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(file_r6.label ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(file_r6.path);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("cursor-pointer font-bold center-chip w-10rem p-1 " + ctx_r0.getBgAndText(file_r6.status));
    \u0275\u0275property("icon", ctx_r0.getIcon(file_r6.status))("label", \u0275\u0275pipeBind1(9, 9, file_r6.status));
  }
}
function ExportPagesComponent_Conditional_45_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "th", 49)(2, "p-checkbox", 50);
    \u0275\u0275listener("onChange", function ExportPagesComponent_Conditional_45_ng_template_6_Template_p_checkbox_onChange_2_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setAll(ctx_r0.allExported("template") ? "skip" : "export", "template"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th")(7, "span", 52);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementStart(10, "p-button", 54);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275listener("onClick", function ExportPagesComponent_Conditional_45_ng_template_6_Template_p_button_onClick_10_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setAll("skip", "template"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p-button", 55);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275listener("onClick", function ExportPagesComponent_Conditional_45_ng_template_6_Template_p_button_onClick_12_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setAll("export", "template"));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("binary", true)("ngModel", ctx_r0.allExported("template"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 6, "common.path"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 8, "common.status"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(11, 10, "exportPages.toggle.skipAll"));
    \u0275\u0275advance(2);
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(13, 12, "exportPages.toggle.updateAll"));
  }
}
function ExportPagesComponent_Conditional_45_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "p-checkbox", 56);
    \u0275\u0275listener("onChange", function ExportPagesComponent_Conditional_45_ng_template_7_Template_p_checkbox_onChange_2_listener() {
      const file_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleUpdate(file_r9));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "p-chip", 58);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275listener("click", function ExportPagesComponent_Conditional_45_ng_template_7_Template_p_chip_click_6_listener() {
      const file_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(file_r9.status !== ctx_r0.ExportStatus.AddToProject && ctx_r0.toggleUpdate(file_r9));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const file_r9 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("binary", true)("disabled", file_r9.status === ctx_r0.ExportStatus.AddToProject)("ngModel", ctx_r0.includedInExport(file_r9.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(file_r9.path);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("cursor-pointer font-bold center-chip w-9rem p-1 " + ctx_r0.getBgAndText(file_r9.status));
    \u0275\u0275property("icon", ctx_r0.getIcon(file_r9.status))("label", \u0275\u0275pipeBind1(7, 8, file_r9.status));
  }
}
function ExportPagesComponent_Conditional_45_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 60);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("onClick", function ExportPagesComponent_Conditional_45_Conditional_8_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.exportProjectToGitHub());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r0.projectFileCount() === 0 || !ctx_r0.signInService.token() || !ctx_r0.gitHubData().repo)("label", \u0275\u0275pipeBind1(1, 3, "exportPages.export.button.github"))("loading", ctx_r0.exportProgress());
  }
}
function ExportPagesComponent_Conditional_45_Conditional_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-message", 61)(1, "div", 22);
    \u0275\u0275element(2, "i", 23);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "exportPages.local.warningMessage"));
  }
}
function ExportPagesComponent_Conditional_45_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, ExportPagesComponent_Conditional_45_Conditional_9_Conditional_0_Template, 6, 3, "p-message", 61);
    \u0275\u0275elementStart(1, "p-button", 62);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("onClick", function ExportPagesComponent_Conditional_45_Conditional_9_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.exportToFile());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.projectCache.hasLocal() ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.projectFileCount() === 0 || !ctx_r0.gitHubData().repo)("label", \u0275\u0275pipeBind1(2, 4, "exportPages.export.button.zip"))("loading", ctx_r0.exportProgress());
  }
}
function ExportPagesComponent_Conditional_45_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "exportPages.export.count", \u0275\u0275pureFunction2(4, _c23, ctx_r0.newCount(), ctx_r0.updatedCount())), " ");
  }
}
function ExportPagesComponent_Conditional_45_Conditional_11_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 63);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const progress_r12 = \u0275\u0275nextContext();
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(1, 1, progress_r12.step), \u0275\u0275sanitizeHtml);
  }
}
function ExportPagesComponent_Conditional_45_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-progressbar", 47);
    \u0275\u0275template(1, ExportPagesComponent_Conditional_45_Conditional_11_ng_template_1_Template, 2, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("value", ctx.progress);
  }
}
function ExportPagesComponent_Conditional_45_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-message", 48);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("severity", ctx_r0.exportMessage().severity)("text", ctx_r0.exportMessage().text);
  }
}
function ExportPagesComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-table", 41);
    \u0275\u0275template(1, ExportPagesComponent_Conditional_45_ng_template_1_Template, 17, 19, "ng-template", 42)(2, ExportPagesComponent_Conditional_45_ng_template_2_Template, 10, 11, "ng-template", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-panel", 44);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "p-table", 41);
    \u0275\u0275template(6, ExportPagesComponent_Conditional_45_ng_template_6_Template, 14, 14, "ng-template", 42)(7, ExportPagesComponent_Conditional_45_ng_template_7_Template, 8, 10, "ng-template", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(8, ExportPagesComponent_Conditional_45_Conditional_8_Template, 2, 5, "p-button", 45)(9, ExportPagesComponent_Conditional_45_Conditional_9_Template, 3, 6);
    \u0275\u0275conditionalCreate(10, ExportPagesComponent_Conditional_45_Conditional_10_Template, 3, 7, "span", 46);
    \u0275\u0275conditionalCreate(11, ExportPagesComponent_Conditional_45_Conditional_11_Template, 3, 1, "p-progressbar", 47);
    \u0275\u0275conditionalCreate(12, ExportPagesComponent_Conditional_45_Conditional_12_Template, 1, 2, "p-message", 48);
  }
  if (rf & 2) {
    let tmp_8_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r0.projectTable());
    \u0275\u0275advance(3);
    \u0275\u0275property("collapsed", true)("header", \u0275\u0275pipeBind2(4, 9, "exportPages.export.templateFiles", \u0275\u0275pureFunction2(12, _c13, ctx_r0.templateUpdatedCount(), ctx_r0.templateFileCount())))("toggleable", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r0.templateTable());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.repoType() === "github" ? 8 : 9);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.filesTable().length ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_8_0 = ctx_r0.exportProgress()) ? 11 : -1, tmp_8_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.exportMessage() ? 12 : -1);
  }
}
function ExportPagesComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "aida-add-pages-link");
    \u0275\u0275elementEnd();
  }
}
function ExportPagesComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "aida-bookmarklet", 64);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.styleCardService.cardStyles());
    \u0275\u0275advance();
    \u0275\u0275property("mode", ctx_r0.repoType());
  }
}
var ExportStatus;
(function(ExportStatus2) {
  ExportStatus2["ExportNew"] = "exportPages.export.status.addToGitHub";
  ExportStatus2["ExportOverwrite"] = "exportPages.export.status.overwrite";
  ExportStatus2["SkipNew"] = "exportPages.export.status.skipNew";
  ExportStatus2["SkipOverwrite"] = "exportPages.export.status.skipOverwrite";
  ExportStatus2["AddToProject"] = "exportPages.export.status.addToProject";
  ExportStatus2["OppLanguage"] = "exportPages.export.status.addOppLangToProject";
})(ExportStatus || (ExportStatus = {}));
var ExportPagesComponent = class _ExportPagesComponent {
  styleCardService = inject(StyleCardService);
  projectState = inject(ProjectStateService);
  exportGitHubService = inject(ExportGitHubService);
  signInService = inject(SignInService);
  fetchService = inject(FetchService);
  translate = inject(TranslateService);
  router = inject(Router);
  usageService = inject(UsageService);
  htmlNormalizationService = inject(HtmlNormalizationService);
  projectCache = inject(ProjectCacheService);
  ExportStatus = ExportStatus;
  //Signals
  projectData = this.projectState.getProject;
  filesTable = signal([], ...ngDevMode ? [{ debugName: "filesTable" }] : (
    /* istanbul ignore next */
    []
  ));
  exportMessage = signal(null, ...ngDevMode ? [{ debugName: "exportMessage" }] : (
    /* istanbul ignore next */
    []
  ));
  repoType = signal(this.projectData().repoType, ...ngDevMode ? [{ debugName: "repoType" }] : (
    /* istanbul ignore next */
    []
  ));
  markForTranslation() {
    marker("exportPages.settings.description.prototype");
    marker("exportPages.settings.description.baseline");
    marker("exportPages.export.status.addOppLangToProject");
    marker("exportPages.export.status.addToGitHub");
    marker("exportPages.export.status.addToProject");
    marker("exportPages.export.status.skipNew");
    marker("exportPages.export.status.skipOverwrite");
    marker("exportPages.export.status.overwrite");
    marker("exportPages.export.progress.gatherPages");
    marker("exportPages.export.progress.checkGitHub");
    marker("exportPages.export.progress.setupRepo");
    marker("exportPages.export.progress.exportPages");
    marker("exportPages.export.progress.setupRedirects");
  }
  owner = computed(() => this.projectData().github.owner, ...ngDevMode ? [{ debugName: "owner" }] : (
    /* istanbul ignore next */
    []
  ));
  repo = computed(() => this.projectData().github.repo, ...ngDevMode ? [{ debugName: "repo" }] : (
    /* istanbul ignore next */
    []
  ));
  projectRepoType = computed(() => this.projectData().repoType, ...ngDevMode ? [{ debugName: "projectRepoType" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    effect(() => __async(this, null, function* () {
      void this.signInService.token();
      void this.projectCache.selectedLang();
      void this.projectCache.selectedVersion();
      void this.owner();
      void this.repo();
      const repoType = this.projectRepoType();
      if (repoType) {
        this.repoType.set(repoType);
      }
      untracked(() => this.compareFiles());
    }));
  }
  // Computed signals
  gitHubData = computed(() => this.projectData().github, ...ngDevMode ? [{ debugName: "gitHubData" }] : (
    /* istanbul ignore next */
    []
  ));
  projectTable = computed(() => this.filesTable().filter((f) => f.path.startsWith("en") || f.path.startsWith("fr")), ...ngDevMode ? [{ debugName: "projectTable" }] : (
    /* istanbul ignore next */
    []
  ));
  templateTable = computed(() => this.filesTable().filter((f) => !f.path.startsWith("en") && !f.path.startsWith("fr")), ...ngDevMode ? [{ debugName: "templateTable" }] : (
    /* istanbul ignore next */
    []
  ));
  projectFileCount = computed(() => this.projectTable().filter((f) => f.status !== ExportStatus.AddToProject && f.status !== ExportStatus.OppLanguage).length, ...ngDevMode ? [{ debugName: "projectFileCount" }] : (
    /* istanbul ignore next */
    []
  ));
  templateFileCount = computed(() => this.templateTable().length, ...ngDevMode ? [{ debugName: "templateFileCount" }] : (
    /* istanbul ignore next */
    []
  ));
  newCount = computed(() => this.projectTable().filter((f) => f.status === ExportStatus.ExportNew).length, ...ngDevMode ? [{ debugName: "newCount" }] : (
    /* istanbul ignore next */
    []
  ));
  updatedCount = computed(() => this.projectTable().filter((f) => f.status === ExportStatus.ExportOverwrite).length, ...ngDevMode ? [{ debugName: "updatedCount" }] : (
    /* istanbul ignore next */
    []
  ));
  skippedCount = computed(() => this.projectTable().filter((f) => f.status === ExportStatus.SkipNew || f.status === ExportStatus.SkipOverwrite).length, ...ngDevMode ? [{ debugName: "skippedCount" }] : (
    /* istanbul ignore next */
    []
  ));
  templateUpdatedCount = computed(() => this.templateTable().filter((f) => f.status === ExportStatus.ExportNew || f.status === ExportStatus.ExportOverwrite).length, ...ngDevMode ? [{ debugName: "templateUpdatedCount" }] : (
    /* istanbul ignore next */
    []
  ));
  // Template visiblity controls
  // If a repo is configured (and overlay is closed), show the repo settings as a secondary task instead of a card
  settingsOverlay = viewChild("settingsPopover", ...ngDevMode ? [{ debugName: "settingsOverlay" }] : (
    /* istanbul ignore next */
    []
  ));
  hasRepoConfig() {
    const hasGithubData = !!(this.projectData().github.owner && this.projectData().github.repo && this.projectData().github.branch);
    return hasGithubData || !!this.settingsOverlay()?.overlayVisible;
  }
  //Export context based on user selections above
  get exportContext() {
    const source = this.projectCache.selectedSource();
    const repo = this.projectCache.selectedVersion() === "prototype" ? this.gitHubData().repo : `${this.gitHubData().repo}-baseline`;
    const scope = this.projectCache.selectedVersion() === "prototype" ? "inScope" : "all";
    return { source, repo, scope };
  }
  // Open targeted GitHub repo
  openRepo() {
    let modifier = "";
    if (this.projectCache.selectedVersion() === "baseline") {
      modifier = "-baseline";
    }
    const url = `https://github.com/${this.projectData().github.owner}/${this.projectData().github.repo}${modifier}`;
    window.open(url, "_blank");
  }
  //CDTS template files
  cdtsFiles = ["source/data/exclude-redirect-links.json", "source/scripts/external-link-detour.js", "source/exit-intent-e.html", "source/exit-intent-f.html", "index.html"];
  //Jekyll template files
  jekyllUpdateFiles = ["404.html", "_includes/*", "index.html", "source/data/exclude-redirect-links.json", "source/exit-intent-e.html", "source/exit-intent-f.html"];
  jekyllSkipFiles = ["_config.yml", "README.md", "robots.txt"];
  // Populate files table (and compare project files with GitHub or UT)
  compareFilesRequestId = 0;
  compareFiles() {
    return __async(this, null, function* () {
      const requestId = ++this.compareFilesRequestId;
      if (!this.repoType()) {
        this.repoType.set(this.projectData().repoType ?? "github");
      }
      const lang = this.projectCache.selectedLang();
      const { source, repo, scope } = this.exportContext;
      const enPages = this.projectState.getAllPages("en", source, scope);
      const frPages = this.projectState.getAllPages("fr", source, scope);
      const projectPages = lang === "en" ? enPages : lang === "fr" ? frPages : [...enPages, ...frPages];
      const projectPaths = projectPages.map((p) => p.path);
      const pathLabels = new Map(projectPages.map((p) => [p.path, p.label]));
      if (this.repoType() === "local") {
        if (requestId !== this.compareFilesRequestId)
          return;
        const localPaths = [...projectPaths, ...this.cdtsFiles];
        const table2 = localPaths.map((path) => {
          const pathLang = this.fetchService.getLang(path);
          const node = pathLang ? this.projectState.findNodeByPath(this.projectState.getProjectTree(), path, pathLang) : null;
          const version = scope === "inScope" ? "prototype" : "baseline";
          const previouslyExported = pathLang ? node?.data[version][pathLang].localSha : null;
          const isRot = node?.data?.status?.isROT === true;
          const status = previouslyExported ? ExportStatus.SkipOverwrite : isRot ? ExportStatus.SkipNew : ExportStatus.ExportNew;
          return {
            path,
            label: pathLabels.get(path),
            status
          };
        });
        this.filesTable.set(table2);
        return;
      }
      const owner = this.gitHubData().owner;
      const branch = this.gitHubData().branch;
      const token = this.signInService.token();
      const githubPages = owner && this.gitHubData().repo ? yield this.exportGitHubService.getRepoTree(owner, repo, branch, token) : /* @__PURE__ */ new Map();
      const langs = lang === "both" ? ["en", "fr"] : [lang];
      const langPatterns = langs.flatMap((lang2) => [new RegExp(`^${lang2}\\/.*`), new RegExp(`^${lang2}\\.html`)]);
      const githubFilePatterns = [
        /^_config\.yml$/,
        /^index\.html$/,
        /^README\.md$/,
        /^robots\.txt$/,
        /^source\/data\/exclude-redirect-links\.json$/,
        /^source\/exit-intent-e\.html$/,
        /^source\/exit-intent-f\.html$/,
        /^404\.html$/,
        ...langPatterns
      ];
      const filteredGithubPages = new Map([...githubPages].filter(([path]) => githubFilePatterns.some((pattern) => pattern.test(path))));
      const hasIncludes = [...githubPages.keys()].some((p) => p.startsWith("_includes/"));
      [...this.jekyllUpdateFiles, ...this.jekyllSkipFiles].forEach((file) => {
        projectPaths.push(file);
      });
      const allPaths = /* @__PURE__ */ new Set([...projectPaths, ...filteredGithubPages.keys()]);
      const table = [];
      for (const path of allPaths) {
        const pathLang = this.fetchService.getLang(path);
        const node = pathLang ? this.projectState.findNodeByPath(this.projectState.getProjectTree(), path, pathLang) : null;
        const inExport = projectPaths.some((url) => url === path);
        const inGitHub = filteredGithubPages.has(path);
        const isAutoUpdateFile = this.jekyllUpdateFiles.some((url) => url === path);
        const isAlwaysSkipFile = this.jekyllSkipFiles.some((url) => url === path);
        const isRot = node?.data?.status?.isROT === true;
        const githubOnlyOppLang = inGitHub && !inExport && pathLang !== null && pathLang !== this.projectState.detectPrimaryLanguage();
        let status;
        if (path === "_includes/*") {
          if (hasIncludes)
            status = ExportStatus.ExportOverwrite;
          else
            status = ExportStatus.ExportNew;
        } else if (githubOnlyOppLang) {
          status = ExportStatus.OppLanguage;
        } else if (isRot) {
          status = inGitHub ? ExportStatus.SkipOverwrite : ExportStatus.SkipNew;
        } else if (inExport && inGitHub) {
          if (isAutoUpdateFile)
            status = ExportStatus.ExportOverwrite;
          else if (isAlwaysSkipFile)
            status = ExportStatus.SkipOverwrite;
          else {
            const storedSha = pathLang ? node?.data?.[this.projectCache.selectedVersion()][pathLang].githubSha : null;
            const githubSha = filteredGithubPages.get(path);
            status = storedSha && storedSha === githubSha ? ExportStatus.ExportOverwrite : ExportStatus.SkipOverwrite;
          }
        } else if (inExport)
          status = ExportStatus.ExportNew;
        else
          status = ExportStatus.AddToProject;
        table.push({ path, label: pathLabels.get(path), status });
      }
      if (requestId !== this.compareFilesRequestId)
        return;
      this.filesTable.set(table);
    });
  }
  // File table button configuration & getters
  colorConfig = {
    [ExportStatus.SkipNew]: {
      icon: "pi pi-angle-double-right",
      background: "bg-green-100 hover:bg-green-200",
      text: "text-green-900"
    },
    [ExportStatus.SkipOverwrite]: {
      icon: "pi pi-angle-double-right",
      background: "bg-blue-100 hover:bg-blue-200",
      text: "text-blue-900"
    },
    [ExportStatus.ExportOverwrite]: {
      icon: "pi pi-refresh",
      background: "bg-blue-500 hover:bg-blue-600",
      text: "text-blue-50"
    },
    [ExportStatus.ExportNew]: {
      icon: "pi pi-plus",
      background: "bg-green-500 hover:bg-green-600",
      text: "text-green-50"
    },
    [ExportStatus.AddToProject]: {
      icon: "pi pi-github",
      background: "bg-primary-500 hover:bg-primary-600",
      text: "text-primary-50"
    },
    [ExportStatus.OppLanguage]: {
      icon: "pi pi-github",
      background: "bg-primary-100 hover:bg-primary-200",
      text: "text-primary-900"
    }
  };
  getIcon(status) {
    const config = this.colorConfig[status];
    return `${config.icon} ${config.text}`;
  }
  getBgAndText(status) {
    const config = this.colorConfig[status];
    return `${config.background} ${config.text}`;
  }
  toggleUpdate(file) {
    switch (file.status) {
      case ExportStatus.SkipNew:
        file.status = ExportStatus.ExportNew;
        break;
      case ExportStatus.ExportNew:
        file.status = ExportStatus.SkipNew;
        break;
      case ExportStatus.SkipOverwrite:
        file.status = ExportStatus.ExportOverwrite;
        break;
      case ExportStatus.ExportOverwrite:
        file.status = ExportStatus.SkipOverwrite;
        break;
    }
    this.filesTable.set([...this.filesTable()]);
  }
  setAll(mode, table) {
    const targetFiles = table === "project" ? this.projectTable() : this.templateTable();
    const targetPaths = new Set(targetFiles.map((f) => f.path));
    const updated = this.filesTable().map((file) => {
      if (file.status === ExportStatus.AddToProject || !targetPaths.has(file.path)) {
        return file;
      }
      if (file.status === ExportStatus.SkipNew || file.status === ExportStatus.ExportNew) {
        return __spreadProps(__spreadValues({}, file), { status: mode === "export" ? ExportStatus.ExportNew : ExportStatus.SkipNew });
      }
      if (file.status === ExportStatus.SkipOverwrite || file.status === ExportStatus.ExportOverwrite) {
        return __spreadProps(__spreadValues({}, file), { status: mode === "export" ? ExportStatus.ExportOverwrite : ExportStatus.SkipOverwrite });
      }
      return file;
    });
    this.filesTable.set(updated);
  }
  //Add to project
  addToProject(file) {
    return __async(this, null, function* () {
      let url = `https://www.canada.ca/${file.path}`;
      if (file.status === ExportStatus.OppLanguage) {
        try {
          const doc = yield this.fetchService.fetchContent(url);
          const htmlLang = doc.documentElement.getAttribute("lang");
          const metaLang = doc.querySelector('meta[name="dcterms.language"]')?.getAttribute("content");
          const normalizedMetaLang = metaLang === "eng" ? "en" : metaLang === "fra" ? "fr" : null;
          const urlLang = url.includes("/en/") ? "en" : url.includes("/fr/") ? "fr" : null;
          const currentLang = htmlLang || normalizedMetaLang || urlLang || "en";
          const oppLang = currentLang === "en" ? "fr" : "en";
          const oppUrl = doc.querySelector(`link[rel="alternate"][hreflang="${oppLang}"]`)?.getAttribute("href") || "";
          if (!oppUrl) {
            console.error("No opposite language link found for:", url);
            return;
          }
          url = oppUrl;
        } catch (error) {
          console.error("Error fetching page:", error);
          return;
        }
      }
      this.router.navigate([AidaLinks.Import], {
        queryParams: { url }
      });
    });
  }
  // Boolean status for table row checkboxes
  includedInExport(status) {
    return status === ExportStatus.ExportNew || status === ExportStatus.ExportOverwrite;
  }
  // Boolean status for table header checkbox
  allExported(table) {
    const files = table === "project" ? this.projectTable() : this.templateTable();
    const toggleable = files.filter((f) => f.status !== ExportStatus.AddToProject);
    return toggleable.length > 0 && toggleable.every((f) => this.includedInExport(f.status));
  }
  // Export progress
  exportProgress = signal(null, ...ngDevMode ? [{ debugName: "exportProgress" }] : (
    /* istanbul ignore next */
    []
  ));
  /*_________________________________________*/
  /****** HTML ZIP SPECIFIC FUNCTIONS *******/
  exportToFile() {
    return __async(this, null, function* () {
      const JSZip = (yield import("./chunk-F5ZKVUXL.js")).default;
      const zip = new JSZip();
      const { source, repo, scope } = this.exportContext;
      const date = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
      const aidaLang = this.translate.currentLang()?.startsWith("fr") ? "fr" : "en";
      const projectPaths = this.projectTable().filter((item) => item.status === ExportStatus.ExportNew || item.status === ExportStatus.ExportOverwrite).map((item) => item.path);
      const templatePaths = this.templateTable().filter((item) => item.status === ExportStatus.ExportNew || item.status === ExportStatus.ExportOverwrite).map((item) => item.path);
      for (const path of projectPaths) {
        const url = this.fetchService.generateUrl(path, source, this.gitHubData().owner, repo);
        const lang = this.fetchService.getLang(url);
        if (!lang)
          continue;
        const node = this.projectState.findNodeByPath(this.projectState.getProjectTree(), path, lang);
        const h1 = node?.data.prototype[lang].h1;
        const doubleH1 = node?.data.prototype[lang].doubleH1;
        const title = doubleH1 ? `${h1}: ${doubleH1}` : h1;
        const description = node?.data.prototype[lang].description;
        const keywords = node?.data.prototype[lang].keywords;
        const robots = node?.data.prototype[lang].noindex ? "noindex, nofollow" : "index, follow";
        const enUrl = this.fetchService.generateUrl(node?.data.path.en, "live");
        const frUrl = this.fetchService.generateUrl(node?.data.path.fr, "live");
        const breadcrumbs = this.projectState.getBreadcrumbChain(path, lang).map((b) => `{ title: "${b.title}", href: "${b.link}" }`).join(", ");
        const header = doubleH1 ? `<p class="lead mrgn-tp-md mrgn-bttm-0 text-muted">${doubleH1}</p>
<h1 property="name" id="wb-cont" dir="ltr" class="mrgn-tp-0">${h1}</h1>` : `<h1 property="name" id="wb-cont" dir="ltr">${h1}</h1>`;
        const depth = "../".repeat(path.split("/").length - 1);
        const isNewPage = node?.data.status.isNew ?? false;
        let content = "";
        let styles = "";
        let scripts = "";
        let subject = "";
        let altLangPage = "";
        try {
          const retries = isNewPage ? 1 : 2;
          const doc = !source.endsWith("UT") ? yield this.fetchService.fetchContent(url, "both", retries) : this.fetchService.stringToDoc(yield this.fetchService.fetchViaProxy(url));
          if (!doc) {
            throw new Error(`No document returned for ${url}`);
          }
          ({ content, styles, scripts } = yield this.htmlNormalizationService.cleanContentForCdts(doc, doubleH1));
          subject = doc.querySelector('meta[name="dcterms.subject"]')?.content.trim() || "";
          altLangPage = Array.from(doc.querySelectorAll('link[rel="alternate"]')).find((link) => link.getAttribute("hreflang") !== lang)?.href || "";
        } catch (error) {
          if (isNewPage) {
            console.warn(`New page "${path}" is 404. Creating blank template.`, error);
          } else {
            console.error(`Existing page "${path}" is unexpectedly 404. Creating blank template instead.`, error);
          }
        }
        try {
          const html = this.buildCdtsPage(lang === "fr" ? CDTS_TEMPLATE_FRA : CDTS_TEMPLATE_ENG, {
            TITLE: title ?? "",
            DESCRIPTION: description ?? "",
            KEYWORDS: keywords ?? "",
            SUBJECT: subject ?? "",
            ALTLINK: altLangPage ?? "",
            ROBOTS: robots,
            ENGLISH: enUrl ?? "",
            FRENCH: frUrl ?? "",
            BREADCRUMBS: breadcrumbs,
            HEADER: header ?? "",
            CONTENT: content,
            MODIFIED: date,
            STYLES: styles,
            SCRIPTS: scripts,
            REPO: repo,
            DEPTH: depth
          });
          zip.file(`${repo}/${path}`, html);
          const localSha = yield this.fetchService.generateSHA(html);
          this.projectState.setPageSha(path, localSha, scope === "inScope" ? "prototype" : "baseline", lang, "local");
        } catch (error) {
          console.error(`Failed to zip page "${path}":`, error);
        }
      }
      for (const path of templatePaths) {
        if (path === this.cdtsFiles[0]) {
          const lang = this.projectCache.selectedLang();
          let allPagePaths;
          if (lang === "both") {
            const enPages = this.projectState.getAllPages("en", "live", scope).map((page) => page.path);
            const frPages = this.projectState.getAllPages("fr", "live", scope).map((page) => page.path);
            allPagePaths = /* @__PURE__ */ new Set([...enPages, ...frPages]);
          } else {
            allPagePaths = new Set(this.projectState.getAllPages(lang, "live", scope).map((page) => page.path));
          }
          const redirects = [...allPagePaths].map((path2) => ({
            origin: `https://www.canada.ca/${path2}`,
            destination: `/test/AIDA/${repo}/${path2}`
          }));
          const redirectsJson = JSON.stringify(redirects, null, 2);
          zip.file(`${repo}/${path}`, redirectsJson);
        } else if (path === this.cdtsFiles[1]) {
          const html = this.buildCdtsPage(LINK_DETOUR_JS, {});
          zip.file(`${repo}/${path}`, html);
        } else if (path === this.cdtsFiles[2] || path === this.cdtsFiles[3]) {
          const html = this.buildCdtsPage(path === this.cdtsFiles[2] ? EXIT_PAGE_TEMPLATE_ENG : EXIT_PAGE_TEMPLATE_FRA, {
            MODIFIED: date,
            REPO: repo
          });
          zip.file(`${repo}/${path}`, html);
        } else if (path === this.cdtsFiles[4]) {
          const html = this.buildCdtsPage(aidaLang === "en" ? INDEX_PAGE_TEMPLATE_ENG : INDEX_PAGE_TEMPLATE_FRA, {
            MODIFIED: date,
            CONTENT: projectPaths ? this.buildCdtsIndex(new Set(projectPaths)) : "",
            REPO: repo
          });
          zip.file(`${repo}/${path}`, yield this.htmlNormalizationService.formatHtml(html));
        } else
          console.warn("Unhandled template file");
      }
      this.projectState.setDownloadDate();
      const pageCountEN = projectPaths.filter((p) => p.startsWith("en/") || p === "en.html").length;
      const pageCountFR = projectPaths.filter((p) => p.startsWith("fr/") || p === "fr.html").length;
      this.usageService.trackExport(this.projectData().id, this.projectData().org ?? "DEFAULT", this.projectData().storageType, this.projectData().repoType, `${repo}`, this.projectCache.selectedVersion(), pageCountEN, pageCountFR);
      const blob = yield zip.generateAsync({ type: "blob" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = `aida-html-export-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.zip`;
      a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 1e3);
    });
  }
  buildCdtsPage(template, vars) {
    return Object.entries(vars).reduce((html, [key, value]) => html.replaceAll(`{{${key}}}`, () => value), template);
  }
  //Create index page for CDTS template
  buildCdtsIndex(paths) {
    const showGithubLink = !!this.projectState.getProject().lastExported && !!this.gitHubData().owner && !!this.gitHubData().repo;
    const { repo, scope } = this.exportContext;
    const githubLinkHtml = showGithubLink ? `<div class="mrgn-tp-md">
            <div class="row">
                <ul class="toc lst-spcd col-md-12">
                    <li class="col-md-4 col-sm-6"><a class="list-group-item active" href="https://github.com/${this.gitHubData().owner}/${repo}" target="_blank">${this.translate.instant("project.github._title")}</a></li>
                </ul>
            </div>
         </div>
` : "";
    const collaboratorNames = !!this.projectData().collaborators?.length;
    const collaboratorHtml = collaboratorNames ? `<section class="gc-contributors">
         <h2 class="h3">${this.translate.instant("collaborators.project")}</h2>
         <ul>${this.projectData().collaborators.map((collab) => ` <li> ${collab.login}</li>`).join("")}</ul>
         </section>
` : "";
    const exporterHtml = `<p class="gc-byline">${this.translate.instant("exportPages.exportedBy")} {{EXPORTED_BY}}</p>`;
    const exportedPairs = this.projectState.getPairedPages("live", scope).filter((pair) => paths.has(pair.en.path) || paths.has(pair.fr.path));
    const viewCanada = this.translate.instant("common.viewOnCanada");
    const viewUPD = this.translate.instant("common.viewOnUPD");
    const viewAIDA = this.translate.instant("common.viewOnAIDA");
    const ungroupedCaption = this.translate.instant("exportPages.ungroupedPages");
    const statusClassMap = {
      isBaseline: ' class="active"',
      isNew: ' class="success"',
      isROT: ' class="danger"',
      isMoved: ' class="warning"'
    };
    const headers = this.projectCache.selectedLang() === "en" ? [this.translate.instant("common.language.englishPages")] : this.projectCache.selectedLang() === "fr" ? [this.translate.instant("common.language.frenchPages")] : [this.translate.instant("common.language.englishPages"), this.translate.instant("common.language.frenchPages")];
    const headerHtml = headers.map((h) => `<th>${h}</th>`).join("\n                  ");
    const buildRows = (pairsList) => pairsList.map((pair) => {
      const rowStatus = statusClassMap[pair.status] ?? "";
      const enCell = paths.has(pair.en.path) ? `<a href="${this.fetchService.generateUrl(pair.en.path, "protoUT", this.gitHubData().owner, repo)}" target="_blank"
              data-versions='[
                {"label": "${viewCanada}", "href":"${pair.en.url}"},
                {"label": "${viewUPD}", "href":"${this.fetchService.generateUrl(pair.en.path, "upd")}"}
                {"label": "${viewAIDA}", "href":"${this.fetchService.generateUrl(pair.en.path, "aida")}&title=${pair.en.label}"}
              ]'>${pair.en.label ?? pair.en.path}</a>` : `<i class="fa fa-minus"></i>`;
      const frCell = paths.has(pair.fr.path) ? `<a href="${this.fetchService.generateUrl(pair.fr.path, "protoUT", this.gitHubData().owner, repo)}" target="_blank"
              data-versions='[
                {"label": "${viewCanada}", "href":"${pair.fr.url}"},
                {"label": "${viewUPD}", "href":"${this.fetchService.generateUrl(pair.fr.path, "upd")}"}
                {"label": "${viewAIDA}", "href":"${this.fetchService.generateUrl(pair.fr.path, "aida")}&title=${pair.fr.label}"}
              ]'>${pair.fr.label ?? pair.fr.path}</a>` : `<i class="fa fa-minus"></i>`;
      const cells = this.projectCache.selectedLang() === "en" ? [enCell] : this.projectCache.selectedLang() === "fr" ? [frCell] : [enCell, frCell];
      return `
        <tr>
            ${cells.map((cell) => `<td${rowStatus}>${cell}</td>`).join("\n        ")}
        </tr>`;
    }).join("");
    const buildTable = (caption, isVisibleCaption, pairsList) => `
      <table class="table table-hover">
          <caption${isVisibleCaption ? "" : ' class="wb-inv"'}>${caption}</caption>
          <thead>
              <tr>
                  ${headerHtml}
              </tr>
          </thead>
          <tbody>${buildRows(pairsList)}
          </tbody>
      </table>`;
    const groupedPairs = /* @__PURE__ */ new Map();
    const ungroupedPairs = [];
    exportedPairs.forEach((pair) => {
      const groupKey = this.translate.currentLang()?.startsWith("fr") ? pair.fr.group : pair.en.group;
      if (groupKey) {
        if (!groupedPairs.has(groupKey))
          groupedPairs.set(groupKey, []);
        groupedPairs.get(groupKey).push(pair);
      } else {
        ungroupedPairs.push(pair);
      }
    });
    const tablesHtml = [
      ...Array.from(groupedPairs.entries()).map(([groupTitle, pairsList]) => buildTable(groupTitle, true, pairsList)),
      ...ungroupedPairs.length ? [buildTable(ungroupedCaption, true, ungroupedPairs)] : []
    ].join("\n");
    return `${exporterHtml}${githubLinkHtml}${tablesHtml}${collaboratorHtml}`;
  }
  /*_________________________________________*/
  /****** GITHUB SPECIFIC FUNCTIONS *********/
  //Get in-scope URLs and page content (used by export fxn)
  getUrlandContent(node, lang = "en", owner, repo, source) {
    return __async(this, null, function* () {
      const pages = [];
      const path = node.data?.path[lang];
      const url = this.fetchService.generateUrl(path, source, owner, repo);
      if (path && repo) {
        try {
          const filename = path.split("/").pop() || "index.html";
          const fileRow = this.filesTable().find((f) => f.path === path);
          const isSkipped = !fileRow || fileRow?.status === ExportStatus.SkipNew || fileRow?.status === ExportStatus.SkipOverwrite;
          const isNew = node?.data?.status?.isNew === true;
          if (!isSkipped) {
            if (isNew) {
              const breadcrumbs = this.projectState.getBreadcrumbChain(node.data.path[lang], lang).slice(1);
              const content = this.exportGitHubService.formatNewPageAsJekyll(node, breadcrumbs, this.gitHubData().owner, repo, lang);
              pages.push({ url, path, filename, content });
            } else {
              const doc = !source.endsWith("UT") ? yield this.fetchService.fetchContent(url, "both") : this.fetchService.stringToDoc(yield this.fetchService.fetchViaProxy(url));
              const breadcrumbs = this.projectCache.selectedVersion() === "prototype" ? this.projectState.getBreadcrumbChain(node.data.path[lang], lang).slice(1) : void 0;
              const content = yield this.exportGitHubService.formatDocumentAsJekyll(doc, url, this.gitHubData().owner, repo, breadcrumbs);
              pages.push({ url, path, filename, content });
            }
          }
        } catch (error) {
          console.error(`Error fetching content for ${url}:`, error);
        }
      }
      if (node?.children) {
        for (const child of node.children) {
          const childPages = yield this.getUrlandContent(child, lang, owner, repo, source);
          pages.push(...childPages);
        }
      }
      return pages;
    });
  }
  // Main export function (DO NOT REMOVE TIMEOUTS, THEY GIVE ENOUGH TIME FOR SHA TO UPDATE BETWEEN EXPORTS)
  exportProjectToGitHub() {
    return __async(this, null, function* () {
      const { source, repo, scope } = this.exportContext;
      const owner = this.gitHubData().owner;
      const branch = this.gitHubData().branch;
      const token = this.signInService.token();
      const projectName = this.projectData().projectName;
      const cacheVersion = this.projectCache.selectedVersion();
      const version = cacheVersion === "live" ? "prototype" : cacheVersion;
      console.log(source);
      console.log(repo);
      console.log(scope);
      this.exportProgress.set({ step: "exportPages.export.progress.gatherPages", progress: 5 });
      let nodes = this.projectState.getProjectTree();
      if (version === "baseline") {
        nodes = this.projectState.getBaselineTree(nodes, "full");
      }
      let exportPages = [];
      const lang = this.projectCache.selectedLang();
      if (lang === "both") {
        const enPages2 = yield this.getUrlandContent(nodes[0], "en", owner, repo, source);
        const frPages2 = yield this.getUrlandContent(nodes[0], "fr", owner, repo, source);
        exportPages = [...enPages2, ...frPages2];
      } else {
        exportPages = yield this.getUrlandContent(nodes[0], lang, owner, repo, source);
      }
      setTimeout(() => {
        this.exportProgress.set({ step: "exportPages.export.progress.checkGitHub", progress: 10 });
      }, 1e3);
      const templateFilesToExport = this.templateTable().filter((f) => f.status === ExportStatus.ExportNew || f.status === ExportStatus.ExportOverwrite).map((f) => f.path);
      setTimeout(() => {
        this.exportProgress.set({ step: "exportPages.export.progress.setupRepo", progress: 20 });
      }, 1e3);
      const setupResult = yield this.exportGitHubService.setupRepo(owner, repo, branch, token, projectName, templateFilesToExport, nodes);
      if (!setupResult.success && setupResult.error?.status === 403) {
        this.exportMessage.set({
          severity: "error",
          text: this.translate.instant("github.export.error.readOnlyToken")
        });
        return;
      } else if (!setupResult.success) {
        this.exportMessage.set({
          severity: "error",
          text: setupResult.error?.message || this.translate.instant("github.export.error.other")
        });
        return;
      }
      const existingFiles = yield this.exportGitHubService.getRepoTree(owner, repo, branch, token);
      const progressPerFile = 60 / exportPages.length;
      for (const [index, page] of exportPages.entries()) {
        try {
          this.exportProgress.set({ step: "exportPages.export.progress.exportPages", progress: 30 + index * progressPerFile });
          const result = yield this.exportGitHubService.exportToGitHub(owner, repo, branch, page.path, page.filename, page.content, token, existingFiles, true);
          if (result?.content?.sha) {
            const pathLang = page.path.startsWith("en/") || page.path.endsWith("en.html") ? "en" : "fr";
            this.projectState.setPageSha(page.path, result.content.sha, version, pathLang, "github");
          }
        } catch (error) {
          console.error(`Error exporting ${page.path}:`, error);
        }
      }
      setTimeout(() => {
        this.exportProgress.set({ step: "exportPages.export.progress.setupRedirects", progress: 90 });
      }, 1e3);
      const githubPages = yield this.exportGitHubService.getRepoTree(owner, repo, branch, token);
      const githubContentPages = [...githubPages.keys()].filter((path) => path.startsWith("en/") || path.startsWith("fr/"));
      const enPages = this.projectState.getAllPages("en", "live", scope);
      const frPages = this.projectState.getAllPages("fr", "live", scope);
      const allPagePaths = /* @__PURE__ */ new Set([...enPages.map((page) => page.path), ...frPages.map((page) => page.path), ...githubContentPages]);
      const redirects = [...allPagePaths].map((path) => ({
        origin: `https://www.canada.ca/${path}`,
        destination: `/${repo}/${path}`
      }));
      const redirectsJson = JSON.stringify(redirects, null, 2);
      yield this.exportGitHubService.exportToGitHub(owner, repo, branch, "source/data/exclude-redirect-links.json", "exclude-redirect-links.json", redirectsJson, token, githubPages, true);
      setTimeout(() => {
        this.exportProgress.set({ step: "common.complete", progress: 100 });
      }, 1e3);
      console.log("Page export complete.");
      this.projectState.setExportDate();
      const pageCountEN = exportPages.filter((p) => p.path.startsWith("en/") || p.path === "en.html").length;
      const pageCountFR = exportPages.filter((p) => p.path.startsWith("fr/") || p.path === "fr.html").length;
      this.usageService.trackExport(this.projectData().id, this.projectData().org ?? "DEFAULT", this.projectData().storageType, this.projectData().repoType, `${owner}/${repo}`, version, pageCountEN, pageCountFR);
      setTimeout(() => this.exportProgress.set(null), 5e3);
      this.compareFiles();
    });
  }
  static \u0275fac = function ExportPagesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExportPagesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExportPagesComponent, selectors: [["aida-export-github"]], viewQuery: function ExportPagesComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.settingsOverlay, _c04, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, decls: 48, vars: 49, consts: [["settingsPopover", ""], ["content", ""], ["id", "wb-cont"], ["severity", "info", "styleClass", "mb-2 sticky top-0 z-2"], [1, "flex", "lg:flex-row", "flex-column", "gap-3", "min-w-min"], [1, "lg:mb-3", "lg:w-8"], [1, "flex", "flex-column", "lg:flex-row", "justify-content-between", "align-items-start"], [1, "flex", "flex-column"], [1, "text-2xl", "my-1"], [1, "my-1"], [1, "flex", "flex-column", "xl:flex-row", "gap-2", "xl:gap-5"], [1, "flex", "flex-row", "gap-5"], ["for", "repo", 1, "text-xs", "font-semibold"], ["id", "repo", 1, "text-color-secondary", "white-space-nowrap", "text-sm", "my-0"], [1, "flex", "flex-row", "flex-wrap", "row-gap-2", "column-gap-5"], [3, "allowBoth", "isPrototype", "onlyValid", "showLang", "showSource", "showVersion"], [1, "mt-3", "lg:mt-0", "flex", "flex-row", "lg:flex-column", "gap-2"], ["icon", "pi pi-external-link", "outlined", "", "size", "small", "styleClass", "secondary-outline w-full", 3, "label"], [1, "lg:mb-3", "lg:w-4", 3, "class"], [1, "my-3", "lg:mt-0"], [1, "flex", "justify-content-start", "my-3"], [1, "my-3", "lg:mt-0", 3, "class"], [1, "flex", "align-items-center", "gap-2"], [1, "pi", "pi-info-circle", "font-bold"], ["for", "owner", 1, "text-xs", "font-semibold"], ["id", "owner", 1, "text-color-secondary", "white-space-nowrap", "text-sm", "my-0"], ["for", "branch", 1, "text-xs", "font-semibold"], ["id", "branch", 1, "text-color-secondary", "white-space-nowrap", "text-sm", "my-0"], ["icon", "pi pi-cog", "outlined", "", "size", "small", "styleClass", "secondary-outline w-full", 3, "click", "label"], ["styleClass", "w-full lg:w-30rem"], ["mode", "baseline"], [3, "showVersion"], ["icon", "pi pi-external-link", "outlined", "", "size", "small", "styleClass", "secondary-outline w-full", 3, "onClick", "label"], [1, "lg:mb-3", "lg:w-4"], [1, "p-3", "text-center"], [1, "text-600", "text-sm", "opacity-90"], [1, "text-primary", "text-xl", "font-semibold"], [1, "flex", "justify-content-around"], [1, "text-5xl", "font-bold", "text-primary", "mb-1"], [1, "text-600", "text-sm"], [1, "text-3xl", "font-bold", "text-primary", "mb-1"], ["size", "small", "stripedRows", "", 3, "value"], ["pTemplate", "header"], ["pTemplate", "body"], [1, "mt-4", 3, "collapsed", "header", "toggleable"], ["icon", "pi pi-github", "styleClass", "my-3", 3, "disabled", "label", "loading"], [1, "text-color-secondary"], ["styleClass", "h-2rem centered-label", 3, "value"], ["styleClass", "mt-2", 3, "severity", "text"], [1, "w-4rem"], [3, "onChange", "binary", "ngModel"], [1, "text-xl"], [1, "flex", "flex-row", "align-items-center", "gap-2"], ["icon", "pi pi-file-check", "outlined", "", "size", "small", "styleClass", "secondary-outline", "tooltipPosition", "top", 3, "onClick", "pTooltip"], ["icon", "pi pi-angle-double-right", "outlined", "", "severity", "secondary", "size", "small", "styleClass", "secondary-outline", "tooltipPosition", "top", 3, "onClick", "pTooltip"], ["icon", "pi pi-sync", "outlined", "", "size", "small", "styleClass", "secondary-outline", "tooltipPosition", "top", 3, "onClick", "pTooltip"], [3, "onChange", "binary", "disabled", "ngModel"], [1, "text-color-secondary", "text-sm"], [3, "click", "icon", "label"], [1, "font-semibold"], ["icon", "pi pi-github", "styleClass", "my-3", 3, "onClick", "disabled", "label", "loading"], ["severity", "info", "styleClass", "mt-3"], ["icon", "pi pi-file-export", "styleClass", "my-3", 3, "onClick", "disabled", "label", "loading"], [1, "text-white", 3, "innerHTML"], [3, "mode"]], template: function ExportPagesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h1", 2);
      \u0275\u0275text(1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p");
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(8, ExportPagesComponent_Conditional_8_Template, 6, 3, "p-message", 3);
      \u0275\u0275elementStart(9, "div", 4)(10, "div", 5)(11, "div", 6)(12, "div", 7)(13, "h2", 8);
      \u0275\u0275text(14);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "p", 9);
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 10)(20, "div", 11);
      \u0275\u0275conditionalCreate(21, ExportPagesComponent_Conditional_21_Template, 6, 4, "div");
      \u0275\u0275elementStart(22, "div")(23, "label", 12);
      \u0275\u0275text(24);
      \u0275\u0275pipe(25, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "p", 13);
      \u0275\u0275text(27);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(28, ExportPagesComponent_Conditional_28_Template, 6, 4, "div");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 14);
      \u0275\u0275element(30, "aida-project-settings", 15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "div", 16);
      \u0275\u0275conditionalCreate(32, ExportPagesComponent_Conditional_32_Template, 6, 4);
      \u0275\u0275conditionalCreate(33, ExportPagesComponent_Conditional_33_Template, 2, 3, "p-button", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(34, ExportPagesComponent_Conditional_34_Template, 1, 0, "aida-sign-in-banner");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(35, ExportPagesComponent_Conditional_35_Template, 3, 3, "div", 18)(36, ExportPagesComponent_Conditional_36_Template, 54, 39, "div", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 19)(38, "h2", 8);
      \u0275\u0275text(39);
      \u0275\u0275pipe(40, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "p", 9);
      \u0275\u0275text(42);
      \u0275\u0275pipe(43, "translate");
      \u0275\u0275pipe(44, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(45, ExportPagesComponent_Conditional_45_Template, 13, 15)(46, ExportPagesComponent_Conditional_46_Template, 2, 0, "div", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(47, ExportPagesComponent_Conditional_47_Template, 2, 3, "div", 21);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.repoType() === "github" ? \u0275\u0275pipeBind1(2, 29, "exportPages.github._title") : \u0275\u0275pipeBind1(3, 31, "exportPages.local._title"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(6, 33, "exportPages.description"), "", \u0275\u0275pipeBind1(7, 35, "exportPages.description2"));
      \u0275\u0275advance(3);
      \u0275\u0275conditional(!ctx.signInService.user() && ctx.repoType() === "github" ? 8 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.styleCardService.cardStyles());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 37, "exportPages.settings._title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 39, "exportPages.settings.description." + ctx.projectCache.selectedVersion()));
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.repoType() === "github" ? 21 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 41, "project.github.label.repo"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", ctx.projectData().github.repo, "", ctx.projectCache.selectedVersion() === "baseline" ? "-baseline" : "");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.repoType() === "github" ? 28 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("allowBoth", true)("isPrototype", !ctx.projectData().github.hasBaselineRepo)("onlyValid", true)("showLang", true)("showSource", true)("showVersion", true);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.hasRepoConfig() ? 32 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.repoType() === "github" ? 33 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.repoType() === "github" ? 34 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.hasRepoConfig() ? 35 : 36);
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.styleCardService.cardStyles());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 43, "exportPages.export._title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.repoType() === "github" ? \u0275\u0275pipeBind1(43, 45, "exportPages.export.github.description") : \u0275\u0275pipeBind1(44, 47, "exportPages.export.zip.description"));
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.projectTable().length > 0 ? 45 : 46);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.hasRepoConfig() ? 47 : -1);
    }
  }, dependencies: [
    CommonModule,
    FormsModule,
    NgControlStatus,
    NgModel,
    ButtonModule,
    Button,
    PrimeTemplate,
    CheckboxModule,
    Checkbox,
    ChipModule,
    Chip,
    DividerModule,
    Divider,
    MessageModule,
    Message,
    PanelModule,
    Panel,
    PopoverModule,
    Popover,
    ProgressBarModule,
    ProgressBar,
    TableModule,
    Table,
    TooltipModule,
    Tooltip,
    AddPagesLinkComponent,
    BookmarkletComponent,
    ProjectSettingsComponent,
    SetupRepoComponent,
    SignInBannerComponent,
    DatePipe,
    TranslatePipe
  ], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExportPagesComponent, [{
    type: Component,
    args: [{ selector: "aida-export-github", imports: [
      CommonModule,
      FormsModule,
      TranslatePipe,
      ButtonModule,
      CheckboxModule,
      ChipModule,
      DividerModule,
      MessageModule,
      PanelModule,
      PopoverModule,
      ProgressBarModule,
      TableModule,
      TooltipModule,
      AddPagesLinkComponent,
      BookmarkletComponent,
      ProjectSettingsComponent,
      SetupRepoComponent,
      SignInBannerComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<h1 id="wb-cont">{{ repoType() === 'github' ? ('exportPages.github._title' | translate) : ('exportPages.local._title' | translate) }}</h1>
<p>{{ 'exportPages.description' | translate }}{{ 'exportPages.description2' | translate }}</p>
<!-- Authentication Banner -->
@if (!signInService.user() && repoType() === 'github') {
  <p-message severity="info" styleClass="mb-2 sticky top-0 z-2">
    <div class="flex align-items-center gap-2">
      <i class="pi pi-info-circle font-bold"></i>
      <span>{{ 'exportPages.github.warningMessage' | translate }}</span>
    </div>
  </p-message>
}
<div class="flex lg:flex-row flex-column gap-3 min-w-min">
  <!--Connect Card 4-->
  <div [class]="styleCardService.cardStyles()" class="lg:mb-3 lg:w-8">
    <!--Header & Settings-->
    <div class="flex flex-column lg:flex-row justify-content-between align-items-start">
      <div class="flex flex-column">
        <h2 class="text-2xl my-1">{{ 'exportPages.settings._title' | translate }}</h2>
        <p class="my-1">{{ 'exportPages.settings.description.' + projectCache.selectedVersion() | translate }}</p>
        <div class="flex flex-column xl:flex-row gap-2 xl:gap-5">
          <!-- Repository Info Row -->
          <div class="flex flex-row gap-5">
            @if (repoType() === 'github') {
              <div>
                <label class="text-xs font-semibold" for="owner">{{ 'project.github.label.owner' | translate }}</label>
                <p id="owner" class="text-color-secondary white-space-nowrap text-sm my-0">{{ projectData().github.owner }}</p>
              </div>
            }
            <div>
              <label class="text-xs font-semibold" for="repo">{{ 'project.github.label.repo' | translate }}</label>
              <p id="repo" class="text-color-secondary white-space-nowrap text-sm my-0">{{ projectData().github.repo }}{{ projectCache.selectedVersion() === 'baseline' ? '-baseline' : '' }}</p>
            </div>
            @if (repoType() === 'github') {
              <div>
                <label class="text-xs font-semibold" for="branch">{{ 'project.github.label.branch' | translate }}</label>
                <p id="branch" class="text-color-secondary white-space-nowrap text-sm my-0">{{ projectData().github.branch }}</p>
              </div>
            }
          </div>
          <div class="flex flex-row flex-wrap row-gap-2 column-gap-5">
            <aida-project-settings [allowBoth]="true" [isPrototype]="!projectData().github.hasBaselineRepo" [onlyValid]="true" [showLang]="true" [showSource]="true" [showVersion]="true" />
          </div>
        </div>
      </div>
      <div class="mt-3 lg:mt-0 flex flex-row lg:flex-column gap-2">
        @if (hasRepoConfig()) {
          <p-button
            [label]="'exportPages.settings.changeButton' | translate"
            (click)="settingsOverlay()?.toggle($event)"
            icon="pi pi-cog"
            outlined
            size="small"
            styleClass="secondary-outline w-full"
          />
          <p-popover #settingsPopover styleClass="w-full lg:w-30rem">
            <aida-setup-repo mode="baseline" />
            @if (projectData().github.hasBaselineRepo) {
              <aida-project-settings [showVersion]="true" />
            }
          </p-popover>
        }
        @if (repoType() === 'github') {
          <p-button [label]="'exportPages.github.openRepo' | translate" (onClick)="openRepo()" icon="pi pi-external-link" outlined size="small" styleClass="secondary-outline w-full" />
        }
      </div>
    </div>
    @if (repoType() === 'github') {
      <aida-sign-in-banner />
    }
  </div>
  <!--GitHub settings (only visible if not configured)-->
  @if (!hasRepoConfig()) {
    <div [class]="styleCardService.cardStyles()" class="lg:mb-3 lg:w-4">
      <aida-setup-repo />
      @if (projectData().github.hasBaselineRepo) {
        <aida-project-settings [showVersion]="true" />
      }
    </div>
  } @else {
    <!--Stats Card (only visible if GitHub repo is configured)-->
    <div [class]="styleCardService.cardStyles()" class="lg:mb-3 lg:w-4">
      <h2 class="text-2xl my-1">{{ 'exportPages.data' | translate }}</h2>
      <div class="p-3 text-center">
        <!-- Last Export Date -->
        <div class="text-600 text-sm opacity-90">{{ repoType() === 'github' ? ('exportPages.data.lastExported' | translate) : ('exportPages.data.lastDownloaded' | translate) }}</div>
        <div class="text-primary text-xl font-semibold">
          @if (repoType() === 'github' && projectData().lastExported && (projectData().lastExported?.getTime() ?? 0) > 0) {
            {{ projectData().lastExported | date: 'mediumDate' }}, {{ projectData().lastExported | date: 'shortTime' }}
          } @else if (repoType() === 'local' && projectData().lastDownloaded && (projectData().lastDownloaded?.getTime() ?? 0) > 0) {
            {{ projectData().lastDownloaded | date: 'mediumDate' }}, {{ projectData().lastDownloaded | date: 'shortTime' }}
          } @else {
            {{ 'common.never' | translate }}
          }
        </div>
        <p-divider />
        <!-- Total pages -->
        <div class="text-600 text-sm opacity-90">{{ 'exportPages.data.totalFiles' | translate }}</div>
        <div class="flex justify-content-around">
          <div>
            <div class="text-5xl font-bold text-primary mb-1">
              {{ projectFileCount() }}
            </div>
            <div class="text-600 text-sm">
              {{ projectCache.selectedVersion() === 'prototype' ? ('exportPages.data.totalFiles.inScope' | translate) : ('exportPages.data.totalFiles.baseline' | translate) }}
            </div>
          </div>
          <div>
            <div class="text-5xl font-bold text-primary mb-1">
              {{ templateFileCount() }}
            </div>
            <div class="text-600 text-sm">
              {{ 'exportPages.data.totalFiles.template' | translate }}
            </div>
          </div>
        </div>
        <p-divider />
        <!--Export breakdown-->
        <div class="text-600 text-sm opacity-90">{{ 'exportPages.data.includedPages' | translate }}</div>
        <div class="flex justify-content-around">
          <div>
            <div class="text-3xl font-bold text-primary mb-1">
              {{ newCount() }}
            </div>
            <div class="text-600 text-sm">
              {{ 'exportPages.data.includedPages.new' | translate }}
            </div>
          </div>
          <div>
            <div class="text-3xl font-bold text-primary mb-1">
              {{ updatedCount() }}
            </div>
            <div class="text-600 text-sm">
              {{ 'exportPages.data.includedPages.existing' | translate }}
            </div>
          </div>
          <div>
            <div class="text-3xl font-bold text-primary mb-1">
              {{ skippedCount() }}
            </div>
            <div class="text-600 text-sm">
              {{ 'exportPages.data.includedPages.skipped' | translate }}
            </div>
          </div>
        </div>
      </div>
    </div>
  }
</div>

<!-- Export file table-->
<div [class]="styleCardService.cardStyles()" class="my-3 lg:mt-0">
  <h2 class="text-2xl my-1">{{ 'exportPages.export._title' | translate }}</h2>
  <p class="my-1">{{ repoType() === 'github' ? ('exportPages.export.github.description' | translate) : ('exportPages.export.zip.description' | translate) }}</p>
  @if (projectTable().length > 0) {
    <!--Project files-->
    <p-table [value]="projectTable()" size="small" stripedRows>
      <ng-template pTemplate="header">
        <tr>
          <th class="w-4rem">
            <p-checkbox [binary]="true" [ngModel]="allExported('project')" (onChange)="setAll(allExported('project') ? 'skip' : 'export', 'project')" />
          </th>
          <th class="text-xl">{{ projectCache.selectedVersion() === 'prototype' ? ('exportPages.data.totalFiles.inScope' | translate) : ('exportPages.data.totalFiles.baseline' | translate) }}</th>
          <th class="text-xl">
            <span class="flex flex-row align-items-center gap-2">
              {{ 'common.status' | translate }}
              <p-button
                [pTooltip]="'exportPages.toggle.default' | translate"
                (onClick)="compareFiles()"
                icon="pi pi-file-check"
                outlined
                size="small"
                styleClass="secondary-outline"
                tooltipPosition="top"
              />
              <p-button
                [pTooltip]="'exportPages.toggle.skipAll' | translate"
                (onClick)="setAll('skip', 'project')"
                icon="pi pi-angle-double-right"
                outlined
                severity="secondary"
                size="small"
                styleClass="secondary-outline"
                tooltipPosition="top"
              />
              <p-button
                [pTooltip]="'exportPages.toggle.updateAll' | translate"
                (onClick)="setAll('export', 'project')"
                icon="pi pi-sync"
                outlined
                size="small"
                styleClass="secondary-outline"
                tooltipPosition="top"
              />
            </span>
          </th>
        </tr>
      </ng-template>
      <ng-template let-file pTemplate="body">
        <tr>
          <td>
            <p-checkbox [binary]="true" [disabled]="file.status === ExportStatus.AddToProject" [ngModel]="includedInExport(file.status)" (onChange)="toggleUpdate(file)" />
          </td>
          <td>
            @if (file.label) {
              <span class="font-semibold">{{ file.label }}</span>
              <br />
            }
            <span class="text-color-secondary text-sm">{{ file.path }}</span>
          </td>
          <td>
            <p-chip
              [class]="'cursor-pointer font-bold center-chip w-10rem p-1 ' + getBgAndText(file.status)"
              [icon]="getIcon(file.status)"
              [label]="file.status | translate"
              (click)="file.status === ExportStatus.AddToProject || file.status === ExportStatus.OppLanguage ? addToProject(file) : toggleUpdate(file)"
            />
          </td>
        </tr>
      </ng-template>
    </p-table>

    <!--Template files-->
    <p-panel [collapsed]="true" [header]="'exportPages.export.templateFiles' | translate: { updated: templateUpdatedCount(), count: templateFileCount() }" [toggleable]="true" class="mt-4">
      <p-table [value]="templateTable()" size="small" stripedRows>
        <ng-template pTemplate="header">
          <tr>
            <th class="w-4rem">
              <p-checkbox [binary]="true" [ngModel]="allExported('template')" (onChange)="setAll(allExported('template') ? 'skip' : 'export', 'template')" />
            </th>
            <th>{{ 'common.path' | translate }}</th>
            <th>
              <span class="flex flex-row align-items-center gap-2">
                {{ 'common.status' | translate }}
                <p-button
                  [pTooltip]="'exportPages.toggle.skipAll' | translate"
                  (onClick)="setAll('skip', 'template')"
                  icon="pi pi-angle-double-right"
                  outlined
                  severity="secondary"
                  size="small"
                  styleClass="secondary-outline"
                  tooltipPosition="top"
                />
                <p-button
                  [pTooltip]="'exportPages.toggle.updateAll' | translate"
                  (onClick)="setAll('export', 'template')"
                  icon="pi pi-sync"
                  outlined
                  size="small"
                  styleClass="secondary-outline"
                  tooltipPosition="top"
                />
              </span>
            </th>
          </tr>
        </ng-template>
        <ng-template let-file pTemplate="body">
          <tr>
            <td>
              <p-checkbox [binary]="true" [disabled]="file.status === ExportStatus.AddToProject" [ngModel]="includedInExport(file.status)" (onChange)="toggleUpdate(file)" />
            </td>
            <td>{{ file.path }}</td>
            <td>
              <p-chip
                [class]="'cursor-pointer font-bold center-chip w-9rem p-1 ' + getBgAndText(file.status)"
                [icon]="getIcon(file.status)"
                [label]="file.status | translate"
                (click)="file.status !== ExportStatus.AddToProject && toggleUpdate(file)"
              />
            </td>
          </tr>
        </ng-template>
      </p-table>
    </p-panel>

    <!--Export button-->
    @if (repoType() === 'github') {
      <p-button
        [disabled]="projectFileCount() === 0 || !signInService.token() || !gitHubData().repo"
        [label]="'exportPages.export.button.github' | translate"
        [loading]="exportProgress()"
        (onClick)="exportProjectToGitHub()"
        icon="pi pi-github"
        styleClass="my-3"
      />
    } @else {
      @if (projectCache.hasLocal()) {
        <p-message severity="info" styleClass="mt-3">
          <div class="flex align-items-center gap-2">
            <i class="pi pi-info-circle font-bold"></i>
            <span>{{ 'exportPages.local.warningMessage' | translate }}</span>
          </div>
        </p-message>
      }
      <p-button
        [disabled]="projectFileCount() === 0 || !gitHubData().repo"
        [label]="'exportPages.export.button.zip' | translate"
        [loading]="exportProgress()"
        (onClick)="exportToFile()"
        icon="pi pi-file-export"
        styleClass="my-3"
      />
    }
    @if (filesTable().length) {
      <span class="text-color-secondary">
        {{ 'exportPages.export.count' | translate: { New: newCount(), Updated: updatedCount() } }}
      </span>
    }
    @if (exportProgress(); as progress) {
      <!--Progress-->
      <p-progressbar [value]="progress.progress" styleClass="h-2rem centered-label">
        <ng-template #content>
          <span [innerHTML]="progress.step | translate" class="text-white"></span>
        </ng-template>
      </p-progressbar>
    }
    @if (exportMessage()) {
      <p-message [severity]="exportMessage()!.severity" [text]="exportMessage()!.text" styleClass="mt-2" />
    }
  } @else {
    <div class="flex justify-content-start my-3">
      <aida-add-pages-link />
    </div>
  }
</div>

@if (hasRepoConfig()) {
  <!-- Bookmarklet-->
  <div [class]="styleCardService.cardStyles()" class="my-3 lg:mt-0">
    <aida-bookmarklet [mode]="repoType()" />
  </div>
}
` }]
  }], () => [], { settingsOverlay: [{ type: ViewChild, args: ["settingsPopover", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExportPagesComponent, { className: "ExportPagesComponent", filePath: "src/app/views/tasks/export-pages/export-pages.component.ts", lineNumber: 98 });
})();
export {
  ExportPagesComponent
};
//# sourceMappingURL=chunk-XYC2WFWL.js.map
