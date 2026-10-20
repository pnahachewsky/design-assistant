// node_modules/@primeuix/themes/node_modules/@primeuix/utils/dist/object/index.mjs
var ce = Object.defineProperty;
var $ = Object.getOwnPropertySymbols;
var pe = Object.prototype.hasOwnProperty;
var ge = Object.prototype.propertyIsEnumerable;
var q = (e64, t58, n53) => t58 in e64 ? ce(e64, t58, { enumerable: true, configurable: true, writable: true, value: n53 }) : e64[t58] = n53;
var E = (e64, t58) => {
  for (var n53 in t58 || (t58 = {})) pe.call(t58, n53) && q(e64, n53, t58[n53]);
  if ($) for (var n53 of $(t58)) ge.call(t58, n53) && q(e64, n53, t58[n53]);
  return e64;
};
function s(e64, t58 = true) {
  return e64 instanceof Object && e64.constructor === Object && (t58 || Object.keys(e64).length !== 0);
}
var me = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]);
function S(e64, t58, n53, r92 = /* @__PURE__ */ new WeakSet()) {
  let o93 = E({}, e64);
  Object.keys(o93).length === 0 && !n53.has(t58) && n53.set(t58, o93);
  let u9 = !r92.has(t58);
  return u9 && r92.add(t58), Object.keys(t58).forEach((i37) => {
    var y, k4;
    if (me.has(i37)) return;
    let f6 = i37, a50 = t58[f6];
    s(a50) && f6 in e64 && s(e64[f6]) ? o93[f6] = r92.has(a50) ? (y = n53.get(a50)) != null ? y : S({}, a50, n53, r92) : S(e64[f6], a50, n53, r92) : s(a50) ? o93[f6] = (k4 = n53.get(a50)) != null ? k4 : S({}, a50, n53, r92) : o93[f6] = a50;
  }), u9 && r92.delete(t58), o93;
}
function F(...e64) {
  return e64.reduce((t58, n53) => S(t58, n53 || {}, /* @__PURE__ */ new WeakMap()), {});
}

// node_modules/@primeuix/themes/node_modules/@primeuix/utils/dist/eventbus/index.mjs
function v() {
  let s17 = /* @__PURE__ */ new Map(), r92 = { on(n53, t58) {
    let e64 = s17.get(n53);
    return e64 ? e64.push(t58) : e64 = [t58], s17.set(n53, e64), r92;
  }, off(n53, t58) {
    let e64 = s17.get(n53);
    if (e64) {
      let o93 = e64.indexOf(t58);
      o93 !== -1 && e64.splice(o93, 1);
    }
    return r92;
  }, emit(n53, ...t58) {
    let e64 = s17.get(n53);
    e64 && e64.forEach((o93) => {
      o93(t58[0]);
    });
  }, clear() {
    s17.clear();
  } };
  return r92;
}

// node_modules/@primeuix/themes/node_modules/@primeuix/styled/dist/index.mjs
function xe(e64, ...t58) {
  return F(e64, ...t58);
}
var ct = v();

// node_modules/@primeuix/themes/dist/index.mjs
var t = (t58, ...a50) => xe(t58, ...a50);

// node_modules/@primeuix/themes/dist/material/accordion/index.mjs
var o = { transitionDuration: "{transition.duration}" };
var r = { borderWidth: "0", borderColor: "{content.border.color}" };
var t2 = { color: "{text.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}", padding: "1.125rem", fontWeight: "600", fontSize: "{typography.font.size}", borderRadius: "0", borderWidth: "0", borderColor: "{content.border.color}", background: "{content.background}", hoverBackground: "{content.hover.background}", activeBackground: "{content.background}", activeHoverBackground: "{content.background}", focusRing: { width: "0", style: "none", color: "unset", offset: "0", shadow: "none" }, toggleIcon: { color: "{text.muted.color}", hoverColor: "{text.muted.color}", activeColor: "{text.muted.color}", activeHoverColor: "{text.muted.color}" }, first: { topBorderRadius: "{content.border.radius}", borderWidth: "0" }, last: { bottomBorderRadius: "{content.border.radius}", activeBottomBorderRadius: "0" } };
var n = { borderWidth: "0", borderColor: "{content.border.color}", background: "{content.background}", color: "{text.color}", padding: "0 1.125rem 1.125rem 1.125rem" };
var css = "\n.p-accordionpanel {\n    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\n    transition: margin dt('accordion.transition.duration');\n}\n\n.p-accordionpanel-active {\n    margin: 0.875rem 0;\n}\n\n.p-accordionpanel:first-child {\n    border-top-left-radius: dt('content.border.radius');\n    border-top-right-radius: dt('content.border.radius');\n    margin-top: 0;\n}\n\n.p-accordionpanel:last-child {\n    border-bottom-left-radius: dt('content.border.radius');\n    border-bottom-right-radius: dt('content.border.radius');\n    margin-bottom: 0;\n}\n\n.p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {\n    background: dt('navigation.item.active.background');\n}\n";
var e = { root: o, panel: r, header: t2, content: n, css };

// node_modules/@primeuix/themes/dist/material/autocomplete/index.mjs
var o2 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" };
var r2 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var e2 = { padding: "{list.padding}", gap: "{list.gap}" };
var t3 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", fontWeight: "{list.option.font.weight}", fontSize: "{list.option.font.size}" };
var d = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", fontSize: "{list.option.group.font.size}", padding: "{list.option.group.padding}" };
var l = { width: "2.625rem", sm: { width: "2.25rem" }, lg: { width: "3rem" }, borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "0", style: "none", color: "unset", offset: "0", shadow: "none" }, background: "light-dark({surface.100}, {surface.800})", hoverBackground: "light-dark({surface.200}, {surface.700})", activeBackground: "light-dark({surface.300}, {surface.600})", color: "light-dark({surface.600}, {surface.300})", hoverColor: "light-dark({surface.700}, {surface.200})", activeColor: "light-dark({surface.800}, {surface.100})" };
var i = { borderRadius: "{border.radius.sm}", focusBackground: "light-dark({surface.300}, {surface.600})", focusColor: "light-dark({surface.950}, {surface.0})" };
var n2 = { padding: "{list.option.padding}" };
var css2 = "\n.p-autocomplete-dropdown:focus-visible {\n    background: dt('autocomplete.dropdown.hover.background');\n    border-color: dt('autocomplete.dropdown.hover.border.color');\n    color: dt('autocomplete.dropdown.hover.color');\n}\n\n.p-variant-filled.p-autocomplete-input-multiple {\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    border: 1px solid transparent;\n    background: dt('autocomplete.filled.background') no-repeat;\n    background-image: linear-gradient(to bottom, dt('autocomplete.focus.border.color'), dt('autocomplete.focus.border.color')), linear-gradient(to bottom, dt('autocomplete.border.color'), dt('autocomplete.border.color'));\n    background-size: 0 2px, 100% 1px;\n    background-position: 50% 100%, 50% 100%;\n    background-origin: border-box;\n    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);\n}\n\n.p-autocomplete:not(.p-disabled):hover .p-variant-filled.p-autocomplete-input-multiple {\n    background: dt('autocomplete.filled.hover.background') no-repeat;\n    background-image: linear-gradient(to bottom, dt('autocomplete.focus.border.color'), dt('autocomplete.focus.border.color')), linear-gradient(to bottom, dt('autocomplete.hover.border.color'), dt('autocomplete.hover.border.color'));\n    background-size: 0 2px, 100% 1px;\n    background-position: 50% 100%, 50% 100%;\n    background-origin: border-box;\n    border-color: transparent;\n}\n\n.p-autocomplete:not(.p-disabled).p-focus .p-variant-filled.p-autocomplete-input-multiple {\n    outline: 0 none;\n    background: dt('autocomplete.filled.focus.background') no-repeat;\n    background-image: linear-gradient(to bottom, dt('autocomplete.focus.border.color'), dt('autocomplete.focus.border.color')), linear-gradient(to bottom, dt('autocomplete.border.color'), dt('autocomplete.border.color'));\n    background-size: 100% 2px, 100% 1px;\n    background-position: 50% 100%, 50% 100%;\n    background-origin: border-box;\n    border-color: transparent;\n}\n\n.p-autocomplete:not(.p-disabled).p-focus:hover .p-variant-filled.p-autocomplete-input-multiple {\n    background-image: linear-gradient(to bottom, dt('autocomplete.focus.border.color'), dt('autocomplete.focus.border.color')), linear-gradient(to bottom, dt('autocomplete.hover.border.color'), dt('autocomplete.hover.border.color'));\n}\n\n.p-autocomplete.p-invalid .p-autocomplete-input-multiple {\n    background-image: linear-gradient(to bottom, dt('autocomplete.invalid.border.color'), dt('autocomplete.invalid.border.color')), linear-gradient(to bottom, dt('autocomplete.invalid.border.color'), dt('autocomplete.invalid.border.color'));\n}\n\n.p-autocomplete.p-invalid.p-focus .p-autocomplete-input-multiple  {\n    background-image: linear-gradient(to bottom, dt('autocomplete.invalid.border.color'), dt('autocomplete.invalid.border.color')), linear-gradient(to bottom, dt('autocomplete.invalid.border.color'), dt('autocomplete.invalid.border.color'));\n}\n\n.p-autocomplete-option {\n    transition: none;\n}\n";
var a = { root: o2, overlay: r2, list: e2, option: t3, optionGroup: d, dropdown: l, chip: i, emptyMessage: n2, css: css2 };

// node_modules/@primeuix/themes/dist/material/avatar/index.mjs
var e3 = { width: "1.75rem", height: "1.75rem", fontWeight: "{typography.font.weight}", fontSize: "0.875rem", background: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" };
var r3 = { size: "0.875rem" };
var o3 = { borderColor: "{content.background}", offset: "-0.625rem" };
var t4 = { width: "2.625rem", height: "2.625rem", fontSize: "1.25rem", icon: { size: "1.25rem" }, group: { offset: "-0.875rem" } };
var i2 = { width: "3.5rem", height: "3.5rem", fontSize: "1.75rem", icon: { size: "1.75rem" }, group: { offset: "-1.25rem" } };
var n3 = { root: e3, icon: r3, group: o3, lg: t4, xl: i2, css: "" };

// node_modules/@primeuix/themes/dist/material/badge/index.mjs
var r4 = { borderRadius: "{border.radius.md}", padding: "0 0.5rem", fontSize: "0.625rem", fontWeight: "700", minWidth: "1.25rem", height: "1.25rem" };
var e4 = { size: "0.5rem" };
var a2 = { fontSize: "0.5rem", minWidth: "1.125rem", height: "1.125rem" };
var o4 = { fontSize: "0.75rem", minWidth: "1.5rem", height: "1.5rem" };
var d2 = { fontSize: "0.875rem", minWidth: "1.75rem", height: "1.75rem" };
var i3 = { background: "{primary.color}", color: "{primary.contrast.color}" };
var c = { background: "light-dark({surface.100}, {surface.800})", color: "light-dark({surface.600}, {surface.300})" };
var t5 = { background: "light-dark({green.500}, {green.400})", color: "light-dark({surface.0}, {green.950})" };
var g = { background: "light-dark({sky.500}, {sky.400})", color: "light-dark({surface.0}, {sky.950})" };
var n4 = { background: "light-dark({orange.500}, {orange.400})", color: "light-dark({surface.0}, {orange.950})" };
var s2 = { background: "light-dark({red.500}, {red.400})", color: "light-dark({surface.0}, {red.950})" };
var h = { background: "light-dark({surface.950}, {surface.0})", color: "light-dark({surface.0}, {surface.950})" };
var l2 = { root: r4, dot: e4, sm: a2, lg: o4, xl: d2, primary: i3, secondary: c, success: t5, info: g, warn: n4, danger: s2, contrast: h, css: "" };

// node_modules/@primeuix/themes/dist/material/base/index.mjs
var r5 = { borderRadius: { none: "0", xs: "2px", sm: "4px", md: "6px", lg: "8px", xl: "12px" }, emerald: { 50: "#E8F6F1", 100: "#C5EBE1", 200: "#9EDFCF", 300: "#76D3BD", 400: "#58C9AF", 500: "#3BBFA1", 600: "#35AF94", 700: "#2D9B83", 800: "#268873", 900: "#1A6657", 950: "#0d3329" }, green: { 50: "#E8F5E9", 100: "#C8E6C9", 200: "#A5D6A7", 300: "#81C784", 400: "#66BB6A", 500: "#4CAF50", 600: "#43A047", 700: "#388E3C", 800: "#2E7D32", 900: "#1B5E20", 950: "#0e2f10" }, lime: { 50: "#F9FBE7", 100: "#F0F4C3", 200: "#E6EE9C", 300: "#DCE775", 400: "#D4E157", 500: "#CDDC39", 600: "#C0CA33", 700: "#AFB42B", 800: "#9E9D24", 900: "#827717", 950: "#413c0c" }, red: { 50: "#FFEBEE", 100: "#FFCDD2", 200: "#EF9A9A", 300: "#E57373", 400: "#EF5350", 500: "#F44336", 600: "#E53935", 700: "#D32F2F", 800: "#C62828", 900: "#B71C1C", 950: "#5c0e0e" }, orange: { 50: "#FFF3E0", 100: "#FFE0B2", 200: "#FFCC80", 300: "#FFB74D", 400: "#FFA726", 500: "#FF9800", 600: "#FB8C00", 700: "#F57C00", 800: "#EF6C00", 900: "#E65100", 950: "#732900" }, amber: { 50: "#FFF8E1", 100: "#FFECB3", 200: "#FFE082", 300: "#FFD54F", 400: "#FFCA28", 500: "#FFC107", 600: "#FFB300", 700: "#FFA000", 800: "#FF8F00", 900: "#FF6F00", 950: "#803800" }, yellow: { 50: "#FFFDE7", 100: "#FFF9C4", 200: "#FFF59D", 300: "#FFF176", 400: "#FFEE58", 500: "#FFEB3B", 600: "#FDD835", 700: "#FBC02D", 800: "#F9A825", 900: "#F57F17", 950: "#7b400c" }, teal: { 50: "#E0F2F1", 100: "#B2DFDB", 200: "#80CBC4", 300: "#4DB6AC", 400: "#26A69A", 500: "#009688", 600: "#00897B", 700: "#00796B", 800: "#00695C", 900: "#004D40", 950: "#002720" }, cyan: { 50: "#E0F7FA", 100: "#B2EBF2", 200: "#80DEEA", 300: "#4DD0E1", 400: "#26C6DA", 500: "#00BCD4", 600: "#00ACC1", 700: "#0097A7", 800: "#00838F", 900: "#006064", 950: "#003032" }, sky: { 50: "#E1F5FE", 100: "#B3E5FC", 200: "#81D4FA", 300: "#4FC3F7", 400: "#29B6F6", 500: "#03A9F4", 600: "#039BE5", 700: "#0288D1", 800: "#0277BD", 900: "#01579B", 950: "#012c4e" }, blue: { 50: "#E3F2FD", 100: "#BBDEFB", 200: "#90CAF9", 300: "#64B5F6", 400: "#42A5F5", 500: "#2196F3", 600: "#1E88E5", 700: "#1976D2", 800: "#1565C0", 900: "#0D47A1", 950: "#072451" }, indigo: { 50: "#E8EAF6", 100: "#C5CAE9", 200: "#9FA8DA", 300: "#7986CB", 400: "#5C6BC0", 500: "#3F51B5", 600: "#3949AB", 700: "#303F9F", 800: "#283593", 900: "#1A237E", 950: "#0d123f" }, violet: { 50: "#EDE7F6", 100: "#D1C4E9", 200: "#B39DDB", 300: "#9575CD", 400: "#7E57C2", 500: "#673AB7", 600: "#5E35B1", 700: "#512DA8", 800: "#4527A0", 900: "#311B92", 950: "#190e49" }, purple: { 50: "#F3E5F5", 100: "#E1BEE7", 200: "#CE93D8", 300: "#BA68C8", 400: "#AB47BC", 500: "#9C27B0", 600: "#8E24AA", 700: "#7B1FA2", 800: "#6A1B9A", 900: "#4A148C", 950: "#250a46" }, fuchsia: { 50: "#FDE6F3", 100: "#FBC1E3", 200: "#F897D1", 300: "#F56DBF", 400: "#F34DB2", 500: "#F12DA5", 600: "#E0289D", 700: "#CC2392", 800: "#B81E88", 900: "#951777", 950: "#4b0c3c" }, pink: { 50: "#FCE4EC", 100: "#F8BBD0", 200: "#F48FB1", 300: "#F06292", 400: "#EC407A", 500: "#E91E63", 600: "#D81B60", 700: "#C2185B", 800: "#AD1457", 900: "#880E4F", 950: "#440728" }, rose: { 50: "#FFF0F0", 100: "#FFD9D9", 200: "#FFC0C0", 300: "#FFA7A7", 400: "#FF8E8E", 500: "#FF7575", 600: "#FF5252", 700: "#FF3838", 800: "#F71C1C", 900: "#D50000", 950: "#3E0000" }, slate: { 50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1", 400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155", 800: "#1e293b", 900: "#0f172a", 950: "#020617" }, gray: { 50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827", 950: "#030712" }, zinc: { 50: "#fafafa", 100: "#f4f4f5", 200: "#e4e4e7", 300: "#d4d4d8", 400: "#a1a1aa", 500: "#71717a", 600: "#52525b", 700: "#3f3f46", 800: "#27272a", 900: "#18181b", 950: "#09090b" }, neutral: { 50: "#fafafa", 100: "#f5f5f5", 200: "#e5e5e5", 300: "#d4d4d4", 400: "#a3a3a3", 500: "#737373", 600: "#525252", 700: "#404040", 800: "#262626", 900: "#171717", 950: "#0a0a0a" }, stone: { 50: "#fafaf9", 100: "#f5f5f4", 200: "#e7e5e4", 300: "#d6d3d1", 400: "#a8a29e", 500: "#78716c", 600: "#57534e", 700: "#44403c", 800: "#292524", 900: "#1c1917", 950: "#0c0a09" } };
var a3 = { typography: { lineHeight: "1.5", fontFamily: "inherit", fontWeight: "normal", fontSize: "0.875rem" }, transitionDuration: "0.2s", focusRing: { width: "0", style: "none", color: "unset", offset: "0", shadow: "0 0 1px 4px light-dark({surface.200}, {surface.700})" }, disabledOpacity: "0.38", iconSize: "0.875rem", anchorGutter: "0", primary: { 50: "{emerald.50}", 100: "{emerald.100}", 200: "{emerald.200}", 300: "{emerald.300}", 400: "{emerald.400}", 500: "{emerald.500}", 600: "{emerald.600}", 700: "{emerald.700}", 800: "{emerald.800}", 900: "{emerald.900}", 950: "{emerald.950}", color: "light-dark({primary.500}, {primary.400})", contrastColor: "light-dark(#ffffff, {surface.900})", hoverColor: "light-dark({primary.400}, {primary.300})", activeColor: "light-dark({primary.300}, {primary.200})" }, formField: { fontWeight: "{typography.font.weight}", fontSize: "{typography.font.size}", paddingX: "0.625rem", paddingY: "0.625rem", sm: { fontSize: "0.75rem", paddingX: "0.5rem", paddingY: "0.5rem" }, lg: { fontSize: "1rem", paddingX: "0.75rem", paddingY: "0.75rem" }, borderRadius: "{border.radius.sm}", focusRing: { width: "2px", style: "solid", color: "{primary.color}", offset: "-2px", shadow: "none" }, transitionDuration: "{transition.duration}", background: "light-dark({surface.0}, {surface.950})", disabledBackground: "light-dark({surface.300}, {surface.700})", filledBackground: "light-dark({surface.100}, {surface.800})", filledHoverBackground: "light-dark({surface.200}, {surface.700})", filledFocusBackground: "light-dark({surface.100}, {surface.800})", borderColor: "light-dark({surface.400}, {surface.600})", hoverBorderColor: "light-dark({surface.900}, {surface.400})", focusBorderColor: "{primary.color}", invalidBorderColor: "light-dark({red.800}, {red.300})", color: "light-dark({surface.900}, {surface.0})", disabledColor: "light-dark({surface.600}, {surface.400})", placeholderColor: "light-dark({surface.600}, {surface.400})", invalidPlaceholderColor: "light-dark({red.800}, {red.300})", floatLabelColor: "light-dark({surface.600}, {surface.400})", floatLabelFocusColor: "light-dark({primary.600}, {primary.color})", floatLabelActiveColor: "light-dark({surface.600}, {surface.400})", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "light-dark({surface.600}, {surface.400})", shadow: "none" }, list: { padding: "0.5rem 0", gap: "0", header: { padding: "0.625rem 0.875rem" }, option: { padding: "0.625rem 0.875rem", borderRadius: "{border.radius.none}", fontWeight: "{typography.font.weight}", fontSize: "{typography.font.size}", transitionDuration: "0s", focusBackground: "light-dark({surface.100}, {surface.800})", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", selectedFontWeight: "{typography.font.weight}", icon: { color: "light-dark({surface.600}, {surface.400})", focusColor: "light-dark({surface.600}, {surface.400})" } }, optionGroup: { padding: "0.625rem 0.875rem", fontWeight: "700", fontSize: "{typography.font.size}", background: "transparent", color: "{text.color}" } }, content: { borderRadius: "{border.radius.sm}", background: "light-dark({surface.0}, {surface.900})", hoverBackground: "light-dark({surface.100}, {surface.800})", borderColor: "light-dark({surface.300}, {surface.700})", color: "{text.color}", hoverColor: "{text.hover.color}" }, mask: { transitionDuration: "0.3s", background: "light-dark(rgba(0,0,0,0.32), rgba(0,0,0,0.6))", color: "{surface.200}" }, navigation: { list: { padding: "0.5rem 0", gap: "0" }, item: { padding: "0.625rem 0.875rem", borderRadius: "{border.radius.none}", gap: "0.5rem", focusBackground: "light-dark({surface.100}, {surface.800})", activeBackground: "light-dark({surface.200}, {surface.700})", color: "{text.color}", focusColor: "{text.hover.color}", activeColor: "{text.hover.color}", icon: { size: "{icon.size}", color: "light-dark({surface.600}, {surface.400})", focusColor: "light-dark({surface.600}, {surface.400})", activeColor: "light-dark({surface.600}, {surface.400})" }, label: { fontWeight: "{typography.font.weight}", fontSize: "{typography.font.size}" }, transitionDuration: "0s" }, submenuLabel: { padding: "0.625rem 0.875rem", fontWeight: "700", fontSize: "{typography.font.size}", background: "transparent", color: "{text.color}" }, submenuIcon: { size: "0.75rem", color: "light-dark({surface.600}, {surface.400})", focusColor: "light-dark({surface.600}, {surface.400})", activeColor: "light-dark({surface.600}, {surface.400})" } }, overlay: { select: { borderRadius: "{border.radius.sm}", shadow: "0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12)", background: "light-dark({surface.0}, {surface.900})", borderColor: "light-dark({surface.0}, {surface.900})", color: "{text.color}" }, popover: { borderRadius: "{border.radius.sm}", padding: "0.875rem", shadow: "0 11px 15px -7px rgba(0,0,0,.2), 0 24px 38px 3px rgba(0,0,0,.14), 0 9px 46px 8px rgba(0,0,0,.12)", background: "light-dark({surface.0}, {surface.900})", borderColor: "light-dark({surface.0}, {surface.900})", color: "{text.color}" }, modal: { borderRadius: "{border.radius.sm}", padding: "1.25rem", shadow: "0 11px 15px -7px rgba(0,0,0,.2), 0 24px 38px 3px rgba(0,0,0,.14), 0 9px 46px 8px rgba(0,0,0,.12)", background: "light-dark({surface.0}, {surface.900})", borderColor: "light-dark({surface.0}, {surface.900})", color: "{text.color}" }, navigation: { shadow: "0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12)" } }, surface: { 0: "#ffffff", 50: "light-dark({slate.50}, {zinc.50})", 100: "light-dark({slate.100}, {zinc.100})", 200: "light-dark({slate.200}, {zinc.200})", 300: "light-dark({slate.300}, {zinc.300})", 400: "light-dark({slate.400}, {zinc.400})", 500: "light-dark({slate.500}, {zinc.500})", 600: "light-dark({slate.600}, {zinc.600})", 700: "light-dark({slate.700}, {zinc.700})", 800: "light-dark({slate.800}, {zinc.800})", 900: "light-dark({slate.900}, {zinc.900})", 950: "light-dark({slate.950}, {zinc.950})" }, highlight: { background: "light-dark(color-mix(in srgb, {primary.color}, transparent 88%), color-mix(in srgb, {primary.400}, transparent 84%))", focusBackground: "light-dark(color-mix(in srgb, {primary.color}, transparent 76%), color-mix(in srgb, {primary.400}, transparent 76%))", color: "light-dark({primary.700}, rgba(255,255,255,.87))", focusColor: "light-dark({primary.800}, rgba(255,255,255,.87))" }, text: { color: "light-dark({surface.900}, {surface.0})", hoverColor: "light-dark({surface.900}, {surface.0})", mutedColor: "light-dark({surface.600}, {surface.400})", hoverMutedColor: "light-dark({surface.600}, {surface.400})" } };
var e5 = { primitive: r5, semantic: a3 };

// node_modules/@primeuix/themes/dist/material/blockui/index.mjs
var r6 = { borderRadius: "{content.border.radius}" };
var o5 = { root: r6, css: "" };

// node_modules/@primeuix/themes/dist/material/breadcrumb/index.mjs
var o6 = { padding: "0.875rem", background: "{content.background}", gap: "0.5rem", transitionDuration: "{transition.duration}" };
var i4 = { color: "{text.muted.color}", hoverColor: "{text.color}", borderRadius: "{content.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", hoverColor: "{navigation.item.icon.focus.color}", size: "{navigation.item.icon.size}" }, label: { fontWeight: "{navigation.item.label.font.weight}", fontSize: "{navigation.item.label.font.size}" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var t6 = { color: "{navigation.item.icon.color}" };
var n5 = { root: o6, item: i4, separator: t6, css: "" };

// node_modules/@primeuix/themes/dist/material/button/index.mjs
var r7 = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "1.75rem", gap: "0.5rem", paddingX: "0.875rem", paddingY: "0.5rem", iconOnlyWidth: "2.625rem", fontSize: "{form.field.font.size}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}", iconOnlyWidth: "2.25rem" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}", iconOnlyWidth: "3rem" }, label: { fontWeight: "500" }, raisedShadow: "0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" }, badgeSize: "0.875rem", transitionDuration: "{form.field.transition.duration}", primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "{primary.color}", shadow: "none" } }, secondary: { background: "light-dark({surface.100}, {surface.800})", hoverBackground: "light-dark({surface.200}, {surface.700})", activeBackground: "light-dark({surface.300}, {surface.600})", borderColor: "light-dark({surface.100}, {surface.800})", hoverBorderColor: "light-dark({surface.200}, {surface.700})", activeBorderColor: "light-dark({surface.300}, {surface.600})", color: "light-dark({surface.600}, {surface.300})", hoverColor: "light-dark({surface.700}, {surface.200})", activeColor: "light-dark({surface.800}, {surface.100})", focusRing: { color: "light-dark({surface.600}, {surface.300})", shadow: "none" } }, info: { background: "light-dark({sky.500}, {sky.400})", hoverBackground: "light-dark({sky.400}, {sky.300})", activeBackground: "light-dark({sky.300}, {sky.200})", borderColor: "light-dark({sky.500}, {sky.400})", hoverBorderColor: "light-dark({sky.400}, {sky.300})", activeBorderColor: "light-dark({sky.300}, {sky.200})", color: "light-dark(#ffffff, {sky.950})", hoverColor: "light-dark(#ffffff, {sky.950})", activeColor: "light-dark(#ffffff, {sky.950})", focusRing: { color: "light-dark({sky.500}, {sky.400})", shadow: "none" } }, success: { background: "light-dark({green.500}, {green.400})", hoverBackground: "light-dark({green.400}, {green.300})", activeBackground: "light-dark({green.300}, {green.200})", borderColor: "light-dark({green.500}, {green.400})", hoverBorderColor: "light-dark({green.400}, {green.300})", activeBorderColor: "light-dark({green.300}, {green.200})", color: "light-dark(#ffffff, {green.950})", hoverColor: "light-dark(#ffffff, {green.950})", activeColor: "light-dark(#ffffff, {green.950})", focusRing: { color: "light-dark({green.500}, {green.400})", shadow: "none" } }, warn: { background: "light-dark({orange.500}, {orange.400})", hoverBackground: "light-dark({orange.400}, {orange.300})", activeBackground: "light-dark({orange.300}, {orange.200})", borderColor: "light-dark({orange.500}, {orange.400})", hoverBorderColor: "light-dark({orange.400}, {orange.300})", activeBorderColor: "light-dark({orange.300}, {orange.200})", color: "light-dark(#ffffff, {orange.950})", hoverColor: "light-dark(#ffffff, {orange.950})", activeColor: "light-dark(#ffffff, {orange.950})", focusRing: { color: "light-dark({orange.500}, {orange.400})", shadow: "none" } }, help: { background: "light-dark({purple.500}, {purple.400})", hoverBackground: "light-dark({purple.400}, {purple.300})", activeBackground: "light-dark({purple.300}, {purple.200})", borderColor: "light-dark({purple.500}, {purple.400})", hoverBorderColor: "light-dark({purple.400}, {purple.300})", activeBorderColor: "light-dark({purple.300}, {purple.200})", color: "light-dark(#ffffff, {purple.950})", hoverColor: "light-dark(#ffffff, {purple.950})", activeColor: "light-dark(#ffffff, {purple.950})", focusRing: { color: "light-dark({purple.500}, {purple.400})", shadow: "none" } }, danger: { background: "light-dark({red.500}, {red.400})", hoverBackground: "light-dark({red.400}, {red.300})", activeBackground: "light-dark({red.300}, {red.200})", borderColor: "light-dark({red.500}, {red.400})", hoverBorderColor: "light-dark({red.400}, {red.300})", activeBorderColor: "light-dark({red.300}, {red.200})", color: "light-dark(#ffffff, {red.950})", hoverColor: "light-dark(#ffffff, {red.950})", activeColor: "light-dark(#ffffff, {red.950})", focusRing: { color: "light-dark({red.500}, {red.400})", shadow: "none" } }, contrast: { background: "light-dark({surface.950}, {surface.0})", hoverBackground: "light-dark({surface.800}, {surface.100})", activeBackground: "light-dark({surface.700}, {surface.200})", borderColor: "light-dark({surface.950}, {surface.0})", hoverBorderColor: "light-dark({surface.800}, {surface.100})", activeBorderColor: "light-dark({surface.700}, {surface.200})", color: "light-dark({surface.0}, {surface.950})", hoverColor: "light-dark({surface.0}, {surface.950})", activeColor: "light-dark({surface.0}, {surface.950})", focusRing: { color: "light-dark({surface.950}, {surface.0})", shadow: "none" } } };
var o7 = { primary: { hoverBackground: "light-dark({primary.50}, color-mix(in srgb, {primary.color}, transparent 96%))", activeBackground: "light-dark({primary.100}, color-mix(in srgb, {primary.color}, transparent 84%))", borderColor: "light-dark({primary.color}, {primary.700})", color: "{primary.color}" }, secondary: { hoverBackground: "light-dark({surface.50}, rgba(255,255,255,0.04))", activeBackground: "light-dark({surface.100}, rgba(255,255,255,0.16))", borderColor: "light-dark({surface.600}, {surface.700})", color: "light-dark({surface.600}, {surface.400})" }, success: { hoverBackground: "light-dark({green.50}, color-mix(in srgb, {green.400}, transparent 96%))", activeBackground: "light-dark({green.100}, color-mix(in srgb, {green.400}, transparent 84%))", borderColor: "light-dark({green.500}, {green.700})", color: "light-dark({green.500}, {green.400})" }, info: { hoverBackground: "light-dark({sky.50}, color-mix(in srgb, {sky.400}, transparent 96%))", activeBackground: "light-dark({sky.100}, color-mix(in srgb, {sky.400}, transparent 84%))", borderColor: "light-dark({sky.500}, {sky.700})", color: "light-dark({sky.500}, {sky.400})" }, warn: { hoverBackground: "light-dark({orange.50}, color-mix(in srgb, {orange.400}, transparent 96%))", activeBackground: "light-dark({orange.100}, color-mix(in srgb, {orange.400}, transparent 84%))", borderColor: "light-dark({orange.500}, {orange.700})", color: "light-dark({orange.500}, {orange.400})" }, help: { hoverBackground: "light-dark({purple.50}, color-mix(in srgb, {purple.400}, transparent 96%))", activeBackground: "light-dark({purple.100}, color-mix(in srgb, {purple.400}, transparent 84%))", borderColor: "light-dark({purple.500}, {purple.700})", color: "light-dark({purple.500}, {purple.400})" }, danger: { hoverBackground: "light-dark({red.50}, color-mix(in srgb, {red.400}, transparent 96%))", activeBackground: "light-dark({red.100}, color-mix(in srgb, {red.400}, transparent 84%))", borderColor: "light-dark({red.500}, {red.700})", color: "light-dark({red.500}, {red.400})" }, contrast: { hoverBackground: "light-dark({surface.50}, {surface.800})", activeBackground: "light-dark({surface.100}, {surface.700})", borderColor: "light-dark({surface.950}, {surface.500})", color: "light-dark({surface.950}, {surface.0})" }, plain: { hoverBackground: "light-dark({surface.50}, {surface.800})", activeBackground: "light-dark({surface.100}, {surface.700})", borderColor: "light-dark({surface.900}, {surface.600})", color: "light-dark({surface.900}, {surface.0})" } };
var a4 = { primary: { hoverBackground: "light-dark({primary.50}, color-mix(in srgb, {primary.color}, transparent 96%))", activeBackground: "light-dark({primary.100}, color-mix(in srgb, {primary.color}, transparent 84%))", color: "{primary.color}" }, secondary: { hoverBackground: "light-dark({surface.50}, {surface.800})", activeBackground: "light-dark({surface.100}, {surface.700})", color: "light-dark({surface.600}, {surface.400})" }, success: { hoverBackground: "light-dark({green.50}, color-mix(in srgb, {green.400}, transparent 96%))", activeBackground: "light-dark({green.100}, color-mix(in srgb, {green.400}, transparent 84%))", color: "light-dark({green.500}, {green.400})" }, info: { hoverBackground: "light-dark({sky.50}, color-mix(in srgb, {sky.400}, transparent 96%))", activeBackground: "light-dark({sky.100}, color-mix(in srgb, {sky.400}, transparent 84%))", color: "light-dark({sky.500}, {sky.400})" }, warn: { hoverBackground: "light-dark({orange.50}, color-mix(in srgb, {orange.400}, transparent 96%))", activeBackground: "light-dark({orange.100}, color-mix(in srgb, {orange.400}, transparent 84%))", color: "light-dark({orange.500}, {orange.400})" }, help: { hoverBackground: "light-dark({purple.50}, color-mix(in srgb, {purple.400}, transparent 96%))", activeBackground: "light-dark({purple.100}, color-mix(in srgb, {purple.400}, transparent 84%))", color: "light-dark({purple.500}, {purple.400})" }, danger: { hoverBackground: "light-dark({red.50}, color-mix(in srgb, {red.400}, transparent 96%))", activeBackground: "light-dark({red.100}, color-mix(in srgb, {red.400}, transparent 84%))", color: "light-dark({red.500}, {red.400})" }, contrast: { hoverBackground: "light-dark({surface.50}, {surface.800})", activeBackground: "light-dark({surface.100}, {surface.700})", color: "light-dark({surface.950}, {surface.0})" }, plain: { hoverBackground: "light-dark({surface.50}, {surface.800})", activeBackground: "light-dark({surface.100}, {surface.700})", color: "light-dark({surface.900}, {surface.0})" } };
var n6 = { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" };
var css3 = "\n.p-button:focus-visible {\n    background: dt('button.primary.active.background');\n    border-color: dt('button.primary.active.background');\n}\n\n.p-button-secondary:focus-visible {\n    background: dt('button.secondary.active.background');\n    border-color: dt('button.secondary.active.background');\n}\n\n.p-button-success:focus-visible {\n    background: dt('button.success.active.background');\n    border-color: dt('button.success.active.background');\n}\n\n.p-button-info:focus-visible {\n    background: dt('button.info.active.background');\n    border-color: dt('button.info.active.background');\n}\n\n.p-button-warn:focus-visible {\n    background: dt('button.warn.active.background');\n    border-color: dt('button.warn.active.background');\n}\n\n.p-button-help:focus-visible {\n    background: dt('button.help.active.background');\n    border-color: dt('button.help.active.background');\n}\n\n.p-button-danger:focus-visible {\n    background: dt('button.danger.active.background');\n    border-color: dt('button.danger.active.background');\n}\n\n.p-button-contrast:focus-visible {\n    background: dt('button.contrast.active.background');\n    border-color: dt('button.contrast.active.background');\n}\n\n.p-button-link:focus-visible {\n    background: color-mix(in srgb, dt('primary.color'), transparent 84%);\n    border-color: transparent;\n}\n\n.p-button-text:focus-visible {\n    background: dt('button.text.primary.active.background');\n    border-color: transparent;\n}\n\n.p-button-secondary.p-button-text:focus-visible {\n    background: dt('button.text.secondary.active.background');\n    border-color: transparent;\n}\n\n.p-button-success.p-button-text:focus-visible {\n    background: dt('button.text.success.active.background');\n    border-color: transparent;\n}\n\n.p-button-info.p-button-text:focus-visible {\n    background: dt('button.text.info.active.background');\n    border-color: transparent;\n}\n\n.p-button-warn.p-button-text:focus-visible {\n    background: dt('button.text.warn.active.background');\n    border-color: transparent;\n}\n\n.p-button-help.p-button-text:focus-visible {\n    background: dt('button.text.help.active.background');\n    border-color: transparent;\n}\n\n.p-button-danger.p-button-text:focus-visible {\n    background: dt('button.text.danger.active.background');\n    border-color: transparent;\n}\n\n.p-button-contrast.p-button-text:focus-visible {\n    background: dt('button.text.contrast.active.background');\n    border-color: transparent;\n}\n\n.p-button-plain.p-button-text:focus-visible {\n    background: dt('button.text.plain.active.background');\n    border-color: transparent;\n}\n\n.p-button-outlined:focus-visible {\n    background: dt('button.outlined.primary.active.background');\n}\n\n.p-button-secondary.p-button-outlined:focus-visible {\n    background: dt('button.outlined.secondary.active.background');\n    border-color: dt('button.outlined.secondary.border.color');\n}\n\n.p-button-success.p-button-outlined:focus-visible {\n    background: dt('button.outlined.success.active.background');\n}\n\n.p-button-info.p-button-outlined:focus-visible {\n    background: dt('button.outlined.info.active.background');\n}\n\n.p-button-warn.p-button-outlined:focus-visible {\n    background: dt('button.outlined.warn.active.background');\n}\n\n.p-button-help.p-button-outlined:focus-visible {\n    background: dt('button.outlined.help.active.background');\n}\n\n.p-button-danger.p-button-outlined:focus-visible {\n    background: dt('button.outlined.danger.active.background');\n}\n\n.p-button-contrast.p-button-outlined:focus-visible {\n    background: dt('button.outlined.contrast.active.background');\n}\n\n.p-button-plain.p-button-outlined:focus-visible {\n    background: dt('button.outlined.plain.active.background');\n}\n";
var e6 = { root: r7, outlined: o7, text: a4, link: n6, css: css3 };

// node_modules/@primeuix/themes/dist/material/card/index.mjs
var o8 = { background: "{content.background}", borderRadius: "{content.border.radius}", color: "{content.color}", shadow: "0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)" };
var t7 = { padding: "1.25rem", gap: "0.625rem" };
var r8 = { gap: "0.5rem" };
var e7 = { fontSize: "1.125rem", fontWeight: "500" };
var a5 = { color: "{text.muted.color}", fontSize: "0.875rem", fontWeight: "{typography.font.weight}" };
var n7 = { root: o8, body: t7, caption: r8, title: e7, subtitle: a5, css: "" };

// node_modules/@primeuix/themes/dist/material/carousel/index.mjs
var o9 = { transitionDuration: "{transition.duration}" };
var r9 = { gap: "0.25rem" };
var n8 = { padding: "0.875rem", gap: "0.875rem" };
var a6 = { width: "1.125rem", height: "1.125rem", borderRadius: "50%", focusRing: { width: "0", style: "none", color: "unset", offset: "0", shadow: "none" }, background: "light-dark({surface.200}, {surface.700})", hoverBackground: "light-dark({surface.300}, {surface.600})", activeBackground: "{primary.color}" };
var css4 = "\n.p-carousel-indicator-button:hover {\n    box-shadow: 0 0 1px 10px color-mix(in srgb, dt('text.color'), transparent 96%);\n}\n\n.p-carousel-indicator-button:focus-visible {\n    box-shadow: 0 0 1px 10px color-mix(in srgb, dt('text.color'), transparent 96%);\n}\n\n.p-carousel-indicator-active .p-carousel-indicator-button:hover {\n    box-shadow: 0 0 1px 10px color-mix(in srgb, dt('carousel.indicator.active.background'), transparent 92%);\n}\n\n.p-carousel-indicator-active .p-carousel-indicator-button:focus-visible {\n    box-shadow: 0 0 1px 10px color-mix(in srgb, dt('carousel.indicator.active.background'), transparent 84%);\n}\n";
var t8 = { root: o9, content: r9, indicatorList: n8, indicator: a6, css: css4 };

// node_modules/@primeuix/themes/dist/material/cascadeselect/index.mjs
var o10 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" }, fontWeight: "{form.field.font.weight}", fontSize: "{form.field.font.size}" };
var e8 = { width: "2.25rem", color: "{form.field.icon.color}" };
var r10 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var d3 = { padding: "{list.padding}", gap: "{list.gap}", mobileIndent: "0.875rem" };
var c2 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", selectedFontWeight: "{list.option.selected.font.weight}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", icon: { color: "{list.option.icon.color}", focusColor: "{list.option.icon.focus.color}", size: "0.75rem" }, fontWeight: "{list.option.font.weight}", fontSize: "{list.option.font.size}" };
var l3 = { color: "{form.field.icon.color}" };
var css5 = "\n.p-cascadeselect.p-variant-filled {\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    border: 1px solid transparent;\n    background: dt('cascadeselect.filled.background') no-repeat;\n    background-image: linear-gradient(to bottom, dt('cascadeselect.focus.border.color'), dt('cascadeselect.focus.border.color')), linear-gradient(to bottom, dt('cascadeselect.border.color'), dt('cascadeselect.border.color'));\n    background-size: 0 2px, 100% 1px;\n    background-position: 50% 100%, 50% 100%;\n    background-origin: border-box;\n    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);\n}\n\n.p-cascadeselect.p-variant-filled:not(.p-disabled):hover {\n    background: dt('cascadeselect.filled.hover.background') no-repeat;\n    background-image: linear-gradient(to bottom, dt('cascadeselect.focus.border.color'), dt('cascadeselect.focus.border.color')), linear-gradient(to bottom, dt('cascadeselect.hover.border.color'), dt('cascadeselect.hover.border.color'));\n    background-size: 0 2px, 100% 1px;\n    background-position: 50% 100%, 50% 100%;\n    background-origin: border-box;\n    border-color: transparent;\n}\n\n.p-cascadeselect.p-variant-filled:not(.p-disabled).p-focus {\n    outline: 0 none;\n    background: dt('cascadeselect.filled.focus.background') no-repeat;\n    background-image: linear-gradient(to bottom, dt('cascadeselect.focus.border.color'), dt('cascadeselect.focus.border.color')), linear-gradient(to bottom, dt('cascadeselect.border.color'), dt('cascadeselect.border.color'));\n    background-size: 100% 2px, 100% 1px;\n    background-position: 50% 100%, 50% 100%;\n    background-origin: border-box;\n    border-color: transparent;\n}\n\n.p-cascadeselect.p-variant-filled:not(.p-disabled).p-focus:hover {\n    background-image: linear-gradient(to bottom, dt('cascadeselect.focus.border.color'), dt('cascadeselect.focus.border.color')), linear-gradient(to bottom, dt('cascadeselect.hover.border.color'), dt('cascadeselect.hover.border.color'));\n}\n\n.p-cascadeselect.p-variant-filled.p-invalid {\n    background-image: linear-gradient(to bottom, dt('cascadeselect.invalid.border.color'), dt('cascadeselect.invalid.border.color')), linear-gradient(to bottom, dt('cascadeselect.invalid.border.color'), dt('cascadeselect.invalid.border.color'));\n}\n\n.p-cascadeselect.p-variant-filled.p-invalid:not(.p-disabled).p-focus  {\n    background-image: linear-gradient(to bottom, dt('cascadeselect.invalid.border.color'), dt('cascadeselect.invalid.border.color')), linear-gradient(to bottom, dt('cascadeselect.invalid.border.color'), dt('cascadeselect.invalid.border.color'));\n}\n\n.p-cascadeselect-option {\n    transition: none;\n}\n";
var i5 = { root: o10, dropdown: e8, overlay: r10, list: d3, option: c2, clearIcon: l3, css: css5 };

// node_modules/@primeuix/themes/dist/material/checkbox/index.mjs
var o11 = { borderRadius: "{border.radius.xs}", width: "18px", height: "18px", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "0", style: "none", color: "unset", offset: "0", shadow: "none" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "14px", height: "14px" }, lg: { width: "22px", height: "22px" } };
var c3 = { size: "0.75rem", color: "{form.field.color}", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.625rem" }, lg: { size: "0.875rem" } };
var css6 = `
.p-checkbox {
    border-radius: 50%;
    transition: box-shadow dt('checkbox.transition.duration');
}

.p-checkbox-box {
    border-width: 2px;
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, dt('text.color'), transparent 96%);
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, dt('text.color'), transparent 88%);
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, dt('checkbox.checked.background'), transparent 92%);
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, dt('checkbox.checked.background'), transparent 84%);
}

.p-checkbox-checked .p-checkbox-box:before  {
    content: "";
    position: absolute;
    top: var(--p-md-check-icon-t);
    left: 2px;
    border-right: 2px solid transparent;
    border-bottom: 2px solid transparent;
    transform: rotate(45deg);
    transform-origin: 0% 100%;
    animation: p-md-check 125ms 50ms linear forwards;
}

.p-checkbox-checked .p-checkbox-icon,
.p-checkbox-checked .p-checkbox-indicator > svg,
.p-checkbox-checked .p-checkbox-indicator > i {
    display: none !important;
}

.p-checkbox {
    --p-md-check-icon-t: 10px;
    --p-md-check-icon-w: 6px;
    --p-md-check-icon-h: 12px;
}

.p-checkbox-sm {
    --p-md-check-icon-t: 8px;
    --p-md-check-icon-w: 4px;
    --p-md-check-icon-h: 10px;
}

.p-checkbox-lg {
    --p-md-check-icon-t: 12px;
    --p-md-check-icon-w: 8px;
    --p-md-check-icon-h: 16px;
}

@keyframes p-md-check {
    0%{
      width: 0;
      height: 0;
      border-color: dt('checkbox.icon.checked.color');
      transform: translate3d(0,0,0) rotate(45deg);
    }
    33%{
      width: var(--p-md-check-icon-w);
      height: 0;
      transform: translate3d(0,0,0) rotate(45deg);
    }
    100%{
      width: var(--p-md-check-icon-w);
      height: var(--p-md-check-icon-h);
      border-color: dt('checkbox.icon.checked.color');
      transform: translate3d(0,calc(-1 * var(--p-md-check-icon-h)),0) rotate(45deg);
    }
}
`;
var r11 = { root: o11, icon: c3, css: css6 };

// node_modules/@primeuix/themes/dist/material/chip/index.mjs
var r12 = { borderRadius: "1.75rem", paddingX: "0.625rem", paddingY: "0.625rem", gap: "0.5rem", transitionDuration: "{transition.duration}", background: "light-dark({surface.200}, {surface.700})", focusBackground: "light-dark({surface.300}, {surface.600})", color: "light-dark({surface.900}, {surface.0})" };
var e9 = { width: "2rem", height: "2rem" };
var o12 = { size: "0.875rem", color: "light-dark({surface.600}, {surface.0})" };
var a7 = { fontWeight: "{typography.font.weight}", fontSize: "{typography.font.size}" };
var i6 = { size: "0.875rem", color: "light-dark({surface.600}, {surface.0})", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "0 0 1px 4px light-dark({surface.300}, {surface.600})" } };
var s3 = { root: r12, image: e9, icon: o12, label: a7, removeIcon: i6, css: "" };

// node_modules/@primeuix/themes/dist/material/colorpicker/index.mjs
var r13 = { transitionDuration: "{transition.duration}" };
var o13 = { width: "1.75rem", height: "1.75rem", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e10 = { shadow: "{overlay.popover.shadow}", borderRadius: "{overlay.popover.borderRadius}", background: "light-dark({surface.800}, {surface.900})", borderColor: "light-dark({surface.900}, {surface.700})" };
var s4 = { color: "{surface.0}" };
var a8 = { root: r13, preview: o13, panel: e10, handle: s4, css: "" };

// node_modules/@primeuix/themes/dist/material/commandmenu/index.mjs
var o14 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", height: "25rem" };
var r14 = { padding: "0.375rem 1.125rem", background: "{content.background}", borderColor: "{content.border.color}" };
var e11 = { padding: "0.375rem 0", fontSize: "1rem", fontWeight: "{typography.font.weight}", color: "{form.field.color}", placeholderColor: "{form.field.placeholder.color}" };
var d4 = { padding: "0.375rem" };
var n9 = { padding: "2rem 0", color: "{content.color}" };
var t9 = { padding: "0.375rem 1.125rem", background: "{content.background}", borderColor: "{content.border.color}" };
var c4 = { root: o14, header: r14, input: e11, list: d4, empty: n9, footer: t9 };

// node_modules/@primeuix/themes/dist/material/compare/index.mjs
var o15 = { borderRadius: "{content.border.radius}" };
var r15 = { background: "{content.background}", size: "1px" };
var e12 = { size: "1.5rem", background: "{content.background}", borderRadius: "{content.border.radius}", focusRing: { width: "2px", style: "solid", color: "{content.background}", offset: "2px" }, icon: { color: "{text.muted.color}", size: "{icon.size}" } };
var n10 = { root: o15, handle: r15, indicator: e12 };

// node_modules/@primeuix/themes/dist/material/confirmdialog/index.mjs
var o16 = { size: "1.75rem", color: "{overlay.modal.color}" };
var e13 = { gap: "0.875rem" };
var t10 = { color: "{content.color}", fontWeight: "{typography.font.weight}", fontSize: "{typography.font.size}" };
var r16 = { icon: o16, content: e13, message: t10, css: "" };

// node_modules/@primeuix/themes/dist/material/confirmpopup/index.mjs
var o17 = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.125rem" };
var r17 = { padding: "{overlay.popover.padding}", gap: "0.875rem" };
var e14 = { size: "1.25rem", color: "{overlay.popover.color}" };
var p = { color: "{content.color}", fontWeight: "{typography.font.weight}", fontSize: "{typography.font.size}" };
var a9 = { gap: "0.5rem", padding: "0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}" };
var d5 = { root: o17, content: r17, icon: e14, message: p, footer: a9, css: "" };

// node_modules/@primeuix/themes/dist/material/contextmenu/index.mjs
var o18 = { background: "{content.background}", borderColor: "transparent", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" };
var i7 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" };
var n11 = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}", size: "{navigation.item.icon.size}" }, label: { fontWeight: "{navigation.item.label.font.weight}", fontSize: "{navigation.item.label.font.size}" } };
var a10 = { mobileIndent: "0.875rem" };
var t11 = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", fontSize: "{navigation.submenu.label.font.size}", background: "{navigation.submenu.label.background}", color: "{navigation.submenu.label.color}" };
var e15 = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" };
var r18 = { borderColor: "{content.border.color}" };
var c5 = { root: o18, list: i7, item: n11, submenu: a10, submenuIcon: e15, submenuLabel: t11, separator: r18, css: "" };

// node_modules/@primeuix/themes/dist/material/datatable/index.mjs
var o19 = { transitionDuration: "{transition.duration}", borderColor: "light-dark({content.border.color}, {surface.800})" };
var r19 = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.625rem 0.875rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "0.875rem 1.125rem" } };
var e16 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{content.color}", gap: "0.5rem", padding: "0.625rem 0.875rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "0.875rem 1.125rem" } };
var t12 = { fontWeight: "600", fontSize: "{typography.font.size}" };
var d6 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, stripedBackground: "light-dark({surface.50}, {surface.950})" };
var c6 = { borderColor: "{datatable.border.color}", padding: "0.625rem 0.875rem", fontWeight: "{typography.font.size}", fontSize: "{typography.font.size}", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "0.875rem 1.125rem" }, selectedBorderColor: "light-dark({primary.100}, {primary.900})" };
var l4 = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", padding: "0.625rem 0.875rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "0.875rem 1.125rem" } };
var n12 = { fontWeight: "600", fontSize: "{typography.font.size}" };
var a11 = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.625rem 0.875rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "0.875rem 1.125rem" } };
var i8 = { color: "{primary.color}" };
var s5 = { width: "0.5rem" };
var g2 = { width: "1px", color: "{primary.color}" };
var u = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.75rem" };
var p2 = { size: "1.75rem" };
var b = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var h2 = { inlineGap: "0.5rem", overlaySelect: { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, overlayPopover: { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}", gap: "0.5rem" }, rule: { borderColor: "{content.border.color}" }, constraintList: { padding: "{list.padding}", gap: "{list.gap}" }, constraint: { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", separator: { borderColor: "{content.border.color}" }, padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" } };
var m = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" };
var f = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" };
var css7 = "\n.p-datatable-header-cell,\n.p-datatable-tbody > tr {\n    transition: none;\n}\n";
var k = { root: o19, header: r19, headerCell: e16, columnTitle: t12, row: d6, bodyCell: c6, footerCell: l4, columnFooter: n12, footer: a11, dropPoint: i8, columnResizer: s5, resizeIndicator: g2, sortIcon: u, loadingIcon: p2, rowToggleButton: b, filter: h2, paginatorTop: m, paginatorBottom: f, css: css7 };

// node_modules/@primeuix/themes/dist/material/dataview/index.mjs
var o20 = { borderColor: "transparent", borderWidth: "0", borderRadius: "0", padding: "0" };
var r20 = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "0 0 1px 0", padding: "0.625rem 0.875rem", borderRadius: "0" };
var d7 = { background: "{content.background}", color: "{content.color}", borderColor: "transparent", borderWidth: "0", padding: "0", borderRadius: "0" };
var e17 = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "1px 0 0 0", padding: "0.625rem 0.875rem", borderRadius: "0" };
var t13 = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" };
var n13 = { borderColor: "{content.border.color}", borderWidth: "1px 0 0 0" };
var c7 = { root: o20, header: r20, content: d7, footer: e17, paginatorTop: t13, paginatorBottom: n13, css: "" };

// node_modules/@primeuix/themes/dist/material/datepicker/index.mjs
var o21 = { transitionDuration: "{transition.duration}" };
var r21 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.popover.shadow}", padding: "0.5rem" };
var e18 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", padding: "0 0 0.5rem 0" };
var n14 = { gap: "0.5rem", fontWeight: "700", fontSize: "{typography.font.size}" };
var t14 = { width: "2.625rem", sm: { width: "2.25rem" }, lg: { width: "3rem" }, borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "0", style: "none", color: "unset", offset: "0", shadow: "none" }, background: "light-dark({surface.100}, {surface.800})", hoverBackground: "light-dark({surface.200}, {surface.700})", activeBackground: "light-dark({surface.300}, {surface.600})", color: "light-dark({surface.600}, {surface.300})", hoverColor: "light-dark({surface.700}, {surface.200})", activeColor: "light-dark({surface.800}, {surface.100})" };
var d8 = { color: "{form.field.icon.color}" };
var c8 = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.5rem 0.625rem", borderRadius: "{content.border.radius}", fontWeight: "500", fontSize: "{typography.font.size}" };
var a12 = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.5rem 0.625rem", borderRadius: "{content.border.radius}", fontWeight: "500", fontSize: "{typography.font.size}" };
var i9 = { borderColor: "{content.border.color}", gap: "{overlay.popover.padding}" };
var l5 = { margin: "0.5rem 0 0 0" };
var g3 = { padding: "0.5rem", fontWeight: "700", fontSize: "{typography.font.size}", color: "{content.color}" };
var s6 = { fontWeight: "{typography.font.weight}", fontSize: "{typography.font.size}", hoverBackground: "{content.hover.background}", selectedBackground: "{primary.color}", rangeSelectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{primary.contrast.color}", rangeSelectedColor: "{highlight.color}", width: "2.25rem", height: "2.25rem", borderRadius: "50%", padding: "0.125rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var u2 = { margin: "0.5rem 0 0 0" };
var h3 = { padding: "0.5rem", borderRadius: "{content.border.radius}" };
var p3 = { margin: "0.5rem 0 0 0" };
var f2 = { padding: "0.5rem", borderRadius: "{content.border.radius}" };
var b2 = { padding: "0.5rem 0 0 0", borderColor: "{content.border.color}" };
var k2 = { padding: "0.5rem 0 0 0", borderColor: "{content.border.color}", gap: "0.5rem", buttonGap: "0.25rem", color: "{content.color}", fontWeight: "{typography.font.weight}", fontSize: "{typography.font.size}" };
var m2 = { background: "light-dark({surface.200}, {surface.700})", color: "light-dark({surface.900}, {surface.0})" };
var css8 = "\n.p-datepicker-header {\n    justify-content: start;\n}\n\n.p-datepicker-title {\n    order: 1;\n}\n\n.p-datepicker-prev-button {\n    order: 2;\n    margin-inline-start: auto;\n}\n\n.p-datepicker-next-button {\n    order: 2;\n    margin-inline-start: 0.5rem;\n}\n\n.p-datepicker-select-month:focus-visible {\n    background: dt('datepicker.select.month.hover.background');\n    color: dt('datepicker.select.month.hover.color');\n    outline: 0 none;\n}\n\n.p-datepicker-select-year:focus-visible {\n    background: dt('datepicker.select.year.hover.background');\n    color: dt('datepicker.select.year.hover.color');\n    outline: 0 none;\n}\n\n.p-datepicker-dropdown:focus-visible {\n    outline: 0 none;\n    background: dt('datepicker.dropdown.hover.background');\n    border-color: dt('datepicker.dropdown.hover.border.color');\n    color: dt('datepicker.dropdown.hover.color');\n}\n";
var v2 = { root: o21, panel: r21, header: e18, title: n14, dropdown: t14, inputIcon: d8, selectMonth: c8, selectYear: a12, group: i9, dayView: l5, weekDay: g3, date: s6, monthView: u2, month: h3, yearView: p3, year: f2, buttonbar: b2, timePicker: k2, today: m2, css: css8 };

// node_modules/@primeuix/themes/dist/material/dialog/index.mjs
var o22 = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", borderRadius: "{overlay.modal.border.radius}", shadow: "{overlay.modal.shadow}" };
var a13 = { padding: "{overlay.modal.padding}", gap: "0.5rem" };
var d9 = { fontSize: "1.125rem", fontWeight: "600" };
var r22 = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" };
var l6 = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}", gap: "0.5rem" };
var e19 = { root: o22, header: a13, title: d9, content: r22, footer: l6, css: "" };

// node_modules/@primeuix/themes/dist/material/divider/index.mjs
var r23 = { borderColor: "{content.border.color}" };
var o23 = { background: "{content.background}", color: "{text.color}" };
var n15 = { margin: "0.875rem 0", padding: "0 0.875rem", content: { padding: "0 0.5rem" } };
var e20 = { margin: "0 0.875rem", padding: "0.5rem 0", content: { padding: "0.5rem 0" } };
var t15 = { root: r23, content: o23, horizontal: n15, vertical: e20, css: "" };

// node_modules/@primeuix/themes/dist/material/dock/index.mjs
var r24 = { background: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(255, 255, 255, 0.2)", padding: "0.5rem", borderRadius: "{border.radius.xl}" };
var o24 = { borderRadius: "{content.border.radius}", padding: "0.5rem", size: "2.625rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var s7 = { root: r24, item: o24, css: "" };

// node_modules/@primeuix/themes/dist/material/drawer/index.mjs
var o25 = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", shadow: "{overlay.modal.shadow}" };
var a14 = { padding: "{overlay.modal.padding}" };
var d10 = { fontSize: "1.25rem", fontWeight: "600" };
var r25 = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" };
var l7 = { padding: "{overlay.modal.padding}" };
var e21 = { root: o25, header: a14, title: d10, content: r25, footer: l7, css: "" };

// node_modules/@primeuix/themes/dist/material/editor/index.mjs
var o26 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}" };
var r26 = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" };
var e22 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}", padding: "{list.padding}" };
var t16 = { focusBackground: "{list.option.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" };
var d11 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" };
var css9 = "\n.p-editor .p-editor-toolbar {\n    padding: 0.625rem\n}\n";
var l8 = { toolbar: o26, toolbarItem: r26, overlay: e22, overlayOption: t16, content: d11, css: css9 };

// node_modules/@primeuix/themes/dist/material/fieldset/index.mjs
var o27 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", padding: "0 1.125rem 1.125rem 1.125rem", transitionDuration: "{transition.duration}" };
var r27 = { background: "{content.background}", hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", borderRadius: "{content.border.radius}", borderWidth: "1px", borderColor: "transparent", padding: "0.625rem 0.875rem", gap: "0.5rem", fontWeight: "600", fontSize: "{typography.font.size}", focusRing: { width: "0", style: "none", color: "unset", offset: "0", shadow: "none" } };
var n16 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}" };
var t17 = { padding: "0" };
var css10 = "\n.p-fieldset-toggle-button:focus-visible {\n    background: dt('navigation.item.active.background');\n}\n";
var e23 = { root: o27, legend: r27, toggleIcon: n16, content: t17, css: css10 };

// node_modules/@primeuix/themes/dist/material/fileupload/index.mjs
var r28 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" };
var o28 = { background: "transparent", color: "{text.color}", padding: "1.125rem", borderColor: "unset", borderWidth: "0", borderRadius: "0", gap: "0.5rem" };
var e24 = { highlightBorderColor: "{primary.color}", padding: "0 1.125rem 1.125rem 1.125rem", gap: "0.875rem" };
var t18 = { padding: "0.875rem", gap: "0.875rem", borderColor: "{content.border.color}", info: { gap: "0.5rem" } };
var n17 = { color: "{text.color}", fontWeight: "{typography.font.weight}", fontSize: "{typography.font.size}" };
var a15 = { color: "{text.muted.color}", fontWeight: "{typography.font.weight}", fontSize: "0.625rem" };
var i10 = { gap: "0.5rem" };
var d12 = { height: "0.25rem" };
var g4 = { gap: "0.5rem" };
var c9 = { root: r28, header: o28, content: e24, file: t18, fileName: n17, fileSize: a15, fileList: i10, progressbar: d12, basic: g4, css: "" };

// node_modules/@primeuix/themes/dist/material/floatlabel/index.mjs
var o29 = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", activeColor: "{form.field.float.label.active.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", positionY: "{form.field.padding.y}", fontWeight: "500", fontSize: "{form.field.font.size}", active: { fontSize: "0.625rem", fontWeight: "400" } };
var i11 = { active: { top: "-1.125rem" } };
var r29 = { input: { paddingTop: "1.25rem", paddingBottom: "0.5rem" }, active: { top: "0.5rem" } };
var e25 = { borderRadius: "{border.radius.xs}", active: { background: "{form.field.background}", padding: "0 0.125rem" } };
var l9 = { root: o29, over: i11, in: r29, on: e25, css: "" };

// node_modules/@primeuix/themes/dist/material/galleria/index.mjs
var r30 = { borderWidth: "1px", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" };
var o30 = { background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.100}", hoverColor: "{surface.0}", size: "2.625rem", gutter: "0.5rem", prev: { borderRadius: "50%" }, next: { borderRadius: "50%" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e26 = { size: "1.25rem" };
var s8 = { background: "{content.background}", padding: "0.875rem 0.25rem" };
var a16 = { size: "1.75rem", borderRadius: "50%", gutter: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, hoverBackground: "light-dark({surface.100}, {surface.700})", color: "light-dark({surface.600}, {surface.400})", hoverColor: "light-dark({surface.700}, {surface.0})" };
var c10 = { size: "0.875rem" };
var t19 = { background: "rgba(0, 0, 0, 0.5)", color: "{surface.100}", padding: "0.875rem" };
var i12 = { gap: "0.5rem", padding: "0.875rem" };
var n18 = { width: "0.875rem", height: "0.875rem", activeBackground: "{primary.color}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, background: "light-dark({surface.200}, {surface.700})", hoverBackground: "light-dark({surface.300}, {surface.600})" };
var u3 = { background: "rgba(0, 0, 0, 0.5)" };
var d13 = { background: "rgba(255, 255, 255, 0.4)", hoverBackground: "rgba(255, 255, 255, 0.6)", activeBackground: "rgba(255, 255, 255, 0.9)" };
var g5 = { size: "2.625rem", gutter: "0.5rem", background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.50}", hoverColor: "{surface.0}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var f3 = { size: "1.25rem" };
var l10 = { root: r30, navButton: o30, navIcon: e26, thumbnailsContent: s8, thumbnailNavButton: a16, thumbnailNavButtonIcon: c10, caption: t19, indicatorList: i12, indicatorButton: n18, insetIndicatorList: u3, insetIndicatorButton: d13, closeButton: g5, closeButtonIcon: f3, css: "" };

// node_modules/@primeuix/themes/dist/material/gallery/index.mjs
var r31 = { background: "{surface.950}" };
var o31 = { padding: "0.75rem 1rem", background: "{surface.950}" };
var a17 = { padding: "0.25rem 0", background: "{surface.950}", borderColor: "{surface.800}" };
var e27 = { transitionDuration: "0.3s" };
var i13 = { size: "2.25rem", borderRadius: "50%", color: "{surface.400}", hoverBackground: "{surface.800}", hoverColor: "{surface.0}", disabledOpacity: "{disabled.opacity}", transitionDuration: "{transition.duration}", icon: { size: "1rem" } };
var n19 = { background: "color-mix(in srgb, {surface.800}, transparent 40%)", size: "2.25rem", borderRadius: "50%", color: "{surface.400}", hoverBackground: "{surface.800}", hoverColor: "{surface.0}", offset: "0.5rem", transitionDuration: "{transition.duration}", icon: { size: "1rem" } };
var t20 = { size: "5rem", padding: "0.25rem", background: "{surface.800}", borderRadius: "0.25rem", borderWidth: "3px", hoverBorderColor: "{surface.700}", activeBorderColor: "{primary.color}", activeScale: "0.85", transitionDuration: "{transition.duration}" };
var d14 = { padding: "0.25rem 0" };
var s9 = { backdrop: r31, header: o31, footer: a17, item: e27, action: i13, navigation: n19, thumbnail: t20, thumbnailContent: d14 };

// node_modules/@primeuix/themes/dist/material/iconfield/index.mjs
var o32 = { color: "{form.field.icon.color}" };
var c11 = { icon: o32, css: "" };

// node_modules/@primeuix/themes/dist/material/iftalabel/index.mjs
var o33 = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", top: "0.5rem", fontWeight: "400", fontSize: "0.625rem" };
var l11 = { paddingTop: "1.25rem", paddingBottom: "0.5rem" };
var i14 = { root: o33, input: l11, css: "" };

// node_modules/@primeuix/themes/dist/material/image/index.mjs
var o34 = { transitionDuration: "{transition.duration}" };
var r32 = { icon: { size: "1.25rem" }, mask: { background: "{mask.background}", color: "{mask.color}" } };
var a18 = { position: { left: "auto", right: "0.875rem", top: "0.875rem", bottom: "auto" }, blur: "8px", background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)", borderWidth: "1px", borderRadius: "30px", padding: ".5rem", gap: "0.5rem" };
var i15 = { hoverBackground: "rgba(255,255,255,0.1)", color: "{surface.50}", hoverColor: "{surface.0}", size: "2.625rem", iconSize: "1.25rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e28 = { root: o34, preview: r32, toolbar: a18, action: i15, css: "" };

// node_modules/@primeuix/themes/dist/material/imagecompare/index.mjs
var o35 = { size: "20px", hoverSize: "40px", background: "rgba(255,255,255,0.4)", hoverBackground: "rgba(255,255,255,0.6)", borderColor: "unset", hoverBorderColor: "unset", borderWidth: "0", borderRadius: "50%", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "rgba(255,255,255,0.3)", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var r33 = { handle: o35, css: "" };

// node_modules/@primeuix/themes/dist/material/inlinemessage/index.mjs
var r34 = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", gap: "0.5rem" };
var a19 = { fontWeight: "500" };
var o36 = { size: "0.875rem" };
var e29 = { background: "light-dark(color-mix(in srgb, {blue.50}, transparent 5%), color-mix(in srgb, {blue.500}, transparent 84%))", borderColor: "light-dark({blue.200}, color-mix(in srgb, {blue.700}, transparent 64%))", color: "light-dark({blue.600}, {blue.500})", shadow: "0px 4px 8px 0px light-dark(color-mix(in srgb, {blue.500}, transparent 96%), color-mix(in srgb, {blue.500}, transparent 96%))" };
var n20 = { background: "light-dark(color-mix(in srgb, {green.50}, transparent 5%), color-mix(in srgb, {green.500}, transparent 84%))", borderColor: "light-dark({green.200}, color-mix(in srgb, {green.700}, transparent 64%))", color: "light-dark({green.600}, {green.500})", shadow: "0px 4px 8px 0px light-dark(color-mix(in srgb, {green.500}, transparent 96%), color-mix(in srgb, {green.500}, transparent 96%))" };
var l12 = { background: "light-dark(color-mix(in srgb,{yellow.50}, transparent 5%), color-mix(in srgb, {yellow.500}, transparent 84%))", borderColor: "light-dark({yellow.200}, color-mix(in srgb, {yellow.700}, transparent 64%))", color: "light-dark({yellow.600}, {yellow.500})", shadow: "0px 4px 8px 0px light-dark(color-mix(in srgb, {yellow.500}, transparent 96%), color-mix(in srgb, {yellow.500}, transparent 96%))" };
var i16 = { background: "light-dark(color-mix(in srgb, {red.50}, transparent 5%), color-mix(in srgb, {red.500}, transparent 84%))", borderColor: "light-dark({red.200}, color-mix(in srgb, {red.700}, transparent 64%))", color: "light-dark({red.600}, {red.500})", shadow: "0px 4px 8px 0px light-dark(color-mix(in srgb, {red.500}, transparent 96%), color-mix(in srgb, {red.500}, transparent 96%))" };
var t21 = { background: "light-dark({surface.100}, {surface.800})", borderColor: "light-dark({surface.200}, {surface.700})", color: "light-dark({surface.600}, {surface.300})", shadow: "0px 4px 8px 0px light-dark(color-mix(in srgb, {surface.500}, transparent 96%), color-mix(in srgb, {surface.500}, transparent 96%))" };
var s10 = { background: "light-dark({surface.900}, {surface.0})", borderColor: "light-dark({surface.950}, {surface.100})", color: "light-dark({surface.50}, {surface.950})", shadow: "0px 4px 8px 0px light-dark(color-mix(in srgb, {surface.950}, transparent 96%), color-mix(in srgb, {surface.950}, transparent 96%))" };
var g6 = { root: r34, text: a19, icon: o36, info: e29, success: n20, warn: l12, error: i16, secondary: t21, contrast: s10, css: "" };

// node_modules/@primeuix/themes/dist/material/inplace/index.mjs
var o37 = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{transition.duration}" };
var r35 = { hoverBackground: "{content.hover.background}", hoverColor: "{content.hover.color}" };
var n21 = { root: o37, display: r35, css: "" };

// node_modules/@primeuix/themes/dist/material/inputchips/index.mjs
var o38 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" };
var r36 = { borderRadius: "{border.radius.sm}", focusBackground: "light-dark({surface.200}, {surface.700})", color: "light-dark({surface.800}, {surface.0})" };
var d15 = { root: o38, chip: r36, css: "" };

// node_modules/@primeuix/themes/dist/material/inputcolor/index.mjs
var r37 = { borderColor: "{content.border.color}" };
var o39 = { borderRadius: "{content.border.radius}" };
var e30 = { borderRadius: "{content.border.radius}", size: "1rem" };
var d16 = { size: "1rem", borderColor: "#ffffff", borderWidth: "3px", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)", transitionDuration: "{transition.duration}", focusRing: { borderWidth: "2px", borderColor: "#ffffff", outlineWidth: "2px", outlineColor: "rgba(255, 255, 255, 0.3)", outlineOffset: "2px" } };
var t22 = { color: "{surface.100}", background: "#ffffff", tileSize: "0.5rem" };
var i17 = { size: "2.25rem", borderRadius: "{content.border.radius}" };
var a20 = { root: r37, area: o39, slider: e30, handle: d16, transparencyGrid: t22, swatch: i17 };

// node_modules/@primeuix/themes/dist/material/inputgroup/index.mjs
var o40 = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.icon.color}", borderRadius: "{form.field.border.radius}", padding: "0.625rem", minWidth: "2.625rem", fontWeight: "{form.field.font.weight}", fontSize: "{form.field.font.size}" };
var css11 = "\n.p-inputgroup:has(.p-variant-filled) .p-inputgroupaddon {\n    border-block-start-color: dt('inputtext.filled.background');\n    border-inline-color: dt('inputtext.filled.background');\n    background: dt('inputtext.filled.background') no-repeat;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n}\n";
var r38 = { addon: o40, css: css11 };

// node_modules/@primeuix/themes/dist/material/inputnumber/index.mjs
var r39 = { transitionDuration: "{transition.duration}" };
var o41 = { width: "2.625rem", borderRadius: "{form.field.border.radius}", verticalPadding: "{form.field.padding.y}", background: "transparent", hoverBackground: "light-dark({surface.100}, {surface.800})", activeBackground: "light-dark({surface.200}, {surface.700})", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{surface.400}", hoverColor: "light-dark({surface.500}, {surface.300})", activeColor: "light-dark({surface.600}, {surface.200})" };
var css12 = "\n.p-inputnumber-stacked .p-inputnumber-button-group {\n    top: 2px;\n    right: 2px;\n    height: calc(100% - 4px);\n}\n\n.p-inputnumber-horizontal:has(.p-variant-filled) .p-inputnumber-button {\n    border-block-start-color: dt('inputtext.filled.background');\n    border-inline-color: dt('inputtext.filled.background');\n    background: dt('inputtext.filled.background') no-repeat;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n}\n\n.p-inputnumber-vertical:has(.p-variant-filled) .p-inputnumber-button {\n    border-block-color: dt('inputtext.filled.background');\n    border-inline-color: dt('inputtext.filled.background');\n    background: dt('inputtext.filled.background') no-repeat;\n}\n\n.p-inputnumber-vertical:has(.p-variant-filled) .p-inputnumber-increment-button {\n    border-block-end: 1px solid dt('inputtext.border.color')\n}\n";
var t23 = { root: r39, button: o41, css: css12 };

// node_modules/@primeuix/themes/dist/material/inputotp/index.mjs
var r40 = { gap: "0.5rem" };
var t24 = { width: "2.625rem", sm: { width: "2.25rem" }, lg: { width: "3rem" } };
var e31 = { root: r40, input: t24, css: "" };

// node_modules/@primeuix/themes/dist/material/inputtags/index.mjs
var o42 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", gap: "0.25rem" };
var r41 = { borderRadius: "{form.field.border.radius}" };
var d17 = { root: o42, item: r41 };

// node_modules/@primeuix/themes/dist/material/inputtext/index.mjs
var o43 = { fontSize: "{form.field.font.size}", fontWeight: "{form.field.font.weight}", background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var css13 = "\n.p-inputtext.p-variant-filled {\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    border: 1px solid transparent;\n    background: dt('inputtext.filled.background') no-repeat;\n    background-image: linear-gradient(to bottom, dt('inputtext.focus.border.color'), dt('inputtext.focus.border.color')), linear-gradient(to bottom, dt('inputtext.border.color'), dt('inputtext.border.color'));\n    background-size: 0 2px, 100% 1px;\n    background-position: 50% 100%, 50% 100%;\n    background-origin: border-box;\n    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);\n}\n\n.p-inputtext.p-variant-filled:enabled:hover {\n    background: dt('inputtext.filled.hover.background') no-repeat;\n    background-image: linear-gradient(to bottom, dt('inputtext.focus.border.color'), dt('inputtext.focus.border.color')), linear-gradient(to bottom, dt('inputtext.hover.border.color'), dt('inputtext.hover.border.color'));\n    background-size: 0 2px, 100% 1px;\n    background-position: 50% 100%, 50% 100%;\n    background-origin: border-box;\n    border-color: transparent;\n}\n\n.p-inputtext.p-variant-filled:enabled:focus {\n    outline: 0 none;\n    background: dt('inputtext.filled.focus.background') no-repeat;\n    background-image: linear-gradient(to bottom, dt('inputtext.focus.border.color'), dt('inputtext.focus.border.color')), linear-gradient(to bottom, dt('inputtext.border.color'), dt('inputtext.border.color'));\n    background-size: 100% 2px, 100% 1px;\n    background-position: 50% 100%, 50% 100%;\n    background-origin: border-box;\n    border-color: transparent;\n}\n\n.p-inputtext.p-variant-filled:enabled:hover:focus {\n    background-image: linear-gradient(to bottom, dt('inputtext.focus.border.color'), dt('inputtext.focus.border.color')), linear-gradient(to bottom, dt('inputtext.hover.border.color'), dt('inputtext.hover.border.color'));\n}\n\n.p-inputtext.p-variant-filled.p-invalid {\n    background-image: linear-gradient(to bottom, dt('inputtext.invalid.border.color'), dt('inputtext.invalid.border.color')), linear-gradient(to bottom, dt('inputtext.invalid.border.color'), dt('inputtext.invalid.border.color'));\n}\n\n.p-inputtext.p-variant-filled.p-invalid:enabled:focus {\n    background-image: linear-gradient(to bottom, dt('inputtext.invalid.border.color'), dt('inputtext.invalid.border.color')), linear-gradient(to bottom, dt('inputtext.invalid.border.color'), dt('inputtext.invalid.border.color'));\n}\n\n.p-inputtext.p-variant-filled:disabled {\n    background: dt('inputtext.disabled.background') no-repeat;\n    background-image: linear-gradient(to bottom, dt('inputtext.border.color'), dt('inputtext.border.color')), linear-gradient(to bottom, dt('inputtext.border.color'), dt('inputtext.border.color'));\n    background-size: 0 2px, 100% 1px;\n    background-position: 50% 100%, 50% 100%;\n    background-origin: border-box;\n    border-color: transparent;\n}\n";
var r42 = { root: o43, css: css13 };

// node_modules/@primeuix/themes/dist/material/knob/index.mjs
var o44 = { transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var r43 = { background: "{primary.color}" };
var t25 = { background: "{content.border.color}" };
var n22 = { color: "{text.muted.color}", fontSize: "1rem", fontWeight: "normal" };
var i18 = { root: o44, value: r43, range: t25, text: n22, css: "" };

// node_modules/@primeuix/themes/dist/material/label/index.mjs
var t26 = { gap: "0.5rem", fontSize: "{typography.font.size}", fontWeight: "500", textColor: "{text.color}", disabledOpacity: "0.5" };
var o45 = { root: t26 };

// node_modules/@primeuix/themes/dist/material/listbox/index.mjs
var o46 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", borderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", shadow: "{form.field.shadow}", borderRadius: "{form.field.border.radius}", transitionDuration: "{form.field.transition.duration}" };
var i19 = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } };
var t27 = { fontWeight: "{list.option.font.weight}", fontSize: "{list.option.font.size}", focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", selectedFontWeight: "{list.option.selected.font.weight}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", stripedBackground: "light-dark({surface.50}, {surface.900})" };
var r44 = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}", fontSize: "{list.option.group.font.size}" };
var d18 = { color: "{list.option.color}", gutterStart: "-0.375rem", gutterEnd: "0.375rem" };
var e32 = { padding: "{list.option.padding}" };
var css14 = "\n.p-listbox-option {\n    transition: none;\n}\n";
var n23 = { root: o46, list: i19, option: t27, optionGroup: r44, checkmark: d18, emptyMessage: e32, css: css14 };

// node_modules/@primeuix/themes/dist/material/megamenu/index.mjs
var o47 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", verticalOrientation: { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, horizontalOrientation: { padding: "0.5rem 0.625rem", gap: "0.5rem" }, transitionDuration: "{transition.duration}" };
var n24 = { borderRadius: "{content.border.radius}", padding: "{navigation.item.padding}" };
var i20 = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}", size: "{navigation.item.icon.size}" }, label: { fontWeight: "{navigation.item.label.font.weight}", fontSize: "{navigation.item.label.font.size}" } };
var a21 = { padding: "0", background: "{content.background}", borderColor: "transparent", borderRadius: "{content.border.radius}", color: "{content.color}", shadow: "{overlay.navigation.shadow}", gap: "0.5rem" };
var t28 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" };
var e33 = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", fontSize: "{navigation.submenu.label.font.size}", background: "{navigation.submenu.label.background}", color: "{navigation.submenu.label.color}" };
var r45 = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" };
var c12 = { borderColor: "{content.border.color}" };
var g7 = { borderRadius: "50%", size: "2.25rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "0", style: "none", color: "unset", offset: "0", shadow: "none" } };
var css15 = "\n.p-megamenu-button:focus-visible {\n    background: dt('navigation.item.active.background');\n}\n";
var d19 = { root: o47, baseItem: n24, item: i20, overlay: a21, submenu: t28, submenuLabel: e33, submenuIcon: r45, separator: c12, mobileButton: g7, css: css15 };

// node_modules/@primeuix/themes/dist/material/menu/index.mjs
var o48 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{navigation.item.transition.duration}" };
var n25 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" };
var i21 = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", size: "{navigation.item.icon.size}" }, label: { fontWeight: "{navigation.item.label.font.weight}", fontSize: "{navigation.item.label.font.size}" } };
var a22 = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", fontSize: "{navigation.submenu.label.font.size}", background: "{navigation.submenu.label.background}", color: "{navigation.submenu.label.color}" };
var t29 = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}" };
var e34 = { borderColor: "{content.border.color}" };
var css16 = "\n.p-menu-overlay {\n    border-color: transparent;\n}\n";
var r46 = { root: o48, list: n25, item: i21, submenuLabel: a22, submenuIcon: t29, separator: e34, css: css16 };

// node_modules/@primeuix/themes/dist/material/menubar/index.mjs
var o49 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.5rem 0.625rem", transitionDuration: "{transition.duration}" };
var n26 = { borderRadius: "{content.border.radius}", padding: "{navigation.item.padding}" };
var i22 = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}", size: "{navigation.item.icon.size}" }, label: { fontWeight: "{navigation.item.label.font.weight}", fontSize: "{navigation.item.label.font.size}" } };
var a23 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}", background: "{content.background}", borderColor: "transparent", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", mobileIndent: "0.875rem", icon: { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" } };
var t30 = { borderColor: "{content.border.color}" };
var e35 = { borderRadius: "50%", size: "2.25rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "0", style: "none", color: "unset", offset: "0", shadow: "none" } };
var css17 = "\n.p-menubar-button:focus-visible {\n    background: dt('navigation.item.active.background');\n}\n";
var r47 = { root: o49, baseItem: n26, item: i22, submenu: a23, separator: t30, mobileButton: e35, css: css17 };

// node_modules/@primeuix/themes/dist/material/message/index.mjs
var r48 = { borderRadius: "{content.border.radius}", borderWidth: "0", transitionDuration: "{transition.duration}" };
var o50 = { padding: "0.875rem 1.125rem", gap: "0.5rem", sm: { padding: "0.5rem 0.5rem" }, lg: { padding: "0.75rem 0.75rem" } };
var e36 = { fontSize: "0.875rem", fontWeight: "500", sm: { fontSize: "0.75rem" }, lg: { fontSize: "1rem" } };
var l13 = { size: "1.125rem", sm: { size: "0.875rem" }, lg: { size: "1.25rem" } };
var a24 = { width: "1.75rem", height: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } };
var n27 = { size: "0.875rem", sm: { size: "0.75rem" }, lg: { size: "1rem" } };
var d20 = { root: { borderWidth: "1px" } };
var t31 = { content: { padding: "0" } };
var i23 = { background: "light-dark(color-mix(in srgb, {blue.50}, transparent 5%), color-mix(in srgb, {blue.500}, transparent 84%))", borderColor: "light-dark({blue.200}, color-mix(in srgb, {blue.700}, transparent 64%))", color: "light-dark({blue.600}, {blue.500})", shadow: "none", closeButton: { hoverBackground: "light-dark({blue.100}, rgba(255, 255, 255, 0.05))", focusRing: { color: "light-dark({blue.600}, {blue.500})", shadow: "none" } }, outlined: { color: "light-dark({blue.600}, {blue.500})", borderColor: "light-dark({blue.600}, {blue.500})" }, simple: { color: "light-dark({blue.600}, {blue.500})" } };
var s11 = { background: "light-dark(color-mix(in srgb, {green.50}, transparent 5%), color-mix(in srgb, {green.500}, transparent 84%))", borderColor: "light-dark({green.200}, color-mix(in srgb, {green.700}, transparent 64%))", color: "light-dark({green.600}, {green.500})", shadow: "none", closeButton: { hoverBackground: "light-dark({green.100}, rgba(255, 255, 255, 0.05))", focusRing: { color: "light-dark({green.600}, {green.500})", shadow: "none" } }, outlined: { color: "light-dark({green.600}, {green.500})", borderColor: "light-dark({green.600}, {green.500})" }, simple: { color: "light-dark({green.600}, {green.500})" } };
var g8 = { background: "light-dark(color-mix(in srgb,{yellow.50}, transparent 5%), color-mix(in srgb, {yellow.500}, transparent 84%))", borderColor: "light-dark({yellow.200}, color-mix(in srgb, {yellow.700}, transparent 64%))", color: "light-dark({yellow.900}, {yellow.500})", shadow: "none", closeButton: { hoverBackground: "light-dark({yellow.100}, rgba(255, 255, 255, 0.05))", focusRing: { color: "light-dark({yellow.600}, {yellow.500})", shadow: "none" } }, outlined: { color: "light-dark({yellow.900}, {yellow.500})", borderColor: "light-dark({yellow.900}, {yellow.500})" }, simple: { color: "light-dark({yellow.900}, {yellow.500})" } };
var c13 = { background: "light-dark(color-mix(in srgb, {red.50}, transparent 5%), color-mix(in srgb, {red.500}, transparent 84%))", borderColor: "light-dark({red.200}, color-mix(in srgb, {red.700}, transparent 64%))", color: "light-dark({red.600}, {red.500})", shadow: "none", closeButton: { hoverBackground: "light-dark({red.100}, rgba(255, 255, 255, 0.05))", focusRing: { color: "light-dark({red.600}, {red.500})", shadow: "none" } }, outlined: { color: "light-dark({red.600}, {red.500})", borderColor: "light-dark({red.600}, {red.500})" }, simple: { color: "light-dark({red.600}, {red.500})" } };
var u4 = { background: "light-dark({surface.100}, {surface.800})", borderColor: "light-dark({surface.200}, {surface.700})", color: "light-dark({surface.600}, {surface.300})", shadow: "none", closeButton: { hoverBackground: "light-dark({surface.200}, {surface.700})", focusRing: { color: "light-dark({surface.600}, {surface.300})", shadow: "none" } }, outlined: { color: "light-dark({surface.600}, {surface.400})", borderColor: "light-dark({surface.600}, {surface.400})" }, simple: { color: "light-dark({surface.600}, {surface.400})" } };
var h4 = { background: "light-dark({surface.900}, {surface.0})", borderColor: "light-dark({surface.950}, {surface.100})", color: "light-dark({surface.50}, {surface.950})", shadow: "none", closeButton: { hoverBackground: "light-dark({surface.800}, {surface.100})", focusRing: { color: "light-dark({surface.50}, {surface.950})", shadow: "none" } }, outlined: { color: "light-dark({surface.950}, {surface.0})", borderColor: "light-dark({surface.950}, {surface.0})" }, simple: { color: "light-dark({surface.950}, {surface.0})" } };
var k3 = { root: r48, content: o50, text: e36, icon: l13, closeButton: a24, closeIcon: n27, outlined: d20, simple: t31, info: i23, success: s11, warn: g8, error: c13, secondary: u4, contrast: h4, css: "" };

// node_modules/@primeuix/themes/dist/material/metergroup/index.mjs
var e37 = { borderRadius: "{content.border.radius}", gap: "0.875rem" };
var r49 = { background: "{content.border.color}", size: "0.5rem" };
var a25 = { gap: "0.5rem" };
var o51 = { size: "0.5rem" };
var t32 = { fontWeight: "{typography.font.weight}", fontSize: "{typography.font.size}" };
var l14 = { size: "0.875rem" };
var i24 = { verticalGap: "0.5rem", horizontalGap: "0.875rem" };
var n28 = { root: e37, meters: r49, label: a25, labelMarker: o51, labelText: t32, labelIcon: l14, labelList: i24, css: "" };

// node_modules/@primeuix/themes/dist/material/multiselect/index.mjs
var o52 = { fontSize: "{form.field.font.size}", fontWeight: "{form.field.font.weight}", background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var r50 = { width: "2.25rem", color: "{form.field.icon.color}" };
var e38 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var d21 = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } };
var i25 = { fontSize: "{list.option.font.size}", fontWeight: "{list.option.font.weight}", focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", selectedFontWeight: "{list.option.selected.font.weight}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", gap: "0.625rem" };
var l15 = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", fontSize: "{list.option.group.font.size}", padding: "{list.option.group.padding}" };
var t33 = { color: "{form.field.icon.color}" };
var n29 = { borderRadius: "{border.radius.sm}" };
var c14 = { padding: "{list.option.padding}" };
var css18 = "\n.p-multiselect.p-variant-filled {\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    border: 1px solid transparent;\n    background: dt('multiselect.filled.background') no-repeat;\n    background-image: linear-gradient(to bottom, dt('multiselect.focus.border.color'), dt('multiselect.focus.border.color')), linear-gradient(to bottom, dt('multiselect.border.color'), dt('multiselect.border.color'));\n    background-size: 0 2px, 100% 1px;\n    background-position: 50% 100%, 50% 100%;\n    background-origin: border-box;\n    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);\n}\n\n.p-multiselect.p-variant-filled:not(.p-disabled):hover {\n    background: dt('multiselect.filled.hover.background') no-repeat;\n    background-image: linear-gradient(to bottom, dt('multiselect.focus.border.color'), dt('multiselect.focus.border.color')), linear-gradient(to bottom, dt('multiselect.hover.border.color'), dt('multiselect.hover.border.color'));\n    background-size: 0 2px, 100% 1px;\n    background-position: 50% 100%, 50% 100%;\n    background-origin: border-box;\n    border-color: transparent;\n}\n\n.p-multiselect.p-variant-filled:not(.p-disabled).p-focus {\n    outline: 0 none;\n    background: dt('multiselect.filled.focus.background') no-repeat;\n    background-image: linear-gradient(to bottom, dt('multiselect.focus.border.color'), dt('multiselect.focus.border.color')), linear-gradient(to bottom, dt('multiselect.border.color'), dt('multiselect.border.color'));\n    background-size: 100% 2px, 100% 1px;\n    background-position: 50% 100%, 50% 100%;\n    background-origin: border-box;\n    border-color: transparent;\n}\n\n.p-multiselect.p-variant-filled:not(.p-disabled).p-focus:hover {\n    background-image: linear-gradient(to bottom, dt('multiselect.focus.border.color'), dt('multiselect.focus.border.color')), linear-gradient(to bottom, dt('multiselect.hover.border.color'), dt('multiselect.hover.border.color'));\n}\n\n.p-multiselect.p-variant-filled.p-invalid {\n    background-image: linear-gradient(to bottom, dt('multiselect.invalid.border.color'), dt('multiselect.invalid.border.color')), linear-gradient(to bottom, dt('multiselect.invalid.border.color'), dt('multiselect.invalid.border.color'));\n}\n\n.p-multiselect.p-variant-filled.p-invalid:not(.p-disabled).p-focus  {\n    background-image: linear-gradient(to bottom, dt('multiselect.invalid.border.color'), dt('multiselect.invalid.border.color')), linear-gradient(to bottom, dt('multiselect.invalid.border.color'), dt('multiselect.invalid.border.color'));\n}\n\n.p-multiselect-option {\n    transition: none;\n}\n";
var a26 = { root: o52, dropdown: r50, overlay: e38, list: d21, option: i25, optionGroup: l15, chip: n29, clearIcon: t33, emptyMessage: c14, css: css18 };

// node_modules/@primeuix/themes/dist/material/navigationmenu/index.mjs
var i26 = { padding: "0.375rem 0.625rem", gap: "0.25rem" };
var a27 = { padding: "{navigation.item.padding}", borderRadius: "{content.border.radius}", gap: "{navigation.item.gap}", fontSize: "1rem", fontWeight: "500", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", focusBackground: "{navigation.item.focus.background}", activeColor: "{navigation.item.active.color}", activeBackground: "{navigation.item.active.background}", transitionDuration: "{navigation.item.transition.duration}" };
var o53 = { root: i26, baseItem: a27 };

// node_modules/@primeuix/themes/dist/material/orderlist/index.mjs
var r51 = { gap: "1rem" };
var a28 = { gap: "0.5rem" };
var o54 = { root: r51, controls: a28, css: "" };

// node_modules/@primeuix/themes/dist/material/organizationchart/index.mjs
var o55 = { gutter: "0.625rem", transitionDuration: "{transition.duration}" };
var r52 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{content.border.color}", color: "{content.color}", selectedColor: "{highlight.color}", hoverColor: "{content.hover.color}", padding: "0.875rem 1.125rem", toggleablePadding: "0.875rem 1.125rem 1.25rem 1.125rem", borderRadius: "{content.border.radius}", fontSize: "{typography.font.size}", fontWeight: "{typography.font.weight}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e39 = { background: "{content.background}", hoverBackground: "{content.hover.background}", borderColor: "{content.border.color}", color: "{text.muted.color}", hoverColor: "{text.color}", size: "1.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, icon: { size: "0.75rem" } };
var t34 = { color: "{content.border.color}", borderRadius: "{content.border.radius}", height: "24px" };
var n30 = { root: o55, node: r52, nodeToggleButton: e39, connector: t34, css: "" };

// node_modules/@primeuix/themes/dist/material/overlaybadge/index.mjs
var o56 = { outline: { width: "2px", color: "{content.background}" } };
var t35 = { root: o56, css: "" };

// node_modules/@primeuix/themes/dist/material/paginator/index.mjs
var o57 = { padding: "0.5rem 0.875rem", gap: "0.25rem", borderRadius: "{content.border.radius}", background: "{content.background}", color: "{content.color}", transitionDuration: "{transition.duration}" };
var t36 = { background: "transparent", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}", width: "2.25rem", height: "2.25rem", borderRadius: "50%", fontWeight: "{typography.font.weight}", fontSize: "{typography.font.size}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var r53 = { color: "{text.muted.color}", fontWeight: "{typography.font.weight}", fontSize: "{typography.font.size}" };
var e40 = { maxWidth: "2.25rem" };
var n31 = { root: o57, navButton: t36, currentPageReport: r53, jumpToPageInput: e40, css: "" };

// node_modules/@primeuix/themes/dist/material/panel/index.mjs
var r54 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" };
var o58 = { background: "transparent", color: "{text.color}", padding: "1.125rem", borderColor: "{content.border.color}", borderWidth: "0", borderRadius: "0" };
var e41 = { padding: "0.5rem 1.125rem" };
var t37 = { fontWeight: "600", fontSize: "{typography.font.size}" };
var d22 = { padding: "0 1.125rem 1.125rem 1.125rem" };
var n32 = { padding: "0 1.125rem 1.125rem 1.125rem" };
var a29 = { root: r54, header: o58, toggleableHeader: e41, title: t37, content: d22, footer: n32, css: "" };

// node_modules/@primeuix/themes/dist/material/panelmenu/index.mjs
var n33 = { gap: "0", transitionDuration: "{transition.duration}" };
var o59 = { background: "{content.background}", borderColor: "{content.border.color}", borderWidth: "0", color: "{content.color}", padding: "0", borderRadius: "0", first: { borderWidth: "0", topBorderRadius: "{content.border.radius}" }, last: { borderWidth: "0", bottomBorderRadius: "{content.border.radius}" } };
var r55 = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", gap: "0.5rem", padding: "{navigation.item.padding}", borderRadius: "{content.border.radius}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", size: "{navigation.item.icon.size}" }, label: { fontWeight: "{navigation.item.label.font.weight}", fontSize: "{navigation.item.label.font.size}" } };
var i27 = { indent: "0.875rem" };
var t38 = { color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}" };
var css19 = "\n.p-panelmenu-panel {\n    box-shadow: 0 0 0 1px dt('panelmenu.panel.border.color');\n    transition: margin dt('panelmenu.transition.duration');\n}\n\n.p-panelmenu-panel:has(.p-panelmenu-header-active) {\n    margin: 0.875rem 0;\n}\n\n.p-panelmenu-panel:first-child {\n    border-top-left-radius: dt('content.border.radius');\n    border-top-right-radius: dt('content.border.radius');\n    margin-top: 0;\n}\n\n.p-panelmenu-panel:last-child {\n    border-bottom-left-radius: dt('content.border.radius');\n    border-bottom-right-radius: dt('content.border.radius');\n    margin-bottom: 0;\n}\n\n.p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {\n    background: dt('navigation.item.active.background');\n}\n";
var a30 = { root: n33, panel: o59, item: r55, submenu: i27, submenuIcon: t38, css: css19 };

// node_modules/@primeuix/themes/dist/material/password/index.mjs
var o60 = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: ".625rem" };
var r56 = { color: "{form.field.icon.color}" };
var e42 = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", padding: "{overlay.popover.padding}", shadow: "{overlay.popover.shadow}" };
var a31 = { gap: "0.5rem" };
var d23 = { fontSize: "{typography.font.size}", fontWeight: "{typography.font.weight}" };
var t39 = { weakBackground: "light-dark({red.500}, {red.400})", mediumBackground: "light-dark({amber.500}, {amber.400})", strongBackground: "light-dark({green.500}, {green.400})" };
var n34 = { meter: o60, icon: r56, overlay: e42, content: a31, meterText: d23, strength: t39, css: "" };

// node_modules/@primeuix/themes/dist/material/picklist/index.mjs
var r57 = { gap: "1rem" };
var a32 = { gap: "0.5rem" };
var o61 = { root: r57, controls: a32, css: "" };

// node_modules/@primeuix/themes/dist/material/popover/index.mjs
var o62 = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.125rem" };
var r58 = { padding: "{overlay.popover.padding}" };
var e43 = { root: o62, content: r58, css: "" };

// node_modules/@primeuix/themes/dist/material/progressbar/index.mjs
var r59 = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: "0.875rem" };
var o63 = { background: "{primary.color}" };
var e44 = { color: "{primary.contrast.color}", fontSize: "0.625rem", fontWeight: "600" };
var t40 = { root: r59, value: o63, label: e44, css: "" };

// node_modules/@primeuix/themes/dist/material/progressspinner/index.mjs
var r60 = { colorOne: "light-dark({red.500}, {red.400})", colorTwo: "light-dark({blue.500}, {blue.400})", colorThree: "light-dark({green.500}, {green.400})", colorFour: "light-dark({yellow.500}, {yellow.400})" };
var e45 = { root: r60, css: "" };

// node_modules/@primeuix/themes/dist/material/radiobutton/index.mjs
var o64 = { width: "20px", height: "20px", background: "{form.field.background}", checkedBackground: "{primary.contrast.color}", checkedHoverBackground: "{primary.contrast.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "0", style: "none", color: "unset", offset: "0", shadow: "none" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "16px", height: "16px" }, lg: { width: "24px", height: "24px" } };
var r61 = { size: "10px", checkedColor: "{primary.color}", checkedHoverColor: "{primary.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "8px" }, lg: { size: "12px" } };
var css20 = "\n.p-radiobutton {\n    border-radius: 50%;\n    transition: box-shadow dt('radiobutton.transition.duration');\n}\n\n.p-radiobutton-box {\n    border-width: 2px;\n}\n\n.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover) {\n    box-shadow: 0 0 1px 10px color-mix(in srgb, dt('text.color'), transparent 96%);\n}\n\n.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:focus-visible) {\n    box-shadow: 0 0 1px 10px color-mix(in srgb, dt('text.color'), transparent 88%);\n}\n\n.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:hover) {\n    box-shadow: 0 0 1px 10px color-mix(in srgb, dt('radiobutton.checked.border.color'), transparent 92%);\n}\n\n.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:focus-visible) {\n    box-shadow: 0 0 1px 10px color-mix(in srgb, dt('radiobutton.checked.border.color'), transparent 84%);\n}\n";
var d24 = { root: o64, icon: r61, css: css20 };

// node_modules/@primeuix/themes/dist/material/rating/index.mjs
var o65 = { gap: "0.5rem", transitionDuration: "{transition.duration}", focusRing: { width: "0", style: "none", color: "unset", offset: "0", shadow: "none" } };
var n35 = { size: "1.125rem", color: "{text.muted.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" };
var css21 = "\n.p-rating:not(.p-disabled):not(.p-readonly) .p-rating-option:hover {\n    background: color-mix(in srgb, dt('rating.icon.color'), transparent 96%);\n    box-shadow: 0 0 1px 8px color-mix(in srgb, dt('rating.icon.color'), transparent 96%);\n}\n\n.p-rating:not(.p-disabled):not(.p-readonly) .p-rating-option[data-highlighted]:hover {\n    background: color-mix(in srgb, dt('rating.icon.active.color'), transparent 92%);\n    box-shadow: 0 0 1px 8px color-mix(in srgb, dt('rating.icon.active.color'), transparent 92%);\n}\n\n.p-rating-option.p-focus-visible {\n    background: color-mix(in srgb, dt('rating.icon.active.color'), transparent 84%);\n    box-shadow: 0 0 1px 8px color-mix(in srgb, dt('rating.icon.active.color'), transparent 84%);\n}\n";
var r62 = { root: o65, icon: n35, css: css21 };

// node_modules/@primeuix/themes/dist/material/ripple/index.mjs
var a33 = { background: "light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.3))" };
var r63 = { root: a33, css: "" };

// node_modules/@primeuix/themes/dist/material/scrollarea/index.mjs
var r64 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var o66 = { padding: "1.125rem" };
var n36 = { background: "{transparent}", margin: "0.25rem", size: "0.375rem", transitionDuration: "{transition.duration}" };
var a34 = { background: "{primary.color}" };
var t41 = { fadeSize: "40px" };
var e46 = { root: r64, viewport: o66, scrollbar: n36, handle: a34, mask: t41 };

// node_modules/@primeuix/themes/dist/material/scrollpanel/index.mjs
var o67 = { transitionDuration: "{transition.duration}" };
var r65 = { size: "9px", borderRadius: "{border.radius.sm}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, background: "light-dark({surface.200}, {surface.700})" };
var s12 = { root: o67, bar: r65, css: "" };

// node_modules/@primeuix/themes/dist/material/select/index.mjs
var o68 = { fontSize: "{form.field.font.size}", fontWeight: "{form.field.font.weight}", background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var r66 = { width: "2.25rem", color: "{form.field.icon.color}" };
var e47 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var d25 = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } };
var l16 = { fontSize: "{list.option.font.size}", fontWeight: "{list.option.font.weight}", focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", selectedFontWeight: "{list.option.selected.font.weight}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" };
var i28 = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", fontSize: "{list.option.group.font.size}", padding: "{list.option.group.padding}" };
var t42 = { color: "{form.field.icon.color}" };
var n37 = { color: "{list.option.color}", gutterStart: "-0.375rem", gutterEnd: "0.375rem" };
var c15 = { padding: "{list.option.padding}" };
var css22 = "\n.p-select.p-variant-filled {\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    border: 1px solid transparent;\n    background: dt('select.filled.background') no-repeat;\n    background-image: linear-gradient(to bottom, dt('select.focus.border.color'), dt('select.focus.border.color')), linear-gradient(to bottom, dt('select.border.color'), dt('select.border.color'));\n    background-size: 0 2px, 100% 1px;\n    background-position: 50% 100%, 50% 100%;\n    background-origin: border-box;\n    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);\n}\n\n.p-select.p-variant-filled:not(.p-disabled):hover {\n    background: dt('select.filled.hover.background') no-repeat;\n    background-image: linear-gradient(to bottom, dt('select.focus.border.color'), dt('select.focus.border.color')), linear-gradient(to bottom, dt('select.hover.border.color'), dt('select.hover.border.color'));\n    background-size: 0 2px, 100% 1px;\n    background-position: 50% 100%, 50% 100%;\n    background-origin: border-box;\n    border-color: transparent;\n}\n\n.p-select.p-variant-filled:not(.p-disabled).p-focus {\n    outline: 0 none;\n    background: dt('select.filled.focus.background') no-repeat;\n    background-image: linear-gradient(to bottom, dt('select.focus.border.color'), dt('select.focus.border.color')), linear-gradient(to bottom, dt('select.border.color'), dt('select.border.color'));\n    background-size: 100% 2px, 100% 1px;\n    background-position: 50% 100%, 50% 100%;\n    background-origin: border-box;\n    border-color: transparent;\n}\n\n.p-select.p-variant-filled:not(.p-disabled).p-focus:hover {\n    background-image: linear-gradient(to bottom, dt('select.focus.border.color'), dt('select.focus.border.color')), linear-gradient(to bottom, dt('select.hover.border.color'), dt('select.hover.border.color'));\n}\n\n.p-select.p-variant-filled.p-invalid {\n    background-image: linear-gradient(to bottom, dt('select.invalid.border.color'), dt('select.invalid.border.color')), linear-gradient(to bottom, dt('select.invalid.border.color'), dt('select.invalid.border.color'));\n}\n\n.p-select.p-variant-filled.p-invalid:not(.p-disabled).p-focus  {\n    background-image: linear-gradient(to bottom, dt('select.invalid.border.color'), dt('select.invalid.border.color')), linear-gradient(to bottom, dt('select.invalid.border.color'), dt('select.invalid.border.color'));\n}\n\n.p-select-option {\n    transition: none;\n}\n";
var a35 = { root: o68, dropdown: r66, overlay: e47, list: d25, option: l16, optionGroup: i28, clearIcon: t42, checkmark: n37, emptyMessage: c15, css: css22 };

// node_modules/@primeuix/themes/dist/material/selectbutton/index.mjs
var r67 = { borderRadius: "{form.field.border.radius}", invalidBorderColor: "{form.field.invalid.border.color}" };
var o69 = { root: r67, css: "" };

// node_modules/@primeuix/themes/dist/material/sidebar/index.mjs
var o70 = { borderColor: "{content.border.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var i29 = { background: "light-dark({surface.50}, {surface.900})" };
var n38 = { padding: "0.5rem", gap: "0.5rem" };
var r68 = { padding: "0.5rem", gap: "0.5rem" };
var e48 = { background: "{content.background}", color: "{content.color}", floatingBorderRadius: "{content.border.radius}", floatingShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)" };
var a36 = { gap: "0.125rem" };
var t43 = { padding: "0.5rem" };
var c16 = { padding: "0.5rem" };
var g9 = { padding: "0 0.5rem", height: "2rem", borderRadius: "{content.border.radius}", fontSize: "0.75rem", fontWeight: "500", color: "{text.muted.color}" };
var d26 = { top: "0.875rem", right: "0.75rem", size: "1.25rem", borderRadius: "{content.border.radius}", color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", focusBackground: "{navigation.item.focus.background}", icon: { size: "{navigation.item.icon.size}" } };
var u5 = { gap: "{navigation.list.gap}" };
var m3 = { padding: "0.25rem 0.625rem", gap: "{navigation.item.gap}", height: "2rem", borderRadius: "{navigation.item.border.radius}", fontSize: "{navigation.item.label.font.size}", fontWeight: "{navigation.item.label.font.weight}", color: "{navigation.item.color}", focusBackground: "{navigation.item.focus.background}", focusColor: "{navigation.item.focus.color}", activeBackground: "{navigation.item.active.background}", activeColor: "{navigation.item.active.color}", iconOnlyWidth: "2rem", withActionPaddingEnd: "2rem", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", size: "{navigation.item.icon.size}" } };
var s13 = { top: "0.375rem", right: "0.25rem", width: "1.25rem", borderRadius: "{content.border.radius}", color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", focusBackground: "{navigation.item.focus.background}", icon: { size: "{navigation.item.icon.size}" } };
var l17 = { top: "0.375rem", right: "0.25rem", height: "1.25rem", minWidth: "1.25rem", borderRadius: "0.375rem", padding: "0 0.25rem", fontSize: "0.75rem", fontWeight: "500", background: "{content.hover.background}", borderColor: "{content.border.color}", color: "{text.muted.color}" };
var f4 = { paddingBlock: "0.125rem", gap: "0.125rem", indentMargin: "0.875rem", indentPadding: "0.625rem", collapsibleIndent: "1.5rem", collapsibleTopMargin: "0.125rem", collapsibleBorderRadius: "0.375rem" };
var v3 = { padding: "{navigation.item.padding}", gap: "{navigation.item.gap}", height: "2rem", borderRadius: "{navigation.item.border.radius}", fontSize: "{navigation.item.label.font.size}", fontWeight: "{navigation.item.label.font.weight}", color: "{navigation.item.color}", focusBackground: "{navigation.item.focus.background}", focusColor: "{navigation.item.focus.color}", activeBackground: "{navigation.item.active.background}", activeColor: "{navigation.item.active.color}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", size: "{navigation.item.icon.size}" } };
var b3 = { background: "light-dark({surface.50}, {surface.900})", floatingBackground: "light-dark({surface.50}, {surface.900})", insetBackground: "light-dark({surface.0}, {surface.950})", margin: "0.5rem", borderRadius: "{content.border.radius}", shadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)" };
var p4 = { root: o70, layout: i29, header: n38, footer: r68, content: a36, aside: t43, panel: e48, group: c16, groupLabel: g9, groupAction: d26, menu: u5, menuButton: m3, menuAction: s13, menuBadge: l17, menuSub: f4, menuSubButton: v3, main: b3 };

// node_modules/@primeuix/themes/dist/material/skeleton/index.mjs
var r69 = { borderRadius: "{content.border.radius}", background: "light-dark({surface.200}, rgba(255, 255, 255, 0.06))", animationBackground: "light-dark(rgba(255,255,255,0.4), rgba(255, 255, 255, 0.04))" };
var a37 = { root: r69, css: "" };

// node_modules/@primeuix/themes/dist/material/slider/index.mjs
var r70 = { transitionDuration: "{transition.duration}" };
var o71 = { background: "{content.border.color}", borderRadius: "{border.radius.xs}", size: "2px" };
var n39 = { background: "{primary.color}" };
var d27 = { width: "18px", height: "18px", borderRadius: "50%", background: "{primary.color}", hoverBackground: "{primary.color}", content: { borderRadius: "50%", background: "{primary.color}", hoverBackground: "{primary.color}", width: "18px", height: "18px", shadow: "0px 2px 1px -1px rgba(0, 0, 0, .2), 0px 1px 1px 0px rgba(0, 0, 0, .14), 0px 1px 3px 0px rgba(0, 0, 0, .12)" }, focusRing: { width: "0", style: "none", color: "unset", offset: "0", shadow: "none" } };
var css23 = "\n.p-slider-handle {\n    transition: box-shadow dt('slider.transition.duration');\n}\n\n.p-slider:not(.p-disabled) .p-slider-handle:hover {\n    box-shadow: 0 0 1px 10px color-mix(in srgb, dt('slider.handle.background'), transparent 92%);\n}\n\n.p-slider-handle:focus-visible,\n.p-slider:not(.p-disabled) .p-slider-handle:focus:hover {\n    box-shadow: 0 0 1px 10px color-mix(in srgb, dt('slider.handle.background'), transparent 84%);\n}\n";
var a38 = { root: r70, track: o71, range: n39, handle: d27, css: css23 };

// node_modules/@primeuix/themes/dist/material/speeddial/index.mjs
var t44 = { gap: "0.5rem", transitionDuration: "{transition.duration}" };
var a39 = { root: t44, css: "" };

// node_modules/@primeuix/themes/dist/material/splitbutton/index.mjs
var r71 = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "1.75rem", raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)" };
var d28 = { root: r71, css: "" };

// node_modules/@primeuix/themes/dist/material/splitter/index.mjs
var o72 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", transitionDuration: "{transition.duration}" };
var r72 = { background: "{content.border.color}" };
var n40 = { size: "24px", background: "transparent", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var t45 = { root: o72, gutter: r72, handle: n40, css: "" };

// node_modules/@primeuix/themes/dist/material/stepper/index.mjs
var r73 = { transitionDuration: "{transition.duration}" };
var o73 = { background: "{content.border.color}", activeBackground: "{primary.color}", margin: "0 0 0 1.375rem", size: "2px" };
var e49 = { padding: "0.5rem", gap: "0.875rem" };
var t46 = { padding: "0.625rem 0.875rem", borderRadius: "{content.border.radius}", focusRing: { width: "0", style: "none", color: "unset", offset: "0", shadow: "none" }, gap: "0.5rem" };
var a40 = { color: "{text.muted.color}", activeColor: "{text.color}", fontWeight: "500", fontSize: "{typography.font.size}" };
var n41 = { activeBackground: "{primary.color}", activeBorderColor: "{primary.color}", activeColor: "{primary.contrast.color}", size: "1.75rem", fontSize: "1rem", fontWeight: "500", borderRadius: "50%", shadow: "none", background: "light-dark({surface.400}, {surface.200})", borderColor: "light-dark({surface.400}, {surface.200})", color: "light-dark({surface.0}, {surface.900})" };
var i30 = { padding: "0.75rem 0.5rem 1rem 0.5rem" };
var c17 = { background: "{content.background}", color: "{content.color}", padding: "0", indent: "0.875rem" };
var css24 = "\n.p-step-header:focus-visible {\n    background: dt('navigation.item.active.background');\n}\n";
var d29 = { root: r73, separator: o73, step: e49, stepHeader: t46, stepTitle: a40, stepNumber: n41, steppanels: i30, steppanel: c17, css: css24 };

// node_modules/@primeuix/themes/dist/material/steps/index.mjs
var o74 = { transitionDuration: "{transition.duration}" };
var r74 = { background: "{content.border.color}" };
var t47 = { borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" };
var e50 = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "500" };
var c18 = { background: "{content.background}", activeBackground: "{content.background}", borderColor: "{content.border.color}", activeBorderColor: "{content.border.color}", color: "{text.muted.color}", activeColor: "{primary.color}", size: "1.75rem", fontSize: "1rem", fontWeight: "500", borderRadius: "50%", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" };
var n42 = { root: o74, separator: r74, itemLink: t47, itemLabel: e50, itemNumber: c18, css: "" };

// node_modules/@primeuix/themes/dist/material/tabmenu/index.mjs
var o75 = { transitionDuration: "{transition.duration}" };
var r75 = { borderWidth: "0 0 1px 0", background: "{content.background}", borderColor: "{content.border.color}" };
var t48 = { background: "transparent", hoverBackground: "transparent", activeBackground: "transparent", borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", hoverBorderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "0.875rem 1rem", fontWeight: "600", margin: "0 0 -1px 0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e51 = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" };
var c19 = { height: "1px", bottom: "-1px", background: "{primary.color}" };
var n43 = { root: o75, tablist: r75, item: t48, itemIcon: e51, activeBar: c19, css: "" };

// node_modules/@primeuix/themes/dist/material/tabs/index.mjs
var o76 = { transitionDuration: "{transition.duration}" };
var n44 = { borderWidth: "0 0 1px 0", background: "{content.background}", borderColor: "{content.border.color}" };
var r76 = { background: "transparent", hoverBackground: "{content.hover.background}", activeBackground: "transparent", borderWidth: "0", borderColor: "transparent", hoverBorderColor: "transparent", activeBorderColor: "transparent", color: "{text.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "0.875rem 1.125rem", fontWeight: "600", fontSize: "{typography.font.size}", margin: "0", gap: "0.5rem", focusRing: { width: "0", style: "none", color: "unset", offset: "0", shadow: "none" } };
var t49 = { background: "{content.background}", color: "{content.color}", padding: "1.125rem 1.125rem 1.125rem 1.125rem", focusRing: { width: "0", style: "none", color: "unset", offset: "0", shadow: "none" } };
var e52 = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", width: "2.625rem", shadow: "none", focusRing: { width: "0", style: "none", color: "unset", offset: "0", shadow: "none" } };
var a41 = { height: "2px", bottom: "0", background: "{primary.color}" };
var css25 = "\n.p-tabs-scrollable .p-tab {\n    flex-grow: 0\n}\n\n.p-tab-active {\n    --p-ripple-background: color-mix(in srgb, dt('primary.color'), transparent 90%);\n}\n\n.p-tab:not(.p-disabled):focus-visible {\n    background: dt('navigation.item.active.background');\n}\n\n.p-tablist-nav-button:focus-visible {\n    background: dt('navigation.item.active.background');\n}\n";
var c20 = { root: o76, tablist: n44, tab: r76, tabpanel: t49, navButton: e52, activeBar: a41, css: css25 };

// node_modules/@primeuix/themes/dist/material/tabview/index.mjs
var o77 = { transitionDuration: "{transition.duration}" };
var r77 = { background: "{content.background}", borderColor: "{content.border.color}" };
var t50 = { borderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" };
var n45 = { background: "{content.background}", color: "{content.color}" };
var c21 = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", shadow: "0px 0px 10px 50px light-dark(rgba(255, 255, 255, 0.6), color-mix(in srgb, {content.background}, transparent 50%))" };
var a42 = { root: o77, tabList: r77, tab: t50, tabPanel: n45, navButton: c21, css: "" };

// node_modules/@primeuix/themes/dist/material/tag/index.mjs
var r78 = { fontSize: "0.75rem", fontWeight: "700", padding: "0.25rem 0.5rem", gap: "0.25rem", borderRadius: "{content.border.radius}", roundedBorderRadius: "{border.radius.xl}" };
var a43 = { size: "0.625rem" };
var o78 = { background: "{primary.color}", color: "{primary.contrast.color}" };
var e53 = { background: "light-dark({surface.100}, {surface.800})", color: "light-dark({surface.600}, {surface.300})" };
var d30 = { background: "light-dark({green.500}, {green.400})", color: "light-dark({surface.0}, {green.950})" };
var c22 = { background: "light-dark({sky.500}, {sky.400})", color: "light-dark({surface.0}, {sky.950})" };
var g10 = { background: "light-dark({orange.500}, {orange.400})", color: "light-dark({surface.0}, {orange.950})" };
var s14 = { background: "light-dark({red.500}, {red.400})", color: "light-dark({surface.0}, {red.950})" };
var n46 = { background: "light-dark({surface.950}, {surface.0})", color: "light-dark({surface.0}, {surface.950})" };
var u6 = { root: r78, icon: a43, primary: o78, secondary: e53, success: d30, info: c22, warn: g10, danger: s14, contrast: n46, css: "" };

// node_modules/@primeuix/themes/dist/material/terminal/index.mjs
var o79 = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.color}", height: "15.75rem", padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{form.field.border.radius}", fontWeight: "{typography.font.weight}", fontSize: "{typography.font.size}" };
var r79 = { gap: "0.25rem" };
var d31 = { margin: "2px 0" };
var e54 = { root: o79, prompt: r79, commandResponse: d31, css: "" };

// node_modules/@primeuix/themes/dist/material/textarea/index.mjs
var o80 = { fontSize: "{form.field.font.size}", fontWeight: "{form.field.font.weight}", background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var css26 = "\n.p-textarea.p-variant-filled {\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    border: 1px solid transparent;\n    background: dt('textarea.filled.background') no-repeat;\n    background-image: linear-gradient(to bottom, dt('textarea.focus.border.color'), dt('textarea.focus.border.color')), linear-gradient(to bottom, dt('textarea.border.color'), dt('textarea.border.color'));\n    background-size: 0 2px, 100% 1px;\n    background-position: 50% 100%, 50% 100%;\n    background-origin: border-box;\n    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);\n}\n\n.p-textarea.p-variant-filled:enabled:hover {\n    background: dt('textarea.filled.hover.background') no-repeat;\n    background-image: linear-gradient(to bottom, dt('textarea.focus.border.color'), dt('textarea.focus.border.color')), linear-gradient(to bottom, dt('textarea.hover.border.color'), dt('textarea.hover.border.color'));\n    background-size: 0 2px, 100% 1px;\n    background-position: 50% 100%, 50% 100%;\n    background-origin: border-box;\n    border-color: transparent;\n}\n\n.p-textarea.p-variant-filled:enabled:focus {\n    outline: 0 none;\n    background: dt('textarea.filled.focus.background') no-repeat;\n    background-image: linear-gradient(to bottom, dt('textarea.focus.border.color'), dt('textarea.focus.border.color')), linear-gradient(to bottom, dt('textarea.border.color'), dt('textarea.border.color'));\n    background-size: 100% 2px, 100% 1px;\n    background-position: 50% 100%, 50% 100%;\n    background-origin: border-box;\n    border-color: transparent;\n}\n\n.p-textarea.p-variant-filled:enabled:hover:focus {\n    background-image: linear-gradient(to bottom, dt('textarea.focus.border.color'), dt('textarea.focus.border.color')), linear-gradient(to bottom, dt('textarea.hover.border.color'), dt('textarea.hover.border.color'));\n}\n\n.p-textarea.p-variant-filled.p-invalid {\n    background-image: linear-gradient(to bottom, dt('textarea.invalid.border.color'), dt('textarea.invalid.border.color')), linear-gradient(to bottom, dt('textarea.invalid.border.color'), dt('textarea.invalid.border.color'));\n}\n\n.p-textarea.p-variant-filled.p-invalid:enabled:focus {\n    background-image: linear-gradient(to bottom, dt('textarea.invalid.border.color'), dt('textarea.invalid.border.color')), linear-gradient(to bottom, dt('textarea.invalid.border.color'), dt('textarea.invalid.border.color'));\n}\n";
var r80 = { root: o80, css: css26 };

// node_modules/@primeuix/themes/dist/material/tieredmenu/index.mjs
var o81 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" };
var i31 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" };
var n47 = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}", size: "{navigation.item.icon.size}" }, label: { fontWeight: "{navigation.item.label.font.weight}", fontSize: "{navigation.item.label.font.size}" } };
var a44 = { mobileIndent: "0.875rem" };
var t51 = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" };
var e55 = { borderColor: "{content.border.color}" };
var css27 = "\n.p-tieredmenu-overlay {\n    border-color: transparent;\n}\n";
var r81 = { root: o81, list: i31, item: n47, submenu: a44, submenuIcon: t51, separator: e55, css: css27 };

// node_modules/@primeuix/themes/dist/material/timeline/index.mjs
var e56 = { minHeight: "4.375rem" };
var r82 = { eventContent: { padding: "0.875rem 0" } };
var o82 = { eventContent: { padding: "0 0.875rem" } };
var n48 = { size: "1.25rem", borderRadius: "50%", borderWidth: "2px", background: "{primary.color}", borderColor: "light-dark({surface.0}, {surface.900})", content: { borderRadius: "50%", size: "0", background: "{primary.color}", insetShadow: "none" } };
var t52 = { color: "{content.border.color}", size: "2px" };
var a45 = { event: e56, horizontal: r82, vertical: o82, eventMarker: n48, eventConnector: t52, css: "" };

// node_modules/@primeuix/themes/dist/material/toast/index.mjs
var r83 = { width: "21.875rem", borderRadius: "{content.border.radius}", borderWidth: "0", transitionDuration: "0.3s", blur: "10px", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var o83 = { size: "1.125rem", margin: "0" };
var e57 = { padding: "{overlay.popover.padding}", gap: "0.5rem" };
var a46 = { gap: "0.5rem" };
var l18 = { fontWeight: "500", fontSize: "0.875rem" };
var t53 = { fontWeight: "500", fontSize: "0.75rem" };
var g11 = { width: "1.75rem", height: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } };
var n49 = { size: "0.875rem" };
var c23 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{text.color}", detailColor: "{text.muted.color}", shadow: "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)", closeButton: { hoverBackground: "{content.hover.background}", focusRing: { color: "{focus.ring.color}", shadow: "none" } } };
var s15 = { background: "light-dark({blue.50}, color-mix(in srgb, {blue.500}, transparent 36%))", borderColor: "light-dark({blue.200}, color-mix(in srgb, {blue.700}, transparent 64%))", color: "light-dark({blue.600}, {surface.0})", detailColor: "light-dark({surface.700}, {blue.100})", shadow: "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)", closeButton: { hoverBackground: "light-dark({blue.100}, rgba(255, 255, 255, 0.05))", focusRing: { color: "light-dark({blue.600}, {blue.500})", shadow: "none" } } };
var d32 = { background: "light-dark({green.50}, color-mix(in srgb, {green.500}, transparent 36%))", borderColor: "light-dark({green.200}, color-mix(in srgb, {green.700}, transparent 64%))", color: "light-dark({green.600}, {surface.0})", detailColor: "light-dark({surface.700}, {green.100})", shadow: "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)", closeButton: { hoverBackground: "light-dark({green.100}, rgba(255, 255, 255, 0.05))", focusRing: { color: "light-dark({green.600}, {green.500})", shadow: "none" } } };
var i32 = { background: "light-dark({yellow.50}, color-mix(in srgb, {yellow.500}, transparent 36%))", borderColor: "light-dark({yellow.200}, color-mix(in srgb, {yellow.700}, transparent 64%))", color: "light-dark({yellow.900}, {surface.0})", detailColor: "light-dark({surface.700}, {yellow.50})", shadow: "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)", closeButton: { hoverBackground: "light-dark({yellow.100}, rgba(255, 255, 255, 0.05))", focusRing: { color: "light-dark({yellow.600}, {yellow.500})", shadow: "none" } } };
var p5 = { background: "light-dark({red.50}, color-mix(in srgb, {red.500}, transparent 36%))", borderColor: "light-dark({red.200}, color-mix(in srgb, {red.700}, transparent 64%))", color: "light-dark({red.600}, {surface.0})", detailColor: "light-dark({surface.700}, {red.100})", shadow: "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)", closeButton: { hoverBackground: "light-dark({red.100}, rgba(255, 255, 255, 0.05))", focusRing: { color: "light-dark({red.600}, {red.500})", shadow: "none" } } };
var x = { background: "light-dark({surface.100}, {surface.800})", borderColor: "light-dark({surface.200}, {surface.700})", color: "light-dark({surface.600}, {surface.300})", detailColor: "light-dark({surface.700}, {surface.0})", shadow: "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)", closeButton: { hoverBackground: "light-dark({surface.200}, {surface.700})", focusRing: { color: "light-dark({surface.600}, {surface.300})", shadow: "none" } } };
var u7 = { background: "light-dark({surface.900}, {surface.0})", borderColor: "light-dark({surface.950}, {surface.100})", color: "light-dark({surface.50}, {surface.950})", detailColor: "light-dark({surface.0}, {surface.950})", shadow: "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)", closeButton: { hoverBackground: "light-dark({surface.800}, {surface.100})", focusRing: { color: "light-dark({surface.50}, {surface.950})", shadow: "none" } } };
var h5 = { root: r83, icon: o83, content: e57, text: a46, summary: l18, detail: t53, closeButton: g11, closeIcon: n49, normal: c23, info: s15, success: d32, warn: i32, error: p5, secondary: x, contrast: u7, css: "" };

// node_modules/@primeuix/themes/dist/material/togglebutton/index.mjs
var o84 = { padding: "0.625rem 0.875rem", borderRadius: "{form.field.border.radius}", gap: "0.5rem", fontWeight: "500", fontSize: "{form.field.font.size}", background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.color}", hoverColor: "{form.field.color}", checkedColor: "{form.field.color}", checkedBorderColor: "{form.field.border.color}", disabledBackground: "{form.field.disabled.background}", disabledBorderColor: "{form.field.disabled.background}", disabledColor: "{form.field.disabled.color}", invalidBorderColor: "{form.field.invalid.border.color}", focusRing: { width: "0", style: "none", offset: "0", color: "unset", shadow: "none" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", padding: "0.5rem 0.625rem" }, lg: { fontSize: "{form.field.lg.font.size}", padding: "0.75rem 1.125rem" }, hoverBackground: "light-dark({surface.100}, {surface.800})", checkedBackground: "light-dark({surface.200}, {surface.700})" };
var r84 = { color: "{text.muted.color}", hoverColor: "{text.muted.color}", checkedColor: "{text.muted.color}", disabledColor: "{form.field.disabled.color}" };
var e58 = { checkedBackground: "transparent", checkedShadow: "none", padding: "0", borderRadius: "0", sm: { padding: "0" }, lg: { padding: "0" } };
var css28 = "\n.p-togglebutton:focus-visible {\n    background: dt('togglebutton.hover.background');\n}\n";
var d33 = { root: o84, icon: r84, content: e58, css: css28 };

// node_modules/@primeuix/themes/dist/material/toggleswitch/index.mjs
var r85 = { width: "2.375rem", height: "0.875rem", borderRadius: "30px", gap: "0px", shadow: "none", focusRing: { width: "0", style: "none", color: "unset", offset: "0", shadow: "none" }, borderWidth: "1px", borderColor: "transparent", hoverBorderColor: "transparent", checkedBorderColor: "transparent", checkedHoverBorderColor: "transparent", invalidBorderColor: "{form.field.invalid.border.color}", transitionDuration: "{form.field.transition.duration}", slideDuration: "0.2s", background: "light-dark({surface.300}, {surface.700})", disabledBackground: "light-dark({surface.400}, {surface.600})", hoverBackground: "light-dark({surface.300}, {surface.700})", checkedBackground: "light-dark({primary.200}, {primary.color})", checkedHoverBackground: "light-dark({primary.200}, {primary.color})" };
var o85 = { borderRadius: "50%", size: "1.25rem", background: "light-dark({surface.0}, {surface.400})", disabledBackground: "light-dark({surface.200}, {surface.500})", hoverBackground: "light-dark({surface.0}, {surface.300})", checkedBackground: "light-dark({primary.color}, {primary.200})", checkedHoverBackground: "light-dark({primary.color}, {primary.200})", color: "light-dark({text.muted.color}, {surface.800})", hoverColor: "light-dark({text.color}, {surface.900})", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}" };
var css29 = "\n.p-toggleswitch-handle {\n    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n\n.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {\n    box-shadow: 0 0 1px 10px color-mix(in srgb, dt('text.color'), transparent 96%), 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n\n.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-handle {\n    box-shadow: 0 0 1px 10px color-mix(in srgb, dt('text.color'), transparent 88%), 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n\n.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {\n    box-shadow: 0 0 1px 10px color-mix(in srgb, dt('toggleswitch.handle.checked.background'), transparent 92%), 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n\n.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible).p-toggleswitch-checked .p-toggleswitch-handle {\n    box-shadow: 0 0 1px 10px color-mix(in srgb, dt('toggleswitch.handle.checked.background'), transparent 84%), 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n";
var a47 = { root: r85, handle: o85, css: css29 };

// node_modules/@primeuix/themes/dist/material/toolbar/index.mjs
var r86 = { color: "{content.color}", borderRadius: "{content.border.radius}", gap: "0.5rem", padding: "0.875rem", background: "light-dark({surface.100}, {surface.800})", borderColor: "light-dark({surface.100}, {surface.800})" };
var o86 = { root: r86, css: "" };

// node_modules/@primeuix/themes/dist/material/tooltip/index.mjs
var r87 = { maxWidth: "11rem", gutter: "0.25rem", shadow: "{overlay.popover.shadow}", padding: "0.5rem 0.625rem", borderRadius: "{overlay.popover.border.radius}", fontWeight: "{typography.font.weight}", fontSize: "0.625rem", background: "{surface.600}", color: "{surface.0}" };
var o87 = { root: r87, css: "" };

// node_modules/@primeuix/themes/dist/material/tree/index.mjs
var o88 = { background: "{content.background}", color: "{content.color}", padding: "0.875rem", gap: "2px", indent: "1.75rem", transitionDuration: "{transition.duration}" };
var e59 = { padding: "0.5rem 0.625rem", borderRadius: "{border.radius.xs}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.color}", hoverColor: "{text.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" };
var r88 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}" };
var t54 = { fontWeight: "{typography.font.weight}", selectedFontWeight: "{list.option.selected.font.weight}", fontSize: "{typography.font.size}" };
var n50 = { borderRadius: "50%", size: "1.75rem", hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedHoverColor: "{primary.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var c24 = { size: "1.75rem" };
var i33 = { margin: "0 0 0.625rem 0" };
var css30 = "\n.p-tree-node-content {\n    transition: none;\n}\n";
var d34 = { root: o88, node: e59, nodeIcon: r88, nodeLabel: t54, nodeToggleButton: n50, loadingIcon: c24, filter: i33, css: css30 };

// node_modules/@primeuix/themes/dist/material/treeselect/index.mjs
var o89 = { fontSize: "{form.field.font.size}", fontWeight: "{form.field.font.weight}", background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var e60 = { width: "2.25rem", color: "{form.field.icon.color}" };
var r89 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var d35 = { padding: "{list.padding}" };
var l19 = { padding: "{list.option.padding}" };
var t55 = { borderRadius: "{border.radius.sm}" };
var i34 = { color: "{form.field.icon.color}" };
var css31 = "\n.p-treeselect.p-variant-filled {\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    border: 1px solid transparent;\n    background: dt('treeselect.filled.background') no-repeat;\n    background-image: linear-gradient(to bottom, dt('treeselect.focus.border.color'), dt('treeselect.focus.border.color')), linear-gradient(to bottom, dt('treeselect.border.color'), dt('treeselect.border.color'));\n    background-size: 0 2px, 100% 1px;\n    background-position: 50% 100%, 50% 100%;\n    background-origin: border-box;\n    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);\n}\n\n.p-treeselect.p-variant-filled:not(.p-disabled):hover {\n    background: dt('treeselect.filled.hover.background') no-repeat;\n    background-image: linear-gradient(to bottom, dt('treeselect.focus.border.color'), dt('treeselect.focus.border.color')), linear-gradient(to bottom, dt('treeselect.hover.border.color'), dt('treeselect.hover.border.color'));\n    background-size: 0 2px, 100% 1px;\n    background-position: 50% 100%, 50% 100%;\n    background-origin: border-box;\n    border-color: transparent;\n}\n\n.p-treeselect.p-variant-filled:not(.p-disabled).p-focus {\n    outline: 0 none;\n    background: dt('treeselect.filled.focus.background') no-repeat;\n    background-image: linear-gradient(to bottom, dt('treeselect.focus.border.color'), dt('treeselect.focus.border.color')), linear-gradient(to bottom, dt('treeselect.border.color'), dt('treeselect.border.color'));\n    background-size: 100% 2px, 100% 1px;\n    background-position: 50% 100%, 50% 100%;\n    background-origin: border-box;\n    border-color: transparent;\n}\n\n.p-treeselect.p-variant-filled:not(.p-disabled).p-focus:hover {\n    background-image: linear-gradient(to bottom, dt('treeselect.focus.border.color'), dt('treeselect.focus.border.color')), linear-gradient(to bottom, dt('treeselect.hover.border.color'), dt('treeselect.hover.border.color'));\n}\n\n.p-treeselect.p-variant-filled.p-invalid {\n    background-image: linear-gradient(to bottom, dt('treeselect.invalid.border.color'), dt('treeselect.invalid.border.color')), linear-gradient(to bottom, dt('treeselect.invalid.border.color'), dt('treeselect.invalid.border.color'));\n}\n\n.p-treeselect.p-variant-filled.p-invalid:not(.p-disabled).p-focus  {\n    background-image: linear-gradient(to bottom, dt('treeselect.invalid.border.color'), dt('treeselect.invalid.border.color')), linear-gradient(to bottom, dt('treeselect.invalid.border.color'), dt('treeselect.invalid.border.color'));\n}\n";
var n51 = { root: o89, dropdown: e60, overlay: r89, tree: d35, emptyMessage: l19, chip: t55, clearIcon: i34, css: css31 };

// node_modules/@primeuix/themes/dist/material/treetable/index.mjs
var o90 = { transitionDuration: "{transition.duration}", borderColor: "light-dark({content.border.color}, {surface.800})" };
var r90 = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.625rem 0.875rem" };
var e61 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{treetable.border.color}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.625rem 0.875rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } };
var t56 = { fontWeight: "600", fontSize: "{typography.font.size}" };
var n52 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } };
var c25 = { borderColor: "{treetable.border.color}", padding: "0.625rem 0.875rem", gap: "0.5rem", fontWeight: "{typography.font.size}", fontSize: "{typography.font.size}", selectedBorderColor: "light-dark({primary.100}, {primary.900})" };
var d36 = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", padding: "0.625rem 0.875rem" };
var l20 = { fontWeight: "600", fontSize: "{typography.font.size}" };
var i35 = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.625rem 0.875rem" };
var a48 = { width: "0.5rem" };
var g12 = { width: "1px", color: "{primary.color}" };
var s16 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.75rem" };
var h6 = { size: "1.75rem" };
var u8 = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var b4 = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" };
var f5 = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" };
var css32 = "\n.p-treetable-header-cell,\n.p-treetable-tbody > tr {\n    transition: none;\n}\n";
var p6 = { root: o90, header: r90, headerCell: e61, columnTitle: t56, row: n52, bodyCell: c25, footerCell: d36, columnFooter: l20, footer: i35, columnResizer: a48, resizeIndicator: g12, sortIcon: s16, loadingIcon: h6, nodeToggleButton: u8, paginatorTop: b4, paginatorBottom: f5, css: css32 };

// node_modules/@primeuix/themes/dist/material/virtualscroller/index.mjs
var o91 = { mask: { background: "{content.background}", color: "{text.muted.color}" }, icon: { size: "1.75rem" } };
var e62 = { loader: o91, css: "" };

// node_modules/@primeuix/themes/dist/material/index.mjs
var e63 = Object.defineProperty;
var m4 = Object.defineProperties;
var r91 = Object.getOwnPropertyDescriptors;
var i36 = Object.getOwnPropertySymbols;
var t57 = Object.prototype.hasOwnProperty;
var a49 = Object.prototype.propertyIsEnumerable;
var o92 = (m5, r92, i37) => r92 in m5 ? e63(m5, r92, { enumerable: true, configurable: true, writable: true, value: i37 }) : m5[r92] = i37;
var Ze;
var $e = (Ze = ((e64, m5) => {
  for (var r92 in m5 || (m5 = {})) t57.call(m5, r92) && o92(e64, r92, m5[r92]);
  if (i36) for (var r92 of i36(m5)) a49.call(m5, r92) && o92(e64, r92, m5[r92]);
  return e64;
})({}, e5), m4(Ze, r91({ components: { accordion: e, autocomplete: a, avatar: n3, badge: l2, blockui: o5, breadcrumb: n5, button: e6, datepicker: v2, card: n7, carousel: t8, cascadeselect: i5, checkbox: r11, chip: s3, colorpicker: a8, commandmenu: c4, compare: n10, confirmdialog: r16, confirmpopup: d5, contextmenu: c5, dataview: c7, datatable: k, dialog: e19, divider: t15, dock: s7, drawer: e21, editor: l8, fieldset: e23, fileupload: c9, iftalabel: i14, floatlabel: l9, galleria: l10, gallery: s9, iconfield: c11, image: e28, imagecompare: r33, inlinemessage: g6, inplace: n21, inputchips: d15, inputcolor: a20, inputgroup: r38, inputnumber: t23, inputotp: e31, inputtags: d17, inputtext: r42, knob: i18, label: o45, listbox: n23, megamenu: d19, menu: r46, menubar: r47, message: k3, metergroup: n28, multiselect: a26, navigationmenu: o53, orderlist: o54, organizationchart: n30, overlaybadge: t35, popover: e43, paginator: n31, password: n34, panel: a29, panelmenu: a30, picklist: o61, progressbar: t40, progressspinner: e45, radiobutton: d24, rating: r62, ripple: r63, scrollarea: e46, scrollpanel: s12, select: a35, selectbutton: o69, sidebar: p4, skeleton: a37, slider: a38, speeddial: a39, splitter: t45, splitbutton: d28, stepper: d29, steps: n42, tabmenu: n43, tabs: c20, tabview: a42, textarea: r80, tieredmenu: r81, tag: u6, terminal: e54, timeline: a45, togglebutton: d33, toggleswitch: a47, tree: d34, treeselect: n51, treetable: p6, toast: h5, toolbar: o86, tooltip: o87, virtualscroller: e62 } })));

export {
  t,
  $e
};
//# sourceMappingURL=chunk-XMWDIV4O.js.map
