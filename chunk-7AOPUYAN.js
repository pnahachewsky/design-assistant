import {
  KeyFilter,
  KeyFilterModule,
  PatComponent,
  SetupRepoComponent
} from "./chunk-NM764PDY.js";
import {
  AddPagesComponent
} from "./chunk-4M322X6F.js";
import {
  AutoComplete,
  AutoCompleteModule
} from "./chunk-OE6OK7VB.js";
import {
  ConfirmDialog,
  ConfirmDialogModule
} from "./chunk-W64E4IQL.js";
import {
  Message,
  MessageModule
} from "./chunk-GGIC4QUJ.js";
import {
  UserSettingsComponent
} from "./chunk-2BSWUB25.js";
import {
  StyleCardService
} from "./chunk-XN4WNFGN.js";
import {
  Menu,
  MenuModule
} from "./chunk-PL2PAX7Y.js";
import {
  Dialog,
  DialogModule
} from "./chunk-ILW73YBV.js";
import {
  IftaLabel,
  IftaLabelModule
} from "./chunk-FQDO2XGS.js";
import {
  AidaLinks
} from "./chunk-JNZO32C5.js";
import {
  ProjectStateService
} from "./chunk-KTNEX2EU.js";
import {
  ExportGitHubService
} from "./chunk-GW63RQCY.js";
import {
  CollaboratorService,
  SelectButton,
  SelectButtonModule
} from "./chunk-R6QXKFAV.js";
import {
  GitHubAuthService,
  SignInService
} from "./chunk-NJENQTX6.js";
import {
  ProjectPhase
} from "./chunk-B6BNTBK3.js";
import {
  Select,
  SelectModule
} from "./chunk-JR3PODJQ.js";
import {
  BaseComponent,
  Bind,
  Button,
  ButtonModule,
  DefaultValueAccessor,
  FormsModule,
  InputText,
  InputTextModule,
  MaxLengthValidator,
  NgControlStatus,
  NgModel,
  PARENT_INSTANCE,
  Tooltip,
  TooltipModule,
  marker
} from "./chunk-QN4TTD5X.js";
import {
  BaseStyle,
  CommonModule,
  ConfirmationService,
  HttpClient,
  NgClass,
  NgIf,
  NgTemplateOutlet,
  Router,
  RouterLink,
  SharedModule,
  UserSettingsService,
  environment
} from "./chunk-7YP54JN5.js";
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  Output,
  TranslatePipe,
  TranslateService,
  ViewChild,
  ViewEncapsulation,
  computed,
  effect,
  forwardRef,
  inject,
  input,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-KRHY6Z2H.js";
import {
  __async
} from "./chunk-YCXP4XZS.js";

// node_modules/@primeuix/styles/dist/avatar/index.mjs
var style = "\n    .p-avatar {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        width: dt('avatar.width');\n        height: dt('avatar.height');\n        font-size: dt('avatar.font.size');\n        background: dt('avatar.background');\n        color: dt('avatar.color');\n        border-radius: dt('avatar.border.radius');\n    }\n\n    .p-avatar-image {\n        background: transparent;\n    }\n\n    .p-avatar-circle {\n        border-radius: 50%;\n    }\n\n    .p-avatar-circle img {\n        border-radius: 50%;\n    }\n\n    .p-avatar-icon {\n        font-size: dt('avatar.icon.size');\n        width: dt('avatar.icon.size');\n        height: dt('avatar.icon.size');\n    }\n\n    .p-avatar img {\n        width: 100%;\n        height: 100%;\n    }\n\n    .p-avatar-lg {\n        width: dt('avatar.lg.width');\n        height: dt('avatar.lg.width');\n        font-size: dt('avatar.lg.font.size');\n    }\n\n    .p-avatar-lg .p-avatar-icon {\n        font-size: dt('avatar.lg.icon.size');\n        width: dt('avatar.lg.icon.size');\n        height: dt('avatar.lg.icon.size');\n    }\n\n    .p-avatar-xl {\n        width: dt('avatar.xl.width');\n        height: dt('avatar.xl.width');\n        font-size: dt('avatar.xl.font.size');\n    }\n\n    .p-avatar-xl .p-avatar-icon {\n        font-size: dt('avatar.xl.icon.size');\n        width: dt('avatar.xl.icon.size');\n        height: dt('avatar.xl.icon.size');\n    }\n\n    .p-avatar-group {\n        display: flex;\n        align-items: center;\n    }\n\n    .p-avatar-group .p-avatar + .p-avatar {\n        margin-inline-start: dt('avatar.group.offset');\n    }\n\n    .p-avatar-group .p-avatar {\n        border: 2px solid dt('avatar.group.border.color');\n    }\n\n    .p-avatar-group .p-avatar-lg + .p-avatar-lg {\n        margin-inline-start: dt('avatar.lg.group.offset');\n    }\n\n    .p-avatar-group .p-avatar-xl + .p-avatar-xl {\n        margin-inline-start: dt('avatar.xl.group.offset');\n    }\n";

// node_modules/primeng/fesm2022/primeng-avatar.mjs
var _c0 = ["*"];
function Avatar_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("label"));
    \u0275\u0275property("pBind", ctx_r0.ptm("label"));
    \u0275\u0275attribute("data-p", ctx_r0.dataP);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.label);
  }
}
function Avatar_ng_template_2_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 5);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.icon);
    \u0275\u0275property("pBind", ctx_r0.ptm("icon"))("ngClass", ctx_r0.cx("icon"));
    \u0275\u0275attribute("data-p", ctx_r0.dataP);
  }
}
function Avatar_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Avatar_ng_template_2_span_0_Template, 1, 5, "span", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const imageTemplate_r2 = \u0275\u0275reference(5);
    \u0275\u0275property("ngIf", ctx_r0.icon)("ngIfElse", imageTemplate_r2);
  }
}
function Avatar_ng_template_4_img_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 7);
    \u0275\u0275listener("error", function Avatar_ng_template_4_img_0_Template_img_error_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.imageError($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("pBind", ctx_r0.ptm("image"))("src", ctx_r0.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275attribute("aria-label", ctx_r0.ariaLabel)("data-p", ctx_r0.dataP);
  }
}
function Avatar_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Avatar_ng_template_4_img_0_Template, 1, 4, "img", 6);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r0.image);
  }
}
var classes = {
  root: ({
    instance
  }) => ["p-avatar p-component", {
    "p-avatar-image": instance.image != null,
    "p-avatar-circle": instance.shape === "circle",
    "p-avatar-lg": instance.size === "large",
    "p-avatar-xl": instance.size === "xlarge"
  }],
  label: "p-avatar-label",
  icon: "p-avatar-icon"
};
var AvatarStyle = class _AvatarStyle extends BaseStyle {
  name = "avatar";
  style = style;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AvatarStyle_BaseFactory;
    return function AvatarStyle_Factory(__ngFactoryType__) {
      return (\u0275AvatarStyle_BaseFactory || (\u0275AvatarStyle_BaseFactory = \u0275\u0275getInheritedFactory(_AvatarStyle)))(__ngFactoryType__ || _AvatarStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AvatarStyle,
    factory: _AvatarStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AvatarStyle, [{
    type: Injectable
  }], null, null);
})();
var AvatarClasses;
(function(AvatarClasses2) {
  AvatarClasses2["root"] = "p-avatar";
  AvatarClasses2["label"] = "p-avatar-label";
  AvatarClasses2["icon"] = "p-avatar-icon";
  AvatarClasses2["image"] = "p-avatar-image";
  AvatarClasses2["circle"] = "p-avatar-circle";
  AvatarClasses2["large"] = "p-avatar-lg";
  AvatarClasses2["xlarge"] = "p-avatar-xl";
})(AvatarClasses || (AvatarClasses = {}));
var AVATAR_INSTANCE = new InjectionToken("AVATAR_INSTANCE");
var Avatar = class _Avatar extends BaseComponent {
  componentName = "Avatar";
  $pcAvatar = inject(AVATAR_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  /**
   * Defines the text to display.
   * @group Props
   */
  label;
  /**
   * Defines the icon to display.
   * @group Props
   */
  icon;
  /**
   * Defines the image to display.
   * @group Props
   */
  image;
  /**
   * Size of the element.
   * @group Props
   */
  size = "normal";
  /**
   * Shape of the element.
   * @group Props
   */
  shape = "square";
  /**
   * Class of the element.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Establishes a string value that labels the component.
   * @group Props
   */
  ariaLabel;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * This event is triggered if an error occurs while loading an image file.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onImageError = new EventEmitter();
  _componentStyle = inject(AvatarStyle);
  imageError(event) {
    this.onImageError.emit(event);
  }
  get dataP() {
    return this.cn({
      [this.shape]: this.shape,
      [this.size]: this.size
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Avatar_BaseFactory;
    return function Avatar_Factory(__ngFactoryType__) {
      return (\u0275Avatar_BaseFactory || (\u0275Avatar_BaseFactory = \u0275\u0275getInheritedFactory(_Avatar)))(__ngFactoryType__ || _Avatar);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Avatar,
    selectors: [["p-avatar"]],
    hostVars: 5,
    hostBindings: function Avatar_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledBy)("data-p", ctx.dataP);
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      label: "label",
      icon: "icon",
      image: "image",
      size: "size",
      shape: "shape",
      styleClass: "styleClass",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy"
    },
    outputs: {
      onImageError: "onImageError"
    },
    features: [\u0275\u0275ProvidersFeature([AvatarStyle, {
      provide: AVATAR_INSTANCE,
      useExisting: _Avatar
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Avatar
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 6,
    vars: 2,
    consts: [["iconTemplate", ""], ["imageTemplate", ""], [3, "pBind", "class", 4, "ngIf", "ngIfElse"], [3, "pBind"], [3, "pBind", "class", "ngClass", 4, "ngIf", "ngIfElse"], [3, "pBind", "ngClass"], [3, "pBind", "src", "error", 4, "ngIf"], [3, "error", "pBind", "src"]],
    template: function Avatar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
        \u0275\u0275template(1, Avatar_span_1_Template, 2, 5, "span", 2)(2, Avatar_ng_template_2_Template, 1, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, Avatar_ng_template_4_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const iconTemplate_r4 = \u0275\u0275reference(3);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.label)("ngIfElse", iconTemplate_r4);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, SharedModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Avatar, [{
    type: Component,
    args: [{
      selector: "p-avatar",
      standalone: true,
      imports: [CommonModule, SharedModule, Bind],
      template: `
        <ng-content></ng-content>
        <span [pBind]="ptm('label')" [class]="cx('label')" *ngIf="label; else iconTemplate" [attr.data-p]="dataP">{{ label }}</span>
        <ng-template #iconTemplate><span [pBind]="ptm('icon')" [class]="icon" [ngClass]="cx('icon')" *ngIf="icon; else imageTemplate" [attr.data-p]="dataP"></span></ng-template>
        <ng-template #imageTemplate><img [pBind]="ptm('image')" [src]="image" *ngIf="image" (error)="imageError($event)" [attr.aria-label]="ariaLabel" [attr.data-p]="dataP" /></ng-template>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": "cn(cx('root'), styleClass)",
        "[attr.aria-label]": "ariaLabel",
        "[attr.aria-labelledby]": "ariaLabelledBy",
        "[attr.data-p]": "dataP"
      },
      providers: [AvatarStyle, {
        provide: AVATAR_INSTANCE,
        useExisting: Avatar
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Avatar
      }],
      hostDirectives: [Bind]
    }]
  }], null, {
    label: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    image: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    shape: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    onImageError: [{
      type: Output
    }]
  });
})();
var AvatarModule = class _AvatarModule {
  static \u0275fac = function AvatarModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AvatarModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _AvatarModule,
    imports: [Avatar, SharedModule],
    exports: [Avatar, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Avatar, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AvatarModule, [{
    type: NgModule,
    args: [{
      imports: [Avatar, SharedModule],
      exports: [Avatar, SharedModule]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-avatargroup.mjs
var _c02 = ["*"];
var classes2 = {
  root: "p-avatar-group p-component"
};
var AvatarGroupStyle = class _AvatarGroupStyle extends BaseStyle {
  name = "avatargroup";
  classes = classes2;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AvatarGroupStyle_BaseFactory;
    return function AvatarGroupStyle_Factory(__ngFactoryType__) {
      return (\u0275AvatarGroupStyle_BaseFactory || (\u0275AvatarGroupStyle_BaseFactory = \u0275\u0275getInheritedFactory(_AvatarGroupStyle)))(__ngFactoryType__ || _AvatarGroupStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AvatarGroupStyle,
    factory: _AvatarGroupStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AvatarGroupStyle, [{
    type: Injectable
  }], null, null);
})();
var AvatarGroupClasses;
(function(AvatarGroupClasses2) {
  AvatarGroupClasses2["root"] = "p-avatar-group";
})(AvatarGroupClasses || (AvatarGroupClasses = {}));
var AVATARGROUP_INSTANCE = new InjectionToken("AVATARGROUP_INSTANCE");
var AvatarGroup = class _AvatarGroup extends BaseComponent {
  componentName = "AvatarGroup";
  $pcAvatarGroup = inject(AVATARGROUP_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  /**
   * Style class of the component
   * @group Props
   */
  styleClass;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  get hostStyle() {
    return this.style;
  }
  _componentStyle = inject(AvatarGroupStyle);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AvatarGroup_BaseFactory;
    return function AvatarGroup_Factory(__ngFactoryType__) {
      return (\u0275AvatarGroup_BaseFactory || (\u0275AvatarGroup_BaseFactory = \u0275\u0275getInheritedFactory(_AvatarGroup)))(__ngFactoryType__ || _AvatarGroup);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _AvatarGroup,
    selectors: [["p-avatarGroup"], ["p-avatar-group"], ["p-avatargroup"]],
    hostVars: 4,
    hostBindings: function AvatarGroup_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275styleMap(ctx.hostStyle);
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      styleClass: "styleClass",
      style: "style"
    },
    features: [\u0275\u0275ProvidersFeature([AvatarGroupStyle, {
      provide: AVATARGROUP_INSTANCE,
      useExisting: _AvatarGroup
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _AvatarGroup
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function AvatarGroup_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    dependencies: [CommonModule, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AvatarGroup, [{
    type: Component,
    args: [{
      selector: "p-avatarGroup, p-avatar-group, p-avatargroup",
      standalone: true,
      imports: [CommonModule, SharedModule],
      template: ` <ng-content></ng-content> `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [AvatarGroupStyle, {
        provide: AVATARGROUP_INSTANCE,
        useExisting: AvatarGroup
      }, {
        provide: PARENT_INSTANCE,
        useExisting: AvatarGroup
      }],
      host: {
        "[class]": "cn(cx('root'), styleClass)"
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    styleClass: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    hostStyle: [{
      type: HostBinding,
      args: ["style"]
    }]
  });
})();
var AvatarGroupModule = class _AvatarGroupModule {
  static \u0275fac = function AvatarGroupModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AvatarGroupModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _AvatarGroupModule,
    imports: [AvatarGroup, SharedModule],
    exports: [AvatarGroup, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [AvatarGroup, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AvatarGroupModule, [{
    type: NgModule,
    args: [{
      imports: [AvatarGroup, SharedModule],
      exports: [AvatarGroup, SharedModule]
    }]
  }], null, null);
})();

// src/app/components/add-collaborators/add-collaborators.component.ts
var _c03 = (a0) => ({ $implicit: a0, showName: true });
var _c1 = (a0) => ({ name: a0 });
var _c2 = (a0) => ({ $implicit: a0 });
var _c3 = (a0) => ({ $implicit: a0, showName: false });
var _c4 = (a0) => ({ number: a0 });
var _c5 = (a0, a1) => ({ $implicit: a0, onCancel: a1 });
var _forTrack0 = ($index, $item) => $item.id;
function AddCollaboratorsComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "collaborators._title"));
  }
}
function AddCollaboratorsComponent_Conditional_0_Conditional_1_For_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function AddCollaboratorsComponent_Conditional_0_Conditional_1_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 13);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("onClick", function AddCollaboratorsComponent_Conditional_0_Conditional_1_For_2_Conditional_4_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r1);
      const collab_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.removeCollaborator(collab_r2));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const collab_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind2(1, 1, "collaborators.remove", \u0275\u0275pureFunction1(4, _c1, ctx_r2.collaboratorService.getCollaboratorName(collab_r2))));
  }
}
function AddCollaboratorsComponent_Conditional_0_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "div", 9)(2, "div", 10);
    \u0275\u0275template(3, AddCollaboratorsComponent_Conditional_0_Conditional_1_For_2_ng_container_3_Template, 1, 0, "ng-container", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, AddCollaboratorsComponent_Conditional_0_Conditional_1_For_2_Conditional_4_Template, 2, 6, "p-button", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const collab_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    const collabAvatar_r4 = \u0275\u0275reference(7);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngTemplateOutlet", collabAvatar_r4)("ngTemplateOutletContext", \u0275\u0275pureFunction1(3, _c03, collab_r2));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.collaboratorService.canEditProject(ctx_r2.projectData()) ? 4 : -1);
  }
}
function AddCollaboratorsComponent_Conditional_0_Conditional_1_Conditional_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function AddCollaboratorsComponent_Conditional_0_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AddCollaboratorsComponent_Conditional_0_Conditional_1_Conditional_3_ng_container_0_Template, 1, 0, "ng-container", 11);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    const collabAutocomplete_r5 = \u0275\u0275reference(5);
    \u0275\u0275property("ngTemplateOutlet", collabAutocomplete_r5)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c2, ctx_r2.addSelectedCollaborators));
  }
}
function AddCollaboratorsComponent_Conditional_0_Conditional_1_Conditional_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 16);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("onClick", function AddCollaboratorsComponent_Conditional_0_Conditional_1_Conditional_4_Conditional_4_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.openMailto(ctx_r2.getRequestAccessMailto()));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 1, "collaborators.button.requestAccess"));
  }
}
function AddCollaboratorsComponent_Conditional_0_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-message", 8)(1, "div", 14);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275conditionalCreate(4, AddCollaboratorsComponent_Conditional_0_Conditional_1_Conditional_4_Conditional_4_Template, 2, 3, "p-button", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "collaborators.message.notCollab"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.getRequestAccessMailto() ? 4 : -1);
  }
}
function AddCollaboratorsComponent_Conditional_0_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-message", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "collaborators.message.hasCollab"));
  }
}
function AddCollaboratorsComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 7);
    \u0275\u0275repeaterCreate(1, AddCollaboratorsComponent_Conditional_0_Conditional_1_For_2_Template, 5, 5, "li", null, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, AddCollaboratorsComponent_Conditional_0_Conditional_1_Conditional_3_Template, 1, 4, "ng-container")(4, AddCollaboratorsComponent_Conditional_0_Conditional_1_Conditional_4_Template, 5, 4, "p-message", 8)(5, AddCollaboratorsComponent_Conditional_0_Conditional_1_Conditional_5_Template, 3, 3, "p-message", 6);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.collaborators());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.collaboratorService.canEditProject(ctx_r2.projectData()) ? 3 : ctx_r2.signInService.user() ? 4 : 5);
  }
}
function AddCollaboratorsComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-message", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "collaborators.message.firstCollab"));
  }
}
function AddCollaboratorsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AddCollaboratorsComponent_Conditional_0_Conditional_0_Template, 3, 3, "h2", 5);
    \u0275\u0275conditionalCreate(1, AddCollaboratorsComponent_Conditional_0_Conditional_1_Template, 6, 1)(2, AddCollaboratorsComponent_Conditional_0_Conditional_2_Template, 3, 3, "p-message", 6);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!ctx_r2.noHeader() ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.collaborators().length > 0 ? 1 : 2);
  }
}
function AddCollaboratorsComponent_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "common.collaborators"));
  }
}
function AddCollaboratorsComponent_Conditional_1_Conditional_1_For_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function AddCollaboratorsComponent_Conditional_1_Conditional_1_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 13);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("onClick", function AddCollaboratorsComponent_Conditional_1_Conditional_1_For_2_Conditional_4_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r7);
      const collab_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.removeCollaborator(collab_r8));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const collab_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind2(1, 1, "collaborators.remove", \u0275\u0275pureFunction1(4, _c1, ctx_r2.collaboratorService.getCollaboratorName(collab_r8))));
  }
}
function AddCollaboratorsComponent_Conditional_1_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "div", 9)(2, "div", 10);
    \u0275\u0275template(3, AddCollaboratorsComponent_Conditional_1_Conditional_1_For_2_ng_container_3_Template, 1, 0, "ng-container", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, AddCollaboratorsComponent_Conditional_1_Conditional_1_For_2_Conditional_4_Template, 2, 6, "p-button", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const collab_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    const collabAvatar_r4 = \u0275\u0275reference(7);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngTemplateOutlet", collabAvatar_r4)("ngTemplateOutletContext", \u0275\u0275pureFunction1(3, _c03, collab_r8));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.collaboratorService.canEditProject(ctx_r2.projectData()) ? 4 : -1);
  }
}
function AddCollaboratorsComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 7);
    \u0275\u0275repeaterCreate(1, AddCollaboratorsComponent_Conditional_1_Conditional_1_For_2_Template, 5, 5, "li", null, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.collaborators());
  }
}
function AddCollaboratorsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AddCollaboratorsComponent_Conditional_1_Conditional_0_Template, 3, 3, "h2", 17);
    \u0275\u0275conditionalCreate(1, AddCollaboratorsComponent_Conditional_1_Conditional_1_Template, 3, 0, "ul", 7);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!ctx_r2.noHeader() ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.collaborators().length > 0 ? 1 : -1);
  }
}
function AddCollaboratorsComponent_Conditional_2_Conditional_0_For_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function AddCollaboratorsComponent_Conditional_2_Conditional_0_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AddCollaboratorsComponent_Conditional_2_Conditional_0_For_3_ng_container_0_Template, 1, 0, "ng-container", 11);
  }
  if (rf & 2) {
    const collab_r9 = ctx.$implicit;
    \u0275\u0275nextContext(3);
    const collabAvatar_r4 = \u0275\u0275reference(7);
    \u0275\u0275property("ngTemplateOutlet", collabAvatar_r4)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c3, collab_r9));
  }
}
function AddCollaboratorsComponent_Conditional_2_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-avatar", 20);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("label", "+" + (ctx_r2.collaborators().length - ctx_r2.maxVisibleCollaborators).toString())("pTooltip", \u0275\u0275pipeBind2(1, 2, "collaborators.plusMore", \u0275\u0275pureFunction1(5, _c4, ctx_r2.collaborators().length - ctx_r2.maxVisibleCollaborators)));
  }
}
function AddCollaboratorsComponent_Conditional_2_Conditional_0_Conditional_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 23);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("onClick", function AddCollaboratorsComponent_Conditional_2_Conditional_0_Conditional_5_Conditional_0_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.openShareDialog());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(1, 1, "collaborators.addCollab"));
  }
}
function AddCollaboratorsComponent_Conditional_2_Conditional_0_Conditional_5_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function AddCollaboratorsComponent_Conditional_2_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, AddCollaboratorsComponent_Conditional_2_Conditional_0_Conditional_5_Conditional_0_Template, 2, 3, "p-button", 21);
    \u0275\u0275elementStart(1, "p-dialog", 22);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275twoWayListener("visibleChange", function AddCollaboratorsComponent_Conditional_2_Conditional_0_Conditional_5_Template_p_dialog_visibleChange_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.showShareDialog, $event) || (ctx_r2.showShareDialog = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(3, AddCollaboratorsComponent_Conditional_2_Conditional_0_Conditional_5_ng_container_3_Template, 1, 0, "ng-container", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    const collabAutocomplete_r5 = \u0275\u0275reference(5);
    \u0275\u0275conditional(ctx_r2.collaboratorService.canEditProject(ctx_r2.projectData()) ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("visible", ctx_r2.showShareDialog);
    \u0275\u0275property("header", \u0275\u0275pipeBind1(2, 6, "collaborators.addCollab"))("modal", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", collabAutocomplete_r5)("ngTemplateOutletContext", \u0275\u0275pureFunction2(8, _c5, ctx_r2.addAndCloseShareDialog, ctx_r2.closeShareDialog));
  }
}
function AddCollaboratorsComponent_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "p-avatar-group");
    \u0275\u0275repeaterCreate(2, AddCollaboratorsComponent_Conditional_2_Conditional_0_For_3_Template, 1, 4, "ng-container", null, _forTrack0);
    \u0275\u0275conditionalCreate(4, AddCollaboratorsComponent_Conditional_2_Conditional_0_Conditional_4_Template, 2, 7, "p-avatar", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, AddCollaboratorsComponent_Conditional_2_Conditional_0_Conditional_5_Template, 4, 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.collaborators().slice(0, ctx_r2.maxVisibleCollaborators));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.collaborators().length > ctx_r2.maxVisibleCollaborators ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.mode() === "dashboard" ? 5 : -1);
  }
}
function AddCollaboratorsComponent_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "common.none"));
  }
}
function AddCollaboratorsComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AddCollaboratorsComponent_Conditional_2_Conditional_0_Template, 6, 2, "div", 18)(1, AddCollaboratorsComponent_Conditional_2_Conditional_1_Template, 3, 3, "p", 19);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.collaborators().length > 0 ? 0 : 1);
  }
}
function AddCollaboratorsComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-confirmdialog", 4);
  }
}
function AddCollaboratorsComponent_ng_template_4_ng_template_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function AddCollaboratorsComponent_ng_template_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275template(1, AddCollaboratorsComponent_ng_template_4_ng_template_2_ng_container_1_Template, 1, 0, "ng-container", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const collab_r13 = ctx.$implicit;
    \u0275\u0275nextContext(2);
    const collabAvatar_r4 = \u0275\u0275reference(7);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", collabAvatar_r4)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c03, collab_r13));
  }
}
function AddCollaboratorsComponent_ng_template_4_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const selected_r14 = ctx.$implicit;
    \u0275\u0275textInterpolate(selected_r14.login);
  }
}
function AddCollaboratorsComponent_ng_template_4_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 30);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("onClick", function AddCollaboratorsComponent_ng_template_4_Conditional_10_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r15);
      const onCancel_r16 = \u0275\u0275nextContext().onCancel;
      return \u0275\u0275resetView(onCancel_r16());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 1, "common.cancel"));
  }
}
function AddCollaboratorsComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-iftalabel")(1, "p-autocomplete", 24);
    \u0275\u0275twoWayListener("ngModelChange", function AddCollaboratorsComponent_ng_template_4_Template_p_autocomplete_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.selectedCollaborators, $event) || (ctx_r2.selectedCollaborators = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("completeMethod", function AddCollaboratorsComponent_ng_template_4_Template_p_autocomplete_completeMethod_1_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filterCollaborators($event));
    })("onDropdownClick", function AddCollaboratorsComponent_ng_template_4_Template_p_autocomplete_onDropdownClick_1_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDropdownClick());
    })("onSelect", function AddCollaboratorsComponent_ng_template_4_Template_p_autocomplete_onSelect_1_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCollabSelect($event));
    });
    \u0275\u0275template(2, AddCollaboratorsComponent_ng_template_4_ng_template_2_Template, 2, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(4, AddCollaboratorsComponent_ng_template_4_ng_template_4_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "label", 25);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 26);
    \u0275\u0275conditionalCreate(10, AddCollaboratorsComponent_ng_template_4_Conditional_10_Template, 2, 3, "p-button", 27);
    \u0275\u0275elementStart(11, "p-button", 28);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275listener("onClick", function AddCollaboratorsComponent_ng_template_4_Template_p_button_onClick_11_listener() {
      const onAdd_r17 = \u0275\u0275restoreView(_r12).$implicit;
      return \u0275\u0275resetView(onAdd_r17());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const onCancel_r16 = ctx.onCancel;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.selectedCollaborators);
    \u0275\u0275property("appendTo", "body")("dropdown", true)("maxlength", 39)("multiple", true)("pKeyFilter", ctx_r2.collabFilter)("suggestions", ctx_r2.filteredCollaborators());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 11, "collaborators.label.select"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(onCancel_r16 ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.selectedCollaborators.length === 0)("label", \u0275\u0275pipeBind1(12, 13, "common.add"));
  }
}
function AddCollaboratorsComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-avatar", 31);
    \u0275\u0275text(1);
  }
  if (rf & 2) {
    const collab_r18 = ctx.$implicit;
    const showName_r19 = ctx.showName;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("image", collab_r18.avatar_url || void 0)("label", collab_r18.avatar_url ? void 0 : ctx_r2.collaboratorService.getCollaboratorInitials(collab_r18))("ngClass", ctx_r2.collaboratorService.getCollaboratorColorClass(collab_r18))("pTooltip", showName_r19 ? void 0 : ctx_r2.collaboratorService.getCollaboratorName(collab_r18));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", showName_r19 ? ctx_r2.collaboratorService.getCollaboratorName(collab_r18) : void 0, "\n");
  }
}
var AddCollaboratorsComponent = class _AddCollaboratorsComponent {
  translate = inject(TranslateService);
  confirmationService = inject(ConfirmationService);
  projectState = inject(ProjectStateService);
  collaboratorService = inject(CollaboratorService);
  signInService = inject(SignInService);
  /** Display modes: list, view, dashboard, or switch */
  mode = input("list", ...ngDevMode ? [{ debugName: "mode" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Only used to display collaborators for non-active projects, leave undefined for the active project */
  collabs = input(null, ...ngDevMode ? [{ debugName: "collabs" }] : (
    /* istanbul ignore next */
    []
  ));
  noHeader = input(false, ...ngDevMode ? [{ debugName: "noHeader" }] : (
    /* istanbul ignore next */
    []
  ));
  maxVisibleCollaborators = 5;
  projectData = this.projectState.getProject;
  collaborators = computed(() => this.collabs() ?? this.projectData().collaborators, ...ngDevMode ? [{ debugName: "collaborators" }] : (
    /* istanbul ignore next */
    []
  ));
  /**  Remove collaborator (with confirmation for removing self) */
  removeCollaborator(collab) {
    const currentUser = this.signInService.user();
    if (currentUser && collab.id === currentUser.id) {
      this.confirmationService.confirm({
        key: "collab",
        icon: "pi pi-exclamation-triangle",
        header: this.translate.instant("collaborators.confirm.removeSelf.header"),
        message: this.translate.instant("collaborators.confirm.removeSelf.message"),
        acceptButtonProps: {
          label: this.translate.instant("collaborators.confirm.removeSelf.accept"),
          severity: "danger"
        },
        rejectButtonProps: {
          label: this.translate.instant("common.cancel"),
          severity: "secondary",
          outlined: true
        },
        accept: () => {
          this.removeUser(collab);
          console.warn("You removed yourself from the project. You will no longer be able to save changes to the cloud.");
        }
      });
    } else {
      this.removeUser(collab);
    }
  }
  removeUser(collab) {
    const updatedProject = this.collaboratorService.removeCollaborator(this.projectData(), collab);
    this.projectState.setProject(updatedProject, "update");
  }
  // Variables for autocomplete dropdown
  orgMembers = signal([], ...ngDevMode ? [{ debugName: "orgMembers" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedCollaborators = [];
  filteredCollaborators = signal([], ...ngDevMode ? [{ debugName: "filteredCollaborators" }] : (
    /* istanbul ignore next */
    []
  ));
  collabFilter = /^[a-zA-Z0-9-]*$/;
  // Initialize dropdown with org members
  constructor() {
    effect(() => {
      const owner = this.projectState.getGitHub().owner;
      if (owner) {
        this.setMembers(owner);
      }
    });
  }
  /** Populate dropdown list with members of a GitHub org */
  setMembers(owner) {
    return __async(this, null, function* () {
      this.orgMembers.set(yield this.collaboratorService.getOrgMembers(owner));
      this.filteredCollaborators.set([...this.orgMembers()]);
    });
  }
  /** Filter collaborators:
   ** show all if empty
   ** otherwise filter by startsWith and then includes
   ** otherwise try to fetch user
   *
   * Note: existing collaborators are not filtered out. This form can be used to update their user info.
   */
  filterCollaborators(event) {
    return __async(this, null, function* () {
      const query = event.query?.trim().toLowerCase().replace(/^-+|-+$/g, "").replace(/-{2,}/g, "-").substring(0, 39) || "";
      if (query.length === 0) {
        this.filteredCollaborators.set(this.orgMembers());
        return;
      }
      const startsWith = this.orgMembers().filter((user) => user.login.toLowerCase().startsWith(query));
      const includes = this.orgMembers().filter((user) => user.login.toLowerCase().includes(query) && !user.login.toLowerCase().startsWith(query));
      this.filteredCollaborators.set(Array.from(/* @__PURE__ */ new Set([...startsWith, ...includes])));
      if (this.filteredCollaborators().length === 0) {
        const userDetails = yield this.collaboratorService.getUserDetails(query);
        if (userDetails) {
          this.filteredCollaborators.set([userDetails]);
        }
      }
    });
  }
  /**  Find and update user details when a collaborator is selected (name and email will be missing initially)*/
  onCollabSelect(event) {
    return __async(this, null, function* () {
      const selected = event.value;
      if (!selected.name && !selected.email) {
        const details = yield this.collaboratorService.getUserDetails(selected.login);
        if (details) {
          const index = this.selectedCollaborators.findIndex((c) => c.id === selected.id);
          if (index !== -1) {
            this.selectedCollaborators[index] = details;
          }
        }
      }
    });
  }
  /** Reset the filter */
  onDropdownClick() {
    this.filteredCollaborators.set([...this.orgMembers()]);
  }
  /** Add selected collaborators to project */
  addSelectedCollaborators = () => {
    if (this.selectedCollaborators.length === 0)
      return;
    const updatedProject = this.collaboratorService.addCollaborators(this.projectData(), this.selectedCollaborators);
    this.projectState.setProject(updatedProject, "update");
    this.selectedCollaborators = [];
  };
  // For share button (group mode)
  showShareDialog = false;
  openShareDialog() {
    this.showShareDialog = true;
  }
  closeShareDialog = () => {
    this.showShareDialog = false;
    this.selectedCollaborators = [];
  };
  /** Add selected collaborators to project and close the share dialog */
  addAndCloseShareDialog = () => {
    this.addSelectedCollaborators();
    this.closeShareDialog();
  };
  /** Format request access email (returns an empty string if no emails available for existing collaborators) */
  getRequestAccessMailto() {
    const emails = this.collaboratorService.getCollaboratorEmails(this.collaborators());
    if (emails.length === 0)
      return "";
    const name = this.projectData().projectName;
    const user = this.signInService.user();
    const subject = this.translate.instant("collaborators.email.requestAccess.subject", { name });
    const bodyEn = this.translate.instant("collaborators.email.requestAccess.bodyEN", { user, name });
    const bodyFr = this.translate.instant("collaborators.email.requestAccess.bodyFR", { user, name });
    const body = `${bodyEn}



${bodyFr}`;
    return `mailto:${emails.join(",")}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
  /** Open preformated mailto in users registered mail client */
  openMailto(mailto) {
    window.open(mailto, "_self");
  }
  static \u0275fac = function AddCollaboratorsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddCollaboratorsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddCollaboratorsComponent, selectors: [["aida-add-collaborators"]], inputs: { mode: [1, "mode"], collabs: [1, "collabs"], noHeader: [1, "noHeader"] }, decls: 8, vars: 4, consts: [["collabAutocomplete", ""], ["collabAvatar", ""], ["item", ""], ["selectedItem", ""], ["key", "collab"], [1, "text-2xl", "my-1"], ["icon", "pi pi-info-circle font-bold", "severity", "info"], [1, "list-unstyled"], ["icon", "pi pi-exclamation-triangle font-bold", "severity", "warn"], [1, "flex", "flex-row", "justify-content-between", "align-items-center", "gap-2"], [1, "flex", "align-items-center", "gap-2"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["icon", "pi pi-trash", "rounded", "", "severity", "danger", "text", "", 3, "pTooltip"], ["icon", "pi pi-trash", "rounded", "", "severity", "danger", "text", "", 3, "onClick", "pTooltip"], [1, "flex", "flex-row", "justify-content-between", "align-items-center"], ["icon", "pi pi-envelope", "link", "", "severity", "secondary", "size", "small", "styleClass", "mt-2", 3, "label"], ["icon", "pi pi-envelope", "link", "", "severity", "secondary", "size", "small", "styleClass", "mt-2", 3, "onClick", "label"], [1, "text-xl", "my-1"], [1, "flex", "flex-row", "align-content-center"], [1, "text-md", "my-0"], ["shape", "circle", "tooltipPosition", "top", 1, "mb-2", 3, "label", "pTooltip"], ["icon", "pi pi-share-alt", "rounded", "", "size", "small", "text", "", 3, "pTooltip"], ["styleClass", "w-12 md:w-8 lg:w-6", 3, "visibleChange", "visible", "header", "modal"], ["icon", "pi pi-share-alt", "rounded", "", "size", "small", "text", "", 3, "onClick", "pTooltip"], ["id", "collab", "fluid", "", "optionLabel", "login", "size", "small", 3, "ngModelChange", "completeMethod", "onDropdownClick", "onSelect", "ngModel", "appendTo", "dropdown", "maxlength", "multiple", "pKeyFilter", "suggestions"], ["for", "collab"], [1, "flex", "justify-content-end", "gap-2", "mt-2"], ["outlined", "", "severity", "secondary", "styleClass", "secondary-outline", 3, "label"], ["icon", "pi pi-plus", 3, "onClick", "disabled", "label"], [1, "flex", "flex-row", "gap-2", "align-items-center"], ["outlined", "", "severity", "secondary", "styleClass", "secondary-outline", 3, "onClick", "label"], ["shape", "circle", "tooltipPosition", "top", 1, "mb-2", 3, "image", "label", "ngClass", "pTooltip"]], template: function AddCollaboratorsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, AddCollaboratorsComponent_Conditional_0_Template, 3, 2);
      \u0275\u0275conditionalCreate(1, AddCollaboratorsComponent_Conditional_1_Template, 2, 2);
      \u0275\u0275conditionalCreate(2, AddCollaboratorsComponent_Conditional_2_Template, 2, 1);
      \u0275\u0275conditionalCreate(3, AddCollaboratorsComponent_Conditional_3_Template, 1, 0, "p-confirmdialog", 4);
      \u0275\u0275template(4, AddCollaboratorsComponent_ng_template_4_Template, 13, 15, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(6, AddCollaboratorsComponent_ng_template_6_Template, 2, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.mode() === "list" ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.mode() === "view" ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.mode() === "dashboard" || ctx.mode() === "switch" ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.mode() === "list" ? 3 : -1);
    }
  }, dependencies: [CommonModule, NgClass, NgTemplateOutlet, FormsModule, NgControlStatus, MaxLengthValidator, NgModel, AutoCompleteModule, AutoComplete, AvatarGroupModule, AvatarGroup, AvatarModule, Avatar, ButtonModule, Button, ConfirmDialogModule, ConfirmDialog, DialogModule, Dialog, IftaLabelModule, IftaLabel, KeyFilterModule, KeyFilter, MessageModule, Message, TooltipModule, Tooltip, TranslatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddCollaboratorsComponent, [{
    type: Component,
    args: [{ selector: "aida-add-collaborators", imports: [
      CommonModule,
      FormsModule,
      TranslatePipe,
      AutoCompleteModule,
      AvatarGroupModule,
      AvatarModule,
      ButtonModule,
      ConfirmDialogModule,
      DialogModule,
      IftaLabelModule,
      KeyFilterModule,
      MessageModule,
      TooltipModule
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<!-- LIST MODE -->
@if (mode() === 'list') {
  @if (!noHeader()) {
    <h2 class="text-2xl my-1">{{ 'collaborators._title' | translate }}</h2>
  }
  @if (collaborators().length > 0) {
    <ul class="list-unstyled">
      @for (collab of collaborators(); track collab.id) {
        <li>
          <div class="flex flex-row justify-content-between align-items-center gap-2">
            <div class="flex align-items-center gap-2">
              <ng-container *ngTemplateOutlet="collabAvatar; context: { $implicit: collab, showName: true }" />
            </div>
            @if (collaboratorService.canEditProject(projectData())) {
              <p-button
                [pTooltip]="'collaborators.remove' | translate: { name: collaboratorService.getCollaboratorName(collab) }"
                (onClick)="removeCollaborator(collab)"
                icon="pi pi-trash"
                rounded
                severity="danger"
                text
              />
            }
          </div>
        </li>
      }
    </ul>
    @if (collaboratorService.canEditProject(projectData())) {
      <ng-container *ngTemplateOutlet="collabAutocomplete; context: { $implicit: addSelectedCollaborators }" />
    } @else if (signInService.user()) {
      <p-message icon="pi pi-exclamation-triangle font-bold" severity="warn">
        <div class="flex flex-row justify-content-between align-items-center">
          {{ 'collaborators.message.notCollab' | translate }}
          @if (getRequestAccessMailto()) {
            <p-button
              [label]="'collaborators.button.requestAccess' | translate"
              (onClick)="openMailto(getRequestAccessMailto())"
              icon="pi pi-envelope"
              link
              severity="secondary"
              size="small"
              styleClass="mt-2"
            />
          }
        </div>
      </p-message>
    } @else {
      <p-message icon="pi pi-info-circle font-bold" severity="info">{{ 'collaborators.message.hasCollab' | translate }}</p-message>
    }
  } @else {
    <p-message icon="pi pi-info-circle font-bold" severity="info">{{ 'collaborators.message.firstCollab' | translate }}</p-message>
  }
}
<!--VIEW MODE-->
@if (mode() === 'view') {
  @if (!noHeader()) {
    <h2 class="text-xl my-1">{{ 'common.collaborators' | translate }}</h2>
  }
  @if (collaborators().length > 0) {
    <ul class="list-unstyled">
      @for (collab of collaborators(); track collab.id) {
        <li>
          <div class="flex flex-row justify-content-between align-items-center gap-2">
            <div class="flex align-items-center gap-2">
              <ng-container *ngTemplateOutlet="collabAvatar; context: { $implicit: collab, showName: true }" />
            </div>
            @if (collaboratorService.canEditProject(projectData())) {
              <p-button
                [pTooltip]="'collaborators.remove' | translate: { name: collaboratorService.getCollaboratorName(collab) }"
                (onClick)="removeCollaborator(collab)"
                icon="pi pi-trash"
                rounded
                severity="danger"
                text
              />
            }
          </div>
        </li>
      }
    </ul>
  }
}
<!-- GROUP MODE -->
@if (mode() === 'dashboard' || mode() === 'switch') {
  @if (collaborators().length > 0) {
    <div class="flex flex-row align-content-center">
      <p-avatar-group>
        @for (collab of collaborators().slice(0, maxVisibleCollaborators); track collab.id) {
          <ng-container *ngTemplateOutlet="collabAvatar; context: { $implicit: collab, showName: false }" />
        }
        @if (collaborators().length > maxVisibleCollaborators) {
          <p-avatar
            [label]="'+' + (collaborators().length - maxVisibleCollaborators).toString()"
            [pTooltip]="'collaborators.plusMore' | translate: { number: collaborators().length - maxVisibleCollaborators }"
            class="mb-2"
            shape="circle"
            tooltipPosition="top"
          />
        }
      </p-avatar-group>
      @if (mode() === 'dashboard') {
        @if (collaboratorService.canEditProject(projectData())) {
          <p-button [pTooltip]="'collaborators.addCollab' | translate" (onClick)="openShareDialog()" icon="pi pi-share-alt" rounded size="small" text />
        }
        <p-dialog [(visible)]="showShareDialog" [header]="'collaborators.addCollab' | translate" [modal]="true" styleClass="w-12 md:w-8 lg:w-6">
          <ng-container *ngTemplateOutlet="collabAutocomplete; context: { $implicit: addAndCloseShareDialog, onCancel: closeShareDialog }" />
        </p-dialog>
      }
    </div>
  } @else {
    <p class="text-md my-0">{{ 'common.none' | translate }}</p>
  }
}

<!--Confirmation dialog-->
@if (mode() === 'list') {
  <p-confirmdialog key="collab" />
}

<!--Autocomplete dropdown template-->
<ng-template #collabAutocomplete let-onAdd let-onCancel="onCancel">
  <p-iftalabel>
    <p-autocomplete
      id="collab"
      [(ngModel)]="selectedCollaborators"
      [appendTo]="'body'"
      [dropdown]="true"
      [maxlength]="39"
      [multiple]="true"
      [pKeyFilter]="collabFilter"
      [suggestions]="filteredCollaborators()"
      (completeMethod)="filterCollaborators($event)"
      (onDropdownClick)="onDropdownClick()"
      (onSelect)="onCollabSelect($event)"
      fluid
      optionLabel="login"
      size="small"
    >
      <ng-template #item let-collab>
        <div class="flex flex-row gap-2 align-items-center">
          <ng-container *ngTemplateOutlet="collabAvatar; context: { $implicit: collab, showName: true }" />
        </div>
      </ng-template>
      <ng-template #selectedItem let-selected>{{ selected.login }}</ng-template>
    </p-autocomplete>
    <label for="collab">{{ 'collaborators.label.select' | translate }}</label>
  </p-iftalabel>
  <div class="flex justify-content-end gap-2 mt-2">
    @if (onCancel) {
      <p-button [label]="'common.cancel' | translate" (onClick)="onCancel()" outlined severity="secondary" styleClass="secondary-outline" />
    }
    <p-button [disabled]="selectedCollaborators.length === 0" [label]="'common.add' | translate" (onClick)="onAdd()" icon="pi pi-plus" />
  </div>
</ng-template>

<!--Avatar template-->
<ng-template #collabAvatar let-collab let-showName="showName">
  <p-avatar
    [image]="collab.avatar_url || undefined"
    [label]="collab.avatar_url ? undefined : collaboratorService.getCollaboratorInitials(collab)"
    [ngClass]="collaboratorService.getCollaboratorColorClass(collab)"
    [pTooltip]="showName ? undefined : collaboratorService.getCollaboratorName(collab)"
    class="mb-2"
    shape="circle"
    tooltipPosition="top"
  />
  {{ showName ? collaboratorService.getCollaboratorName(collab) : undefined }}
</ng-template>
` }]
  }], () => [], { mode: [{ type: Input, args: [{ isSignal: true, alias: "mode", required: false }] }], collabs: [{ type: Input, args: [{ isSignal: true, alias: "collabs", required: false }] }], noHeader: [{ type: Input, args: [{ isSignal: true, alias: "noHeader", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddCollaboratorsComponent, { className: "AddCollaboratorsComponent", filePath: "src/app/components/add-collaborators/add-collaborators.component.ts", lineNumber: 52 });
})();

// src/app/components/sign-in/sign-in-button/sign-in-button.component.ts
var _c04 = ["*"];
var _c12 = () => ({ width: "50vw" });
var _c22 = () => ({ "1199px": "75vw", "575": "90vw" });
function SignInButtonComponent_Conditional_0_Conditional_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, item_r2.label));
  }
}
function SignInButtonComponent_Conditional_0_Conditional_0_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 17);
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
function SignInButtonComponent_Conditional_0_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-avatar", 18);
    \u0275\u0275elementStart(1, "div", 19);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "i", 20);
  }
  if (rf & 2) {
    const user_r5 = ctx;
    \u0275\u0275property("image", user_r5.avatar_url);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r5.name || user_r5.login);
  }
}
function SignInButtonComponent_Conditional_0_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 21);
    \u0275\u0275elementStart(1, "div", 22);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "i", 20);
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "common.signin"));
  }
}
function SignInButtonComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-menu", 14, 0);
    \u0275\u0275template(2, SignInButtonComponent_Conditional_0_Conditional_0_ng_template_2_Template, 3, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(4, SignInButtonComponent_Conditional_0_Conditional_0_ng_template_4_Template, 5, 5, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p-button", 15);
    \u0275\u0275listener("onClick", function SignInButtonComponent_Conditional_0_Conditional_0_Template_p_button_onClick_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      const menu_r4 = \u0275\u0275reference(1);
      return \u0275\u0275resetView(menu_r4.toggle($event));
    });
    \u0275\u0275conditionalCreate(7, SignInButtonComponent_Conditional_0_Conditional_0_Conditional_7_Template, 4, 2)(8, SignInButtonComponent_Conditional_0_Conditional_0_Conditional_8_Template, 5, 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_8_0;
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275property("model", ctx_r5.items)("popup", true);
    \u0275\u0275advance(6);
    \u0275\u0275property("outlined", true);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_8_0 = ctx_r5.signInService.user()) ? 7 : 8, tmp_8_0);
  }
}
function SignInButtonComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 23);
    \u0275\u0275listener("onClick", function SignInButtonComponent_Conditional_0_Conditional_1_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.connectGitHub());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275property("label", ctx_r5.customText());
  }
}
function SignInButtonComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SignInButtonComponent_Conditional_0_Conditional_0_Template, 9, 4)(1, SignInButtonComponent_Conditional_0_Conditional_1_Template, 1, 1, "p-button", 13);
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!ctx_r5.customText() ? 0 : 1);
  }
}
function SignInButtonComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
var SignInButtonComponent = class _SignInButtonComponent {
  router = inject(Router);
  authService = inject(GitHubAuthService);
  signInService = inject(SignInService);
  translate = inject(TranslateService);
  customText = input(void 0, ...ngDevMode ? [{ debugName: "customText" }] : (
    /* istanbul ignore next */
    []
  ));
  customContent = input(false, ...ngDevMode ? [{ debugName: "customContent" }] : (
    /* istanbul ignore next */
    []
  ));
  // Variables
  showPatSignIn = signal(false, ...ngDevMode ? [{ debugName: "showPatSignIn" }] : (
    /* istanbul ignore next */
    []
  ));
  showSettings = signal(false, ...ngDevMode ? [{ debugName: "showSettings" }] : (
    /* istanbul ignore next */
    []
  ));
  connectGitHub() {
    if (this.signInService.isApiGatewayAccessible()) {
      this.authService.login();
    } else {
      this.showPatSignIn.set(true);
    }
  }
  validatePAT() {
    return __async(this, null, function* () {
      this.showPatSignIn.set(false);
      yield this.signInService.validatePAT();
    });
  }
  get items() {
    const dropdownOptions = [
      {
        label: this.translate.instant("common.profile"),
        items: [
          {
            label: this.translate.instant("settings._title"),
            icon: "pi pi-cog",
            command: () => {
              this.showSettings.set(true);
            }
          }
        ]
      },
      {
        label: this.translate.instant("common.projects"),
        items: [
          {
            label: this.translate.instant("project._nav.new"),
            icon: "pi pi-plus",
            command: () => {
              this.router.navigate([AidaLinks.NewProject]);
            }
          },
          {
            label: this.translate.instant("switch._title"),
            icon: "pi pi-folder-open",
            command: () => {
              this.router.navigate([AidaLinks.AllProjects]);
            }
          }
        ]
      }
    ];
    if (!this.signInService.user()) {
      dropdownOptions[0].items.unshift({
        label: this.translate.instant("common.signin"),
        icon: "pi pi-sign-in",
        command: () => {
          this.connectGitHub();
        }
      });
    } else {
      dropdownOptions[0].items.unshift({
        label: this.translate.instant("common.signout"),
        icon: "pi pi-sign-out",
        command: () => {
          console.log(this.signInService.user());
          this.authService.logout();
          this.signInService.clearPAT();
        }
      });
    }
    return dropdownOptions;
  }
  static \u0275fac = function SignInButtonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SignInButtonComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignInButtonComponent, selectors: [["aida-sign-in-button"]], inputs: { customText: [1, "customText"], customContent: [1, "customContent"] }, ngContentSelectors: _c04, decls: 23, vars: 25, consts: [["menu", ""], ["submenuheader", ""], ["item", ""], ["appendTo", "body", 1, "w-12", "lg:w-8", 3, "visibleChange", "header", "modal", "visible"], [1, "flex", "flex-row", "align-items-center", "gap-3", "-mt-2"], [1, "pi", "pi-key", "text-6xl", "text-900"], [1, "w-full"], [1, "text-sm", "text-color-secondary", "my-2"], [1, "flex", "justify-content-end", "mt-2"], [3, "onClick", "label"], ["appendTo", "body", 3, "visibleChange", "breakpoints", "header", "modal", "visible"], [1, "flex", "flex-row", "align-items-center", "gap-3"], [1, "pi", "pi-cog", "text-6xl", "text-900"], ["fluid", "", "icon", "pi pi-sign-in", 3, "label"], [3, "model", "popup"], ["outlined", "", "rounded", "", "size", "small", "styleClass", "secondary-outline p-1", 3, "onClick", "outlined"], [1, "text-primary", "font-bold"], [1, "p-menu-item-link"], ["shape", "circle", 3, "image"], [1, "font-semibold", "pr-2"], [1, "pi", "pi-angle-down", "text-primary", "text-lg", "pr-1"], [1, "pi", "pi-github", "text-4xl", "text-color-secondary"], [1, "font-semibold"], ["fluid", "", "icon", "pi pi-sign-in", 3, "onClick", "label"]], template: function SignInButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275conditionalCreate(0, SignInButtonComponent_Conditional_0_Template, 2, 1)(1, SignInButtonComponent_Conditional_1_Template, 1, 0);
      \u0275\u0275elementStart(2, "p-dialog", 3);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275listener("visibleChange", function SignInButtonComponent_Template_p_dialog_visibleChange_2_listener($event) {
        return ctx.showPatSignIn.set($event);
      });
      \u0275\u0275elementStart(4, "div", 4);
      \u0275\u0275element(5, "i", 5);
      \u0275\u0275elementStart(6, "div", 6)(7, "p", 7);
      \u0275\u0275text(8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(10, "aida-pat");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 8)(12, "p-button", 9);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275listener("onClick", function SignInButtonComponent_Template_p_button_onClick_12_listener() {
        return ctx.validatePAT();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "p-dialog", 10);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275listener("visibleChange", function SignInButtonComponent_Template_p_dialog_visibleChange_14_listener($event) {
        return ctx.showSettings.set($event);
      });
      \u0275\u0275elementStart(16, "div", 11);
      \u0275\u0275element(17, "i", 12);
      \u0275\u0275elementStart(18, "div", 6);
      \u0275\u0275element(19, "aida-user-settings");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 8)(21, "p-button", 9);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275listener("onClick", function SignInButtonComponent_Template_p_button_onClick_21_listener() {
        return ctx.showSettings.set(false);
      });
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275conditional(!ctx.customContent() ? 0 : 1);
      \u0275\u0275advance(2);
      \u0275\u0275property("header", \u0275\u0275pipeBind1(3, 13, "github.connect.pat.header"))("modal", true)("visible", ctx.showPatSignIn());
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 15, "github.connect.pat.description"));
      \u0275\u0275advance(4);
      \u0275\u0275property("label", \u0275\u0275pipeBind1(13, 17, "common.signin"));
      \u0275\u0275advance(2);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(23, _c12));
      \u0275\u0275property("breakpoints", \u0275\u0275pureFunction0(24, _c22))("header", \u0275\u0275pipeBind1(15, 19, "settings._title"))("modal", true)("visible", ctx.showSettings());
      \u0275\u0275advance(7);
      \u0275\u0275property("label", \u0275\u0275pipeBind1(22, 21, "common.close"));
    }
  }, dependencies: [AvatarModule, Avatar, ButtonModule, Button, DialogModule, Dialog, MenuModule, Menu, PatComponent, UserSettingsComponent, TranslatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignInButtonComponent, [{
    type: Component,
    args: [{ selector: "aida-sign-in-button", imports: [TranslatePipe, AvatarModule, ButtonModule, DialogModule, MenuModule, PatComponent, UserSettingsComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `@if (!customContent()) {
  @if (!customText()) {
    <p-menu [model]="items" [popup]="true" #menu>
      <ng-template #submenuheader let-item>
        <span class="text-primary font-bold">{{ item.label | translate }}</span>
      </ng-template>
      <ng-template #item let-item>
        <a class="p-menu-item-link">
          <i [class]="item.icon"></i>
          <span>{{ item.label | translate }}</span>
        </a>
      </ng-template>
    </p-menu>

    <p-button [outlined]="true" (onClick)="menu.toggle($event)" outlined rounded size="small" styleClass="secondary-outline p-1">
      @if (signInService.user(); as user) {
        <p-avatar [image]="user.avatar_url" shape="circle" />
        <div class="font-semibold pr-2">{{ user.name || user.login }}</div>
        <i class="pi pi-angle-down text-primary text-lg pr-1"></i>
      } @else {
        <i class="pi pi-github text-4xl text-color-secondary"></i>
        <div class="font-semibold">{{ 'common.signin' | translate }}</div>
        <i class="pi pi-angle-down text-primary text-lg pr-1"></i>
      }
    </p-button>
  } @else {
    <p-button [label]="customText()" (onClick)="connectGitHub()" fluid icon="pi pi-sign-in" />
  }
} @else {
  <ng-content />
}

<p-dialog [header]="'github.connect.pat.header' | translate" [modal]="true" [visible]="showPatSignIn()" (visibleChange)="showPatSignIn.set($event)" class="w-12 lg:w-8" appendTo="body">
  <div class="flex flex-row align-items-center gap-3 -mt-2">
    <i class="pi pi-key text-6xl text-900"></i>
    <div class="w-full">
      <p class="text-sm text-color-secondary my-2">{{ 'github.connect.pat.description' | translate }}</p>
      <aida-pat />
    </div>
  </div>
  <div class="flex justify-content-end mt-2">
    <p-button [label]="'common.signin' | translate" (onClick)="validatePAT()" />
  </div>
</p-dialog>

<p-dialog
  [breakpoints]="{ '1199px': '75vw', '575': '90vw' }"
  [header]="'settings._title' | translate"
  [modal]="true"
  [style]="{ width: '50vw' }"
  [visible]="showSettings()"
  (visibleChange)="showSettings.set($event)"
  appendTo="body"
>
  <div class="flex flex-row align-items-center gap-3">
    <i class="pi pi-cog text-6xl text-900"></i>
    <div class="w-full">
      <aida-user-settings />
    </div>
  </div>
  <div class="flex justify-content-end mt-2">
    <p-button [label]="'common.close' | translate" (onClick)="showSettings.set(false)" />
  </div>
</p-dialog>
` }]
  }], null, { customText: [{ type: Input, args: [{ isSignal: true, alias: "customText", required: false }] }], customContent: [{ type: Input, args: [{ isSignal: true, alias: "customContent", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignInButtonComponent, { className: "SignInButtonComponent", filePath: "src/app/components/sign-in/sign-in-button/sign-in-button.component.ts", lineNumber: 26 });
})();

// src/app/components/setup-project/setup-project.component.ts
var _c05 = (a0) => ({ user: a0 });
function SetupProjectComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "project.setup._title"));
  }
}
function SetupProjectComponent_Conditional_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function SetupProjectComponent_Conditional_0_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, item_r3.name), " ");
  }
}
function SetupProjectComponent_Conditional_0_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, item_r4.name), " ");
  }
}
function SetupProjectComponent_Conditional_0_ng_template_13_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "aida-sign-in-button", 14, 3)(2, "div", 16);
    \u0275\u0275listener("click", function SetupProjectComponent_Conditional_0_ng_template_13_Conditional_0_Template_div_click_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const signIn_r6 = \u0275\u0275reference(1);
      const item_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      $event.stopPropagation();
      signIn_r6.connectGitHub();
      return \u0275\u0275resetView(ctx_r1.pendingCloudToggle(item_r7.value));
    })("keydown.enter", function SetupProjectComponent_Conditional_0_ng_template_13_Conditional_0_Template_div_keydown_enter_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const signIn_r6 = \u0275\u0275reference(1);
      const item_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      $event.stopPropagation();
      signIn_r6.connectGitHub();
      return \u0275\u0275resetView(ctx_r1.pendingCloudToggle(item_r7.value));
    });
    \u0275\u0275element(3, "i");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementStart(7, "span", 17);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("customContent", true);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(item_r7.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 6, "project.setup.signInTo"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(9, 8, "project.setup.saveTo"), " ", \u0275\u0275pipeBind1(10, 10, item_r7.name));
  }
}
function SetupProjectComponent_Conditional_0_ng_template_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "i");
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "span", 17);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(item_r7.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, "project.setup.saveTo"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 6, item_r7.name));
  }
}
function SetupProjectComponent_Conditional_0_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SetupProjectComponent_Conditional_0_ng_template_13_Conditional_0_Template, 11, 12, "aida-sign-in-button", 14)(1, SetupProjectComponent_Conditional_0_ng_template_13_Conditional_1_Template, 8, 8, "div", 15);
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275conditional(item_r7.signin ? 0 : 1);
  }
}
function SetupProjectComponent_Conditional_0_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "aida-sign-in-button", 11);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275property("customText", \u0275\u0275pipeBind1(1, 1, "project.setup.storage.signInWarning"));
  }
}
function SetupProjectComponent_Conditional_0_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-message", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "project.setup.storage.notCollabWarning"));
  }
}
function SetupProjectComponent_Conditional_0_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-message", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, "project.setup.storage.lockedWarning", \u0275\u0275pureFunction1(4, _c05, ctx_r1.projectData.lockedBy)));
  }
}
function SetupProjectComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, SetupProjectComponent_Conditional_0_Conditional_0_Template, 3, 3, "h2", 4);
    \u0275\u0275elementStart(1, "div", 5);
    \u0275\u0275template(2, SetupProjectComponent_Conditional_0_ng_container_2_Template, 1, 0, "ng-container", 6);
    \u0275\u0275elementStart(3, "p-iftalabel")(4, "p-select", 7);
    \u0275\u0275twoWayListener("ngModelChange", function SetupProjectComponent_Conditional_0_Template_p_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.projectPhase, $event) || (ctx_r1.projectPhase = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(5, SetupProjectComponent_Conditional_0_ng_template_5_Template, 2, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(7, SetupProjectComponent_Conditional_0_ng_template_7_Template, 2, 3, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "label", 8);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "p-selectbutton", 9);
    \u0275\u0275listener("ngModelChange", function SetupProjectComponent_Conditional_0_Template_p_selectbutton_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setProjectStorage($event));
    });
    \u0275\u0275template(13, SetupProjectComponent_Conditional_0_ng_template_13_Template, 2, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p-message", 10);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(19, SetupProjectComponent_Conditional_0_Conditional_19_Template, 2, 3, "aida-sign-in-button", 11)(20, SetupProjectComponent_Conditional_0_Conditional_20_Template, 3, 3, "p-message", 12)(21, SetupProjectComponent_Conditional_0_Conditional_21_Template, 3, 6, "p-message", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const name_r8 = \u0275\u0275reference(3);
    \u0275\u0275conditional(!ctx_r1.noHeader() ? 0 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", name_r8);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.projectPhase);
    \u0275\u0275property("options", ctx_r1.phaseOptions);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 10, "project.setup.label.phase"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.projectStorage())("options", ctx_r1.storageOptions())("unselectable", true);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.projectStorage() === "local" ? \u0275\u0275pipeBind1(17, 12, "project.setup.storage.localWarning") : \u0275\u0275pipeBind1(18, 14, "project.setup.storage.cloudInfo"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.uploadAccess === "signIn" ? 19 : ctx_r1.uploadAccess === "notCollab" ? 20 : ctx_r1.uploadAccess === "locked" ? 21 : -1);
  }
}
function SetupProjectComponent_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function SetupProjectComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SetupProjectComponent_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 6);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const name_r8 = \u0275\u0275reference(3);
    \u0275\u0275property("ngTemplateOutlet", name_r8);
  }
}
function SetupProjectComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-iftalabel")(1, "input", 18);
    \u0275\u0275twoWayListener("ngModelChange", function SetupProjectComponent_ng_template_2_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.projectName, $event) || (ctx_r1.projectName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("blur", function SetupProjectComponent_ng_template_2_Template_input_blur_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateName());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 19);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.projectName);
    \u0275\u0275property("pKeyFilter", ctx_r1.nameFilter);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "project.setup.label.name"));
  }
}
var SetupProjectComponent = class _SetupProjectComponent {
  projectState = inject(ProjectStateService);
  collaboratorService = inject(CollaboratorService);
  router = inject(Router);
  translate = inject(TranslateService);
  mode = input(void 0, ...ngDevMode ? [{ debugName: "mode" }] : (
    /* istanbul ignore next */
    []
  ));
  noHeader = input(false, ...ngDevMode ? [{ debugName: "noHeader" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    effect(() => {
      const stateRepo = this.projectData.github.repo;
      this.projectName = this.projectData.projectName;
    });
  }
  //Project data
  get projectData() {
    return this.projectState.getProject();
  }
  //Name input
  projectName = this.projectData.projectName;
  nameFilter = /^[a-zA-Z0-9-._ :']*$/;
  updateName() {
    this.projectName = this.projectName.trim().replace(/^[-._ :']+|[-._ :']+$/g, "").replace(/[-]{2,}/g, "-").replace(/[.]{2,}/g, ".").replace(/[_]{2,}/g, "_").replace(/\s+/g, " ").replace(/[:]{2,}/g, ":").replace(/[']{2,}/g, "'");
    this.projectState.setProjectName(this.projectName);
    if (this.router.url === AidaLinks.NewProject && this.projectName) {
      this.router.navigate([AidaLinks.ProjectSettings]);
    }
  }
  //Phase dropdown
  get projectPhase() {
    return this.projectData.phase;
  }
  set projectPhase(value) {
    this.projectState.setProjectPhase(value);
  }
  markForTranslation() {
    marker("project.setup.storage.local");
    marker("project.setup.storage.cloud");
    marker("project.phase.approve");
    marker("project.phase.assess");
    marker("project.phase.complete");
    marker("project.phase.design");
    marker("project.phase.discover");
    marker("project.phase.draft");
    marker("project.phase.status.complete");
    marker("project.phase.status.current");
    marker("project.phase.status.pending");
  }
  phaseOptions = [
    { name: ProjectPhase.Draft, value: ProjectPhase.Draft },
    { name: ProjectPhase.Discover, value: ProjectPhase.Discover },
    { name: ProjectPhase.Assess, value: ProjectPhase.Assess },
    { name: ProjectPhase.Design, value: ProjectPhase.Design },
    { name: ProjectPhase.Approve, value: ProjectPhase.Approve },
    { name: ProjectPhase.Complete, value: ProjectPhase.Complete }
  ];
  //Storage select button
  projectStorage = computed(() => this.projectData.storageType, ...ngDevMode ? [{ debugName: "projectStorage" }] : (
    /* istanbul ignore next */
    []
  ));
  setProjectStorage(value) {
    if (this.uploadAccess && value === "cloud") {
      return;
    }
    this.projectState.setStorageType(value);
  }
  storageOptions = computed(() => [
    { name: "project.setup.storage.local", value: "local", icon: "pi pi-desktop" },
    {
      name: "project.setup.storage.cloud",
      value: "cloud",
      icon: "pi pi-cloud",
      disabled: this.uploadAccess === "notCollab" || this.uploadAccess === "locked",
      signin: this.uploadAccess === "signIn"
    }
  ], ...ngDevMode ? [{ debugName: "storageOptions" }] : (
    /* istanbul ignore next */
    []
  ));
  get uploadAccess() {
    const { isSignedIn, isCollaborator, hasCollaborators, isLocked } = this.collaboratorService.getUploadAccessInfo(this.projectState.getProject());
    const cantUploadToCloud = !isCollaborator && hasCollaborators ? this.translate.instant("project.global.cantUpload") : void 0;
    const isLockedByOther = !!(isLocked && isLocked !== "byMe");
    if (cantUploadToCloud)
      return "notCollab";
    else if (!isSignedIn)
      return "signIn";
    else if (isLockedByOther)
      return "locked";
    else
      return void 0;
  }
  pendingCloudToggle(value) {
    localStorage.setItem("pendingStorageSwitch", value);
  }
  static \u0275fac = function SetupProjectComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SetupProjectComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SetupProjectComponent, selectors: [["aida-setup-project"]], inputs: { mode: [1, "mode"], noHeader: [1, "noHeader"] }, decls: 4, vars: 1, consts: [["name", ""], ["item", ""], ["selectedItem", ""], ["signIn", ""], [1, "text-2xl", "my-1"], [1, "flex", "flex-column", "gap-2"], [4, "ngTemplateOutlet"], ["fluid", "", "inputId", "phase", "optionValue", "value", "styleClass", "w-full", 3, "ngModelChange", "ngModel", "options"], ["for", "phase"], ["optionValue", "value", "styleClass", "w-full p-0", 3, "ngModelChange", "ngModel", "options", "unselectable"], ["icon", "pi pi-info-circle", "severity", "info", "size", "small", "variant", "simple"], [3, "customText"], ["icon", "pi pi-exclamation-circle", "severity", "error"], ["icon", "pi pi-exclamation-triangle", "severity", "warn"], [3, "customContent"], [1, "flex", "gap-2", "p-2", "align-items-center"], ["tabindex", "0", 1, "flex", "gap-2", "p-2", "align-items-center", 3, "click", "keydown.enter"], [1, "lowercase"], ["id", "name", "fluid", "", "pInputText", "", "type", "text", 3, "ngModelChange", "blur", "ngModel", "pKeyFilter"], ["for", "name"]], template: function SetupProjectComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, SetupProjectComponent_Conditional_0_Template, 22, 16)(1, SetupProjectComponent_Conditional_1_Template, 1, 1, "ng-container");
      \u0275\u0275template(2, SetupProjectComponent_ng_template_2_Template, 5, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275conditional(!ctx.mode() ? 0 : ctx.mode() === "name" ? 1 : -1);
    }
  }, dependencies: [CommonModule, NgTemplateOutlet, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, IftaLabelModule, IftaLabel, InputTextModule, InputText, KeyFilterModule, KeyFilter, MessageModule, Message, SelectButtonModule, SelectButton, SelectModule, Select, SignInButtonComponent, TranslatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SetupProjectComponent, [{
    type: Component,
    args: [{ selector: "aida-setup-project", imports: [CommonModule, FormsModule, TranslatePipe, IftaLabelModule, InputTextModule, KeyFilterModule, MessageModule, SelectButtonModule, SelectModule, SignInButtonComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `@if (!mode()) {
  @if (!noHeader()) {
    <h2 class="text-2xl my-1">{{ 'project.setup._title' | translate }}</h2>
  }
  <div class="flex flex-column gap-2">
    <!--Name-->
    <ng-container *ngTemplateOutlet="name" />
    <!--Phase-->
    <p-iftalabel>
      <p-select [(ngModel)]="projectPhase" [options]="phaseOptions" fluid inputId="phase" optionValue="value" styleClass="w-full">
        <ng-template #item let-item>
          {{ item.name | translate }}
        </ng-template>
        <ng-template #selectedItem let-item>
          {{ item.name | translate }}
        </ng-template>
      </p-select>
      <label for="phase">{{ 'project.setup.label.phase' | translate }}</label>
    </p-iftalabel>
    <!--Storage-->
    <p-selectbutton [ngModel]="projectStorage()" [options]="storageOptions()" [unselectable]="true" (ngModelChange)="setProjectStorage($event)" optionValue="value" styleClass="w-full p-0">
      <ng-template #item let-item>
        @if (item.signin) {
          <aida-sign-in-button [customContent]="true" #signIn>
            <div
              (click)="$event.stopPropagation(); signIn.connectGitHub(); pendingCloudToggle(item.value)"
              (keydown.enter)="$event.stopPropagation(); signIn.connectGitHub(); pendingCloudToggle(item.value)"
              class="flex gap-2 p-2 align-items-center"
              tabindex="0"
            >
              <i [class]="item.icon"></i>
              <span>
                {{ 'project.setup.signInTo' | translate }} <span class="lowercase">{{ 'project.setup.saveTo' | translate }} {{ item.name | translate }}</span>
              </span>
            </div>
          </aida-sign-in-button>
        } @else {
          <div class="flex gap-2 p-2 align-items-center">
            <i [class]="item.icon"></i>
            <span>
              {{ 'project.setup.saveTo' | translate }} <span class="lowercase">{{ item.name | translate }}</span>
            </span>
          </div>
        }
      </ng-template>
    </p-selectbutton>
    <p-message icon="pi pi-info-circle" severity="info" size="small" variant="simple">{{
      projectStorage() === 'local' ? ('project.setup.storage.localWarning' | translate) : ('project.setup.storage.cloudInfo' | translate)
    }}</p-message>

    @if (uploadAccess === 'signIn') {
      <aida-sign-in-button [customText]="'project.setup.storage.signInWarning' | translate" />
    } @else if (uploadAccess === 'notCollab') {
      <p-message icon="pi pi-exclamation-circle" severity="error">{{ 'project.setup.storage.notCollabWarning' | translate }}</p-message>
    } @else if (uploadAccess === 'locked') {
      <p-message icon="pi pi-exclamation-triangle" severity="warn">{{ 'project.setup.storage.lockedWarning' | translate: { user: projectData.lockedBy } }}</p-message>
    }
  </div>
} @else if (mode() === 'name') {
  <!--Name-->
  <ng-container *ngTemplateOutlet="name" />
}

<!--Templates-->
<ng-template #name>
  <p-iftalabel>
    <input id="name" [(ngModel)]="projectName" [pKeyFilter]="nameFilter" (blur)="updateName()" fluid pInputText type="text" />
    <label for="name">{{ 'project.setup.label.name' | translate }}</label>
  </p-iftalabel>
</ng-template>
` }]
  }], () => [], { mode: [{ type: Input, args: [{ isSignal: true, alias: "mode", required: false }] }], noHeader: [{ type: Input, args: [{ isSignal: true, alias: "noHeader", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SetupProjectComponent, { className: "SetupProjectComponent", filePath: "src/app/components/setup-project/setup-project.component.ts", lineNumber: 30 });
})();

// src/app/components/menu-project/menu-project.component.ts
var _c06 = ["menu"];
var _c13 = () => ({ width: "50vw" });
var _c23 = () => ({ "1199px": "75vw", "575": "90vw" });
function MenuProjectComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, item_r2.label));
  }
}
function MenuProjectComponent_ng_template_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap(item_r3.icon);
  }
}
function MenuProjectComponent_ng_template_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r3.icon);
  }
}
function MenuProjectComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 12);
    \u0275\u0275conditionalCreate(1, MenuProjectComponent_ng_template_4_Conditional_1_Template, 1, 2, "i", 13)(2, MenuProjectComponent_ng_template_4_Conditional_2_Template, 2, 1, "span", 14);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r3.icon.startsWith("pi") ? 1 : 2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, item_r3.label));
  }
}
function MenuProjectComponent_ng_template_7_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "github.connect.pat.header"));
  }
}
function MenuProjectComponent_ng_template_7_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "span", 17);
    \u0275\u0275text(2, "manage_accounts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2", 15);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "settings._title"));
  }
}
function MenuProjectComponent_ng_template_7_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "span", 17);
    \u0275\u0275text(2, "settings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2", 15);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "project.setup._title"));
  }
}
function MenuProjectComponent_ng_template_7_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "span", 17);
    \u0275\u0275text(2, "folder_zip");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2", 15);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "project.repo._title"));
  }
}
function MenuProjectComponent_ng_template_7_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "span", 17);
    \u0275\u0275text(2, "note_add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2", 15);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "findPages._title"));
  }
}
function MenuProjectComponent_ng_template_7_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "span", 17);
    \u0275\u0275text(2, "group_add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2", 15);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "collaborators._title"));
  }
}
function MenuProjectComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MenuProjectComponent_ng_template_7_Case_0_Template, 3, 3, "h2", 15)(1, MenuProjectComponent_ng_template_7_Case_1_Template, 6, 3, "div", 16)(2, MenuProjectComponent_ng_template_7_Case_2_Template, 6, 3, "div", 16)(3, MenuProjectComponent_ng_template_7_Case_3_Template, 6, 3, "div", 16)(4, MenuProjectComponent_ng_template_7_Case_4_Template, 6, 3, "div", 16)(5, MenuProjectComponent_ng_template_7_Case_5_Template, 6, 3, "div", 16);
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_6_0 = ctx_r3.mode()) === "PAT" ? 0 : tmp_6_0 === "userSettings" ? 1 : tmp_6_0 === "setupProject" ? 2 : tmp_6_0 === "setupRepo" ? 3 : tmp_6_0 === "addPages" ? 4 : tmp_6_0 === "addCollabs" ? 5 : -1);
  }
}
function MenuProjectComponent_Case_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "i", 18);
    \u0275\u0275elementStart(2, "div", 19)(3, "p", 20);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "aida-pat");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "github.connect.pat.description"));
  }
}
function MenuProjectComponent_Case_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "aida-user-settings");
  }
}
function MenuProjectComponent_Case_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "aida-setup-project", 8);
  }
  if (rf & 2) {
    \u0275\u0275property("noHeader", true);
  }
}
function MenuProjectComponent_Case_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "aida-setup-repo", 8);
  }
  if (rf & 2) {
    \u0275\u0275property("noHeader", true);
  }
}
function MenuProjectComponent_Case_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "aida-add-pages", 8);
  }
  if (rf & 2) {
    \u0275\u0275property("noHeader", true);
  }
}
function MenuProjectComponent_Case_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "aida-add-collaborators", 9);
  }
  if (rf & 2) {
    \u0275\u0275property("noHeader", true);
  }
}
function MenuProjectComponent_ng_template_15_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 23);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("onClick", function MenuProjectComponent_ng_template_15_Conditional_0_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.validatePAT());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 1, "common.signin"));
  }
}
function MenuProjectComponent_ng_template_15_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 24);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("onClick", function MenuProjectComponent_ng_template_15_Conditional_1_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.visible.set(false));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 1, "common.close"));
  }
}
function MenuProjectComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MenuProjectComponent_ng_template_15_Conditional_0_Template, 2, 3, "p-button", 21)(1, MenuProjectComponent_ng_template_15_Conditional_1_Template, 2, 3, "p-button", 22);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r3.mode() === "PAT" ? 0 : 1);
  }
}
var MenuProjectComponent = class _MenuProjectComponent {
  http = inject(HttpClient);
  router = inject(Router);
  confirmationService = inject(ConfirmationService);
  translate = inject(TranslateService);
  projectState = inject(ProjectStateService);
  collaboratorService = inject(CollaboratorService);
  authService = inject(GitHubAuthService);
  exportGitHubService = inject(ExportGitHubService);
  signInService = inject(SignInService);
  // Menu
  menu = viewChild.required("menu");
  toggle(event) {
    this.menu().toggle(event);
  }
  // Sign in
  connectGitHub() {
    if (this.signInService.isApiGatewayAccessible()) {
      this.authService.login();
    } else {
      this.showDialog("PAT");
    }
  }
  validatePAT() {
    return __async(this, null, function* () {
      this.visible.set(false);
      yield this.signInService.validatePAT();
    });
  }
  get items() {
    const { isSignedIn, isCollaborator, isLocked } = this.collaboratorService.getUploadAccessInfo(this.projectState.getProject());
    const dropdownOptions = [
      {
        label: this.translate.instant("common.profile"),
        items: [
          {
            label: this.translate.instant("settings._title"),
            icon: "manage_accounts",
            command: () => {
              this.showDialog("userSettings");
            }
          }
        ]
      },
      {
        label: this.translate.instant("home.header.settingsDoormats"),
        items: [
          {
            label: this.translate.instant("project.setup._title"),
            icon: "settings",
            command: () => {
              this.showDialog("setupProject");
            }
          },
          {
            label: this.translate.instant("project.repo._title"),
            icon: "folder_zip",
            command: () => {
              this.showDialog("setupRepo");
            }
          },
          {
            label: this.translate.instant("findPages._title"),
            icon: "note_add",
            command: () => {
              this.showDialog("addPages");
            }
          },
          {
            label: this.translate.instant("collaborators._title"),
            icon: "group_add",
            command: () => {
              this.showDialog("addCollabs");
            }
          }
        ]
      }
    ];
    if (!this.signInService.user()) {
      dropdownOptions[0].items.unshift({
        label: this.translate.instant("common.signin"),
        icon: "login",
        command: () => {
          this.connectGitHub();
        }
      });
    } else {
      dropdownOptions[0].items.unshift({
        label: this.translate.instant("common.signout"),
        icon: "logout",
        command: () => {
          console.log(this.signInService.user());
          this.authService.logout();
          this.signInService.clearPAT();
        }
      });
    }
    if (isSignedIn && isCollaborator) {
      if (!isLocked && this.projectState.getProject().storageType === "cloud") {
        dropdownOptions[1].items.push({
          label: this.translate.instant("project.global.lockProject"),
          icon: "lock",
          command: () => {
            this.projectState.setLockedBy();
          }
        });
      } else if (isLocked) {
        dropdownOptions[1].items.push({
          label: this.translate.instant("project.global.unlockProject"),
          icon: "lock_open",
          command: () => {
            this.unlockProject(isLocked);
          }
        });
      }
    }
    return dropdownOptions;
  }
  /** Unlock a project () */
  unlockProject(user) {
    if (user === "byMe") {
      this.projectState.removeLockedBy();
    } else {
      this.confirmationService.confirm({
        key: "unlock",
        message: this.translate.instant("project.global.unlockMessage", { user }),
        header: this.translate.instant("project.global.unlockHeader"),
        icon: "pi pi-exclamation-circle text-red-500",
        rejectButtonProps: {
          label: this.translate.instant("common.cancel"),
          severity: "secondary",
          outlined: true,
          styleClass: "secondary-outline"
        },
        acceptButtonProps: {
          label: this.translate.instant("common.unlock"),
          severity: "danger"
        },
        accept: () => {
          this.projectState.removeLockedBy();
        }
      });
    }
  }
  //Dialog
  visible = signal(false, ...ngDevMode ? [{ debugName: "visible" }] : (
    /* istanbul ignore next */
    []
  ));
  mode = signal(void 0, ...ngDevMode ? [{ debugName: "mode" }] : (
    /* istanbul ignore next */
    []
  ));
  showDialog(mode) {
    this.mode.set(mode);
    this.visible.set(true);
  }
  static \u0275fac = function MenuProjectComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MenuProjectComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MenuProjectComponent, selectors: [["aida-menu-project"]], viewQuery: function MenuProjectComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.menu, _c06, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, decls: 18, vars: 12, consts: [["menu", ""], ["submenuheader", ""], ["item", ""], ["header", ""], ["footer", ""], [3, "model", "popup"], ["position", "top", 3, "visibleChange", "visible", "appendTo", "breakpoints", "maximizable", "modal"], [1, "flex", "flex-row", "align-items-center", "gap-3", "-mt-2"], [3, "noHeader"], ["mode", "list", 3, "noHeader"], ["key", "unlock", "position", "topright"], [1, "text-primary", "font-bold"], [1, "p-menu-item-link"], [3, "class"], [1, "material-icons-outlined"], [1, "text-2xl", "my-1"], [1, "flex", "gap-1"], [1, "material-icons-outlined", "text-5xl"], [1, "pi", "pi-key", "text-6xl", "text-900"], [1, "w-full"], [1, "text-sm", "text-color-secondary", "my-2"], [3, "label"], ["outlined", "", "styleClass", "secondary-outline", 3, "label"], [3, "onClick", "label"], ["outlined", "", "styleClass", "secondary-outline", 3, "onClick", "label"]], template: function MenuProjectComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "p-menu", 5, 0);
      \u0275\u0275template(2, MenuProjectComponent_ng_template_2_Template, 3, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(4, MenuProjectComponent_ng_template_4_Template, 6, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p-dialog", 6);
      \u0275\u0275twoWayListener("visibleChange", function MenuProjectComponent_Template_p_dialog_visibleChange_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.visible, $event) || (ctx.visible = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(7, MenuProjectComponent_ng_template_7_Template, 6, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
      \u0275\u0275conditionalCreate(9, MenuProjectComponent_Case_9_Template, 7, 3, "div", 7)(10, MenuProjectComponent_Case_10_Template, 1, 0, "aida-user-settings")(11, MenuProjectComponent_Case_11_Template, 1, 1, "aida-setup-project", 8)(12, MenuProjectComponent_Case_12_Template, 1, 1, "aida-setup-repo", 8)(13, MenuProjectComponent_Case_13_Template, 1, 1, "aida-add-pages", 8)(14, MenuProjectComponent_Case_14_Template, 1, 1, "aida-add-collaborators", 9);
      \u0275\u0275template(15, MenuProjectComponent_ng_template_15_Template, 2, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275element(17, "p-confirmdialog", 10);
    }
    if (rf & 2) {
      let tmp_13_0;
      \u0275\u0275property("model", ctx.items)("popup", true);
      \u0275\u0275advance(6);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(10, _c13));
      \u0275\u0275twoWayProperty("visible", ctx.visible);
      \u0275\u0275property("appendTo", "body")("breakpoints", \u0275\u0275pureFunction0(11, _c23))("maximizable", true)("modal", true);
      \u0275\u0275advance(3);
      \u0275\u0275conditional((tmp_13_0 = ctx.mode()) === "PAT" ? 9 : tmp_13_0 === "userSettings" ? 10 : tmp_13_0 === "setupProject" ? 11 : tmp_13_0 === "setupRepo" ? 12 : tmp_13_0 === "addPages" ? 13 : tmp_13_0 === "addCollabs" ? 14 : -1);
    }
  }, dependencies: [
    ButtonModule,
    Button,
    ConfirmDialogModule,
    ConfirmDialog,
    DialogModule,
    Dialog,
    MenuModule,
    Menu,
    AddCollaboratorsComponent,
    AddPagesComponent,
    PatComponent,
    SetupProjectComponent,
    SetupRepoComponent,
    UserSettingsComponent,
    TranslatePipe
  ], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuProjectComponent, [{
    type: Component,
    args: [{ selector: "aida-menu-project", imports: [
      TranslatePipe,
      ButtonModule,
      ConfirmDialogModule,
      DialogModule,
      MenuModule,
      AddCollaboratorsComponent,
      AddPagesComponent,
      PatComponent,
      SetupProjectComponent,
      SetupRepoComponent,
      UserSettingsComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<p-menu [model]="items" [popup]="true" #menu>
  <ng-template #submenuheader let-item>
    <span class="text-primary font-bold">{{ item.label | translate }}</span>
  </ng-template>
  <ng-template #item let-item>
    <a class="p-menu-item-link">
      @if (item.icon.startsWith('pi')) {
        <i [class]="item.icon"></i>
      } @else {
        <span class="material-icons-outlined">{{ item.icon }}</span>
      }
      <span>{{ item.label | translate }}</span>
    </a>
  </ng-template>
</p-menu>

<p-dialog [(visible)]="visible" [appendTo]="'body'" [breakpoints]="{ '1199px': '75vw', '575': '90vw' }" [maximizable]="true" [modal]="true" [style]="{ width: '50vw' }" position="top">
  <ng-template #header>
    @switch (mode()) {
      @case ('PAT') {
        <h2 class="text-2xl my-1">{{ 'github.connect.pat.header' | translate }}</h2>
      }
      @case ('userSettings') {
        <div class="flex gap-1">
          <span class="material-icons-outlined text-5xl">manage_accounts</span>
          <h2 class="text-2xl my-1">{{ 'settings._title' | translate }}</h2>
        </div>
      }
      @case ('setupProject') {
        <div class="flex gap-1">
          <span class="material-icons-outlined text-5xl">settings</span>
          <h2 class="text-2xl my-1">{{ 'project.setup._title' | translate }}</h2>
        </div>
      }
      @case ('setupRepo') {
        <div class="flex gap-1">
          <span class="material-icons-outlined text-5xl">folder_zip</span>
          <h2 class="text-2xl my-1">{{ 'project.repo._title' | translate }}</h2>
        </div>
      }
      @case ('addPages') {
        <div class="flex gap-1">
          <span class="material-icons-outlined text-5xl">note_add</span>
          <h2 class="text-2xl my-1">{{ 'findPages._title' | translate }}</h2>
        </div>
      }
      @case ('addCollabs') {
        <div class="flex gap-1">
          <span class="material-icons-outlined text-5xl">group_add</span>
          <h2 class="text-2xl my-1">{{ 'collaborators._title' | translate }}</h2>
        </div>
      }
    }
  </ng-template>
  <!--MAIN CONTENT-->
  @switch (mode()) {
    @case ('PAT') {
      <div class="flex flex-row align-items-center gap-3 -mt-2">
        <i class="pi pi-key text-6xl text-900"></i>
        <div class="w-full">
          <p class="text-sm text-color-secondary my-2">{{ 'github.connect.pat.description' | translate }}</p>
          <aida-pat />
        </div>
      </div>
    }
    @case ('userSettings') {
      <aida-user-settings />
    }
    @case ('setupProject') {
      <aida-setup-project [noHeader]="true" />
    }
    @case ('setupRepo') {
      <aida-setup-repo [noHeader]="true" />
    }
    @case ('addPages') {
      <aida-add-pages [noHeader]="true" />
    }
    @case ('addCollabs') {
      <aida-add-collaborators [noHeader]="true" mode="list" />
    }
  }
  <ng-template #footer>
    @if (mode() === 'PAT') {
      <p-button [label]="'common.signin' | translate" (onClick)="validatePAT()" />
    } @else {
      <p-button [label]="'common.close' | translate" (onClick)="visible.set(false)" outlined styleClass="secondary-outline" />
    }
  </ng-template>
</p-dialog>

<p-confirmdialog key="unlock" position="topright" />
` }]
  }], null, { menu: [{ type: ViewChild, args: ["menu", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MenuProjectComponent, { className: "MenuProjectComponent", filePath: "src/app/components/menu-project/menu-project.component.ts", lineNumber: 46 });
})();

// src/app/services/mailto.service.ts
var MailtoService = class _MailtoService {
  translate = inject(TranslateService);
  projectState = inject(ProjectStateService);
  signInService = inject(SignInService);
  markForTranslation() {
    marker("feedback.email.bodyEN");
    marker("feedback.email.bodyFR");
  }
  // App & browser context for bug reports
  getProjectContext() {
    const project = this.projectState.getProject();
    return {
      projectName: project.projectName,
      projectStorage: project.storageType,
      projectCreated: project.created,
      projectSaved: project.lastSaved,
      projectVersion: project.version,
      projectRepo: project.github.repo ? `https://${project.github.owner}.github.io/${project.github.repo}` : "",
      user: this.signInService.user()?.login ?? "",
      browser: this.getBrowserInfo(),
      screen: `${window.screen.width}x${window.screen.height}`,
      viewport: `${window.innerWidth}x${window.innerHeight}`,
      language: navigator.language,
      currentUrl: window.location.href,
      memory: performance.memory?.usedJSHeapSize ? `${Math.round(performance.memory.usedJSHeapSize / 1048576)}MB` : "N/A",
      storageUsed: `${Math.round(JSON.stringify(localStorage).length / 1024)}KB`,
      date: (/* @__PURE__ */ new Date()).toISOString()
    };
  }
  getBrowserInfo() {
    const ua = navigator.userAgent;
    let browser = "Unknown Browser";
    if (ua.includes("Edg/")) {
      browser = `Edge ${ua.match(/Edg\/(\d+)/)?.[1]}`;
    } else if (ua.includes("Chrome/")) {
      browser = `Chrome ${ua.match(/Chrome\/(\d+)/)?.[1]}`;
    } else if (ua.includes("Firefox/")) {
      browser = `Firefox ${ua.match(/Firefox\/(\d+)/)?.[1]}`;
    } else if (ua.includes("Safari/") && !ua.includes("Chrome")) {
      browser = `Safari ${ua.match(/Version\/(\d+)/)?.[1]}`;
    }
    let os = "Unknown OS";
    if (ua.includes("Windows NT 10.0")) {
      os = "Windows 10/11";
    } else if (ua.includes("Windows NT")) {
      os = "Windows";
    } else if (ua.includes("Android")) {
      os = `Android ${ua.match(/Android (\d+)/)?.[1] || ""}`.trim();
    } else if (ua.includes("iPhone") || ua.includes("iPad")) {
      os = "iOS";
    }
    return `${browser} on ${os}`;
  }
  generateFeedbackMailto() {
    const context = this.getProjectContext();
    const subject = this.translate.instant("feedback.email.subject", { projectName: context.projectName });
    const body = this.buildBilingualBody("feedback.email.bodyEN", "feedback.email.bodyFR", context);
    return this.buildMailtoUrl("AIPIA-PIAAI@cra-arc.gc.ca", subject, body);
  }
  buildBilingualBody(enKey, frKey, context) {
    const bodyEn = this.translate.instant(enKey, context);
    const bodyFr = this.translate.instant(frKey, context);
    return `${bodyEn}

---

${bodyFr}`;
  }
  buildMailtoUrl(to, subject, body) {
    return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
  openMailto(mailto) {
    window.open(mailto, "_self");
  }
  static \u0275fac = function MailtoService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MailtoService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MailtoService, factory: _MailtoService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MailtoService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/components/doormats/doormats.component.ts
var _c07 = (a0, a1) => ({ $implicit: a0, external: a1 });
var _c14 = (a0, a1) => ({ $implicit: a0, hidden: a1 });
function DoormatsComponent_For_2_Conditional_0_Conditional_0_Conditional_0_Conditional_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DoormatsComponent_For_2_Conditional_0_Conditional_0_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 4);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275template(2, DoormatsComponent_For_2_Conditional_0_Conditional_0_Conditional_0_Conditional_2_ng_container_2_Template, 1, 0, "ng-container", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext(3);
    const key_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    const doormatHeader_r4 = \u0275\u0275reference(4);
    \u0275\u0275property("href", \u0275\u0275pipeBind1(1, 3, item_r1.path), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", doormatHeader_r4)("ngTemplateOutletContext", \u0275\u0275pureFunction2(5, _c07, item_r1.titleKey, ctx_r2.isExternal(key_r2)));
  }
}
function DoormatsComponent_For_2_Conditional_0_Conditional_0_Conditional_0_Conditional_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DoormatsComponent_For_2_Conditional_0_Conditional_0_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 5);
    \u0275\u0275template(1, DoormatsComponent_For_2_Conditional_0_Conditional_0_Conditional_0_Conditional_3_ng_container_1_Template, 1, 0, "ng-container", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275nextContext(2);
    const doormatHeader_r4 = \u0275\u0275reference(4);
    \u0275\u0275property("routerLink", item_r1.path ? item_r1.path : void 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", doormatHeader_r4)("ngTemplateOutletContext", \u0275\u0275pureFunction2(3, _c14, item_r1.titleKey, item_r1.hideInProd));
  }
}
function DoormatsComponent_For_2_Conditional_0_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div");
    \u0275\u0275conditionalCreate(2, DoormatsComponent_For_2_Conditional_0_Conditional_0_Conditional_0_Conditional_2_Template, 3, 8, "a", 4)(3, DoormatsComponent_For_2_Conditional_0_Conditional_0_Conditional_0_Conditional_3_Template, 2, 6, "a", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 6);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext(2);
    const key_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("text-red-500", ctx_r2.isHiddenInProd(key_r2));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isExternal(key_r2) ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, item_r1.descriptionKey));
  }
}
function DoormatsComponent_For_2_Conditional_0_Conditional_0_Conditional_1_Conditional_1_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DoormatsComponent_For_2_Conditional_0_Conditional_0_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 9);
    \u0275\u0275listener("click", function DoormatsComponent_For_2_Conditional_0_Conditional_0_Conditional_1_Conditional_1_Template_a_click_0_listener($event) {
      let tmp_17_0;
      \u0275\u0275restoreView(_r5);
      const key_r2 = \u0275\u0275nextContext(4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView((tmp_17_0 = ctx_r2.getOnClick(key_r2)) == null ? null : tmp_17_0($event));
    })("keydown.enter", function DoormatsComponent_For_2_Conditional_0_Conditional_0_Conditional_1_Conditional_1_Template_a_keydown_enter_0_listener($event) {
      let tmp_17_0;
      \u0275\u0275restoreView(_r5);
      const key_r2 = \u0275\u0275nextContext(4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView((tmp_17_0 = ctx_r2.getOnClick(key_r2)) == null ? null : tmp_17_0($event));
    });
    \u0275\u0275elementStart(1, "div", 10)(2, "div", 11)(3, "div", 12)(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div");
    \u0275\u0275template(7, DoormatsComponent_For_2_Conditional_0_Conditional_0_Conditional_1_Conditional_1_ng_container_7_Template, 1, 0, "ng-container", 7);
    \u0275\u0275elementStart(8, "p", 6);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext(3);
    const key_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    const doormatHeader_r4 = \u0275\u0275reference(4);
    \u0275\u0275property("routerLink", ctx_r2.getOnClick(key_r2) ? null : item_r1.path ? item_r1.path : null);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.styleCardService.cardStyles(!!item_r1.path, false, true));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r2.iconClasses(item_r1.notOutlined));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1.icon);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-red-500", ctx_r2.isHiddenInProd(key_r2));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", doormatHeader_r4)("ngTemplateOutletContext", \u0275\u0275pureFunction2(13, _c14, item_r1.titleKey, item_r1.hideInProd));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 11, item_r1.descriptionKey));
  }
}
function DoormatsComponent_For_2_Conditional_0_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275conditionalCreate(1, DoormatsComponent_For_2_Conditional_0_Conditional_0_Conditional_1_Conditional_1_Template, 11, 16, "a", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const key_r2 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.isExternal(key_r2) ? 1 : -1);
  }
}
function DoormatsComponent_For_2_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DoormatsComponent_For_2_Conditional_0_Conditional_0_Conditional_0_Template, 7, 6, "div", 2)(1, DoormatsComponent_For_2_Conditional_0_Conditional_0_Conditional_1_Template, 2, 1, "div", 3);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r2.style() === "topic" ? 0 : ctx_r2.style() === "card" ? 1 : -1);
  }
}
function DoormatsComponent_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DoormatsComponent_For_2_Conditional_0_Conditional_0_Template, 2, 1);
  }
  if (rf & 2) {
    const key_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!ctx_r2.isHiddenInProd(key_r2) || !ctx_r2.prod ? 0 : -1);
  }
}
function DoormatsComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DoormatsComponent_For_2_Conditional_0_Template, 1, 1);
  }
  if (rf & 2) {
    let tmp_11_0;
    const key_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_11_0 = ctx_r2.items[key_r2]) ? 0 : -1, tmp_11_0);
  }
}
function DoormatsComponent_ng_template_3_Case_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 15);
  }
}
function DoormatsComponent_ng_template_3_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 14)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, DoormatsComponent_ng_template_3_Case_0_Conditional_4_Template, 1, 0, "i", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    const external_r7 = ctx_r5.external;
    const header_r8 = ctx_r5.$implicit;
    const hidden_r9 = ctx_r5.hidden;
    \u0275\u0275classProp("text-primary", !hidden_r9);
    \u0275\u0275advance();
    \u0275\u0275classProp("hover:underline", !hidden_r9);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 6, header_r8));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(external_r7 ? 4 : -1);
  }
}
function DoormatsComponent_ng_template_3_Case_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 15);
  }
}
function DoormatsComponent_ng_template_3_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 14)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, DoormatsComponent_ng_template_3_Case_1_Conditional_4_Template, 1, 0, "i", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    const external_r7 = ctx_r5.external;
    const header_r8 = ctx_r5.$implicit;
    const hidden_r9 = ctx_r5.hidden;
    \u0275\u0275classProp("text-primary", !hidden_r9);
    \u0275\u0275advance();
    \u0275\u0275classProp("hover:underline", !hidden_r9);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 6, header_r8));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(external_r7 ? 4 : -1);
  }
}
function DoormatsComponent_ng_template_3_Case_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 15);
  }
}
function DoormatsComponent_ng_template_3_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 14)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, DoormatsComponent_ng_template_3_Case_2_Conditional_4_Template, 1, 0, "i", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    const external_r7 = ctx_r5.external;
    const header_r8 = ctx_r5.$implicit;
    const hidden_r9 = ctx_r5.hidden;
    \u0275\u0275classProp("text-primary", !hidden_r9);
    \u0275\u0275advance();
    \u0275\u0275classProp("hover:underline", !hidden_r9);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 6, header_r8));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(external_r7 ? 4 : -1);
  }
}
function DoormatsComponent_ng_template_3_Case_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 15);
  }
}
function DoormatsComponent_ng_template_3_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h5", 14)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, DoormatsComponent_ng_template_3_Case_3_Conditional_4_Template, 1, 0, "i", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    const external_r7 = ctx_r5.external;
    const header_r8 = ctx_r5.$implicit;
    const hidden_r9 = ctx_r5.hidden;
    \u0275\u0275classProp("text-primary", !hidden_r9);
    \u0275\u0275advance();
    \u0275\u0275classProp("hover:underline", !hidden_r9);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 6, header_r8));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(external_r7 ? 4 : -1);
  }
}
function DoormatsComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DoormatsComponent_ng_template_3_Case_0_Template, 5, 8, "h2", 13)(1, DoormatsComponent_ng_template_3_Case_1_Template, 5, 8, "h3", 13)(2, DoormatsComponent_ng_template_3_Case_2_Template, 5, 8, "h4", 13)(3, DoormatsComponent_ng_template_3_Case_3_Template, 5, 8, "h5", 13);
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_5_0 = ctx_r2.headingLevel()) === "h2" ? 0 : tmp_5_0 === "h3" ? 1 : tmp_5_0 === "h4" ? 2 : tmp_5_0 === "h5" ? 3 : -1);
  }
}
var DOORMATS = {
  //Top level paths
  newProject: { path: AidaLinks.NewProject, titleKey: "project._nav.new", descriptionKey: "project.new.description", icon: "add" },
  switchProject: { path: AidaLinks.AllProjects, titleKey: "switch._title", descriptionKey: "switch.description", icon: "folder_open" },
  //Active project
  dashboard: { path: AidaLinks.ProjectDashboard, titleKey: "dashboard._title", descriptionKey: "dashboard.description", icon: "view_quilt" },
  search: { path: void 0, titleKey: "search._nav", descriptionKey: "search.description", icon: "manage_search", hideInProd: true },
  problems: { path: void 0, titleKey: "problems._nav", descriptionKey: "problems.project.description", icon: "troubleshoot", hideInProd: true },
  iaDiagram: { path: AidaLinks.ProjectDiagram, titleKey: "iaDiagram._title", descriptionKey: "iaDiagram.description", icon: "lan" },
  inventory: { path: AidaLinks.ProjectInventory, titleKey: "inventory._title", descriptionKey: "inventory.description", icon: "checklist_rtl" },
  metadata: { path: AidaLinks.ProjectMetadata, titleKey: "metadata._nav", descriptionKey: "metadata.description", icon: "source", hideInProd: true },
  exportPages: { path: AidaLinks.ProjectExport, titleKey: "exportPages._title", descriptionKey: "exportPages.description", icon: "drive_folder_upload" },
  editPages: { path: AidaLinks.ProjectEdit, titleKey: "editPages._title", descriptionKey: "editPages.description", icon: "auto_fix_high" },
  compare: { path: AidaLinks.ProjectCompare, titleKey: "compare._title", descriptionKey: "compare.description", icon: "library_books" },
  //Page Settings
  setupProject: { path: AidaLinks.ProjectSettings, titleKey: "project._nav.edit", descriptionKey: "project.edit.description", icon: "settings" },
  addPages: { path: AidaLinks.ProjectAdd, titleKey: "findPages._title", descriptionKey: "addPages.description", icon: "note_add" },
  //Popup Settings
  popSetupProject: { path: AidaLinks.ProjectSettings, titleKey: "project.setup._title", descriptionKey: "project.setup.description", icon: "settings" },
  popSetupRepo: { path: AidaLinks.ProjectSettings, titleKey: "project.repo._title", descriptionKey: "project.repo.description", icon: "folder_zip" },
  popAddCollabs: { path: AidaLinks.ProjectSettings, titleKey: "collaborators._title", descriptionKey: "collaborators.description", icon: "group_add" },
  popAddPages: { path: AidaLinks.ProjectAdd, titleKey: "findPages._title", descriptionKey: "addPages.description", icon: "note_add" },
  //Help
  help: { path: AidaLinks.Help, titleKey: "help._title", descriptionKey: "help.description", icon: "help_outline", hideInProd: true },
  contact: { path: AidaLinks.Contact, titleKey: "feedback._title", descriptionKey: "feedback.description", icon: "feedback", function: "mailTo" },
  //Standalone
  standaloneCompare: { path: AidaLinks.StandaloneCompare, titleKey: "compare._title", descriptionKey: "compare.description" },
  //Dev
  monitoring: { path: AidaLinks.DevMonitoring, titleKey: "dev.monitoring._title", descriptionKey: "dev.monitoring.description" },
  colors: { path: AidaLinks.DevColours, titleKey: "dev.colors._title", descriptionKey: "dev.colors.description" },
  patterns: { path: AidaLinks.DevPatterns, titleKey: "dev.patterns._title", descriptionKey: "dev.patterns.description" },
  prompts: { path: AidaLinks.DevPrompts, titleKey: "dev.prompts._title", descriptionKey: "dev.prompts.description" },
  //External
  ucdgDiscover: { path: "ucdg.discover.link", titleKey: "ucdg.discover.title", descriptionKey: "ucdg.discover.description", isExternal: true }
};
var DoormatsComponent = class _DoormatsComponent {
  styleCardService = inject(StyleCardService);
  settingsService = inject(UserSettingsService);
  mailtoService = inject(MailtoService);
  prod = environment.production;
  items = DOORMATS;
  keys = input.required(...ngDevMode ? [{ debugName: "keys" }] : (
    /* istanbul ignore next */
    []
  ));
  headingLevel = input("h3", ...ngDevMode ? [{ debugName: "headingLevel" }] : (
    /* istanbul ignore next */
    []
  ));
  style = input("topic", ...ngDevMode ? [{ debugName: "style" }] : (
    /* istanbul ignore next */
    []
  ));
  dialog = viewChild.required(MenuProjectComponent);
  iconClasses(notOutlined) {
    const baseClasses = "text-primary text-4xl p-2 border-1 border-round surface-border";
    const materialClass = notOutlined ? "material-icons" : "material-icons-outlined";
    const bgClass = this.settingsService.darkMode() ? "bg-primary-800" : "bg-primary-50";
    return baseClasses + " " + materialClass + " " + bgClass;
  }
  isHiddenInProd(key) {
    return !!this.items[key].hideInProd;
  }
  isExternal(key) {
    return !!this.items[key].isExternal;
  }
  getOnClick(key) {
    const overrides = {
      contact: this.mailTo,
      popSetupProject: this.openDialog("setupProject"),
      popSetupRepo: this.openDialog("setupRepo"),
      popAddPages: this.openDialog("addPages"),
      popAddCollabs: this.openDialog("addCollabs")
    };
    return overrides[key];
  }
  mailTo = () => {
    console.log("Opening mailto!");
    this.mailtoService.openMailto(this.mailtoService.generateFeedbackMailto());
  };
  openDialog = (mode) => () => {
    this.dialog().showDialog(mode);
  };
  markForTranslation() {
    marker("exportPages._title");
    marker("metadata._nav");
    marker("metadata.description");
    marker("feedback._title");
    marker("feedback.description");
    marker("search._nav");
    marker("search.description");
    marker("problems._nav");
    marker("problems.project.description");
    marker("iaDiagram.description");
    marker("compare.description");
    marker("help.description");
    marker("ucdg.discover.description");
    marker("ucdg.discover.link");
    marker("ucdg.discover.title");
  }
  static \u0275fac = function DoormatsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DoormatsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DoormatsComponent, selectors: [["aida-doormats"]], viewQuery: function DoormatsComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.dialog, MenuProjectComponent, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, inputs: { keys: [1, "keys"], headingLevel: [1, "headingLevel"], style: [1, "style"] }, decls: 6, vars: 1, consts: [["doormatHeader", ""], [1, "grid", 3, "ngClass"], [1, "col-12", "md:col-6", "lg:col-4"], [1, "col-12", "lg:col-6"], ["target", "_blank", 3, "href"], [3, "routerLink"], [1, "text-color-secondary", "mt-2"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "no-underline", "h-full", "flex", 3, "routerLink"], [1, "no-underline", "h-full", "flex", 3, "click", "keydown.enter", "routerLink"], [1, "p-3", "flex-1"], [1, "flex", "flex-row", "gap-3"], [1, "flex", "align-items-center"], [1, "text-xl", "font-semibold", "my-0", 3, "text-primary"], [1, "text-xl", "font-semibold", "my-0"], [1, "pi", "pi-external-link", "ml-2", "text-lg"]], template: function DoormatsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275repeaterCreate(1, DoormatsComponent_For_2_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, DoormatsComponent_ng_template_3_Template, 4, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275element(5, "aida-menu-project");
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", ctx.style() === "topic" ? "py-2 px-4 lg:px-6" : "");
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.keys());
    }
  }, dependencies: [CommonModule, NgClass, NgTemplateOutlet, RouterLink, MenuProjectComponent, TranslatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DoormatsComponent, [{
    type: Component,
    args: [{ selector: "aida-doormats", imports: [CommonModule, RouterLink, TranslatePipe, MenuProjectComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div [ngClass]="style() === 'topic' ? 'py-2 px-4 lg:px-6' : ''" class="grid">
  @for (key of keys(); track key) {
    @if (items[key]; as item) {
      @if (!isHiddenInProd(key) || !prod) {
        @if (style() === 'topic') {
          <div class="col-12 md:col-6 lg:col-4">
            <div [class.text-red-500]="isHiddenInProd(key)">
              @if (isExternal(key)) {
                <a [href]="item.path | translate" target="_blank">
                  <ng-container *ngTemplateOutlet="doormatHeader; context: { $implicit: item.titleKey, external: isExternal(key) }" />
                </a>
              } @else {
                <a [routerLink]="item.path ? item.path : undefined">
                  <ng-container *ngTemplateOutlet="doormatHeader; context: { $implicit: item.titleKey, hidden: item.hideInProd }" />
                </a>
              }
            </div>
            <p class="text-color-secondary mt-2">{{ item.descriptionKey | translate }}</p>
          </div>
        } @else if (style() === 'card') {
          <div class="col-12 lg:col-6">
            @if (!isExternal(key)) {
              <a [routerLink]="getOnClick(key) ? null : item.path ? item.path : null" (click)="getOnClick(key)?.($event)" (keydown.enter)="getOnClick(key)?.($event)" class="no-underline h-full flex">
                <div [class]="styleCardService.cardStyles(!!item.path, false, true)" class="p-3 flex-1">
                  <div class="flex flex-row gap-3">
                    <div class="flex align-items-center">
                      <span [class]="iconClasses(item.notOutlined)">{{ item.icon }}</span>
                    </div>
                    <div [class.text-red-500]="isHiddenInProd(key)">
                      <ng-container *ngTemplateOutlet="doormatHeader; context: { $implicit: item.titleKey, hidden: item.hideInProd }" />
                      <p class="text-color-secondary mt-2">{{ item.descriptionKey | translate }}</p>
                    </div>
                  </div>
                </div>
              </a>
            }
          </div>
        }
      }
    }
  }
</div>

<ng-template #doormatHeader let-external="external" let-header let-hidden="hidden">
  @switch (headingLevel()) {
    @case ('h2') {
      <h2 [class.text-primary]="!hidden" class="text-xl font-semibold my-0">
        <span [class.hover:underline]="!hidden">{{ header | translate }}</span>
        @if (external) {
          <i class="pi pi-external-link ml-2 text-lg"></i>
        }
      </h2>
    }
    @case ('h3') {
      <h3 [class.text-primary]="!hidden" class="text-xl font-semibold my-0">
        <span [class.hover:underline]="!hidden">{{ header | translate }}</span>
        @if (external) {
          <i class="pi pi-external-link ml-2 text-lg"></i>
        }
      </h3>
    }
    @case ('h4') {
      <h4 [class.text-primary]="!hidden" class="text-xl font-semibold my-0">
        <span [class.hover:underline]="!hidden">{{ header | translate }}</span>
        @if (external) {
          <i class="pi pi-external-link ml-2 text-lg"></i>
        }
      </h4>
    }
    @case ('h5') {
      <h5 [class.text-primary]="!hidden" class="text-xl font-semibold my-0">
        <span [class.hover:underline]="!hidden">{{ header | translate }}</span>
        @if (external) {
          <i class="pi pi-external-link ml-2 text-lg"></i>
        }
      </h5>
    }
  }
</ng-template>

<aida-menu-project />
` }]
  }], null, { keys: [{ type: Input, args: [{ isSignal: true, alias: "keys", required: true }] }], headingLevel: [{ type: Input, args: [{ isSignal: true, alias: "headingLevel", required: false }] }], style: [{ type: Input, args: [{ isSignal: true, alias: "style", required: false }] }], dialog: [{ type: ViewChild, args: [forwardRef(() => MenuProjectComponent), { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DoormatsComponent, { className: "DoormatsComponent", filePath: "src/app/components/doormats/doormats.component.ts", lineNumber: 73 });
})();

export {
  AddCollaboratorsComponent,
  MailtoService,
  DOORMATS,
  DoormatsComponent,
  SignInButtonComponent,
  SetupProjectComponent,
  MenuProjectComponent
};
//# sourceMappingURL=chunk-7AOPUYAN.js.map
