import {
  CompareSelectComponent
} from "./chunk-PMGMRIK4.js";
import {
  CompareService
} from "./chunk-TFIK6GFY.js";
import "./chunk-DWQ5T5PK.js";
import "./chunk-5MRSS343.js";
import "./chunk-3Y4CZOCC.js";
import {
  StyleTreeNodeService
} from "./chunk-OIQTDMBR.js";
import {
  ProjectSettingsComponent
} from "./chunk-J7SRKA75.js";
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
} from "./chunk-LA5WKTZN.js";
import "./chunk-P3TRDY63.js";
import "./chunk-NQRO2LC7.js";
import "./chunk-5QMHUOJQ.js";
import "./chunk-OFBI5QRC.js";
import "./chunk-PL2PAX7Y.js";
import {
  EditMetadataComponent
} from "./chunk-YTOYTTTA.js";
import {
  Fieldset,
  FieldsetModule
} from "./chunk-VAGTSXG4.js";
import "./chunk-Y576ZK6L.js";
import "./chunk-2YFXSVHN.js";
import "./chunk-FQDO2XGS.js";
import {
  ProjectCacheService
} from "./chunk-ZP7AMFPN.js";
import "./chunk-D57SAGZH.js";
import "./chunk-JNZO32C5.js";
import "./chunk-MKX7R2UM.js";
import {
  ProjectStateService
} from "./chunk-AW5MQYZC.js";
import "./chunk-REIT3HFO.js";
import "./chunk-6U2RHGUD.js";
import "./chunk-5IS2DW3I.js";
import "./chunk-NJENQTX6.js";
import {
  FetchService
} from "./chunk-M6FDN6OY.js";
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
  NgClass,
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
        const storedApproval = data.approved?.metadata;
        const approved = !!storedApproval && storedApproval === this.hashMetadata(data);
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
            titleEnLive: {
              group: titleEN,
              version: live,
              content: data.live?.en.title === data.baseline?.en.title ? noChange : data.live?.en.title ?? ""
            },
            titleEnProto: {
              group: titleEN,
              version: prototype,
              content: data.prototype?.en.title === data.live?.en.title ? noChange : data.prototype?.en.title ?? ""
            },
            // English description
            descriptionEnBase: {
              group: descriptionEN,
              version: baseline,
              content: data.baseline?.en.description ?? ""
            },
            descriptionEnLive: {
              group: descriptionEN,
              version: live,
              content: data.live?.en.description === data.baseline?.en.description ? noChange : data.live?.en.description ?? ""
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
            // English keywords
            keywordsEnBase: {
              group: keywordsEN,
              version: baseline,
              content: data.baseline?.en.keywords ?? ""
            },
            keywordsEnLive: {
              group: keywordsEN,
              version: live,
              content: data.live?.en.keywords === data.baseline?.en.keywords ? noChange : data.live?.en.keywords ?? ""
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
            // French title
            titleFrBase: {
              group: titleFR,
              version: baseline,
              content: data.baseline?.fr.title ?? ""
            },
            titleFrLive: {
              group: titleFR,
              version: live,
              content: data.live?.fr.title === data.baseline?.fr.title ? noChange : data.live?.fr.title ?? ""
            },
            titleFrProto: {
              group: titleFR,
              version: prototype,
              content: data.prototype?.fr.title === data.live?.fr.title ? noChange : data.prototype?.fr.title ?? ""
            },
            // French description
            descriptionFrBase: {
              group: descriptionFR,
              version: baseline,
              content: data.baseline?.fr.description ?? ""
            },
            descriptionFrLive: {
              group: descriptionFR,
              version: live,
              content: data.live?.fr.description === data.baseline?.fr.description ? noChange : data.live?.fr.description ?? ""
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
            // French keywords
            keywordsFrBase: {
              group: keywordsFR,
              version: baseline,
              content: data.baseline?.fr.keywords ?? ""
            },
            keywordsFrLive: {
              group: keywordsFR,
              version: live,
              content: data.live?.fr.keywords === data.baseline?.fr.keywords ? noChange : data.live?.fr.keywords ?? ""
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
function MetadataComponent_Conditional_8_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-fieldset", 17);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "aida-edit-metadata", 18);
    \u0275\u0275listener("changed", function MetadataComponent_Conditional_8_Conditional_3_Conditional_0_Template_aida_edit_metadata_changed_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onMetaChanged());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("legend", \u0275\u0275pipeBind1(1, 2, "common.language.english"));
    \u0275\u0275advance(2);
    \u0275\u0275property("meta", ctx);
  }
}
function MetadataComponent_Conditional_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MetadataComponent_Conditional_8_Conditional_3_Conditional_0_Template, 3, 4, "p-fieldset", 17);
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((tmp_4_0 = (tmp_4_0 = ctx_r2.selectedNode()) == null ? null : tmp_4_0.data == null ? null : tmp_4_0.data.prototype == null ? null : tmp_4_0.data.prototype.en) ? 0 : -1, tmp_4_0);
  }
}
function MetadataComponent_Conditional_8_Conditional_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-fieldset", 17);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "aida-edit-metadata", 18);
    \u0275\u0275listener("changed", function MetadataComponent_Conditional_8_Conditional_4_Conditional_0_Template_aida_edit_metadata_changed_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onMetaChanged());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("legend", \u0275\u0275pipeBind1(1, 2, "common.language.french"));
    \u0275\u0275advance(2);
    \u0275\u0275property("meta", ctx);
  }
}
function MetadataComponent_Conditional_8_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MetadataComponent_Conditional_8_Conditional_4_Conditional_0_Template, 3, 4, "p-fieldset", 17);
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((tmp_4_0 = (tmp_4_0 = ctx_r2.selectedNode()) == null ? null : tmp_4_0.data == null ? null : tmp_4_0.data.prototype == null ? null : tmp_4_0.data.prototype.fr) ? 0 : -1, tmp_4_0);
  }
}
function MetadataComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 15);
    \u0275\u0275text(1, "Edit prototype metadata");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 16);
    \u0275\u0275conditionalCreate(3, MetadataComponent_Conditional_8_Conditional_3_Template, 1, 1);
    \u0275\u0275conditionalCreate(4, MetadataComponent_Conditional_8_Conditional_4_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.projectCache.selectedLang() !== "fr" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.projectCache.selectedLang() !== "en" ? 4 : -1);
  }
}
function MetadataComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const dt_r5 = \u0275\u0275reference(25);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "common.showingRows", \u0275\u0275pureFunction2(4, _c1, dt_r5.filteredValue.length, dt_r5.value.length)), " ");
  }
}
function MetadataComponent_ng_template_26_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r6 = ctx.$implicit;
    \u0275\u0275attribute("colspan", group_r6.span);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(group_r6.name);
  }
}
function MetadataComponent_ng_template_26_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r7 = ctx.$implicit;
    \u0275\u0275classProp("border-left-1", !column_r7.isGroupStart)("border-left-3", column_r7.isGroupStart);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(column_r7.version);
  }
}
function MetadataComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 19);
    \u0275\u0275element(2, "p-tableHeaderCheckbox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 20);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 21);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(9, MetadataComponent_ng_template_26_For_10_Template, 2, 2, "th", 22, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "tr");
    \u0275\u0275repeaterCreate(12, MetadataComponent_ng_template_26_For_13_Template, 2, 5, "th", 23, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "compare.pageOptions.page"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 4, "common.approved"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.groups());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.columns());
  }
}
function MetadataComponent_ng_template_27_For_18_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275element(2, "i", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("aidaTooltip", \u0275\u0275pipeBind1(1, 1, "common.noChange"));
  }
}
function MetadataComponent_ng_template_27_For_18_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r10 = \u0275\u0275nextContext().$implicit;
    const row_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("text-red-500", ctx_r2.isRed(row_r9[column_r10.key].content, row_r9.label, column_r10.key));
    \u0275\u0275property("aidaTooltip", \u0275\u0275pipeBind1(1, 4, ctx_r2.tooltip(row_r9[column_r10.key].content, row_r9.label, column_r10.key)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r9[column_r10.key].content, " ");
  }
}
function MetadataComponent_ng_template_27_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275conditionalCreate(1, MetadataComponent_ng_template_27_For_18_Conditional_1_Template, 3, 3, "span", 38)(2, MetadataComponent_ng_template_27_For_18_Conditional_2_Template, 3, 6, "span", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r10 = ctx.$implicit;
    const row_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("border-left-1", !column_r10.isGroupStart)("border-left-3", column_r10.isGroupStart);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r9[column_r10.key].content === "noChange" ? 1 : 2);
  }
}
function MetadataComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 25)(1, "td", 26);
    \u0275\u0275element(2, "p-tableCheckbox", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 28)(4, "div", 29)(5, "span", 30);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 31);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 32);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "td", 33)(12, "div", 34);
    \u0275\u0275listener("click", function MetadataComponent_ng_template_27_Template_div_click_12_listener($event) {
      const row_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      $event.stopPropagation();
      ctx_r2.noPreviewPath.set(row_r9.label[ctx_r2.uiLang()].path);
      return \u0275\u0275resetView(ctx_r2.updateApproval(!row_r9.approved, row_r9.label[ctx_r2.uiLang()].path));
    })("keydown.enter", function MetadataComponent_ng_template_27_Template_div_keydown_enter_12_listener($event) {
      const row_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r2.updateApproval(!row_r9.approved, row_r9.label[ctx_r2.uiLang()].path));
    })("mouseenter", function MetadataComponent_ng_template_27_Template_div_mouseenter_12_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onToggleEnter(row_r9.label[ctx_r2.uiLang()].path));
    })("mouseleave", function MetadataComponent_ng_template_27_Template_div_mouseleave_12_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.noPreviewPath.set(null));
    });
    \u0275\u0275element(13, "i", 35)(14, "i", 36);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(17, MetadataComponent_ng_template_27_For_18_Template, 3, 5, "td", 37, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = ctx.$implicit;
    const rowIndex_r11 = ctx.rowIndex;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(row_r9.style);
    \u0275\u0275property("pSelectableRow", row_r9)("pSelectableRowIndex", rowIndex_r11);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", row_r9);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(row_r9.label[ctx_r2.uiLang()].doubleH1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.label[ctx_r2.uiLang()].h1);
    \u0275\u0275advance();
    \u0275\u0275property("aidaTooltip", row_r9.label[ctx_r2.uiLang()].path);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate("/" + row_r9.label[ctx_r2.uiLang()].path.split("/").pop());
    \u0275\u0275advance(2);
    \u0275\u0275classProp("no-preview", ctx_r2.noPreviewPath() === row_r9.label[ctx_r2.uiLang()].path);
    \u0275\u0275property("ngClass", ctx_r2.approvalClasses(row_r9.approved));
    \u0275\u0275advance();
    \u0275\u0275classMap(row_r9.approved ? "pi-check-circle text-green-500" : "pi-circle text-red-500");
    \u0275\u0275advance();
    \u0275\u0275classMap(row_r9.approved ? "pi-circle text-green-500" : "pi-check-circle text-red-500");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 17, "metadata.status." + ctx_r2.approvalStatus(row_r9)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.columns());
  }
}
function MetadataComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 42);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r2.columns().length + 2);
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
  approvalClasses(approved) {
    const isDark = this.settingsService.darkMode();
    const classes = isDark && approved ? "hover:bg-green-600 hover:border-green-400 text-green-400" : isDark ? "hover:bg-red-600 hover:border-red-400 text-red-400" : approved ? "hover:bg-green-50 hover:border-green-500 text-green-500" : "hover:bg-red-50 hover:border-red-500 text-red-500";
    return classes;
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
  }, decls: 30, vars: 30, consts: [["dt", ""], ["body", ""], ["id", "wb-cont"], [1, "flex", "flex-column", "gap-2"], [1, "flex", "gap-2", "align-items-end"], [3, "compareMode"], [3, "allowBoth", "showLang"], [1, "flex", "flex-wrap", "gap-2", "align-items-end"], [3, "allowBoth", "showMeta"], [3, "allowBoth", "showFilter"], ["id", "search", "pInputText", "", "type", "text", 1, "min-w-min", "md:min-w-max", "w-full", 3, "ngModelChange", "input", "ngModel", "placeholder"], [1, "pi", "pi-search"], ["selectionMode", "multiple", "stripedRows", "", 3, "selectionChange", "selection", "globalFilterFields", "paginator", "rows", "rowsPerPageOptions", "scrollable", "value"], ["pTemplate", "header"], ["pTemplate", "emptymessage"], [1, "mb-0"], [1, "flex", "gap-2", "h-full"], ["styleClass", "flex-1", 1, "flex-1", "flex", "flex-column", 3, "legend"], [3, "changed", "meta"], ["rowspan", "2", 1, "sticky-table", "sticky-table-group-header", "sticky-table-checkbox"], ["rowspan", "2", 1, "text-xl", "sticky-table", "sticky-table-group-header", "sticky-table-column"], ["rowspan", "2", 1, "text-xl", "border-left-3"], [1, "text-lg", "border-left-3", "sticky-table", "sticky-table-group-header"], [1, "sticky-table", "sticky-table-header", 3, "border-left-1", "border-left-3"], [1, "sticky-table", "sticky-table-header"], [3, "pSelectableRow", "pSelectableRowIndex"], [1, "sticky-table", "sticky-table-checkbox", "border-bottom-1", "border-300"], [3, "value"], [1, "sticky-table", "sticky-table-column", "border-bottom-1", "border-300", "py-2", "px-3"], [1, "flex", "flex-column", "text-left"], [1, "text-lg", "font-medium", "text-color-secondary"], [1, "text-xl"], [1, "text-sm", "font-medium", "text-color-secondary", "white-space-nowrap", 3, "aidaTooltip"], [1, "border-left-3"], ["tabindex", "0", 1, "flex", "align-items-center", "gap-3", "p-1", "border-round", "border-1", "border-transparent", "icon-toggle", 3, "click", "keydown.enter", "mouseenter", "mouseleave", "ngClass"], [1, "icon-current", "pi", "text-5xl", "mt-1"], [1, "icon-preview", "pi", "text-5xl", "mt-1"], [3, "border-left-1", "border-left-3"], [1, "flex", "justify-content-center", 3, "aidaTooltip"], [3, "aidaTooltip", "text-red-500"], [1, "pi", "pi-minus", "text-xl", "text-color-secondary"], [3, "aidaTooltip"], [1, "text-center", "p-4"]], template: function MetadataComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "h1", 2);
      \u0275\u0275text(1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 3)(5, "div", 4);
      \u0275\u0275element(6, "aida-compare-select", 5)(7, "aida-project-settings", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(8, MetadataComponent_Conditional_8_Template, 5, 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 3)(10, "h2");
      \u0275\u0275text(11, "Metadata for all in-scope pages");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 7)(13, "div")(14, "span");
      \u0275\u0275text(15);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(16, "aida-project-settings", 6)(17, "aida-project-settings", 8);
      \u0275\u0275elementStart(18, "aida-project-settings", 9)(19, "p-iconfield")(20, "input", 10);
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function MetadataComponent_Template_input_ngModelChange_20_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("input", function MetadataComponent_Template_input_input_20_listener($event) {
        \u0275\u0275restoreView(_r1);
        const dt_r5 = \u0275\u0275reference(25);
        return \u0275\u0275resetView(dt_r5.filterGlobal(ctx.normalizeSearchValue($event.target.value), "contains"));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(22, "p-inputicon", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(23, MetadataComponent_Conditional_23_Template, 3, 7, "span");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "p-table", 12, 0);
      \u0275\u0275twoWayListener("selectionChange", function MetadataComponent_Template_p_table_selectionChange_24_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedNodes, $event) || (ctx.selectedNodes = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(26, MetadataComponent_ng_template_26_Template, 14, 6, "ng-template", 13)(27, MetadataComponent_ng_template_27_Template, 19, 19, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(29, MetadataComponent_ng_template_29_Template, 4, 4, "ng-template", 14);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      const dt_r5 = \u0275\u0275reference(25);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 26, "metadata._title"));
      \u0275\u0275advance(3);
      \u0275\u0275classMap(ctx.styleCardService.cardStyles());
      \u0275\u0275advance(2);
      \u0275\u0275property("compareMode", "page only");
      \u0275\u0275advance();
      \u0275\u0275property("allowBoth", true)("showLang", true);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.selectedNode() ? 8 : -1);
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
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(21, 28, "common.search"));
      \u0275\u0275advance(3);
      \u0275\u0275conditional(dt_r5.filteredValue ? 23 : -1);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("selection", ctx.selectedNodes);
      \u0275\u0275property("globalFilterFields", ctx.filterFields())("paginator", ctx.visibleRows().length > 25)("rows", 50)("rowsPerPageOptions", ctx.rowsPerPageOptions)("scrollable", false)("value", ctx.visibleRows());
    }
  }, dependencies: [
    CommonModule,
    NgClass,
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
      <aida-compare-select [compareMode]="'page only'" />
      <aida-project-settings [allowBoth]="true" [showLang]="true" />
    </div>
    @if (selectedNode()) {
      <h2 class="mb-0">Edit prototype metadata</h2>
      <div class="flex gap-2 h-full">
        @if (projectCache.selectedLang() !== 'fr') {
          @if (selectedNode()?.data?.prototype?.en; as meta) {
            <p-fieldset [legend]="'common.language.english' | translate" class="flex-1 flex flex-column" styleClass="flex-1">
              <aida-edit-metadata [meta]="meta" (changed)="onMetaChanged()" />
            </p-fieldset>
          }
        }
        @if (projectCache.selectedLang() !== 'en') {
          @if (selectedNode()?.data?.prototype?.fr; as meta) {
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
              [ngClass]="approvalClasses(row.approved)"
              (click)="$event.stopPropagation(); noPreviewPath.set(row.label[uiLang()].path); updateApproval(!row.approved, row.label[uiLang()].path)"
              (keydown.enter)="$event.stopPropagation(); updateApproval(!row.approved, row.label[uiLang()].path)"
              (mouseenter)="onToggleEnter(row.label[uiLang()].path)"
              (mouseleave)="noPreviewPath.set(null)"
              class="flex align-items-center gap-3 p-1 border-round border-1 border-transparent icon-toggle"
              tabindex="0"
            >
              <i [class]="row.approved ? 'pi-check-circle text-green-500' : 'pi-circle text-red-500'" class="icon-current pi text-5xl mt-1"></i>
              <i [class]="row.approved ? 'pi-circle text-green-500' : 'pi-check-circle text-red-500'" class="icon-preview pi text-5xl mt-1"></i>
              {{ 'metadata.status.' + approvalStatus(row) | translate }}
            </div>
          </td>
          @for (column of columns(); track column.key) {
            <td [class.border-left-1]="!column.isGroupStart" [class.border-left-3]="column.isGroupStart">
              @if (row[column.key].content === 'noChange') {
                <span [aidaTooltip]="'common.noChange' | translate" class="flex justify-content-center"><i class="pi pi-minus text-xl text-color-secondary"></i></span>
              } @else {
                <span [aidaTooltip]="tooltip(row[column.key].content, row.label, column.key) | translate" [class.text-red-500]="isRed(row[column.key].content, row.label, column.key)">
                  {{ row[column.key].content }}
                </span>
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
//# sourceMappingURL=chunk-QBPSYVKJ.js.map
