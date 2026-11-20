import {
  diffChars,
  diffWordsWithSpace
} from "./chunk-3FBTYZLE.js";
import {
  require_core,
  require_hogan
} from "./chunk-EXQLLIKK.js";
import {
  __toESM
} from "./chunk-YCXP4XZS.js";

// node_modules/highlight.js/es/core.js
var import_core = __toESM(require_core(), 1);
var core_default = import_core.default;

// node_modules/highlight.js/es/languages/cpp.js
function cpp(hljs2) {
  const regex2 = hljs2.regex;
  const C_LINE_COMMENT_MODE = hljs2.COMMENT("//", "$", { contains: [{ begin: /\\\n/ }] });
  const DECLTYPE_AUTO_RE = "decltype\\(auto\\)";
  const NAMESPACE_RE = "[a-zA-Z_]\\w*::";
  const TEMPLATE_ARGUMENT_RE = "<[^<>]+>";
  const FUNCTION_TYPE_RE = "(?!struct)(" + DECLTYPE_AUTO_RE + "|" + regex2.optional(NAMESPACE_RE) + "[a-zA-Z_]\\w*" + regex2.optional(TEMPLATE_ARGUMENT_RE) + ")";
  const CPP_PRIMITIVE_TYPES = {
    className: "type",
    begin: "\\b[a-z\\d_]*_t\\b"
  };
  const CHARACTER_ESCAPES = "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)";
  const STRINGS = {
    className: "string",
    variants: [
      {
        begin: '(u8?|U|L)?"',
        end: '"',
        illegal: "\\n",
        contains: [hljs2.BACKSLASH_ESCAPE]
      },
      {
        begin: "(u8?|U|L)?'(" + CHARACTER_ESCAPES + "|.)",
        end: "'",
        illegal: "."
      },
      hljs2.END_SAME_AS_BEGIN({
        begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
        end: /\)([^()\\ ]{0,16})"/
      })
    ]
  };
  const NUMBERS = {
    className: "number",
    variants: [
      // Floating-point literal.
      {
        begin: "[+-]?(?:(?:[0-9](?:'?[0-9])*\\.(?:[0-9](?:'?[0-9])*)?|\\.[0-9](?:'?[0-9])*)(?:[Ee][+-]?[0-9](?:'?[0-9])*)?|[0-9](?:'?[0-9])*[Ee][+-]?[0-9](?:'?[0-9])*|0[Xx](?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*(?:\\.(?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)?)?|\\.[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)[Pp][+-]?[0-9](?:'?[0-9])*)(?:[Ff](?:16|32|64|128)?|(BF|bf)16|[Ll]|)"
      },
      // Integer literal.
      {
        begin: "[+-]?\\b(?:0[Bb][01](?:'?[01])*|0[Xx][0-9A-Fa-f](?:'?[0-9A-Fa-f])*|0(?:'?[0-7])*|[1-9](?:'?[0-9])*)(?:[Uu](?:LL?|ll?)|[Uu][Zz]?|(?:LL?|ll?)[Uu]?|[Zz][Uu]|)"
        // Note: there are user-defined literal suffixes too, but perhaps having the custom suffix not part of the
        // literal highlight actually makes it stand out more.
      }
    ],
    relevance: 0
  };
  const PREPROCESSOR = {
    className: "meta",
    begin: /#\s*[a-z]+\b/,
    end: /$/,
    keywords: { keyword: "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include" },
    contains: [
      {
        begin: /\\\n/,
        relevance: 0
      },
      hljs2.inherit(STRINGS, { className: "string" }),
      {
        className: "string",
        begin: /<.*?>/
      },
      C_LINE_COMMENT_MODE,
      hljs2.C_BLOCK_COMMENT_MODE
    ]
  };
  const TITLE_MODE = {
    className: "title",
    begin: regex2.optional(NAMESPACE_RE) + hljs2.IDENT_RE,
    relevance: 0
  };
  const FUNCTION_TITLE = regex2.optional(NAMESPACE_RE) + hljs2.IDENT_RE + "\\s*\\(";
  const RESERVED_KEYWORDS = [
    "alignas",
    "alignof",
    "and",
    "and_eq",
    "asm",
    "atomic_cancel",
    "atomic_commit",
    "atomic_noexcept",
    "auto",
    "bitand",
    "bitor",
    "break",
    "case",
    "catch",
    "class",
    "co_await",
    "co_return",
    "co_yield",
    "compl",
    "concept",
    "const_cast|10",
    "consteval",
    "constexpr",
    "constinit",
    "continue",
    "decltype",
    "default",
    "delete",
    "do",
    "dynamic_cast|10",
    "else",
    "enum",
    "explicit",
    "export",
    "extern",
    "false",
    "final",
    "for",
    "friend",
    "goto",
    "if",
    "import",
    "inline",
    "module",
    "mutable",
    "namespace",
    "new",
    "noexcept",
    "not",
    "not_eq",
    "nullptr",
    "operator",
    "or",
    "or_eq",
    "override",
    "private",
    "protected",
    "public",
    "reflexpr",
    "register",
    "reinterpret_cast|10",
    "requires",
    "return",
    "sizeof",
    "static_assert",
    "static_cast|10",
    "struct",
    "switch",
    "synchronized",
    "template",
    "this",
    "thread_local",
    "throw",
    "transaction_safe",
    "transaction_safe_dynamic",
    "true",
    "try",
    "typedef",
    "typeid",
    "typename",
    "union",
    "using",
    "virtual",
    "volatile",
    "while",
    "xor",
    "xor_eq"
  ];
  const RESERVED_TYPES = [
    "bool",
    "char",
    "char16_t",
    "char32_t",
    "char8_t",
    "double",
    "float",
    "int",
    "long",
    "short",
    "void",
    "wchar_t",
    "unsigned",
    "signed",
    "const",
    "static"
  ];
  const TYPE_HINTS = [
    "any",
    "auto_ptr",
    "barrier",
    "binary_semaphore",
    "bitset",
    "complex",
    "condition_variable",
    "condition_variable_any",
    "counting_semaphore",
    "deque",
    "false_type",
    "flat_map",
    "flat_set",
    "future",
    "imaginary",
    "initializer_list",
    "istringstream",
    "jthread",
    "latch",
    "lock_guard",
    "multimap",
    "multiset",
    "mutex",
    "optional",
    "ostringstream",
    "packaged_task",
    "pair",
    "promise",
    "priority_queue",
    "queue",
    "recursive_mutex",
    "recursive_timed_mutex",
    "scoped_lock",
    "set",
    "shared_future",
    "shared_lock",
    "shared_mutex",
    "shared_timed_mutex",
    "shared_ptr",
    "stack",
    "string_view",
    "stringstream",
    "timed_mutex",
    "thread",
    "true_type",
    "tuple",
    "unique_lock",
    "unique_ptr",
    "unordered_map",
    "unordered_multimap",
    "unordered_multiset",
    "unordered_set",
    "variant",
    "vector",
    "weak_ptr",
    "wstring",
    "wstring_view"
  ];
  const FUNCTION_HINTS = [
    "abort",
    "abs",
    "acos",
    "apply",
    "as_const",
    "asin",
    "atan",
    "atan2",
    "calloc",
    "ceil",
    "cerr",
    "cin",
    "clog",
    "cos",
    "cosh",
    "cout",
    "declval",
    "endl",
    "exchange",
    "exit",
    "exp",
    "fabs",
    "floor",
    "fmod",
    "forward",
    "fprintf",
    "fputs",
    "free",
    "frexp",
    "fscanf",
    "future",
    "invoke",
    "isalnum",
    "isalpha",
    "iscntrl",
    "isdigit",
    "isgraph",
    "islower",
    "isprint",
    "ispunct",
    "isspace",
    "isupper",
    "isxdigit",
    "labs",
    "launder",
    "ldexp",
    "log",
    "log10",
    "make_pair",
    "make_shared",
    "make_shared_for_overwrite",
    "make_tuple",
    "make_unique",
    "malloc",
    "memchr",
    "memcmp",
    "memcpy",
    "memset",
    "modf",
    "move",
    "pow",
    "printf",
    "putchar",
    "puts",
    "realloc",
    "scanf",
    "sin",
    "sinh",
    "snprintf",
    "sprintf",
    "sqrt",
    "sscanf",
    "std",
    "stderr",
    "stdin",
    "stdout",
    "strcat",
    "strchr",
    "strcmp",
    "strcpy",
    "strcspn",
    "strlen",
    "strncat",
    "strncmp",
    "strncpy",
    "strpbrk",
    "strrchr",
    "strspn",
    "strstr",
    "swap",
    "tan",
    "tanh",
    "terminate",
    "to_underlying",
    "tolower",
    "toupper",
    "vfprintf",
    "visit",
    "vprintf",
    "vsprintf"
  ];
  const LITERALS3 = [
    "NULL",
    "false",
    "nullopt",
    "nullptr",
    "true"
  ];
  const BUILT_IN = ["_Pragma"];
  const CPP_KEYWORDS = {
    type: RESERVED_TYPES,
    keyword: RESERVED_KEYWORDS,
    literal: LITERALS3,
    built_in: BUILT_IN,
    _type_hints: TYPE_HINTS
  };
  const FUNCTION_DISPATCH = {
    className: "function.dispatch",
    relevance: 0,
    keywords: {
      // Only for relevance, not highlighting.
      _hint: FUNCTION_HINTS
    },
    begin: regex2.concat(
      /\b/,
      /(?!decltype)/,
      /(?!if)/,
      /(?!for)/,
      /(?!switch)/,
      /(?!while)/,
      hljs2.IDENT_RE,
      regex2.lookahead(/(<[^<>]+>|)\s*\(/)
    )
  };
  const EXPRESSION_CONTAINS = [
    FUNCTION_DISPATCH,
    PREPROCESSOR,
    CPP_PRIMITIVE_TYPES,
    C_LINE_COMMENT_MODE,
    hljs2.C_BLOCK_COMMENT_MODE,
    NUMBERS,
    STRINGS
  ];
  const EXPRESSION_CONTEXT = {
    // This mode covers expression context where we can't expect a function
    // definition and shouldn't highlight anything that looks like one:
    // `return some()`, `else if()`, `(x*sum(1, 2))`
    variants: [
      {
        begin: /=/,
        end: /;/
      },
      {
        begin: /\(/,
        end: /\)/
      },
      {
        beginKeywords: "new throw return else",
        end: /;/
      }
    ],
    keywords: CPP_KEYWORDS,
    contains: EXPRESSION_CONTAINS.concat([
      {
        begin: /\(/,
        end: /\)/,
        keywords: CPP_KEYWORDS,
        contains: EXPRESSION_CONTAINS.concat(["self"]),
        relevance: 0
      }
    ]),
    relevance: 0
  };
  const FUNCTION_DECLARATION = {
    className: "function",
    begin: "(" + FUNCTION_TYPE_RE + "[\\*&\\s]+)+" + FUNCTION_TITLE,
    returnBegin: true,
    end: /[{;=]/,
    excludeEnd: true,
    keywords: CPP_KEYWORDS,
    illegal: /[^\w\s\*&:<>.]/,
    contains: [
      {
        // to prevent it from being confused as the function title
        begin: DECLTYPE_AUTO_RE,
        keywords: CPP_KEYWORDS,
        relevance: 0
      },
      {
        begin: FUNCTION_TITLE,
        returnBegin: true,
        contains: [TITLE_MODE],
        relevance: 0
      },
      // needed because we do not have look-behind on the below rule
      // to prevent it from grabbing the final : in a :: pair
      {
        begin: /::/,
        relevance: 0
      },
      // initializers
      {
        begin: /:/,
        endsWithParent: true,
        contains: [
          STRINGS,
          NUMBERS
        ]
      },
      // allow for multiple declarations, e.g.:
      // extern void f(int), g(char);
      {
        relevance: 0,
        match: /,/
      },
      {
        className: "params",
        begin: /\(/,
        end: /\)/,
        keywords: CPP_KEYWORDS,
        relevance: 0,
        contains: [
          C_LINE_COMMENT_MODE,
          hljs2.C_BLOCK_COMMENT_MODE,
          STRINGS,
          NUMBERS,
          CPP_PRIMITIVE_TYPES,
          // Count matching parentheses.
          {
            begin: /\(/,
            end: /\)/,
            keywords: CPP_KEYWORDS,
            relevance: 0,
            contains: [
              "self",
              C_LINE_COMMENT_MODE,
              hljs2.C_BLOCK_COMMENT_MODE,
              STRINGS,
              NUMBERS,
              CPP_PRIMITIVE_TYPES
            ]
          }
        ]
      },
      CPP_PRIMITIVE_TYPES,
      C_LINE_COMMENT_MODE,
      hljs2.C_BLOCK_COMMENT_MODE,
      PREPROCESSOR
    ]
  };
  return {
    name: "C++",
    aliases: [
      "cc",
      "c++",
      "h++",
      "hpp",
      "hh",
      "hxx",
      "cxx"
    ],
    keywords: CPP_KEYWORDS,
    illegal: "</",
    classNameAliases: { "function.dispatch": "built_in" },
    contains: [].concat(
      EXPRESSION_CONTEXT,
      FUNCTION_DECLARATION,
      FUNCTION_DISPATCH,
      EXPRESSION_CONTAINS,
      [
        PREPROCESSOR,
        {
          // containers: ie, `vector <int> rooms (9);`
          begin: "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function|flat_map|flat_set)\\s*<(?!<)",
          end: ">",
          keywords: CPP_KEYWORDS,
          contains: [
            "self",
            CPP_PRIMITIVE_TYPES
          ]
        },
        {
          begin: hljs2.IDENT_RE + "::",
          keywords: CPP_KEYWORDS
        },
        {
          match: [
            // extra complexity to deal with `enum class` and `enum struct`
            /\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,
            /\s+/,
            /\w+/
          ],
          className: {
            1: "keyword",
            3: "title.class"
          }
        }
      ]
    )
  };
}

// node_modules/highlight.js/es/languages/xml.js
function xml(hljs2) {
  const regex2 = hljs2.regex;
  const TAG_NAME_RE = regex2.concat(/[\p{L}_]/u, regex2.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u);
  const XML_IDENT_RE = /[\p{L}0-9._:-]+/u;
  const XML_ENTITIES = {
    className: "symbol",
    begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
  };
  const XML_META_KEYWORDS = {
    begin: /\s/,
    contains: [
      {
        className: "keyword",
        begin: /#?[a-z_][a-z1-9_-]+/,
        illegal: /\n/
      }
    ]
  };
  const XML_META_PAR_KEYWORDS = hljs2.inherit(XML_META_KEYWORDS, {
    begin: /\(/,
    end: /\)/
  });
  const APOS_META_STRING_MODE = hljs2.inherit(hljs2.APOS_STRING_MODE, { className: "string" });
  const QUOTE_META_STRING_MODE = hljs2.inherit(hljs2.QUOTE_STRING_MODE, { className: "string" });
  const TAG_INTERNALS = {
    endsWithParent: true,
    illegal: /</,
    relevance: 0,
    contains: [
      {
        className: "attr",
        begin: XML_IDENT_RE,
        relevance: 0
      },
      {
        begin: /=\s*/,
        relevance: 0,
        contains: [
          {
            className: "string",
            endsParent: true,
            variants: [
              {
                begin: /"/,
                end: /"/,
                contains: [XML_ENTITIES]
              },
              {
                begin: /'/,
                end: /'/,
                contains: [XML_ENTITIES]
              },
              { begin: /[^\s"'=<>`]+/ }
            ]
          }
        ]
      }
    ]
  };
  return {
    name: "HTML, XML",
    aliases: [
      "html",
      "xhtml",
      "rss",
      "atom",
      "xjb",
      "xsd",
      "xsl",
      "plist",
      "wsf",
      "svg"
    ],
    case_insensitive: true,
    unicodeRegex: true,
    contains: [
      {
        className: "meta",
        begin: /<![a-z]/,
        end: />/,
        relevance: 10,
        contains: [
          XML_META_KEYWORDS,
          QUOTE_META_STRING_MODE,
          APOS_META_STRING_MODE,
          XML_META_PAR_KEYWORDS,
          {
            begin: /\[/,
            end: /\]/,
            contains: [
              {
                className: "meta",
                begin: /<![a-z]/,
                end: />/,
                contains: [
                  XML_META_KEYWORDS,
                  XML_META_PAR_KEYWORDS,
                  QUOTE_META_STRING_MODE,
                  APOS_META_STRING_MODE
                ]
              }
            ]
          }
        ]
      },
      hljs2.COMMENT(
        /<!--/,
        /-->/,
        { relevance: 10 }
      ),
      {
        begin: /<!\[CDATA\[/,
        end: /\]\]>/,
        relevance: 10
      },
      XML_ENTITIES,
      // xml processing instructions
      {
        className: "meta",
        end: /\?>/,
        variants: [
          {
            begin: /<\?xml/,
            relevance: 10,
            contains: [
              QUOTE_META_STRING_MODE
            ]
          },
          {
            begin: /<\?[a-z][a-z0-9]+/
          }
        ]
      },
      {
        className: "tag",
        /*
        The lookahead pattern (?=...) ensures that 'begin' only matches
        '<style' as a single word, followed by a whitespace or an
        ending bracket.
        */
        begin: /<style(?=\s|>)/,
        end: />/,
        keywords: { name: "style" },
        contains: [TAG_INTERNALS],
        starts: {
          end: /<\/style>/,
          returnEnd: true,
          subLanguage: [
            "css",
            "xml"
          ]
        }
      },
      {
        className: "tag",
        // See the comment in the <style tag about the lookahead pattern
        begin: /<script(?=\s|>)/,
        end: />/,
        keywords: { name: "script" },
        contains: [TAG_INTERNALS],
        starts: {
          end: /<\/script>/,
          returnEnd: true,
          subLanguage: [
            "javascript",
            "handlebars",
            "xml"
          ]
        }
      },
      // we need this for now for jSX
      {
        className: "tag",
        begin: /<>|<\/>/
      },
      // open tag
      {
        className: "tag",
        begin: regex2.concat(
          /</,
          regex2.lookahead(regex2.concat(
            TAG_NAME_RE,
            // <tag/>
            // <tag>
            // <tag ...
            regex2.either(/\/>/, />/, /\s/)
          ))
        ),
        end: /\/?>/,
        contains: [
          {
            className: "name",
            begin: TAG_NAME_RE,
            relevance: 0,
            starts: TAG_INTERNALS
          }
        ]
      },
      // close tag
      {
        className: "tag",
        begin: regex2.concat(
          /<\//,
          regex2.lookahead(regex2.concat(
            TAG_NAME_RE,
            />/
          ))
        ),
        contains: [
          {
            className: "name",
            begin: TAG_NAME_RE,
            relevance: 0
          },
          {
            begin: />/,
            relevance: 0,
            endsParent: true
          }
        ]
      }
    ]
  };
}

// node_modules/highlight.js/es/languages/awk.js
function awk(hljs2) {
  const VARIABLE = {
    className: "variable",
    variants: [
      { begin: /\$[\w\d#@][\w\d_]*/ },
      { begin: /\$\{(.*?)\}/ }
    ]
  };
  const KEYWORDS3 = "BEGIN END if else while do for in break continue delete next nextfile function func exit|10";
  const STRING = {
    className: "string",
    contains: [hljs2.BACKSLASH_ESCAPE],
    variants: [
      {
        begin: /(u|b)?r?'''/,
        end: /'''/,
        relevance: 10
      },
      {
        begin: /(u|b)?r?"""/,
        end: /"""/,
        relevance: 10
      },
      {
        begin: /(u|r|ur)'/,
        end: /'/,
        relevance: 10
      },
      {
        begin: /(u|r|ur)"/,
        end: /"/,
        relevance: 10
      },
      {
        begin: /(b|br)'/,
        end: /'/
      },
      {
        begin: /(b|br)"/,
        end: /"/
      },
      hljs2.APOS_STRING_MODE,
      hljs2.QUOTE_STRING_MODE
    ]
  };
  return {
    name: "Awk",
    keywords: { keyword: KEYWORDS3 },
    contains: [
      VARIABLE,
      STRING,
      hljs2.REGEXP_MODE,
      hljs2.HASH_COMMENT_MODE,
      hljs2.NUMBER_MODE
    ]
  };
}

// node_modules/highlight.js/es/languages/bash.js
function bash(hljs2) {
  const regex2 = hljs2.regex;
  const VAR = {};
  const BRACED_VAR = {
    begin: /\$\{/,
    end: /\}/,
    contains: [
      "self",
      {
        begin: /:-/,
        contains: [VAR]
      }
      // default values
    ]
  };
  Object.assign(VAR, {
    className: "variable",
    variants: [
      { begin: regex2.concat(
        /\$[\w\d#@][\w\d_]*/,
        // negative look-ahead tries to avoid matching patterns that are not
        // Perl at all like $ident$, @ident@, etc.
        `(?![\\w\\d])(?![$])`
      ) },
      BRACED_VAR
    ]
  });
  const SUBST = {
    className: "subst",
    begin: /\$\(/,
    end: /\)/,
    contains: [hljs2.BACKSLASH_ESCAPE]
  };
  const COMMENT = hljs2.inherit(
    hljs2.COMMENT(),
    {
      match: [
        /(^|\s)/,
        /#.*$/
      ],
      scope: {
        2: "comment"
      }
    }
  );
  const HERE_DOC = {
    begin: /<<-?\s*(?=\w+)/,
    starts: { contains: [
      hljs2.END_SAME_AS_BEGIN({
        begin: /(\w+)/,
        end: /(\w+)/,
        className: "string"
      })
    ] }
  };
  const QUOTE_STRING = {
    className: "string",
    begin: /"/,
    end: /"/,
    contains: [
      hljs2.BACKSLASH_ESCAPE,
      VAR,
      SUBST
    ]
  };
  SUBST.contains.push(QUOTE_STRING);
  const ESCAPED_QUOTE = {
    match: /\\"/
  };
  const APOS_STRING = {
    className: "string",
    begin: /'/,
    end: /'/
  };
  const ESCAPED_APOS = {
    match: /\\'/
  };
  const ARITHMETIC = {
    begin: /\$?\(\(/,
    end: /\)\)/,
    contains: [
      {
        begin: /\d+#[0-9a-f]+/,
        className: "number"
      },
      hljs2.NUMBER_MODE,
      VAR
    ]
  };
  const SH_LIKE_SHELLS = [
    "fish",
    "bash",
    "zsh",
    "sh",
    "csh",
    "ksh",
    "tcsh",
    "dash",
    "scsh"
  ];
  const KNOWN_SHEBANG = hljs2.SHEBANG({
    binary: `(${SH_LIKE_SHELLS.join("|")})`,
    relevance: 10
  });
  const FUNCTION = {
    className: "function",
    begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
    returnBegin: true,
    contains: [hljs2.inherit(hljs2.TITLE_MODE, { begin: /\w[\w\d_]*/ })],
    relevance: 0
  };
  const KEYWORDS3 = [
    "if",
    "then",
    "else",
    "elif",
    "fi",
    "time",
    "for",
    "while",
    "until",
    "in",
    "do",
    "done",
    "case",
    "esac",
    "coproc",
    "function",
    "select"
  ];
  const LITERALS3 = [
    "true",
    "false"
  ];
  const PATH_MODE = { match: /(\/[a-z._-]+)+/ };
  const SHELL_BUILT_INS = [
    "break",
    "cd",
    "continue",
    "eval",
    "exec",
    "exit",
    "export",
    "getopts",
    "hash",
    "pwd",
    "readonly",
    "return",
    "shift",
    "test",
    "times",
    "trap",
    "umask",
    "unset"
  ];
  const BASH_BUILT_INS = [
    "alias",
    "bind",
    "builtin",
    "caller",
    "command",
    "declare",
    "echo",
    "enable",
    "help",
    "let",
    "local",
    "logout",
    "mapfile",
    "printf",
    "read",
    "readarray",
    "source",
    "sudo",
    "type",
    "typeset",
    "ulimit",
    "unalias"
  ];
  const ZSH_BUILT_INS = [
    "autoload",
    "bg",
    "bindkey",
    "bye",
    "cap",
    "chdir",
    "clone",
    "comparguments",
    "compcall",
    "compctl",
    "compdescribe",
    "compfiles",
    "compgroups",
    "compquote",
    "comptags",
    "comptry",
    "compvalues",
    "dirs",
    "disable",
    "disown",
    "echotc",
    "echoti",
    "emulate",
    "fc",
    "fg",
    "float",
    "functions",
    "getcap",
    "getln",
    "history",
    "integer",
    "jobs",
    "kill",
    "limit",
    "log",
    "noglob",
    "popd",
    "print",
    "pushd",
    "pushln",
    "rehash",
    "sched",
    "setcap",
    "setopt",
    "stat",
    "suspend",
    "ttyctl",
    "unfunction",
    "unhash",
    "unlimit",
    "unsetopt",
    "vared",
    "wait",
    "whence",
    "where",
    "which",
    "zcompile",
    "zformat",
    "zftp",
    "zle",
    "zmodload",
    "zparseopts",
    "zprof",
    "zpty",
    "zregexparse",
    "zsocket",
    "zstyle",
    "ztcp"
  ];
  const GNU_CORE_UTILS = [
    "chcon",
    "chgrp",
    "chown",
    "chmod",
    "cp",
    "dd",
    "df",
    "dir",
    "dircolors",
    "ln",
    "ls",
    "mkdir",
    "mkfifo",
    "mknod",
    "mktemp",
    "mv",
    "realpath",
    "rm",
    "rmdir",
    "shred",
    "sync",
    "touch",
    "truncate",
    "vdir",
    "b2sum",
    "base32",
    "base64",
    "cat",
    "cksum",
    "comm",
    "csplit",
    "cut",
    "expand",
    "fmt",
    "fold",
    "head",
    "join",
    "md5sum",
    "nl",
    "numfmt",
    "od",
    "paste",
    "ptx",
    "pr",
    "sha1sum",
    "sha224sum",
    "sha256sum",
    "sha384sum",
    "sha512sum",
    "shuf",
    "sort",
    "split",
    "sum",
    "tac",
    "tail",
    "tr",
    "tsort",
    "unexpand",
    "uniq",
    "wc",
    "arch",
    "basename",
    "chroot",
    "date",
    "dirname",
    "du",
    "echo",
    "env",
    "expr",
    "factor",
    // "false", // keyword literal already
    "groups",
    "hostid",
    "id",
    "link",
    "logname",
    "nice",
    "nohup",
    "nproc",
    "pathchk",
    "pinky",
    "printenv",
    "printf",
    "pwd",
    "readlink",
    "runcon",
    "seq",
    "sleep",
    "stat",
    "stdbuf",
    "stty",
    "tee",
    "test",
    "timeout",
    // "true", // keyword literal already
    "tty",
    "uname",
    "unlink",
    "uptime",
    "users",
    "who",
    "whoami",
    "yes"
  ];
  return {
    name: "Bash",
    aliases: [
      "sh",
      "zsh"
    ],
    keywords: {
      $pattern: /\b[a-z][a-z0-9._-]+\b/,
      keyword: KEYWORDS3,
      literal: LITERALS3,
      built_in: [
        ...SHELL_BUILT_INS,
        ...BASH_BUILT_INS,
        // Shell modifiers
        "set",
        "shopt",
        ...ZSH_BUILT_INS,
        ...GNU_CORE_UTILS
      ]
    },
    contains: [
      KNOWN_SHEBANG,
      // to catch known shells and boost relevancy
      hljs2.SHEBANG(),
      // to catch unknown shells but still highlight the shebang
      FUNCTION,
      ARITHMETIC,
      COMMENT,
      HERE_DOC,
      PATH_MODE,
      QUOTE_STRING,
      ESCAPED_QUOTE,
      APOS_STRING,
      ESCAPED_APOS,
      VAR
    ]
  };
}

// node_modules/highlight.js/es/languages/c.js
function c(hljs2) {
  const regex2 = hljs2.regex;
  const C_LINE_COMMENT_MODE = hljs2.COMMENT("//", "$", { contains: [{ begin: /\\\n/ }] });
  const DECLTYPE_AUTO_RE = "decltype\\(auto\\)";
  const NAMESPACE_RE = "[a-zA-Z_]\\w*::";
  const TEMPLATE_ARGUMENT_RE = "<[^<>]+>";
  const FUNCTION_TYPE_RE = "(" + DECLTYPE_AUTO_RE + "|" + regex2.optional(NAMESPACE_RE) + "[a-zA-Z_]\\w*" + regex2.optional(TEMPLATE_ARGUMENT_RE) + ")";
  const TYPES3 = {
    className: "type",
    variants: [
      { begin: "\\b[a-z\\d_]*_t\\b" },
      { match: /\batomic_[a-z]{3,6}\b/ }
    ]
  };
  const CHARACTER_ESCAPES = "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)";
  const STRINGS = {
    className: "string",
    variants: [
      {
        begin: '(u8?|U|L)?"',
        end: '"',
        illegal: "\\n",
        contains: [hljs2.BACKSLASH_ESCAPE]
      },
      {
        begin: "(u8?|U|L)?'(" + CHARACTER_ESCAPES + "|.)",
        end: "'",
        illegal: "."
      },
      hljs2.END_SAME_AS_BEGIN({
        begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
        end: /\)([^()\\ ]{0,16})"/
      })
    ]
  };
  const NUMBERS = {
    className: "number",
    variants: [
      { match: /\b(0b[01']+)/ },
      { match: /(-?)\b([\d']+(\.[\d']*)?|\.[\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)/ },
      { match: /(-?)\b(0[xX][a-fA-F0-9]+(?:'[a-fA-F0-9]+)*(?:\.[a-fA-F0-9]*(?:'[a-fA-F0-9]*)*)?(?:[pP][-+]?[0-9]+)?(l|L)?(u|U)?)/ },
      { match: /(-?)\b\d+(?:'\d+)*(?:\.\d*(?:'\d*)*)?(?:[eE][-+]?\d+)?/ }
    ],
    relevance: 0
  };
  const PREPROCESSOR = {
    className: "meta",
    begin: /#\s*[a-z]+\b/,
    end: /$/,
    keywords: { keyword: "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef elifdef elifndef include" },
    contains: [
      {
        begin: /\\\n/,
        relevance: 0
      },
      hljs2.inherit(STRINGS, { className: "string" }),
      {
        className: "string",
        begin: /<.*?>/
      },
      C_LINE_COMMENT_MODE,
      hljs2.C_BLOCK_COMMENT_MODE
    ]
  };
  const TITLE_MODE = {
    className: "title",
    begin: regex2.optional(NAMESPACE_RE) + hljs2.IDENT_RE,
    relevance: 0
  };
  const FUNCTION_TITLE = regex2.optional(NAMESPACE_RE) + hljs2.IDENT_RE + "\\s*\\(";
  const C_KEYWORDS = [
    "asm",
    "auto",
    "break",
    "case",
    "continue",
    "default",
    "do",
    "else",
    "enum",
    "extern",
    "for",
    "fortran",
    "goto",
    "if",
    "inline",
    "register",
    "restrict",
    "return",
    "sizeof",
    "typeof",
    "typeof_unqual",
    "struct",
    "switch",
    "typedef",
    "union",
    "volatile",
    "while",
    "_Alignas",
    "_Alignof",
    "_Atomic",
    "_Generic",
    "_Noreturn",
    "_Static_assert",
    "_Thread_local",
    // aliases
    "alignas",
    "alignof",
    "noreturn",
    "static_assert",
    "thread_local",
    // not a C keyword but is, for all intents and purposes, treated exactly like one.
    "_Pragma"
  ];
  const C_TYPES = [
    "float",
    "double",
    "signed",
    "unsigned",
    "int",
    "short",
    "long",
    "char",
    "void",
    "_Bool",
    "_BitInt",
    "_Complex",
    "_Imaginary",
    "_Decimal32",
    "_Decimal64",
    "_Decimal96",
    "_Decimal128",
    "_Decimal64x",
    "_Decimal128x",
    "_Float16",
    "_Float32",
    "_Float64",
    "_Float128",
    "_Float32x",
    "_Float64x",
    "_Float128x",
    // modifiers
    "const",
    "static",
    "constexpr",
    // aliases
    "complex",
    "bool",
    "imaginary"
  ];
  const KEYWORDS3 = {
    keyword: C_KEYWORDS,
    type: C_TYPES,
    literal: "true false NULL",
    // TODO: apply hinting work similar to what was done in cpp.js
    built_in: "std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr"
  };
  const EXPRESSION_CONTAINS = [
    PREPROCESSOR,
    TYPES3,
    C_LINE_COMMENT_MODE,
    hljs2.C_BLOCK_COMMENT_MODE,
    NUMBERS,
    STRINGS
  ];
  const EXPRESSION_CONTEXT = {
    // This mode covers expression context where we can't expect a function
    // definition and shouldn't highlight anything that looks like one:
    // `return some()`, `else if()`, `(x*sum(1, 2))`
    variants: [
      {
        begin: /=/,
        end: /;/
      },
      {
        begin: /\(/,
        end: /\)/
      },
      {
        beginKeywords: "new throw return else",
        end: /;/
      }
    ],
    keywords: KEYWORDS3,
    contains: EXPRESSION_CONTAINS.concat([
      {
        begin: /\(/,
        end: /\)/,
        keywords: KEYWORDS3,
        contains: EXPRESSION_CONTAINS.concat(["self"]),
        relevance: 0
      }
    ]),
    relevance: 0
  };
  const FUNCTION_DECLARATION = {
    begin: "(" + FUNCTION_TYPE_RE + "[\\*&\\s]+)+" + FUNCTION_TITLE,
    returnBegin: true,
    end: /[{;=]/,
    excludeEnd: true,
    keywords: KEYWORDS3,
    illegal: /[^\w\s\*&:<>.]/,
    contains: [
      {
        // to prevent it from being confused as the function title
        begin: DECLTYPE_AUTO_RE,
        keywords: KEYWORDS3,
        relevance: 0
      },
      {
        begin: FUNCTION_TITLE,
        returnBegin: true,
        contains: [hljs2.inherit(TITLE_MODE, { className: "title.function" })],
        relevance: 0
      },
      // allow for multiple declarations, e.g.:
      // extern void f(int), g(char);
      {
        relevance: 0,
        match: /,/
      },
      {
        className: "params",
        begin: /\(/,
        end: /\)/,
        keywords: KEYWORDS3,
        relevance: 0,
        contains: [
          C_LINE_COMMENT_MODE,
          hljs2.C_BLOCK_COMMENT_MODE,
          STRINGS,
          NUMBERS,
          TYPES3,
          // Count matching parentheses.
          {
            begin: /\(/,
            end: /\)/,
            keywords: KEYWORDS3,
            relevance: 0,
            contains: [
              "self",
              C_LINE_COMMENT_MODE,
              hljs2.C_BLOCK_COMMENT_MODE,
              STRINGS,
              NUMBERS,
              TYPES3
            ]
          }
        ]
      },
      TYPES3,
      C_LINE_COMMENT_MODE,
      hljs2.C_BLOCK_COMMENT_MODE,
      PREPROCESSOR
    ]
  };
  return {
    name: "C",
    aliases: ["h"],
    keywords: KEYWORDS3,
    // Until differentiations are added between `c` and `cpp`, `c` will
    // not be auto-detected to avoid auto-detect conflicts between C and C++
    disableAutodetect: true,
    illegal: "</",
    contains: [].concat(
      EXPRESSION_CONTEXT,
      FUNCTION_DECLARATION,
      EXPRESSION_CONTAINS,
      [
        PREPROCESSOR,
        {
          begin: hljs2.IDENT_RE + "::",
          keywords: KEYWORDS3
        },
        {
          className: "class",
          beginKeywords: "enum class struct union",
          end: /[{;:<>=]/,
          contains: [
            { beginKeywords: "final class struct" },
            hljs2.TITLE_MODE
          ]
        }
      ]
    ),
    exports: {
      preprocessor: PREPROCESSOR,
      strings: STRINGS,
      keywords: KEYWORDS3
    }
  };
}

// node_modules/highlight.js/es/languages/clojure.js
function clojure(hljs2) {
  const SYMBOLSTART = "a-zA-Z_\\-!.?+*=<>&'";
  const SYMBOL_RE = "[#]?[" + SYMBOLSTART + "][" + SYMBOLSTART + "0-9/;:$#]*";
  const globals = "def defonce defprotocol defstruct defmulti defmethod defn- defn defmacro deftype defrecord";
  const keywords2 = {
    $pattern: SYMBOL_RE,
    built_in: (
      // Clojure keywords
      globals + " cond apply if-not if-let if not not= =|0 <|0 >|0 <=|0 >=|0 ==|0 +|0 /|0 *|0 -|0 rem quot neg? pos? delay? symbol? keyword? true? false? integer? empty? coll? list? set? ifn? fn? associative? sequential? sorted? counted? reversible? number? decimal? class? distinct? isa? float? rational? reduced? ratio? odd? even? char? seq? vector? string? map? nil? contains? zero? instance? not-every? not-any? libspec? -> ->> .. . inc compare do dotimes mapcat take remove take-while drop letfn drop-last take-last drop-while while intern condp case reduced cycle split-at split-with repeat replicate iterate range merge zipmap declare line-seq sort comparator sort-by dorun doall nthnext nthrest partition eval doseq await await-for let agent atom send send-off release-pending-sends add-watch mapv filterv remove-watch agent-error restart-agent set-error-handler error-handler set-error-mode! error-mode shutdown-agents quote var fn loop recur throw try monitor-enter monitor-exit macroexpand macroexpand-1 for dosync and or when when-not when-let comp juxt partial sequence memoize constantly complement identity assert peek pop doto proxy first rest cons cast coll last butlast sigs reify second ffirst fnext nfirst nnext meta with-meta ns in-ns create-ns import refer keys select-keys vals key val rseq name namespace promise into transient persistent! conj! assoc! dissoc! pop! disj! use class type num float double short byte boolean bigint biginteger bigdec print-method print-dup throw-if printf format load compile get-in update-in pr pr-on newline flush read slurp read-line subvec with-open memfn time re-find re-groups rand-int rand mod locking assert-valid-fdecl alias resolve ref deref refset swap! reset! set-validator! compare-and-set! alter-meta! reset-meta! commute get-validator alter ref-set ref-history-count ref-min-history ref-max-history ensure sync io! new next conj set! to-array future future-call into-array aset gen-class reduce map filter find empty hash-map hash-set sorted-map sorted-map-by sorted-set sorted-set-by vec vector seq flatten reverse assoc dissoc list disj get union difference intersection extend extend-type extend-protocol int nth delay count concat chunk chunk-buffer chunk-append chunk-first chunk-rest max min dec unchecked-inc-int unchecked-inc unchecked-dec-inc unchecked-dec unchecked-negate unchecked-add-int unchecked-add unchecked-subtract-int unchecked-subtract chunk-next chunk-cons chunked-seq? prn vary-meta lazy-seq spread list* str find-keyword keyword symbol gensym force rationalize"
    )
  };
  const SYMBOL = {
    begin: SYMBOL_RE,
    relevance: 0
  };
  const NUMBER = {
    scope: "number",
    relevance: 0,
    variants: [
      { match: /[-+]?0[xX][0-9a-fA-F]+N?/ },
      // hexadecimal                 // 0x2a
      { match: /[-+]?0[0-7]+N?/ },
      // octal                       // 052
      { match: /[-+]?[1-9][0-9]?[rR][0-9a-zA-Z]+N?/ },
      // variable radix from 2 to 36 // 2r101010, 8r52, 36r16
      { match: /[-+]?[0-9]+\/[0-9]+N?/ },
      // ratio                       // 1/2
      { match: /[-+]?[0-9]+((\.[0-9]*([eE][+-]?[0-9]+)?M?)|([eE][+-]?[0-9]+M?|M))/ },
      // float        // 0.42 4.2E-1M 42E1 42M
      { match: /[-+]?([1-9][0-9]*|0)N?/ }
      // int (don't match leading 0) // 42 42N
    ]
  };
  const CHARACTER = {
    scope: "character",
    variants: [
      { match: /\\o[0-3]?[0-7]{1,2}/ },
      // Unicode Octal 0 - 377
      { match: /\\u[0-9a-fA-F]{4}/ },
      // Unicode Hex 0000 - FFFF
      { match: /\\(newline|space|tab|formfeed|backspace|return)/ },
      // special characters
      {
        match: /\\\S/,
        relevance: 0
      }
      // any non-whitespace char
    ]
  };
  const REGEX = {
    scope: "regex",
    begin: /#"/,
    end: /"/,
    contains: [hljs2.BACKSLASH_ESCAPE]
  };
  const STRING = hljs2.inherit(hljs2.QUOTE_STRING_MODE, { illegal: null });
  const COMMA = {
    scope: "punctuation",
    match: /,/,
    relevance: 0
  };
  const COMMENT = hljs2.COMMENT(
    ";",
    "$",
    { relevance: 0 }
  );
  const LITERAL = {
    className: "literal",
    begin: /\b(true|false|nil)\b/
  };
  const COLLECTION = {
    begin: "\\[|(#::?" + SYMBOL_RE + ")?\\{",
    end: "[\\]\\}]",
    relevance: 0
  };
  const KEY = {
    className: "symbol",
    begin: "[:]{1,2}" + SYMBOL_RE
  };
  const LIST = {
    begin: "\\(",
    end: "\\)"
  };
  const BODY = {
    endsWithParent: true,
    relevance: 0
  };
  const NAME = {
    keywords: keywords2,
    className: "name",
    begin: SYMBOL_RE,
    relevance: 0,
    starts: BODY
  };
  const DEFAULT_CONTAINS = [
    COMMA,
    LIST,
    CHARACTER,
    REGEX,
    STRING,
    COMMENT,
    KEY,
    COLLECTION,
    NUMBER,
    LITERAL,
    SYMBOL
  ];
  const GLOBAL = {
    beginKeywords: globals,
    keywords: {
      $pattern: SYMBOL_RE,
      keyword: globals
    },
    end: '(\\[|#|\\d|"|:|\\{|\\)|\\(|$)',
    contains: [
      {
        className: "title",
        begin: SYMBOL_RE,
        relevance: 0,
        excludeEnd: true,
        // we can only have a single title
        endsParent: true
      }
    ].concat(DEFAULT_CONTAINS)
  };
  LIST.contains = [
    GLOBAL,
    NAME,
    BODY
  ];
  BODY.contains = DEFAULT_CONTAINS;
  COLLECTION.contains = DEFAULT_CONTAINS;
  return {
    name: "Clojure",
    aliases: [
      "clj",
      "edn"
    ],
    illegal: /\S/,
    contains: [
      COMMA,
      LIST,
      CHARACTER,
      REGEX,
      STRING,
      COMMENT,
      KEY,
      COLLECTION,
      NUMBER,
      LITERAL
    ]
  };
}

// node_modules/highlight.js/es/languages/crystal.js
function crystal(hljs2) {
  const INT_SUFFIX = "(_?[ui](8|16|32|64|128))?";
  const FLOAT_SUFFIX = "(_?f(32|64))?";
  const CRYSTAL_IDENT_RE = "[a-zA-Z_]\\w*[!?=]?";
  const CRYSTAL_METHOD_RE = "[a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|[=!]~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~|]|//|//=|&[-+*]=?|&\\*\\*|\\[\\][=?]?";
  const CRYSTAL_PATH_RE = "[A-Za-z_]\\w*(::\\w+)*(\\?|!)?";
  const CRYSTAL_KEYWORDS = {
    $pattern: CRYSTAL_IDENT_RE,
    keyword: "abstract alias annotation as as? asm begin break case class def do else elsif end ensure enum extend for fun if include instance_sizeof is_a? lib macro module next nil? of out pointerof private protected rescue responds_to? return require select self sizeof struct super then type typeof union uninitialized unless until verbatim when while with yield __DIR__ __END_LINE__ __FILE__ __LINE__",
    literal: "false nil true"
  };
  const SUBST = {
    className: "subst",
    begin: /#\{/,
    end: /\}/,
    keywords: CRYSTAL_KEYWORDS
  };
  const VARIABLE = {
    // negative-look forward attemps to prevent false matches like:
    // @ident@ or $ident$ that might indicate this is not ruby at all
    className: "variable",
    begin: `(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])`
  };
  const EXPANSION = {
    className: "template-variable",
    variants: [
      {
        begin: "\\{\\{",
        end: "\\}\\}"
      },
      {
        begin: "\\{%",
        end: "%\\}"
      }
    ],
    keywords: CRYSTAL_KEYWORDS
  };
  function recursiveParen(begin, end) {
    const contains = [
      {
        begin,
        end
      }
    ];
    contains[0].contains = contains;
    return contains;
  }
  const STRING = {
    className: "string",
    contains: [
      hljs2.BACKSLASH_ESCAPE,
      SUBST
    ],
    variants: [
      {
        begin: /'/,
        end: /'/
      },
      {
        begin: /"/,
        end: /"/
      },
      {
        begin: /`/,
        end: /`/
      },
      {
        begin: "%[Qwi]?\\(",
        end: "\\)",
        contains: recursiveParen("\\(", "\\)")
      },
      {
        begin: "%[Qwi]?\\[",
        end: "\\]",
        contains: recursiveParen("\\[", "\\]")
      },
      {
        begin: "%[Qwi]?\\{",
        end: /\}/,
        contains: recursiveParen(/\{/, /\}/)
      },
      {
        begin: "%[Qwi]?<",
        end: ">",
        contains: recursiveParen("<", ">")
      },
      {
        begin: "%[Qwi]?\\|",
        end: "\\|"
      },
      {
        begin: /<<-\w+$/,
        end: /^\s*\w+$/
      }
    ],
    relevance: 0
  };
  const Q_STRING = {
    className: "string",
    variants: [
      {
        begin: "%q\\(",
        end: "\\)",
        contains: recursiveParen("\\(", "\\)")
      },
      {
        begin: "%q\\[",
        end: "\\]",
        contains: recursiveParen("\\[", "\\]")
      },
      {
        begin: "%q\\{",
        end: /\}/,
        contains: recursiveParen(/\{/, /\}/)
      },
      {
        begin: "%q<",
        end: ">",
        contains: recursiveParen("<", ">")
      },
      {
        begin: "%q\\|",
        end: "\\|"
      },
      {
        begin: /<<-'\w+'$/,
        end: /^\s*\w+$/
      }
    ],
    relevance: 0
  };
  const REGEXP = {
    begin: "(?!%\\})(" + hljs2.RE_STARTERS_RE + "|\\n|\\b(case|if|select|unless|until|when|while)\\b)\\s*",
    keywords: "case if select unless until when while",
    contains: [
      {
        className: "regexp",
        contains: [
          hljs2.BACKSLASH_ESCAPE,
          SUBST
        ],
        variants: [
          {
            begin: "//[a-z]*",
            relevance: 0
          },
          {
            begin: "/(?!\\/)",
            end: "/[a-z]*"
          }
        ]
      }
    ],
    relevance: 0
  };
  const REGEXP2 = {
    className: "regexp",
    contains: [
      hljs2.BACKSLASH_ESCAPE,
      SUBST
    ],
    variants: [
      {
        begin: "%r\\(",
        end: "\\)",
        contains: recursiveParen("\\(", "\\)")
      },
      {
        begin: "%r\\[",
        end: "\\]",
        contains: recursiveParen("\\[", "\\]")
      },
      {
        begin: "%r\\{",
        end: /\}/,
        contains: recursiveParen(/\{/, /\}/)
      },
      {
        begin: "%r<",
        end: ">",
        contains: recursiveParen("<", ">")
      },
      {
        begin: "%r\\|",
        end: "\\|"
      }
    ],
    relevance: 0
  };
  const ATTRIBUTE = {
    className: "meta",
    begin: "@\\[",
    end: "\\]",
    contains: [hljs2.inherit(hljs2.QUOTE_STRING_MODE, { className: "string" })]
  };
  const CRYSTAL_DEFAULT_CONTAINS = [
    EXPANSION,
    STRING,
    Q_STRING,
    REGEXP2,
    REGEXP,
    ATTRIBUTE,
    VARIABLE,
    hljs2.HASH_COMMENT_MODE,
    {
      className: "class",
      beginKeywords: "class module struct",
      end: "$|;",
      illegal: /=/,
      contains: [
        hljs2.HASH_COMMENT_MODE,
        hljs2.inherit(hljs2.TITLE_MODE, { begin: CRYSTAL_PATH_RE }),
        {
          // relevance booster for inheritance
          begin: "<"
        }
      ]
    },
    {
      className: "class",
      beginKeywords: "lib enum union",
      end: "$|;",
      illegal: /=/,
      contains: [
        hljs2.HASH_COMMENT_MODE,
        hljs2.inherit(hljs2.TITLE_MODE, { begin: CRYSTAL_PATH_RE })
      ]
    },
    {
      beginKeywords: "annotation",
      end: "$|;",
      illegal: /=/,
      contains: [
        hljs2.HASH_COMMENT_MODE,
        hljs2.inherit(hljs2.TITLE_MODE, { begin: CRYSTAL_PATH_RE })
      ],
      relevance: 2
    },
    {
      className: "function",
      beginKeywords: "def",
      end: /\B\b/,
      contains: [
        hljs2.inherit(hljs2.TITLE_MODE, {
          begin: CRYSTAL_METHOD_RE,
          endsParent: true
        })
      ]
    },
    {
      className: "function",
      beginKeywords: "fun macro",
      end: /\B\b/,
      contains: [
        hljs2.inherit(hljs2.TITLE_MODE, {
          begin: CRYSTAL_METHOD_RE,
          endsParent: true
        })
      ],
      relevance: 2
    },
    {
      className: "symbol",
      begin: hljs2.UNDERSCORE_IDENT_RE + "(!|\\?)?:",
      relevance: 0
    },
    {
      className: "symbol",
      begin: ":",
      contains: [
        STRING,
        { begin: CRYSTAL_METHOD_RE }
      ],
      relevance: 0
    },
    {
      className: "number",
      variants: [
        { begin: "\\b0b([01_]+)" + INT_SUFFIX },
        { begin: "\\b0o([0-7_]+)" + INT_SUFFIX },
        { begin: "\\b0x([A-Fa-f0-9_]+)" + INT_SUFFIX },
        { begin: "\\b([1-9][0-9_]*[0-9]|[0-9])(\\.[0-9][0-9_]*)?([eE]_?[-+]?[0-9_]*)?" + FLOAT_SUFFIX + "(?!_)" },
        { begin: "\\b([1-9][0-9_]*|0)" + INT_SUFFIX }
      ],
      relevance: 0
    }
  ];
  SUBST.contains = CRYSTAL_DEFAULT_CONTAINS;
  EXPANSION.contains = CRYSTAL_DEFAULT_CONTAINS.slice(1);
  return {
    name: "Crystal",
    aliases: ["cr"],
    keywords: CRYSTAL_KEYWORDS,
    contains: CRYSTAL_DEFAULT_CONTAINS
  };
}

// node_modules/highlight.js/es/languages/csharp.js
function csharp(hljs2) {
  const BUILT_IN_KEYWORDS = [
    "bool",
    "byte",
    "char",
    "decimal",
    "delegate",
    "double",
    "dynamic",
    "enum",
    "float",
    "int",
    "long",
    "nint",
    "nuint",
    "object",
    "sbyte",
    "short",
    "string",
    "ulong",
    "uint",
    "ushort"
  ];
  const FUNCTION_MODIFIERS = [
    "public",
    "private",
    "protected",
    "static",
    "internal",
    "protected",
    "abstract",
    "async",
    "extern",
    "override",
    "unsafe",
    "virtual",
    "new",
    "sealed",
    "partial"
  ];
  const LITERAL_KEYWORDS = [
    "default",
    "false",
    "null",
    "true"
  ];
  const NORMAL_KEYWORDS = [
    "abstract",
    "as",
    "base",
    "break",
    "case",
    "catch",
    "class",
    "const",
    "continue",
    "do",
    "else",
    "event",
    "explicit",
    "extern",
    "finally",
    "fixed",
    "for",
    "foreach",
    "goto",
    "if",
    "implicit",
    "in",
    "interface",
    "internal",
    "is",
    "lock",
    "namespace",
    "new",
    "operator",
    "out",
    "override",
    "params",
    "private",
    "protected",
    "public",
    "readonly",
    "record",
    "ref",
    "return",
    "scoped",
    "sealed",
    "sizeof",
    "stackalloc",
    "static",
    "struct",
    "switch",
    "this",
    "throw",
    "try",
    "typeof",
    "unchecked",
    "unsafe",
    "using",
    "virtual",
    "void",
    "volatile",
    "while"
  ];
  const CONTEXTUAL_KEYWORDS = [
    "add",
    "alias",
    "and",
    "ascending",
    "args",
    "async",
    "await",
    "by",
    "descending",
    "dynamic",
    "equals",
    "file",
    "from",
    "get",
    "global",
    "group",
    "init",
    "into",
    "join",
    "let",
    "nameof",
    "not",
    "notnull",
    "on",
    "or",
    "orderby",
    "partial",
    "record",
    "remove",
    "required",
    "scoped",
    "select",
    "set",
    "unmanaged",
    "value|0",
    "var",
    "when",
    "where",
    "with",
    "yield"
  ];
  const KEYWORDS3 = {
    keyword: NORMAL_KEYWORDS.concat(CONTEXTUAL_KEYWORDS),
    built_in: BUILT_IN_KEYWORDS,
    literal: LITERAL_KEYWORDS
  };
  const TITLE_MODE = hljs2.inherit(hljs2.TITLE_MODE, { begin: "[a-zA-Z](\\.?\\w)*" });
  const NUMBERS = {
    className: "number",
    variants: [
      { begin: "\\b(0b[01']+)" },
      { begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)" },
      { begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)" }
    ],
    relevance: 0
  };
  const RAW_STRING = {
    className: "string",
    begin: /"""("*)(?!")(.|\n)*?"""\1/,
    relevance: 1
  };
  const VERBATIM_STRING = {
    className: "string",
    begin: '@"',
    end: '"',
    contains: [{ begin: '""' }]
  };
  const VERBATIM_STRING_NO_LF = hljs2.inherit(VERBATIM_STRING, { illegal: /\n/ });
  const SUBST = {
    className: "subst",
    begin: /\{/,
    end: /\}/,
    keywords: KEYWORDS3
  };
  const SUBST_NO_LF = hljs2.inherit(SUBST, { illegal: /\n/ });
  const INTERPOLATED_STRING = {
    className: "string",
    begin: /\$"/,
    end: '"',
    illegal: /\n/,
    contains: [
      { begin: /\{\{/ },
      { begin: /\}\}/ },
      hljs2.BACKSLASH_ESCAPE,
      SUBST_NO_LF
    ]
  };
  const INTERPOLATED_VERBATIM_STRING = {
    className: "string",
    begin: /\$@"/,
    end: '"',
    contains: [
      { begin: /\{\{/ },
      { begin: /\}\}/ },
      { begin: '""' },
      SUBST
    ]
  };
  const INTERPOLATED_VERBATIM_STRING_NO_LF = hljs2.inherit(INTERPOLATED_VERBATIM_STRING, {
    illegal: /\n/,
    contains: [
      { begin: /\{\{/ },
      { begin: /\}\}/ },
      { begin: '""' },
      SUBST_NO_LF
    ]
  });
  SUBST.contains = [
    INTERPOLATED_VERBATIM_STRING,
    INTERPOLATED_STRING,
    VERBATIM_STRING,
    hljs2.APOS_STRING_MODE,
    hljs2.QUOTE_STRING_MODE,
    NUMBERS,
    hljs2.C_BLOCK_COMMENT_MODE
  ];
  SUBST_NO_LF.contains = [
    INTERPOLATED_VERBATIM_STRING_NO_LF,
    INTERPOLATED_STRING,
    VERBATIM_STRING_NO_LF,
    hljs2.APOS_STRING_MODE,
    hljs2.QUOTE_STRING_MODE,
    NUMBERS,
    hljs2.inherit(hljs2.C_BLOCK_COMMENT_MODE, { illegal: /\n/ })
  ];
  const STRING = { variants: [
    RAW_STRING,
    INTERPOLATED_VERBATIM_STRING,
    INTERPOLATED_STRING,
    VERBATIM_STRING,
    hljs2.APOS_STRING_MODE,
    hljs2.QUOTE_STRING_MODE
  ] };
  const GENERIC_MODIFIER = {
    begin: "<",
    end: ">",
    contains: [
      { beginKeywords: "in out" },
      TITLE_MODE
    ]
  };
  const TYPE_IDENT_RE = hljs2.IDENT_RE + "(<" + hljs2.IDENT_RE + "(\\s*,\\s*" + hljs2.IDENT_RE + ")*>)?(\\[\\])?";
  const AT_IDENTIFIER = {
    // prevents expressions like `@class` from incorrect flagging
    // `class` as a keyword
    begin: "@" + hljs2.IDENT_RE,
    relevance: 0
  };
  return {
    name: "C#",
    aliases: [
      "cs",
      "c#"
    ],
    keywords: KEYWORDS3,
    illegal: /::/,
    contains: [
      hljs2.COMMENT(
        "///",
        "$",
        {
          returnBegin: true,
          contains: [
            {
              className: "doctag",
              variants: [
                {
                  begin: "///",
                  relevance: 0
                },
                { begin: "<!--|-->" },
                {
                  begin: "</?",
                  end: ">"
                }
              ]
            }
          ]
        }
      ),
      hljs2.C_LINE_COMMENT_MODE,
      hljs2.C_BLOCK_COMMENT_MODE,
      {
        className: "meta",
        begin: "#",
        end: "$",
        keywords: { keyword: "if else elif endif define undef warning error line region endregion pragma checksum" }
      },
      STRING,
      NUMBERS,
      {
        beginKeywords: "class interface",
        relevance: 0,
        end: /[{;=]/,
        illegal: /[^\s:,]/,
        contains: [
          { beginKeywords: "where class" },
          TITLE_MODE,
          GENERIC_MODIFIER,
          hljs2.C_LINE_COMMENT_MODE,
          hljs2.C_BLOCK_COMMENT_MODE
        ]
      },
      {
        beginKeywords: "namespace",
        relevance: 0,
        end: /[{;=]/,
        illegal: /[^\s:]/,
        contains: [
          TITLE_MODE,
          hljs2.C_LINE_COMMENT_MODE,
          hljs2.C_BLOCK_COMMENT_MODE
        ]
      },
      {
        beginKeywords: "record",
        relevance: 0,
        end: /[{;=]/,
        illegal: /[^\s:]/,
        contains: [
          TITLE_MODE,
          GENERIC_MODIFIER,
          hljs2.C_LINE_COMMENT_MODE,
          hljs2.C_BLOCK_COMMENT_MODE
        ]
      },
      {
        // [Attributes("")]
        className: "meta",
        begin: "^\\s*\\[(?=[\\w])",
        excludeBegin: true,
        end: "\\]",
        excludeEnd: true,
        contains: [
          {
            className: "string",
            begin: /"/,
            end: /"/
          }
        ]
      },
      {
        // Expression keywords prevent 'keyword Name(...)' from being
        // recognized as a function definition
        beginKeywords: "new return throw await else",
        relevance: 0
      },
      {
        className: "function",
        begin: "(" + TYPE_IDENT_RE + "\\s+)+" + hljs2.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(",
        returnBegin: true,
        end: /\s*[{;=]/,
        excludeEnd: true,
        keywords: KEYWORDS3,
        contains: [
          // prevents these from being highlighted `title`
          {
            beginKeywords: FUNCTION_MODIFIERS.join(" "),
            relevance: 0
          },
          {
            begin: hljs2.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(",
            returnBegin: true,
            contains: [
              hljs2.TITLE_MODE,
              GENERIC_MODIFIER
            ],
            relevance: 0
          },
          { match: /\(\)/ },
          {
            className: "params",
            begin: /\(/,
            end: /\)/,
            excludeBegin: true,
            excludeEnd: true,
            keywords: KEYWORDS3,
            relevance: 0,
            contains: [
              STRING,
              NUMBERS,
              hljs2.C_BLOCK_COMMENT_MODE
            ]
          },
          hljs2.C_LINE_COMMENT_MODE,
          hljs2.C_BLOCK_COMMENT_MODE
        ]
      },
      AT_IDENTIFIER
    ]
  };
}

// node_modules/highlight.js/es/languages/csp.js
function csp(hljs2) {
  const KEYWORDS3 = [
    "base-uri",
    "child-src",
    "connect-src",
    "default-src",
    "font-src",
    "form-action",
    "frame-ancestors",
    "frame-src",
    "img-src",
    "manifest-src",
    "media-src",
    "object-src",
    "plugin-types",
    "report-uri",
    "sandbox",
    "script-src",
    "style-src",
    "trusted-types",
    "unsafe-hashes",
    "worker-src"
  ];
  return {
    name: "CSP",
    case_insensitive: false,
    keywords: {
      $pattern: "[a-zA-Z][a-zA-Z0-9_-]*",
      keyword: KEYWORDS3
    },
    contains: [
      {
        className: "string",
        begin: "'",
        end: "'"
      },
      {
        className: "attribute",
        begin: "^Content",
        end: ":",
        excludeEnd: true
      }
    ]
  };
}

// node_modules/highlight.js/es/languages/css.js
var MODES = (hljs2) => {
  return {
    IMPORTANT: {
      scope: "meta",
      begin: "!important"
    },
    BLOCK_COMMENT: hljs2.C_BLOCK_COMMENT_MODE,
    HEXCOLOR: {
      scope: "number",
      begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
    },
    FUNCTION_DISPATCH: {
      className: "built_in",
      begin: /[\w-]+(?=\()/
    },
    ATTRIBUTE_SELECTOR_MODE: {
      scope: "selector-attr",
      begin: /\[/,
      end: /\]/,
      illegal: "$",
      contains: [
        hljs2.APOS_STRING_MODE,
        hljs2.QUOTE_STRING_MODE
      ]
    },
    CSS_NUMBER_MODE: {
      scope: "number",
      begin: hljs2.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
      relevance: 0
    },
    CSS_VARIABLE: {
      className: "attr",
      begin: /--[A-Za-z_][A-Za-z0-9_-]*/
    }
  };
};
var HTML_TAGS = [
  "a",
  "abbr",
  "address",
  "article",
  "aside",
  "audio",
  "b",
  "blockquote",
  "body",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "dd",
  "del",
  "details",
  "dfn",
  "div",
  "dl",
  "dt",
  "em",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "header",
  "hgroup",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "main",
  "mark",
  "menu",
  "nav",
  "object",
  "ol",
  "optgroup",
  "option",
  "p",
  "picture",
  "q",
  "quote",
  "samp",
  "section",
  "select",
  "source",
  "span",
  "strong",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "tr",
  "ul",
  "var",
  "video"
];
var SVG_TAGS = [
  "defs",
  "g",
  "marker",
  "mask",
  "pattern",
  "svg",
  "switch",
  "symbol",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feFlood",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMorphology",
  "feOffset",
  "feSpecularLighting",
  "feTile",
  "feTurbulence",
  "linearGradient",
  "radialGradient",
  "stop",
  "circle",
  "ellipse",
  "image",
  "line",
  "path",
  "polygon",
  "polyline",
  "rect",
  "text",
  "use",
  "textPath",
  "tspan",
  "foreignObject",
  "clipPath"
];
var TAGS = [
  ...HTML_TAGS,
  ...SVG_TAGS
];
var MEDIA_FEATURES = [
  "any-hover",
  "any-pointer",
  "aspect-ratio",
  "color",
  "color-gamut",
  "color-index",
  "device-aspect-ratio",
  "device-height",
  "device-width",
  "display-mode",
  "forced-colors",
  "grid",
  "height",
  "hover",
  "inverted-colors",
  "monochrome",
  "orientation",
  "overflow-block",
  "overflow-inline",
  "pointer",
  "prefers-color-scheme",
  "prefers-contrast",
  "prefers-reduced-motion",
  "prefers-reduced-transparency",
  "resolution",
  "scan",
  "scripting",
  "update",
  "width",
  // TODO: find a better solution?
  "min-width",
  "max-width",
  "min-height",
  "max-height"
].sort().reverse();
var PSEUDO_CLASSES = [
  "active",
  "any-link",
  "blank",
  "checked",
  "current",
  "default",
  "defined",
  "dir",
  // dir()
  "disabled",
  "drop",
  "empty",
  "enabled",
  "first",
  "first-child",
  "first-of-type",
  "fullscreen",
  "future",
  "focus",
  "focus-visible",
  "focus-within",
  "has",
  // has()
  "host",
  // host or host()
  "host-context",
  // host-context()
  "hover",
  "indeterminate",
  "in-range",
  "invalid",
  "is",
  // is()
  "lang",
  // lang()
  "last-child",
  "last-of-type",
  "left",
  "link",
  "local-link",
  "not",
  // not()
  "nth-child",
  // nth-child()
  "nth-col",
  // nth-col()
  "nth-last-child",
  // nth-last-child()
  "nth-last-col",
  // nth-last-col()
  "nth-last-of-type",
  //nth-last-of-type()
  "nth-of-type",
  //nth-of-type()
  "only-child",
  "only-of-type",
  "optional",
  "out-of-range",
  "past",
  "placeholder-shown",
  "read-only",
  "read-write",
  "required",
  "right",
  "root",
  "scope",
  "target",
  "target-within",
  "user-invalid",
  "valid",
  "visited",
  "where"
  // where()
].sort().reverse();
var PSEUDO_ELEMENTS = [
  "after",
  "backdrop",
  "before",
  "cue",
  "cue-region",
  "first-letter",
  "first-line",
  "grammar-error",
  "marker",
  "part",
  "placeholder",
  "selection",
  "slotted",
  "spelling-error"
].sort().reverse();
var ATTRIBUTES = [
  "accent-color",
  "align-content",
  "align-items",
  "align-self",
  "alignment-baseline",
  "all",
  "anchor-name",
  "animation",
  "animation-composition",
  "animation-delay",
  "animation-direction",
  "animation-duration",
  "animation-fill-mode",
  "animation-iteration-count",
  "animation-name",
  "animation-play-state",
  "animation-range",
  "animation-range-end",
  "animation-range-start",
  "animation-timeline",
  "animation-timing-function",
  "appearance",
  "aspect-ratio",
  "backdrop-filter",
  "backface-visibility",
  "background",
  "background-attachment",
  "background-blend-mode",
  "background-clip",
  "background-color",
  "background-image",
  "background-origin",
  "background-position",
  "background-position-x",
  "background-position-y",
  "background-repeat",
  "background-size",
  "baseline-shift",
  "block-size",
  "border",
  "border-block",
  "border-block-color",
  "border-block-end",
  "border-block-end-color",
  "border-block-end-style",
  "border-block-end-width",
  "border-block-start",
  "border-block-start-color",
  "border-block-start-style",
  "border-block-start-width",
  "border-block-style",
  "border-block-width",
  "border-bottom",
  "border-bottom-color",
  "border-bottom-left-radius",
  "border-bottom-right-radius",
  "border-bottom-style",
  "border-bottom-width",
  "border-collapse",
  "border-color",
  "border-end-end-radius",
  "border-end-start-radius",
  "border-image",
  "border-image-outset",
  "border-image-repeat",
  "border-image-slice",
  "border-image-source",
  "border-image-width",
  "border-inline",
  "border-inline-color",
  "border-inline-end",
  "border-inline-end-color",
  "border-inline-end-style",
  "border-inline-end-width",
  "border-inline-start",
  "border-inline-start-color",
  "border-inline-start-style",
  "border-inline-start-width",
  "border-inline-style",
  "border-inline-width",
  "border-left",
  "border-left-color",
  "border-left-style",
  "border-left-width",
  "border-radius",
  "border-right",
  "border-right-color",
  "border-right-style",
  "border-right-width",
  "border-spacing",
  "border-start-end-radius",
  "border-start-start-radius",
  "border-style",
  "border-top",
  "border-top-color",
  "border-top-left-radius",
  "border-top-right-radius",
  "border-top-style",
  "border-top-width",
  "border-width",
  "bottom",
  "box-align",
  "box-decoration-break",
  "box-direction",
  "box-flex",
  "box-flex-group",
  "box-lines",
  "box-ordinal-group",
  "box-orient",
  "box-pack",
  "box-shadow",
  "box-sizing",
  "break-after",
  "break-before",
  "break-inside",
  "caption-side",
  "caret-color",
  "clear",
  "clip",
  "clip-path",
  "clip-rule",
  "color",
  "color-interpolation",
  "color-interpolation-filters",
  "color-profile",
  "color-rendering",
  "color-scheme",
  "column-count",
  "column-fill",
  "column-gap",
  "column-rule",
  "column-rule-color",
  "column-rule-style",
  "column-rule-width",
  "column-span",
  "column-width",
  "columns",
  "contain",
  "contain-intrinsic-block-size",
  "contain-intrinsic-height",
  "contain-intrinsic-inline-size",
  "contain-intrinsic-size",
  "contain-intrinsic-width",
  "container",
  "container-name",
  "container-type",
  "content",
  "content-visibility",
  "counter-increment",
  "counter-reset",
  "counter-set",
  "cue",
  "cue-after",
  "cue-before",
  "cursor",
  "cx",
  "cy",
  "direction",
  "display",
  "dominant-baseline",
  "empty-cells",
  "enable-background",
  "field-sizing",
  "fill",
  "fill-opacity",
  "fill-rule",
  "filter",
  "flex",
  "flex-basis",
  "flex-direction",
  "flex-flow",
  "flex-grow",
  "flex-shrink",
  "flex-wrap",
  "float",
  "flood-color",
  "flood-opacity",
  "flow",
  "font",
  "font-display",
  "font-family",
  "font-feature-settings",
  "font-kerning",
  "font-language-override",
  "font-optical-sizing",
  "font-palette",
  "font-size",
  "font-size-adjust",
  "font-smooth",
  "font-smoothing",
  "font-stretch",
  "font-style",
  "font-synthesis",
  "font-synthesis-position",
  "font-synthesis-small-caps",
  "font-synthesis-style",
  "font-synthesis-weight",
  "font-variant",
  "font-variant-alternates",
  "font-variant-caps",
  "font-variant-east-asian",
  "font-variant-emoji",
  "font-variant-ligatures",
  "font-variant-numeric",
  "font-variant-position",
  "font-variation-settings",
  "font-weight",
  "forced-color-adjust",
  "gap",
  "glyph-orientation-horizontal",
  "glyph-orientation-vertical",
  "grid",
  "grid-area",
  "grid-auto-columns",
  "grid-auto-flow",
  "grid-auto-rows",
  "grid-column",
  "grid-column-end",
  "grid-column-start",
  "grid-gap",
  "grid-row",
  "grid-row-end",
  "grid-row-start",
  "grid-template",
  "grid-template-areas",
  "grid-template-columns",
  "grid-template-rows",
  "hanging-punctuation",
  "height",
  "hyphenate-character",
  "hyphenate-limit-chars",
  "hyphens",
  "icon",
  "image-orientation",
  "image-rendering",
  "image-resolution",
  "ime-mode",
  "initial-letter",
  "initial-letter-align",
  "inline-size",
  "inset",
  "inset-area",
  "inset-block",
  "inset-block-end",
  "inset-block-start",
  "inset-inline",
  "inset-inline-end",
  "inset-inline-start",
  "isolation",
  "justify-content",
  "justify-items",
  "justify-self",
  "kerning",
  "left",
  "letter-spacing",
  "lighting-color",
  "line-break",
  "line-height",
  "line-height-step",
  "list-style",
  "list-style-image",
  "list-style-position",
  "list-style-type",
  "margin",
  "margin-block",
  "margin-block-end",
  "margin-block-start",
  "margin-bottom",
  "margin-inline",
  "margin-inline-end",
  "margin-inline-start",
  "margin-left",
  "margin-right",
  "margin-top",
  "margin-trim",
  "marker",
  "marker-end",
  "marker-mid",
  "marker-start",
  "marks",
  "mask",
  "mask-border",
  "mask-border-mode",
  "mask-border-outset",
  "mask-border-repeat",
  "mask-border-slice",
  "mask-border-source",
  "mask-border-width",
  "mask-clip",
  "mask-composite",
  "mask-image",
  "mask-mode",
  "mask-origin",
  "mask-position",
  "mask-repeat",
  "mask-size",
  "mask-type",
  "masonry-auto-flow",
  "math-depth",
  "math-shift",
  "math-style",
  "max-block-size",
  "max-height",
  "max-inline-size",
  "max-width",
  "min-block-size",
  "min-height",
  "min-inline-size",
  "min-width",
  "mix-blend-mode",
  "nav-down",
  "nav-index",
  "nav-left",
  "nav-right",
  "nav-up",
  "none",
  "normal",
  "object-fit",
  "object-position",
  "offset",
  "offset-anchor",
  "offset-distance",
  "offset-path",
  "offset-position",
  "offset-rotate",
  "opacity",
  "order",
  "orphans",
  "outline",
  "outline-color",
  "outline-offset",
  "outline-style",
  "outline-width",
  "overflow",
  "overflow-anchor",
  "overflow-block",
  "overflow-clip-margin",
  "overflow-inline",
  "overflow-wrap",
  "overflow-x",
  "overflow-y",
  "overlay",
  "overscroll-behavior",
  "overscroll-behavior-block",
  "overscroll-behavior-inline",
  "overscroll-behavior-x",
  "overscroll-behavior-y",
  "padding",
  "padding-block",
  "padding-block-end",
  "padding-block-start",
  "padding-bottom",
  "padding-inline",
  "padding-inline-end",
  "padding-inline-start",
  "padding-left",
  "padding-right",
  "padding-top",
  "page",
  "page-break-after",
  "page-break-before",
  "page-break-inside",
  "paint-order",
  "pause",
  "pause-after",
  "pause-before",
  "perspective",
  "perspective-origin",
  "place-content",
  "place-items",
  "place-self",
  "pointer-events",
  "position",
  "position-anchor",
  "position-visibility",
  "print-color-adjust",
  "quotes",
  "r",
  "resize",
  "rest",
  "rest-after",
  "rest-before",
  "right",
  "rotate",
  "row-gap",
  "ruby-align",
  "ruby-position",
  "scale",
  "scroll-behavior",
  "scroll-margin",
  "scroll-margin-block",
  "scroll-margin-block-end",
  "scroll-margin-block-start",
  "scroll-margin-bottom",
  "scroll-margin-inline",
  "scroll-margin-inline-end",
  "scroll-margin-inline-start",
  "scroll-margin-left",
  "scroll-margin-right",
  "scroll-margin-top",
  "scroll-padding",
  "scroll-padding-block",
  "scroll-padding-block-end",
  "scroll-padding-block-start",
  "scroll-padding-bottom",
  "scroll-padding-inline",
  "scroll-padding-inline-end",
  "scroll-padding-inline-start",
  "scroll-padding-left",
  "scroll-padding-right",
  "scroll-padding-top",
  "scroll-snap-align",
  "scroll-snap-stop",
  "scroll-snap-type",
  "scroll-timeline",
  "scroll-timeline-axis",
  "scroll-timeline-name",
  "scrollbar-color",
  "scrollbar-gutter",
  "scrollbar-width",
  "shape-image-threshold",
  "shape-margin",
  "shape-outside",
  "shape-rendering",
  "speak",
  "speak-as",
  "src",
  // @font-face
  "stop-color",
  "stop-opacity",
  "stroke",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke-width",
  "tab-size",
  "table-layout",
  "text-align",
  "text-align-all",
  "text-align-last",
  "text-anchor",
  "text-combine-upright",
  "text-decoration",
  "text-decoration-color",
  "text-decoration-line",
  "text-decoration-skip",
  "text-decoration-skip-ink",
  "text-decoration-style",
  "text-decoration-thickness",
  "text-emphasis",
  "text-emphasis-color",
  "text-emphasis-position",
  "text-emphasis-style",
  "text-indent",
  "text-justify",
  "text-orientation",
  "text-overflow",
  "text-rendering",
  "text-shadow",
  "text-size-adjust",
  "text-transform",
  "text-underline-offset",
  "text-underline-position",
  "text-wrap",
  "text-wrap-mode",
  "text-wrap-style",
  "timeline-scope",
  "top",
  "touch-action",
  "transform",
  "transform-box",
  "transform-origin",
  "transform-style",
  "transition",
  "transition-behavior",
  "transition-delay",
  "transition-duration",
  "transition-property",
  "transition-timing-function",
  "translate",
  "unicode-bidi",
  "user-modify",
  "user-select",
  "vector-effect",
  "vertical-align",
  "view-timeline",
  "view-timeline-axis",
  "view-timeline-inset",
  "view-timeline-name",
  "view-transition-name",
  "visibility",
  "voice-balance",
  "voice-duration",
  "voice-family",
  "voice-pitch",
  "voice-range",
  "voice-rate",
  "voice-stress",
  "voice-volume",
  "white-space",
  "white-space-collapse",
  "widows",
  "width",
  "will-change",
  "word-break",
  "word-spacing",
  "word-wrap",
  "writing-mode",
  "x",
  "y",
  "z-index",
  "zoom"
].sort().reverse();
function css(hljs2) {
  const regex2 = hljs2.regex;
  const modes = MODES(hljs2);
  const VENDOR_PREFIX = { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ };
  const AT_MODIFIERS = "and or not only";
  const AT_PROPERTY_RE = /@-?\w[\w]*(-\w+)*/;
  const IDENT_RE3 = "[a-zA-Z-][a-zA-Z0-9_-]*";
  const STRINGS = [
    hljs2.APOS_STRING_MODE,
    hljs2.QUOTE_STRING_MODE
  ];
  return {
    name: "CSS",
    case_insensitive: true,
    illegal: /[=|'\$]/,
    keywords: { keyframePosition: "from to" },
    classNameAliases: {
      // for visual continuity with `tag {}` and because we
      // don't have a great class for this?
      keyframePosition: "selector-tag"
    },
    contains: [
      modes.BLOCK_COMMENT,
      VENDOR_PREFIX,
      // to recognize keyframe 40% etc which are outside the scope of our
      // attribute value mode
      modes.CSS_NUMBER_MODE,
      {
        className: "selector-id",
        begin: /#[A-Za-z0-9_-]+/,
        relevance: 0
      },
      {
        className: "selector-class",
        begin: "\\." + IDENT_RE3,
        relevance: 0
      },
      modes.ATTRIBUTE_SELECTOR_MODE,
      {
        className: "selector-pseudo",
        variants: [
          { begin: ":(" + PSEUDO_CLASSES.join("|") + ")" },
          { begin: ":(:)?(" + PSEUDO_ELEMENTS.join("|") + ")" }
        ]
      },
      // we may actually need this (12/2020)
      // { // pseudo-selector params
      //   begin: /\(/,
      //   end: /\)/,
      //   contains: [ hljs.CSS_NUMBER_MODE ]
      // },
      modes.CSS_VARIABLE,
      {
        className: "attribute",
        begin: "\\b(" + ATTRIBUTES.join("|") + ")\\b"
      },
      // attribute values
      {
        begin: /:/,
        end: /[;}{]/,
        contains: [
          modes.BLOCK_COMMENT,
          modes.HEXCOLOR,
          modes.IMPORTANT,
          modes.CSS_NUMBER_MODE,
          ...STRINGS,
          // needed to highlight these as strings and to avoid issues with
          // illegal characters that might be inside urls that would tigger the
          // languages illegal stack
          {
            begin: /(url|data-uri)\(/,
            end: /\)/,
            relevance: 0,
            // from keywords
            keywords: { built_in: "url data-uri" },
            contains: [
              ...STRINGS,
              {
                className: "string",
                // any character other than `)` as in `url()` will be the start
                // of a string, which ends with `)` (from the parent mode)
                begin: /[^)]/,
                endsWithParent: true,
                excludeEnd: true
              }
            ]
          },
          modes.FUNCTION_DISPATCH
        ]
      },
      {
        begin: regex2.lookahead(/@/),
        end: "[{;]",
        relevance: 0,
        illegal: /:/,
        // break on Less variables @var: ...
        contains: [
          {
            className: "keyword",
            begin: AT_PROPERTY_RE
          },
          {
            begin: /\s/,
            endsWithParent: true,
            excludeEnd: true,
            relevance: 0,
            keywords: {
              $pattern: /[a-z-]+/,
              keyword: AT_MODIFIERS,
              attribute: MEDIA_FEATURES.join(" ")
            },
            contains: [
              {
                begin: /[a-z-]+(?=:)/,
                className: "attribute"
              },
              ...STRINGS,
              modes.CSS_NUMBER_MODE
            ]
          }
        ]
      },
      {
        className: "selector-tag",
        begin: "\\b(" + TAGS.join("|") + ")\\b"
      }
    ]
  };
}

// node_modules/highlight.js/es/languages/markdown.js
function markdown(hljs2) {
  const regex2 = hljs2.regex;
  const INLINE_HTML = {
    begin: /<\/?[A-Za-z_]/,
    end: ">",
    subLanguage: "xml",
    relevance: 0
  };
  const HORIZONTAL_RULE = {
    begin: "^[-\\*]{3,}",
    end: "$"
  };
  const CODE = {
    className: "code",
    variants: [
      // TODO: fix to allow these to work with sublanguage also
      { begin: "(`{3,})[^`](.|\\n)*?\\1`*[ ]*" },
      { begin: "(~{3,})[^~](.|\\n)*?\\1~*[ ]*" },
      // needed to allow markdown as a sublanguage to work
      {
        begin: "```",
        end: "```+[ ]*$"
      },
      {
        begin: "~~~",
        end: "~~~+[ ]*$"
      },
      { begin: "`.+?`" },
      {
        begin: "(?=^( {4}|\\t))",
        // use contains to gobble up multiple lines to allow the block to be whatever size
        // but only have a single open/close tag vs one per line
        contains: [
          {
            begin: "^( {4}|\\t)",
            end: "(\\n)$"
          }
        ],
        relevance: 0
      }
    ]
  };
  const LIST = {
    className: "bullet",
    begin: "^[ 	]*([*+-]|(\\d+\\.))(?=\\s+)",
    end: "\\s+",
    excludeEnd: true
  };
  const LINK_REFERENCE = {
    begin: /^\[[^\n]+\]:/,
    returnBegin: true,
    contains: [
      {
        className: "symbol",
        begin: /\[/,
        end: /\]/,
        excludeBegin: true,
        excludeEnd: true
      },
      {
        className: "link",
        begin: /:\s*/,
        end: /$/,
        excludeBegin: true
      }
    ]
  };
  const URL_SCHEME = /[A-Za-z][A-Za-z0-9+.-]*/;
  const LINK = {
    variants: [
      // too much like nested array access in so many languages
      // to have any real relevance
      {
        begin: /\[.+?\]\[.*?\]/,
        relevance: 0
      },
      // popular internet URLs
      {
        begin: /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
        relevance: 2
      },
      {
        begin: regex2.concat(/\[.+?\]\(/, URL_SCHEME, /:\/\/.*?\)/),
        relevance: 2
      },
      // relative urls
      {
        begin: /\[.+?\]\([./?&#].*?\)/,
        relevance: 1
      },
      // whatever else, lower relevance (might not be a link at all)
      {
        begin: /\[.*?\]\(.*?\)/,
        relevance: 0
      }
    ],
    returnBegin: true,
    contains: [
      {
        // empty strings for alt or link text
        match: /\[(?=\])/
      },
      {
        className: "string",
        relevance: 0,
        begin: "\\[",
        end: "\\]",
        excludeBegin: true,
        returnEnd: true
      },
      {
        className: "link",
        relevance: 0,
        begin: "\\]\\(",
        end: "\\)",
        excludeBegin: true,
        excludeEnd: true
      },
      {
        className: "symbol",
        relevance: 0,
        begin: "\\]\\[",
        end: "\\]",
        excludeBegin: true,
        excludeEnd: true
      }
    ]
  };
  const BOLD = {
    className: "strong",
    contains: [],
    // defined later
    variants: [
      {
        begin: /_{2}(?!\s)/,
        end: /_{2}/
      },
      {
        begin: /\*{2}(?!\s)/,
        end: /\*{2}/
      }
    ]
  };
  const ITALIC = {
    className: "emphasis",
    contains: [],
    // defined later
    variants: [
      {
        begin: /\*(?![*\s])/,
        end: /\*/
      },
      {
        begin: /_(?![_\s])/,
        end: /_/,
        relevance: 0
      }
    ]
  };
  const BOLD_WITHOUT_ITALIC = hljs2.inherit(BOLD, { contains: [] });
  const ITALIC_WITHOUT_BOLD = hljs2.inherit(ITALIC, { contains: [] });
  BOLD.contains.push(ITALIC_WITHOUT_BOLD);
  ITALIC.contains.push(BOLD_WITHOUT_ITALIC);
  let CONTAINABLE = [
    INLINE_HTML,
    LINK
  ];
  [
    BOLD,
    ITALIC,
    BOLD_WITHOUT_ITALIC,
    ITALIC_WITHOUT_BOLD
  ].forEach((m) => {
    m.contains = m.contains.concat(CONTAINABLE);
  });
  CONTAINABLE = CONTAINABLE.concat(BOLD, ITALIC);
  const HEADER = {
    className: "section",
    variants: [
      {
        begin: "^#{1,6}",
        end: "$",
        contains: CONTAINABLE
      },
      {
        begin: "(?=^.+?\\n[=-]{2,}$)",
        contains: [
          { begin: "^[=-]*$" },
          {
            begin: "^",
            end: "\\n",
            contains: CONTAINABLE
          }
        ]
      }
    ]
  };
  const BLOCKQUOTE = {
    className: "quote",
    begin: "^>\\s+",
    contains: CONTAINABLE,
    end: "$"
  };
  const ENTITY = {
    //https://spec.commonmark.org/0.31.2/#entity-references
    scope: "literal",
    match: /&([a-zA-Z0-9]+|#[0-9]{1,7}|#[Xx][0-9a-fA-F]{1,6});/
  };
  return {
    name: "Markdown",
    aliases: [
      "md",
      "mkdown",
      "mkd"
    ],
    contains: [
      HEADER,
      INLINE_HTML,
      LIST,
      BOLD,
      ITALIC,
      BLOCKQUOTE,
      CODE,
      HORIZONTAL_RULE,
      LINK,
      LINK_REFERENCE,
      ENTITY
    ]
  };
}

// node_modules/highlight.js/es/languages/dart.js
function dart(hljs2) {
  const SUBST = {
    className: "subst",
    variants: [{ begin: "\\$[A-Za-z0-9_]+" }]
  };
  const BRACED_SUBST = {
    className: "subst",
    variants: [
      {
        begin: /\$\{/,
        end: /\}/
      }
    ],
    keywords: "true false null this is new super"
  };
  const NUMBER = {
    className: "number",
    relevance: 0,
    variants: [
      { match: /\b[0-9][0-9_]*(\.[0-9][0-9_]*)?([eE][+-]?[0-9][0-9_]*)?\b/ },
      { match: /\b0[xX][0-9A-Fa-f][0-9A-Fa-f_]*\b/ }
    ]
  };
  const STRING = {
    className: "string",
    variants: [
      {
        begin: "r'''",
        end: "'''"
      },
      {
        begin: 'r"""',
        end: '"""'
      },
      {
        begin: "r'",
        end: "'",
        illegal: "\\n"
      },
      {
        begin: 'r"',
        end: '"',
        illegal: "\\n"
      },
      {
        begin: "'''",
        end: "'''",
        contains: [
          hljs2.BACKSLASH_ESCAPE,
          SUBST,
          BRACED_SUBST
        ]
      },
      {
        begin: '"""',
        end: '"""',
        contains: [
          hljs2.BACKSLASH_ESCAPE,
          SUBST,
          BRACED_SUBST
        ]
      },
      {
        begin: "'",
        end: "'",
        illegal: "\\n",
        contains: [
          hljs2.BACKSLASH_ESCAPE,
          SUBST,
          BRACED_SUBST
        ]
      },
      {
        begin: '"',
        end: '"',
        illegal: "\\n",
        contains: [
          hljs2.BACKSLASH_ESCAPE,
          SUBST,
          BRACED_SUBST
        ]
      }
    ]
  };
  BRACED_SUBST.contains = [
    NUMBER,
    STRING
  ];
  const BUILT_IN_TYPES = [
    // dart:core
    "Comparable",
    "DateTime",
    "Duration",
    "Function",
    "Iterable",
    "Iterator",
    "List",
    "Map",
    "Match",
    "Object",
    "Pattern",
    "RegExp",
    "Set",
    "Stopwatch",
    "String",
    "StringBuffer",
    "StringSink",
    "Symbol",
    "Type",
    "Uri",
    "bool",
    "double",
    "int",
    "num",
    // dart:html
    "Element",
    "ElementList"
  ];
  const NULLABLE_BUILT_IN_TYPES = BUILT_IN_TYPES.map((e) => `${e}?`);
  const BASIC_KEYWORDS = [
    "abstract",
    "as",
    "assert",
    "async",
    "await",
    "base",
    "break",
    "case",
    "catch",
    "class",
    "const",
    "continue",
    "covariant",
    "default",
    "deferred",
    "do",
    "dynamic",
    "else",
    "enum",
    "export",
    "extends",
    "extension",
    "external",
    "factory",
    "false",
    "final",
    "finally",
    "for",
    "Function",
    "get",
    "hide",
    "if",
    "implements",
    "import",
    "in",
    "interface",
    "is",
    "late",
    "library",
    "mixin",
    "new",
    "null",
    "on",
    "operator",
    "part",
    "required",
    "rethrow",
    "return",
    "sealed",
    "set",
    "show",
    "static",
    "super",
    "switch",
    "sync",
    "this",
    "throw",
    "true",
    "try",
    "typedef",
    "var",
    "void",
    "when",
    "while",
    "with",
    "yield"
  ];
  const KEYWORDS3 = {
    keyword: BASIC_KEYWORDS,
    built_in: BUILT_IN_TYPES.concat(NULLABLE_BUILT_IN_TYPES).concat([
      // dart:core
      "Never",
      "Null",
      "dynamic",
      "print",
      // dart:html
      "document",
      "querySelector",
      "querySelectorAll",
      "window"
    ]),
    $pattern: /[A-Za-z][A-Za-z0-9_]*\??/
  };
  return {
    name: "Dart",
    keywords: KEYWORDS3,
    contains: [
      STRING,
      hljs2.COMMENT(
        /\/\*\*(?!\/)/,
        /\*\//,
        {
          subLanguage: "markdown",
          relevance: 0
        }
      ),
      hljs2.COMMENT(
        /\/{3,} ?/,
        /$/,
        { contains: [
          {
            subLanguage: "markdown",
            begin: ".",
            end: "$",
            relevance: 0
          }
        ] }
      ),
      hljs2.C_LINE_COMMENT_MODE,
      hljs2.C_BLOCK_COMMENT_MODE,
      {
        className: "class",
        beginKeywords: "class interface",
        end: /\{/,
        excludeEnd: true,
        contains: [
          { beginKeywords: "extends implements" },
          hljs2.UNDERSCORE_TITLE_MODE
        ]
      },
      NUMBER,
      {
        className: "meta",
        begin: "@[A-Za-z]+"
      },
      {
        begin: "=>"
        // No markup, just a relevance booster
      }
    ]
  };
}

// node_modules/highlight.js/es/languages/diff.js
function diff(hljs2) {
  const regex2 = hljs2.regex;
  return {
    name: "Diff",
    aliases: ["patch"],
    contains: [
      {
        className: "meta",
        relevance: 10,
        match: regex2.either(
          /^@@ +-\d+,\d+ +\+\d+,\d+ +@@/,
          /^\*\*\* +\d+,\d+ +\*\*\*\*$/,
          /^--- +\d+,\d+ +----$/
        )
      },
      {
        className: "comment",
        variants: [
          {
            begin: regex2.either(
              /Index: /,
              /^index/,
              /={3,}/,
              /^-{3}/,
              /^\*{3} /,
              /^\+{3}/,
              /^diff --git/
            ),
            end: /$/
          },
          { match: /^\*{15}$/ }
        ]
      },
      {
        className: "addition",
        begin: /^\+/,
        end: /$/
      },
      {
        className: "deletion",
        begin: /^-/,
        end: /$/
      },
      {
        className: "addition",
        begin: /^!/,
        end: /$/
      }
    ]
  };
}

// node_modules/highlight.js/es/languages/dockerfile.js
function dockerfile(hljs2) {
  const KEYWORDS3 = [
    "from",
    "maintainer",
    "expose",
    "env",
    "arg",
    "user",
    "onbuild",
    "stopsignal"
  ];
  return {
    name: "Dockerfile",
    aliases: ["docker"],
    case_insensitive: true,
    keywords: KEYWORDS3,
    contains: [
      hljs2.HASH_COMMENT_MODE,
      hljs2.APOS_STRING_MODE,
      hljs2.QUOTE_STRING_MODE,
      hljs2.NUMBER_MODE,
      {
        beginKeywords: "run cmd entrypoint volume add copy workdir label healthcheck shell",
        starts: {
          end: /[^\\]$/,
          subLanguage: "bash"
        }
      }
    ],
    illegal: "</"
  };
}

// node_modules/highlight.js/es/languages/elixir.js
function elixir(hljs2) {
  const regex2 = hljs2.regex;
  const ELIXIR_IDENT_RE = "[a-zA-Z_][a-zA-Z0-9_.]*(!|\\?)?";
  const ELIXIR_METHOD_RE = "[a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?";
  const KEYWORDS3 = [
    "after",
    "alias",
    "and",
    "case",
    "catch",
    "cond",
    "defstruct",
    "defguard",
    "do",
    "else",
    "end",
    "fn",
    "for",
    "if",
    "import",
    "in",
    "not",
    "or",
    "quote",
    "raise",
    "receive",
    "require",
    "reraise",
    "rescue",
    "try",
    "unless",
    "unquote",
    "unquote_splicing",
    "use",
    "when",
    "with|0"
  ];
  const LITERALS3 = [
    "false",
    "nil",
    "true"
  ];
  const KWS = {
    $pattern: ELIXIR_IDENT_RE,
    keyword: KEYWORDS3,
    literal: LITERALS3
  };
  const SUBST = {
    className: "subst",
    begin: /#\{/,
    end: /\}/,
    keywords: KWS
  };
  const NUMBER = {
    className: "number",
    begin: "(\\b0o[0-7_]+)|(\\b0b[01_]+)|(\\b0x[0-9a-fA-F_]+)|(-?\\b[0-9][0-9_]*(\\.[0-9_]+([eE][-+]?[0-9]+)?)?)",
    relevance: 0
  };
  const ESCAPES_RE = /\\[\s\S]/;
  const BACKSLASH_ESCAPE = {
    match: ESCAPES_RE,
    scope: "char.escape",
    relevance: 0
  };
  const SIGIL_DELIMITERS = `[/|([{<"']`;
  const SIGIL_DELIMITER_MODES = [
    {
      begin: /"/,
      end: /"/
    },
    {
      begin: /'/,
      end: /'/
    },
    {
      begin: /\//,
      end: /\//
    },
    {
      begin: /\|/,
      end: /\|/
    },
    {
      begin: /\(/,
      end: /\)/
    },
    {
      begin: /\[/,
      end: /\]/
    },
    {
      begin: /\{/,
      end: /\}/
    },
    {
      begin: /</,
      end: />/
    }
  ];
  const escapeSigilEnd = (end) => {
    return {
      scope: "char.escape",
      begin: regex2.concat(/\\/, end),
      relevance: 0
    };
  };
  const LOWERCASE_SIGIL = {
    className: "string",
    begin: "~[a-z](?=" + SIGIL_DELIMITERS + ")",
    contains: SIGIL_DELIMITER_MODES.map((x) => hljs2.inherit(
      x,
      { contains: [
        escapeSigilEnd(x.end),
        BACKSLASH_ESCAPE,
        SUBST
      ] }
    ))
  };
  const UPCASE_SIGIL = {
    className: "string",
    begin: "~[A-Z](?=" + SIGIL_DELIMITERS + ")",
    contains: SIGIL_DELIMITER_MODES.map((x) => hljs2.inherit(
      x,
      { contains: [escapeSigilEnd(x.end)] }
    ))
  };
  const REGEX_SIGIL = {
    className: "regex",
    variants: [
      {
        begin: "~r(?=" + SIGIL_DELIMITERS + ")",
        contains: SIGIL_DELIMITER_MODES.map((x) => hljs2.inherit(
          x,
          {
            end: regex2.concat(x.end, /[uismxfU]{0,7}/),
            contains: [
              escapeSigilEnd(x.end),
              BACKSLASH_ESCAPE,
              SUBST
            ]
          }
        ))
      },
      {
        begin: "~R(?=" + SIGIL_DELIMITERS + ")",
        contains: SIGIL_DELIMITER_MODES.map(
          (x) => hljs2.inherit(
            x,
            {
              end: regex2.concat(x.end, /[uismxfU]{0,7}/),
              contains: [escapeSigilEnd(x.end)]
            }
          )
        )
      }
    ]
  };
  const STRING = {
    className: "string",
    contains: [
      hljs2.BACKSLASH_ESCAPE,
      SUBST
    ],
    variants: [
      {
        begin: /"""/,
        end: /"""/
      },
      {
        begin: /'''/,
        end: /'''/
      },
      {
        begin: /~S"""/,
        end: /"""/,
        contains: []
        // override default
      },
      {
        begin: /~S"/,
        end: /"/,
        contains: []
        // override default
      },
      {
        begin: /~S'''/,
        end: /'''/,
        contains: []
        // override default
      },
      {
        begin: /~S'/,
        end: /'/,
        contains: []
        // override default
      },
      {
        begin: /'/,
        end: /'/
      },
      {
        begin: /"/,
        end: /"/
      }
    ]
  };
  const FUNCTION = {
    className: "function",
    beginKeywords: "def defp defmacro defmacrop",
    end: /\B\b/,
    // the mode is ended by the title
    contains: [
      hljs2.inherit(hljs2.TITLE_MODE, {
        begin: ELIXIR_IDENT_RE,
        endsParent: true
      })
    ]
  };
  const CLASS = hljs2.inherit(FUNCTION, {
    className: "class",
    beginKeywords: "defimpl defmodule defprotocol defrecord",
    end: /\bdo\b|$|;/
  });
  const ELIXIR_DEFAULT_CONTAINS = [
    STRING,
    REGEX_SIGIL,
    UPCASE_SIGIL,
    LOWERCASE_SIGIL,
    hljs2.HASH_COMMENT_MODE,
    CLASS,
    FUNCTION,
    { begin: "::" },
    {
      className: "symbol",
      begin: ":(?![\\s:])",
      contains: [
        STRING,
        { begin: ELIXIR_METHOD_RE }
      ],
      relevance: 0
    },
    {
      className: "symbol",
      begin: ELIXIR_IDENT_RE + ":(?!:)",
      relevance: 0
    },
    {
      // Usage of a module, struct, etc.
      className: "title.class",
      begin: /(\b[A-Z][a-zA-Z0-9_]+)/,
      relevance: 0
    },
    NUMBER,
    {
      className: "variable",
      begin: "(\\$\\W)|((\\$|@@?)(\\w+))"
    }
    // -> has been removed, capnproto always uses this grammar construct
  ];
  SUBST.contains = ELIXIR_DEFAULT_CONTAINS;
  return {
    name: "Elixir",
    aliases: [
      "ex",
      "exs"
    ],
    keywords: KWS,
    contains: ELIXIR_DEFAULT_CONTAINS
  };
}

// node_modules/highlight.js/es/languages/elm.js
function elm(hljs2) {
  const COMMENT = { variants: [
    hljs2.COMMENT("--", "$"),
    hljs2.COMMENT(
      /\{-/,
      /-\}/,
      { contains: ["self"] }
    )
  ] };
  const CONSTRUCTOR = {
    className: "type",
    begin: "\\b[A-Z][\\w']*",
    // TODO: other constructors (built-in, infix).
    relevance: 0
  };
  const LIST = {
    begin: "\\(",
    end: "\\)",
    illegal: '"',
    contains: [
      {
        className: "type",
        begin: "\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?"
      },
      COMMENT
    ]
  };
  const RECORD = {
    begin: /\{/,
    end: /\}/,
    contains: LIST.contains
  };
  const CHARACTER = {
    className: "string",
    begin: "'\\\\?.",
    end: "'",
    illegal: "."
  };
  const KEYWORDS3 = [
    "let",
    "in",
    "if",
    "then",
    "else",
    "case",
    "of",
    "where",
    "module",
    "import",
    "exposing",
    "type",
    "alias",
    "as",
    "infix",
    "infixl",
    "infixr",
    "port",
    "effect",
    "command",
    "subscription"
  ];
  return {
    name: "Elm",
    keywords: KEYWORDS3,
    contains: [
      // Top-level constructions.
      {
        beginKeywords: "port effect module",
        end: "exposing",
        keywords: "port effect module where command subscription exposing",
        contains: [
          LIST,
          COMMENT
        ],
        illegal: "\\W\\.|;"
      },
      {
        begin: "import",
        end: "$",
        keywords: "import as exposing",
        contains: [
          LIST,
          COMMENT
        ],
        illegal: "\\W\\.|;"
      },
      {
        begin: "type",
        end: "$",
        keywords: "type alias",
        contains: [
          CONSTRUCTOR,
          LIST,
          RECORD,
          COMMENT
        ]
      },
      {
        beginKeywords: "infix infixl infixr",
        end: "$",
        contains: [
          hljs2.C_NUMBER_MODE,
          COMMENT
        ]
      },
      {
        begin: "port",
        end: "$",
        keywords: "port",
        contains: [COMMENT]
      },
      // Literals and names.
      CHARACTER,
      hljs2.QUOTE_STRING_MODE,
      hljs2.C_NUMBER_MODE,
      CONSTRUCTOR,
      hljs2.inherit(hljs2.TITLE_MODE, { begin: "^[_a-z][\\w']*" }),
      COMMENT,
      {
        // No markup, relevance booster
        begin: "->|<-"
      }
    ],
    illegal: /;/
  };
}

// node_modules/highlight.js/es/languages/ruby.js
function ruby(hljs2) {
  const regex2 = hljs2.regex;
  const RUBY_METHOD_RE = "([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)";
  const CLASS_NAME_RE = regex2.either(
    /\b([A-Z]+[a-z0-9]+)+/,
    // ends in caps
    /\b([A-Z]+[a-z0-9]+)+[A-Z]+/
  );
  const CLASS_NAME_WITH_NAMESPACE_RE = regex2.concat(CLASS_NAME_RE, /(::\w+)*/);
  const PSEUDO_KWS = [
    "include",
    "extend",
    "prepend",
    "public",
    "private",
    "protected",
    "raise",
    "throw"
  ];
  const RUBY_KEYWORDS = {
    "variable.constant": [
      "__FILE__",
      "__LINE__",
      "__ENCODING__"
    ],
    "variable.language": [
      "self",
      "super"
    ],
    keyword: [
      "alias",
      "and",
      "begin",
      "BEGIN",
      "break",
      "case",
      "class",
      "defined",
      "do",
      "else",
      "elsif",
      "end",
      "END",
      "ensure",
      "for",
      "if",
      "in",
      "module",
      "next",
      "not",
      "or",
      "redo",
      "require",
      "rescue",
      "retry",
      "return",
      "then",
      "undef",
      "unless",
      "until",
      "when",
      "while",
      "yield",
      ...PSEUDO_KWS
    ],
    built_in: [
      "proc",
      "lambda",
      "attr_accessor",
      "attr_reader",
      "attr_writer",
      "define_method",
      "private_constant",
      "module_function"
    ],
    literal: [
      "true",
      "false",
      "nil"
    ]
  };
  const YARDOCTAG = {
    className: "doctag",
    begin: "@[A-Za-z]+"
  };
  const IRB_OBJECT = {
    begin: "#<",
    end: ">"
  };
  const COMMENT_MODES = [
    hljs2.COMMENT(
      "#",
      "$",
      { contains: [YARDOCTAG] }
    ),
    hljs2.COMMENT(
      "^=begin",
      "^=end",
      {
        contains: [YARDOCTAG],
        relevance: 10
      }
    ),
    hljs2.COMMENT("^__END__", hljs2.MATCH_NOTHING_RE)
  ];
  const SUBST = {
    className: "subst",
    begin: /#\{/,
    end: /\}/,
    keywords: RUBY_KEYWORDS
  };
  const STRING = {
    className: "string",
    contains: [
      hljs2.BACKSLASH_ESCAPE,
      SUBST
    ],
    variants: [
      {
        begin: /'/,
        end: /'/
      },
      {
        begin: /"/,
        end: /"/
      },
      {
        begin: /`/,
        end: /`/
      },
      {
        begin: /%[qQwWx]?\(/,
        end: /\)/
      },
      {
        begin: /%[qQwWx]?\[/,
        end: /\]/
      },
      {
        begin: /%[qQwWx]?\{/,
        end: /\}/
      },
      {
        begin: /%[qQwWx]?</,
        end: />/
      },
      {
        begin: /%[qQwWx]?\//,
        end: /\//
      },
      {
        begin: /%[qQwWx]?%/,
        end: /%/
      },
      {
        begin: /%[qQwWx]?-/,
        end: /-/
      },
      {
        begin: /%[qQwWx]?\|/,
        end: /\|/
      },
      // in the following expressions, \B in the beginning suppresses recognition of ?-sequences
      // where ? is the last character of a preceding identifier, as in: `func?4`
      { begin: /\B\?(\\\d{1,3})/ },
      { begin: /\B\?(\\x[A-Fa-f0-9]{1,2})/ },
      { begin: /\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/ },
      { begin: /\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/ },
      { begin: /\B\?\\(c|C-)[\x20-\x7e]/ },
      { begin: /\B\?\\?\S/ },
      // heredocs
      {
        // this guard makes sure that we have an entire heredoc and not a false
        // positive (auto-detect, etc.)
        begin: regex2.concat(
          /<<[-~]?'?/,
          regex2.lookahead(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/)
        ),
        contains: [
          hljs2.END_SAME_AS_BEGIN({
            begin: /(\w+)/,
            end: /(\w+)/,
            contains: [
              hljs2.BACKSLASH_ESCAPE,
              SUBST
            ]
          })
        ]
      }
    ]
  };
  const decimal = "[1-9](_?[0-9])*|0";
  const digits = "[0-9](_?[0-9])*";
  const NUMBER = {
    className: "number",
    relevance: 0,
    variants: [
      // decimal integer/float, optionally exponential or rational, optionally imaginary
      { begin: `\\b(${decimal})(\\.(${digits}))?([eE][+-]?(${digits})|r)?i?\\b` },
      // explicit decimal/binary/octal/hexadecimal integer,
      // optionally rational and/or imaginary
      { begin: "\\b0[dD][0-9](_?[0-9])*r?i?\\b" },
      { begin: "\\b0[bB][0-1](_?[0-1])*r?i?\\b" },
      { begin: "\\b0[oO][0-7](_?[0-7])*r?i?\\b" },
      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b" },
      // 0-prefixed implicit octal integer, optionally rational and/or imaginary
      { begin: "\\b0(_?[0-7])+r?i?\\b" }
    ]
  };
  const PARAMS = {
    variants: [
      {
        match: /\(\)/
      },
      {
        className: "params",
        begin: /\(/,
        end: /(?=\))/,
        excludeBegin: true,
        endsParent: true,
        keywords: RUBY_KEYWORDS
      }
    ]
  };
  const INCLUDE_EXTEND = {
    match: [
      /(include|extend)\s+/,
      CLASS_NAME_WITH_NAMESPACE_RE
    ],
    scope: {
      2: "title.class"
    },
    keywords: RUBY_KEYWORDS
  };
  const CLASS_DEFINITION = {
    variants: [
      {
        match: [
          /class\s+/,
          CLASS_NAME_WITH_NAMESPACE_RE,
          /\s+<\s+/,
          CLASS_NAME_WITH_NAMESPACE_RE
        ]
      },
      {
        match: [
          /\b(class|module)\s+/,
          CLASS_NAME_WITH_NAMESPACE_RE
        ]
      }
    ],
    scope: {
      2: "title.class",
      4: "title.class.inherited"
    },
    keywords: RUBY_KEYWORDS
  };
  const UPPER_CASE_CONSTANT = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  const METHOD_DEFINITION = {
    match: [
      /def/,
      /\s+/,
      RUBY_METHOD_RE
    ],
    scope: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      PARAMS
    ]
  };
  const OBJECT_CREATION = {
    relevance: 0,
    match: [
      CLASS_NAME_WITH_NAMESPACE_RE,
      /\.new[. (]/
    ],
    scope: {
      1: "title.class"
    }
  };
  const CLASS_REFERENCE = {
    relevance: 0,
    match: CLASS_NAME_RE,
    scope: "title.class"
  };
  const RUBY_DEFAULT_CONTAINS = [
    STRING,
    CLASS_DEFINITION,
    INCLUDE_EXTEND,
    OBJECT_CREATION,
    UPPER_CASE_CONSTANT,
    CLASS_REFERENCE,
    METHOD_DEFINITION,
    {
      // swallow namespace qualifiers before symbols
      begin: hljs2.IDENT_RE + "::"
    },
    {
      className: "symbol",
      begin: hljs2.UNDERSCORE_IDENT_RE + "(!|\\?)?:",
      relevance: 0
    },
    {
      className: "symbol",
      begin: ":(?!\\s)",
      contains: [
        STRING,
        { begin: RUBY_METHOD_RE }
      ],
      relevance: 0
    },
    NUMBER,
    {
      // negative-look forward attempts to prevent false matches like:
      // @ident@ or $ident$ that might indicate this is not ruby at all
      className: "variable",
      begin: `(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])`
    },
    {
      className: "params",
      begin: /\|(?!=)/,
      end: /\|/,
      excludeBegin: true,
      excludeEnd: true,
      relevance: 0,
      // this could be a lot of things (in other languages) other than params
      keywords: RUBY_KEYWORDS
    },
    {
      // regexp container
      begin: "(" + hljs2.RE_STARTERS_RE + "|unless)\\s*",
      keywords: "unless",
      contains: [
        {
          className: "regexp",
          contains: [
            hljs2.BACKSLASH_ESCAPE,
            SUBST
          ],
          illegal: /\n/,
          variants: [
            {
              begin: "/",
              end: "/[a-z]*"
            },
            {
              begin: /%r\{/,
              end: /\}[a-z]*/
            },
            {
              begin: "%r\\(",
              end: "\\)[a-z]*"
            },
            {
              begin: "%r!",
              end: "![a-z]*"
            },
            {
              begin: "%r\\[",
              end: "\\][a-z]*"
            }
          ]
        }
      ].concat(IRB_OBJECT, COMMENT_MODES),
      relevance: 0
    }
  ].concat(IRB_OBJECT, COMMENT_MODES);
  SUBST.contains = RUBY_DEFAULT_CONTAINS;
  PARAMS.contains = RUBY_DEFAULT_CONTAINS;
  const SIMPLE_PROMPT = "[>?]>";
  const DEFAULT_PROMPT = "[\\w#]+\\(\\w+\\):\\d+:\\d+[>*]";
  const RVM_PROMPT = "(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>";
  const IRB_DEFAULT = [
    {
      begin: /^\s*=>/,
      starts: {
        end: "$",
        contains: RUBY_DEFAULT_CONTAINS
      }
    },
    {
      className: "meta.prompt",
      begin: "^(" + SIMPLE_PROMPT + "|" + DEFAULT_PROMPT + "|" + RVM_PROMPT + ")(?=[ ])",
      starts: {
        end: "$",
        keywords: RUBY_KEYWORDS,
        contains: RUBY_DEFAULT_CONTAINS
      }
    }
  ];
  COMMENT_MODES.unshift(IRB_OBJECT);
  return {
    name: "Ruby",
    aliases: [
      "rb",
      "gemspec",
      "podspec",
      "thor",
      "irb"
    ],
    keywords: RUBY_KEYWORDS,
    illegal: /\/\*/,
    contains: [hljs2.SHEBANG({ binary: "ruby" })].concat(IRB_DEFAULT).concat(COMMENT_MODES).concat(RUBY_DEFAULT_CONTAINS)
  };
}

// node_modules/highlight.js/es/languages/erlang.js
function erlang(hljs2) {
  const BASIC_ATOM_RE = "[a-z'][a-zA-Z0-9_']*";
  const FUNCTION_NAME_RE = "(" + BASIC_ATOM_RE + ":" + BASIC_ATOM_RE + "|" + BASIC_ATOM_RE + ")";
  const ERLANG_RESERVED = {
    keyword: "after and andalso|10 band begin bnot bor bsl bzr bxor case catch cond div end fun if let not of orelse|10 query receive rem try when xor maybe else",
    literal: "false true"
  };
  const COMMENT = hljs2.COMMENT("%", "$");
  const NUMBER = {
    className: "number",
    begin: "\\b(\\d+(_\\d+)*#[a-fA-F0-9]+(_[a-fA-F0-9]+)*|\\d+(_\\d+)*(\\.\\d+(_\\d+)*)?([eE][-+]?\\d+)?)",
    relevance: 0
  };
  const NAMED_FUN = { begin: "fun\\s+" + BASIC_ATOM_RE + "/\\d+" };
  const FUNCTION_CALL = {
    begin: FUNCTION_NAME_RE + "\\(",
    end: "\\)",
    returnBegin: true,
    relevance: 0,
    contains: [
      {
        begin: FUNCTION_NAME_RE,
        relevance: 0
      },
      {
        begin: "\\(",
        end: "\\)",
        endsWithParent: true,
        returnEnd: true,
        relevance: 0
        // "contains" defined later
      }
    ]
  };
  const TUPLE = {
    begin: /\{/,
    end: /\}/,
    relevance: 0
    // "contains" defined later
  };
  const VAR1 = {
    begin: "\\b_([A-Z][A-Za-z0-9_]*)?",
    relevance: 0
  };
  const VAR2 = {
    begin: "[A-Z][a-zA-Z0-9_]*",
    relevance: 0
  };
  const RECORD_ACCESS = {
    begin: "#" + hljs2.UNDERSCORE_IDENT_RE,
    relevance: 0,
    returnBegin: true,
    contains: [
      {
        begin: "#" + hljs2.UNDERSCORE_IDENT_RE,
        relevance: 0
      },
      {
        begin: /\{/,
        end: /\}/,
        relevance: 0
        // "contains" defined later
      }
    ]
  };
  const CHAR_LITERAL = {
    scope: "string",
    match: /\$(\\([^0-9]|[0-9]{1,3}|)|.)/
  };
  const TRIPLE_QUOTE = {
    scope: "string",
    match: /"""("*)(?!")[\s\S]*?"""\1/
  };
  const SIGIL = {
    scope: "string",
    contains: [hljs2.BACKSLASH_ESCAPE],
    variants: [
      { match: /~\w?"""("*)(?!")[\s\S]*?"""\1/ },
      { begin: /~\w?\(/, end: /\)/ },
      { begin: /~\w?\[/, end: /\]/ },
      { begin: /~\w?{/, end: /}/ },
      { begin: /~\w?</, end: />/ },
      { begin: /~\w?\//, end: /\// },
      { begin: /~\w?\|/, end: /\|/ },
      { begin: /~\w?'/, end: /'/ },
      { begin: /~\w?"/, end: /"/ },
      { begin: /~\w?`/, end: /`/ },
      { begin: /~\w?#/, end: /#/ }
    ]
  };
  const BLOCK_STATEMENTS = {
    beginKeywords: "fun receive if try case maybe",
    end: "end",
    keywords: ERLANG_RESERVED
  };
  BLOCK_STATEMENTS.contains = [
    COMMENT,
    NAMED_FUN,
    hljs2.inherit(hljs2.APOS_STRING_MODE, { className: "" }),
    BLOCK_STATEMENTS,
    FUNCTION_CALL,
    SIGIL,
    TRIPLE_QUOTE,
    hljs2.QUOTE_STRING_MODE,
    NUMBER,
    TUPLE,
    VAR1,
    VAR2,
    RECORD_ACCESS,
    CHAR_LITERAL
  ];
  const BASIC_MODES = [
    COMMENT,
    NAMED_FUN,
    BLOCK_STATEMENTS,
    FUNCTION_CALL,
    SIGIL,
    TRIPLE_QUOTE,
    hljs2.QUOTE_STRING_MODE,
    NUMBER,
    TUPLE,
    VAR1,
    VAR2,
    RECORD_ACCESS,
    CHAR_LITERAL
  ];
  FUNCTION_CALL.contains[1].contains = BASIC_MODES;
  TUPLE.contains = BASIC_MODES;
  RECORD_ACCESS.contains[1].contains = BASIC_MODES;
  const DIRECTIVES = [
    "-module",
    "-record",
    "-undef",
    "-export",
    "-ifdef",
    "-ifndef",
    "-author",
    "-copyright",
    "-doc",
    "-moduledoc",
    "-vsn",
    "-import",
    "-include",
    "-include_lib",
    "-compile",
    "-define",
    "-else",
    "-endif",
    "-file",
    "-behaviour",
    "-behavior",
    "-spec",
    "-on_load",
    "-nifs"
  ];
  const PARAMS = {
    className: "params",
    begin: "\\(",
    end: "\\)",
    contains: BASIC_MODES
  };
  return {
    name: "Erlang",
    aliases: ["erl"],
    keywords: ERLANG_RESERVED,
    illegal: "(</|\\*=|\\+=|-=|/\\*|\\*/|\\(\\*|\\*\\))",
    contains: [
      {
        className: "function",
        begin: "^" + BASIC_ATOM_RE + "\\s*\\(",
        end: "->",
        returnBegin: true,
        illegal: "\\(|#|//|/\\*|\\\\|:|;",
        contains: [
          PARAMS,
          hljs2.inherit(hljs2.TITLE_MODE, { begin: BASIC_ATOM_RE })
        ],
        starts: {
          end: ";|\\.",
          keywords: ERLANG_RESERVED,
          contains: BASIC_MODES
        }
      },
      COMMENT,
      {
        begin: "^-",
        end: "\\.",
        relevance: 0,
        excludeEnd: true,
        returnBegin: true,
        keywords: {
          $pattern: "-" + hljs2.IDENT_RE,
          keyword: DIRECTIVES.map((x) => `${x}|1.5`).join(" ")
        },
        contains: [
          PARAMS,
          SIGIL,
          TRIPLE_QUOTE,
          hljs2.QUOTE_STRING_MODE
        ]
      },
      NUMBER,
      SIGIL,
      TRIPLE_QUOTE,
      hljs2.QUOTE_STRING_MODE,
      RECORD_ACCESS,
      VAR1,
      VAR2,
      TUPLE,
      CHAR_LITERAL,
      { begin: /\.$/ }
      // relevance booster
    ]
  };
}

// node_modules/highlight.js/es/languages/fsharp.js
function escape(value) {
  return new RegExp(value.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"), "m");
}
function source(re) {
  if (!re) return null;
  if (typeof re === "string") return re;
  return re.source;
}
function lookahead(re) {
  return concat("(?=", re, ")");
}
function concat(...args) {
  const joined = args.map((x) => source(x)).join("");
  return joined;
}
function stripOptionsFromArgs(args) {
  const opts = args[args.length - 1];
  if (typeof opts === "object" && opts.constructor === Object) {
    args.splice(args.length - 1, 1);
    return opts;
  } else {
    return {};
  }
}
function either(...args) {
  const opts = stripOptionsFromArgs(args);
  const joined = "(" + (opts.capture ? "" : "?:") + args.map((x) => source(x)).join("|") + ")";
  return joined;
}
function fsharp(hljs2) {
  const KEYWORDS3 = [
    "abstract",
    "and",
    "as",
    "assert",
    "base",
    "begin",
    "class",
    "default",
    "delegate",
    "do",
    "done",
    "downcast",
    "downto",
    "elif",
    "else",
    "end",
    "exception",
    "extern",
    // "false", // literal
    "finally",
    "fixed",
    "for",
    "fun",
    "function",
    "global",
    "if",
    "in",
    "inherit",
    "inline",
    "interface",
    "internal",
    "lazy",
    "let",
    "match",
    "member",
    "module",
    "mutable",
    "namespace",
    "new",
    // "not", // built_in
    // "null", // literal
    "of",
    "open",
    "or",
    "override",
    "private",
    "public",
    "rec",
    "return",
    "static",
    "struct",
    "then",
    "to",
    // "true", // literal
    "try",
    "type",
    "upcast",
    "use",
    "val",
    "void",
    "when",
    "while",
    "with",
    "yield"
  ];
  const BANG_KEYWORD_MODE = {
    // monad builder keywords (matches before non-bang keywords)
    scope: "keyword",
    match: /\b(yield|return|let|do|match|use)!/
  };
  const PREPROCESSOR_KEYWORDS = [
    "if",
    "else",
    "endif",
    "line",
    "nowarn",
    "light",
    "r",
    "i",
    "I",
    "load",
    "time",
    "help",
    "quit"
  ];
  const LITERALS3 = [
    "true",
    "false",
    "null",
    "Some",
    "None",
    "Ok",
    "Error",
    "infinity",
    "infinityf",
    "nan",
    "nanf"
  ];
  const SPECIAL_IDENTIFIERS = [
    "__LINE__",
    "__SOURCE_DIRECTORY__",
    "__SOURCE_FILE__"
  ];
  const KNOWN_TYPES = [
    // basic types
    "bool",
    "byte",
    "sbyte",
    "int8",
    "int16",
    "int32",
    "uint8",
    "uint16",
    "uint32",
    "int",
    "uint",
    "int64",
    "uint64",
    "nativeint",
    "unativeint",
    "decimal",
    "float",
    "double",
    "float32",
    "single",
    "char",
    "string",
    "unit",
    "bigint",
    // other native types or lowercase aliases
    "option",
    "voption",
    "list",
    "array",
    "seq",
    "byref",
    "exn",
    "inref",
    "nativeptr",
    "obj",
    "outref",
    "voidptr",
    // other important FSharp types
    "Result"
  ];
  const BUILTINS = [
    // Somewhat arbitrary list of builtin functions and values.
    // Most of them are declared in Microsoft.FSharp.Core
    // I tried to stay relevant by adding only the most idiomatic
    // and most used symbols that are not already declared as types.
    "not",
    "ref",
    "raise",
    "reraise",
    "dict",
    "readOnlyDict",
    "set",
    "get",
    "enum",
    "sizeof",
    "typeof",
    "typedefof",
    "nameof",
    "nullArg",
    "invalidArg",
    "invalidOp",
    "id",
    "fst",
    "snd",
    "ignore",
    "lock",
    "using",
    "box",
    "unbox",
    "tryUnbox",
    "printf",
    "printfn",
    "sprintf",
    "eprintf",
    "eprintfn",
    "fprintf",
    "fprintfn",
    "failwith",
    "failwithf"
  ];
  const ALL_KEYWORDS = {
    keyword: KEYWORDS3,
    literal: LITERALS3,
    built_in: BUILTINS,
    "variable.constant": SPECIAL_IDENTIFIERS
  };
  const ML_COMMENT = hljs2.COMMENT(/\(\*(?!\))/, /\*\)/, {
    contains: ["self"]
  });
  const COMMENT = {
    variants: [
      ML_COMMENT,
      hljs2.C_LINE_COMMENT_MODE
    ]
  };
  const IDENTIFIER_RE = /[a-zA-Z_](\w|')*/;
  const QUOTED_IDENTIFIER = {
    scope: "variable",
    begin: /``/,
    end: /``/
  };
  const BEGIN_GENERIC_TYPE_SYMBOL_RE = /\B('|\^)/;
  const GENERIC_TYPE_SYMBOL = {
    scope: "symbol",
    variants: [
      // the type name is a quoted identifier:
      { match: concat(BEGIN_GENERIC_TYPE_SYMBOL_RE, /``.*?``/) },
      // the type name is a normal identifier (we don't use IDENTIFIER_RE because there cannot be another apostrophe here):
      { match: concat(BEGIN_GENERIC_TYPE_SYMBOL_RE, hljs2.UNDERSCORE_IDENT_RE) }
    ],
    relevance: 0
  };
  const makeOperatorMode = function({ includeEqual }) {
    let allOperatorChars;
    if (includeEqual)
      allOperatorChars = "!%&*+-/<=>@^|~?";
    else
      allOperatorChars = "!%&*+-/<>@^|~?";
    const OPERATOR_CHARS = Array.from(allOperatorChars);
    const OPERATOR_CHAR_RE = concat("[", ...OPERATOR_CHARS.map(escape), "]");
    const OPERATOR_CHAR_OR_DOT_RE = either(OPERATOR_CHAR_RE, /\./);
    const OPERATOR_FIRST_CHAR_OF_MULTIPLE_RE = concat(OPERATOR_CHAR_OR_DOT_RE, lookahead(OPERATOR_CHAR_OR_DOT_RE));
    const SYMBOLIC_OPERATOR_RE = either(
      concat(OPERATOR_FIRST_CHAR_OF_MULTIPLE_RE, OPERATOR_CHAR_OR_DOT_RE, "*"),
      // Matches at least 2 chars operators
      concat(OPERATOR_CHAR_RE, "+")
      // Matches at least one char operators
    );
    return {
      scope: "operator",
      match: either(
        // symbolic operators:
        SYMBOLIC_OPERATOR_RE,
        // other symbolic keywords:
        // Type casting and conversion operators:
        /:\?>/,
        /:\?/,
        /:>/,
        /:=/,
        // Reference cell assignment
        /::?/,
        // : or ::
        /\$/
      ),
      // A single $ can be used as an operator
      relevance: 0
    };
  };
  const OPERATOR = makeOperatorMode({ includeEqual: true });
  const OPERATOR_WITHOUT_EQUAL = makeOperatorMode({ includeEqual: false });
  const makeTypeAnnotationMode = function(prefix, prefixScope) {
    return {
      begin: concat(
        // a type annotation is a
        prefix,
        // should be a colon or the 'of' keyword
        lookahead(
          // that has to be followed by
          concat(
            /\s*/,
            // optional space
            either(
              // then either of:
              /\w/,
              // word
              /'/,
              // generic type name
              /\^/,
              // generic type name
              /#/,
              // flexible type name
              /``/,
              // quoted type name
              /\(/,
              // parens type expression
              /{\|/
              // anonymous type annotation
            )
          )
        )
      ),
      beginScope: prefixScope,
      // BUG: because ending with \n is necessary for some cases, multi-line type annotations are not properly supported.
      // Examples where \n is required at the end:
      // - abstract member definitions in classes: abstract Property : int * string
      // - return type annotations: let f f' = f' () : returnTypeAnnotation
      // - record fields definitions: { A : int \n B : string }
      end: lookahead(
        either(
          /\n/,
          /=/
        )
      ),
      relevance: 0,
      // we need the known types, and we need the type constraint keywords and literals. e.g.: when 'a : null
      keywords: hljs2.inherit(ALL_KEYWORDS, { type: KNOWN_TYPES }),
      contains: [
        COMMENT,
        GENERIC_TYPE_SYMBOL,
        hljs2.inherit(QUOTED_IDENTIFIER, { scope: null }),
        // match to avoid strange patterns inside that may break the parsing
        OPERATOR_WITHOUT_EQUAL
      ]
    };
  };
  const TYPE_ANNOTATION = makeTypeAnnotationMode(/:/, "operator");
  const DISCRIMINATED_UNION_TYPE_ANNOTATION = makeTypeAnnotationMode(/\bof\b/, "keyword");
  const TYPE_DECLARATION = {
    begin: [
      /(^|\s+)/,
      // prevents matching the following: `match s.stype with`
      /type/,
      /\s+/,
      IDENTIFIER_RE
    ],
    beginScope: {
      2: "keyword",
      4: "title.class"
    },
    end: lookahead(/\(|=|$/),
    keywords: ALL_KEYWORDS,
    // match keywords in type constraints. e.g.: when 'a : null
    contains: [
      COMMENT,
      hljs2.inherit(QUOTED_IDENTIFIER, { scope: null }),
      // match to avoid strange patterns inside that may break the parsing
      GENERIC_TYPE_SYMBOL,
      {
        // For visual consistency, highlight type brackets as operators.
        scope: "operator",
        match: /<|>/
      },
      TYPE_ANNOTATION
      // generic types can have constraints, which are type annotations. e.g. type MyType<'T when 'T : delegate<obj * string>> =
    ]
  };
  const COMPUTATION_EXPRESSION = {
    // computation expressions:
    scope: "computation-expression",
    // BUG: might conflict with record deconstruction. e.g. let f { Name = name } = name // will highlight f
    match: /\b[_a-z]\w*(?=\s*\{)/
  };
  const PREPROCESSOR = {
    // preprocessor directives and fsi commands:
    begin: [
      /^\s*/,
      concat(/#/, either(...PREPROCESSOR_KEYWORDS)),
      /\b/
    ],
    beginScope: { 2: "meta" },
    end: lookahead(/\s|$/)
  };
  const NUMBER = {
    variants: [
      hljs2.BINARY_NUMBER_MODE,
      hljs2.C_NUMBER_MODE
    ]
  };
  const QUOTED_STRING = {
    scope: "string",
    begin: /"/,
    end: /"/,
    contains: [
      hljs2.BACKSLASH_ESCAPE
    ]
  };
  const VERBATIM_STRING = {
    scope: "string",
    begin: /@"/,
    end: /"/,
    contains: [
      {
        match: /""/
        // escaped "
      },
      hljs2.BACKSLASH_ESCAPE
    ]
  };
  const TRIPLE_QUOTED_STRING = {
    scope: "string",
    begin: /"""/,
    end: /"""/,
    relevance: 2
  };
  const SUBST = {
    scope: "subst",
    begin: /\{/,
    end: /\}/,
    keywords: ALL_KEYWORDS
  };
  const INTERPOLATED_STRING = {
    scope: "string",
    begin: /\$"/,
    end: /"/,
    contains: [
      {
        match: /\{\{/
        // escaped {
      },
      {
        match: /\}\}/
        // escaped }
      },
      hljs2.BACKSLASH_ESCAPE,
      SUBST
    ]
  };
  const INTERPOLATED_VERBATIM_STRING = {
    scope: "string",
    begin: /(\$@|@\$)"/,
    end: /"/,
    contains: [
      {
        match: /\{\{/
        // escaped {
      },
      {
        match: /\}\}/
        // escaped }
      },
      {
        match: /""/
      },
      hljs2.BACKSLASH_ESCAPE,
      SUBST
    ]
  };
  const INTERPOLATED_TRIPLE_QUOTED_STRING = {
    scope: "string",
    begin: /\$"""/,
    end: /"""/,
    contains: [
      {
        match: /\{\{/
        // escaped {
      },
      {
        match: /\}\}/
        // escaped }
      },
      SUBST
    ],
    relevance: 2
  };
  const CHAR_LITERAL = {
    scope: "string",
    match: concat(
      /'/,
      either(
        /[^\\']/,
        // either a single non escaped char...
        /\\(?:.|\d{3}|x[a-fA-F\d]{2}|u[a-fA-F\d]{4}|U[a-fA-F\d]{8})/
        // ...or an escape sequence
      ),
      /'/
    )
  };
  SUBST.contains = [
    INTERPOLATED_VERBATIM_STRING,
    INTERPOLATED_STRING,
    VERBATIM_STRING,
    QUOTED_STRING,
    CHAR_LITERAL,
    BANG_KEYWORD_MODE,
    COMMENT,
    QUOTED_IDENTIFIER,
    TYPE_ANNOTATION,
    COMPUTATION_EXPRESSION,
    PREPROCESSOR,
    NUMBER,
    GENERIC_TYPE_SYMBOL,
    OPERATOR
  ];
  const STRING = {
    variants: [
      INTERPOLATED_TRIPLE_QUOTED_STRING,
      INTERPOLATED_VERBATIM_STRING,
      INTERPOLATED_STRING,
      TRIPLE_QUOTED_STRING,
      VERBATIM_STRING,
      QUOTED_STRING,
      CHAR_LITERAL
    ]
  };
  return {
    name: "F#",
    aliases: [
      "fs",
      "f#"
    ],
    keywords: ALL_KEYWORDS,
    illegal: /\/\*/,
    classNameAliases: {
      "computation-expression": "keyword"
    },
    contains: [
      BANG_KEYWORD_MODE,
      STRING,
      COMMENT,
      QUOTED_IDENTIFIER,
      TYPE_DECLARATION,
      {
        // e.g. [<Attributes("")>] or [<``module``: MyCustomAttributeThatWorksOnModules>]
        // or [<Sealed; NoEquality; NoComparison; CompiledName("FSharpAsync`1")>]
        scope: "meta",
        begin: /\[</,
        end: />\]/,
        relevance: 2,
        contains: [
          QUOTED_IDENTIFIER,
          // can contain any constant value
          TRIPLE_QUOTED_STRING,
          VERBATIM_STRING,
          QUOTED_STRING,
          CHAR_LITERAL,
          NUMBER
        ]
      },
      DISCRIMINATED_UNION_TYPE_ANNOTATION,
      TYPE_ANNOTATION,
      COMPUTATION_EXPRESSION,
      PREPROCESSOR,
      NUMBER,
      GENERIC_TYPE_SYMBOL,
      OPERATOR
    ]
  };
}

// node_modules/highlight.js/es/languages/go.js
function go(hljs2) {
  const LITERALS3 = [
    "true",
    "false",
    "iota",
    "nil"
  ];
  const BUILT_INS3 = [
    "append",
    "cap",
    "close",
    "complex",
    "copy",
    "imag",
    "len",
    "make",
    "new",
    "panic",
    "print",
    "println",
    "real",
    "recover",
    "delete"
  ];
  const TYPES3 = [
    "bool",
    "byte",
    "complex64",
    "complex128",
    "error",
    "float32",
    "float64",
    "int8",
    "int16",
    "int32",
    "int64",
    "string",
    "uint8",
    "uint16",
    "uint32",
    "uint64",
    "int",
    "uint",
    "uintptr",
    "rune"
  ];
  const KWS = [
    "break",
    "case",
    "chan",
    "const",
    "continue",
    "default",
    "defer",
    "else",
    "fallthrough",
    "for",
    "func",
    "go",
    "goto",
    "if",
    "import",
    "interface",
    "map",
    "package",
    "range",
    "return",
    "select",
    "struct",
    "switch",
    "type",
    "var"
  ];
  const KEYWORDS3 = {
    keyword: KWS,
    type: TYPES3,
    literal: LITERALS3,
    built_in: BUILT_INS3
  };
  return {
    name: "Go",
    aliases: ["golang"],
    keywords: KEYWORDS3,
    illegal: "</",
    contains: [
      hljs2.C_LINE_COMMENT_MODE,
      hljs2.C_BLOCK_COMMENT_MODE,
      {
        className: "string",
        variants: [
          hljs2.QUOTE_STRING_MODE,
          hljs2.APOS_STRING_MODE,
          {
            begin: "`",
            end: "`"
          }
        ]
      },
      {
        className: "number",
        variants: [
          {
            match: /-?\b0[xX]\.[a-fA-F0-9](_?[a-fA-F0-9])*[pP][+-]?\d(_?\d)*i?/,
            // hex without a present digit before . (making a digit afterwards required)
            relevance: 0
          },
          {
            match: /-?\b0[xX](_?[a-fA-F0-9])+((\.([a-fA-F0-9](_?[a-fA-F0-9])*)?)?[pP][+-]?\d(_?\d)*)?i?/,
            // hex with a present digit before . (making a digit afterwards optional)
            relevance: 0
          },
          {
            match: /-?\b0[oO](_?[0-7])*i?/,
            // leading 0o octal
            relevance: 0
          },
          {
            match: /-?\.\d(_?\d)*([eE][+-]?\d(_?\d)*)?i?/,
            // decimal without a present digit before . (making a digit afterwards required)
            relevance: 0
          },
          {
            match: /-?\b\d(_?\d)*(\.(\d(_?\d)*)?)?([eE][+-]?\d(_?\d)*)?i?/,
            // decimal with a present digit before . (making a digit afterwards optional)
            relevance: 0
          }
        ]
      },
      {
        begin: /:=/
        // relevance booster
      },
      {
        className: "function",
        beginKeywords: "func",
        end: "\\s*(\\{|$)",
        excludeEnd: true,
        contains: [
          hljs2.TITLE_MODE,
          {
            className: "params",
            begin: /\(/,
            end: /\)/,
            endsParent: true,
            keywords: KEYWORDS3,
            illegal: /["']/
          }
        ]
      }
    ]
  };
}

// node_modules/highlight.js/es/languages/gradle.js
function gradle(hljs2) {
  const KEYWORDS3 = [
    "task",
    "project",
    "allprojects",
    "subprojects",
    "artifacts",
    "buildscript",
    "configurations",
    "dependencies",
    "repositories",
    "sourceSets",
    "description",
    "delete",
    "from",
    "into",
    "include",
    "exclude",
    "source",
    "classpath",
    "destinationDir",
    "includes",
    "options",
    "sourceCompatibility",
    "targetCompatibility",
    "group",
    "flatDir",
    "doLast",
    "doFirst",
    "flatten",
    "todir",
    "fromdir",
    "ant",
    "def",
    "abstract",
    "break",
    "case",
    "catch",
    "continue",
    "default",
    "do",
    "else",
    "extends",
    "final",
    "finally",
    "for",
    "if",
    "implements",
    "instanceof",
    "native",
    "new",
    "private",
    "protected",
    "public",
    "return",
    "static",
    "switch",
    "synchronized",
    "throw",
    "throws",
    "transient",
    "try",
    "volatile",
    "while",
    "strictfp",
    "package",
    "import",
    "false",
    "null",
    "super",
    "this",
    "true",
    "antlrtask",
    "checkstyle",
    "codenarc",
    "copy",
    "boolean",
    "byte",
    "char",
    "class",
    "double",
    "float",
    "int",
    "interface",
    "long",
    "short",
    "void",
    "compile",
    "runTime",
    "file",
    "fileTree",
    "abs",
    "any",
    "append",
    "asList",
    "asWritable",
    "call",
    "collect",
    "compareTo",
    "count",
    "div",
    "dump",
    "each",
    "eachByte",
    "eachFile",
    "eachLine",
    "every",
    "find",
    "findAll",
    "flatten",
    "getAt",
    "getErr",
    "getIn",
    "getOut",
    "getText",
    "grep",
    "immutable",
    "inject",
    "inspect",
    "intersect",
    "invokeMethods",
    "isCase",
    "join",
    "leftShift",
    "minus",
    "multiply",
    "newInputStream",
    "newOutputStream",
    "newPrintWriter",
    "newReader",
    "newWriter",
    "next",
    "plus",
    "pop",
    "power",
    "previous",
    "print",
    "println",
    "push",
    "putAt",
    "read",
    "readBytes",
    "readLines",
    "reverse",
    "reverseEach",
    "round",
    "size",
    "sort",
    "splitEachLine",
    "step",
    "subMap",
    "times",
    "toInteger",
    "toList",
    "tokenize",
    "upto",
    "waitForOrKill",
    "withPrintWriter",
    "withReader",
    "withStream",
    "withWriter",
    "withWriterAppend",
    "write",
    "writeLine"
  ];
  return {
    name: "Gradle",
    case_insensitive: true,
    keywords: KEYWORDS3,
    contains: [
      hljs2.C_LINE_COMMENT_MODE,
      hljs2.C_BLOCK_COMMENT_MODE,
      hljs2.APOS_STRING_MODE,
      hljs2.QUOTE_STRING_MODE,
      hljs2.NUMBER_MODE,
      hljs2.REGEXP_MODE
    ]
  };
}

// node_modules/highlight.js/es/languages/groovy.js
function variants(variants2, obj = {}) {
  obj.variants = variants2;
  return obj;
}
function groovy(hljs2) {
  const regex2 = hljs2.regex;
  const IDENT_RE3 = "[A-Za-z0-9_$]+";
  const COMMENT = variants([
    hljs2.C_LINE_COMMENT_MODE,
    hljs2.C_BLOCK_COMMENT_MODE,
    hljs2.COMMENT(
      "/\\*\\*",
      "\\*/",
      {
        relevance: 0,
        contains: [
          {
            // eat up @'s in emails to prevent them to be recognized as doctags
            begin: /\w+@/,
            relevance: 0
          },
          {
            className: "doctag",
            begin: "@[A-Za-z]+"
          }
        ]
      }
    )
  ]);
  const REGEXP = {
    className: "regexp",
    begin: /~?\/[^\/\n]+\//,
    contains: [hljs2.BACKSLASH_ESCAPE]
  };
  const NUMBER = variants([
    hljs2.BINARY_NUMBER_MODE,
    hljs2.C_NUMBER_MODE
  ]);
  const STRING = variants(
    [
      {
        begin: /"""/,
        end: /"""/
      },
      {
        begin: /'''/,
        end: /'''/
      },
      {
        begin: "\\$/",
        end: "/\\$",
        relevance: 10
      },
      hljs2.APOS_STRING_MODE,
      hljs2.QUOTE_STRING_MODE
    ],
    { className: "string" }
  );
  const CLASS_DEFINITION = {
    match: [
      /(class|interface|trait|enum|record|extends|implements)/,
      /\s+/,
      hljs2.UNDERSCORE_IDENT_RE
    ],
    scope: {
      1: "keyword",
      3: "title.class"
    }
  };
  const TYPES3 = [
    "byte",
    "short",
    "char",
    "int",
    "long",
    "boolean",
    "float",
    "double",
    "void"
  ];
  const KEYWORDS3 = [
    // groovy specific keywords
    "def",
    "as",
    "in",
    "assert",
    "trait",
    // common keywords with Java
    "abstract",
    "static",
    "volatile",
    "transient",
    "public",
    "private",
    "protected",
    "synchronized",
    "final",
    "class",
    "interface",
    "enum",
    "if",
    "else",
    "for",
    "while",
    "switch",
    "case",
    "break",
    "default",
    "continue",
    "throw",
    "throws",
    "try",
    "catch",
    "finally",
    "implements",
    "extends",
    "new",
    "import",
    "package",
    "return",
    "instanceof",
    "var"
  ];
  return {
    name: "Groovy",
    keywords: {
      "variable.language": "this super",
      literal: "true false null",
      type: TYPES3,
      keyword: KEYWORDS3
    },
    contains: [
      hljs2.SHEBANG({
        binary: "groovy",
        relevance: 10
      }),
      COMMENT,
      STRING,
      REGEXP,
      NUMBER,
      CLASS_DEFINITION,
      {
        className: "meta",
        begin: "@[A-Za-z]+",
        relevance: 0
      },
      {
        // highlight map keys and named parameters as attrs
        className: "attr",
        begin: IDENT_RE3 + "[ 	]*:",
        relevance: 0
      },
      {
        // catch middle element of the ternary operator
        // to avoid highlight it as a label, named parameter, or map key
        begin: /\?/,
        end: /:/,
        relevance: 0,
        contains: [
          COMMENT,
          STRING,
          REGEXP,
          NUMBER,
          "self"
        ]
      },
      {
        // highlight labeled statements
        className: "symbol",
        begin: "^[ 	]*" + regex2.lookahead(IDENT_RE3 + ":"),
        excludeBegin: true,
        end: IDENT_RE3 + ":",
        relevance: 0
      }
    ],
    illegal: /#|<\//
  };
}

// node_modules/highlight.js/es/languages/handlebars.js
function handlebars(hljs2) {
  const regex2 = hljs2.regex;
  const BUILT_INS3 = {
    $pattern: /[\w.\/]+/,
    built_in: [
      "action",
      "bindattr",
      "collection",
      "component",
      "concat",
      "debugger",
      "each",
      "each-in",
      "get",
      "hash",
      "if",
      "in",
      "input",
      "link-to",
      "loc",
      "log",
      "lookup",
      "mut",
      "outlet",
      "partial",
      "query-params",
      "render",
      "template",
      "textarea",
      "unbound",
      "unless",
      "view",
      "with",
      "yield"
    ]
  };
  const LITERALS3 = {
    $pattern: /[\w.\/]+/,
    literal: [
      "true",
      "false",
      "undefined",
      "null"
    ]
  };
  const DOUBLE_QUOTED_ID_REGEX = /""|"[^"]+"/;
  const SINGLE_QUOTED_ID_REGEX = /''|'[^']+'/;
  const BRACKET_QUOTED_ID_REGEX = /\[\]|\[[^\]]+\]/;
  const PLAIN_ID_REGEX = /[^\s!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]+/;
  const PATH_DELIMITER_REGEX = /(\.|\/)/;
  const ANY_ID = regex2.either(
    DOUBLE_QUOTED_ID_REGEX,
    SINGLE_QUOTED_ID_REGEX,
    BRACKET_QUOTED_ID_REGEX,
    PLAIN_ID_REGEX
  );
  const IDENTIFIER_REGEX = regex2.concat(
    regex2.optional(/\.|\.\/|\//),
    // relative or absolute path
    ANY_ID,
    regex2.anyNumberOfTimes(regex2.concat(
      PATH_DELIMITER_REGEX,
      ANY_ID
    ))
  );
  const HASH_PARAM_REGEX = regex2.concat(
    "(",
    BRACKET_QUOTED_ID_REGEX,
    "|",
    PLAIN_ID_REGEX,
    ")(?==)"
  );
  const HELPER_NAME_OR_PATH_EXPRESSION = { begin: IDENTIFIER_REGEX };
  const HELPER_PARAMETER = hljs2.inherit(HELPER_NAME_OR_PATH_EXPRESSION, { keywords: LITERALS3 });
  const SUB_EXPRESSION = {
    begin: /\(/,
    end: /\)/
    // the "contains" is added below when all necessary sub-modes are defined
  };
  const HASH = {
    // fka "attribute-assignment", parameters of the form 'key=value'
    className: "attr",
    begin: HASH_PARAM_REGEX,
    relevance: 0,
    starts: {
      begin: /=/,
      end: /=/,
      starts: { contains: [
        hljs2.NUMBER_MODE,
        hljs2.QUOTE_STRING_MODE,
        hljs2.APOS_STRING_MODE,
        HELPER_PARAMETER,
        SUB_EXPRESSION
      ] }
    }
  };
  const BLOCK_PARAMS = {
    // parameters of the form '{{#with x as | y |}}...{{/with}}'
    begin: /as\s+\|/,
    keywords: { keyword: "as" },
    end: /\|/,
    contains: [
      {
        // define sub-mode in order to prevent highlighting of block-parameter named "as"
        begin: /\w+/
      }
    ]
  };
  const HELPER_PARAMETERS = {
    contains: [
      hljs2.NUMBER_MODE,
      hljs2.QUOTE_STRING_MODE,
      hljs2.APOS_STRING_MODE,
      BLOCK_PARAMS,
      HASH,
      HELPER_PARAMETER,
      SUB_EXPRESSION
    ],
    returnEnd: true
    // the property "end" is defined through inheritance when the mode is used. If depends
    // on the surrounding mode, but "endsWithParent" does not work here (i.e. it includes the
    // end-token of the surrounding mode)
  };
  const SUB_EXPRESSION_CONTENTS = hljs2.inherit(HELPER_NAME_OR_PATH_EXPRESSION, {
    className: "name",
    keywords: BUILT_INS3,
    starts: hljs2.inherit(HELPER_PARAMETERS, { end: /\)/ })
  });
  SUB_EXPRESSION.contains = [SUB_EXPRESSION_CONTENTS];
  const OPENING_BLOCK_MUSTACHE_CONTENTS = hljs2.inherit(HELPER_NAME_OR_PATH_EXPRESSION, {
    keywords: BUILT_INS3,
    className: "name",
    starts: hljs2.inherit(HELPER_PARAMETERS, { end: /\}\}/ })
  });
  const CLOSING_BLOCK_MUSTACHE_CONTENTS = hljs2.inherit(HELPER_NAME_OR_PATH_EXPRESSION, {
    keywords: BUILT_INS3,
    className: "name"
  });
  const BASIC_MUSTACHE_CONTENTS = hljs2.inherit(HELPER_NAME_OR_PATH_EXPRESSION, {
    className: "name",
    keywords: BUILT_INS3,
    starts: hljs2.inherit(HELPER_PARAMETERS, { end: /\}\}/ })
  });
  const ESCAPE_MUSTACHE_WITH_PRECEEDING_BACKSLASH = {
    begin: /\\\{\{/,
    skip: true
  };
  const PREVENT_ESCAPE_WITH_ANOTHER_PRECEEDING_BACKSLASH = {
    begin: /\\\\(?=\{\{)/,
    skip: true
  };
  return {
    name: "Handlebars",
    aliases: [
      "hbs",
      "html.hbs",
      "html.handlebars",
      "htmlbars"
    ],
    case_insensitive: true,
    subLanguage: "xml",
    contains: [
      ESCAPE_MUSTACHE_WITH_PRECEEDING_BACKSLASH,
      PREVENT_ESCAPE_WITH_ANOTHER_PRECEEDING_BACKSLASH,
      hljs2.COMMENT(/\{\{!--/, /--\}\}/),
      hljs2.COMMENT(/\{\{!/, /\}\}/),
      {
        // open raw block "{{{{raw}}}} content not evaluated {{{{/raw}}}}"
        className: "template-tag",
        begin: /\{\{\{\{(?!\/)/,
        end: /\}\}\}\}/,
        contains: [OPENING_BLOCK_MUSTACHE_CONTENTS],
        starts: {
          end: /\{\{\{\{\//,
          returnEnd: true,
          subLanguage: "xml"
        }
      },
      {
        // close raw block
        className: "template-tag",
        begin: /\{\{\{\{\//,
        end: /\}\}\}\}/,
        contains: [CLOSING_BLOCK_MUSTACHE_CONTENTS]
      },
      {
        // open block statement
        className: "template-tag",
        begin: /\{\{#/,
        end: /\}\}/,
        contains: [OPENING_BLOCK_MUSTACHE_CONTENTS]
      },
      {
        className: "template-tag",
        begin: /\{\{(?=else\}\})/,
        end: /\}\}/,
        keywords: "else"
      },
      {
        className: "template-tag",
        begin: /\{\{(?=else if)/,
        end: /\}\}/,
        keywords: "else if"
      },
      {
        // closing block statement
        className: "template-tag",
        begin: /\{\{\//,
        end: /\}\}/,
        contains: [CLOSING_BLOCK_MUSTACHE_CONTENTS]
      },
      {
        // template variable or helper-call that is NOT html-escaped
        className: "template-variable",
        begin: /\{\{\{/,
        end: /\}\}\}/,
        contains: [BASIC_MUSTACHE_CONTENTS]
      },
      {
        // template variable or helper-call that is html-escaped
        className: "template-variable",
        begin: /\{\{/,
        end: /\}\}/,
        contains: [BASIC_MUSTACHE_CONTENTS]
      }
    ]
  };
}

// node_modules/highlight.js/es/languages/haskell.js
function haskell(hljs2) {
  const decimalDigits3 = "([0-9]_*)+";
  const hexDigits3 = "([0-9a-fA-F]_*)+";
  const binaryDigits = "([01]_*)+";
  const octalDigits = "([0-7]_*)+";
  const ascSymbol = "[!#$%&*+.\\/<=>?@\\\\^~-]";
  const uniSymbol = "(\\p{S}|\\p{P})";
  const special = "[(),;\\[\\]`|{}]";
  const symbol = `(${ascSymbol}|(?!(${special}|[_:"']))${uniSymbol})`;
  const COMMENT = { variants: [
    // Double dash forms a valid comment only if it's not part of legal lexeme.
    // See: Haskell 98 report: https://www.haskell.org/onlinereport/lexemes.html
    //
    // The commented code does the job, but we can't use negative lookbehind,
    // due to poor support by Safari browser.
    // > hljs.COMMENT(`(?<!${symbol})--+(?!${symbol})`, '$'),
    // So instead, we'll add a no-markup rule before the COMMENT rule in the rules list
    // to match the problematic infix operators that contain double dash.
    hljs2.COMMENT("--+", "$"),
    hljs2.COMMENT(
      /\{-/,
      /-\}/,
      { contains: ["self"] }
    )
  ] };
  const PRAGMA = {
    className: "meta",
    begin: /\{-#/,
    end: /#-\}/
  };
  const PREPROCESSOR = {
    className: "meta",
    begin: "^#",
    end: "$"
  };
  const CONSTRUCTOR = {
    className: "type",
    begin: "\\b[A-Z][\\w']*",
    // TODO: other constructors (build-in, infix).
    relevance: 0
  };
  const LIST = {
    begin: "\\(",
    end: "\\)",
    illegal: '"',
    contains: [
      PRAGMA,
      PREPROCESSOR,
      {
        className: "type",
        begin: "\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?"
      },
      hljs2.inherit(hljs2.TITLE_MODE, { begin: "[_a-z][\\w']*" }),
      COMMENT
    ]
  };
  const RECORD = {
    begin: /\{/,
    end: /\}/,
    contains: LIST.contains
  };
  const NUMBER = {
    className: "number",
    relevance: 0,
    variants: [
      // decimal floating-point-literal (subsumes decimal-literal)
      { match: `\\b(${decimalDigits3})(\\.(${decimalDigits3}))?([eE][+-]?(${decimalDigits3}))?\\b` },
      // hexadecimal floating-point-literal (subsumes hexadecimal-literal)
      { match: `\\b0[xX]_*(${hexDigits3})(\\.(${hexDigits3}))?([pP][+-]?(${decimalDigits3}))?\\b` },
      // octal-literal
      { match: `\\b0[oO](${octalDigits})\\b` },
      // binary-literal
      { match: `\\b0[bB](${binaryDigits})\\b` }
    ]
  };
  return {
    name: "Haskell",
    aliases: ["hs"],
    keywords: "let in if then else case of where do module import hiding qualified type data newtype deriving class instance as default infix infixl infixr foreign export ccall stdcall cplusplus jvm dotnet safe unsafe family forall mdo proc rec",
    unicodeRegex: true,
    contains: [
      // Top-level constructions.
      {
        beginKeywords: "module",
        end: "where",
        keywords: "module where",
        contains: [
          LIST,
          COMMENT
        ],
        illegal: "\\W\\.|;"
      },
      {
        begin: "\\bimport\\b",
        end: "$",
        keywords: "import qualified as hiding",
        contains: [
          LIST,
          COMMENT
        ],
        illegal: "\\W\\.|;"
      },
      {
        className: "class",
        begin: "^(\\s*)?(class|instance)\\b",
        end: "where",
        keywords: "class family instance where",
        contains: [
          CONSTRUCTOR,
          LIST,
          COMMENT
        ]
      },
      {
        className: "class",
        begin: "\\b(data|(new)?type)\\b",
        end: "$",
        keywords: "data family type newtype deriving",
        contains: [
          PRAGMA,
          CONSTRUCTOR,
          LIST,
          RECORD,
          COMMENT
        ]
      },
      {
        beginKeywords: "default",
        end: "$",
        contains: [
          CONSTRUCTOR,
          LIST,
          COMMENT
        ]
      },
      {
        beginKeywords: "infix infixl infixr",
        end: "$",
        contains: [
          hljs2.C_NUMBER_MODE,
          COMMENT
        ]
      },
      {
        begin: "\\bforeign\\b",
        end: "$",
        keywords: "foreign import export ccall stdcall cplusplus jvm dotnet safe unsafe",
        contains: [
          CONSTRUCTOR,
          hljs2.QUOTE_STRING_MODE,
          COMMENT
        ]
      },
      {
        className: "meta",
        begin: "#!\\/usr\\/bin\\/env runhaskell",
        end: "$"
      },
      // "Whitespaces".
      PRAGMA,
      PREPROCESSOR,
      // Literals and names.
      // Single characters.
      {
        scope: "string",
        begin: /'(?=\\?.')/,
        end: /'/,
        contains: [
          {
            scope: "char.escape",
            match: /\\./
          }
        ]
      },
      hljs2.QUOTE_STRING_MODE,
      NUMBER,
      CONSTRUCTOR,
      hljs2.inherit(hljs2.TITLE_MODE, { begin: "^[_a-z][\\w']*" }),
      // No markup, prevents infix operators from being recognized as comments.
      { begin: `(?!-)${symbol}--+|--+(?!-)${symbol}` },
      COMMENT,
      {
        // No markup, relevance booster
        begin: "->|<-"
      }
    ]
  };
}

// node_modules/highlight.js/es/languages/ini.js
function ini(hljs2) {
  const regex2 = hljs2.regex;
  const NUMBERS = {
    className: "number",
    relevance: 0,
    variants: [
      { begin: /([+-]+)?[\d]+_[\d_]+/ },
      { begin: hljs2.NUMBER_RE }
    ]
  };
  const COMMENTS = hljs2.COMMENT();
  COMMENTS.variants = [
    {
      begin: /;/,
      end: /$/
    },
    {
      begin: /#/,
      end: /$/
    }
  ];
  const VARIABLES = {
    className: "variable",
    variants: [
      { begin: /\$[\w\d"][\w\d_]*/ },
      { begin: /\$\{(.*?)\}/ }
    ]
  };
  const LITERALS3 = {
    className: "literal",
    begin: /\bon|off|true|false|yes|no\b/
  };
  const STRINGS = {
    className: "string",
    contains: [hljs2.BACKSLASH_ESCAPE],
    variants: [
      {
        begin: "'''",
        end: "'''",
        relevance: 10
      },
      {
        begin: '"""',
        end: '"""',
        relevance: 10
      },
      {
        begin: '"',
        end: '"'
      },
      {
        begin: "'",
        end: "'"
      }
    ]
  };
  const ARRAY = {
    begin: /\[/,
    end: /\]/,
    contains: [
      COMMENTS,
      LITERALS3,
      VARIABLES,
      STRINGS,
      NUMBERS,
      "self"
    ],
    relevance: 0
  };
  const BARE_KEY = /[A-Za-z0-9_-]+/;
  const QUOTED_KEY_DOUBLE_QUOTE = /"(\\"|[^"])*"/;
  const QUOTED_KEY_SINGLE_QUOTE = /'[^']*'/;
  const ANY_KEY = regex2.either(
    BARE_KEY,
    QUOTED_KEY_DOUBLE_QUOTE,
    QUOTED_KEY_SINGLE_QUOTE
  );
  const DOTTED_KEY = regex2.concat(
    ANY_KEY,
    "(\\s*\\.\\s*",
    ANY_KEY,
    ")*",
    regex2.lookahead(/\s*=\s*[^#\s]/)
  );
  return {
    name: "TOML, also INI",
    aliases: ["toml"],
    case_insensitive: true,
    illegal: /\S/,
    contains: [
      COMMENTS,
      {
        className: "section",
        begin: /\[+/,
        end: /\]+/
      },
      {
        begin: DOTTED_KEY,
        className: "attr",
        starts: {
          end: /$/,
          contains: [
            COMMENTS,
            ARRAY,
            LITERALS3,
            VARIABLES,
            STRINGS,
            NUMBERS
          ]
        }
      }
    ]
  };
}

// node_modules/highlight.js/es/languages/java.js
var decimalDigits = "[0-9](_*[0-9])*";
var frac = `\\.(${decimalDigits})`;
var hexDigits = "[0-9a-fA-F](_*[0-9a-fA-F])*";
var NUMERIC = {
  className: "number",
  variants: [
    // DecimalFloatingPointLiteral
    // including ExponentPart
    { begin: `(\\b(${decimalDigits})((${frac})|\\.)?|(${frac}))[eE][+-]?(${decimalDigits})[fFdD]?\\b` },
    // excluding ExponentPart
    { begin: `\\b(${decimalDigits})((${frac})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
    { begin: `(${frac})[fFdD]?\\b` },
    { begin: `\\b(${decimalDigits})[fFdD]\\b` },
    // HexadecimalFloatingPointLiteral
    { begin: `\\b0[xX]((${hexDigits})\\.?|(${hexDigits})?\\.(${hexDigits}))[pP][+-]?(${decimalDigits})[fFdD]?\\b` },
    // DecimalIntegerLiteral
    { begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" },
    // HexIntegerLiteral
    { begin: `\\b0[xX](${hexDigits})[lL]?\\b` },
    // OctalIntegerLiteral
    { begin: "\\b0(_*[0-7])*[lL]?\\b" },
    // BinaryIntegerLiteral
    { begin: "\\b0[bB][01](_*[01])*[lL]?\\b" }
  ],
  relevance: 0
};
function recurRegex(re, substitution, depth) {
  if (depth === -1) return "";
  return re.replace(substitution, (_) => {
    return recurRegex(re, substitution, depth - 1);
  });
}
function java(hljs2) {
  const regex2 = hljs2.regex;
  const JAVA_IDENT_RE = "[\xC0-\u02B8a-zA-Z_$][\xC0-\u02B8a-zA-Z_$0-9]*";
  const GENERIC_IDENT_RE = JAVA_IDENT_RE + recurRegex("(?:<" + JAVA_IDENT_RE + "~~~(?:\\s*,\\s*" + JAVA_IDENT_RE + "~~~)*>)?", /~~~/g, 2);
  const MAIN_KEYWORDS = [
    "synchronized",
    "abstract",
    "private",
    "var",
    "static",
    "if",
    "const ",
    "for",
    "while",
    "strictfp",
    "finally",
    "protected",
    "import",
    "native",
    "final",
    "void",
    "enum",
    "else",
    "break",
    "transient",
    "catch",
    "instanceof",
    "volatile",
    "case",
    "assert",
    "package",
    "default",
    "public",
    "try",
    "switch",
    "continue",
    "throws",
    "protected",
    "public",
    "private",
    "module",
    "requires",
    "exports",
    "do",
    "sealed",
    "yield",
    "permits",
    "goto",
    "when"
  ];
  const BUILT_INS3 = [
    "super",
    "this"
  ];
  const LITERALS3 = [
    "false",
    "true",
    "null"
  ];
  const TYPES3 = [
    "char",
    "boolean",
    "long",
    "float",
    "int",
    "byte",
    "short",
    "double"
  ];
  const KEYWORDS3 = {
    keyword: MAIN_KEYWORDS,
    literal: LITERALS3,
    type: TYPES3,
    built_in: BUILT_INS3
  };
  const ANNOTATION = {
    className: "meta",
    begin: "@" + JAVA_IDENT_RE,
    contains: [
      {
        begin: /\(/,
        end: /\)/,
        contains: ["self"]
        // allow nested () inside our annotation
      }
    ]
  };
  const PARAMS = {
    className: "params",
    begin: /\(/,
    end: /\)/,
    keywords: KEYWORDS3,
    relevance: 0,
    contains: [hljs2.C_BLOCK_COMMENT_MODE],
    endsParent: true
  };
  return {
    name: "Java",
    aliases: ["jsp"],
    keywords: KEYWORDS3,
    illegal: /<\/|#/,
    contains: [
      hljs2.COMMENT(
        "/\\*\\*",
        "\\*/",
        {
          relevance: 0,
          contains: [
            {
              // eat up @'s in emails to prevent them to be recognized as doctags
              begin: /\w+@/,
              relevance: 0
            },
            {
              className: "doctag",
              begin: "@[A-Za-z]+"
            }
          ]
        }
      ),
      // relevance boost
      {
        begin: /import java\.[a-z]+\./,
        keywords: "import",
        relevance: 2
      },
      hljs2.C_LINE_COMMENT_MODE,
      hljs2.C_BLOCK_COMMENT_MODE,
      {
        begin: /"""/,
        end: /"""/,
        className: "string",
        contains: [hljs2.BACKSLASH_ESCAPE]
      },
      hljs2.APOS_STRING_MODE,
      hljs2.QUOTE_STRING_MODE,
      {
        match: [
          /\b(?:class|interface|enum|extends|implements|new)/,
          /\s+/,
          JAVA_IDENT_RE
        ],
        className: {
          1: "keyword",
          3: "title.class"
        }
      },
      {
        // Exceptions for hyphenated keywords
        match: /non-sealed/,
        scope: "keyword"
      },
      {
        begin: [
          regex2.concat(/(?!else)/, JAVA_IDENT_RE),
          /\s+/,
          JAVA_IDENT_RE,
          /\s+/,
          /=(?!=)/
        ],
        className: {
          1: "type",
          3: "variable",
          5: "operator"
        }
      },
      {
        begin: [
          /record/,
          /\s+/,
          JAVA_IDENT_RE
        ],
        className: {
          1: "keyword",
          3: "title.class"
        },
        contains: [
          PARAMS,
          hljs2.C_LINE_COMMENT_MODE,
          hljs2.C_BLOCK_COMMENT_MODE
        ]
      },
      {
        // Expression keywords prevent 'keyword Name(...)' from being
        // recognized as a function definition
        beginKeywords: "new throw return else",
        relevance: 0
      },
      {
        begin: [
          "(?:" + GENERIC_IDENT_RE + "\\s+)",
          hljs2.UNDERSCORE_IDENT_RE,
          /\s*(?=\()/
        ],
        className: { 2: "title.function" },
        keywords: KEYWORDS3,
        contains: [
          {
            className: "params",
            begin: /\(/,
            end: /\)/,
            keywords: KEYWORDS3,
            relevance: 0,
            contains: [
              ANNOTATION,
              hljs2.APOS_STRING_MODE,
              hljs2.QUOTE_STRING_MODE,
              NUMERIC,
              hljs2.C_BLOCK_COMMENT_MODE
            ]
          },
          hljs2.C_LINE_COMMENT_MODE,
          hljs2.C_BLOCK_COMMENT_MODE
        ]
      },
      NUMERIC,
      ANNOTATION
    ]
  };
}

// node_modules/highlight.js/es/languages/javascript.js
var IDENT_RE = "[A-Za-z$_][0-9A-Za-z$_]*";
var KEYWORDS = [
  "as",
  // for exports
  "in",
  "of",
  "if",
  "for",
  "while",
  "finally",
  "var",
  "new",
  "function",
  "do",
  "return",
  "void",
  "else",
  "break",
  "catch",
  "instanceof",
  "with",
  "throw",
  "case",
  "default",
  "try",
  "switch",
  "continue",
  "typeof",
  "delete",
  "let",
  "yield",
  "const",
  "class",
  // JS handles these with a special rule
  // "get",
  // "set",
  "debugger",
  "async",
  "await",
  "static",
  "import",
  "from",
  "export",
  "extends",
  // It's reached stage 3, which is "recommended for implementation":
  "using"
];
var LITERALS = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
];
var TYPES = [
  // Fundamental objects
  "Object",
  "Function",
  "Boolean",
  "Symbol",
  // numbers and dates
  "Math",
  "Date",
  "Number",
  "BigInt",
  // text
  "String",
  "RegExp",
  // Indexed collections
  "Array",
  "Float32Array",
  "Float64Array",
  "Int8Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Int16Array",
  "Int32Array",
  "Uint16Array",
  "Uint32Array",
  "BigInt64Array",
  "BigUint64Array",
  // Keyed collections
  "Set",
  "Map",
  "WeakSet",
  "WeakMap",
  // Structured data
  "ArrayBuffer",
  "SharedArrayBuffer",
  "Atomics",
  "DataView",
  "JSON",
  // Control abstraction objects
  "Promise",
  "Generator",
  "GeneratorFunction",
  "AsyncFunction",
  // Reflection
  "Reflect",
  "Proxy",
  // Internationalization
  "Intl",
  // WebAssembly
  "WebAssembly"
];
var ERROR_TYPES = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
];
var BUILT_IN_GLOBALS = [
  "setInterval",
  "setTimeout",
  "clearInterval",
  "clearTimeout",
  "require",
  "exports",
  "eval",
  "isFinite",
  "isNaN",
  "parseFloat",
  "parseInt",
  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "escape",
  "unescape"
];
var BUILT_IN_VARIABLES = [
  "arguments",
  "this",
  "super",
  "console",
  "window",
  "document",
  "localStorage",
  "sessionStorage",
  "module",
  "global"
  // Node.js
];
var BUILT_INS = [].concat(
  BUILT_IN_GLOBALS,
  TYPES,
  ERROR_TYPES
);
function javascript(hljs2) {
  const regex2 = hljs2.regex;
  const hasClosingTag = (match, { after }) => {
    const tag2 = "</" + match[0].slice(1);
    const pos = match.input.indexOf(tag2, after);
    return pos !== -1;
  };
  const IDENT_RE$1 = IDENT_RE;
  const FRAGMENT = {
    begin: "<>",
    end: "</>"
  };
  const XML_SELF_CLOSING = /<[A-Za-z0-9\\._:-]+\s*\/>/;
  const XML_TAG = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (match, response) => {
      const afterMatchIndex = match[0].length + match.index;
      const nextChar = match.input[afterMatchIndex];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        nextChar === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        nextChar === ","
      ) {
        response.ignoreMatch();
        return;
      }
      if (nextChar === ">") {
        if (!hasClosingTag(match, { after: afterMatchIndex })) {
          response.ignoreMatch();
        }
      }
      let m;
      const afterMatch = match.input.substring(afterMatchIndex);
      if (m = afterMatch.match(/^\s*=/)) {
        response.ignoreMatch();
        return;
      }
      if (m = afterMatch.match(/^\s+extends\s+/)) {
        if (m.index === 0) {
          response.ignoreMatch();
          return;
        }
      }
    }
  };
  const KEYWORDS$1 = {
    $pattern: IDENT_RE,
    keyword: KEYWORDS,
    literal: LITERALS,
    built_in: BUILT_INS,
    "variable.language": BUILT_IN_VARIABLES
  };
  const decimalDigits3 = "[0-9](_?[0-9])*";
  const frac3 = `\\.(${decimalDigits3})`;
  const decimalInteger = `0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*`;
  const NUMBER = {
    className: "number",
    variants: [
      // DecimalLiteral
      { begin: `(\\b(${decimalInteger})((${frac3})|\\.)?|(${frac3}))[eE][+-]?(${decimalDigits3})\\b` },
      { begin: `\\b(${decimalInteger})\\b((${frac3})\\b|\\.)?|(${frac3})\\b` },
      // DecimalBigIntegerLiteral
      { begin: `\\b(0|[1-9](_?[0-9])*)n\\b` },
      // NonDecimalIntegerLiteral
      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
      { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
      { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
      // LegacyOctalIntegerLiteral (does not include underscore separators)
      // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
      { begin: "\\b0[0-7]+n?\\b" }
    ],
    relevance: 0
  };
  const SUBST = {
    className: "subst",
    begin: "\\$\\{",
    end: "\\}",
    keywords: KEYWORDS$1,
    contains: []
    // defined later
  };
  const HTML_TEMPLATE = {
    begin: ".?html`",
    end: "",
    starts: {
      end: "`",
      returnEnd: false,
      contains: [
        hljs2.BACKSLASH_ESCAPE,
        SUBST
      ],
      subLanguage: "xml"
    }
  };
  const CSS_TEMPLATE = {
    begin: ".?css`",
    end: "",
    starts: {
      end: "`",
      returnEnd: false,
      contains: [
        hljs2.BACKSLASH_ESCAPE,
        SUBST
      ],
      subLanguage: "css"
    }
  };
  const GRAPHQL_TEMPLATE = {
    begin: ".?gql`",
    end: "",
    starts: {
      end: "`",
      returnEnd: false,
      contains: [
        hljs2.BACKSLASH_ESCAPE,
        SUBST
      ],
      subLanguage: "graphql"
    }
  };
  const TEMPLATE_STRING = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      hljs2.BACKSLASH_ESCAPE,
      SUBST
    ]
  };
  const JSDOC_COMMENT = hljs2.COMMENT(
    /\/\*\*(?!\/)/,
    "\\*/",
    {
      relevance: 0,
      contains: [
        {
          begin: "(?=@[A-Za-z]+)",
          relevance: 0,
          contains: [
            {
              className: "doctag",
              begin: "@[A-Za-z]+"
            },
            {
              className: "type",
              begin: "\\{",
              end: "\\}",
              excludeEnd: true,
              excludeBegin: true,
              relevance: 0
            },
            {
              className: "variable",
              begin: IDENT_RE$1 + "(?=\\s*(-)|$)",
              endsParent: true,
              relevance: 0
            },
            // eat spaces (not newlines) so we can find
            // types or variables
            {
              begin: /(?=[^\n])\s/,
              relevance: 0
            }
          ]
        }
      ]
    }
  );
  const COMMENT = {
    className: "comment",
    variants: [
      JSDOC_COMMENT,
      hljs2.C_BLOCK_COMMENT_MODE,
      hljs2.C_LINE_COMMENT_MODE
    ]
  };
  const SUBST_INTERNALS = [
    hljs2.APOS_STRING_MODE,
    hljs2.QUOTE_STRING_MODE,
    HTML_TEMPLATE,
    CSS_TEMPLATE,
    GRAPHQL_TEMPLATE,
    TEMPLATE_STRING,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    NUMBER
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  SUBST.contains = SUBST_INTERNALS.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: KEYWORDS$1,
    contains: [
      "self"
    ].concat(SUBST_INTERNALS)
  });
  const SUBST_AND_COMMENTS = [].concat(COMMENT, SUBST.contains);
  const PARAMS_CONTAINS = SUBST_AND_COMMENTS.concat([
    // eat recursive parens in sub expressions
    {
      begin: /(\s*)\(/,
      end: /\)/,
      keywords: KEYWORDS$1,
      contains: ["self"].concat(SUBST_AND_COMMENTS)
    }
  ]);
  const PARAMS = {
    className: "params",
    // convert this to negative lookbehind in v12
    begin: /(\s*)\(/,
    // to match the parms with
    end: /\)/,
    excludeBegin: true,
    excludeEnd: true,
    keywords: KEYWORDS$1,
    contains: PARAMS_CONTAINS
  };
  const CLASS_OR_EXTENDS = {
    variants: [
      // class Car extends vehicle
      {
        match: [
          /class/,
          /\s+/,
          IDENT_RE$1,
          /\s+/,
          /extends/,
          /\s+/,
          regex2.concat(IDENT_RE$1, "(", regex2.concat(/\./, IDENT_RE$1), ")*")
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          5: "keyword",
          7: "title.class.inherited"
        }
      },
      // class Car
      {
        match: [
          /class/,
          /\s+/,
          IDENT_RE$1
        ],
        scope: {
          1: "keyword",
          3: "title.class"
        }
      }
    ]
  };
  const CLASS_REFERENCE = {
    relevance: 0,
    match: regex2.either(
      // Hard coded exceptions
      /\bJSON/,
      // Float32Array, OutT
      /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
      // CSSFactory, CSSFactoryT
      /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
      // FPs, FPsT
      /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
      // P
      // single letters are not highlighted
      // BLAH
      // this will be flagged as a UPPER_CASE_CONSTANT instead
    ),
    className: "title.class",
    keywords: {
      _: [
        // se we still get relevance credit for JS library classes
        ...TYPES,
        ...ERROR_TYPES
      ]
    }
  };
  const USE_STRICT = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  };
  const FUNCTION_DEFINITION = {
    variants: [
      {
        match: [
          /function/,
          /\s+/,
          IDENT_RE$1,
          /(?=\s*\()/
        ]
      },
      // anonymous function
      {
        match: [
          /function/,
          /\s*(?=\()/
        ]
      }
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    label: "func.def",
    contains: [PARAMS],
    illegal: /%/
  };
  const UPPER_CASE_CONSTANT = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function noneOf(list) {
    return regex2.concat("(?!", list.join("|"), ")");
  }
  const FUNCTION_CALL = {
    match: regex2.concat(
      /\b/,
      noneOf([
        ...BUILT_IN_GLOBALS,
        "super",
        "import"
      ].map((x) => `${x}\\s*\\(`)),
      IDENT_RE$1,
      regex2.lookahead(/\s*\(/)
    ),
    className: "title.function",
    relevance: 0
  };
  const PROPERTY_ACCESS = {
    begin: regex2.concat(/\./, regex2.lookahead(
      regex2.concat(IDENT_RE$1, /(?![0-9A-Za-z$_(])/)
    )),
    end: IDENT_RE$1,
    excludeBegin: true,
    keywords: "prototype",
    className: "property",
    relevance: 0
  };
  const GETTER_OR_SETTER = {
    match: [
      /get|set/,
      /\s+/,
      IDENT_RE$1,
      /(?=\()/
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      {
        // eat to avoid empty params
        begin: /\(\)/
      },
      PARAMS
    ]
  };
  const FUNC_LEAD_IN_RE = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + hljs2.UNDERSCORE_IDENT_RE + ")\\s*=>";
  const FUNCTION_VARIABLE = {
    match: [
      /const|var|let/,
      /\s+/,
      IDENT_RE$1,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      regex2.lookahead(FUNC_LEAD_IN_RE)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      PARAMS
    ]
  };
  return {
    name: "JavaScript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: KEYWORDS$1,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS, CLASS_REFERENCE },
    illegal: /#(?![$_A-z])/,
    contains: [
      hljs2.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      USE_STRICT,
      hljs2.APOS_STRING_MODE,
      hljs2.QUOTE_STRING_MODE,
      HTML_TEMPLATE,
      CSS_TEMPLATE,
      GRAPHQL_TEMPLATE,
      TEMPLATE_STRING,
      COMMENT,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      NUMBER,
      CLASS_REFERENCE,
      {
        scope: "attr",
        match: IDENT_RE$1 + regex2.lookahead(":"),
        relevance: 0
      },
      FUNCTION_VARIABLE,
      {
        // "value" container
        begin: "(" + hljs2.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          COMMENT,
          hljs2.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: FUNC_LEAD_IN_RE,
            returnBegin: true,
            end: "\\s*=>",
            contains: [
              {
                className: "params",
                variants: [
                  {
                    begin: hljs2.UNDERSCORE_IDENT_RE,
                    relevance: 0
                  },
                  {
                    className: null,
                    begin: /\(\s*\)/,
                    skip: true
                  },
                  {
                    begin: /(\s*)\(/,
                    end: /\)/,
                    excludeBegin: true,
                    excludeEnd: true,
                    keywords: KEYWORDS$1,
                    contains: PARAMS_CONTAINS
                  }
                ]
              }
            ]
          },
          {
            // could be a comma delimited list of params to a function call
            begin: /,/,
            relevance: 0
          },
          {
            match: /\s+/,
            relevance: 0
          },
          {
            // JSX
            variants: [
              { begin: FRAGMENT.begin, end: FRAGMENT.end },
              { match: XML_SELF_CLOSING },
              {
                begin: XML_TAG.begin,
                // we carefully check the opening tag to see if it truly
                // is a tag and not a false positive
                "on:begin": XML_TAG.isTrulyOpeningTag,
                end: XML_TAG.end
              }
            ],
            subLanguage: "xml",
            contains: [
              {
                begin: XML_TAG.begin,
                end: XML_TAG.end,
                skip: true,
                contains: ["self"]
              }
            ]
          }
        ]
      },
      FUNCTION_DEFINITION,
      {
        // prevent this from getting swallowed up by function
        // since they appear "function like"
        beginKeywords: "while if switch catch for"
      },
      {
        // we have to count the parens to make sure we actually have the correct
        // bounding ( ).  There could be any number of sub-expressions inside
        // also surrounded by parens.
        begin: "\\b(?!function)" + hljs2.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        // end parens
        returnBegin: true,
        label: "func.def",
        contains: [
          PARAMS,
          hljs2.inherit(hljs2.TITLE_MODE, { begin: IDENT_RE$1, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      PROPERTY_ACCESS,
      // hack: prevents detection of keywords in some circumstances
      // .keyword()
      // $keyword = x
      {
        match: "\\$" + IDENT_RE$1,
        relevance: 0
      },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: "title.function" },
        contains: [PARAMS]
      },
      FUNCTION_CALL,
      UPPER_CASE_CONSTANT,
      CLASS_OR_EXTENDS,
      GETTER_OR_SETTER,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}

// node_modules/highlight.js/es/languages/json.js
function json(hljs2) {
  const ATTRIBUTE = {
    className: "attr",
    begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/,
    relevance: 1.01
  };
  const PUNCTUATION = {
    match: /[{}[\],:]/,
    className: "punctuation",
    relevance: 0
  };
  const LITERALS3 = [
    "true",
    "false",
    "null"
  ];
  const LITERALS_MODE = {
    scope: "literal",
    beginKeywords: LITERALS3.join(" ")
  };
  return {
    name: "JSON",
    aliases: ["jsonc"],
    keywords: {
      literal: LITERALS3
    },
    contains: [
      ATTRIBUTE,
      PUNCTUATION,
      hljs2.QUOTE_STRING_MODE,
      LITERALS_MODE,
      hljs2.C_NUMBER_MODE,
      hljs2.C_LINE_COMMENT_MODE,
      hljs2.C_BLOCK_COMMENT_MODE
    ],
    illegal: "\\S"
  };
}

// node_modules/highlight.js/es/languages/kotlin.js
var decimalDigits2 = "[0-9](_*[0-9])*";
var frac2 = `\\.(${decimalDigits2})`;
var hexDigits2 = "[0-9a-fA-F](_*[0-9a-fA-F])*";
var NUMERIC2 = {
  className: "number",
  variants: [
    // DecimalFloatingPointLiteral
    // including ExponentPart
    { begin: `(\\b(${decimalDigits2})((${frac2})|\\.)?|(${frac2}))[eE][+-]?(${decimalDigits2})[fFdD]?\\b` },
    // excluding ExponentPart
    { begin: `\\b(${decimalDigits2})((${frac2})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
    { begin: `(${frac2})[fFdD]?\\b` },
    { begin: `\\b(${decimalDigits2})[fFdD]\\b` },
    // HexadecimalFloatingPointLiteral
    { begin: `\\b0[xX]((${hexDigits2})\\.?|(${hexDigits2})?\\.(${hexDigits2}))[pP][+-]?(${decimalDigits2})[fFdD]?\\b` },
    // DecimalIntegerLiteral
    { begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" },
    // HexIntegerLiteral
    { begin: `\\b0[xX](${hexDigits2})[lL]?\\b` },
    // OctalIntegerLiteral
    { begin: "\\b0(_*[0-7])*[lL]?\\b" },
    // BinaryIntegerLiteral
    { begin: "\\b0[bB][01](_*[01])*[lL]?\\b" }
  ],
  relevance: 0
};
function kotlin(hljs2) {
  const KEYWORDS3 = {
    keyword: "abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual",
    built_in: "Byte Short Char Int Long Boolean Float Double Void Unit Nothing",
    literal: "true false null"
  };
  const KEYWORDS_WITH_LABEL = {
    className: "keyword",
    begin: /\b(break|continue|return|this)\b/,
    starts: { contains: [
      {
        className: "symbol",
        begin: /@\w+/
      }
    ] }
  };
  const LABEL = {
    className: "symbol",
    begin: hljs2.UNDERSCORE_IDENT_RE + "@"
  };
  const SUBST = {
    className: "subst",
    begin: /\$\{/,
    end: /\}/,
    contains: [hljs2.C_NUMBER_MODE]
  };
  const VARIABLE = {
    className: "variable",
    begin: "\\$" + hljs2.UNDERSCORE_IDENT_RE
  };
  const STRING = {
    className: "string",
    variants: [
      {
        begin: '"""',
        end: '"""(?=[^"])',
        contains: [
          VARIABLE,
          SUBST
        ]
      },
      // Can't use built-in modes easily, as we want to use STRING in the meta
      // context as 'meta-string' and there's no syntax to remove explicitly set
      // classNames in built-in modes.
      {
        begin: "'",
        end: "'",
        illegal: /\n/,
        contains: [hljs2.BACKSLASH_ESCAPE]
      },
      {
        begin: '"',
        end: '"',
        illegal: /\n/,
        contains: [
          hljs2.BACKSLASH_ESCAPE,
          VARIABLE,
          SUBST
        ]
      }
    ]
  };
  SUBST.contains.push(STRING);
  const ANNOTATION_USE_SITE = {
    className: "meta",
    begin: "@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*" + hljs2.UNDERSCORE_IDENT_RE + ")?"
  };
  const ANNOTATION = {
    className: "meta",
    begin: "@" + hljs2.UNDERSCORE_IDENT_RE,
    contains: [
      {
        begin: /\(/,
        end: /\)/,
        contains: [
          hljs2.inherit(STRING, { className: "string" }),
          "self"
        ]
      }
    ]
  };
  const KOTLIN_NUMBER_MODE = NUMERIC2;
  const KOTLIN_NESTED_COMMENT = hljs2.COMMENT(
    "/\\*",
    "\\*/",
    { contains: [hljs2.C_BLOCK_COMMENT_MODE] }
  );
  const KOTLIN_PAREN_TYPE = { variants: [
    {
      className: "type",
      begin: hljs2.UNDERSCORE_IDENT_RE
    },
    {
      begin: /\(/,
      end: /\)/,
      contains: []
      // defined later
    }
  ] };
  const KOTLIN_PAREN_TYPE2 = KOTLIN_PAREN_TYPE;
  KOTLIN_PAREN_TYPE2.variants[1].contains = [KOTLIN_PAREN_TYPE];
  KOTLIN_PAREN_TYPE.variants[1].contains = [KOTLIN_PAREN_TYPE2];
  return {
    name: "Kotlin",
    aliases: [
      "kt",
      "kts"
    ],
    keywords: KEYWORDS3,
    contains: [
      hljs2.COMMENT(
        "/\\*\\*",
        "\\*/",
        {
          relevance: 0,
          contains: [
            {
              className: "doctag",
              begin: "@[A-Za-z]+"
            }
          ]
        }
      ),
      hljs2.C_LINE_COMMENT_MODE,
      KOTLIN_NESTED_COMMENT,
      KEYWORDS_WITH_LABEL,
      LABEL,
      ANNOTATION_USE_SITE,
      ANNOTATION,
      {
        className: "function",
        beginKeywords: "fun",
        end: "[(]|$",
        returnBegin: true,
        excludeEnd: true,
        keywords: KEYWORDS3,
        relevance: 5,
        contains: [
          {
            begin: hljs2.UNDERSCORE_IDENT_RE + "\\s*\\(",
            returnBegin: true,
            relevance: 0,
            contains: [hljs2.UNDERSCORE_TITLE_MODE]
          },
          {
            className: "type",
            begin: /</,
            end: />/,
            keywords: "reified",
            relevance: 0
          },
          {
            className: "params",
            begin: /\(/,
            end: /\)/,
            endsParent: true,
            keywords: KEYWORDS3,
            relevance: 0,
            contains: [
              {
                begin: /:/,
                end: /[=,\/]/,
                endsWithParent: true,
                contains: [
                  KOTLIN_PAREN_TYPE,
                  hljs2.C_LINE_COMMENT_MODE,
                  KOTLIN_NESTED_COMMENT
                ],
                relevance: 0
              },
              hljs2.C_LINE_COMMENT_MODE,
              KOTLIN_NESTED_COMMENT,
              ANNOTATION_USE_SITE,
              ANNOTATION,
              STRING,
              hljs2.C_NUMBER_MODE
            ]
          },
          KOTLIN_NESTED_COMMENT
        ]
      },
      {
        begin: [
          /class|interface|trait/,
          /\s+/,
          hljs2.UNDERSCORE_IDENT_RE
        ],
        beginScope: {
          3: "title.class"
        },
        keywords: "class interface trait",
        end: /[:\{(]|$/,
        excludeEnd: true,
        illegal: "extends implements",
        contains: [
          { beginKeywords: "public protected internal private constructor" },
          hljs2.UNDERSCORE_TITLE_MODE,
          {
            className: "type",
            begin: /</,
            end: />/,
            excludeBegin: true,
            excludeEnd: true,
            relevance: 0
          },
          {
            className: "type",
            begin: /[,:]\s*/,
            end: /[<\(,){\s]|$/,
            excludeBegin: true,
            returnEnd: true
          },
          ANNOTATION_USE_SITE,
          ANNOTATION
        ]
      },
      STRING,
      {
        className: "meta",
        begin: "^#!/usr/bin/env",
        end: "$",
        illegal: "\n"
      },
      KOTLIN_NUMBER_MODE
    ]
  };
}

// node_modules/highlight.js/es/languages/less.js
var MODES2 = (hljs2) => {
  return {
    IMPORTANT: {
      scope: "meta",
      begin: "!important"
    },
    BLOCK_COMMENT: hljs2.C_BLOCK_COMMENT_MODE,
    HEXCOLOR: {
      scope: "number",
      begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
    },
    FUNCTION_DISPATCH: {
      className: "built_in",
      begin: /[\w-]+(?=\()/
    },
    ATTRIBUTE_SELECTOR_MODE: {
      scope: "selector-attr",
      begin: /\[/,
      end: /\]/,
      illegal: "$",
      contains: [
        hljs2.APOS_STRING_MODE,
        hljs2.QUOTE_STRING_MODE
      ]
    },
    CSS_NUMBER_MODE: {
      scope: "number",
      begin: hljs2.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
      relevance: 0
    },
    CSS_VARIABLE: {
      className: "attr",
      begin: /--[A-Za-z_][A-Za-z0-9_-]*/
    }
  };
};
var HTML_TAGS2 = [
  "a",
  "abbr",
  "address",
  "article",
  "aside",
  "audio",
  "b",
  "blockquote",
  "body",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "dd",
  "del",
  "details",
  "dfn",
  "div",
  "dl",
  "dt",
  "em",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "header",
  "hgroup",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "main",
  "mark",
  "menu",
  "nav",
  "object",
  "ol",
  "optgroup",
  "option",
  "p",
  "picture",
  "q",
  "quote",
  "samp",
  "section",
  "select",
  "source",
  "span",
  "strong",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "tr",
  "ul",
  "var",
  "video"
];
var SVG_TAGS2 = [
  "defs",
  "g",
  "marker",
  "mask",
  "pattern",
  "svg",
  "switch",
  "symbol",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feFlood",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMorphology",
  "feOffset",
  "feSpecularLighting",
  "feTile",
  "feTurbulence",
  "linearGradient",
  "radialGradient",
  "stop",
  "circle",
  "ellipse",
  "image",
  "line",
  "path",
  "polygon",
  "polyline",
  "rect",
  "text",
  "use",
  "textPath",
  "tspan",
  "foreignObject",
  "clipPath"
];
var TAGS2 = [
  ...HTML_TAGS2,
  ...SVG_TAGS2
];
var MEDIA_FEATURES2 = [
  "any-hover",
  "any-pointer",
  "aspect-ratio",
  "color",
  "color-gamut",
  "color-index",
  "device-aspect-ratio",
  "device-height",
  "device-width",
  "display-mode",
  "forced-colors",
  "grid",
  "height",
  "hover",
  "inverted-colors",
  "monochrome",
  "orientation",
  "overflow-block",
  "overflow-inline",
  "pointer",
  "prefers-color-scheme",
  "prefers-contrast",
  "prefers-reduced-motion",
  "prefers-reduced-transparency",
  "resolution",
  "scan",
  "scripting",
  "update",
  "width",
  // TODO: find a better solution?
  "min-width",
  "max-width",
  "min-height",
  "max-height"
].sort().reverse();
var PSEUDO_CLASSES2 = [
  "active",
  "any-link",
  "blank",
  "checked",
  "current",
  "default",
  "defined",
  "dir",
  // dir()
  "disabled",
  "drop",
  "empty",
  "enabled",
  "first",
  "first-child",
  "first-of-type",
  "fullscreen",
  "future",
  "focus",
  "focus-visible",
  "focus-within",
  "has",
  // has()
  "host",
  // host or host()
  "host-context",
  // host-context()
  "hover",
  "indeterminate",
  "in-range",
  "invalid",
  "is",
  // is()
  "lang",
  // lang()
  "last-child",
  "last-of-type",
  "left",
  "link",
  "local-link",
  "not",
  // not()
  "nth-child",
  // nth-child()
  "nth-col",
  // nth-col()
  "nth-last-child",
  // nth-last-child()
  "nth-last-col",
  // nth-last-col()
  "nth-last-of-type",
  //nth-last-of-type()
  "nth-of-type",
  //nth-of-type()
  "only-child",
  "only-of-type",
  "optional",
  "out-of-range",
  "past",
  "placeholder-shown",
  "read-only",
  "read-write",
  "required",
  "right",
  "root",
  "scope",
  "target",
  "target-within",
  "user-invalid",
  "valid",
  "visited",
  "where"
  // where()
].sort().reverse();
var PSEUDO_ELEMENTS2 = [
  "after",
  "backdrop",
  "before",
  "cue",
  "cue-region",
  "first-letter",
  "first-line",
  "grammar-error",
  "marker",
  "part",
  "placeholder",
  "selection",
  "slotted",
  "spelling-error"
].sort().reverse();
var ATTRIBUTES2 = [
  "accent-color",
  "align-content",
  "align-items",
  "align-self",
  "alignment-baseline",
  "all",
  "anchor-name",
  "animation",
  "animation-composition",
  "animation-delay",
  "animation-direction",
  "animation-duration",
  "animation-fill-mode",
  "animation-iteration-count",
  "animation-name",
  "animation-play-state",
  "animation-range",
  "animation-range-end",
  "animation-range-start",
  "animation-timeline",
  "animation-timing-function",
  "appearance",
  "aspect-ratio",
  "backdrop-filter",
  "backface-visibility",
  "background",
  "background-attachment",
  "background-blend-mode",
  "background-clip",
  "background-color",
  "background-image",
  "background-origin",
  "background-position",
  "background-position-x",
  "background-position-y",
  "background-repeat",
  "background-size",
  "baseline-shift",
  "block-size",
  "border",
  "border-block",
  "border-block-color",
  "border-block-end",
  "border-block-end-color",
  "border-block-end-style",
  "border-block-end-width",
  "border-block-start",
  "border-block-start-color",
  "border-block-start-style",
  "border-block-start-width",
  "border-block-style",
  "border-block-width",
  "border-bottom",
  "border-bottom-color",
  "border-bottom-left-radius",
  "border-bottom-right-radius",
  "border-bottom-style",
  "border-bottom-width",
  "border-collapse",
  "border-color",
  "border-end-end-radius",
  "border-end-start-radius",
  "border-image",
  "border-image-outset",
  "border-image-repeat",
  "border-image-slice",
  "border-image-source",
  "border-image-width",
  "border-inline",
  "border-inline-color",
  "border-inline-end",
  "border-inline-end-color",
  "border-inline-end-style",
  "border-inline-end-width",
  "border-inline-start",
  "border-inline-start-color",
  "border-inline-start-style",
  "border-inline-start-width",
  "border-inline-style",
  "border-inline-width",
  "border-left",
  "border-left-color",
  "border-left-style",
  "border-left-width",
  "border-radius",
  "border-right",
  "border-right-color",
  "border-right-style",
  "border-right-width",
  "border-spacing",
  "border-start-end-radius",
  "border-start-start-radius",
  "border-style",
  "border-top",
  "border-top-color",
  "border-top-left-radius",
  "border-top-right-radius",
  "border-top-style",
  "border-top-width",
  "border-width",
  "bottom",
  "box-align",
  "box-decoration-break",
  "box-direction",
  "box-flex",
  "box-flex-group",
  "box-lines",
  "box-ordinal-group",
  "box-orient",
  "box-pack",
  "box-shadow",
  "box-sizing",
  "break-after",
  "break-before",
  "break-inside",
  "caption-side",
  "caret-color",
  "clear",
  "clip",
  "clip-path",
  "clip-rule",
  "color",
  "color-interpolation",
  "color-interpolation-filters",
  "color-profile",
  "color-rendering",
  "color-scheme",
  "column-count",
  "column-fill",
  "column-gap",
  "column-rule",
  "column-rule-color",
  "column-rule-style",
  "column-rule-width",
  "column-span",
  "column-width",
  "columns",
  "contain",
  "contain-intrinsic-block-size",
  "contain-intrinsic-height",
  "contain-intrinsic-inline-size",
  "contain-intrinsic-size",
  "contain-intrinsic-width",
  "container",
  "container-name",
  "container-type",
  "content",
  "content-visibility",
  "counter-increment",
  "counter-reset",
  "counter-set",
  "cue",
  "cue-after",
  "cue-before",
  "cursor",
  "cx",
  "cy",
  "direction",
  "display",
  "dominant-baseline",
  "empty-cells",
  "enable-background",
  "field-sizing",
  "fill",
  "fill-opacity",
  "fill-rule",
  "filter",
  "flex",
  "flex-basis",
  "flex-direction",
  "flex-flow",
  "flex-grow",
  "flex-shrink",
  "flex-wrap",
  "float",
  "flood-color",
  "flood-opacity",
  "flow",
  "font",
  "font-display",
  "font-family",
  "font-feature-settings",
  "font-kerning",
  "font-language-override",
  "font-optical-sizing",
  "font-palette",
  "font-size",
  "font-size-adjust",
  "font-smooth",
  "font-smoothing",
  "font-stretch",
  "font-style",
  "font-synthesis",
  "font-synthesis-position",
  "font-synthesis-small-caps",
  "font-synthesis-style",
  "font-synthesis-weight",
  "font-variant",
  "font-variant-alternates",
  "font-variant-caps",
  "font-variant-east-asian",
  "font-variant-emoji",
  "font-variant-ligatures",
  "font-variant-numeric",
  "font-variant-position",
  "font-variation-settings",
  "font-weight",
  "forced-color-adjust",
  "gap",
  "glyph-orientation-horizontal",
  "glyph-orientation-vertical",
  "grid",
  "grid-area",
  "grid-auto-columns",
  "grid-auto-flow",
  "grid-auto-rows",
  "grid-column",
  "grid-column-end",
  "grid-column-start",
  "grid-gap",
  "grid-row",
  "grid-row-end",
  "grid-row-start",
  "grid-template",
  "grid-template-areas",
  "grid-template-columns",
  "grid-template-rows",
  "hanging-punctuation",
  "height",
  "hyphenate-character",
  "hyphenate-limit-chars",
  "hyphens",
  "icon",
  "image-orientation",
  "image-rendering",
  "image-resolution",
  "ime-mode",
  "initial-letter",
  "initial-letter-align",
  "inline-size",
  "inset",
  "inset-area",
  "inset-block",
  "inset-block-end",
  "inset-block-start",
  "inset-inline",
  "inset-inline-end",
  "inset-inline-start",
  "isolation",
  "justify-content",
  "justify-items",
  "justify-self",
  "kerning",
  "left",
  "letter-spacing",
  "lighting-color",
  "line-break",
  "line-height",
  "line-height-step",
  "list-style",
  "list-style-image",
  "list-style-position",
  "list-style-type",
  "margin",
  "margin-block",
  "margin-block-end",
  "margin-block-start",
  "margin-bottom",
  "margin-inline",
  "margin-inline-end",
  "margin-inline-start",
  "margin-left",
  "margin-right",
  "margin-top",
  "margin-trim",
  "marker",
  "marker-end",
  "marker-mid",
  "marker-start",
  "marks",
  "mask",
  "mask-border",
  "mask-border-mode",
  "mask-border-outset",
  "mask-border-repeat",
  "mask-border-slice",
  "mask-border-source",
  "mask-border-width",
  "mask-clip",
  "mask-composite",
  "mask-image",
  "mask-mode",
  "mask-origin",
  "mask-position",
  "mask-repeat",
  "mask-size",
  "mask-type",
  "masonry-auto-flow",
  "math-depth",
  "math-shift",
  "math-style",
  "max-block-size",
  "max-height",
  "max-inline-size",
  "max-width",
  "min-block-size",
  "min-height",
  "min-inline-size",
  "min-width",
  "mix-blend-mode",
  "nav-down",
  "nav-index",
  "nav-left",
  "nav-right",
  "nav-up",
  "none",
  "normal",
  "object-fit",
  "object-position",
  "offset",
  "offset-anchor",
  "offset-distance",
  "offset-path",
  "offset-position",
  "offset-rotate",
  "opacity",
  "order",
  "orphans",
  "outline",
  "outline-color",
  "outline-offset",
  "outline-style",
  "outline-width",
  "overflow",
  "overflow-anchor",
  "overflow-block",
  "overflow-clip-margin",
  "overflow-inline",
  "overflow-wrap",
  "overflow-x",
  "overflow-y",
  "overlay",
  "overscroll-behavior",
  "overscroll-behavior-block",
  "overscroll-behavior-inline",
  "overscroll-behavior-x",
  "overscroll-behavior-y",
  "padding",
  "padding-block",
  "padding-block-end",
  "padding-block-start",
  "padding-bottom",
  "padding-inline",
  "padding-inline-end",
  "padding-inline-start",
  "padding-left",
  "padding-right",
  "padding-top",
  "page",
  "page-break-after",
  "page-break-before",
  "page-break-inside",
  "paint-order",
  "pause",
  "pause-after",
  "pause-before",
  "perspective",
  "perspective-origin",
  "place-content",
  "place-items",
  "place-self",
  "pointer-events",
  "position",
  "position-anchor",
  "position-visibility",
  "print-color-adjust",
  "quotes",
  "r",
  "resize",
  "rest",
  "rest-after",
  "rest-before",
  "right",
  "rotate",
  "row-gap",
  "ruby-align",
  "ruby-position",
  "scale",
  "scroll-behavior",
  "scroll-margin",
  "scroll-margin-block",
  "scroll-margin-block-end",
  "scroll-margin-block-start",
  "scroll-margin-bottom",
  "scroll-margin-inline",
  "scroll-margin-inline-end",
  "scroll-margin-inline-start",
  "scroll-margin-left",
  "scroll-margin-right",
  "scroll-margin-top",
  "scroll-padding",
  "scroll-padding-block",
  "scroll-padding-block-end",
  "scroll-padding-block-start",
  "scroll-padding-bottom",
  "scroll-padding-inline",
  "scroll-padding-inline-end",
  "scroll-padding-inline-start",
  "scroll-padding-left",
  "scroll-padding-right",
  "scroll-padding-top",
  "scroll-snap-align",
  "scroll-snap-stop",
  "scroll-snap-type",
  "scroll-timeline",
  "scroll-timeline-axis",
  "scroll-timeline-name",
  "scrollbar-color",
  "scrollbar-gutter",
  "scrollbar-width",
  "shape-image-threshold",
  "shape-margin",
  "shape-outside",
  "shape-rendering",
  "speak",
  "speak-as",
  "src",
  // @font-face
  "stop-color",
  "stop-opacity",
  "stroke",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke-width",
  "tab-size",
  "table-layout",
  "text-align",
  "text-align-all",
  "text-align-last",
  "text-anchor",
  "text-combine-upright",
  "text-decoration",
  "text-decoration-color",
  "text-decoration-line",
  "text-decoration-skip",
  "text-decoration-skip-ink",
  "text-decoration-style",
  "text-decoration-thickness",
  "text-emphasis",
  "text-emphasis-color",
  "text-emphasis-position",
  "text-emphasis-style",
  "text-indent",
  "text-justify",
  "text-orientation",
  "text-overflow",
  "text-rendering",
  "text-shadow",
  "text-size-adjust",
  "text-transform",
  "text-underline-offset",
  "text-underline-position",
  "text-wrap",
  "text-wrap-mode",
  "text-wrap-style",
  "timeline-scope",
  "top",
  "touch-action",
  "transform",
  "transform-box",
  "transform-origin",
  "transform-style",
  "transition",
  "transition-behavior",
  "transition-delay",
  "transition-duration",
  "transition-property",
  "transition-timing-function",
  "translate",
  "unicode-bidi",
  "user-modify",
  "user-select",
  "vector-effect",
  "vertical-align",
  "view-timeline",
  "view-timeline-axis",
  "view-timeline-inset",
  "view-timeline-name",
  "view-transition-name",
  "visibility",
  "voice-balance",
  "voice-duration",
  "voice-family",
  "voice-pitch",
  "voice-range",
  "voice-rate",
  "voice-stress",
  "voice-volume",
  "white-space",
  "white-space-collapse",
  "widows",
  "width",
  "will-change",
  "word-break",
  "word-spacing",
  "word-wrap",
  "writing-mode",
  "x",
  "y",
  "z-index",
  "zoom"
].sort().reverse();
var PSEUDO_SELECTORS = PSEUDO_CLASSES2.concat(PSEUDO_ELEMENTS2).sort().reverse();
function less(hljs2) {
  const modes = MODES2(hljs2);
  const PSEUDO_SELECTORS$1 = PSEUDO_SELECTORS;
  const AT_MODIFIERS = "and or not only";
  const IDENT_RE3 = "[\\w-]+";
  const INTERP_IDENT_RE = "(" + IDENT_RE3 + "|@\\{" + IDENT_RE3 + "\\})";
  const RULES = [];
  const VALUE_MODES = [];
  const STRING_MODE = function(c2) {
    return {
      // Less strings are not multiline (also include '~' for more consistent coloring of "escaped" strings)
      className: "string",
      begin: "~?" + c2 + ".*?" + c2
    };
  };
  const IDENT_MODE = function(name, begin, relevance) {
    return {
      className: name,
      begin,
      relevance
    };
  };
  const AT_KEYWORDS = {
    $pattern: /[a-z-]+/,
    keyword: AT_MODIFIERS,
    attribute: MEDIA_FEATURES2.join(" ")
  };
  const PARENS_MODE = {
    // used only to properly balance nested parens inside mixin call, def. arg list
    begin: "\\(",
    end: "\\)",
    contains: VALUE_MODES,
    keywords: AT_KEYWORDS,
    relevance: 0
  };
  VALUE_MODES.push(
    hljs2.C_LINE_COMMENT_MODE,
    hljs2.C_BLOCK_COMMENT_MODE,
    STRING_MODE("'"),
    STRING_MODE('"'),
    modes.CSS_NUMBER_MODE,
    // fixme: it does not include dot for numbers like .5em :(
    {
      begin: "(url|data-uri)\\(",
      starts: {
        className: "string",
        end: "[\\)\\n]",
        excludeEnd: true
      }
    },
    modes.HEXCOLOR,
    PARENS_MODE,
    IDENT_MODE("variable", "@@?" + IDENT_RE3, 10),
    IDENT_MODE("variable", "@\\{" + IDENT_RE3 + "\\}"),
    IDENT_MODE("built_in", "~?`[^`]*?`"),
    // inline javascript (or whatever host language) *multiline* string
    {
      // @media features (it’s here to not duplicate things in AT_RULE_MODE with extra PARENS_MODE overriding):
      className: "attribute",
      begin: IDENT_RE3 + "\\s*:",
      end: ":",
      returnBegin: true,
      excludeEnd: true
    },
    modes.IMPORTANT,
    { beginKeywords: "and not" },
    modes.FUNCTION_DISPATCH
  );
  const VALUE_WITH_RULESETS = VALUE_MODES.concat({
    begin: /\{/,
    end: /\}/,
    contains: RULES
  });
  const MIXIN_GUARD_MODE = {
    beginKeywords: "when",
    endsWithParent: true,
    contains: [{ beginKeywords: "and not" }].concat(VALUE_MODES)
    // using this form to override VALUE’s 'function' match
  };
  const RULE_MODE = {
    begin: INTERP_IDENT_RE + "\\s*:",
    returnBegin: true,
    end: /[;}]/,
    relevance: 0,
    contains: [
      { begin: /-(webkit|moz|ms|o)-/ },
      modes.CSS_VARIABLE,
      {
        className: "attribute",
        begin: "\\b(" + ATTRIBUTES2.join("|") + ")\\b",
        end: /(?=:)/,
        starts: {
          endsWithParent: true,
          illegal: "[<=$]",
          relevance: 0,
          contains: VALUE_MODES
        }
      }
    ]
  };
  const AT_RULE_MODE = {
    className: "keyword",
    begin: "@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",
    starts: {
      end: "[;{}]",
      keywords: AT_KEYWORDS,
      returnEnd: true,
      contains: VALUE_MODES,
      relevance: 0
    }
  };
  const VAR_RULE_MODE = {
    className: "variable",
    variants: [
      // using more strict pattern for higher relevance to increase chances of Less detection.
      // this is *the only* Less specific statement used in most of the sources, so...
      // (we’ll still often loose to the css-parser unless there's '//' comment,
      // simply because 1 variable just can't beat 99 properties :)
      {
        begin: "@" + IDENT_RE3 + "\\s*:",
        relevance: 15
      },
      { begin: "@" + IDENT_RE3 }
    ],
    starts: {
      end: "[;}]",
      returnEnd: true,
      contains: VALUE_WITH_RULESETS
    }
  };
  const SELECTOR_MODE = {
    // first parse unambiguous selectors (i.e. those not starting with tag)
    // then fall into the scary lookahead-discriminator variant.
    // this mode also handles mixin definitions and calls
    variants: [
      {
        begin: "[\\.#:&\\[>]",
        end: "[;{}]"
        // mixin calls end with ';'
      },
      {
        begin: INTERP_IDENT_RE,
        end: /\{/
      }
    ],
    returnBegin: true,
    returnEnd: true,
    illegal: `[<='$"]`,
    relevance: 0,
    contains: [
      hljs2.C_LINE_COMMENT_MODE,
      hljs2.C_BLOCK_COMMENT_MODE,
      MIXIN_GUARD_MODE,
      IDENT_MODE("keyword", "all\\b"),
      IDENT_MODE("variable", "@\\{" + IDENT_RE3 + "\\}"),
      // otherwise it’s identified as tag
      {
        begin: "\\b(" + TAGS2.join("|") + ")\\b",
        className: "selector-tag"
      },
      modes.CSS_NUMBER_MODE,
      IDENT_MODE("selector-tag", INTERP_IDENT_RE, 0),
      IDENT_MODE("selector-id", "#" + INTERP_IDENT_RE),
      IDENT_MODE("selector-class", "\\." + INTERP_IDENT_RE, 0),
      IDENT_MODE("selector-tag", "&", 0),
      modes.ATTRIBUTE_SELECTOR_MODE,
      {
        className: "selector-pseudo",
        begin: ":(" + PSEUDO_CLASSES2.join("|") + ")"
      },
      {
        className: "selector-pseudo",
        begin: ":(:)?(" + PSEUDO_ELEMENTS2.join("|") + ")"
      },
      {
        begin: /\(/,
        end: /\)/,
        relevance: 0,
        contains: VALUE_WITH_RULESETS
      },
      // argument list of parametric mixins
      { begin: "!important" },
      // eat !important after mixin call or it will be colored as tag
      modes.FUNCTION_DISPATCH
    ]
  };
  const PSEUDO_SELECTOR_MODE = {
    begin: IDENT_RE3 + `:(:)?(${PSEUDO_SELECTORS$1.join("|")})`,
    returnBegin: true,
    contains: [SELECTOR_MODE]
  };
  RULES.push(
    hljs2.C_LINE_COMMENT_MODE,
    hljs2.C_BLOCK_COMMENT_MODE,
    AT_RULE_MODE,
    VAR_RULE_MODE,
    PSEUDO_SELECTOR_MODE,
    RULE_MODE,
    SELECTOR_MODE,
    MIXIN_GUARD_MODE,
    modes.FUNCTION_DISPATCH
  );
  return {
    name: "Less",
    case_insensitive: true,
    illegal: `[=>'/<($"]`,
    contains: RULES
  };
}

// node_modules/highlight.js/es/languages/lisp.js
function lisp(hljs2) {
  const LISP_IDENT_RE = "[a-zA-Z_\\-+\\*\\/<=>&#][a-zA-Z0-9_\\-+*\\/<=>&#!]*";
  const MEC_RE = "\\|[^]*?\\|";
  const LISP_SIMPLE_NUMBER_RE = "(-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s|D|E|F|L|S)(\\+|-)?\\d+)?";
  const LITERAL = {
    className: "literal",
    begin: "\\b(t{1}|nil)\\b"
  };
  const NUMBER = {
    className: "number",
    variants: [
      {
        begin: LISP_SIMPLE_NUMBER_RE,
        relevance: 0
      },
      { begin: "#(b|B)[0-1]+(/[0-1]+)?" },
      { begin: "#(o|O)[0-7]+(/[0-7]+)?" },
      { begin: "#(x|X)[0-9a-fA-F]+(/[0-9a-fA-F]+)?" },
      {
        begin: "#(c|C)\\(" + LISP_SIMPLE_NUMBER_RE + " +" + LISP_SIMPLE_NUMBER_RE,
        end: "\\)"
      }
    ]
  };
  const STRING = hljs2.inherit(hljs2.QUOTE_STRING_MODE, { illegal: null });
  const COMMENT = hljs2.COMMENT(
    ";",
    "$",
    { relevance: 0 }
  );
  const VARIABLE = {
    begin: "\\*",
    end: "\\*"
  };
  const KEYWORD = {
    className: "symbol",
    begin: "[:&]" + LISP_IDENT_RE
  };
  const IDENT = {
    begin: LISP_IDENT_RE,
    relevance: 0
  };
  const MEC = { begin: MEC_RE };
  const QUOTED_LIST = {
    begin: "\\(",
    end: "\\)",
    contains: [
      "self",
      LITERAL,
      STRING,
      NUMBER,
      IDENT
    ]
  };
  const QUOTED = {
    contains: [
      NUMBER,
      STRING,
      VARIABLE,
      KEYWORD,
      QUOTED_LIST,
      IDENT
    ],
    variants: [
      {
        begin: "['`]\\(",
        end: "\\)"
      },
      {
        begin: "\\(quote ",
        end: "\\)",
        keywords: { name: "quote" }
      },
      { begin: "'" + MEC_RE }
    ]
  };
  const QUOTED_ATOM = { variants: [
    { begin: "'" + LISP_IDENT_RE },
    { begin: "#'" + LISP_IDENT_RE + "(::" + LISP_IDENT_RE + ")*" }
  ] };
  const LIST = {
    begin: "\\(\\s*",
    end: "\\)"
  };
  const BODY = {
    endsWithParent: true,
    relevance: 0
  };
  LIST.contains = [
    {
      className: "name",
      variants: [
        {
          begin: LISP_IDENT_RE,
          relevance: 0
        },
        { begin: MEC_RE }
      ]
    },
    BODY
  ];
  BODY.contains = [
    QUOTED,
    QUOTED_ATOM,
    LIST,
    LITERAL,
    NUMBER,
    STRING,
    COMMENT,
    VARIABLE,
    KEYWORD,
    MEC,
    IDENT
  ];
  return {
    name: "Lisp",
    illegal: /\S/,
    contains: [
      NUMBER,
      hljs2.SHEBANG(),
      LITERAL,
      STRING,
      COMMENT,
      QUOTED,
      QUOTED_ATOM,
      LIST,
      IDENT
    ]
  };
}

// node_modules/highlight.js/es/languages/lua.js
function lua(hljs2) {
  const OPENING_LONG_BRACKET = "\\[=*\\[";
  const CLOSING_LONG_BRACKET = "\\]=*\\]";
  const LONG_BRACKETS = {
    begin: OPENING_LONG_BRACKET,
    end: CLOSING_LONG_BRACKET,
    contains: ["self"]
  };
  const COMMENTS = [
    hljs2.COMMENT("--(?!" + OPENING_LONG_BRACKET + ")", "$"),
    hljs2.COMMENT(
      "--" + OPENING_LONG_BRACKET,
      CLOSING_LONG_BRACKET,
      {
        contains: [LONG_BRACKETS],
        relevance: 10
      }
    )
  ];
  return {
    name: "Lua",
    aliases: ["pluto"],
    keywords: {
      $pattern: hljs2.UNDERSCORE_IDENT_RE,
      literal: "true false nil",
      keyword: "and break do else elseif end for goto if in local not or repeat return then until while",
      built_in: (
        // Metatags and globals:
        "_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall arg self coroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove"
      )
    },
    contains: COMMENTS.concat([
      {
        className: "function",
        beginKeywords: "function",
        end: "\\)",
        contains: [
          hljs2.inherit(hljs2.TITLE_MODE, { begin: "([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*" }),
          {
            className: "params",
            begin: "\\(",
            endsWithParent: true,
            contains: COMMENTS
          }
        ].concat(COMMENTS)
      },
      hljs2.C_NUMBER_MODE,
      hljs2.APOS_STRING_MODE,
      hljs2.QUOTE_STRING_MODE,
      {
        className: "string",
        begin: OPENING_LONG_BRACKET,
        end: CLOSING_LONG_BRACKET,
        contains: [LONG_BRACKETS],
        relevance: 5
      }
    ])
  };
}

// node_modules/highlight.js/es/languages/makefile.js
function makefile(hljs2) {
  const VARIABLE = {
    className: "variable",
    variants: [
      {
        begin: "\\$\\(" + hljs2.UNDERSCORE_IDENT_RE + "\\)",
        contains: [hljs2.BACKSLASH_ESCAPE]
      },
      { begin: /\$[@%<?\^\+\*]/ }
    ]
  };
  const QUOTE_STRING = {
    className: "string",
    begin: /"/,
    end: /"/,
    contains: [
      hljs2.BACKSLASH_ESCAPE,
      VARIABLE
    ]
  };
  const FUNC = {
    className: "variable",
    begin: /\$\([\w-]+\s/,
    end: /\)/,
    keywords: { built_in: "subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value" },
    contains: [
      VARIABLE,
      QUOTE_STRING
      // Added QUOTE_STRING as they can be a part of functions
    ]
  };
  const ASSIGNMENT = { begin: "^" + hljs2.UNDERSCORE_IDENT_RE + "\\s*(?=[:+?]?=)" };
  const META = {
    className: "meta",
    begin: /^\.PHONY:/,
    end: /$/,
    keywords: {
      $pattern: /[\.\w]+/,
      keyword: ".PHONY"
    }
  };
  const TARGET = {
    className: "section",
    begin: /^[^\s]+:/,
    end: /$/,
    contains: [VARIABLE]
  };
  return {
    name: "Makefile",
    aliases: [
      "mk",
      "mak",
      "make"
    ],
    keywords: {
      $pattern: /[\w-]+/,
      keyword: "define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath"
    },
    contains: [
      hljs2.HASH_COMMENT_MODE,
      VARIABLE,
      QUOTE_STRING,
      FUNC,
      ASSIGNMENT,
      META,
      TARGET
    ]
  };
}

// node_modules/highlight.js/es/languages/perl.js
function perl(hljs2) {
  const regex2 = hljs2.regex;
  const KEYWORDS3 = [
    "abs",
    "accept",
    "alarm",
    "and",
    "atan2",
    "bind",
    "binmode",
    "bless",
    "break",
    "caller",
    "chdir",
    "chmod",
    "chomp",
    "chop",
    "chown",
    "chr",
    "chroot",
    "class",
    "close",
    "closedir",
    "connect",
    "continue",
    "cos",
    "crypt",
    "dbmclose",
    "dbmopen",
    "defined",
    "delete",
    "die",
    "do",
    "dump",
    "each",
    "else",
    "elsif",
    "endgrent",
    "endhostent",
    "endnetent",
    "endprotoent",
    "endpwent",
    "endservent",
    "eof",
    "eval",
    "exec",
    "exists",
    "exit",
    "exp",
    "fcntl",
    "field",
    "fileno",
    "flock",
    "for",
    "foreach",
    "fork",
    "format",
    "formline",
    "getc",
    "getgrent",
    "getgrgid",
    "getgrnam",
    "gethostbyaddr",
    "gethostbyname",
    "gethostent",
    "getlogin",
    "getnetbyaddr",
    "getnetbyname",
    "getnetent",
    "getpeername",
    "getpgrp",
    "getpriority",
    "getprotobyname",
    "getprotobynumber",
    "getprotoent",
    "getpwent",
    "getpwnam",
    "getpwuid",
    "getservbyname",
    "getservbyport",
    "getservent",
    "getsockname",
    "getsockopt",
    "given",
    "glob",
    "gmtime",
    "goto",
    "grep",
    "gt",
    "hex",
    "if",
    "index",
    "int",
    "ioctl",
    "join",
    "keys",
    "kill",
    "last",
    "lc",
    "lcfirst",
    "length",
    "link",
    "listen",
    "local",
    "localtime",
    "log",
    "lstat",
    "lt",
    "ma",
    "map",
    "method",
    "mkdir",
    "msgctl",
    "msgget",
    "msgrcv",
    "msgsnd",
    "my",
    "ne",
    "next",
    "no",
    "not",
    "oct",
    "open",
    "opendir",
    "or",
    "ord",
    "our",
    "pack",
    "package",
    "pipe",
    "pop",
    "pos",
    "print",
    "printf",
    "prototype",
    "push",
    "q|0",
    "qq",
    "quotemeta",
    "qw",
    "qx",
    "rand",
    "read",
    "readdir",
    "readline",
    "readlink",
    "readpipe",
    "recv",
    "redo",
    "ref",
    "rename",
    "require",
    "reset",
    "return",
    "reverse",
    "rewinddir",
    "rindex",
    "rmdir",
    "say",
    "scalar",
    "seek",
    "seekdir",
    "select",
    "semctl",
    "semget",
    "semop",
    "send",
    "setgrent",
    "sethostent",
    "setnetent",
    "setpgrp",
    "setpriority",
    "setprotoent",
    "setpwent",
    "setservent",
    "setsockopt",
    "shift",
    "shmctl",
    "shmget",
    "shmread",
    "shmwrite",
    "shutdown",
    "sin",
    "sleep",
    "socket",
    "socketpair",
    "sort",
    "splice",
    "split",
    "sprintf",
    "sqrt",
    "srand",
    "stat",
    "state",
    "study",
    "sub",
    "substr",
    "symlink",
    "syscall",
    "sysopen",
    "sysread",
    "sysseek",
    "system",
    "syswrite",
    "tell",
    "telldir",
    "tie",
    "tied",
    "time",
    "times",
    "tr",
    "truncate",
    "uc",
    "ucfirst",
    "umask",
    "undef",
    "unless",
    "unlink",
    "unpack",
    "unshift",
    "untie",
    "until",
    "use",
    "utime",
    "values",
    "vec",
    "wait",
    "waitpid",
    "wantarray",
    "warn",
    "when",
    "while",
    "write",
    "x|0",
    "xor",
    "y|0"
  ];
  const REGEX_MODIFIERS = /[dualxmsipngr]{0,12}/;
  const PERL_KEYWORDS = {
    $pattern: /[\w.]+/,
    keyword: KEYWORDS3.join(" ")
  };
  const SUBST = {
    className: "subst",
    begin: "[$@]\\{",
    end: "\\}",
    keywords: PERL_KEYWORDS
  };
  const METHOD = {
    begin: /->\{/,
    end: /\}/
    // contains defined later
  };
  const ATTR = {
    scope: "attr",
    match: /\s+:\s*\w+(\s*\(.*?\))?/
  };
  const VAR = {
    scope: "variable",
    variants: [
      { begin: /\$\d/ },
      {
        begin: regex2.concat(
          /[$%@](?!")(\^\w\b|#\w+(::\w+)*|\{\w+\}|\w+(::\w*)*)/,
          // negative look-ahead tries to avoid matching patterns that are not
          // Perl at all like $ident$, @ident@, etc.
          `(?![A-Za-z])(?![@$%])`
        )
      },
      {
        // Only $= is a special Perl variable and one can't declare @= or %=.
        begin: /[$%@](?!")[^\s\w{=]|\$=/,
        relevance: 0
      }
    ],
    contains: [ATTR]
  };
  const NUMBER = {
    className: "number",
    variants: [
      // decimal numbers:
      // include the case where a number starts with a dot (eg. .9), and
      // the leading 0? avoids mixing the first and second match on 0.x cases
      { match: /0?\.[0-9][0-9_]+\b/ },
      // include the special versioned number (eg. v5.38)
      { match: /\bv?(0|[1-9][0-9_]*(\.[0-9_]+)?|[1-9][0-9_]*)\b/ },
      // non-decimal numbers:
      { match: /\b0[0-7][0-7_]*\b/ },
      { match: /\b0x[0-9a-fA-F][0-9a-fA-F_]*\b/ },
      { match: /\b0b[0-1][0-1_]*\b/ }
    ],
    relevance: 0
  };
  const STRING_CONTAINS = [
    hljs2.BACKSLASH_ESCAPE,
    SUBST,
    VAR
  ];
  const REGEX_DELIMS = [
    /!/,
    /\//,
    /\|/,
    /\?/,
    /'/,
    /"/,
    // valid but infrequent and weird
    /#/
    // valid but infrequent and weird
  ];
  const PAIRED_DOUBLE_RE = (prefix, open, close = "\\1") => {
    const middle = close === "\\1" ? close : regex2.concat(close, open);
    return regex2.concat(
      regex2.concat("(?:", prefix, ")"),
      open,
      /(?:\\.|[^\\\/])*?/,
      middle,
      /(?:\\.|[^\\\/])*?/,
      close,
      REGEX_MODIFIERS
    );
  };
  const PAIRED_RE = (prefix, open, close) => {
    return regex2.concat(
      regex2.concat("(?:", prefix, ")"),
      open,
      /(?:\\.|[^\\\/])*?/,
      close,
      REGEX_MODIFIERS
    );
  };
  const PERL_DEFAULT_CONTAINS = [
    VAR,
    hljs2.HASH_COMMENT_MODE,
    hljs2.COMMENT(
      /^=\w/,
      /=cut/,
      { endsWithParent: true }
    ),
    METHOD,
    {
      className: "string",
      contains: STRING_CONTAINS,
      variants: [
        {
          begin: "q[qwxr]?\\s*\\(",
          end: "\\)",
          relevance: 5
        },
        {
          begin: "q[qwxr]?\\s*\\[",
          end: "\\]",
          relevance: 5
        },
        {
          begin: "q[qwxr]?\\s*\\{",
          end: "\\}",
          relevance: 5
        },
        {
          begin: "q[qwxr]?\\s*\\|",
          end: "\\|",
          relevance: 5
        },
        {
          begin: "q[qwxr]?\\s*<",
          end: ">",
          relevance: 5
        },
        {
          begin: "qw\\s+q",
          end: "q",
          relevance: 5
        },
        {
          begin: "'",
          end: "'",
          contains: [hljs2.BACKSLASH_ESCAPE]
        },
        {
          begin: '"',
          end: '"'
        },
        {
          begin: "`",
          end: "`",
          contains: [hljs2.BACKSLASH_ESCAPE]
        },
        {
          begin: /\{\w+\}/,
          relevance: 0
        },
        {
          begin: "-?\\w+\\s*=>",
          relevance: 0
        }
      ]
    },
    NUMBER,
    {
      // regexp container
      begin: "(\\/\\/|" + hljs2.RE_STARTERS_RE + "|\\b(split|return|print|reverse|grep)\\b)\\s*",
      keywords: "split return print reverse grep",
      relevance: 0,
      contains: [
        hljs2.HASH_COMMENT_MODE,
        {
          className: "regexp",
          variants: [
            // allow matching common delimiters
            { begin: PAIRED_DOUBLE_RE("s|tr|y", regex2.either(...REGEX_DELIMS, { capture: true })) },
            // and then paired delmis
            { begin: PAIRED_DOUBLE_RE("s|tr|y", "\\(", "\\)") },
            { begin: PAIRED_DOUBLE_RE("s|tr|y", "\\[", "\\]") },
            { begin: PAIRED_DOUBLE_RE("s|tr|y", "\\{", "\\}") }
          ],
          relevance: 2
        },
        {
          className: "regexp",
          variants: [
            {
              // could be a comment in many languages so do not count
              // as relevant
              begin: /(m|qr)\/\//,
              relevance: 0
            },
            // prefix is optional with /regex/
            { begin: PAIRED_RE("(?:m|qr)?", /\//, /\//) },
            // allow matching common delimiters
            { begin: PAIRED_RE("m|qr", regex2.either(...REGEX_DELIMS, { capture: true }), /\1/) },
            // allow common paired delmins
            { begin: PAIRED_RE("m|qr", /\(/, /\)/) },
            { begin: PAIRED_RE("m|qr", /\[/, /\]/) },
            { begin: PAIRED_RE("m|qr", /\{/, /\}/) }
          ]
        }
      ]
    },
    {
      className: "function",
      beginKeywords: "sub method",
      end: "(\\s*\\(.*?\\))?[;{]",
      excludeEnd: true,
      relevance: 5,
      contains: [hljs2.TITLE_MODE, ATTR]
    },
    {
      className: "class",
      beginKeywords: "class",
      end: "[;{]",
      excludeEnd: true,
      relevance: 5,
      contains: [hljs2.TITLE_MODE, ATTR, NUMBER]
    },
    {
      begin: "-\\w\\b",
      relevance: 0
    },
    {
      begin: "^__DATA__$",
      end: "^__END__$",
      subLanguage: "mojolicious",
      contains: [
        {
          begin: "^@@.*",
          end: "$",
          className: "comment"
        }
      ]
    }
  ];
  SUBST.contains = PERL_DEFAULT_CONTAINS;
  METHOD.contains = PERL_DEFAULT_CONTAINS;
  return {
    name: "Perl",
    aliases: [
      "pl",
      "pm"
    ],
    keywords: PERL_KEYWORDS,
    contains: PERL_DEFAULT_CONTAINS
  };
}

// node_modules/highlight.js/es/languages/nginx.js
function nginx(hljs2) {
  const regex2 = hljs2.regex;
  const VAR = {
    className: "variable",
    variants: [
      { begin: /\$\d+/ },
      { begin: /\$\{\w+\}/ },
      { begin: regex2.concat(/[$@]/, hljs2.UNDERSCORE_IDENT_RE) }
    ]
  };
  const LITERALS3 = [
    "on",
    "off",
    "yes",
    "no",
    "true",
    "false",
    "none",
    "blocked",
    "debug",
    "info",
    "notice",
    "warn",
    "error",
    "crit",
    "select",
    "break",
    "last",
    "permanent",
    "redirect",
    "kqueue",
    "rtsig",
    "epoll",
    "poll",
    "/dev/poll"
  ];
  const DEFAULT = {
    endsWithParent: true,
    keywords: {
      $pattern: /[a-z_]{2,}|\/dev\/poll/,
      literal: LITERALS3
    },
    relevance: 0,
    illegal: "=>",
    contains: [
      hljs2.HASH_COMMENT_MODE,
      {
        className: "string",
        contains: [
          hljs2.BACKSLASH_ESCAPE,
          VAR
        ],
        variants: [
          {
            begin: /"/,
            end: /"/
          },
          {
            begin: /'/,
            end: /'/
          }
        ]
      },
      // this swallows entire URLs to avoid detecting numbers within
      {
        begin: "([a-z]+):/",
        end: "\\s",
        endsWithParent: true,
        excludeEnd: true,
        contains: [VAR]
      },
      {
        className: "regexp",
        contains: [
          hljs2.BACKSLASH_ESCAPE,
          VAR
        ],
        variants: [
          {
            begin: "\\s\\^",
            end: "\\s|\\{|;",
            returnEnd: true
          },
          // regexp locations (~, ~*)
          {
            begin: "~\\*?\\s+",
            end: "\\s|\\{|;",
            returnEnd: true
          },
          // *.example.com
          { begin: "\\*(\\.[a-z\\-]+)+" },
          // sub.example.*
          { begin: "([a-z\\-]+\\.)+\\*" }
        ]
      },
      // IP
      {
        className: "number",
        begin: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"
      },
      // units
      {
        className: "number",
        begin: "\\b\\d+[kKmMgGdshdwy]?\\b",
        relevance: 0
      },
      VAR
    ]
  };
  return {
    name: "Nginx config",
    aliases: ["nginxconf"],
    contains: [
      hljs2.HASH_COMMENT_MODE,
      {
        beginKeywords: "upstream location",
        end: /;|\{/,
        contains: DEFAULT.contains,
        keywords: { section: "upstream location" }
      },
      {
        className: "section",
        begin: regex2.concat(hljs2.UNDERSCORE_IDENT_RE + regex2.lookahead(/\s+\{/)),
        relevance: 0
      },
      {
        begin: regex2.lookahead(hljs2.UNDERSCORE_IDENT_RE + "\\s"),
        end: ";|\\{",
        contains: [
          {
            className: "attribute",
            begin: hljs2.UNDERSCORE_IDENT_RE,
            starts: DEFAULT
          }
        ],
        relevance: 0
      }
    ],
    illegal: "[^\\s\\}\\{]"
  };
}

// node_modules/highlight.js/es/languages/objectivec.js
function objectivec(hljs2) {
  const API_CLASS = {
    className: "built_in",
    begin: "\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+"
  };
  const IDENTIFIER_RE = /[a-zA-Z@][a-zA-Z0-9_]*/;
  const TYPES3 = [
    "int",
    "float",
    "char",
    "unsigned",
    "signed",
    "short",
    "long",
    "double",
    "wchar_t",
    "unichar",
    "void",
    "bool",
    "BOOL",
    "id|0",
    "_Bool"
  ];
  const KWS = [
    "while",
    "export",
    "sizeof",
    "typedef",
    "const",
    "struct",
    "for",
    "union",
    "volatile",
    "static",
    "mutable",
    "if",
    "do",
    "return",
    "goto",
    "enum",
    "else",
    "break",
    "extern",
    "asm",
    "case",
    "default",
    "register",
    "explicit",
    "typename",
    "switch",
    "continue",
    "inline",
    "readonly",
    "assign",
    "readwrite",
    "self",
    "@synchronized",
    "id",
    "typeof",
    "nonatomic",
    "IBOutlet",
    "IBAction",
    "strong",
    "weak",
    "copy",
    "in",
    "out",
    "inout",
    "bycopy",
    "byref",
    "oneway",
    "__strong",
    "__weak",
    "__block",
    "__autoreleasing",
    "@private",
    "@protected",
    "@public",
    "@try",
    "@property",
    "@end",
    "@throw",
    "@catch",
    "@finally",
    "@autoreleasepool",
    "@synthesize",
    "@dynamic",
    "@selector",
    "@optional",
    "@required",
    "@encode",
    "@package",
    "@import",
    "@defs",
    "@compatibility_alias",
    "__bridge",
    "__bridge_transfer",
    "__bridge_retained",
    "__bridge_retain",
    "__covariant",
    "__contravariant",
    "__kindof",
    "_Nonnull",
    "_Nullable",
    "_Null_unspecified",
    "__FUNCTION__",
    "__PRETTY_FUNCTION__",
    "__attribute__",
    "getter",
    "setter",
    "retain",
    "unsafe_unretained",
    "nonnull",
    "nullable",
    "null_unspecified",
    "null_resettable",
    "class",
    "instancetype",
    "NS_DESIGNATED_INITIALIZER",
    "NS_UNAVAILABLE",
    "NS_REQUIRES_SUPER",
    "NS_RETURNS_INNER_POINTER",
    "NS_INLINE",
    "NS_AVAILABLE",
    "NS_DEPRECATED",
    "NS_ENUM",
    "NS_OPTIONS",
    "NS_SWIFT_UNAVAILABLE",
    "NS_ASSUME_NONNULL_BEGIN",
    "NS_ASSUME_NONNULL_END",
    "NS_REFINED_FOR_SWIFT",
    "NS_SWIFT_NAME",
    "NS_SWIFT_NOTHROW",
    "NS_DURING",
    "NS_HANDLER",
    "NS_ENDHANDLER",
    "NS_VALUERETURN",
    "NS_VOIDRETURN"
  ];
  const LITERALS3 = [
    "false",
    "true",
    "FALSE",
    "TRUE",
    "nil",
    "YES",
    "NO",
    "NULL"
  ];
  const BUILT_INS3 = [
    "dispatch_once_t",
    "dispatch_queue_t",
    "dispatch_sync",
    "dispatch_async",
    "dispatch_once"
  ];
  const KEYWORDS3 = {
    "variable.language": [
      "this",
      "super"
    ],
    $pattern: IDENTIFIER_RE,
    keyword: KWS,
    literal: LITERALS3,
    built_in: BUILT_INS3,
    type: TYPES3
  };
  const CLASS_KEYWORDS = {
    $pattern: IDENTIFIER_RE,
    keyword: [
      "@interface",
      "@class",
      "@protocol",
      "@implementation"
    ]
  };
  return {
    name: "Objective-C",
    aliases: [
      "mm",
      "objc",
      "obj-c",
      "obj-c++",
      "objective-c++"
    ],
    keywords: KEYWORDS3,
    illegal: "</",
    contains: [
      API_CLASS,
      hljs2.C_LINE_COMMENT_MODE,
      hljs2.C_BLOCK_COMMENT_MODE,
      hljs2.C_NUMBER_MODE,
      hljs2.QUOTE_STRING_MODE,
      hljs2.APOS_STRING_MODE,
      {
        className: "string",
        variants: [
          {
            begin: '@"',
            end: '"',
            illegal: "\\n",
            contains: [hljs2.BACKSLASH_ESCAPE]
          }
        ]
      },
      {
        className: "meta",
        begin: /#\s*[a-z]+\b/,
        end: /$/,
        keywords: { keyword: "if else elif endif define undef warning error line pragma ifdef ifndef include" },
        contains: [
          {
            begin: /\\\n/,
            relevance: 0
          },
          hljs2.inherit(hljs2.QUOTE_STRING_MODE, { className: "string" }),
          {
            className: "string",
            begin: /<.*?>/,
            end: /$/,
            illegal: "\\n"
          },
          hljs2.C_LINE_COMMENT_MODE,
          hljs2.C_BLOCK_COMMENT_MODE
        ]
      },
      {
        className: "class",
        begin: "(" + CLASS_KEYWORDS.keyword.join("|") + ")\\b",
        end: /(\{|$)/,
        excludeEnd: true,
        keywords: CLASS_KEYWORDS,
        contains: [hljs2.UNDERSCORE_TITLE_MODE]
      },
      {
        begin: "\\." + hljs2.UNDERSCORE_IDENT_RE,
        relevance: 0
      }
    ]
  };
}

// node_modules/highlight.js/es/languages/pgsql.js
function pgsql(hljs2) {
  const COMMENT_MODE = hljs2.COMMENT("--", "$");
  const UNQUOTED_IDENT = "[a-zA-Z_][a-zA-Z_0-9$]*";
  const DOLLAR_STRING = "\\$([a-zA-Z_]?|[a-zA-Z_][a-zA-Z_0-9]*)\\$";
  const LABEL = "<<\\s*" + UNQUOTED_IDENT + "\\s*>>";
  const SQL_KW = (
    // https://www.postgresql.org/docs/11/static/sql-keywords-appendix.html
    // https://www.postgresql.org/docs/11/static/sql-commands.html
    // SQL commands (starting words)
    "ABORT ALTER ANALYZE BEGIN CALL CHECKPOINT|10 CLOSE CLUSTER COMMENT COMMIT COPY CREATE DEALLOCATE DECLARE DELETE DISCARD DO DROP END EXECUTE EXPLAIN FETCH GRANT IMPORT INSERT LISTEN LOAD LOCK MOVE NOTIFY PREPARE REASSIGN|10 REFRESH REINDEX RELEASE RESET REVOKE ROLLBACK SAVEPOINT SECURITY SELECT SET SHOW START TRUNCATE UNLISTEN|10 UPDATE VACUUM|10 VALUES AGGREGATE COLLATION CONVERSION|10 DATABASE DEFAULT PRIVILEGES DOMAIN TRIGGER EXTENSION FOREIGN WRAPPER|10 TABLE FUNCTION GROUP LANGUAGE LARGE OBJECT MATERIALIZED VIEW OPERATOR CLASS FAMILY POLICY PUBLICATION|10 ROLE RULE SCHEMA SEQUENCE SERVER STATISTICS SUBSCRIPTION SYSTEM TABLESPACE CONFIGURATION DICTIONARY PARSER TEMPLATE TYPE USER MAPPING PREPARED ACCESS METHOD CAST AS TRANSFORM TRANSACTION OWNED TO INTO SESSION AUTHORIZATION INDEX PROCEDURE ASSERTION ALL ANALYSE AND ANY ARRAY ASC ASYMMETRIC|10 BOTH CASE CHECK COLLATE COLUMN CONCURRENTLY|10 CONSTRAINT CROSS DEFERRABLE RANGE DESC DISTINCT ELSE EXCEPT FOR FREEZE|10 FROM FULL HAVING ILIKE IN INITIALLY INNER INTERSECT IS ISNULL JOIN LATERAL LEADING LIKE LIMIT NATURAL NOT NOTNULL NULL OFFSET ON ONLY OR ORDER OUTER OVERLAPS PLACING PRIMARY REFERENCES RETURNING SIMILAR SOME SYMMETRIC TABLESAMPLE THEN TRAILING UNION UNIQUE USING VARIADIC|10 VERBOSE WHEN WHERE WINDOW WITH BY RETURNS INOUT OUT SETOF|10 IF STRICT CURRENT CONTINUE OWNER LOCATION OVER PARTITION WITHIN BETWEEN ESCAPE EXTERNAL INVOKER DEFINER WORK RENAME VERSION CONNECTION CONNECT TABLES TEMP TEMPORARY FUNCTIONS SEQUENCES TYPES SCHEMAS OPTION CASCADE RESTRICT ADD ADMIN EXISTS VALID VALIDATE ENABLE DISABLE REPLICA|10 ALWAYS PASSING COLUMNS PATH REF VALUE OVERRIDING IMMUTABLE STABLE VOLATILE BEFORE AFTER EACH ROW PROCEDURAL ROUTINE NO HANDLER VALIDATOR OPTIONS STORAGE OIDS|10 WITHOUT INHERIT DEPENDS CALLED INPUT LEAKPROOF|10 COST ROWS NOWAIT SEARCH UNTIL ENCRYPTED|10 PASSWORD CONFLICT|10 INSTEAD INHERITS CHARACTERISTICS WRITE CURSOR ALSO STATEMENT SHARE EXCLUSIVE INLINE ISOLATION REPEATABLE READ COMMITTED SERIALIZABLE UNCOMMITTED LOCAL GLOBAL SQL PROCEDURES RECURSIVE SNAPSHOT ROLLUP CUBE TRUSTED|10 INCLUDE FOLLOWING PRECEDING UNBOUNDED RANGE GROUPS UNENCRYPTED|10 SYSID FORMAT DELIMITER HEADER QUOTE ENCODING FILTER OFF FORCE_QUOTE FORCE_NOT_NULL FORCE_NULL COSTS BUFFERS TIMING SUMMARY DISABLE_PAGE_SKIPPING RESTART CYCLE GENERATED IDENTITY DEFERRED IMMEDIATE LEVEL LOGGED UNLOGGED OF NOTHING NONE EXCLUDE ATTRIBUTE USAGE ROUTINES TRUE FALSE NAN INFINITY "
  );
  const ROLE_ATTRS = (
    // only those not in keywrods already
    "SUPERUSER NOSUPERUSER CREATEDB NOCREATEDB CREATEROLE NOCREATEROLE INHERIT NOINHERIT LOGIN NOLOGIN REPLICATION NOREPLICATION BYPASSRLS NOBYPASSRLS "
  );
  const PLPGSQL_KW = "ALIAS BEGIN CONSTANT DECLARE END EXCEPTION RETURN PERFORM|10 RAISE GET DIAGNOSTICS STACKED|10 FOREACH LOOP ELSIF EXIT WHILE REVERSE SLICE DEBUG LOG INFO NOTICE WARNING ASSERT OPEN ";
  const TYPES3 = (
    // https://www.postgresql.org/docs/11/static/datatype.html
    "BIGINT INT8 BIGSERIAL SERIAL8 BIT VARYING VARBIT BOOLEAN BOOL BOX BYTEA CHARACTER CHAR VARCHAR CIDR CIRCLE DATE DOUBLE PRECISION FLOAT8 FLOAT INET INTEGER INT INT4 INTERVAL JSON JSONB LINE LSEG|10 MACADDR MACADDR8 MONEY NUMERIC DEC DECIMAL PATH POINT POLYGON REAL FLOAT4 SMALLINT INT2 SMALLSERIAL|10 SERIAL2|10 SERIAL|10 SERIAL4|10 TEXT TIME ZONE TIMETZ|10 TIMESTAMP TIMESTAMPTZ|10 TSQUERY|10 TSVECTOR|10 TXID_SNAPSHOT|10 UUID XML NATIONAL NCHAR INT4RANGE|10 INT8RANGE|10 NUMRANGE|10 TSRANGE|10 TSTZRANGE|10 DATERANGE|10 ANYELEMENT ANYARRAY ANYNONARRAY ANYENUM ANYRANGE CSTRING INTERNAL RECORD PG_DDL_COMMAND VOID UNKNOWN OPAQUE REFCURSOR NAME OID REGPROC|10 REGPROCEDURE|10 REGOPER|10 REGOPERATOR|10 REGCLASS|10 REGTYPE|10 REGROLE|10 REGNAMESPACE|10 REGCONFIG|10 REGDICTIONARY|10 "
  );
  const TYPES_RE = TYPES3.trim().split(" ").map(function(val) {
    return val.split("|")[0];
  }).join("|");
  const SQL_BI = "CURRENT_TIME CURRENT_TIMESTAMP CURRENT_USER CURRENT_CATALOG|10 CURRENT_DATE LOCALTIME LOCALTIMESTAMP CURRENT_ROLE|10 CURRENT_SCHEMA|10 SESSION_USER PUBLIC ";
  const PLPGSQL_BI = "FOUND NEW OLD TG_NAME|10 TG_WHEN|10 TG_LEVEL|10 TG_OP|10 TG_RELID|10 TG_RELNAME|10 TG_TABLE_NAME|10 TG_TABLE_SCHEMA|10 TG_NARGS|10 TG_ARGV|10 TG_EVENT|10 TG_TAG|10 ROW_COUNT RESULT_OID|10 PG_CONTEXT|10 RETURNED_SQLSTATE COLUMN_NAME CONSTRAINT_NAME PG_DATATYPE_NAME|10 MESSAGE_TEXT TABLE_NAME SCHEMA_NAME PG_EXCEPTION_DETAIL|10 PG_EXCEPTION_HINT|10 PG_EXCEPTION_CONTEXT|10 ";
  const PLPGSQL_EXCEPTIONS = (
    // exceptions https://www.postgresql.org/docs/current/static/errcodes-appendix.html
    "SQLSTATE SQLERRM|10 SUCCESSFUL_COMPLETION WARNING DYNAMIC_RESULT_SETS_RETURNED IMPLICIT_ZERO_BIT_PADDING NULL_VALUE_ELIMINATED_IN_SET_FUNCTION PRIVILEGE_NOT_GRANTED PRIVILEGE_NOT_REVOKED STRING_DATA_RIGHT_TRUNCATION DEPRECATED_FEATURE NO_DATA NO_ADDITIONAL_DYNAMIC_RESULT_SETS_RETURNED SQL_STATEMENT_NOT_YET_COMPLETE CONNECTION_EXCEPTION CONNECTION_DOES_NOT_EXIST CONNECTION_FAILURE SQLCLIENT_UNABLE_TO_ESTABLISH_SQLCONNECTION SQLSERVER_REJECTED_ESTABLISHMENT_OF_SQLCONNECTION TRANSACTION_RESOLUTION_UNKNOWN PROTOCOL_VIOLATION TRIGGERED_ACTION_EXCEPTION FEATURE_NOT_SUPPORTED INVALID_TRANSACTION_INITIATION LOCATOR_EXCEPTION INVALID_LOCATOR_SPECIFICATION INVALID_GRANTOR INVALID_GRANT_OPERATION INVALID_ROLE_SPECIFICATION DIAGNOSTICS_EXCEPTION STACKED_DIAGNOSTICS_ACCESSED_WITHOUT_ACTIVE_HANDLER CASE_NOT_FOUND CARDINALITY_VIOLATION DATA_EXCEPTION ARRAY_SUBSCRIPT_ERROR CHARACTER_NOT_IN_REPERTOIRE DATETIME_FIELD_OVERFLOW DIVISION_BY_ZERO ERROR_IN_ASSIGNMENT ESCAPE_CHARACTER_CONFLICT INDICATOR_OVERFLOW INTERVAL_FIELD_OVERFLOW INVALID_ARGUMENT_FOR_LOGARITHM INVALID_ARGUMENT_FOR_NTILE_FUNCTION INVALID_ARGUMENT_FOR_NTH_VALUE_FUNCTION INVALID_ARGUMENT_FOR_POWER_FUNCTION INVALID_ARGUMENT_FOR_WIDTH_BUCKET_FUNCTION INVALID_CHARACTER_VALUE_FOR_CAST INVALID_DATETIME_FORMAT INVALID_ESCAPE_CHARACTER INVALID_ESCAPE_OCTET INVALID_ESCAPE_SEQUENCE NONSTANDARD_USE_OF_ESCAPE_CHARACTER INVALID_INDICATOR_PARAMETER_VALUE INVALID_PARAMETER_VALUE INVALID_REGULAR_EXPRESSION INVALID_ROW_COUNT_IN_LIMIT_CLAUSE INVALID_ROW_COUNT_IN_RESULT_OFFSET_CLAUSE INVALID_TABLESAMPLE_ARGUMENT INVALID_TABLESAMPLE_REPEAT INVALID_TIME_ZONE_DISPLACEMENT_VALUE INVALID_USE_OF_ESCAPE_CHARACTER MOST_SPECIFIC_TYPE_MISMATCH NULL_VALUE_NOT_ALLOWED NULL_VALUE_NO_INDICATOR_PARAMETER NUMERIC_VALUE_OUT_OF_RANGE SEQUENCE_GENERATOR_LIMIT_EXCEEDED STRING_DATA_LENGTH_MISMATCH STRING_DATA_RIGHT_TRUNCATION SUBSTRING_ERROR TRIM_ERROR UNTERMINATED_C_STRING ZERO_LENGTH_CHARACTER_STRING FLOATING_POINT_EXCEPTION INVALID_TEXT_REPRESENTATION INVALID_BINARY_REPRESENTATION BAD_COPY_FILE_FORMAT UNTRANSLATABLE_CHARACTER NOT_AN_XML_DOCUMENT INVALID_XML_DOCUMENT INVALID_XML_CONTENT INVALID_XML_COMMENT INVALID_XML_PROCESSING_INSTRUCTION INTEGRITY_CONSTRAINT_VIOLATION RESTRICT_VIOLATION NOT_NULL_VIOLATION FOREIGN_KEY_VIOLATION UNIQUE_VIOLATION CHECK_VIOLATION EXCLUSION_VIOLATION INVALID_CURSOR_STATE INVALID_TRANSACTION_STATE ACTIVE_SQL_TRANSACTION BRANCH_TRANSACTION_ALREADY_ACTIVE HELD_CURSOR_REQUIRES_SAME_ISOLATION_LEVEL INAPPROPRIATE_ACCESS_MODE_FOR_BRANCH_TRANSACTION INAPPROPRIATE_ISOLATION_LEVEL_FOR_BRANCH_TRANSACTION NO_ACTIVE_SQL_TRANSACTION_FOR_BRANCH_TRANSACTION READ_ONLY_SQL_TRANSACTION SCHEMA_AND_DATA_STATEMENT_MIXING_NOT_SUPPORTED NO_ACTIVE_SQL_TRANSACTION IN_FAILED_SQL_TRANSACTION IDLE_IN_TRANSACTION_SESSION_TIMEOUT INVALID_SQL_STATEMENT_NAME TRIGGERED_DATA_CHANGE_VIOLATION INVALID_AUTHORIZATION_SPECIFICATION INVALID_PASSWORD DEPENDENT_PRIVILEGE_DESCRIPTORS_STILL_EXIST DEPENDENT_OBJECTS_STILL_EXIST INVALID_TRANSACTION_TERMINATION SQL_ROUTINE_EXCEPTION FUNCTION_EXECUTED_NO_RETURN_STATEMENT MODIFYING_SQL_DATA_NOT_PERMITTED PROHIBITED_SQL_STATEMENT_ATTEMPTED READING_SQL_DATA_NOT_PERMITTED INVALID_CURSOR_NAME EXTERNAL_ROUTINE_EXCEPTION CONTAINING_SQL_NOT_PERMITTED MODIFYING_SQL_DATA_NOT_PERMITTED PROHIBITED_SQL_STATEMENT_ATTEMPTED READING_SQL_DATA_NOT_PERMITTED EXTERNAL_ROUTINE_INVOCATION_EXCEPTION INVALID_SQLSTATE_RETURNED NULL_VALUE_NOT_ALLOWED TRIGGER_PROTOCOL_VIOLATED SRF_PROTOCOL_VIOLATED EVENT_TRIGGER_PROTOCOL_VIOLATED SAVEPOINT_EXCEPTION INVALID_SAVEPOINT_SPECIFICATION INVALID_CATALOG_NAME INVALID_SCHEMA_NAME TRANSACTION_ROLLBACK TRANSACTION_INTEGRITY_CONSTRAINT_VIOLATION SERIALIZATION_FAILURE STATEMENT_COMPLETION_UNKNOWN DEADLOCK_DETECTED SYNTAX_ERROR_OR_ACCESS_RULE_VIOLATION SYNTAX_ERROR INSUFFICIENT_PRIVILEGE CANNOT_COERCE GROUPING_ERROR WINDOWING_ERROR INVALID_RECURSION INVALID_FOREIGN_KEY INVALID_NAME NAME_TOO_LONG RESERVED_NAME DATATYPE_MISMATCH INDETERMINATE_DATATYPE COLLATION_MISMATCH INDETERMINATE_COLLATION WRONG_OBJECT_TYPE GENERATED_ALWAYS UNDEFINED_COLUMN UNDEFINED_FUNCTION UNDEFINED_TABLE UNDEFINED_PARAMETER UNDEFINED_OBJECT DUPLICATE_COLUMN DUPLICATE_CURSOR DUPLICATE_DATABASE DUPLICATE_FUNCTION DUPLICATE_PREPARED_STATEMENT DUPLICATE_SCHEMA DUPLICATE_TABLE DUPLICATE_ALIAS DUPLICATE_OBJECT AMBIGUOUS_COLUMN AMBIGUOUS_FUNCTION AMBIGUOUS_PARAMETER AMBIGUOUS_ALIAS INVALID_COLUMN_REFERENCE INVALID_COLUMN_DEFINITION INVALID_CURSOR_DEFINITION INVALID_DATABASE_DEFINITION INVALID_FUNCTION_DEFINITION INVALID_PREPARED_STATEMENT_DEFINITION INVALID_SCHEMA_DEFINITION INVALID_TABLE_DEFINITION INVALID_OBJECT_DEFINITION WITH_CHECK_OPTION_VIOLATION INSUFFICIENT_RESOURCES DISK_FULL OUT_OF_MEMORY TOO_MANY_CONNECTIONS CONFIGURATION_LIMIT_EXCEEDED PROGRAM_LIMIT_EXCEEDED STATEMENT_TOO_COMPLEX TOO_MANY_COLUMNS TOO_MANY_ARGUMENTS OBJECT_NOT_IN_PREREQUISITE_STATE OBJECT_IN_USE CANT_CHANGE_RUNTIME_PARAM LOCK_NOT_AVAILABLE OPERATOR_INTERVENTION QUERY_CANCELED ADMIN_SHUTDOWN CRASH_SHUTDOWN CANNOT_CONNECT_NOW DATABASE_DROPPED SYSTEM_ERROR IO_ERROR UNDEFINED_FILE DUPLICATE_FILE SNAPSHOT_TOO_OLD CONFIG_FILE_ERROR LOCK_FILE_EXISTS FDW_ERROR FDW_COLUMN_NAME_NOT_FOUND FDW_DYNAMIC_PARAMETER_VALUE_NEEDED FDW_FUNCTION_SEQUENCE_ERROR FDW_INCONSISTENT_DESCRIPTOR_INFORMATION FDW_INVALID_ATTRIBUTE_VALUE FDW_INVALID_COLUMN_NAME FDW_INVALID_COLUMN_NUMBER FDW_INVALID_DATA_TYPE FDW_INVALID_DATA_TYPE_DESCRIPTORS FDW_INVALID_DESCRIPTOR_FIELD_IDENTIFIER FDW_INVALID_HANDLE FDW_INVALID_OPTION_INDEX FDW_INVALID_OPTION_NAME FDW_INVALID_STRING_LENGTH_OR_BUFFER_LENGTH FDW_INVALID_STRING_FORMAT FDW_INVALID_USE_OF_NULL_POINTER FDW_TOO_MANY_HANDLES FDW_OUT_OF_MEMORY FDW_NO_SCHEMAS FDW_OPTION_NAME_NOT_FOUND FDW_REPLY_HANDLE FDW_SCHEMA_NOT_FOUND FDW_TABLE_NOT_FOUND FDW_UNABLE_TO_CREATE_EXECUTION FDW_UNABLE_TO_CREATE_REPLY FDW_UNABLE_TO_ESTABLISH_CONNECTION PLPGSQL_ERROR RAISE_EXCEPTION NO_DATA_FOUND TOO_MANY_ROWS ASSERT_FAILURE INTERNAL_ERROR DATA_CORRUPTED INDEX_CORRUPTED "
  );
  const FUNCTIONS = (
    // https://www.postgresql.org/docs/11/static/functions-aggregate.html
    "ARRAY_AGG AVG BIT_AND BIT_OR BOOL_AND BOOL_OR COUNT EVERY JSON_AGG JSONB_AGG JSON_OBJECT_AGG JSONB_OBJECT_AGG MAX MIN MODE STRING_AGG SUM XMLAGG CORR COVAR_POP COVAR_SAMP REGR_AVGX REGR_AVGY REGR_COUNT REGR_INTERCEPT REGR_R2 REGR_SLOPE REGR_SXX REGR_SXY REGR_SYY STDDEV STDDEV_POP STDDEV_SAMP VARIANCE VAR_POP VAR_SAMP PERCENTILE_CONT PERCENTILE_DISC ROW_NUMBER RANK DENSE_RANK PERCENT_RANK CUME_DIST NTILE LAG LEAD FIRST_VALUE LAST_VALUE NTH_VALUE NUM_NONNULLS NUM_NULLS ABS CBRT CEIL CEILING DEGREES DIV EXP FLOOR LN LOG MOD PI POWER RADIANS ROUND SCALE SIGN SQRT TRUNC WIDTH_BUCKET RANDOM SETSEED ACOS ACOSD ASIN ASIND ATAN ATAND ATAN2 ATAN2D COS COSD COT COTD SIN SIND TAN TAND BIT_LENGTH CHAR_LENGTH CHARACTER_LENGTH LOWER OCTET_LENGTH OVERLAY POSITION SUBSTRING TREAT TRIM UPPER ASCII BTRIM CHR CONCAT CONCAT_WS CONVERT CONVERT_FROM CONVERT_TO DECODE ENCODE INITCAP LEFT LENGTH LPAD LTRIM MD5 PARSE_IDENT PG_CLIENT_ENCODING QUOTE_IDENT|10 QUOTE_LITERAL|10 QUOTE_NULLABLE|10 REGEXP_MATCH REGEXP_MATCHES REGEXP_REPLACE REGEXP_SPLIT_TO_ARRAY REGEXP_SPLIT_TO_TABLE REPEAT REPLACE REVERSE RIGHT RPAD RTRIM SPLIT_PART STRPOS SUBSTR TO_ASCII TO_HEX TRANSLATE OCTET_LENGTH GET_BIT GET_BYTE SET_BIT SET_BYTE TO_CHAR TO_DATE TO_NUMBER TO_TIMESTAMP AGE CLOCK_TIMESTAMP|10 DATE_PART DATE_TRUNC ISFINITE JUSTIFY_DAYS JUSTIFY_HOURS JUSTIFY_INTERVAL MAKE_DATE MAKE_INTERVAL|10 MAKE_TIME MAKE_TIMESTAMP|10 MAKE_TIMESTAMPTZ|10 NOW STATEMENT_TIMESTAMP|10 TIMEOFDAY TRANSACTION_TIMESTAMP|10 ENUM_FIRST ENUM_LAST ENUM_RANGE AREA CENTER DIAMETER HEIGHT ISCLOSED ISOPEN NPOINTS PCLOSE POPEN RADIUS WIDTH BOX BOUND_BOX CIRCLE LINE LSEG PATH POLYGON ABBREV BROADCAST HOST HOSTMASK MASKLEN NETMASK NETWORK SET_MASKLEN TEXT INET_SAME_FAMILY INET_MERGE MACADDR8_SET7BIT ARRAY_TO_TSVECTOR GET_CURRENT_TS_CONFIG NUMNODE PLAINTO_TSQUERY PHRASETO_TSQUERY WEBSEARCH_TO_TSQUERY QUERYTREE SETWEIGHT STRIP TO_TSQUERY TO_TSVECTOR JSON_TO_TSVECTOR JSONB_TO_TSVECTOR TS_DELETE TS_FILTER TS_HEADLINE TS_RANK TS_RANK_CD TS_REWRITE TSQUERY_PHRASE TSVECTOR_TO_ARRAY TSVECTOR_UPDATE_TRIGGER TSVECTOR_UPDATE_TRIGGER_COLUMN XMLCOMMENT XMLCONCAT XMLELEMENT XMLFOREST XMLPI XMLROOT XMLEXISTS XML_IS_WELL_FORMED XML_IS_WELL_FORMED_DOCUMENT XML_IS_WELL_FORMED_CONTENT XPATH XPATH_EXISTS XMLTABLE XMLNAMESPACES TABLE_TO_XML TABLE_TO_XMLSCHEMA TABLE_TO_XML_AND_XMLSCHEMA QUERY_TO_XML QUERY_TO_XMLSCHEMA QUERY_TO_XML_AND_XMLSCHEMA CURSOR_TO_XML CURSOR_TO_XMLSCHEMA SCHEMA_TO_XML SCHEMA_TO_XMLSCHEMA SCHEMA_TO_XML_AND_XMLSCHEMA DATABASE_TO_XML DATABASE_TO_XMLSCHEMA DATABASE_TO_XML_AND_XMLSCHEMA XMLATTRIBUTES TO_JSON TO_JSONB ARRAY_TO_JSON ROW_TO_JSON JSON_BUILD_ARRAY JSONB_BUILD_ARRAY JSON_BUILD_OBJECT JSONB_BUILD_OBJECT JSON_OBJECT JSONB_OBJECT JSON_ARRAY_LENGTH JSONB_ARRAY_LENGTH JSON_EACH JSONB_EACH JSON_EACH_TEXT JSONB_EACH_TEXT JSON_EXTRACT_PATH JSONB_EXTRACT_PATH JSON_OBJECT_KEYS JSONB_OBJECT_KEYS JSON_POPULATE_RECORD JSONB_POPULATE_RECORD JSON_POPULATE_RECORDSET JSONB_POPULATE_RECORDSET JSON_ARRAY_ELEMENTS JSONB_ARRAY_ELEMENTS JSON_ARRAY_ELEMENTS_TEXT JSONB_ARRAY_ELEMENTS_TEXT JSON_TYPEOF JSONB_TYPEOF JSON_TO_RECORD JSONB_TO_RECORD JSON_TO_RECORDSET JSONB_TO_RECORDSET JSON_STRIP_NULLS JSONB_STRIP_NULLS JSONB_SET JSONB_INSERT JSONB_PRETTY CURRVAL LASTVAL NEXTVAL SETVAL COALESCE NULLIF GREATEST LEAST ARRAY_APPEND ARRAY_CAT ARRAY_NDIMS ARRAY_DIMS ARRAY_FILL ARRAY_LENGTH ARRAY_LOWER ARRAY_POSITION ARRAY_POSITIONS ARRAY_PREPEND ARRAY_REMOVE ARRAY_REPLACE ARRAY_TO_STRING ARRAY_UPPER CARDINALITY STRING_TO_ARRAY UNNEST ISEMPTY LOWER_INC UPPER_INC LOWER_INF UPPER_INF RANGE_MERGE GENERATE_SERIES GENERATE_SUBSCRIPTS CURRENT_DATABASE CURRENT_QUERY CURRENT_SCHEMA|10 CURRENT_SCHEMAS|10 INET_CLIENT_ADDR INET_CLIENT_PORT INET_SERVER_ADDR INET_SERVER_PORT ROW_SECURITY_ACTIVE FORMAT_TYPE TO_REGCLASS TO_REGPROC TO_REGPROCEDURE TO_REGOPER TO_REGOPERATOR TO_REGTYPE TO_REGNAMESPACE TO_REGROLE COL_DESCRIPTION OBJ_DESCRIPTION SHOBJ_DESCRIPTION TXID_CURRENT TXID_CURRENT_IF_ASSIGNED TXID_CURRENT_SNAPSHOT TXID_SNAPSHOT_XIP TXID_SNAPSHOT_XMAX TXID_SNAPSHOT_XMIN TXID_VISIBLE_IN_SNAPSHOT TXID_STATUS CURRENT_SETTING SET_CONFIG BRIN_SUMMARIZE_NEW_VALUES BRIN_SUMMARIZE_RANGE BRIN_DESUMMARIZE_RANGE GIN_CLEAN_PENDING_LIST SUPPRESS_REDUNDANT_UPDATES_TRIGGER LO_FROM_BYTEA LO_PUT LO_GET LO_CREAT LO_CREATE LO_UNLINK LO_IMPORT LO_EXPORT LOREAD LOWRITE GROUPING CAST "
  );
  const FUNCTIONS_RE = FUNCTIONS.trim().split(" ").map(function(val) {
    return val.split("|")[0];
  }).join("|");
  return {
    name: "PostgreSQL",
    aliases: [
      "postgres",
      "postgresql"
    ],
    supersetOf: "sql",
    case_insensitive: true,
    keywords: {
      keyword: SQL_KW + PLPGSQL_KW + ROLE_ATTRS,
      built_in: SQL_BI + PLPGSQL_BI + PLPGSQL_EXCEPTIONS
    },
    // Forbid some cunstructs from other languages to improve autodetect. In fact
    // "[a-z]:" is legal (as part of array slice), but improbabal.
    illegal: /:==|\W\s*\(\*|(^|\s)\$[a-z]|\{\{|[a-z]:\s*$|\.\.\.|TO:|DO:/,
    contains: [
      // special handling of some words, which are reserved only in some contexts
      {
        className: "keyword",
        variants: [
          { begin: /\bTEXT\s*SEARCH\b/ },
          { begin: /\b(PRIMARY|FOREIGN|FOR(\s+NO)?)\s+KEY\b/ },
          { begin: /\bPARALLEL\s+(UNSAFE|RESTRICTED|SAFE)\b/ },
          { begin: /\bSTORAGE\s+(PLAIN|EXTERNAL|EXTENDED|MAIN)\b/ },
          { begin: /\bMATCH\s+(FULL|PARTIAL|SIMPLE)\b/ },
          { begin: /\bNULLS\s+(FIRST|LAST)\b/ },
          { begin: /\bEVENT\s+TRIGGER\b/ },
          { begin: /\b(MAPPING|OR)\s+REPLACE\b/ },
          { begin: /\b(FROM|TO)\s+(PROGRAM|STDIN|STDOUT)\b/ },
          { begin: /\b(SHARE|EXCLUSIVE)\s+MODE\b/ },
          { begin: /\b(LEFT|RIGHT)\s+(OUTER\s+)?JOIN\b/ },
          { begin: /\b(FETCH|MOVE)\s+(NEXT|PRIOR|FIRST|LAST|ABSOLUTE|RELATIVE|FORWARD|BACKWARD)\b/ },
          { begin: /\bPRESERVE\s+ROWS\b/ },
          { begin: /\bDISCARD\s+PLANS\b/ },
          { begin: /\bREFERENCING\s+(OLD|NEW)\b/ },
          { begin: /\bSKIP\s+LOCKED\b/ },
          { begin: /\bGROUPING\s+SETS\b/ },
          { begin: /\b(BINARY|INSENSITIVE|SCROLL|NO\s+SCROLL)\s+(CURSOR|FOR)\b/ },
          { begin: /\b(WITH|WITHOUT)\s+HOLD\b/ },
          { begin: /\bWITH\s+(CASCADED|LOCAL)\s+CHECK\s+OPTION\b/ },
          { begin: /\bEXCLUDE\s+(TIES|NO\s+OTHERS)\b/ },
          { begin: /\bFORMAT\s+(TEXT|XML|JSON|YAML)\b/ },
          { begin: /\bSET\s+((SESSION|LOCAL)\s+)?NAMES\b/ },
          { begin: /\bIS\s+(NOT\s+)?UNKNOWN\b/ },
          { begin: /\bSECURITY\s+LABEL\b/ },
          { begin: /\bSTANDALONE\s+(YES|NO|NO\s+VALUE)\b/ },
          { begin: /\bWITH\s+(NO\s+)?DATA\b/ },
          { begin: /\b(FOREIGN|SET)\s+DATA\b/ },
          { begin: /\bSET\s+(CATALOG|CONSTRAINTS)\b/ },
          { begin: /\b(WITH|FOR)\s+ORDINALITY\b/ },
          { begin: /\bIS\s+(NOT\s+)?DOCUMENT\b/ },
          { begin: /\bXML\s+OPTION\s+(DOCUMENT|CONTENT)\b/ },
          { begin: /\b(STRIP|PRESERVE)\s+WHITESPACE\b/ },
          { begin: /\bNO\s+(ACTION|MAXVALUE|MINVALUE)\b/ },
          { begin: /\bPARTITION\s+BY\s+(RANGE|LIST|HASH)\b/ },
          { begin: /\bAT\s+TIME\s+ZONE\b/ },
          { begin: /\bGRANTED\s+BY\b/ },
          { begin: /\bRETURN\s+(QUERY|NEXT)\b/ },
          { begin: /\b(ATTACH|DETACH)\s+PARTITION\b/ },
          { begin: /\bFORCE\s+ROW\s+LEVEL\s+SECURITY\b/ },
          { begin: /\b(INCLUDING|EXCLUDING)\s+(COMMENTS|CONSTRAINTS|DEFAULTS|IDENTITY|INDEXES|STATISTICS|STORAGE|ALL)\b/ },
          { begin: /\bAS\s+(ASSIGNMENT|IMPLICIT|PERMISSIVE|RESTRICTIVE|ENUM|RANGE)\b/ }
        ]
      },
      // functions named as keywords, followed by '('
      {
        begin: /\b(FORMAT|FAMILY|VERSION)\s*\(/
        // keywords: { built_in: 'FORMAT FAMILY VERSION' }
      },
      // INCLUDE ( ... ) in index_parameters in CREATE TABLE
      {
        begin: /\bINCLUDE\s*\(/,
        keywords: "INCLUDE"
      },
      // not highlight RANGE if not in frame_clause (not 100% correct, but seems satisfactory)
      { begin: /\bRANGE(?!\s*(BETWEEN|UNBOUNDED|CURRENT|[-0-9]+))/ },
      // disable highlighting in commands CREATE AGGREGATE/COLLATION/DATABASE/OPERTOR/TEXT SEARCH .../TYPE
      // and in PL/pgSQL RAISE ... USING
      { begin: /\b(VERSION|OWNER|TEMPLATE|TABLESPACE|CONNECTION\s+LIMIT|PROCEDURE|RESTRICT|JOIN|PARSER|COPY|START|END|COLLATION|INPUT|ANALYZE|STORAGE|LIKE|DEFAULT|DELIMITER|ENCODING|COLUMN|CONSTRAINT|TABLE|SCHEMA)\s*=/ },
      // PG_smth; HAS_some_PRIVILEGE
      {
        // className: 'built_in',
        begin: /\b(PG_\w+?|HAS_[A-Z_]+_PRIVILEGE)\b/,
        relevance: 10
      },
      // extract
      {
        begin: /\bEXTRACT\s*\(/,
        end: /\bFROM\b/,
        returnEnd: true,
        keywords: {
          // built_in: 'EXTRACT',
          type: "CENTURY DAY DECADE DOW DOY EPOCH HOUR ISODOW ISOYEAR MICROSECONDS MILLENNIUM MILLISECONDS MINUTE MONTH QUARTER SECOND TIMEZONE TIMEZONE_HOUR TIMEZONE_MINUTE WEEK YEAR"
        }
      },
      // xmlelement, xmlpi - special NAME
      {
        begin: /\b(XMLELEMENT|XMLPI)\s*\(\s*NAME/,
        keywords: {
          // built_in: 'XMLELEMENT XMLPI',
          keyword: "NAME"
        }
      },
      // xmlparse, xmlserialize
      {
        begin: /\b(XMLPARSE|XMLSERIALIZE)\s*\(\s*(DOCUMENT|CONTENT)/,
        keywords: {
          // built_in: 'XMLPARSE XMLSERIALIZE',
          keyword: "DOCUMENT CONTENT"
        }
      },
      // Sequences. We actually skip everything between CACHE|INCREMENT|MAXVALUE|MINVALUE and
      // nearest following numeric constant. Without with trick we find a lot of "keywords"
      // in 'avrasm' autodetection test...
      {
        beginKeywords: "CACHE INCREMENT MAXVALUE MINVALUE",
        end: hljs2.C_NUMBER_RE,
        returnEnd: true,
        keywords: "BY CACHE INCREMENT MAXVALUE MINVALUE"
      },
      // WITH|WITHOUT TIME ZONE as part of datatype
      {
        className: "type",
        begin: /\b(WITH|WITHOUT)\s+TIME\s+ZONE\b/
      },
      // INTERVAL optional fields
      {
        className: "type",
        begin: /\bINTERVAL\s+(YEAR|MONTH|DAY|HOUR|MINUTE|SECOND)(\s+TO\s+(MONTH|HOUR|MINUTE|SECOND))?\b/
      },
      // Pseudo-types which allowed only as return type
      {
        begin: /\bRETURNS\s+(LANGUAGE_HANDLER|TRIGGER|EVENT_TRIGGER|FDW_HANDLER|INDEX_AM_HANDLER|TSM_HANDLER)\b/,
        keywords: {
          keyword: "RETURNS",
          type: "LANGUAGE_HANDLER TRIGGER EVENT_TRIGGER FDW_HANDLER INDEX_AM_HANDLER TSM_HANDLER"
        }
      },
      // Known functions - only when followed by '('
      {
        begin: "\\b(" + FUNCTIONS_RE + ")\\s*\\("
        // keywords: { built_in: FUNCTIONS }
      },
      // Types
      {
        begin: "\\.(" + TYPES_RE + ")\\b"
        // prevent highlight as type, say, 'oid' in 'pgclass.oid'
      },
      {
        begin: "\\b(" + TYPES_RE + ")\\s+PATH\\b",
        // in XMLTABLE
        keywords: {
          keyword: "PATH",
          // hopefully no one would use PATH type in XMLTABLE...
          type: TYPES3.replace("PATH ", "")
        }
      },
      {
        className: "type",
        begin: "\\b(" + TYPES_RE + ")\\b"
      },
      // Strings, see https://www.postgresql.org/docs/11/static/sql-syntax-lexical.html#SQL-SYNTAX-CONSTANTS
      {
        className: "string",
        begin: "'",
        end: "'",
        contains: [{ begin: "''" }]
      },
      {
        className: "string",
        begin: "(e|E|u&|U&)'",
        end: "'",
        contains: [{ begin: "\\\\." }],
        relevance: 10
      },
      hljs2.END_SAME_AS_BEGIN({
        begin: DOLLAR_STRING,
        end: DOLLAR_STRING,
        contains: [
          {
            // actually we want them all except SQL; listed are those with known implementations
            // and XML + JSON just in case
            subLanguage: [
              "pgsql",
              "perl",
              "python",
              "tcl",
              "r",
              "lua",
              "java",
              "php",
              "ruby",
              "bash",
              "scheme",
              "xml",
              "json"
            ],
            endsWithParent: true
          }
        ]
      }),
      // identifiers in quotes
      {
        begin: '"',
        end: '"',
        contains: [{ begin: '""' }]
      },
      // numbers
      hljs2.C_NUMBER_MODE,
      // comments
      hljs2.C_BLOCK_COMMENT_MODE,
      COMMENT_MODE,
      // PL/pgSQL staff
      // %ROWTYPE, %TYPE, $n
      {
        className: "meta",
        variants: [
          {
            // %TYPE, %ROWTYPE
            begin: "%(ROW)?TYPE",
            relevance: 10
          },
          {
            // $n
            begin: "\\$\\d+"
          },
          {
            // #compiler option
            begin: "^#\\w",
            end: "$"
          }
        ]
      },
      // <<labeles>>
      {
        className: "symbol",
        begin: LABEL,
        relevance: 10
      }
    ]
  };
}

// node_modules/highlight.js/es/languages/php.js
function php(hljs2) {
  const regex2 = hljs2.regex;
  const NOT_PERL_ETC = /(?![A-Za-z0-9])(?![$])/;
  const IDENT_RE3 = regex2.concat(
    /[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/,
    NOT_PERL_ETC
  );
  const PASCAL_CASE_CLASS_NAME_RE = regex2.concat(
    /(\\?[A-Z][a-z0-9_\x7f-\xff]+|\\?[A-Z]+(?=[A-Z][a-z0-9_\x7f-\xff])){1,}/,
    NOT_PERL_ETC
  );
  const UPCASE_NAME_RE = regex2.concat(
    /[A-Z]+/,
    NOT_PERL_ETC
  );
  const VARIABLE = {
    scope: "variable",
    match: "\\$+" + IDENT_RE3
  };
  const PREPROCESSOR = {
    scope: "meta",
    variants: [
      { begin: /<\?php/, relevance: 10 },
      // boost for obvious PHP
      { begin: /<\?=/ },
      // less relevant per PSR-1 which says not to use short-tags
      { begin: /<\?/, relevance: 0.1 },
      { begin: /\?>/ }
      // end php tag
    ]
  };
  const SUBST = {
    scope: "subst",
    variants: [
      { begin: /\$\w+/ },
      {
        begin: /\{\$/,
        end: /\}/
      }
    ]
  };
  const SINGLE_QUOTED = hljs2.inherit(hljs2.APOS_STRING_MODE, { illegal: null });
  const DOUBLE_QUOTED = hljs2.inherit(hljs2.QUOTE_STRING_MODE, {
    illegal: null,
    contains: hljs2.QUOTE_STRING_MODE.contains.concat(SUBST)
  });
  const HEREDOC = {
    begin: /<<<[ \t]*(?:(\w+)|"(\w+)")\n/,
    end: /[ \t]*(\w+)\b/,
    contains: hljs2.QUOTE_STRING_MODE.contains.concat(SUBST),
    "on:begin": (m, resp) => {
      resp.data._beginMatch = m[1] || m[2];
    },
    "on:end": (m, resp) => {
      if (resp.data._beginMatch !== m[1]) resp.ignoreMatch();
    }
  };
  const NOWDOC = hljs2.END_SAME_AS_BEGIN({
    begin: /<<<[ \t]*'(\w+)'\n/,
    end: /[ \t]*(\w+)\b/
  });
  const WHITESPACE = "[ 	\n]";
  const STRING = {
    scope: "string",
    variants: [
      DOUBLE_QUOTED,
      SINGLE_QUOTED,
      HEREDOC,
      NOWDOC
    ]
  };
  const NUMBER = {
    scope: "number",
    variants: [
      { begin: `\\b0[bB][01]+(?:_[01]+)*\\b` },
      // Binary w/ underscore support
      { begin: `\\b0[oO][0-7]+(?:_[0-7]+)*\\b` },
      // Octals w/ underscore support
      { begin: `\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b` },
      // Hex w/ underscore support
      // Decimals w/ underscore support, with optional fragments and scientific exponent (e) suffix.
      { begin: `(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?` }
    ],
    relevance: 0
  };
  const LITERALS3 = [
    "false",
    "null",
    "true"
  ];
  const KWS = [
    // Magic constants:
    // <https://www.php.net/manual/en/language.constants.predefined.php>
    "__CLASS__",
    "__DIR__",
    "__FILE__",
    "__FUNCTION__",
    "__COMPILER_HALT_OFFSET__",
    "__LINE__",
    "__METHOD__",
    "__NAMESPACE__",
    "__TRAIT__",
    // Function that look like language construct or language construct that look like function:
    // List of keywords that may not require parenthesis
    "die",
    "echo",
    "exit",
    "include",
    "include_once",
    "print",
    "require",
    "require_once",
    // These are not language construct (function) but operate on the currently-executing function and can access the current symbol table
    // 'compact extract func_get_arg func_get_args func_num_args get_called_class get_parent_class ' +
    // Other keywords:
    // <https://www.php.net/manual/en/reserved.php>
    // <https://www.php.net/manual/en/language.types.type-juggling.php>
    "array",
    "abstract",
    "and",
    "as",
    "binary",
    "bool",
    "boolean",
    "break",
    "callable",
    "case",
    "catch",
    "class",
    "clone",
    "const",
    "continue",
    "declare",
    "default",
    "do",
    "double",
    "else",
    "elseif",
    "empty",
    "enddeclare",
    "endfor",
    "endforeach",
    "endif",
    "endswitch",
    "endwhile",
    "enum",
    "eval",
    "extends",
    "final",
    "finally",
    "float",
    "for",
    "foreach",
    "from",
    "global",
    "goto",
    "if",
    "implements",
    "instanceof",
    "insteadof",
    "int",
    "integer",
    "interface",
    "isset",
    "iterable",
    "list",
    "match|0",
    "mixed",
    "new",
    "never",
    "object",
    "or",
    "private",
    "protected",
    "public",
    "readonly",
    "real",
    "return",
    "string",
    "switch",
    "throw",
    "trait",
    "try",
    "unset",
    "use",
    "var",
    "void",
    "while",
    "xor",
    "yield"
  ];
  const BUILT_INS3 = [
    // Standard PHP library:
    // <https://www.php.net/manual/en/book.spl.php>
    "Error|0",
    "AppendIterator",
    "ArgumentCountError",
    "ArithmeticError",
    "ArrayIterator",
    "ArrayObject",
    "AssertionError",
    "BadFunctionCallException",
    "BadMethodCallException",
    "CachingIterator",
    "CallbackFilterIterator",
    "CompileError",
    "Countable",
    "DirectoryIterator",
    "DivisionByZeroError",
    "DomainException",
    "EmptyIterator",
    "ErrorException",
    "Exception",
    "FilesystemIterator",
    "FilterIterator",
    "GlobIterator",
    "InfiniteIterator",
    "InvalidArgumentException",
    "IteratorIterator",
    "LengthException",
    "LimitIterator",
    "LogicException",
    "MultipleIterator",
    "NoRewindIterator",
    "OutOfBoundsException",
    "OutOfRangeException",
    "OuterIterator",
    "OverflowException",
    "ParentIterator",
    "ParseError",
    "RangeException",
    "RecursiveArrayIterator",
    "RecursiveCachingIterator",
    "RecursiveCallbackFilterIterator",
    "RecursiveDirectoryIterator",
    "RecursiveFilterIterator",
    "RecursiveIterator",
    "RecursiveIteratorIterator",
    "RecursiveRegexIterator",
    "RecursiveTreeIterator",
    "RegexIterator",
    "RuntimeException",
    "SeekableIterator",
    "SplDoublyLinkedList",
    "SplFileInfo",
    "SplFileObject",
    "SplFixedArray",
    "SplHeap",
    "SplMaxHeap",
    "SplMinHeap",
    "SplObjectStorage",
    "SplObserver",
    "SplPriorityQueue",
    "SplQueue",
    "SplStack",
    "SplSubject",
    "SplTempFileObject",
    "TypeError",
    "UnderflowException",
    "UnexpectedValueException",
    "UnhandledMatchError",
    // Reserved interfaces:
    // <https://www.php.net/manual/en/reserved.interfaces.php>
    "ArrayAccess",
    "BackedEnum",
    "Closure",
    "Fiber",
    "Generator",
    "Iterator",
    "IteratorAggregate",
    "Serializable",
    "Stringable",
    "Throwable",
    "Traversable",
    "UnitEnum",
    "WeakReference",
    "WeakMap",
    // Reserved classes:
    // <https://www.php.net/manual/en/reserved.classes.php>
    "Directory",
    "__PHP_Incomplete_Class",
    "parent",
    "php_user_filter",
    "self",
    "static",
    "stdClass"
  ];
  const dualCase = (items) => {
    const result = [];
    items.forEach((item) => {
      result.push(item);
      if (item.toLowerCase() === item) {
        result.push(item.toUpperCase());
      } else {
        result.push(item.toLowerCase());
      }
    });
    return result;
  };
  const KEYWORDS3 = {
    keyword: KWS,
    literal: dualCase(LITERALS3),
    built_in: BUILT_INS3
  };
  const normalizeKeywords = (items) => {
    return items.map((item) => {
      return item.replace(/\|\d+$/, "");
    });
  };
  const CONSTRUCTOR_CALL = { variants: [
    {
      match: [
        /new/,
        regex2.concat(WHITESPACE, "+"),
        // to prevent built ins from being confused as the class constructor call
        regex2.concat("(?!", normalizeKeywords(BUILT_INS3).join("\\b|"), "\\b)"),
        PASCAL_CASE_CLASS_NAME_RE
      ],
      scope: {
        1: "keyword",
        4: "title.class"
      }
    }
  ] };
  const CONSTANT_REFERENCE = regex2.concat(IDENT_RE3, "\\b(?!\\()");
  const LEFT_AND_RIGHT_SIDE_OF_DOUBLE_COLON = { variants: [
    {
      match: [
        regex2.concat(
          /::/,
          regex2.lookahead(/(?!class\b)/)
        ),
        CONSTANT_REFERENCE
      ],
      scope: { 2: "variable.constant" }
    },
    {
      match: [
        /::/,
        /class/
      ],
      scope: { 2: "variable.language" }
    },
    {
      match: [
        PASCAL_CASE_CLASS_NAME_RE,
        regex2.concat(
          /::/,
          regex2.lookahead(/(?!class\b)/)
        ),
        CONSTANT_REFERENCE
      ],
      scope: {
        1: "title.class",
        3: "variable.constant"
      }
    },
    {
      match: [
        PASCAL_CASE_CLASS_NAME_RE,
        regex2.concat(
          "::",
          regex2.lookahead(/(?!class\b)/)
        )
      ],
      scope: { 1: "title.class" }
    },
    {
      match: [
        PASCAL_CASE_CLASS_NAME_RE,
        /::/,
        /class/
      ],
      scope: {
        1: "title.class",
        3: "variable.language"
      }
    }
  ] };
  const NAMED_ARGUMENT = {
    scope: "attr",
    match: regex2.concat(IDENT_RE3, regex2.lookahead(":"), regex2.lookahead(/(?!::)/))
  };
  const PARAMS_MODE = {
    relevance: 0,
    begin: /\(/,
    end: /\)/,
    keywords: KEYWORDS3,
    contains: [
      NAMED_ARGUMENT,
      VARIABLE,
      LEFT_AND_RIGHT_SIDE_OF_DOUBLE_COLON,
      hljs2.C_BLOCK_COMMENT_MODE,
      STRING,
      NUMBER,
      CONSTRUCTOR_CALL
    ]
  };
  const FUNCTION_INVOKE = {
    relevance: 0,
    match: [
      /\b/,
      // to prevent keywords from being confused as the function title
      regex2.concat("(?!fn\\b|function\\b|", normalizeKeywords(KWS).join("\\b|"), "|", normalizeKeywords(BUILT_INS3).join("\\b|"), "\\b)"),
      IDENT_RE3,
      regex2.concat(WHITESPACE, "*"),
      regex2.lookahead(/(?=\()/)
    ],
    scope: { 3: "title.function.invoke" },
    contains: [PARAMS_MODE]
  };
  PARAMS_MODE.contains.push(FUNCTION_INVOKE);
  const ATTRIBUTE_CONTAINS = [
    NAMED_ARGUMENT,
    LEFT_AND_RIGHT_SIDE_OF_DOUBLE_COLON,
    hljs2.C_BLOCK_COMMENT_MODE,
    STRING,
    NUMBER,
    CONSTRUCTOR_CALL
  ];
  const ATTRIBUTES4 = {
    begin: regex2.concat(
      /#\[\s*\\?/,
      regex2.either(
        PASCAL_CASE_CLASS_NAME_RE,
        UPCASE_NAME_RE
      )
    ),
    beginScope: "meta",
    end: /]/,
    endScope: "meta",
    keywords: {
      literal: LITERALS3,
      keyword: [
        "new",
        "array"
      ]
    },
    contains: [
      {
        begin: /\[/,
        end: /]/,
        keywords: {
          literal: LITERALS3,
          keyword: [
            "new",
            "array"
          ]
        },
        contains: [
          "self",
          ...ATTRIBUTE_CONTAINS
        ]
      },
      ...ATTRIBUTE_CONTAINS,
      {
        scope: "meta",
        variants: [
          { match: PASCAL_CASE_CLASS_NAME_RE },
          { match: UPCASE_NAME_RE }
        ]
      }
    ]
  };
  return {
    case_insensitive: false,
    keywords: KEYWORDS3,
    contains: [
      ATTRIBUTES4,
      hljs2.HASH_COMMENT_MODE,
      hljs2.COMMENT("//", "$"),
      hljs2.COMMENT(
        "/\\*",
        "\\*/",
        { contains: [
          {
            scope: "doctag",
            match: "@[A-Za-z]+"
          }
        ] }
      ),
      {
        match: /__halt_compiler\(\);/,
        keywords: "__halt_compiler",
        starts: {
          scope: "comment",
          end: hljs2.MATCH_NOTHING_RE,
          contains: [
            {
              match: /\?>/,
              scope: "meta",
              endsParent: true
            }
          ]
        }
      },
      PREPROCESSOR,
      {
        scope: "variable.language",
        match: /\$this\b/
      },
      VARIABLE,
      FUNCTION_INVOKE,
      LEFT_AND_RIGHT_SIDE_OF_DOUBLE_COLON,
      {
        match: [
          /const/,
          /\s/,
          IDENT_RE3
        ],
        scope: {
          1: "keyword",
          3: "variable.constant"
        }
      },
      CONSTRUCTOR_CALL,
      {
        scope: "function",
        relevance: 0,
        beginKeywords: "fn function",
        end: /[;{]/,
        excludeEnd: true,
        illegal: "[$%\\[]",
        contains: [
          { beginKeywords: "use" },
          hljs2.UNDERSCORE_TITLE_MODE,
          {
            begin: "=>",
            // No markup, just a relevance booster
            endsParent: true
          },
          {
            scope: "params",
            begin: "\\(",
            end: "\\)",
            excludeBegin: true,
            excludeEnd: true,
            keywords: KEYWORDS3,
            contains: [
              "self",
              ATTRIBUTES4,
              VARIABLE,
              LEFT_AND_RIGHT_SIDE_OF_DOUBLE_COLON,
              hljs2.C_BLOCK_COMMENT_MODE,
              STRING,
              NUMBER
            ]
          }
        ]
      },
      {
        scope: "class",
        variants: [
          {
            beginKeywords: "enum",
            illegal: /[($"]/
          },
          {
            beginKeywords: "class interface trait",
            illegal: /[:($"]/
          }
        ],
        relevance: 0,
        end: /\{/,
        excludeEnd: true,
        contains: [
          { beginKeywords: "extends implements" },
          hljs2.UNDERSCORE_TITLE_MODE
        ]
      },
      // both use and namespace still use "old style" rules (vs multi-match)
      // because the namespace name can include `\` and we still want each
      // element to be treated as its own *individual* title
      {
        beginKeywords: "namespace",
        relevance: 0,
        end: ";",
        illegal: /[.']/,
        contains: [hljs2.inherit(hljs2.UNDERSCORE_TITLE_MODE, { scope: "title.class" })]
      },
      {
        beginKeywords: "use",
        relevance: 0,
        end: ";",
        contains: [
          // TODO: title.function vs title.class
          {
            match: /\b(as|const|function)\b/,
            scope: "keyword"
          },
          // TODO: could be title.class or title.function
          hljs2.UNDERSCORE_TITLE_MODE
        ]
      },
      STRING,
      NUMBER
    ]
  };
}

// node_modules/highlight.js/es/languages/plaintext.js
function plaintext(hljs2) {
  return {
    name: "Plain text",
    aliases: [
      "text",
      "txt"
    ],
    disableAutodetect: true
  };
}

// node_modules/highlight.js/es/languages/powershell.js
function powershell(hljs2) {
  const TYPES3 = [
    "string",
    "char",
    "byte",
    "int",
    "long",
    "bool",
    "decimal",
    "single",
    "double",
    "DateTime",
    "xml",
    "array",
    "hashtable",
    "void"
  ];
  const VALID_VERBS = "Add|Clear|Close|Copy|Enter|Exit|Find|Format|Get|Hide|Join|Lock|Move|New|Open|Optimize|Pop|Push|Redo|Remove|Rename|Reset|Resize|Search|Select|Set|Show|Skip|Split|Step|Switch|Undo|Unlock|Watch|Backup|Checkpoint|Compare|Compress|Convert|ConvertFrom|ConvertTo|Dismount|Edit|Expand|Export|Group|Import|Initialize|Limit|Merge|Mount|Out|Publish|Restore|Save|Sync|Unpublish|Update|Approve|Assert|Build|Complete|Confirm|Deny|Deploy|Disable|Enable|Install|Invoke|Register|Request|Restart|Resume|Start|Stop|Submit|Suspend|Uninstall|Unregister|Wait|Debug|Measure|Ping|Repair|Resolve|Test|Trace|Connect|Disconnect|Read|Receive|Send|Write|Block|Grant|Protect|Revoke|Unblock|Unprotect|Use|ForEach|Sort|Tee|Where";
  const COMPARISON_OPERATORS = "-and|-as|-band|-bnot|-bor|-bxor|-casesensitive|-ccontains|-ceq|-cge|-cgt|-cle|-clike|-clt|-cmatch|-cne|-cnotcontains|-cnotlike|-cnotmatch|-contains|-creplace|-csplit|-eq|-exact|-f|-file|-ge|-gt|-icontains|-ieq|-ige|-igt|-ile|-ilike|-ilt|-imatch|-in|-ine|-inotcontains|-inotlike|-inotmatch|-ireplace|-is|-isnot|-isplit|-join|-le|-like|-lt|-match|-ne|-not|-notcontains|-notin|-notlike|-notmatch|-or|-regex|-replace|-shl|-shr|-split|-wildcard|-xor";
  const KEYWORDS3 = {
    $pattern: /-?[A-z\.\-]+\b/,
    keyword: "if else foreach return do while until elseif begin for trap data dynamicparam end break throw param continue finally in switch exit filter try process catch hidden static parameter",
    // "echo" relevance has been set to 0 to avoid auto-detect conflicts with shell transcripts
    built_in: "ac asnp cat cd CFS chdir clc clear clhy cli clp cls clv cnsn compare copy cp cpi cpp curl cvpa dbp del diff dir dnsn ebp echo|0 epal epcsv epsn erase etsn exsn fc fhx fl ft fw gal gbp gc gcb gci gcm gcs gdr gerr ghy gi gin gjb gl gm gmo gp gps gpv group gsn gsnp gsv gtz gu gv gwmi h history icm iex ihy ii ipal ipcsv ipmo ipsn irm ise iwmi iwr kill lp ls man md measure mi mount move mp mv nal ndr ni nmo npssc nsn nv ogv oh popd ps pushd pwd r rbp rcjb rcsn rd rdr ren ri rjb rm rmdir rmo rni rnp rp rsn rsnp rujb rv rvpa rwmi sajb sal saps sasv sbp sc scb select set shcm si sl sleep sls sort sp spjb spps spsv start stz sujb sv swmi tee trcm type wget where wjb write"
    // TODO: 'validate[A-Z]+' can't work in keywords
  };
  const TITLE_NAME_RE = /\w[\w\d]*((-)[\w\d]+)*/;
  const BACKTICK_ESCAPE = {
    begin: "`[\\s\\S]",
    relevance: 0
  };
  const VAR = {
    className: "variable",
    variants: [
      { begin: /\$\B/ },
      {
        className: "keyword",
        begin: /\$this/
      },
      { begin: /\$[\w\d][\w\d_:]*/ }
    ]
  };
  const LITERAL = {
    className: "literal",
    begin: /\$(null|true|false)\b/
  };
  const QUOTE_STRING = {
    className: "string",
    variants: [
      {
        begin: /"/,
        end: /"/
      },
      {
        begin: /@"/,
        end: /^"@/
      }
    ],
    contains: [
      BACKTICK_ESCAPE,
      VAR,
      {
        className: "variable",
        begin: /\$[A-z]/,
        end: /[^A-z]/
      }
    ]
  };
  const APOS_STRING = {
    className: "string",
    variants: [
      {
        begin: /'/,
        end: /'/
      },
      {
        begin: /@'/,
        end: /^'@/
      }
    ]
  };
  const PS_HELPTAGS = {
    className: "doctag",
    variants: [
      /* no paramater help tags */
      { begin: /\.(synopsis|description|example|inputs|outputs|notes|link|component|role|functionality)/ },
      /* one parameter help tags */
      { begin: /\.(parameter|forwardhelptargetname|forwardhelpcategory|remotehelprunspace|externalhelp)\s+\S+/ }
    ]
  };
  const PS_COMMENT = hljs2.inherit(
    hljs2.COMMENT(null, null),
    {
      variants: [
        /* single-line comment */
        {
          begin: /#/,
          end: /$/
        },
        /* multi-line comment */
        {
          begin: /<#/,
          end: /#>/
        }
      ],
      contains: [PS_HELPTAGS]
    }
  );
  const CMDLETS = {
    className: "built_in",
    variants: [{ begin: "(".concat(VALID_VERBS, ")+(-)[\\w\\d]+") }]
  };
  const PS_CLASS = {
    className: "class",
    beginKeywords: "class enum",
    end: /\s*[{]/,
    excludeEnd: true,
    relevance: 0,
    contains: [hljs2.TITLE_MODE]
  };
  const PS_FUNCTION = {
    className: "function",
    begin: /function\s+/,
    end: /\s*\{|$/,
    excludeEnd: true,
    returnBegin: true,
    relevance: 0,
    contains: [
      {
        begin: "function",
        relevance: 0,
        className: "keyword"
      },
      {
        className: "title",
        begin: TITLE_NAME_RE,
        relevance: 0
      },
      {
        begin: /\(/,
        end: /\)/,
        className: "params",
        relevance: 0,
        contains: [VAR]
      }
      // CMDLETS
    ]
  };
  const PS_USING = {
    begin: /using\s/,
    end: /$/,
    returnBegin: true,
    contains: [
      QUOTE_STRING,
      APOS_STRING,
      {
        className: "keyword",
        begin: /(using|assembly|command|module|namespace|type)/
      }
    ]
  };
  const PS_ARGUMENTS = { variants: [
    // PS literals are pretty verbose so it's a good idea to accent them a bit.
    {
      className: "operator",
      begin: "(".concat(COMPARISON_OPERATORS, ")\\b")
    },
    {
      className: "literal",
      begin: /(-){1,2}[\w\d-]+/,
      relevance: 0
    }
  ] };
  const HASH_SIGNS = {
    className: "selector-tag",
    begin: /@\B/,
    relevance: 0
  };
  const PS_METHODS = {
    className: "function",
    begin: /\[.*\]\s*[\w]+[ ]??\(/,
    end: /$/,
    returnBegin: true,
    relevance: 0,
    contains: [
      {
        className: "keyword",
        begin: "(".concat(
          KEYWORDS3.keyword.toString().replace(
            /\s/g,
            "|"
          ),
          ")\\b"
        ),
        endsParent: true,
        relevance: 0
      },
      hljs2.inherit(hljs2.TITLE_MODE, { endsParent: true })
    ]
  };
  const GENTLEMANS_SET = [
    // STATIC_MEMBER,
    PS_METHODS,
    PS_COMMENT,
    BACKTICK_ESCAPE,
    hljs2.NUMBER_MODE,
    QUOTE_STRING,
    APOS_STRING,
    // PS_NEW_OBJECT_TYPE,
    CMDLETS,
    VAR,
    LITERAL,
    HASH_SIGNS
  ];
  const PS_TYPE = {
    begin: /\[/,
    end: /\]/,
    excludeBegin: true,
    excludeEnd: true,
    relevance: 0,
    contains: [].concat(
      "self",
      GENTLEMANS_SET,
      {
        begin: "(" + TYPES3.join("|") + ")",
        className: "built_in",
        relevance: 0
      },
      {
        className: "type",
        begin: /[\.\w\d]+/,
        relevance: 0
      }
    )
  };
  PS_METHODS.contains.unshift(PS_TYPE);
  return {
    name: "PowerShell",
    aliases: [
      "pwsh",
      "ps",
      "ps1"
    ],
    case_insensitive: true,
    keywords: KEYWORDS3,
    contains: GENTLEMANS_SET.concat(
      PS_CLASS,
      PS_FUNCTION,
      PS_USING,
      PS_ARGUMENTS,
      PS_TYPE
    )
  };
}

// node_modules/highlight.js/es/languages/properties.js
function properties(hljs2) {
  const WS0 = "[ \\t\\f]*";
  const WS1 = "[ \\t\\f]+";
  const EQUAL_DELIM = WS0 + "[:=]" + WS0;
  const WS_DELIM = WS1;
  const DELIM = "(" + EQUAL_DELIM + "|" + WS_DELIM + ")";
  const KEY = "([^\\\\:= \\t\\f\\n]|\\\\.)+";
  const DELIM_AND_VALUE = {
    // skip DELIM
    end: DELIM,
    relevance: 0,
    starts: {
      // value: everything until end of line (again, taking into account backslashes)
      className: "string",
      end: /$/,
      relevance: 0,
      contains: [
        { begin: "\\\\\\\\" },
        { begin: "\\\\\\n" }
      ]
    }
  };
  return {
    name: ".properties",
    disableAutodetect: true,
    case_insensitive: true,
    illegal: /\S/,
    contains: [
      hljs2.COMMENT("^\\s*[!#]", "$"),
      // key: everything until whitespace or = or : (taking into account backslashes)
      // case of a key-value pair
      {
        returnBegin: true,
        variants: [
          { begin: KEY + EQUAL_DELIM },
          { begin: KEY + WS_DELIM }
        ],
        contains: [
          {
            className: "attr",
            begin: KEY,
            endsParent: true
          }
        ],
        starts: DELIM_AND_VALUE
      },
      // case of an empty key
      {
        className: "attr",
        begin: KEY + WS0 + "$"
      }
    ]
  };
}

// node_modules/highlight.js/es/languages/protobuf.js
function protobuf(hljs2) {
  const KEYWORDS3 = [
    "package",
    "import",
    "option",
    "optional",
    "required",
    "repeated",
    "group",
    "oneof"
  ];
  const TYPES3 = [
    "double",
    "float",
    "int32",
    "int64",
    "uint32",
    "uint64",
    "sint32",
    "sint64",
    "fixed32",
    "fixed64",
    "sfixed32",
    "sfixed64",
    "bool",
    "string",
    "bytes"
  ];
  const CLASS_DEFINITION = {
    match: [
      /(message|enum|service)\s+/,
      hljs2.IDENT_RE
    ],
    scope: {
      1: "keyword",
      2: "title.class"
    }
  };
  return {
    name: "Protocol Buffers",
    aliases: ["proto"],
    keywords: {
      keyword: KEYWORDS3,
      type: TYPES3,
      literal: [
        "true",
        "false"
      ]
    },
    contains: [
      hljs2.QUOTE_STRING_MODE,
      hljs2.NUMBER_MODE,
      hljs2.C_LINE_COMMENT_MODE,
      hljs2.C_BLOCK_COMMENT_MODE,
      CLASS_DEFINITION,
      {
        className: "function",
        beginKeywords: "rpc",
        end: /[{;]/,
        excludeEnd: true,
        keywords: "rpc returns"
      },
      {
        // match enum items (relevance)
        // BLAH = ...;
        begin: /^\s*[A-Z_]+(?=\s*=[^\n]+;$)/
      }
    ]
  };
}

// node_modules/highlight.js/es/languages/python.js
function python(hljs2) {
  const regex2 = hljs2.regex;
  const IDENT_RE3 = new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*", "u");
  const RESERVED_WORDS = [
    "and",
    "as",
    "assert",
    "async",
    "await",
    "break",
    "case",
    "class",
    "continue",
    "def",
    "del",
    "elif",
    "else",
    "except",
    "finally",
    "for",
    "from",
    "global",
    "if",
    "import",
    "in",
    "is",
    "lambda",
    "match",
    "nonlocal|10",
    "not",
    "or",
    "pass",
    "raise",
    "return",
    "try",
    "while",
    "with",
    "yield"
  ];
  const BUILT_INS3 = [
    "__import__",
    "abs",
    "all",
    "any",
    "ascii",
    "bin",
    "bool",
    "breakpoint",
    "bytearray",
    "bytes",
    "callable",
    "chr",
    "classmethod",
    "compile",
    "complex",
    "delattr",
    "dict",
    "dir",
    "divmod",
    "enumerate",
    "eval",
    "exec",
    "filter",
    "float",
    "format",
    "frozenset",
    "getattr",
    "globals",
    "hasattr",
    "hash",
    "help",
    "hex",
    "id",
    "input",
    "int",
    "isinstance",
    "issubclass",
    "iter",
    "len",
    "list",
    "locals",
    "map",
    "max",
    "memoryview",
    "min",
    "next",
    "object",
    "oct",
    "open",
    "ord",
    "pow",
    "print",
    "property",
    "range",
    "repr",
    "reversed",
    "round",
    "set",
    "setattr",
    "slice",
    "sorted",
    "staticmethod",
    "str",
    "sum",
    "super",
    "tuple",
    "type",
    "vars",
    "zip"
  ];
  const LITERALS3 = [
    "__debug__",
    "Ellipsis",
    "False",
    "None",
    "NotImplemented",
    "True"
  ];
  const TYPES3 = [
    "Any",
    "Callable",
    "Coroutine",
    "Dict",
    "List",
    "Literal",
    "Generic",
    "Optional",
    "Sequence",
    "Set",
    "Tuple",
    "Type",
    "Union"
  ];
  const KEYWORDS3 = {
    $pattern: /[A-Za-z]\w+|__\w+__/,
    keyword: RESERVED_WORDS,
    built_in: BUILT_INS3,
    literal: LITERALS3,
    type: TYPES3
  };
  const PROMPT = {
    className: "meta",
    begin: /^(>>>|\.\.\.) /
  };
  const SUBST = {
    className: "subst",
    begin: /\{/,
    end: /\}/,
    keywords: KEYWORDS3,
    illegal: /#/
  };
  const LITERAL_BRACKET = {
    begin: /\{\{/,
    relevance: 0
  };
  const STRING = {
    className: "string",
    contains: [hljs2.BACKSLASH_ESCAPE],
    variants: [
      {
        begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
        end: /'''/,
        contains: [
          hljs2.BACKSLASH_ESCAPE,
          PROMPT
        ],
        relevance: 10
      },
      {
        begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
        end: /"""/,
        contains: [
          hljs2.BACKSLASH_ESCAPE,
          PROMPT
        ],
        relevance: 10
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])'''/,
        end: /'''/,
        contains: [
          hljs2.BACKSLASH_ESCAPE,
          PROMPT,
          LITERAL_BRACKET,
          SUBST
        ]
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])"""/,
        end: /"""/,
        contains: [
          hljs2.BACKSLASH_ESCAPE,
          PROMPT,
          LITERAL_BRACKET,
          SUBST
        ]
      },
      {
        begin: /([uU]|[rR])'/,
        end: /'/,
        relevance: 10
      },
      {
        begin: /([uU]|[rR])"/,
        end: /"/,
        relevance: 10
      },
      {
        begin: /([bB]|[bB][rR]|[rR][bB])'/,
        end: /'/
      },
      {
        begin: /([bB]|[bB][rR]|[rR][bB])"/,
        end: /"/
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])'/,
        end: /'/,
        contains: [
          hljs2.BACKSLASH_ESCAPE,
          LITERAL_BRACKET,
          SUBST
        ]
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])"/,
        end: /"/,
        contains: [
          hljs2.BACKSLASH_ESCAPE,
          LITERAL_BRACKET,
          SUBST
        ]
      },
      hljs2.APOS_STRING_MODE,
      hljs2.QUOTE_STRING_MODE
    ]
  };
  const digitpart = "[0-9](_?[0-9])*";
  const pointfloat = `(\\b(${digitpart}))?\\.(${digitpart})|\\b(${digitpart})\\.`;
  const lookahead3 = `\\b|${RESERVED_WORDS.join("|")}`;
  const NUMBER = {
    className: "number",
    relevance: 0,
    variants: [
      // exponentfloat, pointfloat
      // https://docs.python.org/3.9/reference/lexical_analysis.html#floating-point-literals
      // optionally imaginary
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      // Note: no leading \b because floats can start with a decimal point
      // and we don't want to mishandle e.g. `fn(.5)`,
      // no trailing \b for pointfloat because it can end with a decimal point
      // and we don't want to mishandle e.g. `0..hex()`; this should be safe
      // because both MUST contain a decimal point and so cannot be confused with
      // the interior part of an identifier
      {
        begin: `(\\b(${digitpart})|(${pointfloat}))[eE][+-]?(${digitpart})[jJ]?(?=${lookahead3})`
      },
      {
        begin: `(${pointfloat})[jJ]?`
      },
      // decinteger, bininteger, octinteger, hexinteger
      // https://docs.python.org/3.9/reference/lexical_analysis.html#integer-literals
      // optionally "long" in Python 2
      // https://docs.python.org/2.7/reference/lexical_analysis.html#integer-and-long-integer-literals
      // decinteger is optionally imaginary
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      {
        begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${lookahead3})`
      },
      {
        begin: `\\b0[bB](_?[01])+[lL]?(?=${lookahead3})`
      },
      {
        begin: `\\b0[oO](_?[0-7])+[lL]?(?=${lookahead3})`
      },
      {
        begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${lookahead3})`
      },
      // imagnumber (digitpart-based)
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      {
        begin: `\\b(${digitpart})[jJ](?=${lookahead3})`
      }
    ]
  };
  const COMMENT_TYPE = {
    className: "comment",
    begin: regex2.lookahead(/# type:/),
    end: /$/,
    keywords: KEYWORDS3,
    contains: [
      {
        // prevent keywords from coloring `type`
        begin: /# type:/
      },
      // comment within a datatype comment includes no keywords
      {
        begin: /#/,
        end: /\b\B/,
        endsWithParent: true
      }
    ]
  };
  const PARAMS = {
    className: "params",
    variants: [
      // Exclude params in functions without params
      {
        className: "",
        begin: /\(\s*\)/,
        skip: true
      },
      {
        begin: /\(/,
        end: /\)/,
        excludeBegin: true,
        excludeEnd: true,
        keywords: KEYWORDS3,
        contains: [
          "self",
          PROMPT,
          NUMBER,
          STRING,
          hljs2.HASH_COMMENT_MODE
        ]
      }
    ]
  };
  SUBST.contains = [
    STRING,
    NUMBER,
    PROMPT
  ];
  return {
    name: "Python",
    aliases: [
      "py",
      "gyp",
      "ipython"
    ],
    unicodeRegex: true,
    keywords: KEYWORDS3,
    illegal: /(<\/|\?)|=>/,
    contains: [
      PROMPT,
      NUMBER,
      {
        // very common convention
        scope: "variable.language",
        match: /\bself\b/
      },
      {
        // eat "if" prior to string so that it won't accidentally be
        // labeled as an f-string
        beginKeywords: "if",
        relevance: 0
      },
      { match: /\bor\b/, scope: "keyword" },
      STRING,
      COMMENT_TYPE,
      hljs2.HASH_COMMENT_MODE,
      {
        match: [
          /\bdef/,
          /\s+/,
          IDENT_RE3
        ],
        scope: {
          1: "keyword",
          3: "title.function"
        },
        contains: [PARAMS]
      },
      {
        variants: [
          {
            match: [
              /\bclass/,
              /\s+/,
              IDENT_RE3,
              /\s*/,
              /\(\s*/,
              IDENT_RE3,
              /\s*\)/
            ]
          },
          {
            match: [
              /\bclass/,
              /\s+/,
              IDENT_RE3
            ]
          }
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          6: "title.class.inherited"
        }
      },
      {
        className: "meta",
        begin: /^[\t ]*@/,
        end: /(?=#)|$/,
        contains: [
          NUMBER,
          PARAMS,
          STRING
        ]
      }
    ]
  };
}

// node_modules/highlight.js/es/languages/rust.js
function rust(hljs2) {
  const regex2 = hljs2.regex;
  const RAW_IDENTIFIER = /(r#)?/;
  const UNDERSCORE_IDENT_RE = regex2.concat(RAW_IDENTIFIER, hljs2.UNDERSCORE_IDENT_RE);
  const IDENT_RE3 = regex2.concat(RAW_IDENTIFIER, hljs2.IDENT_RE);
  const FUNCTION_INVOKE = {
    className: "title.function.invoke",
    relevance: 0,
    begin: regex2.concat(
      /\b/,
      /(?!let|for|while|if|else|match\b)/,
      IDENT_RE3,
      regex2.lookahead(/\s*\(/)
    )
  };
  const NUMBER_SUFFIX = "([ui](8|16|32|64|128|size)|f(32|64))?";
  const KEYWORDS3 = [
    "abstract",
    "as",
    "async",
    "await",
    "become",
    "box",
    "break",
    "const",
    "continue",
    "crate",
    "do",
    "dyn",
    "else",
    "enum",
    "extern",
    "false",
    "final",
    "fn",
    "for",
    "if",
    "impl",
    "in",
    "let",
    "loop",
    "macro",
    "match",
    "mod",
    "move",
    "mut",
    "override",
    "priv",
    "pub",
    "ref",
    "return",
    "self",
    "Self",
    "static",
    "struct",
    "super",
    "trait",
    "true",
    "try",
    "type",
    "typeof",
    "union",
    "unsafe",
    "unsized",
    "use",
    "virtual",
    "where",
    "while",
    "yield"
  ];
  const LITERALS3 = [
    "true",
    "false",
    "Some",
    "None",
    "Ok",
    "Err"
  ];
  const BUILTINS = [
    // functions
    "drop ",
    // traits
    "Copy",
    "Send",
    "Sized",
    "Sync",
    "Drop",
    "Fn",
    "FnMut",
    "FnOnce",
    "ToOwned",
    "Clone",
    "Debug",
    "PartialEq",
    "PartialOrd",
    "Eq",
    "Ord",
    "AsRef",
    "AsMut",
    "Into",
    "From",
    "Default",
    "Iterator",
    "Extend",
    "IntoIterator",
    "DoubleEndedIterator",
    "ExactSizeIterator",
    "SliceConcatExt",
    "ToString",
    // macros
    "assert!",
    "assert_eq!",
    "bitflags!",
    "bytes!",
    "cfg!",
    "col!",
    "concat!",
    "concat_idents!",
    "debug_assert!",
    "debug_assert_eq!",
    "env!",
    "eprintln!",
    "panic!",
    "file!",
    "format!",
    "format_args!",
    "include_bytes!",
    "include_str!",
    "line!",
    "local_data_key!",
    "module_path!",
    "option_env!",
    "print!",
    "println!",
    "select!",
    "stringify!",
    "try!",
    "unimplemented!",
    "unreachable!",
    "vec!",
    "write!",
    "writeln!",
    "macro_rules!",
    "assert_ne!",
    "debug_assert_ne!"
  ];
  const TYPES3 = [
    "i8",
    "i16",
    "i32",
    "i64",
    "i128",
    "isize",
    "u8",
    "u16",
    "u32",
    "u64",
    "u128",
    "usize",
    "f32",
    "f64",
    "str",
    "char",
    "bool",
    "Box",
    "Option",
    "Result",
    "String",
    "Vec"
  ];
  return {
    name: "Rust",
    aliases: ["rs"],
    keywords: {
      $pattern: hljs2.IDENT_RE + "!?",
      type: TYPES3,
      keyword: KEYWORDS3,
      literal: LITERALS3,
      built_in: BUILTINS
    },
    illegal: "</",
    contains: [
      hljs2.C_LINE_COMMENT_MODE,
      hljs2.COMMENT("/\\*", "\\*/", { contains: ["self"] }),
      hljs2.inherit(hljs2.QUOTE_STRING_MODE, {
        begin: /b?"/,
        illegal: null
      }),
      {
        className: "symbol",
        // negative lookahead to avoid matching `'`
        begin: /'[a-zA-Z_][a-zA-Z0-9_]*(?!')/
      },
      {
        scope: "string",
        variants: [
          { begin: /b?r(#*)"(.|\n)*?"\1(?!#)/ },
          {
            begin: /b?'/,
            end: /'/,
            contains: [
              {
                scope: "char.escape",
                match: /\\('|\w|x\w{2}|u\w{4}|U\w{8})/
              }
            ]
          }
        ]
      },
      {
        className: "number",
        variants: [
          { begin: "\\b0b([01_]+)" + NUMBER_SUFFIX },
          { begin: "\\b0o([0-7_]+)" + NUMBER_SUFFIX },
          { begin: "\\b0x([A-Fa-f0-9_]+)" + NUMBER_SUFFIX },
          { begin: "\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)" + NUMBER_SUFFIX }
        ],
        relevance: 0
      },
      {
        begin: [
          /fn/,
          /\s+/,
          UNDERSCORE_IDENT_RE
        ],
        className: {
          1: "keyword",
          3: "title.function"
        }
      },
      {
        className: "meta",
        begin: "#!?\\[",
        end: "\\]",
        contains: [
          {
            className: "string",
            begin: /"/,
            end: /"/,
            contains: [
              hljs2.BACKSLASH_ESCAPE
            ]
          }
        ]
      },
      {
        begin: [
          /let/,
          /\s+/,
          /(?:mut\s+)?/,
          UNDERSCORE_IDENT_RE
        ],
        className: {
          1: "keyword",
          3: "keyword",
          4: "variable"
        }
      },
      // must come before impl/for rule later
      {
        begin: [
          /for/,
          /\s+/,
          UNDERSCORE_IDENT_RE,
          /\s+/,
          /in/
        ],
        className: {
          1: "keyword",
          3: "variable",
          5: "keyword"
        }
      },
      {
        begin: [
          /type/,
          /\s+/,
          UNDERSCORE_IDENT_RE
        ],
        className: {
          1: "keyword",
          3: "title.class"
        }
      },
      {
        begin: [
          /(?:trait|enum|struct|union|impl|for)/,
          /\s+/,
          UNDERSCORE_IDENT_RE
        ],
        className: {
          1: "keyword",
          3: "title.class"
        }
      },
      {
        begin: hljs2.IDENT_RE + "::",
        keywords: {
          keyword: "Self",
          built_in: BUILTINS,
          type: TYPES3
        }
      },
      {
        className: "punctuation",
        begin: "->"
      },
      FUNCTION_INVOKE
    ]
  };
}

// node_modules/highlight.js/es/languages/scala.js
function scala(hljs2) {
  const regex2 = hljs2.regex;
  const ANNOTATION = {
    className: "meta",
    begin: "@[A-Za-z]+"
  };
  const SUBST = {
    className: "subst",
    variants: [
      { begin: "\\$[A-Za-z0-9_]+" },
      {
        begin: /\$\{/,
        end: /\}/
      }
    ]
  };
  const STRING = {
    className: "string",
    variants: [
      {
        begin: '"""',
        end: '"""'
      },
      {
        begin: '"',
        end: '"',
        illegal: "\\n",
        contains: [hljs2.BACKSLASH_ESCAPE]
      },
      {
        begin: '[a-z]+"',
        end: '"',
        illegal: "\\n",
        contains: [
          hljs2.BACKSLASH_ESCAPE,
          SUBST
        ]
      },
      {
        className: "string",
        begin: '[a-z]+"""',
        end: '"""',
        contains: [SUBST],
        relevance: 10
      }
    ]
  };
  const TYPE = {
    className: "type",
    begin: "\\b[A-Z][A-Za-z0-9_]*",
    relevance: 0
  };
  const NAME = {
    className: "title",
    begin: /[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/,
    relevance: 0
  };
  const CLASS = {
    className: "class",
    beginKeywords: "class object trait type",
    end: /[:={\[\n;]/,
    excludeEnd: true,
    contains: [
      hljs2.C_LINE_COMMENT_MODE,
      hljs2.C_BLOCK_COMMENT_MODE,
      {
        beginKeywords: "extends with",
        relevance: 10
      },
      {
        begin: /\[/,
        end: /\]/,
        excludeBegin: true,
        excludeEnd: true,
        relevance: 0,
        contains: [
          TYPE,
          hljs2.C_LINE_COMMENT_MODE,
          hljs2.C_BLOCK_COMMENT_MODE
        ]
      },
      {
        className: "params",
        begin: /\(/,
        end: /\)/,
        excludeBegin: true,
        excludeEnd: true,
        relevance: 0,
        contains: [
          TYPE,
          hljs2.C_LINE_COMMENT_MODE,
          hljs2.C_BLOCK_COMMENT_MODE
        ]
      },
      NAME
    ]
  };
  const METHOD = {
    className: "function",
    beginKeywords: "def",
    end: regex2.lookahead(/[:={\[(\n;]/),
    contains: [NAME]
  };
  const EXTENSION = {
    begin: [
      /^\s*/,
      // Is first token on the line
      "extension",
      /\s+(?=[[(])/
      // followed by at least one space and `[` or `(`
    ],
    beginScope: { 2: "keyword" }
  };
  const END = {
    begin: [
      /^\s*/,
      // Is first token on the line
      /end/,
      /\s+/,
      /(extension\b)?/
      // `extension` is the only marker that follows an `end` that cannot be captured by another rule.
    ],
    beginScope: {
      2: "keyword",
      4: "keyword"
    }
  };
  const INLINE_MODES = [
    { match: /\.inline\b/ },
    {
      begin: /\binline(?=\s)/,
      keywords: "inline"
    }
  ];
  const USING_PARAM_CLAUSE = {
    begin: [
      /\(\s*/,
      // Opening `(` of a parameter or argument list
      /using/,
      /\s+(?!\))/
      // Spaces not followed by `)`
    ],
    beginScope: { 2: "keyword" }
  };
  const DIRECTIVE_VALUE = {
    className: "string",
    begin: /\S+/
  };
  const USING_DIRECTIVE = {
    begin: [
      "//>",
      /\s+/,
      /using/,
      /\s+/,
      /\S+/
    ],
    beginScope: {
      1: "comment",
      3: "keyword",
      5: "type"
    },
    end: /$/,
    contains: [
      DIRECTIVE_VALUE
    ]
  };
  return {
    name: "Scala",
    keywords: {
      literal: "true false null",
      keyword: "type yield lazy override def with val var sealed abstract private trait object if then forSome for while do throw finally protected extends import final return else break new catch super class case package default try this match continue throws implicit export enum given transparent"
    },
    contains: [
      USING_DIRECTIVE,
      hljs2.C_LINE_COMMENT_MODE,
      hljs2.C_BLOCK_COMMENT_MODE,
      STRING,
      TYPE,
      METHOD,
      CLASS,
      hljs2.C_NUMBER_MODE,
      EXTENSION,
      END,
      ...INLINE_MODES,
      USING_PARAM_CLAUSE,
      ANNOTATION
    ]
  };
}

// node_modules/highlight.js/es/languages/scss.js
var MODES3 = (hljs2) => {
  return {
    IMPORTANT: {
      scope: "meta",
      begin: "!important"
    },
    BLOCK_COMMENT: hljs2.C_BLOCK_COMMENT_MODE,
    HEXCOLOR: {
      scope: "number",
      begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
    },
    FUNCTION_DISPATCH: {
      className: "built_in",
      begin: /[\w-]+(?=\()/
    },
    ATTRIBUTE_SELECTOR_MODE: {
      scope: "selector-attr",
      begin: /\[/,
      end: /\]/,
      illegal: "$",
      contains: [
        hljs2.APOS_STRING_MODE,
        hljs2.QUOTE_STRING_MODE
      ]
    },
    CSS_NUMBER_MODE: {
      scope: "number",
      begin: hljs2.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
      relevance: 0
    },
    CSS_VARIABLE: {
      className: "attr",
      begin: /--[A-Za-z_][A-Za-z0-9_-]*/
    }
  };
};
var HTML_TAGS3 = [
  "a",
  "abbr",
  "address",
  "article",
  "aside",
  "audio",
  "b",
  "blockquote",
  "body",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "dd",
  "del",
  "details",
  "dfn",
  "div",
  "dl",
  "dt",
  "em",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "header",
  "hgroup",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "main",
  "mark",
  "menu",
  "nav",
  "object",
  "ol",
  "optgroup",
  "option",
  "p",
  "picture",
  "q",
  "quote",
  "samp",
  "section",
  "select",
  "source",
  "span",
  "strong",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "tr",
  "ul",
  "var",
  "video"
];
var SVG_TAGS3 = [
  "defs",
  "g",
  "marker",
  "mask",
  "pattern",
  "svg",
  "switch",
  "symbol",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feFlood",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMorphology",
  "feOffset",
  "feSpecularLighting",
  "feTile",
  "feTurbulence",
  "linearGradient",
  "radialGradient",
  "stop",
  "circle",
  "ellipse",
  "image",
  "line",
  "path",
  "polygon",
  "polyline",
  "rect",
  "text",
  "use",
  "textPath",
  "tspan",
  "foreignObject",
  "clipPath"
];
var TAGS3 = [
  ...HTML_TAGS3,
  ...SVG_TAGS3
];
var MEDIA_FEATURES3 = [
  "any-hover",
  "any-pointer",
  "aspect-ratio",
  "color",
  "color-gamut",
  "color-index",
  "device-aspect-ratio",
  "device-height",
  "device-width",
  "display-mode",
  "forced-colors",
  "grid",
  "height",
  "hover",
  "inverted-colors",
  "monochrome",
  "orientation",
  "overflow-block",
  "overflow-inline",
  "pointer",
  "prefers-color-scheme",
  "prefers-contrast",
  "prefers-reduced-motion",
  "prefers-reduced-transparency",
  "resolution",
  "scan",
  "scripting",
  "update",
  "width",
  // TODO: find a better solution?
  "min-width",
  "max-width",
  "min-height",
  "max-height"
].sort().reverse();
var PSEUDO_CLASSES3 = [
  "active",
  "any-link",
  "blank",
  "checked",
  "current",
  "default",
  "defined",
  "dir",
  // dir()
  "disabled",
  "drop",
  "empty",
  "enabled",
  "first",
  "first-child",
  "first-of-type",
  "fullscreen",
  "future",
  "focus",
  "focus-visible",
  "focus-within",
  "has",
  // has()
  "host",
  // host or host()
  "host-context",
  // host-context()
  "hover",
  "indeterminate",
  "in-range",
  "invalid",
  "is",
  // is()
  "lang",
  // lang()
  "last-child",
  "last-of-type",
  "left",
  "link",
  "local-link",
  "not",
  // not()
  "nth-child",
  // nth-child()
  "nth-col",
  // nth-col()
  "nth-last-child",
  // nth-last-child()
  "nth-last-col",
  // nth-last-col()
  "nth-last-of-type",
  //nth-last-of-type()
  "nth-of-type",
  //nth-of-type()
  "only-child",
  "only-of-type",
  "optional",
  "out-of-range",
  "past",
  "placeholder-shown",
  "read-only",
  "read-write",
  "required",
  "right",
  "root",
  "scope",
  "target",
  "target-within",
  "user-invalid",
  "valid",
  "visited",
  "where"
  // where()
].sort().reverse();
var PSEUDO_ELEMENTS3 = [
  "after",
  "backdrop",
  "before",
  "cue",
  "cue-region",
  "first-letter",
  "first-line",
  "grammar-error",
  "marker",
  "part",
  "placeholder",
  "selection",
  "slotted",
  "spelling-error"
].sort().reverse();
var ATTRIBUTES3 = [
  "accent-color",
  "align-content",
  "align-items",
  "align-self",
  "alignment-baseline",
  "all",
  "anchor-name",
  "animation",
  "animation-composition",
  "animation-delay",
  "animation-direction",
  "animation-duration",
  "animation-fill-mode",
  "animation-iteration-count",
  "animation-name",
  "animation-play-state",
  "animation-range",
  "animation-range-end",
  "animation-range-start",
  "animation-timeline",
  "animation-timing-function",
  "appearance",
  "aspect-ratio",
  "backdrop-filter",
  "backface-visibility",
  "background",
  "background-attachment",
  "background-blend-mode",
  "background-clip",
  "background-color",
  "background-image",
  "background-origin",
  "background-position",
  "background-position-x",
  "background-position-y",
  "background-repeat",
  "background-size",
  "baseline-shift",
  "block-size",
  "border",
  "border-block",
  "border-block-color",
  "border-block-end",
  "border-block-end-color",
  "border-block-end-style",
  "border-block-end-width",
  "border-block-start",
  "border-block-start-color",
  "border-block-start-style",
  "border-block-start-width",
  "border-block-style",
  "border-block-width",
  "border-bottom",
  "border-bottom-color",
  "border-bottom-left-radius",
  "border-bottom-right-radius",
  "border-bottom-style",
  "border-bottom-width",
  "border-collapse",
  "border-color",
  "border-end-end-radius",
  "border-end-start-radius",
  "border-image",
  "border-image-outset",
  "border-image-repeat",
  "border-image-slice",
  "border-image-source",
  "border-image-width",
  "border-inline",
  "border-inline-color",
  "border-inline-end",
  "border-inline-end-color",
  "border-inline-end-style",
  "border-inline-end-width",
  "border-inline-start",
  "border-inline-start-color",
  "border-inline-start-style",
  "border-inline-start-width",
  "border-inline-style",
  "border-inline-width",
  "border-left",
  "border-left-color",
  "border-left-style",
  "border-left-width",
  "border-radius",
  "border-right",
  "border-right-color",
  "border-right-style",
  "border-right-width",
  "border-spacing",
  "border-start-end-radius",
  "border-start-start-radius",
  "border-style",
  "border-top",
  "border-top-color",
  "border-top-left-radius",
  "border-top-right-radius",
  "border-top-style",
  "border-top-width",
  "border-width",
  "bottom",
  "box-align",
  "box-decoration-break",
  "box-direction",
  "box-flex",
  "box-flex-group",
  "box-lines",
  "box-ordinal-group",
  "box-orient",
  "box-pack",
  "box-shadow",
  "box-sizing",
  "break-after",
  "break-before",
  "break-inside",
  "caption-side",
  "caret-color",
  "clear",
  "clip",
  "clip-path",
  "clip-rule",
  "color",
  "color-interpolation",
  "color-interpolation-filters",
  "color-profile",
  "color-rendering",
  "color-scheme",
  "column-count",
  "column-fill",
  "column-gap",
  "column-rule",
  "column-rule-color",
  "column-rule-style",
  "column-rule-width",
  "column-span",
  "column-width",
  "columns",
  "contain",
  "contain-intrinsic-block-size",
  "contain-intrinsic-height",
  "contain-intrinsic-inline-size",
  "contain-intrinsic-size",
  "contain-intrinsic-width",
  "container",
  "container-name",
  "container-type",
  "content",
  "content-visibility",
  "counter-increment",
  "counter-reset",
  "counter-set",
  "cue",
  "cue-after",
  "cue-before",
  "cursor",
  "cx",
  "cy",
  "direction",
  "display",
  "dominant-baseline",
  "empty-cells",
  "enable-background",
  "field-sizing",
  "fill",
  "fill-opacity",
  "fill-rule",
  "filter",
  "flex",
  "flex-basis",
  "flex-direction",
  "flex-flow",
  "flex-grow",
  "flex-shrink",
  "flex-wrap",
  "float",
  "flood-color",
  "flood-opacity",
  "flow",
  "font",
  "font-display",
  "font-family",
  "font-feature-settings",
  "font-kerning",
  "font-language-override",
  "font-optical-sizing",
  "font-palette",
  "font-size",
  "font-size-adjust",
  "font-smooth",
  "font-smoothing",
  "font-stretch",
  "font-style",
  "font-synthesis",
  "font-synthesis-position",
  "font-synthesis-small-caps",
  "font-synthesis-style",
  "font-synthesis-weight",
  "font-variant",
  "font-variant-alternates",
  "font-variant-caps",
  "font-variant-east-asian",
  "font-variant-emoji",
  "font-variant-ligatures",
  "font-variant-numeric",
  "font-variant-position",
  "font-variation-settings",
  "font-weight",
  "forced-color-adjust",
  "gap",
  "glyph-orientation-horizontal",
  "glyph-orientation-vertical",
  "grid",
  "grid-area",
  "grid-auto-columns",
  "grid-auto-flow",
  "grid-auto-rows",
  "grid-column",
  "grid-column-end",
  "grid-column-start",
  "grid-gap",
  "grid-row",
  "grid-row-end",
  "grid-row-start",
  "grid-template",
  "grid-template-areas",
  "grid-template-columns",
  "grid-template-rows",
  "hanging-punctuation",
  "height",
  "hyphenate-character",
  "hyphenate-limit-chars",
  "hyphens",
  "icon",
  "image-orientation",
  "image-rendering",
  "image-resolution",
  "ime-mode",
  "initial-letter",
  "initial-letter-align",
  "inline-size",
  "inset",
  "inset-area",
  "inset-block",
  "inset-block-end",
  "inset-block-start",
  "inset-inline",
  "inset-inline-end",
  "inset-inline-start",
  "isolation",
  "justify-content",
  "justify-items",
  "justify-self",
  "kerning",
  "left",
  "letter-spacing",
  "lighting-color",
  "line-break",
  "line-height",
  "line-height-step",
  "list-style",
  "list-style-image",
  "list-style-position",
  "list-style-type",
  "margin",
  "margin-block",
  "margin-block-end",
  "margin-block-start",
  "margin-bottom",
  "margin-inline",
  "margin-inline-end",
  "margin-inline-start",
  "margin-left",
  "margin-right",
  "margin-top",
  "margin-trim",
  "marker",
  "marker-end",
  "marker-mid",
  "marker-start",
  "marks",
  "mask",
  "mask-border",
  "mask-border-mode",
  "mask-border-outset",
  "mask-border-repeat",
  "mask-border-slice",
  "mask-border-source",
  "mask-border-width",
  "mask-clip",
  "mask-composite",
  "mask-image",
  "mask-mode",
  "mask-origin",
  "mask-position",
  "mask-repeat",
  "mask-size",
  "mask-type",
  "masonry-auto-flow",
  "math-depth",
  "math-shift",
  "math-style",
  "max-block-size",
  "max-height",
  "max-inline-size",
  "max-width",
  "min-block-size",
  "min-height",
  "min-inline-size",
  "min-width",
  "mix-blend-mode",
  "nav-down",
  "nav-index",
  "nav-left",
  "nav-right",
  "nav-up",
  "none",
  "normal",
  "object-fit",
  "object-position",
  "offset",
  "offset-anchor",
  "offset-distance",
  "offset-path",
  "offset-position",
  "offset-rotate",
  "opacity",
  "order",
  "orphans",
  "outline",
  "outline-color",
  "outline-offset",
  "outline-style",
  "outline-width",
  "overflow",
  "overflow-anchor",
  "overflow-block",
  "overflow-clip-margin",
  "overflow-inline",
  "overflow-wrap",
  "overflow-x",
  "overflow-y",
  "overlay",
  "overscroll-behavior",
  "overscroll-behavior-block",
  "overscroll-behavior-inline",
  "overscroll-behavior-x",
  "overscroll-behavior-y",
  "padding",
  "padding-block",
  "padding-block-end",
  "padding-block-start",
  "padding-bottom",
  "padding-inline",
  "padding-inline-end",
  "padding-inline-start",
  "padding-left",
  "padding-right",
  "padding-top",
  "page",
  "page-break-after",
  "page-break-before",
  "page-break-inside",
  "paint-order",
  "pause",
  "pause-after",
  "pause-before",
  "perspective",
  "perspective-origin",
  "place-content",
  "place-items",
  "place-self",
  "pointer-events",
  "position",
  "position-anchor",
  "position-visibility",
  "print-color-adjust",
  "quotes",
  "r",
  "resize",
  "rest",
  "rest-after",
  "rest-before",
  "right",
  "rotate",
  "row-gap",
  "ruby-align",
  "ruby-position",
  "scale",
  "scroll-behavior",
  "scroll-margin",
  "scroll-margin-block",
  "scroll-margin-block-end",
  "scroll-margin-block-start",
  "scroll-margin-bottom",
  "scroll-margin-inline",
  "scroll-margin-inline-end",
  "scroll-margin-inline-start",
  "scroll-margin-left",
  "scroll-margin-right",
  "scroll-margin-top",
  "scroll-padding",
  "scroll-padding-block",
  "scroll-padding-block-end",
  "scroll-padding-block-start",
  "scroll-padding-bottom",
  "scroll-padding-inline",
  "scroll-padding-inline-end",
  "scroll-padding-inline-start",
  "scroll-padding-left",
  "scroll-padding-right",
  "scroll-padding-top",
  "scroll-snap-align",
  "scroll-snap-stop",
  "scroll-snap-type",
  "scroll-timeline",
  "scroll-timeline-axis",
  "scroll-timeline-name",
  "scrollbar-color",
  "scrollbar-gutter",
  "scrollbar-width",
  "shape-image-threshold",
  "shape-margin",
  "shape-outside",
  "shape-rendering",
  "speak",
  "speak-as",
  "src",
  // @font-face
  "stop-color",
  "stop-opacity",
  "stroke",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke-width",
  "tab-size",
  "table-layout",
  "text-align",
  "text-align-all",
  "text-align-last",
  "text-anchor",
  "text-combine-upright",
  "text-decoration",
  "text-decoration-color",
  "text-decoration-line",
  "text-decoration-skip",
  "text-decoration-skip-ink",
  "text-decoration-style",
  "text-decoration-thickness",
  "text-emphasis",
  "text-emphasis-color",
  "text-emphasis-position",
  "text-emphasis-style",
  "text-indent",
  "text-justify",
  "text-orientation",
  "text-overflow",
  "text-rendering",
  "text-shadow",
  "text-size-adjust",
  "text-transform",
  "text-underline-offset",
  "text-underline-position",
  "text-wrap",
  "text-wrap-mode",
  "text-wrap-style",
  "timeline-scope",
  "top",
  "touch-action",
  "transform",
  "transform-box",
  "transform-origin",
  "transform-style",
  "transition",
  "transition-behavior",
  "transition-delay",
  "transition-duration",
  "transition-property",
  "transition-timing-function",
  "translate",
  "unicode-bidi",
  "user-modify",
  "user-select",
  "vector-effect",
  "vertical-align",
  "view-timeline",
  "view-timeline-axis",
  "view-timeline-inset",
  "view-timeline-name",
  "view-transition-name",
  "visibility",
  "voice-balance",
  "voice-duration",
  "voice-family",
  "voice-pitch",
  "voice-range",
  "voice-rate",
  "voice-stress",
  "voice-volume",
  "white-space",
  "white-space-collapse",
  "widows",
  "width",
  "will-change",
  "word-break",
  "word-spacing",
  "word-wrap",
  "writing-mode",
  "x",
  "y",
  "z-index",
  "zoom"
].sort().reverse();
function scss(hljs2) {
  const modes = MODES3(hljs2);
  const PSEUDO_ELEMENTS$1 = PSEUDO_ELEMENTS3;
  const PSEUDO_CLASSES$1 = PSEUDO_CLASSES3;
  const AT_IDENTIFIER = "@[a-z-]+";
  const AT_MODIFIERS = "and or not only";
  const IDENT_RE3 = "[a-zA-Z-][a-zA-Z0-9_-]*";
  const VARIABLE = {
    className: "variable",
    begin: "(\\$" + IDENT_RE3 + ")\\b",
    relevance: 0
  };
  return {
    name: "SCSS",
    case_insensitive: true,
    illegal: "[=/|']",
    contains: [
      hljs2.C_LINE_COMMENT_MODE,
      hljs2.C_BLOCK_COMMENT_MODE,
      // to recognize keyframe 40% etc which are outside the scope of our
      // attribute value mode
      modes.CSS_NUMBER_MODE,
      {
        className: "selector-id",
        begin: "#[A-Za-z0-9_-]+",
        relevance: 0
      },
      {
        className: "selector-class",
        begin: "\\.[A-Za-z0-9_-]+",
        relevance: 0
      },
      modes.ATTRIBUTE_SELECTOR_MODE,
      {
        className: "selector-tag",
        begin: "\\b(" + TAGS3.join("|") + ")\\b",
        // was there, before, but why?
        relevance: 0
      },
      {
        className: "selector-pseudo",
        begin: ":(" + PSEUDO_CLASSES$1.join("|") + ")"
      },
      {
        className: "selector-pseudo",
        begin: ":(:)?(" + PSEUDO_ELEMENTS$1.join("|") + ")"
      },
      VARIABLE,
      {
        // pseudo-selector params
        begin: /\(/,
        end: /\)/,
        contains: [modes.CSS_NUMBER_MODE]
      },
      modes.CSS_VARIABLE,
      {
        className: "attribute",
        begin: "\\b(" + ATTRIBUTES3.join("|") + ")\\b"
      },
      { begin: "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b" },
      {
        begin: /:/,
        end: /[;}{]/,
        relevance: 0,
        contains: [
          modes.BLOCK_COMMENT,
          VARIABLE,
          modes.HEXCOLOR,
          modes.CSS_NUMBER_MODE,
          hljs2.QUOTE_STRING_MODE,
          hljs2.APOS_STRING_MODE,
          modes.IMPORTANT,
          modes.FUNCTION_DISPATCH
        ]
      },
      // matching these here allows us to treat them more like regular CSS
      // rules so everything between the {} gets regular rule highlighting,
      // which is what we want for page and font-face
      {
        begin: "@(page|font-face)",
        keywords: {
          $pattern: AT_IDENTIFIER,
          keyword: "@page @font-face"
        }
      },
      {
        begin: "@",
        end: "[{;]",
        returnBegin: true,
        keywords: {
          $pattern: /[a-z-]+/,
          keyword: AT_MODIFIERS,
          attribute: MEDIA_FEATURES3.join(" ")
        },
        contains: [
          {
            begin: AT_IDENTIFIER,
            className: "keyword"
          },
          {
            begin: /[a-z-]+(?=:)/,
            className: "attribute"
          },
          VARIABLE,
          hljs2.QUOTE_STRING_MODE,
          hljs2.APOS_STRING_MODE,
          modes.HEXCOLOR,
          modes.CSS_NUMBER_MODE
        ]
      },
      modes.FUNCTION_DISPATCH
    ]
  };
}

// node_modules/highlight.js/es/languages/shell.js
function shell(hljs2) {
  return {
    name: "Shell Session",
    aliases: [
      "console",
      "shellsession"
    ],
    contains: [
      {
        className: "meta.prompt",
        // We cannot add \s (spaces) in the regular expression otherwise it will be too broad and produce unexpected result.
        // For instance, in the following example, it would match "echo /path/to/home >" as a prompt:
        // echo /path/to/home > t.exe
        begin: /^\s{0,3}[/~\w\d[\]()@-]*[>%$#][ ]?/,
        starts: {
          end: /[^\\](?=\s*$)/,
          subLanguage: "bash"
        }
      }
    ]
  };
}

// node_modules/highlight.js/es/languages/sql.js
function sql(hljs2) {
  const regex2 = hljs2.regex;
  const COMMENT_MODE = hljs2.COMMENT("--", "$");
  const STRING = {
    scope: "string",
    variants: [
      {
        begin: /'/,
        end: /'/,
        contains: [{ match: /''/ }]
      }
    ]
  };
  const QUOTED_IDENTIFIER = {
    begin: /"/,
    end: /"/,
    contains: [{ match: /""/ }]
  };
  const LITERALS3 = [
    "true",
    "false",
    // Not sure it's correct to call NULL literal, and clauses like IS [NOT] NULL look strange that way.
    // "null",
    "unknown"
  ];
  const MULTI_WORD_TYPES = [
    "double precision",
    "large object",
    "with timezone",
    "without timezone"
  ];
  const TYPES3 = [
    "bigint",
    "binary",
    "blob",
    "boolean",
    "char",
    "character",
    "clob",
    "date",
    "dec",
    "decfloat",
    "decimal",
    "float",
    "int",
    "integer",
    "interval",
    "nchar",
    "nclob",
    "national",
    "numeric",
    "real",
    "row",
    "smallint",
    "time",
    "timestamp",
    "varchar",
    "varying",
    // modifier (character varying)
    "varbinary"
  ];
  const NON_RESERVED_WORDS = [
    "add",
    "asc",
    "collation",
    "desc",
    "final",
    "first",
    "last",
    "view"
  ];
  const RESERVED_WORDS = [
    "abs",
    "acos",
    "all",
    "allocate",
    "alter",
    "and",
    "any",
    "are",
    "array",
    "array_agg",
    "array_max_cardinality",
    "as",
    "asensitive",
    "asin",
    "asymmetric",
    "at",
    "atan",
    "atomic",
    "authorization",
    "avg",
    "begin",
    "begin_frame",
    "begin_partition",
    "between",
    "bigint",
    "binary",
    "blob",
    "boolean",
    "both",
    "by",
    "call",
    "called",
    "cardinality",
    "cascaded",
    "case",
    "cast",
    "ceil",
    "ceiling",
    "char",
    "char_length",
    "character",
    "character_length",
    "check",
    "classifier",
    "clob",
    "close",
    "coalesce",
    "collate",
    "collect",
    "column",
    "commit",
    "condition",
    "connect",
    "constraint",
    "contains",
    "convert",
    "copy",
    "corr",
    "corresponding",
    "cos",
    "cosh",
    "count",
    "covar_pop",
    "covar_samp",
    "create",
    "cross",
    "cube",
    "cume_dist",
    "current",
    "current_catalog",
    "current_date",
    "current_default_transform_group",
    "current_path",
    "current_role",
    "current_row",
    "current_schema",
    "current_time",
    "current_timestamp",
    "current_path",
    "current_role",
    "current_transform_group_for_type",
    "current_user",
    "cursor",
    "cycle",
    "date",
    "day",
    "deallocate",
    "dec",
    "decimal",
    "decfloat",
    "declare",
    "default",
    "define",
    "delete",
    "dense_rank",
    "deref",
    "describe",
    "deterministic",
    "disconnect",
    "distinct",
    "double",
    "drop",
    "dynamic",
    "each",
    "element",
    "else",
    "empty",
    "end",
    "end_frame",
    "end_partition",
    "end-exec",
    "equals",
    "escape",
    "every",
    "except",
    "exec",
    "execute",
    "exists",
    "exp",
    "external",
    "extract",
    "false",
    "fetch",
    "filter",
    "first_value",
    "float",
    "floor",
    "for",
    "foreign",
    "frame_row",
    "free",
    "from",
    "full",
    "function",
    "fusion",
    "get",
    "global",
    "grant",
    "group",
    "grouping",
    "groups",
    "having",
    "hold",
    "hour",
    "identity",
    "in",
    "indicator",
    "initial",
    "inner",
    "inout",
    "insensitive",
    "insert",
    "int",
    "integer",
    "intersect",
    "intersection",
    "interval",
    "into",
    "is",
    "join",
    "json_array",
    "json_arrayagg",
    "json_exists",
    "json_object",
    "json_objectagg",
    "json_query",
    "json_table",
    "json_table_primitive",
    "json_value",
    "lag",
    "language",
    "large",
    "last_value",
    "lateral",
    "lead",
    "leading",
    "left",
    "like",
    "like_regex",
    "listagg",
    "ln",
    "local",
    "localtime",
    "localtimestamp",
    "log",
    "log10",
    "lower",
    "match",
    "match_number",
    "match_recognize",
    "matches",
    "max",
    "member",
    "merge",
    "method",
    "min",
    "minute",
    "mod",
    "modifies",
    "module",
    "month",
    "multiset",
    "national",
    "natural",
    "nchar",
    "nclob",
    "new",
    "no",
    "none",
    "normalize",
    "not",
    "nth_value",
    "ntile",
    "null",
    "nullif",
    "numeric",
    "octet_length",
    "occurrences_regex",
    "of",
    "offset",
    "old",
    "omit",
    "on",
    "one",
    "only",
    "open",
    "or",
    "order",
    "out",
    "outer",
    "over",
    "overlaps",
    "overlay",
    "parameter",
    "partition",
    "pattern",
    "per",
    "percent",
    "percent_rank",
    "percentile_cont",
    "percentile_disc",
    "period",
    "portion",
    "position",
    "position_regex",
    "power",
    "precedes",
    "precision",
    "prepare",
    "primary",
    "procedure",
    "ptf",
    "range",
    "rank",
    "reads",
    "real",
    "recursive",
    "ref",
    "references",
    "referencing",
    "regr_avgx",
    "regr_avgy",
    "regr_count",
    "regr_intercept",
    "regr_r2",
    "regr_slope",
    "regr_sxx",
    "regr_sxy",
    "regr_syy",
    "release",
    "result",
    "return",
    "returns",
    "revoke",
    "right",
    "rollback",
    "rollup",
    "row",
    "row_number",
    "rows",
    "running",
    "savepoint",
    "scope",
    "scroll",
    "search",
    "second",
    "seek",
    "select",
    "sensitive",
    "session_user",
    "set",
    "show",
    "similar",
    "sin",
    "sinh",
    "skip",
    "smallint",
    "some",
    "specific",
    "specifictype",
    "sql",
    "sqlexception",
    "sqlstate",
    "sqlwarning",
    "sqrt",
    "start",
    "static",
    "stddev_pop",
    "stddev_samp",
    "submultiset",
    "subset",
    "substring",
    "substring_regex",
    "succeeds",
    "sum",
    "symmetric",
    "system",
    "system_time",
    "system_user",
    "table",
    "tablesample",
    "tan",
    "tanh",
    "then",
    "time",
    "timestamp",
    "timezone_hour",
    "timezone_minute",
    "to",
    "trailing",
    "translate",
    "translate_regex",
    "translation",
    "treat",
    "trigger",
    "trim",
    "trim_array",
    "true",
    "truncate",
    "uescape",
    "union",
    "unique",
    "unknown",
    "unnest",
    "update",
    "upper",
    "user",
    "using",
    "value",
    "values",
    "value_of",
    "var_pop",
    "var_samp",
    "varbinary",
    "varchar",
    "varying",
    "versioning",
    "when",
    "whenever",
    "where",
    "width_bucket",
    "window",
    "with",
    "within",
    "without",
    "year"
  ];
  const RESERVED_FUNCTIONS = [
    "abs",
    "acos",
    "array_agg",
    "asin",
    "atan",
    "avg",
    "cast",
    "ceil",
    "ceiling",
    "coalesce",
    "corr",
    "cos",
    "cosh",
    "count",
    "covar_pop",
    "covar_samp",
    "cume_dist",
    "dense_rank",
    "deref",
    "element",
    "exp",
    "extract",
    "first_value",
    "floor",
    "json_array",
    "json_arrayagg",
    "json_exists",
    "json_object",
    "json_objectagg",
    "json_query",
    "json_table",
    "json_table_primitive",
    "json_value",
    "lag",
    "last_value",
    "lead",
    "listagg",
    "ln",
    "log",
    "log10",
    "lower",
    "max",
    "min",
    "mod",
    "nth_value",
    "ntile",
    "nullif",
    "percent_rank",
    "percentile_cont",
    "percentile_disc",
    "position",
    "position_regex",
    "power",
    "rank",
    "regr_avgx",
    "regr_avgy",
    "regr_count",
    "regr_intercept",
    "regr_r2",
    "regr_slope",
    "regr_sxx",
    "regr_sxy",
    "regr_syy",
    "row_number",
    "sin",
    "sinh",
    "sqrt",
    "stddev_pop",
    "stddev_samp",
    "substring",
    "substring_regex",
    "sum",
    "tan",
    "tanh",
    "translate",
    "translate_regex",
    "treat",
    "trim",
    "trim_array",
    "unnest",
    "upper",
    "value_of",
    "var_pop",
    "var_samp",
    "width_bucket"
  ];
  const POSSIBLE_WITHOUT_PARENS = [
    "current_catalog",
    "current_date",
    "current_default_transform_group",
    "current_path",
    "current_role",
    "current_schema",
    "current_transform_group_for_type",
    "current_user",
    "session_user",
    "system_time",
    "system_user",
    "current_time",
    "localtime",
    "current_timestamp",
    "localtimestamp"
  ];
  const COMBOS = [
    "create table",
    "insert into",
    "primary key",
    "foreign key",
    "not null",
    "alter table",
    "add constraint",
    "grouping sets",
    "on overflow",
    "character set",
    "respect nulls",
    "ignore nulls",
    "nulls first",
    "nulls last",
    "depth first",
    "breadth first"
  ];
  const FUNCTIONS = RESERVED_FUNCTIONS;
  const KEYWORDS3 = [
    ...RESERVED_WORDS,
    ...NON_RESERVED_WORDS
  ].filter((keyword) => {
    return !RESERVED_FUNCTIONS.includes(keyword);
  });
  const VARIABLE = {
    scope: "variable",
    match: /@[a-z0-9][a-z0-9_]*/
  };
  const OPERATOR = {
    scope: "operator",
    match: /[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,
    relevance: 0
  };
  const FUNCTION_CALL = {
    match: regex2.concat(/\b/, regex2.either(...FUNCTIONS), /\s*\(/),
    relevance: 0,
    keywords: { built_in: FUNCTIONS }
  };
  function kws_to_regex(list) {
    return regex2.concat(
      /\b/,
      regex2.either(...list.map((kw) => {
        return kw.replace(/\s+/, "\\s+");
      })),
      /\b/
    );
  }
  const MULTI_WORD_KEYWORDS = {
    scope: "keyword",
    match: kws_to_regex(COMBOS),
    relevance: 0
  };
  function reduceRelevancy(list, {
    exceptions,
    when
  } = {}) {
    const qualifyFn = when;
    exceptions = exceptions || [];
    return list.map((item) => {
      if (item.match(/\|\d+$/) || exceptions.includes(item)) {
        return item;
      } else if (qualifyFn(item)) {
        return `${item}|0`;
      } else {
        return item;
      }
    });
  }
  return {
    name: "SQL",
    case_insensitive: true,
    // does not include {} or HTML tags `</`
    illegal: /[{}]|<\//,
    keywords: {
      $pattern: /\b[\w\.]+/,
      keyword: reduceRelevancy(KEYWORDS3, { when: (x) => x.length < 3 }),
      literal: LITERALS3,
      type: TYPES3,
      built_in: POSSIBLE_WITHOUT_PARENS
    },
    contains: [
      {
        scope: "type",
        match: kws_to_regex(MULTI_WORD_TYPES)
      },
      MULTI_WORD_KEYWORDS,
      FUNCTION_CALL,
      VARIABLE,
      STRING,
      QUOTED_IDENTIFIER,
      hljs2.C_NUMBER_MODE,
      hljs2.C_BLOCK_COMMENT_MODE,
      COMMENT_MODE,
      OPERATOR
    ]
  };
}

// node_modules/highlight.js/es/languages/swift.js
function source2(re) {
  if (!re) return null;
  if (typeof re === "string") return re;
  return re.source;
}
function lookahead2(re) {
  return concat2("(?=", re, ")");
}
function concat2(...args) {
  const joined = args.map((x) => source2(x)).join("");
  return joined;
}
function stripOptionsFromArgs2(args) {
  const opts = args[args.length - 1];
  if (typeof opts === "object" && opts.constructor === Object) {
    args.splice(args.length - 1, 1);
    return opts;
  } else {
    return {};
  }
}
function either2(...args) {
  const opts = stripOptionsFromArgs2(args);
  const joined = "(" + (opts.capture ? "" : "?:") + args.map((x) => source2(x)).join("|") + ")";
  return joined;
}
var keywordWrapper = (keyword) => concat2(
  /\b/,
  keyword,
  /\w$/.test(keyword) ? /\b/ : /\B/
);
var dotKeywords = [
  "Protocol",
  // contextual
  "Type"
  // contextual
].map(keywordWrapper);
var optionalDotKeywords = [
  "init",
  "self"
].map(keywordWrapper);
var keywordTypes = [
  "Any",
  "Self"
];
var keywords = [
  // strings below will be fed into the regular `keywords` engine while regex
  // will result in additional modes being created to scan for those keywords to
  // avoid conflicts with other rules
  "actor",
  "any",
  // contextual
  "associatedtype",
  "async",
  "await",
  /as\?/,
  // operator
  /as!/,
  // operator
  "as",
  // operator
  "borrowing",
  // contextual
  "break",
  "case",
  "catch",
  "class",
  "consume",
  // contextual
  "consuming",
  // contextual
  "continue",
  "convenience",
  // contextual
  "copy",
  // contextual
  "default",
  "defer",
  "deinit",
  "didSet",
  // contextual
  "distributed",
  "do",
  "dynamic",
  // contextual
  "each",
  "else",
  "enum",
  "extension",
  "fallthrough",
  /fileprivate\(set\)/,
  "fileprivate",
  "final",
  // contextual
  "for",
  "func",
  "get",
  // contextual
  "guard",
  "if",
  "import",
  "indirect",
  // contextual
  "infix",
  // contextual
  /init\?/,
  /init!/,
  "inout",
  /internal\(set\)/,
  "internal",
  "in",
  "is",
  // operator
  "isolated",
  // contextual
  "nonisolated",
  // contextual
  "lazy",
  // contextual
  "let",
  "macro",
  "mutating",
  // contextual
  "nonmutating",
  // contextual
  /open\(set\)/,
  // contextual
  "open",
  // contextual
  "operator",
  "optional",
  // contextual
  "override",
  // contextual
  "package",
  "postfix",
  // contextual
  "precedencegroup",
  "prefix",
  // contextual
  /private\(set\)/,
  "private",
  "protocol",
  /public\(set\)/,
  "public",
  "repeat",
  "required",
  // contextual
  "rethrows",
  "return",
  "set",
  // contextual
  "some",
  // contextual
  "static",
  "struct",
  "subscript",
  "super",
  "switch",
  "throws",
  "throw",
  /try\?/,
  // operator
  /try!/,
  // operator
  "try",
  // operator
  "typealias",
  /unowned\(safe\)/,
  // contextual
  /unowned\(unsafe\)/,
  // contextual
  "unowned",
  // contextual
  "var",
  "weak",
  // contextual
  "where",
  "while",
  "willSet"
  // contextual
];
var literals = [
  "false",
  "nil",
  "true"
];
var precedencegroupKeywords = [
  "assignment",
  "associativity",
  "higherThan",
  "left",
  "lowerThan",
  "none",
  "right"
];
var numberSignKeywords = [
  "#colorLiteral",
  "#column",
  "#dsohandle",
  "#else",
  "#elseif",
  "#endif",
  "#error",
  "#file",
  "#fileID",
  "#fileLiteral",
  "#filePath",
  "#function",
  "#if",
  "#imageLiteral",
  "#keyPath",
  "#line",
  "#selector",
  "#sourceLocation",
  "#warning"
];
var builtIns = [
  "abs",
  "all",
  "any",
  "assert",
  "assertionFailure",
  "debugPrint",
  "dump",
  "fatalError",
  "getVaList",
  "isKnownUniquelyReferenced",
  "max",
  "min",
  "numericCast",
  "pointwiseMax",
  "pointwiseMin",
  "precondition",
  "preconditionFailure",
  "print",
  "readLine",
  "repeatElement",
  "sequence",
  "stride",
  "swap",
  "swift_unboxFromSwiftValueWithType",
  "transcode",
  "type",
  "unsafeBitCast",
  "unsafeDowncast",
  "withExtendedLifetime",
  "withUnsafeMutablePointer",
  "withUnsafePointer",
  "withVaList",
  "withoutActuallyEscaping",
  "zip"
];
var operatorHead = either2(
  /[/=\-+!*%<>&|^~?]/,
  /[\u00A1-\u00A7]/,
  /[\u00A9\u00AB]/,
  /[\u00AC\u00AE]/,
  /[\u00B0\u00B1]/,
  /[\u00B6\u00BB\u00BF\u00D7\u00F7]/,
  /[\u2016-\u2017]/,
  /[\u2020-\u2027]/,
  /[\u2030-\u203E]/,
  /[\u2041-\u2053]/,
  /[\u2055-\u205E]/,
  /[\u2190-\u23FF]/,
  /[\u2500-\u2775]/,
  /[\u2794-\u2BFF]/,
  /[\u2E00-\u2E7F]/,
  /[\u3001-\u3003]/,
  /[\u3008-\u3020]/,
  /[\u3030]/
);
var operatorCharacter = either2(
  operatorHead,
  /[\u0300-\u036F]/,
  /[\u1DC0-\u1DFF]/,
  /[\u20D0-\u20FF]/,
  /[\uFE00-\uFE0F]/,
  /[\uFE20-\uFE2F]/
  // TODO: The following characters are also allowed, but the regex isn't supported yet.
  // /[\u{E0100}-\u{E01EF}]/u
);
var operator = concat2(operatorHead, operatorCharacter, "*");
var identifierHead = either2(
  /[a-zA-Z_]/,
  /[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/,
  /[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/,
  /[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/,
  /[\u1E00-\u1FFF]/,
  /[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/,
  /[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/,
  /[\u2C00-\u2DFF\u2E80-\u2FFF]/,
  /[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/,
  /[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/,
  /[\uFE47-\uFEFE\uFF00-\uFFFD]/
  // Should be /[\uFE47-\uFFFD]/, but we have to exclude FEFF.
  // The following characters are also allowed, but the regexes aren't supported yet.
  // /[\u{10000}-\u{1FFFD}\u{20000-\u{2FFFD}\u{30000}-\u{3FFFD}\u{40000}-\u{4FFFD}]/u,
  // /[\u{50000}-\u{5FFFD}\u{60000-\u{6FFFD}\u{70000}-\u{7FFFD}\u{80000}-\u{8FFFD}]/u,
  // /[\u{90000}-\u{9FFFD}\u{A0000-\u{AFFFD}\u{B0000}-\u{BFFFD}\u{C0000}-\u{CFFFD}]/u,
  // /[\u{D0000}-\u{DFFFD}\u{E0000-\u{EFFFD}]/u
);
var identifierCharacter = either2(
  identifierHead,
  /\d/,
  /[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/
);
var identifier = concat2(identifierHead, identifierCharacter, "*");
var typeIdentifier = concat2(/[A-Z]/, identifierCharacter, "*");
var keywordAttributes = [
  "attached",
  "autoclosure",
  concat2(/convention\(/, either2("swift", "block", "c"), /\)/),
  "discardableResult",
  "dynamicCallable",
  "dynamicMemberLookup",
  "escaping",
  "freestanding",
  "frozen",
  "GKInspectable",
  "IBAction",
  "IBDesignable",
  "IBInspectable",
  "IBOutlet",
  "IBSegueAction",
  "inlinable",
  "main",
  "nonobjc",
  "NSApplicationMain",
  "NSCopying",
  "NSManaged",
  concat2(/objc\(/, identifier, /\)/),
  "objc",
  "objcMembers",
  "propertyWrapper",
  "requires_stored_property_inits",
  "resultBuilder",
  "Sendable",
  "testable",
  "UIApplicationMain",
  "unchecked",
  "unknown",
  "usableFromInline",
  "warn_unqualified_access"
];
var availabilityKeywords = [
  "iOS",
  "iOSApplicationExtension",
  "macOS",
  "macOSApplicationExtension",
  "macCatalyst",
  "macCatalystApplicationExtension",
  "watchOS",
  "watchOSApplicationExtension",
  "tvOS",
  "tvOSApplicationExtension",
  "swift"
];
function swift(hljs2) {
  const WHITESPACE = {
    match: /\s+/,
    relevance: 0
  };
  const BLOCK_COMMENT = hljs2.COMMENT(
    "/\\*",
    "\\*/",
    { contains: ["self"] }
  );
  const COMMENTS = [
    hljs2.C_LINE_COMMENT_MODE,
    BLOCK_COMMENT
  ];
  const DOT_KEYWORD = {
    match: [
      /\./,
      either2(...dotKeywords, ...optionalDotKeywords)
    ],
    className: { 2: "keyword" }
  };
  const KEYWORD_GUARD = {
    // Consume .keyword to prevent highlighting properties and methods as keywords.
    match: concat2(/\./, either2(...keywords)),
    relevance: 0
  };
  const PLAIN_KEYWORDS = keywords.filter((kw) => typeof kw === "string").concat(["_|0"]);
  const REGEX_KEYWORDS = keywords.filter((kw) => typeof kw !== "string").concat(keywordTypes).map(keywordWrapper);
  const KEYWORD = { variants: [
    {
      className: "keyword",
      match: either2(...REGEX_KEYWORDS, ...optionalDotKeywords)
    }
  ] };
  const KEYWORDS3 = {
    $pattern: either2(
      /\b\w+/,
      // regular keywords
      /#\w+/
      // number keywords
    ),
    keyword: PLAIN_KEYWORDS.concat(numberSignKeywords),
    literal: literals
  };
  const KEYWORD_MODES = [
    DOT_KEYWORD,
    KEYWORD_GUARD,
    KEYWORD
  ];
  const BUILT_IN_GUARD = {
    // Consume .built_in to prevent highlighting properties and methods.
    match: concat2(/\./, either2(...builtIns)),
    relevance: 0
  };
  const BUILT_IN = {
    className: "built_in",
    match: concat2(/\b/, either2(...builtIns), /(?=\()/)
  };
  const BUILT_INS3 = [
    BUILT_IN_GUARD,
    BUILT_IN
  ];
  const OPERATOR_GUARD = {
    // Prevent -> from being highlighting as an operator.
    match: /->/,
    relevance: 0
  };
  const OPERATOR = {
    className: "operator",
    relevance: 0,
    variants: [
      { match: operator },
      {
        // dot-operator: only operators that start with a dot are allowed to use dots as
        // characters (..., ...<, .*, etc). So there rule here is: a dot followed by one or more
        // characters that may also include dots.
        match: `\\.(\\.|${operatorCharacter})+`
      }
    ]
  };
  const OPERATORS = [
    OPERATOR_GUARD,
    OPERATOR
  ];
  const decimalDigits3 = "([0-9]_*)+";
  const hexDigits3 = "([0-9a-fA-F]_*)+";
  const NUMBER = {
    className: "number",
    relevance: 0,
    variants: [
      // decimal floating-point-literal (subsumes decimal-literal)
      { match: `\\b(${decimalDigits3})(\\.(${decimalDigits3}))?([eE][+-]?(${decimalDigits3}))?\\b` },
      // hexadecimal floating-point-literal (subsumes hexadecimal-literal)
      { match: `\\b0x(${hexDigits3})(\\.(${hexDigits3}))?([pP][+-]?(${decimalDigits3}))?\\b` },
      // octal-literal
      { match: /\b0o([0-7]_*)+\b/ },
      // binary-literal
      { match: /\b0b([01]_*)+\b/ }
    ]
  };
  const ESCAPED_CHARACTER = (rawDelimiter = "") => ({
    className: "subst",
    variants: [
      { match: concat2(/\\/, rawDelimiter, /[0\\tnr"']/) },
      { match: concat2(/\\/, rawDelimiter, /u\{[0-9a-fA-F]{1,8}\}/) }
    ]
  });
  const ESCAPED_NEWLINE = (rawDelimiter = "") => ({
    className: "subst",
    match: concat2(/\\/, rawDelimiter, /[\t ]*(?:[\r\n]|\r\n)/)
  });
  const INTERPOLATION = (rawDelimiter = "") => ({
    className: "subst",
    label: "interpol",
    begin: concat2(/\\/, rawDelimiter, /\(/),
    end: /\)/
  });
  const MULTILINE_STRING = (rawDelimiter = "") => ({
    begin: concat2(rawDelimiter, /"""/),
    end: concat2(/"""/, rawDelimiter),
    contains: [
      ESCAPED_CHARACTER(rawDelimiter),
      ESCAPED_NEWLINE(rawDelimiter),
      INTERPOLATION(rawDelimiter)
    ]
  });
  const SINGLE_LINE_STRING = (rawDelimiter = "") => ({
    begin: concat2(rawDelimiter, /"/),
    end: concat2(/"/, rawDelimiter),
    contains: [
      ESCAPED_CHARACTER(rawDelimiter),
      INTERPOLATION(rawDelimiter)
    ]
  });
  const STRING = {
    className: "string",
    variants: [
      MULTILINE_STRING(),
      MULTILINE_STRING("#"),
      MULTILINE_STRING("##"),
      MULTILINE_STRING("###"),
      SINGLE_LINE_STRING(),
      SINGLE_LINE_STRING("#"),
      SINGLE_LINE_STRING("##"),
      SINGLE_LINE_STRING("###")
    ]
  };
  const REGEXP_CONTENTS = [
    hljs2.BACKSLASH_ESCAPE,
    {
      begin: /\[/,
      end: /\]/,
      relevance: 0,
      contains: [hljs2.BACKSLASH_ESCAPE]
    }
  ];
  const BARE_REGEXP_LITERAL = {
    begin: /\/[^\s](?=[^/\n]*\/)/,
    end: /\//,
    contains: REGEXP_CONTENTS
  };
  const EXTENDED_REGEXP_LITERAL = (rawDelimiter) => {
    const begin = concat2(rawDelimiter, /\//);
    const end = concat2(/\//, rawDelimiter);
    return {
      begin,
      end,
      contains: [
        ...REGEXP_CONTENTS,
        {
          scope: "comment",
          begin: `#(?!.*${end})`,
          end: /$/
        }
      ]
    };
  };
  const REGEXP = {
    scope: "regexp",
    variants: [
      EXTENDED_REGEXP_LITERAL("###"),
      EXTENDED_REGEXP_LITERAL("##"),
      EXTENDED_REGEXP_LITERAL("#"),
      BARE_REGEXP_LITERAL
    ]
  };
  const QUOTED_IDENTIFIER = { match: concat2(/`/, identifier, /`/) };
  const IMPLICIT_PARAMETER = {
    className: "variable",
    match: /\$\d+/
  };
  const PROPERTY_WRAPPER_PROJECTION = {
    className: "variable",
    match: `\\$${identifierCharacter}+`
  };
  const IDENTIFIERS = [
    QUOTED_IDENTIFIER,
    IMPLICIT_PARAMETER,
    PROPERTY_WRAPPER_PROJECTION
  ];
  const AVAILABLE_ATTRIBUTE = {
    match: /(@|#(un)?)available/,
    scope: "keyword",
    starts: { contains: [
      {
        begin: /\(/,
        end: /\)/,
        keywords: availabilityKeywords,
        contains: [
          ...OPERATORS,
          NUMBER,
          STRING
        ]
      }
    ] }
  };
  const KEYWORD_ATTRIBUTE = {
    scope: "keyword",
    match: concat2(/@/, either2(...keywordAttributes), lookahead2(either2(/\(/, /\s+/)))
  };
  const USER_DEFINED_ATTRIBUTE = {
    scope: "meta",
    match: concat2(/@/, identifier)
  };
  const ATTRIBUTES4 = [
    AVAILABLE_ATTRIBUTE,
    KEYWORD_ATTRIBUTE,
    USER_DEFINED_ATTRIBUTE
  ];
  const TYPE = {
    match: lookahead2(/\b[A-Z]/),
    relevance: 0,
    contains: [
      {
        // Common Apple frameworks, for relevance boost
        className: "type",
        match: concat2(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/, identifierCharacter, "+")
      },
      {
        // Type identifier
        className: "type",
        match: typeIdentifier,
        relevance: 0
      },
      {
        // Optional type
        match: /[?!]+/,
        relevance: 0
      },
      {
        // Variadic parameter
        match: /\.\.\./,
        relevance: 0
      },
      {
        // Protocol composition
        match: concat2(/\s+&\s+/, lookahead2(typeIdentifier)),
        relevance: 0
      }
    ]
  };
  const GENERIC_ARGUMENTS = {
    begin: /</,
    end: />/,
    keywords: KEYWORDS3,
    contains: [
      ...COMMENTS,
      ...KEYWORD_MODES,
      ...ATTRIBUTES4,
      OPERATOR_GUARD,
      TYPE
    ]
  };
  TYPE.contains.push(GENERIC_ARGUMENTS);
  const TUPLE_ELEMENT_NAME = {
    match: concat2(identifier, /\s*:/),
    keywords: "_|0",
    relevance: 0
  };
  const TUPLE = {
    begin: /\(/,
    end: /\)/,
    relevance: 0,
    keywords: KEYWORDS3,
    contains: [
      "self",
      TUPLE_ELEMENT_NAME,
      ...COMMENTS,
      REGEXP,
      ...KEYWORD_MODES,
      ...BUILT_INS3,
      ...OPERATORS,
      NUMBER,
      STRING,
      ...IDENTIFIERS,
      ...ATTRIBUTES4,
      TYPE
    ]
  };
  const GENERIC_PARAMETERS = {
    begin: /</,
    end: />/,
    keywords: "repeat each",
    contains: [
      ...COMMENTS,
      TYPE
    ]
  };
  const FUNCTION_PARAMETER_NAME = {
    begin: either2(
      lookahead2(concat2(identifier, /\s*:/)),
      lookahead2(concat2(identifier, /\s+/, identifier, /\s*:/))
    ),
    end: /:/,
    relevance: 0,
    contains: [
      {
        className: "keyword",
        match: /\b_\b/
      },
      {
        className: "params",
        match: identifier
      }
    ]
  };
  const FUNCTION_PARAMETERS = {
    begin: /\(/,
    end: /\)/,
    keywords: KEYWORDS3,
    contains: [
      FUNCTION_PARAMETER_NAME,
      ...COMMENTS,
      ...KEYWORD_MODES,
      ...OPERATORS,
      NUMBER,
      STRING,
      ...ATTRIBUTES4,
      TYPE,
      TUPLE
    ],
    endsParent: true,
    illegal: /["']/
  };
  const FUNCTION_OR_MACRO = {
    match: [
      /(func|macro)/,
      /\s+/,
      either2(QUOTED_IDENTIFIER.match, identifier, operator)
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      GENERIC_PARAMETERS,
      FUNCTION_PARAMETERS,
      WHITESPACE
    ],
    illegal: [
      /\[/,
      /%/
    ]
  };
  const INIT_SUBSCRIPT = {
    match: [
      /\b(?:subscript|init[?!]?)/,
      /\s*(?=[<(])/
    ],
    className: { 1: "keyword" },
    contains: [
      GENERIC_PARAMETERS,
      FUNCTION_PARAMETERS,
      WHITESPACE
    ],
    illegal: /\[|%/
  };
  const OPERATOR_DECLARATION = {
    match: [
      /operator/,
      /\s+/,
      operator
    ],
    className: {
      1: "keyword",
      3: "title"
    }
  };
  const PRECEDENCEGROUP = {
    begin: [
      /precedencegroup/,
      /\s+/,
      typeIdentifier
    ],
    className: {
      1: "keyword",
      3: "title"
    },
    contains: [TYPE],
    keywords: [
      ...precedencegroupKeywords,
      ...literals
    ],
    end: /}/
  };
  const CLASS_FUNC_DECLARATION = {
    match: [
      /class\b/,
      /\s+/,
      /func\b/,
      /\s+/,
      /\b[A-Za-z_][A-Za-z0-9_]*\b/
    ],
    scope: {
      1: "keyword",
      3: "keyword",
      5: "title.function"
    }
  };
  const CLASS_VAR_DECLARATION = {
    match: [
      /class\b/,
      /\s+/,
      /var\b/
    ],
    scope: {
      1: "keyword",
      3: "keyword"
    }
  };
  const TYPE_DECLARATION = {
    begin: [
      /(struct|protocol|class|extension|enum|actor)/,
      /\s+/,
      identifier,
      /\s*/
    ],
    beginScope: {
      1: "keyword",
      3: "title.class"
    },
    keywords: KEYWORDS3,
    contains: [
      GENERIC_PARAMETERS,
      ...KEYWORD_MODES,
      {
        begin: /:/,
        end: /\{/,
        keywords: KEYWORDS3,
        contains: [
          {
            scope: "title.class.inherited",
            match: typeIdentifier
          },
          ...KEYWORD_MODES
        ],
        relevance: 0
      }
    ]
  };
  for (const variant of STRING.variants) {
    const interpolation = variant.contains.find((mode) => mode.label === "interpol");
    interpolation.keywords = KEYWORDS3;
    const submodes = [
      ...KEYWORD_MODES,
      ...BUILT_INS3,
      ...OPERATORS,
      NUMBER,
      STRING,
      ...IDENTIFIERS
    ];
    interpolation.contains = [
      ...submodes,
      {
        begin: /\(/,
        end: /\)/,
        contains: [
          "self",
          ...submodes
        ]
      }
    ];
  }
  return {
    name: "Swift",
    keywords: KEYWORDS3,
    contains: [
      ...COMMENTS,
      FUNCTION_OR_MACRO,
      INIT_SUBSCRIPT,
      CLASS_FUNC_DECLARATION,
      CLASS_VAR_DECLARATION,
      TYPE_DECLARATION,
      OPERATOR_DECLARATION,
      PRECEDENCEGROUP,
      {
        beginKeywords: "import",
        end: /$/,
        contains: [...COMMENTS],
        relevance: 0
      },
      REGEXP,
      ...KEYWORD_MODES,
      ...BUILT_INS3,
      ...OPERATORS,
      NUMBER,
      STRING,
      ...IDENTIFIERS,
      ...ATTRIBUTES4,
      TYPE,
      TUPLE
    ]
  };
}

// node_modules/highlight.js/es/languages/yaml.js
function yaml(hljs2) {
  const LITERALS3 = "true false yes no null";
  const URI_CHARACTERS = "[\\w#;/?:@&=+$,.~*'()[\\]]+";
  const KEY = {
    className: "attr",
    variants: [
      // added brackets support and special char support
      { begin: /[\w*@][\w*@ :()\./-]*:(?=[ \t]|$)/ },
      {
        // double quoted keys - with brackets and special char support
        begin: /"[\w*@][\w*@ :()\./-]*":(?=[ \t]|$)/
      },
      {
        // single quoted keys - with brackets and special char support
        begin: /'[\w*@][\w*@ :()\./-]*':(?=[ \t]|$)/
      }
    ]
  };
  const TEMPLATE_VARIABLES = {
    className: "template-variable",
    variants: [
      {
        // jinja templates Ansible
        begin: /\{\{/,
        end: /\}\}/
      },
      {
        // Ruby i18n
        begin: /%\{/,
        end: /\}/
      }
    ]
  };
  const SINGLE_QUOTE_STRING = {
    className: "string",
    relevance: 0,
    begin: /'/,
    end: /'/,
    contains: [
      {
        match: /''/,
        scope: "char.escape",
        relevance: 0
      }
    ]
  };
  const STRING = {
    className: "string",
    relevance: 0,
    variants: [
      {
        begin: /"/,
        end: /"/
      },
      { begin: /\S+/ }
    ],
    contains: [
      hljs2.BACKSLASH_ESCAPE,
      TEMPLATE_VARIABLES
    ]
  };
  const CONTAINER_STRING = hljs2.inherit(STRING, { variants: [
    {
      begin: /'/,
      end: /'/,
      contains: [
        {
          begin: /''/,
          relevance: 0
        }
      ]
    },
    {
      begin: /"/,
      end: /"/
    },
    { begin: /[^\s,{}[\]]+/ }
  ] });
  const DATE_RE = "[0-9]{4}(-[0-9][0-9]){0,2}";
  const TIME_RE = "([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?";
  const FRACTION_RE = "(\\.[0-9]*)?";
  const ZONE_RE = "([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?";
  const TIMESTAMP = {
    className: "number",
    begin: "\\b" + DATE_RE + TIME_RE + FRACTION_RE + ZONE_RE + "\\b"
  };
  const VALUE_CONTAINER = {
    end: ",",
    endsWithParent: true,
    excludeEnd: true,
    keywords: LITERALS3,
    relevance: 0
  };
  const OBJECT = {
    begin: /\{/,
    end: /\}/,
    contains: [VALUE_CONTAINER],
    illegal: "\\n",
    relevance: 0
  };
  const ARRAY = {
    begin: "\\[",
    end: "\\]",
    contains: [VALUE_CONTAINER],
    illegal: "\\n",
    relevance: 0
  };
  const MODES4 = [
    KEY,
    {
      className: "meta",
      begin: "^---\\s*$",
      relevance: 10
    },
    {
      // multi line string
      // Blocks start with a | or > followed by a newline
      //
      // Indentation of subsequent lines must be the same to
      // be considered part of the block
      className: "string",
      begin: "[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"
    },
    {
      // Ruby/Rails erb
      begin: "<%[%=-]?",
      end: "[%-]?%>",
      subLanguage: "ruby",
      excludeBegin: true,
      excludeEnd: true,
      relevance: 0
    },
    {
      // named tags
      className: "type",
      begin: "!\\w+!" + URI_CHARACTERS
    },
    // https://yaml.org/spec/1.2/spec.html#id2784064
    {
      // verbatim tags
      className: "type",
      begin: "!<" + URI_CHARACTERS + ">"
    },
    {
      // primary tags
      className: "type",
      begin: "!" + URI_CHARACTERS
    },
    {
      // secondary tags
      className: "type",
      begin: "!!" + URI_CHARACTERS
    },
    {
      // fragment id &ref
      className: "meta",
      begin: "&" + hljs2.UNDERSCORE_IDENT_RE + "$"
    },
    {
      // fragment reference *ref
      className: "meta",
      begin: "\\*" + hljs2.UNDERSCORE_IDENT_RE + "$"
    },
    {
      // array listing
      className: "bullet",
      // TODO: remove |$ hack when we have proper look-ahead support
      begin: "-(?=[ ]|$)",
      relevance: 0
    },
    hljs2.HASH_COMMENT_MODE,
    {
      beginKeywords: LITERALS3,
      keywords: { literal: LITERALS3 }
    },
    TIMESTAMP,
    // numbers are any valid C-style number that
    // sit isolated from other words
    {
      className: "number",
      begin: hljs2.C_NUMBER_RE + "\\b",
      relevance: 0
    },
    OBJECT,
    ARRAY,
    SINGLE_QUOTE_STRING,
    STRING
  ];
  const VALUE_MODES = [...MODES4];
  VALUE_MODES.pop();
  VALUE_MODES.push(CONTAINER_STRING);
  VALUE_CONTAINER.contains = VALUE_MODES;
  return {
    name: "YAML",
    case_insensitive: true,
    aliases: ["yml"],
    contains: MODES4
  };
}

// node_modules/highlight.js/es/languages/typescript.js
var IDENT_RE2 = "[A-Za-z$_][0-9A-Za-z$_]*";
var KEYWORDS2 = [
  "as",
  // for exports
  "in",
  "of",
  "if",
  "for",
  "while",
  "finally",
  "var",
  "new",
  "function",
  "do",
  "return",
  "void",
  "else",
  "break",
  "catch",
  "instanceof",
  "with",
  "throw",
  "case",
  "default",
  "try",
  "switch",
  "continue",
  "typeof",
  "delete",
  "let",
  "yield",
  "const",
  "class",
  // JS handles these with a special rule
  // "get",
  // "set",
  "debugger",
  "async",
  "await",
  "static",
  "import",
  "from",
  "export",
  "extends",
  // It's reached stage 3, which is "recommended for implementation":
  "using"
];
var LITERALS2 = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
];
var TYPES2 = [
  // Fundamental objects
  "Object",
  "Function",
  "Boolean",
  "Symbol",
  // numbers and dates
  "Math",
  "Date",
  "Number",
  "BigInt",
  // text
  "String",
  "RegExp",
  // Indexed collections
  "Array",
  "Float32Array",
  "Float64Array",
  "Int8Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Int16Array",
  "Int32Array",
  "Uint16Array",
  "Uint32Array",
  "BigInt64Array",
  "BigUint64Array",
  // Keyed collections
  "Set",
  "Map",
  "WeakSet",
  "WeakMap",
  // Structured data
  "ArrayBuffer",
  "SharedArrayBuffer",
  "Atomics",
  "DataView",
  "JSON",
  // Control abstraction objects
  "Promise",
  "Generator",
  "GeneratorFunction",
  "AsyncFunction",
  // Reflection
  "Reflect",
  "Proxy",
  // Internationalization
  "Intl",
  // WebAssembly
  "WebAssembly"
];
var ERROR_TYPES2 = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
];
var BUILT_IN_GLOBALS2 = [
  "setInterval",
  "setTimeout",
  "clearInterval",
  "clearTimeout",
  "require",
  "exports",
  "eval",
  "isFinite",
  "isNaN",
  "parseFloat",
  "parseInt",
  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "escape",
  "unescape"
];
var BUILT_IN_VARIABLES2 = [
  "arguments",
  "this",
  "super",
  "console",
  "window",
  "document",
  "localStorage",
  "sessionStorage",
  "module",
  "global"
  // Node.js
];
var BUILT_INS2 = [].concat(
  BUILT_IN_GLOBALS2,
  TYPES2,
  ERROR_TYPES2
);
function javascript2(hljs2) {
  const regex2 = hljs2.regex;
  const hasClosingTag = (match, { after }) => {
    const tag2 = "</" + match[0].slice(1);
    const pos = match.input.indexOf(tag2, after);
    return pos !== -1;
  };
  const IDENT_RE$1 = IDENT_RE2;
  const FRAGMENT = {
    begin: "<>",
    end: "</>"
  };
  const XML_SELF_CLOSING = /<[A-Za-z0-9\\._:-]+\s*\/>/;
  const XML_TAG = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (match, response) => {
      const afterMatchIndex = match[0].length + match.index;
      const nextChar = match.input[afterMatchIndex];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        nextChar === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        nextChar === ","
      ) {
        response.ignoreMatch();
        return;
      }
      if (nextChar === ">") {
        if (!hasClosingTag(match, { after: afterMatchIndex })) {
          response.ignoreMatch();
        }
      }
      let m;
      const afterMatch = match.input.substring(afterMatchIndex);
      if (m = afterMatch.match(/^\s*=/)) {
        response.ignoreMatch();
        return;
      }
      if (m = afterMatch.match(/^\s+extends\s+/)) {
        if (m.index === 0) {
          response.ignoreMatch();
          return;
        }
      }
    }
  };
  const KEYWORDS$1 = {
    $pattern: IDENT_RE2,
    keyword: KEYWORDS2,
    literal: LITERALS2,
    built_in: BUILT_INS2,
    "variable.language": BUILT_IN_VARIABLES2
  };
  const decimalDigits3 = "[0-9](_?[0-9])*";
  const frac3 = `\\.(${decimalDigits3})`;
  const decimalInteger = `0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*`;
  const NUMBER = {
    className: "number",
    variants: [
      // DecimalLiteral
      { begin: `(\\b(${decimalInteger})((${frac3})|\\.)?|(${frac3}))[eE][+-]?(${decimalDigits3})\\b` },
      { begin: `\\b(${decimalInteger})\\b((${frac3})\\b|\\.)?|(${frac3})\\b` },
      // DecimalBigIntegerLiteral
      { begin: `\\b(0|[1-9](_?[0-9])*)n\\b` },
      // NonDecimalIntegerLiteral
      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
      { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
      { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
      // LegacyOctalIntegerLiteral (does not include underscore separators)
      // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
      { begin: "\\b0[0-7]+n?\\b" }
    ],
    relevance: 0
  };
  const SUBST = {
    className: "subst",
    begin: "\\$\\{",
    end: "\\}",
    keywords: KEYWORDS$1,
    contains: []
    // defined later
  };
  const HTML_TEMPLATE = {
    begin: ".?html`",
    end: "",
    starts: {
      end: "`",
      returnEnd: false,
      contains: [
        hljs2.BACKSLASH_ESCAPE,
        SUBST
      ],
      subLanguage: "xml"
    }
  };
  const CSS_TEMPLATE = {
    begin: ".?css`",
    end: "",
    starts: {
      end: "`",
      returnEnd: false,
      contains: [
        hljs2.BACKSLASH_ESCAPE,
        SUBST
      ],
      subLanguage: "css"
    }
  };
  const GRAPHQL_TEMPLATE = {
    begin: ".?gql`",
    end: "",
    starts: {
      end: "`",
      returnEnd: false,
      contains: [
        hljs2.BACKSLASH_ESCAPE,
        SUBST
      ],
      subLanguage: "graphql"
    }
  };
  const TEMPLATE_STRING = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      hljs2.BACKSLASH_ESCAPE,
      SUBST
    ]
  };
  const JSDOC_COMMENT = hljs2.COMMENT(
    /\/\*\*(?!\/)/,
    "\\*/",
    {
      relevance: 0,
      contains: [
        {
          begin: "(?=@[A-Za-z]+)",
          relevance: 0,
          contains: [
            {
              className: "doctag",
              begin: "@[A-Za-z]+"
            },
            {
              className: "type",
              begin: "\\{",
              end: "\\}",
              excludeEnd: true,
              excludeBegin: true,
              relevance: 0
            },
            {
              className: "variable",
              begin: IDENT_RE$1 + "(?=\\s*(-)|$)",
              endsParent: true,
              relevance: 0
            },
            // eat spaces (not newlines) so we can find
            // types or variables
            {
              begin: /(?=[^\n])\s/,
              relevance: 0
            }
          ]
        }
      ]
    }
  );
  const COMMENT = {
    className: "comment",
    variants: [
      JSDOC_COMMENT,
      hljs2.C_BLOCK_COMMENT_MODE,
      hljs2.C_LINE_COMMENT_MODE
    ]
  };
  const SUBST_INTERNALS = [
    hljs2.APOS_STRING_MODE,
    hljs2.QUOTE_STRING_MODE,
    HTML_TEMPLATE,
    CSS_TEMPLATE,
    GRAPHQL_TEMPLATE,
    TEMPLATE_STRING,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    NUMBER
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  SUBST.contains = SUBST_INTERNALS.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: KEYWORDS$1,
    contains: [
      "self"
    ].concat(SUBST_INTERNALS)
  });
  const SUBST_AND_COMMENTS = [].concat(COMMENT, SUBST.contains);
  const PARAMS_CONTAINS = SUBST_AND_COMMENTS.concat([
    // eat recursive parens in sub expressions
    {
      begin: /(\s*)\(/,
      end: /\)/,
      keywords: KEYWORDS$1,
      contains: ["self"].concat(SUBST_AND_COMMENTS)
    }
  ]);
  const PARAMS = {
    className: "params",
    // convert this to negative lookbehind in v12
    begin: /(\s*)\(/,
    // to match the parms with
    end: /\)/,
    excludeBegin: true,
    excludeEnd: true,
    keywords: KEYWORDS$1,
    contains: PARAMS_CONTAINS
  };
  const CLASS_OR_EXTENDS = {
    variants: [
      // class Car extends vehicle
      {
        match: [
          /class/,
          /\s+/,
          IDENT_RE$1,
          /\s+/,
          /extends/,
          /\s+/,
          regex2.concat(IDENT_RE$1, "(", regex2.concat(/\./, IDENT_RE$1), ")*")
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          5: "keyword",
          7: "title.class.inherited"
        }
      },
      // class Car
      {
        match: [
          /class/,
          /\s+/,
          IDENT_RE$1
        ],
        scope: {
          1: "keyword",
          3: "title.class"
        }
      }
    ]
  };
  const CLASS_REFERENCE = {
    relevance: 0,
    match: regex2.either(
      // Hard coded exceptions
      /\bJSON/,
      // Float32Array, OutT
      /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
      // CSSFactory, CSSFactoryT
      /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
      // FPs, FPsT
      /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
      // P
      // single letters are not highlighted
      // BLAH
      // this will be flagged as a UPPER_CASE_CONSTANT instead
    ),
    className: "title.class",
    keywords: {
      _: [
        // se we still get relevance credit for JS library classes
        ...TYPES2,
        ...ERROR_TYPES2
      ]
    }
  };
  const USE_STRICT = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  };
  const FUNCTION_DEFINITION = {
    variants: [
      {
        match: [
          /function/,
          /\s+/,
          IDENT_RE$1,
          /(?=\s*\()/
        ]
      },
      // anonymous function
      {
        match: [
          /function/,
          /\s*(?=\()/
        ]
      }
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    label: "func.def",
    contains: [PARAMS],
    illegal: /%/
  };
  const UPPER_CASE_CONSTANT = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function noneOf(list) {
    return regex2.concat("(?!", list.join("|"), ")");
  }
  const FUNCTION_CALL = {
    match: regex2.concat(
      /\b/,
      noneOf([
        ...BUILT_IN_GLOBALS2,
        "super",
        "import"
      ].map((x) => `${x}\\s*\\(`)),
      IDENT_RE$1,
      regex2.lookahead(/\s*\(/)
    ),
    className: "title.function",
    relevance: 0
  };
  const PROPERTY_ACCESS = {
    begin: regex2.concat(/\./, regex2.lookahead(
      regex2.concat(IDENT_RE$1, /(?![0-9A-Za-z$_(])/)
    )),
    end: IDENT_RE$1,
    excludeBegin: true,
    keywords: "prototype",
    className: "property",
    relevance: 0
  };
  const GETTER_OR_SETTER = {
    match: [
      /get|set/,
      /\s+/,
      IDENT_RE$1,
      /(?=\()/
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      {
        // eat to avoid empty params
        begin: /\(\)/
      },
      PARAMS
    ]
  };
  const FUNC_LEAD_IN_RE = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + hljs2.UNDERSCORE_IDENT_RE + ")\\s*=>";
  const FUNCTION_VARIABLE = {
    match: [
      /const|var|let/,
      /\s+/,
      IDENT_RE$1,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      regex2.lookahead(FUNC_LEAD_IN_RE)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      PARAMS
    ]
  };
  return {
    name: "JavaScript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: KEYWORDS$1,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS, CLASS_REFERENCE },
    illegal: /#(?![$_A-z])/,
    contains: [
      hljs2.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      USE_STRICT,
      hljs2.APOS_STRING_MODE,
      hljs2.QUOTE_STRING_MODE,
      HTML_TEMPLATE,
      CSS_TEMPLATE,
      GRAPHQL_TEMPLATE,
      TEMPLATE_STRING,
      COMMENT,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      NUMBER,
      CLASS_REFERENCE,
      {
        scope: "attr",
        match: IDENT_RE$1 + regex2.lookahead(":"),
        relevance: 0
      },
      FUNCTION_VARIABLE,
      {
        // "value" container
        begin: "(" + hljs2.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          COMMENT,
          hljs2.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: FUNC_LEAD_IN_RE,
            returnBegin: true,
            end: "\\s*=>",
            contains: [
              {
                className: "params",
                variants: [
                  {
                    begin: hljs2.UNDERSCORE_IDENT_RE,
                    relevance: 0
                  },
                  {
                    className: null,
                    begin: /\(\s*\)/,
                    skip: true
                  },
                  {
                    begin: /(\s*)\(/,
                    end: /\)/,
                    excludeBegin: true,
                    excludeEnd: true,
                    keywords: KEYWORDS$1,
                    contains: PARAMS_CONTAINS
                  }
                ]
              }
            ]
          },
          {
            // could be a comma delimited list of params to a function call
            begin: /,/,
            relevance: 0
          },
          {
            match: /\s+/,
            relevance: 0
          },
          {
            // JSX
            variants: [
              { begin: FRAGMENT.begin, end: FRAGMENT.end },
              { match: XML_SELF_CLOSING },
              {
                begin: XML_TAG.begin,
                // we carefully check the opening tag to see if it truly
                // is a tag and not a false positive
                "on:begin": XML_TAG.isTrulyOpeningTag,
                end: XML_TAG.end
              }
            ],
            subLanguage: "xml",
            contains: [
              {
                begin: XML_TAG.begin,
                end: XML_TAG.end,
                skip: true,
                contains: ["self"]
              }
            ]
          }
        ]
      },
      FUNCTION_DEFINITION,
      {
        // prevent this from getting swallowed up by function
        // since they appear "function like"
        beginKeywords: "while if switch catch for"
      },
      {
        // we have to count the parens to make sure we actually have the correct
        // bounding ( ).  There could be any number of sub-expressions inside
        // also surrounded by parens.
        begin: "\\b(?!function)" + hljs2.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        // end parens
        returnBegin: true,
        label: "func.def",
        contains: [
          PARAMS,
          hljs2.inherit(hljs2.TITLE_MODE, { begin: IDENT_RE$1, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      PROPERTY_ACCESS,
      // hack: prevents detection of keywords in some circumstances
      // .keyword()
      // $keyword = x
      {
        match: "\\$" + IDENT_RE$1,
        relevance: 0
      },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: "title.function" },
        contains: [PARAMS]
      },
      FUNCTION_CALL,
      UPPER_CASE_CONSTANT,
      CLASS_OR_EXTENDS,
      GETTER_OR_SETTER,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
function typescript(hljs2) {
  const regex2 = hljs2.regex;
  const tsLanguage = javascript2(hljs2);
  const IDENT_RE$1 = IDENT_RE2;
  const TYPES3 = [
    "any",
    "void",
    "number",
    "boolean",
    "string",
    "object",
    "never",
    "symbol",
    "bigint",
    "unknown"
  ];
  const NAMESPACE = {
    begin: [
      /namespace/,
      /\s+/,
      hljs2.IDENT_RE
    ],
    beginScope: {
      1: "keyword",
      3: "title.class"
    }
  };
  const INTERFACE = {
    beginKeywords: "interface",
    end: /\{/,
    excludeEnd: true,
    keywords: {
      keyword: "interface extends",
      built_in: TYPES3
    },
    contains: [tsLanguage.exports.CLASS_REFERENCE]
  };
  const USE_STRICT = {
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use strict['"]/
  };
  const TS_SPECIFIC_KEYWORDS = [
    "type",
    // "namespace",
    "interface",
    "public",
    "private",
    "protected",
    "implements",
    "declare",
    "abstract",
    "readonly",
    "enum",
    "override",
    "satisfies"
  ];
  const KEYWORDS$1 = {
    $pattern: IDENT_RE2,
    keyword: KEYWORDS2.concat(TS_SPECIFIC_KEYWORDS),
    literal: LITERALS2,
    built_in: BUILT_INS2.concat(TYPES3),
    "variable.language": BUILT_IN_VARIABLES2
  };
  const DECORATOR = {
    className: "meta",
    begin: "@" + IDENT_RE$1
  };
  const swapMode = (mode, label, replacement) => {
    const indx = mode.contains.findIndex((m) => m.label === label);
    if (indx === -1) {
      throw new Error("can not find mode to replace");
    }
    mode.contains.splice(indx, 1, replacement);
  };
  Object.assign(tsLanguage.keywords, KEYWORDS$1);
  tsLanguage.exports.PARAMS_CONTAINS.push(DECORATOR);
  const ATTRIBUTE_HIGHLIGHT = tsLanguage.contains.find((c2) => c2.scope === "attr");
  const OPTIONAL_KEY_OR_ARGUMENT = Object.assign(
    {},
    ATTRIBUTE_HIGHLIGHT,
    { match: regex2.concat(IDENT_RE$1, regex2.lookahead(/\s*\?:/)) }
  );
  tsLanguage.exports.PARAMS_CONTAINS.push([
    tsLanguage.exports.CLASS_REFERENCE,
    // class reference for highlighting the params types
    ATTRIBUTE_HIGHLIGHT,
    // highlight the params key
    OPTIONAL_KEY_OR_ARGUMENT
    // Added for optional property assignment highlighting
  ]);
  tsLanguage.contains = tsLanguage.contains.concat([
    DECORATOR,
    NAMESPACE,
    INTERFACE,
    OPTIONAL_KEY_OR_ARGUMENT
    // Added for optional property assignment highlighting
  ]);
  swapMode(tsLanguage, "shebang", hljs2.SHEBANG());
  swapMode(tsLanguage, "use_strict", USE_STRICT);
  const functionDeclaration = tsLanguage.contains.find((m) => m.label === "func.def");
  functionDeclaration.relevance = 0;
  Object.assign(tsLanguage, {
    name: "TypeScript",
    aliases: [
      "ts",
      "tsx",
      "mts",
      "cts"
    ]
  });
  return tsLanguage;
}

// node_modules/diff2html/lib-esm/ui/js/highlight.js-slim.js
core_default.registerLanguage("cpp", cpp);
core_default.registerLanguage("xml", xml);
core_default.registerLanguage("awk", awk);
core_default.registerLanguage("bash", bash);
core_default.registerLanguage("c", c);
core_default.registerLanguage("clojure", clojure);
core_default.registerLanguage("crystal", crystal);
core_default.registerLanguage("csharp", csharp);
core_default.registerLanguage("csp", csp);
core_default.registerLanguage("css", css);
core_default.registerLanguage("markdown", markdown);
core_default.registerLanguage("dart", dart);
core_default.registerLanguage("diff", diff);
core_default.registerLanguage("dockerfile", dockerfile);
core_default.registerLanguage("elixir", elixir);
core_default.registerLanguage("elm", elm);
core_default.registerLanguage("ruby", ruby);
core_default.registerLanguage("erlang", erlang);
core_default.registerLanguage("fsharp", fsharp);
core_default.registerLanguage("go", go);
core_default.registerLanguage("gradle", gradle);
core_default.registerLanguage("groovy", groovy);
core_default.registerLanguage("handlebars", handlebars);
core_default.registerLanguage("haskell", haskell);
core_default.registerLanguage("ini", ini);
core_default.registerLanguage("java", java);
core_default.registerLanguage("javascript", javascript);
core_default.registerLanguage("json", json);
core_default.registerLanguage("kotlin", kotlin);
core_default.registerLanguage("less", less);
core_default.registerLanguage("lisp", lisp);
core_default.registerLanguage("lua", lua);
core_default.registerLanguage("makefile", makefile);
core_default.registerLanguage("perl", perl);
core_default.registerLanguage("nginx", nginx);
core_default.registerLanguage("objectivec", objectivec);
core_default.registerLanguage("pgsql", pgsql);
core_default.registerLanguage("php", php);
core_default.registerLanguage("plaintext", plaintext);
core_default.registerLanguage("powershell", powershell);
core_default.registerLanguage("properties", properties);
core_default.registerLanguage("protobuf", protobuf);
core_default.registerLanguage("python", python);
core_default.registerLanguage("rust", rust);
core_default.registerLanguage("scala", scala);
core_default.registerLanguage("scss", scss);
core_default.registerLanguage("shell", shell);
core_default.registerLanguage("sql", sql);
core_default.registerLanguage("swift", swift);
core_default.registerLanguage("yaml", yaml);
core_default.registerLanguage("typescript", typescript);
var hljs = core_default;

// node_modules/diff2html/lib-esm/ui/js/highlight.js-helpers.js
function escapeHTML(value) {
  return value.replace(/&/gm, "&amp;").replace(/</gm, "&lt;").replace(/>/gm, "&gt;");
}
function tag(node) {
  return node.nodeName.toLowerCase();
}
function nodeStream(node) {
  const result = [];
  const nodeStream2 = (node2, offset) => {
    for (let child = node2.firstChild; child; child = child.nextSibling) {
      if (child.nodeType === 3 && child.nodeValue !== null) {
        offset += child.nodeValue.length;
      } else if (child.nodeType === 1) {
        result.push({
          event: "start",
          offset,
          node: child
        });
        offset = nodeStream2(child, offset);
        if (!tag(child).match(/br|hr|img|input/)) {
          result.push({
            event: "stop",
            offset,
            node: child
          });
        }
      }
    }
    return offset;
  };
  nodeStream2(node, 0);
  return result;
}
function mergeStreams(original, highlighted, value) {
  let processed = 0;
  let result = "";
  const nodeStack = [];
  function isElement(arg) {
    return arg !== null && (arg === null || arg === void 0 ? void 0 : arg.attributes) !== void 0;
  }
  function selectStream() {
    if (!original.length || !highlighted.length) {
      return original.length ? original : highlighted;
    }
    if (original[0].offset !== highlighted[0].offset) {
      return original[0].offset < highlighted[0].offset ? original : highlighted;
    }
    return highlighted[0].event === "start" ? original : highlighted;
  }
  function open(node) {
    if (!isElement(node)) {
      throw new Error("Node is not an Element");
    }
    result += `<${tag(node)} ${Array().map.call(node.attributes, (attr) => `${attr.nodeName}="${escapeHTML(attr.value).replace(/"/g, "&quot;")}"`).join(" ")}>`;
  }
  function close(node) {
    result += "</" + tag(node) + ">";
  }
  function render(event) {
    (event.event === "start" ? open : close)(event.node);
  }
  while (original.length || highlighted.length) {
    let stream = selectStream();
    result += escapeHTML(value.substring(processed, stream[0].offset));
    processed = stream[0].offset;
    if (stream === original) {
      nodeStack.reverse().forEach(close);
      do {
        render(stream.splice(0, 1)[0]);
        stream = selectStream();
      } while (stream === original && stream.length && stream[0].offset === processed);
      nodeStack.reverse().forEach(open);
    } else {
      if (stream[0].event === "start") {
        nodeStack.push(stream[0].node);
      } else {
        nodeStack.pop();
      }
      render(stream.splice(0, 1)[0]);
    }
  }
  return result + escapeHTML(value.substr(processed));
}
function closeTags(res) {
  const tokenStack = new Array();
  res.value = res.value.split("\n").map((line) => {
    const prepend = tokenStack.map((token) => `<span class="${token}">`).join("");
    const matches = line.matchAll(/(<span class="(.*?)">|<\/span>)/g);
    Array.from(matches).forEach((match) => {
      if (match[0] === "</span>")
        tokenStack.shift();
      else
        tokenStack.unshift(match[2]);
    });
    const append = "</span>".repeat(tokenStack.length);
    return prepend + line + append;
  }).join("\n");
  return res;
}
var languagesToExt = {
  "1c": "1c",
  abnf: "abnf",
  accesslog: "accesslog",
  as: "actionscript",
  adb: "ada",
  ada: "ada",
  ads: "ada",
  angelscript: "angelscript",
  apache: "apache",
  applescript: "applescript",
  scpt: "applescript",
  arcade: "arcade",
  cpp: "cpp",
  hpp: "cpp",
  arduino: "arduino",
  ino: "arduino",
  armasm: "armasm",
  arm: "armasm",
  xml: "xml",
  html: "xml",
  xhtml: "xml",
  rss: "xml",
  atom: "xml",
  xjb: "xml",
  xsd: "xml",
  xsl: "xml",
  plist: "xml",
  svg: "xml",
  asciidoc: "asciidoc",
  adoc: "asciidoc",
  asc: "asciidoc",
  aspectj: "aspectj",
  ahk: "autohotkey",
  ahkl: "autohotkey",
  au3: "autoit",
  avrasm: "avrasm",
  awk: "awk",
  axapta: "axapta",
  "x++": "axapta",
  bash: "bash",
  sh: "bash",
  zsh: "bash",
  b: "basic",
  bnf: "bnf",
  bf: "brainfuck",
  c: "c",
  h: "c",
  cats: "c",
  idc: "c",
  cal: "cal",
  capnproto: "capnproto",
  capnp: "capnproto",
  ceylon: "ceylon",
  clean: "clean",
  clj: "clojure",
  boot: "clojure",
  cl2: "clojure",
  cljc: "clojure",
  cljs: "clojure",
  "cljs.hl": "clojure",
  cljscm: "clojure",
  cljx: "clojure",
  hic: "clojure",
  "clojure-repl": "clojure-repl",
  cmake: "cmake",
  "cmake.in": "cmake",
  coffee: "coffeescript",
  _coffee: "coffeescript",
  cake: "coffeescript",
  cjsx: "coffeescript",
  iced: "coffeescript",
  cson: "coffeescript",
  coq: "coq",
  cos: "cos",
  cls: "cos",
  crmsh: "crmsh",
  crm: "crmsh",
  pcmk: "crmsh",
  cr: "crystal",
  cs: "csharp",
  csx: "csharp",
  csp: "csp",
  css: "css",
  d: "d",
  di: "d",
  md: "markdown",
  markdown: "markdown",
  mdown: "markdown",
  mdwn: "markdown",
  mkd: "markdown",
  mkdn: "markdown",
  mkdown: "markdown",
  ronn: "markdown",
  workbook: "markdown",
  dart: "dart",
  dpr: "delphi",
  dfm: "delphi",
  pas: "delphi",
  pascal: "delphi",
  diff: "diff",
  patch: "diff",
  django: "django",
  jinja: "django",
  dns: "dns",
  zone: "dns",
  bind: "dns",
  dockerfile: "dockerfile",
  docker: "dockerfile",
  dos: "dos",
  bat: "dos",
  cmd: "dos",
  dsconfig: "dsconfig",
  dts: "dts",
  dust: "dust",
  dst: "dust",
  ebnf: "ebnf",
  ex: "elixir",
  exs: "elixir",
  elm: "elm",
  rb: "ruby",
  builder: "ruby",
  eye: "ruby",
  gemspec: "ruby",
  god: "ruby",
  jbuilder: "ruby",
  mspec: "ruby",
  pluginspec: "ruby",
  podspec: "ruby",
  rabl: "ruby",
  rake: "ruby",
  rbuild: "ruby",
  rbw: "ruby",
  rbx: "ruby",
  ru: "ruby",
  ruby: "ruby",
  spec: "ruby",
  thor: "ruby",
  watchr: "ruby",
  erb: "erb",
  "erlang-repl": "erlang-repl",
  erl: "erlang",
  "app.src": "erlang",
  escript: "erlang",
  hrl: "erlang",
  xrl: "erlang",
  yrl: "erlang",
  excel: "excel",
  xls: "excel",
  xlsx: "excel",
  fix: "fix",
  flix: "flix",
  f90: "fortran",
  f: "fortran",
  f03: "fortran",
  f08: "fortran",
  f77: "fortran",
  f95: "fortran",
  for: "fortran",
  fpp: "fortran",
  fs: "fsharp",
  fsx: "fsharp",
  gams: "gams",
  gms: "gams",
  gauss: "gauss",
  gss: "gauss",
  gcode: "gcode",
  nc: "gcode",
  gherkin: "gherkin",
  glsl: "glsl",
  fp: "glsl",
  frag: "glsl",
  frg: "glsl",
  fsh: "glsl",
  fshader: "glsl",
  geo: "glsl",
  geom: "glsl",
  glslv: "glsl",
  gshader: "glsl",
  shader: "glsl",
  tesc: "glsl",
  tese: "glsl",
  vert: "glsl",
  vrx: "glsl",
  vsh: "glsl",
  vshader: "glsl",
  gml: "gml",
  go: "go",
  bal: "go",
  golo: "golo",
  gololang: "golo",
  gradle: "gradle",
  groovy: "groovy",
  grt: "groovy",
  gtpl: "groovy",
  gvy: "groovy",
  haml: "haml",
  "haml.deface": "haml",
  handlebars: "handlebars",
  hbs: "handlebars",
  "html.hbs": "handlebars",
  "html.handlebars": "handlebars",
  hs: "haskell",
  hsc: "haskell",
  idr: "haskell",
  purs: "haskell",
  hx: "haxe",
  hxsl: "haxe",
  hsp: "hsp",
  htmlbars: "htmlbars",
  http: "http",
  https: "http",
  hy: "hy",
  inform7: "inform7",
  i7: "inform7",
  ini: "ini",
  toml: "ini",
  cfg: "ini",
  prefs: "ini",
  irpf90: "irpf90",
  isbl: "isbl",
  java: "java",
  jsp: "java",
  js: "javascript",
  jsx: "javascript",
  _js: "javascript",
  bones: "javascript",
  es: "javascript",
  es6: "javascript",
  gs: "javascript",
  jake: "javascript",
  jsb: "javascript",
  jscad: "javascript",
  jsfl: "javascript",
  jsm: "javascript",
  jss: "javascript",
  mjs: "javascript",
  njs: "javascript",
  pac: "javascript",
  sjs: "javascript",
  ssjs: "javascript",
  xsjs: "javascript",
  xsjslib: "javascript",
  cfc: "javascript",
  "jboss-cli": "jboss-cli",
  json: "json",
  avsc: "json",
  geojson: "json",
  gltf: "json",
  "JSON-tmLanguage": "json",
  jsonl: "json",
  tfstate: "json",
  "tfstate.backup": "json",
  topojson: "json",
  webapp: "json",
  webmanifest: "json",
  jl: "julia",
  "julia-repl": "julia-repl",
  kt: "kotlin",
  ktm: "kotlin",
  kts: "kotlin",
  lasso: "lasso",
  lassoscript: "lasso",
  tex: "latex",
  ldif: "ldif",
  leaf: "leaf",
  less: "less",
  lisp: "lisp",
  factor: "lisp",
  livecodeserver: "livecodeserver",
  ls: "livescript",
  _ls: "livescript",
  llvm: "llvm",
  lsl: "lsl",
  lua: "lua",
  nse: "lua",
  p8: "lua",
  pd_lua: "lua",
  rbxs: "lua",
  wlua: "lua",
  mak: "makefile",
  make: "makefile",
  mk: "makefile",
  mkfile: "makefile",
  mathematica: "mathematica",
  mma: "mathematica",
  wl: "mathematica",
  matlab: "matlab",
  maxima: "maxima",
  mel: "mel",
  mercury: "mercury",
  mipsasm: "mipsasm",
  miz: "mizar",
  voc: "mizar",
  al: "perl",
  cgi: "perl",
  fcgi: "perl",
  perl: "perl",
  ph: "perl",
  plx: "perl",
  pl: "perl",
  pm: "perl",
  psgi: "perl",
  t: "perl",
  mojolicious: "mojolicious",
  monkey: "monkey",
  monkey2: "monkey",
  moonscript: "moonscript",
  moon: "moonscript",
  n1ql: "n1ql",
  nginxconf: "nginx",
  nim: "nim",
  nimrod: "nim",
  nix: "nix",
  nsi: "nsis",
  nsh: "nsis",
  m: "objectivec",
  objc: "objectivec",
  mm: "objectivec",
  "obj-c": "objectivec",
  "obj-c++": "objectivec",
  "objective-c++": "objectivec",
  fun: "ocaml",
  sig: "ocaml",
  ml: "ocaml",
  mli: "ocaml",
  eliom: "ocaml",
  eliomi: "ocaml",
  ml4: "ocaml",
  mll: "ocaml",
  mly: "ocaml",
  openscad: "openscad",
  oxygene: "oxygene",
  parser3: "parser3",
  pf: "pf",
  "pf.conf": "pf",
  pgsql: "pgsql",
  postgres: "pgsql",
  postgresql: "pgsql",
  php: "php",
  aw: "php",
  ctp: "php",
  inc: "php",
  php3: "php",
  php4: "php",
  php5: "php",
  phps: "php",
  phpt: "php",
  "php-template": "php-template",
  plaintext: "plaintext",
  txt: "plaintext",
  text: "plaintext",
  pony: "pony",
  ps: "powershell",
  ps1: "powershell",
  psd1: "powershell",
  psm1: "powershell",
  pde: "processing",
  profile: "profile",
  pro: "prolog",
  prolog: "prolog",
  yap: "prolog",
  properties: "properties",
  proto: "protobuf",
  puppet: "puppet",
  pp: "puppet",
  purebasic: "purebasic",
  py: "python",
  bzl: "python",
  gyp: "python",
  gypi: "python",
  lmi: "python",
  py3: "python",
  pyde: "python",
  pyi: "python",
  pyp: "python",
  pyt: "python",
  pyw: "python",
  rpy: "python",
  tac: "python",
  wsgi: "python",
  xpy: "python",
  "python-repl": "python-repl",
  pycon: "python-repl",
  q: "q",
  k: "q",
  kdb: "q",
  qml: "qml",
  r: "r",
  rd: "r",
  rsx: "r",
  reasonml: "reasonml",
  re: "reasonml",
  rib: "rib",
  roboconf: "roboconf",
  graph: "roboconf",
  instances: "roboconf",
  routeros: "routeros",
  rsl: "rsl",
  ruleslanguage: "ruleslanguage",
  rs: "rust",
  "rs.in": "rust",
  sas: "sas",
  scala: "scala",
  kojo: "scala",
  sbt: "scala",
  sc: "scala",
  scm: "scheme",
  sch: "scheme",
  sld: "scheme",
  sls: "scheme",
  sps: "scheme",
  ss: "scheme",
  rkt: "scheme",
  scilab: "scilab",
  scss: "scss",
  shell: "shell",
  smali: "smali",
  st: "smalltalk",
  sml: "sml",
  sqf: "sqf",
  sql: "sql",
  cql: "sql",
  ddl: "sql",
  mysql: "sql",
  prc: "sql",
  tab: "sql",
  udf: "sql",
  viw: "sql",
  stan: "stan",
  stanfuncs: "stan",
  stata: "stata",
  step21: "step21",
  step: "step21",
  stp: "step21",
  styl: "stylus",
  subunit: "subunit",
  swift: "swift",
  taggerscript: "taggerscript",
  yml: "yaml",
  mir: "yaml",
  reek: "yaml",
  rviz: "yaml",
  "sublime-syntax": "yaml",
  syntax: "yaml",
  yaml: "yaml",
  "yaml-tmlanguage": "yaml",
  "yml.mysql": "yaml",
  tap: "tap",
  tcl: "tcl",
  adp: "tcl",
  tm: "tcl",
  thrift: "thrift",
  tp: "tp",
  twig: "twig",
  craftcms: "twig",
  ts: "typescript",
  tsx: "typescript",
  vala: "vala",
  vbnet: "vbnet",
  vb: "vbnet",
  vbscript: "vbscript",
  vbs: "vbscript",
  "vbscript-html": "vbscript-html",
  v: "verilog",
  veo: "verilog",
  vhdl: "vhdl",
  vhd: "vhdl",
  vhf: "vhdl",
  vhi: "vhdl",
  vho: "vhdl",
  vhs: "vhdl",
  vht: "vhdl",
  vhw: "vhdl",
  vim: "vim",
  x86asm: "x86asm",
  xl: "xl",
  xquery: "xquery",
  xpath: "xquery",
  xq: "xquery",
  zephir: "zephir",
  zep: "zephir"
};
function getLanguage(fileExtension) {
  var _a;
  return (_a = languagesToExt[fileExtension]) !== null && _a !== void 0 ? _a : "plaintext";
}

// node_modules/diff2html/lib-esm/types.js
var LineType;
(function(LineType2) {
  LineType2["INSERT"] = "insert";
  LineType2["DELETE"] = "delete";
  LineType2["CONTEXT"] = "context";
})(LineType || (LineType = {}));
var OutputFormatType = {
  LINE_BY_LINE: "line-by-line",
  SIDE_BY_SIDE: "side-by-side"
};
var LineMatchingType = {
  LINES: "lines",
  WORDS: "words",
  NONE: "none"
};
var DiffStyleType = {
  WORD: "word",
  CHAR: "char"
};
var ColorSchemeType;
(function(ColorSchemeType2) {
  ColorSchemeType2["AUTO"] = "auto";
  ColorSchemeType2["DARK"] = "dark";
  ColorSchemeType2["LIGHT"] = "light";
})(ColorSchemeType || (ColorSchemeType = {}));

// node_modules/diff2html/lib-esm/utils.js
var specials = [
  "-",
  "[",
  "]",
  "/",
  "{",
  "}",
  "(",
  ")",
  "*",
  "+",
  "?",
  ".",
  "\\",
  "^",
  "$",
  "|"
];
var regex = RegExp("[" + specials.join("\\") + "]", "g");
function escapeForRegExp(str) {
  return str.replace(regex, "\\$&");
}
function unifyPath(path) {
  return path ? path.replace(/\\/g, "/") : path;
}
function hashCode(text) {
  let i, chr, len;
  let hash = 0;
  for (i = 0, len = text.length; i < len; i++) {
    chr = text.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0;
  }
  return hash;
}
function max(arr) {
  const length = arr.length;
  let max2 = -Infinity;
  for (let i = 0; i < length; i++) {
    max2 = Math.max(max2, arr[i]);
  }
  return max2;
}

// node_modules/diff2html/lib-esm/diff-parser.js
function getExtension(filename, language) {
  const filenameParts = filename.split(".");
  return filenameParts.length > 1 ? filenameParts[filenameParts.length - 1] : language;
}
function startsWithAny(str, prefixes) {
  return prefixes.reduce((startsWith, prefix) => startsWith || str.startsWith(prefix), false);
}
var baseDiffFilenamePrefixes = ["a/", "b/", "i/", "w/", "c/", "o/"];
function getFilename(line, linePrefix, extraPrefix) {
  const prefixes = extraPrefix !== void 0 ? [...baseDiffFilenamePrefixes, extraPrefix] : baseDiffFilenamePrefixes;
  const FilenameRegExp = linePrefix ? new RegExp(`^${escapeForRegExp(linePrefix)} "?(.+?)"?$`) : new RegExp('^"?(.+?)"?$');
  const [, filename = ""] = FilenameRegExp.exec(line) || [];
  const matchingPrefix = prefixes.find((p) => filename.indexOf(p) === 0);
  const fnameWithoutPrefix = matchingPrefix ? filename.slice(matchingPrefix.length) : filename;
  return fnameWithoutPrefix.replace(/\s+\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}(?:\.\d+)? [+-]\d{4}.*$/, "");
}
function getSrcFilename(line, srcPrefix) {
  return getFilename(line, "---", srcPrefix);
}
function getDstFilename(line, dstPrefix) {
  return getFilename(line, "+++", dstPrefix);
}
function parse(diffInput, config = {}) {
  const files = [];
  let currentFile = null;
  let currentBlock = null;
  let oldLine = null;
  let oldLine2 = null;
  let newLine = null;
  let possibleOldName = null;
  let possibleNewName = null;
  const oldFileNameHeader = "--- ";
  const newFileNameHeader = "+++ ";
  const hunkHeaderPrefix = "@@";
  const oldMode = /^old mode (\d{6})/;
  const newMode = /^new mode (\d{6})/;
  const deletedFileMode = /^deleted file mode (\d{6})/;
  const newFileMode = /^new file mode (\d{6})/;
  const copyFrom = /^copy from "?(.+)"?/;
  const copyTo = /^copy to "?(.+)"?/;
  const renameFrom = /^rename from "?(.+)"?/;
  const renameTo = /^rename to "?(.+)"?/;
  const similarityIndex = /^similarity index (\d+)%/;
  const dissimilarityIndex = /^dissimilarity index (\d+)%/;
  const index = /^index ([\da-z]+)\.\.([\da-z]+)\s*(\d{6})?/;
  const binaryFiles = /^Binary files (.*) and (.*) differ/;
  const binaryDiff = /^GIT binary patch/;
  const combinedIndex = /^index ([\da-z]+),([\da-z]+)\.\.([\da-z]+)/;
  const combinedMode = /^mode (\d{6}),(\d{6})\.\.(\d{6})/;
  const combinedNewFile = /^new file mode (\d{6})/;
  const combinedDeletedFile = /^deleted file mode (\d{6}),(\d{6})/;
  const diffLines = diffInput.replace(/\\ No newline at end of file/g, "").replace(/\r\n?/g, "\n").split("\n");
  function saveBlock() {
    if (currentBlock !== null && currentFile !== null) {
      currentFile.blocks.push(currentBlock);
      currentBlock = null;
    }
  }
  function saveFile() {
    if (currentFile !== null) {
      if (!currentFile.oldName && possibleOldName !== null) {
        currentFile.oldName = possibleOldName;
      }
      if (!currentFile.newName && possibleNewName !== null) {
        currentFile.newName = possibleNewName;
      }
      if (currentFile.newName) {
        files.push(currentFile);
        currentFile = null;
      }
    }
    possibleOldName = null;
    possibleNewName = null;
  }
  function startFile() {
    saveBlock();
    saveFile();
    currentFile = {
      blocks: [],
      deletedLines: 0,
      addedLines: 0
    };
  }
  function startBlock(line) {
    saveBlock();
    let values;
    if (currentFile !== null) {
      if (values = /^@@ -(\d+)(?:,\d+)? \+(\d+)(?:,\d+)? @@.*/.exec(line)) {
        currentFile.isCombined = false;
        oldLine = parseInt(values[1], 10);
        newLine = parseInt(values[2], 10);
      } else if (values = /^@@@ -(\d+)(?:,\d+)? -(\d+)(?:,\d+)? \+(\d+)(?:,\d+)? @@@.*/.exec(line)) {
        currentFile.isCombined = true;
        oldLine = parseInt(values[1], 10);
        oldLine2 = parseInt(values[2], 10);
        newLine = parseInt(values[3], 10);
      } else {
        if (line.startsWith(hunkHeaderPrefix)) {
          console.error("Failed to parse lines, starting in 0!");
        }
        oldLine = 0;
        newLine = 0;
        currentFile.isCombined = false;
      }
    }
    currentBlock = {
      lines: [],
      oldStartLine: oldLine,
      oldStartLine2: oldLine2,
      newStartLine: newLine,
      header: line
    };
  }
  function createLine(line) {
    if (currentFile === null || currentBlock === null || oldLine === null || newLine === null)
      return;
    const currentLine = {
      content: line
    };
    const addedPrefixes = currentFile.isCombined ? ["+ ", " +", "++"] : ["+"];
    const deletedPrefixes = currentFile.isCombined ? ["- ", " -", "--"] : ["-"];
    if (startsWithAny(line, addedPrefixes)) {
      currentFile.addedLines++;
      currentLine.type = LineType.INSERT;
      currentLine.oldNumber = void 0;
      currentLine.newNumber = newLine++;
    } else if (startsWithAny(line, deletedPrefixes)) {
      currentFile.deletedLines++;
      currentLine.type = LineType.DELETE;
      currentLine.oldNumber = oldLine++;
      currentLine.newNumber = void 0;
    } else {
      currentLine.type = LineType.CONTEXT;
      currentLine.oldNumber = oldLine++;
      currentLine.newNumber = newLine++;
    }
    currentBlock.lines.push(currentLine);
  }
  function existHunkHeader(line, lineIdx) {
    let idx = lineIdx;
    while (idx < diffLines.length - 3) {
      if (line.startsWith("diff")) {
        return false;
      }
      if (diffLines[idx].startsWith(oldFileNameHeader) && diffLines[idx + 1].startsWith(newFileNameHeader) && diffLines[idx + 2].startsWith(hunkHeaderPrefix)) {
        return true;
      }
      idx++;
    }
    return false;
  }
  diffLines.forEach((line, lineIndex) => {
    if (!line || line.startsWith("*")) {
      return;
    }
    let values;
    const prevLine = diffLines[lineIndex - 1];
    const nxtLine = diffLines[lineIndex + 1];
    const afterNxtLine = diffLines[lineIndex + 2];
    if (line.startsWith("diff --git") || line.startsWith("diff --combined")) {
      startFile();
      const gitDiffStart = /^diff --git "?([a-ciow]\/.+)"? "?([a-ciow]\/.+)"?/;
      if (values = gitDiffStart.exec(line)) {
        possibleOldName = getFilename(values[1], void 0, config.dstPrefix);
        possibleNewName = getFilename(values[2], void 0, config.srcPrefix);
      }
      if (currentFile === null) {
        throw new Error("Where is my file !!!");
      }
      currentFile.isGitDiff = true;
      return;
    }
    if (line.startsWith("Binary files") && !(currentFile === null || currentFile === void 0 ? void 0 : currentFile.isGitDiff)) {
      startFile();
      const unixDiffBinaryStart = /^Binary files "?([a-ciow]\/.+)"? and "?([a-ciow]\/.+)"? differ/;
      if (values = unixDiffBinaryStart.exec(line)) {
        possibleOldName = getFilename(values[1], void 0, config.dstPrefix);
        possibleNewName = getFilename(values[2], void 0, config.srcPrefix);
      }
      if (currentFile === null) {
        throw new Error("Where is my file !!!");
      }
      currentFile.isBinary = true;
      return;
    }
    if (!currentFile || !currentFile.isGitDiff && currentFile && line.startsWith(oldFileNameHeader) && nxtLine.startsWith(newFileNameHeader) && afterNxtLine.startsWith(hunkHeaderPrefix)) {
      startFile();
    }
    if (currentFile === null || currentFile === void 0 ? void 0 : currentFile.isTooBig) {
      return;
    }
    if (currentFile && (typeof config.diffMaxChanges === "number" && currentFile.addedLines + currentFile.deletedLines > config.diffMaxChanges || typeof config.diffMaxLineLength === "number" && line.length > config.diffMaxLineLength)) {
      currentFile.isTooBig = true;
      currentFile.addedLines = 0;
      currentFile.deletedLines = 0;
      currentFile.blocks = [];
      currentBlock = null;
      const message = typeof config.diffTooBigMessage === "function" ? config.diffTooBigMessage(files.length) : "Diff too big to be displayed";
      startBlock(message);
      return;
    }
    if (line.startsWith(oldFileNameHeader) && nxtLine.startsWith(newFileNameHeader) || line.startsWith(newFileNameHeader) && prevLine.startsWith(oldFileNameHeader)) {
      if (currentFile && !currentFile.oldName && line.startsWith("--- ") && (values = getSrcFilename(line, config.srcPrefix))) {
        currentFile.oldName = values;
        currentFile.language = getExtension(currentFile.oldName, currentFile.language);
        return;
      }
      if (currentFile && !currentFile.newName && line.startsWith("+++ ") && (values = getDstFilename(line, config.dstPrefix))) {
        currentFile.newName = values;
        currentFile.language = getExtension(currentFile.newName, currentFile.language);
        return;
      }
    }
    if (currentFile && (line.startsWith(hunkHeaderPrefix) || currentFile.isGitDiff && currentFile.oldName && currentFile.newName && !currentBlock)) {
      startBlock(line);
      return;
    }
    if (currentBlock && (line.startsWith("+") || line.startsWith("-") || line.startsWith(" "))) {
      createLine(line);
      return;
    }
    const doesNotExistHunkHeader = !existHunkHeader(line, lineIndex);
    if (currentFile === null) {
      throw new Error("Where is my file !!!");
    }
    if (values = oldMode.exec(line)) {
      currentFile.oldMode = values[1];
    } else if (values = newMode.exec(line)) {
      currentFile.newMode = values[1];
    } else if (values = deletedFileMode.exec(line)) {
      currentFile.deletedFileMode = values[1];
      currentFile.isDeleted = true;
    } else if (values = newFileMode.exec(line)) {
      currentFile.newFileMode = values[1];
      currentFile.isNew = true;
    } else if (values = copyFrom.exec(line)) {
      if (doesNotExistHunkHeader) {
        currentFile.oldName = values[1];
      }
      currentFile.isCopy = true;
    } else if (values = copyTo.exec(line)) {
      if (doesNotExistHunkHeader) {
        currentFile.newName = values[1];
      }
      currentFile.isCopy = true;
    } else if (values = renameFrom.exec(line)) {
      if (doesNotExistHunkHeader) {
        currentFile.oldName = values[1];
      }
      currentFile.isRename = true;
    } else if (values = renameTo.exec(line)) {
      if (doesNotExistHunkHeader) {
        currentFile.newName = values[1];
      }
      currentFile.isRename = true;
    } else if (values = binaryFiles.exec(line)) {
      currentFile.isBinary = true;
      currentFile.oldName = getFilename(values[1], void 0, config.srcPrefix);
      currentFile.newName = getFilename(values[2], void 0, config.dstPrefix);
      startBlock("Binary file");
    } else if (binaryDiff.test(line)) {
      currentFile.isBinary = true;
      startBlock(line);
    } else if (values = similarityIndex.exec(line)) {
      currentFile.unchangedPercentage = parseInt(values[1], 10);
    } else if (values = dissimilarityIndex.exec(line)) {
      currentFile.changedPercentage = parseInt(values[1], 10);
    } else if (values = index.exec(line)) {
      currentFile.checksumBefore = values[1];
      currentFile.checksumAfter = values[2];
      if (values[3])
        currentFile.mode = values[3];
    } else if (values = combinedIndex.exec(line)) {
      currentFile.checksumBefore = [values[2], values[3]];
      currentFile.checksumAfter = values[1];
    } else if (values = combinedMode.exec(line)) {
      currentFile.oldMode = [values[2], values[3]];
      currentFile.newMode = values[1];
    } else if (values = combinedNewFile.exec(line)) {
      currentFile.newFileMode = values[1];
      currentFile.isNew = true;
    } else if (values = combinedDeletedFile.exec(line)) {
      currentFile.deletedFileMode = values[1];
      currentFile.isDeleted = true;
    }
  });
  saveBlock();
  saveFile();
  return files;
}

// node_modules/diff2html/lib-esm/rematch.js
function levenshtein(a, b) {
  if (a.length === 0) {
    return b.length;
  }
  if (b.length === 0) {
    return a.length;
  }
  const matrix = [];
  let i;
  for (i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  let j;
  for (j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }
  for (i = 1; i <= b.length; i++) {
    for (j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1));
      }
    }
  }
  return matrix[b.length][a.length];
}
function newDistanceFn(str) {
  return (x, y) => {
    const xValue = str(x).trim();
    const yValue = str(y).trim();
    const lev = levenshtein(xValue, yValue);
    return lev / (xValue.length + yValue.length);
  };
}
function newMatcherFn(distance2) {
  function findBestMatch(a, b, cache = /* @__PURE__ */ new Map()) {
    let bestMatchDist = Infinity;
    let bestMatch;
    for (let i = 0; i < a.length; ++i) {
      for (let j = 0; j < b.length; ++j) {
        const cacheKey = JSON.stringify([a[i], b[j]]);
        let md;
        if (!(cache.has(cacheKey) && (md = cache.get(cacheKey)))) {
          md = distance2(a[i], b[j]);
          cache.set(cacheKey, md);
        }
        if (md < bestMatchDist) {
          bestMatchDist = md;
          bestMatch = { indexA: i, indexB: j, score: bestMatchDist };
        }
      }
    }
    return bestMatch;
  }
  function group(a, b, level = 0, cache = /* @__PURE__ */ new Map()) {
    const bm = findBestMatch(a, b, cache);
    if (!bm || a.length + b.length < 3) {
      return [[a, b]];
    }
    const a1 = a.slice(0, bm.indexA);
    const b1 = b.slice(0, bm.indexB);
    const aMatch = [a[bm.indexA]];
    const bMatch = [b[bm.indexB]];
    const tailA = bm.indexA + 1;
    const tailB = bm.indexB + 1;
    const a2 = a.slice(tailA);
    const b2 = b.slice(tailB);
    const group1 = group(a1, b1, level + 1, cache);
    const groupMatch = group(aMatch, bMatch, level + 1, cache);
    const group2 = group(a2, b2, level + 1, cache);
    let result = groupMatch;
    if (bm.indexA > 0 || bm.indexB > 0) {
      result = group1.concat(result);
    }
    if (a.length > tailA || b.length > tailB) {
      result = result.concat(group2);
    }
    return result;
  }
  return group;
}

// node_modules/diff2html/lib-esm/render-utils.js
var CSSLineClass = {
  INSERTS: "d2h-ins",
  DELETES: "d2h-del",
  CONTEXT: "d2h-cntx",
  INFO: "d2h-info",
  INSERT_CHANGES: "d2h-ins d2h-change",
  DELETE_CHANGES: "d2h-del d2h-change"
};
var defaultRenderConfig = {
  matching: LineMatchingType.NONE,
  matchWordsThreshold: 0.25,
  maxLineLengthHighlight: 1e4,
  diffStyle: DiffStyleType.WORD,
  colorScheme: ColorSchemeType.LIGHT
};
var separator = "/";
var distance = newDistanceFn((change) => change.value);
var matcher = newMatcherFn(distance);
function isDevNullName(name) {
  return name.indexOf("dev/null") !== -1;
}
function removeInsElements(line) {
  return line.replace(/(<ins[^>]*>((.|\n)*?)<\/ins>)/g, "");
}
function removeDelElements(line) {
  return line.replace(/(<del[^>]*>((.|\n)*?)<\/del>)/g, "");
}
function toCSSClass(lineType) {
  switch (lineType) {
    case LineType.CONTEXT:
      return CSSLineClass.CONTEXT;
    case LineType.INSERT:
      return CSSLineClass.INSERTS;
    case LineType.DELETE:
      return CSSLineClass.DELETES;
  }
}
function colorSchemeToCss(colorScheme) {
  switch (colorScheme) {
    case ColorSchemeType.DARK:
      return "d2h-dark-color-scheme";
    case ColorSchemeType.AUTO:
      return "d2h-auto-color-scheme";
    case ColorSchemeType.LIGHT:
    default:
      return "d2h-light-color-scheme";
  }
}
function prefixLength(isCombined) {
  return isCombined ? 2 : 1;
}
function escapeForHtml(str) {
  return str.slice(0).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;");
}
function deconstructLine(line, isCombined, escape2 = true) {
  const indexToSplit = prefixLength(isCombined);
  return {
    prefix: line.substring(0, indexToSplit),
    content: escape2 ? escapeForHtml(line.substring(indexToSplit)) : line.substring(indexToSplit)
  };
}
function filenameDiff(file) {
  const oldFilename = unifyPath(file.oldName);
  const newFilename = unifyPath(file.newName);
  if (oldFilename !== newFilename && !isDevNullName(oldFilename) && !isDevNullName(newFilename)) {
    const prefixPaths = [];
    const suffixPaths = [];
    const oldFilenameParts = oldFilename.split(separator);
    const newFilenameParts = newFilename.split(separator);
    const oldFilenamePartsSize = oldFilenameParts.length;
    const newFilenamePartsSize = newFilenameParts.length;
    let i = 0;
    let j = oldFilenamePartsSize - 1;
    let k = newFilenamePartsSize - 1;
    while (i < j && i < k) {
      if (oldFilenameParts[i] === newFilenameParts[i]) {
        prefixPaths.push(newFilenameParts[i]);
        i += 1;
      } else {
        break;
      }
    }
    while (j > i && k > i) {
      if (oldFilenameParts[j] === newFilenameParts[k]) {
        suffixPaths.unshift(newFilenameParts[k]);
        j -= 1;
        k -= 1;
      } else {
        break;
      }
    }
    const finalPrefix = prefixPaths.join(separator);
    const finalSuffix = suffixPaths.join(separator);
    const oldRemainingPath = oldFilenameParts.slice(i, j + 1).join(separator);
    const newRemainingPath = newFilenameParts.slice(i, k + 1).join(separator);
    if (finalPrefix.length && finalSuffix.length) {
      return finalPrefix + separator + "{" + oldRemainingPath + " \u2192 " + newRemainingPath + "}" + separator + finalSuffix;
    } else if (finalPrefix.length) {
      return finalPrefix + separator + "{" + oldRemainingPath + " \u2192 " + newRemainingPath + "}";
    } else if (finalSuffix.length) {
      return "{" + oldRemainingPath + " \u2192 " + newRemainingPath + "}" + separator + finalSuffix;
    }
    return oldFilename + " \u2192 " + newFilename;
  } else if (!isDevNullName(newFilename)) {
    return newFilename;
  } else {
    return oldFilename;
  }
}
function getHtmlId(file) {
  return `d2h-${hashCode(filenameDiff(file)).toString().slice(-6)}`;
}
function getFileIcon(file) {
  let templateName = "file-changed";
  if (file.isRename) {
    templateName = "file-renamed";
  } else if (file.isCopy) {
    templateName = "file-renamed";
  } else if (file.isNew) {
    templateName = "file-added";
  } else if (file.isDeleted) {
    templateName = "file-deleted";
  } else if (file.newName !== file.oldName) {
    templateName = "file-renamed";
  }
  return templateName;
}
function diffHighlight(diffLine1, diffLine2, isCombined, config = {}) {
  const { matching, maxLineLengthHighlight, matchWordsThreshold, diffStyle } = Object.assign(Object.assign({}, defaultRenderConfig), config);
  const line1 = deconstructLine(diffLine1, isCombined, false);
  const line2 = deconstructLine(diffLine2, isCombined, false);
  if (line1.content.length > maxLineLengthHighlight || line2.content.length > maxLineLengthHighlight) {
    return {
      oldLine: {
        prefix: line1.prefix,
        content: escapeForHtml(line1.content)
      },
      newLine: {
        prefix: line2.prefix,
        content: escapeForHtml(line2.content)
      }
    };
  }
  const diff2 = diffStyle === "char" ? diffChars(line1.content, line2.content) : diffWordsWithSpace(line1.content, line2.content);
  const changedWords = [];
  if (diffStyle === "word" && matching === "words") {
    const removed = diff2.filter((element) => element.removed);
    const added = diff2.filter((element) => element.added);
    const chunks = matcher(added, removed);
    chunks.forEach((chunk) => {
      if (chunk[0].length === 1 && chunk[1].length === 1) {
        const dist = distance(chunk[0][0], chunk[1][0]);
        if (dist < matchWordsThreshold) {
          changedWords.push(chunk[0][0]);
          changedWords.push(chunk[1][0]);
        }
      }
    });
  }
  const highlightedLine = diff2.reduce((highlightedLine2, part) => {
    const elemType = part.added ? "ins" : part.removed ? "del" : null;
    const addClass = changedWords.indexOf(part) > -1 ? ' class="d2h-change"' : "";
    const escapedValue = escapeForHtml(part.value);
    return elemType !== null ? `${highlightedLine2}<${elemType}${addClass}>${escapedValue}</${elemType}>` : `${highlightedLine2}${escapedValue}`;
  }, "");
  return {
    oldLine: {
      prefix: line1.prefix,
      content: removeInsElements(highlightedLine)
    },
    newLine: {
      prefix: line2.prefix,
      content: removeDelElements(highlightedLine)
    }
  };
}

// node_modules/diff2html/lib-esm/file-list-renderer.js
var baseTemplatesPath = "file-summary";
var iconsBaseTemplatesPath = "icon";
var defaultFileListRendererConfig = {
  colorScheme: defaultRenderConfig.colorScheme
};
var FileListRenderer = class {
  constructor(hoganUtils, config = {}) {
    this.hoganUtils = hoganUtils;
    this.config = Object.assign(Object.assign({}, defaultFileListRendererConfig), config);
  }
  render(diffFiles) {
    const files = diffFiles.map((file) => this.hoganUtils.render(baseTemplatesPath, "line", {
      fileHtmlId: getHtmlId(file),
      oldName: file.oldName,
      newName: file.newName,
      fileName: filenameDiff(file),
      deletedLines: "-" + file.deletedLines,
      addedLines: "+" + file.addedLines
    }, {
      fileIcon: this.hoganUtils.template(iconsBaseTemplatesPath, getFileIcon(file))
    })).join("\n");
    return this.hoganUtils.render(baseTemplatesPath, "wrapper", {
      colorScheme: colorSchemeToCss(this.config.colorScheme),
      filesNumber: diffFiles.length,
      files
    });
  }
};

// node_modules/diff2html/lib-esm/line-by-line-renderer.js
var defaultLineByLineRendererConfig = Object.assign(Object.assign({}, defaultRenderConfig), { renderNothingWhenEmpty: false, matchingMaxComparisons: 2500, maxLineSizeInBlockForComparison: 200 });
var genericTemplatesPath = "generic";
var baseTemplatesPath2 = "line-by-line";
var iconsBaseTemplatesPath2 = "icon";
var tagsBaseTemplatesPath = "tag";
var LineByLineRenderer = class {
  constructor(hoganUtils, config = {}) {
    this.hoganUtils = hoganUtils;
    this.config = Object.assign(Object.assign({}, defaultLineByLineRendererConfig), config);
  }
  render(diffFiles) {
    const diffsHtml = diffFiles.map((file) => {
      let diffs;
      if (file.blocks.length) {
        diffs = this.generateFileHtml(file);
      } else {
        diffs = this.generateEmptyDiff();
      }
      return this.makeFileDiffHtml(file, diffs);
    }).join("\n");
    return this.hoganUtils.render(genericTemplatesPath, "wrapper", {
      colorScheme: colorSchemeToCss(this.config.colorScheme),
      content: diffsHtml
    });
  }
  makeFileDiffHtml(file, diffs) {
    if (this.config.renderNothingWhenEmpty && Array.isArray(file.blocks) && file.blocks.length === 0)
      return "";
    const fileDiffTemplate = this.hoganUtils.template(baseTemplatesPath2, "file-diff");
    const filePathTemplate = this.hoganUtils.template(genericTemplatesPath, "file-path");
    const fileIconTemplate = this.hoganUtils.template(iconsBaseTemplatesPath2, "file");
    const fileTagTemplate = this.hoganUtils.template(tagsBaseTemplatesPath, getFileIcon(file));
    return fileDiffTemplate.render({
      file,
      fileHtmlId: getHtmlId(file),
      diffs,
      filePath: filePathTemplate.render({
        fileDiffName: filenameDiff(file)
      }, {
        fileIcon: fileIconTemplate,
        fileTag: fileTagTemplate
      })
    });
  }
  generateEmptyDiff() {
    return this.hoganUtils.render(genericTemplatesPath, "empty-diff", {
      contentClass: "d2h-code-line",
      CSSLineClass
    });
  }
  generateFileHtml(file) {
    const matcher2 = newMatcherFn(newDistanceFn((e) => deconstructLine(e.content, file.isCombined).content));
    return file.blocks.map((block) => {
      let lines = this.hoganUtils.render(genericTemplatesPath, "block-header", {
        CSSLineClass,
        blockHeader: file.isTooBig ? block.header : escapeForHtml(block.header),
        lineClass: "d2h-code-linenumber",
        contentClass: "d2h-code-line"
      });
      this.applyLineGroupping(block).forEach(([contextLines, oldLines, newLines]) => {
        if (oldLines.length && newLines.length && !contextLines.length) {
          this.applyRematchMatching(oldLines, newLines, matcher2).map(([oldLines2, newLines2]) => {
            const { left, right } = this.processChangedLines(file, file.isCombined, oldLines2, newLines2);
            lines += left;
            lines += right;
          });
        } else if (contextLines.length) {
          contextLines.forEach((line) => {
            const { prefix, content } = deconstructLine(line.content, file.isCombined);
            lines += this.generateSingleLineHtml(file, {
              type: CSSLineClass.CONTEXT,
              prefix,
              content,
              oldNumber: line.oldNumber,
              newNumber: line.newNumber
            });
          });
        } else if (oldLines.length || newLines.length) {
          const { left, right } = this.processChangedLines(file, file.isCombined, oldLines, newLines);
          lines += left;
          lines += right;
        } else {
          console.error("Unknown state reached while processing groups of lines", contextLines, oldLines, newLines);
        }
      });
      return lines;
    }).join("\n");
  }
  applyLineGroupping(block) {
    const blockLinesGroups = [];
    let oldLines = [];
    let newLines = [];
    for (let i = 0; i < block.lines.length; i++) {
      const diffLine = block.lines[i];
      if (diffLine.type !== LineType.INSERT && newLines.length || diffLine.type === LineType.CONTEXT && oldLines.length > 0) {
        blockLinesGroups.push([[], oldLines, newLines]);
        oldLines = [];
        newLines = [];
      }
      if (diffLine.type === LineType.CONTEXT) {
        blockLinesGroups.push([[diffLine], [], []]);
      } else if (diffLine.type === LineType.INSERT && oldLines.length === 0) {
        blockLinesGroups.push([[], [], [diffLine]]);
      } else if (diffLine.type === LineType.INSERT && oldLines.length > 0) {
        newLines.push(diffLine);
      } else if (diffLine.type === LineType.DELETE) {
        oldLines.push(diffLine);
      }
    }
    if (oldLines.length || newLines.length) {
      blockLinesGroups.push([[], oldLines, newLines]);
      oldLines = [];
      newLines = [];
    }
    return blockLinesGroups;
  }
  applyRematchMatching(oldLines, newLines, matcher2) {
    const comparisons = oldLines.length * newLines.length;
    const maxLineSizeInBlock = max(oldLines.concat(newLines).map((elem) => elem.content.length));
    const doMatching = comparisons < this.config.matchingMaxComparisons && maxLineSizeInBlock < this.config.maxLineSizeInBlockForComparison && (this.config.matching === "lines" || this.config.matching === "words");
    return doMatching ? matcher2(oldLines, newLines) : [[oldLines, newLines]];
  }
  processChangedLines(file, isCombined, oldLines, newLines) {
    const fileHtml = {
      right: "",
      left: ""
    };
    const maxLinesNumber = Math.max(oldLines.length, newLines.length);
    for (let i = 0; i < maxLinesNumber; i++) {
      const oldLine = oldLines[i];
      const newLine = newLines[i];
      const diff2 = oldLine !== void 0 && newLine !== void 0 ? diffHighlight(oldLine.content, newLine.content, isCombined, this.config) : void 0;
      const preparedOldLine = oldLine !== void 0 && oldLine.oldNumber !== void 0 ? Object.assign(Object.assign({}, diff2 !== void 0 ? {
        prefix: diff2.oldLine.prefix,
        content: diff2.oldLine.content,
        type: CSSLineClass.DELETE_CHANGES
      } : Object.assign(Object.assign({}, deconstructLine(oldLine.content, isCombined)), { type: toCSSClass(oldLine.type) })), { oldNumber: oldLine.oldNumber, newNumber: oldLine.newNumber }) : void 0;
      const preparedNewLine = newLine !== void 0 && newLine.newNumber !== void 0 ? Object.assign(Object.assign({}, diff2 !== void 0 ? {
        prefix: diff2.newLine.prefix,
        content: diff2.newLine.content,
        type: CSSLineClass.INSERT_CHANGES
      } : Object.assign(Object.assign({}, deconstructLine(newLine.content, isCombined)), { type: toCSSClass(newLine.type) })), { oldNumber: newLine.oldNumber, newNumber: newLine.newNumber }) : void 0;
      const { left, right } = this.generateLineHtml(file, preparedOldLine, preparedNewLine);
      fileHtml.left += left;
      fileHtml.right += right;
    }
    return fileHtml;
  }
  generateLineHtml(file, oldLine, newLine) {
    return {
      left: this.generateSingleLineHtml(file, oldLine),
      right: this.generateSingleLineHtml(file, newLine)
    };
  }
  generateSingleLineHtml(file, line) {
    if (line === void 0)
      return "";
    const lineNumberHtml = this.hoganUtils.render(baseTemplatesPath2, "numbers", {
      oldNumber: line.oldNumber || "",
      newNumber: line.newNumber || ""
    });
    return this.hoganUtils.render(genericTemplatesPath, "line", {
      type: line.type,
      lineClass: "d2h-code-linenumber",
      contentClass: "d2h-code-line",
      prefix: line.prefix === " " ? "&nbsp;" : line.prefix,
      content: line.content,
      lineNumber: lineNumberHtml,
      line,
      file
    });
  }
};

// node_modules/diff2html/lib-esm/side-by-side-renderer.js
var defaultSideBySideRendererConfig = Object.assign(Object.assign({}, defaultRenderConfig), { renderNothingWhenEmpty: false, matchingMaxComparisons: 2500, maxLineSizeInBlockForComparison: 200 });
var genericTemplatesPath2 = "generic";
var baseTemplatesPath3 = "side-by-side";
var iconsBaseTemplatesPath3 = "icon";
var tagsBaseTemplatesPath2 = "tag";
var SideBySideRenderer = class {
  constructor(hoganUtils, config = {}) {
    this.hoganUtils = hoganUtils;
    this.config = Object.assign(Object.assign({}, defaultSideBySideRendererConfig), config);
  }
  render(diffFiles) {
    const diffsHtml = diffFiles.map((file) => {
      let diffs;
      if (file.blocks.length) {
        diffs = this.generateFileHtml(file);
      } else {
        diffs = this.generateEmptyDiff();
      }
      return this.makeFileDiffHtml(file, diffs);
    }).join("\n");
    return this.hoganUtils.render(genericTemplatesPath2, "wrapper", {
      colorScheme: colorSchemeToCss(this.config.colorScheme),
      content: diffsHtml
    });
  }
  makeFileDiffHtml(file, diffs) {
    if (this.config.renderNothingWhenEmpty && Array.isArray(file.blocks) && file.blocks.length === 0)
      return "";
    const fileDiffTemplate = this.hoganUtils.template(baseTemplatesPath3, "file-diff");
    const filePathTemplate = this.hoganUtils.template(genericTemplatesPath2, "file-path");
    const fileIconTemplate = this.hoganUtils.template(iconsBaseTemplatesPath3, "file");
    const fileTagTemplate = this.hoganUtils.template(tagsBaseTemplatesPath2, getFileIcon(file));
    return fileDiffTemplate.render({
      file,
      fileHtmlId: getHtmlId(file),
      diffs,
      filePath: filePathTemplate.render({
        fileDiffName: filenameDiff(file)
      }, {
        fileIcon: fileIconTemplate,
        fileTag: fileTagTemplate
      })
    });
  }
  generateEmptyDiff() {
    return {
      right: "",
      left: this.hoganUtils.render(genericTemplatesPath2, "empty-diff", {
        contentClass: "d2h-code-side-line",
        CSSLineClass
      })
    };
  }
  generateFileHtml(file) {
    const matcher2 = newMatcherFn(newDistanceFn((e) => deconstructLine(e.content, file.isCombined).content));
    return file.blocks.map((block) => {
      const fileHtml = {
        left: this.makeHeaderHtml(block.header, file),
        right: this.makeHeaderHtml("")
      };
      this.applyLineGroupping(block).forEach(([contextLines, oldLines, newLines]) => {
        if (oldLines.length && newLines.length && !contextLines.length) {
          this.applyRematchMatching(oldLines, newLines, matcher2).map(([oldLines2, newLines2]) => {
            const { left, right } = this.processChangedLines(file.isCombined, oldLines2, newLines2);
            fileHtml.left += left;
            fileHtml.right += right;
          });
        } else if (contextLines.length) {
          contextLines.forEach((line) => {
            const { prefix, content } = deconstructLine(line.content, file.isCombined);
            const { left, right } = this.generateLineHtml({
              type: CSSLineClass.CONTEXT,
              prefix,
              content,
              number: line.oldNumber
            }, {
              type: CSSLineClass.CONTEXT,
              prefix,
              content,
              number: line.newNumber
            });
            fileHtml.left += left;
            fileHtml.right += right;
          });
        } else if (oldLines.length || newLines.length) {
          const { left, right } = this.processChangedLines(file.isCombined, oldLines, newLines);
          fileHtml.left += left;
          fileHtml.right += right;
        } else {
          console.error("Unknown state reached while processing groups of lines", contextLines, oldLines, newLines);
        }
      });
      return fileHtml;
    }).reduce((accomulated, html2) => {
      return { left: accomulated.left + html2.left, right: accomulated.right + html2.right };
    }, { left: "", right: "" });
  }
  applyLineGroupping(block) {
    const blockLinesGroups = [];
    let oldLines = [];
    let newLines = [];
    for (let i = 0; i < block.lines.length; i++) {
      const diffLine = block.lines[i];
      if (diffLine.type !== LineType.INSERT && newLines.length || diffLine.type === LineType.CONTEXT && oldLines.length > 0) {
        blockLinesGroups.push([[], oldLines, newLines]);
        oldLines = [];
        newLines = [];
      }
      if (diffLine.type === LineType.CONTEXT) {
        blockLinesGroups.push([[diffLine], [], []]);
      } else if (diffLine.type === LineType.INSERT && oldLines.length === 0) {
        blockLinesGroups.push([[], [], [diffLine]]);
      } else if (diffLine.type === LineType.INSERT && oldLines.length > 0) {
        newLines.push(diffLine);
      } else if (diffLine.type === LineType.DELETE) {
        oldLines.push(diffLine);
      }
    }
    if (oldLines.length || newLines.length) {
      blockLinesGroups.push([[], oldLines, newLines]);
      oldLines = [];
      newLines = [];
    }
    return blockLinesGroups;
  }
  applyRematchMatching(oldLines, newLines, matcher2) {
    const comparisons = oldLines.length * newLines.length;
    const maxLineSizeInBlock = max(oldLines.concat(newLines).map((elem) => elem.content.length));
    const doMatching = comparisons < this.config.matchingMaxComparisons && maxLineSizeInBlock < this.config.maxLineSizeInBlockForComparison && (this.config.matching === "lines" || this.config.matching === "words");
    return doMatching ? matcher2(oldLines, newLines) : [[oldLines, newLines]];
  }
  makeHeaderHtml(blockHeader, file) {
    return this.hoganUtils.render(genericTemplatesPath2, "block-header", {
      CSSLineClass,
      blockHeader: (file === null || file === void 0 ? void 0 : file.isTooBig) ? blockHeader : escapeForHtml(blockHeader),
      lineClass: "d2h-code-side-linenumber",
      contentClass: "d2h-code-side-line"
    });
  }
  processChangedLines(isCombined, oldLines, newLines) {
    const fileHtml = {
      right: "",
      left: ""
    };
    const maxLinesNumber = Math.max(oldLines.length, newLines.length);
    for (let i = 0; i < maxLinesNumber; i++) {
      const oldLine = oldLines[i];
      const newLine = newLines[i];
      const diff2 = oldLine !== void 0 && newLine !== void 0 ? diffHighlight(oldLine.content, newLine.content, isCombined, this.config) : void 0;
      const preparedOldLine = oldLine !== void 0 && oldLine.oldNumber !== void 0 ? Object.assign(Object.assign({}, diff2 !== void 0 ? {
        prefix: diff2.oldLine.prefix,
        content: diff2.oldLine.content,
        type: CSSLineClass.DELETE_CHANGES
      } : Object.assign(Object.assign({}, deconstructLine(oldLine.content, isCombined)), { type: toCSSClass(oldLine.type) })), { number: oldLine.oldNumber }) : void 0;
      const preparedNewLine = newLine !== void 0 && newLine.newNumber !== void 0 ? Object.assign(Object.assign({}, diff2 !== void 0 ? {
        prefix: diff2.newLine.prefix,
        content: diff2.newLine.content,
        type: CSSLineClass.INSERT_CHANGES
      } : Object.assign(Object.assign({}, deconstructLine(newLine.content, isCombined)), { type: toCSSClass(newLine.type) })), { number: newLine.newNumber }) : void 0;
      const { left, right } = this.generateLineHtml(preparedOldLine, preparedNewLine);
      fileHtml.left += left;
      fileHtml.right += right;
    }
    return fileHtml;
  }
  generateLineHtml(oldLine, newLine) {
    return {
      left: this.generateSingleHtml(oldLine),
      right: this.generateSingleHtml(newLine)
    };
  }
  generateSingleHtml(line) {
    const lineClass = "d2h-code-side-linenumber";
    const contentClass = "d2h-code-side-line";
    return this.hoganUtils.render(genericTemplatesPath2, "line", {
      type: (line === null || line === void 0 ? void 0 : line.type) || `${CSSLineClass.CONTEXT} d2h-emptyplaceholder`,
      lineClass: line !== void 0 ? lineClass : `${lineClass} d2h-code-side-emptyplaceholder`,
      contentClass: line !== void 0 ? contentClass : `${contentClass} d2h-code-side-emptyplaceholder`,
      prefix: (line === null || line === void 0 ? void 0 : line.prefix) === " " ? "&nbsp;" : line === null || line === void 0 ? void 0 : line.prefix,
      content: line === null || line === void 0 ? void 0 : line.content,
      lineNumber: line === null || line === void 0 ? void 0 : line.number
    });
  }
};

// node_modules/diff2html/lib-esm/hoganjs-utils.js
var Hogan2 = __toESM(require_hogan());

// node_modules/diff2html/lib-esm/diff2html-templates.js
var Hogan = __toESM(require_hogan());
var defaultTemplates = {};
defaultTemplates["file-summary-line"] = new Hogan.Template({ code: function(c2, p, i) {
  var t = this;
  t.b(i = i || "");
  t.b('<li class="d2h-file-list-line">');
  t.b("\n" + i);
  t.b('    <span class="d2h-file-name-wrapper">');
  t.b("\n" + i);
  t.b(t.rp("<fileIcon0", c2, p, "      "));
  t.b('      <a href="#');
  t.b(t.v(t.f("fileHtmlId", c2, p, 0)));
  t.b('" class="d2h-file-name">');
  t.b(t.v(t.f("fileName", c2, p, 0)));
  t.b("</a>");
  t.b("\n" + i);
  t.b('      <span class="d2h-file-stats">');
  t.b("\n" + i);
  t.b('          <span class="d2h-lines-added">');
  t.b(t.v(t.f("addedLines", c2, p, 0)));
  t.b("</span>");
  t.b("\n" + i);
  t.b('          <span class="d2h-lines-deleted">');
  t.b(t.v(t.f("deletedLines", c2, p, 0)));
  t.b("</span>");
  t.b("\n" + i);
  t.b("      </span>");
  t.b("\n" + i);
  t.b("    </span>");
  t.b("\n" + i);
  t.b("</li>");
  return t.fl();
}, partials: { "<fileIcon0": { name: "fileIcon", partials: {}, subs: {} } }, subs: {} });
defaultTemplates["file-summary-wrapper"] = new Hogan.Template({ code: function(c2, p, i) {
  var t = this;
  t.b(i = i || "");
  t.b('<div class="d2h-file-list-wrapper ');
  t.b(t.v(t.f("colorScheme", c2, p, 0)));
  t.b('">');
  t.b("\n" + i);
  t.b('    <div class="d2h-file-list-header">');
  t.b("\n" + i);
  t.b('        <span class="d2h-file-list-title">Files changed (');
  t.b(t.v(t.f("filesNumber", c2, p, 0)));
  t.b(")</span>");
  t.b("\n" + i);
  t.b('        <a class="d2h-file-switch d2h-hide">hide</a>');
  t.b("\n" + i);
  t.b('        <a class="d2h-file-switch d2h-show">show</a>');
  t.b("\n" + i);
  t.b("    </div>");
  t.b("\n" + i);
  t.b('    <ol class="d2h-file-list">');
  t.b("\n" + i);
  t.b("    ");
  t.b(t.t(t.f("files", c2, p, 0)));
  t.b("\n" + i);
  t.b("    </ol>");
  t.b("\n" + i);
  t.b("</div>");
  return t.fl();
}, partials: {}, subs: {} });
defaultTemplates["generic-block-header"] = new Hogan.Template({ code: function(c2, p, i) {
  var t = this;
  t.b(i = i || "");
  t.b("<tr>");
  t.b("\n" + i);
  t.b('    <td class="');
  t.b(t.v(t.f("lineClass", c2, p, 0)));
  t.b(" ");
  t.b(t.v(t.d("CSSLineClass.INFO", c2, p, 0)));
  t.b('"></td>');
  t.b("\n" + i);
  t.b('    <td class="');
  t.b(t.v(t.d("CSSLineClass.INFO", c2, p, 0)));
  t.b('">');
  t.b("\n" + i);
  t.b('        <div class="');
  t.b(t.v(t.f("contentClass", c2, p, 0)));
  t.b('">');
  if (t.s(t.f("blockHeader", c2, p, 1), c2, p, 0, 156, 173, "{{ }}")) {
    t.rs(c2, p, function(c3, p2, t2) {
      t2.b(t2.t(t2.f("blockHeader", c3, p2, 0)));
    });
    c2.pop();
  }
  if (!t.s(t.f("blockHeader", c2, p, 1), c2, p, 1, 0, 0, "")) {
    t.b("&nbsp;");
  }
  ;
  t.b("</div>");
  t.b("\n" + i);
  t.b("    </td>");
  t.b("\n" + i);
  t.b("</tr>");
  return t.fl();
}, partials: {}, subs: {} });
defaultTemplates["generic-empty-diff"] = new Hogan.Template({ code: function(c2, p, i) {
  var t = this;
  t.b(i = i || "");
  t.b("<tr>");
  t.b("\n" + i);
  t.b('    <td class="');
  t.b(t.v(t.d("CSSLineClass.INFO", c2, p, 0)));
  t.b('">');
  t.b("\n" + i);
  t.b('        <div class="');
  t.b(t.v(t.f("contentClass", c2, p, 0)));
  t.b('">');
  t.b("\n" + i);
  t.b("            File without changes");
  t.b("\n" + i);
  t.b("        </div>");
  t.b("\n" + i);
  t.b("    </td>");
  t.b("\n" + i);
  t.b("</tr>");
  return t.fl();
}, partials: {}, subs: {} });
defaultTemplates["generic-file-path"] = new Hogan.Template({ code: function(c2, p, i) {
  var t = this;
  t.b(i = i || "");
  t.b('<span class="d2h-file-name-wrapper">');
  t.b("\n" + i);
  t.b(t.rp("<fileIcon0", c2, p, "    "));
  t.b('    <span class="d2h-file-name">');
  t.b(t.v(t.f("fileDiffName", c2, p, 0)));
  t.b("</span>");
  t.b("\n" + i);
  t.b(t.rp("<fileTag1", c2, p, "    "));
  t.b("</span>");
  t.b("\n" + i);
  t.b('<label class="d2h-file-collapse">');
  t.b("\n" + i);
  t.b('    <input class="d2h-file-collapse-input" type="checkbox" name="viewed" value="viewed">');
  t.b("\n" + i);
  t.b("    Viewed");
  t.b("\n" + i);
  t.b("</label>");
  return t.fl();
}, partials: { "<fileIcon0": { name: "fileIcon", partials: {}, subs: {} }, "<fileTag1": { name: "fileTag", partials: {}, subs: {} } }, subs: {} });
defaultTemplates["generic-line"] = new Hogan.Template({ code: function(c2, p, i) {
  var t = this;
  t.b(i = i || "");
  t.b("<tr>");
  t.b("\n" + i);
  t.b('    <td class="');
  t.b(t.v(t.f("lineClass", c2, p, 0)));
  t.b(" ");
  t.b(t.v(t.f("type", c2, p, 0)));
  t.b('">');
  t.b("\n" + i);
  t.b("      ");
  t.b(t.t(t.f("lineNumber", c2, p, 0)));
  t.b("\n" + i);
  t.b("    </td>");
  t.b("\n" + i);
  t.b('    <td class="');
  t.b(t.v(t.f("type", c2, p, 0)));
  t.b('">');
  t.b("\n" + i);
  t.b('        <div class="');
  t.b(t.v(t.f("contentClass", c2, p, 0)));
  t.b('">');
  t.b("\n" + i);
  if (t.s(t.f("prefix", c2, p, 1), c2, p, 0, 162, 238, "{{ }}")) {
    t.rs(c2, p, function(c3, p2, t2) {
      t2.b('            <span class="d2h-code-line-prefix">');
      t2.b(t2.t(t2.f("prefix", c3, p2, 0)));
      t2.b("</span>");
      t2.b("\n" + i);
    });
    c2.pop();
  }
  if (!t.s(t.f("prefix", c2, p, 1), c2, p, 1, 0, 0, "")) {
    t.b('            <span class="d2h-code-line-prefix">&nbsp;</span>');
    t.b("\n" + i);
  }
  ;
  if (t.s(t.f("content", c2, p, 1), c2, p, 0, 371, 445, "{{ }}")) {
    t.rs(c2, p, function(c3, p2, t2) {
      t2.b('            <span class="d2h-code-line-ctn">');
      t2.b(t2.t(t2.f("content", c3, p2, 0)));
      t2.b("</span>");
      t2.b("\n" + i);
    });
    c2.pop();
  }
  if (!t.s(t.f("content", c2, p, 1), c2, p, 1, 0, 0, "")) {
    t.b('            <span class="d2h-code-line-ctn"><br></span>');
    t.b("\n" + i);
  }
  ;
  t.b("        </div>");
  t.b("\n" + i);
  t.b("    </td>");
  t.b("\n" + i);
  t.b("</tr>");
  return t.fl();
}, partials: {}, subs: {} });
defaultTemplates["generic-wrapper"] = new Hogan.Template({ code: function(c2, p, i) {
  var t = this;
  t.b(i = i || "");
  t.b('<div class="d2h-wrapper ');
  t.b(t.v(t.f("colorScheme", c2, p, 0)));
  t.b('">');
  t.b("\n" + i);
  t.b("    ");
  t.b(t.t(t.f("content", c2, p, 0)));
  t.b("\n" + i);
  t.b("</div>");
  return t.fl();
}, partials: {}, subs: {} });
defaultTemplates["icon-file-added"] = new Hogan.Template({ code: function(c2, p, i) {
  var t = this;
  t.b(i = i || "");
  t.b('<svg aria-hidden="true" class="d2h-icon d2h-added" height="16" title="added" version="1.1" viewBox="0 0 14 16"');
  t.b("\n" + i);
  t.b('     width="14">');
  t.b("\n" + i);
  t.b('    <path d="M13 1H1C0.45 1 0 1.45 0 2v12c0 0.55 0.45 1 1 1h12c0.55 0 1-0.45 1-1V2c0-0.55-0.45-1-1-1z m0 13H1V2h12v12zM6 9H3V7h3V4h2v3h3v2H8v3H6V9z"></path>');
  t.b("\n" + i);
  t.b("</svg>");
  return t.fl();
}, partials: {}, subs: {} });
defaultTemplates["icon-file-changed"] = new Hogan.Template({ code: function(c2, p, i) {
  var t = this;
  t.b(i = i || "");
  t.b('<svg aria-hidden="true" class="d2h-icon d2h-changed" height="16" title="modified" version="1.1"');
  t.b("\n" + i);
  t.b('     viewBox="0 0 14 16" width="14">');
  t.b("\n" + i);
  t.b('    <path d="M13 1H1C0.45 1 0 1.45 0 2v12c0 0.55 0.45 1 1 1h12c0.55 0 1-0.45 1-1V2c0-0.55-0.45-1-1-1z m0 13H1V2h12v12zM4 8c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3-3-1.34-3-3z"></path>');
  t.b("\n" + i);
  t.b("</svg>");
  return t.fl();
}, partials: {}, subs: {} });
defaultTemplates["icon-file-deleted"] = new Hogan.Template({ code: function(c2, p, i) {
  var t = this;
  t.b(i = i || "");
  t.b('<svg aria-hidden="true" class="d2h-icon d2h-deleted" height="16" title="removed" version="1.1"');
  t.b("\n" + i);
  t.b('     viewBox="0 0 14 16" width="14">');
  t.b("\n" + i);
  t.b('    <path d="M13 1H1C0.45 1 0 1.45 0 2v12c0 0.55 0.45 1 1 1h12c0.55 0 1-0.45 1-1V2c0-0.55-0.45-1-1-1z m0 13H1V2h12v12zM11 9H3V7h8v2z"></path>');
  t.b("\n" + i);
  t.b("</svg>");
  return t.fl();
}, partials: {}, subs: {} });
defaultTemplates["icon-file-renamed"] = new Hogan.Template({ code: function(c2, p, i) {
  var t = this;
  t.b(i = i || "");
  t.b('<svg aria-hidden="true" class="d2h-icon d2h-moved" height="16" title="renamed" version="1.1"');
  t.b("\n" + i);
  t.b('     viewBox="0 0 14 16" width="14">');
  t.b("\n" + i);
  t.b('    <path d="M6 9H3V7h3V4l5 4-5 4V9z m8-7v12c0 0.55-0.45 1-1 1H1c-0.55 0-1-0.45-1-1V2c0-0.55 0.45-1 1-1h12c0.55 0 1 0.45 1 1z m-1 0H1v12h12V2z"></path>');
  t.b("\n" + i);
  t.b("</svg>");
  return t.fl();
}, partials: {}, subs: {} });
defaultTemplates["icon-file"] = new Hogan.Template({ code: function(c2, p, i) {
  var t = this;
  t.b(i = i || "");
  t.b('<svg aria-hidden="true" class="d2h-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12">');
  t.b("\n" + i);
  t.b('    <path d="M6 5H2v-1h4v1zM2 8h7v-1H2v1z m0 2h7v-1H2v1z m0 2h7v-1H2v1z m10-7.5v9.5c0 0.55-0.45 1-1 1H1c-0.55 0-1-0.45-1-1V2c0-0.55 0.45-1 1-1h7.5l3.5 3.5z m-1 0.5L8 2H1v12h10V5z"></path>');
  t.b("\n" + i);
  t.b("</svg>");
  return t.fl();
}, partials: {}, subs: {} });
defaultTemplates["line-by-line-file-diff"] = new Hogan.Template({ code: function(c2, p, i) {
  var t = this;
  t.b(i = i || "");
  t.b('<div id="');
  t.b(t.v(t.f("fileHtmlId", c2, p, 0)));
  t.b('" class="d2h-file-wrapper" data-lang="');
  t.b(t.v(t.d("file.language", c2, p, 0)));
  t.b('">');
  t.b("\n" + i);
  t.b('    <div class="d2h-file-header">');
  t.b("\n" + i);
  t.b("    ");
  t.b(t.t(t.f("filePath", c2, p, 0)));
  t.b("\n" + i);
  t.b("    </div>");
  t.b("\n" + i);
  t.b('    <div class="d2h-file-diff">');
  t.b("\n" + i);
  t.b('        <div class="d2h-code-wrapper">');
  t.b("\n" + i);
  t.b('            <table class="d2h-diff-table">');
  t.b("\n" + i);
  t.b('                <tbody class="d2h-diff-tbody">');
  t.b("\n" + i);
  t.b("                ");
  t.b(t.t(t.f("diffs", c2, p, 0)));
  t.b("\n" + i);
  t.b("                </tbody>");
  t.b("\n" + i);
  t.b("            </table>");
  t.b("\n" + i);
  t.b("        </div>");
  t.b("\n" + i);
  t.b("    </div>");
  t.b("\n" + i);
  t.b("</div>");
  return t.fl();
}, partials: {}, subs: {} });
defaultTemplates["line-by-line-numbers"] = new Hogan.Template({ code: function(c2, p, i) {
  var t = this;
  t.b(i = i || "");
  t.b('<div class="line-num1">');
  t.b(t.v(t.f("oldNumber", c2, p, 0)));
  t.b("</div>");
  t.b("\n" + i);
  t.b('<div class="line-num2">');
  t.b(t.v(t.f("newNumber", c2, p, 0)));
  t.b("</div>");
  return t.fl();
}, partials: {}, subs: {} });
defaultTemplates["side-by-side-file-diff"] = new Hogan.Template({ code: function(c2, p, i) {
  var t = this;
  t.b(i = i || "");
  t.b('<div id="');
  t.b(t.v(t.f("fileHtmlId", c2, p, 0)));
  t.b('" class="d2h-file-wrapper" data-lang="');
  t.b(t.v(t.d("file.language", c2, p, 0)));
  t.b('">');
  t.b("\n" + i);
  t.b('    <div class="d2h-file-header">');
  t.b("\n" + i);
  t.b("      ");
  t.b(t.t(t.f("filePath", c2, p, 0)));
  t.b("\n" + i);
  t.b("    </div>");
  t.b("\n" + i);
  t.b('    <div class="d2h-files-diff">');
  t.b("\n" + i);
  t.b('        <div class="d2h-file-side-diff">');
  t.b("\n" + i);
  t.b('            <div class="d2h-code-wrapper">');
  t.b("\n" + i);
  t.b('                <table class="d2h-diff-table">');
  t.b("\n" + i);
  t.b('                    <tbody class="d2h-diff-tbody">');
  t.b("\n" + i);
  t.b("                    ");
  t.b(t.t(t.d("diffs.left", c2, p, 0)));
  t.b("\n" + i);
  t.b("                    </tbody>");
  t.b("\n" + i);
  t.b("                </table>");
  t.b("\n" + i);
  t.b("            </div>");
  t.b("\n" + i);
  t.b("        </div>");
  t.b("\n" + i);
  t.b('        <div class="d2h-file-side-diff">');
  t.b("\n" + i);
  t.b('            <div class="d2h-code-wrapper">');
  t.b("\n" + i);
  t.b('                <table class="d2h-diff-table">');
  t.b("\n" + i);
  t.b('                    <tbody class="d2h-diff-tbody">');
  t.b("\n" + i);
  t.b("                    ");
  t.b(t.t(t.d("diffs.right", c2, p, 0)));
  t.b("\n" + i);
  t.b("                    </tbody>");
  t.b("\n" + i);
  t.b("                </table>");
  t.b("\n" + i);
  t.b("            </div>");
  t.b("\n" + i);
  t.b("        </div>");
  t.b("\n" + i);
  t.b("    </div>");
  t.b("\n" + i);
  t.b("</div>");
  return t.fl();
}, partials: {}, subs: {} });
defaultTemplates["tag-file-added"] = new Hogan.Template({ code: function(c2, p, i) {
  var t = this;
  t.b(i = i || "");
  t.b('<span class="d2h-tag d2h-added d2h-added-tag">ADDED</span>');
  return t.fl();
}, partials: {}, subs: {} });
defaultTemplates["tag-file-changed"] = new Hogan.Template({ code: function(c2, p, i) {
  var t = this;
  t.b(i = i || "");
  t.b('<span class="d2h-tag d2h-changed d2h-changed-tag">CHANGED</span>');
  return t.fl();
}, partials: {}, subs: {} });
defaultTemplates["tag-file-deleted"] = new Hogan.Template({ code: function(c2, p, i) {
  var t = this;
  t.b(i = i || "");
  t.b('<span class="d2h-tag d2h-deleted d2h-deleted-tag">DELETED</span>');
  return t.fl();
}, partials: {}, subs: {} });
defaultTemplates["tag-file-renamed"] = new Hogan.Template({ code: function(c2, p, i) {
  var t = this;
  t.b(i = i || "");
  t.b('<span class="d2h-tag d2h-moved d2h-moved-tag">RENAMED</span>');
  return t.fl();
}, partials: {}, subs: {} });

// node_modules/diff2html/lib-esm/hoganjs-utils.js
var HoganJsUtils = class {
  constructor({ compiledTemplates = {}, rawTemplates = {} }) {
    const compiledRawTemplates = Object.entries(rawTemplates).reduce((previousTemplates, [name, templateString]) => {
      const compiledTemplate = Hogan2.compile(templateString, { asString: false });
      return Object.assign(Object.assign({}, previousTemplates), { [name]: compiledTemplate });
    }, {});
    this.preCompiledTemplates = Object.assign(Object.assign(Object.assign({}, defaultTemplates), compiledTemplates), compiledRawTemplates);
  }
  static compile(templateString) {
    return Hogan2.compile(templateString, { asString: false });
  }
  render(namespace, view, params, partials, indent) {
    const templateKey = this.templateKey(namespace, view);
    try {
      const template = this.preCompiledTemplates[templateKey];
      return template.render(params, partials, indent);
    } catch (_e) {
      throw new Error(`Could not find template to render '${templateKey}'`);
    }
  }
  template(namespace, view) {
    return this.preCompiledTemplates[this.templateKey(namespace, view)];
  }
  templateKey(namespace, view) {
    return `${namespace}-${view}`;
  }
};

// node_modules/diff2html/lib-esm/diff2html.js
var defaultDiff2HtmlConfig = Object.assign(Object.assign(Object.assign({}, defaultLineByLineRendererConfig), defaultSideBySideRendererConfig), { outputFormat: OutputFormatType.LINE_BY_LINE, drawFileList: true });
function html(diffInput, configuration = {}) {
  const config = Object.assign(Object.assign({}, defaultDiff2HtmlConfig), configuration);
  const diffJson = typeof diffInput === "string" ? parse(diffInput, config) : diffInput;
  const hoganUtils = new HoganJsUtils(config);
  const { colorScheme } = config;
  const fileListRendererConfig = { colorScheme };
  const fileList = config.drawFileList ? new FileListRenderer(hoganUtils, fileListRendererConfig).render(diffJson) : "";
  const diffOutput = config.outputFormat === "side-by-side" ? new SideBySideRenderer(hoganUtils, config).render(diffJson) : new LineByLineRenderer(hoganUtils, config).render(diffJson);
  return fileList + diffOutput;
}

// node_modules/diff2html/lib-esm/ui/js/diff2html-ui-base.js
var defaultDiff2HtmlUIConfig = Object.assign(Object.assign({}, defaultDiff2HtmlConfig), { synchronisedScroll: true, highlight: true, fileListToggle: true, fileListStartVisible: false, highlightLanguages: /* @__PURE__ */ new Map(), smartSelection: true, fileContentToggle: true, stickyFileHeaders: true });
var Diff2HtmlUI = class {
  constructor(target, diffInput, config = {}, hljs2) {
    this.hljs = null;
    this.currentSelectionColumnId = -1;
    this.config = Object.assign(Object.assign({}, defaultDiff2HtmlUIConfig), config);
    this.diffHtml = diffInput !== void 0 ? html(diffInput, this.config) : target.innerHTML;
    this.targetElement = target;
    if (hljs2 !== void 0)
      this.hljs = hljs2;
  }
  draw() {
    this.targetElement.innerHTML = this.diffHtml;
    if (this.config.synchronisedScroll)
      this.synchronisedScroll();
    if (this.config.highlight)
      this.highlightCode();
    if (this.config.fileListToggle)
      this.fileListToggle(this.config.fileListStartVisible);
    if (this.config.fileContentToggle)
      this.fileContentToggle();
    if (this.config.stickyFileHeaders)
      this.stickyFileHeaders();
  }
  synchronisedScroll() {
    this.targetElement.querySelectorAll(".d2h-file-wrapper").forEach((wrapper) => {
      const [left, right] = Array().slice.call(wrapper.querySelectorAll(".d2h-file-side-diff"));
      if (left === void 0 || right === void 0)
        return;
      const onScroll = (event) => {
        if (event === null || event.target === null)
          return;
        if (event.target === left) {
          right.scrollTop = left.scrollTop;
          right.scrollLeft = left.scrollLeft;
        } else {
          left.scrollTop = right.scrollTop;
          left.scrollLeft = right.scrollLeft;
        }
      };
      left.addEventListener("scroll", onScroll);
      right.addEventListener("scroll", onScroll);
    });
  }
  fileListToggle(startVisible) {
    const showBtn = this.targetElement.querySelector(".d2h-show");
    const hideBtn = this.targetElement.querySelector(".d2h-hide");
    const fileList = this.targetElement.querySelector(".d2h-file-list");
    if (showBtn === null || hideBtn === null || fileList === null)
      return;
    const show = () => {
      showBtn.style.display = "none";
      hideBtn.style.display = "inline";
      fileList.style.display = "block";
    };
    const hide = () => {
      showBtn.style.display = "inline";
      hideBtn.style.display = "none";
      fileList.style.display = "none";
    };
    showBtn.addEventListener("click", () => show());
    hideBtn.addEventListener("click", () => hide());
    const hashTag = this.getHashTag();
    if (hashTag === "files-summary-show")
      show();
    else if (hashTag === "files-summary-hide")
      hide();
    else if (startVisible)
      show();
    else
      hide();
  }
  fileContentToggle() {
    this.targetElement.querySelectorAll(".d2h-file-collapse").forEach((fileContentToggleBtn) => {
      fileContentToggleBtn.style.display = "flex";
      const toggleFileContents = (selector) => {
        var _a;
        const fileContents = (_a = fileContentToggleBtn.closest(".d2h-file-wrapper")) === null || _a === void 0 ? void 0 : _a.querySelector(selector);
        if (fileContents !== null && fileContents !== void 0) {
          fileContentToggleBtn.classList.toggle("d2h-selected");
          fileContents.classList.toggle("d2h-d-none");
        }
      };
      const toggleHandler = (e) => {
        if (fileContentToggleBtn === e.target)
          return;
        toggleFileContents(".d2h-file-diff");
        toggleFileContents(".d2h-files-diff");
      };
      fileContentToggleBtn.addEventListener("click", (e) => toggleHandler(e));
    });
  }
  highlightCode() {
    const hljs2 = this.hljs;
    if (hljs2 === null) {
      throw new Error("Missing a `highlight.js` implementation. Please provide one when instantiating Diff2HtmlUI.");
    }
    const files = this.targetElement.querySelectorAll(".d2h-file-wrapper");
    files.forEach((file) => {
      const language = file.getAttribute("data-lang");
      if (!(this.config.highlightLanguages instanceof Map)) {
        this.config.highlightLanguages = new Map(Object.entries(this.config.highlightLanguages));
      }
      let hljsLanguage = language && this.config.highlightLanguages.has(language) ? this.config.highlightLanguages.get(language) : language ? getLanguage(language) : "plaintext";
      if (hljs2.getLanguage(hljsLanguage) === void 0) {
        hljsLanguage = "plaintext";
      }
      const codeLines = file.querySelectorAll(".d2h-code-line-ctn");
      codeLines.forEach((line) => {
        const text = line.textContent;
        const lineParent = line.parentNode;
        if (text === null || lineParent === null || !this.isElement(lineParent))
          return;
        const result = closeTags(hljs2.highlight(text, {
          language: hljsLanguage,
          ignoreIllegals: true
        }));
        const originalStream = nodeStream(line);
        if (originalStream.length) {
          const resultNode = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
          resultNode.innerHTML = result.value;
          result.value = mergeStreams(originalStream, nodeStream(resultNode), text);
        }
        line.classList.add("hljs");
        if (result.language) {
          line.classList.add(result.language);
        }
        line.innerHTML = result.value;
      });
    });
  }
  stickyFileHeaders() {
    this.targetElement.querySelectorAll(".d2h-file-header").forEach((header) => {
      header.classList.add("d2h-sticky-header");
    });
  }
  smartSelection() {
    console.warn("Smart selection is now enabled by default with CSS. No need to call this method anymore.");
  }
  getHashTag() {
    const docUrl = document.URL;
    const hashTagIndex = docUrl.indexOf("#");
    let hashTag = null;
    if (hashTagIndex !== -1) {
      hashTag = docUrl.substr(hashTagIndex + 1);
    }
    return hashTag;
  }
  isElement(arg) {
    return arg !== null && (arg === null || arg === void 0 ? void 0 : arg.classList) !== void 0;
  }
};

// node_modules/diff2html/lib-esm/ui/js/diff2html-ui-slim.js
var Diff2HtmlUI2 = class extends Diff2HtmlUI {
  constructor(target, diffInput, config = {}) {
    super(target, diffInput, config, hljs);
  }
};
export {
  Diff2HtmlUI2 as Diff2HtmlUI,
  defaultDiff2HtmlUIConfig
};
//# sourceMappingURL=chunk-7G2QHIEK.js.map
