import {
  compareHidden
} from "./chunk-CT3F4ZWS.js";
import {
  CompareSelectComponent
} from "./chunk-6TNTAII3.js";
import {
  CompareService
} from "./chunk-QJ4UUPB2.js";
import {
  AI_PAID_MODELS,
  OpenRouterService,
  ToolsPromptKey,
  ToolsPrompts
} from "./chunk-GVX5GQYP.js";
import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  TabsModule
} from "./chunk-XNRBXGSS.js";
import {
  StyleCardService
} from "./chunk-KT52MSVV.js";
import {
  Table,
  TableModule
} from "./chunk-3ZZN3K4H.js";
import {
  Dialog,
  DialogModule
} from "./chunk-Q47GRJIM.js";
import {
  Message,
  MessageModule
} from "./chunk-BNXTMTI4.js";
import {
  AidaLinks
} from "./chunk-XWAYHBXQ.js";
import {
  ProjectStateService
} from "./chunk-DKQHHEVD.js";
import {
  HtmlNormalizationService
} from "./chunk-KXKV56UQ.js";
import {
  ToggleButton,
  ToggleButtonModule
} from "./chunk-AXH6GVPS.js";
import {
  FetchService
} from "./chunk-6PPBJKXF.js";
import {
  marker
} from "./chunk-NJX644NS.js";
import {
  Badge,
  BadgeModule,
  Button,
  ButtonModule,
  DomSanitizer,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgTemplateOutlet,
  RouterLink
} from "./chunk-WQJJFENA.js";
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Injectable,
  Injector,
  Input,
  TranslatePipe,
  ViewChild,
  afterNextRender,
  computed,
  effect,
  inject,
  input,
  setClassMetadata,
  signal,
  untracked,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryAdvance,
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstoreLet,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuerySignal
} from "./chunk-MB4XCYRB.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-YCXP4XZS.js";

// src/app/views/tasks/compare-languages/compare-languages.service.ts
var ReviewLanguagesService = class _ReviewLanguagesService {
  // Track AI jobs
  aiResponses = signal(/* @__PURE__ */ new Map(), ...ngDevMode ? [{ debugName: "aiResponses" }] : (
    /* istanbul ignore next */
    []
  ));
  static NO_DIFFS = [];
  getAiResponse(path) {
    return this.aiResponses().get(path) ?? _ReviewLanguagesService.NO_DIFFS;
  }
  setAiResponse(path, differences) {
    const map = new Map(this.aiResponses());
    map.set(path, differences);
    this.aiResponses.set(map);
  }
  aiJobs = signal(/* @__PURE__ */ new Map(), ...ngDevMode ? [{ debugName: "aiJobs" }] : (
    /* istanbul ignore next */
    []
  ));
  getAiJobStatus(path) {
    return this.aiJobs().get(path);
  }
  setAiJobStatus(path, status) {
    const map = new Map(this.aiJobs());
    map.set(path, status);
    this.aiJobs.set(map);
  }
  clearAiJobStatus(path) {
    const map = new Map(this.aiJobs());
    map.delete(path);
    this.aiJobs.set(map);
  }
  static \u0275fac = function ReviewLanguagesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReviewLanguagesService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReviewLanguagesService, factory: _ReviewLanguagesService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReviewLanguagesService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/views/tasks/compare-languages/compare-ai/compare-ai.component.ts
function CompareAiLangComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-message", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "languages.is404"));
  }
}
function CompareAiLangComponent_Case_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "i", 8);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275element(5, "span", 9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "compare.waitingForAI"));
  }
}
function CompareAiLangComponent_Case_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-message", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "languages.aiError"));
  }
}
function CompareAiLangComponent_Case_14_Conditional_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 12);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th", 12);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 12);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "inventory.header.issue"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 5, "common.language.english"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 7, "common.language.french"));
  }
}
function CompareAiLangComponent_Case_14_Conditional_1_ng_template_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const diff_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", diff_r1.english, " ");
  }
}
function CompareAiLangComponent_Case_14_Conditional_1_ng_template_3_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 13);
  }
}
function CompareAiLangComponent_Case_14_Conditional_1_ng_template_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const diff_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", diff_r1.french, " ");
  }
}
function CompareAiLangComponent_Case_14_Conditional_1_ng_template_3_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 13);
  }
}
function CompareAiLangComponent_Case_14_Conditional_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275conditionalCreate(4, CompareAiLangComponent_Case_14_Conditional_1_ng_template_3_Conditional_4_Template, 1, 1)(5, CompareAiLangComponent_Case_14_Conditional_1_ng_template_3_Conditional_5_Template, 1, 0, "i", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275conditionalCreate(7, CompareAiLangComponent_Case_14_Conditional_1_ng_template_3_Conditional_7_Template, 1, 1)(8, CompareAiLangComponent_Case_14_Conditional_1_ng_template_3_Conditional_8_Template, 1, 0, "i", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const diff_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(diff_r1.issue);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(diff_r1.english ? 4 : 5);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("lang", "fr");
    \u0275\u0275advance();
    \u0275\u0275conditional(diff_r1.french ? 7 : 8);
  }
}
function CompareAiLangComponent_Case_14_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-table", 10);
    \u0275\u0275template(1, CompareAiLangComponent_Case_14_Conditional_1_ng_template_1_Template, 10, 9, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, CompareAiLangComponent_Case_14_Conditional_1_ng_template_3_Template, 9, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const diffs_r2 = \u0275\u0275readContextLet(0);
    \u0275\u0275property("value", diffs_r2);
  }
}
function CompareAiLangComponent_Case_14_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-message", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "languages.noDiffs"));
  }
}
function CompareAiLangComponent_Case_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275conditionalCreate(1, CompareAiLangComponent_Case_14_Conditional_1_Template, 5, 1, "p-table", 10)(2, CompareAiLangComponent_Case_14_Conditional_2_Template, 3, 3, "p-message", 11);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    const diffs_r4 = \u0275\u0275storeLet(ctx_r2.reviewLanguagesService.getAiResponse(ctx_r2.compareService.selectedPage()));
    \u0275\u0275advance();
    \u0275\u0275conditional(diffs_r4.length > 0 ? 1 : 2);
  }
}
var CompareAiLangComponent = class _CompareAiLangComponent {
  reviewLanguagesService = inject(ReviewLanguagesService);
  compareService = inject(CompareService);
  openRouterService = inject(OpenRouterService);
  aiEnglish = input("", ...ngDevMode ? [{ debugName: "aiEnglish" }] : (
    /* istanbul ignore next */
    []
  ));
  aiFrench = input("", ...ngDevMode ? [{ debugName: "aiFrench" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Input to track if selected page is 404 */
  is404 = input(false, ...ngDevMode ? [{ debugName: "is404" }] : (
    /* istanbul ignore next */
    []
  ));
  //AI difference summary
  getSummary() {
    return __async(this, null, function* () {
      const path = this.compareService.selectedPage();
      this.reviewLanguagesService.setAiJobStatus(path, "pending");
      try {
        const content = `### English HTML
${this.aiEnglish()}
### French HTML
${this.aiFrench()}`;
        console.log("AI request start", path);
        const response = yield this.openRouterService.getTextFromAI(ToolsPrompts[ToolsPromptKey.Languages], content, AI_PAID_MODELS[0].value);
        console.log("AI response received", response);
        this.reviewLanguagesService.setAiResponse(path, this.parseDifferences(response));
        this.reviewLanguagesService.setAiJobStatus(path, "done");
      } catch (error) {
        console.error("AI summary failed", error);
        this.reviewLanguagesService.setAiJobStatus(path, "error");
      }
    });
  }
  parseDifferences(response) {
    try {
      const cleaned = response.replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(cleaned);
      if (!this.isRecord(parsed) || !Array.isArray(parsed["differences"]))
        return [];
      return parsed["differences"].filter(this.isRecord).flatMap((d) => typeof d["issue"] === "string" ? [
        {
          english: typeof d["english"] === "string" ? d["english"] : "",
          french: typeof d["french"] === "string" ? d["french"] : "",
          issue: d["issue"]
        }
      ] : []);
    } catch (error) {
      console.error("Could not parse AI response", error);
      return [];
    }
  }
  isRecord(value) {
    return typeof value === "object" && value !== null;
  }
  static \u0275fac = function CompareAiLangComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CompareAiLangComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompareAiLangComponent, selectors: [["aida-compare-ai-lang"]], inputs: { aiEnglish: [1, "aiEnglish"], aiFrench: [1, "aiFrench"], is404: [1, "is404"] }, decls: 15, vars: 14, consts: [["header", ""], ["body", ""], [1, "flex", "justify-content-between", "gap-2"], [1, "mt-0"], ["icon", "pi pi-sparkles", "styleClass", "secondary-outline", 3, "onClick", "disabled", "label", "loading", "outlined"], ["icon", "pi pi-times-circle font-bold", "severity", "error"], ["role", "status", 1, "mt-2"], [1, "flex", "justify-content-center", "align-items-center", "gap-2"], [1, "pi", "pi-spinner", "pi-spin", "text-5xl", "text-primary"], [1, "loading-dots"], ["scrollable", "", "scrollHeight", "30rem", "size", "small", "stripedRows", "", 3, "value"], ["icon", "pi pi-check-circle font-bold", "severity", "success"], [1, "w-4"], [1, "pi", "pi-minus", "text-xl"]], template: function CompareAiLangComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "div")(2, "h2", 3);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "p-button", 4);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275listener("onClick", function CompareAiLangComponent_Template_p_button_onClick_8_listener() {
        return ctx.getSummary();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(10, CompareAiLangComponent_Conditional_10_Template, 3, 3, "p-message", 5);
      \u0275\u0275elementStart(11, "div", 6);
      \u0275\u0275conditionalCreate(12, CompareAiLangComponent_Case_12_Template, 6, 3, "div", 7)(13, CompareAiLangComponent_Case_13_Template, 3, 3, "p-message", 5)(14, CompareAiLangComponent_Case_14_Template, 3, 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_8_0;
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 8, "languages.aiSummary.header"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 10, "languages.aiSummary.description"));
      const status_r5 = ctx.reviewLanguagesService.getAiJobStatus(ctx.compareService.selectedPage());
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.is404())("label", \u0275\u0275pipeBind1(9, 12, "languages.generateSummary"))("loading", status_r5 === "pending")("outlined", status_r5);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.is404() ? 10 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional((tmp_8_0 = status_r5) === "pending" ? 12 : tmp_8_0 === "error" ? 13 : tmp_8_0 === "done" ? 14 : -1);
    }
  }, dependencies: [ButtonModule, Button, MessageModule, Message, TableModule, Table, TranslatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompareAiLangComponent, [{
    type: Component,
    args: [{ selector: "aida-compare-ai-lang", imports: [TranslatePipe, ButtonModule, MessageModule, TableModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="flex justify-content-between gap-2">
  <div>
    <h2 class="mt-0">{{ 'languages.aiSummary.header' | translate }}</h2>
    <p>{{ 'languages.aiSummary.description' | translate }}</p>
  </div>
  @let status = reviewLanguagesService.getAiJobStatus(compareService.selectedPage());
  <p-button
    [disabled]="is404()"
    [label]="'languages.generateSummary' | translate"
    [loading]="status === 'pending'"
    [outlined]="status"
    (onClick)="getSummary()"
    icon="pi pi-sparkles"
    styleClass="secondary-outline"
  />
</div>
@if (is404()) {
  <p-message icon="pi pi-times-circle font-bold" severity="error">{{ 'languages.is404' | translate }}</p-message>
}
<div class="mt-2" role="status">
  @switch (status) {
    @case ('pending') {
      <div class="flex justify-content-center align-items-center gap-2">
        <i class="pi pi-spinner pi-spin text-5xl text-primary"></i><span>{{ 'compare.waitingForAI' | translate }}<span class="loading-dots"></span></span>
      </div>
    }
    @case ('error') {
      <p-message icon="pi pi-times-circle font-bold" severity="error">{{ 'languages.aiError' | translate }}</p-message>
    }
    @case ('done') {
      @let diffs = reviewLanguagesService.getAiResponse(compareService.selectedPage());
      @if (diffs.length > 0) {
        <p-table [value]="diffs" scrollable scrollHeight="30rem" size="small" stripedRows>
          <ng-template #header>
            <tr>
              <th class="w-4">{{ 'inventory.header.issue' | translate }}</th>
              <th class="w-4">{{ 'common.language.english' | translate }}</th>
              <th class="w-4">{{ 'common.language.french' | translate }}</th>
            </tr>
          </ng-template>
          <ng-template #body let-diff>
            <tr>
              <td>{{ diff.issue }}</td>
              <td>
                @if (diff.english) {
                  {{ diff.english }}
                } @else {
                  <i class="pi pi-minus text-xl"></i>
                }
              </td>
              <td [attr.lang]="'fr'">
                @if (diff.french) {
                  {{ diff.french }}
                } @else {
                  <i class="pi pi-minus text-xl"></i>
                }
              </td>
            </tr>
          </ng-template>
        </p-table>
      } @else {
        <p-message icon="pi pi-check-circle font-bold" severity="success">{{ 'languages.noDiffs' | translate }}</p-message>
      }
    }
  }
</div>
` }]
  }], null, { aiEnglish: [{ type: Input, args: [{ isSignal: true, alias: "aiEnglish", required: false }] }], aiFrench: [{ type: Input, args: [{ isSignal: true, alias: "aiFrench", required: false }] }], is404: [{ type: Input, args: [{ isSignal: true, alias: "is404", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompareAiLangComponent, { className: "CompareAiLangComponent", filePath: "src/app/views/tasks/compare-languages/compare-ai/compare-ai.component.ts", lineNumber: 23 });
})();

// src/app/views/tasks/compare-languages/compare-data/compare-data.component.ts
var _c0 = (a0, a1) => ({ title: "baseline", rows: a0, loading: a1 });
var _c1 = (a0, a1) => ({ title: "prototype", rows: a0, loading: a1 });
var _c2 = (a0, a1) => ({ title: "live", rows: a0, loading: a1 });
function CompareDataComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const listItem_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(listItem_r1);
  }
}
function CompareDataComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 10);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const mismatchTable_r3 = \u0275\u0275reference(25);
    \u0275\u0275property("ngTemplateOutlet", mismatchTable_r3)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c0, ctx_r1.selectedBase(), ctx_r1.projectState.refreshing().baseline));
  }
}
function CompareDataComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 10);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const mismatchTable_r3 = \u0275\u0275reference(25);
    \u0275\u0275property("ngTemplateOutlet", mismatchTable_r3)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c1, ctx_r1.selectedProto(), ctx_r1.projectState.refreshing().prototype));
  }
}
function CompareDataComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 10);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const mismatchTable_r3 = \u0275\u0275reference(25);
    \u0275\u0275property("ngTemplateOutlet", mismatchTable_r3)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c2, ctx_r1.selectedLive(), ctx_r1.projectState.refreshing().live));
  }
}
function CompareDataComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-message", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "pageOptions.description.0"));
  }
}
function CompareDataComponent_ng_template_24_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 13);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th", 14);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 14);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "common.data"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 5, "common.language.english"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 7, "common.language.french"));
  }
}
function CompareDataComponent_ng_template_24_ng_template_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 15);
  }
}
function CompareDataComponent_ng_template_24_ng_template_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const row_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "inventory.header." + row_r4.label), " ");
  }
}
function CompareDataComponent_ng_template_24_ng_template_6_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 15);
  }
}
function CompareDataComponent_ng_template_24_ng_template_6_Conditional_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const row_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, row_r4.en), " ");
  }
}
function CompareDataComponent_ng_template_24_ng_template_6_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 16);
  }
}
function CompareDataComponent_ng_template_24_ng_template_6_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CompareDataComponent_ng_template_24_ng_template_6_Conditional_6_Conditional_0_Template, 2, 3)(1, CompareDataComponent_ng_template_24_ng_template_6_Conditional_6_Conditional_1_Template, 1, 0, "i", 16);
  }
  if (rf & 2) {
    const row_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(row_r4.en ? 0 : 1);
  }
}
function CompareDataComponent_ng_template_24_ng_template_6_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 15);
  }
}
function CompareDataComponent_ng_template_24_ng_template_6_Conditional_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const row_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, row_r4.fr), " ");
  }
}
function CompareDataComponent_ng_template_24_ng_template_6_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 16);
  }
}
function CompareDataComponent_ng_template_24_ng_template_6_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CompareDataComponent_ng_template_24_ng_template_6_Conditional_9_Conditional_0_Template, 2, 3)(1, CompareDataComponent_ng_template_24_ng_template_6_Conditional_9_Conditional_1_Template, 1, 0, "i", 16);
  }
  if (rf & 2) {
    const row_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(row_r4.fr ? 0 : 1);
  }
}
function CompareDataComponent_ng_template_24_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275conditionalCreate(2, CompareDataComponent_ng_template_24_ng_template_6_Conditional_2_Template, 1, 0, "i", 15)(3, CompareDataComponent_ng_template_24_ng_template_6_Conditional_3_Template, 2, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275conditionalCreate(5, CompareDataComponent_ng_template_24_ng_template_6_Conditional_5_Template, 1, 0, "i", 15)(6, CompareDataComponent_ng_template_24_ng_template_6_Conditional_6_Template, 2, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275conditionalCreate(8, CompareDataComponent_ng_template_24_ng_template_6_Conditional_8_Template, 1, 0, "i", 15)(9, CompareDataComponent_ng_template_24_ng_template_6_Conditional_9_Template, 2, 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const loading_r5 = \u0275\u0275nextContext().loading;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(loading_r5 ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(loading_r5 ? 5 : 6);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(loading_r5 ? 8 : 9);
  }
}
function CompareDataComponent_ng_template_24_ng_template_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 15);
  }
}
function CompareDataComponent_ng_template_24_ng_template_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "languages.noMismatch"), " ");
  }
}
function CompareDataComponent_ng_template_24_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 17);
    \u0275\u0275conditionalCreate(2, CompareDataComponent_ng_template_24_ng_template_8_Conditional_2_Template, 1, 0, "i", 15)(3, CompareDataComponent_ng_template_24_ng_template_8_Conditional_3_Template, 2, 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const loading_r5 = \u0275\u0275nextContext().loading;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(loading_r5 ? 2 : 3);
  }
}
function CompareDataComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-table", 12);
    \u0275\u0275template(4, CompareDataComponent_ng_template_24_ng_template_4_Template, 10, 9, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(6, CompareDataComponent_ng_template_24_ng_template_6_Template, 10, 3, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(8, CompareDataComponent_ng_template_24_ng_template_8_Template, 4, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rows_r6 = ctx.rows;
    const title_r7 = ctx.title;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, "common.version." + title_r7));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", rows_r6);
  }
}
var CompareDataComponent = class _CompareDataComponent {
  projectState = inject(ProjectStateService);
  compareService = inject(CompareService);
  selectedNode = input(void 0, ...ngDevMode ? [{ debugName: "selectedNode" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedBase = input(void 0, ...ngDevMode ? [{ debugName: "selectedBase" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedProto = input(void 0, ...ngDevMode ? [{ debugName: "selectedProto" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedLive = input(void 0, ...ngDevMode ? [{ debugName: "selectedLive" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Input to track if selected page is 404 */
  is404 = input(false, ...ngDevMode ? [{ debugName: "is404" }] : (
    /* istanbul ignore next */
    []
  ));
  noRefresh = computed(() => {
    const version = this.compareService.selectedSource();
    const live = this.is404() && version === "live";
    const proto = this.is404() && version.startsWith("proto");
    return { live, proto };
  }, ...ngDevMode ? [{ debugName: "noRefresh" }] : (
    /* istanbul ignore next */
    []
  ));
  refresh(version) {
    return __async(this, null, function* () {
      const node = this.selectedNode();
      if (!node)
        return;
      const repoType = this.projectState.getProject().repoType === "github" ? "GH" : "UT";
      const urlVersion = version === "live" ? "live" : version === "prototype" ? `proto${repoType}` : `base${repoType}`;
      this.projectState.refreshing.update((r) => __spreadProps(__spreadValues({}, r), { [version]: true }));
      yield this.projectState.refreshNode(node, urlVersion);
      this.projectState.refreshing.update((r) => __spreadProps(__spreadValues({}, r), { [version]: false }));
    });
  }
  markForTranslations() {
    marker("languages.dataCompare.description.list");
  }
  static \u0275fac = function CompareDataComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CompareDataComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompareDataComponent, selectors: [["aida-compare-data"]], inputs: { selectedNode: [1, "selectedNode"], selectedBase: [1, "selectedBase"], selectedProto: [1, "selectedProto"], selectedLive: [1, "selectedLive"], is404: [1, "is404"] }, decls: 26, vars: 25, consts: [["mismatchTable", ""], ["header", ""], ["body", ""], ["emptymessage", ""], [1, "flex", "justify-content-between", "gap-2"], [1, "mt-0"], [1, "mb-1"], [1, "mt-1"], [1, "flex", "flex-column", "gap-2"], ["fluid", "", "icon", "pi pi-refresh", "outlined", "", "styleClass", "secondary-outline min-w-15rem", 3, "onClick", "disabled", "label", "loading"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["icon", "pi pi-info-circle", "severity", "info"], ["size", "small", "stripedRows", "", 3, "value"], [1, "w-2"], [1, "w-5"], [1, "pi", "pi-spinner", "pi-spin", "text-xl"], [1, "pi", "pi-minus", "text-xl"], ["colspan", "3", 1, "text-center"]], template: function CompareDataComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 4)(1, "div")(2, "h2", 5);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 6);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "ul", 7);
      \u0275\u0275repeaterCreate(9, CompareDataComponent_For_10_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "p");
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 8)(16, "p-button", 9);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275listener("onClick", function CompareDataComponent_Template_p_button_onClick_16_listener() {
        return ctx.refresh("prototype");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "p-button", 9);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275listener("onClick", function CompareDataComponent_Template_p_button_onClick_18_listener() {
        return ctx.refresh("live");
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(20, CompareDataComponent_Conditional_20_Template, 1, 5, "ng-container", 10);
      \u0275\u0275conditionalCreate(21, CompareDataComponent_Conditional_21_Template, 1, 5, "ng-container", 10);
      \u0275\u0275conditionalCreate(22, CompareDataComponent_Conditional_22_Template, 1, 5, "ng-container", 10);
      \u0275\u0275conditionalCreate(23, CompareDataComponent_Conditional_23_Template, 3, 3, "p-message", 11);
      \u0275\u0275template(24, CompareDataComponent_ng_template_24_Template, 10, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      let tmp_11_0;
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 13, "languages.dataCompare.header"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 15, "languages.dataCompare.description.p1"));
      \u0275\u0275advance(3);
      \u0275\u0275repeater(\u0275\u0275pipeBind1(11, 17, "languages.dataCompare.description.list").split("|"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 19, "languages.dataCompare.description.p2"));
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.noRefresh().proto)("label", \u0275\u0275pipeBind1(17, 21, "languages.refreshProto"))("loading", ctx.projectState.refreshing().prototype);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.noRefresh().live)("label", \u0275\u0275pipeBind1(19, 23, "languages.refreshLive"))("loading", ctx.projectState.refreshing().live);
      const data_r8 = (tmp_11_0 = ctx.selectedNode()) == null ? null : tmp_11_0.data;
      \u0275\u0275advance(2);
      \u0275\u0275conditional((data_r8 == null ? null : data_r8.baseline) ? 20 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((data_r8 == null ? null : data_r8.prototype) ? 21 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((data_r8 == null ? null : data_r8.live) ? 22 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!data_r8 ? 23 : -1);
    }
  }, dependencies: [NgTemplateOutlet, ButtonModule, Button, MessageModule, Message, TableModule, Table, TranslatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompareDataComponent, [{
    type: Component,
    args: [{ selector: "aida-compare-data", imports: [NgTemplateOutlet, TranslatePipe, ButtonModule, MessageModule, TableModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="flex justify-content-between gap-2">
  <div>
    <h2 class="mt-0">{{ 'languages.dataCompare.header' | translate }}</h2>
    <p class="mb-1">{{ 'languages.dataCompare.description.p1' | translate }}</p>
    <ul class="mt-1">
      @for (listItem of ('languages.dataCompare.description.list' | translate).split('|'); track $index) {
        <li>{{ listItem }}</li>
      }
    </ul>
    <p>{{ 'languages.dataCompare.description.p2' | translate }}</p>
  </div>
  <div class="flex flex-column gap-2">
    <p-button
      [disabled]="noRefresh().proto"
      [label]="'languages.refreshProto' | translate"
      [loading]="projectState.refreshing().prototype"
      (onClick)="refresh('prototype')"
      fluid
      icon="pi pi-refresh"
      outlined
      styleClass="secondary-outline min-w-15rem"
    />
    <p-button
      [disabled]="noRefresh().live"
      [label]="'languages.refreshLive' | translate"
      [loading]="projectState.refreshing().live"
      (onClick)="refresh('live')"
      fluid
      icon="pi pi-refresh"
      outlined
      styleClass="secondary-outline min-w-15rem"
    />
  </div>
</div>

@let data = selectedNode()?.data;
@if (data?.baseline) {
  <ng-container [ngTemplateOutlet]="mismatchTable" [ngTemplateOutletContext]="{ title: 'baseline', rows: selectedBase(), loading: projectState.refreshing().baseline }" />
}
@if (data?.prototype) {
  <ng-container [ngTemplateOutlet]="mismatchTable" [ngTemplateOutletContext]="{ title: 'prototype', rows: selectedProto(), loading: projectState.refreshing().prototype }" />
}
@if (data?.live) {
  <ng-container [ngTemplateOutlet]="mismatchTable" [ngTemplateOutletContext]="{ title: 'live', rows: selectedLive(), loading: projectState.refreshing().live }" />
}
@if (!data) {
  <p-message icon="pi pi-info-circle" severity="info">{{ 'pageOptions.description.0' | translate }}</p-message>
}
<ng-template #mismatchTable let-loading="loading" let-rows="rows" let-title="title">
  <h3>{{ 'common.version.' + title | translate }}</h3>
  <p-table [value]="rows" size="small" stripedRows>
    <ng-template #header>
      <tr>
        <th class="w-2">{{ 'common.data' | translate }}</th>
        <th class="w-5">{{ 'common.language.english' | translate }}</th>
        <th class="w-5">{{ 'common.language.french' | translate }}</th>
      </tr>
    </ng-template>
    <ng-template #body let-row>
      <tr>
        <td>
          @if (loading) {
            <i class="pi pi-spinner pi-spin text-xl"></i>
          } @else {
            {{ 'inventory.header.' + row.label | translate }}
          }
        </td>
        <td>
          @if (loading) {
            <i class="pi pi-spinner pi-spin text-xl"></i>
          } @else {
            @if (row.en) {
              {{ row.en | translate }}
            } @else {
              <i class="pi pi-minus text-xl"></i>
            }
          }
        </td>
        <td>
          @if (loading) {
            <i class="pi pi-spinner pi-spin text-xl"></i>
          } @else {
            @if (row.fr) {
              {{ row.fr | translate }}
            } @else {
              <i class="pi pi-minus text-xl"></i>
            }
          }
        </td>
      </tr>
    </ng-template>
    <ng-template #emptymessage>
      <tr>
        <td class="text-center" colspan="3">
          @if (loading) {
            <i class="pi pi-spinner pi-spin text-xl"></i>
          } @else {
            {{ 'languages.noMismatch' | translate }}
          }
        </td>
      </tr>
    </ng-template>
  </p-table>
</ng-template>
` }]
  }], null, { selectedNode: [{ type: Input, args: [{ isSignal: true, alias: "selectedNode", required: false }] }], selectedBase: [{ type: Input, args: [{ isSignal: true, alias: "selectedBase", required: false }] }], selectedProto: [{ type: Input, args: [{ isSignal: true, alias: "selectedProto", required: false }] }], selectedLive: [{ type: Input, args: [{ isSignal: true, alias: "selectedLive", required: false }] }], is404: [{ type: Input, args: [{ isSignal: true, alias: "is404", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompareDataComponent, { className: "CompareDataComponent", filePath: "src/app/views/tasks/compare-languages/compare-data/compare-data.component.ts", lineNumber: 25 });
})();

// src/app/views/tasks/compare-languages/compare-hidden/compare-hidden.component.ts
function CompareHiddenComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-message", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "languages.is404"));
  }
}
function CompareHiddenComponent_Conditional_12_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th", 8);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 9);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 9);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "languages.hidden.forWho"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 6, "common.name"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 8, "common.language.english"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 10, "common.language.french"));
  }
}
function CompareHiddenComponent_Conditional_12_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td")(5, "code");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r1 = ctx.$implicit;
    \u0275\u0275classMap(row_r1.status !== "ok" ? "bg-red text-red" : null);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 6, "languages.hidden.user." + row_r1.type));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(row_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1.en);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1.fr);
  }
}
function CompareHiddenComponent_Conditional_12_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "languages.noMismatch"));
  }
}
function CompareHiddenComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-table", 7);
    \u0275\u0275template(1, CompareHiddenComponent_Conditional_12_ng_template_1_Template, 13, 12, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, CompareHiddenComponent_Conditional_12_ng_template_3_Template, 11, 8, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(5, CompareHiddenComponent_Conditional_12_ng_template_5_Template, 4, 3, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r1.visibleHiddenRows());
  }
}
var CompareHiddenComponent = class _CompareHiddenComponent {
  /** Input signal with all table rows */
  hiddenRows = input([], ...ngDevMode ? [{ debugName: "hiddenRows" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Input to track if selected page is 404 */
  is404 = input(false, ...ngDevMode ? [{ debugName: "is404" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Signal to show html mismatches */
  hiddenDiffsOnly = signal(true, ...ngDevMode ? [{ debugName: "hiddenDiffsOnly" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Shows all or mismatched counts of html elements, classes, and attributes in English and French */
  visibleHiddenRows = computed(() => this.hiddenDiffsOnly() ? this.hiddenRows().filter((r) => r.status !== "ok") : this.hiddenRows(), ...ngDevMode ? [{ debugName: "visibleHiddenRows" }] : (
    /* istanbul ignore next */
    []
  ));
  markForTranslation() {
    marker("languages.hidden.user.all");
    marker("languages.hidden.user.visual");
    marker("languages.hidden.user.screenreaders");
    marker("languages.hidden.user.web");
    marker("languages.hidden.user.print");
    marker("languages.hidden.user.responsive");
  }
  static \u0275fac = function CompareHiddenComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CompareHiddenComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompareHiddenComponent, selectors: [["aida-compare-hidden"]], inputs: { hiddenRows: [1, "hiddenRows"], is404: [1, "is404"] }, decls: 13, vars: 14, consts: [["header", ""], ["body", ""], ["emptymessage", ""], [1, "flex", "justify-content-between", "gap-2"], [1, "mt-0"], ["offIcon", "pi pi-filter-slash", "onIcon", "pi pi-filter", 1, "h-2.75rem", "w-14rem", "min-w-max", 3, "ngModelChange", "ngModel", "offLabel", "onLabel"], ["icon", "pi pi-times-circle font-bold", "severity", "error"], ["scrollable", "", "scrollHeight", "30rem", "size", "small", "stripedRows", "", 3, "value"], [1, "w-2"], [1, "w-4"], ["colspan", "4", 1, "text-center"]], template: function CompareHiddenComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 3)(1, "div")(2, "h2", 4);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "p-togglebutton", 5);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275listener("ngModelChange", function CompareHiddenComponent_Template_p_togglebutton_ngModelChange_8_listener($event) {
        return ctx.hiddenDiffsOnly.set($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(11, CompareHiddenComponent_Conditional_11_Template, 3, 3, "p-message", 6)(12, CompareHiddenComponent_Conditional_12_Template, 7, 1, "p-table", 7);
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 6, "languages.hidden.header"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 8, "languages.hidden.description"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngModel", ctx.hiddenDiffsOnly())("offLabel", \u0275\u0275pipeBind1(9, 10, "common.toggle.showingAll"))("onLabel", \u0275\u0275pipeBind1(10, 12, "common.toggle.showingProblems"));
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.is404() ? 11 : 12);
    }
  }, dependencies: [FormsModule, NgControlStatus, NgModel, MessageModule, Message, TableModule, Table, ToggleButtonModule, ToggleButton, TranslatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompareHiddenComponent, [{
    type: Component,
    args: [{ selector: "aida-compare-hidden", imports: [FormsModule, TranslatePipe, MessageModule, TableModule, ToggleButtonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="flex justify-content-between gap-2">
  <div>
    <h2 class="mt-0">{{ 'languages.hidden.header' | translate }}</h2>
    <p>{{ 'languages.hidden.description' | translate }}</p>
  </div>
  <p-togglebutton
    [ngModel]="hiddenDiffsOnly()"
    [offLabel]="'common.toggle.showingAll' | translate"
    [onLabel]="'common.toggle.showingProblems' | translate"
    (ngModelChange)="hiddenDiffsOnly.set($event)"
    class="h-2.75rem w-14rem min-w-max"
    offIcon="pi pi-filter-slash"
    onIcon="pi pi-filter"
  />
</div>
@if (is404()) {
  <p-message icon="pi pi-times-circle font-bold" severity="error">{{ 'languages.is404' | translate }}</p-message>
} @else {
  <p-table [value]="visibleHiddenRows()" scrollable scrollHeight="30rem" size="small" stripedRows>
    <ng-template #header>
      <tr>
        <th class="w-2">{{ 'languages.hidden.forWho' | translate }}</th>
        <th class="w-2">{{ 'common.name' | translate }}</th>
        <th class="w-4">{{ 'common.language.english' | translate }}</th>
        <th class="w-4">{{ 'common.language.french' | translate }}</th>
      </tr>
    </ng-template>
    <ng-template #body let-row>
      <tr [class]="row.status !== 'ok' ? 'bg-red text-red' : null">
        <td>{{ 'languages.hidden.user.' + row.type | translate }}</td>
        <td>
          <code>{{ row.name }}</code>
        </td>
        <td>{{ row.en }}</td>
        <td>{{ row.fr }}</td>
      </tr>
    </ng-template>
    <ng-template #emptymessage>
      <tr>
        <td class="text-center" colspan="4">{{ 'languages.noMismatch' | translate }}</td>
      </tr>
    </ng-template>
  </p-table>
}
` }]
  }], null, { hiddenRows: [{ type: Input, args: [{ isSignal: true, alias: "hiddenRows", required: false }] }], is404: [{ type: Input, args: [{ isSignal: true, alias: "is404", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompareHiddenComponent, { className: "CompareHiddenComponent", filePath: "src/app/views/tasks/compare-languages/compare-hidden/compare-hidden.component.ts", lineNumber: 23 });
})();

// src/app/views/tasks/compare-languages/compare-html/compare-html.component.ts
function CompareHtmlComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-message", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "languages.is404"));
  }
}
function CompareHtmlComponent_Conditional_12_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th", 8);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 9);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 9);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "common.type"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 6, "common.name"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 8, "common.language.english"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 10, "common.language.french"));
  }
}
function CompareHtmlComponent_Conditional_12_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td")(5, "code");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 10);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 10);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r1 = ctx.$implicit;
    \u0275\u0275classMap(row_r1.en !== row_r1.fr ? "bg-red text-red" : null);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 6, "languages.html." + row_r1.type));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(row_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1.en);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1.fr);
  }
}
function CompareHtmlComponent_Conditional_12_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 11);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "languages.noMismatch"));
  }
}
function CompareHtmlComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-table", 7);
    \u0275\u0275template(1, CompareHtmlComponent_Conditional_12_ng_template_1_Template, 13, 12, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, CompareHtmlComponent_Conditional_12_ng_template_3_Template, 11, 8, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(5, CompareHtmlComponent_Conditional_12_ng_template_5_Template, 4, 3, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r1.visibleHtmlRows());
  }
}
var CompareHtmlComponent = class _CompareHtmlComponent {
  /** Input signal with all table rows */
  htmlRows = input([], ...ngDevMode ? [{ debugName: "htmlRows" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Input to track if selected page is 404 */
  is404 = input(false, ...ngDevMode ? [{ debugName: "is404" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Signal to show html mismatches */
  htmlDiffsOnly = signal(true, ...ngDevMode ? [{ debugName: "htmlDiffsOnly" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Shows all or mismatched counts of html elements, classes, and attributes in English and French */
  visibleHtmlRows = computed(() => this.htmlDiffsOnly() ? this.htmlRows().filter((r) => r.en !== r.fr) : this.htmlRows(), ...ngDevMode ? [{ debugName: "visibleHtmlRows" }] : (
    /* istanbul ignore next */
    []
  ));
  markForTranslation() {
    marker("languages.html.element");
    marker("languages.html.class");
    marker("languages.html.attribute");
  }
  static \u0275fac = function CompareHtmlComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CompareHtmlComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompareHtmlComponent, selectors: [["aida-compare-html"]], inputs: { htmlRows: [1, "htmlRows"], is404: [1, "is404"] }, decls: 13, vars: 14, consts: [["header", ""], ["body", ""], ["emptymessage", ""], [1, "flex", "justify-content-between", "gap-2"], [1, "mt-0"], ["offIcon", "pi pi-filter-slash", "onIcon", "pi pi-filter", 1, "h-2.75rem", "w-14rem", "min-w-max", 3, "ngModelChange", "ngModel", "offLabel", "onLabel"], ["icon", "pi pi-times-circle font-bold", "severity", "error"], ["scrollable", "", "scrollHeight", "30rem", "size", "small", "stripedRows", "", 3, "value"], [1, "w-4"], [1, "w-2", "text-right"], [1, "text-right"], ["colspan", "4", 1, "text-center"]], template: function CompareHtmlComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 3)(1, "div")(2, "h2", 4);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "p-togglebutton", 5);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275listener("ngModelChange", function CompareHtmlComponent_Template_p_togglebutton_ngModelChange_8_listener($event) {
        return ctx.htmlDiffsOnly.set($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(11, CompareHtmlComponent_Conditional_11_Template, 3, 3, "p-message", 6)(12, CompareHtmlComponent_Conditional_12_Template, 7, 1, "p-table", 7);
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 6, "languages.htmlStructure.header"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 8, "languages.htmlStructure.description"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngModel", ctx.htmlDiffsOnly())("offLabel", \u0275\u0275pipeBind1(9, 10, "common.toggle.showingAll"))("onLabel", \u0275\u0275pipeBind1(10, 12, "common.toggle.showingDiffs"));
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.is404() ? 11 : 12);
    }
  }, dependencies: [FormsModule, NgControlStatus, NgModel, MessageModule, Message, TableModule, Table, ToggleButtonModule, ToggleButton, TranslatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompareHtmlComponent, [{
    type: Component,
    args: [{ selector: "aida-compare-html", imports: [FormsModule, TranslatePipe, MessageModule, TableModule, ToggleButtonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="flex justify-content-between gap-2">
  <div>
    <h2 class="mt-0">{{ 'languages.htmlStructure.header' | translate }}</h2>
    <p>{{ 'languages.htmlStructure.description' | translate }}</p>
  </div>
  <p-togglebutton
    [ngModel]="htmlDiffsOnly()"
    [offLabel]="'common.toggle.showingAll' | translate"
    [onLabel]="'common.toggle.showingDiffs' | translate"
    (ngModelChange)="htmlDiffsOnly.set($event)"
    class="h-2.75rem w-14rem min-w-max"
    offIcon="pi pi-filter-slash"
    onIcon="pi pi-filter"
  />
</div>
@if (is404()) {
  <p-message icon="pi pi-times-circle font-bold" severity="error">{{ 'languages.is404' | translate }}</p-message>
} @else {
  <p-table [value]="visibleHtmlRows()" scrollable scrollHeight="30rem" size="small" stripedRows>
    <ng-template #header>
      <tr>
        <th class="w-4">{{ 'common.type' | translate }}</th>
        <th class="w-4">{{ 'common.name' | translate }}</th>
        <th class="w-2 text-right">{{ 'common.language.english' | translate }}</th>
        <th class="w-2 text-right">{{ 'common.language.french' | translate }}</th>
      </tr>
    </ng-template>
    <ng-template #body let-row>
      <tr [class]="row.en !== row.fr ? 'bg-red text-red' : null">
        <td>{{ 'languages.html.' + row.type | translate }}</td>
        <td>
          <code>{{ row.name }}</code>
        </td>
        <td class="text-right">{{ row.en }}</td>
        <td class="text-right">{{ row.fr }}</td>
      </tr>
    </ng-template>
    <ng-template #emptymessage>
      <tr>
        <td class="text-center" colspan="4">{{ 'languages.noMismatch' | translate }}</td>
      </tr>
    </ng-template>
  </p-table>
}
` }]
  }], null, { htmlRows: [{ type: Input, args: [{ isSignal: true, alias: "htmlRows", required: false }] }], is404: [{ type: Input, args: [{ isSignal: true, alias: "is404", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompareHtmlComponent, { className: "CompareHtmlComponent", filePath: "src/app/views/tasks/compare-languages/compare-html/compare-html.component.ts", lineNumber: 19 });
})();

// src/app/views/tasks/compare-languages/compare-numbers/compare-numbers.component.ts
function CompareNumbersComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-message", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "languages.is404"));
  }
}
function CompareNumbersComponent_Conditional_12_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th", 8);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "common.language.english"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "common.language.french"));
  }
}
function CompareNumbersComponent_Conditional_12_ng_template_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "mark");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r1.en.before);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1.en.raw);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1.en.after);
  }
}
function CompareNumbersComponent_Conditional_12_ng_template_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 9);
  }
}
function CompareNumbersComponent_Conditional_12_ng_template_3_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "mark");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r1.fr.before);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1.fr.raw);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1.fr.after);
  }
}
function CompareNumbersComponent_Conditional_12_ng_template_3_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 9);
  }
}
function CompareNumbersComponent_Conditional_12_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275conditionalCreate(2, CompareNumbersComponent_Conditional_12_ng_template_3_Conditional_2_Template, 6, 3)(3, CompareNumbersComponent_Conditional_12_ng_template_3_Conditional_3_Template, 1, 0, "i", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275conditionalCreate(5, CompareNumbersComponent_Conditional_12_ng_template_3_Conditional_5_Template, 6, 3)(6, CompareNumbersComponent_Conditional_12_ng_template_3_Conditional_6_Template, 1, 0, "i", 9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r1 = ctx.$implicit;
    \u0275\u0275classMap(row_r1.match ? null : "bg-red");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(row_r1.en ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(row_r1.fr ? 5 : 6);
  }
}
function CompareNumbersComponent_Conditional_12_ng_template_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "languages.noMismatch"), " ");
  }
}
function CompareNumbersComponent_Conditional_12_ng_template_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "languages.noNumbers"), " ");
  }
}
function CompareNumbersComponent_Conditional_12_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 11);
    \u0275\u0275conditionalCreate(2, CompareNumbersComponent_Conditional_12_ng_template_5_Conditional_2_Template, 2, 3)(3, CompareNumbersComponent_Conditional_12_ng_template_5_Conditional_3_Template, 2, 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.numberDiffsOnly() ? 2 : 3);
  }
}
function CompareNumbersComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-table", 7);
    \u0275\u0275template(1, CompareNumbersComponent_Conditional_12_ng_template_1_Template, 7, 6, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, CompareNumbersComponent_Conditional_12_ng_template_3_Template, 7, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(5, CompareNumbersComponent_Conditional_12_ng_template_5_Template, 4, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r1.visibleRows());
  }
}
var CompareNumbersComponent = class _CompareNumbersComponent {
  /** Input signal with all table rows */
  numberRows = input([], ...ngDevMode ? [{ debugName: "numberRows" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Input to track if selected page is 404 */
  is404 = input(false, ...ngDevMode ? [{ debugName: "is404" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Signal to show number mismatches */
  numberDiffsOnly = signal(true, ...ngDevMode ? [{ debugName: "numberDiffsOnly" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Shows all or mismatched numbers in English and French */
  visibleRows = computed(() => this.numberDiffsOnly() ? this.numberRows().filter((r) => !r.match) : this.numberRows(), ...ngDevMode ? [{ debugName: "visibleRows" }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function CompareNumbersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CompareNumbersComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompareNumbersComponent, selectors: [["aida-compare-numbers"]], inputs: { numberRows: [1, "numberRows"], is404: [1, "is404"] }, decls: 13, vars: 14, consts: [["header", ""], ["body", ""], ["emptymessage", ""], [1, "flex", "justify-content-between"], [1, "mt-0"], ["offIcon", "pi pi-filter-slash", "onIcon", "pi pi-filter", 1, "h-2.75rem", "w-14rem", "min-w-max", 3, "ngModelChange", "ngModel", "offLabel", "onLabel"], ["icon", "pi pi-times-circle font-bold", "severity", "error"], ["scrollable", "", "scrollHeight", "30rem", "size", "small", "stripedRows", "", 3, "value"], [1, "w-6"], [1, "pi", "pi-minus", "text-xl"], [1, "text-color-secondary"], ["colspan", "3", 1, "text-center"]], template: function CompareNumbersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 3)(1, "div")(2, "h2", 4);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "p-togglebutton", 5);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275listener("ngModelChange", function CompareNumbersComponent_Template_p_togglebutton_ngModelChange_8_listener($event) {
        return ctx.numberDiffsOnly.set($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(11, CompareNumbersComponent_Conditional_11_Template, 3, 3, "p-message", 6)(12, CompareNumbersComponent_Conditional_12_Template, 7, 1, "p-table", 7);
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 6, "languages.numbers.header"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 8, "languages.numbers.description"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngModel", ctx.numberDiffsOnly())("offLabel", \u0275\u0275pipeBind1(9, 10, "common.toggle.showingAll"))("onLabel", \u0275\u0275pipeBind1(10, 12, "common.toggle.showingDiffs"));
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.is404() ? 11 : 12);
    }
  }, dependencies: [FormsModule, NgControlStatus, NgModel, MessageModule, Message, TableModule, Table, ToggleButtonModule, ToggleButton, TranslatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompareNumbersComponent, [{
    type: Component,
    args: [{ selector: "aida-compare-numbers", imports: [FormsModule, TranslatePipe, MessageModule, TableModule, ToggleButtonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="flex justify-content-between">
  <div>
    <h2 class="mt-0">{{ 'languages.numbers.header' | translate }}</h2>
    <p>{{ 'languages.numbers.description' | translate }}</p>
  </div>
  <p-togglebutton
    [ngModel]="numberDiffsOnly()"
    [offLabel]="'common.toggle.showingAll' | translate"
    [onLabel]="'common.toggle.showingDiffs' | translate"
    (ngModelChange)="numberDiffsOnly.set($event)"
    class="h-2.75rem w-14rem min-w-max"
    offIcon="pi pi-filter-slash"
    onIcon="pi pi-filter"
  />
</div>
@if (is404()) {
  <p-message icon="pi pi-times-circle font-bold" severity="error">{{ 'languages.is404' | translate }}</p-message>
} @else {
  <p-table [value]="visibleRows()" scrollable scrollHeight="30rem" size="small" stripedRows>
    <ng-template #header>
      <tr>
        <th class="w-6">{{ 'common.language.english' | translate }}</th>
        <th class="w-6">{{ 'common.language.french' | translate }}</th>
      </tr>
    </ng-template>
    <ng-template #body let-row>
      <tr [class]="row.match ? null : 'bg-red'">
        <td>
          @if (row.en) {
            <span class="text-color-secondary">{{ row.en.before }}</span>
            <mark>{{ row.en.raw }}</mark>
            <span class="text-color-secondary">{{ row.en.after }}</span>
          } @else {
            <i class="pi pi-minus text-xl"></i>
          }
        </td>
        <td>
          @if (row.fr) {
            <span class="text-color-secondary">{{ row.fr.before }}</span>
            <mark>{{ row.fr.raw }}</mark>
            <span class="text-color-secondary">{{ row.fr.after }}</span>
          } @else {
            <i class="pi pi-minus text-xl"></i>
          }
        </td>
      </tr>
    </ng-template>
    <ng-template #emptymessage>
      <tr>
        <td class="text-center" colspan="3">
          @if (numberDiffsOnly()) {
            {{ 'languages.noMismatch' | translate }}
          } @else {
            {{ 'languages.noNumbers' | translate }}
          }
        </td>
      </tr>
    </ng-template>
  </p-table>
}
` }]
  }], null, { numberRows: [{ type: Input, args: [{ isSignal: true, alias: "numberRows", required: false }] }], is404: [{ type: Input, args: [{ isSignal: true, alias: "is404", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompareNumbersComponent, { className: "CompareNumbersComponent", filePath: "src/app/views/tasks/compare-languages/compare-numbers/compare-numbers.component.ts", lineNumber: 18 });
})();

// src/app/views/tasks/compare-languages/compare-web/compare-web.component.ts
var _c02 = ["enFrame"];
var _c12 = ["frFrame"];
var _c22 = ["wrapper"];
function CompareWebComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-message", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "languages.is404"));
  }
}
function CompareWebComponent_Conditional_11_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 13);
    \u0275\u0275listener("onClick", function CompareWebComponent_Conditional_11_Conditional_7_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleFullscreen());
    });
    \u0275\u0275elementEnd();
  }
}
function CompareWebComponent_Conditional_11_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 13);
    \u0275\u0275listener("onClick", function CompareWebComponent_Conditional_11_Conditional_15_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleFullscreen());
    });
    \u0275\u0275elementEnd();
  }
}
function CompareWebComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7, 0)(2, "div", 8)(3, "div", 9)(4, "h2", 10);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, CompareWebComponent_Conditional_11_Conditional_7_Template, 1, 0, "p-button", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "iframe", 12, 1);
    \u0275\u0275listener("load", function CompareWebComponent_Conditional_11_Template_iframe_load_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onFrameLoad());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 8)(11, "div", 9)(12, "h2", 10);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, CompareWebComponent_Conditional_11_Conditional_15_Template, 1, 0, "p-button", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "iframe", 12, 2);
    \u0275\u0275listener("load", function CompareWebComponent_Conditional_11_Template_iframe_load_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onFrameLoad());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.styleCardService.cardStyles(void 0, void 0, true));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 10, "languages.webView.englishPage"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.isFullScreen() ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("srcdoc", ctx_r2.iframeEnglish(), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.styleCardService.cardStyles(void 0, void 0, true));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 12, "languages.webView.frenchPage"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.isFullScreen() ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("srcdoc", ctx_r2.iframeFrench(), \u0275\u0275sanitizeHtml);
  }
}
var CompareWebComponent = class _CompareWebComponent {
  styleCardService = inject(StyleCardService);
  iframeEnglish = input(void 0, ...ngDevMode ? [{ debugName: "iframeEnglish" }] : (
    /* istanbul ignore next */
    []
  ));
  iframeFrench = input(void 0, ...ngDevMode ? [{ debugName: "iframeFrench" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Input to track if selected page is 404 */
  is404 = input(false, ...ngDevMode ? [{ debugName: "is404" }] : (
    /* istanbul ignore next */
    []
  ));
  enFrame = viewChild.required("enFrame");
  frFrame = viewChild.required("frFrame");
  loadedCount = 0;
  isFullScreen = signal(false, ...ngDevMode ? [{ debugName: "isFullScreen" }] : (
    /* istanbul ignore next */
    []
  ));
  onFullscreenChange() {
    this.isFullScreen.set(document.fullscreenElement === this.wrapper()?.nativeElement);
  }
  wrapper = viewChild("wrapper", ...ngDevMode ? [{ debugName: "wrapper" }] : (
    /* istanbul ignore next */
    []
  ));
  toggleFullscreen() {
    if (document.fullscreenElement)
      document.exitFullscreen();
    else
      this.wrapper()?.nativeElement.requestFullscreen();
  }
  onFrameLoad() {
    if (++this.loadedCount < 2)
      return;
    this.loadedCount = 0;
    const en = this.enFrame().nativeElement;
    const fr = this.frFrame().nativeElement;
    this.link(en, fr);
    this.link(fr, en);
  }
  source = null;
  timer;
  link(from, to) {
    const a = from.contentWindow, b = to.contentWindow;
    a.addEventListener("scroll", () => {
      if (this.source && this.source !== a)
        return;
      this.source = a;
      const maxA = a.document.documentElement.scrollHeight - a.innerHeight;
      const maxB = b.document.documentElement.scrollHeight - b.innerHeight;
      const anchors = this.buildAnchors(a, b, maxA, maxB);
      const target = anchors ? this.mapScroll(a.scrollY, anchors.from, anchors.to) : maxA > 0 ? a.scrollY / maxA * maxB : 0;
      b.scrollTo(0, target);
      clearTimeout(this.timer);
      this.timer = setTimeout(() => this.source = null, 100);
    });
  }
  /** Pairs visible headings by order. Returns null if the counts differ. */
  buildAnchors(a, b, maxA, maxB) {
    const sel = "h1,h2,h3,h4,h5,h6";
    const visible = (el) => el.getClientRects().length > 0;
    const ha = Array.from(a.document.querySelectorAll(sel)).filter(visible);
    const hb = Array.from(b.document.querySelectorAll(sel)).filter(visible);
    if (ha.length === 0 || ha.length !== hb.length)
      return null;
    const pos = (el, w, max) => Math.min(el.getBoundingClientRect().top + w.scrollY, max);
    return {
      from: [0, ...ha.map((el) => pos(el, a, maxA)), maxA],
      to: [0, ...hb.map((el) => pos(el, b, maxB)), maxB]
    };
  }
  mapScroll(y, from, to) {
    for (let i = 1; i < from.length; i++) {
      if (y <= from[i]) {
        const span = from[i] - from[i - 1];
        const t = span > 0 ? (y - from[i - 1]) / span : 0;
        return to[i - 1] + t * (to[i] - to[i - 1]);
      }
    }
    return to[to.length - 1];
  }
  static \u0275fac = function CompareWebComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CompareWebComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompareWebComponent, selectors: [["aida-compare-web"]], viewQuery: function CompareWebComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.enFrame, _c02, 5)(ctx.frFrame, _c12, 5)(ctx.wrapper, _c22, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance(3);
    }
  }, hostBindings: function CompareWebComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("fullscreenchange", function CompareWebComponent_fullscreenchange_HostBindingHandler() {
        return ctx.onFullscreenChange();
      }, \u0275\u0275resolveDocument);
    }
  }, inputs: { iframeEnglish: [1, "iframeEnglish"], iframeFrench: [1, "iframeFrench"], is404: [1, "is404"] }, decls: 12, vars: 11, consts: [["wrapper", ""], ["enFrame", ""], ["frFrame", ""], [1, "flex", "justify-content-between"], [1, "mt-0"], ["icon", "pi pi-window-maximize", "outlined", "", "styleClass", "secondary-outline", 3, "onClick", "label"], ["icon", "pi pi-times-circle font-bold", "severity", "error"], [1, "flex", "gap-2", "surface-card", "h-75vh"], [1, "flex", "flex-column", "flex-1", "min-w-0"], [1, "flex", "justify-content-between", "gap-2", "border-bottom-1", "surface-border"], [1, "px-4", "pt-4", "pb-2", "m-0", "h-4rem"], ["icon", "pi pi-times", "rounded", "", "text", ""], ["sandbox", "allow-same-origin", 1, "w-full", "flex-1", "border-none", 3, "load", "srcdoc"], ["icon", "pi pi-times", "rounded", "", "text", "", 3, "onClick"]], template: function CompareWebComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 3)(1, "div")(2, "h2", 4);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "p-button", 5);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275listener("onClick", function CompareWebComponent_Template_p_button_onClick_8_listener() {
        return ctx.toggleFullscreen();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(10, CompareWebComponent_Conditional_10_Template, 3, 3, "p-message", 6);
      \u0275\u0275conditionalCreate(11, CompareWebComponent_Conditional_11_Template, 18, 14, "div", 7);
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, "languages.webView.header"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 7, "languages.webView.description"));
      \u0275\u0275advance(2);
      \u0275\u0275property("label", \u0275\u0275pipeBind1(9, 9, "common.fullScreen"));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.is404() ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.iframeEnglish() && ctx.iframeFrench() ? 11 : -1);
    }
  }, dependencies: [ButtonModule, Button, MessageModule, Message, TranslatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompareWebComponent, [{
    type: Component,
    args: [{ selector: "aida-compare-web", imports: [TranslatePipe, ButtonModule, MessageModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="flex justify-content-between">
  <div>
    <h2 class="mt-0">{{ 'languages.webView.header' | translate }}</h2>
    <p>{{ 'languages.webView.description' | translate }}</p>
  </div>
  <p-button [label]="'common.fullScreen' | translate" (onClick)="toggleFullscreen()" icon="pi pi-window-maximize" outlined styleClass="secondary-outline" />
</div>
@if (is404()) {
  <p-message icon="pi pi-times-circle font-bold" severity="error">{{ 'languages.is404' | translate }}</p-message>
}
@if (iframeEnglish() && iframeFrench()) {
  <div class="flex gap-2 surface-card h-75vh" #wrapper>
    <div [class]="styleCardService.cardStyles(undefined, undefined, true)" class="flex flex-column flex-1 min-w-0">
      <div class="flex justify-content-between gap-2 border-bottom-1 surface-border">
        <h2 class="px-4 pt-4 pb-2 m-0 h-4rem">{{ 'languages.webView.englishPage' | translate }}</h2>
        @if (isFullScreen()) {
          <p-button (onClick)="toggleFullscreen()" icon="pi pi-times" rounded text />
        }
      </div>
      <iframe [srcdoc]="iframeEnglish()" (load)="onFrameLoad()" class="w-full flex-1 border-none" #enFrame sandbox="allow-same-origin"></iframe>
    </div>
    <div [class]="styleCardService.cardStyles(undefined, undefined, true)" class="flex flex-column flex-1 min-w-0">
      <div class="flex justify-content-between gap-2 border-bottom-1 surface-border">
        <h2 class="px-4 pt-4 pb-2 m-0 h-4rem">{{ 'languages.webView.frenchPage' | translate }}</h2>
        @if (isFullScreen()) {
          <p-button (onClick)="toggleFullscreen()" icon="pi pi-times" rounded text />
        }
      </div>
      <iframe [srcdoc]="iframeFrench()" (load)="onFrameLoad()" class="w-full flex-1 border-none" #frFrame sandbox="allow-same-origin"></iframe>
    </div>
  </div>
}
` }]
  }], null, { iframeEnglish: [{ type: Input, args: [{ isSignal: true, alias: "iframeEnglish", required: false }] }], iframeFrench: [{ type: Input, args: [{ isSignal: true, alias: "iframeFrench", required: false }] }], is404: [{ type: Input, args: [{ isSignal: true, alias: "is404", required: false }] }], enFrame: [{ type: ViewChild, args: ["enFrame", { isSignal: true }] }], frFrame: [{ type: ViewChild, args: ["frFrame", { isSignal: true }] }], onFullscreenChange: [{
    type: HostListener,
    args: ["document:fullscreenchange"]
  }], wrapper: [{ type: ViewChild, args: ["wrapper", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompareWebComponent, { className: "CompareWebComponent", filePath: "src/app/views/tasks/compare-languages/compare-web/compare-web.component.ts", lineNumber: 17 });
})();

// src/app/views/tasks/compare-languages/compare-html/compare-html.ts
var COUNT_TYPES = ["element", "class", "attribute"];
var IGNORED_TAGS = "script,style,noscript";
var TRACKED_ATTRIBUTES = ["role", "style", "id"];
var TRACKED_ATTRIBUTE_PREFIXES = ["data-", "aria-"];
function isTrackedAttribute(name) {
  return TRACKED_ATTRIBUTES.includes(name) || TRACKED_ATTRIBUTE_PREFIXES.some((prefix) => name.startsWith(prefix));
}
function increment(map, key) {
  map.set(key, (map.get(key) ?? 0) + 1);
}
function count(doc) {
  const root = (doc.querySelector("main") ?? doc.body).cloneNode(true);
  root.querySelectorAll(IGNORED_TAGS).forEach((n) => n.remove());
  const counts = { element: /* @__PURE__ */ new Map(), class: /* @__PURE__ */ new Map(), attribute: /* @__PURE__ */ new Map() };
  root.querySelectorAll("*").forEach((el) => {
    increment(counts.element, el.tagName.toLowerCase());
    el.classList.forEach((c) => increment(counts.class, c));
    el.getAttributeNames().filter(isTrackedAttribute).forEach((a) => increment(counts.attribute, a));
  });
  return counts;
}
function compareHTML(docEN, docFR) {
  const en = count(docEN);
  const fr = count(docFR);
  const rows = [];
  for (const type of COUNT_TYPES) {
    const names = /* @__PURE__ */ new Set([...en[type].keys(), ...fr[type].keys()]);
    for (const name of names) {
      rows.push({ type, name, en: en[type].get(name) ?? 0, fr: fr[type].get(name) ?? 0 });
    }
  }
  return rows.sort((x, y) => Math.abs(y.en - y.fr) - Math.abs(x.en - x.fr) || x.name.localeCompare(y.name));
}

// src/app/views/tasks/compare-languages/compare-numbers/compare-numbers.ts
var BLOCK = "h1,h2,h3,h4,h5,h6,p,li,td,th,dt,dd,caption,figcaption,summary,div,blockquote,address,pre";
var CONTEXT = 40;
var HYPHEN = String.raw`\-\u2010\u2011\u2012\u2013\u2212`;
var SPACES = /[\u00A0\u1680\u2000-\u200A\u202F\u205F\u3000]/g;
var WORDS = {
  en: { two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10 },
  fr: { deux: 2, trois: 3, quatre: 4, cinq: 5, six: 6, sept: 7, huit: 8, neuf: 9, dix: 10 }
};
var PHONE = String.raw`(?<![\d${HYPHEN}])(?:\d[${HYPHEN}])?\d{3}[${HYPHEN}]\d{3}[${HYPHEN}]\d{4}(?![\d${HYPHEN}])`;
var PHONE_EXACT = new RegExp(String.raw`^(?:\d[${HYPHEN}])?\d{3}[${HYPHEN}]\d{3}[${HYPHEN}]\d{4}$`);
var TIME = {
  en: String.raw`(?<![\d.,:])(?:1[0-2]|[1-9])(?::00)? ?[ap]m(?![\p{L}\d])`,
  fr: String.raw`(?<![\d.,:])(?:1[3-9]|2[0-3]) ?h(?![\p{L}\d])`
};
var DIGITS = {
  en: String.raw`(?<![\d.,])\d{1,3}(?:,\d{3})+(?:\.\d+)?(?!\d)|\d+(?:\.\d+)?`,
  fr: String.raw`(?<![\d.,])\d{1,3}(?: \d{3})+(?:,\d+)?(?!\d)|\d+(?:,\d+)?`
};
function timeValue(raw, lang) {
  if (lang === "en") {
    const m2 = raw.match(/^(\d{1,2})(?::00)? ?([ap])m$/i);
    if (!m2)
      return null;
    const hour = parseInt(m2[1], 10);
    return m2[2].toLowerCase() === "p" && hour < 12 ? `time:${hour + 12}` : String(hour);
  }
  const m = raw.match(/^(\d{2}) ?h$/i);
  return m ? `time:${m[1]}` : null;
}
function numberRegex(lang) {
  const words = Object.keys(WORDS[lang]).join("|");
  const beforeHyphen = String.raw`(?<![\p{L}\d]|\p{L}[${HYPHEN}])`;
  const afterHyphen = lang === "fr" ? String.raw`(?![\p{L}\d]|[${HYPHEN}]\p{L})` : String.raw`(?![\p{L}\d])`;
  return new RegExp(`${PHONE}|${TIME[lang]}|${DIGITS[lang]}|${beforeHyphen}(?:${words})${afterHyphen}`, "giu");
}
function normalize(raw, lang) {
  if (PHONE_EXACT.test(raw))
    return `phone:${raw.replace(/\D/g, "")}`;
  const time = timeValue(raw, lang);
  if (time)
    return time;
  const word = WORDS[lang][raw.toLowerCase()];
  if (word !== void 0)
    return String(word);
  const cleaned = lang === "en" ? raw.replace(/,/g, "") : raw.replace(/ /g, "").replace(",", ".");
  return String(parseFloat(cleaned));
}
function cleanWhitespace(text) {
  return text.replace(/[\u00AD\u200B-\u200D\uFEFF]/g, "").replace(SPACES, " ").replace(/[ \t\r\n]+/g, " ").trim();
}
function getText(el) {
  const clone = el.cloneNode(true);
  clone.querySelectorAll(`${BLOCK},script,style`).forEach((n) => n.remove());
  clone.querySelectorAll("br").forEach((br) => br.replaceWith(" "));
  return cleanWhitespace(clone.textContent ?? "");
}
function extractNumbers(doc, lang) {
  const root = doc.querySelector("main") ?? doc.body;
  const regex = numberRegex(lang);
  const hits = [];
  root.querySelectorAll(BLOCK).forEach((el) => {
    const text = getText(el);
    for (const match of text.matchAll(regex)) {
      const start = match.index;
      const end = start + match[0].length;
      hits.push({
        raw: match[0],
        value: normalize(match[0], lang),
        before: text.slice(Math.max(0, start - CONTEXT), start),
        after: text.slice(end, end + CONTEXT)
      });
    }
  });
  return hits;
}
function alignNumbers(en, fr) {
  const n = en.length, m = fr.length;
  const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  for (let i2 = n - 1; i2 >= 0; i2--)
    for (let j2 = m - 1; j2 >= 0; j2--)
      dp[i2][j2] = en[i2].value === fr[j2].value ? dp[i2 + 1][j2 + 1] + 1 : Math.max(dp[i2 + 1][j2], dp[i2][j2 + 1]);
  const raw = [];
  let i = 0, j = 0;
  while (i < n && j < m) {
    if (en[i].value === fr[j].value)
      raw.push({ en: en[i++], fr: fr[j++] });
    else if (dp[i + 1][j] >= dp[i][j + 1])
      raw.push({ en: en[i++] });
    else
      raw.push({ fr: fr[j++] });
  }
  while (i < n)
    raw.push({ en: en[i++] });
  while (j < m)
    raw.push({ fr: fr[j++] });
  const rows = [];
  for (let k = 0; k < raw.length; k++) {
    const cur = raw[k], next = raw[k + 1];
    if (next && (cur.en && !cur.fr && next.fr && !next.en || cur.fr && !cur.en && next.en && !next.fr)) {
      rows.push({ en: cur.en ?? next.en, fr: cur.fr ?? next.fr, match: false });
      k++;
    } else {
      rows.push(__spreadProps(__spreadValues({}, cur), { match: !!(cur.en && cur.fr) }));
    }
  }
  return rows;
}

// src/app/views/tasks/compare-languages/compare-languages.component.ts
var _c03 = ["data"];
var _c13 = ["html"];
var _c23 = ["hidden"];
var _c3 = ["numbers"];
var _c4 = ["ai"];
var _c5 = (a0) => ({ count: a0 });
var _forTrack0 = ($index, $item) => $item.tab;
function CompareLanguagesComponent_Conditional_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CompareLanguagesComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CompareLanguagesComponent_Conditional_0_ng_container_0_Template, 1, 0, "ng-container", 7);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const summary_r1 = \u0275\u0275reference(3);
    \u0275\u0275property("ngTemplateOutlet", summary_r1);
  }
}
function CompareLanguagesComponent_Conditional_1_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CompareLanguagesComponent_Conditional_1_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-message", 14);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "pageOptions.description.0"));
  }
}
function CompareLanguagesComponent_Conditional_1_Conditional_18_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 19);
  }
}
function CompareLanguagesComponent_Conditional_1_Conditional_18_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-badge", 20);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("severity", ctx_r1.dataProblems().live === 0 ? "success" : "danger")("value", ctx_r1.dataProblems().base + " / " + ctx_r1.dataProblems().proto + " / " + ctx_r1.dataProblems().live);
  }
}
function CompareLanguagesComponent_Conditional_1_Conditional_18_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 19);
  }
}
function CompareLanguagesComponent_Conditional_1_Conditional_18_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 25);
  }
}
function CompareLanguagesComponent_Conditional_1_Conditional_18_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-badge", 20);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("severity", ctx_r1.aiProblems().result === 0 ? "success" : "danger")("value", ctx_r1.aiProblems().result);
  }
}
function CompareLanguagesComponent_Conditional_1_Conditional_18_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 26);
  }
}
function CompareLanguagesComponent_Conditional_1_Conditional_18_ng_container_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CompareLanguagesComponent_Conditional_1_Conditional_18_ng_container_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CompareLanguagesComponent_Conditional_1_Conditional_18_ng_container_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CompareLanguagesComponent_Conditional_1_Conditional_18_ng_container_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CompareLanguagesComponent_Conditional_1_Conditional_18_ng_container_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CompareLanguagesComponent_Conditional_1_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-tabs", 15)(1, "p-tablist")(2, "p-tab", 16)(3, "div", 17)(4, "span", 18);
    \u0275\u0275text(5, "checklist");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275conditionalCreate(8, CompareLanguagesComponent_Conditional_1_Conditional_18_Conditional_8_Template, 1, 0, "i", 19)(9, CompareLanguagesComponent_Conditional_1_Conditional_18_Conditional_9_Template, 1, 2, "p-badge", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p-tab", 21)(11, "div", 17)(12, "span", 18);
    \u0275\u0275text(13, "code");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275element(16, "p-badge", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "p-tab", 22)(18, "div", 17)(19, "span", 18);
    \u0275\u0275text(20, "visibility_off");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275element(23, "p-badge", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "p-tab", 23)(25, "div", 17)(26, "span", 18);
    \u0275\u0275text(27, "numbers");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275element(30, "p-badge", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "p-tab", 24)(32, "div", 17)(33, "span", 18);
    \u0275\u0275text(34, "auto_awesome");
    \u0275\u0275elementEnd();
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275conditionalCreate(37, CompareLanguagesComponent_Conditional_1_Conditional_18_Conditional_37_Template, 1, 0, "i", 19)(38, CompareLanguagesComponent_Conditional_1_Conditional_18_Conditional_38_Template, 1, 0, "i", 25)(39, CompareLanguagesComponent_Conditional_1_Conditional_18_Conditional_39_Template, 1, 2, "p-badge", 20)(40, CompareLanguagesComponent_Conditional_1_Conditional_18_Conditional_40_Template, 1, 0, "i", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "p-tab", 27)(42, "div", 17)(43, "span", 18);
    \u0275\u0275text(44, "compare");
    \u0275\u0275elementEnd();
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "p-tabpanels", 28)(48, "p-tabpanel", 16);
    \u0275\u0275template(49, CompareLanguagesComponent_Conditional_1_Conditional_18_ng_container_49_Template, 1, 0, "ng-container", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "p-tabpanel", 21);
    \u0275\u0275template(51, CompareLanguagesComponent_Conditional_1_Conditional_18_ng_container_51_Template, 1, 0, "ng-container", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "p-tabpanel", 22);
    \u0275\u0275template(53, CompareLanguagesComponent_Conditional_1_Conditional_18_ng_container_53_Template, 1, 0, "ng-container", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "p-tabpanel", 23);
    \u0275\u0275template(55, CompareLanguagesComponent_Conditional_1_Conditional_18_ng_container_55_Template, 1, 0, "ng-container", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "p-tabpanel", 24);
    \u0275\u0275template(57, CompareLanguagesComponent_Conditional_1_Conditional_18_ng_container_57_Template, 1, 0, "ng-container", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "p-tabpanel", 27);
    \u0275\u0275element(59, "aida-compare-web", 29);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    const data_r3 = \u0275\u0275reference(5);
    const html_r4 = \u0275\u0275reference(7);
    const hidden_r5 = \u0275\u0275reference(9);
    const numbers_r6 = \u0275\u0275reference(11);
    const ai_r7 = \u0275\u0275reference(13);
    \u0275\u0275property("value", ctx_r1.activeTab());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 23, "languages.dataCompare.tab"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.projectState.refreshing().baseline || ctx_r1.projectState.refreshing().prototype || ctx_r1.projectState.refreshing().live ? 8 : 9);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 25, "languages.htmlStructure.tab"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("severity", ctx_r1.htmlProblems() === 0 ? "success" : "danger")("value", ctx_r1.htmlProblems());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 27, "languages.hidden.tab"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("severity", ctx_r1.hiddenProblems() === 0 ? "success" : "danger")("value", ctx_r1.hiddenProblems());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 29, "languages.numbers.tab"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("severity", ctx_r1.numberProblems() === 0 ? "success" : "danger")("value", ctx_r1.numberProblems());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(36, 31, "languages.aiSummary.tab"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.aiProblems().status === "pending" ? 37 : ctx_r1.aiProblems().status === "error" ? 38 : ctx_r1.aiProblems().status === "done" ? 39 : 40);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(46, 33, "languages.webView.tab"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngTemplateOutlet", data_r3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", html_r4);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", hidden_r5);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", numbers_r6);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ai_r7);
    \u0275\u0275advance(2);
    \u0275\u0275property("iframeEnglish", ctx_r1.iframeEnglish())("iframeFrench", ctx_r1.iframeFrench())("is404", ctx_r1.is404());
  }
}
function CompareLanguagesComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 9)(8, "div", 10)(9, "div");
    \u0275\u0275element(10, "aida-compare-select", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 12);
    \u0275\u0275template(12, CompareLanguagesComponent_Conditional_1_ng_container_12_Template, 1, 0, "ng-container", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div")(14, "h2", 13);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(17, CompareLanguagesComponent_Conditional_1_Conditional_17_Template, 3, 3, "p-message", 14)(18, CompareLanguagesComponent_Conditional_1_Conditional_18_Template, 60, 35, "p-tabs", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const summary_r1 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 13, "languages._title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(5, 15, "languages.description"), "", \u0275\u0275pipeBind1(6, 17, "languages.description2"));
    \u0275\u0275advance(5);
    \u0275\u0275classMap(ctx_r1.styleCardService.cardStyles());
    \u0275\u0275advance();
    \u0275\u0275property("versionsToShow", 1);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.styleCardService.cardStyles());
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", summary_r1);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.styleCardService.cardStyles());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 19, "languages.tools.header"));
    const page_r8 = ctx_r1.compareService.selectedPage();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!page_r8 ? 17 : 18);
  }
}
function CompareLanguagesComponent_ng_template_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 30);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "languages.summary.header"));
  }
}
function CompareLanguagesComponent_ng_template_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-message", 14);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "pageOptions.description.0"));
  }
}
function CompareLanguagesComponent_ng_template_2_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "languages.summary.noProblems"));
  }
}
function CompareLanguagesComponent_ng_template_2_Conditional_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, "languages.summary.toReview", \u0275\u0275pureFunction1(4, _c5, ctx_r1.totalProblems())));
  }
}
function CompareLanguagesComponent_ng_template_2_Conditional_2_For_8_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 19);
  }
}
function CompareLanguagesComponent_ng_template_2_Conditional_2_For_8_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 25);
  }
}
function CompareLanguagesComponent_ng_template_2_Conditional_2_For_8_Conditional_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-badge", 20);
  }
  if (rf & 2) {
    const row_r10 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("severity", row_r10.state === "problem" ? "danger" : "success")("value", row_r10.detail);
  }
}
function CompareLanguagesComponent_ng_template_2_Conditional_2_For_8_Conditional_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-badge", 20);
  }
  if (rf & 2) {
    const row_r10 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("severity", row_r10.state === "problem" ? "danger" : "success")("value", row_r10.count);
  }
}
function CompareLanguagesComponent_ng_template_2_Conditional_2_For_8_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CompareLanguagesComponent_ng_template_2_Conditional_2_For_8_Conditional_10_Conditional_0_Template, 1, 2, "p-badge", 20)(1, CompareLanguagesComponent_ng_template_2_Conditional_2_For_8_Conditional_10_Conditional_1_Template, 1, 2, "p-badge", 20);
  }
  if (rf & 2) {
    const row_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(row_r10.detail ? 0 : 1);
  }
}
function CompareLanguagesComponent_ng_template_2_Conditional_2_For_8_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 26);
  }
}
function CompareLanguagesComponent_ng_template_2_Conditional_2_For_8_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 40);
  }
}
function CompareLanguagesComponent_ng_template_2_Conditional_2_For_8_Conditional_18_ng_template_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CompareLanguagesComponent_ng_template_2_Conditional_2_For_8_Conditional_18_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275template(1, CompareLanguagesComponent_ng_template_2_Conditional_2_For_8_Conditional_18_ng_template_2_ng_container_1_Template, 1, 0, "ng-container", 7);
    \u0275\u0275elementStart(2, "p-button", 44);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("onClick", function CompareLanguagesComponent_ng_template_2_Conditional_2_For_8_Conditional_18_ng_template_2_Template_p_button_onClick_2_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.openDialog.set(null));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r13 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", row_r13.template);
    \u0275\u0275advance();
    \u0275\u0275property("label", \u0275\u0275pipeBind1(3, 2, "common.close"));
  }
}
function CompareLanguagesComponent_ng_template_2_Conditional_2_For_8_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-dialog", 42);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("visibleChange", function CompareLanguagesComponent_ng_template_2_Conditional_2_For_8_Conditional_18_Template_p_dialog_visibleChange_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView($event || ctx_r1.openDialog.set(null));
    });
    \u0275\u0275template(2, CompareLanguagesComponent_ng_template_2_Conditional_2_For_8_Conditional_18_ng_template_2_Template, 4, 4, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("header", \u0275\u0275pipeBind1(1, 4, ctx.label))("maximizable", true)("modal", true)("visible", true);
  }
}
function CompareLanguagesComponent_ng_template_2_Conditional_2_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "p-button", 37);
    \u0275\u0275listener("onClick", function CompareLanguagesComponent_ng_template_2_Conditional_2_For_8_Template_p_button_onClick_1_listener() {
      const row_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(!ctx_r1.summaryMode() ? ctx_r1.openTab(row_r10.tab) : ctx_r1.openDialog.set(row_r10));
    });
    \u0275\u0275elementStart(2, "div", 38)(3, "span", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, CompareLanguagesComponent_ng_template_2_Conditional_2_For_8_Conditional_8_Template, 1, 0, "i", 19)(9, CompareLanguagesComponent_ng_template_2_Conditional_2_For_8_Conditional_9_Template, 1, 0, "i", 25)(10, CompareLanguagesComponent_ng_template_2_Conditional_2_For_8_Conditional_10_Template, 2, 1)(11, CompareLanguagesComponent_ng_template_2_Conditional_2_For_8_Conditional_11_Template, 1, 0, "i", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 39)(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275conditionalCreate(16, CompareLanguagesComponent_ng_template_2_Conditional_2_For_8_Conditional_16_Template, 1, 0, "span", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "i");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(18, CompareLanguagesComponent_ng_template_2_Conditional_2_For_8_Conditional_18_Template, 4, 6, "p-dialog", 41);
  }
  if (rf & 2) {
    let tmp_27_0;
    const row_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("styleClass", ctx_r1.activeTab() === row_r10.tab && !ctx_r1.summaryMode() ? "h-3rem flex justify-content-between gap-2 border-1 secondary-border bg-primary-light hover:bg-primary-light" : "h-3rem flex justify-content-between gap-2")("text", ctx_r1.activeTab() !== row_r10.tab || ctx_r1.summaryMode());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r10.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 12, row_r10.label));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(row_r10.state === "loading" ? 8 : row_r10.state === "error" ? 9 : row_r10.state === "ok" || row_r10.state === "problem" ? 10 : 11);
    \u0275\u0275advance(5);
    \u0275\u0275classMap(row_r10.state === "problem" || row_r10.state === "error" ? "text-red" : row_r10.state === "ok" ? "text-green" : "text-color-secondary");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(15, 14, "languages.summary." + row_r10.state, \u0275\u0275pureFunction1(17, _c5, row_r10.count)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(row_r10.state === "loading" ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.summaryMode() ? "pi pi-question-circle text-primary" : "pi pi-chevron-right text-color-secondary");
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_27_0 = ctx_r1.openDialog()) ? 18 : -1, tmp_27_0);
  }
}
function CompareLanguagesComponent_ng_template_2_Conditional_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "a", 45);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "i", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r1.AidaLinks.ProjectLanguages);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "languages._title"));
  }
}
function CompareLanguagesComponent_ng_template_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "h3", 32);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, CompareLanguagesComponent_ng_template_2_Conditional_2_Conditional_4_Template, 3, 3, "span", 33)(5, CompareLanguagesComponent_ng_template_2_Conditional_2_Conditional_5_Template, 3, 6, "span", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ul", 35);
    \u0275\u0275repeaterCreate(7, CompareLanguagesComponent_ng_template_2_Conditional_2_For_8_Template, 19, 19, null, null, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, CompareLanguagesComponent_ng_template_2_Conditional_2_Conditional_9_Template, 5, 4, "div", 36);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "languages.tools.header"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.totalProblems() === 0 ? 4 : 5);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.summaryRows());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.summaryMode() ? 9 : -1);
  }
}
function CompareLanguagesComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CompareLanguagesComponent_ng_template_2_Conditional_0_Template, 3, 3, "h2", 30);
    \u0275\u0275conditionalCreate(1, CompareLanguagesComponent_ng_template_2_Conditional_1_Template, 3, 3, "p-message", 14)(2, CompareLanguagesComponent_ng_template_2_Conditional_2_Template, 10, 5);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!ctx_r1.summaryMode() ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.compareService.selectedPage() ? 1 : 2);
  }
}
function CompareLanguagesComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "aida-compare-data", 47);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("is404", ctx_r1.is404())("selectedBase", ctx_r1.selectedBase())("selectedLive", ctx_r1.selectedLive())("selectedNode", ctx_r1.selectedNode())("selectedProto", ctx_r1.selectedProto());
  }
}
function CompareLanguagesComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "aida-compare-html", 48);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("htmlRows", ctx_r1.htmlRows())("is404", ctx_r1.is404());
  }
}
function CompareLanguagesComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "aida-compare-hidden", 49);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("hiddenRows", ctx_r1.hiddenRows())("is404", ctx_r1.is404());
  }
}
function CompareLanguagesComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "aida-compare-numbers", 50);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("is404", ctx_r1.is404())("numberRows", ctx_r1.numberRows());
  }
}
function CompareLanguagesComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "aida-compare-ai-lang", 51);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("aiEnglish", ctx_r1.aiEnglish())("aiFrench", ctx_r1.aiFrench())("is404", ctx_r1.is404());
  }
}
var CompareLanguagesComponent = class _CompareLanguagesComponent {
  injector = inject(Injector);
  sanitizer = inject(DomSanitizer);
  projectState = inject(ProjectStateService);
  compareService = inject(CompareService);
  fetchService = inject(FetchService);
  htmlNormalizationService = inject(HtmlNormalizationService);
  styleCardService = inject(StyleCardService);
  reviewLanguagesService = inject(ReviewLanguagesService);
  summaryMode = input(false, ...ngDevMode ? [{ debugName: "summaryMode" }] : (
    /* istanbul ignore next */
    []
  ));
  activeTab = signal("0", ...ngDevMode ? [{ debugName: "activeTab" }] : (
    /* istanbul ignore next */
    []
  ));
  openDialog = signal(null, ...ngDevMode ? [{ debugName: "openDialog" }] : (
    /* istanbul ignore next */
    []
  ));
  AidaLinks = AidaLinks;
  /** Signals for data comparison */
  selectedNode = signal(void 0, ...ngDevMode ? [{ debugName: "selectedNode" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedBase = signal(void 0, ...ngDevMode ? [{ debugName: "selectedBase" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedProto = signal(void 0, ...ngDevMode ? [{ debugName: "selectedProto" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedLive = signal(void 0, ...ngDevMode ? [{ debugName: "selectedLive" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Signal for HTML comparison: a count of all elements, classes, and attributes in English and French */
  htmlRows = signal([], ...ngDevMode ? [{ debugName: "htmlRows" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Signal for hidden comparison: an extract of all hidden content in English and French */
  hiddenRows = signal([], ...ngDevMode ? [{ debugName: "hiddenRows" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Signal for numbers comparison: an extract of all numbers with context */
  numberRows = signal([], ...ngDevMode ? [{ debugName: "numberRows" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Signals for AI summary: cleaned up HTML strings*/
  aiEnglish = signal("", ...ngDevMode ? [{ debugName: "aiEnglish" }] : (
    /* istanbul ignore next */
    []
  ));
  aiFrench = signal("", ...ngDevMode ? [{ debugName: "aiFrench" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Signals for web view: cleaned up SafeHtml */
  iframeEnglish = signal(void 0, ...ngDevMode ? [{ debugName: "iframeEnglish" }] : (
    /* istanbul ignore next */
    []
  ));
  iframeFrench = signal(void 0, ...ngDevMode ? [{ debugName: "iframeFrench" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Signal is true if page cannot be fetched from source */
  is404 = signal(false, ...ngDevMode ? [{ debugName: "is404" }] : (
    /* istanbul ignore next */
    []
  ));
  resetSignals() {
    this.selectedNode.set(void 0);
    this.selectedBase.set(void 0);
    this.selectedProto.set(void 0);
    this.selectedLive.set(void 0);
    this.htmlRows.set([]);
    this.hiddenRows.set([]);
    this.numberRows.set([]);
    this.aiEnglish.set("");
    this.aiFrench.set("");
    this.iframeEnglish.set(void 0);
    this.iframeFrench.set(void 0);
    this.is404.set(false);
  }
  /** Computed problems */
  dataProblems = computed(() => {
    return { base: (this.selectedBase() ?? []).length, proto: (this.selectedProto() ?? []).length, live: (this.selectedLive() ?? []).length };
  }, ...ngDevMode ? [{ debugName: "dataProblems" }] : (
    /* istanbul ignore next */
    []
  ));
  htmlProblems = computed(() => {
    return this.htmlRows().filter((r) => r.en !== r.fr).length;
  }, ...ngDevMode ? [{ debugName: "htmlProblems" }] : (
    /* istanbul ignore next */
    []
  ));
  hiddenProblems = computed(() => {
    return this.hiddenRows().filter((r) => r.status !== "ok").length;
  }, ...ngDevMode ? [{ debugName: "hiddenProblems" }] : (
    /* istanbul ignore next */
    []
  ));
  numberProblems = computed(() => {
    return this.numberRows().filter((r) => !r.match).length;
  }, ...ngDevMode ? [{ debugName: "numberProblems" }] : (
    /* istanbul ignore next */
    []
  ));
  aiProblems = computed(() => {
    const page = this.compareService.selectedPage();
    return { status: this.reviewLanguagesService.getAiJobStatus(page), result: this.reviewLanguagesService.getAiResponse(page).length };
  }, ...ngDevMode ? [{ debugName: "aiProblems" }] : (
    /* istanbul ignore next */
    []
  ));
  totalProblems = computed(() => this.dataProblems().live + this.htmlProblems() + this.numberProblems() + this.aiProblems().result, ...ngDevMode ? [{ debugName: "totalProblems" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    effect((onCleanup) => {
      const page = this.compareService.selectedPage();
      const version = this.compareService.selectedSource();
      untracked(() => {
        const bothPaths = this.projectState.getBothPaths(page);
        this.resetSignals();
        if (!bothPaths)
          return;
        const node = this.projectState.findNodeByPath(this.projectState.getProject().projectData, bothPaths.en, "en");
        if (node) {
          this.selectedNode.set(node);
          this.selectedBase.set(this.findLanguageMismatches(node.data, "baseline"));
          this.selectedProto.set(this.findLanguageMismatches(node.data, "prototype"));
          this.selectedLive.set(this.findLanguageMismatches(node.data, "live"));
        }
        const { owner, repo } = this.projectState.getProject().github;
        const urlEN = this.fetchService.generateUrl(bothPaths.en, version, owner, repo);
        const urlFR = this.fetchService.generateUrl(bothPaths.fr, version, owner, repo);
        let stale = false;
        onCleanup(() => stale = true);
        this.setHTML(urlEN, urlFR, () => stale);
      });
    });
  }
  /** Fxn for data comparison: finds any mismatched baseline, prototype, or live data */
  findLanguageMismatches(data, version) {
    const day = (iso) => iso ? new Date(iso).toLocaleDateString("en-CA", { timeZone: "America/Toronto" }) : "";
    const list = (s) => (s ?? "").split(";").map((x) => x.trim().toLowerCase()).filter(Boolean).sort().join("; ");
    const en = data[version]?.en;
    const fr = data[version]?.fr;
    if (!en || !fr)
      return [];
    const out = [];
    const add = (label, a, b) => {
      if (a !== b)
        out.push({ label, en: String(a ?? ""), fr: String(b ?? "") });
    };
    add("is404", en.is404, fr.is404);
    add("iaOrphan", en.isOrphan, fr.isOrphan);
    add("noindex", en.noindex, fr.noindex);
    add("isArchived", en.isArchived, fr.isArchived);
    add("linksToPortal", en.linksToPortal, fr.linksToPortal);
    add("linksToSignIn", en.linksToSignIn, fr.linksToSignIn);
    add("hasChatbot", en.hasChatbot, fr.hasChatbot);
    if (list(en.owner) !== list(fr.owner))
      out.push({ label: "owner", en: en.owner ?? "", fr: fr.owner ?? "" });
    if (list(en.email) !== list(fr.email))
      out.push({ label: "email", en: en.email ?? "", fr: fr.email ?? "" });
    add("lastPublished", day(en.lastPublished), day(fr.lastPublished));
    add("lastModified", day(en.lastModified), day(fr.lastModified));
    add("linkCount", en.linkCount, fr.linkCount);
    add("template", en.template, fr.template);
    const expectedFrParent = en.parentPath ? this.projectState.getBothPaths(en.parentPath)?.fr ?? "" : "";
    if (expectedFrParent !== (fr.parentPath ?? "")) {
      out.push({ label: "parentPath", en: en.parentPath ?? "", fr: fr.parentPath ?? "" });
    }
    marker("inventory.header.parentPath");
    return out;
  }
  /** Fxn for all other comparisons: HTML element counts, numbers comparison, AI html, and iFrame html */
  setHTML(urlEN, urlFR, isStale) {
    return __async(this, null, function* () {
      try {
        const htmlEN = yield this.fetchService.fetchContent(urlEN, "both");
        const htmlFR = yield this.fetchService.fetchContent(urlFR, "both");
        this.htmlNormalizationService.updateRelativeURLs(htmlEN, "https://www.canada.ca");
        this.htmlNormalizationService.updateRelativeURLs(htmlFR, "https://www.canada.ca");
        const htmlComparison = compareHTML(htmlEN, htmlFR);
        const hiddenComparison = compareHidden(htmlEN, htmlFR);
        const numberComparison = alignNumbers(extractNumbers(htmlEN, "en"), extractNumbers(htmlFR, "fr"));
        const srcEN = this.toSrcdoc(htmlEN);
        const srcFR = this.toSrcdoc(htmlFR);
        if (isStale())
          return;
        this.htmlRows.set(htmlComparison);
        this.hiddenRows.set(hiddenComparison);
        this.numberRows.set(numberComparison);
        this.aiEnglish.set(this.toPromptHtml(htmlEN));
        this.aiFrench.set(this.toPromptHtml(htmlFR));
        this.iframeEnglish.set(srcEN);
        this.iframeFrench.set(srcFR);
      } catch (error) {
        console.error("Error fetching content", error);
        this.is404.set(true);
      }
    });
  }
  /** Converts doc to SafeHtml for iFrame comparison */
  toSrcdoc(doc) {
    const style = doc.createElement("style");
    style.textContent = "a, button { pointer-events: none !important; }";
    doc.head.appendChild(style);
    return this.sanitizer.bypassSecurityTrustHtml("<!DOCTYPE html>" + doc.documentElement.outerHTML);
  }
  /** Converts doc to string for AI prompt */
  toPromptHtml(doc) {
    const main = (doc.querySelector("main") ?? doc.body).cloneNode(true);
    main.querySelectorAll("script,style,noscript,svg,iframe,img").forEach((n) => n.remove());
    main.querySelectorAll("*").forEach((el) => {
      for (const attr of Array.from(el.attributes)) {
        if (!(el.tagName === "A" && attr.name === "href"))
          el.removeAttribute(attr.name);
      }
    });
    return main.innerHTML.replace(/[ \t\r\n]+/g, " ").trim();
  }
  /** Template references */
  data = viewChild.required("data");
  html = viewChild.required("html");
  hidden = viewChild.required("hidden");
  numbers = viewChild.required("numbers");
  ai = viewChild.required("ai");
  /** Gets a summary of all problems */
  summaryRows = computed(() => {
    const dataCounts = this.dataProblems();
    const htmlCount = this.htmlProblems();
    const hiddenCount = this.hiddenProblems();
    const numberCount = this.numberProblems();
    const ai = this.aiProblems();
    const countState = (n) => n === 0 ? "ok" : "problem";
    marker("languages.summary.ok");
    marker("languages.summary.problem");
    marker("languages.summary.loading");
    marker("languages.summary.error");
    marker("languages.summary.notRun");
    const aiState = ai.status === "pending" ? "loading" : ai.status === "error" ? "error" : ai.status === "done" ? countState(ai.result) : "notRun";
    const dataState = this.projectState.isRefreshing() ? "loading" : countState(dataCounts.live);
    return [
      {
        tab: "0",
        template: this.data(),
        icon: "checklist",
        label: "languages.dataCompare.tab",
        state: dataState,
        count: dataCounts.live,
        detail: `${dataCounts.base} / ${dataCounts.proto} / ${dataCounts.live}`
      },
      { tab: "1", template: this.html(), icon: "code", label: "languages.htmlStructure.tab", state: countState(htmlCount), count: htmlCount },
      { tab: "2", template: this.hidden(), icon: "visibility_off", label: "languages.hidden.tab", state: countState(hiddenCount), count: hiddenCount },
      { tab: "3", template: this.numbers(), icon: "numbers", label: "languages.numbers.tab", state: countState(numberCount), count: numberCount },
      { tab: "4", template: this.ai(), icon: "auto_awesome", label: "languages.aiSummary.tab", state: aiState, count: ai.result }
    ];
  }, ...ngDevMode ? [{ debugName: "summaryRows" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Changes tabs and scrolls to tab */
  openTab(tab) {
    this.activeTab.set(tab);
    afterNextRender(() => {
      const el = document.getElementById("compare-tools");
      if (!el)
        return;
      window.scrollTo({ left: 0, top: el.getBoundingClientRect().top + window.scrollY, behavior: "smooth" });
    }, { injector: this.injector });
  }
  static \u0275fac = function CompareLanguagesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CompareLanguagesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompareLanguagesComponent, selectors: [["aida-compare-languages"]], viewQuery: function CompareLanguagesComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.data, _c03, 5)(ctx.html, _c13, 5)(ctx.hidden, _c23, 5)(ctx.numbers, _c3, 5)(ctx.ai, _c4, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance(5);
    }
  }, inputs: { summaryMode: [1, "summaryMode"] }, decls: 14, vars: 1, consts: [["summary", ""], ["data", ""], ["html", ""], ["hidden", ""], ["numbers", ""], ["ai", ""], ["headless", ""], [4, "ngTemplateOutlet"], ["id", "wb-cont"], [1, "flex", "flex-column", "gap-2"], [1, "flex", "flex-column", "xl:flex-row", "gap-2"], [3, "versionsToShow"], [1, "min-w-max"], ["id", "compare-tools", 1, "mt-0"], ["icon", "pi pi-info-circle", "severity", "info"], [1, "mt-3", 3, "value"], ["value", "0"], [1, "flex", "align-items-center", "gap-2"], [1, "material-icons-outlined"], [1, "pi", "pi-spin", "pi-spinner", "text-primary", "text-lg"], [3, "severity", "value"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], [1, "pi", "pi-exclamation-circle", "text-red", "text-lg"], [1, "pi", "pi-question-circle", "text-blue", "text-lg"], ["value", "5"], [1, "border-1", "border-top-none", "border-round-bottom", "surface-border"], [3, "iframeEnglish", "iframeFrench", "is404"], [1, "mt-0"], [1, "flex", "justify-content-between", "align-items-center", "gap-4"], [1, "m-0"], [1, "text-green", "pr-2"], [1, "text-red", "pr-2"], [1, "list-none", "mx-0", "my-1", "p-0"], [1, "flex", "justify-content-end", "align-items-center", "gap-2", "mt-4", "text-primary", "hover:text-primary"], ["fluid", "", 3, "onClick", "styleClass", "text"], [1, "flex", "gap-2", "align-items-center"], [1, "flex", "gap-1", "align-items-center"], [1, "loading-dots", "-ml-1"], ["styleClass", "w-10", 3, "header", "maximizable", "modal", "visible"], ["styleClass", "w-10", 3, "visibleChange", "header", "maximizable", "modal", "visible"], [1, "flex", "flex-column", "gap-2", "px-4", "pt-4", "pb-2"], ["outlined", "", "severity", "secondary", "styleClass", "secondary-outline", 1, "align-self-end", 3, "onClick", "label"], [3, "routerLink"], [1, "pi", "pi-arrow-right"], [3, "is404", "selectedBase", "selectedLive", "selectedNode", "selectedProto"], [3, "htmlRows", "is404"], [3, "hiddenRows", "is404"], [3, "is404", "numberRows"], [3, "aiEnglish", "aiFrench", "is404"]], template: function CompareLanguagesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, CompareLanguagesComponent_Conditional_0_Template, 1, 1, "ng-container")(1, CompareLanguagesComponent_Conditional_1_Template, 19, 21);
      \u0275\u0275template(2, CompareLanguagesComponent_ng_template_2_Template, 3, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, CompareLanguagesComponent_ng_template_4_Template, 1, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(6, CompareLanguagesComponent_ng_template_6_Template, 1, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(8, CompareLanguagesComponent_ng_template_8_Template, 1, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(10, CompareLanguagesComponent_ng_template_10_Template, 1, 2, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(12, CompareLanguagesComponent_ng_template_12_Template, 1, 3, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.summaryMode() ? 0 : 1);
    }
  }, dependencies: [
    NgTemplateOutlet,
    RouterLink,
    BadgeModule,
    Badge,
    ButtonModule,
    Button,
    DialogModule,
    Dialog,
    MessageModule,
    Message,
    TabsModule,
    Tabs,
    TabPanels,
    TabPanel,
    TabList,
    Tab,
    CompareAiLangComponent,
    CompareDataComponent,
    CompareHiddenComponent,
    CompareHtmlComponent,
    CompareNumbersComponent,
    CompareSelectComponent,
    CompareWebComponent,
    TranslatePipe
  ], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompareLanguagesComponent, [{
    type: Component,
    args: [{ selector: "aida-compare-languages", imports: [
      NgTemplateOutlet,
      RouterLink,
      TranslatePipe,
      BadgeModule,
      ButtonModule,
      DialogModule,
      MessageModule,
      TabsModule,
      CompareAiLangComponent,
      CompareDataComponent,
      CompareHiddenComponent,
      CompareHtmlComponent,
      CompareNumbersComponent,
      CompareSelectComponent,
      CompareWebComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `@if (summaryMode()) {
  <ng-container *ngTemplateOutlet="summary" />
} @else {
  <h1 id="wb-cont">{{ 'languages._title' | translate }}</h1>
  <p>{{ 'languages.description' | translate }}{{ 'languages.description2' | translate }}</p>

  <div class="flex flex-column gap-2">
    <div class="flex flex-column xl:flex-row gap-2">
      <div [class]="styleCardService.cardStyles()">
        <aida-compare-select [versionsToShow]="1" />
      </div>
      <div [class]="styleCardService.cardStyles()" class="min-w-max">
        <ng-container *ngTemplateOutlet="summary" />
      </div>
    </div>

    <div [class]="styleCardService.cardStyles()">
      <h2 id="compare-tools" class="mt-0">{{ 'languages.tools.header' | translate }}</h2>
      @let page = compareService.selectedPage();
      @if (!page) {
        <p-message icon="pi pi-info-circle" severity="info">{{ 'pageOptions.description.0' | translate }}</p-message>
      } @else {
        <p-tabs [value]="activeTab()" class="mt-3">
          <p-tablist>
            <p-tab value="0">
              <div class="flex align-items-center gap-2">
                <span class="material-icons-outlined">checklist</span>
                {{ 'languages.dataCompare.tab' | translate }}
                @if (projectState.refreshing().baseline || projectState.refreshing().prototype || projectState.refreshing().live) {
                  <i class="pi pi-spin pi-spinner text-primary text-lg"></i>
                } @else {
                  <p-badge [severity]="dataProblems().live === 0 ? 'success' : 'danger'" [value]="dataProblems().base + ' / ' + dataProblems().proto + ' / ' + dataProblems().live" />
                }
              </div>
            </p-tab>
            <p-tab value="1">
              <div class="flex align-items-center gap-2">
                <span class="material-icons-outlined">code</span>
                {{ 'languages.htmlStructure.tab' | translate }}
                <p-badge [severity]="htmlProblems() === 0 ? 'success' : 'danger'" [value]="htmlProblems()" />
              </div>
            </p-tab>
            <p-tab value="2">
              <div class="flex align-items-center gap-2">
                <span class="material-icons-outlined">visibility_off</span>
                {{ 'languages.hidden.tab' | translate }}
                <p-badge [severity]="hiddenProblems() === 0 ? 'success' : 'danger'" [value]="hiddenProblems()" />
              </div>
            </p-tab>
            <p-tab value="3">
              <div class="flex align-items-center gap-2">
                <span class="material-icons-outlined">numbers</span>
                {{ 'languages.numbers.tab' | translate }}
                <p-badge [severity]="numberProblems() === 0 ? 'success' : 'danger'" [value]="numberProblems()" />
              </div>
            </p-tab>
            <p-tab value="4">
              <div class="flex align-items-center gap-2">
                <span class="material-icons-outlined">auto_awesome</span>
                {{ 'languages.aiSummary.tab' | translate }}
                @if (aiProblems().status === 'pending') {
                  <i class="pi pi-spin pi-spinner text-primary text-lg"></i>
                } @else if (aiProblems().status === 'error') {
                  <i class="pi pi-exclamation-circle text-red text-lg"></i>
                } @else if (aiProblems().status === 'done') {
                  <p-badge [severity]="aiProblems().result === 0 ? 'success' : 'danger'" [value]="aiProblems().result" />
                } @else {
                  <i class="pi pi-question-circle text-blue text-lg"></i>
                }
              </div>
            </p-tab>
            <p-tab value="5">
              <div class="flex align-items-center gap-2">
                <span class="material-icons-outlined">compare</span>
                {{ 'languages.webView.tab' | translate }}
              </div>
            </p-tab>
          </p-tablist>
          <p-tabpanels class="border-1 border-top-none border-round-bottom surface-border">
            <!-- Data comparison -->
            <p-tabpanel value="0"><ng-container *ngTemplateOutlet="data" /></p-tabpanel>
            <!-- HTML comparison -->
            <p-tabpanel value="1"><ng-container *ngTemplateOutlet="html" /></p-tabpanel>
            <!-- Hidden comparison -->
            <p-tabpanel value="2"><ng-container *ngTemplateOutlet="hidden" /></p-tabpanel>
            <!-- Numbers comparison -->
            <p-tabpanel value="3"><ng-container *ngTemplateOutlet="numbers" /></p-tabpanel>
            <!-- AI summary comparison -->
            <p-tabpanel value="4"><ng-container *ngTemplateOutlet="ai" /></p-tabpanel>
            <!-- Rendered page comparison -->
            <p-tabpanel value="5">
              <aida-compare-web [iframeEnglish]="iframeEnglish()" [iframeFrench]="iframeFrench()" [is404]="is404()" />
            </p-tabpanel>
          </p-tabpanels>
        </p-tabs>
      }
    </div>
  </div>
}
<ng-template #summary>
  @if (!summaryMode()) {
    <h2 class="mt-0">{{ 'languages.summary.header' | translate }}</h2>
  }
  @if (!compareService.selectedPage()) {
    <p-message icon="pi pi-info-circle" severity="info">{{ 'pageOptions.description.0' | translate }}</p-message>
  } @else {
    <div class="flex justify-content-between align-items-center gap-4">
      <h3 class="m-0">{{ 'languages.tools.header' | translate }}</h3>
      @if (totalProblems() === 0) {
        <span class="text-green pr-2">{{ 'languages.summary.noProblems' | translate }}</span>
      } @else {
        <span class="text-red pr-2">{{ 'languages.summary.toReview' | translate: { count: totalProblems() } }}</span>
      }
    </div>

    <ul class="list-none mx-0 my-1 p-0">
      @for (row of summaryRows(); track row.tab) {
        <li>
          <p-button
            [styleClass]="
              activeTab() === row.tab && !summaryMode()
                ? 'h-3rem flex justify-content-between gap-2 border-1 secondary-border bg-primary-light hover:bg-primary-light'
                : 'h-3rem flex justify-content-between gap-2'
            "
            [text]="activeTab() !== row.tab || summaryMode()"
            (onClick)="!summaryMode() ? openTab(row.tab) : openDialog.set(row)"
            fluid
          >
            <div class="flex gap-2 align-items-center">
              <span class="material-icons-outlined">{{ row.icon }}</span>
              <span>{{ row.label | translate }}</span>
              @if (row.state === 'loading') {
                <i class="pi pi-spin pi-spinner text-primary text-lg"></i>
              } @else if (row.state === 'error') {
                <i class="pi pi-exclamation-circle text-red text-lg"></i>
              } @else if (row.state === 'ok' || row.state === 'problem') {
                @if (row.detail) {
                  <p-badge [severity]="row.state === 'problem' ? 'danger' : 'success'" [value]="row.detail" />
                } @else {
                  <p-badge [severity]="row.state === 'problem' ? 'danger' : 'success'" [value]="row.count" />
                }
              } @else {
                <i class="pi pi-question-circle text-blue text-lg"></i>
              }
            </div>
            <div class="flex gap-1 align-items-center">
              <span [class]="row.state === 'problem' || row.state === 'error' ? 'text-red' : row.state === 'ok' ? 'text-green' : 'text-color-secondary'">
                {{ 'languages.summary.' + row.state | translate: { count: row.count } }}
                @if (row.state === 'loading') {
                  <span class="loading-dots -ml-1"></span>
                }
              </span>
              <i [class]="summaryMode() ? 'pi pi-question-circle text-primary' : 'pi pi-chevron-right text-color-secondary'"></i>
            </div>
          </p-button>
        </li>
        @if (openDialog(); as row) {
          <p-dialog [header]="row.label | translate" [maximizable]="true" [modal]="true" [visible]="true" (visibleChange)="$event || openDialog.set(null)" styleClass="w-10">
            <ng-template #headless>
              <div class="flex flex-column gap-2 px-4 pt-4 pb-2">
                <ng-container *ngTemplateOutlet="row.template" />
                <p-button [label]="'common.close' | translate" (onClick)="openDialog.set(null)" class="align-self-end" outlined severity="secondary" styleClass="secondary-outline" />
              </div>
            </ng-template>
          </p-dialog>
        }
      }
    </ul>
    @if (summaryMode()) {
      <div class="flex justify-content-end align-items-center gap-2 mt-4 text-primary hover:text-primary">
        <a [routerLink]="AidaLinks.ProjectLanguages">{{ 'languages._title' | translate }}</a>
        <i class="pi pi-arrow-right"></i>
      </div>
    }
  }
</ng-template>

<ng-template #data>
  <aida-compare-data [is404]="is404()" [selectedBase]="selectedBase()" [selectedLive]="selectedLive()" [selectedNode]="selectedNode()" [selectedProto]="selectedProto()" />
</ng-template>

<ng-template #html>
  <aida-compare-html [htmlRows]="htmlRows()" [is404]="is404()" />
</ng-template>

<ng-template #hidden>
  <aida-compare-hidden [hiddenRows]="hiddenRows()" [is404]="is404()" />
</ng-template>

<ng-template #numbers>
  <aida-compare-numbers [is404]="is404()" [numberRows]="numberRows()" />
</ng-template>

<ng-template #ai>
  <aida-compare-ai-lang [aiEnglish]="aiEnglish()" [aiFrench]="aiFrench()" [is404]="is404()" />
</ng-template>
` }]
  }], () => [], { summaryMode: [{ type: Input, args: [{ isSignal: true, alias: "summaryMode", required: false }] }], data: [{ type: ViewChild, args: ["data", { isSignal: true }] }], html: [{ type: ViewChild, args: ["html", { isSignal: true }] }], hidden: [{ type: ViewChild, args: ["hidden", { isSignal: true }] }], numbers: [{ type: ViewChild, args: ["numbers", { isSignal: true }] }], ai: [{ type: ViewChild, args: ["ai", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompareLanguagesComponent, { className: "CompareLanguagesComponent", filePath: "src/app/views/tasks/compare-languages/compare-languages.component.ts", lineNumber: 77 });
})();

export {
  CompareLanguagesComponent
};
//# sourceMappingURL=chunk-CBIZQ6VD.js.map
