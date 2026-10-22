import {
  UserSettingsService
} from "./chunk-7YP54JN5.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-KRHY6Z2H.js";

// src/app/services/style-treenode.service.ts
var StyleTreeNodeService = class _StyleTreeNodeService {
  theme = inject(UserSettingsService);
  //TreeNode styles
  updateNodeStyles(nodes, level = 0, applyStatusColors = true) {
    if (!nodes)
      return;
    for (const node of nodes) {
      const borderStyle = "border-2 border-primary border-round shadow-2";
      let bgStyle;
      if (node.data?.status.inScope && node.data?.isNavChild) {
        bgStyle = this.contextStyles["navChild"];
      } else if (!node.data?.status.inScope && node.data?.isNavChild) {
        bgStyle = this.contextStyles["navChildTemp"];
      } else if (!node.data?.status.inScope || node.data?.isContainer) {
        bgStyle = this.contextStyles["template"];
      } else if (node.data?.status.isNew && applyStatusColors) {
        bgStyle = this.contextStyles["new"];
      } else if (node.data?.status.isROT && applyStatusColors) {
        bgStyle = this.contextStyles["rot"];
      } else if (node.data?.status.isMoved && applyStatusColors) {
        bgStyle = this.contextStyles["move"];
      } else {
        bgStyle = this.bgColors[level % this.bgColors.length];
      }
      node.styleClass = `${borderStyle} ${bgStyle}`;
      if (node.children?.length) {
        const nextLevel = !node.data?.status.inScope || node.data?.status.isContainer ? level : level + 1;
        this.updateNodeStyles(node.children, nextLevel, applyStatusColors);
      }
    }
  }
  //Set background color
  get bgColors() {
    return this.theme.darkMode() ? this.bgColorsDark : this.bgColorsLight;
  }
  bgColorsLight = [
    "surface-0 hover:bg-primary-50",
    "bg-primary-50 hover:bg-primary-100",
    "bg-primary-100 hover:bg-primary-200",
    "bg-primary-200 hover:bg-primary-300",
    "bg-primary-300 hover:bg-primary-400",
    "bg-primary-400 hover:bg-primary-500",
    "bg-primary-500 hover:bg-primary-600 text-white",
    "bg-primary-600 hover:bg-primary-700 text-white",
    "bg-primary-700 hover:bg-primary-800 text-white",
    "bg-primary-800 hover:bg-primary-900 text-white"
  ];
  bgColorsDark = [
    "surface-0 hover:bg-primary-900",
    "bg-primary-900 hover:bg-primary-800",
    "bg-primary-800 hover:bg-primary-700",
    "bg-primary-700 hover:bg-primary-600",
    "bg-primary-600 hover:bg-primary-500",
    "bg-primary-500 hover:bg-primary-400",
    "bg-primary-400 hover:bg-primary-300 text-black",
    "bg-primary-300 hover:bg-primary-200 text-black",
    "bg-primary-200 hover:bg-primary-100 text-black",
    "bg-primary-100 hover:bg-primary-50 text-black"
  ];
  get contextStyles() {
    return this.theme.darkMode() ? this.contextStylesDark : this.contextStylesLight;
  }
  contextStylesLight = {
    new: "bg-green-200 hover:bg-green-300 border-dashed text-black",
    rot: "bg-red-200 hover:bg-red-300 border-dashed text-black",
    move: "bg-yellow-200 hover:bg-yellow-300 border-dashed text-black",
    navChild: "bg-blue-200 hover:bg-blue-300 border-dashed text-black",
    navChildTemp: "surface-200 hover:surface-300 border-dashed text-black",
    template: "surface-200 hover:surface-300 text-black"
  };
  contextStylesDark = {
    new: "bg-green-700 hover:bg-green-600 border-dashed text-white",
    rot: "bg-red-700 hover:bg-red-600 border-dashed text-white",
    move: "bg-yellow-700 hover:bg-yellow-600 border-dashed text-black",
    navChild: "bg-blue-700 hover:bg-blue-600 border-dashed text-white",
    navChildTemp: "surface-200 hover:surface-300 border-dashed text-white",
    template: "surface-200 hover:surface-300 text-white"
  };
  static \u0275fac = function StyleTreeNodeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StyleTreeNodeService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StyleTreeNodeService, factory: _StyleTreeNodeService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StyleTreeNodeService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  StyleTreeNodeService
};
//# sourceMappingURL=chunk-OIQTDMBR.js.map
