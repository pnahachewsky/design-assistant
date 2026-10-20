import {
  Drawer,
  DrawerModule
} from "./chunk-D7CWNQRH.js";
import {
  IaDiagramService
} from "./chunk-WPSSA7HV.js";
import {
  ProjectSettingsComponent
} from "./chunk-DWTRCFUE.js";
import {
  Table,
  TableModule
} from "./chunk-27PLKJAL.js";
import {
  ProjectCacheService
} from "./chunk-2VUKUNZ3.js";
import {
  AidaLinks
} from "./chunk-PM4ZAKXV.js";
import {
  ProjectStateService
} from "./chunk-Y6P4PL7N.js";
import {
  Button,
  ButtonModule,
  Tooltip,
  TooltipModule
} from "./chunk-AGPMTYRP.js";
import {
  RouterLink
} from "./chunk-MDI4WJGA.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  TranslatePipe,
  computed,
  inject,
  input,
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-KRHY6Z2H.js";
import {
  __async
} from "./chunk-YCXP4XZS.js";

// src/app/components/view-pages/view-pages.component.ts
var _forTrack0 = ($index, $item) => $item.url;
function ViewPagesComponent_Conditional_13_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "p-button", 21);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275listener("onClick", function ViewPagesComponent_Conditional_13_ng_template_1_Template_p_button_onClick_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.copyToClipboard("en"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementStart(9, "p-button", 21);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("onClick", function ViewPagesComponent_Conditional_13_ng_template_1_Template_p_button_onClick_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.copyToClipboard("fr"));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "common.language.english"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(5, 6, "common.copyEnglish"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 8, "common.language.french"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(10, 10, "common.copyFrench"));
  }
}
function ViewPagesComponent_Conditional_13_ng_template_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const pair_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", pair_r3.en.url, " ");
  }
}
function ViewPagesComponent_Conditional_13_ng_template_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pair_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", pair_r3.en.url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(pair_r3.en.label);
  }
}
function ViewPagesComponent_Conditional_13_ng_template_3_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const pair_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", pair_r3.fr.url, " ");
  }
}
function ViewPagesComponent_Conditional_13_ng_template_3_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pair_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", pair_r3.fr.url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(pair_r3.fr.label);
  }
}
function ViewPagesComponent_Conditional_13_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275conditionalCreate(2, ViewPagesComponent_Conditional_13_ng_template_3_Conditional_2_Template, 1, 1)(3, ViewPagesComponent_Conditional_13_ng_template_3_Conditional_3_Template, 2, 2, "a", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275conditionalCreate(5, ViewPagesComponent_Conditional_13_ng_template_3_Conditional_5_Template, 1, 1)(6, ViewPagesComponent_Conditional_13_ng_template_3_Conditional_6_Template, 2, 2, "a", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.projectCache.selectedDisplay() === "url" ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.projectCache.selectedDisplay() === "url" ? 5 : 6);
  }
}
function ViewPagesComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-table", 9);
    \u0275\u0275template(1, ViewPagesComponent_Conditional_13_ng_template_1_Template, 11, 12, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, ViewPagesComponent_Conditional_13_ng_template_3_Template, 7, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r1.pairedPagesForTable());
  }
}
function ViewPagesComponent_Conditional_14_For_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const url_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", url_r4.url, " ");
  }
}
function ViewPagesComponent_Conditional_14_For_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const url_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", url_r4.url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(url_r4.label);
  }
}
function ViewPagesComponent_Conditional_14_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275conditionalCreate(1, ViewPagesComponent_Conditional_14_For_6_Conditional_1_Template, 1, 1)(2, ViewPagesComponent_Conditional_14_For_6_Conditional_2_Template, 2, 2, "a", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.projectCache.selectedDisplay() === "url" ? 1 : 2);
  }
}
function ViewPagesComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul");
    \u0275\u0275repeaterCreate(5, ViewPagesComponent_Conditional_14_For_6_Template, 3, 1, "li", null, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r1.projectCache.selectedLang() === "en" ? \u0275\u0275pipeBind1(2, 2, "common.language.english") : \u0275\u0275pipeBind1(3, 4, "common.language.french"), " (", ctx_r1.singlePageCount(), ")");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.singlePagesForList());
  }
}
function ViewPagesComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-button", 11);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 2, "inventory._title"))("routerLink", ctx_r1.AidaLinks.ProjectInventory);
  }
}
var ViewPagesComponent = class _ViewPagesComponent {
  projectState = inject(ProjectStateService);
  projectCache = inject(ProjectCacheService);
  iaDiagram = inject(IaDiagramService);
  AidaLinks = AidaLinks;
  //Input
  showInventory = input(true, ...ngDevMode ? [{ debugName: "showInventory" }] : (
    /* istanbul ignore next */
    []
  ));
  //UI elements
  inScopePageCount = computed(() => this.projectState.getProject().inScopePages, ...ngDevMode ? [{ debugName: "inScopePageCount" }] : (
    /* istanbul ignore next */
    []
  ));
  outOfScopePageCount = computed(() => this.projectState.getProject().baselinePages - this.projectState.getProject().inScopePages, ...ngDevMode ? [{ debugName: "outOfScopePageCount" }] : (
    /* istanbul ignore next */
    []
  ));
  showUrls = false;
  //URL drawer - Both languages
  pairedPagesForTable = computed(() => this.projectState.getPairedPages(this.projectCache.selectedSource(), this.projectCache.selectedScope()), ...ngDevMode ? [{ debugName: "pairedPagesForTable" }] : (
    /* istanbul ignore next */
    []
  ));
  //URL drawer - One language
  singlePagesForList = computed(() => {
    const selectedLang = this.projectCache.selectedLang();
    const lang = selectedLang === "both" ? this.projectState.detectPrimaryLanguage() : selectedLang;
    return this.projectState.getAllPages(lang, this.projectCache.selectedSource(), this.projectCache.selectedScope());
  }, ...ngDevMode ? [{ debugName: "singlePagesForList" }] : (
    /* istanbul ignore next */
    []
  ));
  singlePageCount = computed(() => {
    return this.singlePagesForList().length;
  }, ...ngDevMode ? [{ debugName: "singlePageCount" }] : (
    /* istanbul ignore next */
    []
  ));
  //URL drawer - Copy
  copyToClipboard(lang) {
    return __async(this, null, function* () {
      const pairs = this.pairedPagesForTable();
      let text;
      if (lang === "both") {
        text = pairs.map((pair) => `${pair.en.url}	${pair.fr.url}`).join("\r\n");
      } else {
        text = pairs.map((pair) => `${pair[lang].url}`).join("\r\n");
      }
      try {
        yield navigator.clipboard.writeText(text);
      } catch (error) {
        console.error("Failed to copy to clipboard:", error);
      }
    });
  }
  static \u0275fac = function ViewPagesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewPagesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewPagesComponent, selectors: [["aida-view-pages"]], inputs: { showInventory: [1, "showInventory"] }, decls: 34, vars: 35, consts: [["header", ""], ["body", ""], [1, "flex", "flex-column", "gap-2", "lg:flex-row", "lg:gap-4", "lg:align-items-center"], [1, "text-2xl", "my-1"], [1, "flex", "flex-row", "gap-1"], ["icon", "pi pi-list", "outlined", "", "size", "small", "styleClass", "secondary-outline w-full min-w-max", 3, "click", "label"], ["appendTo", "body", "position", "right", "styleClass", "w-6", 3, "visibleChange", "visible", "header"], [3, "allowBoth", "allowPreview", "showDisplay", "showLang", "showScope", "showSource"], ["icon", "pi pi-copy", "outlined", "", "size", "small", "styleClass", "secondary-outline white-space-nowrap", 3, "onClick", "label"], [3, "value"], ["icon", "pi pi-sitemap", "outlined", "", "size", "small", "styleClass", "secondary-outline w-full min-w-max", 3, "label", "routerLink"], ["icon", "pi pi-list-check", "outlined", "", "size", "small", "styleClass", "secondary-outline w-full min-w-max", 3, "label", "routerLink"], [1, "flex", "flex-row", "gap-1", "mt-2", "lg:mt-0", "lg:justify-content-center", "lg:align-items-center"], [1, "pi", "pi-copy", "text-primary", "text-5xl"], [1, "flex", "flex-column"], [1, "my-0", "font-bold", "text-xl"], [1, "my-0", "text-sm", "lowercase", "white-space-nowrap"], [1, "pi", "pi-plus", "text-primary", "text-3xl", "mx-2"], [1, "pi", "pi-copy", "text-color-secondary", "text-5xl"], [1, "flex", "flex-column", "text-color-secondary"], [1, "my-0", "font-semibold", "text-xl"], ["icon", "pi pi-copy", "rounded", "", "text", "", "tooltipPosition", "top", 3, "onClick", "pTooltip"], ["target", "_blank", 3, "href"]], template: function ViewPagesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "h2", 3);
      \u0275\u0275text(2);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4)(5, "p-button", 5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275listener("click", function ViewPagesComponent_Template_p_button_click_5_listener() {
        return ctx.showUrls = true;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p-drawer", 6);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("visibleChange", function ViewPagesComponent_Template_p_drawer_visibleChange_8_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.showUrls, $event) || (ctx.showUrls = $event);
        return $event;
      });
      \u0275\u0275elementStart(10, "aida-project-settings", 7)(11, "p-button", 8);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275listener("onClick", function ViewPagesComponent_Template_p_button_onClick_11_listener() {
        return ctx.copyToClipboard(ctx.projectCache.selectedLang());
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(13, ViewPagesComponent_Conditional_13_Template, 5, 1, "p-table", 9)(14, ViewPagesComponent_Conditional_14_Template, 7, 6);
      \u0275\u0275elementEnd();
      \u0275\u0275element(15, "p-button", 10);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275conditionalCreate(17, ViewPagesComponent_Conditional_17_Template, 2, 4, "p-button", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 12);
      \u0275\u0275element(19, "i", 13);
      \u0275\u0275elementStart(20, "div", 14)(21, "p", 15);
      \u0275\u0275text(22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "p", 16);
      \u0275\u0275text(24);
      \u0275\u0275pipe(25, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(26, "i", 17)(27, "i", 18);
      \u0275\u0275elementStart(28, "div", 19)(29, "p", 20);
      \u0275\u0275text(30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "p", 16);
      \u0275\u0275text(32);
      \u0275\u0275pipe(33, "translate");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 19, "common.viewPages"));
      \u0275\u0275advance(3);
      \u0275\u0275property("label", \u0275\u0275pipeBind1(6, 21, "common.view") + " " + \u0275\u0275pipeBind1(7, 23, "project.urls"));
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("visible", ctx.showUrls);
      \u0275\u0275property("header", \u0275\u0275pipeBind1(9, 25, "common.urls"));
      \u0275\u0275advance(2);
      \u0275\u0275property("allowBoth", true)("allowPreview", true)("showDisplay", true)("showLang", true)("showScope", true)("showSource", true);
      \u0275\u0275advance();
      \u0275\u0275property("label", \u0275\u0275pipeBind1(12, 27, "common.copyUrls"));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.projectCache.selectedLang() === "both" ? 13 : 14);
      \u0275\u0275advance(2);
      \u0275\u0275property("label", \u0275\u0275pipeBind1(16, 29, "iaDiagram.button"))("routerLink", ctx.AidaLinks.ProjectDiagram);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showInventory() ? 17 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.inScopePageCount());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 31, "common.inScopePages"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.outOfScopePageCount());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 33, "common.outOfScopePages"));
    }
  }, dependencies: [RouterLink, ButtonModule, Button, DrawerModule, Drawer, TableModule, Table, TooltipModule, Tooltip, ProjectSettingsComponent, TranslatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewPagesComponent, [{
    type: Component,
    args: [{ selector: "aida-view-pages", imports: [RouterLink, TranslatePipe, ButtonModule, DrawerModule, TableModule, TooltipModule, ProjectSettingsComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="flex flex-column gap-2 lg:flex-row lg:gap-4 lg:align-items-center">
  <h2 class="text-2xl my-1">{{ 'common.viewPages' | translate }}</h2>

  <div class="flex flex-row gap-1">
    <p-button
      [label]="('common.view' | translate) + ' ' + ('project.urls' | translate)"
      (click)="showUrls = true"
      icon="pi pi-list"
      outlined
      size="small"
      styleClass="secondary-outline w-full min-w-max"
    />
    <p-drawer [(visible)]="showUrls" [header]="'common.urls' | translate" appendTo="body" position="right" styleClass="w-6">
      <aida-project-settings [allowBoth]="true" [allowPreview]="true" [showDisplay]="true" [showLang]="true" [showScope]="true" [showSource]="true">
        <p-button
          [label]="'common.copyUrls' | translate"
          (onClick)="copyToClipboard(projectCache.selectedLang())"
          icon="pi pi-copy"
          outlined
          size="small"
          styleClass="secondary-outline white-space-nowrap"
        />
      </aida-project-settings>
      @if (projectCache.selectedLang() === 'both') {
        <p-table [value]="pairedPagesForTable()">
          <ng-template #header>
            <tr>
              <th>
                {{ 'common.language.english' | translate }}
                <p-button [pTooltip]="'common.copyEnglish' | translate" (onClick)="copyToClipboard('en')" icon="pi pi-copy" rounded text tooltipPosition="top" />
              </th>
              <th>
                {{ 'common.language.french' | translate }}
                <p-button [pTooltip]="'common.copyFrench' | translate" (onClick)="copyToClipboard('fr')" icon="pi pi-copy" rounded text tooltipPosition="top" />
              </th>
            </tr>
          </ng-template>
          <ng-template #body let-pair>
            <tr>
              <td>
                @if (projectCache.selectedDisplay() === 'url') {
                  {{ pair.en.url }}
                } @else {
                  <a [href]="pair.en.url" target="_blank">{{ pair.en.label }}</a>
                }
              </td>
              <td>
                @if (projectCache.selectedDisplay() === 'url') {
                  {{ pair.fr.url }}
                } @else {
                  <a [href]="pair.fr.url" target="_blank">{{ pair.fr.label }}</a>
                }
              </td>
            </tr>
          </ng-template>
        </p-table>
      } @else {
        <h3>{{ projectCache.selectedLang() === 'en' ? ('common.language.english' | translate) : ('common.language.french' | translate) }} ({{ singlePageCount() }})</h3>
        <ul>
          @for (url of singlePagesForList(); track url.url) {
            <li>
              @if (projectCache.selectedDisplay() === 'url') {
                {{ url.url }}
              } @else {
                <a [href]="url.url" target="_blank">{{ url.label }}</a>
              }
            </li>
          }
        </ul>
      }
    </p-drawer>
    <p-button [label]="'iaDiagram.button' | translate" [routerLink]="AidaLinks.ProjectDiagram" icon="pi pi-sitemap" outlined size="small" styleClass="secondary-outline w-full min-w-max" />
    @if (showInventory()) {
      <p-button [label]="'inventory._title' | translate" [routerLink]="AidaLinks.ProjectInventory" icon="pi pi-list-check" outlined size="small" styleClass="secondary-outline w-full min-w-max" />
    }
  </div>

  <div class="flex flex-row gap-1 mt-2 lg:mt-0 lg:justify-content-center lg:align-items-center">
    <i class="pi pi-copy text-primary text-5xl"></i>
    <div class="flex flex-column">
      <p class="my-0 font-bold text-xl">{{ inScopePageCount() }}</p>
      <p class="my-0 text-sm lowercase white-space-nowrap">{{ 'common.inScopePages' | translate }}</p>
    </div>
    <i class="pi pi-plus text-primary text-3xl mx-2"></i>
    <i class="pi pi-copy text-color-secondary text-5xl"></i>
    <div class="flex flex-column text-color-secondary">
      <p class="my-0 font-semibold text-xl">{{ outOfScopePageCount() }}</p>
      <p class="my-0 text-sm lowercase white-space-nowrap">{{ 'common.outOfScopePages' | translate }}</p>
    </div>
  </div>
</div>
` }]
  }], null, { showInventory: [{ type: Input, args: [{ isSignal: true, alias: "showInventory", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewPagesComponent, { className: "ViewPagesComponent", filePath: "src/app/components/view-pages/view-pages.component.ts", lineNumber: 25 });
})();

export {
  ViewPagesComponent
};
//# sourceMappingURL=chunk-J7PDF67E.js.map
