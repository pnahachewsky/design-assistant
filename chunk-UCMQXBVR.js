import {
  InputGroup,
  InputGroupAddon,
  InputGroupAddonModule,
  InputGroupModule
} from "./chunk-7DITWZ3V.js";
import {
  Textarea,
  TextareaModule
} from "./chunk-Y576ZK6L.js";
import {
  IftaLabel,
  IftaLabelModule
} from "./chunk-FQDO2XGS.js";
import {
  ProjectCacheService
} from "./chunk-VVTAMTDS.js";
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
  inject,
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
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-KRHY6Z2H.js";

// src/app/components/edit-node/edit-metadata/edit-metadata.component.ts
var EditMetadataComponent = class _EditMetadataComponent {
  projectCache = inject(ProjectCacheService);
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
  addonClasses(tooLong) {
    const colour = tooLong ? "text-red" : "text-green";
    const width = this.projectCache.selectedLang() === "both" ? "w-2" : "w-1";
    return `secondary-outline text-center min-w-min ${colour} ${width}`;
  }
  static \u0275fac = function EditMetadataComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditMetadataComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditMetadataComponent, selectors: [["aida-edit-metadata"]], inputs: { meta: [1, "meta"], version: [1, "version"], lang: [1, "lang"], disabled: [1, "disabled"] }, outputs: { changed: "changed" }, decls: 25, vars: 27, consts: [[1, "flex", "flex-column", "gap-1"], ["fluid", "", "pInputText", "", "type", "text", "variant", "outlined", 1, "secondary-outline", "block", 3, "ngModelChange", "ngModel", "disabled", "id"], [3, "for"], [3, "styleClass"], ["autoResize", "true", "fluid", "", "pTextarea", "", "rows", "1", "variant", "outlined", 1, "secondary-outline", "block", 3, "ngModelChange", "ngModel", "disabled", "id"]], template: function EditMetadataComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "p-inputgroup")(2, "p-iftalabel")(3, "input", 1);
      \u0275\u0275twoWayListener("ngModelChange", function EditMetadataComponent_Template_input_ngModelChange_3_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.meta().title, $event) || (ctx.meta().title = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function EditMetadataComponent_Template_input_ngModelChange_3_listener() {
        return ctx.changed.emit();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "label", 2);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "p-inputgroup-addon", 3);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "p-inputgroup")(10, "p-iftalabel")(11, "textarea", 4);
      \u0275\u0275twoWayListener("ngModelChange", function EditMetadataComponent_Template_textarea_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.meta().description, $event) || (ctx.meta().description = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function EditMetadataComponent_Template_textarea_ngModelChange_11_listener() {
        return ctx.changed.emit();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "label", 2);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "p-inputgroup-addon", 3);
      \u0275\u0275text(16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "p-inputgroup")(18, "p-iftalabel")(19, "textarea", 4);
      \u0275\u0275twoWayListener("ngModelChange", function EditMetadataComponent_Template_textarea_ngModelChange_19_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.meta().keywords, $event) || (ctx.meta().keywords = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function EditMetadataComponent_Template_textarea_ngModelChange_19_listener() {
        return ctx.changed.emit();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "label", 2);
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "p-inputgroup-addon", 3);
      \u0275\u0275text(24);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.meta().title);
      \u0275\u0275property("disabled", ctx.disabled())("id", "title-" + ctx.lang());
      \u0275\u0275advance();
      \u0275\u0275property("for", "title-" + ctx.lang());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 21, "editNode.title"));
      \u0275\u0275advance(2);
      \u0275\u0275property("styleClass", ctx.addonClasses(ctx.meta().title.length > 60));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1("", ctx.meta().title.length, "/60");
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.meta().description);
      \u0275\u0275property("disabled", ctx.disabled())("id", "description-" + ctx.lang());
      \u0275\u0275advance();
      \u0275\u0275property("for", "description-" + ctx.lang());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 23, "editNode.description"));
      \u0275\u0275advance(2);
      \u0275\u0275property("styleClass", ctx.addonClasses(ctx.meta().description.length > 160));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1("", ctx.meta().description.length, "/160");
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.meta().keywords);
      \u0275\u0275property("disabled", ctx.disabled())("id", "keywords-" + ctx.lang());
      \u0275\u0275advance();
      \u0275\u0275property("for", "keywords-" + ctx.lang());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 25, "editNode.keywords"));
      \u0275\u0275advance(2);
      \u0275\u0275property("styleClass", ctx.addonClasses(ctx.meta().keywords.length > 160));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1("", ctx.meta().keywords.length, "/160");
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, IftaLabelModule, IftaLabel, InputTextModule, InputText, TextareaModule, Textarea, InputGroupAddonModule, InputGroupAddon, InputGroupModule, InputGroup, TranslatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditMetadataComponent, [{
    type: Component,
    args: [{ selector: "aida-edit-metadata", imports: [FormsModule, TranslatePipe, IftaLabelModule, InputTextModule, TextareaModule, InputGroupAddonModule, InputGroupModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="flex flex-column gap-1">
  <p-inputgroup>
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
    <p-inputgroup-addon [styleClass]="addonClasses(meta().title.length > 60)">{{ meta().title.length }}/60</p-inputgroup-addon>
  </p-inputgroup>
  <p-inputgroup>
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
    <p-inputgroup-addon [styleClass]="addonClasses(meta().description.length > 160)">{{ meta().description.length }}/160</p-inputgroup-addon>
  </p-inputgroup>
  <p-inputgroup>
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
    <p-inputgroup-addon [styleClass]="addonClasses(meta().keywords.length > 160)">{{ meta().keywords.length }}/160</p-inputgroup-addon>
  </p-inputgroup>
</div>
` }]
  }], null, { meta: [{ type: Input, args: [{ isSignal: true, alias: "meta", required: true }] }], version: [{ type: Input, args: [{ isSignal: true, alias: "version", required: false }] }], lang: [{ type: Input, args: [{ isSignal: true, alias: "lang", required: false }] }], disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false }] }], changed: [{ type: Output, args: ["changed"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditMetadataComponent, { className: "EditMetadataComponent", filePath: "src/app/components/edit-node/edit-metadata/edit-metadata.component.ts", lineNumber: 22 });
})();

export {
  EditMetadataComponent
};
//# sourceMappingURL=chunk-UCMQXBVR.js.map
