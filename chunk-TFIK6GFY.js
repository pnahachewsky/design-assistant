import {
  AI_FREE_MODELS
} from "./chunk-DWQ5T5PK.js";
import {
  Injectable,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-KRHY6Z2H.js";

// src/app/views/tasks/compare/compare.service.ts
var CompareService = class _CompareService {
  // HTML content cache
  originalHtml = signal(void 0, ...ngDevMode ? [{ debugName: "originalHtml" }] : (
    /* istanbul ignore next */
    []
  ));
  modifiedHtml = signal(void 0, ...ngDevMode ? [{ debugName: "modifiedHtml" }] : (
    /* istanbul ignore next */
    []
  ));
  // User selections & defaults: version selection
  selectedPage = signal("", ...ngDevMode ? [{ debugName: "selectedPage" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedBefore = signal("live", ...ngDevMode ? [{ debugName: "selectedBefore" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedAfter = signal("protoGH", ...ngDevMode ? [{ debugName: "selectedAfter" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedSource = signal("live", ...ngDevMode ? [{ debugName: "selectedSource" }] : (
    /* istanbul ignore next */
    []
  ));
  // User selections & defaults: view selection
  selectedView = signal("diff", ...ngDevMode ? [{ debugName: "selectedView" }] : (
    /* istanbul ignore next */
    []
  ));
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : (
    /* istanbul ignore next */
    []
  ));
  loadingBefore = signal(false, ...ngDevMode ? [{ debugName: "loadingBefore" }] : (
    /* istanbul ignore next */
    []
  ));
  loadingAfter = signal(false, ...ngDevMode ? [{ debugName: "loadingAfter" }] : (
    /* istanbul ignore next */
    []
  ));
  loadingSource = signal(false, ...ngDevMode ? [{ debugName: "loadingSource" }] : (
    /* istanbul ignore next */
    []
  ));
  loadingAll = signal(false, ...ngDevMode ? [{ debugName: "loadingAll" }] : (
    /* istanbul ignore next */
    []
  ));
  hasChanges = signal(false, ...ngDevMode ? [{ debugName: "hasChanges" }] : (
    /* istanbul ignore next */
    []
  ));
  aiDrawerVisible = signal(false, ...ngDevMode ? [{ debugName: "aiDrawerVisible" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedTask = signal("default", ...ngDevMode ? [{ debugName: "selectedTask" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedPrompt = signal("Tense", ...ngDevMode ? [{ debugName: "selectedPrompt" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedTense = signal("present", ...ngDevMode ? [{ debugName: "selectedTense" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedModel = signal(AI_FREE_MODELS[0], ...ngDevMode ? [{ debugName: "selectedModel" }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function CompareService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CompareService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CompareService, factory: _CompareService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompareService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  CompareService
};
//# sourceMappingURL=chunk-TFIK6GFY.js.map
