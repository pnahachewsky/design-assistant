import {
  Directive,
  ElementRef,
  Input,
  Renderer2,
  effect,
  inject,
  input,
  setClassMetadata,
  ɵɵdefineDirective
} from "./chunk-KRHY6Z2H.js";

// src/app/common/tooltip.directive.ts
var TooltipDirective = class _TooltipDirective {
  el = inject(ElementRef);
  renderer = inject(Renderer2);
  aidaTooltip = input.required(...ngDevMode ? [{ debugName: "aidaTooltip" }] : (
    /* istanbul ignore next */
    []
  ));
  aidaTooltipPosition = input(...ngDevMode ? [void 0, { debugName: "aidaTooltipPosition" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    effect(() => {
      const value = this.aidaTooltip();
      if (value) {
        this.renderer.setAttribute(this.el.nativeElement, "data-tooltip", value);
      } else {
        this.renderer.removeAttribute(this.el.nativeElement, "data-tooltip");
      }
    });
    effect(() => {
      const pos = this.aidaTooltipPosition();
      this.renderer.setAttribute(this.el.nativeElement, "data-tooltip-pos", pos ?? "top");
    });
  }
  static \u0275fac = function TooltipDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TooltipDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _TooltipDirective, selectors: [["", "aidaTooltip", ""]], inputs: { aidaTooltip: [1, "aidaTooltip"], aidaTooltipPosition: [1, "aidaTooltipPosition"] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipDirective, [{
    type: Directive,
    args: [{
      selector: "[aidaTooltip]",
      standalone: true
    }]
  }], () => [], { aidaTooltip: [{ type: Input, args: [{ isSignal: true, alias: "aidaTooltip", required: true }] }], aidaTooltipPosition: [{ type: Input, args: [{ isSignal: true, alias: "aidaTooltipPosition", required: false }] }] });
})();

export {
  TooltipDirective
};
//# sourceMappingURL=chunk-YEJSFSQN.js.map
