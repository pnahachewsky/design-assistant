import {
  AddPagesComponent
} from "./chunk-UBYXGKIN.js";
import "./chunk-OE6OK7VB.js";
import "./chunk-22EMPEFJ.js";
import "./chunk-4ECWLYHO.js";
import {
  ViewPagesComponent
} from "./chunk-DMTGAXQH.js";
import "./chunk-CV3SJEFG.js";
import "./chunk-NVXT4DQY.js";
import "./chunk-ULNRCSK5.js";
import "./chunk-NR63S3BW.js";
import "./chunk-MA272S66.js";
import "./chunk-GGIC4QUJ.js";
import "./chunk-4SEU7J4Z.js";
import "./chunk-OIQTDMBR.js";
import {
  StyleCardService
} from "./chunk-XN4WNFGN.js";
import "./chunk-YO76CRIT.js";
import "./chunk-P3TRDY63.js";
import "./chunk-NQRO2LC7.js";
import "./chunk-5QMHUOJQ.js";
import "./chunk-OFBI5QRC.js";
import "./chunk-V57K5H6G.js";
import "./chunk-FLJXSAP4.js";
import "./chunk-7DITWZ3V.js";
import "./chunk-Y576ZK6L.js";
import "./chunk-2GRRCX3P.js";
import "./chunk-FQDO2XGS.js";
import "./chunk-P4REA7J6.js";
import "./chunk-JNZO32C5.js";
import "./chunk-MUCV4YIS.js";
import "./chunk-MKX7R2UM.js";
import "./chunk-D57SAGZH.js";
import "./chunk-ZQDXUGCX.js";
import "./chunk-RB7Q4TO5.js";
import "./chunk-G6GBOHXB.js";
import "./chunk-A3C3MBAO.js";
import "./chunk-NJENQTX6.js";
import "./chunk-Y3MLV2IT.js";
import "./chunk-BHVFX6OF.js";
import "./chunk-JR3PODJQ.js";
import "./chunk-QN4TTD5X.js";
import "./chunk-DMOF7S63.js";
import "./chunk-7YP54JN5.js";
import {
  ChangeDetectionStrategy,
  Component,
  TranslatePipe,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-KRHY6Z2H.js";
import "./chunk-DKTF6WIM.js";
import "./chunk-G55EJPVD.js";
import "./chunk-7XEOGBZ2.js";
import "./chunk-3RPP55HA.js";
import "./chunk-DBOW7BSZ.js";
import "./chunk-XMWDIV4O.js";
import "./chunk-YCXP4XZS.js";

// src/app/views/project/add-pages/add-pages.component.ts
var AddOrViewPagesComponent = class _AddOrViewPagesComponent {
  styleCardService = inject(StyleCardService);
  static \u0275fac = function AddOrViewPagesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddOrViewPagesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddOrViewPagesComponent, selectors: [["aida-add-or-view-pages"]], decls: 12, vars: 13, consts: [["id", "wb-cont"], [1, "flex", "flex-column", "gap-3", "mb-2"]], template: function AddOrViewPagesComponent_Template(rf, ctx) {
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
      \u0275\u0275elementStart(7, "div", 1)(8, "div");
      \u0275\u0275element(9, "aida-add-pages");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div");
      \u0275\u0275element(11, "aida-view-pages");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 7, "addPages._title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(5, 9, "addPages.description"), "", \u0275\u0275pipeBind1(6, 11, "addPages.description2"));
      \u0275\u0275advance(4);
      \u0275\u0275classMap(ctx.styleCardService.cardStyles());
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.styleCardService.cardStyles());
    }
  }, dependencies: [AddPagesComponent, ViewPagesComponent, TranslatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddOrViewPagesComponent, [{
    type: Component,
    args: [{ selector: "aida-add-or-view-pages", imports: [TranslatePipe, AddPagesComponent, ViewPagesComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<h1 id="wb-cont">{{ 'addPages._title' | translate }}</h1>
<p>{{ 'addPages.description' | translate }}{{ 'addPages.description2' | translate }}</p>

<!--Content-->
<div class="flex flex-column gap-3 mb-2">
  <!--Row 1: Add pages-->
  <div [class]="styleCardService.cardStyles()">
    <aida-add-pages />
  </div>
  <!--Row 2: View pages-->
  <div [class]="styleCardService.cardStyles()">
    <aida-view-pages />
  </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddOrViewPagesComponent, { className: "AddOrViewPagesComponent", filePath: "src/app/views/project/add-pages/add-pages.component.ts", lineNumber: 16 });
})();
export {
  AddOrViewPagesComponent
};
//# sourceMappingURL=chunk-IKBKUJ7S.js.map
