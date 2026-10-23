import {
  SaveButtonComponent
} from "./chunk-DYP475L4.js";
import "./chunk-ATVW4L4U.js";
import {
  AddUrlsService
} from "./chunk-45E4XN6P.js";
import {
  EditNodeComponent
} from "./chunk-XDF2K2M5.js";
import "./chunk-4673KVKI.js";
import "./chunk-GGIC4QUJ.js";
import {
  IaDiagramService
} from "./chunk-4SEU7J4Z.js";
import {
  AddPagesLinkComponent
} from "./chunk-3Y4CZOCC.js";
import {
  StyleTreeNodeService
} from "./chunk-OIQTDMBR.js";
import {
  ProjectSettingsComponent
} from "./chunk-PN5M4GQP.js";
import {
  Menu,
  MenuModule
} from "./chunk-PL2PAX7Y.js";
import "./chunk-YTOYTTTA.js";
import "./chunk-AENIRXXJ.js";
import "./chunk-Y576ZK6L.js";
import {
  Dialog,
  DialogModule
} from "./chunk-ILW73YBV.js";
import "./chunk-FQDO2XGS.js";
import {
  ChevronUpIcon,
  ProjectCacheService
} from "./chunk-2FR4EOOH.js";
import "./chunk-D57SAGZH.js";
import "./chunk-JNZO32C5.js";
import "./chunk-MKX7R2UM.js";
import {
  ProjectStateService
} from "./chunk-KTNEX2EU.js";
import {
  Checkbox,
  CheckboxModule
} from "./chunk-GW63RQCY.js";
import "./chunk-XFA5GYX6.js";
import "./chunk-R6QXKFAV.js";
import "./chunk-NJENQTX6.js";
import {
  FetchService
} from "./chunk-B6BNTBK3.js";
import {
  ChevronRightIcon
} from "./chunk-BHVFX6OF.js";
import {
  IconField,
  InputIcon,
  Scroller,
  SearchIcon
} from "./chunk-JR3PODJQ.js";
import {
  AutoFocus,
  AutoFocusModule,
  BaseComponent,
  Bind,
  BindModule,
  Button,
  ButtonModule,
  ChevronDownIcon,
  FormsModule,
  InputText,
  NgControlStatus,
  NgModel,
  PARENT_INSTANCE,
  Ripple,
  SpinnerIcon,
  Tooltip,
  TooltipModule
} from "./chunk-QN4TTD5X.js";
import "./chunk-DMOF7S63.js";
import {
  BaseStyle,
  C,
  CommonModule,
  L,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  PrimeTemplate,
  SharedModule,
  TranslationKeys,
  TreeDragDropService,
  UserSettingsService,
  X,
  Y,
  Z,
  bt,
  p,
  tt
} from "./chunk-7YP54JN5.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  Optional,
  Output,
  Subject,
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
  model,
  numberAttribute,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵanimateEnter,
  ɵɵanimateLeave,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryAdvance,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
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
  __spreadValues
} from "./chunk-YCXP4XZS.js";

// node_modules/@primeuix/styles/dist/organizationchart/index.mjs
var style = "\n    .p-organizationchart-table {\n        border-spacing: 0;\n        border-collapse: separate;\n        margin: 0 auto;\n    }\n\n    .p-organizationchart-table > tbody > tr > td {\n        text-align: center;\n        vertical-align: top;\n        padding: 0 dt('organizationchart.gutter');\n    }\n\n    .p-organizationchart-node {\n        display: inline-block;\n        position: relative;\n        border: 1px solid dt('organizationchart.node.border.color');\n        background: dt('organizationchart.node.background');\n        color: dt('organizationchart.node.color');\n        padding: dt('organizationchart.node.padding');\n        border-radius: dt('organizationchart.node.border.radius');\n        transition:\n            background dt('organizationchart.transition.duration'),\n            border-color dt('organizationchart.transition.duration'),\n            color dt('organizationchart.transition.duration'),\n            box-shadow dt('organizationchart.transition.duration');\n    }\n\n    .p-organizationchart-node:has(.p-organizationchart-node-toggle-button) {\n        padding: dt('organizationchart.node.toggleable.padding');\n    }\n\n    .p-organizationchart-node.p-organizationchart-node-selectable:not(.p-organizationchart-node-selected):hover {\n        background: dt('organizationchart.node.hover.background');\n        color: dt('organizationchart.node.hover.color');\n    }\n\n    .p-organizationchart-node-selected {\n        background: dt('organizationchart.node.selected.background');\n        color: dt('organizationchart.node.selected.color');\n    }\n\n    .p-organizationchart-node-toggle-button {\n        position: absolute;\n        inset-block-end: calc(-1 * calc(dt('organizationchart.node.toggle.button.size') / 2));\n        margin-inline-start: calc(-1 * calc(dt('organizationchart.node.toggle.button.size') / 2));\n        z-index: 2;\n        inset-inline-start: 50%;\n        user-select: none;\n        cursor: pointer;\n        width: dt('organizationchart.node.toggle.button.size');\n        height: dt('organizationchart.node.toggle.button.size');\n        text-decoration: none;\n        background: dt('organizationchart.node.toggle.button.background');\n        color: dt('organizationchart.node.toggle.button.color');\n        border-radius: dt('organizationchart.node.toggle.button.border.radius');\n        border: 1px solid dt('organizationchart.node.toggle.button.border.color');\n        display: inline-flex;\n        justify-content: center;\n        align-items: center;\n        outline-color: transparent;\n        transition:\n            background dt('organizationchart.transition.duration'),\n            color dt('organizationchart.transition.duration'),\n            border-color dt('organizationchart.transition.duration'),\n            outline-color dt('organizationchart.transition.duration'),\n            box-shadow dt('organizationchart.transition.duration');\n    }\n\n    .p-organizationchart-node-toggle-button:hover {\n        background: dt('organizationchart.node.toggle.button.hover.background');\n        color: dt('organizationchart.node.toggle.button.hover.color');\n    }\n\n    .p-organizationchart-node-toggle-button:focus-visible {\n        box-shadow: dt('organizationchart.node.toggle.button.focus.ring.shadow');\n        outline: dt('organizationchart.node.toggle.button.focus.ring.width') dt('organizationchart.node.toggle.button.focus.ring.style') dt('organizationchart.node.toggle.button.focus.ring.color');\n        outline-offset: dt('organizationchart.node.toggle.button.focus.ring.offset');\n    }\n\n    .p-organizationchart-node-toggle-button-icon {\n        position: relative;\n        inset-block-start: 1px;\n    }\n\n    .p-organizationchart-connector-down {\n        margin: 0 auto;\n        height: dt('organizationchart.connector.height');\n        width: 1px;\n        background: dt('organizationchart.connector.color');\n    }\n\n    .p-organizationchart-connector-right {\n        border-radius: 0;\n    }\n\n    .p-organizationchart-connector-left {\n        border-radius: 0;\n        border-inline-end: 1px solid dt('organizationchart.connector.color');\n    }\n\n    .p-organizationchart-connector-top {\n        border-block-start: 1px solid dt('organizationchart.connector.color');\n    }\n\n    .p-organizationchart-node-selectable {\n        cursor: pointer;\n    }\n\n    .p-organizationchart-connectors :nth-child(1 of .p-organizationchart-connector-left) {\n        border-inline-end: 0 none;\n    }\n\n    .p-organizationchart-connectors :nth-last-child(1 of .p-organizationchart-connector-left) {\n        border-start-end-radius: dt('organizationchart.connector.border.radius');\n    }\n\n    .p-organizationchart-connectors :nth-child(1 of .p-organizationchart-connector-right) {\n        border-inline-start: 1px solid dt('organizationchart.connector.color');\n        border-start-start-radius: dt('organizationchart.connector.border.radius');\n    }\n";

// node_modules/primeng/fesm2022/primeng-organizationchart.mjs
var _c0 = ["pOrganizationChartNode", ""];
var _c1 = (a0) => ({
  $implicit: a0
});
var _c2 = (a0) => ({
  first: a0
});
var _c3 = (a0) => ({
  last: a0
});
function OrganizationChartNode_tbody_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.node.label);
  }
}
function OrganizationChartNode_tbody_0_div_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function OrganizationChartNode_tbody_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, OrganizationChartNode_tbody_0_div_5_ng_container_1_Template, 1, 0, "ng-container", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.chart.getTemplateForNode(ctx_r1.node))("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c1, ctx_r1.node));
  }
}
function OrganizationChartNode_tbody_0_ng_container_6_a_1_ng_container_1__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 12);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275classMap(ctx_r1.cx("nodeToggleButtonIcon"));
    \u0275\u0275property("pBind", ctx_r1.getPTOptions("nodeToggleButtonIcon"));
  }
}
function OrganizationChartNode_tbody_0_ng_container_6_a_1_ng_container_1__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 13);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275classMap(ctx_r1.cx("nodeToggleButtonIcon"));
    \u0275\u0275property("pBind", ctx_r1.getPTOptions("nodeToggleButtonIcon"));
  }
}
function OrganizationChartNode_tbody_0_ng_container_6_a_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, OrganizationChartNode_tbody_0_ng_container_6_a_1_ng_container_1__svg_svg_1_Template, 1, 3, "svg", 10)(2, OrganizationChartNode_tbody_0_ng_container_6_a_1_ng_container_1__svg_svg_2_Template, 1, 3, "svg", 11);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.node.expanded);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.node.expanded);
  }
}
function OrganizationChartNode_tbody_0_ng_container_6_a_1_span_2_1_ng_template_0_Template(rf, ctx) {
}
function OrganizationChartNode_tbody_0_ng_container_6_a_1_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, OrganizationChartNode_tbody_0_ng_container_6_a_1_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function OrganizationChartNode_tbody_0_ng_container_6_a_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 1);
    \u0275\u0275template(1, OrganizationChartNode_tbody_0_ng_container_6_a_1_span_2_1_Template, 1, 0, null, 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r1.cx("nodeToggleButtonIcon"));
    \u0275\u0275property("pBind", ctx_r1.getPTOptions("nodeToggleButtonIcon"));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.chart.togglerIconTemplate || ctx_r1.chart._togglerIconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(5, _c1, ctx_r1.node.expanded));
  }
}
function OrganizationChartNode_tbody_0_ng_container_6_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 8);
    \u0275\u0275listener("click", function OrganizationChartNode_tbody_0_ng_container_6_a_1_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleNode($event, ctx_r1.node));
    })("keydown.enter", function OrganizationChartNode_tbody_0_ng_container_6_a_1_Template_a_keydown_enter_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleNode($event, ctx_r1.node));
    })("keydown.space", function OrganizationChartNode_tbody_0_ng_container_6_a_1_Template_a_keydown_space_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleNode($event, ctx_r1.node));
    });
    \u0275\u0275template(1, OrganizationChartNode_tbody_0_ng_container_6_a_1_ng_container_1_Template, 3, 2, "ng-container", 3)(2, OrganizationChartNode_tbody_0_ng_container_6_a_1_span_2_Template, 2, 7, "span", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.cx("nodeToggleButton"));
    \u0275\u0275property("pBind", ctx_r1.getPTOptions("nodeToggleButton"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.chart.togglerIconTemplate && !ctx_r1.chart._togglerIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.chart.togglerIconTemplate || ctx_r1.chart._togglerIconTemplate);
  }
}
function OrganizationChartNode_tbody_0_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, OrganizationChartNode_tbody_0_ng_container_6_a_1_Template, 3, 5, "a", 7);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.leaf);
  }
}
function OrganizationChartNode_tbody_0_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "td", 1);
    \u0275\u0275element(2, "div", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("pBind", ctx_r1.ptm("lineCell"));
    \u0275\u0275attribute("colspan", ctx_r1.colspan);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("connectorDown"));
    \u0275\u0275property("pBind", ctx_r1.ptm("connectorDown"));
  }
}
function OrganizationChartNode_tbody_0_ng_container_12_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 1);
    \u0275\u0275text(1, "\xA0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "td", 1);
    \u0275\u0275text(3, "\xA0");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const first_r4 = ctx.first;
    const last_r5 = ctx.last;
    const index_r6 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.cx("connectorLeft", \u0275\u0275pureFunction1(6, _c2, first_r4)));
    \u0275\u0275property("pBind", ctx_r1.getNodeOptions(!(index_r6 === 0), "connectorLeft"));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.cx("connectorRight", \u0275\u0275pureFunction1(8, _c3, last_r5)));
    \u0275\u0275property("pBind", ctx_r1.getNodeOptions(!(index_r6 === ctx_r1.node.children.length - 1), "connectorRight"));
  }
}
function OrganizationChartNode_tbody_0_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, OrganizationChartNode_tbody_0_ng_container_12_ng_template_1_Template, 4, 10, "ng-template", 14);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.node.children);
  }
}
function OrganizationChartNode_tbody_0_td_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 15);
    \u0275\u0275element(1, "table", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const child_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("pBind", ctx_r1.ptm("nodeCell"));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("table"));
    \u0275\u0275property("unstyled", ctx_r1.unstyled())("pt", ctx_r1.pt)("node", child_r7)("collapsible", ctx_r1.node.children && ctx_r1.node.children.length > 0 && ctx_r1.collapsible);
  }
}
function OrganizationChartNode_tbody_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tbody", 1)(1, "tr", 1)(2, "td", 1)(3, "div", 2);
    \u0275\u0275listener("click", function OrganizationChartNode_tbody_0_Template_div_click_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onNodeClick($event, ctx_r1.node));
    });
    \u0275\u0275template(4, OrganizationChartNode_tbody_0_div_4_Template, 2, 1, "div", 3)(5, OrganizationChartNode_tbody_0_div_5_Template, 2, 4, "div", 3)(6, OrganizationChartNode_tbody_0_ng_container_6_Template, 2, 1, "ng-container", 3);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "tr", 4)(8, "td", 1);
    \u0275\u0275element(9, "div", 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "tr", 4);
    \u0275\u0275template(11, OrganizationChartNode_tbody_0_ng_container_11_Template, 3, 5, "ng-container", 3)(12, OrganizationChartNode_tbody_0_ng_container_12_Template, 2, 1, "ng-container", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "tr", 4);
    \u0275\u0275template(14, OrganizationChartNode_tbody_0_td_14_Template, 2, 7, "td", 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("pBind", ctx_r1.ptm("body"));
    \u0275\u0275advance();
    \u0275\u0275property("pBind", ctx_r1.ptm("row"));
    \u0275\u0275advance();
    \u0275\u0275property("pBind", ctx_r1.ptm("cell"));
    \u0275\u0275attribute("colspan", ctx_r1.colspan);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("node"), ctx_r1.node.styleClass));
    \u0275\u0275property("pBind", ctx_r1.getPTOptions("node"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.chart.getTemplateForNode(ctx_r1.node));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.chart.getTemplateForNode(ctx_r1.node));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.collapsible);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("connectors"));
    \u0275\u0275property("ngStyle", ctx_r1.getChildStyle(ctx_r1.node))("pBind", ctx_r1.ptm("connectors"));
    \u0275\u0275advance();
    \u0275\u0275property("pBind", ctx_r1.ptm("lineCell"));
    \u0275\u0275attribute("colspan", ctx_r1.colspan);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("connectorDown"));
    \u0275\u0275property("pBind", ctx_r1.ptm("connectorDown"));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("connectors"));
    \u0275\u0275property("ngStyle", ctx_r1.getChildStyle(ctx_r1.node))("pBind", ctx_r1.ptm("connectors"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.node.children && ctx_r1.node.children.length === 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.node.children && ctx_r1.node.children.length > 1);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("nodeChildren"));
    \u0275\u0275property("ngStyle", ctx_r1.getChildStyle(ctx_r1.node))("pBind", ctx_r1.ptm("nodeChildren"));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.node.children);
  }
}
var _c4 = ["togglericon"];
function OrganizationChart_table_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "table", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("table"));
    \u0275\u0275property("collapsible", ctx_r0.collapsible)("pt", ctx_r0.pt)("unstyled", ctx_r0.unstyled())("node", ctx_r0.root)("pBind", ctx_r0.ptm("table"));
  }
}
var classes = {
  root: ({
    instance
  }) => ["p-organizationchart p-component", {
    "p-organizationchart-preservespace": instance.preserveSpace
  }],
  table: "p-organizationchart-table",
  node: ({
    instance
  }) => ["p-organizationchart-node", {
    "p-organizationchart-node": true,
    "p-organizationchart-node-selectable": instance.chart.selectionMode && instance.node.selectable !== false,
    "p-organizationchart-node-selected": instance.isSelected()
  }],
  nodeToggleButton: "p-organizationchart-node-toggle-button",
  nodeToggleButtonIcon: "p-organizationchart-node-toggle-button-icon",
  connectors: "p-organizationchart-connectors",
  connectorDown: "p-organizationchart-connector-down",
  connectorLeft: ({
    first
  }) => ["p-organizationchart-connector-left", {
    "p-organizationchart-connector-top": !first
  }],
  connectorRight: ({
    last
  }) => ["p-organizationchart-connector-right", {
    "p-organizationchart-connector-top": !last
  }],
  nodeChildren: "p-organizationchart-node-children"
};
var OrganizationChartStyle = class _OrganizationChartStyle extends BaseStyle {
  name = "organizationchart";
  style = style;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275OrganizationChartStyle_BaseFactory;
    return function OrganizationChartStyle_Factory(__ngFactoryType__) {
      return (\u0275OrganizationChartStyle_BaseFactory || (\u0275OrganizationChartStyle_BaseFactory = \u0275\u0275getInheritedFactory(_OrganizationChartStyle)))(__ngFactoryType__ || _OrganizationChartStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _OrganizationChartStyle,
    factory: _OrganizationChartStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrganizationChartStyle, [{
    type: Injectable
  }], null, null);
})();
var OrganizationChartClasses;
(function(OrganizationChartClasses2) {
  OrganizationChartClasses2["root"] = "p-organizationchart";
  OrganizationChartClasses2["table"] = "p-organizationchart-table";
  OrganizationChartClasses2["node"] = "p-organizationchart-node";
  OrganizationChartClasses2["nodeToggleButton"] = "p-organizationchart-node-toggle-button";
  OrganizationChartClasses2["nodeToggleButtonIcon"] = "p-organizationchart-node-toggle-button-icon";
  OrganizationChartClasses2["connectors"] = "p-organizationchart-connectors";
  OrganizationChartClasses2["connectorDown"] = "p-organizationchart-connector-down";
  OrganizationChartClasses2["connectorLeft"] = "p-organizationchart-connector-left";
  OrganizationChartClasses2["connectorRight"] = "p-organizationchart-connector-right";
  OrganizationChartClasses2["nodeChildren"] = "p-organizationchart-node-children";
})(OrganizationChartClasses || (OrganizationChartClasses = {}));
var ORGANIZATIONCHART_INSTANCE = new InjectionToken("ORGANIZATIONCHART_INSTANCE");
var OrganizationChartNode = class _OrganizationChartNode extends BaseComponent {
  cd;
  node;
  root;
  first;
  last;
  collapsible;
  chart;
  subscription;
  _componentStyle = inject(OrganizationChartStyle);
  constructor(chart, cd) {
    super();
    this.cd = cd;
    this.chart = chart;
    this.subscription = this.chart.selectionSource$.subscribe(() => {
      this.cd.markForCheck();
    });
  }
  get leaf() {
    if (this.node) {
      return this.node.leaf == false ? false : !(this.node.children && this.node.children.length);
    }
  }
  get colspan() {
    if (this.node) {
      return this.node.children && this.node.children.length ? this.node.children.length * 2 : null;
    }
  }
  getChildStyle(node) {
    return {
      visibility: !this.leaf && node.expanded ? "inherit" : "hidden"
    };
  }
  getPTOptions(key) {
    return this.ptm(key, {
      context: {
        expanded: this.node?.expanded,
        selectable: this.node?.selectable !== false && this.chart.selectionMode,
        selected: this.isSelected(),
        toggleable: this.collapsible && !this.leaf,
        active: this.isSelected()
      }
    });
  }
  getNodeOptions(lineTop, key) {
    return this.ptm(key, {
      context: {
        lineTop
      }
    });
  }
  onNodeClick(event, node) {
    this.chart.onNodeClick(event, node);
  }
  toggleNode(event, node) {
    node.expanded = !node.expanded;
    if (node.expanded) this.chart.onNodeExpand.emit({
      originalEvent: event,
      node: this.node
    });
    else this.chart.onNodeCollapse.emit({
      originalEvent: event,
      node: this.node
    });
    event.preventDefault();
  }
  isSelected() {
    return this.chart.isSelected(this.node);
  }
  onDestroy() {
    this.subscription.unsubscribe();
  }
  static \u0275fac = function OrganizationChartNode_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrganizationChartNode)(\u0275\u0275directiveInject(forwardRef(() => OrganizationChart)), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _OrganizationChartNode,
    selectors: [["", "pOrganizationChartNode", ""]],
    inputs: {
      node: "node",
      root: [2, "root", "root", booleanAttribute],
      first: [2, "first", "first", booleanAttribute],
      last: [2, "last", "last", booleanAttribute],
      collapsible: [2, "collapsible", "collapsible", booleanAttribute]
    },
    features: [\u0275\u0275ProvidersFeature([OrganizationChartStyle, {
      provide: PARENT_INSTANCE,
      useExisting: _OrganizationChartNode
    }]), \u0275\u0275InheritDefinitionFeature],
    attrs: _c0,
    decls: 1,
    vars: 1,
    consts: [[3, "pBind", 4, "ngIf"], [3, "pBind"], [3, "click", "pBind"], [4, "ngIf"], [3, "ngStyle", "pBind"], ["colspan", "2", 3, "pBind", 4, "ngFor", "ngForOf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["tabindex", "0", 3, "class", "pBind", "click", "keydown.enter", "keydown.space", 4, "ngIf"], ["tabindex", "0", 3, "click", "keydown.enter", "keydown.space", "pBind"], [3, "class", "pBind", 4, "ngIf"], ["data-p-icon", "chevron-down", 3, "class", "pBind", 4, "ngIf"], ["data-p-icon", "chevron-up", 3, "class", "pBind", 4, "ngIf"], ["data-p-icon", "chevron-down", 3, "pBind"], ["data-p-icon", "chevron-up", 3, "pBind"], ["ngFor", "", 3, "ngForOf"], ["colspan", "2", 3, "pBind"], ["pOrganizationChartNode", "", 3, "unstyled", "pt", "node", "collapsible"]],
    template: function OrganizationChartNode_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, OrganizationChartNode_tbody_0_Template, 15, 30, "tbody", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.node);
      }
    },
    dependencies: [_OrganizationChartNode, CommonModule, NgForOf, NgIf, NgTemplateOutlet, NgStyle, ChevronDownIcon, ChevronUpIcon, SharedModule, BindModule, Bind],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrganizationChartNode, [{
    type: Component,
    args: [{
      selector: "[pOrganizationChartNode]",
      standalone: true,
      imports: [CommonModule, ChevronDownIcon, ChevronUpIcon, SharedModule, BindModule],
      template: `
        <tbody *ngIf="node" [pBind]="ptm('body')">
            <tr [pBind]="ptm('row')">
                <td [attr.colspan]="colspan" [pBind]="ptm('cell')">
                    <div [class]="cn(cx('node'), node.styleClass)" (click)="onNodeClick($event, node)" [pBind]="getPTOptions('node')">
                        <div *ngIf="!chart.getTemplateForNode(node)">{{ node.label }}</div>
                        <div *ngIf="chart.getTemplateForNode(node)">
                            <ng-container *ngTemplateOutlet="chart.getTemplateForNode(node); context: { $implicit: node }"></ng-container>
                        </div>
                        <ng-container *ngIf="collapsible">
                            <a
                                *ngIf="!leaf"
                                tabindex="0"
                                [class]="cx('nodeToggleButton')"
                                (click)="toggleNode($event, node)"
                                (keydown.enter)="toggleNode($event, node)"
                                (keydown.space)="toggleNode($event, node)"
                                [pBind]="getPTOptions('nodeToggleButton')"
                            >
                                <ng-container *ngIf="!chart.togglerIconTemplate && !chart._togglerIconTemplate">
                                    <svg data-p-icon="chevron-down" *ngIf="node.expanded" [class]="cx('nodeToggleButtonIcon')" [pBind]="getPTOptions('nodeToggleButtonIcon')" />
                                    <svg data-p-icon="chevron-up" *ngIf="!node.expanded" [class]="cx('nodeToggleButtonIcon')" [pBind]="getPTOptions('nodeToggleButtonIcon')" />
                                </ng-container>
                                <span [class]="cx('nodeToggleButtonIcon')" *ngIf="chart.togglerIconTemplate || chart._togglerIconTemplate" [pBind]="getPTOptions('nodeToggleButtonIcon')">
                                    <ng-template *ngTemplateOutlet="chart.togglerIconTemplate || chart._togglerIconTemplate; context: { $implicit: node.expanded }"></ng-template>
                                </span>
                            </a>
                        </ng-container>
                    </div>
                </td>
            </tr>
            <tr [ngStyle]="getChildStyle(node)" [class]="cx('connectors')" [pBind]="ptm('connectors')">
                <td [pBind]="ptm('lineCell')" [attr.colspan]="colspan">
                    <div [pBind]="ptm('connectorDown')" [class]="cx('connectorDown')"></div>
                </td>
            </tr>
            <tr [ngStyle]="getChildStyle(node)" [class]="cx('connectors')" [pBind]="ptm('connectors')">
                <ng-container *ngIf="node.children && node.children.length === 1">
                    <td [pBind]="ptm('lineCell')" [attr.colspan]="colspan">
                        <div [pBind]="ptm('connectorDown')" [class]="cx('connectorDown')"></div>
                    </td>
                </ng-container>
                <ng-container *ngIf="node.children && node.children.length > 1">
                    <ng-template ngFor let-child [ngForOf]="node.children" let-first="first" let-last="last" let-index="index">
                        <td [class]="cx('connectorLeft', { first })" [pBind]="getNodeOptions(!(index === 0), 'connectorLeft')">&nbsp;</td>
                        <td [class]="cx('connectorRight', { last })" [pBind]="getNodeOptions(!(index === node.children.length - 1), 'connectorRight')">&nbsp;</td>
                    </ng-template>
                </ng-container>
            </tr>
            <tr [ngStyle]="getChildStyle(node)" [class]="cx('nodeChildren')" [pBind]="ptm('nodeChildren')">
                <td *ngFor="let child of node.children" colspan="2" [pBind]="ptm('nodeCell')">
                    <table [class]="cx('table')" pOrganizationChartNode [unstyled]="unstyled()" [pt]="pt" [node]="child" [collapsible]="node.children && node.children.length > 0 && collapsible"></table>
                </td>
            </tr>
        </tbody>
    `,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Default,
      providers: [OrganizationChartStyle, {
        provide: PARENT_INSTANCE,
        useExisting: OrganizationChartNode
      }]
    }]
  }], () => [{
    type: OrganizationChart,
    decorators: [{
      type: Inject,
      args: [forwardRef(() => OrganizationChart)]
    }]
  }, {
    type: ChangeDetectorRef
  }], {
    node: [{
      type: Input
    }],
    root: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    first: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    last: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    collapsible: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var OrganizationChart = class _OrganizationChart extends BaseComponent {
  el;
  cd;
  componentName = "OrganizationChart";
  /**
   * An array of nested TreeNodes.
   * @group Props
   */
  value;
  /**
   * Style class of the component.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Defines the selection mode.
   * @group Props
   */
  selectionMode;
  /**
   * Whether the nodes can be expanded or toggled.
   * @group Props
   */
  collapsible;
  /**
   * Whether the space allocated by a node is preserved when hidden.
   * @deprecated since v20.0.0.
   * @group Props
   */
  preserveSpace = true;
  /**
   * A single treenode instance or an array to refer to the selections.
   * @group Props
   */
  get selection() {
    return this._selection;
  }
  set selection(val) {
    this._selection = val;
    if (this.initialized) this.selectionSource.next(null);
  }
  /**
   * Callback to invoke on selection change.
   * @param {*} any - selected value.
   * @group Emits
   */
  selectionChange = new EventEmitter();
  /**
   * Callback to invoke when a node is selected.
   * @param {OrganizationChartNodeSelectEvent} event - custom node select event.
   * @group Emits
   */
  onNodeSelect = new EventEmitter();
  /**
   * Callback to invoke when a node is unselected.
   * @param {OrganizationChartNodeUnSelectEvent} event - custom node unselect event.
   * @group Emits
   */
  onNodeUnselect = new EventEmitter();
  /**
   * Callback to invoke when a node is expanded.
   * @param {OrganizationChartNodeExpandEvent} event - custom node expand event.
   * @group Emits
   */
  onNodeExpand = new EventEmitter();
  /**
   * Callback to invoke when a node is collapsed.
   * @param {OrganizationChartNodeCollapseEvent} event - custom node collapse event.
   * @group Emits
   */
  onNodeCollapse = new EventEmitter();
  templates;
  togglerIconTemplate;
  templateMap;
  _togglerIconTemplate;
  selectionSource = new Subject();
  _selection;
  initialized;
  selectionSource$ = this.selectionSource.asObservable();
  _componentStyle = inject(OrganizationChartStyle);
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  $pcOrganizationChart = inject(ORGANIZATIONCHART_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  constructor(el, cd) {
    super();
    this.el = el;
    this.cd = cd;
  }
  ngAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  get root() {
    return this.value && this.value.length ? this.value[0] : null;
  }
  onAfterContentInit() {
    if (this.templates.length) {
      this.templateMap = {};
    }
    this.templates.forEach((item) => {
      if (item.getType() === "togglericon") {
        this._togglerIconTemplate = item.template;
      } else {
        this.templateMap[item.getType()] = item.template;
      }
    });
    this.initialized = true;
  }
  getTemplateForNode(node) {
    if (this.templateMap) return node.type ? this.templateMap[node.type] : this.templateMap["default"];
    else return null;
  }
  onNodeClick(event, node) {
    let eventTarget = event.target;
    if (tt(eventTarget, "data-pc-section", "nodetogglebutton") || tt(eventTarget, "data-pc-section", "nodetogglebuttonicon")) {
      return;
    } else if (this.selectionMode) {
      if (node.selectable === false) {
        return;
      }
      let index = this.findIndexInSelection(node);
      let selected = index >= 0;
      if (this.selectionMode === "single") {
        if (selected) {
          this.selection = null;
          this.onNodeUnselect.emit({
            originalEvent: event,
            node
          });
        } else {
          this.selection = node;
          this.onNodeSelect.emit({
            originalEvent: event,
            node
          });
        }
      } else if (this.selectionMode === "multiple") {
        if (selected) {
          this.selection = this.selection.filter((val, i) => i != index);
          this.onNodeUnselect.emit({
            originalEvent: event,
            node
          });
        } else {
          this.selection = [...this.selection || [], node];
          this.onNodeSelect.emit({
            originalEvent: event,
            node
          });
        }
      }
      this.selectionChange.emit(this.selection);
      this.selectionSource.next(null);
    }
  }
  findIndexInSelection(node) {
    let index = -1;
    if (this.selectionMode && this.selection) {
      if (this.selectionMode === "single") {
        index = this.selection == node ? 0 : -1;
      } else if (this.selectionMode === "multiple") {
        for (let i = 0; i < this.selection.length; i++) {
          if (this.selection[i] == node) {
            index = i;
            break;
          }
        }
      }
    }
    return index;
  }
  isSelected(node) {
    return this.findIndexInSelection(node) != -1;
  }
  static \u0275fac = function OrganizationChart_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrganizationChart)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _OrganizationChart,
    selectors: [["p-organizationChart"], ["p-organization-chart"], ["p-organizationchart"]],
    contentQueries: function OrganizationChart_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c4, 4)(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.togglerIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostVars: 2,
    hostBindings: function OrganizationChart_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      value: "value",
      styleClass: "styleClass",
      selectionMode: "selectionMode",
      collapsible: [2, "collapsible", "collapsible", booleanAttribute],
      preserveSpace: [2, "preserveSpace", "preserveSpace", booleanAttribute],
      selection: "selection"
    },
    outputs: {
      selectionChange: "selectionChange",
      onNodeSelect: "onNodeSelect",
      onNodeUnselect: "onNodeUnselect",
      onNodeExpand: "onNodeExpand",
      onNodeCollapse: "onNodeCollapse"
    },
    features: [\u0275\u0275ProvidersFeature([OrganizationChartStyle, {
      provide: ORGANIZATIONCHART_INSTANCE,
      useExisting: _OrganizationChart
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _OrganizationChart
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    decls: 1,
    vars: 1,
    consts: [["pOrganizationChartNode", "", 3, "class", "collapsible", "pt", "unstyled", "node", "pBind", 4, "ngIf"], ["pOrganizationChartNode", "", 3, "collapsible", "pt", "unstyled", "node", "pBind"]],
    template: function OrganizationChart_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, OrganizationChart_table_0_Template, 1, 7, "table", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.root);
      }
    },
    dependencies: [CommonModule, NgIf, OrganizationChartNode, SharedModule, BindModule, Bind],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrganizationChart, [{
    type: Component,
    args: [{
      selector: "p-organizationChart, p-organization-chart, p-organizationchart",
      standalone: true,
      imports: [CommonModule, OrganizationChartNode, SharedModule, BindModule],
      template: ` <table [class]="cx('table')" [collapsible]="collapsible" pOrganizationChartNode [pt]="pt" [unstyled]="unstyled()" [node]="root" *ngIf="root" [pBind]="ptm('table')"></table> `,
      changeDetection: ChangeDetectionStrategy.Default,
      providers: [OrganizationChartStyle, {
        provide: ORGANIZATIONCHART_INSTANCE,
        useExisting: OrganizationChart
      }, {
        provide: PARENT_INSTANCE,
        useExisting: OrganizationChart
      }],
      host: {
        "[class]": "cn(cx('root'), styleClass)"
      },
      hostDirectives: [Bind]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }], {
    value: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    selectionMode: [{
      type: Input
    }],
    collapsible: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    preserveSpace: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selection: [{
      type: Input
    }],
    selectionChange: [{
      type: Output
    }],
    onNodeSelect: [{
      type: Output
    }],
    onNodeUnselect: [{
      type: Output
    }],
    onNodeExpand: [{
      type: Output
    }],
    onNodeCollapse: [{
      type: Output
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    togglerIconTemplate: [{
      type: ContentChild,
      args: ["togglericon", {
        descendants: false
      }]
    }]
  });
})();
var OrganizationChartModule = class _OrganizationChartModule {
  static \u0275fac = function OrganizationChartModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrganizationChartModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _OrganizationChartModule,
    imports: [OrganizationChart, OrganizationChartNode, SharedModule],
    exports: [OrganizationChart, OrganizationChartNode, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [OrganizationChart, OrganizationChartNode, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrganizationChartModule, [{
    type: NgModule,
    args: [{
      imports: [OrganizationChart, OrganizationChartNode, SharedModule],
      exports: [OrganizationChart, OrganizationChartNode, SharedModule]
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/tree/index.mjs
var style2 = `
    .p-tree {
        display: block;
        background: dt('tree.background');
        color: dt('tree.color');
        padding: dt('tree.padding');
        position: relative;
    }

    .p-tree-root-children,
    .p-tree-node-children {
        display: flex;
        list-style-type: none;
        flex-direction: column;
        margin: 0;
        gap: dt('tree.gap');
    }

    .p-tree-root-children {
        padding: 0;
        padding-block-start: dt('tree.gap');
    }

    .p-tree-node-children {
        padding: 0;
        padding-block-start: dt('tree.gap');
        padding-inline-start: dt('tree.indent');
    }

    .p-tree-node {
        padding: 0;
        outline: 0 none;
    }

    .p-tree-node-content {
        border-radius: dt('tree.node.border.radius');
        padding: dt('tree.node.padding');
        display: flex;
        align-items: center;
        outline-color: transparent;
        color: dt('tree.node.color');
        gap: dt('tree.node.gap');
        transition:
            background dt('tree.transition.duration'),
            color dt('tree.transition.duration'),
            outline-color dt('tree.transition.duration'),
            box-shadow dt('tree.transition.duration');
    }

    .p-tree-node-content[data-p-dragging] {
        outline: 1px dashed dt('primary.color');
        outline-offset: -1px;
    }

    .p-tree-node-content[data-pc-section="drag-image"] {
        background: dt('tree.background');
    }

    .p-tree-node:focus-visible > .p-tree-node-content {
        box-shadow: dt('tree.node.focus.ring.shadow');
        outline: dt('tree.node.focus.ring.width') dt('tree.node.focus.ring.style') dt('tree.node.focus.ring.color');
        outline-offset: dt('tree.node.focus.ring.offset');
    }

    .p-tree-node-content.p-tree-node-selectable:not(.p-tree-node-selected):hover {
        background: dt('tree.node.hover.background');
        color: dt('tree.node.hover.color');
    }

    .p-tree-node-content.p-tree-node-selectable:not(.p-tree-node-selected):hover .p-tree-node-icon {
        color: dt('tree.node.icon.hover.color');
    }

    .p-tree-node-content.p-tree-node-selected {
        background: dt('tree.node.selected.background');
        color: dt('tree.node.selected.color');
    }

    .p-tree-node-content.p-tree-node-selected .p-tree-node-toggle-button {
        color: inherit;
    }

    .p-tree-node-content.p-tree-node-dragover {
        background: dt('tree.node.hover.background');
        color: dt('tree.node.hover.color');
    }

    .p-tree-node-content:focus-visible,
    .p-tree-node-content.p-tree-node-contextmenu-selected {
        box-shadow: dt('tree.node.focus.ring.shadow');
        outline: dt('tree.node.focus.ring.width') dt('tree.node.focus.ring.style') dt('tree.node.focus.ring.color');
        outline-offset: dt('tree.node.focus.ring.offset');
    }

    .p-tree-node-drop-point {
		outline: 1px solid dt('primary.color');
	}

    .p-tree-node-toggle-button {
        cursor: pointer;
        user-select: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        flex-shrink: 0;
        width: dt('tree.node.toggle.button.size');
        height: dt('tree.node.toggle.button.size');
        color: dt('tree.node.toggle.button.color');
        border: 0 none;
        background: transparent;
        border-radius: dt('tree.node.toggle.button.border.radius');
        transition:
            background dt('tree.transition.duration'),
            color dt('tree.transition.duration'),
            border-color dt('tree.transition.duration'),
            outline-color dt('tree.transition.duration'),
            box-shadow dt('tree.transition.duration');
        outline-color: transparent;
        padding: 0;
    }

    .p-tree-node-toggle-button:enabled:hover {
        background: dt('tree.node.toggle.button.hover.background');
        color: dt('tree.node.toggle.button.hover.color');
    }

    .p-tree-node-content.p-tree-node-selected .p-tree-node-toggle-button:hover {
        background: dt('tree.node.toggle.button.selected.hover.background');
        color: dt('tree.node.toggle.button.selected.hover.color');
    }

    .p-tree-root {
        overflow: auto;
    }

    .p-tree-node-selectable {
        cursor: pointer;
        user-select: none;
    }

    .p-tree-node-leaf > .p-tree-node-content .p-tree-node-toggle-button {
        visibility: hidden;
    }

    .p-tree-node-icon {
        color: dt('tree.node.icon.color');
        transition: color dt('tree.transition.duration');
    }

    .p-tree-node-content.p-tree-node-selected .p-tree-node-icon {
        color: dt('tree.node.icon.selected.color');
    }

    .p-tree-filter {
        margin: dt('tree.filter.margin');
    }

    .p-tree-filter-input {
        width: 100%;
    }

    .p-tree-loading-icon {
        font-size: dt('tree.loading.icon.size');
        width: dt('tree.loading.icon.size');
        height: dt('tree.loading.icon.size');
    }

    .p-tree .p-tree-mask {
        position: absolute;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .p-tree-flex-scrollable {
        display: flex;
        flex: 1;
        height: 100%;
        flex-direction: column;
    }

    .p-tree-flex-scrollable .p-tree-root {
        flex: 1;
    }
`;

// node_modules/primeng/fesm2022/primeng-tree.mjs
var _c02 = (a0) => ({
  height: a0
});
var _c12 = (a0, a1) => ({
  $implicit: a0,
  loading: a1
});
var _c22 = (a0, a1, a2) => ({
  $implicit: a0,
  partialSelected: a1,
  class: a2
});
var _c32 = (a0) => ({
  $implicit: a0
});
var _c42 = () => ({
  next: true
});
function UITreeNode_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 9);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cx("dropPoint"));
    \u0275\u0275property("pBind", ctx_r1.getPTOptions("dropPoint"));
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function UITreeNode_Conditional_0_ng_container_4_ng_container_1__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 13);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r1.cx("nodeToggleIcon"));
    \u0275\u0275property("pBind", ctx_r1.getPTOptions("nodeToggleIcon"));
  }
}
function UITreeNode_Conditional_0_ng_container_4_ng_container_1__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 14);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r1.cx("nodeToggleIcon"));
    \u0275\u0275property("pBind", ctx_r1.getPTOptions("nodeToggleIcon"));
  }
}
function UITreeNode_Conditional_0_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, UITreeNode_Conditional_0_ng_container_4_ng_container_1__svg_svg_1_Template, 1, 3, "svg", 11)(2, UITreeNode_Conditional_0_ng_container_4_ng_container_1__svg_svg_2_Template, 1, 3, "svg", 12);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.node.expanded);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.node.expanded);
  }
}
function UITreeNode_Conditional_0_ng_container_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(1, "svg", 15);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("nodeToggleIcon"));
    \u0275\u0275property("pBind", ctx_r1.getPTOptions("nodeToggleIcon"));
  }
}
function UITreeNode_Conditional_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, UITreeNode_Conditional_0_ng_container_4_ng_container_1_Template, 3, 2, "ng-container", 6)(2, UITreeNode_Conditional_0_ng_container_4_ng_container_2_Template, 2, 3, "ng-container", 6);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.node.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loadingMode === "icon" && ctx_r1.node.loading);
  }
}
function UITreeNode_Conditional_0_span_5_1_ng_template_0_Template(rf, ctx) {
}
function UITreeNode_Conditional_0_span_5_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, UITreeNode_Conditional_0_span_5_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function UITreeNode_Conditional_0_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275template(1, UITreeNode_Conditional_0_span_5_1_Template, 1, 0, null, 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cx("nodeToggleIcon"));
    \u0275\u0275property("pBind", ctx_r1.getPTOptions("nodeToggleIcon"));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.tree.togglerIconTemplate || ctx_r1.tree._togglerIconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(5, _c12, ctx_r1.node.expanded, ctx_r1.node.loading));
  }
}
function UITreeNode_Conditional_0_p_checkbox_6_ng_container_1_ng_template_1_0_ng_template_0_Template(rf, ctx) {
}
function UITreeNode_Conditional_0_p_checkbox_6_ng_container_1_ng_template_1_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, UITreeNode_Conditional_0_p_checkbox_6_ng_container_1_ng_template_1_0_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function UITreeNode_Conditional_0_p_checkbox_6_ng_container_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, UITreeNode_Conditional_0_p_checkbox_6_ng_container_1_ng_template_1_0_Template, 1, 0, null, 16);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.tree.checkboxIconTemplate || ctx_r1.tree._checkboxIconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction3(2, _c22, ctx_r1.isSelected(), ctx_r1.node.partialSelected, ctx_r1.cx("nodeCheckbox")));
  }
}
function UITreeNode_Conditional_0_p_checkbox_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, UITreeNode_Conditional_0_p_checkbox_6_ng_container_1_ng_template_1_Template, 1, 6, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
}
function UITreeNode_Conditional_0_p_checkbox_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-checkbox", 17);
    \u0275\u0275listener("click", function UITreeNode_Conditional_0_p_checkbox_6_Template_p_checkbox_click_0_listener($event) {
      return $event.preventDefault();
    });
    \u0275\u0275template(1, UITreeNode_Conditional_0_p_checkbox_6_ng_container_1_Template, 3, 0, "ng-container", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngModel", ctx_r1.isSelected())("styleClass", ctx_r1.cx("nodeCheckbox"))("binary", true)("indeterminate", ctx_r1.node.partialSelected)("disabled", ctx_r1.node.selectable === false)("variant", (ctx_r1.tree == null ? null : ctx_r1.tree.config.inputStyle()) === "filled" || (ctx_r1.tree == null ? null : ctx_r1.tree.config.inputVariant()) === "filled" ? "filled" : "outlined")("tabindex", -1)("pt", ctx_r1.getPTOptions("pcNodeCheckbox"))("unstyled", ctx_r1.unstyled());
    \u0275\u0275attribute("data-p-partialchecked", ctx_r1.node.partialSelected);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.tree.checkboxIconTemplate || ctx_r1.tree._checkboxIconTemplate);
  }
}
function UITreeNode_Conditional_0_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 9);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.getIcon());
    \u0275\u0275property("pBind", ctx_r1.getPTOptions("nodeIcon"));
  }
}
function UITreeNode_Conditional_0_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.node.label);
  }
}
function UITreeNode_Conditional_0_span_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function UITreeNode_Conditional_0_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275template(1, UITreeNode_Conditional_0_span_10_ng_container_1_Template, 1, 0, "ng-container", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.tree.getTemplateForNode(ctx_r1.node))("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c32, ctx_r1.node));
  }
}
function UITreeNode_Conditional_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 9);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cx("dropPoint", \u0275\u0275pureFunction0(4, _c42)));
    \u0275\u0275property("pBind", ctx_r1.getPTOptions("dropPoint"));
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function UITreeNode_Conditional_0_ul_12_p_treeNode_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-treeNode", 20);
  }
  if (rf & 2) {
    const childNode_r3 = ctx.$implicit;
    const firstChild_r4 = ctx.first;
    const lastChild_r5 = ctx.last;
    const index_r6 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("node", childNode_r3)("parentNode", ctx_r1.node)("firstChild", firstChild_r4)("lastChild", lastChild_r5)("index", index_r6)("itemSize", ctx_r1.itemSize)("level", ctx_r1.level + 1)("loadingMode", ctx_r1.loadingMode)("pt", ctx_r1.pt)("unstyled", ctx_r1.unstyled());
  }
}
function UITreeNode_Conditional_0_ul_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 18);
    \u0275\u0275template(1, UITreeNode_Conditional_0_ul_12_p_treeNode_1_Template, 1, 10, "p-treeNode", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cx("nodeChildren"));
    \u0275\u0275property("pBind", ctx_r1.ptm("nodeChildren"));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.node.children)("ngForTrackBy", ctx_r1.tree.trackBy.bind(ctx_r1));
  }
}
function UITreeNode_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 2);
    \u0275\u0275listener("keydown", function UITreeNode_Conditional_0_Template_li_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onKeyDown($event));
    });
    \u0275\u0275conditionalCreate(1, UITreeNode_Conditional_0_Conditional_1_Template, 1, 4, "div", 3);
    \u0275\u0275elementStart(2, "div", 4);
    \u0275\u0275listener("click", function UITreeNode_Conditional_0_Template_div_click_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onNodeClick($event));
    })("contextmenu", function UITreeNode_Conditional_0_Template_div_contextmenu_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onNodeRightClick($event));
    })("dblclick", function UITreeNode_Conditional_0_Template_div_dblclick_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onNodeDblClick($event));
    })("touchend", function UITreeNode_Conditional_0_Template_div_touchend_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onNodeTouchEnd());
    })("drop", function UITreeNode_Conditional_0_Template_div_drop_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onNodeDrop($event));
    })("dragstart", function UITreeNode_Conditional_0_Template_div_dragstart_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onNodeDragStart($event));
    })("dragover", function UITreeNode_Conditional_0_Template_div_dragover_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onNodeDragOver($event));
    })("dragleave", function UITreeNode_Conditional_0_Template_div_dragleave_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onNodeDragLeave($event));
    })("dragend", function UITreeNode_Conditional_0_Template_div_dragend_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onNodeDragEnd($event));
    });
    \u0275\u0275elementStart(3, "button", 5);
    \u0275\u0275listener("click", function UITreeNode_Conditional_0_Template_button_click_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggle($event));
    });
    \u0275\u0275template(4, UITreeNode_Conditional_0_ng_container_4_Template, 3, 2, "ng-container", 6)(5, UITreeNode_Conditional_0_span_5_Template, 2, 8, "span", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, UITreeNode_Conditional_0_p_checkbox_6_Template, 2, 11, "p-checkbox", 8)(7, UITreeNode_Conditional_0_span_7_Template, 1, 3, "span", 7);
    \u0275\u0275elementStart(8, "span", 9);
    \u0275\u0275template(9, UITreeNode_Conditional_0_span_9_Template, 2, 1, "span", 6)(10, UITreeNode_Conditional_0_span_10_Template, 2, 4, "span", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(11, UITreeNode_Conditional_0_Conditional_11_Template, 1, 5, "div", 3);
    \u0275\u0275template(12, UITreeNode_Conditional_0_ul_12_Template, 2, 5, "ul", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(ctx_r1.node.style);
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("node"), ctx_r1.node.styleClass));
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(36, _c02, ctx_r1.itemSize + "px"))("pBind", ctx_r1.getPTOptions("node"));
    \u0275\u0275attribute("aria-label", ctx_r1.node.label)("aria-checked", ctx_r1.checked)("aria-setsize", ctx_r1.node.children ? ctx_r1.node.children.length : 0)("aria-selected", ctx_r1.selected)("aria-expanded", ctx_r1.node.expanded)("aria-posinset", ctx_r1.index + 1)("aria-level", ctx_r1.level + 1)("tabindex", ctx_r1.index === 0 ? 0 : -1)("data-id", ctx_r1.node.key);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isPrevDropPointActive() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("nodeContent"));
    \u0275\u0275styleProp("padding-left", ctx_r1.level * ctx_r1.indentation + "rem");
    \u0275\u0275property("draggable", ctx_r1.tree.draggableNodes)("pBind", ctx_r1.getPTOptions("nodeContent"));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("nodeToggleButton"));
    \u0275\u0275property("pBind", ctx_r1.getPTOptions("nodeToggleButton"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.tree.togglerIconTemplate && !ctx_r1.tree._togglerIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.tree.togglerIconTemplate || ctx_r1.tree._togglerIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.tree.selectionMode == "checkbox");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.node.icon || ctx_r1.node.expandedIcon || ctx_r1.node.collapsedIcon);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("nodeLabel"));
    \u0275\u0275property("pBind", ctx_r1.getPTOptions("nodeLabel"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.tree.getTemplateForNode(ctx_r1.node));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.tree.getTemplateForNode(ctx_r1.node));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isNextDropPointActive() ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.tree.virtualScroll && ctx_r1.node.children && ctx_r1.node.expanded);
  }
}
var _c5 = ["filter"];
var _c6 = ["node"];
var _c7 = ["header"];
var _c8 = ["footer"];
var _c9 = ["loader"];
var _c10 = ["empty"];
var _c11 = ["togglericon"];
var _c122 = ["checkboxicon"];
var _c13 = ["loadingicon"];
var _c14 = ["filtericon"];
var _c15 = ["scroller"];
var _c16 = ["wrapper"];
var _c17 = ["content"];
var _c18 = (a0) => ({
  options: a0
});
function Tree_div_0_i_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("loadingIcon"), "pi-spin" + ctx_r0.loadingIcon));
    \u0275\u0275property("pBind", ctx_r0.ptm("loadingIcon"));
  }
}
function Tree_div_0_ng_container_2__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 13);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r0.cx("loadingIcon"));
    \u0275\u0275property("pBind", ctx_r0.ptm("loadingIcon"));
  }
}
function Tree_div_0_ng_container_2_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Tree_div_0_ng_container_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Tree_div_0_ng_container_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Tree_div_0_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275template(1, Tree_div_0_ng_container_2_span_2_1_Template, 1, 0, null, 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r0.cx("loadingIcon"));
    \u0275\u0275property("pBind", ctx_r0.ptm("loadingIcon"));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.loadingIconTemplate || ctx_r0._loadingIconTemplate);
  }
}
function Tree_div_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Tree_div_0_ng_container_2__svg_svg_1_Template, 1, 3, "svg", 12)(2, Tree_div_0_ng_container_2_span_2_Template, 2, 4, "span", 7);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loadingIconTemplate && !ctx_r0._loadingIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.loadingIconTemplate || ctx_r0._loadingIconTemplate);
  }
}
function Tree_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275animateLeave("p-overlay-mask-leave-active");
    \u0275\u0275animateEnter("p-overlay-mask-enter-active");
    \u0275\u0275template(1, Tree_div_0_i_1_Template, 1, 3, "i", 7)(2, Tree_div_0_ng_container_2_Template, 3, 2, "ng-container", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("mask"));
    \u0275\u0275property("pBind", ctx_r0.ptm("mask"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.loadingIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loadingIcon);
  }
}
function Tree_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Tree_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Tree_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Tree_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 14);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.filterTemplate || ctx_r0._filterTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c32, ctx_r0.filterOptions));
  }
}
function Tree_Conditional_3_p_iconfield_0__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 19);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r0.cx("filterIcon"));
    \u0275\u0275property("pBind", ctx_r0.ptm("filterIcon"));
  }
}
function Tree_Conditional_3_p_iconfield_0_span_5_1_ng_template_0_Template(rf, ctx) {
}
function Tree_Conditional_3_p_iconfield_0_span_5_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Tree_Conditional_3_p_iconfield_0_span_5_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Tree_Conditional_3_p_iconfield_0_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275template(1, Tree_Conditional_3_p_iconfield_0_span_5_1_Template, 1, 0, null, 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r0.cx("filterIcon"));
    \u0275\u0275property("pBind", ctx_r0.ptm("filterIcon"));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.filterIconTemplate || ctx_r0._filterIconTemplate);
  }
}
function Tree_Conditional_3_p_iconfield_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-iconfield", 16)(1, "input", 17, 0);
    \u0275\u0275listener("keydown.enter", function Tree_Conditional_3_p_iconfield_0_Template_input_keydown_enter_1_listener($event) {
      return $event.preventDefault();
    })("input", function Tree_Conditional_3_p_iconfield_0_Template_input_input_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0._filter($event.target == null ? null : $event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-inputicon", 16);
    \u0275\u0275template(4, Tree_Conditional_3_p_iconfield_0__svg_svg_4_Template, 1, 3, "svg", 18)(5, Tree_Conditional_3_p_iconfield_0_span_5_Template, 2, 4, "span", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.cx("pcFilterContainer"));
    \u0275\u0275property("pt", ctx_r0.ptm("pcFilterContainer"))("unstyled", ctx_r0.unstyled());
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.cx("pcFilterInput"));
    \u0275\u0275property("pAutoFocus", ctx_r0.filterInputAutoFocus)("pt", ctx_r0.ptm("pcFilterInput"))("unstyled", ctx_r0.unstyled());
    \u0275\u0275attribute("placeholder", ctx_r0.filterPlaceholder);
    \u0275\u0275advance(2);
    \u0275\u0275property("pt", ctx_r0.ptm("pcFilterIconContainer"))("unstyled", ctx_r0.unstyled());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.filterIconTemplate && !ctx_r0._filterIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.filterIconTemplate || ctx_r0._filterIconTemplate);
  }
}
function Tree_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Tree_Conditional_3_p_iconfield_0_Template, 6, 14, "p-iconfield", 15);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r0.filter);
  }
}
function Tree_ng_container_4_p_scroller_1_ng_template_2_ul_0_p_treeNode_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-treeNode", 25, 3);
  }
  if (rf & 2) {
    const rowNode_r4 = ctx.$implicit;
    const firstChild_r5 = ctx.first;
    const lastChild_r6 = ctx.last;
    const index_r7 = ctx.index;
    const scrollerOptions_r8 = \u0275\u0275nextContext(2).options;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("level", rowNode_r4.level)("rowNode", rowNode_r4)("node", rowNode_r4.node)("parentNode", rowNode_r4.parent)("firstChild", firstChild_r5)("lastChild", lastChild_r6)("index", ctx_r0.getIndex(scrollerOptions_r8, index_r7))("itemSize", scrollerOptions_r8.itemSize)("indentation", ctx_r0.indentation)("loadingMode", ctx_r0.loadingMode)("pt", ctx_r0.pt)("unstyled", ctx_r0.unstyled());
  }
}
function Tree_ng_container_4_p_scroller_1_ng_template_2_ul_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 23, 2);
    \u0275\u0275template(2, Tree_ng_container_4_p_scroller_1_ng_template_2_ul_0_p_treeNode_2_Template, 2, 12, "p-treeNode", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r8 = \u0275\u0275nextContext();
    const items_r10 = ctx_r8.$implicit;
    const scrollerOptions_r8 = ctx_r8.options;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275styleMap(scrollerOptions_r8.contentStyle);
    \u0275\u0275classMap(ctx_r0.cx("rootChildren"));
    \u0275\u0275property("ngClass", scrollerOptions_r8.contentStyleClass)("pBind", ctx_r0.ptm("rootChildren"));
    \u0275\u0275attribute("aria-label", ctx_r0.ariaLabel)("aria-labelledby", ctx_r0.ariaLabelledBy);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", items_r10)("ngForTrackBy", ctx_r0.trackBy);
  }
}
function Tree_ng_container_4_p_scroller_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Tree_ng_container_4_p_scroller_1_ng_template_2_ul_0_Template, 3, 10, "ul", 22);
  }
  if (rf & 2) {
    const items_r10 = ctx.$implicit;
    \u0275\u0275property("ngIf", items_r10);
  }
}
function Tree_ng_container_4_p_scroller_1_ng_container_4_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Tree_ng_container_4_p_scroller_1_ng_container_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Tree_ng_container_4_p_scroller_1_ng_container_4_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 14);
  }
  if (rf & 2) {
    const scrollerOptions_r11 = ctx.options;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.loaderTemplate || ctx_r0._loaderTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c18, scrollerOptions_r11));
  }
}
function Tree_ng_container_4_p_scroller_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Tree_ng_container_4_p_scroller_1_ng_container_4_ng_template_1_Template, 1, 4, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
}
function Tree_ng_container_4_p_scroller_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-scroller", 21, 1);
    \u0275\u0275listener("onScroll", function Tree_ng_container_4_p_scroller_1_Template_p_scroller_onScroll_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onScroll.emit($event));
    })("onScrollIndexChange", function Tree_ng_container_4_p_scroller_1_Template_p_scroller_onScrollIndexChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onScrollIndexChange.emit($event));
    })("onLazyLoad", function Tree_ng_container_4_p_scroller_1_Template_p_scroller_onLazyLoad_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onLazyLoad.emit($event));
    });
    \u0275\u0275template(2, Tree_ng_container_4_p_scroller_1_ng_template_2_Template, 1, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(4, Tree_ng_container_4_p_scroller_1_ng_container_4_Template, 3, 0, "ng-container", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleMap(\u0275\u0275pureFunction1(12, _c02, ctx_r0.scrollHeight !== "flex" ? ctx_r0.scrollHeight : void 0));
    \u0275\u0275property("items", ctx_r0.serializedValue)("tabindex", -1)("styleClass", ctx_r0.cx("wrapper"))("scrollHeight", ctx_r0.scrollHeight !== "flex" ? void 0 : "100%")("itemSize", ctx_r0.virtualScrollItemSize)("lazy", ctx_r0.lazy)("options", ctx_r0.virtualScrollOptions)("pt", ctx_r0.ptm("virtualScroller"));
    \u0275\u0275attribute("data-p", ctx_r0.wrapperDataP);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.loaderTemplate || ctx_r0._loaderTemplate);
  }
}
function Tree_ng_container_4_ng_container_2_ul_3_p_treeNode_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-treeNode", 29);
  }
  if (rf & 2) {
    const node_r12 = ctx.$implicit;
    const firstChild_r13 = ctx.first;
    const lastChild_r14 = ctx.last;
    const index_r15 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275property("node", node_r12)("firstChild", firstChild_r13)("lastChild", lastChild_r14)("index", index_r15)("level", 0)("loadingMode", ctx_r0.loadingMode)("pt", ctx_r0.pt)("unstyled", ctx_r0.unstyled());
  }
}
function Tree_ng_container_4_ng_container_2_ul_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 27, 2);
    \u0275\u0275template(2, Tree_ng_container_4_ng_container_2_ul_3_p_treeNode_2_Template, 1, 8, "p-treeNode", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r0.cx("rootChildren"));
    \u0275\u0275property("pBind", ctx_r0.ptm("rootChildren"));
    \u0275\u0275attribute("aria-label", ctx_r0.ariaLabel)("aria-labelledby", ctx_r0.ariaLabelledBy);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.getRootNode())("ngForTrackBy", ctx_r0.trackBy.bind(ctx_r0));
  }
}
function Tree_ng_container_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 11, 5);
    \u0275\u0275template(3, Tree_ng_container_4_ng_container_2_ul_3_Template, 3, 7, "ul", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.cx("wrapper"));
    \u0275\u0275styleProp("max-height", ctx_r0.scrollHeight);
    \u0275\u0275property("pBind", ctx_r0.ptm("wrapper"));
    \u0275\u0275attribute("data-p", ctx_r0.wrapperDataP);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.getRootNode());
  }
}
function Tree_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Tree_ng_container_4_p_scroller_1_Template, 5, 14, "p-scroller", 20)(2, Tree_ng_container_4_ng_container_2_Template, 4, 7, "ng-container", 10);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.virtualScroll);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.virtualScroll);
  }
}
function Tree_div_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.emptyMessageLabel, " ");
  }
}
function Tree_div_5_2_ng_template_0_Template(rf, ctx) {
}
function Tree_div_5_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Tree_div_5_2_ng_template_0_Template, 0, 0, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
  }
}
function Tree_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275template(1, Tree_div_5_ng_container_1_Template, 2, 1, "ng-container", 30)(2, Tree_div_5_2_Template, 2, 0, null, 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("emptyMessage"));
    \u0275\u0275property("pBind", ctx_r0.ptm("emptyMessage"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.emptyTemplate && !ctx_r0._emptyTemplate)("ngIfElse", ctx_r0.emptyFilter);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.emptyTemplate || ctx_r0._emptyTemplate);
  }
}
function Tree_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
var classes2 = {
  root: ({
    instance
  }) => ["p-tree p-component", {
    "p-tree-selectable": instance.selectionMode != null,
    "p-tree-loading": instance.loading,
    "p-tree-flex-scrollable": instance.scrollHeight === "flex",
    "p-tree-node-dragover": instance.dragHover
  }],
  mask: "p-tree-mask p-overlay-mask",
  loadingIcon: "p-tree-loading-icon",
  pcFilterInput: "p-tree-filter-input",
  wrapper: "p-tree-root",
  rootChildren: "p-tree-root-children",
  node: ({
    instance
  }) => ({
    "p-tree-node": true,
    "p-tree-node-leaf": instance.isLeaf()
  }),
  nodeContent: ({
    instance
  }) => ({
    "p-tree-node-content": true,
    "p-tree-node-selectable": instance.selectable,
    "p-tree-node-dragover": instance.isNodeDropActive(),
    "p-tree-node-selected": instance.selectionMode === "checkbox" && instance.tree.highlightOnSelect ? instance.checked : instance.selected,
    "p-tree-node-contextmenu-selected": instance.isContextMenuSelected()
  }),
  nodeToggleButton: "p-tree-node-toggle-button",
  nodeToggleIcon: "p-tree-node-toggle-icon",
  nodeCheckbox: "p-tree-node-checkbox",
  nodeIcon: "p-tree-node-icon",
  nodeLabel: "p-tree-node-label",
  nodeChildren: "p-tree-node-children",
  emptyMessage: "p-tree-empty-message",
  dropPoint: "p-tree-node-drop-point"
};
var TreeStyle = class _TreeStyle extends BaseStyle {
  name = "tree";
  style = style2;
  classes = classes2;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TreeStyle_BaseFactory;
    return function TreeStyle_Factory(__ngFactoryType__) {
      return (\u0275TreeStyle_BaseFactory || (\u0275TreeStyle_BaseFactory = \u0275\u0275getInheritedFactory(_TreeStyle)))(__ngFactoryType__ || _TreeStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TreeStyle,
    factory: _TreeStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeStyle, [{
    type: Injectable
  }], null, null);
})();
var TreeClasses;
(function(TreeClasses2) {
  TreeClasses2["root"] = "p-tree";
  TreeClasses2["mask"] = "p-tree-mask";
  TreeClasses2["loadingIcon"] = "p-tree-loading-icon";
  TreeClasses2["pcFilterInput"] = "p-tree-filter-input";
  TreeClasses2["wrapper"] = "p-tree-root";
  TreeClasses2["rootChildren"] = "p-tree-root-children";
  TreeClasses2["node"] = "p-tree-node";
  TreeClasses2["nodeContent"] = "p-tree-node-content";
  TreeClasses2["nodeToggleButton"] = "p-tree-node-toggle-button";
  TreeClasses2["nodeToggleIcon"] = "p-tree-node-toggle-icon";
  TreeClasses2["nodeCheckbox"] = "p-tree-node-checkbox";
  TreeClasses2["nodeIcon"] = "p-tree-node-icon";
  TreeClasses2["nodeLabel"] = "p-tree-node-label";
  TreeClasses2["nodeChildren"] = "p-tree-node-children";
  TreeClasses2["emptyMessage"] = "p-tree-empty-message";
  TreeClasses2["dropPoint"] = "p-tree-node-droppoint";
})(TreeClasses || (TreeClasses = {}));
var TREE_INSTANCE = new InjectionToken("TREE_INSTANCE");
var TREENODE_INSTANCE = new InjectionToken("TREENODE_INSTANCE");
var UITreeNode = class _UITreeNode extends BaseComponent {
  $pcTreeNode = inject(TREENODE_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  static ICON_CLASS = "p-tree-node-icon ";
  rowNode;
  node;
  parentNode;
  root;
  index;
  firstChild;
  lastChild;
  level;
  indentation;
  itemSize;
  loadingMode;
  tree = inject(forwardRef(() => Tree));
  timeout;
  isPrevDropPointHovered = signal(false, ...ngDevMode ? [{
    debugName: "isPrevDropPointHovered"
  }] : (
    /* istanbul ignore next */
    []
  ));
  isNextDropPointHovered = signal(false, ...ngDevMode ? [{
    debugName: "isNextDropPointHovered"
  }] : (
    /* istanbul ignore next */
    []
  ));
  isNodeDropHovered = signal(false, ...ngDevMode ? [{
    debugName: "isNodeDropHovered"
  }] : (
    /* istanbul ignore next */
    []
  ));
  isPrevDropPointActive = computed(() => this.isPrevDropPointHovered() && this.isDroppable(), ...ngDevMode ? [{
    debugName: "isPrevDropPointActive"
  }] : (
    /* istanbul ignore next */
    []
  ));
  isNextDropPointActive = computed(() => this.isNextDropPointHovered() && this.isDroppable(), ...ngDevMode ? [{
    debugName: "isNextDropPointActive"
  }] : (
    /* istanbul ignore next */
    []
  ));
  isNodeDropActive = computed(() => this.isNodeDropHovered() && this.isNodeDroppable(), ...ngDevMode ? [{
    debugName: "isNodeDropActive"
  }] : (
    /* istanbul ignore next */
    []
  ));
  dropPosition = computed(() => this.isPrevDropPointActive() ? -1 : this.isNextDropPointActive() ? 1 : 0, ...ngDevMode ? [{
    debugName: "dropPosition"
  }] : (
    /* istanbul ignore next */
    []
  ));
  _componentStyle = inject(TreeStyle);
  /**
   * Computed signal that reactively tracks selection state.
   */
  _selected = computed(() => {
    this.tree.selection();
    return this.tree.isSelected(this.node);
  }, ...ngDevMode ? [{
    debugName: "_selected"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Computed signal that reactively tracks context menu selection state.
   */
  _contextMenuSelected = computed(() => {
    const selection = this.tree.contextMenuSelection();
    if (!selection || !this.node) {
      return false;
    }
    return selection === this.node || selection.key && selection.key === this.node.key;
  }, ...ngDevMode ? [{
    debugName: "_contextMenuSelected"
  }] : (
    /* istanbul ignore next */
    []
  ));
  get selected() {
    return this.tree.selectionMode === "single" || this.tree.selectionMode === "multiple" ? this._selected() : void 0;
  }
  get checked() {
    return this.tree.selectionMode === "checkbox" ? this._selected() : void 0;
  }
  get nodeClass() {
    return this.tree._componentStyle.classes.node({
      instance: this
    });
  }
  get selectable() {
    return this.node?.selectable === false ? false : this.tree?.selectionMode != null;
  }
  get subNodes() {
    return this.node?.parent ? this.node.parent.children : this.tree.value;
  }
  getPTOptions(key) {
    return this.ptm(key, {
      context: {
        node: this.node,
        index: this.index,
        expanded: this.node?.expanded,
        selected: this.selected,
        checked: this.checked,
        partialChecked: this.node?.partialSelected,
        leaf: this.isLeaf()
      }
    });
  }
  onInit() {
    this.node.parent = this.parentNode;
    const nativeElement = this.tree.el.nativeElement;
    const pDialogWrapper = nativeElement.closest("p-dialog");
    if (this.parentNode && !pDialogWrapper) {
      this.setAllNodesTabIndexes();
      this.tree.syncNodeOption(this.node, this.tree.value, "parent", this.tree.getNodeWithKey(this.parentNode.key, this.tree.value));
    }
  }
  getIcon() {
    let icon;
    if (this.node.icon) icon = this.node.icon;
    else icon = this.node.expanded && this.node.children && this.node.children?.length ? this.node.expandedIcon : this.node.collapsedIcon;
    return _UITreeNode.ICON_CLASS + " " + icon + " p-tree-node-icon";
  }
  isLeaf() {
    return this.tree.isNodeLeaf(this.node);
  }
  isSelected() {
    return this._selected();
  }
  isContextMenuSelected() {
    return this._contextMenuSelected();
  }
  isSameNode(event) {
    return event.currentTarget && (event.currentTarget.isSameNode(event.target) || event.currentTarget.isSameNode(event.target.closest('[role="treeitem"]')));
  }
  isDraggable() {
    return this.tree.draggableNodes;
  }
  isDroppable() {
    return this.tree.droppableNodes && this.tree.allowDrop(this.tree.dragNode, this.node, this.tree.dragNodeScope);
  }
  isNodeDroppable() {
    return this.node?.droppable !== false && this.isDroppable();
  }
  isNodeDraggable() {
    return this.node?.draggable !== false && this.isDraggable();
  }
  toggle(event) {
    if (this.node.expanded) this.collapse(event);
    else this.expand(event);
    event.stopPropagation();
  }
  expand(event) {
    this.node.expanded = true;
    if (this.tree.virtualScroll) {
      this.tree.updateSerializedValue();
      this.focusVirtualNode();
    }
    this.tree.onNodeExpand.emit({
      originalEvent: event,
      node: this.node
    });
  }
  collapse(event) {
    this.node.expanded = false;
    if (this.tree.virtualScroll) {
      this.tree.updateSerializedValue();
    }
    this.tree.onNodeCollapse.emit({
      originalEvent: event,
      node: this.node
    });
    this.focusVirtualNode();
  }
  onNodeClick(event) {
    this.tree.onNodeClick(event, this.node);
  }
  onNodeKeydown(event) {
    if (event.key === "Enter") {
      this.tree.onNodeClick(event, this.node);
    }
  }
  onNodeTouchEnd() {
    this.tree.onNodeTouchEnd();
  }
  onNodeRightClick(event) {
    this.tree.onNodeRightClick(event, this.node);
  }
  onNodeDblClick(event) {
    this.tree.onNodeDblClick(event, this.node);
  }
  insertNodeOnDrop() {
    const {
      dragNode,
      dragNodeIndex,
      dragNodeSubNodes
    } = this.tree;
    if (!this.node || dragNodeIndex == null || !dragNode || !dragNodeSubNodes) {
      return;
    }
    const position = this.dropPosition();
    const subNodes = this.subNodes || [];
    const index = this.index || 0;
    const dropIndex = dragNodeSubNodes === subNodes ? dragNodeIndex > index ? index : index - 1 : index;
    dragNodeSubNodes.splice(dragNodeIndex, 1);
    if (position < 0) {
      subNodes.splice(dropIndex, 0, dragNode);
    } else if (position > 0) {
      subNodes.splice(dropIndex + 1, 0, dragNode);
    } else {
      this.node.children = this.node.children || [];
      this.node.children.push(dragNode);
    }
    this.tree.dragDropService.stopDrag({
      node: dragNode,
      subNodes,
      index: dragNodeIndex
    });
  }
  onNodeDrop(event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.isDroppable()) {
      const {
        dragNode
      } = this.tree;
      const position = this.dropPosition();
      const isValidDrop = position !== 0 || position === 0 && this.isNodeDroppable();
      if (isValidDrop) {
        if (this.tree.validateDrop) {
          this.tree.onNodeDrop.emit({
            originalEvent: event,
            dragNode,
            dropNode: this.node,
            index: this.index,
            accept: () => {
              this.insertNodeOnDrop();
            }
          });
        } else {
          this.insertNodeOnDrop();
          this.tree.onNodeDrop.emit({
            originalEvent: event,
            dragNode,
            dropNode: this.node,
            index: this.index
          });
        }
      }
    }
    this.isPrevDropPointHovered.set(false);
    this.isNextDropPointHovered.set(false);
    this.isNodeDropHovered.set(false);
  }
  onNodeDragStart(event) {
    if (this.isNodeDraggable()) {
      event.dataTransfer.effectAllowed = "all";
      event.dataTransfer?.setData("text", "data");
      const target = event.currentTarget;
      const dragEl = target.cloneNode(true);
      const toggler = dragEl.querySelector('[data-pc-section="nodetogglebutton"]');
      const checkbox = dragEl.querySelector('[data-pc-name="pcnodecheckbox"]');
      target.setAttribute("data-p-dragging", "true");
      dragEl.style.width = C(target) + "px";
      dragEl.style.height = L(target) + "px";
      dragEl.setAttribute("data-pc-section", "drag-image");
      toggler.style.visibility = "hidden";
      checkbox?.remove();
      document.body.appendChild(dragEl);
      event.dataTransfer?.setDragImage(dragEl, 0, 0);
      setTimeout(() => document.body.removeChild(dragEl), 0);
      this.tree.dragDropService.startDrag({
        tree: this,
        node: this.node,
        subNodes: this.subNodes,
        index: this.index,
        scope: this.tree.draggableScope
      });
    } else {
      event.preventDefault();
    }
  }
  onNodeDragOver(event) {
    if (this.isDroppable()) {
      event.dataTransfer.dropEffect = "copy";
      const nodeElement = event.currentTarget;
      const rect = nodeElement.getBoundingClientRect();
      const y = event.clientY - parseInt(rect.top);
      this.isPrevDropPointHovered.set(false);
      this.isNextDropPointHovered.set(false);
      this.isNodeDropHovered.set(false);
      if (y < rect.height * 0.25) {
        this.isPrevDropPointHovered.set(true);
      } else if (y > rect.height * 0.75) {
        this.isNextDropPointHovered.set(true);
      } else if (this.isNodeDroppable()) {
        this.isNodeDropHovered.set(true);
      }
    } else {
      event.dataTransfer.dropEffect = "none";
    }
    if (this.tree.droppableNodes) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
  onNodeDragLeave() {
    this.isPrevDropPointHovered.set(false);
    this.isNextDropPointHovered.set(false);
    this.isNodeDropHovered.set(false);
  }
  onNodeDragEnd(event) {
    event.currentTarget?.removeAttribute("data-p-dragging");
    this.tree.dragDropService.stopDrag({
      node: this.node,
      subNodes: this.subNodes,
      index: this.index
    });
  }
  onKeyDown(event) {
    if (!this.isSameNode(event) || this.tree.contextMenu && this.tree.contextMenu.containerViewChild?.nativeElement.style.display === "block") {
      return;
    }
    switch (event.code) {
      //down arrow
      case "ArrowDown":
        this.onArrowDown(event);
        break;
      //up arrow
      case "ArrowUp":
        this.onArrowUp(event);
        break;
      //right arrow
      case "ArrowRight":
        this.onArrowRight(event);
        break;
      //left arrow
      case "ArrowLeft":
        this.onArrowLeft(event);
        break;
      //enter
      case "Enter":
      case "Space":
      case "NumpadEnter":
        this.onEnter(event);
        break;
      //tab
      case "Tab":
        this.setAllNodesTabIndexes();
        break;
      default:
        break;
    }
  }
  onArrowUp(event) {
    const nodeElement = event.target.getAttribute("data-pc-section") === "nodetogglebutton" ? event.target.closest('[role="treeitem"]') : event.target.parentElement;
    if (nodeElement?.previousElementSibling) {
      this.focusRowChange(nodeElement, nodeElement.previousElementSibling, this.findLastVisibleDescendant(nodeElement.previousElementSibling));
    } else {
      let parentNodeElement = this.getParentNodeElement(nodeElement);
      if (parentNodeElement) {
        this.focusRowChange(nodeElement, parentNodeElement);
      }
    }
    event.preventDefault();
  }
  onArrowDown(event) {
    const nodeElement = event.target.getAttribute("data-pc-section") === "nodetogglebutton" ? event.target.closest('[role="treeitem"]') : event.target;
    const listElement = nodeElement?.children[1];
    if (listElement && listElement.children.length > 0) {
      this.focusRowChange(nodeElement, listElement.children[0]);
    } else {
      if (nodeElement?.parentElement?.nextElementSibling) {
        this.focusRowChange(nodeElement, nodeElement.parentElement.nextElementSibling);
      } else {
        let nextSiblingAncestor = this.findNextSiblingOfAncestor(nodeElement?.parentElement);
        if (nextSiblingAncestor) {
          this.focusRowChange(nodeElement, nextSiblingAncestor);
        }
      }
    }
    event.preventDefault();
  }
  onArrowRight(event) {
    if (!this.node?.expanded && !this.tree.isNodeLeaf(this.node)) {
      this.expand(event);
      event.currentTarget.tabIndex = -1;
      setTimeout(() => {
        this.onArrowDown(event);
      }, 1);
    }
    event.preventDefault();
  }
  onArrowLeft(event) {
    const nodeElement = event.target.getAttribute("data-pc-section") === "nodetogglebutton" ? event.target.closest('[role="treeitem"]') : event.target;
    if (this.level === 0 && !this.node?.expanded) {
      return false;
    }
    if (this.node?.expanded) {
      this.collapse(event);
      return;
    }
    let parentNodeElement = this.getParentNodeElement(nodeElement?.parentElement);
    if (parentNodeElement) {
      this.focusRowChange(event.currentTarget, parentNodeElement);
    }
    event.preventDefault();
  }
  onEnter(event) {
    this.tree.onNodeClick(event, this.node);
    this.setTabIndexForSelectionMode(event, this.tree.nodeTouched);
    event.preventDefault();
  }
  setAllNodesTabIndexes() {
    const nodes = Y(this.tree.el.nativeElement, '[data-pc-section="node"]');
    const hasSelectedNode = [...nodes].some((node) => node.getAttribute("aria-selected") === "true" || node.getAttribute("aria-checked") === "true");
    [...nodes].forEach((node) => {
      node.tabIndex = -1;
    });
    if (hasSelectedNode) {
      const selectedNodes = [...nodes].filter((node) => node.getAttribute("aria-selected") === "true" || node.getAttribute("aria-checked") === "true");
      selectedNodes[0].tabIndex = 0;
      return;
    }
    if (nodes.length) {
      [...nodes][0].tabIndex = 0;
    }
  }
  setTabIndexForSelectionMode(event, nodeTouched) {
    if (this.tree.selectionMode !== null) {
      const elements = [...Y(this.tree.el.nativeElement, '[role="treeitem"]')];
      event.currentTarget.tabIndex = nodeTouched === false ? -1 : 0;
      if (elements.every((element) => element.tabIndex === -1)) {
        elements[0].tabIndex = 0;
      }
    }
  }
  findNextSiblingOfAncestor(nodeElement) {
    let parentNodeElement = this.getParentNodeElement(nodeElement);
    if (parentNodeElement) {
      if (parentNodeElement.nextElementSibling) return parentNodeElement.nextElementSibling;
      else return this.findNextSiblingOfAncestor(parentNodeElement);
    } else {
      return null;
    }
  }
  findLastVisibleDescendant(nodeElement) {
    const listElement = Array.from(nodeElement.children).find((el) => el.getAttribute("data-pc-section") === "node");
    const childrenListElement = listElement?.children[1];
    if (childrenListElement && childrenListElement.children.length > 0) {
      const lastChildElement = childrenListElement.children[childrenListElement.children.length - 1];
      return this.findLastVisibleDescendant(lastChildElement);
    } else {
      return nodeElement;
    }
  }
  getParentNodeElement(nodeElement) {
    const parentNodeElement = nodeElement.parentElement?.parentElement?.parentElement;
    return parentNodeElement?.tagName === "P-TREENODE" ? parentNodeElement : null;
  }
  focusNode(element) {
    element.children[0].focus();
  }
  focusRowChange(firstFocusableRow, currentFocusedRow, lastVisibleDescendant) {
    firstFocusableRow.tabIndex = "-1";
    currentFocusedRow.children[0].tabIndex = "0";
    this.focusNode(lastVisibleDescendant || currentFocusedRow);
  }
  focusVirtualNode() {
    this.timeout = setTimeout(() => {
      let node = Z(this.tree?.contentViewChild?.nativeElement, `[data-id="${this.node?.key ?? this.node?.data}"]`);
      bt(node);
    }, 1);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275UITreeNode_BaseFactory;
    return function UITreeNode_Factory(__ngFactoryType__) {
      return (\u0275UITreeNode_BaseFactory || (\u0275UITreeNode_BaseFactory = \u0275\u0275getInheritedFactory(_UITreeNode)))(__ngFactoryType__ || _UITreeNode);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _UITreeNode,
    selectors: [["p-treeNode"]],
    inputs: {
      rowNode: "rowNode",
      node: "node",
      parentNode: "parentNode",
      root: [2, "root", "root", booleanAttribute],
      index: [2, "index", "index", numberAttribute],
      firstChild: [2, "firstChild", "firstChild", booleanAttribute],
      lastChild: [2, "lastChild", "lastChild", booleanAttribute],
      level: [2, "level", "level", numberAttribute],
      indentation: [2, "indentation", "indentation", numberAttribute],
      itemSize: [2, "itemSize", "itemSize", numberAttribute],
      loadingMode: "loadingMode"
    },
    features: [\u0275\u0275ProvidersFeature([TreeStyle, {
      provide: TREENODE_INSTANCE,
      useExisting: _UITreeNode
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _UITreeNode
    }]), \u0275\u0275InheritDefinitionFeature],
    decls: 1,
    vars: 1,
    consts: [["icon", ""], ["role", "treeitem", 3, "class", "ngStyle", "style", "pBind"], ["role", "treeitem", 3, "keydown", "ngStyle", "pBind"], [3, "class", "pBind"], [3, "click", "contextmenu", "dblclick", "touchend", "drop", "dragstart", "dragover", "dragleave", "dragend", "draggable", "pBind"], ["type", "button", "pRipple", "", "tabindex", "-1", 3, "click", "pBind"], [4, "ngIf"], [3, "class", "pBind", 4, "ngIf"], [3, "ngModel", "styleClass", "binary", "indeterminate", "disabled", "variant", "tabindex", "pt", "unstyled", "click", 4, "ngIf"], [3, "pBind"], ["role", "group", 3, "class", "pBind", 4, "ngIf"], ["data-p-icon", "chevron-right", 3, "class", "pBind", 4, "ngIf"], ["data-p-icon", "chevron-down", 3, "class", "pBind", 4, "ngIf"], ["data-p-icon", "chevron-right", 3, "pBind"], ["data-p-icon", "chevron-down", 3, "pBind"], ["data-p-icon", "spinner", "spin", "", 3, "pBind"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "click", "ngModel", "styleClass", "binary", "indeterminate", "disabled", "variant", "tabindex", "pt", "unstyled"], ["role", "group", 3, "pBind"], [3, "node", "parentNode", "firstChild", "lastChild", "index", "itemSize", "level", "loadingMode", "pt", "unstyled", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "node", "parentNode", "firstChild", "lastChild", "index", "itemSize", "level", "loadingMode", "pt", "unstyled"]],
    template: function UITreeNode_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, UITreeNode_Conditional_0_Template, 13, 38, "li", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.node ? 0 : -1);
      }
    },
    dependencies: [_UITreeNode, CommonModule, NgForOf, NgIf, NgTemplateOutlet, NgStyle, Ripple, Checkbox, FormsModule, NgControlStatus, NgModel, ChevronRightIcon, ChevronDownIcon, SpinnerIcon, SharedModule, BindModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UITreeNode, [{
    type: Component,
    args: [{
      selector: "p-treeNode",
      standalone: true,
      imports: [CommonModule, Ripple, Checkbox, FormsModule, ChevronRightIcon, ChevronDownIcon, SpinnerIcon, SharedModule, BindModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
        @if (node) {
            <li
                [class]="cn(cx('node'), node.styleClass)"
                [ngStyle]="{ height: itemSize + 'px' }"
                [style]="node.style"
                [attr.aria-label]="node.label"
                [attr.aria-checked]="checked"
                [attr.aria-setsize]="node.children ? node.children.length : 0"
                [attr.aria-selected]="selected"
                [attr.aria-expanded]="node.expanded"
                [attr.aria-posinset]="index + 1"
                [attr.aria-level]="level + 1"
                [attr.tabindex]="index === 0 ? 0 : -1"
                [attr.data-id]="node.key"
                role="treeitem"
                (keydown)="onKeyDown($event)"
                [pBind]="getPTOptions('node')"
            >
                @if (isPrevDropPointActive()) {
                    <div [class]="cx('dropPoint')" [attr.aria-hidden]="true" [pBind]="getPTOptions('dropPoint')"></div>
                }
                <div
                    [class]="cx('nodeContent')"
                    [style.paddingLeft]="level * indentation + 'rem'"
                    (click)="onNodeClick($event)"
                    (contextmenu)="onNodeRightClick($event)"
                    (dblclick)="onNodeDblClick($event)"
                    (touchend)="onNodeTouchEnd()"
                    (drop)="onNodeDrop($event)"
                    (dragstart)="onNodeDragStart($event)"
                    (dragover)="onNodeDragOver($event)"
                    (dragleave)="onNodeDragLeave($event)"
                    (dragend)="onNodeDragEnd($event)"
                    [draggable]="tree.draggableNodes"
                    [pBind]="getPTOptions('nodeContent')"
                >
                    <button type="button" [class]="cx('nodeToggleButton')" (click)="toggle($event)" pRipple tabindex="-1" [pBind]="getPTOptions('nodeToggleButton')">
                        <ng-container *ngIf="!tree.togglerIconTemplate && !tree._togglerIconTemplate">
                            <ng-container *ngIf="!node.loading">
                                <svg data-p-icon="chevron-right" *ngIf="!node.expanded" [class]="cx('nodeToggleIcon')" [pBind]="getPTOptions('nodeToggleIcon')" />
                                <svg data-p-icon="chevron-down" *ngIf="node.expanded" [class]="cx('nodeToggleIcon')" [pBind]="getPTOptions('nodeToggleIcon')" />
                            </ng-container>
                            <ng-container *ngIf="loadingMode === 'icon' && node.loading">
                                <svg data-p-icon="spinner" [class]="cx('nodeToggleIcon')" spin [pBind]="getPTOptions('nodeToggleIcon')" />
                            </ng-container>
                        </ng-container>
                        <span *ngIf="tree.togglerIconTemplate || tree._togglerIconTemplate" [class]="cx('nodeToggleIcon')" [pBind]="getPTOptions('nodeToggleIcon')">
                            <ng-template *ngTemplateOutlet="tree.togglerIconTemplate || tree._togglerIconTemplate; context: { $implicit: node.expanded, loading: node.loading }"></ng-template>
                        </span>
                    </button>

                    <p-checkbox
                        [ngModel]="isSelected()"
                        [styleClass]="cx('nodeCheckbox')"
                        [binary]="true"
                        [indeterminate]="node.partialSelected"
                        *ngIf="tree.selectionMode == 'checkbox'"
                        [disabled]="node.selectable === false"
                        [variant]="tree?.config.inputStyle() === 'filled' || tree?.config.inputVariant() === 'filled' ? 'filled' : 'outlined'"
                        [attr.data-p-partialchecked]="node.partialSelected"
                        [tabindex]="-1"
                        (click)="$event.preventDefault()"
                        [pt]="getPTOptions('pcNodeCheckbox')"
                        [unstyled]="unstyled()"
                    >
                        <ng-container *ngIf="tree.checkboxIconTemplate || tree._checkboxIconTemplate">
                            <ng-template #icon>
                                <ng-template
                                    *ngTemplateOutlet="
                                        tree.checkboxIconTemplate || tree._checkboxIconTemplate;
                                        context: {
                                            $implicit: isSelected(),
                                            partialSelected: node.partialSelected,
                                            class: cx('nodeCheckbox')
                                        }
                                    "
                                ></ng-template>
                            </ng-template>
                        </ng-container>
                    </p-checkbox>

                    <span [class]="getIcon()" *ngIf="node.icon || node.expandedIcon || node.collapsedIcon" [pBind]="getPTOptions('nodeIcon')"></span>
                    <span [class]="cx('nodeLabel')" [pBind]="getPTOptions('nodeLabel')">
                        <span *ngIf="!tree.getTemplateForNode(node)">{{ node.label }}</span>
                        <span *ngIf="tree.getTemplateForNode(node)">
                            <ng-container *ngTemplateOutlet="tree.getTemplateForNode(node); context: { $implicit: node }"></ng-container>
                        </span>
                    </span>
                </div>
                @if (isNextDropPointActive()) {
                    <div [class]="cx('dropPoint', { next: true })" [attr.aria-hidden]="true" [pBind]="getPTOptions('dropPoint')"></div>
                }
                <ul [class]="cx('nodeChildren')" *ngIf="!tree.virtualScroll && node.children && node.expanded" role="group" [pBind]="ptm('nodeChildren')">
                    <p-treeNode
                        *ngFor="let childNode of node.children; let firstChild = first; let lastChild = last; let index = index; trackBy: tree.trackBy.bind(this)"
                        [node]="childNode"
                        [parentNode]="node"
                        [firstChild]="firstChild"
                        [lastChild]="lastChild"
                        [index]="index"
                        [itemSize]="itemSize"
                        [level]="level + 1"
                        [loadingMode]="loadingMode"
                        [pt]="pt"
                        [unstyled]="unstyled()"
                    ></p-treeNode>
                </ul>
            </li>
        }
    `,
      encapsulation: ViewEncapsulation.None,
      providers: [TreeStyle, {
        provide: TREENODE_INSTANCE,
        useExisting: UITreeNode
      }, {
        provide: PARENT_INSTANCE,
        useExisting: UITreeNode
      }]
    }]
  }], null, {
    rowNode: [{
      type: Input
    }],
    node: [{
      type: Input
    }],
    parentNode: [{
      type: Input
    }],
    root: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    index: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    firstChild: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    lastChild: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    level: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    indentation: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    itemSize: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    loadingMode: [{
      type: Input
    }]
  });
})();
var Tree = class _Tree extends BaseComponent {
  dragDropService;
  componentName = "Tree";
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  $pcTree = inject(TREE_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  /**
   * An array of treenodes.
   * @group Props
   */
  value;
  /**
   * Defines the selection mode.
   * @group Props
   */
  selectionMode;
  /**
   * Loading mode display.
   * @group Props
   */
  loadingMode = "mask";
  /**
   * A single treenode instance or an array to refer to the selections.
   * @group Props
   */
  selection = model(null, ...ngDevMode ? [{
    debugName: "selection"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Style class of the component.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Context menu instance.
   * @group Props
   */
  contextMenu;
  /**
   * Defines the behavior of context menu selection, in "separate" mode context menu updates contextMenuSelection property whereas in joint mode selection property is used instead so that when row selection is enabled, both row selection and context menu selection use the same property.
   * @group Props
   */
  contextMenuSelectionMode = "joint";
  /**
   * Selected node with a context menu.
   * @group Props
   */
  contextMenuSelection = model(null, ...ngDevMode ? [{
    debugName: "contextMenuSelection"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Scope of the draggable nodes to match a droppableScope.
   * @group Props
   */
  draggableScope;
  /**
   * Scope of the droppable nodes to match a draggableScope.
   * @group Props
   */
  droppableScope;
  /**
   * Whether the nodes are draggable.
   * @group Props
   */
  draggableNodes;
  /**
   * Whether the nodes are droppable.
   * @group Props
   */
  droppableNodes;
  /**
   * Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.
   * @group Props
   */
  metaKeySelection = false;
  /**
   * Whether checkbox selections propagate to ancestor nodes.
   * @group Props
   */
  propagateSelectionUp = true;
  /**
   * Whether checkbox selections propagate to descendant nodes.
   * @group Props
   */
  propagateSelectionDown = true;
  /**
   * Displays a loader to indicate data load is in progress.
   * @group Props
   */
  loading;
  /**
   * The icon to show while indicating data load is in progress.
   * @group Props
   */
  loadingIcon;
  /**
   * Text to display when there is no data.
   * @group Props
   */
  emptyMessage = "";
  /**
   * Used to define a string that labels the tree.
   * @group Props
   */
  ariaLabel;
  /**
   * Defines a string that labels the toggler icon for accessibility.
   * @group Props
   */
  togglerAriaLabel;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * When enabled, drop can be accepted or rejected based on condition defined at onNodeDrop.
   * @group Props
   */
  validateDrop;
  /**
   * When specified, displays an input field to filter the items.
   * @group Props
   */
  filter;
  /**
   * Determines whether the filter input should be automatically focused when the component is rendered.
   * @group Props
   */
  filterInputAutoFocus = false;
  /**
   * When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.
   * @group Props
   */
  filterBy = "label";
  /**
   * Mode for filtering valid values are "lenient" and "strict". Default is lenient.
   * @group Props
   */
  filterMode = "lenient";
  /**
   * Mode for filtering valid values are "lenient" and "strict". Default is lenient.
   * @group Props
   */
  filterOptions;
  /**
   * Placeholder text to show when filter input is empty.
   * @group Props
   */
  filterPlaceholder;
  /**
   * Values after the tree nodes are filtered.
   * @group Props
   */
  filteredNodes;
  /**
   * Locale to use in filtering. The default locale is the host environment's current locale.
   * @group Props
   */
  filterLocale;
  /**
   * Height of the scrollable viewport.
   * @group Props
   */
  scrollHeight;
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
   * Indentation factor for spacing of the nested node when virtual scrolling is enabled.
   * @group Props
   */
  indentation = 1.5;
  /**
   * Custom templates of the component.
   * @group Props
   */
  _templateMap;
  /**
   * Function to optimize the node list rendering, default algorithm checks for object identity.
   * @group Props
   */
  trackBy = (index, item) => item;
  /**
   * Highlights the node on select.
   * @group Props
   */
  highlightOnSelect = false;
  /**
   * Callback to invoke when a node is selected.
   * @param {TreeNodeSelectEvent} event - Node select event.
   * @group Emits
   */
  onNodeSelect = new EventEmitter();
  /**
   * Callback to invoke when a node is unselected.
   * @param {TreeNodeUnSelectEvent} event - Node unselect event.
   * @group Emits
   */
  onNodeUnselect = new EventEmitter();
  /**
   * Callback to invoke when a node is expanded.
   * @param {TreeNodeExpandEvent} event - Node expand event.
   * @group Emits
   */
  onNodeExpand = new EventEmitter();
  /**
   * Callback to invoke when a node is collapsed.
   * @param {TreeNodeCollapseEvent} event - Node collapse event.
   * @group Emits
   */
  onNodeCollapse = new EventEmitter();
  /**
   * Callback to invoke when a node is selected with right click.
   * @param {onNodeContextMenuSelect} event - Node context menu select event.
   * @group Emits
   */
  onNodeContextMenuSelect = new EventEmitter();
  /**
   * Callback to invoke when a node is double clicked.
   * @param {TreeNodeDoubleClickEvent} event - Node double click event.
   * @group Emits
   */
  onNodeDoubleClick = new EventEmitter();
  /**
   * Callback to invoke when a node is dropped.
   * @param {TreeNodeDropEvent} event - Node drop event.
   * @group Emits
   */
  onNodeDrop = new EventEmitter();
  /**
   * Callback to invoke in lazy mode to load new data.
   * @param {TreeLazyLoadEvent} event - Custom lazy load event.
   * @group Emits
   */
  onLazyLoad = new EventEmitter();
  /**
   * Callback to invoke in virtual scroll mode when scroll position changes.
   * @param {TreeScrollEvent} event - Custom scroll event.
   * @group Emits
   */
  onScroll = new EventEmitter();
  /**
   * Callback to invoke in virtual scroll mode when scroll position and item's range in view changes.
   * @param {TreeScrollIndexChangeEvent} event - Scroll index change event.
   * @group Emits
   */
  onScrollIndexChange = new EventEmitter();
  /**
   * Callback to invoke when data is filtered.
   * @param {TreeFilterEvent} event - Custom filter event.
   * @group Emits
   */
  onFilter = new EventEmitter();
  /**
   * Custom filter template.
   * @param {TreeFilterTemplateContext} context - filter context.
   * @see {@link TreeFilterTemplateContext}
   * @group Templates
   */
  filterTemplate;
  /**
   * Custom node template.
   * @group Templates
   */
  nodeTemplate;
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
   * Custom loader template.
   * @param {TreeLoaderTemplateContext} context - loader context.
   * @see {@link TreeLoaderTemplateContext}
   * @group Templates
   */
  loaderTemplate;
  /**
   * Custom empty message template.
   * @group Templates
   */
  emptyTemplate;
  /**
   * Custom toggler icon template.
   * @param {TreeTogglerIconTemplateContext} context - toggler icon context.
   * @see {@link TreeTogglerIconTemplateContext}
   * @group Templates
   */
  togglerIconTemplate;
  /**
   * Custom checkbox icon template.
   * @param {TreeCheckboxIconTemplateContext} context - checkbox icon context.
   * @see {@link TreeCheckboxIconTemplateContext}
   * @group Templates
   */
  checkboxIconTemplate;
  /**
   * Custom loading icon template.
   * @group Templates
   */
  loadingIconTemplate;
  /**
   * Custom filter icon template.
   * @group Templates
   */
  filterIconTemplate;
  filterViewChild;
  scroller;
  wrapperViewChild;
  contentViewChild;
  templates;
  _headerTemplate;
  _emptyTemplate;
  _footerTemplate;
  _loaderTemplate;
  _togglerIconTemplate;
  _checkboxIconTemplate;
  _loadingIconTemplate;
  _filterIconTemplate;
  _filterTemplate;
  onAfterContentInit() {
    if (this.templates.length) {
      this._templateMap = {};
    }
    this.templates.forEach((item) => {
      switch (item.getType()) {
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
        case "togglericon":
          this._togglerIconTemplate = item.template;
          break;
        case "checkboxicon":
          this._checkboxIconTemplate = item.template;
          break;
        case "loadingicon":
          this._loadingIconTemplate = item.template;
          break;
        case "filtericon":
          this._filterIconTemplate = item.template;
          break;
        case "filter":
          this._filterTemplate = item.template;
          break;
        default:
          this._templateMap[item.name] = item.template;
          break;
      }
    });
  }
  serializedValue;
  nodeTouched;
  dragNodeTree;
  dragNode;
  dragNodeSubNodes;
  dragNodeIndex;
  dragNodeScope;
  dragHover;
  dragStartSubscription;
  dragStopSubscription;
  _componentStyle = inject(TreeStyle);
  handleDropEvent(event) {
    this.onDrop(event);
  }
  handleDragOverEvent(event) {
    this.onDragOver(event);
  }
  handleDragEnterEvent() {
    this.onDragEnter();
  }
  handleDragLeaveEvent(event) {
    this.onDragLeave(event);
  }
  constructor(dragDropService) {
    super();
    this.dragDropService = dragDropService;
  }
  onInit() {
    if (this.filterBy) {
      this.filterOptions = {
        filter: (value) => this._filter(value),
        reset: () => this.resetFilter()
      };
    }
    if (this.droppableNodes) {
      this.dragStartSubscription = this.dragDropService.dragStart$.subscribe((event) => {
        this.dragNodeTree = event.tree;
        this.dragNode = event.node;
        this.dragNodeSubNodes = event.subNodes;
        this.dragNodeIndex = event.index;
        this.dragNodeScope = event.scope;
      });
      this.dragStopSubscription = this.dragDropService.dragStop$.subscribe((event) => {
        this.dragNodeTree = null;
        this.dragNode = null;
        this.dragNodeSubNodes = null;
        this.dragNodeIndex = null;
        this.dragNodeScope = null;
        this.dragHover = false;
      });
    }
  }
  onChanges(simpleChange) {
    if (simpleChange.value) {
      this.updateSerializedValue();
      if (this.hasFilterActive()) {
        this._filter(this.filterViewChild?.nativeElement?.value);
      }
    }
  }
  get emptyMessageLabel() {
    return this.emptyMessage || this.config.getTranslation(TranslationKeys.EMPTY_MESSAGE);
  }
  updateSerializedValue() {
    this.serializedValue = [];
    this.serializeNodes(null, this.getRootNode(), 0, true);
  }
  serializeNodes(parent, nodes, level, visible) {
    if (nodes && nodes.length) {
      for (let node of nodes) {
        node.parent = parent;
        const rowNode = {
          node,
          parent,
          level,
          visible: visible && (parent ? parent.expanded : true)
        };
        this.serializedValue.push(rowNode);
        if (rowNode.visible && node.expanded) {
          this.serializeNodes(node, node.children, level + 1, rowNode.visible);
        }
      }
    }
  }
  onNodeClick(event, node) {
    let eventTarget = event.target;
    const section = eventTarget?.getAttribute?.("data-pc-section");
    if (section === "nodetogglebutton" || section === "nodetoggleicon") {
      return;
    }
    if (this.selectionMode) {
      if (node.selectable === false) {
        node.style = "--p-focus-ring-color: none;";
        return;
      } else {
        if (!node.style?.includes("--p-focus-ring-color")) {
          node.style = node.style ? `${node.style}--p-focus-ring-color: var(--primary-color)` : "--p-focus-ring-color: var(--primary-color)";
        }
      }
      if (this.hasFilteredNodes()) {
        node = this.getNodeWithKey(node.key, this.filteredNodes);
        if (!node) {
          return;
        }
      }
      let index = this.findIndexInSelection(node);
      let selected = index >= 0;
      const currentSelection = this.selection();
      if (this.isCheckboxSelectionMode()) {
        if (selected) {
          if (this.propagateSelectionDown) this.propagateDown(node, false);
          else this.selection.set(currentSelection.filter((_val, i) => i != index));
          if (this.propagateSelectionUp && node.parent) {
            this.propagateUp(node.parent, false);
          }
          this.onNodeUnselect.emit({
            originalEvent: event,
            node
          });
        } else {
          if (this.propagateSelectionDown) this.propagateDown(node, true);
          else this.selection.set([...currentSelection || [], node]);
          if (this.propagateSelectionUp && node.parent) {
            this.propagateUp(node.parent, true);
          }
          this.onNodeSelect.emit({
            originalEvent: event,
            node
          });
        }
      } else {
        let metaSelection = this.nodeTouched ? false : this.metaKeySelection;
        if (metaSelection) {
          let metaKey = event.metaKey || event.ctrlKey;
          if (selected && metaKey) {
            if (this.isSingleSelectionMode()) {
              this.selection.set(null);
            } else {
              this.selection.set(currentSelection.filter((_val, i) => i != index));
            }
            this.onNodeUnselect.emit({
              originalEvent: event,
              node
            });
          } else {
            if (this.isSingleSelectionMode()) {
              this.selection.set(node);
            } else if (this.isMultipleSelectionMode()) {
              const base = !metaKey ? [] : currentSelection || [];
              this.selection.set([...base, node]);
            }
            this.onNodeSelect.emit({
              originalEvent: event,
              node
            });
          }
        } else {
          if (this.isSingleSelectionMode()) {
            if (selected) {
              this.selection.set(null);
              this.onNodeUnselect.emit({
                originalEvent: event,
                node
              });
            } else {
              this.selection.set(node);
              setTimeout(() => {
                this.onNodeSelect.emit({
                  originalEvent: event,
                  node
                });
              });
            }
          } else {
            if (selected) {
              this.selection.set(currentSelection.filter((_val, i) => i != index));
              this.onNodeUnselect.emit({
                originalEvent: event,
                node
              });
            } else {
              this.selection.set([...currentSelection || [], node]);
              setTimeout(() => {
                this.onNodeSelect.emit({
                  originalEvent: event,
                  node
                });
              });
            }
          }
        }
      }
    }
    this.nodeTouched = false;
  }
  onNodeTouchEnd() {
    this.nodeTouched = true;
  }
  onNodeRightClick(event, node) {
    if (this.contextMenu) {
      let eventTarget = event.target;
      const section = eventTarget.getAttribute("data-pc-section");
      if (section === "nodetogglebutton" || section === "nodetoggleicon") {
        return;
      }
      let index = this.findIndexInSelection(node);
      let isNodeSelected = index >= 0;
      const onContextMenuCallback = () => {
        this.contextMenu.show(event);
        this.contextMenu.hideCallback = () => {
          this.contextMenuSelection.set(null);
        };
        this.onNodeContextMenuSelect.emit({
          originalEvent: event,
          node
        });
      };
      if (this.contextMenuSelectionMode === "separate") {
        this.contextMenuSelection.set(node);
        onContextMenuCallback();
      } else if (this.contextMenuSelectionMode === "joint") {
        if (!isNodeSelected) {
          if (this.isSingleSelectionMode()) {
            this.selection.set(node);
          } else {
            this.selection.set([node]);
          }
        }
        onContextMenuCallback();
      }
    }
  }
  onNodeDblClick(event, node) {
    this.onNodeDoubleClick.emit({
      originalEvent: event,
      node
    });
  }
  findIndexInSelection(node) {
    let index = -1;
    const currentSelection = this.selection();
    if (this.selectionMode && currentSelection) {
      if (this.isSingleSelectionMode()) {
        const sel = currentSelection;
        let areNodesEqual = sel.key && sel.key === node.key || sel == node;
        index = areNodesEqual ? 0 : -1;
      } else {
        const selArray = currentSelection;
        for (let i = 0; i < selArray.length; i++) {
          let selectedNode = selArray[i];
          let areNodesEqual = selectedNode.key && selectedNode.key === node.key || selectedNode == node;
          if (areNodesEqual) {
            index = i;
            break;
          }
        }
      }
    }
    return index;
  }
  syncNodeOption(node, parentNodes, option, value) {
    const _node = this.hasFilteredNodes() ? this.getNodeWithKey(node.key, parentNodes) : null;
    if (_node) {
      _node[option] = value || node[option];
    }
  }
  hasFilteredNodes() {
    return this.filter && this.filteredNodes && this.filteredNodes.length;
  }
  hasFilterActive() {
    return this.filter && this.filterViewChild?.nativeElement?.value.length > 0;
  }
  getNodeWithKey(key, nodes) {
    for (let node of nodes) {
      if (node.key === key) {
        return node;
      }
      if (node.children) {
        let matchedNode = this.getNodeWithKey(key, node.children);
        if (matchedNode) {
          return matchedNode;
        }
      }
    }
  }
  propagateUp(node, select) {
    if (node.children && node.children.length) {
      let selectedCount = 0;
      let childPartialSelected = false;
      for (let child of node.children) {
        if (this.isSelected(child)) {
          selectedCount++;
        } else if (child.partialSelected) {
          childPartialSelected = true;
        }
      }
      const currentSelection = this.selection() || [];
      if (select && selectedCount == node.children.length) {
        this.selection.set([...currentSelection, node]);
        node.partialSelected = false;
      } else {
        if (!select) {
          let index = this.findIndexInSelection(node);
          if (index >= 0) {
            this.selection.set(currentSelection.filter((_val, i) => i != index));
          }
        }
        if (childPartialSelected || selectedCount > 0 && selectedCount != node.children.length) node.partialSelected = true;
        else node.partialSelected = false;
      }
      this.syncNodeOption(node, this.filteredNodes, "partialSelected");
    }
    let parent = node.parent;
    if (parent) {
      this.propagateUp(parent, select);
    }
  }
  propagateDown(node, select) {
    let index = this.findIndexInSelection(node);
    const currentSelection = this.selection() || [];
    if (select && index == -1) {
      this.selection.set([...currentSelection, node]);
    } else if (!select && index > -1) {
      this.selection.set(currentSelection.filter((_val, i) => i != index));
    }
    node.partialSelected = false;
    this.syncNodeOption(node, this.filteredNodes, "partialSelected");
    if (node.children && node.children.length) {
      for (let child of node.children) {
        this.propagateDown(child, select);
      }
    }
  }
  isSelected(node) {
    return this.findIndexInSelection(node) != -1;
  }
  isSingleSelectionMode() {
    return this.selectionMode && this.selectionMode == "single";
  }
  isMultipleSelectionMode() {
    return this.selectionMode && this.selectionMode == "multiple";
  }
  isCheckboxSelectionMode() {
    return this.selectionMode && this.selectionMode == "checkbox";
  }
  isNodeLeaf(node) {
    return node.leaf == false ? false : !(node.children && node.children.length);
  }
  getRootNode() {
    return this.filteredNodes ? this.filteredNodes : this.value;
  }
  getTemplateForNode(node) {
    if (this._templateMap) return node.type ? this._templateMap[node.type] : this._templateMap["default"];
    else return null;
  }
  onDragOver(event) {
    if (this.droppableNodes && this.allowDrop(this.dragNode, null, this.dragNodeScope)) {
      event.dataTransfer.dropEffect = "copy";
      event.preventDefault();
    }
  }
  onDrop(event) {
    if (this.droppableNodes) {
      event.preventDefault();
      let dragNode = this.dragNode;
      if (this.isSameTreeScope(this.dragNodeScope)) {
        return;
      }
      if (this.allowDrop(dragNode, null, this.dragNodeScope)) {
        let dragNodeIndex = this.dragNodeIndex;
        this.value = this.value || [];
        if (this.validateDrop) {
          this.onNodeDrop.emit({
            originalEvent: event,
            dragNode,
            dropNode: null,
            index: dragNodeIndex,
            accept: () => {
              this.processTreeDrop(dragNode, dragNodeIndex);
            }
          });
        } else {
          this.onNodeDrop.emit({
            originalEvent: event,
            dragNode,
            dropNode: null,
            index: dragNodeIndex
          });
          this.processTreeDrop(dragNode, dragNodeIndex);
        }
      }
    }
  }
  processTreeDrop(dragNode, dragNodeIndex) {
    this.dragNodeSubNodes.splice(dragNodeIndex, 1);
    this.value.push(dragNode);
    this.dragDropService.stopDrag({
      node: dragNode
    });
  }
  onDragEnter() {
    if (this.droppableNodes && this.allowDrop(this.dragNode, null, this.dragNodeScope)) {
      this.dragHover = true;
    }
  }
  onDragLeave(event) {
    if (this.droppableNodes) {
      let rect = event.currentTarget.getBoundingClientRect();
      if (event.x > parseInt(rect.left) + rect.width || event.x < parseInt(rect.left) || event.y > parseInt(rect.top) + rect.height || event.y < parseInt(rect.top)) {
        this.dragHover = false;
      }
    }
  }
  allowDrop(dragNode, dropNode, dragNodeScope) {
    if (!dragNode) {
      return false;
    } else if (this.isValidDragScope(dragNodeScope)) {
      let allow = true;
      if (dropNode) {
        if (dragNode === dropNode) {
          allow = false;
        } else {
          let parent = dropNode.parent;
          while (parent != null) {
            if (parent === dragNode) {
              allow = false;
              break;
            }
            parent = parent.parent;
          }
        }
      }
      return allow;
    } else {
      return false;
    }
  }
  hasCommonScope(dragScope, dropScope) {
    if (typeof dropScope === "string") {
      if (typeof dragScope === "string") return dropScope === dragScope;
      else if (Array.isArray(dragScope)) return dragScope.indexOf(dropScope) != -1;
    } else if (Array.isArray(dropScope)) {
      if (typeof dragScope === "string") {
        return dropScope.indexOf(dragScope) != -1;
      } else if (Array.isArray(dragScope)) {
        for (let s of dropScope) {
          for (let ds of dragScope) {
            if (s === ds) {
              return true;
            }
          }
        }
      }
    }
    return false;
  }
  isSameTreeScope(dragScope) {
    return this.hasCommonScope(dragScope, this.draggableScope);
  }
  isValidDragScope(dragScope) {
    let dropScope = this.droppableScope;
    if (dropScope) {
      return this.hasCommonScope(dragScope, dropScope);
    } else {
      return true;
    }
  }
  _filter(value) {
    let filterValue = value;
    if (filterValue === "") {
      this.filteredNodes = null;
    } else {
      this.filteredNodes = [];
      const searchFields = this.filterBy.split(",");
      const filterText = X(filterValue).toLocaleLowerCase(this.filterLocale);
      const isStrictMode = this.filterMode === "strict";
      for (let node of this.value) {
        let copyNode = __spreadValues({}, node);
        let paramsWithoutNode = {
          searchFields,
          filterText,
          isStrictMode
        };
        if (isStrictMode && (this.findFilteredNodes(copyNode, paramsWithoutNode) || this.isFilterMatched(copyNode, paramsWithoutNode)) || !isStrictMode && (this.isFilterMatched(copyNode, paramsWithoutNode) || this.findFilteredNodes(copyNode, paramsWithoutNode))) {
          this.filteredNodes.push(copyNode);
        }
      }
    }
    this.updateSerializedValue();
    this.onFilter.emit({
      filter: filterValue,
      filteredValue: this.filteredNodes
    });
  }
  /**
   * Resets filter.
   * @group Method
   */
  resetFilter() {
    this.filteredNodes = null;
    if (this.filterViewChild && this.filterViewChild.nativeElement) {
      this.filterViewChild.nativeElement.value = "";
    }
  }
  /**
   * Scrolls to virtual index.
   * @param {number} number - Index to be scrolled.
   * @group Method
   */
  scrollToVirtualIndex(index) {
    this.virtualScroll && this.scroller?.scrollToIndex(index);
  }
  /**
   * Scrolls to virtual index.
   * @param {ScrollToOptions} options - Scroll options.
   * @group Method
   */
  scrollTo(options) {
    if (this.virtualScroll) {
      this.scroller?.scrollTo(options);
    } else if (this.wrapperViewChild && this.wrapperViewChild.nativeElement) {
      if (this.wrapperViewChild.nativeElement.scrollTo) {
        this.wrapperViewChild.nativeElement.scrollTo(options);
      } else {
        this.wrapperViewChild.nativeElement.scrollLeft = options.left;
        this.wrapperViewChild.nativeElement.scrollTop = options.top;
      }
    }
  }
  findFilteredNodes(node, paramsWithoutNode) {
    if (node) {
      let matched = false;
      if (node.children) {
        let childNodes = [...node.children];
        node.children = [];
        for (let childNode of childNodes) {
          let copyChildNode = __spreadValues({}, childNode);
          if (this.isFilterMatched(copyChildNode, paramsWithoutNode)) {
            matched = true;
            node.children.push(copyChildNode);
          }
        }
      }
      if (matched) {
        node.expanded = true;
        return true;
      }
    }
  }
  isFilterMatched(node, params) {
    let {
      searchFields,
      filterText,
      isStrictMode
    } = params;
    let matched = false;
    for (let field of searchFields) {
      let fieldValue = X(String(p(node, field))).toLocaleLowerCase(this.filterLocale);
      if (fieldValue.indexOf(filterText) > -1) {
        matched = true;
      }
    }
    if (!matched || isStrictMode && !this.isNodeLeaf(node)) {
      matched = this.findFilteredNodes(node, {
        searchFields,
        filterText,
        isStrictMode
      }) || matched;
    }
    return matched;
  }
  getIndex(options, index) {
    const getItemOptions = options["getItemOptions"];
    return getItemOptions ? getItemOptions(index).index : index;
  }
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  onDestroy() {
    if (this.dragStartSubscription) {
      this.dragStartSubscription.unsubscribe();
    }
    if (this.dragStopSubscription) {
      this.dragStopSubscription.unsubscribe();
    }
  }
  get containerDataP() {
    return this.cn({
      loading: this.loading,
      scrollable: this.scrollHeight === "flex"
    });
  }
  get wrapperDataP() {
    return this.cn({
      scrollable: this.scrollHeight === "flex"
    });
  }
  static \u0275fac = function Tree_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Tree)(\u0275\u0275directiveInject(TreeDragDropService, 8));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Tree,
    selectors: [["p-tree"]],
    contentQueries: function Tree_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c5, 4)(dirIndex, _c6, 4)(dirIndex, _c7, 4)(dirIndex, _c8, 4)(dirIndex, _c9, 4)(dirIndex, _c10, 4)(dirIndex, _c11, 4)(dirIndex, _c122, 4)(dirIndex, _c13, 4)(dirIndex, _c14, 4)(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.filterTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.nodeTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.footerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.loaderTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.emptyTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.togglerIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.checkboxIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.loadingIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.filterIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Tree_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c5, 5)(_c15, 5)(_c16, 5)(_c17, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.filterViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.scroller = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.wrapperViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentViewChild = _t.first);
      }
    },
    hostVars: 3,
    hostBindings: function Tree_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("drop", function Tree_drop_HostBindingHandler($event) {
          return ctx.handleDropEvent($event);
        })("dragover", function Tree_dragover_HostBindingHandler($event) {
          return ctx.handleDragOverEvent($event);
        })("dragenter", function Tree_dragenter_HostBindingHandler() {
          return ctx.handleDragEnterEvent();
        })("dragleave", function Tree_dragleave_HostBindingHandler($event) {
          return ctx.handleDragLeaveEvent($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("data-p", ctx.containerDataP);
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      value: "value",
      selectionMode: "selectionMode",
      loadingMode: "loadingMode",
      selection: [1, "selection"],
      styleClass: "styleClass",
      contextMenu: "contextMenu",
      contextMenuSelectionMode: "contextMenuSelectionMode",
      contextMenuSelection: [1, "contextMenuSelection"],
      draggableScope: "draggableScope",
      droppableScope: "droppableScope",
      draggableNodes: [2, "draggableNodes", "draggableNodes", booleanAttribute],
      droppableNodes: [2, "droppableNodes", "droppableNodes", booleanAttribute],
      metaKeySelection: [2, "metaKeySelection", "metaKeySelection", booleanAttribute],
      propagateSelectionUp: [2, "propagateSelectionUp", "propagateSelectionUp", booleanAttribute],
      propagateSelectionDown: [2, "propagateSelectionDown", "propagateSelectionDown", booleanAttribute],
      loading: [2, "loading", "loading", booleanAttribute],
      loadingIcon: "loadingIcon",
      emptyMessage: "emptyMessage",
      ariaLabel: "ariaLabel",
      togglerAriaLabel: "togglerAriaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      validateDrop: [2, "validateDrop", "validateDrop", booleanAttribute],
      filter: [2, "filter", "filter", booleanAttribute],
      filterInputAutoFocus: [2, "filterInputAutoFocus", "filterInputAutoFocus", booleanAttribute],
      filterBy: "filterBy",
      filterMode: "filterMode",
      filterOptions: "filterOptions",
      filterPlaceholder: "filterPlaceholder",
      filteredNodes: "filteredNodes",
      filterLocale: "filterLocale",
      scrollHeight: "scrollHeight",
      lazy: [2, "lazy", "lazy", booleanAttribute],
      virtualScroll: [2, "virtualScroll", "virtualScroll", booleanAttribute],
      virtualScrollItemSize: [2, "virtualScrollItemSize", "virtualScrollItemSize", numberAttribute],
      virtualScrollOptions: "virtualScrollOptions",
      indentation: [2, "indentation", "indentation", numberAttribute],
      _templateMap: "_templateMap",
      trackBy: "trackBy",
      highlightOnSelect: [2, "highlightOnSelect", "highlightOnSelect", booleanAttribute]
    },
    outputs: {
      selection: "selectionChange",
      contextMenuSelection: "contextMenuSelectionChange",
      onNodeSelect: "onNodeSelect",
      onNodeUnselect: "onNodeUnselect",
      onNodeExpand: "onNodeExpand",
      onNodeCollapse: "onNodeCollapse",
      onNodeContextMenuSelect: "onNodeContextMenuSelect",
      onNodeDoubleClick: "onNodeDoubleClick",
      onNodeDrop: "onNodeDrop",
      onLazyLoad: "onLazyLoad",
      onScroll: "onScroll",
      onScrollIndexChange: "onScrollIndexChange",
      onFilter: "onFilter"
    },
    features: [\u0275\u0275ProvidersFeature([TreeStyle, {
      provide: TREE_INSTANCE,
      useExisting: _Tree
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Tree
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    decls: 7,
    vars: 6,
    consts: [["filter", ""], ["scroller", ""], ["content", ""], ["treeNode", ""], ["loader", ""], ["wrapper", ""], ["emptyFilter", ""], [3, "class", "pBind", 4, "ngIf"], [4, "ngTemplateOutlet"], [3, "class", "pt", "unstyled"], [4, "ngIf"], [3, "pBind"], ["data-p-icon", "spinner", "spin", "", 3, "class", "pBind", 4, "ngIf"], ["data-p-icon", "spinner", "spin", "", 3, "pBind"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "class", "pt", "unstyled", 4, "ngIf"], [3, "pt", "unstyled"], ["pInputText", "", "type", "search", "autocomplete", "off", 3, "keydown.enter", "input", "pAutoFocus", "pt", "unstyled"], ["data-p-icon", "search", 3, "class", "pBind", 4, "ngIf"], ["data-p-icon", "search", 3, "pBind"], ["hostName", "tree", 3, "items", "tabindex", "styleClass", "style", "scrollHeight", "itemSize", "lazy", "options", "pt", "onScroll", "onScrollIndexChange", "onLazyLoad", 4, "ngIf"], ["hostName", "tree", 3, "onScroll", "onScrollIndexChange", "onLazyLoad", "items", "tabindex", "styleClass", "scrollHeight", "itemSize", "lazy", "options", "pt"], ["role", "tree", 3, "class", "ngClass", "style", "pBind", 4, "ngIf"], ["role", "tree", 3, "ngClass", "pBind"], [3, "level", "rowNode", "node", "parentNode", "firstChild", "lastChild", "index", "itemSize", "indentation", "loadingMode", "pt", "unstyled", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "level", "rowNode", "node", "parentNode", "firstChild", "lastChild", "index", "itemSize", "indentation", "loadingMode", "pt", "unstyled"], ["role", "tree", 3, "class", "pBind", 4, "ngIf"], ["role", "tree", 3, "pBind"], [3, "node", "firstChild", "lastChild", "index", "level", "loadingMode", "pt", "unstyled", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "node", "firstChild", "lastChild", "index", "level", "loadingMode", "pt", "unstyled"], [4, "ngIf", "ngIfElse"]],
    template: function Tree_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, Tree_div_0_Template, 3, 5, "div", 7)(1, Tree_ng_container_1_Template, 1, 0, "ng-container", 8);
        \u0275\u0275conditionalCreate(2, Tree_Conditional_2_Template, 1, 4, "ng-container")(3, Tree_Conditional_3_Template, 1, 1, "p-iconfield", 9);
        \u0275\u0275template(4, Tree_ng_container_4_Template, 3, 2, "ng-container", 10)(5, Tree_div_5_Template, 3, 6, "div", 7)(6, Tree_ng_container_6_Template, 1, 0, "ng-container", 8);
      }
      if (rf & 2) {
        let tmp_3_0;
        \u0275\u0275property("ngIf", ctx.loading && ctx.loadingMode === "mask");
        \u0275\u0275advance();
        \u0275\u0275property("ngTemplateOutlet", ctx.headerTemplate || ctx._headerTemplate);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.filterTemplate || ctx._filterTemplate ? 2 : 3);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", (tmp_3_0 = ctx.getRootNode()) == null ? null : tmp_3_0.length);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && (ctx.getRootNode() == null || ctx.getRootNode().length === 0));
        \u0275\u0275advance();
        \u0275\u0275property("ngTemplateOutlet", ctx.footerTemplate || ctx._footerTemplate);
      }
    },
    dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgTemplateOutlet, Scroller, SharedModule, SearchIcon, SpinnerIcon, InputText, FormsModule, IconField, InputIcon, UITreeNode, AutoFocusModule, AutoFocus, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Tree, [{
    type: Component,
    args: [{
      selector: "p-tree",
      standalone: true,
      imports: [CommonModule, Scroller, SharedModule, SearchIcon, SpinnerIcon, InputText, FormsModule, IconField, InputIcon, UITreeNode, AutoFocusModule, Bind],
      template: `
        <div [class]="cx('mask')" *ngIf="loading && loadingMode === 'mask'" [pBind]="ptm('mask')" animate.enter="p-overlay-mask-enter-active" animate.leave="p-overlay-mask-leave-active">
            <i *ngIf="loadingIcon" [class]="cn(cx('loadingIcon'), 'pi-spin' + loadingIcon)" [pBind]="ptm('loadingIcon')"></i>
            <ng-container *ngIf="!loadingIcon">
                <svg data-p-icon="spinner" *ngIf="!loadingIconTemplate && !_loadingIconTemplate" spin [class]="cx('loadingIcon')" [pBind]="ptm('loadingIcon')" />
                <span *ngIf="loadingIconTemplate || _loadingIconTemplate" [class]="cx('loadingIcon')" [pBind]="ptm('loadingIcon')">
                    <ng-template *ngTemplateOutlet="loadingIconTemplate || _loadingIconTemplate"></ng-template>
                </span>
            </ng-container>
        </div>
        <ng-container *ngTemplateOutlet="headerTemplate || _headerTemplate"></ng-container>
        @if (filterTemplate || _filterTemplate) {
            <ng-container *ngTemplateOutlet="filterTemplate || _filterTemplate; context: { $implicit: filterOptions }"></ng-container>
        } @else {
            <p-iconfield *ngIf="filter" [class]="cx('pcFilterContainer')" [pt]="ptm('pcFilterContainer')" [unstyled]="unstyled()">
                <input
                    #filter
                    [pAutoFocus]="filterInputAutoFocus"
                    pInputText
                    type="search"
                    autocomplete="off"
                    [class]="cx('pcFilterInput')"
                    [attr.placeholder]="filterPlaceholder"
                    (keydown.enter)="$event.preventDefault()"
                    (input)="_filter($event.target?.value)"
                    [pt]="ptm('pcFilterInput')"
                    [unstyled]="unstyled()"
                />
                <p-inputicon [pt]="ptm('pcFilterIconContainer')" [unstyled]="unstyled()">
                    <svg data-p-icon="search" *ngIf="!filterIconTemplate && !_filterIconTemplate" [class]="cx('filterIcon')" [pBind]="ptm('filterIcon')" />
                    <span *ngIf="filterIconTemplate || _filterIconTemplate" [class]="cx('filterIcon')" [pBind]="ptm('filterIcon')">
                        <ng-template *ngTemplateOutlet="filterIconTemplate || _filterIconTemplate"></ng-template>
                    </span>
                </p-inputicon>
            </p-iconfield>
        }

        <ng-container *ngIf="getRootNode()?.length">
            <p-scroller
                #scroller
                *ngIf="virtualScroll"
                [items]="serializedValue"
                [tabindex]="-1"
                [styleClass]="cx('wrapper')"
                [style]="{ height: scrollHeight !== 'flex' ? scrollHeight : undefined }"
                [scrollHeight]="scrollHeight !== 'flex' ? undefined : '100%'"
                [itemSize]="virtualScrollItemSize"
                [lazy]="lazy"
                (onScroll)="onScroll.emit($event)"
                (onScrollIndexChange)="onScrollIndexChange.emit($event)"
                (onLazyLoad)="onLazyLoad.emit($event)"
                [options]="virtualScrollOptions"
                [pt]="ptm('virtualScroller')"
                hostName="tree"
                [attr.data-p]="wrapperDataP"
            >
                <ng-template #content let-items let-scrollerOptions="options">
                    <ul
                        *ngIf="items"
                        #content
                        [class]="cx('rootChildren')"
                        [ngClass]="scrollerOptions.contentStyleClass"
                        [style]="scrollerOptions.contentStyle"
                        role="tree"
                        [attr.aria-label]="ariaLabel"
                        [attr.aria-labelledby]="ariaLabelledBy"
                        [pBind]="ptm('rootChildren')"
                    >
                        <p-treeNode
                            #treeNode
                            *ngFor="let rowNode of items; let firstChild = first; let lastChild = last; let index = index; trackBy: trackBy"
                            [level]="rowNode.level"
                            [rowNode]="rowNode"
                            [node]="rowNode.node"
                            [parentNode]="rowNode.parent"
                            [firstChild]="firstChild"
                            [lastChild]="lastChild"
                            [index]="getIndex(scrollerOptions, index)"
                            [itemSize]="scrollerOptions.itemSize"
                            [indentation]="indentation"
                            [loadingMode]="loadingMode"
                            [pt]="pt"
                            [unstyled]="unstyled()"
                        ></p-treeNode>
                    </ul>
                </ng-template>
                <ng-container *ngIf="loaderTemplate || _loaderTemplate">
                    <ng-template #loader let-scrollerOptions="options">
                        <ng-container *ngTemplateOutlet="loaderTemplate || _loaderTemplate; context: { options: scrollerOptions }"></ng-container>
                    </ng-template>
                </ng-container>
            </p-scroller>
            <ng-container *ngIf="!virtualScroll">
                <div #wrapper [class]="cx('wrapper')" [style.max-height]="scrollHeight" [pBind]="ptm('wrapper')" [attr.data-p]="wrapperDataP">
                    <ul #content [class]="cx('rootChildren')" *ngIf="getRootNode()" role="tree" [attr.aria-label]="ariaLabel" [attr.aria-labelledby]="ariaLabelledBy" [pBind]="ptm('rootChildren')">
                        <p-treeNode
                            *ngFor="let node of getRootNode(); let firstChild = first; let lastChild = last; let index = index; trackBy: trackBy.bind(this)"
                            [node]="node"
                            [firstChild]="firstChild"
                            [lastChild]="lastChild"
                            [index]="index"
                            [level]="0"
                            [loadingMode]="loadingMode"
                            [pt]="pt"
                            [unstyled]="unstyled()"
                        ></p-treeNode>
                    </ul>
                </div>
            </ng-container>
        </ng-container>

        <div [class]="cx('emptyMessage')" *ngIf="!loading && (getRootNode() == null || getRootNode().length === 0)" [pBind]="ptm('emptyMessage')">
            <ng-container *ngIf="!emptyTemplate && !_emptyTemplate; else emptyFilter">
                {{ emptyMessageLabel }}
            </ng-container>
            <ng-template #emptyFilter *ngTemplateOutlet="emptyTemplate || _emptyTemplate"></ng-template>
        </div>
        <ng-container *ngTemplateOutlet="footerTemplate || _footerTemplate"></ng-container>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [TreeStyle, {
        provide: TREE_INSTANCE,
        useExisting: Tree
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Tree
      }],
      host: {
        "[class]": "cn(cx('root'), styleClass)",
        "[attr.data-p]": "containerDataP"
      },
      hostDirectives: [Bind]
    }]
  }], () => [{
    type: TreeDragDropService,
    decorators: [{
      type: Optional
    }]
  }], {
    value: [{
      type: Input
    }],
    selectionMode: [{
      type: Input
    }],
    loadingMode: [{
      type: Input
    }],
    selection: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "selection",
        required: false
      }]
    }, {
      type: Output,
      args: ["selectionChange"]
    }],
    styleClass: [{
      type: Input
    }],
    contextMenu: [{
      type: Input
    }],
    contextMenuSelectionMode: [{
      type: Input
    }],
    contextMenuSelection: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "contextMenuSelection",
        required: false
      }]
    }, {
      type: Output,
      args: ["contextMenuSelectionChange"]
    }],
    draggableScope: [{
      type: Input
    }],
    droppableScope: [{
      type: Input
    }],
    draggableNodes: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    droppableNodes: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    metaKeySelection: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    propagateSelectionUp: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    propagateSelectionDown: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    loading: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    loadingIcon: [{
      type: Input
    }],
    emptyMessage: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    togglerAriaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    validateDrop: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    filter: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    filterInputAutoFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    filterBy: [{
      type: Input
    }],
    filterMode: [{
      type: Input
    }],
    filterOptions: [{
      type: Input
    }],
    filterPlaceholder: [{
      type: Input
    }],
    filteredNodes: [{
      type: Input
    }],
    filterLocale: [{
      type: Input
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
    indentation: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    _templateMap: [{
      type: Input
    }],
    trackBy: [{
      type: Input
    }],
    highlightOnSelect: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onNodeSelect: [{
      type: Output
    }],
    onNodeUnselect: [{
      type: Output
    }],
    onNodeExpand: [{
      type: Output
    }],
    onNodeCollapse: [{
      type: Output
    }],
    onNodeContextMenuSelect: [{
      type: Output
    }],
    onNodeDoubleClick: [{
      type: Output
    }],
    onNodeDrop: [{
      type: Output
    }],
    onLazyLoad: [{
      type: Output
    }],
    onScroll: [{
      type: Output
    }],
    onScrollIndexChange: [{
      type: Output
    }],
    onFilter: [{
      type: Output
    }],
    filterTemplate: [{
      type: ContentChild,
      args: ["filter", {
        descendants: false
      }]
    }],
    nodeTemplate: [{
      type: ContentChild,
      args: ["node", {
        descendants: false
      }]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: ["header", {
        descendants: false
      }]
    }],
    footerTemplate: [{
      type: ContentChild,
      args: ["footer", {
        descendants: false
      }]
    }],
    loaderTemplate: [{
      type: ContentChild,
      args: ["loader", {
        descendants: false
      }]
    }],
    emptyTemplate: [{
      type: ContentChild,
      args: ["empty", {
        descendants: false
      }]
    }],
    togglerIconTemplate: [{
      type: ContentChild,
      args: ["togglericon", {
        descendants: false
      }]
    }],
    checkboxIconTemplate: [{
      type: ContentChild,
      args: ["checkboxicon", {
        descendants: false
      }]
    }],
    loadingIconTemplate: [{
      type: ContentChild,
      args: ["loadingicon", {
        descendants: false
      }]
    }],
    filterIconTemplate: [{
      type: ContentChild,
      args: ["filtericon", {
        descendants: false
      }]
    }],
    filterViewChild: [{
      type: ViewChild,
      args: ["filter"]
    }],
    scroller: [{
      type: ViewChild,
      args: ["scroller"]
    }],
    wrapperViewChild: [{
      type: ViewChild,
      args: ["wrapper"]
    }],
    contentViewChild: [{
      type: ViewChild,
      args: ["content"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    handleDropEvent: [{
      type: HostListener,
      args: ["drop", ["$event"]]
    }],
    handleDragOverEvent: [{
      type: HostListener,
      args: ["dragover", ["$event"]]
    }],
    handleDragEnterEvent: [{
      type: HostListener,
      args: ["dragenter"]
    }],
    handleDragLeaveEvent: [{
      type: HostListener,
      args: ["dragleave", ["$event"]]
    }]
  });
})();
var TreeModule = class _TreeModule {
  static \u0275fac = function TreeModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TreeModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _TreeModule,
    imports: [Tree, SharedModule],
    exports: [Tree, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Tree, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeModule, [{
    type: NgModule,
    args: [{
      imports: [Tree, SharedModule],
      exports: [Tree, SharedModule]
    }]
  }], null, null);
})();

// src/app/components/ia-table/ia-table.component.ts
var _c03 = ["menu"];
var _c19 = (a0) => [a0];
var _c23 = () => ({ height: "90vh" });
function IaTableComponent_For_3_ng_template_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 9);
  }
}
function IaTableComponent_For_3_ng_template_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 10);
  }
}
function IaTableComponent_For_3_ng_template_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function IaTableComponent_For_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275listener("contextmenu", function IaTableComponent_For_3_ng_template_1_Template_div_contextmenu_0_listener($event) {
      const node_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onNodeMenuClick($event, node_r5));
    });
    \u0275\u0275elementStart(1, "div", 8);
    \u0275\u0275conditionalCreate(2, IaTableComponent_For_3_ng_template_1_Conditional_2_Template, 1, 0, "i", 9)(3, IaTableComponent_For_3_ng_template_1_Conditional_3_Template, 1, 0, "i", 10)(4, IaTableComponent_For_3_ng_template_1_Conditional_4_Template, 1, 0, "i", 11);
    \u0275\u0275elementStart(5, "a", 12);
    \u0275\u0275listener("click", function IaTableComponent_For_3_ng_template_1_Template_a_click_5_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onNodeClick($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p-button", 13);
    \u0275\u0275listener("onClick", function IaTableComponent_For_3_ng_template_1_Template_p_button_onClick_6_listener($event) {
      const node_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onNodeMenuClick($event, node_r5));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const node_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.draggable ? 2 : (node_r5.children == null ? null : node_r5.children.length) > 0 ? 3 : 4);
    \u0275\u0275advance(3);
    \u0275\u0275property("href", ctx_r2.projectCache.selectedLang() === "en" ? `https://www.canada.ca/${node_r5.data.path.en}` : `https://www.canada.ca/${node_r5.data.path.fr}`, \u0275\u0275sanitizeUrl)("innerHTML", ctx_r2.getH1Display(node_r5), \u0275\u0275sanitizeHtml);
  }
}
function IaTableComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-tree", 5);
    \u0275\u0275twoWayListener("selectionChange", function IaTableComponent_For_3_Template_p_tree_selectionChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.selectedNode, $event) || (ctx_r2.selectedNode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("contextmenu", function IaTableComponent_For_3_Template_p_tree_contextmenu_0_listener($event) {
      return $event.preventDefault();
    })("onNodeDrop", function IaTableComponent_For_3_Template_p_tree_onNodeDrop_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleNodeDrop($event));
    });
    \u0275\u0275template(1, IaTableComponent_For_3_ng_template_1_Template, 7, 3, "ng-template", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("selection", ctx_r2.selectedNode);
    \u0275\u0275property("draggableNodes", ctx_r2.draggable)("droppableNodes", true)("selectionMode", ctx_r2.selectable ? "multiple" : null)("validateDrop", true)("value", ctx_r2.projectTree());
  }
}
function IaTableComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "aida-edit-node", 14);
    \u0275\u0275listener("dialogClose", function IaTableComponent_Conditional_5_Template_aida_edit_node_dialogClose_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editNode = false);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("initialShowNotes", ctx_r2.showNotes)("isOpen", ctx_r2.editNode)("node", ctx_r2.selectedNode);
  }
}
var IaTableComponent = class _IaTableComponent {
  projectState = inject(ProjectStateService);
  styleTreeNodeService = inject(StyleTreeNodeService);
  projectCache = inject(ProjectCacheService);
  settingsService = inject(UserSettingsService);
  translate = inject(TranslateService);
  addUrlsService = inject(AddUrlsService);
  fetchService = inject(FetchService);
  projectTree = input(this.projectState.getProject().projectData, ...ngDevMode ? [{ debugName: "projectTree" }] : (
    /* istanbul ignore next */
    []
  ));
  treeKey = signal(0, ...ngDevMode ? [{ debugName: "treeKey" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedNode;
  menu = viewChild.required("menu");
  //For edit node popup
  editNode = false;
  showNotes = false;
  //Drag & drop states
  draggable = true;
  selectable = false;
  get currentLanguage() {
    return this.translate.currentLang()?.startsWith("fr") ? "fr" : "en";
  }
  // Display H1
  getH1Display(node) {
    const lang = this.projectCache.selectedLang();
    const liveH1 = node.data?.live?.[lang]?.h1 ?? "";
    const protoH1 = node.data?.prototype?.[lang]?.h1 ?? "";
    const changed = liveH1 !== protoH1;
    if (this.projectCache.selectedViewIA() === "baseline")
      return liveH1;
    else if (this.projectCache.selectedViewIA() === "final")
      return protoH1;
    else if (changed)
      return `<s class="text-color-secondary text-sm">${liveH1}</s><br>${protoH1}`;
    else
      return protoH1;
  }
  constructor() {
    effect(() => {
      this.settingsService.darkMode();
      this.projectState.getProject();
      this.treeKey.update((k) => k + 1);
    });
  }
  /** Needed to get the actual node reference from a cloned getDisplayTree */
  resolveRealNode(cloneNode) {
    if (!cloneNode)
      return null;
    return this.projectState.findNodeByPath(this.projectState.getProjectTree(), cloneNode.data.path[this.currentLanguage], this.currentLanguage);
  }
  //Context menu
  options = [];
  //options for editing nodes
  //RIGHT & LEFT CLICK ACTIONS
  onNodeClick(event) {
    if (event.button === 0) {
      event.preventDefault();
    }
  }
  onNodeMenuClick(event, clonedNode) {
    event.preventDefault();
    this.menu().hide();
    const target = event.currentTarget;
    this.selectedNode = this.resolveRealNode(clonedNode);
    if (!this.selectedNode)
      return;
    const node = this.selectedNode;
    const isContainer = this.selectedNode.data.isContainer;
    const path = this.selectedNode.data.path[this.projectCache.selectedLang()];
    if (!path)
      return;
    this.options = [
      {
        label: this.translate.instant(`common.actions`),
        items: []
      },
      {
        label: this.translate.instant(`common.openNewTab`),
        items: []
      }
    ];
    if (!isContainer) {
      this.options[0].items.push({
        label: this.translate.instant(`common.editNode`),
        icon: "pi pi-pen-to-square",
        command: () => {
          this.showNotes = false;
          this.editNode = true;
        }
      });
    }
    if ((node.data?.notes?.issue?.length ?? 0) + (node.data?.notes?.solution?.length ?? 0) > 0) {
      this.options[0].items.push({
        label: this.translate.instant(`common.viewNotes`),
        icon: "pi pi-list",
        command: () => {
          this.showNotes = true;
          this.editNode = true;
        }
      });
    }
    const siblings = this.projectState.getSiblings(this.selectedNode);
    const index = siblings.indexOf(this.selectedNode);
    const canMoveLeft = index > 0;
    const canMoveRight = index < siblings.length - 1;
    if (canMoveRight || canMoveLeft) {
      this.options[0].items.push({ separator: true });
    }
    if (canMoveLeft) {
      this.options[0].items.push({
        label: this.translate.instant(`common.moveUp`),
        icon: "pi pi-arrow-up",
        command: () => this.projectState.reorderNode(node, "left")
      });
    }
    if (canMoveRight) {
      this.options[0].items.push({
        label: this.translate.instant(`common.moveDown`),
        icon: "pi pi-arrow-down",
        command: () => this.projectState.reorderNode(node, "right")
      });
    }
    if (canMoveRight || canMoveLeft) {
      this.options[0].items.push({ separator: true });
    }
    if (!this.selectedNode.data.isCrawled && !isContainer) {
      this.options[0].items.push({
        label: this.translate.instant(`iaDiagram.menu.findChildren`),
        icon: "pi pi-search",
        disabled: this.selectedNode.data.isCrawled,
        command: () => {
          this.addUrlsService.addChildren(node, this.projectState.detectPrimaryLanguage());
        }
      });
    }
    this.options[0].items.push({
      label: this.translate.instant(`iaDiagram.menu.createChild`),
      icon: "pi pi-file-plus text-green-500",
      command: () => {
        this.selectedNode = this.projectState.createNode(node);
        this.editNode = true;
      }
    }, {
      label: this.translate.instant(`iaDiagram.menu.deleteNode`),
      icon: "pi pi-trash text-red-500",
      command: () => {
        this.projectState.deleteNode(node);
      }
    });
    const github = this.projectState.getProject().github;
    const liveUrl = this.fetchService.generateUrl(path, "live");
    const previewUrl = this.fetchService.generateUrl(path, "preview");
    const prototypeUrl = this.fetchService.generateUrl(path, "protoGH", github.owner, github.repo);
    const baselineUrl = this.fetchService.generateUrl(path, "baseGH", github.owner, github.repo);
    const updUrl = this.fetchService.generateUrl(path, "upd");
    if (!isContainer) {
      this.options[1].items.push({
        label: this.translate.instant("inventory.menu.newTab.liveUrl"),
        icon: "pi pi-external-link",
        command: () => {
          window.open(liveUrl, "_blank");
        }
      }, {
        label: this.translate.instant("inventory.menu.newTab.previewUrl"),
        icon: "pi pi-external-link",
        command: () => {
          window.open(previewUrl, "_blank");
        }
      }, {
        label: this.translate.instant("inventory.menu.newTab.prototypeUrl"),
        icon: "pi pi-external-link",
        command: () => {
          window.open(prototypeUrl, "_blank");
        }
      }, {
        label: this.translate.instant("inventory.menu.newTab.baselineUrl"),
        icon: "pi pi-external-link",
        command: () => {
          window.open(baselineUrl, "_blank");
        }
      }, {
        label: this.translate.instant("inventory.menu.newTab.UPD"),
        icon: "pi pi-external-link",
        command: () => {
          window.open(updUrl, "_blank");
        }
      });
    }
    setTimeout(() => this.menu().show({ currentTarget: target }));
  }
  // Page moves
  handleNodeDrop(event) {
    const dragNode = event.dragNode;
    const dropNode = event.dropNode;
    if (!dragNode || !dropNode)
      return;
    if ((dropNode.data.isContainer || dropNode.parent?.data?.isContainer) && dragNode.data.isContainer)
      return;
    event.accept?.();
    const targetEl = event.originalEvent?.target;
    const droppedOnNode = targetEl.tagName.toLowerCase() !== "li";
    const effectiveNewParent = droppedOnNode ? dropNode : dropNode.parent;
    if (!dragNode.data.isContainer && !dragNode.data.status.isNew) {
      this.projectState.applyMoveResult(dragNode, effectiveNewParent);
    }
    document.querySelectorAll(".p-tree-node-dragover").forEach((el) => {
      el.classList.remove("p-tree-node-dragover");
    });
    this.styleTreeNodeService.updateNodeStyles(this.projectTree(), 0);
  }
  static \u0275fac = function IaTableComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IaTableComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IaTableComponent, selectors: [["aida-ia-table"]], viewQuery: function IaTableComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.menu, _c03, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, inputs: { projectTree: [1, "projectTree"] }, features: [\u0275\u0275ProvidersFeature([TreeDragDropService])], decls: 6, vars: 12, consts: [["menu", ""], [3, "model", "popup"], ["draggableScope", "self", "droppableScope", "self", 3, "selection", "draggableNodes", "droppableNodes", "selectionMode", "validateDrop", "value"], ["styleClass", "w-10", 3, "visibleChange", "visible", "header", "maximizable", "modal"], [3, "initialShowNotes", "isOpen", "node"], ["draggableScope", "self", "droppableScope", "self", 3, "selectionChange", "contextmenu", "onNodeDrop", "selection", "draggableNodes", "droppableNodes", "selectionMode", "validateDrop", "value"], ["pTemplate", "default"], [1, "flex", "justify-content-between", "gap-2", 3, "contextmenu"], [1, "flex", "align-items-center", "gap-2"], [1, "pi", "pi-arrows-alt", "cursor-move", "text-color-secondary"], [1, "pi", "pi-folder"], [1, "pi", "pi-file"], ["target", "_blank", 1, "ia-label", "cursor-help", 3, "click", "href", "innerHTML"], ["icon", "pi pi-ellipsis-h", "text", "", 3, "onClick"], [3, "dialogClose", "initialShowNotes", "isOpen", "node"]], template: function IaTableComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "p-menu", 1, 0);
      \u0275\u0275repeaterCreate(2, IaTableComponent_For_3_Template, 2, 6, "p-tree", 2, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementStart(4, "p-dialog", 3);
      \u0275\u0275twoWayListener("visibleChange", function IaTableComponent_Template_p_dialog_visibleChange_4_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.editNode, $event) || (ctx.editNode = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275conditionalCreate(5, IaTableComponent_Conditional_5_Template, 1, 3, "aida-edit-node", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("model", ctx.options)("popup", true);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(\u0275\u0275pureFunction1(9, _c19, ctx.treeKey()));
      \u0275\u0275advance(2);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(11, _c23));
      \u0275\u0275twoWayProperty("visible", ctx.editNode);
      \u0275\u0275property("header", ctx.selectedNode == null ? null : ctx.selectedNode.data == null ? null : ctx.selectedNode.data.prototype == null ? null : ctx.selectedNode.data.prototype[ctx.currentLanguage] == null ? null : ctx.selectedNode.data.prototype[ctx.currentLanguage].h1)("maximizable", true)("modal", true);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.selectedNode ? 5 : -1);
    }
  }, dependencies: [FormsModule, ButtonModule, Button, PrimeTemplate, DialogModule, Dialog, MenuModule, Menu, TreeModule, Tree, EditNodeComponent], styles: ["\n.ia-label[_ngcontent-%COMP%] {\n  white-space: pre-line;\n  display: inline-block;\n  color: var(--text-color) !important;\n  text-decoration: none !important;\n}\n  .p-tree-node-droppoint {\n  min-height: 0.5rem !important;\n}\n/*# sourceMappingURL=ia-table.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IaTableComponent, [{
    type: Component,
    args: [{ selector: "aida-ia-table", imports: [FormsModule, ButtonModule, DialogModule, MenuModule, TreeModule, EditNodeComponent], providers: [TreeDragDropService], changeDetection: ChangeDetectionStrategy.OnPush, template: '<p-menu [model]="options" [popup]="true" #menu />\n\n@for (key of [treeKey()]; track key) {\n  <p-tree\n    [(selection)]="selectedNode"\n    [draggableNodes]="draggable"\n    [droppableNodes]="true"\n    [selectionMode]="selectable ? \'multiple\' : null"\n    [validateDrop]="true"\n    [value]="projectTree()"\n    (contextmenu)="$event.preventDefault()"\n    (onNodeDrop)="handleNodeDrop($event)"\n    draggableScope="self"\n    droppableScope="self"\n  >\n    <ng-template let-node pTemplate="default">\n      <div (contextmenu)="onNodeMenuClick($event, node)" class="flex justify-content-between gap-2">\n        <div class="flex align-items-center gap-2">\n          @if (draggable) {\n            <i class="pi pi-arrows-alt cursor-move text-color-secondary"></i>\n          } @else if (node.children?.length > 0) {\n            <i class="pi pi-folder"></i>\n          } @else {\n            <i class="pi pi-file"></i>\n          }\n          <a\n            [href]="projectCache.selectedLang() === \'en\' ? `https://www.canada.ca/${node.data.path.en}` : `https://www.canada.ca/${node.data.path.fr}`"\n            [innerHTML]="getH1Display(node)"\n            (click)="onNodeClick($event)"\n            class="ia-label cursor-help"\n            target="_blank"\n          ></a>\n        </div>\n        <p-button (onClick)="onNodeMenuClick($event, node)" icon="pi pi-ellipsis-h" text />\n      </div>\n    </ng-template>\n  </p-tree>\n}\n\n<p-dialog [(visible)]="editNode" [header]="selectedNode?.data?.prototype?.[currentLanguage]?.h1" [maximizable]="true" [modal]="true" [style]="{ height: \'90vh\' }" styleClass="w-10">\n  @if (selectedNode) {\n    <aida-edit-node [initialShowNotes]="showNotes" [isOpen]="editNode" [node]="selectedNode" (dialogClose)="editNode = false" />\n  }\n</p-dialog>\n', styles: ["/* src/app/components/ia-table/ia-table.component.css */\n.ia-label {\n  white-space: pre-line;\n  display: inline-block;\n  color: var(--text-color) !important;\n  text-decoration: none !important;\n}\n::ng-deep .p-tree-node-droppoint {\n  min-height: 0.5rem !important;\n}\n/*# sourceMappingURL=ia-table.component.css.map */\n"] }]
  }], () => [], { projectTree: [{ type: Input, args: [{ isSignal: true, alias: "projectTree", required: false }] }], menu: [{ type: ViewChild, args: ["menu", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IaTableComponent, { className: "IaTableComponent", filePath: "src/app/components/ia-table/ia-table.component.ts", lineNumber: 29 });
})();

// src/app/views/tasks/ia-diagram/ia-diagram.component.ts
var _c04 = ["menu"];
var _c110 = () => ({ height: "90vh" });
var _c24 = (a0) => ({ number: a0 });
var _forTrack0 = ($index, $item) => $item.text;
var _forTrack1 = ($index, $item) => $item.url;
function IaDiagramComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.projectName);
  }
}
function IaDiagramComponent_Conditional_8_For_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 17);
  }
  if (rf & 2) {
    const colour_r3 = ctx.$implicit;
    \u0275\u0275property("ngClass", colour_r3);
  }
}
function IaDiagramComponent_Conditional_8_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275repeaterCreate(1, IaDiagramComponent_Conditional_8_For_3_For_2_Template, 1, 1, "div", 17, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementStart(3, "span", 18);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(item_r4.context);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, item_r4.text));
  }
}
function IaDiagramComponent_Conditional_8_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "i", 19);
    \u0275\u0275elementStart(2, "span", 18);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "editNode.isOrphan"));
  }
}
function IaDiagramComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "aida-save-button");
    \u0275\u0275repeaterCreate(2, IaDiagramComponent_Conditional_8_For_3_Template, 6, 3, "div", 16, _forTrack0);
    \u0275\u0275conditionalCreate(4, IaDiagramComponent_Conditional_8_Conditional_4_Template, 5, 3, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.legendItems);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.hasIaOrphan ? 4 : -1);
  }
}
function IaDiagramComponent_Conditional_14_Conditional_0_ng_template_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "i", 30);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(2, 1, "iaDiagram.tooltip.orphan"));
  }
}
function IaDiagramComponent_Conditional_14_Conditional_0_ng_template_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 28);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const node_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind2(1, 1, "iaDiagram.tooltip.hiddenPages", \u0275\u0275pureFunction1(4, _c24, (node_r6.data.collapsedChildren == null ? null : node_r6.data.collapsedChildren.length) + (node_r6.data.hiddenChildrenUrls == null ? null : node_r6.data.hiddenChildrenUrls.length))));
  }
}
function IaDiagramComponent_Conditional_14_Conditional_0_ng_template_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 31);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function IaDiagramComponent_Conditional_14_Conditional_0_ng_template_1_Conditional_6_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const node_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.addChildren(ctx_r1.resolveRealNode(node_r6)));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("loading", ctx_r1.addUrlsService.urlState().isAdding)("pTooltip", \u0275\u0275pipeBind1(1, 2, "iaDiagram.menu.findChildren"));
  }
}
function IaDiagramComponent_Conditional_14_Conditional_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, IaDiagramComponent_Conditional_14_Conditional_0_ng_template_1_Conditional_0_Template, 3, 3, "div", 23);
    \u0275\u0275elementStart(1, "p-button", 24);
    \u0275\u0275listener("click", function IaDiagramComponent_Conditional_14_Conditional_0_ng_template_1_Template_p_button_click_1_listener($event) {
      const node_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onMenuClick($event, node_r6));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 25);
    \u0275\u0275listener("dragleave", function IaDiagramComponent_Conditional_14_Conditional_0_ng_template_1_Template_div_dragleave_2_listener() {
      const node_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onDragLeave(node_r6));
    })("dragover", function IaDiagramComponent_Conditional_14_Conditional_0_ng_template_1_Template_div_dragover_2_listener($event) {
      const node_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onDragOver($event, node_r6));
    })("dragstart", function IaDiagramComponent_Conditional_14_Conditional_0_ng_template_1_Template_div_dragstart_2_listener() {
      const node_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onDragStart(node_r6));
    })("drop", function IaDiagramComponent_Conditional_14_Conditional_0_ng_template_1_Template_div_drop_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onDrop());
    });
    \u0275\u0275elementStart(3, "p", 26)(4, "a", 27);
    \u0275\u0275listener("click", function IaDiagramComponent_Conditional_14_Conditional_0_ng_template_1_Template_a_click_4_listener($event) {
      return $event.preventDefault();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(5, IaDiagramComponent_Conditional_14_Conditional_0_ng_template_1_Conditional_5_Template, 2, 6, "i", 28);
    \u0275\u0275conditionalCreate(6, IaDiagramComponent_Conditional_14_Conditional_0_ng_template_1_Conditional_6_Template, 2, 4, "p-button", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const node_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional((ctx_r1.projectCache.selectedLang() === "en" ? node_r6.data.live.en.isOrphan : node_r6.data.live.fr.isOrphan) ? 0 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("cursor-move", ctx_r1.projectCache.selectedViewIA() === "changes");
    \u0275\u0275property("href", ctx_r1.projectCache.selectedLang() === "en" ? `https://www.canada.ca/${node_r6.data.path.en}` : `https://www.canada.ca/${node_r6.data.path.fr}`, \u0275\u0275sanitizeUrl)("innerHTML", ctx_r1.getH1Display(node_r6), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275conditional((node_r6.data.collapsedChildren == null ? null : node_r6.data.collapsedChildren.length) || (node_r6.data.hiddenChildrenUrls == null ? null : node_r6.data.hiddenChildrenUrls.length) ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!node_r6.data.isCrawled && !node_r6.data.isNavChild && !node_r6.data.status.isNew && ctx_r1.projectCache.selectedViewIA() === "changes" ? 6 : -1);
  }
}
function IaDiagramComponent_Conditional_14_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-organization-chart", 20);
    \u0275\u0275template(1, IaDiagramComponent_Conditional_14_Conditional_0_ng_template_1_Template, 7, 7, "ng-template", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", ctx_r1.projectTree());
  }
}
function IaDiagramComponent_Conditional_14_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "aida-ia-table", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("projectTree", ctx_r1.projectTree());
  }
}
function IaDiagramComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, IaDiagramComponent_Conditional_14_Conditional_0_Template, 2, 1, "p-organization-chart", 20)(1, IaDiagramComponent_Conditional_14_Conditional_1_Template, 2, 1, "div", 21);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.projectCache.selectedDisplayIA() === "tree" ? 0 : 1);
  }
}
function IaDiagramComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 33)(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p-button", 34);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("onClick", function IaDiagramComponent_Conditional_15_Template_p_button_onClick_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.iaDiagram.resetTree());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "iaDiagram.allHiddenMessage"));
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(6, 4, "iaDiagram.resetTree"));
  }
}
function IaDiagramComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "aida-add-pages-link");
    \u0275\u0275elementEnd();
  }
}
function IaDiagramComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "aida-edit-node", 35);
    \u0275\u0275listener("dialogClose", function IaDiagramComponent_Conditional_20_Template_aida_edit_node_dialogClose_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDialog());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("initialShowNotes", ctx_r1.showNotes)("isOpen", ctx_r1.editNode)("node", ctx_r1.selectedNode);
  }
}
function IaDiagramComponent_Conditional_22_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "p-checkbox", 42);
    \u0275\u0275twoWayListener("ngModelChange", function IaDiagramComponent_Conditional_22_For_5_Template_p_checkbox_ngModelChange_1_listener($event) {
      const \u0275$index_116_r12 = \u0275\u0275restoreView(_r11).$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.addUrlsService.childUrls()[\u0275$index_116_r12].selected, $event) || (ctx_r1.addUrlsService.childUrls()[\u0275$index_116_r12].selected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function IaDiagramComponent_Conditional_22_For_5_Template_p_checkbox_ngModelChange_1_listener($event) {
      const \u0275$index_116_r12 = \u0275\u0275restoreView(_r11).$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addUrlsService.toggleSelectedChildren(\u0275$index_116_r12, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 43);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r13 = ctx.$implicit;
    const \u0275$index_116_r12 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.addUrlsService.childUrls()[\u0275$index_116_r12].selected);
    \u0275\u0275property("binary", true)("inputId", "url-" + \u0275$index_116_r12);
    \u0275\u0275advance();
    \u0275\u0275property("for", "url-" + \u0275$index_116_r12);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r13.url);
  }
}
function IaDiagramComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h3", 36);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 37);
    \u0275\u0275repeaterCreate(4, IaDiagramComponent_Conditional_22_For_5_Template, 4, 5, "div", 38, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 39)(7, "p-button", 40);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275listener("onClick", function IaDiagramComponent_Conditional_22_Template_p_button_onClick_7_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelAddChildren(false));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p-button", 41);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("onClick", function IaDiagramComponent_Conditional_22_Template_p_button_onClick_9_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addSelectedChildren());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 3, "findPages.findChildren.urls"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.addUrlsService.childUrls());
    \u0275\u0275advance(3);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(8, 5, "common.cancel"));
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind2(10, 7, "addPages.addToProject", \u0275\u0275pureFunction1(10, _c24, ctx_r1.addUrlsService.selectedChildUrlsCount())));
  }
}
function IaDiagramComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "findPages.findChildren.noUrls"));
  }
}
var IaDiagramComponent = class _IaDiagramComponent {
  projectState = inject(ProjectStateService);
  projectCache = inject(ProjectCacheService);
  translate = inject(TranslateService);
  iaDiagram = inject(IaDiagramService);
  styleTreeNodeService = inject(StyleTreeNodeService);
  addUrlsService = inject(AddUrlsService);
  fetchService = inject(FetchService);
  settingsService = inject(UserSettingsService);
  primaryLang = this.projectState.detectPrimaryLanguage();
  //Signals
  projectData = this.projectState.getProject;
  projectName = this.projectState.getProject().projectName;
  constructor() {
    effect(() => {
      const applyStatusColors = this.projectCache.selectedViewIA() === "changes";
      this.styleTreeNodeService.updateNodeStyles(this.projectTree(), 0, applyStatusColors);
    });
    effect(() => {
      this.projectCache.selectedDisplayIA();
      this.projectState.expandNodes(this.projectState.getProject().projectData);
    });
  }
  projectTree = computed(() => {
    let tree = this.projectState.getProject().projectData;
    if (!tree)
      return [];
    tree = this.projectState.expandNodes(tree);
    if (this.iaDiagram.selectedTree() !== "full") {
      const custom = this.projectState.findNodeByPath(tree, this.iaDiagram.selectedTree(), this.primaryLang);
      if (custom) {
        tree = [custom];
      }
    }
    if (this.projectCache.selectedViewIA() === "baseline") {
      tree = this.projectState.getBaselineTree(tree, this.iaDiagram.selectedTree() === "full" ? "full" : "custom");
    } else if (this.projectCache.selectedViewIA() === "final") {
      tree = this.projectState.getFinalTree(tree);
    }
    if (this.iaDiagram.collapsedNodes().size > 0 || this.iaDiagram.hiddenNodes().size > 0 || this.iaDiagram.navNodes().size > 0) {
      tree = this.projectState.getDisplayTree(tree, this.iaDiagram.collapsedNodes(), this.iaDiagram.hiddenNodes(), this.iaDiagram.navNodes());
    }
    this.styleTreeNodeService.updateNodeStyles(tree);
    return tree;
  }, ...ngDevMode ? [{ debugName: "projectTree" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Needed to get the actual node reference from a cloned getDisplayTree */
  resolveRealNode(cloneNode) {
    if (!cloneNode)
      return null;
    return this.projectState.findNodeByPath(this.projectState.getProjectTree(), cloneNode.data.path[this.primaryLang], this.primaryLang);
  }
  resolveParentNode(parentPath) {
    if (!parentPath)
      return null;
    return this.projectState.findNodeByPath(this.projectState.getProjectTree(), parentPath, this.primaryLang);
  }
  // Display H1
  getH1Display(node) {
    const lang = this.projectCache.selectedLang();
    const liveH1 = node.data?.live?.[lang]?.h1 ?? "";
    const protoH1 = node.data?.prototype?.[lang]?.h1 ?? "";
    const changed = liveH1 !== protoH1;
    if (this.projectCache.selectedViewIA() === "baseline")
      return liveH1;
    else if (this.projectCache.selectedViewIA() === "final")
      return protoH1;
    else if (changed)
      return `<s class="text-color-secondary text-sm">${liveH1}</s><br>${protoH1}`;
    else
      return protoH1;
  }
  //Menu options
  menu = viewChild.required("menu");
  items = [];
  editNode = false;
  showNotes = false;
  selectedNode = void 0;
  showAddPages = false;
  closeDialog() {
    this.editNode = false;
    this.showNotes = false;
    this.selectedNode = void 0;
    this.showAddPages = false;
  }
  onMenuClick(event, displayNode) {
    const projectNode = this.resolveRealNode(displayNode);
    if (!projectNode)
      return;
    event.preventDefault();
    this.items = [
      {
        label: this.translate.instant(`common.actions`),
        items: [
          {
            label: this.translate.instant(`common.editNode`),
            icon: "pi pi-pen-to-square",
            command: () => {
              this.selectedNode = projectNode;
              this.showNotes = false;
              this.editNode = true;
            }
          }
        ]
      },
      {
        label: this.translate.instant(`common.viewOptions`),
        items: []
      }
    ];
    if ((projectNode.data?.notes?.issue?.length ?? 0) + (projectNode.data?.notes?.solution?.length ?? 0) > 0) {
      this.items[0].items.push({
        label: this.translate.instant(`common.viewNotes`),
        icon: "pi pi-list",
        command: () => {
          this.selectedNode = projectNode;
          this.showNotes = true;
          this.editNode = true;
        }
      });
    }
    const siblings = this.projectState.getSiblings(projectNode);
    const index = siblings.indexOf(projectNode);
    const canMoveLeft = index > 0 && !projectNode.data.isNavChild;
    const canMoveRight = index < siblings.length - 1 && !projectNode.data.isNavChild;
    const isMoved = projectNode.data.status.isMoved && !projectNode.data.isNavChild;
    const originalParent = this.resolveParentNode(projectNode.data.baseline[this.primaryLang].parentPath);
    if (this.projectCache.selectedViewIA() === "changes" && (canMoveRight || canMoveLeft || isMoved)) {
      this.items[0].items.push({ separator: true });
    }
    if (this.projectCache.selectedViewIA() === "changes" && canMoveLeft) {
      this.items[0].items.push({
        label: this.translate.instant(`common.moveLeft`),
        icon: "pi pi-arrow-left",
        command: () => this.projectState.reorderNode(projectNode, "left")
      });
    }
    if (this.projectCache.selectedViewIA() === "changes" && canMoveRight) {
      this.items[0].items.push({
        label: this.translate.instant(`common.moveRight`),
        icon: "pi pi-arrow-right",
        command: () => this.projectState.reorderNode(projectNode, "right")
      });
    }
    if (this.projectCache.selectedViewIA() === "changes" && isMoved) {
      this.items[0].items.push({
        label: this.translate.instant(`common.undoMove`),
        icon: "pi pi-undo",
        command: () => {
          console.log(originalParent);
          if (originalParent) {
            this.projectState.moveNode(projectNode, originalParent);
          }
        }
      });
    }
    if (this.projectCache.selectedViewIA() === "changes" && (canMoveRight || canMoveLeft || isMoved)) {
      this.items[0].items.push({ separator: true });
    }
    if (this.projectCache.selectedViewIA() === "changes" && !projectNode.data.isNavChild) {
      const isCrawledColor = projectNode.data.isCrawled ? "text-color-secondary" : "";
      this.items[0].items.push({
        label: this.translate.instant(`iaDiagram.menu.findChildren`),
        icon: "pi pi-search " + isCrawledColor,
        labelClass: isCrawledColor,
        command: () => {
          this.addChildren(projectNode);
        }
      });
      this.items[0].items.push({
        label: this.translate.instant(`iaDiagram.menu.createChild`),
        icon: "pi pi-file-plus text-green-500",
        command: () => {
          this.selectedNode = this.projectState.createNode(projectNode);
          this.showNotes = false;
          this.editNode = true;
        }
      }, {
        label: this.translate.instant(`iaDiagram.menu.deleteNode`),
        icon: "pi pi-trash text-red-500",
        command: () => {
          this.projectState.deleteNode(projectNode);
        }
      });
    }
    if (this.projectTree()[0].data.path[this.primaryLang] !== projectNode.data.path[this.primaryLang] && !displayNode.data.isNavChild) {
      this.items[1].items.push({
        label: this.translate.instant(`iaDiagram.menu.viewAsRoot`),
        icon: "pi pi-window-minimize",
        command: () => this.iaDiagram.selectedTree.set(projectNode.data.path[this.primaryLang])
      });
    }
    if (this.iaDiagram.selectedTree() !== "full") {
      this.items[1].items.push({
        label: this.translate.instant(`iaDiagram.menu.viewFullTree`),
        icon: "pi pi-window-maximize",
        command: () => this.iaDiagram.selectedTree.set("full")
      });
    }
    if (this.projectTree()[0].data.path[this.primaryLang] !== projectNode.data.path[this.primaryLang] && !displayNode.data.isNavChild || this.iaDiagram.selectedTree() !== "full") {
      this.items[1].items.push({ separator: true });
    }
    if (!displayNode.data.isNavChild) {
      const path = displayNode.data.path[this.primaryLang];
      const navChildrenVisible = this.iaDiagram.navNodes().has(path);
      this.items[1].items.push({
        label: navChildrenVisible ? this.translate.instant(`iaDiagram.menu.hideNavChildren`) : this.translate.instant(`iaDiagram.menu.showNavChildren`),
        icon: navChildrenVisible ? "pi pi-eye-slash" : "pi pi-eye",
        command: () => __async(this, null, function* () {
          if (this.iaDiagram.navNodes().has(path)) {
            this.iaDiagram.navNodes.update((map) => {
              const next = new Map(map);
              next.delete(path);
              return next;
            });
            return;
          }
          const type = this.projectState.getProject().repoType;
          const version = type === "github" && this.projectCache.hasGitHub() ? "protoGH" : type === "local" && this.projectCache.hasLocal() ? "protoUT" : "live";
          const url = this.fetchService.generateUrl(path, version, this.projectData().github.owner, this.projectData().github.repo);
          const viaProxy = version.endsWith("UT");
          let linkedPaths = yield this.fetchService.getPaths(url, viaProxy);
          if (version !== "live" && linkedPaths.length === 0) {
            const urlLive = this.fetchService.generateUrl(path, "live");
            linkedPaths = yield this.fetchService.getPaths(urlLive, false);
          }
          const projectPaths = new Set(this.projectState.getAllPages(this.primaryLang).map((p2) => p2.path));
          const directChildPaths = new Set((projectNode.children ?? []).map((child) => child.data.path[this.primaryLang]));
          const filteredPaths = linkedPaths.filter((p2) => projectPaths.has(p2) && !directChildPaths.has(p2) && p2 !== path);
          console.log(filteredPaths);
          this.iaDiagram.navNodes.update((map) => new Map(map).set(path, filteredPaths));
        })
      });
      if (displayNode.children?.length && displayNode.data.hiddenChildrenUrls?.length) {
        this.items[1].items.push({
          label: this.translate.instant(`iaDiagram.menu.showHiddenNodes`),
          icon: "pi pi-eye",
          command: () => this.iaDiagram.hiddenNodes.update((set) => {
            const next = new Set(set);
            displayNode.data.hiddenChildrenUrls.forEach((url) => next.delete(url));
            return next;
          })
        });
      }
      if (!displayNode.children?.length && (displayNode.data.collapsedChildren?.length || displayNode.data.hiddenChildrenUrls?.length)) {
        this.items[1].items.push({
          label: this.translate.instant(`iaDiagram.menu.showNextChildren`),
          icon: "pi pi-eye",
          command: () => {
            this.iaDiagram.collapsedNodes.update((set) => {
              const next = new Set(set);
              next.delete(displayNode.data.path[this.primaryLang]);
              return next;
            });
            this.iaDiagram.hiddenNodes.update((set) => {
              const next = new Set(set);
              (displayNode.data.hiddenChildrenUrls ?? []).forEach((path2) => next.delete(path2));
              return next;
            });
          }
        });
      }
      console.log("Clicked node path:", projectNode.data?.path[this.primaryLang]);
      console.log("Direct children:", (projectNode.children ?? []).map((c) => c.data?.path[this.primaryLang]));
      console.log("Hidden set:", [...this.iaDiagram.hiddenNodes()]);
      console.log("Collapsed set:", [...this.iaDiagram.collapsedNodes()]);
      console.log("Result:", this.hasDeepHiddenContent(projectNode));
      if (projectNode && this.hasDeepHiddenContent(projectNode)) {
        this.items[1].items.push({
          label: this.translate.instant("iaDiagram.menu.showAllChildren"),
          icon: "pi pi-eye",
          command: () => {
            const descendants = this.projectState.getSubtreePaths(projectNode, this.primaryLang);
            this.iaDiagram.collapsedNodes.update((set) => {
              const next = new Set(set);
              descendants.forEach((path2) => next.delete(path2));
              return next;
            });
            this.iaDiagram.hiddenNodes.update((set) => {
              const next = new Set(set);
              descendants.forEach((path2) => next.delete(path2));
              return next;
            });
          }
        });
      }
      if (displayNode.parent || displayNode.children?.length) {
        this.items[1].items.push({ separator: true });
      }
      if (displayNode.parent) {
        this.items[1].items.push({
          label: this.translate.instant(`iaDiagram.menu.hideNode`),
          icon: "pi pi-eye-slash",
          command: () => this.iaDiagram.hiddenNodes.update((set) => /* @__PURE__ */ new Set([...set, displayNode.data.path[this.primaryLang]]))
        });
      }
      if (displayNode.children?.length) {
        const visibleDepth = this.projectState.getSubtreeMaxDepth(displayNode);
        const realMaxDepth = this.projectState.getSubtreeMaxDepth(projectNode);
        for (let level = 1; level <= visibleDepth; level++) {
          this.items[1].items.push({
            label: this.translate.instant("iaDiagram.menu.hideLevelChildren", { level: level + this.projectState.getOrdinalSuffix(level) }),
            icon: "pi pi-eye-slash",
            command: () => {
              const cutNodes = [];
              for (let targetLevel = realMaxDepth; targetLevel >= level; targetLevel--) {
                cutNodes.push(...this.projectState.getNodesAtRelativeDepth(displayNode, targetLevel - 1).filter((n) => (n.children?.length ?? 0) > 0));
              }
              this.iaDiagram.collapsedNodes.update((set) => {
                const next = new Set(set);
                cutNodes.forEach((node) => {
                  if (node.data)
                    next.add(node.data.path[this.primaryLang]);
                });
                return next;
              });
            }
          });
        }
      }
    }
    if (this.items[1].items.length === 0) {
      this.items[1].items.push({
        label: this.translate.instant(`iaDiagram.menu.noActions`),
        disabled: true
      });
    }
    this.menu().toggle(event);
  }
  /** Auto-add or show popup to add child pages */
  addChildren(node) {
    return __async(this, null, function* () {
      if (!node)
        return;
      this.addUrlsService.setUrlState({
        isAdding: true
      });
      this.selectedNode = node;
      const autoAdd = this.settingsService.autoAddChildren();
      yield this.addUrlsService.addChildren(node, this.primaryLang, autoAdd);
      if (!autoAdd) {
        this.showAddPages = true;
      }
    });
  }
  /** Add selected child pages from popup */
  addSelectedChildren() {
    return __async(this, null, function* () {
      this.showAddPages = false;
      this.addUrlsService.addSelectedChildren();
      if (this.selectedNode && this.addUrlsService.childUrls().length === this.addUrlsService.selectedChildUrlsCount()) {
        this.selectedNode.data.isCrawled = true;
      }
    });
  }
  /** Cancel adding child pages from popup */
  cancelAddChildren(visible) {
    if (visible)
      return;
    this.showAddPages = false;
    if (this.selectedNode && this.addUrlsService.childUrls().length === 0) {
      this.selectedNode.data.isCrawled = true;
    }
    this.addUrlsService.setUrlState({
      isAdding: false,
      urlsToAdd: []
    });
  }
  /** Returns true if any child nodes have collapsed or hidden nodes and those child nodes also have child nodes */
  hasDeepHiddenContent(node) {
    const checkBelow = (currentNode) => {
      const path = currentNode.data?.path[this.primaryLang];
      if (path && (this.iaDiagram.collapsedNodes().has(path) || this.iaDiagram.hiddenNodes().has(path))) {
        return true;
      }
      return (currentNode.children ?? []).some((child) => checkBelow(child));
    };
    return (node.children ?? []).some((child) => checkBelow(child));
  }
  // Drag & drop
  dragNode = signal(null, ...ngDevMode ? [{ debugName: "dragNode" }] : (
    /* istanbul ignore next */
    []
  ));
  dropTarget = signal(null, ...ngDevMode ? [{ debugName: "dropTarget" }] : (
    /* istanbul ignore next */
    []
  ));
  onDragStart(node) {
    if (this.projectCache.selectedViewIA() !== "changes")
      return;
    this.dragNode.set(node);
  }
  onDragOver(event, node) {
    event.preventDefault();
    if (this.projectCache.selectedViewIA() !== "changes")
      return;
    if (node.data.path[this.primaryLang] !== this.dragNode()?.data?.path[this.primaryLang]) {
      this.dropTarget.set(node);
    }
  }
  onDragLeave(node) {
    if (this.projectCache.selectedViewIA() !== "changes")
      return;
    if (this.dropTarget()?.data?.path[this.primaryLang] === node.data.path[this.primaryLang]) {
      this.dropTarget.set(null);
    }
  }
  onDrop() {
    if (this.projectCache.selectedViewIA() !== "changes")
      return;
    const realDrag = this.resolveRealNode(this.dragNode());
    const realDrop = this.resolveRealNode(this.dropTarget());
    if (!realDrag || !realDrop || realDrag?.data.path[this.primaryLang] === realDrop?.data.path[this.primaryLang] || realDrag?.parent?.data?.path[this.primaryLang] === realDrop?.data.path[this.primaryLang]) {
      this.dragNode.set(null);
      this.dropTarget.set(null);
      return;
    }
    this.projectState.moveNode(realDrag, realDrop);
    this.dragNode.set(null);
    this.dropTarget.set(null);
  }
  get legendItems() {
    const items = [];
    const tree = this.projectTree();
    if (tree.length === 0)
      return items;
    const mainColours = this.styleTreeNodeService.bgColors;
    const allColours = this.styleTreeNodeService.contextStyles;
    const depth = this.projectState.getInScopeMaxDepth(tree[0]);
    if (depth) {
      const inScopeColours = Array.from({ length: depth }, (_, i) => mainColours[i]);
      items.push({ context: inScopeColours, text: this.translate.instant("editNode.inScope") });
    }
    const hasOutOfScope = this.projectState.findNodeWhere(tree, (node) => node.data?.status?.inScope === false) !== null;
    if (hasOutOfScope) {
      items.push({ context: [allColours["template"]], text: this.translate.instant("iaDiagram.outOfScope") });
    }
    const hasNew = this.projectState.findNodeWhere(tree, (node) => node.data?.status?.isNew === true) !== null;
    const hasMoves = this.projectState.findNodeWhere(tree, (node) => node.data?.status?.isMoved === true) !== null;
    const hasROT = this.projectState.findNodeWhere(tree, (node) => node.data?.status?.isROT === true) !== null;
    const inScopePaths = new Set(this.projectState.getAllPages(this.primaryLang, "live", "inScope").map((p2) => p2.path));
    const allRescuePaths = Array.from(this.iaDiagram.navNodes().values()).flat();
    const hasInScopeRescues = allRescuePaths.some((p2) => inScopePaths.has(p2));
    const hasOutOfScopeRescues = allRescuePaths.some((p2) => !inScopePaths.has(p2));
    const rescueColours = [...hasInScopeRescues ? [allColours["navChild"]] : [], ...hasOutOfScopeRescues ? [allColours["navChildTemp"]] : []];
    if (this.projectCache.selectedViewIA() === "changes") {
      if (hasNew) {
        items.push({ context: [allColours["new"]], text: this.translate.instant("editNode.isNew") });
      }
      if (hasMoves) {
        items.push({ context: [allColours["move"]], text: this.translate.instant("editNode.isMoved") });
      }
      if (hasROT) {
        items.push({ context: [allColours["rot"]], text: this.translate.instant("editNode.isROT") });
      }
      if (hasInScopeRescues || hasOutOfScopeRescues) {
        items.push({ context: rescueColours, text: this.translate.instant("iaDiagram.hasRescues") });
      }
    }
    return items;
  }
  get hasIaOrphan() {
    const tree = this.projectTree();
    if (tree.length === 0 || this.projectCache.selectedDisplayIA() === "list")
      return false;
    const lang = this.projectCache.selectedLang() ?? "en";
    return this.projectState.findNodeWhere(tree, (node) => node.data?.live?.[lang].isOrphan === true) !== null;
  }
  static \u0275fac = function IaDiagramComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IaDiagramComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IaDiagramComponent, selectors: [["aida-ia-diagram"]], viewQuery: function IaDiagramComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.menu, _c04, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, decls: 24, vars: 27, consts: [["menu", ""], [1, "fullscreen-overlay", "surface-card"], [1, "flex", "flex-row", "justify-content-between", "align-items-center", "pl-2", "mx-3", "border-bottom-1", "border-200"], [1, "mt-2"], [1, "mb-2", "mt-1", "noline"], [1, "flex", "flex-row", "align-items-end"], [1, "flex", "flex-wrap", "gap-3", "min-w-min", "-mb-2"], ["icon", "pi pi-times", "rounded", "", "text", "", 1, "align-items-start", "mb-1", 3, "onClick"], [1, "overflow-auto"], [1, "flex", "flex-row", "absolute", "z-1", "ml-4"], ["]", "", 3, "showDisplayIA", "showLang", "showViewIA"], [1, "flex", "justify-content-center", "mt-8"], [3, "model", "popup"], ["styleClass", "w-10", 3, "visibleChange", "visible", "header", "maximizable", "modal"], [3, "initialShowNotes", "isOpen", "node"], ["styleClass", "w-6", 3, "visibleChange", "visible", "header", "maximizable", "modal"], [1, "flex", "align-items-center", "gap-1"], [1, "legend-box", "border-2", "border-primary", "border-round", "shadow-2", 3, "ngClass"], [1, "legend-text"], [1, "pi", "pi-times", "text-red-500"], [3, "value"], [1, "mt-7"], ["pTemplate", "default"], [1, "-mt-6", "mb-6"], ["icon", "pi pi-ellipsis-h", "size", "small", "text", "", 1, "absolute", "top-0", "right-0", "-mt-1", "-mr-1", 3, "click"], [1, "h-full", 3, "dragleave", "dragover", "dragstart", "drop"], [1, "pb-2"], ["target", "_blank", 1, "no-underline", "text-primary", 3, "click", "href", "innerHTML"], ["tooltipPosition", "top", "tooltipStyleClass", "z-200", 1, "pi", "pi-eye-slash", "text-sm", "text-color-secondary", "opacity-70", "absolute", "bottom-0", "right-0", "mb-1", "mr-2", 3, "pTooltip"], ["icon", "pi pi-plus-circle", "rounded", "", "size", "small", "text", "", "tooltipPosition", "top", "tooltipStyleClass", "z-200", 1, "absolute", "left-50", "-translate-x-50", "bottom-0", "-mb-1", 3, "loading", "pTooltip"], ["tooltipPosition", "top", "tooltipStyleClass", "z-200", 1, "pi", "pi-times", "text-red-500", 3, "pTooltip"], ["icon", "pi pi-plus-circle", "rounded", "", "size", "small", "text", "", "tooltipPosition", "top", "tooltipStyleClass", "z-200", 1, "absolute", "left-50", "-translate-x-50", "bottom-0", "-mb-1", 3, "click", "loading", "pTooltip"], [3, "projectTree"], [1, "flex", "flex-column", "gap-2"], [3, "onClick", "label"], [3, "dialogClose", "initialShowNotes", "isOpen", "node"], [1, "text-xl", "my-2"], [1, "flex", "flex-column", "gap-2", "max-h-64", "overflow-y-auto", "border", "border-color-border", "p-2", "rounded"], [1, "flex", "align-items-center", "gap-2"], [1, "flex", "flex-row", "justify-content-end", "gap-2", "mt-3"], ["icon", "pi pi-plus", "outlined", "", "severity", "secondary", "styleClass", "secondary-outline", 3, "onClick", "label"], ["icon", "pi pi-plus", 3, "onClick", "label"], ["size", "large", 3, "ngModelChange", "ngModel", "binary", "inputId"], [1, "break-all", 3, "for"]], template: function IaDiagramComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div");
      \u0275\u0275conditionalCreate(3, IaDiagramComponent_Conditional_3_Template, 2, 1, "p", 3);
      \u0275\u0275elementStart(4, "h1", 4);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 5);
      \u0275\u0275conditionalCreate(8, IaDiagramComponent_Conditional_8_Template, 5, 1, "div", 6);
      \u0275\u0275elementStart(9, "p-button", 7);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275listener("onClick", function IaDiagramComponent_Template_p_button_onClick_9_listener() {
        return ctx.iaDiagram.closeDiagram();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "div", 8)(12, "div", 9);
      \u0275\u0275element(13, "aida-project-settings", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(14, IaDiagramComponent_Conditional_14_Template, 2, 1)(15, IaDiagramComponent_Conditional_15_Template, 7, 6, "div", 11)(16, IaDiagramComponent_Conditional_16_Template, 2, 0, "div", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(17, "p-menu", 12, 0);
      \u0275\u0275elementStart(19, "p-dialog", 13);
      \u0275\u0275twoWayListener("visibleChange", function IaDiagramComponent_Template_p_dialog_visibleChange_19_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.editNode, $event) || (ctx.editNode = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275conditionalCreate(20, IaDiagramComponent_Conditional_20_Template, 1, 3, "aida-edit-node", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "p-dialog", 15);
      \u0275\u0275twoWayListener("visibleChange", function IaDiagramComponent_Template_p_dialog_visibleChange_21_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.showAddPages, $event) || (ctx.showAddPages = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("visibleChange", function IaDiagramComponent_Template_p_dialog_visibleChange_21_listener($event) {
        return ctx.cancelAddChildren($event);
      });
      \u0275\u0275conditionalCreate(22, IaDiagramComponent_Conditional_22_Template, 11, 12)(23, IaDiagramComponent_Conditional_23_Template, 3, 3, "p");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_13_0;
      let tmp_18_0;
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.projectName ? 3 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 22, "iaDiagram._title"));
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.legendItems ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(10, 24, "common.close"));
      \u0275\u0275advance(4);
      \u0275\u0275property("showDisplayIA", true)("showLang", true)("showViewIA", true);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.projectTree().length > 0 ? 14 : ctx.iaDiagram.collapsedNodes().size > 0 || ctx.iaDiagram.hiddenNodes().size > 0 ? 15 : 16);
      \u0275\u0275advance(3);
      \u0275\u0275property("model", ctx.items)("popup", true);
      \u0275\u0275advance(2);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(26, _c110));
      \u0275\u0275twoWayProperty("visible", ctx.editNode);
      \u0275\u0275property("header", ctx.selectedNode == null ? null : ctx.selectedNode.data == null ? null : ctx.selectedNode.data.prototype == null ? null : (tmp_13_0 = ctx.selectedNode.data.prototype[ctx.projectCache.selectedLang()]) == null ? null : tmp_13_0.h1)("maximizable", true)("modal", true);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.selectedNode ? 20 : -1);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("visible", ctx.showAddPages);
      \u0275\u0275property("header", ctx.selectedNode == null ? null : ctx.selectedNode.data == null ? null : ctx.selectedNode.data.prototype == null ? null : (tmp_18_0 = ctx.selectedNode.data.prototype[ctx.projectCache.selectedLang()]) == null ? null : tmp_18_0.h1)("maximizable", true)("modal", true);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.addUrlsService.childUrls().length > 0 ? 22 : 23);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    FormsModule,
    NgControlStatus,
    NgModel,
    ButtonModule,
    Button,
    PrimeTemplate,
    CheckboxModule,
    Checkbox,
    DialogModule,
    Dialog,
    MenuModule,
    Menu,
    OrganizationChartModule,
    OrganizationChart,
    TooltipModule,
    Tooltip,
    AddPagesLinkComponent,
    EditNodeComponent,
    IaTableComponent,
    ProjectSettingsComponent,
    SaveButtonComponent,
    TranslatePipe
  ], styles: ["\n.fullscreen-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 200;\n  display: flex;\n  flex-direction: column;\n}\n.z-200[_ngcontent-%COMP%] {\n  z-index: 200 !important;\n}\n.legend-box[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 4px;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=ia-diagram.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IaDiagramComponent, [{
    type: Component,
    args: [{ selector: "aida-ia-diagram", imports: [
      CommonModule,
      FormsModule,
      TranslatePipe,
      ButtonModule,
      CheckboxModule,
      DialogModule,
      MenuModule,
      OrganizationChartModule,
      TooltipModule,
      AddPagesLinkComponent,
      EditNodeComponent,
      IaTableComponent,
      ProjectSettingsComponent,
      SaveButtonComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="fullscreen-overlay surface-card">
  <div class="flex flex-row justify-content-between align-items-center pl-2 mx-3 border-bottom-1 border-200">
    <div>
      @if (projectName) {
        <p class="mt-2">{{ projectName }}</p>
      }
      <h1 class="mb-2 mt-1 noline">{{ 'iaDiagram._title' | translate }}</h1>
    </div>
    <div class="flex flex-row align-items-end">
      @if (legendItems) {
        <div class="flex flex-wrap gap-3 min-w-min -mb-2">
          <aida-save-button />
          @for (item of legendItems; track item.text) {
            <div class="flex align-items-center gap-1">
              @for (colour of item.context; track $index) {
                <div [ngClass]="colour" class="legend-box border-2 border-primary border-round shadow-2"></div>
              }
              <span class="legend-text">{{ item.text | translate }}</span>
            </div>
          }
          @if (hasIaOrphan) {
            <div class="flex align-items-center gap-1">
              <i class="pi pi-times text-red-500"></i>
              <span class="legend-text">{{ 'editNode.isOrphan' | translate }}</span>
            </div>
          }
        </div>
      }
      <p-button [attr.aria-label]="'common.close' | translate" (onClick)="iaDiagram.closeDiagram()" class="align-items-start mb-1" icon="pi pi-times" rounded text />
    </div>
  </div>

  <div class="overflow-auto">
    <!--Toggle View-->
    <div class="flex flex-row absolute z-1 ml-4">
      <aida-project-settings [showDisplayIA]="true" [showLang]="true" [showViewIA]="true" ] />
    </div>
    @if (projectTree().length > 0) {
      @if (projectCache.selectedDisplayIA() === 'tree') {
        <!--IA Diagram-->
        <p-organization-chart [value]="projectTree()">
          <ng-template let-node pTemplate="default">
            <!--ORPHAN STATUS-->
            @if (projectCache.selectedLang() === 'en' ? node.data.live.en.isOrphan : node.data.live.fr.isOrphan) {
              <div class="-mt-6 mb-6">
                <i [pTooltip]="'iaDiagram.tooltip.orphan' | translate" class="pi pi-times text-red-500" tooltipPosition="top" tooltipStyleClass="z-200"></i>
              </div>
            }
            <!--PAGE-->
            <p-button (click)="onMenuClick($event, node)" class="absolute top-0 right-0 -mt-1 -mr-1" icon="pi pi-ellipsis-h" size="small" text />
            <div (dragleave)="onDragLeave(node)" (dragover)="onDragOver($event, node)" (dragstart)="onDragStart(node)" (drop)="onDrop()" class="h-full">
              <p class="pb-2">
                <a
                  [class.cursor-move]="projectCache.selectedViewIA() === 'changes'"
                  [href]="projectCache.selectedLang() === 'en' ? \`https://www.canada.ca/\${node.data.path.en}\` : \`https://www.canada.ca/\${node.data.path.fr}\`"
                  [innerHTML]="getH1Display(node)"
                  (click)="$event.preventDefault()"
                  class="no-underline text-primary"
                  target="_blank"
                >
                </a>
              </p>
              @if (node.data.collapsedChildren?.length || node.data.hiddenChildrenUrls?.length) {
                <i
                  [pTooltip]="'iaDiagram.tooltip.hiddenPages' | translate: { number: node.data.collapsedChildren?.length + node.data.hiddenChildrenUrls?.length }"
                  class="pi pi-eye-slash text-sm text-color-secondary opacity-70 absolute bottom-0 right-0 mb-1 mr-2"
                  tooltipPosition="top"
                  tooltipStyleClass="z-200"
                ></i>
              }
              @if (!node.data.isCrawled && !node.data.isNavChild && !node.data.status.isNew && projectCache.selectedViewIA() === 'changes') {
                <p-button
                  [loading]="addUrlsService.urlState().isAdding"
                  [pTooltip]="'iaDiagram.menu.findChildren' | translate"
                  (click)="addChildren(resolveRealNode(node))"
                  class="absolute left-50 -translate-x-50 bottom-0 -mb-1"
                  icon="pi pi-plus-circle"
                  rounded
                  size="small"
                  text
                  tooltipPosition="top"
                  tooltipStyleClass="z-200"
                />
              }
            </div>
          </ng-template>
        </p-organization-chart>
      } @else {
        <!--IA LIST-->
        <div class="mt-7">
          <aida-ia-table [projectTree]="projectTree()" />
        </div>
      }
    } @else if (iaDiagram.collapsedNodes().size > 0 || iaDiagram.hiddenNodes().size > 0) {
      <div class="flex justify-content-center mt-8">
        <div class="flex flex-column gap-2">
          <p>{{ 'iaDiagram.allHiddenMessage' | translate }}</p>
          <p-button [label]="'iaDiagram.resetTree' | translate" (onClick)="iaDiagram.resetTree()" />
        </div>
      </div>
    } @else {
      <div class="flex justify-content-center mt-8">
        <aida-add-pages-link />
      </div>
    }
  </div>
</div>
<!--Context Menu-->
<p-menu [model]="items" [popup]="true" #menu />

<p-dialog [(visible)]="editNode" [header]="selectedNode?.data?.prototype?.[projectCache.selectedLang()]?.h1" [maximizable]="true" [modal]="true" [style]="{ height: '90vh' }" styleClass="w-10">
  @if (selectedNode) {
    <aida-edit-node [initialShowNotes]="showNotes" [isOpen]="editNode" [node]="selectedNode" (dialogClose)="closeDialog()" />
  }
</p-dialog>

<p-dialog
  [(visible)]="showAddPages"
  [header]="selectedNode?.data?.prototype?.[projectCache.selectedLang()]?.h1"
  [maximizable]="true"
  [modal]="true"
  (visibleChange)="cancelAddChildren($event)"
  styleClass="w-6"
>
  @if (addUrlsService.childUrls().length > 0) {
    <h3 class="text-xl my-2">{{ 'findPages.findChildren.urls' | translate }}</h3>
    <div class="flex flex-column gap-2 max-h-64 overflow-y-auto border border-color-border p-2 rounded">
      @for (item of addUrlsService.childUrls(); track item.url; let i = $index) {
        <div class="flex align-items-center gap-2">
          <p-checkbox [(ngModel)]="addUrlsService.childUrls()[i].selected" [binary]="true" [inputId]="'url-' + i" (ngModelChange)="addUrlsService.toggleSelectedChildren(i, $event)" size="large" />
          <label [for]="'url-' + i" class="break-all">{{ item.url }}</label>
        </div>
      }
    </div>
    <div class="flex flex-row justify-content-end gap-2 mt-3">
      <p-button [label]="'common.cancel' | translate" (onClick)="cancelAddChildren(false)" icon="pi pi-plus" outlined severity="secondary" styleClass="secondary-outline" />
      <p-button [label]="'addPages.addToProject' | translate: { number: addUrlsService.selectedChildUrlsCount() }" (onClick)="addSelectedChildren()" icon="pi pi-plus" />
    </div>
  } @else {
    <p>{{ 'findPages.findChildren.noUrls' | translate }}</p>
  }
</p-dialog>
`, styles: ["/* src/app/views/tasks/ia-diagram/ia-diagram.component.css */\n.fullscreen-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 200;\n  display: flex;\n  flex-direction: column;\n}\n.z-200 {\n  z-index: 200 !important;\n}\n.legend-box {\n  width: 20px;\n  height: 20px;\n  border-radius: 4px;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=ia-diagram.component.css.map */\n"] }]
  }], () => [], { menu: [{ type: ViewChild, args: ["menu", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IaDiagramComponent, { className: "IaDiagramComponent", filePath: "src/app/views/tasks/ia-diagram/ia-diagram.component.ts", lineNumber: 53 });
})();
export {
  IaDiagramComponent
};
//# sourceMappingURL=chunk-TOZEEN5H.js.map
