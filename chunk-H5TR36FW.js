import {
  CompareService
} from "./chunk-TFIK6GFY.js";
import {
  UserSettingsComponent
} from "./chunk-RBME4FR2.js";
import {
  AddPagesLinkComponent
} from "./chunk-3Y4CZOCC.js";
import {
  Menu,
  MenuModule
} from "./chunk-PL2PAX7Y.js";
import {
  IftaLabel,
  IftaLabelModule
} from "./chunk-FQDO2XGS.js";
import {
  ProjectCacheService
} from "./chunk-ZP7AMFPN.js";
import {
  AidaLinks
} from "./chunk-JNZO32C5.js";
import {
  ProjectStateService
} from "./chunk-AW5MQYZC.js";
import {
  HtmlNormalizationService
} from "./chunk-6U2RHGUD.js";
import {
  ALL_SOURCES,
  FetchService
} from "./chunk-M6FDN6OY.js";
import {
  Select,
  SelectModule
} from "./chunk-JR3PODJQ.js";
import {
  Button,
  ButtonModule,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-QN4TTD5X.js";
import {
  CommonModule,
  MessageService,
  NgTemplateOutlet,
  Router
} from "./chunk-7YP54JN5.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  TranslatePipe,
  TranslateService,
  effect,
  inject,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-KRHY6Z2H.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-YCXP4XZS.js";

// src/app/components/compare/compare-select/compare-select.component.ts
var _c0 = (a0) => ({ mode: "before", value: a0 });
var _c1 = (a0) => ({ mode: "after", value: a0 });
var _c2 = (a0) => ({ mode: "source", value: a0 });
function CompareSelectComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 14);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("onClick", function CompareSelectComponent_Conditional_10_Template_p_button_onClick_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275nextContext();
      const menu_r2 = \u0275\u0275reference(18);
      return \u0275\u0275resetView(menu_r2.toggle($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 1, "common.options"));
  }
}
function CompareSelectComponent_Conditional_11_Conditional_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CompareSelectComponent_Conditional_11_Conditional_1_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CompareSelectComponent_Conditional_11_Conditional_1_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CompareSelectComponent_Conditional_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "span", 16);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CompareSelectComponent_Conditional_11_Conditional_1_ng_container_4_Template, 1, 0, "ng-container", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 15)(6, "span", 16);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 18);
    \u0275\u0275template(10, CompareSelectComponent_Conditional_11_Conditional_1_ng_container_10_Template, 1, 0, "ng-container", 19)(11, CompareSelectComponent_Conditional_11_Conditional_1_ng_container_11_Template, 1, 0, "ng-container", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    const pageSelect_r4 = \u0275\u0275reference(14);
    const versionSelect_r5 = \u0275\u0275reference(16);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 7, "compare.pageOptions.selection"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", pageSelect_r4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 9, "compare.pageOptions.versions"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngTemplateOutlet", versionSelect_r5)("ngTemplateOutletContext", \u0275\u0275pureFunction1(11, _c0, ctx_r2.compareService.selectedBefore()));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", versionSelect_r5)("ngTemplateOutletContext", \u0275\u0275pureFunction1(13, _c1, ctx_r2.compareService.selectedAfter()));
  }
}
function CompareSelectComponent_Conditional_11_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CompareSelectComponent_Conditional_11_Conditional_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CompareSelectComponent_Conditional_11_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CompareSelectComponent_Conditional_11_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 17)(1, CompareSelectComponent_Conditional_11_Conditional_2_ng_container_1_Template, 1, 0, "ng-container", 19);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    const pageSelect_r4 = \u0275\u0275reference(14);
    const versionSelect_r5 = \u0275\u0275reference(16);
    \u0275\u0275property("ngTemplateOutlet", pageSelect_r4);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", versionSelect_r5)("ngTemplateOutletContext", \u0275\u0275pureFunction1(3, _c2, ctx_r2.compareService.selectedSource()));
  }
}
function CompareSelectComponent_Conditional_11_Conditional_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CompareSelectComponent_Conditional_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CompareSelectComponent_Conditional_11_Conditional_3_ng_container_0_Template, 1, 0, "ng-container", 17);
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const pageSelect_r4 = \u0275\u0275reference(14);
    \u0275\u0275property("ngTemplateOutlet", pageSelect_r4);
  }
}
function CompareSelectComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275conditionalCreate(1, CompareSelectComponent_Conditional_11_Conditional_1_Template, 12, 15)(2, CompareSelectComponent_Conditional_11_Conditional_2_Template, 2, 5)(3, CompareSelectComponent_Conditional_11_Conditional_3_Template, 1, 1, "ng-container");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.compareMode() === "2 versions" ? 1 : ctx_r2.compareMode() === "1 version" ? 2 : ctx_r2.compareMode() === "page only" ? 3 : -1);
  }
}
function CompareSelectComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "aida-add-pages-link");
    \u0275\u0275elementEnd();
  }
}
function CompareSelectComponent_ng_template_13_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "span", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(page_r7.label);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", page_r7.path, " ");
  }
}
function CompareSelectComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-iftalabel")(1, "p-select", 20);
    \u0275\u0275listener("ngModelChange", function CompareSelectComponent_ng_template_13_Template_p_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPageSelectionChange($event));
    });
    \u0275\u0275template(2, CompareSelectComponent_ng_template_13_ng_template_2_Template, 4, 2, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "label", 21);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("filter", true)("loading", ctx_r2.compareService.loading() || ctx_r2.compareService.loadingAll())("ngModel", ctx_r2.compareService.selectedPage())("options", ctx_r2.pageOptions);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 5, "compare.pageOptions.page"));
  }
}
function CompareSelectComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-iftalabel")(1, "p-select", 24);
    \u0275\u0275listener("ngModelChange", function CompareSelectComponent_ng_template_15_Template_p_select_ngModelChange_1_listener($event) {
      const mode_r9 = \u0275\u0275restoreView(_r8).mode;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onVersionSelectionChange($event, mode_r9));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 25);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const mode_r9 = ctx.mode;
    const value_r10 = ctx.value;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("inputId", mode_r9)("loading", ctx_r2.isLoading(mode_r9))("ngModel", value_r10)("options", ctx_r2.versionOptions);
    \u0275\u0275advance();
    \u0275\u0275property("for", mode_r9);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 6, "common." + mode_r9));
  }
}
function CompareSelectComponent_ng_template_19_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 27);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, item_r11.Tooltip));
  }
}
function CompareSelectComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, CompareSelectComponent_ng_template_19_Conditional_3_Template, 3, 3, "p", 27);
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, item_r11.label));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r11.Tooltip ? 3 : -1);
  }
}
function CompareSelectComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 28);
    \u0275\u0275element(1, "i");
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(item_r12.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, item_r12.label));
  }
}
function CompareSelectComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29)(1, "span", 26);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "span", 30);
    \u0275\u0275element(5, "aida-user-settings", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "common.versions"));
  }
}
var CompareSelectComponent = class _CompareSelectComponent {
  router = inject(Router);
  translate = inject(TranslateService);
  messageService = inject(MessageService);
  projectState = inject(ProjectStateService);
  projectCache = inject(ProjectCacheService);
  compareService = inject(CompareService);
  fetchService = inject(FetchService);
  htmlNormalizationService = inject(HtmlNormalizationService);
  compareMode = input("2 versions", ...ngDevMode ? [{ debugName: "compareMode" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    return __async(this, null, function* () {
      const options = this.pageOptions;
      const page = this.compareService.selectedPage();
      if (!page && options.length > 0) {
        this.compareService.selectedPage.set(options[0].path);
        yield this.onPageSelectionChange(options[0].path);
      } else if (page) {
        void this.onPageSelectionChange(page);
      }
    });
  }
  constructor() {
    effect(() => {
      const versionOptions = this.allOptions();
      if (!versionOptions.length)
        return;
      const firstOption = versionOptions[0];
      const hasVersion = (version) => version != null && versionOptions.includes(version);
      if (!hasVersion(this.compareService.selectedBefore()))
        this.compareService.selectedBefore.set(firstOption);
      if (!hasVersion(this.compareService.selectedAfter()))
        this.compareService.selectedAfter.set(firstOption);
      if (!hasVersion(this.compareService.selectedSource()))
        this.compareService.selectedSource.set(firstOption);
    });
  }
  /** Page dropdown options */
  get pageOptions() {
    return this.projectState.getAllPages("en", "live", "inScope");
  }
  /** All potential "Versions" for the {@link versionOptions} dropdowns
   *
   * Updated via {@link onPageSelectionChange} to remove versions we can't fetch
   */
  allOptions = signal([...ALL_SOURCES], ...ngDevMode ? [{ debugName: "allOptions" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Before & after dropdown options from filtered {@link allOptions} */
  get versionOptions() {
    return this.allOptions().map((value) => ({
      label: this.translate.instant(`common.source.${value}`),
      value
    }));
  }
  /** On page change:
   ** Clears current original and modified HTML
   ** Updates {@link allOptions} with valid versions for the currently selected page
   ** Runs {@link onVersionSelectionChange} to set original and modified HTML for the currently selected page
   */
  onPageSelectionChange(path) {
    return __async(this, null, function* () {
      this.compareService.loading.set(true);
      try {
        this.compareService.selectedPage.set(path);
        if (!this.compareService.selectedPage() || this.compareMode() === "page only")
          return;
        this.compareService.originalHtml.set(void 0);
        this.compareService.modifiedHtml.set(void 0);
        const versionsToCheck = this.projectCache.getVersionsToCheck(path);
        const validVersions = [];
        for (const { url, version } of versionsToCheck) {
          yield this.projectCache.checkVersion(url, version, validVersions);
        }
        this.allOptions.set(validVersions);
        const cached = this.projectCache.getPageEdit(path);
        if (cached) {
          this.compareService.selectedBefore.set(cached.originalHtml.version);
          this.compareService.selectedAfter.set(cached.modifiedHtml.version);
          this.compareService.originalHtml.set(cached.originalHtml);
          this.compareService.modifiedHtml.set(cached.modifiedHtml);
        } else {
          if (this.compareMode()) {
            yield this.onVersionSelectionChange(this.compareService.selectedBefore(), "before");
            yield this.onVersionSelectionChange(this.compareService.selectedAfter(), "after");
          } else {
            this.onVersionSelectionChange(this.compareService.selectedSource(), "source");
          }
        }
      } finally {
        this.compareService.loading.set(false);
      }
    });
  }
  /** On version change:
   ** Sets selectedBefore, selectedAfter, or selectedSource signal
   ** Uses {@link fetchVersion} to fetch selected version from project cache, if available, or runs fresh fetch
   ** Sets originalHtml or modifiedHtml or both
   */
  onVersionSelectionChange(version, mode) {
    return __async(this, null, function* () {
      switch (mode) {
        case "before":
          this.compareService.loadingBefore.set(true);
          try {
            this.compareService.selectedBefore.set(version);
            const result = yield this.fetchVersion(version);
            this.compareService.originalHtml.set(result);
          } finally {
            this.compareService.loadingBefore.set(false);
          }
          break;
        case "after":
          this.compareService.loadingAfter.set(true);
          try {
            this.compareService.selectedAfter.set(version);
            const result = yield this.fetchVersion(version);
            this.compareService.modifiedHtml.set(result);
          } finally {
            this.compareService.loadingAfter.set(false);
          }
          break;
        case "source":
          this.compareService.loadingSource.set(true);
          try {
            this.compareService.selectedSource.set(version);
            const result = yield this.fetchVersion(version);
            this.compareService.originalHtml.set(result);
            this.compareService.modifiedHtml.set(result);
          } finally {
            this.compareService.loadingSource.set(false);
          }
          break;
      }
    });
  }
  isLoading(mode) {
    switch (mode) {
      case "before":
        return this.compareService.loading() || this.compareService.loadingAll() || this.compareService.loadingBefore();
      case "after":
        return this.compareService.loading() || this.compareService.loadingAll() || this.compareService.loadingAfter();
      case "source":
        return this.compareService.loading() || this.compareService.loadingAll() || this.compareService.loadingSource();
    }
  }
  /** Fetches selected version from project cache, if available, or runs fresh fetch and saves to cache
   *
   * Used by {@link onVersionSelectionChange}
   */
  fetchVersion(version) {
    return __async(this, null, function* () {
      if (!this.compareService.selectedPage())
        return;
      const project = this.projectState.getProject();
      const url = this.fetchService.generateUrl(this.compareService.selectedPage(), version, project.github.owner, project.github.repo);
      const cachedContent = this.projectCache.getCachedHtml(url);
      if (cachedContent)
        return __spreadProps(__spreadValues({}, cachedContent), { version });
      const fetchType = version === "preview" || version.endsWith("UT") ? "proxy" : "url";
      const htmlContent = yield this.htmlNormalizationService.normalizeHTML(url, fetchType);
      if (htmlContent?.url)
        this.projectCache.setCachedHtml(htmlContent.url, htmlContent);
      return __spreadProps(__spreadValues({}, htmlContent), {
        version
      });
    });
  }
  /** Dropdown options */
  get items() {
    const dropdownOptions = [];
    if (this.compareMode()) {
      dropdownOptions.push({
        label: this.translate.instant("compare.tools.other"),
        items: [
          {
            label: this.translate.instant("common.share"),
            icon: "pi pi-share-alt",
            command: () => {
              this.shareLink();
            }
          }
        ]
      });
    }
    dropdownOptions.push({
      label: this.translate.instant("compare.tools.cache"),
      Tooltip: this.translate.instant("compare.tools.cache.tooltip"),
      items: [
        {
          label: !this.compareService.loadingAll() ? this.translate.instant("compare.tools.cache.loadAll") : this.translate.instant("compare.tools.cache.cancelLoadAll"),
          icon: !this.compareService.loadingAll() ? "pi pi-download" : "pi pi-spin pi-spinner",
          command: () => __async(this, null, function* () {
            yield this.toggleLoadAll();
          })
        },
        {
          label: this.translate.instant("compare.tools.cache.reset"),
          icon: "pi pi-trash text-red-500",
          disabled: this.compareService.loadingAll(),
          command: () => {
            this.projectCache.clearHtmlAndStatusCache();
          }
        }
      ]
    });
    return dropdownOptions;
  }
  /** Copies share link to clipboard */
  shareLink() {
    const beforeUrl = this.compareService.originalHtml()?.url;
    const afterUrl = this.compareService.modifiedHtml()?.url;
    if (!beforeUrl || !afterUrl) {
      this.messageService.add({
        severity: "error",
        summary: this.translate.instant("common.copyError"),
        detail: this.translate.instant("compare.tools.noShareURL"),
        life: 5e3
      });
      return;
    }
    const params = { before: beforeUrl, after: afterUrl };
    const treeLink = this.router.createUrlTree([AidaLinks.StandaloneCompare], { queryParams: params });
    const shareLink = `${window.location.origin}${this.router.serializeUrl(treeLink)}`;
    navigator.clipboard.writeText(shareLink).then(() => {
      this.messageService.add({
        severity: "success",
        summary: this.translate.instant("common.copiedToClipboard"),
        detail: `${shareLink}`,
        life: 2e3
      });
    }).catch((err) => console.error("Clipboard copy failed:", err));
  }
  /** Runs either {@link cancelSetCache} or {@link setCacheForAll} */
  toggleLoadAll() {
    return __async(this, null, function* () {
      if (!this.compareService.loadingAll()) {
        yield this.setCacheForAll();
      } else {
        this.cancelSetCache();
        console.log("toggle cancel");
      }
    });
  }
  cacheAbortController = null;
  /** Cancels {@link setCacheForAll} */
  cancelSetCache() {
    this.cacheAbortController?.abort();
  }
  /** Sets status for all project pages in cache for faster navigation between pages */
  setCacheForAll() {
    return __async(this, null, function* () {
      this.cacheAbortController = new AbortController();
      const signal2 = this.cacheAbortController.signal;
      this.compareService.loadingAll.set(true);
      try {
        const lang = this.projectState.detectPrimaryLanguage();
        const allPaths = new Set(this.projectState.getAllPages(lang, "live", "inScope").map((p) => p.path));
        for (const path of allPaths) {
          if (signal2.aborted)
            break;
          const versionsToCheck = this.projectCache.getVersionsToCheck(path);
          const validVersions = [];
          for (const { url, version } of versionsToCheck) {
            yield this.projectCache.checkVersion(url, version, validVersions);
          }
        }
      } finally {
        this.compareService.loadingAll.set(false);
      }
    });
  }
  static \u0275fac = function CompareSelectComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CompareSelectComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompareSelectComponent, selectors: [["aida-compare-select"]], inputs: { compareMode: [1, "compareMode"] }, decls: 25, vars: 14, consts: [["pageSelect", ""], ["versionSelect", ""], ["menu", ""], ["submenuheader", ""], ["item", ""], ["end", ""], [1, "flex", "justify-content-between"], [1, "flex-1"], [1, "text-2xl", "my-1"], [1, "my-1"], ["icon", "pi pi-ellipsis-v", "iconPos", "right", "outlined", "", "styleClass", "secondary-outline w-full min-w-max", 3, "label"], [1, "flex", "flex-column", "lg:flex-row", "lg:align-items-center", "gap-2"], [1, "flex", "justify-content-start", "my-2"], [3, "model", "popup"], ["icon", "pi pi-ellipsis-v", "iconPos", "right", "outlined", "", "styleClass", "secondary-outline w-full min-w-max", 3, "onClick", "label"], [1, "flex", "flex-column", "text-color-secondary", "hover:text-primary", "max-w-max"], [1, "text-xs", "my-1"], [4, "ngTemplateOutlet"], [1, "flex", "flex-column", "sm:flex-row", "sm:align-content-center", "gap-1", "sm:gap-3", "lg:gap-2"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["filterBy", "label", "inputId", "page", "loadingIcon", "pi pi pi-spin pi-spinner", "optionLabel", "label", "optionValue", "path", 1, "w-20rem", "sm:w-27rem", 3, "ngModelChange", "filter", "loading", "ngModel", "options"], ["for", "page"], [1, "flex", "flex-column"], [1, "font-bold", "-mb-1"], ["loadingIcon", "pi pi pi-spin pi-spinner", "optionLabel", "label", "optionValue", "value", 1, "w-20rem", "sm:w-13rem", 3, "ngModelChange", "inputId", "loading", "ngModel", "options"], [3, "for"], [1, "text-primary", "font-bold"], [1, "text-gray-400", "font-light", "text-xs", "my-0"], [1, "p-menu-item-link"], [1, "p-menu-item-link", "py-0"], [1, "p-menu-item-link", "py-0", "hover:surface-100"], ["mode", "versions"]], template: function CompareSelectComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "h2", 8);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 9);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(10, CompareSelectComponent_Conditional_10_Template, 2, 3, "p-button", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(11, CompareSelectComponent_Conditional_11_Template, 4, 1, "div", 11)(12, CompareSelectComponent_Conditional_12_Template, 2, 0, "div", 12);
      \u0275\u0275template(13, CompareSelectComponent_ng_template_13_Template, 7, 7, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(15, CompareSelectComponent_ng_template_15_Template, 5, 8, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementStart(17, "p-menu", 13, 2);
      \u0275\u0275template(19, CompareSelectComponent_ng_template_19_Template, 4, 4, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(21, CompareSelectComponent_ng_template_21_Template, 5, 5, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(23, CompareSelectComponent_ng_template_23_Template, 6, 3, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 6, "compare.pageOptions._title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.compareMode() === "2 versions" ? \u0275\u0275pipeBind1(7, 8, "compare.pageOptions.description") : ctx.compareMode() === "1 version" ? \u0275\u0275pipeBind1(8, 10, "editPages.pageOptions.description") : \u0275\u0275pipeBind1(9, 12, "metadata.pageOptions.description"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.compareMode() !== "page only" ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.pageOptions.length > 0 ? 11 : 12);
      \u0275\u0275advance(6);
      \u0275\u0275property("model", ctx.items)("popup", true);
    }
  }, dependencies: [CommonModule, NgTemplateOutlet, FormsModule, NgControlStatus, NgModel, ButtonModule, Button, IftaLabelModule, IftaLabel, MenuModule, Menu, SelectModule, Select, AddPagesLinkComponent, UserSettingsComponent, TranslatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompareSelectComponent, [{
    type: Component,
    args: [{ selector: "aida-compare-select", imports: [CommonModule, FormsModule, TranslatePipe, ButtonModule, IftaLabelModule, MenuModule, SelectModule, AddPagesLinkComponent, UserSettingsComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="flex justify-content-between">
  <div class="flex-1">
    <h2 class="text-2xl my-1">{{ 'compare.pageOptions._title' | translate }}</h2>
    <p class="my-1">
      {{
        compareMode() === '2 versions'
          ? ('compare.pageOptions.description' | translate)
          : compareMode() === '1 version'
            ? ('editPages.pageOptions.description' | translate)
            : ('metadata.pageOptions.description' | translate)
      }}
    </p>
  </div>
  @if (compareMode() !== 'page only') {
    <p-button [label]="'common.options' | translate" (onClick)="menu.toggle($event)" icon="pi pi-ellipsis-v" iconPos="right" outlined styleClass="secondary-outline w-full min-w-max" />
  }
</div>

@if (pageOptions.length > 0) {
  <div class="flex flex-column lg:flex-row lg:align-items-center gap-2">
    @if (compareMode() === '2 versions') {
      <!--Selection-->
      <div class="flex flex-column text-color-secondary hover:text-primary max-w-max">
        <span class="text-xs my-1">{{ 'compare.pageOptions.selection' | translate }}</span>
        <ng-container *ngTemplateOutlet="pageSelect" />
      </div>
      <!--Versions-->
      <div class="flex flex-column text-color-secondary hover:text-primary max-w-max">
        <span class="text-xs my-1">{{ 'compare.pageOptions.versions' | translate }}</span>
        <div class="flex flex-column sm:flex-row sm:align-content-center gap-1 sm:gap-3 lg:gap-2">
          <!--Before-->
          <ng-container *ngTemplateOutlet="versionSelect; context: { mode: 'before', value: compareService.selectedBefore() }" />
          <!--After-->
          <ng-container *ngTemplateOutlet="versionSelect; context: { mode: 'after', value: compareService.selectedAfter() }" />
        </div>
      </div>
    } @else if (compareMode() === '1 version') {
      <ng-container *ngTemplateOutlet="pageSelect" />
      <ng-container *ngTemplateOutlet="versionSelect; context: { mode: 'source', value: compareService.selectedSource() }" />
    } @else if (compareMode() === 'page only') {
      <ng-container *ngTemplateOutlet="pageSelect" />
    }
  </div>
} @else {
  <div class="flex justify-content-start my-2">
    <aida-add-pages-link />
  </div>
}

<!--Page Template-->
<ng-template #pageSelect>
  <p-iftalabel>
    <p-select
      [filter]="true"
      [loading]="compareService.loading() || compareService.loadingAll()"
      [ngModel]="compareService.selectedPage()"
      [options]="pageOptions"
      (ngModelChange)="onPageSelectionChange($event)"
      class="w-20rem sm:w-27rem"
      filterBy="label"
      inputId="page"
      loadingIcon="pi pi pi-spin pi-spinner"
      optionLabel="label"
      optionValue="path"
    >
      <ng-template #item let-page>
        <div class="flex flex-column">
          <span class="font-bold -mb-1">{{ page.label }}</span>
          {{ page.path }}
        </div>
      </ng-template>
    </p-select>
    <label for="page">{{ 'compare.pageOptions.page' | translate }}</label>
  </p-iftalabel>
</ng-template>
<!--Version Template-->
<ng-template #versionSelect let-mode="mode" let-value="value">
  <p-iftalabel>
    <p-select
      [inputId]="mode"
      [loading]="isLoading(mode)"
      [ngModel]="value"
      [options]="versionOptions"
      (ngModelChange)="onVersionSelectionChange($event, mode)"
      class="w-20rem sm:w-13rem"
      loadingIcon="pi pi pi-spin pi-spinner"
      optionLabel="label"
      optionValue="value"
    />
    <!-- duplicate 'pi' needed on loading icon, p-select strips one out as of 2026-08-13 -->
    <label [for]="mode">{{ 'common.' + mode | translate }}</label>
  </p-iftalabel>
</ng-template>

<!--DROPDOWN MENU-->
<p-menu [model]="items" [popup]="true" #menu>
  <ng-template #submenuheader let-item>
    <span class="text-primary font-bold">{{ item.label | translate }}</span>
    @if (item.Tooltip) {
      <p class="text-gray-400 font-light text-xs my-0">{{ item.Tooltip | translate }}</p>
    }
  </ng-template>
  <ng-template #item let-item>
    <a class="p-menu-item-link">
      <i [class]="item.icon"></i>
      <span>{{ item.label | translate }}</span>
    </a>
  </ng-template>
  <ng-template #end>
    <span class="p-menu-item-link py-0">
      <span class="text-primary font-bold">{{ 'common.versions' | translate }}</span>
    </span>
    <span class="p-menu-item-link py-0 hover:surface-100">
      <aida-user-settings mode="versions" />
    </span>
  </ng-template>
</p-menu>
` }]
  }], () => [], { compareMode: [{ type: Input, args: [{ isSignal: true, alias: "compareMode", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompareSelectComponent, { className: "CompareSelectComponent", filePath: "src/app/components/compare/compare-select/compare-select.component.ts", lineNumber: 37 });
})();

export {
  CompareSelectComponent
};
//# sourceMappingURL=chunk-H5TR36FW.js.map
