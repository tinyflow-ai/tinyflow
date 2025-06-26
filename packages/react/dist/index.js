import gu, { forwardRef as kf, useRef as tl, useImperativeHandle as Ef, useEffect as Sf } from "react";
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
function Pf() {
  if (nl) return bo;
  nl = 1;
  var e = gu, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
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
function Mf() {
  return rl || (rl = 1, process.env.NODE_ENV !== "production" && function() {
    var e = gu, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), h = Symbol.iterator, x = "@@iterator";
    function b(L) {
      if (L === null || typeof L != "object")
        return null;
      var ne = h && L[h] || L[x];
      return typeof ne == "function" ? ne : null;
    }
    var $ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(L) {
      {
        for (var ne = arguments.length, we = new Array(ne > 1 ? ne - 1 : 0), Ie = 1; Ie < ne; Ie++)
          we[Ie - 1] = arguments[Ie];
        _("error", L, we);
      }
    }
    function _(L, ne, we) {
      {
        var Ie = $.ReactDebugCurrentFrame, Z = Ie.getStackAddendum();
        Z !== "" && (ne += "%s", we = we.concat([Z]));
        var lt = we.map(function(Fe) {
          return String(Fe);
        });
        lt.unshift("Warning: " + ne), Function.prototype.apply.call(console[L], console, lt);
      }
    }
    var w = !1, k = !1, O = !1, E = !1, N = !1, H;
    H = Symbol.for("react.module.reference");
    function I(L) {
      return !!(typeof L == "string" || typeof L == "function" || L === r || L === i || N || L === o || L === u || L === c || E || L === p || w || k || O || typeof L == "object" && L !== null && (L.$$typeof === v || L.$$typeof === d || L.$$typeof === a || L.$$typeof === s || L.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      L.$$typeof === H || L.getModuleId !== void 0));
    }
    function q(L, ne, we) {
      var Ie = L.displayName;
      if (Ie)
        return Ie;
      var Z = ne.displayName || ne.name || "";
      return Z !== "" ? we + "(" + Z + ")" : we;
    }
    function D(L) {
      return L.displayName || "Context";
    }
    function B(L) {
      if (L == null)
        return null;
      if (typeof L.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof L == "function")
        return L.displayName || L.name || null;
      if (typeof L == "string")
        return L;
      switch (L) {
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
      if (typeof L == "object")
        switch (L.$$typeof) {
          case s:
            var ne = L;
            return D(ne) + ".Consumer";
          case a:
            var we = L;
            return D(we._context) + ".Provider";
          case l:
            return q(L, L.render, "ForwardRef");
          case d:
            var Ie = L.displayName || null;
            return Ie !== null ? Ie : B(L.type) || "Memo";
          case v: {
            var Z = L, lt = Z._payload, Fe = Z._init;
            try {
              return B(Fe(lt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, C = 0, P, V, T, M, z, j, K;
    function te() {
    }
    te.__reactDisabledLog = !0;
    function G() {
      {
        if (C === 0) {
          P = console.log, V = console.info, T = console.warn, M = console.error, z = console.group, j = console.groupCollapsed, K = console.groupEnd;
          var L = {
            configurable: !0,
            enumerable: !0,
            value: te,
            writable: !0
          };
          Object.defineProperties(console, {
            info: L,
            log: L,
            warn: L,
            error: L,
            group: L,
            groupCollapsed: L,
            groupEnd: L
          });
        }
        C++;
      }
    }
    function X() {
      {
        if (C--, C === 0) {
          var L = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, L, {
              value: P
            }),
            info: S({}, L, {
              value: V
            }),
            warn: S({}, L, {
              value: T
            }),
            error: S({}, L, {
              value: M
            }),
            group: S({}, L, {
              value: z
            }),
            groupCollapsed: S({}, L, {
              value: j
            }),
            groupEnd: S({}, L, {
              value: K
            })
          });
        }
        C < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ye = $.ReactCurrentDispatcher, ae;
    function ge(L, ne, we) {
      {
        if (ae === void 0)
          try {
            throw Error();
          } catch (Z) {
            var Ie = Z.stack.trim().match(/\n( *(at )?)/);
            ae = Ie && Ie[1] || "";
          }
        return `
` + ae + L;
      }
    }
    var ue = !1, Ee;
    {
      var xe = typeof WeakMap == "function" ? WeakMap : Map;
      Ee = new xe();
    }
    function Ne(L, ne) {
      if (!L || ue)
        return "";
      {
        var we = Ee.get(L);
        if (we !== void 0)
          return we;
      }
      var Ie;
      ue = !0;
      var Z = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var lt;
      lt = ye.current, ye.current = null, G();
      try {
        if (ne) {
          var Fe = function() {
            throw Error();
          };
          if (Object.defineProperty(Fe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Fe, []);
            } catch (Vt) {
              Ie = Vt;
            }
            Reflect.construct(L, [], Fe);
          } else {
            try {
              Fe.call();
            } catch (Vt) {
              Ie = Vt;
            }
            L.call(Fe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Vt) {
            Ie = Vt;
          }
          L();
        }
      } catch (Vt) {
        if (Vt && Ie && typeof Vt.stack == "string") {
          for (var Ze = Vt.stack.split(`
`), At = Ie.stack.split(`
`), pt = Ze.length - 1, ht = At.length - 1; pt >= 1 && ht >= 0 && Ze[pt] !== At[ht]; )
            ht--;
          for (; pt >= 1 && ht >= 0; pt--, ht--)
            if (Ze[pt] !== At[ht]) {
              if (pt !== 1 || ht !== 1)
                do
                  if (pt--, ht--, ht < 0 || Ze[pt] !== At[ht]) {
                    var Xt = `
` + Ze[pt].replace(" at new ", " at ");
                    return L.displayName && Xt.includes("<anonymous>") && (Xt = Xt.replace("<anonymous>", L.displayName)), typeof L == "function" && Ee.set(L, Xt), Xt;
                  }
                while (pt >= 1 && ht >= 0);
              break;
            }
        }
      } finally {
        ue = !1, ye.current = lt, X(), Error.prepareStackTrace = Z;
      }
      var tr = L ? L.displayName || L.name : "", nr = tr ? ge(tr) : "";
      return typeof L == "function" && Ee.set(L, nr), nr;
    }
    function de(L, ne, we) {
      return Ne(L, !1);
    }
    function Q(L) {
      var ne = L.prototype;
      return !!(ne && ne.isReactComponent);
    }
    function Pe(L, ne, we) {
      if (L == null)
        return "";
      if (typeof L == "function")
        return Ne(L, Q(L));
      if (typeof L == "string")
        return ge(L);
      switch (L) {
        case u:
          return ge("Suspense");
        case c:
          return ge("SuspenseList");
      }
      if (typeof L == "object")
        switch (L.$$typeof) {
          case l:
            return de(L.render);
          case d:
            return Pe(L.type, ne, we);
          case v: {
            var Ie = L, Z = Ie._payload, lt = Ie._init;
            try {
              return Pe(lt(Z), ne, we);
            } catch {
            }
          }
        }
      return "";
    }
    var F = Object.prototype.hasOwnProperty, _e = {}, De = $.ReactDebugCurrentFrame;
    function Le(L) {
      if (L) {
        var ne = L._owner, we = Pe(L.type, L._source, ne ? ne.type : null);
        De.setExtraStackFrame(we);
      } else
        De.setExtraStackFrame(null);
    }
    function ce(L, ne, we, Ie, Z) {
      {
        var lt = Function.call.bind(F);
        for (var Fe in L)
          if (lt(L, Fe)) {
            var Ze = void 0;
            try {
              if (typeof L[Fe] != "function") {
                var At = Error((Ie || "React class") + ": " + we + " type `" + Fe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof L[Fe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw At.name = "Invariant Violation", At;
              }
              Ze = L[Fe](ne, Fe, Ie, we, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (pt) {
              Ze = pt;
            }
            Ze && !(Ze instanceof Error) && (Le(Z), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ie || "React class", we, Fe, typeof Ze), Le(null)), Ze instanceof Error && !(Ze.message in _e) && (_e[Ze.message] = !0, Le(Z), g("Failed %s type: %s", we, Ze.message), Le(null));
          }
      }
    }
    var fe = Array.isArray;
    function ve(L) {
      return fe(L);
    }
    function Se(L) {
      {
        var ne = typeof Symbol == "function" && Symbol.toStringTag, we = ne && L[Symbol.toStringTag] || L.constructor.name || "Object";
        return we;
      }
    }
    function at(L) {
      try {
        return ct(L), !1;
      } catch {
        return !0;
      }
    }
    function ct(L) {
      return "" + L;
    }
    function J(L) {
      if (at(L))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Se(L)), ct(L);
    }
    var Ae = $.ReactCurrentOwner, se = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, kt, Et;
    function Dt(L) {
      if (F.call(L, "ref")) {
        var ne = Object.getOwnPropertyDescriptor(L, "ref").get;
        if (ne && ne.isReactWarning)
          return !1;
      }
      return L.ref !== void 0;
    }
    function ze(L) {
      if (F.call(L, "key")) {
        var ne = Object.getOwnPropertyDescriptor(L, "key").get;
        if (ne && ne.isReactWarning)
          return !1;
      }
      return L.key !== void 0;
    }
    function ot(L, ne) {
      typeof L.ref == "string" && Ae.current;
    }
    function Ye(L, ne) {
      {
        var we = function() {
          kt || (kt = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ne));
        };
        we.isReactWarning = !0, Object.defineProperty(L, "key", {
          get: we,
          configurable: !0
        });
      }
    }
    function je(L, ne) {
      {
        var we = function() {
          Et || (Et = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ne));
        };
        we.isReactWarning = !0, Object.defineProperty(L, "ref", {
          get: we,
          configurable: !0
        });
      }
    }
    var Je = function(L, ne, we, Ie, Z, lt, Fe) {
      var Ze = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: L,
        key: ne,
        ref: we,
        props: Fe,
        // Record the component responsible for creating this element.
        _owner: lt
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
        value: Ie
      }), Object.defineProperty(Ze, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Z
      }), Object.freeze && (Object.freeze(Ze.props), Object.freeze(Ze)), Ze;
    };
    function Ct(L, ne, we, Ie, Z) {
      {
        var lt, Fe = {}, Ze = null, At = null;
        we !== void 0 && (J(we), Ze = "" + we), ze(ne) && (J(ne.key), Ze = "" + ne.key), Dt(ne) && (At = ne.ref, ot(ne, Z));
        for (lt in ne)
          F.call(ne, lt) && !se.hasOwnProperty(lt) && (Fe[lt] = ne[lt]);
        if (L && L.defaultProps) {
          var pt = L.defaultProps;
          for (lt in pt)
            Fe[lt] === void 0 && (Fe[lt] = pt[lt]);
        }
        if (Ze || At) {
          var ht = typeof L == "function" ? L.displayName || L.name || "Unknown" : L;
          Ze && Ye(Fe, ht), At && je(Fe, ht);
        }
        return Je(L, Ze, At, Z, Ie, Ae.current, Fe);
      }
    }
    var Lt = $.ReactCurrentOwner, Qn = $.ReactDebugCurrentFrame;
    function yt(L) {
      if (L) {
        var ne = L._owner, we = Pe(L.type, L._source, ne ? ne.type : null);
        Qn.setExtraStackFrame(we);
      } else
        Qn.setExtraStackFrame(null);
    }
    var St;
    St = !1;
    function Mn(L) {
      return typeof L == "object" && L !== null && L.$$typeof === t;
    }
    function st() {
      {
        if (Lt.current) {
          var L = B(Lt.current.type);
          if (L)
            return `

Check the render method of \`` + L + "`.";
        }
        return "";
      }
    }
    function yo(L) {
      return "";
    }
    var er = {};
    function qt(L) {
      {
        var ne = st();
        if (!ne) {
          var we = typeof L == "string" ? L : L.displayName || L.name;
          we && (ne = `

Check the top-level render call using <` + we + ">.");
        }
        return ne;
      }
    }
    function br(L, ne) {
      {
        if (!L._store || L._store.validated || L.key != null)
          return;
        L._store.validated = !0;
        var we = qt(ne);
        if (er[we])
          return;
        er[we] = !0;
        var Ie = "";
        L && L._owner && L._owner !== Lt.current && (Ie = " It was passed a child from " + B(L._owner.type) + "."), yt(L), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', we, Ie), yt(null);
      }
    }
    function xr(L, ne) {
      {
        if (typeof L != "object")
          return;
        if (ve(L))
          for (var we = 0; we < L.length; we++) {
            var Ie = L[we];
            Mn(Ie) && br(Ie, ne);
          }
        else if (Mn(L))
          L._store && (L._store.validated = !0);
        else if (L) {
          var Z = b(L);
          if (typeof Z == "function" && Z !== L.entries)
            for (var lt = Z.call(L), Fe; !(Fe = lt.next()).done; )
              Mn(Fe.value) && br(Fe.value, ne);
        }
      }
    }
    function zr(L) {
      {
        var ne = L.type;
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
          var Ie = B(ne);
          ce(we, L.props, "prop", Ie, L);
        } else if (ne.PropTypes !== void 0 && !St) {
          St = !0;
          var Z = B(ne);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Z || "Unknown");
        }
        typeof ne.getDefaultProps == "function" && !ne.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function wo(L) {
      {
        for (var ne = Object.keys(L.props), we = 0; we < ne.length; we++) {
          var Ie = ne[we];
          if (Ie !== "children" && Ie !== "key") {
            yt(L), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ie), yt(null);
            break;
          }
        }
        L.ref !== null && (yt(L), g("Invalid attribute `ref` supplied to `React.Fragment`."), yt(null));
      }
    }
    var si = {};
    function li(L, ne, we, Ie, Z, lt) {
      {
        var Fe = I(L);
        if (!Fe) {
          var Ze = "";
          (L === void 0 || typeof L == "object" && L !== null && Object.keys(L).length === 0) && (Ze += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var At = yo();
          At ? Ze += At : Ze += st();
          var pt;
          L === null ? pt = "null" : ve(L) ? pt = "array" : L !== void 0 && L.$$typeof === t ? (pt = "<" + (B(L.type) || "Unknown") + " />", Ze = " Did you accidentally export a JSX literal instead of a component?") : pt = typeof L, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", pt, Ze);
        }
        var ht = Ct(L, ne, we, Z, lt);
        if (ht == null)
          return ht;
        if (Fe) {
          var Xt = ne.children;
          if (Xt !== void 0)
            if (Ie)
              if (ve(Xt)) {
                for (var tr = 0; tr < Xt.length; tr++)
                  xr(Xt[tr], L);
                Object.freeze && Object.freeze(Xt);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              xr(Xt, L);
        }
        if (F.call(ne, "key")) {
          var nr = B(L), Vt = Object.keys(ne).filter(function(ci) {
            return ci !== "key";
          }), Ir = Vt.length > 0 ? "{key: someKey, " + Vt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!si[nr + Ir]) {
            var ui = Vt.length > 0 ? "{" + Vt.join(": ..., ") + ": ...}" : "{}";
            g(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ir, nr, ui, nr), si[nr + Ir] = !0;
          }
        }
        return L === r ? wo(ht) : zr(ht), ht;
      }
    }
    function Ea(L, ne, we) {
      return li(L, ne, we, !0);
    }
    function Sa(L, ne, we) {
      return li(L, ne, we, !1);
    }
    var Pa = Sa, Ma = Ea;
    xo.Fragment = r, xo.jsx = Pa, xo.jsxs = Ma;
  }()), xo;
}
var ol;
function Of() {
  return ol || (ol = 1, process.env.NODE_ENV === "production" ? di.exports = Pf() : di.exports = Mf()), di.exports;
}
var Tf = Of(), Vf = Object.defineProperty, hu = (e) => {
  throw TypeError(e);
}, Hf = (e, t, n) => t in e ? Vf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ut = (e, t, n) => Hf(e, typeof t != "symbol" ? t + "" : t, n), hs = (e, t, n) => t.has(e) || hu("Cannot " + n), wt = (e, t, n) => (hs(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Zr = (e, t, n) => t.has(e) ? hu("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Pi = (e, t, n, r) => (hs(e, t, "write to private field"), t.set(e, n), n), Nf = (e, t, n) => (hs(e, t, "access private method"), n);
const Df = "5";
var il;
typeof window < "u" && ((il = window.__svelte ?? (window.__svelte = {})).v ?? (il.v = /* @__PURE__ */ new Set())).add(Df);
let uo = !1, Lf = !1;
function Af() {
  uo = !0;
}
Af();
const ms = 1, ys = 2, mu = 4, zf = 8, If = 16, Rf = 1, qf = 2, yu = 4, Bf = 8, Zf = 16, wu = 1, Yf = 2, ws = "[", bs = "[!", xs = "]", jr = {}, Ft = Symbol(), jf = "http://www.w3.org/1999/xhtml", Wf = "http://www.w3.org/2000/svg", Kf = !1;
function ra(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
var Xo = Array.isArray, Xf = Array.prototype.indexOf, $s = Array.from, Mi = Object.keys, Vo = Object.defineProperty, jn = Object.getOwnPropertyDescriptor, bu = Object.getOwnPropertyDescriptors, Ff = Object.prototype, Gf = Array.prototype, Cs = Object.getPrototypeOf, al = Object.isExtensible;
function $o(e) {
  return typeof e == "function";
}
const Ot = () => {
};
function Uf(e) {
  return e();
}
function Ho(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const $n = 2, xu = 4, oa = 8, _s = 16, Un = 32, Dr = 64, Oi = 128, an = 256, Ti = 512, jt = 1024, Hn = 2048, mr = 4096, Wn = 8192, ia = 16384, Jf = 32768, co = 65536, Qf = 1 << 17, ev = 1 << 19, $u = 1 << 20, Ya = 1 << 21, lr = Symbol("$state"), ks = Symbol("legacy props"), tv = Symbol("");
function nv(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function rv() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function ov(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function iv() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function av() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function sv(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function lv() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function uv() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function cv() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function aa(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let Be = !1;
function on(e) {
  Be = e;
}
let Xe;
function Yt(e) {
  if (e === null)
    throw aa(), jr;
  return Xe = e;
}
function Nn() {
  return Yt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ In(Xe)
  );
}
function Y(e) {
  if (Be) {
    if (/* @__PURE__ */ In(Xe) !== null)
      throw aa(), jr;
    Xe = e;
  }
}
function Re(e = 1) {
  if (Be) {
    for (var t = e, n = Xe; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ In(n);
    Xe = n;
  }
}
function ja() {
  for (var e = 0, t = Xe; ; ) {
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
  if (typeof e != "object" || e === null || lr in e)
    return e;
  const t = Cs(e);
  if (t !== Ff && t !== Gf)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Xo(e), o = /* @__PURE__ */ Zt(0), i = dt, a = (s) => {
    var l = dt;
    Dn(i);
    var u = s();
    return Dn(l), u;
  };
  return r && n.set("length", /* @__PURE__ */ Zt(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(s, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && lv();
        var c = n.get(l);
        return c === void 0 ? (c = a(() => /* @__PURE__ */ Zt(u.value)), n.set(l, c)) : ee(
          c,
          a(() => bn(u.value))
        ), !0;
      },
      deleteProperty(s, l) {
        var u = n.get(l);
        if (u === void 0)
          l in s && (n.set(
            l,
            a(() => /* @__PURE__ */ Zt(Ft))
          ), Oa(o));
        else {
          if (r && typeof l == "string") {
            var c = (
              /** @type {Source<number>} */
              n.get("length")
            ), d = Number(l);
            Number.isInteger(d) && d < c.v && ee(c, d);
          }
          ee(u, Ft), Oa(o);
        }
        return !0;
      },
      get(s, l, u) {
        var c;
        if (l === lr)
          return e;
        var d = n.get(l), v = l in s;
        if (d === void 0 && (!v || (c = jn(s, l)) != null && c.writable) && (d = a(() => /* @__PURE__ */ Zt(bn(v ? s[l] : Ft))), n.set(l, d)), d !== void 0) {
          var p = f(d);
          return p === Ft ? void 0 : p;
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
          if (d !== void 0 && v !== Ft)
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
        if (l === lr)
          return !0;
        var c = n.get(l), d = c !== void 0 && c.v !== Ft || Reflect.has(s, l);
        if (c !== void 0 || nt !== null && (!d || (u = jn(s, l)) != null && u.writable)) {
          c === void 0 && (c = a(() => /* @__PURE__ */ Zt(d ? bn(s[l]) : Ft)), n.set(l, c));
          var v = f(c);
          if (v === Ft)
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
            x !== void 0 ? ee(x, Ft) : h in s && (x = a(() => /* @__PURE__ */ Zt(Ft)), n.set(h + "", x));
          }
        v === void 0 ? (!p || (d = jn(s, l)) != null && d.writable) && (v = a(() => /* @__PURE__ */ Zt(void 0)), ee(
          v,
          a(() => bn(u))
        ), n.set(l, v)) : (p = v.v !== Ft, ee(
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
          Oa(o);
        }
        return !0;
      },
      ownKeys(s) {
        f(o);
        var l = Reflect.ownKeys(s).filter((d) => {
          var v = n.get(d);
          return v === void 0 || v.v !== Ft;
        });
        for (var [u, c] of n)
          c.v !== Ft && !(u in s) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        uv();
      }
    }
  );
}
function Oa(e, t = 1) {
  ee(e, e.v + t);
}
var Gt, Cu, _u, ku;
function Wa() {
  if (Gt === void 0) {
    Gt = window, Cu = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    _u = jn(t, "firstChild").get, ku = jn(t, "nextSibling").get, al(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), al(n) && (n.__t = void 0);
  }
}
function Fn(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Mt(e) {
  return _u.call(e);
}
// @__NO_SIDE_EFFECTS__
function In(e) {
  return ku.call(e);
}
function W(e, t) {
  if (!Be)
    return /* @__PURE__ */ Mt(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Mt(Xe)
  );
  if (n === null)
    n = Xe.appendChild(Fn());
  else if (t && n.nodeType !== 3) {
    var r = Fn();
    return n == null || n.before(r), Yt(r), r;
  }
  return Yt(n), n;
}
function Ce(e, t) {
  if (!Be) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Mt(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ In(n) : n;
  }
  return Xe;
}
function R(e, t = 1, n = !1) {
  let r = Be ? Xe : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ In(r);
  if (!Be)
    return r;
  var i = r == null ? void 0 : r.nodeType;
  if (n && i !== 3) {
    var a = Fn();
    return r === null ? o == null || o.after(a) : r.before(a), Yt(a), a;
  }
  return Yt(r), /** @type {TemplateNode} */
  r;
}
function Es(e) {
  e.textContent = "";
}
function Eu(e) {
  return e === this.v;
}
function Ss(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Ps(e) {
  return !Ss(e, this.v);
}
// @__NO_SIDE_EFFECTS__
function Ur(e) {
  var t = $n | Hn, n = dt !== null && (dt.f & $n) !== 0 ? (
    /** @type {Derived} */
    dt
  ) : null;
  return nt === null || n !== null && (n.f & an) !== 0 ? t |= an : nt.f |= $u, {
    ctx: tt,
    deps: null,
    effects: null,
    equals: Eu,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: n ?? nt
  };
}
// @__NO_SIDE_EFFECTS__
function He(e) {
  const t = /* @__PURE__ */ Ur(e);
  return Iu(t), t;
}
// @__NO_SIDE_EFFECTS__
function ke(e) {
  const t = /* @__PURE__ */ Ur(e);
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
function dv(e) {
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
function Pu(e) {
  var t, n = nt;
  vr(dv(e));
  try {
    Su(e), t = Zu(e);
  } finally {
    vr(n);
  }
  return t;
}
function Mu(e) {
  var t = Pu(e), n = (ar || (e.f & an) !== 0) && e.deps !== null ? mr : jt;
  gn(e, n), e.equals(t) || (e.v = t, e.wv = qu());
}
function Ou(e) {
  nt === null && dt === null && ov(), dt !== null && (dt.f & an) !== 0 && nt === null && rv(), Go && nv();
}
function fv(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Lr(e, t, n, r = !0) {
  var o = nt, i = {
    ctx: tt,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Hn,
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
      la(i), i.f |= Jf;
    } catch (l) {
      throw Cn(i), l;
    }
  else t !== null && ua(i);
  var a = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & ($u | Oi)) === 0;
  if (!a && r && (o !== null && fv(i, o), dt !== null && (dt.f & $n) !== 0)) {
    var s = (
      /** @type {Derived} */
      dt
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return i;
}
function Ms(e) {
  const t = Lr(oa, null, !1);
  return gn(t, jt), t.teardown = e, t;
}
function vn(e) {
  Ou();
  var t = nt !== null && (nt.f & Un) !== 0 && tt !== null && !tt.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      tt
    );
    (n.e ?? (n.e = [])).push({
      fn: e,
      effect: nt,
      reaction: dt
    });
  } else {
    var r = rn(e);
    return r;
  }
}
function vv(e) {
  return Ou(), fo(e);
}
function pv(e) {
  const t = Lr(Dr, e, !0);
  return () => {
    Cn(t);
  };
}
function gv(e) {
  const t = Lr(Dr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Jr(t, () => {
      Cn(t), r(void 0);
    }) : (Cn(t), r(void 0));
  });
}
function rn(e) {
  return Lr(xu, e, !1);
}
function be(e, t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    tt
  ), r = { effect: null, ran: !1 };
  n.l.r1.push(r), r.effect = fo(() => {
    e(), !r.ran && (r.ran = !0, ee(n.l.r2, !0), Ln(t));
  });
}
function Ht() {
  var e = (
    /** @type {ComponentContextLegacy} */
    tt
  );
  fo(() => {
    if (f(e.l.r2)) {
      for (var t of e.l.r1) {
        var n = t.effect;
        (n.f & jt) !== 0 && gn(n, mr), po(n) && la(n), t.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function fo(e) {
  return Lr(oa, e, !0);
}
function Oe(e, t = [], n = Ur) {
  const r = t.map(n);
  return vo(() => e(...r.map(f)));
}
function vo(e, t = 0) {
  return Lr(oa | _s | t, e, !0);
}
function fr(e, t = !0) {
  return Lr(oa | Un, e, !0, t);
}
function Tu(e) {
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
function Vu(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    var r = n.next;
    (n.f & Dr) !== 0 ? n.parent = null : Cn(n, t), n = r;
  }
}
function hv(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Un) === 0 && Cn(t), t = n;
  }
}
function Cn(e, t = !0) {
  var n = !1;
  (t || (e.f & ev) !== 0) && e.nodes_start !== null && (Hu(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), Vu(e, t && !n), Di(e, 0), gn(e, ia);
  var r = e.transitions;
  if (r !== null)
    for (const i of r)
      i.stop();
  Tu(e);
  var o = e.parent;
  o !== null && o.first !== null && Nu(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
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
function Nu(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Jr(e, t) {
  var n = [];
  Os(e, n, !0), Du(n, () => {
    Cn(e), t && t();
  });
}
function Du(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var o of e)
      o.out(r);
  } else
    t();
}
function Os(e, t, n) {
  if ((e.f & Wn) === 0) {
    if (e.f ^= Wn, e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || n) && t.push(a);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & co) !== 0 || (r.f & Un) !== 0;
      Os(r, t, i ? n : !1), r = o;
    }
  }
}
function No(e) {
  Lu(e, !0);
}
function Lu(e, t) {
  if ((e.f & Wn) !== 0) {
    e.f ^= Wn, (e.f & jt) === 0 && (e.f ^= jt), po(e) && (gn(e, Hn), ua(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & co) !== 0 || (n.f & Un) !== 0;
      Lu(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
const mv = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let Do = [], Lo = [];
function Au() {
  var e = Do;
  Do = [], Ho(e);
}
function zu() {
  var e = Lo;
  Lo = [], Ho(e);
}
function Fo(e) {
  Do.length === 0 && queueMicrotask(Au), Do.push(e);
}
function yv(e) {
  Lo.length === 0 && mv(zu), Lo.push(e);
}
function sl() {
  Do.length > 0 && Au(), Lo.length > 0 && zu();
}
let wi = !1, Vi = !1, Hi = null, kr = !1, Go = !1;
function ll(e) {
  Go = e;
}
let Oo = [], dt = null, On = !1;
function Dn(e) {
  dt = e;
}
let nt = null;
function vr(e) {
  nt = e;
}
let pn = null;
function Iu(e) {
  dt !== null && dt.f & Ya && (pn === null ? pn = [e] : pn.push(e));
}
let Bt = null, nn = 0, dn = null;
function wv(e) {
  dn = e;
}
let Ru = 1, Ni = 0, ar = !1;
function qu() {
  return ++Ru;
}
function po(e) {
  var t, n = e.f;
  if ((n & Hn) !== 0)
    return !0;
  if ((n & mr) !== 0) {
    var r = e.deps, o = (n & an) !== 0;
    if (r !== null) {
      var i, a, s = (n & Ti) !== 0, l = o && nt !== null && !ar, u = r.length;
      if (s || l) {
        var c = (
          /** @type {Derived} */
          e
        ), d = c.parent;
        for (i = 0; i < u; i++)
          a = r[i], (s || !((t = a == null ? void 0 : a.reactions) != null && t.includes(c))) && (a.reactions ?? (a.reactions = [])).push(c);
        s && (c.f ^= Ti), l && d !== null && (d.f & an) === 0 && (c.f ^= an);
      }
      for (i = 0; i < u; i++)
        if (a = r[i], po(
          /** @type {Derived} */
          a
        ) && Mu(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!o || nt !== null && !ar) && gn(e, jt);
  }
  return !1;
}
function bv(e, t) {
  for (var n = t; n !== null; ) {
    if ((n.f & Oi) !== 0)
      try {
        n.fn(e);
        return;
      } catch {
        n.f ^= Oi;
      }
    n = n.parent;
  }
  throw wi = !1, e;
}
function ul(e) {
  return (e.f & ia) === 0 && (e.parent === null || (e.parent.f & Oi) === 0);
}
function sa(e, t, n, r) {
  if (wi) {
    if (n === null && (wi = !1), ul(t))
      throw e;
    return;
  }
  if (n !== null && (wi = !0), bv(e, t), ul(t))
    throw e;
}
function Bu(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null)
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      pn != null && pn.includes(e) || ((i.f & $n) !== 0 ? Bu(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? gn(i, Hn) : (i.f & jt) !== 0 && gn(i, mr), ua(
        /** @type {Effect} */
        i
      )));
    }
}
function Zu(e) {
  var t, n = Bt, r = nn, o = dn, i = dt, a = ar, s = pn, l = tt, u = On, c = e.f;
  Bt = /** @type {null | Value[]} */
  null, nn = 0, dn = null, ar = (c & an) !== 0 && (On || !kr || dt === null), dt = (c & (Un | Dr)) === 0 ? e : null, pn = null, dl(e.ctx), On = !1, Ni++, e.f |= Ya;
  try {
    var d = (
      /** @type {Function} */
      (0, e.fn)()
    ), v = e.deps;
    if (Bt !== null) {
      var p;
      if (Di(e, nn), v !== null && nn > 0)
        for (v.length = nn + Bt.length, p = 0; p < Bt.length; p++)
          v[nn + p] = Bt[p];
      else
        e.deps = v = Bt;
      if (!ar)
        for (p = nn; p < v.length; p++)
          ((t = v[p]).reactions ?? (t.reactions = [])).push(e);
    } else v !== null && nn < v.length && (Di(e, nn), v.length = nn);
    if (ca() && dn !== null && !On && v !== null && (e.f & ($n | mr | Hn)) === 0)
      for (p = 0; p < /** @type {Source[]} */
      dn.length; p++)
        Bu(
          dn[p],
          /** @type {Effect} */
          e
        );
    return i !== null && i !== e && (Ni++, dn !== null && (o === null ? o = dn : o.push(.../** @type {Source[]} */
    dn))), d;
  } finally {
    Bt = n, nn = r, dn = o, dt = i, ar = a, pn = s, dl(l), On = u, e.f ^= Ya;
  }
}
function xv(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Xf.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && (t.f & $n) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Bt === null || !Bt.includes(t)) && (gn(t, mr), (t.f & (an | Ti)) === 0 && (t.f ^= Ti), Su(
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
      xv(e, n[r]);
}
function la(e) {
  var t = e.f;
  if ((t & ia) === 0) {
    gn(e, jt);
    var n = nt, r = tt, o = kr;
    nt = e, kr = !0;
    try {
      (t & _s) !== 0 ? hv(e) : Vu(e), Tu(e);
      var i = Zu(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Ru;
      var a = e.deps, s;
      Kf && Lf && e.f & Hn;
    } catch (l) {
      sa(l, e, n, r || e.ctx);
    } finally {
      kr = o, nt = n;
    }
  }
}
function $v() {
  try {
    iv();
  } catch (e) {
    if (Hi !== null)
      sa(e, Hi, null);
    else
      throw e;
  }
}
function Yu() {
  var e = kr;
  try {
    var t = 0;
    for (kr = !0; Oo.length > 0; ) {
      t++ > 1e3 && $v();
      var n = Oo, r = n.length;
      Oo = [];
      for (var o = 0; o < r; o++) {
        var i = _v(n[o]);
        Cv(i);
      }
      Ao.clear();
    }
  } finally {
    Vi = !1, kr = e, Hi = null;
  }
}
function Cv(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if ((r.f & (ia | Wn)) === 0)
        try {
          po(r) && (la(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? Nu(r) : r.fn = null));
        } catch (o) {
          sa(o, r, null, r.ctx);
        }
    }
}
function ua(e) {
  Vi || (Vi = !0, queueMicrotask(Yu));
  for (var t = Hi = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if ((n & (Dr | Un)) !== 0) {
      if ((n & jt) === 0) return;
      t.f ^= jt;
    }
  }
  Oo.push(t);
}
function _v(e) {
  for (var t = [], n = e; n !== null; ) {
    var r = n.f, o = (r & (Un | Dr)) !== 0, i = o && (r & jt) !== 0;
    if (!i && (r & Wn) === 0) {
      if ((r & xu) !== 0)
        t.push(n);
      else if (o)
        n.f ^= jt;
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
  for (sl(); Oo.length > 0; )
    Vi = !0, Yu(), sl();
  return (
    /** @type {T} */
    t
  );
}
function f(e) {
  var t = e.f, n = (t & $n) !== 0;
  if (dt !== null && !On) {
    if (!(pn != null && pn.includes(e))) {
      var r = dt.deps;
      e.rv < Ni && (e.rv = Ni, Bt === null && r !== null && r[nn] === e ? nn++ : Bt === null ? Bt = [e] : (!ar || !Bt.includes(e)) && Bt.push(e));
    }
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), i = o.parent;
    i !== null && (i.f & an) === 0 && (o.f ^= an);
  }
  return n && (o = /** @type {Derived} */
  e, po(o) && Mu(o)), Go && Ao.has(e) ? Ao.get(e) : e.v;
}
function Ln(e) {
  var t = On;
  try {
    return On = !0, e();
  } finally {
    On = t;
  }
}
const kv = -7169;
function gn(e, t) {
  e.f = e.f & kv | t;
}
function re(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (lr in e)
      Ka(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && lr in n && Ka(n);
      }
  }
}
function Ka(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        Ka(e[r], t);
      } catch {
      }
    const n = Cs(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = bu(n);
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
const Ao = /* @__PURE__ */ new Map();
function Qr(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Eu,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function Zt(e, t) {
  const n = Qr(e);
  return Iu(n), n;
}
// @__NO_SIDE_EFFECTS__
function le(e, t = !1) {
  var n;
  const r = Qr(e);
  return t || (r.equals = Ps), uo && tt !== null && tt.l !== null && ((n = tt.l).s ?? (n.s = [])).push(r), r;
}
function ee(e, t, n = !1) {
  dt !== null && !On && ca() && (dt.f & ($n | _s)) !== 0 && !(pn != null && pn.includes(e)) && cv();
  let r = n ? bn(t) : t;
  return Xa(e, r);
}
function Xa(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Go ? Ao.set(e, t) : Ao.set(e, n), e.v = t, (e.f & $n) !== 0 && ((e.f & Hn) !== 0 && Pu(
      /** @type {Derived} */
      e
    ), gn(e, (e.f & an) === 0 ? jt : mr)), e.wv = qu(), ju(e, Hn), ca() && nt !== null && (nt.f & jt) !== 0 && (nt.f & (Un | Dr)) === 0 && (dn === null ? wv([e]) : dn.push(e));
  }
  return t;
}
function cl(e, t = 1) {
  var n = f(e), r = t === 1 ? n++ : n--;
  return ee(e, n), r;
}
function ju(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = ca(), o = n.length, i = 0; i < o; i++) {
      var a = n[i], s = a.f;
      (s & Hn) === 0 && (!r && a === nt || (gn(a, t), (s & (jt | an)) !== 0 && ((s & $n) !== 0 ? ju(
        /** @type {Derived} */
        a,
        mr
      ) : ua(
        /** @type {Effect} */
        a
      ))));
    }
}
let tt = null;
function dl(e) {
  tt = e;
}
function Pr(e) {
  return (
    /** @type {T} */
    Ts().get(e)
  );
}
function eo(e, t) {
  return Ts().set(e, t), t;
}
function Ev(e) {
  return Ts().has(e);
}
function he(e, t = !1, n) {
  var r = tt = {
    p: tt,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
  uo && !t && (tt.l = {
    s: null,
    u: null,
    r1: [],
    r2: Qr(!1)
  }), Ms(() => {
    r.d = !0;
  });
}
function me(e) {
  const t = tt;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const a = t.e;
    if (a !== null) {
      var n = nt, r = dt;
      t.e = null;
      try {
        for (var o = 0; o < a.length; o++) {
          var i = a[o];
          vr(i.effect), Dn(i.reaction), rn(i.fn);
        }
      } finally {
        vr(n), Dn(r);
      }
    }
    tt = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function ca() {
  return !uo || tt !== null && tt.l === null;
}
function Ts(e) {
  return tt === null && ra(), tt.c ?? (tt.c = new Map(Sv(tt) || void 0));
}
function Sv(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
function Pv(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const Mv = [
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
function Ov(e) {
  return Mv.includes(e);
}
const Tv = {
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
function Vv(e) {
  return e = e.toLowerCase(), Tv[e] ?? e;
}
const Hv = ["touchstart", "touchmove"];
function Nv(e) {
  return Hv.includes(e);
}
const Dv = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function Lv(e) {
  return Dv.includes(
    /** @type {RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function Av(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, Fo(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function zv(e) {
  Be && /* @__PURE__ */ Mt(e) !== null && Es(e);
}
let fl = !1;
function Iv() {
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
function Rv(e) {
  var t = dt, n = nt;
  Dn(null), vr(null);
  try {
    return e();
  } finally {
    Dn(t), vr(n);
  }
}
const Wu = /* @__PURE__ */ new Set(), Fa = /* @__PURE__ */ new Set();
function Ku(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || Eo.call(t, i), !i.cancelBubble)
      return Rv(() => n == null ? void 0 : n.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Fo(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function ft(e, t, n, r, o) {
  var i = { capture: r, passive: o }, a = Ku(e, t, n, i);
  (t === document.body || t === window || t === document) && Ms(() => {
    t.removeEventListener(e, a, i);
  });
}
function go(e) {
  for (var t = 0; t < e.length; t++)
    Wu.add(e[t]);
  for (var n of Fa)
    n(e);
}
function Eo(e) {
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
    Vo(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var d = dt, v = nt;
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
            if (Xo(b)) {
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
function Vs(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function en(e, t) {
  var n = (
    /** @type {Effect} */
    nt
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function ie(e, t) {
  var n = (t & wu) !== 0, r = (t & Yf) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (Be)
      return en(Xe, null), Xe;
    o === void 0 && (o = Vs(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ Mt(o)));
    var a = (
      /** @type {TemplateNode} */
      r || Cu ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Mt(a)
      ), l = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      en(s, l);
    } else
      en(a, a);
    return a;
  };
}
// @__NO_SIDE_EFFECTS__
function Ve(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & wu) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, a;
  return () => {
    if (Be)
      return en(Xe, null), Xe;
    if (!a) {
      var s = (
        /** @type {DocumentFragment} */
        Vs(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ Mt(s)
      );
      if (o)
        for (a = document.createDocumentFragment(); /* @__PURE__ */ Mt(l); )
          a.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ Mt(l)
          );
      else
        a = /** @type {Element} */
        /* @__PURE__ */ Mt(l);
    }
    var u = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    if (o) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Mt(u)
      ), d = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      en(c, d);
    } else
      en(u, u);
    return u;
  };
}
function We(e = "") {
  if (!Be) {
    var t = Fn(e + "");
    return en(t, t), t;
  }
  var n = Xe;
  return n.nodeType !== 3 && (n.before(n = Fn()), Yt(n)), en(n, n), n;
}
function ut() {
  if (Be)
    return en(Xe, null), Xe;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Fn();
  return e.append(t, n), en(t, n), e;
}
function A(e, t) {
  if (Be) {
    nt.nodes_end = Xe, Nn();
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
function Xu(e, t) {
  return Fu(e, t);
}
function qv(e, t) {
  Wa(), t.intro = t.intro ?? !1;
  const n = t.target, r = Be, o = Xe;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Mt(n)
    ); i && (i.nodeType !== 8 || /** @type {Comment} */
    i.data !== ws); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ In(i);
    if (!i)
      throw jr;
    on(!0), Yt(
      /** @type {Comment} */
      i
    ), Nn();
    const a = Fu(e, { ...t, anchor: i });
    if (Xe === null || Xe.nodeType !== 8 || /** @type {Comment} */
    Xe.data !== xs)
      throw aa(), jr;
    return on(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a === jr)
      return t.recover === !1 && av(), Wa(), Es(n), on(!1), Xu(e, t);
    throw a;
  } finally {
    on(r), Yt(o);
  }
}
const Rr = /* @__PURE__ */ new Map();
function Fu(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: a = !0 }) {
  Wa();
  var s = /* @__PURE__ */ new Set(), l = (d) => {
    for (var v = 0; v < d.length; v++) {
      var p = d[v];
      if (!s.has(p)) {
        s.add(p);
        var h = Nv(p);
        t.addEventListener(p, Eo, { passive: h });
        var x = Rr.get(p);
        x === void 0 ? (document.addEventListener(p, Eo, { passive: h }), Rr.set(p, 1)) : Rr.set(p, x + 1);
      }
    }
  };
  l($s(Wu)), Fa.add(l);
  var u = void 0, c = gv(() => {
    var d = n ?? t.appendChild(Fn());
    return fr(() => {
      if (i) {
        he({});
        var v = (
          /** @type {ComponentContext} */
          tt
        );
        v.c = i;
      }
      o && (r.$$events = o), Be && en(
        /** @type {TemplateNode} */
        d,
        null
      ), u = e(d, r) || {}, Be && (nt.nodes_end = Xe), i && me();
    }), () => {
      var v;
      for (var p of s) {
        t.removeEventListener(p, Eo);
        var h = (
          /** @type {number} */
          Rr.get(p)
        );
        --h === 0 ? (document.removeEventListener(p, Eo), Rr.delete(p)) : Rr.set(p, h);
      }
      Fa.delete(l), d !== n && ((v = d.parentNode) == null || v.removeChild(d));
    };
  });
  return Ga.set(u, c), u;
}
let Ga = /* @__PURE__ */ new WeakMap();
function Bv(e, t) {
  const n = Ga.get(e);
  return n ? (Ga.delete(e), n(t)) : Promise.resolve();
}
function $e(e, t, [n, r] = [0, 0]) {
  Be && n === 0 && Nn();
  var o = e, i = null, a = null, s = Ft, l = n > 0 ? co : 0, u = !1;
  const c = (v, p = !0) => {
    u = !0, d(p, v);
  }, d = (v, p) => {
    if (s === (s = v)) return;
    let h = !1;
    if (Be && r !== -1) {
      if (n === 0) {
        const b = (
          /** @type {Comment} */
          o.data
        );
        b === ws ? r = 0 : b === bs ? r = 1 / 0 : (r = parseInt(b.substring(1)), r !== r && (r = s ? 1 / 0 : -1));
      }
      const x = r > n;
      !!s === x && (o = ja(), Yt(o), on(!1), h = !0, r = -1);
    }
    s ? (i ? No(i) : p && (i = fr(() => p(o))), a && Jr(a, () => {
      a = null;
    })) : (a ? No(a) : p && (a = fr(() => p(o, [n + 1, r]))), i && Jr(i, () => {
      i = null;
    })), h && on(!0);
  };
  vo(() => {
    u = !1, t(c), u || d(null, null);
  }, l), Be && (o = Xe);
}
function to(e, t) {
  return t;
}
function Zv(e, t, n, r) {
  for (var o = [], i = t.length, a = 0; a < i; a++)
    Os(t[a].e, o, !0);
  var s = i > 0 && o.length === 0 && n !== null;
  if (s) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    Es(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), or(e, t[0].prev, t[i - 1].next);
  }
  Du(o, () => {
    for (var u = 0; u < i; u++) {
      var c = t[u];
      s || (r.delete(c.k), or(e, c.prev, c.next)), Cn(c.e, !s);
    }
  });
}
function Wt(e, t, n, r, o, i = null) {
  var a = e, s = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & mu) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    a = Be ? Yt(
      /** @type {Comment | Text} */
      /* @__PURE__ */ Mt(u)
    ) : u.appendChild(Fn());
  }
  Be && Nn();
  var c = null, d = !1, v = /* @__PURE__ */ ke(() => {
    var p = n();
    return Xo(p) ? p : p == null ? [] : $s(p);
  });
  vo(() => {
    var p = f(v), h = p.length;
    if (d && h === 0)
      return;
    d = h === 0;
    let x = !1;
    if (Be) {
      var b = (
        /** @type {Comment} */
        a.data === bs
      );
      b !== (h === 0) && (a = ja(), Yt(a), on(!1), x = !0);
    }
    if (Be) {
      for (var $ = null, g, _ = 0; _ < h; _++) {
        if (Xe.nodeType === 8 && /** @type {Comment} */
        Xe.data === xs) {
          a = /** @type {Comment} */
          Xe, x = !0, on(!1);
          break;
        }
        var w = p[_], k = r(w, _);
        g = Gu(
          Xe,
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
      h > 0 && Yt(ja());
    }
    Be || Yv(p, s, a, o, t, r, n), i !== null && (h === 0 ? c ? No(c) : c = fr(() => i(a)) : c !== null && Jr(c, () => {
      c = null;
    })), x && on(!0), f(v);
  }), Be && (a = Xe);
}
function Yv(e, t, n, r, o, i, a) {
  var s, l, u, c, d = (o & zf) !== 0, v = (o & (ms | ys)) !== 0, p = e.length, h = t.items, x = t.first, b = x, $, g = null, _, w = [], k = [], O, E, N, H;
  if (d)
    for (H = 0; H < p; H += 1)
      O = e[H], E = i(O, H), N = h.get(E), N !== void 0 && ((s = N.a) == null || s.measure(), (_ ?? (_ = /* @__PURE__ */ new Set())).add(N));
  for (H = 0; H < p; H += 1) {
    if (O = e[H], E = i(O, H), N = h.get(E), N === void 0) {
      var I = b ? (
        /** @type {TemplateNode} */
        b.e.nodes_start
      ) : n;
      g = Gu(
        I,
        t,
        g,
        g === null ? t.first : g.next,
        O,
        E,
        H,
        r,
        o,
        a
      ), h.set(E, g), w = [], k = [], b = g.next;
      continue;
    }
    if (v && jv(N, O, H, o), (N.e.f & Wn) !== 0 && (No(N.e), d && ((l = N.a) == null || l.unfix(), (_ ?? (_ = /* @__PURE__ */ new Set())).delete(N))), N !== b) {
      if ($ !== void 0 && $.has(N)) {
        if (w.length < k.length) {
          var q = k[0], D;
          g = q.prev;
          var B = w[0], S = w[w.length - 1];
          for (D = 0; D < w.length; D += 1)
            vl(w[D], q, n);
          for (D = 0; D < k.length; D += 1)
            $.delete(k[D]);
          or(t, B.prev, S.next), or(t, g, B), or(t, S, q), b = q, g = S, H -= 1, w = [], k = [];
        } else
          $.delete(N), vl(N, b, n), or(t, N.prev, N.next), or(t, N, g === null ? t.first : g.next), or(t, g, N), g = N;
        continue;
      }
      for (w = [], k = []; b !== null && b.k !== E; )
        (b.e.f & Wn) === 0 && ($ ?? ($ = /* @__PURE__ */ new Set())).add(b), k.push(b), b = b.next;
      if (b === null)
        continue;
      N = b;
    }
    w.push(N), g = N, b = N.next;
  }
  if (b !== null || $ !== void 0) {
    for (var C = $ === void 0 ? [] : $s($); b !== null; )
      (b.e.f & Wn) === 0 && C.push(b), b = b.next;
    var P = C.length;
    if (P > 0) {
      var V = (o & mu) !== 0 && p === 0 ? n : null;
      if (d) {
        for (H = 0; H < P; H += 1)
          (u = C[H].a) == null || u.measure();
        for (H = 0; H < P; H += 1)
          (c = C[H].a) == null || c.fix();
      }
      Zv(t, C, V, h);
    }
  }
  d && Fo(() => {
    var T;
    if (_ !== void 0)
      for (N of _)
        (T = N.a) == null || T.apply();
  }), nt.first = t.first && t.first.e, nt.last = g && g.e;
}
function jv(e, t, n, r) {
  (r & ms) !== 0 && Xa(e.v, t), (r & ys) !== 0 ? Xa(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function Gu(e, t, n, r, o, i, a, s, l, u) {
  var c = (l & ms) !== 0, d = (l & If) === 0, v = c ? d ? /* @__PURE__ */ le(o) : Qr(o) : o, p = (l & ys) === 0 ? a : Qr(a), h = {
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
    return h.e = fr(() => s(e, v, p, u), Be), h.e.prev = n && n.e, h.e.next = r && r.e, n === null ? t.first = h : (n.next = h, n.e.next = h.e), r !== null && (r.prev = h, r.e.prev = h.e), h;
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
function or(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function Hs(e, t, n = !1, r = !1, o = !1) {
  var i = e, a = "";
  Oe(() => {
    var s = (
      /** @type {Effect} */
      nt
    );
    if (a === (a = t() ?? "")) {
      Be && Nn();
      return;
    }
    if (s.nodes_start !== null && (Hu(
      s.nodes_start,
      /** @type {TemplateNode} */
      s.nodes_end
    ), s.nodes_start = s.nodes_end = null), a !== "") {
      if (Be) {
        Xe.data;
        for (var l = Nn(), u = l; l !== null && (l.nodeType !== 8 || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ In(l);
        if (l === null)
          throw aa(), jr;
        en(Xe, u), i = Yt(l);
        return;
      }
      var c = a + "";
      n ? c = `<svg>${c}</svg>` : r && (c = `<math>${c}</math>`);
      var d = Vs(c);
      if ((n || r) && (d = /** @type {Element} */
      /* @__PURE__ */ Mt(d)), en(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Mt(d),
        /** @type {TemplateNode} */
        d.lastChild
      ), n || r)
        for (; /* @__PURE__ */ Mt(d); )
          i.before(
            /** @type {Node} */
            /* @__PURE__ */ Mt(d)
          );
      else
        i.before(d);
    }
  });
}
function It(e, t, n, r, o) {
  var i;
  Be && Nn();
  var a = (i = t.$$slots) == null ? void 0 : i[n], s = !1;
  a === !0 && (a = t[n === "default" ? "children" : n], s = !0), a === void 0 || a(e, s ? () => r : r);
}
function Wv(e) {
  const t = {};
  e.children && (t.default = !0);
  for (const n in e.$$slots)
    t[n] = !0;
  return t;
}
function Mr(e, t, ...n) {
  var r = e, o = Ot, i;
  vo(() => {
    o !== (o = t()) && (i && (Cn(i), i = null), i = fr(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, co), Be && (r = Xe);
}
function Uu(e, t, n) {
  Be && Nn();
  var r = e, o, i;
  vo(() => {
    o !== (o = t()) && (i && (Jr(i), i = null), o && (i = fr(() => n(r, o))));
  }, co), Be && (r = Xe);
}
function Kv(e, t, n, r, o, i) {
  let a = Be;
  Be && Nn();
  var s, l, u = null;
  Be && Xe.nodeType === 1 && (u = /** @type {Element} */
  Xe, Nn());
  var c = (
    /** @type {TemplateNode} */
    Be ? Xe : e
  ), d;
  vo(() => {
    const v = t() || null;
    var p = v === "svg" ? Wf : null;
    v !== s && (d && (v === null ? Jr(d, () => {
      d = null, l = null;
    }) : v === l ? No(d) : Cn(d)), v && v !== l && (d = fr(() => {
      if (u = Be ? (
        /** @type {Element} */
        u
      ) : p ? document.createElementNS(p, v) : document.createElement(v), en(u, u), r) {
        Be && Lv(v) && u.append(document.createComment(""));
        var h = (
          /** @type {TemplateNode} */
          Be ? /* @__PURE__ */ Mt(u) : u.appendChild(Fn())
        );
        Be && (h === null ? on(!1) : Yt(h)), r(u, h);
      }
      nt.nodes_end = u, c.before(u);
    })), s = v, s && (l = s));
  }, co), a && (on(!0), Yt(c));
}
function it(e, t) {
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
function zt(e, t, n) {
  rn(() => {
    var r = Ln(() => t(e, n == null ? void 0 : n()) || {});
    if (n && r != null && r.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      fo(() => {
        var a = n();
        re(a), o && Ss(i, a) && (i = a, r.update(a));
      }), o = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Ju(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Ju(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Xv() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Ju(e)) && (r && (r += " "), r += t);
  return r;
}
function En(e) {
  return typeof e == "object" ? Xv(e) : e ?? "";
}
const pl = [...` 	
\r\f \v\uFEFF`];
function Fv(e, t, n) {
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
function Ta(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Gv(e, t) {
  if (t) {
    var n = "", r, o;
    if (Array.isArray(t) ? (r = t[0], o = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, a = 0, s = !1, l = [];
      r && l.push(...Object.keys(r).map(Ta)), o && l.push(...Object.keys(o).map(Ta));
      var u = 0, c = -1;
      const x = e.length;
      for (var d = 0; d < x; d++) {
        var v = e[d];
        if (s ? v === "/" && e[d - 1] === "*" && (s = !1) : i ? i === v && (i = !1) : v === "/" && e[d + 1] === "*" ? s = !0 : v === '"' || v === "'" ? i = v : v === "(" ? a++ : v === ")" && a--, !s && i === !1 && a === 0) {
          if (v === ":" && c === -1)
            c = d;
          else if (v === ";" || d === x - 1) {
            if (c !== -1) {
              var p = Ta(e.substring(u, c).trim());
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
function Rt(e, t, n, r, o, i) {
  var a = e.__className;
  if (Be || a !== n || a === void 0) {
    var s = Fv(n, r, i);
    (!Be || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e.__className = n;
  } else if (i && o !== i)
    for (var l in i) {
      var u = !!i[l];
      (o == null || u !== !!o[l]) && e.classList.toggle(l, u);
    }
  return i;
}
function Va(e, t = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    t[o] !== i && (n[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, i, r));
  }
}
function _t(e, t, n, r) {
  var o = e.__style;
  if (Be || o !== t) {
    var i = Gv(t, r);
    (!Be || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (Va(e, n == null ? void 0 : n[0], r[0]), Va(e, n == null ? void 0 : n[1], r[1], "important")) : Va(e, n, r));
  return r;
}
const Co = Symbol("class"), $r = Symbol("style"), Qu = Symbol("is custom element"), ec = Symbol("is html");
function Kn(e) {
  if (Be) {
    var t = !1, n = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var r = e.value;
          Me(e, "value", null), e.value = r;
        }
        if (e.hasAttribute("checked")) {
          var o = e.checked;
          Me(e, "checked", null), e.checked = o;
        }
      }
    };
    e.__on_r = n, yv(n), Iv();
  }
}
function bi(e, t) {
  var n = da(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function hl(e, t) {
  var n = da(e);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  t ?? void 0) && (e.checked = t);
}
function Uv(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function Me(e, t, n, r) {
  var o = da(e);
  Be && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[tv] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && tc(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function ln(e, t, n, r, o = !1) {
  var i = da(e), a = i[Qu], s = !i[ec];
  let l = Be && a;
  l && on(!1);
  var u = t || {}, c = e.tagName === "OPTION";
  for (var d in t)
    d in n || (n[d] = null);
  n.class ? n.class = En(n.class) : (r || n[Co]) && (n.class = null), n[$r] && (n.style ?? (n.style = null));
  var v = tc(e);
  for (const _ in n) {
    let w = n[_];
    if (c && _ === "value" && w == null) {
      e.value = e.__value = "", u[_] = w;
      continue;
    }
    if (_ === "class") {
      var p = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Rt(e, p, w, r, t == null ? void 0 : t[Co], n[Co]), u[_] = w, u[Co] = n[Co];
      continue;
    }
    if (_ === "style") {
      _t(e, w, t == null ? void 0 : t[$r], n[$r]), u[_] = w, u[$r] = n[$r];
      continue;
    }
    var h = u[_];
    if (w !== h) {
      u[_] = w;
      var x = _[0] + _[1];
      if (x !== "$$")
        if (x === "on") {
          const k = {}, O = "$$" + _;
          let E = _.slice(2);
          var b = Ov(E);
          if (Pv(E) && (E = E.slice(0, -7), k.capture = !0), !b && h) {
            if (w != null) continue;
            e.removeEventListener(E, u[O], k), u[O] = null;
          }
          if (w != null)
            if (b)
              e[`__${E}`] = w, go([E]);
            else {
              let N = function(H) {
                u[_].call(this, H);
              };
              u[O] = Ku(E, e, N, k);
            }
          else b && (e[`__${E}`] = void 0);
        } else if (_ === "style")
          Me(e, _, w);
        else if (_ === "autofocus")
          Av(
            /** @type {HTMLElement} */
            e,
            !!w
          );
        else if (!a && (_ === "__value" || _ === "value" && w != null))
          e.value = e.__value = w;
        else if (_ === "selected" && c)
          Uv(
            /** @type {HTMLOptionElement} */
            e,
            w
          );
        else {
          var $ = _;
          s || ($ = Vv($));
          var g = $ === "defaultValue" || $ === "defaultChecked";
          if (w == null && !a && !g)
            if (i[_] = null, $ === "value" || $ === "checked") {
              let k = (
                /** @type {HTMLInputElement} */
                e
              );
              const O = t === void 0;
              if ($ === "value") {
                let E = k.defaultValue;
                k.removeAttribute($), k.defaultValue = E, k.value = k.__value = O ? E : null;
              } else {
                let E = k.defaultChecked;
                k.removeAttribute($), k.defaultChecked = E, k.checked = O ? E : !1;
              }
            } else
              e.removeAttribute(_);
          else g || v.includes($) && (a || typeof w != "string") ? e[$] = w : typeof w != "function" && Me(e, $, w);
        }
    }
  }
  return l && on(!0), u;
}
function da(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Qu]: e.nodeName.includes("-"),
      [ec]: e.namespaceURI === jf
    })
  );
}
var ml = /* @__PURE__ */ new Map();
function tc(e) {
  var t = ml.get(e.nodeName);
  if (t) return t;
  ml.set(e.nodeName, t = []);
  for (var n, r = e, o = Element.prototype; o !== r; ) {
    n = bu(r);
    for (var i in n)
      n[i].set && t.push(i);
    r = Cs(r);
  }
  return t;
}
var Cr, To, xi, Ua, nc;
const Ja = class {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    Zr(this, Ua), Zr(this, Cr, /* @__PURE__ */ new WeakMap()), Zr(this, To), Zr(this, xi), Pi(this, xi, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var r = wt(this, Cr).get(t) || /* @__PURE__ */ new Set();
    return r.add(n), wt(this, Cr).set(t, r), Nf(this, Ua, nc).call(this).observe(t, wt(this, xi)), () => {
      var o = wt(this, Cr).get(t);
      o.delete(n), o.size === 0 && (wt(this, Cr).delete(t), wt(this, To).unobserve(t));
    };
  }
};
Cr = /* @__PURE__ */ new WeakMap(), To = /* @__PURE__ */ new WeakMap(), xi = /* @__PURE__ */ new WeakMap(), Ua = /* @__PURE__ */ new WeakSet(), nc = function() {
  return wt(this, To) ?? Pi(this, To, new ResizeObserver(
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
Ut(Ja, "entries", /* @__PURE__ */ new WeakMap());
let Jv = Ja;
var Qv = /* @__PURE__ */ new Jv({
  box: "border-box"
});
function yl(e, t, n) {
  var r = Qv.observe(e, () => n(e[t]));
  rn(() => (Ln(() => n(e[t])), r));
}
function wl(e, t) {
  return e === t || (e == null ? void 0 : e[lr]) === t;
}
function An(e = {}, t, n, r) {
  return rn(() => {
    var o, i;
    return fo(() => {
      o = i, i = [], Ln(() => {
        e !== n(...i) && (t(e, ...i), o && wl(n(...o), e) && t(null, ...o));
      });
    }), () => {
      Fo(() => {
        i && wl(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function Ke(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    tt
  ), n = t.l.u;
  if (!n) return;
  let r = () => re(t.s);
  if (e) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const a = /* @__PURE__ */ Ur(() => {
      let s = !1;
      const l = t.s;
      for (const u in l)
        l[u] !== i[u] && (i[u] = l[u], s = !0);
      return s && o++, o;
    });
    r = () => f(a);
  }
  n.b.length && vv(() => {
    bl(t, r), Ho(n.b);
  }), vn(() => {
    const o = Ln(() => n.m.map(Uf));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && vn(() => {
    bl(t, r), Ho(n.a);
  });
}
function bl(e, t) {
  if (e.l.s)
    for (const n of e.l.s) f(n);
  t();
}
function Ue(e, t) {
  var n, r = (
    /** @type {Record<string, Function[] | Function>} */
    (n = e.$$events) == null ? void 0 : n[t.type]
  ), o = Xo(r) ? r.slice() : r == null ? [] : [r];
  for (var i of o)
    i.call(this, t);
}
function mn(e) {
  tt === null && ra(), uo && tt.l !== null ? t1(tt).m.push(e) : vn(() => {
    const t = Ln(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Ns(e) {
  tt === null && ra(), mn(() => () => Ln(e));
}
function e1(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
function fa() {
  const e = tt;
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
      const a = Xo(i) ? i.slice() : [i], s = e1(
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
function t1(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
function Ds(e, t, n) {
  if (e == null)
    return t(void 0), n && n(void 0), Ot;
  const r = Ln(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const qr = [];
function cn(e, t) {
  return {
    subscribe: Te(e, t).subscribe
  };
}
function Te(e, t = Ot) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function o(s) {
    if (Ss(e, s) && (e = s, n)) {
      const l = !qr.length;
      for (const u of r)
        u[1](), qr.push(u, e);
      if (l) {
        for (let u = 0; u < qr.length; u += 2)
          qr[u][0](qr[u + 1]);
        qr.length = 0;
      }
    }
  }
  function i(s) {
    o(s(
      /** @type {T} */
      e
    ));
  }
  function a(s, l = Ot) {
    const u = [s, l];
    return r.add(u), r.size === 1 && (n = t(o, i) || Ot), s(
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
    let c = 0, d = Ot;
    const v = () => {
      if (c)
        return;
      d();
      const h = t(r ? u[0] : u, a, s);
      i ? a(h) : d = typeof h == "function" ? h : Ot;
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
      Ho(p), d(), l = !1;
    };
  });
}
function U(e) {
  let t;
  return Ds(e, (n) => t = n)(), t;
}
let fi = !1, Qa = Symbol();
function oe(e, t, n) {
  const r = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ le(void 0),
    unsubscribe: Ot
  });
  if (r.store !== e && !(Qa in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = Ot;
    else {
      var o = !0;
      r.unsubscribe = Ds(e, (i) => {
        o ? r.source.v = i : ee(r.source, i);
      }), o = !1;
    }
  return e && Qa in n ? U(e) : f(r.source);
}
function n1(e, t, n) {
  let r = n[t];
  return r && r.store !== e && (r.unsubscribe(), r.unsubscribe = Ot), e;
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
      Vo(e, Qa, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function r1(e) {
  var t = fi;
  try {
    return fi = !1, [e(), fi];
  } finally {
    fi = t;
  }
}
const o1 = {
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
function Nt(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    o1
  );
}
const i1 = {
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
      yu
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
  return new Proxy({ props: e, exclude: t, special: {}, version: Qr(0) }, i1);
}
const a1 = {
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
      const i = jn(o, t);
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
        const o = jn(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === lr || t === ks) return !1;
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
  return new Proxy({ props: e }, a1);
}
function xl(e) {
  var t;
  return ((t = e.ctx) == null ? void 0 : t.d) ?? !1;
}
function y(e, t, n, r) {
  var o, i = (n & Rf) !== 0, a = !uo || (n & qf) !== 0, s = (n & Bf) !== 0, l = (n & Zf) !== 0, u = !1, c;
  s ? [c, u] = r1(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var d = lr in e || ks in e, v = s && (((o = jn(e, t)) == null ? void 0 : o.set) ?? (d && t in e && ((E) => e[t] = E))) || void 0, p = (
    /** @type {V} */
    r
  ), h = !0, x = !1, b = () => (x = !0, h && (h = !1, l ? p = Ln(
    /** @type {() => V} */
    r
  ) : p = /** @type {V} */
  r), p);
  c === void 0 && r !== void 0 && (v && a && sv(), c = b(), v && v(c));
  var $;
  if (a)
    $ = () => {
      var E = (
        /** @type {V} */
        e[t]
      );
      return E === void 0 ? b() : (h = !0, x = !1, E);
    };
  else {
    var g = (i ? Ur : ke)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    g.f |= Qf, $ = () => {
      var E = f(g);
      return E !== void 0 && (p = /** @type {V} */
      void 0), E === void 0 ? p : E;
    };
  }
  if ((n & yu) === 0)
    return $;
  if (v) {
    var _ = e.$$legacy;
    return function(E, N) {
      return arguments.length > 0 ? ((!a || !N || _ || u) && v(N ? $() : E), E) : $();
    };
  }
  var w = !1, k = /* @__PURE__ */ le(c), O = /* @__PURE__ */ Ur(() => {
    var E = $(), N = f(k);
    return w ? (w = !1, N) : k.v = E;
  });
  return s && f(O), i || (O.equals = Ps), function(E, N) {
    if (arguments.length > 0) {
      const H = N ? f(O) : a && s ? bn(E) : E;
      if (!O.equals(H)) {
        if (w = !0, ee(k, H), x && p !== void 0 && (p = H), xl(O))
          return E;
        Ln(() => f(O));
      }
      return E;
    }
    return xl(O) ? O.v : f(O);
  };
}
function s1(e) {
  return new l1(e);
}
var rr, yn;
class l1 {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    Zr(this, rr), Zr(this, yn);
    var n, r = /* @__PURE__ */ new Map(), o = (a, s) => {
      var l = /* @__PURE__ */ le(s);
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
    Pi(this, yn, (t.hydrate ? qv : Xu)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((n = t == null ? void 0 : t.props) != null && n.$$host) || t.sync === !1) && m(), Pi(this, rr, i.$$events);
    for (const a of Object.keys(wt(this, yn)))
      a === "$set" || a === "$destroy" || a === "$on" || Vo(this, a, {
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
      Bv(wt(this, yn));
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
    wt(this, rr)[t] = wt(this, rr)[t] || [];
    const r = (...o) => n.call(this, ...o);
    return wt(this, rr)[t].push(r), () => {
      wt(this, rr)[t] = wt(this, rr)[t].filter(
        /** @param {any} fn */
        (o) => o !== r
      );
    };
  }
  $destroy() {
    wt(this, yn).$destroy();
  }
}
rr = /* @__PURE__ */ new WeakMap(), yn = /* @__PURE__ */ new WeakMap();
let rc;
typeof HTMLElement == "function" && (rc = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, t, n) {
    super(), Ut(this, "$$ctor"), Ut(this, "$$s"), Ut(this, "$$c"), Ut(this, "$$cn", !1), Ut(this, "$$d", {}), Ut(this, "$$r", !1), Ut(this, "$$p_d", {}), Ut(this, "$$l", {}), Ut(this, "$$l_u", /* @__PURE__ */ new Map()), Ut(this, "$$me"), this.$$ctor = e, this.$$s = t, n && this.attachShadow({ mode: "open" });
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
          r !== "default" && (i.name = r), A(o, i);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, n = u1(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = $i(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = s1({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = pv(() => {
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
function u1(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function pe(e, t, n, r, o, i) {
  let a = class extends rc {
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
    Vo(a.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(l) {
        var u;
        l = $i(s, l, t), this.$$d[s] = l;
        var c = this.$$c;
        if (c) {
          var d = (u = jn(c, s)) == null ? void 0 : u.get;
          d ? c[s] = l : c.$set({ [s]: l });
        }
      }
    });
  }), r.forEach((s) => {
    Vo(a.prototype, s, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[s];
      }
    });
  }), e.element = /** @type {any} */
  a, a;
}
function Kt(e) {
  if (typeof e == "string" || typeof e == "number") return "" + e;
  let t = "";
  if (Array.isArray(e))
    for (let n = 0, r; n < e.length; n++)
      (r = Kt(e[n])) !== "" && (t += (t && " ") + r);
  else
    for (let n in e)
      e[n] && (t += (t && " ") + n);
  return t;
}
var c1 = { value: () => {
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
function d1(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Ci.prototype = va.prototype = {
  constructor: Ci,
  on: function(e, t) {
    var n = this._, r = d1(e + "", n), o, i = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++i < a; ) if ((o = (e = r[i]).type) && (o = f1(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < a; )
      if (o = (e = r[i]).type) n[o] = $l(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = $l(n[o], e.name, null);
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
function f1(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function $l(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = c1, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var es = "http://www.w3.org/1999/xhtml";
const Cl = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: es,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function pa(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Cl.hasOwnProperty(t) ? { space: Cl[t], local: e } : e;
}
function v1(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === es && t.documentElement.namespaceURI === es ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function p1(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function oc(e) {
  var t = pa(e);
  return (t.local ? p1 : v1)(t);
}
function g1() {
}
function Ls(e) {
  return e == null ? g1 : function() {
    return this.querySelector(e);
  };
}
function h1(e) {
  typeof e != "function" && (e = Ls(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = new Array(a), l, u, c = 0; c < a; ++c)
      (l = i[c]) && (u = e.call(l, l.__data__, c, i)) && ("__data__" in l && (u.__data__ = l.__data__), s[c] = u);
  return new un(r, this._parents);
}
function m1(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function y1() {
  return [];
}
function ic(e) {
  return e == null ? y1 : function() {
    return this.querySelectorAll(e);
  };
}
function w1(e) {
  return function() {
    return m1(e.apply(this, arguments));
  };
}
function b1(e) {
  typeof e == "function" ? e = w1(e) : e = ic(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var a = t[i], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && (r.push(e.call(l, l.__data__, u, a)), o.push(l));
  return new un(r, o);
}
function ac(e) {
  return function() {
    return this.matches(e);
  };
}
function sc(e) {
  return function(t) {
    return t.matches(e);
  };
}
var x1 = Array.prototype.find;
function $1(e) {
  return function() {
    return x1.call(this.children, e);
  };
}
function C1() {
  return this.firstElementChild;
}
function _1(e) {
  return this.select(e == null ? C1 : $1(typeof e == "function" ? e : sc(e)));
}
var k1 = Array.prototype.filter;
function E1() {
  return Array.from(this.children);
}
function S1(e) {
  return function() {
    return k1.call(this.children, e);
  };
}
function P1(e) {
  return this.selectAll(e == null ? E1 : S1(typeof e == "function" ? e : sc(e)));
}
function M1(e) {
  typeof e != "function" && (e = ac(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = [], l, u = 0; u < a; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && s.push(l);
  return new un(r, this._parents);
}
function lc(e) {
  return new Array(e.length);
}
function O1() {
  return new un(this._enter || this._groups.map(lc), this._parents);
}
function Ai(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Ai.prototype = {
  constructor: Ai,
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
function T1(e) {
  return function() {
    return e;
  };
}
function V1(e, t, n, r, o, i) {
  for (var a = 0, s, l = t.length, u = i.length; a < u; ++a)
    (s = t[a]) ? (s.__data__ = i[a], r[a] = s) : n[a] = new Ai(e, i[a]);
  for (; a < l; ++a)
    (s = t[a]) && (o[a] = s);
}
function H1(e, t, n, r, o, i, a) {
  var s, l, u = /* @__PURE__ */ new Map(), c = t.length, d = i.length, v = new Array(c), p;
  for (s = 0; s < c; ++s)
    (l = t[s]) && (v[s] = p = a.call(l, l.__data__, s, t) + "", u.has(p) ? o[s] = l : u.set(p, l));
  for (s = 0; s < d; ++s)
    p = a.call(e, i[s], s, i) + "", (l = u.get(p)) ? (r[s] = l, l.__data__ = i[s], u.delete(p)) : n[s] = new Ai(e, i[s]);
  for (s = 0; s < c; ++s)
    (l = t[s]) && u.get(v[s]) === l && (o[s] = l);
}
function N1(e) {
  return e.__data__;
}
function D1(e, t) {
  if (!arguments.length) return Array.from(this, N1);
  var n = t ? H1 : V1, r = this._parents, o = this._groups;
  typeof e != "function" && (e = T1(e));
  for (var i = o.length, a = new Array(i), s = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var c = r[u], d = o[u], v = d.length, p = L1(e.call(c, c && c.__data__, u, r)), h = p.length, x = s[u] = new Array(h), b = a[u] = new Array(h), $ = l[u] = new Array(v);
    n(c, d, x, b, $, p, t);
    for (var g = 0, _ = 0, w, k; g < h; ++g)
      if (w = x[g]) {
        for (g >= _ && (_ = g + 1); !(k = b[_]) && ++_ < h; ) ;
        w._next = k || null;
      }
  }
  return a = new un(a, r), a._enter = s, a._exit = l, a;
}
function L1(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function A1() {
  return new un(this._exit || this._groups.map(lc), this._parents);
}
function z1(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function I1(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, a = Math.min(o, i), s = new Array(o), l = 0; l < a; ++l)
    for (var u = n[l], c = r[l], d = u.length, v = s[l] = new Array(d), p, h = 0; h < d; ++h)
      (p = u[h] || c[h]) && (v[h] = p);
  for (; l < o; ++l)
    s[l] = n[l];
  return new un(s, this._parents);
}
function R1() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], a; --o >= 0; )
      (a = r[o]) && (i && a.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(a, i), i = a);
  return this;
}
function q1(e) {
  e || (e = B1);
  function t(d, v) {
    return d && v ? e(d.__data__, v.__data__) : !d - !v;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var a = n[i], s = a.length, l = o[i] = new Array(s), u, c = 0; c < s; ++c)
      (u = a[c]) && (l[c] = u);
    l.sort(t);
  }
  return new un(o, this._parents).order();
}
function B1(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Z1() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Y1() {
  return Array.from(this);
}
function j1() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var a = r[o];
      if (a) return a;
    }
  return null;
}
function W1() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function K1() {
  return !this.node();
}
function X1(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, a = o.length, s; i < a; ++i)
      (s = o[i]) && e.call(s, s.__data__, i, o);
  return this;
}
function F1(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function G1(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function U1(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function J1(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function Q1(e, t) {
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
  return this.each((t == null ? n.local ? G1 : F1 : typeof t == "function" ? n.local ? ep : Q1 : n.local ? J1 : U1)(n, t));
}
function uc(e) {
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
  return arguments.length > 1 ? this.each((t == null ? np : typeof t == "function" ? op : rp)(e, t, n ?? "")) : no(this.node(), e);
}
function no(e, t) {
  return e.style.getPropertyValue(t) || uc(e).getComputedStyle(e, null).getPropertyValue(t);
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
function cc(e) {
  return e.trim().split(/^|\s+/);
}
function As(e) {
  return e.classList || new dc(e);
}
function dc(e) {
  this._node = e, this._names = cc(e.getAttribute("class") || "");
}
dc.prototype = {
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
function fc(e, t) {
  for (var n = As(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function vc(e, t) {
  for (var n = As(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function cp(e) {
  return function() {
    fc(this, e);
  };
}
function dp(e) {
  return function() {
    vc(this, e);
  };
}
function fp(e, t) {
  return function() {
    (t.apply(this, arguments) ? fc : vc)(this, e);
  };
}
function vp(e, t) {
  var n = cc(e + "");
  if (arguments.length < 2) {
    for (var r = As(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
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
function Ep(e) {
  var t = typeof e == "function" ? e : oc(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function Sp() {
  return null;
}
function Pp(e, t) {
  var n = typeof e == "function" ? e : oc(e), r = t == null ? Sp : typeof t == "function" ? t : Ls(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Mp() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Op() {
  return this.each(Mp);
}
function Tp() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Vp() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Hp(e) {
  return this.select(e ? Vp : Tp);
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
function Ap(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function zp(e, t, n) {
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
  for (s = t ? zp : Ap, o = 0; o < i; ++o) this.each(s(r[o], t, n));
  return this;
}
function pc(e, t, n) {
  var r = uc(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function Rp(e, t) {
  return function() {
    return pc(this, e, t);
  };
}
function qp(e, t) {
  return function() {
    return pc(this, e, t.apply(this, arguments));
  };
}
function Bp(e, t) {
  return this.each((typeof t == "function" ? qp : Rp)(e, t));
}
function* Zp() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, a; o < i; ++o)
      (a = r[o]) && (yield a);
}
var gc = [null];
function un(e, t) {
  this._groups = e, this._parents = t;
}
function Uo() {
  return new un([[document.documentElement]], gc);
}
function Yp() {
  return this;
}
un.prototype = Uo.prototype = {
  constructor: un,
  select: h1,
  selectAll: b1,
  selectChild: _1,
  selectChildren: P1,
  filter: M1,
  data: D1,
  enter: O1,
  exit: A1,
  join: z1,
  merge: I1,
  selection: Yp,
  order: R1,
  sort: q1,
  call: Z1,
  nodes: Y1,
  node: j1,
  size: W1,
  empty: K1,
  each: X1,
  attr: tp,
  style: ip,
  property: up,
  classed: vp,
  text: mp,
  html: xp,
  raise: Cp,
  lower: kp,
  append: Ep,
  insert: Pp,
  remove: Op,
  clone: Hp,
  datum: Np,
  on: Ip,
  dispatch: Bp,
  [Symbol.iterator]: Zp
};
function fn(e) {
  return typeof e == "string" ? new un([[document.querySelector(e)]], [document.documentElement]) : new un([[e]], gc);
}
function jp(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function wn(e, t) {
  if (e = jp(e), t === void 0 && (t = e.currentTarget), t) {
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
const Wp = { passive: !1 }, zo = { capture: !0, passive: !1 };
function Ha(e) {
  e.stopImmediatePropagation();
}
function Wr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function hc(e) {
  var t = e.document.documentElement, n = fn(e).on("dragstart.drag", Wr, zo);
  "onselectstart" in t ? n.on("selectstart.drag", Wr, zo) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function mc(e, t) {
  var n = e.document.documentElement, r = fn(e).on("dragstart.drag", null);
  t && (r.on("click.drag", Wr, zo), setTimeout(function() {
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
function Kp(e) {
  return !e.ctrlKey && !e.button;
}
function Xp() {
  return this.parentNode;
}
function Fp(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Gp() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Up() {
  var e = Kp, t = Xp, n = Fp, r = Gp, o = {}, i = va("start", "drag", "end"), a = 0, s, l, u, c, d = 0;
  function v(w) {
    w.on("mousedown.drag", p).filter(r).on("touchstart.drag", b).on("touchmove.drag", $, Wp).on("touchend.drag touchcancel.drag", g).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function p(w, k) {
    if (!(c || !e.call(this, w, k))) {
      var O = _(this, t.call(this, w, k), w, k, "mouse");
      O && (fn(w.view).on("mousemove.drag", h, zo).on("mouseup.drag", x, zo), hc(w.view), Ha(w), u = !1, s = w.clientX, l = w.clientY, O("start", w));
    }
  }
  function h(w) {
    if (Wr(w), !u) {
      var k = w.clientX - s, O = w.clientY - l;
      u = k * k + O * O > d;
    }
    o.mouse("drag", w);
  }
  function x(w) {
    fn(w.view).on("mousemove.drag mouseup.drag", null), mc(w.view, u), Wr(w), o.mouse("end", w);
  }
  function b(w, k) {
    if (e.call(this, w, k)) {
      var O = w.changedTouches, E = t.call(this, w, k), N = O.length, H, I;
      for (H = 0; H < N; ++H)
        (I = _(this, E, w, k, O[H].identifier, O[H])) && (Ha(w), I("start", w, O[H]));
    }
  }
  function $(w) {
    var k = w.changedTouches, O = k.length, E, N;
    for (E = 0; E < O; ++E)
      (N = o[k[E].identifier]) && (Wr(w), N("drag", w, k[E]));
  }
  function g(w) {
    var k = w.changedTouches, O = k.length, E, N;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), E = 0; E < O; ++E)
      (N = o[k[E].identifier]) && (Ha(w), N("end", w, k[E]));
  }
  function _(w, k, O, E, N, H) {
    var I = i.copy(), q = wn(H || O, k), D, B, S;
    if ((S = n.call(w, new ts("beforestart", {
      sourceEvent: O,
      target: v,
      identifier: N,
      active: a,
      x: q[0],
      y: q[1],
      dx: 0,
      dy: 0,
      dispatch: I
    }), E)) != null)
      return D = S.x - q[0] || 0, B = S.y - q[1] || 0, function C(P, V, T) {
        var M = q, z;
        switch (P) {
          case "start":
            o[N] = C, z = a++;
            break;
          case "end":
            delete o[N], --a;
          // falls through
          case "drag":
            q = wn(T || V, k), z = a;
            break;
        }
        I.call(
          P,
          w,
          new ts(P, {
            sourceEvent: V,
            subject: S,
            target: v,
            identifier: N,
            active: z,
            x: q[0] + D,
            y: q[1] + B,
            dx: q[0] - M[0],
            dy: q[1] - M[1],
            dispatch: I
          }),
          E
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
function zs(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function yc(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Jo() {
}
var Io = 0.7, zi = 1 / Io, Kr = "\\s*([+-]?\\d+)\\s*", Ro = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Tn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Jp = /^#([0-9a-f]{3,8})$/, Qp = new RegExp(`^rgb\\(${Kr},${Kr},${Kr}\\)$`), eg = new RegExp(`^rgb\\(${Tn},${Tn},${Tn}\\)$`), tg = new RegExp(`^rgba\\(${Kr},${Kr},${Kr},${Ro}\\)$`), ng = new RegExp(`^rgba\\(${Tn},${Tn},${Tn},${Ro}\\)$`), rg = new RegExp(`^hsl\\(${Ro},${Tn},${Tn}\\)$`), og = new RegExp(`^hsla\\(${Ro},${Tn},${Tn},${Ro}\\)$`), _l = {
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
zs(Jo, qo, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: kl,
  // Deprecated! Use color.formatHex.
  formatHex: kl,
  formatHex8: ig,
  formatHsl: ag,
  formatRgb: El,
  toString: El
});
function kl() {
  return this.rgb().formatHex();
}
function ig() {
  return this.rgb().formatHex8();
}
function ag() {
  return wc(this).formatHsl();
}
function El() {
  return this.rgb().formatRgb();
}
function qo(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Jp.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Sl(t) : n === 3 ? new Jt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? pi(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? pi(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Qp.exec(e)) ? new Jt(t[1], t[2], t[3], 1) : (t = eg.exec(e)) ? new Jt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = tg.exec(e)) ? pi(t[1], t[2], t[3], t[4]) : (t = ng.exec(e)) ? pi(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = rg.exec(e)) ? Ol(t[1], t[2] / 100, t[3] / 100, 1) : (t = og.exec(e)) ? Ol(t[1], t[2] / 100, t[3] / 100, t[4]) : _l.hasOwnProperty(e) ? Sl(_l[e]) : e === "transparent" ? new Jt(NaN, NaN, NaN, 0) : null;
}
function Sl(e) {
  return new Jt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function pi(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Jt(e, t, n, r);
}
function sg(e) {
  return e instanceof Jo || (e = qo(e)), e ? (e = e.rgb(), new Jt(e.r, e.g, e.b, e.opacity)) : new Jt();
}
function ns(e, t, n, r) {
  return arguments.length === 1 ? sg(e) : new Jt(e, t, n, r ?? 1);
}
function Jt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
zs(Jt, ns, yc(Jo, {
  brighter(e) {
    return e = e == null ? zi : Math.pow(zi, e), new Jt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Io : Math.pow(Io, e), new Jt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Jt(Er(this.r), Er(this.g), Er(this.b), Ii(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Pl,
  // Deprecated! Use color.formatHex.
  formatHex: Pl,
  formatHex8: lg,
  formatRgb: Ml,
  toString: Ml
}));
function Pl() {
  return `#${_r(this.r)}${_r(this.g)}${_r(this.b)}`;
}
function lg() {
  return `#${_r(this.r)}${_r(this.g)}${_r(this.b)}${_r((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ml() {
  const e = Ii(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Er(this.r)}, ${Er(this.g)}, ${Er(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Ii(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Er(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function _r(e) {
  return e = Er(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Ol(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new xn(e, t, n, r);
}
function wc(e) {
  if (e instanceof xn) return new xn(e.h, e.s, e.l, e.opacity);
  if (e instanceof Jo || (e = qo(e)), !e) return new xn();
  if (e instanceof xn) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), a = NaN, s = i - o, l = (i + o) / 2;
  return s ? (t === i ? a = (n - r) / s + (n < r) * 6 : n === i ? a = (r - t) / s + 2 : a = (t - n) / s + 4, s /= l < 0.5 ? i + o : 2 - i - o, a *= 60) : s = l > 0 && l < 1 ? 0 : a, new xn(a, s, l, e.opacity);
}
function ug(e, t, n, r) {
  return arguments.length === 1 ? wc(e) : new xn(e, t, n, r ?? 1);
}
function xn(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
zs(xn, ug, yc(Jo, {
  brighter(e) {
    return e = e == null ? zi : Math.pow(zi, e), new xn(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Io : Math.pow(Io, e), new xn(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new Jt(
      Na(e >= 240 ? e - 240 : e + 120, o, r),
      Na(e, o, r),
      Na(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new xn(Tl(this.h), gi(this.s), gi(this.l), Ii(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Ii(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Tl(this.h)}, ${gi(this.s) * 100}%, ${gi(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Tl(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function gi(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Na(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const bc = (e) => () => e;
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
  return (e = +e) == 1 ? xc : function(t, n) {
    return n - t ? dg(t, n, e) : bc(isNaN(t) ? n : t);
  };
}
function xc(e, t) {
  var n = t - e;
  return n ? cg(e, n) : bc(isNaN(e) ? t : e);
}
const Vl = function e(t) {
  var n = fg(t);
  function r(o, i) {
    var a = n((o = ns(o)).r, (i = ns(i)).r), s = n(o.g, i.g), l = n(o.b, i.b), u = xc(o.opacity, i.opacity);
    return function(c) {
      return o.r = a(c), o.g = s(c), o.b = l(c), o.opacity = u(c), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function ir(e, t) {
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
    (i = o.index) > n && (i = t.slice(n, i), s[a] ? s[a] += i : s[++a] = i), (r = r[0]) === (o = o[0]) ? s[a] ? s[a] += o : s[++a] = o : (s[++a] = null, l.push({ i: a, x: ir(r, o) })), n = Da.lastIndex;
  return n < t.length && (i = t.slice(n), s[a] ? s[a] += i : s[++a] = i), s.length < 2 ? l[0] ? pg(l[0].x) : vg(t) : (t = l.length, function(u) {
    for (var c = 0, d; c < t; ++c) s[(d = l[c]).i] = d.x(u);
    return s.join("");
  });
}
var Hl = 180 / Math.PI, $c = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Cc(e, t, n, r, o, i) {
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
  return t.isIdentity ? $c : Cc(t.a, t.b, t.c, t.d, t.e, t.f);
}
function mg(e) {
  return e == null || (hi || (hi = document.createElementNS("http://www.w3.org/2000/svg", "g")), hi.setAttribute("transform", e), !(e = hi.transform.baseVal.consolidate())) ? $c : (e = e.matrix, Cc(e.a, e.b, e.c, e.d, e.e, e.f));
}
function _c(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, c, d, v, p, h) {
    if (u !== d || c !== v) {
      var x = p.push("translate(", null, t, null, n);
      h.push({ i: x - 4, x: ir(u, d) }, { i: x - 2, x: ir(c, v) });
    } else (d || v) && p.push("translate(" + d + t + v + n);
  }
  function a(u, c, d, v) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), v.push({ i: d.push(o(d) + "rotate(", null, r) - 2, x: ir(u, c) })) : c && d.push(o(d) + "rotate(" + c + r);
  }
  function s(u, c, d, v) {
    u !== c ? v.push({ i: d.push(o(d) + "skewX(", null, r) - 2, x: ir(u, c) }) : c && d.push(o(d) + "skewX(" + c + r);
  }
  function l(u, c, d, v, p, h) {
    if (u !== d || c !== v) {
      var x = p.push(o(p) + "scale(", null, ",", null, ")");
      h.push({ i: x - 4, x: ir(u, d) }, { i: x - 2, x: ir(c, v) });
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
var yg = _c(hg, "px, ", "px)", "deg)"), wg = _c(mg, ", ", ")", ")"), bg = 1e-12;
function Nl(e) {
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
      $ = Math.log(v / u) / t, b = function(E) {
        return [
          s + E * p,
          l + E * h,
          u * Math.exp(t * E * $)
        ];
      };
    else {
      var g = Math.sqrt(x), _ = (v * v - u * u + r * x) / (2 * u * n * g), w = (v * v - u * u - r * x) / (2 * v * n * g), k = Math.log(Math.sqrt(_ * _ + 1) - _), O = Math.log(Math.sqrt(w * w + 1) - w);
      $ = (O - k) / t, b = function(E) {
        var N = E * $, H = Nl(k), I = u / (n * g) * (H * $g(t * N + k) - xg(k));
        return [
          s + I * p,
          l + I * h,
          u * H / Nl(t * N + k)
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
var ro = 0, So = 0, _o = 0, kc = 1e3, Ri, Po, qi = 0, Or = 0, ga = 0, Bo = typeof performance == "object" && performance.now ? performance : Date, Ec = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Is() {
  return Or || (Ec(_g), Or = Bo.now() + ga);
}
function _g() {
  Or = 0;
}
function Bi() {
  this._call = this._time = this._next = null;
}
Bi.prototype = Sc.prototype = {
  constructor: Bi,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Is() : +n) + (t == null ? 0 : +t), !this._next && Po !== this && (Po ? Po._next = this : Ri = this, Po = this), this._call = e, this._time = n, os();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, os());
  }
};
function Sc(e, t, n) {
  var r = new Bi();
  return r.restart(e, t, n), r;
}
function kg() {
  Is(), ++ro;
  for (var e = Ri, t; e; )
    (t = Or - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --ro;
}
function Dl() {
  Or = (qi = Bo.now()) + ga, ro = So = 0;
  try {
    kg();
  } finally {
    ro = 0, Sg(), Or = 0;
  }
}
function Eg() {
  var e = Bo.now(), t = e - qi;
  t > kc && (ga -= t, qi = e);
}
function Sg() {
  for (var e, t = Ri, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Ri = n);
  Po = e, os(r);
}
function os(e) {
  if (!ro) {
    So && (So = clearTimeout(So));
    var t = e - Or;
    t > 24 ? (e < 1 / 0 && (So = setTimeout(Dl, e - Bo.now() - ga)), _o && (_o = clearInterval(_o))) : (_o || (qi = Bo.now(), _o = setInterval(Eg, kc)), ro = 1, Ec(Dl));
  }
}
function Ll(e, t, n) {
  var r = new Bi();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var Pg = va("start", "end", "cancel", "interrupt"), Mg = [], Pc = 0, Al = 1, is = 2, _i = 3, zl = 4, as = 5, ki = 6;
function ha(e, t, n, r, o, i) {
  var a = e.__transition;
  if (!a) e.__transition = {};
  else if (n in a) return;
  Og(e, n, {
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
    state: Pc
  });
}
function Rs(e, t) {
  var n = Sn(e, t);
  if (n.state > Pc) throw new Error("too late; already scheduled");
  return n;
}
function Rn(e, t) {
  var n = Sn(e, t);
  if (n.state > _i) throw new Error("too late; already running");
  return n;
}
function Sn(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function Og(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = Sc(i, 0, n.time);
  function i(u) {
    n.state = Al, n.timer.restart(a, n.delay, n.time), n.delay <= u && a(u - n.delay);
  }
  function a(u) {
    var c, d, v, p;
    if (n.state !== Al) return l();
    for (c in r)
      if (p = r[c], p.name === n.name) {
        if (p.state === _i) return Ll(a);
        p.state === zl ? (p.state = ki, p.timer.stop(), p.on.call("interrupt", e, e.__data__, p.index, p.group), delete r[c]) : +c < t && (p.state = ki, p.timer.stop(), p.on.call("cancel", e, e.__data__, p.index, p.group), delete r[c]);
      }
    if (Ll(function() {
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
function Ei(e, t) {
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
function Tg(e) {
  return this.each(function() {
    Ei(this, e);
  });
}
function Vg(e, t) {
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
function Hg(e, t, n) {
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
    for (var r = Sn(this.node(), n).tween, o = 0, i = r.length, a; o < i; ++o)
      if ((a = r[o]).name === e)
        return a.value;
    return null;
  }
  return this.each((t == null ? Vg : Hg)(n, e, t));
}
function qs(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = Rn(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return Sn(o, r).value[t];
  };
}
function Mc(e, t) {
  var n;
  return (typeof t == "number" ? ir : t instanceof qo ? Vl : (n = qo(t)) ? (t = n, Vl) : gg)(e, t);
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
function Ag(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var a = this.getAttribute(e);
    return a === o ? null : a === r ? i : i = t(r = a, n);
  };
}
function zg(e, t, n) {
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
  var n = pa(e), r = n === "transform" ? wg : Mc;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Rg : Ig)(n, r, qs(this, "attr." + e, t)) : t == null ? (n.local ? Lg : Dg)(n) : (n.local ? zg : Ag)(n, r, t));
}
function Bg(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function Zg(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
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
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Bg(e, i)), n;
  }
  return o._value = t, o;
}
function Wg(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = pa(e);
  return this.tween(n, (r.local ? Yg : jg)(r, t));
}
function Kg(e, t) {
  return function() {
    Rs(this, e).delay = +t.apply(this, arguments);
  };
}
function Xg(e, t) {
  return t = +t, function() {
    Rs(this, e).delay = t;
  };
}
function Fg(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Kg : Xg)(t, e)) : Sn(this.node(), t).delay;
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
  return arguments.length ? this.each((typeof e == "function" ? Gg : Ug)(t, e)) : Sn(this.node(), t).duration;
}
function Qg(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Rn(this, e).ease = t;
  };
}
function eh(e) {
  var t = this._id;
  return arguments.length ? this.each(Qg(t, e)) : Sn(this.node(), t).ease;
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
  typeof e != "function" && (e = ac(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = [], l, u = 0; u < a; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && s.push(l);
  return new Gn(r, this._parents, this._name, this._id);
}
function oh(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), a = new Array(r), s = 0; s < i; ++s)
    for (var l = t[s], u = n[s], c = l.length, d = a[s] = new Array(c), v, p = 0; p < c; ++p)
      (v = l[p] || u[p]) && (d[p] = v);
  for (; s < r; ++s)
    a[s] = t[s];
  return new Gn(a, this._parents, this._name, this._id);
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
  return arguments.length < 2 ? Sn(this.node(), n).on.on(e) : this.each(ah(n, e, t));
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
      (c = s[v]) && (d = e.call(c, c.__data__, v, s)) && ("__data__" in c && (d.__data__ = c.__data__), u[v] = d, ha(u[v], t, n, v, u, Sn(c, n)));
  return new Gn(i, this._parents, t, n);
}
function dh(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = ic(e));
  for (var r = this._groups, o = r.length, i = [], a = [], s = 0; s < o; ++s)
    for (var l = r[s], u = l.length, c, d = 0; d < u; ++d)
      if (c = l[d]) {
        for (var v = e.call(c, c.__data__, d, l), p, h = Sn(c, n), x = 0, b = v.length; x < b; ++x)
          (p = v[x]) && ha(p, t, n, x, v, h);
        i.push(v), a.push(c);
      }
  return new Gn(i, a, t, n);
}
var fh = Uo.prototype.constructor;
function vh() {
  return new fh(this._groups, this._parents);
}
function ph(e, t) {
  var n, r, o;
  return function() {
    var i = no(this, e), a = (this.style.removeProperty(e), no(this, e));
    return i === a ? null : i === n && a === r ? o : o = t(n = i, r = a);
  };
}
function Oc(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function gh(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var a = no(this, e);
    return a === o ? null : a === r ? i : i = t(r = a, n);
  };
}
function hh(e, t, n) {
  var r, o, i;
  return function() {
    var a = no(this, e), s = n(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(e), no(this, e))), a === l ? null : a === r && l === o ? i : (o = l, i = t(r = a, s));
  };
}
function mh(e, t) {
  var n, r, o, i = "style." + t, a = "end." + i, s;
  return function() {
    var l = Rn(this, e), u = l.on, c = l.value[i] == null ? s || (s = Oc(t)) : void 0;
    (u !== n || o !== c) && (r = (n = u).copy()).on(a, o = c), l.on = r;
  };
}
function yh(e, t, n) {
  var r = (e += "") == "transform" ? yg : Mc;
  return t == null ? this.styleTween(e, ph(e, r)).on("end.style." + e, Oc(e)) : typeof t == "function" ? this.styleTween(e, hh(e, r, qs(this, "style." + e, t))).each(mh(this._id, e)) : this.styleTween(e, gh(e, r, t), n).on("end.style." + e, null);
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
function Eh(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && kh(o)), t;
  }
  return r._value = e, r;
}
function Sh(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, Eh(e));
}
function Ph() {
  for (var e = this._name, t = this._id, n = Tc(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var a = r[i], s = a.length, l, u = 0; u < s; ++u)
      if (l = a[u]) {
        var c = Sn(l, t);
        ha(l, e, n, u, a, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new Gn(r, this._parents, e, n);
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
var Oh = 0;
function Gn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function Tc() {
  return ++Oh;
}
var Bn = Uo.prototype;
Gn.prototype = {
  constructor: Gn,
  select: ch,
  selectAll: dh,
  selectChild: Bn.selectChild,
  selectChildren: Bn.selectChildren,
  filter: rh,
  merge: oh,
  selection: vh,
  transition: Ph,
  call: Bn.call,
  nodes: Bn.nodes,
  node: Bn.node,
  size: Bn.size,
  empty: Bn.empty,
  each: Bn.each,
  on: sh,
  attr: qg,
  attrTween: Wg,
  style: yh,
  styleTween: xh,
  text: _h,
  textTween: Sh,
  remove: uh,
  tween: Ng,
  delay: Fg,
  duration: Jg,
  ease: eh,
  easeVarying: nh,
  end: Mh,
  [Symbol.iterator]: Bn[Symbol.iterator]
};
function Th(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var Vh = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Th
};
function Hh(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function Nh(e) {
  var t, n;
  e instanceof Gn ? (t = e._id, e = e._name) : (t = Tc(), (n = Vh).time = Is(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var a = r[i], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && ha(l, e, t, u, a, n || Hh(l, t));
  return new Gn(r, this._parents, e, t);
}
Uo.prototype.interrupt = Tg;
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
function Zn(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
Zn.prototype = {
  constructor: Zn,
  scale: function(e) {
    return e === 1 ? this : new Zn(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new Zn(this.k, this.x + this.k * e, this.y + this.k * t);
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
var ma = new Zn(1, 0, 0);
Vc.prototype = Zn.prototype;
function Vc(e) {
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
function Ah() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function Il() {
  return this.__zoom || ma;
}
function zh(e) {
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
  var e = Lh, t = Ah, n = Rh, r = zh, o = Ih, i = [0, 1 / 0], a = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], s = 250, l = Cg, u = va("start", "zoom", "end"), c, d, v, p = 500, h = 150, x = 0, b = 10;
  function $(S) {
    S.property("__zoom", Il).on("wheel.zoom", N, { passive: !1 }).on("mousedown.zoom", H).on("dblclick.zoom", I).filter(o).on("touchstart.zoom", q).on("touchmove.zoom", D).on("touchend.zoom touchcancel.zoom", B).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  $.transform = function(S, C, P, V) {
    var T = S.selection ? S.selection() : S;
    T.property("__zoom", Il), S !== T ? k(S, C, P, V) : T.interrupt().each(function() {
      O(this, arguments).event(V).start().zoom(null, typeof C == "function" ? C.apply(this, arguments) : C).end();
    });
  }, $.scaleBy = function(S, C, P, V) {
    $.scaleTo(S, function() {
      var T = this.__zoom.k, M = typeof C == "function" ? C.apply(this, arguments) : C;
      return T * M;
    }, P, V);
  }, $.scaleTo = function(S, C, P, V) {
    $.transform(S, function() {
      var T = t.apply(this, arguments), M = this.__zoom, z = P == null ? w(T) : typeof P == "function" ? P.apply(this, arguments) : P, j = M.invert(z), K = typeof C == "function" ? C.apply(this, arguments) : C;
      return n(_(g(M, K), z, j), T, a);
    }, P, V);
  }, $.translateBy = function(S, C, P, V) {
    $.transform(S, function() {
      return n(this.__zoom.translate(
        typeof C == "function" ? C.apply(this, arguments) : C,
        typeof P == "function" ? P.apply(this, arguments) : P
      ), t.apply(this, arguments), a);
    }, null, V);
  }, $.translateTo = function(S, C, P, V, T) {
    $.transform(S, function() {
      var M = t.apply(this, arguments), z = this.__zoom, j = V == null ? w(M) : typeof V == "function" ? V.apply(this, arguments) : V;
      return n(ma.translate(j[0], j[1]).scale(z.k).translate(
        typeof C == "function" ? -C.apply(this, arguments) : -C,
        typeof P == "function" ? -P.apply(this, arguments) : -P
      ), M, a);
    }, V, T);
  };
  function g(S, C) {
    return C = Math.max(i[0], Math.min(i[1], C)), C === S.k ? S : new Zn(C, S.x, S.y);
  }
  function _(S, C, P) {
    var V = C[0] - P[0] * S.k, T = C[1] - P[1] * S.k;
    return V === S.x && T === S.y ? S : new Zn(S.k, V, T);
  }
  function w(S) {
    return [(+S[0][0] + +S[1][0]) / 2, (+S[0][1] + +S[1][1]) / 2];
  }
  function k(S, C, P, V) {
    S.on("start.zoom", function() {
      O(this, arguments).event(V).start();
    }).on("interrupt.zoom end.zoom", function() {
      O(this, arguments).event(V).end();
    }).tween("zoom", function() {
      var T = this, M = arguments, z = O(T, M).event(V), j = t.apply(T, M), K = P == null ? w(j) : typeof P == "function" ? P.apply(T, M) : P, te = Math.max(j[1][0] - j[0][0], j[1][1] - j[0][1]), G = T.__zoom, X = typeof C == "function" ? C.apply(T, M) : C, ye = l(G.invert(K).concat(te / G.k), X.invert(K).concat(te / X.k));
      return function(ae) {
        if (ae === 1) ae = X;
        else {
          var ge = ye(ae), ue = te / ge[2];
          ae = new Zn(ue, K[0] - ge[0] * ue, K[1] - ge[1] * ue);
        }
        z.zoom(null, ae);
      };
    });
  }
  function O(S, C, P) {
    return !P && S.__zooming || new E(S, C);
  }
  function E(S, C) {
    this.that = S, this.args = C, this.active = 0, this.sourceEvent = null, this.extent = t.apply(S, C), this.taps = 0;
  }
  E.prototype = {
    event: function(S) {
      return S && (this.sourceEvent = S), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(S, C) {
      return this.mouse && S !== "mouse" && (this.mouse[1] = C.invert(this.mouse[0])), this.touch0 && S !== "touch" && (this.touch0[1] = C.invert(this.touch0[0])), this.touch1 && S !== "touch" && (this.touch1[1] = C.invert(this.touch1[0])), this.that.__zoom = C, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(S) {
      var C = fn(this.that).datum();
      u.call(
        S,
        this.that,
        new Dh(S, {
          sourceEvent: this.sourceEvent,
          target: $,
          transform: this.that.__zoom,
          dispatch: u
        }),
        C
      );
    }
  };
  function N(S, ...C) {
    if (!e.apply(this, arguments)) return;
    var P = O(this, C).event(S), V = this.__zoom, T = Math.max(i[0], Math.min(i[1], V.k * Math.pow(2, r.apply(this, arguments)))), M = wn(S);
    if (P.wheel)
      (P.mouse[0][0] !== M[0] || P.mouse[0][1] !== M[1]) && (P.mouse[1] = V.invert(P.mouse[0] = M)), clearTimeout(P.wheel);
    else {
      if (V.k === T) return;
      P.mouse = [M, V.invert(M)], Ei(this), P.start();
    }
    ko(S), P.wheel = setTimeout(z, h), P.zoom("mouse", n(_(g(V, T), P.mouse[0], P.mouse[1]), P.extent, a));
    function z() {
      P.wheel = null, P.end();
    }
  }
  function H(S, ...C) {
    if (v || !e.apply(this, arguments)) return;
    var P = S.currentTarget, V = O(this, C, !0).event(S), T = fn(S.view).on("mousemove.zoom", K, !0).on("mouseup.zoom", te, !0), M = wn(S, P), z = S.clientX, j = S.clientY;
    hc(S.view), La(S), V.mouse = [M, this.__zoom.invert(M)], Ei(this), V.start();
    function K(G) {
      if (ko(G), !V.moved) {
        var X = G.clientX - z, ye = G.clientY - j;
        V.moved = X * X + ye * ye > x;
      }
      V.event(G).zoom("mouse", n(_(V.that.__zoom, V.mouse[0] = wn(G, P), V.mouse[1]), V.extent, a));
    }
    function te(G) {
      T.on("mousemove.zoom mouseup.zoom", null), mc(G.view, V.moved), ko(G), V.event(G).end();
    }
  }
  function I(S, ...C) {
    if (e.apply(this, arguments)) {
      var P = this.__zoom, V = wn(S.changedTouches ? S.changedTouches[0] : S, this), T = P.invert(V), M = P.k * (S.shiftKey ? 0.5 : 2), z = n(_(g(P, M), V, T), t.apply(this, C), a);
      ko(S), s > 0 ? fn(this).transition().duration(s).call(k, z, V, S) : fn(this).call($.transform, z, V, S);
    }
  }
  function q(S, ...C) {
    if (e.apply(this, arguments)) {
      var P = S.touches, V = P.length, T = O(this, C, S.changedTouches.length === V).event(S), M, z, j, K;
      for (La(S), z = 0; z < V; ++z)
        j = P[z], K = wn(j, this), K = [K, this.__zoom.invert(K), j.identifier], T.touch0 ? !T.touch1 && T.touch0[2] !== K[2] && (T.touch1 = K, T.taps = 0) : (T.touch0 = K, M = !0, T.taps = 1 + !!c);
      c && (c = clearTimeout(c)), M && (T.taps < 2 && (d = K[0], c = setTimeout(function() {
        c = null;
      }, p)), Ei(this), T.start());
    }
  }
  function D(S, ...C) {
    if (this.__zooming) {
      var P = O(this, C).event(S), V = S.changedTouches, T = V.length, M, z, j, K;
      for (ko(S), M = 0; M < T; ++M)
        z = V[M], j = wn(z, this), P.touch0 && P.touch0[2] === z.identifier ? P.touch0[0] = j : P.touch1 && P.touch1[2] === z.identifier && (P.touch1[0] = j);
      if (z = P.that.__zoom, P.touch1) {
        var te = P.touch0[0], G = P.touch0[1], X = P.touch1[0], ye = P.touch1[1], ae = (ae = X[0] - te[0]) * ae + (ae = X[1] - te[1]) * ae, ge = (ge = ye[0] - G[0]) * ge + (ge = ye[1] - G[1]) * ge;
        z = g(z, Math.sqrt(ae / ge)), j = [(te[0] + X[0]) / 2, (te[1] + X[1]) / 2], K = [(G[0] + ye[0]) / 2, (G[1] + ye[1]) / 2];
      } else if (P.touch0) j = P.touch0[0], K = P.touch0[1];
      else return;
      P.zoom("touch", n(_(z, j, K), P.extent, a));
    }
  }
  function B(S, ...C) {
    if (this.__zooming) {
      var P = O(this, C).event(S), V = S.changedTouches, T = V.length, M, z;
      for (La(S), v && clearTimeout(v), v = setTimeout(function() {
        v = null;
      }, p), M = 0; M < T; ++M)
        z = V[M], P.touch0 && P.touch0[2] === z.identifier ? delete P.touch0 : P.touch1 && P.touch1[2] === z.identifier && delete P.touch1;
      if (P.touch1 && !P.touch0 && (P.touch0 = P.touch1, delete P.touch1), P.touch0) P.touch0[1] = this.__zoom.invert(P.touch0[0]);
      else if (P.end(), P.taps === 2 && (z = wn(z, this), Math.hypot(d[0] - z[0], d[1] - z[1]) < b)) {
        var j = fn(this).on("dblclick.zoom");
        j && j.apply(this, arguments);
      }
    }
  }
  return $.wheelDelta = function(S) {
    return arguments.length ? (r = typeof S == "function" ? S : mi(+S), $) : r;
  }, $.filter = function(S) {
    return arguments.length ? (e = typeof S == "function" ? S : mi(!!S), $) : e;
  }, $.touchable = function(S) {
    return arguments.length ? (o = typeof S == "function" ? S : mi(!!S), $) : o;
  }, $.extent = function(S) {
    return arguments.length ? (t = typeof S == "function" ? S : mi([[+S[0][0], +S[0][1]], [+S[1][0], +S[1][1]]]), $) : t;
  }, $.scaleExtent = function(S) {
    return arguments.length ? (i[0] = +S[0], i[1] = +S[1], $) : [i[0], i[1]];
  }, $.translateExtent = function(S) {
    return arguments.length ? (a[0][0] = +S[0][0], a[1][0] = +S[1][0], a[0][1] = +S[0][1], a[1][1] = +S[1][1], $) : [[a[0][0], a[0][1]], [a[1][0], a[1][1]]];
  }, $.constrain = function(S) {
    return arguments.length ? (n = S, $) : n;
  }, $.duration = function(S) {
    return arguments.length ? (s = +S, $) : s;
  }, $.interpolate = function(S) {
    return arguments.length ? (l = S, $) : l;
  }, $.on = function() {
    var S = u.on.apply(u, arguments);
    return S === u ? $ : S;
  }, $.clickDistance = function(S) {
    return arguments.length ? (x = (S = +S) * S, $) : Math.sqrt(x);
  }, $.tapDistance = function(S) {
    return arguments.length ? (b = +S, $) : b;
  }, $;
}
const oo = {
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
}, Zi = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
];
var Tr;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(Tr || (Tr = {}));
var cr;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(cr || (cr = {}));
var Yi;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(Yi || (Yi = {}));
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
var Xr;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(Xr || (Xr = {}));
var Zo;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(Zo || (Zo = {}));
var qe;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(qe || (qe = {}));
const Rl = {
  [qe.Left]: qe.Right,
  [qe.Right]: qe.Left,
  [qe.Top]: qe.Bottom,
  [qe.Bottom]: qe.Top
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
function ql(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, i) => {
    t != null && t.has(i) || r.push(o);
  }), r.length && n(r);
}
function Bh(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const Zh = (e) => "id" in e && "source" in e && "target" in e, Yh = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), Bs = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), Qo = (e, t = [0, 0]) => {
  const { width: n, height: r } = yr(e), o = e.origin ?? t, i = n * o[0], a = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - a
  };
}, jh = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let a = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (a = i ? t.nodeLookup.get(o) : Bs(o) ? o : t.nodeLookup.get(o.id));
    const s = a ? ji(a, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return ya(r, s);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return wa(n);
}, ei = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = ji(r);
      n = ya(n, o);
    }
  }), wa(n);
}, Nc = (e, t, [n, r, o] = [0, 0, 1], i = !1, a = !1) => {
  const s = {
    ...ti(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: c, selectable: d = !0, hidden: v = !1 } = u;
    if (a && !d || v)
      continue;
    const p = c.width ?? u.width ?? u.initialWidth ?? null, h = c.height ?? u.height ?? u.initialHeight ?? null, x = Yo(s, ao(u)), b = (p ?? 0) * (h ?? 0), $ = i && x > 0;
    (!u.internals.handleBounds || $ || x >= b || u.dragging) && l.push(u);
  }
  return l;
}, ls = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function Wh(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t != null && t.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t != null && t.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function Kh({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, a) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const s = Wh(e, a), l = ei(s), u = Ys(l, t, n, (a == null ? void 0 : a.minZoom) ?? o, (a == null ? void 0 : a.maxZoom) ?? i, (a == null ? void 0 : a.padding) ?? 0.1);
  return await r.setViewport(u, { duration: a == null ? void 0 : a.duration }), Promise.resolve(!0);
}
function Xh({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const a = n.get(e), s = a.parentId ? n.get(a.parentId) : void 0, { x: l, y: u } = s ? s.internals.positionAbsolute : { x: 0, y: 0 }, c = a.origin ?? r;
  let d = o;
  if (a.extent === "parent" && !a.expandParent)
    if (!s)
      i == null || i("005", oo.error005());
    else {
      const p = s.measured.width, h = s.measured.height;
      p && h && (d = [
        [l, u],
        [l + p, u + h]
      ]);
    }
  else s && so(a.extent) && (d = [
    [a.extent[0][0] + l, a.extent[0][1] + u],
    [a.extent[1][0] + l, a.extent[1][1] + u]
  ]);
  const v = so(d) ? Vr(t, d, a.measured) : t;
  return (a.measured.width === void 0 || a.measured.height === void 0) && (i == null || i("015", oo.error015())), {
    position: {
      x: v.x - l + (a.measured.width ?? 0) * c[0],
      y: v.y - u + (a.measured.height ?? 0) * c[1]
    },
    positionAbsolute: v
  };
}
async function Dc({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
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
const io = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), Vr = (e = { x: 0, y: 0 }, t, n) => ({
  x: io(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: io(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function Lc(e, t, n) {
  const { width: r, height: o } = yr(n), { x: i, y: a } = n.internals.positionAbsolute;
  return Vr(e, [
    [i, a],
    [i + r, a + o]
  ], t);
}
const Bl = (e, t, n) => e < t ? io(Math.abs(e - t), 1, t) / t : e > n ? -io(Math.abs(e - n), 1, t) / t : 0, Ac = (e, t, n = 15, r = 40) => {
  const o = Bl(e.x, r, t.width - r) * n, i = Bl(e.y, r, t.height - r) * n;
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
}), ao = (e, t = [0, 0]) => {
  var n, r;
  const { x: o, y: i } = Bs(e) ? e.internals.positionAbsolute : Qo(e, t);
  return {
    x: o,
    y: i,
    width: ((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, ji = (e, t = [0, 0]) => {
  var n, r;
  const { x: o, y: i } = Bs(e) ? e.internals.positionAbsolute : Qo(e, t);
  return {
    x: o,
    y: i,
    x2: o + (((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: i + (((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, zc = (e, t) => wa(ya(us(e), us(t))), Yo = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, Zl = (e) => Yn(e.width) && Yn(e.height) && Yn(e.x) && Yn(e.y), Yn = (e) => !isNaN(e) && isFinite(e), Fh = (e, t) => {
}, Zs = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), ti = ({ x: e, y: t }, [n, r, o], i = !1, a = [1, 1]) => {
  const s = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? Zs(s, a) : s;
}, Wi = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
});
function Br(e, t) {
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
    const r = Br(e, n), o = Br(e, t);
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
    const r = Br(e.top ?? e.y ?? 0, n), o = Br(e.bottom ?? e.y ?? 0, n), i = Br(e.left ?? e.x ?? 0, t), a = Br(e.right ?? e.x ?? 0, t);
    return { top: r, right: a, bottom: o, left: i, x: i + a, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function Uh(e, t, n, r, o, i) {
  const { x: a, y: s } = Wi(e, [t, n, r]), { x: l, y: u } = Wi({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), c = o - l, d = i - u;
  return {
    left: Math.floor(a),
    top: Math.floor(s),
    right: Math.floor(c),
    bottom: Math.floor(d)
  };
}
const Ys = (e, t, n, r, o, i) => {
  const a = Gh(i, t, n), s = (t - a.x) / e.width, l = (n - a.y) / e.height, u = Math.min(s, l), c = io(u, r, o), d = e.x + e.width / 2, v = e.y + e.height / 2, p = t / 2 - d * c, h = n / 2 - v * c, x = Uh(e, p, h, c, t, n), b = {
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
}, Ki = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function so(e) {
  return e !== void 0 && e !== "parent";
}
function yr(e) {
  var t, n;
  return {
    width: ((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight ?? 0
  };
}
function Ic(e) {
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
function Aa(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: a } = Xn(e), s = ti({ x: i - ((o == null ? void 0 : o.left) ?? 0), y: a - ((o == null ? void 0 : o.top) ?? 0) }, r), { x: l, y: u } = n ? Zs(s, t) : s;
  return {
    xSnapped: l,
    ySnapped: u,
    ...s
  };
}
const Rc = (e) => ({
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
const qc = (e) => "clientX" in e, Xn = (e, t) => {
  var n, r;
  const o = qc(e), i = o ? e.clientX : (n = e.touches) == null ? void 0 : n[0].clientX, a = o ? e.clientY : (r = e.touches) == null ? void 0 : r[0].clientY;
  return {
    x: i - ((t == null ? void 0 : t.left) ?? 0),
    y: a - ((t == null ? void 0 : t.top) ?? 0)
  };
}, Yl = (e, t, n, r, o) => {
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
      ...Rc(a)
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
function jl({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case qe.Left:
      return [t - yi(t - r, i), n];
    case qe.Right:
      return [t + yi(r - t, i), n];
    case qe.Top:
      return [t, n - yi(n - o, i)];
    case qe.Bottom:
      return [t, n + yi(o - n, i)];
  }
}
function Bc({ sourceX: e, sourceY: t, sourcePosition: n = qe.Bottom, targetX: r, targetY: o, targetPosition: i = qe.Top, curvature: a = 0.25 }) {
  const [s, l] = jl({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: a
  }), [u, c] = jl({
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
  const i = ya(ji(e), ji(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const a = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return Yo(a, wa(i)) > 0;
}
const a0 = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, s0 = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), l0 = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return Zh(e) ? n = { ...e } : n = {
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
const Wl = {
  [qe.Left]: { x: -1, y: 0 },
  [qe.Right]: { x: 1, y: 0 },
  [qe.Top]: { x: 0, y: -1 },
  [qe.Bottom]: { x: 0, y: 1 }
}, u0 = ({ source: e, sourcePosition: t = qe.Bottom, target: n }) => t === qe.Left || t === qe.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Kl = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function c0({ source: e, sourcePosition: t = qe.Bottom, target: n, targetPosition: r = qe.Top, center: o, offset: i }) {
  const a = Wl[t], s = Wl[r], l = { x: e.x + a.x * i, y: e.y + a.y * i }, u = { x: n.x + s.x * i, y: n.y + s.y * i }, c = u0({
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
    const O = [
      { x: h, y: l.y },
      { x: h, y: u.y }
    ], E = [
      { x: l.x, y: x },
      { x: u.x, y: x }
    ];
    a[d] === v ? p = d === "x" ? O : E : p = d === "x" ? E : O;
  } else {
    const O = [{ x: l.x, y: u.y }], E = [{ x: u.x, y: l.y }];
    if (d === "x" ? p = a.x === v ? E : O : p = a.y === v ? O : E, t === r) {
      const D = Math.abs(e[d] - n[d]);
      if (D <= i) {
        const B = Math.min(i - 1, i - D);
        a[d] === v ? b[d] = (l[d] > e[d] ? -1 : 1) * B : $[d] = (u[d] > n[d] ? -1 : 1) * B;
      }
    }
    if (t !== r) {
      const D = d === "x" ? "y" : "x", B = a[d] === s[D], S = l[D] > u[D], C = l[D] < u[D];
      (a[d] === 1 && (!B && S || B && C) || a[d] !== 1 && (!B && C || B && S)) && (p = d === "x" ? O : E);
    }
    const N = { x: l.x + b.x, y: l.y + b.y }, H = { x: u.x + $.x, y: u.y + $.y }, I = Math.max(Math.abs(N.x - p[0].x), Math.abs(H.x - p[0].x)), q = Math.max(Math.abs(N.y - p[0].y), Math.abs(H.y - p[0].y));
    I >= q ? (h = (N.x + H.x) / 2, x = p[0].y) : (h = p[0].x, x = (N.y + H.y) / 2);
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
  const o = Math.min(Kl(e, t) / 2, Kl(t, n) / 2, r), { x: i, y: a } = t;
  if (e.x === i && i === n.x || e.y === a && a === n.y)
    return `L${i} ${a}`;
  if (e.y === a) {
    const u = e.x < n.x ? -1 : 1, c = e.y < n.y ? 1 : -1;
    return `L ${i + o * u},${a}Q ${i},${a} ${i},${a + o * c}`;
  }
  const s = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${a + o * l}Q ${i},${a} ${i + o * s},${a}`;
}
function Xi({ sourceX: e, sourceY: t, sourcePosition: n = qe.Bottom, targetX: r, targetY: o, targetPosition: i = qe.Top, borderRadius: a = 5, centerX: s, centerY: l, offset: u = 20 }) {
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
function Xl(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function f0(e) {
  var t;
  const { sourceNode: n, targetNode: r } = e;
  if (!Xl(n) || !Xl(r))
    return null;
  const o = n.internals.handleBounds || Fl(n.handles), i = r.internals.handleBounds || Fl(r.handles), a = Gl((o == null ? void 0 : o.source) ?? [], e.sourceHandle), s = Gl(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === Tr.Strict ? (i == null ? void 0 : i.target) ?? [] : ((i == null ? void 0 : i.target) ?? []).concat((i == null ? void 0 : i.source) ?? []),
    e.targetHandle
  );
  if (!a || !s)
    return (t = e.onError) == null || t.call(e, "008", oo.error008(a ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const l = (a == null ? void 0 : a.position) || qe.Bottom, u = (s == null ? void 0 : s.position) || qe.Top, c = jo(n, a, l), d = jo(r, s, u);
  return {
    sourceX: c.x,
    sourceY: c.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: l,
    targetPosition: u
  };
}
function Fl(e) {
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
function jo(e, t, n = qe.Left, r = !1) {
  const o = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, i = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: a, height: s } = t ?? yr(e);
  if (r)
    return { x: o + a / 2, y: i + s / 2 };
  switch ((t == null ? void 0 : t.position) ?? n) {
    case qe.Top:
      return { x: o + a / 2, y: i };
    case qe.Right:
      return { x: o + a, y: i + s / 2 };
    case qe.Bottom:
      return { x: o + a / 2, y: i + s };
    case qe.Left:
      return { x: o, y: i + s / 2 };
  }
}
function Gl(e, t) {
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
    case qe.Right:
      a = [
        (e.x + e.width) * t.zoom + t.x + r,
        (e.y + e.height * i) * t.zoom + t.y
      ], s = [0, -100 * i];
      break;
    case qe.Bottom:
      a[1] = (e.y + e.height) * t.zoom + t.y + r, s[1] = 0;
      break;
    case qe.Left:
      a = [
        e.x * t.zoom + t.x - r,
        (e.y + e.height * i) * t.zoom + t.y
      ], s = [-100, -100 * i];
      break;
  }
  return `translate(${a[0]}px, ${a[1]}px) translate(${s[0]}%, ${s[1]}%)`;
}
const js = {
  nodeOrigin: [0, 0],
  nodeExtent: Zi,
  elevateNodesOnSelect: !0,
  defaults: {}
}, g0 = {
  ...js,
  checkEquality: !0
};
function Ws(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function h0(e, t, n) {
  const r = Ws(js, n);
  for (const o of e.values())
    if (o.parentId)
      Ks(o, e, t, r);
    else {
      const i = Qo(o, r.nodeOrigin), a = so(o.extent) ? o.extent : r.nodeExtent, s = Vr(i, a, yr(o));
      o.internals.positionAbsolute = s;
    }
}
function Yc(e, t, n, r) {
  var o, i;
  const a = Ws(g0, r);
  let s = e.length > 0;
  const l = new Map(t), u = a != null && a.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const c of e) {
    let d = l.get(c.id);
    if (a.checkEquality && c === (d == null ? void 0 : d.internals.userNode))
      t.set(c.id, d);
    else {
      const v = Qo(c, a.nodeOrigin), p = so(c.extent) ? c.extent : a.nodeExtent, h = Vr(v, p, yr(c));
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
          z: jc(c, u),
          userNode: c
        }
      }, t.set(c.id, d);
    }
    (d.measured === void 0 || d.measured.width === void 0 || d.measured.height === void 0) && !d.hidden && (s = !1), c.parentId && Ks(d, t, n, r);
  }
  return s;
}
function m0(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function Ks(e, t, n, r) {
  const { elevateNodesOnSelect: o, nodeOrigin: i, nodeExtent: a } = Ws(js, r), s = e.parentId, l = t.get(s);
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
function jc(e, t) {
  return (Yn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function y0(e, t, n, r, o) {
  const { x: i, y: a } = t.internals.positionAbsolute, s = yr(e), l = Qo(e, n), u = so(e.extent) ? Vr(l, e.extent, s) : l;
  let c = Vr({ x: i + u.x, y: a + u.y }, r, s);
  e.extent === "parent" && (c = Lc(c, s, t));
  const d = jc(e, o), v = t.internals.z ?? 0;
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
    const u = ((o = a.get(s.parentId)) == null ? void 0 : o.expandedRect) ?? ao(l), c = zc(u, s.rect);
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
    const h = Rc(v.nodeElement), x = p.measured.width !== h.width || p.measured.height !== h.height;
    if (h.width && h.height && (x || !p.internals.handleBounds || v.force)) {
      const b = v.nodeElement.getBoundingClientRect(), $ = so(p.extent) ? p.extent : i;
      let { positionAbsolute: g } = p.internals;
      p.parentId && p.extent === "parent" ? g = Lc(g, h, t.get(p.parentId)) : $ && (g = Vr(g, $, h));
      const _ = {
        ...p,
        measured: h,
        internals: {
          ...p.internals,
          positionAbsolute: g,
          handleBounds: {
            source: Yl("source", v.nodeElement, b, c, p.id),
            target: Yl("target", v.nodeElement, b, c, p.id)
          }
        }
      };
      t.set(p.id, _), p.parentId && Ks(_, t, n, { nodeOrigin: o }), s = !0, x && (l.push({
        id: p.id,
        type: "dimensions",
        dimensions: h
      }), p.expandParent && p.parentId && d.push({
        id: p.id,
        parentId: p.parentId,
        rect: ao(_, o)
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
function Ul(e, t, n, r, o, i) {
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
function Wc(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: a = null, targetHandle: s = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: a, targetHandle: s }, u = `${o}-${a}--${i}-${s}`, c = `${i}-${s}--${o}-${a}`;
    Ul("source", l, c, e, o, a), Ul("target", l, u, e, i, s), t.set(r.id, r);
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
function Kc(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : Kc(n, t) : !1;
}
function Jl(e, t, n) {
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
    if ((a.selected || a.id === r) && (!a.parentId || !Kc(a, e)) && (a.draggable || t && typeof a.draggable > "u")) {
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
function za({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
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
    function O({ x: I, y: q }, D) {
      const { nodeLookup: B, nodeExtent: S, snapGrid: C, snapToGrid: P, nodeOrigin: V, onNodeDrag: T, onSelectionDrag: M, onError: z, updateNodePositions: j } = t();
      i = { x: I, y: q };
      let K = !1, te = { x: 0, y: 0, x2: 0, y2: 0 };
      if (s.size > 1 && S) {
        const G = ei(s);
        te = us(G);
      }
      for (const [G, X] of s) {
        if (!B.has(G))
          continue;
        let ye = { x: I - X.distance.x, y: q - X.distance.y };
        P && (ye = Zs(ye, C));
        let ae = [
          [S[0][0], S[0][1]],
          [S[1][0], S[1][1]]
        ];
        if (s.size > 1 && S && !X.extent) {
          const { positionAbsolute: Ee } = X.internals, xe = Ee.x - te.x + S[0][0], Ne = Ee.x + X.measured.width - te.x2 + S[1][0], de = Ee.y - te.y + S[0][1], Q = Ee.y + X.measured.height - te.y2 + S[1][1];
          ae = [
            [xe, de],
            [Ne, Q]
          ];
        }
        const { position: ge, positionAbsolute: ue } = Xh({
          nodeId: G,
          nextPosition: ye,
          nodeLookup: B,
          nodeExtent: ae,
          nodeOrigin: V,
          onError: z
        });
        K = K || X.position.x !== ge.x || X.position.y !== ge.y, X.position = ge, X.internals.positionAbsolute = ue;
      }
      if (K && (j(s, !0), D && (r || T || !w && M))) {
        const [G, X] = za({
          nodeId: w,
          dragItems: s,
          nodeLookup: B
        });
        r == null || r(D, s, G, X), T == null || T(D, G, X), w || M == null || M(D, X);
      }
    }
    async function E() {
      if (!c)
        return;
      const { transform: I, panBy: q, autoPanSpeed: D, autoPanOnNodeDrag: B } = t();
      if (!B) {
        l = !1, cancelAnimationFrame(a);
        return;
      }
      const [S, C] = Ac(u, c, D);
      (S !== 0 || C !== 0) && (i.x = (i.x ?? 0) - S / I[2], i.y = (i.y ?? 0) - C / I[2], await q({ x: S, y: C }) && O(i, null)), a = requestAnimationFrame(E);
    }
    function N(I) {
      var q;
      const { nodeLookup: D, multiSelectionActive: B, nodesDraggable: S, transform: C, snapGrid: P, snapToGrid: V, selectNodesOnDrag: T, onNodeDragStart: M, onSelectionDragStart: z, unselectNodesAndEdges: j } = t();
      d = !0, (!T || !_) && !B && w && ((q = D.get(w)) != null && q.selected || j()), _ && T && w && (e == null || e(w));
      const K = Aa(I.sourceEvent, { transform: C, snapGrid: P, snapToGrid: V, containerBounds: c });
      if (i = K, s = C0(D, S, K, w), s.size > 0 && (n || M || !w && z)) {
        const [te, G] = za({
          nodeId: w,
          dragItems: s,
          nodeLookup: D
        });
        n == null || n(I.sourceEvent, s, te, G), M == null || M(I.sourceEvent, te, G), w || z == null || z(I.sourceEvent, G);
      }
    }
    const H = Up().clickDistance(k).on("start", (I) => {
      const { domNode: q, nodeDragThreshold: D, transform: B, snapGrid: S, snapToGrid: C } = t();
      c = (q == null ? void 0 : q.getBoundingClientRect()) || null, p = !1, D === 0 && N(I), i = Aa(I.sourceEvent, { transform: B, snapGrid: S, snapToGrid: C, containerBounds: c }), u = Xn(I.sourceEvent, c);
    }).on("drag", (I) => {
      const { autoPanOnNodeDrag: q, transform: D, snapGrid: B, snapToGrid: S, nodeDragThreshold: C, nodeLookup: P } = t(), V = Aa(I.sourceEvent, { transform: D, snapGrid: B, snapToGrid: S, containerBounds: c });
      if ((I.sourceEvent.type === "touchmove" && I.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      w && !P.has(w)) && (p = !0), !p) {
        if (!l && q && d && (l = !0, E()), !d) {
          const T = V.xSnapped - (i.x ?? 0), M = V.ySnapped - (i.y ?? 0);
          Math.sqrt(T * T + M * M) > C && N(I);
        }
        (i.x !== V.xSnapped || i.y !== V.ySnapped) && s && d && (u = Xn(I.sourceEvent, c), O(V, I.sourceEvent));
      }
    }).on("end", (I) => {
      if (!(!d || p) && (l = !1, d = !1, cancelAnimationFrame(a), s.size > 0)) {
        const { nodeLookup: q, updateNodePositions: D, onNodeDragStop: B, onSelectionDragStop: S } = t();
        if (D(s, !1), o || B || !w && S) {
          const [C, P] = za({
            nodeId: w,
            dragItems: s,
            nodeLookup: q,
            dragging: !1
          });
          o == null || o(I.sourceEvent, s, C, P), B == null || B(I.sourceEvent, C, P), w || S == null || S(I.sourceEvent, P);
        }
      }
    }).filter((I) => {
      const q = I.target;
      return !I.button && (!b || !Jl(q, `.${b}`, g)) && (!$ || Jl(q, $, g));
    });
    v.call(H);
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
    Yo(o, ao(i)) > 0 && r.push(i);
  return r;
}
const E0 = 250;
function S0(e, t, n, r) {
  var o, i;
  let a = [], s = 1 / 0;
  const l = k0(e, n, t + E0);
  for (const u of l) {
    const c = [...((o = u.internals.handleBounds) == null ? void 0 : o.source) ?? [], ...((i = u.internals.handleBounds) == null ? void 0 : i.target) ?? []];
    for (const d of c) {
      if (r.nodeId === d.nodeId && r.type === d.type && r.id === d.id)
        continue;
      const { x: v, y: p } = jo(u, d, d.position, !0), h = Math.sqrt(Math.pow(v - e.x, 2) + Math.pow(p - e.y, 2));
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
function Xc(e, t, n, r, o, i = !1) {
  var a, s, l;
  const u = r.get(e);
  if (!u)
    return null;
  const c = o === "strict" ? (a = u.internals.handleBounds) == null ? void 0 : a[t] : [...((s = u.internals.handleBounds) == null ? void 0 : s.source) ?? [], ...((l = u.internals.handleBounds) == null ? void 0 : l.target) ?? []], d = (n ? c == null ? void 0 : c.find((v) => v.id === n) : c == null ? void 0 : c[0]) ?? null;
  return d && i ? { ...d, ...jo(u, d, d.position, !0) } : d;
}
function Fc(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function P0(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const Gc = () => !0;
function M0(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: a, domNode: s, nodeLookup: l, lib: u, autoPanOnConnect: c, flowId: d, panBy: v, cancelConnection: p, onConnectStart: h, onConnect: x, onConnectEnd: b, isValidConnection: $ = Gc, onReconnectEnd: g, updateConnection: _, getTransform: w, getFromHandle: k, autoPanSpeed: O }) {
  const E = e0(e.target);
  let N = 0, H;
  const { x: I, y: q } = Xn(e), D = E == null ? void 0 : E.elementFromPoint(I, q), B = Fc(i, D), S = s == null ? void 0 : s.getBoundingClientRect();
  if (!S || !B)
    return;
  const C = Xc(o, B, r, l, t);
  if (!C)
    return;
  let P = Xn(e, S), V = !1, T = null, M = !1, z = null;
  function j() {
    if (!c || !S)
      return;
    const [ge, ue] = Ac(P, S, O);
    v({ x: ge, y: ue }), N = requestAnimationFrame(j);
  }
  const K = {
    ...C,
    nodeId: o,
    type: B,
    position: C.position
  }, te = l.get(o), G = {
    inProgress: !0,
    isValid: null,
    from: jo(te, K, qe.Left, !0),
    fromHandle: K,
    fromPosition: K.position,
    fromNode: te,
    to: P,
    toHandle: null,
    toPosition: Rl[K.position],
    toNode: null
  };
  _(G);
  let X = G;
  h == null || h(e, { nodeId: o, handleId: r, handleType: B });
  function ye(ge) {
    if (!k() || !K) {
      ae(ge);
      return;
    }
    const ue = w();
    P = Xn(ge, S), H = S0(ti(P, ue, !1, [1, 1]), n, l, K), V || (j(), V = !0);
    const Ee = Uc(ge, {
      handle: H,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: a ? "target" : "source",
      isValidConnection: $,
      doc: E,
      lib: u,
      flowId: d,
      nodeLookup: l
    });
    z = Ee.handleDomNode, T = Ee.connection, M = P0(!!H, Ee.isValid);
    const xe = {
      // from stays the same
      ...X,
      isValid: M,
      to: H && M ? Wi({ x: H.x, y: H.y }, ue) : P,
      toHandle: Ee.toHandle,
      toPosition: M && Ee.toHandle ? Ee.toHandle.position : Rl[K.position],
      toNode: Ee.toHandle ? l.get(Ee.toHandle.nodeId) : null
    };
    M && H && X.toHandle && xe.toHandle && X.toHandle.type === xe.toHandle.type && X.toHandle.nodeId === xe.toHandle.nodeId && X.toHandle.id === xe.toHandle.id && X.to.x === xe.to.x && X.to.y === xe.to.y || (_(xe), X = xe);
  }
  function ae(ge) {
    (H || z) && T && M && (x == null || x(T));
    const { inProgress: ue, ...Ee } = X, xe = {
      ...Ee,
      toPosition: X.toHandle ? X.toPosition : null
    };
    b == null || b(ge, xe), i && (g == null || g(ge, xe)), p(), cancelAnimationFrame(N), V = !1, M = !1, T = null, z = null, E.removeEventListener("mousemove", ye), E.removeEventListener("mouseup", ae), E.removeEventListener("touchmove", ye), E.removeEventListener("touchend", ae);
  }
  E.addEventListener("mousemove", ye), E.addEventListener("mouseup", ae), E.addEventListener("touchmove", ye), E.addEventListener("touchend", ae);
}
function Uc(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: a, lib: s, flowId: l, isValidConnection: u = Gc, nodeLookup: c }) {
  const d = i === "target", v = t ? a.querySelector(`.${s}-flow__handle[data-id="${l}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: p, y: h } = Xn(e), x = a.elementFromPoint(p, h), b = x != null && x.classList.contains(`${s}-flow__handle`) ? x : v, $ = {
    handleDomNode: b,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (b) {
    const g = Fc(void 0, b), _ = b.getAttribute("data-nodeid"), w = b.getAttribute("data-handleid"), k = b.classList.contains("connectable"), O = b.classList.contains("connectableend");
    if (!_ || !g)
      return $;
    const E = {
      source: d ? _ : r,
      sourceHandle: d ? w : o,
      target: d ? r : _,
      targetHandle: d ? o : w
    };
    $.connection = E;
    const N = k && O && (n === Tr.Strict ? d && g === "source" || !d && g === "target" : _ !== r || w !== o);
    $.isValid = N && u(E), $.toHandle = Xc(_, g, w, c, n, !1);
  }
  return $;
}
const O0 = {
  onPointerDown: M0,
  isValid: Uc
};
function T0({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = fn(e);
  function i({ translateExtent: s, width: l, height: u, zoomStep: c = 10, pannable: d = !0, zoomable: v = !0, inversePan: p = !1 }) {
    const h = (_) => {
      const w = n();
      if (_.sourceEvent.type !== "wheel" || !t)
        return;
      const k = -_.sourceEvent.deltaY * (_.sourceEvent.deltaMode === 1 ? 0.05 : _.sourceEvent.deltaMode ? 1 : 2e-3) * c, O = w[2] * Math.pow(2, k);
      t.scaleTo(O);
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
      ], O = [k[0] - x[0], k[1] - x[1]];
      x = k;
      const E = r() * Math.max(w[2], Math.log(w[2])) * (p ? -1 : 1), N = {
        x: w[0] - O[0] * E,
        y: w[1] - O[1] * E
      }, H = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: N.x,
        y: N.y,
        zoom: w[2]
      }, H, s);
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
const V0 = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, ba = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), Ia = ({ x: e, y: t, zoom: n }) => ma.translate(e, t).scale(n), Yr = (e, t) => e.target.closest(`.${t}`), Jc = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), Ra = (e, t = 0, n = () => {
}) => {
  const r = typeof t == "number" && t > 0;
  return r || n(), r ? e.transition().duration(t).on("end", n) : e;
}, Qc = (e) => {
  const t = e.ctrlKey && Ki() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function H0({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: a, onPanZoomStart: s, onPanZoom: l, onPanZoomEnd: u }) {
  return (c) => {
    if (Yr(c, t))
      return !1;
    c.preventDefault(), c.stopImmediatePropagation();
    const d = n.property("__zoom").k || 1;
    if (c.ctrlKey && a) {
      const b = wn(c), $ = Qc(c), g = d * Math.pow(2, $);
      r.scaleTo(n, g, b, c);
      return;
    }
    const v = c.deltaMode === 1 ? 20 : 1;
    let p = o === cr.Vertical ? 0 : c.deltaX * v, h = o === cr.Horizontal ? 0 : c.deltaY * v;
    !Ki() && c.shiftKey && o !== cr.Vertical && (p = c.deltaY * v, h = 0), r.translateBy(
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
    const i = r.type === "wheel", a = !t && i && !r.ctrlKey, s = Yr(r, e);
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
    e.usedRightMouseButton = !!(n && Jc(t, e.mouseButton ?? 0)), (a = i.sourceEvent) != null && a.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !((s = i.sourceEvent) != null && s.internal) && (o == null || o(i.sourceEvent, ba(i.transform)));
  };
}
function A0({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (a) => {
    var s;
    if (!((s = a.sourceEvent) != null && s.internal) && (e.isZoomingOrPanning = !1, i && Jc(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && a.sourceEvent && i(a.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && V0(e.prevViewport, a.transform))) {
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
function z0({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: a, noWheelClassName: s, noPanClassName: l, lib: u }) {
  return (c) => {
    var d;
    const v = e || t, p = n && c.ctrlKey;
    if (c.button === 1 && c.type === "mousedown" && (Yr(c, `${u}-flow__node`) || Yr(c, `${u}-flow__edge`)))
      return !0;
    if (!r && !v && !o && !i && !n || a || Yr(c, s) && c.type === "wheel" || Yr(c, l) && (c.type !== "wheel" || o && c.type === "wheel" && !e) || !n && c.ctrlKey && c.type === "wheel")
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
  }, d = e.getBoundingClientRect(), v = Hc().clickDistance(!Yn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), p = fn(e).call(v);
  _({
    x: i.x,
    y: i.y,
    zoom: io(i.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], o);
  const h = p.on("wheel.zoom"), x = p.on("dblclick.zoom");
  v.wheelDelta(Qc);
  function b(D, B) {
    return p ? new Promise((S) => {
      v == null || v.transform(Ra(p, B == null ? void 0 : B.duration, () => S(!0)), D);
    }) : Promise.resolve(!1);
  }
  function $({ noWheelClassName: D, noPanClassName: B, onPaneContextMenu: S, userSelectionActive: C, panOnScroll: P, panOnDrag: V, panOnScrollMode: T, panOnScrollSpeed: M, preventScrolling: z, zoomOnPinch: j, zoomOnScroll: K, zoomOnDoubleClick: te, zoomActivationKeyPressed: G, lib: X, onTransformChange: ye }) {
    C && !c.isZoomingOrPanning && g();
    const ae = P && !G && !C ? H0({
      zoomPanValues: c,
      noWheelClassName: D,
      d3Selection: p,
      d3Zoom: v,
      panOnScrollMode: T,
      panOnScrollSpeed: M,
      zoomOnPinch: j,
      onPanZoomStart: s,
      onPanZoom: a,
      onPanZoomEnd: l
    }) : N0({
      noWheelClassName: D,
      preventScrolling: z,
      d3ZoomHandler: h
    });
    if (p.on("wheel.zoom", ae, { passive: !1 }), !C) {
      const ue = D0({
        zoomPanValues: c,
        onDraggingChange: u,
        onPanZoomStart: s
      });
      v.on("start", ue);
      const Ee = L0({
        zoomPanValues: c,
        panOnDrag: V,
        onPaneContextMenu: !!S,
        onPanZoom: a,
        onTransformChange: ye
      });
      v.on("zoom", Ee);
      const xe = A0({
        zoomPanValues: c,
        panOnDrag: V,
        panOnScroll: P,
        onPaneContextMenu: S,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      v.on("end", xe);
    }
    const ge = z0({
      zoomActivationKeyPressed: G,
      panOnDrag: V,
      zoomOnScroll: K,
      panOnScroll: P,
      zoomOnDoubleClick: te,
      zoomOnPinch: j,
      userSelectionActive: C,
      noPanClassName: B,
      noWheelClassName: D,
      lib: X
    });
    v.filter(ge), te ? p.on("dblclick.zoom", x) : p.on("dblclick.zoom", null);
  }
  function g() {
    v.on("zoom", null);
  }
  async function _(D, B, S) {
    const C = Ia(D), P = v == null ? void 0 : v.constrain()(C, B, S);
    return P && await b(P), new Promise((V) => V(P));
  }
  async function w(D, B) {
    const S = Ia(D);
    return await b(S, B), new Promise((C) => C(S));
  }
  function k(D) {
    if (p) {
      const B = Ia(D), S = p.property("__zoom");
      (S.k !== D.zoom || S.x !== D.x || S.y !== D.y) && (v == null || v.transform(p, B, null, { sync: !0 }));
    }
  }
  function O() {
    const D = p ? Vc(p.node()) : { x: 0, y: 0, k: 1 };
    return { x: D.x, y: D.y, zoom: D.k };
  }
  function E(D, B) {
    return p ? new Promise((S) => {
      v == null || v.scaleTo(Ra(p, B == null ? void 0 : B.duration, () => S(!0)), D);
    }) : Promise.resolve(!1);
  }
  function N(D, B) {
    return p ? new Promise((S) => {
      v == null || v.scaleBy(Ra(p, B == null ? void 0 : B.duration, () => S(!0)), D);
    }) : Promise.resolve(!1);
  }
  function H(D) {
    v == null || v.scaleExtent(D);
  }
  function I(D) {
    v == null || v.translateExtent(D);
  }
  function q(D) {
    const B = !Yn(D) || D < 0 ? 0 : D;
    v == null || v.clickDistance(B);
  }
  return {
    update: $,
    destroy: g,
    setViewport: w,
    setViewportConstrained: _,
    getViewport: O,
    scaleTo: E,
    scaleBy: N,
    setScaleExtent: H,
    setTranslateExtent: I,
    syncViewport: k,
    setClickDistance: q
  };
}
var Ql;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Ql || (Ql = {}));
var R0 = /* @__PURE__ */ ie('<div role="button" tabindex="-1"><!></div>');
function pr(e, t) {
  he(t, !1);
  const [n, r] = vt(), o = () => oe(te, "$connectable", n), i = () => oe(ge, "$connectionRadius", n), a = () => oe(ye, "$domNode", n), s = () => oe(ae, "$nodeLookup", n), l = () => oe(X, "$connectionMode", n), u = () => oe(xe, "$lib", n), c = () => oe(_e, "$autoPanOnConnect", n), d = () => oe(Se, "$flowId", n), v = () => oe(Ee, "$isValidConnectionStore", n), p = () => oe(de, "$onedgecreate", n), h = () => oe(ce, "$onConnectAction", n), x = () => oe(fe, "$onConnectStartAction", n), b = () => oe(ve, "$onConnectEndAction", n), $ = () => oe(ue, "$viewport", n), g = () => oe(at, "$connection", n), _ = () => oe(De, "$edges", n), w = () => oe(Le, "$connectionLookup", n), k = /* @__PURE__ */ le(), O = /* @__PURE__ */ le(), E = /* @__PURE__ */ le(), N = /* @__PURE__ */ le(), H = /* @__PURE__ */ le(), I = /* @__PURE__ */ le(), q = /* @__PURE__ */ le(), D = /* @__PURE__ */ le();
  let B = y(t, "id", 12, void 0), S = y(t, "type", 12, "source"), C = y(t, "position", 28, () => qe.Top), P = y(t, "style", 12, void 0), V = y(t, "isValidConnection", 12, void 0), T = y(t, "onconnect", 12, void 0), M = y(t, "ondisconnect", 12, void 0), z = y(t, "isConnectable", 12, void 0), j = y(t, "class", 12, void 0);
  const K = Pr("svelteflow__node_id"), te = Pr("svelteflow__node_connectable"), G = et(), {
    connectionMode: X,
    domNode: ye,
    nodeLookup: ae,
    connectionRadius: ge,
    viewport: ue,
    isValidConnection: Ee,
    lib: xe,
    addEdge: Ne,
    onedgecreate: de,
    panBy: Q,
    cancelConnection: Pe,
    updateConnection: F,
    autoPanOnConnect: _e,
    edges: De,
    connectionLookup: Le,
    onconnect: ce,
    onconnectstart: fe,
    onconnectend: ve,
    flowId: Se,
    connection: at
  } = G;
  function ct(ze) {
    const ot = qc(ze);
    (ot && ze.button === 0 || !ot) && O0.onPointerDown(ze, {
      handleId: f(E),
      nodeId: K,
      isTarget: f(k),
      connectionRadius: i(),
      domNode: a(),
      nodeLookup: s(),
      connectionMode: l(),
      lib: u(),
      autoPanOnConnect: c(),
      flowId: d(),
      isValidConnection: V() ?? v(),
      updateConnection: F,
      cancelConnection: Pe,
      panBy: Q,
      onConnect: (Ye) => {
        var je;
        const Je = p() ? p()(Ye) : Ye;
        Je && (Ne(Je), (je = h()) == null || je(Ye));
      },
      onConnectStart: (Ye, je) => {
        var Je;
        (Je = x()) == null || Je(Ye, {
          nodeId: je.nodeId,
          handleId: je.handleId,
          handleType: je.handleType
        });
      },
      onConnectEnd: (Ye, je) => {
        var Je;
        (Je = b()) == null || Je(Ye, je);
      },
      getTransform: () => [
        $().x,
        $().y,
        $().zoom
      ],
      getFromHandle: () => g().fromHandle
    });
  }
  let J = /* @__PURE__ */ le(null), Ae = /* @__PURE__ */ le();
  be(() => re(S()), () => {
    ee(k, S() === "target");
  }), be(
    () => (re(z()), o()),
    () => {
      ee(O, z() !== void 0 ? z() : o());
    }
  ), be(() => re(B()), () => {
    ee(E, B() || null);
  }), be(
    () => (re(T()), re(M()), _(), w(), re(S()), re(B())),
    () => {
      (T() || M()) && (_(), ee(Ae, w().get(`${K}-${S()}${B() ? `-${B()}` : ""}`)));
    }
  ), be(
    () => (f(J), f(Ae), re(M()), re(T())),
    () => {
      if (f(J) && !qh(f(Ae), f(J))) {
        const ze = f(Ae) ?? /* @__PURE__ */ new Map();
        ql(f(J), ze, M()), ql(ze, f(J), T());
      }
      ee(J, f(Ae) ?? /* @__PURE__ */ new Map());
    }
  ), be(() => g(), () => {
    ee(N, !!g().fromHandle);
  }), be(
    () => (g(), re(S()), f(E)),
    () => {
      var ze, ot, Ye;
      ee(H, ((ze = g().fromHandle) == null ? void 0 : ze.nodeId) === K && ((ot = g().fromHandle) == null ? void 0 : ot.type) === S() && ((Ye = g().fromHandle) == null ? void 0 : Ye.id) === f(E));
    }
  ), be(
    () => (g(), re(S()), f(E)),
    () => {
      var ze, ot, Ye;
      ee(I, ((ze = g().toHandle) == null ? void 0 : ze.nodeId) === K && ((ot = g().toHandle) == null ? void 0 : ot.type) === S() && ((Ye = g().toHandle) == null ? void 0 : Ye.id) === f(E));
    }
  ), be(
    () => (l(), g(), re(S()), f(E)),
    () => {
      var ze, ot, Ye;
      ee(q, l() === Tr.Strict ? ((ze = g().fromHandle) == null ? void 0 : ze.type) !== S() : K !== ((ot = g().fromHandle) == null ? void 0 : ot.nodeId) || f(E) !== ((Ye = g().fromHandle) == null ? void 0 : Ye.id));
    }
  ), be(() => (f(I), g()), () => {
    ee(D, f(I) && g().isValid);
  }), Ht(), Ke();
  var se = R0();
  Me(se, "data-nodeid", K);
  let kt;
  var Et = W(se);
  It(Et, t, "default", {}), Y(se), Oe(
    (ze, ot) => {
      Me(se, "data-handleid", f(E)), Me(se, "data-handlepos", C()), Me(se, "data-id", `${d() ?? ""}-${K ?? ""}-${(B() || "") ?? ""}-${S() ?? ""}`), kt = Rt(se, 1, ze, null, kt, ot), _t(se, P());
    },
    [
      () => En(Kt([
        "svelte-flow__handle",
        `svelte-flow__handle-${C()}`,
        "nodrag",
        "nopan",
        C(),
        j()
      ])),
      () => ({
        valid: f(D),
        connectingto: f(I),
        connectingfrom: f(H),
        source: !f(k),
        target: f(k),
        connectablestart: f(O),
        connectableend: f(O),
        connectable: f(O),
        connectionindicator: f(O) && (!f(N) || f(q))
      })
    ],
    ke
  ), ft("mousedown", se, ct), ft("touchstart", se, ct), A(e, se);
  var Dt = me({
    get id() {
      return B();
    },
    set id(ze) {
      B(ze), m();
    },
    get type() {
      return S();
    },
    set type(ze) {
      S(ze), m();
    },
    get position() {
      return C();
    },
    set position(ze) {
      C(ze), m();
    },
    get style() {
      return P();
    },
    set style(ze) {
      P(ze), m();
    },
    get isValidConnection() {
      return V();
    },
    set isValidConnection(ze) {
      V(ze), m();
    },
    get onconnect() {
      return T();
    },
    set onconnect(ze) {
      T(ze), m();
    },
    get ondisconnect() {
      return M();
    },
    set ondisconnect(ze) {
      M(ze), m();
    },
    get isConnectable() {
      return z();
    },
    set isConnectable(ze) {
      z(ze), m();
    },
    get class() {
      return j();
    },
    set class(ze) {
      j(ze), m();
    }
  });
  return r(), Dt;
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
  Ke();
  var a = q0(), s = Ce(a);
  const l = /* @__PURE__ */ ke(() => o() ?? qe.Top);
  pr(s, {
    type: "target",
    get position() {
      return f(l);
    }
  });
  var u = R(s), c = R(u);
  const d = /* @__PURE__ */ ke(() => i() ?? qe.Bottom);
  return pr(c, {
    type: "source",
    get position() {
      return f(d);
    }
  }), Oe(() => {
    var v;
    return bt(u, ` ${((v = r()) == null ? void 0 : v.label) ?? ""} `);
  }), A(e, a), me({
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
var B0 = /* @__PURE__ */ ie(" <!>", 1);
function ed(e, t) {
  const n = gt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  gt(n, ["data", "sourcePosition"]), he(t, !1);
  let r = y(t, "data", 28, () => ({ label: "Node" })), o = y(t, "sourcePosition", 12, void 0);
  Ke(), Re();
  var i = B0(), a = Ce(i), s = R(a);
  const l = /* @__PURE__ */ ke(() => o() ?? qe.Bottom);
  return pr(s, {
    type: "source",
    get position() {
      return f(l);
    }
  }), Oe(() => {
    var u;
    return bt(a, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), A(e, i), me({
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
pe(ed, { data: {}, sourcePosition: {} }, [], [], !0);
var Z0 = /* @__PURE__ */ ie(" <!>", 1);
function td(e, t) {
  const n = gt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  gt(n, ["data", "targetPosition"]), he(t, !1);
  let r = y(t, "data", 28, () => ({ label: "Node" })), o = y(t, "targetPosition", 12, void 0);
  Ke(), Re();
  var i = Z0(), a = Ce(i), s = R(a);
  const l = /* @__PURE__ */ ke(() => o() ?? qe.Top);
  return pr(s, {
    type: "target",
    get position() {
      return f(l);
    }
  }), Oe(() => {
    var u;
    return bt(a, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), A(e, i), me({
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
pe(td, { data: {}, targetPosition: {} }, [], [], !0);
function nd(e, t) {
  const n = gt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  gt(n, []);
}
pe(nd, {}, [], [], !0);
function eu(e, t, n) {
  if (!t)
    return;
  const r = n ? t.querySelector(n) : t;
  r && r.appendChild(e);
}
function Gi(e, { target: t, domNode: n }) {
  return eu(e, n, t), {
    async update({ target: r, domNode: o }) {
      eu(e, o, r);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e);
    }
  };
}
var Y0 = /* @__PURE__ */ ie("<div><!></div>");
function rd(e, t) {
  he(t, !1);
  const [n, r] = vt(), o = () => oe(i, "$domNode", n), { domNode: i } = et();
  Ke();
  var a = Y0(), s = W(a);
  It(s, t, "default", {}), Y(a), zt(a, (l, u) => Gi == null ? void 0 : Gi(l, u), () => ({
    target: ".svelte-flow__edgelabel-renderer",
    domNode: o()
  })), A(e, a), me(), r();
}
pe(rd, {}, ["default"], [], !0);
function od() {
  const { edgeLookup: e, selectionRect: t, selectionRectMode: n, multiselectionKeyPressed: r, addSelectedEdges: o, unselectNodesAndEdges: i, elementsSelectable: a } = et();
  return (s) => {
    const l = U(e).get(s);
    if (!l) {
      console.warn("012", oo.error012(s));
      return;
    }
    (l.selectable || U(a) && typeof l.selectable > "u") && (t.set(null), n.set(null), l.selected ? l.selected && U(r) && i({ nodes: [], edges: [l] }) : o([s]));
  };
}
var j0 = /* @__PURE__ */ ie('<div class="svelte-flow__edge-label" role="button" tabindex="-1"><!></div>');
function id(e, t) {
  he(t, !1);
  let n = y(t, "style", 12, void 0), r = y(t, "x", 12, void 0), o = y(t, "y", 12, void 0);
  const i = od(), a = Pr("svelteflow__edge_id");
  return Ke(), rd(e, {
    children: (s, l) => {
      var u = j0();
      let c;
      var d = W(u);
      It(d, t, "default", {}), Y(u), Oe(() => c = _t(u, "pointer-events: all;" + n(), c, {
        transform: `translate(-50%, -50%) translate(${r() ?? ""}px,${o() ?? ""}px)`
      })), ft("keyup", u, () => {
      }), ft("click", u, () => {
        a && i(a);
      }), A(s, u);
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
pe(id, { style: {}, x: {}, y: {} }, ["default"], [], !0);
var W0 = /* @__PURE__ */ Ve('<path fill="none" class="svelte-flow__edge-interaction"></path>'), K0 = /* @__PURE__ */ Ve('<path fill="none"></path><!><!>', 1);
function ni(e, t) {
  he(t, !1);
  let n = y(t, "id", 12, void 0), r = y(t, "path", 12), o = y(t, "label", 12, void 0), i = y(t, "labelX", 12, void 0), a = y(t, "labelY", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "markerStart", 12, void 0), u = y(t, "markerEnd", 12, void 0), c = y(t, "style", 12, void 0), d = y(t, "interactionWidth", 12, 20), v = y(t, "class", 12, void 0), p = d() === void 0 ? 20 : d();
  Ke();
  var h = K0(), x = Ce(h), b = R(x);
  {
    var $ = (w) => {
      var k = W0();
      Me(k, "stroke-opacity", 0), Me(k, "stroke-width", p), Oe(() => Me(k, "d", r())), A(w, k);
    };
    $e(b, (w) => {
      p && w($);
    });
  }
  var g = R(b);
  {
    var _ = (w) => {
      id(w, {
        get x() {
          return i();
        },
        get y() {
          return a();
        },
        get style() {
          return s();
        },
        children: (k, O) => {
          Re();
          var E = We();
          Oe(() => bt(E, o())), A(k, E);
        },
        $$slots: { default: !0 }
      });
    };
    $e(g, (w) => {
      o() && w(_);
    });
  }
  return Oe(
    (w) => {
      Me(x, "id", n()), Me(x, "d", r()), Rt(x, 0, w), Me(x, "marker-start", l()), Me(x, "marker-end", u()), _t(x, c());
    },
    [
      () => En(Kt(["svelte-flow__edge-path", v()]))
    ],
    ke
  ), A(e, h), me({
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
  const r = /* @__PURE__ */ le(), o = /* @__PURE__ */ le(), i = /* @__PURE__ */ le();
  let a = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), v = y(t, "sourceX", 12), p = y(t, "sourceY", 12), h = y(t, "sourcePosition", 12), x = y(t, "targetX", 12), b = y(t, "targetY", 12), $ = y(t, "targetPosition", 12);
  return be(
    () => (f(r), f(o), f(i), re(v()), re(p()), re(x()), re(b()), re(h()), re($())),
    () => {
      ((g) => (ee(r, g[0]), ee(o, g[1]), ee(i, g[2])))(Bc({
        sourceX: v(),
        sourceY: p(),
        targetX: x(),
        targetY: b(),
        sourcePosition: h(),
        targetPosition: $()
      }));
    }
  ), Ht(), Ke(), ni(e, {
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
    "sourcePosition",
    "targetX",
    "targetY",
    "targetPosition"
  ]), he(t, !1);
  const r = /* @__PURE__ */ le(), o = /* @__PURE__ */ le(), i = /* @__PURE__ */ le();
  let a = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), v = y(t, "sourceX", 12), p = y(t, "sourceY", 12), h = y(t, "sourcePosition", 12), x = y(t, "targetX", 12), b = y(t, "targetY", 12), $ = y(t, "targetPosition", 12);
  return be(
    () => (f(r), f(o), f(i), re(v()), re(p()), re(x()), re(b()), re(h()), re($())),
    () => {
      ((g) => (ee(r, g[0]), ee(o, g[1]), ee(i, g[2])))(Xi({
        sourceX: v(),
        sourceY: p(),
        targetX: x(),
        targetY: b(),
        sourcePosition: h(),
        targetPosition: $()
      }));
    }
  ), Ht(), Ke(), ni(e, {
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
    sourcePosition: {},
    targetX: {},
    targetY: {},
    targetPosition: {}
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
    "targetX",
    "targetY"
  ]), he(t, !1);
  const r = /* @__PURE__ */ le(), o = /* @__PURE__ */ le(), i = /* @__PURE__ */ le();
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
  ), Ht(), Ke(), ni(e, {
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
    targetX: {},
    targetY: {}
  },
  [],
  [],
  !0
);
function ld(e, t) {
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
  const r = /* @__PURE__ */ le(), o = /* @__PURE__ */ le(), i = /* @__PURE__ */ le();
  let a = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), v = y(t, "sourceX", 12), p = y(t, "sourceY", 12), h = y(t, "sourcePosition", 12), x = y(t, "targetX", 12), b = y(t, "targetY", 12), $ = y(t, "targetPosition", 12);
  return be(
    () => (f(r), f(o), f(i), re(v()), re(p()), re(x()), re(b()), re(h()), re($())),
    () => {
      ((g) => (ee(r, g[0]), ee(o, g[1]), ee(i, g[2])))(Xi({
        sourceX: v(),
        sourceY: p(),
        targetX: x(),
        targetY: b(),
        sourcePosition: h(),
        targetPosition: $(),
        borderRadius: 0
      }));
    }
  ), Ht(), Ke(), ni(e, {
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
  ld,
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
function X0(e, t) {
  const n = e.set, r = t.set, o = U(e), i = U(t);
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
  let o = U(t);
  e.set(o);
  const i = (a) => {
    n(a), r(a), o = a;
  };
  e.set = t.set = i, e.update = t.update = (a) => i(a(o));
}
const G0 = (e, t, n) => {
  if (!n)
    return;
  const r = U(e), o = t.set, i = n.set;
  let a = n ? U(n) : { x: 0, y: 0, zoom: 1 };
  t.set(a), t.set = (s) => (o(s), i(s), a = s, s), n.set = (s) => (r == null || r.syncViewport(s), o(s), i(s), a = s, s), t.update = (s) => {
    t.set(s(a));
  }, n.update = (s) => {
    n.set(s(a));
  };
}, U0 = (e, t, n, r = [0, 0], o = Zi, i, a, s, l, u, c, d, v) => {
  const { subscribe: p, set: h, update: x } = Te([]);
  let b = e, $ = {}, g = !0;
  const _ = (E) => {
    const N = Yc(E, t, n, {
      elevateNodesOnSelect: g,
      nodeOrigin: r,
      nodeExtent: o,
      defaults: $,
      checkEquality: !1
    });
    return U(i) && N && U(l) && (Kh({
      nodes: t,
      width: U(u),
      height: U(c),
      panZoom: U(l),
      minZoom: U(d),
      maxZoom: U(v)
    }, U(a)).then((H) => {
      var I;
      (I = U(s)) == null || I.resolve(H), s.set(null);
    }), i.set(!1), a.set(void 0)), b = E, h(b), b;
  }, w = (E) => _(E(b)), k = (E) => {
    $ = E;
  }, O = (E) => {
    g = E.elevateNodesOnSelect ?? g;
  };
  return _(b), {
    subscribe: p,
    set: _,
    update: w,
    setDefaultOptions: k,
    setOptions: O
  };
}, J0 = (e, t, n, r) => {
  const { subscribe: o, set: i, update: a } = Te([]);
  let s = e, l = {};
  const u = (v) => {
    const p = l ? v.map((h) => ({ ...l, ...h })) : v;
    Wc(t, n, p), s = p, i(s);
  }, c = (v) => u(v(s)), d = (v) => {
    l = v;
  };
  return u(s), {
    subscribe: o,
    set: u,
    update: c,
    setDefaultOptions: d
  };
}, ud = {
  input: ed,
  output: td,
  default: Fi,
  group: nd
}, cd = {
  straight: sd,
  smoothstep: ad,
  default: Ui,
  step: ld
}, Q0 = ({ nodes: e = [], edges: t = [], width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) => {
  const s = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), d = i ?? [0, 0], v = a ?? Zi;
  Yc(e, s, l, {
    nodeExtent: v,
    nodeOrigin: d,
    elevateNodesOnSelect: !1,
    checkEquality: !1
  }), Wc(u, c, t);
  let p = { x: 0, y: 0, zoom: 1 };
  if (o && n && r) {
    const O = ei(s, {
      filter: (E) => !!((E.width || E.initialWidth) && (E.height || E.initialHeight))
    });
    p = Ys(O, n, r, 0.5, 2, 0.1);
  }
  const h = Te(!1), x = Te(void 0), b = Te(null), $ = Te(null), g = Te(500), _ = Te(500), w = Te(0.5), k = Te(2);
  return {
    flowId: Te(null),
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
    nodeOrigin: Te(d),
    nodeDragThreshold: Te(1),
    nodeExtent: Te(v),
    translateExtent: Te(Zi),
    autoPanOnNodeDrag: Te(!0),
    autoPanOnConnect: Te(!0),
    fitViewQueued: h,
    fitViewOptions: x,
    fitViewResolver: b,
    panZoom: $,
    snapGrid: Te(null),
    dragging: Te(!1),
    selectionRect: Te(null),
    selectionKeyPressed: Te(!1),
    multiselectionKeyPressed: Te(!1),
    deleteKeyPressed: Te(!1),
    panActivationKeyPressed: Te(!1),
    zoomActivationKeyPressed: Te(!1),
    selectionRectMode: Te(null),
    selectionMode: Te(Yi.Partial),
    nodeTypes: Te(ud),
    edgeTypes: Te(cd),
    viewport: Te(p),
    connectionMode: Te(Tr.Strict),
    domNode: Te(null),
    connection: cn(ss),
    connectionLineType: Te(Xr.Bezier),
    connectionRadius: Te(20),
    isValidConnection: Te(() => !0),
    nodesDraggable: Te(!0),
    nodesConnectable: Te(!0),
    elementsSelectable: Te(!0),
    selectNodesOnDrag: Te(!0),
    markers: cn([]),
    defaultMarkerColor: Te("#b1b1b7"),
    lib: cn("svelte"),
    onlyRenderVisibleElements: Te(!1),
    onerror: Te(Fh),
    ondelete: Te(void 0),
    onedgecreate: Te(void 0),
    onconnect: Te(void 0),
    onconnectstart: Te(void 0),
    onconnectend: Te(void 0),
    onbeforedelete: Te(void 0),
    nodesInitialized: Te(!1),
    edgesInitialized: Te(!1),
    viewportInitialized: Te(!1),
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
    return n ? Nc(t, { x: 0, y: 0, width: r, height: o }, a, !0) : Array.from(t.values());
  });
}
const xa = Symbol();
function dd({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) {
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
      ...ud,
      ...C
    });
  }
  function u(C) {
    s.edgeTypes.set({
      ...cd,
      ...C
    });
  }
  function c(C) {
    const P = U(s.edges);
    s.edges.set(l0(C, P));
  }
  const d = (C, P = !1) => {
    var V;
    const T = U(s.nodeLookup);
    for (const [M, z] of C) {
      const j = (V = T.get(M)) == null ? void 0 : V.internals.userNode;
      j && (j.position = z.position, j.dragging = P);
    }
    s.nodes.update((M) => M);
  };
  function v(C) {
    var P, V, T;
    const M = U(s.nodeLookup), z = U(s.parentLookup), { changes: j, updatedInternals: K } = b0(C, M, U(s.parentLookup), U(s.domNode), U(s.nodeOrigin));
    if (K) {
      h0(M, z, { nodeOrigin: i, nodeExtent: a });
      for (const te of j) {
        const G = (P = M.get(te.id)) == null ? void 0 : P.internals.userNode;
        if (G)
          switch (te.type) {
            case "dimensions": {
              const X = { ...G.measured, ...te.dimensions };
              te.setAttributes && (G.width = ((V = te.dimensions) == null ? void 0 : V.width) ?? G.width, G.height = ((T = te.dimensions) == null ? void 0 : T.height) ?? G.height), G.measured = X;
              break;
            }
            case "position":
              G.position = te.position ?? G.position;
              break;
          }
      }
      s.nodes.update((te) => te), U(s.nodesInitialized) || s.nodesInitialized.set(!0);
    }
  }
  function p(C) {
    const P = U(s.fitViewResolver) ?? Qh();
    return s.fitViewQueued.set(!0), s.fitViewOptions.set(C), s.fitViewResolver.set(P), s.nodes.set(U(s.nodes)), P.promise;
  }
  function h(C, P) {
    const V = U(s.panZoom);
    return V ? V.scaleBy(C, P) : Promise.resolve(!1);
  }
  function x(C) {
    return h(1.2, C);
  }
  function b(C) {
    return h(1 / 1.2, C);
  }
  function $(C) {
    const P = U(s.panZoom);
    P && (P.setScaleExtent([C, U(s.maxZoom)]), s.minZoom.set(C));
  }
  function g(C) {
    const P = U(s.panZoom);
    P && (P.setScaleExtent([U(s.minZoom), C]), s.maxZoom.set(C));
  }
  function _(C) {
    const P = U(s.panZoom);
    P && (P.setTranslateExtent(C), s.translateExtent.set(C));
  }
  function w(C) {
    let P = !1;
    return C.forEach((V) => {
      V.selected && (V.selected = !1, P = !0);
    }), P;
  }
  function k(C) {
    var P;
    (P = U(s.panZoom)) == null || P.setClickDistance(C);
  }
  function O(C) {
    w((C == null ? void 0 : C.nodes) || U(s.nodes)) && s.nodes.set(U(s.nodes)), w((C == null ? void 0 : C.edges) || U(s.edges)) && s.edges.set(U(s.edges));
  }
  s.deleteKeyPressed.subscribe(async (C) => {
    var P;
    if (C) {
      const V = U(s.nodes), T = U(s.edges), M = V.filter((te) => te.selected), z = T.filter((te) => te.selected), { nodes: j, edges: K } = await Dc({
        nodesToRemove: M,
        edgesToRemove: z,
        nodes: V,
        edges: T,
        onBeforeDelete: U(s.onbeforedelete)
      });
      (j.length || K.length) && (s.nodes.update((te) => te.filter((G) => !j.some((X) => X.id === G.id))), s.edges.update((te) => te.filter((G) => !K.some((X) => X.id === G.id))), (P = U(s.ondelete)) == null || P({
        nodes: j,
        edges: K
      }));
    }
  });
  function E(C) {
    const P = U(s.multiselectionKeyPressed);
    s.nodes.update((V) => V.map((T) => {
      const M = C.includes(T.id), z = P && T.selected || M;
      return T.selected = z, T;
    })), P || s.edges.update((V) => V.map((T) => (T.selected = !1, T)));
  }
  function N(C) {
    const P = U(s.multiselectionKeyPressed);
    s.edges.update((V) => V.map((T) => {
      const M = C.includes(T.id), z = P && T.selected || M;
      return T.selected = z, T;
    })), P || s.nodes.update((V) => V.map((T) => (T.selected = !1, T)));
  }
  function H(C) {
    var P;
    const V = (P = U(s.nodes)) == null ? void 0 : P.find((T) => T.id === C);
    if (!V) {
      console.warn("012", oo.error012(C));
      return;
    }
    s.selectionRect.set(null), s.selectionRectMode.set(null), V.selected ? V.selected && U(s.multiselectionKeyPressed) && O({ nodes: [V], edges: [] }) : E([C]);
  }
  function I(C) {
    const P = U(s.viewport);
    return x0({
      delta: C,
      panZoom: U(s.panZoom),
      transform: [P.x, P.y, P.zoom],
      translateExtent: U(s.translateExtent),
      width: U(s.width),
      height: U(s.height)
    });
  }
  const q = Te(ss), D = (C) => {
    q.set({ ...C });
  };
  function B() {
    q.set(ss);
  }
  function S() {
    s.selectionRect.set(null), s.selectionRectMode.set(null), s.snapGrid.set(null), s.isValidConnection.set(() => !0), O(), B();
  }
  return {
    // state
    ...s,
    // derived state
    visibleEdges: em(s),
    visibleNodes: tm(s),
    connection: ur([q, s.viewport], ([C, P]) => C.inProgress ? {
      ...C,
      to: ti(C.to, [P.x, P.y, P.zoom])
    } : { ...C }),
    markers: ur([s.edges, s.defaultMarkerColor, s.flowId], ([C, P, V]) => v0(C, { defaultColor: P, id: V })),
    initialized: (() => {
      let C = !1;
      const P = U(s.nodes).length, V = U(s.edges).length;
      return ur([s.nodesInitialized, s.edgesInitialized, s.viewportInitialized], ([T, M, z]) => C || (P === 0 ? C = z : V === 0 ? C = z && T : C = z && T && M, C));
    })(),
    // actions
    syncNodeStores: (C) => X0(s.nodes, C),
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
    unselectNodesAndEdges: O,
    addSelectedNodes: E,
    addSelectedEdges: N,
    handleNodeSelection: H,
    panBy: I,
    updateConnection: D,
    cancelConnection: B,
    reset: S
  };
}
function et() {
  const e = Pr(xa);
  if (!e)
    throw new Error("In order to use useStore you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
function nm({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) {
  const s = dd({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a });
  return eo(xa, {
    getStore: () => s
  }), s;
}
function tu(e, t) {
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
function fd(e, t) {
  he(t, !1), it(e, om);
  const [n, r] = vt(), o = () => oe(T, "$panActivationKeyPressed", n), i = () => oe(B, "$minZoom", n), a = () => oe(S, "$maxZoom", n), s = () => oe(M, "$zoomActivationKeyPressed", n), l = () => oe(D, "$selectionRect", n), u = () => oe(P, "$translateExtent", n), c = () => oe(V, "$lib", n), d = /* @__PURE__ */ le(), v = /* @__PURE__ */ le(), p = /* @__PURE__ */ le();
  let h = y(t, "initialViewport", 12, void 0), x = y(t, "onMoveStart", 12, void 0), b = y(t, "onMove", 12, void 0), $ = y(t, "onMoveEnd", 12, void 0), g = y(t, "panOnScrollMode", 12), _ = y(t, "preventScrolling", 12), w = y(t, "zoomOnScroll", 12), k = y(t, "zoomOnDoubleClick", 12), O = y(t, "zoomOnPinch", 12), E = y(t, "panOnDrag", 12), N = y(t, "panOnScroll", 12), H = y(t, "paneClickDistance", 12);
  const {
    viewport: I,
    panZoom: q,
    selectionRect: D,
    minZoom: B,
    maxZoom: S,
    dragging: C,
    translateExtent: P,
    lib: V,
    panActivationKeyPressed: T,
    zoomActivationKeyPressed: M,
    viewportInitialized: z
  } = et(), j = (X) => I.set({
    x: X[0],
    y: X[1],
    zoom: X[2]
  });
  mn(() => {
    Li(z, !0);
  }), be(() => re(h()), () => {
    ee(d, h() || { x: 0, y: 0, zoom: 1 });
  }), be(
    () => (o(), re(E())),
    () => {
      ee(v, o() || E());
    }
  ), be(
    () => (o(), re(N())),
    () => {
      ee(p, o() || N());
    }
  ), Ht(), Ke();
  var K = rm(), te = W(K);
  It(te, t, "default", {}), Y(K), zt(K, (X, ye) => tu == null ? void 0 : tu(X, ye), () => ({
    viewport: I,
    minZoom: i(),
    maxZoom: a(),
    initialViewport: f(d),
    dragging: C,
    panZoom: q,
    onPanZoomStart: x(),
    onPanZoom: b(),
    onPanZoomEnd: $(),
    zoomOnScroll: w(),
    zoomOnDoubleClick: k(),
    zoomOnPinch: O(),
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
    paneClickDistance: H(),
    onTransformChange: j
  })), A(e, K);
  var G = me({
    get initialViewport() {
      return h();
    },
    set initialViewport(X) {
      h(X), m();
    },
    get onMoveStart() {
      return x();
    },
    set onMoveStart(X) {
      x(X), m();
    },
    get onMove() {
      return b();
    },
    set onMove(X) {
      b(X), m();
    },
    get onMoveEnd() {
      return $();
    },
    set onMoveEnd(X) {
      $(X), m();
    },
    get panOnScrollMode() {
      return g();
    },
    set panOnScrollMode(X) {
      g(X), m();
    },
    get preventScrolling() {
      return _();
    },
    set preventScrolling(X) {
      _(X), m();
    },
    get zoomOnScroll() {
      return w();
    },
    set zoomOnScroll(X) {
      w(X), m();
    },
    get zoomOnDoubleClick() {
      return k();
    },
    set zoomOnDoubleClick(X) {
      k(X), m();
    },
    get zoomOnPinch() {
      return O();
    },
    set zoomOnPinch(X) {
      O(X), m();
    },
    get panOnDrag() {
      return E();
    },
    set panOnDrag(X) {
      E(X), m();
    },
    get panOnScroll() {
      return N();
    },
    set panOnScroll(X) {
      N(X), m();
    },
    get paneClickDistance() {
      return H();
    },
    set paneClickDistance(X) {
      H(X), m();
    }
  });
  return r(), G;
}
pe(
  fd,
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
function nu(e, t) {
  return (n) => {
    n.target === t && (e == null || e(n));
  };
}
function ru(e) {
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
function vd(e, t) {
  he(t, !1), it(e, am);
  const [n, r] = vt(), o = () => oe(C, "$panActivationKeyPressed", n), i = () => oe(B, "$selectionKeyPressed", n), a = () => oe(q, "$selectionRect", n), s = () => oe(I, "$elementsSelectable", n), l = () => oe(D, "$selectionRectMode", n), u = () => oe(V, "$connection", n), c = () => oe(E, "$edges", n), d = () => oe(O, "$nodeLookup", n), v = () => oe(N, "$viewport", n), p = () => oe(S, "$selectionMode", n), h = () => oe(H, "$dragging", n), x = /* @__PURE__ */ le(), b = /* @__PURE__ */ le(), $ = /* @__PURE__ */ le();
  let g = y(t, "panOnDrag", 12, void 0), _ = y(t, "selectionOnDrag", 12, void 0);
  const w = fa(), {
    nodes: k,
    nodeLookup: O,
    edges: E,
    viewport: N,
    dragging: H,
    elementsSelectable: I,
    selectionRect: q,
    selectionRectMode: D,
    selectionKeyPressed: B,
    selectionMode: S,
    panActivationKeyPressed: C,
    unselectNodesAndEdges: P,
    connection: V
  } = et();
  let T = /* @__PURE__ */ le(), M = null, z = [], j = !1;
  function K(de) {
    if (j || u().inProgress) {
      j = !1;
      return;
    }
    w("paneclick", { event: de }), P(), D.set(null);
  }
  function te(de) {
    var Q, Pe;
    if (M = f(T).getBoundingClientRect(), !I || !f(b) || de.button !== 0 || de.target !== f(T) || !M)
      return;
    (Pe = (Q = de.target) == null ? void 0 : Q.setPointerCapture) == null || Pe.call(Q, de.pointerId);
    const { x: F, y: _e } = Xn(de, M);
    P(), q.set({
      width: 0,
      height: 0,
      startX: F,
      startY: _e,
      x: F,
      y: _e
    });
  }
  function G(de) {
    if (!f(b) || !M || !a())
      return;
    j = !0;
    const Q = Xn(de, M), Pe = a().startX ?? 0, F = a().startY ?? 0, _e = {
      ...a(),
      x: Q.x < Pe ? Q.x : Pe,
      y: Q.y < F ? Q.y : F,
      width: Math.abs(Q.x - Pe),
      height: Math.abs(Q.y - F)
    }, De = z.map((ve) => ve.id), Le = ls(z, c()).map((ve) => ve.id);
    z = Nc(
      d(),
      _e,
      [
        v().x,
        v().y,
        v().zoom
      ],
      p() === Yi.Partial,
      !0
    );
    const ce = ls(z, c()).map((ve) => ve.id), fe = z.map((ve) => ve.id);
    (De.length !== fe.length || fe.some((ve) => !De.includes(ve))) && k.update((ve) => ve.map(ru(fe))), (Le.length !== ce.length || ce.some((ve) => !Le.includes(ve))) && E.update((ve) => ve.map(ru(ce))), D.set("user"), q.set(_e);
  }
  function X(de) {
    var Q, Pe;
    de.button === 0 && ((Pe = (Q = de.target) == null ? void 0 : Q.releasePointerCapture) == null || Pe.call(Q, de.pointerId), !f(b) && l() === "user" && de.target === f(T) && (K == null || K(de)), q.set(null), z.length > 0 && Li(D, "nodes"), i() && (j = !1));
  }
  const ye = (de) => {
    var Q;
    if (Array.isArray(f(x)) && (Q = f(x)) != null && Q.includes(2)) {
      de.preventDefault();
      return;
    }
    w("panecontextmenu", { event: de });
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
  ), Ht(), Ke();
  var ae = im(), ge = /* @__PURE__ */ He(() => f($) ? void 0 : nu(K, f(T))), ue = /* @__PURE__ */ He(() => nu(ye, f(T)));
  let Ee;
  var xe = W(ae);
  It(xe, t, "default", {}), Y(ae), An(ae, (de) => ee(T, de), () => f(T)), Oe(
    (de) => Ee = Rt(ae, 1, "svelte-flow__pane svelte-1esy7hx", null, Ee, de),
    [
      () => ({
        draggable: g() === !0 || Array.isArray(g()) && g().includes(0),
        dragging: h(),
        selection: f(b)
      })
    ],
    ke
  ), ft("click", ae, function(...de) {
    var Q;
    (Q = f(ge)) == null || Q.apply(this, de);
  }), ft("pointerdown", ae, function(...de) {
    var Q;
    (Q = f($) ? te : void 0) == null || Q.apply(this, de);
  }), ft("pointermove", ae, function(...de) {
    var Q;
    (Q = f($) ? G : void 0) == null || Q.apply(this, de);
  }), ft("pointerup", ae, function(...de) {
    var Q;
    (Q = f($) ? X : void 0) == null || Q.apply(this, de);
  }), ft("contextmenu", ae, function(...de) {
    var Q;
    (Q = f(ue)) == null || Q.apply(this, de);
  }), A(e, ae);
  var Ne = me({
    get panOnDrag() {
      return g();
    },
    set panOnDrag(de) {
      g(de), m();
    },
    get selectionOnDrag() {
      return _();
    },
    set selectionOnDrag(de) {
      _(de), m();
    }
  });
  return r(), Ne;
}
pe(vd, { panOnDrag: {}, selectionOnDrag: {} }, ["default"], [], !0);
var sm = /* @__PURE__ */ ie('<div class="svelte-flow__viewport xyflow__viewport svelte-1floaup"><!></div>');
const lm = {
  hash: "svelte-1floaup",
  code: ".svelte-flow__viewport.svelte-1floaup {width:100%;height:100%;position:absolute;top:0;left:0;}"
};
function pd(e, t) {
  he(t, !1), it(e, lm);
  const [n, r] = vt(), o = () => oe(i, "$viewport", n), { viewport: i } = et();
  Ke();
  var a = sm(), s = W(a);
  It(s, t, "default", {}), Y(a), Oe(() => _t(a, `transform: translate(${o().x ?? ""}px, ${o().y ?? ""}px) scale(${o().zoom ?? ""})`)), A(e, a), me(), r();
}
pe(pd, {}, ["default"], [], !0);
function Ji(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: a } = t, s = _0({
    onDrag: r,
    onDragStart: o,
    onDragStop: i,
    onNodeMouseDown: a,
    getStoreItems: () => {
      const u = U(n.snapGrid), c = U(n.viewport);
      return {
        nodes: U(n.nodes),
        nodeLookup: U(n.nodeLookup),
        edges: U(n.edges),
        nodeExtent: U(n.nodeExtent),
        snapGrid: u || [0, 0],
        snapToGrid: !!u,
        nodeOrigin: U(n.nodeOrigin),
        multiSelectionActive: U(n.multiselectionKeyPressed),
        domNode: U(n.domNode),
        transform: [c.x, c.y, c.zoom],
        autoPanOnNodeDrag: U(n.autoPanOnNodeDrag),
        nodesDraggable: U(n.nodesDraggable),
        selectNodesOnDrag: U(n.selectNodesOnDrag),
        nodeDragThreshold: U(n.nodeDragThreshold),
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
function gd(e, t) {
  he(t, !1);
  const [n, r] = vt(), o = () => oe(ae, "$nodeTypes", n), i = () => oe(Ne, "$elementsSelectable", n), a = () => oe(de, "$nodesDraggable", n), s = () => oe(_e, "$connectableStore", n), l = /* @__PURE__ */ le(void 0, !0), u = /* @__PURE__ */ le(void 0, !0), c = /* @__PURE__ */ le(void 0, !0), d = /* @__PURE__ */ le(void 0, !0);
  let v = y(t, "node", 13), p = y(t, "id", 13), h = y(t, "data", 29, () => ({})), x = y(t, "selected", 13, !1), b = y(t, "draggable", 13, void 0), $ = y(t, "selectable", 13, void 0), g = y(t, "connectable", 13, !0), _ = y(t, "deletable", 13, !0), w = y(t, "hidden", 13, !1), k = y(t, "dragging", 13, !1), O = y(t, "resizeObserver", 13, null), E = y(t, "style", 13, void 0), N = y(t, "type", 13, "default"), H = y(t, "isParent", 13, !1), I = y(t, "positionX", 13), q = y(t, "positionY", 13), D = y(t, "sourcePosition", 13, void 0), B = y(t, "targetPosition", 13, void 0), S = y(t, "zIndex", 13), C = y(t, "measuredWidth", 13, void 0), P = y(t, "measuredHeight", 13, void 0), V = y(t, "initialWidth", 13, void 0), T = y(t, "initialHeight", 13, void 0), M = y(t, "width", 13, void 0), z = y(t, "height", 13, void 0), j = y(t, "dragHandle", 13, void 0), K = y(t, "initialized", 13, !1), te = y(t, "parentId", 13, void 0), G = y(t, "nodeClickDistance", 13, void 0), X = y(t, "class", 13, "");
  const ye = et(), {
    nodeTypes: ae,
    nodeDragThreshold: ge,
    selectNodesOnDrag: ue,
    handleNodeSelection: Ee,
    updateNodeInternals: xe,
    elementsSelectable: Ne,
    nodesDraggable: de
  } = ye;
  let Q = /* @__PURE__ */ le(void 0, !0), Pe = /* @__PURE__ */ le(null, !0);
  const F = fa(), _e = Te(g());
  let De = /* @__PURE__ */ le(void 0, !0), Le = /* @__PURE__ */ le(void 0, !0), ce = /* @__PURE__ */ le(void 0, !0);
  eo("svelteflow__node_id", p()), eo("svelteflow__node_connectable", _e), Ns(() => {
    var J;
    f(Pe) && ((J = O()) == null || J.unobserve(f(Pe)));
  });
  function fe(J) {
    $() && (!U(ue) || !b() || U(ge) > 0) && Ee(p()), F("nodeclick", { node: v().internals.userNode, event: J });
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
      f(u) || console.warn("003", oo.error003(N()));
    }
  ), be(
    () => (re(M()), re(z()), re(V()), re(T()), re(C()), re(P())),
    () => {
      ee(d, um({
        width: M(),
        height: z(),
        initialWidth: V(),
        initialHeight: T(),
        measuredWidth: C(),
        measuredHeight: P()
      }));
    }
  ), be(() => re(g()), () => {
    _e.set(!!g());
  }), be(
    () => (f(De), f(l), f(Le), re(D()), f(ce), re(B()), re(p()), f(Q)),
    () => {
      (f(De) && f(l) !== f(De) || f(Le) && D() !== f(Le) || f(ce) && B() !== f(ce)) && requestAnimationFrame(() => xe(/* @__PURE__ */ new Map([
        [
          p(),
          {
            id: p(),
            nodeElement: f(Q),
            force: !0
          }
        ]
      ]))), ee(De, f(l)), ee(Le, D()), ee(ce, B());
    }
  ), be(
    () => (re(O()), f(Q), f(Pe), re(K())),
    () => {
      O() && (f(Q) !== f(Pe) || !K()) && (f(Pe) && O().unobserve(f(Pe)), f(Q) && O().observe(f(Q)), ee(Pe, f(Q)));
    }
  ), Ht(), Ke(!0);
  var ve = ut(), Se = Ce(ve);
  {
    var at = (J) => {
      var Ae = cm();
      let se, kt;
      var Et = W(Ae);
      const Dt = /* @__PURE__ */ ke(() => x() ?? !1), ze = /* @__PURE__ */ ke(() => $() ?? i() ?? !0), ot = /* @__PURE__ */ ke(() => _() ?? !0), Ye = /* @__PURE__ */ ke(() => b() ?? a() ?? !0);
      Uu(Et, () => f(c), (je, Je) => {
        Je(je, {
          get data() {
            return h();
          },
          get id() {
            return p();
          },
          get selected() {
            return f(Dt);
          },
          get selectable() {
            return f(ze);
          },
          get deletable() {
            return f(ot);
          },
          get sourcePosition() {
            return D();
          },
          get targetPosition() {
            return B();
          },
          get zIndex() {
            return S();
          },
          get dragging() {
            return k();
          },
          get draggable() {
            return f(Ye);
          },
          get dragHandle() {
            return j();
          },
          get parentId() {
            return te();
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
            return q();
          },
          get width() {
            return M();
          },
          get height() {
            return z();
          }
        });
      }), Y(Ae), zt(Ae, (je, Je) => Ji == null ? void 0 : Ji(je, Je), () => ({
        nodeId: p(),
        isSelectable: $(),
        disabled: !1,
        handleSelector: j(),
        noDragClass: "nodrag",
        nodeClickDistance: G(),
        onNodeMouseDown: Ee,
        onDrag: (je, Je, Ct, Lt) => {
          F("nodedrag", { event: je, targetNode: Ct, nodes: Lt });
        },
        onDragStart: (je, Je, Ct, Lt) => {
          F("nodedragstart", { event: je, targetNode: Ct, nodes: Lt });
        },
        onDragStop: (je, Je, Ct, Lt) => {
          F("nodedragstop", { event: je, targetNode: Ct, nodes: Lt });
        },
        store: ye
      })), An(Ae, (je) => ee(Q, je), () => f(Q)), rn(() => ft("click", Ae, fe)), rn(() => ft("mouseenter", Ae, (je) => F("nodemouseenter", { node: v(), event: je }))), rn(() => ft("mouseleave", Ae, (je) => F("nodemouseleave", { node: v(), event: je }))), rn(() => ft("mousemove", Ae, (je) => F("nodemousemove", { node: v(), event: je }))), rn(() => ft("contextmenu", Ae, (je) => F("nodecontextmenu", { node: v(), event: je }))), Oe(
        (je, Je) => {
          Me(Ae, "data-id", p()), se = Rt(Ae, 1, je, null, se, Je), kt = _t(Ae, `${E() ?? "" ?? ""};${f(d).width ?? ""}${f(d).height ?? ""}`, kt, {
            "z-index": S(),
            transform: `translate(${I() ?? ""}px, ${q() ?? ""}px)`,
            visibility: K() ? "visible" : "hidden"
          });
        },
        [
          () => En(Kt([
            "svelte-flow__node",
            `svelte-flow__node-${f(l)}`,
            X()
          ])),
          () => ({
            dragging: k(),
            selected: x(),
            draggable: b(),
            connectable: g(),
            selectable: $(),
            nopan: b(),
            parent: H()
          })
        ],
        ke
      ), A(J, Ae);
    };
    $e(Se, (J) => {
      w() || J(at);
    });
  }
  A(e, ve);
  var ct = me({
    get node() {
      return v();
    },
    set node(J) {
      v(J), m();
    },
    get id() {
      return p();
    },
    set id(J) {
      p(J), m();
    },
    get data() {
      return h();
    },
    set data(J) {
      h(J), m();
    },
    get selected() {
      return x();
    },
    set selected(J) {
      x(J), m();
    },
    get draggable() {
      return b();
    },
    set draggable(J) {
      b(J), m();
    },
    get selectable() {
      return $();
    },
    set selectable(J) {
      $(J), m();
    },
    get connectable() {
      return g();
    },
    set connectable(J) {
      g(J), m();
    },
    get deletable() {
      return _();
    },
    set deletable(J) {
      _(J), m();
    },
    get hidden() {
      return w();
    },
    set hidden(J) {
      w(J), m();
    },
    get dragging() {
      return k();
    },
    set dragging(J) {
      k(J), m();
    },
    get resizeObserver() {
      return O();
    },
    set resizeObserver(J) {
      O(J), m();
    },
    get style() {
      return E();
    },
    set style(J) {
      E(J), m();
    },
    get type() {
      return N();
    },
    set type(J) {
      N(J), m();
    },
    get isParent() {
      return H();
    },
    set isParent(J) {
      H(J), m();
    },
    get positionX() {
      return I();
    },
    set positionX(J) {
      I(J), m();
    },
    get positionY() {
      return q();
    },
    set positionY(J) {
      q(J), m();
    },
    get sourcePosition() {
      return D();
    },
    set sourcePosition(J) {
      D(J), m();
    },
    get targetPosition() {
      return B();
    },
    set targetPosition(J) {
      B(J), m();
    },
    get zIndex() {
      return S();
    },
    set zIndex(J) {
      S(J), m();
    },
    get measuredWidth() {
      return C();
    },
    set measuredWidth(J) {
      C(J), m();
    },
    get measuredHeight() {
      return P();
    },
    set measuredHeight(J) {
      P(J), m();
    },
    get initialWidth() {
      return V();
    },
    set initialWidth(J) {
      V(J), m();
    },
    get initialHeight() {
      return T();
    },
    set initialHeight(J) {
      T(J), m();
    },
    get width() {
      return M();
    },
    set width(J) {
      M(J), m();
    },
    get height() {
      return z();
    },
    set height(J) {
      z(J), m();
    },
    get dragHandle() {
      return j();
    },
    set dragHandle(J) {
      j(J), m();
    },
    get initialized() {
      return K();
    },
    set initialized(J) {
      K(J), m();
    },
    get parentId() {
      return te();
    },
    set parentId(J) {
      te(J), m();
    },
    get nodeClickDistance() {
      return G();
    },
    set nodeClickDistance(J) {
      G(J), m();
    },
    get class() {
      return X();
    },
    set class(J) {
      X(J), m();
    }
  });
  return r(), ct;
}
pe(
  gd,
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
function hd(e, t) {
  he(t, !1), it(e, fm);
  const [n, r] = vt(), o = () => oe(c, "$visibleNodes", n), i = () => oe(d, "$nodesDraggable", n), a = () => oe(p, "$elementsSelectable", n), s = () => oe(v, "$nodesConnectable", n), l = () => oe(x, "$parentLookup", n);
  let u = y(t, "nodeClickDistance", 12, 0);
  const {
    visibleNodes: c,
    nodesDraggable: d,
    nodesConnectable: v,
    elementsSelectable: p,
    updateNodeInternals: h,
    parentLookup: x
  } = et(), b = typeof ResizeObserver > "u" ? null : new ResizeObserver((_) => {
    const w = /* @__PURE__ */ new Map();
    _.forEach((k) => {
      const O = k.target.getAttribute("data-id");
      w.set(O, { id: O, nodeElement: k.target, force: !0 });
    }), h(w);
  });
  Ns(() => {
    b == null || b.disconnect();
  }), Ke();
  var $ = dm();
  Wt($, 5, o, (_) => _.id, (_, w) => {
    const k = /* @__PURE__ */ ke(() => !!f(w).selected), O = /* @__PURE__ */ ke(() => !!f(w).hidden), E = /* @__PURE__ */ ke(() => !!(f(w).draggable || i() && typeof f(w).draggable > "u")), N = /* @__PURE__ */ ke(() => !!(f(w).selectable || a() && typeof f(w).selectable > "u")), H = /* @__PURE__ */ ke(() => !!(f(w).connectable || s() && typeof f(w).connectable > "u")), I = /* @__PURE__ */ ke(() => f(w).deletable ?? !0), q = /* @__PURE__ */ ke(() => l().has(f(w).id)), D = /* @__PURE__ */ ke(() => f(w).type ?? "default"), B = /* @__PURE__ */ ke(() => f(w).internals.z ?? 0), S = /* @__PURE__ */ ke(() => Ic(f(w)));
    gd(_, {
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
        return f(O);
      },
      get draggable() {
        return f(E);
      },
      get selectable() {
        return f(N);
      },
      get connectable() {
        return f(H);
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
        return f(q);
      },
      get style() {
        return f(w).style;
      },
      get class() {
        return f(w).class;
      },
      get type() {
        return f(D);
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
        return f(B);
      },
      get dragHandle() {
        return f(w).dragHandle;
      },
      get initialized() {
        return f(S);
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
  }), Y($), A(e, $);
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
pe(hd, { nodeClickDistance: {} }, [], [], !0);
var vm = /* @__PURE__ */ Ve('<svg><g role="img"><!></g></svg>');
function md(e, t) {
  he(t, !1);
  const [n, r] = vt(), o = () => oe(X, "$edgeTypes", n), i = () => oe(ye, "$flowId", n), a = () => oe(ae, "$elementsSelectable", n), s = () => oe(G, "$edgeLookup", n), l = /* @__PURE__ */ le(void 0, !0), u = /* @__PURE__ */ le(void 0, !0), c = /* @__PURE__ */ le(void 0, !0), d = /* @__PURE__ */ le(void 0, !0), v = /* @__PURE__ */ le(void 0, !0);
  let p = y(t, "id", 13), h = y(t, "type", 13, "default"), x = y(t, "source", 13, ""), b = y(t, "target", 13, ""), $ = y(t, "data", 29, () => ({})), g = y(t, "style", 13, void 0), _ = y(t, "zIndex", 13, void 0), w = y(t, "animated", 13, !1), k = y(t, "selected", 13, !1), O = y(t, "selectable", 13, void 0), E = y(t, "deletable", 13, void 0), N = y(t, "hidden", 13, !1), H = y(t, "label", 13, void 0), I = y(t, "labelStyle", 13, void 0), q = y(t, "markerStart", 13, void 0), D = y(t, "markerEnd", 13, void 0), B = y(t, "sourceHandle", 13, void 0), S = y(t, "targetHandle", 13, void 0), C = y(t, "sourceX", 13), P = y(t, "sourceY", 13), V = y(t, "targetX", 13), T = y(t, "targetY", 13), M = y(t, "sourcePosition", 13), z = y(t, "targetPosition", 13), j = y(t, "ariaLabel", 13, void 0), K = y(t, "interactionWidth", 13, void 0), te = y(t, "class", 13, "");
  eo("svelteflow__edge_id", p());
  const {
    edgeLookup: G,
    edgeTypes: X,
    flowId: ye,
    elementsSelectable: ae
  } = et(), ge = fa(), ue = od();
  function Ee(F) {
    const _e = s().get(p());
    _e && (ue(p()), ge("edgeclick", { event: F, edge: _e }));
  }
  function xe(F, _e) {
    const De = s().get(p());
    De && ge(_e, { event: F, edge: De });
  }
  be(() => re(h()), () => {
    ee(l, h() || "default");
  }), be(
    () => (o(), f(l), Ui),
    () => {
      ee(u, o()[f(l)] || Ui);
    }
  ), be(
    () => (re(q()), i()),
    () => {
      ee(c, q() ? `url('#${ds(q(), i())}')` : void 0);
    }
  ), be(
    () => (re(D()), i()),
    () => {
      ee(d, D() ? `url('#${ds(D(), i())}')` : void 0);
    }
  ), be(
    () => (re(O()), a()),
    () => {
      ee(v, O() ?? a());
    }
  ), Ht(), Ke(!0);
  var Ne = ut(), de = Ce(Ne);
  {
    var Q = (F) => {
      var _e = vm();
      let De;
      var Le = W(_e);
      let ce;
      var fe = W(Le);
      const ve = /* @__PURE__ */ ke(() => E() ?? !0);
      Uu(fe, () => f(u), (Se, at) => {
        at(Se, {
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
            return V();
          },
          get targetY() {
            return T();
          },
          get sourcePosition() {
            return M();
          },
          get targetPosition() {
            return z();
          },
          get animated() {
            return w();
          },
          get selected() {
            return k();
          },
          get label() {
            return H();
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
            return K();
          },
          get selectable() {
            return f(v);
          },
          get deletable() {
            return f(ve);
          },
          get type() {
            return f(l);
          },
          get sourceHandleId() {
            return B();
          },
          get targetHandleId() {
            return S();
          },
          get markerStart() {
            return f(c);
          },
          get markerEnd() {
            return f(d);
          }
        });
      }), Y(Le), Y(_e), Oe(
        (Se, at) => {
          De = _t(_e, "", De, { "z-index": _() }), ce = Rt(Le, 0, Se, null, ce, at), Me(Le, "data-id", p()), Me(Le, "aria-label", j() === null ? void 0 : j() ? j() : `Edge from ${x()} to ${b()}`);
        },
        [
          () => En(Kt(["svelte-flow__edge", te()])),
          () => ({
            animated: w(),
            selected: k(),
            selectable: f(v)
          })
        ],
        ke
      ), ft("click", Le, Ee), ft("contextmenu", Le, (Se) => {
        xe(Se, "edgecontextmenu");
      }), ft("mouseenter", Le, (Se) => {
        xe(Se, "edgemouseenter");
      }), ft("mouseleave", Le, (Se) => {
        xe(Se, "edgemouseleave");
      }), A(F, _e);
    };
    $e(de, (F) => {
      N() || F(Q);
    });
  }
  A(e, Ne);
  var Pe = me({
    get id() {
      return p();
    },
    set id(F) {
      p(F), m();
    },
    get type() {
      return h();
    },
    set type(F) {
      h(F), m();
    },
    get source() {
      return x();
    },
    set source(F) {
      x(F), m();
    },
    get target() {
      return b();
    },
    set target(F) {
      b(F), m();
    },
    get data() {
      return $();
    },
    set data(F) {
      $(F), m();
    },
    get style() {
      return g();
    },
    set style(F) {
      g(F), m();
    },
    get zIndex() {
      return _();
    },
    set zIndex(F) {
      _(F), m();
    },
    get animated() {
      return w();
    },
    set animated(F) {
      w(F), m();
    },
    get selected() {
      return k();
    },
    set selected(F) {
      k(F), m();
    },
    get selectable() {
      return O();
    },
    set selectable(F) {
      O(F), m();
    },
    get deletable() {
      return E();
    },
    set deletable(F) {
      E(F), m();
    },
    get hidden() {
      return N();
    },
    set hidden(F) {
      N(F), m();
    },
    get label() {
      return H();
    },
    set label(F) {
      H(F), m();
    },
    get labelStyle() {
      return I();
    },
    set labelStyle(F) {
      I(F), m();
    },
    get markerStart() {
      return q();
    },
    set markerStart(F) {
      q(F), m();
    },
    get markerEnd() {
      return D();
    },
    set markerEnd(F) {
      D(F), m();
    },
    get sourceHandle() {
      return B();
    },
    set sourceHandle(F) {
      B(F), m();
    },
    get targetHandle() {
      return S();
    },
    set targetHandle(F) {
      S(F), m();
    },
    get sourceX() {
      return C();
    },
    set sourceX(F) {
      C(F), m();
    },
    get sourceY() {
      return P();
    },
    set sourceY(F) {
      P(F), m();
    },
    get targetX() {
      return V();
    },
    set targetX(F) {
      V(F), m();
    },
    get targetY() {
      return T();
    },
    set targetY(F) {
      T(F), m();
    },
    get sourcePosition() {
      return M();
    },
    set sourcePosition(F) {
      M(F), m();
    },
    get targetPosition() {
      return z();
    },
    set targetPosition(F) {
      z(F), m();
    },
    get ariaLabel() {
      return j();
    },
    set ariaLabel(F) {
      j(F), m();
    },
    get interactionWidth() {
      return K();
    },
    set interactionWidth(F) {
      K(F), m();
    },
    get class() {
      return te();
    },
    set class(F) {
      te(F), m();
    }
  });
  return r(), Pe;
}
pe(
  md,
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
function yd(e, t) {
  he(t, !1);
  let n = y(t, "onMount", 12, void 0), r = y(t, "onDestroy", 12, void 0);
  return mn(() => {
    var o;
    return (o = n()) == null || o(), r();
  }), Ke(), me({
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
pe(yd, { onMount: {}, onDestroy: {} }, [], [], !0);
var pm = /* @__PURE__ */ Ve("<defs></defs>");
function wd(e, t) {
  he(t, !1);
  const [n, r] = vt(), o = () => oe(i, "$markers", n), { markers: i } = et();
  Ke();
  var a = pm();
  Wt(a, 5, o, (s) => s.id, (s, l) => {
    bd(s, mt(() => f(l)));
  }), Y(a), A(e, a), me(), r();
}
pe(wd, {}, [], [], !0);
var gm = /* @__PURE__ */ Ve('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), hm = /* @__PURE__ */ Ve('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), mm = /* @__PURE__ */ Ve('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function bd(e, t) {
  he(t, !1);
  let n = y(t, "id", 12), r = y(t, "type", 12), o = y(t, "width", 12, 12.5), i = y(t, "height", 12, 12.5), a = y(t, "markerUnits", 12, "strokeWidth"), s = y(t, "orient", 12, "auto-start-reverse"), l = y(t, "color", 12, void 0), u = y(t, "strokeWidth", 12, void 0);
  Ke();
  var c = mm(), d = W(c);
  {
    var v = (h) => {
      var x = gm();
      Oe(() => {
        Me(x, "stroke", l()), Me(x, "stroke-width", u());
      }), A(h, x);
    }, p = (h, x) => {
      {
        var b = ($) => {
          var g = hm();
          Oe(() => {
            Me(g, "stroke", l()), Me(g, "stroke-width", u()), Me(g, "fill", l());
          }), A($, g);
        };
        $e(
          h,
          ($) => {
            r() === Zo.ArrowClosed && $(b);
          },
          x
        );
      }
    };
    $e(d, (h) => {
      r() === Zo.Arrow ? h(v) : h(p, !1);
    });
  }
  return Y(c), Oe(() => {
    Me(c, "id", n()), Me(c, "markerWidth", `${o()}`), Me(c, "markerHeight", `${i()}`), Me(c, "markerUnits", a()), Me(c, "orient", s());
  }), A(e, c), me({
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
  bd,
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
function xd(e, t) {
  he(t, !1);
  const [n, r] = vt(), o = () => oe(s, "$visibleEdges", n), i = () => oe(c, "$elementsSelectable", n);
  let a = y(t, "defaultEdgeOptions", 12);
  const {
    visibleEdges: s,
    edgesInitialized: l,
    edges: { setDefaultOptions: u },
    elementsSelectable: c
  } = et();
  mn(() => {
    a() && u(a());
  }), Ke();
  var d = ym(), v = W(d), p = W(v);
  wd(p, {}), Y(v);
  var h = R(v, 2);
  Wt(h, 1, o, (g) => g.id, (g, _) => {
    const w = /* @__PURE__ */ ke(() => f(_).selectable ?? i()), k = /* @__PURE__ */ ke(() => f(_).type || "default");
    md(g, {
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
        edgeclick(O) {
          Ue.call(this, t, O);
        },
        edgecontextmenu(O) {
          Ue.call(this, t, O);
        },
        edgemouseenter(O) {
          Ue.call(this, t, O);
        },
        edgemouseleave(O) {
          Ue.call(this, t, O);
        }
      }
    });
  });
  var x = R(h, 2);
  {
    var b = (g) => {
      yd(g, {
        onMount: () => {
          Li(l, !0);
        },
        onDestroy: () => {
          Li(l, !1);
        }
      });
    };
    $e(x, (g) => {
      o().length > 0 && g(b);
    });
  }
  Y(d), A(e, d);
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
pe(xd, { defaultEdgeOptions: {} }, [], [], !0);
var wm = /* @__PURE__ */ ie('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const bm = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function Xs(e, t) {
  he(t, !1), it(e, bm);
  let n = y(t, "x", 12, 0), r = y(t, "y", 12, 0), o = y(t, "width", 12, 0), i = y(t, "height", 12, 0), a = y(t, "isVisible", 12, !0);
  var s = ut(), l = Ce(s);
  {
    var u = (c) => {
      var d = wm();
      let v;
      Oe(() => v = _t(d, "", v, {
        width: typeof o() == "string" ? o() : `${o()}px`,
        height: typeof i() == "string" ? i() : `${i()}px`,
        transform: `translate(${n()}px, ${r()}px)`
      })), A(c, d);
    };
    $e(l, (c) => {
      a() && c(u);
    });
  }
  return A(e, s), me({
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
  Xs,
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
function $d(e, t) {
  he(t, !1);
  const [n, r] = vt(), o = () => oe(a, "$selectionRect", n), i = () => oe(s, "$selectionRectMode", n), { selectionRect: a, selectionRectMode: s } = et();
  Ke();
  const l = /* @__PURE__ */ ke(() => !!(o() && i() === "user")), u = /* @__PURE__ */ ke(() => {
    var p;
    return (p = o()) == null ? void 0 : p.width;
  }), c = /* @__PURE__ */ ke(() => {
    var p;
    return (p = o()) == null ? void 0 : p.height;
  }), d = /* @__PURE__ */ ke(() => {
    var p;
    return (p = o()) == null ? void 0 : p.x;
  }), v = /* @__PURE__ */ ke(() => {
    var p;
    return (p = o()) == null ? void 0 : p.y;
  });
  Xs(e, {
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
pe($d, {}, [], [], !0);
var xm = /* @__PURE__ */ ie('<div class="selection-wrapper nopan svelte-5pxri" role="button" tabindex="-1"><!></div>');
const $m = {
  hash: "svelte-5pxri",
  code: ".selection-wrapper.svelte-5pxri {position:absolute;top:0;left:0;z-index:7;pointer-events:all;}"
};
function Cd(e, t) {
  he(t, !1), it(e, $m);
  const [n, r] = vt(), o = () => oe(l, "$selectionRectMode", n), i = () => oe(c, "$nodeLookup", n), a = () => oe(u, "$nodes", n), s = et(), { selectionRectMode: l, nodes: u, nodeLookup: c } = s, d = fa();
  let v = /* @__PURE__ */ le(null);
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
  ), Ht(), Ke();
  var x = ut(), b = Ce(x);
  {
    var $ = (g) => {
      var _ = xm(), w = W(_);
      Xs(w, { width: "100%", height: "100%", x: 0, y: 0 }), Y(_), zt(_, (k, O) => Ji == null ? void 0 : Ji(k, O), () => ({
        disabled: !1,
        store: s,
        onDrag: (k, O, E, N) => {
          d("nodedrag", { event: k, targetNode: null, nodes: N });
        },
        onDragStart: (k, O, E, N) => {
          d("nodedragstart", { event: k, targetNode: null, nodes: N });
        },
        onDragStop: (k, O, E, N) => {
          d("nodedragstop", { event: k, targetNode: null, nodes: N });
        }
      })), rn(() => ft("contextmenu", _, p)), rn(() => ft("click", _, h)), rn(() => ft("keyup", _, () => {
      })), Oe(() => _t(_, `width: ${f(v).width ?? ""}px; height: ${f(v).height ?? ""}px; transform: translate(${f(v).x ?? ""}px, ${f(v).y ?? ""}px)`)), A(g, _);
    };
    $e(b, (g) => {
      o() === "nodes" && f(v) && Yn(f(v).x) && Yn(f(v).y) && g($);
    });
  }
  A(e, x), me(), r();
}
pe(Cd, {}, [], [], !0);
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
function _d(e, t) {
  he(t, !1);
  let n = y(t, "selectionKey", 12, "Shift"), r = y(t, "multiSelectionKey", 28, () => Ki() ? "Meta" : "Control"), o = y(t, "deleteKey", 12, "Backspace"), i = y(t, "panActivationKey", 12, " "), a = y(t, "zoomActivationKey", 28, () => Ki() ? "Meta" : "Control");
  const {
    selectionKeyPressed: s,
    multiselectionKeyPressed: l,
    deleteKeyPressed: u,
    panActivationKeyPressed: c,
    zoomActivationKeyPressed: d,
    selectionRect: v
  } = et();
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
  return Ke(), ft("blur", Gt, $), ft("contextmenu", Gt, $), zt(Gt, (g, _) => xt == null ? void 0 : xt(g, _), () => ({
    trigger: b(n(), () => s.set(!0)),
    type: "keydown"
  })), zt(Gt, (g, _) => xt == null ? void 0 : xt(g, _), () => ({
    trigger: b(n(), () => s.set(!1)),
    type: "keyup"
  })), zt(Gt, (g, _) => xt == null ? void 0 : xt(g, _), () => ({
    trigger: b(r(), () => l.set(!0)),
    type: "keydown"
  })), zt(Gt, (g, _) => xt == null ? void 0 : xt(g, _), () => ({
    trigger: b(r(), () => l.set(!1)),
    type: "keyup"
  })), zt(Gt, (g, _) => xt == null ? void 0 : xt(g, _), () => ({
    trigger: b(o(), (g) => {
      !(g.originalEvent.ctrlKey || g.originalEvent.metaKey || g.originalEvent.shiftKey) && !n0(g.originalEvent) && u.set(!0);
    }),
    type: "keydown"
  })), zt(Gt, (g, _) => xt == null ? void 0 : xt(g, _), () => ({
    trigger: b(o(), () => u.set(!1)),
    type: "keyup"
  })), zt(Gt, (g, _) => xt == null ? void 0 : xt(g, _), () => ({
    trigger: b(i(), () => c.set(!0)),
    type: "keydown"
  })), zt(Gt, (g, _) => xt == null ? void 0 : xt(g, _), () => ({
    trigger: b(i(), () => c.set(!1)),
    type: "keyup"
  })), zt(Gt, (g, _) => xt == null ? void 0 : xt(g, _), () => ({
    trigger: b(a(), () => d.set(!0)),
    type: "keydown"
  })), zt(Gt, (g, _) => xt == null ? void 0 : xt(g, _), () => ({
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
  _d,
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
var Cm = /* @__PURE__ */ Ve('<path fill="none" class="svelte-flow__connection-path"></path>'), _m = /* @__PURE__ */ Ve('<svg class="svelte-flow__connectionline"><g><!><!></g></svg>');
function kd(e, t) {
  he(t, !1);
  const [n, r] = vt(), o = () => oe(p, "$connection", n), i = () => oe(h, "$connectionLineType", n), a = () => oe(d, "$width", n), s = () => oe(v, "$height", n);
  let l = y(t, "containerStyle", 12, ""), u = y(t, "style", 12, ""), c = y(t, "isCustomComponent", 12, !1);
  const {
    width: d,
    height: v,
    connection: p,
    connectionLineType: h
  } = et();
  let x = /* @__PURE__ */ le(null);
  be(
    () => (o(), re(c()), i(), f(x), cs),
    () => {
      if (o().inProgress && !c()) {
        const { from: w, to: k, fromPosition: O, toPosition: E } = o(), N = {
          sourceX: w.x,
          sourceY: w.y,
          sourcePosition: O,
          targetX: k.x,
          targetY: k.y,
          targetPosition: E
        };
        switch (i()) {
          case Xr.Bezier:
            ((H) => ee(x, H[0]))(Bc(N));
            break;
          case Xr.Step:
            ((H) => ee(x, H[0]))(Xi({ ...N, borderRadius: 0 }));
            break;
          case Xr.SmoothStep:
            ((H) => ee(x, H[0]))(Xi(N));
            break;
          default:
            ((H) => ee(x, H[0]))(cs(N));
        }
      }
    }
  ), Ht(), Ke();
  var b = ut(), $ = Ce(b);
  {
    var g = (w) => {
      var k = _m(), O = W(k), E = W(O);
      It(E, t, "connectionLine", {});
      var N = R(E);
      {
        var H = (I) => {
          var q = Cm();
          Oe(() => {
            Me(q, "d", f(x)), _t(q, u());
          }), A(I, q);
        };
        $e(N, (I) => {
          c() || I(H);
        });
      }
      Y(O), Y(k), Oe(
        (I) => {
          Me(k, "width", a()), Me(k, "height", s()), _t(k, l()), Rt(O, 0, I);
        },
        [
          () => En(Kt([
            "svelte-flow__connection",
            Bh(o().isValid)
          ]))
        ],
        ke
      ), A(w, k);
    };
    $e($, (w) => {
      o().inProgress && w(g);
    });
  }
  A(e, b);
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
  kd,
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
  const [o, i] = vt(), a = () => oe(d, "$selectionRectMode", o), s = /* @__PURE__ */ le();
  let l = y(t, "position", 12, "top-right"), u = y(t, "style", 12, void 0), c = y(t, "class", 12, void 0);
  const { selectionRectMode: d } = et();
  be(() => re(l()), () => {
    ee(s, `${l()}`.split("-"));
  }), Ht(), Ke();
  var v = km();
  let p;
  var h = W(v);
  It(h, t, "default", {}), Y(v), Oe(
    (b) => p = ln(v, p, {
      class: b,
      style: u(),
      ...r,
      [$r]: {
        "pointer-events": a() ? "none" : ""
      }
    }),
    [
      () => Kt([
        "svelte-flow__panel",
        c(),
        ...f(s)
      ])
    ],
    ke
  ), A(e, v);
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
var Em = /* @__PURE__ */ ie('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function Ed(e, t) {
  he(t, !1);
  let n = y(t, "proOptions", 12, void 0), r = y(t, "position", 12, "bottom-right");
  Ke();
  var o = ut(), i = Ce(o);
  {
    var a = (s) => {
      ri(s, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (l, u) => {
          var c = Em();
          A(l, c);
        },
        $$slots: { default: !0 }
      });
    };
    $e(i, (s) => {
      var l;
      (l = n()) != null && l.hideAttribution || s(a);
    });
  }
  return A(e, o), me({
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
pe(Ed, { proOptions: {}, position: {} }, [], [], !0);
function ou(e, { nodeTypes: t, edgeTypes: n, minZoom: r, maxZoom: o, translateExtent: i, paneClickDistance: a }) {
  t !== void 0 && e.setNodeTypes(t), n !== void 0 && e.setEdgeTypes(n), r !== void 0 && e.setMinZoom(r), o !== void 0 && e.setMaxZoom(o), i !== void 0 && e.setTranslateExtent(i), a !== void 0 && e.setPaneClickDistance(a);
}
const Sm = (e) => Object.keys(e);
function iu(e, t) {
  Sm(t).forEach((n) => {
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
var Om = /* @__PURE__ */ ie('<!> <!> <div class="svelte-flow__edgelabel-renderer"></div> <div class="svelte-flow__viewport-portal"></div> <!> <!>', 1), Tm = /* @__PURE__ */ ie("<!> <!>", 1), Vm = /* @__PURE__ */ ie("<div><!> <!> <!> <!></div>");
const Hm = {
  hash: "svelte-18e9ir1",
  code: ".svelte-flow.svelte-18e9ir1 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgba(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function Sd(e, t) {
  const n = Wv(t), r = gt(t, [
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
  he(t, !1), it(e, Hm);
  const [i, a] = vt(), s = () => oe(_(), "$viewport", i), l = () => oe(yo, "$initialized", i), u = () => oe(f(c), "$colorModeClass", i), c = /* @__PURE__ */ le();
  let d = y(t, "id", 12, "1"), v = y(t, "nodes", 12), p = y(t, "edges", 12), h = y(t, "fitView", 12, void 0), x = y(t, "fitViewOptions", 12, void 0), b = y(t, "minZoom", 12, void 0), $ = y(t, "maxZoom", 12, void 0), g = y(t, "initialViewport", 12, void 0), _ = y(t, "viewport", 12, void 0), w = y(t, "nodeTypes", 12, void 0), k = y(t, "edgeTypes", 12, void 0), O = y(t, "selectionKey", 12, void 0), E = y(t, "selectionMode", 12, void 0), N = y(t, "panActivationKey", 12, void 0), H = y(t, "multiSelectionKey", 12, void 0), I = y(t, "zoomActivationKey", 12, void 0), q = y(t, "nodesDraggable", 12, void 0), D = y(t, "nodesConnectable", 12, void 0), B = y(t, "nodeDragThreshold", 12, void 0), S = y(t, "elementsSelectable", 12, void 0), C = y(t, "snapGrid", 12, void 0), P = y(t, "deleteKey", 12, void 0), V = y(t, "connectionRadius", 12, void 0), T = y(t, "connectionLineType", 12, void 0), M = y(t, "connectionMode", 28, () => Tr.Strict), z = y(t, "connectionLineStyle", 12, ""), j = y(t, "connectionLineContainerStyle", 12, ""), K = y(t, "onMoveStart", 12, void 0), te = y(t, "onMove", 12, void 0), G = y(t, "onMoveEnd", 12, void 0), X = y(t, "isValidConnection", 12, void 0), ye = y(t, "translateExtent", 12, void 0), ae = y(t, "nodeExtent", 12, void 0), ge = y(t, "onlyRenderVisibleElements", 12, void 0), ue = y(t, "panOnScrollMode", 28, () => cr.Free), Ee = y(t, "preventScrolling", 12, !0), xe = y(t, "zoomOnScroll", 12, !0), Ne = y(t, "zoomOnDoubleClick", 12, !0), de = y(t, "zoomOnPinch", 12, !0), Q = y(t, "panOnScroll", 12, !1), Pe = y(t, "panOnDrag", 12, !0), F = y(t, "selectionOnDrag", 12, void 0), _e = y(t, "autoPanOnConnect", 12, !0), De = y(t, "autoPanOnNodeDrag", 12, !0), Le = y(t, "onerror", 12, void 0), ce = y(t, "ondelete", 12, void 0), fe = y(t, "onedgecreate", 12, void 0), ve = y(t, "attributionPosition", 12, void 0), Se = y(t, "proOptions", 12, void 0), at = y(t, "defaultEdgeOptions", 12, void 0), ct = y(t, "width", 12, void 0), J = y(t, "height", 12, void 0), Ae = y(t, "colorMode", 12, "light"), se = y(t, "onconnect", 12, void 0), kt = y(t, "onconnectstart", 12, void 0), Et = y(t, "onconnectend", 12, void 0), Dt = y(t, "onbeforedelete", 12, void 0), ze = y(t, "oninit", 12, void 0), ot = y(t, "nodeOrigin", 12, void 0), Ye = y(t, "paneClickDistance", 12, 0), je = y(t, "nodeClickDistance", 12, 0), Je = y(t, "defaultMarkerColor", 12, "#b1b1b7"), Ct = y(t, "style", 12, void 0), Lt = y(t, "class", 12, void 0), Qn = /* @__PURE__ */ le(), yt = /* @__PURE__ */ le(), St = /* @__PURE__ */ le();
  const Mn = s() || g(), st = Ev(xa) ? et() : nm({
    nodes: U(v()),
    edges: U(p()),
    width: ct(),
    height: J(),
    fitView: h(),
    nodeOrigin: ot(),
    nodeExtent: ae()
  });
  mn(() => (st.width.set(f(yt)), st.height.set(f(St)), st.domNode.set(f(Qn)), st.syncNodeStores(v()), st.syncEdgeStores(p()), st.syncViewport(_()), h() !== void 0 && st.fitViewQueued.set(h()), x() && st.fitViewOptions.set(x()), ou(st, {
    nodeTypes: w(),
    edgeTypes: k(),
    minZoom: b(),
    maxZoom: $(),
    translateExtent: ye(),
    paneClickDistance: Ye()
  }), () => {
    st.reset();
  }));
  const { initialized: yo } = st;
  let er = /* @__PURE__ */ le(!1);
  be(
    () => (f(yt), f(St)),
    () => {
      f(yt) !== void 0 && f(St) !== void 0 && (st.width.set(f(yt)), st.height.set(f(St)));
    }
  ), be(
    () => (f(er), l(), re(ze())),
    () => {
      var Z;
      !f(er) && l() && ((Z = ze()) == null || Z(), ee(er, !0));
    }
  ), be(
    () => (re(d()), re(T()), re(V()), re(E()), re(C()), re(Je()), re(q()), re(D()), re(S()), re(ge()), re(X()), re(_e()), re(De()), re(Le()), re(ce()), re(fe()), re(M()), re(B()), re(se()), re(kt()), re(Et()), re(Dt()), re(ot()), iu),
    () => {
      const Z = {
        flowId: d(),
        connectionLineType: T(),
        connectionRadius: V(),
        selectionMode: E(),
        snapGrid: C(),
        defaultMarkerColor: Je(),
        nodesDraggable: q(),
        nodesConnectable: D(),
        elementsSelectable: S(),
        onlyRenderVisibleElements: ge(),
        isValidConnection: X(),
        autoPanOnConnect: _e(),
        autoPanOnNodeDrag: De(),
        onerror: Le(),
        ondelete: ce(),
        onedgecreate: fe(),
        connectionMode: M(),
        nodeDragThreshold: B(),
        onconnect: se(),
        onconnectstart: kt(),
        onconnectend: Et(),
        onbeforedelete: Dt(),
        nodeOrigin: ot()
      };
      iu(st, Z);
    }
  ), be(
    () => (re(w()), re(k()), re(b()), re($()), re(ye()), re(Ye())),
    () => {
      ou(st, {
        nodeTypes: w(),
        edgeTypes: k(),
        minZoom: b(),
        maxZoom: $(),
        translateExtent: ye(),
        paneClickDistance: Ye()
      });
    }
  ), be(
    () => re(Ae()),
    () => {
      n1(ee(c, Mm(Ae())), "$colorModeClass", i);
    }
  ), Ht(), Ke();
  var qt = Vm();
  let br;
  var xr = W(qt);
  _d(xr, {
    get selectionKey() {
      return O();
    },
    get deleteKey() {
      return P();
    },
    get panActivationKey() {
      return N();
    },
    get multiSelectionKey() {
      return H();
    },
    get zoomActivationKey() {
      return I();
    }
  });
  var zr = R(xr, 2);
  const wo = /* @__PURE__ */ ke(() => ue() === void 0 ? cr.Free : ue()), si = /* @__PURE__ */ ke(() => Ee() === void 0 ? !0 : Ee()), li = /* @__PURE__ */ ke(() => xe() === void 0 ? !0 : xe()), Ea = /* @__PURE__ */ ke(() => Ne() === void 0 ? !0 : Ne()), Sa = /* @__PURE__ */ ke(() => de() === void 0 ? !0 : de()), Pa = /* @__PURE__ */ ke(() => Q() === void 0 ? !1 : Q()), Ma = /* @__PURE__ */ ke(() => Pe() === void 0 ? !0 : Pe()), L = /* @__PURE__ */ ke(() => Ye() === void 0 ? 0 : Ye());
  fd(zr, {
    initialViewport: Mn,
    get onMoveStart() {
      return K();
    },
    get onMove() {
      return te();
    },
    get onMoveEnd() {
      return G();
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
      return f(Ea);
    },
    get zoomOnPinch() {
      return f(Sa);
    },
    get panOnScroll() {
      return f(Pa);
    },
    get panOnDrag() {
      return f(Ma);
    },
    get paneClickDistance() {
      return f(L);
    },
    children: (Z, lt) => {
      const Fe = /* @__PURE__ */ ke(() => Pe() === void 0 ? !0 : Pe());
      vd(Z, {
        get panOnDrag() {
          return f(Fe);
        },
        get selectionOnDrag() {
          return F();
        },
        $$events: {
          paneclick(Ze) {
            Ue.call(this, t, Ze);
          },
          panecontextmenu(Ze) {
            Ue.call(this, t, Ze);
          }
        },
        children: (Ze, At) => {
          var pt = Tm(), ht = Ce(pt);
          pd(ht, {
            children: (tr, nr) => {
              var Vt = Om(), Ir = Ce(Vt);
              xd(Ir, {
                get defaultEdgeOptions() {
                  return at();
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
              var ui = R(Ir, 2);
              kd(ui, {
                get containerStyle() {
                  return j();
                },
                get style() {
                  return z();
                },
                isCustomComponent: n.connectionLine,
                $$slots: {
                  connectionLine: (Ge, hb) => {
                    var el = ut(), _f = Ce(el);
                    It(_f, t, "connectionLine", {}), A(Ge, el);
                  }
                }
              });
              var ci = R(ui, 6);
              hd(ci, {
                get nodeClickDistance() {
                  return je();
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
              var Cf = R(ci, 2);
              Cd(Cf, {
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
              }), A(tr, Vt);
            },
            $$slots: { default: !0 }
          });
          var Xt = R(ht, 2);
          $d(Xt, {}), A(Ze, pt);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { default: !0 }
  });
  var ne = R(zr, 2);
  Ed(ne, {
    get proOptions() {
      return Se();
    },
    get position() {
      return ve();
    }
  });
  var we = R(ne, 2);
  It(we, t, "default", {}), Y(qt), An(qt, (Z) => ee(Qn, Z), () => f(Qn)), Oe(
    (Z) => br = ln(
      qt,
      br,
      {
        style: Ct(),
        class: Z,
        "data-testid": "svelte-flow__wrapper",
        ...o,
        role: "application"
      },
      "svelte-18e9ir1"
    ),
    [
      () => Kt([
        "svelte-flow",
        Lt(),
        u()
      ])
    ],
    ke
  ), yl(qt, "clientWidth", (Z) => ee(yt, Z)), yl(qt, "clientHeight", (Z) => ee(St, Z)), ft("dragover", qt, function(Z) {
    Ue.call(this, t, Z);
  }), ft("drop", qt, function(Z) {
    Ue.call(this, t, Z);
  }), A(e, qt);
  var Ie = me({
    get id() {
      return d();
    },
    set id(Z) {
      d(Z), m();
    },
    get nodes() {
      return v();
    },
    set nodes(Z) {
      v(Z), m();
    },
    get edges() {
      return p();
    },
    set edges(Z) {
      p(Z), m();
    },
    get fitView() {
      return h();
    },
    set fitView(Z) {
      h(Z), m();
    },
    get fitViewOptions() {
      return x();
    },
    set fitViewOptions(Z) {
      x(Z), m();
    },
    get minZoom() {
      return b();
    },
    set minZoom(Z) {
      b(Z), m();
    },
    get maxZoom() {
      return $();
    },
    set maxZoom(Z) {
      $(Z), m();
    },
    get initialViewport() {
      return g();
    },
    set initialViewport(Z) {
      g(Z), m();
    },
    get viewport() {
      return _();
    },
    set viewport(Z) {
      _(Z), m();
    },
    get nodeTypes() {
      return w();
    },
    set nodeTypes(Z) {
      w(Z), m();
    },
    get edgeTypes() {
      return k();
    },
    set edgeTypes(Z) {
      k(Z), m();
    },
    get selectionKey() {
      return O();
    },
    set selectionKey(Z) {
      O(Z), m();
    },
    get selectionMode() {
      return E();
    },
    set selectionMode(Z) {
      E(Z), m();
    },
    get panActivationKey() {
      return N();
    },
    set panActivationKey(Z) {
      N(Z), m();
    },
    get multiSelectionKey() {
      return H();
    },
    set multiSelectionKey(Z) {
      H(Z), m();
    },
    get zoomActivationKey() {
      return I();
    },
    set zoomActivationKey(Z) {
      I(Z), m();
    },
    get nodesDraggable() {
      return q();
    },
    set nodesDraggable(Z) {
      q(Z), m();
    },
    get nodesConnectable() {
      return D();
    },
    set nodesConnectable(Z) {
      D(Z), m();
    },
    get nodeDragThreshold() {
      return B();
    },
    set nodeDragThreshold(Z) {
      B(Z), m();
    },
    get elementsSelectable() {
      return S();
    },
    set elementsSelectable(Z) {
      S(Z), m();
    },
    get snapGrid() {
      return C();
    },
    set snapGrid(Z) {
      C(Z), m();
    },
    get deleteKey() {
      return P();
    },
    set deleteKey(Z) {
      P(Z), m();
    },
    get connectionRadius() {
      return V();
    },
    set connectionRadius(Z) {
      V(Z), m();
    },
    get connectionLineType() {
      return T();
    },
    set connectionLineType(Z) {
      T(Z), m();
    },
    get connectionMode() {
      return M();
    },
    set connectionMode(Z) {
      M(Z), m();
    },
    get connectionLineStyle() {
      return z();
    },
    set connectionLineStyle(Z) {
      z(Z), m();
    },
    get connectionLineContainerStyle() {
      return j();
    },
    set connectionLineContainerStyle(Z) {
      j(Z), m();
    },
    get onMoveStart() {
      return K();
    },
    set onMoveStart(Z) {
      K(Z), m();
    },
    get onMove() {
      return te();
    },
    set onMove(Z) {
      te(Z), m();
    },
    get onMoveEnd() {
      return G();
    },
    set onMoveEnd(Z) {
      G(Z), m();
    },
    get isValidConnection() {
      return X();
    },
    set isValidConnection(Z) {
      X(Z), m();
    },
    get translateExtent() {
      return ye();
    },
    set translateExtent(Z) {
      ye(Z), m();
    },
    get nodeExtent() {
      return ae();
    },
    set nodeExtent(Z) {
      ae(Z), m();
    },
    get onlyRenderVisibleElements() {
      return ge();
    },
    set onlyRenderVisibleElements(Z) {
      ge(Z), m();
    },
    get panOnScrollMode() {
      return ue();
    },
    set panOnScrollMode(Z) {
      ue(Z), m();
    },
    get preventScrolling() {
      return Ee();
    },
    set preventScrolling(Z) {
      Ee(Z), m();
    },
    get zoomOnScroll() {
      return xe();
    },
    set zoomOnScroll(Z) {
      xe(Z), m();
    },
    get zoomOnDoubleClick() {
      return Ne();
    },
    set zoomOnDoubleClick(Z) {
      Ne(Z), m();
    },
    get zoomOnPinch() {
      return de();
    },
    set zoomOnPinch(Z) {
      de(Z), m();
    },
    get panOnScroll() {
      return Q();
    },
    set panOnScroll(Z) {
      Q(Z), m();
    },
    get panOnDrag() {
      return Pe();
    },
    set panOnDrag(Z) {
      Pe(Z), m();
    },
    get selectionOnDrag() {
      return F();
    },
    set selectionOnDrag(Z) {
      F(Z), m();
    },
    get autoPanOnConnect() {
      return _e();
    },
    set autoPanOnConnect(Z) {
      _e(Z), m();
    },
    get autoPanOnNodeDrag() {
      return De();
    },
    set autoPanOnNodeDrag(Z) {
      De(Z), m();
    },
    get onerror() {
      return Le();
    },
    set onerror(Z) {
      Le(Z), m();
    },
    get ondelete() {
      return ce();
    },
    set ondelete(Z) {
      ce(Z), m();
    },
    get onedgecreate() {
      return fe();
    },
    set onedgecreate(Z) {
      fe(Z), m();
    },
    get attributionPosition() {
      return ve();
    },
    set attributionPosition(Z) {
      ve(Z), m();
    },
    get proOptions() {
      return Se();
    },
    set proOptions(Z) {
      Se(Z), m();
    },
    get defaultEdgeOptions() {
      return at();
    },
    set defaultEdgeOptions(Z) {
      at(Z), m();
    },
    get width() {
      return ct();
    },
    set width(Z) {
      ct(Z), m();
    },
    get height() {
      return J();
    },
    set height(Z) {
      J(Z), m();
    },
    get colorMode() {
      return Ae();
    },
    set colorMode(Z) {
      Ae(Z), m();
    },
    get onconnect() {
      return se();
    },
    set onconnect(Z) {
      se(Z), m();
    },
    get onconnectstart() {
      return kt();
    },
    set onconnectstart(Z) {
      kt(Z), m();
    },
    get onconnectend() {
      return Et();
    },
    set onconnectend(Z) {
      Et(Z), m();
    },
    get onbeforedelete() {
      return Dt();
    },
    set onbeforedelete(Z) {
      Dt(Z), m();
    },
    get oninit() {
      return ze();
    },
    set oninit(Z) {
      ze(Z), m();
    },
    get nodeOrigin() {
      return ot();
    },
    set nodeOrigin(Z) {
      ot(Z), m();
    },
    get paneClickDistance() {
      return Ye();
    },
    set paneClickDistance(Z) {
      Ye(Z), m();
    },
    get nodeClickDistance() {
      return je();
    },
    set nodeClickDistance(Z) {
      je(Z), m();
    },
    get defaultMarkerColor() {
      return Je();
    },
    set defaultMarkerColor(Z) {
      Je(Z), m();
    },
    get style() {
      return Ct();
    },
    set style(Z) {
      Ct(Z), m();
    },
    get class() {
      return Lt();
    },
    set class(Z) {
      Lt(Z), m();
    }
  });
  return a(), Ie;
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
function Pd(e, t) {
  he(t, !1);
  let n = y(t, "initialNodes", 12, void 0), r = y(t, "initialEdges", 12, void 0), o = y(t, "initialWidth", 12, void 0), i = y(t, "initialHeight", 12, void 0), a = y(t, "fitView", 12, void 0), s = y(t, "nodeOrigin", 12, void 0);
  const l = dd({
    nodes: n(),
    edges: r(),
    width: o(),
    height: i(),
    nodeOrigin: s(),
    fitView: a()
  });
  eo(xa, { getStore: () => l }), Ns(() => {
    l.reset();
  }), Ke();
  var u = ut(), c = Ce(u);
  return It(c, t, "default", {}), A(e, u), me({
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
  Pd,
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
  Ke();
  var c = Nm();
  let d;
  var v = W(c);
  return It(v, t, "default", { class: "button-svg" }), Y(c), Oe(
    (p) => d = ln(c, d, {
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
      () => Kt([
        "svelte-flow__controls-button",
        o()
      ])
    ],
    ke
  ), ft("click", c, function(p) {
    Ue.call(this, t, p);
  }), A(e, c), me({
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
var Dm = /* @__PURE__ */ Ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function Md(e) {
  var t = Dm();
  A(e, t);
}
pe(Md, {}, [], [], !0);
var Lm = /* @__PURE__ */ Ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function Od(e) {
  var t = Lm();
  A(e, t);
}
pe(Od, {}, [], [], !0);
var Am = /* @__PURE__ */ Ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function Td(e) {
  var t = Am();
  A(e, t);
}
pe(Td, {}, [], [], !0);
var zm = /* @__PURE__ */ Ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function Vd(e) {
  var t = zm();
  A(e, t);
}
pe(Vd, {}, [], [], !0);
var Im = /* @__PURE__ */ Ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function Hd(e) {
  var t = Im();
  A(e, t);
}
pe(Hd, {}, [], [], !0);
var Rm = /* @__PURE__ */ ie("<!> <!>", 1), qm = /* @__PURE__ */ ie("<!> <!> <!> <!> <!> <!>", 1);
function Nd(e, t) {
  he(t, !1);
  const [n, r] = vt(), o = () => oe(T, "$nodesDraggable", n), i = () => oe(M, "$nodesConnectable", n), a = () => oe(z, "$elementsSelectable", n), s = () => oe(C, "$viewport", n), l = () => oe(P, "$minZoom", n), u = () => oe(V, "$maxZoom", n), c = /* @__PURE__ */ le(), d = /* @__PURE__ */ le(), v = /* @__PURE__ */ le(), p = /* @__PURE__ */ le();
  let h = y(t, "position", 12, "bottom-left"), x = y(t, "showZoom", 12, !0), b = y(t, "showFitView", 12, !0), $ = y(t, "showLock", 12, !0), g = y(t, "buttonBgColor", 12, void 0), _ = y(t, "buttonBgColorHover", 12, void 0), w = y(t, "buttonColor", 12, void 0), k = y(t, "buttonColorHover", 12, void 0), O = y(t, "buttonBorderColor", 12, void 0), E = y(t, "ariaLabel", 12, void 0), N = y(t, "style", 12, void 0), H = y(t, "orientation", 12, "vertical"), I = y(t, "fitViewOptions", 12, void 0), q = y(t, "class", 12, "");
  const {
    zoomIn: D,
    zoomOut: B,
    fitView: S,
    viewport: C,
    minZoom: P,
    maxZoom: V,
    nodesDraggable: T,
    nodesConnectable: M,
    elementsSelectable: z
  } = et(), j = {
    bgColor: g(),
    bgColorHover: _(),
    color: w(),
    colorHover: k(),
    borderColor: O()
  }, K = () => {
    D();
  }, te = () => {
    B();
  }, G = () => {
    S(I());
  }, X = () => {
    ee(c, !f(c)), T.set(f(c)), M.set(f(c)), z.set(f(c));
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
  }), be(() => re(H()), () => {
    ee(p, H() === "horizontal" ? "horizontal" : "vertical");
  }), Ht(), Ke();
  const ye = /* @__PURE__ */ ke(() => Kt([
    "svelte-flow__controls",
    f(p),
    q()
  ])), ae = /* @__PURE__ */ ke(() => E() ?? "Svelte Flow controls");
  ri(e, {
    get class() {
      return f(ye);
    },
    get position() {
      return h();
    },
    "data-testid": "svelte-flow__controls",
    get "aria-label"() {
      return f(ae);
    },
    get style() {
      return N();
    },
    children: (ue, Ee) => {
      var xe = qm(), Ne = Ce(xe);
      It(Ne, t, "before", {});
      var de = R(Ne, 2);
      {
        var Q = (fe) => {
          var ve = Rm(), Se = Ce(ve);
          Mo(Se, mt(
            {
              class: "svelte-flow__controls-zoomin",
              title: "zoom in",
              "aria-label": "zoom in",
              get disabled() {
                return f(v);
              }
            },
            j,
            {
              $$events: { click: K },
              children: (ct, J) => {
                Md(ct);
              },
              $$slots: { default: !0 }
            }
          ));
          var at = R(Se, 2);
          Mo(at, mt(
            {
              class: "svelte-flow__controls-zoomout",
              title: "zoom out",
              "aria-label": "zoom out",
              get disabled() {
                return f(d);
              }
            },
            j,
            {
              $$events: { click: te },
              children: (ct, J) => {
                Od(ct);
              },
              $$slots: { default: !0 }
            }
          )), A(fe, ve);
        };
        $e(de, (fe) => {
          x() && fe(Q);
        });
      }
      var Pe = R(de, 2);
      {
        var F = (fe) => {
          Mo(fe, mt(
            {
              class: "svelte-flow__controls-fitview",
              title: "fit view",
              "aria-label": "fit view"
            },
            j,
            {
              $$events: { click: G },
              children: (ve, Se) => {
                Td(ve);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        $e(Pe, (fe) => {
          b() && fe(F);
        });
      }
      var _e = R(Pe, 2);
      {
        var De = (fe) => {
          Mo(fe, mt(
            {
              class: "svelte-flow__controls-interactive",
              title: "toggle interactivity",
              "aria-label": "toggle interactivity"
            },
            j,
            {
              $$events: { click: X },
              children: (ve, Se) => {
                var at = ut(), ct = Ce(at);
                {
                  var J = (se) => {
                    Hd(se);
                  }, Ae = (se) => {
                    Vd(se);
                  };
                  $e(ct, (se) => {
                    f(c) ? se(J) : se(Ae, !1);
                  });
                }
                A(ve, at);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        $e(_e, (fe) => {
          $() && fe(De);
        });
      }
      var Le = R(_e, 2);
      It(Le, t, "default", {});
      var ce = R(Le, 2);
      It(ce, t, "after", {}), A(ue, xe);
    },
    $$slots: { default: !0 }
  });
  var ge = me({
    get position() {
      return h();
    },
    set position(ue) {
      h(ue), m();
    },
    get showZoom() {
      return x();
    },
    set showZoom(ue) {
      x(ue), m();
    },
    get showFitView() {
      return b();
    },
    set showFitView(ue) {
      b(ue), m();
    },
    get showLock() {
      return $();
    },
    set showLock(ue) {
      $(ue), m();
    },
    get buttonBgColor() {
      return g();
    },
    set buttonBgColor(ue) {
      g(ue), m();
    },
    get buttonBgColorHover() {
      return _();
    },
    set buttonBgColorHover(ue) {
      _(ue), m();
    },
    get buttonColor() {
      return w();
    },
    set buttonColor(ue) {
      w(ue), m();
    },
    get buttonColorHover() {
      return k();
    },
    set buttonColorHover(ue) {
      k(ue), m();
    },
    get buttonBorderColor() {
      return O();
    },
    set buttonBorderColor(ue) {
      O(ue), m();
    },
    get ariaLabel() {
      return E();
    },
    set ariaLabel(ue) {
      E(ue), m();
    },
    get style() {
      return N();
    },
    set style(ue) {
      N(ue), m();
    },
    get orientation() {
      return H();
    },
    set orientation(ue) {
      H(ue), m();
    },
    get fitViewOptions() {
      return I();
    },
    set fitViewOptions(ue) {
      I(ue), m();
    },
    get class() {
      return q();
    },
    set class(ue) {
      q(ue), m();
    }
  });
  return r(), ge;
}
pe(
  Nd,
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
var Bm = /* @__PURE__ */ Ve("<circle></circle>");
function Dd(e, t) {
  he(t, !1);
  let n = y(t, "radius", 12, 5), r = y(t, "class", 12, "");
  Ke();
  var o = Bm();
  return Oe(
    (i) => {
      Me(o, "cx", n()), Me(o, "cy", n()), Me(o, "r", n()), Rt(o, 0, i);
    },
    [
      () => En(Kt([
        "svelte-flow__background-pattern",
        "dots",
        r()
      ]))
    ],
    ke
  ), A(e, o), me({
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
pe(Dd, { radius: {}, class: {} }, [], [], !0);
var Zm = /* @__PURE__ */ Ve("<path></path>");
function Ld(e, t) {
  he(t, !1);
  let n = y(t, "lineWidth", 12, 1), r = y(t, "dimensions", 12), o = y(t, "variant", 12, void 0), i = y(t, "class", 12, "");
  Ke();
  var a = Zm();
  return Oe(
    (s) => {
      Me(a, "stroke-width", n()), Me(a, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), Rt(a, 0, s);
    },
    [
      () => En(Kt([
        "svelte-flow__background-pattern",
        o(),
        i()
      ]))
    ],
    ke
  ), A(e, a), me({
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
  Ld,
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
const Ym = {
  [dr.Dots]: 1,
  [dr.Lines]: 1,
  [dr.Cross]: 6
};
var jm = /* @__PURE__ */ Ve('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
const Wm = {
  hash: "svelte-1r7pe8d",
  code: ".svelte-flow__background.svelte-1r7pe8d {position:absolute;width:100%;height:100%;top:0;left:0;}"
};
function Ad(e, t) {
  he(t, !1), it(e, Wm);
  const [n, r] = vt(), o = () => oe(k, "$flowId", n), i = () => oe(w, "$viewport", n), a = /* @__PURE__ */ le(), s = /* @__PURE__ */ le(), l = /* @__PURE__ */ le(), u = /* @__PURE__ */ le(), c = /* @__PURE__ */ le();
  let d = y(t, "id", 12, void 0), v = y(t, "variant", 28, () => dr.Dots), p = y(t, "gap", 12, 20), h = y(t, "size", 12, 1), x = y(t, "lineWidth", 12, 1), b = y(t, "bgColor", 12, void 0), $ = y(t, "patternColor", 12, void 0), g = y(t, "patternClass", 12, void 0), _ = y(t, "class", 12, "");
  const { viewport: w, flowId: k } = et(), O = h() || Ym[v()], E = v() === dr.Dots, N = v() === dr.Cross, H = Array.isArray(p()) ? p() : [p(), p()];
  be(
    () => (o(), re(d())),
    () => {
      ee(a, `background-pattern-${o()}-${d() ? d() : ""}`);
    }
  ), be(() => i(), () => {
    ee(s, [
      H[0] * i().zoom || 1,
      H[1] * i().zoom || 1
    ]);
  }), be(() => i(), () => {
    ee(l, O * i().zoom);
  }), be(() => (f(l), f(s)), () => {
    ee(u, N ? [f(l), f(l)] : f(s));
  }), be(
    () => (f(l), f(u)),
    () => {
      ee(c, E ? [
        f(l) / 2,
        f(l) / 2
      ] : [
        f(u)[0] / 2,
        f(u)[1] / 2
      ]);
    }
  ), Ht(), Ke();
  var I = jm();
  let q;
  var D = W(I), B = W(D);
  {
    var S = (T) => {
      const M = /* @__PURE__ */ ke(() => f(l) / 2);
      Dd(T, {
        get radius() {
          return f(M);
        },
        get class() {
          return g();
        }
      });
    }, C = (T) => {
      Ld(T, {
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
    $e(B, (T) => {
      E ? T(S) : T(C, !1);
    });
  }
  Y(D);
  var P = R(D);
  Y(I), Oe(
    (T) => {
      Rt(I, 0, T, "svelte-1r7pe8d"), q = _t(I, "", q, {
        "--xy-background-color-props": b(),
        "--xy-background-pattern-color-props": $()
      }), Me(D, "id", f(a)), Me(D, "x", i().x % f(s)[0]), Me(D, "y", i().y % f(s)[1]), Me(D, "width", f(s)[0]), Me(D, "height", f(s)[1]), Me(D, "patternTransform", `translate(-${f(c)[0]},-${f(c)[1]})`), Me(P, "fill", `url(#${f(a)})`);
    },
    [
      () => En(Kt(["svelte-flow__background", _()]))
    ],
    ke
  ), A(e, I);
  var V = me({
    get id() {
      return d();
    },
    set id(T) {
      d(T), m();
    },
    get variant() {
      return v();
    },
    set variant(T) {
      v(T), m();
    },
    get gap() {
      return p();
    },
    set gap(T) {
      p(T), m();
    },
    get size() {
      return h();
    },
    set size(T) {
      h(T), m();
    },
    get lineWidth() {
      return x();
    },
    set lineWidth(T) {
      x(T), m();
    },
    get bgColor() {
      return b();
    },
    set bgColor(T) {
      b(T), m();
    },
    get patternColor() {
      return $();
    },
    set patternColor(T) {
      $(T), m();
    },
    get patternClass() {
      return g();
    },
    set patternClass(T) {
      g(T), m();
    },
    get class() {
      return _();
    },
    set class(T) {
      _(T), m();
    }
  });
  return r(), V;
}
pe(
  Ad,
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
var Km = /* @__PURE__ */ Ve("<rect></rect>");
function zd(e, t) {
  he(t, !1);
  let n = y(t, "x", 12), r = y(t, "y", 12), o = y(t, "width", 12, 0), i = y(t, "height", 12, 0), a = y(t, "borderRadius", 12, 5), s = y(t, "color", 12, void 0), l = y(t, "shapeRendering", 12), u = y(t, "strokeColor", 12, void 0), c = y(t, "strokeWidth", 12, 2), d = y(t, "selected", 12, !1), v = y(t, "class", 12, "");
  Ke();
  var p = Km();
  let h;
  return Oe(
    (x, b) => {
      h = Rt(p, 0, x, null, h, b), Me(p, "x", n()), Me(p, "y", r()), Me(p, "rx", a()), Me(p, "ry", a()), Me(p, "width", o()), Me(p, "height", i()), _t(p, `${s() ? `fill: ${s()};` : ""}${u() ? `stroke: ${u()};` : ""}${c() ? `stroke-width: ${c()};` : ""}`), Me(p, "shape-rendering", l());
    },
    [
      () => En(Kt(["svelte-flow__minimap-node", v()])),
      () => ({ selected: d() })
    ],
    ke
  ), A(e, p), me({
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
function au(e, t) {
  const n = T0({
    domNode: e,
    panZoom: t.panZoom,
    getTransform: () => {
      const o = U(t.viewport);
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
var Xm = /* @__PURE__ */ Ve("<title> </title>"), Fm = /* @__PURE__ */ Ve('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>');
function Id(e, t) {
  he(t, !1);
  const [n, r] = vt(), o = () => oe(Pe, "$flowId", n), i = () => oe(Ne, "$viewport", n), a = () => oe(de, "$containerWidth", n), s = () => oe(Q, "$containerHeight", n), l = () => oe(xe, "$nodeLookup", n), u = () => oe(Ee, "$nodes", n), c = () => oe(F, "$panZoom", n), d = () => oe(_e, "$translateExtent", n), v = /* @__PURE__ */ le(), p = /* @__PURE__ */ le(), h = /* @__PURE__ */ le(), x = /* @__PURE__ */ le(), b = /* @__PURE__ */ le(), $ = /* @__PURE__ */ le(), g = /* @__PURE__ */ le(), _ = /* @__PURE__ */ le(), w = /* @__PURE__ */ le(), k = /* @__PURE__ */ le(), O = /* @__PURE__ */ le(), E = /* @__PURE__ */ le(), N = /* @__PURE__ */ le();
  let H = y(t, "position", 12, "bottom-right"), I = y(t, "ariaLabel", 12, "Mini map"), q = y(t, "nodeStrokeColor", 12, "transparent"), D = y(t, "nodeColor", 12, void 0), B = y(t, "nodeClass", 12, ""), S = y(t, "nodeBorderRadius", 12, 5), C = y(t, "nodeStrokeWidth", 12, 2), P = y(t, "bgColor", 12, void 0), V = y(t, "maskColor", 12, void 0), T = y(t, "maskStrokeColor", 12, void 0), M = y(t, "maskStrokeWidth", 12, void 0), z = y(t, "width", 12, void 0), j = y(t, "height", 12, void 0), K = y(t, "pannable", 12, !0), te = y(t, "zoomable", 12, !0), G = y(t, "inversePan", 12, void 0), X = y(t, "zoomStep", 12, void 0), ye = y(t, "style", 12, ""), ae = y(t, "class", 12, "");
  const ge = 200, ue = 150, {
    nodes: Ee,
    nodeLookup: xe,
    viewport: Ne,
    width: de,
    height: Q,
    flowId: Pe,
    panZoom: F,
    translateExtent: _e
  } = et(), De = D() === void 0 ? void 0 : qa(D()), Le = qa(q()), ce = qa(B()), fe = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  ), ve = `svelte-flow__minimap-desc-${o()}`;
  let Se = /* @__PURE__ */ le(f(v));
  const at = () => f($);
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
      ee(Se, l().size > 0 ? zc(ei(l(), { filter: (se) => !se.hidden }), f(v)) : f(v)), u();
    }
  ), be(() => re(z()), () => {
    ee(p, z() ?? ge);
  }), be(() => re(j()), () => {
    ee(h, j() ?? ue);
  }), be(
    () => (f(Se), f(p)),
    () => {
      ee(x, f(Se).width / f(p));
    }
  ), be(
    () => (f(Se), f(h)),
    () => {
      ee(b, f(Se).height / f(h));
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
    () => (f(Se), f(g), f(w)),
    () => {
      ee(k, f(Se).x - (f(g) - f(Se).width) / 2 - f(w));
    }
  ), be(
    () => (f(Se), f(_), f(w)),
    () => {
      ee(O, f(Se).y - (f(_) - f(Se).height) / 2 - f(w));
    }
  ), be(() => (f(g), f(w)), () => {
    ee(E, f(g) + f(w) * 2);
  }), be(() => (f(_), f(w)), () => {
    ee(N, f(_) + f(w) * 2);
  }), Ht(), Ke();
  const ct = /* @__PURE__ */ ke(() => ye() + (P() ? `;--xy-minimap-background-color-props:${P()}` : "")), J = /* @__PURE__ */ ke(() => Kt(["svelte-flow__minimap", ae()]));
  ri(e, {
    get position() {
      return H();
    },
    get style() {
      return f(ct);
    },
    get class() {
      return f(J);
    },
    "data-testid": "svelte-flow__minimap",
    children: (se, kt) => {
      var Et = ut(), Dt = Ce(Et);
      {
        var ze = (ot) => {
          var Ye = Fm();
          Me(Ye, "aria-labelledby", ve);
          let je;
          var Je = W(Ye);
          {
            var Ct = (yt) => {
              var St = Xm();
              Me(St, "id", ve);
              var Mn = W(St, !0);
              Y(St), Oe(() => bt(Mn, I())), A(yt, St);
            };
            $e(Je, (yt) => {
              I() && yt(Ct);
            });
          }
          var Lt = R(Je);
          Wt(Lt, 1, u, (yt) => yt.id, (yt, St) => {
            var Mn = ut();
            const st = /* @__PURE__ */ ke(() => l().get(f(St).id));
            var yo = Ce(Mn);
            {
              var er = (qt) => {
                const br = /* @__PURE__ */ ke(() => yr(f(st))), xr = /* @__PURE__ */ ke(() => De == null ? void 0 : De(f(st))), zr = /* @__PURE__ */ ke(() => Le(f(st))), wo = /* @__PURE__ */ ke(() => ce(f(st)));
                zd(qt, mt(
                  {
                    get x() {
                      return f(st).internals.positionAbsolute.x;
                    },
                    get y() {
                      return f(st).internals.positionAbsolute.y;
                    }
                  },
                  () => f(br),
                  {
                    get selected() {
                      return f(st).selected;
                    },
                    get color() {
                      return f(xr);
                    },
                    get borderRadius() {
                      return S();
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
              $e(yo, (qt) => {
                f(st) && Ic(f(st)) && qt(er);
              });
            }
            A(yt, Mn);
          });
          var Qn = R(Lt);
          Y(Ye), zt(Ye, (yt, St) => au == null ? void 0 : au(yt, St), () => ({
            panZoom: c(),
            viewport: Ne,
            getViewScale: at,
            translateExtent: d(),
            width: a(),
            height: s(),
            inversePan: G(),
            zoomStep: X(),
            pannable: K(),
            zoomable: te()
          })), Oe(() => {
            Me(Ye, "width", f(p)), Me(Ye, "height", f(h)), Me(Ye, "viewBox", `${f(k) ?? ""} ${f(O) ?? ""} ${f(E) ?? ""} ${f(N) ?? ""}`), je = _t(Ye, "", je, {
              "--xy-minimap-mask-background-color-props": V(),
              "--xy-minimap-mask-stroke-color-props": T(),
              "--xy-minimap-mask-stroke-width-props": M() ? M() * f($) : void 0
            }), Me(Qn, "d", `M${f(k) - f(w)},${f(O) - f(w)}h${f(E) + f(w) * 2}v${f(N) + f(w) * 2}h${-f(E) - f(w) * 2}z
      M${f(v).x ?? ""},${f(v).y ?? ""}h${f(v).width ?? ""}v${f(v).height ?? ""}h${-f(v).width}z`);
          }), A(ot, Ye);
        };
        $e(Dt, (ot) => {
          c() && ot(ze);
        });
      }
      A(se, Et);
    },
    $$slots: { default: !0 }
  });
  var Ae = me({
    get position() {
      return H();
    },
    set position(se) {
      H(se), m();
    },
    get ariaLabel() {
      return I();
    },
    set ariaLabel(se) {
      I(se), m();
    },
    get nodeStrokeColor() {
      return q();
    },
    set nodeStrokeColor(se) {
      q(se), m();
    },
    get nodeColor() {
      return D();
    },
    set nodeColor(se) {
      D(se), m();
    },
    get nodeClass() {
      return B();
    },
    set nodeClass(se) {
      B(se), m();
    },
    get nodeBorderRadius() {
      return S();
    },
    set nodeBorderRadius(se) {
      S(se), m();
    },
    get nodeStrokeWidth() {
      return C();
    },
    set nodeStrokeWidth(se) {
      C(se), m();
    },
    get bgColor() {
      return P();
    },
    set bgColor(se) {
      P(se), m();
    },
    get maskColor() {
      return V();
    },
    set maskColor(se) {
      V(se), m();
    },
    get maskStrokeColor() {
      return T();
    },
    set maskStrokeColor(se) {
      T(se), m();
    },
    get maskStrokeWidth() {
      return M();
    },
    set maskStrokeWidth(se) {
      M(se), m();
    },
    get width() {
      return z();
    },
    set width(se) {
      z(se), m();
    },
    get height() {
      return j();
    },
    set height(se) {
      j(se), m();
    },
    get pannable() {
      return K();
    },
    set pannable(se) {
      K(se), m();
    },
    get zoomable() {
      return te();
    },
    set zoomable(se) {
      te(se), m();
    },
    get inversePan() {
      return G();
    },
    set inversePan(se) {
      G(se), m();
    },
    get zoomStep() {
      return X();
    },
    set zoomStep(se) {
      X(se), m();
    },
    get style() {
      return ye();
    },
    set style(se) {
      ye(se), m();
    },
    get class() {
      return ae();
    },
    set class(se) {
      ae(se), m();
    }
  });
  return r(), Ae;
}
pe(
  Id,
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
const su = (e) => Yh(e);
function tn() {
  const { zoomIn: e, zoomOut: t, fitView: n, onbeforedelete: r, snapGrid: o, viewport: i, width: a, height: s, minZoom: l, maxZoom: u, panZoom: c, nodes: d, edges: v, domNode: p, nodeLookup: h, nodeOrigin: x, edgeLookup: b, connectionLookup: $ } = et(), g = (k) => {
    var O, E;
    const N = U(h), H = su(k) ? k : N.get(k.id), I = H.parentId ? Jh(H.position, H.measured, H.parentId, N, U(x)) : H.position, q = {
      ...H,
      position: I,
      width: ((O = H.measured) == null ? void 0 : O.width) ?? H.width,
      height: ((E = H.measured) == null ? void 0 : E.height) ?? H.height
    };
    return ao(q);
  }, _ = (k, O, E = { replace: !1 }) => {
    var N;
    const H = (N = U(h).get(k)) == null ? void 0 : N.internals.userNode;
    if (!H)
      return;
    const I = typeof O == "function" ? O(H) : O;
    E.replace ? d.update((q) => q.map((D) => D.id === k ? su(I) ? I : { ...D, ...I } : D)) : (Object.assign(H, I), d.update((q) => q));
  }, w = (k) => U(h).get(k);
  return {
    zoomIn: e,
    zoomOut: t,
    getInternalNode: w,
    getNode: (k) => {
      var O;
      return (O = w(k)) == null ? void 0 : O.internals.userNode;
    },
    getNodes: (k) => k === void 0 ? U(d) : lu(U(h), k),
    getEdge: (k) => U(b).get(k),
    getEdges: (k) => k === void 0 ? U(v) : lu(U(b), k),
    setZoom: (k, O) => {
      const E = U(c);
      return E ? E.scaleTo(k, { duration: O == null ? void 0 : O.duration }) : Promise.resolve(!1);
    },
    getZoom: () => U(i).zoom,
    setViewport: async (k, O) => {
      const E = U(i), N = U(c);
      return N ? (await N.setViewport({
        x: k.x ?? E.x,
        y: k.y ?? E.y,
        zoom: k.zoom ?? E.zoom
      }, { duration: O == null ? void 0 : O.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => U(i),
    setCenter: async (k, O, E) => {
      const N = typeof (E == null ? void 0 : E.zoom) < "u" ? E.zoom : U(u), H = U(c);
      return H ? (await H.setViewport({
        x: U(a) / 2 - k * N,
        y: U(s) / 2 - O * N,
        zoom: N
      }, { duration: E == null ? void 0 : E.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    fitView: n,
    fitBounds: async (k, O) => {
      const E = U(c);
      if (!E)
        return Promise.resolve(!1);
      const N = Ys(k, U(a), U(s), U(l), U(u), (O == null ? void 0 : O.padding) ?? 0.1);
      return await E.setViewport(N, { duration: O == null ? void 0 : O.duration }), Promise.resolve(!0);
    },
    getIntersectingNodes: (k, O = !0, E) => {
      const N = Zl(k), H = N ? k : g(k);
      return H ? (E || U(d)).filter((I) => {
        const q = U(h).get(I.id);
        if (!q || !N && I.id === k.id)
          return !1;
        const D = ao(q), B = Yo(D, H);
        return O && B > 0 || B >= H.width * H.height;
      }) : [];
    },
    isNodeIntersecting: (k, O, E = !0) => {
      const N = Zl(k) ? k : g(k);
      if (!N)
        return !1;
      const H = Yo(N, O);
      return E && H > 0 || H >= N.width * N.height;
    },
    deleteElements: async ({ nodes: k = [], edges: O = [] }) => {
      const { nodes: E, edges: N } = await Dc({
        nodesToRemove: k,
        edgesToRemove: O,
        nodes: U(d),
        edges: U(v),
        onBeforeDelete: U(r)
      });
      return E && d.update((H) => H.filter((I) => !E.some(({ id: q }) => q === I.id))), N && v.update((H) => H.filter((I) => !N.some(({ id: q }) => q === I.id))), {
        deletedNodes: E,
        deletedEdges: N
      };
    },
    screenToFlowPosition: (k, O = { snapToGrid: !0 }) => {
      const E = U(p);
      if (!E)
        return k;
      const N = O.snapToGrid ? U(o) : !1, { x: H, y: I, zoom: q } = U(i), { x: D, y: B } = E.getBoundingClientRect(), S = {
        x: k.x - D,
        y: k.y - B
      };
      return ti(S, [H, I, q], N !== null, N || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (k) => {
      const O = U(p);
      if (!O)
        return k;
      const { x: E, y: N, zoom: H } = U(i), { x: I, y: q } = O.getBoundingClientRect(), D = Wi(k, [E, N, H]);
      return {
        x: D.x + I,
        y: D.y + q
      };
    },
    toObject: () => ({
      nodes: U(d).map((k) => ({
        ...k,
        // we want to make sure that changes to the nodes object that gets returned by toObject
        // do not affect the nodes object
        position: { ...k.position },
        data: { ...k.data }
      })),
      edges: U(v).map((k) => ({ ...k })),
      viewport: { ...U(i) }
    }),
    updateNode: _,
    updateNodeData: (k, O, E) => {
      var N;
      const H = (N = U(h).get(k)) == null ? void 0 : N.internals.userNode;
      if (!H)
        return;
      const I = typeof O == "function" ? O(H) : O;
      H.data = E != null && E.replace ? I : { ...H.data, ...I }, d.update((q) => q);
    },
    getNodesBounds: (k) => {
      const O = U(h), E = U(x);
      return jh(k, { nodeLookup: O, nodeOrigin: E });
    },
    getHandleConnections: ({ type: k, id: O, nodeId: E }) => {
      var N;
      return Array.from(((N = U($).get(`${E}-${k}-${O ?? null}`)) == null ? void 0 : N.values()) ?? []);
    },
    viewport: i
  };
}
function lu(e, t) {
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
function Rd(e, t) {
  he(t, !1);
  const [n, r] = vt(), o = () => oe(_, "$nodes", n), i = () => oe(g, "$nodeLookup", n), a = () => oe($, "$viewport", n), s = () => oe(b, "$domNode", n), l = /* @__PURE__ */ le(), u = /* @__PURE__ */ le(), c = /* @__PURE__ */ le();
  let d = y(t, "nodeId", 12, void 0), v = y(t, "position", 12, void 0), p = y(t, "align", 12, void 0), h = y(t, "offset", 12, void 0), x = y(t, "isVisible", 12, void 0);
  const { domNode: b, viewport: $, nodeLookup: g, nodes: _ } = et(), { getNodesBounds: w } = tn(), k = Pr("svelteflow__node_id");
  let O = /* @__PURE__ */ le(), E = /* @__PURE__ */ le([]), N = h() !== void 0 ? h() : 10, H = v() !== void 0 ? v() : qe.Top, I = p() !== void 0 ? p() : "center";
  be(
    () => (o(), re(d()), i()),
    () => {
      o();
      const C = Array.isArray(d()) ? d() : [d() || k];
      ee(E, C.reduce(
        (P, V) => {
          const T = i().get(V);
          return T && P.push(T), P;
        },
        []
      ));
    }
  ), be(
    () => (f(E), a()),
    () => {
      const C = w(f(E));
      C && ee(O, p0(C, a(), H, N, I));
    }
  ), be(() => f(E), () => {
    ee(l, f(E).length === 0 ? 1 : Math.max(...f(E).map((C) => (C.internals.z || 5) + 1)));
  }), be(() => o(), () => {
    ee(u, o().filter((C) => C.selected).length);
  }), be(
    () => (re(x()), f(E), f(u)),
    () => {
      ee(c, typeof x() == "boolean" ? x() : f(E).length === 1 && f(E)[0].selected && f(u) === 1);
    }
  ), Ht(), Ke();
  var q = ut(), D = Ce(q);
  {
    var B = (C) => {
      var P = Gm();
      let V;
      var T = W(P);
      It(T, t, "default", {}), Y(P), zt(P, (M, z) => Gi == null ? void 0 : Gi(M, z), () => ({ domNode: s() })), Oe(
        (M) => {
          Me(P, "data-id", M), V = _t(P, "", V, {
            position: "absolute",
            transform: f(O),
            "z-index": f(l)
          });
        },
        [
          () => f(E).reduce((M, z) => `${M}${z.id} `, "").trim()
        ],
        ke
      ), A(C, P);
    };
    $e(D, (C) => {
      s() && f(c) && f(E) && C(B);
    });
  }
  A(e, q);
  var S = me({
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
  return r(), S;
}
pe(
  Rd,
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
function Ar(e) {
  const { nodes: t, nodeLookup: n } = et();
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
const uu = "tinyflow-component";
class Um {
  constructor(t) {
    if (Ut(this, "options"), Ut(this, "rootEl"), Ut(this, "svelteFlowInstance"), typeof t.element != "string" && !(t.element instanceof Element))
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
    const t = document.createElement(uu);
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
    const n = document.createElement(uu);
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
  const e = Te([]), t = Te([]), n = Te({ x: 250, y: 100, zoom: 1 });
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
}, Si = Jm();
var Qm = /* @__PURE__ */ ie("<button><!></button>");
function Qe(e, t) {
  he(t, !0);
  const n = y(t, "children", 7), r = y(t, "primary", 7), o = /* @__PURE__ */ Nt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children",
    "primary"
  ]);
  var i = Qm();
  let a;
  var s = W(i);
  return Mr(s, () => n() ?? Ot), Y(i), Oe(() => a = ln(i, a, {
    type: "button",
    ...o,
    class: `tf-btn ${r() ? "tf-btn-primary" : ""} nopan nodrag ${t.class ?? ""}`
  })), A(e, i), me({
    get children() {
      return n();
    },
    set children(l) {
      n(l), m();
    },
    get primary() {
      return r();
    },
    set primary(l) {
      r(l), m();
    }
  });
}
pe(Qe, { children: {}, primary: {} }, [], [], !0);
var e2 = /* @__PURE__ */ ie("<input>");
function qd(e, t) {
  he(t, !0);
  const n = /* @__PURE__ */ Nt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = e2();
  Kn(r);
  let o;
  Oe(() => o = ln(r, o, {
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), A(e, r), me();
}
pe(qd, {}, [], [], !0);
var t2 = /* @__PURE__ */ ie('<div><input type="hidden"> <!> <!></div>');
const n2 = {
  hash: "svelte-1swt2gg",
  code: ".tf-chosen.svelte-1swt2gg {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function Bd(e, t) {
  he(t, !0), it(e, n2);
  const n = y(t, "placeholder", 7), r = y(t, "label", 7), o = y(t, "value", 7), i = y(t, "buttonText", 7, "选择..."), a = y(t, "onChosen", 7), s = /* @__PURE__ */ Nt(t, [
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
  var c = W(l);
  Kn(c);
  var d = R(c, 2);
  Pt(d, {
    get value() {
      return r();
    },
    get placeholder() {
      return n();
    },
    style: "flex-grow: 1;",
    disabled: !0
  });
  var v = R(d, 2);
  return Qe(v, {
    onclick: (p) => {
      var h;
      (h = a()) == null || h(o(), r(), p);
    },
    style: "padding: 3px",
    children: (p, h) => {
      Re();
      var x = We();
      Oe(() => bt(x, i())), A(p, x);
    },
    $$slots: { default: !0 }
  }), Y(l), Oe(() => {
    u = ln(
      l,
      u,
      {
        ...s,
        class: `tf-chosen nopan nodrag ${t.class ?? ""}`
      },
      "svelte-1swt2gg"
    ), bi(c, o());
  }), A(e, l), me({
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
  Bd,
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
function Pt(e, t) {
  he(t, !0);
  const n = /* @__PURE__ */ Nt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = r2();
  Kn(r);
  let o;
  Oe(() => o = ln(r, o, {
    type: "text",
    spellcheck: "false",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), A(e, r), me();
}
pe(Pt, {}, [], [], !0);
var o2 = /* @__PURE__ */ ie("<textarea></textarea>");
function $t(e, t) {
  he(t, !0);
  const n = y(t, "value", 7), r = /* @__PURE__ */ Nt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "value"
  ]);
  var o = o2();
  zv(o);
  let i;
  return Oe(() => i = ln(o, i, {
    spellcheck: "false",
    ...r,
    class: `tf-textarea nodrag nowheel ${t.class ?? ""}`,
    value: n() || ""
  })), A(e, o), me({
    get value() {
      return n();
    },
    set value(a) {
      n(a), m();
    }
  });
}
pe($t, { value: {} }, [], [], !0);
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
  Ke();
  var l = a2();
  let u;
  return Wt(l, 5, o, to, (c, d, v) => {
    var p = i2();
    Me(p, "tabindex", v), p.__click = () => s(f(d), v), p.__keydown = ($) => {
      ($.key === "Enter" || $.key === " ") && ($.preventDefault(), s(f(d), v));
    };
    var h = W(p);
    {
      var x = ($) => {
        var g = We();
        Oe(() => bt(g, f(d).label)), A($, g);
      }, b = ($) => {
        var g = ut(), _ = Ce(g);
        Mr(_, () => f(d).label ?? Ot), A($, g);
      };
      $e(h, ($) => {
        typeof f(d).label == "string" ? $(x) : $(b, !1);
      });
    }
    Y(p), Oe(() => Rt(p, 1, `tf-tabs-item ${v === a() ? "active" : ""}`)), A(c, p);
  }), Y(l), Oe(() => u = ln(l, u, {
    ...r,
    class: `tf-tabs ${r.class ?? ""}`
  })), A(e, l), me({
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
function Yd(e, t) {
  he(t, !0), it(e, p2);
  let n = y(t, "items", 7), r = y(t, "onChange", 7), o = y(t, "activeKeys", 31, () => bn([]));
  function i(s) {
    var l;
    o().includes(s.key) ? o(o().filter((u) => u !== s.key)) : (o().push(s.key), o(o())), (l = r()) == null || l(s, o());
  }
  var a = v2();
  return Wt(a, 21, n, to, (s, l, u) => {
    var c = f2(), d = W(c);
    Me(d, "tabindex", u), d.__click = [s2, i, l], d.__keydown = [l2, i, l];
    var v = W(d);
    {
      var p = (w) => {
        var k = u2(), O = W(k);
        sr(O, {
          get target() {
            return f(l).icon;
          }
        }), Y(k), A(w, k);
      };
      $e(v, (w) => {
        f(l).icon && w(p);
      });
    }
    var h = R(v, 2);
    sr(h, {
      get target() {
        return f(l).title;
      }
    });
    var x = R(h, 2);
    Y(d);
    var b = R(d, 2);
    {
      var $ = (w) => {
        var k = c2(), O = W(k);
        sr(O, {
          get target() {
            return f(l).description;
          }
        }), Y(k), A(w, k);
      };
      $e(b, (w) => {
        f(l).description && w($);
      });
    }
    var g = R(b, 2);
    {
      var _ = (w) => {
        var k = d2(), O = W(k);
        sr(O, {
          get target() {
            return f(l).content;
          }
        }), Y(k), A(w, k);
      };
      $e(g, (w) => {
        o().includes(f(l).key) && w(_);
      });
    }
    Y(c), Oe((w) => Rt(x, 1, `tf-collapse-item-title-arrow ${w ?? ""}`, "svelte-1jfktzw"), [
      () => o().includes(f(l).key) ? "rotate-90" : ""
    ]), A(s, c);
  }), Y(a), Oe(() => {
    _t(a, t.style), Rt(a, 1, `tf-collapse ${t.class ?? ""}`, "svelte-1jfktzw");
  }), A(e, a), me({
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
pe(Yd, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function sr(e, t) {
  he(t, !0);
  let n = y(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = ut(), o = Ce(r);
  {
    var i = (s) => {
      var l = ut(), u = Ce(l);
      Mr(u, () => n() ?? Ot), A(s, l);
    }, a = (s) => {
      var l = ut(), u = Ce(l);
      Hs(u, n), A(s, l);
    };
    $e(o, (s) => {
      typeof n() == "function" ? s(i) : s(a, !1);
    });
  }
  return A(e, r), me({
    get target() {
      return n();
    },
    set target(s) {
      n(s), m();
    }
  });
}
pe(sr, { target: {} }, [], [], !0);
var g2 = (e, t, n) => t(f(n)), h2 = /* @__PURE__ */ Ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), m2 = /* @__PURE__ */ ie('<div class="tf-select-content-children"><!></div>'), y2 = /* @__PURE__ */ ie('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), w2 = /* @__PURE__ */ ie('<div class="tf-select-content nopan nodrag"><!></div>'), b2 = /* @__PURE__ */ ie("<!> <!>", 1), x2 = /* @__PURE__ */ ie('<div class="tf-select-input-placeholder"> </div>'), $2 = /* @__PURE__ */ ie('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), C2 = /* @__PURE__ */ ie("<div><!></div>");
function hn(e, t) {
  he(t, !0);
  const n = (g, _ = Ot) => {
    var w = ut(), k = Ce(w);
    Wt(k, 19, _, (O, E) => `${E}_${O.value}`, (O, E) => {
      var N = y2(), H = Ce(N);
      H.__click = [g2, h, E];
      var I = W(H), q = W(I);
      {
        var D = (P) => {
          var V = h2();
          A(P, V);
        };
        $e(q, (P) => {
          f(E).children && f(E).children.length > 0 && P(D);
        });
      }
      Y(I);
      var B = R(I, 2);
      sr(B, {
        get target() {
          return f(E).label;
        }
      }), Y(H);
      var S = R(H, 2);
      {
        var C = (P) => {
          var V = m2(), T = W(V);
          n(T, () => f(E).children), Y(V), A(P, V);
        };
        $e(S, (P) => {
          f(E).children && f(E).children.length > 0 && (s() || u().includes(f(E).value)) && P(C);
        });
      }
      A(O, N);
    }), A(g, w);
  };
  let r = y(t, "items", 7), o = y(t, "onSelect", 7), i = y(t, "value", 23, () => []), a = y(t, "defaultValue", 23, () => []), s = y(t, "expandAll", 7, !0), l = y(t, "multiple", 7, !1), u = y(t, "expandValue", 23, () => []), c = y(t, "placeholder", 7), d = /* @__PURE__ */ Nt(t, [
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
  ]), v = /* @__PURE__ */ He(() => {
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
  var $ = W(x);
  return An(
    mo($, {
      floating: (g) => {
        var _ = w2(), w = W(_);
        n(w, r), Y(_), A(g, _);
      },
      children: (g, _) => {
        var w = $2();
        let k;
        var O = W(w);
        Wt(
          O,
          23,
          () => f(v),
          (E, N) => `${N}_${E.value}`,
          (E, N, H) => {
            var I = ut(), q = Ce(I);
            {
              var D = (S) => {
                var C = ut(), P = Ce(C);
                {
                  var V = (T) => {
                    sr(T, {
                      get target() {
                        return f(N).label;
                      }
                    });
                  };
                  $e(P, (T) => {
                    f(H) === 0 && T(V);
                  });
                }
                A(S, C);
              }, B = (S) => {
                var C = b2(), P = Ce(C);
                sr(P, {
                  get target() {
                    return f(N).label;
                  }
                });
                var V = R(P, 2);
                {
                  var T = (M) => {
                    var z = We(",");
                    A(M, z);
                  };
                  $e(V, (M) => {
                    f(H) < f(v).length - 1 && M(T);
                  });
                }
                A(S, C);
              };
              $e(q, (S) => {
                l() ? S(B, !1) : S(D);
              });
            }
            A(E, I);
          },
          (E) => {
            var N = x2(), H = W(N, !0);
            Y(N), Oe(() => bt(H, c())), A(E, N);
          }
        ), Y(O), Re(2), Y(w), Oe(() => k = ln(w, k, {
          class: "tf-select-input nopan nodrag",
          ...d
        })), A(g, w);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (g) => p = g,
    () => p
  ), Y(x), Oe(() => b = ln(x, b, {
    ...d,
    class: `tf-select ${d.class ?? ""}`
  })), A(e, x), me({
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
const Wo = Math.min, Fr = Math.max, Qi = Math.round, Vn = (e) => ({
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
  return Fr(e, Wo(t, n));
}
function oi(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Hr(e) {
  return e.split("-")[0];
}
function ii(e) {
  return e.split("-")[1];
}
function jd(e) {
  return e === "x" ? "y" : "x";
}
function Fs(e) {
  return e === "y" ? "height" : "width";
}
function Sr(e) {
  return ["top", "bottom"].includes(Hr(e)) ? "y" : "x";
}
function Gs(e) {
  return jd(Sr(e));
}
function E2(e, t, n) {
  n === void 0 && (n = !1);
  const r = ii(e), o = Gs(e), i = Fs(o);
  let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (a = ea(a)), [a, ea(a)];
}
function S2(e) {
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
  let i = P2(Hr(e), n === "start", r);
  return o && (i = i.map((a) => a + "-" + o), t && (i = i.concat(i.map(vs)))), i;
}
function ea(e) {
  return e.replace(/left|right|bottom|top/g, (t) => _2[t]);
}
function O2(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Wd(e) {
  return typeof e != "number" ? O2(e) : {
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
function cu(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = Sr(t), a = Gs(t), s = Fs(a), l = Hr(t), u = i === "y", c = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, v = r[s] / 2 - o[s] / 2;
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
const T2 = async (e, t, n) => {
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
  } = cu(u, r, l), v = r, p = {}, h = 0;
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
    } = cu(u, v, l)), x = -1);
  }
  return {
    x: c,
    y: d,
    placement: v,
    strategy: o,
    middlewareData: p
  };
};
async function Kd(e, t) {
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
  } = oi(t, e), h = Wd(p), x = s[v ? d === "floating" ? "reference" : "floating" : d], b = ta(await i.getClippingRect({
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
const V2 = (e) => ({
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
    const d = Wd(c), v = {
      x: n,
      y: r
    }, p = Gs(o), h = Fs(p), x = await a.getDimensions(u), b = p === "y", $ = b ? "top" : "left", g = b ? "bottom" : "right", _ = b ? "clientHeight" : "clientWidth", w = i.reference[h] + i.reference[p] - v[p] - i.floating[h], k = v[p] - i.reference[p], O = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
    let E = O ? O[_] : 0;
    (!E || !await (a.isElement == null ? void 0 : a.isElement(O))) && (E = s.floating[_] || i.floating[h]);
    const N = w / 2 - k / 2, H = E / 2 - x[h] / 2 - 1, I = Wo(d[$], H), q = Wo(d[g], H), D = I, B = E - x[h] - q, S = E / 2 - x[h] / 2 + N, C = fs(D, S, B), P = !l.arrow && ii(o) != null && S !== C && i.reference[h] / 2 - (S < D ? I : q) - x[h] / 2 < 0, V = P ? S < D ? S - D : S - B : 0;
    return {
      [p]: v[p] + V,
      data: {
        [p]: C,
        centerOffset: S - C - V,
        ...P && {
          alignmentOffset: V
        }
      },
      reset: P
    };
  }
}), H2 = function(e) {
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
      const $ = Hr(o), g = Sr(s), _ = Hr(s) === s, w = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), k = v || (_ || !x ? [ea(s)] : S2(s)), O = h !== "none";
      !v && O && k.push(...M2(s, x, h, w));
      const E = [s, ...k], N = await Kd(t, b), H = [];
      let I = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && H.push(N[$]), d) {
        const C = E2(o, a, w);
        H.push(N[C[0]], N[C[1]]);
      }
      if (I = [...I, {
        placement: o,
        overflows: H
      }], !H.every((C) => C <= 0)) {
        var q, D;
        const C = (((q = i.flip) == null ? void 0 : q.index) || 0) + 1, P = E[C];
        if (P) {
          var B;
          const T = d === "alignment" ? g !== Sr(P) : !1, M = ((B = I[0]) == null ? void 0 : B.overflows[0]) > 0;
          if (!T || M)
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
        let V = (D = I.filter((T) => T.overflows[0] <= 0).sort((T, M) => T.overflows[1] - M.overflows[1])[0]) == null ? void 0 : D.placement;
        if (!V)
          switch (p) {
            case "bestFit": {
              var S;
              const T = (S = I.filter((M) => {
                if (O) {
                  const z = Sr(M.placement);
                  return z === g || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  z === "y";
                }
                return !0;
              }).map((M) => [M.placement, M.overflows.filter((z) => z > 0).reduce((z, j) => z + j, 0)]).sort((M, z) => M[1] - z[1])[0]) == null ? void 0 : S[0];
              T && (V = T);
              break;
            }
            case "initialPlacement":
              V = s;
              break;
          }
        if (o !== V)
          return {
            reset: {
              placement: V
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
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = Hr(n), s = ii(n), l = Sr(n) === "y", u = ["left", "top"].includes(a) ? -1 : 1, c = i && l ? -1 : 1, d = oi(t, e);
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
      }, c = await Kd(t, l), d = Sr(Hr(o)), v = jd(d);
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
  return Xd(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function sn(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Jn(e) {
  var t;
  return (t = (Xd(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Xd(e) {
  return $a() ? e instanceof Node || e instanceof sn(e).Node : !1;
}
function _n(e) {
  return $a() ? e instanceof Element || e instanceof sn(e).Element : !1;
}
function zn(e) {
  return $a() ? e instanceof HTMLElement || e instanceof sn(e).HTMLElement : !1;
}
function du(e) {
  return !$a() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof sn(e).ShadowRoot;
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
function A2(e) {
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
function z2(e) {
  let t = gr(e);
  for (; zn(t) && !lo(t); ) {
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
function lo(e) {
  return ["html", "body", "#document"].includes(ho(e));
}
function kn(e) {
  return sn(e).getComputedStyle(e);
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
    du(e) && e.host || // Fallback.
    Jn(e)
  );
  return du(t) ? t.host : t;
}
function Fd(e) {
  const t = gr(e);
  return lo(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : zn(t) && ai(t) ? t : Fd(t);
}
function Gd(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = Fd(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = sn(o);
  return i ? (ps(a), t.concat(a, a.visualViewport || [], ai(o) ? o : [], [])) : t.concat(o, Gd(o, []));
}
function ps(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Ud(e) {
  const t = kn(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = zn(e), i = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, s = Qi(n) !== i || Qi(r) !== a;
  return s && (n = i, r = a), {
    width: n,
    height: r,
    $: s
  };
}
function Jd(e) {
  return _n(e) ? e : e.contextElement;
}
function Gr(e) {
  const t = Jd(e);
  if (!zn(t))
    return Vn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Ud(t);
  let a = (i ? Qi(n.width) : n.width) / r, s = (i ? Qi(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const I2 = /* @__PURE__ */ Vn(0);
function Qd(e) {
  const t = sn(e);
  return !Js() || !t.visualViewport ? I2 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function R2(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== sn(e) ? !1 : t;
}
function Ko(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Jd(e);
  let a = Vn(1);
  t && (r ? _n(r) && (a = Gr(r)) : a = Gr(e));
  const s = R2(i, n, r) ? Qd(i) : Vn(0);
  let l = (o.left + s.x) / a.x, u = (o.top + s.y) / a.y, c = o.width / a.x, d = o.height / a.y;
  if (i) {
    const v = sn(i), p = r && _n(r) ? sn(r) : r;
    let h = v, x = ps(h);
    for (; x && r && p !== h; ) {
      const b = Gr(x), $ = x.getBoundingClientRect(), g = kn(x), _ = $.left + (x.clientLeft + parseFloat(g.paddingLeft)) * b.x, w = $.top + (x.clientTop + parseFloat(g.paddingTop)) * b.y;
      l *= b.x, u *= b.y, c *= b.x, d *= b.y, l += _, u += w, h = sn(x), x = ps(h);
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
  return t ? t.left + n : Ko(Jn(e)).left + n;
}
function ef(e, t, n) {
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
  const i = o === "fixed", a = Jn(r), s = t ? Ca(t.floating) : !1;
  if (r === a || s && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Vn(1);
  const c = Vn(0), d = zn(r);
  if ((d || !d && !i) && ((ho(r) !== "body" || ai(a)) && (l = _a(r)), zn(r))) {
    const p = Ko(r);
    u = Gr(r), c.x = p.x + r.clientLeft, c.y = p.y + r.clientTop;
  }
  const v = a && !d && !i ? ef(a, l, !0) : Vn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + v.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + v.y
  };
}
function B2(e) {
  return Array.from(e.getClientRects());
}
function Z2(e) {
  const t = Jn(e), n = _a(e), r = e.ownerDocument.body, o = Fr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Fr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + Qs(e);
  const s = -n.scrollTop;
  return kn(r).direction === "rtl" && (a += Fr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: a,
    y: s
  };
}
function Y2(e, t) {
  const n = sn(e), r = Jn(e), o = n.visualViewport;
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
function j2(e, t) {
  const n = Ko(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = zn(e) ? Gr(e) : Vn(1), a = e.clientWidth * i.x, s = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
  return {
    width: a,
    height: s,
    x: l,
    y: u
  };
}
function fu(e, t, n) {
  let r;
  if (t === "viewport")
    r = Y2(e, n);
  else if (t === "document")
    r = Z2(Jn(e));
  else if (_n(t))
    r = j2(t, n);
  else {
    const o = Qd(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return ta(r);
}
function tf(e, t) {
  const n = gr(e);
  return n === t || !_n(n) || lo(n) ? !1 : kn(n).position === "fixed" || tf(n, t);
}
function W2(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Gd(e, []).filter((s) => _n(s) && ho(s) !== "body"), o = null;
  const i = kn(e).position === "fixed";
  let a = i ? gr(e) : e;
  for (; _n(a) && !lo(a); ) {
    const s = kn(a), l = Us(a);
    !l && s.position === "fixed" && (o = null), (i ? !l && !o : !l && s.position === "static" && o && ["absolute", "fixed"].includes(o.position) || ai(a) && !l && tf(e, a)) ? r = r.filter((u) => u !== a) : o = s, a = gr(a);
  }
  return t.set(e, r), r;
}
function K2(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? Ca(t) ? [] : W2(t, this._c) : [].concat(n), r], a = i[0], s = i.reduce((l, u) => {
    const c = fu(t, u, o);
    return l.top = Fr(c.top, l.top), l.right = Wo(c.right, l.right), l.bottom = Wo(c.bottom, l.bottom), l.left = Fr(c.left, l.left), l;
  }, fu(t, a, o));
  return {
    width: s.right - s.left,
    height: s.bottom - s.top,
    x: s.left,
    y: s.top
  };
}
function X2(e) {
  const {
    width: t,
    height: n
  } = Ud(e);
  return {
    width: t,
    height: n
  };
}
function F2(e, t, n) {
  const r = zn(t), o = Jn(t), i = n === "fixed", a = Ko(e, !0, i, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Vn(0);
  function u() {
    l.x = Qs(o);
  }
  if (r || !r && !i)
    if ((ho(t) !== "body" || ai(o)) && (s = _a(t)), r) {
      const p = Ko(t, !0, i, t);
      l.x = p.x + t.clientLeft, l.y = p.y + t.clientTop;
    } else o && u();
  i && !r && o && u();
  const c = o && !r && !i ? ef(o, s) : Vn(0), d = a.left + s.scrollLeft - l.x - c.x, v = a.top + s.scrollTop - l.y - c.y;
  return {
    x: d,
    y: v,
    width: a.width,
    height: a.height
  };
}
function Ba(e) {
  return kn(e).position === "static";
}
function vu(e, t) {
  if (!zn(e) || kn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Jn(e) === n && (n = n.ownerDocument.body), n;
}
function nf(e, t) {
  const n = sn(e);
  if (Ca(e))
    return n;
  if (!zn(e)) {
    let o = gr(e);
    for (; o && !lo(o); ) {
      if (_n(o) && !Ba(o))
        return o;
      o = gr(o);
    }
    return n;
  }
  let r = vu(e, t);
  for (; r && A2(r) && Ba(r); )
    r = vu(r, t);
  return r && lo(r) && Ba(r) && !Us(r) ? n : r || z2(e) || n;
}
const G2 = async function(e) {
  const t = this.getOffsetParent || nf, n = this.getDimensions, r = await n(e.floating);
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
  getDocumentElement: Jn,
  getClippingRect: K2,
  getOffsetParent: nf,
  getElementRects: G2,
  getClientRects: B2,
  getDimensions: X2,
  getScale: Gr,
  isElement: _n,
  isRTL: U2
}, Q2 = D2, ey = L2, ty = H2, ny = V2, ry = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: J2,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return T2(e, t, {
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
        const { x: k, y: O } = w.arrow, E = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[_.split("-")[0]];
        Object.assign(c.style, {
          zIndex: -1,
          left: k != null ? `${k}px` : "",
          top: O != null ? `${O}px` : "",
          right: "",
          bottom: "",
          [E]: "2px"
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
  var u = iy(), c = W(u), d = W(c);
  Mr(d, n), Y(c), An(c, (h) => i = h, () => i);
  var v = R(c, 2), p = W(v);
  return Mr(p, r), Y(v), An(v, (h) => a = h, () => a), Y(u), A(e, u), me({
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
function rt(e, t) {
  he(t, !0);
  const n = y(t, "children", 7), r = y(t, "level", 7, 1), o = y(t, "mt", 7), i = y(t, "mb", 7);
  var a = ut(), s = Ce(a);
  return Kv(s, () => `h${r()}`, !1, (l, u) => {
    let c;
    Oe(() => c = ln(l, c, {
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var d = ut(), v = Ce(d);
    Mr(v, () => n() ?? Ot), A(u, d);
  }), A(e, a), me({
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
pe(rt, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var ay = /* @__PURE__ */ Ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const sy = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function ka(e, t) {
  he(t, !0), it(e, sy);
  const n = /* @__PURE__ */ Nt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  Qe(e, mt(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = ay();
      A(r, i);
    },
    $$slots: { default: !0 }
  })), me();
}
pe(ka, {}, [], [], !0);
const ly = () => {
  const e = et();
  return {
    deleteNode: (t) => {
      e.nodes.update((n) => n.filter((r) => r.id !== t)), e.edges.update(
        (n) => n.filter((r) => r.source !== t && r.target !== t)
      );
    }
  };
}, Nr = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, uy = () => {
  const { nodes: e, nodeLookup: t } = et();
  return {
    copyNode: (n) => {
      var r;
      const o = (r = U(t).get(n)) == null ? void 0 : r.internals.userNode;
      if (o) {
        const i = Nr(), a = {
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
function Tt() {
  return Pr("svelteflow__node_id");
}
var cy = /* @__PURE__ */ Ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), dy = /* @__PURE__ */ Ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), fy = /* @__PURE__ */ Ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), vy = /* @__PURE__ */ ie('<div class="input-item svelte-1jesvb7">执行条件： <!></div>'), py = (e, t, n) => {
  const r = e.target.checked;
  t(n, { async: r });
}, gy = (e, t, n) => {
  const r = e.target.checked;
  t(n, { loopEnable: r });
}, hy = /* @__PURE__ */ ie('<div class="input-item svelte-1jesvb7">循环间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-1jesvb7">最大循环次数（0 表示不限制）： <!></div> <div class="input-item svelte-1jesvb7">退出条件： <!></div>', 1), my = /* @__PURE__ */ ie('<div class="settings svelte-1jesvb7"><div class="input-item svelte-1jesvb7">节点名称： <!></div> <div class="input-item svelte-1jesvb7">参数描述： <!></div> <!> <label class="input-item-inline svelte-1jesvb7"><span>异步执行：</span> <input type="checkbox"></label> <label class="input-item-inline svelte-1jesvb7"><span>循环执行：</span> <input type="checkbox"></label> <!></div>'), yy = /* @__PURE__ */ Ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), wy = /* @__PURE__ */ ie('<div class="tf-node-toolbar svelte-1jesvb7"><!> <!> <!> <!></div>'), by = /* @__PURE__ */ ie('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const xy = {
  hash: "svelte-1jesvb7",
  code: ".tf-node-toolbar.svelte-1jesvb7 {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-1jesvb7 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-1jesvb7 .input-item:where(.svelte-1jesvb7) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}.settings.svelte-1jesvb7 .input-item-inline:where(.svelte-1jesvb7) {display:flex;align-items:center;font-size:12px;color:#666;}"
};
function Pn(e, t) {
  he(t, !0), it(e, xy);
  const n = y(t, "data", 7), r = y(t, "id", 7, ""), o = y(t, "icon", 7), i = y(t, "handle", 7), a = y(t, "children", 7), s = y(t, "allowExecute", 7, !0), l = y(t, "allowCopy", 7, !0), u = y(t, "allowDelete", 7, !0), c = y(t, "allowSetting", 7, !0), d = y(t, "allowSettingOfCondition", 7, !0), v = y(t, "showSourceHandle", 7, !0), p = y(t, "showTargetHandle", 7, !0), h = y(t, "onCollapse", 7);
  let x = n().expand ? ["key"] : [];
  const { updateNodeData: b, getNode: $ } = tn(), g = /* @__PURE__ */ He(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: a()
    }
  ]), { deleteNode: _ } = ly(), { copyNode: w } = uy(), k = hr(), O = () => {
    var M;
    (M = k.onNodeExecute) == null || M.call(k, $(r()));
  };
  let E = Tt();
  var N = by(), H = Ce(N);
  {
    var I = (M) => {
      Rd(M, {
        get position() {
          return qe.Top;
        },
        align: "end",
        children: (z, j) => {
          var K = wy(), te = W(K);
          {
            var G = (xe) => {
              Qe(xe, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  _(r());
                },
                children: (Ne, de) => {
                  var Q = cy();
                  A(Ne, Q);
                },
                $$slots: { default: !0 }
              });
            };
            $e(te, (xe) => {
              u() && xe(G);
            });
          }
          var X = R(te, 2);
          {
            var ye = (xe) => {
              Qe(xe, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  w(r());
                },
                children: (Ne, de) => {
                  var Q = dy();
                  A(Ne, Q);
                },
                $$slots: { default: !0 }
              });
            };
            $e(X, (xe) => {
              l() && xe(ye);
            });
          }
          var ae = R(X, 2);
          {
            var ge = (xe) => {
              Qe(xe, {
                class: "tf-node-toolbar-item",
                onclick: O,
                children: (Ne, de) => {
                  var Q = fy();
                  A(Ne, Q);
                },
                $$slots: { default: !0 }
              });
            };
            $e(ae, (xe) => {
              s() && xe(ge);
            });
          }
          var ue = R(ae, 2);
          {
            var Ee = (xe) => {
              mo(xe, {
                placement: "bottom",
                floating: (Ne) => {
                  var de = my(), Q = W(de), Pe = R(W(Q));
                  Pt(Pe, {
                    style: "width: 100%;",
                    onchange: (J) => {
                      const Ae = J.target.value;
                      b(E, { title: Ae });
                    },
                    get value() {
                      return n().title;
                    }
                  }), Y(Q);
                  var F = R(Q, 2), _e = R(W(F));
                  $t(_e, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (J) => {
                      const Ae = J.target.value;
                      b(E, { description: Ae });
                    },
                    get value() {
                      return n().description;
                    }
                  }), Y(F);
                  var De = R(F, 2);
                  {
                    var Le = (J) => {
                      var Ae = vy(), se = R(W(Ae));
                      $t(se, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (kt) => {
                          const Et = kt.target.value;
                          b(E, { condition: Et });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), Y(Ae), A(J, Ae);
                    };
                    $e(De, (J) => {
                      d() && J(Le);
                    });
                  }
                  var ce = R(De, 2), fe = R(W(ce), 2);
                  Kn(fe), fe.__change = [py, b, E], Y(ce);
                  var ve = R(ce, 2), Se = R(W(ve), 2);
                  Kn(Se), Se.__change = [gy, b, E], Y(ve);
                  var at = R(ve, 2);
                  {
                    var ct = (J) => {
                      var Ae = hy(), se = Ce(Ae), kt = R(W(se));
                      const Et = /* @__PURE__ */ He(() => n().loopIntervalMs || "1000");
                      $t(kt, {
                        rows: 1,
                        style: "width: 100%;",
                        onchange: (Je) => {
                          const Ct = Je.target.value;
                          b(E, { loopIntervalMs: Ct });
                        },
                        get value() {
                          return f(Et);
                        }
                      }), Y(se);
                      var Dt = R(se, 2), ze = R(W(Dt));
                      const ot = /* @__PURE__ */ He(() => n().maxLoopCount || "0");
                      $t(ze, {
                        rows: 1,
                        style: "width: 100%;",
                        onchange: (Je) => {
                          const Ct = Je.target.value;
                          b(E, { maxLoopCount: Ct });
                        },
                        get value() {
                          return f(ot);
                        }
                      }), Y(Dt);
                      var Ye = R(Dt, 2), je = R(W(Ye));
                      $t(je, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (Je) => {
                          const Ct = Je.target.value;
                          b(E, { loopBreakCondition: Ct });
                        },
                        get value() {
                          return n().loopBreakCondition;
                        }
                      }), Y(Ye), A(J, Ae);
                    };
                    $e(at, (J) => {
                      n().loopEnable && J(ct);
                    });
                  }
                  Y(de), Oe(() => {
                    hl(fe, !!n().async), hl(Se, !!n().loopEnable);
                  }), A(Ne, de);
                },
                children: (Ne, de) => {
                  Qe(Ne, {
                    class: "tf-node-toolbar-item",
                    children: (Q, Pe) => {
                      var F = yy();
                      A(Q, F);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { floating: !0, default: !0 }
              });
            };
            $e(ue, (xe) => {
              c() && xe(Ee);
            });
          }
          Y(K), A(z, K);
        },
        $$slots: { default: !0 }
      });
    };
    $e(H, (M) => {
      (s() || l() || u()) && M(I);
    });
  }
  var q = R(H, 2), D = R(W(q), 2), B = W(D);
  Yd(B, {
    get items() {
      return f(g);
    },
    activeKeys: x,
    onChange: (M, z) => {
      var j;
      b(r(), { expand: z == null ? void 0 : z.includes("key") }), (j = h()) == null || j(z != null && z.includes("key") ? "key" : "");
    }
  }), Y(D), Y(q);
  var S = R(q, 2);
  {
    var C = (M) => {
      pr(M, {
        type: "target",
        get position() {
          return qe.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    $e(S, (M) => {
      p() && M(C);
    });
  }
  var P = R(S, 2);
  {
    var V = (M) => {
      pr(M, {
        type: "source",
        get position() {
          return qe.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    $e(P, (M) => {
      v() && M(V);
    });
  }
  var T = R(P, 2);
  return Mr(T, () => i() ?? Ot), A(e, N), me({
    get data() {
      return n();
    },
    set data(M) {
      n(M), m();
    },
    get id() {
      return r();
    },
    set id(M = "") {
      r(M), m();
    },
    get icon() {
      return o();
    },
    set icon(M) {
      o(M), m();
    },
    get handle() {
      return i();
    },
    set handle(M) {
      i(M), m();
    },
    get children() {
      return a();
    },
    set children(M) {
      a(M), m();
    },
    get allowExecute() {
      return s();
    },
    set allowExecute(M = !0) {
      s(M), m();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(M = !0) {
      l(M), m();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete(M = !0) {
      u(M), m();
    },
    get allowSetting() {
      return c();
    },
    set allowSetting(M = !0) {
      c(M), m();
    },
    get allowSettingOfCondition() {
      return d();
    },
    set allowSettingOfCondition(M = !0) {
      d(M), m();
    },
    get showSourceHandle() {
      return v();
    },
    set showSourceHandle(M = !0) {
      v(M), m();
    },
    get showTargetHandle() {
      return p();
    },
    set showTargetHandle(M = !0) {
      p(M), m();
    },
    get onCollapse() {
      return h();
    },
    set onCollapse(M) {
      h(M), m();
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
const rf = [
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
], $y = [
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
var Cy = /* @__PURE__ */ ie('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), _y = /* @__PURE__ */ Ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), ky = /* @__PURE__ */ ie('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const Ey = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function of(e, t) {
  he(t, !0), it(e, Ey);
  const [n, r] = vt(), o = () => oe(f(l), "$node", n), i = y(t, "parameter", 7), a = y(t, "index", 7);
  let s = Tt(), l = /* @__PURE__ */ He(() => Ar(s)), u = /* @__PURE__ */ He(() => {
    var H, I;
    return {
      ...i(),
      ...(I = (H = o()) == null ? void 0 : H.data) == null ? void 0 : I.parameters[a()]
    };
  });
  const { updateNodeData: c } = tn(), d = (H, I) => {
    c(s, (q) => {
      let D = q.data.parameters;
      return D[a()][H] = I, { parameters: D };
    });
  }, v = (H) => {
    const I = H.target.value;
    d("name", I);
  }, p = (H) => {
    const I = H.target.checked;
    d("required", I);
  }, h = (H) => {
    const I = H.value;
    I && d("dataType", I);
  };
  let x;
  const b = () => {
    c(s, (H) => {
      let I = H.data.parameters;
      return I.splice(a(), 1), { parameters: [...I] };
    }), x == null || x.hide();
  };
  var $ = ky(), g = Ce($), _ = W(g);
  Pt(_, {
    style: "width: 100%;",
    get value() {
      return f(u).name;
    },
    placeholder: "请输入参数名称",
    oninput: v
  }), Y(g);
  var w = R(g, 2), k = W(w);
  qd(k, {
    get checked() {
      return f(u).required;
    },
    onchange: p
  }), Y(w);
  var O = R(w, 2), E = W(O);
  An(
    mo(E, {
      placement: "bottom",
      floating: (H) => {
        var I = Cy(), q = W(I), D = R(W(q));
        const B = /* @__PURE__ */ He(() => f(u).dataType ? [f(u).dataType] : ["String"]);
        hn(D, {
          items: rf,
          style: "width: 100%",
          onSelect: h,
          get value() {
            return f(B);
          }
        }), Y(q);
        var S = R(q, 2), C = R(W(S));
        $t(C, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return f(u).defaultValue;
          },
          onchange: (z) => {
            const j = z.target.value;
            d("defaultValue", j);
          }
        }), Y(S);
        var P = R(S, 2), V = R(W(P));
        $t(V, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return f(u).description;
          },
          onchange: (z) => {
            const j = z.target.value;
            d("description", j);
          }
        }), Y(P);
        var T = R(P, 2), M = W(T);
        Qe(M, {
          onclick: b,
          children: (z, j) => {
            Re();
            var K = We("删除");
            A(z, K);
          },
          $$slots: { default: !0 }
        }), Y(T), Y(I), A(H, I);
      },
      children: (H, I) => {
        Qe(H, {
          class: "input-btn-more",
          children: (q, D) => {
            var B = _y();
            A(q, B);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (H) => x = H,
    () => x
  ), Y(O), A(e, $);
  var N = me({
    get parameter() {
      return i();
    },
    set parameter(H) {
      i(H), m();
    },
    get index() {
      return a();
    },
    set index(H) {
      a(H), m();
    }
  });
  return r(), N;
}
pe(of, { parameter: {}, index: {} }, [], [], !0);
var Sy = /* @__PURE__ */ ie('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), Py = /* @__PURE__ */ ie('<div class="none-params svelte-3n0wca">无输入参数</div>'), My = /* @__PURE__ */ ie('<div class="input-container svelte-3n0wca"><!> <!></div>');
const Oy = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function af(e, t) {
  he(t, !0), it(e, Oy);
  const [n, r] = vt(), o = () => oe(f(a), "$node", n);
  let i = Tt(), a = /* @__PURE__ */ He(() => Ar(i)), s = /* @__PURE__ */ He(() => {
    var v, p;
    return [...((p = (v = o()) == null ? void 0 : v.data) == null ? void 0 : p.parameters) || []];
  });
  var l = My(), u = W(l);
  {
    var c = (v) => {
      var p = Sy();
      Re(4), A(v, p);
    };
    $e(u, (v) => {
      f(s).length !== 0 && v(c);
    });
  }
  var d = R(u, 2);
  Wt(
    d,
    19,
    () => f(s),
    (v) => v.id,
    (v, p, h) => {
      of(v, {
        get parameter() {
          return f(p);
        },
        get index() {
          return f(h);
        }
      });
    },
    (v) => {
      var p = Py();
      A(v, p);
    }
  ), Y(l), A(e, l), me(), r();
}
pe(af, {}, [], [], !0);
const na = (e) => (!e || e.length == 0 || e.forEach((t) => {
  t.id || (t.id = Nr()), na(t.children);
}), e), qn = () => {
  const { updateNodeData: e } = tn();
  return {
    addParameter: (t, n = "parameters", r) => {
      na(r == null ? void 0 : r.children);
      const o = {
        name: "",
        dataType: "String",
        refType: "ref",
        ...r,
        id: Nr()
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
var Ty = /* @__PURE__ */ Ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), Vy = /* @__PURE__ */ Ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Hy = /* @__PURE__ */ ie('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const Ny = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function sf(e, t) {
  he(t, !0), it(e, Ny);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Nt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Tt(), { addParameter: i } = qn();
  return Pn(e, mt(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    allowSettingOfCondition: !1,
    icon: (a) => {
      var s = Ty();
      A(a, s);
    },
    children: (a, s) => {
      var l = Hy(), u = Ce(l), c = W(u);
      rt(c, {
        level: 3,
        children: (p, h) => {
          Re();
          var x = We("输入参数");
          A(p, x);
        },
        $$slots: { default: !0 }
      });
      var d = R(c, 2);
      Qe(d, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o, "parameters", { refType: "input" });
        },
        children: (p, h) => {
          var x = Vy();
          A(p, x);
        },
        $$slots: { default: !0 }
      }), Y(u);
      var v = R(u, 2);
      af(v, {}), A(a, l);
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
pe(sf, { data: {} }, [], [], !0);
const lf = (e, t, n) => {
  for (const r of n)
    r.target === t && r.source && (e.push(r.source), lf(e, r.source, n));
}, uf = (e, t, n) => !e || e.length === 0 ? [] : e.map((r) => ({
  label: r.name + (n ? ` (Array<${r.dataType || "String"}>)` : ` (${r.dataType || "String"})`),
  value: t + "." + r.name,
  children: uf(r.children, t + "." + r.name, n)
})), pu = (e, t, n) => {
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
            value: e.id + ".loopItem"
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
          children: uf(r, e.id, t)
        };
    }
  }
}, Dy = (e = !1) => {
  const t = Tt(), n = Ar(t), { nodes: r, edges: o, nodeLookup: i } = et();
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
            const h = pu(v, p, c);
            h && d.push(h);
          }
        }
      else {
        const v = [];
        lf(v, t, l);
        for (const p of s)
          if (v.includes(p.id)) {
            const h = p.parentId === a.id, x = pu(p, h, c);
            x && d.push(x);
          }
      }
      return d;
    }
  );
};
var Ly = /* @__PURE__ */ ie('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), Ay = /* @__PURE__ */ ie('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const zy = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function cf(e, t) {
  he(t, !0), it(e, zy);
  const [n, r] = vt(), o = () => oe(f(d), "$node", n), i = () => oe(w, "$selectItems", n);
  mn(() => {
    f(v).refType || $({ value: "ref" });
  });
  const a = y(t, "parameter", 7), s = y(t, "index", 7), l = y(t, "dataKeyName", 7), u = y(t, "useChildrenOnly", 7);
  let c = Tt(), d = /* @__PURE__ */ He(() => Ar(c)), v = /* @__PURE__ */ He(() => {
    var P;
    return {
      ...a(),
      ...(P = o()) == null ? void 0 : P.data[l()][s()]
    };
  });
  const { updateNodeData: p } = tn(), h = (P, V) => {
    p(c, (T) => {
      let M = T.data[l()];
      return M[s()] = { ...M[s()], [P]: V }, { [l()]: M };
    });
  }, x = (P, V) => {
    const T = V.target.value;
    h(P, T);
  }, b = (P) => {
    const V = P.value;
    h("ref", V);
  }, $ = (P) => {
    const V = P.value;
    h("refType", V);
  };
  let g;
  const _ = () => {
    p(c, (P) => {
      let V = P.data[l()];
      return V.splice(s(), 1), { [l()]: [...V] };
    }), g == null || g.hide();
  }, w = Dy(u());
  var k = Ay(), O = Ce(k), E = W(O);
  const N = /* @__PURE__ */ He(() => f(v).nameDisabled === !0);
  Pt(E, {
    style: "width: 100%;",
    get value() {
      return f(v).name;
    },
    placeholder: "请输入参数名称",
    get disabled() {
      return f(N);
    },
    oninput: (P) => x("name", P)
  }), Y(O);
  var H = R(O, 2), I = W(H);
  {
    var q = (P) => {
      Pt(P, {
        get value() {
          return f(v).value;
        },
        placeholder: "请输入参数值",
        oninput: (V) => x("value", V)
      });
    }, D = (P, V) => {
      {
        var T = (M) => {
          const z = /* @__PURE__ */ He(() => [f(v).ref]);
          hn(M, {
            get items() {
              return i();
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return f(z);
            },
            expandAll: !0,
            onSelect: b
          });
        };
        $e(
          P,
          (M) => {
            f(v).refType !== "input" && M(T);
          },
          V
        );
      }
    };
    $e(I, (P) => {
      f(v).refType === "fixed" ? P(q) : P(D, !1);
    });
  }
  Y(H);
  var B = R(H, 2), S = W(B);
  An(
    mo(S, {
      placement: "bottom",
      floating: (P) => {
        var V = Ly(), T = W(V), M = R(W(T));
        const z = /* @__PURE__ */ He(() => f(v).refType ? [f(v).refType] : []);
        hn(M, {
          items: $y,
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return f(z);
          },
          onSelect: $
        }), Y(T);
        var j = R(T, 2), K = R(W(j));
        $t(K, {
          rows: 1,
          style: "width: 100%;",
          onchange: (ae) => {
            x("defaultValue", ae);
          },
          get value() {
            return f(v).defaultValue;
          }
        }), Y(j);
        var te = R(j, 2), G = R(W(te));
        $t(G, {
          rows: 3,
          style: "width: 100%;",
          onchange: (ae) => {
            x("description", ae);
          },
          get value() {
            return f(v).description;
          }
        }), Y(te);
        var X = R(te, 2), ye = W(X);
        Qe(ye, {
          onclick: _,
          children: (ae, ge) => {
            Re();
            var ue = We("删除");
            A(ae, ue);
          },
          $$slots: { default: !0 }
        }), Y(X), Y(V), A(P, V);
      },
      children: (P, V) => {
        ka(P, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (P) => g = P,
    () => g
  ), Y(B), A(e, k);
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
  cf,
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
var Iy = /* @__PURE__ */ ie('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), Ry = /* @__PURE__ */ ie('<div class="none-params svelte-1sm1mgi"> </div>'), qy = /* @__PURE__ */ ie('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const By = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Qt(e, t) {
  he(t, !0), it(e, By);
  const [n, r] = vt(), o = () => oe(f(u), "$node", n), i = y(t, "noneParameterText", 7, "无输入参数"), a = y(t, "dataKeyName", 7, "parameters"), s = y(t, "useChildrenOnly", 7);
  let l = Tt(), u = /* @__PURE__ */ He(() => Ar(l)), c = /* @__PURE__ */ He(() => {
    var b;
    return [...((b = o()) == null ? void 0 : b.data[a()]) || []];
  });
  var d = qy(), v = W(d);
  {
    var p = (b) => {
      var $ = Iy();
      Re(4), A(b, $);
    };
    $e(v, (b) => {
      f(c).length !== 0 && b(p);
    });
  }
  var h = R(v, 2);
  Wt(
    h,
    19,
    () => f(c),
    (b) => b.id,
    (b, $, g) => {
      cf(b, {
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
      var $ = Ry(), g = W($, !0);
      Y($), Oe(() => bt(g, i())), A(b, $);
    }
  ), Y(d), A(e, d);
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
  Qt,
  {
    noneParameterText: {},
    dataKeyName: {},
    useChildrenOnly: {}
  },
  [],
  [],
  !0
);
var Zy = /* @__PURE__ */ Ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), Yy = /* @__PURE__ */ Ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), jy = /* @__PURE__ */ ie('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const Wy = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function df(e, t) {
  he(t, !0), it(e, Wy);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Nt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Tt(), { addParameter: i } = qn();
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
        var s = Zy();
        A(a, s);
      },
      children: (a, s) => {
        var l = jy(), u = Ce(l), c = W(u);
        rt(c, {
          level: 3,
          children: (p, h) => {
            Re();
            var x = We("输出参数");
            A(p, x);
          },
          $$slots: { default: !0 }
        });
        var d = R(c, 2);
        Qe(d, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (p, h) => {
            var x = Yy();
            A(p, x);
          },
          $$slots: { default: !0 }
        }), Y(u);
        var v = R(u, 2);
        Qt(v, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs"
        }), A(a, l);
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
pe(df, { data: {} }, [], [], !0);
const Za = (e) => JSON.parse(JSON.stringify(e));
var Ky = /* @__PURE__ */ Ve('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), Xy = /* @__PURE__ */ ie('<div class="input-more-item svelte-1cfeest"><!></div>'), Fy = /* @__PURE__ */ ie('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), Gy = /* @__PURE__ */ ie('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const Uy = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function ff(e, t) {
  he(t, !0), it(e, Uy);
  const [n, r] = vt(), o = () => oe(f(u), "$node", n), i = y(t, "parameter", 7), a = y(t, "position", 7), s = y(t, "dataKeyName", 7);
  let l = Tt(), u = /* @__PURE__ */ He(() => Ar(l)), c = /* @__PURE__ */ He(() => {
    var V;
    let T = (V = o()) == null ? void 0 : V.data[s()], M;
    if (T && a().length > 0) {
      let z = T;
      for (let j = 0; j < a().length; j++) {
        const K = a()[j];
        j == a().length - 1 ? M = z[K] : z = z[K].children;
      }
    }
    return { ...i(), ...M };
  });
  const { updateNodeData: d } = tn(), v = (V, T) => {
    d(l, (M) => {
      const z = M.data[s()];
      if (z && a().length > 0) {
        let j = z;
        for (let K = 0; K < a().length; K++) {
          const te = a()[K];
          K == a().length - 1 ? j[te] = { ...j[te], [V]: T } : j = j[te].children;
        }
      }
      return {
        [s()]: [...Za(z)]
      };
    });
  }, p = (V, T) => {
    const M = T.target.value;
    v(V, M);
  }, h = (V) => {
    const T = V.value;
    v("dataType", T);
  };
  let x;
  const b = () => {
    d(l, (V) => {
      let T = V.data[s()];
      if (T && a().length > 0) {
        let M = T;
        for (let z = 0; z < a().length; z++) {
          const j = a()[z];
          z == a().length - 1 ? M.splice(j, 1) : M = M[j].children;
        }
      }
      return {
        [s()]: [...Za(T)]
      };
    }), x == null || x.hide();
  }, $ = () => {
    d(l, (V) => {
      let T = V.data[s()];
      if (T && a().length > 0) {
        let M = T;
        for (let z = 0; z < a().length; z++) {
          const j = a()[z];
          z == a().length - 1 ? M[j].children ? M[j].children.push({
            id: Nr(),
            name: "newParam",
            dataType: "String"
          }) : M[j].children = [
            {
              id: Nr(),
              name: "newParam",
              dataType: "String"
            }
          ] : M = M[j].children;
        }
      }
      return {
        [s()]: [...Za(T)]
      };
    });
  };
  var g = Gy(), _ = Ce(g), w = W(_);
  {
    var k = (V) => {
      var T = ut(), M = Ce(T);
      Wt(M, 17, a, to, (z, j) => {
        Re();
        var K = We(" ");
        A(z, K);
      }), A(V, T);
    };
    $e(w, (V) => {
      a().length > 1 && V(k);
    });
  }
  var O = R(w, 2);
  const E = /* @__PURE__ */ He(() => f(c).nameDisabled === !0);
  Pt(O, {
    style: "width: 100%;",
    get value() {
      return f(c).name;
    },
    placeholder: "请输入参数名称",
    oninput: (V) => {
      p("name", V);
    },
    get disabled() {
      return f(E);
    }
  }), Y(_);
  var N = R(_, 2), H = W(N);
  const I = /* @__PURE__ */ He(() => f(c).dataType ? [f(c).dataType] : []), q = /* @__PURE__ */ He(() => f(c).dataTypeDisabled === !0);
  hn(H, {
    items: rf,
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return f(I);
    },
    get disabled() {
      return f(q);
    },
    onSelect: h
  });
  var D = R(H, 2);
  {
    var B = (V) => {
      Qe(V, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: $,
        children: (T, M) => {
          var z = Ky();
          A(T, z);
        },
        $$slots: { default: !0 }
      });
    };
    $e(D, (V) => {
      (f(c).dataType === "Object" || f(c).dataType === "Array") && f(c).addChildDisabled !== !0 && V(B);
    });
  }
  Y(N);
  var S = R(N, 2), C = W(S);
  An(
    mo(C, {
      placement: "bottom",
      floating: (V) => {
        var T = Fy(), M = W(T), z = R(W(M));
        const j = /* @__PURE__ */ He(() => f(c).defaultValue || "");
        $t(z, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return f(j);
          },
          onchange: (ae) => {
            p("defaultValue", ae);
          }
        }), Y(M);
        var K = R(M, 2), te = R(W(K));
        const G = /* @__PURE__ */ He(() => f(c).description || "");
        $t(te, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return f(G);
          },
          onchange: (ae) => {
            p("description", ae);
          }
        }), Y(K);
        var X = R(K, 2);
        {
          var ye = (ae) => {
            var ge = Xy(), ue = W(ge);
            Qe(ue, {
              onclick: b,
              children: (Ee, xe) => {
                Re();
                var Ne = We("删除");
                A(Ee, Ne);
              },
              $$slots: { default: !0 }
            }), Y(ge), A(ae, ge);
          };
          $e(X, (ae) => {
            f(c).deleteDisabled !== !0 && ae(ye);
          });
        }
        Y(T), A(V, T);
      },
      children: (V, T) => {
        ka(V, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (V) => x = V,
    () => x
  ), Y(S), A(e, g);
  var P = me({
    get parameter() {
      return i();
    },
    set parameter(V) {
      i(V), m();
    },
    get position() {
      return a();
    },
    set position(V) {
      a(V), m();
    },
    get dataKeyName() {
      return s();
    },
    set dataKeyName(V) {
      s(V), m();
    }
  });
  return r(), P;
}
pe(ff, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0);
var Jy = /* @__PURE__ */ ie("<!> <!>", 1), Qy = /* @__PURE__ */ ie('<div class="none-params svelte-1sm1mgi"> </div>'), ew = /* @__PURE__ */ ie('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), tw = /* @__PURE__ */ ie('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const nw = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function wr(e, t) {
  he(t, !0), it(e, nw);
  const [n, r] = vt(), o = () => oe(f(u), "$node", n), i = (b, $ = Ot, g = Ot) => {
    var _ = ut(), w = Ce(_);
    Wt(
      w,
      19,
      $,
      (k) => `${k.id}_${k.children ? k.children.length : 0}`,
      (k, O, E) => {
        var N = Jy(), H = Ce(N);
        const I = /* @__PURE__ */ He(() => [...g(), f(E)]);
        ff(H, {
          get parameter() {
            return f(O);
          },
          get position() {
            return f(I);
          },
          get dataKeyName() {
            return s();
          }
        });
        var q = R(H, 2);
        {
          var D = (B) => {
            var S = /* @__PURE__ */ ke(() => [...g(), f(E)]);
            i(B, () => f(O).children, () => f(S));
          };
          $e(q, (B) => {
            f(O).children && B(D);
          });
        }
        A(k, N);
      },
      (k) => {
        var O = ut(), E = Ce(O);
        {
          var N = (H) => {
            var I = Qy(), q = W(I, !0);
            Y(I), Oe(() => bt(q, a())), A(H, I);
          };
          $e(E, (H) => {
            g().length === 0 && H(N);
          });
        }
        A(k, O);
      }
    ), A(b, _);
  }, a = y(t, "noneParameterText", 7, "无输出参数"), s = y(t, "dataKeyName", 7, "outputDefs");
  let l = Tt(), u = /* @__PURE__ */ He(() => Ar(l)), c = /* @__PURE__ */ He(() => {
    var b;
    return [...((b = o()) == null ? void 0 : b.data[s()]) || []];
  });
  var d = tw(), v = W(d);
  {
    var p = (b) => {
      var $ = ew();
      Re(4), A(b, $);
    };
    $e(v, (b) => {
      f(c).length !== 0 && b(p);
    });
  }
  var h = R(v, 2);
  i(h, () => f(c) || [], () => []), Y(d), A(e, d);
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
var rw = /* @__PURE__ */ Ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), ow = /* @__PURE__ */ Ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), iw = (e, t, n) => t(n, { temperature: parseFloat(e.target.value) }), aw = (e, t, n) => t(n, { topP: parseFloat(e.target.value) }), sw = (e, t, n) => t(n, { topK: parseInt(e.target.value) }), lw = /* @__PURE__ */ Ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), uw = /* @__PURE__ */ ie('<div class="heading svelte-q0cqsa"><!> <!></div> <!> <!> <div class="setting-title svelte-q0cqsa">模型</div> <div class="setting-item svelte-q0cqsa"><!> <!></div> <div class="setting-title svelte-q0cqsa">采样参数</div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="100" step="1"></div></div> <div class="setting-title svelte-q0cqsa">系统提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="setting-title svelte-q0cqsa">用户提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="heading svelte-q0cqsa"><!> <!> <!></div> <!>', 1);
const cw = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function vf(e, t) {
  he(t, !0), it(e, cw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Nt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Tt(), { addParameter: i } = qn(), a = hr();
  let s = /* @__PURE__ */ Zt(bn([]));
  mn(async () => {
    var c, d;
    const v = await ((d = (c = a.provider) == null ? void 0 : c.llm) == null ? void 0 : d.call(c));
    f(s).push(...v || []);
  });
  const { updateNodeData: l } = tn(), u = (c) => {
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
        var d = rw();
        A(c, d);
      },
      children: (c, d) => {
        var v = uw(), p = Ce(v), h = W(p);
        rt(h, {
          level: 3,
          children: (Q, Pe) => {
            Re();
            var F = We("输入参数");
            A(Q, F);
          },
          $$slots: { default: !0 }
        });
        var x = R(h, 2);
        Qe(x, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (Q, Pe) => {
            var F = ow();
            A(Q, F);
          },
          $$slots: { default: !0 }
        }), Y(p);
        var b = R(p, 2);
        Qt(b, {});
        var $ = R(b, 2);
        rt($, {
          level: 3,
          mt: "10px",
          children: (Q, Pe) => {
            Re();
            var F = We("模型设置");
            A(Q, F);
          },
          $$slots: { default: !0 }
        });
        var g = R($, 4), _ = W(g);
        const w = /* @__PURE__ */ He(() => n().llmId ? [n().llmId] : []);
        hn(_, {
          get items() {
            return f(s);
          },
          style: "width: 100%",
          placeholder: "请选择模型",
          onSelect: (Q) => {
            const Pe = Q.value;
            l(o, () => ({ llmId: Pe }));
          },
          get value() {
            return f(w);
          }
        });
        var k = R(_, 2);
        ka(k, {}), Y(g);
        var O = R(g, 4), E = W(O), N = W(E), H = W(N);
        Y(N);
        var I = R(N, 2);
        Kn(I), I.__input = [iw, l, o], Y(E), Y(O);
        var q = R(O, 2), D = W(q), B = W(D), S = W(B);
        Y(B);
        var C = R(B, 2);
        Kn(C), C.__input = [aw, l, o], Y(D), Y(q);
        var P = R(q, 2), V = W(P), T = W(V), M = W(T);
        Y(T);
        var z = R(T, 2);
        Kn(z), z.__input = [sw, l, o], Y(V), Y(P);
        var j = R(P, 4), K = W(j);
        const te = /* @__PURE__ */ He(() => n().systemPrompt || "");
        $t(K, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%",
          get value() {
            return f(te);
          },
          oninput: (Q) => {
            l(o, { systemPrompt: Q.target.value });
          }
        }), Y(j);
        var G = R(j, 4), X = W(G);
        const ye = /* @__PURE__ */ He(() => n().userPrompt || "");
        $t(X, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%",
          get value() {
            return f(ye);
          },
          oninput: (Q) => {
            l(o, { userPrompt: Q.target.value });
          }
        }), Y(G);
        var ae = R(G, 2), ge = W(ae);
        rt(ge, {
          level: 3,
          mt: "10px",
          children: (Q, Pe) => {
            Re();
            var F = We("输出参数");
            A(Q, F);
          },
          $$slots: { default: !0 }
        });
        var ue = R(ge, 2);
        const Ee = /* @__PURE__ */ He(() => n().outType ? [n().outType] : []);
        hn(ue, {
          items: [
            { label: "文本", value: "text" },
            { label: "JSON", value: "json" }
          ],
          style: "width: 100px;margin-left: auto",
          defaultValue: "text",
          onSelect: (Q) => {
            u(Q.value);
          },
          get value() {
            return f(Ee);
          }
        });
        var xe = R(ue, 2);
        {
          var Ne = (Q) => {
            Qe(Q, {
              class: "input-btn-more",
              style: "margin-left: 10px",
              onclick: () => {
                i(o, "outputDefs");
              },
              children: (Pe, F) => {
                var _e = lw();
                A(Pe, _e);
              },
              $$slots: { default: !0 }
            });
          };
          $e(xe, (Q) => {
            n().outType === "json" && Q(Ne);
          });
        }
        Y(ae);
        var de = R(ae, 2);
        wr(de, {}), Oe(() => {
          bt(H, `Temperature: ${n().temperature ?? 0.5 ?? ""}`), bi(I, n().temperature ?? 0.5), bt(S, `Top P: ${n().topP ?? 0.9 ?? ""}`), bi(C, n().topP ?? 0.9), bt(M, `Top K: ${n().topK ?? 50 ?? ""}`), bi(z, n().topK ?? 50);
        }), A(c, v);
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
pe(vf, { data: {} }, [], [], !0);
var dw = /* @__PURE__ */ Ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), fw = /* @__PURE__ */ Ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), vw = /* @__PURE__ */ Ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), pw = /* @__PURE__ */ ie('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const gw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function pf(e, t) {
  he(t, !0), it(e, gw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Nt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  mn(() => {
    n().engine || a(o, () => ({ engine: "qlexpress" }));
  });
  const o = Tt(), { addParameter: i } = qn(), { updateNodeData: a } = tn(), s = [
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
        var u = dw();
        A(l, u);
      },
      children: (l, u) => {
        var c = pw(), d = Ce(c), v = W(d);
        rt(v, {
          level: 3,
          children: (I, q) => {
            Re();
            var D = We("输入参数");
            A(I, D);
          },
          $$slots: { default: !0 }
        });
        var p = R(v, 2);
        Qe(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (I, q) => {
            var D = fw();
            A(I, D);
          },
          $$slots: { default: !0 }
        }), Y(d);
        var h = R(d, 2);
        Qt(h, {});
        var x = R(h, 2);
        rt(x, {
          level: 3,
          mt: "10px",
          children: (I, q) => {
            Re();
            var D = We("代码");
            A(I, D);
          },
          $$slots: { default: !0 }
        });
        var b = R(x, 4), $ = W(b);
        const g = /* @__PURE__ */ He(() => n().engine ? [n().engine] : ["qlexpress"]);
        hn($, {
          items: s,
          style: "width: 100%",
          placeholder: "请选择执行引擎",
          onSelect: (I) => {
            const q = I.value;
            a(o, () => ({ engine: q }));
          },
          get value() {
            return f(g);
          }
        }), Y(b);
        var _ = R(b, 4), w = W(_);
        const k = /* @__PURE__ */ He(() => n().code || "");
        $t(w, {
          rows: 10,
          placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result.put(key, value)",
          style: "width: 100%",
          onchange: (I) => {
            a(o, () => ({ code: I.target.value }));
          },
          get value() {
            return f(k);
          }
        }), Y(_);
        var O = R(_, 2), E = W(O);
        rt(E, {
          level: 3,
          mt: "10px",
          children: (I, q) => {
            Re();
            var D = We("输出参数");
            A(I, D);
          },
          $$slots: { default: !0 }
        });
        var N = R(E, 2);
        Qe(N, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (I, q) => {
            var D = vw();
            A(I, D);
          },
          $$slots: { default: !0 }
        }), Y(O);
        var H = R(O, 2);
        wr(H, {}), A(l, c);
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
pe(pf, { data: {} }, [], [], !0);
var hw = /* @__PURE__ */ Ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), mw = /* @__PURE__ */ Ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), yw = /* @__PURE__ */ ie('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const ww = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function gf(e, t) {
  he(t, !0), it(e, ww);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Nt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Tt(), { addParameter: i } = qn(), { updateNodeData: a } = tn();
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
        var l = hw();
        A(s, l);
      },
      children: (s, l) => {
        var u = yw(), c = Ce(u), d = W(c);
        rt(d, {
          level: 3,
          children: (k, O) => {
            Re();
            var E = We("输入参数");
            A(k, E);
          },
          $$slots: { default: !0 }
        });
        var v = R(d, 2);
        Qe(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (k, O) => {
            var E = mw();
            A(k, E);
          },
          $$slots: { default: !0 }
        }), Y(c);
        var p = R(c, 2);
        Qt(p, {});
        var h = R(p, 2);
        rt(h, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (k, O) => {
            Re();
            var E = We("模板内容");
            A(k, E);
          },
          $$slots: { default: !0 }
        });
        var x = R(h, 2), b = W(x);
        const $ = /* @__PURE__ */ He(() => n().template || "");
        $t(b, {
          rows: 10,
          placeholder: "请输入模板内容",
          style: "width: 100%",
          onchange: (k) => {
            a(o, () => ({ template: k.target.value }));
          },
          get value() {
            return f($);
          }
        }), Y(x);
        var g = R(x, 2), _ = W(g);
        rt(_, {
          level: 3,
          mt: "10px",
          children: (k, O) => {
            Re();
            var E = We("输出参数");
            A(k, E);
          },
          $$slots: { default: !0 }
        }), Y(g);
        var w = R(g, 2);
        wr(w, {}), A(s, u);
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
pe(gf, { data: {} }, [], [], !0);
var bw = /* @__PURE__ */ Ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), xw = /* @__PURE__ */ Ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), $w = /* @__PURE__ */ Ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Cw = /* @__PURE__ */ Ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), _w = /* @__PURE__ */ ie('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), kw = /* @__PURE__ */ Ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ew = /* @__PURE__ */ ie('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), Sw = /* @__PURE__ */ ie('<div style="width: 100%"><!></div>'), Pw = /* @__PURE__ */ ie('<div style="width: 100%"><!></div>'), Mw = /* @__PURE__ */ Ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ow = /* @__PURE__ */ ie('<div class="heading svelte-1mo2w1q"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1mo2w1q"><!> <!></div> <!> <!> <div class="radio-group svelte-1mo2w1q"><label class="svelte-1mo2w1q"><!>none</label> <label class="svelte-1mo2w1q"><!>form-data</label> <label class="svelte-1mo2w1q"><!>x-www-form-urlencoded</label> <label class="svelte-1mo2w1q"><!>json</label> <label class="svelte-1mo2w1q"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1mo2w1q"><!> <!></div> <!>', 1);
const Tw = {
  hash: "svelte-1mo2w1q",
  code: ".heading.svelte-1mo2w1q {display:flex;margin-bottom:10px;}.radio-group.svelte-1mo2w1q {display:flex;margin:10px 0;}.radio-group.svelte-1mo2w1q label:where(.svelte-1mo2w1q) {display:flex;font-size:14px;}"
};
function hf(e, t) {
  he(t, !0), it(e, Tw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Nt(t, [
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
  ], i = Tt(), { addParameter: a } = qn(), { updateNodeData: s } = tn();
  return Pn(e, mt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = bw();
        A(l, u);
      },
      children: (l, u) => {
        var c = Ow(), d = Ce(c), v = W(d);
        rt(v, {
          level: 3,
          children: (ce, fe) => {
            Re();
            var ve = We("输入参数");
            A(ce, ve);
          },
          $$slots: { default: !0 }
        });
        var p = R(v, 2);
        Qe(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i);
          },
          children: (ce, fe) => {
            var ve = xw();
            A(ce, ve);
          },
          $$slots: { default: !0 }
        }), Y(d);
        var h = R(d, 2);
        Qt(h, {});
        var x = R(h, 2);
        rt(x, {
          level: 3,
          mt: "10px",
          children: (ce, fe) => {
            Re();
            var ve = We("URL 地址");
            A(ce, ve);
          },
          $$slots: { default: !0 }
        });
        var b = R(x, 2), $ = W(b), g = W($);
        const _ = /* @__PURE__ */ He(() => n().method ? [n().method] : ["get"]);
        hn(g, {
          items: o,
          style: "width: 100%",
          placeholder: "请选择请求方式",
          onSelect: (ce) => {
            const fe = ce.value;
            s(i, () => ({ method: fe }));
          },
          get value() {
            return f(_);
          }
        }), Y($);
        var w = R($, 2), k = W(w);
        const O = /* @__PURE__ */ He(() => n().url || "");
        Pt(k, {
          placeholder: "请输入url",
          style: "width: 100%",
          onchange: (ce) => {
            s(i, () => ({ url: ce.target.value }));
          },
          get value() {
            return f(O);
          }
        }), Y(w), Y(b);
        var E = R(b, 2), N = W(E);
        rt(N, {
          level: 3,
          children: (ce, fe) => {
            Re();
            var ve = We("Http 头信息");
            A(ce, ve);
          },
          $$slots: { default: !0 }
        });
        var H = R(N, 2);
        Qe(H, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "headers");
          },
          children: (ce, fe) => {
            var ve = $w();
            A(ce, ve);
          },
          $$slots: { default: !0 }
        }), Y(E);
        var I = R(E, 2);
        Qt(I, { dataKeyName: "headers" });
        var q = R(I, 2);
        rt(q, {
          level: 3,
          mt: "10px",
          children: (ce, fe) => {
            Re();
            var ve = We("Body");
            A(ce, ve);
          },
          $$slots: { default: !0 }
        });
        var D = R(q, 2), B = W(D), S = W(B);
        const C = /* @__PURE__ */ He(() => !n().bodyType);
        Pt(S, {
          type: "radio",
          name: "bodyType",
          value: "",
          get checked() {
            return f(C);
          },
          onchange: (ce) => {
            var fe;
            (fe = ce.target) != null && fe.checked && s(i, { bodyType: "" });
          }
        }), Re(), Y(B);
        var P = R(B, 2), V = W(P);
        const T = /* @__PURE__ */ He(() => n().bodyType === "form-data");
        Pt(V, {
          type: "radio",
          name: "bodyType",
          value: "form-data",
          get checked() {
            return f(T);
          },
          onchange: (ce) => {
            var fe;
            (fe = ce.target) != null && fe.checked && s(i, { bodyType: "form-data" });
          }
        }), Re(), Y(P);
        var M = R(P, 2), z = W(M);
        const j = /* @__PURE__ */ He(() => n().bodyType === "x-www-form-urlencoded");
        Pt(z, {
          type: "radio",
          name: "bodyType",
          value: "x-www-form-urlencoded",
          get checked() {
            return f(j);
          },
          onchange: (ce) => {
            var fe;
            (fe = ce.target) != null && fe.checked && s(i, { bodyType: "x-www-form-urlencoded" });
          }
        }), Re(), Y(M);
        var K = R(M, 2), te = W(K);
        const G = /* @__PURE__ */ He(() => n().bodyType === "json");
        Pt(te, {
          type: "radio",
          name: "bodyType",
          value: "json",
          get checked() {
            return f(G);
          },
          onchange: (ce) => {
            var fe;
            (fe = ce.target) != null && fe.checked && s(i, { bodyType: "json" });
          }
        }), Re(), Y(K);
        var X = R(K, 2), ye = W(X);
        const ae = /* @__PURE__ */ He(() => n().bodyType === "raw");
        Pt(ye, {
          type: "radio",
          name: "bodyType",
          value: "raw",
          get checked() {
            return f(ae);
          },
          onchange: (ce) => {
            var fe;
            (fe = ce.target) != null && fe.checked && s(i, { bodyType: "raw" });
          }
        }), Re(), Y(X), Y(D);
        var ge = R(D, 2);
        {
          var ue = (ce) => {
            var fe = _w(), ve = Ce(fe), Se = W(ve);
            rt(Se, {
              level: 3,
              children: (J, Ae) => {
                Re();
                var se = We("参数");
                A(J, se);
              },
              $$slots: { default: !0 }
            });
            var at = R(Se, 2);
            Qe(at, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(i, "formData");
              },
              children: (J, Ae) => {
                var se = Cw();
                A(J, se);
              },
              $$slots: { default: !0 }
            }), Y(ve);
            var ct = R(ve, 2);
            Qt(ct, { dataKeyName: "formData" }), A(ce, fe);
          };
          $e(ge, (ce) => {
            n().bodyType === "form-data" && ce(ue);
          });
        }
        var Ee = R(ge, 2);
        {
          var xe = (ce) => {
            var fe = Ew(), ve = Ce(fe), Se = W(ve);
            rt(Se, {
              level: 3,
              children: (J, Ae) => {
                Re();
                var se = We("Body 参数");
                A(J, se);
              },
              $$slots: { default: !0 }
            });
            var at = R(Se, 2);
            Qe(at, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(i, "formUrlencoded");
              },
              children: (J, Ae) => {
                var se = kw();
                A(J, se);
              },
              $$slots: { default: !0 }
            }), Y(ve);
            var ct = R(ve, 2);
            Qt(ct, { dataKeyName: "formUrlencoded" }), A(ce, fe);
          };
          $e(Ee, (ce) => {
            n().bodyType === "x-www-form-urlencoded" && ce(xe);
          });
        }
        var Ne = R(Ee, 2);
        {
          var de = (ce) => {
            var fe = Sw(), ve = W(fe);
            $t(ve, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (Se) => {
                s(i, { bodyJson: Se.target.value });
              }
            }), Y(fe), A(ce, fe);
          };
          $e(Ne, (ce) => {
            n().bodyType === "json" && ce(de);
          });
        }
        var Q = R(Ne, 2);
        {
          var Pe = (ce) => {
            var fe = Pw(), ve = W(fe);
            $t(ve, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (Se) => {
                s(i, { bodyRaw: Se.target.value });
              }
            }), Y(fe), A(ce, fe);
          };
          $e(Q, (ce) => {
            n().bodyType === "raw" && ce(Pe);
          });
        }
        var F = R(Q, 2), _e = W(F);
        rt(_e, {
          level: 3,
          mt: "10px",
          children: (ce, fe) => {
            Re();
            var ve = We("输出参数");
            A(ce, ve);
          },
          $$slots: { default: !0 }
        });
        var De = R(_e, 2);
        Qe(De, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "outputDefs");
          },
          children: (ce, fe) => {
            var ve = Mw();
            A(ce, ve);
          },
          $$slots: { default: !0 }
        }), Y(F);
        var Le = R(F, 2);
        wr(Le, {}), A(l, c);
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
pe(hf, { data: {} }, [], [], !0);
var Vw = /* @__PURE__ */ Ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), Hw = /* @__PURE__ */ Ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Nw = /* @__PURE__ */ ie('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Dw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function mf(e, t) {
  he(t, !0), it(e, Dw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Nt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Tt(), { addParameter: i } = qn(), a = hr();
  let s = /* @__PURE__ */ Zt(bn([]));
  mn(async () => {
    var u, c;
    const d = await ((c = (u = a.provider) == null ? void 0 : u.knowledge) == null ? void 0 : c.call(u));
    f(s).push(...d || []);
  });
  const { updateNodeData: l } = tn();
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
        A(u, c);
      },
      children: (u, c) => {
        var d = Nw(), v = Ce(d), p = W(v);
        rt(p, {
          level: 3,
          children: (D, B) => {
            Re();
            var S = We("输入参数");
            A(D, S);
          },
          $$slots: { default: !0 }
        });
        var h = R(p, 2);
        Qe(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (D, B) => {
            var S = Hw();
            A(D, S);
          },
          $$slots: { default: !0 }
        }), Y(v);
        var x = R(v, 2);
        Qt(x, {});
        var b = R(x, 2);
        rt(b, {
          level: 3,
          mt: "10px",
          children: (D, B) => {
            Re();
            var S = We("知识库设置");
            A(D, S);
          },
          $$slots: { default: !0 }
        });
        var $ = R(b, 4), g = W($);
        const _ = /* @__PURE__ */ He(() => n().knowledgeId ? [n().knowledgeId] : []);
        hn(g, {
          get items() {
            return f(s);
          },
          style: "width: 100%",
          placeholder: "请选择知识库",
          onSelect: (D) => {
            const B = D.value;
            l(o, () => ({ knowledgeId: B }));
          },
          get value() {
            return f(_);
          }
        }), Y($);
        var w = R($, 4), k = W(w);
        Pt(k, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (D) => {
            const B = D.target.value;
            l(o, () => ({ keyword: B }));
          }
        }), Y(w);
        var O = R(w, 4), E = W(O);
        const N = /* @__PURE__ */ He(() => n().limit || "");
        Pt(E, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          onchange: (D) => {
            const B = D.target.value;
            l(o, () => ({ limit: B }));
          },
          get value() {
            return f(N);
          }
        }), Y(O);
        var H = R(O, 2), I = W(H);
        rt(I, {
          level: 3,
          mt: "10px",
          children: (D, B) => {
            Re();
            var S = We("输出参数");
            A(D, S);
          },
          $$slots: { default: !0 }
        }), Y(H);
        var q = R(H, 2);
        wr(q, {}), A(u, d);
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
var Lw = /* @__PURE__ */ Ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), Aw = /* @__PURE__ */ Ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), zw = /* @__PURE__ */ ie('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">搜索引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">搜索数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Iw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function yf(e, t) {
  he(t, !0), it(e, Iw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Nt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Tt(), { addParameter: i } = qn(), a = hr();
  let s = /* @__PURE__ */ Zt(bn([]));
  mn(async () => {
    var u, c;
    const d = await ((c = (u = a.provider) == null ? void 0 : u.searchEngine) == null ? void 0 : c.call(u));
    f(s).push(...d || []);
  });
  const { updateNodeData: l } = tn();
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
        var c = Lw();
        A(u, c);
      },
      children: (u, c) => {
        var d = zw(), v = Ce(d), p = W(v);
        rt(p, {
          level: 3,
          children: (q, D) => {
            Re();
            var B = We("输入参数");
            A(q, B);
          },
          $$slots: { default: !0 }
        });
        var h = R(p, 2);
        Qe(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (q, D) => {
            var B = Aw();
            A(q, B);
          },
          $$slots: { default: !0 }
        }), Y(v);
        var x = R(v, 2);
        Qt(x, {});
        var b = R(x, 2);
        rt(b, {
          level: 3,
          mt: "10px",
          children: (q, D) => {
            Re();
            var B = We("搜索引擎设置");
            A(q, B);
          },
          $$slots: { default: !0 }
        });
        var $ = R(b, 4), g = W($);
        const _ = /* @__PURE__ */ He(() => n().engine ? [n().engine] : []);
        hn(g, {
          get items() {
            return f(s);
          },
          style: "width: 100%",
          placeholder: "请选择搜索引擎",
          onSelect: (q) => {
            const D = q.value;
            l(o, () => ({ engine: D }));
          },
          get value() {
            return f(_);
          }
        }), Y($);
        var w = R($, 4), k = W(w);
        Pt(k, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (q) => {
            const D = q.target.value;
            l(o, () => ({ keyword: D }));
          }
        }), Y(w);
        var O = R(w, 4), E = W(O);
        Pt(E, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (q) => {
            const D = q.target.value;
            l(o, () => ({ limit: D }));
          }
        }), Y(O);
        var N = R(O, 2), H = W(N);
        rt(H, {
          level: 3,
          mt: "10px",
          children: (q, D) => {
            Re();
            var B = We("输出参数");
            A(q, B);
          },
          $$slots: { default: !0 }
        }), Y(N);
        var I = R(N, 2);
        wr(I, {}), A(u, d);
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
pe(yf, { data: {} }, [], [], !0);
var Rw = /* @__PURE__ */ Ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), qw = /* @__PURE__ */ Ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Bw = /* @__PURE__ */ ie('<div class="heading svelte-1eqcy61"><!></div> <!> <div class="heading svelte-1eqcy61"><!> <!></div> <!>', 1);
const Zw = {
  hash: "svelte-1eqcy61",
  code: ".heading.svelte-1eqcy61 {display:flex;margin:10px 0;align-items:center;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function wf(e, t) {
  he(t, !0), it(e, Zw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Nt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Tt(), { addParameter: i } = qn();
  return vn(() => {
    (!n().loopVars || n().loopVars.length === 0) && i(o, "loopVars", {
      name: "loopVar",
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
        var s = Rw();
        A(a, s);
      },
      handle: (a) => {
        pr(a, {
          type: "source",
          get position() {
            return qe.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (a, s) => {
        var l = Bw(), u = Ce(l), c = W(u);
        rt(c, {
          level: 3,
          children: (b, $) => {
            Re();
            var g = We("循环变量");
            A(b, g);
          },
          $$slots: { default: !0 }
        }), Y(u);
        var d = R(u, 2);
        Qt(d, { dataKeyName: "loopVars" });
        var v = R(d, 2), p = W(v);
        rt(p, {
          level: 3,
          children: (b, $) => {
            Re();
            var g = We("输出参数");
            A(b, g);
          },
          $$slots: { default: !0 }
        });
        var h = R(p, 2);
        Qe(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (b, $) => {
            var g = qw();
            A(b, g);
          },
          $$slots: { default: !0 }
        }), Y(v);
        var x = R(v, 2);
        Qt(x, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          useChildrenOnly: !0
        }), A(a, l);
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
pe(wf, { data: {} }, [], [], !0);
const Yw = {
  startNode: sf,
  codeNode: pf,
  llmNode: vf,
  templateNode: gf,
  httpNode: hf,
  knowledgeNode: mf,
  searchEngineNode: yf,
  loopNode: wf,
  endNode: df
};
var jw = /* @__PURE__ */ ie("<!> ", 1);
function gs(e, t) {
  he(t, !0);
  const n = y(t, "icon", 7), r = y(t, "title", 7), o = y(t, "type", 7), i = y(t, "description", 7), a = y(t, "extra", 7);
  return Qe(e, {
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
      var u = jw(), c = Ce(u);
      Hs(c, n);
      var d = R(c);
      Oe(() => bt(d, ` ${r() ?? ""}`)), A(s, u);
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
var Ww = /* @__PURE__ */ Ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), Kw = /* @__PURE__ */ Ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), Xw = /* @__PURE__ */ ie('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function bf(e, t) {
  he(t, !0);
  let n = /* @__PURE__ */ Zt("base"), r = /* @__PURE__ */ Zt("show");
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
  var u = Xw(), c = W(u), d = W(c), v = W(d);
  Zd(v, {
    style: "width: 100%",
    items: i,
    onChange: ($) => {
      ee(n, $.value.toString(), !0);
    }
  }), Y(d);
  var p = R(d, 2), h = W(p);
  Wt(h, 21, () => o, to, ($, g) => {
    gs($, mt(() => f(g)));
  }), Y(h);
  var x = R(h, 2);
  Wt(x, 21, () => a, to, ($, g) => {
    gs($, mt(() => f(g)));
  }), Y(x), Y(p), Y(c);
  var b = R(c, 2);
  Qe(b, {
    onclick: () => {
      ee(r, f(r) ? "" : "show", !0);
    },
    children: ($, g) => {
      var _ = ut(), w = Ce(_);
      {
        var k = (E) => {
          var N = Ww();
          A(E, N);
        }, O = (E) => {
          var N = Kw();
          A(E, N);
        };
        $e(w, (E) => {
          f(r) === "show" ? E(k) : E(O, !1);
        });
      }
      A($, _);
    },
    $$slots: { default: !0 }
  }), Y(u), Oe(() => {
    Rt(u, 1, `tf-toolbar ${f(r) ?? ""}`), _t(h, `display: ${f(n) === "base" ? "flex" : "none"}`), _t(x, `display: ${f(n) !== "base" ? "flex" : "none"}`);
  }), A(e, u), me();
}
pe(bf, {}, [], [], !0);
const Fw = () => {
  const { nodeLookup: e } = et();
  return {
    getNode: (t) => {
      var n;
      return (n = U(e).get(t)) == null ? void 0 : n.internals.userNode;
    }
  };
}, Gw = () => {
  const { nodes: e } = et();
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
}, Uw = () => {
  const { edges: e } = et();
  return {
    getEdgesByTarget: (t) => U(e).filter((n) => n.target === t)
  };
};
var Jw = /* @__PURE__ */ Ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Qw = /* @__PURE__ */ ie('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), eb = /* @__PURE__ */ ie('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), tb = /* @__PURE__ */ ie('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), nb = /* @__PURE__ */ ie('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input></div></div>', 1), rb = /* @__PURE__ */ ie('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), ob = /* @__PURE__ */ ie('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), ib = /* @__PURE__ */ Ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ab = /* @__PURE__ */ ie('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), sb = /* @__PURE__ */ ie("<!> <!> <div></div> <!>", 1);
const lb = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function xf(e, t) {
  var n;
  he(t, !0), it(e, lb);
  const r = y(t, "data", 7), o = /* @__PURE__ */ Nt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), i = Tt(), { addParameter: a } = qn(), s = tn(), { updateNodeData: l } = s, u = ($) => {
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
  const b = /* @__PURE__ */ He(() => ({
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
        var g = ut(), _ = Ce(g);
        Hs(_, () => p.icon), A($, g);
      },
      children: ($, g) => {
        var _ = sb(), w = Ce(_);
        {
          var k = (q) => {
            var D = Qw(), B = Ce(D), S = W(B);
            rt(S, {
              level: 3,
              children: (T, M) => {
                Re();
                var z = We("输入参数");
                A(T, z);
              },
              $$slots: { default: !0 }
            });
            var C = R(S, 2);
            {
              var P = (T) => {
                Qe(T, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    a(i);
                  },
                  children: (M, z) => {
                    var j = Jw();
                    A(M, j);
                  },
                  $$slots: { default: !0 }
                });
              };
              $e(C, (T) => {
                p.parametersAddEnable !== !1 && T(P);
              });
            }
            Y(B);
            var V = R(B, 2);
            Qt(V, {}), A(q, D);
          };
          $e(w, (q) => {
            p.parametersEnable !== !1 && q(k);
          });
        }
        var O = R(w, 2);
        {
          var E = (q) => {
            var D = ut(), B = Ce(D);
            Wt(B, 17, () => h, to, (S, C) => {
              var P = ut(), V = Ce(P);
              {
                var T = (z) => {
                  var j = eb(), K = Ce(j), te = W(K, !0);
                  Y(K);
                  var G = R(K, 2), X = W(G);
                  const ye = /* @__PURE__ */ He(() => r()[f(C).name] || f(C).defaultValue);
                  Pt(X, mt(
                    {
                      get placeholder() {
                        return f(C).placeholder;
                      },
                      style: "width: 100%",
                      get value() {
                        return f(ye);
                      }
                    },
                    () => f(C).attrs,
                    {
                      onchange: (ae) => {
                        c(f(C).name, ae);
                      }
                    }
                  )), Y(G), Oe(() => bt(te, f(C).label)), A(z, j);
                }, M = (z, j) => {
                  {
                    var K = (G) => {
                      var X = tb(), ye = Ce(X), ae = W(ye, !0);
                      Y(ye);
                      var ge = R(ye, 2), ue = W(ge);
                      const Ee = /* @__PURE__ */ He(() => r()[f(C).name] || f(C).defaultValue);
                      $t(ue, mt(
                        {
                          rows: 3,
                          get placeholder() {
                            return f(C).placeholder;
                          },
                          style: "width: 100%",
                          get value() {
                            return f(Ee);
                          }
                        },
                        () => f(C).attrs,
                        {
                          onchange: (xe) => {
                            c(f(C).name, xe);
                          }
                        }
                      )), Y(ge), Oe(() => bt(ae, f(C).label)), A(G, X);
                    }, te = (G, X) => {
                      {
                        var ye = (ge) => {
                          var ue = nb(), Ee = Ce(ue), xe = W(Ee, !0);
                          Y(Ee);
                          var Ne = R(Ee, 2), de = W(Ne), Q = W(de), Pe = W(Q);
                          Y(Q);
                          var F = R(Q, 2);
                          Kn(F);
                          var _e = (Le) => u({
                            [f(C).name]: parseFloat(Le.target.value)
                          });
                          let De;
                          Y(de), Y(Ne), Oe(() => {
                            bt(xe, f(C).label), bt(Pe, `${f(C).description ?? ""}: ${r()[f(C).name] ?? f(C).defaultValue ?? ""}`), De = ln(
                              F,
                              De,
                              {
                                class: "nodrag",
                                type: "range",
                                ...f(C).attrs,
                                value: r()[f(C).name] ?? f(C).defaultValue,
                                oninput: _e
                              },
                              "svelte-q0cqsa"
                            );
                          }), A(ge, ue);
                        }, ae = (ge, ue) => {
                          {
                            var Ee = (Ne) => {
                              var de = rb(), Q = Ce(de), Pe = W(Q, !0);
                              Y(Q);
                              var F = R(Q, 2), _e = W(F);
                              const De = /* @__PURE__ */ He(() => f(C).options || []), Le = /* @__PURE__ */ He(() => r()[f(C).name] ? [r()[f(C).name]] : [f(C).defaultValue]);
                              hn(_e, {
                                get items() {
                                  return f(De);
                                },
                                style: "width: 100%",
                                get placeholder() {
                                  return f(C).placeholder;
                                },
                                onSelect: (ce) => {
                                  const fe = ce.value;
                                  u({ [f(C).name]: fe });
                                },
                                get value() {
                                  return f(Le);
                                }
                              }), Y(F), Oe(() => bt(Pe, f(C).label)), A(Ne, de);
                            }, xe = (Ne, de) => {
                              {
                                var Q = (F) => {
                                  var _e = ob(), De = Ce(_e), Le = W(De, !0);
                                  Y(De);
                                  var ce = R(De, 2), fe = W(ce);
                                  const ve = /* @__PURE__ */ He(() => {
                                    var Se;
                                    return (Se = f(C).chosen) == null ? void 0 : Se.buttonText;
                                  });
                                  Bd(fe, {
                                    style: "width: 100%",
                                    get placeholder() {
                                      return f(C).placeholder;
                                    },
                                    get buttonText() {
                                      return f(ve);
                                    },
                                    onChosen: (Se, at, ct) => {
                                      var J, Ae;
                                      (Ae = (J = f(C).chosen) == null ? void 0 : J.onChosen) == null || Ae.call(J, u, Se, at, ct);
                                    },
                                    get value() {
                                      var Se;
                                      return r()[((Se = f(C).chosen) == null ? void 0 : Se.valueDataKey) || ""];
                                    },
                                    get label() {
                                      var Se;
                                      return r()[((Se = f(C).chosen) == null ? void 0 : Se.labelDataKey) || ""];
                                    }
                                  }), Y(ce), Oe(() => bt(Le, f(C).label)), A(F, _e);
                                }, Pe = (F, _e) => {
                                  {
                                    var De = (Le) => {
                                      rt(Le, mt({ level: 3, mt: "10px" }, () => f(C).attrs, {
                                        children: (ce, fe) => {
                                          Re();
                                          var ve = We();
                                          Oe(() => bt(ve, f(C).label)), A(ce, ve);
                                        },
                                        $$slots: { default: !0 }
                                      }));
                                    };
                                    $e(
                                      F,
                                      (Le) => {
                                        f(C).type === "heading" && Le(De);
                                      },
                                      _e
                                    );
                                  }
                                };
                                $e(
                                  Ne,
                                  (F) => {
                                    f(C).type === "chosen" ? F(Q) : F(Pe, !1);
                                  },
                                  de
                                );
                              }
                            };
                            $e(
                              ge,
                              (Ne) => {
                                f(C).type === "select" ? Ne(Ee) : Ne(xe, !1);
                              },
                              ue
                            );
                          }
                        };
                        $e(
                          G,
                          (ge) => {
                            f(C).type === "slider" ? ge(ye) : ge(ae, !1);
                          },
                          X
                        );
                      }
                    };
                    $e(
                      z,
                      (G) => {
                        f(C).type === "textarea" ? G(K) : G(te, !1);
                      },
                      j
                    );
                  }
                };
                $e(V, (z) => {
                  f(C).type === "input" ? z(T) : z(M, !1);
                });
              }
              A(S, P);
            }), A(q, D);
          };
          $e(O, (q) => {
            h && q(E);
          });
        }
        var N = R(O, 2);
        An(N, (q) => x = q, () => x);
        var H = R(N, 2);
        {
          var I = (q) => {
            var D = ab(), B = Ce(D), S = W(B);
            rt(S, {
              level: 3,
              mt: "10px",
              children: (T, M) => {
                Re();
                var z = We("输出参数");
                A(T, z);
              },
              $$slots: { default: !0 }
            });
            var C = R(S, 2);
            {
              var P = (T) => {
                Qe(T, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    a(i, "outputDefs");
                  },
                  children: (M, z) => {
                    var j = ib();
                    A(M, j);
                  },
                  $$slots: { default: !0 }
                });
              };
              $e(C, (T) => {
                p.outputDefsAddEnable !== !1 && T(P);
              });
            }
            Y(B);
            var V = R(B, 2);
            wr(V, {}), A(q, D);
          };
          $e(H, (q) => {
            p.outputDefsEnable !== !1 && q(I);
          });
        }
        Oe(() => {
          _t(N, p.rootStyle || ""), Rt(N, 1, En(p.rootClass), "svelte-q0cqsa");
        }), A($, _);
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
pe(xf, { data: {} }, [], [], !0);
const ub = () => {
  const e = et();
  return {
    updateEdgeData: (t, n, r) => {
      const o = U(e.edgeLookup).get(t);
      if (!o)
        return;
      const i = typeof n == "function" ? n(o) : n;
      o.data = r != null && r.replace ? i : { ...o.data, ...i }, e.edges.update(
        (a) => a.map((s) => s.id === t ? o : s)
      );
    }
  };
}, cb = () => {
  const { edges: e } = et();
  return {
    deleteEdge: (t) => {
      e.update((n) => n.filter((r) => r.id !== t));
    }
  };
};
var db = /* @__PURE__ */ ie('<div class="panel-content svelte-80qc4q"><div>边属性设置</div> <div class="setting-title svelte-80qc4q">边条件设置</div> <div class="setting-item svelte-80qc4q"><!></div> <div class="setting-item svelte-80qc4q" style="padding: 8px 0"><!> <!></div></div>'), fb = /* @__PURE__ */ ie("<!> <!> <!> <!>", 1), vb = /* @__PURE__ */ ie('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const pb = {
  hash: "svelte-80qc4q",
  code: ".panel-content.svelte-80qc4q {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-80qc4q {margin:10px 0;font-size:12px;color:#999;}.setting-item.svelte-80qc4q {display:flex;gap:5px;align-items:center;justify-content:end;}"
};
function $f(e, t) {
  he(t, !0), it(e, pb);
  const [n, r] = vt(), o = () => oe(H, "$nodes", n), i = () => oe(I, "$edges", n), a = () => oe(q, "$viewport", n), s = y(t, "onInit", 7), l = tn();
  s()(l);
  let u = /* @__PURE__ */ Zt(!1), c = /* @__PURE__ */ Zt(void 0);
  const { updateEdgeData: d } = ub(), v = (M) => {
    M.preventDefault(), M.dataTransfer && (M.dataTransfer.dropEffect = "move");
  }, p = (M) => {
    var z;
    M.preventDefault();
    const j = l.screenToFlowPosition({
      x: M.clientX - 250,
      y: M.clientY - 100
    }), K = (z = M.dataTransfer) == null ? void 0 : z.getData("application/tinyflow"), te = K ? JSON.parse(K) : {}, G = {
      id: `node_${Nr()}`,
      position: j,
      data: {},
      ...te
    };
    Si.addNode(G), Si.selectNodeOnly(G.id);
  }, { getNode: h } = Fw(), x = (M) => {
    const z = h(M.source), j = h(M.target);
    if (M.sourceHandle === "loop_handle" || z.parentId) {
      const K = l.getEdges();
      for (let te of K)
        if (te.target === M.target) {
          const G = h(te.source);
          if (M.sourceHandle === "loop_handle" && G.parentId !== z.id || z.parentId && G.parentId !== z.parentId)
            return !1;
        }
    }
    return !(!z.parentId && j.parentId && j.parentId !== z.id);
  }, { ensureParentInNodesBefore: b } = Gw(), $ = (M, z) => {
    if (!z.isValid)
      return;
    const j = z.toNode;
    if (j.parentId)
      return;
    const K = z.fromNode, te = z.fromHandle, G = { position: { ...j.position } };
    if (te.id === "loop_handle" ? G.parentId = K.id : K.parentId && (G.parentId = K.parentId), G.parentId) {
      const X = h(G.parentId);
      G.position = {
        x: j.position.x - X.position.x,
        y: j.position.y - X.position.y
      }, b(G.parentId, j.id), l.updateNode(j.id, G);
    }
  }, { getEdgesByTarget: g } = Uw(), _ = (M) => {
    M.edges.forEach((z) => {
      var j;
      z.id === ((j = f(c)) == null ? void 0 : j.id) && (ee(c, null), ee(u, !1));
      const K = h(z.target);
      if (K && K.parentId) {
        const te = g(z.target), G = h(K.parentId);
        if (te.length === 0)
          l.updateNode(K.id, {
            parentId: void 0,
            position: {
              x: K.position.x + G.position.x,
              y: K.position.y + G.position.y
            }
          });
        else {
          let X = !1;
          for (let ye = 0; ye < te.length; ye++) {
            const ae = te[ye], ge = h(ae.source);
            if (ge.parentId || ge.type === "loopNode") {
              X = !0;
              break;
            }
          }
          X || l.updateNode(K.id, {
            parentId: void 0,
            position: {
              x: K.position.x + G.position.x,
              y: K.position.y + G.position.y
            }
          });
        }
      }
    });
  }, { deleteEdge: w } = cb(), k = (M, z) => {
  }, O = (M) => {
  }, E = {}, N = hr().customNodes;
  if (N)
    for (let M of Object.keys(N))
      E[M] = xf;
  const { nodes: H, edges: I, viewport: q } = et(), D = hr().onDataChange;
  D && (H.subscribe(() => {
    D(
      {
        nodes: o(),
        edges: i(),
        viewport: a()
      },
      { eventType: "nodesChange" }
    );
  }), I.subscribe(() => {
    D(
      {
        nodes: o(),
        edges: i(),
        viewport: a()
      },
      { eventType: "edgesChange" }
    );
  }), q.subscribe(() => {
    D(
      {
        nodes: o(),
        edges: i(),
        viewport: a()
      },
      { eventType: "viewportChange" }
    );
  }));
  var B = vb(), S = W(B);
  const C = /* @__PURE__ */ He(() => ({ ...Yw, ...E })), P = /* @__PURE__ */ He(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: Zo.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  Sd(S, mt(
    {
      get nodeTypes() {
        return f(C);
      }
    },
    Si,
    {
      class: "tinyflow-logo",
      isValidConnection: x,
      onconnectend: $,
      onconnectstart: k,
      onconnect: O,
      connectionRadius: 50,
      onedgecreate: (M) => ({ ...M, id: Nr() }),
      ondelete: _,
      onclick: (M) => {
        const z = M.target;
        z.classList.contains("svelte-flow__edge-interaction") || z.classList.contains("panel-content") || z.closest(".panel-content") || (ee(u, !1), ee(c, null));
      },
      get defaultEdgeOptions() {
        return f(P);
      },
      $$events: {
        drop: p,
        dragover: v,
        edgeclick: (M) => {
          ee(u, !0), ee(c, M.detail.edge, !0);
        }
      },
      children: (M, z) => {
        var j = fb(), K = Ce(j);
        Ad(K, {});
        var te = R(K, 2);
        Nd(te, {});
        var G = R(te, 2);
        Id(G, {});
        var X = R(G, 2);
        {
          var ye = (ae) => {
            ri(ae, {
              children: (ge, ue) => {
                var Ee = db(), xe = R(W(Ee), 4), Ne = W(xe);
                const de = /* @__PURE__ */ He(() => {
                  var _e, De;
                  return (De = (_e = f(c)) == null ? void 0 : _e.data) == null ? void 0 : De.condition;
                });
                $t(Ne, {
                  rows: 3,
                  placeholder: "请输入边条件",
                  style: "width: 100%",
                  get value() {
                    return f(de);
                  },
                  onchange: (_e) => {
                    var De;
                    f(c) && d(f(c).id, { condition: (De = _e.target) == null ? void 0 : De.value });
                  }
                }), Y(xe);
                var Q = R(xe, 2), Pe = W(Q);
                Qe(Pe, {
                  onclick: () => {
                    var _e;
                    w((_e = f(c)) == null ? void 0 : _e.id), ee(u, !1);
                  },
                  children: (_e, De) => {
                    Re();
                    var Le = We("删除");
                    A(_e, Le);
                  },
                  $$slots: { default: !0 }
                });
                var F = R(Pe, 2);
                Qe(F, {
                  primary: !0,
                  onclick: () => {
                    ee(u, !1);
                  },
                  children: (_e, De) => {
                    Re();
                    var Le = We("保存");
                    A(_e, Le);
                  },
                  $$slots: { default: !0 }
                }), Y(Q), Y(Ee), A(ge, Ee);
              },
              $$slots: { default: !0 }
            });
          };
          $e(X, (ae) => {
            f(u) && ae(ye);
          });
        }
        A(M, j);
      },
      $$slots: { default: !0 }
    }
  ));
  var V = R(S, 2);
  bf(V, {}), Y(B), A(e, B);
  var T = me({
    get onInit() {
      return s();
    },
    set onInit(M) {
      s(M), m();
    }
  });
  return r(), T;
}
pe($f, { onInit: {} }, [], [], !0);
function gb(e, t) {
  he(t, !0);
  const n = y(t, "options", 7), r = y(t, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  return Si.init((o == null ? void 0 : o.nodes) || [], (o == null ? void 0 : o.edges) || []), eo("tinyflow_options", n()), Pd(e, {
    fitView: !0,
    children: (i, a) => {
      $f(i, {
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
customElements.define("tinyflow-component", pe(gb, { options: {}, onInit: {} }, [], [], !1));
const wb = kf((e, t) => {
  const n = tl(null), r = tl(null);
  Ef(t, () => ({
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
  }, [o]), /* @__PURE__ */ Tf.jsx("div", { ref: n, style: { height: "600px", ...i }, className: a });
});
export {
  wb as Tinyflow
};
//# sourceMappingURL=index.js.map
