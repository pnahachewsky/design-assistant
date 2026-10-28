import {
  CompareSelectComponent
} from "./chunk-BFXXEURG.js";
import {
  CompareService
} from "./chunk-TFIK6GFY.js";
import "./chunk-DWQ5T5PK.js";
import "./chunk-R4PTIXR6.js";
import "./chunk-LUNZQQSL.js";
import {
  StyleTreeNodeService
} from "./chunk-OIQTDMBR.js";
import {
  TooltipDirective
} from "./chunk-YEJSFSQN.js";
import {
  StyleCardService
} from "./chunk-XN4WNFGN.js";
import {
  SelectableRow,
  Table,
  TableCheckbox,
  TableHeaderCheckbox,
  TableModule
} from "./chunk-QEIVARFC.js";
import "./chunk-P3TRDY63.js";
import "./chunk-NQRO2LC7.js";
import "./chunk-5QMHUOJQ.js";
import "./chunk-OFBI5QRC.js";
import "./chunk-PL2PAX7Y.js";
import {
  EditMetadataComponent
} from "./chunk-UCMQXBVR.js";
import {
  Fieldset,
  FieldsetModule
} from "./chunk-5RNH3FHS.js";
import "./chunk-7DITWZ3V.js";
import "./chunk-Y576ZK6L.js";
import "./chunk-Q3IVAFEO.js";
import "./chunk-FQDO2XGS.js";
import "./chunk-P4REA7J6.js";
import "./chunk-JNZO32C5.js";
import {
  ProjectCacheService,
  ProjectSettingsComponent
} from "./chunk-VVTAMTDS.js";
import "./chunk-MKX7R2UM.js";
import "./chunk-D57SAGZH.js";
import {
  ProjectStateService
} from "./chunk-YI6R4JH4.js";
import "./chunk-BDLBUSTA.js";
import "./chunk-Q6OJEJVI.js";
import "./chunk-ZGIXLYRM.js";
import "./chunk-NJENQTX6.js";
import {
  FetchService
} from "./chunk-WBPH5YUM.js";
import "./chunk-BHVFX6OF.js";
import {
  IconField,
  IconFieldModule,
  InputIcon,
  InputIconModule
} from "./chunk-JR3PODJQ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  InputText,
  InputTextModule,
  NgControlStatus,
  NgModel,
  marker
} from "./chunk-QN4TTD5X.js";
import "./chunk-DMOF7S63.js";
import {
  CommonModule,
  PrimeTemplate,
  UserSettingsService
} from "./chunk-7YP54JN5.js";
import {
  ChangeDetectionStrategy,
  Component,
  Injectable,
  TranslatePipe,
  TranslateService,
  ViewChild,
  computed,
  effect,
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
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
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

// src/app/services/project-metadata.service.ts
var ProjectMetadataService = class _ProjectMetadataService {
  translate = inject(TranslateService);
  styleTreeNodeService = inject(StyleTreeNodeService);
  fetchService = inject(FetchService);
  flattenMetadata(tree) {
    const flatNodes = [];
    const titleEN = this.translate.instant("inventory.header.titleEN");
    const descriptionEN = this.translate.instant("inventory.header.descriptionEN");
    const keywordsEN = this.translate.instant("inventory.header.keywordsEN");
    const titleFR = this.translate.instant("inventory.header.titleFR");
    const descriptionFR = this.translate.instant("inventory.header.descriptionFR");
    const keywordsFR = this.translate.instant("inventory.header.keywordsFR");
    const baseline = this.translate.instant("common.version.baseline");
    const live = this.translate.instant("common.version.live");
    const ai = this.translate.instant("common.version.ai");
    const prototype = this.translate.instant("common.version.prototype");
    const noChange = "noChange";
    const walk = (nodes) => {
      for (const node of nodes) {
        const data = node.data;
        const allColours = this.styleTreeNodeService.contextStyles;
        if (!data)
          continue;
        const style = data.status.isNew ? allColours.new : data.status.isROT ? allColours.rot : data.status.isMoved ? allColours.move : void 0;
        const approved = this.approvalStatus(data);
        if (data.status?.inScope !== false) {
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
            approved,
            // English title
            titleEnBase: {
              group: titleEN,
              version: baseline,
              content: data.baseline?.en.title ?? ""
            },
            titleEnProto: {
              group: titleEN,
              version: prototype,
              content: data.prototype?.en.title === data.live?.en.title ? noChange : data.prototype?.en.title ?? ""
            },
            titleEnLive: {
              group: titleEN,
              version: live,
              content: data.live?.en.title === data.baseline?.en.title ? noChange : data.live?.en.title ?? ""
            },
            // English description
            descriptionEnBase: {
              group: descriptionEN,
              version: baseline,
              content: data.baseline?.en.description ?? ""
            },
            descriptionEnAi: {
              group: descriptionEN,
              version: ai,
              content: data.metadataReview?.en.description.status === "pending" || data.metadataReview?.en.description.status === "edited" ? data.metadataReview?.en.description.edited ?? data.metadataReview?.en.description.ai : noChange
            },
            descriptionEnProto: {
              group: descriptionEN,
              version: prototype,
              content: data.prototype?.en.description === data.live?.en.description ? noChange : data.prototype?.en.description ?? ""
            },
            descriptionEnLive: {
              group: descriptionEN,
              version: live,
              content: data.live?.en.description === data.baseline?.en.description ? noChange : data.live?.en.description ?? ""
            },
            // English keywords
            keywordsEnBase: {
              group: keywordsEN,
              version: baseline,
              content: data.baseline?.en.keywords ?? ""
            },
            keywordsEnAi: {
              group: keywordsEN,
              version: ai,
              content: data.metadataReview?.en.keywords.status === "pending" || data.metadataReview?.en.keywords.status === "edited" ? data.metadataReview?.en.keywords.edited ?? data.metadataReview?.en.keywords.ai : noChange
            },
            keywordsEnProto: {
              group: keywordsEN,
              version: prototype,
              content: data.prototype?.en.keywords === data.live?.en.keywords ? noChange : data.prototype?.en.keywords ?? ""
            },
            keywordsEnLive: {
              group: keywordsEN,
              version: live,
              content: data.live?.en.keywords === data.baseline?.en.keywords ? noChange : data.live?.en.keywords ?? ""
            },
            // French title
            titleFrBase: {
              group: titleFR,
              version: baseline,
              content: data.baseline?.fr.title ?? ""
            },
            titleFrProto: {
              group: titleFR,
              version: prototype,
              content: data.prototype?.fr.title === data.live?.fr.title ? noChange : data.prototype?.fr.title ?? ""
            },
            titleFrLive: {
              group: titleFR,
              version: live,
              content: data.live?.fr.title === data.baseline?.fr.title ? noChange : data.live?.fr.title ?? ""
            },
            // French description
            descriptionFrBase: {
              group: descriptionFR,
              version: baseline,
              content: data.baseline?.fr.description ?? ""
            },
            descriptionFrAi: {
              group: descriptionFR,
              version: ai,
              content: data.metadataReview?.fr.description.status === "pending" || data.metadataReview?.fr.description.status === "edited" ? data.metadataReview?.fr.description.edited ?? data.metadataReview?.fr.description.ai : noChange
            },
            descriptionFrProto: {
              group: descriptionFR,
              version: prototype,
              content: data.prototype?.fr.description === data.live?.fr.description ? noChange : data.prototype?.fr.description ?? ""
            },
            descriptionFrLive: {
              group: descriptionFR,
              version: live,
              content: data.live?.fr.description === data.baseline?.fr.description ? noChange : data.live?.fr.description ?? ""
            },
            // French keywords
            keywordsFrBase: {
              group: keywordsFR,
              version: baseline,
              content: data.baseline?.fr.keywords ?? ""
            },
            keywordsFrAi: {
              group: keywordsFR,
              version: ai,
              content: data.metadataReview?.fr.keywords.status === "pending" || data.metadataReview?.fr.keywords.status === "edited" ? data.metadataReview?.fr.keywords.edited ?? data.metadataReview?.fr.keywords.ai : noChange
            },
            keywordsFrProto: {
              group: keywordsFR,
              version: prototype,
              content: data.prototype?.fr.keywords === data.live?.fr.keywords ? noChange : data.prototype?.fr.keywords ?? ""
            },
            keywordsFrLive: {
              group: keywordsFR,
              version: live,
              content: data.live?.fr.keywords === data.baseline?.fr.keywords ? noChange : data.live?.fr.keywords ?? ""
            }
          });
        }
        if (node.children?.length) {
          walk(node.children);
        }
      }
    };
    walk(tree);
    return flatNodes;
  }
  approvalStatus(nodeData) {
    const storedApproval = nodeData.approved?.metadata;
    return !!storedApproval && storedApproval === this.hashMetadata(nodeData);
  }
  hashMetadata(nodeData) {
    if (!nodeData.prototype)
      return void 0;
    const allMeta = [
      nodeData.prototype.en.title,
      nodeData.prototype.fr.title,
      nodeData.prototype.en.description,
      nodeData.prototype.fr.description,
      nodeData.prototype.en.keywords,
      nodeData.prototype.fr.keywords
    ];
    const jsonMeta = JSON.stringify(allMeta);
    return this.fetchService.hashString(jsonMeta);
  }
  static \u0275fac = function ProjectMetadataService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjectMetadataService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProjectMetadataService, factory: _ProjectMetadataService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectMetadataService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/views/tasks/metadata/metadata.component.ts
var _c0 = ["dt"];
var _c1 = (a0, a1) => ({ shown: a0, total: a1 });
var _forTrack0 = ($index, $item) => $item.name;
var _forTrack1 = ($index, $item) => $item.key;
function MetadataComponent_Conditional_14_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx);
  }
}
function MetadataComponent_Conditional_14_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275listener("click", function MetadataComponent_Conditional_14_Conditional_5_Template_div_click_0_listener($event) {
      const row_r3 = \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext(2);
      $event.stopPropagation();
      ctx_r3.noPreviewPath.set(row_r3.label[ctx_r3.uiLang()].path);
      return \u0275\u0275resetView(ctx_r3.updateApproval(!row_r3.approved, row_r3.label[ctx_r3.uiLang()].path));
    })("keydown.enter", function MetadataComponent_Conditional_14_Conditional_5_Template_div_keydown_enter_0_listener($event) {
      const row_r3 = \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext(2);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r3.updateApproval(!row_r3.approved, row_r3.label[ctx_r3.uiLang()].path));
    })("mouseenter", function MetadataComponent_Conditional_14_Conditional_5_Template_div_mouseenter_0_listener() {
      const row_r3 = \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onToggleEnter(row_r3.label[ctx_r3.uiLang()].path));
    })("mouseleave", function MetadataComponent_Conditional_14_Conditional_5_Template_div_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.noPreviewPath.set(null));
    });
    \u0275\u0275element(1, "i", 23)(2, "i", 24);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(row_r3.approved ? "hover:bg-green hover:border-green text-green" : "hover:bg-red hover:border-red text-red");
    \u0275\u0275classProp("no-preview", ctx_r3.noPreviewPath() === row_r3.label[ctx_r3.uiLang()].path);
    \u0275\u0275advance();
    \u0275\u0275classMap(row_r3.approved ? "pi-check-circle text-green" : "pi-circle text-red");
    \u0275\u0275advance();
    \u0275\u0275classMap(row_r3.approved ? "pi-circle text-green" : "pi-check-circle text-red");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 9, "metadata.status." + ctx_r3.approvalStatus(row_r3)), " ");
  }
}
function MetadataComponent_Conditional_14_Conditional_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-fieldset", 25);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "aida-edit-metadata", 26);
    \u0275\u0275listener("changed", function MetadataComponent_Conditional_14_Conditional_9_Conditional_0_Template_aida_edit_metadata_changed_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.onMetaChanged());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("legend", \u0275\u0275pipeBind1(1, 2, "common.language.english"));
    \u0275\u0275advance(2);
    \u0275\u0275property("meta", ctx);
  }
}
function MetadataComponent_Conditional_14_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MetadataComponent_Conditional_14_Conditional_9_Conditional_0_Template, 3, 4, "p-fieldset", 25);
  }
  if (rf & 2) {
    let tmp_5_0;
    const nodeData_r6 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_5_0 = nodeData_r6.prototype == null ? null : nodeData_r6.prototype.en) ? 0 : -1, tmp_5_0);
  }
}
function MetadataComponent_Conditional_14_Conditional_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-fieldset", 25);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "aida-edit-metadata", 26);
    \u0275\u0275listener("changed", function MetadataComponent_Conditional_14_Conditional_10_Conditional_0_Template_aida_edit_metadata_changed_2_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.onMetaChanged());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("legend", \u0275\u0275pipeBind1(1, 2, "common.language.french"));
    \u0275\u0275advance(2);
    \u0275\u0275property("meta", ctx);
  }
}
function MetadataComponent_Conditional_14_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MetadataComponent_Conditional_14_Conditional_10_Conditional_0_Template, 3, 4, "p-fieldset", 25);
  }
  if (rf & 2) {
    let tmp_5_0;
    const nodeData_r6 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_5_0 = nodeData_r6.prototype == null ? null : nodeData_r6.prototype.fr) ? 0 : -1, tmp_5_0);
  }
}
function MetadataComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div");
    \u0275\u0275conditionalCreate(2, MetadataComponent_Conditional_14_Conditional_2_Template, 2, 1, "p", 19);
    \u0275\u0275elementStart(3, "h2", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(5, MetadataComponent_Conditional_14_Conditional_5_Template, 5, 11, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3", 19);
    \u0275\u0275text(7, "Edit prototype metadata");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 21);
    \u0275\u0275conditionalCreate(9, MetadataComponent_Conditional_14_Conditional_9_Template, 1, 1);
    \u0275\u0275conditionalCreate(10, MetadataComponent_Conditional_14_Conditional_10_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    const nodeData_r6 = ctx;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_4_0 = nodeData_r6.prototype == null ? null : (tmp_4_0 = nodeData_r6.prototype[ctx_r3.uiLang()]) == null ? null : tmp_4_0.doubleH1) ? 2 : -1, tmp_4_0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(nodeData_r6.prototype == null ? null : (tmp_5_0 = nodeData_r6.prototype[ctx_r3.uiLang()]) == null ? null : tmp_5_0.h1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_6_0 = ctx_r3.selectedRow()) ? 5 : -1, tmp_6_0);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r3.projectCache.selectedLang() !== "fr" ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.projectCache.selectedLang() !== "en" ? 10 : -1);
  }
}
function MetadataComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const dt_r8 = \u0275\u0275reference(31);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "common.showingRows", \u0275\u0275pureFunction2(4, _c1, dt_r8.filteredValue.length, dt_r8.value.length)), " ");
  }
}
function MetadataComponent_ng_template_32_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r9 = ctx.$implicit;
    \u0275\u0275attribute("colspan", group_r9.span);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(group_r9.name);
  }
}
function MetadataComponent_ng_template_32_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r10 = ctx.$implicit;
    \u0275\u0275classProp("border-left-1", !column_r10.isGroupStart)("border-left-3", column_r10.isGroupStart);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(column_r10.version);
  }
}
function MetadataComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 27);
    \u0275\u0275element(2, "p-tableHeaderCheckbox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 28);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 29);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(9, MetadataComponent_ng_template_32_For_10_Template, 2, 2, "th", 30, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "tr");
    \u0275\u0275repeaterCreate(12, MetadataComponent_ng_template_32_For_13_Template, 2, 5, "th", 31, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "compare.pageOptions.page"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 4, "common.approved"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.groups());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r3.columns());
  }
}
function MetadataComponent_ng_template_33_For_18_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 46);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275element(5, "i", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "common.noChange"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("aidaTooltip", \u0275\u0275pipeBind1(4, 4, "common.noChange"));
  }
}
function MetadataComponent_ng_template_33_For_18_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 48);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r13 = \u0275\u0275nextContext().$implicit;
    const row_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r3.countClasses(row_r12[column_r13.key].content, column_r13.key));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", row_r12[column_r13.key].content.length, "/", column_r13.key.startsWith("title") ? "60" : "160", " ", \u0275\u0275pipeBind1(2, 9, "common.characters"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-red", ctx_r3.isRed(row_r12[column_r13.key].content, row_r12.label, column_r13.key));
    \u0275\u0275property("aidaTooltip", \u0275\u0275pipeBind1(4, 11, ctx_r3.tooltip(row_r12[column_r13.key].content, row_r12.label, column_r13.key)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r12[column_r13.key].content, " ");
  }
}
function MetadataComponent_ng_template_33_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 44);
    \u0275\u0275conditionalCreate(1, MetadataComponent_ng_template_33_For_18_Conditional_1_Template, 6, 6)(2, MetadataComponent_ng_template_33_For_18_Conditional_2_Template, 6, 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r13 = ctx.$implicit;
    const row_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("border-left-1", !column_r13.isGroupStart)("border-left-3", column_r13.isGroupStart);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r12[column_r13.key].content === "noChange" ? 1 : 2);
  }
}
function MetadataComponent_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 33)(1, "td", 34);
    \u0275\u0275element(2, "p-tableCheckbox", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 36)(4, "div", 37)(5, "span", 38);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 39);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 40);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "td", 41)(12, "div", 42);
    \u0275\u0275listener("click", function MetadataComponent_ng_template_33_Template_div_click_12_listener($event) {
      const row_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      $event.stopPropagation();
      ctx_r3.noPreviewPath.set(row_r12.label[ctx_r3.uiLang()].path);
      return \u0275\u0275resetView(ctx_r3.updateApproval(!row_r12.approved, row_r12.label[ctx_r3.uiLang()].path));
    })("keydown.enter", function MetadataComponent_ng_template_33_Template_div_keydown_enter_12_listener($event) {
      const row_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r3.updateApproval(!row_r12.approved, row_r12.label[ctx_r3.uiLang()].path));
    })("mouseenter", function MetadataComponent_ng_template_33_Template_div_mouseenter_12_listener() {
      const row_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onToggleEnter(row_r12.label[ctx_r3.uiLang()].path));
    })("mouseleave", function MetadataComponent_ng_template_33_Template_div_mouseleave_12_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.noPreviewPath.set(null));
    });
    \u0275\u0275element(13, "i", 23)(14, "i", 24);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(17, MetadataComponent_ng_template_33_For_18_Template, 3, 5, "td", 43, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r12 = ctx.$implicit;
    const rowIndex_r14 = ctx.rowIndex;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classMap(row_r12.style);
    \u0275\u0275property("pSelectableRow", row_r12)("pSelectableRowIndex", rowIndex_r14);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", row_r12);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(row_r12.label[ctx_r3.uiLang()].doubleH1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r12.label[ctx_r3.uiLang()].h1);
    \u0275\u0275advance();
    \u0275\u0275property("aidaTooltip", row_r12.label[ctx_r3.uiLang()].path);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate("/" + row_r12.label[ctx_r3.uiLang()].path.split("/").pop());
    \u0275\u0275advance(2);
    \u0275\u0275classMap(row_r12.approved ? "hover:bg-green hover:border-green text-green" : "hover:bg-red hover:border-red text-red");
    \u0275\u0275classProp("no-preview", ctx_r3.noPreviewPath() === row_r12.label[ctx_r3.uiLang()].path);
    \u0275\u0275advance();
    \u0275\u0275classMap(row_r12.approved ? "pi-check-circle text-green" : "pi-circle text-red");
    \u0275\u0275advance();
    \u0275\u0275classMap(row_r12.approved ? "pi-circle text-green" : "pi-check-circle text-red");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 18, "metadata.status." + ctx_r3.approvalStatus(row_r12)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.columns());
  }
}
function MetadataComponent_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 49);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r3.columns().length + 2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "inventory.emptyMessage"), " ");
  }
}
var MetadataComponent = class _MetadataComponent {
  translate = inject(TranslateService);
  styleCardService = inject(StyleCardService);
  projectState = inject(ProjectStateService);
  projectMetadata = inject(ProjectMetadataService);
  projectCache = inject(ProjectCacheService);
  compareService = inject(CompareService);
  fetchService = inject(FetchService);
  settingsService = inject(UserSettingsService);
  selectedNode = signal(null, ...ngDevMode ? [{ debugName: "selectedNode" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedRow = signal(null, ...ngDevMode ? [{ debugName: "selectedRow" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedNodes = [];
  uiLang = computed(() => this.translate.currentLang()?.startsWith("fr") ? "fr" : "en", ...ngDevMode ? [{ debugName: "uiLang" }] : (
    /* istanbul ignore next */
    []
  ));
  searchTerm = signal("", ...ngDevMode ? [{ debugName: "searchTerm" }] : (
    /* istanbul ignore next */
    []
  ));
  dt = viewChild.required("dt");
  constructor() {
    effect(() => {
      const path = this.compareService.selectedPage();
      this.selectedNode.set(this.projectState.findNodeByPath(this.projectState.getProject().projectData, path, "en"));
      const row = this.rows().find((row2) => row2.label[this.uiLang()].path === path);
      if (row) {
        this.selectedRow.set(row);
      }
    });
  }
  ngOnInit() {
    this.projectCache.selectedLang.set("both");
  }
  onMetaChanged() {
    this.projectState.setModifiedDate();
  }
  /** All table rows */
  rows = computed(() => {
    return this.projectMetadata.flattenMetadata(this.projectState.getProject().projectData);
  }, ...ngDevMode ? [{ debugName: "rows" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Visible table rows */
  visibleRows = computed(() => {
    const rows = this.rows();
    if (this.projectCache.selectedFilter() === "all")
      return rows;
    const keys = this.columns().map((c) => c.key).filter((k) => k.endsWith("Live") || k.endsWith("Proto"));
    return rows.filter((row) => {
      const r = row;
      return keys.some((key) => r[key].content !== "noChange");
    });
  }, ...ngDevMode ? [{ debugName: "visibleRows" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Column keys, groups, version, & an indicator for first column in group */
  columns = computed(() => {
    const first = this.rows()[0];
    if (!first)
      return [];
    const selectedMeta = this.projectCache.selectedMeta();
    const selectedLang = this.projectCache.selectedLang();
    const metas = selectedMeta.length ? selectedMeta : ["title", "description", "keywords"];
    const langs = selectedLang === "both" ? ["En", "Fr"] : [selectedLang === "en" ? "En" : "Fr"];
    const prefixes = metas.flatMap((meta) => langs.map((lang) => `${meta}${lang}`));
    const columns = Object.entries(first).filter(([key]) => prefixes.some((p) => key.startsWith(p)));
    return columns.map(([key, cell], i) => ({
      key,
      group: cell.group,
      version: cell.version,
      isGroupStart: i === 0 || columns[i - 1][1].group !== cell.group
    }));
  }, ...ngDevMode ? [{ debugName: "columns" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Group names & calculated span for table */
  groups = computed(() => {
    const result = [];
    for (const column of this.columns()) {
      const last = result.at(-1);
      if (last?.name === column.group)
        last.span++;
      else
        result.push({ name: column.group, span: 1 });
    }
    return result;
  }, ...ngDevMode ? [{ debugName: "groups" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Set max rows per page to the total pages in project */
  get rowsPerPageOptions() {
    const total = this.rows().length;
    return [25, 50, 100].filter((n) => n < total).concat(total);
  }
  updateNodeApproval(node) {
    if (!node.data)
      return;
    this.projectMetadata.approvalStatus(node.data);
  }
  updateApproval(value, path) {
    const nodeData = this.projectState.findNodeByPath(this.projectState.getProject().projectData, path, this.uiLang())?.data;
    if (!nodeData)
      return;
    if (value) {
      nodeData.approved = __spreadProps(__spreadValues({}, nodeData.approved), { metadata: this.projectMetadata.hashMetadata(nodeData) });
      this.projectState.setModifiedDate();
    } else if (nodeData.approved) {
      nodeData.approved.metadata = void 0;
      this.projectState.setModifiedDate();
    }
  }
  noPreviewPath = signal(null, ...ngDevMode ? [{ debugName: "noPreviewPath" }] : (
    /* istanbul ignore next */
    []
  ));
  onToggleEnter(path) {
    if (this.noPreviewPath() !== path)
      this.noPreviewPath.set(null);
  }
  approvalStatus(row) {
    const cells = row;
    const changed = (suffix) => ["title", "description", "keywords"].some((meta) => ["En", "Fr"].some((lang) => cells[`${meta}${lang}${suffix}`]?.content !== "noChange"));
    const approved = row.approved;
    if (changed("Proto") && !approved)
      return "changePendingReview";
    if (changed("Proto") && approved)
      return "changeApproved";
    if (changed("Live"))
      return "changeLive";
    if (!approved)
      return "noChangesPendingReview";
    return "noChangesApproved";
  }
  tooltip(content, label, key) {
    if (key.startsWith("title")) {
      return !this.isMatchforH1(content, label, key) ? "metadata.tooltip.notH1Match" : void 0;
    } else {
      return this.isTooLong(content) ? "metadata.tooltip.tooLong" : void 0;
    }
  }
  isRed(content, label, key) {
    if (key.startsWith("title")) {
      return !this.isMatchforH1(content, label, key);
    } else {
      return this.isTooLong(content);
    }
  }
  countClasses(content, key) {
    const max = key.startsWith("title") ? 60 : 160;
    const tooLong = content.length > max;
    const classes = tooLong ? "bg-red text-red" : "bg-green text-green";
    return classes;
  }
  /** Checks if title matches H1 - Double H1 */
  isMatchforH1(title, label, key) {
    const h1 = key.startsWith("titleEn") ? label.en.h1 : label.fr.h1;
    const doubleH1 = key.startsWith("titleEn") ? label.en.doubleH1 : label.fr.doubleH1;
    const expectedTitle = doubleH1 ? [" - ", " \u2013 ", " \u2014 ", ": ", " : "].map((sep) => h1.trim() + sep + doubleH1.trim()) : [h1.trim()];
    return expectedTitle.includes(title.trim());
  }
  /** Checks if metadata is within accepted character length */
  isTooLong(content) {
    if (content !== "noChange") {
      return content.length > 160;
    } else
      return false;
  }
  normalizeSearchValue(value) {
    return this.fetchService.generatePath(value);
  }
  // Filter on currently visible columns plus h1, double h1, and path
  filterFields = computed(() => [`label.${this.uiLang()}.h1`, `label.${this.uiLang()}.doubleH1`, `label.${this.uiLang()}.path`, ...this.columns().map((c) => `${c.key}.content`)], ...ngDevMode ? [{ debugName: "filterFields" }] : (
    /* istanbul ignore next */
    []
  ));
  markForTranslation() {
    marker("metadata.status.changePendingReview");
    marker("metadata.status.changeApproved");
    marker("metadata.status.changeLive");
    marker("metadata.status.noChangesPendingReview");
    marker("metadata.status.noChangesApproved");
    marker("metadata.tooltip.tooLong");
    marker("metadata.tooltip.notH1Match");
  }
  static \u0275fac = function MetadataComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MetadataComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MetadataComponent, selectors: [["aida-metadata"]], viewQuery: function MetadataComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.dt, _c0, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, decls: 36, vars: 30, consts: [["dt", ""], ["body", ""], ["id", "wb-cont"], [1, "flex", "flex-column", "gap-2"], [1, "flex", "gap-2", "align-items-end"], [3, "versionsToShow"], [3, "allowBoth", "showLang"], [1, "h-3rem", "w-full", "text-red"], [1, "h-3rem", "w-full", "text-green", "hover:bg-green", "bg-green"], [1, "h-3rem", "w-full", "text-red", "bg-red"], [1, "flex", "flex-wrap", "gap-2", "align-items-end"], [3, "allowBoth", "showMeta"], [3, "allowBoth", "showFilter"], ["id", "search", "pInputText", "", "type", "text", 1, "min-w-min", "md:min-w-max", "w-full", 3, "ngModelChange", "input", "ngModel", "placeholder"], [1, "pi", "pi-search"], ["selectionMode", "multiple", "stripedRows", "", 3, "selectionChange", "selection", "globalFilterFields", "paginator", "rows", "rowsPerPageOptions", "scrollable", "value"], ["pTemplate", "header"], ["pTemplate", "emptymessage"], [1, "flex", "align-items-center", "gap-3"], [1, "m-0"], ["tabindex", "0", 1, "flex", "align-items-center", "gap-2", "p-1", "border-round", "border-1", "border-transparent", "cursor-pointer", "icon-toggle", 3, "no-preview", "class"], [1, "flex", "gap-2", "h-full"], ["tabindex", "0", 1, "flex", "align-items-center", "gap-2", "p-1", "border-round", "border-1", "border-transparent", "cursor-pointer", "icon-toggle", 3, "click", "keydown.enter", "mouseenter", "mouseleave"], [1, "icon-current", "pi", "text-5xl", "mt-1"], [1, "icon-preview", "pi", "text-5xl", "mt-1"], ["styleClass", "flex-1", 1, "flex-1", "flex", "flex-column", 3, "legend"], [3, "changed", "meta"], ["rowspan", "2", 1, "sticky-table", "sticky-table-group-header", "sticky-table-checkbox"], ["rowspan", "2", 1, "text-xl", "sticky-table", "sticky-table-group-header", "sticky-table-column"], ["rowspan", "2", 1, "text-xl", "border-left-3"], [1, "text-lg", "border-left-3", "sticky-table", "sticky-table-group-header"], [1, "sticky-table", "sticky-table-header", 3, "border-left-1", "border-left-3"], [1, "sticky-table", "sticky-table-header"], [3, "pSelectableRow", "pSelectableRowIndex"], [1, "sticky-table", "sticky-table-checkbox", "border-bottom-1", "border-300"], [3, "value"], [1, "sticky-table", "sticky-table-column", "border-bottom-1", "border-300", "py-2", "px-3"], [1, "flex", "flex-column", "text-left"], [1, "text-lg", "font-medium", "text-color-secondary"], [1, "text-xl"], [1, "text-sm", "font-medium", "text-color-secondary", "white-space-nowrap", 3, "aidaTooltip"], [1, "border-left-3"], ["tabindex", "0", 1, "flex", "align-items-center", "gap-3", "p-1", "border-round", "border-1", "border-transparent", "icon-toggle", 3, "click", "keydown.enter", "mouseenter", "mouseleave"], [1, "p-0", "min-w-min", 3, "border-left-1", "border-left-3"], [1, "p-0", "min-w-min"], [1, "px-3", "py-1", "h-2rem", "border-bottom-1", "border-300", "white-space-nowrap", "min-w-max", "text-center"], [1, "flex", "justify-content-center", "p-3", 3, "aidaTooltip"], [1, "pi", "pi-minus", "text-xl", "text-color-secondary"], [1, "px-3", "py-1", 3, "aidaTooltip"], [1, "text-center", "p-4"]], template: function MetadataComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "h1", 2);
      \u0275\u0275text(1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 3)(5, "div", 4);
      \u0275\u0275element(6, "aida-compare-select", 5)(7, "aida-project-settings", 6);
      \u0275\u0275elementStart(8, "div", 7);
      \u0275\u0275text(9, "Test");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 8);
      \u0275\u0275text(11, "Test");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 9);
      \u0275\u0275text(13, "Test");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(14, MetadataComponent_Conditional_14_Template, 11, 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 3)(16, "h2");
      \u0275\u0275text(17, "Metadata for all in-scope pages");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 10)(19, "div")(20, "span");
      \u0275\u0275text(21);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(22, "aida-project-settings", 6)(23, "aida-project-settings", 11);
      \u0275\u0275elementStart(24, "aida-project-settings", 12)(25, "p-iconfield")(26, "input", 13);
      \u0275\u0275pipe(27, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function MetadataComponent_Template_input_ngModelChange_26_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("input", function MetadataComponent_Template_input_input_26_listener($event) {
        \u0275\u0275restoreView(_r1);
        const dt_r8 = \u0275\u0275reference(31);
        return \u0275\u0275resetView(dt_r8.filterGlobal(ctx.normalizeSearchValue($event.target.value), "contains"));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(28, "p-inputicon", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(29, MetadataComponent_Conditional_29_Template, 3, 7, "span");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "p-table", 15, 0);
      \u0275\u0275twoWayListener("selectionChange", function MetadataComponent_Template_p_table_selectionChange_30_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedNodes, $event) || (ctx.selectedNodes = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(32, MetadataComponent_ng_template_32_Template, 14, 6, "ng-template", 16)(33, MetadataComponent_ng_template_33_Template, 19, 20, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(35, MetadataComponent_ng_template_35_Template, 4, 4, "ng-template", 17);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_7_0;
      const dt_r8 = \u0275\u0275reference(31);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 26, "metadata._title"));
      \u0275\u0275advance(3);
      \u0275\u0275classMap(ctx.styleCardService.cardStyles());
      \u0275\u0275advance(2);
      \u0275\u0275property("versionsToShow", 0);
      \u0275\u0275advance();
      \u0275\u0275property("allowBoth", true)("showLang", true);
      \u0275\u0275advance(7);
      \u0275\u0275conditional((tmp_7_0 = (tmp_7_0 = ctx.selectedNode()) == null ? null : tmp_7_0.data) ? 14 : -1, tmp_7_0);
      \u0275\u0275advance();
      \u0275\u0275classMap(ctx.styleCardService.cardStyles());
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("", ctx.selectedNodes.length, " pages selected");
      \u0275\u0275advance();
      \u0275\u0275property("allowBoth", true)("showLang", true);
      \u0275\u0275advance();
      \u0275\u0275property("allowBoth", true)("showMeta", true);
      \u0275\u0275advance();
      \u0275\u0275property("allowBoth", true)("showFilter", true);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(27, 28, "common.search"));
      \u0275\u0275advance(3);
      \u0275\u0275conditional(dt_r8.filteredValue ? 29 : -1);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("selection", ctx.selectedNodes);
      \u0275\u0275property("globalFilterFields", ctx.filterFields())("paginator", ctx.visibleRows().length > 25)("rows", 50)("rowsPerPageOptions", ctx.rowsPerPageOptions)("scrollable", false)("value", ctx.visibleRows());
    }
  }, dependencies: [
    CommonModule,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    FieldsetModule,
    Fieldset,
    PrimeTemplate,
    IconFieldModule,
    IconField,
    InputIconModule,
    InputIcon,
    InputTextModule,
    InputText,
    TableModule,
    Table,
    SelectableRow,
    TableCheckbox,
    TableHeaderCheckbox,
    CompareSelectComponent,
    EditMetadataComponent,
    ProjectSettingsComponent,
    TooltipDirective,
    TranslatePipe
  ], styles: ["\n[_nghost-%COMP%] {\n  --group-header-height: 3rem;\n  --checkbox-width: 2.8rem;\n  --padding-left: 1.5rem;\n  --margin-left: -1.5rem;\n}\ntd[_ngcontent-%COMP%], \nth[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\n  .p-datatable-table-container {\n  overflow: visible !important;\n}\n[_nghost-%COMP%]     .p-datatable-thead {\n  z-index: 10;\n}\n.sticky-table[_ngcontent-%COMP%] {\n  margin-left: calc(var(--margin-left));\n  padding-left: calc(var(--padding-left));\n  position: sticky;\n}\n.sticky-table[_ngcontent-%COMP%]:not(.sticky-table-header):not(.sticky-table-group-header) {\n  background-color: inherit;\n}\n[_nghost-%COMP%]     .p-datatable-tbody > tr.p-datatable-row-selected > .sticky-table {\n  background-color: var(--p-content-background);\n  background-image: linear-gradient(var(--p-highlight-background), var(--p-highlight-background));\n}\n.sticky-table-checkbox[_ngcontent-%COMP%] {\n  left: var(--mobile-nav-width);\n  width: var(--checkbox-width);\n  z-index: 2;\n}\n.sticky-table-column[_ngcontent-%COMP%] {\n  left: calc(var(--mobile-nav-width) + var(--checkbox-width));\n  z-index: 1;\n}\n.sticky-table-group-header[_ngcontent-%COMP%] {\n  top: 0;\n  height: var(--group-header-height);\n  z-index: 2;\n}\n.sticky-table-header[_ngcontent-%COMP%] {\n  top: var(--group-header-height);\n  z-index: 1;\n}\n.sticky-table-column.sticky-table-header[_ngcontent-%COMP%], \n.sticky-table-column.sticky-table-group-header[_ngcontent-%COMP%], \n.sticky-table-checkbox.sticky-table-header[_ngcontent-%COMP%], \n.sticky-table-checkbox.sticky-table-group-header[_ngcontent-%COMP%] {\n  z-index: 3;\n}\n@media screen and (min-width: 768px) {\n  .sticky-table-column[_ngcontent-%COMP%] {\n    left: calc(var(--desktop-nav-width) + var(--checkbox-width));\n  }\n  .sticky-table-checkbox[_ngcontent-%COMP%] {\n    left: calc(var(--desktop-nav-width));\n  }\n}\n.icon-toggle[_ngcontent-%COMP%]   .icon-preview[_ngcontent-%COMP%] {\n  display: none;\n}\n.icon-toggle[_ngcontent-%COMP%]:not(.no-preview):hover   .icon-current[_ngcontent-%COMP%] {\n  display: none;\n}\n.icon-toggle[_ngcontent-%COMP%]:not(.no-preview):hover   .icon-preview[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n/*# sourceMappingURL=metadata.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MetadataComponent, [{
    type: Component,
    args: [{ selector: "aida-metadata", imports: [
      CommonModule,
      FormsModule,
      TranslatePipe,
      FieldsetModule,
      IconFieldModule,
      InputIconModule,
      InputTextModule,
      TableModule,
      CompareSelectComponent,
      EditMetadataComponent,
      ProjectSettingsComponent,
      TooltipDirective
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<h1 id="wb-cont">{{ 'metadata._title' | translate }}</h1>
<div class="flex flex-column gap-2">
  <div [class]="styleCardService.cardStyles()" class="flex flex-column gap-2">
    <div class="flex gap-2 align-items-end">
      <aida-compare-select [versionsToShow]="0" />
      <aida-project-settings [allowBoth]="true" [showLang]="true" />

      <div class="h-3rem w-full text-red">Test</div>
      <div class="h-3rem w-full text-green hover:bg-green bg-green">Test</div>
      <div class="h-3rem w-full text-red bg-red">Test</div>
    </div>
    @if (selectedNode()?.data; as nodeData) {
      <div class="flex align-items-center gap-3">
        <div>
          @if (nodeData.prototype?.[uiLang()]?.doubleH1; as doubleH1) {
            <p class="m-0">{{ doubleH1 }}</p>
          }
          <h2 class="m-0">{{ nodeData.prototype?.[uiLang()]?.h1 }}</h2>
        </div>
        @if (selectedRow(); as row) {
          <div
            [class.no-preview]="noPreviewPath() === row.label[uiLang()].path"
            [class]="row.approved ? 'hover:bg-green hover:border-green text-green' : 'hover:bg-red hover:border-red text-red'"
            (click)="$event.stopPropagation(); noPreviewPath.set(row.label[uiLang()].path); updateApproval(!row.approved, row.label[uiLang()].path)"
            (keydown.enter)="$event.stopPropagation(); updateApproval(!row.approved, row.label[uiLang()].path)"
            (mouseenter)="onToggleEnter(row.label[uiLang()].path)"
            (mouseleave)="noPreviewPath.set(null)"
            class="flex align-items-center gap-2 p-1 border-round border-1 border-transparent cursor-pointer icon-toggle"
            tabindex="0"
          >
            <i [class]="row.approved ? 'pi-check-circle text-green' : 'pi-circle text-red'" class="icon-current pi text-5xl mt-1"></i>
            <i [class]="row.approved ? 'pi-circle text-green' : 'pi-check-circle text-red'" class="icon-preview pi text-5xl mt-1"></i>
            {{ 'metadata.status.' + approvalStatus(row) | translate }}
          </div>
        }
      </div>
      <h3 class="m-0">Edit prototype metadata</h3>
      <div class="flex gap-2 h-full">
        @if (projectCache.selectedLang() !== 'fr') {
          @if (nodeData.prototype?.en; as meta) {
            <p-fieldset [legend]="'common.language.english' | translate" class="flex-1 flex flex-column" styleClass="flex-1">
              <aida-edit-metadata [meta]="meta" (changed)="onMetaChanged()" />
            </p-fieldset>
          }
        }
        @if (projectCache.selectedLang() !== 'en') {
          @if (nodeData.prototype?.fr; as meta) {
            <p-fieldset [legend]="'common.language.french' | translate" class="flex-1 flex flex-column" styleClass="flex-1">
              <aida-edit-metadata [meta]="meta" (changed)="onMetaChanged()" />
            </p-fieldset>
          }
        }
      </div>
    }
  </div>

  <div [class]="styleCardService.cardStyles()" class="flex flex-column gap-2">
    <h2>Metadata for all in-scope pages</h2>
    <div class="flex flex-wrap gap-2 align-items-end">
      <div>
        <span>{{ selectedNodes.length }} pages selected</span>
        <!--aida-menu-bulk-page-actions /-->
      </div>
      <aida-project-settings [allowBoth]="true" [showLang]="true" />
      <aida-project-settings [allowBoth]="true" [showMeta]="true" />
      <aida-project-settings [allowBoth]="true" [showFilter]="true">
        <p-iconfield>
          <input
            id="search"
            [(ngModel)]="searchTerm"
            [placeholder]="'common.search' | translate"
            (input)="dt.filterGlobal(normalizeSearchValue($event.target.value), 'contains')"
            class="min-w-min md:min-w-max w-full"
            pInputText
            type="text"
          />
          <p-inputicon class="pi pi-search" />
        </p-iconfield>
        @if (dt.filteredValue) {
          <span>
            {{ 'common.showingRows' | translate: { shown: dt.filteredValue.length, total: dt.value.length } }}
          </span>
        }
      </aida-project-settings>
    </div>
    <p-table
      [(selection)]="selectedNodes"
      [globalFilterFields]="filterFields()"
      [paginator]="visibleRows().length > 25"
      [rows]="50"
      [rowsPerPageOptions]="rowsPerPageOptions"
      [scrollable]="false"
      [value]="visibleRows()"
      #dt
      selectionMode="multiple"
      stripedRows
    >
      <ng-template pTemplate="header">
        <tr>
          <th class="sticky-table sticky-table-group-header sticky-table-checkbox" rowspan="2"><p-tableHeaderCheckbox /></th>
          <th class="text-xl sticky-table sticky-table-group-header sticky-table-column" rowspan="2">{{ 'compare.pageOptions.page' | translate }}</th>
          <th class="text-xl border-left-3" rowspan="2">{{ 'common.approved' | translate }}</th>
          @for (group of groups(); track group.name) {
            <th [attr.colspan]="group.span" class="text-lg border-left-3 sticky-table sticky-table-group-header">{{ group.name }}</th>
          }
        </tr>
        <tr>
          @for (column of columns(); track column.key) {
            <th [class.border-left-1]="!column.isGroupStart" [class.border-left-3]="column.isGroupStart" class="sticky-table sticky-table-header">{{ column.version }}</th>
          }
        </tr>
      </ng-template>
      <ng-template #body let-row let-rowIndex="rowIndex">
        <tr [class]="row.style" [pSelectableRow]="row" [pSelectableRowIndex]="rowIndex">
          <td class="sticky-table sticky-table-checkbox border-bottom-1 border-300"><p-tableCheckbox [value]="row" /></td>
          <th class="sticky-table sticky-table-column border-bottom-1 border-300 py-2 px-3">
            <div class="flex flex-column text-left">
              <span class="text-lg font-medium text-color-secondary">{{ row.label[uiLang()].doubleH1 }}</span>
              <span class="text-xl">{{ row.label[uiLang()].h1 }}</span>
              <span [aidaTooltip]="row.label[uiLang()].path" class="text-sm font-medium text-color-secondary white-space-nowrap">{{ '/' + row.label[uiLang()].path.split('/').pop() }}</span>
            </div>
          </th>
          <td class="border-left-3">
            <div
              [class.no-preview]="noPreviewPath() === row.label[uiLang()].path"
              [class]="row.approved ? 'hover:bg-green hover:border-green text-green' : 'hover:bg-red hover:border-red text-red'"
              (click)="$event.stopPropagation(); noPreviewPath.set(row.label[uiLang()].path); updateApproval(!row.approved, row.label[uiLang()].path)"
              (keydown.enter)="$event.stopPropagation(); updateApproval(!row.approved, row.label[uiLang()].path)"
              (mouseenter)="onToggleEnter(row.label[uiLang()].path)"
              (mouseleave)="noPreviewPath.set(null)"
              class="flex align-items-center gap-3 p-1 border-round border-1 border-transparent icon-toggle"
              tabindex="0"
            >
              <i [class]="row.approved ? 'pi-check-circle text-green' : 'pi-circle text-red'" class="icon-current pi text-5xl mt-1"></i>
              <i [class]="row.approved ? 'pi-circle text-green' : 'pi-check-circle text-red'" class="icon-preview pi text-5xl mt-1"></i>
              {{ 'metadata.status.' + approvalStatus(row) | translate }}
            </div>
          </td>
          @for (column of columns(); track column.key) {
            <td [class.border-left-1]="!column.isGroupStart" [class.border-left-3]="column.isGroupStart" class="p-0 min-w-min">
              @if (row[column.key].content === 'noChange') {
                <div class="px-3 py-1 h-2rem border-bottom-1 border-300 white-space-nowrap min-w-max text-center">
                  {{ 'common.noChange' | translate }}
                </div>
                <div [aidaTooltip]="'common.noChange' | translate" class="flex justify-content-center p-3">
                  <i class="pi pi-minus text-xl text-color-secondary"></i>
                </div>
              } @else {
                <div [class]="countClasses(row[column.key].content, column.key)" class="px-3 py-1 h-2rem border-bottom-1 border-300 white-space-nowrap min-w-max text-center">
                  {{ row[column.key].content.length }}/{{ column.key.startsWith('title') ? '60' : '160' }} {{ 'common.characters' | translate }}
                </div>
                <div [aidaTooltip]="tooltip(row[column.key].content, row.label, column.key) | translate" [class.text-red]="isRed(row[column.key].content, row.label, column.key)" class="px-3 py-1">
                  {{ row[column.key].content }}
                </div>
              }
            </td>
          }
        </tr>
      </ng-template>
      <ng-template pTemplate="emptymessage">
        <tr>
          <td [attr.colspan]="columns().length + 2" class="text-center p-4">
            {{ 'inventory.emptyMessage' | translate }}
          </td>
        </tr>
      </ng-template>
    </p-table>
  </div>
</div>
`, styles: ["/* src/app/views/tasks/metadata/metadata.component.css */\n:host {\n  --group-header-height: 3rem;\n  --checkbox-width: 2.8rem;\n  --padding-left: 1.5rem;\n  --margin-left: -1.5rem;\n}\ntd,\nth {\n  vertical-align: top;\n}\n::ng-deep .p-datatable-table-container {\n  overflow: visible !important;\n}\n:host ::ng-deep .p-datatable-thead {\n  z-index: 10;\n}\n.sticky-table {\n  margin-left: calc(var(--margin-left));\n  padding-left: calc(var(--padding-left));\n  position: sticky;\n}\n.sticky-table:not(.sticky-table-header):not(.sticky-table-group-header) {\n  background-color: inherit;\n}\n:host ::ng-deep .p-datatable-tbody > tr.p-datatable-row-selected > .sticky-table {\n  background-color: var(--p-content-background);\n  background-image: linear-gradient(var(--p-highlight-background), var(--p-highlight-background));\n}\n.sticky-table-checkbox {\n  left: var(--mobile-nav-width);\n  width: var(--checkbox-width);\n  z-index: 2;\n}\n.sticky-table-column {\n  left: calc(var(--mobile-nav-width) + var(--checkbox-width));\n  z-index: 1;\n}\n.sticky-table-group-header {\n  top: 0;\n  height: var(--group-header-height);\n  z-index: 2;\n}\n.sticky-table-header {\n  top: var(--group-header-height);\n  z-index: 1;\n}\n.sticky-table-column.sticky-table-header,\n.sticky-table-column.sticky-table-group-header,\n.sticky-table-checkbox.sticky-table-header,\n.sticky-table-checkbox.sticky-table-group-header {\n  z-index: 3;\n}\n@media screen and (min-width: 768px) {\n  .sticky-table-column {\n    left: calc(var(--desktop-nav-width) + var(--checkbox-width));\n  }\n  .sticky-table-checkbox {\n    left: calc(var(--desktop-nav-width));\n  }\n}\n.icon-toggle .icon-preview {\n  display: none;\n}\n.icon-toggle:not(.no-preview):hover .icon-current {\n  display: none;\n}\n.icon-toggle:not(.no-preview):hover .icon-preview {\n  display: inline-block;\n}\n/*# sourceMappingURL=metadata.component.css.map */\n"] }]
  }], () => [], { dt: [{ type: ViewChild, args: ["dt", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MetadataComponent, { className: "MetadataComponent", filePath: "src/app/views/tasks/metadata/metadata.component.ts", lineNumber: 66 });
})();
export {
  MetadataComponent
};
//# sourceMappingURL=chunk-WWXCXEME.js.map
