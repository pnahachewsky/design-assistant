import {
  Menu,
  MenuModule
} from "./chunk-PL2PAX7Y.js";
import {
  AidaLinks
} from "./chunk-JNZO32C5.js";
import {
  ProjectCacheService
} from "./chunk-VVTAMTDS.js";
import {
  ProjectStateService
} from "./chunk-YI6R4JH4.js";
import {
  Button,
  ButtonModule
} from "./chunk-QN4TTD5X.js";
import {
  Router
} from "./chunk-7YP54JN5.js";
import {
  ChangeDetectionStrategy,
  Component,
  TranslatePipe,
  TranslateService,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-KRHY6Z2H.js";

// src/app/components/export-project/export-project.component.ts
function ExportProjectComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 4);
    \u0275\u0275element(1, "i");
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(item_r3.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, item_r3.label));
  }
}
var ExportProjectComponent = class _ExportProjectComponent {
  translate = inject(TranslateService);
  projectState = inject(ProjectStateService);
  projectCache = inject(ProjectCacheService);
  router = inject(Router);
  get exportItems() {
    return [
      {
        label: this.translate.instant("export.github"),
        icon: "pi pi-github",
        command: () => {
          this.projectState.getProject().repoType = "github";
          this.projectCache.checkLocalStatus();
          this.router.navigate([AidaLinks.ProjectExport]);
        }
      },
      {
        label: this.translate.instant("export.html"),
        icon: "pi pi-link",
        command: () => {
          this.projectState.getProject().repoType = "local";
          this.projectCache.checkLocalStatus();
          this.router.navigate([AidaLinks.ProjectExport]);
        }
      },
      {
        separator: true
      },
      {
        label: this.translate.instant("export.csv.inventory"),
        icon: "pi pi-list-check",
        command: () => {
          this.projectState.exportTreeAsCsv();
        },
        disabled: false
      },
      {
        label: this.translate.instant("export.csv.tree"),
        icon: "pi pi-align-right",
        command: () => {
          this.projectState.exportAsTreeCsv();
        },
        disabled: false
      },
      {
        separator: true
      },
      {
        label: this.translate.instant("export.json"),
        icon: "pi pi-code",
        command: () => {
          this.projectState.exportProjectAsJson();
        },
        disabled: false
      }
    ];
  }
  static \u0275fac = function ExportProjectComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExportProjectComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExportProjectComponent, selectors: [["aida-export-project"]], decls: 6, vars: 5, consts: [["menu", ""], ["item", ""], ["icon", "pi pi-angle-down", "iconClass", "flex justify-content-end", "iconPos", "right", "outlined", "", "styleClass", "secondary-outline w-full white-space-nowrap", 3, "onClick", "label"], ["appendTo", "body", 3, "model", "popup"], [1, "p-menu-item-link"]], template: function ExportProjectComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "p-button", 2);
      \u0275\u0275pipe(1, "translate");
      \u0275\u0275listener("onClick", function ExportProjectComponent_Template_p_button_onClick_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        const menu_r2 = \u0275\u0275reference(3);
        return \u0275\u0275resetView(menu_r2.toggle($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "p-menu", 3, 0);
      \u0275\u0275template(4, ExportProjectComponent_ng_template_4_Template, 5, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 3, "export._title"));
      \u0275\u0275advance(2);
      \u0275\u0275property("model", ctx.exportItems)("popup", true);
    }
  }, dependencies: [ButtonModule, Button, MenuModule, Menu, TranslatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExportProjectComponent, [{
    type: Component,
    args: [{ selector: "aida-export-project", imports: [TranslatePipe, ButtonModule, MenuModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<p-button
  [label]="'export._title' | translate"
  (onClick)="menu.toggle($event)"
  icon="pi pi-angle-down"
  iconClass="flex justify-content-end"
  iconPos="right"
  outlined
  styleClass="secondary-outline w-full white-space-nowrap"
/>
<p-menu [model]="exportItems" [popup]="true" #menu appendTo="body">
  <ng-template #item let-item>
    <a class="p-menu-item-link">
      <i [class]="item.icon"></i>
      <span>{{ item.label | translate }}</span>
    </a>
  </ng-template>
</p-menu>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExportProjectComponent, { className: "ExportProjectComponent", filePath: "src/app/components/export-project/export-project.component.ts", lineNumber: 21 });
})();

export {
  ExportProjectComponent
};
//# sourceMappingURL=chunk-2SQCNJKD.js.map
