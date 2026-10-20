import {
  __commonJS
} from "./chunk-YCXP4XZS.js";

// node_modules/diff2html/lib/types.js
var require_types = __commonJS({
  "node_modules/diff2html/lib/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ColorSchemeType = exports.DiffStyleType = exports.LineMatchingType = exports.OutputFormatType = exports.LineType = void 0;
    var LineType;
    (function(LineType2) {
      LineType2["INSERT"] = "insert";
      LineType2["DELETE"] = "delete";
      LineType2["CONTEXT"] = "context";
    })(LineType || (exports.LineType = LineType = {}));
    exports.OutputFormatType = {
      LINE_BY_LINE: "line-by-line",
      SIDE_BY_SIDE: "side-by-side"
    };
    exports.LineMatchingType = {
      LINES: "lines",
      WORDS: "words",
      NONE: "none"
    };
    exports.DiffStyleType = {
      WORD: "word",
      CHAR: "char"
    };
    var ColorSchemeType;
    (function(ColorSchemeType2) {
      ColorSchemeType2["AUTO"] = "auto";
      ColorSchemeType2["DARK"] = "dark";
      ColorSchemeType2["LIGHT"] = "light";
    })(ColorSchemeType || (exports.ColorSchemeType = ColorSchemeType = {}));
  }
});

export {
  require_types
};
//# sourceMappingURL=chunk-YIFK26D6.js.map
