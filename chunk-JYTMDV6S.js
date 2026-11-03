import {
  AddPagesComponent
} from "./chunk-OHZTZING.js";
import "./chunk-2IN32OQ7.js";
import "./chunk-7QAHFUHB.js";
import "./chunk-5XIWUB3H.js";
import {
  ViewPagesComponent
} from "./chunk-7REJT23M.js";
import "./chunk-VD4V5NQK.js";
import "./chunk-XQ736PSA.js";
import "./chunk-O2AQBM3S.js";
import "./chunk-2YHERNDU.js";
import "./chunk-PHZIZXZX.js";
import "./chunk-H4BAT3BV.js";
import {
  StyleCardService
} from "./chunk-SQNWQN2Q.js";
import "./chunk-6D7JYA3I.js";
import "./chunk-X6534DBD.js";
import "./chunk-2EOA2WBC.js";
import "./chunk-DANQZASZ.js";
import "./chunk-QXFFSRVT.js";
import "./chunk-YE3CFNOD.js";
import "./chunk-QLUR5BNK.js";
import "./chunk-443LQ3PC.js";
import "./chunk-XXWXX2BK.js";
import "./chunk-CNL4NKIR.js";
import "./chunk-KIOV6LKM.js";
import "./chunk-B7HGCLXR.js";
import "./chunk-S4R55H3T.js";
import "./chunk-QYFDJUBY.js";
import "./chunk-MDCM2VZ6.js";
import "./chunk-FVLB2QBC.js";
import "./chunk-EAKGS57T.js";
import "./chunk-D57SAGZH.js";
import "./chunk-ZAGVX6U6.js";
import "./chunk-R4PZ343Q.js";
import "./chunk-QUYV5LPL.js";
import "./chunk-EE32I7GB.js";
import "./chunk-QB4L644X.js";
import "./chunk-UDJGVSF2.js";
import "./chunk-TADFIBW3.js";
import "./chunk-4MT26M6X.js";
import "./chunk-77PLZMEA.js";
import "./chunk-CLIVXUA2.js";
import "./chunk-DMOF7S63.js";
import "./chunk-5A4MZAOI.js";
import "./chunk-34V6ZG4B.js";
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
//# sourceMappingURL=chunk-JYTMDV6S.js.map
