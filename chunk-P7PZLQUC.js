import {
  TooltipDirective
} from "./chunk-YEJSFSQN.js";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupAddonModule,
  InputGroupModule
} from "./chunk-XXWXX2BK.js";
import {
  Textarea,
  TextareaModule
} from "./chunk-CNL4NKIR.js";
import {
  IftaLabel,
  IftaLabelModule
} from "./chunk-S4R55H3T.js";
import {
  FetchService
} from "./chunk-UDJGVSF2.js";
import {
  Button,
  ButtonModule,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-CLIVXUA2.js";
import "./chunk-34V6ZG4B.js";
import {
  ChangeDetectionStrategy,
  Component,
  TranslatePipe,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
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
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-KRHY6Z2H.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-YCXP4XZS.js";

// src/app/views/toolbox/standalone-tools/scratch-pad/scratch-pad.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ScratchPadComponent_For_9_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-inputgroup-addon", 5)(1, "div", 1)(2, "div", 6)(3, "div", 7);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 8);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 6)(9, "div", 7);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 8);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const grade_r4 = ctx;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r2.gradeClasses(grade_r4.fleschKincaid));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(grade_r4.fleschKincaid);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 8, "common.readability.fleschKincaid"));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r2.gradeClasses(grade_r4.gunningFog));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(grade_r4.gunningFog);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 10, "common.readability.gunningFog"));
  }
}
function ScratchPadComponent_For_9_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-inputgroup-addon")(1, "div", 9);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "p-button", 10);
    \u0275\u0275listener("onClick", function ScratchPadComponent_For_9_Conditional_21_Template_p_button_onClick_3_listener() {
      \u0275\u0275restoreView(_r5);
      const input_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeInput(input_r2.id));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("aidaTooltip", \u0275\u0275pipeBind1(2, 1, "common.delete"));
  }
}
function ScratchPadComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-inputgroup")(1, "p-iftalabel")(2, "textarea", 3);
    \u0275\u0275listener("ngModelChange", function ScratchPadComponent_For_9_Template_textarea_ngModelChange_2_listener($event) {
      const input_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateText(input_r2.id, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "label", 4);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p-inputgroup-addon", 5)(7, "div", 1)(8, "div", 6)(9, "div", 7);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 8);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 6)(15, "div", 7);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 8);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(20, ScratchPadComponent_For_9_Conditional_20_Template, 14, 12, "p-inputgroup-addon", 5);
    \u0275\u0275conditionalCreate(21, ScratchPadComponent_For_9_Conditional_21_Template, 4, 3, "p-inputgroup-addon");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_19_0;
    const input_r2 = ctx.$implicit;
    const \u0275$index_12_r6 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "text-" + input_r2.id)("ngModel", input_r2.text);
    \u0275\u0275advance();
    \u0275\u0275property("for", "text-" + input_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 10, "scratchPad.label"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.stats()[\u0275$index_12_r6].characters);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 12, "common.characters"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.stats()[\u0275$index_12_r6].words);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 14, "common.words"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_19_0 = ctx_r2.stats()[\u0275$index_12_r6].grade) ? 20 : -1, tmp_19_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.inputs().length > 1 ? 21 : -1);
  }
}
var ScratchPadComponent = class _ScratchPadComponent {
  fetchService = inject(FetchService);
  nextId = 1;
  inputs = signal([{ id: this.nextId++, text: "" }], ...ngDevMode ? [{ debugName: "inputs" }] : (
    /* istanbul ignore next */
    []
  ));
  addInput() {
    this.inputs.update((list) => [...list, { id: this.nextId++, text: "" }]);
  }
  removeInput(id) {
    this.inputs.update((list) => list.filter((i) => i.id !== id));
  }
  updateText(id, text) {
    this.inputs.update((list) => list.map((i) => i.id === id ? __spreadProps(__spreadValues({}, i), { text }) : i));
  }
  gradeClasses(grade) {
    return grade > 9 ? "text-red" : grade > 8 ? "" : "text-green";
  }
  stats = computed(() => this.inputs().map((i) => ({
    id: i.id,
    characters: i.text.length,
    words: i.text.trim().split(/\s+/).filter((word) => word.length > 0).length,
    grade: i.text.trim() ? this.fetchService.getTextReadability(i.text.trim()) : { fleschKincaid: 0, gunningFog: 0 }
  })), ...ngDevMode ? [{ debugName: "stats" }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function ScratchPadComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScratchPadComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScratchPadComponent, selectors: [["aida-scratch-pad"]], decls: 12, vars: 12, consts: [["id", "wb-cont"], [1, "flex", "flex-column", "gap-2"], ["icon", "pi pi-plus", 1, "align-self-end", 3, "onClick", "label"], ["autoResize", "true", "fluid", "", "pTextarea", "", "rows", "4", "variant", "outlined", 1, "secondary-outline", "block", "text-2xl", 3, "ngModelChange", "id", "ngModel"], [3, "for"], [1, "w-10rem"], [1, "text-center"], [1, "text-2xl"], [1, "capitalize"], [1, "h-full", 3, "aidaTooltip"], ["icon", "pi pi-trash", "severity", "danger", "styleClass", "hover:border-red", "text", "", 1, "h-full", 3, "onClick"]], template: function ScratchPadComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h1", 0);
      \u0275\u0275text(1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p");
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 1);
      \u0275\u0275repeaterCreate(8, ScratchPadComponent_For_9_Template, 22, 16, "p-inputgroup", null, _forTrack0);
      \u0275\u0275elementStart(10, "p-button", 2);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275listener("onClick", function ScratchPadComponent_Template_p_button_onClick_10_listener() {
        return ctx.addInput();
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 4, "scratchPad._title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(5, 6, "scratchPad.description"), "", \u0275\u0275pipeBind1(6, 8, "scratchPad.description2"));
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.inputs());
      \u0275\u0275advance(2);
      \u0275\u0275property("label", \u0275\u0275pipeBind1(11, 10, "scratchPad.addInput"));
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, ButtonModule, Button, IftaLabelModule, IftaLabel, InputGroupAddonModule, InputGroupAddon, InputGroupModule, InputGroup, TextareaModule, Textarea, TooltipDirective, TranslatePipe], styles: ["\np-inputgroup[_ngcontent-%COMP%], \np-inputgroup-addon[_ngcontent-%COMP%], \n.p-inputgroup-addon[_ngcontent-%COMP%] {\n  overflow: visible !important;\n}\n/*# sourceMappingURL=scratch-pad.component-B4YRXAVP.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScratchPadComponent, [{
    type: Component,
    args: [{ selector: "aida-scratch-pad", imports: [FormsModule, TranslatePipe, ButtonModule, IftaLabelModule, InputGroupAddonModule, InputGroupModule, TextareaModule, TooltipDirective], changeDetection: ChangeDetectionStrategy.OnPush, template: `<h1 id="wb-cont">{{ 'scratchPad._title' | translate }}</h1>
<p>{{ 'scratchPad.description' | translate }}{{ 'scratchPad.description2' | translate }}</p>

<div class="flex flex-column gap-2">
  @for (input of inputs(); track input.id; let i = $index) {
    <p-inputgroup>
      <p-iftalabel>
        <textarea
          [id]="'text-' + input.id"
          [ngModel]="input.text"
          (ngModelChange)="updateText(input.id, $event)"
          class="secondary-outline block text-2xl"
          autoResize="true"
          fluid
          pTextarea
          rows="4"
          variant="outlined"
        ></textarea>
        <label [for]="'text-' + input.id">{{ 'scratchPad.label' | translate }}</label>
      </p-iftalabel>
      <p-inputgroup-addon class="w-10rem">
        <div class="flex flex-column gap-2">
          <div class="text-center">
            <div class="text-2xl">{{ stats()[i].characters }}</div>
            <div class="capitalize">{{ 'common.characters' | translate }}</div>
          </div>
          <div class="text-center">
            <div class="text-2xl">{{ stats()[i].words }}</div>
            <div class="capitalize">{{ 'common.words' | translate }}</div>
          </div>
        </div>
      </p-inputgroup-addon>
      @if (stats()[i].grade; as grade) {
        <p-inputgroup-addon class="w-10rem">
          <div class="flex flex-column gap-2">
            <div class="text-center">
              <div [class]="gradeClasses(grade.fleschKincaid)" class="text-2xl">{{ grade.fleschKincaid }}</div>
              <div class="capitalize">{{ 'common.readability.fleschKincaid' | translate }}</div>
            </div>
            <div class="text-center">
              <div [class]="gradeClasses(grade.gunningFog)" class="text-2xl">{{ grade.gunningFog }}</div>
              <div class="capitalize">{{ 'common.readability.gunningFog' | translate }}</div>
            </div>
          </div>
        </p-inputgroup-addon>
      }
      @if (inputs().length > 1) {
        <p-inputgroup-addon>
          <div [aidaTooltip]="'common.delete' | translate" class="h-full">
            <p-button (onClick)="removeInput(input.id)" class="h-full" icon="pi pi-trash" severity="danger" styleClass="hover:border-red" text />
          </div>
        </p-inputgroup-addon>
      }
    </p-inputgroup>
  }
  <p-button [label]="'scratchPad.addInput' | translate" (onClick)="addInput()" class="align-self-end" icon="pi pi-plus" />
</div>
`, styles: ["/* angular:styles/component:css;ca67b32af66193c80055f85130f15abf33b39de0c6bf15cb0103b096d3979485;C:/my-working-files/GitHub/design-assistant-aws/src/app/views/toolbox/standalone-tools/scratch-pad/scratch-pad.component.ts */\np-inputgroup,\np-inputgroup-addon,\n.p-inputgroup-addon {\n  overflow: visible !important;\n}\n/*# sourceMappingURL=scratch-pad.component-B4YRXAVP.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScratchPadComponent, { className: "ScratchPadComponent", filePath: "src/app/views/toolbox/standalone-tools/scratch-pad/scratch-pad.component.ts", lineNumber: 34 });
})();
export {
  ScratchPadComponent
};
//# sourceMappingURL=chunk-P7PZLQUC.js.map
