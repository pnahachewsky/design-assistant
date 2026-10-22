import {
  AidaLinks
} from "./chunk-JNZO32C5.js";
import {
  Router
} from "./chunk-7YP54JN5.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-KRHY6Z2H.js";

// src/app/views/tasks/ia-diagram/ia-diagram.service.ts
var IaDiagramService = class _IaDiagramService {
  router = inject(Router);
  // IA Diagram signals
  selectedTree = signal("full", ...ngDevMode ? [{ debugName: "selectedTree" }] : (
    /* istanbul ignore next */
    []
  ));
  collapsedNodes = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "collapsedNodes" }] : (
    /* istanbul ignore next */
    []
  ));
  hiddenNodes = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "hiddenNodes" }] : (
    /* istanbul ignore next */
    []
  ));
  navNodes = signal(/* @__PURE__ */ new Map(), ...ngDevMode ? [{ debugName: "navNodes" }] : (
    /* istanbul ignore next */
    []
  ));
  resetTree() {
    this.selectedTree.set("full");
    this.collapsedNodes.set(/* @__PURE__ */ new Set());
    this.hiddenNodes.set(/* @__PURE__ */ new Set());
    this.navNodes.set(/* @__PURE__ */ new Map());
  }
  /** Stores return link for IA diagram (used by route guard) */
  storeReturnUrl() {
    const currentUrl = this.router.url.replace(AidaLinks.NewProject, AidaLinks.ProjectSettings);
    if (currentUrl.startsWith(AidaLinks.ProjectDiagram) || currentUrl === AidaLinks.Home) {
      return;
    }
    sessionStorage.setItem("ia_diagram_return_url", currentUrl);
  }
  /** Returns user to previous page when closing the IA diagram */
  closeDiagram() {
    const prevUrl = sessionStorage.getItem("ia_diagram_return_url") || AidaLinks.Home;
    sessionStorage.removeItem("ia_diagram_return_url");
    this.router.navigateByUrl(prevUrl);
  }
  static \u0275fac = function IaDiagramService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IaDiagramService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _IaDiagramService, factory: _IaDiagramService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IaDiagramService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  IaDiagramService
};
//# sourceMappingURL=chunk-4SEU7J4Z.js.map
