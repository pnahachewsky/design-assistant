import {
  AutoComplete,
  AutoCompleteModule,
  ProgressBar,
  ProgressBarModule
} from "./chunk-OE6OK7VB.js";
import {
  ProgressSpinner,
  ProgressSpinnerModule
} from "./chunk-22EMPEFJ.js";
import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  TabsModule
} from "./chunk-4ECWLYHO.js";
import {
  AddUrlsService,
  GetChildPagesService
} from "./chunk-R3QN56LQ.js";
import {
  EditNodeComponent
} from "./chunk-YRT4I34E.js";
import {
  Tag,
  TagModule
} from "./chunk-4673KVKI.js";
import {
  Message,
  MessageModule
} from "./chunk-GGIC4QUJ.js";
import {
  InputNumber,
  InputNumberModule
} from "./chunk-5QMHUOJQ.js";
import {
  Textarea,
  TextareaModule
} from "./chunk-Y576ZK6L.js";
import {
  Dialog,
  DialogModule
} from "./chunk-2YFXSVHN.js";
import {
  IftaLabel,
  IftaLabelModule
} from "./chunk-FQDO2XGS.js";
import {
  AirtableService,
  ProjectStateService
} from "./chunk-AW5MQYZC.js";
import {
  Checkbox,
  CheckboxModule
} from "./chunk-REIT3HFO.js";
import {
  FetchService
} from "./chunk-M6FDN6OY.js";
import {
  Select,
  SelectModule
} from "./chunk-JR3PODJQ.js";
import {
  Badge,
  BadgeModule,
  Button,
  ButtonModule,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  Tooltip,
  TooltipModule,
  marker
} from "./chunk-QN4TTD5X.js";
import {
  CommonModule,
  DecimalPipe,
  NgTemplateOutlet
} from "./chunk-7YP54JN5.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  TranslatePipe,
  TranslateService,
  ViewChild,
  computed,
  effect,
  inject,
  input,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
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
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleMap,
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
} from "./chunk-KRHY6Z2H.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-YCXP4XZS.js";

// src/app/components/add-pages/by-children/get-child-urls.component.ts
var _c0 = (a0) => ({ number: a0 });
var _forTrack0 = ($index, $item) => $item.url;
function GetChildPagesComponent_Conditional_17_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 7);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const progress_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(3, 4, "findPages.findChildren.progressDepth"), " ", progress_r1.depth);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", progress_r1.processedUrls, "/", progress_r1.totalUrls);
  }
}
function GetChildPagesComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-progressbar", 5);
    \u0275\u0275pipe(1, "number");
    \u0275\u0275template(2, GetChildPagesComponent_Conditional_17_ng_template_2_Template, 6, 6, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const progress_r1 = ctx;
    \u0275\u0275property("value", \u0275\u0275pipeBind2(1, 1, progress_r1.processedUrls / progress_r1.totalUrls * 100, "1.0-0"));
  }
}
function GetChildPagesComponent_Conditional_18_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "p-checkbox", 14);
    \u0275\u0275twoWayListener("ngModelChange", function GetChildPagesComponent_Conditional_18_For_11_Template_p_checkbox_ngModelChange_1_listener($event) {
      const \u0275$index_57_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.childUrls()[\u0275$index_57_r5].selected, $event) || (ctx_r2.childUrls()[\u0275$index_57_r5].selected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function GetChildPagesComponent_Conditional_18_For_11_Template_p_checkbox_ngModelChange_1_listener($event) {
      const \u0275$index_57_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleChildUrl(\u0275$index_57_r5, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 15);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const \u0275$index_57_r5 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.childUrls()[\u0275$index_57_r5].selected);
    \u0275\u0275property("binary", true)("inputId", "url-" + \u0275$index_57_r5);
    \u0275\u0275advance();
    \u0275\u0275property("for", "url-" + \u0275$index_57_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r6.url);
  }
}
function GetChildPagesComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h3", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9)(4, "p-button", 10);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275listener("onClick", function GetChildPagesComponent_Conditional_18_Template_p_button_onClick_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addUrlsToProject());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 11);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 12);
    \u0275\u0275repeaterCreate(10, GetChildPagesComponent_Conditional_18_For_11_Template, 4, 5, "div", 13, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 3, "findPages.findChildren.urls"));
    \u0275\u0275advance(3);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(5, 5, "findPages.task.addToProject"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 7, "findPages.task.addToProject.description", \u0275\u0275pureFunction1(10, _c0, ctx_r2.selectedChildUrlsCount())));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.childUrls());
  }
}
function GetChildPagesComponent_Conditional_19_Template(rf, ctx) {
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
var GetChildPagesComponent = class _GetChildPagesComponent {
  // Services
  projectState = inject(ProjectStateService);
  getChildPagesService = inject(GetChildPagesService);
  addUrlsService = inject(AddUrlsService);
  childUrls = signal([], ...ngDevMode ? [{ debugName: "childUrls" }] : (
    /* istanbul ignore next */
    []
  ));
  // Count selected child urls
  selectedChildUrlsCount = computed(() => this.childUrls().filter((child) => child.selected).length, ...ngDevMode ? [{ debugName: "selectedChildUrlsCount" }] : (
    /* istanbul ignore next */
    []
  ));
  // Toggle selection
  toggleChildUrl(index, selected) {
    this.childUrls.update((urls) => {
      const updated = [...urls];
      updated[index] = __spreadProps(__spreadValues({}, updated[index]), { selected });
      return updated;
    });
  }
  findChildPages() {
    return __async(this, null, function* () {
      const depth = this.getChildPagesService.depth;
      if (depth < 1)
        return;
      const lang = this.projectState.detectPrimaryLanguage();
      const inScopeUrls = new Set(this.projectState.getAllPages(lang, "live", "inScope").map((page) => page.url));
      const childPages = yield this.getChildPagesService.findChildren(inScopeUrls, depth);
      this.childUrls.set(childPages.map((url) => ({ url, selected: true })));
    });
  }
  // Add to project
  addUrlsToProject() {
    const selectedUrls = this.childUrls().filter((item) => item.selected).map((item) => item.url);
    this.addUrlsService.appendUrlsToInput(selectedUrls);
    this.childUrls.set([]);
  }
  static \u0275fac = function GetChildPagesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GetChildPagesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GetChildPagesComponent, selectors: [["aida-get-child-pages"]], decls: 20, vars: 22, consts: [["content", ""], [1, "flex", "flex-row", "gap-1"], ["inputId", "depth", "mode", "decimal", "variant", "outlined", 1, "secondary-outline", 3, "ngModelChange", "ngModel", "max", "min", "showButtons"], ["for", "depth"], ["icon", "pi pi-search", 1, "flex", "min-h-full", "white-space-nowrap", 3, "click", "label", "loading"], ["styleClass", "h-2rem centered-label mt-1 transition-duration-100", 3, "value"], [1, "flex", "flex-row", "gap-6"], [1, "text-white"], [1, "text-xl", "my-2"], [1, "flex", "flex-row", "align-items-center", "gap-2"], ["icon", "pi pi-plus", 3, "onClick", "label"], [1, "text-color-secondary"], [1, "flex", "flex-column", "gap-2", "max-h-64", "overflow-y-auto", "border", "border-color-border", "p-2", "rounded"], [1, "flex", "align-items-center", "gap-2"], ["size", "large", 3, "ngModelChange", "ngModel", "binary", "inputId"], [1, "break-all", 3, "for"]], template: function GetChildPagesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h3");
      \u0275\u0275text(1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p");
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p");
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 1)(10, "p-iftalabel")(11, "p-inputnumber", 2);
      \u0275\u0275twoWayListener("ngModelChange", function GetChildPagesComponent_Template_p_inputnumber_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.getChildPagesService.depth, $event) || (ctx.getChildPagesService.depth = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "label", 3);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "p-button", 4);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275listener("click", function GetChildPagesComponent_Template_p_button_click_15_listener() {
        return ctx.findChildPages();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(17, GetChildPagesComponent_Conditional_17_Template, 4, 4, "p-progressbar", 5);
      \u0275\u0275conditionalCreate(18, GetChildPagesComponent_Conditional_18_Template, 12, 12)(19, GetChildPagesComponent_Conditional_19_Template, 3, 3, "p");
    }
    if (rf & 2) {
      let tmp_10_0;
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 12, "findPages.findChildren._title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 14, "findPages.findChildren.description"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 16, "findPages.findChildren.description2"));
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.getChildPagesService.depth);
      \u0275\u0275property("max", 6)("min", 0)("showButtons", true);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 18, "findPages.findChildren.depth"));
      \u0275\u0275advance(2);
      \u0275\u0275property("label", \u0275\u0275pipeBind1(16, 20, "findPages.findChildren.add"))("loading", ctx.getChildPagesService.searchProgress());
      \u0275\u0275advance(2);
      \u0275\u0275conditional((tmp_10_0 = ctx.getChildPagesService.searchProgress()) ? 17 : -1, tmp_10_0);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.childUrls().length > 0 ? 18 : ctx.selectedChildUrlsCount() > 0 ? 19 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, NgControlStatus, NgModel, ButtonModule, Button, CheckboxModule, Checkbox, IftaLabelModule, IftaLabel, InputNumberModule, InputNumber, ProgressBarModule, ProgressBar, DecimalPipe, TranslatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GetChildPagesComponent, [{
    type: Component,
    args: [{ selector: "aida-get-child-pages", standalone: true, imports: [CommonModule, FormsModule, TranslatePipe, ButtonModule, CheckboxModule, IftaLabelModule, InputNumberModule, ProgressBarModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<h3>{{ 'findPages.findChildren._title' | translate }}</h3>
<p>{{ 'findPages.findChildren.description' | translate }}</p>
<p>{{ 'findPages.findChildren.description2' | translate }}</p>
<div class="flex flex-row gap-1">
  <p-iftalabel>
    <p-inputnumber [(ngModel)]="getChildPagesService.depth" [max]="6" [min]="0" [showButtons]="true" class="secondary-outline" inputId="depth" mode="decimal" variant="outlined" />
    <label for="depth">{{ 'findPages.findChildren.depth' | translate }}</label>
  </p-iftalabel>
  <p-button
    [label]="'findPages.findChildren.add' | translate"
    [loading]="getChildPagesService.searchProgress()"
    (click)="findChildPages()"
    class="flex min-h-full white-space-nowrap"
    icon="pi pi-search"
  />
</div>
@if (getChildPagesService.searchProgress(); as progress) {
  <p-progressbar [value]="(progress.processedUrls / progress.totalUrls) * 100 | number: '1.0-0'" styleClass="h-2rem centered-label mt-1 transition-duration-100">
    <ng-template #content>
      <div class="flex flex-row gap-6">
        <span class="text-white">{{ 'findPages.findChildren.progressDepth' | translate }} {{ progress.depth }}</span>
        <span class="text-white">{{ progress.processedUrls }}/{{ progress.totalUrls }}</span>
      </div>
    </ng-template>
  </p-progressbar>
}
<!-- URLs List Section -->
@if (childUrls().length > 0) {
  <h3 class="text-xl my-2">{{ 'findPages.findChildren.urls' | translate }}</h3>
  <div class="flex flex-row align-items-center gap-2">
    <p-button [label]="'findPages.task.addToProject' | translate" (onClick)="addUrlsToProject()" icon="pi pi-plus" />
    <p class="text-color-secondary">{{ 'findPages.task.addToProject.description' | translate: { number: selectedChildUrlsCount() } }}</p>
  </div>
  <div class="flex flex-column gap-2 max-h-64 overflow-y-auto border border-color-border p-2 rounded">
    @for (item of childUrls(); track item.url; let i = $index) {
      <div class="flex align-items-center gap-2">
        <p-checkbox [(ngModel)]="childUrls()[i].selected" [binary]="true" [inputId]="'url-' + i" (ngModelChange)="toggleChildUrl(i, $event)" size="large" />
        <label [for]="'url-' + i" class="break-all">{{ item.url }}</label>
      </div>
    }
  </div>
} @else if (selectedChildUrlsCount() > 0) {
  <p>{{ 'findPages.findChildren.noUrls' | translate }}</p>
}
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GetChildPagesComponent, { className: "GetChildPagesComponent", filePath: "src/app/components/add-pages/by-children/get-child-urls.component.ts", lineNumber: 24 });
})();

// src/app/components/add-pages/by-task/get-task-urls.component.ts
var _c02 = (a0) => ({ number: a0 });
var _forTrack02 = ($index, $item) => $item.url;
function GetTaskUrlsComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "p-tag", 6);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const task_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("rounded", true)("severity", task_r2.urlCount === 0 ? "danger" : "success")("value", task_r2.urlCount.toString());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r2.label);
  }
}
function GetTaskUrlsComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const selected_r3 = ctx.$implicit;
    \u0275\u0275textInterpolate(selected_r3.label);
  }
}
function GetTaskUrlsComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "p-progressspinner", 7);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275element(5, "span", 8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "findPages.task.loadingTasks"));
  }
}
function GetTaskUrlsComponent_Conditional_19_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "p-checkbox", 14);
    \u0275\u0275twoWayListener("ngModelChange", function GetTaskUrlsComponent_Conditional_19_For_11_Template_p_checkbox_ngModelChange_1_listener($event) {
      const \u0275$index_59_r7 = \u0275\u0275restoreView(_r6).$index;
      const ctx_r4 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r4.taskUrls()[\u0275$index_59_r7].selected, $event) || (ctx_r4.taskUrls()[\u0275$index_59_r7].selected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function GetTaskUrlsComponent_Conditional_19_For_11_Template_p_checkbox_ngModelChange_1_listener($event) {
      const \u0275$index_59_r7 = \u0275\u0275restoreView(_r6).$index;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.toggleTaskUrl(\u0275$index_59_r7, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 15);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const \u0275$index_59_r7 = ctx.$index;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.taskUrls()[\u0275$index_59_r7].selected);
    \u0275\u0275property("binary", true)("inputId", "url-" + \u0275$index_59_r7);
    \u0275\u0275advance();
    \u0275\u0275property("for", "url-" + \u0275$index_59_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r8.url);
  }
}
function GetTaskUrlsComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h3", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 10)(4, "p-button", 11);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275listener("onClick", function GetTaskUrlsComponent_Conditional_19_Template_p_button_onClick_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.addUrlsToProject());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 12);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 13);
    \u0275\u0275repeaterCreate(10, GetTaskUrlsComponent_Conditional_19_For_11_Template, 4, 5, "div", 5, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 3, "findPages.task.urls"));
    \u0275\u0275advance(3);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(5, 5, "findPages.task.addToProject"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 7, "findPages.task.addToProject.description", \u0275\u0275pureFunction1(10, _c02, ctx_r4.selectedTaskUrlsCount())));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r4.taskUrls());
  }
}
function GetTaskUrlsComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "findPages.task.noUrls"));
  }
}
var GetTaskUrlsComponent = class _GetTaskUrlsComponent {
  // Services
  airtableService = inject(AirtableService);
  translate = inject(TranslateService);
  addUrlsService = inject(AddUrlsService);
  projectState = inject(ProjectStateService);
  // Signals
  currentLanguage = signal(this.translate.currentLang()?.startsWith("fr") ? "fr" : "en", ...ngDevMode ? [{ debugName: "currentLanguage" }] : (
    /* istanbul ignore next */
    []
  ));
  filteredTasks = signal([], ...ngDevMode ? [{ debugName: "filteredTasks" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedTaskIds = signal([], ...ngDevMode ? [{ debugName: "selectedTaskIds" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedTasks = signal([], ...ngDevMode ? [{ debugName: "selectedTasks" }] : (
    /* istanbul ignore next */
    []
  ));
  taskUrls = signal([], ...ngDevMode ? [{ debugName: "taskUrls" }] : (
    /* istanbul ignore next */
    []
  ));
  // Count selected task urls
  selectedTaskUrlsCount = computed(() => this.taskUrls().filter((task) => task.selected).length, ...ngDevMode ? [{ debugName: "selectedTaskUrlsCount" }] : (
    /* istanbul ignore next */
    []
  ));
  toggleTaskUrl(index, selected) {
    this.taskUrls.update((urls) => {
      const updated = [...urls];
      updated[index] = __spreadProps(__spreadValues({}, updated[index]), { selected });
      return updated;
    });
  }
  // Computed: Transform Airtable data to TaskOptions based on current language
  taskOptions = computed(() => {
    const tasks = this.airtableService.data();
    const lang = this.currentLanguage();
    return tasks.map((task) => ({
      id: task.id,
      label: lang === "en" ? task.taskNameEN : task.taskNameFR,
      urlCount: lang === "en" ? task.urlsEN.length : task.urlsFR.length
    }));
  }, ...ngDevMode ? [{ debugName: "taskOptions" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    effect(() => {
      const lang = this.translate.currentLang();
      if (lang) {
        this.currentLanguage.set(lang.startsWith("fr") ? "fr" : "en");
      }
    });
    effect(() => {
      const ids = this.selectedTaskIds();
      const options = this.taskOptions();
      const matched = ids.map((id) => options.find((opt) => opt.id === id)).filter((opt) => !!opt);
      this.selectedTasks.set(matched);
      if (ids.length > 0) {
        this.loadTaskUrls();
      }
    });
  }
  ngOnInit() {
    this.onAutocompleteInteraction();
  }
  onAutocompleteInteraction() {
    return __async(this, null, function* () {
      if (!this.airtableService.hasData() && !this.airtableService.isLoading()) {
        yield this.airtableService.fetchTasks();
      }
    });
  }
  filterTasks(event) {
    const query = event.query;
    if (!query || query.trim().length === 0) {
      this.filteredTasks.set([...this.taskOptions()]);
    } else {
      const lowerQuery = query.toLowerCase();
      this.filteredTasks.set(this.taskOptions().filter((option) => option.label.toLowerCase().includes(lowerQuery)));
    }
  }
  onTaskSelect(event) {
    const taskOption = event.value;
    if (taskOption.id) {
      this.selectedTaskIds.update((ids) => [...ids, taskOption.id]);
      this.loadTaskUrls();
    }
  }
  onTaskUnselect(event) {
    const taskOption = event.value;
    this.selectedTaskIds.update((ids) => ids.filter((id) => id !== taskOption.id));
    this.loadTaskUrls();
  }
  loadTaskUrls() {
    const tasks = this.airtableService.data();
    const lang = this.currentLanguage();
    const ids = this.selectedTaskIds();
    const inScopeUrls = new Set(this.projectState.getAllPages(lang, "live", "inScope").map((page) => page.url));
    const allUrls = ids.flatMap((taskId) => {
      const task = tasks.find((t) => t.id === taskId);
      if (!task)
        return [];
      const urls = lang === "en" ? task.urlsEN : task.urlsFR;
      return urls.map((url) => url.trim().split("#")[0]);
    });
    const uniqueUrls = [...new Set(allUrls)].filter((url) => !inScopeUrls.has(url));
    this.taskUrls.set(uniqueUrls.map((url) => ({ url, selected: true })));
  }
  addUrlsToProject() {
    const selectedUrls = this.taskUrls().filter((item) => item.selected).map((item) => item.url);
    this.addUrlsService.appendUrlsToInput(selectedUrls);
    this.selectedTaskIds.set([]);
    this.selectedTasks.set([]);
    this.taskUrls.set([]);
  }
  static \u0275fac = function GetTaskUrlsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GetTaskUrlsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GetTaskUrlsComponent, selectors: [["aida-get-task-urls"]], decls: 21, vars: 27, consts: [["item", ""], ["selectedItem", ""], ["id", "task-autocomplete", "appendTo", "body", "fluid", "", "optionLabel", "label", "styleClass", "w-full", 3, "ngModelChange", "completeMethod", "onFocus", "onSelect", "onUnselect", "ngModel", "disabled", "dropdown", "emptyMessage", "multiple", "placeholder", "showEmptyMessage", "suggestions", "virtualScroll", "virtualScrollItemSize"], ["for", "task-autocomplete"], [1, "mt-2", "flex", "flex-row", "justify-content-center", "align-items-center", "gap-2"], [1, "flex", "align-items-center", "gap-2"], [3, "rounded", "severity", "value"], ["strokeWidth", "5", 1, "w-2rem", "h-2rem", "m-0"], [1, "loading-dots"], [1, "text-xl", "my-2"], [1, "flex", "flex-row", "align-items-center", "gap-2"], ["icon", "pi pi-plus", 3, "onClick", "label"], [1, "text-color-secondary"], [1, "flex", "flex-column", "gap-2", "max-h-64", "overflow-y-auto", "border", "border-color-border", "p-2", "rounded"], ["size", "large", 3, "ngModelChange", "ngModel", "binary", "inputId"], [1, "break-all", 3, "for"]], template: function GetTaskUrlsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "h3");
      \u0275\u0275text(1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p");
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p-iftalabel")(7, "p-autocomplete", 2);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function GetTaskUrlsComponent_Template_p_autocomplete_ngModelChange_7_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedTasks, $event) || (ctx.selectedTasks = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("completeMethod", function GetTaskUrlsComponent_Template_p_autocomplete_completeMethod_7_listener($event) {
        return ctx.filterTasks($event);
      })("onFocus", function GetTaskUrlsComponent_Template_p_autocomplete_onFocus_7_listener() {
        return ctx.onAutocompleteInteraction();
      })("onSelect", function GetTaskUrlsComponent_Template_p_autocomplete_onSelect_7_listener($event) {
        return ctx.onTaskSelect($event);
      })("onUnselect", function GetTaskUrlsComponent_Template_p_autocomplete_onUnselect_7_listener($event) {
        return ctx.onTaskUnselect($event);
      });
      \u0275\u0275template(11, GetTaskUrlsComponent_ng_template_11_Template, 4, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(13, GetTaskUrlsComponent_ng_template_13_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "label", 3);
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(18, GetTaskUrlsComponent_Conditional_18_Template, 6, 3, "div", 4);
      \u0275\u0275conditionalCreate(19, GetTaskUrlsComponent_Conditional_19_Template, 12, 12)(20, GetTaskUrlsComponent_Conditional_20_Template, 3, 3, "p");
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 15, "findPages.task._title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 17, "findPages.task.description"));
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedTasks);
      \u0275\u0275property("disabled", ctx.airtableService.isLoading())("dropdown", ctx.airtableService.hasData())("emptyMessage", \u0275\u0275pipeBind1(8, 19, "findPages.task.noTasksFound"))("multiple", true)("placeholder", ctx.airtableService.isLoading() ? \u0275\u0275pipeBind1(9, 21, "findPages.task.loadingTasks") : \u0275\u0275pipeBind1(10, 23, "findPages.task.searchPlaceholder"))("showEmptyMessage", true)("suggestions", ctx.filteredTasks())("virtualScroll", true)("virtualScrollItemSize", 40);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 25, "findPages.task.selectTask"));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.airtableService.isLoading() ? 18 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.taskUrls().length > 0 ? 19 : ctx.selectedTaskIds().length > 0 ? 20 : -1);
    }
  }, dependencies: [FormsModule, NgControlStatus, NgModel, AutoCompleteModule, AutoComplete, ButtonModule, Button, CheckboxModule, Checkbox, IftaLabelModule, IftaLabel, ProgressSpinnerModule, ProgressSpinner, TagModule, Tag, TranslatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GetTaskUrlsComponent, [{
    type: Component,
    args: [{ selector: "aida-get-task-urls", standalone: true, imports: [FormsModule, TranslatePipe, AutoCompleteModule, ButtonModule, CheckboxModule, IftaLabelModule, ProgressSpinnerModule, TagModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<h3>{{ 'findPages.task._title' | translate }}</h3>
<p>{{ 'findPages.task.description' | translate }}</p>
<!-- Task Selection Section -->
<p-iftalabel>
  <p-autocomplete
    id="task-autocomplete"
    [(ngModel)]="selectedTasks"
    [disabled]="airtableService.isLoading()"
    [dropdown]="airtableService.hasData()"
    [emptyMessage]="'findPages.task.noTasksFound' | translate"
    [multiple]="true"
    [placeholder]="airtableService.isLoading() ? ('findPages.task.loadingTasks' | translate) : ('findPages.task.searchPlaceholder' | translate)"
    [showEmptyMessage]="true"
    [suggestions]="filteredTasks()"
    [virtualScroll]="true"
    [virtualScrollItemSize]="40"
    (completeMethod)="filterTasks($event)"
    (onFocus)="onAutocompleteInteraction()"
    (onSelect)="onTaskSelect($event)"
    (onUnselect)="onTaskUnselect($event)"
    appendTo="body"
    fluid
    optionLabel="label"
    styleClass="w-full"
  >
    <ng-template #item let-task>
      <div class="flex align-items-center gap-2">
        <p-tag [rounded]="true" [severity]="task.urlCount === 0 ? 'danger' : 'success'" [value]="task.urlCount.toString()" />
        <span>{{ task.label }}</span>
      </div>
    </ng-template>
    <ng-template #selectedItem let-selected>{{ selected.label }}</ng-template>
  </p-autocomplete>
  <label for="task-autocomplete">{{ 'findPages.task.selectTask' | translate }}</label>
</p-iftalabel>

<!-- Loading indicator -->
@if (airtableService.isLoading()) {
  <div class="mt-2 flex flex-row justify-content-center align-items-center gap-2">
    <p-progressspinner class="w-2rem h-2rem m-0" strokeWidth="5" />
    <span>{{ 'findPages.task.loadingTasks' | translate }}<span class="loading-dots"></span></span>
  </div>
}

<!-- URLs List Section -->
@if (taskUrls().length > 0) {
  <h3 class="text-xl my-2">{{ 'findPages.task.urls' | translate }}</h3>
  <div class="flex flex-row align-items-center gap-2">
    <p-button [label]="'findPages.task.addToProject' | translate" (onClick)="addUrlsToProject()" icon="pi pi-plus" />
    <p class="text-color-secondary">{{ 'findPages.task.addToProject.description' | translate: { number: selectedTaskUrlsCount() } }}</p>
  </div>
  <div class="flex flex-column gap-2 max-h-64 overflow-y-auto border border-color-border p-2 rounded">
    @for (item of taskUrls(); track item.url; let i = $index) {
      <div class="flex align-items-center gap-2">
        <p-checkbox [(ngModel)]="taskUrls()[i].selected" [binary]="true" [inputId]="'url-' + i" (ngModelChange)="toggleTaskUrl(i, $event)" size="large" />
        <label [for]="'url-' + i" class="break-all">{{ item.url }}</label>
      </div>
    }
  </div>
} @else if (selectedTaskIds().length > 0) {
  <p>{{ 'findPages.task.noUrls' | translate }}</p>
}
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GetTaskUrlsComponent, { className: "GetTaskUrlsComponent", filePath: "src/app/components/add-pages/by-task/get-task-urls.component.ts", lineNumber: 30 });
})();

// src/app/components/add-pages/by-url/invalid-urls/invalid-urls.component.ts
var _c03 = ["broken"];
var _c1 = ["redirect"];
var _c2 = ["blocked"];
var _c3 = () => ({ height: "90vh" });
var _c4 = (a0) => ({ number: a0 });
var _forTrack03 = ($index, $item) => $item.status;
var _forTrack1 = ($index, $item) => $item.href;
var _forTrack2 = ($index, $item) => $item.originalHref;
function InvalidUrlsComponent_Conditional_0_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-tab", 4)(1, "div", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275element(4, "p-badge", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    \u0275\u0275property("value", tab_r2.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, tab_r2.label));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", tab_r2.items.length);
  }
}
function InvalidUrlsComponent_Conditional_0_For_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function InvalidUrlsComponent_Conditional_0_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-tabpanel", 4);
    \u0275\u0275template(1, InvalidUrlsComponent_Conditional_0_For_6_ng_container_1_Template, 1, 0, "ng-container", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", tab_r3.value);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r3.outlets[tab_r3.status]);
  }
}
function InvalidUrlsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-tabs", 4)(1, "p-tablist");
    \u0275\u0275repeaterCreate(2, InvalidUrlsComponent_Conditional_0_For_3_Template, 5, 5, "p-tab", 4, _forTrack03);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p-tabpanels");
    \u0275\u0275repeaterCreate(5, InvalidUrlsComponent_Conditional_0_For_6_Template, 2, 2, "p-tabpanel", 4, _forTrack03);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r3.initialTab());
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.tabs());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r3.tabs());
  }
}
function InvalidUrlsComponent_Conditional_1_For_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function InvalidUrlsComponent_Conditional_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, InvalidUrlsComponent_Conditional_1_For_1_ng_container_0_Template, 1, 0, "ng-container", 8);
  }
  if (rf & 2) {
    const tab_r5 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r3.outlets[tab_r5.status]);
  }
}
function InvalidUrlsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, InvalidUrlsComponent_Conditional_1_For_1_Template, 1, 1, "ng-container", null, _forTrack03);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r3.tabs());
  }
}
function InvalidUrlsComponent_ng_template_2_Conditional_0_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "p-checkbox", 19);
    \u0275\u0275listener("ngModelChange", function InvalidUrlsComponent_ng_template_2_Conditional_0_For_8_Template_p_checkbox_ngModelChange_1_listener($event) {
      const url_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.toggleBrokenUrl(url_r8.href, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 20);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const url_r8 = ctx.$implicit;
    const \u0275$index_43_r9 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("binary", true)("inputId", "url-" + \u0275$index_43_r9)("ngModel", ctx_r3.isSelected(url_r8.href));
    \u0275\u0275advance();
    \u0275\u0275property("for", "url-" + \u0275$index_43_r9);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(url_r8.href);
  }
}
function InvalidUrlsComponent_ng_template_2_Conditional_0_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "span", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r10 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(page_r10.label);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", page_r10.path, " ");
  }
}
function InvalidUrlsComponent_ng_template_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 11);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 12);
    \u0275\u0275repeaterCreate(7, InvalidUrlsComponent_ng_template_2_Conditional_0_For_8_Template, 4, 5, "div", 13, _forTrack1);
    \u0275\u0275elementStart(9, "p-iftalabel")(10, "p-select", 14);
    \u0275\u0275twoWayListener("ngModelChange", function InvalidUrlsComponent_ng_template_2_Conditional_0_Template_p_select_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.selectedParent, $event) || (ctx_r3.selectedParent = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(11, InvalidUrlsComponent_ng_template_2_Conditional_0_ng_template_11_Template, 4, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "label", 15);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 16)(17, "p-button", 17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275listener("onClick", function InvalidUrlsComponent_ng_template_2_Conditional_0_Template_p_button_onClick_17_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.addUrlsToProject());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 18);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 8, "invalidUrls.broken.header"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 10, "invalidUrls.broken.description"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r3.urlsBroken());
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.selectedParent);
    \u0275\u0275property("filter", true)("options", ctx_r3.parentPages());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 12, "editNode.parent"));
    \u0275\u0275advance(3);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(18, 14, "invalidUrls.broken.addToProject"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(21, 16, "invalidUrls.broken.addToProject.description", \u0275\u0275pureFunction1(19, _c4, ctx_r3.selectedBrokenUrls().length)));
  }
}
function InvalidUrlsComponent_ng_template_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-message", 9);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275property("text", \u0275\u0275pipeBind1(1, 1, "invalidUrls.broken.allAdded"));
  }
}
function InvalidUrlsComponent_ng_template_2_Conditional_2_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 23)(1, "p-button", 24);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("onClick", function InvalidUrlsComponent_ng_template_2_Conditional_2_For_7_Template_p_button_onClick_1_listener() {
      const url_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.edit(url_r12.href));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const url_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(2, 2, "common.edit"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", url_r12.href, " ");
  }
}
function InvalidUrlsComponent_ng_template_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 11);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(6, InvalidUrlsComponent_ng_template_2_Conditional_2_For_7_Template, 4, 4, "li", 23, _forTrack1);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, "invalidUrls.new.header"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, "invalidUrls.new.description"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.urlsNew());
  }
}
function InvalidUrlsComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, InvalidUrlsComponent_ng_template_2_Conditional_0_Template, 22, 21)(1, InvalidUrlsComponent_ng_template_2_Conditional_1_Template, 2, 3, "p-message", 9);
    \u0275\u0275conditionalCreate(2, InvalidUrlsComponent_ng_template_2_Conditional_2_Template, 8, 6);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r3.urlsBroken().length > 0 ? 0 : 1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.urlsNew().length > 0 ? 2 : -1);
  }
}
function InvalidUrlsComponent_ng_template_4_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28)(2, "div")(3, "div", 29);
    \u0275\u0275element(4, "i", 30);
    \u0275\u0275elementStart(5, "span", 31);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 32)(9, "span", 33);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 32)(15, "span", 33);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "p-button", 34);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275listener("onClick", function InvalidUrlsComponent_ng_template_4_For_8_Template_p_button_onClick_20_listener() {
      const url_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.copyToClipboard(url_r14.href));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const url_r14 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 6, "invalidUrls.redirect.subheading"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 8, "common.from"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(url_r14.originalHref);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 10, "common.to"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(url_r14.href);
    \u0275\u0275advance();
    \u0275\u0275property("label", \u0275\u0275pipeBind1(21, 12, "common.copyNewUrl"));
  }
}
function InvalidUrlsComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 25);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 11);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 26);
    \u0275\u0275repeaterCreate(7, InvalidUrlsComponent_ng_template_4_For_8_Template, 22, 14, "div", 27, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, "invalidUrls.redirect.header"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, "invalidUrls.redirect.description"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r3.urlsRedirect());
  }
}
function InvalidUrlsComponent_ng_template_6_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 23);
    \u0275\u0275element(1, "i", 36);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const url_r15 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(url_r15.href);
  }
}
function InvalidUrlsComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 25);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 11);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ul", 35);
    \u0275\u0275repeaterCreate(7, InvalidUrlsComponent_ng_template_6_For_8_Template, 3, 1, "li", 23, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, "invalidUrls.blocked.header"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, "invalidUrls.blocked.description"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r3.urlsBlocked());
  }
}
function InvalidUrlsComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "aida-edit-node", 37);
    \u0275\u0275listener("dialogClose", function InvalidUrlsComponent_Conditional_9_Template_aida_edit_node_dialogClose_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.editNode = false);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("isOpen", ctx_r3.editNode)("node", ctx_r3.selectedNode);
  }
}
var InvalidUrlsComponent = class _InvalidUrlsComponent {
  addUrlsService = inject(AddUrlsService);
  projectState = inject(ProjectStateService);
  translate = inject(TranslateService);
  fetchService = inject(FetchService);
  urlsBroken = computed(() => this.addUrlsService.urlState().urlsToReview.filter((url) => url.status === "bad"), ...ngDevMode ? [{ debugName: "urlsBroken" }] : (
    /* istanbul ignore next */
    []
  ));
  urlsRedirect = computed(() => this.addUrlsService.urlState().urlsToReview.filter((url) => url.status === "redirect"), ...ngDevMode ? [{ debugName: "urlsRedirect" }] : (
    /* istanbul ignore next */
    []
  ));
  urlsBlocked = computed(() => this.addUrlsService.urlState().urlsToReview.filter((url) => url.status === "blocked"), ...ngDevMode ? [{ debugName: "urlsBlocked" }] : (
    /* istanbul ignore next */
    []
  ));
  urlsNew = computed(() => this.addUrlsService.urlState().urlsToReview.filter((url) => url.status === "new"), ...ngDevMode ? [{ debugName: "urlsNew" }] : (
    /* istanbul ignore next */
    []
  ));
  tabs = computed(() => [
    { value: "0", status: "broken", label: "invalidUrls.broken.header", items: this.urlsBroken() },
    { value: "1", status: "redirect", label: "invalidUrls.redirect.header", items: this.urlsRedirect() },
    { value: "2", status: "blocked", label: "invalidUrls.blocked.header", items: this.urlsBlocked() }
  ].filter((tab) => tab.status === "broken" ? tab.items.length > 0 || this.urlsNew().length > 0 : tab.items.length > 0), ...ngDevMode ? [{ debugName: "tabs" }] : (
    /* istanbul ignore next */
    []
  ));
  initialTab = computed(() => this.tabs()[0]?.value ?? "0", ...ngDevMode ? [{ debugName: "initialTab" }] : (
    /* istanbul ignore next */
    []
  ));
  //Template references
  brokenTemplate = viewChild.required("broken");
  redirectTemplate = viewChild.required("redirect");
  blockedTemplate = viewChild.required("blocked");
  get outlets() {
    return {
      broken: this.brokenTemplate(),
      redirect: this.redirectTemplate(),
      blocked: this.blockedTemplate()
    };
  }
  selectedBrokenUrls = signal([], ...ngDevMode ? [{ debugName: "selectedBrokenUrls" }] : (
    /* istanbul ignore next */
    []
  ));
  isSelected(href) {
    return this.selectedBrokenUrls().includes(href);
  }
  toggleBrokenUrl(href, selected) {
    this.selectedBrokenUrls.update((current) => selected ? [...current, href] : current.filter((h) => h !== href));
  }
  parentPages = computed(() => this.projectState.getAllPages(this.projectState.detectPrimaryLanguage(), "live", "all"), ...ngDevMode ? [{ debugName: "parentPages" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedParent;
  addUrlsToProject() {
    console.log("ADDING!");
    console.log("Selected URLs: ", this.selectedBrokenUrls());
    console.log("Selected Parent: ", this.selectedParent);
    if (!this.selectedParent)
      return;
    const parentNode = this.projectState.findNodeByPath(this.projectState.getProjectTree(), this.selectedParent, this.projectState.detectPrimaryLanguage());
    console.log("Parent: ", parentNode);
    if (!parentNode)
      return;
    for (const url of this.selectedBrokenUrls()) {
      console.log("URL: ", url);
      this.projectState.createNode(parentNode, url);
    }
    this.addUrlsService.updateReviewStatus(this.selectedBrokenUrls(), "new");
    this.selectedBrokenUrls.set([]);
    const newestUrl = this.urlsNew().at(-1)?.href;
    if (newestUrl)
      this.edit(newestUrl);
  }
  get currentLang() {
    return this.translate.currentLang() === "fr" ? "fr" : "en";
  }
  editNode = false;
  // Tracks if currently making dialog edits
  selectedNode = {};
  // TreeNode data for edit node dialog
  edit(url) {
    const path = this.fetchService.generatePath(url);
    const lang = this.fetchService.getLang(url) ?? "en";
    this.selectedNode = this.projectState.findNodeByPath(this.projectState.getProjectTree(), path, lang) ?? {};
    this.editNode = true;
  }
  copyToClipboard(url) {
    return __async(this, null, function* () {
      try {
        yield navigator.clipboard.writeText(url);
      } catch (error) {
        console.error("Failed to copy to clipboard:", error);
      }
    });
  }
  static \u0275fac = function InvalidUrlsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InvalidUrlsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InvalidUrlsComponent, selectors: [["aida-invalid-urls"]], viewQuery: function InvalidUrlsComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.brokenTemplate, _c03, 5)(ctx.redirectTemplate, _c1, 5)(ctx.blockedTemplate, _c2, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance(3);
    }
  }, decls: 10, vars: 9, consts: [["broken", ""], ["redirect", ""], ["blocked", ""], ["item", ""], [3, "value"], ["styleClass", "w-10", 3, "visibleChange", "visible", "header", "maximizable", "modal"], [3, "isOpen", "node"], [1, "flex", "flex-row", "align-items-center", "gap-1"], [4, "ngTemplateOutlet"], ["icon", "pi pi-info-circle font-bold", "severity", "info", 3, "text"], [1, "mb-2"], [1, "text-sm", "text-color-secondary", "my-1"], [1, "flex", "flex-column", "gap-2", "mt-3"], [1, "flex", "align-items-center", "gap-2"], ["id", "parentPath", "appendTo", "body", "filterBy", "label", "fluid", "", "optionLabel", "label", "optionValue", "path", "styleClass", "secondary-outline", 3, "ngModelChange", "ngModel", "filter", "options"], ["for", "parentPath"], [1, "flex", "flex-row", "align-items-center", "gap-2"], ["icon", "pi pi-plus", 3, "onClick", "label"], [1, "text-color-secondary"], ["size", "large", 3, "ngModelChange", "binary", "inputId", "ngModel"], [1, "break-all", 3, "for"], [1, "flex", "flex-column"], [1, "font-bold", "-mb-1"], [1, "flex", "align-items-center"], ["appendTo", "body", "hideDelay", "0", "icon", "pi pi-pen-to-square", "rounded", "", "showDelay", "300", "text", "", "tooltipPosition", "top", 3, "onClick", "pTooltip"], [1, "mb-2", "mt-3"], [1, "flex", "flex-column", "gap-2"], [1, "border-1", "border-round", "surface-border"], [1, "flex", "flex-row", "justify-content-between", "gap-2"], [1, "flex", "align-items-center", "gap-2", "p-2"], [1, "pi", "pi-directions", "text-2xl", "text-orange-500"], [1, "text-sm", "text-600", "font-semibold"], [1, "px-2", "text-xs", "text-color-secondary"], [1, "font-semibold", "mx-1"], ["icon", "pi pi-copy", "outlined", "", "size", "small", "styleClass", "secondary-outline white-space-nowrap h-full", 3, "onClick", "label"], [1, "my-0", "list-none"], [1, "pi", "pi-ban", "text-red-500", "mr-2"], [3, "dialogClose", "isOpen", "node"]], template: function InvalidUrlsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275conditionalCreate(0, InvalidUrlsComponent_Conditional_0_Template, 7, 1, "p-tabs", 4)(1, InvalidUrlsComponent_Conditional_1_Template, 2, 0);
      \u0275\u0275template(2, InvalidUrlsComponent_ng_template_2_Template, 3, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, InvalidUrlsComponent_ng_template_4_Template, 9, 6, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(6, InvalidUrlsComponent_ng_template_6_Template, 9, 6, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementStart(8, "p-dialog", 5);
      \u0275\u0275twoWayListener("visibleChange", function InvalidUrlsComponent_Template_p_dialog_visibleChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.editNode, $event) || (ctx.editNode = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275conditionalCreate(9, InvalidUrlsComponent_Conditional_9_Template, 1, 2, "aida-edit-node", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.tabs().length > 1 ? 0 : 1);
      \u0275\u0275advance(8);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(8, _c3));
      \u0275\u0275twoWayProperty("visible", ctx.editNode);
      \u0275\u0275property("header", ctx.selectedNode.data == null ? null : ctx.selectedNode.data.prototype == null ? null : ctx.selectedNode.data.prototype[ctx.currentLang].h1)("maximizable", true)("modal", true);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.selectedNode ? 9 : -1);
    }
  }, dependencies: [
    CommonModule,
    NgTemplateOutlet,
    FormsModule,
    NgControlStatus,
    NgModel,
    BadgeModule,
    Badge,
    ButtonModule,
    Button,
    CheckboxModule,
    Checkbox,
    DialogModule,
    Dialog,
    IftaLabelModule,
    IftaLabel,
    MessageModule,
    Message,
    SelectModule,
    Select,
    TabsModule,
    Tabs,
    TabPanels,
    TabPanel,
    TabList,
    Tab,
    TooltipModule,
    Tooltip,
    EditNodeComponent,
    TranslatePipe
  ], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InvalidUrlsComponent, [{
    type: Component,
    args: [{ selector: "aida-invalid-urls", imports: [
      CommonModule,
      FormsModule,
      TranslatePipe,
      BadgeModule,
      ButtonModule,
      CheckboxModule,
      DialogModule,
      IftaLabelModule,
      MessageModule,
      SelectModule,
      TabsModule,
      TooltipModule,
      EditNodeComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `@if (tabs().length > 1) {
  <p-tabs [value]="initialTab()">
    <p-tablist>
      @for (tab of tabs(); track tab.status) {
        <p-tab [value]="tab.value">
          <div class="flex flex-row align-items-center gap-1">{{ tab.label | translate }}<p-badge [value]="tab.items.length" /></div>
        </p-tab>
      }
    </p-tablist>
    <p-tabpanels>
      @for (tab of tabs(); track tab.status) {
        <p-tabpanel [value]="tab.value">
          <ng-container *ngTemplateOutlet="outlets[tab.status]" />
        </p-tabpanel>
      }
    </p-tabpanels>
  </p-tabs>
} @else {
  @for (tab of tabs(); track tab.status) {
    <ng-container *ngTemplateOutlet="outlets[tab.status]" />
  }
}

<!-- Broken Link Template -->
<ng-template #broken>
  @if (urlsBroken().length > 0) {
    <h2 class="mb-2">{{ 'invalidUrls.broken.header' | translate }}</h2>
    <p class="text-sm text-color-secondary my-1">{{ 'invalidUrls.broken.description' | translate }}</p>
    <div class="flex flex-column gap-2 mt-3">
      @for (url of urlsBroken(); track url.href; let i = $index) {
        <div class="flex align-items-center gap-2">
          <p-checkbox [binary]="true" [inputId]="'url-' + i" [ngModel]="isSelected(url.href)" (ngModelChange)="toggleBrokenUrl(url.href, $event)" size="large" />
          <label [for]="'url-' + i" class="break-all">{{ url.href }}</label>
        </div>
      }
      <p-iftalabel>
        <p-select
          id="parentPath"
          [(ngModel)]="selectedParent"
          [filter]="true"
          [options]="parentPages()"
          appendTo="body"
          filterBy="label"
          fluid
          optionLabel="label"
          optionValue="path"
          styleClass="secondary-outline"
        >
          <ng-template #item let-page>
            <div class="flex flex-column">
              <span class="font-bold -mb-1">{{ page.label }}</span>
              {{ page.path }}
            </div>
          </ng-template></p-select
        >
        <label for="parentPath">{{ 'editNode.parent' | translate }}</label>
      </p-iftalabel>
      <div class="flex flex-row align-items-center gap-2">
        <p-button [label]="'invalidUrls.broken.addToProject' | translate" (onClick)="addUrlsToProject()" icon="pi pi-plus" />
        <p class="text-color-secondary">{{ 'invalidUrls.broken.addToProject.description' | translate: { number: selectedBrokenUrls().length } }}</p>
      </div>
    </div>
  } @else {
    <p-message [text]="'invalidUrls.broken.allAdded' | translate" icon="pi pi-info-circle font-bold" severity="info" />
  }
  @if (urlsNew().length > 0) {
    <h2 class="mb-2">{{ 'invalidUrls.new.header' | translate }}</h2>
    <p class="text-sm text-color-secondary my-1">{{ 'invalidUrls.new.description' | translate }}</p>
    @for (url of urlsNew(); track url.href) {
      <li class="flex align-items-center">
        <p-button [pTooltip]="'common.edit' | translate" (onClick)="edit(url.href)" appendTo="body" hideDelay="0" icon="pi pi-pen-to-square" rounded showDelay="300" text tooltipPosition="top" />
        {{ url.href }}
      </li>
    }
  }
</ng-template>

<!-- Redirected Link Template -->
<ng-template #redirect>
  <h2 class="mb-2 mt-3">{{ 'invalidUrls.redirect.header' | translate }}</h2>
  <p class="text-sm text-color-secondary my-1">{{ 'invalidUrls.redirect.description' | translate }}</p>
  <div class="flex flex-column gap-2">
    @for (url of urlsRedirect(); track url.originalHref) {
      <div class="border-1 border-round surface-border">
        <div class="flex flex-row justify-content-between gap-2">
          <div>
            <div class="flex align-items-center gap-2 p-2">
              <i class="pi pi-directions text-2xl text-orange-500"></i>
              <span class="text-sm text-600 font-semibold">{{ 'invalidUrls.redirect.subheading' | translate }}</span>
            </div>
            <div class="px-2 text-xs text-color-secondary">
              <span class="font-semibold mx-1">{{ 'common.from' | translate }}</span>
              <span>{{ url.originalHref }}</span>
            </div>
            <div class="px-2 text-xs text-color-secondary">
              <span class="font-semibold mx-1">{{ 'common.to' | translate }}</span>
              <span>{{ url.href }}</span>
            </div>
          </div>
          <p-button [label]="'common.copyNewUrl' | translate" (onClick)="copyToClipboard(url.href)" icon="pi pi-copy" outlined size="small" styleClass="secondary-outline white-space-nowrap h-full" />
        </div>
      </div>
    }
  </div>
</ng-template>

<!-- Blocked Link Template -->
<ng-template #blocked>
  <h2 class="mb-2 mt-3">{{ 'invalidUrls.blocked.header' | translate }}</h2>
  <p class="text-sm text-color-secondary my-1">{{ 'invalidUrls.blocked.description' | translate }}</p>
  <ul class="my-0 list-none">
    @for (url of urlsBlocked(); track url.href) {
      <li class="flex align-items-center"><i class="pi pi-ban text-red-500 mr-2"></i>{{ url.href }}</li>
    }
  </ul>
</ng-template>

<!-- Edit node popup-->
<p-dialog [(visible)]="editNode" [header]="selectedNode.data?.prototype?.[currentLang].h1" [maximizable]="true" [modal]="true" [style]="{ height: '90vh' }" styleClass="w-10">
  @if (selectedNode) {
    <aida-edit-node [isOpen]="editNode" [node]="selectedNode" (dialogClose)="editNode = false" />
  }
</p-dialog>
` }]
  }], null, { brokenTemplate: [{ type: ViewChild, args: ["broken", { isSignal: true }] }], redirectTemplate: [{ type: ViewChild, args: ["redirect", { isSignal: true }] }], blockedTemplate: [{ type: ViewChild, args: ["blocked", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InvalidUrlsComponent, { className: "InvalidUrlsComponent", filePath: "src/app/components/add-pages/by-url/invalid-urls/invalid-urls.component.ts", lineNumber: 44 });
})();

// src/app/components/add-pages/by-url/add-urls.component.ts
var _c04 = () => ({ height: "90vh" });
function AddUrlsComponent_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-message", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getDuplicateMessage());
  }
}
function AddUrlsComponent_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-message", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getInvalidUrlMessage());
  }
}
function AddUrlsComponent_Conditional_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-message", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getOppositeLangMessage());
  }
}
function AddUrlsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "h3", 6);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "p-iftalabel")(4, "textarea", 7);
    \u0275\u0275twoWayListener("ngModelChange", function AddUrlsComponent_Conditional_0_Template_textarea_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.addUrlsService.urlState().rawUrls, $event) || (ctx_r1.addUrlsService.urlState().rawUrls = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function AddUrlsComponent_Conditional_0_Template_textarea_change_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.parseUrls());
    })("paste", function AddUrlsComponent_Conditional_0_Template_textarea_paste_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPasteUrls());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "label", 8);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(8, AddUrlsComponent_Conditional_0_Conditional_8_Template, 2, 1, "p-message", 9);
    \u0275\u0275conditionalCreate(9, AddUrlsComponent_Conditional_0_Conditional_9_Template, 2, 1, "p-message", 9);
    \u0275\u0275conditionalCreate(10, AddUrlsComponent_Conditional_0_Conditional_10_Template, 2, 1, "p-message", 9);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("innerHTML", ctx_r1.addUrlsService.urlState().isValidating || ctx_r1.addUrlsService.urlState().isAdding ? \u0275\u0275pipeBind1(1, 6, "addPages._title.active") : \u0275\u0275pipeBind1(2, 8, "addPages._title"), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.addUrlsService.urlState().rawUrls);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 10, "addPages.inputLabel"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.addUrlsService.duplicatesSkipped().length > 0 ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.addUrlsService.invalidUrlsSkipped().length > 0 ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.addUrlsService.oppositeLangSkipped().length > 0 ? 10 : -1);
  }
}
function AddUrlsComponent_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12)(4, "span", 13);
    \u0275\u0275text(5, "keyboard_backspace");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 14);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "addPages.screenreader.pageReadyToAdd"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 4, "addPages.import"));
  }
}
function AddUrlsComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 10);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("onClick", function AddUrlsComponent_Conditional_2_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addUrlsService.validateUrls());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, AddUrlsComponent_Conditional_2_Conditional_2_Template, 9, 6);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", !ctx_r1.addUrlsService.urlState().rawUrls.trim())("label", \u0275\u0275pipeBind1(1, 4, "addPages.validateButton"))("loading", ctx_r1.addUrlsService.urlState().isValidating || ctx_r1.addUrlsService.urlState().isAdding);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.highlightAddPages ? 2 : -1);
  }
}
function AddUrlsComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 15);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("onClick", function AddUrlsComponent_Conditional_3_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.undoAddPages());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 2, "addPages.undoButton"))("loading", ctx_r1.addUrlsService.urlState().isValidating || ctx_r1.addUrlsService.urlState().isAdding);
  }
}
function AddUrlsComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 16);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("onClick", function AddUrlsComponent_Conditional_4_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewInvalidUrls = true);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 2, "addPages.viewInvalid"))("loading", ctx_r1.addUrlsService.urlState().isValidating || ctx_r1.addUrlsService.urlState().isAdding);
  }
}
function AddUrlsComponent_Conditional_5_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "span", 18);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 18);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const progress_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "addPages.validating"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", progress_r6.processed, "/", progress_r6.total);
  }
}
function AddUrlsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-progressbar", 4);
    \u0275\u0275template(1, AddUrlsComponent_Conditional_5_ng_template_1_Template, 6, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("value", ctx.percent);
  }
}
function AddUrlsComponent_Conditional_6_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "span", 18);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 18);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const progress_r7 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "addPages.adding"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", progress_r7.processed, "/", progress_r7.total);
  }
}
function AddUrlsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-progressbar", 4);
    \u0275\u0275template(1, AddUrlsComponent_Conditional_6_ng_template_1_Template, 6, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("value", ctx.percent);
  }
}
function AddUrlsComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "aida-invalid-urls", 19);
    \u0275\u0275listener("dialogClose", function AddUrlsComponent_Conditional_9_Template_aida_invalid_urls_dialogClose_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewInvalidUrls = false);
    });
    \u0275\u0275elementEnd();
  }
}
var AddUrlsComponent = class _AddUrlsComponent {
  translate = inject(TranslateService);
  projectState = inject(ProjectStateService);
  addUrlsService = inject(AddUrlsService);
  directInput = input(true, ...ngDevMode ? [{ debugName: "directInput" }] : (
    /* istanbul ignore next */
    []
  ));
  // Parse URLs from textarea
  parseUrls() {
    const rawUrls = this.addUrlsService.urlState().rawUrls;
    const currentLang = this.translate.currentLang()?.startsWith("fr") ? "fr" : "en";
    const existingUrls = new Set(this.projectState.getAllPages(currentLang, "live", "inScope").map((u) => u.url));
    const { parsedUrls, duplicates, invalidUrls, oppositeLangUrls } = this.addUrlsService.parseUrls(rawUrls, existingUrls, currentLang);
    this.addUrlsService.urlState().rawUrls = [...parsedUrls.map((item) => item.href), ...duplicates, ...invalidUrls, ...oppositeLangUrls].join("\n");
    this.addUrlsService.setUrlState({
      urlsToValidate: parsedUrls,
      isValidating: false,
      isAdding: false
    });
  }
  onPasteUrls() {
    setTimeout(() => this.parseUrls(), 0);
  }
  // Warning message for duplicates skipped
  getDuplicateMessage() {
    const count = this.addUrlsService.duplicatesSkipped().length;
    if (count === 1)
      return this.translate.instant("addPages.duplicatesSkipped", { count });
    else
      return this.translate.instant("addPages.duplicatesSkipped.plural", { count });
  }
  // Warning message for invalid URLs skipped
  getInvalidUrlMessage() {
    const count = this.addUrlsService.invalidUrlsSkipped().length;
    if (count === 1)
      return this.translate.instant("addPages.invalidUrlsSkipped", { count });
    else
      return this.translate.instant("addPages.invalidUrlsSkipped.plural", { count });
  }
  // Warning message for opposite language URLs skipped
  getOppositeLangMessage() {
    const count = this.addUrlsService.oppositeLangSkipped().length;
    if (count === 1)
      return this.translate.instant("addPages.oppositeLangSkipped", { count });
    else
      return this.translate.instant("addPages.oppositeLangSkipped.plural", { count });
  }
  //Undo add pages
  undoAddPages() {
    const previous = this.addUrlsService.getPreviousProjectData();
    if (previous) {
      this.projectState.setProjectTree(previous);
      this.projectState.saveProject();
      this.addUrlsService.setPreviousProjectData(null);
    }
  }
  //Highlight the component (for users coming from import-pages)
  highlightAddPages = false;
  ngOnInit() {
    if (this.addUrlsService.getHighlight()) {
      this.highlightAddPages = true;
      this.addUrlsService.setHighlight(false);
      setTimeout(() => this.highlightAddPages = false, 3e3);
    }
  }
  viewInvalidUrls = false;
  static \u0275fac = function AddUrlsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddUrlsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddUrlsComponent, selectors: [["aida-add-urls"]], inputs: { directInput: [1, "directInput"] }, decls: 10, vars: 16, consts: [["content", ""], [1, "flex", "flex-row", "align-items-center", "gap-2", "mt-2"], ["icon", "pi pi-undo", "severity", "secondary", 3, "label", "loading"], ["icon", "pi pi-link", "severity", "info", 3, "label", "loading"], ["styleClass", "h-2rem centered-label mt-1 transition-duration-100", 3, "value"], ["appendTo", "body", "styleClass", "w-10", 3, "visibleChange", "visible", "header", "maximizable", "modal"], [1, "mb-1", 3, "innerHTML"], ["id", "urls", "autoResize", "true", "fluid", "", "pTextarea", "", "rows", "5", 1, "min-h-3rem", 3, "ngModelChange", "change", "paste", "ngModel"], ["for", "urls"], ["severity", "error", "size", "small", "styleClass", "mb-2", "variant", "simple"], ["icon", "pi pi-check-square", 1, "min-w-max", 3, "onClick", "disabled", "label", "loading"], ["aria-live", "polite", "role", "status", 1, "sr-only"], [1, "flex", "flex-row", "align-items-center", "m-0", "p-0", "text-primary", "arrow-bounce"], [1, "material-icons", "text-5xl"], [1, "font-bold", "text-lg", "m-0"], ["icon", "pi pi-undo", "severity", "secondary", 3, "onClick", "label", "loading"], ["icon", "pi pi-link", "severity", "info", 3, "onClick", "label", "loading"], [1, "flex", "flex-row", "gap-6"], [1, "text-white"], [3, "dialogClose"]], template: function AddUrlsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, AddUrlsComponent_Conditional_0_Template, 11, 12);
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275conditionalCreate(2, AddUrlsComponent_Conditional_2_Template, 3, 6);
      \u0275\u0275conditionalCreate(3, AddUrlsComponent_Conditional_3_Template, 2, 4, "p-button", 2);
      \u0275\u0275conditionalCreate(4, AddUrlsComponent_Conditional_4_Template, 2, 4, "p-button", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(5, AddUrlsComponent_Conditional_5_Template, 3, 1, "p-progressbar", 4);
      \u0275\u0275conditionalCreate(6, AddUrlsComponent_Conditional_6_Template, 3, 1, "p-progressbar", 4);
      \u0275\u0275elementStart(7, "p-dialog", 5);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275twoWayListener("visibleChange", function AddUrlsComponent_Template_p_dialog_visibleChange_7_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.viewInvalidUrls, $event) || (ctx.viewInvalidUrls = $event);
        return $event;
      });
      \u0275\u0275conditionalCreate(9, AddUrlsComponent_Conditional_9_Template, 1, 0, "aida-invalid-urls");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_4_0;
      let tmp_5_0;
      \u0275\u0275conditional(ctx.directInput() || ctx.addUrlsService.urlState().rawUrls ? 0 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.directInput() || ctx.addUrlsService.urlState().rawUrls ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.addUrlsService.getPreviousProjectData() ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.addUrlsService.urlState().urlsToReview.length > 0 ? 4 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_4_0 = ctx.addUrlsService.urlState().isValidating && ctx.addUrlsService.validatingProgress()) ? 5 : -1, tmp_4_0);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_5_0 = ctx.addUrlsService.urlState().isAdding && ctx.addUrlsService.addingProgress()) ? 6 : -1, tmp_5_0);
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(15, _c04));
      \u0275\u0275twoWayProperty("visible", ctx.viewInvalidUrls);
      \u0275\u0275property("header", \u0275\u0275pipeBind1(8, 13, "invalidUrls._title"))("maximizable", true)("modal", true);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.addUrlsService.urlState().urlsToReview.length > 0 ? 9 : -1);
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, ButtonModule, Button, DialogModule, Dialog, IftaLabelModule, IftaLabel, MessageModule, Message, ProgressBarModule, ProgressBar, TextareaModule, Textarea, InvalidUrlsComponent, TranslatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddUrlsComponent, [{
    type: Component,
    args: [{ selector: "aida-add-urls", imports: [FormsModule, TranslatePipe, ButtonModule, DialogModule, IftaLabelModule, MessageModule, ProgressBarModule, TextareaModule, InvalidUrlsComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `@if (directInput() || addUrlsService.urlState().rawUrls) {
  <h3 [innerHTML]="addUrlsService.urlState().isValidating || addUrlsService.urlState().isAdding ? ('addPages._title.active' | translate) : ('addPages._title' | translate)" class="mb-1"></h3>
  <p-iftalabel>
    <textarea id="urls" [(ngModel)]="addUrlsService.urlState().rawUrls" (change)="parseUrls()" (paste)="onPasteUrls()" class="min-h-3rem" autoResize="true" fluid pTextarea rows="5"></textarea>
    <label for="urls">{{ 'addPages.inputLabel' | translate }}</label>
  </p-iftalabel>

  @if (addUrlsService.duplicatesSkipped().length > 0) {
    <p-message severity="error" size="small" styleClass="mb-2" variant="simple">{{ getDuplicateMessage() }}</p-message>
  }
  @if (addUrlsService.invalidUrlsSkipped().length > 0) {
    <p-message severity="error" size="small" styleClass="mb-2" variant="simple">{{ getInvalidUrlMessage() }}</p-message>
  }
  @if (addUrlsService.oppositeLangSkipped().length > 0) {
    <p-message severity="error" size="small" styleClass="mb-2" variant="simple">{{ getOppositeLangMessage() }}</p-message>
  }
}

<div class="flex flex-row align-items-center gap-2 mt-2">
  @if (directInput() || addUrlsService.urlState().rawUrls) {
    <!--Validate URLs-->
    <p-button
      [disabled]="!addUrlsService.urlState().rawUrls.trim()"
      [label]="'addPages.validateButton' | translate"
      [loading]="addUrlsService.urlState().isValidating || addUrlsService.urlState().isAdding"
      (onClick)="addUrlsService.validateUrls()"
      class="min-w-max"
      icon="pi pi-check-square"
    />
    <!--Arrow & screenreader annoucement for users coming from bookmarklet-->
    @if (highlightAddPages) {
      <div class="sr-only" aria-live="polite" role="status">
        {{ 'addPages.screenreader.pageReadyToAdd' | translate }}
      </div>
      <div class="flex flex-row align-items-center m-0 p-0 text-primary arrow-bounce">
        <span class="material-icons text-5xl">keyboard_backspace</span>
        <p class="font-bold text-lg m-0">{{ 'addPages.import' | translate }}</p>
      </div>
    }
  }
  <!-- Undo Button -->
  @if (addUrlsService.getPreviousProjectData()) {
    <p-button
      [label]="'addPages.undoButton' | translate"
      [loading]="addUrlsService.urlState().isValidating || addUrlsService.urlState().isAdding"
      (onClick)="undoAddPages()"
      icon="pi pi-undo"
      severity="secondary"
    />
  }
  <!-- View Invalid URLs Button -->
  @if (addUrlsService.urlState().urlsToReview.length > 0) {
    <p-button
      [label]="'addPages.viewInvalid' | translate"
      [loading]="addUrlsService.urlState().isValidating || addUrlsService.urlState().isAdding"
      (onClick)="viewInvalidUrls = true"
      icon="pi pi-link"
      severity="info"
    />
  }
</div>

@if (addUrlsService.urlState().isValidating && addUrlsService.validatingProgress(); as progress) {
  <p-progressbar [value]="progress.percent" styleClass="h-2rem centered-label mt-1 transition-duration-100">
    <ng-template #content>
      <div class="flex flex-row gap-6">
        <span class="text-white">{{ 'addPages.validating' | translate }}</span>
        <span class="text-white">{{ progress.processed }}/{{ progress.total }}</span>
      </div>
    </ng-template>
  </p-progressbar>
}

@if (addUrlsService.urlState().isAdding && addUrlsService.addingProgress(); as progress) {
  <p-progressbar [value]="progress.percent" styleClass="h-2rem centered-label mt-1 transition-duration-100">
    <ng-template #content>
      <div class="flex flex-row gap-6">
        <span class="text-white">{{ 'addPages.adding' | translate }}</span>
        <span class="text-white">{{ progress.processed }}/{{ progress.total }}</span>
      </div>
    </ng-template>
  </p-progressbar>
}

<!-- Invalid URLs popup -->
<p-dialog [(visible)]="viewInvalidUrls" [header]="'invalidUrls._title' | translate" [maximizable]="true" [modal]="true" [style]="{ height: '90vh' }" appendTo="body" styleClass="w-10">
  @if (addUrlsService.urlState().urlsToReview.length > 0) {
    <aida-invalid-urls (dialogClose)="viewInvalidUrls = false" />
  }
</p-dialog>
` }]
  }], null, { directInput: [{ type: Input, args: [{ isSignal: true, alias: "directInput", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddUrlsComponent, { className: "AddUrlsComponent", filePath: "src/app/components/add-pages/by-url/add-urls.component.ts", lineNumber: 24 });
})();

// src/app/components/add-pages/add-pages.component.ts
function AddPagesComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "findPages._title"));
  }
}
function AddPagesComponent_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const paragraph_r1 = ctx.$implicit;
    const \u0275$index_34_r2 = ctx.$index;
    \u0275\u0275classProp("mt-0", \u0275$index_34_r2 === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(paragraph_r1);
  }
}
var AddPagesComponent = class _AddPagesComponent {
  addUrlsService = inject(AddUrlsService);
  noHeader = input(false, ...ngDevMode ? [{ debugName: "noHeader" }] : (
    /* istanbul ignore next */
    []
  ));
  markForTranslation() {
    marker("addPages._nav");
    marker("findPages.url.description");
  }
  static \u0275fac = function AddPagesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddPagesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddPagesComponent, selectors: [["aida-add-pages"]], inputs: { noHeader: [1, "noHeader"] }, decls: 30, vars: 20, consts: [[1, "text-2xl", "my-1"], [1, "text-color-secondary"], ["value", "0"], ["value", "1"], ["value", "2"], [1, "p-0"], [3, "mt-0"], [3, "directInput"]], template: function AddPagesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, AddPagesComponent_Conditional_0_Template, 3, 3, "h2", 0);
      \u0275\u0275elementStart(1, "p", 1);
      \u0275\u0275text(2);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p-tabs", 2)(5, "p-tablist")(6, "p-tab", 2);
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p-tab", 3);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "p-tab", 4);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "p-tabpanels", 5)(16, "p-tabpanel", 2)(17, "h3");
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(20, AddPagesComponent_For_21_Template, 2, 3, "p", 6, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275element(23, "aida-add-urls");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "p-tabpanel", 3);
      \u0275\u0275element(25, "aida-get-task-urls")(26, "aida-add-urls", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "p-tabpanel", 4);
      \u0275\u0275element(28, "aida-get-child-pages")(29, "aida-add-urls", 7);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275conditional(!ctx.noHeader() ? 0 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 8, "findPages.description"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 10, "findPages.url._nav"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 12, "findPages.task._nav"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 14, "findPages.findChildren._nav"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 16, "findPages.url._title"));
      \u0275\u0275advance(2);
      \u0275\u0275repeater(\u0275\u0275pipeBind1(22, 18, "findPages.url.description").split("|"));
      \u0275\u0275advance(6);
      \u0275\u0275property("directInput", false);
      \u0275\u0275advance(3);
      \u0275\u0275property("directInput", false);
    }
  }, dependencies: [TabsModule, Tabs, TabPanels, TabPanel, TabList, Tab, AddUrlsComponent, GetChildPagesComponent, GetTaskUrlsComponent, TranslatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddPagesComponent, [{
    type: Component,
    args: [{ selector: "aida-add-pages", imports: [TranslatePipe, TabsModule, AddUrlsComponent, GetChildPagesComponent, GetTaskUrlsComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `@if (!noHeader()) {
  <h2 class="text-2xl my-1">{{ 'findPages._title' | translate }}</h2>
}
<p class="text-color-secondary">{{ 'findPages.description' | translate }}</p>

<p-tabs value="0">
  <p-tablist>
    <p-tab value="0">{{ 'findPages.url._nav' | translate }}</p-tab>
    <p-tab value="1">{{ 'findPages.task._nav' | translate }}</p-tab>
    <p-tab value="2">{{ 'findPages.findChildren._nav' | translate }}</p-tab>
  </p-tablist>
  <p-tabpanels class="p-0">
    <!--Find pages by url-->
    <p-tabpanel value="0">
      <h3>{{ 'findPages.url._title' | translate }}</h3>
      @for (paragraph of ('findPages.url.description' | translate).split('|'); track paragraph; let first = $first) {
        <p [class.mt-0]="$first">{{ paragraph }}</p>
      }
      <aida-add-urls />
    </p-tabpanel>
    <!--Find pages by task-->
    <p-tabpanel value="1">
      <aida-get-task-urls />
      <aida-add-urls [directInput]="false" />
    </p-tabpanel>
    <!--Find child pages-->
    <p-tabpanel value="2">
      <aida-get-child-pages />
      <aida-add-urls [directInput]="false" />
    </p-tabpanel>
    <!--Find pages by keyword or regex (grep search/regex helper)-->
    <!--p-tabpanel value="3">
      ???
    </p-tabpanel-->
  </p-tabpanels>
</p-tabs>
` }]
  }], null, { noHeader: [{ type: Input, args: [{ isSignal: true, alias: "noHeader", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddPagesComponent, { className: "AddPagesComponent", filePath: "src/app/components/add-pages/add-pages.component.ts", lineNumber: 20 });
})();

export {
  AddPagesComponent
};
//# sourceMappingURL=chunk-YVOBPZ7I.js.map
