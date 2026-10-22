import {
  DoormatsComponent
} from "./chunk-PMBMLHAU.js";
import {
  marker
} from "./chunk-QN4TTD5X.js";
import {
  ChangeDetectionStrategy,
  Component,
  TranslatePipe,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵsanitizeHtml,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-KRHY6Z2H.js";

// src/app/views/toolbox/dev-tools/dev-tools.component.ts
var DevToolsComponent = class _DevToolsComponent {
  devDoormats = ["monitoring", "colors", "patterns", "prompts"];
  //TODO: add an indicator for when static files need updating (vanity URLs, phone numbers, etc. should be updated monthly, CDTS templates should be reviewed bi-anually, etc. )
  /**
   * Translation markers for visual separators in translation files.
   * These keys (feature._) create visual breaks between feature sections.
   * DO NOT REMOVE - needed to preserve separators during i18n:clean
   */
  markForTranslation() {
    marker("about._");
    marker("actions._");
    marker("addPages._");
    marker("aiPrompt._");
    marker("collaborators._");
    marker("common._");
    marker("compare._");
    marker("dashboard._");
    marker("dev._");
    marker("editNode._");
    marker("editPages._");
    marker("export._");
    marker("exportPages._");
    marker("feedback._");
    marker("findPages._");
    marker("github._");
    marker("help._");
    marker("home._");
    marker("iaDiagram._");
    marker("importPage._");
    marker("invalidUrls._");
    marker("inventory._");
    marker("nav._");
    marker("notFound._");
    marker("problems._");
    marker("project._");
    marker("project.github._");
    marker("project.message._");
    marker("project.phase._");
    marker("project.repo._");
    marker("project.setup._");
    marker("save._");
    marker("search._");
    marker("settings._");
    marker("standalone._");
    marker("switch._");
    marker("template._");
    marker("ucdg._");
    marker("common.complete");
    marker("common.cra");
    marker("common.edited");
    marker("common.error");
    marker("common.pending");
    marker("common.new");
    marker("common.problems");
  }
  static \u0275fac = function DevToolsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DevToolsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DevToolsComponent, selectors: [["aida-dev-tools"]], decls: 6, vars: 7, consts: [[3, "innerHTML"], [3, "keys"]], template: function DevToolsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h2");
      \u0275\u0275text(1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "p", 0);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275element(5, "aida-doormats", 1);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 3, "dev._title"));
      \u0275\u0275advance(2);
      \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(4, 5, "dev.description"), \u0275\u0275sanitizeHtml);
      \u0275\u0275advance(2);
      \u0275\u0275property("keys", ctx.devDoormats);
    }
  }, dependencies: [DoormatsComponent, TranslatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DevToolsComponent, [{
    type: Component,
    args: [{ selector: "aida-dev-tools", imports: [TranslatePipe, DoormatsComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<h2>{{ 'dev._title' | translate }}</h2>
<p [innerHTML]="'dev.description' | translate"></p>
<aida-doormats [keys]="devDoormats" />
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DevToolsComponent, { className: "DevToolsComponent", filePath: "src/app/views/toolbox/dev-tools/dev-tools.component.ts", lineNumber: 14 });
})();

export {
  DevToolsComponent
};
//# sourceMappingURL=chunk-UIMTQTB2.js.map
