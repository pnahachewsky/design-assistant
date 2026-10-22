import {
  Textarea,
  TextareaModule
} from "./chunk-Y576ZK6L.js";
import {
  IftaLabel,
  IftaLabelModule
} from "./chunk-FQDO2XGS.js";
import {
  DefaultValueAccessor,
  FormsModule,
  InputText,
  InputTextModule,
  NgControlStatus,
  NgModel
} from "./chunk-QN4TTD5X.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  TranslatePipe,
  input,
  output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-KRHY6Z2H.js";

// src/app/components/edit-node/edit-metadata/edit-metadata.component.ts
var EditMetadataComponent = class _EditMetadataComponent {
  meta = input.required(...ngDevMode ? [{ debugName: "meta" }] : (
    /* istanbul ignore next */
    []
  ));
  version = input("prototype", ...ngDevMode ? [{ debugName: "version" }] : (
    /* istanbul ignore next */
    []
  ));
  lang = input("en", ...ngDevMode ? [{ debugName: "lang" }] : (
    /* istanbul ignore next */
    []
  ));
  disabled = input(false, ...ngDevMode ? [{ debugName: "disabled" }] : (
    /* istanbul ignore next */
    []
  ));
  changed = output();
  static \u0275fac = function EditMetadataComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditMetadataComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditMetadataComponent, selectors: [["aida-edit-metadata"]], inputs: { meta: [1, "meta"], version: [1, "version"], lang: [1, "lang"], disabled: [1, "disabled"] }, outputs: { changed: "changed" }, decls: 16, vars: 21, consts: [[1, "flex", "flex-column", "gap-1"], ["fluid", "", "pInputText", "", "type", "text", "variant", "outlined", 1, "secondary-outline", "block", 3, "ngModelChange", "ngModel", "disabled", "id"], [3, "for"], ["autoResize", "true", "fluid", "", "pTextarea", "", "rows", "1", "variant", "outlined", 1, "secondary-outline", "block", 3, "ngModelChange", "ngModel", "disabled", "id"]], template: function EditMetadataComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "p-iftalabel")(2, "input", 1);
      \u0275\u0275twoWayListener("ngModelChange", function EditMetadataComponent_Template_input_ngModelChange_2_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.meta().title, $event) || (ctx.meta().title = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function EditMetadataComponent_Template_input_ngModelChange_2_listener() {
        return ctx.changed.emit();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "label", 2);
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "p-iftalabel")(7, "textarea", 3);
      \u0275\u0275twoWayListener("ngModelChange", function EditMetadataComponent_Template_textarea_ngModelChange_7_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.meta().description, $event) || (ctx.meta().description = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function EditMetadataComponent_Template_textarea_ngModelChange_7_listener() {
        return ctx.changed.emit();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "label", 2);
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "p-iftalabel")(12, "textarea", 3);
      \u0275\u0275twoWayListener("ngModelChange", function EditMetadataComponent_Template_textarea_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.meta().keywords, $event) || (ctx.meta().keywords = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function EditMetadataComponent_Template_textarea_ngModelChange_12_listener() {
        return ctx.changed.emit();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "label", 2);
      \u0275\u0275text(14);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.meta().title);
      \u0275\u0275property("disabled", ctx.disabled())("id", "title-" + ctx.lang());
      \u0275\u0275advance();
      \u0275\u0275property("for", "title-" + ctx.lang());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 15, "editNode.title"));
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.meta().description);
      \u0275\u0275property("disabled", ctx.disabled())("id", "description-" + ctx.lang());
      \u0275\u0275advance();
      \u0275\u0275property("for", "description-" + ctx.lang());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 17, "editNode.description"));
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.meta().keywords);
      \u0275\u0275property("disabled", ctx.disabled())("id", "keywords-" + ctx.lang());
      \u0275\u0275advance();
      \u0275\u0275property("for", "keywords-" + ctx.lang());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 19, "editNode.keywords"));
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, IftaLabelModule, IftaLabel, InputTextModule, InputText, TextareaModule, Textarea, TranslatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditMetadataComponent, [{
    type: Component,
    args: [{ selector: "aida-edit-metadata", imports: [FormsModule, TranslatePipe, IftaLabelModule, InputTextModule, TextareaModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="flex flex-column gap-1">
  <p-iftalabel>
    <input
      [(ngModel)]="meta().title"
      [disabled]="disabled()"
      [id]="'title-' + lang()"
      (ngModelChange)="changed.emit()"
      class="secondary-outline block"
      fluid
      pInputText
      type="text"
      variant="outlined"
    />
    <label [for]="'title-' + lang()">{{ 'editNode.title' | translate }}</label>
  </p-iftalabel>
  <p-iftalabel>
    <textarea
      [(ngModel)]="meta().description"
      [disabled]="disabled()"
      [id]="'description-' + lang()"
      (ngModelChange)="changed.emit()"
      class="secondary-outline block"
      autoResize="true"
      fluid
      pTextarea
      rows="1"
      variant="outlined"
    ></textarea>
    <label [for]="'description-' + lang()">{{ 'editNode.description' | translate }}</label>
  </p-iftalabel>
  <p-iftalabel>
    <textarea
      [(ngModel)]="meta().keywords"
      [disabled]="disabled()"
      [id]="'keywords-' + lang()"
      (ngModelChange)="changed.emit()"
      class="secondary-outline block"
      autoResize="true"
      fluid
      pTextarea
      rows="1"
      variant="outlined"
    ></textarea>
    <label [for]="'keywords-' + lang()">{{ 'editNode.keywords' | translate }}</label>
  </p-iftalabel>
</div>
` }]
  }], null, { meta: [{ type: Input, args: [{ isSignal: true, alias: "meta", required: true }] }], version: [{ type: Input, args: [{ isSignal: true, alias: "version", required: false }] }], lang: [{ type: Input, args: [{ isSignal: true, alias: "lang", required: false }] }], disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false }] }], changed: [{ type: Output, args: ["changed"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditMetadataComponent, { className: "EditMetadataComponent", filePath: "src/app/components/edit-node/edit-metadata/edit-metadata.component.ts", lineNumber: 18 });
})();

export {
  EditMetadataComponent
};
//# sourceMappingURL=chunk-YTOYTTTA.js.map
