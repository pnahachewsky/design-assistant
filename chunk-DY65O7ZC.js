import {
  ChangeDetectionStrategy,
  Component,
  TranslatePipe,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵsanitizeHtml,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-KRHY6Z2H.js";
import "./chunk-YCXP4XZS.js";

// src/app/views/utility/about/about.component.ts
var AboutComponent = class _AboutComponent {
  static \u0275fac = function AboutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AboutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutComponent, selectors: [["aida-about"]], decls: 5, vars: 6, consts: [["id", "wb-cont"], [3, "innerHTML"]], template: function AboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "h1", 0);
      \u0275\u0275text(1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(3, "div", 1);
      \u0275\u0275pipe(4, "translate");
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, "about._title"));
      \u0275\u0275advance(2);
      \u0275\u0275domProperty("innerHTML", \u0275\u0275pipeBind1(4, 4, "about.content"), \u0275\u0275sanitizeHtml);
    }
  }, dependencies: [TranslatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AboutComponent, [{
    type: Component,
    args: [{ selector: "aida-about", imports: [TranslatePipe], changeDetection: ChangeDetectionStrategy.OnPush, template: `<h1 id="wb-cont">{{ 'about._title' | translate }}</h1>
<div [innerHTML]="'about.content' | translate"></div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutComponent, { className: "AboutComponent", filePath: "src/app/views/utility/about/about.component.ts", lineNumber: 11 });
})();
export {
  AboutComponent
};
//# sourceMappingURL=chunk-DY65O7ZC.js.map
