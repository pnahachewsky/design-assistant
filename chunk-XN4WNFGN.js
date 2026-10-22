import {
  UserSettingsService
} from "./chunk-7YP54JN5.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-KRHY6Z2H.js";

// src/app/services/style-card.service.ts
var StyleCardService = class _StyleCardService {
  settingsService = inject(UserSettingsService);
  /** Naming convention: f = flat, i = interactive, a = active, i = light mode, d = dark mode */
  /** Border radius (flat, interactive & active) */
  fiaClasses = signal("border-round ", ...ngDevMode ? [{ debugName: "fiaClasses" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Border width, border colour and bg colour (flat & interactive) */
  fiClasses = signal("border-1 ", ...ngDevMode ? [{ debugName: "fiClasses" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Shadow, hover shadow, hover border colour, cursor (interactive, active) */
  iaClasses = signal("shadow-1 hover:shadow-3 hover:border-primary cursor-pointer ", ...ngDevMode ? [{ debugName: "iaClasses" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Light mode: Hover bg colour (interactive) */
  ilClasses = signal("hover:surface-50 ", ...ngDevMode ? [{ debugName: "ilClasses" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Dark mode: Hover bg colour (interactive) */
  idClasses = signal("hover:surface-50 ", ...ngDevMode ? [{ debugName: "idClasses" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Light mode: Border width, border colour, bg colour, and hover bg colour (active) */
  alClasses = signal("border-2 border-primary bg-primary-50 hover:bg-primary-100 ", ...ngDevMode ? [{ debugName: "alClasses" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Dark mode: Border width, border colour, bg colour, and hover bg colour (active) */
  adClasses = signal("border-2 border-primary bg-primary-900 hover:bg-primary-800 ", ...ngDevMode ? [{ debugName: "adClasses" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Custom or default background for non-active cards */
  bgClass(customBG) {
    return customBG ?? "surface-card";
  }
  /** Custom or default border colour for non-active cards */
  borderClass(customBorder) {
    return customBorder ?? "surface-border";
  }
  /** Parameters are set to false by default so static cards can be displayed without adding anything
   *
   ** interactive - set to true for clickable cards
   ** active - set to true for currently active card (for example, phase, active project)
   ** noPadding - set to true if you need to use custom padding for your card
   ** customBG - set to a background class if you need to override the default background colour (does not affect hover colour)
   ** customBorder - set to a border colour class if you need to override the default border colour (does not affect active or hover colour)
   */
  cardStyles(interactive = false, active = false, noPadding = false, customBG, customBorder) {
    const isDark = this.settingsService.darkMode();
    const padding = noPadding ? "w-full min-w-min" : "p-4 w-full min-w-min";
    if (active)
      return this.fiaClasses() + this.iaClasses() + (isDark ? this.adClasses() : this.alClasses()) + padding;
    if (interactive)
      return this.fiaClasses() + this.fiClasses() + this.iaClasses() + this.bgClass(customBG) + " " + this.borderClass(customBorder) + " " + (isDark ? this.idClasses() : this.ilClasses()) + padding;
    else
      return this.fiaClasses() + this.fiClasses() + this.bgClass(customBG) + " " + this.borderClass(customBorder) + " " + padding;
  }
  static \u0275fac = function StyleCardService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StyleCardService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StyleCardService, factory: _StyleCardService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StyleCardService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  StyleCardService
};
//# sourceMappingURL=chunk-XN4WNFGN.js.map
