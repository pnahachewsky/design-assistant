!(function(n, r) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = r() : "function" == typeof define && define.amd ? define("underscore", r) : (n = "undefined" != typeof globalThis ? globalThis : n || self, (function() {
    var t = n._, e = n._ = r();
    e.noConflict = function() {
      return n._ = t, e;
    };
  })());
})(this, (function() {
  var n = "1.13.8", r = "object" == typeof self && self.self === self && self || "object" == typeof global && global.global === global && global || Function("return this")() || {}, t = Array.prototype, e = Object.prototype, u = "undefined" != typeof Symbol ? Symbol.prototype : null, i = t.push, o = t.slice, a = e.toString, f = e.hasOwnProperty, c = "undefined" != typeof ArrayBuffer, l = "undefined" != typeof DataView, s = Array.isArray, p = Object.keys, v = Object.create, h = c && ArrayBuffer.isView, y = isNaN, d = isFinite, g = !{ toString: null }.propertyIsEnumerable("toString"), b = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"], m = Math.pow(2, 53) - 1;
  function j(n2, r2) {
    return r2 = null == r2 ? n2.length - 1 : +r2, function() {
      for (var t2 = Math.max(arguments.length - r2, 0), e2 = Array(t2), u2 = 0; u2 < t2; u2++) e2[u2] = arguments[u2 + r2];
      switch (r2) {
        case 0:
          return n2.call(this, e2);
        case 1:
          return n2.call(this, arguments[0], e2);
        case 2:
          return n2.call(this, arguments[0], arguments[1], e2);
      }
      var i2 = Array(r2 + 1);
      for (u2 = 0; u2 < r2; u2++) i2[u2] = arguments[u2];
      return i2[r2] = e2, n2.apply(this, i2);
    };
  }
  function w(n2) {
    var r2 = typeof n2;
    return "function" === r2 || "object" === r2 && !!n2;
  }
  function _(n2) {
    return void 0 === n2;
  }
  function A(n2) {
    return true === n2 || false === n2 || "[object Boolean]" === a.call(n2);
  }
  function x(n2) {
    var r2 = "[object " + n2 + "]";
    return function(n3) {
      return a.call(n3) === r2;
    };
  }
  var S = x("String"), O = x("Number"), M = x("Date"), E = x("RegExp"), B = x("Error"), N = x("Symbol"), k = x("ArrayBuffer"), I = x("Function"), T = r.document && r.document.childNodes;
  "function" != typeof /./ && "object" != typeof Int8Array && "function" != typeof T && (I = function(n2) {
    return "function" == typeof n2 || false;
  });
  var D = I, R = x("Object"), V = l && (!/\[native code\]/.test(String(DataView)) || R(new DataView(new ArrayBuffer(8)))), F = "undefined" != typeof Map && R(/* @__PURE__ */ new Map()), P = x("DataView");
  var q = V ? function(n2) {
    return null != n2 && D(n2.getInt8) && k(n2.buffer);
  } : P, U = s || x("Array");
  function W(n2, r2) {
    return null != n2 && f.call(n2, r2);
  }
  var z = x("Arguments");
  !(function() {
    z(arguments) || (z = function(n2) {
      return W(n2, "callee");
    });
  })();
  var L = z;
  function $(n2) {
    return O(n2) && y(n2);
  }
  function C(n2) {
    return function() {
      return n2;
    };
  }
  function K(n2) {
    return function(r2) {
      var t2 = n2(r2);
      return "number" == typeof t2 && t2 >= 0 && t2 <= m;
    };
  }
  function J(n2) {
    return function(r2) {
      return null == r2 ? void 0 : r2[n2];
    };
  }
  var G = J("byteLength"), H = K(G), Q = /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;
  var X = c ? function(n2) {
    return h ? h(n2) && !q(n2) : H(n2) && Q.test(a.call(n2));
  } : C(false), Y = J("length");
  function Z(n2, r2) {
    r2 = (function(n3) {
      for (var r3 = {}, t3 = n3.length, e2 = 0; e2 < t3; ++e2) r3[n3[e2]] = true;
      return { contains: function(n4) {
        return true === r3[n4];
      }, push: function(t4) {
        return r3[t4] = true, n3.push(t4);
      } };
    })(r2);
    var t2 = b.length, u2 = n2.constructor, i2 = D(u2) && u2.prototype || e, o2 = "constructor";
    for (W(n2, o2) && !r2.contains(o2) && r2.push(o2); t2--; ) (o2 = b[t2]) in n2 && n2[o2] !== i2[o2] && !r2.contains(o2) && r2.push(o2);
  }
  function nn(n2) {
    if (!w(n2)) return [];
    if (p) return p(n2);
    var r2 = [];
    for (var t2 in n2) W(n2, t2) && r2.push(t2);
    return g && Z(n2, r2), r2;
  }
  function rn(n2, r2) {
    var t2 = nn(r2), e2 = t2.length;
    if (null == n2) return !e2;
    for (var u2 = Object(n2), i2 = 0; i2 < e2; i2++) {
      var o2 = t2[i2];
      if (r2[o2] !== u2[o2] || !(o2 in u2)) return false;
    }
    return true;
  }
  function tn(n2) {
    return n2 instanceof tn ? n2 : this instanceof tn ? void (this._wrapped = n2) : new tn(n2);
  }
  function en(n2) {
    return new Uint8Array(n2.buffer || n2, n2.byteOffset || 0, G(n2));
  }
  tn.VERSION = n, tn.prototype.value = function() {
    return this._wrapped;
  }, tn.prototype.valueOf = tn.prototype.toJSON = tn.prototype.value, tn.prototype.toString = function() {
    return String(this._wrapped);
  };
  var un = "[object DataView]";
  function on(n2) {
    if (!w(n2)) return [];
    var r2 = [];
    for (var t2 in n2) r2.push(t2);
    return g && Z(n2, r2), r2;
  }
  function an(n2) {
    var r2 = Y(n2);
    return function(t2) {
      if (null == t2) return false;
      var e2 = on(t2);
      if (Y(e2)) return false;
      for (var u2 = 0; u2 < r2; u2++) if (!D(t2[n2[u2]])) return false;
      return n2 !== vn || !D(t2[fn]);
    };
  }
  var fn = "forEach", cn = "has", ln = ["clear", "delete"], sn = ["get", cn, "set"], pn = ln.concat(fn, sn), vn = ln.concat(sn), hn = ["add"].concat(ln, fn, cn), yn = F ? an(pn) : x("Map"), dn = F ? an(vn) : x("WeakMap"), gn = F ? an(hn) : x("Set"), bn = x("WeakSet");
  function mn(n2) {
    for (var r2 = nn(n2), t2 = r2.length, e2 = Array(t2), u2 = 0; u2 < t2; u2++) e2[u2] = n2[r2[u2]];
    return e2;
  }
  function jn(n2) {
    for (var r2 = {}, t2 = nn(n2), e2 = 0, u2 = t2.length; e2 < u2; e2++) r2[n2[t2[e2]]] = t2[e2];
    return r2;
  }
  function wn(n2) {
    var r2 = [];
    for (var t2 in n2) D(n2[t2]) && r2.push(t2);
    return r2.sort();
  }
  function _n(n2, r2) {
    return function(t2) {
      var e2 = arguments.length;
      if (r2 && (t2 = Object(t2)), e2 < 2 || null == t2) return t2;
      for (var u2 = 1; u2 < e2; u2++) for (var i2 = arguments[u2], o2 = n2(i2), a2 = o2.length, f2 = 0; f2 < a2; f2++) {
        var c2 = o2[f2];
        r2 && void 0 !== t2[c2] || (t2[c2] = i2[c2]);
      }
      return t2;
    };
  }
  var An = _n(on), xn = _n(nn), Sn = _n(on, true);
  function On(n2) {
    if (!w(n2)) return {};
    if (v) return v(n2);
    var r2 = function() {
    };
    r2.prototype = n2;
    var t2 = new r2();
    return r2.prototype = null, t2;
  }
  function Mn(n2) {
    return U(n2) ? n2 : [n2];
  }
  function En(n2) {
    return tn.toPath(n2);
  }
  function Bn(n2, r2) {
    for (var t2 = r2.length, e2 = 0; e2 < t2; e2++) {
      if (null == n2) return;
      n2 = n2[r2[e2]];
    }
    return t2 ? n2 : void 0;
  }
  function Nn(n2, r2, t2) {
    var e2 = Bn(n2, En(r2));
    return _(e2) ? t2 : e2;
  }
  function kn(n2) {
    return n2;
  }
  function In(n2) {
    return n2 = xn({}, n2), function(r2) {
      return rn(r2, n2);
    };
  }
  function Tn(n2) {
    return n2 = En(n2), function(r2) {
      return Bn(r2, n2);
    };
  }
  function Dn(n2, r2, t2) {
    if (void 0 === r2) return n2;
    switch (null == t2 ? 3 : t2) {
      case 1:
        return function(t3) {
          return n2.call(r2, t3);
        };
      case 3:
        return function(t3, e2, u2) {
          return n2.call(r2, t3, e2, u2);
        };
      case 4:
        return function(t3, e2, u2, i2) {
          return n2.call(r2, t3, e2, u2, i2);
        };
    }
    return function() {
      return n2.apply(r2, arguments);
    };
  }
  function Rn(n2, r2, t2) {
    return null == n2 ? kn : D(n2) ? Dn(n2, r2, t2) : w(n2) && !U(n2) ? In(n2) : Tn(n2);
  }
  function Vn(n2, r2) {
    return Rn(n2, r2, 1 / 0);
  }
  function Fn(n2, r2, t2) {
    return tn.iteratee !== Vn ? tn.iteratee(n2, r2) : Rn(n2, r2, t2);
  }
  function Pn() {
  }
  function qn(n2, r2) {
    return null == r2 && (r2 = n2, n2 = 0), n2 + Math.floor(Math.random() * (r2 - n2 + 1));
  }
  tn.toPath = Mn, tn.iteratee = Vn;
  var Un = Date.now || function() {
    return (/* @__PURE__ */ new Date()).getTime();
  };
  function Wn(n2) {
    var r2 = function(r3) {
      return n2[r3];
    }, t2 = "(?:" + nn(n2).join("|") + ")", e2 = RegExp(t2), u2 = RegExp(t2, "g");
    return function(n3) {
      return n3 = null == n3 ? "" : "" + n3, e2.test(n3) ? n3.replace(u2, r2) : n3;
    };
  }
  var zn = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" }, Ln = Wn(zn), $n = Wn(jn(zn)), Cn = tn.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g }, Kn = /(.)^/, Jn = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" }, Gn = /\\|'|\r|\n|\u2028|\u2029/g;
  function Hn(n2) {
    return "\\" + Jn[n2];
  }
  var Qn = /^\s*(\w|\$)+\s*$/;
  var Xn = 0;
  function Yn(n2, r2, t2, e2, u2) {
    if (!(e2 instanceof r2)) return n2.apply(t2, u2);
    var i2 = On(n2.prototype), o2 = n2.apply(i2, u2);
    return w(o2) ? o2 : i2;
  }
  var Zn = j((function(n2, r2) {
    var t2 = Zn.placeholder, e2 = function() {
      for (var u2 = 0, i2 = r2.length, o2 = Array(i2), a2 = 0; a2 < i2; a2++) o2[a2] = r2[a2] === t2 ? arguments[u2++] : r2[a2];
      for (; u2 < arguments.length; ) o2.push(arguments[u2++]);
      return Yn(n2, e2, this, this, o2);
    };
    return e2;
  }));
  Zn.placeholder = tn;
  var nr = j((function(n2, r2, t2) {
    if (!D(n2)) throw new TypeError("Bind must be called on a function");
    var e2 = j((function(u2) {
      return Yn(n2, e2, r2, this, t2.concat(u2));
    }));
    return e2;
  })), rr = K(Y);
  function tr(n2, r2, t2) {
    r2 || 0 === r2 || (r2 = 1 / 0);
    for (var e2 = [], u2 = 0, i2 = 0, o2 = Y(n2) || 0, a2 = []; 1; ) if (i2 >= o2) {
      if (!a2.length) break;
      var f2 = a2.pop();
      i2 = f2.i, n2 = f2.v, o2 = Y(n2);
    } else {
      var c2 = n2[i2++];
      a2.length >= r2 ? e2[u2++] = c2 : rr(c2) && (U(c2) || L(c2)) ? (a2.push({ i: i2, v: n2 }), i2 = 0, o2 = Y(n2 = c2)) : t2 || (e2[u2++] = c2);
    }
    return e2;
  }
  var er = j((function(n2, r2) {
    var t2 = (r2 = tr(r2, false, false)).length;
    if (t2 < 1) throw new Error("bindAll must be passed function names");
    for (; t2--; ) {
      var e2 = r2[t2];
      n2[e2] = nr(n2[e2], n2);
    }
    return n2;
  }));
  var ur = j((function(n2, r2, t2) {
    return setTimeout((function() {
      return n2.apply(null, t2);
    }), r2);
  })), ir = Zn(ur, tn, 1);
  function or(n2) {
    return function() {
      return !n2.apply(this, arguments);
    };
  }
  function ar(n2, r2) {
    var t2;
    return function() {
      return --n2 > 0 && (t2 = r2.apply(this, arguments)), n2 <= 1 && (r2 = null), t2;
    };
  }
  var fr = Zn(ar, 2);
  function cr(n2, r2, t2) {
    r2 = Fn(r2, t2);
    for (var e2, u2 = nn(n2), i2 = 0, o2 = u2.length; i2 < o2; i2++) if (r2(n2[e2 = u2[i2]], e2, n2)) return e2;
  }
  function lr(n2) {
    return function(r2, t2, e2) {
      t2 = Fn(t2, e2);
      for (var u2 = Y(r2), i2 = n2 > 0 ? 0 : u2 - 1; i2 >= 0 && i2 < u2; i2 += n2) if (t2(r2[i2], i2, r2)) return i2;
      return -1;
    };
  }
  var sr = lr(1), pr = lr(-1);
  function vr(n2, r2, t2, e2) {
    for (var u2 = (t2 = Fn(t2, e2, 1))(r2), i2 = 0, o2 = Y(n2); i2 < o2; ) {
      var a2 = Math.floor((i2 + o2) / 2);
      t2(n2[a2]) < u2 ? i2 = a2 + 1 : o2 = a2;
    }
    return i2;
  }
  function hr(n2, r2, t2) {
    return function(e2, u2, i2) {
      var a2 = 0, f2 = Y(e2);
      if ("number" == typeof i2) n2 > 0 ? a2 = i2 >= 0 ? i2 : Math.max(i2 + f2, a2) : f2 = i2 >= 0 ? Math.min(i2 + 1, f2) : i2 + f2 + 1;
      else if (t2 && i2 && f2) return e2[i2 = t2(e2, u2)] === u2 ? i2 : -1;
      if (u2 != u2) return (i2 = r2(o.call(e2, a2, f2), $)) >= 0 ? i2 + a2 : -1;
      for (i2 = n2 > 0 ? a2 : f2 - 1; i2 >= 0 && i2 < f2; i2 += n2) if (e2[i2] === u2) return i2;
      return -1;
    };
  }
  var yr = hr(1, sr, vr), dr = hr(-1, pr);
  function gr(n2, r2, t2) {
    var e2 = (rr(n2) ? sr : cr)(n2, r2, t2);
    if (void 0 !== e2 && -1 !== e2) return n2[e2];
  }
  function br(n2, r2, t2) {
    var e2, u2;
    if (r2 = Dn(r2, t2), rr(n2)) for (e2 = 0, u2 = n2.length; e2 < u2; e2++) r2(n2[e2], e2, n2);
    else {
      var i2 = nn(n2);
      for (e2 = 0, u2 = i2.length; e2 < u2; e2++) r2(n2[i2[e2]], i2[e2], n2);
    }
    return n2;
  }
  function mr(n2, r2, t2) {
    r2 = Fn(r2, t2);
    for (var e2 = !rr(n2) && nn(n2), u2 = (e2 || n2).length, i2 = Array(u2), o2 = 0; o2 < u2; o2++) {
      var a2 = e2 ? e2[o2] : o2;
      i2[o2] = r2(n2[a2], a2, n2);
    }
    return i2;
  }
  function jr(n2) {
    var r2 = function(r3, t2, e2, u2) {
      var i2 = !rr(r3) && nn(r3), o2 = (i2 || r3).length, a2 = n2 > 0 ? 0 : o2 - 1;
      for (u2 || (e2 = r3[i2 ? i2[a2] : a2], a2 += n2); a2 >= 0 && a2 < o2; a2 += n2) {
        var f2 = i2 ? i2[a2] : a2;
        e2 = t2(e2, r3[f2], f2, r3);
      }
      return e2;
    };
    return function(n3, t2, e2, u2) {
      var i2 = arguments.length >= 3;
      return r2(n3, Dn(t2, u2, 4), e2, i2);
    };
  }
  var wr = jr(1), _r = jr(-1);
  function Ar(n2, r2, t2) {
    var e2 = [];
    return r2 = Fn(r2, t2), br(n2, (function(n3, t3, u2) {
      r2(n3, t3, u2) && e2.push(n3);
    })), e2;
  }
  function xr(n2, r2, t2) {
    r2 = Fn(r2, t2);
    for (var e2 = !rr(n2) && nn(n2), u2 = (e2 || n2).length, i2 = 0; i2 < u2; i2++) {
      var o2 = e2 ? e2[i2] : i2;
      if (!r2(n2[o2], o2, n2)) return false;
    }
    return true;
  }
  function Sr(n2, r2, t2) {
    r2 = Fn(r2, t2);
    for (var e2 = !rr(n2) && nn(n2), u2 = (e2 || n2).length, i2 = 0; i2 < u2; i2++) {
      var o2 = e2 ? e2[i2] : i2;
      if (r2(n2[o2], o2, n2)) return true;
    }
    return false;
  }
  function Or(n2, r2, t2, e2) {
    return rr(n2) || (n2 = mn(n2)), ("number" != typeof t2 || e2) && (t2 = 0), yr(n2, r2, t2) >= 0;
  }
  var Mr = j((function(n2, r2, t2) {
    var e2, u2;
    return D(r2) ? u2 = r2 : (r2 = En(r2), e2 = r2.slice(0, -1), r2 = r2[r2.length - 1]), mr(n2, (function(n3) {
      var i2 = u2;
      if (!i2) {
        if (e2 && e2.length && (n3 = Bn(n3, e2)), null == n3) return;
        i2 = n3[r2];
      }
      return null == i2 ? i2 : i2.apply(n3, t2);
    }));
  }));
  function Er(n2, r2) {
    return mr(n2, Tn(r2));
  }
  function Br(n2, r2, t2) {
    var e2, u2, i2 = -1 / 0, o2 = -1 / 0;
    if (null == r2 || "number" == typeof r2 && "object" != typeof n2[0] && null != n2) for (var a2 = 0, f2 = (n2 = rr(n2) ? n2 : mn(n2)).length; a2 < f2; a2++) null != (e2 = n2[a2]) && e2 > i2 && (i2 = e2);
    else r2 = Fn(r2, t2), br(n2, (function(n3, t3, e3) {
      ((u2 = r2(n3, t3, e3)) > o2 || u2 === -1 / 0 && i2 === -1 / 0) && (i2 = n3, o2 = u2);
    }));
    return i2;
  }
  var Nr = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
  function kr(n2) {
    return n2 ? U(n2) ? o.call(n2) : S(n2) ? n2.match(Nr) : rr(n2) ? mr(n2, kn) : mn(n2) : [];
  }
  function Ir(n2, r2, t2) {
    if (null == r2 || t2) return rr(n2) || (n2 = mn(n2)), n2[qn(n2.length - 1)];
    var e2 = kr(n2), u2 = Y(e2);
    r2 = Math.max(Math.min(r2, u2), 0);
    for (var i2 = u2 - 1, o2 = 0; o2 < r2; o2++) {
      var a2 = qn(o2, i2), f2 = e2[o2];
      e2[o2] = e2[a2], e2[a2] = f2;
    }
    return e2.slice(0, r2);
  }
  function Tr(n2, r2) {
    return function(t2, e2, u2) {
      var i2 = r2 ? [[], []] : {};
      return e2 = Fn(e2, u2), br(t2, (function(r3, u3) {
        var o2 = e2(r3, u3, t2);
        n2(i2, r3, o2);
      })), i2;
    };
  }
  var Dr = Tr((function(n2, r2, t2) {
    W(n2, t2) ? n2[t2].push(r2) : n2[t2] = [r2];
  })), Rr = Tr((function(n2, r2, t2) {
    n2[t2] = r2;
  })), Vr = Tr((function(n2, r2, t2) {
    W(n2, t2) ? n2[t2]++ : n2[t2] = 1;
  })), Fr = Tr((function(n2, r2, t2) {
    n2[t2 ? 0 : 1].push(r2);
  }), true);
  function Pr(n2, r2, t2) {
    return r2 in t2;
  }
  var qr = j((function(n2, r2) {
    var t2 = {}, e2 = r2[0];
    if (null == n2) return t2;
    D(e2) ? (r2.length > 1 && (e2 = Dn(e2, r2[1])), r2 = on(n2)) : (e2 = Pr, r2 = tr(r2, false, false), n2 = Object(n2));
    for (var u2 = 0, i2 = r2.length; u2 < i2; u2++) {
      var o2 = r2[u2], a2 = n2[o2];
      e2(a2, o2, n2) && (t2[o2] = a2);
    }
    return t2;
  })), Ur = j((function(n2, r2) {
    var t2, e2 = r2[0];
    return D(e2) ? (e2 = or(e2), r2.length > 1 && (t2 = r2[1])) : (r2 = mr(tr(r2, false, false), String), e2 = function(n3, t3) {
      return !Or(r2, t3);
    }), qr(n2, e2, t2);
  }));
  function Wr(n2, r2, t2) {
    return o.call(n2, 0, Math.max(0, n2.length - (null == r2 || t2 ? 1 : r2)));
  }
  function zr(n2, r2, t2) {
    return null == n2 || n2.length < 1 ? null == r2 || t2 ? void 0 : [] : null == r2 || t2 ? n2[0] : Wr(n2, n2.length - r2);
  }
  function Lr(n2, r2, t2) {
    return o.call(n2, null == r2 || t2 ? 1 : r2);
  }
  var $r = j((function(n2, r2) {
    return r2 = tr(r2, true, true), Ar(n2, (function(n3) {
      return !Or(r2, n3);
    }));
  })), Cr = j((function(n2, r2) {
    return $r(n2, r2);
  }));
  function Kr(n2, r2, t2, e2) {
    A(r2) || (e2 = t2, t2 = r2, r2 = false), null != t2 && (t2 = Fn(t2, e2));
    for (var u2 = [], i2 = [], o2 = 0, a2 = Y(n2); o2 < a2; o2++) {
      var f2 = n2[o2], c2 = t2 ? t2(f2, o2, n2) : f2;
      r2 && !t2 ? (o2 && i2 === c2 || u2.push(f2), i2 = c2) : t2 ? Or(i2, c2) || (i2.push(c2), u2.push(f2)) : Or(u2, f2) || u2.push(f2);
    }
    return u2;
  }
  var Jr = j((function(n2) {
    return Kr(tr(n2, true, true));
  }));
  function Gr(n2) {
    for (var r2 = n2 && Br(n2, Y).length || 0, t2 = Array(r2), e2 = 0; e2 < r2; e2++) t2[e2] = Er(n2, e2);
    return t2;
  }
  var Hr = j(Gr);
  function Qr(n2, r2) {
    return n2._chain ? tn(r2).chain() : r2;
  }
  function Xr(n2) {
    return br(wn(n2), (function(r2) {
      var t2 = tn[r2] = n2[r2];
      tn.prototype[r2] = function() {
        var n3 = [this._wrapped];
        return i.apply(n3, arguments), Qr(this, t2.apply(tn, n3));
      };
    })), tn;
  }
  br(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], (function(n2) {
    var r2 = t[n2];
    tn.prototype[n2] = function() {
      var t2 = this._wrapped;
      return null != t2 && (r2.apply(t2, arguments), "shift" !== n2 && "splice" !== n2 || 0 !== t2.length || delete t2[0]), Qr(this, t2);
    };
  })), br(["concat", "join", "slice"], (function(n2) {
    var r2 = t[n2];
    tn.prototype[n2] = function() {
      var n3 = this._wrapped;
      return null != n3 && (n3 = r2.apply(n3, arguments)), Qr(this, n3);
    };
  }));
  var Yr = Xr({ __proto__: null, VERSION: n, restArguments: j, isObject: w, isNull: function(n2) {
    return null === n2;
  }, isUndefined: _, isBoolean: A, isElement: function(n2) {
    return !(!n2 || 1 !== n2.nodeType);
  }, isString: S, isNumber: O, isDate: M, isRegExp: E, isError: B, isSymbol: N, isArrayBuffer: k, isDataView: q, isArray: U, isFunction: D, isArguments: L, isFinite: function(n2) {
    return !N(n2) && d(n2) && !isNaN(parseFloat(n2));
  }, isNaN: $, isTypedArray: X, isEmpty: function(n2) {
    if (null == n2) return true;
    var r2 = Y(n2);
    return "number" == typeof r2 && (U(n2) || S(n2) || L(n2)) ? 0 === r2 : 0 === Y(nn(n2));
  }, isMatch: rn, isEqual: function(n2, r2) {
    for (var t2 = [{ a: n2, b: r2 }], e2 = [], i2 = []; t2.length; ) {
      var o2 = t2.pop();
      if (true !== o2) {
        if ((n2 = o2.a) === (r2 = o2.b)) {
          if (0 !== n2 || 1 / n2 == 1 / r2) continue;
          return false;
        }
        if (null == n2 || null == r2) return false;
        if (n2 != n2) {
          if (r2 != r2) continue;
          return false;
        }
        var f2 = typeof n2;
        if ("function" !== f2 && "object" !== f2 && "object" != typeof r2) return false;
        n2 instanceof tn && (n2 = n2._wrapped), r2 instanceof tn && (r2 = r2._wrapped);
        var c2 = a.call(n2);
        if (c2 !== a.call(r2)) return false;
        if (V && "[object Object]" == c2 && q(n2)) {
          if (!q(r2)) return false;
          c2 = un;
        }
        switch (c2) {
          case "[object RegExp]":
          case "[object String]":
            if ("" + n2 == "" + r2) continue;
            return false;
          case "[object Number]":
            t2.push({ a: +n2, b: +r2 });
            continue;
          case "[object Date]":
          case "[object Boolean]":
            if (+n2 == +r2) continue;
            return false;
          case "[object Symbol]":
            if (u.valueOf.call(n2) === u.valueOf.call(r2)) continue;
            return false;
          case "[object ArrayBuffer]":
          case un:
            t2.push({ a: en(n2), b: en(r2) });
            continue;
        }
        var l2 = "[object Array]" === c2;
        if (!l2 && X(n2)) {
          if (G(n2) !== G(r2)) return false;
          if (n2.buffer === r2.buffer && n2.byteOffset === r2.byteOffset) continue;
          l2 = true;
        }
        if (!l2) {
          if ("object" != typeof n2 || "object" != typeof r2) return false;
          var s2 = n2.constructor, p2 = r2.constructor;
          if (s2 !== p2 && !(D(s2) && s2 instanceof s2 && D(p2) && p2 instanceof p2) && "constructor" in n2 && "constructor" in r2) return false;
        }
        for (var v2 = e2.length; v2--; ) if (e2[v2] === n2) {
          if (i2[v2] === r2) break;
          return false;
        }
        if (!(v2 >= 0)) if (e2.push(n2), i2.push(r2), t2.push(true), l2) {
          if ((v2 = n2.length) !== r2.length) return false;
          for (; v2--; ) t2.push({ a: n2[v2], b: r2[v2] });
        } else {
          var h2, y2 = nn(n2);
          if (v2 = y2.length, nn(r2).length !== v2) return false;
          for (; v2--; ) {
            if (!W(r2, h2 = y2[v2])) return false;
            t2.push({ a: n2[h2], b: r2[h2] });
          }
        }
      } else e2.pop(), i2.pop();
    }
    return true;
  }, isMap: yn, isWeakMap: dn, isSet: gn, isWeakSet: bn, keys: nn, allKeys: on, values: mn, pairs: function(n2) {
    for (var r2 = nn(n2), t2 = r2.length, e2 = Array(t2), u2 = 0; u2 < t2; u2++) e2[u2] = [r2[u2], n2[r2[u2]]];
    return e2;
  }, invert: jn, functions: wn, methods: wn, extend: An, extendOwn: xn, assign: xn, defaults: Sn, create: function(n2, r2) {
    var t2 = On(n2);
    return r2 && xn(t2, r2), t2;
  }, clone: function(n2) {
    return w(n2) ? U(n2) ? n2.slice() : An({}, n2) : n2;
  }, tap: function(n2, r2) {
    return r2(n2), n2;
  }, get: Nn, has: function(n2, r2) {
    for (var t2 = (r2 = En(r2)).length, e2 = 0; e2 < t2; e2++) {
      var u2 = r2[e2];
      if (!W(n2, u2)) return false;
      n2 = n2[u2];
    }
    return !!t2;
  }, mapObject: function(n2, r2, t2) {
    r2 = Fn(r2, t2);
    for (var e2 = nn(n2), u2 = e2.length, i2 = {}, o2 = 0; o2 < u2; o2++) {
      var a2 = e2[o2];
      i2[a2] = r2(n2[a2], a2, n2);
    }
    return i2;
  }, identity: kn, constant: C, noop: Pn, toPath: Mn, property: Tn, propertyOf: function(n2) {
    return null == n2 ? Pn : function(r2) {
      return Nn(n2, r2);
    };
  }, matcher: In, matches: In, times: function(n2, r2, t2) {
    var e2 = Array(Math.max(0, n2));
    r2 = Dn(r2, t2, 1);
    for (var u2 = 0; u2 < n2; u2++) e2[u2] = r2(u2);
    return e2;
  }, random: qn, now: Un, escape: Ln, unescape: $n, templateSettings: Cn, template: function(n2, r2, t2) {
    !r2 && t2 && (r2 = t2), r2 = Sn({}, r2, tn.templateSettings);
    var e2 = RegExp([(r2.escape || Kn).source, (r2.interpolate || Kn).source, (r2.evaluate || Kn).source].join("|") + "|$", "g"), u2 = 0, i2 = "__p+='";
    n2.replace(e2, (function(r3, t3, e3, o3, a3) {
      return i2 += n2.slice(u2, a3).replace(Gn, Hn), u2 = a3 + r3.length, t3 ? i2 += "'+\n((__t=(" + t3 + "))==null?'':_.escape(__t))+\n'" : e3 ? i2 += "'+\n((__t=(" + e3 + "))==null?'':__t)+\n'" : o3 && (i2 += "';\n" + o3 + "\n__p+='"), r3;
    })), i2 += "';\n";
    var o2, a2 = r2.variable;
    if (a2) {
      if (!Qn.test(a2)) throw new Error("variable is not a bare identifier: " + a2);
    } else i2 = "with(obj||{}){\n" + i2 + "}\n", a2 = "obj";
    i2 = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + i2 + "return __p;\n";
    try {
      o2 = new Function(a2, "_", i2);
    } catch (n3) {
      throw n3.source = i2, n3;
    }
    var f2 = function(n3) {
      return o2.call(this, n3, tn);
    };
    return f2.source = "function(" + a2 + "){\n" + i2 + "}", f2;
  }, result: function(n2, r2, t2) {
    var e2 = (r2 = En(r2)).length;
    if (!e2) return D(t2) ? t2.call(n2) : t2;
    for (var u2 = 0; u2 < e2; u2++) {
      var i2 = null == n2 ? void 0 : n2[r2[u2]];
      void 0 === i2 && (i2 = t2, u2 = e2), n2 = D(i2) ? i2.call(n2) : i2;
    }
    return n2;
  }, uniqueId: function(n2) {
    var r2 = ++Xn + "";
    return n2 ? n2 + r2 : r2;
  }, chain: function(n2) {
    var r2 = tn(n2);
    return r2._chain = true, r2;
  }, iteratee: Vn, partial: Zn, bind: nr, bindAll: er, memoize: function(n2, r2) {
    var t2 = function(e2) {
      var u2 = t2.cache, i2 = "" + (r2 ? r2.apply(this, arguments) : e2);
      return W(u2, i2) || (u2[i2] = n2.apply(this, arguments)), u2[i2];
    };
    return t2.cache = {}, t2;
  }, delay: ur, defer: ir, throttle: function(n2, r2, t2) {
    var e2, u2, i2, o2, a2 = 0;
    t2 || (t2 = {});
    var f2 = function() {
      a2 = false === t2.leading ? 0 : Un(), e2 = null, o2 = n2.apply(u2, i2), e2 || (u2 = i2 = null);
    }, c2 = function() {
      var c3 = Un();
      a2 || false !== t2.leading || (a2 = c3);
      var l2 = r2 - (c3 - a2);
      return u2 = this, i2 = arguments, l2 <= 0 || l2 > r2 ? (e2 && (clearTimeout(e2), e2 = null), a2 = c3, o2 = n2.apply(u2, i2), e2 || (u2 = i2 = null)) : e2 || false === t2.trailing || (e2 = setTimeout(f2, l2)), o2;
    };
    return c2.cancel = function() {
      clearTimeout(e2), a2 = 0, e2 = u2 = i2 = null;
    }, c2;
  }, debounce: function(n2, r2, t2) {
    var e2, u2, i2, o2, a2, f2 = function() {
      var c3 = Un() - u2;
      r2 > c3 ? e2 = setTimeout(f2, r2 - c3) : (e2 = null, t2 || (o2 = n2.apply(a2, i2)), e2 || (i2 = a2 = null));
    }, c2 = j((function(c3) {
      return a2 = this, i2 = c3, u2 = Un(), e2 || (e2 = setTimeout(f2, r2), t2 && (o2 = n2.apply(a2, i2))), o2;
    }));
    return c2.cancel = function() {
      clearTimeout(e2), e2 = i2 = a2 = null;
    }, c2;
  }, wrap: function(n2, r2) {
    return Zn(r2, n2);
  }, negate: or, compose: function() {
    var n2 = arguments, r2 = n2.length - 1;
    return function() {
      for (var t2 = r2, e2 = n2[r2].apply(this, arguments); t2--; ) e2 = n2[t2].call(this, e2);
      return e2;
    };
  }, after: function(n2, r2) {
    return function() {
      if (--n2 < 1) return r2.apply(this, arguments);
    };
  }, before: ar, once: fr, findKey: cr, findIndex: sr, findLastIndex: pr, sortedIndex: vr, indexOf: yr, lastIndexOf: dr, find: gr, detect: gr, findWhere: function(n2, r2) {
    return gr(n2, In(r2));
  }, each: br, forEach: br, map: mr, collect: mr, reduce: wr, foldl: wr, inject: wr, reduceRight: _r, foldr: _r, filter: Ar, select: Ar, reject: function(n2, r2, t2) {
    return Ar(n2, or(Fn(r2)), t2);
  }, every: xr, all: xr, some: Sr, any: Sr, contains: Or, includes: Or, include: Or, invoke: Mr, pluck: Er, where: function(n2, r2) {
    return Ar(n2, In(r2));
  }, max: Br, min: function(n2, r2, t2) {
    var e2, u2, i2 = 1 / 0, o2 = 1 / 0;
    if (null == r2 || "number" == typeof r2 && "object" != typeof n2[0] && null != n2) for (var a2 = 0, f2 = (n2 = rr(n2) ? n2 : mn(n2)).length; a2 < f2; a2++) null != (e2 = n2[a2]) && e2 < i2 && (i2 = e2);
    else r2 = Fn(r2, t2), br(n2, (function(n3, t3, e3) {
      ((u2 = r2(n3, t3, e3)) < o2 || u2 === 1 / 0 && i2 === 1 / 0) && (i2 = n3, o2 = u2);
    }));
    return i2;
  }, shuffle: function(n2) {
    return Ir(n2, 1 / 0);
  }, sample: Ir, sortBy: function(n2, r2, t2) {
    var e2 = 0;
    return r2 = Fn(r2, t2), Er(mr(n2, (function(n3, t3, u2) {
      return { value: n3, index: e2++, criteria: r2(n3, t3, u2) };
    })).sort((function(n3, r3) {
      var t3 = n3.criteria, e3 = r3.criteria;
      if (t3 !== e3) {
        if (t3 > e3 || void 0 === t3) return 1;
        if (t3 < e3 || void 0 === e3) return -1;
      }
      return n3.index - r3.index;
    })), "value");
  }, groupBy: Dr, indexBy: Rr, countBy: Vr, partition: Fr, toArray: kr, size: function(n2) {
    return null == n2 ? 0 : rr(n2) ? n2.length : nn(n2).length;
  }, pick: qr, omit: Ur, first: zr, head: zr, take: zr, initial: Wr, last: function(n2, r2, t2) {
    return null == n2 || n2.length < 1 ? null == r2 || t2 ? void 0 : [] : null == r2 || t2 ? n2[n2.length - 1] : Lr(n2, Math.max(0, n2.length - r2));
  }, rest: Lr, tail: Lr, drop: Lr, compact: function(n2) {
    return Ar(n2, Boolean);
  }, flatten: function(n2, r2) {
    return tr(n2, r2, false);
  }, without: Cr, uniq: Kr, unique: Kr, union: Jr, intersection: function(n2) {
    for (var r2 = [], t2 = arguments.length, e2 = 0, u2 = Y(n2); e2 < u2; e2++) {
      var i2 = n2[e2];
      if (!Or(r2, i2)) {
        var o2;
        for (o2 = 1; o2 < t2 && Or(arguments[o2], i2); o2++) ;
        o2 === t2 && r2.push(i2);
      }
    }
    return r2;
  }, difference: $r, unzip: Gr, transpose: Gr, zip: Hr, object: function(n2, r2) {
    for (var t2 = {}, e2 = 0, u2 = Y(n2); e2 < u2; e2++) r2 ? t2[n2[e2]] = r2[e2] : t2[n2[e2][0]] = n2[e2][1];
    return t2;
  }, range: function(n2, r2, t2) {
    null == r2 && (r2 = n2 || 0, n2 = 0), t2 || (t2 = r2 < n2 ? -1 : 1);
    for (var e2 = Math.max(Math.ceil((r2 - n2) / t2), 0), u2 = Array(e2), i2 = 0; i2 < e2; i2++, n2 += t2) u2[i2] = n2;
    return u2;
  }, chunk: function(n2, r2) {
    if (null == r2 || r2 < 1) return [];
    for (var t2 = [], e2 = 0, u2 = n2.length; e2 < u2; ) t2.push(o.call(n2, e2, e2 += r2));
    return t2;
  }, mixin: Xr, default: tn });
  return Yr._ = Yr, Yr;
}));
//# sourceMappingURL=scripts.js.map
