import {
  ColumnVisibility,
  MenuPageActionsComponent,
  ProjectMetadataService,
  TableService,
  buildFilterFields,
  createRowSelection,
  groupSpans,
  persisted,
  rowsPerPageOptions,
  trackStuck
} from "./chunk-2TEGEP52.js";
import "./chunk-NNCGRMT2.js";
import "./chunk-ZDKJ4LLB.js";
import "./chunk-YJPJTEWV.js";
import {
  AddPagesComponent
} from "./chunk-B4GYQ53L.js";
import "./chunk-FDW76NB3.js";
import "./chunk-755TA7OS.js";
import "./chunk-PW5PVZSA.js";
import {
  ViewPagesComponent
} from "./chunk-OOGEICCL.js";
import "./chunk-WYQ23AZ5.js";
import "./chunk-CS3FDOZ7.js";
import "./chunk-UZHGJRMA.js";
import "./chunk-D5ZYA75M.js";
import {
  Drawer,
  DrawerModule
} from "./chunk-TCAW2N6S.js";
import {
  StyleTreeNodeService
} from "./chunk-EVKCOUR7.js";
import {
  TooltipDirective
} from "./chunk-FZRAMW5I.js";
import {
  StyleCardService
} from "./chunk-NPF65JT5.js";
import {
  SelectableRow,
  SortIcon,
  SortableColumn,
  Table,
  TableCheckbox,
  TableHeaderCheckbox,
  TableModule
} from "./chunk-QU6BEHZ6.js";
import "./chunk-P4EX4IKA.js";
import "./chunk-52JIFSNW.js";
import "./chunk-O7RCY4OG.js";
import "./chunk-DGUULVIY.js";
import "./chunk-25EJW4L3.js";
import "./chunk-JDU2U6EY.js";
import "./chunk-BIWQHC2E.js";
import "./chunk-YGWR53AZ.js";
import "./chunk-RJLSEEBC.js";
import "./chunk-E7DPTVA6.js";
import "./chunk-PDDIA37R.js";
import "./chunk-ECCRFHQ6.js";
import "./chunk-GJFJOQEH.js";
import "./chunk-5UERQTRM.js";
import "./chunk-MDCM2VZ6.js";
import {
  ProjectCacheService,
  ProjectSettingsComponent
} from "./chunk-GK5IV6NU.js";
import "./chunk-FQ7CFU3Q.js";
import "./chunk-PBCOLC5Q.js";
import "./chunk-P6IUXXGG.js";
import {
  ProjectStateService
} from "./chunk-XGTQV6DJ.js";
import {
  Checkbox,
  CheckboxModule
} from "./chunk-JYVBZVGS.js";
import "./chunk-DMOF7S63.js";
import "./chunk-5H5KFFPI.js";
import "./chunk-N4CI2CGK.js";
import "./chunk-F77WSQTV.js";
import {
  IconField,
  IconFieldModule,
  InputIcon,
  InputIconModule
} from "./chunk-IDFDYBL4.js";
import {
  InputText,
  InputTextModule
} from "./chunk-GPLISPVX.js";
import "./chunk-GGX2PN7I.js";
import {
  FetchService,
  PageTemplate
} from "./chunk-FW3J5AX7.js";
import {
  Button,
  ButtonModule,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  marker
} from "./chunk-G47QJVEM.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  NgClass,
  PrimeTemplate
} from "./chunk-NR7HH4L4.js";
import {
  ChangeDetectionStrategy,
  Component,
  Injectable,
  TranslatePipe,
  TranslateService,
  ViewChild,
  computed,
  inject,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryAdvance,
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstoreLet,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-MB4XCYRB.js";
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

// src/app/services/project-inventory.service.ts
var ProjectInventoryService = class _ProjectInventoryService {
  translate = inject(TranslateService);
  styleTreeNodeService = inject(StyleTreeNodeService);
  fetchService = inject(FetchService);
  projectMetadata = inject(ProjectMetadataService);
  flattenInventory(tree) {
    const flatNodes = [];
    const status = this.translate.instant("inventory.columnGroups.status");
    const notes = this.translate.instant("inventory.columnGroups.notes");
    const readability = this.translate.instant("inventory.columnGroups.readability");
    const links = this.translate.instant("inventory.columnGroups.links");
    const pageData = this.translate.instant("inventory.columnGroups.pageData");
    const owner = this.translate.instant("inventory.columnGroups.owner");
    const metadata = this.translate.instant("inventory.columnGroups.metadata");
    const todo = this.translate.instant("inventory.header.todo");
    const issue = this.translate.instant("inventory.header.issue");
    const solution = this.translate.instant("inventory.header.solution");
    const inScope = this.translate.instant("inventory.header.inScope");
    const isNew = this.translate.instant("inventory.header.isNew");
    const isMoved = this.translate.instant("inventory.header.isMoved");
    const isROT = this.translate.instant("inventory.header.isROT");
    const isArchived = this.translate.instant("inventory.header.isArchived");
    const noindex = this.translate.instant("inventory.header.noindex");
    const template = this.translate.instant("inventory.header.template");
    const visits = this.translate.instant("inventory.header.visits");
    const tasks = this.translate.instant("inventory.header.tasks");
    const phoneNumbers = this.translate.instant("inventory.header.phoneNumbers");
    const lastModified = this.translate.instant("inventory.header.lastModified");
    const lastPublished = this.translate.instant("inventory.header.lastPublished");
    const email = this.translate.instant("inventory.header.email");
    const wordCount = this.translate.instant("inventory.header.wordCount");
    const fleschKincaid = this.translate.instant("inventory.header.fleschKincaid");
    const gunningFog = this.translate.instant("inventory.header.gunningFog");
    const path = this.translate.instant("inventory.header.path");
    const is404 = this.translate.instant("inventory.header.is404");
    const iaOrphan = this.translate.instant("inventory.header.iaOrphan");
    const vanities = this.translate.instant("inventory.header.vanities");
    const linkCount = this.translate.instant("inventory.header.linkCount");
    const linksToPortal = this.translate.instant("inventory.header.linksToPortal");
    const linksToSignIn = this.translate.instant("inventory.header.linksToSignIn");
    const hasChatbot = this.translate.instant("inventory.header.hasChatbot");
    const h1 = this.translate.instant("inventory.header.h1");
    const doubleH1 = this.translate.instant("inventory.header.doubleH1");
    const title = this.translate.instant("inventory.header.title");
    const description = this.translate.instant("inventory.header.description");
    const keywords = this.translate.instant("inventory.header.keywords");
    const metaApproval = this.translate.instant("inventory.header.metaApproval");
    const walk = (nodes) => {
      for (const node of nodes) {
        const data = node.data;
        const allColours = this.styleTreeNodeService.contextStyles;
        if (!data)
          continue;
        const style = data.status.isNew ? allColours.new : data.status.isROT ? allColours.rot : data.status.isMoved ? allColours.move : void 0;
        const splitList = (content) => content?.split(";").map((x) => x.trim()).filter(Boolean) ?? [];
        flatNodes.push({
          label: {
            en: {
              h1: data.prototype?.en.h1 ?? "",
              doubleH1: data.prototype?.en.doubleH1 ?? "",
              path: data.path.en
            },
            fr: {
              h1: data.prototype?.fr.h1 ?? "",
              doubleH1: data.prototype?.fr.doubleH1 ?? "",
              path: data.path.fr
            }
          },
          style,
          // Notes
          todo: {
            group: notes,
            column: todo,
            type: "array",
            content: this.computeActions(data)
          },
          issue: {
            group: notes,
            column: issue,
            type: "string",
            content: data.notes?.issue ?? ""
          },
          solution: {
            group: notes,
            column: solution,
            type: "string",
            content: data.notes?.solution ?? ""
          },
          // Status
          inScope: {
            group: status,
            column: inScope,
            type: "boolean",
            content: data.status.inScope
          },
          isNew: {
            group: status,
            column: isNew,
            type: "boolean",
            content: data.status.isNew
          },
          isROT: {
            group: status,
            column: isROT,
            type: "boolean",
            content: data.status.isROT
          },
          isMoved: {
            group: status,
            column: isMoved,
            type: "boolean",
            content: data.status.isMoved
          },
          isArchived: {
            group: status,
            column: isArchived,
            type: "boolean",
            content: !!(data.prototype?.en.isArchived && data.prototype?.fr.isArchived)
          },
          noindex: {
            group: status,
            column: noindex,
            type: "boolean",
            content: !!(data.prototype?.en.noindex && data.prototype?.fr.noindex)
          },
          // Page data
          templateEn: {
            group: pageData,
            column: template,
            type: "string",
            content: this.translate.instant(data.prototype?.en.template ?? data.live?.en.template ?? PageTemplate.Content)
          },
          templateFr: {
            group: pageData,
            column: template,
            type: "string",
            content: this.translate.instant(data.prototype?.fr.template ?? data.live?.fr.template ?? PageTemplate.Content)
          },
          visitsEn: {
            group: pageData,
            column: visits,
            type: "number",
            content: data.visits?.en ?? -1
          },
          visitsFr: {
            group: pageData,
            column: visits,
            type: "number",
            content: data.visits?.fr ?? -1
          },
          tasksEn: {
            group: pageData,
            column: tasks,
            type: "array",
            content: data.task?.en ?? []
          },
          tasksFr: {
            group: pageData,
            column: tasks,
            type: "array",
            content: data.task?.fr ?? []
          },
          phoneNumbersEn: {
            group: pageData,
            column: phoneNumbers,
            type: "array",
            content: data.prototype?.en.phoneNumbers ?? data.live?.en.phoneNumbers ?? []
          },
          phoneNumbersFr: {
            group: pageData,
            column: phoneNumbers,
            type: "array",
            content: data.prototype?.fr.phoneNumbers ?? data.live?.fr.phoneNumbers ?? []
          },
          lastModifiedEn: {
            group: pageData,
            column: lastModified,
            type: "date",
            content: data.live?.en.lastModified ? new Date(data.live?.en.lastModified) : void 0
          },
          lastModifiedFr: {
            group: pageData,
            column: lastModified,
            type: "date",
            content: data.live?.fr.lastModified ? new Date(data.live?.fr.lastModified) : void 0
          },
          lastPublishedEn: {
            group: pageData,
            column: lastPublished,
            type: "date",
            content: data.live?.en.lastPublished ? new Date(data.live?.en.lastPublished) : void 0
          },
          lastPublishedFr: {
            group: pageData,
            column: lastPublished,
            type: "date",
            content: data.live?.fr.lastPublished ? new Date(data.live?.fr.lastPublished) : void 0
          },
          // Owner
          ownerEn: {
            group: owner,
            column: owner,
            type: "array",
            content: splitList(data.live?.en.owner)
          },
          ownerFr: {
            group: owner,
            column: owner,
            type: "array",
            content: splitList(data.live?.fr.owner)
          },
          emailEn: {
            group: owner,
            column: email,
            type: "array",
            content: splitList(data.live?.en.email)
          },
          emailFr: {
            group: owner,
            column: email,
            type: "array",
            content: splitList(data.live?.fr.email)
          },
          // Readability
          wordCountEn: {
            group: readability,
            column: wordCount,
            type: "number",
            content: data.prototype?.en.wordCount ?? data.live?.en.wordCount ?? -1
          },
          wordCountFr: {
            group: readability,
            column: wordCount,
            type: "number",
            content: data.prototype?.fr.wordCount ?? data.live?.fr.wordCount ?? -1
          },
          fleschKincaidEn: {
            group: readability,
            column: fleschKincaid,
            type: "number",
            content: data.prototype?.en.fleschKincaid ?? data.live?.en.fleschKincaid ?? -1
          },
          fleschKincaidFr: {
            group: readability,
            column: fleschKincaid,
            type: "number",
            content: data.prototype?.fr.fleschKincaid ?? data.live?.fr.fleschKincaid ?? -1
          },
          gunningFogEn: {
            group: readability,
            column: gunningFog,
            type: "number",
            content: data.prototype?.en.gunningFog ?? data.live?.en.gunningFog ?? -1
          },
          gunningFogFr: {
            group: readability,
            column: gunningFog,
            type: "number",
            content: data.prototype?.fr.gunningFog ?? data.live?.fr.gunningFog ?? -1
          },
          //Links
          pathEn: {
            group: links,
            column: path,
            type: "string",
            content: data.path.en ?? ""
          },
          pathFr: {
            group: links,
            column: path,
            type: "string",
            content: data.path.fr ?? ""
          },
          is404En: {
            group: links,
            column: is404,
            type: "boolean",
            content: data.live?.en.is404 ?? false
          },
          is404Fr: {
            group: links,
            column: is404,
            type: "boolean",
            content: data.live?.fr.is404 ?? false
          },
          iaOrphanEn: {
            group: links,
            column: iaOrphan,
            type: "boolean",
            content: data.prototype?.en.isOrphan ?? data.live?.en.isOrphan ?? false
          },
          iaOrphanFr: {
            group: links,
            column: iaOrphan,
            type: "boolean",
            content: data.prototype?.fr.isOrphan ?? data.live?.fr.isOrphan ?? false
          },
          vanitiesEn: {
            group: links,
            column: vanities,
            type: "array",
            content: data.vanity?.en ?? []
          },
          vanitiesFr: {
            group: links,
            column: vanities,
            type: "array",
            content: data.vanity?.fr ?? []
          },
          linkCountEn: {
            group: links,
            column: linkCount,
            type: "number",
            content: data.prototype?.en.linkCount ?? data.live?.en.linkCount ?? -1
          },
          linkCountFr: {
            group: links,
            column: linkCount,
            type: "number",
            content: data.prototype?.fr.linkCount ?? data.live?.fr.linkCount ?? -1
          },
          linksToPortalEn: {
            group: links,
            column: linksToPortal,
            type: "boolean",
            content: data.prototype?.en.linksToPortal ?? data.live?.en.linksToPortal ?? false
          },
          linksToPortalFr: {
            group: links,
            column: linksToPortal,
            type: "boolean",
            content: data.prototype?.fr.linksToPortal ?? data.live?.fr.linksToPortal ?? false
          },
          linksToSignInEn: {
            group: links,
            column: linksToSignIn,
            type: "boolean",
            content: data.prototype?.en.linksToSignIn ?? data.live?.en.linksToSignIn ?? false
          },
          linksToSignInFr: {
            group: links,
            column: linksToSignIn,
            type: "boolean",
            content: data.prototype?.fr.linksToSignIn ?? data.live?.fr.linksToSignIn ?? false
          },
          hasChatbotEn: {
            group: links,
            column: hasChatbot,
            type: "boolean",
            content: data.prototype?.en.hasChatbot ?? data.live?.en.hasChatbot ?? false
          },
          hasChatbotFr: {
            group: links,
            column: hasChatbot,
            type: "boolean",
            content: data.prototype?.fr.hasChatbot ?? data.live?.fr.hasChatbot ?? false
          },
          // Metadata
          h1En: {
            group: metadata,
            column: h1,
            type: "string",
            content: data.prototype?.en.h1 ?? data.live?.en.h1 ?? ""
          },
          h1Fr: {
            group: metadata,
            column: h1,
            type: "string",
            content: data.prototype?.fr.h1 ?? data.live?.fr.h1 ?? ""
          },
          doubleH1En: {
            group: metadata,
            column: doubleH1,
            type: "string",
            content: data.prototype?.en.doubleH1 ?? data.live?.en.doubleH1 ?? ""
          },
          doubleH1Fr: {
            group: metadata,
            column: doubleH1,
            type: "string",
            content: data.prototype?.fr.doubleH1 ?? data.live?.fr.doubleH1 ?? ""
          },
          titleEn: {
            group: metadata,
            column: title,
            type: "string",
            content: data.prototype?.en.title ?? data.live?.en.title ?? ""
          },
          titleFr: {
            group: metadata,
            column: title,
            type: "string",
            content: data.prototype?.fr.title ?? data.live?.fr.title ?? ""
          },
          descriptionEn: {
            group: metadata,
            column: description,
            type: "string",
            content: data.prototype?.en.description ?? data.live?.en.description ?? ""
          },
          descriptionFr: {
            group: metadata,
            column: description,
            type: "string",
            content: data.prototype?.fr.description ?? data.live?.fr.description ?? ""
          },
          keywordsEn: {
            group: metadata,
            column: keywords,
            type: "string",
            content: data.prototype?.en.keywords ?? data.live?.en.keywords ?? ""
          },
          keywordsFr: {
            group: metadata,
            column: keywords,
            type: "string",
            content: data.prototype?.fr.keywords ?? data.live?.fr.keywords ?? ""
          },
          metaApproval: {
            group: metadata,
            column: metaApproval,
            type: "boolean",
            content: this.projectMetadata.approvalStatus(data)
          }
        });
        if (node.children?.length) {
          walk(node.children);
        }
      }
    };
    walk(tree);
    return flatNodes;
  }
  /** Map status booleans to icons */
  getBooleanIcon(value, column) {
    if (!value)
      return "pi pi-minus text-gray-400";
    const trueIcons = {
      inScope: "pi pi-check text-green",
      isNew: "pi pi-plus text-blue-500",
      isMoved: "pi pi-arrow-right text-orange-500",
      isROT: "pi pi-trash text-red",
      isArchived: "pi pi-book text-orange-500",
      noindex: "pi pi-android text-orange-500",
      iaOrphan: "pi pi-times text-red",
      is404: "pi pi-times-circle text-red",
      linksToPortal: "pi pi-external-link text-blue-500",
      linksToSignIn: "pi pi-sign-in text-green",
      hasChatbot: "pi pi-comments text-blue-500"
    };
    const col = column.replace("En", "").replace("Fr", "");
    return trueIcons[col] ?? "pi pi-check text-green";
  }
  /** Map status booleans to tooltips */
  getBooleanTooltip(value, column) {
    const col = column.replace("En", "").replace("Fr", "");
    return `inventory.tooltip.boolean.${col}.${value}`;
  }
  /** Compute todo list based on planned status */
  computeActions(data) {
    const actions = [];
    const isNew = data.status.isNew;
    const isROT = data.status.isROT;
    const is404Proto = data.prototype?.en.is404;
    const is404Live = data.live?.en.is404;
    const isMoved = data.status.isMoved;
    const parentProto = data.prototype?.en.parentPath;
    const parentLive = data.live?.en.parentPath;
    if (isROT && !is404Live) {
      actions.push(marker("actions.isROT.unpublish"));
    } else if (isNew) {
      if (!is404Live) {
        actions.push(marker("actions.isNew.monitor"));
      } else if (is404Proto) {
        actions.push(marker("actions.isNew.createProto"));
      } else if (!is404Proto) {
        actions.push(marker("actions.isNew.createLive"));
      }
    } else if (isMoved && parentProto !== parentLive) {
      actions.push(marker("actions.isMoved.movePage"));
    }
    return actions;
  }
  static \u0275fac = function ProjectInventoryService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjectInventoryService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProjectInventoryService, factory: _ProjectInventoryService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectInventoryService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/views/tasks/page-inventory/page-inventory.component.ts
var _c0 = ["dt"];
var _c1 = (a0) => ({ count: a0 });
var _c2 = (a0, a1) => ({ shown: a0, total: a1 });
var _forTrack0 = ($index, $item) => $item.group;
var _forTrack1 = ($index, $item) => $item.text;
var _forTrack2 = ($index, $item) => $item.name;
var _forTrack3 = ($index, $item) => $item.key;
function PageInventoryComponent_ng_template_24_For_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 27);
  }
  if (rf & 2) {
    const colour_r2 = ctx.$implicit;
    \u0275\u0275property("ngClass", colour_r2);
  }
}
function PageInventoryComponent_ng_template_24_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275repeaterCreate(1, PageInventoryComponent_ng_template_24_For_10_For_2_Template, 1, 1, "div", 27, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementStart(3, "span", 28);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(item_r3.context);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, item_r3.text));
  }
}
function PageInventoryComponent_ng_template_24_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r4 = ctx.$implicit;
    \u0275\u0275attribute("colspan", group_r4.span);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(group_r4.name);
  }
}
function PageInventoryComponent_ng_template_24_For_15_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    const column_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" (", column_r5.key.endsWith("En") ? \u0275\u0275pipeBind1(1, 1, "common.language.english") : \u0275\u0275pipeBind1(2, 3, "common.language.french"), ") ");
  }
}
function PageInventoryComponent_ng_template_24_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 29)(1, "div", 30)(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275conditionalCreate(4, PageInventoryComponent_ng_template_24_For_15_Conditional_4_Template, 3, 5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "p-sortIcon", 31);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const column_r5 = ctx.$implicit;
    \u0275\u0275classProp("border-left-1", !column_r5.isGroupStart)("border-left-3", column_r5.isGroupStart);
    \u0275\u0275property("pSortableColumn", column_r5.key);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", column_r5.column, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(column_r5.key.endsWith("En") || column_r5.key.endsWith("Fr") ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("field", column_r5.key);
  }
}
function PageInventoryComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 19)(2, "div", 20);
    \u0275\u0275element(3, "p-tableHeaderCheckbox");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "th", 21)(5, "div", 22);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementStart(8, "div", 23);
    \u0275\u0275repeaterCreate(9, PageInventoryComponent_ng_template_24_For_10_Template, 6, 3, "div", 24, _forTrack1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275repeaterCreate(11, PageInventoryComponent_ng_template_24_For_12_Template, 2, 2, "th", 25, _forTrack2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "tr");
    \u0275\u0275repeaterCreate(14, PageInventoryComponent_ng_template_24_For_15_Template, 6, 8, "th", 26, _forTrack3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 1, "pageOptions.page"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r5.tableService.legendItems());
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r5.groups());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r5.visibleColumns());
  }
}
function PageInventoryComponent_ng_template_25_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "aida-menu-page-actions", 36);
  }
  if (rf & 2) {
    \u0275\u0275property("iconOnly", true)("selectedNodes", ctx);
  }
}
function PageInventoryComponent_ng_template_25_For_14_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275element(2, "i", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r7 = \u0275\u0275nextContext().$implicit;
    const cell_r8 = \u0275\u0275readContextLet(0);
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275property("aidaTooltip", \u0275\u0275pipeBind1(1, 3, ctx_r5.projectInventory.getBooleanTooltip(cell_r8.content, column_r7.key)));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r5.projectInventory.getBooleanIcon(cell_r8.content, column_r7.key));
  }
}
function PageInventoryComponent_ng_template_25_For_14_Case_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 47);
  }
}
function PageInventoryComponent_ng_template_25_For_14_Case_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const cell_r8 = \u0275\u0275readContextLet(0);
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(2, 1, cell_r8.content, "1.0-0", ctx_r5.projectCache.numberLocale()));
  }
}
function PageInventoryComponent_ng_template_25_For_14_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275conditionalCreate(1, PageInventoryComponent_ng_template_25_For_14_Case_3_Conditional_1_Template, 1, 0, "i", 47)(2, PageInventoryComponent_ng_template_25_For_14_Case_3_Conditional_2_Template, 3, 5, "span", 48);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const cell_r8 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275conditional(cell_r8.content === -1 ? 1 : 2);
  }
}
function PageInventoryComponent_ng_template_25_For_14_Case_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const cell_r8 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, cell_r8.content, "yyyy-MM-dd"));
  }
}
function PageInventoryComponent_ng_template_25_For_14_Case_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 47);
  }
}
function PageInventoryComponent_ng_template_25_For_14_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275conditionalCreate(1, PageInventoryComponent_ng_template_25_For_14_Case_4_Conditional_1_Template, 3, 4, "span", 49)(2, PageInventoryComponent_ng_template_25_For_14_Case_4_Conditional_2_Template, 1, 0, "i", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const cell_r8 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275conditional(cell_r8.content ? 1 : 2);
  }
}
function PageInventoryComponent_ng_template_25_For_14_Case_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275element(1, "i", 47);
    \u0275\u0275elementEnd();
  }
}
function PageInventoryComponent_ng_template_25_For_14_Case_5_Conditional_1_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, item_r9));
  }
}
function PageInventoryComponent_ng_template_25_For_14_Case_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "ul", 51);
    \u0275\u0275repeaterCreate(2, PageInventoryComponent_ng_template_25_For_14_Case_5_Conditional_1_For_3_Template, 3, 3, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const cell_r8 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(cell_r8.content);
  }
}
function PageInventoryComponent_ng_template_25_For_14_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PageInventoryComponent_ng_template_25_For_14_Case_5_Conditional_0_Template, 2, 0, "div", 45)(1, PageInventoryComponent_ng_template_25_For_14_Case_5_Conditional_1_Template, 4, 0, "div", 50);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const cell_r8 = \u0275\u0275readContextLet(0);
    \u0275\u0275conditional(cell_r8.content.length === 0 ? 0 : 1);
  }
}
function PageInventoryComponent_ng_template_25_For_14_Case_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275element(1, "i", 47);
    \u0275\u0275elementEnd();
  }
}
function PageInventoryComponent_ng_template_25_For_14_Case_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const cell_r8 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cell_r8.content, " ");
  }
}
function PageInventoryComponent_ng_template_25_For_14_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PageInventoryComponent_ng_template_25_For_14_Case_6_Conditional_0_Template, 2, 0, "div", 45)(1, PageInventoryComponent_ng_template_25_For_14_Case_6_Conditional_1_Template, 2, 1, "div", 50);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const cell_r8 = \u0275\u0275readContextLet(0);
    \u0275\u0275conditional(cell_r8.content.length === 0 ? 0 : 1);
  }
}
function PageInventoryComponent_ng_template_25_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "td", 43);
    \u0275\u0275conditionalCreate(2, PageInventoryComponent_ng_template_25_For_14_Case_2_Template, 3, 5, "div", 44)(3, PageInventoryComponent_ng_template_25_For_14_Case_3_Template, 3, 1, "div", 45)(4, PageInventoryComponent_ng_template_25_For_14_Case_4_Template, 3, 1, "div", 45)(5, PageInventoryComponent_ng_template_25_For_14_Case_5_Template, 2, 1)(6, PageInventoryComponent_ng_template_25_For_14_Case_6_Template, 2, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_20_0;
    const column_r7 = ctx.$implicit;
    const row_r10 = \u0275\u0275nextContext().$implicit;
    const cell_r11 = \u0275\u0275storeLet(row_r10[column_r7.key]);
    \u0275\u0275advance();
    \u0275\u0275classProp("border-left-1", !column_r7.isGroupStart)("border-left-3", column_r7.isGroupStart);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_20_0 = cell_r11.type) === "boolean" ? 2 : tmp_20_0 === "number" ? 3 : tmp_20_0 === "date" ? 4 : tmp_20_0 === "array" ? 5 : tmp_20_0 === "string" ? 6 : -1);
  }
}
function PageInventoryComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 32)(1, "td", 33)(2, "div", 34);
    \u0275\u0275element(3, "p-tableCheckbox", 35);
    \u0275\u0275conditionalCreate(4, PageInventoryComponent_ng_template_25_Conditional_4_Template, 1, 2, "aida-menu-page-actions", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "th", 37)(6, "div", 38)(7, "span", 39);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 40);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 41);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275repeaterCreate(13, PageInventoryComponent_ng_template_25_For_14_Template, 7, 6, "td", 42, _forTrack3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_11_0;
    const row_r10 = ctx.$implicit;
    const rowIndex_r12 = ctx.rowIndex;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275classMap(row_r10.style);
    \u0275\u0275property("pSelectableRow", row_r10)("pSelectableRowIndex", rowIndex_r12);
    \u0275\u0275advance(3);
    \u0275\u0275property("value", row_r10);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_11_0 = ctx_r5.tableService.getNode(row_r10.label)) ? 4 : -1, tmp_11_0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(row_r10.label[ctx_r5.projectCache.uiLang()].doubleH1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10.label[ctx_r5.projectCache.uiLang()].h1);
    \u0275\u0275advance();
    \u0275\u0275property("aidaTooltip", row_r10.label[ctx_r5.projectCache.uiLang()].path);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate("/" + row_r10.label[ctx_r5.projectCache.uiLang()].path.split("/").pop());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r5.visibleColumns());
  }
}
function PageInventoryComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 52);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r5.visibleColumns().length + 2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "inventory.emptyMessage"), " ");
  }
}
function PageInventoryComponent_ng_template_35_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const dt_r14 = \u0275\u0275reference(23);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "common.showingRows", \u0275\u0275pureFunction2(4, _c2, dt_r14.filteredValue.length, dt_r14.value.length)), " ");
  }
}
function PageInventoryComponent_ng_template_35_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "common.showingColumns", \u0275\u0275pureFunction2(4, _c2, ctx_r5.visibleColumns().length, ctx_r5.columns().length)), " ");
  }
}
function PageInventoryComponent_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53)(1, "div", 30)(2, "div", 54)(3, "h2", 51);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, PageInventoryComponent_ng_template_35_Conditional_6_Template, 3, 7, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p-button", 55);
    \u0275\u0275listener("onClick", function PageInventoryComponent_ng_template_35_Template_p_button_onClick_7_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.showDrawer = false);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 56)(9, "aida-project-settings", 57)(10, "p-iconfield")(11, "input", 58);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function PageInventoryComponent_ng_template_35_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r5 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r5.searchTerm, $event) || (ctx_r5.searchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function PageInventoryComponent_ng_template_35_Template_input_input_11_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r5 = \u0275\u0275nextContext();
      const dt_r14 = \u0275\u0275reference(23);
      return \u0275\u0275resetView(dt_r14.filterGlobal(ctx_r5.fetchService.generatePath($event.target.value), "contains"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "p-inputicon", 59);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 54)(15, "h2", 60);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(18, PageInventoryComponent_ng_template_35_Conditional_18_Template, 3, 7, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "aida-project-settings", 61);
    \u0275\u0275elementStart(20, "p", 60);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    const dt_r14 = \u0275\u0275reference(23);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 15, "common.rowFilters"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(dt_r14.filteredValue ? 6 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("allowBoth", true)("allowLive", true)("allowPreview", true)("showScope", true);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r5.searchTerm);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(12, 17, "common.search"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 19, "common.columnFilters"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r5.visibleColumns().length !== ctx_r5.columns().length ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("allowBoth", true)("allowLive", true)("allowPreview", true)("showLang", true);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 21, "common.chooseColumns"));
  }
}
function PageInventoryComponent_For_38_For_8_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    const col_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" (", col_r18.key.endsWith("En") ? \u0275\u0275pipeBind1(1, 1, "common.language.english") : \u0275\u0275pipeBind1(2, 3, "common.language.french"), ") ");
  }
}
function PageInventoryComponent_For_38_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 66)(1, "div", 67)(2, "p-checkbox", 68);
    \u0275\u0275listener("ngModelChange", function PageInventoryComponent_For_38_For_8_Template_p_checkbox_ngModelChange_2_listener($event) {
      const col_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.visible.setColumn(col_r18.key, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "label", 64);
    \u0275\u0275text(4);
    \u0275\u0275conditionalCreate(5, PageInventoryComponent_For_38_For_8_Conditional_5_Template, 3, 5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const col_r18 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("binary", true)("inputId", col_r18.key)("ngModel", ctx_r5.visible.isVisible(col_r18.key));
    \u0275\u0275advance();
    \u0275\u0275property("for", col_r18.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r18.column, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(col_r18.key.endsWith("En") || col_r18.key.endsWith("Fr") ? 5 : -1);
  }
}
function PageInventoryComponent_For_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ul", 18)(1, "li")(2, "div", 62)(3, "p-checkbox", 63);
    \u0275\u0275listener("ngModelChange", function PageInventoryComponent_For_38_Template_p_checkbox_ngModelChange_3_listener($event) {
      const group_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.visible.setGroup(group_r16.cols, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "label", 64);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "ul", 65);
    \u0275\u0275repeaterCreate(7, PageInventoryComponent_For_38_For_8_Template, 6, 6, "li", 66, _forTrack3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const group_r16 = ctx.$implicit;
    const state_r19 = \u0275\u0275nextContext().visible.groupState(group_r16.cols);
    \u0275\u0275advance(3);
    \u0275\u0275property("binary", true)("indeterminate", state_r19 === "some")("inputId", "g-" + group_r16.group)("ngModel", state_r19 === "all");
    \u0275\u0275advance();
    \u0275\u0275property("for", "g-" + group_r16.group);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(group_r16.group);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(group_r16.cols);
  }
}
function PageInventoryComponent_ng_template_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69)(1, "p-button", 70);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("onClick", function PageInventoryComponent_ng_template_39_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.visible.restore());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-button", 71);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275listener("onClick", function PageInventoryComponent_ng_template_39_Template_p_button_onClick_3_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r5 = \u0275\u0275nextContext();
      ctx_r5.visible.save();
      return \u0275\u0275resetView(ctx_r5.showDrawer = false);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("label", \u0275\u0275pipeBind1(2, 2, "common.restoreDefault"));
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(4, 4, "common.saveDefault"));
  }
}
var PageInventoryComponent = class _PageInventoryComponent {
  projectState = inject(ProjectStateService);
  projectCache = inject(ProjectCacheService);
  projectInventory = inject(ProjectInventoryService);
  tableService = inject(TableService);
  styleCardService = inject(StyleCardService);
  fetchService = inject(FetchService);
  /* Search term for filtering table rows */
  searchTerm = signal("", ...ngDevMode ? [{ debugName: "searchTerm" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Tracks if sticky content is currently stuck to X or Y axis*/
  stuck = trackStuck();
  /** Unique instance of visibility class */
  visible = new ColumnVisibility("invHidden", [
    persisted("invLang", this.projectCache.selectedLang, ["en", "fr", "both"]),
    persisted("invScope", this.projectCache.selectedScope, ["inScope", "all"])
  ]);
  /** Count of how many filters are applied */
  filterCount = computed(() => {
    const scopeFilter = this.projectCache.selectedScope() !== "all" ? 1 : 0;
    const langFilter = this.projectCache.selectedLang() !== "both" ? 1 : 0;
    const colFilter = this.visibleColumns().length !== this.columns().length ? 1 : 0;
    const searchFilter = this.searchTerm() ? 1 : 0;
    return (scopeFilter + langFilter + colFilter + searchFilter).toString();
  }, ...ngDevMode ? [{ debugName: "filterCount" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Controls visibility of row and column filter drawer */
  showDrawer = false;
  ngOnInit() {
    this.visible.restore();
  }
  /** All table rows */
  rows = computed(() => {
    return this.projectInventory.flattenInventory(this.projectState.getProject().projectData);
  }, ...ngDevMode ? [{ debugName: "rows" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Selected table rows */
  selection = createRowSelection(this.rows);
  /** Visible table rows */
  visibleRows = computed(() => {
    let rows = this.rows();
    if (this.projectCache.selectedScope() === "inScope") {
      rows = rows.filter((row) => !(row.inScope.type === "boolean" && row.inScope.content !== true));
    }
    const col = this.sortColumn();
    if (!col)
      return rows;
    const order = this.sortOrder();
    return [...rows].sort((a, b) => order * this.compareRows(a, b, col));
  }, ...ngDevMode ? [{ debugName: "visibleRows" }] : (
    /* istanbul ignore next */
    []
  ));
  /** All table columns (keys, groups, version, & an indicator for first column in group) */
  columns = computed(() => {
    const first = this.rows()[0];
    if (!first)
      return [];
    const selectedLang = this.projectCache.selectedLang();
    const excluded = selectedLang === "en" ? ["Fr"] : selectedLang === "fr" ? ["En"] : [];
    const cols = Object.entries(first).filter(([key, cell]) => cell?.group !== void 0 && cell?.column !== void 0 && !excluded.some((lang) => key.endsWith(lang)));
    return cols.map(([key, cell], i) => ({
      key,
      group: cell.group,
      column: cell.column,
      isGroupStart: i === 0 || cols[i - 1][1].group !== cell.group
    }));
  }, ...ngDevMode ? [{ debugName: "columns" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Visible table columns */
  visibleColumns = computed(() => {
    const cols = this.columns().filter((c) => this.visible.isVisible(c.key));
    return cols.map((col, index) => __spreadProps(__spreadValues({}, col), { isGroupStart: index === 0 || cols[index - 1].group !== col.group }));
  }, ...ngDevMode ? [{ debugName: "visibleColumns" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Visible table groups (Group names & calculated span for table) */
  groups = computed(() => groupSpans(this.visibleColumns()), ...ngDevMode ? [{ debugName: "groups" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Set max rows per page to the total pages in project */
  get rowsPerPageOptions() {
    return rowsPerPageOptions(this.rows().length);
  }
  /** Filters on currently visible columns plus h1, double h1, and path */
  filterFields = computed(() => buildFilterFields(this.projectCache.uiLang(), this.visibleColumns()), ...ngDevMode ? [{ debugName: "filterFields" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Map columns to groups for drawer checkboxes */
  columnGroups = computed(() => {
    const map = /* @__PURE__ */ new Map();
    for (const col of this.columns()) {
      if (!map.has(col.group))
        map.set(col.group, []);
      map.get(col.group).push({ key: col.key, column: col.column });
    }
    return [...map].map(([group, cols]) => ({ group, cols }));
  }, ...ngDevMode ? [{ debugName: "columnGroups" }] : (
    /* istanbul ignore next */
    []
  ));
  markForTranslation() {
    marker("inventory.table.header.all");
    marker("inventory.table.header.inScope");
  }
  /** Sort */
  dt = viewChild.required("dt");
  sortColumn = signal(null, ...ngDevMode ? [{ debugName: "sortColumn" }] : (
    /* istanbul ignore next */
    []
  ));
  sortOrder = signal(1, ...ngDevMode ? [{ debugName: "sortOrder" }] : (
    /* istanbul ignore next */
    []
  ));
  // 1 = ascending, -1 = descending
  lastSortField = null;
  lastSortOrder = null;
  customSort(event) {
    if (event.field === this.lastSortField && event.order === 1 && this.lastSortOrder === -1) {
      this.sortColumn.set(null);
      this.sortOrder.set(1);
      this.lastSortField = null;
      this.lastSortOrder = null;
      this.dt().reset();
    } else {
      this.sortColumn.set(event.field ?? null);
      this.sortOrder.set(event.order ?? 1);
      this.lastSortField = event.field ?? null;
      this.lastSortOrder = event.order ?? null;
    }
  }
  compareRows(a, b, col) {
    const cellA = this.sortCell(a, col);
    const cellB = this.sortCell(b, col);
    const type = cellA.type ?? cellB.type;
    const emptyA = this.isEmpty(cellA.content);
    const emptyB = this.isEmpty(cellB.content);
    if (emptyA && emptyB)
      return 0;
    const emptyFirst = type === "date" || type === "number";
    if (emptyA)
      return emptyFirst ? -1 : 1;
    if (emptyB)
      return emptyFirst ? 1 : -1;
    const x = cellA.content;
    const y = cellB.content;
    switch (type) {
      case "date":
        return new Date(x).getTime() - new Date(y).getTime();
      case "number":
        return x - y;
      case "boolean":
        return Number(x) - Number(y);
      // false before true
      case "array":
        return this.joinArray(x).localeCompare(this.joinArray(y), this.projectCache.uiLang());
      default:
        return String(x).toLowerCase().localeCompare(String(y).toLowerCase(), this.projectCache.uiLang(), { numeric: true });
    }
  }
  /** Returns type & content for a given cell */
  sortCell(row, col) {
    const value = col.split(".").reduce((current, key) => current?.[key], row);
    return typeof value === "object" && value !== null && !Array.isArray(value) && "content" in value ? value : { content: value };
  }
  /** Detects if cell is empty */
  isEmpty(value) {
    return value == null || value === "" || Array.isArray(value) && value.length === 0;
  }
  /** Converts an array to a string so value can be sorted alphabetically */
  joinArray(value) {
    return value.map(String).join(", ").toLowerCase();
  }
  static \u0275fac = function PageInventoryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PageInventoryComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PageInventoryComponent, selectors: [["aida-page-inventory"]], viewQuery: function PageInventoryComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.dt, _c0, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, decls: 41, vars: 43, consts: [["dt", ""], ["body", ""], ["header", ""], ["footer", ""], [1, "min-w-min"], [1, "sticky-content"], ["id", "wb-cont"], [1, "sticky-content", "mb-1"], [1, "text-2xl", "my-1"], [1, "flex", "gap-2", "align-items-center"], ["badgeSeverity", "primary", "icon", "pi pi-sliders-h", "outlined", "", "size", "large", "styleClass", "secondary-outline", 3, "click", "badge", "label"], [3, "selectedNodes"], ["dataKey", "label.en.path", "selectionMode", "multiple", "stripedRows", "", 3, "selectionChange", "sortFunction", "selection", "customSort", "globalFilterFields", "paginator", "rows", "rowsPerPageOptions", "scrollable", "value"], ["pTemplate", "header"], ["pTemplate", "emptymessage"], [1, "sticky-content", "mt-2"], [1, "sticky-container", "flex", "flex-column", "gap-2"], ["position", "right", "styleClass", "min-w-max", 3, "visibleChange", "visible", "closable"], [1, "list-none", "pl-0", "mt-0"], ["rowspan", "2", 1, "sticky-table", "sticky-table-group-header", "sticky-table-checkbox"], [1, "w-3rem"], ["rowspan", "2", 1, "text-xl", "sticky-table", "sticky-table-group-header", "sticky-table-column", "px-3"], [1, "flex", "justify-content-between", "gap-4", "w-23rem"], [1, "flex", "gap-3", "min-w-min", "font-normal"], [1, "flex", "align-items-center", "gap-1"], [1, "text-lg", "border-left-3", "sticky-table", "sticky-table-group-header"], [1, "sticky-table", "sticky-table-header", 3, "border-left-1", "border-left-3", "pSortableColumn"], [1, "legend-box", "border-2", "surface-border", "border-round", "shadow-2", 3, "ngClass"], [1, "text-base"], [1, "sticky-table", "sticky-table-header", 3, "pSortableColumn"], [1, "flex", "justify-content-between", "gap-2"], [3, "field"], [3, "pSelectableRow", "pSelectableRowIndex"], [1, "sticky-table", "sticky-table-checkbox", "border-bottom-1", "border-300"], [1, "flex", "align-items-center", "w-3rem"], [3, "value"], [3, "iconOnly", "selectedNodes"], [1, "sticky-table", "sticky-table-column", "border-bottom-1", "border-300", "py-2", "px-3"], [1, "flex", "flex-column", "text-left", "w-23rem"], [1, "text-lg", "font-medium", "text-color-secondary"], [1, "text-xl"], [1, "text-sm", "font-medium", "text-color-secondary", 3, "aidaTooltip"], [1, "p-0", "min-w-min", 3, "border-left-1", "border-left-3"], [1, "p-0", "min-w-min"], [1, "flex", "justify-content-center", "my-5", "px-1", 3, "aidaTooltip"], [1, "flex", "justify-content-center", "my-5", "px-1"], [1, "text-2xl"], [1, "pi", "pi-minus", "text-gray-400", "text-2xl"], [1, "w-4rem", "text-right", "tabular-nums"], [1, "w-4rem", "text-right", "tabular-nums", "white-space-nowrap"], [1, "p-2"], [1, "m-0"], [1, "text-center", "p-4"], [1, "flex", "flex-column", "gap-2"], [1, "flex", "align-items-end", "gap-4"], ["icon", "pi pi-times", "rounded", "", "severity", "secondary", "text", "", 1, "-mr-3", 3, "onClick"], [1, "flex", "gap-2"], [3, "allowBoth", "allowLive", "allowPreview", "showScope"], ["id", "search", "pInputText", "", "type", "text", 1, "min-w-min", "md:min-w-max", "w-full", 3, "ngModelChange", "input", "ngModel", "placeholder"], [1, "pi", "pi-search"], [1, "mb-0"], [3, "allowBoth", "allowLive", "allowPreview", "showLang"], [1, "flex", "align-items-center", "gap-2", "font-bold", "text-lg"], ["size", "large", 3, "ngModelChange", "binary", "indeterminate", "inputId", "ngModel"], [3, "for"], [1, "list-none", "pl-2"], [1, "mt-1"], [1, "flex", "align-items-center", "gap-2", "pl-4"], ["size", "large", 3, "ngModelChange", "binary", "inputId", "ngModel"], [1, "flex", "justify-content-end", "gap-2"], ["icon", "pi pi-undo", "outlined", "", "styleClass", "secondary-outline", 3, "onClick", "label"], ["icon", "pi pi-save", 3, "onClick", "label"]], template: function PageInventoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "h1", 6);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div")(10, "div", 7)(11, "h2", 8);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 9)(15, "p-button", 10);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275listener("click", function PageInventoryComponent_Template_p_button_click_15_listener() {
        return ctx.showDrawer = true;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(17, "aida-menu-page-actions", 11);
      \u0275\u0275elementStart(18, "span");
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div")(22, "p-table", 12, 0);
      \u0275\u0275twoWayListener("selectionChange", function PageInventoryComponent_Template_p_table_selectionChange_22_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selection.selectedRows, $event) || (ctx.selection.selectedRows = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("sortFunction", function PageInventoryComponent_Template_p_table_sortFunction_22_listener($event) {
        return ctx.customSort($event);
      });
      \u0275\u0275template(24, PageInventoryComponent_ng_template_24_Template, 16, 3, "ng-template", 13)(25, PageInventoryComponent_ng_template_25_Template, 15, 10, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(27, PageInventoryComponent_ng_template_27_Template, 4, 4, "ng-template", 14);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(28, "div", 15)(29, "div", 16)(30, "div");
      \u0275\u0275element(31, "aida-add-pages");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div");
      \u0275\u0275element(33, "aida-view-pages");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(34, "p-drawer", 17);
      \u0275\u0275twoWayListener("visibleChange", function PageInventoryComponent_Template_p_drawer_visibleChange_34_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.showDrawer, $event) || (ctx.showDrawer = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(35, PageInventoryComponent_ng_template_35_Template, 23, 23, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275repeaterCreate(37, PageInventoryComponent_For_38_Template, 9, 6, "ul", 18, _forTrack0);
      \u0275\u0275template(39, PageInventoryComponent_ng_template_39_Template, 5, 6, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 28, "inventory._title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(7, 30, "inventory.description"), "", \u0275\u0275pipeBind1(8, 32, "inventory.description2"));
      \u0275\u0275advance(3);
      \u0275\u0275classMap(ctx.styleCardService.cardStyles());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 34, `inventory.table.header.${ctx.projectCache.selectedScope()}`));
      \u0275\u0275advance(3);
      \u0275\u0275property("badge", ctx.filterCount())("label", \u0275\u0275pipeBind1(16, 36, "common.filter"));
      \u0275\u0275advance(2);
      \u0275\u0275property("selectedNodes", ctx.selection.selectedNodes());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 38, "common.pagesSelected", \u0275\u0275pureFunction1(41, _c1, ctx.selection.selectedNodes().length)));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("stuck-x", ctx.stuck.stuckX())("stuck-y", ctx.stuck.stuckY());
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("selection", ctx.selection.selectedRows);
      \u0275\u0275property("customSort", true)("globalFilterFields", ctx.filterFields())("paginator", ctx.visibleRows().length > 25)("rows", 50)("rowsPerPageOptions", ctx.rowsPerPageOptions)("scrollable", false)("value", ctx.visibleRows());
      \u0275\u0275advance(8);
      \u0275\u0275classMap(ctx.styleCardService.cardStyles());
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.styleCardService.cardStyles());
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("visible", ctx.showDrawer);
      \u0275\u0275property("closable", false);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.columnGroups());
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    ButtonModule,
    Button,
    PrimeTemplate,
    CheckboxModule,
    Checkbox,
    DrawerModule,
    Drawer,
    IconFieldModule,
    IconField,
    InputIconModule,
    InputIcon,
    InputTextModule,
    InputText,
    TableModule,
    Table,
    SortableColumn,
    SelectableRow,
    SortIcon,
    TableCheckbox,
    TableHeaderCheckbox,
    AddPagesComponent,
    MenuPageActionsComponent,
    ProjectSettingsComponent,
    TooltipDirective,
    ViewPagesComponent,
    DecimalPipe,
    DatePipe,
    TranslatePipe
  ], styles: ['\n[_nghost-%COMP%] {\n  --group-header-height: 3rem;\n  --checkbox-width: 5rem;\n  --padding-left: 1.5rem;\n  --margin-left: -1.5rem;\n}\ntd[_ngcontent-%COMP%], \nth[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\n  .p-datatable-table-container {\n  overflow: visible !important;\n}\n[_nghost-%COMP%]     .p-datatable-thead {\n  z-index: 10;\n}\n.sticky-table[_ngcontent-%COMP%] {\n  margin-left: calc(var(--margin-left));\n  padding-left: calc(var(--padding-left));\n  position: sticky;\n}\n.sticky-table[_ngcontent-%COMP%]:not(.sticky-table-header):not(.sticky-table-group-header) {\n  background-color: inherit;\n}\n[_nghost-%COMP%]     .p-datatable-tbody > tr.p-datatable-row-selected > .sticky-table {\n  background-color: var(--p-content-background);\n  background-image: linear-gradient(var(--p-highlight-background), var(--p-highlight-background));\n}\n.sticky-table-checkbox[_ngcontent-%COMP%] {\n  left: var(--mobile-nav-width);\n  width: var(--checkbox-width);\n  z-index: 2;\n}\n.sticky-table-column[_ngcontent-%COMP%] {\n  left: calc(var(--mobile-nav-width) + var(--checkbox-width));\n  z-index: 1;\n}\n.sticky-table-group-header[_ngcontent-%COMP%] {\n  top: 0;\n  height: var(--group-header-height);\n  z-index: 2;\n}\n.sticky-table-header[_ngcontent-%COMP%] {\n  top: var(--group-header-height);\n  z-index: 1;\n}\n.sticky-table-column.sticky-table-header[_ngcontent-%COMP%], \n.sticky-table-column.sticky-table-group-header[_ngcontent-%COMP%], \n.sticky-table-checkbox.sticky-table-header[_ngcontent-%COMP%], \n.sticky-table-checkbox.sticky-table-group-header[_ngcontent-%COMP%] {\n  z-index: 3;\n}\n.icon-toggle[_ngcontent-%COMP%]   .icon-preview[_ngcontent-%COMP%] {\n  display: none;\n}\n.icon-toggle[_ngcontent-%COMP%]:not(.no-preview):hover   .icon-current[_ngcontent-%COMP%] {\n  display: none;\n}\n.icon-toggle[_ngcontent-%COMP%]:not(.no-preview):hover   .icon-preview[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.sticky-table[_ngcontent-%COMP%]::before, \n.sticky-table[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  pointer-events: none;\n  opacity: 0;\n  transition: opacity 0.15s;\n}\n.sticky-table-column[_ngcontent-%COMP%]::after {\n  top: 0;\n  bottom: 0;\n  right: 0;\n  width: 8px;\n  transform: translateX(100%);\n  background:\n    linear-gradient(\n      to right,\n      rgb(0 0 0 / 0.16),\n      transparent);\n}\n.sticky-table-header[_ngcontent-%COMP%]::before, \n.sticky-table-group-header[rowspan="2"][_ngcontent-%COMP%]::before {\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 8px;\n  transform: translateY(100%);\n  background:\n    linear-gradient(\n      to bottom,\n      rgb(0 0 0 / 0.16),\n      transparent);\n}\n.stuck-x[_ngcontent-%COMP%]   .sticky-table-column[_ngcontent-%COMP%]::after, \n.stuck-y[_ngcontent-%COMP%]   .sticky-table-header[_ngcontent-%COMP%]::before, \n.stuck-y[_ngcontent-%COMP%]   .sticky-table-group-header[rowspan="2"][_ngcontent-%COMP%]::before {\n  opacity: 1;\n}\n.legend-box[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 4px;\n  flex-shrink: 0;\n}\ntd[_ngcontent-%COMP%]:has([data-tooltip]:hover), \nth[_ngcontent-%COMP%]:has([data-tooltip]:hover) {\n  z-index: 20;\n}\n.sticky-container[_ngcontent-%COMP%] {\n  width: calc(100vw - var(--mobile-nav-width) - 3rem);\n}\n.sticky-content[_ngcontent-%COMP%] {\n  position: sticky;\n  width: fit-content;\n  left: var(--mobile-nav-width);\n  margin-left: calc(var(--margin-left));\n  padding-left: calc(var(--padding-left));\n}\n@media screen and (min-width: 768px) {\n  .sticky-table-column[_ngcontent-%COMP%] {\n    left: calc(var(--desktop-nav-width) + var(--checkbox-width));\n  }\n  .sticky-table-checkbox[_ngcontent-%COMP%], \n   .sticky-content[_ngcontent-%COMP%] {\n    left: var(--desktop-nav-width);\n  }\n  .sticky-container[_ngcontent-%COMP%] {\n    width: calc(100vw - var(--desktop-nav-width) - 10rem);\n  }\n}\n/*# sourceMappingURL=sticky-Q3DK2DNG.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PageInventoryComponent, [{
    type: Component,
    args: [{ selector: "aida-page-inventory", imports: [
      CommonModule,
      FormsModule,
      TranslatePipe,
      ButtonModule,
      CheckboxModule,
      DrawerModule,
      IconFieldModule,
      InputIconModule,
      InputTextModule,
      TableModule,
      AddPagesComponent,
      MenuPageActionsComponent,
      ProjectSettingsComponent,
      TooltipDirective,
      ViewPagesComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="min-w-min">
  <div class="sticky-content">
    <h1 id="wb-cont">{{ 'inventory._title' | translate }}</h1>
    <p>{{ 'inventory.description' | translate }}{{ 'inventory.description2' | translate }}</p>
  </div>

  <div [class]="styleCardService.cardStyles()">
    <div class="sticky-content mb-1">
      <h2 class="text-2xl my-1">{{ \`inventory.table.header.\${projectCache.selectedScope()}\` | translate }}</h2>
      <div class="flex gap-2 align-items-center">
        <p-button
          [badge]="filterCount()"
          [label]="'common.filter' | translate"
          (click)="showDrawer = true"
          badgeSeverity="primary"
          icon="pi pi-sliders-h"
          outlined
          size="large"
          styleClass="secondary-outline"
        />
        <aida-menu-page-actions [selectedNodes]="selection.selectedNodes()" />
        <span>{{ 'common.pagesSelected' | translate: { count: selection.selectedNodes().length } }}</span>
      </div>
    </div>

    <div [class.stuck-x]="stuck.stuckX()" [class.stuck-y]="stuck.stuckY()">
      <p-table
        [(selection)]="selection.selectedRows"
        [customSort]="true"
        [globalFilterFields]="filterFields()"
        [paginator]="visibleRows().length > 25"
        [rows]="50"
        [rowsPerPageOptions]="rowsPerPageOptions"
        [scrollable]="false"
        [value]="visibleRows()"
        (sortFunction)="customSort($event)"
        #dt
        dataKey="label.en.path"
        selectionMode="multiple"
        stripedRows
      >
        <ng-template pTemplate="header">
          <tr>
            <th class="sticky-table sticky-table-group-header sticky-table-checkbox" rowspan="2">
              <div class="w-3rem">
                <p-tableHeaderCheckbox />
              </div>
            </th>
            <th class="text-xl sticky-table sticky-table-group-header sticky-table-column px-3" rowspan="2">
              <div class="flex justify-content-between gap-4 w-23rem">
                {{ 'pageOptions.page' | translate }}
                <div class="flex gap-3 min-w-min font-normal">
                  @for (item of tableService.legendItems(); track item.text) {
                    <div class="flex align-items-center gap-1">
                      @for (colour of item.context; track $index) {
                        <div [ngClass]="colour" class="legend-box border-2 surface-border border-round shadow-2"></div>
                      }
                      <span class="text-base">{{ item.text | translate }}</span>
                    </div>
                  }
                </div>
              </div>
            </th>
            @for (group of groups(); track group.name) {
              <th [attr.colspan]="group.span" class="text-lg border-left-3 sticky-table sticky-table-group-header">{{ group.name }}</th>
            }
          </tr>
          <tr>
            @for (column of visibleColumns(); track column.key) {
              <th [class.border-left-1]="!column.isGroupStart" [class.border-left-3]="column.isGroupStart" [pSortableColumn]="column.key" class="sticky-table sticky-table-header">
                <div class="flex justify-content-between gap-2">
                  <div>
                    {{ column.column }}
                    @if (column.key.endsWith('En') || column.key.endsWith('Fr')) {
                      ({{ column.key.endsWith('En') ? ('common.language.english' | translate) : ('common.language.french' | translate) }})
                    }
                  </div>
                  <p-sortIcon [field]="column.key" />
                </div>
              </th>
            }
          </tr>
        </ng-template>
        <ng-template #body let-row let-rowIndex="rowIndex">
          <tr [class]="row.style" [pSelectableRow]="row" [pSelectableRowIndex]="rowIndex">
            <td class="sticky-table sticky-table-checkbox border-bottom-1 border-300">
              <div class="flex align-items-center w-3rem">
                <p-tableCheckbox [value]="row" />
                @if (tableService.getNode(row.label); as node) {
                  <aida-menu-page-actions [iconOnly]="true" [selectedNodes]="node" />
                }
              </div>
            </td>
            <th class="sticky-table sticky-table-column border-bottom-1 border-300 py-2 px-3">
              <div class="flex flex-column text-left w-23rem">
                <span class="text-lg font-medium text-color-secondary">{{ row.label[projectCache.uiLang()].doubleH1 }}</span>
                <span class="text-xl">{{ row.label[projectCache.uiLang()].h1 }}</span>
                <span [aidaTooltip]="row.label[projectCache.uiLang()].path" class="text-sm font-medium text-color-secondary">{{ '/' + row.label[projectCache.uiLang()].path.split('/').pop() }}</span>
              </div>
            </th>
            @for (column of visibleColumns(); track column.key) {
              @let cell = row[column.key];
              <td [class.border-left-1]="!column.isGroupStart" [class.border-left-3]="column.isGroupStart" class="p-0 min-w-min">
                @switch (cell.type) {
                  @case ('boolean') {
                    <div [aidaTooltip]="projectInventory.getBooleanTooltip(cell.content, column.key) | translate" class="flex justify-content-center my-5 px-1">
                      <i [class]="projectInventory.getBooleanIcon(cell.content, column.key)" class="text-2xl"></i>
                    </div>
                  }
                  @case ('number') {
                    <div class="flex justify-content-center my-5 px-1">
                      @if (cell.content === -1) {
                        <i class="pi pi-minus text-gray-400 text-2xl"></i>
                      } @else {
                        <span class="w-4rem text-right tabular-nums">{{ cell.content | number: '1.0-0' : projectCache.numberLocale() }}</span>
                      }
                    </div>
                  }
                  @case ('date') {
                    <div class="flex justify-content-center my-5 px-1">
                      @if (cell.content) {
                        <span class="w-4rem text-right tabular-nums white-space-nowrap">{{ cell.content | date: 'yyyy-MM-dd' }}</span>
                      } @else {
                        <i class="pi pi-minus text-gray-400 text-2xl"></i>
                      }
                    </div>
                  }
                  @case ('array') {
                    @if (cell.content.length === 0) {
                      <div class="flex justify-content-center my-5 px-1">
                        <i class="pi pi-minus text-gray-400 text-2xl"></i>
                      </div>
                    } @else {
                      <div class="p-2">
                        <ul class="m-0">
                          @for (item of cell.content; track item) {
                            <li>{{ item | translate }}</li>
                          }
                        </ul>
                      </div>
                    }
                  }
                  @case ('string') {
                    @if (cell.content.length === 0) {
                      <div class="flex justify-content-center my-5 px-1">
                        <i class="pi pi-minus text-gray-400 text-2xl"></i>
                      </div>
                    } @else {
                      <div class="p-2">
                        {{ cell.content }}
                      </div>
                    }
                  }
                }
              </td>
            }
          </tr>
        </ng-template>
        <ng-template pTemplate="emptymessage">
          <tr>
            <td [attr.colspan]="visibleColumns().length + 2" class="text-center p-4">
              {{ 'inventory.emptyMessage' | translate }}
            </td>
          </tr>
        </ng-template>
      </p-table>
    </div>
  </div>
  <div class="sticky-content mt-2">
    <div class="sticky-container flex flex-column gap-2">
      <div [class]="styleCardService.cardStyles()">
        <aida-add-pages />
      </div>
      <div [class]="styleCardService.cardStyles()">
        <aida-view-pages />
      </div>
    </div>
  </div>
</div>

<p-drawer [(visible)]="showDrawer" [closable]="false" position="right" styleClass="min-w-max">
  <ng-template #header>
    <div class="flex flex-column gap-2">
      <div class="flex justify-content-between gap-2">
        <div class="flex align-items-end gap-4">
          <h2 class="m-0">{{ 'common.rowFilters' | translate }}</h2>
          @if (dt.filteredValue) {
            <span>
              {{ 'common.showingRows' | translate: { shown: dt.filteredValue.length, total: dt.value.length } }}
            </span>
          }
        </div>
        <p-button (onClick)="showDrawer = false" class="-mr-3" icon="pi pi-times" rounded severity="secondary" text />
      </div>
      <div class="flex gap-2">
        <aida-project-settings [allowBoth]="true" [allowLive]="true" [allowPreview]="true" [showScope]="true">
          <p-iconfield>
            <input
              id="search"
              [(ngModel)]="searchTerm"
              [placeholder]="'common.search' | translate"
              (input)="dt.filterGlobal(fetchService.generatePath($event.target.value), 'contains')"
              class="min-w-min md:min-w-max w-full"
              pInputText
              type="text"
            />
            <p-inputicon class="pi pi-search" />
          </p-iconfield>
        </aida-project-settings>
      </div>
      <div class="flex align-items-end gap-4">
        <h2 class="mb-0">{{ 'common.columnFilters' | translate }}</h2>
        @if (visibleColumns().length !== columns().length) {
          <span>
            {{ 'common.showingColumns' | translate: { shown: visibleColumns().length, total: columns().length } }}
          </span>
        }
      </div>
      <aida-project-settings [allowBoth]="true" [allowLive]="true" [allowPreview]="true" [showLang]="true" />
      <p class="mb-0">{{ 'common.chooseColumns' | translate }}</p>
    </div>
  </ng-template>

  @for (group of columnGroups(); track group.group) {
    @let state = visible.groupState(group.cols);
    <ul class="list-none pl-0 mt-0">
      <li>
        <div class="flex align-items-center gap-2 font-bold text-lg">
          <p-checkbox
            [binary]="true"
            [indeterminate]="state === 'some'"
            [inputId]="'g-' + group.group"
            [ngModel]="state === 'all'"
            (ngModelChange)="visible.setGroup(group.cols, $event)"
            size="large"
          />
          <label [for]="'g-' + group.group">{{ group.group }}</label>
        </div>
        <ul class="list-none pl-2">
          @for (col of group.cols; track col.key) {
            <li class="mt-1">
              <div class="flex align-items-center gap-2 pl-4">
                <p-checkbox [binary]="true" [inputId]="col.key" [ngModel]="visible.isVisible(col.key)" (ngModelChange)="visible.setColumn(col.key, $event)" size="large" />
                <label [for]="col.key">
                  {{ col.column }}
                  @if (col.key.endsWith('En') || col.key.endsWith('Fr')) {
                    ({{ col.key.endsWith('En') ? ('common.language.english' | translate) : ('common.language.french' | translate) }})
                  }
                </label>
              </div>
            </li>
          }
        </ul>
      </li>
    </ul>
  }
  <ng-template #footer>
    <div class="flex justify-content-end gap-2">
      <p-button [label]="'common.restoreDefault' | translate" (onClick)="visible.restore()" icon="pi pi-undo" outlined styleClass="secondary-outline" />
      <p-button [label]="'common.saveDefault' | translate" (onClick)="visible.save(); showDrawer = false" icon="pi pi-save" />
    </div>
  </ng-template>
</p-drawer>
`, styles: ['/* src/sticky.css */\n:host {\n  --group-header-height: 3rem;\n  --checkbox-width: 5rem;\n  --padding-left: 1.5rem;\n  --margin-left: -1.5rem;\n}\ntd,\nth {\n  vertical-align: top;\n}\n::ng-deep .p-datatable-table-container {\n  overflow: visible !important;\n}\n:host ::ng-deep .p-datatable-thead {\n  z-index: 10;\n}\n.sticky-table {\n  margin-left: calc(var(--margin-left));\n  padding-left: calc(var(--padding-left));\n  position: sticky;\n}\n.sticky-table:not(.sticky-table-header):not(.sticky-table-group-header) {\n  background-color: inherit;\n}\n:host ::ng-deep .p-datatable-tbody > tr.p-datatable-row-selected > .sticky-table {\n  background-color: var(--p-content-background);\n  background-image: linear-gradient(var(--p-highlight-background), var(--p-highlight-background));\n}\n.sticky-table-checkbox {\n  left: var(--mobile-nav-width);\n  width: var(--checkbox-width);\n  z-index: 2;\n}\n.sticky-table-column {\n  left: calc(var(--mobile-nav-width) + var(--checkbox-width));\n  z-index: 1;\n}\n.sticky-table-group-header {\n  top: 0;\n  height: var(--group-header-height);\n  z-index: 2;\n}\n.sticky-table-header {\n  top: var(--group-header-height);\n  z-index: 1;\n}\n.sticky-table-column.sticky-table-header,\n.sticky-table-column.sticky-table-group-header,\n.sticky-table-checkbox.sticky-table-header,\n.sticky-table-checkbox.sticky-table-group-header {\n  z-index: 3;\n}\n.icon-toggle .icon-preview {\n  display: none;\n}\n.icon-toggle:not(.no-preview):hover .icon-current {\n  display: none;\n}\n.icon-toggle:not(.no-preview):hover .icon-preview {\n  display: inline-block;\n}\n.sticky-table::before,\n.sticky-table::after {\n  content: "";\n  position: absolute;\n  pointer-events: none;\n  opacity: 0;\n  transition: opacity 0.15s;\n}\n.sticky-table-column::after {\n  top: 0;\n  bottom: 0;\n  right: 0;\n  width: 8px;\n  transform: translateX(100%);\n  background:\n    linear-gradient(\n      to right,\n      rgb(0 0 0 / 0.16),\n      transparent);\n}\n.sticky-table-header::before,\n.sticky-table-group-header[rowspan="2"]::before {\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 8px;\n  transform: translateY(100%);\n  background:\n    linear-gradient(\n      to bottom,\n      rgb(0 0 0 / 0.16),\n      transparent);\n}\n.stuck-x .sticky-table-column::after,\n.stuck-y .sticky-table-header::before,\n.stuck-y .sticky-table-group-header[rowspan="2"]::before {\n  opacity: 1;\n}\n.legend-box {\n  width: 20px;\n  height: 20px;\n  border-radius: 4px;\n  flex-shrink: 0;\n}\ntd:has([data-tooltip]:hover),\nth:has([data-tooltip]:hover) {\n  z-index: 20;\n}\n.sticky-container {\n  width: calc(100vw - var(--mobile-nav-width) - 3rem);\n}\n.sticky-content {\n  position: sticky;\n  width: fit-content;\n  left: var(--mobile-nav-width);\n  margin-left: calc(var(--margin-left));\n  padding-left: calc(var(--padding-left));\n}\n@media screen and (min-width: 768px) {\n  .sticky-table-column {\n    left: calc(var(--desktop-nav-width) + var(--checkbox-width));\n  }\n  .sticky-table-checkbox,\n  .sticky-content {\n    left: var(--desktop-nav-width);\n  }\n  .sticky-container {\n    width: calc(100vw - var(--desktop-nav-width) - 10rem);\n  }\n}\n/*# sourceMappingURL=sticky-Q3DK2DNG.css.map */\n'] }]
  }], null, { dt: [{ type: ViewChild, args: ["dt", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PageInventoryComponent, { className: "PageInventoryComponent", filePath: "src/app/views/tasks/page-inventory/page-inventory.component.ts", lineNumber: 67 });
})();
export {
  PageInventoryComponent
};
//# sourceMappingURL=chunk-MYZPENM6.js.map
