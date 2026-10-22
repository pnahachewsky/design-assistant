import {
  PatComponent
} from "./chunk-NC3BGFSW.js";
import {
  Divider,
  DividerModule
} from "./chunk-ATVW4L4U.js";
import {
  ProjectStateService
} from "./chunk-AW5MQYZC.js";
import {
  ExportGitHubService
} from "./chunk-REIT3HFO.js";
import {
  GitHubAuthService,
  SignInService
} from "./chunk-NJENQTX6.js";
import {
  Button,
  ButtonModule
} from "./chunk-QN4TTD5X.js";
import {
  UserSettingsService
} from "./chunk-7YP54JN5.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  TranslatePipe,
  computed,
  effect,
  inject,
  input,
  setClassMetadata,
  signal,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-KRHY6Z2H.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-YCXP4XZS.js";

// src/app/components/sign-in/sign-in-banner/sign-in-banner.component.ts
var _c0 = (a0) => ({ User: a0 });
function SignInBannerComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4)(5, "div", 5);
    \u0275\u0275element(6, "i", 6);
    \u0275\u0275elementStart(7, "p", 7);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 8);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p-button", 9);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275listener("onClick", function SignInBannerComponent_Conditional_5_Template_p_button_onClick_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.authService.login());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "p-divider", 10);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p-divider", 11);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 12);
    \u0275\u0275element(22, "i", 13);
    \u0275\u0275elementStart(23, "p", 7);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p", 8);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "aida-pat");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.mode() === "github" ? \u0275\u0275pipeBind1(2, 9, "github.connect.description") : \u0275\u0275pipeBind1(3, 11, "github.connect.description.cloud"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 13, "github.connect.option1.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 15, "github.connect.option1.description"));
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275interpolate(\u0275\u0275pipeBind1(14, 17, "github.connect.option1.button")));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 19, "common.or"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 21, "common.or"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 23, "github.connect.option2.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 25, "github.connect.option2.description"));
  }
}
function SignInBannerComponent_Conditional_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p", 16);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "p", 17);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.getTitleClasses());
    \u0275\u0275property("innerHtml", \u0275\u0275pipeBind1(1, 4, "github.connect.checking"), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 6, "github.connect.checking.details"));
  }
}
function SignInBannerComponent_Conditional_6_Conditional_4_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "github.connect.connected.oauth", \u0275\u0275pureFunction1(4, _c0, ctx_r1.username())), " ");
  }
}
function SignInBannerComponent_Conditional_6_Conditional_4_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "github.connect.connected.pat", \u0275\u0275pureFunction1(4, _c0, ctx_r1.username())), " ");
  }
}
function SignInBannerComponent_Conditional_6_Conditional_4_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(2, 1, "github.connect.unverified", \u0275\u0275pureFunction1(4, _c0, ctx_r1.username())), "a");
  }
}
function SignInBannerComponent_Conditional_6_Conditional_4_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 20);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("onClick", function SignInBannerComponent_Conditional_6_Conditional_4_Conditional_8_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.signInService.clearPAT());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 1, "github.connect.clearToken"));
  }
}
function SignInBannerComponent_Conditional_6_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div")(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, SignInBannerComponent_Conditional_6_Conditional_4_Conditional_5_Template, 3, 6, "p", 17)(6, SignInBannerComponent_Conditional_6_Conditional_4_Conditional_6_Template, 3, 6, "p", 17);
    \u0275\u0275conditionalCreate(7, SignInBannerComponent_Conditional_6_Conditional_4_Conditional_7_Template, 3, 6, "p", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, SignInBannerComponent_Conditional_6_Conditional_4_Conditional_8_Template, 2, 3, "p-button", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getTitleClasses());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 6, "github.connect.connected"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.authService.isAuthenticated() ? 5 : 6);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.showDisclaimer() ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showDisclaimer() ? 8 : -1);
  }
}
function SignInBannerComponent_Conditional_6_Conditional_5_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 20);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("onClick", function SignInBannerComponent_Conditional_6_Conditional_5_Conditional_8_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.signInService.clearPAT());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 1, "github.connect.clearToken"));
  }
}
function SignInBannerComponent_Conditional_6_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div")(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 17);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(8, SignInBannerComponent_Conditional_6_Conditional_5_Conditional_8_Template, 2, 3, "p-button", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getTitleClasses());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, "github.connect.warning"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 7, "github.connect.warning.details"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.authService.isAuthenticated() ? 8 : -1);
  }
}
function SignInBannerComponent_Conditional_6_Conditional_6_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 20);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("onClick", function SignInBannerComponent_Conditional_6_Conditional_6_Conditional_8_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.signInService.clearPAT());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 1, "github.connect.clearToken"));
  }
}
function SignInBannerComponent_Conditional_6_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div")(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 17);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(8, SignInBannerComponent_Conditional_6_Conditional_6_Conditional_8_Template, 2, 3, "p-button", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getTitleClasses());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, "github.connect.error"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 7, "github.connect.error.details"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.authService.isAuthenticated() ? 8 : -1);
  }
}
function SignInBannerComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "i");
    \u0275\u0275elementStart(2, "div", 14);
    \u0275\u0275conditionalCreate(3, SignInBannerComponent_Conditional_6_Conditional_3_Template, 5, 8);
    \u0275\u0275conditionalCreate(4, SignInBannerComponent_Conditional_6_Conditional_4_Template, 9, 8, "div", 15);
    \u0275\u0275conditionalCreate(5, SignInBannerComponent_Conditional_6_Conditional_5_Template, 9, 9, "div", 15);
    \u0275\u0275conditionalCreate(6, SignInBannerComponent_Conditional_6_Conditional_6_Template, 9, 9, "div", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.getBgClasses());
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getStatusIcons());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.connectionStatus() === "checking" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.connectionStatus() === "connected" ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.connectionStatus() === "warning" ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.connectionStatus() === "error" || ctx_r1.connectionStatus() === "missing" ? 6 : -1);
  }
}
var SignInBannerComponent = class _SignInBannerComponent {
  projectState = inject(ProjectStateService);
  settingsService = inject(UserSettingsService);
  exportGitHubService = inject(ExportGitHubService);
  authService = inject(GitHubAuthService);
  signInService = inject(SignInService);
  mode = input("github", ...ngDevMode ? [{ debugName: "mode" }] : (
    /* istanbul ignore next */
    []
  ));
  username = computed(() => this.signInService.user()?.name || this.signInService.user()?.login || "User", ...ngDevMode ? [{ debugName: "username" }] : (
    /* istanbul ignore next */
    []
  ));
  //Signals
  connectionStatus = signal("checking", ...ngDevMode ? [{ debugName: "connectionStatus" }] : (
    /* istanbul ignore next */
    []
  ));
  showDisclaimer = signal(false, ...ngDevMode ? [{ debugName: "showDisclaimer" }] : (
    /* istanbul ignore next */
    []
  ));
  precheckInProgress = signal(false, ...ngDevMode ? [{ debugName: "precheckInProgress" }] : (
    /* istanbul ignore next */
    []
  ));
  githubData = computed(() => {
    const project = this.projectState.getProject();
    return { owner: project.github.owner, repo: project.github.repo };
  }, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "githubData" } : (
    /* istanbul ignore next */
    {}
  )), { equal: (a, b) => a.owner === b.owner && a.repo === b.repo }));
  constructor() {
    effect(() => __async(this, null, function* () {
      const token = this.signInService.token();
      const { owner, repo } = this.githubData();
      if (token && token.length >= 40 && owner && repo) {
        untracked(() => this.validateConnection());
      } else if (!token) {
        this.connectionStatus.set("missing");
      }
    }));
  }
  // Initialize table and connection status
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.validateConnection();
    });
  }
  //Validate token and repo access
  validateConnection() {
    return __async(this, null, function* () {
      if (this.precheckInProgress())
        return;
      this.precheckInProgress.set(true);
      this.connectionStatus.set("checking");
      this.showDisclaimer.set(false);
      try {
        const token = this.signInService.token();
        const { owner, repo } = this.githubData();
        const result = yield this.signInService.validateToken(token, owner, repo);
        if (!result.valid) {
          this.connectionStatus.set("error");
        } else if (result.repoExists && !result.hasRepoAccess) {
          this.connectionStatus.set("warning");
        } else if (!result.repoExists && !result.canCreateRepo) {
          this.connectionStatus.set("warning");
        } else {
          this.connectionStatus.set("connected");
          this.showDisclaimer.set(result.showDisclaimer ?? false);
          if (!this.authService.isAuthenticated() && !this.signInService.user()) {
            yield this.signInService.validatePAT();
          }
        }
      } finally {
        this.precheckInProgress.set(false);
      }
    });
  }
  // Status message colors & icons
  getStatusTextColor(status) {
    const isDark = this.settingsService.darkMode();
    const colorMap = {
      connected: isDark ? "text-green-400" : "text-green-500",
      warning: isDark ? "text-yellow-400" : "text-yellow-500",
      error: isDark ? "text-red-400" : "text-red-500",
      missing: isDark ? "text-red-400" : "text-red-500",
      checking: isDark ? "text-blue-400" : "text-blue-500"
    };
    return colorMap[status] || "";
  }
  getStatusIcons = computed(() => {
    const status = this.connectionStatus();
    const iconMap = {
      connected: "pi-check-circle",
      warning: "pi-exclamation-triangle",
      error: "pi-times-circle",
      missing: "pi-times-circle",
      checking: "pi-spin pi-spinner"
    };
    return `pi ${iconMap[status]} ${this.getStatusTextColor(status)} text-2xl`;
  }, ...ngDevMode ? [{ debugName: "getStatusIcons" }] : (
    /* istanbul ignore next */
    []
  ));
  getTitleClasses = computed(() => {
    const status = this.connectionStatus();
    return `font-semibold my-0 ${this.getStatusTextColor(status)}`;
  }, ...ngDevMode ? [{ debugName: "getTitleClasses" }] : (
    /* istanbul ignore next */
    []
  ));
  getBgClasses = computed(() => {
    const status = this.connectionStatus();
    const isDark = this.settingsService.darkMode();
    const baseClasses = "flex align-items-center gap-2 p-3 border-round mb-3";
    const bgMap = {
      connected: isDark ? "bg-green-950" : "bg-green-50",
      warning: isDark ? "bg-yellow-950" : "bg-yellow-50",
      error: isDark ? "bg-red-950" : "bg-red-50",
      missing: isDark ? "bg-red-950" : "bg-red-50",
      checking: isDark ? "bg-blue-950" : "bg-blue-50"
    };
    return `${baseClasses} ${bgMap[status]}`;
  }, ...ngDevMode ? [{ debugName: "getBgClasses" }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function SignInBannerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SignInBannerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignInBannerComponent, selectors: [["aida-sign-in-banner"]], inputs: { mode: [1, "mode"] }, decls: 7, vars: 6, consts: [[1, "text-2xl", "mt-3", "mb-1"], [1, "flex", "flex-column", "gap-3"], [3, "class"], [1, "my-0"], [1, "flex", "flex-column", "lg:flex-row", "gap-2"], [1, "flex-1", "border-left-3", "surface-border", "p-3", "text-center"], [1, "pi", "pi-github", "text-6xl", "text-900", "mb-3"], [1, "font-semibold", "my-0"], [1, "text-sm", "text-color-secondary", "my-2"], ["icon", "pi pi-github", "styleClass", "w-full", 3, "onClick", "label"], ["layout", "horizontal", 1, "lg:hidden", "uppercase"], ["layout", "vertical", 1, "hidden", "lg:flex", "uppercase"], [1, "flex-1", "border-left-3", "surface-border", "lg:border-none", "p-3", "text-center"], [1, "pi", "pi-key", "text-6xl", "text-900", "mb-3"], [1, "flex-1"], [1, "flex", "flex-row", "gap-2", "justify-content-between"], [3, "innerHtml"], [1, "text-sm", "text-color-secondary", "my-0"], [1, "text-xs", "text-color-secondary", "my-0"], ["icon", "pi pi-times", "outlined", "", "severity", "secondary", "size", "small", "styleClass", "secondary-outline white-space-nowrap", 3, "label"], ["icon", "pi pi-times", "outlined", "", "severity", "secondary", "size", "small", "styleClass", "secondary-outline white-space-nowrap", 3, "onClick", "label"]], template: function SignInBannerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h2", 0);
      \u0275\u0275text(1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 1);
      \u0275\u0275conditionalCreate(5, SignInBannerComponent_Conditional_5_Template, 30, 27)(6, SignInBannerComponent_Conditional_6_Template, 7, 8, "div", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.connectionStatus() === "connected" ? \u0275\u0275pipeBind1(2, 2, "github.connected") : \u0275\u0275pipeBind1(3, 4, "github.connect"));
      \u0275\u0275advance(4);
      \u0275\u0275conditional(!ctx.signInService.token() ? 5 : 6);
    }
  }, dependencies: [ButtonModule, Button, DividerModule, Divider, PatComponent, TranslatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignInBannerComponent, [{
    type: Component,
    args: [{ selector: "aida-sign-in-banner", imports: [TranslatePipe, ButtonModule, DividerModule, PatComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<h2 class="text-2xl mt-3 mb-1">{{ connectionStatus() === 'connected' ? ('github.connected' | translate) : ('github.connect' | translate) }}</h2>
<div class="flex flex-column gap-3">
  <!--Sign in options -->
  @if (!signInService.token()) {
    <p class="my-0">{{ mode() === 'github' ? ('github.connect.description' | translate) : ('github.connect.description.cloud' | translate) }}</p>
    <!-- Option 1: OAuth Sign In -->
    <div class="flex flex-column lg:flex-row gap-2">
      <div class="flex-1 border-left-3 surface-border p-3 text-center">
        <i class="pi pi-github text-6xl text-900 mb-3"></i>
        <p class="font-semibold my-0">{{ 'github.connect.option1.title' | translate }}</p>
        <p class="text-sm text-color-secondary my-2">{{ 'github.connect.option1.description' | translate }}</p>
        <p-button (onClick)="authService.login()" icon="pi pi-github" label="{{ 'github.connect.option1.button' | translate }}" styleClass="w-full" />
      </div>
      <p-divider class="lg:hidden uppercase" layout="horizontal">{{ 'common.or' | translate }}</p-divider>
      <p-divider class="hidden lg:flex uppercase" layout="vertical">{{ 'common.or' | translate }}</p-divider>
      <!-- Option 2: Personal Access Token -->
      <div class="flex-1 border-left-3 surface-border lg:border-none p-3 text-center">
        <i class="pi pi-key text-6xl text-900 mb-3"></i>
        <p class="font-semibold my-0">{{ 'github.connect.option2.title' | translate }}</p>
        <p class="text-sm text-color-secondary my-2">{{ 'github.connect.option2.description' | translate }}</p>
        <aida-pat />
      </div>
    </div>
  } @else {
    <!--Connection Status-->
    <div [class]="getBgClasses()">
      <i [class]="getStatusIcons()"></i>
      <div class="flex-1">
        @if (connectionStatus() === 'checking') {
          <p [class]="getTitleClasses()" [innerHtml]="'github.connect.checking' | translate"></p>
          <p class="text-sm text-color-secondary my-0">{{ 'github.connect.checking.details' | translate }}</p>
        }
        @if (connectionStatus() === 'connected') {
          <div class="flex flex-row gap-2 justify-content-between">
            <div>
              <p [class]="getTitleClasses()">{{ 'github.connect.connected' | translate }}</p>
              @if (authService.isAuthenticated()) {
                <p class="text-sm text-color-secondary my-0">
                  {{ 'github.connect.connected.oauth' | translate: { User: username() } }}
                </p>
              } @else {
                <p class="text-sm text-color-secondary my-0">
                  {{ 'github.connect.connected.pat' | translate: { User: username() } }}
                </p>
              }
              @if (showDisclaimer()) {
                <p class="text-xs text-color-secondary my-0">{{ 'github.connect.unverified' | translate: { User: username() } }}a</p>
              }
            </div>
            @if (showDisclaimer()) {
              <p-button
                [label]="'github.connect.clearToken' | translate"
                (onClick)="signInService.clearPAT()"
                icon="pi pi-times"
                outlined
                severity="secondary"
                size="small"
                styleClass="secondary-outline white-space-nowrap"
              />
            }
          </div>
        }
        @if (connectionStatus() === 'warning') {
          <div class="flex flex-row gap-2 justify-content-between">
            <div>
              <p [class]="getTitleClasses()">{{ 'github.connect.warning' | translate }}</p>
              <p class="text-sm text-color-secondary my-0">{{ 'github.connect.warning.details' | translate }}</p>
            </div>
            @if (!authService.isAuthenticated()) {
              <p-button
                [label]="'github.connect.clearToken' | translate"
                (onClick)="signInService.clearPAT()"
                icon="pi pi-times"
                outlined
                severity="secondary"
                size="small"
                styleClass="secondary-outline white-space-nowrap"
              />
            }
          </div>
        }
        @if (connectionStatus() === 'error' || connectionStatus() === 'missing') {
          <div class="flex flex-row gap-2 justify-content-between">
            <div>
              <p [class]="getTitleClasses()">{{ 'github.connect.error' | translate }}</p>
              <p class="text-sm text-color-secondary my-0">{{ 'github.connect.error.details' | translate }}</p>
            </div>
            @if (!authService.isAuthenticated()) {
              <p-button
                [label]="'github.connect.clearToken' | translate"
                (onClick)="signInService.clearPAT()"
                icon="pi pi-times"
                outlined
                severity="secondary"
                size="small"
                styleClass="secondary-outline white-space-nowrap"
              />
            }
          </div>
        }
      </div>
    </div>
  }
</div>
` }]
  }], () => [], { mode: [{ type: Input, args: [{ isSignal: true, alias: "mode", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignInBannerComponent, { className: "SignInBannerComponent", filePath: "src/app/components/sign-in/sign-in-banner/sign-in-banner.component.ts", lineNumber: 24 });
})();

export {
  SignInBannerComponent
};
//# sourceMappingURL=chunk-5MMK553J.js.map
