import {
  InventoryPrompts
} from "./chunk-NNCGRMT2.js";
import {
  CompareService
} from "./chunk-ZDKJ4LLB.js";
import {
  InventoryPromptKey,
  OpenRouterService
} from "./chunk-YJPJTEWV.js";
import {
  StyleTreeNodeService
} from "./chunk-EVKCOUR7.js";
import {
  TooltipDirective
} from "./chunk-FZRAMW5I.js";
import {
  Menu,
  MenuModule
} from "./chunk-25EJW4L3.js";
import {
  EditNodeComponent
} from "./chunk-JDU2U6EY.js";
import {
  AidaLinks
} from "./chunk-MDCM2VZ6.js";
import {
  ProjectCacheService
} from "./chunk-GK5IV6NU.js";
import {
  ProjectStateService
} from "./chunk-XGTQV6DJ.js";
import {
  FetchService
} from "./chunk-FW3J5AX7.js";
import {
  Button,
  ButtonModule,
  marker
} from "./chunk-G47QJVEM.js";
import {
  ConfirmationService,
  Router
} from "./chunk-NR7HH4L4.js";
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  Injectable,
  Input,
  Output,
  TranslatePipe,
  TranslateService,
  ViewChild,
  computed,
  effect,
  inject,
  input,
  output,
  setClassMetadata,
  signal,
  untracked,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuerySignal
} from "./chunk-MB4XCYRB.js";
import {
  __async
} from "./chunk-YCXP4XZS.js";

// src/app/components/menu-page-actions/menu-page-actions.component.ts
var _c0 = ["menu"];
function MenuPageActionsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 8);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("onClick", function MenuPageActionsComponent_Conditional_0_Template_p_button_onClick_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      const menu_r3 = \u0275\u0275reference(4);
      ctx_r1.updateDropdown();
      return \u0275\u0275resetView(menu_r3.toggle($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("aidaTooltip", \u0275\u0275pipeBind1(1, 2, "common.moreOptions"))("disabled", ctx_r1.selectedNodes().length === 0);
  }
}
function MenuPageActionsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 9);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("onClick", function MenuPageActionsComponent_Conditional_1_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.generateMetadata());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.selectedNodes().length === 0)("label", \u0275\u0275pipeBind1(1, 2, "metadata.generateButton"));
  }
}
function MenuPageActionsComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 10);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("onClick", function MenuPageActionsComponent_Conditional_2_Template_p_button_onClick_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      const menu_r3 = \u0275\u0275reference(4);
      ctx_r1.updateDropdown();
      return \u0275\u0275resetView(menu_r3.toggle($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.selectedNodes().length === 0)("label", \u0275\u0275pipeBind1(1, 2, "common.bulkActions"));
  }
}
function MenuPageActionsComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275classMap(item_r6.styleClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 3, item_r6.label));
  }
}
function MenuPageActionsComponent_ng_template_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275listener("click", function MenuPageActionsComponent_ng_template_7_Conditional_0_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(1, "a", 12);
    \u0275\u0275element(2, "i");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 14)(6, "p-button", 15);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275listener("onClick", function MenuPageActionsComponent_ng_template_7_Conditional_0_Template_p_button_onClick_6_listener() {
      \u0275\u0275restoreView(_r7);
      const item_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleBoolToggle(item_r8.onYes));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p-button", 16);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275listener("onClick", function MenuPageActionsComponent_ng_template_7_Conditional_0_Template_p_button_onClick_8_listener() {
      \u0275\u0275restoreView(_r7);
      const item_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleBoolToggle(item_r8.onNo));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275classMap(item_r8.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r8.label);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", item_r8.disabled)("label", \u0275\u0275pipeBind1(7, 7, "common.yes"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", item_r8.disabled)("label", \u0275\u0275pipeBind1(9, 9, "common.no"));
  }
}
function MenuPageActionsComponent_ng_template_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 12);
    \u0275\u0275element(1, "i");
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(item_r8.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, item_r8.label));
  }
}
function MenuPageActionsComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MenuPageActionsComponent_ng_template_7_Conditional_0_Template, 10, 11, "div", 11)(1, MenuPageActionsComponent_ng_template_7_Conditional_1_Template, 5, 5, "a", 12);
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    \u0275\u0275conditional(item_r8.type === "booleanToggle" ? 0 : 1);
  }
}
function MenuPageActionsComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "aida-edit-node", 17);
    \u0275\u0275listener("dialogClose", function MenuPageActionsComponent_Conditional_9_Template_aida_edit_node_dialogClose_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editingNode = false);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("dialogMode", true)("initialShowNotes", ctx_r1.showNotes)("isOpen", ctx_r1.editingNode)("node", ctx_r1.selectedNode());
  }
}
var MenuPageActionsComponent = class _MenuPageActionsComponent {
  router = inject(Router);
  translate = inject(TranslateService);
  confirmationService = inject(ConfirmationService);
  projectState = inject(ProjectStateService);
  fetchService = inject(FetchService);
  openRouterService = inject(OpenRouterService);
  compareService = inject(CompareService);
  /** Selected pages in TreeNode format. Calling component should do the conversion from flat data to TreeNode */
  iconOnly = input(false, ...ngDevMode ? [{ debugName: "iconOnly" }] : (
    /* istanbul ignore next */
    []
  ));
  metadataOnly = input(false, ...ngDevMode ? [{ debugName: "metadataOnly" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedNodes = input.required(...ngDevMode ? [{ debugName: "selectedNodes" }] : (
    /* istanbul ignore next */
    []
  ));
  deleted = output();
  /** Signal for node editor */
  selectedNode = signal(void 0, ...ngDevMode ? [{ debugName: "selectedNode" }] : (
    /* istanbul ignore next */
    []
  ));
  editingNode = false;
  showNotes = false;
  /** REFRESH: Refresh prototype or live data for all selected nodes */
  refreshData(version) {
    return __async(this, null, function* () {
      const nodes = this.selectedNodes();
      if (!nodes.length)
        return;
      const urlVersion = version === "live" ? "live" : this.projectState.getProject().repoType === "github" ? "protoGH" : "protoUT";
      const paths = nodes.map((n) => n.data.path.en);
      yield this.projectState.withLoading(paths, version, () => __async(this, null, function* () {
        for (const node of nodes) {
          yield this.projectState.refreshNode(node, urlVersion);
        }
      }));
    });
  }
  /** METADATA: Generate metadata via AI for all selected pages */
  generateMetadata(mode = "live") {
    return __async(this, null, function* () {
      const nodes = this.selectedNodes();
      if (!nodes.length)
        return;
      const project = this.projectState.getProject();
      const urlVersion = mode === "live" ? "live" : project.repoType === "github" ? "protoGH" : "protoUT";
      const paths = nodes.map((node) => node.data.path.en);
      yield this.projectState.withLoading(paths, "aiMetadata", () => __async(this, null, function* () {
        for (const node of nodes) {
          if (!node.data?.path)
            continue;
          const enUrl = this.fetchService.generateUrl(node.data.path.en, urlVersion, project.github.owner, project.github.repo);
          const frUrl = this.fetchService.generateUrl(node.data.path.fr, urlVersion, project.github.owner, project.github.repo);
          if (!enUrl && !frUrl) {
            console.warn(`Skipping ${enUrl} \u2014 missing EN & FR URLs`);
            continue;
          }
          let enMain = null;
          let frMain = null;
          try {
            if (enUrl) {
              const enDoc = urlVersion !== "protoUT" ? yield this.fetchService.fetchContent(enUrl, "prod", 3, "none", true) : this.fetchService.stringToDoc(yield this.fetchService.fetchViaProxy(enUrl));
              enMain = enDoc.querySelector("main")?.innerHTML ?? enDoc.body.innerHTML;
            }
            if (frUrl) {
              const frDoc = urlVersion !== "protoUT" ? yield this.fetchService.fetchContent(frUrl, "prod", 3, "none", true) : this.fetchService.stringToDoc(yield this.fetchService.fetchViaProxy(frUrl));
              frMain = frDoc.querySelector("main")?.innerHTML ?? frDoc.body.innerHTML;
            }
          } catch (error) {
            console.warn(`Skipping ${enUrl} \u2014 fetch failed`, error);
            continue;
          }
          const context = {
            en: {
              url: enUrl,
              existingDescription: node.data[mode]?.en.description,
              existingKeywords: node.data[mode]?.en.keywords,
              content: enMain
            },
            fr: {
              url: frUrl,
              existingDescription: node.data[mode]?.en.description,
              existingKeywords: node.data[mode]?.en.keywords,
              content: frMain
            }
          };
          let response;
          try {
            response = yield this.openRouterService.getTextFromAI(InventoryPrompts[InventoryPromptKey.Metadata], JSON.stringify(context));
          } catch (error) {
            console.warn(`Skipping ${enUrl} \u2014 AI call failed`, error);
            continue;
          }
          const path = this.projectState.detectPrimaryLanguage() === "fr" ? node.data.path.fr : node.data.path.en;
          try {
            const parsed = JSON.parse(response);
            this.projectState.setMetadataReview(path, {
              generatedAt: /* @__PURE__ */ new Date(),
              model: this.openRouterService.state().respondingModel ?? "unknown",
              en: {
                description: { ai: parsed.en.description, status: "pending" },
                keywords: { ai: parsed.en.keywords, status: "pending" }
              },
              fr: {
                description: { ai: parsed.fr.description, status: "pending" },
                keywords: { ai: parsed.fr.keywords, status: "pending" }
              }
            }, InventoryPrompts[InventoryPromptKey.Metadata]);
          } catch (error) {
            console.warn(`Skipping ${path} \u2014 could not parse AI response`, error);
            continue;
          }
        }
      }));
    });
  }
  /** EDIT: open selected page in "Edit pages" tool (only available if 1 page selected) */
  openInEditPages(node) {
    const path = this.projectState.detectPrimaryLanguage() === "fr" ? node.data?.path.fr : node.data?.path.en;
    if (path) {
      this.compareService.selectedPage.set(path);
      this.router.navigate([AidaLinks.ProjectEdit]);
    } else {
      console.error("There is no path associated with this page");
    }
  }
  /** EDIT: open selected page in node editor popup (only available if 1 page selected) */
  editNode(node, showNotes = false) {
    this.selectedNode.set(node);
    this.showNotes = showNotes;
    this.editingNode = true;
  }
  /** STATUS: set scope, unpublish, archive, or noindex status for all selected pages*/
  bulkSetBooleans(dataSection, value) {
    const sections = dataSection.includes("lang") ? ["en", "fr"].map((l) => dataSection.map((k) => k === "lang" ? l : k)) : [dataSection];
    let changed = false;
    for (const node of this.selectedNodes()) {
      if (!node.data)
        return;
      for (const section of sections) {
        if (this.projectState.getNestedValue(node.data, section) !== value) {
          this.projectState.setNestedValue(node.data, section, value);
          changed = true;
        }
      }
    }
    if (changed) {
      this.projectState.setModifiedDate();
    }
  }
  bulkEditableBooleans = [
    { dataSection: ["status", "inScope"], labelKey: "inventory.header.inScope", icon: "pi pi-check text-green" },
    //{ dataSection: ['status', 'isNew'], labelKey: 'inventory.header.isNew', icon: 'pi pi-plus text-blue-500' },
    //{ dataSection: ['status', 'isMoved'], labelKey: 'inventory.header.isMoved', icon: 'pi pi-arrow-right text-orange-500' },
    { dataSection: ["status", "isROT"], labelKey: "inventory.header.isROT", icon: "pi pi-trash text-red" },
    { dataSection: ["prototype", "lang", "isArchived"], labelKey: "inventory.header.archiveStatus", icon: "pi pi-book text-orange-500" },
    { dataSection: ["prototype", "lang", "noindex"], labelKey: "inventory.header.noindex", icon: "pi pi-android text-orange-500" }
  ];
  menu = viewChild("menu", ...ngDevMode ? [{ debugName: "menu" }] : (
    /* istanbul ignore next */
    []
  ));
  handleBoolToggle(action) {
    action();
    this.menu()?.hide();
  }
  /** DELETE */
  onDeleteSelected() {
    if (!this.selectedNodes().length)
      return;
    const additionalDeletions = this.projectState.checkNodeDeletionImpact(this.selectedNodes());
    if (additionalDeletions.length > 0) {
      this.showDeletionConfirmation(this.selectedNodes().length, additionalDeletions);
    } else {
      this.confirmationService.confirm({
        message: this.translate.instant("inventory.delete.confirmMessage", { count: this.selectedNodes().length }),
        header: this.translate.instant("inventory.delete._title"),
        icon: "pi pi-exclamation-circle",
        acceptIcon: "pi pi-trash",
        acceptLabel: this.translate.instant("common.delete"),
        rejectLabel: this.translate.instant("common.cancel"),
        acceptButtonStyleClass: "p-button-danger",
        rejectButtonStyleClass: "p-button-secondary",
        accept: () => {
          this.projectState.deleteNodes(this.selectedNodes());
          this.deleted.emit();
        }
      });
    }
  }
  showDeletionConfirmation(deleteCount, additionalPages) {
    const inScopeCount = additionalPages.filter((p) => p.inScope).length;
    const inScopeList = additionalPages.filter((p) => p.inScope).map((p) => `${p.h1}`).join("<br>");
    const baselineCount = additionalPages.filter((p) => !p.inScope).length;
    const baselineList = additionalPages.filter((p) => !p.inScope).map((p) => `${p.h1}`).join("<br>");
    const childWarning = this.translate.instant("inventory.delete.childPagesWarning", {
      deleteCount,
      childCount: additionalPages.length
    });
    let message = `<p class="mt-0">${childWarning}</p>`;
    if (inScopeCount > 0) {
      const inScopeWarning = this.translate.instant("inventory.delete.inScopeWarning", { count: inScopeCount });
      const inScopeHeading = this.translate.instant("inventory.delete.inScopeHeading");
      message += `
            <p>${inScopeWarning}</p>
            <h2>${inScopeHeading}</h2>
            <p>${inScopeList}</p>
        `;
    }
    if (baselineCount > 0) {
      const baselineHeading = this.translate.instant("inventory.delete.baselineHeading");
      message += `
            <h2>${baselineHeading}</h2>
            <p>${baselineList}</p>
        `;
    }
    message = message.trim();
    this.confirmationService.confirm({
      key: "inventory",
      message,
      header: this.translate.instant("inventory.delete._title"),
      icon: "pi pi-exclamation-triangle",
      acceptIcon: "pi pi-trash",
      acceptLabel: this.translate.instant("common.delete"),
      rejectLabel: this.translate.instant("common.cancel"),
      acceptButtonStyleClass: "p-button-danger",
      rejectButtonStyleClass: "p-button-secondary",
      accept: () => {
        this.projectState.deleteNodes(this.selectedNodes());
        this.deleted.emit();
      }
    });
  }
  /** Dynamically built dropdown menu items*/
  itemsDropdown = [];
  // 1. Dropdown menus (p-menu)
  updateDropdown() {
    const numPages = this.selectedNodes().length;
    const node = this.selectedNodes()[0];
    const numChildPages = this.projectState.checkNodeDeletionImpact(this.selectedNodes()).length;
    const refreshingProto = this.projectState.isAnyLoading("prototype");
    const refreshingLive = this.projectState.isAnyLoading("live");
    const editGroup = numPages === 1 ? [
      {
        label: this.translate.instant("common.edit"),
        styleClass: "text-primary-500",
        items: [
          {
            label: this.translate.instant("editPages._title"),
            icon: "pi pi-sparkles",
            command: () => this.openInEditPages(node)
          },
          {
            label: this.translate.instant("common.editNode"),
            icon: "pi pi-pen-to-square",
            command: () => this.editNode(node)
          }
        ]
      }
    ] : [];
    if (numPages === 1 && (node.data?.notes?.issue?.length ?? 0) + (node.data?.notes?.solution?.length ?? 0) > 0) {
      editGroup[0].items.push({
        label: this.translate.instant(`common.viewNotes`),
        icon: "pi pi-list",
        command: () => this.editNode(node, true)
      });
    }
    const project = this.projectState.getProject();
    const protoVersion = project.repoType === "github" ? "protoGH" : "protoUT";
    const baseVersion = project.repoType === "github" ? "baseGH" : "baseUT";
    const hasBaseline = project.github.hasBaselineRepo;
    const path = this.translate.getCurrentLang()?.startsWith("fr") ? node.data?.path.fr : node.data?.path.en;
    const newTabGroup = numPages === 1 && path ? [
      {
        label: this.translate.instant("common.openNewTab"),
        styleClass: "text-primary-500",
        items: [
          {
            label: this.translate.instant("inventory.menu.newTab.liveUrl"),
            icon: "pi pi-external-link",
            command: () => {
              window.open(this.fetchService.generateUrl(path, "live"), "_blank");
            }
          },
          {
            label: this.translate.instant("inventory.menu.newTab.previewUrl"),
            icon: "pi pi-external-link",
            command: () => {
              window.open(this.fetchService.generateUrl(path, "preview"), "_blank");
            }
          },
          {
            label: this.translate.instant("inventory.menu.newTab.prototypeUrl"),
            icon: "pi pi-external-link",
            command: () => {
              window.open(this.fetchService.generateUrl(path, protoVersion, project.github.owner, project.github.repo), "_blank");
            }
          }
        ]
      }
    ] : [];
    if (hasBaseline && numPages === 1 && path) {
      newTabGroup[0].items.push({
        label: this.translate.instant("inventory.menu.newTab.baselineUrl"),
        icon: "pi pi-external-link",
        command: () => {
          window.open(this.fetchService.generateUrl(path, baseVersion, project.github.owner, project.github.repo), "_blank");
        }
      });
    }
    if (!node.data?.status.isNew && numPages === 1 && path) {
      newTabGroup[0].items.push({
        label: this.translate.instant("inventory.menu.newTab.UPD"),
        icon: "pi pi-external-link",
        command: () => {
          window.open(this.fetchService.generateUrl(path, "upd"), "_blank");
        }
      });
    }
    this.itemsDropdown = [
      {
        label: this.translate.instant("common.refresh"),
        styleClass: "text-primary-500",
        items: [
          {
            label: refreshingProto ? this.translate.instant("inventory.menu.refreshing.prototype", { pageCount: numPages }) : this.translate.instant("inventory.menu.refresh.prototype", { pageCount: numPages }),
            icon: refreshingProto ? "pi pi-spin pi-spinner" : "pi pi-refresh",
            disabled: numPages === 0,
            command: () => {
              this.refreshData("prototype");
            }
          },
          {
            label: refreshingLive ? this.translate.instant("inventory.menu.refreshing.live", { pageCount: numPages }) : this.translate.instant("inventory.menu.refresh.live", { pageCount: numPages }),
            icon: refreshingLive ? "pi pi-spin pi-spinner" : "pi pi-refresh",
            disabled: numPages === 0,
            command: () => {
              this.refreshData("live");
            }
          }
        ]
      },
      {
        label: this.translate.instant("inventory.menu.metadata"),
        styleClass: "text-primary-500",
        items: [
          {
            label: this.openRouterService.state().loading ? this.translate.instant("inventory.menu.metadata.generating", { pageCount: numPages }) : this.translate.instant("inventory.menu.metadata.generate", { pageCount: numPages }),
            icon: this.openRouterService.state().loading ? "pi pi-spin pi-spinner" : "pi pi-sparkles",
            disabled: numPages === 0 || this.openRouterService.state().loading,
            command: () => __async(this, null, function* () {
              yield this.generateMetadata();
            })
          }
        ]
      },
      {
        label: this.translate.instant("inventory.menu.updateStatus", { pageCount: numPages }),
        styleClass: "text-primary-500",
        items: this.bulkEditableBooleans.map((boolean) => ({
          type: "booleanToggle",
          label: this.translate.instant(boolean.labelKey),
          icon: boolean.icon,
          disabled: numPages === 0,
          onYes: () => this.bulkSetBooleans(boolean.dataSection, true),
          onNo: () => this.bulkSetBooleans(boolean.dataSection, false)
        }))
      },
      ...editGroup,
      ...newTabGroup,
      {
        label: this.translate.instant("inventory.menu.delete"),
        styleClass: "text-red",
        items: [
          {
            label: this.translate.instant("inventory.menu.delete.selected", { pageCount: numPages, childCount: numChildPages }),
            icon: "pi pi-trash text-red",
            disabled: numPages === 0,
            command: () => {
              this.onDeleteSelected();
            }
          }
        ]
      }
    ];
    return;
  }
  static \u0275fac = function MenuPageActionsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MenuPageActionsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MenuPageActionsComponent, selectors: [["aida-menu-page-actions"]], viewQuery: function MenuPageActionsComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.menu, _c0, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, inputs: { iconOnly: [1, "iconOnly"], metadataOnly: [1, "metadataOnly"], selectedNodes: [1, "selectedNodes"] }, outputs: { deleted: "deleted" }, decls: 10, vars: 4, consts: [["menu", ""], ["submenuheader", ""], ["item", ""], ["icon", "pi pi-ellipsis-h", "size", "large", "styleClass", "p-2", "text", "", 3, "aidaTooltip", "disabled"], ["fluid", "", "icon", "pi pi-sparkles", "outlined", "", "styleClass", "secondary-outline", 3, "disabled", "label"], ["icon", "pi pi-chevron-down", "iconPos", "right", "outlined", "", "styleClass", "secondary-outline h-3rem min-w-max", 3, "disabled", "label"], ["appendTo", "body", 3, "model", "popup"], [3, "dialogMode", "initialShowNotes", "isOpen", "node"], ["icon", "pi pi-ellipsis-h", "size", "large", "styleClass", "p-2", "text", "", 3, "onClick", "aidaTooltip", "disabled"], ["fluid", "", "icon", "pi pi-sparkles", "outlined", "", "styleClass", "secondary-outline", 3, "onClick", "disabled", "label"], ["icon", "pi pi-chevron-down", "iconPos", "right", "outlined", "", "styleClass", "secondary-outline h-3rem min-w-max", 3, "onClick", "disabled", "label"], [1, "flex", "flex-row", "align-items-center", "justify-content-between", "gap-2"], [1, "p-menu-item-link"], [1, "flex", "flex-row", "align-items-center", "justify-content-between", "gap-2", 3, "click"], [1, "flex", "flex-row", "gap-1", "mr-2"], ["icon", "pi pi-check", "outlined", "", "severity", "success", "styleClass", "secondary-outline", 3, "onClick", "disabled", "label"], ["icon", "pi pi-times", "outlined", "", "severity", "danger", "styleClass", "secondary-outline", 3, "onClick", "disabled", "label"], [3, "dialogClose", "dialogMode", "initialShowNotes", "isOpen", "node"]], template: function MenuPageActionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, MenuPageActionsComponent_Conditional_0_Template, 2, 4, "p-button", 3)(1, MenuPageActionsComponent_Conditional_1_Template, 2, 4, "p-button", 4)(2, MenuPageActionsComponent_Conditional_2_Template, 2, 4, "p-button", 5);
      \u0275\u0275elementStart(3, "p-menu", 6, 0);
      \u0275\u0275template(5, MenuPageActionsComponent_ng_template_5_Template, 3, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(7, MenuPageActionsComponent_ng_template_7_Template, 2, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(9, MenuPageActionsComponent_Conditional_9_Template, 1, 4, "aida-edit-node", 7);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.iconOnly() ? 0 : ctx.metadataOnly() ? 1 : 2);
      \u0275\u0275advance(3);
      \u0275\u0275property("model", ctx.itemsDropdown)("popup", true);
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.selectedNode() ? 9 : -1);
    }
  }, dependencies: [ButtonModule, Button, MenuModule, Menu, EditNodeComponent, TooltipDirective, TranslatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuPageActionsComponent, [{
    type: Component,
    args: [{ selector: "aida-menu-page-actions", imports: [TranslatePipe, ButtonModule, MenuModule, EditNodeComponent, TooltipDirective], changeDetection: ChangeDetectionStrategy.OnPush, template: `@if (iconOnly()) {
  <p-button
    [aidaTooltip]="'common.moreOptions' | translate"
    [disabled]="selectedNodes().length === 0"
    (onClick)="updateDropdown(); menu.toggle($event)"
    icon="pi pi-ellipsis-h"
    size="large"
    styleClass="p-2"
    text
  />
} @else if (metadataOnly()) {
  <p-button
    [disabled]="selectedNodes().length === 0"
    [label]="'metadata.generateButton' | translate"
    (onClick)="generateMetadata()"
    fluid
    icon="pi pi-sparkles"
    outlined
    styleClass="secondary-outline"
  />
} @else {
  <p-button
    [disabled]="selectedNodes().length === 0"
    [label]="'common.bulkActions' | translate"
    (onClick)="updateDropdown(); menu.toggle($event)"
    icon="pi pi-chevron-down"
    iconPos="right"
    outlined
    styleClass="secondary-outline h-3rem min-w-max"
  />
}

<p-menu [model]="itemsDropdown" [popup]="true" #menu appendTo="body">
  <ng-template #submenuheader let-item>
    <span [class]="item.styleClass">{{ item.label | translate }}</span>
  </ng-template>
  <ng-template #item let-item>
    @if (item.type === 'booleanToggle') {
      <!-- eslint-disable-next-line @angular-eslint/template/click-events-have-key-events, @angular-eslint/template/interactive-supports-focus -->
      <div (click)="$event.stopPropagation()" class="flex flex-row align-items-center justify-content-between gap-2">
        <a class="p-menu-item-link">
          <i [class]="item.icon"></i>
          <span>{{ item.label }}</span>
        </a>
        <div class="flex flex-row gap-1 mr-2">
          <p-button
            [disabled]="item.disabled"
            [label]="'common.yes' | translate"
            (onClick)="handleBoolToggle(item.onYes)"
            icon="pi pi-check"
            outlined
            severity="success"
            styleClass="secondary-outline"
          />
          <p-button [disabled]="item.disabled" [label]="'common.no' | translate" (onClick)="handleBoolToggle(item.onNo)" icon="pi pi-times" outlined severity="danger" styleClass="secondary-outline" />
        </div>
      </div>
    } @else {
      <a class="p-menu-item-link">
        <i [class]="item.icon"></i>
        <span>{{ item.label | translate }}</span>
      </a>
    }
  </ng-template>
</p-menu>

@if (selectedNode()) {
  <aida-edit-node [dialogMode]="true" [initialShowNotes]="showNotes" [isOpen]="editingNode" [node]="selectedNode()!" (dialogClose)="editingNode = false" />
}
` }]
  }], null, { iconOnly: [{ type: Input, args: [{ isSignal: true, alias: "iconOnly", required: false }] }], metadataOnly: [{ type: Input, args: [{ isSignal: true, alias: "metadataOnly", required: false }] }], selectedNodes: [{ type: Input, args: [{ isSignal: true, alias: "selectedNodes", required: true }] }], deleted: [{ type: Output, args: ["deleted"] }], menu: [{ type: ViewChild, args: ["menu", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MenuPageActionsComponent, { className: "MenuPageActionsComponent", filePath: "src/app/components/menu-page-actions/menu-page-actions.component.ts", lineNumber: 35 });
})();

// src/app/services/project-metadata.service.ts
var ProjectMetadataService = class _ProjectMetadataService {
  translate = inject(TranslateService);
  styleTreeNodeService = inject(StyleTreeNodeService);
  fetchService = inject(FetchService);
  flattenMetadata(tree) {
    const flatNodes = [];
    const titleEN = this.translate.instant("inventory.header.titleEN");
    const descriptionEN = this.translate.instant("inventory.header.descriptionEN");
    const keywordsEN = this.translate.instant("inventory.header.keywordsEN");
    const titleFR = this.translate.instant("inventory.header.titleFR");
    const descriptionFR = this.translate.instant("inventory.header.descriptionFR");
    const keywordsFR = this.translate.instant("inventory.header.keywordsFR");
    const baseline = this.translate.instant("common.version.baseline");
    const live = this.translate.instant("common.version.live");
    const ai = this.translate.instant("common.version.ai");
    const prototype = this.translate.instant("common.version.prototype");
    const noChange = "noChange";
    const walk = (nodes) => {
      for (const node of nodes) {
        const data = node.data;
        const allColours = this.styleTreeNodeService.contextStyles;
        if (!data)
          continue;
        const style = data.status.isNew ? allColours.new : data.status.isROT ? allColours.rot : data.status.isMoved ? allColours.move : void 0;
        const approved = this.approvalStatus(data);
        if (data.status?.inScope !== false) {
          flatNodes.push({
            label: {
              en: {
                h1: data.prototype?.en.h1 ?? "",
                doubleH1: data.prototype?.en.doubleH1 ?? "",
                path: data.path.en
              },
              fr: {
                h1: data.prototype?.fr.h1 ?? "",
                doubleH1: data.prototype?.fr.doubleH1 ?? "",
                path: data.path.fr
              }
            },
            style,
            approved,
            // English title
            titleEnBase: {
              group: titleEN,
              version: baseline,
              content: data.baseline?.en.title ?? ""
            },
            titleEnProto: {
              group: titleEN,
              version: prototype,
              content: data.prototype?.en.title === data.live?.en.title ? noChange : data.prototype?.en.title ?? ""
            },
            titleEnLive: {
              group: titleEN,
              version: live,
              content: data.live?.en.title === data.baseline?.en.title ? noChange : data.live?.en.title ?? ""
            },
            // English description
            descriptionEnBase: {
              group: descriptionEN,
              version: baseline,
              content: data.baseline?.en.description ?? ""
            },
            descriptionEnAi: {
              group: descriptionEN,
              version: ai,
              content: data.metadataReview?.en.description.status === "pending" || data.metadataReview?.en.description.status === "edited" ? data.metadataReview?.en.description.edited ?? data.metadataReview?.en.description.ai : noChange
            },
            descriptionEnProto: {
              group: descriptionEN,
              version: prototype,
              content: data.prototype?.en.description === data.live?.en.description ? noChange : data.prototype?.en.description ?? ""
            },
            descriptionEnLive: {
              group: descriptionEN,
              version: live,
              content: data.live?.en.description === data.baseline?.en.description ? noChange : data.live?.en.description ?? ""
            },
            // English keywords
            keywordsEnBase: {
              group: keywordsEN,
              version: baseline,
              content: data.baseline?.en.keywords ?? ""
            },
            keywordsEnAi: {
              group: keywordsEN,
              version: ai,
              content: data.metadataReview?.en.keywords.status === "pending" || data.metadataReview?.en.keywords.status === "edited" ? data.metadataReview?.en.keywords.edited ?? data.metadataReview?.en.keywords.ai : noChange
            },
            keywordsEnProto: {
              group: keywordsEN,
              version: prototype,
              content: data.prototype?.en.keywords === data.live?.en.keywords ? noChange : data.prototype?.en.keywords ?? ""
            },
            keywordsEnLive: {
              group: keywordsEN,
              version: live,
              content: data.live?.en.keywords === data.baseline?.en.keywords ? noChange : data.live?.en.keywords ?? ""
            },
            // French title
            titleFrBase: {
              group: titleFR,
              version: baseline,
              content: data.baseline?.fr.title ?? ""
            },
            titleFrProto: {
              group: titleFR,
              version: prototype,
              content: data.prototype?.fr.title === data.live?.fr.title ? noChange : data.prototype?.fr.title ?? ""
            },
            titleFrLive: {
              group: titleFR,
              version: live,
              content: data.live?.fr.title === data.baseline?.fr.title ? noChange : data.live?.fr.title ?? ""
            },
            // French description
            descriptionFrBase: {
              group: descriptionFR,
              version: baseline,
              content: data.baseline?.fr.description ?? ""
            },
            descriptionFrAi: {
              group: descriptionFR,
              version: ai,
              content: data.metadataReview?.fr.description.status === "pending" || data.metadataReview?.fr.description.status === "edited" ? data.metadataReview?.fr.description.edited ?? data.metadataReview?.fr.description.ai : noChange
            },
            descriptionFrProto: {
              group: descriptionFR,
              version: prototype,
              content: data.prototype?.fr.description === data.live?.fr.description ? noChange : data.prototype?.fr.description ?? ""
            },
            descriptionFrLive: {
              group: descriptionFR,
              version: live,
              content: data.live?.fr.description === data.baseline?.fr.description ? noChange : data.live?.fr.description ?? ""
            },
            // French keywords
            keywordsFrBase: {
              group: keywordsFR,
              version: baseline,
              content: data.baseline?.fr.keywords ?? ""
            },
            keywordsFrAi: {
              group: keywordsFR,
              version: ai,
              content: data.metadataReview?.fr.keywords.status === "pending" || data.metadataReview?.fr.keywords.status === "edited" ? data.metadataReview?.fr.keywords.edited ?? data.metadataReview?.fr.keywords.ai : noChange
            },
            keywordsFrProto: {
              group: keywordsFR,
              version: prototype,
              content: data.prototype?.fr.keywords === data.live?.fr.keywords ? noChange : data.prototype?.fr.keywords ?? ""
            },
            keywordsFrLive: {
              group: keywordsFR,
              version: live,
              content: data.live?.fr.keywords === data.baseline?.fr.keywords ? noChange : data.live?.fr.keywords ?? ""
            }
          });
        }
        if (node.children?.length) {
          walk(node.children);
        }
      }
    };
    walk(tree);
    return flatNodes;
  }
  approvalStatus(nodeData) {
    const storedApproval = nodeData.approved?.metadata;
    return !!storedApproval && storedApproval === this.hashMetadata(nodeData);
  }
  hashMetadata(nodeData) {
    if (!nodeData.prototype)
      return void 0;
    const allMeta = [
      nodeData.prototype.en.title,
      nodeData.prototype.fr.title,
      nodeData.prototype.en.description,
      nodeData.prototype.fr.description,
      nodeData.prototype.en.keywords,
      nodeData.prototype.fr.keywords
    ];
    const jsonMeta = JSON.stringify(allMeta);
    return this.fetchService.hashString(jsonMeta);
  }
  static \u0275fac = function ProjectMetadataService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjectMetadataService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProjectMetadataService, factory: _ProjectMetadataService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectMetadataService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/services/style-table.service.ts
function groupSpans(cols) {
  const result = [];
  for (const { group } of cols) {
    const last = result.at(-1);
    if (last?.name === group)
      last.span++;
    else
      result.push({ name: group, span: 1 });
  }
  return result;
}
function rowsPerPageOptions(pageTotal) {
  return [25, 50, 100].filter((n) => n < pageTotal).concat(pageTotal);
}
function trackStuck() {
  const host = inject(ElementRef);
  const stuckX = signal(false, ...ngDevMode ? [{ debugName: "stuckX" }] : (
    /* istanbul ignore next */
    []
  ));
  const stuckY = signal(false, ...ngDevMode ? [{ debugName: "stuckY" }] : (
    /* istanbul ignore next */
    []
  ));
  const update = () => {
    const th = host.nativeElement.querySelector("th.sticky-table-column");
    if (!th)
      return;
    const rect = th.getBoundingClientRect();
    const style = getComputedStyle(th);
    stuckX.set(rect.left <= (parseFloat(style.left) || 0) + 0.5);
    stuckY.set(rect.top <= (parseFloat(style.top) || 0) + 0.5);
  };
  document.addEventListener("scroll", update, { capture: true, passive: true });
  window.addEventListener("resize", update, { passive: true });
  inject(DestroyRef).onDestroy(() => {
    document.removeEventListener("scroll", update, { capture: true });
    window.removeEventListener("resize", update);
  });
  return { stuckX, stuckY };
}
function buildFilterFields(lang, columns) {
  return [`label.${lang}.h1`, `label.${lang}.doubleH1`, `label.${lang}.path`, ...columns.map((c) => `${c.key}.content`)];
}
function createRowSelection(rows) {
  const projectState = inject(ProjectStateService);
  const projectCache = inject(ProjectCacheService);
  const selectedRows = signal([], ...ngDevMode ? [{ debugName: "selectedRows" }] : (
    /* istanbul ignore next */
    []
  ));
  const selectedNodes = computed(() => projectState.findNodesByPaths(projectState.getProject().projectData, selectedRows().map((r) => r.label[projectCache.uiLang()].path), projectCache.uiLang()), ...ngDevMode ? [{ debugName: "selectedNodes" }] : (
    /* istanbul ignore next */
    []
  ));
  effect(() => {
    void rows();
    untracked(() => {
      const selected = selectedRows();
      if (selected.length === 0)
        return;
      const byPath = new Map(rows().map((r) => [r.label.en.path, r]));
      const next = selected.map((r) => byPath.get(r.label.en.path)).filter((r) => !!r);
      const unchanged = next.length === selected.length && next.every((r, i) => r === selected[i]);
      if (!unchanged)
        selectedRows.set(next);
    });
  });
  return { selectedRows, selectedNodes };
}
function persisted(storageKey, state, allowed) {
  return {
    save: () => {
      const value = state();
      if (value === void 0)
        localStorage.removeItem(storageKey);
      else
        localStorage.setItem(storageKey, value);
    },
    restore: () => {
      const value = localStorage.getItem(storageKey);
      if (value !== null && allowed.includes(value))
        state.set(value);
    }
  };
}
var ColumnVisibility = class {
  storageKey;
  extras;
  hidden = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "hidden" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor(storageKey, extras = []) {
    this.storageKey = storageKey;
    this.extras = extras;
  }
  isVisible(key) {
    return !this.hidden().has(key);
  }
  groupState(cols) {
    const n = cols.filter((c) => this.isVisible(c.key)).length;
    return n === 0 ? "none" : n === cols.length ? "all" : "some";
  }
  setGroup(cols, visible) {
    this.hidden.update((s) => {
      const next = new Set(s);
      for (const { key } of cols) {
        if (visible)
          next.delete(key);
        else
          next.add(key);
      }
      return next;
    });
  }
  setColumn(key, visible) {
    this.setGroup([{ key }], visible);
  }
  save() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify([...this.hidden()]));
      this.extras.forEach((e) => e.save());
    } catch (e) {
      console.error("Could not save column settings");
    }
  }
  restore() {
    try {
      const parsed = JSON.parse(localStorage.getItem(this.storageKey) ?? "null");
      if (Array.isArray(parsed) && parsed.every((v) => typeof v === "string")) {
        this.hidden.set(new Set(parsed));
      }
      this.extras.forEach((e) => e.restore());
    } catch (e) {
      console.error("Could not restore column settings");
    }
  }
};
var TableService = class _TableService {
  projectState = inject(ProjectStateService);
  projectCache = inject(ProjectCacheService);
  styleTreeNodeService = inject(StyleTreeNodeService);
  static ENTRIES = [
    { flag: "isNew", style: "new", text: marker("editNode.isNew") },
    { flag: "isMoved", style: "move", text: marker("editNode.isMoved") },
    { flag: "isROT", style: "rot", text: marker("editNode.isROT") }
  ];
  /** Get dynamic legend items */
  legendItems() {
    const tree = this.projectState.getProject().projectData;
    if (tree.length === 0)
      return [];
    const colours = this.styleTreeNodeService.contextStyles;
    return _TableService.ENTRIES.filter(({ flag }) => this.projectState.findNodeWhere(tree, (n) => n.data?.status?.[flag] === true) !== null).map(({ style, text }) => ({
      context: [colours[style].replace("border-dashed", "")],
      text
    }));
  }
  /** Lookup node for a given row label */
  getNode(label) {
    const lang = this.projectCache.uiLang();
    const node = this.projectState.findNodeByPath(this.projectState.getProject().projectData, label[lang].path, lang);
    return node ? [node] : void 0;
  }
  static \u0275fac = function TableService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TableService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TableService, factory: _TableService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  MenuPageActionsComponent,
  ProjectMetadataService,
  groupSpans,
  rowsPerPageOptions,
  trackStuck,
  buildFilterFields,
  createRowSelection,
  persisted,
  ColumnVisibility,
  TableService
};
//# sourceMappingURL=chunk-2TEGEP52.js.map
