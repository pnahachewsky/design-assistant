import {
  AddPagesComponent
} from "./chunk-B4GYQ53L.js";
import "./chunk-FDW76NB3.js";
import "./chunk-755TA7OS.js";
import "./chunk-PW5PVZSA.js";
import {
  ViewPagesComponent
} from "./chunk-OOGEICCL.js";
import "./chunk-WYQ23AZ5.js";
import "./chunk-CS3FDOZ7.js";
import "./chunk-UZHGJRMA.js";
import "./chunk-D5ZYA75M.js";
import "./chunk-TCAW2N6S.js";
import "./chunk-EVKCOUR7.js";
import {
  StyleCardService
} from "./chunk-NPF65JT5.js";
import "./chunk-QU6BEHZ6.js";
import "./chunk-P4EX4IKA.js";
import "./chunk-52JIFSNW.js";
import "./chunk-O7RCY4OG.js";
import "./chunk-DGUULVIY.js";
import "./chunk-JDU2U6EY.js";
import "./chunk-BIWQHC2E.js";
import "./chunk-YGWR53AZ.js";
import "./chunk-RJLSEEBC.js";
import "./chunk-E7DPTVA6.js";
import "./chunk-PDDIA37R.js";
import "./chunk-ECCRFHQ6.js";
import "./chunk-GJFJOQEH.js";
import "./chunk-5UERQTRM.js";
import "./chunk-MDCM2VZ6.js";
import "./chunk-GK5IV6NU.js";
import "./chunk-FQ7CFU3Q.js";
import "./chunk-PBCOLC5Q.js";
import "./chunk-P6IUXXGG.js";
import "./chunk-XGTQV6DJ.js";
import "./chunk-JYVBZVGS.js";
import "./chunk-DMOF7S63.js";
import "./chunk-5H5KFFPI.js";
import "./chunk-N4CI2CGK.js";
import "./chunk-F77WSQTV.js";
import "./chunk-IDFDYBL4.js";
import "./chunk-GPLISPVX.js";
import "./chunk-GGX2PN7I.js";
import "./chunk-FW3J5AX7.js";
import "./chunk-G47QJVEM.js";
import "./chunk-NR7HH4L4.js";
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
//# sourceMappingURL=chunk-5ILYYHAR.js.map
