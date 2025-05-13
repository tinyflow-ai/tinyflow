import pu, { forwardRef as _f, useRef as tl, useImperativeHandle as kf, useEffect as Sf } from "react";
var di = { exports: {} }, bo = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nl;
function Ef() {
  if (nl) return bo;
  nl = 1;
  var e = pu, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(s, l, u) {
    var c, d = {}, v = null, p = null;
    u !== void 0 && (v = "" + u), l.key !== void 0 && (v = "" + l.key), l.ref !== void 0 && (p = l.ref);
    for (c in l) r.call(l, c) && !i.hasOwnProperty(c) && (d[c] = l[c]);
    if (s && s.defaultProps) for (c in l = s.defaultProps, l) d[c] === void 0 && (d[c] = l[c]);
    return { $$typeof: t, type: s, key: v, ref: p, props: d, _owner: o.current };
  }
  return bo.Fragment = n, bo.jsx = a, bo.jsxs = a, bo;
}
var xo = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rl;
function Pf() {
  return rl || (rl = 1, process.env.NODE_ENV !== "production" && function() {
    var e = pu, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), h = Symbol.iterator, x = "@@iterator";
    function b(D) {
      if (D === null || typeof D != "object")
        return null;
      var ne = h && D[h] || D[x];
      return typeof ne == "function" ? ne : null;
    }
    var $ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(D) {
      {
        for (var ne = arguments.length, we = new Array(ne > 1 ? ne - 1 : 0), Le = 1; Le < ne; Le++)
          we[Le - 1] = arguments[Le];
        _("error", D, we);
      }
    }
    function _(D, ne, we) {
      {
        var Le = $.ReactDebugCurrentFrame, B = Le.getStackAddendum();
        B !== "" && (ne += "%s", we = we.concat([B]));
        var st = we.map(function(Ke) {
          return String(Ke);
        });
        st.unshift("Warning: " + ne), Function.prototype.apply.call(console[D], console, st);
      }
    }
    var w = !1, k = !1, V = !1, S = !1, N = !1, T;
    T = Symbol.for("react.module.reference");
    function I(D) {
      return !!(typeof D == "string" || typeof D == "function" || D === r || D === i || N || D === o || D === u || D === c || S || D === p || w || k || V || typeof D == "object" && D !== null && (D.$$typeof === v || D.$$typeof === d || D.$$typeof === a || D.$$typeof === s || D.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      D.$$typeof === T || D.getModuleId !== void 0));
    }
    function R(D, ne, we) {
      var Le = D.displayName;
      if (Le)
        return Le;
      var B = ne.displayName || ne.name || "";
      return B !== "" ? we + "(" + B + ")" : we;
    }
    function L(D) {
      return D.displayName || "Context";
    }
    function Z(D) {
      if (D == null)
        return null;
      if (typeof D.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof D == "function")
        return D.displayName || D.name || null;
      if (typeof D == "string")
        return D;
      switch (D) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case u:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof D == "object")
        switch (D.$$typeof) {
          case s:
            var ne = D;
            return L(ne) + ".Consumer";
          case a:
            var we = D;
            return L(we._context) + ".Provider";
          case l:
            return R(D, D.render, "ForwardRef");
          case d:
            var Le = D.displayName || null;
            return Le !== null ? Le : Z(D.type) || "Memo";
          case v: {
            var B = D, st = B._payload, Ke = B._init;
            try {
              return Z(Ke(st));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var E = Object.assign, C = 0, P, H, M, O, A, Y, W;
    function U() {
    }
    U.__reactDisabledLog = !0;
    function Q() {
      {
        if (C === 0) {
          P = console.log, H = console.info, M = console.warn, O = console.error, A = console.group, Y = console.groupCollapsed, W = console.groupEnd;
          var D = {
            configurable: !0,
            enumerable: !0,
            value: U,
            writable: !0
          };
          Object.defineProperties(console, {
            info: D,
            log: D,
            warn: D,
            error: D,
            group: D,
            groupCollapsed: D,
            groupEnd: D
          });
        }
        C++;
      }
    }
    function F() {
      {
        if (C--, C === 0) {
          var D = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: E({}, D, {
              value: P
            }),
            info: E({}, D, {
              value: H
            }),
            warn: E({}, D, {
              value: M
            }),
            error: E({}, D, {
              value: O
            }),
            group: E({}, D, {
              value: A
            }),
            groupCollapsed: E({}, D, {
              value: Y
            }),
            groupEnd: E({}, D, {
              value: W
            })
          });
        }
        C < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ge = $.ReactCurrentDispatcher, se;
    function ye(D, ne, we) {
      {
        if (se === void 0)
          try {
            throw Error();
          } catch (B) {
            var Le = B.stack.trim().match(/\n( *(at )?)/);
            se = Le && Le[1] || "";
          }
        return `
` + se + D;
      }
    }
    var le = !1, ke;
    {
      var $e = typeof WeakMap == "function" ? WeakMap : Map;
      ke = new $e();
    }
    function He(D, ne) {
      if (!D || le)
        return "";
      {
        var we = ke.get(D);
        if (we !== void 0)
          return we;
      }
      var Le;
      le = !0;
      var B = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var st;
      st = ge.current, ge.current = null, Q();
      try {
        if (ne) {
          var Ke = function() {
            throw Error();
          };
          if (Object.defineProperty(Ke.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Ke, []);
            } catch (Pt) {
              Le = Pt;
            }
            Reflect.construct(D, [], Ke);
          } else {
            try {
              Ke.call();
            } catch (Pt) {
              Le = Pt;
            }
            D.call(Ke.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Pt) {
            Le = Pt;
          }
          D();
        }
      } catch (Pt) {
        if (Pt && Le && typeof Pt.stack == "string") {
          for (var Ze = Pt.stack.split(`
`), Tt = Le.stack.split(`
`), pt = Ze.length - 1, ht = Tt.length - 1; pt >= 1 && ht >= 0 && Ze[pt] !== Tt[ht]; )
            ht--;
          for (; pt >= 1 && ht >= 0; pt--, ht--)
            if (Ze[pt] !== Tt[ht]) {
              if (pt !== 1 || ht !== 1)
                do
                  if (pt--, ht--, ht < 0 || Ze[pt] !== Tt[ht]) {
                    var jt = `
` + Ze[pt].replace(" at new ", " at ");
                    return D.displayName && jt.includes("<anonymous>") && (jt = jt.replace("<anonymous>", D.displayName)), typeof D == "function" && ke.set(D, jt), jt;
                  }
                while (pt >= 1 && ht >= 0);
              break;
            }
        }
      } finally {
        le = !1, ge.current = st, F(), Error.prepareStackTrace = B;
      }
      var er = D ? D.displayName || D.name : "", tr = er ? ye(er) : "";
      return typeof D == "function" && ke.set(D, tr), tr;
    }
    function ce(D, ne, we) {
      return He(D, !1);
    }
    function J(D) {
      var ne = D.prototype;
      return !!(ne && ne.isReactComponent);
    }
    function Pe(D, ne, we) {
      if (D == null)
        return "";
      if (typeof D == "function")
        return He(D, J(D));
      if (typeof D == "string")
        return ye(D);
      switch (D) {
        case u:
          return ye("Suspense");
        case c:
          return ye("SuspenseList");
      }
      if (typeof D == "object")
        switch (D.$$typeof) {
          case l:
            return ce(D.render);
          case d:
            return Pe(D.type, ne, we);
          case v: {
            var Le = D, B = Le._payload, st = Le._init;
            try {
              return Pe(st(B), ne, we);
            } catch {
            }
          }
        }
      return "";
    }
    var K = Object.prototype.hasOwnProperty, Ne = {}, qe = $.ReactDebugCurrentFrame;
    function De(D) {
      if (D) {
        var ne = D._owner, we = Pe(D.type, D._source, ne ? ne.type : null);
        qe.setExtraStackFrame(we);
      } else
        qe.setExtraStackFrame(null);
    }
    function de(D, ne, we, Le, B) {
      {
        var st = Function.call.bind(K);
        for (var Ke in D)
          if (st(D, Ke)) {
            var Ze = void 0;
            try {
              if (typeof D[Ke] != "function") {
                var Tt = Error((Le || "React class") + ": " + we + " type `" + Ke + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof D[Ke] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Tt.name = "Invariant Violation", Tt;
              }
              Ze = D[Ke](ne, Ke, Le, we, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (pt) {
              Ze = pt;
            }
            Ze && !(Ze instanceof Error) && (De(B), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Le || "React class", we, Ke, typeof Ze), De(null)), Ze instanceof Error && !(Ze.message in Ne) && (Ne[Ze.message] = !0, De(B), g("Failed %s type: %s", we, Ze.message), De(null));
          }
      }
    }
    var fe = Array.isArray;
    function ae(D) {
      return fe(D);
    }
    function Ve(D) {
      {
        var ne = typeof Symbol == "function" && Symbol.toStringTag, we = ne && D[Symbol.toStringTag] || D.constructor.name || "Object";
        return we;
      }
    }
    function it(D) {
      try {
        return rt(D), !1;
      } catch {
        return !0;
      }
    }
    function rt(D) {
      return "" + D;
    }
    function te(D) {
      if (it(D))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ve(D)), rt(D);
    }
    var Fe = $.ReactCurrentOwner, ve = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Xt, Yt;
    function un(D) {
      if (K.call(D, "ref")) {
        var ne = Object.getOwnPropertyDescriptor(D, "ref").get;
        if (ne && ne.isReactWarning)
          return !1;
      }
      return D.ref !== void 0;
    }
    function Ie(D) {
      if (K.call(D, "key")) {
        var ne = Object.getOwnPropertyDescriptor(D, "key").get;
        if (ne && ne.isReactWarning)
          return !1;
      }
      return D.key !== void 0;
    }
    function ut(D, ne) {
      typeof D.ref == "string" && Fe.current;
    }
    function Xe(D, ne) {
      {
        var we = function() {
          Xt || (Xt = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ne));
        };
        we.isReactWarning = !0, Object.defineProperty(D, "key", {
          get: we,
          configurable: !0
        });
      }
    }
    function Be(D, ne) {
      {
        var we = function() {
          Yt || (Yt = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ne));
        };
        we.isReactWarning = !0, Object.defineProperty(D, "ref", {
          get: we,
          configurable: !0
        });
      }
    }
    var ct = function(D, ne, we, Le, B, st, Ke) {
      var Ze = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: D,
        key: ne,
        ref: we,
        props: Ke,
        // Record the component responsible for creating this element.
        _owner: st
      };
      return Ze._store = {}, Object.defineProperty(Ze._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Ze, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Le
      }), Object.defineProperty(Ze, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: B
      }), Object.freeze && (Object.freeze(Ze.props), Object.freeze(Ze)), Ze;
    };
    function en(D, ne, we, Le, B) {
      {
        var st, Ke = {}, Ze = null, Tt = null;
        we !== void 0 && (te(we), Ze = "" + we), Ie(ne) && (te(ne.key), Ze = "" + ne.key), un(ne) && (Tt = ne.ref, ut(ne, B));
        for (st in ne)
          K.call(ne, st) && !ve.hasOwnProperty(st) && (Ke[st] = ne[st]);
        if (D && D.defaultProps) {
          var pt = D.defaultProps;
          for (st in pt)
            Ke[st] === void 0 && (Ke[st] = pt[st]);
        }
        if (Ze || Tt) {
          var ht = typeof D == "function" ? D.displayName || D.name || "Unknown" : D;
          Ze && Xe(Ke, ht), Tt && Be(Ke, ht);
        }
        return ct(D, Ze, Tt, B, Le, Fe.current, Ke);
      }
    }
    var Ht = $.ReactCurrentOwner, Jn = $.ReactDebugCurrentFrame;
    function yt(D) {
      if (D) {
        var ne = D._owner, we = Pe(D.type, D._source, ne ? ne.type : null);
        Jn.setExtraStackFrame(we);
      } else
        Jn.setExtraStackFrame(null);
    }
    var Ct;
    Ct = !1;
    function Mn(D) {
      return typeof D == "object" && D !== null && D.$$typeof === t;
    }
    function at() {
      {
        if (Ht.current) {
          var D = Z(Ht.current.type);
          if (D)
            return `

Check the render method of \`` + D + "`.";
        }
        return "";
      }
    }
    function yo(D) {
      return "";
    }
    var Qn = {};
    function zt(D) {
      {
        var ne = at();
        if (!ne) {
          var we = typeof D == "string" ? D : D.displayName || D.name;
          we && (ne = `

Check the top-level render call using <` + we + ">.");
        }
        return ne;
      }
    }
    function br(D, ne) {
      {
        if (!D._store || D._store.validated || D.key != null)
          return;
        D._store.validated = !0;
        var we = zt(ne);
        if (Qn[we])
          return;
        Qn[we] = !0;
        var Le = "";
        D && D._owner && D._owner !== Ht.current && (Le = " It was passed a child from " + Z(D._owner.type) + "."), yt(D), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', we, Le), yt(null);
      }
    }
    function xr(D, ne) {
      {
        if (typeof D != "object")
          return;
        if (ae(D))
          for (var we = 0; we < D.length; we++) {
            var Le = D[we];
            Mn(Le) && br(Le, ne);
          }
        else if (Mn(D))
          D._store && (D._store.validated = !0);
        else if (D) {
          var B = b(D);
          if (typeof B == "function" && B !== D.entries)
            for (var st = B.call(D), Ke; !(Ke = st.next()).done; )
              Mn(Ke.value) && br(Ke.value, ne);
        }
      }
    }
    function zr(D) {
      {
        var ne = D.type;
        if (ne == null || typeof ne == "string")
          return;
        var we;
        if (typeof ne == "function")
          we = ne.propTypes;
        else if (typeof ne == "object" && (ne.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ne.$$typeof === d))
          we = ne.propTypes;
        else
          return;
        if (we) {
          var Le = Z(ne);
          de(we, D.props, "prop", Le, D);
        } else if (ne.PropTypes !== void 0 && !Ct) {
          Ct = !0;
          var B = Z(ne);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", B || "Unknown");
        }
        typeof ne.getDefaultProps == "function" && !ne.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function wo(D) {
      {
        for (var ne = Object.keys(D.props), we = 0; we < ne.length; we++) {
          var Le = ne[we];
          if (Le !== "children" && Le !== "key") {
            yt(D), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Le), yt(null);
            break;
          }
        }
        D.ref !== null && (yt(D), g("Invalid attribute `ref` supplied to `React.Fragment`."), yt(null));
      }
    }
    var si = {};
    function li(D, ne, we, Le, B, st) {
      {
        var Ke = I(D);
        if (!Ke) {
          var Ze = "";
          (D === void 0 || typeof D == "object" && D !== null && Object.keys(D).length === 0) && (Ze += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Tt = yo();
          Tt ? Ze += Tt : Ze += at();
          var pt;
          D === null ? pt = "null" : ae(D) ? pt = "array" : D !== void 0 && D.$$typeof === t ? (pt = "<" + (Z(D.type) || "Unknown") + " />", Ze = " Did you accidentally export a JSX literal instead of a component?") : pt = typeof D, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", pt, Ze);
        }
        var ht = en(D, ne, we, B, st);
        if (ht == null)
          return ht;
        if (Ke) {
          var jt = ne.children;
          if (jt !== void 0)
            if (Le)
              if (ae(jt)) {
                for (var er = 0; er < jt.length; er++)
                  xr(jt[er], D);
                Object.freeze && Object.freeze(jt);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              xr(jt, D);
        }
        if (K.call(ne, "key")) {
          var tr = Z(D), Pt = Object.keys(ne).filter(function(ci) {
            return ci !== "key";
          }), Ar = Pt.length > 0 ? "{key: someKey, " + Pt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!si[tr + Ar]) {
            var ui = Pt.length > 0 ? "{" + Pt.join(": ..., ") + ": ...}" : "{}";
            g(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ar, tr, ui, tr), si[tr + Ar] = !0;
          }
        }
        return D === r ? wo(ht) : zr(ht), ht;
      }
    }
    function Sa(D, ne, we) {
      return li(D, ne, we, !0);
    }
    function Ea(D, ne, we) {
      return li(D, ne, we, !1);
    }
    var Pa = Ea, Ma = Sa;
    xo.Fragment = r, xo.jsx = Pa, xo.jsxs = Ma;
  }()), xo;
}
var ol;
function Mf() {
  return ol || (ol = 1, process.env.NODE_ENV === "production" ? di.exports = Ef() : di.exports = Pf()), di.exports;
}
var Vf = Mf(), Of = Object.defineProperty, gu = (e) => {
  throw TypeError(e);
}, Hf = (e, t, n) => t in e ? Of(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ft = (e, t, n) => Hf(e, typeof t != "symbol" ? t + "" : t, n), hs = (e, t, n) => t.has(e) || gu("Cannot " + n), wt = (e, t, n) => (hs(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Zr = (e, t, n) => t.has(e) ? gu("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Pi = (e, t, n, r) => (hs(e, t, "write to private field"), t.set(e, n), n), Tf = (e, t, n) => (hs(e, t, "access private method"), n);
const Nf = "5";
var il;
typeof window < "u" && ((il = window.__svelte ?? (window.__svelte = {})).v ?? (il.v = /* @__PURE__ */ new Set())).add(Nf);
let uo = !1, Df = !1;
function Lf() {
  uo = !0;
}
Lf();
const ms = 1, ys = 2, hu = 4, zf = 8, Af = 16, If = 1, Rf = 2, mu = 4, qf = 8, Zf = 16, yu = 1, Bf = 2, ws = "[", bs = "[!", xs = "]", Xr = {}, Wt = Symbol(), Xf = "http://www.w3.org/1999/xhtml", Yf = "http://www.w3.org/2000/svg", jf = !1;
function ra(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
var Ko = Array.isArray, Wf = Array.prototype.indexOf, $s = Array.from, Mi = Object.keys, Ho = Object.defineProperty, Yn = Object.getOwnPropertyDescriptor, wu = Object.getOwnPropertyDescriptors, Kf = Object.prototype, Ff = Array.prototype, Cs = Object.getPrototypeOf, al = Object.isExtensible;
function $o(e) {
  return typeof e == "function";
}
const St = () => {
};
function Gf(e) {
  return e();
}
function To(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const $n = 2, bu = 4, oa = 8, _s = 16, Gn = 32, Nr = 64, Vi = 128, on = 256, Oi = 512, qt = 1024, Tn = 2048, mr = 4096, jn = 8192, ia = 16384, Uf = 32768, co = 65536, Jf = 1 << 17, Qf = 1 << 19, xu = 1 << 20, Xa = 1 << 21, sr = Symbol("$state"), ks = Symbol("legacy props"), e1 = Symbol("");
function t1(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function n1() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function r1(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function o1() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function i1() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function a1(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function s1() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function l1() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function u1() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function aa(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let Ae = !1;
function rn(e) {
  Ae = e;
}
let We;
function Rt(e) {
  if (e === null)
    throw aa(), Xr;
  return We = e;
}
function Nn() {
  return Rt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ In(We)
  );
}
function X(e) {
  if (Ae) {
    if (/* @__PURE__ */ In(We) !== null)
      throw aa(), Xr;
    We = e;
  }
}
function Re(e = 1) {
  if (Ae) {
    for (var t = e, n = We; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ In(n);
    We = n;
  }
}
function Ya() {
  for (var e = 0, t = We; ; ) {
    if (t.nodeType === 8) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === xs) {
        if (e === 0) return t;
        e -= 1;
      } else (n === ws || n === bs) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ In(t)
    );
    t.remove(), t = r;
  }
}
function bn(e) {
  if (typeof e != "object" || e === null || sr in e)
    return e;
  const t = Cs(e);
  if (t !== Kf && t !== Ff)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Ko(e), o = /* @__PURE__ */ It(0), i = dt, a = (s) => {
    var l = dt;
    Dn(i);
    var u = s();
    return Dn(l), u;
  };
  return r && n.set("length", /* @__PURE__ */ It(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(s, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && s1();
        var c = n.get(l);
        return c === void 0 ? (c = a(() => /* @__PURE__ */ It(u.value)), n.set(l, c)) : ee(
          c,
          a(() => bn(u.value))
        ), !0;
      },
      deleteProperty(s, l) {
        var u = n.get(l);
        if (u === void 0)
          l in s && (n.set(
            l,
            a(() => /* @__PURE__ */ It(Wt))
          ), Va(o));
        else {
          if (r && typeof l == "string") {
            var c = (
              /** @type {Source<number>} */
              n.get("length")
            ), d = Number(l);
            Number.isInteger(d) && d < c.v && ee(c, d);
          }
          ee(u, Wt), Va(o);
        }
        return !0;
      },
      get(s, l, u) {
        var c;
        if (l === sr)
          return e;
        var d = n.get(l), v = l in s;
        if (d === void 0 && (!v || (c = Yn(s, l)) != null && c.writable) && (d = a(() => /* @__PURE__ */ It(bn(v ? s[l] : Wt))), n.set(l, d)), d !== void 0) {
          var p = f(d);
          return p === Wt ? void 0 : p;
        }
        return Reflect.get(s, l, u);
      },
      getOwnPropertyDescriptor(s, l) {
        var u = Reflect.getOwnPropertyDescriptor(s, l);
        if (u && "value" in u) {
          var c = n.get(l);
          c && (u.value = f(c));
        } else if (u === void 0) {
          var d = n.get(l), v = d == null ? void 0 : d.v;
          if (d !== void 0 && v !== Wt)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return u;
      },
      has(s, l) {
        var u;
        if (l === sr)
          return !0;
        var c = n.get(l), d = c !== void 0 && c.v !== Wt || Reflect.has(s, l);
        if (c !== void 0 || et !== null && (!d || (u = Yn(s, l)) != null && u.writable)) {
          c === void 0 && (c = a(() => /* @__PURE__ */ It(d ? bn(s[l]) : Wt)), n.set(l, c));
          var v = f(c);
          if (v === Wt)
            return !1;
        }
        return d;
      },
      set(s, l, u, c) {
        var d, v = n.get(l), p = l in s;
        if (r && l === "length")
          for (var h = u; h < /** @type {Source<number>} */
          v.v; h += 1) {
            var x = n.get(h + "");
            x !== void 0 ? ee(x, Wt) : h in s && (x = a(() => /* @__PURE__ */ It(Wt)), n.set(h + "", x));
          }
        v === void 0 ? (!p || (d = Yn(s, l)) != null && d.writable) && (v = a(() => /* @__PURE__ */ It(void 0)), ee(
          v,
          a(() => bn(u))
        ), n.set(l, v)) : (p = v.v !== Wt, ee(
          v,
          a(() => bn(u))
        ));
        var b = Reflect.getOwnPropertyDescriptor(s, l);
        if (b != null && b.set && b.set.call(c, u), !p) {
          if (r && typeof l == "string") {
            var $ = (
              /** @type {Source<number>} */
              n.get("length")
            ), g = Number(l);
            Number.isInteger(g) && g >= $.v && ee($, g + 1);
          }
          Va(o);
        }
        return !0;
      },
      ownKeys(s) {
        f(o);
        var l = Reflect.ownKeys(s).filter((d) => {
          var v = n.get(d);
          return v === void 0 || v.v !== Wt;
        });
        for (var [u, c] of n)
          c.v !== Wt && !(u in s) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        l1();
      }
    }
  );
}
function Va(e, t = 1) {
  ee(e, e.v + t);
}
var Kt, $u, Cu, _u;
function ja() {
  if (Kt === void 0) {
    Kt = window, $u = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Cu = Yn(t, "firstChild").get, _u = Yn(t, "nextSibling").get, al(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), al(n) && (n.__t = void 0);
  }
}
function Kn(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function kt(e) {
  return Cu.call(e);
}
// @__NO_SIDE_EFFECTS__
function In(e) {
  return _u.call(e);
}
function j(e, t) {
  if (!Ae)
    return /* @__PURE__ */ kt(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ kt(We)
  );
  if (n === null)
    n = We.appendChild(Kn());
  else if (t && n.nodeType !== 3) {
    var r = Kn();
    return n == null || n.before(r), Rt(r), r;
  }
  return Rt(n), n;
}
function Ce(e, t) {
  if (!Ae) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ kt(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ In(n) : n;
  }
  return We;
}
function q(e, t = 1, n = !1) {
  let r = Ae ? We : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ In(r);
  if (!Ae)
    return r;
  var i = r == null ? void 0 : r.nodeType;
  if (n && i !== 3) {
    var a = Kn();
    return r === null ? o == null || o.after(a) : r.before(a), Rt(a), a;
  }
  return Rt(r), /** @type {TemplateNode} */
  r;
}
function Ss(e) {
  e.textContent = "";
}
function ku(e) {
  return e === this.v;
}
function Es(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Ps(e) {
  return !Es(e, this.v);
}
// @__NO_SIDE_EFFECTS__
function Gr(e) {
  var t = $n | Tn, n = dt !== null && (dt.f & $n) !== 0 ? (
    /** @type {Derived} */
    dt
  ) : null;
  return et === null || n !== null && (n.f & on) !== 0 ? t |= on : et.f |= xu, {
    ctx: Qe,
    deps: null,
    effects: null,
    equals: ku,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: n ?? et
  };
}
// @__NO_SIDE_EFFECTS__
function Te(e) {
  const t = /* @__PURE__ */ Gr(e);
  return Au(t), t;
}
// @__NO_SIDE_EFFECTS__
function _e(e) {
  const t = /* @__PURE__ */ Gr(e);
  return t.equals = Ps, t;
}
function Su(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      Cn(
        /** @type {Effect} */
        t[n]
      );
  }
}
function c1(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & $n) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Eu(e) {
  var t, n = et;
  vr(c1(e));
  try {
    Su(e), t = Zu(e);
  } finally {
    vr(n);
  }
  return t;
}
function Pu(e) {
  var t = Eu(e), n = (ir || (e.f & on) !== 0) && e.deps !== null ? mr : qt;
  gn(e, n), e.equals(t) || (e.v = t, e.wv = Ru());
}
function Mu(e) {
  et === null && dt === null && r1(), dt !== null && (dt.f & on) !== 0 && et === null && n1(), Go && t1();
}
function d1(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Dr(e, t, n, r = !0) {
  var o = et, i = {
    ctx: Qe,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Tn,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: o,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (n)
    try {
      la(i), i.f |= Uf;
    } catch (l) {
      throw Cn(i), l;
    }
  else t !== null && ua(i);
  var a = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (xu | Vi)) === 0;
  if (!a && r && (o !== null && d1(i, o), dt !== null && (dt.f & $n) !== 0)) {
    var s = (
      /** @type {Derived} */
      dt
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return i;
}
function Ms(e) {
  const t = Dr(oa, null, !1);
  return gn(t, qt), t.teardown = e, t;
}
function vn(e) {
  Mu();
  var t = et !== null && (et.f & Gn) !== 0 && Qe !== null && !Qe.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      Qe
    );
    (n.e ?? (n.e = [])).push({
      fn: e,
      effect: et,
      reaction: dt
    });
  } else {
    var r = nn(e);
    return r;
  }
}
function f1(e) {
  return Mu(), fo(e);
}
function v1(e) {
  const t = Dr(Nr, e, !0);
  return () => {
    Cn(t);
  };
}
function p1(e) {
  const t = Dr(Nr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Ur(t, () => {
      Cn(t), r(void 0);
    }) : (Cn(t), r(void 0));
  });
}
function nn(e) {
  return Dr(bu, e, !1);
}
function be(e, t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    Qe
  ), r = { effect: null, ran: !1 };
  n.l.r1.push(r), r.effect = fo(() => {
    e(), !r.ran && (r.ran = !0, ee(n.l.r2, !0), Ln(t));
  });
}
function Vt() {
  var e = (
    /** @type {ComponentContextLegacy} */
    Qe
  );
  fo(() => {
    if (f(e.l.r2)) {
      for (var t of e.l.r1) {
        var n = t.effect;
        (n.f & qt) !== 0 && gn(n, mr), po(n) && la(n), t.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function fo(e) {
  return Dr(oa, e, !0);
}
function Ee(e, t = [], n = Gr) {
  const r = t.map(n);
  return vo(() => e(...r.map(f)));
}
function vo(e, t = 0) {
  return Dr(oa | _s | t, e, !0);
}
function fr(e, t = !0) {
  return Dr(oa | Gn, e, !0, t);
}
function Vu(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Go, r = dt;
    ll(!0), Dn(null);
    try {
      t.call(null);
    } finally {
      ll(n), Dn(r);
    }
  }
}
function Ou(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    var r = n.next;
    (n.f & Nr) !== 0 ? n.parent = null : Cn(n, t), n = r;
  }
}
function g1(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Gn) === 0 && Cn(t), t = n;
  }
}
function Cn(e, t = !0) {
  var n = !1;
  (t || (e.f & Qf) !== 0) && e.nodes_start !== null && (Hu(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), Ou(e, t && !n), Di(e, 0), gn(e, ia);
  var r = e.transitions;
  if (r !== null)
    for (const i of r)
      i.stop();
  Vu(e);
  var o = e.parent;
  o !== null && o.first !== null && Tu(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function Hu(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ In(e)
    );
    e.remove(), e = n;
  }
}
function Tu(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Ur(e, t) {
  var n = [];
  Vs(e, n, !0), Nu(n, () => {
    Cn(e), t && t();
  });
}
function Nu(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var o of e)
      o.out(r);
  } else
    t();
}
function Vs(e, t, n) {
  if ((e.f & jn) === 0) {
    if (e.f ^= jn, e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || n) && t.push(a);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & co) !== 0 || (r.f & Gn) !== 0;
      Vs(r, t, i ? n : !1), r = o;
    }
  }
}
function No(e) {
  Du(e, !0);
}
function Du(e, t) {
  if ((e.f & jn) !== 0) {
    e.f ^= jn, (e.f & qt) === 0 && (e.f ^= qt), po(e) && (gn(e, Tn), ua(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & co) !== 0 || (n.f & Gn) !== 0;
      Du(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
const h1 = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let Do = [], Lo = [];
function Lu() {
  var e = Do;
  Do = [], To(e);
}
function zu() {
  var e = Lo;
  Lo = [], To(e);
}
function Fo(e) {
  Do.length === 0 && queueMicrotask(Lu), Do.push(e);
}
function m1(e) {
  Lo.length === 0 && h1(zu), Lo.push(e);
}
function sl() {
  Do.length > 0 && Lu(), Lo.length > 0 && zu();
}
let wi = !1, Hi = !1, Ti = null, kr = !1, Go = !1;
function ll(e) {
  Go = e;
}
let Vo = [], dt = null, Vn = !1;
function Dn(e) {
  dt = e;
}
let et = null;
function vr(e) {
  et = e;
}
let pn = null;
function Au(e) {
  dt !== null && dt.f & Xa && (pn === null ? pn = [e] : pn.push(e));
}
let At = null, tn = 0, dn = null;
function y1(e) {
  dn = e;
}
let Iu = 1, Ni = 0, ir = !1;
function Ru() {
  return ++Iu;
}
function po(e) {
  var t, n = e.f;
  if ((n & Tn) !== 0)
    return !0;
  if ((n & mr) !== 0) {
    var r = e.deps, o = (n & on) !== 0;
    if (r !== null) {
      var i, a, s = (n & Oi) !== 0, l = o && et !== null && !ir, u = r.length;
      if (s || l) {
        var c = (
          /** @type {Derived} */
          e
        ), d = c.parent;
        for (i = 0; i < u; i++)
          a = r[i], (s || !((t = a == null ? void 0 : a.reactions) != null && t.includes(c))) && (a.reactions ?? (a.reactions = [])).push(c);
        s && (c.f ^= Oi), l && d !== null && (d.f & on) === 0 && (c.f ^= on);
      }
      for (i = 0; i < u; i++)
        if (a = r[i], po(
          /** @type {Derived} */
          a
        ) && Pu(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!o || et !== null && !ir) && gn(e, qt);
  }
  return !1;
}
function w1(e, t) {
  for (var n = t; n !== null; ) {
    if ((n.f & Vi) !== 0)
      try {
        n.fn(e);
        return;
      } catch {
        n.f ^= Vi;
      }
    n = n.parent;
  }
  throw wi = !1, e;
}
function ul(e) {
  return (e.f & ia) === 0 && (e.parent === null || (e.parent.f & Vi) === 0);
}
function sa(e, t, n, r) {
  if (wi) {
    if (n === null && (wi = !1), ul(t))
      throw e;
    return;
  }
  if (n !== null && (wi = !0), w1(e, t), ul(t))
    throw e;
}
function qu(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null)
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      pn != null && pn.includes(e) || ((i.f & $n) !== 0 ? qu(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? gn(i, Tn) : (i.f & qt) !== 0 && gn(i, mr), ua(
        /** @type {Effect} */
        i
      )));
    }
}
function Zu(e) {
  var t, n = At, r = tn, o = dn, i = dt, a = ir, s = pn, l = Qe, u = Vn, c = e.f;
  At = /** @type {null | Value[]} */
  null, tn = 0, dn = null, ir = (c & on) !== 0 && (Vn || !kr || dt === null), dt = (c & (Gn | Nr)) === 0 ? e : null, pn = null, dl(e.ctx), Vn = !1, Ni++, e.f |= Xa;
  try {
    var d = (
      /** @type {Function} */
      (0, e.fn)()
    ), v = e.deps;
    if (At !== null) {
      var p;
      if (Di(e, tn), v !== null && tn > 0)
        for (v.length = tn + At.length, p = 0; p < At.length; p++)
          v[tn + p] = At[p];
      else
        e.deps = v = At;
      if (!ir)
        for (p = tn; p < v.length; p++)
          ((t = v[p]).reactions ?? (t.reactions = [])).push(e);
    } else v !== null && tn < v.length && (Di(e, tn), v.length = tn);
    if (ca() && dn !== null && !Vn && v !== null && (e.f & ($n | mr | Tn)) === 0)
      for (p = 0; p < /** @type {Source[]} */
      dn.length; p++)
        qu(
          dn[p],
          /** @type {Effect} */
          e
        );
    return i !== null && i !== e && (Ni++, dn !== null && (o === null ? o = dn : o.push(.../** @type {Source[]} */
    dn))), d;
  } finally {
    At = n, tn = r, dn = o, dt = i, ir = a, pn = s, dl(l), Vn = u, e.f ^= Xa;
  }
}
function b1(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Wf.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && (t.f & $n) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (At === null || !At.includes(t)) && (gn(t, mr), (t.f & (on | Oi)) === 0 && (t.f ^= Oi), Su(
    /** @type {Derived} **/
    t
  ), Di(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Di(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      b1(e, n[r]);
}
function la(e) {
  var t = e.f;
  if ((t & ia) === 0) {
    gn(e, qt);
    var n = et, r = Qe, o = kr;
    et = e, kr = !0;
    try {
      (t & _s) !== 0 ? g1(e) : Ou(e), Vu(e);
      var i = Zu(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Iu;
      var a = e.deps, s;
      jf && Df && e.f & Tn;
    } catch (l) {
      sa(l, e, n, r || e.ctx);
    } finally {
      kr = o, et = n;
    }
  }
}
function x1() {
  try {
    o1();
  } catch (e) {
    if (Ti !== null)
      sa(e, Ti, null);
    else
      throw e;
  }
}
function Bu() {
  var e = kr;
  try {
    var t = 0;
    for (kr = !0; Vo.length > 0; ) {
      t++ > 1e3 && x1();
      var n = Vo, r = n.length;
      Vo = [];
      for (var o = 0; o < r; o++) {
        var i = C1(n[o]);
        $1(i);
      }
      zo.clear();
    }
  } finally {
    Hi = !1, kr = e, Ti = null;
  }
}
function $1(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if ((r.f & (ia | jn)) === 0)
        try {
          po(r) && (la(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? Tu(r) : r.fn = null));
        } catch (o) {
          sa(o, r, null, r.ctx);
        }
    }
}
function ua(e) {
  Hi || (Hi = !0, queueMicrotask(Bu));
  for (var t = Ti = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if ((n & (Nr | Gn)) !== 0) {
      if ((n & qt) === 0) return;
      t.f ^= qt;
    }
  }
  Vo.push(t);
}
function C1(e) {
  for (var t = [], n = e; n !== null; ) {
    var r = n.f, o = (r & (Gn | Nr)) !== 0, i = o && (r & qt) !== 0;
    if (!i && (r & jn) === 0) {
      if ((r & bu) !== 0)
        t.push(n);
      else if (o)
        n.f ^= qt;
      else
        try {
          po(n) && la(n);
        } catch (l) {
          sa(l, n, null, n.ctx);
        }
      var a = n.first;
      if (a !== null) {
        n = a;
        continue;
      }
    }
    var s = n.parent;
    for (n = n.next; n === null && s !== null; )
      n = s.next, s = s.parent;
  }
  return t;
}
function m(e) {
  var t;
  for (sl(); Vo.length > 0; )
    Hi = !0, Bu(), sl();
  return (
    /** @type {T} */
    t
  );
}
function f(e) {
  var t = e.f, n = (t & $n) !== 0;
  if (dt !== null && !Vn) {
    if (!(pn != null && pn.includes(e))) {
      var r = dt.deps;
      e.rv < Ni && (e.rv = Ni, At === null && r !== null && r[tn] === e ? tn++ : At === null ? At = [e] : (!ir || !At.includes(e)) && At.push(e));
    }
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), i = o.parent;
    i !== null && (i.f & on) === 0 && (o.f ^= on);
  }
  return n && (o = /** @type {Derived} */
  e, po(o) && Pu(o)), Go && zo.has(e) ? zo.get(e) : e.v;
}
function Ln(e) {
  var t = Vn;
  try {
    return Vn = !0, e();
  } finally {
    Vn = t;
  }
}
const _1 = -7169;
function gn(e, t) {
  e.f = e.f & _1 | t;
}
function re(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (sr in e)
      Wa(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && sr in n && Wa(n);
      }
  }
}
function Wa(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        Wa(e[r], t);
      } catch {
      }
    const n = Cs(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = wu(n);
      for (let o in r) {
        const i = r[o].get;
        if (i)
          try {
            i.call(e);
          } catch {
          }
      }
    }
  }
}
const zo = /* @__PURE__ */ new Map();
function Jr(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: ku,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function It(e, t) {
  const n = Jr(e);
  return Au(n), n;
}
// @__NO_SIDE_EFFECTS__
function ue(e, t = !1) {
  var n;
  const r = Jr(e);
  return t || (r.equals = Ps), uo && Qe !== null && Qe.l !== null && ((n = Qe.l).s ?? (n.s = [])).push(r), r;
}
function ee(e, t, n = !1) {
  dt !== null && !Vn && ca() && (dt.f & ($n | _s)) !== 0 && !(pn != null && pn.includes(e)) && u1();
  let r = n ? bn(t) : t;
  return Ka(e, r);
}
function Ka(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Go ? zo.set(e, t) : zo.set(e, n), e.v = t, (e.f & $n) !== 0 && ((e.f & Tn) !== 0 && Eu(
      /** @type {Derived} */
      e
    ), gn(e, (e.f & on) === 0 ? qt : mr)), e.wv = Ru(), Xu(e, Tn), ca() && et !== null && (et.f & qt) !== 0 && (et.f & (Gn | Nr)) === 0 && (dn === null ? y1([e]) : dn.push(e));
  }
  return t;
}
function cl(e, t = 1) {
  var n = f(e), r = t === 1 ? n++ : n--;
  return ee(e, n), r;
}
function Xu(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = ca(), o = n.length, i = 0; i < o; i++) {
      var a = n[i], s = a.f;
      (s & Tn) === 0 && (!r && a === et || (gn(a, t), (s & (qt | on)) !== 0 && ((s & $n) !== 0 ? Xu(
        /** @type {Derived} */
        a,
        mr
      ) : ua(
        /** @type {Effect} */
        a
      ))));
    }
}
let Qe = null;
function dl(e) {
  Qe = e;
}
function Pr(e) {
  return (
    /** @type {T} */
    Os().get(e)
  );
}
function Qr(e, t) {
  return Os().set(e, t), t;
}
function k1(e) {
  return Os().has(e);
}
function he(e, t = !1, n) {
  var r = Qe = {
    p: Qe,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
  uo && !t && (Qe.l = {
    s: null,
    u: null,
    r1: [],
    r2: Jr(!1)
  }), Ms(() => {
    r.d = !0;
  });
}
function me(e) {
  const t = Qe;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const a = t.e;
    if (a !== null) {
      var n = et, r = dt;
      t.e = null;
      try {
        for (var o = 0; o < a.length; o++) {
          var i = a[o];
          vr(i.effect), Dn(i.reaction), nn(i.fn);
        }
      } finally {
        vr(n), Dn(r);
      }
    }
    Qe = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function ca() {
  return !uo || Qe !== null && Qe.l === null;
}
function Os(e) {
  return Qe === null && ra(), Qe.c ?? (Qe.c = new Map(S1(Qe) || void 0));
}
function S1(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
function E1(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const P1 = [
  "beforeinput",
  "click",
  "change",
  "dblclick",
  "contextmenu",
  "focusin",
  "focusout",
  "input",
  "keydown",
  "keyup",
  "mousedown",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "pointerdown",
  "pointermove",
  "pointerout",
  "pointerover",
  "pointerup",
  "touchend",
  "touchmove",
  "touchstart"
];
function M1(e) {
  return P1.includes(e);
}
const V1 = {
  // no `class: 'className'` because we handle that separately
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly",
  defaultvalue: "defaultValue",
  defaultchecked: "defaultChecked",
  srcobject: "srcObject",
  novalidate: "noValidate",
  allowfullscreen: "allowFullscreen",
  disablepictureinpicture: "disablePictureInPicture",
  disableremoteplayback: "disableRemotePlayback"
};
function O1(e) {
  return e = e.toLowerCase(), V1[e] ?? e;
}
const H1 = ["touchstart", "touchmove"];
function T1(e) {
  return H1.includes(e);
}
const N1 = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function D1(e) {
  return N1.includes(
    /** @type {RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function L1(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, Fo(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function z1(e) {
  Ae && /* @__PURE__ */ kt(e) !== null && Ss(e);
}
let fl = !1;
function A1() {
  fl || (fl = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        var t;
        if (!e.defaultPrevented)
          for (
            const n of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            (t = n.__on_r) == null || t.call(n);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function I1(e) {
  var t = dt, n = et;
  Dn(null), vr(null);
  try {
    return e();
  } finally {
    Dn(t), vr(n);
  }
}
const Yu = /* @__PURE__ */ new Set(), Fa = /* @__PURE__ */ new Set();
function ju(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || So.call(t, i), !i.cancelBubble)
      return I1(() => n == null ? void 0 : n.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Fo(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function ft(e, t, n, r, o) {
  var i = { capture: r, passive: o }, a = ju(e, t, n, i);
  (t === document.body || t === window || t === document) && Ms(() => {
    t.removeEventListener(e, a, i);
  });
}
function go(e) {
  for (var t = 0; t < e.length; t++)
    Yu.add(e[t]);
  for (var n of Fa)
    n(e);
}
function So(e) {
  var t, n = this, r = (
    /** @type {Node} */
    n.ownerDocument
  ), o = e.type, i = ((t = e.composedPath) == null ? void 0 : t.call(e)) || [], a = (
    /** @type {null | Element} */
    i[0] || e.target
  ), s = 0, l = e.__root;
  if (l) {
    var u = i.indexOf(l);
    if (u !== -1 && (n === document || n === /** @type {any} */
    window)) {
      e.__root = n;
      return;
    }
    var c = i.indexOf(n);
    if (c === -1)
      return;
    u <= c && (s = u);
  }
  if (a = /** @type {Element} */
  i[s] || e.target, a !== n) {
    Ho(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var d = dt, v = et;
    Dn(null), vr(null);
    try {
      for (var p, h = []; a !== null; ) {
        var x = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var b = a["__" + o];
          if (b != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (Ko(b)) {
              var [$, ...g] = b;
              $.apply(a, [e, ...g]);
            } else
              b.call(a, e);
        } catch (_) {
          p ? h.push(_) : p = _;
        }
        if (e.cancelBubble || x === n || x === null)
          break;
        a = x;
      }
      if (p) {
        for (let _ of h)
          queueMicrotask(() => {
            throw _;
          });
        throw p;
      }
    } finally {
      e.__root = n, delete e.currentTarget, Dn(d), vr(v);
    }
  }
}
function Hs(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Jt(e, t) {
  var n = (
    /** @type {Effect} */
    et
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function ie(e, t) {
  var n = (t & yu) !== 0, r = (t & Bf) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (Ae)
      return Jt(We, null), We;
    o === void 0 && (o = Hs(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ kt(o)));
    var a = (
      /** @type {TemplateNode} */
      r || $u ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ kt(a)
      ), l = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      Jt(s, l);
    } else
      Jt(a, a);
    return a;
  };
}
// @__NO_SIDE_EFFECTS__
function Oe(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & yu) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, a;
  return () => {
    if (Ae)
      return Jt(We, null), We;
    if (!a) {
      var s = (
        /** @type {DocumentFragment} */
        Hs(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ kt(s)
      );
      if (o)
        for (a = document.createDocumentFragment(); /* @__PURE__ */ kt(l); )
          a.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ kt(l)
          );
      else
        a = /** @type {Element} */
        /* @__PURE__ */ kt(l);
    }
    var u = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    if (o) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ kt(u)
      ), d = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      Jt(c, d);
    } else
      Jt(u, u);
    return u;
  };
}
function je(e = "") {
  if (!Ae) {
    var t = Kn(e + "");
    return Jt(t, t), t;
  }
  var n = We;
  return n.nodeType !== 3 && (n.before(n = Kn()), Rt(n)), Jt(n, n), n;
}
function lt() {
  if (Ae)
    return Jt(We, null), We;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Kn();
  return e.append(t, n), Jt(t, n), e;
}
function z(e, t) {
  if (Ae) {
    et.nodes_end = We, Nn();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function bt(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
}
function Wu(e, t) {
  return Ku(e, t);
}
function R1(e, t) {
  ja(), t.intro = t.intro ?? !1;
  const n = t.target, r = Ae, o = We;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ kt(n)
    ); i && (i.nodeType !== 8 || /** @type {Comment} */
    i.data !== ws); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ In(i);
    if (!i)
      throw Xr;
    rn(!0), Rt(
      /** @type {Comment} */
      i
    ), Nn();
    const a = Ku(e, { ...t, anchor: i });
    if (We === null || We.nodeType !== 8 || /** @type {Comment} */
    We.data !== xs)
      throw aa(), Xr;
    return rn(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a === Xr)
      return t.recover === !1 && i1(), ja(), Ss(n), rn(!1), Wu(e, t);
    throw a;
  } finally {
    rn(r), Rt(o);
  }
}
const Ir = /* @__PURE__ */ new Map();
function Ku(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: a = !0 }) {
  ja();
  var s = /* @__PURE__ */ new Set(), l = (d) => {
    for (var v = 0; v < d.length; v++) {
      var p = d[v];
      if (!s.has(p)) {
        s.add(p);
        var h = T1(p);
        t.addEventListener(p, So, { passive: h });
        var x = Ir.get(p);
        x === void 0 ? (document.addEventListener(p, So, { passive: h }), Ir.set(p, 1)) : Ir.set(p, x + 1);
      }
    }
  };
  l($s(Yu)), Fa.add(l);
  var u = void 0, c = p1(() => {
    var d = n ?? t.appendChild(Kn());
    return fr(() => {
      if (i) {
        he({});
        var v = (
          /** @type {ComponentContext} */
          Qe
        );
        v.c = i;
      }
      o && (r.$$events = o), Ae && Jt(
        /** @type {TemplateNode} */
        d,
        null
      ), u = e(d, r) || {}, Ae && (et.nodes_end = We), i && me();
    }), () => {
      var v;
      for (var p of s) {
        t.removeEventListener(p, So);
        var h = (
          /** @type {number} */
          Ir.get(p)
        );
        --h === 0 ? (document.removeEventListener(p, So), Ir.delete(p)) : Ir.set(p, h);
      }
      Fa.delete(l), d !== n && ((v = d.parentNode) == null || v.removeChild(d));
    };
  });
  return Ga.set(u, c), u;
}
let Ga = /* @__PURE__ */ new WeakMap();
function q1(e, t) {
  const n = Ga.get(e);
  return n ? (Ga.delete(e), n(t)) : Promise.resolve();
}
function xe(e, t, [n, r] = [0, 0]) {
  Ae && n === 0 && Nn();
  var o = e, i = null, a = null, s = Wt, l = n > 0 ? co : 0, u = !1;
  const c = (v, p = !0) => {
    u = !0, d(p, v);
  }, d = (v, p) => {
    if (s === (s = v)) return;
    let h = !1;
    if (Ae && r !== -1) {
      if (n === 0) {
        const b = (
          /** @type {Comment} */
          o.data
        );
        b === ws ? r = 0 : b === bs ? r = 1 / 0 : (r = parseInt(b.substring(1)), r !== r && (r = s ? 1 / 0 : -1));
      }
      const x = r > n;
      !!s === x && (o = Ya(), Rt(o), rn(!1), h = !0, r = -1);
    }
    s ? (i ? No(i) : p && (i = fr(() => p(o))), a && Ur(a, () => {
      a = null;
    })) : (a ? No(a) : p && (a = fr(() => p(o, [n + 1, r]))), i && Ur(i, () => {
      i = null;
    })), h && rn(!0);
  };
  vo(() => {
    u = !1, t(c), u || d(null, null);
  }, l), Ae && (o = We);
}
function eo(e, t) {
  return t;
}
function Z1(e, t, n, r) {
  for (var o = [], i = t.length, a = 0; a < i; a++)
    Vs(t[a].e, o, !0);
  var s = i > 0 && o.length === 0 && n !== null;
  if (s) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    Ss(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), rr(e, t[0].prev, t[i - 1].next);
  }
  Nu(o, () => {
    for (var u = 0; u < i; u++) {
      var c = t[u];
      s || (r.delete(c.k), rr(e, c.prev, c.next)), Cn(c.e, !s);
    }
  });
}
function Zt(e, t, n, r, o, i = null) {
  var a = e, s = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & hu) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    a = Ae ? Rt(
      /** @type {Comment | Text} */
      /* @__PURE__ */ kt(u)
    ) : u.appendChild(Kn());
  }
  Ae && Nn();
  var c = null, d = !1, v = /* @__PURE__ */ _e(() => {
    var p = n();
    return Ko(p) ? p : p == null ? [] : $s(p);
  });
  vo(() => {
    var p = f(v), h = p.length;
    if (d && h === 0)
      return;
    d = h === 0;
    let x = !1;
    if (Ae) {
      var b = (
        /** @type {Comment} */
        a.data === bs
      );
      b !== (h === 0) && (a = Ya(), Rt(a), rn(!1), x = !0);
    }
    if (Ae) {
      for (var $ = null, g, _ = 0; _ < h; _++) {
        if (We.nodeType === 8 && /** @type {Comment} */
        We.data === xs) {
          a = /** @type {Comment} */
          We, x = !0, rn(!1);
          break;
        }
        var w = p[_], k = r(w, _);
        g = Fu(
          We,
          s,
          $,
          null,
          w,
          k,
          _,
          o,
          t,
          n
        ), s.items.set(k, g), $ = g;
      }
      h > 0 && Rt(Ya());
    }
    Ae || B1(p, s, a, o, t, r, n), i !== null && (h === 0 ? c ? No(c) : c = fr(() => i(a)) : c !== null && Ur(c, () => {
      c = null;
    })), x && rn(!0), f(v);
  }), Ae && (a = We);
}
function B1(e, t, n, r, o, i, a) {
  var s, l, u, c, d = (o & zf) !== 0, v = (o & (ms | ys)) !== 0, p = e.length, h = t.items, x = t.first, b = x, $, g = null, _, w = [], k = [], V, S, N, T;
  if (d)
    for (T = 0; T < p; T += 1)
      V = e[T], S = i(V, T), N = h.get(S), N !== void 0 && ((s = N.a) == null || s.measure(), (_ ?? (_ = /* @__PURE__ */ new Set())).add(N));
  for (T = 0; T < p; T += 1) {
    if (V = e[T], S = i(V, T), N = h.get(S), N === void 0) {
      var I = b ? (
        /** @type {TemplateNode} */
        b.e.nodes_start
      ) : n;
      g = Fu(
        I,
        t,
        g,
        g === null ? t.first : g.next,
        V,
        S,
        T,
        r,
        o,
        a
      ), h.set(S, g), w = [], k = [], b = g.next;
      continue;
    }
    if (v && X1(N, V, T, o), (N.e.f & jn) !== 0 && (No(N.e), d && ((l = N.a) == null || l.unfix(), (_ ?? (_ = /* @__PURE__ */ new Set())).delete(N))), N !== b) {
      if ($ !== void 0 && $.has(N)) {
        if (w.length < k.length) {
          var R = k[0], L;
          g = R.prev;
          var Z = w[0], E = w[w.length - 1];
          for (L = 0; L < w.length; L += 1)
            vl(w[L], R, n);
          for (L = 0; L < k.length; L += 1)
            $.delete(k[L]);
          rr(t, Z.prev, E.next), rr(t, g, Z), rr(t, E, R), b = R, g = E, T -= 1, w = [], k = [];
        } else
          $.delete(N), vl(N, b, n), rr(t, N.prev, N.next), rr(t, N, g === null ? t.first : g.next), rr(t, g, N), g = N;
        continue;
      }
      for (w = [], k = []; b !== null && b.k !== S; )
        (b.e.f & jn) === 0 && ($ ?? ($ = /* @__PURE__ */ new Set())).add(b), k.push(b), b = b.next;
      if (b === null)
        continue;
      N = b;
    }
    w.push(N), g = N, b = N.next;
  }
  if (b !== null || $ !== void 0) {
    for (var C = $ === void 0 ? [] : $s($); b !== null; )
      (b.e.f & jn) === 0 && C.push(b), b = b.next;
    var P = C.length;
    if (P > 0) {
      var H = (o & hu) !== 0 && p === 0 ? n : null;
      if (d) {
        for (T = 0; T < P; T += 1)
          (u = C[T].a) == null || u.measure();
        for (T = 0; T < P; T += 1)
          (c = C[T].a) == null || c.fix();
      }
      Z1(t, C, H, h);
    }
  }
  d && Fo(() => {
    var M;
    if (_ !== void 0)
      for (N of _)
        (M = N.a) == null || M.apply();
  }), et.first = t.first && t.first.e, et.last = g && g.e;
}
function X1(e, t, n, r) {
  (r & ms) !== 0 && Ka(e.v, t), (r & ys) !== 0 ? Ka(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function Fu(e, t, n, r, o, i, a, s, l, u) {
  var c = (l & ms) !== 0, d = (l & Af) === 0, v = c ? d ? /* @__PURE__ */ ue(o) : Jr(o) : o, p = (l & ys) === 0 ? a : Jr(a), h = {
    i: p,
    v,
    k: i,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  try {
    return h.e = fr(() => s(e, v, p, u), Ae), h.e.prev = n && n.e, h.e.next = r && r.e, n === null ? t.first = h : (n.next = h, n.e.next = h.e), r !== null && (r.prev = h, r.e.prev = h.e), h;
  } finally {
  }
}
function vl(e, t, n) {
  for (var r = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : n, o = t ? (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ) : n, i = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); i !== r; ) {
    var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ In(i)
    );
    o.before(i), i = a;
  }
}
function rr(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function Ts(e, t, n = !1, r = !1, o = !1) {
  var i = e, a = "";
  Ee(() => {
    var s = (
      /** @type {Effect} */
      et
    );
    if (a === (a = t() ?? "")) {
      Ae && Nn();
      return;
    }
    if (s.nodes_start !== null && (Hu(
      s.nodes_start,
      /** @type {TemplateNode} */
      s.nodes_end
    ), s.nodes_start = s.nodes_end = null), a !== "") {
      if (Ae) {
        We.data;
        for (var l = Nn(), u = l; l !== null && (l.nodeType !== 8 || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ In(l);
        if (l === null)
          throw aa(), Xr;
        Jt(We, u), i = Rt(l);
        return;
      }
      var c = a + "";
      n ? c = `<svg>${c}</svg>` : r && (c = `<math>${c}</math>`);
      var d = Hs(c);
      if ((n || r) && (d = /** @type {Element} */
      /* @__PURE__ */ kt(d)), Jt(
        /** @type {TemplateNode} */
        /* @__PURE__ */ kt(d),
        /** @type {TemplateNode} */
        d.lastChild
      ), n || r)
        for (; /* @__PURE__ */ kt(d); )
          i.before(
            /** @type {Node} */
            /* @__PURE__ */ kt(d)
          );
      else
        i.before(d);
    }
  });
}
function Dt(e, t, n, r, o) {
  var i;
  Ae && Nn();
  var a = (i = t.$$slots) == null ? void 0 : i[n], s = !1;
  a === !0 && (a = t[n === "default" ? "children" : n], s = !0), a === void 0 || a(e, s ? () => r : r);
}
function Y1(e) {
  const t = {};
  e.children && (t.default = !0);
  for (const n in e.$$slots)
    t[n] = !0;
  return t;
}
function Mr(e, t, ...n) {
  var r = e, o = St, i;
  vo(() => {
    o !== (o = t()) && (i && (Cn(i), i = null), i = fr(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, co), Ae && (r = We);
}
function Gu(e, t, n) {
  Ae && Nn();
  var r = e, o, i;
  vo(() => {
    o !== (o = t()) && (i && (Ur(i), i = null), o && (i = fr(() => n(r, o))));
  }, co), Ae && (r = We);
}
function j1(e, t, n, r, o, i) {
  let a = Ae;
  Ae && Nn();
  var s, l, u = null;
  Ae && We.nodeType === 1 && (u = /** @type {Element} */
  We, Nn());
  var c = (
    /** @type {TemplateNode} */
    Ae ? We : e
  ), d;
  vo(() => {
    const v = t() || null;
    var p = v === "svg" ? Yf : null;
    v !== s && (d && (v === null ? Ur(d, () => {
      d = null, l = null;
    }) : v === l ? No(d) : Cn(d)), v && v !== l && (d = fr(() => {
      if (u = Ae ? (
        /** @type {Element} */
        u
      ) : p ? document.createElementNS(p, v) : document.createElement(v), Jt(u, u), r) {
        Ae && D1(v) && u.append(document.createComment(""));
        var h = (
          /** @type {TemplateNode} */
          Ae ? /* @__PURE__ */ kt(u) : u.appendChild(Kn())
        );
        Ae && (h === null ? rn(!1) : Rt(h)), r(u, h);
      }
      et.nodes_end = u, c.before(u);
    })), s = v, s && (l = s));
  }, co), a && (rn(!0), Rt(c));
}
function ot(e, t) {
  Fo(() => {
    var n = e.getRootNode(), r = (
      /** @type {ShadowRoot} */
      n.host ? (
        /** @type {ShadowRoot} */
        n
      ) : (
        /** @type {Document} */
        n.head ?? /** @type {Document} */
        n.ownerDocument.head
      )
    );
    if (!r.querySelector("#" + t.hash)) {
      const o = document.createElement("style");
      o.id = t.hash, o.textContent = t.code, r.appendChild(o);
    }
  });
}
function Nt(e, t, n) {
  nn(() => {
    var r = Ln(() => t(e, n == null ? void 0 : n()) || {});
    if (n && r != null && r.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      fo(() => {
        var a = n();
        re(a), o && Es(i, a) && (i = a, r.update(a));
      }), o = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Uu(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Uu(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function W1() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Uu(e)) && (r && (r += " "), r += t);
  return r;
}
function Sn(e) {
  return typeof e == "object" ? W1(e) : e ?? "";
}
const pl = [...` 	
\r\f \v\uFEFF`];
function K1(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var i = o.length, a = 0; (a = r.indexOf(o, a)) >= 0; ) {
          var s = a + i;
          (a === 0 || pl.includes(r[a - 1])) && (s === r.length || pl.includes(r[s])) ? r = (a === 0 ? "" : r.substring(0, a)) + r.substring(s + 1) : a = s;
        }
  }
  return r === "" ? null : r;
}
function gl(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var o in e) {
    var i = e[o];
    i != null && i !== "" && (r += " " + o + ": " + i + n);
  }
  return r;
}
function Oa(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function F1(e, t) {
  if (t) {
    var n = "", r, o;
    if (Array.isArray(t) ? (r = t[0], o = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, a = 0, s = !1, l = [];
      r && l.push(...Object.keys(r).map(Oa)), o && l.push(...Object.keys(o).map(Oa));
      var u = 0, c = -1;
      const x = e.length;
      for (var d = 0; d < x; d++) {
        var v = e[d];
        if (s ? v === "/" && e[d - 1] === "*" && (s = !1) : i ? i === v && (i = !1) : v === "/" && e[d + 1] === "*" ? s = !0 : v === '"' || v === "'" ? i = v : v === "(" ? a++ : v === ")" && a--, !s && i === !1 && a === 0) {
          if (v === ":" && c === -1)
            c = d;
          else if (v === ";" || d === x - 1) {
            if (c !== -1) {
              var p = Oa(e.substring(u, c).trim());
              if (!l.includes(p)) {
                v !== ";" && d++;
                var h = e.substring(u, d).trim();
                n += " " + h + ";";
              }
            }
            u = d + 1, c = -1;
          }
        }
      }
    }
    return r && (n += gl(r)), o && (n += gl(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function Lt(e, t, n, r, o, i) {
  var a = e.__className;
  if (Ae || a !== n || a === void 0) {
    var s = K1(n, r, i);
    (!Ae || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e.__className = n;
  } else if (i && o !== i)
    for (var l in i) {
      var u = !!i[l];
      (o == null || u !== !!o[l]) && e.classList.toggle(l, u);
    }
  return i;
}
function Ha(e, t = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    t[o] !== i && (n[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, i, r));
  }
}
function $t(e, t, n, r) {
  var o = e.__style;
  if (Ae || o !== t) {
    var i = F1(t, r);
    (!Ae || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (Ha(e, n == null ? void 0 : n[0], r[0]), Ha(e, n == null ? void 0 : n[1], r[1], "important")) : Ha(e, n, r));
  return r;
}
const Co = Symbol("class"), $r = Symbol("style"), Ju = Symbol("is custom element"), Qu = Symbol("is html");
function lr(e) {
  if (Ae) {
    var t = !1, n = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var r = e.value;
          Se(e, "value", null), e.value = r;
        }
        if (e.hasAttribute("checked")) {
          var o = e.checked;
          Se(e, "checked", null), e.checked = o;
        }
      }
    };
    e.__on_r = n, m1(n), A1();
  }
}
function bi(e, t) {
  var n = da(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function G1(e, t) {
  var n = da(e);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  t ?? void 0) && (e.checked = t);
}
function U1(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function Se(e, t, n, r) {
  var o = da(e);
  Ae && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[e1] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && ec(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function sn(e, t, n, r, o = !1) {
  var i = da(e), a = i[Ju], s = !i[Qu];
  let l = Ae && a;
  l && rn(!1);
  var u = t || {}, c = e.tagName === "OPTION";
  for (var d in t)
    d in n || (n[d] = null);
  n.class ? n.class = Sn(n.class) : (r || n[Co]) && (n.class = null), n[$r] && (n.style ?? (n.style = null));
  var v = ec(e);
  for (const _ in n) {
    let w = n[_];
    if (c && _ === "value" && w == null) {
      e.value = e.__value = "", u[_] = w;
      continue;
    }
    if (_ === "class") {
      var p = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Lt(e, p, w, r, t == null ? void 0 : t[Co], n[Co]), u[_] = w, u[Co] = n[Co];
      continue;
    }
    if (_ === "style") {
      $t(e, w, t == null ? void 0 : t[$r], n[$r]), u[_] = w, u[$r] = n[$r];
      continue;
    }
    var h = u[_];
    if (w !== h) {
      u[_] = w;
      var x = _[0] + _[1];
      if (x !== "$$")
        if (x === "on") {
          const k = {}, V = "$$" + _;
          let S = _.slice(2);
          var b = M1(S);
          if (E1(S) && (S = S.slice(0, -7), k.capture = !0), !b && h) {
            if (w != null) continue;
            e.removeEventListener(S, u[V], k), u[V] = null;
          }
          if (w != null)
            if (b)
              e[`__${S}`] = w, go([S]);
            else {
              let N = function(T) {
                u[_].call(this, T);
              };
              u[V] = ju(S, e, N, k);
            }
          else b && (e[`__${S}`] = void 0);
        } else if (_ === "style")
          Se(e, _, w);
        else if (_ === "autofocus")
          L1(
            /** @type {HTMLElement} */
            e,
            !!w
          );
        else if (!a && (_ === "__value" || _ === "value" && w != null))
          e.value = e.__value = w;
        else if (_ === "selected" && c)
          U1(
            /** @type {HTMLOptionElement} */
            e,
            w
          );
        else {
          var $ = _;
          s || ($ = O1($));
          var g = $ === "defaultValue" || $ === "defaultChecked";
          if (w == null && !a && !g)
            if (i[_] = null, $ === "value" || $ === "checked") {
              let k = (
                /** @type {HTMLInputElement} */
                e
              );
              const V = t === void 0;
              if ($ === "value") {
                let S = k.defaultValue;
                k.removeAttribute($), k.defaultValue = S, k.value = k.__value = V ? S : null;
              } else {
                let S = k.defaultChecked;
                k.removeAttribute($), k.defaultChecked = S, k.checked = V ? S : !1;
              }
            } else
              e.removeAttribute(_);
          else g || v.includes($) && (a || typeof w != "string") ? e[$] = w : typeof w != "function" && Se(e, $, w);
        }
    }
  }
  return l && rn(!0), u;
}
function da(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Ju]: e.nodeName.includes("-"),
      [Qu]: e.namespaceURI === Xf
    })
  );
}
var hl = /* @__PURE__ */ new Map();
function ec(e) {
  var t = hl.get(e.nodeName);
  if (t) return t;
  hl.set(e.nodeName, t = []);
  for (var n, r = e, o = Element.prototype; o !== r; ) {
    n = wu(r);
    for (var i in n)
      n[i].set && t.push(i);
    r = Cs(r);
  }
  return t;
}
var Cr, Oo, xi, Ua, tc;
const Ja = class {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    Zr(this, Ua), Zr(this, Cr, /* @__PURE__ */ new WeakMap()), Zr(this, Oo), Zr(this, xi), Pi(this, xi, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var r = wt(this, Cr).get(t) || /* @__PURE__ */ new Set();
    return r.add(n), wt(this, Cr).set(t, r), Tf(this, Ua, tc).call(this).observe(t, wt(this, xi)), () => {
      var o = wt(this, Cr).get(t);
      o.delete(n), o.size === 0 && (wt(this, Cr).delete(t), wt(this, Oo).unobserve(t));
    };
  }
};
Cr = /* @__PURE__ */ new WeakMap(), Oo = /* @__PURE__ */ new WeakMap(), xi = /* @__PURE__ */ new WeakMap(), Ua = /* @__PURE__ */ new WeakSet(), tc = function() {
  return wt(this, Oo) ?? Pi(this, Oo, new ResizeObserver(
    /** @param {any} entries */
    (e) => {
      for (var t of e) {
        Ja.entries.set(t.target, t);
        for (var n of wt(this, Cr).get(t.target) || [])
          n(t);
      }
    }
  ));
}, /** @static */
Ft(Ja, "entries", /* @__PURE__ */ new WeakMap());
let J1 = Ja;
var Q1 = /* @__PURE__ */ new J1({
  box: "border-box"
});
function ml(e, t, n) {
  var r = Q1.observe(e, () => n(e[t]));
  nn(() => (Ln(() => n(e[t])), r));
}
function yl(e, t) {
  return e === t || (e == null ? void 0 : e[sr]) === t;
}
function zn(e = {}, t, n, r) {
  return nn(() => {
    var o, i;
    return fo(() => {
      o = i, i = [], Ln(() => {
        e !== n(...i) && (t(e, ...i), o && yl(n(...o), e) && t(null, ...o));
      });
    }), () => {
      Fo(() => {
        i && yl(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function Ye(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    Qe
  ), n = t.l.u;
  if (!n) return;
  let r = () => re(t.s);
  if (e) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const a = /* @__PURE__ */ Gr(() => {
      let s = !1;
      const l = t.s;
      for (const u in l)
        l[u] !== i[u] && (i[u] = l[u], s = !0);
      return s && o++, o;
    });
    r = () => f(a);
  }
  n.b.length && f1(() => {
    wl(t, r), To(n.b);
  }), vn(() => {
    const o = Ln(() => n.m.map(Gf));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && vn(() => {
    wl(t, r), To(n.a);
  });
}
function wl(e, t) {
  if (e.l.s)
    for (const n of e.l.s) f(n);
  t();
}
function Ue(e, t) {
  var n, r = (
    /** @type {Record<string, Function[] | Function>} */
    (n = e.$$events) == null ? void 0 : n[t.type]
  ), o = Ko(r) ? r.slice() : r == null ? [] : [r];
  for (var i of o)
    i.call(this, t);
}
function mn(e) {
  Qe === null && ra(), uo && Qe.l !== null ? tv(Qe).m.push(e) : vn(() => {
    const t = Ln(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Ns(e) {
  Qe === null && ra(), mn(() => () => Ln(e));
}
function ev(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
function fa() {
  const e = Qe;
  return e === null && ra(), (t, n, r) => {
    var o;
    const i = (
      /** @type {Record<string, Function | Function[]>} */
      (o = e.s.$$events) == null ? void 0 : o[
        /** @type {any} */
        t
      ]
    );
    if (i) {
      const a = Ko(i) ? i.slice() : [i], s = ev(
        /** @type {string} */
        t,
        n,
        r
      );
      for (const l of a)
        l.call(e.x, s);
      return !s.defaultPrevented;
    }
    return !0;
  };
}
function tv(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
function Ds(e, t, n) {
  if (e == null)
    return t(void 0), n && n(void 0), St;
  const r = Ln(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const Rr = [];
function cn(e, t) {
  return {
    subscribe: Me(e, t).subscribe
  };
}
function Me(e, t = St) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function o(s) {
    if (Es(e, s) && (e = s, n)) {
      const l = !Rr.length;
      for (const u of r)
        u[1](), Rr.push(u, e);
      if (l) {
        for (let u = 0; u < Rr.length; u += 2)
          Rr[u][0](Rr[u + 1]);
        Rr.length = 0;
      }
    }
  }
  function i(s) {
    o(s(
      /** @type {T} */
      e
    ));
  }
  function a(s, l = St) {
    const u = [s, l];
    return r.add(u), r.size === 1 && (n = t(o, i) || St), s(
      /** @type {T} */
      e
    ), () => {
      r.delete(u), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: o, update: i, subscribe: a };
}
function ur(e, t, n) {
  const r = !Array.isArray(e), o = r ? [e] : e;
  if (!o.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const i = t.length < 2;
  return cn(n, (a, s) => {
    let l = !1;
    const u = [];
    let c = 0, d = St;
    const v = () => {
      if (c)
        return;
      d();
      const h = t(r ? u[0] : u, a, s);
      i ? a(h) : d = typeof h == "function" ? h : St;
    }, p = o.map(
      (h, x) => Ds(
        h,
        (b) => {
          u[x] = b, c &= ~(1 << x), l && v();
        },
        () => {
          c |= 1 << x;
        }
      )
    );
    return l = !0, v(), function() {
      To(p), d(), l = !1;
    };
  });
}
function G(e) {
  let t;
  return Ds(e, (n) => t = n)(), t;
}
let fi = !1, Qa = Symbol();
function oe(e, t, n) {
  const r = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ ue(void 0),
    unsubscribe: St
  });
  if (r.store !== e && !(Qa in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = St;
    else {
      var o = !0;
      r.unsubscribe = Ds(e, (i) => {
        o ? r.source.v = i : ee(r.source, i);
      }), o = !1;
    }
  return e && Qa in n ? G(e) : f(r.source);
}
function nv(e, t, n) {
  let r = n[t];
  return r && r.store !== e && (r.unsubscribe(), r.unsubscribe = St), e;
}
function Li(e, t) {
  return e.set(t), t;
}
function vt() {
  const e = {};
  function t() {
    Ms(() => {
      for (var n in e)
        e[n].unsubscribe();
      Ho(e, Qa, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function rv(e) {
  var t = fi;
  try {
    return fi = !1, [e(), fi];
  } finally {
    fi = t;
  }
}
const ov = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return e.props[t];
  },
  set(e, t) {
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    if (!e.exclude.includes(t) && t in e.props)
      return {
        enumerable: !0,
        configurable: !0,
        value: e.props[t]
      };
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
// @__NO_SIDE_EFFECTS__
function Ot(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    ov
  );
}
const iv = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return f(e.version), t in e.special ? e.special[t]() : e.props[t];
  },
  set(e, t, n) {
    return t in e.special || (e.special[t] = y(
      {
        get [t]() {
          return e.props[t];
        }
      },
      /** @type {string} */
      t,
      mu
    )), e.special[t](n), cl(e.version), !0;
  },
  getOwnPropertyDescriptor(e, t) {
    if (!e.exclude.includes(t) && t in e.props)
      return {
        enumerable: !0,
        configurable: !0,
        value: e.props[t]
      };
  },
  deleteProperty(e, t) {
    return e.exclude.includes(t) || (e.exclude.push(t), cl(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function gt(e, t) {
  return new Proxy({ props: e, exclude: t, special: {}, version: Jr(0) }, iv);
}
const av = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if ($o(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      $o(o) && (o = o());
      const i = Yn(o, t);
      if (i && i.set)
        return i.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if ($o(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = Yn(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === sr || t === ks) return !1;
    for (let n of e.props)
      if ($o(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props) {
      $o(n) && (n = n());
      for (const r in n)
        t.includes(r) || t.push(r);
    }
    return t;
  }
};
function mt(...e) {
  return new Proxy({ props: e }, av);
}
function bl(e) {
  var t;
  return ((t = e.ctx) == null ? void 0 : t.d) ?? !1;
}
function y(e, t, n, r) {
  var o, i = (n & If) !== 0, a = !uo || (n & Rf) !== 0, s = (n & qf) !== 0, l = (n & Zf) !== 0, u = !1, c;
  s ? [c, u] = rv(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var d = sr in e || ks in e, v = s && (((o = Yn(e, t)) == null ? void 0 : o.set) ?? (d && t in e && ((S) => e[t] = S))) || void 0, p = (
    /** @type {V} */
    r
  ), h = !0, x = !1, b = () => (x = !0, h && (h = !1, l ? p = Ln(
    /** @type {() => V} */
    r
  ) : p = /** @type {V} */
  r), p);
  c === void 0 && r !== void 0 && (v && a && a1(), c = b(), v && v(c));
  var $;
  if (a)
    $ = () => {
      var S = (
        /** @type {V} */
        e[t]
      );
      return S === void 0 ? b() : (h = !0, x = !1, S);
    };
  else {
    var g = (i ? Gr : _e)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    g.f |= Jf, $ = () => {
      var S = f(g);
      return S !== void 0 && (p = /** @type {V} */
      void 0), S === void 0 ? p : S;
    };
  }
  if ((n & mu) === 0)
    return $;
  if (v) {
    var _ = e.$$legacy;
    return function(S, N) {
      return arguments.length > 0 ? ((!a || !N || _ || u) && v(N ? $() : S), S) : $();
    };
  }
  var w = !1, k = /* @__PURE__ */ ue(c), V = /* @__PURE__ */ Gr(() => {
    var S = $(), N = f(k);
    return w ? (w = !1, N) : k.v = S;
  });
  return s && f(V), i || (V.equals = Ps), function(S, N) {
    if (arguments.length > 0) {
      const T = N ? f(V) : a && s ? bn(S) : S;
      if (!V.equals(T)) {
        if (w = !0, ee(k, T), x && p !== void 0 && (p = T), bl(V))
          return S;
        Ln(() => f(V));
      }
      return S;
    }
    return bl(V) ? V.v : f(V);
  };
}
function sv(e) {
  return new lv(e);
}
var nr, yn;
class lv {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    Zr(this, nr), Zr(this, yn);
    var n, r = /* @__PURE__ */ new Map(), o = (a, s) => {
      var l = /* @__PURE__ */ ue(s);
      return r.set(a, l), l;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(a, s) {
          return f(r.get(s) ?? o(s, Reflect.get(a, s)));
        },
        has(a, s) {
          return s === ks ? !0 : (f(r.get(s) ?? o(s, Reflect.get(a, s))), Reflect.has(a, s));
        },
        set(a, s, l) {
          return ee(r.get(s) ?? o(s, l), l), Reflect.set(a, s, l);
        }
      }
    );
    Pi(this, yn, (t.hydrate ? R1 : Wu)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((n = t == null ? void 0 : t.props) != null && n.$$host) || t.sync === !1) && m(), Pi(this, nr, i.$$events);
    for (const a of Object.keys(wt(this, yn)))
      a === "$set" || a === "$destroy" || a === "$on" || Ho(this, a, {
        get() {
          return wt(this, yn)[a];
        },
        /** @param {any} value */
        set(s) {
          wt(this, yn)[a] = s;
        },
        enumerable: !0
      });
    wt(this, yn).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(i, a);
    }, wt(this, yn).$destroy = () => {
      q1(wt(this, yn));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    wt(this, yn).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    wt(this, nr)[t] = wt(this, nr)[t] || [];
    const r = (...o) => n.call(this, ...o);
    return wt(this, nr)[t].push(r), () => {
      wt(this, nr)[t] = wt(this, nr)[t].filter(
        /** @param {any} fn */
        (o) => o !== r
      );
    };
  }
  $destroy() {
    wt(this, yn).$destroy();
  }
}
nr = /* @__PURE__ */ new WeakMap(), yn = /* @__PURE__ */ new WeakMap();
let nc;
typeof HTMLElement == "function" && (nc = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, t, n) {
    super(), Ft(this, "$$ctor"), Ft(this, "$$s"), Ft(this, "$$c"), Ft(this, "$$cn", !1), Ft(this, "$$d", {}), Ft(this, "$$r", !1), Ft(this, "$$p_d", {}), Ft(this, "$$l", {}), Ft(this, "$$l_u", /* @__PURE__ */ new Map()), Ft(this, "$$me"), this.$$ctor = e, this.$$s = t, n && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(e, t, n) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
      const r = this.$$c.$on(e, t);
      this.$$l_u.set(t, r);
    }
    super.addEventListener(e, t, n);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(e, t, n) {
    if (super.removeEventListener(e, t, n), this.$$c) {
      const r = this.$$l_u.get(t);
      r && (r(), this.$$l_u.delete(t));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let e = function(r) {
        return (o) => {
          const i = document.createElement("slot");
          r !== "default" && (i.name = r), z(o, i);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, n = uv(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = $i(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = sv({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = v1(() => {
        fo(() => {
          var r;
          this.$$r = !0;
          for (const o of Mi(this.$$c)) {
            if (!((r = this.$$p_d[o]) != null && r.reflect)) continue;
            this.$$d[o] = this.$$c[o];
            const i = $i(
              o,
              this.$$d[o],
              this.$$p_d,
              "toAttribute"
            );
            i == null ? this.removeAttribute(this.$$p_d[o].attribute || o) : this.setAttribute(this.$$p_d[o].attribute || o, i);
          }
          this.$$r = !1;
        });
      });
      for (const r in this.$$l)
        for (const o of this.$$l[r]) {
          const i = this.$$c.$on(r, o);
          this.$$l_u.set(o, i);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(e, t, n) {
    var r;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = $i(e, n, this.$$p_d, "toProp"), (r = this.$$c) == null || r.$set({ [e]: this.$$d[e] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(e) {
    return Mi(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function $i(e, t, n, r) {
  var o;
  const i = (o = n[e]) == null ? void 0 : o.type;
  if (t = i === "Boolean" && typeof t != "boolean" ? t != null : t, !r || !n[e])
    return t;
  if (r === "toAttribute")
    switch (i) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (i) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      // conversion already handled above
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function uv(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function pe(e, t, n, r, o, i) {
  let a = class extends nc {
    constructor() {
      super(e, n, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Mi(t).map(
        (s) => (t[s].attribute || s).toLowerCase()
      );
    }
  };
  return Mi(t).forEach((s) => {
    Ho(a.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(l) {
        var u;
        l = $i(s, l, t), this.$$d[s] = l;
        var c = this.$$c;
        if (c) {
          var d = (u = Yn(c, s)) == null ? void 0 : u.get;
          d ? c[s] = l : c.$set({ [s]: l });
        }
      }
    });
  }), r.forEach((s) => {
    Ho(a.prototype, s, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[s];
      }
    });
  }), e.element = /** @type {any} */
  a, a;
}
function Bt(e) {
  if (typeof e == "string" || typeof e == "number") return "" + e;
  let t = "";
  if (Array.isArray(e))
    for (let n = 0, r; n < e.length; n++)
      (r = Bt(e[n])) !== "" && (t += (t && " ") + r);
  else
    for (let n in e)
      e[n] && (t += (t && " ") + n);
  return t;
}
var cv = { value: () => {
} };
function va() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Ci(n);
}
function Ci(e) {
  this._ = e;
}
function dv(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Ci.prototype = va.prototype = {
  constructor: Ci,
  on: function(e, t) {
    var n = this._, r = dv(e + "", n), o, i = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++i < a; ) if ((o = (e = r[i]).type) && (o = fv(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < a; )
      if (o = (e = r[i]).type) n[o] = xl(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = xl(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new Ci(e);
  },
  call: function(e, t) {
    if ((o = arguments.length - 2) > 0) for (var n = new Array(o), r = 0, o, i; r < o; ++r) n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (i = this._[e], r = 0, o = i.length; r < o; ++r) i[r].value.apply(t, n);
  },
  apply: function(e, t, n) {
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (var r = this._[e], o = 0, i = r.length; o < i; ++o) r[o].value.apply(t, n);
  }
};
function fv(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function xl(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = cv, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var es = "http://www.w3.org/1999/xhtml";
const $l = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: es,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function pa(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), $l.hasOwnProperty(t) ? { space: $l[t], local: e } : e;
}
function vv(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === es && t.documentElement.namespaceURI === es ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function pv(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function rc(e) {
  var t = pa(e);
  return (t.local ? pv : vv)(t);
}
function gv() {
}
function Ls(e) {
  return e == null ? gv : function() {
    return this.querySelector(e);
  };
}
function hv(e) {
  typeof e != "function" && (e = Ls(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = new Array(a), l, u, c = 0; c < a; ++c)
      (l = i[c]) && (u = e.call(l, l.__data__, c, i)) && ("__data__" in l && (u.__data__ = l.__data__), s[c] = u);
  return new ln(r, this._parents);
}
function mv(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function yv() {
  return [];
}
function oc(e) {
  return e == null ? yv : function() {
    return this.querySelectorAll(e);
  };
}
function wv(e) {
  return function() {
    return mv(e.apply(this, arguments));
  };
}
function bv(e) {
  typeof e == "function" ? e = wv(e) : e = oc(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var a = t[i], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && (r.push(e.call(l, l.__data__, u, a)), o.push(l));
  return new ln(r, o);
}
function ic(e) {
  return function() {
    return this.matches(e);
  };
}
function ac(e) {
  return function(t) {
    return t.matches(e);
  };
}
var xv = Array.prototype.find;
function $v(e) {
  return function() {
    return xv.call(this.children, e);
  };
}
function Cv() {
  return this.firstElementChild;
}
function _v(e) {
  return this.select(e == null ? Cv : $v(typeof e == "function" ? e : ac(e)));
}
var kv = Array.prototype.filter;
function Sv() {
  return Array.from(this.children);
}
function Ev(e) {
  return function() {
    return kv.call(this.children, e);
  };
}
function Pv(e) {
  return this.selectAll(e == null ? Sv : Ev(typeof e == "function" ? e : ac(e)));
}
function Mv(e) {
  typeof e != "function" && (e = ic(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = [], l, u = 0; u < a; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && s.push(l);
  return new ln(r, this._parents);
}
function sc(e) {
  return new Array(e.length);
}
function Vv() {
  return new ln(this._enter || this._groups.map(sc), this._parents);
}
function zi(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
zi.prototype = {
  constructor: zi,
  appendChild: function(e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function(e, t) {
    return this._parent.insertBefore(e, t);
  },
  querySelector: function(e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function(e) {
    return this._parent.querySelectorAll(e);
  }
};
function Ov(e) {
  return function() {
    return e;
  };
}
function Hv(e, t, n, r, o, i) {
  for (var a = 0, s, l = t.length, u = i.length; a < u; ++a)
    (s = t[a]) ? (s.__data__ = i[a], r[a] = s) : n[a] = new zi(e, i[a]);
  for (; a < l; ++a)
    (s = t[a]) && (o[a] = s);
}
function Tv(e, t, n, r, o, i, a) {
  var s, l, u = /* @__PURE__ */ new Map(), c = t.length, d = i.length, v = new Array(c), p;
  for (s = 0; s < c; ++s)
    (l = t[s]) && (v[s] = p = a.call(l, l.__data__, s, t) + "", u.has(p) ? o[s] = l : u.set(p, l));
  for (s = 0; s < d; ++s)
    p = a.call(e, i[s], s, i) + "", (l = u.get(p)) ? (r[s] = l, l.__data__ = i[s], u.delete(p)) : n[s] = new zi(e, i[s]);
  for (s = 0; s < c; ++s)
    (l = t[s]) && u.get(v[s]) === l && (o[s] = l);
}
function Nv(e) {
  return e.__data__;
}
function Dv(e, t) {
  if (!arguments.length) return Array.from(this, Nv);
  var n = t ? Tv : Hv, r = this._parents, o = this._groups;
  typeof e != "function" && (e = Ov(e));
  for (var i = o.length, a = new Array(i), s = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var c = r[u], d = o[u], v = d.length, p = Lv(e.call(c, c && c.__data__, u, r)), h = p.length, x = s[u] = new Array(h), b = a[u] = new Array(h), $ = l[u] = new Array(v);
    n(c, d, x, b, $, p, t);
    for (var g = 0, _ = 0, w, k; g < h; ++g)
      if (w = x[g]) {
        for (g >= _ && (_ = g + 1); !(k = b[_]) && ++_ < h; ) ;
        w._next = k || null;
      }
  }
  return a = new ln(a, r), a._enter = s, a._exit = l, a;
}
function Lv(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function zv() {
  return new ln(this._exit || this._groups.map(sc), this._parents);
}
function Av(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function Iv(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, a = Math.min(o, i), s = new Array(o), l = 0; l < a; ++l)
    for (var u = n[l], c = r[l], d = u.length, v = s[l] = new Array(d), p, h = 0; h < d; ++h)
      (p = u[h] || c[h]) && (v[h] = p);
  for (; l < o; ++l)
    s[l] = n[l];
  return new ln(s, this._parents);
}
function Rv() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], a; --o >= 0; )
      (a = r[o]) && (i && a.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(a, i), i = a);
  return this;
}
function qv(e) {
  e || (e = Zv);
  function t(d, v) {
    return d && v ? e(d.__data__, v.__data__) : !d - !v;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var a = n[i], s = a.length, l = o[i] = new Array(s), u, c = 0; c < s; ++c)
      (u = a[c]) && (l[c] = u);
    l.sort(t);
  }
  return new ln(o, this._parents).order();
}
function Zv(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Bv() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Xv() {
  return Array.from(this);
}
function Yv() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var a = r[o];
      if (a) return a;
    }
  return null;
}
function jv() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function Wv() {
  return !this.node();
}
function Kv(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, a = o.length, s; i < a; ++i)
      (s = o[i]) && e.call(s, s.__data__, i, o);
  return this;
}
function Fv(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Gv(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Uv(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function Jv(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function Qv(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function ep(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function tp(e, t) {
  var n = pa(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? Gv : Fv : typeof t == "function" ? n.local ? ep : Qv : n.local ? Jv : Uv)(n, t));
}
function lc(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function np(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function rp(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function op(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function ip(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? np : typeof t == "function" ? op : rp)(e, t, n ?? "")) : to(this.node(), e);
}
function to(e, t) {
  return e.style.getPropertyValue(t) || lc(e).getComputedStyle(e, null).getPropertyValue(t);
}
function ap(e) {
  return function() {
    delete this[e];
  };
}
function sp(e, t) {
  return function() {
    this[e] = t;
  };
}
function lp(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function up(e, t) {
  return arguments.length > 1 ? this.each((t == null ? ap : typeof t == "function" ? lp : sp)(e, t)) : this.node()[e];
}
function uc(e) {
  return e.trim().split(/^|\s+/);
}
function zs(e) {
  return e.classList || new cc(e);
}
function cc(e) {
  this._node = e, this._names = uc(e.getAttribute("class") || "");
}
cc.prototype = {
  add: function(e) {
    var t = this._names.indexOf(e);
    t < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(e) {
    var t = this._names.indexOf(e);
    t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(e) {
    return this._names.indexOf(e) >= 0;
  }
};
function dc(e, t) {
  for (var n = zs(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function fc(e, t) {
  for (var n = zs(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function cp(e) {
  return function() {
    dc(this, e);
  };
}
function dp(e) {
  return function() {
    fc(this, e);
  };
}
function fp(e, t) {
  return function() {
    (t.apply(this, arguments) ? dc : fc)(this, e);
  };
}
function vp(e, t) {
  var n = uc(e + "");
  if (arguments.length < 2) {
    for (var r = zs(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? fp : t ? cp : dp)(n, t));
}
function pp() {
  this.textContent = "";
}
function gp(e) {
  return function() {
    this.textContent = e;
  };
}
function hp(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function mp(e) {
  return arguments.length ? this.each(e == null ? pp : (typeof e == "function" ? hp : gp)(e)) : this.node().textContent;
}
function yp() {
  this.innerHTML = "";
}
function wp(e) {
  return function() {
    this.innerHTML = e;
  };
}
function bp(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function xp(e) {
  return arguments.length ? this.each(e == null ? yp : (typeof e == "function" ? bp : wp)(e)) : this.node().innerHTML;
}
function $p() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Cp() {
  return this.each($p);
}
function _p() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function kp() {
  return this.each(_p);
}
function Sp(e) {
  var t = typeof e == "function" ? e : rc(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function Ep() {
  return null;
}
function Pp(e, t) {
  var n = typeof e == "function" ? e : rc(e), r = t == null ? Ep : typeof t == "function" ? t : Ls(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Mp() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Vp() {
  return this.each(Mp);
}
function Op() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Hp() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Tp(e) {
  return this.select(e ? Hp : Op);
}
function Np(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Dp(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function Lp(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function zp(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function Ap(e, t, n) {
  return function() {
    var r = this.__on, o, i = Dp(t);
    if (r) {
      for (var a = 0, s = r.length; a < s; ++a)
        if ((o = r[a]).type === e.type && o.name === e.name) {
          this.removeEventListener(o.type, o.listener, o.options), this.addEventListener(o.type, o.listener = i, o.options = n), o.value = t;
          return;
        }
    }
    this.addEventListener(e.type, i, n), o = { type: e.type, name: e.name, value: t, listener: i, options: n }, r ? r.push(o) : this.__on = [o];
  };
}
function Ip(e, t, n) {
  var r = Lp(e + ""), o, i = r.length, a;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var l = 0, u = s.length, c; l < u; ++l)
        for (o = 0, c = s[l]; o < i; ++o)
          if ((a = r[o]).type === c.type && a.name === c.name)
            return c.value;
    }
    return;
  }
  for (s = t ? Ap : zp, o = 0; o < i; ++o) this.each(s(r[o], t, n));
  return this;
}
function vc(e, t, n) {
  var r = lc(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function Rp(e, t) {
  return function() {
    return vc(this, e, t);
  };
}
function qp(e, t) {
  return function() {
    return vc(this, e, t.apply(this, arguments));
  };
}
function Zp(e, t) {
  return this.each((typeof t == "function" ? qp : Rp)(e, t));
}
function* Bp() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, a; o < i; ++o)
      (a = r[o]) && (yield a);
}
var pc = [null];
function ln(e, t) {
  this._groups = e, this._parents = t;
}
function Uo() {
  return new ln([[document.documentElement]], pc);
}
function Xp() {
  return this;
}
ln.prototype = Uo.prototype = {
  constructor: ln,
  select: hv,
  selectAll: bv,
  selectChild: _v,
  selectChildren: Pv,
  filter: Mv,
  data: Dv,
  enter: Vv,
  exit: zv,
  join: Av,
  merge: Iv,
  selection: Xp,
  order: Rv,
  sort: qv,
  call: Bv,
  nodes: Xv,
  node: Yv,
  size: jv,
  empty: Wv,
  each: Kv,
  attr: tp,
  style: ip,
  property: up,
  classed: vp,
  text: mp,
  html: xp,
  raise: Cp,
  lower: kp,
  append: Sp,
  insert: Pp,
  remove: Vp,
  clone: Tp,
  datum: Np,
  on: Ip,
  dispatch: Zp,
  [Symbol.iterator]: Bp
};
function fn(e) {
  return typeof e == "string" ? new ln([[document.querySelector(e)]], [document.documentElement]) : new ln([[e]], pc);
}
function Yp(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function wn(e, t) {
  if (e = Yp(e), t === void 0 && (t = e.currentTarget), t) {
    var n = t.ownerSVGElement || t;
    if (n.createSVGPoint) {
      var r = n.createSVGPoint();
      return r.x = e.clientX, r.y = e.clientY, r = r.matrixTransform(t.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (t.getBoundingClientRect) {
      var o = t.getBoundingClientRect();
      return [e.clientX - o.left - t.clientLeft, e.clientY - o.top - t.clientTop];
    }
  }
  return [e.pageX, e.pageY];
}
const jp = { passive: !1 }, Ao = { capture: !0, passive: !1 };
function Ta(e) {
  e.stopImmediatePropagation();
}
function Yr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function gc(e) {
  var t = e.document.documentElement, n = fn(e).on("dragstart.drag", Yr, Ao);
  "onselectstart" in t ? n.on("selectstart.drag", Yr, Ao) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function hc(e, t) {
  var n = e.document.documentElement, r = fn(e).on("dragstart.drag", null);
  t && (r.on("click.drag", Yr, Ao), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const vi = (e) => () => e;
function ts(e, {
  sourceEvent: t,
  subject: n,
  target: r,
  identifier: o,
  active: i,
  x: a,
  y: s,
  dx: l,
  dy: u,
  dispatch: c
}) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    subject: { value: n, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: o, enumerable: !0, configurable: !0 },
    active: { value: i, enumerable: !0, configurable: !0 },
    x: { value: a, enumerable: !0, configurable: !0 },
    y: { value: s, enumerable: !0, configurable: !0 },
    dx: { value: l, enumerable: !0, configurable: !0 },
    dy: { value: u, enumerable: !0, configurable: !0 },
    _: { value: c }
  });
}
ts.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function Wp(e) {
  return !e.ctrlKey && !e.button;
}
function Kp() {
  return this.parentNode;
}
function Fp(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Gp() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Up() {
  var e = Wp, t = Kp, n = Fp, r = Gp, o = {}, i = va("start", "drag", "end"), a = 0, s, l, u, c, d = 0;
  function v(w) {
    w.on("mousedown.drag", p).filter(r).on("touchstart.drag", b).on("touchmove.drag", $, jp).on("touchend.drag touchcancel.drag", g).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function p(w, k) {
    if (!(c || !e.call(this, w, k))) {
      var V = _(this, t.call(this, w, k), w, k, "mouse");
      V && (fn(w.view).on("mousemove.drag", h, Ao).on("mouseup.drag", x, Ao), gc(w.view), Ta(w), u = !1, s = w.clientX, l = w.clientY, V("start", w));
    }
  }
  function h(w) {
    if (Yr(w), !u) {
      var k = w.clientX - s, V = w.clientY - l;
      u = k * k + V * V > d;
    }
    o.mouse("drag", w);
  }
  function x(w) {
    fn(w.view).on("mousemove.drag mouseup.drag", null), hc(w.view, u), Yr(w), o.mouse("end", w);
  }
  function b(w, k) {
    if (e.call(this, w, k)) {
      var V = w.changedTouches, S = t.call(this, w, k), N = V.length, T, I;
      for (T = 0; T < N; ++T)
        (I = _(this, S, w, k, V[T].identifier, V[T])) && (Ta(w), I("start", w, V[T]));
    }
  }
  function $(w) {
    var k = w.changedTouches, V = k.length, S, N;
    for (S = 0; S < V; ++S)
      (N = o[k[S].identifier]) && (Yr(w), N("drag", w, k[S]));
  }
  function g(w) {
    var k = w.changedTouches, V = k.length, S, N;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), S = 0; S < V; ++S)
      (N = o[k[S].identifier]) && (Ta(w), N("end", w, k[S]));
  }
  function _(w, k, V, S, N, T) {
    var I = i.copy(), R = wn(T || V, k), L, Z, E;
    if ((E = n.call(w, new ts("beforestart", {
      sourceEvent: V,
      target: v,
      identifier: N,
      active: a,
      x: R[0],
      y: R[1],
      dx: 0,
      dy: 0,
      dispatch: I
    }), S)) != null)
      return L = E.x - R[0] || 0, Z = E.y - R[1] || 0, function C(P, H, M) {
        var O = R, A;
        switch (P) {
          case "start":
            o[N] = C, A = a++;
            break;
          case "end":
            delete o[N], --a;
          // falls through
          case "drag":
            R = wn(M || H, k), A = a;
            break;
        }
        I.call(
          P,
          w,
          new ts(P, {
            sourceEvent: H,
            subject: E,
            target: v,
            identifier: N,
            active: A,
            x: R[0] + L,
            y: R[1] + Z,
            dx: R[0] - O[0],
            dy: R[1] - O[1],
            dispatch: I
          }),
          S
        );
      };
  }
  return v.filter = function(w) {
    return arguments.length ? (e = typeof w == "function" ? w : vi(!!w), v) : e;
  }, v.container = function(w) {
    return arguments.length ? (t = typeof w == "function" ? w : vi(w), v) : t;
  }, v.subject = function(w) {
    return arguments.length ? (n = typeof w == "function" ? w : vi(w), v) : n;
  }, v.touchable = function(w) {
    return arguments.length ? (r = typeof w == "function" ? w : vi(!!w), v) : r;
  }, v.on = function() {
    var w = i.on.apply(i, arguments);
    return w === i ? v : w;
  }, v.clickDistance = function(w) {
    return arguments.length ? (d = (w = +w) * w, v) : Math.sqrt(d);
  }, v;
}
function As(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function mc(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Jo() {
}
var Io = 0.7, Ai = 1 / Io, jr = "\\s*([+-]?\\d+)\\s*", Ro = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", On = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Jp = /^#([0-9a-f]{3,8})$/, Qp = new RegExp(`^rgb\\(${jr},${jr},${jr}\\)$`), eg = new RegExp(`^rgb\\(${On},${On},${On}\\)$`), tg = new RegExp(`^rgba\\(${jr},${jr},${jr},${Ro}\\)$`), ng = new RegExp(`^rgba\\(${On},${On},${On},${Ro}\\)$`), rg = new RegExp(`^hsl\\(${Ro},${On},${On}\\)$`), og = new RegExp(`^hsla\\(${Ro},${On},${On},${Ro}\\)$`), Cl = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
As(Jo, qo, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: _l,
  // Deprecated! Use color.formatHex.
  formatHex: _l,
  formatHex8: ig,
  formatHsl: ag,
  formatRgb: kl,
  toString: kl
});
function _l() {
  return this.rgb().formatHex();
}
function ig() {
  return this.rgb().formatHex8();
}
function ag() {
  return yc(this).formatHsl();
}
function kl() {
  return this.rgb().formatRgb();
}
function qo(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Jp.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Sl(t) : n === 3 ? new Gt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? pi(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? pi(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Qp.exec(e)) ? new Gt(t[1], t[2], t[3], 1) : (t = eg.exec(e)) ? new Gt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = tg.exec(e)) ? pi(t[1], t[2], t[3], t[4]) : (t = ng.exec(e)) ? pi(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = rg.exec(e)) ? Ml(t[1], t[2] / 100, t[3] / 100, 1) : (t = og.exec(e)) ? Ml(t[1], t[2] / 100, t[3] / 100, t[4]) : Cl.hasOwnProperty(e) ? Sl(Cl[e]) : e === "transparent" ? new Gt(NaN, NaN, NaN, 0) : null;
}
function Sl(e) {
  return new Gt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function pi(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Gt(e, t, n, r);
}
function sg(e) {
  return e instanceof Jo || (e = qo(e)), e ? (e = e.rgb(), new Gt(e.r, e.g, e.b, e.opacity)) : new Gt();
}
function ns(e, t, n, r) {
  return arguments.length === 1 ? sg(e) : new Gt(e, t, n, r ?? 1);
}
function Gt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
As(Gt, ns, mc(Jo, {
  brighter(e) {
    return e = e == null ? Ai : Math.pow(Ai, e), new Gt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Io : Math.pow(Io, e), new Gt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Gt(Sr(this.r), Sr(this.g), Sr(this.b), Ii(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: El,
  // Deprecated! Use color.formatHex.
  formatHex: El,
  formatHex8: lg,
  formatRgb: Pl,
  toString: Pl
}));
function El() {
  return `#${_r(this.r)}${_r(this.g)}${_r(this.b)}`;
}
function lg() {
  return `#${_r(this.r)}${_r(this.g)}${_r(this.b)}${_r((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Pl() {
  const e = Ii(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Sr(this.r)}, ${Sr(this.g)}, ${Sr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Ii(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Sr(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function _r(e) {
  return e = Sr(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Ml(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new xn(e, t, n, r);
}
function yc(e) {
  if (e instanceof xn) return new xn(e.h, e.s, e.l, e.opacity);
  if (e instanceof Jo || (e = qo(e)), !e) return new xn();
  if (e instanceof xn) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), a = NaN, s = i - o, l = (i + o) / 2;
  return s ? (t === i ? a = (n - r) / s + (n < r) * 6 : n === i ? a = (r - t) / s + 2 : a = (t - n) / s + 4, s /= l < 0.5 ? i + o : 2 - i - o, a *= 60) : s = l > 0 && l < 1 ? 0 : a, new xn(a, s, l, e.opacity);
}
function ug(e, t, n, r) {
  return arguments.length === 1 ? yc(e) : new xn(e, t, n, r ?? 1);
}
function xn(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
As(xn, ug, mc(Jo, {
  brighter(e) {
    return e = e == null ? Ai : Math.pow(Ai, e), new xn(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Io : Math.pow(Io, e), new xn(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new Gt(
      Na(e >= 240 ? e - 240 : e + 120, o, r),
      Na(e, o, r),
      Na(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new xn(Vl(this.h), gi(this.s), gi(this.l), Ii(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Ii(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Vl(this.h)}, ${gi(this.s) * 100}%, ${gi(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Vl(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function gi(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Na(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const wc = (e) => () => e;
function cg(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function dg(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function fg(e) {
  return (e = +e) == 1 ? bc : function(t, n) {
    return n - t ? dg(t, n, e) : wc(isNaN(t) ? n : t);
  };
}
function bc(e, t) {
  var n = t - e;
  return n ? cg(e, n) : wc(isNaN(e) ? t : e);
}
const Ol = function e(t) {
  var n = fg(t);
  function r(o, i) {
    var a = n((o = ns(o)).r, (i = ns(i)).r), s = n(o.g, i.g), l = n(o.b, i.b), u = bc(o.opacity, i.opacity);
    return function(c) {
      return o.r = a(c), o.g = s(c), o.b = l(c), o.opacity = u(c), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function or(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
var rs = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Da = new RegExp(rs.source, "g");
function vg(e) {
  return function() {
    return e;
  };
}
function pg(e) {
  return function(t) {
    return e(t) + "";
  };
}
function gg(e, t) {
  var n = rs.lastIndex = Da.lastIndex = 0, r, o, i, a = -1, s = [], l = [];
  for (e = e + "", t = t + ""; (r = rs.exec(e)) && (o = Da.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), s[a] ? s[a] += i : s[++a] = i), (r = r[0]) === (o = o[0]) ? s[a] ? s[a] += o : s[++a] = o : (s[++a] = null, l.push({ i: a, x: or(r, o) })), n = Da.lastIndex;
  return n < t.length && (i = t.slice(n), s[a] ? s[a] += i : s[++a] = i), s.length < 2 ? l[0] ? pg(l[0].x) : vg(t) : (t = l.length, function(u) {
    for (var c = 0, d; c < t; ++c) s[(d = l[c]).i] = d.x(u);
    return s.join("");
  });
}
var Hl = 180 / Math.PI, xc = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function $c(e, t, n, r, o, i) {
  var a, s, l;
  return (a = Math.sqrt(e * e + t * t)) && (e /= a, t /= a), (l = e * n + t * r) && (n -= e * l, r -= t * l), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, l /= s), e * r < t * n && (e = -e, t = -t, l = -l, a = -a), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * Hl,
    skewX: Math.atan(l) * Hl,
    scaleX: a,
    scaleY: s
  };
}
var hi;
function hg(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? xc : $c(t.a, t.b, t.c, t.d, t.e, t.f);
}
function mg(e) {
  return e == null || (hi || (hi = document.createElementNS("http://www.w3.org/2000/svg", "g")), hi.setAttribute("transform", e), !(e = hi.transform.baseVal.consolidate())) ? xc : (e = e.matrix, $c(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Cc(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, c, d, v, p, h) {
    if (u !== d || c !== v) {
      var x = p.push("translate(", null, t, null, n);
      h.push({ i: x - 4, x: or(u, d) }, { i: x - 2, x: or(c, v) });
    } else (d || v) && p.push("translate(" + d + t + v + n);
  }
  function a(u, c, d, v) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), v.push({ i: d.push(o(d) + "rotate(", null, r) - 2, x: or(u, c) })) : c && d.push(o(d) + "rotate(" + c + r);
  }
  function s(u, c, d, v) {
    u !== c ? v.push({ i: d.push(o(d) + "skewX(", null, r) - 2, x: or(u, c) }) : c && d.push(o(d) + "skewX(" + c + r);
  }
  function l(u, c, d, v, p, h) {
    if (u !== d || c !== v) {
      var x = p.push(o(p) + "scale(", null, ",", null, ")");
      h.push({ i: x - 4, x: or(u, d) }, { i: x - 2, x: or(c, v) });
    } else (d !== 1 || v !== 1) && p.push(o(p) + "scale(" + d + "," + v + ")");
  }
  return function(u, c) {
    var d = [], v = [];
    return u = e(u), c = e(c), i(u.translateX, u.translateY, c.translateX, c.translateY, d, v), a(u.rotate, c.rotate, d, v), s(u.skewX, c.skewX, d, v), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, d, v), u = c = null, function(p) {
      for (var h = -1, x = v.length, b; ++h < x; ) d[(b = v[h]).i] = b.x(p);
      return d.join("");
    };
  };
}
var yg = Cc(hg, "px, ", "px)", "deg)"), wg = Cc(mg, ", ", ")", ")"), bg = 1e-12;
function Tl(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function xg(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function $g(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Cg = function e(t, n, r) {
  function o(i, a) {
    var s = i[0], l = i[1], u = i[2], c = a[0], d = a[1], v = a[2], p = c - s, h = d - l, x = p * p + h * h, b, $;
    if (x < bg)
      $ = Math.log(v / u) / t, b = function(S) {
        return [
          s + S * p,
          l + S * h,
          u * Math.exp(t * S * $)
        ];
      };
    else {
      var g = Math.sqrt(x), _ = (v * v - u * u + r * x) / (2 * u * n * g), w = (v * v - u * u - r * x) / (2 * v * n * g), k = Math.log(Math.sqrt(_ * _ + 1) - _), V = Math.log(Math.sqrt(w * w + 1) - w);
      $ = (V - k) / t, b = function(S) {
        var N = S * $, T = Tl(k), I = u / (n * g) * (T * $g(t * N + k) - xg(k));
        return [
          s + I * p,
          l + I * h,
          u * T / Tl(t * N + k)
        ];
      };
    }
    return b.duration = $ * 1e3 * t / Math.SQRT2, b;
  }
  return o.rho = function(i) {
    var a = Math.max(1e-3, +i), s = a * a, l = s * s;
    return e(a, s, l);
  }, o;
}(Math.SQRT2, 2, 4);
var no = 0, Eo = 0, _o = 0, _c = 1e3, Ri, Po, qi = 0, Vr = 0, ga = 0, Zo = typeof performance == "object" && performance.now ? performance : Date, kc = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Is() {
  return Vr || (kc(_g), Vr = Zo.now() + ga);
}
function _g() {
  Vr = 0;
}
function Zi() {
  this._call = this._time = this._next = null;
}
Zi.prototype = Sc.prototype = {
  constructor: Zi,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Is() : +n) + (t == null ? 0 : +t), !this._next && Po !== this && (Po ? Po._next = this : Ri = this, Po = this), this._call = e, this._time = n, os();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, os());
  }
};
function Sc(e, t, n) {
  var r = new Zi();
  return r.restart(e, t, n), r;
}
function kg() {
  Is(), ++no;
  for (var e = Ri, t; e; )
    (t = Vr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --no;
}
function Nl() {
  Vr = (qi = Zo.now()) + ga, no = Eo = 0;
  try {
    kg();
  } finally {
    no = 0, Eg(), Vr = 0;
  }
}
function Sg() {
  var e = Zo.now(), t = e - qi;
  t > _c && (ga -= t, qi = e);
}
function Eg() {
  for (var e, t = Ri, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Ri = n);
  Po = e, os(r);
}
function os(e) {
  if (!no) {
    Eo && (Eo = clearTimeout(Eo));
    var t = e - Vr;
    t > 24 ? (e < 1 / 0 && (Eo = setTimeout(Nl, e - Zo.now() - ga)), _o && (_o = clearInterval(_o))) : (_o || (qi = Zo.now(), _o = setInterval(Sg, _c)), no = 1, kc(Nl));
  }
}
function Dl(e, t, n) {
  var r = new Zi();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var Pg = va("start", "end", "cancel", "interrupt"), Mg = [], Ec = 0, Ll = 1, is = 2, _i = 3, zl = 4, as = 5, ki = 6;
function ha(e, t, n, r, o, i) {
  var a = e.__transition;
  if (!a) e.__transition = {};
  else if (n in a) return;
  Vg(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: Pg,
    tween: Mg,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: Ec
  });
}
function Rs(e, t) {
  var n = En(e, t);
  if (n.state > Ec) throw new Error("too late; already scheduled");
  return n;
}
function Rn(e, t) {
  var n = En(e, t);
  if (n.state > _i) throw new Error("too late; already running");
  return n;
}
function En(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function Vg(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = Sc(i, 0, n.time);
  function i(u) {
    n.state = Ll, n.timer.restart(a, n.delay, n.time), n.delay <= u && a(u - n.delay);
  }
  function a(u) {
    var c, d, v, p;
    if (n.state !== Ll) return l();
    for (c in r)
      if (p = r[c], p.name === n.name) {
        if (p.state === _i) return Dl(a);
        p.state === zl ? (p.state = ki, p.timer.stop(), p.on.call("interrupt", e, e.__data__, p.index, p.group), delete r[c]) : +c < t && (p.state = ki, p.timer.stop(), p.on.call("cancel", e, e.__data__, p.index, p.group), delete r[c]);
      }
    if (Dl(function() {
      n.state === _i && (n.state = zl, n.timer.restart(s, n.delay, n.time), s(u));
    }), n.state = is, n.on.call("start", e, e.__data__, n.index, n.group), n.state === is) {
      for (n.state = _i, o = new Array(v = n.tween.length), c = 0, d = -1; c < v; ++c)
        (p = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (o[++d] = p);
      o.length = d + 1;
    }
  }
  function s(u) {
    for (var c = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = as, 1), d = -1, v = o.length; ++d < v; )
      o[d].call(e, c);
    n.state === as && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = ki, n.timer.stop(), delete r[t];
    for (var u in r) return;
    delete e.__transition;
  }
}
function Si(e, t) {
  var n = e.__transition, r, o, i = !0, a;
  if (n) {
    t = t == null ? null : t + "";
    for (a in n) {
      if ((r = n[a]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > is && r.state < as, r.state = ki, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[a];
    }
    i && delete e.__transition;
  }
}
function Og(e) {
  return this.each(function() {
    Si(this, e);
  });
}
function Hg(e, t) {
  var n, r;
  return function() {
    var o = Rn(this, e), i = o.tween;
    if (i !== n) {
      r = n = i;
      for (var a = 0, s = r.length; a < s; ++a)
        if (r[a].name === t) {
          r = r.slice(), r.splice(a, 1);
          break;
        }
    }
    o.tween = r;
  };
}
function Tg(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = Rn(this, e), a = i.tween;
    if (a !== r) {
      o = (r = a).slice();
      for (var s = { name: t, value: n }, l = 0, u = o.length; l < u; ++l)
        if (o[l].name === t) {
          o[l] = s;
          break;
        }
      l === u && o.push(s);
    }
    i.tween = o;
  };
}
function Ng(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = En(this.node(), n).tween, o = 0, i = r.length, a; o < i; ++o)
      if ((a = r[o]).name === e)
        return a.value;
    return null;
  }
  return this.each((t == null ? Hg : Tg)(n, e, t));
}
function qs(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = Rn(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return En(o, r).value[t];
  };
}
function Pc(e, t) {
  var n;
  return (typeof t == "number" ? or : t instanceof qo ? Ol : (n = qo(t)) ? (t = n, Ol) : gg)(e, t);
}
function Dg(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Lg(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function zg(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var a = this.getAttribute(e);
    return a === o ? null : a === r ? i : i = t(r = a, n);
  };
}
function Ag(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var a = this.getAttributeNS(e.space, e.local);
    return a === o ? null : a === r ? i : i = t(r = a, n);
  };
}
function Ig(e, t, n) {
  var r, o, i;
  return function() {
    var a, s = n(this), l;
    return s == null ? void this.removeAttribute(e) : (a = this.getAttribute(e), l = s + "", a === l ? null : a === r && l === o ? i : (o = l, i = t(r = a, s)));
  };
}
function Rg(e, t, n) {
  var r, o, i;
  return function() {
    var a, s = n(this), l;
    return s == null ? void this.removeAttributeNS(e.space, e.local) : (a = this.getAttributeNS(e.space, e.local), l = s + "", a === l ? null : a === r && l === o ? i : (o = l, i = t(r = a, s)));
  };
}
function qg(e, t) {
  var n = pa(e), r = n === "transform" ? wg : Pc;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Rg : Ig)(n, r, qs(this, "attr." + e, t)) : t == null ? (n.local ? Lg : Dg)(n) : (n.local ? Ag : zg)(n, r, t));
}
function Zg(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function Bg(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function Xg(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Bg(e, i)), n;
  }
  return o._value = t, o;
}
function Yg(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Zg(e, i)), n;
  }
  return o._value = t, o;
}
function jg(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = pa(e);
  return this.tween(n, (r.local ? Xg : Yg)(r, t));
}
function Wg(e, t) {
  return function() {
    Rs(this, e).delay = +t.apply(this, arguments);
  };
}
function Kg(e, t) {
  return t = +t, function() {
    Rs(this, e).delay = t;
  };
}
function Fg(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Wg : Kg)(t, e)) : En(this.node(), t).delay;
}
function Gg(e, t) {
  return function() {
    Rn(this, e).duration = +t.apply(this, arguments);
  };
}
function Ug(e, t) {
  return t = +t, function() {
    Rn(this, e).duration = t;
  };
}
function Jg(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Gg : Ug)(t, e)) : En(this.node(), t).duration;
}
function Qg(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Rn(this, e).ease = t;
  };
}
function eh(e) {
  var t = this._id;
  return arguments.length ? this.each(Qg(t, e)) : En(this.node(), t).ease;
}
function th(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Rn(this, e).ease = n;
  };
}
function nh(e) {
  if (typeof e != "function") throw new Error();
  return this.each(th(this._id, e));
}
function rh(e) {
  typeof e != "function" && (e = ic(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = [], l, u = 0; u < a; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && s.push(l);
  return new Fn(r, this._parents, this._name, this._id);
}
function oh(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), a = new Array(r), s = 0; s < i; ++s)
    for (var l = t[s], u = n[s], c = l.length, d = a[s] = new Array(c), v, p = 0; p < c; ++p)
      (v = l[p] || u[p]) && (d[p] = v);
  for (; s < r; ++s)
    a[s] = t[s];
  return new Fn(a, this._parents, this._name, this._id);
}
function ih(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function ah(e, t, n) {
  var r, o, i = ih(t) ? Rs : Rn;
  return function() {
    var a = i(this, e), s = a.on;
    s !== r && (o = (r = s).copy()).on(t, n), a.on = o;
  };
}
function sh(e, t) {
  var n = this._id;
  return arguments.length < 2 ? En(this.node(), n).on.on(e) : this.each(ah(n, e, t));
}
function lh(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function uh() {
  return this.on("end.remove", lh(this._id));
}
function ch(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Ls(e));
  for (var r = this._groups, o = r.length, i = new Array(o), a = 0; a < o; ++a)
    for (var s = r[a], l = s.length, u = i[a] = new Array(l), c, d, v = 0; v < l; ++v)
      (c = s[v]) && (d = e.call(c, c.__data__, v, s)) && ("__data__" in c && (d.__data__ = c.__data__), u[v] = d, ha(u[v], t, n, v, u, En(c, n)));
  return new Fn(i, this._parents, t, n);
}
function dh(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = oc(e));
  for (var r = this._groups, o = r.length, i = [], a = [], s = 0; s < o; ++s)
    for (var l = r[s], u = l.length, c, d = 0; d < u; ++d)
      if (c = l[d]) {
        for (var v = e.call(c, c.__data__, d, l), p, h = En(c, n), x = 0, b = v.length; x < b; ++x)
          (p = v[x]) && ha(p, t, n, x, v, h);
        i.push(v), a.push(c);
      }
  return new Fn(i, a, t, n);
}
var fh = Uo.prototype.constructor;
function vh() {
  return new fh(this._groups, this._parents);
}
function ph(e, t) {
  var n, r, o;
  return function() {
    var i = to(this, e), a = (this.style.removeProperty(e), to(this, e));
    return i === a ? null : i === n && a === r ? o : o = t(n = i, r = a);
  };
}
function Mc(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function gh(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var a = to(this, e);
    return a === o ? null : a === r ? i : i = t(r = a, n);
  };
}
function hh(e, t, n) {
  var r, o, i;
  return function() {
    var a = to(this, e), s = n(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(e), to(this, e))), a === l ? null : a === r && l === o ? i : (o = l, i = t(r = a, s));
  };
}
function mh(e, t) {
  var n, r, o, i = "style." + t, a = "end." + i, s;
  return function() {
    var l = Rn(this, e), u = l.on, c = l.value[i] == null ? s || (s = Mc(t)) : void 0;
    (u !== n || o !== c) && (r = (n = u).copy()).on(a, o = c), l.on = r;
  };
}
function yh(e, t, n) {
  var r = (e += "") == "transform" ? yg : Pc;
  return t == null ? this.styleTween(e, ph(e, r)).on("end.style." + e, Mc(e)) : typeof t == "function" ? this.styleTween(e, hh(e, r, qs(this, "style." + e, t))).each(mh(this._id, e)) : this.styleTween(e, gh(e, r, t), n).on("end.style." + e, null);
}
function wh(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function bh(e, t, n) {
  var r, o;
  function i() {
    var a = t.apply(this, arguments);
    return a !== o && (r = (o = a) && wh(e, a, n)), r;
  }
  return i._value = t, i;
}
function xh(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, bh(e, t, n ?? ""));
}
function $h(e) {
  return function() {
    this.textContent = e;
  };
}
function Ch(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function _h(e) {
  return this.tween("text", typeof e == "function" ? Ch(qs(this, "text", e)) : $h(e == null ? "" : e + ""));
}
function kh(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function Sh(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && kh(o)), t;
  }
  return r._value = e, r;
}
function Eh(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, Sh(e));
}
function Ph() {
  for (var e = this._name, t = this._id, n = Vc(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var a = r[i], s = a.length, l, u = 0; u < s; ++u)
      if (l = a[u]) {
        var c = En(l, t);
        ha(l, e, n, u, a, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new Fn(r, this._parents, e, n);
}
function Mh() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, a) {
    var s = { value: a }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var u = Rn(this, r), c = u.on;
      c !== e && (t = (e = c).copy(), t._.cancel.push(s), t._.interrupt.push(s), t._.end.push(l)), u.on = t;
    }), o === 0 && i();
  });
}
var Vh = 0;
function Fn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function Vc() {
  return ++Vh;
}
var Zn = Uo.prototype;
Fn.prototype = {
  constructor: Fn,
  select: ch,
  selectAll: dh,
  selectChild: Zn.selectChild,
  selectChildren: Zn.selectChildren,
  filter: rh,
  merge: oh,
  selection: vh,
  transition: Ph,
  call: Zn.call,
  nodes: Zn.nodes,
  node: Zn.node,
  size: Zn.size,
  empty: Zn.empty,
  each: Zn.each,
  on: sh,
  attr: qg,
  attrTween: jg,
  style: yh,
  styleTween: xh,
  text: _h,
  textTween: Eh,
  remove: uh,
  tween: Ng,
  delay: Fg,
  duration: Jg,
  ease: eh,
  easeVarying: nh,
  end: Mh,
  [Symbol.iterator]: Zn[Symbol.iterator]
};
function Oh(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var Hh = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Oh
};
function Th(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function Nh(e) {
  var t, n;
  e instanceof Fn ? (t = e._id, e = e._name) : (t = Vc(), (n = Hh).time = Is(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var a = r[i], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && ha(l, e, t, u, a, n || Th(l, t));
  return new Fn(r, this._parents, e, t);
}
Uo.prototype.interrupt = Og;
Uo.prototype.transition = Nh;
const mi = (e) => () => e;
function Dh(e, {
  sourceEvent: t,
  target: n,
  transform: r,
  dispatch: o
}) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    target: { value: n, enumerable: !0, configurable: !0 },
    transform: { value: r, enumerable: !0, configurable: !0 },
    _: { value: o }
  });
}
function Bn(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
Bn.prototype = {
  constructor: Bn,
  scale: function(e) {
    return e === 1 ? this : new Bn(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new Bn(this.k, this.x + this.k * e, this.y + this.k * t);
  },
  apply: function(e) {
    return [e[0] * this.k + this.x, e[1] * this.k + this.y];
  },
  applyX: function(e) {
    return e * this.k + this.x;
  },
  applyY: function(e) {
    return e * this.k + this.y;
  },
  invert: function(e) {
    return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
  },
  invertX: function(e) {
    return (e - this.x) / this.k;
  },
  invertY: function(e) {
    return (e - this.y) / this.k;
  },
  rescaleX: function(e) {
    return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
  },
  rescaleY: function(e) {
    return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var ma = new Bn(1, 0, 0);
Oc.prototype = Bn.prototype;
function Oc(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return ma;
  return e.__zoom;
}
function La(e) {
  e.stopImmediatePropagation();
}
function ko(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Lh(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function zh() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function Al() {
  return this.__zoom || ma;
}
function Ah(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function Ih() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Rh(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], a = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    a > i ? (i + a) / 2 : Math.min(0, i) || Math.max(0, a)
  );
}
function Hc() {
  var e = Lh, t = zh, n = Rh, r = Ah, o = Ih, i = [0, 1 / 0], a = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], s = 250, l = Cg, u = va("start", "zoom", "end"), c, d, v, p = 500, h = 150, x = 0, b = 10;
  function $(E) {
    E.property("__zoom", Al).on("wheel.zoom", N, { passive: !1 }).on("mousedown.zoom", T).on("dblclick.zoom", I).filter(o).on("touchstart.zoom", R).on("touchmove.zoom", L).on("touchend.zoom touchcancel.zoom", Z).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  $.transform = function(E, C, P, H) {
    var M = E.selection ? E.selection() : E;
    M.property("__zoom", Al), E !== M ? k(E, C, P, H) : M.interrupt().each(function() {
      V(this, arguments).event(H).start().zoom(null, typeof C == "function" ? C.apply(this, arguments) : C).end();
    });
  }, $.scaleBy = function(E, C, P, H) {
    $.scaleTo(E, function() {
      var M = this.__zoom.k, O = typeof C == "function" ? C.apply(this, arguments) : C;
      return M * O;
    }, P, H);
  }, $.scaleTo = function(E, C, P, H) {
    $.transform(E, function() {
      var M = t.apply(this, arguments), O = this.__zoom, A = P == null ? w(M) : typeof P == "function" ? P.apply(this, arguments) : P, Y = O.invert(A), W = typeof C == "function" ? C.apply(this, arguments) : C;
      return n(_(g(O, W), A, Y), M, a);
    }, P, H);
  }, $.translateBy = function(E, C, P, H) {
    $.transform(E, function() {
      return n(this.__zoom.translate(
        typeof C == "function" ? C.apply(this, arguments) : C,
        typeof P == "function" ? P.apply(this, arguments) : P
      ), t.apply(this, arguments), a);
    }, null, H);
  }, $.translateTo = function(E, C, P, H, M) {
    $.transform(E, function() {
      var O = t.apply(this, arguments), A = this.__zoom, Y = H == null ? w(O) : typeof H == "function" ? H.apply(this, arguments) : H;
      return n(ma.translate(Y[0], Y[1]).scale(A.k).translate(
        typeof C == "function" ? -C.apply(this, arguments) : -C,
        typeof P == "function" ? -P.apply(this, arguments) : -P
      ), O, a);
    }, H, M);
  };
  function g(E, C) {
    return C = Math.max(i[0], Math.min(i[1], C)), C === E.k ? E : new Bn(C, E.x, E.y);
  }
  function _(E, C, P) {
    var H = C[0] - P[0] * E.k, M = C[1] - P[1] * E.k;
    return H === E.x && M === E.y ? E : new Bn(E.k, H, M);
  }
  function w(E) {
    return [(+E[0][0] + +E[1][0]) / 2, (+E[0][1] + +E[1][1]) / 2];
  }
  function k(E, C, P, H) {
    E.on("start.zoom", function() {
      V(this, arguments).event(H).start();
    }).on("interrupt.zoom end.zoom", function() {
      V(this, arguments).event(H).end();
    }).tween("zoom", function() {
      var M = this, O = arguments, A = V(M, O).event(H), Y = t.apply(M, O), W = P == null ? w(Y) : typeof P == "function" ? P.apply(M, O) : P, U = Math.max(Y[1][0] - Y[0][0], Y[1][1] - Y[0][1]), Q = M.__zoom, F = typeof C == "function" ? C.apply(M, O) : C, ge = l(Q.invert(W).concat(U / Q.k), F.invert(W).concat(U / F.k));
      return function(se) {
        if (se === 1) se = F;
        else {
          var ye = ge(se), le = U / ye[2];
          se = new Bn(le, W[0] - ye[0] * le, W[1] - ye[1] * le);
        }
        A.zoom(null, se);
      };
    });
  }
  function V(E, C, P) {
    return !P && E.__zooming || new S(E, C);
  }
  function S(E, C) {
    this.that = E, this.args = C, this.active = 0, this.sourceEvent = null, this.extent = t.apply(E, C), this.taps = 0;
  }
  S.prototype = {
    event: function(E) {
      return E && (this.sourceEvent = E), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(E, C) {
      return this.mouse && E !== "mouse" && (this.mouse[1] = C.invert(this.mouse[0])), this.touch0 && E !== "touch" && (this.touch0[1] = C.invert(this.touch0[0])), this.touch1 && E !== "touch" && (this.touch1[1] = C.invert(this.touch1[0])), this.that.__zoom = C, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(E) {
      var C = fn(this.that).datum();
      u.call(
        E,
        this.that,
        new Dh(E, {
          sourceEvent: this.sourceEvent,
          target: $,
          transform: this.that.__zoom,
          dispatch: u
        }),
        C
      );
    }
  };
  function N(E, ...C) {
    if (!e.apply(this, arguments)) return;
    var P = V(this, C).event(E), H = this.__zoom, M = Math.max(i[0], Math.min(i[1], H.k * Math.pow(2, r.apply(this, arguments)))), O = wn(E);
    if (P.wheel)
      (P.mouse[0][0] !== O[0] || P.mouse[0][1] !== O[1]) && (P.mouse[1] = H.invert(P.mouse[0] = O)), clearTimeout(P.wheel);
    else {
      if (H.k === M) return;
      P.mouse = [O, H.invert(O)], Si(this), P.start();
    }
    ko(E), P.wheel = setTimeout(A, h), P.zoom("mouse", n(_(g(H, M), P.mouse[0], P.mouse[1]), P.extent, a));
    function A() {
      P.wheel = null, P.end();
    }
  }
  function T(E, ...C) {
    if (v || !e.apply(this, arguments)) return;
    var P = E.currentTarget, H = V(this, C, !0).event(E), M = fn(E.view).on("mousemove.zoom", W, !0).on("mouseup.zoom", U, !0), O = wn(E, P), A = E.clientX, Y = E.clientY;
    gc(E.view), La(E), H.mouse = [O, this.__zoom.invert(O)], Si(this), H.start();
    function W(Q) {
      if (ko(Q), !H.moved) {
        var F = Q.clientX - A, ge = Q.clientY - Y;
        H.moved = F * F + ge * ge > x;
      }
      H.event(Q).zoom("mouse", n(_(H.that.__zoom, H.mouse[0] = wn(Q, P), H.mouse[1]), H.extent, a));
    }
    function U(Q) {
      M.on("mousemove.zoom mouseup.zoom", null), hc(Q.view, H.moved), ko(Q), H.event(Q).end();
    }
  }
  function I(E, ...C) {
    if (e.apply(this, arguments)) {
      var P = this.__zoom, H = wn(E.changedTouches ? E.changedTouches[0] : E, this), M = P.invert(H), O = P.k * (E.shiftKey ? 0.5 : 2), A = n(_(g(P, O), H, M), t.apply(this, C), a);
      ko(E), s > 0 ? fn(this).transition().duration(s).call(k, A, H, E) : fn(this).call($.transform, A, H, E);
    }
  }
  function R(E, ...C) {
    if (e.apply(this, arguments)) {
      var P = E.touches, H = P.length, M = V(this, C, E.changedTouches.length === H).event(E), O, A, Y, W;
      for (La(E), A = 0; A < H; ++A)
        Y = P[A], W = wn(Y, this), W = [W, this.__zoom.invert(W), Y.identifier], M.touch0 ? !M.touch1 && M.touch0[2] !== W[2] && (M.touch1 = W, M.taps = 0) : (M.touch0 = W, O = !0, M.taps = 1 + !!c);
      c && (c = clearTimeout(c)), O && (M.taps < 2 && (d = W[0], c = setTimeout(function() {
        c = null;
      }, p)), Si(this), M.start());
    }
  }
  function L(E, ...C) {
    if (this.__zooming) {
      var P = V(this, C).event(E), H = E.changedTouches, M = H.length, O, A, Y, W;
      for (ko(E), O = 0; O < M; ++O)
        A = H[O], Y = wn(A, this), P.touch0 && P.touch0[2] === A.identifier ? P.touch0[0] = Y : P.touch1 && P.touch1[2] === A.identifier && (P.touch1[0] = Y);
      if (A = P.that.__zoom, P.touch1) {
        var U = P.touch0[0], Q = P.touch0[1], F = P.touch1[0], ge = P.touch1[1], se = (se = F[0] - U[0]) * se + (se = F[1] - U[1]) * se, ye = (ye = ge[0] - Q[0]) * ye + (ye = ge[1] - Q[1]) * ye;
        A = g(A, Math.sqrt(se / ye)), Y = [(U[0] + F[0]) / 2, (U[1] + F[1]) / 2], W = [(Q[0] + ge[0]) / 2, (Q[1] + ge[1]) / 2];
      } else if (P.touch0) Y = P.touch0[0], W = P.touch0[1];
      else return;
      P.zoom("touch", n(_(A, Y, W), P.extent, a));
    }
  }
  function Z(E, ...C) {
    if (this.__zooming) {
      var P = V(this, C).event(E), H = E.changedTouches, M = H.length, O, A;
      for (La(E), v && clearTimeout(v), v = setTimeout(function() {
        v = null;
      }, p), O = 0; O < M; ++O)
        A = H[O], P.touch0 && P.touch0[2] === A.identifier ? delete P.touch0 : P.touch1 && P.touch1[2] === A.identifier && delete P.touch1;
      if (P.touch1 && !P.touch0 && (P.touch0 = P.touch1, delete P.touch1), P.touch0) P.touch0[1] = this.__zoom.invert(P.touch0[0]);
      else if (P.end(), P.taps === 2 && (A = wn(A, this), Math.hypot(d[0] - A[0], d[1] - A[1]) < b)) {
        var Y = fn(this).on("dblclick.zoom");
        Y && Y.apply(this, arguments);
      }
    }
  }
  return $.wheelDelta = function(E) {
    return arguments.length ? (r = typeof E == "function" ? E : mi(+E), $) : r;
  }, $.filter = function(E) {
    return arguments.length ? (e = typeof E == "function" ? E : mi(!!E), $) : e;
  }, $.touchable = function(E) {
    return arguments.length ? (o = typeof E == "function" ? E : mi(!!E), $) : o;
  }, $.extent = function(E) {
    return arguments.length ? (t = typeof E == "function" ? E : mi([[+E[0][0], +E[0][1]], [+E[1][0], +E[1][1]]]), $) : t;
  }, $.scaleExtent = function(E) {
    return arguments.length ? (i[0] = +E[0], i[1] = +E[1], $) : [i[0], i[1]];
  }, $.translateExtent = function(E) {
    return arguments.length ? (a[0][0] = +E[0][0], a[1][0] = +E[1][0], a[0][1] = +E[0][1], a[1][1] = +E[1][1], $) : [[a[0][0], a[0][1]], [a[1][0], a[1][1]]];
  }, $.constrain = function(E) {
    return arguments.length ? (n = E, $) : n;
  }, $.duration = function(E) {
    return arguments.length ? (s = +E, $) : s;
  }, $.interpolate = function(E) {
    return arguments.length ? (l = E, $) : l;
  }, $.on = function() {
    var E = u.on.apply(u, arguments);
    return E === u ? $ : E;
  }, $.clickDistance = function(E) {
    return arguments.length ? (x = (E = +E) * E, $) : Math.sqrt(x);
  }, $.tapDistance = function(E) {
    return arguments.length ? (b = +E, $) : b;
  }, $;
}
const ro = {
  error001: () => "[React Flow]: Seems like you have not used zustand provider as an ancestor. Help: https://reactflow.dev/error#001",
  error002: () => "It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",
  error003: (e) => `Node type "${e}" not found. Using fallback type "default".`,
  error004: () => "The React Flow parent container needs a width and a height to render the graph.",
  error005: () => "Only child nodes can use a parent extent.",
  error006: () => "Can't create edge. An edge needs a source and a target.",
  error007: (e) => `The old edge with id=${e} does not exist.`,
  error009: (e) => `Marker type "${e}" doesn't exist.`,
  error008: (e, { id: t, sourceHandle: n, targetHandle: r }) => `Couldn't create edge for ${e} handle id: "${e === "source" ? n : r}", edge id: ${t}.`,
  error010: () => "Handle: No node id found. Make sure to only use a Handle inside a custom Node.",
  error011: (e) => `Edge type "${e}" not found. Using fallback type "default".`,
  error012: (e) => `Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,
  error013: (e = "react") => `It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,
  error014: () => "useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",
  error015: () => "It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs."
}, Bi = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
];
var Or;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(Or || (Or = {}));
var cr;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(cr || (cr = {}));
var Xi;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(Xi || (Xi = {}));
const ss = {
  inProgress: !1,
  isValid: null,
  from: null,
  fromHandle: null,
  fromPosition: null,
  fromNode: null,
  to: null,
  toHandle: null,
  toPosition: null,
  toNode: null
};
var Wr;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(Wr || (Wr = {}));
var Bo;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(Bo || (Bo = {}));
var ze;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(ze || (ze = {}));
const Il = {
  [ze.Left]: ze.Right,
  [ze.Right]: ze.Left,
  [ze.Top]: ze.Bottom,
  [ze.Bottom]: ze.Top
};
function qh(e, t) {
  if (!e && !t)
    return !0;
  if (!e || !t || e.size !== t.size)
    return !1;
  if (!e.size && !t.size)
    return !0;
  for (const n of e.keys())
    if (!t.has(n))
      return !1;
  return !0;
}
function Rl(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, i) => {
    t != null && t.has(i) || r.push(o);
  }), r.length && n(r);
}
function Zh(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const Bh = (e) => "id" in e && "source" in e && "target" in e, Xh = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), Zs = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), Qo = (e, t = [0, 0]) => {
  const { width: n, height: r } = yr(e), o = e.origin ?? t, i = n * o[0], a = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - a
  };
}, Yh = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let a = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (a = i ? t.nodeLookup.get(o) : Zs(o) ? o : t.nodeLookup.get(o.id));
    const s = a ? Yi(a, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return ya(r, s);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return wa(n);
}, ei = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = Yi(r);
      n = ya(n, o);
    }
  }), wa(n);
}, Tc = (e, t, [n, r, o] = [0, 0, 1], i = !1, a = !1) => {
  const s = {
    ...ti(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: c, selectable: d = !0, hidden: v = !1 } = u;
    if (a && !d || v)
      continue;
    const p = c.width ?? u.width ?? u.initialWidth ?? null, h = c.height ?? u.height ?? u.initialHeight ?? null, x = Xo(s, io(u)), b = (p ?? 0) * (h ?? 0), $ = i && x > 0;
    (!u.internals.handleBounds || $ || x >= b || u.dragging) && l.push(u);
  }
  return l;
}, ls = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function jh(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t != null && t.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t != null && t.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function Wh({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, a) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const s = jh(e, a), l = ei(s), u = Xs(l, t, n, (a == null ? void 0 : a.minZoom) ?? o, (a == null ? void 0 : a.maxZoom) ?? i, (a == null ? void 0 : a.padding) ?? 0.1);
  return await r.setViewport(u, { duration: a == null ? void 0 : a.duration }), Promise.resolve(!0);
}
function Kh({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const a = n.get(e), s = a.parentId ? n.get(a.parentId) : void 0, { x: l, y: u } = s ? s.internals.positionAbsolute : { x: 0, y: 0 }, c = a.origin ?? r;
  let d = o;
  if (a.extent === "parent" && !a.expandParent)
    if (!s)
      i == null || i("005", ro.error005());
    else {
      const p = s.measured.width, h = s.measured.height;
      p && h && (d = [
        [l, u],
        [l + p, u + h]
      ]);
    }
  else s && ao(a.extent) && (d = [
    [a.extent[0][0] + l, a.extent[0][1] + u],
    [a.extent[1][0] + l, a.extent[1][1] + u]
  ]);
  const v = ao(d) ? Hr(t, d, a.measured) : t;
  return (a.measured.width === void 0 || a.measured.height === void 0) && (i == null || i("015", ro.error015())), {
    position: {
      x: v.x - l + (a.measured.width ?? 0) * c[0],
      y: v.y - u + (a.measured.height ?? 0) * c[1]
    },
    positionAbsolute: v
  };
}
async function Nc({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((d) => d.id)), a = [];
  for (const d of n) {
    if (d.deletable === !1)
      continue;
    const v = i.has(d.id), p = !v && d.parentId && a.find((h) => h.id === d.parentId);
    (v || p) && a.push(d);
  }
  const s = new Set(t.map((d) => d.id)), l = r.filter((d) => d.deletable !== !1), u = ls(a, l);
  for (const d of l)
    s.has(d.id) && !u.find((v) => v.id === d.id) && u.push(d);
  if (!o)
    return {
      edges: u,
      nodes: a
    };
  const c = await o({
    nodes: a,
    edges: u
  });
  return typeof c == "boolean" ? c ? { edges: u, nodes: a } : { edges: [], nodes: [] } : c;
}
const oo = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), Hr = (e = { x: 0, y: 0 }, t, n) => ({
  x: oo(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: oo(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function Dc(e, t, n) {
  const { width: r, height: o } = yr(n), { x: i, y: a } = n.internals.positionAbsolute;
  return Hr(e, [
    [i, a],
    [i + r, a + o]
  ], t);
}
const ql = (e, t, n) => e < t ? oo(Math.abs(e - t), 1, t) / t : e > n ? -oo(Math.abs(e - n), 1, t) / t : 0, Lc = (e, t, n = 15, r = 40) => {
  const o = ql(e.x, r, t.width - r) * n, i = ql(e.y, r, t.height - r) * n;
  return [o, i];
}, ya = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), us = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), wa = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), io = (e, t = [0, 0]) => {
  var n, r;
  const { x: o, y: i } = Zs(e) ? e.internals.positionAbsolute : Qo(e, t);
  return {
    x: o,
    y: i,
    width: ((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, Yi = (e, t = [0, 0]) => {
  var n, r;
  const { x: o, y: i } = Zs(e) ? e.internals.positionAbsolute : Qo(e, t);
  return {
    x: o,
    y: i,
    x2: o + (((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: i + (((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, zc = (e, t) => wa(ya(us(e), us(t))), Xo = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, Zl = (e) => Xn(e.width) && Xn(e.height) && Xn(e.x) && Xn(e.y), Xn = (e) => !isNaN(e) && isFinite(e), Fh = (e, t) => {
}, Bs = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), ti = ({ x: e, y: t }, [n, r, o], i = !1, a = [1, 1]) => {
  const s = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? Bs(s, a) : s;
}, ji = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
});
function qr(e, t) {
  if (typeof e == "number")
    return Math.floor((t - t / (1 + e)) * 0.5);
  if (typeof e == "string" && e.endsWith("px")) {
    const n = parseFloat(e);
    if (!Number.isNaN(n))
      return Math.floor(n);
  }
  if (typeof e == "string" && e.endsWith("%")) {
    const n = parseFloat(e);
    if (!Number.isNaN(n))
      return Math.floor(t * n * 0.01);
  }
  return console.error(`[React Flow] The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`), 0;
}
function Gh(e, t, n) {
  if (typeof e == "string" || typeof e == "number") {
    const r = qr(e, n), o = qr(e, t);
    return {
      top: r,
      right: o,
      bottom: r,
      left: o,
      x: o * 2,
      y: r * 2
    };
  }
  if (typeof e == "object") {
    const r = qr(e.top ?? e.y ?? 0, n), o = qr(e.bottom ?? e.y ?? 0, n), i = qr(e.left ?? e.x ?? 0, t), a = qr(e.right ?? e.x ?? 0, t);
    return { top: r, right: a, bottom: o, left: i, x: i + a, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function Uh(e, t, n, r, o, i) {
  const { x: a, y: s } = ji(e, [t, n, r]), { x: l, y: u } = ji({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), c = o - l, d = i - u;
  return {
    left: Math.floor(a),
    top: Math.floor(s),
    right: Math.floor(c),
    bottom: Math.floor(d)
  };
}
const Xs = (e, t, n, r, o, i) => {
  const a = Gh(i, t, n), s = (t - a.x) / e.width, l = (n - a.y) / e.height, u = Math.min(s, l), c = oo(u, r, o), d = e.x + e.width / 2, v = e.y + e.height / 2, p = t / 2 - d * c, h = n / 2 - v * c, x = Uh(e, p, h, c, t, n), b = {
    left: Math.min(x.left - a.left, 0),
    top: Math.min(x.top - a.top, 0),
    right: Math.min(x.right - a.right, 0),
    bottom: Math.min(x.bottom - a.bottom, 0)
  };
  return {
    x: p - b.left + b.right,
    y: h - b.top + b.bottom,
    zoom: c
  };
}, Wi = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function ao(e) {
  return e !== void 0 && e !== "parent";
}
function yr(e) {
  var t, n;
  return {
    width: ((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight ?? 0
  };
}
function Ac(e) {
  var t, n;
  return (((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth) !== void 0 && (((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight) !== void 0;
}
function Jh(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, a = r.get(n);
  if (a) {
    const s = a.origin || o;
    i.x += a.internals.positionAbsolute.x - (t.width ?? 0) * s[0], i.y += a.internals.positionAbsolute.y - (t.height ?? 0) * s[1];
  }
  return i;
}
function Qh() {
  let e, t;
  return { promise: new Promise((n, r) => {
    e = n, t = r;
  }), resolve: e, reject: t };
}
function za(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: a } = Wn(e), s = ti({ x: i - ((o == null ? void 0 : o.left) ?? 0), y: a - ((o == null ? void 0 : o.top) ?? 0) }, r), { x: l, y: u } = n ? Bs(s, t) : s;
  return {
    xSnapped: l,
    ySnapped: u,
    ...s
  };
}
const Ic = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), e0 = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, t0 = ["INPUT", "SELECT", "TEXTAREA"];
function n0(e) {
  var t, n;
  const r = ((n = (t = e.composedPath) == null ? void 0 : t.call(e)) == null ? void 0 : n[0]) || e.target;
  return (r == null ? void 0 : r.nodeType) !== 1 ? !1 : t0.includes(r.nodeName) || r.hasAttribute("contenteditable") || !!r.closest(".nokey");
}
const Rc = (e) => "clientX" in e, Wn = (e, t) => {
  var n, r;
  const o = Rc(e), i = o ? e.clientX : (n = e.touches) == null ? void 0 : n[0].clientX, a = o ? e.clientY : (r = e.touches) == null ? void 0 : r[0].clientY;
  return {
    x: i - ((t == null ? void 0 : t.left) ?? 0),
    y: a - ((t == null ? void 0 : t.top) ?? 0)
  };
}, Bl = (e, t, n, r, o) => {
  const i = t.querySelectorAll(`.${e}`);
  return !i || !i.length ? null : Array.from(i).map((a) => {
    const s = a.getBoundingClientRect();
    return {
      id: a.getAttribute("data-handleid"),
      type: e,
      nodeId: o,
      position: a.getAttribute("data-handlepos"),
      x: (s.left - n.left) / r,
      y: (s.top - n.top) / r,
      ...Ic(a)
    };
  });
};
function r0({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: a, targetControlY: s }) {
  const l = e * 0.125 + o * 0.375 + a * 0.375 + n * 0.125, u = t * 0.125 + i * 0.375 + s * 0.375 + r * 0.125, c = Math.abs(l - e), d = Math.abs(u - t);
  return [l, u, c, d];
}
function yi(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function Xl({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case ze.Left:
      return [t - yi(t - r, i), n];
    case ze.Right:
      return [t + yi(r - t, i), n];
    case ze.Top:
      return [t, n - yi(n - o, i)];
    case ze.Bottom:
      return [t, n + yi(o - n, i)];
  }
}
function qc({ sourceX: e, sourceY: t, sourcePosition: n = ze.Bottom, targetX: r, targetY: o, targetPosition: i = ze.Top, curvature: a = 0.25 }) {
  const [s, l] = Xl({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: a
  }), [u, c] = Xl({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: a
  }), [d, v, p, h] = r0({
    sourceX: e,
    sourceY: t,
    targetX: r,
    targetY: o,
    sourceControlX: s,
    sourceControlY: l,
    targetControlX: u,
    targetControlY: c
  });
  return [
    `M${e},${t} C${s},${l} ${u},${c} ${r},${o}`,
    d,
    v,
    p,
    h
  ];
}
function Zc({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, a = Math.abs(r - t) / 2, s = r < t ? r + a : r - a;
  return [i, s, o, a];
}
function o0({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1 }) {
  if (!o)
    return r;
  const i = n || t.selected || e.selected, a = Math.max(e.internals.z || 0, t.internals.z || 0, 1e3);
  return r + (i ? a : 0);
}
function i0({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = ya(Yi(e), Yi(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const a = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return Xo(a, wa(i)) > 0;
}
const a0 = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, s0 = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), l0 = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return Bh(e) ? n = { ...e } : n = {
    ...e,
    id: a0(e)
  }, s0(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function cs({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, a, s] = Zc({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, a, s];
}
const Yl = {
  [ze.Left]: { x: -1, y: 0 },
  [ze.Right]: { x: 1, y: 0 },
  [ze.Top]: { x: 0, y: -1 },
  [ze.Bottom]: { x: 0, y: 1 }
}, u0 = ({ source: e, sourcePosition: t = ze.Bottom, target: n }) => t === ze.Left || t === ze.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, jl = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function c0({ source: e, sourcePosition: t = ze.Bottom, target: n, targetPosition: r = ze.Top, center: o, offset: i }) {
  const a = Yl[t], s = Yl[r], l = { x: e.x + a.x * i, y: e.y + a.y * i }, u = { x: n.x + s.x * i, y: n.y + s.y * i }, c = u0({
    source: l,
    sourcePosition: t,
    target: u
  }), d = c.x !== 0 ? "x" : "y", v = c[d];
  let p = [], h, x;
  const b = { x: 0, y: 0 }, $ = { x: 0, y: 0 }, [g, _, w, k] = Zc({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[d] * s[d] === -1) {
    h = o.x ?? g, x = o.y ?? _;
    const V = [
      { x: h, y: l.y },
      { x: h, y: u.y }
    ], S = [
      { x: l.x, y: x },
      { x: u.x, y: x }
    ];
    a[d] === v ? p = d === "x" ? V : S : p = d === "x" ? S : V;
  } else {
    const V = [{ x: l.x, y: u.y }], S = [{ x: u.x, y: l.y }];
    if (d === "x" ? p = a.x === v ? S : V : p = a.y === v ? V : S, t === r) {
      const L = Math.abs(e[d] - n[d]);
      if (L <= i) {
        const Z = Math.min(i - 1, i - L);
        a[d] === v ? b[d] = (l[d] > e[d] ? -1 : 1) * Z : $[d] = (u[d] > n[d] ? -1 : 1) * Z;
      }
    }
    if (t !== r) {
      const L = d === "x" ? "y" : "x", Z = a[d] === s[L], E = l[L] > u[L], C = l[L] < u[L];
      (a[d] === 1 && (!Z && E || Z && C) || a[d] !== 1 && (!Z && C || Z && E)) && (p = d === "x" ? V : S);
    }
    const N = { x: l.x + b.x, y: l.y + b.y }, T = { x: u.x + $.x, y: u.y + $.y }, I = Math.max(Math.abs(N.x - p[0].x), Math.abs(T.x - p[0].x)), R = Math.max(Math.abs(N.y - p[0].y), Math.abs(T.y - p[0].y));
    I >= R ? (h = (N.x + T.x) / 2, x = p[0].y) : (h = p[0].x, x = (N.y + T.y) / 2);
  }
  return [[
    e,
    { x: l.x + b.x, y: l.y + b.y },
    ...p,
    { x: u.x + $.x, y: u.y + $.y },
    n
  ], h, x, w, k];
}
function d0(e, t, n, r) {
  const o = Math.min(jl(e, t) / 2, jl(t, n) / 2, r), { x: i, y: a } = t;
  if (e.x === i && i === n.x || e.y === a && a === n.y)
    return `L${i} ${a}`;
  if (e.y === a) {
    const u = e.x < n.x ? -1 : 1, c = e.y < n.y ? 1 : -1;
    return `L ${i + o * u},${a}Q ${i},${a} ${i},${a + o * c}`;
  }
  const s = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${a + o * l}Q ${i},${a} ${i + o * s},${a}`;
}
function Ki({ sourceX: e, sourceY: t, sourcePosition: n = ze.Bottom, targetX: r, targetY: o, targetPosition: i = ze.Top, borderRadius: a = 5, centerX: s, centerY: l, offset: u = 20 }) {
  const [c, d, v, p, h] = c0({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: s, y: l },
    offset: u
  });
  return [c.reduce((x, b, $) => {
    let g = "";
    return $ > 0 && $ < c.length - 1 ? g = d0(c[$ - 1], b, c[$ + 1], a) : g = `${$ === 0 ? "M" : "L"}${b.x} ${b.y}`, x += g, x;
  }, ""), d, v, p, h];
}
function Wl(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function f0(e) {
  var t;
  const { sourceNode: n, targetNode: r } = e;
  if (!Wl(n) || !Wl(r))
    return null;
  const o = n.internals.handleBounds || Kl(n.handles), i = r.internals.handleBounds || Kl(r.handles), a = Fl((o == null ? void 0 : o.source) ?? [], e.sourceHandle), s = Fl(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === Or.Strict ? (i == null ? void 0 : i.target) ?? [] : ((i == null ? void 0 : i.target) ?? []).concat((i == null ? void 0 : i.source) ?? []),
    e.targetHandle
  );
  if (!a || !s)
    return (t = e.onError) == null || t.call(e, "008", ro.error008(a ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const l = (a == null ? void 0 : a.position) || ze.Bottom, u = (s == null ? void 0 : s.position) || ze.Top, c = Yo(n, a, l), d = Yo(r, s, u);
  return {
    sourceX: c.x,
    sourceY: c.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: l,
    targetPosition: u
  };
}
function Kl(e) {
  if (!e)
    return null;
  const t = [], n = [];
  for (const r of e)
    r.width = r.width ?? 1, r.height = r.height ?? 1, r.type === "source" ? t.push(r) : r.type === "target" && n.push(r);
  return {
    source: t,
    target: n
  };
}
function Yo(e, t, n = ze.Left, r = !1) {
  const o = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, i = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: a, height: s } = t ?? yr(e);
  if (r)
    return { x: o + a / 2, y: i + s / 2 };
  switch ((t == null ? void 0 : t.position) ?? n) {
    case ze.Top:
      return { x: o + a / 2, y: i };
    case ze.Right:
      return { x: o + a, y: i + s / 2 };
    case ze.Bottom:
      return { x: o + a / 2, y: i + s };
    case ze.Left:
      return { x: o, y: i + s / 2 };
  }
}
function Fl(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function ds(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((n) => `${n}=${e[n]}`).join("&")}` : "";
}
function v0(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((a, s) => ([s.markerStart || r, s.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = ds(l, t);
      i.has(u) || (a.push({ id: u, color: l.color || n, ...l }), i.add(u));
    }
  }), a), []).sort((a, s) => a.id.localeCompare(s.id));
}
function p0(e, t, n, r, o) {
  let i = 0.5;
  o === "start" ? i = 0 : o === "end" && (i = 1);
  let a = [
    (e.x + e.width * i) * t.zoom + t.x,
    e.y * t.zoom + t.y - r
  ], s = [-100 * i, -100];
  switch (n) {
    case ze.Right:
      a = [
        (e.x + e.width) * t.zoom + t.x + r,
        (e.y + e.height * i) * t.zoom + t.y
      ], s = [0, -100 * i];
      break;
    case ze.Bottom:
      a[1] = (e.y + e.height) * t.zoom + t.y + r, s[1] = 0;
      break;
    case ze.Left:
      a = [
        e.x * t.zoom + t.x - r,
        (e.y + e.height * i) * t.zoom + t.y
      ], s = [-100, -100 * i];
      break;
  }
  return `translate(${a[0]}px, ${a[1]}px) translate(${s[0]}%, ${s[1]}%)`;
}
const Ys = {
  nodeOrigin: [0, 0],
  nodeExtent: Bi,
  elevateNodesOnSelect: !0,
  defaults: {}
}, g0 = {
  ...Ys,
  checkEquality: !0
};
function js(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function h0(e, t, n) {
  const r = js(Ys, n);
  for (const o of e.values())
    if (o.parentId)
      Ws(o, e, t, r);
    else {
      const i = Qo(o, r.nodeOrigin), a = ao(o.extent) ? o.extent : r.nodeExtent, s = Hr(i, a, yr(o));
      o.internals.positionAbsolute = s;
    }
}
function Bc(e, t, n, r) {
  var o, i;
  const a = js(g0, r);
  let s = e.length > 0;
  const l = new Map(t), u = a != null && a.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const c of e) {
    let d = l.get(c.id);
    if (a.checkEquality && c === (d == null ? void 0 : d.internals.userNode))
      t.set(c.id, d);
    else {
      const v = Qo(c, a.nodeOrigin), p = ao(c.extent) ? c.extent : a.nodeExtent, h = Hr(v, p, yr(c));
      d = {
        ...a.defaults,
        ...c,
        measured: {
          width: (o = c.measured) == null ? void 0 : o.width,
          height: (i = c.measured) == null ? void 0 : i.height
        },
        internals: {
          positionAbsolute: h,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: c.measured ? d == null ? void 0 : d.internals.handleBounds : void 0,
          z: Xc(c, u),
          userNode: c
        }
      }, t.set(c.id, d);
    }
    (d.measured === void 0 || d.measured.width === void 0 || d.measured.height === void 0) && !d.hidden && (s = !1), c.parentId && Ws(d, t, n, r);
  }
  return s;
}
function m0(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function Ws(e, t, n, r) {
  const { elevateNodesOnSelect: o, nodeOrigin: i, nodeExtent: a } = js(Ys, r), s = e.parentId, l = t.get(s);
  if (!l) {
    console.warn(`Parent node ${s} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  m0(e, n);
  const u = o ? 1e3 : 0, { x: c, y: d, z: v } = y0(e, l, i, a, u), { positionAbsolute: p } = e.internals, h = c !== p.x || d !== p.y;
  (h || v !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: h ? { x: c, y: d } : p,
      z: v
    }
  });
}
function Xc(e, t) {
  return (Xn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function y0(e, t, n, r, o) {
  const { x: i, y: a } = t.internals.positionAbsolute, s = yr(e), l = Qo(e, n), u = ao(e.extent) ? Hr(l, e.extent, s) : l;
  let c = Hr({ x: i + u.x, y: a + u.y }, r, s);
  e.extent === "parent" && (c = Dc(c, s, t));
  const d = Xc(e, o), v = t.internals.z ?? 0;
  return {
    x: c.x,
    y: c.y,
    z: v > d ? v : d
  };
}
function w0(e, t, n, r = [0, 0]) {
  var o;
  const i = [], a = /* @__PURE__ */ new Map();
  for (const s of e) {
    const l = t.get(s.parentId);
    if (!l)
      continue;
    const u = ((o = a.get(s.parentId)) == null ? void 0 : o.expandedRect) ?? io(l), c = zc(u, s.rect);
    a.set(s.parentId, { expandedRect: c, parent: l });
  }
  return a.size > 0 && a.forEach(({ expandedRect: s, parent: l }, u) => {
    var c;
    const d = l.internals.positionAbsolute, v = yr(l), p = l.origin ?? r, h = s.x < d.x ? Math.round(Math.abs(d.x - s.x)) : 0, x = s.y < d.y ? Math.round(Math.abs(d.y - s.y)) : 0, b = Math.max(v.width, Math.round(s.width)), $ = Math.max(v.height, Math.round(s.height)), g = (b - v.width) * p[0], _ = ($ - v.height) * p[1];
    (h > 0 || x > 0 || g || _) && (i.push({
      id: u,
      type: "position",
      position: {
        x: l.position.x - h + g,
        y: l.position.y - x + _
      }
    }), (c = n.get(u)) == null || c.forEach((w) => {
      e.some((k) => k.id === w.id) || i.push({
        id: w.id,
        type: "position",
        position: {
          x: w.position.x + h,
          y: w.position.y + x
        }
      });
    })), (v.width < s.width || v.height < s.height || h || x) && i.push({
      id: u,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: b + (h ? p[0] * h - g : 0),
        height: $ + (x ? p[1] * x - _ : 0)
      }
    });
  }), i;
}
function b0(e, t, n, r, o, i) {
  const a = r == null ? void 0 : r.querySelector(".xyflow__viewport");
  let s = !1;
  if (!a)
    return { changes: [], updatedInternals: s };
  const l = [], u = window.getComputedStyle(a), { m22: c } = new window.DOMMatrixReadOnly(u.transform), d = [];
  for (const v of e.values()) {
    const p = t.get(v.id);
    if (!p)
      continue;
    if (p.hidden) {
      t.set(p.id, {
        ...p,
        internals: {
          ...p.internals,
          handleBounds: void 0
        }
      }), s = !0;
      continue;
    }
    const h = Ic(v.nodeElement), x = p.measured.width !== h.width || p.measured.height !== h.height;
    if (h.width && h.height && (x || !p.internals.handleBounds || v.force)) {
      const b = v.nodeElement.getBoundingClientRect(), $ = ao(p.extent) ? p.extent : i;
      let { positionAbsolute: g } = p.internals;
      p.parentId && p.extent === "parent" ? g = Dc(g, h, t.get(p.parentId)) : $ && (g = Hr(g, $, h));
      const _ = {
        ...p,
        measured: h,
        internals: {
          ...p.internals,
          positionAbsolute: g,
          handleBounds: {
            source: Bl("source", v.nodeElement, b, c, p.id),
            target: Bl("target", v.nodeElement, b, c, p.id)
          }
        }
      };
      t.set(p.id, _), p.parentId && Ws(_, t, n, { nodeOrigin: o }), s = !0, x && (l.push({
        id: p.id,
        type: "dimensions",
        dimensions: h
      }), p.expandParent && p.parentId && d.push({
        id: p.id,
        parentId: p.parentId,
        rect: io(_, o)
      }));
    }
  }
  if (d.length > 0) {
    const v = w0(d, t, n, o);
    l.push(...v);
  }
  return { changes: l, updatedInternals: s };
}
async function x0({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
  if (!t || !e.x && !e.y)
    return Promise.resolve(!1);
  const a = await t.setViewportConstrained({
    x: n[0] + e.x,
    y: n[1] + e.y,
    zoom: n[2]
  }, [
    [0, 0],
    [o, i]
  ], r), s = !!a && (a.x !== n[0] || a.y !== n[1] || a.k !== n[2]);
  return Promise.resolve(s);
}
function Gl(e, t, n, r, o, i) {
  let a = o;
  const s = r.get(a) || /* @__PURE__ */ new Map();
  r.set(a, s.set(n, t)), a = `${o}-${e}`;
  const l = r.get(a) || /* @__PURE__ */ new Map();
  if (r.set(a, l.set(n, t)), i) {
    a = `${o}-${e}-${i}`;
    const u = r.get(a) || /* @__PURE__ */ new Map();
    r.set(a, u.set(n, t));
  }
}
function Yc(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: a = null, targetHandle: s = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: a, targetHandle: s }, u = `${o}-${a}--${i}-${s}`, c = `${i}-${s}--${o}-${a}`;
    Gl("source", l, c, e, o, a), Gl("target", l, u, e, i, s), t.set(r.id, r);
  }
}
function $0(e, t) {
  if (e === null || t === null)
    return !1;
  const n = Array.isArray(e) ? e : [e], r = Array.isArray(t) ? t : [t];
  if (n.length !== r.length)
    return !1;
  for (let o = 0; o < n.length; o++)
    if (n[o].id !== r[o].id || n[o].type !== r[o].type || !Object.is(n[o].data, r[o].data))
      return !1;
  return !0;
}
function jc(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : jc(n, t) : !1;
}
function Ul(e, t, n) {
  var r;
  let o = e;
  do {
    if ((r = o == null ? void 0 : o.matches) != null && r.call(o, t))
      return !0;
    if (o === n)
      return !1;
    o = o == null ? void 0 : o.parentElement;
  } while (o);
  return !1;
}
function C0(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, a] of e)
    if ((a.selected || a.id === r) && (!a.parentId || !jc(a, e)) && (a.draggable || t && typeof a.draggable > "u")) {
      const s = e.get(i);
      s && o.set(i, {
        id: i,
        position: s.position || { x: 0, y: 0 },
        distance: {
          x: n.x - s.internals.positionAbsolute.x,
          y: n.y - s.internals.positionAbsolute.y
        },
        extent: s.extent,
        parentId: s.parentId,
        origin: s.origin,
        expandParent: s.expandParent,
        internals: {
          positionAbsolute: s.internals.positionAbsolute || { x: 0, y: 0 }
        },
        measured: {
          width: s.measured.width ?? 0,
          height: s.measured.height ?? 0
        }
      });
    }
  return o;
}
function Aa({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
  var o, i, a;
  const s = [];
  for (const [u, c] of t) {
    const d = (o = n.get(u)) == null ? void 0 : o.internals.userNode;
    d && s.push({
      ...d,
      position: c.position,
      dragging: r
    });
  }
  if (!e)
    return [s[0], s];
  const l = (i = n.get(e)) == null ? void 0 : i.internals.userNode;
  return [
    l ? {
      ...l,
      position: ((a = t.get(e)) == null ? void 0 : a.position) || l.position,
      dragging: r
    } : s[0],
    s
  ];
}
function _0({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, a = 0, s = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, c = null, d = !1, v = null, p = !1;
  function h({ noDragClassName: b, handleSelector: $, domNode: g, isSelectable: _, nodeId: w, nodeClickDistance: k = 0 }) {
    v = fn(g);
    function V({ x: I, y: R }, L) {
      const { nodeLookup: Z, nodeExtent: E, snapGrid: C, snapToGrid: P, nodeOrigin: H, onNodeDrag: M, onSelectionDrag: O, onError: A, updateNodePositions: Y } = t();
      i = { x: I, y: R };
      let W = !1, U = { x: 0, y: 0, x2: 0, y2: 0 };
      if (s.size > 1 && E) {
        const Q = ei(s);
        U = us(Q);
      }
      for (const [Q, F] of s) {
        if (!Z.has(Q))
          continue;
        let ge = { x: I - F.distance.x, y: R - F.distance.y };
        P && (ge = Bs(ge, C));
        let se = [
          [E[0][0], E[0][1]],
          [E[1][0], E[1][1]]
        ];
        if (s.size > 1 && E && !F.extent) {
          const { positionAbsolute: ke } = F.internals, $e = ke.x - U.x + E[0][0], He = ke.x + F.measured.width - U.x2 + E[1][0], ce = ke.y - U.y + E[0][1], J = ke.y + F.measured.height - U.y2 + E[1][1];
          se = [
            [$e, ce],
            [He, J]
          ];
        }
        const { position: ye, positionAbsolute: le } = Kh({
          nodeId: Q,
          nextPosition: ge,
          nodeLookup: Z,
          nodeExtent: se,
          nodeOrigin: H,
          onError: A
        });
        W = W || F.position.x !== ye.x || F.position.y !== ye.y, F.position = ye, F.internals.positionAbsolute = le;
      }
      if (W && (Y(s, !0), L && (r || M || !w && O))) {
        const [Q, F] = Aa({
          nodeId: w,
          dragItems: s,
          nodeLookup: Z
        });
        r == null || r(L, s, Q, F), M == null || M(L, Q, F), w || O == null || O(L, F);
      }
    }
    async function S() {
      if (!c)
        return;
      const { transform: I, panBy: R, autoPanSpeed: L, autoPanOnNodeDrag: Z } = t();
      if (!Z) {
        l = !1, cancelAnimationFrame(a);
        return;
      }
      const [E, C] = Lc(u, c, L);
      (E !== 0 || C !== 0) && (i.x = (i.x ?? 0) - E / I[2], i.y = (i.y ?? 0) - C / I[2], await R({ x: E, y: C }) && V(i, null)), a = requestAnimationFrame(S);
    }
    function N(I) {
      var R;
      const { nodeLookup: L, multiSelectionActive: Z, nodesDraggable: E, transform: C, snapGrid: P, snapToGrid: H, selectNodesOnDrag: M, onNodeDragStart: O, onSelectionDragStart: A, unselectNodesAndEdges: Y } = t();
      d = !0, (!M || !_) && !Z && w && ((R = L.get(w)) != null && R.selected || Y()), _ && M && w && (e == null || e(w));
      const W = za(I.sourceEvent, { transform: C, snapGrid: P, snapToGrid: H, containerBounds: c });
      if (i = W, s = C0(L, E, W, w), s.size > 0 && (n || O || !w && A)) {
        const [U, Q] = Aa({
          nodeId: w,
          dragItems: s,
          nodeLookup: L
        });
        n == null || n(I.sourceEvent, s, U, Q), O == null || O(I.sourceEvent, U, Q), w || A == null || A(I.sourceEvent, Q);
      }
    }
    const T = Up().clickDistance(k).on("start", (I) => {
      const { domNode: R, nodeDragThreshold: L, transform: Z, snapGrid: E, snapToGrid: C } = t();
      c = (R == null ? void 0 : R.getBoundingClientRect()) || null, p = !1, L === 0 && N(I), i = za(I.sourceEvent, { transform: Z, snapGrid: E, snapToGrid: C, containerBounds: c }), u = Wn(I.sourceEvent, c);
    }).on("drag", (I) => {
      const { autoPanOnNodeDrag: R, transform: L, snapGrid: Z, snapToGrid: E, nodeDragThreshold: C, nodeLookup: P } = t(), H = za(I.sourceEvent, { transform: L, snapGrid: Z, snapToGrid: E, containerBounds: c });
      if ((I.sourceEvent.type === "touchmove" && I.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      w && !P.has(w)) && (p = !0), !p) {
        if (!l && R && d && (l = !0, S()), !d) {
          const M = H.xSnapped - (i.x ?? 0), O = H.ySnapped - (i.y ?? 0);
          Math.sqrt(M * M + O * O) > C && N(I);
        }
        (i.x !== H.xSnapped || i.y !== H.ySnapped) && s && d && (u = Wn(I.sourceEvent, c), V(H, I.sourceEvent));
      }
    }).on("end", (I) => {
      if (!(!d || p) && (l = !1, d = !1, cancelAnimationFrame(a), s.size > 0)) {
        const { nodeLookup: R, updateNodePositions: L, onNodeDragStop: Z, onSelectionDragStop: E } = t();
        if (L(s, !1), o || Z || !w && E) {
          const [C, P] = Aa({
            nodeId: w,
            dragItems: s,
            nodeLookup: R,
            dragging: !1
          });
          o == null || o(I.sourceEvent, s, C, P), Z == null || Z(I.sourceEvent, C, P), w || E == null || E(I.sourceEvent, P);
        }
      }
    }).filter((I) => {
      const R = I.target;
      return !I.button && (!b || !Ul(R, `.${b}`, g)) && (!$ || Ul(R, $, g));
    });
    v.call(T);
  }
  function x() {
    v == null || v.on(".drag", null);
  }
  return {
    update: h,
    destroy: x
  };
}
function k0(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    Xo(o, io(i)) > 0 && r.push(i);
  return r;
}
const S0 = 250;
function E0(e, t, n, r) {
  var o, i;
  let a = [], s = 1 / 0;
  const l = k0(e, n, t + S0);
  for (const u of l) {
    const c = [...((o = u.internals.handleBounds) == null ? void 0 : o.source) ?? [], ...((i = u.internals.handleBounds) == null ? void 0 : i.target) ?? []];
    for (const d of c) {
      if (r.nodeId === d.nodeId && r.type === d.type && r.id === d.id)
        continue;
      const { x: v, y: p } = Yo(u, d, d.position, !0), h = Math.sqrt(Math.pow(v - e.x, 2) + Math.pow(p - e.y, 2));
      h > t || (h < s ? (a = [{ ...d, x: v, y: p }], s = h) : h === s && a.push({ ...d, x: v, y: p }));
    }
  }
  if (!a.length)
    return null;
  if (a.length > 1) {
    const u = r.type === "source" ? "target" : "source";
    return a.find((c) => c.type === u) ?? a[0];
  }
  return a[0];
}
function Wc(e, t, n, r, o, i = !1) {
  var a, s, l;
  const u = r.get(e);
  if (!u)
    return null;
  const c = o === "strict" ? (a = u.internals.handleBounds) == null ? void 0 : a[t] : [...((s = u.internals.handleBounds) == null ? void 0 : s.source) ?? [], ...((l = u.internals.handleBounds) == null ? void 0 : l.target) ?? []], d = (n ? c == null ? void 0 : c.find((v) => v.id === n) : c == null ? void 0 : c[0]) ?? null;
  return d && i ? { ...d, ...Yo(u, d, d.position, !0) } : d;
}
function Kc(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function P0(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const Fc = () => !0;
function M0(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: a, domNode: s, nodeLookup: l, lib: u, autoPanOnConnect: c, flowId: d, panBy: v, cancelConnection: p, onConnectStart: h, onConnect: x, onConnectEnd: b, isValidConnection: $ = Fc, onReconnectEnd: g, updateConnection: _, getTransform: w, getFromHandle: k, autoPanSpeed: V }) {
  const S = e0(e.target);
  let N = 0, T;
  const { x: I, y: R } = Wn(e), L = S == null ? void 0 : S.elementFromPoint(I, R), Z = Kc(i, L), E = s == null ? void 0 : s.getBoundingClientRect();
  if (!E || !Z)
    return;
  const C = Wc(o, Z, r, l, t);
  if (!C)
    return;
  let P = Wn(e, E), H = !1, M = null, O = !1, A = null;
  function Y() {
    if (!c || !E)
      return;
    const [ye, le] = Lc(P, E, V);
    v({ x: ye, y: le }), N = requestAnimationFrame(Y);
  }
  const W = {
    ...C,
    nodeId: o,
    type: Z,
    position: C.position
  }, U = l.get(o), Q = {
    inProgress: !0,
    isValid: null,
    from: Yo(U, W, ze.Left, !0),
    fromHandle: W,
    fromPosition: W.position,
    fromNode: U,
    to: P,
    toHandle: null,
    toPosition: Il[W.position],
    toNode: null
  };
  _(Q);
  let F = Q;
  h == null || h(e, { nodeId: o, handleId: r, handleType: Z });
  function ge(ye) {
    if (!k() || !W) {
      se(ye);
      return;
    }
    const le = w();
    P = Wn(ye, E), T = E0(ti(P, le, !1, [1, 1]), n, l, W), H || (Y(), H = !0);
    const ke = Gc(ye, {
      handle: T,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: a ? "target" : "source",
      isValidConnection: $,
      doc: S,
      lib: u,
      flowId: d,
      nodeLookup: l
    });
    A = ke.handleDomNode, M = ke.connection, O = P0(!!T, ke.isValid);
    const $e = {
      // from stays the same
      ...F,
      isValid: O,
      to: T && O ? ji({ x: T.x, y: T.y }, le) : P,
      toHandle: ke.toHandle,
      toPosition: O && ke.toHandle ? ke.toHandle.position : Il[W.position],
      toNode: ke.toHandle ? l.get(ke.toHandle.nodeId) : null
    };
    O && T && F.toHandle && $e.toHandle && F.toHandle.type === $e.toHandle.type && F.toHandle.nodeId === $e.toHandle.nodeId && F.toHandle.id === $e.toHandle.id && F.to.x === $e.to.x && F.to.y === $e.to.y || (_($e), F = $e);
  }
  function se(ye) {
    (T || A) && M && O && (x == null || x(M));
    const { inProgress: le, ...ke } = F, $e = {
      ...ke,
      toPosition: F.toHandle ? F.toPosition : null
    };
    b == null || b(ye, $e), i && (g == null || g(ye, $e)), p(), cancelAnimationFrame(N), H = !1, O = !1, M = null, A = null, S.removeEventListener("mousemove", ge), S.removeEventListener("mouseup", se), S.removeEventListener("touchmove", ge), S.removeEventListener("touchend", se);
  }
  S.addEventListener("mousemove", ge), S.addEventListener("mouseup", se), S.addEventListener("touchmove", ge), S.addEventListener("touchend", se);
}
function Gc(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: a, lib: s, flowId: l, isValidConnection: u = Fc, nodeLookup: c }) {
  const d = i === "target", v = t ? a.querySelector(`.${s}-flow__handle[data-id="${l}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: p, y: h } = Wn(e), x = a.elementFromPoint(p, h), b = x != null && x.classList.contains(`${s}-flow__handle`) ? x : v, $ = {
    handleDomNode: b,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (b) {
    const g = Kc(void 0, b), _ = b.getAttribute("data-nodeid"), w = b.getAttribute("data-handleid"), k = b.classList.contains("connectable"), V = b.classList.contains("connectableend");
    if (!_ || !g)
      return $;
    const S = {
      source: d ? _ : r,
      sourceHandle: d ? w : o,
      target: d ? r : _,
      targetHandle: d ? o : w
    };
    $.connection = S;
    const N = k && V && (n === Or.Strict ? d && g === "source" || !d && g === "target" : _ !== r || w !== o);
    $.isValid = N && u(S), $.toHandle = Wc(_, g, w, c, n, !1);
  }
  return $;
}
const V0 = {
  onPointerDown: M0,
  isValid: Gc
};
function O0({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = fn(e);
  function i({ translateExtent: s, width: l, height: u, zoomStep: c = 10, pannable: d = !0, zoomable: v = !0, inversePan: p = !1 }) {
    const h = (_) => {
      const w = n();
      if (_.sourceEvent.type !== "wheel" || !t)
        return;
      const k = -_.sourceEvent.deltaY * (_.sourceEvent.deltaMode === 1 ? 0.05 : _.sourceEvent.deltaMode ? 1 : 2e-3) * c, V = w[2] * Math.pow(2, k);
      t.scaleTo(V);
    };
    let x = [0, 0];
    const b = (_) => {
      (_.sourceEvent.type === "mousedown" || _.sourceEvent.type === "touchstart") && (x = [
        _.sourceEvent.clientX ?? _.sourceEvent.touches[0].clientX,
        _.sourceEvent.clientY ?? _.sourceEvent.touches[0].clientY
      ]);
    }, $ = (_) => {
      const w = n();
      if (_.sourceEvent.type !== "mousemove" && _.sourceEvent.type !== "touchmove" || !t)
        return;
      const k = [
        _.sourceEvent.clientX ?? _.sourceEvent.touches[0].clientX,
        _.sourceEvent.clientY ?? _.sourceEvent.touches[0].clientY
      ], V = [k[0] - x[0], k[1] - x[1]];
      x = k;
      const S = r() * Math.max(w[2], Math.log(w[2])) * (p ? -1 : 1), N = {
        x: w[0] - V[0] * S,
        y: w[1] - V[1] * S
      }, T = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: N.x,
        y: N.y,
        zoom: w[2]
      }, T, s);
    }, g = Hc().on("start", b).on("zoom", d ? $ : null).on("zoom.wheel", v ? h : null);
    o.call(g, {});
  }
  function a() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: a,
    pointer: wn
  };
}
const H0 = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, ba = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), Ia = ({ x: e, y: t, zoom: n }) => ma.translate(e, t).scale(n), Br = (e, t) => e.target.closest(`.${t}`), Uc = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), Ra = (e, t = 0, n = () => {
}) => {
  const r = typeof t == "number" && t > 0;
  return r || n(), r ? e.transition().duration(t).on("end", n) : e;
}, Jc = (e) => {
  const t = e.ctrlKey && Wi() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function T0({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: a, onPanZoomStart: s, onPanZoom: l, onPanZoomEnd: u }) {
  return (c) => {
    if (Br(c, t))
      return !1;
    c.preventDefault(), c.stopImmediatePropagation();
    const d = n.property("__zoom").k || 1;
    if (c.ctrlKey && a) {
      const b = wn(c), $ = Jc(c), g = d * Math.pow(2, $);
      r.scaleTo(n, g, b, c);
      return;
    }
    const v = c.deltaMode === 1 ? 20 : 1;
    let p = o === cr.Vertical ? 0 : c.deltaX * v, h = o === cr.Horizontal ? 0 : c.deltaY * v;
    !Wi() && c.shiftKey && o !== cr.Vertical && (p = c.deltaY * v, h = 0), r.translateBy(
      n,
      -(p / d) * i,
      -(h / d) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const x = ba(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, s == null || s(c, x)), e.isPanScrolling && (l == null || l(c, x), e.panScrollTimeout = setTimeout(() => {
      u == null || u(c, x), e.isPanScrolling = !1;
    }, 150));
  };
}
function N0({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", a = !t && i && !r.ctrlKey, s = Br(r, e);
    if (r.ctrlKey && i && s && r.preventDefault(), a || s)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function D0({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    var o, i, a;
    if ((o = r.sourceEvent) != null && o.internal)
      return;
    const s = ba(r.transform);
    e.mouseButton = ((i = r.sourceEvent) == null ? void 0 : i.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = s, ((a = r.sourceEvent) == null ? void 0 : a.type) === "mousedown" && t(!0), n && (n == null || n(r.sourceEvent, s));
  };
}
function L0({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    var a, s;
    e.usedRightMouseButton = !!(n && Uc(t, e.mouseButton ?? 0)), (a = i.sourceEvent) != null && a.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !((s = i.sourceEvent) != null && s.internal) && (o == null || o(i.sourceEvent, ba(i.transform)));
  };
}
function z0({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (a) => {
    var s;
    if (!((s = a.sourceEvent) != null && s.internal) && (e.isZoomingOrPanning = !1, i && Uc(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && a.sourceEvent && i(a.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && H0(e.prevViewport, a.transform))) {
      const l = ba(a.transform);
      e.prevViewport = l, clearTimeout(e.timerId), e.timerId = setTimeout(
        () => {
          o == null || o(a.sourceEvent, l);
        },
        // we need a setTimeout for panOnScroll to supress multiple end events fired during scroll
        n ? 150 : 0
      );
    }
  };
}
function A0({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: a, noWheelClassName: s, noPanClassName: l, lib: u }) {
  return (c) => {
    var d;
    const v = e || t, p = n && c.ctrlKey;
    if (c.button === 1 && c.type === "mousedown" && (Br(c, `${u}-flow__node`) || Br(c, `${u}-flow__edge`)))
      return !0;
    if (!r && !v && !o && !i && !n || a || Br(c, s) && c.type === "wheel" || Br(c, l) && (c.type !== "wheel" || o && c.type === "wheel" && !e) || !n && c.ctrlKey && c.type === "wheel")
      return !1;
    if (!n && c.type === "touchstart" && ((d = c.touches) == null ? void 0 : d.length) > 1)
      return c.preventDefault(), !1;
    if (!v && !o && !p && c.type === "wheel" || !r && (c.type === "mousedown" || c.type === "touchstart") || Array.isArray(r) && !r.includes(c.button) && c.type === "mousedown")
      return !1;
    const h = Array.isArray(r) && r.includes(c.button) || !c.button || c.button <= 1;
    return (!c.ctrlKey || c.type === "wheel") && h;
  };
}
function I0({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: i, onPanZoom: a, onPanZoomStart: s, onPanZoomEnd: l, onDraggingChange: u }) {
  const c = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = e.getBoundingClientRect(), v = Hc().clickDistance(!Xn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), p = fn(e).call(v);
  _({
    x: i.x,
    y: i.y,
    zoom: oo(i.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], o);
  const h = p.on("wheel.zoom"), x = p.on("dblclick.zoom");
  v.wheelDelta(Jc);
  function b(L, Z) {
    return p ? new Promise((E) => {
      v == null || v.transform(Ra(p, Z == null ? void 0 : Z.duration, () => E(!0)), L);
    }) : Promise.resolve(!1);
  }
  function $({ noWheelClassName: L, noPanClassName: Z, onPaneContextMenu: E, userSelectionActive: C, panOnScroll: P, panOnDrag: H, panOnScrollMode: M, panOnScrollSpeed: O, preventScrolling: A, zoomOnPinch: Y, zoomOnScroll: W, zoomOnDoubleClick: U, zoomActivationKeyPressed: Q, lib: F, onTransformChange: ge }) {
    C && !c.isZoomingOrPanning && g();
    const se = P && !Q && !C ? T0({
      zoomPanValues: c,
      noWheelClassName: L,
      d3Selection: p,
      d3Zoom: v,
      panOnScrollMode: M,
      panOnScrollSpeed: O,
      zoomOnPinch: Y,
      onPanZoomStart: s,
      onPanZoom: a,
      onPanZoomEnd: l
    }) : N0({
      noWheelClassName: L,
      preventScrolling: A,
      d3ZoomHandler: h
    });
    if (p.on("wheel.zoom", se, { passive: !1 }), !C) {
      const le = D0({
        zoomPanValues: c,
        onDraggingChange: u,
        onPanZoomStart: s
      });
      v.on("start", le);
      const ke = L0({
        zoomPanValues: c,
        panOnDrag: H,
        onPaneContextMenu: !!E,
        onPanZoom: a,
        onTransformChange: ge
      });
      v.on("zoom", ke);
      const $e = z0({
        zoomPanValues: c,
        panOnDrag: H,
        panOnScroll: P,
        onPaneContextMenu: E,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      v.on("end", $e);
    }
    const ye = A0({
      zoomActivationKeyPressed: Q,
      panOnDrag: H,
      zoomOnScroll: W,
      panOnScroll: P,
      zoomOnDoubleClick: U,
      zoomOnPinch: Y,
      userSelectionActive: C,
      noPanClassName: Z,
      noWheelClassName: L,
      lib: F
    });
    v.filter(ye), U ? p.on("dblclick.zoom", x) : p.on("dblclick.zoom", null);
  }
  function g() {
    v.on("zoom", null);
  }
  async function _(L, Z, E) {
    const C = Ia(L), P = v == null ? void 0 : v.constrain()(C, Z, E);
    return P && await b(P), new Promise((H) => H(P));
  }
  async function w(L, Z) {
    const E = Ia(L);
    return await b(E, Z), new Promise((C) => C(E));
  }
  function k(L) {
    if (p) {
      const Z = Ia(L), E = p.property("__zoom");
      (E.k !== L.zoom || E.x !== L.x || E.y !== L.y) && (v == null || v.transform(p, Z, null, { sync: !0 }));
    }
  }
  function V() {
    const L = p ? Oc(p.node()) : { x: 0, y: 0, k: 1 };
    return { x: L.x, y: L.y, zoom: L.k };
  }
  function S(L, Z) {
    return p ? new Promise((E) => {
      v == null || v.scaleTo(Ra(p, Z == null ? void 0 : Z.duration, () => E(!0)), L);
    }) : Promise.resolve(!1);
  }
  function N(L, Z) {
    return p ? new Promise((E) => {
      v == null || v.scaleBy(Ra(p, Z == null ? void 0 : Z.duration, () => E(!0)), L);
    }) : Promise.resolve(!1);
  }
  function T(L) {
    v == null || v.scaleExtent(L);
  }
  function I(L) {
    v == null || v.translateExtent(L);
  }
  function R(L) {
    const Z = !Xn(L) || L < 0 ? 0 : L;
    v == null || v.clickDistance(Z);
  }
  return {
    update: $,
    destroy: g,
    setViewport: w,
    setViewportConstrained: _,
    getViewport: V,
    scaleTo: S,
    scaleBy: N,
    setScaleExtent: T,
    setTranslateExtent: I,
    syncViewport: k,
    setClickDistance: R
  };
}
var Jl;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Jl || (Jl = {}));
var R0 = /* @__PURE__ */ ie('<div role="button" tabindex="-1"><!></div>');
function pr(e, t) {
  he(t, !1);
  const [n, r] = vt(), o = () => oe(U, "$connectable", n), i = () => oe(ye, "$connectionRadius", n), a = () => oe(ge, "$domNode", n), s = () => oe(se, "$nodeLookup", n), l = () => oe(F, "$connectionMode", n), u = () => oe($e, "$lib", n), c = () => oe(Ne, "$autoPanOnConnect", n), d = () => oe(Ve, "$flowId", n), v = () => oe(ke, "$isValidConnectionStore", n), p = () => oe(ce, "$onedgecreate", n), h = () => oe(de, "$onConnectAction", n), x = () => oe(fe, "$onConnectStartAction", n), b = () => oe(ae, "$onConnectEndAction", n), $ = () => oe(le, "$viewport", n), g = () => oe(it, "$connection", n), _ = () => oe(qe, "$edges", n), w = () => oe(De, "$connectionLookup", n), k = /* @__PURE__ */ ue(), V = /* @__PURE__ */ ue(), S = /* @__PURE__ */ ue(), N = /* @__PURE__ */ ue(), T = /* @__PURE__ */ ue(), I = /* @__PURE__ */ ue(), R = /* @__PURE__ */ ue(), L = /* @__PURE__ */ ue();
  let Z = y(t, "id", 12, void 0), E = y(t, "type", 12, "source"), C = y(t, "position", 28, () => ze.Top), P = y(t, "style", 12, void 0), H = y(t, "isValidConnection", 12, void 0), M = y(t, "onconnect", 12, void 0), O = y(t, "ondisconnect", 12, void 0), A = y(t, "isConnectable", 12, void 0), Y = y(t, "class", 12, void 0);
  const W = Pr("svelteflow__node_id"), U = Pr("svelteflow__node_connectable"), Q = tt(), {
    connectionMode: F,
    domNode: ge,
    nodeLookup: se,
    connectionRadius: ye,
    viewport: le,
    isValidConnection: ke,
    lib: $e,
    addEdge: He,
    onedgecreate: ce,
    panBy: J,
    cancelConnection: Pe,
    updateConnection: K,
    autoPanOnConnect: Ne,
    edges: qe,
    connectionLookup: De,
    onconnect: de,
    onconnectstart: fe,
    onconnectend: ae,
    flowId: Ve,
    connection: it
  } = Q;
  function rt(Ie) {
    const ut = Rc(Ie);
    (ut && Ie.button === 0 || !ut) && V0.onPointerDown(Ie, {
      handleId: f(S),
      nodeId: W,
      isTarget: f(k),
      connectionRadius: i(),
      domNode: a(),
      nodeLookup: s(),
      connectionMode: l(),
      lib: u(),
      autoPanOnConnect: c(),
      flowId: d(),
      isValidConnection: H() ?? v(),
      updateConnection: K,
      cancelConnection: Pe,
      panBy: J,
      onConnect: (Xe) => {
        var Be;
        const ct = p() ? p()(Xe) : Xe;
        ct && (He(ct), (Be = h()) == null || Be(Xe));
      },
      onConnectStart: (Xe, Be) => {
        var ct;
        (ct = x()) == null || ct(Xe, {
          nodeId: Be.nodeId,
          handleId: Be.handleId,
          handleType: Be.handleType
        });
      },
      onConnectEnd: (Xe, Be) => {
        var ct;
        (ct = b()) == null || ct(Xe, Be);
      },
      getTransform: () => [
        $().x,
        $().y,
        $().zoom
      ],
      getFromHandle: () => g().fromHandle
    });
  }
  let te = /* @__PURE__ */ ue(null), Fe = /* @__PURE__ */ ue();
  be(() => re(E()), () => {
    ee(k, E() === "target");
  }), be(
    () => (re(A()), o()),
    () => {
      ee(V, A() !== void 0 ? A() : o());
    }
  ), be(() => re(Z()), () => {
    ee(S, Z() || null);
  }), be(
    () => (re(M()), re(O()), _(), w(), re(E()), re(Z())),
    () => {
      (M() || O()) && (_(), ee(Fe, w().get(`${W}-${E()}${Z() ? `-${Z()}` : ""}`)));
    }
  ), be(
    () => (f(te), f(Fe), re(O()), re(M())),
    () => {
      if (f(te) && !qh(f(Fe), f(te))) {
        const Ie = f(Fe) ?? /* @__PURE__ */ new Map();
        Rl(f(te), Ie, O()), Rl(Ie, f(te), M());
      }
      ee(te, f(Fe) ?? /* @__PURE__ */ new Map());
    }
  ), be(() => g(), () => {
    ee(N, !!g().fromHandle);
  }), be(
    () => (g(), re(E()), f(S)),
    () => {
      var Ie, ut, Xe;
      ee(T, ((Ie = g().fromHandle) == null ? void 0 : Ie.nodeId) === W && ((ut = g().fromHandle) == null ? void 0 : ut.type) === E() && ((Xe = g().fromHandle) == null ? void 0 : Xe.id) === f(S));
    }
  ), be(
    () => (g(), re(E()), f(S)),
    () => {
      var Ie, ut, Xe;
      ee(I, ((Ie = g().toHandle) == null ? void 0 : Ie.nodeId) === W && ((ut = g().toHandle) == null ? void 0 : ut.type) === E() && ((Xe = g().toHandle) == null ? void 0 : Xe.id) === f(S));
    }
  ), be(
    () => (l(), g(), re(E()), f(S)),
    () => {
      var Ie, ut, Xe;
      ee(R, l() === Or.Strict ? ((Ie = g().fromHandle) == null ? void 0 : Ie.type) !== E() : W !== ((ut = g().fromHandle) == null ? void 0 : ut.nodeId) || f(S) !== ((Xe = g().fromHandle) == null ? void 0 : Xe.id));
    }
  ), be(() => (f(I), g()), () => {
    ee(L, f(I) && g().isValid);
  }), Vt(), Ye();
  var ve = R0();
  Se(ve, "data-nodeid", W);
  let Xt;
  var Yt = j(ve);
  Dt(Yt, t, "default", {}), X(ve), Ee(
    (Ie, ut) => {
      Se(ve, "data-handleid", f(S)), Se(ve, "data-handlepos", C()), Se(ve, "data-id", `${d() ?? ""}-${W ?? ""}-${(Z() || "") ?? ""}-${E() ?? ""}`), Xt = Lt(ve, 1, Ie, null, Xt, ut), $t(ve, P());
    },
    [
      () => Sn(Bt([
        "svelte-flow__handle",
        `svelte-flow__handle-${C()}`,
        "nodrag",
        "nopan",
        C(),
        Y()
      ])),
      () => ({
        valid: f(L),
        connectingto: f(I),
        connectingfrom: f(T),
        source: !f(k),
        target: f(k),
        connectablestart: f(V),
        connectableend: f(V),
        connectable: f(V),
        connectionindicator: f(V) && (!f(N) || f(R))
      })
    ],
    _e
  ), ft("mousedown", ve, rt), ft("touchstart", ve, rt), z(e, ve);
  var un = me({
    get id() {
      return Z();
    },
    set id(Ie) {
      Z(Ie), m();
    },
    get type() {
      return E();
    },
    set type(Ie) {
      E(Ie), m();
    },
    get position() {
      return C();
    },
    set position(Ie) {
      C(Ie), m();
    },
    get style() {
      return P();
    },
    set style(Ie) {
      P(Ie), m();
    },
    get isValidConnection() {
      return H();
    },
    set isValidConnection(Ie) {
      H(Ie), m();
    },
    get onconnect() {
      return M();
    },
    set onconnect(Ie) {
      M(Ie), m();
    },
    get ondisconnect() {
      return O();
    },
    set ondisconnect(Ie) {
      O(Ie), m();
    },
    get isConnectable() {
      return A();
    },
    set isConnectable(Ie) {
      A(Ie), m();
    },
    get class() {
      return Y();
    },
    set class(Ie) {
      Y(Ie), m();
    }
  });
  return r(), un;
}
pe(
  pr,
  {
    id: {},
    type: {},
    position: {},
    style: {},
    isValidConnection: {},
    onconnect: {},
    ondisconnect: {},
    isConnectable: {},
    class: {}
  },
  ["default"],
  [],
  !0
);
var q0 = /* @__PURE__ */ ie("<!> <!>", 1);
function Fi(e, t) {
  const n = gt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  gt(n, ["data", "targetPosition", "sourcePosition"]), he(t, !1);
  let r = y(t, "data", 28, () => ({ label: "Node" })), o = y(t, "targetPosition", 12, void 0), i = y(t, "sourcePosition", 12, void 0);
  Ye();
  var a = q0(), s = Ce(a);
  const l = /* @__PURE__ */ _e(() => o() ?? ze.Top);
  pr(s, {
    type: "target",
    get position() {
      return f(l);
    }
  });
  var u = q(s), c = q(u);
  const d = /* @__PURE__ */ _e(() => i() ?? ze.Bottom);
  return pr(c, {
    type: "source",
    get position() {
      return f(d);
    }
  }), Ee(() => {
    var v;
    return bt(u, ` ${((v = r()) == null ? void 0 : v.label) ?? ""} `);
  }), z(e, a), me({
    get data() {
      return r();
    },
    set data(v) {
      r(v), m();
    },
    get targetPosition() {
      return o();
    },
    set targetPosition(v) {
      o(v), m();
    },
    get sourcePosition() {
      return i();
    },
    set sourcePosition(v) {
      i(v), m();
    }
  });
}
pe(
  Fi,
  {
    data: {},
    targetPosition: {},
    sourcePosition: {}
  },
  [],
  [],
  !0
);
var Z0 = /* @__PURE__ */ ie(" <!>", 1);
function Qc(e, t) {
  const n = gt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  gt(n, ["data", "sourcePosition"]), he(t, !1);
  let r = y(t, "data", 28, () => ({ label: "Node" })), o = y(t, "sourcePosition", 12, void 0);
  Ye(), Re();
  var i = Z0(), a = Ce(i), s = q(a);
  const l = /* @__PURE__ */ _e(() => o() ?? ze.Bottom);
  return pr(s, {
    type: "source",
    get position() {
      return f(l);
    }
  }), Ee(() => {
    var u;
    return bt(a, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), z(e, i), me({
    get data() {
      return r();
    },
    set data(u) {
      r(u), m();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(u) {
      o(u), m();
    }
  });
}
pe(Qc, { data: {}, sourcePosition: {} }, [], [], !0);
var B0 = /* @__PURE__ */ ie(" <!>", 1);
function ed(e, t) {
  const n = gt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  gt(n, ["data", "targetPosition"]), he(t, !1);
  let r = y(t, "data", 28, () => ({ label: "Node" })), o = y(t, "targetPosition", 12, void 0);
  Ye(), Re();
  var i = B0(), a = Ce(i), s = q(a);
  const l = /* @__PURE__ */ _e(() => o() ?? ze.Top);
  return pr(s, {
    type: "target",
    get position() {
      return f(l);
    }
  }), Ee(() => {
    var u;
    return bt(a, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), z(e, i), me({
    get data() {
      return r();
    },
    set data(u) {
      r(u), m();
    },
    get targetPosition() {
      return o();
    },
    set targetPosition(u) {
      o(u), m();
    }
  });
}
pe(ed, { data: {}, targetPosition: {} }, [], [], !0);
function td(e, t) {
  const n = gt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  gt(n, []);
}
pe(td, {}, [], [], !0);
function Ql(e, t, n) {
  if (!t)
    return;
  const r = n ? t.querySelector(n) : t;
  r && r.appendChild(e);
}
function Gi(e, { target: t, domNode: n }) {
  return Ql(e, n, t), {
    async update({ target: r, domNode: o }) {
      Ql(e, o, r);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e);
    }
  };
}
var X0 = /* @__PURE__ */ ie("<div><!></div>");
function nd(e, t) {
  he(t, !1);
  const [n, r] = vt(), o = () => oe(i, "$domNode", n), { domNode: i } = tt();
  Ye();
  var a = X0(), s = j(a);
  Dt(s, t, "default", {}), X(a), Nt(a, (l, u) => Gi == null ? void 0 : Gi(l, u), () => ({
    target: ".svelte-flow__edgelabel-renderer",
    domNode: o()
  })), z(e, a), me(), r();
}
pe(nd, {}, ["default"], [], !0);
function rd() {
  const { edgeLookup: e, selectionRect: t, selectionRectMode: n, multiselectionKeyPressed: r, addSelectedEdges: o, unselectNodesAndEdges: i, elementsSelectable: a } = tt();
  return (s) => {
    const l = G(e).get(s);
    if (!l) {
      console.warn("012", ro.error012(s));
      return;
    }
    (l.selectable || G(a) && typeof l.selectable > "u") && (t.set(null), n.set(null), l.selected ? l.selected && G(r) && i({ nodes: [], edges: [l] }) : o([s]));
  };
}
var Y0 = /* @__PURE__ */ ie('<div class="svelte-flow__edge-label" role="button" tabindex="-1"><!></div>');
function od(e, t) {
  he(t, !1);
  let n = y(t, "style", 12, void 0), r = y(t, "x", 12, void 0), o = y(t, "y", 12, void 0);
  const i = rd(), a = Pr("svelteflow__edge_id");
  return Ye(), nd(e, {
    children: (s, l) => {
      var u = Y0();
      let c;
      var d = j(u);
      Dt(d, t, "default", {}), X(u), Ee(() => c = $t(u, "pointer-events: all;" + n(), c, {
        transform: `translate(-50%, -50%) translate(${r() ?? ""}px,${o() ?? ""}px)`
      })), ft("keyup", u, () => {
      }), ft("click", u, () => {
        a && i(a);
      }), z(s, u);
    },
    $$slots: { default: !0 }
  }), me({
    get style() {
      return n();
    },
    set style(s) {
      n(s), m();
    },
    get x() {
      return r();
    },
    set x(s) {
      r(s), m();
    },
    get y() {
      return o();
    },
    set y(s) {
      o(s), m();
    }
  });
}
pe(od, { style: {}, x: {}, y: {} }, ["default"], [], !0);
var j0 = /* @__PURE__ */ Oe('<path fill="none" class="svelte-flow__edge-interaction"></path>'), W0 = /* @__PURE__ */ Oe('<path fill="none"></path><!><!>', 1);
function ni(e, t) {
  he(t, !1);
  let n = y(t, "id", 12, void 0), r = y(t, "path", 12), o = y(t, "label", 12, void 0), i = y(t, "labelX", 12, void 0), a = y(t, "labelY", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "markerStart", 12, void 0), u = y(t, "markerEnd", 12, void 0), c = y(t, "style", 12, void 0), d = y(t, "interactionWidth", 12, 20), v = y(t, "class", 12, void 0), p = d() === void 0 ? 20 : d();
  Ye();
  var h = W0(), x = Ce(h), b = q(x);
  {
    var $ = (w) => {
      var k = j0();
      Se(k, "stroke-opacity", 0), Se(k, "stroke-width", p), Ee(() => Se(k, "d", r())), z(w, k);
    };
    xe(b, (w) => {
      p && w($);
    });
  }
  var g = q(b);
  {
    var _ = (w) => {
      od(w, {
        get x() {
          return i();
        },
        get y() {
          return a();
        },
        get style() {
          return s();
        },
        children: (k, V) => {
          Re();
          var S = je();
          Ee(() => bt(S, o())), z(k, S);
        },
        $$slots: { default: !0 }
      });
    };
    xe(g, (w) => {
      o() && w(_);
    });
  }
  return Ee(
    (w) => {
      Se(x, "id", n()), Se(x, "d", r()), Lt(x, 0, w), Se(x, "marker-start", l()), Se(x, "marker-end", u()), $t(x, c());
    },
    [
      () => Sn(Bt(["svelte-flow__edge-path", v()]))
    ],
    _e
  ), z(e, h), me({
    get id() {
      return n();
    },
    set id(w) {
      n(w), m();
    },
    get path() {
      return r();
    },
    set path(w) {
      r(w), m();
    },
    get label() {
      return o();
    },
    set label(w) {
      o(w), m();
    },
    get labelX() {
      return i();
    },
    set labelX(w) {
      i(w), m();
    },
    get labelY() {
      return a();
    },
    set labelY(w) {
      a(w), m();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(w) {
      s(w), m();
    },
    get markerStart() {
      return l();
    },
    set markerStart(w) {
      l(w), m();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(w) {
      u(w), m();
    },
    get style() {
      return c();
    },
    set style(w) {
      c(w), m();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(w) {
      d(w), m();
    },
    get class() {
      return v();
    },
    set class(w) {
      v(w), m();
    }
  });
}
pe(
  ni,
  {
    id: {},
    path: {},
    label: {},
    labelX: {},
    labelY: {},
    labelStyle: {},
    markerStart: {},
    markerEnd: {},
    style: {},
    interactionWidth: {},
    class: {}
  },
  [],
  [],
  !0
);
function Ui(e, t) {
  const n = gt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  gt(n, [
    "label",
    "labelStyle",
    "style",
    "markerStart",
    "markerEnd",
    "interactionWidth",
    "sourceX",
    "sourceY",
    "sourcePosition",
    "targetX",
    "targetY",
    "targetPosition"
  ]), he(t, !1);
  const r = /* @__PURE__ */ ue(), o = /* @__PURE__ */ ue(), i = /* @__PURE__ */ ue();
  let a = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), v = y(t, "sourceX", 12), p = y(t, "sourceY", 12), h = y(t, "sourcePosition", 12), x = y(t, "targetX", 12), b = y(t, "targetY", 12), $ = y(t, "targetPosition", 12);
  return be(
    () => (f(r), f(o), f(i), re(v()), re(p()), re(x()), re(b()), re(h()), re($())),
    () => {
      ((g) => (ee(r, g[0]), ee(o, g[1]), ee(i, g[2])))(qc({
        sourceX: v(),
        sourceY: p(),
        targetX: x(),
        targetY: b(),
        sourcePosition: h(),
        targetPosition: $()
      }));
    }
  ), Vt(), Ye(), ni(e, {
    get path() {
      return f(r);
    },
    get labelX() {
      return f(o);
    },
    get labelY() {
      return f(i);
    },
    get label() {
      return a();
    },
    get labelStyle() {
      return s();
    },
    get markerStart() {
      return u();
    },
    get markerEnd() {
      return c();
    },
    get interactionWidth() {
      return d();
    },
    get style() {
      return l();
    }
  }), me({
    get label() {
      return a();
    },
    set label(g) {
      a(g), m();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(g) {
      s(g), m();
    },
    get style() {
      return l();
    },
    set style(g) {
      l(g), m();
    },
    get markerStart() {
      return u();
    },
    set markerStart(g) {
      u(g), m();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(g) {
      c(g), m();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(g) {
      d(g), m();
    },
    get sourceX() {
      return v();
    },
    set sourceX(g) {
      v(g), m();
    },
    get sourceY() {
      return p();
    },
    set sourceY(g) {
      p(g), m();
    },
    get sourcePosition() {
      return h();
    },
    set sourcePosition(g) {
      h(g), m();
    },
    get targetX() {
      return x();
    },
    set targetX(g) {
      x(g), m();
    },
    get targetY() {
      return b();
    },
    set targetY(g) {
      b(g), m();
    },
    get targetPosition() {
      return $();
    },
    set targetPosition(g) {
      $(g), m();
    }
  });
}
pe(
  Ui,
  {
    label: {},
    labelStyle: {},
    style: {},
    markerStart: {},
    markerEnd: {},
    interactionWidth: {},
    sourceX: {},
    sourceY: {},
    sourcePosition: {},
    targetX: {},
    targetY: {},
    targetPosition: {}
  },
  [],
  [],
  !0
);
function id(e, t) {
  const n = gt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  gt(n, [
    "label",
    "labelStyle",
    "style",
    "markerStart",
    "markerEnd",
    "interactionWidth",
    "sourceX",
    "sourceY",
    "sourcePosition",
    "targetX",
    "targetY",
    "targetPosition"
  ]), he(t, !1);
  const r = /* @__PURE__ */ ue(), o = /* @__PURE__ */ ue(), i = /* @__PURE__ */ ue();
  let a = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), v = y(t, "sourceX", 12), p = y(t, "sourceY", 12), h = y(t, "sourcePosition", 12), x = y(t, "targetX", 12), b = y(t, "targetY", 12), $ = y(t, "targetPosition", 12);
  return be(
    () => (f(r), f(o), f(i), re(v()), re(p()), re(x()), re(b()), re(h()), re($())),
    () => {
      ((g) => (ee(r, g[0]), ee(o, g[1]), ee(i, g[2])))(Ki({
        sourceX: v(),
        sourceY: p(),
        targetX: x(),
        targetY: b(),
        sourcePosition: h(),
        targetPosition: $()
      }));
    }
  ), Vt(), Ye(), ni(e, {
    get path() {
      return f(r);
    },
    get labelX() {
      return f(o);
    },
    get labelY() {
      return f(i);
    },
    get label() {
      return a();
    },
    get labelStyle() {
      return s();
    },
    get markerStart() {
      return u();
    },
    get markerEnd() {
      return c();
    },
    get interactionWidth() {
      return d();
    },
    get style() {
      return l();
    }
  }), me({
    get label() {
      return a();
    },
    set label(g) {
      a(g), m();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(g) {
      s(g), m();
    },
    get style() {
      return l();
    },
    set style(g) {
      l(g), m();
    },
    get markerStart() {
      return u();
    },
    set markerStart(g) {
      u(g), m();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(g) {
      c(g), m();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(g) {
      d(g), m();
    },
    get sourceX() {
      return v();
    },
    set sourceX(g) {
      v(g), m();
    },
    get sourceY() {
      return p();
    },
    set sourceY(g) {
      p(g), m();
    },
    get sourcePosition() {
      return h();
    },
    set sourcePosition(g) {
      h(g), m();
    },
    get targetX() {
      return x();
    },
    set targetX(g) {
      x(g), m();
    },
    get targetY() {
      return b();
    },
    set targetY(g) {
      b(g), m();
    },
    get targetPosition() {
      return $();
    },
    set targetPosition(g) {
      $(g), m();
    }
  });
}
pe(
  id,
  {
    label: {},
    labelStyle: {},
    style: {},
    markerStart: {},
    markerEnd: {},
    interactionWidth: {},
    sourceX: {},
    sourceY: {},
    sourcePosition: {},
    targetX: {},
    targetY: {},
    targetPosition: {}
  },
  [],
  [],
  !0
);
function ad(e, t) {
  const n = gt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  gt(n, [
    "label",
    "labelStyle",
    "style",
    "markerStart",
    "markerEnd",
    "interactionWidth",
    "sourceX",
    "sourceY",
    "targetX",
    "targetY"
  ]), he(t, !1);
  const r = /* @__PURE__ */ ue(), o = /* @__PURE__ */ ue(), i = /* @__PURE__ */ ue();
  let a = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), v = y(t, "sourceX", 12), p = y(t, "sourceY", 12), h = y(t, "targetX", 12), x = y(t, "targetY", 12);
  return be(
    () => (f(r), f(o), f(i), re(v()), re(p()), re(h()), re(x())),
    () => {
      ((b) => (ee(r, b[0]), ee(o, b[1]), ee(i, b[2])))(cs({
        sourceX: v(),
        sourceY: p(),
        targetX: h(),
        targetY: x()
      }));
    }
  ), Vt(), Ye(), ni(e, {
    get path() {
      return f(r);
    },
    get labelX() {
      return f(o);
    },
    get labelY() {
      return f(i);
    },
    get label() {
      return a();
    },
    get labelStyle() {
      return s();
    },
    get markerStart() {
      return u();
    },
    get markerEnd() {
      return c();
    },
    get interactionWidth() {
      return d();
    },
    get style() {
      return l();
    }
  }), me({
    get label() {
      return a();
    },
    set label(b) {
      a(b), m();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(b) {
      s(b), m();
    },
    get style() {
      return l();
    },
    set style(b) {
      l(b), m();
    },
    get markerStart() {
      return u();
    },
    set markerStart(b) {
      u(b), m();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(b) {
      c(b), m();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(b) {
      d(b), m();
    },
    get sourceX() {
      return v();
    },
    set sourceX(b) {
      v(b), m();
    },
    get sourceY() {
      return p();
    },
    set sourceY(b) {
      p(b), m();
    },
    get targetX() {
      return h();
    },
    set targetX(b) {
      h(b), m();
    },
    get targetY() {
      return x();
    },
    set targetY(b) {
      x(b), m();
    }
  });
}
pe(
  ad,
  {
    label: {},
    labelStyle: {},
    style: {},
    markerStart: {},
    markerEnd: {},
    interactionWidth: {},
    sourceX: {},
    sourceY: {},
    targetX: {},
    targetY: {}
  },
  [],
  [],
  !0
);
function sd(e, t) {
  const n = gt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  gt(n, [
    "label",
    "labelStyle",
    "style",
    "markerStart",
    "markerEnd",
    "interactionWidth",
    "sourceX",
    "sourceY",
    "sourcePosition",
    "targetX",
    "targetY",
    "targetPosition"
  ]), he(t, !1);
  const r = /* @__PURE__ */ ue(), o = /* @__PURE__ */ ue(), i = /* @__PURE__ */ ue();
  let a = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), v = y(t, "sourceX", 12), p = y(t, "sourceY", 12), h = y(t, "sourcePosition", 12), x = y(t, "targetX", 12), b = y(t, "targetY", 12), $ = y(t, "targetPosition", 12);
  return be(
    () => (f(r), f(o), f(i), re(v()), re(p()), re(x()), re(b()), re(h()), re($())),
    () => {
      ((g) => (ee(r, g[0]), ee(o, g[1]), ee(i, g[2])))(Ki({
        sourceX: v(),
        sourceY: p(),
        targetX: x(),
        targetY: b(),
        sourcePosition: h(),
        targetPosition: $(),
        borderRadius: 0
      }));
    }
  ), Vt(), Ye(), ni(e, {
    get path() {
      return f(r);
    },
    get labelX() {
      return f(o);
    },
    get labelY() {
      return f(i);
    },
    get label() {
      return a();
    },
    get labelStyle() {
      return s();
    },
    get markerStart() {
      return u();
    },
    get markerEnd() {
      return c();
    },
    get interactionWidth() {
      return d();
    },
    get style() {
      return l();
    }
  }), me({
    get label() {
      return a();
    },
    set label(g) {
      a(g), m();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(g) {
      s(g), m();
    },
    get style() {
      return l();
    },
    set style(g) {
      l(g), m();
    },
    get markerStart() {
      return u();
    },
    set markerStart(g) {
      u(g), m();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(g) {
      c(g), m();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(g) {
      d(g), m();
    },
    get sourceX() {
      return v();
    },
    set sourceX(g) {
      v(g), m();
    },
    get sourceY() {
      return p();
    },
    set sourceY(g) {
      p(g), m();
    },
    get sourcePosition() {
      return h();
    },
    set sourcePosition(g) {
      h(g), m();
    },
    get targetX() {
      return x();
    },
    set targetX(g) {
      x(g), m();
    },
    get targetY() {
      return b();
    },
    set targetY(g) {
      b(g), m();
    },
    get targetPosition() {
      return $();
    },
    set targetPosition(g) {
      $(g), m();
    }
  });
}
pe(
  sd,
  {
    label: {},
    labelStyle: {},
    style: {},
    markerStart: {},
    markerEnd: {},
    interactionWidth: {},
    sourceX: {},
    sourceY: {},
    sourcePosition: {},
    targetX: {},
    targetY: {},
    targetPosition: {}
  },
  [],
  [],
  !0
);
function K0(e, t) {
  const n = e.set, r = t.set, o = G(e), i = G(t);
  let a = o.length === 0 && i.length > 0 ? i : o;
  e.set(a);
  const s = (l) => {
    const u = n(l);
    return a = u, r(a), u;
  };
  e.set = t.set = s, e.update = t.update = (l) => s(l(a));
}
function F0(e, t) {
  const n = e.set, r = t.set;
  let o = G(t);
  e.set(o);
  const i = (a) => {
    n(a), r(a), o = a;
  };
  e.set = t.set = i, e.update = t.update = (a) => i(a(o));
}
const G0 = (e, t, n) => {
  if (!n)
    return;
  const r = G(e), o = t.set, i = n.set;
  let a = n ? G(n) : { x: 0, y: 0, zoom: 1 };
  t.set(a), t.set = (s) => (o(s), i(s), a = s, s), n.set = (s) => (r == null || r.syncViewport(s), o(s), i(s), a = s, s), t.update = (s) => {
    t.set(s(a));
  }, n.update = (s) => {
    n.set(s(a));
  };
}, U0 = (e, t, n, r = [0, 0], o = Bi, i, a, s, l, u, c, d, v) => {
  const { subscribe: p, set: h, update: x } = Me([]);
  let b = e, $ = {}, g = !0;
  const _ = (S) => {
    const N = Bc(S, t, n, {
      elevateNodesOnSelect: g,
      nodeOrigin: r,
      nodeExtent: o,
      defaults: $,
      checkEquality: !1
    });
    return G(i) && N && G(l) && (Wh({
      nodes: t,
      width: G(u),
      height: G(c),
      panZoom: G(l),
      minZoom: G(d),
      maxZoom: G(v)
    }, G(a)).then((T) => {
      var I;
      (I = G(s)) == null || I.resolve(T), s.set(null);
    }), i.set(!1), a.set(void 0)), b = S, h(b), b;
  }, w = (S) => _(S(b)), k = (S) => {
    $ = S;
  }, V = (S) => {
    g = S.elevateNodesOnSelect ?? g;
  };
  return _(b), {
    subscribe: p,
    set: _,
    update: w,
    setDefaultOptions: k,
    setOptions: V
  };
}, J0 = (e, t, n, r) => {
  const { subscribe: o, set: i, update: a } = Me([]);
  let s = e, l = {};
  const u = (v) => {
    const p = l ? v.map((h) => ({ ...l, ...h })) : v;
    Yc(t, n, p), s = p, i(s);
  }, c = (v) => u(v(s)), d = (v) => {
    l = v;
  };
  return u(s), {
    subscribe: o,
    set: u,
    update: c,
    setDefaultOptions: d
  };
}, ld = {
  input: Qc,
  output: ed,
  default: Fi,
  group: td
}, ud = {
  straight: ad,
  smoothstep: id,
  default: Ui,
  step: sd
}, Q0 = ({ nodes: e = [], edges: t = [], width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) => {
  const s = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), d = i ?? [0, 0], v = a ?? Bi;
  Bc(e, s, l, {
    nodeExtent: v,
    nodeOrigin: d,
    elevateNodesOnSelect: !1,
    checkEquality: !1
  }), Yc(u, c, t);
  let p = { x: 0, y: 0, zoom: 1 };
  if (o && n && r) {
    const V = ei(s, {
      filter: (S) => !!((S.width || S.initialWidth) && (S.height || S.initialHeight))
    });
    p = Xs(V, n, r, 0.5, 2, 0.1);
  }
  const h = Me(!1), x = Me(void 0), b = Me(null), $ = Me(null), g = Me(500), _ = Me(500), w = Me(0.5), k = Me(2);
  return {
    flowId: Me(null),
    nodes: U0(e, s, l, d, v, h, x, b, $, g, _, w, k),
    nodeLookup: cn(s),
    parentLookup: cn(l),
    edgeLookup: cn(c),
    visibleNodes: cn([]),
    edges: J0(t, u, c),
    visibleEdges: cn([]),
    connectionLookup: cn(u),
    width: g,
    height: _,
    minZoom: w,
    maxZoom: k,
    nodeOrigin: Me(d),
    nodeDragThreshold: Me(1),
    nodeExtent: Me(v),
    translateExtent: Me(Bi),
    autoPanOnNodeDrag: Me(!0),
    autoPanOnConnect: Me(!0),
    fitViewQueued: h,
    fitViewOptions: x,
    fitViewResolver: b,
    panZoom: $,
    snapGrid: Me(null),
    dragging: Me(!1),
    selectionRect: Me(null),
    selectionKeyPressed: Me(!1),
    multiselectionKeyPressed: Me(!1),
    deleteKeyPressed: Me(!1),
    panActivationKeyPressed: Me(!1),
    zoomActivationKeyPressed: Me(!1),
    selectionRectMode: Me(null),
    selectionMode: Me(Xi.Partial),
    nodeTypes: Me(ld),
    edgeTypes: Me(ud),
    viewport: Me(p),
    connectionMode: Me(Or.Strict),
    domNode: Me(null),
    connection: cn(ss),
    connectionLineType: Me(Wr.Bezier),
    connectionRadius: Me(20),
    isValidConnection: Me(() => !0),
    nodesDraggable: Me(!0),
    nodesConnectable: Me(!0),
    elementsSelectable: Me(!0),
    selectNodesOnDrag: Me(!0),
    markers: cn([]),
    defaultMarkerColor: Me("#b1b1b7"),
    lib: cn("svelte"),
    onlyRenderVisibleElements: Me(!1),
    onerror: Me(Fh),
    ondelete: Me(void 0),
    onedgecreate: Me(void 0),
    onconnect: Me(void 0),
    onconnectstart: Me(void 0),
    onconnectend: Me(void 0),
    onbeforedelete: Me(void 0),
    nodesInitialized: Me(!1),
    edgesInitialized: Me(!1),
    viewportInitialized: Me(!1),
    initialized: cn(!1)
  };
};
function em(e) {
  const t = ur([
    e.edges,
    e.nodes,
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.viewport,
    e.width,
    e.height
  ], ([n, , r, o, i, a, s]) => o && a && s ? n.filter((l) => {
    const u = r.get(l.source), c = r.get(l.target);
    return u && c && i0({
      sourceNode: u,
      targetNode: c,
      width: a,
      height: s,
      transform: [i.x, i.y, i.zoom]
    });
  }) : n);
  return ur([t, e.nodes, e.nodeLookup, e.connectionMode, e.onerror], ([n, , r, o, i]) => n.reduce((a, s) => {
    const l = r.get(s.source), u = r.get(s.target);
    if (!l || !u)
      return a;
    const c = f0({
      id: s.id,
      sourceNode: l,
      targetNode: u,
      sourceHandle: s.sourceHandle || null,
      targetHandle: s.targetHandle || null,
      connectionMode: o,
      onError: i
    });
    return c && a.push({
      ...s,
      zIndex: o0({
        selected: s.selected,
        zIndex: s.zIndex,
        sourceNode: l,
        targetNode: u,
        elevateOnSelect: !1
      }),
      ...c
    }), a;
  }, []));
}
function tm(e) {
  return ur([
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.width,
    e.height,
    e.viewport,
    e.nodes
  ], ([t, n, r, o, i]) => {
    const a = [i.x, i.y, i.zoom];
    return n ? Tc(t, { x: 0, y: 0, width: r, height: o }, a, !0) : Array.from(t.values());
  });
}
const xa = Symbol();
function cd({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) {
  const s = Q0({
    nodes: e,
    edges: t,
    width: n,
    height: r,
    fitView: o,
    nodeOrigin: i,
    nodeExtent: a
  });
  function l(C) {
    s.nodeTypes.set({
      ...ld,
      ...C
    });
  }
  function u(C) {
    s.edgeTypes.set({
      ...ud,
      ...C
    });
  }
  function c(C) {
    const P = G(s.edges);
    s.edges.set(l0(C, P));
  }
  const d = (C, P = !1) => {
    var H;
    const M = G(s.nodeLookup);
    for (const [O, A] of C) {
      const Y = (H = M.get(O)) == null ? void 0 : H.internals.userNode;
      Y && (Y.position = A.position, Y.dragging = P);
    }
    s.nodes.update((O) => O);
  };
  function v(C) {
    var P, H, M;
    const O = G(s.nodeLookup), A = G(s.parentLookup), { changes: Y, updatedInternals: W } = b0(C, O, G(s.parentLookup), G(s.domNode), G(s.nodeOrigin));
    if (W) {
      h0(O, A, { nodeOrigin: i, nodeExtent: a });
      for (const U of Y) {
        const Q = (P = O.get(U.id)) == null ? void 0 : P.internals.userNode;
        if (Q)
          switch (U.type) {
            case "dimensions": {
              const F = { ...Q.measured, ...U.dimensions };
              U.setAttributes && (Q.width = ((H = U.dimensions) == null ? void 0 : H.width) ?? Q.width, Q.height = ((M = U.dimensions) == null ? void 0 : M.height) ?? Q.height), Q.measured = F;
              break;
            }
            case "position":
              Q.position = U.position ?? Q.position;
              break;
          }
      }
      s.nodes.update((U) => U), G(s.nodesInitialized) || s.nodesInitialized.set(!0);
    }
  }
  function p(C) {
    const P = G(s.fitViewResolver) ?? Qh();
    return s.fitViewQueued.set(!0), s.fitViewOptions.set(C), s.fitViewResolver.set(P), s.nodes.set(G(s.nodes)), P.promise;
  }
  function h(C, P) {
    const H = G(s.panZoom);
    return H ? H.scaleBy(C, P) : Promise.resolve(!1);
  }
  function x(C) {
    return h(1.2, C);
  }
  function b(C) {
    return h(1 / 1.2, C);
  }
  function $(C) {
    const P = G(s.panZoom);
    P && (P.setScaleExtent([C, G(s.maxZoom)]), s.minZoom.set(C));
  }
  function g(C) {
    const P = G(s.panZoom);
    P && (P.setScaleExtent([G(s.minZoom), C]), s.maxZoom.set(C));
  }
  function _(C) {
    const P = G(s.panZoom);
    P && (P.setTranslateExtent(C), s.translateExtent.set(C));
  }
  function w(C) {
    let P = !1;
    return C.forEach((H) => {
      H.selected && (H.selected = !1, P = !0);
    }), P;
  }
  function k(C) {
    var P;
    (P = G(s.panZoom)) == null || P.setClickDistance(C);
  }
  function V(C) {
    w((C == null ? void 0 : C.nodes) || G(s.nodes)) && s.nodes.set(G(s.nodes)), w((C == null ? void 0 : C.edges) || G(s.edges)) && s.edges.set(G(s.edges));
  }
  s.deleteKeyPressed.subscribe(async (C) => {
    var P;
    if (C) {
      const H = G(s.nodes), M = G(s.edges), O = H.filter((U) => U.selected), A = M.filter((U) => U.selected), { nodes: Y, edges: W } = await Nc({
        nodesToRemove: O,
        edgesToRemove: A,
        nodes: H,
        edges: M,
        onBeforeDelete: G(s.onbeforedelete)
      });
      (Y.length || W.length) && (s.nodes.update((U) => U.filter((Q) => !Y.some((F) => F.id === Q.id))), s.edges.update((U) => U.filter((Q) => !W.some((F) => F.id === Q.id))), (P = G(s.ondelete)) == null || P({
        nodes: Y,
        edges: W
      }));
    }
  });
  function S(C) {
    const P = G(s.multiselectionKeyPressed);
    s.nodes.update((H) => H.map((M) => {
      const O = C.includes(M.id), A = P && M.selected || O;
      return M.selected = A, M;
    })), P || s.edges.update((H) => H.map((M) => (M.selected = !1, M)));
  }
  function N(C) {
    const P = G(s.multiselectionKeyPressed);
    s.edges.update((H) => H.map((M) => {
      const O = C.includes(M.id), A = P && M.selected || O;
      return M.selected = A, M;
    })), P || s.nodes.update((H) => H.map((M) => (M.selected = !1, M)));
  }
  function T(C) {
    var P;
    const H = (P = G(s.nodes)) == null ? void 0 : P.find((M) => M.id === C);
    if (!H) {
      console.warn("012", ro.error012(C));
      return;
    }
    s.selectionRect.set(null), s.selectionRectMode.set(null), H.selected ? H.selected && G(s.multiselectionKeyPressed) && V({ nodes: [H], edges: [] }) : S([C]);
  }
  function I(C) {
    const P = G(s.viewport);
    return x0({
      delta: C,
      panZoom: G(s.panZoom),
      transform: [P.x, P.y, P.zoom],
      translateExtent: G(s.translateExtent),
      width: G(s.width),
      height: G(s.height)
    });
  }
  const R = Me(ss), L = (C) => {
    R.set({ ...C });
  };
  function Z() {
    R.set(ss);
  }
  function E() {
    s.selectionRect.set(null), s.selectionRectMode.set(null), s.snapGrid.set(null), s.isValidConnection.set(() => !0), V(), Z();
  }
  return {
    // state
    ...s,
    // derived state
    visibleEdges: em(s),
    visibleNodes: tm(s),
    connection: ur([R, s.viewport], ([C, P]) => C.inProgress ? {
      ...C,
      to: ti(C.to, [P.x, P.y, P.zoom])
    } : { ...C }),
    markers: ur([s.edges, s.defaultMarkerColor, s.flowId], ([C, P, H]) => v0(C, { defaultColor: P, id: H })),
    initialized: (() => {
      let C = !1;
      const P = G(s.nodes).length, H = G(s.edges).length;
      return ur([s.nodesInitialized, s.edgesInitialized, s.viewportInitialized], ([M, O, A]) => C || (P === 0 ? C = A : H === 0 ? C = A && M : C = A && M && O, C));
    })(),
    // actions
    syncNodeStores: (C) => K0(s.nodes, C),
    syncEdgeStores: (C) => F0(s.edges, C),
    syncViewport: (C) => G0(s.panZoom, s.viewport, C),
    setNodeTypes: l,
    setEdgeTypes: u,
    addEdge: c,
    updateNodePositions: d,
    updateNodeInternals: v,
    zoomIn: x,
    zoomOut: b,
    fitView: (C) => p(C),
    setMinZoom: $,
    setMaxZoom: g,
    setTranslateExtent: _,
    setPaneClickDistance: k,
    unselectNodesAndEdges: V,
    addSelectedNodes: S,
    addSelectedEdges: N,
    handleNodeSelection: T,
    panBy: I,
    updateConnection: L,
    cancelConnection: Z,
    reset: E
  };
}
function tt() {
  const e = Pr(xa);
  if (!e)
    throw new Error("In order to use useStore you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
function nm({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) {
  const s = cd({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a });
  return Qr(xa, {
    getStore: () => s
  }), s;
}
function eu(e, t) {
  const { panZoom: n, minZoom: r, maxZoom: o, initialViewport: i, viewport: a, dragging: s, translateExtent: l, paneClickDistance: u } = t, c = I0({
    domNode: e,
    minZoom: r,
    maxZoom: o,
    translateExtent: l,
    viewport: i,
    paneClickDistance: u,
    onDraggingChange: s.set
  }), d = c.getViewport();
  return a.set(d), n.set(c), c.update(t), {
    update(v) {
      c.update(v);
    }
  };
}
var rm = /* @__PURE__ */ ie('<div class="svelte-flow__zoom svelte-4xkw84"><!></div>');
const om = {
  hash: "svelte-4xkw84",
  code: ".svelte-flow__zoom.svelte-4xkw84 {width:100%;height:100%;position:absolute;top:0;left:0;z-index:4;}"
};
function dd(e, t) {
  he(t, !1), ot(e, om);
  const [n, r] = vt(), o = () => oe(M, "$panActivationKeyPressed", n), i = () => oe(Z, "$minZoom", n), a = () => oe(E, "$maxZoom", n), s = () => oe(O, "$zoomActivationKeyPressed", n), l = () => oe(L, "$selectionRect", n), u = () => oe(P, "$translateExtent", n), c = () => oe(H, "$lib", n), d = /* @__PURE__ */ ue(), v = /* @__PURE__ */ ue(), p = /* @__PURE__ */ ue();
  let h = y(t, "initialViewport", 12, void 0), x = y(t, "onMoveStart", 12, void 0), b = y(t, "onMove", 12, void 0), $ = y(t, "onMoveEnd", 12, void 0), g = y(t, "panOnScrollMode", 12), _ = y(t, "preventScrolling", 12), w = y(t, "zoomOnScroll", 12), k = y(t, "zoomOnDoubleClick", 12), V = y(t, "zoomOnPinch", 12), S = y(t, "panOnDrag", 12), N = y(t, "panOnScroll", 12), T = y(t, "paneClickDistance", 12);
  const {
    viewport: I,
    panZoom: R,
    selectionRect: L,
    minZoom: Z,
    maxZoom: E,
    dragging: C,
    translateExtent: P,
    lib: H,
    panActivationKeyPressed: M,
    zoomActivationKeyPressed: O,
    viewportInitialized: A
  } = tt(), Y = (F) => I.set({
    x: F[0],
    y: F[1],
    zoom: F[2]
  });
  mn(() => {
    Li(A, !0);
  }), be(() => re(h()), () => {
    ee(d, h() || { x: 0, y: 0, zoom: 1 });
  }), be(
    () => (o(), re(S())),
    () => {
      ee(v, o() || S());
    }
  ), be(
    () => (o(), re(N())),
    () => {
      ee(p, o() || N());
    }
  ), Vt(), Ye();
  var W = rm(), U = j(W);
  Dt(U, t, "default", {}), X(W), Nt(W, (F, ge) => eu == null ? void 0 : eu(F, ge), () => ({
    viewport: I,
    minZoom: i(),
    maxZoom: a(),
    initialViewport: f(d),
    dragging: C,
    panZoom: R,
    onPanZoomStart: x(),
    onPanZoom: b(),
    onPanZoomEnd: $(),
    zoomOnScroll: w(),
    zoomOnDoubleClick: k(),
    zoomOnPinch: V(),
    panOnScroll: f(p),
    panOnDrag: f(v),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: g() || cr.Free,
    zoomActivationKeyPressed: s(),
    preventScrolling: typeof _() == "boolean" ? _() : !0,
    noPanClassName: "nopan",
    noWheelClassName: "nowheel",
    userSelectionActive: !!l(),
    translateExtent: u(),
    lib: c(),
    paneClickDistance: T(),
    onTransformChange: Y
  })), z(e, W);
  var Q = me({
    get initialViewport() {
      return h();
    },
    set initialViewport(F) {
      h(F), m();
    },
    get onMoveStart() {
      return x();
    },
    set onMoveStart(F) {
      x(F), m();
    },
    get onMove() {
      return b();
    },
    set onMove(F) {
      b(F), m();
    },
    get onMoveEnd() {
      return $();
    },
    set onMoveEnd(F) {
      $(F), m();
    },
    get panOnScrollMode() {
      return g();
    },
    set panOnScrollMode(F) {
      g(F), m();
    },
    get preventScrolling() {
      return _();
    },
    set preventScrolling(F) {
      _(F), m();
    },
    get zoomOnScroll() {
      return w();
    },
    set zoomOnScroll(F) {
      w(F), m();
    },
    get zoomOnDoubleClick() {
      return k();
    },
    set zoomOnDoubleClick(F) {
      k(F), m();
    },
    get zoomOnPinch() {
      return V();
    },
    set zoomOnPinch(F) {
      V(F), m();
    },
    get panOnDrag() {
      return S();
    },
    set panOnDrag(F) {
      S(F), m();
    },
    get panOnScroll() {
      return N();
    },
    set panOnScroll(F) {
      N(F), m();
    },
    get paneClickDistance() {
      return T();
    },
    set paneClickDistance(F) {
      T(F), m();
    }
  });
  return r(), Q;
}
pe(
  dd,
  {
    initialViewport: {},
    onMoveStart: {},
    onMove: {},
    onMoveEnd: {},
    panOnScrollMode: {},
    preventScrolling: {},
    zoomOnScroll: {},
    zoomOnDoubleClick: {},
    zoomOnPinch: {},
    panOnDrag: {},
    panOnScroll: {},
    paneClickDistance: {}
  },
  ["default"],
  [],
  !0
);
function tu(e, t) {
  return (n) => {
    n.target === t && (e == null || e(n));
  };
}
function nu(e) {
  return (t) => {
    const n = e.includes(t.id);
    return t.selected !== n && (t.selected = n), t;
  };
}
var im = /* @__PURE__ */ ie("<div><!></div>");
const am = {
  hash: "svelte-1esy7hx",
  code: ".svelte-flow__pane.svelte-1esy7hx {position:absolute;top:0;left:0;width:100%;height:100%;}"
};
function fd(e, t) {
  he(t, !1), ot(e, am);
  const [n, r] = vt(), o = () => oe(C, "$panActivationKeyPressed", n), i = () => oe(Z, "$selectionKeyPressed", n), a = () => oe(R, "$selectionRect", n), s = () => oe(I, "$elementsSelectable", n), l = () => oe(L, "$selectionRectMode", n), u = () => oe(H, "$connection", n), c = () => oe(S, "$edges", n), d = () => oe(V, "$nodeLookup", n), v = () => oe(N, "$viewport", n), p = () => oe(E, "$selectionMode", n), h = () => oe(T, "$dragging", n), x = /* @__PURE__ */ ue(), b = /* @__PURE__ */ ue(), $ = /* @__PURE__ */ ue();
  let g = y(t, "panOnDrag", 12, void 0), _ = y(t, "selectionOnDrag", 12, void 0);
  const w = fa(), {
    nodes: k,
    nodeLookup: V,
    edges: S,
    viewport: N,
    dragging: T,
    elementsSelectable: I,
    selectionRect: R,
    selectionRectMode: L,
    selectionKeyPressed: Z,
    selectionMode: E,
    panActivationKeyPressed: C,
    unselectNodesAndEdges: P,
    connection: H
  } = tt();
  let M = /* @__PURE__ */ ue(), O = null, A = [], Y = !1;
  function W(ce) {
    if (Y || u().inProgress) {
      Y = !1;
      return;
    }
    w("paneclick", { event: ce }), P(), L.set(null);
  }
  function U(ce) {
    var J, Pe;
    if (O = f(M).getBoundingClientRect(), !I || !f(b) || ce.button !== 0 || ce.target !== f(M) || !O)
      return;
    (Pe = (J = ce.target) == null ? void 0 : J.setPointerCapture) == null || Pe.call(J, ce.pointerId);
    const { x: K, y: Ne } = Wn(ce, O);
    P(), R.set({
      width: 0,
      height: 0,
      startX: K,
      startY: Ne,
      x: K,
      y: Ne
    });
  }
  function Q(ce) {
    if (!f(b) || !O || !a())
      return;
    Y = !0;
    const J = Wn(ce, O), Pe = a().startX ?? 0, K = a().startY ?? 0, Ne = {
      ...a(),
      x: J.x < Pe ? J.x : Pe,
      y: J.y < K ? J.y : K,
      width: Math.abs(J.x - Pe),
      height: Math.abs(J.y - K)
    }, qe = A.map((ae) => ae.id), De = ls(A, c()).map((ae) => ae.id);
    A = Tc(
      d(),
      Ne,
      [
        v().x,
        v().y,
        v().zoom
      ],
      p() === Xi.Partial,
      !0
    );
    const de = ls(A, c()).map((ae) => ae.id), fe = A.map((ae) => ae.id);
    (qe.length !== fe.length || fe.some((ae) => !qe.includes(ae))) && k.update((ae) => ae.map(nu(fe))), (De.length !== de.length || de.some((ae) => !De.includes(ae))) && S.update((ae) => ae.map(nu(de))), L.set("user"), R.set(Ne);
  }
  function F(ce) {
    var J, Pe;
    ce.button === 0 && ((Pe = (J = ce.target) == null ? void 0 : J.releasePointerCapture) == null || Pe.call(J, ce.pointerId), !f(b) && l() === "user" && ce.target === f(M) && (W == null || W(ce)), R.set(null), A.length > 0 && Li(L, "nodes"), i() && (Y = !1));
  }
  const ge = (ce) => {
    var J;
    if (Array.isArray(f(x)) && (J = f(x)) != null && J.includes(2)) {
      ce.preventDefault();
      return;
    }
    w("panecontextmenu", { event: ce });
  };
  be(
    () => (o(), re(g())),
    () => {
      ee(x, o() || g());
    }
  ), be(
    () => (i(), a(), re(_()), f(x)),
    () => {
      ee(b, i() || a() || _() && f(x) !== !0);
    }
  ), be(
    () => (s(), f(b), l()),
    () => {
      ee($, s() && (f(b) || l() === "user"));
    }
  ), Vt(), Ye();
  var se = im(), ye = /* @__PURE__ */ Te(() => f($) ? void 0 : tu(W, f(M))), le = /* @__PURE__ */ Te(() => tu(ge, f(M)));
  let ke;
  var $e = j(se);
  Dt($e, t, "default", {}), X(se), zn(se, (ce) => ee(M, ce), () => f(M)), Ee(
    (ce) => ke = Lt(se, 1, "svelte-flow__pane svelte-1esy7hx", null, ke, ce),
    [
      () => ({
        draggable: g() === !0 || Array.isArray(g()) && g().includes(0),
        dragging: h(),
        selection: f(b)
      })
    ],
    _e
  ), ft("click", se, function(...ce) {
    var J;
    (J = f(ye)) == null || J.apply(this, ce);
  }), ft("pointerdown", se, function(...ce) {
    var J;
    (J = f($) ? U : void 0) == null || J.apply(this, ce);
  }), ft("pointermove", se, function(...ce) {
    var J;
    (J = f($) ? Q : void 0) == null || J.apply(this, ce);
  }), ft("pointerup", se, function(...ce) {
    var J;
    (J = f($) ? F : void 0) == null || J.apply(this, ce);
  }), ft("contextmenu", se, function(...ce) {
    var J;
    (J = f(le)) == null || J.apply(this, ce);
  }), z(e, se);
  var He = me({
    get panOnDrag() {
      return g();
    },
    set panOnDrag(ce) {
      g(ce), m();
    },
    get selectionOnDrag() {
      return _();
    },
    set selectionOnDrag(ce) {
      _(ce), m();
    }
  });
  return r(), He;
}
pe(fd, { panOnDrag: {}, selectionOnDrag: {} }, ["default"], [], !0);
var sm = /* @__PURE__ */ ie('<div class="svelte-flow__viewport xyflow__viewport svelte-1floaup"><!></div>');
const lm = {
  hash: "svelte-1floaup",
  code: ".svelte-flow__viewport.svelte-1floaup {width:100%;height:100%;position:absolute;top:0;left:0;}"
};
function vd(e, t) {
  he(t, !1), ot(e, lm);
  const [n, r] = vt(), o = () => oe(i, "$viewport", n), { viewport: i } = tt();
  Ye();
  var a = sm(), s = j(a);
  Dt(s, t, "default", {}), X(a), Ee(() => $t(a, `transform: translate(${o().x ?? ""}px, ${o().y ?? ""}px) scale(${o().zoom ?? ""})`)), z(e, a), me(), r();
}
pe(vd, {}, ["default"], [], !0);
function Ji(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: a } = t, s = _0({
    onDrag: r,
    onDragStart: o,
    onDragStop: i,
    onNodeMouseDown: a,
    getStoreItems: () => {
      const u = G(n.snapGrid), c = G(n.viewport);
      return {
        nodes: G(n.nodes),
        nodeLookup: G(n.nodeLookup),
        edges: G(n.edges),
        nodeExtent: G(n.nodeExtent),
        snapGrid: u || [0, 0],
        snapToGrid: !!u,
        nodeOrigin: G(n.nodeOrigin),
        multiSelectionActive: G(n.multiselectionKeyPressed),
        domNode: G(n.domNode),
        transform: [c.x, c.y, c.zoom],
        autoPanOnNodeDrag: G(n.autoPanOnNodeDrag),
        nodesDraggable: G(n.nodesDraggable),
        selectNodesOnDrag: G(n.selectNodesOnDrag),
        nodeDragThreshold: G(n.nodeDragThreshold),
        unselectNodesAndEdges: n.unselectNodesAndEdges,
        updateNodePositions: n.updateNodePositions,
        panBy: n.panBy
      };
    }
  });
  function l(u, c) {
    if (c.disabled) {
      s.destroy();
      return;
    }
    s.update({
      domNode: u,
      noDragClassName: c.noDragClass,
      handleSelector: c.handleSelector,
      nodeId: c.nodeId,
      isSelectable: c.isSelectable,
      nodeClickDistance: c.nodeClickDistance
    });
  }
  return l(e, t), {
    update(u) {
      l(e, u);
    },
    destroy() {
      s.destroy();
    }
  };
}
function um({ width: e, height: t, initialWidth: n, initialHeight: r, measuredWidth: o, measuredHeight: i }) {
  if (o === void 0 && i === void 0) {
    const a = e ?? n, s = t ?? r;
    return {
      width: a ? `width:${a}px;` : "",
      height: s ? `height:${s}px;` : ""
    };
  }
  return {
    width: e ? `width:${e}px;` : "",
    height: t ? `height:${t}px;` : ""
  };
}
var cm = /* @__PURE__ */ ie("<div><!></div>");
function pd(e, t) {
  he(t, !1);
  const [n, r] = vt(), o = () => oe(se, "$nodeTypes", n), i = () => oe(He, "$elementsSelectable", n), a = () => oe(ce, "$nodesDraggable", n), s = () => oe(Ne, "$connectableStore", n), l = /* @__PURE__ */ ue(void 0, !0), u = /* @__PURE__ */ ue(void 0, !0), c = /* @__PURE__ */ ue(void 0, !0), d = /* @__PURE__ */ ue(void 0, !0);
  let v = y(t, "node", 13), p = y(t, "id", 13), h = y(t, "data", 29, () => ({})), x = y(t, "selected", 13, !1), b = y(t, "draggable", 13, void 0), $ = y(t, "selectable", 13, void 0), g = y(t, "connectable", 13, !0), _ = y(t, "deletable", 13, !0), w = y(t, "hidden", 13, !1), k = y(t, "dragging", 13, !1), V = y(t, "resizeObserver", 13, null), S = y(t, "style", 13, void 0), N = y(t, "type", 13, "default"), T = y(t, "isParent", 13, !1), I = y(t, "positionX", 13), R = y(t, "positionY", 13), L = y(t, "sourcePosition", 13, void 0), Z = y(t, "targetPosition", 13, void 0), E = y(t, "zIndex", 13), C = y(t, "measuredWidth", 13, void 0), P = y(t, "measuredHeight", 13, void 0), H = y(t, "initialWidth", 13, void 0), M = y(t, "initialHeight", 13, void 0), O = y(t, "width", 13, void 0), A = y(t, "height", 13, void 0), Y = y(t, "dragHandle", 13, void 0), W = y(t, "initialized", 13, !1), U = y(t, "parentId", 13, void 0), Q = y(t, "nodeClickDistance", 13, void 0), F = y(t, "class", 13, "");
  const ge = tt(), {
    nodeTypes: se,
    nodeDragThreshold: ye,
    selectNodesOnDrag: le,
    handleNodeSelection: ke,
    updateNodeInternals: $e,
    elementsSelectable: He,
    nodesDraggable: ce
  } = ge;
  let J = /* @__PURE__ */ ue(void 0, !0), Pe = /* @__PURE__ */ ue(null, !0);
  const K = fa(), Ne = Me(g());
  let qe = /* @__PURE__ */ ue(void 0, !0), De = /* @__PURE__ */ ue(void 0, !0), de = /* @__PURE__ */ ue(void 0, !0);
  Qr("svelteflow__node_id", p()), Qr("svelteflow__node_connectable", Ne), Ns(() => {
    var te;
    f(Pe) && ((te = V()) == null || te.unobserve(f(Pe)));
  });
  function fe(te) {
    $() && (!G(le) || !b() || G(ye) > 0) && ke(p()), K("nodeclick", { node: v().internals.userNode, event: te });
  }
  be(() => re(N()), () => {
    ee(l, N() || "default");
  }), be(() => (o(), f(l)), () => {
    ee(u, !!o()[f(l)]);
  }), be(
    () => (o(), f(l), Fi),
    () => {
      ee(c, o()[f(l)] || Fi);
    }
  ), be(
    () => (f(u), re(N())),
    () => {
      f(u) || console.warn("003", ro.error003(N()));
    }
  ), be(
    () => (re(O()), re(A()), re(H()), re(M()), re(C()), re(P())),
    () => {
      ee(d, um({
        width: O(),
        height: A(),
        initialWidth: H(),
        initialHeight: M(),
        measuredWidth: C(),
        measuredHeight: P()
      }));
    }
  ), be(() => re(g()), () => {
    Ne.set(!!g());
  }), be(
    () => (f(qe), f(l), f(De), re(L()), f(de), re(Z()), re(p()), f(J)),
    () => {
      (f(qe) && f(l) !== f(qe) || f(De) && L() !== f(De) || f(de) && Z() !== f(de)) && requestAnimationFrame(() => $e(/* @__PURE__ */ new Map([
        [
          p(),
          {
            id: p(),
            nodeElement: f(J),
            force: !0
          }
        ]
      ]))), ee(qe, f(l)), ee(De, L()), ee(de, Z());
    }
  ), be(
    () => (re(V()), f(J), f(Pe), re(W())),
    () => {
      V() && (f(J) !== f(Pe) || !W()) && (f(Pe) && V().unobserve(f(Pe)), f(J) && V().observe(f(J)), ee(Pe, f(J)));
    }
  ), Vt(), Ye(!0);
  var ae = lt(), Ve = Ce(ae);
  {
    var it = (te) => {
      var Fe = cm();
      let ve, Xt;
      var Yt = j(Fe);
      const un = /* @__PURE__ */ _e(() => x() ?? !1), Ie = /* @__PURE__ */ _e(() => $() ?? i() ?? !0), ut = /* @__PURE__ */ _e(() => _() ?? !0), Xe = /* @__PURE__ */ _e(() => b() ?? a() ?? !0);
      Gu(Yt, () => f(c), (Be, ct) => {
        ct(Be, {
          get data() {
            return h();
          },
          get id() {
            return p();
          },
          get selected() {
            return f(un);
          },
          get selectable() {
            return f(Ie);
          },
          get deletable() {
            return f(ut);
          },
          get sourcePosition() {
            return L();
          },
          get targetPosition() {
            return Z();
          },
          get zIndex() {
            return E();
          },
          get dragging() {
            return k();
          },
          get draggable() {
            return f(Xe);
          },
          get dragHandle() {
            return Y();
          },
          get parentId() {
            return U();
          },
          get type() {
            return f(l);
          },
          get isConnectable() {
            return s();
          },
          get positionAbsoluteX() {
            return I();
          },
          get positionAbsoluteY() {
            return R();
          },
          get width() {
            return O();
          },
          get height() {
            return A();
          }
        });
      }), X(Fe), Nt(Fe, (Be, ct) => Ji == null ? void 0 : Ji(Be, ct), () => ({
        nodeId: p(),
        isSelectable: $(),
        disabled: !1,
        handleSelector: Y(),
        noDragClass: "nodrag",
        nodeClickDistance: Q(),
        onNodeMouseDown: ke,
        onDrag: (Be, ct, en, Ht) => {
          K("nodedrag", { event: Be, targetNode: en, nodes: Ht });
        },
        onDragStart: (Be, ct, en, Ht) => {
          K("nodedragstart", { event: Be, targetNode: en, nodes: Ht });
        },
        onDragStop: (Be, ct, en, Ht) => {
          K("nodedragstop", { event: Be, targetNode: en, nodes: Ht });
        },
        store: ge
      })), zn(Fe, (Be) => ee(J, Be), () => f(J)), nn(() => ft("click", Fe, fe)), nn(() => ft("mouseenter", Fe, (Be) => K("nodemouseenter", { node: v(), event: Be }))), nn(() => ft("mouseleave", Fe, (Be) => K("nodemouseleave", { node: v(), event: Be }))), nn(() => ft("mousemove", Fe, (Be) => K("nodemousemove", { node: v(), event: Be }))), nn(() => ft("contextmenu", Fe, (Be) => K("nodecontextmenu", { node: v(), event: Be }))), Ee(
        (Be, ct) => {
          Se(Fe, "data-id", p()), ve = Lt(Fe, 1, Be, null, ve, ct), Xt = $t(Fe, `${S() ?? "" ?? ""};${f(d).width ?? ""}${f(d).height ?? ""}`, Xt, {
            "z-index": E(),
            transform: `translate(${I() ?? ""}px, ${R() ?? ""}px)`,
            visibility: W() ? "visible" : "hidden"
          });
        },
        [
          () => Sn(Bt([
            "svelte-flow__node",
            `svelte-flow__node-${f(l)}`,
            F()
          ])),
          () => ({
            dragging: k(),
            selected: x(),
            draggable: b(),
            connectable: g(),
            selectable: $(),
            nopan: b(),
            parent: T()
          })
        ],
        _e
      ), z(te, Fe);
    };
    xe(Ve, (te) => {
      w() || te(it);
    });
  }
  z(e, ae);
  var rt = me({
    get node() {
      return v();
    },
    set node(te) {
      v(te), m();
    },
    get id() {
      return p();
    },
    set id(te) {
      p(te), m();
    },
    get data() {
      return h();
    },
    set data(te) {
      h(te), m();
    },
    get selected() {
      return x();
    },
    set selected(te) {
      x(te), m();
    },
    get draggable() {
      return b();
    },
    set draggable(te) {
      b(te), m();
    },
    get selectable() {
      return $();
    },
    set selectable(te) {
      $(te), m();
    },
    get connectable() {
      return g();
    },
    set connectable(te) {
      g(te), m();
    },
    get deletable() {
      return _();
    },
    set deletable(te) {
      _(te), m();
    },
    get hidden() {
      return w();
    },
    set hidden(te) {
      w(te), m();
    },
    get dragging() {
      return k();
    },
    set dragging(te) {
      k(te), m();
    },
    get resizeObserver() {
      return V();
    },
    set resizeObserver(te) {
      V(te), m();
    },
    get style() {
      return S();
    },
    set style(te) {
      S(te), m();
    },
    get type() {
      return N();
    },
    set type(te) {
      N(te), m();
    },
    get isParent() {
      return T();
    },
    set isParent(te) {
      T(te), m();
    },
    get positionX() {
      return I();
    },
    set positionX(te) {
      I(te), m();
    },
    get positionY() {
      return R();
    },
    set positionY(te) {
      R(te), m();
    },
    get sourcePosition() {
      return L();
    },
    set sourcePosition(te) {
      L(te), m();
    },
    get targetPosition() {
      return Z();
    },
    set targetPosition(te) {
      Z(te), m();
    },
    get zIndex() {
      return E();
    },
    set zIndex(te) {
      E(te), m();
    },
    get measuredWidth() {
      return C();
    },
    set measuredWidth(te) {
      C(te), m();
    },
    get measuredHeight() {
      return P();
    },
    set measuredHeight(te) {
      P(te), m();
    },
    get initialWidth() {
      return H();
    },
    set initialWidth(te) {
      H(te), m();
    },
    get initialHeight() {
      return M();
    },
    set initialHeight(te) {
      M(te), m();
    },
    get width() {
      return O();
    },
    set width(te) {
      O(te), m();
    },
    get height() {
      return A();
    },
    set height(te) {
      A(te), m();
    },
    get dragHandle() {
      return Y();
    },
    set dragHandle(te) {
      Y(te), m();
    },
    get initialized() {
      return W();
    },
    set initialized(te) {
      W(te), m();
    },
    get parentId() {
      return U();
    },
    set parentId(te) {
      U(te), m();
    },
    get nodeClickDistance() {
      return Q();
    },
    set nodeClickDistance(te) {
      Q(te), m();
    },
    get class() {
      return F();
    },
    set class(te) {
      F(te), m();
    }
  });
  return r(), rt;
}
pe(
  pd,
  {
    node: {},
    id: {},
    data: {},
    selected: {},
    draggable: {},
    selectable: {},
    connectable: {},
    deletable: {},
    hidden: {},
    dragging: {},
    resizeObserver: {},
    style: {},
    type: {},
    isParent: {},
    positionX: {},
    positionY: {},
    sourcePosition: {},
    targetPosition: {},
    zIndex: {},
    measuredWidth: {},
    measuredHeight: {},
    initialWidth: {},
    initialHeight: {},
    width: {},
    height: {},
    dragHandle: {},
    initialized: {},
    parentId: {},
    nodeClickDistance: {},
    class: {}
  },
  [],
  [],
  !0
);
var dm = /* @__PURE__ */ ie('<div class="svelte-flow__nodes svelte-tf4uy4"></div>');
const fm = {
  hash: "svelte-tf4uy4",
  code: ".svelte-flow__nodes.svelte-tf4uy4 {width:100%;height:100%;position:absolute;left:0;top:0;}"
};
function gd(e, t) {
  he(t, !1), ot(e, fm);
  const [n, r] = vt(), o = () => oe(c, "$visibleNodes", n), i = () => oe(d, "$nodesDraggable", n), a = () => oe(p, "$elementsSelectable", n), s = () => oe(v, "$nodesConnectable", n), l = () => oe(x, "$parentLookup", n);
  let u = y(t, "nodeClickDistance", 12, 0);
  const {
    visibleNodes: c,
    nodesDraggable: d,
    nodesConnectable: v,
    elementsSelectable: p,
    updateNodeInternals: h,
    parentLookup: x
  } = tt(), b = typeof ResizeObserver > "u" ? null : new ResizeObserver((_) => {
    const w = /* @__PURE__ */ new Map();
    _.forEach((k) => {
      const V = k.target.getAttribute("data-id");
      w.set(V, { id: V, nodeElement: k.target, force: !0 });
    }), h(w);
  });
  Ns(() => {
    b == null || b.disconnect();
  }), Ye();
  var $ = dm();
  Zt($, 5, o, (_) => _.id, (_, w) => {
    const k = /* @__PURE__ */ _e(() => !!f(w).selected), V = /* @__PURE__ */ _e(() => !!f(w).hidden), S = /* @__PURE__ */ _e(() => !!(f(w).draggable || i() && typeof f(w).draggable > "u")), N = /* @__PURE__ */ _e(() => !!(f(w).selectable || a() && typeof f(w).selectable > "u")), T = /* @__PURE__ */ _e(() => !!(f(w).connectable || s() && typeof f(w).connectable > "u")), I = /* @__PURE__ */ _e(() => f(w).deletable ?? !0), R = /* @__PURE__ */ _e(() => l().has(f(w).id)), L = /* @__PURE__ */ _e(() => f(w).type ?? "default"), Z = /* @__PURE__ */ _e(() => f(w).internals.z ?? 0), E = /* @__PURE__ */ _e(() => Ac(f(w)));
    pd(_, {
      get node() {
        return f(w);
      },
      get id() {
        return f(w).id;
      },
      get data() {
        return f(w).data;
      },
      get selected() {
        return f(k);
      },
      get hidden() {
        return f(V);
      },
      get draggable() {
        return f(S);
      },
      get selectable() {
        return f(N);
      },
      get connectable() {
        return f(T);
      },
      get deletable() {
        return f(I);
      },
      get positionX() {
        return f(w).internals.positionAbsolute.x;
      },
      get positionY() {
        return f(w).internals.positionAbsolute.y;
      },
      get isParent() {
        return f(R);
      },
      get style() {
        return f(w).style;
      },
      get class() {
        return f(w).class;
      },
      get type() {
        return f(L);
      },
      get sourcePosition() {
        return f(w).sourcePosition;
      },
      get targetPosition() {
        return f(w).targetPosition;
      },
      get dragging() {
        return f(w).dragging;
      },
      get zIndex() {
        return f(Z);
      },
      get dragHandle() {
        return f(w).dragHandle;
      },
      get initialized() {
        return f(E);
      },
      get width() {
        return f(w).width;
      },
      get height() {
        return f(w).height;
      },
      get initialWidth() {
        return f(w).initialWidth;
      },
      get initialHeight() {
        return f(w).initialHeight;
      },
      get measuredWidth() {
        return f(w).measured.width;
      },
      get measuredHeight() {
        return f(w).measured.height;
      },
      get parentId() {
        return f(w).parentId;
      },
      resizeObserver: b,
      get nodeClickDistance() {
        return u();
      },
      $$events: {
        nodeclick(C) {
          Ue.call(this, t, C);
        },
        nodemouseenter(C) {
          Ue.call(this, t, C);
        },
        nodemousemove(C) {
          Ue.call(this, t, C);
        },
        nodemouseleave(C) {
          Ue.call(this, t, C);
        },
        nodedrag(C) {
          Ue.call(this, t, C);
        },
        nodedragstart(C) {
          Ue.call(this, t, C);
        },
        nodedragstop(C) {
          Ue.call(this, t, C);
        },
        nodecontextmenu(C) {
          Ue.call(this, t, C);
        }
      }
    });
  }), X($), z(e, $);
  var g = me({
    get nodeClickDistance() {
      return u();
    },
    set nodeClickDistance(_) {
      u(_), m();
    }
  });
  return r(), g;
}
pe(gd, { nodeClickDistance: {} }, [], [], !0);
var vm = /* @__PURE__ */ Oe('<svg><g role="img"><!></g></svg>');
function hd(e, t) {
  he(t, !1);
  const [n, r] = vt(), o = () => oe(F, "$edgeTypes", n), i = () => oe(ge, "$flowId", n), a = () => oe(se, "$elementsSelectable", n), s = () => oe(Q, "$edgeLookup", n), l = /* @__PURE__ */ ue(void 0, !0), u = /* @__PURE__ */ ue(void 0, !0), c = /* @__PURE__ */ ue(void 0, !0), d = /* @__PURE__ */ ue(void 0, !0), v = /* @__PURE__ */ ue(void 0, !0);
  let p = y(t, "id", 13), h = y(t, "type", 13, "default"), x = y(t, "source", 13, ""), b = y(t, "target", 13, ""), $ = y(t, "data", 29, () => ({})), g = y(t, "style", 13, void 0), _ = y(t, "zIndex", 13, void 0), w = y(t, "animated", 13, !1), k = y(t, "selected", 13, !1), V = y(t, "selectable", 13, void 0), S = y(t, "deletable", 13, void 0), N = y(t, "hidden", 13, !1), T = y(t, "label", 13, void 0), I = y(t, "labelStyle", 13, void 0), R = y(t, "markerStart", 13, void 0), L = y(t, "markerEnd", 13, void 0), Z = y(t, "sourceHandle", 13, void 0), E = y(t, "targetHandle", 13, void 0), C = y(t, "sourceX", 13), P = y(t, "sourceY", 13), H = y(t, "targetX", 13), M = y(t, "targetY", 13), O = y(t, "sourcePosition", 13), A = y(t, "targetPosition", 13), Y = y(t, "ariaLabel", 13, void 0), W = y(t, "interactionWidth", 13, void 0), U = y(t, "class", 13, "");
  Qr("svelteflow__edge_id", p());
  const {
    edgeLookup: Q,
    edgeTypes: F,
    flowId: ge,
    elementsSelectable: se
  } = tt(), ye = fa(), le = rd();
  function ke(K) {
    const Ne = s().get(p());
    Ne && (le(p()), ye("edgeclick", { event: K, edge: Ne }));
  }
  function $e(K, Ne) {
    const qe = s().get(p());
    qe && ye(Ne, { event: K, edge: qe });
  }
  be(() => re(h()), () => {
    ee(l, h() || "default");
  }), be(
    () => (o(), f(l), Ui),
    () => {
      ee(u, o()[f(l)] || Ui);
    }
  ), be(
    () => (re(R()), i()),
    () => {
      ee(c, R() ? `url('#${ds(R(), i())}')` : void 0);
    }
  ), be(
    () => (re(L()), i()),
    () => {
      ee(d, L() ? `url('#${ds(L(), i())}')` : void 0);
    }
  ), be(
    () => (re(V()), a()),
    () => {
      ee(v, V() ?? a());
    }
  ), Vt(), Ye(!0);
  var He = lt(), ce = Ce(He);
  {
    var J = (K) => {
      var Ne = vm();
      let qe;
      var De = j(Ne);
      let de;
      var fe = j(De);
      const ae = /* @__PURE__ */ _e(() => S() ?? !0);
      Gu(fe, () => f(u), (Ve, it) => {
        it(Ve, {
          get id() {
            return p();
          },
          get source() {
            return x();
          },
          get target() {
            return b();
          },
          get sourceX() {
            return C();
          },
          get sourceY() {
            return P();
          },
          get targetX() {
            return H();
          },
          get targetY() {
            return M();
          },
          get sourcePosition() {
            return O();
          },
          get targetPosition() {
            return A();
          },
          get animated() {
            return w();
          },
          get selected() {
            return k();
          },
          get label() {
            return T();
          },
          get labelStyle() {
            return I();
          },
          get data() {
            return $();
          },
          get style() {
            return g();
          },
          get interactionWidth() {
            return W();
          },
          get selectable() {
            return f(v);
          },
          get deletable() {
            return f(ae);
          },
          get type() {
            return f(l);
          },
          get sourceHandleId() {
            return Z();
          },
          get targetHandleId() {
            return E();
          },
          get markerStart() {
            return f(c);
          },
          get markerEnd() {
            return f(d);
          }
        });
      }), X(De), X(Ne), Ee(
        (Ve, it) => {
          qe = $t(Ne, "", qe, { "z-index": _() }), de = Lt(De, 0, Ve, null, de, it), Se(De, "data-id", p()), Se(De, "aria-label", Y() === null ? void 0 : Y() ? Y() : `Edge from ${x()} to ${b()}`);
        },
        [
          () => Sn(Bt(["svelte-flow__edge", U()])),
          () => ({
            animated: w(),
            selected: k(),
            selectable: f(v)
          })
        ],
        _e
      ), ft("click", De, ke), ft("contextmenu", De, (Ve) => {
        $e(Ve, "edgecontextmenu");
      }), ft("mouseenter", De, (Ve) => {
        $e(Ve, "edgemouseenter");
      }), ft("mouseleave", De, (Ve) => {
        $e(Ve, "edgemouseleave");
      }), z(K, Ne);
    };
    xe(ce, (K) => {
      N() || K(J);
    });
  }
  z(e, He);
  var Pe = me({
    get id() {
      return p();
    },
    set id(K) {
      p(K), m();
    },
    get type() {
      return h();
    },
    set type(K) {
      h(K), m();
    },
    get source() {
      return x();
    },
    set source(K) {
      x(K), m();
    },
    get target() {
      return b();
    },
    set target(K) {
      b(K), m();
    },
    get data() {
      return $();
    },
    set data(K) {
      $(K), m();
    },
    get style() {
      return g();
    },
    set style(K) {
      g(K), m();
    },
    get zIndex() {
      return _();
    },
    set zIndex(K) {
      _(K), m();
    },
    get animated() {
      return w();
    },
    set animated(K) {
      w(K), m();
    },
    get selected() {
      return k();
    },
    set selected(K) {
      k(K), m();
    },
    get selectable() {
      return V();
    },
    set selectable(K) {
      V(K), m();
    },
    get deletable() {
      return S();
    },
    set deletable(K) {
      S(K), m();
    },
    get hidden() {
      return N();
    },
    set hidden(K) {
      N(K), m();
    },
    get label() {
      return T();
    },
    set label(K) {
      T(K), m();
    },
    get labelStyle() {
      return I();
    },
    set labelStyle(K) {
      I(K), m();
    },
    get markerStart() {
      return R();
    },
    set markerStart(K) {
      R(K), m();
    },
    get markerEnd() {
      return L();
    },
    set markerEnd(K) {
      L(K), m();
    },
    get sourceHandle() {
      return Z();
    },
    set sourceHandle(K) {
      Z(K), m();
    },
    get targetHandle() {
      return E();
    },
    set targetHandle(K) {
      E(K), m();
    },
    get sourceX() {
      return C();
    },
    set sourceX(K) {
      C(K), m();
    },
    get sourceY() {
      return P();
    },
    set sourceY(K) {
      P(K), m();
    },
    get targetX() {
      return H();
    },
    set targetX(K) {
      H(K), m();
    },
    get targetY() {
      return M();
    },
    set targetY(K) {
      M(K), m();
    },
    get sourcePosition() {
      return O();
    },
    set sourcePosition(K) {
      O(K), m();
    },
    get targetPosition() {
      return A();
    },
    set targetPosition(K) {
      A(K), m();
    },
    get ariaLabel() {
      return Y();
    },
    set ariaLabel(K) {
      Y(K), m();
    },
    get interactionWidth() {
      return W();
    },
    set interactionWidth(K) {
      W(K), m();
    },
    get class() {
      return U();
    },
    set class(K) {
      U(K), m();
    }
  });
  return r(), Pe;
}
pe(
  hd,
  {
    id: {},
    type: {},
    source: {},
    target: {},
    data: {},
    style: {},
    zIndex: {},
    animated: {},
    selected: {},
    selectable: {},
    deletable: {},
    hidden: {},
    label: {},
    labelStyle: {},
    markerStart: {},
    markerEnd: {},
    sourceHandle: {},
    targetHandle: {},
    sourceX: {},
    sourceY: {},
    targetX: {},
    targetY: {},
    sourcePosition: {},
    targetPosition: {},
    ariaLabel: {},
    interactionWidth: {},
    class: {}
  },
  [],
  [],
  !0
);
function md(e, t) {
  he(t, !1);
  let n = y(t, "onMount", 12, void 0), r = y(t, "onDestroy", 12, void 0);
  return mn(() => {
    var o;
    return (o = n()) == null || o(), r();
  }), Ye(), me({
    get onMount() {
      return n();
    },
    set onMount(o) {
      n(o), m();
    },
    get onDestroy() {
      return r();
    },
    set onDestroy(o) {
      r(o), m();
    }
  });
}
pe(md, { onMount: {}, onDestroy: {} }, [], [], !0);
var pm = /* @__PURE__ */ Oe("<defs></defs>");
function yd(e, t) {
  he(t, !1);
  const [n, r] = vt(), o = () => oe(i, "$markers", n), { markers: i } = tt();
  Ye();
  var a = pm();
  Zt(a, 5, o, (s) => s.id, (s, l) => {
    wd(s, mt(() => f(l)));
  }), X(a), z(e, a), me(), r();
}
pe(yd, {}, [], [], !0);
var gm = /* @__PURE__ */ Oe('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), hm = /* @__PURE__ */ Oe('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), mm = /* @__PURE__ */ Oe('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function wd(e, t) {
  he(t, !1);
  let n = y(t, "id", 12), r = y(t, "type", 12), o = y(t, "width", 12, 12.5), i = y(t, "height", 12, 12.5), a = y(t, "markerUnits", 12, "strokeWidth"), s = y(t, "orient", 12, "auto-start-reverse"), l = y(t, "color", 12, void 0), u = y(t, "strokeWidth", 12, void 0);
  Ye();
  var c = mm(), d = j(c);
  {
    var v = (h) => {
      var x = gm();
      Ee(() => {
        Se(x, "stroke", l()), Se(x, "stroke-width", u());
      }), z(h, x);
    }, p = (h, x) => {
      {
        var b = ($) => {
          var g = hm();
          Ee(() => {
            Se(g, "stroke", l()), Se(g, "stroke-width", u()), Se(g, "fill", l());
          }), z($, g);
        };
        xe(
          h,
          ($) => {
            r() === Bo.ArrowClosed && $(b);
          },
          x
        );
      }
    };
    xe(d, (h) => {
      r() === Bo.Arrow ? h(v) : h(p, !1);
    });
  }
  return X(c), Ee(() => {
    Se(c, "id", n()), Se(c, "markerWidth", `${o()}`), Se(c, "markerHeight", `${i()}`), Se(c, "markerUnits", a()), Se(c, "orient", s());
  }), z(e, c), me({
    get id() {
      return n();
    },
    set id(h) {
      n(h), m();
    },
    get type() {
      return r();
    },
    set type(h) {
      r(h), m();
    },
    get width() {
      return o();
    },
    set width(h) {
      o(h), m();
    },
    get height() {
      return i();
    },
    set height(h) {
      i(h), m();
    },
    get markerUnits() {
      return a();
    },
    set markerUnits(h) {
      a(h), m();
    },
    get orient() {
      return s();
    },
    set orient(h) {
      s(h), m();
    },
    get color() {
      return l();
    },
    set color(h) {
      l(h), m();
    },
    get strokeWidth() {
      return u();
    },
    set strokeWidth(h) {
      u(h), m();
    }
  });
}
pe(
  wd,
  {
    id: {},
    type: {},
    width: {},
    height: {},
    markerUnits: {},
    orient: {},
    color: {},
    strokeWidth: {}
  },
  [],
  [],
  !0
);
var ym = /* @__PURE__ */ ie('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!> <!></div>');
function bd(e, t) {
  he(t, !1);
  const [n, r] = vt(), o = () => oe(s, "$visibleEdges", n), i = () => oe(c, "$elementsSelectable", n);
  let a = y(t, "defaultEdgeOptions", 12);
  const {
    visibleEdges: s,
    edgesInitialized: l,
    edges: { setDefaultOptions: u },
    elementsSelectable: c
  } = tt();
  mn(() => {
    a() && u(a());
  }), Ye();
  var d = ym(), v = j(d), p = j(v);
  yd(p, {}), X(v);
  var h = q(v, 2);
  Zt(h, 1, o, (g) => g.id, (g, _) => {
    const w = /* @__PURE__ */ _e(() => f(_).selectable ?? i()), k = /* @__PURE__ */ _e(() => f(_).type || "default");
    hd(g, {
      get id() {
        return f(_).id;
      },
      get source() {
        return f(_).source;
      },
      get target() {
        return f(_).target;
      },
      get data() {
        return f(_).data;
      },
      get style() {
        return f(_).style;
      },
      get animated() {
        return f(_).animated;
      },
      get selected() {
        return f(_).selected;
      },
      get selectable() {
        return f(w);
      },
      get deletable() {
        return f(_).deletable;
      },
      get hidden() {
        return f(_).hidden;
      },
      get label() {
        return f(_).label;
      },
      get labelStyle() {
        return f(_).labelStyle;
      },
      get markerStart() {
        return f(_).markerStart;
      },
      get markerEnd() {
        return f(_).markerEnd;
      },
      get sourceHandle() {
        return f(_).sourceHandle;
      },
      get targetHandle() {
        return f(_).targetHandle;
      },
      get sourceX() {
        return f(_).sourceX;
      },
      get sourceY() {
        return f(_).sourceY;
      },
      get targetX() {
        return f(_).targetX;
      },
      get targetY() {
        return f(_).targetY;
      },
      get sourcePosition() {
        return f(_).sourcePosition;
      },
      get targetPosition() {
        return f(_).targetPosition;
      },
      get ariaLabel() {
        return f(_).ariaLabel;
      },
      get interactionWidth() {
        return f(_).interactionWidth;
      },
      get class() {
        return f(_).class;
      },
      get type() {
        return f(k);
      },
      get zIndex() {
        return f(_).zIndex;
      },
      $$events: {
        edgeclick(V) {
          Ue.call(this, t, V);
        },
        edgecontextmenu(V) {
          Ue.call(this, t, V);
        },
        edgemouseenter(V) {
          Ue.call(this, t, V);
        },
        edgemouseleave(V) {
          Ue.call(this, t, V);
        }
      }
    });
  });
  var x = q(h, 2);
  {
    var b = (g) => {
      md(g, {
        onMount: () => {
          Li(l, !0);
        },
        onDestroy: () => {
          Li(l, !1);
        }
      });
    };
    xe(x, (g) => {
      o().length > 0 && g(b);
    });
  }
  X(d), z(e, d);
  var $ = me({
    get defaultEdgeOptions() {
      return a();
    },
    set defaultEdgeOptions(g) {
      a(g), m();
    }
  });
  return r(), $;
}
pe(bd, { defaultEdgeOptions: {} }, [], [], !0);
var wm = /* @__PURE__ */ ie('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const bm = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function Ks(e, t) {
  he(t, !1), ot(e, bm);
  let n = y(t, "x", 12, 0), r = y(t, "y", 12, 0), o = y(t, "width", 12, 0), i = y(t, "height", 12, 0), a = y(t, "isVisible", 12, !0);
  var s = lt(), l = Ce(s);
  {
    var u = (c) => {
      var d = wm();
      let v;
      Ee(() => v = $t(d, "", v, {
        width: typeof o() == "string" ? o() : `${o()}px`,
        height: typeof i() == "string" ? i() : `${i()}px`,
        transform: `translate(${n()}px, ${r()}px)`
      })), z(c, d);
    };
    xe(l, (c) => {
      a() && c(u);
    });
  }
  return z(e, s), me({
    get x() {
      return n();
    },
    set x(c) {
      n(c), m();
    },
    get y() {
      return r();
    },
    set y(c) {
      r(c), m();
    },
    get width() {
      return o();
    },
    set width(c) {
      o(c), m();
    },
    get height() {
      return i();
    },
    set height(c) {
      i(c), m();
    },
    get isVisible() {
      return a();
    },
    set isVisible(c) {
      a(c), m();
    }
  });
}
pe(
  Ks,
  {
    x: {},
    y: {},
    width: {},
    height: {},
    isVisible: {}
  },
  [],
  [],
  !0
);
function xd(e, t) {
  he(t, !1);
  const [n, r] = vt(), o = () => oe(a, "$selectionRect", n), i = () => oe(s, "$selectionRectMode", n), { selectionRect: a, selectionRectMode: s } = tt();
  Ye();
  const l = /* @__PURE__ */ _e(() => !!(o() && i() === "user")), u = /* @__PURE__ */ _e(() => {
    var p;
    return (p = o()) == null ? void 0 : p.width;
  }), c = /* @__PURE__ */ _e(() => {
    var p;
    return (p = o()) == null ? void 0 : p.height;
  }), d = /* @__PURE__ */ _e(() => {
    var p;
    return (p = o()) == null ? void 0 : p.x;
  }), v = /* @__PURE__ */ _e(() => {
    var p;
    return (p = o()) == null ? void 0 : p.y;
  });
  Ks(e, {
    get isVisible() {
      return f(l);
    },
    get width() {
      return f(u);
    },
    get height() {
      return f(c);
    },
    get x() {
      return f(d);
    },
    get y() {
      return f(v);
    }
  }), me(), r();
}
pe(xd, {}, [], [], !0);
var xm = /* @__PURE__ */ ie('<div class="selection-wrapper nopan svelte-5pxri" role="button" tabindex="-1"><!></div>');
const $m = {
  hash: "svelte-5pxri",
  code: ".selection-wrapper.svelte-5pxri {position:absolute;top:0;left:0;z-index:7;pointer-events:all;}"
};
function $d(e, t) {
  he(t, !1), ot(e, $m);
  const [n, r] = vt(), o = () => oe(l, "$selectionRectMode", n), i = () => oe(c, "$nodeLookup", n), a = () => oe(u, "$nodes", n), s = tt(), { selectionRectMode: l, nodes: u, nodeLookup: c } = s, d = fa();
  let v = /* @__PURE__ */ ue(null);
  function p(g) {
    const _ = a().filter((w) => w.selected);
    d("selectioncontextmenu", { nodes: _, event: g });
  }
  function h(g) {
    const _ = a().filter((w) => w.selected);
    d("selectionclick", { nodes: _, event: g });
  }
  be(
    () => (o(), i(), a()),
    () => {
      o() === "nodes" && (ee(v, ei(i(), { filter: (g) => !!g.selected })), a());
    }
  ), Vt(), Ye();
  var x = lt(), b = Ce(x);
  {
    var $ = (g) => {
      var _ = xm(), w = j(_);
      Ks(w, { width: "100%", height: "100%", x: 0, y: 0 }), X(_), Nt(_, (k, V) => Ji == null ? void 0 : Ji(k, V), () => ({
        disabled: !1,
        store: s,
        onDrag: (k, V, S, N) => {
          d("nodedrag", { event: k, targetNode: null, nodes: N });
        },
        onDragStart: (k, V, S, N) => {
          d("nodedragstart", { event: k, targetNode: null, nodes: N });
        },
        onDragStop: (k, V, S, N) => {
          d("nodedragstop", { event: k, targetNode: null, nodes: N });
        }
      })), nn(() => ft("contextmenu", _, p)), nn(() => ft("click", _, h)), nn(() => ft("keyup", _, () => {
      })), Ee(() => $t(_, `width: ${f(v).width ?? ""}px; height: ${f(v).height ?? ""}px; transform: translate(${f(v).x ?? ""}px, ${f(v).y ?? ""}px)`)), z(g, _);
    };
    xe(b, (g) => {
      o() === "nodes" && f(v) && Xn(f(v).x) && Xn(f(v).y) && g($);
    });
  }
  z(e, x), me(), r();
}
pe($d, {}, [], [], !0);
function xt(e, t) {
  let { enabled: n = !0, trigger: r, type: o = "keydown" } = t;
  function i(a) {
    const s = Array.isArray(r) ? r : [r], l = {
      alt: a.altKey,
      ctrl: a.ctrlKey,
      shift: a.shiftKey,
      meta: a.metaKey
    };
    for (const u of s) {
      const c = {
        modifier: [],
        preventDefault: !1,
        enabled: !0,
        ...u
      }, { modifier: d, key: v, callback: p, preventDefault: h, enabled: x } = c;
      if (x) {
        if (d.length && !(Array.isArray(d) ? d : [d]).map(
          (b) => typeof b == "string" ? [b] : b
        ).some(
          (b) => b.every(($) => l[$])
        ))
          continue;
        if (a.key === v) {
          h && a.preventDefault();
          const b = {
            node: e,
            trigger: c,
            originalEvent: a
          };
          e.dispatchEvent(new CustomEvent("shortcut", { detail: b })), p == null || p(b);
        }
      }
    }
  }
  return n && e.addEventListener(o, i), {
    update: (a) => {
      const { enabled: s = !0, type: l = "keydown" } = a;
      n && (!s || o !== l) ? e.removeEventListener(o, i) : !n && s && e.addEventListener(l, i), n = s, o = l, r = a.trigger;
    },
    destroy: () => {
      e.removeEventListener(o, i);
    }
  };
}
function Cd(e, t) {
  he(t, !1);
  let n = y(t, "selectionKey", 12, "Shift"), r = y(t, "multiSelectionKey", 28, () => Wi() ? "Meta" : "Control"), o = y(t, "deleteKey", 12, "Backspace"), i = y(t, "panActivationKey", 12, " "), a = y(t, "zoomActivationKey", 28, () => Wi() ? "Meta" : "Control");
  const {
    selectionKeyPressed: s,
    multiselectionKeyPressed: l,
    deleteKeyPressed: u,
    panActivationKeyPressed: c,
    zoomActivationKeyPressed: d,
    selectionRect: v
  } = tt();
  function p(g) {
    return g !== null && typeof g == "object";
  }
  function h(g) {
    return p(g) ? g.modifier || [] : [];
  }
  function x(g) {
    return g == null ? "" : p(g) ? g.key : g;
  }
  function b(g, _) {
    return (Array.isArray(g) ? g : [g]).map((w) => {
      const k = x(w);
      return {
        key: k,
        modifier: h(w),
        enabled: k !== null,
        callback: _
      };
    });
  }
  function $() {
    v.set(null), s.set(!1), l.set(!1), u.set(!1), c.set(!1), d.set(!1);
  }
  return Ye(), ft("blur", Kt, $), ft("contextmenu", Kt, $), Nt(Kt, (g, _) => xt == null ? void 0 : xt(g, _), () => ({
    trigger: b(n(), () => s.set(!0)),
    type: "keydown"
  })), Nt(Kt, (g, _) => xt == null ? void 0 : xt(g, _), () => ({
    trigger: b(n(), () => s.set(!1)),
    type: "keyup"
  })), Nt(Kt, (g, _) => xt == null ? void 0 : xt(g, _), () => ({
    trigger: b(r(), () => l.set(!0)),
    type: "keydown"
  })), Nt(Kt, (g, _) => xt == null ? void 0 : xt(g, _), () => ({
    trigger: b(r(), () => l.set(!1)),
    type: "keyup"
  })), Nt(Kt, (g, _) => xt == null ? void 0 : xt(g, _), () => ({
    trigger: b(o(), (g) => {
      !(g.originalEvent.ctrlKey || g.originalEvent.metaKey || g.originalEvent.shiftKey) && !n0(g.originalEvent) && u.set(!0);
    }),
    type: "keydown"
  })), Nt(Kt, (g, _) => xt == null ? void 0 : xt(g, _), () => ({
    trigger: b(o(), () => u.set(!1)),
    type: "keyup"
  })), Nt(Kt, (g, _) => xt == null ? void 0 : xt(g, _), () => ({
    trigger: b(i(), () => c.set(!0)),
    type: "keydown"
  })), Nt(Kt, (g, _) => xt == null ? void 0 : xt(g, _), () => ({
    trigger: b(i(), () => c.set(!1)),
    type: "keyup"
  })), Nt(Kt, (g, _) => xt == null ? void 0 : xt(g, _), () => ({
    trigger: b(a(), () => d.set(!0)),
    type: "keydown"
  })), Nt(Kt, (g, _) => xt == null ? void 0 : xt(g, _), () => ({
    trigger: b(a(), () => d.set(!1)),
    type: "keyup"
  })), me({
    get selectionKey() {
      return n();
    },
    set selectionKey(g) {
      n(g), m();
    },
    get multiSelectionKey() {
      return r();
    },
    set multiSelectionKey(g) {
      r(g), m();
    },
    get deleteKey() {
      return o();
    },
    set deleteKey(g) {
      o(g), m();
    },
    get panActivationKey() {
      return i();
    },
    set panActivationKey(g) {
      i(g), m();
    },
    get zoomActivationKey() {
      return a();
    },
    set zoomActivationKey(g) {
      a(g), m();
    }
  });
}
pe(
  Cd,
  {
    selectionKey: {},
    multiSelectionKey: {},
    deleteKey: {},
    panActivationKey: {},
    zoomActivationKey: {}
  },
  [],
  [],
  !0
);
var Cm = /* @__PURE__ */ Oe('<path fill="none" class="svelte-flow__connection-path"></path>'), _m = /* @__PURE__ */ Oe('<svg class="svelte-flow__connectionline"><g><!><!></g></svg>');
function _d(e, t) {
  he(t, !1);
  const [n, r] = vt(), o = () => oe(p, "$connection", n), i = () => oe(h, "$connectionLineType", n), a = () => oe(d, "$width", n), s = () => oe(v, "$height", n);
  let l = y(t, "containerStyle", 12, ""), u = y(t, "style", 12, ""), c = y(t, "isCustomComponent", 12, !1);
  const {
    width: d,
    height: v,
    connection: p,
    connectionLineType: h
  } = tt();
  let x = /* @__PURE__ */ ue(null);
  be(
    () => (o(), re(c()), i(), f(x), cs),
    () => {
      if (o().inProgress && !c()) {
        const { from: w, to: k, fromPosition: V, toPosition: S } = o(), N = {
          sourceX: w.x,
          sourceY: w.y,
          sourcePosition: V,
          targetX: k.x,
          targetY: k.y,
          targetPosition: S
        };
        switch (i()) {
          case Wr.Bezier:
            ((T) => ee(x, T[0]))(qc(N));
            break;
          case Wr.Step:
            ((T) => ee(x, T[0]))(Ki({ ...N, borderRadius: 0 }));
            break;
          case Wr.SmoothStep:
            ((T) => ee(x, T[0]))(Ki(N));
            break;
          default:
            ((T) => ee(x, T[0]))(cs(N));
        }
      }
    }
  ), Vt(), Ye();
  var b = lt(), $ = Ce(b);
  {
    var g = (w) => {
      var k = _m(), V = j(k), S = j(V);
      Dt(S, t, "connectionLine", {});
      var N = q(S);
      {
        var T = (I) => {
          var R = Cm();
          Ee(() => {
            Se(R, "d", f(x)), $t(R, u());
          }), z(I, R);
        };
        xe(N, (I) => {
          c() || I(T);
        });
      }
      X(V), X(k), Ee(
        (I) => {
          Se(k, "width", a()), Se(k, "height", s()), $t(k, l()), Lt(V, 0, I);
        },
        [
          () => Sn(Bt([
            "svelte-flow__connection",
            Zh(o().isValid)
          ]))
        ],
        _e
      ), z(w, k);
    };
    xe($, (w) => {
      o().inProgress && w(g);
    });
  }
  z(e, b);
  var _ = me({
    get containerStyle() {
      return l();
    },
    set containerStyle(w) {
      l(w), m();
    },
    get style() {
      return u();
    },
    set style(w) {
      u(w), m();
    },
    get isCustomComponent() {
      return c();
    },
    set isCustomComponent(w) {
      c(w), m();
    }
  });
  return r(), _;
}
pe(
  _d,
  {
    containerStyle: {},
    style: {},
    isCustomComponent: {}
  },
  ["connectionLine"],
  [],
  !0
);
var km = /* @__PURE__ */ ie("<div><!></div>");
function ri(e, t) {
  const n = gt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = gt(n, ["position", "style", "class"]);
  he(t, !1);
  const [o, i] = vt(), a = () => oe(d, "$selectionRectMode", o), s = /* @__PURE__ */ ue();
  let l = y(t, "position", 12, "top-right"), u = y(t, "style", 12, void 0), c = y(t, "class", 12, void 0);
  const { selectionRectMode: d } = tt();
  be(() => re(l()), () => {
    ee(s, `${l()}`.split("-"));
  }), Vt(), Ye();
  var v = km();
  let p;
  var h = j(v);
  Dt(h, t, "default", {}), X(v), Ee(
    (b) => p = sn(v, p, {
      class: b,
      style: u(),
      ...r,
      [$r]: {
        "pointer-events": a() ? "none" : ""
      }
    }),
    [
      () => Bt([
        "svelte-flow__panel",
        c(),
        ...f(s)
      ])
    ],
    _e
  ), z(e, v);
  var x = me({
    get position() {
      return l();
    },
    set position(b) {
      l(b), m();
    },
    get style() {
      return u();
    },
    set style(b) {
      u(b), m();
    },
    get class() {
      return c();
    },
    set class(b) {
      c(b), m();
    }
  });
  return i(), x;
}
pe(ri, { position: {}, style: {}, class: {} }, ["default"], [], !0);
var Sm = /* @__PURE__ */ ie('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function kd(e, t) {
  he(t, !1);
  let n = y(t, "proOptions", 12, void 0), r = y(t, "position", 12, "bottom-right");
  Ye();
  var o = lt(), i = Ce(o);
  {
    var a = (s) => {
      ri(s, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (l, u) => {
          var c = Sm();
          z(l, c);
        },
        $$slots: { default: !0 }
      });
    };
    xe(i, (s) => {
      var l;
      (l = n()) != null && l.hideAttribution || s(a);
    });
  }
  return z(e, o), me({
    get proOptions() {
      return n();
    },
    set proOptions(s) {
      n(s), m();
    },
    get position() {
      return r();
    },
    set position(s) {
      r(s), m();
    }
  });
}
pe(kd, { proOptions: {}, position: {} }, [], [], !0);
function ru(e, { nodeTypes: t, edgeTypes: n, minZoom: r, maxZoom: o, translateExtent: i, paneClickDistance: a }) {
  t !== void 0 && e.setNodeTypes(t), n !== void 0 && e.setEdgeTypes(n), r !== void 0 && e.setMinZoom(r), o !== void 0 && e.setMaxZoom(o), i !== void 0 && e.setTranslateExtent(i), a !== void 0 && e.setPaneClickDistance(a);
}
const Em = (e) => Object.keys(e);
function ou(e, t) {
  Em(t).forEach((n) => {
    const r = t[n];
    r !== void 0 && e[n].set(r);
  });
}
function Pm() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function Mm(e = "light") {
  return cn("light", (t) => {
    if (e !== "system") {
      t(e);
      return;
    }
    const n = Pm(), r = () => t(n != null && n.matches ? "dark" : "light");
    return t(n != null && n.matches ? "dark" : "light"), n == null || n.addEventListener("change", r), () => {
      n == null || n.removeEventListener("change", r);
    };
  });
}
var Vm = /* @__PURE__ */ ie('<!> <!> <div class="svelte-flow__edgelabel-renderer"></div> <div class="svelte-flow__viewport-portal"></div> <!> <!>', 1), Om = /* @__PURE__ */ ie("<!> <!>", 1), Hm = /* @__PURE__ */ ie("<div><!> <!> <!> <!></div>");
const Tm = {
  hash: "svelte-18e9ir1",
  code: ".svelte-flow.svelte-18e9ir1 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgba(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function Sd(e, t) {
  const n = Y1(t), r = gt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), o = gt(r, [
    "id",
    "nodes",
    "edges",
    "fitView",
    "fitViewOptions",
    "minZoom",
    "maxZoom",
    "initialViewport",
    "viewport",
    "nodeTypes",
    "edgeTypes",
    "selectionKey",
    "selectionMode",
    "panActivationKey",
    "multiSelectionKey",
    "zoomActivationKey",
    "nodesDraggable",
    "nodesConnectable",
    "nodeDragThreshold",
    "elementsSelectable",
    "snapGrid",
    "deleteKey",
    "connectionRadius",
    "connectionLineType",
    "connectionMode",
    "connectionLineStyle",
    "connectionLineContainerStyle",
    "onMoveStart",
    "onMove",
    "onMoveEnd",
    "isValidConnection",
    "translateExtent",
    "nodeExtent",
    "onlyRenderVisibleElements",
    "panOnScrollMode",
    "preventScrolling",
    "zoomOnScroll",
    "zoomOnDoubleClick",
    "zoomOnPinch",
    "panOnScroll",
    "panOnDrag",
    "selectionOnDrag",
    "autoPanOnConnect",
    "autoPanOnNodeDrag",
    "onerror",
    "ondelete",
    "onedgecreate",
    "attributionPosition",
    "proOptions",
    "defaultEdgeOptions",
    "width",
    "height",
    "colorMode",
    "onconnect",
    "onconnectstart",
    "onconnectend",
    "onbeforedelete",
    "oninit",
    "nodeOrigin",
    "paneClickDistance",
    "nodeClickDistance",
    "defaultMarkerColor",
    "style",
    "class"
  ]);
  he(t, !1), ot(e, Tm);
  const [i, a] = vt(), s = () => oe(_(), "$viewport", i), l = () => oe(yo, "$initialized", i), u = () => oe(f(c), "$colorModeClass", i), c = /* @__PURE__ */ ue();
  let d = y(t, "id", 12, "1"), v = y(t, "nodes", 12), p = y(t, "edges", 12), h = y(t, "fitView", 12, void 0), x = y(t, "fitViewOptions", 12, void 0), b = y(t, "minZoom", 12, void 0), $ = y(t, "maxZoom", 12, void 0), g = y(t, "initialViewport", 12, void 0), _ = y(t, "viewport", 12, void 0), w = y(t, "nodeTypes", 12, void 0), k = y(t, "edgeTypes", 12, void 0), V = y(t, "selectionKey", 12, void 0), S = y(t, "selectionMode", 12, void 0), N = y(t, "panActivationKey", 12, void 0), T = y(t, "multiSelectionKey", 12, void 0), I = y(t, "zoomActivationKey", 12, void 0), R = y(t, "nodesDraggable", 12, void 0), L = y(t, "nodesConnectable", 12, void 0), Z = y(t, "nodeDragThreshold", 12, void 0), E = y(t, "elementsSelectable", 12, void 0), C = y(t, "snapGrid", 12, void 0), P = y(t, "deleteKey", 12, void 0), H = y(t, "connectionRadius", 12, void 0), M = y(t, "connectionLineType", 12, void 0), O = y(t, "connectionMode", 28, () => Or.Strict), A = y(t, "connectionLineStyle", 12, ""), Y = y(t, "connectionLineContainerStyle", 12, ""), W = y(t, "onMoveStart", 12, void 0), U = y(t, "onMove", 12, void 0), Q = y(t, "onMoveEnd", 12, void 0), F = y(t, "isValidConnection", 12, void 0), ge = y(t, "translateExtent", 12, void 0), se = y(t, "nodeExtent", 12, void 0), ye = y(t, "onlyRenderVisibleElements", 12, void 0), le = y(t, "panOnScrollMode", 28, () => cr.Free), ke = y(t, "preventScrolling", 12, !0), $e = y(t, "zoomOnScroll", 12, !0), He = y(t, "zoomOnDoubleClick", 12, !0), ce = y(t, "zoomOnPinch", 12, !0), J = y(t, "panOnScroll", 12, !1), Pe = y(t, "panOnDrag", 12, !0), K = y(t, "selectionOnDrag", 12, void 0), Ne = y(t, "autoPanOnConnect", 12, !0), qe = y(t, "autoPanOnNodeDrag", 12, !0), De = y(t, "onerror", 12, void 0), de = y(t, "ondelete", 12, void 0), fe = y(t, "onedgecreate", 12, void 0), ae = y(t, "attributionPosition", 12, void 0), Ve = y(t, "proOptions", 12, void 0), it = y(t, "defaultEdgeOptions", 12, void 0), rt = y(t, "width", 12, void 0), te = y(t, "height", 12, void 0), Fe = y(t, "colorMode", 12, "light"), ve = y(t, "onconnect", 12, void 0), Xt = y(t, "onconnectstart", 12, void 0), Yt = y(t, "onconnectend", 12, void 0), un = y(t, "onbeforedelete", 12, void 0), Ie = y(t, "oninit", 12, void 0), ut = y(t, "nodeOrigin", 12, void 0), Xe = y(t, "paneClickDistance", 12, 0), Be = y(t, "nodeClickDistance", 12, 0), ct = y(t, "defaultMarkerColor", 12, "#b1b1b7"), en = y(t, "style", 12, void 0), Ht = y(t, "class", 12, void 0), Jn = /* @__PURE__ */ ue(), yt = /* @__PURE__ */ ue(), Ct = /* @__PURE__ */ ue();
  const Mn = s() || g(), at = k1(xa) ? tt() : nm({
    nodes: G(v()),
    edges: G(p()),
    width: rt(),
    height: te(),
    fitView: h(),
    nodeOrigin: ut(),
    nodeExtent: se()
  });
  mn(() => (at.width.set(f(yt)), at.height.set(f(Ct)), at.domNode.set(f(Jn)), at.syncNodeStores(v()), at.syncEdgeStores(p()), at.syncViewport(_()), h() !== void 0 && at.fitViewQueued.set(h()), x() && at.fitViewOptions.set(x()), ru(at, {
    nodeTypes: w(),
    edgeTypes: k(),
    minZoom: b(),
    maxZoom: $(),
    translateExtent: ge(),
    paneClickDistance: Xe()
  }), () => {
    at.reset();
  }));
  const { initialized: yo } = at;
  let Qn = /* @__PURE__ */ ue(!1);
  be(
    () => (f(yt), f(Ct)),
    () => {
      f(yt) !== void 0 && f(Ct) !== void 0 && (at.width.set(f(yt)), at.height.set(f(Ct)));
    }
  ), be(
    () => (f(Qn), l(), re(Ie())),
    () => {
      var B;
      !f(Qn) && l() && ((B = Ie()) == null || B(), ee(Qn, !0));
    }
  ), be(
    () => (re(d()), re(M()), re(H()), re(S()), re(C()), re(ct()), re(R()), re(L()), re(E()), re(ye()), re(F()), re(Ne()), re(qe()), re(De()), re(de()), re(fe()), re(O()), re(Z()), re(ve()), re(Xt()), re(Yt()), re(un()), re(ut()), ou),
    () => {
      const B = {
        flowId: d(),
        connectionLineType: M(),
        connectionRadius: H(),
        selectionMode: S(),
        snapGrid: C(),
        defaultMarkerColor: ct(),
        nodesDraggable: R(),
        nodesConnectable: L(),
        elementsSelectable: E(),
        onlyRenderVisibleElements: ye(),
        isValidConnection: F(),
        autoPanOnConnect: Ne(),
        autoPanOnNodeDrag: qe(),
        onerror: De(),
        ondelete: de(),
        onedgecreate: fe(),
        connectionMode: O(),
        nodeDragThreshold: Z(),
        onconnect: ve(),
        onconnectstart: Xt(),
        onconnectend: Yt(),
        onbeforedelete: un(),
        nodeOrigin: ut()
      };
      ou(at, B);
    }
  ), be(
    () => (re(w()), re(k()), re(b()), re($()), re(ge()), re(Xe())),
    () => {
      ru(at, {
        nodeTypes: w(),
        edgeTypes: k(),
        minZoom: b(),
        maxZoom: $(),
        translateExtent: ge(),
        paneClickDistance: Xe()
      });
    }
  ), be(
    () => re(Fe()),
    () => {
      nv(ee(c, Mm(Fe())), "$colorModeClass", i);
    }
  ), Vt(), Ye();
  var zt = Hm();
  let br;
  var xr = j(zt);
  Cd(xr, {
    get selectionKey() {
      return V();
    },
    get deleteKey() {
      return P();
    },
    get panActivationKey() {
      return N();
    },
    get multiSelectionKey() {
      return T();
    },
    get zoomActivationKey() {
      return I();
    }
  });
  var zr = q(xr, 2);
  const wo = /* @__PURE__ */ _e(() => le() === void 0 ? cr.Free : le()), si = /* @__PURE__ */ _e(() => ke() === void 0 ? !0 : ke()), li = /* @__PURE__ */ _e(() => $e() === void 0 ? !0 : $e()), Sa = /* @__PURE__ */ _e(() => He() === void 0 ? !0 : He()), Ea = /* @__PURE__ */ _e(() => ce() === void 0 ? !0 : ce()), Pa = /* @__PURE__ */ _e(() => J() === void 0 ? !1 : J()), Ma = /* @__PURE__ */ _e(() => Pe() === void 0 ? !0 : Pe()), D = /* @__PURE__ */ _e(() => Xe() === void 0 ? 0 : Xe());
  dd(zr, {
    initialViewport: Mn,
    get onMoveStart() {
      return W();
    },
    get onMove() {
      return U();
    },
    get onMoveEnd() {
      return Q();
    },
    get panOnScrollMode() {
      return f(wo);
    },
    get preventScrolling() {
      return f(si);
    },
    get zoomOnScroll() {
      return f(li);
    },
    get zoomOnDoubleClick() {
      return f(Sa);
    },
    get zoomOnPinch() {
      return f(Ea);
    },
    get panOnScroll() {
      return f(Pa);
    },
    get panOnDrag() {
      return f(Ma);
    },
    get paneClickDistance() {
      return f(D);
    },
    children: (B, st) => {
      const Ke = /* @__PURE__ */ _e(() => Pe() === void 0 ? !0 : Pe());
      fd(B, {
        get panOnDrag() {
          return f(Ke);
        },
        get selectionOnDrag() {
          return K();
        },
        $$events: {
          paneclick(Ze) {
            Ue.call(this, t, Ze);
          },
          panecontextmenu(Ze) {
            Ue.call(this, t, Ze);
          }
        },
        children: (Ze, Tt) => {
          var pt = Om(), ht = Ce(pt);
          vd(ht, {
            children: (er, tr) => {
              var Pt = Vm(), Ar = Ce(Pt);
              bd(Ar, {
                get defaultEdgeOptions() {
                  return it();
                },
                $$events: {
                  edgeclick(Ge) {
                    Ue.call(this, t, Ge);
                  },
                  edgecontextmenu(Ge) {
                    Ue.call(this, t, Ge);
                  },
                  edgemouseenter(Ge) {
                    Ue.call(this, t, Ge);
                  },
                  edgemouseleave(Ge) {
                    Ue.call(this, t, Ge);
                  }
                }
              });
              var ui = q(Ar, 2);
              _d(ui, {
                get containerStyle() {
                  return Y();
                },
                get style() {
                  return A();
                },
                isCustomComponent: n.connectionLine,
                $$slots: {
                  connectionLine: (Ge, vb) => {
                    var el = lt(), Cf = Ce(el);
                    Dt(Cf, t, "connectionLine", {}), z(Ge, el);
                  }
                }
              });
              var ci = q(ui, 6);
              gd(ci, {
                get nodeClickDistance() {
                  return Be();
                },
                $$events: {
                  nodeclick(Ge) {
                    Ue.call(this, t, Ge);
                  },
                  nodemouseenter(Ge) {
                    Ue.call(this, t, Ge);
                  },
                  nodemousemove(Ge) {
                    Ue.call(this, t, Ge);
                  },
                  nodemouseleave(Ge) {
                    Ue.call(this, t, Ge);
                  },
                  nodedragstart(Ge) {
                    Ue.call(this, t, Ge);
                  },
                  nodedrag(Ge) {
                    Ue.call(this, t, Ge);
                  },
                  nodedragstop(Ge) {
                    Ue.call(this, t, Ge);
                  },
                  nodecontextmenu(Ge) {
                    Ue.call(this, t, Ge);
                  }
                }
              });
              var $f = q(ci, 2);
              $d($f, {
                $$events: {
                  selectionclick(Ge) {
                    Ue.call(this, t, Ge);
                  },
                  selectioncontextmenu(Ge) {
                    Ue.call(this, t, Ge);
                  },
                  nodedragstart(Ge) {
                    Ue.call(this, t, Ge);
                  },
                  nodedrag(Ge) {
                    Ue.call(this, t, Ge);
                  },
                  nodedragstop(Ge) {
                    Ue.call(this, t, Ge);
                  }
                }
              }), z(er, Pt);
            },
            $$slots: { default: !0 }
          });
          var jt = q(ht, 2);
          xd(jt, {}), z(Ze, pt);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { default: !0 }
  });
  var ne = q(zr, 2);
  kd(ne, {
    get proOptions() {
      return Ve();
    },
    get position() {
      return ae();
    }
  });
  var we = q(ne, 2);
  Dt(we, t, "default", {}), X(zt), zn(zt, (B) => ee(Jn, B), () => f(Jn)), Ee(
    (B) => br = sn(
      zt,
      br,
      {
        style: en(),
        class: B,
        "data-testid": "svelte-flow__wrapper",
        ...o,
        role: "application"
      },
      "svelte-18e9ir1"
    ),
    [
      () => Bt([
        "svelte-flow",
        Ht(),
        u()
      ])
    ],
    _e
  ), ml(zt, "clientWidth", (B) => ee(yt, B)), ml(zt, "clientHeight", (B) => ee(Ct, B)), ft("dragover", zt, function(B) {
    Ue.call(this, t, B);
  }), ft("drop", zt, function(B) {
    Ue.call(this, t, B);
  }), z(e, zt);
  var Le = me({
    get id() {
      return d();
    },
    set id(B) {
      d(B), m();
    },
    get nodes() {
      return v();
    },
    set nodes(B) {
      v(B), m();
    },
    get edges() {
      return p();
    },
    set edges(B) {
      p(B), m();
    },
    get fitView() {
      return h();
    },
    set fitView(B) {
      h(B), m();
    },
    get fitViewOptions() {
      return x();
    },
    set fitViewOptions(B) {
      x(B), m();
    },
    get minZoom() {
      return b();
    },
    set minZoom(B) {
      b(B), m();
    },
    get maxZoom() {
      return $();
    },
    set maxZoom(B) {
      $(B), m();
    },
    get initialViewport() {
      return g();
    },
    set initialViewport(B) {
      g(B), m();
    },
    get viewport() {
      return _();
    },
    set viewport(B) {
      _(B), m();
    },
    get nodeTypes() {
      return w();
    },
    set nodeTypes(B) {
      w(B), m();
    },
    get edgeTypes() {
      return k();
    },
    set edgeTypes(B) {
      k(B), m();
    },
    get selectionKey() {
      return V();
    },
    set selectionKey(B) {
      V(B), m();
    },
    get selectionMode() {
      return S();
    },
    set selectionMode(B) {
      S(B), m();
    },
    get panActivationKey() {
      return N();
    },
    set panActivationKey(B) {
      N(B), m();
    },
    get multiSelectionKey() {
      return T();
    },
    set multiSelectionKey(B) {
      T(B), m();
    },
    get zoomActivationKey() {
      return I();
    },
    set zoomActivationKey(B) {
      I(B), m();
    },
    get nodesDraggable() {
      return R();
    },
    set nodesDraggable(B) {
      R(B), m();
    },
    get nodesConnectable() {
      return L();
    },
    set nodesConnectable(B) {
      L(B), m();
    },
    get nodeDragThreshold() {
      return Z();
    },
    set nodeDragThreshold(B) {
      Z(B), m();
    },
    get elementsSelectable() {
      return E();
    },
    set elementsSelectable(B) {
      E(B), m();
    },
    get snapGrid() {
      return C();
    },
    set snapGrid(B) {
      C(B), m();
    },
    get deleteKey() {
      return P();
    },
    set deleteKey(B) {
      P(B), m();
    },
    get connectionRadius() {
      return H();
    },
    set connectionRadius(B) {
      H(B), m();
    },
    get connectionLineType() {
      return M();
    },
    set connectionLineType(B) {
      M(B), m();
    },
    get connectionMode() {
      return O();
    },
    set connectionMode(B) {
      O(B), m();
    },
    get connectionLineStyle() {
      return A();
    },
    set connectionLineStyle(B) {
      A(B), m();
    },
    get connectionLineContainerStyle() {
      return Y();
    },
    set connectionLineContainerStyle(B) {
      Y(B), m();
    },
    get onMoveStart() {
      return W();
    },
    set onMoveStart(B) {
      W(B), m();
    },
    get onMove() {
      return U();
    },
    set onMove(B) {
      U(B), m();
    },
    get onMoveEnd() {
      return Q();
    },
    set onMoveEnd(B) {
      Q(B), m();
    },
    get isValidConnection() {
      return F();
    },
    set isValidConnection(B) {
      F(B), m();
    },
    get translateExtent() {
      return ge();
    },
    set translateExtent(B) {
      ge(B), m();
    },
    get nodeExtent() {
      return se();
    },
    set nodeExtent(B) {
      se(B), m();
    },
    get onlyRenderVisibleElements() {
      return ye();
    },
    set onlyRenderVisibleElements(B) {
      ye(B), m();
    },
    get panOnScrollMode() {
      return le();
    },
    set panOnScrollMode(B) {
      le(B), m();
    },
    get preventScrolling() {
      return ke();
    },
    set preventScrolling(B) {
      ke(B), m();
    },
    get zoomOnScroll() {
      return $e();
    },
    set zoomOnScroll(B) {
      $e(B), m();
    },
    get zoomOnDoubleClick() {
      return He();
    },
    set zoomOnDoubleClick(B) {
      He(B), m();
    },
    get zoomOnPinch() {
      return ce();
    },
    set zoomOnPinch(B) {
      ce(B), m();
    },
    get panOnScroll() {
      return J();
    },
    set panOnScroll(B) {
      J(B), m();
    },
    get panOnDrag() {
      return Pe();
    },
    set panOnDrag(B) {
      Pe(B), m();
    },
    get selectionOnDrag() {
      return K();
    },
    set selectionOnDrag(B) {
      K(B), m();
    },
    get autoPanOnConnect() {
      return Ne();
    },
    set autoPanOnConnect(B) {
      Ne(B), m();
    },
    get autoPanOnNodeDrag() {
      return qe();
    },
    set autoPanOnNodeDrag(B) {
      qe(B), m();
    },
    get onerror() {
      return De();
    },
    set onerror(B) {
      De(B), m();
    },
    get ondelete() {
      return de();
    },
    set ondelete(B) {
      de(B), m();
    },
    get onedgecreate() {
      return fe();
    },
    set onedgecreate(B) {
      fe(B), m();
    },
    get attributionPosition() {
      return ae();
    },
    set attributionPosition(B) {
      ae(B), m();
    },
    get proOptions() {
      return Ve();
    },
    set proOptions(B) {
      Ve(B), m();
    },
    get defaultEdgeOptions() {
      return it();
    },
    set defaultEdgeOptions(B) {
      it(B), m();
    },
    get width() {
      return rt();
    },
    set width(B) {
      rt(B), m();
    },
    get height() {
      return te();
    },
    set height(B) {
      te(B), m();
    },
    get colorMode() {
      return Fe();
    },
    set colorMode(B) {
      Fe(B), m();
    },
    get onconnect() {
      return ve();
    },
    set onconnect(B) {
      ve(B), m();
    },
    get onconnectstart() {
      return Xt();
    },
    set onconnectstart(B) {
      Xt(B), m();
    },
    get onconnectend() {
      return Yt();
    },
    set onconnectend(B) {
      Yt(B), m();
    },
    get onbeforedelete() {
      return un();
    },
    set onbeforedelete(B) {
      un(B), m();
    },
    get oninit() {
      return Ie();
    },
    set oninit(B) {
      Ie(B), m();
    },
    get nodeOrigin() {
      return ut();
    },
    set nodeOrigin(B) {
      ut(B), m();
    },
    get paneClickDistance() {
      return Xe();
    },
    set paneClickDistance(B) {
      Xe(B), m();
    },
    get nodeClickDistance() {
      return Be();
    },
    set nodeClickDistance(B) {
      Be(B), m();
    },
    get defaultMarkerColor() {
      return ct();
    },
    set defaultMarkerColor(B) {
      ct(B), m();
    },
    get style() {
      return en();
    },
    set style(B) {
      en(B), m();
    },
    get class() {
      return Ht();
    },
    set class(B) {
      Ht(B), m();
    }
  });
  return a(), Le;
}
pe(
  Sd,
  {
    id: {},
    nodes: {},
    edges: {},
    fitView: {},
    fitViewOptions: {},
    minZoom: {},
    maxZoom: {},
    initialViewport: {},
    viewport: {},
    nodeTypes: {},
    edgeTypes: {},
    selectionKey: {},
    selectionMode: {},
    panActivationKey: {},
    multiSelectionKey: {},
    zoomActivationKey: {},
    nodesDraggable: {},
    nodesConnectable: {},
    nodeDragThreshold: {},
    elementsSelectable: {},
    snapGrid: {},
    deleteKey: {},
    connectionRadius: {},
    connectionLineType: {},
    connectionMode: {},
    connectionLineStyle: {},
    connectionLineContainerStyle: {},
    onMoveStart: {},
    onMove: {},
    onMoveEnd: {},
    isValidConnection: {},
    translateExtent: {},
    nodeExtent: {},
    onlyRenderVisibleElements: {},
    panOnScrollMode: {},
    preventScrolling: {},
    zoomOnScroll: {},
    zoomOnDoubleClick: {},
    zoomOnPinch: {},
    panOnScroll: {},
    panOnDrag: {},
    selectionOnDrag: {},
    autoPanOnConnect: {},
    autoPanOnNodeDrag: {},
    onerror: {},
    ondelete: {},
    onedgecreate: {},
    attributionPosition: {},
    proOptions: {},
    defaultEdgeOptions: {},
    width: {},
    height: {},
    colorMode: {},
    onconnect: {},
    onconnectstart: {},
    onconnectend: {},
    onbeforedelete: {},
    oninit: {},
    nodeOrigin: {},
    paneClickDistance: {},
    nodeClickDistance: {},
    defaultMarkerColor: {},
    style: {},
    class: {}
  },
  ["connectionLine", "default"],
  [],
  !0
);
function Ed(e, t) {
  he(t, !1);
  let n = y(t, "initialNodes", 12, void 0), r = y(t, "initialEdges", 12, void 0), o = y(t, "initialWidth", 12, void 0), i = y(t, "initialHeight", 12, void 0), a = y(t, "fitView", 12, void 0), s = y(t, "nodeOrigin", 12, void 0);
  const l = cd({
    nodes: n(),
    edges: r(),
    width: o(),
    height: i(),
    nodeOrigin: s(),
    fitView: a()
  });
  Qr(xa, { getStore: () => l }), Ns(() => {
    l.reset();
  }), Ye();
  var u = lt(), c = Ce(u);
  return Dt(c, t, "default", {}), z(e, u), me({
    get initialNodes() {
      return n();
    },
    set initialNodes(d) {
      n(d), m();
    },
    get initialEdges() {
      return r();
    },
    set initialEdges(d) {
      r(d), m();
    },
    get initialWidth() {
      return o();
    },
    set initialWidth(d) {
      o(d), m();
    },
    get initialHeight() {
      return i();
    },
    set initialHeight(d) {
      i(d), m();
    },
    get fitView() {
      return a();
    },
    set fitView(d) {
      a(d), m();
    },
    get nodeOrigin() {
      return s();
    },
    set nodeOrigin(d) {
      s(d), m();
    }
  });
}
pe(
  Ed,
  {
    initialNodes: {},
    initialEdges: {},
    initialWidth: {},
    initialHeight: {},
    fitView: {},
    nodeOrigin: {}
  },
  ["default"],
  [],
  !0
);
var Nm = /* @__PURE__ */ ie("<button><!></button>");
function Mo(e, t) {
  const n = gt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = gt(n, [
    "class",
    "bgColor",
    "bgColorHover",
    "color",
    "colorHover",
    "borderColor"
  ]);
  he(t, !1);
  let o = y(t, "class", 12, void 0), i = y(t, "bgColor", 12, void 0), a = y(t, "bgColorHover", 12, void 0), s = y(t, "color", 12, void 0), l = y(t, "colorHover", 12, void 0), u = y(t, "borderColor", 12, void 0);
  Ye();
  var c = Nm();
  let d;
  var v = j(c);
  return Dt(v, t, "default", { class: "button-svg" }), X(c), Ee(
    (p) => d = sn(c, d, {
      type: "button",
      class: p,
      ...r,
      [$r]: {
        "--xy-controls-button-background-color-props": i(),
        "--xy-controls-button-background-color-hover-props": a(),
        "--xy-controls-button-color-props": s(),
        "--xy-controls-button-color-hover-props": l(),
        "--xy-controls-button-border-color-props": u()
      }
    }),
    [
      () => Bt([
        "svelte-flow__controls-button",
        o()
      ])
    ],
    _e
  ), ft("click", c, function(p) {
    Ue.call(this, t, p);
  }), z(e, c), me({
    get class() {
      return o();
    },
    set class(p) {
      o(p), m();
    },
    get bgColor() {
      return i();
    },
    set bgColor(p) {
      i(p), m();
    },
    get bgColorHover() {
      return a();
    },
    set bgColorHover(p) {
      a(p), m();
    },
    get color() {
      return s();
    },
    set color(p) {
      s(p), m();
    },
    get colorHover() {
      return l();
    },
    set colorHover(p) {
      l(p), m();
    },
    get borderColor() {
      return u();
    },
    set borderColor(p) {
      u(p), m();
    }
  });
}
pe(
  Mo,
  {
    class: {},
    bgColor: {},
    bgColorHover: {},
    color: {},
    colorHover: {},
    borderColor: {}
  },
  ["default"],
  [],
  !0
);
var Dm = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function Pd(e) {
  var t = Dm();
  z(e, t);
}
pe(Pd, {}, [], [], !0);
var Lm = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function Md(e) {
  var t = Lm();
  z(e, t);
}
pe(Md, {}, [], [], !0);
var zm = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function Vd(e) {
  var t = zm();
  z(e, t);
}
pe(Vd, {}, [], [], !0);
var Am = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function Od(e) {
  var t = Am();
  z(e, t);
}
pe(Od, {}, [], [], !0);
var Im = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function Hd(e) {
  var t = Im();
  z(e, t);
}
pe(Hd, {}, [], [], !0);
var Rm = /* @__PURE__ */ ie("<!> <!>", 1), qm = /* @__PURE__ */ ie("<!> <!> <!> <!> <!> <!>", 1);
function Td(e, t) {
  he(t, !1);
  const [n, r] = vt(), o = () => oe(M, "$nodesDraggable", n), i = () => oe(O, "$nodesConnectable", n), a = () => oe(A, "$elementsSelectable", n), s = () => oe(C, "$viewport", n), l = () => oe(P, "$minZoom", n), u = () => oe(H, "$maxZoom", n), c = /* @__PURE__ */ ue(), d = /* @__PURE__ */ ue(), v = /* @__PURE__ */ ue(), p = /* @__PURE__ */ ue();
  let h = y(t, "position", 12, "bottom-left"), x = y(t, "showZoom", 12, !0), b = y(t, "showFitView", 12, !0), $ = y(t, "showLock", 12, !0), g = y(t, "buttonBgColor", 12, void 0), _ = y(t, "buttonBgColorHover", 12, void 0), w = y(t, "buttonColor", 12, void 0), k = y(t, "buttonColorHover", 12, void 0), V = y(t, "buttonBorderColor", 12, void 0), S = y(t, "ariaLabel", 12, void 0), N = y(t, "style", 12, void 0), T = y(t, "orientation", 12, "vertical"), I = y(t, "fitViewOptions", 12, void 0), R = y(t, "class", 12, "");
  const {
    zoomIn: L,
    zoomOut: Z,
    fitView: E,
    viewport: C,
    minZoom: P,
    maxZoom: H,
    nodesDraggable: M,
    nodesConnectable: O,
    elementsSelectable: A
  } = tt(), Y = {
    bgColor: g(),
    bgColorHover: _(),
    color: w(),
    colorHover: k(),
    borderColor: V()
  }, W = () => {
    L();
  }, U = () => {
    Z();
  }, Q = () => {
    E(I());
  }, F = () => {
    ee(c, !f(c)), M.set(f(c)), O.set(f(c)), A.set(f(c));
  };
  be(
    () => (o(), i(), a()),
    () => {
      ee(c, o() || i() || a());
    }
  ), be(() => (s(), l()), () => {
    ee(d, s().zoom <= l());
  }), be(() => (s(), u()), () => {
    ee(v, s().zoom >= u());
  }), be(() => re(T()), () => {
    ee(p, T() === "horizontal" ? "horizontal" : "vertical");
  }), Vt(), Ye();
  const ge = /* @__PURE__ */ _e(() => Bt([
    "svelte-flow__controls",
    f(p),
    R()
  ])), se = /* @__PURE__ */ _e(() => S() ?? "Svelte Flow controls");
  ri(e, {
    get class() {
      return f(ge);
    },
    get position() {
      return h();
    },
    "data-testid": "svelte-flow__controls",
    get "aria-label"() {
      return f(se);
    },
    get style() {
      return N();
    },
    children: (le, ke) => {
      var $e = qm(), He = Ce($e);
      Dt(He, t, "before", {});
      var ce = q(He, 2);
      {
        var J = (fe) => {
          var ae = Rm(), Ve = Ce(ae);
          Mo(Ve, mt(
            {
              class: "svelte-flow__controls-zoomin",
              title: "zoom in",
              "aria-label": "zoom in",
              get disabled() {
                return f(v);
              }
            },
            Y,
            {
              $$events: { click: W },
              children: (rt, te) => {
                Pd(rt);
              },
              $$slots: { default: !0 }
            }
          ));
          var it = q(Ve, 2);
          Mo(it, mt(
            {
              class: "svelte-flow__controls-zoomout",
              title: "zoom out",
              "aria-label": "zoom out",
              get disabled() {
                return f(d);
              }
            },
            Y,
            {
              $$events: { click: U },
              children: (rt, te) => {
                Md(rt);
              },
              $$slots: { default: !0 }
            }
          )), z(fe, ae);
        };
        xe(ce, (fe) => {
          x() && fe(J);
        });
      }
      var Pe = q(ce, 2);
      {
        var K = (fe) => {
          Mo(fe, mt(
            {
              class: "svelte-flow__controls-fitview",
              title: "fit view",
              "aria-label": "fit view"
            },
            Y,
            {
              $$events: { click: Q },
              children: (ae, Ve) => {
                Vd(ae);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        xe(Pe, (fe) => {
          b() && fe(K);
        });
      }
      var Ne = q(Pe, 2);
      {
        var qe = (fe) => {
          Mo(fe, mt(
            {
              class: "svelte-flow__controls-interactive",
              title: "toggle interactivity",
              "aria-label": "toggle interactivity"
            },
            Y,
            {
              $$events: { click: F },
              children: (ae, Ve) => {
                var it = lt(), rt = Ce(it);
                {
                  var te = (ve) => {
                    Hd(ve);
                  }, Fe = (ve) => {
                    Od(ve);
                  };
                  xe(rt, (ve) => {
                    f(c) ? ve(te) : ve(Fe, !1);
                  });
                }
                z(ae, it);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        xe(Ne, (fe) => {
          $() && fe(qe);
        });
      }
      var De = q(Ne, 2);
      Dt(De, t, "default", {});
      var de = q(De, 2);
      Dt(de, t, "after", {}), z(le, $e);
    },
    $$slots: { default: !0 }
  });
  var ye = me({
    get position() {
      return h();
    },
    set position(le) {
      h(le), m();
    },
    get showZoom() {
      return x();
    },
    set showZoom(le) {
      x(le), m();
    },
    get showFitView() {
      return b();
    },
    set showFitView(le) {
      b(le), m();
    },
    get showLock() {
      return $();
    },
    set showLock(le) {
      $(le), m();
    },
    get buttonBgColor() {
      return g();
    },
    set buttonBgColor(le) {
      g(le), m();
    },
    get buttonBgColorHover() {
      return _();
    },
    set buttonBgColorHover(le) {
      _(le), m();
    },
    get buttonColor() {
      return w();
    },
    set buttonColor(le) {
      w(le), m();
    },
    get buttonColorHover() {
      return k();
    },
    set buttonColorHover(le) {
      k(le), m();
    },
    get buttonBorderColor() {
      return V();
    },
    set buttonBorderColor(le) {
      V(le), m();
    },
    get ariaLabel() {
      return S();
    },
    set ariaLabel(le) {
      S(le), m();
    },
    get style() {
      return N();
    },
    set style(le) {
      N(le), m();
    },
    get orientation() {
      return T();
    },
    set orientation(le) {
      T(le), m();
    },
    get fitViewOptions() {
      return I();
    },
    set fitViewOptions(le) {
      I(le), m();
    },
    get class() {
      return R();
    },
    set class(le) {
      R(le), m();
    }
  });
  return r(), ye;
}
pe(
  Td,
  {
    position: {},
    showZoom: {},
    showFitView: {},
    showLock: {},
    buttonBgColor: {},
    buttonBgColorHover: {},
    buttonColor: {},
    buttonColorHover: {},
    buttonBorderColor: {},
    ariaLabel: {},
    style: {},
    orientation: {},
    fitViewOptions: {},
    class: {}
  },
  ["before", "default", "after"],
  [],
  !0
);
var dr;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(dr || (dr = {}));
var Zm = /* @__PURE__ */ Oe("<circle></circle>");
function Nd(e, t) {
  he(t, !1);
  let n = y(t, "radius", 12, 5), r = y(t, "class", 12, "");
  Ye();
  var o = Zm();
  return Ee(
    (i) => {
      Se(o, "cx", n()), Se(o, "cy", n()), Se(o, "r", n()), Lt(o, 0, i);
    },
    [
      () => Sn(Bt([
        "svelte-flow__background-pattern",
        "dots",
        r()
      ]))
    ],
    _e
  ), z(e, o), me({
    get radius() {
      return n();
    },
    set radius(i) {
      n(i), m();
    },
    get class() {
      return r();
    },
    set class(i) {
      r(i), m();
    }
  });
}
pe(Nd, { radius: {}, class: {} }, [], [], !0);
var Bm = /* @__PURE__ */ Oe("<path></path>");
function Dd(e, t) {
  he(t, !1);
  let n = y(t, "lineWidth", 12, 1), r = y(t, "dimensions", 12), o = y(t, "variant", 12, void 0), i = y(t, "class", 12, "");
  Ye();
  var a = Bm();
  return Ee(
    (s) => {
      Se(a, "stroke-width", n()), Se(a, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), Lt(a, 0, s);
    },
    [
      () => Sn(Bt([
        "svelte-flow__background-pattern",
        o(),
        i()
      ]))
    ],
    _e
  ), z(e, a), me({
    get lineWidth() {
      return n();
    },
    set lineWidth(s) {
      n(s), m();
    },
    get dimensions() {
      return r();
    },
    set dimensions(s) {
      r(s), m();
    },
    get variant() {
      return o();
    },
    set variant(s) {
      o(s), m();
    },
    get class() {
      return i();
    },
    set class(s) {
      i(s), m();
    }
  });
}
pe(
  Dd,
  {
    lineWidth: {},
    dimensions: {},
    variant: {},
    class: {}
  },
  [],
  [],
  !0
);
const Xm = {
  [dr.Dots]: 1,
  [dr.Lines]: 1,
  [dr.Cross]: 6
};
var Ym = /* @__PURE__ */ Oe('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
const jm = {
  hash: "svelte-1r7pe8d",
  code: ".svelte-flow__background.svelte-1r7pe8d {position:absolute;width:100%;height:100%;top:0;left:0;}"
};
function Ld(e, t) {
  he(t, !1), ot(e, jm);
  const [n, r] = vt(), o = () => oe(k, "$flowId", n), i = () => oe(w, "$viewport", n), a = /* @__PURE__ */ ue(), s = /* @__PURE__ */ ue(), l = /* @__PURE__ */ ue(), u = /* @__PURE__ */ ue(), c = /* @__PURE__ */ ue();
  let d = y(t, "id", 12, void 0), v = y(t, "variant", 28, () => dr.Dots), p = y(t, "gap", 12, 20), h = y(t, "size", 12, 1), x = y(t, "lineWidth", 12, 1), b = y(t, "bgColor", 12, void 0), $ = y(t, "patternColor", 12, void 0), g = y(t, "patternClass", 12, void 0), _ = y(t, "class", 12, "");
  const { viewport: w, flowId: k } = tt(), V = h() || Xm[v()], S = v() === dr.Dots, N = v() === dr.Cross, T = Array.isArray(p()) ? p() : [p(), p()];
  be(
    () => (o(), re(d())),
    () => {
      ee(a, `background-pattern-${o()}-${d() ? d() : ""}`);
    }
  ), be(() => i(), () => {
    ee(s, [
      T[0] * i().zoom || 1,
      T[1] * i().zoom || 1
    ]);
  }), be(() => i(), () => {
    ee(l, V * i().zoom);
  }), be(() => (f(l), f(s)), () => {
    ee(u, N ? [f(l), f(l)] : f(s));
  }), be(
    () => (f(l), f(u)),
    () => {
      ee(c, S ? [
        f(l) / 2,
        f(l) / 2
      ] : [
        f(u)[0] / 2,
        f(u)[1] / 2
      ]);
    }
  ), Vt(), Ye();
  var I = Ym();
  let R;
  var L = j(I), Z = j(L);
  {
    var E = (M) => {
      const O = /* @__PURE__ */ _e(() => f(l) / 2);
      Nd(M, {
        get radius() {
          return f(O);
        },
        get class() {
          return g();
        }
      });
    }, C = (M) => {
      Dd(M, {
        get dimensions() {
          return f(u);
        },
        get variant() {
          return v();
        },
        get lineWidth() {
          return x();
        },
        get class() {
          return g();
        }
      });
    };
    xe(Z, (M) => {
      S ? M(E) : M(C, !1);
    });
  }
  X(L);
  var P = q(L);
  X(I), Ee(
    (M) => {
      Lt(I, 0, M, "svelte-1r7pe8d"), R = $t(I, "", R, {
        "--xy-background-color-props": b(),
        "--xy-background-pattern-color-props": $()
      }), Se(L, "id", f(a)), Se(L, "x", i().x % f(s)[0]), Se(L, "y", i().y % f(s)[1]), Se(L, "width", f(s)[0]), Se(L, "height", f(s)[1]), Se(L, "patternTransform", `translate(-${f(c)[0]},-${f(c)[1]})`), Se(P, "fill", `url(#${f(a)})`);
    },
    [
      () => Sn(Bt(["svelte-flow__background", _()]))
    ],
    _e
  ), z(e, I);
  var H = me({
    get id() {
      return d();
    },
    set id(M) {
      d(M), m();
    },
    get variant() {
      return v();
    },
    set variant(M) {
      v(M), m();
    },
    get gap() {
      return p();
    },
    set gap(M) {
      p(M), m();
    },
    get size() {
      return h();
    },
    set size(M) {
      h(M), m();
    },
    get lineWidth() {
      return x();
    },
    set lineWidth(M) {
      x(M), m();
    },
    get bgColor() {
      return b();
    },
    set bgColor(M) {
      b(M), m();
    },
    get patternColor() {
      return $();
    },
    set patternColor(M) {
      $(M), m();
    },
    get patternClass() {
      return g();
    },
    set patternClass(M) {
      g(M), m();
    },
    get class() {
      return _();
    },
    set class(M) {
      _(M), m();
    }
  });
  return r(), H;
}
pe(
  Ld,
  {
    id: {},
    variant: {},
    gap: {},
    size: {},
    lineWidth: {},
    bgColor: {},
    patternColor: {},
    patternClass: {},
    class: {}
  },
  [],
  [],
  !0
);
var Wm = /* @__PURE__ */ Oe("<rect></rect>");
function zd(e, t) {
  he(t, !1);
  let n = y(t, "x", 12), r = y(t, "y", 12), o = y(t, "width", 12, 0), i = y(t, "height", 12, 0), a = y(t, "borderRadius", 12, 5), s = y(t, "color", 12, void 0), l = y(t, "shapeRendering", 12), u = y(t, "strokeColor", 12, void 0), c = y(t, "strokeWidth", 12, 2), d = y(t, "selected", 12, !1), v = y(t, "class", 12, "");
  Ye();
  var p = Wm();
  let h;
  return Ee(
    (x, b) => {
      h = Lt(p, 0, x, null, h, b), Se(p, "x", n()), Se(p, "y", r()), Se(p, "rx", a()), Se(p, "ry", a()), Se(p, "width", o()), Se(p, "height", i()), $t(p, `${s() ? `fill: ${s()};` : ""}${u() ? `stroke: ${u()};` : ""}${c() ? `stroke-width: ${c()};` : ""}`), Se(p, "shape-rendering", l());
    },
    [
      () => Sn(Bt(["svelte-flow__minimap-node", v()])),
      () => ({ selected: d() })
    ],
    _e
  ), z(e, p), me({
    get x() {
      return n();
    },
    set x(x) {
      n(x), m();
    },
    get y() {
      return r();
    },
    set y(x) {
      r(x), m();
    },
    get width() {
      return o();
    },
    set width(x) {
      o(x), m();
    },
    get height() {
      return i();
    },
    set height(x) {
      i(x), m();
    },
    get borderRadius() {
      return a();
    },
    set borderRadius(x) {
      a(x), m();
    },
    get color() {
      return s();
    },
    set color(x) {
      s(x), m();
    },
    get shapeRendering() {
      return l();
    },
    set shapeRendering(x) {
      l(x), m();
    },
    get strokeColor() {
      return u();
    },
    set strokeColor(x) {
      u(x), m();
    },
    get strokeWidth() {
      return c();
    },
    set strokeWidth(x) {
      c(x), m();
    },
    get selected() {
      return d();
    },
    set selected(x) {
      d(x), m();
    },
    get class() {
      return v();
    },
    set class(x) {
      v(x), m();
    }
  });
}
pe(
  zd,
  {
    x: {},
    y: {},
    width: {},
    height: {},
    borderRadius: {},
    color: {},
    shapeRendering: {},
    strokeColor: {},
    strokeWidth: {},
    selected: {},
    class: {}
  },
  [],
  [],
  !0
);
function iu(e, t) {
  const n = O0({
    domNode: e,
    panZoom: t.panZoom,
    getTransform: () => {
      const o = G(t.viewport);
      return [o.x, o.y, o.zoom];
    },
    getViewScale: t.getViewScale
  });
  function r(o) {
    n.update({
      translateExtent: o.translateExtent,
      width: o.width,
      height: o.height,
      inversePan: o.inversePan,
      zoomStep: o.zoomStep,
      pannable: o.pannable,
      zoomable: o.zoomable
    });
  }
  return {
    update: r,
    destroy() {
      n.destroy();
    }
  };
}
const qa = (e) => e instanceof Function ? e : () => e;
var Km = /* @__PURE__ */ Oe("<title> </title>"), Fm = /* @__PURE__ */ Oe('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>');
function Ad(e, t) {
  he(t, !1);
  const [n, r] = vt(), o = () => oe(Pe, "$flowId", n), i = () => oe(He, "$viewport", n), a = () => oe(ce, "$containerWidth", n), s = () => oe(J, "$containerHeight", n), l = () => oe($e, "$nodeLookup", n), u = () => oe(ke, "$nodes", n), c = () => oe(K, "$panZoom", n), d = () => oe(Ne, "$translateExtent", n), v = /* @__PURE__ */ ue(), p = /* @__PURE__ */ ue(), h = /* @__PURE__ */ ue(), x = /* @__PURE__ */ ue(), b = /* @__PURE__ */ ue(), $ = /* @__PURE__ */ ue(), g = /* @__PURE__ */ ue(), _ = /* @__PURE__ */ ue(), w = /* @__PURE__ */ ue(), k = /* @__PURE__ */ ue(), V = /* @__PURE__ */ ue(), S = /* @__PURE__ */ ue(), N = /* @__PURE__ */ ue();
  let T = y(t, "position", 12, "bottom-right"), I = y(t, "ariaLabel", 12, "Mini map"), R = y(t, "nodeStrokeColor", 12, "transparent"), L = y(t, "nodeColor", 12, void 0), Z = y(t, "nodeClass", 12, ""), E = y(t, "nodeBorderRadius", 12, 5), C = y(t, "nodeStrokeWidth", 12, 2), P = y(t, "bgColor", 12, void 0), H = y(t, "maskColor", 12, void 0), M = y(t, "maskStrokeColor", 12, void 0), O = y(t, "maskStrokeWidth", 12, void 0), A = y(t, "width", 12, void 0), Y = y(t, "height", 12, void 0), W = y(t, "pannable", 12, !0), U = y(t, "zoomable", 12, !0), Q = y(t, "inversePan", 12, void 0), F = y(t, "zoomStep", 12, void 0), ge = y(t, "style", 12, ""), se = y(t, "class", 12, "");
  const ye = 200, le = 150, {
    nodes: ke,
    nodeLookup: $e,
    viewport: He,
    width: ce,
    height: J,
    flowId: Pe,
    panZoom: K,
    translateExtent: Ne
  } = tt(), qe = L() === void 0 ? void 0 : qa(L()), De = qa(R()), de = qa(Z()), fe = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  ), ae = `svelte-flow__minimap-desc-${o()}`;
  let Ve = /* @__PURE__ */ ue(f(v));
  const it = () => f($);
  be(
    () => (i(), a(), s()),
    () => {
      ee(v, {
        x: -i().x / i().zoom,
        y: -i().y / i().zoom,
        width: a() / i().zoom,
        height: s() / i().zoom
      });
    }
  ), be(
    () => (l(), f(v), u()),
    () => {
      ee(Ve, l().size > 0 ? zc(ei(l(), { filter: (ve) => !ve.hidden }), f(v)) : f(v)), u();
    }
  ), be(() => re(A()), () => {
    ee(p, A() ?? ye);
  }), be(() => re(Y()), () => {
    ee(h, Y() ?? le);
  }), be(
    () => (f(Ve), f(p)),
    () => {
      ee(x, f(Ve).width / f(p));
    }
  ), be(
    () => (f(Ve), f(h)),
    () => {
      ee(b, f(Ve).height / f(h));
    }
  ), be(
    () => (f(x), f(b)),
    () => {
      ee($, Math.max(f(x), f(b)));
    }
  ), be(() => (f($), f(p)), () => {
    ee(g, f($) * f(p));
  }), be(
    () => (f($), f(h)),
    () => {
      ee(_, f($) * f(h));
    }
  ), be(() => f($), () => {
    ee(w, 5 * f($));
  }), be(
    () => (f(Ve), f(g), f(w)),
    () => {
      ee(k, f(Ve).x - (f(g) - f(Ve).width) / 2 - f(w));
    }
  ), be(
    () => (f(Ve), f(_), f(w)),
    () => {
      ee(V, f(Ve).y - (f(_) - f(Ve).height) / 2 - f(w));
    }
  ), be(() => (f(g), f(w)), () => {
    ee(S, f(g) + f(w) * 2);
  }), be(() => (f(_), f(w)), () => {
    ee(N, f(_) + f(w) * 2);
  }), Vt(), Ye();
  const rt = /* @__PURE__ */ _e(() => ge() + (P() ? `;--xy-minimap-background-color-props:${P()}` : "")), te = /* @__PURE__ */ _e(() => Bt(["svelte-flow__minimap", se()]));
  ri(e, {
    get position() {
      return T();
    },
    get style() {
      return f(rt);
    },
    get class() {
      return f(te);
    },
    "data-testid": "svelte-flow__minimap",
    children: (ve, Xt) => {
      var Yt = lt(), un = Ce(Yt);
      {
        var Ie = (ut) => {
          var Xe = Fm();
          Se(Xe, "aria-labelledby", ae);
          let Be;
          var ct = j(Xe);
          {
            var en = (yt) => {
              var Ct = Km();
              Se(Ct, "id", ae);
              var Mn = j(Ct, !0);
              X(Ct), Ee(() => bt(Mn, I())), z(yt, Ct);
            };
            xe(ct, (yt) => {
              I() && yt(en);
            });
          }
          var Ht = q(ct);
          Zt(Ht, 1, u, (yt) => yt.id, (yt, Ct) => {
            var Mn = lt();
            const at = /* @__PURE__ */ _e(() => l().get(f(Ct).id));
            var yo = Ce(Mn);
            {
              var Qn = (zt) => {
                const br = /* @__PURE__ */ _e(() => yr(f(at))), xr = /* @__PURE__ */ _e(() => qe == null ? void 0 : qe(f(at))), zr = /* @__PURE__ */ _e(() => De(f(at))), wo = /* @__PURE__ */ _e(() => de(f(at)));
                zd(zt, mt(
                  {
                    get x() {
                      return f(at).internals.positionAbsolute.x;
                    },
                    get y() {
                      return f(at).internals.positionAbsolute.y;
                    }
                  },
                  () => f(br),
                  {
                    get selected() {
                      return f(at).selected;
                    },
                    get color() {
                      return f(xr);
                    },
                    get borderRadius() {
                      return E();
                    },
                    get strokeColor() {
                      return f(zr);
                    },
                    get strokeWidth() {
                      return C();
                    },
                    shapeRendering: fe,
                    get class() {
                      return f(wo);
                    }
                  }
                ));
              };
              xe(yo, (zt) => {
                f(at) && Ac(f(at)) && zt(Qn);
              });
            }
            z(yt, Mn);
          });
          var Jn = q(Ht);
          X(Xe), Nt(Xe, (yt, Ct) => iu == null ? void 0 : iu(yt, Ct), () => ({
            panZoom: c(),
            viewport: He,
            getViewScale: it,
            translateExtent: d(),
            width: a(),
            height: s(),
            inversePan: Q(),
            zoomStep: F(),
            pannable: W(),
            zoomable: U()
          })), Ee(() => {
            Se(Xe, "width", f(p)), Se(Xe, "height", f(h)), Se(Xe, "viewBox", `${f(k) ?? ""} ${f(V) ?? ""} ${f(S) ?? ""} ${f(N) ?? ""}`), Be = $t(Xe, "", Be, {
              "--xy-minimap-mask-background-color-props": H(),
              "--xy-minimap-mask-stroke-color-props": M(),
              "--xy-minimap-mask-stroke-width-props": O() ? O() * f($) : void 0
            }), Se(Jn, "d", `M${f(k) - f(w)},${f(V) - f(w)}h${f(S) + f(w) * 2}v${f(N) + f(w) * 2}h${-f(S) - f(w) * 2}z
      M${f(v).x ?? ""},${f(v).y ?? ""}h${f(v).width ?? ""}v${f(v).height ?? ""}h${-f(v).width}z`);
          }), z(ut, Xe);
        };
        xe(un, (ut) => {
          c() && ut(Ie);
        });
      }
      z(ve, Yt);
    },
    $$slots: { default: !0 }
  });
  var Fe = me({
    get position() {
      return T();
    },
    set position(ve) {
      T(ve), m();
    },
    get ariaLabel() {
      return I();
    },
    set ariaLabel(ve) {
      I(ve), m();
    },
    get nodeStrokeColor() {
      return R();
    },
    set nodeStrokeColor(ve) {
      R(ve), m();
    },
    get nodeColor() {
      return L();
    },
    set nodeColor(ve) {
      L(ve), m();
    },
    get nodeClass() {
      return Z();
    },
    set nodeClass(ve) {
      Z(ve), m();
    },
    get nodeBorderRadius() {
      return E();
    },
    set nodeBorderRadius(ve) {
      E(ve), m();
    },
    get nodeStrokeWidth() {
      return C();
    },
    set nodeStrokeWidth(ve) {
      C(ve), m();
    },
    get bgColor() {
      return P();
    },
    set bgColor(ve) {
      P(ve), m();
    },
    get maskColor() {
      return H();
    },
    set maskColor(ve) {
      H(ve), m();
    },
    get maskStrokeColor() {
      return M();
    },
    set maskStrokeColor(ve) {
      M(ve), m();
    },
    get maskStrokeWidth() {
      return O();
    },
    set maskStrokeWidth(ve) {
      O(ve), m();
    },
    get width() {
      return A();
    },
    set width(ve) {
      A(ve), m();
    },
    get height() {
      return Y();
    },
    set height(ve) {
      Y(ve), m();
    },
    get pannable() {
      return W();
    },
    set pannable(ve) {
      W(ve), m();
    },
    get zoomable() {
      return U();
    },
    set zoomable(ve) {
      U(ve), m();
    },
    get inversePan() {
      return Q();
    },
    set inversePan(ve) {
      Q(ve), m();
    },
    get zoomStep() {
      return F();
    },
    set zoomStep(ve) {
      F(ve), m();
    },
    get style() {
      return ge();
    },
    set style(ve) {
      ge(ve), m();
    },
    get class() {
      return se();
    },
    set class(ve) {
      se(ve), m();
    }
  });
  return r(), Fe;
}
pe(
  Ad,
  {
    position: {},
    ariaLabel: {},
    nodeStrokeColor: {},
    nodeColor: {},
    nodeClass: {},
    nodeBorderRadius: {},
    nodeStrokeWidth: {},
    bgColor: {},
    maskColor: {},
    maskStrokeColor: {},
    maskStrokeWidth: {},
    width: {},
    height: {},
    pannable: {},
    zoomable: {},
    inversePan: {},
    zoomStep: {},
    style: {},
    class: {}
  },
  [],
  [],
  !0
);
const au = (e) => Xh(e);
function Qt() {
  const { zoomIn: e, zoomOut: t, fitView: n, onbeforedelete: r, snapGrid: o, viewport: i, width: a, height: s, minZoom: l, maxZoom: u, panZoom: c, nodes: d, edges: v, domNode: p, nodeLookup: h, nodeOrigin: x, edgeLookup: b, connectionLookup: $ } = tt(), g = (k) => {
    var V, S;
    const N = G(h), T = au(k) ? k : N.get(k.id), I = T.parentId ? Jh(T.position, T.measured, T.parentId, N, G(x)) : T.position, R = {
      ...T,
      position: I,
      width: ((V = T.measured) == null ? void 0 : V.width) ?? T.width,
      height: ((S = T.measured) == null ? void 0 : S.height) ?? T.height
    };
    return io(R);
  }, _ = (k, V, S = { replace: !1 }) => {
    var N;
    const T = (N = G(h).get(k)) == null ? void 0 : N.internals.userNode;
    if (!T)
      return;
    const I = typeof V == "function" ? V(T) : V;
    S.replace ? d.update((R) => R.map((L) => L.id === k ? au(I) ? I : { ...L, ...I } : L)) : (Object.assign(T, I), d.update((R) => R));
  }, w = (k) => G(h).get(k);
  return {
    zoomIn: e,
    zoomOut: t,
    getInternalNode: w,
    getNode: (k) => {
      var V;
      return (V = w(k)) == null ? void 0 : V.internals.userNode;
    },
    getNodes: (k) => k === void 0 ? G(d) : su(G(h), k),
    getEdge: (k) => G(b).get(k),
    getEdges: (k) => k === void 0 ? G(v) : su(G(b), k),
    setZoom: (k, V) => {
      const S = G(c);
      return S ? S.scaleTo(k, { duration: V == null ? void 0 : V.duration }) : Promise.resolve(!1);
    },
    getZoom: () => G(i).zoom,
    setViewport: async (k, V) => {
      const S = G(i), N = G(c);
      return N ? (await N.setViewport({
        x: k.x ?? S.x,
        y: k.y ?? S.y,
        zoom: k.zoom ?? S.zoom
      }, { duration: V == null ? void 0 : V.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => G(i),
    setCenter: async (k, V, S) => {
      const N = typeof (S == null ? void 0 : S.zoom) < "u" ? S.zoom : G(u), T = G(c);
      return T ? (await T.setViewport({
        x: G(a) / 2 - k * N,
        y: G(s) / 2 - V * N,
        zoom: N
      }, { duration: S == null ? void 0 : S.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    fitView: n,
    fitBounds: async (k, V) => {
      const S = G(c);
      if (!S)
        return Promise.resolve(!1);
      const N = Xs(k, G(a), G(s), G(l), G(u), (V == null ? void 0 : V.padding) ?? 0.1);
      return await S.setViewport(N, { duration: V == null ? void 0 : V.duration }), Promise.resolve(!0);
    },
    getIntersectingNodes: (k, V = !0, S) => {
      const N = Zl(k), T = N ? k : g(k);
      return T ? (S || G(d)).filter((I) => {
        const R = G(h).get(I.id);
        if (!R || !N && I.id === k.id)
          return !1;
        const L = io(R), Z = Xo(L, T);
        return V && Z > 0 || Z >= T.width * T.height;
      }) : [];
    },
    isNodeIntersecting: (k, V, S = !0) => {
      const N = Zl(k) ? k : g(k);
      if (!N)
        return !1;
      const T = Xo(N, V);
      return S && T > 0 || T >= N.width * N.height;
    },
    deleteElements: async ({ nodes: k = [], edges: V = [] }) => {
      const { nodes: S, edges: N } = await Nc({
        nodesToRemove: k,
        edgesToRemove: V,
        nodes: G(d),
        edges: G(v),
        onBeforeDelete: G(r)
      });
      return S && d.update((T) => T.filter((I) => !S.some(({ id: R }) => R === I.id))), N && v.update((T) => T.filter((I) => !N.some(({ id: R }) => R === I.id))), {
        deletedNodes: S,
        deletedEdges: N
      };
    },
    screenToFlowPosition: (k, V = { snapToGrid: !0 }) => {
      const S = G(p);
      if (!S)
        return k;
      const N = V.snapToGrid ? G(o) : !1, { x: T, y: I, zoom: R } = G(i), { x: L, y: Z } = S.getBoundingClientRect(), E = {
        x: k.x - L,
        y: k.y - Z
      };
      return ti(E, [T, I, R], N !== null, N || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (k) => {
      const V = G(p);
      if (!V)
        return k;
      const { x: S, y: N, zoom: T } = G(i), { x: I, y: R } = V.getBoundingClientRect(), L = ji(k, [S, N, T]);
      return {
        x: L.x + I,
        y: L.y + R
      };
    },
    toObject: () => ({
      nodes: G(d).map((k) => ({
        ...k,
        // we want to make sure that changes to the nodes object that gets returned by toObject
        // do not affect the nodes object
        position: { ...k.position },
        data: { ...k.data }
      })),
      edges: G(v).map((k) => ({ ...k })),
      viewport: { ...G(i) }
    }),
    updateNode: _,
    updateNodeData: (k, V, S) => {
      var N;
      const T = (N = G(h).get(k)) == null ? void 0 : N.internals.userNode;
      if (!T)
        return;
      const I = typeof V == "function" ? V(T) : V;
      T.data = S != null && S.replace ? I : { ...T.data, ...I }, d.update((R) => R);
    },
    getNodesBounds: (k) => {
      const V = G(h), S = G(x);
      return Yh(k, { nodeLookup: V, nodeOrigin: S });
    },
    getHandleConnections: ({ type: k, id: V, nodeId: S }) => {
      var N;
      return Array.from(((N = G($).get(`${S}-${k}-${V ?? null}`)) == null ? void 0 : N.values()) ?? []);
    },
    viewport: i
  };
}
function su(e, t) {
  var n;
  const r = [];
  for (const o of t) {
    const i = e.get(o);
    if (i) {
      const a = "internals" in i ? (n = i.internals) == null ? void 0 : n.userNode : i;
      r.push(a);
    }
  }
  return r;
}
var Gm = /* @__PURE__ */ ie('<div class="svelte-flow__node-toolbar"><!></div>');
function Id(e, t) {
  he(t, !1);
  const [n, r] = vt(), o = () => oe(_, "$nodes", n), i = () => oe(g, "$nodeLookup", n), a = () => oe($, "$viewport", n), s = () => oe(b, "$domNode", n), l = /* @__PURE__ */ ue(), u = /* @__PURE__ */ ue(), c = /* @__PURE__ */ ue();
  let d = y(t, "nodeId", 12, void 0), v = y(t, "position", 12, void 0), p = y(t, "align", 12, void 0), h = y(t, "offset", 12, void 0), x = y(t, "isVisible", 12, void 0);
  const { domNode: b, viewport: $, nodeLookup: g, nodes: _ } = tt(), { getNodesBounds: w } = Qt(), k = Pr("svelteflow__node_id");
  let V = /* @__PURE__ */ ue(), S = /* @__PURE__ */ ue([]), N = h() !== void 0 ? h() : 10, T = v() !== void 0 ? v() : ze.Top, I = p() !== void 0 ? p() : "center";
  be(
    () => (o(), re(d()), i()),
    () => {
      o();
      const C = Array.isArray(d()) ? d() : [d() || k];
      ee(S, C.reduce(
        (P, H) => {
          const M = i().get(H);
          return M && P.push(M), P;
        },
        []
      ));
    }
  ), be(
    () => (f(S), a()),
    () => {
      const C = w(f(S));
      C && ee(V, p0(C, a(), T, N, I));
    }
  ), be(() => f(S), () => {
    ee(l, f(S).length === 0 ? 1 : Math.max(...f(S).map((C) => (C.internals.z || 5) + 1)));
  }), be(() => o(), () => {
    ee(u, o().filter((C) => C.selected).length);
  }), be(
    () => (re(x()), f(S), f(u)),
    () => {
      ee(c, typeof x() == "boolean" ? x() : f(S).length === 1 && f(S)[0].selected && f(u) === 1);
    }
  ), Vt(), Ye();
  var R = lt(), L = Ce(R);
  {
    var Z = (C) => {
      var P = Gm();
      let H;
      var M = j(P);
      Dt(M, t, "default", {}), X(P), Nt(P, (O, A) => Gi == null ? void 0 : Gi(O, A), () => ({ domNode: s() })), Ee(
        (O) => {
          Se(P, "data-id", O), H = $t(P, "", H, {
            position: "absolute",
            transform: f(V),
            "z-index": f(l)
          });
        },
        [
          () => f(S).reduce((O, A) => `${O}${A.id} `, "").trim()
        ],
        _e
      ), z(C, P);
    };
    xe(L, (C) => {
      s() && f(c) && f(S) && C(Z);
    });
  }
  z(e, R);
  var E = me({
    get nodeId() {
      return d();
    },
    set nodeId(C) {
      d(C), m();
    },
    get position() {
      return v();
    },
    set position(C) {
      v(C), m();
    },
    get align() {
      return p();
    },
    set align(C) {
      p(C), m();
    },
    get offset() {
      return h();
    },
    set offset(C) {
      h(C), m();
    },
    get isVisible() {
      return x();
    },
    set isVisible(C) {
      x(C), m();
    }
  });
  return r(), E;
}
pe(
  Id,
  {
    nodeId: {},
    position: {},
    align: {},
    offset: {},
    isVisible: {}
  },
  ["default"],
  [],
  !0
);
function Lr(e) {
  const { nodes: t, nodeLookup: n } = tt();
  let r = [], o = !0;
  return ur([t, n], ([, i], a) => {
    var s;
    const l = [], u = Array.isArray(e), c = u ? e : [e];
    for (const d of c) {
      const v = (s = i.get(d)) == null ? void 0 : s.internals.userNode;
      v && l.push({
        id: v.id,
        type: v.type,
        data: v.data
      });
    }
    (!$0(l, r) || o) && (r = l, a(u ? l : l[0] ?? null), o = !1);
  });
}
const lu = "tinyflow-component";
class Um {
  constructor(t) {
    if (Ft(this, "options"), Ft(this, "rootEl"), Ft(this, "svelteFlowInstance"), typeof t.element != "string" && !(t.element instanceof Element))
      throw new Error("element must be a string or Element");
    this._setOptions(t), this._init();
  }
  _init() {
    if (typeof this.options.element == "string") {
      if (this.rootEl = document.querySelector(this.options.element), !this.rootEl)
        throw new Error(
          `element not found by document.querySelector('${this.options.element}')`
        );
    } else if (this.options.element instanceof Element)
      this.rootEl = this.options.element;
    else
      throw new Error("element must be a string or Element");
    const t = document.createElement(lu);
    t.style.display = "block", t.style.width = "100%", t.style.height = "100%", t.classList.add("tf-theme-light"), t.options = this.options, t.onInit = (n) => {
      this.svelteFlowInstance = n;
    }, this.rootEl.appendChild(t);
  }
  _setOptions(t) {
    this.options = {
      ...t
    };
  }
  getOptions() {
    return this.options;
  }
  getData() {
    return this.svelteFlowInstance.toObject();
  }
  setData(t) {
    this.options.data = t;
    const n = document.createElement(lu);
    n.style.display = "block", n.style.width = "100%", n.style.height = "100%", n.classList.add("tf-theme-light"), n.options = this.options, n.onInit = (r) => {
      this.svelteFlowInstance = r;
    }, this.destroy(), this.rootEl.appendChild(n);
  }
  destroy() {
    for (; this.rootEl.firstChild; )
      this.rootEl.removeChild(this.rootEl.firstChild);
  }
}
const Jm = () => {
  const e = Me([]), t = Me([]), n = Me({ x: 250, y: 100, zoom: 1 });
  return {
    nodes: e,
    edges: t,
    viewport: n,
    init: (r, o) => {
      e.set(r), t.set(o);
    },
    addNode: (r) => {
      e.update((o) => [...o, r]);
    },
    removeNode: (r) => {
      e.update((o) => o.filter((i) => i.id !== r));
    },
    updateNode: (r, o) => {
      e.update((i) => i.map((a) => a.id === r ? o : a));
    },
    updateNodeData: (r, o) => {
      e.update(
        (i) => i.map((a) => a.id === r ? { ...a, data: { ...a.data, ...o } } : a)
      );
    },
    selectNodeOnly: (r) => {
      e.update(
        (o) => o.map(
          (i) => i.id === r ? { ...i, selected: !0 } : { ...i, selected: !1 }
        )
      );
    },
    addEdge: (r) => {
      t.update((o) => [...o, r]);
    },
    removeEdge: (r) => {
      t.update((o) => o.filter((i) => i.id !== r));
    },
    updateEdge: (r, o) => {
      t.update((i) => i.map((a) => a.id === r ? o : a));
    },
    updateEdgeData: (r, o) => {
      t.update((i) => i.map((a) => a.id === r ? { ...a, data: o } : a));
    }
  };
}, Ei = Jm();
var Qm = /* @__PURE__ */ ie("<button><!></button>");
function Je(e, t) {
  he(t, !0);
  const n = y(t, "children", 7), r = /* @__PURE__ */ Ot(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children"
  ]);
  var o = Qm();
  let i;
  var a = j(o);
  return Mr(a, () => n() ?? St), X(o), Ee(() => i = sn(o, i, {
    type: "button",
    ...r,
    class: `tf-btn nopan nodrag ${t.class ?? ""}`
  })), z(e, o), me({
    get children() {
      return n();
    },
    set children(s) {
      n(s), m();
    }
  });
}
pe(Je, { children: {} }, [], [], !0);
var e2 = /* @__PURE__ */ ie("<input>");
function Rd(e, t) {
  he(t, !0);
  const n = /* @__PURE__ */ Ot(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = e2();
  lr(r);
  let o;
  Ee(() => o = sn(r, o, {
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), z(e, r), me();
}
pe(Rd, {}, [], [], !0);
var t2 = /* @__PURE__ */ ie('<div><input type="hidden"> <!> <!></div>');
const n2 = {
  hash: "svelte-1swt2gg",
  code: ".tf-chosen.svelte-1swt2gg {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function qd(e, t) {
  he(t, !0), ot(e, n2);
  const n = y(t, "placeholder", 7), r = y(t, "label", 7), o = y(t, "value", 7), i = y(t, "buttonText", 7, "选择..."), a = y(t, "onChosen", 7), s = /* @__PURE__ */ Ot(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "placeholder",
    "label",
    "value",
    "buttonText",
    "onChosen"
  ]);
  var l = t2();
  let u;
  var c = j(l);
  lr(c);
  var d = q(c, 2);
  _t(d, {
    get value() {
      return r();
    },
    get placeholder() {
      return n();
    },
    style: "flex-grow: 1;",
    disabled: !0
  });
  var v = q(d, 2);
  return Je(v, {
    onclick: (p) => {
      var h;
      (h = a()) == null || h(o(), r(), p);
    },
    style: "padding: 3px",
    children: (p, h) => {
      Re();
      var x = je();
      Ee(() => bt(x, i())), z(p, x);
    },
    $$slots: { default: !0 }
  }), X(l), Ee(() => {
    u = sn(
      l,
      u,
      {
        ...s,
        class: `tf-chosen nopan nodrag ${t.class ?? ""}`
      },
      "svelte-1swt2gg"
    ), bi(c, o());
  }), z(e, l), me({
    get placeholder() {
      return n();
    },
    set placeholder(p) {
      n(p), m();
    },
    get label() {
      return r();
    },
    set label(p) {
      r(p), m();
    },
    get value() {
      return o();
    },
    set value(p) {
      o(p), m();
    },
    get buttonText() {
      return i();
    },
    set buttonText(p = "选择...") {
      i(p), m();
    },
    get onChosen() {
      return a();
    },
    set onChosen(p) {
      a(p), m();
    }
  });
}
pe(
  qd,
  {
    placeholder: {},
    label: {},
    value: {},
    buttonText: {},
    onChosen: {}
  },
  [],
  [],
  !0
);
var r2 = /* @__PURE__ */ ie("<input>");
function _t(e, t) {
  he(t, !0);
  const n = /* @__PURE__ */ Ot(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = r2();
  lr(r);
  let o;
  Ee(() => o = sn(r, o, {
    type: "text",
    spellcheck: "false",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), z(e, r), me();
}
pe(_t, {}, [], [], !0);
var o2 = /* @__PURE__ */ ie("<textarea></textarea>");
function Mt(e, t) {
  he(t, !0);
  const n = y(t, "value", 7), r = /* @__PURE__ */ Ot(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "value"
  ]);
  var o = o2();
  z1(o);
  let i;
  return Ee(() => i = sn(o, i, {
    spellcheck: "false",
    ...r,
    class: `tf-textarea nodrag nowheel ${t.class ?? ""}`,
    value: n() || ""
  })), z(e, o), me({
    get value() {
      return n();
    },
    set value(a) {
      n(a), m();
    }
  });
}
pe(Mt, { value: {} }, [], [], !0);
var i2 = /* @__PURE__ */ ie('<div role="button"><!></div>'), a2 = /* @__PURE__ */ ie("<div></div>");
function Zd(e, t) {
  const n = gt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = gt(n, ["items", "onChange", "activeIndex"]);
  he(t, !1);
  let o = y(t, "items", 28, () => []), i = y(t, "onChange", 12, () => {
  }), a = y(t, "activeIndex", 12, 0);
  function s(c, d) {
    var v;
    a(d), (v = i()) == null || v(c, d);
  }
  Ye();
  var l = a2();
  let u;
  return Zt(l, 5, o, eo, (c, d, v) => {
    var p = i2();
    Se(p, "tabindex", v), p.__click = () => s(f(d), v), p.__keydown = ($) => {
      ($.key === "Enter" || $.key === " ") && ($.preventDefault(), s(f(d), v));
    };
    var h = j(p);
    {
      var x = ($) => {
        var g = je();
        Ee(() => bt(g, f(d).label)), z($, g);
      }, b = ($) => {
        var g = lt(), _ = Ce(g);
        Mr(_, () => f(d).label ?? St), z($, g);
      };
      xe(h, ($) => {
        typeof f(d).label == "string" ? $(x) : $(b, !1);
      });
    }
    X(p), Ee(() => Lt(p, 1, `tf-tabs-item ${v === a() ? "active" : ""}`)), z(c, p);
  }), X(l), Ee(() => u = sn(l, u, {
    ...r,
    class: `tf-tabs ${r.class ?? ""}`
  })), z(e, l), me({
    get items() {
      return o();
    },
    set items(c) {
      o(c), m();
    },
    get onChange() {
      return i();
    },
    set onChange(c) {
      i(c), m();
    },
    get activeIndex() {
      return a();
    },
    set activeIndex(c) {
      a(c), m();
    }
  });
}
go(["click", "keydown"]);
pe(Zd, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var s2 = (e, t, n) => t(f(n)), l2 = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(f(n)));
}, u2 = /* @__PURE__ */ ie('<span class="tf-collapse-item-title-icon"><!></span>'), c2 = /* @__PURE__ */ ie('<div class="tf-collapse-item-description"><!></div>'), d2 = /* @__PURE__ */ ie('<div class="tf-collapse-item-content"><!></div>'), f2 = /* @__PURE__ */ ie('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), v2 = /* @__PURE__ */ ie("<div></div>");
const p2 = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function Bd(e, t) {
  he(t, !0), ot(e, p2);
  let n = y(t, "items", 7), r = y(t, "onChange", 7), o = y(t, "activeKeys", 31, () => bn([]));
  function i(s) {
    var l;
    o().includes(s.key) ? o(o().filter((u) => u !== s.key)) : (o().push(s.key), o(o())), (l = r()) == null || l(s, o());
  }
  var a = v2();
  return Zt(a, 21, n, eo, (s, l, u) => {
    var c = f2(), d = j(c);
    Se(d, "tabindex", u), d.__click = [s2, i, l], d.__keydown = [l2, i, l];
    var v = j(d);
    {
      var p = (w) => {
        var k = u2(), V = j(k);
        ar(V, {
          get target() {
            return f(l).icon;
          }
        }), X(k), z(w, k);
      };
      xe(v, (w) => {
        f(l).icon && w(p);
      });
    }
    var h = q(v, 2);
    ar(h, {
      get target() {
        return f(l).title;
      }
    });
    var x = q(h, 2);
    X(d);
    var b = q(d, 2);
    {
      var $ = (w) => {
        var k = c2(), V = j(k);
        ar(V, {
          get target() {
            return f(l).description;
          }
        }), X(k), z(w, k);
      };
      xe(b, (w) => {
        f(l).description && w($);
      });
    }
    var g = q(b, 2);
    {
      var _ = (w) => {
        var k = d2(), V = j(k);
        ar(V, {
          get target() {
            return f(l).content;
          }
        }), X(k), z(w, k);
      };
      xe(g, (w) => {
        o().includes(f(l).key) && w(_);
      });
    }
    X(c), Ee((w) => Lt(x, 1, `tf-collapse-item-title-arrow ${w ?? ""}`, "svelte-1jfktzw"), [
      () => o().includes(f(l).key) ? "rotate-90" : ""
    ]), z(s, c);
  }), X(a), Ee(() => {
    $t(a, t.style), Lt(a, 1, `tf-collapse ${t.class ?? ""}`, "svelte-1jfktzw");
  }), z(e, a), me({
    get items() {
      return n();
    },
    set items(s) {
      n(s), m();
    },
    get onChange() {
      return r();
    },
    set onChange(s) {
      r(s), m();
    },
    get activeKeys() {
      return o();
    },
    set activeKeys(s = []) {
      o(s), m();
    }
  });
}
go(["click", "keydown"]);
pe(Bd, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function ar(e, t) {
  he(t, !0);
  let n = y(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = lt(), o = Ce(r);
  {
    var i = (s) => {
      var l = lt(), u = Ce(l);
      Mr(u, () => n() ?? St), z(s, l);
    }, a = (s) => {
      var l = lt(), u = Ce(l);
      Ts(u, n), z(s, l);
    };
    xe(o, (s) => {
      typeof n() == "function" ? s(i) : s(a, !1);
    });
  }
  return z(e, r), me({
    get target() {
      return n();
    },
    set target(s) {
      n(s), m();
    }
  });
}
pe(ar, { target: {} }, [], [], !0);
var g2 = (e, t, n) => t(f(n)), h2 = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), m2 = /* @__PURE__ */ ie('<div class="tf-select-content-children"><!></div>'), y2 = /* @__PURE__ */ ie('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), w2 = /* @__PURE__ */ ie('<div class="tf-select-content nopan nodrag"><!></div>'), b2 = /* @__PURE__ */ ie("<!> <!>", 1), x2 = /* @__PURE__ */ ie('<div class="tf-select-input-placeholder"> </div>'), $2 = /* @__PURE__ */ ie('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), C2 = /* @__PURE__ */ ie("<div><!></div>");
function hn(e, t) {
  he(t, !0);
  const n = (g, _ = St) => {
    var w = lt(), k = Ce(w);
    Zt(k, 19, _, (V, S) => `${S}_${V.value}`, (V, S) => {
      var N = y2(), T = Ce(N);
      T.__click = [g2, h, S];
      var I = j(T), R = j(I);
      {
        var L = (P) => {
          var H = h2();
          z(P, H);
        };
        xe(R, (P) => {
          f(S).children && f(S).children.length > 0 && P(L);
        });
      }
      X(I);
      var Z = q(I, 2);
      ar(Z, {
        get target() {
          return f(S).label;
        }
      }), X(T);
      var E = q(T, 2);
      {
        var C = (P) => {
          var H = m2(), M = j(H);
          n(M, () => f(S).children), X(H), z(P, H);
        };
        xe(E, (P) => {
          f(S).children && f(S).children.length > 0 && (s() || u().includes(f(S).value)) && P(C);
        });
      }
      z(V, N);
    }), z(g, w);
  };
  let r = y(t, "items", 7), o = y(t, "onSelect", 7), i = y(t, "value", 23, () => []), a = y(t, "defaultValue", 23, () => []), s = y(t, "expandAll", 7, !0), l = y(t, "multiple", 7, !1), u = y(t, "expandValue", 23, () => []), c = y(t, "placeholder", 7), d = /* @__PURE__ */ Ot(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "items",
    "onSelect",
    "value",
    "defaultValue",
    "expandAll",
    "multiple",
    "expandValue",
    "placeholder"
  ]), v = /* @__PURE__ */ Te(() => {
    const g = [], _ = (w) => {
      for (let k of w)
        i().length > 0 ? i().includes(k.value) && g.push(k) : a().includes(k.value) && g.push(k), k.children && k.children.length > 0 && _(k.children);
    };
    return _(r()), g;
  }), p;
  function h(g) {
    var _;
    p == null || p.hide(), (_ = o()) == null || _(g);
  }
  var x = C2();
  let b;
  var $ = j(x);
  return zn(
    mo($, {
      floating: (g) => {
        var _ = w2(), w = j(_);
        n(w, r), X(_), z(g, _);
      },
      children: (g, _) => {
        var w = $2();
        let k;
        var V = j(w);
        Zt(
          V,
          23,
          () => f(v),
          (S, N) => `${N}_${S.value}`,
          (S, N, T) => {
            var I = lt(), R = Ce(I);
            {
              var L = (E) => {
                var C = lt(), P = Ce(C);
                {
                  var H = (M) => {
                    ar(M, {
                      get target() {
                        return f(N).label;
                      }
                    });
                  };
                  xe(P, (M) => {
                    f(T) === 0 && M(H);
                  });
                }
                z(E, C);
              }, Z = (E) => {
                var C = b2(), P = Ce(C);
                ar(P, {
                  get target() {
                    return f(N).label;
                  }
                });
                var H = q(P, 2);
                {
                  var M = (O) => {
                    var A = je(",");
                    z(O, A);
                  };
                  xe(H, (O) => {
                    f(T) < f(v).length - 1 && O(M);
                  });
                }
                z(E, C);
              };
              xe(R, (E) => {
                l() ? E(Z, !1) : E(L);
              });
            }
            z(S, I);
          },
          (S) => {
            var N = x2(), T = j(N, !0);
            X(N), Ee(() => bt(T, c())), z(S, N);
          }
        ), X(V), Re(2), X(w), Ee(() => k = sn(w, k, {
          class: "tf-select-input nopan nodrag",
          ...d
        })), z(g, w);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (g) => p = g,
    () => p
  ), X(x), Ee(() => b = sn(x, b, {
    ...d,
    class: `tf-select ${d.class ?? ""}`
  })), z(e, x), me({
    get items() {
      return r();
    },
    set items(g) {
      r(g), m();
    },
    get onSelect() {
      return o();
    },
    set onSelect(g) {
      o(g), m();
    },
    get value() {
      return i();
    },
    set value(g = []) {
      i(g), m();
    },
    get defaultValue() {
      return a();
    },
    set defaultValue(g = []) {
      a(g), m();
    },
    get expandAll() {
      return s();
    },
    set expandAll(g = !0) {
      s(g), m();
    },
    get multiple() {
      return l();
    },
    set multiple(g = !1) {
      l(g), m();
    },
    get expandValue() {
      return u();
    },
    set expandValue(g = []) {
      u(g), m();
    },
    get placeholder() {
      return c();
    },
    set placeholder(g) {
      c(g), m();
    }
  });
}
go(["click"]);
pe(
  hn,
  {
    items: {},
    onSelect: {},
    value: {},
    defaultValue: {},
    expandAll: {},
    multiple: {},
    expandValue: {},
    placeholder: {}
  },
  [],
  [],
  !0
);
const jo = Math.min, Kr = Math.max, Qi = Math.round, Hn = (e) => ({
  x: e,
  y: e
}), _2 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, k2 = {
  start: "end",
  end: "start"
};
function fs(e, t, n) {
  return Kr(e, jo(t, n));
}
function oi(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Tr(e) {
  return e.split("-")[0];
}
function ii(e) {
  return e.split("-")[1];
}
function Xd(e) {
  return e === "x" ? "y" : "x";
}
function Fs(e) {
  return e === "y" ? "height" : "width";
}
function Er(e) {
  return ["top", "bottom"].includes(Tr(e)) ? "y" : "x";
}
function Gs(e) {
  return Xd(Er(e));
}
function S2(e, t, n) {
  n === void 0 && (n = !1);
  const r = ii(e), o = Gs(e), i = Fs(o);
  let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (a = ea(a)), [a, ea(a)];
}
function E2(e) {
  const t = ea(e);
  return [vs(e), t, vs(t)];
}
function vs(e) {
  return e.replace(/start|end/g, (t) => k2[t]);
}
function P2(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], i = ["top", "bottom"], a = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? i : a;
    default:
      return [];
  }
}
function M2(e, t, n, r) {
  const o = ii(e);
  let i = P2(Tr(e), n === "start", r);
  return o && (i = i.map((a) => a + "-" + o), t && (i = i.concat(i.map(vs)))), i;
}
function ea(e) {
  return e.replace(/left|right|bottom|top/g, (t) => _2[t]);
}
function V2(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Yd(e) {
  return typeof e != "number" ? V2(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function ta(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function uu(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = Er(t), a = Gs(t), s = Fs(a), l = Tr(t), u = i === "y", c = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, v = r[s] / 2 - o[s] / 2;
  let p;
  switch (l) {
    case "top":
      p = {
        x: c,
        y: r.y - o.height
      };
      break;
    case "bottom":
      p = {
        x: c,
        y: r.y + r.height
      };
      break;
    case "right":
      p = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      p = {
        x: r.x - o.width,
        y: d
      };
      break;
    default:
      p = {
        x: r.x,
        y: r.y
      };
  }
  switch (ii(t)) {
    case "start":
      p[a] -= v * (n && u ? -1 : 1);
      break;
    case "end":
      p[a] += v * (n && u ? -1 : 1);
      break;
  }
  return p;
}
const O2 = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: a
  } = n, s = i.filter(Boolean), l = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let u = await a.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: c,
    y: d
  } = uu(u, r, l), v = r, p = {}, h = 0;
  for (let x = 0; x < s.length; x++) {
    const {
      name: b,
      fn: $
    } = s[x], {
      x: g,
      y: _,
      data: w,
      reset: k
    } = await $({
      x: c,
      y: d,
      initialPlacement: r,
      placement: v,
      strategy: o,
      middlewareData: p,
      rects: u,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = g ?? c, d = _ ?? d, p = {
      ...p,
      [b]: {
        ...p[b],
        ...w
      }
    }, k && h <= 50 && (h++, typeof k == "object" && (k.placement && (v = k.placement), k.rects && (u = k.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : k.rects), {
      x: c,
      y: d
    } = uu(u, v, l)), x = -1);
  }
  return {
    x: c,
    y: d,
    placement: v,
    strategy: o,
    middlewareData: p
  };
};
async function jd(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: a,
    elements: s,
    strategy: l
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: d = "floating",
    altBoundary: v = !1,
    padding: p = 0
  } = oi(t, e), h = Yd(p), x = s[v ? d === "floating" ? "reference" : "floating" : d], b = ta(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(x))) == null || n ? x : x.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: l
  })), $ = d === "floating" ? {
    x: r,
    y: o,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, g = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating)), _ = await (i.isElement == null ? void 0 : i.isElement(g)) ? await (i.getScale == null ? void 0 : i.getScale(g)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, w = ta(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: $,
    offsetParent: g,
    strategy: l
  }) : $);
  return {
    top: (b.top - w.top + h.top) / _.y,
    bottom: (w.bottom - b.bottom + h.bottom) / _.y,
    left: (b.left - w.left + h.left) / _.x,
    right: (w.right - b.right + h.right) / _.x
  };
}
const H2 = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: i,
      platform: a,
      elements: s,
      middlewareData: l
    } = t, {
      element: u,
      padding: c = 0
    } = oi(e, t) || {};
    if (u == null)
      return {};
    const d = Yd(c), v = {
      x: n,
      y: r
    }, p = Gs(o), h = Fs(p), x = await a.getDimensions(u), b = p === "y", $ = b ? "top" : "left", g = b ? "bottom" : "right", _ = b ? "clientHeight" : "clientWidth", w = i.reference[h] + i.reference[p] - v[p] - i.floating[h], k = v[p] - i.reference[p], V = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
    let S = V ? V[_] : 0;
    (!S || !await (a.isElement == null ? void 0 : a.isElement(V))) && (S = s.floating[_] || i.floating[h]);
    const N = w / 2 - k / 2, T = S / 2 - x[h] / 2 - 1, I = jo(d[$], T), R = jo(d[g], T), L = I, Z = S - x[h] - R, E = S / 2 - x[h] / 2 + N, C = fs(L, E, Z), P = !l.arrow && ii(o) != null && E !== C && i.reference[h] / 2 - (E < L ? I : R) - x[h] / 2 < 0, H = P ? E < L ? E - L : E - Z : 0;
    return {
      [p]: v[p] + H,
      data: {
        [p]: C,
        centerOffset: E - C - H,
        ...P && {
          alignmentOffset: H
        }
      },
      reset: P
    };
  }
}), T2 = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: i,
        rects: a,
        initialPlacement: s,
        platform: l,
        elements: u
      } = t, {
        mainAxis: c = !0,
        crossAxis: d = !0,
        fallbackPlacements: v,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: x = !0,
        ...b
      } = oi(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const $ = Tr(o), g = Er(s), _ = Tr(s) === s, w = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), k = v || (_ || !x ? [ea(s)] : E2(s)), V = h !== "none";
      !v && V && k.push(...M2(s, x, h, w));
      const S = [s, ...k], N = await jd(t, b), T = [];
      let I = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && T.push(N[$]), d) {
        const C = S2(o, a, w);
        T.push(N[C[0]], N[C[1]]);
      }
      if (I = [...I, {
        placement: o,
        overflows: T
      }], !T.every((C) => C <= 0)) {
        var R, L;
        const C = (((R = i.flip) == null ? void 0 : R.index) || 0) + 1, P = S[C];
        if (P) {
          var Z;
          const M = d === "alignment" ? g !== Er(P) : !1, O = ((Z = I[0]) == null ? void 0 : Z.overflows[0]) > 0;
          if (!M || O)
            return {
              data: {
                index: C,
                overflows: I
              },
              reset: {
                placement: P
              }
            };
        }
        let H = (L = I.filter((M) => M.overflows[0] <= 0).sort((M, O) => M.overflows[1] - O.overflows[1])[0]) == null ? void 0 : L.placement;
        if (!H)
          switch (p) {
            case "bestFit": {
              var E;
              const M = (E = I.filter((O) => {
                if (V) {
                  const A = Er(O.placement);
                  return A === g || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  A === "y";
                }
                return !0;
              }).map((O) => [O.placement, O.overflows.filter((A) => A > 0).reduce((A, Y) => A + Y, 0)]).sort((O, A) => O[1] - A[1])[0]) == null ? void 0 : E[0];
              M && (H = M);
              break;
            }
            case "initialPlacement":
              H = s;
              break;
          }
        if (o !== H)
          return {
            reset: {
              placement: H
            }
          };
      }
      return {};
    }
  };
};
async function N2(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = Tr(n), s = ii(n), l = Er(n) === "y", u = ["left", "top"].includes(a) ? -1 : 1, c = i && l ? -1 : 1, d = oi(t, e);
  let {
    mainAxis: v,
    crossAxis: p,
    alignmentAxis: h
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return s && typeof h == "number" && (p = s === "end" ? h * -1 : h), l ? {
    x: p * c,
    y: v * u
  } : {
    x: v * u,
    y: p * c
  };
}
const D2 = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: i,
        placement: a,
        middlewareData: s
      } = t, l = await N2(t, e);
      return a === ((n = s.offset) == null ? void 0 : n.placement) && (r = s.arrow) != null && r.alignmentOffset ? {} : {
        x: o + l.x,
        y: i + l.y,
        data: {
          ...l,
          placement: a
        }
      };
    }
  };
}, L2 = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: i = !0,
        crossAxis: a = !1,
        limiter: s = {
          fn: (b) => {
            let {
              x: $,
              y: g
            } = b;
            return {
              x: $,
              y: g
            };
          }
        },
        ...l
      } = oi(e, t), u = {
        x: n,
        y: r
      }, c = await jd(t, l), d = Er(Tr(o)), v = Xd(d);
      let p = u[v], h = u[d];
      if (i) {
        const b = v === "y" ? "top" : "left", $ = v === "y" ? "bottom" : "right", g = p + c[b], _ = p - c[$];
        p = fs(g, p, _);
      }
      if (a) {
        const b = d === "y" ? "top" : "left", $ = d === "y" ? "bottom" : "right", g = h + c[b], _ = h - c[$];
        h = fs(g, h, _);
      }
      const x = s.fn({
        ...t,
        [v]: p,
        [d]: h
      });
      return {
        ...x,
        data: {
          x: x.x - n,
          y: x.y - r,
          enabled: {
            [v]: i,
            [d]: a
          }
        }
      };
    }
  };
};
function $a() {
  return typeof window < "u";
}
function ho(e) {
  return Wd(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function an(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Un(e) {
  var t;
  return (t = (Wd(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Wd(e) {
  return $a() ? e instanceof Node || e instanceof an(e).Node : !1;
}
function _n(e) {
  return $a() ? e instanceof Element || e instanceof an(e).Element : !1;
}
function An(e) {
  return $a() ? e instanceof HTMLElement || e instanceof an(e).HTMLElement : !1;
}
function cu(e) {
  return !$a() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof an(e).ShadowRoot;
}
function ai(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = kn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function z2(e) {
  return ["table", "td", "th"].includes(ho(e));
}
function Ca(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Us(e) {
  const t = Js(), n = _n(e) ? kn(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function A2(e) {
  let t = gr(e);
  for (; An(t) && !so(t); ) {
    if (Us(t))
      return t;
    if (Ca(t))
      return null;
    t = gr(t);
  }
  return null;
}
function Js() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function so(e) {
  return ["html", "body", "#document"].includes(ho(e));
}
function kn(e) {
  return an(e).getComputedStyle(e);
}
function _a(e) {
  return _n(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function gr(e) {
  if (ho(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    cu(e) && e.host || // Fallback.
    Un(e)
  );
  return cu(t) ? t.host : t;
}
function Kd(e) {
  const t = gr(e);
  return so(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : An(t) && ai(t) ? t : Kd(t);
}
function Fd(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = Kd(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = an(o);
  return i ? (ps(a), t.concat(a, a.visualViewport || [], ai(o) ? o : [], [])) : t.concat(o, Fd(o, []));
}
function ps(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Gd(e) {
  const t = kn(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = An(e), i = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, s = Qi(n) !== i || Qi(r) !== a;
  return s && (n = i, r = a), {
    width: n,
    height: r,
    $: s
  };
}
function Ud(e) {
  return _n(e) ? e : e.contextElement;
}
function Fr(e) {
  const t = Ud(e);
  if (!An(t))
    return Hn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Gd(t);
  let a = (i ? Qi(n.width) : n.width) / r, s = (i ? Qi(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const I2 = /* @__PURE__ */ Hn(0);
function Jd(e) {
  const t = an(e);
  return !Js() || !t.visualViewport ? I2 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function R2(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== an(e) ? !1 : t;
}
function Wo(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Ud(e);
  let a = Hn(1);
  t && (r ? _n(r) && (a = Fr(r)) : a = Fr(e));
  const s = R2(i, n, r) ? Jd(i) : Hn(0);
  let l = (o.left + s.x) / a.x, u = (o.top + s.y) / a.y, c = o.width / a.x, d = o.height / a.y;
  if (i) {
    const v = an(i), p = r && _n(r) ? an(r) : r;
    let h = v, x = ps(h);
    for (; x && r && p !== h; ) {
      const b = Fr(x), $ = x.getBoundingClientRect(), g = kn(x), _ = $.left + (x.clientLeft + parseFloat(g.paddingLeft)) * b.x, w = $.top + (x.clientTop + parseFloat(g.paddingTop)) * b.y;
      l *= b.x, u *= b.y, c *= b.x, d *= b.y, l += _, u += w, h = an(x), x = ps(h);
    }
  }
  return ta({
    width: c,
    height: d,
    x: l,
    y: u
  });
}
function Qs(e, t) {
  const n = _a(e).scrollLeft;
  return t ? t.left + n : Wo(Un(e)).left + n;
}
function Qd(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Qs(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function q2(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", a = Un(r), s = t ? Ca(t.floating) : !1;
  if (r === a || s && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Hn(1);
  const c = Hn(0), d = An(r);
  if ((d || !d && !i) && ((ho(r) !== "body" || ai(a)) && (l = _a(r)), An(r))) {
    const p = Wo(r);
    u = Fr(r), c.x = p.x + r.clientLeft, c.y = p.y + r.clientTop;
  }
  const v = a && !d && !i ? Qd(a, l, !0) : Hn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + v.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + v.y
  };
}
function Z2(e) {
  return Array.from(e.getClientRects());
}
function B2(e) {
  const t = Un(e), n = _a(e), r = e.ownerDocument.body, o = Kr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Kr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + Qs(e);
  const s = -n.scrollTop;
  return kn(r).direction === "rtl" && (a += Kr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: a,
    y: s
  };
}
function X2(e, t) {
  const n = an(e), r = Un(e), o = n.visualViewport;
  let i = r.clientWidth, a = r.clientHeight, s = 0, l = 0;
  if (o) {
    i = o.width, a = o.height;
    const u = Js();
    (!u || u && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: s,
    y: l
  };
}
function Y2(e, t) {
  const n = Wo(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = An(e) ? Fr(e) : Hn(1), a = e.clientWidth * i.x, s = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
  return {
    width: a,
    height: s,
    x: l,
    y: u
  };
}
function du(e, t, n) {
  let r;
  if (t === "viewport")
    r = X2(e, n);
  else if (t === "document")
    r = B2(Un(e));
  else if (_n(t))
    r = Y2(t, n);
  else {
    const o = Jd(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return ta(r);
}
function ef(e, t) {
  const n = gr(e);
  return n === t || !_n(n) || so(n) ? !1 : kn(n).position === "fixed" || ef(n, t);
}
function j2(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Fd(e, []).filter((s) => _n(s) && ho(s) !== "body"), o = null;
  const i = kn(e).position === "fixed";
  let a = i ? gr(e) : e;
  for (; _n(a) && !so(a); ) {
    const s = kn(a), l = Us(a);
    !l && s.position === "fixed" && (o = null), (i ? !l && !o : !l && s.position === "static" && o && ["absolute", "fixed"].includes(o.position) || ai(a) && !l && ef(e, a)) ? r = r.filter((u) => u !== a) : o = s, a = gr(a);
  }
  return t.set(e, r), r;
}
function W2(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? Ca(t) ? [] : j2(t, this._c) : [].concat(n), r], a = i[0], s = i.reduce((l, u) => {
    const c = du(t, u, o);
    return l.top = Kr(c.top, l.top), l.right = jo(c.right, l.right), l.bottom = jo(c.bottom, l.bottom), l.left = Kr(c.left, l.left), l;
  }, du(t, a, o));
  return {
    width: s.right - s.left,
    height: s.bottom - s.top,
    x: s.left,
    y: s.top
  };
}
function K2(e) {
  const {
    width: t,
    height: n
  } = Gd(e);
  return {
    width: t,
    height: n
  };
}
function F2(e, t, n) {
  const r = An(t), o = Un(t), i = n === "fixed", a = Wo(e, !0, i, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Hn(0);
  function u() {
    l.x = Qs(o);
  }
  if (r || !r && !i)
    if ((ho(t) !== "body" || ai(o)) && (s = _a(t)), r) {
      const p = Wo(t, !0, i, t);
      l.x = p.x + t.clientLeft, l.y = p.y + t.clientTop;
    } else o && u();
  i && !r && o && u();
  const c = o && !r && !i ? Qd(o, s) : Hn(0), d = a.left + s.scrollLeft - l.x - c.x, v = a.top + s.scrollTop - l.y - c.y;
  return {
    x: d,
    y: v,
    width: a.width,
    height: a.height
  };
}
function Za(e) {
  return kn(e).position === "static";
}
function fu(e, t) {
  if (!An(e) || kn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Un(e) === n && (n = n.ownerDocument.body), n;
}
function tf(e, t) {
  const n = an(e);
  if (Ca(e))
    return n;
  if (!An(e)) {
    let o = gr(e);
    for (; o && !so(o); ) {
      if (_n(o) && !Za(o))
        return o;
      o = gr(o);
    }
    return n;
  }
  let r = fu(e, t);
  for (; r && z2(r) && Za(r); )
    r = fu(r, t);
  return r && so(r) && Za(r) && !Us(r) ? n : r || A2(e) || n;
}
const G2 = async function(e) {
  const t = this.getOffsetParent || tf, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: F2(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function U2(e) {
  return kn(e).direction === "rtl";
}
const J2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: q2,
  getDocumentElement: Un,
  getClippingRect: W2,
  getOffsetParent: tf,
  getElementRects: G2,
  getClientRects: Z2,
  getDimensions: K2,
  getScale: Fr,
  isElement: _n,
  isRTL: U2
}, Q2 = D2, ey = L2, ty = T2, ny = H2, ry = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: J2,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return O2(e, t, {
    ...o,
    platform: i
  });
}, oy = ({
  trigger: e,
  triggerEvent: t,
  floatContent: n,
  placement: r = "bottom",
  offsetOptions: o,
  flipOptions: i,
  shiftOptions: a,
  interactive: s,
  showArrow: l
}) => {
  if (typeof e == "string") {
    const $ = document.querySelector(e);
    if ($)
      e = $;
    else
      throw new Error("element not found by document.querySelector('" + e + "')");
  }
  let u;
  if (typeof n == "string") {
    const $ = document.querySelector(n);
    if ($)
      u = $;
    else
      throw new Error("element not found by document.querySelector('" + n + "')");
  } else
    u = n;
  let c;
  l && (c = document.createElement("div"), c.style.position = "absolute", c.style.backgroundColor = "#222", c.style.width = "8px", c.style.height = "8px", c.style.transform = "rotate(45deg)", c.style.display = "none", u.firstElementChild.before(c));
  function d() {
    ry(e, u, {
      placement: r,
      middleware: [
        Q2(o),
        // 手动偏移配置
        ty(i),
        //自动翻转
        ey(a),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [ny({ element: c })] : []
      ]
    }).then(({ x: $, y: g, placement: _, middlewareData: w }) => {
      if (Object.assign(u.style, {
        left: `${$}px`,
        top: `${g}px`
      }), l) {
        const { x: k, y: V } = w.arrow, S = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[_.split("-")[0]];
        Object.assign(c.style, {
          zIndex: -1,
          left: k != null ? `${k}px` : "",
          top: V != null ? `${V}px` : "",
          right: "",
          bottom: "",
          [S]: "2px"
        });
      }
    });
  }
  let v = !1;
  function p() {
    u.style.display = "block", u.style.visibility = "block", u.style.position = "absolute", l && (c.style.display = "block"), v = !0, d();
  }
  function h() {
    u.style.display = "none", l && (c.style.display = "none"), v = !1;
  }
  function x($) {
    $.stopPropagation(), v ? h() : p();
  }
  function b($) {
    u.contains($.target) || h();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach(($) => {
    e.addEventListener($, x);
  }), document.addEventListener("click", b), {
    destroy() {
      t.forEach(($) => {
        e.removeEventListener($, x);
      }), document.removeEventListener("click", b);
    },
    hide() {
      h();
    },
    isVisible() {
      return v;
    }
  };
};
var iy = /* @__PURE__ */ ie('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function mo(e, t) {
  he(t, !0);
  const n = y(t, "children", 7), r = y(t, "floating", 7), o = y(t, "placement", 7, "bottom");
  let i, a, s;
  mn(() => (s = oy({
    trigger: i,
    floatContent: a,
    interactive: !0,
    placement: o()
  }), () => {
    s.destroy();
  }));
  function l() {
    s.hide();
  }
  var u = iy(), c = j(u), d = j(c);
  Mr(d, n), X(c), zn(c, (h) => i = h, () => i);
  var v = q(c, 2), p = j(v);
  return Mr(p, r), X(v), zn(v, (h) => a = h, () => a), X(u), z(e, u), me({
    hide: l,
    get children() {
      return n();
    },
    set children(h) {
      n(h), m();
    },
    get floating() {
      return r();
    },
    set floating(h) {
      r(h), m();
    },
    get placement() {
      return o();
    },
    set placement(h = "bottom") {
      o(h), m();
    }
  });
}
pe(mo, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function nt(e, t) {
  he(t, !0);
  const n = y(t, "children", 7), r = y(t, "level", 7, 1), o = y(t, "mt", 7), i = y(t, "mb", 7);
  var a = lt(), s = Ce(a);
  return j1(s, () => `h${r()}`, !1, (l, u) => {
    let c;
    Ee(() => c = sn(l, c, {
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var d = lt(), v = Ce(d);
    Mr(v, () => n() ?? St), z(u, d);
  }), z(e, a), me({
    get children() {
      return n();
    },
    set children(l) {
      n(l), m();
    },
    get level() {
      return r();
    },
    set level(l = 1) {
      r(l), m();
    },
    get mt() {
      return o();
    },
    set mt(l) {
      o(l), m();
    },
    get mb() {
      return i();
    },
    set mb(l) {
      i(l), m();
    }
  });
}
pe(nt, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var ay = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const sy = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function ka(e, t) {
  he(t, !0), ot(e, sy);
  const n = /* @__PURE__ */ Ot(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  Je(e, mt(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = ay();
      z(r, i);
    },
    $$slots: { default: !0 }
  })), me();
}
pe(ka, {}, [], [], !0);
const ly = () => {
  const e = tt();
  return {
    deleteNode: (t) => {
      e.nodes.update((n) => n.filter((r) => r.id !== t)), e.edges.update(
        (n) => n.filter((r) => r.source !== t && r.target !== t)
      );
    }
  };
}, lo = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, uy = () => {
  const { nodes: e, nodeLookup: t } = tt();
  return {
    copyNode: (n) => {
      var r;
      const o = (r = G(t).get(n)) == null ? void 0 : r.internals.userNode;
      if (o) {
        const i = lo(), a = {
          ...o,
          id: i,
          position: {
            x: o.position.x + 50,
            y: o.position.y + 50
          }
        };
        e.update((s) => [...s, a]), e.update(
          (s) => s.map(
            (l) => l.id === i ? { ...l, selected: !0 } : { ...l, selected: !1 }
          )
        );
      }
    }
  };
}, hr = () => Pr("tinyflow_options");
function Et() {
  return Pr("svelteflow__node_id");
}
var cy = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), dy = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), fy = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), vy = /* @__PURE__ */ ie('<div class="input-item svelte-1jesvb7">执行条件： <!></div>'), py = (e, t, n) => {
  const r = e.target.checked;
  t(n, { async: r });
}, gy = /* @__PURE__ */ ie('<div class="settings svelte-1jesvb7"><div class="input-item svelte-1jesvb7">节点名称： <!></div> <div class="input-item svelte-1jesvb7">参数描述： <!></div> <!> <label class="input-item-inline svelte-1jesvb7"><span>异步执行：</span> <input type="checkbox"></label></div>'), hy = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), my = /* @__PURE__ */ ie('<div class="tf-node-toolbar svelte-1jesvb7"><!> <!> <!> <!></div>'), yy = /* @__PURE__ */ ie('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const wy = {
  hash: "svelte-1jesvb7",
  code: ".tf-node-toolbar.svelte-1jesvb7 {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-1jesvb7 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-1jesvb7 .input-item:where(.svelte-1jesvb7) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}.settings.svelte-1jesvb7 .input-item-inline:where(.svelte-1jesvb7) {display:flex;align-items:center;font-size:12px;color:#666;}"
};
function Pn(e, t) {
  he(t, !0), ot(e, wy);
  const n = y(t, "data", 7), r = y(t, "id", 7, ""), o = y(t, "icon", 7), i = y(t, "handle", 7), a = y(t, "children", 7), s = y(t, "allowExecute", 7, !0), l = y(t, "allowCopy", 7, !0), u = y(t, "allowDelete", 7, !0), c = y(t, "allowSetting", 7, !0), d = y(t, "allowSettingOfCondition", 7, !0), v = y(t, "showSourceHandle", 7, !0), p = y(t, "showTargetHandle", 7, !0), h = y(t, "onCollapse", 7);
  let x = n().expand ? ["key"] : [];
  const { updateNodeData: b, getNode: $ } = Qt(), g = /* @__PURE__ */ Te(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: a()
    }
  ]), { deleteNode: _ } = ly(), { copyNode: w } = uy(), k = hr(), V = () => {
    var O;
    (O = k.onNodeExecute) == null || O.call(k, $(r()));
  };
  let S = Et();
  var N = yy(), T = Ce(N);
  {
    var I = (O) => {
      Id(O, {
        get position() {
          return ze.Top;
        },
        align: "end",
        children: (A, Y) => {
          var W = my(), U = j(W);
          {
            var Q = ($e) => {
              Je($e, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  _(r());
                },
                children: (He, ce) => {
                  var J = cy();
                  z(He, J);
                },
                $$slots: { default: !0 }
              });
            };
            xe(U, ($e) => {
              u() && $e(Q);
            });
          }
          var F = q(U, 2);
          {
            var ge = ($e) => {
              Je($e, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  w(r());
                },
                children: (He, ce) => {
                  var J = dy();
                  z(He, J);
                },
                $$slots: { default: !0 }
              });
            };
            xe(F, ($e) => {
              l() && $e(ge);
            });
          }
          var se = q(F, 2);
          {
            var ye = ($e) => {
              Je($e, {
                class: "tf-node-toolbar-item",
                onclick: V,
                children: (He, ce) => {
                  var J = fy();
                  z(He, J);
                },
                $$slots: { default: !0 }
              });
            };
            xe(se, ($e) => {
              s() && $e(ye);
            });
          }
          var le = q(se, 2);
          {
            var ke = ($e) => {
              mo($e, {
                placement: "bottom",
                floating: (He) => {
                  var ce = gy(), J = j(ce), Pe = q(j(J));
                  _t(Pe, {
                    style: "width: 100%;",
                    onchange: (ae) => {
                      const Ve = ae.target.value;
                      b(S, { title: Ve });
                    },
                    get value() {
                      return n().title;
                    }
                  }), X(J);
                  var K = q(J, 2), Ne = q(j(K));
                  Mt(Ne, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (ae) => {
                      const Ve = ae.target.value;
                      b(S, { description: Ve });
                    },
                    get value() {
                      return n().description;
                    }
                  }), X(K);
                  var qe = q(K, 2);
                  {
                    var De = (ae) => {
                      var Ve = vy(), it = q(j(Ve));
                      Mt(it, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (rt) => {
                          const te = rt.target.value;
                          b(S, { condition: te });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), X(Ve), z(ae, Ve);
                    };
                    xe(qe, (ae) => {
                      d() && ae(De);
                    });
                  }
                  var de = q(qe, 2), fe = q(j(de), 2);
                  lr(fe), fe.__change = [py, b, S], X(de), X(ce), Ee(() => G1(fe, !!n().async)), z(He, ce);
                },
                children: (He, ce) => {
                  Je(He, {
                    class: "tf-node-toolbar-item",
                    children: (J, Pe) => {
                      var K = hy();
                      z(J, K);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { floating: !0, default: !0 }
              });
            };
            xe(le, ($e) => {
              c() && $e(ke);
            });
          }
          X(W), z(A, W);
        },
        $$slots: { default: !0 }
      });
    };
    xe(T, (O) => {
      (s() || l() || u()) && O(I);
    });
  }
  var R = q(T, 2), L = q(j(R), 2), Z = j(L);
  Bd(Z, {
    get items() {
      return f(g);
    },
    activeKeys: x,
    onChange: (O, A) => {
      var Y;
      b(r(), { expand: A == null ? void 0 : A.includes("key") }), (Y = h()) == null || Y(A != null && A.includes("key") ? "key" : "");
    }
  }), X(L), X(R);
  var E = q(R, 2);
  {
    var C = (O) => {
      pr(O, {
        type: "target",
        get position() {
          return ze.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    xe(E, (O) => {
      p() && O(C);
    });
  }
  var P = q(E, 2);
  {
    var H = (O) => {
      pr(O, {
        type: "source",
        get position() {
          return ze.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    xe(P, (O) => {
      v() && O(H);
    });
  }
  var M = q(P, 2);
  return Mr(M, () => i() ?? St), z(e, N), me({
    get data() {
      return n();
    },
    set data(O) {
      n(O), m();
    },
    get id() {
      return r();
    },
    set id(O = "") {
      r(O), m();
    },
    get icon() {
      return o();
    },
    set icon(O) {
      o(O), m();
    },
    get handle() {
      return i();
    },
    set handle(O) {
      i(O), m();
    },
    get children() {
      return a();
    },
    set children(O) {
      a(O), m();
    },
    get allowExecute() {
      return s();
    },
    set allowExecute(O = !0) {
      s(O), m();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(O = !0) {
      l(O), m();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete(O = !0) {
      u(O), m();
    },
    get allowSetting() {
      return c();
    },
    set allowSetting(O = !0) {
      c(O), m();
    },
    get allowSettingOfCondition() {
      return d();
    },
    set allowSettingOfCondition(O = !0) {
      d(O), m();
    },
    get showSourceHandle() {
      return v();
    },
    set showSourceHandle(O = !0) {
      v(O), m();
    },
    get showTargetHandle() {
      return p();
    },
    set showTargetHandle(O = !0) {
      p(O), m();
    },
    get onCollapse() {
      return h();
    },
    set onCollapse(O) {
      h(O), m();
    }
  });
}
go(["change"]);
pe(
  Pn,
  {
    data: {},
    id: {},
    icon: {},
    handle: {},
    children: {},
    allowExecute: {},
    allowCopy: {},
    allowDelete: {},
    allowSetting: {},
    allowSettingOfCondition: {},
    showSourceHandle: {},
    showTargetHandle: {},
    onCollapse: {}
  },
  [],
  [],
  !0
);
const nf = [
  {
    value: "String",
    label: "String"
  },
  {
    value: "Number",
    label: "Number"
  },
  {
    value: "Boolean",
    label: "Boolean"
  },
  {
    value: "File",
    label: "File"
  },
  {
    value: "Object",
    label: "Object"
  },
  {
    value: "Array",
    label: "Array"
  }
], by = [
  {
    value: "ref",
    label: "引用"
  },
  {
    value: "fixed",
    label: "固定值"
  }
  // {
  //     value: 'input',
  //     label: '输入'
  // }
];
var xy = /* @__PURE__ */ ie('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), $y = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), Cy = /* @__PURE__ */ ie('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const _y = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function rf(e, t) {
  he(t, !0), ot(e, _y);
  const [n, r] = vt(), o = () => oe(f(l), "$node", n), i = y(t, "parameter", 7), a = y(t, "index", 7);
  let s = Et(), l = /* @__PURE__ */ Te(() => Lr(s)), u = /* @__PURE__ */ Te(() => {
    var T, I;
    return {
      ...i(),
      ...(I = (T = o()) == null ? void 0 : T.data) == null ? void 0 : I.parameters[a()]
    };
  });
  const { updateNodeData: c } = Qt(), d = (T, I) => {
    c(s, (R) => {
      let L = R.data.parameters;
      return L[a()][T] = I, { parameters: L };
    });
  }, v = (T) => {
    const I = T.target.value;
    d("name", I);
  }, p = (T) => {
    const I = T.target.checked;
    d("required", I);
  }, h = (T) => {
    const I = T.value;
    I && d("dataType", I);
  };
  let x;
  const b = () => {
    c(s, (T) => {
      let I = T.data.parameters;
      return I.splice(a(), 1), { parameters: [...I] };
    }), x == null || x.hide();
  };
  var $ = Cy(), g = Ce($), _ = j(g);
  _t(_, {
    style: "width: 100%;",
    get value() {
      return f(u).name;
    },
    placeholder: "请输入参数名称",
    oninput: v
  }), X(g);
  var w = q(g, 2), k = j(w);
  Rd(k, {
    get checked() {
      return f(u).required;
    },
    onchange: p
  }), X(w);
  var V = q(w, 2), S = j(V);
  zn(
    mo(S, {
      placement: "bottom",
      floating: (T) => {
        var I = xy(), R = j(I), L = q(j(R));
        const Z = /* @__PURE__ */ Te(() => f(u).dataType ? [f(u).dataType] : ["String"]);
        hn(L, {
          items: nf,
          style: "width: 100%",
          onSelect: h,
          get value() {
            return f(Z);
          }
        }), X(R);
        var E = q(R, 2), C = q(j(E));
        Mt(C, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return f(u).defaultValue;
          },
          onchange: (A) => {
            const Y = A.target.value;
            d("defaultValue", Y);
          }
        }), X(E);
        var P = q(E, 2), H = q(j(P));
        Mt(H, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return f(u).description;
          },
          onchange: (A) => {
            const Y = A.target.value;
            d("description", Y);
          }
        }), X(P);
        var M = q(P, 2), O = j(M);
        Je(O, {
          onclick: b,
          children: (A, Y) => {
            Re();
            var W = je("删除");
            z(A, W);
          },
          $$slots: { default: !0 }
        }), X(M), X(I), z(T, I);
      },
      children: (T, I) => {
        Je(T, {
          class: "input-btn-more",
          children: (R, L) => {
            var Z = $y();
            z(R, Z);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (T) => x = T,
    () => x
  ), X(V), z(e, $);
  var N = me({
    get parameter() {
      return i();
    },
    set parameter(T) {
      i(T), m();
    },
    get index() {
      return a();
    },
    set index(T) {
      a(T), m();
    }
  });
  return r(), N;
}
pe(rf, { parameter: {}, index: {} }, [], [], !0);
var ky = /* @__PURE__ */ ie('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), Sy = /* @__PURE__ */ ie('<div class="none-params svelte-3n0wca">无输入参数</div>'), Ey = /* @__PURE__ */ ie('<div class="input-container svelte-3n0wca"><!> <!></div>');
const Py = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function of(e, t) {
  he(t, !0), ot(e, Py);
  const [n, r] = vt(), o = () => oe(f(a), "$node", n);
  let i = Et(), a = /* @__PURE__ */ Te(() => Lr(i)), s = /* @__PURE__ */ Te(() => {
    var v, p;
    return [...((p = (v = o()) == null ? void 0 : v.data) == null ? void 0 : p.parameters) || []];
  });
  var l = Ey(), u = j(l);
  {
    var c = (v) => {
      var p = ky();
      Re(4), z(v, p);
    };
    xe(u, (v) => {
      f(s).length !== 0 && v(c);
    });
  }
  var d = q(u, 2);
  Zt(
    d,
    19,
    () => f(s),
    (v) => v.id,
    (v, p, h) => {
      rf(v, {
        get parameter() {
          return f(p);
        },
        get index() {
          return f(h);
        }
      });
    },
    (v) => {
      var p = Sy();
      z(v, p);
    }
  ), X(l), z(e, l), me(), r();
}
pe(of, {}, [], [], !0);
const na = (e) => (!e || e.length == 0 || e.forEach((t) => {
  t.id || (t.id = lo()), na(t.children);
}), e), qn = () => {
  const { updateNodeData: e } = Qt();
  return {
    addParameter: (t, n = "parameters", r) => {
      na(r == null ? void 0 : r.children);
      const o = {
        name: "",
        dataType: "String",
        refType: "ref",
        ...r,
        id: lo()
      };
      e(t, (i) => {
        let a = i.data[n];
        return a ? a.push(o) : a = [o], {
          [n]: [...a]
        };
      });
    }
  };
};
var My = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), Vy = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Oy = /* @__PURE__ */ ie('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const Hy = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function af(e, t) {
  he(t, !0), ot(e, Hy);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ot(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Et(), { addParameter: i } = qn();
  return Pn(e, mt(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    allowSettingOfCondition: !1,
    icon: (a) => {
      var s = My();
      z(a, s);
    },
    children: (a, s) => {
      var l = Oy(), u = Ce(l), c = j(u);
      nt(c, {
        level: 3,
        children: (p, h) => {
          Re();
          var x = je("输入参数");
          z(p, x);
        },
        $$slots: { default: !0 }
      });
      var d = q(c, 2);
      Je(d, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o, "parameters", { refType: "input" });
        },
        children: (p, h) => {
          var x = Vy();
          z(p, x);
        },
        $$slots: { default: !0 }
      }), X(u);
      var v = q(u, 2);
      of(v, {}), z(a, l);
    },
    $$slots: { icon: !0, default: !0 }
  })), me({
    get data() {
      return n();
    },
    set data(a) {
      n(a), m();
    }
  });
}
pe(af, { data: {} }, [], [], !0);
const sf = (e, t, n) => {
  for (const r of n)
    r.target === t && r.source && (e.push(r.source), sf(e, r.source, n));
}, lf = (e, t, n) => !e || e.length === 0 ? [] : e.map((r) => ({
  label: r.name + (n ? ` (Array<${r.dataType || "String"}>)` : ` (${r.dataType || "String"})`),
  value: t + "." + r.name,
  children: lf(r.children, t + "." + r.name, n)
})), vu = (e, t, n) => {
  if (e.type === "startNode") {
    const r = e.data.parameters, o = [];
    if (r)
      for (const i of r)
        o.push({
          label: i.name + (t ? ` (Array<${i.dataType || "String"}>)` : ` (${i.dataType || "String"})`),
          value: e.id + "." + i.name
        });
    return {
      label: e.data.title,
      value: e.id,
      children: o
    };
  } else {
    if (e.type === "loopNode" && n.parentId)
      return {
        label: e.data.title,
        value: e.id,
        children: [
          {
            label: "loopItem",
            value: e.id + ".loop"
          },
          {
            label: "index (Number)",
            value: e.id + ".index"
          }
        ]
      };
    {
      const r = e.data.outputDefs;
      if (r)
        return {
          label: e.data.title,
          value: e.id,
          children: lf(r, e.id, t)
        };
    }
  }
}, Ty = (e = !1) => {
  const t = Et(), n = Lr(t), { nodes: r, edges: o, nodeLookup: i } = tt();
  return ur(
    [n, r, o, i],
    ([a, s, l, u]) => {
      if (!a)
        return [];
      const c = u.get(t), d = [];
      if (e)
        for (const v of s) {
          const p = v.parentId === a.id;
          if (p) {
            const h = vu(v, p, c);
            h && d.push(h);
          }
        }
      else {
        const v = [];
        sf(v, t, l);
        for (const p of s)
          if (v.includes(p.id)) {
            const h = p.parentId === a.id, x = vu(p, h, c);
            x && d.push(x);
          }
      }
      return d;
    }
  );
};
var Ny = /* @__PURE__ */ ie('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), Dy = /* @__PURE__ */ ie('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const Ly = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function uf(e, t) {
  he(t, !0), ot(e, Ly);
  const [n, r] = vt(), o = () => oe(f(d), "$node", n), i = () => oe(w, "$selectItems", n);
  mn(() => {
    f(v).refType || $({ value: "ref" });
  });
  const a = y(t, "parameter", 7), s = y(t, "index", 7), l = y(t, "dataKeyName", 7), u = y(t, "useChildrenOnly", 7);
  let c = Et(), d = /* @__PURE__ */ Te(() => Lr(c)), v = /* @__PURE__ */ Te(() => {
    var P;
    return {
      ...a(),
      ...(P = o()) == null ? void 0 : P.data[l()][s()]
    };
  });
  const { updateNodeData: p } = Qt(), h = (P, H) => {
    p(c, (M) => {
      let O = M.data[l()];
      return O[s()] = { ...O[s()], [P]: H }, { [l()]: O };
    });
  }, x = (P, H) => {
    const M = H.target.value;
    h(P, M);
  }, b = (P) => {
    const H = P.value;
    h("ref", H);
  }, $ = (P) => {
    const H = P.value;
    h("refType", H);
  };
  let g;
  const _ = () => {
    p(c, (P) => {
      let H = P.data[l()];
      return H.splice(s(), 1), { [l()]: [...H] };
    }), g == null || g.hide();
  }, w = Ty(u());
  var k = Dy(), V = Ce(k), S = j(V);
  const N = /* @__PURE__ */ Te(() => f(v).nameDisabled === !0);
  _t(S, {
    style: "width: 100%;",
    get value() {
      return f(v).name;
    },
    placeholder: "请输入参数名称",
    get disabled() {
      return f(N);
    },
    oninput: (P) => x("name", P)
  }), X(V);
  var T = q(V, 2), I = j(T);
  {
    var R = (P) => {
      _t(P, {
        get value() {
          return f(v).value;
        },
        placeholder: "请输入参数值",
        oninput: (H) => x("value", H)
      });
    }, L = (P, H) => {
      {
        var M = (O) => {
          const A = /* @__PURE__ */ Te(() => [f(v).ref]);
          hn(O, {
            get items() {
              return i();
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return f(A);
            },
            expandAll: !0,
            onSelect: b
          });
        };
        xe(
          P,
          (O) => {
            f(v).refType !== "input" && O(M);
          },
          H
        );
      }
    };
    xe(I, (P) => {
      f(v).refType === "fixed" ? P(R) : P(L, !1);
    });
  }
  X(T);
  var Z = q(T, 2), E = j(Z);
  zn(
    mo(E, {
      placement: "bottom",
      floating: (P) => {
        var H = Ny(), M = j(H), O = q(j(M));
        const A = /* @__PURE__ */ Te(() => f(v).refType ? [f(v).refType] : []);
        hn(O, {
          items: by,
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return f(A);
          },
          onSelect: $
        }), X(M);
        var Y = q(M, 2), W = q(j(Y));
        Mt(W, {
          rows: 1,
          style: "width: 100%;",
          onchange: (se) => {
            x("defaultValue", se);
          },
          get value() {
            return f(v).defaultValue;
          }
        }), X(Y);
        var U = q(Y, 2), Q = q(j(U));
        Mt(Q, {
          rows: 3,
          style: "width: 100%;",
          onchange: (se) => {
            x("description", se);
          },
          get value() {
            return f(v).description;
          }
        }), X(U);
        var F = q(U, 2), ge = j(F);
        Je(ge, {
          onclick: _,
          children: (se, ye) => {
            Re();
            var le = je("删除");
            z(se, le);
          },
          $$slots: { default: !0 }
        }), X(F), X(H), z(P, H);
      },
      children: (P, H) => {
        ka(P, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (P) => g = P,
    () => g
  ), X(Z), z(e, k);
  var C = me({
    get parameter() {
      return a();
    },
    set parameter(P) {
      a(P), m();
    },
    get index() {
      return s();
    },
    set index(P) {
      s(P), m();
    },
    get dataKeyName() {
      return l();
    },
    set dataKeyName(P) {
      l(P), m();
    },
    get useChildrenOnly() {
      return u();
    },
    set useChildrenOnly(P) {
      u(P), m();
    }
  });
  return r(), C;
}
pe(
  uf,
  {
    parameter: {},
    index: {},
    dataKeyName: {},
    useChildrenOnly: {}
  },
  [],
  [],
  !0
);
var zy = /* @__PURE__ */ ie('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), Ay = /* @__PURE__ */ ie('<div class="none-params svelte-1sm1mgi"> </div>'), Iy = /* @__PURE__ */ ie('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Ry = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Ut(e, t) {
  he(t, !0), ot(e, Ry);
  const [n, r] = vt(), o = () => oe(f(u), "$node", n), i = y(t, "noneParameterText", 7, "无输入参数"), a = y(t, "dataKeyName", 7, "parameters"), s = y(t, "useChildrenOnly", 7);
  let l = Et(), u = /* @__PURE__ */ Te(() => Lr(l)), c = /* @__PURE__ */ Te(() => {
    var b;
    return [...((b = o()) == null ? void 0 : b.data[a()]) || []];
  });
  var d = Iy(), v = j(d);
  {
    var p = (b) => {
      var $ = zy();
      Re(4), z(b, $);
    };
    xe(v, (b) => {
      f(c).length !== 0 && b(p);
    });
  }
  var h = q(v, 2);
  Zt(
    h,
    19,
    () => f(c),
    (b) => b.id,
    (b, $, g) => {
      uf(b, {
        get parameter() {
          return f($);
        },
        get index() {
          return f(g);
        },
        get dataKeyName() {
          return a();
        },
        get useChildrenOnly() {
          return s();
        }
      });
    },
    (b) => {
      var $ = Ay(), g = j($, !0);
      X($), Ee(() => bt(g, i())), z(b, $);
    }
  ), X(d), z(e, d);
  var x = me({
    get noneParameterText() {
      return i();
    },
    set noneParameterText(b = "无输入参数") {
      i(b), m();
    },
    get dataKeyName() {
      return a();
    },
    set dataKeyName(b = "parameters") {
      a(b), m();
    },
    get useChildrenOnly() {
      return s();
    },
    set useChildrenOnly(b) {
      s(b), m();
    }
  });
  return r(), x;
}
pe(
  Ut,
  {
    noneParameterText: {},
    dataKeyName: {},
    useChildrenOnly: {}
  },
  [],
  [],
  !0
);
var qy = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), Zy = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), By = /* @__PURE__ */ ie('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const Xy = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function cf(e, t) {
  he(t, !0), ot(e, Xy);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ot(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Et(), { addParameter: i } = qn();
  return Pn(e, mt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      allowExecute: !1,
      showSourceHandle: !1,
      icon: (a) => {
        var s = qy();
        z(a, s);
      },
      children: (a, s) => {
        var l = By(), u = Ce(l), c = j(u);
        nt(c, {
          level: 3,
          children: (p, h) => {
            Re();
            var x = je("输出参数");
            z(p, x);
          },
          $$slots: { default: !0 }
        });
        var d = q(c, 2);
        Je(d, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (p, h) => {
            var x = Zy();
            z(p, x);
          },
          $$slots: { default: !0 }
        }), X(u);
        var v = q(u, 2);
        Ut(v, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs"
        }), z(a, l);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), me({
    get data() {
      return n();
    },
    set data(a) {
      n(a), m();
    }
  });
}
pe(cf, { data: {} }, [], [], !0);
const Ba = (e) => JSON.parse(JSON.stringify(e));
var Yy = /* @__PURE__ */ Oe('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), jy = /* @__PURE__ */ ie('<div class="input-more-item svelte-1cfeest"><!></div>'), Wy = /* @__PURE__ */ ie('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), Ky = /* @__PURE__ */ ie('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const Fy = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function df(e, t) {
  he(t, !0), ot(e, Fy);
  const [n, r] = vt(), o = () => oe(f(u), "$node", n), i = y(t, "parameter", 7), a = y(t, "position", 7), s = y(t, "dataKeyName", 7);
  let l = Et(), u = /* @__PURE__ */ Te(() => Lr(l)), c = /* @__PURE__ */ Te(() => {
    var H;
    let M = (H = o()) == null ? void 0 : H.data[s()], O;
    if (M && a().length > 0) {
      let A = M;
      for (let Y = 0; Y < a().length; Y++) {
        const W = a()[Y];
        Y == a().length - 1 ? O = A[W] : A = A[W].children;
      }
    }
    return { ...i(), ...O };
  });
  const { updateNodeData: d } = Qt(), v = (H, M) => {
    d(l, (O) => {
      const A = O.data[s()];
      if (A && a().length > 0) {
        let Y = A;
        for (let W = 0; W < a().length; W++) {
          const U = a()[W];
          W == a().length - 1 ? Y[U] = { ...Y[U], [H]: M } : Y = Y[U].children;
        }
      }
      return {
        [s()]: [...Ba(A)]
      };
    });
  }, p = (H, M) => {
    const O = M.target.value;
    v(H, O);
  }, h = (H) => {
    const M = H.value;
    v("dataType", M);
  };
  let x;
  const b = () => {
    d(l, (H) => {
      let M = H.data[s()];
      if (M && a().length > 0) {
        let O = M;
        for (let A = 0; A < a().length; A++) {
          const Y = a()[A];
          A == a().length - 1 ? O.splice(Y, 1) : O = O[Y].children;
        }
      }
      return {
        [s()]: [...Ba(M)]
      };
    }), x == null || x.hide();
  }, $ = () => {
    d(l, (H) => {
      let M = H.data[s()];
      if (M && a().length > 0) {
        let O = M;
        for (let A = 0; A < a().length; A++) {
          const Y = a()[A];
          A == a().length - 1 ? O[Y].children ? O[Y].children.push({
            id: lo(),
            name: "newParam",
            dataType: "String"
          }) : O[Y].children = [
            {
              id: lo(),
              name: "newParam",
              dataType: "String"
            }
          ] : O = O[Y].children;
        }
      }
      return {
        [s()]: [...Ba(M)]
      };
    });
  };
  var g = Ky(), _ = Ce(g), w = j(_);
  {
    var k = (H) => {
      var M = lt(), O = Ce(M);
      Zt(O, 17, a, eo, (A, Y) => {
        Re();
        var W = je(" ");
        z(A, W);
      }), z(H, M);
    };
    xe(w, (H) => {
      a().length > 1 && H(k);
    });
  }
  var V = q(w, 2);
  const S = /* @__PURE__ */ Te(() => f(c).nameDisabled === !0);
  _t(V, {
    style: "width: 100%;",
    get value() {
      return f(c).name;
    },
    placeholder: "请输入参数名称",
    oninput: (H) => {
      p("name", H);
    },
    get disabled() {
      return f(S);
    }
  }), X(_);
  var N = q(_, 2), T = j(N);
  const I = /* @__PURE__ */ Te(() => f(c).dataType ? [f(c).dataType] : []), R = /* @__PURE__ */ Te(() => f(c).dataTypeDisabled === !0);
  hn(T, {
    items: nf,
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return f(I);
    },
    get disabled() {
      return f(R);
    },
    onSelect: h
  });
  var L = q(T, 2);
  {
    var Z = (H) => {
      Je(H, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: $,
        children: (M, O) => {
          var A = Yy();
          z(M, A);
        },
        $$slots: { default: !0 }
      });
    };
    xe(L, (H) => {
      (f(c).dataType === "Object" || f(c).dataType === "Array") && f(c).addChildDisabled !== !0 && H(Z);
    });
  }
  X(N);
  var E = q(N, 2), C = j(E);
  zn(
    mo(C, {
      placement: "bottom",
      floating: (H) => {
        var M = Wy(), O = j(M), A = q(j(O));
        const Y = /* @__PURE__ */ Te(() => f(c).defaultValue || "");
        Mt(A, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return f(Y);
          },
          onchange: (se) => {
            p("defaultValue", se);
          }
        }), X(O);
        var W = q(O, 2), U = q(j(W));
        const Q = /* @__PURE__ */ Te(() => f(c).description || "");
        Mt(U, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return f(Q);
          },
          onchange: (se) => {
            p("description", se);
          }
        }), X(W);
        var F = q(W, 2);
        {
          var ge = (se) => {
            var ye = jy(), le = j(ye);
            Je(le, {
              onclick: b,
              children: (ke, $e) => {
                Re();
                var He = je("删除");
                z(ke, He);
              },
              $$slots: { default: !0 }
            }), X(ye), z(se, ye);
          };
          xe(F, (se) => {
            f(c).deleteDisabled !== !0 && se(ge);
          });
        }
        X(M), z(H, M);
      },
      children: (H, M) => {
        ka(H, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (H) => x = H,
    () => x
  ), X(E), z(e, g);
  var P = me({
    get parameter() {
      return i();
    },
    set parameter(H) {
      i(H), m();
    },
    get position() {
      return a();
    },
    set position(H) {
      a(H), m();
    },
    get dataKeyName() {
      return s();
    },
    set dataKeyName(H) {
      s(H), m();
    }
  });
  return r(), P;
}
pe(df, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0);
var Gy = /* @__PURE__ */ ie("<!> <!>", 1), Uy = /* @__PURE__ */ ie('<div class="none-params svelte-1sm1mgi"> </div>'), Jy = /* @__PURE__ */ ie('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), Qy = /* @__PURE__ */ ie('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const ew = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function wr(e, t) {
  he(t, !0), ot(e, ew);
  const [n, r] = vt(), o = () => oe(f(u), "$node", n), i = (b, $ = St, g = St) => {
    var _ = lt(), w = Ce(_);
    Zt(
      w,
      19,
      $,
      (k) => `${k.id}_${k.children ? k.children.length : 0}`,
      (k, V, S) => {
        var N = Gy(), T = Ce(N);
        const I = /* @__PURE__ */ Te(() => [...g(), f(S)]);
        df(T, {
          get parameter() {
            return f(V);
          },
          get position() {
            return f(I);
          },
          get dataKeyName() {
            return s();
          }
        });
        var R = q(T, 2);
        {
          var L = (Z) => {
            var E = /* @__PURE__ */ _e(() => [...g(), f(S)]);
            i(Z, () => f(V).children, () => f(E));
          };
          xe(R, (Z) => {
            f(V).children && Z(L);
          });
        }
        z(k, N);
      },
      (k) => {
        var V = lt(), S = Ce(V);
        {
          var N = (T) => {
            var I = Uy(), R = j(I, !0);
            X(I), Ee(() => bt(R, a())), z(T, I);
          };
          xe(S, (T) => {
            g().length === 0 && T(N);
          });
        }
        z(k, V);
      }
    ), z(b, _);
  }, a = y(t, "noneParameterText", 7, "无输出参数"), s = y(t, "dataKeyName", 7, "outputDefs");
  let l = Et(), u = /* @__PURE__ */ Te(() => Lr(l)), c = /* @__PURE__ */ Te(() => {
    var b;
    return [...((b = o()) == null ? void 0 : b.data[s()]) || []];
  });
  var d = Qy(), v = j(d);
  {
    var p = (b) => {
      var $ = Jy();
      Re(4), z(b, $);
    };
    xe(v, (b) => {
      f(c).length !== 0 && b(p);
    });
  }
  var h = q(v, 2);
  i(h, () => f(c) || [], () => []), X(d), z(e, d);
  var x = me({
    get noneParameterText() {
      return a();
    },
    set noneParameterText(b = "无输出参数") {
      a(b), m();
    },
    get dataKeyName() {
      return s();
    },
    set dataKeyName(b = "outputDefs") {
      s(b), m();
    }
  });
  return r(), x;
}
pe(wr, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var tw = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), nw = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), rw = (e, t, n) => t(n, { temperature: parseFloat(e.target.value) }), ow = (e, t, n) => t(n, { topP: parseFloat(e.target.value) }), iw = (e, t, n) => t(n, { topK: parseInt(e.target.value) }), aw = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), sw = /* @__PURE__ */ ie('<div class="heading svelte-q0cqsa"><!> <!></div> <!> <!> <div class="setting-title svelte-q0cqsa">模型</div> <div class="setting-item svelte-q0cqsa"><!> <!></div> <div class="setting-title svelte-q0cqsa">采样参数</div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="100" step="1"></div></div> <div class="setting-title svelte-q0cqsa">系统提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="setting-title svelte-q0cqsa">用户提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="heading svelte-q0cqsa"><!> <!> <!></div> <!>', 1);
const lw = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function ff(e, t) {
  he(t, !0), ot(e, lw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ot(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Et(), { addParameter: i } = qn(), a = hr();
  let s = /* @__PURE__ */ It(bn([]));
  mn(async () => {
    var c, d;
    const v = await ((d = (c = a.provider) == null ? void 0 : c.llm) == null ? void 0 : d.call(c));
    f(s).push(...v || []);
  });
  const { updateNodeData: l } = Qt(), u = (c) => {
    l(o, () => ({ outType: c })), c === "text" ? l(o, {
      outputDefs: [
        {
          name: "output",
          dataType: "String",
          dataTypeDisabled: !0,
          deleteDisabled: !0
        }
      ]
    }) : l(o, { outputDefs: [] });
  };
  return vn(() => {
    n().outType || u("text");
  }), Pn(e, mt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var d = tw();
        z(c, d);
      },
      children: (c, d) => {
        var v = sw(), p = Ce(v), h = j(p);
        nt(h, {
          level: 3,
          children: (J, Pe) => {
            Re();
            var K = je("输入参数");
            z(J, K);
          },
          $$slots: { default: !0 }
        });
        var x = q(h, 2);
        Je(x, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (J, Pe) => {
            var K = nw();
            z(J, K);
          },
          $$slots: { default: !0 }
        }), X(p);
        var b = q(p, 2);
        Ut(b, {});
        var $ = q(b, 2);
        nt($, {
          level: 3,
          mt: "10px",
          children: (J, Pe) => {
            Re();
            var K = je("模型设置");
            z(J, K);
          },
          $$slots: { default: !0 }
        });
        var g = q($, 4), _ = j(g);
        const w = /* @__PURE__ */ Te(() => n().llmId ? [n().llmId] : []);
        hn(_, {
          get items() {
            return f(s);
          },
          style: "width: 100%",
          placeholder: "请选择模型",
          onSelect: (J) => {
            const Pe = J.value;
            l(o, () => ({ llmId: Pe }));
          },
          get value() {
            return f(w);
          }
        });
        var k = q(_, 2);
        ka(k, {}), X(g);
        var V = q(g, 4), S = j(V), N = j(S), T = j(N);
        X(N);
        var I = q(N, 2);
        lr(I), I.__input = [rw, l, o], X(S), X(V);
        var R = q(V, 2), L = j(R), Z = j(L), E = j(Z);
        X(Z);
        var C = q(Z, 2);
        lr(C), C.__input = [ow, l, o], X(L), X(R);
        var P = q(R, 2), H = j(P), M = j(H), O = j(M);
        X(M);
        var A = q(M, 2);
        lr(A), A.__input = [iw, l, o], X(H), X(P);
        var Y = q(P, 4), W = j(Y);
        const U = /* @__PURE__ */ Te(() => n().systemPrompt || "");
        Mt(W, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%",
          get value() {
            return f(U);
          },
          oninput: (J) => {
            l(o, { systemPrompt: J.target.value });
          }
        }), X(Y);
        var Q = q(Y, 4), F = j(Q);
        const ge = /* @__PURE__ */ Te(() => n().userPrompt || "");
        Mt(F, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%",
          get value() {
            return f(ge);
          },
          oninput: (J) => {
            l(o, { userPrompt: J.target.value });
          }
        }), X(Q);
        var se = q(Q, 2), ye = j(se);
        nt(ye, {
          level: 3,
          mt: "10px",
          children: (J, Pe) => {
            Re();
            var K = je("输出参数");
            z(J, K);
          },
          $$slots: { default: !0 }
        });
        var le = q(ye, 2);
        const ke = /* @__PURE__ */ Te(() => n().outType ? [n().outType] : []);
        hn(le, {
          items: [
            { label: "文本", value: "text" },
            { label: "JSON", value: "json" }
          ],
          style: "width: 100px;margin-left: auto",
          defaultValue: "text",
          onSelect: (J) => {
            u(J.value);
          },
          get value() {
            return f(ke);
          }
        });
        var $e = q(le, 2);
        {
          var He = (J) => {
            Je(J, {
              class: "input-btn-more",
              style: "margin-left: 10px",
              onclick: () => {
                i(o, "outputDefs");
              },
              children: (Pe, K) => {
                var Ne = aw();
                z(Pe, Ne);
              },
              $$slots: { default: !0 }
            });
          };
          xe($e, (J) => {
            n().outType === "json" && J(He);
          });
        }
        X(se);
        var ce = q(se, 2);
        wr(ce, {}), Ee(() => {
          bt(T, `Temperature: ${n().temperature ?? 0.5 ?? ""}`), bi(I, n().temperature ?? 0.5), bt(E, `Top P: ${n().topP ?? 0.9 ?? ""}`), bi(C, n().topP ?? 0.9), bt(O, `Top K: ${n().topK ?? 50 ?? ""}`), bi(A, n().topK ?? 50);
        }), z(c, v);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), me({
    get data() {
      return n();
    },
    set data(c) {
      n(c), m();
    }
  });
}
go(["input"]);
pe(ff, { data: {} }, [], [], !0);
var uw = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), cw = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), dw = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), fw = /* @__PURE__ */ ie('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const vw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function vf(e, t) {
  he(t, !0), ot(e, vw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ot(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  mn(() => {
    n().engine || a(o, () => ({ engine: "qlexpress" }));
  });
  const o = Et(), { addParameter: i } = qn(), { updateNodeData: a } = Qt(), s = [
    { label: "QLExpress", value: "qlexpress" },
    { label: "Groovy", value: "groovy" },
    { label: "JavaScript", value: "js" }
  ];
  return Pn(e, mt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = uw();
        z(l, u);
      },
      children: (l, u) => {
        var c = fw(), d = Ce(c), v = j(d);
        nt(v, {
          level: 3,
          children: (I, R) => {
            Re();
            var L = je("输入参数");
            z(I, L);
          },
          $$slots: { default: !0 }
        });
        var p = q(v, 2);
        Je(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (I, R) => {
            var L = cw();
            z(I, L);
          },
          $$slots: { default: !0 }
        }), X(d);
        var h = q(d, 2);
        Ut(h, {});
        var x = q(h, 2);
        nt(x, {
          level: 3,
          mt: "10px",
          children: (I, R) => {
            Re();
            var L = je("代码");
            z(I, L);
          },
          $$slots: { default: !0 }
        });
        var b = q(x, 4), $ = j(b);
        const g = /* @__PURE__ */ Te(() => n().engine ? [n().engine] : ["qlexpress"]);
        hn($, {
          items: s,
          style: "width: 100%",
          placeholder: "请选择执行引擎",
          onSelect: (I) => {
            const R = I.value;
            a(o, () => ({ engine: R }));
          },
          get value() {
            return f(g);
          }
        }), X(b);
        var _ = q(b, 4), w = j(_);
        const k = /* @__PURE__ */ Te(() => n().code || "");
        Mt(w, {
          rows: 10,
          placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result.put(key, value)",
          style: "width: 100%",
          onchange: (I) => {
            a(o, () => ({ code: I.target.value }));
          },
          get value() {
            return f(k);
          }
        }), X(_);
        var V = q(_, 2), S = j(V);
        nt(S, {
          level: 3,
          mt: "10px",
          children: (I, R) => {
            Re();
            var L = je("输出参数");
            z(I, L);
          },
          $$slots: { default: !0 }
        });
        var N = q(S, 2);
        Je(N, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (I, R) => {
            var L = dw();
            z(I, L);
          },
          $$slots: { default: !0 }
        }), X(V);
        var T = q(V, 2);
        wr(T, {}), z(l, c);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), me({
    get data() {
      return n();
    },
    set data(l) {
      n(l), m();
    }
  });
}
pe(vf, { data: {} }, [], [], !0);
var pw = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), gw = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), hw = /* @__PURE__ */ ie('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const mw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function pf(e, t) {
  he(t, !0), ot(e, mw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ot(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Et(), { addParameter: i } = qn(), { updateNodeData: a } = Qt();
  return vn(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && i(o, "outputDefs", {
      name: "output",
      dataType: "String",
      dataTypeDisabled: !0,
      deleteDisabled: !0
    });
  }), Pn(e, mt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (s) => {
        var l = pw();
        z(s, l);
      },
      children: (s, l) => {
        var u = hw(), c = Ce(u), d = j(c);
        nt(d, {
          level: 3,
          children: (k, V) => {
            Re();
            var S = je("输入参数");
            z(k, S);
          },
          $$slots: { default: !0 }
        });
        var v = q(d, 2);
        Je(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (k, V) => {
            var S = gw();
            z(k, S);
          },
          $$slots: { default: !0 }
        }), X(c);
        var p = q(c, 2);
        Ut(p, {});
        var h = q(p, 2);
        nt(h, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (k, V) => {
            Re();
            var S = je("模板内容");
            z(k, S);
          },
          $$slots: { default: !0 }
        });
        var x = q(h, 2), b = j(x);
        const $ = /* @__PURE__ */ Te(() => n().template || "");
        Mt(b, {
          rows: 10,
          placeholder: "请输入模板内容",
          style: "width: 100%",
          onchange: (k) => {
            a(o, () => ({ template: k.target.value }));
          },
          get value() {
            return f($);
          }
        }), X(x);
        var g = q(x, 2), _ = j(g);
        nt(_, {
          level: 3,
          mt: "10px",
          children: (k, V) => {
            Re();
            var S = je("输出参数");
            z(k, S);
          },
          $$slots: { default: !0 }
        }), X(g);
        var w = q(g, 2);
        wr(w, {}), z(s, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), me({
    get data() {
      return n();
    },
    set data(s) {
      n(s), m();
    }
  });
}
pe(pf, { data: {} }, [], [], !0);
var yw = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), ww = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), bw = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), xw = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), $w = /* @__PURE__ */ ie('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), Cw = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), _w = /* @__PURE__ */ ie('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), kw = /* @__PURE__ */ ie('<div style="width: 100%"><!></div>'), Sw = /* @__PURE__ */ ie('<div style="width: 100%"><!></div>'), Ew = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Pw = /* @__PURE__ */ ie('<div class="heading svelte-1mo2w1q"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1mo2w1q"><!> <!></div> <!> <!> <div class="radio-group svelte-1mo2w1q"><label class="svelte-1mo2w1q"><!>none</label> <label class="svelte-1mo2w1q"><!>form-data</label> <label class="svelte-1mo2w1q"><!>x-www-form-urlencoded</label> <label class="svelte-1mo2w1q"><!>json</label> <label class="svelte-1mo2w1q"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1mo2w1q"><!> <!></div> <!>', 1);
const Mw = {
  hash: "svelte-1mo2w1q",
  code: ".heading.svelte-1mo2w1q {display:flex;margin-bottom:10px;}.radio-group.svelte-1mo2w1q {display:flex;margin:10px 0;}.radio-group.svelte-1mo2w1q label:where(.svelte-1mo2w1q) {display:flex;font-size:14px;}"
};
function gf(e, t) {
  he(t, !0), ot(e, Mw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ot(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  mn(() => {
    n().method || s(i, () => ({ method: "get" }));
  });
  const o = [
    { value: "get", label: "GET" },
    { value: "post", label: "POST" },
    { value: "put", label: "PUT" },
    { value: "delete", label: "DELETE" },
    { value: "head", label: "HEAD" },
    { value: "patch", label: "PATCH" }
  ], i = Et(), { addParameter: a } = qn(), { updateNodeData: s } = Qt();
  return Pn(e, mt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = yw();
        z(l, u);
      },
      children: (l, u) => {
        var c = Pw(), d = Ce(c), v = j(d);
        nt(v, {
          level: 3,
          children: (de, fe) => {
            Re();
            var ae = je("输入参数");
            z(de, ae);
          },
          $$slots: { default: !0 }
        });
        var p = q(v, 2);
        Je(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i);
          },
          children: (de, fe) => {
            var ae = ww();
            z(de, ae);
          },
          $$slots: { default: !0 }
        }), X(d);
        var h = q(d, 2);
        Ut(h, {});
        var x = q(h, 2);
        nt(x, {
          level: 3,
          mt: "10px",
          children: (de, fe) => {
            Re();
            var ae = je("URL 地址");
            z(de, ae);
          },
          $$slots: { default: !0 }
        });
        var b = q(x, 2), $ = j(b), g = j($);
        const _ = /* @__PURE__ */ Te(() => n().method ? [n().method] : ["get"]);
        hn(g, {
          items: o,
          style: "width: 100%",
          placeholder: "请选择请求方式",
          onSelect: (de) => {
            const fe = de.value;
            s(i, () => ({ method: fe }));
          },
          get value() {
            return f(_);
          }
        }), X($);
        var w = q($, 2), k = j(w);
        const V = /* @__PURE__ */ Te(() => n().url || "");
        _t(k, {
          placeholder: "请输入url",
          style: "width: 100%",
          onchange: (de) => {
            s(i, () => ({ url: de.target.value }));
          },
          get value() {
            return f(V);
          }
        }), X(w), X(b);
        var S = q(b, 2), N = j(S);
        nt(N, {
          level: 3,
          children: (de, fe) => {
            Re();
            var ae = je("Http 头信息");
            z(de, ae);
          },
          $$slots: { default: !0 }
        });
        var T = q(N, 2);
        Je(T, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "headers");
          },
          children: (de, fe) => {
            var ae = bw();
            z(de, ae);
          },
          $$slots: { default: !0 }
        }), X(S);
        var I = q(S, 2);
        Ut(I, { dataKeyName: "headers" });
        var R = q(I, 2);
        nt(R, {
          level: 3,
          mt: "10px",
          children: (de, fe) => {
            Re();
            var ae = je("Body");
            z(de, ae);
          },
          $$slots: { default: !0 }
        });
        var L = q(R, 2), Z = j(L), E = j(Z);
        const C = /* @__PURE__ */ Te(() => !n().bodyType);
        _t(E, {
          type: "radio",
          name: "bodyType",
          value: "",
          get checked() {
            return f(C);
          },
          onchange: (de) => {
            var fe;
            (fe = de.target) != null && fe.checked && s(i, { bodyType: "" });
          }
        }), Re(), X(Z);
        var P = q(Z, 2), H = j(P);
        const M = /* @__PURE__ */ Te(() => n().bodyType === "form-data");
        _t(H, {
          type: "radio",
          name: "bodyType",
          value: "form-data",
          get checked() {
            return f(M);
          },
          onchange: (de) => {
            var fe;
            (fe = de.target) != null && fe.checked && s(i, { bodyType: "form-data" });
          }
        }), Re(), X(P);
        var O = q(P, 2), A = j(O);
        const Y = /* @__PURE__ */ Te(() => n().bodyType === "x-www-form-urlencoded");
        _t(A, {
          type: "radio",
          name: "bodyType",
          value: "x-www-form-urlencoded",
          get checked() {
            return f(Y);
          },
          onchange: (de) => {
            var fe;
            (fe = de.target) != null && fe.checked && s(i, { bodyType: "x-www-form-urlencoded" });
          }
        }), Re(), X(O);
        var W = q(O, 2), U = j(W);
        const Q = /* @__PURE__ */ Te(() => n().bodyType === "json");
        _t(U, {
          type: "radio",
          name: "bodyType",
          value: "json",
          get checked() {
            return f(Q);
          },
          onchange: (de) => {
            var fe;
            (fe = de.target) != null && fe.checked && s(i, { bodyType: "json" });
          }
        }), Re(), X(W);
        var F = q(W, 2), ge = j(F);
        const se = /* @__PURE__ */ Te(() => n().bodyType === "raw");
        _t(ge, {
          type: "radio",
          name: "bodyType",
          value: "raw",
          get checked() {
            return f(se);
          },
          onchange: (de) => {
            var fe;
            (fe = de.target) != null && fe.checked && s(i, { bodyType: "raw" });
          }
        }), Re(), X(F), X(L);
        var ye = q(L, 2);
        {
          var le = (de) => {
            var fe = $w(), ae = Ce(fe), Ve = j(ae);
            nt(Ve, {
              level: 3,
              children: (te, Fe) => {
                Re();
                var ve = je("参数");
                z(te, ve);
              },
              $$slots: { default: !0 }
            });
            var it = q(Ve, 2);
            Je(it, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(i, "formData");
              },
              children: (te, Fe) => {
                var ve = xw();
                z(te, ve);
              },
              $$slots: { default: !0 }
            }), X(ae);
            var rt = q(ae, 2);
            Ut(rt, { dataKeyName: "formData" }), z(de, fe);
          };
          xe(ye, (de) => {
            n().bodyType === "form-data" && de(le);
          });
        }
        var ke = q(ye, 2);
        {
          var $e = (de) => {
            var fe = _w(), ae = Ce(fe), Ve = j(ae);
            nt(Ve, {
              level: 3,
              children: (te, Fe) => {
                Re();
                var ve = je("Body 参数");
                z(te, ve);
              },
              $$slots: { default: !0 }
            });
            var it = q(Ve, 2);
            Je(it, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(i, "formUrlencoded");
              },
              children: (te, Fe) => {
                var ve = Cw();
                z(te, ve);
              },
              $$slots: { default: !0 }
            }), X(ae);
            var rt = q(ae, 2);
            Ut(rt, { dataKeyName: "formUrlencoded" }), z(de, fe);
          };
          xe(ke, (de) => {
            n().bodyType === "x-www-form-urlencoded" && de($e);
          });
        }
        var He = q(ke, 2);
        {
          var ce = (de) => {
            var fe = kw(), ae = j(fe);
            Mt(ae, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (Ve) => {
                s(i, { bodyJson: Ve.target.value });
              }
            }), X(fe), z(de, fe);
          };
          xe(He, (de) => {
            n().bodyType === "json" && de(ce);
          });
        }
        var J = q(He, 2);
        {
          var Pe = (de) => {
            var fe = Sw(), ae = j(fe);
            Mt(ae, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (Ve) => {
                s(i, { bodyRaw: Ve.target.value });
              }
            }), X(fe), z(de, fe);
          };
          xe(J, (de) => {
            n().bodyType === "raw" && de(Pe);
          });
        }
        var K = q(J, 2), Ne = j(K);
        nt(Ne, {
          level: 3,
          mt: "10px",
          children: (de, fe) => {
            Re();
            var ae = je("输出参数");
            z(de, ae);
          },
          $$slots: { default: !0 }
        });
        var qe = q(Ne, 2);
        Je(qe, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "outputDefs");
          },
          children: (de, fe) => {
            var ae = Ew();
            z(de, ae);
          },
          $$slots: { default: !0 }
        }), X(K);
        var De = q(K, 2);
        wr(De, {}), z(l, c);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), me({
    get data() {
      return n();
    },
    set data(l) {
      n(l), m();
    }
  });
}
pe(gf, { data: {} }, [], [], !0);
var Vw = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), Ow = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Hw = /* @__PURE__ */ ie('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Tw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function hf(e, t) {
  he(t, !0), ot(e, Tw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ot(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Et(), { addParameter: i } = qn(), a = hr();
  let s = /* @__PURE__ */ It(bn([]));
  mn(async () => {
    var u, c;
    const d = await ((c = (u = a.provider) == null ? void 0 : u.knowledge) == null ? void 0 : c.call(u));
    f(s).push(...d || []);
  });
  const { updateNodeData: l } = Qt();
  return vn(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && i(o, "outputDefs", {
      name: "documents",
      dataType: "Array",
      nameDisabled: !0,
      dataTypeDisabled: !0,
      addChildDisabled: !0,
      deleteDisabled: !0,
      children: [
        {
          name: "title",
          dataType: "String",
          nameDisabled: !0,
          dataTypeDisabled: !0,
          deleteDisabled: !0
        },
        {
          name: "content",
          dataType: "String",
          nameDisabled: !0,
          dataTypeDisabled: !0,
          deleteDisabled: !0
        },
        {
          name: "documentId",
          dataType: "Number",
          nameDisabled: !0,
          dataTypeDisabled: !0,
          deleteDisabled: !0
        },
        {
          name: "knowledgeId",
          dataType: "Number",
          nameDisabled: !0,
          dataTypeDisabled: !0,
          deleteDisabled: !0
        }
      ]
    });
  }), Pn(e, mt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = Vw();
        z(u, c);
      },
      children: (u, c) => {
        var d = Hw(), v = Ce(d), p = j(v);
        nt(p, {
          level: 3,
          children: (L, Z) => {
            Re();
            var E = je("输入参数");
            z(L, E);
          },
          $$slots: { default: !0 }
        });
        var h = q(p, 2);
        Je(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (L, Z) => {
            var E = Ow();
            z(L, E);
          },
          $$slots: { default: !0 }
        }), X(v);
        var x = q(v, 2);
        Ut(x, {});
        var b = q(x, 2);
        nt(b, {
          level: 3,
          mt: "10px",
          children: (L, Z) => {
            Re();
            var E = je("知识库设置");
            z(L, E);
          },
          $$slots: { default: !0 }
        });
        var $ = q(b, 4), g = j($);
        const _ = /* @__PURE__ */ Te(() => n().knowledgeId ? [n().knowledgeId] : []);
        hn(g, {
          get items() {
            return f(s);
          },
          style: "width: 100%",
          placeholder: "请选择知识库",
          onSelect: (L) => {
            const Z = L.value;
            l(o, () => ({ knowledgeId: Z }));
          },
          get value() {
            return f(_);
          }
        }), X($);
        var w = q($, 4), k = j(w);
        _t(k, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (L) => {
            const Z = L.target.value;
            l(o, () => ({ keyword: Z }));
          }
        }), X(w);
        var V = q(w, 4), S = j(V);
        const N = /* @__PURE__ */ Te(() => n().limit || "");
        _t(S, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          onchange: (L) => {
            const Z = L.target.value;
            l(o, () => ({ limit: Z }));
          },
          get value() {
            return f(N);
          }
        }), X(V);
        var T = q(V, 2), I = j(T);
        nt(I, {
          level: 3,
          mt: "10px",
          children: (L, Z) => {
            Re();
            var E = je("输出参数");
            z(L, E);
          },
          $$slots: { default: !0 }
        }), X(T);
        var R = q(T, 2);
        wr(R, {}), z(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), me({
    get data() {
      return n();
    },
    set data(u) {
      n(u), m();
    }
  });
}
pe(hf, { data: {} }, [], [], !0);
var Nw = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), Dw = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Lw = /* @__PURE__ */ ie('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">搜索引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">搜索数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const zw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function mf(e, t) {
  he(t, !0), ot(e, zw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ot(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Et(), { addParameter: i } = qn(), a = hr();
  let s = /* @__PURE__ */ It(bn([]));
  mn(async () => {
    var u, c;
    const d = await ((c = (u = a.provider) == null ? void 0 : u.searchEngine) == null ? void 0 : c.call(u));
    f(s).push(...d || []);
  });
  const { updateNodeData: l } = Qt();
  return vn(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && i(o, "outputDefs", {
      name: "documents",
      dataType: "Array",
      nameDisabled: !0,
      dataTypeDisabled: !0,
      addChildDisabled: !0,
      deleteDisabled: !0,
      children: [
        {
          name: "title",
          dataType: "String",
          nameDisabled: !0,
          dataTypeDisabled: !0,
          deleteDisabled: !0
        },
        {
          name: "content",
          dataType: "String",
          nameDisabled: !0,
          dataTypeDisabled: !0,
          deleteDisabled: !0
        }
      ]
    });
  }), Pn(e, mt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = Nw();
        z(u, c);
      },
      children: (u, c) => {
        var d = Lw(), v = Ce(d), p = j(v);
        nt(p, {
          level: 3,
          children: (R, L) => {
            Re();
            var Z = je("输入参数");
            z(R, Z);
          },
          $$slots: { default: !0 }
        });
        var h = q(p, 2);
        Je(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (R, L) => {
            var Z = Dw();
            z(R, Z);
          },
          $$slots: { default: !0 }
        }), X(v);
        var x = q(v, 2);
        Ut(x, {});
        var b = q(x, 2);
        nt(b, {
          level: 3,
          mt: "10px",
          children: (R, L) => {
            Re();
            var Z = je("搜索引擎设置");
            z(R, Z);
          },
          $$slots: { default: !0 }
        });
        var $ = q(b, 4), g = j($);
        const _ = /* @__PURE__ */ Te(() => n().engine ? [n().engine] : []);
        hn(g, {
          get items() {
            return f(s);
          },
          style: "width: 100%",
          placeholder: "请选择搜索引擎",
          onSelect: (R) => {
            const L = R.value;
            l(o, () => ({ engine: L }));
          },
          get value() {
            return f(_);
          }
        }), X($);
        var w = q($, 4), k = j(w);
        _t(k, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (R) => {
            const L = R.target.value;
            l(o, () => ({ keyword: L }));
          }
        }), X(w);
        var V = q(w, 4), S = j(V);
        _t(S, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (R) => {
            const L = R.target.value;
            l(o, () => ({ limit: L }));
          }
        }), X(V);
        var N = q(V, 2), T = j(N);
        nt(T, {
          level: 3,
          mt: "10px",
          children: (R, L) => {
            Re();
            var Z = je("输出参数");
            z(R, Z);
          },
          $$slots: { default: !0 }
        }), X(N);
        var I = q(N, 2);
        wr(I, {}), z(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), me({
    get data() {
      return n();
    },
    set data(u) {
      n(u), m();
    }
  });
}
pe(mf, { data: {} }, [], [], !0);
var Aw = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), Iw = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Rw = /* @__PURE__ */ ie('<div class="heading svelte-1eqcy61"><!></div> <!> <div class="heading svelte-1eqcy61"><!> <!></div> <!>', 1);
const qw = {
  hash: "svelte-1eqcy61",
  code: ".heading.svelte-1eqcy61 {display:flex;margin:10px 0;align-items:center;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function yf(e, t) {
  he(t, !0), ot(e, qw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ot(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Et(), { addParameter: i } = qn();
  return vn(() => {
    (!n().parameters || n().parameters.length === 0) && i(o, "parameters", {
      name: "loopVar",
      dataType: "String",
      nameDisabled: !0,
      deleteDisabled: !0
    });
  }), Pn(e, mt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (a) => {
        var s = Aw();
        z(a, s);
      },
      handle: (a) => {
        pr(a, {
          type: "source",
          get position() {
            return ze.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (a, s) => {
        var l = Rw(), u = Ce(l), c = j(u);
        nt(c, {
          level: 3,
          children: (b, $) => {
            Re();
            var g = je("循环变量");
            z(b, g);
          },
          $$slots: { default: !0 }
        }), X(u);
        var d = q(u, 2);
        Ut(d, {});
        var v = q(d, 2), p = j(v);
        nt(p, {
          level: 3,
          children: (b, $) => {
            Re();
            var g = je("输出参数");
            z(b, g);
          },
          $$slots: { default: !0 }
        });
        var h = q(p, 2);
        Je(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (b, $) => {
            var g = Iw();
            z(b, g);
          },
          $$slots: { default: !0 }
        }), X(v);
        var x = q(v, 2);
        Ut(x, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          useChildrenOnly: !0
        }), z(a, l);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), me({
    get data() {
      return n();
    },
    set data(a) {
      n(a), m();
    }
  });
}
pe(yf, { data: {} }, [], [], !0);
const Zw = {
  startNode: af,
  codeNode: vf,
  llmNode: ff,
  templateNode: pf,
  httpNode: gf,
  knowledgeNode: hf,
  searchEngineNode: mf,
  loopNode: yf,
  endNode: cf
};
var Bw = /* @__PURE__ */ ie("<!> ", 1);
function gs(e, t) {
  he(t, !0);
  const n = y(t, "icon", 7), r = y(t, "title", 7), o = y(t, "type", 7), i = y(t, "description", 7), a = y(t, "extra", 7);
  return Je(e, {
    draggable: !0,
    ondragstart: (s) => {
      if (!s.dataTransfer)
        return null;
      const l = {
        type: o(),
        data: {
          title: r(),
          description: i(),
          ...a()
        }
      };
      s.dataTransfer.setData("application/tinyflow", JSON.stringify(l)), s.dataTransfer.effectAllowed = "move";
    },
    get "data-node-type"() {
      return o();
    },
    children: (s, l) => {
      var u = Bw(), c = Ce(u);
      Ts(c, n);
      var d = q(c);
      Ee(() => bt(d, ` ${r() ?? ""}`)), z(s, u);
    },
    $$slots: { default: !0 }
  }), me({
    get icon() {
      return n();
    },
    set icon(s) {
      n(s), m();
    },
    get title() {
      return r();
    },
    set title(s) {
      r(s), m();
    },
    get type() {
      return o();
    },
    set type(s) {
      o(s), m();
    },
    get description() {
      return i();
    },
    set description(s) {
      i(s), m();
    },
    get extra() {
      return a();
    },
    set extra(s) {
      a(s), m();
    }
  });
}
pe(
  gs,
  {
    icon: {},
    title: {},
    type: {},
    description: {},
    extra: {}
  },
  [],
  [],
  !0
);
var Xw = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), Yw = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), jw = /* @__PURE__ */ ie('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function wf(e, t) {
  he(t, !0);
  let n = /* @__PURE__ */ It("base"), r = /* @__PURE__ */ It("show");
  const o = [
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>',
      title: "开始节点",
      type: "startNode",
      sortNo: 100,
      description: "开始定义输入参数"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>',
      title: "循环",
      type: "loopNode",
      sortNo: 200,
      description: "用于循环执行任务"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>',
      title: "大模型",
      type: "llmNode",
      sortNo: 300,
      description: "使用大模型处理问题"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>',
      title: "知识库",
      type: "knowledgeNode",
      sortNo: 400,
      description: "通过知识库获取内容"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>',
      title: "搜索引擎",
      type: "searchEngineNode",
      sortNo: 500,
      description: "通过搜索引擎搜索内容"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>',
      title: "Http 请求",
      type: "httpNode",
      sortNo: 600,
      description: "通过 HTTP 请求获取数据"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>',
      title: "动态代码",
      type: "codeNode",
      sortNo: 700,
      description: "动态执行代码"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>',
      title: "内容模板",
      type: "templateNode",
      sortNo: 800,
      description: "通过模板引擎生成内容"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>',
      title: "结束节点",
      type: "endNode",
      sortNo: 900,
      description: "结束定义输出参数"
    }
  ], i = [
    {
      label: "基础节点",
      value: "base"
    },
    {
      label: "业务工具",
      value: "tools"
    }
  ], a = [], s = hr(), l = s.customNodes;
  if (l) {
    const $ = Object.keys(l).sort((g, _) => (l[g].sortNo || 0) - (l[_].sortNo || 0));
    for (let g of $)
      l[g].group === "base" ? o.push({ type: g, ...l[g] }) : a.push({
        icon: l[g].icon,
        title: l[g].title,
        type: g
      });
    o.sort((g, _) => (g.sortNo || 0) - (_.sortNo || 0));
  }
  if (s.hiddenNodes) {
    const $ = typeof s.hiddenNodes == "function" ? s.hiddenNodes() : s.hiddenNodes;
    if (Array.isArray($)) {
      for (let g of $)
        for (let _ = 0; _ < o.length; _++)
          if (o[_].type === g) {
            o.splice(_, 1);
            break;
          }
    }
  }
  var u = jw(), c = j(u), d = j(c), v = j(d);
  Zd(v, {
    style: "width: 100%",
    items: i,
    onChange: ($) => {
      ee(n, $.value.toString(), !0);
    }
  }), X(d);
  var p = q(d, 2), h = j(p);
  Zt(h, 21, () => o, eo, ($, g) => {
    gs($, mt(() => f(g)));
  }), X(h);
  var x = q(h, 2);
  Zt(x, 21, () => a, eo, ($, g) => {
    gs($, mt(() => f(g)));
  }), X(x), X(p), X(c);
  var b = q(c, 2);
  Je(b, {
    onclick: () => {
      ee(r, f(r) ? "" : "show", !0);
    },
    children: ($, g) => {
      var _ = lt(), w = Ce(_);
      {
        var k = (S) => {
          var N = Xw();
          z(S, N);
        }, V = (S) => {
          var N = Yw();
          z(S, N);
        };
        xe(w, (S) => {
          f(r) === "show" ? S(k) : S(V, !1);
        });
      }
      z($, _);
    },
    $$slots: { default: !0 }
  }), X(u), Ee(() => {
    Lt(u, 1, `tf-toolbar ${f(r) ?? ""}`), $t(h, `display: ${f(n) === "base" ? "flex" : "none"}`), $t(x, `display: ${f(n) !== "base" ? "flex" : "none"}`);
  }), z(e, u), me();
}
pe(wf, {}, [], [], !0);
const Ww = () => {
  const { nodeLookup: e } = tt();
  return {
    getNode: (t) => {
      var n;
      return (n = G(e).get(t)) == null ? void 0 : n.internals.userNode;
    }
  };
}, Kw = () => {
  const { nodes: e } = tt();
  return {
    ensureParentInNodesBefore: (t, n) => {
      e.update((r) => {
        let o = -1;
        for (let s = 0; s < r.length; s++)
          if (r[s].id === t) {
            o = s;
            break;
          }
        if (o <= 0)
          return r;
        let i = -1;
        for (let s = 0; s < o; s++)
          if (r[s].parentId === t || r[s].id === n) {
            i = s;
            break;
          }
        if (i == -1)
          return r;
        const a = r[o];
        for (let s = o; s > i; s--)
          r[s] = r[s - 1];
        return r[i] = a, r;
      });
    }
  };
}, Fw = () => {
  const { edges: e } = tt();
  return {
    getEdgesByTarget: (t) => G(e).filter((n) => n.target === t)
  };
};
var Gw = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Uw = /* @__PURE__ */ ie('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), Jw = /* @__PURE__ */ ie('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Qw = /* @__PURE__ */ ie('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), eb = /* @__PURE__ */ ie('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input></div></div>', 1), tb = /* @__PURE__ */ ie('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), nb = /* @__PURE__ */ ie('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), rb = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ob = /* @__PURE__ */ ie('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), ib = /* @__PURE__ */ ie("<!> <!> <div></div> <!>", 1);
const ab = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function bf(e, t) {
  var n;
  he(t, !0), ot(e, ab);
  const r = y(t, "data", 7), o = /* @__PURE__ */ Ot(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), i = Et(), { addParameter: a } = qn(), s = Qt(), { updateNodeData: l } = s, u = ($) => {
    l(i, $);
  }, c = ($, g) => {
    var _;
    u({ [$]: (_ = g.target) == null ? void 0 : _.value });
  }, d = { ...o, id: i, data: r() }, v = document.createElement("div"), p = hr().customNodes[t.type];
  (n = p.render) == null || n.call(p, v, d, s);
  const h = p.forms;
  let x;
  vn(() => {
    r().expand && x && x.append(v);
  }), vn(() => {
    var $;
    r() && (($ = p.onUpdate) == null || $.call(p, v, { ...d, data: r() }));
  }), vn(() => {
    !r().parameters && p.parameters && u({
      parameters: na(JSON.parse(JSON.stringify(p.parameters)))
    });
  }), vn(() => {
    !r().outputDefs && p.outputDefs && u({
      outputDefs: na(JSON.parse(JSON.stringify(p.outputDefs)))
    });
  });
  const b = /* @__PURE__ */ Te(() => ({
    ...r(),
    description: p.description
  }));
  return Pn(e, mt(
    {
      get data() {
        return f(b);
      }
    },
    () => o,
    {
      icon: ($) => {
        var g = lt(), _ = Ce(g);
        Ts(_, () => p.icon), z($, g);
      },
      children: ($, g) => {
        var _ = ib(), w = Ce(_);
        {
          var k = (R) => {
            var L = Uw(), Z = Ce(L), E = j(Z);
            nt(E, {
              level: 3,
              children: (M, O) => {
                Re();
                var A = je("输入参数");
                z(M, A);
              },
              $$slots: { default: !0 }
            });
            var C = q(E, 2);
            {
              var P = (M) => {
                Je(M, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    a(i);
                  },
                  children: (O, A) => {
                    var Y = Gw();
                    z(O, Y);
                  },
                  $$slots: { default: !0 }
                });
              };
              xe(C, (M) => {
                p.parametersAddEnable !== !1 && M(P);
              });
            }
            X(Z);
            var H = q(Z, 2);
            Ut(H, {}), z(R, L);
          };
          xe(w, (R) => {
            p.parametersEnable !== !1 && R(k);
          });
        }
        var V = q(w, 2);
        {
          var S = (R) => {
            var L = lt(), Z = Ce(L);
            Zt(Z, 17, () => h, eo, (E, C) => {
              var P = lt(), H = Ce(P);
              {
                var M = (A) => {
                  var Y = Jw(), W = Ce(Y), U = j(W, !0);
                  X(W);
                  var Q = q(W, 2), F = j(Q);
                  const ge = /* @__PURE__ */ Te(() => r()[f(C).name] || f(C).defaultValue);
                  _t(F, mt(
                    {
                      get placeholder() {
                        return f(C).placeholder;
                      },
                      style: "width: 100%",
                      get value() {
                        return f(ge);
                      }
                    },
                    () => f(C).attrs,
                    {
                      onchange: (se) => {
                        c(f(C).name, se);
                      }
                    }
                  )), X(Q), Ee(() => bt(U, f(C).label)), z(A, Y);
                }, O = (A, Y) => {
                  {
                    var W = (Q) => {
                      var F = Qw(), ge = Ce(F), se = j(ge, !0);
                      X(ge);
                      var ye = q(ge, 2), le = j(ye);
                      const ke = /* @__PURE__ */ Te(() => r()[f(C).name] || f(C).defaultValue);
                      Mt(le, mt(
                        {
                          rows: 3,
                          get placeholder() {
                            return f(C).placeholder;
                          },
                          style: "width: 100%",
                          get value() {
                            return f(ke);
                          }
                        },
                        () => f(C).attrs,
                        {
                          onchange: ($e) => {
                            c(f(C).name, $e);
                          }
                        }
                      )), X(ye), Ee(() => bt(se, f(C).label)), z(Q, F);
                    }, U = (Q, F) => {
                      {
                        var ge = (ye) => {
                          var le = eb(), ke = Ce(le), $e = j(ke, !0);
                          X(ke);
                          var He = q(ke, 2), ce = j(He), J = j(ce), Pe = j(J);
                          X(J);
                          var K = q(J, 2);
                          lr(K);
                          var Ne = (De) => u({
                            [f(C).name]: parseFloat(De.target.value)
                          });
                          let qe;
                          X(ce), X(He), Ee(() => {
                            bt($e, f(C).label), bt(Pe, `${f(C).description ?? ""}: ${r()[f(C).name] ?? f(C).defaultValue ?? ""}`), qe = sn(
                              K,
                              qe,
                              {
                                class: "nodrag",
                                type: "range",
                                ...f(C).attrs,
                                value: r()[f(C).name] ?? f(C).defaultValue,
                                oninput: Ne
                              },
                              "svelte-q0cqsa"
                            );
                          }), z(ye, le);
                        }, se = (ye, le) => {
                          {
                            var ke = (He) => {
                              var ce = tb(), J = Ce(ce), Pe = j(J, !0);
                              X(J);
                              var K = q(J, 2), Ne = j(K);
                              const qe = /* @__PURE__ */ Te(() => f(C).options || []), De = /* @__PURE__ */ Te(() => r()[f(C).name] ? [r()[f(C).name]] : [f(C).defaultValue]);
                              hn(Ne, {
                                get items() {
                                  return f(qe);
                                },
                                style: "width: 100%",
                                get placeholder() {
                                  return f(C).placeholder;
                                },
                                onSelect: (de) => {
                                  const fe = de.value;
                                  u({ [f(C).name]: fe });
                                },
                                get value() {
                                  return f(De);
                                }
                              }), X(K), Ee(() => bt(Pe, f(C).label)), z(He, ce);
                            }, $e = (He, ce) => {
                              {
                                var J = (K) => {
                                  var Ne = nb(), qe = Ce(Ne), De = j(qe, !0);
                                  X(qe);
                                  var de = q(qe, 2), fe = j(de);
                                  qd(fe, {
                                    style: "width: 100%",
                                    get placeholder() {
                                      return f(C).placeholder;
                                    },
                                    onChosen: (ae, Ve, it) => {
                                      var rt, te;
                                      (te = (rt = f(C).chosen) == null ? void 0 : rt.onChosen) == null || te.call(rt, u, ae, Ve, it);
                                    },
                                    get value() {
                                      var ae;
                                      return r()[((ae = f(C).chosen) == null ? void 0 : ae.valueDataKey) || ""];
                                    },
                                    get label() {
                                      var ae;
                                      return r()[((ae = f(C).chosen) == null ? void 0 : ae.labelDataKey) || ""];
                                    }
                                  }), X(de), Ee(() => bt(De, f(C).label)), z(K, Ne);
                                }, Pe = (K, Ne) => {
                                  {
                                    var qe = (De) => {
                                      nt(De, mt({ level: 3, mt: "10px" }, () => f(C).attrs, {
                                        children: (de, fe) => {
                                          Re();
                                          var ae = je();
                                          Ee(() => bt(ae, f(C).label)), z(de, ae);
                                        },
                                        $$slots: { default: !0 }
                                      }));
                                    };
                                    xe(
                                      K,
                                      (De) => {
                                        f(C).type === "heading" && De(qe);
                                      },
                                      Ne
                                    );
                                  }
                                };
                                xe(
                                  He,
                                  (K) => {
                                    f(C).type === "chosen" ? K(J) : K(Pe, !1);
                                  },
                                  ce
                                );
                              }
                            };
                            xe(
                              ye,
                              (He) => {
                                f(C).type === "select" ? He(ke) : He($e, !1);
                              },
                              le
                            );
                          }
                        };
                        xe(
                          Q,
                          (ye) => {
                            f(C).type === "slider" ? ye(ge) : ye(se, !1);
                          },
                          F
                        );
                      }
                    };
                    xe(
                      A,
                      (Q) => {
                        f(C).type === "textarea" ? Q(W) : Q(U, !1);
                      },
                      Y
                    );
                  }
                };
                xe(H, (A) => {
                  f(C).type === "input" ? A(M) : A(O, !1);
                });
              }
              z(E, P);
            }), z(R, L);
          };
          xe(V, (R) => {
            h && R(S);
          });
        }
        var N = q(V, 2);
        zn(N, (R) => x = R, () => x);
        var T = q(N, 2);
        {
          var I = (R) => {
            var L = ob(), Z = Ce(L), E = j(Z);
            nt(E, {
              level: 3,
              mt: "10px",
              children: (M, O) => {
                Re();
                var A = je("输出参数");
                z(M, A);
              },
              $$slots: { default: !0 }
            });
            var C = q(E, 2);
            {
              var P = (M) => {
                Je(M, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    a(i, "outputDefs");
                  },
                  children: (O, A) => {
                    var Y = rb();
                    z(O, Y);
                  },
                  $$slots: { default: !0 }
                });
              };
              xe(C, (M) => {
                p.outputDefsAddEnable !== !1 && M(P);
              });
            }
            X(Z);
            var H = q(Z, 2);
            wr(H, {}), z(R, L);
          };
          xe(T, (R) => {
            p.outputDefsEnable !== !1 && R(I);
          });
        }
        Ee(() => {
          $t(N, p.rootStyle || ""), Lt(N, 1, Sn(p.rootClass), "svelte-q0cqsa");
        }), z($, _);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), me({
    get data() {
      return r();
    },
    set data($) {
      r($), m();
    }
  });
}
pe(bf, { data: {} }, [], [], !0);
const sb = () => {
  const e = tt();
  return {
    updateEdgeData: (t, n, r) => {
      const o = G(e.edgeLookup).get(t);
      if (!o)
        return;
      const i = typeof n == "function" ? n(o) : n;
      o.data = r != null && r.replace ? i : { ...o.data, ...i }, e.edges.update(
        (a) => a.map((s) => s.id === t ? o : s)
      );
    }
  };
};
var lb = /* @__PURE__ */ ie('<div class="panel-content svelte-1oe15vw"><div>边属性设置</div> <div class="setting-title svelte-1oe15vw">边条件设置</div> <div class="setting-item"><!></div></div>'), ub = /* @__PURE__ */ ie("<!> <!> <!> <!>", 1), cb = /* @__PURE__ */ ie('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const db = {
  hash: "svelte-1oe15vw",
  code: ".panel-content.svelte-1oe15vw {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-1oe15vw {margin:10px 0;font-size:12px;color:#999;}"
};
function xf(e, t) {
  he(t, !0), ot(e, db);
  const [n, r] = vt(), o = () => oe(N, "$nodes", n), i = () => oe(T, "$edges", n), a = () => oe(I, "$viewport", n), s = y(t, "onInit", 7), l = Qt();
  s()(l);
  let u = /* @__PURE__ */ It(!1), c = /* @__PURE__ */ It(void 0);
  const { updateEdgeData: d } = sb(), v = (M) => {
    M.preventDefault(), M.dataTransfer && (M.dataTransfer.dropEffect = "move");
  }, p = (M) => {
    var O;
    M.preventDefault();
    const A = l.screenToFlowPosition({
      x: M.clientX - 250,
      y: M.clientY - 100
    }), Y = (O = M.dataTransfer) == null ? void 0 : O.getData("application/tinyflow"), W = Y ? JSON.parse(Y) : {}, U = {
      id: `node_${lo()}`,
      position: A,
      data: {},
      ...W
    };
    Ei.addNode(U), Ei.selectNodeOnly(U.id);
  }, { getNode: h } = Ww(), x = (M) => {
    const O = h(M.source), A = h(M.target);
    if (M.sourceHandle === "loop_handle" || O.parentId) {
      const Y = l.getEdges();
      for (let W of Y)
        if (W.target === M.target) {
          const U = h(W.source);
          if (M.sourceHandle === "loop_handle" && U.parentId !== O.id || O.parentId && U.parentId !== O.parentId)
            return !1;
        }
    }
    return !(!O.parentId && A.parentId && A.parentId !== O.id);
  }, { ensureParentInNodesBefore: b } = Kw(), $ = (M, O) => {
    if (!O.isValid)
      return;
    const A = O.toNode;
    if (A.parentId)
      return;
    const Y = O.fromNode, W = O.fromHandle, U = { position: { ...A.position } };
    if (W.id === "loop_handle" ? U.parentId = Y.id : Y.parentId && (U.parentId = Y.parentId), U.parentId) {
      const Q = h(U.parentId);
      U.position = {
        x: A.position.x - Q.position.x,
        y: A.position.y - Q.position.y
      }, b(U.parentId, A.id), l.updateNode(A.id, U);
    }
  }, { getEdgesByTarget: g } = Fw(), _ = (M) => {
    M.edges.forEach((O) => {
      const A = h(O.target);
      if (A && A.parentId) {
        const Y = g(O.target), W = h(A.parentId);
        if (Y.length === 0)
          l.updateNode(A.id, {
            parentId: void 0,
            position: {
              x: A.position.x + W.position.x,
              y: A.position.y + W.position.y
            }
          });
        else {
          let U = !1;
          for (let Q = 0; Q < Y.length; Q++) {
            const F = Y[Q], ge = h(F.source);
            if (ge.parentId || ge.type === "loopNode") {
              U = !0;
              break;
            }
          }
          U || l.updateNode(A.id, {
            parentId: void 0,
            position: {
              x: A.position.x + W.position.x,
              y: A.position.y + W.position.y
            }
          });
        }
      }
    });
  }, w = (M, O) => {
  }, k = (M) => {
  }, V = {}, S = hr().customNodes;
  if (S)
    for (let M of Object.keys(S))
      V[M] = bf;
  const { nodes: N, edges: T, viewport: I } = tt(), R = hr().onDataChange;
  R && (N.subscribe(() => {
    R(
      {
        nodes: o(),
        edges: i(),
        viewport: a()
      },
      { eventType: "nodesChange" }
    );
  }), T.subscribe(() => {
    R(
      {
        nodes: o(),
        edges: i(),
        viewport: a()
      },
      { eventType: "edgesChange" }
    );
  }), I.subscribe(() => {
    R(
      {
        nodes: o(),
        edges: i(),
        viewport: a()
      },
      { eventType: "viewportChange" }
    );
  }));
  var L = cb(), Z = j(L);
  const E = /* @__PURE__ */ Te(() => ({ ...Zw, ...V })), C = /* @__PURE__ */ Te(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: Bo.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  Sd(Z, mt(
    {
      get nodeTypes() {
        return f(E);
      }
    },
    Ei,
    {
      class: "tinyflow-logo",
      isValidConnection: x,
      onconnectend: $,
      onconnectstart: w,
      onconnect: k,
      connectionRadius: 50,
      ondelete: _,
      onclick: (M) => {
        const O = M.target;
        O.classList.contains("svelte-flow__edge-interaction") || O.classList.contains("panel-content") || O.closest(".panel-content") || (ee(u, !1), ee(c, null));
      },
      get defaultEdgeOptions() {
        return f(C);
      },
      $$events: {
        drop: p,
        dragover: v,
        edgeclick: (M) => {
          ee(u, !0), ee(c, M.detail.edge, !0);
        }
      },
      children: (M, O) => {
        var A = ub(), Y = Ce(A);
        Ld(Y, {});
        var W = q(Y, 2);
        Td(W, {});
        var U = q(W, 2);
        Ad(U, {});
        var Q = q(U, 2);
        {
          var F = (ge) => {
            ri(ge, {
              children: (se, ye) => {
                var le = lb(), ke = q(j(le), 4), $e = j(ke);
                const He = /* @__PURE__ */ Te(() => {
                  var ce, J;
                  return (J = (ce = f(c)) == null ? void 0 : ce.data) == null ? void 0 : J.condition;
                });
                Mt($e, {
                  rows: 3,
                  placeholder: "请输入边条件",
                  style: "width: 100%",
                  get value() {
                    return f(He);
                  },
                  onchange: (ce) => {
                    f(c) && d(f(c).id, { condition: ce.target.value });
                  }
                }), X(ke), X(le), z(se, le);
              },
              $$slots: { default: !0 }
            });
          };
          xe(Q, (ge) => {
            f(u) && ge(F);
          });
        }
        z(M, A);
      },
      $$slots: { default: !0 }
    }
  ));
  var P = q(Z, 2);
  wf(P, {}), X(L), z(e, L);
  var H = me({
    get onInit() {
      return s();
    },
    set onInit(M) {
      s(M), m();
    }
  });
  return r(), H;
}
pe(xf, { onInit: {} }, [], [], !0);
function fb(e, t) {
  he(t, !0);
  const n = y(t, "options", 7), r = y(t, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  return Ei.init((o == null ? void 0 : o.nodes) || [], (o == null ? void 0 : o.edges) || []), Qr("tinyflow_options", n()), Ed(e, {
    fitView: !0,
    children: (i, a) => {
      xf(i, {
        get onInit() {
          return r();
        }
      });
    },
    $$slots: { default: !0 }
  }), me({
    get options() {
      return n();
    },
    set options(i) {
      n(i), m();
    },
    get onInit() {
      return r();
    },
    set onInit(i) {
      r(i), m();
    }
  });
}
customElements.define("tinyflow-component", pe(fb, { options: {}, onInit: {} }, [], [], !1));
const hb = _f((e, t) => {
  const n = tl(null), r = tl(null);
  kf(t, () => ({
    getData: () => r.current ? r.current.getData() : (console.warn("Tinyflow instance is not initialized"), null)
  }));
  const { data: o, style: i, className: a } = e;
  return Sf(() => {
    if (n.current) {
      const s = new Um({
        ...e,
        element: n.current
        // data: data
      });
      return r.current = s, () => {
        s.destroy(), r.current = null;
      };
    }
  }, [o]), /* @__PURE__ */ Vf.jsx("div", { ref: n, style: { height: "600px", ...i }, className: a });
});
export {
  hb as Tinyflow
};
//# sourceMappingURL=index.js.map
