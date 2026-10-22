import {
  ContextMenu,
  ContextMenuModule
} from "./chunk-4PD5MA34.js";
import {
  Message,
  MessageModule
} from "./chunk-GGIC4QUJ.js";
import {
  AngleRightIcon
} from "./chunk-P3TRDY63.js";
import {
  RadioButton,
  RadioButtonModule
} from "./chunk-NQRO2LC7.js";
import {
  HtmlNormalizationService
} from "./chunk-6U2RHGUD.js";
import {
  FetchService
} from "./chunk-M6FDN6OY.js";
import {
  AutoFocus,
  BaseComponent,
  Bind,
  BindModule,
  Button,
  ButtonDirective,
  ButtonModule,
  ChevronDownIcon,
  ConnectedOverlayScrollHandler,
  FormsModule,
  MotionDirective,
  MotionModule,
  NgControlStatus,
  NgModel,
  PARENT_INSTANCE,
  Ripple,
  Tooltip,
  TooltipModule,
  s as s2,
  zindexutils
} from "./chunk-QN4TTD5X.js";
import {
  BaseStyle,
  C,
  CommonModule,
  J,
  MessageService,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  OverlayService,
  PrimeTemplate,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  SharedModule,
  T,
  UserSettingsService,
  V,
  V2,
  Yt,
  Z,
  Zt,
  bt,
  isPlatformBrowser,
  j,
  l,
  m,
  s,
  ut
} from "./chunk-7YP54JN5.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  Output,
  Renderer2,
  TranslatePipe,
  TranslateService,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  effect,
  forwardRef,
  inject,
  input,
  numberAttribute,
  output,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵariaProperty,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryAdvance,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery,
  ɵɵviewQuerySignal
} from "./chunk-KRHY6Z2H.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-YCXP4XZS.js";

// node_modules/@primeuix/styles/dist/tieredmenu/index.mjs
var style = "\n    .p-tieredmenu {\n        background: dt('tieredmenu.background');\n        color: dt('tieredmenu.color');\n        border: 1px solid dt('tieredmenu.border.color');\n        border-radius: dt('tieredmenu.border.radius');\n        min-width: 12.5rem;\n    }\n    \n\n    .p-tieredmenu-root-list,\n    .p-tieredmenu-submenu {\n        margin: 0;\n        padding: dt('tieredmenu.list.padding');\n        list-style: none;\n        outline: 0 none;\n        display: flex;\n        flex-direction: column;\n        gap: dt('tieredmenu.list.gap');\n    }\n\n    .p-tieredmenu-submenu {\n        position: absolute;\n        min-width: 100%;\n        z-index: 1;\n        background: dt('tieredmenu.background');\n        color: dt('tieredmenu.color');\n        border: 1px solid dt('tieredmenu.border.color');\n        border-radius: dt('tieredmenu.border.radius');\n        box-shadow: dt('tieredmenu.shadow');\n    }\n\n    .p-tieredmenu-item {\n        position: relative;\n    }\n\n    .p-tieredmenu-item-content {\n        transition:\n            background dt('tieredmenu.transition.duration'),\n            color dt('tieredmenu.transition.duration');\n        border-radius: dt('tieredmenu.item.border.radius');\n        color: dt('tieredmenu.item.color');\n    }\n\n    .p-tieredmenu-item-link {\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n        text-decoration: none;\n        overflow: hidden;\n        position: relative;\n        color: inherit;\n        padding: dt('tieredmenu.item.padding');\n        gap: dt('tieredmenu.item.gap');\n        user-select: none;\n        outline: 0 none;\n    }\n\n    .p-tieredmenu-item-label {\n        line-height: 1;\n    }\n\n    .p-tieredmenu-item-icon {\n        color: dt('tieredmenu.item.icon.color');\n    }\n\n    .p-tieredmenu-submenu-icon {\n        color: dt('tieredmenu.submenu.icon.color');\n        margin-left: auto;\n        font-size: dt('tieredmenu.submenu.icon.size');\n        width: dt('tieredmenu.submenu.icon.size');\n        height: dt('tieredmenu.submenu.icon.size');\n    }\n\n    .p-tieredmenu-submenu-icon:dir(rtl) {\n        margin-left: 0;\n        margin-right: auto;\n    }\n\n    .p-tieredmenu-item.p-focus > .p-tieredmenu-item-content {\n        color: dt('tieredmenu.item.focus.color');\n        background: dt('tieredmenu.item.focus.background');\n    }\n\n    .p-tieredmenu-item.p-focus > .p-tieredmenu-item-content .p-tieredmenu-item-icon {\n        color: dt('tieredmenu.item.icon.focus.color');\n    }\n\n    .p-tieredmenu-item.p-focus > .p-tieredmenu-item-content .p-tieredmenu-submenu-icon {\n        color: dt('tieredmenu.submenu.icon.focus.color');\n    }\n\n    .p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover {\n        color: dt('tieredmenu.item.focus.color');\n        background: dt('tieredmenu.item.focus.background');\n    }\n\n    .p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover .p-tieredmenu-item-icon {\n        color: dt('tieredmenu.item.icon.focus.color');\n    }\n\n    .p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover .p-tieredmenu-submenu-icon {\n        color: dt('tieredmenu.submenu.icon.focus.color');\n    }\n\n    .p-tieredmenu-item-active > .p-tieredmenu-item-content {\n        color: dt('tieredmenu.item.active.color');\n        background: dt('tieredmenu.item.active.background');\n    }\n\n    .p-tieredmenu-item-active > .p-tieredmenu-item-content .p-tieredmenu-item-icon {\n        color: dt('tieredmenu.item.icon.active.color');\n    }\n\n    .p-tieredmenu-item-active > .p-tieredmenu-item-content .p-tieredmenu-submenu-icon {\n        color: dt('tieredmenu.submenu.icon.active.color');\n    }\n\n    .p-tieredmenu-separator {\n        border-block-start: 1px solid dt('tieredmenu.separator.border.color');\n    }\n\n    .p-tieredmenu-overlay {\n        box-shadow: dt('tieredmenu.shadow');\n        will-change: transform;\n    }\n\n    .p-tieredmenu-mobile .p-tieredmenu-submenu {\n        position: static;\n        box-shadow: none;\n        border: 0 none;\n        padding-inline-start: dt('tieredmenu.submenu.mobile.indent');\n        padding-inline-end: 0;\n    }\n\n    .p-tieredmenu-mobile .p-tieredmenu-submenu:dir(rtl) {\n        padding-inline-start: 0;\n        padding-inline-end: dt('tieredmenu.submenu.mobile.indent');\n    }\n\n    .p-tieredmenu-mobile .p-tieredmenu-submenu-icon {\n        transition: transform 0.2s;\n        transform: rotate(90deg);\n    }\n\n    .p-tieredmenu-mobile .p-tieredmenu-item-active > .p-tieredmenu-item-content .p-tieredmenu-submenu-icon {\n        transform: rotate(-90deg);\n    }\n";

// node_modules/primeng/fesm2022/primeng-tieredmenu.mjs
var _c0 = ["sublist"];
var _c1 = (a0) => ({
  processedItem: a0
});
var _c2 = () => ({
  exact: false
});
var _c3 = (a0, a1) => ({
  $implicit: a0,
  hasSubmenu: a1
});
function TieredMenuSub_Conditional_0_ng_template_2_li_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "li", 8);
  }
  if (rf & 2) {
    const processedItem_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleMap(ctx_r1.getItemProp(processedItem_r3, "style"));
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("separator"), ctx_r1.getItemProp(processedItem_r3, "class"), ctx_r1.getItemProp(processedItem_r3, "styleClass")));
    \u0275\u0275property("pBind", ctx_r1._ptm("separator"));
    \u0275\u0275attribute("id", ctx_r1.getItemId(processedItem_r3));
  }
}
function TieredMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 19);
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(4);
    const processedItem_r3 = ctx_r4.$implicit;
    const index_r6 = ctx_r4.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("itemIcon"), ctx_r1.getItemProp(processedItem_r3, "icon"), ctx_r1.getItemProp(processedItem_r3, "iconClass")));
    \u0275\u0275property("ngStyle", ctx_r1.getItemProp(processedItem_r3, "iconStyle"))("pBind", ctx_r1.getPTOptions(processedItem_r3, index_r6, "itemIcon"));
    \u0275\u0275attribute("tabindex", -1);
  }
}
function TieredMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(4);
    const processedItem_r3 = ctx_r4.$implicit;
    const index_r6 = ctx_r4.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("itemLabel"), ctx_r1.getItemProp(processedItem_r3, "labelClass")));
    \u0275\u0275property("ngStyle", ctx_r1.getItemProp(processedItem_r3, "labelStyle"))("pBind", ctx_r1.getPTOptions(processedItem_r3, index_r6, "itemLabel"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getItemLabel(processedItem_r3), " ");
  }
}
function TieredMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 20);
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(4);
    const processedItem_r3 = ctx_r4.$implicit;
    const index_r6 = ctx_r4.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("itemLabel"), ctx_r1.getItemProp(processedItem_r3, "labelClass")));
    \u0275\u0275property("ngStyle", ctx_r1.getItemProp(processedItem_r3, "labelStyle"))("innerHTML", ctx_r1.getItemLabel(processedItem_r3), \u0275\u0275sanitizeHtml)("pBind", ctx_r1.getPTOptions(processedItem_r3, index_r6, "itemLabel"));
  }
}
function TieredMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const processedItem_r3 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("itemBadge"), ctx_r1.getItemProp(processedItem_r3, "badgeStyleClass")));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getItemProp(processedItem_r3, "badge"));
  }
}
function TieredMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_1_ng_container_6__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 23);
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(5);
    const processedItem_r3 = ctx_r4.$implicit;
    const index_r6 = ctx_r4.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cx("submenuIcon"));
    \u0275\u0275property("pBind", ctx_r1.getPTOptions(processedItem_r3, index_r6, "submenuIcon"));
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function TieredMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_2_ng_template_0_Template(rf, ctx) {
}
function TieredMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TieredMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_2_ng_template_0_Template, 0, 0, "ng-template", 24);
  }
  if (rf & 2) {
    \u0275\u0275ariaProperty("aria-hidden", true);
  }
}
function TieredMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TieredMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_1_ng_container_6__svg_svg_1_Template, 1, 4, "svg", 21)(2, TieredMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_2_Template, 1, 1, null, 22);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.tieredMenu.submenuIconTemplate && !ctx_r1.tieredMenu._submenuIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.tieredMenu.submenuIconTemplate || ctx_r1.tieredMenu._submenuIconTemplate);
  }
}
function TieredMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 15);
    \u0275\u0275template(1, TieredMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_1_span_1_Template, 1, 5, "span", 16)(2, TieredMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_1_span_2_Template, 2, 5, "span", 17)(3, TieredMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_1_ng_template_3_Template, 1, 5, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(5, TieredMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_1_span_5_Template, 2, 3, "span", 18)(6, TieredMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_Template, 3, 2, "ng-container", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const htmlLabel_r7 = \u0275\u0275reference(4);
    const ctx_r4 = \u0275\u0275nextContext(3);
    const processedItem_r3 = ctx_r4.$implicit;
    const index_r6 = ctx_r4.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("itemLink"), ctx_r1.getItemProp(processedItem_r3, "linkClass")));
    \u0275\u0275property("target", ctx_r1.getItemProp(processedItem_r3, "target"))("ngStyle", ctx_r1.getItemProp(processedItem_r3, "linkStyle"))("pBind", ctx_r1.getPTOptions(processedItem_r3, index_r6, "itemLink"));
    \u0275\u0275attribute("href", ctx_r1.getItemProp(processedItem_r3, "url"), \u0275\u0275sanitizeUrl)("data-automationid", ctx_r1.getItemProp(processedItem_r3, "automationId"))("title", ctx_r1.getItemProp(processedItem_r3, "title"))("tabindex", -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getItemProp(processedItem_r3, "icon"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getItemProp(processedItem_r3, "escape"))("ngIfElse", htmlLabel_r7);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.getItemProp(processedItem_r3, "badge"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isItemGroup(processedItem_r3));
  }
}
function TieredMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 19);
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(4);
    const processedItem_r3 = ctx_r4.$implicit;
    const index_r6 = ctx_r4.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("itemIcon"), ctx_r1.getItemProp(processedItem_r3, "icon"), ctx_r1.getItemProp(processedItem_r3, "iconClass")));
    \u0275\u0275property("ngStyle", ctx_r1.getItemProp(processedItem_r3, "iconStyle"))("pBind", ctx_r1.getPTOptions(processedItem_r3, index_r6, "itemIcon"));
    \u0275\u0275attribute("aria-hidden", true)("tabindex", -1);
  }
}
function TieredMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(4);
    const processedItem_r3 = ctx_r4.$implicit;
    const index_r6 = ctx_r4.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("itemLabel"), ctx_r1.getItemProp(processedItem_r3, "labelClass")));
    \u0275\u0275property("ngStyle", ctx_r1.getItemProp(processedItem_r3, "labelStyle"))("pBind", ctx_r1.getPTOptions(processedItem_r3, index_r6, "itemLabel"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getItemLabel(processedItem_r3), " ");
  }
}
function TieredMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 20);
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(4);
    const processedItem_r3 = ctx_r4.$implicit;
    const index_r6 = ctx_r4.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("itemLabel"), ctx_r1.getItemProp(processedItem_r3, "labelClass")));
    \u0275\u0275property("ngStyle", ctx_r1.getItemProp(processedItem_r3, "labelStyle"))("innerHTML", ctx_r1.getItemLabel(processedItem_r3), \u0275\u0275sanitizeHtml)("pBind", ctx_r1.getPTOptions(processedItem_r3, index_r6, "itemLabel"));
  }
}
function TieredMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const processedItem_r3 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("itemBadge"), ctx_r1.getItemProp(processedItem_r3, "badgeStyleClass")));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getItemProp(processedItem_r3, "badge"));
  }
}
function TieredMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_2_ng_container_6__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 23);
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(5);
    const processedItem_r3 = ctx_r4.$implicit;
    const index_r6 = ctx_r4.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cx("submenuIcon"));
    \u0275\u0275property("pBind", ctx_r1.getPTOptions(processedItem_r3, index_r6, "submenuIcon"));
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function TieredMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_2_ng_template_0_Template(rf, ctx) {
}
function TieredMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TieredMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_2_ng_template_0_Template, 0, 0, "ng-template", 24);
  }
  if (rf & 2) {
    \u0275\u0275ariaProperty("aria-hidden", true);
  }
}
function TieredMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TieredMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_2_ng_container_6__svg_svg_1_Template, 1, 4, "svg", 21)(2, TieredMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_2_Template, 1, 1, null, 22);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.tieredMenu.submenuIconTemplate && !ctx_r1.tieredMenu._submenuIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.tieredMenu.submenuIconTemplate || ctx_r1.tieredMenu._submenuIconTemplate);
  }
}
function TieredMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 25);
    \u0275\u0275template(1, TieredMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_2_span_1_Template, 1, 6, "span", 16)(2, TieredMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_2_span_2_Template, 2, 5, "span", 17)(3, TieredMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_2_ng_template_3_Template, 1, 5, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(5, TieredMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_2_span_5_Template, 2, 3, "span", 18)(6, TieredMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_Template, 3, 2, "ng-container", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const htmlLabel_r8 = \u0275\u0275reference(4);
    const ctx_r4 = \u0275\u0275nextContext(3);
    const processedItem_r3 = ctx_r4.$implicit;
    const index_r6 = ctx_r4.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("itemLink"), ctx_r1.getItemProp(processedItem_r3, "linkClass")));
    \u0275\u0275property("routerLink", ctx_r1.getItemProp(processedItem_r3, "routerLink"))("queryParams", ctx_r1.getItemProp(processedItem_r3, "queryParams"))("routerLinkActive", "p-tieredmenu-item-link-active")("routerLinkActiveOptions", ctx_r1.getItemProp(processedItem_r3, "routerLinkActiveOptions") || \u0275\u0275pureFunction0(23, _c2))("target", ctx_r1.getItemProp(processedItem_r3, "target"))("ngStyle", ctx_r1.getItemProp(processedItem_r3, "linkStyle"))("fragment", ctx_r1.getItemProp(processedItem_r3, "fragment"))("queryParamsHandling", ctx_r1.getItemProp(processedItem_r3, "queryParamsHandling"))("preserveFragment", ctx_r1.getItemProp(processedItem_r3, "preserveFragment"))("skipLocationChange", ctx_r1.getItemProp(processedItem_r3, "skipLocationChange"))("replaceUrl", ctx_r1.getItemProp(processedItem_r3, "replaceUrl"))("state", ctx_r1.getItemProp(processedItem_r3, "state"))("pBind", ctx_r1.getPTOptions(processedItem_r3, index_r6, "itemLink"));
    \u0275\u0275attribute("data-automationid", ctx_r1.getItemProp(processedItem_r3, "automationId"))("title", ctx_r1.getItemProp(processedItem_r3, "title"))("tabindex", -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getItemProp(processedItem_r3, "icon"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getItemProp(processedItem_r3, "escape"))("ngIfElse", htmlLabel_r8);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.getItemProp(processedItem_r3, "badge"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isItemGroup(processedItem_r3));
  }
}
function TieredMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TieredMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_1_Template, 7, 14, "a", 13)(2, TieredMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_2_Template, 7, 24, "a", 14);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const processedItem_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.getItemProp(processedItem_r3, "routerLink"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getItemProp(processedItem_r3, "routerLink"));
  }
}
function TieredMenuSub_Conditional_0_ng_template_2_li_1_ng_container_4_1_ng_template_0_Template(rf, ctx) {
}
function TieredMenuSub_Conditional_0_ng_template_2_li_1_ng_container_4_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TieredMenuSub_Conditional_0_ng_template_2_li_1_ng_container_4_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TieredMenuSub_Conditional_0_ng_template_2_li_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TieredMenuSub_Conditional_0_ng_template_2_li_1_ng_container_4_1_Template, 1, 0, null, 26);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const processedItem_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.itemTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c3, processedItem_r3.item, ctx_r1.getItemProp(processedItem_r3, "items")));
  }
}
function TieredMenuSub_Conditional_0_ng_template_2_li_1_p_tieredmenusub_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-tieredmenusub", 27);
    \u0275\u0275listener("itemClick", function TieredMenuSub_Conditional_0_ng_template_2_li_1_p_tieredmenusub_5_Template_p_tieredmenusub_itemClick_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.itemClick.emit($event));
    })("itemMouseEnter", function TieredMenuSub_Conditional_0_ng_template_2_li_1_p_tieredmenusub_5_Template_p_tieredmenusub_itemMouseEnter_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onItemMouseEnter($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const processedItem_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("items", processedItem_r3.items)("itemTemplate", ctx_r1.itemTemplate)("autoDisplay", ctx_r1.autoDisplay)("menuId", ctx_r1.menuId)("visible", ctx_r1.isItemActive(processedItem_r3) && ctx_r1.isItemGroup(processedItem_r3))("activeItemPath", ctx_r1.activeItemPath())("focusedItemId", ctx_r1.focusedItemId)("ariaLabelledBy", ctx_r1.getItemId(processedItem_r3))("level", ctx_r1.level + 1)("pt", ctx_r1.pt())("motionOptions", ctx_r1.motionOptions)("unstyled", ctx_r1.unstyled());
  }
}
function TieredMenuSub_Conditional_0_ng_template_2_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 9, 1)(2, "div", 10);
    \u0275\u0275listener("click", function TieredMenuSub_Conditional_0_ng_template_2_li_1_Template_div_click_2_listener($event) {
      \u0275\u0275restoreView(_r4);
      const processedItem_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onItemClick($event, processedItem_r3));
    })("mouseenter", function TieredMenuSub_Conditional_0_ng_template_2_li_1_Template_div_mouseenter_2_listener($event) {
      \u0275\u0275restoreView(_r4);
      const processedItem_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onItemMouseEnter({
        $event,
        processedItem: processedItem_r3
      }));
    });
    \u0275\u0275template(3, TieredMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_Template, 3, 2, "ng-container", 11)(4, TieredMenuSub_Conditional_0_ng_template_2_li_1_ng_container_4_Template, 2, 5, "ng-container", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, TieredMenuSub_Conditional_0_ng_template_2_li_1_p_tieredmenusub_5_Template, 1, 12, "p-tieredmenusub", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    const processedItem_r3 = ctx_r4.$implicit;
    const index_r6 = ctx_r4.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("item", \u0275\u0275pureFunction1(23, _c1, processedItem_r3)), ctx_r1.getItemProp(processedItem_r3, "styleClass")));
    \u0275\u0275property("ngStyle", ctx_r1.getItemProp(processedItem_r3, "style"))("pBind", ctx_r1.getPTOptions(processedItem_r3, index_r6, "item"))("pTooltip", ctx_r1.getItemProp(processedItem_r3, "tooltip"))("tooltipOptions", ctx_r1.getItemProp(processedItem_r3, "tooltipOptions"))("pTooltipUnstyled", ctx_r1.unstyled());
    \u0275\u0275attribute("id", ctx_r1.getItemId(processedItem_r3))("data-p-highlight", ctx_r1.isItemActive(processedItem_r3))("data-p-focused", ctx_r1.isItemFocused(processedItem_r3))("data-p-disabled", ctx_r1.isItemDisabled(processedItem_r3))("aria-label", ctx_r1.getItemLabel(processedItem_r3))("aria-disabled", ctx_r1.isItemDisabled(processedItem_r3) || void 0)("aria-haspopup", ctx_r1.isItemGroup(processedItem_r3) && !ctx_r1.getItemProp(processedItem_r3, "to") ? "menu" : void 0)("aria-expanded", ctx_r1.isItemGroup(processedItem_r3) ? ctx_r1.isItemActive(processedItem_r3) : void 0)("aria-setsize", ctx_r1.getAriaSetSize())("aria-posinset", ctx_r1.getAriaPosInset(index_r6));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.cx("itemContent"));
    \u0275\u0275property("pBind", ctx_r1.getPTOptions(processedItem_r3, index_r6, "itemContent"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.itemTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.itemTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isItemVisible(processedItem_r3) && ctx_r1.isItemGroup(processedItem_r3));
  }
}
function TieredMenuSub_Conditional_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TieredMenuSub_Conditional_0_ng_template_2_li_0_Template, 1, 6, "li", 6)(1, TieredMenuSub_Conditional_0_ng_template_2_li_1_Template, 6, 25, "li", 7);
  }
  if (rf & 2) {
    const processedItem_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r1.isItemVisible(processedItem_r3) && ctx_r1.getItemProp(processedItem_r3, "separator"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isItemVisible(processedItem_r3) && !ctx_r1.getItemProp(processedItem_r3, "separator"));
  }
}
function TieredMenuSub_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ul", 4, 0);
    \u0275\u0275listener("keydown", function TieredMenuSub_Conditional_0_Template_ul_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.menuKeydown.emit($event));
    })("focus", function TieredMenuSub_Conditional_0_Template_ul_focus_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.menuFocus.emit($event));
    })("blur", function TieredMenuSub_Conditional_0_Template_ul_blur_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.menuBlur.emit($event));
    })("pMotionOnBeforeEnter", function TieredMenuSub_Conditional_0_Template_ul_pMotionOnBeforeEnter_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBeforeEnter($event));
    })("pMotionOnAfterLeave", function TieredMenuSub_Conditional_0_Template_ul_pMotionOnAfterLeave_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAfterLeave());
    });
    \u0275\u0275template(2, TieredMenuSub_Conditional_0_ng_template_2_Template, 2, 2, "ng-template", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(ctx_r1.inlineStyles);
    \u0275\u0275classMap(ctx_r1.root ? ctx_r1.cx("rootList") : ctx_r1.cx("submenu"));
    \u0275\u0275property("id", ctx_r1.menuId + "_list")("tabindex", ctx_r1.tabindex)("pBind", ctx_r1._ptm(ctx_r1.root ? "rootList" : "submenu"))("pMotion", ctx_r1.root ? true : ctx_r1.visible)("pMotionDisabled", ctx_r1.root)("pMotionAppear", true)("pMotionName", "p-anchored-overlay")("pMotionOptions", ctx_r1.motionOptions);
    \u0275\u0275attribute("aria-label", ctx_r1.ariaLabel)("aria-labelledBy", ctx_r1.ariaLabelledBy)("aria-activedescendant", ctx_r1.focusedItemId)("aria-orientation", "vertical");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.items);
  }
}
var _c4 = ["submenuicon"];
var _c5 = ["item"];
var _c6 = ["rootmenu"];
var _c7 = ["container"];
function TieredMenu_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3, 0);
    \u0275\u0275listener("click", function TieredMenu_Conditional_0_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onOverlayClick($event));
    })("pMotionOnBeforeEnter", function TieredMenu_Conditional_0_Template_div_pMotionOnBeforeEnter_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onOverlayBeforeEnter($event));
    })("pMotionOnAfterEnter", function TieredMenu_Conditional_0_Template_div_pMotionOnAfterEnter_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onOverlayAfterEnter());
    })("pMotionOnAfterLeave", function TieredMenu_Conditional_0_Template_div_pMotionOnAfterLeave_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onOverlayAfterLeave());
    });
    \u0275\u0275elementStart(2, "p-tieredMenuSub", 4, 1);
    \u0275\u0275listener("itemClick", function TieredMenu_Conditional_0_Template_p_tieredMenuSub_itemClick_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onItemClick($event));
    })("menuFocus", function TieredMenu_Conditional_0_Template_p_tieredMenuSub_menuFocus_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onMenuFocus($event));
    })("menuBlur", function TieredMenu_Conditional_0_Template_p_tieredMenuSub_menuBlur_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onMenuBlur($event));
    })("menuKeydown", function TieredMenu_Conditional_0_Template_p_tieredMenuSub_menuKeydown_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onKeyDown($event));
    })("itemMouseEnter", function TieredMenu_Conditional_0_Template_p_tieredMenuSub_itemMouseEnter_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onItemMouseEnter($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("root"), ctx_r1.styleClass));
    \u0275\u0275property("id", ctx_r1.id)("ngStyle", ctx_r1.style)("pBind", ctx_r1.ptm("root"))("pMotion", ctx_r1.visible || !ctx_r1.popup)("pMotionName", "p-anchored-overlay")("pMotionAppear", true)("pMotionDisabled", !ctx_r1.popup)("pMotionOptions", ctx_r1.computedMotionOptions());
    \u0275\u0275advance(2);
    \u0275\u0275property("root", true)("visible", true)("items", ctx_r1.processedItems)("itemTemplate", ctx_r1.itemTemplate || ctx_r1._itemTemplate)("menuId", ctx_r1.id)("tabindex", !ctx_r1.disabled ? ctx_r1.tabindex : -1)("ariaLabel", ctx_r1.ariaLabel)("ariaLabelledBy", ctx_r1.ariaLabelledBy)("baseZIndex", ctx_r1.baseZIndex)("autoZIndex", ctx_r1.autoZIndex)("autoDisplay", ctx_r1.autoDisplay)("popup", ctx_r1.popup)("focusedItemId", ctx_r1.focused ? ctx_r1.focusedItemId : void 0)("activeItemPath", ctx_r1.activeItemPath())("pt", ctx_r1.pt())("unstyled", ctx_r1.unstyled())("motionOptions", ctx_r1.computedMotionOptions());
  }
}
var inlineStyles = {
  submenu: ({
    instance,
    processedItem
  }) => ({
    display: instance.isItemActive(processedItem) ? "flex" : "none"
  })
};
var classes = {
  root: ({
    instance
  }) => ["p-tieredmenu p-component", {
    "p-tieredmenu-overlay": instance.popup,
    "p-tieredmenu-mobile": instance.queryMatches()
  }],
  start: "p-tieredmenu-start",
  rootList: "p-tieredmenu-root-list",
  item: ({
    instance,
    processedItem
  }) => ["p-tieredmenu-item", {
    "p-tieredmenu-item-active": instance.isItemActive(processedItem),
    "p-focus": instance.isItemFocused(processedItem),
    "p-disabled": instance.isItemDisabled(processedItem)
  }],
  itemContent: "p-tieredmenu-item-content",
  itemLink: "p-tieredmenu-item-link",
  itemIcon: "p-tieredmenu-item-icon",
  itemLabel: "p-tieredmenu-item-label",
  itemBadge: "p-menuitem-badge",
  submenuIcon: "p-tieredmenu-submenu-icon",
  submenu: "p-tieredmenu-submenu",
  separator: "p-tieredmenu-separator",
  end: "p-tieredmenu-end"
};
var TieredMenuStyle = class _TieredMenuStyle extends BaseStyle {
  name = "tieredmenu";
  style = style;
  classes = classes;
  inlineStyles = inlineStyles;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TieredMenuStyle_BaseFactory;
    return function TieredMenuStyle_Factory(__ngFactoryType__) {
      return (\u0275TieredMenuStyle_BaseFactory || (\u0275TieredMenuStyle_BaseFactory = \u0275\u0275getInheritedFactory(_TieredMenuStyle)))(__ngFactoryType__ || _TieredMenuStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TieredMenuStyle,
    factory: _TieredMenuStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TieredMenuStyle, [{
    type: Injectable
  }], null, null);
})();
var TieredMenuClasses;
(function(TieredMenuClasses2) {
  TieredMenuClasses2["root"] = "p-tieredmenu";
  TieredMenuClasses2["start"] = "p-tieredmenu-start";
  TieredMenuClasses2["rootList"] = "p-tieredmenu-root-list";
  TieredMenuClasses2["item"] = "p-tieredmenu-item";
  TieredMenuClasses2["itemContent"] = "p-tieredmenu-item-content";
  TieredMenuClasses2["itemLink"] = "p-tieredmenu-item-link";
  TieredMenuClasses2["itemIcon"] = "p-tieredmenu-item-icon";
  TieredMenuClasses2["itemLabel"] = "p-tieredmenu-item-label";
  TieredMenuClasses2["submenuIcon"] = "p-tieredmenu-submenu-icon";
  TieredMenuClasses2["submenu"] = "p-tieredmenu-submenu";
  TieredMenuClasses2["separator"] = "p-tieredmenu-separator";
  TieredMenuClasses2["end"] = "p-tieredmenu-end";
})(TieredMenuClasses || (TieredMenuClasses = {}));
var TIEREDMENU_INSTANCE = new InjectionToken("TIEREDMENU_INSTANCE");
var TIEREDMENUSUB_INSTANCE = new InjectionToken("TIEREDMENUSUB_INSTANCE");
var TieredMenuSub = class _TieredMenuSub extends BaseComponent {
  el;
  renderer;
  tieredMenu;
  get visible() {
    return this._visible;
  }
  set visible(value) {
    this._visible = value;
    if (this._visible || this.root) {
      this.render.set(true);
    }
  }
  items;
  itemTemplate;
  root = false;
  autoDisplay;
  autoZIndex = true;
  baseZIndex = 0;
  popup;
  menuId;
  ariaLabel;
  ariaLabelledBy;
  level = 0;
  focusedItemId;
  activeItemPath = input([], ...ngDevMode ? [{
    debugName: "activeItemPath"
  }] : (
    /* istanbul ignore next */
    []
  ));
  motionOptions;
  tabindex = 0;
  inlineStyles;
  itemClick = new EventEmitter();
  itemMouseEnter = new EventEmitter();
  menuFocus = new EventEmitter();
  menuBlur = new EventEmitter();
  menuKeydown = new EventEmitter();
  sublistViewChild;
  render = signal(false, ...ngDevMode ? [{
    debugName: "render"
  }] : (
    /* istanbul ignore next */
    []
  ));
  _componentStyle = inject(TieredMenuStyle);
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  $pcTieredMenu = inject(TIEREDMENU_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  $pcTieredMenuSub = inject(TIEREDMENUSUB_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  _visible = false;
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  constructor(el, renderer, tieredMenu) {
    super();
    this.el = el;
    this.renderer = renderer;
    this.tieredMenu = tieredMenu;
  }
  positionSubmenu(sublist) {
    if (isPlatformBrowser(this.tieredMenu.platformId)) {
      if (sublist) {
        Zt(sublist, this.level);
      }
    }
  }
  getItemProp(processedItem, name, params = null) {
    return processedItem && processedItem.item ? m(processedItem.item[name], params) : void 0;
  }
  getItemId(processedItem) {
    return processedItem.item?.id ?? `${this.menuId}_${processedItem.key}`;
  }
  getItemKey(processedItem) {
    return this.getItemId(processedItem);
  }
  getItemLabel(processedItem) {
    return this.getItemProp(processedItem, "label");
  }
  getAriaSetSize() {
    return this.items.filter((processedItem) => this.isItemVisible(processedItem) && !this.getItemProp(processedItem, "separator")).length;
  }
  getAriaPosInset(index) {
    return index - this.items.slice(0, index).filter((processedItem) => {
      const isItemVisible = this.isItemVisible(processedItem);
      const isVisibleSeparator = isItemVisible && this.getItemProp(processedItem, "separator");
      return !isItemVisible || isVisibleSeparator;
    }).length + 1;
  }
  isItemVisible(processedItem) {
    return this.getItemProp(processedItem, "visible") !== false;
  }
  isItemActive(processedItem) {
    if (this.activeItemPath()) {
      return this.activeItemPath().some((path) => path.key === processedItem.key);
    }
    return false;
  }
  isItemDisabled(processedItem) {
    return this.getItemProp(processedItem, "disabled");
  }
  isItemFocused(processedItem) {
    return this.focusedItemId === this.getItemId(processedItem);
  }
  isItemGroup(processedItem) {
    return s(processedItem.items);
  }
  // TODO: will be removed later. Helper method to get PT from parent ContextMenu if available, otherwise use own PT
  _ptm(section, options) {
    return this.$pcTieredMenu ? this.$pcTieredMenu.ptm(section, options) : this.ptm(section, options);
  }
  getPTOptions(processedItem, index, key) {
    return this._ptm(key, {
      context: {
        item: processedItem.item,
        index,
        active: this.isItemActive(processedItem),
        focused: this.isItemFocused(processedItem),
        disabled: this.isItemDisabled(processedItem)
      }
    });
  }
  onItemMouseEnter(param) {
    if (this.autoDisplay) {
      const {
        event,
        processedItem
      } = param;
      this.itemMouseEnter.emit({
        originalEvent: event,
        processedItem
      });
    }
  }
  onItemClick(event, processedItem) {
    this.getItemProp(processedItem, "command", {
      originalEvent: event,
      item: processedItem.item
    });
    this.itemClick.emit({
      originalEvent: event,
      processedItem,
      isFocus: true
    });
  }
  onBeforeEnter(event) {
    this.positionSubmenu(event.element);
  }
  onAfterLeave() {
    this.render.set(false);
  }
  static \u0275fac = function TieredMenuSub_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TieredMenuSub)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(forwardRef(() => TieredMenu)));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _TieredMenuSub,
    selectors: [["p-tieredMenuSub"], ["p-tieredmenusub"]],
    viewQuery: function TieredMenuSub_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sublistViewChild = _t.first);
      }
    },
    inputs: {
      visible: "visible",
      items: "items",
      itemTemplate: "itemTemplate",
      root: [2, "root", "root", booleanAttribute],
      autoDisplay: [2, "autoDisplay", "autoDisplay", booleanAttribute],
      autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
      baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
      popup: [2, "popup", "popup", booleanAttribute],
      menuId: "menuId",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      level: [2, "level", "level", numberAttribute],
      focusedItemId: "focusedItemId",
      activeItemPath: [1, "activeItemPath"],
      motionOptions: "motionOptions",
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      inlineStyles: "inlineStyles"
    },
    outputs: {
      itemClick: "itemClick",
      itemMouseEnter: "itemMouseEnter",
      menuFocus: "menuFocus",
      menuBlur: "menuBlur",
      menuKeydown: "menuKeydown"
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: TIEREDMENUSUB_INSTANCE,
      useExisting: forwardRef(() => _TieredMenuSub)
    }, {
      provide: PARENT_INSTANCE,
      useExisting: forwardRef(() => _TieredMenuSub)
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    decls: 1,
    vars: 1,
    consts: [["sublist", ""], ["listItem", ""], ["htmlLabel", ""], ["role", "menu", 3, "class", "id", "tabindex", "pBind", "style", "pMotion", "pMotionDisabled", "pMotionAppear", "pMotionName", "pMotionOptions"], ["role", "menu", 3, "keydown", "focus", "blur", "pMotionOnBeforeEnter", "pMotionOnAfterLeave", "id", "tabindex", "pBind", "pMotion", "pMotionDisabled", "pMotionAppear", "pMotionName", "pMotionOptions"], ["ngFor", "", 3, "ngForOf"], ["role", "separator", 3, "style", "class", "pBind", 4, "ngIf"], ["role", "menuitem", 3, "ngStyle", "class", "pBind", "pTooltip", "tooltipOptions", "pTooltipUnstyled", 4, "ngIf"], ["role", "separator", 3, "pBind"], ["role", "menuitem", 3, "ngStyle", "pBind", "pTooltip", "tooltipOptions", "pTooltipUnstyled"], [3, "click", "mouseenter", "pBind"], [4, "ngIf"], [3, "items", "itemTemplate", "autoDisplay", "menuId", "visible", "activeItemPath", "focusedItemId", "ariaLabelledBy", "level", "pt", "motionOptions", "unstyled", "itemClick", "itemMouseEnter", 4, "ngIf"], ["pRipple", "", 3, "target", "class", "ngStyle", "pBind", 4, "ngIf"], ["pRipple", "", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "class", "ngStyle", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "pBind", 4, "ngIf"], ["pRipple", "", 3, "target", "ngStyle", "pBind"], [3, "class", "ngStyle", "pBind", 4, "ngIf"], [3, "class", "ngStyle", "pBind", 4, "ngIf", "ngIfElse"], [3, "class", 4, "ngIf"], [3, "ngStyle", "pBind"], [3, "ngStyle", "innerHTML", "pBind"], ["data-p-icon", "angle-right", 3, "class", "pBind", 4, "ngIf"], [4, "ngTemplateOutlet"], ["data-p-icon", "angle-right", 3, "pBind"], [3, "aria-hidden"], ["pRipple", "", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "ngStyle", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "pBind"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "itemClick", "itemMouseEnter", "items", "itemTemplate", "autoDisplay", "menuId", "visible", "activeItemPath", "focusedItemId", "ariaLabelledBy", "level", "pt", "motionOptions", "unstyled"]],
    template: function TieredMenuSub_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, TieredMenuSub_Conditional_0_Template, 3, 17, "ul", 3);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.render() ? 0 : -1);
      }
    },
    dependencies: [_TieredMenuSub, CommonModule, NgForOf, NgIf, NgTemplateOutlet, NgStyle, RouterModule, RouterLink, RouterLinkActive, Ripple, TooltipModule, Tooltip, Bind, AngleRightIcon, SharedModule, BindModule, MotionModule, MotionDirective],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TieredMenuSub, [{
    type: Component,
    args: [{
      selector: "p-tieredMenuSub, p-tieredmenusub",
      standalone: true,
      imports: [CommonModule, RouterModule, Ripple, TooltipModule, AngleRightIcon, SharedModule, BindModule, MotionModule],
      template: `
        @if (render()) {
            <ul
                #sublist
                role="menu"
                [class]="root ? cx('rootList') : cx('submenu')"
                [id]="menuId + '_list'"
                [tabindex]="tabindex"
                [attr.aria-label]="ariaLabel"
                [attr.aria-labelledBy]="ariaLabelledBy"
                [attr.aria-activedescendant]="focusedItemId"
                [attr.aria-orientation]="'vertical'"
                [pBind]="_ptm(root ? 'rootList' : 'submenu')"
                (keydown)="menuKeydown.emit($event)"
                (focus)="menuFocus.emit($event)"
                (blur)="menuBlur.emit($event)"
                [style]="inlineStyles"
                [pMotion]="root ? true : visible"
                [pMotionDisabled]="root"
                [pMotionAppear]="true"
                [pMotionName]="'p-anchored-overlay'"
                [pMotionOptions]="motionOptions"
                (pMotionOnBeforeEnter)="onBeforeEnter($event)"
                (pMotionOnAfterLeave)="onAfterLeave()"
            >
                <ng-template ngFor let-processedItem [ngForOf]="items" let-index="index">
                    <li
                        *ngIf="isItemVisible(processedItem) && getItemProp(processedItem, 'separator')"
                        [attr.id]="getItemId(processedItem)"
                        [style]="getItemProp(processedItem, 'style')"
                        [class]="cn(cx('separator'), getItemProp(processedItem, 'class'), getItemProp(processedItem, 'styleClass'))"
                        role="separator"
                        [pBind]="_ptm('separator')"
                    ></li>
                    <li
                        #listItem
                        *ngIf="isItemVisible(processedItem) && !getItemProp(processedItem, 'separator')"
                        role="menuitem"
                        [attr.id]="getItemId(processedItem)"
                        [attr.data-p-highlight]="isItemActive(processedItem)"
                        [attr.data-p-focused]="isItemFocused(processedItem)"
                        [attr.data-p-disabled]="isItemDisabled(processedItem)"
                        [attr.aria-label]="getItemLabel(processedItem)"
                        [attr.aria-disabled]="isItemDisabled(processedItem) || undefined"
                        [attr.aria-haspopup]="isItemGroup(processedItem) && !getItemProp(processedItem, 'to') ? 'menu' : undefined"
                        [attr.aria-expanded]="isItemGroup(processedItem) ? isItemActive(processedItem) : undefined"
                        [attr.aria-setsize]="getAriaSetSize()"
                        [attr.aria-posinset]="getAriaPosInset(index)"
                        [ngStyle]="getItemProp(processedItem, 'style')"
                        [class]="cn(cx('item', { processedItem }), getItemProp(processedItem, 'styleClass'))"
                        [pBind]="getPTOptions(processedItem, index, 'item')"
                        [pTooltip]="getItemProp(processedItem, 'tooltip')"
                        [tooltipOptions]="getItemProp(processedItem, 'tooltipOptions')"
                        [pTooltipUnstyled]="unstyled()"
                    >
                        <div [class]="cx('itemContent')" [pBind]="getPTOptions(processedItem, index, 'itemContent')" (click)="onItemClick($event, processedItem)" (mouseenter)="onItemMouseEnter({ $event, processedItem })">
                            <ng-container *ngIf="!itemTemplate">
                                <a
                                    *ngIf="!getItemProp(processedItem, 'routerLink')"
                                    [attr.href]="getItemProp(processedItem, 'url')"
                                    [attr.data-automationid]="getItemProp(processedItem, 'automationId')"
                                    [attr.title]="getItemProp(processedItem, 'title')"
                                    [target]="getItemProp(processedItem, 'target')"
                                    [class]="cn(cx('itemLink'), getItemProp(processedItem, 'linkClass'))"
                                    [ngStyle]="getItemProp(processedItem, 'linkStyle')"
                                    [attr.tabindex]="-1"
                                    [pBind]="getPTOptions(processedItem, index, 'itemLink')"
                                    pRipple
                                >
                                    <span
                                        *ngIf="getItemProp(processedItem, 'icon')"
                                        [class]="cn(cx('itemIcon'), getItemProp(processedItem, 'icon'), getItemProp(processedItem, 'iconClass'))"
                                        [ngStyle]="getItemProp(processedItem, 'iconStyle')"
                                        [pBind]="getPTOptions(processedItem, index, 'itemIcon')"
                                        [attr.tabindex]="-1"
                                    >
                                    </span>
                                    <span
                                        *ngIf="getItemProp(processedItem, 'escape'); else htmlLabel"
                                        [class]="cn(cx('itemLabel'), getItemProp(processedItem, 'labelClass'))"
                                        [ngStyle]="getItemProp(processedItem, 'labelStyle')"
                                        [pBind]="getPTOptions(processedItem, index, 'itemLabel')"
                                    >
                                        {{ getItemLabel(processedItem) }}
                                    </span>
                                    <ng-template #htmlLabel>
                                        <span
                                            [class]="cn(cx('itemLabel'), getItemProp(processedItem, 'labelClass'))"
                                            [ngStyle]="getItemProp(processedItem, 'labelStyle')"
                                            [innerHTML]="getItemLabel(processedItem)"
                                            [pBind]="getPTOptions(processedItem, index, 'itemLabel')"
                                        ></span>
                                    </ng-template>
                                    <span *ngIf="getItemProp(processedItem, 'badge')" [class]="cn(cx('itemBadge'), getItemProp(processedItem, 'badgeStyleClass'))">{{ getItemProp(processedItem, 'badge') }}</span>

                                    <ng-container *ngIf="isItemGroup(processedItem)">
                                        <svg
                                            data-p-icon="angle-right"
                                            *ngIf="!tieredMenu.submenuIconTemplate && !tieredMenu._submenuIconTemplate"
                                            [class]="cx('submenuIcon')"
                                            [pBind]="getPTOptions(processedItem, index, 'submenuIcon')"
                                            [attr.aria-hidden]="true"
                                        />
                                        <ng-template *ngTemplateOutlet="tieredMenu.submenuIconTemplate || tieredMenu._submenuIconTemplate" [attr.aria-hidden]="true"></ng-template>
                                    </ng-container>
                                </a>
                                <a
                                    *ngIf="getItemProp(processedItem, 'routerLink')"
                                    [routerLink]="getItemProp(processedItem, 'routerLink')"
                                    [attr.data-automationid]="getItemProp(processedItem, 'automationId')"
                                    [attr.title]="getItemProp(processedItem, 'title')"
                                    [attr.tabindex]="-1"
                                    [queryParams]="getItemProp(processedItem, 'queryParams')"
                                    [routerLinkActive]="'p-tieredmenu-item-link-active'"
                                    [routerLinkActiveOptions]="getItemProp(processedItem, 'routerLinkActiveOptions') || { exact: false }"
                                    [target]="getItemProp(processedItem, 'target')"
                                    [class]="cn(cx('itemLink'), getItemProp(processedItem, 'linkClass'))"
                                    [ngStyle]="getItemProp(processedItem, 'linkStyle')"
                                    [fragment]="getItemProp(processedItem, 'fragment')"
                                    [queryParamsHandling]="getItemProp(processedItem, 'queryParamsHandling')"
                                    [preserveFragment]="getItemProp(processedItem, 'preserveFragment')"
                                    [skipLocationChange]="getItemProp(processedItem, 'skipLocationChange')"
                                    [replaceUrl]="getItemProp(processedItem, 'replaceUrl')"
                                    [state]="getItemProp(processedItem, 'state')"
                                    [pBind]="getPTOptions(processedItem, index, 'itemLink')"
                                    pRipple
                                >
                                    <span
                                        *ngIf="getItemProp(processedItem, 'icon')"
                                        [class]="cn(cx('itemIcon'), getItemProp(processedItem, 'icon'), getItemProp(processedItem, 'iconClass'))"
                                        [ngStyle]="getItemProp(processedItem, 'iconStyle')"
                                        [pBind]="getPTOptions(processedItem, index, 'itemIcon')"
                                        [attr.aria-hidden]="true"
                                        [attr.tabindex]="-1"
                                    >
                                    </span>
                                    <span
                                        *ngIf="getItemProp(processedItem, 'escape'); else htmlLabel"
                                        [class]="cn(cx('itemLabel'), getItemProp(processedItem, 'labelClass'))"
                                        [ngStyle]="getItemProp(processedItem, 'labelStyle')"
                                        [pBind]="getPTOptions(processedItem, index, 'itemLabel')"
                                    >
                                        {{ getItemLabel(processedItem) }}
                                    </span>
                                    <ng-template #htmlLabel>
                                        <span
                                            [class]="cn(cx('itemLabel'), getItemProp(processedItem, 'labelClass'))"
                                            [ngStyle]="getItemProp(processedItem, 'labelStyle')"
                                            [innerHTML]="getItemLabel(processedItem)"
                                            [pBind]="getPTOptions(processedItem, index, 'itemLabel')"
                                        ></span>
                                    </ng-template>
                                    <span *ngIf="getItemProp(processedItem, 'badge')" [class]="cn(cx('itemBadge'), getItemProp(processedItem, 'badgeStyleClass'))">{{ getItemProp(processedItem, 'badge') }}</span>

                                    <ng-container *ngIf="isItemGroup(processedItem)">
                                        <svg
                                            data-p-icon="angle-right"
                                            *ngIf="!tieredMenu.submenuIconTemplate && !tieredMenu._submenuIconTemplate"
                                            [class]="cx('submenuIcon')"
                                            [pBind]="getPTOptions(processedItem, index, 'submenuIcon')"
                                            [attr.aria-hidden]="true"
                                        />
                                        <ng-template *ngTemplateOutlet="tieredMenu.submenuIconTemplate || tieredMenu._submenuIconTemplate" [attr.aria-hidden]="true"></ng-template>
                                    </ng-container>
                                </a>
                            </ng-container>
                            <ng-container *ngIf="itemTemplate">
                                <ng-template *ngTemplateOutlet="itemTemplate; context: { $implicit: processedItem.item, hasSubmenu: getItemProp(processedItem, 'items') }"></ng-template>
                            </ng-container>
                        </div>

                        <p-tieredmenusub
                            *ngIf="isItemVisible(processedItem) && isItemGroup(processedItem)"
                            [items]="processedItem.items"
                            [itemTemplate]="itemTemplate"
                            [autoDisplay]="autoDisplay"
                            [menuId]="menuId"
                            [visible]="isItemActive(processedItem) && isItemGroup(processedItem)"
                            [activeItemPath]="activeItemPath()"
                            [focusedItemId]="focusedItemId"
                            [ariaLabelledBy]="getItemId(processedItem)"
                            [level]="level + 1"
                            (itemClick)="itemClick.emit($event)"
                            (itemMouseEnter)="onItemMouseEnter($event)"
                            [pt]="pt()"
                            [motionOptions]="motionOptions"
                            [unstyled]="unstyled()"
                        ></p-tieredmenusub>
                    </li>
                </ng-template>
            </ul>
        }
    `,
      encapsulation: ViewEncapsulation.None,
      providers: [{
        provide: TIEREDMENUSUB_INSTANCE,
        useExisting: forwardRef(() => TieredMenuSub)
      }, {
        provide: PARENT_INSTANCE,
        useExisting: forwardRef(() => TieredMenuSub)
      }],
      hostDirectives: [Bind]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: TieredMenu,
    decorators: [{
      type: Inject,
      args: [forwardRef(() => TieredMenu)]
    }]
  }], {
    visible: [{
      type: Input
    }],
    items: [{
      type: Input
    }],
    itemTemplate: [{
      type: Input
    }],
    root: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autoDisplay: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
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
    popup: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    menuId: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    level: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    focusedItemId: [{
      type: Input
    }],
    activeItemPath: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "activeItemPath",
        required: false
      }]
    }],
    motionOptions: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    inlineStyles: [{
      type: Input
    }],
    itemClick: [{
      type: Output
    }],
    itemMouseEnter: [{
      type: Output
    }],
    menuFocus: [{
      type: Output
    }],
    menuBlur: [{
      type: Output
    }],
    menuKeydown: [{
      type: Output
    }],
    sublistViewChild: [{
      type: ViewChild,
      args: ["sublist"]
    }]
  });
})();
var TieredMenu = class _TieredMenu extends BaseComponent {
  overlayService;
  componentName = "TieredMenu";
  /**
   * An array of menuitems.
   * @group Props
   */
  set model(value) {
    this._model = value;
    this._processedItems = this.createProcessedItems(this._model || []);
  }
  get model() {
    return this._model;
  }
  /**
   * Defines if menu would displayed as a popup.
   * @group Props
   */
  popup;
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
   * The breakpoint to define the maximum width boundary.
   * @group Props
   */
  breakpoint = "960px";
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
   * Whether to show a root submenu on mouse over.
   * @defaultValue true
   * @group Props
   */
  autoDisplay = true;
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
   * Current id state as a string.
   * @group Props
   */
  id;
  /**
   * Defines a string value that labels an interactive element.
   * @group Props
   */
  ariaLabel;
  /**
   * Identifier of the underlying input element.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * When present, it specifies that the component should be disabled.
   * @group Props
   */
  disabled = false;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = 0;
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
  computedMotionOptions = computed(() => {
    return __spreadValues(__spreadValues({}, this.ptm("motion")), this.motionOptions());
  }, ...ngDevMode ? [{
    debugName: "computedMotionOptions"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Callback to invoke when overlay menu is shown.
   * @group Emits
   */
  onShow = new EventEmitter();
  /**
   * Callback to invoke when overlay menu is hidden.
   * @group Emits
   */
  onHide = new EventEmitter();
  rootmenu;
  containerViewChild;
  /**
   * Custom submenu icon template.
   * @group Templates
   */
  submenuIconTemplate;
  /**
   * Custom item template.
   * @param {TieredMenuItemTemplateContext} context - item context.
   * @see {@link TieredMenuItemTemplateContext}
   * @group Templates
   */
  itemTemplate;
  templates;
  $appendTo = computed(() => this.appendTo() || this.config.overlayAppendTo(), ...ngDevMode ? [{
    debugName: "$appendTo"
  }] : (
    /* istanbul ignore next */
    []
  ));
  render = signal(false, ...ngDevMode ? [{
    debugName: "render"
  }] : (
    /* istanbul ignore next */
    []
  ));
  container;
  outsideClickListener;
  resizeListener;
  scrollHandler;
  target;
  relatedTarget;
  visible;
  dirty = false;
  focused = false;
  activeItemPath = signal([], ...ngDevMode ? [{
    debugName: "activeItemPath"
  }] : (
    /* istanbul ignore next */
    []
  ));
  number = signal(0, ...ngDevMode ? [{
    debugName: "number"
  }] : (
    /* istanbul ignore next */
    []
  ));
  focusedItemInfo = signal({
    index: -1,
    level: 0,
    parentKey: "",
    item: null
  }, ...ngDevMode ? [{
    debugName: "focusedItemInfo"
  }] : (
    /* istanbul ignore next */
    []
  ));
  searchValue = "";
  searchTimeout;
  _processedItems;
  _model;
  _componentStyle = inject(TieredMenuStyle);
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  matchMediaListener;
  query;
  queryMatches = signal(false, ...ngDevMode ? [{
    debugName: "queryMatches"
  }] : (
    /* istanbul ignore next */
    []
  ));
  _submenuIconTemplate;
  _itemTemplate;
  get visibleItems() {
    const processedItem = this.activeItemPath().find((p) => p.key === this.focusedItemInfo().parentKey);
    return processedItem ? processedItem.items : this.processedItems;
  }
  get processedItems() {
    if (!this._processedItems || !this._processedItems.length) {
      this._processedItems = this.createProcessedItems(this.model || []);
    }
    return this._processedItems;
  }
  get focusedItemId() {
    const focusedItemInfo = this.focusedItemInfo();
    return focusedItemInfo.item?.id ? focusedItemInfo.item.id : focusedItemInfo.index !== -1 ? `${this.id}${s(focusedItemInfo.parentKey) ? "_" + focusedItemInfo.parentKey : ""}_${focusedItemInfo.index}` : null;
  }
  constructor(overlayService) {
    super();
    this.overlayService = overlayService;
    effect(() => {
      const path = this.activeItemPath();
      if (s(path)) {
        this.bindOutsideClickListener();
        this.bindResizeListener();
      } else {
        this.unbindOutsideClickListener();
        this.unbindResizeListener();
      }
    });
  }
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  onInit() {
    this.bindMatchMediaListener();
    this.id = this.id || s2("pn_id_");
  }
  onAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "submenuicon":
          this._submenuIconTemplate = item.template;
          break;
        case "item":
          this._itemTemplate = item.template;
          break;
        default:
          this._itemTemplate = item.template;
          break;
      }
    });
  }
  bindMatchMediaListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.matchMediaListener) {
        const query = window.matchMedia(`(max-width: ${this.breakpoint})`);
        this.query = query;
        this.queryMatches.set(query.matches);
        this.matchMediaListener = () => {
          this.queryMatches.set(query.matches);
        };
        query.addEventListener("change", this.matchMediaListener);
      }
    }
  }
  unbindMatchMediaListener() {
    if (this.matchMediaListener) {
      this.query.removeEventListener("change", this.matchMediaListener);
      this.matchMediaListener = null;
    }
  }
  createProcessedItems(items, level = 0, parent = {}, parentKey = "") {
    const processedItems = [];
    items && items.forEach((item, index) => {
      const key = (parentKey !== "" ? parentKey + "_" : "") + index;
      const newItem = {
        item,
        index,
        level,
        key,
        parent,
        parentKey
      };
      newItem["items"] = this.createProcessedItems(item.items, level + 1, newItem, key);
      processedItems.push(newItem);
    });
    return processedItems;
  }
  getItemProp(item, name) {
    return item ? m(item[name]) : void 0;
  }
  getProccessedItemLabel(processedItem) {
    return processedItem ? this.getItemLabel(processedItem.item) : void 0;
  }
  getItemLabel(item) {
    return this.getItemProp(item, "label");
  }
  isProcessedItemGroup(processedItem) {
    return processedItem && s(processedItem.items);
  }
  isSelected(processedItem) {
    return this.activeItemPath().some((p) => p.key === processedItem.key);
  }
  isValidSelectedItem(processedItem) {
    return this.isValidItem(processedItem) && this.isSelected(processedItem);
  }
  isValidItem(processedItem) {
    return !!processedItem && !this.isItemDisabled(processedItem.item) && !this.isItemSeparator(processedItem.item) && this.isItemVisible(processedItem.item);
  }
  isItemDisabled(item) {
    return this.getItemProp(item, "disabled");
  }
  isItemVisible(item) {
    return this.getItemProp(item, "visible") !== false;
  }
  isItemSeparator(item) {
    return this.getItemProp(item, "separator");
  }
  isItemMatched(processedItem) {
    return this.isValidItem(processedItem) && this.getProccessedItemLabel(processedItem).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase());
  }
  isProccessedItemGroup(processedItem) {
    return processedItem && s(processedItem.items);
  }
  onOverlayClick(event) {
    if (this.popup) {
      this.overlayService.add({
        originalEvent: event,
        target: this.el.nativeElement
      });
    }
  }
  onItemClick(event) {
    const {
      originalEvent,
      processedItem
    } = event;
    const grouped = this.isProcessedItemGroup(processedItem);
    const root = l(processedItem.parent);
    const selected = this.isSelected(processedItem);
    if (selected) {
      const {
        index,
        key,
        level,
        parentKey,
        item
      } = processedItem;
      this.activeItemPath.set(this.activeItemPath().filter((p) => key !== p.key && key.startsWith(p.key)));
      this.focusedItemInfo.set({
        index,
        level,
        parentKey,
        item
      });
      this.dirty = true;
      bt(this.rootmenu?.sublistViewChild?.nativeElement);
    } else {
      if (grouped) {
        this.onItemChange(event);
      } else {
        const rootProcessedItem = root ? processedItem : this.activeItemPath().find((p) => p.parentKey === "");
        this.hide(originalEvent);
        this.changeFocusedItemIndex(originalEvent, rootProcessedItem?.index ?? -1);
        bt(this.rootmenu?.sublistViewChild?.nativeElement);
      }
    }
  }
  onItemMouseEnter(event) {
    if (!Yt()) {
      if (this.dirty) {
        this.onItemChange(event, "hover");
      }
    } else {
      this.onItemChange({
        event,
        processedItem: event.processedItem,
        focus: this.autoDisplay
      }, "hover");
    }
  }
  onKeyDown(event) {
    const metaKey = event.metaKey || event.ctrlKey;
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
      case "Space":
        this.onSpaceKey(event);
        break;
      case "Enter":
        this.onEnterKey(event);
        break;
      case "Escape":
        this.onEscapeKey(event);
        break;
      case "Tab":
        this.onTabKey(event);
        break;
      case "PageDown":
      case "PageUp":
      case "Backspace":
      case "ShiftLeft":
      case "ShiftRight":
        break;
      default:
        if (!metaKey && J(event.key)) {
          this.searchItems(event, event.key);
        }
        break;
    }
  }
  onArrowDownKey(event) {
    const itemIndex = this.focusedItemInfo().index !== -1 ? this.findNextItemIndex(this.focusedItemInfo().index) : this.findFirstFocusedItemIndex();
    this.changeFocusedItemIndex(event, itemIndex);
    event.preventDefault();
  }
  onArrowRightKey(event) {
    const processedItem = this.visibleItems[this.focusedItemInfo().index];
    const grouped = this.isProccessedItemGroup(processedItem);
    const item = processedItem?.item;
    if (grouped) {
      this.onItemChange({
        originalEvent: event,
        processedItem
      });
      this.focusedItemInfo.set({
        index: -1,
        parentKey: processedItem.key,
        item
      });
      this.searchValue = "";
      this.onArrowDownKey(event);
    }
    event.preventDefault();
  }
  onArrowUpKey(event) {
    if (event.altKey) {
      if (this.focusedItemInfo().index !== -1) {
        const processedItem = this.visibleItems[this.focusedItemInfo().index];
        const grouped = this.isProccessedItemGroup(processedItem);
        !grouped && this.onItemChange({
          originalEvent: event,
          processedItem
        });
      }
      this.popup && this.hide(event, true);
      event.preventDefault();
    } else {
      const itemIndex = this.focusedItemInfo().index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo().index) : this.findLastFocusedItemIndex();
      this.changeFocusedItemIndex(event, itemIndex);
      event.preventDefault();
    }
  }
  onArrowLeftKey(event) {
    const processedItem = this.visibleItems[this.focusedItemInfo().index];
    if (!processedItem) {
      event.preventDefault();
      return;
    }
    const parentItem = this.activeItemPath().find((p) => p.key === processedItem.parentKey);
    const root = l(processedItem.parent);
    if (!root) {
      this.focusedItemInfo.set({
        index: -1,
        parentKey: parentItem ? parentItem.parentKey : "",
        item: processedItem.item
      });
      this.searchValue = "";
      this.onArrowDownKey(event);
    }
    const activeItemPath = this.activeItemPath().filter((p) => p.parentKey !== this.focusedItemInfo().parentKey);
    this.activeItemPath.set(activeItemPath);
    event.preventDefault();
  }
  onHomeKey(event) {
    this.changeFocusedItemIndex(event, this.findFirstItemIndex());
    event.preventDefault();
  }
  onEndKey(event) {
    this.changeFocusedItemIndex(event, this.findLastItemIndex());
    event.preventDefault();
  }
  onSpaceKey(event) {
    this.onEnterKey(event);
  }
  onEscapeKey(event) {
    this.hide(event, true);
    this.focusedItemInfo().index = this.findFirstFocusedItemIndex();
    event.preventDefault();
  }
  onTabKey(event) {
    if (this.focusedItemInfo().index !== -1) {
      const processedItem = this.visibleItems[this.focusedItemInfo().index];
      const grouped = this.isProccessedItemGroup(processedItem);
      !grouped && this.onItemChange({
        originalEvent: event,
        processedItem
      });
    }
    this.hide();
  }
  onEnterKey(event) {
    if (this.focusedItemInfo().index !== -1) {
      const element = Z(this.rootmenu?.el?.nativeElement, `li[id="${`${this.focusedItemId}`}"]`);
      const anchorElement = element && (Z(element, '[data-pc-section="itemlink"]') || Z(element, "a,button"));
      anchorElement ? anchorElement.click() : element && element.click();
      if (!this.popup) {
        const processedItem = this.visibleItems[this.focusedItemInfo().index];
        const grouped = this.isProccessedItemGroup(processedItem);
        !grouped && (this.focusedItemInfo().index = this.findFirstFocusedItemIndex());
      }
    }
    event.preventDefault();
  }
  onItemChange(event, type) {
    const {
      processedItem,
      isFocus
    } = event;
    if (l(processedItem)) return;
    const {
      index,
      key,
      level,
      parentKey,
      items,
      item
    } = processedItem;
    const grouped = s(items);
    const activeItemPath = this.activeItemPath().filter((p) => p.parentKey !== parentKey && p.parentKey !== key);
    grouped && activeItemPath.push(processedItem);
    this.focusedItemInfo.set({
      index,
      level,
      parentKey,
      item
    });
    grouped && (this.dirty = true);
    isFocus && bt(this.rootmenu?.sublistViewChild?.nativeElement);
    if (type === "hover" && this.queryMatches()) {
      return;
    }
    this.activeItemPath.set(activeItemPath);
  }
  onMenuFocus(event) {
    this.focused = true;
    if (this.focusedItemInfo().index === -1 && !this.popup) {
    }
  }
  onMenuBlur(event) {
    this.focused = false;
    this.focusedItemInfo.set({
      index: -1,
      level: 0,
      parentKey: "",
      item: null
    });
    this.searchValue = "";
    this.dirty = false;
  }
  onOverlayBeforeEnter(event) {
    if (this.popup) {
      this.container = event.element;
      T(this.container, {
        position: "absolute"
      });
      this.moveOnTop();
      this.onShow.emit({});
      this.$attrSelector && this.container?.setAttribute(this.$attrSelector, "");
      this.appendOverlay();
      this.alignOverlay();
    }
  }
  onOverlayAfterEnter() {
    if (this.popup) {
      this.bindOutsideClickListener();
      this.bindResizeListener();
      this.bindScrollListener();
      this.scrollInView();
    }
    bt(this.rootmenu?.sublistViewChild?.nativeElement);
  }
  onOverlayAfterLeave() {
    this.restoreOverlayAppend();
    this.onOverlayHide();
    this.render.set(false);
    this.onHide.emit({});
  }
  relativeAlign = false;
  alignOverlay() {
    if (this.container && this.target) {
      if (this.relativeAlign) j(this.container, this.target);
      else V2(this.container, this.target);
      const targetWidth = C(this.target);
      if (targetWidth > C(this.container)) {
        this.container.style.minWidth = C(this.target) + "px";
      }
    }
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
  restoreOverlayAppend() {
    if (this.container && this.$appendTo() !== "self") {
      ut(this.el.nativeElement, this.container);
    }
  }
  moveOnTop() {
    if (this.autoZIndex) {
      zindexutils.set("menu", this.container, this.baseZIndex + this.config.zIndex.menu);
    }
  }
  /**
   * Hides the popup menu.
   * @group Method
   */
  hide(event, isFocus) {
    if (this.popup) {
      this.onHide.emit({});
      this.visible = false;
    }
    this.activeItemPath.set([]);
    this.focusedItemInfo.set({
      index: -1,
      level: 0,
      parentKey: ""
    });
    isFocus && bt(this.relatedTarget || this.target || this.rootmenu?.sublistViewChild?.nativeElement);
    this.dirty = false;
  }
  /**
   * Toggles the visibility of the popup menu.
   * @param {Event} event - Browser event.
   * @group Method
   */
  toggle(event) {
    this.visible ? this.hide(event, true) : this.show(event);
  }
  /**
   * Displays the popup menu.
   * @param {Event} even - Browser event.
   * @group Method
   */
  show(event, isFocus) {
    if (this.popup) {
      this.visible = true;
      this.target = this.target || event.currentTarget;
      this.relatedTarget = event.relatedTarget || null;
      this.relativeAlign = event?.relativeAlign || null;
    }
    this.render.set(true);
    this.focusedItemInfo.set({
      index: -1,
      level: 0,
      parentKey: ""
    });
    isFocus && bt(this.rootmenu?.sublistViewChild?.nativeElement);
    this.cd.markForCheck();
  }
  searchItems(event, char) {
    this.searchValue = (this.searchValue || "") + char;
    let itemIndex = -1;
    let matched = false;
    if (this.focusedItemInfo().index !== -1) {
      itemIndex = this.visibleItems.slice(this.focusedItemInfo().index).findIndex((processedItem) => this.isItemMatched(processedItem));
      itemIndex = itemIndex === -1 ? this.visibleItems.slice(0, this.focusedItemInfo().index).findIndex((processedItem) => this.isItemMatched(processedItem)) : itemIndex + this.focusedItemInfo().index;
    } else {
      itemIndex = this.visibleItems.findIndex((processedItem) => this.isItemMatched(processedItem));
    }
    if (itemIndex !== -1) {
      matched = true;
    }
    if (itemIndex === -1 && this.focusedItemInfo().index === -1) {
      itemIndex = this.findFirstFocusedItemIndex();
    }
    if (itemIndex !== -1) {
      this.changeFocusedItemIndex(event, itemIndex);
    }
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
    this.searchTimeout = setTimeout(() => {
      this.searchValue = "";
      this.searchTimeout = null;
    }, 500);
    return matched;
  }
  findLastFocusedItemIndex() {
    const selectedIndex = this.findSelectedItemIndex();
    return selectedIndex < 0 ? this.findLastItemIndex() : selectedIndex;
  }
  findLastItemIndex() {
    return V(this.visibleItems, (processedItem) => this.isValidItem(processedItem));
  }
  findPrevItemIndex(index) {
    const matchedItemIndex = index > 0 ? V(this.visibleItems.slice(0, index), (processedItem) => this.isValidItem(processedItem)) : -1;
    return matchedItemIndex > -1 ? matchedItemIndex : index;
  }
  findNextItemIndex(index) {
    const matchedItemIndex = index < this.visibleItems.length - 1 ? this.visibleItems.slice(index + 1).findIndex((processedItem) => this.isValidItem(processedItem)) : -1;
    return matchedItemIndex > -1 ? matchedItemIndex + index + 1 : index;
  }
  findFirstFocusedItemIndex() {
    const selectedIndex = this.findSelectedItemIndex();
    return selectedIndex < 0 ? this.findFirstItemIndex() : selectedIndex;
  }
  findFirstItemIndex() {
    return this.visibleItems.findIndex((processedItem) => this.isValidItem(processedItem));
  }
  findSelectedItemIndex() {
    return this.visibleItems.findIndex((processedItem) => this.isValidSelectedItem(processedItem));
  }
  changeFocusedItemIndex(event, index) {
    if (this.focusedItemInfo().index !== index) {
      const focusedItemInfo = this.focusedItemInfo();
      this.focusedItemInfo.set(__spreadProps(__spreadValues({}, focusedItemInfo), {
        item: this.visibleItems[index].item,
        index
      }));
      this.scrollInView();
    }
  }
  scrollInView(index = -1) {
    const id = index !== -1 ? `${this.id}_${index}` : this.focusedItemId;
    const element = Z(this.rootmenu?.el?.nativeElement, `li[id="${id}"]`);
    if (element) {
      element.scrollIntoView && element.scrollIntoView({
        block: "nearest",
        inline: "nearest"
      });
    }
  }
  bindScrollListener() {
    if (!this.scrollHandler) {
      this.scrollHandler = new ConnectedOverlayScrollHandler(this.target, (event) => {
        if (this.visible) {
          this.hide(event, true);
        }
      });
    }
    this.scrollHandler.bindScrollListener();
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
      this.scrollHandler = null;
    }
  }
  bindResizeListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.resizeListener) {
        this.resizeListener = this.renderer.listen(this.document.defaultView, "resize", (event) => {
          if (!Yt()) {
            this.hide(event, true);
          }
        });
      }
    }
  }
  bindOutsideClickListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.outsideClickListener) {
        this.outsideClickListener = this.renderer.listen(this.document, "click", (event) => {
          const isOutsideContainer = this.containerViewChild && !this.containerViewChild.nativeElement.contains(event.target);
          const isOutsideTarget = this.popup ? !(this.target && (this.target === event.target || this.target.contains(event.target))) : true;
          if (isOutsideContainer && isOutsideTarget) {
            this.hide();
          }
        });
      }
    }
  }
  unbindOutsideClickListener() {
    if (this.outsideClickListener) {
      document.removeEventListener("click", this.outsideClickListener);
      this.outsideClickListener = null;
    }
  }
  unbindResizeListener() {
    if (this.resizeListener) {
      this.resizeListener();
      this.resizeListener = null;
    }
  }
  onOverlayHide() {
    this.unbindOutsideClickListener();
    this.unbindResizeListener();
    this.unbindScrollListener();
    if (!this.cd.destroyed) {
      this.target = null;
    }
    if (this.container && this.autoZIndex) {
      zindexutils.clear(this.container);
    }
  }
  onDestroy() {
    if (this.popup) {
      if (this.scrollHandler) {
        this.scrollHandler.destroy();
        this.scrollHandler = null;
      }
      this.restoreOverlayAppend();
      this.onOverlayHide();
    }
    this.unbindMatchMediaListener();
  }
  static \u0275fac = function TieredMenu_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TieredMenu)(\u0275\u0275directiveInject(OverlayService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _TieredMenu,
    selectors: [["p-tieredMenu"], ["p-tieredmenu"], ["p-tiered-menu"]],
    contentQueries: function TieredMenu_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c4, 4)(dirIndex, _c5, 4)(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.submenuIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.itemTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function TieredMenu_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c6, 5)(_c7, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.rootmenu = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.containerViewChild = _t.first);
      }
    },
    inputs: {
      model: "model",
      popup: [2, "popup", "popup", booleanAttribute],
      style: "style",
      styleClass: "styleClass",
      breakpoint: "breakpoint",
      autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
      baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
      autoDisplay: [2, "autoDisplay", "autoDisplay", booleanAttribute],
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      id: "id",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      appendTo: [1, "appendTo"],
      motionOptions: [1, "motionOptions"]
    },
    outputs: {
      onShow: "onShow",
      onHide: "onHide"
    },
    features: [\u0275\u0275ProvidersFeature([TieredMenuStyle, {
      provide: TIEREDMENU_INSTANCE,
      useExisting: _TieredMenu
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _TieredMenu
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    decls: 1,
    vars: 1,
    consts: [["container", ""], ["rootmenu", ""], [3, "id", "class", "ngStyle", "pBind", "pMotion", "pMotionName", "pMotionAppear", "pMotionDisabled", "pMotionOptions"], [3, "click", "pMotionOnBeforeEnter", "pMotionOnAfterEnter", "pMotionOnAfterLeave", "id", "ngStyle", "pBind", "pMotion", "pMotionName", "pMotionAppear", "pMotionDisabled", "pMotionOptions"], [3, "itemClick", "menuFocus", "menuBlur", "menuKeydown", "itemMouseEnter", "root", "visible", "items", "itemTemplate", "menuId", "tabindex", "ariaLabel", "ariaLabelledBy", "baseZIndex", "autoZIndex", "autoDisplay", "popup", "focusedItemId", "activeItemPath", "pt", "unstyled", "motionOptions"]],
    template: function TieredMenu_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, TieredMenu_Conditional_0_Template, 4, 27, "div", 2);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.render() || !ctx.popup ? 0 : -1);
      }
    },
    dependencies: [CommonModule, NgStyle, TieredMenuSub, RouterModule, TooltipModule, Bind, SharedModule, BindModule, MotionModule, MotionDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TieredMenu, [{
    type: Component,
    args: [{
      selector: "p-tieredMenu, p-tieredmenu, p-tiered-menu",
      standalone: true,
      imports: [CommonModule, TieredMenuSub, RouterModule, TooltipModule, SharedModule, BindModule, MotionModule],
      template: `
        @if (render() || !popup) {
            <div
                #container
                [id]="id"
                [class]="cn(cx('root'), styleClass)"
                [ngStyle]="style"
                [pBind]="ptm('root')"
                (click)="onOverlayClick($event)"
                [pMotion]="visible || !popup"
                [pMotionName]="'p-anchored-overlay'"
                [pMotionAppear]="true"
                [pMotionDisabled]="!popup"
                [pMotionOptions]="computedMotionOptions()"
                (pMotionOnBeforeEnter)="onOverlayBeforeEnter($event)"
                (pMotionOnAfterEnter)="onOverlayAfterEnter()"
                (pMotionOnAfterLeave)="onOverlayAfterLeave()"
            >
                <p-tieredMenuSub
                    #rootmenu
                    [root]="true"
                    [visible]="true"
                    [items]="processedItems"
                    [itemTemplate]="itemTemplate || _itemTemplate"
                    [menuId]="id"
                    [tabindex]="!disabled ? tabindex : -1"
                    [ariaLabel]="ariaLabel"
                    [ariaLabelledBy]="ariaLabelledBy"
                    [baseZIndex]="baseZIndex"
                    [autoZIndex]="autoZIndex"
                    [autoDisplay]="autoDisplay"
                    [popup]="popup"
                    [focusedItemId]="focused ? focusedItemId : undefined"
                    [activeItemPath]="activeItemPath()"
                    (itemClick)="onItemClick($event)"
                    (menuFocus)="onMenuFocus($event)"
                    (menuBlur)="onMenuBlur($event)"
                    (menuKeydown)="onKeyDown($event)"
                    (itemMouseEnter)="onItemMouseEnter($event)"
                    [pt]="pt()"
                    [unstyled]="unstyled()"
                    [motionOptions]="computedMotionOptions()"
                ></p-tieredMenuSub>
            </div>
        }
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [TieredMenuStyle, {
        provide: TIEREDMENU_INSTANCE,
        useExisting: TieredMenu
      }, {
        provide: PARENT_INSTANCE,
        useExisting: TieredMenu
      }],
      hostDirectives: [Bind]
    }]
  }], () => [{
    type: OverlayService
  }], {
    model: [{
      type: Input
    }],
    popup: [{
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
    breakpoint: [{
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
    autoDisplay: [{
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
    id: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    disabled: [{
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
    onShow: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    rootmenu: [{
      type: ViewChild,
      args: ["rootmenu"]
    }],
    containerViewChild: [{
      type: ViewChild,
      args: ["container"]
    }],
    submenuIconTemplate: [{
      type: ContentChild,
      args: ["submenuicon", {
        descendants: false
      }]
    }],
    itemTemplate: [{
      type: ContentChild,
      args: ["item", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var TieredMenuModule = class _TieredMenuModule {
  static \u0275fac = function TieredMenuModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TieredMenuModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _TieredMenuModule,
    imports: [TieredMenu, SharedModule],
    exports: [TieredMenu, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [TieredMenu, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TieredMenuModule, [{
    type: NgModule,
    args: [{
      imports: [TieredMenu, SharedModule],
      exports: [TieredMenu, SharedModule]
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/splitbutton/index.mjs
var style2 = "\n    .p-splitbutton {\n        display: inline-flex;\n        position: relative;\n        border-radius: dt('splitbutton.border.radius');\n    }\n\n    .p-splitbutton-button.p-button {\n        border-start-end-radius: 0;\n        border-end-end-radius: 0;\n        border-inline-end: 0 none;\n    }\n\n    .p-splitbutton-button.p-button:focus-visible,\n    .p-splitbutton-dropdown.p-button:focus-visible {\n        z-index: 1;\n    }\n\n    .p-splitbutton-button.p-button:not(:disabled):hover,\n    .p-splitbutton-button.p-button:not(:disabled):active {\n        border-inline-end: 0 none;\n    }\n\n    .p-splitbutton-dropdown.p-button {\n        border-start-start-radius: 0;\n        border-end-start-radius: 0;\n    }\n\n    .p-splitbutton .p-menu {\n        min-width: 100%;\n    }\n\n    .p-splitbutton-fluid {\n        display: flex;\n    }\n\n    .p-splitbutton-rounded .p-splitbutton-dropdown.p-button {\n        border-start-end-radius: dt('splitbutton.rounded.border.radius');\n        border-end-end-radius: dt('splitbutton.rounded.border.radius');\n    }\n\n    .p-splitbutton-rounded .p-splitbutton-button.p-button {\n        border-start-start-radius: dt('splitbutton.rounded.border.radius');\n        border-end-start-radius: dt('splitbutton.rounded.border.radius');\n    }\n\n    .p-splitbutton-raised {\n        box-shadow: dt('splitbutton.raised.shadow');\n    }\n";

// node_modules/primeng/fesm2022/primeng-splitbutton.mjs
var _c02 = ["content"];
var _c12 = ["dropdownicon"];
var _c22 = ["defaultbtn"];
var _c32 = ["menu"];
function SplitButton_ng_container_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function SplitButton_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 8);
    \u0275\u0275listener("click", function SplitButton_ng_container_0_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDefaultButtonClick($event));
    });
    \u0275\u0275template(2, SplitButton_ng_container_0_ng_container_2_Template, 1, 0, "ng-container", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("pcButton"));
    \u0275\u0275property("severity", ctx_r1.severity)("text", ctx_r1.text)("outlined", ctx_r1.outlined)("size", ctx_r1.size)("icon", ctx_r1.icon)("iconPos", ctx_r1.iconPos)("disabled", ctx_r1.disabled)("pAutoFocus", ctx_r1.autofocus)("pTooltip", ctx_r1.tooltip)("pTooltipUnstyled", ctx_r1.unstyled())("tooltipOptions", ctx_r1.tooltipOptions)("pt", ctx_r1.ptm("pcButton"))("unstyled", ctx_r1.unstyled());
    \u0275\u0275attribute("tabindex", ctx_r1.tabindex)("aria-label", (ctx_r1.buttonProps == null ? null : ctx_r1.buttonProps["ariaLabel"]) || ctx_r1.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.contentTemplate || ctx_r1._contentTemplate);
  }
}
function SplitButton_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10, 2);
    \u0275\u0275listener("click", function SplitButton_ng_template_1_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDefaultButtonClick($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.cx("pcButton"));
    \u0275\u0275property("severity", ctx_r1.severity)("text", ctx_r1.text)("outlined", ctx_r1.outlined)("size", ctx_r1.size)("icon", ctx_r1.icon)("iconPos", ctx_r1.iconPos)("label", ctx_r1.label)("disabled", ctx_r1.buttonDisabled)("pAutoFocus", ctx_r1.autofocus)("pTooltip", ctx_r1.tooltip)("pTooltipUnstyled", ctx_r1.unstyled())("tooltipOptions", ctx_r1.tooltipOptions)("pt", ctx_r1.ptm("pcButton"))("unstyled", ctx_r1.unstyled());
    \u0275\u0275attribute("tabindex", ctx_r1.tabindex)("aria-label", ctx_r1.buttonProps == null ? null : ctx_r1.buttonProps["ariaLabel"]);
  }
}
function SplitButton_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.dropdownIcon);
  }
}
function SplitButton_ng_container_5__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 12);
  }
}
function SplitButton_ng_container_5_2_ng_template_0_Template(rf, ctx) {
}
function SplitButton_ng_container_5_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SplitButton_ng_container_5_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function SplitButton_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SplitButton_ng_container_5__svg_svg_1_Template, 1, 0, "svg", 11)(2, SplitButton_ng_container_5_2_Template, 1, 0, null, 9);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.dropdownIconTemplate && !ctx_r1._dropdownIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.dropdownIconTemplate || ctx_r1._dropdownIconTemplate);
  }
}
var classes2 = {
  root: ({
    instance
  }) => ["p-splitbutton p-component", {
    "p-splitbutton-raised": instance.raised,
    "p-splitbutton-rounded": instance.rounded,
    "p-splitbutton-outlined": instance.outlined,
    "p-splitbutton-text": instance.text,
    [`p-splitbutton-${instance.size === "small" ? "sm" : "lg"}`]: instance.size
  }],
  pcButton: "p-splitbutton-button",
  pcDropdown: "p-splitbutton-dropdown p-button-icon-only"
};
var SplitButtonStyle = class _SplitButtonStyle extends BaseStyle {
  name = "splitbutton";
  style = style2;
  classes = classes2;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SplitButtonStyle_BaseFactory;
    return function SplitButtonStyle_Factory(__ngFactoryType__) {
      return (\u0275SplitButtonStyle_BaseFactory || (\u0275SplitButtonStyle_BaseFactory = \u0275\u0275getInheritedFactory(_SplitButtonStyle)))(__ngFactoryType__ || _SplitButtonStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _SplitButtonStyle,
    factory: _SplitButtonStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SplitButtonStyle, [{
    type: Injectable
  }], null, null);
})();
var SplitButtonClasses;
(function(SplitButtonClasses2) {
  SplitButtonClasses2["root"] = "p-splitbutton";
  SplitButtonClasses2["pcButton"] = "p-splitbutton-button";
  SplitButtonClasses2["pcDropdown"] = "p-splitbutton-dropdown";
})(SplitButtonClasses || (SplitButtonClasses = {}));
var SPLITBUTTON_INSTANCE = new InjectionToken("SPLITBUTTON_INSTANCE");
var SplitButton = class _SplitButton extends BaseComponent {
  componentName = "SplitButton";
  $pcSplitButton = inject(SPLITBUTTON_INSTANCE, {
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
   * MenuModel instance to define the overlay items.
   * @group Props
   */
  model;
  /**
   * Defines the style of the button.
   * @group Props
   */
  severity;
  /**
   * Add a shadow to indicate elevation.
   * @group Props
   */
  raised = false;
  /**
   * Add a circular border radius to the button.
   * @group Props
   */
  rounded = false;
  /**
   * Add a textual class to the button without a background initially.
   * @group Props
   */
  text = false;
  /**
   * Add a border class without a background initially.
   * @group Props
   */
  outlined = false;
  /**
   * Defines the size of the button.
   * @group Props
   */
  size = null;
  /**
   * Add a plain textual class to the button without a background initially.
   * @group Props
   */
  plain = false;
  /**
   * Name of the icon.
   * @group Props
   */
  icon;
  /**
   * Position of the icon.
   * @group Props
   */
  iconPos = "left";
  /**
   * Text of the button.
   * @group Props
   */
  label;
  /**
   * Tooltip for the main button.
   * @group Props
   */
  tooltip;
  /**
   * Tooltip options for the main button.
   * @group Props
   */
  tooltipOptions;
  /**
   * Class of the element.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Inline style of the overlay menu.
   * @group Props
   */
  menuStyle;
  /**
   * Style class of the overlay menu.
   * @group Props
   */
  menuStyleClass;
  /**
   * Name of the dropdown icon.
   * @group Props
   */
  dropdownIcon;
  /**
   * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @defaultValue 'body'
   * @group Props
   */
  appendTo = input("body", ...ngDevMode ? [{
    debugName: "appendTo"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Indicates the direction of the element.
   * @group Props
   */
  dir;
  /**
   * Defines a string that labels the expand button for accessibility.
   * @group Props
   */
  expandAriaLabel;
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
   * Button Props
   */
  buttonProps;
  /**
   * Menu Button Props
   */
  menuButtonProps;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * When present, it specifies that the element should be disabled.
   * @group Props
   */
  set disabled(v) {
    this._disabled = v ?? false;
    this.buttonDisabled = v ?? false;
    this.menuButtonDisabled = v ?? false;
  }
  get disabled() {
    return this._disabled;
  }
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex;
  /**
   * When present, it specifies that the menu button element should be disabled.
   * @group Props
   */
  menuButtonDisabled = false;
  /**
   * When present, it specifies that the button element should be disabled.
   * @group Props
   */
  buttonDisabled = false;
  /**
   * Callback to invoke when default command button is clicked.
   * @param {MouseEvent} event - Mouse event.
   * @group Emits
   */
  onClick = new EventEmitter();
  /**
   * Callback to invoke when overlay menu is hidden.
   * @group Emits
   */
  onMenuHide = new EventEmitter();
  /**
   * Callback to invoke when overlay menu is shown.
   * @group Emits
   */
  onMenuShow = new EventEmitter();
  /**
   * Callback to invoke when dropdown button is clicked.
   * @param {MouseEvent} event - Mouse event.
   * @group Emits
   */
  onDropdownClick = new EventEmitter();
  buttonViewChild;
  menu;
  /**
   * Custom content template.
   * @group Templates
   */
  contentTemplate;
  /**
   * Custom dropdown icon template.
   * @group Templates
   **/
  dropdownIconTemplate;
  templates;
  ariaId;
  isExpanded = signal(false, ...ngDevMode ? [{
    debugName: "isExpanded"
  }] : (
    /* istanbul ignore next */
    []
  ));
  _disabled;
  _componentStyle = inject(SplitButtonStyle);
  _contentTemplate;
  _dropdownIconTemplate;
  $appendTo = computed(() => this.appendTo() || this.config.overlayAppendTo(), ...ngDevMode ? [{
    debugName: "$appendTo"
  }] : (
    /* istanbul ignore next */
    []
  ));
  onInit() {
    this.ariaId = s2("pn_id_");
  }
  onAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this._contentTemplate = item.template;
          break;
        case "dropdownicon":
          this._dropdownIconTemplate = item.template;
          break;
        default:
          this._contentTemplate = item.template;
          break;
      }
    });
  }
  onDefaultButtonClick(event) {
    this.onClick?.emit(event);
    this.menu?.hide();
  }
  onDropdownButtonClick(event) {
    this.onDropdownClick.emit(event);
    this.menu?.toggle({
      currentTarget: this.el?.nativeElement,
      relativeAlign: this.$appendTo() == "self"
    });
  }
  onDropdownButtonKeydown(event) {
    if (event.code === "ArrowDown" || event.code === "ArrowUp") {
      this.onDropdownButtonClick();
      event.preventDefault();
    }
  }
  onHide() {
    this.isExpanded.set(false);
    this.onMenuHide.emit();
  }
  onShow() {
    this.isExpanded.set(true);
    this.onMenuShow.emit();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SplitButton_BaseFactory;
    return function SplitButton_Factory(__ngFactoryType__) {
      return (\u0275SplitButton_BaseFactory || (\u0275SplitButton_BaseFactory = \u0275\u0275getInheritedFactory(_SplitButton)))(__ngFactoryType__ || _SplitButton);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _SplitButton,
    selectors: [["p-splitbutton"], ["p-splitButton"], ["p-split-button"]],
    contentQueries: function SplitButton_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c02, 4)(dirIndex, _c12, 4)(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.dropdownIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function SplitButton_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c22, 5)(_c32, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.buttonViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.menu = _t.first);
      }
    },
    hostVars: 3,
    hostBindings: function SplitButton_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("data-p-severity", ctx.severity);
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      model: "model",
      severity: "severity",
      raised: [2, "raised", "raised", booleanAttribute],
      rounded: [2, "rounded", "rounded", booleanAttribute],
      text: [2, "text", "text", booleanAttribute],
      outlined: [2, "outlined", "outlined", booleanAttribute],
      size: "size",
      plain: [2, "plain", "plain", booleanAttribute],
      icon: "icon",
      iconPos: "iconPos",
      label: "label",
      tooltip: "tooltip",
      tooltipOptions: "tooltipOptions",
      styleClass: "styleClass",
      menuStyle: "menuStyle",
      menuStyleClass: "menuStyleClass",
      dropdownIcon: "dropdownIcon",
      appendTo: [1, "appendTo"],
      dir: "dir",
      expandAriaLabel: "expandAriaLabel",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      motionOptions: [1, "motionOptions"],
      buttonProps: "buttonProps",
      menuButtonProps: "menuButtonProps",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      disabled: [2, "disabled", "disabled", booleanAttribute],
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      menuButtonDisabled: [2, "menuButtonDisabled", "menuButtonDisabled", booleanAttribute],
      buttonDisabled: [2, "buttonDisabled", "buttonDisabled", booleanAttribute]
    },
    outputs: {
      onClick: "onClick",
      onMenuHide: "onMenuHide",
      onMenuShow: "onMenuShow",
      onDropdownClick: "onDropdownClick"
    },
    features: [\u0275\u0275ProvidersFeature([SplitButtonStyle, {
      provide: SPLITBUTTON_INSTANCE,
      useExisting: _SplitButton
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _SplitButton
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    decls: 8,
    vars: 27,
    consts: [["defaultButton", ""], ["menu", ""], ["defaultbtn", ""], [4, "ngIf", "ngIfElse"], ["type", "button", "pButton", "", "pRipple", "", 3, "click", "keydown", "size", "severity", "text", "outlined", "disabled", "pt", "unstyled"], [3, "class", 4, "ngIf"], [4, "ngIf"], [3, "onHide", "onShow", "id", "popup", "model", "styleClass", "appendTo", "motionOptions", "pt", "unstyled"], ["type", "button", "pButton", "", "pRipple", "", 3, "click", "severity", "text", "outlined", "size", "icon", "iconPos", "disabled", "pAutoFocus", "pTooltip", "pTooltipUnstyled", "tooltipOptions", "pt", "unstyled"], [4, "ngTemplateOutlet"], ["type", "button", "pButton", "", "pRipple", "", 3, "click", "severity", "text", "outlined", "size", "icon", "iconPos", "label", "disabled", "pAutoFocus", "pTooltip", "pTooltipUnstyled", "tooltipOptions", "pt", "unstyled"], ["data-p-icon", "chevron-down", 4, "ngIf"], ["data-p-icon", "chevron-down"]],
    template: function SplitButton_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SplitButton_ng_container_0_Template, 3, 18, "ng-container", 3)(1, SplitButton_ng_template_1_Template, 2, 18, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementStart(3, "button", 4);
        \u0275\u0275listener("click", function SplitButton_Template_button_click_3_listener($event) {
          return ctx.onDropdownButtonClick($event);
        })("keydown", function SplitButton_Template_button_keydown_3_listener($event) {
          return ctx.onDropdownButtonKeydown($event);
        });
        \u0275\u0275template(4, SplitButton_span_4_Template, 1, 2, "span", 5)(5, SplitButton_ng_container_5_Template, 3, 2, "ng-container", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p-tieredmenu", 7, 1);
        \u0275\u0275listener("onHide", function SplitButton_Template_p_tieredmenu_onHide_6_listener() {
          return ctx.onHide();
        })("onShow", function SplitButton_Template_p_tieredmenu_onShow_6_listener() {
          return ctx.onShow();
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const defaultButton_r4 = \u0275\u0275reference(2);
        \u0275\u0275property("ngIf", ctx.contentTemplate || ctx._contentTemplate)("ngIfElse", defaultButton_r4);
        \u0275\u0275advance(3);
        \u0275\u0275classMap(ctx.cx("pcDropdown"));
        \u0275\u0275property("size", ctx.size)("severity", ctx.severity)("text", ctx.text)("outlined", ctx.outlined)("disabled", ctx.menuButtonDisabled)("pt", ctx.ptm("pcDropdown"))("unstyled", ctx.unstyled());
        \u0275\u0275attribute("aria-label", (ctx.menuButtonProps == null ? null : ctx.menuButtonProps["ariaLabel"]) || ctx.expandAriaLabel)("aria-haspopup", (ctx.menuButtonProps == null ? null : ctx.menuButtonProps["ariaHasPopup"]) || true)("aria-expanded", (ctx.menuButtonProps == null ? null : ctx.menuButtonProps["ariaExpanded"]) || ctx.isExpanded())("aria-controls", (ctx.menuButtonProps == null ? null : ctx.menuButtonProps["ariaControls"]) || ctx.ariaId);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.dropdownIcon);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.dropdownIcon);
        \u0275\u0275advance();
        \u0275\u0275styleMap(ctx.menuStyle);
        \u0275\u0275property("id", ctx.ariaId)("popup", true)("model", ctx.model)("styleClass", ctx.menuStyleClass)("appendTo", ctx.$appendTo())("motionOptions", ctx.computedMotionOptions())("pt", ctx.ptm("pcMenu"))("unstyled", ctx.unstyled());
      }
    },
    dependencies: [CommonModule, NgIf, NgTemplateOutlet, ButtonDirective, TieredMenu, AutoFocus, ChevronDownIcon, Ripple, TooltipModule, Tooltip, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SplitButton, [{
    type: Component,
    args: [{
      selector: "p-splitbutton, p-splitButton, p-split-button",
      standalone: true,
      imports: [CommonModule, ButtonDirective, TieredMenu, AutoFocus, ChevronDownIcon, Ripple, TooltipModule, SharedModule],
      template: `
        <ng-container *ngIf="contentTemplate || _contentTemplate; else defaultButton">
            <button
                [class]="cx('pcButton')"
                type="button"
                pButton
                pRipple
                [severity]="severity"
                [text]="text"
                [outlined]="outlined"
                [size]="size"
                [icon]="icon"
                [iconPos]="iconPos"
                (click)="onDefaultButtonClick($event)"
                [disabled]="disabled"
                [attr.tabindex]="tabindex"
                [attr.aria-label]="buttonProps?.['ariaLabel'] || label"
                [pAutoFocus]="autofocus"
                [pTooltip]="tooltip"
                [pTooltipUnstyled]="unstyled()"
                [tooltipOptions]="tooltipOptions"
                [pt]="ptm('pcButton')"
                [unstyled]="unstyled()"
            >
                <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate"></ng-container>
            </button>
        </ng-container>
        <ng-template #defaultButton>
            <button
                #defaultbtn
                [class]="cx('pcButton')"
                type="button"
                pButton
                pRipple
                [severity]="severity"
                [text]="text"
                [outlined]="outlined"
                [size]="size"
                [icon]="icon"
                [iconPos]="iconPos"
                [label]="label"
                (click)="onDefaultButtonClick($event)"
                [disabled]="buttonDisabled"
                [attr.tabindex]="tabindex"
                [attr.aria-label]="buttonProps?.['ariaLabel']"
                [pAutoFocus]="autofocus"
                [pTooltip]="tooltip"
                [pTooltipUnstyled]="unstyled()"
                [tooltipOptions]="tooltipOptions"
                [pt]="ptm('pcButton')"
                [unstyled]="unstyled()"
            ></button>
        </ng-template>
        <button
            type="button"
            pButton
            pRipple
            [size]="size"
            [severity]="severity"
            [text]="text"
            [outlined]="outlined"
            [class]="cx('pcDropdown')"
            (click)="onDropdownButtonClick($event)"
            (keydown)="onDropdownButtonKeydown($event)"
            [disabled]="menuButtonDisabled"
            [attr.aria-label]="menuButtonProps?.['ariaLabel'] || expandAriaLabel"
            [attr.aria-haspopup]="menuButtonProps?.['ariaHasPopup'] || true"
            [attr.aria-expanded]="menuButtonProps?.['ariaExpanded'] || isExpanded()"
            [attr.aria-controls]="menuButtonProps?.['ariaControls'] || ariaId"
            [pt]="ptm('pcDropdown')"
            [unstyled]="unstyled()"
        >
            <span *ngIf="dropdownIcon" [class]="dropdownIcon"></span>
            <ng-container *ngIf="!dropdownIcon">
                <svg data-p-icon="chevron-down" *ngIf="!dropdownIconTemplate && !_dropdownIconTemplate" />
                <ng-template *ngTemplateOutlet="dropdownIconTemplate || _dropdownIconTemplate"></ng-template>
            </ng-container>
        </button>
        <p-tieredmenu
            [id]="ariaId"
            #menu
            [popup]="true"
            [model]="model"
            [style]="menuStyle"
            [styleClass]="menuStyleClass"
            [appendTo]="$appendTo()"
            [motionOptions]="computedMotionOptions()"
            (onHide)="onHide()"
            (onShow)="onShow()"
            [pt]="ptm('pcMenu')"
            [unstyled]="unstyled()"
        ></p-tieredmenu>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [SplitButtonStyle, {
        provide: SPLITBUTTON_INSTANCE,
        useExisting: SplitButton
      }, {
        provide: PARENT_INSTANCE,
        useExisting: SplitButton
      }],
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": "cn(cx('root'), styleClass)",
        "[attr.data-p-severity]": "severity"
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    model: [{
      type: Input
    }],
    severity: [{
      type: Input
    }],
    raised: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    rounded: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    text: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    outlined: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    size: [{
      type: Input
    }],
    plain: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    icon: [{
      type: Input
    }],
    iconPos: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    tooltip: [{
      type: Input
    }],
    tooltipOptions: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    menuStyle: [{
      type: Input
    }],
    menuStyleClass: [{
      type: Input
    }],
    dropdownIcon: [{
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
    dir: [{
      type: Input
    }],
    expandAriaLabel: [{
      type: Input
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
    buttonProps: [{
      type: Input
    }],
    menuButtonProps: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
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
    menuButtonDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    buttonDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onClick: [{
      type: Output
    }],
    onMenuHide: [{
      type: Output
    }],
    onMenuShow: [{
      type: Output
    }],
    onDropdownClick: [{
      type: Output
    }],
    buttonViewChild: [{
      type: ViewChild,
      args: ["defaultbtn"]
    }],
    menu: [{
      type: ViewChild,
      args: ["menu"]
    }],
    contentTemplate: [{
      type: ContentChild,
      args: ["content", {
        descendants: false
      }]
    }],
    dropdownIconTemplate: [{
      type: ContentChild,
      args: ["dropdownicon", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var SplitButtonModule = class _SplitButtonModule {
  static \u0275fac = function SplitButtonModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SplitButtonModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _SplitButtonModule,
    imports: [SplitButton, SharedModule],
    exports: [SplitButton, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [SplitButton, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SplitButtonModule, [{
    type: NgModule,
    args: [{
      imports: [SplitButton, SharedModule],
      exports: [SplitButton, SharedModule]
    }]
  }], null, null);
})();

// src/app/components/compare/compare-rendered/compare-rendered.service.ts
var CompareRenderedService = class _CompareRenderedService {
  htmlNormalizationService = inject(HtmlNormalizationService);
  //Generate HTML diff (web page view) using htmldiff-js
  generateHtmlDiff(originalHtml, modifiedHtml) {
    return __async(this, null, function* () {
      const options = {
        repeatingWordsAccuracy: 0,
        ignoreWhiteSpaceDifferences: true,
        orphanMatchThreshold: 0,
        matchGranularity: 4,
        combineWords: true
      };
      const { Diff } = yield import("./chunk-IQA4GGSB.js");
      const diffResult = Diff.execute(originalHtml, modifiedHtml, options).replace(
        /<(ins|del)[^>]*>(\s|&nbsp;|&#32;|&#160;|&#x00e2;|&#x0080;|&#x00af;|&#x202f;|&#xa0;)+<\/(ins|del)>/gis,
        // Remove empty or whitespace-only <ins>/<del> tags
        " "
      );
      return diffResult;
    });
  }
  //Styles for HTML diff
  getRenderedDiffStyles() {
    return `     
        /* Shadow DOM container and layout fixes */
          :host {
            all: initial;
            display: block;
            width: 100%;
            box-sizing: border-box;
          }
    
          .rendered-content {
            margin: 0;
            padding: 0;
            background-color: #ffffff !important; 
            width: 100%;
            max-width: 100%;
            overflow-wrap: break-word;
            box-sizing: border-box;
            font-family: sans-serif;
          }
    
          .rendered-content table {
            width: 100%;
            table-layout: auto;
          }
    
          .rendered-content td, .rendered-content th, .rendered-content pre {
            word-break: break-word;
          }
    
          .rendered-content pre {
            white-space: pre-wrap;
          }
          
          /* Base styling for ins, del, and updated-link */
          ins,
          del,
          .updated-link {
            display: inline;
            padding: 0 0.3em;
            height: auto;
            border-radius: 0.3em;
            -webkit-box-decoration-break: clone;
            -o-box-decoration-break: clone;
            box-decoration-break: clone;
            margin-left: 0.07em;
            margin-right: 0.07em;
            font-weight: 500;
          }
    
          /* Inserted text (ins) */
          .rendered-content ins {
            background-color: #d4edda !important;
            color: #155724 !important;
            text-decoration: none !important;
            padding: 2px 4px;
            border-radius: 3px;
            border: 1px solid #c3e6cb;
          }
    
          /* Deleted text (del) */
          .rendered-content del {
            background-color: #f8d7da !important;
            color: #721c24 !important;
            text-decoration: line-through !important;
            padding: 2px 4px;
            border-radius: 3px;
            border: 1px solid #f5c6cb;
          }
    
          /* Updated links */
          .updated-link {
            background-color: #FFEE8C;
          }
    
          /* Highlighting for inserted, deleted, and updated elements */
          del.highlight,
          ins.highlight,
          span.diff-group.highlight,
          .updated-link.highlight:not(.overlay-wrapper.updated-link) {
            outline: 3px dotted #6e2ea7;
            padding-left: 0.35em;
            padding-right: 0.35em;
            line-height: unset;
            position: unset;
            top: unset;
            height: unset;
            transition: padding-left ease 0.3s, padding-right ease 0.3s, color ease 0.7s;
          }
    
          /* Overlay wrapper styles */
          .overlay-wrapper {
            position: relative;
            display: inline-block;
            width: 100%;
            height: 100%;
          }
    
          .overlay-wrapper::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(131, 213, 168, 0.4);
            z-index: 10;
            border-radius: 5px;
            pointer-events: none;
          }
    
          .overlay-wrapper.del::before {
            background: rgba(243, 165, 157, 0.5);
          }
    
          .overlay-wrapper.del::after {
            content: "";
            position: absolute;
            top: 50%;
            left: 0;
            width: 100%;
            height: 2px;
            background: rgba(24, 21, 21, 0.5);
            z-index: 20;
            pointer-events: none;
            opacity: 0.8;
          }
    
          .overlay-wrapper.updated-link::before {
            background: rgba(250, 237, 165, 0.23);
          }
    
          .overlay-wrapper.highlight::before {
            border: 2px dotted #000;
          }
    
          .overlay-wrapper img {
            width: 100%;
            display: block;
          }
    
          /* Optional connection type styling */
          .cnjnctn-type-or > [class*=cnjnctn-col]:not(:first-child):before {
            content: "or";
          }
        `;
  }
  //Initialize shadowDOM on an element
  initializeShadowDOM(element) {
    if (element && !element.shadowRoot) {
      return element.attachShadow({ mode: "open" });
    }
    return element?.shadowRoot ?? null;
  }
  //Clear shadowDom content
  clearShadowDOM(shadowRoot) {
    if (shadowRoot) {
      shadowRoot.innerHTML = "";
    }
  }
  //Generate shadow DOM content based on view type
  generateShadowDOMContent(shadowRoot, viewType, originalHtml, modifiedHtml) {
    return __async(this, null, function* () {
      if (!shadowRoot) {
        console.error("Shadow DOM not available");
        return;
      }
      this.clearShadowDOM(shadowRoot);
      const wetStyles = [
        "https://use.fontawesome.com/releases/v5.15.4/css/all.css",
        "https://www.canada.ca/etc/designs/canada/wet-boew/css/theme.min.css",
        "https://www.canada.ca/etc/designs/canada/wet-boew/m\xE9li-m\xE9lo/2025-12-mille-iles.min.css"
      ];
      for (const href of wetStyles) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = href;
        shadowRoot.appendChild(link);
      }
      const style3 = document.createElement("style");
      style3.textContent = this.getRenderedDiffStyles();
      shadowRoot.insertBefore(style3, shadowRoot.firstChild);
      const diffContainer = document.createElement("div");
      diffContainer.className = "rendered-diff-container";
      const renderedContent = document.createElement("div");
      renderedContent.classList.add("rendered-content");
      switch (viewType) {
        case "original":
          this.renderHtml(renderedContent, originalHtml, "original-html");
          break;
        case "modified":
          this.renderHtml(renderedContent, modifiedHtml, "modified-html");
          break;
        case "diff":
          yield this.renderDiffHtml(renderedContent, originalHtml, modifiedHtml, "diff-content");
          break;
      }
      diffContainer.appendChild(renderedContent);
      shadowRoot.appendChild(diffContainer);
      this.initShadowPlugins(shadowRoot);
    });
  }
  //Render HTML
  renderHtml(container, html, className) {
    container.classList.add(className);
    container.innerHTML = `<div id="editable" contenteditable="false">${html}</div>`;
  }
  //Render Diff
  renderDiffHtml(container, originalHtml, modifiedHtml, className) {
    return __async(this, null, function* () {
      const diffResult = yield this.generateHtmlDiff(originalHtml, modifiedHtml);
      const adjustedDiff = yield this.adjustDOM(originalHtml, diffResult);
      container.classList.add(className);
      container.innerHTML = adjustedDiff;
    });
  }
  //Initialize all plugins
  initShadowPlugins(shadowRoot) {
    this.initTabs(shadowRoot);
  }
  //Undo init for saving source code
  undoInitShadowPlugins(container) {
    const clone = container.cloneNode(true);
    this.undoInitTabs(clone);
    this.htmlNormalizationService.formatHtml(clone.toString());
    return clone;
  }
  /** Initialize tabs so they display in shadowDOM */
  initTabs(shadowRoot) {
    shadowRoot.querySelectorAll(".wb-tabs:not(.wb-tabs-inited)").forEach((tabsContainer, autoId) => {
      const groupId = `wb-shadow-${autoId}`;
      const groupClass = `${groupId}-grp`;
      tabsContainer.classList.add("wb-init", "wb-tabs-inited", "tabs-acc");
      if (!tabsContainer.id) {
        tabsContainer.id = groupId;
        tabsContainer.dataset["autoId"] = "true";
      }
      tabsContainer.id = tabsContainer.id || groupId;
      const tabpanels = tabsContainer.querySelector(".tabpanels");
      if (!tabpanels)
        return;
      const details = Array.from(tabpanels.querySelectorAll(":scope > details"));
      if (details.length === 0)
        return;
      const ul = document.createElement("ul");
      ul.setAttribute("role", "tablist");
      ul.setAttribute("aria-live", "off");
      ul.setAttribute("aria-hidden", "false");
      ul.classList.add("generated");
      details.forEach((detail, i) => {
        const summary = detail.querySelector("summary");
        const detailId = detail.id || `${groupId}-tab${i}`;
        detail.id = detailId;
        const linkId = `${detailId}-lnk`;
        const li = document.createElement("li");
        li.setAttribute("role", "presentation");
        if (i === 0)
          li.classList.add("active");
        const a = document.createElement("a");
        a.id = linkId;
        a.href = `#${detailId}`;
        a.setAttribute("role", "tab");
        a.setAttribute("aria-selected", i === 0 ? "true" : "false");
        a.setAttribute("aria-controls", detailId);
        a.setAttribute("tabindex", i === 0 ? "0" : "-1");
        a.innerHTML = summary?.innerHTML || "";
        li.appendChild(a);
        ul.appendChild(li);
        const linkIdRef = linkId;
        detail.setAttribute("role", "tabpanel");
        detail.setAttribute("aria-labelledby", linkIdRef);
        detail.classList.add("wb-init", groupClass, "fade");
        detail.removeAttribute("open");
        const contentDiv = detail.querySelector("div");
        if (contentDiv) {
          const tglPanel = document.createElement("div");
          tglPanel.classList.add("tgl-panel");
          tglPanel.setAttribute("aria-expanded", "true");
          tglPanel.setAttribute("aria-hidden", "false");
          contentDiv.parentNode?.insertBefore(tglPanel, contentDiv);
          tglPanel.appendChild(contentDiv);
        }
        if (summary) {
          summary.setAttribute("aria-hidden", "true");
          summary.classList.add("wb-toggle", "tgl-tab", "wb-init", "wb-toggle-inited");
        }
        if (i === 0) {
          detail.classList.add("in");
          detail.setAttribute("open", "");
          detail.setAttribute("aria-hidden", "false");
          detail.setAttribute("aria-expanded", "true");
        } else {
          detail.classList.add("out", "noheight");
          detail.setAttribute("aria-hidden", "true");
          detail.setAttribute("aria-expanded", "false");
        }
      });
      tabpanels.parentNode?.insertBefore(ul, tabpanels);
      const tabLinks = Array.from(ul.querySelectorAll("a"));
      tabLinks.forEach((link, i) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          tabLinks.forEach((l2, j2) => {
            const isActive = j2 === i;
            l2.setAttribute("aria-selected", String(isActive));
            l2.setAttribute("tabindex", isActive ? "0" : "-1");
            l2.closest("li")?.classList.toggle("active", isActive);
            const panel = details[j2];
            if (isActive) {
              panel.classList.remove("out", "noheight");
              panel.classList.add("in");
              panel.setAttribute("open", "");
              panel.setAttribute("aria-hidden", "false");
              panel.setAttribute("aria-expanded", "true");
            } else {
              panel.classList.remove("in");
              panel.classList.add("out", "noheight");
              panel.removeAttribute("open");
              panel.setAttribute("aria-hidden", "true");
              panel.setAttribute("aria-expanded", "false");
            }
          });
        });
      });
    });
  }
  /** Remove tab initialization so we can save source code */
  undoInitTabs(container) {
    container.querySelectorAll(".wb-tabs.wb-tabs-inited").forEach((tabsContainer) => {
      tabsContainer.querySelectorAll(':scope > ul[role="tablist"].generated').forEach((ul) => ul.remove());
      tabsContainer.classList.remove("wb-init", "wb-tabs-inited", "tabs-acc");
      if (tabsContainer.dataset["autoId"] === "true") {
        tabsContainer.removeAttribute("id");
        delete tabsContainer.dataset["autoId"];
      }
      if (tabsContainer.classList.length === 0) {
        tabsContainer.removeAttribute("class");
      }
      tabsContainer.querySelectorAll("details").forEach((detail) => {
        detail.removeAttribute("role");
        detail.removeAttribute("aria-labelledby");
        detail.removeAttribute("aria-hidden");
        detail.removeAttribute("aria-expanded");
        detail.classList.remove("wb-init", "fade", "in", "out", "noheight");
        Array.from(detail.classList).filter((c) => c.endsWith("-grp")).forEach((c) => detail.classList.remove(c));
        if (detail.classList.length === 0) {
          detail.removeAttribute("class");
        }
        const summary = detail.querySelector(":scope > summary");
        if (summary) {
          summary.removeAttribute("aria-hidden");
          summary.classList.remove("wb-toggle", "tgl-tab", "wb-init", "wb-toggle-inited");
          if (summary.classList.length === 0) {
            summary.removeAttribute("class");
          }
        }
        const tglPanel = detail.querySelector(":scope > .tgl-panel");
        if (tglPanel) {
          while (tglPanel.firstChild) {
            tglPanel.parentNode?.insertBefore(tglPanel.firstChild, tglPanel);
          }
          tglPanel.remove();
        }
      });
    });
  }
  //Adjust diff result (mark changed links, images, remove nested diff tags)
  adjustDOM(originalHtml, diffResult) {
    return __async(this, null, function* () {
      const parser = new DOMParser();
      const diffDoc = parser.parseFromString(diffResult, "text/html");
      const isImageOnly = (el) => {
        const onlyChild = el.children.length === 1 ? el.children[0] : null;
        return onlyChild?.tagName === "IMG" && !el.textContent?.trim();
      };
      diffDoc.querySelectorAll("del.diffmod, del.diffdel").forEach((del) => {
        if (!isImageOnly(del))
          return;
        const counterpart = del.nextElementSibling?.matches("ins.diffmod, ins.diffins") ? del.nextElementSibling : del.previousElementSibling?.matches("ins.diffmod, ins.diffins") ? del.previousElementSibling : null;
        if (!counterpart || !isImageOnly(counterpart))
          return;
        const delImg = del.querySelector("img");
        const insImg = counterpart.querySelector("img");
        if (delImg && insImg && delImg.getAttribute("src") === insImg.getAttribute("src") && delImg.getAttribute("alt") === insImg.getAttribute("alt")) {
          del.replaceWith(insImg.cloneNode(true));
          counterpart.remove();
        }
      });
      diffDoc.querySelectorAll("ins, del").forEach((diffEl) => {
        const parent = diffEl.parentElement;
        if (parent && parent.tagName !== "BODY" && parent.tagName !== "UL" && parent.tagName !== "OL" && parent.tagName !== "SUMMARY" && parent.tagName !== "DETAILS" && !parent.classList.contains("diffmod") && !parent.classList.contains("diffins") && !parent.classList.contains("diffdel") && parent.children.length === 1 && parent.textContent?.trim() === diffEl.textContent?.trim()) {
          parent.replaceWith(diffEl);
          const inlineElements = ["STRONG", "EM", "B", "I", "MARK", "CODE", "ABBR", "SPAN"];
          if (inlineElements.includes(parent.tagName)) {
            const parentClone = parent.cloneNode(false);
            while (diffEl.firstChild) {
              parentClone.appendChild(diffEl.firstChild);
            }
            diffEl.appendChild(parentClone);
            parent.replaceWith(diffEl);
          } else {
            parent.replaceWith(diffEl);
          }
        }
        if (diffEl.matches("ins:not(.diffins):not(.diffmod)") || diffEl.matches("del:not(.diffdel):not(.diffmod)")) {
          while (diffEl.firstChild) {
            diffEl.parentNode?.insertBefore(diffEl.firstChild, diffEl);
          }
          diffEl.remove();
        }
      });
      diffDoc.querySelectorAll("del > del, ins > ins").forEach((el) => {
        const parent = el.parentElement;
        if (parent && parent.textContent?.trim() === el.textContent?.trim()) {
          parent.replaceWith(el);
        }
      });
      diffDoc.querySelectorAll("del > ins, ins > del").forEach((el) => {
        const parent = el.parentElement;
        if (parent && parent.textContent?.trim() === el.textContent?.trim()) {
          parent.replaceWith(el);
        }
      });
      ["ul", "ol"].forEach((listType) => {
        diffDoc.querySelectorAll(listType).forEach((list) => {
          Array.from(list.childNodes).forEach((child) => {
            if (child.nodeType === Node.ELEMENT_NODE) {
              const el = child;
              if (el.matches("ins.diffins, del.diffdel, ins.diffmod, del.diffmod") && el.parentElement?.tagName === listType.toUpperCase()) {
                const li = diffDoc.createElement("li");
                el.parentNode?.insertBefore(li, el);
                li.appendChild(el);
              }
            }
          });
        });
      });
      ["div", "section", "article", "aside", "nav", "main", "header", "footer"].forEach((containerType) => {
        diffDoc.querySelectorAll(containerType).forEach((container) => {
          Array.from(container.childNodes).forEach((child) => {
            if (child.nodeType === Node.ELEMENT_NODE) {
              const el = child;
              if (el.matches("ins.diffins, del.diffdel, ins.diffmod, del.diffmod") && el.parentElement?.tagName === containerType.toUpperCase()) {
                const p = diffDoc.createElement("p");
                el.parentNode?.insertBefore(p, el);
                p.appendChild(el);
              }
            }
          });
        });
      });
      diffDoc.querySelectorAll("del.diffmod").forEach((del) => {
        if (del.parentElement?.classList.contains("diff-group")) {
          return;
        }
        const wrapper = diffDoc.createElement("span");
        wrapper.classList.add("diff-group");
        del.parentNode?.insertBefore(wrapper, del);
        wrapper.appendChild(del);
        let nextEl = wrapper.nextElementSibling;
        while (nextEl?.matches("ins.diffmod")) {
          const toMove = nextEl;
          nextEl = nextEl.nextElementSibling;
          wrapper.appendChild(toMove);
        }
        if (!wrapper.querySelector("ins.diffmod")) {
          let searchNode = del.parentElement;
          let depth = 0;
          while (searchNode && searchNode.tagName !== "BODY" && depth < 3) {
            const nextBlock = searchNode.nextElementSibling;
            if (nextBlock) {
              const firstIns = nextBlock.querySelector("ins.diffmod");
              if (firstIns) {
                const insText = firstIns.textContent?.trim() || "";
                const delText = del.textContent?.trim() || "";
                if (insText.length < 50 || Math.abs(insText.length - delText.length) < 20) {
                  wrapper.appendChild(firstIns);
                  break;
                }
              }
            }
            searchNode = searchNode.parentElement;
            depth++;
          }
        }
      });
      diffDoc.querySelectorAll("ins.diffmod").forEach((ins) => {
        if (ins.parentElement?.classList.contains("diff-group")) {
          return;
        }
        ins.classList.remove("diffmod");
        ins.classList.add("diffins");
      });
      ["ins.diffins", "del.diffdel"].forEach((selector) => {
        let changed = true;
        while (changed) {
          changed = false;
          diffDoc.querySelectorAll(selector).forEach((el) => {
            const next = el.nextSibling;
            if (next && next.nodeType === Node.ELEMENT_NODE && next.matches(selector)) {
              while (next.firstChild) {
                el.appendChild(next.firstChild);
              }
              next.remove();
              changed = true;
            }
          });
        }
      });
      const uniqueElements = Array.from(diffDoc.querySelectorAll("ins.diffins, del.diffdel, span.diff-group, .updated-link"));
      uniqueElements.forEach((element, index) => {
        element.setAttribute("data-id", `${index + 1}`);
      });
      return diffDoc.body.innerHTML;
    });
  }
  //Handle clicks inside Shadow DOM
  handleDocumentClick(shadowRoot, updateCurrentIndex) {
    const clickHandler = (event) => {
      let target = event.target;
      while (target && target.tagName !== "A") {
        target = target.parentElement;
      }
      if (target?.tagName === "A") {
        event.preventDefault();
        const href = target.getAttribute("href") ?? "";
        if (href.startsWith("#")) {
          const sectionId = target.getAttribute("href")?.substring(1);
          const targetSection = shadowRoot.getElementById(sectionId ?? "");
          if (targetSection) {
            targetSection.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
          }
        }
      }
      const changeElements = this.getDataIdElements(shadowRoot);
      if (!changeElements.length)
        return;
      const clickedElement = changeElements.find((el) => el.contains(event.target));
      if (!clickedElement)
        return;
      const index = changeElements.indexOf(clickedElement);
      this.scrollToElement(clickedElement);
      if (updateCurrentIndex) {
        updateCurrentIndex(index);
        this.resetLastSelection();
      }
    };
    shadowRoot.addEventListener("click", clickHandler, true);
    return () => {
      shadowRoot.removeEventListener("click", clickHandler, true);
    };
  }
  //Handle text selection inside Shadow DOM
  handleSelection(shadowRoot) {
    const selectionHandler = () => {
      this.highlightSelected(shadowRoot);
    };
    shadowRoot.addEventListener("mouseup", selectionHandler);
    shadowRoot.addEventListener("keyup", selectionHandler);
    return () => {
      shadowRoot.removeEventListener("mouseup", selectionHandler);
      shadowRoot.removeEventListener("keyup", selectionHandler);
    };
  }
  //Helper functions for next/prev buttons
  getDataIdElements(shadowRoot) {
    return Array.from(shadowRoot.querySelectorAll("[data-id]"));
  }
  highlightElement(el, highlightClass = "highlight") {
    this.clearHighlights(el.getRootNode(), highlightClass);
    el.classList.add(highlightClass);
  }
  clearHighlights(shadowRoot, highlightClass = "highlight") {
    shadowRoot.querySelectorAll(`.${highlightClass}`).forEach((node) => {
      node.classList.remove(highlightClass);
    });
  }
  scrollToElement(el) {
    const shadowRoot = el.getRootNode();
    shadowRoot.querySelectorAll(".highlight").forEach((h) => h.classList.remove("highlight"));
    el.classList.add("highlight");
    el.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  openParentDetails(el) {
    let current = el.closest("details");
    while (current) {
      current.open = true;
      current = current.parentElement?.closest("details") ?? null;
    }
  }
  closeAllDetailsExcept(shadowRoot, keepOpenEl) {
    const keepOpen = /* @__PURE__ */ new Set();
    let current = keepOpenEl.closest("details");
    while (current) {
      keepOpen.add(current);
      current = current.parentElement?.closest("details") ?? null;
    }
    shadowRoot.querySelectorAll("details").forEach((details) => {
      if (!keepOpen.has(details)) {
        details.open = false;
      }
    });
  }
  lastSelection = signal({ count: 1, startId: null, endId: null }, ...ngDevMode ? [{ debugName: "lastSelection" }] : (
    /* istanbul ignore next */
    []
  ));
  resetLastSelection() {
    this.lastSelection.set({ count: 1, startId: null, endId: null });
  }
  highlightSelected(shadowRoot) {
    const selection = window.getSelection();
    if (!shadowRoot || !selection) {
      this.resetLastSelection();
      return;
    }
    const selectedText = normalize(selection.toString());
    if (!selectedText)
      return;
    try {
      this.clearHighlights(shadowRoot);
      findSelectionInShadow(shadowRoot, selectedText);
      const dataIdElements = this.getDataIdElements(shadowRoot);
      const matches = dataIdElements.map((element) => {
        const text = normalize(element.textContent || "");
        return {
          element,
          dataId: parseInt(element.getAttribute("data-id") || "0"),
          text,
          textLength: text.length
        };
      }).filter((item) => item.text && selectedText.includes(item.text));
      if (matches.length === 0) {
        throw new Error("No diffs found in selected text.");
      }
      console.log("All matches:", matches.map((m2) => `${m2.dataId}: "${m2.text}"`));
      let bestMatch = matches.reduce((prev, current) => current.textLength > prev.textLength ? current : prev);
      console.log(`Initial best match: data-id="${bestMatch.dataId}", text: "${bestMatch.text}" (${bestMatch.textLength} chars)`);
      if (bestMatch.text.length <= 20) {
        console.log("Selected text: ", selectedText);
        const expanded = expandBestMatch(bestMatch.element, selectedText.length, 3);
        if (!selectedText.includes(expanded)) {
          console.log("Initial best match was wrong, checking others.");
          console.log("EXPANDED SHADOWDOM TEXT");
          console.log(expanded);
          const sortedMatches = matches.sort((a, b) => b.textLength - a.textLength);
          let found = false;
          console.log(sortedMatches);
          for (const possibleMatch of sortedMatches) {
            const expanded2 = expandBestMatch(possibleMatch.element, selectedText.length, 3);
            console.log("Checking: ", expanded2);
            if (selectedText.includes(expanded2)) {
              bestMatch = possibleMatch;
              found = true;
              console.log(`New best match: data-id="${bestMatch.dataId}", text: "${bestMatch.text}" (${bestMatch.textLength} chars)`);
              console.log("EXPANDED SHADOWDOM TEXT");
              console.log(expanded2);
              break;
            }
          }
          if (!found) {
            throw new Error("No expanded matches match the selected text.");
          }
        }
      }
      const matchedDataIds = new Set(matches.map((m2) => m2.dataId));
      let startId = bestMatch.dataId;
      let endId = bestMatch.dataId;
      let finalText = checkRange(shadowRoot, startId, endId);
      while (startId > 0) {
        const includeText = checkRange(shadowRoot, startId - 1, endId);
        if (includeText) {
          startId--;
          finalText = includeText;
        } else {
          break;
        }
      }
      while (true) {
        const includeText = checkRange(shadowRoot, startId, endId + 1);
        if (includeText) {
          endId++;
          finalText = includeText;
        } else {
          break;
        }
      }
      console.log(`Final match between ${startId} and ${endId}:`, finalText);
      let highlightedCount = 0;
      const elementById = Object.fromEntries(dataIdElements.map((el) => [parseInt(el.getAttribute("data-id") || "0"), el]));
      for (let id = startId; id <= endId; id++) {
        if (matchedDataIds.has(id)) {
          const element = elementById[id];
          if (element) {
            element.classList.add("highlight");
            highlightedCount++;
          }
        }
      }
      console.log(`Highlighted ${highlightedCount} elements from data-id ${startId} to ${endId}`);
      this.lastSelection.set({ count: highlightedCount, startId, endId });
      return;
    } catch (err) {
      console.error(err);
      this.resetLastSelection();
      return;
    }
    function normalize(text) {
      return text.replace(/\s+/g, " ").trim();
    }
    function extractShadowText(shadowRoot2) {
      const walker = document.createTreeWalker(shadowRoot2, NodeFilter.SHOW_TEXT, null);
      let text = "";
      let node = walker.nextNode();
      while (node) {
        text += node.textContent || "";
        node = walker.nextNode();
      }
      return normalize(text);
    }
    function findSelectionInShadow(shadowRoot2, selectedText2) {
      const shadowText = extractShadowText(shadowRoot2);
      if (!selectedText2)
        return -1;
      const idx = shadowText.indexOf(selectedText2);
      if (idx === -1) {
        throw new Error("Selection not found in shadowDOM.");
      }
      const secondIdx = shadowText.indexOf(selectedText2, idx + 1);
      if (secondIdx !== -1) {
        throw new Error("Selected text is not unique in shadowDOM.");
      }
      return idx;
    }
    function checkRange(root, startId, endId) {
      const startEl = root.querySelector(`[data-id="${startId}"]`);
      const endEl = root.querySelector(`[data-id="${endId}"]`);
      if (!startEl || !endEl) {
        return null;
      }
      const range = document.createRange();
      range.setStartBefore(startEl);
      range.setEndAfter(endEl);
      const rangeText = normalize(range.toString());
      return selectedText.includes(rangeText) ? rangeText : null;
    }
    function expandBestMatch(element, maxLength, chars = 5) {
      let text = normalize(element.textContent || "");
      if (text.length >= maxLength)
        return text.slice(0, maxLength);
      let remaining = Math.min(chars, maxLength - text.length);
      let prevNode = element.previousSibling;
      while (remaining > 0 && prevNode) {
        if (prevNode.nodeType === Node.TEXT_NODE) {
          const slice = prevNode.textContent?.slice(-remaining) || "";
          text = joinStrings(slice, text);
          remaining -= slice.length;
        }
        prevNode = prevNode.previousSibling;
      }
      remaining = Math.min(chars, maxLength - text.length);
      let nextNode = element.nextSibling;
      while (remaining > 0 && nextNode) {
        if (nextNode.nodeType === Node.TEXT_NODE) {
          const slice = nextNode.textContent?.slice(0, remaining) || "";
          text = joinStrings(text, slice);
          remaining -= slice.length;
        }
        nextNode = nextNode.nextSibling;
      }
      if (text.length > maxLength) {
        text = text.slice(0, maxLength);
      }
      return normalize(text);
    }
    function joinStrings(left, right) {
      if (!left)
        return right;
      if (!right)
        return left;
      const l2 = left[left.length - 1];
      const r = right[0];
      if (/\s/.test(l2) || /\s/.test(r) || /[.,!?;:)]/.test(r)) {
        return left + right;
      }
      return left + " " + right;
    }
  }
  static \u0275fac = function CompareRenderedService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CompareRenderedService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CompareRenderedService, factory: _CompareRenderedService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompareRenderedService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/components/compare/compare-rendered/compare-rendered.component.ts
var _c03 = ["liveContainer"];
var _c13 = (a0) => ({ ariaLabel: a0 });
var _c23 = (a0, a1) => ({ "background-color": a0, border: a1 });
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.text;
function CompareRenderedComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "p-radiobutton", 11);
    \u0275\u0275listener("ngModelChange", function CompareRenderedComponent_For_6_Template_p_radiobutton_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onWebViewChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 12);
    \u0275\u0275element(3, "i");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const view_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("inputId", "show_" + view_r3.value)("name", view_r3.value)("ngModel", ctx_r1.webSelectedView())("value", view_r3.value);
    \u0275\u0275advance();
    \u0275\u0275property("for", "show_" + view_r3.value);
    \u0275\u0275advance();
    \u0275\u0275classMap(view_r3.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", view_r3.label, " ");
  }
}
function CompareRenderedComponent_Conditional_8_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.displayNumHighlighted);
  }
}
function CompareRenderedComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 13)(2, "p-button", 14);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275listener("onClick", function CompareRenderedComponent_Conditional_8_Template_p_button_onClick_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.prev());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 15);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p-button", 16);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275listener("onClick", function CompareRenderedComponent_Conditional_8_Template_p_button_onClick_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.next());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p-splitbutton", 17);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275listener("onClick", function CompareRenderedComponent_Conditional_8_Template_p_splitbutton_onClick_10_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.processDiffChange("accept"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p-splitbutton", 18);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275listener("onClick", function CompareRenderedComponent_Conditional_8_Template_p_splitbutton_onClick_14_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.processDiffChange("reject"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(18, CompareRenderedComponent_Conditional_8_Conditional_18_Template, 2, 1, "span", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ariaLabel", \u0275\u0275pipeBind1(3, 16, "compare.rendered.prev"))("pTooltip", \u0275\u0275pipeBind1(4, 18, "compare.rendered.prev"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.displayCounter());
    \u0275\u0275advance();
    \u0275\u0275property("ariaLabel", \u0275\u0275pipeBind1(8, 20, "compare.rendered.next"))("pTooltip", \u0275\u0275pipeBind1(9, 22, "compare.rendered.next"));
    \u0275\u0275advance(3);
    \u0275\u0275property("buttonDisabled", ctx_r1.elements().length === 0)("buttonProps", \u0275\u0275pureFunction1(36, _c13, \u0275\u0275pipeBind1(11, 24, "compare.rendered.accept")))("menuButtonProps", \u0275\u0275pureFunction1(38, _c13, \u0275\u0275pipeBind1(12, 26, "compare.rendered.acceptOptions")))("model", ctx_r1.acceptItems())("pTooltip", \u0275\u0275pipeBind1(13, 28, "compare.rendered.accept"));
    \u0275\u0275advance(4);
    \u0275\u0275property("buttonDisabled", ctx_r1.elements().length === 0)("buttonProps", \u0275\u0275pureFunction1(40, _c13, \u0275\u0275pipeBind1(15, 30, "compare.rendered.reject")))("menuButtonProps", \u0275\u0275pureFunction1(42, _c13, \u0275\u0275pipeBind1(16, 32, "compare.rendered.rejectOptions")))("model", ctx_r1.rejectItems())("pTooltip", \u0275\u0275pipeBind1(17, 34, "compare.rendered.reject"));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.displayNumHighlighted ? 18 : -1);
  }
}
function CompareRenderedComponent_Conditional_9_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 22)(1, "span", 24);
    \u0275\u0275element(2, "i", 25);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", ctx_r1.getUrl(), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "common.openNewTab"));
  }
}
function CompareRenderedComponent_Conditional_9_Conditional_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 28);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("onClick", function CompareRenderedComponent_Conditional_9_Conditional_8_Conditional_0_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.enableOriginalEdits.set(true));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 1, "common.enableEdits"));
  }
}
function CompareRenderedComponent_Conditional_9_Conditional_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-message", 27);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "compare.rendered.originalEditsMessage"));
  }
}
function CompareRenderedComponent_Conditional_9_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CompareRenderedComponent_Conditional_9_Conditional_8_Conditional_0_Template, 2, 3, "p-button", 26)(1, CompareRenderedComponent_Conditional_9_Conditional_8_Conditional_1_Template, 3, 3, "p-message", 27);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(!ctx_r1.enableOriginalEdits() ? 0 : 1);
  }
}
function CompareRenderedComponent_Conditional_9_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-message", 23);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "compare.waitingForAI"));
  }
}
function CompareRenderedComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "p-button", 20);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("onClick", function CompareRenderedComponent_Conditional_9_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleEditing(ctx_r1.webSelectedView()));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p-button", 21);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("onClick", function CompareRenderedComponent_Conditional_9_Template_p_button_onClick_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleCopying(ctx_r1.webSelectedView()));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, CompareRenderedComponent_Conditional_9_Conditional_7_Template, 5, 4, "a", 22);
    \u0275\u0275conditionalCreate(8, CompareRenderedComponent_Conditional_9_Conditional_8_Template, 2, 1)(9, CompareRenderedComponent_Conditional_9_Conditional_9_Template, 3, 3, "p-message", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.webSelectedView() === ctx_r1.WebViewType.Original && !ctx_r1.enableOriginalEdits() || ctx_r1.webSelectedView() === ctx_r1.WebViewType.Modified && ctx_r1.jobPending())("icon", ctx_r1.editing() ? "pi pi-save" : "pi pi-pen-to-square")("label", ctx_r1.editing() ? \u0275\u0275pipeBind1(2, 7, "common.save") : \u0275\u0275pipeBind1(3, 9, "common.edit"));
    \u0275\u0275advance(3);
    \u0275\u0275property("icon", ctx_r1.copying() ? "pi pi-checkmark" : "pi pi-clipboard")("label", ctx_r1.copying() ? \u0275\u0275pipeBind1(5, 11, "common.copied") : \u0275\u0275pipeBind1(6, 13, "common.copyCode"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.getUrl() ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.webSelectedView() === ctx_r1.WebViewType.Original ? 8 : ctx_r1.jobPending() ? 9 : -1);
  }
}
function CompareRenderedComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "div", 29);
    \u0275\u0275elementStart(2, "span", 30);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction2(4, _c23, item_r7.style === "highlight" ? item_r7.colour : "transparent", item_r7.style === "line" ? "2px " + (item_r7.lineStyle || "solid") + " " + item_r7.colour : "none"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, item_r7.text));
  }
}
var WebViewType;
(function(WebViewType2) {
  WebViewType2["Original"] = "original";
  WebViewType2["Modified"] = "modified";
  WebViewType2["Diff"] = "diff";
})(WebViewType || (WebViewType = {}));
var CompareRenderedComponent = class _CompareRenderedComponent {
  translate = inject(TranslateService);
  messageService = inject(MessageService);
  compareRenderedService = inject(CompareRenderedService);
  fetchService = inject(FetchService);
  // Inputs
  beforeContent = input(...ngDevMode ? [void 0, { debugName: "beforeContent" }] : (
    /* istanbul ignore next */
    []
  ));
  afterContent = input(...ngDevMode ? [void 0, { debugName: "afterContent" }] : (
    /* istanbul ignore next */
    []
  ));
  canUndo = input(false, ...ngDevMode ? [{ debugName: "canUndo" }] : (
    /* istanbul ignore next */
    []
  ));
  jobPending = input(false, ...ngDevMode ? [{ debugName: "jobPending" }] : (
    /* istanbul ignore next */
    []
  ));
  // Adjust inputs if one is undefined so we can render page with no changes
  resolvedBefore = computed(() => this.beforeContent() ?? this.afterContent(), ...ngDevMode ? [{ debugName: "resolvedBefore" }] : (
    /* istanbul ignore next */
    []
  ));
  resolvedAfter = computed(() => this.afterContent() ?? this.beforeContent(), ...ngDevMode ? [{ debugName: "resolvedAfter" }] : (
    /* istanbul ignore next */
    []
  ));
  // Outputs
  contentChanged = output();
  hasChanges = output();
  undoChanges = output();
  // Get DOM elements from template
  liveContainer = viewChild("liveContainer", ...ngDevMode ? [{ debugName: "liveContainer" }] : (
    /* istanbul ignore next */
    []
  ));
  // Signals
  shadowDOM = signal(null, ...ngDevMode ? [{ debugName: "shadowDOM" }] : (
    /* istanbul ignore next */
    []
  ));
  enableOriginalEdits = signal(false, ...ngDevMode ? [{ debugName: "enableOriginalEdits" }] : (
    /* istanbul ignore next */
    []
  ));
  // Prevent duplicate effects
  renderToken = 0;
  //Web page view options
  WebViewType = WebViewType;
  webSelectedView = signal(WebViewType.Diff, ...ngDevMode ? [{ debugName: "webSelectedView" }] : (
    /* istanbul ignore next */
    []
  ));
  get webViewOptions() {
    const editedText = ` (${this.translate.instant("common.edited").toLowerCase()})`;
    const beforeVersion = this.beforeContent()?.version;
    const beforePrefix = this.translate.instant("common.before") + this.translate.instant("common.colon");
    const beforeBase = beforeVersion ? beforePrefix + this.translate.instant("common.source." + beforeVersion) : this.translate.instant("common.before");
    const beforeLabel = beforeBase + (this.beforeContent()?.edited ? editedText : "");
    const afterVersion = this.afterContent()?.version;
    const afterPrefix = this.translate.instant("common.after") + this.translate.instant("common.colon");
    const afterBase = afterVersion ? afterPrefix + this.translate.instant("common.source." + afterVersion) : this.translate.instant("common.after");
    const afterLabel = afterBase + (this.afterContent()?.edited ? editedText : "");
    return [
      {
        label: beforeLabel,
        value: WebViewType.Original,
        icon: "pi pi-file"
      },
      {
        label: this.translate.instant("common.comparison"),
        value: WebViewType.Diff,
        icon: "pi pi-sort-alt"
      },
      {
        label: afterLabel,
        value: WebViewType.Modified,
        icon: "pi pi-file-edit"
      }
    ];
  }
  //Change web page view
  onWebViewChange(viewType) {
    this.webSelectedView.set(viewType);
  }
  // Effects
  constructor() {
    effect((onCleanup) => {
      const viewType = this.webSelectedView();
      const shadowRoot = this.shadowDOM();
      const beforeContent = this.resolvedBefore();
      const afterContent = this.resolvedAfter();
      if (beforeContent && afterContent && shadowRoot) {
        this.rebuildShadowContent(shadowRoot, viewType, beforeContent, afterContent);
        onCleanup(() => {
          this.shadowClickHandler?.();
          this.shadowSelectionHandler?.();
          this.shadowClickHandler = null;
          this.shadowSelectionHandler = null;
        });
      }
      this.enableOriginalEdits.set(false);
      this.editing.set(false);
    });
    effect(() => {
      const selection = this.compareRenderedService.lastSelection();
      if (selection.count > 1 && selection.startId != null && selection.endId != null) {
        this.currentIndex.set(selection.endId - 1);
      }
    });
  }
  //Runs when view is initialized
  ngAfterViewInit() {
    const container = this.liveContainer();
    if (!container)
      return;
    const shadowRoot = this.compareRenderedService.initializeShadowDOM(container.nativeElement);
    if (shadowRoot) {
      this.shadowDOM.set(shadowRoot);
      console.log("Shadow DOM is initialized.");
    }
  }
  //Runs when component is destroyed
  ngOnDestroy() {
    if (this.shadowDOM()) {
      this.compareRenderedService.clearShadowDOM(this.shadowDOM());
      this.shadowDOM.set(null);
    }
  }
  // Rebuild ShadowDOM
  rebuildShadowContent(shadowRoot, viewType, beforeContent, afterContent) {
    return __async(this, null, function* () {
      const token = ++this.renderToken;
      yield this.compareRenderedService.generateShadowDOMContent(shadowRoot, viewType, beforeContent.html, afterContent.html);
      if (token !== this.renderToken)
        return;
      this.shadowClickHandler = this.compareRenderedService.handleDocumentClick(shadowRoot, (index) => {
        this.currentIndex.set(index);
      });
      this.shadowSelectionHandler = this.compareRenderedService.handleSelection(shadowRoot);
      this.elements.set(this.compareRenderedService.getDataIdElements(shadowRoot));
      if (this.elements().length > 0) {
        this.focusOnIndex(this.currentIndex());
        this.hasChanges.emit(true);
      } else if (this.webSelectedView() === WebViewType.Diff) {
        this.hasChanges.emit(false);
      }
      console.log(this.elements().length);
    });
  }
  /* START OF TOOLBAR FUNCTIONS */
  // 1. Shadow DOM navigation
  shadowClickHandler = null;
  shadowSelectionHandler = null;
  currentIndex = signal(0, ...ngDevMode ? [{ debugName: "currentIndex" }] : (
    /* istanbul ignore next */
    []
  ));
  elements = signal([], ...ngDevMode ? [{ debugName: "elements" }] : (
    /* istanbul ignore next */
    []
  ));
  next() {
    if (this.elements().length === 0)
      return;
    this.currentIndex.set((this.currentIndex() + 1) % this.elements().length);
    this.focusOnIndex(this.currentIndex());
    this.compareRenderedService.resetLastSelection();
  }
  prev() {
    if (this.elements().length === 0)
      return;
    this.currentIndex.set((this.currentIndex() - 1 + this.elements().length) % this.elements().length);
    this.focusOnIndex(this.currentIndex());
    this.compareRenderedService.resetLastSelection();
  }
  focusOnIndex(index) {
    const shadowRoot = this.shadowDOM();
    if (!shadowRoot)
      return;
    const el = this.elements()[index];
    this.compareRenderedService.highlightElement(el);
    this.compareRenderedService.openParentDetails(el);
    this.compareRenderedService.closeAllDetailsExcept(shadowRoot, el);
    this.compareRenderedService.scrollToElement(el);
  }
  displayCounter = computed(() => {
    const selection = this.compareRenderedService.lastSelection();
    if (!this.elements()?.length) {
      return this.translate.instant("compare.rendered.counter", { range: "0", total: "0" });
    }
    const total = this.elements().length;
    if (selection.count === 0) {
      return this.translate.instant("compare.rendered.counter", { range: "\u2013", total });
    }
    if (selection.count > 1) {
      if (selection.startId != null && selection.endId != null) {
        const range2 = `${selection.startId}\u2013${selection.endId}`;
        return this.translate.instant("compare.rendered.counter", { range: range2, total });
      }
      return this.translate.instant("compare.rendered.counter", { range: "\u2013", total });
    }
    const range = this.currentIndex() + 1;
    return this.translate.instant("compare.rendered.counter", { range, total });
  }, ...ngDevMode ? [{ debugName: "displayCounter" }] : (
    /* istanbul ignore next */
    []
  ));
  get displayNumHighlighted() {
    const count = this.compareRenderedService.lastSelection().count;
    if (count < 1)
      return "";
    if (this.compareRenderedService.lastSelection().count < 1)
      return "";
    return this.translate.instant("compare.rendered.itemsSelected", { count });
  }
  // 2. Accept
  acceptItems = computed(() => [
    {
      label: "Accept all",
      icon: "pi pi-check-circle",
      command: () => {
        this.processAllChanges("accept");
      },
      disabled: !(this.elements().length > 0)
    },
    {
      separator: true
    },
    {
      label: this.translate.instant("compare.button.undo"),
      icon: "pi pi-refresh",
      command: () => {
        this.undoChanges.emit();
      },
      disabled: !this.canUndo()
    }
  ], ...ngDevMode ? [{ debugName: "acceptItems" }] : (
    /* istanbul ignore next */
    []
  ));
  // 3. Reject
  rejectItems = computed(() => [
    {
      label: "Reject all",
      icon: "pi pi-times-circle",
      command: () => {
        this.processAllChanges("reject");
      },
      disabled: !(this.elements().length > 0)
    },
    {
      separator: true
    },
    {
      label: this.translate.instant("compare.button.undo"),
      icon: "pi pi-refresh",
      command: () => {
        this.undoChanges.emit();
      },
      disabled: !this.canUndo()
    }
  ], ...ngDevMode ? [{ debugName: "rejectItems" }] : (
    /* istanbul ignore next */
    []
  ));
  // 4. Legend
  get legendItems() {
    const view = this.webSelectedView();
    const items = [];
    const beforeFlags = this.resolvedBefore()?.found;
    const afterFlags = this.resolvedAfter()?.found;
    if (view === WebViewType.Diff) {
      items.push({ text: this.translate.instant("compare.rendered.legend.previousVersion"), colour: "#F3A59D", style: "highlight" }, { text: this.translate.instant("compare.rendered.legend.updatedVersion"), colour: "#83d5a8", style: "highlight" }, { text: this.translate.instant("compare.rendered.legend.updatedLink"), colour: "#FFEE8C", style: "highlight" });
    } else if (view === WebViewType.Original) {
      items.push({ text: this.translate.instant("compare.rendered.legend.previousVersion"), colour: "#F3A59D", style: "line" });
    } else if (view === WebViewType.Modified) {
      items.push({ text: this.translate.instant("compare.rendered.legend.updatedVersion"), colour: "#83d5a8", style: "line" });
    }
    for (const def of this.flagLegendDefs) {
      const show = view === WebViewType.Diff ? beforeFlags?.[def.flag] || afterFlags?.[def.flag] : view === WebViewType.Original ? beforeFlags?.[def.flag] : view === WebViewType.Modified ? afterFlags?.[def.flag] : false;
      if (show) {
        items.push({ text: def.text, colour: def.colour, style: def.style, lineStyle: def.lineStyle });
      }
    }
    return items;
  }
  get flagLegendDefs() {
    return [
      { flag: "hidden", text: this.translate.instant("compare.rendered.legend.hiddenContent"), colour: "#6F9FFF", style: "line" },
      { flag: "modal", text: this.translate.instant("compare.rendered.legend.modalContent"), colour: "#666666", style: "line", lineStyle: "dashed" },
      { flag: "dynamic", text: this.translate.instant("compare.rendered.legend.dynamicContent"), colour: "#fbc02f", style: "line", lineStyle: "dashed" }
    ];
  }
  // 5. Before/After - Edit
  editing = signal(false, ...ngDevMode ? [{ debugName: "editing" }] : (
    /* istanbul ignore next */
    []
  ));
  toggleEditing(view) {
    return __async(this, null, function* () {
      this.editing.set(!this.editing());
      const shadowRoot = this.shadowDOM();
      const editable = shadowRoot?.getElementById("editable");
      if (!editable) {
        console.warn("Editable area not found.");
        this.editing.set(false);
        return;
      }
      if (this.editing()) {
        editable.setAttribute("contenteditable", "true");
        editable.focus();
      } else {
        editable.setAttribute("contenteditable", "false");
        const updatedContent = this.compareRenderedService.undoInitShadowPlugins(editable).innerHTML;
        const beforeContent = this.resolvedBefore();
        const afterContent = this.resolvedAfter();
        if (!beforeContent || !afterContent)
          return;
        this.contentChanged.emit({
          beforeContent: view === WebViewType.Original ? __spreadProps(__spreadValues({}, beforeContent), { html: updatedContent, edited: true }) : beforeContent,
          afterContent: view === WebViewType.Modified ? __spreadProps(__spreadValues({}, afterContent), { html: updatedContent, edited: true }) : afterContent
        });
      }
    });
  }
  // 6. Before/After - Copy
  copying = signal(false, ...ngDevMode ? [{ debugName: "copying" }] : (
    /* istanbul ignore next */
    []
  ));
  toggleCopying(view) {
    return __async(this, null, function* () {
      this.copying.set(true);
      const htmlToCopy = view === WebViewType.Original ? this.resolvedBefore()?.html ?? "" : view === WebViewType.Modified ? this.resolvedAfter()?.html ?? "" : "";
      navigator.clipboard.writeText(htmlToCopy).then(() => {
        this.messageService.add({
          severity: "success",
          summary: this.translate.instant("common.copiedToClipboard"),
          detail: htmlToCopy.slice(0, 100),
          life: 3e3
        });
        setTimeout(() => this.copying.set(false), 1e3);
      }).catch((err) => {
        this.messageService.add({
          severity: "error",
          summary: this.translate.instant("common.copyError"),
          detail: this.translate.instant("compare.rendered.noHtmlToCopy"),
          life: 5e3
        });
        this.copying.set(false);
        console.error("Clipboard copy failed:", err);
      });
    });
  }
  // 7. Before/After - Open URL
  getUrl() {
    const url = this.webSelectedView() === WebViewType.Original ? this.beforeContent()?.url : this.webSelectedView() === WebViewType.Modified ? this.afterContent()?.url : null;
    return this.fetchService.isValidUrl(url) ? url : null;
  }
  // Process Accept/Reject
  processDiffChange(mode) {
    const shadowRoot = this.shadowDOM();
    if (!shadowRoot) {
      console.warn("Shadow root not found.");
      return;
    }
    const diffContainer = shadowRoot.querySelector(".diff-content");
    if (!diffContainer) {
      console.warn("Diff container not found");
      return;
    }
    const highlightedEls = diffContainer.querySelectorAll("ins.highlight, del.highlight, span.diff-group.highlight, span.updated-link.highlight");
    if (!highlightedEls.length) {
      console.warn("highlighted elements not found");
      return;
    }
    const keepTag = mode === "accept" ? "ins" : "del";
    const removeTag = mode === "accept" ? "del" : "ins";
    const unwrap = (el) => {
      while (el.firstChild) {
        el.parentNode?.insertBefore(el.firstChild, el);
      }
      el.remove();
    };
    highlightedEls.forEach((highlighted) => {
      if (highlighted.tagName.toLowerCase() === keepTag) {
        unwrap(highlighted);
      } else if (highlighted.tagName.toLowerCase() === removeTag) {
        highlighted.remove();
      } else if (highlighted.tagName.toLowerCase() === "span") {
        const el = highlighted.querySelector(keepTag);
        const link = highlighted.querySelector("a");
        if (el) {
          unwrap(el);
          highlighted.remove();
        } else if (link) {
          if (mode === "accept") {
            highlighted.replaceWith(link);
          } else {
            const oldHref = highlighted.getAttribute("title")?.replace(/^Old URL:\s*/, "") || "";
            link.setAttribute("href", oldHref);
            highlighted.replaceWith(link);
          }
        } else {
          console.log(`No <${keepTag}> or updated-link found. Leaving content as-is.`);
          return;
        }
      }
    });
    diffContainer.querySelectorAll(`${removeTag}, span.diff-group`).forEach(unwrap);
    diffContainer.querySelectorAll(keepTag).forEach((el) => {
      el.remove();
    });
    diffContainer.querySelectorAll("span.updated-link").forEach((span) => {
      const link = span.querySelector("a");
      if (!link)
        return;
      if (mode === "reject") {
        span.replaceWith(link);
      } else {
        const oldHref = span.getAttribute("title")?.replace(/^Old URL:\s*/, "") || "";
        link.setAttribute("href", oldHref);
        span.replaceWith(link);
      }
    });
    this.compareRenderedService.resetLastSelection();
    const updatedContent = this.compareRenderedService.undoInitShadowPlugins(diffContainer).innerHTML;
    const beforeContent = this.resolvedBefore();
    const afterContent = this.resolvedAfter();
    if (!beforeContent || !afterContent)
      return;
    this.contentChanged.emit({
      beforeContent: mode === "accept" ? __spreadProps(__spreadValues({}, beforeContent), { html: updatedContent, edited: true }) : beforeContent,
      afterContent: mode === "reject" ? __spreadProps(__spreadValues({}, afterContent), { html: updatedContent, edited: true }) : afterContent
    });
  }
  // Process accept/reject all
  processAllChanges(mode) {
    console.log(mode);
    this.compareRenderedService.resetLastSelection();
    const beforeContent = this.resolvedBefore();
    const afterContent = this.resolvedAfter();
    if (!beforeContent || !afterContent)
      return;
    this.contentChanged.emit({
      beforeContent: mode === "accept" ? __spreadProps(__spreadValues({}, beforeContent), { html: afterContent.html, found: afterContent.found, edited: true }) : beforeContent,
      afterContent: mode === "reject" ? __spreadProps(__spreadValues({}, afterContent), { html: beforeContent.html, found: beforeContent.found, edited: true }) : afterContent
    });
  }
  static \u0275fac = function CompareRenderedComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CompareRenderedComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompareRenderedComponent, selectors: [["aida-compare-rendered"]], viewQuery: function CompareRenderedComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.liveContainer, _c03, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, inputs: { beforeContent: [1, "beforeContent"], afterContent: [1, "afterContent"], canUndo: [1, "canUndo"], jobPending: [1, "jobPending"] }, outputs: { contentChanged: "contentChanged", hasChanges: "hasChanges", undoChanges: "undoChanges" }, decls: 15, vars: 5, consts: [["liveContainer", ""], [1, "flex", "flex-column", "text-color-secondary", "w-full"], ["for", "views'", 1, "mb-1", "font-semibold", "block"], ["id", "views", "role", "radiogroup", 1, "flex", "flex-row", "gap-3", "my-1"], [1, "field-radiobutton"], [1, "sticky", "top-0", "z-5", "p-0", "mb-2", "flex", "flex-wrap", "lg:flex-nowrap", "justify-content-between", "gap-5"], [1, "flex", "flex-row", "align-items-center", "gap-2"], [1, "flex", "flex-row", "gap-1", "align-items-center"], [1, "flex", "flex-wrap", "justify-content-end", "align-items-center", "gap-2", "min-w-min"], [1, "flex", "align-items-center", "gap-2"], [1, "diff-container", "w-full", "p-0", 3, "ngClass"], ["size", "large", 3, "ngModelChange", "inputId", "name", "ngModel", "value"], [1, "cursor-pointer", "font-semibold", "flex", "align-items-center", "gap-1", 3, "for"], [1, "flex", "flex-nowrap", "align-items-center"], ["hideDelay", "300", "icon", "pi pi-chevron-left", "showDelay", "1000", "text", "", 3, "onClick", "ariaLabel", "pTooltip"], [1, "white-space-nowrap"], ["hideDelay", "300", "icon", "pi pi-chevron-right", "showDelay", "1000", "text", "", 3, "onClick", "ariaLabel", "pTooltip"], ["hideDelay", "300", "icon", "pi pi-check", "label", "Accept", "outlined", "", "severity", "success", "showDelay", "1000", "size", "small", "tooltipPosition", "top", 1, "secondary-outline", 3, "onClick", "buttonDisabled", "buttonProps", "menuButtonProps", "model", "pTooltip"], ["hideDelay", "300", "icon", "pi pi-times", "label", "Reject", "outlined", "", "severity", "danger", "showDelay", "1000", "size", "small", "tooltipPosition", "top", 1, "secondary-outline", 3, "onClick", "buttonDisabled", "buttonProps", "menuButtonProps", "model", "pTooltip"], [1, "text-color-secondary", "pl-1"], ["outlined", "", "styleClass", "secondary-outline", 3, "onClick", "disabled", "icon", "label"], ["outlined", "", "styleClass", "secondary-outline", 3, "onClick", "icon", "label"], ["outlined", "", "pButton", "", "rel", "noopener noreferrer", "target", "_blank", 1, "secondary-outline", "no-underline", 3, "href"], ["icon", "pi pi-spinner pi-spin", "severity", "contrast"], [1, "pButtonLabel"], [1, "pi", "pi-external-link", "mr-2"], ["icon", "pi pi-file-edit", "outlined", "", "severity", "warn", "styleClass", "secondary-outline", 3, "label"], ["icon", "pi pi-exclamation-triangle", "severity", "warn"], ["icon", "pi pi-file-edit", "outlined", "", "severity", "warn", "styleClass", "secondary-outline", 3, "onClick", "label"], [1, "legend-box", 3, "ngStyle"], [1, "legend-text"]], template: function CompareRenderedComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "label", 2);
      \u0275\u0275text(2);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 3);
      \u0275\u0275repeaterCreate(5, CompareRenderedComponent_For_6_Template, 5, 8, "div", 4, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 5);
      \u0275\u0275conditionalCreate(8, CompareRenderedComponent_Conditional_8_Template, 19, 44, "div", 6)(9, CompareRenderedComponent_Conditional_9_Template, 10, 15, "div", 7);
      \u0275\u0275elementStart(10, "div", 8);
      \u0275\u0275repeaterCreate(11, CompareRenderedComponent_For_12_Template, 5, 7, "div", 9, _forTrack1);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(13, "div", 10, 0);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "common.view"));
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.webViewOptions);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.webSelectedView() === ctx.WebViewType.Diff ? 8 : 9);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.legendItems);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", ctx.webSelectedView());
    }
  }, dependencies: [CommonModule, NgClass, NgStyle, FormsModule, NgControlStatus, NgModel, ButtonModule, ButtonDirective, Button, MessageModule, Message, RadioButtonModule, RadioButton, SplitButtonModule, SplitButton, TooltipModule, Tooltip, TranslatePipe], styles: ['@import "https://use.fontawesome.com/releases/v5.15.4/css/all.css";\n\n\n@font-face {\n  font-family: "Glyphicons Halflings";\n  src: url(https://www.canada.ca/etc/designs/canada/wet-boew/fonts/glyphicons-halflings-regular.woff2) format("woff2");\n}\n.diff-container[_ngcontent-%COMP%] {\n  border: 1px solid #dee2e6;\n  border-radius: 4px;\n  padding: 1rem;\n  overflow-y: scroll;\n  height: 75vh;\n  position: relative;\n}\n.diff-container.original[_ngcontent-%COMP%] {\n  border-color: #f3a59d;\n}\n.diff-container.modified[_ngcontent-%COMP%] {\n  border-color: #83d5a8;\n}\n.legend-box[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border-radius: 4px;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=compare-rendered.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompareRenderedComponent, [{
    type: Component,
    args: [{ selector: "aida-compare-rendered", imports: [CommonModule, FormsModule, TranslatePipe, ButtonModule, MessageModule, RadioButtonModule, SplitButtonModule, TooltipModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="flex flex-column text-color-secondary w-full">
  <!--View options-->
  <label class="mb-1 font-semibold block" for="views'">{{ 'common.view' | translate }}</label>
  <div id="views" class="flex flex-row gap-3 my-1" role="radiogroup">
    @for (view of webViewOptions; track view.value) {
      <div class="field-radiobutton">
        <p-radiobutton [inputId]="'show_' + view.value" [name]="view.value" [ngModel]="webSelectedView()" [value]="view.value" (ngModelChange)="onWebViewChange($event)" size="large" />
        <label [for]="'show_' + view.value" class="cursor-pointer font-semibold flex align-items-center gap-1">
          <i [class]="view.icon"></i>
          {{ view.label }}
        </label>
      </div>
    }
  </div>
  <!--Toolbar options-->
  <div class="sticky top-0 z-5 p-0 mb-2 flex flex-wrap lg:flex-nowrap justify-content-between gap-5">
    @if (webSelectedView() === WebViewType.Diff) {
      <div class="flex flex-row align-items-center gap-2">
        <div class="flex flex-nowrap align-items-center">
          <p-button
            [ariaLabel]="'compare.rendered.prev' | translate"
            [pTooltip]="'compare.rendered.prev' | translate"
            (onClick)="prev()"
            hideDelay="300"
            icon="pi pi-chevron-left"
            showDelay="1000"
            text
          />
          <span class="white-space-nowrap">{{ displayCounter() }}</span>
          <p-button
            [ariaLabel]="'compare.rendered.next' | translate"
            [pTooltip]="'compare.rendered.next' | translate"
            (onClick)="next()"
            hideDelay="300"
            icon="pi pi-chevron-right"
            showDelay="1000"
            text
          />
        </div>

        <p-splitbutton
          [buttonDisabled]="this.elements().length === 0"
          [buttonProps]="{ ariaLabel: 'compare.rendered.accept' | translate }"
          [menuButtonProps]="{ ariaLabel: 'compare.rendered.acceptOptions' | translate }"
          [model]="acceptItems()"
          [pTooltip]="'compare.rendered.accept' | translate"
          (onClick)="processDiffChange('accept')"
          class="secondary-outline"
          hideDelay="300"
          icon="pi pi-check"
          label="Accept"
          outlined
          severity="success"
          showDelay="1000"
          size="small"
          tooltipPosition="top"
        />
        <p-splitbutton
          [buttonDisabled]="this.elements().length === 0"
          [buttonProps]="{ ariaLabel: 'compare.rendered.reject' | translate }"
          [menuButtonProps]="{ ariaLabel: 'compare.rendered.rejectOptions' | translate }"
          [model]="rejectItems()"
          [pTooltip]="'compare.rendered.reject' | translate"
          (onClick)="processDiffChange('reject')"
          class="secondary-outline"
          hideDelay="300"
          icon="pi pi-times"
          label="Reject"
          outlined
          severity="danger"
          showDelay="1000"
          size="small"
          tooltipPosition="top"
        />
        @if (displayNumHighlighted) {
          <span class="text-color-secondary pl-1">{{ displayNumHighlighted }}</span>
        }
      </div>
    } @else {
      <div class="flex flex-row gap-1 align-items-center">
        <p-button
          [disabled]="(webSelectedView() === WebViewType.Original && !enableOriginalEdits()) || (webSelectedView() === WebViewType.Modified && jobPending())"
          [icon]="editing() ? 'pi pi-save' : 'pi pi-pen-to-square'"
          [label]="editing() ? ('common.save' | translate) : ('common.edit' | translate)"
          (onClick)="toggleEditing(webSelectedView())"
          outlined
          styleClass="secondary-outline"
        />
        <p-button
          [icon]="copying() ? 'pi pi-checkmark' : 'pi pi-clipboard'"
          [label]="copying() ? ('common.copied' | translate) : ('common.copyCode' | translate)"
          (onClick)="toggleCopying(webSelectedView())"
          outlined
          styleClass="secondary-outline"
        />
        @if (getUrl()) {
          <a [href]="getUrl()" class="secondary-outline no-underline" outlined pButton rel="noopener noreferrer" target="_blank">
            <span class="pButtonLabel"><i class="pi pi-external-link mr-2"></i>{{ 'common.openNewTab' | translate }}</span>
          </a>
        }
        @if (webSelectedView() === WebViewType.Original) {
          @if (!enableOriginalEdits()) {
            <p-button [label]="'common.enableEdits' | translate" (onClick)="enableOriginalEdits.set(true)" icon="pi pi-file-edit" outlined severity="warn" styleClass="secondary-outline" />
          } @else {
            <p-message icon="pi pi-exclamation-triangle" severity="warn">{{ 'compare.rendered.originalEditsMessage' | translate }}</p-message>
          }
        } @else if (jobPending()) {
          <p-message icon="pi pi-spinner pi-spin" severity="contrast">{{ 'compare.waitingForAI' | translate }}</p-message>
        }
      </div>
    }
    <div class="flex flex-wrap justify-content-end align-items-center gap-2 min-w-min">
      @for (item of legendItems; track item.text) {
        <div class="flex align-items-center gap-2">
          <div
            [ngStyle]="{
              'background-color': item.style === 'highlight' ? item.colour : 'transparent',
              border: item.style === 'line' ? '2px ' + (item.lineStyle || 'solid') + ' ' + item.colour : 'none',
            }"
            class="legend-box"
          ></div>
          <span class="legend-text">{{ item.text | translate }}</span>
        </div>
      }
    </div>
  </div>
  <!--Shadow DOM-->
  <div [ngClass]="webSelectedView()" class="diff-container w-full p-0" #liveContainer></div>
</div>
`, styles: ['@import "https://use.fontawesome.com/releases/v5.15.4/css/all.css";\n\n/* src/app/components/compare/compare-rendered/compare-rendered.component.css */\n@font-face {\n  font-family: "Glyphicons Halflings";\n  src: url(https://www.canada.ca/etc/designs/canada/wet-boew/fonts/glyphicons-halflings-regular.woff2) format("woff2");\n}\n.diff-container {\n  border: 1px solid #dee2e6;\n  border-radius: 4px;\n  padding: 1rem;\n  overflow-y: scroll;\n  height: 75vh;\n  position: relative;\n}\n.diff-container.original {\n  border-color: #f3a59d;\n}\n.diff-container.modified {\n  border-color: #83d5a8;\n}\n.legend-box {\n  width: 16px;\n  height: 16px;\n  border-radius: 4px;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=compare-rendered.component.css.map */\n'] }]
  }], () => [], { beforeContent: [{ type: Input, args: [{ isSignal: true, alias: "beforeContent", required: false }] }], afterContent: [{ type: Input, args: [{ isSignal: true, alias: "afterContent", required: false }] }], canUndo: [{ type: Input, args: [{ isSignal: true, alias: "canUndo", required: false }] }], jobPending: [{ type: Input, args: [{ isSignal: true, alias: "jobPending", required: false }] }], contentChanged: [{ type: Output, args: ["contentChanged"] }], hasChanges: [{ type: Output, args: ["hasChanges"] }], undoChanges: [{ type: Output, args: ["undoChanges"] }], liveContainer: [{ type: ViewChild, args: ["liveContainer", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompareRenderedComponent, { className: "CompareRenderedComponent", filePath: "src/app/components/compare/compare-rendered/compare-rendered.component.ts", lineNumber: 40 });
})();

// src/app/components/compare/compare-source/compare-source.service.ts
var CompareSourceService = class _CompareSourceService {
  translate = inject(TranslateService);
  //Update source code views
  generateSourceContent(container, viewType, originalHtml, modifiedHtml, originalUrl, modifiedUrl) {
    return __async(this, null, function* () {
      this.clearDiffContainer(container);
      switch (viewType) {
        case "original":
          this.renderSource(container, originalHtml);
          break;
        case "modified":
          this.renderSource(container, modifiedHtml);
          break;
        case "side-by-side":
          yield this.renderSourceDiff(container, originalHtml, modifiedHtml, originalUrl, modifiedUrl, "side-by-side");
          break;
        case "line-by-line":
          yield this.renderSourceDiff(container, originalHtml, modifiedHtml, originalUrl, modifiedUrl, "line-by-line");
          break;
      }
    });
  }
  renderSource(container, html) {
    return __async(this, null, function* () {
      const { default: Prism } = yield import("./chunk-7W6HYFOI.js");
      yield import("./chunk-EOCUCU3P.js");
      this.loadPrismTheme();
      const escapedHtml = html.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      container.innerHTML = `<pre class="m-0"><code class="language-html">${escapedHtml}</code></pre>`;
      const codeBlock = container.querySelector("code");
      if (codeBlock) {
        Prism.highlightElement(codeBlock);
      }
    });
  }
  //Generate source code diff
  renderSourceDiff(container, originalHtml, modifiedHtml, originalUrl, modifiedUrl, diffStyle = "side-by-side") {
    return __async(this, null, function* () {
      try {
        const [{ createPatch }, diff2htmlModule] = yield Promise.all([import("./chunk-YMQ63AP2.js"), import("./chunk-WG3URZ2B.js")]);
        const Diff2HtmlUI = diff2htmlModule.Diff2HtmlUI ?? diff2htmlModule.default?.Diff2HtmlUI;
        if (!Diff2HtmlUI) {
          throw new Error("Diff2HtmlUI export not found in diff2html-ui-slim module");
        }
        const patch = createPatch("", originalHtml, modifiedHtml, originalUrl, modifiedUrl, {
          ignoreWhitespace: true
        });
        const diffOptions = {
          outputFormat: diffStyle,
          drawFileList: false,
          fileContentToggle: false,
          matching: "words",
          synchronisedScroll: true,
          highlight: true,
          rawTemplates: {
            "generic-empty-diff": `
<tr>
    <td class="d2h-info">
        <div class="{{contentClass}} d2h-info">
            ${this.translate.instant("compare.source.fileWithoutChanges")}
        </div>
    </td>
</tr>`
          }
        };
        container.innerHTML = "";
        const diff2 = new Diff2HtmlUI(container, patch, diffOptions);
        diff2.highlightCode();
        diff2.draw();
        this.applyDiff2HtmlTheme();
      } catch (error) {
        console.error("Error generating diff2html:", error);
        container.innerHTML = '<p class="p-error">Error generating diff view.</p>';
      }
    });
  }
  //Clear diff container
  clearDiffContainer(container) {
    if (container) {
      container.innerHTML = "";
    }
  }
  //Toggle theme for light/dark mode
  loadPrismTheme() {
    const isDarkMode = document.documentElement.classList.contains("dark-mode");
    const existingLink = document.getElementById("prism-theme");
    const newHref = isDarkMode ? "/css/prism-okaidia.min.css" : "/css/prism.min.css";
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
  //Apply dark/light color scheme to diff2html wrapper elements
  applyDiff2HtmlTheme() {
    const isDarkMode = document.documentElement.classList.contains("dark-mode");
    document.querySelectorAll(".d2h-wrapper").forEach((diffWrapper) => {
      diffWrapper.classList.remove("d2h-dark-color-scheme", "d2h-light-color-scheme");
      diffWrapper.classList.add(isDarkMode ? "d2h-dark-color-scheme" : "d2h-light-color-scheme");
    });
  }
  static \u0275fac = function CompareSourceService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CompareSourceService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CompareSourceService, factory: _CompareSourceService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompareSourceService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/common/gcweb-snippets.config.ts
var GCWEB_SNIPPETS_ENG = [
  {
    label: "Or - side-by-side",
    category: "And/or",
    snippet: `<ul class="list-unstyled cnjnctn-type-or cnjnctn-xs">
  <li class="cnjnctn-col">
    <p>This is content for column A</p>
  </li>
  <li class="cnjnctn-col">
    <p>This is content for column B</p>
  </li>
</ul>`
  },
  {
    label: "Or - stacked",
    category: "And/or",
    snippet: `<ul class="list-unstyled cnjnctn-type-or">
  <li class="cnjnctn-col">
    <p>This is content for column A</p>
  </li>
  <li class="cnjnctn-col">
    <p>This is content for column B</p>
  </li>
</ul>`
  },
  {
    label: "And - side-by-side",
    category: "And/or",
    snippet: `<ul class="list-unstyled cnjnctn-type-and cnjnctn-xs">
  <li class="cnjnctn-col">
    <p>This is content for column A</p>
  </li>
  <li class="cnjnctn-col">
    <p>This is content for column B</p>
  </li>
</ul>`
  },
  {
    label: "And - stacked",
    category: "And/or",
    snippet: `<ul class="list-unstyled cnjnctn-type-and">
  <li class="cnjnctn-col">
    <p>This is content for column A</p>
  </li>
  <li class="cnjnctn-col">
    <p>This is content for column B</p>
  </li>
</ul>`
  },
  {
    label: "English",
    category: "Rescue link",
    snippet: `<p class="pull-left small"><strong>You may be looking for:</strong></p>
<ul class="pull-left small mrgn-lft-md list-unstyled">
  <li><a href="#">Link text</a></li>
</ul>
<div class="clearfix"></div>`
  },
  {
    label: "French",
    category: "Rescue link",
    snippet: `<p class="pull-left small"><strong>Vous cherchez peut-\xEAtre :</strong></p>
<ul class="pull-left small mrgn-lft-md list-unstyled">
  <li><a href="#">Texte du lien</a></li>
</ul>
<div class="clearfix"></div>`
  },
  {
    label: "Bulleted",
    category: "List",
    snippet: `<ul>
  <li>List item 1</li>
  <li>List item 2</li>
  <li>List item 3</li>
</ul>`
  },
  {
    label: "Numbered",
    category: "List",
    snippet: `<ol>
  <li>List item 1</li>
  <li>List item 2</li>
  <li>List item 3</li>
</ol>`
  },
  {
    label: "Checkmarks",
    category: "List",
    snippet: `<ul class="fa-ul">
  <li><span class="fas fa-check text-success fa-li"></span>List item 1</li>
  <li><span class="fas fa-check text-success fa-li"></span>List item 2</li>
  <li><span class="fas fa-times text-danger fa-li"></span>List item 3</li>
</ul>`
  },
  {
    label: "Steps",
    category: "List",
    snippet: `<ol class="lst-stps stps-strpd">
  <li><h3>Heading goes here</h3>List item 1</li>
  <li><h3>Heading goes here</h3>List item 2</li>
  <li><h3>Heading goes here</h3>List item 3</li>
</ol>`
  },
  {
    label: "Definition",
    category: "List",
    snippet: `<dl class="dl-horizontal dt-max">
  <dt>Term 1</dt>
  <dd>Description of term 1</dd>
  <dt>Term 2</dt>
  <dd>Description of term 2</dd>
  <dt>Term 3</dt>
  <dd>Description of term 3</dd>
</dl>`
  },
  { label: "Expand/Collapse", snippet: `<details>
  <summary>Descriptive title</summary>
  <p>Secondary information.</p>
</details>` },
  {
    label: "Info (blue)",
    category: "Alert",
    snippet: `<section class="alert alert-info">
  <h2 class="h3 mrgn-tp-0">Descriptive title</h2>
  <p>Content of your alert <a href="#">link text</a>.</p>
</section>`
  },
  {
    label: "Success (green)",
    category: "Alert",
    snippet: `<section class="alert alert-success">
  <h2 class="h3 mrgn-tp-0">Descriptive title</h2>
  <p>Content of your alert <a href="#">link text</a>.</p>
</section>`
  },
  {
    label: "Warning (yellow)",
    category: "Alert",
    snippet: `<section class="alert alert-warning">
  <h2 class="h3 mrgn-tp-0">Descriptive title</h2>
  <p>Content of your alert <a href="#">link text</a>.</p>
</section>`
  },
  {
    label: "Danger (red)",
    category: "Alert",
    snippet: `<section class="alert alert-danger">
  <h2 class="h3 mrgn-tp-0">Descriptive title</h2>
  <p>Content of your alert <a href="#">link text</a>.</p>
</section>`
  }
];
var GCWEB_SNIPPETS_FRA = [
  {
    label: "Ou - c\xF4te \xE0 c\xF4te",
    category: "Et/ou",
    snippet: `<ul class="list-unstyled cnjnctn-type-or cnjnctn-xs">
  <li class="cnjnctn-col">
    <p>Contenu de la colonne A</p>
  </li>
  <li class="cnjnctn-col">
    <p>Contenu de la colonne B</p>
  </li>
</ul>`
  },
  {
    label: "Ou - empil\xE9",
    category: "Et/ou",
    snippet: `<ul class="list-unstyled cnjnctn-type-or">
  <li class="cnjnctn-col">
    <p>Contenu de la colonne A</p>
  </li>
  <li class="cnjnctn-col">
    <p>Contenu de la colonne B</p>
  </li>
</ul>`
  },
  {
    label: "Et - c\xF4te \xE0 c\xF4te",
    category: "Et/ou",
    snippet: `<ul class="list-unstyled cnjnctn-type-and cnjnctn-xs">
  <li class="cnjnctn-col">
    <p>Contenu de la colonne A</p>
  </li>
  <li class="cnjnctn-col">
    <p>Contenu de la colonne B</p>
  </li>
</ul>`
  },
  {
    label: "Et - empil\xE9",
    category: "Et/ou",
    snippet: `<ul class="list-unstyled cnjnctn-type-and">
  <li class="cnjnctn-col">
    <p>Contenu de la colonne A</p>
  </li>
  <li class="cnjnctn-col">
    <p>Contenu de la colonne B</p>
  </li>
</ul>`
  },
  {
    label: "Fran\xE7ais",
    category: "Lien de secours",
    snippet: `<p class="pull-left small"><strong>Vous cherchez peut-\xEAtre :</strong></p>
<ul class="pull-left small mrgn-lft-md list-unstyled">
  <li><a href="#">Texte du lien</a></li>
</ul>
<div class="clearfix"></div>`
  },
  {
    label: "Anglais",
    category: "Lien de secours",
    snippet: `<p class="pull-left small"><strong>You may be looking for:</strong></p>
<ul class="pull-left small mrgn-lft-md list-unstyled">
  <li><a href="#">Link text</a></li>
</ul>
<div class="clearfix"></div>`
  },
  {
    label: "\xC0 puces",
    category: "Liste",
    snippet: `<ul>
  <li>\xC9l\xE9ment 1 de la liste</li>
  <li>\xC9l\xE9ment 2 de la liste</li>
  <li>\xC9l\xE9ment 3 de la liste</li>
</ul>`
  },
  {
    label: "Num\xE9rot\xE9e",
    category: "Liste",
    snippet: `<ol>
  <li>\xC9l\xE9ment 1 de la liste</li>
  <li>\xC9l\xE9ment 2 de la liste</li>
  <li>\xC9l\xE9ment 3 de la liste</li>
</ol>`
  },
  {
    label: "Coches",
    category: "Liste",
    snippet: `<ul class="fa-ul">
  <li><span class="fas fa-check text-success fa-li"></span>\xC9l\xE9ment 1 de la liste</li>
  <li><span class="fas fa-check text-success fa-li"></span>\xC9l\xE9ment 2 de la liste</li>
  <li><span class="fas fa-times text-danger fa-li"></span>\xC9l\xE9ment 3 de la liste</li>
</ul>`
  },
  {
    label: "\xC9tapes",
    category: "Liste",
    snippet: `<ol class="lst-stps stps-strpd">
  <li><h3>L'en-t\xEAte va ici</h3>\xC9l\xE9ment 1 de la liste</li>
  <li><h3>L'en-t\xEAte va ici</h3>\xC9l\xE9ment 2 de la liste</li>
  <li><h3>L'en-t\xEAte va ici</h3>\xC9l\xE9ment 3 de la liste</li>
</ol>`
  },
  {
    label: "D\xE9finition",
    category: "Liste",
    snippet: `<dl class="dl-horizontal dt-max">
  <dt>1er terme</dt>
  <dd>Description du terme 1</dd>
  <dt>2e terme</dt>
  <dd>Description du terme 2</dd>
  <dt>3e terme</dt>
  <dd>Description du terme 3</dd>
</dl>`
  },
  { label: "D\xE9velopper/r\xE9duire", snippet: `<details>
  <summary>Titre descriptif</summary>
  <p>Renseignements secondaires.</p>
</details>` },
  {
    label: "Information (bleue)",
    category: "Alerte",
    snippet: `<section class="alert alert-info">
  <h2 class="h3 mrgn-tp-0">Titre descriptif</h2>
  <p>Contenu de votre alerte <a href="#">texte du lien</a>.</p>
</section>`
  },
  {
    label: "Succ\xE8s (verte)",
    category: "Alerte",
    snippet: `<section class="alert alert-success">
  <h2 class="h3 mrgn-tp-0">Titre descriptif</h2>
  <p>Contenu de votre alerte <a href="#">texte du lien</a>.</p>
</section>`
  },
  {
    label: "Avertissement (jaune)",
    category: "Alerte",
    snippet: `<section class="alert alert-warning">
  <h2 class="h3 mrgn-tp-0">Titre descriptif</h2>
  <p>Contenu de votre alerte <a href="#">texte du lien</a>.</p>
</section>`
  },
  {
    label: "Danger (rouge)",
    category: "Alerte",
    snippet: `<section class="alert alert-danger">
  <h2 class="h3 mrgn-tp-0">Titre descriptif</h2>
  <p>Contenu de votre alerte <a href="#">texte du lien</a>.</p>
</section>`
  }
];

// src/app/components/compare/compare-source/compare-source.component.ts
var _c04 = ["sourceContainer"];
var _c14 = ["snippetMenu"];
var _c24 = (a0, a1) => ({ "background-color": a0, border: a1 });
var _forTrack02 = ($index, $item) => $item.value;
var _forTrack12 = ($index, $item) => $item.text;
function CompareSourceComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "p-radiobutton", 13);
    \u0275\u0275listener("ngModelChange", function CompareSourceComponent_For_6_Template_p_radiobutton_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSourceViewChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 14);
    \u0275\u0275element(3, "i");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const view_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("inputId", "show_" + view_r3.value)("name", view_r3.value)("ngModel", ctx_r1.sourceSelectedView())("value", view_r3.value);
    \u0275\u0275advance();
    \u0275\u0275property("for", "show_" + view_r3.value);
    \u0275\u0275advance();
    \u0275\u0275classMap(view_r3.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", view_r3.label, " ");
  }
}
function CompareSourceComponent_Conditional_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 16);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("onClick", function CompareSourceComponent_Conditional_8_Conditional_1_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.undoChanges.emit());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 1, "compare.button.undo"));
  }
}
function CompareSourceComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275conditionalCreate(1, CompareSourceComponent_Conditional_8_Conditional_1_Template, 2, 3, "p-button", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.canUndo() ? 1 : -1);
  }
}
function CompareSourceComponent_Conditional_9_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 16);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("onClick", function CompareSourceComponent_Conditional_9_Conditional_4_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.undoChanges.emit());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 1, "compare.button.undo"));
  }
}
function CompareSourceComponent_Conditional_9_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 19)(1, "span", 21);
    \u0275\u0275element(2, "i", 22);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", ctx_r1.getUrl(), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "common.openNewTab"));
  }
}
function CompareSourceComponent_Conditional_9_Conditional_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 25);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("onClick", function CompareSourceComponent_Conditional_9_Conditional_9_Conditional_0_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.enableOriginalEdits.set(true));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 1, "common.enableEdits"));
  }
}
function CompareSourceComponent_Conditional_9_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-message", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "compare.rendered.originalEditsMessage"));
  }
}
function CompareSourceComponent_Conditional_9_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CompareSourceComponent_Conditional_9_Conditional_9_Conditional_0_Template, 2, 3, "p-button", 23)(1, CompareSourceComponent_Conditional_9_Conditional_9_Conditional_1_Template, 3, 3, "p-message", 24);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(!ctx_r1.enableOriginalEdits() ? 0 : 1);
  }
}
function CompareSourceComponent_Conditional_9_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-message", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "compare.waitingForAI"));
  }
}
function CompareSourceComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "p-button", 17);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("onClick", function CompareSourceComponent_Conditional_9_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleEditing(ctx_r1.sourceSelectedView()));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, CompareSourceComponent_Conditional_9_Conditional_4_Template, 2, 3, "p-button", 15);
    \u0275\u0275elementStart(5, "p-button", 18);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275listener("onClick", function CompareSourceComponent_Conditional_9_Template_p_button_onClick_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleCopying(ctx_r1.sourceSelectedView()));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, CompareSourceComponent_Conditional_9_Conditional_8_Template, 5, 4, "a", 19);
    \u0275\u0275conditionalCreate(9, CompareSourceComponent_Conditional_9_Conditional_9_Template, 2, 1)(10, CompareSourceComponent_Conditional_9_Conditional_10_Template, 3, 3, "p-message", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.sourceSelectedView() === ctx_r1.SourceViewType.Original && !ctx_r1.enableOriginalEdits() || ctx_r1.sourceSelectedView() === ctx_r1.SourceViewType.Modified && ctx_r1.jobPending())("icon", ctx_r1.editing() ? "pi pi-save" : "pi pi-pen-to-square")("label", ctx_r1.editing() ? \u0275\u0275pipeBind1(2, 8, "common.save") : \u0275\u0275pipeBind1(3, 10, "common.edit"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.canUndo() ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.copying() ? "pi pi-checkmark" : "pi pi-clipboard")("label", ctx_r1.copying() ? \u0275\u0275pipeBind1(6, 12, "common.copied") : \u0275\u0275pipeBind1(7, 14, "common.copyCode"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.getUrl() ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.sourceSelectedView() === ctx_r1.SourceViewType.Original ? 9 : ctx_r1.jobPending() ? 10 : -1);
  }
}
function CompareSourceComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "div", 26);
    \u0275\u0275elementStart(2, "span", 27);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction2(4, _c24, item_r8.style === "highlight" ? item_r8.colour : "transparent", item_r8.style === "line" ? "2px " + (item_r8.lineStyle || "solid") + " " + item_r8.colour : "none"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, item_r8.text));
  }
}
var SourceViewType;
(function(SourceViewType2) {
  SourceViewType2["Original"] = "original";
  SourceViewType2["Modified"] = "modified";
  SourceViewType2["SideBySide"] = "side-by-side";
  SourceViewType2["LineByLine"] = "line-by-line";
})(SourceViewType || (SourceViewType = {}));
var CompareSourceComponent = class _CompareSourceComponent {
  translate = inject(TranslateService);
  messageService = inject(MessageService);
  compareSourceService = inject(CompareSourceService);
  fetchService = inject(FetchService);
  htmlNormalizationService = inject(HtmlNormalizationService);
  settingsService = inject(UserSettingsService);
  // Inputs
  beforeContent = input(...ngDevMode ? [void 0, { debugName: "beforeContent" }] : (
    /* istanbul ignore next */
    []
  ));
  afterContent = input(...ngDevMode ? [void 0, { debugName: "afterContent" }] : (
    /* istanbul ignore next */
    []
  ));
  canUndo = input(false, ...ngDevMode ? [{ debugName: "canUndo" }] : (
    /* istanbul ignore next */
    []
  ));
  jobPending = input(false, ...ngDevMode ? [{ debugName: "jobPending" }] : (
    /* istanbul ignore next */
    []
  ));
  // Adjust inputs if one is undefined so we can render page with no changes
  resolvedBefore = computed(() => this.beforeContent() ?? this.afterContent(), ...ngDevMode ? [{ debugName: "resolvedBefore" }] : (
    /* istanbul ignore next */
    []
  ));
  resolvedAfter = computed(() => this.afterContent() ?? this.beforeContent(), ...ngDevMode ? [{ debugName: "resolvedAfter" }] : (
    /* istanbul ignore next */
    []
  ));
  // Outputs
  contentChanged = output();
  hasChanges = output();
  undoChanges = output();
  // Get DOM elements from template
  sourceContainer = viewChild("sourceContainer", ...ngDevMode ? [{ debugName: "sourceContainer" }] : (
    /* istanbul ignore next */
    []
  ));
  // Signals
  enableOriginalEdits = signal(false, ...ngDevMode ? [{ debugName: "enableOriginalEdits" }] : (
    /* istanbul ignore next */
    []
  ));
  // Prevent duplicate effects
  renderToken = 0;
  // Source view options
  SourceViewType = SourceViewType;
  sourceSelectedView = signal(SourceViewType.SideBySide, ...ngDevMode ? [{ debugName: "sourceSelectedView" }] : (
    /* istanbul ignore next */
    []
  ));
  get sourceViewOptions() {
    const editedText = ` (${this.translate.instant("common.edited").toLowerCase()})`;
    const beforeVersion = this.beforeContent()?.version;
    const beforePrefix = this.translate.instant("common.before") + this.translate.instant("common.colon");
    const beforeBase = beforeVersion ? beforePrefix + this.translate.instant("common.source." + beforeVersion) : this.translate.instant("common.before");
    const beforeLabel = beforeBase + (this.beforeContent()?.edited ? editedText : "");
    const afterVersion = this.afterContent()?.version;
    const afterPrefix = this.translate.instant("common.after") + this.translate.instant("common.colon");
    const afterBase = afterVersion ? afterPrefix + this.translate.instant("common.source." + afterVersion) : this.translate.instant("common.after");
    const afterLabel = afterBase + (this.afterContent()?.edited ? editedText : "");
    return [
      {
        label: beforeLabel,
        value: SourceViewType.Original,
        icon: "pi pi-file"
      },
      {
        label: this.translate.instant("compare.source.view.sidebyside"),
        value: SourceViewType.SideBySide,
        icon: "pi pi-pause"
      },
      {
        label: this.translate.instant("compare.source.view.linebyline"),
        value: SourceViewType.LineByLine,
        icon: "pi pi-equals"
      },
      {
        label: afterLabel,
        value: SourceViewType.Modified,
        icon: "pi pi-file-edit"
      }
    ];
  }
  onSourceViewChange(viewType) {
    this.sourceSelectedView.set(viewType);
  }
  constructor() {
    effect(() => {
      const viewType = this.sourceSelectedView();
      const beforeContent = this.resolvedBefore();
      const afterContent = this.resolvedAfter();
      const container = this.sourceContainer();
      this.translate.currentLang();
      this.settingsService.darkMode();
      if (beforeContent && afterContent && container) {
        this.rebuildSourceContent(container.nativeElement, viewType, beforeContent, afterContent);
      }
      this.enableOriginalEdits.set(false);
      this.editing.set(false);
    });
  }
  ngOnDestroy() {
    const editable = this.sourceContainer()?.nativeElement;
    editable?.removeEventListener("contextmenu", this.onSourceContextMenu);
  }
  rebuildSourceContent(container, viewType, beforeContent, afterContent) {
    return __async(this, null, function* () {
      const token = ++this.renderToken;
      const beforePath = this.fetchService.generatePath(beforeContent.url ?? "");
      const afterPath = this.fetchService.generatePath(afterContent.url ?? "");
      const beforeHTML = yield this.htmlNormalizationService.formatHtml(beforeContent.html);
      const afterHTML = yield this.htmlNormalizationService.formatHtml(afterContent.html);
      yield this.compareSourceService.generateSourceContent(container, viewType, beforeHTML, afterHTML, beforePath, afterPath);
      if (token !== this.renderToken)
        return;
      const elements = container.querySelectorAll(".hljs");
      if (elements.length > 0) {
        this.hasChanges.emit(true);
      } else if (this.sourceSelectedView() === SourceViewType.LineByLine || this.sourceSelectedView() === SourceViewType.SideBySide) {
        this.hasChanges.emit(false);
      }
      console.log(elements.length);
    });
  }
  // Legend
  get legendItems() {
    const view = this.sourceSelectedView();
    const items = [];
    const red = this.settingsService.darkMode() ? "rgba(248, 81, 73, 0.4)" : "#ffb6ba";
    const green = this.settingsService.darkMode() ? "rgba(46, 160, 67, .4)" : "#97F295";
    if (view === SourceViewType.SideBySide || view === SourceViewType.LineByLine) {
      items.push({ text: this.translate.instant("compare.rendered.legend.previousVersion"), colour: red, style: "highlight" }, { text: this.translate.instant("compare.rendered.legend.updatedVersion"), colour: green, style: "highlight" });
    } else if (view === SourceViewType.Original) {
      items.push({ text: this.translate.instant("compare.rendered.legend.previousVersion"), colour: red, style: "line" });
    } else if (view === SourceViewType.Modified) {
      items.push({ text: this.translate.instant("compare.rendered.legend.updatedVersion"), colour: green, style: "line" });
    }
    return items;
  }
  // Edit
  editing = signal(false, ...ngDevMode ? [{ debugName: "editing" }] : (
    /* istanbul ignore next */
    []
  ));
  toggleEditing(view) {
    return __async(this, null, function* () {
      this.editing.set(!this.editing());
      const editable = this.sourceContainer()?.nativeElement;
      if (!editable) {
        console.warn("Editable area not found.");
        this.editing.set(false);
        return;
      }
      if (this.editing()) {
        editable.setAttribute("contenteditable", "true");
        editable.addEventListener("contextmenu", this.onSourceContextMenu);
        editable.focus();
      } else {
        editable.setAttribute("contenteditable", "false");
        editable.removeEventListener("contextmenu", this.onSourceContextMenu);
        const updatedContent = yield this.htmlNormalizationService.formatHtml(editable.textContent);
        const beforeContent = this.resolvedBefore();
        const afterContent = this.resolvedAfter();
        if (!beforeContent || !afterContent)
          return;
        this.contentChanged.emit({
          beforeContent: view === SourceViewType.Original ? __spreadProps(__spreadValues({}, beforeContent), { html: updatedContent, edited: true }) : beforeContent,
          afterContent: view === SourceViewType.Modified ? __spreadProps(__spreadValues({}, afterContent), { html: updatedContent, edited: true }) : afterContent
        });
      }
    });
  }
  // 6. Before/After - Copy
  copying = signal(false, ...ngDevMode ? [{ debugName: "copying" }] : (
    /* istanbul ignore next */
    []
  ));
  toggleCopying(view) {
    return __async(this, null, function* () {
      this.copying.set(true);
      const htmlToCopy = view === SourceViewType.Original ? this.resolvedBefore()?.html ?? "" : view === SourceViewType.Modified ? this.resolvedAfter()?.html ?? "" : "";
      navigator.clipboard.writeText(htmlToCopy).then(() => {
        this.messageService.add({
          severity: "success",
          summary: this.translate.instant("common.copiedToClipboard"),
          detail: htmlToCopy.slice(0, 100),
          life: 3e3
        });
        setTimeout(() => this.copying.set(false), 1e3);
      }).catch((err) => {
        this.messageService.add({
          severity: "error",
          summary: this.translate.instant("common.copyError"),
          detail: this.translate.instant("compare.rendered.noHtmlToCopy"),
          life: 5e3
        });
        this.copying.set(false);
        console.error("Clipboard copy failed:", err);
      });
    });
  }
  getUrl() {
    const url = this.sourceSelectedView() === SourceViewType.Original ? this.beforeContent()?.url : this.sourceSelectedView() === SourceViewType.Modified ? this.afterContent()?.url : null;
    return this.fetchService.isValidUrl(url) ? url : null;
  }
  //Context menu
  snippetMenu = viewChild("snippetMenu", ...ngDevMode ? [{ debugName: "snippetMenu" }] : (
    /* istanbul ignore next */
    []
  ));
  savedRange = null;
  snippetItems = computed(() => {
    const lang = this.translate.getCurrentLang() ?? "en";
    return lang.startsWith("fr") ? this.buildSnippetMenu(GCWEB_SNIPPETS_FRA) : this.buildSnippetMenu(GCWEB_SNIPPETS_ENG);
  }, ...ngDevMode ? [{ debugName: "snippetItems" }] : (
    /* istanbul ignore next */
    []
  ));
  buildSnippetMenu(snippets) {
    const grouped = /* @__PURE__ */ new Map();
    const topLevel = [];
    for (const s3 of snippets) {
      const item = { label: s3.label, command: () => this.insertSnippet(s3.snippet) };
      if (s3.category) {
        if (!grouped.has(s3.category))
          grouped.set(s3.category, []);
        grouped.get(s3.category).push(item);
      } else {
        topLevel.push(item);
      }
    }
    const categoryMenus = Array.from(grouped.entries()).map(([category, items]) => ({
      label: category,
      items
    }));
    return [...categoryMenus, ...topLevel];
  }
  onSourceContextMenu = (event) => {
    event.preventDefault();
    const selection = window.getSelection();
    this.savedRange = selection && selection.rangeCount > 0 ? selection.getRangeAt(0).cloneRange() : null;
    this.snippetMenu()?.show(event);
  };
  insertSnippet(snippet) {
    const editable = this.sourceContainer()?.nativeElement;
    if (!editable)
      return;
    editable.focus();
    const selection = window.getSelection();
    if (selection && this.savedRange) {
      selection.removeAllRanges();
      selection.addRange(this.savedRange);
    }
    document.execCommand("insertText", false, snippet);
  }
  static \u0275fac = function CompareSourceComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CompareSourceComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompareSourceComponent, selectors: [["aida-compare-source"]], viewQuery: function CompareSourceComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.sourceContainer, _c04, 5)(ctx.snippetMenu, _c14, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance(2);
    }
  }, inputs: { beforeContent: [1, "beforeContent"], afterContent: [1, "afterContent"], canUndo: [1, "canUndo"], jobPending: [1, "jobPending"] }, outputs: { contentChanged: "contentChanged", hasChanges: "hasChanges", undoChanges: "undoChanges" }, decls: 17, vars: 6, consts: [["sourceContainer", ""], ["snippetMenu", ""], [1, "flex", "flex-column", "text-color-secondary", "w-full"], ["for", "views'", 1, "mb-1", "font-semibold", "block"], ["id", "views", "role", "radiogroup", 1, "flex", "flex-row", "gap-3", "my-1"], [1, "field-radiobutton"], [1, "sticky", "top-0", "z-5", "p-0", "mb-2", "flex", "flex-wrap", "lg:flex-nowrap", "justify-content-between", "gap-5"], [1, "flex", "flex-row", "gap-2", "align-items-center"], [1, "flex", "flex-row", "gap-1", "align-items-center"], [1, "flex", "flex-wrap", "justify-content-end", "align-items-center", "gap-2", "min-w-min"], [1, "flex", "align-items-center", "gap-2"], [1, "diff-container", "w-full", "p-0", 3, "ngClass"], [3, "model"], ["size", "large", 3, "ngModelChange", "inputId", "name", "ngModel", "value"], [1, "cursor-pointer", "font-semibold", "flex", "align-items-center", "gap-1", 3, "for"], ["icon", "pi pi-refresh", "outlined", "", "styleClass", "secondary-outline", 3, "label"], ["icon", "pi pi-refresh", "outlined", "", "styleClass", "secondary-outline", 3, "onClick", "label"], ["outlined", "", "styleClass", "secondary-outline", 3, "onClick", "disabled", "icon", "label"], ["outlined", "", "styleClass", "secondary-outline", 3, "onClick", "icon", "label"], ["outlined", "", "pButton", "", "rel", "noopener noreferrer", "target", "_blank", 1, "secondary-outline", "no-underline", 3, "href"], ["icon", "pi pi-spinner pi-spin", "severity", "contrast"], [1, "pButtonLabel"], [1, "pi", "pi-external-link", "mr-2"], ["icon", "pi pi-file-edit", "outlined", "", "severity", "warn", "styleClass", "secondary-outline", 3, "label"], ["icon", "pi pi-exclamation-triangle", "severity", "warn"], ["icon", "pi pi-file-edit", "outlined", "", "severity", "warn", "styleClass", "secondary-outline", 3, "onClick", "label"], [1, "legend-box", 3, "ngStyle"], [1, "legend-text"]], template: function CompareSourceComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "label", 3);
      \u0275\u0275text(2);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4);
      \u0275\u0275repeaterCreate(5, CompareSourceComponent_For_6_Template, 5, 8, "div", 5, _forTrack02);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 6);
      \u0275\u0275conditionalCreate(8, CompareSourceComponent_Conditional_8_Template, 2, 1, "div", 7)(9, CompareSourceComponent_Conditional_9_Template, 11, 16, "div", 8);
      \u0275\u0275elementStart(10, "div", 9);
      \u0275\u0275repeaterCreate(11, CompareSourceComponent_For_12_Template, 5, 7, "div", 10, _forTrack12);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(13, "div", 11, 0)(15, "p-contextmenu", 12, 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "common.view"));
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.sourceViewOptions);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.sourceSelectedView() === ctx.SourceViewType.LineByLine || ctx.sourceSelectedView() === ctx.SourceViewType.SideBySide ? 8 : 9);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.legendItems);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", ctx.sourceSelectedView());
      \u0275\u0275advance(2);
      \u0275\u0275property("model", ctx.snippetItems());
    }
  }, dependencies: [CommonModule, NgClass, NgStyle, FormsModule, NgControlStatus, NgModel, ButtonModule, ButtonDirective, Button, ContextMenuModule, ContextMenu, MessageModule, Message, RadioButtonModule, RadioButton, TranslatePipe], styles: ["\n.diff-container[_ngcontent-%COMP%] {\n  border: 1px solid #dee2e6;\n  border-radius: 4px;\n  padding: 1rem;\n  overflow-y: scroll;\n  max-height: 75vh;\n  position: relative;\n}\n.diff-container.original[_ngcontent-%COMP%] {\n  border-color: #ffb6ba;\n}\n.diff-container.modified[_ngcontent-%COMP%] {\n  border-color: #97f295;\n}\n.dark-mode[_nghost-%COMP%]   .diff-container.original[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .diff-container.original[_ngcontent-%COMP%] {\n  border-color: rgba(248, 81, 73, 0.4);\n}\n.dark-mode[_nghost-%COMP%]   .diff-container.modified[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .diff-container.modified[_ngcontent-%COMP%] {\n  border-color: rgba(46, 160, 67, 0.4);\n}\n.legend-box[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border-radius: 4px;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=compare-source.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompareSourceComponent, [{
    type: Component,
    args: [{ selector: "aida-compare-source", imports: [CommonModule, FormsModule, TranslatePipe, ButtonModule, ContextMenuModule, MessageModule, RadioButtonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="flex flex-column text-color-secondary w-full">
  <!--View options-->
  <label class="mb-1 font-semibold block" for="views'">{{ 'common.view' | translate }}</label>
  <div id="views" class="flex flex-row gap-3 my-1" role="radiogroup">
    @for (view of sourceViewOptions; track view.value) {
      <div class="field-radiobutton">
        <p-radiobutton [inputId]="'show_' + view.value" [name]="view.value" [ngModel]="sourceSelectedView()" [value]="view.value" (ngModelChange)="onSourceViewChange($event)" size="large" />
        <label [for]="'show_' + view.value" class="cursor-pointer font-semibold flex align-items-center gap-1">
          <i [class]="view.icon"></i>
          {{ view.label }}
        </label>
      </div>
    }
  </div>
  <!--Toolbar options-->
  <div class="sticky top-0 z-5 p-0 mb-2 flex flex-wrap lg:flex-nowrap justify-content-between gap-5">
    @if (sourceSelectedView() === SourceViewType.LineByLine || sourceSelectedView() === SourceViewType.SideBySide) {
      <div class="flex flex-row gap-2 align-items-center">
        @if (canUndo()) {
          <p-button [label]="'compare.button.undo' | translate" (onClick)="undoChanges.emit()" icon="pi pi-refresh" outlined styleClass="secondary-outline" />
        }
      </div>
    } @else {
      <div class="flex flex-row gap-1 align-items-center">
        <p-button
          [disabled]="(sourceSelectedView() === SourceViewType.Original && !enableOriginalEdits()) || (sourceSelectedView() === SourceViewType.Modified && jobPending())"
          [icon]="editing() ? 'pi pi-save' : 'pi pi-pen-to-square'"
          [label]="editing() ? ('common.save' | translate) : ('common.edit' | translate)"
          (onClick)="toggleEditing(sourceSelectedView())"
          outlined
          styleClass="secondary-outline"
        />
        @if (canUndo()) {
          <p-button [label]="'compare.button.undo' | translate" (onClick)="undoChanges.emit()" icon="pi pi-refresh" outlined styleClass="secondary-outline" />
        }
        <p-button
          [icon]="copying() ? 'pi pi-checkmark' : 'pi pi-clipboard'"
          [label]="copying() ? ('common.copied' | translate) : ('common.copyCode' | translate)"
          (onClick)="toggleCopying(sourceSelectedView())"
          outlined
          styleClass="secondary-outline"
        />
        @if (getUrl()) {
          <a [href]="getUrl()" class="secondary-outline no-underline" outlined pButton rel="noopener noreferrer" target="_blank">
            <span class="pButtonLabel"><i class="pi pi-external-link mr-2"></i>{{ 'common.openNewTab' | translate }}</span>
          </a>
        }
        @if (sourceSelectedView() === SourceViewType.Original) {
          @if (!enableOriginalEdits()) {
            <p-button [label]="'common.enableEdits' | translate" (onClick)="enableOriginalEdits.set(true)" icon="pi pi-file-edit" outlined severity="warn" styleClass="secondary-outline" />
          } @else {
            <p-message icon="pi pi-exclamation-triangle" severity="warn">{{ 'compare.rendered.originalEditsMessage' | translate }}</p-message>
          }
        } @else if (jobPending()) {
          <p-message icon="pi pi-spinner pi-spin" severity="contrast">{{ 'compare.waitingForAI' | translate }}</p-message>
        }
      </div>
    }
    <div class="flex flex-wrap justify-content-end align-items-center gap-2 min-w-min">
      @for (item of legendItems; track item.text) {
        <div class="flex align-items-center gap-2">
          <div
            [ngStyle]="{
              'background-color': item.style === 'highlight' ? item.colour : 'transparent',
              border: item.style === 'line' ? '2px ' + (item.lineStyle || 'solid') + ' ' + item.colour : 'none',
            }"
            class="legend-box"
          ></div>
          <span class="legend-text">{{ item.text | translate }}</span>
        </div>
      }
    </div>
  </div>
  <!--Diff container-->
  <div [ngClass]="sourceSelectedView()" class="diff-container w-full p-0" #sourceContainer></div>
  <p-contextmenu [model]="snippetItems()" #snippetMenu />
</div>
`, styles: ["/* src/app/components/compare/compare-source/compare-source.component.css */\n.diff-container {\n  border: 1px solid #dee2e6;\n  border-radius: 4px;\n  padding: 1rem;\n  overflow-y: scroll;\n  max-height: 75vh;\n  position: relative;\n}\n.diff-container.original {\n  border-color: #ffb6ba;\n}\n.diff-container.modified {\n  border-color: #97f295;\n}\n:host-context(.dark-mode) .diff-container.original {\n  border-color: rgba(248, 81, 73, 0.4);\n}\n:host-context(.dark-mode) .diff-container.modified {\n  border-color: rgba(46, 160, 67, 0.4);\n}\n.legend-box {\n  width: 16px;\n  height: 16px;\n  border-radius: 4px;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=compare-source.component.css.map */\n"] }]
  }], () => [], { beforeContent: [{ type: Input, args: [{ isSignal: true, alias: "beforeContent", required: false }] }], afterContent: [{ type: Input, args: [{ isSignal: true, alias: "afterContent", required: false }] }], canUndo: [{ type: Input, args: [{ isSignal: true, alias: "canUndo", required: false }] }], jobPending: [{ type: Input, args: [{ isSignal: true, alias: "jobPending", required: false }] }], contentChanged: [{ type: Output, args: ["contentChanged"] }], hasChanges: [{ type: Output, args: ["hasChanges"] }], undoChanges: [{ type: Output, args: ["undoChanges"] }], sourceContainer: [{ type: ViewChild, args: ["sourceContainer", { isSignal: true }] }], snippetMenu: [{ type: ViewChild, args: ["snippetMenu", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompareSourceComponent, { className: "CompareSourceComponent", filePath: "src/app/components/compare/compare-source/compare-source.component.ts", lineNumber: 40 });
})();

export {
  CompareRenderedComponent,
  CompareSourceComponent
};
//# sourceMappingURL=chunk-WYFK27UY.js.map
