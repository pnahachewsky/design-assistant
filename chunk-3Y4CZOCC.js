import {
  AidaLinks
} from "./chunk-JNZO32C5.js";
import {
  Button,
  ButtonModule
} from "./chunk-QN4TTD5X.js";
import {
  RouterLink
} from "./chunk-7YP54JN5.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  TranslatePipe,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-KRHY6Z2H.js";

// src/app/components/add-pages/add-pages-link/add-pages-link.component.ts
function AddPagesLinkComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "inventory.emptyMessage"));
  }
}
function AddPagesLinkComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275text(1, "note_add");
    \u0275\u0275elementEnd();
  }
}
var AddPagesLinkComponent = class _AddPagesLinkComponent {
  AidaLinks = AidaLinks;
  buttonOnly = input(false, ...ngDevMode ? [{ debugName: "buttonOnly" }] : (
    /* istanbul ignore next */
    []
  ));
  noIcon = input(false, ...ngDevMode ? [{ debugName: "noIcon" }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function AddPagesLinkComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddPagesLinkComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddPagesLinkComponent, selectors: [["aida-add-pages-link"]], inputs: { buttonOnly: [1, "buttonOnly"], noIcon: [1, "noIcon"] }, decls: 7, vars: 7, consts: [[1, "flex", "flex-column", "gap-2"], ["fluid", "", "styleClass", "white-space-nowrap", 3, "routerLink", "size"], [1, "material-icons-outlined", "text-lg"]], template: function AddPagesLinkComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, AddPagesLinkComponent_Conditional_1_Template, 3, 3, "p");
      \u0275\u0275elementStart(2, "p-button", 1);
      \u0275\u0275conditionalCreate(3, AddPagesLinkComponent_Conditional_3_Template, 2, 0, "span", 2);
      \u0275\u0275elementStart(4, "span");
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.buttonOnly() ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", ctx.AidaLinks.ProjectAdd)("size", ctx.buttonOnly() ? "small" : void 0);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.noIcon() ? 3 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 5, "addPages.addToProjectButton"));
    }
  }, dependencies: [RouterLink, ButtonModule, Button, TranslatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddPagesLinkComponent, [{
    type: Component,
    args: [{ selector: "aida-add-pages-link", imports: [RouterLink, TranslatePipe, ButtonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="flex flex-column gap-2">
  @if (!buttonOnly()) {
    <p>{{ 'inventory.emptyMessage' | translate }}</p>
  }
  <p-button [routerLink]="AidaLinks.ProjectAdd" [size]="buttonOnly() ? 'small' : undefined" fluid styleClass="white-space-nowrap">
    @if (!noIcon()) {
      <span class="material-icons-outlined text-lg">note_add</span>
    }
    <span>{{ 'addPages.addToProjectButton' | translate }}</span>
  </p-button>
</div>
` }]
  }], null, { buttonOnly: [{ type: Input, args: [{ isSignal: true, alias: "buttonOnly", required: false }] }], noIcon: [{ type: Input, args: [{ isSignal: true, alias: "noIcon", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddPagesLinkComponent, { className: "AddPagesLinkComponent", filePath: "src/app/components/add-pages/add-pages-link/add-pages-link.component.ts", lineNumber: 16 });
})();

export {
  AddPagesLinkComponent
};
//# sourceMappingURL=chunk-3Y4CZOCC.js.map
