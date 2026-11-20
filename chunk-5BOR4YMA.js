import {
  AddPagesComponent
} from "./chunk-WLQ2U3VJ.js";
import "./chunk-C3LQMI76.js";
import "./chunk-COCO3T4H.js";
import "./chunk-XNRBXGSS.js";
import {
  ViewPagesComponent
} from "./chunk-K2WE26NF.js";
import "./chunk-VM6EFPSU.js";
import "./chunk-SVH34SV7.js";
import "./chunk-FUYFZI2X.js";
import "./chunk-LDIAUZSQ.js";
import "./chunk-DTHSMEJS.js";
import "./chunk-JPKN4657.js";
import {
  StyleCardService
} from "./chunk-KT52MSVV.js";
import "./chunk-3ZZN3K4H.js";
import "./chunk-DKWVS46C.js";
import "./chunk-UBDTR5JP.js";
import "./chunk-SIQ6XP67.js";
import "./chunk-2CL5S6F2.js";
import "./chunk-CCQ5ZKKC.js";
import "./chunk-RXFGLIM5.js";
import "./chunk-QN62CGZV.js";
import "./chunk-7HEF2XIP.js";
import "./chunk-75C7HDON.js";
import "./chunk-Q47GRJIM.js";
import "./chunk-BNXTMTI4.js";
import "./chunk-33T4MMID.js";
import "./chunk-Y6F3WZPE.js";
import "./chunk-XWAYHBXQ.js";
import "./chunk-2O6YMNX6.js";
import "./chunk-DKQHHEVD.js";
import "./chunk-WCHNT3WN.js";
import "./chunk-QRQ5OLUX.js";
import "./chunk-I4JBRU6I.js";
import "./chunk-CRHMMQLM.js";
import "./chunk-PBCOLC5Q.js";
import "./chunk-KXKV56UQ.js";
import "./chunk-CXFKKNCP.js";
import "./chunk-SP3AXD5N.js";
import "./chunk-6HPKKU65.js";
import "./chunk-AXH6GVPS.js";
import "./chunk-FKOWSWSA.js";
import "./chunk-JF73CZCV.js";
import "./chunk-6PPBJKXF.js";
import "./chunk-NJX644NS.js";
import "./chunk-WQJJFENA.js";
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
} from "./chunk-MB4XCYRB.js";
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
//# sourceMappingURL=chunk-5BOR4YMA.js.map
