import {
  CompareRenderedComponent,
  CompareSourceComponent
} from "./chunk-WYFK27UY.js";
import "./chunk-4PD5MA34.js";
import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  TabsModule
} from "./chunk-4ECWLYHO.js";
import "./chunk-GGIC4QUJ.js";
import {
  StyleCardService
} from "./chunk-XN4WNFGN.js";
import "./chunk-P3TRDY63.js";
import "./chunk-NQRO2LC7.js";
import "./chunk-OFBI5QRC.js";
import {
  IftaLabel,
  IftaLabelModule
} from "./chunk-FQDO2XGS.js";
import {
  DiffUndoStack
} from "./chunk-D57SAGZH.js";
import {
  HtmlNormalizationService
} from "./chunk-6U2RHGUD.js";
import {
  FetchService
} from "./chunk-M6FDN6OY.js";
import "./chunk-BHVFX6OF.js";
import {
  DefaultValueAccessor,
  FormsModule,
  InputText,
  InputTextModule,
  NgControlStatus,
  NgModel
} from "./chunk-QN4TTD5X.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-7YP54JN5.js";
import {
  ChangeDetectionStrategy,
  Component,
  TranslatePipe,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
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

// src/app/views/toolbox/standalone-tools/standalone-compare-versions/standalone-compare-versions.component.ts
var StandaloneCompareComponent = class _StandaloneCompareComponent {
  router = inject(Router);
  route = inject(ActivatedRoute);
  styleCardService = inject(StyleCardService);
  htmlNormalizationService = inject(HtmlNormalizationService);
  fetchService = inject(FetchService);
  // Signals
  originalHtml = signal(void 0, ...ngDevMode ? [{ debugName: "originalHtml" }] : (
    /* istanbul ignore next */
    []
  ));
  modifiedHtml = signal(void 0, ...ngDevMode ? [{ debugName: "modifiedHtml" }] : (
    /* istanbul ignore next */
    []
  ));
  hasChanges = signal(false, ...ngDevMode ? [{ debugName: "hasChanges" }] : (
    /* istanbul ignore next */
    []
  ));
  undoStack = new DiffUndoStack();
  // Variables
  beforeUrl = "";
  afterUrl = "";
  ngOnInit() {
    this.route.queryParams.subscribe((params) => __async(this, null, function* () {
      const allParams = __spreadValues({}, params);
      if (params["before"] !== void 0) {
        if (!this.fetchService.isValidUrl(params["before"]))
          return;
        this.beforeUrl = params["before"];
        const before = yield this.loadContent(params["before"]);
        this.originalHtml.set(before);
      }
      if (params["after"] !== void 0) {
        if (!this.fetchService.isValidUrl(params["after"]))
          return;
        this.afterUrl = params["after"];
        const after = yield this.loadContent(params["after"]);
        this.modifiedHtml.set(after);
      }
      if (Object.keys(params).length !== Object.keys(allParams).length) {
        this.router.navigate([], {
          queryParams: allParams,
          replaceUrl: true
        });
      }
    }));
  }
  loadContent(url) {
    return __async(this, null, function* () {
      const fetchType = url.startsWith("http://cra-ut.isvcs.net/") || url.startsWith("https://canada-preview.adobecqms.net/") ? "proxy" : "url";
      return yield this.htmlNormalizationService.normalizeHTML(url, fetchType);
    });
  }
  updateHtml(url, version) {
    return __async(this, null, function* () {
      if (!this.fetchService.isValidUrl(url))
        return;
      const content = yield this.loadContent(url);
      if (version === "before") {
        this.originalHtml.set(content);
      }
      if (version === "after") {
        this.modifiedHtml.set(content);
      }
    });
  }
  /** Handle accept/reject changes */
  onContentChanged(event) {
    const originalHtml = this.originalHtml() ?? this.modifiedHtml();
    const modifiedHtml = this.modifiedHtml() ?? this.originalHtml();
    if (originalHtml && modifiedHtml)
      this.undoStack.push({
        beforeContent: originalHtml,
        afterContent: modifiedHtml
      });
    this.originalHtml.set(event.beforeContent);
    this.modifiedHtml.set(event.afterContent);
  }
  /** Track if any changes exist to accept/reject */
  onHasChanges(event) {
    this.hasChanges.set(event);
    console.log(event);
  }
  /** Undo accepted/rejected changes */
  onUndo() {
    const snapshot = this.undoStack.pop();
    if (!snapshot)
      return;
    this.originalHtml.set(snapshot.beforeContent);
    this.modifiedHtml.set(snapshot.afterContent);
  }
  static \u0275fac = function StandaloneCompareComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StandaloneCompareComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StandaloneCompareComponent, selectors: [["aida-standalone-compare-versions"]], decls: 37, vars: 34, consts: [["id", "wb-cont"], [1, "flex", "gap-2", "mb-3"], [1, "text-lg", "mb-0", "white-space-nowrap"], [1, "w-full"], ["id", "before", "fluid", "", "pInputText", "", "type", "text", "variant", "outlined", 1, "secondary-outline", 3, "ngModelChange", "blur", "ngModel"], ["for", "before"], ["id", "after", "fluid", "", "pInputText", "", "type", "text", "variant", "outlined", 1, "secondary-outline", 3, "ngModelChange", "blur", "ngModel"], ["for", "after"], ["value", "0", 1, "mt-3"], ["value", "0"], [1, "pi", "pi-eye", "mr-1"], ["value", "1"], [1, "pi", "pi-code", "mr-1"], [1, "shadow-1"], [3, "contentChanged", "hasChanges", "undoChanges", "afterContent", "beforeContent", "canUndo"]], template: function StandaloneCompareComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h1", 0);
      \u0275\u0275text(1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p");
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 1)(8, "h2", 2);
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "p-iftalabel", 3)(12, "input", 4);
      \u0275\u0275twoWayListener("ngModelChange", function StandaloneCompareComponent_Template_input_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.beforeUrl, $event) || (ctx.beforeUrl = $event);
        return $event;
      });
      \u0275\u0275listener("blur", function StandaloneCompareComponent_Template_input_blur_12_listener() {
        return ctx.updateHtml(ctx.beforeUrl, "before");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "label", 5);
      \u0275\u0275text(14);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "p-iftalabel", 3)(17, "input", 6);
      \u0275\u0275twoWayListener("ngModelChange", function StandaloneCompareComponent_Template_input_ngModelChange_17_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.afterUrl, $event) || (ctx.afterUrl = $event);
        return $event;
      });
      \u0275\u0275listener("blur", function StandaloneCompareComponent_Template_input_blur_17_listener() {
        return ctx.updateHtml(ctx.afterUrl, "after");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "label", 7);
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div")(22, "p-tabs", 8)(23, "p-tablist")(24, "p-tab", 9);
      \u0275\u0275element(25, "i", 10);
      \u0275\u0275text(26);
      \u0275\u0275pipe(27, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "p-tab", 11);
      \u0275\u0275element(29, "i", 12);
      \u0275\u0275text(30);
      \u0275\u0275pipe(31, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "p-tabpanels", 13)(33, "p-tabpanel", 9)(34, "aida-compare-rendered", 14);
      \u0275\u0275listener("contentChanged", function StandaloneCompareComponent_Template_aida_compare_rendered_contentChanged_34_listener($event) {
        return ctx.onContentChanged($event);
      })("hasChanges", function StandaloneCompareComponent_Template_aida_compare_rendered_hasChanges_34_listener($event) {
        return ctx.onHasChanges($event);
      })("undoChanges", function StandaloneCompareComponent_Template_aida_compare_rendered_undoChanges_34_listener() {
        return ctx.onUndo();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "p-tabpanel", 11)(36, "aida-compare-source", 14);
      \u0275\u0275listener("contentChanged", function StandaloneCompareComponent_Template_aida_compare_source_contentChanged_36_listener($event) {
        return ctx.onContentChanged($event);
      })("hasChanges", function StandaloneCompareComponent_Template_aida_compare_source_hasChanges_36_listener($event) {
        return ctx.onHasChanges($event);
      })("undoChanges", function StandaloneCompareComponent_Template_aida_compare_source_undoChanges_36_listener() {
        return ctx.onUndo();
      });
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 18, "compare._title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(5, 20, "compare.description"), "", \u0275\u0275pipeBind1(6, 22, "compare.description2"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 24, "compare.urlsToCompre"));
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.beforeUrl);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 26, "common.before"));
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.afterUrl);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 28, "common.after"));
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.styleCardService.cardStyles());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 30, "compare.tab.rendered"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 32, "compare.tab.source"));
      \u0275\u0275advance(4);
      \u0275\u0275property("afterContent", ctx.modifiedHtml())("beforeContent", ctx.originalHtml())("canUndo", ctx.undoStack.canUndo());
      \u0275\u0275advance(2);
      \u0275\u0275property("afterContent", ctx.modifiedHtml())("beforeContent", ctx.originalHtml())("canUndo", ctx.undoStack.canUndo());
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, IftaLabelModule, IftaLabel, InputTextModule, InputText, TabsModule, Tabs, TabPanels, TabPanel, TabList, Tab, CompareRenderedComponent, CompareSourceComponent, TranslatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StandaloneCompareComponent, [{
    type: Component,
    args: [{ selector: "aida-standalone-compare-versions", imports: [FormsModule, TranslatePipe, IftaLabelModule, InputTextModule, TabsModule, CompareRenderedComponent, CompareSourceComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<h1 id="wb-cont">{{ 'compare._title' | translate }}</h1>
<p>{{ 'compare.description' | translate }}{{ 'compare.description2' | translate }}</p>

<div class="flex gap-2 mb-3">
  <h2 class="text-lg mb-0 white-space-nowrap">{{ 'compare.urlsToCompre' | translate }}</h2>
  <p-iftalabel class="w-full">
    <input id="before" [(ngModel)]="beforeUrl" (blur)="updateHtml(beforeUrl, 'before')" class="secondary-outline" fluid pInputText type="text" variant="outlined" />
    <label for="before">{{ 'common.before' | translate }}</label>
  </p-iftalabel>
  <p-iftalabel class="w-full">
    <input id="after" [(ngModel)]="afterUrl" (blur)="updateHtml(afterUrl, 'after')" class="secondary-outline" fluid pInputText type="text" variant="outlined" />
    <label for="after">{{ 'common.after' | translate }}</label>
  </p-iftalabel>
</div>

<div [class]="styleCardService.cardStyles()">
  <p-tabs value="0" class="mt-3">
    <p-tablist>
      <p-tab value="0"><i class="pi pi-eye mr-1"></i>{{ 'compare.tab.rendered' | translate }}</p-tab>
      <p-tab value="1"><i class="pi pi-code mr-1"></i>{{ 'compare.tab.source' | translate }}</p-tab>
    </p-tablist>
    <p-tabpanels class="shadow-1">
      <!-- Rendered page -->
      <p-tabpanel value="0">
        <aida-compare-rendered
          [afterContent]="modifiedHtml()"
          [beforeContent]="originalHtml()"
          [canUndo]="undoStack.canUndo()"
          (contentChanged)="onContentChanged($event)"
          (hasChanges)="onHasChanges($event)"
          (undoChanges)="onUndo()"
        />
      </p-tabpanel>
      <!-- Source code -->
      <p-tabpanel value="1">
        <aida-compare-source
          [afterContent]="modifiedHtml()"
          [beforeContent]="originalHtml()"
          [canUndo]="undoStack.canUndo()"
          (contentChanged)="onContentChanged($event)"
          (hasChanges)="onHasChanges($event)"
          (undoChanges)="onUndo()"
        />
      </p-tabpanel>
    </p-tabpanels>
  </p-tabs>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StandaloneCompareComponent, { className: "StandaloneCompareComponent", filePath: "src/app/views/toolbox/standalone-tools/standalone-compare-versions/standalone-compare-versions.component.ts", lineNumber: 26 });
})();
export {
  StandaloneCompareComponent
};
//# sourceMappingURL=chunk-R2FWTJEO.js.map
