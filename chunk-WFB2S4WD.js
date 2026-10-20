import {
  AddPagesComponent
} from "./chunk-ALJPLJQM.js";
import "./chunk-37MIQF4I.js";
import "./chunk-ZJEDW3IY.js";
import {
  ViewPagesComponent
} from "./chunk-J7PDF67E.js";
import "./chunk-D7CWNQRH.js";
import "./chunk-D4OE7SQK.js";
import "./chunk-F4UAJCXQ.js";
import "./chunk-7EZBCBFO.js";
import "./chunk-BD6KUTBP.js";
import "./chunk-X3PHMRYB.js";
import "./chunk-WPSSA7HV.js";
import "./chunk-B24NYOWZ.js";
import "./chunk-DWTRCFUE.js";
import "./chunk-VUVEB27N.js";
import "./chunk-27PLKJAL.js";
import "./chunk-IAEHVNRB.js";
import "./chunk-JUMOWLCN.js";
import "./chunk-XIMGJIUL.js";
import "./chunk-5F7XDNYM.js";
import "./chunk-WLUUE74Y.js";
import "./chunk-SFFTHMKD.js";
import "./chunk-HIIG3TAV.js";
import "./chunk-2VUKUNZ3.js";
import "./chunk-D57SAGZH.js";
import "./chunk-PM4ZAKXV.js";
import "./chunk-Y6P4PL7N.js";
import "./chunk-AU75ZWE3.js";
import "./chunk-EM76WITV.js";
import "./chunk-2N7OESPV.js";
import "./chunk-FO2K6X5T.js";
import "./chunk-WMXZG7VZ.js";
import "./chunk-ICFR3RAH.js";
import "./chunk-53YNRXA3.js";
import "./chunk-3SPBARR4.js";
import "./chunk-AGPMTYRP.js";
import "./chunk-DMOF7S63.js";
import "./chunk-MDI4WJGA.js";
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
  static \u0275fac = function AddOrViewPagesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddOrViewPagesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddOrViewPagesComponent, selectors: [["aida-add-or-view-pages"]], decls: 12, vars: 9, consts: [["id", "wb-cont"], [1, "flex", "flex-column", "gap-3", "mb-2"], [1, "surface-card", "border-round-lg", "shadow-2", "p-4", "w-full", "min-w-min"]], template: function AddOrViewPagesComponent_Template(rf, ctx) {
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
      \u0275\u0275elementStart(7, "div", 1)(8, "div", 2);
      \u0275\u0275element(9, "aida-add-pages");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 2);
      \u0275\u0275element(11, "aida-view-pages");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 3, "addPages._title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(5, 5, "addPages.description"), "", \u0275\u0275pipeBind1(6, 7, "addPages.description2"));
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
  <div class="surface-card border-round-lg shadow-2 p-4 w-full min-w-min">
    <aida-add-pages />
  </div>
  <!--Row 2: View pages-->
  <div class="surface-card border-round-lg shadow-2 p-4 w-full min-w-min">
    <aida-view-pages />
  </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddOrViewPagesComponent, { className: "AddOrViewPagesComponent", filePath: "src/app/views/project/add-pages/add-pages.component.ts", lineNumber: 14 });
})();
export {
  AddOrViewPagesComponent
};
//# sourceMappingURL=chunk-WFB2S4WD.js.map
