import {
  Divider,
  DividerModule
} from "./chunk-ATVW4L4U.js";
import {
  ProjectStateService
} from "./chunk-ZQDXUGCX.js";
import {
  Button,
  ButtonModule
} from "./chunk-QN4TTD5X.js";
import {
  MessageService
} from "./chunk-7YP54JN5.js";
import {
  ChangeDetectionStrategy,
  Component,
  TranslateService,
  computed,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView
} from "./chunk-KRHY6Z2H.js";
import {
  __async
} from "./chunk-YCXP4XZS.js";

// src/app/components/save-button/save-button.component.ts
function SaveButtonComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "p-button", 1);
    \u0275\u0275listener("onClick", function SaveButtonComponent_Conditional_0_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "p-divider", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.saveButtonConfig().icon)("label", ctx_r1.saveButtonConfig().label)("severity", ctx_r1.saveButtonConfig().severity);
  }
}
var SaveButtonComponent = class _SaveButtonComponent {
  translate = inject(TranslateService);
  projectState = inject(ProjectStateService);
  messageService = inject(MessageService);
  // Get save status from project state
  saveStatus = this.projectState.getSaveStatus;
  // Show save button when there are unsaved changes
  showSaveButton = computed(() => {
    const status = this.saveStatus();
    return status !== "saved";
  }, ...ngDevMode ? [{ debugName: "showSaveButton" }] : (
    /* istanbul ignore next */
    []
  ));
  // Configure save button appearance based on status
  saveButtonConfig = computed(() => {
    const status = this.saveStatus();
    if (status === "error") {
      return {
        label: this.translate.instant("save.error"),
        icon: "pi pi-times-circle",
        severity: "danger"
      };
    }
    if (status === "saving") {
      return {
        label: this.translate.instant("save.saving"),
        icon: "pi pi-spin pi-spinner",
        severity: "info"
      };
    }
    if (status === "unsaved") {
      return {
        label: this.translate.instant("save.unsaved"),
        icon: "pi pi-exclamation-triangle",
        severity: "danger"
      };
    }
    return {
      label: this.translate.instant("save.saved"),
      icon: "pi pi-check",
      severity: "success"
    };
  }, ...ngDevMode ? [{ debugName: "saveButtonConfig" }] : (
    /* istanbul ignore next */
    []
  ));
  // Manual save
  save() {
    return __async(this, null, function* () {
      const success = yield this.projectState.saveProject();
      if (success) {
        this.messageService.add({
          severity: "success",
          summary: this.translate.instant("save.toast.success"),
          detail: this.translate.instant("save.toast.success.details")
        });
      } else {
        this.messageService.add({
          severity: "error",
          summary: this.translate.instant("save.toast.fail"),
          detail: this.translate.instant("save.toast.fail.details"),
          sticky: true
        });
      }
    });
  }
  static \u0275fac = function SaveButtonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SaveButtonComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SaveButtonComponent, selectors: [["aida-save-button"]], decls: 1, vars: 1, consts: [[1, "flex", "flex-row", "align-items-center", "gap-2", "lg:gap-3"], ["rounded", "", "styleClass", "white-space-nowrap -mr-2", "text", "", 3, "onClick", "icon", "label", "severity"], ["layout", "vertical", 1, "mx-0"]], template: function SaveButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, SaveButtonComponent_Conditional_0_Template, 3, 3, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.showSaveButton() ? 0 : -1);
    }
  }, dependencies: [ButtonModule, Button, DividerModule, Divider], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SaveButtonComponent, [{
    type: Component,
    args: [{ selector: "aida-save-button", imports: [ButtonModule, DividerModule], changeDetection: ChangeDetectionStrategy.OnPush, template: '@if (showSaveButton()) {\n  <div class="flex flex-row align-items-center gap-2 lg:gap-3">\n    <p-button [icon]="saveButtonConfig().icon" [label]="saveButtonConfig().label" [severity]="saveButtonConfig().severity" (onClick)="save()" rounded styleClass="white-space-nowrap -mr-2" text />\n    <p-divider class="mx-0" layout="vertical" />\n  </div>\n}\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SaveButtonComponent, { className: "SaveButtonComponent", filePath: "src/app/components/save-button/save-button.component.ts", lineNumber: 17 });
})();

export {
  SaveButtonComponent
};
//# sourceMappingURL=chunk-XGCJZUCI.js.map
