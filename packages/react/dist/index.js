import pu, { forwardRef as Cf, useRef as tl, useImperativeHandle as _f, useEffect as kf } from "react";
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
    var c, d = {}, p = null, v = null;
    u !== void 0 && (p = "" + u), l.key !== void 0 && (p = "" + l.key), l.ref !== void 0 && (v = l.ref);
    for (c in l) r.call(l, c) && !i.hasOwnProperty(c) && (d[c] = l[c]);
    if (s && s.defaultProps) for (c in l = s.defaultProps, l) d[c] === void 0 && (d[c] = l[c]);
    return { $$typeof: t, type: s, key: p, ref: v, props: d, _owner: o.current };
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
function Sf() {
  return rl || (rl = 1, process.env.NODE_ENV !== "production" && function() {
    var e = pu, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), h = Symbol.iterator, b = "@@iterator";
    function x(D) {
      if (D === null || typeof D != "object")
        return null;
      var ne = h && D[h] || D[b];
      return typeof ne == "function" ? ne : null;
    }
    var C = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(D) {
      {
        for (var ne = arguments.length, we = new Array(ne > 1 ? ne - 1 : 0), De = 1; De < ne; De++)
          we[De - 1] = arguments[De];
        _("error", D, we);
      }
    }
    function _(D, ne, we) {
      {
        var De = C.ReactDebugCurrentFrame, Z = De.getStackAddendum();
        Z !== "" && (ne += "%s", we = we.concat([Z]));
        var st = we.map(function(Ke) {
          return String(Ke);
        });
        st.unshift("Warning: " + ne), Function.prototype.apply.call(console[D], console, st);
      }
    }
    var w = !1, k = !1, V = !1, E = !1, H = !1, N;
    N = Symbol.for("react.module.reference");
    function I(D) {
      return !!(typeof D == "string" || typeof D == "function" || D === r || D === i || H || D === o || D === u || D === c || E || D === v || w || k || V || typeof D == "object" && D !== null && (D.$$typeof === p || D.$$typeof === d || D.$$typeof === a || D.$$typeof === s || D.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      D.$$typeof === N || D.getModuleId !== void 0));
    }
    function R(D, ne, we) {
      var De = D.displayName;
      if (De)
        return De;
      var Z = ne.displayName || ne.name || "";
      return Z !== "" ? we + "(" + Z + ")" : we;
    }
    function L(D) {
      return D.displayName || "Context";
    }
    function B(D) {
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
            var De = D.displayName || null;
            return De !== null ? De : B(D.type) || "Memo";
          case p: {
            var Z = D, st = Z._payload, Ke = Z._init;
            try {
              return B(Ke(st));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, $ = 0, M, T, P, O, A, X, W;
    function U() {
    }
    U.__reactDisabledLog = !0;
    function Q() {
      {
        if ($ === 0) {
          M = console.log, T = console.info, P = console.warn, O = console.error, A = console.group, X = console.groupCollapsed, W = console.groupEnd;
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
        $++;
      }
    }
    function F() {
      {
        if ($--, $ === 0) {
          var D = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, D, {
              value: M
            }),
            info: S({}, D, {
              value: T
            }),
            warn: S({}, D, {
              value: P
            }),
            error: S({}, D, {
              value: O
            }),
            group: S({}, D, {
              value: A
            }),
            groupCollapsed: S({}, D, {
              value: X
            }),
            groupEnd: S({}, D, {
              value: W
            })
          });
        }
        $ < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ge = C.ReactCurrentDispatcher, de;
    function he(D, ne, we) {
      {
        if (de === void 0)
          try {
            throw Error();
          } catch (Z) {
            var De = Z.stack.trim().match(/\n( *(at )?)/);
            de = De && De[1] || "";
          }
        return `
` + de + D;
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
      var De;
      le = !0;
      var Z = Error.prepareStackTrace;
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
            } catch (Mt) {
              De = Mt;
            }
            Reflect.construct(D, [], Ke);
          } else {
            try {
              Ke.call();
            } catch (Mt) {
              De = Mt;
            }
            D.call(Ke.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Mt) {
            De = Mt;
          }
          D();
        }
      } catch (Mt) {
        if (Mt && De && typeof Mt.stack == "string") {
          for (var Ze = Mt.stack.split(`
`), Tt = De.stack.split(`
`), pt = Ze.length - 1, ht = Tt.length - 1; pt >= 1 && ht >= 0 && Ze[pt] !== Tt[ht]; )
            ht--;
          for (; pt >= 1 && ht >= 0; pt--, ht--)
            if (Ze[pt] !== Tt[ht]) {
              if (pt !== 1 || ht !== 1)
                do
                  if (pt--, ht--, ht < 0 || Ze[pt] !== Tt[ht]) {
                    var Yt = `
` + Ze[pt].replace(" at new ", " at ");
                    return D.displayName && Yt.includes("<anonymous>") && (Yt = Yt.replace("<anonymous>", D.displayName)), typeof D == "function" && ke.set(D, Yt), Yt;
                  }
                while (pt >= 1 && ht >= 0);
              break;
            }
        }
      } finally {
        le = !1, ge.current = st, F(), Error.prepareStackTrace = Z;
      }
      var tr = D ? D.displayName || D.name : "", nr = tr ? he(tr) : "";
      return typeof D == "function" && ke.set(D, nr), nr;
    }
    function ue(D, ne, we) {
      return He(D, !1);
    }
    function J(D) {
      var ne = D.prototype;
      return !!(ne && ne.isReactComponent);
    }
    function Me(D, ne, we) {
      if (D == null)
        return "";
      if (typeof D == "function")
        return He(D, J(D));
      if (typeof D == "string")
        return he(D);
      switch (D) {
        case u:
          return he("Suspense");
        case c:
          return he("SuspenseList");
      }
      if (typeof D == "object")
        switch (D.$$typeof) {
          case l:
            return ue(D.render);
          case d:
            return Me(D.type, ne, we);
          case p: {
            var De = D, Z = De._payload, st = De._init;
            try {
              return Me(st(Z), ne, we);
            } catch {
            }
          }
        }
      return "";
    }
    var K = Object.prototype.hasOwnProperty, Ne = {}, qe = C.ReactDebugCurrentFrame;
    function Le(D) {
      if (D) {
        var ne = D._owner, we = Me(D.type, D._source, ne ? ne.type : null);
        qe.setExtraStackFrame(we);
      } else
        qe.setExtraStackFrame(null);
    }
    function ce(D, ne, we, De, Z) {
      {
        var st = Function.call.bind(K);
        for (var Ke in D)
          if (st(D, Ke)) {
            var Ze = void 0;
            try {
              if (typeof D[Ke] != "function") {
                var Tt = Error((De || "React class") + ": " + we + " type `" + Ke + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof D[Ke] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Tt.name = "Invariant Violation", Tt;
              }
              Ze = D[Ke](ne, Ke, De, we, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (pt) {
              Ze = pt;
            }
            Ze && !(Ze instanceof Error) && (Le(Z), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", De || "React class", we, Ke, typeof Ze), Le(null)), Ze instanceof Error && !(Ze.message in Ne) && (Ne[Ze.message] = !0, Le(Z), g("Failed %s type: %s", we, Ze.message), Le(null));
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
    var Fe = C.ReactCurrentOwner, ve = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, jt, Xt;
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
    function je(D, ne) {
      {
        var we = function() {
          jt || (jt = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ne));
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
          Xt || (Xt = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ne));
        };
        we.isReactWarning = !0, Object.defineProperty(D, "ref", {
          get: we,
          configurable: !0
        });
      }
    }
    var ct = function(D, ne, we, De, Z, st, Ke) {
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
        value: De
      }), Object.defineProperty(Ze, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Z
      }), Object.freeze && (Object.freeze(Ze.props), Object.freeze(Ze)), Ze;
    };
    function Qt(D, ne, we, De, Z) {
      {
        var st, Ke = {}, Ze = null, Tt = null;
        we !== void 0 && (te(we), Ze = "" + we), Ie(ne) && (te(ne.key), Ze = "" + ne.key), un(ne) && (Tt = ne.ref, ut(ne, Z));
        for (st in ne)
          K.call(ne, st) && !ve.hasOwnProperty(st) && (Ke[st] = ne[st]);
        if (D && D.defaultProps) {
          var pt = D.defaultProps;
          for (st in pt)
            Ke[st] === void 0 && (Ke[st] = pt[st]);
        }
        if (Ze || Tt) {
          var ht = typeof D == "function" ? D.displayName || D.name || "Unknown" : D;
          Ze && je(Ke, ht), Tt && Be(Ke, ht);
        }
        return ct(D, Ze, Tt, Z, De, Fe.current, Ke);
      }
    }
    var Ht = C.ReactCurrentOwner, Qn = C.ReactDebugCurrentFrame;
    function yt(D) {
      if (D) {
        var ne = D._owner, we = Me(D.type, D._source, ne ? ne.type : null);
        Qn.setExtraStackFrame(we);
      } else
        Qn.setExtraStackFrame(null);
    }
    var Ct;
    Ct = !1;
    function Pn(D) {
      return typeof D == "object" && D !== null && D.$$typeof === t;
    }
    function at() {
      {
        if (Ht.current) {
          var D = B(Ht.current.type);
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
    var er = {};
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
        if (er[we])
          return;
        er[we] = !0;
        var De = "";
        D && D._owner && D._owner !== Ht.current && (De = " It was passed a child from " + B(D._owner.type) + "."), yt(D), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', we, De), yt(null);
      }
    }
    function xr(D, ne) {
      {
        if (typeof D != "object")
          return;
        if (ae(D))
          for (var we = 0; we < D.length; we++) {
            var De = D[we];
            Pn(De) && br(De, ne);
          }
        else if (Pn(D))
          D._store && (D._store.validated = !0);
        else if (D) {
          var Z = x(D);
          if (typeof Z == "function" && Z !== D.entries)
            for (var st = Z.call(D), Ke; !(Ke = st.next()).done; )
              Pn(Ke.value) && br(Ke.value, ne);
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
          var De = B(ne);
          ce(we, D.props, "prop", De, D);
        } else if (ne.PropTypes !== void 0 && !Ct) {
          Ct = !0;
          var Z = B(ne);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Z || "Unknown");
        }
        typeof ne.getDefaultProps == "function" && !ne.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function wo(D) {
      {
        for (var ne = Object.keys(D.props), we = 0; we < ne.length; we++) {
          var De = ne[we];
          if (De !== "children" && De !== "key") {
            yt(D), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", De), yt(null);
            break;
          }
        }
        D.ref !== null && (yt(D), g("Invalid attribute `ref` supplied to `React.Fragment`."), yt(null));
      }
    }
    var si = {};
    function li(D, ne, we, De, Z, st) {
      {
        var Ke = I(D);
        if (!Ke) {
          var Ze = "";
          (D === void 0 || typeof D == "object" && D !== null && Object.keys(D).length === 0) && (Ze += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Tt = yo();
          Tt ? Ze += Tt : Ze += at();
          var pt;
          D === null ? pt = "null" : ae(D) ? pt = "array" : D !== void 0 && D.$$typeof === t ? (pt = "<" + (B(D.type) || "Unknown") + " />", Ze = " Did you accidentally export a JSX literal instead of a component?") : pt = typeof D, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", pt, Ze);
        }
        var ht = Qt(D, ne, we, Z, st);
        if (ht == null)
          return ht;
        if (Ke) {
          var Yt = ne.children;
          if (Yt !== void 0)
            if (De)
              if (ae(Yt)) {
                for (var tr = 0; tr < Yt.length; tr++)
                  xr(Yt[tr], D);
                Object.freeze && Object.freeze(Yt);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              xr(Yt, D);
        }
        if (K.call(ne, "key")) {
          var nr = B(D), Mt = Object.keys(ne).filter(function(ci) {
            return ci !== "key";
          }), Ar = Mt.length > 0 ? "{key: someKey, " + Mt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!si[nr + Ar]) {
            var ui = Mt.length > 0 ? "{" + Mt.join(": ..., ") + ": ...}" : "{}";
            g(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ar, nr, ui, nr), si[nr + Ar] = !0;
          }
        }
        return D === r ? wo(ht) : zr(ht), ht;
      }
    }
    function Ea(D, ne, we) {
      return li(D, ne, we, !0);
    }
    function Sa(D, ne, we) {
      return li(D, ne, we, !1);
    }
    var Ma = Sa, Pa = Ea;
    xo.Fragment = r, xo.jsx = Ma, xo.jsxs = Pa;
  }()), xo;
}
var ol;
function Mf() {
  return ol || (ol = 1, process.env.NODE_ENV === "production" ? di.exports = Ef() : di.exports = Sf()), di.exports;
}
var Pf = Mf(), Vf = Object.defineProperty, gu = (e) => {
  throw TypeError(e);
}, Of = (e, t, n) => t in e ? Vf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ft = (e, t, n) => Of(e, typeof t != "symbol" ? t + "" : t, n), hs = (e, t, n) => t.has(e) || gu("Cannot " + n), wt = (e, t, n) => (hs(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Zr = (e, t, n) => t.has(e) ? gu("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Mi = (e, t, n, r) => (hs(e, t, "write to private field"), t.set(e, n), n), Hf = (e, t, n) => (hs(e, t, "access private method"), n);
const Tf = "5";
var il;
typeof window < "u" && ((il = window.__svelte ?? (window.__svelte = {})).v ?? (il.v = /* @__PURE__ */ new Set())).add(Tf);
let uo = !1, Nf = !1;
function Lf() {
  uo = !0;
}
Lf();
const ms = 1, ys = 2, hu = 4, Df = 8, zf = 16, Af = 1, If = 2, mu = 4, Rf = 8, qf = 16, yu = 1, Zf = 2, ws = "[", bs = "[!", xs = "]", jr = {}, Wt = Symbol(), Bf = "http://www.w3.org/1999/xhtml", jf = "http://www.w3.org/2000/svg", Xf = !1;
function ra(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
var Ko = Array.isArray, Yf = Array.prototype.indexOf, $s = Array.from, Pi = Object.keys, Ho = Object.defineProperty, Xn = Object.getOwnPropertyDescriptor, wu = Object.getOwnPropertyDescriptors, Wf = Object.prototype, Kf = Array.prototype, Cs = Object.getPrototypeOf, al = Object.isExtensible;
function $o(e) {
  return typeof e == "function";
}
const Et = () => {
};
function Ff(e) {
  return e();
}
function To(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const $n = 2, bu = 4, oa = 8, _s = 16, Gn = 32, Nr = 64, Vi = 128, on = 256, Oi = 512, qt = 1024, Tn = 2048, yr = 4096, Yn = 8192, ia = 16384, Gf = 32768, co = 65536, Uf = 1 << 17, Jf = 1 << 19, xu = 1 << 20, ja = 1 << 21, lr = Symbol("$state"), ks = Symbol("legacy props"), Qf = Symbol("");
function e1(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function t1() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function n1(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function r1() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function o1() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function i1(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function a1() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function s1() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function l1() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function aa(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let Ae = !1;
function nn(e) {
  Ae = e;
}
let We;
function Rt(e) {
  if (e === null)
    throw aa(), jr;
  return We = e;
}
function Nn() {
  return Rt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ In(We)
  );
}
function j(e) {
  if (Ae) {
    if (/* @__PURE__ */ In(We) !== null)
      throw aa(), jr;
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
function Xa() {
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
function wn(e) {
  if (typeof e != "object" || e === null || lr in e)
    return e;
  const t = Cs(e);
  if (t !== Wf && t !== Kf)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Ko(e), o = /* @__PURE__ */ It(0), i = dt, a = (s) => {
    var l = dt;
    Ln(i);
    var u = s();
    return Ln(l), u;
  };
  return r && n.set("length", /* @__PURE__ */ It(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(s, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && a1();
        var c = n.get(l);
        return c === void 0 ? (c = a(() => /* @__PURE__ */ It(u.value)), n.set(l, c)) : ee(
          c,
          a(() => wn(u.value))
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
        if (l === lr)
          return e;
        var d = n.get(l), p = l in s;
        if (d === void 0 && (!p || (c = Xn(s, l)) != null && c.writable) && (d = a(() => /* @__PURE__ */ It(wn(p ? s[l] : Wt))), n.set(l, d)), d !== void 0) {
          var v = f(d);
          return v === Wt ? void 0 : v;
        }
        return Reflect.get(s, l, u);
      },
      getOwnPropertyDescriptor(s, l) {
        var u = Reflect.getOwnPropertyDescriptor(s, l);
        if (u && "value" in u) {
          var c = n.get(l);
          c && (u.value = f(c));
        } else if (u === void 0) {
          var d = n.get(l), p = d == null ? void 0 : d.v;
          if (d !== void 0 && p !== Wt)
            return {
              enumerable: !0,
              configurable: !0,
              value: p,
              writable: !0
            };
        }
        return u;
      },
      has(s, l) {
        var u;
        if (l === lr)
          return !0;
        var c = n.get(l), d = c !== void 0 && c.v !== Wt || Reflect.has(s, l);
        if (c !== void 0 || et !== null && (!d || (u = Xn(s, l)) != null && u.writable)) {
          c === void 0 && (c = a(() => /* @__PURE__ */ It(d ? wn(s[l]) : Wt)), n.set(l, c));
          var p = f(c);
          if (p === Wt)
            return !1;
        }
        return d;
      },
      set(s, l, u, c) {
        var d, p = n.get(l), v = l in s;
        if (r && l === "length")
          for (var h = u; h < /** @type {Source<number>} */
          p.v; h += 1) {
            var b = n.get(h + "");
            b !== void 0 ? ee(b, Wt) : h in s && (b = a(() => /* @__PURE__ */ It(Wt)), n.set(h + "", b));
          }
        p === void 0 ? (!v || (d = Xn(s, l)) != null && d.writable) && (p = a(() => /* @__PURE__ */ It(void 0)), ee(
          p,
          a(() => wn(u))
        ), n.set(l, p)) : (v = p.v !== Wt, ee(
          p,
          a(() => wn(u))
        ));
        var x = Reflect.getOwnPropertyDescriptor(s, l);
        if (x != null && x.set && x.set.call(c, u), !v) {
          if (r && typeof l == "string") {
            var C = (
              /** @type {Source<number>} */
              n.get("length")
            ), g = Number(l);
            Number.isInteger(g) && g >= C.v && ee(C, g + 1);
          }
          Va(o);
        }
        return !0;
      },
      ownKeys(s) {
        f(o);
        var l = Reflect.ownKeys(s).filter((d) => {
          var p = n.get(d);
          return p === void 0 || p.v !== Wt;
        });
        for (var [u, c] of n)
          c.v !== Wt && !(u in s) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        s1();
      }
    }
  );
}
function Va(e, t = 1) {
  ee(e, e.v + t);
}
var Kt, $u, Cu, _u;
function Ya() {
  if (Kt === void 0) {
    Kt = window, $u = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Cu = Xn(t, "firstChild").get, _u = Xn(t, "nextSibling").get, al(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), al(n) && (n.__t = void 0);
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
function Y(e, t) {
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
function Es(e) {
  e.textContent = "";
}
function ku(e) {
  return e === this.v;
}
function Ss(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Ms(e) {
  return !Ss(e, this.v);
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
  return t.equals = Ms, t;
}
function Eu(e) {
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
function u1(e) {
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
function Su(e) {
  var t, n = et;
  pr(u1(e));
  try {
    Eu(e), t = Zu(e);
  } finally {
    pr(n);
  }
  return t;
}
function Mu(e) {
  var t = Su(e), n = (ar || (e.f & on) !== 0) && e.deps !== null ? yr : qt;
  pn(e, n), e.equals(t) || (e.v = t, e.wv = Ru());
}
function Pu(e) {
  et === null && dt === null && n1(), dt !== null && (dt.f & on) !== 0 && et === null && t1(), Go && e1();
}
function c1(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Lr(e, t, n, r = !0) {
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
      la(i), i.f |= Gf;
    } catch (l) {
      throw Cn(i), l;
    }
  else t !== null && ua(i);
  var a = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (xu | Vi)) === 0;
  if (!a && r && (o !== null && c1(i, o), dt !== null && (dt.f & $n) !== 0)) {
    var s = (
      /** @type {Derived} */
      dt
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return i;
}
function Ps(e) {
  const t = Lr(oa, null, !1);
  return pn(t, qt), t.teardown = e, t;
}
function xn(e) {
  Pu();
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
    var r = tn(e);
    return r;
  }
}
function d1(e) {
  return Pu(), fo(e);
}
function f1(e) {
  const t = Lr(Nr, e, !0);
  return () => {
    Cn(t);
  };
}
function v1(e) {
  const t = Lr(Nr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Ur(t, () => {
      Cn(t), r(void 0);
    }) : (Cn(t), r(void 0));
  });
}
function tn(e) {
  return Lr(bu, e, !1);
}
function be(e, t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    Qe
  ), r = { effect: null, ran: !1 };
  n.l.r1.push(r), r.effect = fo(() => {
    e(), !r.ran && (r.ran = !0, ee(n.l.r2, !0), Dn(t));
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
        (n.f & qt) !== 0 && pn(n, yr), po(n) && la(n), t.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function fo(e) {
  return Lr(oa, e, !0);
}
function Se(e, t = [], n = Gr) {
  const r = t.map(n);
  return vo(() => e(...r.map(f)));
}
function vo(e, t = 0) {
  return Lr(oa | _s | t, e, !0);
}
function vr(e, t = !0) {
  return Lr(oa | Gn, e, !0, t);
}
function Vu(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Go, r = dt;
    ll(!0), Ln(null);
    try {
      t.call(null);
    } finally {
      ll(n), Ln(r);
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
function p1(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Gn) === 0 && Cn(t), t = n;
  }
}
function Cn(e, t = !0) {
  var n = !1;
  (t || (e.f & Jf) !== 0) && e.nodes_start !== null && (Hu(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), Ou(e, t && !n), Li(e, 0), pn(e, ia);
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
  if ((e.f & Yn) === 0) {
    if (e.f ^= Yn, e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || n) && t.push(a);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & co) !== 0 || (r.f & Gn) !== 0;
      Vs(r, t, i ? n : !1), r = o;
    }
  }
}
function No(e) {
  Lu(e, !0);
}
function Lu(e, t) {
  if ((e.f & Yn) !== 0) {
    e.f ^= Yn, (e.f & qt) === 0 && (e.f ^= qt), po(e) && (pn(e, Tn), ua(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & co) !== 0 || (n.f & Gn) !== 0;
      Lu(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
const g1 = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let Lo = [], Do = [];
function Du() {
  var e = Lo;
  Lo = [], To(e);
}
function zu() {
  var e = Do;
  Do = [], To(e);
}
function Fo(e) {
  Lo.length === 0 && queueMicrotask(Du), Lo.push(e);
}
function h1(e) {
  Do.length === 0 && g1(zu), Do.push(e);
}
function sl() {
  Lo.length > 0 && Du(), Do.length > 0 && zu();
}
let wi = !1, Hi = !1, Ti = null, kr = !1, Go = !1;
function ll(e) {
  Go = e;
}
let Vo = [], dt = null, Vn = !1;
function Ln(e) {
  dt = e;
}
let et = null;
function pr(e) {
  et = e;
}
let vn = null;
function Au(e) {
  dt !== null && dt.f & ja && (vn === null ? vn = [e] : vn.push(e));
}
let At = null, en = 0, dn = null;
function m1(e) {
  dn = e;
}
let Iu = 1, Ni = 0, ar = !1;
function Ru() {
  return ++Iu;
}
function po(e) {
  var t, n = e.f;
  if ((n & Tn) !== 0)
    return !0;
  if ((n & yr) !== 0) {
    var r = e.deps, o = (n & on) !== 0;
    if (r !== null) {
      var i, a, s = (n & Oi) !== 0, l = o && et !== null && !ar, u = r.length;
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
        ) && Mu(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!o || et !== null && !ar) && pn(e, qt);
  }
  return !1;
}
function y1(e, t) {
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
  if (n !== null && (wi = !0), y1(e, t), ul(t))
    throw e;
}
function qu(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null)
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      vn != null && vn.includes(e) || ((i.f & $n) !== 0 ? qu(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? pn(i, Tn) : (i.f & qt) !== 0 && pn(i, yr), ua(
        /** @type {Effect} */
        i
      )));
    }
}
function Zu(e) {
  var t, n = At, r = en, o = dn, i = dt, a = ar, s = vn, l = Qe, u = Vn, c = e.f;
  At = /** @type {null | Value[]} */
  null, en = 0, dn = null, ar = (c & on) !== 0 && (Vn || !kr || dt === null), dt = (c & (Gn | Nr)) === 0 ? e : null, vn = null, dl(e.ctx), Vn = !1, Ni++, e.f |= ja;
  try {
    var d = (
      /** @type {Function} */
      (0, e.fn)()
    ), p = e.deps;
    if (At !== null) {
      var v;
      if (Li(e, en), p !== null && en > 0)
        for (p.length = en + At.length, v = 0; v < At.length; v++)
          p[en + v] = At[v];
      else
        e.deps = p = At;
      if (!ar)
        for (v = en; v < p.length; v++)
          ((t = p[v]).reactions ?? (t.reactions = [])).push(e);
    } else p !== null && en < p.length && (Li(e, en), p.length = en);
    if (ca() && dn !== null && !Vn && p !== null && (e.f & ($n | yr | Tn)) === 0)
      for (v = 0; v < /** @type {Source[]} */
      dn.length; v++)
        qu(
          dn[v],
          /** @type {Effect} */
          e
        );
    return i !== null && i !== e && (Ni++, dn !== null && (o === null ? o = dn : o.push(.../** @type {Source[]} */
    dn))), d;
  } finally {
    At = n, en = r, dn = o, dt = i, ar = a, vn = s, dl(l), Vn = u, e.f ^= ja;
  }
}
function w1(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Yf.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && (t.f & $n) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (At === null || !At.includes(t)) && (pn(t, yr), (t.f & (on | Oi)) === 0 && (t.f ^= Oi), Eu(
    /** @type {Derived} **/
    t
  ), Li(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Li(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      w1(e, n[r]);
}
function la(e) {
  var t = e.f;
  if ((t & ia) === 0) {
    pn(e, qt);
    var n = et, r = Qe, o = kr;
    et = e, kr = !0;
    try {
      (t & _s) !== 0 ? p1(e) : Ou(e), Vu(e);
      var i = Zu(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Iu;
      var a = e.deps, s;
      Xf && Nf && e.f & Tn;
    } catch (l) {
      sa(l, e, n, r || e.ctx);
    } finally {
      kr = o, et = n;
    }
  }
}
function b1() {
  try {
    r1();
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
      t++ > 1e3 && b1();
      var n = Vo, r = n.length;
      Vo = [];
      for (var o = 0; o < r; o++) {
        var i = $1(n[o]);
        x1(i);
      }
      zo.clear();
    }
  } finally {
    Hi = !1, kr = e, Ti = null;
  }
}
function x1(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if ((r.f & (ia | Yn)) === 0)
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
function $1(e) {
  for (var t = [], n = e; n !== null; ) {
    var r = n.f, o = (r & (Gn | Nr)) !== 0, i = o && (r & qt) !== 0;
    if (!i && (r & Yn) === 0) {
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
    if (!(vn != null && vn.includes(e))) {
      var r = dt.deps;
      e.rv < Ni && (e.rv = Ni, At === null && r !== null && r[en] === e ? en++ : At === null ? At = [e] : (!ar || !At.includes(e)) && At.push(e));
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
  e, po(o) && Mu(o)), Go && zo.has(e) ? zo.get(e) : e.v;
}
function Dn(e) {
  var t = Vn;
  try {
    return Vn = !0, e();
  } finally {
    Vn = t;
  }
}
const C1 = -7169;
function pn(e, t) {
  e.f = e.f & C1 | t;
}
function re(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (lr in e)
      Wa(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && lr in n && Wa(n);
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
function se(e, t = !1) {
  var n;
  const r = Jr(e);
  return t || (r.equals = Ms), uo && Qe !== null && Qe.l !== null && ((n = Qe.l).s ?? (n.s = [])).push(r), r;
}
function ee(e, t, n = !1) {
  dt !== null && !Vn && ca() && (dt.f & ($n | _s)) !== 0 && !(vn != null && vn.includes(e)) && l1();
  let r = n ? wn(t) : t;
  return Ka(e, r);
}
function Ka(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Go ? zo.set(e, t) : zo.set(e, n), e.v = t, (e.f & $n) !== 0 && ((e.f & Tn) !== 0 && Su(
      /** @type {Derived} */
      e
    ), pn(e, (e.f & on) === 0 ? qt : yr)), e.wv = Ru(), ju(e, Tn), ca() && et !== null && (et.f & qt) !== 0 && (et.f & (Gn | Nr)) === 0 && (dn === null ? m1([e]) : dn.push(e));
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
      (s & Tn) === 0 && (!r && a === et || (pn(a, t), (s & (qt | on)) !== 0 && ((s & $n) !== 0 ? ju(
        /** @type {Derived} */
        a,
        yr
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
function Mr(e) {
  return (
    /** @type {T} */
    Os().get(e)
  );
}
function Qr(e, t) {
  return Os().set(e, t), t;
}
function _1(e) {
  return Os().has(e);
}
function me(e, t = !1, n) {
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
  }), Ps(() => {
    r.d = !0;
  });
}
function ye(e) {
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
          pr(i.effect), Ln(i.reaction), tn(i.fn);
        }
      } finally {
        pr(n), Ln(r);
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
  return Qe === null && ra(), Qe.c ?? (Qe.c = new Map(k1(Qe) || void 0));
}
function k1(e) {
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
const S1 = [
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
  return S1.includes(e);
}
const P1 = {
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
function V1(e) {
  return e = e.toLowerCase(), P1[e] ?? e;
}
const O1 = ["touchstart", "touchmove"];
function H1(e) {
  return O1.includes(e);
}
const T1 = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function N1(e) {
  return T1.includes(
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
function D1(e) {
  Ae && /* @__PURE__ */ kt(e) !== null && Es(e);
}
let fl = !1;
function z1() {
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
function A1(e) {
  var t = dt, n = et;
  Ln(null), pr(null);
  try {
    return e();
  } finally {
    Ln(t), pr(n);
  }
}
const Xu = /* @__PURE__ */ new Set(), Fa = /* @__PURE__ */ new Set();
function Yu(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || Eo.call(t, i), !i.cancelBubble)
      return A1(() => n == null ? void 0 : n.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Fo(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function ft(e, t, n, r, o) {
  var i = { capture: r, passive: o }, a = Yu(e, t, n, i);
  (t === document.body || t === window || t === document) && Ps(() => {
    t.removeEventListener(e, a, i);
  });
}
function go(e) {
  for (var t = 0; t < e.length; t++)
    Xu.add(e[t]);
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
    Ho(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var d = dt, p = et;
    Ln(null), pr(null);
    try {
      for (var v, h = []; a !== null; ) {
        var b = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var x = a["__" + o];
          if (x != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (Ko(x)) {
              var [C, ...g] = x;
              C.apply(a, [e, ...g]);
            } else
              x.call(a, e);
        } catch (_) {
          v ? h.push(_) : v = _;
        }
        if (e.cancelBubble || b === n || b === null)
          break;
        a = b;
      }
      if (v) {
        for (let _ of h)
          queueMicrotask(() => {
            throw _;
          });
        throw v;
      }
    } finally {
      e.__root = n, delete e.currentTarget, Ln(d), pr(p);
    }
  }
}
function Hs(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Ut(e, t) {
  var n = (
    /** @type {Effect} */
    et
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function ie(e, t) {
  var n = (t & yu) !== 0, r = (t & Zf) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (Ae)
      return Ut(We, null), We;
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
      Ut(s, l);
    } else
      Ut(a, a);
    return a;
  };
}
// @__NO_SIDE_EFFECTS__
function Oe(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & yu) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, a;
  return () => {
    if (Ae)
      return Ut(We, null), We;
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
      Ut(c, d);
    } else
      Ut(u, u);
    return u;
  };
}
function Ye(e = "") {
  if (!Ae) {
    var t = Kn(e + "");
    return Ut(t, t), t;
  }
  var n = We;
  return n.nodeType !== 3 && (n.before(n = Kn()), Rt(n)), Ut(n, n), n;
}
function lt() {
  if (Ae)
    return Ut(We, null), We;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Kn();
  return e.append(t, n), Ut(t, n), e;
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
function I1(e, t) {
  Ya(), t.intro = t.intro ?? !1;
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
      throw jr;
    nn(!0), Rt(
      /** @type {Comment} */
      i
    ), Nn();
    const a = Ku(e, { ...t, anchor: i });
    if (We === null || We.nodeType !== 8 || /** @type {Comment} */
    We.data !== xs)
      throw aa(), jr;
    return nn(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a === jr)
      return t.recover === !1 && o1(), Ya(), Es(n), nn(!1), Wu(e, t);
    throw a;
  } finally {
    nn(r), Rt(o);
  }
}
const Ir = /* @__PURE__ */ new Map();
function Ku(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: a = !0 }) {
  Ya();
  var s = /* @__PURE__ */ new Set(), l = (d) => {
    for (var p = 0; p < d.length; p++) {
      var v = d[p];
      if (!s.has(v)) {
        s.add(v);
        var h = H1(v);
        t.addEventListener(v, Eo, { passive: h });
        var b = Ir.get(v);
        b === void 0 ? (document.addEventListener(v, Eo, { passive: h }), Ir.set(v, 1)) : Ir.set(v, b + 1);
      }
    }
  };
  l($s(Xu)), Fa.add(l);
  var u = void 0, c = v1(() => {
    var d = n ?? t.appendChild(Kn());
    return vr(() => {
      if (i) {
        me({});
        var p = (
          /** @type {ComponentContext} */
          Qe
        );
        p.c = i;
      }
      o && (r.$$events = o), Ae && Ut(
        /** @type {TemplateNode} */
        d,
        null
      ), u = e(d, r) || {}, Ae && (et.nodes_end = We), i && ye();
    }), () => {
      var p;
      for (var v of s) {
        t.removeEventListener(v, Eo);
        var h = (
          /** @type {number} */
          Ir.get(v)
        );
        --h === 0 ? (document.removeEventListener(v, Eo), Ir.delete(v)) : Ir.set(v, h);
      }
      Fa.delete(l), d !== n && ((p = d.parentNode) == null || p.removeChild(d));
    };
  });
  return Ga.set(u, c), u;
}
let Ga = /* @__PURE__ */ new WeakMap();
function R1(e, t) {
  const n = Ga.get(e);
  return n ? (Ga.delete(e), n(t)) : Promise.resolve();
}
function xe(e, t, [n, r] = [0, 0]) {
  Ae && n === 0 && Nn();
  var o = e, i = null, a = null, s = Wt, l = n > 0 ? co : 0, u = !1;
  const c = (p, v = !0) => {
    u = !0, d(v, p);
  }, d = (p, v) => {
    if (s === (s = p)) return;
    let h = !1;
    if (Ae && r !== -1) {
      if (n === 0) {
        const x = (
          /** @type {Comment} */
          o.data
        );
        x === ws ? r = 0 : x === bs ? r = 1 / 0 : (r = parseInt(x.substring(1)), r !== r && (r = s ? 1 / 0 : -1));
      }
      const b = r > n;
      !!s === b && (o = Xa(), Rt(o), nn(!1), h = !0, r = -1);
    }
    s ? (i ? No(i) : v && (i = vr(() => v(o))), a && Ur(a, () => {
      a = null;
    })) : (a ? No(a) : v && (a = vr(() => v(o, [n + 1, r]))), i && Ur(i, () => {
      i = null;
    })), h && nn(!0);
  };
  vo(() => {
    u = !1, t(c), u || d(null, null);
  }, l), Ae && (o = We);
}
function eo(e, t) {
  return t;
}
function q1(e, t, n, r) {
  for (var o = [], i = t.length, a = 0; a < i; a++)
    Vs(t[a].e, o, !0);
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
  Nu(o, () => {
    for (var u = 0; u < i; u++) {
      var c = t[u];
      s || (r.delete(c.k), or(e, c.prev, c.next)), Cn(c.e, !s);
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
  var c = null, d = !1, p = /* @__PURE__ */ _e(() => {
    var v = n();
    return Ko(v) ? v : v == null ? [] : $s(v);
  });
  vo(() => {
    var v = f(p), h = v.length;
    if (d && h === 0)
      return;
    d = h === 0;
    let b = !1;
    if (Ae) {
      var x = (
        /** @type {Comment} */
        a.data === bs
      );
      x !== (h === 0) && (a = Xa(), Rt(a), nn(!1), b = !0);
    }
    if (Ae) {
      for (var C = null, g, _ = 0; _ < h; _++) {
        if (We.nodeType === 8 && /** @type {Comment} */
        We.data === xs) {
          a = /** @type {Comment} */
          We, b = !0, nn(!1);
          break;
        }
        var w = v[_], k = r(w, _);
        g = Fu(
          We,
          s,
          C,
          null,
          w,
          k,
          _,
          o,
          t,
          n
        ), s.items.set(k, g), C = g;
      }
      h > 0 && Rt(Xa());
    }
    Ae || Z1(v, s, a, o, t, r, n), i !== null && (h === 0 ? c ? No(c) : c = vr(() => i(a)) : c !== null && Ur(c, () => {
      c = null;
    })), b && nn(!0), f(p);
  }), Ae && (a = We);
}
function Z1(e, t, n, r, o, i, a) {
  var s, l, u, c, d = (o & Df) !== 0, p = (o & (ms | ys)) !== 0, v = e.length, h = t.items, b = t.first, x = b, C, g = null, _, w = [], k = [], V, E, H, N;
  if (d)
    for (N = 0; N < v; N += 1)
      V = e[N], E = i(V, N), H = h.get(E), H !== void 0 && ((s = H.a) == null || s.measure(), (_ ?? (_ = /* @__PURE__ */ new Set())).add(H));
  for (N = 0; N < v; N += 1) {
    if (V = e[N], E = i(V, N), H = h.get(E), H === void 0) {
      var I = x ? (
        /** @type {TemplateNode} */
        x.e.nodes_start
      ) : n;
      g = Fu(
        I,
        t,
        g,
        g === null ? t.first : g.next,
        V,
        E,
        N,
        r,
        o,
        a
      ), h.set(E, g), w = [], k = [], x = g.next;
      continue;
    }
    if (p && B1(H, V, N, o), (H.e.f & Yn) !== 0 && (No(H.e), d && ((l = H.a) == null || l.unfix(), (_ ?? (_ = /* @__PURE__ */ new Set())).delete(H))), H !== x) {
      if (C !== void 0 && C.has(H)) {
        if (w.length < k.length) {
          var R = k[0], L;
          g = R.prev;
          var B = w[0], S = w[w.length - 1];
          for (L = 0; L < w.length; L += 1)
            vl(w[L], R, n);
          for (L = 0; L < k.length; L += 1)
            C.delete(k[L]);
          or(t, B.prev, S.next), or(t, g, B), or(t, S, R), x = R, g = S, N -= 1, w = [], k = [];
        } else
          C.delete(H), vl(H, x, n), or(t, H.prev, H.next), or(t, H, g === null ? t.first : g.next), or(t, g, H), g = H;
        continue;
      }
      for (w = [], k = []; x !== null && x.k !== E; )
        (x.e.f & Yn) === 0 && (C ?? (C = /* @__PURE__ */ new Set())).add(x), k.push(x), x = x.next;
      if (x === null)
        continue;
      H = x;
    }
    w.push(H), g = H, x = H.next;
  }
  if (x !== null || C !== void 0) {
    for (var $ = C === void 0 ? [] : $s(C); x !== null; )
      (x.e.f & Yn) === 0 && $.push(x), x = x.next;
    var M = $.length;
    if (M > 0) {
      var T = (o & hu) !== 0 && v === 0 ? n : null;
      if (d) {
        for (N = 0; N < M; N += 1)
          (u = $[N].a) == null || u.measure();
        for (N = 0; N < M; N += 1)
          (c = $[N].a) == null || c.fix();
      }
      q1(t, $, T, h);
    }
  }
  d && Fo(() => {
    var P;
    if (_ !== void 0)
      for (H of _)
        (P = H.a) == null || P.apply();
  }), et.first = t.first && t.first.e, et.last = g && g.e;
}
function B1(e, t, n, r) {
  (r & ms) !== 0 && Ka(e.v, t), (r & ys) !== 0 ? Ka(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function Fu(e, t, n, r, o, i, a, s, l, u) {
  var c = (l & ms) !== 0, d = (l & zf) === 0, p = c ? d ? /* @__PURE__ */ se(o) : Jr(o) : o, v = (l & ys) === 0 ? a : Jr(a), h = {
    i: v,
    v: p,
    k: i,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  try {
    return h.e = vr(() => s(e, p, v, u), Ae), h.e.prev = n && n.e, h.e.next = r && r.e, n === null ? t.first = h : (n.next = h, n.e.next = h.e), r !== null && (r.prev = h, r.e.prev = h.e), h;
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
function Ts(e, t, n = !1, r = !1, o = !1) {
  var i = e, a = "";
  Se(() => {
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
          throw aa(), jr;
        Ut(We, u), i = Rt(l);
        return;
      }
      var c = a + "";
      n ? c = `<svg>${c}</svg>` : r && (c = `<math>${c}</math>`);
      var d = Hs(c);
      if ((n || r) && (d = /** @type {Element} */
      /* @__PURE__ */ kt(d)), Ut(
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
function Lt(e, t, n, r, o) {
  var i;
  Ae && Nn();
  var a = (i = t.$$slots) == null ? void 0 : i[n], s = !1;
  a === !0 && (a = t[n === "default" ? "children" : n], s = !0), a === void 0 || a(e, s ? () => r : r);
}
function j1(e) {
  const t = {};
  e.children && (t.default = !0);
  for (const n in e.$$slots)
    t[n] = !0;
  return t;
}
function Pr(e, t, ...n) {
  var r = e, o = Et, i;
  vo(() => {
    o !== (o = t()) && (i && (Cn(i), i = null), i = vr(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, co), Ae && (r = We);
}
function Gu(e, t, n) {
  Ae && Nn();
  var r = e, o, i;
  vo(() => {
    o !== (o = t()) && (i && (Ur(i), i = null), o && (i = vr(() => n(r, o))));
  }, co), Ae && (r = We);
}
function X1(e, t, n, r, o, i) {
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
    const p = t() || null;
    var v = p === "svg" ? jf : null;
    p !== s && (d && (p === null ? Ur(d, () => {
      d = null, l = null;
    }) : p === l ? No(d) : Cn(d)), p && p !== l && (d = vr(() => {
      if (u = Ae ? (
        /** @type {Element} */
        u
      ) : v ? document.createElementNS(v, p) : document.createElement(p), Ut(u, u), r) {
        Ae && N1(p) && u.append(document.createComment(""));
        var h = (
          /** @type {TemplateNode} */
          Ae ? /* @__PURE__ */ kt(u) : u.appendChild(Kn())
        );
        Ae && (h === null ? nn(!1) : Rt(h)), r(u, h);
      }
      et.nodes_end = u, c.before(u);
    })), s = p, s && (l = s));
  }, co), a && (nn(!0), Rt(c));
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
  tn(() => {
    var r = Dn(() => t(e, n == null ? void 0 : n()) || {});
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
function Uu(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Uu(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Y1() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Uu(e)) && (r && (r += " "), r += t);
  return r;
}
function En(e) {
  return typeof e == "object" ? Y1(e) : e ?? "";
}
const pl = [...` 	
\r\f \v\uFEFF`];
function W1(e, t, n) {
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
function K1(e, t) {
  if (t) {
    var n = "", r, o;
    if (Array.isArray(t) ? (r = t[0], o = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, a = 0, s = !1, l = [];
      r && l.push(...Object.keys(r).map(Oa)), o && l.push(...Object.keys(o).map(Oa));
      var u = 0, c = -1;
      const b = e.length;
      for (var d = 0; d < b; d++) {
        var p = e[d];
        if (s ? p === "/" && e[d - 1] === "*" && (s = !1) : i ? i === p && (i = !1) : p === "/" && e[d + 1] === "*" ? s = !0 : p === '"' || p === "'" ? i = p : p === "(" ? a++ : p === ")" && a--, !s && i === !1 && a === 0) {
          if (p === ":" && c === -1)
            c = d;
          else if (p === ";" || d === b - 1) {
            if (c !== -1) {
              var v = Oa(e.substring(u, c).trim());
              if (!l.includes(v)) {
                p !== ";" && d++;
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
function Dt(e, t, n, r, o, i) {
  var a = e.__className;
  if (Ae || a !== n || a === void 0) {
    var s = W1(n, r, i);
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
    var i = K1(t, r);
    (!Ae || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (Ha(e, n == null ? void 0 : n[0], r[0]), Ha(e, n == null ? void 0 : n[1], r[1], "important")) : Ha(e, n, r));
  return r;
}
const Co = Symbol("class"), $r = Symbol("style"), Ju = Symbol("is custom element"), Qu = Symbol("is html");
function ur(e) {
  if (Ae) {
    var t = !1, n = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var r = e.value;
          Ee(e, "value", null), e.value = r;
        }
        if (e.hasAttribute("checked")) {
          var o = e.checked;
          Ee(e, "checked", null), e.checked = o;
        }
      }
    };
    e.__on_r = n, h1(n), z1();
  }
}
function bi(e, t) {
  var n = da(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function F1(e, t) {
  var n = da(e);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  t ?? void 0) && (e.checked = t);
}
function G1(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function Ee(e, t, n, r) {
  var o = da(e);
  Ae && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[Qf] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && ec(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function sn(e, t, n, r, o = !1) {
  var i = da(e), a = i[Ju], s = !i[Qu];
  let l = Ae && a;
  l && nn(!1);
  var u = t || {}, c = e.tagName === "OPTION";
  for (var d in t)
    d in n || (n[d] = null);
  n.class ? n.class = En(n.class) : (r || n[Co]) && (n.class = null), n[$r] && (n.style ?? (n.style = null));
  var p = ec(e);
  for (const _ in n) {
    let w = n[_];
    if (c && _ === "value" && w == null) {
      e.value = e.__value = "", u[_] = w;
      continue;
    }
    if (_ === "class") {
      var v = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Dt(e, v, w, r, t == null ? void 0 : t[Co], n[Co]), u[_] = w, u[Co] = n[Co];
      continue;
    }
    if (_ === "style") {
      $t(e, w, t == null ? void 0 : t[$r], n[$r]), u[_] = w, u[$r] = n[$r];
      continue;
    }
    var h = u[_];
    if (w !== h) {
      u[_] = w;
      var b = _[0] + _[1];
      if (b !== "$$")
        if (b === "on") {
          const k = {}, V = "$$" + _;
          let E = _.slice(2);
          var x = M1(E);
          if (E1(E) && (E = E.slice(0, -7), k.capture = !0), !x && h) {
            if (w != null) continue;
            e.removeEventListener(E, u[V], k), u[V] = null;
          }
          if (w != null)
            if (x)
              e[`__${E}`] = w, go([E]);
            else {
              let H = function(N) {
                u[_].call(this, N);
              };
              u[V] = Yu(E, e, H, k);
            }
          else x && (e[`__${E}`] = void 0);
        } else if (_ === "style")
          Ee(e, _, w);
        else if (_ === "autofocus")
          L1(
            /** @type {HTMLElement} */
            e,
            !!w
          );
        else if (!a && (_ === "__value" || _ === "value" && w != null))
          e.value = e.__value = w;
        else if (_ === "selected" && c)
          G1(
            /** @type {HTMLOptionElement} */
            e,
            w
          );
        else {
          var C = _;
          s || (C = V1(C));
          var g = C === "defaultValue" || C === "defaultChecked";
          if (w == null && !a && !g)
            if (i[_] = null, C === "value" || C === "checked") {
              let k = (
                /** @type {HTMLInputElement} */
                e
              );
              const V = t === void 0;
              if (C === "value") {
                let E = k.defaultValue;
                k.removeAttribute(C), k.defaultValue = E, k.value = k.__value = V ? E : null;
              } else {
                let E = k.defaultChecked;
                k.removeAttribute(C), k.defaultChecked = E, k.checked = V ? E : !1;
              }
            } else
              e.removeAttribute(_);
          else g || p.includes(C) && (a || typeof w != "string") ? e[C] = w : typeof w != "function" && Ee(e, C, w);
        }
    }
  }
  return l && nn(!0), u;
}
function da(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Ju]: e.nodeName.includes("-"),
      [Qu]: e.namespaceURI === Bf
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
    Zr(this, Ua), Zr(this, Cr, /* @__PURE__ */ new WeakMap()), Zr(this, Oo), Zr(this, xi), Mi(this, xi, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var r = wt(this, Cr).get(t) || /* @__PURE__ */ new Set();
    return r.add(n), wt(this, Cr).set(t, r), Hf(this, Ua, tc).call(this).observe(t, wt(this, xi)), () => {
      var o = wt(this, Cr).get(t);
      o.delete(n), o.size === 0 && (wt(this, Cr).delete(t), wt(this, Oo).unobserve(t));
    };
  }
};
Cr = /* @__PURE__ */ new WeakMap(), Oo = /* @__PURE__ */ new WeakMap(), xi = /* @__PURE__ */ new WeakMap(), Ua = /* @__PURE__ */ new WeakSet(), tc = function() {
  return wt(this, Oo) ?? Mi(this, Oo, new ResizeObserver(
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
let U1 = Ja;
var J1 = /* @__PURE__ */ new U1({
  box: "border-box"
});
function ml(e, t, n) {
  var r = J1.observe(e, () => n(e[t]));
  tn(() => (Dn(() => n(e[t])), r));
}
function yl(e, t) {
  return e === t || (e == null ? void 0 : e[lr]) === t;
}
function zn(e = {}, t, n, r) {
  return tn(() => {
    var o, i;
    return fo(() => {
      o = i, i = [], Dn(() => {
        e !== n(...i) && (t(e, ...i), o && yl(n(...o), e) && t(null, ...o));
      });
    }), () => {
      Fo(() => {
        i && yl(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function Xe(e = !1) {
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
  n.b.length && d1(() => {
    wl(t, r), To(n.b);
  }), xn(() => {
    const o = Dn(() => n.m.map(Ff));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && xn(() => {
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
function hn(e) {
  Qe === null && ra(), uo && Qe.l !== null ? ev(Qe).m.push(e) : xn(() => {
    const t = Dn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Ns(e) {
  Qe === null && ra(), hn(() => () => Dn(e));
}
function Q1(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
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
      const a = Ko(i) ? i.slice() : [i], s = Q1(
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
function ev(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
function Ls(e, t, n) {
  if (e == null)
    return t(void 0), n && n(void 0), Et;
  const r = Dn(
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
    subscribe: Pe(e, t).subscribe
  };
}
function Pe(e, t = Et) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function o(s) {
    if (Ss(e, s) && (e = s, n)) {
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
  function a(s, l = Et) {
    const u = [s, l];
    return r.add(u), r.size === 1 && (n = t(o, i) || Et), s(
      /** @type {T} */
      e
    ), () => {
      r.delete(u), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: o, update: i, subscribe: a };
}
function cr(e, t, n) {
  const r = !Array.isArray(e), o = r ? [e] : e;
  if (!o.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const i = t.length < 2;
  return cn(n, (a, s) => {
    let l = !1;
    const u = [];
    let c = 0, d = Et;
    const p = () => {
      if (c)
        return;
      d();
      const h = t(r ? u[0] : u, a, s);
      i ? a(h) : d = typeof h == "function" ? h : Et;
    }, v = o.map(
      (h, b) => Ls(
        h,
        (x) => {
          u[b] = x, c &= ~(1 << b), l && p();
        },
        () => {
          c |= 1 << b;
        }
      )
    );
    return l = !0, p(), function() {
      To(v), d(), l = !1;
    };
  });
}
function G(e) {
  let t;
  return Ls(e, (n) => t = n)(), t;
}
let fi = !1, Qa = Symbol();
function oe(e, t, n) {
  const r = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ se(void 0),
    unsubscribe: Et
  });
  if (r.store !== e && !(Qa in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = Et;
    else {
      var o = !0;
      r.unsubscribe = Ls(e, (i) => {
        o ? r.source.v = i : ee(r.source, i);
      }), o = !1;
    }
  return e && Qa in n ? G(e) : f(r.source);
}
function tv(e, t, n) {
  let r = n[t];
  return r && r.store !== e && (r.unsubscribe(), r.unsubscribe = Et), e;
}
function Di(e, t) {
  return e.set(t), t;
}
function vt() {
  const e = {};
  function t() {
    Ps(() => {
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
function nv(e) {
  var t = fi;
  try {
    return fi = !1, [e(), fi];
  } finally {
    fi = t;
  }
}
const rv = {
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
    rv
  );
}
const ov = {
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
  return new Proxy({ props: e, exclude: t, special: {}, version: Jr(0) }, ov);
}
const iv = {
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
      const i = Xn(o, t);
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
        const o = Xn(r, t);
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
  return new Proxy({ props: e }, iv);
}
function bl(e) {
  var t;
  return ((t = e.ctx) == null ? void 0 : t.d) ?? !1;
}
function y(e, t, n, r) {
  var o, i = (n & Af) !== 0, a = !uo || (n & If) !== 0, s = (n & Rf) !== 0, l = (n & qf) !== 0, u = !1, c;
  s ? [c, u] = nv(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var d = lr in e || ks in e, p = s && (((o = Xn(e, t)) == null ? void 0 : o.set) ?? (d && t in e && ((E) => e[t] = E))) || void 0, v = (
    /** @type {V} */
    r
  ), h = !0, b = !1, x = () => (b = !0, h && (h = !1, l ? v = Dn(
    /** @type {() => V} */
    r
  ) : v = /** @type {V} */
  r), v);
  c === void 0 && r !== void 0 && (p && a && i1(), c = x(), p && p(c));
  var C;
  if (a)
    C = () => {
      var E = (
        /** @type {V} */
        e[t]
      );
      return E === void 0 ? x() : (h = !0, b = !1, E);
    };
  else {
    var g = (i ? Gr : _e)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    g.f |= Uf, C = () => {
      var E = f(g);
      return E !== void 0 && (v = /** @type {V} */
      void 0), E === void 0 ? v : E;
    };
  }
  if ((n & mu) === 0)
    return C;
  if (p) {
    var _ = e.$$legacy;
    return function(E, H) {
      return arguments.length > 0 ? ((!a || !H || _ || u) && p(H ? C() : E), E) : C();
    };
  }
  var w = !1, k = /* @__PURE__ */ se(c), V = /* @__PURE__ */ Gr(() => {
    var E = C(), H = f(k);
    return w ? (w = !1, H) : k.v = E;
  });
  return s && f(V), i || (V.equals = Ms), function(E, H) {
    if (arguments.length > 0) {
      const N = H ? f(V) : a && s ? wn(E) : E;
      if (!V.equals(N)) {
        if (w = !0, ee(k, N), b && v !== void 0 && (v = N), bl(V))
          return E;
        Dn(() => f(V));
      }
      return E;
    }
    return bl(V) ? V.v : f(V);
  };
}
function av(e) {
  return new sv(e);
}
var rr, mn;
class sv {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    Zr(this, rr), Zr(this, mn);
    var n, r = /* @__PURE__ */ new Map(), o = (a, s) => {
      var l = /* @__PURE__ */ se(s);
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
    Mi(this, mn, (t.hydrate ? I1 : Wu)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((n = t == null ? void 0 : t.props) != null && n.$$host) || t.sync === !1) && m(), Mi(this, rr, i.$$events);
    for (const a of Object.keys(wt(this, mn)))
      a === "$set" || a === "$destroy" || a === "$on" || Ho(this, a, {
        get() {
          return wt(this, mn)[a];
        },
        /** @param {any} value */
        set(s) {
          wt(this, mn)[a] = s;
        },
        enumerable: !0
      });
    wt(this, mn).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(i, a);
    }, wt(this, mn).$destroy = () => {
      R1(wt(this, mn));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    wt(this, mn).$set(t);
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
    wt(this, mn).$destroy();
  }
}
rr = /* @__PURE__ */ new WeakMap(), mn = /* @__PURE__ */ new WeakMap();
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
      const t = {}, n = lv(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = $i(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = av({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = f1(() => {
        fo(() => {
          var r;
          this.$$r = !0;
          for (const o of Pi(this.$$c)) {
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
    return Pi(this.$$p_d).find(
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
function lv(e) {
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
      return Pi(t).map(
        (s) => (t[s].attribute || s).toLowerCase()
      );
    }
  };
  return Pi(t).forEach((s) => {
    Ho(a.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(l) {
        var u;
        l = $i(s, l, t), this.$$d[s] = l;
        var c = this.$$c;
        if (c) {
          var d = (u = Xn(c, s)) == null ? void 0 : u.get;
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
var uv = { value: () => {
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
function cv(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Ci.prototype = va.prototype = {
  constructor: Ci,
  on: function(e, t) {
    var n = this._, r = cv(e + "", n), o, i = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++i < a; ) if ((o = (e = r[i]).type) && (o = dv(n[o], e.name))) return o;
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
function dv(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function xl(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = uv, e = e.slice(0, r).concat(e.slice(r + 1));
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
function fv(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === es && t.documentElement.namespaceURI === es ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function vv(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function rc(e) {
  var t = pa(e);
  return (t.local ? vv : fv)(t);
}
function pv() {
}
function Ds(e) {
  return e == null ? pv : function() {
    return this.querySelector(e);
  };
}
function gv(e) {
  typeof e != "function" && (e = Ds(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = new Array(a), l, u, c = 0; c < a; ++c)
      (l = i[c]) && (u = e.call(l, l.__data__, c, i)) && ("__data__" in l && (u.__data__ = l.__data__), s[c] = u);
  return new ln(r, this._parents);
}
function hv(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function mv() {
  return [];
}
function oc(e) {
  return e == null ? mv : function() {
    return this.querySelectorAll(e);
  };
}
function yv(e) {
  return function() {
    return hv(e.apply(this, arguments));
  };
}
function wv(e) {
  typeof e == "function" ? e = yv(e) : e = oc(e);
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
var bv = Array.prototype.find;
function xv(e) {
  return function() {
    return bv.call(this.children, e);
  };
}
function $v() {
  return this.firstElementChild;
}
function Cv(e) {
  return this.select(e == null ? $v : xv(typeof e == "function" ? e : ac(e)));
}
var _v = Array.prototype.filter;
function kv() {
  return Array.from(this.children);
}
function Ev(e) {
  return function() {
    return _v.call(this.children, e);
  };
}
function Sv(e) {
  return this.selectAll(e == null ? kv : Ev(typeof e == "function" ? e : ac(e)));
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
function Pv() {
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
function Vv(e) {
  return function() {
    return e;
  };
}
function Ov(e, t, n, r, o, i) {
  for (var a = 0, s, l = t.length, u = i.length; a < u; ++a)
    (s = t[a]) ? (s.__data__ = i[a], r[a] = s) : n[a] = new zi(e, i[a]);
  for (; a < l; ++a)
    (s = t[a]) && (o[a] = s);
}
function Hv(e, t, n, r, o, i, a) {
  var s, l, u = /* @__PURE__ */ new Map(), c = t.length, d = i.length, p = new Array(c), v;
  for (s = 0; s < c; ++s)
    (l = t[s]) && (p[s] = v = a.call(l, l.__data__, s, t) + "", u.has(v) ? o[s] = l : u.set(v, l));
  for (s = 0; s < d; ++s)
    v = a.call(e, i[s], s, i) + "", (l = u.get(v)) ? (r[s] = l, l.__data__ = i[s], u.delete(v)) : n[s] = new zi(e, i[s]);
  for (s = 0; s < c; ++s)
    (l = t[s]) && u.get(p[s]) === l && (o[s] = l);
}
function Tv(e) {
  return e.__data__;
}
function Nv(e, t) {
  if (!arguments.length) return Array.from(this, Tv);
  var n = t ? Hv : Ov, r = this._parents, o = this._groups;
  typeof e != "function" && (e = Vv(e));
  for (var i = o.length, a = new Array(i), s = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var c = r[u], d = o[u], p = d.length, v = Lv(e.call(c, c && c.__data__, u, r)), h = v.length, b = s[u] = new Array(h), x = a[u] = new Array(h), C = l[u] = new Array(p);
    n(c, d, b, x, C, v, t);
    for (var g = 0, _ = 0, w, k; g < h; ++g)
      if (w = b[g]) {
        for (g >= _ && (_ = g + 1); !(k = x[_]) && ++_ < h; ) ;
        w._next = k || null;
      }
  }
  return a = new ln(a, r), a._enter = s, a._exit = l, a;
}
function Lv(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Dv() {
  return new ln(this._exit || this._groups.map(sc), this._parents);
}
function zv(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function Av(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, a = Math.min(o, i), s = new Array(o), l = 0; l < a; ++l)
    for (var u = n[l], c = r[l], d = u.length, p = s[l] = new Array(d), v, h = 0; h < d; ++h)
      (v = u[h] || c[h]) && (p[h] = v);
  for (; l < o; ++l)
    s[l] = n[l];
  return new ln(s, this._parents);
}
function Iv() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], a; --o >= 0; )
      (a = r[o]) && (i && a.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(a, i), i = a);
  return this;
}
function Rv(e) {
  e || (e = qv);
  function t(d, p) {
    return d && p ? e(d.__data__, p.__data__) : !d - !p;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var a = n[i], s = a.length, l = o[i] = new Array(s), u, c = 0; c < s; ++c)
      (u = a[c]) && (l[c] = u);
    l.sort(t);
  }
  return new ln(o, this._parents).order();
}
function qv(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Zv() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Bv() {
  return Array.from(this);
}
function jv() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var a = r[o];
      if (a) return a;
    }
  return null;
}
function Xv() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function Yv() {
  return !this.node();
}
function Wv(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, a = o.length, s; i < a; ++i)
      (s = o[i]) && e.call(s, s.__data__, i, o);
  return this;
}
function Kv(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Fv(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Gv(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function Uv(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function Jv(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function Qv(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function ep(e, t) {
  var n = pa(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? Fv : Kv : typeof t == "function" ? n.local ? Qv : Jv : n.local ? Uv : Gv)(n, t));
}
function lc(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function tp(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function np(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function rp(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function op(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? tp : typeof t == "function" ? rp : np)(e, t, n ?? "")) : to(this.node(), e);
}
function to(e, t) {
  return e.style.getPropertyValue(t) || lc(e).getComputedStyle(e, null).getPropertyValue(t);
}
function ip(e) {
  return function() {
    delete this[e];
  };
}
function ap(e, t) {
  return function() {
    this[e] = t;
  };
}
function sp(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function lp(e, t) {
  return arguments.length > 1 ? this.each((t == null ? ip : typeof t == "function" ? sp : ap)(e, t)) : this.node()[e];
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
function up(e) {
  return function() {
    dc(this, e);
  };
}
function cp(e) {
  return function() {
    fc(this, e);
  };
}
function dp(e, t) {
  return function() {
    (t.apply(this, arguments) ? dc : fc)(this, e);
  };
}
function fp(e, t) {
  var n = uc(e + "");
  if (arguments.length < 2) {
    for (var r = zs(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? dp : t ? up : cp)(n, t));
}
function vp() {
  this.textContent = "";
}
function pp(e) {
  return function() {
    this.textContent = e;
  };
}
function gp(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function hp(e) {
  return arguments.length ? this.each(e == null ? vp : (typeof e == "function" ? gp : pp)(e)) : this.node().textContent;
}
function mp() {
  this.innerHTML = "";
}
function yp(e) {
  return function() {
    this.innerHTML = e;
  };
}
function wp(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function bp(e) {
  return arguments.length ? this.each(e == null ? mp : (typeof e == "function" ? wp : yp)(e)) : this.node().innerHTML;
}
function xp() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function $p() {
  return this.each(xp);
}
function Cp() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function _p() {
  return this.each(Cp);
}
function kp(e) {
  var t = typeof e == "function" ? e : rc(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function Ep() {
  return null;
}
function Sp(e, t) {
  var n = typeof e == "function" ? e : rc(e), r = t == null ? Ep : typeof t == "function" ? t : Ds(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Mp() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Pp() {
  return this.each(Mp);
}
function Vp() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Op() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Hp(e) {
  return this.select(e ? Op : Vp);
}
function Tp(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Np(e) {
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
function Dp(e) {
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
    var r = this.__on, o, i = Np(t);
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
function Ap(e, t, n) {
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
  for (s = t ? zp : Dp, o = 0; o < i; ++o) this.each(s(r[o], t, n));
  return this;
}
function vc(e, t, n) {
  var r = lc(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function Ip(e, t) {
  return function() {
    return vc(this, e, t);
  };
}
function Rp(e, t) {
  return function() {
    return vc(this, e, t.apply(this, arguments));
  };
}
function qp(e, t) {
  return this.each((typeof t == "function" ? Rp : Ip)(e, t));
}
function* Zp() {
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
function Bp() {
  return this;
}
ln.prototype = Uo.prototype = {
  constructor: ln,
  select: gv,
  selectAll: wv,
  selectChild: Cv,
  selectChildren: Sv,
  filter: Mv,
  data: Nv,
  enter: Pv,
  exit: Dv,
  join: zv,
  merge: Av,
  selection: Bp,
  order: Iv,
  sort: Rv,
  call: Zv,
  nodes: Bv,
  node: jv,
  size: Xv,
  empty: Yv,
  each: Wv,
  attr: ep,
  style: op,
  property: lp,
  classed: fp,
  text: hp,
  html: bp,
  raise: $p,
  lower: _p,
  append: kp,
  insert: Sp,
  remove: Pp,
  clone: Hp,
  datum: Tp,
  on: Ap,
  dispatch: qp,
  [Symbol.iterator]: Zp
};
function fn(e) {
  return typeof e == "string" ? new ln([[document.querySelector(e)]], [document.documentElement]) : new ln([[e]], pc);
}
function jp(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function yn(e, t) {
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
const Xp = { passive: !1 }, Ao = { capture: !0, passive: !1 };
function Ta(e) {
  e.stopImmediatePropagation();
}
function Xr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function gc(e) {
  var t = e.document.documentElement, n = fn(e).on("dragstart.drag", Xr, Ao);
  "onselectstart" in t ? n.on("selectstart.drag", Xr, Ao) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function hc(e, t) {
  var n = e.document.documentElement, r = fn(e).on("dragstart.drag", null);
  t && (r.on("click.drag", Xr, Ao), setTimeout(function() {
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
function Yp(e) {
  return !e.ctrlKey && !e.button;
}
function Wp() {
  return this.parentNode;
}
function Kp(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Fp() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Gp() {
  var e = Yp, t = Wp, n = Kp, r = Fp, o = {}, i = va("start", "drag", "end"), a = 0, s, l, u, c, d = 0;
  function p(w) {
    w.on("mousedown.drag", v).filter(r).on("touchstart.drag", x).on("touchmove.drag", C, Xp).on("touchend.drag touchcancel.drag", g).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function v(w, k) {
    if (!(c || !e.call(this, w, k))) {
      var V = _(this, t.call(this, w, k), w, k, "mouse");
      V && (fn(w.view).on("mousemove.drag", h, Ao).on("mouseup.drag", b, Ao), gc(w.view), Ta(w), u = !1, s = w.clientX, l = w.clientY, V("start", w));
    }
  }
  function h(w) {
    if (Xr(w), !u) {
      var k = w.clientX - s, V = w.clientY - l;
      u = k * k + V * V > d;
    }
    o.mouse("drag", w);
  }
  function b(w) {
    fn(w.view).on("mousemove.drag mouseup.drag", null), hc(w.view, u), Xr(w), o.mouse("end", w);
  }
  function x(w, k) {
    if (e.call(this, w, k)) {
      var V = w.changedTouches, E = t.call(this, w, k), H = V.length, N, I;
      for (N = 0; N < H; ++N)
        (I = _(this, E, w, k, V[N].identifier, V[N])) && (Ta(w), I("start", w, V[N]));
    }
  }
  function C(w) {
    var k = w.changedTouches, V = k.length, E, H;
    for (E = 0; E < V; ++E)
      (H = o[k[E].identifier]) && (Xr(w), H("drag", w, k[E]));
  }
  function g(w) {
    var k = w.changedTouches, V = k.length, E, H;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), E = 0; E < V; ++E)
      (H = o[k[E].identifier]) && (Ta(w), H("end", w, k[E]));
  }
  function _(w, k, V, E, H, N) {
    var I = i.copy(), R = yn(N || V, k), L, B, S;
    if ((S = n.call(w, new ts("beforestart", {
      sourceEvent: V,
      target: p,
      identifier: H,
      active: a,
      x: R[0],
      y: R[1],
      dx: 0,
      dy: 0,
      dispatch: I
    }), E)) != null)
      return L = S.x - R[0] || 0, B = S.y - R[1] || 0, function $(M, T, P) {
        var O = R, A;
        switch (M) {
          case "start":
            o[H] = $, A = a++;
            break;
          case "end":
            delete o[H], --a;
          // falls through
          case "drag":
            R = yn(P || T, k), A = a;
            break;
        }
        I.call(
          M,
          w,
          new ts(M, {
            sourceEvent: T,
            subject: S,
            target: p,
            identifier: H,
            active: A,
            x: R[0] + L,
            y: R[1] + B,
            dx: R[0] - O[0],
            dy: R[1] - O[1],
            dispatch: I
          }),
          E
        );
      };
  }
  return p.filter = function(w) {
    return arguments.length ? (e = typeof w == "function" ? w : vi(!!w), p) : e;
  }, p.container = function(w) {
    return arguments.length ? (t = typeof w == "function" ? w : vi(w), p) : t;
  }, p.subject = function(w) {
    return arguments.length ? (n = typeof w == "function" ? w : vi(w), p) : n;
  }, p.touchable = function(w) {
    return arguments.length ? (r = typeof w == "function" ? w : vi(!!w), p) : r;
  }, p.on = function() {
    var w = i.on.apply(i, arguments);
    return w === i ? p : w;
  }, p.clickDistance = function(w) {
    return arguments.length ? (d = (w = +w) * w, p) : Math.sqrt(d);
  }, p;
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
var Io = 0.7, Ai = 1 / Io, Yr = "\\s*([+-]?\\d+)\\s*", Ro = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", On = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Up = /^#([0-9a-f]{3,8})$/, Jp = new RegExp(`^rgb\\(${Yr},${Yr},${Yr}\\)$`), Qp = new RegExp(`^rgb\\(${On},${On},${On}\\)$`), eg = new RegExp(`^rgba\\(${Yr},${Yr},${Yr},${Ro}\\)$`), tg = new RegExp(`^rgba\\(${On},${On},${On},${Ro}\\)$`), ng = new RegExp(`^hsl\\(${Ro},${On},${On}\\)$`), rg = new RegExp(`^hsla\\(${Ro},${On},${On},${Ro}\\)$`), Cl = {
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
  formatHex8: og,
  formatHsl: ig,
  formatRgb: kl,
  toString: kl
});
function _l() {
  return this.rgb().formatHex();
}
function og() {
  return this.rgb().formatHex8();
}
function ig() {
  return yc(this).formatHsl();
}
function kl() {
  return this.rgb().formatRgb();
}
function qo(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Up.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? El(t) : n === 3 ? new Gt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? pi(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? pi(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Jp.exec(e)) ? new Gt(t[1], t[2], t[3], 1) : (t = Qp.exec(e)) ? new Gt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = eg.exec(e)) ? pi(t[1], t[2], t[3], t[4]) : (t = tg.exec(e)) ? pi(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = ng.exec(e)) ? Pl(t[1], t[2] / 100, t[3] / 100, 1) : (t = rg.exec(e)) ? Pl(t[1], t[2] / 100, t[3] / 100, t[4]) : Cl.hasOwnProperty(e) ? El(Cl[e]) : e === "transparent" ? new Gt(NaN, NaN, NaN, 0) : null;
}
function El(e) {
  return new Gt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function pi(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Gt(e, t, n, r);
}
function ag(e) {
  return e instanceof Jo || (e = qo(e)), e ? (e = e.rgb(), new Gt(e.r, e.g, e.b, e.opacity)) : new Gt();
}
function ns(e, t, n, r) {
  return arguments.length === 1 ? ag(e) : new Gt(e, t, n, r ?? 1);
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
    return new Gt(Er(this.r), Er(this.g), Er(this.b), Ii(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Sl,
  // Deprecated! Use color.formatHex.
  formatHex: Sl,
  formatHex8: sg,
  formatRgb: Ml,
  toString: Ml
}));
function Sl() {
  return `#${_r(this.r)}${_r(this.g)}${_r(this.b)}`;
}
function sg() {
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
function Pl(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new bn(e, t, n, r);
}
function yc(e) {
  if (e instanceof bn) return new bn(e.h, e.s, e.l, e.opacity);
  if (e instanceof Jo || (e = qo(e)), !e) return new bn();
  if (e instanceof bn) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), a = NaN, s = i - o, l = (i + o) / 2;
  return s ? (t === i ? a = (n - r) / s + (n < r) * 6 : n === i ? a = (r - t) / s + 2 : a = (t - n) / s + 4, s /= l < 0.5 ? i + o : 2 - i - o, a *= 60) : s = l > 0 && l < 1 ? 0 : a, new bn(a, s, l, e.opacity);
}
function lg(e, t, n, r) {
  return arguments.length === 1 ? yc(e) : new bn(e, t, n, r ?? 1);
}
function bn(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
As(bn, lg, mc(Jo, {
  brighter(e) {
    return e = e == null ? Ai : Math.pow(Ai, e), new bn(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Io : Math.pow(Io, e), new bn(this.h, this.s, this.l * e, this.opacity);
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
    return new bn(Vl(this.h), gi(this.s), gi(this.l), Ii(this.opacity));
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
function ug(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function cg(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function dg(e) {
  return (e = +e) == 1 ? bc : function(t, n) {
    return n - t ? cg(t, n, e) : wc(isNaN(t) ? n : t);
  };
}
function bc(e, t) {
  var n = t - e;
  return n ? ug(e, n) : wc(isNaN(e) ? t : e);
}
const Ol = function e(t) {
  var n = dg(t);
  function r(o, i) {
    var a = n((o = ns(o)).r, (i = ns(i)).r), s = n(o.g, i.g), l = n(o.b, i.b), u = bc(o.opacity, i.opacity);
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
var rs = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, La = new RegExp(rs.source, "g");
function fg(e) {
  return function() {
    return e;
  };
}
function vg(e) {
  return function(t) {
    return e(t) + "";
  };
}
function pg(e, t) {
  var n = rs.lastIndex = La.lastIndex = 0, r, o, i, a = -1, s = [], l = [];
  for (e = e + "", t = t + ""; (r = rs.exec(e)) && (o = La.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), s[a] ? s[a] += i : s[++a] = i), (r = r[0]) === (o = o[0]) ? s[a] ? s[a] += o : s[++a] = o : (s[++a] = null, l.push({ i: a, x: ir(r, o) })), n = La.lastIndex;
  return n < t.length && (i = t.slice(n), s[a] ? s[a] += i : s[++a] = i), s.length < 2 ? l[0] ? vg(l[0].x) : fg(t) : (t = l.length, function(u) {
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
function gg(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? xc : $c(t.a, t.b, t.c, t.d, t.e, t.f);
}
function hg(e) {
  return e == null || (hi || (hi = document.createElementNS("http://www.w3.org/2000/svg", "g")), hi.setAttribute("transform", e), !(e = hi.transform.baseVal.consolidate())) ? xc : (e = e.matrix, $c(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Cc(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, c, d, p, v, h) {
    if (u !== d || c !== p) {
      var b = v.push("translate(", null, t, null, n);
      h.push({ i: b - 4, x: ir(u, d) }, { i: b - 2, x: ir(c, p) });
    } else (d || p) && v.push("translate(" + d + t + p + n);
  }
  function a(u, c, d, p) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), p.push({ i: d.push(o(d) + "rotate(", null, r) - 2, x: ir(u, c) })) : c && d.push(o(d) + "rotate(" + c + r);
  }
  function s(u, c, d, p) {
    u !== c ? p.push({ i: d.push(o(d) + "skewX(", null, r) - 2, x: ir(u, c) }) : c && d.push(o(d) + "skewX(" + c + r);
  }
  function l(u, c, d, p, v, h) {
    if (u !== d || c !== p) {
      var b = v.push(o(v) + "scale(", null, ",", null, ")");
      h.push({ i: b - 4, x: ir(u, d) }, { i: b - 2, x: ir(c, p) });
    } else (d !== 1 || p !== 1) && v.push(o(v) + "scale(" + d + "," + p + ")");
  }
  return function(u, c) {
    var d = [], p = [];
    return u = e(u), c = e(c), i(u.translateX, u.translateY, c.translateX, c.translateY, d, p), a(u.rotate, c.rotate, d, p), s(u.skewX, c.skewX, d, p), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, d, p), u = c = null, function(v) {
      for (var h = -1, b = p.length, x; ++h < b; ) d[(x = p[h]).i] = x.x(v);
      return d.join("");
    };
  };
}
var mg = Cc(gg, "px, ", "px)", "deg)"), yg = Cc(hg, ", ", ")", ")"), wg = 1e-12;
function Tl(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function bg(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function xg(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const $g = function e(t, n, r) {
  function o(i, a) {
    var s = i[0], l = i[1], u = i[2], c = a[0], d = a[1], p = a[2], v = c - s, h = d - l, b = v * v + h * h, x, C;
    if (b < wg)
      C = Math.log(p / u) / t, x = function(E) {
        return [
          s + E * v,
          l + E * h,
          u * Math.exp(t * E * C)
        ];
      };
    else {
      var g = Math.sqrt(b), _ = (p * p - u * u + r * b) / (2 * u * n * g), w = (p * p - u * u - r * b) / (2 * p * n * g), k = Math.log(Math.sqrt(_ * _ + 1) - _), V = Math.log(Math.sqrt(w * w + 1) - w);
      C = (V - k) / t, x = function(E) {
        var H = E * C, N = Tl(k), I = u / (n * g) * (N * xg(t * H + k) - bg(k));
        return [
          s + I * v,
          l + I * h,
          u * N / Tl(t * H + k)
        ];
      };
    }
    return x.duration = C * 1e3 * t / Math.SQRT2, x;
  }
  return o.rho = function(i) {
    var a = Math.max(1e-3, +i), s = a * a, l = s * s;
    return e(a, s, l);
  }, o;
}(Math.SQRT2, 2, 4);
var no = 0, So = 0, _o = 0, _c = 1e3, Ri, Mo, qi = 0, Vr = 0, ga = 0, Zo = typeof performance == "object" && performance.now ? performance : Date, kc = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Is() {
  return Vr || (kc(Cg), Vr = Zo.now() + ga);
}
function Cg() {
  Vr = 0;
}
function Zi() {
  this._call = this._time = this._next = null;
}
Zi.prototype = Ec.prototype = {
  constructor: Zi,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Is() : +n) + (t == null ? 0 : +t), !this._next && Mo !== this && (Mo ? Mo._next = this : Ri = this, Mo = this), this._call = e, this._time = n, os();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, os());
  }
};
function Ec(e, t, n) {
  var r = new Zi();
  return r.restart(e, t, n), r;
}
function _g() {
  Is(), ++no;
  for (var e = Ri, t; e; )
    (t = Vr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --no;
}
function Nl() {
  Vr = (qi = Zo.now()) + ga, no = So = 0;
  try {
    _g();
  } finally {
    no = 0, Eg(), Vr = 0;
  }
}
function kg() {
  var e = Zo.now(), t = e - qi;
  t > _c && (ga -= t, qi = e);
}
function Eg() {
  for (var e, t = Ri, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Ri = n);
  Mo = e, os(r);
}
function os(e) {
  if (!no) {
    So && (So = clearTimeout(So));
    var t = e - Vr;
    t > 24 ? (e < 1 / 0 && (So = setTimeout(Nl, e - Zo.now() - ga)), _o && (_o = clearInterval(_o))) : (_o || (qi = Zo.now(), _o = setInterval(kg, _c)), no = 1, kc(Nl));
  }
}
function Ll(e, t, n) {
  var r = new Zi();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var Sg = va("start", "end", "cancel", "interrupt"), Mg = [], Sc = 0, Dl = 1, is = 2, _i = 3, zl = 4, as = 5, ki = 6;
function ha(e, t, n, r, o, i) {
  var a = e.__transition;
  if (!a) e.__transition = {};
  else if (n in a) return;
  Pg(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: Sg,
    tween: Mg,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: Sc
  });
}
function Rs(e, t) {
  var n = Sn(e, t);
  if (n.state > Sc) throw new Error("too late; already scheduled");
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
function Pg(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = Ec(i, 0, n.time);
  function i(u) {
    n.state = Dl, n.timer.restart(a, n.delay, n.time), n.delay <= u && a(u - n.delay);
  }
  function a(u) {
    var c, d, p, v;
    if (n.state !== Dl) return l();
    for (c in r)
      if (v = r[c], v.name === n.name) {
        if (v.state === _i) return Ll(a);
        v.state === zl ? (v.state = ki, v.timer.stop(), v.on.call("interrupt", e, e.__data__, v.index, v.group), delete r[c]) : +c < t && (v.state = ki, v.timer.stop(), v.on.call("cancel", e, e.__data__, v.index, v.group), delete r[c]);
      }
    if (Ll(function() {
      n.state === _i && (n.state = zl, n.timer.restart(s, n.delay, n.time), s(u));
    }), n.state = is, n.on.call("start", e, e.__data__, n.index, n.group), n.state === is) {
      for (n.state = _i, o = new Array(p = n.tween.length), c = 0, d = -1; c < p; ++c)
        (v = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (o[++d] = v);
      o.length = d + 1;
    }
  }
  function s(u) {
    for (var c = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = as, 1), d = -1, p = o.length; ++d < p; )
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
function Vg(e) {
  return this.each(function() {
    Ei(this, e);
  });
}
function Og(e, t) {
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
function Tg(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = Sn(this.node(), n).tween, o = 0, i = r.length, a; o < i; ++o)
      if ((a = r[o]).name === e)
        return a.value;
    return null;
  }
  return this.each((t == null ? Og : Hg)(n, e, t));
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
  return (typeof t == "number" ? ir : t instanceof qo ? Ol : (n = qo(t)) ? (t = n, Ol) : pg)(e, t);
}
function Ng(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Lg(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Dg(e, t, n) {
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
function Ag(e, t, n) {
  var r, o, i;
  return function() {
    var a, s = n(this), l;
    return s == null ? void this.removeAttribute(e) : (a = this.getAttribute(e), l = s + "", a === l ? null : a === r && l === o ? i : (o = l, i = t(r = a, s)));
  };
}
function Ig(e, t, n) {
  var r, o, i;
  return function() {
    var a, s = n(this), l;
    return s == null ? void this.removeAttributeNS(e.space, e.local) : (a = this.getAttributeNS(e.space, e.local), l = s + "", a === l ? null : a === r && l === o ? i : (o = l, i = t(r = a, s)));
  };
}
function Rg(e, t) {
  var n = pa(e), r = n === "transform" ? yg : Mc;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Ig : Ag)(n, r, qs(this, "attr." + e, t)) : t == null ? (n.local ? Lg : Ng)(n) : (n.local ? zg : Dg)(n, r, t));
}
function qg(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function Zg(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function Bg(e, t) {
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
    return i !== r && (n = (r = i) && qg(e, i)), n;
  }
  return o._value = t, o;
}
function Xg(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = pa(e);
  return this.tween(n, (r.local ? Bg : jg)(r, t));
}
function Yg(e, t) {
  return function() {
    Rs(this, e).delay = +t.apply(this, arguments);
  };
}
function Wg(e, t) {
  return t = +t, function() {
    Rs(this, e).delay = t;
  };
}
function Kg(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Yg : Wg)(t, e)) : Sn(this.node(), t).delay;
}
function Fg(e, t) {
  return function() {
    Rn(this, e).duration = +t.apply(this, arguments);
  };
}
function Gg(e, t) {
  return t = +t, function() {
    Rn(this, e).duration = t;
  };
}
function Ug(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Fg : Gg)(t, e)) : Sn(this.node(), t).duration;
}
function Jg(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Rn(this, e).ease = t;
  };
}
function Qg(e) {
  var t = this._id;
  return arguments.length ? this.each(Jg(t, e)) : Sn(this.node(), t).ease;
}
function eh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Rn(this, e).ease = n;
  };
}
function th(e) {
  if (typeof e != "function") throw new Error();
  return this.each(eh(this._id, e));
}
function nh(e) {
  typeof e != "function" && (e = ic(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = [], l, u = 0; u < a; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && s.push(l);
  return new Fn(r, this._parents, this._name, this._id);
}
function rh(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), a = new Array(r), s = 0; s < i; ++s)
    for (var l = t[s], u = n[s], c = l.length, d = a[s] = new Array(c), p, v = 0; v < c; ++v)
      (p = l[v] || u[v]) && (d[v] = p);
  for (; s < r; ++s)
    a[s] = t[s];
  return new Fn(a, this._parents, this._name, this._id);
}
function oh(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function ih(e, t, n) {
  var r, o, i = oh(t) ? Rs : Rn;
  return function() {
    var a = i(this, e), s = a.on;
    s !== r && (o = (r = s).copy()).on(t, n), a.on = o;
  };
}
function ah(e, t) {
  var n = this._id;
  return arguments.length < 2 ? Sn(this.node(), n).on.on(e) : this.each(ih(n, e, t));
}
function sh(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function lh() {
  return this.on("end.remove", sh(this._id));
}
function uh(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Ds(e));
  for (var r = this._groups, o = r.length, i = new Array(o), a = 0; a < o; ++a)
    for (var s = r[a], l = s.length, u = i[a] = new Array(l), c, d, p = 0; p < l; ++p)
      (c = s[p]) && (d = e.call(c, c.__data__, p, s)) && ("__data__" in c && (d.__data__ = c.__data__), u[p] = d, ha(u[p], t, n, p, u, Sn(c, n)));
  return new Fn(i, this._parents, t, n);
}
function ch(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = oc(e));
  for (var r = this._groups, o = r.length, i = [], a = [], s = 0; s < o; ++s)
    for (var l = r[s], u = l.length, c, d = 0; d < u; ++d)
      if (c = l[d]) {
        for (var p = e.call(c, c.__data__, d, l), v, h = Sn(c, n), b = 0, x = p.length; b < x; ++b)
          (v = p[b]) && ha(v, t, n, b, p, h);
        i.push(p), a.push(c);
      }
  return new Fn(i, a, t, n);
}
var dh = Uo.prototype.constructor;
function fh() {
  return new dh(this._groups, this._parents);
}
function vh(e, t) {
  var n, r, o;
  return function() {
    var i = to(this, e), a = (this.style.removeProperty(e), to(this, e));
    return i === a ? null : i === n && a === r ? o : o = t(n = i, r = a);
  };
}
function Pc(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function ph(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var a = to(this, e);
    return a === o ? null : a === r ? i : i = t(r = a, n);
  };
}
function gh(e, t, n) {
  var r, o, i;
  return function() {
    var a = to(this, e), s = n(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(e), to(this, e))), a === l ? null : a === r && l === o ? i : (o = l, i = t(r = a, s));
  };
}
function hh(e, t) {
  var n, r, o, i = "style." + t, a = "end." + i, s;
  return function() {
    var l = Rn(this, e), u = l.on, c = l.value[i] == null ? s || (s = Pc(t)) : void 0;
    (u !== n || o !== c) && (r = (n = u).copy()).on(a, o = c), l.on = r;
  };
}
function mh(e, t, n) {
  var r = (e += "") == "transform" ? mg : Mc;
  return t == null ? this.styleTween(e, vh(e, r)).on("end.style." + e, Pc(e)) : typeof t == "function" ? this.styleTween(e, gh(e, r, qs(this, "style." + e, t))).each(hh(this._id, e)) : this.styleTween(e, ph(e, r, t), n).on("end.style." + e, null);
}
function yh(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function wh(e, t, n) {
  var r, o;
  function i() {
    var a = t.apply(this, arguments);
    return a !== o && (r = (o = a) && yh(e, a, n)), r;
  }
  return i._value = t, i;
}
function bh(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, wh(e, t, n ?? ""));
}
function xh(e) {
  return function() {
    this.textContent = e;
  };
}
function $h(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function Ch(e) {
  return this.tween("text", typeof e == "function" ? $h(qs(this, "text", e)) : xh(e == null ? "" : e + ""));
}
function _h(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function kh(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && _h(o)), t;
  }
  return r._value = e, r;
}
function Eh(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, kh(e));
}
function Sh() {
  for (var e = this._name, t = this._id, n = Vc(), r = this._groups, o = r.length, i = 0; i < o; ++i)
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
var Ph = 0;
function Fn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function Vc() {
  return ++Ph;
}
var Zn = Uo.prototype;
Fn.prototype = {
  constructor: Fn,
  select: uh,
  selectAll: ch,
  selectChild: Zn.selectChild,
  selectChildren: Zn.selectChildren,
  filter: nh,
  merge: rh,
  selection: fh,
  transition: Sh,
  call: Zn.call,
  nodes: Zn.nodes,
  node: Zn.node,
  size: Zn.size,
  empty: Zn.empty,
  each: Zn.each,
  on: ah,
  attr: Rg,
  attrTween: Xg,
  style: mh,
  styleTween: bh,
  text: Ch,
  textTween: Eh,
  remove: lh,
  tween: Tg,
  delay: Kg,
  duration: Ug,
  ease: Qg,
  easeVarying: th,
  end: Mh,
  [Symbol.iterator]: Zn[Symbol.iterator]
};
function Vh(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var Oh = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Vh
};
function Hh(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function Th(e) {
  var t, n;
  e instanceof Fn ? (t = e._id, e = e._name) : (t = Vc(), (n = Oh).time = Is(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var a = r[i], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && ha(l, e, t, u, a, n || Hh(l, t));
  return new Fn(r, this._parents, e, t);
}
Uo.prototype.interrupt = Vg;
Uo.prototype.transition = Th;
const mi = (e) => () => e;
function Nh(e, {
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
function Da(e) {
  e.stopImmediatePropagation();
}
function ko(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Lh(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function Dh() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function Al() {
  return this.__zoom || ma;
}
function zh(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function Ah() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Ih(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], a = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    a > i ? (i + a) / 2 : Math.min(0, i) || Math.max(0, a)
  );
}
function Hc() {
  var e = Lh, t = Dh, n = Ih, r = zh, o = Ah, i = [0, 1 / 0], a = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], s = 250, l = $g, u = va("start", "zoom", "end"), c, d, p, v = 500, h = 150, b = 0, x = 10;
  function C(S) {
    S.property("__zoom", Al).on("wheel.zoom", H, { passive: !1 }).on("mousedown.zoom", N).on("dblclick.zoom", I).filter(o).on("touchstart.zoom", R).on("touchmove.zoom", L).on("touchend.zoom touchcancel.zoom", B).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  C.transform = function(S, $, M, T) {
    var P = S.selection ? S.selection() : S;
    P.property("__zoom", Al), S !== P ? k(S, $, M, T) : P.interrupt().each(function() {
      V(this, arguments).event(T).start().zoom(null, typeof $ == "function" ? $.apply(this, arguments) : $).end();
    });
  }, C.scaleBy = function(S, $, M, T) {
    C.scaleTo(S, function() {
      var P = this.__zoom.k, O = typeof $ == "function" ? $.apply(this, arguments) : $;
      return P * O;
    }, M, T);
  }, C.scaleTo = function(S, $, M, T) {
    C.transform(S, function() {
      var P = t.apply(this, arguments), O = this.__zoom, A = M == null ? w(P) : typeof M == "function" ? M.apply(this, arguments) : M, X = O.invert(A), W = typeof $ == "function" ? $.apply(this, arguments) : $;
      return n(_(g(O, W), A, X), P, a);
    }, M, T);
  }, C.translateBy = function(S, $, M, T) {
    C.transform(S, function() {
      return n(this.__zoom.translate(
        typeof $ == "function" ? $.apply(this, arguments) : $,
        typeof M == "function" ? M.apply(this, arguments) : M
      ), t.apply(this, arguments), a);
    }, null, T);
  }, C.translateTo = function(S, $, M, T, P) {
    C.transform(S, function() {
      var O = t.apply(this, arguments), A = this.__zoom, X = T == null ? w(O) : typeof T == "function" ? T.apply(this, arguments) : T;
      return n(ma.translate(X[0], X[1]).scale(A.k).translate(
        typeof $ == "function" ? -$.apply(this, arguments) : -$,
        typeof M == "function" ? -M.apply(this, arguments) : -M
      ), O, a);
    }, T, P);
  };
  function g(S, $) {
    return $ = Math.max(i[0], Math.min(i[1], $)), $ === S.k ? S : new Bn($, S.x, S.y);
  }
  function _(S, $, M) {
    var T = $[0] - M[0] * S.k, P = $[1] - M[1] * S.k;
    return T === S.x && P === S.y ? S : new Bn(S.k, T, P);
  }
  function w(S) {
    return [(+S[0][0] + +S[1][0]) / 2, (+S[0][1] + +S[1][1]) / 2];
  }
  function k(S, $, M, T) {
    S.on("start.zoom", function() {
      V(this, arguments).event(T).start();
    }).on("interrupt.zoom end.zoom", function() {
      V(this, arguments).event(T).end();
    }).tween("zoom", function() {
      var P = this, O = arguments, A = V(P, O).event(T), X = t.apply(P, O), W = M == null ? w(X) : typeof M == "function" ? M.apply(P, O) : M, U = Math.max(X[1][0] - X[0][0], X[1][1] - X[0][1]), Q = P.__zoom, F = typeof $ == "function" ? $.apply(P, O) : $, ge = l(Q.invert(W).concat(U / Q.k), F.invert(W).concat(U / F.k));
      return function(de) {
        if (de === 1) de = F;
        else {
          var he = ge(de), le = U / he[2];
          de = new Bn(le, W[0] - he[0] * le, W[1] - he[1] * le);
        }
        A.zoom(null, de);
      };
    });
  }
  function V(S, $, M) {
    return !M && S.__zooming || new E(S, $);
  }
  function E(S, $) {
    this.that = S, this.args = $, this.active = 0, this.sourceEvent = null, this.extent = t.apply(S, $), this.taps = 0;
  }
  E.prototype = {
    event: function(S) {
      return S && (this.sourceEvent = S), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(S, $) {
      return this.mouse && S !== "mouse" && (this.mouse[1] = $.invert(this.mouse[0])), this.touch0 && S !== "touch" && (this.touch0[1] = $.invert(this.touch0[0])), this.touch1 && S !== "touch" && (this.touch1[1] = $.invert(this.touch1[0])), this.that.__zoom = $, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(S) {
      var $ = fn(this.that).datum();
      u.call(
        S,
        this.that,
        new Nh(S, {
          sourceEvent: this.sourceEvent,
          target: C,
          transform: this.that.__zoom,
          dispatch: u
        }),
        $
      );
    }
  };
  function H(S, ...$) {
    if (!e.apply(this, arguments)) return;
    var M = V(this, $).event(S), T = this.__zoom, P = Math.max(i[0], Math.min(i[1], T.k * Math.pow(2, r.apply(this, arguments)))), O = yn(S);
    if (M.wheel)
      (M.mouse[0][0] !== O[0] || M.mouse[0][1] !== O[1]) && (M.mouse[1] = T.invert(M.mouse[0] = O)), clearTimeout(M.wheel);
    else {
      if (T.k === P) return;
      M.mouse = [O, T.invert(O)], Ei(this), M.start();
    }
    ko(S), M.wheel = setTimeout(A, h), M.zoom("mouse", n(_(g(T, P), M.mouse[0], M.mouse[1]), M.extent, a));
    function A() {
      M.wheel = null, M.end();
    }
  }
  function N(S, ...$) {
    if (p || !e.apply(this, arguments)) return;
    var M = S.currentTarget, T = V(this, $, !0).event(S), P = fn(S.view).on("mousemove.zoom", W, !0).on("mouseup.zoom", U, !0), O = yn(S, M), A = S.clientX, X = S.clientY;
    gc(S.view), Da(S), T.mouse = [O, this.__zoom.invert(O)], Ei(this), T.start();
    function W(Q) {
      if (ko(Q), !T.moved) {
        var F = Q.clientX - A, ge = Q.clientY - X;
        T.moved = F * F + ge * ge > b;
      }
      T.event(Q).zoom("mouse", n(_(T.that.__zoom, T.mouse[0] = yn(Q, M), T.mouse[1]), T.extent, a));
    }
    function U(Q) {
      P.on("mousemove.zoom mouseup.zoom", null), hc(Q.view, T.moved), ko(Q), T.event(Q).end();
    }
  }
  function I(S, ...$) {
    if (e.apply(this, arguments)) {
      var M = this.__zoom, T = yn(S.changedTouches ? S.changedTouches[0] : S, this), P = M.invert(T), O = M.k * (S.shiftKey ? 0.5 : 2), A = n(_(g(M, O), T, P), t.apply(this, $), a);
      ko(S), s > 0 ? fn(this).transition().duration(s).call(k, A, T, S) : fn(this).call(C.transform, A, T, S);
    }
  }
  function R(S, ...$) {
    if (e.apply(this, arguments)) {
      var M = S.touches, T = M.length, P = V(this, $, S.changedTouches.length === T).event(S), O, A, X, W;
      for (Da(S), A = 0; A < T; ++A)
        X = M[A], W = yn(X, this), W = [W, this.__zoom.invert(W), X.identifier], P.touch0 ? !P.touch1 && P.touch0[2] !== W[2] && (P.touch1 = W, P.taps = 0) : (P.touch0 = W, O = !0, P.taps = 1 + !!c);
      c && (c = clearTimeout(c)), O && (P.taps < 2 && (d = W[0], c = setTimeout(function() {
        c = null;
      }, v)), Ei(this), P.start());
    }
  }
  function L(S, ...$) {
    if (this.__zooming) {
      var M = V(this, $).event(S), T = S.changedTouches, P = T.length, O, A, X, W;
      for (ko(S), O = 0; O < P; ++O)
        A = T[O], X = yn(A, this), M.touch0 && M.touch0[2] === A.identifier ? M.touch0[0] = X : M.touch1 && M.touch1[2] === A.identifier && (M.touch1[0] = X);
      if (A = M.that.__zoom, M.touch1) {
        var U = M.touch0[0], Q = M.touch0[1], F = M.touch1[0], ge = M.touch1[1], de = (de = F[0] - U[0]) * de + (de = F[1] - U[1]) * de, he = (he = ge[0] - Q[0]) * he + (he = ge[1] - Q[1]) * he;
        A = g(A, Math.sqrt(de / he)), X = [(U[0] + F[0]) / 2, (U[1] + F[1]) / 2], W = [(Q[0] + ge[0]) / 2, (Q[1] + ge[1]) / 2];
      } else if (M.touch0) X = M.touch0[0], W = M.touch0[1];
      else return;
      M.zoom("touch", n(_(A, X, W), M.extent, a));
    }
  }
  function B(S, ...$) {
    if (this.__zooming) {
      var M = V(this, $).event(S), T = S.changedTouches, P = T.length, O, A;
      for (Da(S), p && clearTimeout(p), p = setTimeout(function() {
        p = null;
      }, v), O = 0; O < P; ++O)
        A = T[O], M.touch0 && M.touch0[2] === A.identifier ? delete M.touch0 : M.touch1 && M.touch1[2] === A.identifier && delete M.touch1;
      if (M.touch1 && !M.touch0 && (M.touch0 = M.touch1, delete M.touch1), M.touch0) M.touch0[1] = this.__zoom.invert(M.touch0[0]);
      else if (M.end(), M.taps === 2 && (A = yn(A, this), Math.hypot(d[0] - A[0], d[1] - A[1]) < x)) {
        var X = fn(this).on("dblclick.zoom");
        X && X.apply(this, arguments);
      }
    }
  }
  return C.wheelDelta = function(S) {
    return arguments.length ? (r = typeof S == "function" ? S : mi(+S), C) : r;
  }, C.filter = function(S) {
    return arguments.length ? (e = typeof S == "function" ? S : mi(!!S), C) : e;
  }, C.touchable = function(S) {
    return arguments.length ? (o = typeof S == "function" ? S : mi(!!S), C) : o;
  }, C.extent = function(S) {
    return arguments.length ? (t = typeof S == "function" ? S : mi([[+S[0][0], +S[0][1]], [+S[1][0], +S[1][1]]]), C) : t;
  }, C.scaleExtent = function(S) {
    return arguments.length ? (i[0] = +S[0], i[1] = +S[1], C) : [i[0], i[1]];
  }, C.translateExtent = function(S) {
    return arguments.length ? (a[0][0] = +S[0][0], a[1][0] = +S[1][0], a[0][1] = +S[0][1], a[1][1] = +S[1][1], C) : [[a[0][0], a[0][1]], [a[1][0], a[1][1]]];
  }, C.constrain = function(S) {
    return arguments.length ? (n = S, C) : n;
  }, C.duration = function(S) {
    return arguments.length ? (s = +S, C) : s;
  }, C.interpolate = function(S) {
    return arguments.length ? (l = S, C) : l;
  }, C.on = function() {
    var S = u.on.apply(u, arguments);
    return S === u ? C : S;
  }, C.clickDistance = function(S) {
    return arguments.length ? (b = (S = +S) * S, C) : Math.sqrt(b);
  }, C.tapDistance = function(S) {
    return arguments.length ? (x = +S, C) : x;
  }, C;
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
var dr;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(dr || (dr = {}));
var ji;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(ji || (ji = {}));
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
function Rh(e, t) {
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
function qh(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const Zh = (e) => "id" in e && "source" in e && "target" in e, Bh = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), Zs = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), Qo = (e, t = [0, 0]) => {
  const { width: n, height: r } = wr(e), o = e.origin ?? t, i = n * o[0], a = r * o[1];
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
    t.nodeLookup && (a = i ? t.nodeLookup.get(o) : Zs(o) ? o : t.nodeLookup.get(o.id));
    const s = a ? Xi(a, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return ya(r, s);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return wa(n);
}, ei = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = Xi(r);
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
    const { measured: c, selectable: d = !0, hidden: p = !1 } = u;
    if (a && !d || p)
      continue;
    const v = c.width ?? u.width ?? u.initialWidth ?? null, h = c.height ?? u.height ?? u.initialHeight ?? null, b = jo(s, io(u)), x = (v ?? 0) * (h ?? 0), C = i && b > 0;
    (!u.internals.handleBounds || C || b >= x || u.dragging) && l.push(u);
  }
  return l;
}, ls = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function Xh(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t != null && t.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t != null && t.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function Yh({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, a) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const s = Xh(e, a), l = ei(s), u = js(l, t, n, (a == null ? void 0 : a.minZoom) ?? o, (a == null ? void 0 : a.maxZoom) ?? i, (a == null ? void 0 : a.padding) ?? 0.1);
  return await r.setViewport(u, { duration: a == null ? void 0 : a.duration }), Promise.resolve(!0);
}
function Wh({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const a = n.get(e), s = a.parentId ? n.get(a.parentId) : void 0, { x: l, y: u } = s ? s.internals.positionAbsolute : { x: 0, y: 0 }, c = a.origin ?? r;
  let d = o;
  if (a.extent === "parent" && !a.expandParent)
    if (!s)
      i == null || i("005", ro.error005());
    else {
      const v = s.measured.width, h = s.measured.height;
      v && h && (d = [
        [l, u],
        [l + v, u + h]
      ]);
    }
  else s && ao(a.extent) && (d = [
    [a.extent[0][0] + l, a.extent[0][1] + u],
    [a.extent[1][0] + l, a.extent[1][1] + u]
  ]);
  const p = ao(d) ? Hr(t, d, a.measured) : t;
  return (a.measured.width === void 0 || a.measured.height === void 0) && (i == null || i("015", ro.error015())), {
    position: {
      x: p.x - l + (a.measured.width ?? 0) * c[0],
      y: p.y - u + (a.measured.height ?? 0) * c[1]
    },
    positionAbsolute: p
  };
}
async function Nc({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((d) => d.id)), a = [];
  for (const d of n) {
    if (d.deletable === !1)
      continue;
    const p = i.has(d.id), v = !p && d.parentId && a.find((h) => h.id === d.parentId);
    (p || v) && a.push(d);
  }
  const s = new Set(t.map((d) => d.id)), l = r.filter((d) => d.deletable !== !1), u = ls(a, l);
  for (const d of l)
    s.has(d.id) && !u.find((p) => p.id === d.id) && u.push(d);
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
function Lc(e, t, n) {
  const { width: r, height: o } = wr(n), { x: i, y: a } = n.internals.positionAbsolute;
  return Hr(e, [
    [i, a],
    [i + r, a + o]
  ], t);
}
const ql = (e, t, n) => e < t ? oo(Math.abs(e - t), 1, t) / t : e > n ? -oo(Math.abs(e - n), 1, t) / t : 0, Dc = (e, t, n = 15, r = 40) => {
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
}, Xi = (e, t = [0, 0]) => {
  var n, r;
  const { x: o, y: i } = Zs(e) ? e.internals.positionAbsolute : Qo(e, t);
  return {
    x: o,
    y: i,
    x2: o + (((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: i + (((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, zc = (e, t) => wa(ya(us(e), us(t))), jo = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, Zl = (e) => jn(e.width) && jn(e.height) && jn(e.x) && jn(e.y), jn = (e) => !isNaN(e) && isFinite(e), Kh = (e, t) => {
}, Bs = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), ti = ({ x: e, y: t }, [n, r, o], i = !1, a = [1, 1]) => {
  const s = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? Bs(s, a) : s;
}, Yi = ({ x: e, y: t }, [n, r, o]) => ({
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
function Fh(e, t, n) {
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
function Gh(e, t, n, r, o, i) {
  const { x: a, y: s } = Yi(e, [t, n, r]), { x: l, y: u } = Yi({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), c = o - l, d = i - u;
  return {
    left: Math.floor(a),
    top: Math.floor(s),
    right: Math.floor(c),
    bottom: Math.floor(d)
  };
}
const js = (e, t, n, r, o, i) => {
  const a = Fh(i, t, n), s = (t - a.x) / e.width, l = (n - a.y) / e.height, u = Math.min(s, l), c = oo(u, r, o), d = e.x + e.width / 2, p = e.y + e.height / 2, v = t / 2 - d * c, h = n / 2 - p * c, b = Gh(e, v, h, c, t, n), x = {
    left: Math.min(b.left - a.left, 0),
    top: Math.min(b.top - a.top, 0),
    right: Math.min(b.right - a.right, 0),
    bottom: Math.min(b.bottom - a.bottom, 0)
  };
  return {
    x: v - x.left + x.right,
    y: h - x.top + x.bottom,
    zoom: c
  };
}, Wi = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function ao(e) {
  return e !== void 0 && e !== "parent";
}
function wr(e) {
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
function Uh(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, a = r.get(n);
  if (a) {
    const s = a.origin || o;
    i.x += a.internals.positionAbsolute.x - (t.width ?? 0) * s[0], i.y += a.internals.positionAbsolute.y - (t.height ?? 0) * s[1];
  }
  return i;
}
function Jh() {
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
}), Qh = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, e0 = ["INPUT", "SELECT", "TEXTAREA"];
function t0(e) {
  var t, n;
  const r = ((n = (t = e.composedPath) == null ? void 0 : t.call(e)) == null ? void 0 : n[0]) || e.target;
  return (r == null ? void 0 : r.nodeType) !== 1 ? !1 : e0.includes(r.nodeName) || r.hasAttribute("contenteditable") || !!r.closest(".nokey");
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
function n0({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: a, targetControlY: s }) {
  const l = e * 0.125 + o * 0.375 + a * 0.375 + n * 0.125, u = t * 0.125 + i * 0.375 + s * 0.375 + r * 0.125, c = Math.abs(l - e), d = Math.abs(u - t);
  return [l, u, c, d];
}
function yi(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function jl({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
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
  }), [d, p, v, h] = n0({
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
    p,
    v,
    h
  ];
}
function Zc({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, a = Math.abs(r - t) / 2, s = r < t ? r + a : r - a;
  return [i, s, o, a];
}
function r0({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1 }) {
  if (!o)
    return r;
  const i = n || t.selected || e.selected, a = Math.max(e.internals.z || 0, t.internals.z || 0, 1e3);
  return r + (i ? a : 0);
}
function o0({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = ya(Xi(e), Xi(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const a = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return jo(a, wa(i)) > 0;
}
const i0 = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, a0 = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), s0 = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return Zh(e) ? n = { ...e } : n = {
    ...e,
    id: i0(e)
  }, a0(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
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
const Xl = {
  [ze.Left]: { x: -1, y: 0 },
  [ze.Right]: { x: 1, y: 0 },
  [ze.Top]: { x: 0, y: -1 },
  [ze.Bottom]: { x: 0, y: 1 }
}, l0 = ({ source: e, sourcePosition: t = ze.Bottom, target: n }) => t === ze.Left || t === ze.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Yl = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function u0({ source: e, sourcePosition: t = ze.Bottom, target: n, targetPosition: r = ze.Top, center: o, offset: i }) {
  const a = Xl[t], s = Xl[r], l = { x: e.x + a.x * i, y: e.y + a.y * i }, u = { x: n.x + s.x * i, y: n.y + s.y * i }, c = l0({
    source: l,
    sourcePosition: t,
    target: u
  }), d = c.x !== 0 ? "x" : "y", p = c[d];
  let v = [], h, b;
  const x = { x: 0, y: 0 }, C = { x: 0, y: 0 }, [g, _, w, k] = Zc({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[d] * s[d] === -1) {
    h = o.x ?? g, b = o.y ?? _;
    const V = [
      { x: h, y: l.y },
      { x: h, y: u.y }
    ], E = [
      { x: l.x, y: b },
      { x: u.x, y: b }
    ];
    a[d] === p ? v = d === "x" ? V : E : v = d === "x" ? E : V;
  } else {
    const V = [{ x: l.x, y: u.y }], E = [{ x: u.x, y: l.y }];
    if (d === "x" ? v = a.x === p ? E : V : v = a.y === p ? V : E, t === r) {
      const L = Math.abs(e[d] - n[d]);
      if (L <= i) {
        const B = Math.min(i - 1, i - L);
        a[d] === p ? x[d] = (l[d] > e[d] ? -1 : 1) * B : C[d] = (u[d] > n[d] ? -1 : 1) * B;
      }
    }
    if (t !== r) {
      const L = d === "x" ? "y" : "x", B = a[d] === s[L], S = l[L] > u[L], $ = l[L] < u[L];
      (a[d] === 1 && (!B && S || B && $) || a[d] !== 1 && (!B && $ || B && S)) && (v = d === "x" ? V : E);
    }
    const H = { x: l.x + x.x, y: l.y + x.y }, N = { x: u.x + C.x, y: u.y + C.y }, I = Math.max(Math.abs(H.x - v[0].x), Math.abs(N.x - v[0].x)), R = Math.max(Math.abs(H.y - v[0].y), Math.abs(N.y - v[0].y));
    I >= R ? (h = (H.x + N.x) / 2, b = v[0].y) : (h = v[0].x, b = (H.y + N.y) / 2);
  }
  return [[
    e,
    { x: l.x + x.x, y: l.y + x.y },
    ...v,
    { x: u.x + C.x, y: u.y + C.y },
    n
  ], h, b, w, k];
}
function c0(e, t, n, r) {
  const o = Math.min(Yl(e, t) / 2, Yl(t, n) / 2, r), { x: i, y: a } = t;
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
  const [c, d, p, v, h] = u0({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: s, y: l },
    offset: u
  });
  return [c.reduce((b, x, C) => {
    let g = "";
    return C > 0 && C < c.length - 1 ? g = c0(c[C - 1], x, c[C + 1], a) : g = `${C === 0 ? "M" : "L"}${x.x} ${x.y}`, b += g, b;
  }, ""), d, p, v, h];
}
function Wl(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function d0(e) {
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
  const l = (a == null ? void 0 : a.position) || ze.Bottom, u = (s == null ? void 0 : s.position) || ze.Top, c = Xo(n, a, l), d = Xo(r, s, u);
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
function Xo(e, t, n = ze.Left, r = !1) {
  const o = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, i = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: a, height: s } = t ?? wr(e);
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
function f0(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((a, s) => ([s.markerStart || r, s.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = ds(l, t);
      i.has(u) || (a.push({ id: u, color: l.color || n, ...l }), i.add(u));
    }
  }), a), []).sort((a, s) => a.id.localeCompare(s.id));
}
function v0(e, t, n, r, o) {
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
const Xs = {
  nodeOrigin: [0, 0],
  nodeExtent: Bi,
  elevateNodesOnSelect: !0,
  defaults: {}
}, p0 = {
  ...Xs,
  checkEquality: !0
};
function Ys(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function g0(e, t, n) {
  const r = Ys(Xs, n);
  for (const o of e.values())
    if (o.parentId)
      Ws(o, e, t, r);
    else {
      const i = Qo(o, r.nodeOrigin), a = ao(o.extent) ? o.extent : r.nodeExtent, s = Hr(i, a, wr(o));
      o.internals.positionAbsolute = s;
    }
}
function Bc(e, t, n, r) {
  var o, i;
  const a = Ys(p0, r);
  let s = e.length > 0;
  const l = new Map(t), u = a != null && a.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const c of e) {
    let d = l.get(c.id);
    if (a.checkEquality && c === (d == null ? void 0 : d.internals.userNode))
      t.set(c.id, d);
    else {
      const p = Qo(c, a.nodeOrigin), v = ao(c.extent) ? c.extent : a.nodeExtent, h = Hr(p, v, wr(c));
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
    (d.measured === void 0 || d.measured.width === void 0 || d.measured.height === void 0) && !d.hidden && (s = !1), c.parentId && Ws(d, t, n, r);
  }
  return s;
}
function h0(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function Ws(e, t, n, r) {
  const { elevateNodesOnSelect: o, nodeOrigin: i, nodeExtent: a } = Ys(Xs, r), s = e.parentId, l = t.get(s);
  if (!l) {
    console.warn(`Parent node ${s} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  h0(e, n);
  const u = o ? 1e3 : 0, { x: c, y: d, z: p } = m0(e, l, i, a, u), { positionAbsolute: v } = e.internals, h = c !== v.x || d !== v.y;
  (h || p !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: h ? { x: c, y: d } : v,
      z: p
    }
  });
}
function jc(e, t) {
  return (jn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function m0(e, t, n, r, o) {
  const { x: i, y: a } = t.internals.positionAbsolute, s = wr(e), l = Qo(e, n), u = ao(e.extent) ? Hr(l, e.extent, s) : l;
  let c = Hr({ x: i + u.x, y: a + u.y }, r, s);
  e.extent === "parent" && (c = Lc(c, s, t));
  const d = jc(e, o), p = t.internals.z ?? 0;
  return {
    x: c.x,
    y: c.y,
    z: p > d ? p : d
  };
}
function y0(e, t, n, r = [0, 0]) {
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
    const d = l.internals.positionAbsolute, p = wr(l), v = l.origin ?? r, h = s.x < d.x ? Math.round(Math.abs(d.x - s.x)) : 0, b = s.y < d.y ? Math.round(Math.abs(d.y - s.y)) : 0, x = Math.max(p.width, Math.round(s.width)), C = Math.max(p.height, Math.round(s.height)), g = (x - p.width) * v[0], _ = (C - p.height) * v[1];
    (h > 0 || b > 0 || g || _) && (i.push({
      id: u,
      type: "position",
      position: {
        x: l.position.x - h + g,
        y: l.position.y - b + _
      }
    }), (c = n.get(u)) == null || c.forEach((w) => {
      e.some((k) => k.id === w.id) || i.push({
        id: w.id,
        type: "position",
        position: {
          x: w.position.x + h,
          y: w.position.y + b
        }
      });
    })), (p.width < s.width || p.height < s.height || h || b) && i.push({
      id: u,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: x + (h ? v[0] * h - g : 0),
        height: C + (b ? v[1] * b - _ : 0)
      }
    });
  }), i;
}
function w0(e, t, n, r, o, i) {
  const a = r == null ? void 0 : r.querySelector(".xyflow__viewport");
  let s = !1;
  if (!a)
    return { changes: [], updatedInternals: s };
  const l = [], u = window.getComputedStyle(a), { m22: c } = new window.DOMMatrixReadOnly(u.transform), d = [];
  for (const p of e.values()) {
    const v = t.get(p.id);
    if (!v)
      continue;
    if (v.hidden) {
      t.set(v.id, {
        ...v,
        internals: {
          ...v.internals,
          handleBounds: void 0
        }
      }), s = !0;
      continue;
    }
    const h = Ic(p.nodeElement), b = v.measured.width !== h.width || v.measured.height !== h.height;
    if (h.width && h.height && (b || !v.internals.handleBounds || p.force)) {
      const x = p.nodeElement.getBoundingClientRect(), C = ao(v.extent) ? v.extent : i;
      let { positionAbsolute: g } = v.internals;
      v.parentId && v.extent === "parent" ? g = Lc(g, h, t.get(v.parentId)) : C && (g = Hr(g, C, h));
      const _ = {
        ...v,
        measured: h,
        internals: {
          ...v.internals,
          positionAbsolute: g,
          handleBounds: {
            source: Bl("source", p.nodeElement, x, c, v.id),
            target: Bl("target", p.nodeElement, x, c, v.id)
          }
        }
      };
      t.set(v.id, _), v.parentId && Ws(_, t, n, { nodeOrigin: o }), s = !0, b && (l.push({
        id: v.id,
        type: "dimensions",
        dimensions: h
      }), v.expandParent && v.parentId && d.push({
        id: v.id,
        parentId: v.parentId,
        rect: io(_, o)
      }));
    }
  }
  if (d.length > 0) {
    const p = y0(d, t, n, o);
    l.push(...p);
  }
  return { changes: l, updatedInternals: s };
}
async function b0({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
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
function Xc(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: a = null, targetHandle: s = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: a, targetHandle: s }, u = `${o}-${a}--${i}-${s}`, c = `${i}-${s}--${o}-${a}`;
    Gl("source", l, c, e, o, a), Gl("target", l, u, e, i, s), t.set(r.id, r);
  }
}
function x0(e, t) {
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
function Yc(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : Yc(n, t) : !1;
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
function $0(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, a] of e)
    if ((a.selected || a.id === r) && (!a.parentId || !Yc(a, e)) && (a.draggable || t && typeof a.draggable > "u")) {
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
function C0({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, a = 0, s = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, c = null, d = !1, p = null, v = !1;
  function h({ noDragClassName: x, handleSelector: C, domNode: g, isSelectable: _, nodeId: w, nodeClickDistance: k = 0 }) {
    p = fn(g);
    function V({ x: I, y: R }, L) {
      const { nodeLookup: B, nodeExtent: S, snapGrid: $, snapToGrid: M, nodeOrigin: T, onNodeDrag: P, onSelectionDrag: O, onError: A, updateNodePositions: X } = t();
      i = { x: I, y: R };
      let W = !1, U = { x: 0, y: 0, x2: 0, y2: 0 };
      if (s.size > 1 && S) {
        const Q = ei(s);
        U = us(Q);
      }
      for (const [Q, F] of s) {
        if (!B.has(Q))
          continue;
        let ge = { x: I - F.distance.x, y: R - F.distance.y };
        M && (ge = Bs(ge, $));
        let de = [
          [S[0][0], S[0][1]],
          [S[1][0], S[1][1]]
        ];
        if (s.size > 1 && S && !F.extent) {
          const { positionAbsolute: ke } = F.internals, $e = ke.x - U.x + S[0][0], He = ke.x + F.measured.width - U.x2 + S[1][0], ue = ke.y - U.y + S[0][1], J = ke.y + F.measured.height - U.y2 + S[1][1];
          de = [
            [$e, ue],
            [He, J]
          ];
        }
        const { position: he, positionAbsolute: le } = Wh({
          nodeId: Q,
          nextPosition: ge,
          nodeLookup: B,
          nodeExtent: de,
          nodeOrigin: T,
          onError: A
        });
        W = W || F.position.x !== he.x || F.position.y !== he.y, F.position = he, F.internals.positionAbsolute = le;
      }
      if (W && (X(s, !0), L && (r || P || !w && O))) {
        const [Q, F] = Aa({
          nodeId: w,
          dragItems: s,
          nodeLookup: B
        });
        r == null || r(L, s, Q, F), P == null || P(L, Q, F), w || O == null || O(L, F);
      }
    }
    async function E() {
      if (!c)
        return;
      const { transform: I, panBy: R, autoPanSpeed: L, autoPanOnNodeDrag: B } = t();
      if (!B) {
        l = !1, cancelAnimationFrame(a);
        return;
      }
      const [S, $] = Dc(u, c, L);
      (S !== 0 || $ !== 0) && (i.x = (i.x ?? 0) - S / I[2], i.y = (i.y ?? 0) - $ / I[2], await R({ x: S, y: $ }) && V(i, null)), a = requestAnimationFrame(E);
    }
    function H(I) {
      var R;
      const { nodeLookup: L, multiSelectionActive: B, nodesDraggable: S, transform: $, snapGrid: M, snapToGrid: T, selectNodesOnDrag: P, onNodeDragStart: O, onSelectionDragStart: A, unselectNodesAndEdges: X } = t();
      d = !0, (!P || !_) && !B && w && ((R = L.get(w)) != null && R.selected || X()), _ && P && w && (e == null || e(w));
      const W = za(I.sourceEvent, { transform: $, snapGrid: M, snapToGrid: T, containerBounds: c });
      if (i = W, s = $0(L, S, W, w), s.size > 0 && (n || O || !w && A)) {
        const [U, Q] = Aa({
          nodeId: w,
          dragItems: s,
          nodeLookup: L
        });
        n == null || n(I.sourceEvent, s, U, Q), O == null || O(I.sourceEvent, U, Q), w || A == null || A(I.sourceEvent, Q);
      }
    }
    const N = Gp().clickDistance(k).on("start", (I) => {
      const { domNode: R, nodeDragThreshold: L, transform: B, snapGrid: S, snapToGrid: $ } = t();
      c = (R == null ? void 0 : R.getBoundingClientRect()) || null, v = !1, L === 0 && H(I), i = za(I.sourceEvent, { transform: B, snapGrid: S, snapToGrid: $, containerBounds: c }), u = Wn(I.sourceEvent, c);
    }).on("drag", (I) => {
      const { autoPanOnNodeDrag: R, transform: L, snapGrid: B, snapToGrid: S, nodeDragThreshold: $, nodeLookup: M } = t(), T = za(I.sourceEvent, { transform: L, snapGrid: B, snapToGrid: S, containerBounds: c });
      if ((I.sourceEvent.type === "touchmove" && I.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      w && !M.has(w)) && (v = !0), !v) {
        if (!l && R && d && (l = !0, E()), !d) {
          const P = T.xSnapped - (i.x ?? 0), O = T.ySnapped - (i.y ?? 0);
          Math.sqrt(P * P + O * O) > $ && H(I);
        }
        (i.x !== T.xSnapped || i.y !== T.ySnapped) && s && d && (u = Wn(I.sourceEvent, c), V(T, I.sourceEvent));
      }
    }).on("end", (I) => {
      if (!(!d || v) && (l = !1, d = !1, cancelAnimationFrame(a), s.size > 0)) {
        const { nodeLookup: R, updateNodePositions: L, onNodeDragStop: B, onSelectionDragStop: S } = t();
        if (L(s, !1), o || B || !w && S) {
          const [$, M] = Aa({
            nodeId: w,
            dragItems: s,
            nodeLookup: R,
            dragging: !1
          });
          o == null || o(I.sourceEvent, s, $, M), B == null || B(I.sourceEvent, $, M), w || S == null || S(I.sourceEvent, M);
        }
      }
    }).filter((I) => {
      const R = I.target;
      return !I.button && (!x || !Ul(R, `.${x}`, g)) && (!C || Ul(R, C, g));
    });
    p.call(N);
  }
  function b() {
    p == null || p.on(".drag", null);
  }
  return {
    update: h,
    destroy: b
  };
}
function _0(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    jo(o, io(i)) > 0 && r.push(i);
  return r;
}
const k0 = 250;
function E0(e, t, n, r) {
  var o, i;
  let a = [], s = 1 / 0;
  const l = _0(e, n, t + k0);
  for (const u of l) {
    const c = [...((o = u.internals.handleBounds) == null ? void 0 : o.source) ?? [], ...((i = u.internals.handleBounds) == null ? void 0 : i.target) ?? []];
    for (const d of c) {
      if (r.nodeId === d.nodeId && r.type === d.type && r.id === d.id)
        continue;
      const { x: p, y: v } = Xo(u, d, d.position, !0), h = Math.sqrt(Math.pow(p - e.x, 2) + Math.pow(v - e.y, 2));
      h > t || (h < s ? (a = [{ ...d, x: p, y: v }], s = h) : h === s && a.push({ ...d, x: p, y: v }));
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
  const c = o === "strict" ? (a = u.internals.handleBounds) == null ? void 0 : a[t] : [...((s = u.internals.handleBounds) == null ? void 0 : s.source) ?? [], ...((l = u.internals.handleBounds) == null ? void 0 : l.target) ?? []], d = (n ? c == null ? void 0 : c.find((p) => p.id === n) : c == null ? void 0 : c[0]) ?? null;
  return d && i ? { ...d, ...Xo(u, d, d.position, !0) } : d;
}
function Kc(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function S0(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const Fc = () => !0;
function M0(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: a, domNode: s, nodeLookup: l, lib: u, autoPanOnConnect: c, flowId: d, panBy: p, cancelConnection: v, onConnectStart: h, onConnect: b, onConnectEnd: x, isValidConnection: C = Fc, onReconnectEnd: g, updateConnection: _, getTransform: w, getFromHandle: k, autoPanSpeed: V }) {
  const E = Qh(e.target);
  let H = 0, N;
  const { x: I, y: R } = Wn(e), L = E == null ? void 0 : E.elementFromPoint(I, R), B = Kc(i, L), S = s == null ? void 0 : s.getBoundingClientRect();
  if (!S || !B)
    return;
  const $ = Wc(o, B, r, l, t);
  if (!$)
    return;
  let M = Wn(e, S), T = !1, P = null, O = !1, A = null;
  function X() {
    if (!c || !S)
      return;
    const [he, le] = Dc(M, S, V);
    p({ x: he, y: le }), H = requestAnimationFrame(X);
  }
  const W = {
    ...$,
    nodeId: o,
    type: B,
    position: $.position
  }, U = l.get(o), Q = {
    inProgress: !0,
    isValid: null,
    from: Xo(U, W, ze.Left, !0),
    fromHandle: W,
    fromPosition: W.position,
    fromNode: U,
    to: M,
    toHandle: null,
    toPosition: Il[W.position],
    toNode: null
  };
  _(Q);
  let F = Q;
  h == null || h(e, { nodeId: o, handleId: r, handleType: B });
  function ge(he) {
    if (!k() || !W) {
      de(he);
      return;
    }
    const le = w();
    M = Wn(he, S), N = E0(ti(M, le, !1, [1, 1]), n, l, W), T || (X(), T = !0);
    const ke = Gc(he, {
      handle: N,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: a ? "target" : "source",
      isValidConnection: C,
      doc: E,
      lib: u,
      flowId: d,
      nodeLookup: l
    });
    A = ke.handleDomNode, P = ke.connection, O = S0(!!N, ke.isValid);
    const $e = {
      // from stays the same
      ...F,
      isValid: O,
      to: N && O ? Yi({ x: N.x, y: N.y }, le) : M,
      toHandle: ke.toHandle,
      toPosition: O && ke.toHandle ? ke.toHandle.position : Il[W.position],
      toNode: ke.toHandle ? l.get(ke.toHandle.nodeId) : null
    };
    O && N && F.toHandle && $e.toHandle && F.toHandle.type === $e.toHandle.type && F.toHandle.nodeId === $e.toHandle.nodeId && F.toHandle.id === $e.toHandle.id && F.to.x === $e.to.x && F.to.y === $e.to.y || (_($e), F = $e);
  }
  function de(he) {
    (N || A) && P && O && (b == null || b(P));
    const { inProgress: le, ...ke } = F, $e = {
      ...ke,
      toPosition: F.toHandle ? F.toPosition : null
    };
    x == null || x(he, $e), i && (g == null || g(he, $e)), v(), cancelAnimationFrame(H), T = !1, O = !1, P = null, A = null, E.removeEventListener("mousemove", ge), E.removeEventListener("mouseup", de), E.removeEventListener("touchmove", ge), E.removeEventListener("touchend", de);
  }
  E.addEventListener("mousemove", ge), E.addEventListener("mouseup", de), E.addEventListener("touchmove", ge), E.addEventListener("touchend", de);
}
function Gc(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: a, lib: s, flowId: l, isValidConnection: u = Fc, nodeLookup: c }) {
  const d = i === "target", p = t ? a.querySelector(`.${s}-flow__handle[data-id="${l}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: v, y: h } = Wn(e), b = a.elementFromPoint(v, h), x = b != null && b.classList.contains(`${s}-flow__handle`) ? b : p, C = {
    handleDomNode: x,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (x) {
    const g = Kc(void 0, x), _ = x.getAttribute("data-nodeid"), w = x.getAttribute("data-handleid"), k = x.classList.contains("connectable"), V = x.classList.contains("connectableend");
    if (!_ || !g)
      return C;
    const E = {
      source: d ? _ : r,
      sourceHandle: d ? w : o,
      target: d ? r : _,
      targetHandle: d ? o : w
    };
    C.connection = E;
    const H = k && V && (n === Or.Strict ? d && g === "source" || !d && g === "target" : _ !== r || w !== o);
    C.isValid = H && u(E), C.toHandle = Wc(_, g, w, c, n, !1);
  }
  return C;
}
const P0 = {
  onPointerDown: M0,
  isValid: Gc
};
function V0({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = fn(e);
  function i({ translateExtent: s, width: l, height: u, zoomStep: c = 10, pannable: d = !0, zoomable: p = !0, inversePan: v = !1 }) {
    const h = (_) => {
      const w = n();
      if (_.sourceEvent.type !== "wheel" || !t)
        return;
      const k = -_.sourceEvent.deltaY * (_.sourceEvent.deltaMode === 1 ? 0.05 : _.sourceEvent.deltaMode ? 1 : 2e-3) * c, V = w[2] * Math.pow(2, k);
      t.scaleTo(V);
    };
    let b = [0, 0];
    const x = (_) => {
      (_.sourceEvent.type === "mousedown" || _.sourceEvent.type === "touchstart") && (b = [
        _.sourceEvent.clientX ?? _.sourceEvent.touches[0].clientX,
        _.sourceEvent.clientY ?? _.sourceEvent.touches[0].clientY
      ]);
    }, C = (_) => {
      const w = n();
      if (_.sourceEvent.type !== "mousemove" && _.sourceEvent.type !== "touchmove" || !t)
        return;
      const k = [
        _.sourceEvent.clientX ?? _.sourceEvent.touches[0].clientX,
        _.sourceEvent.clientY ?? _.sourceEvent.touches[0].clientY
      ], V = [k[0] - b[0], k[1] - b[1]];
      b = k;
      const E = r() * Math.max(w[2], Math.log(w[2])) * (v ? -1 : 1), H = {
        x: w[0] - V[0] * E,
        y: w[1] - V[1] * E
      }, N = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: H.x,
        y: H.y,
        zoom: w[2]
      }, N, s);
    }, g = Hc().on("start", x).on("zoom", d ? C : null).on("zoom.wheel", p ? h : null);
    o.call(g, {});
  }
  function a() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: a,
    pointer: yn
  };
}
const O0 = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, ba = (e) => ({
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
function H0({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: a, onPanZoomStart: s, onPanZoom: l, onPanZoomEnd: u }) {
  return (c) => {
    if (Br(c, t))
      return !1;
    c.preventDefault(), c.stopImmediatePropagation();
    const d = n.property("__zoom").k || 1;
    if (c.ctrlKey && a) {
      const x = yn(c), C = Jc(c), g = d * Math.pow(2, C);
      r.scaleTo(n, g, x, c);
      return;
    }
    const p = c.deltaMode === 1 ? 20 : 1;
    let v = o === dr.Vertical ? 0 : c.deltaX * p, h = o === dr.Horizontal ? 0 : c.deltaY * p;
    !Wi() && c.shiftKey && o !== dr.Vertical && (v = c.deltaY * p, h = 0), r.translateBy(
      n,
      -(v / d) * i,
      -(h / d) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const b = ba(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, s == null || s(c, b)), e.isPanScrolling && (l == null || l(c, b), e.panScrollTimeout = setTimeout(() => {
      u == null || u(c, b), e.isPanScrolling = !1;
    }, 150));
  };
}
function T0({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", a = !t && i && !r.ctrlKey, s = Br(r, e);
    if (r.ctrlKey && i && s && r.preventDefault(), a || s)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function N0({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
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
function D0({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (a) => {
    var s;
    if (!((s = a.sourceEvent) != null && s.internal) && (e.isZoomingOrPanning = !1, i && Uc(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && a.sourceEvent && i(a.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && O0(e.prevViewport, a.transform))) {
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
    const p = e || t, v = n && c.ctrlKey;
    if (c.button === 1 && c.type === "mousedown" && (Br(c, `${u}-flow__node`) || Br(c, `${u}-flow__edge`)))
      return !0;
    if (!r && !p && !o && !i && !n || a || Br(c, s) && c.type === "wheel" || Br(c, l) && (c.type !== "wheel" || o && c.type === "wheel" && !e) || !n && c.ctrlKey && c.type === "wheel")
      return !1;
    if (!n && c.type === "touchstart" && ((d = c.touches) == null ? void 0 : d.length) > 1)
      return c.preventDefault(), !1;
    if (!p && !o && !v && c.type === "wheel" || !r && (c.type === "mousedown" || c.type === "touchstart") || Array.isArray(r) && !r.includes(c.button) && c.type === "mousedown")
      return !1;
    const h = Array.isArray(r) && r.includes(c.button) || !c.button || c.button <= 1;
    return (!c.ctrlKey || c.type === "wheel") && h;
  };
}
function A0({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: i, onPanZoom: a, onPanZoomStart: s, onPanZoomEnd: l, onDraggingChange: u }) {
  const c = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = e.getBoundingClientRect(), p = Hc().clickDistance(!jn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), v = fn(e).call(p);
  _({
    x: i.x,
    y: i.y,
    zoom: oo(i.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], o);
  const h = v.on("wheel.zoom"), b = v.on("dblclick.zoom");
  p.wheelDelta(Jc);
  function x(L, B) {
    return v ? new Promise((S) => {
      p == null || p.transform(Ra(v, B == null ? void 0 : B.duration, () => S(!0)), L);
    }) : Promise.resolve(!1);
  }
  function C({ noWheelClassName: L, noPanClassName: B, onPaneContextMenu: S, userSelectionActive: $, panOnScroll: M, panOnDrag: T, panOnScrollMode: P, panOnScrollSpeed: O, preventScrolling: A, zoomOnPinch: X, zoomOnScroll: W, zoomOnDoubleClick: U, zoomActivationKeyPressed: Q, lib: F, onTransformChange: ge }) {
    $ && !c.isZoomingOrPanning && g();
    const de = M && !Q && !$ ? H0({
      zoomPanValues: c,
      noWheelClassName: L,
      d3Selection: v,
      d3Zoom: p,
      panOnScrollMode: P,
      panOnScrollSpeed: O,
      zoomOnPinch: X,
      onPanZoomStart: s,
      onPanZoom: a,
      onPanZoomEnd: l
    }) : T0({
      noWheelClassName: L,
      preventScrolling: A,
      d3ZoomHandler: h
    });
    if (v.on("wheel.zoom", de, { passive: !1 }), !$) {
      const le = N0({
        zoomPanValues: c,
        onDraggingChange: u,
        onPanZoomStart: s
      });
      p.on("start", le);
      const ke = L0({
        zoomPanValues: c,
        panOnDrag: T,
        onPaneContextMenu: !!S,
        onPanZoom: a,
        onTransformChange: ge
      });
      p.on("zoom", ke);
      const $e = D0({
        zoomPanValues: c,
        panOnDrag: T,
        panOnScroll: M,
        onPaneContextMenu: S,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      p.on("end", $e);
    }
    const he = z0({
      zoomActivationKeyPressed: Q,
      panOnDrag: T,
      zoomOnScroll: W,
      panOnScroll: M,
      zoomOnDoubleClick: U,
      zoomOnPinch: X,
      userSelectionActive: $,
      noPanClassName: B,
      noWheelClassName: L,
      lib: F
    });
    p.filter(he), U ? v.on("dblclick.zoom", b) : v.on("dblclick.zoom", null);
  }
  function g() {
    p.on("zoom", null);
  }
  async function _(L, B, S) {
    const $ = Ia(L), M = p == null ? void 0 : p.constrain()($, B, S);
    return M && await x(M), new Promise((T) => T(M));
  }
  async function w(L, B) {
    const S = Ia(L);
    return await x(S, B), new Promise(($) => $(S));
  }
  function k(L) {
    if (v) {
      const B = Ia(L), S = v.property("__zoom");
      (S.k !== L.zoom || S.x !== L.x || S.y !== L.y) && (p == null || p.transform(v, B, null, { sync: !0 }));
    }
  }
  function V() {
    const L = v ? Oc(v.node()) : { x: 0, y: 0, k: 1 };
    return { x: L.x, y: L.y, zoom: L.k };
  }
  function E(L, B) {
    return v ? new Promise((S) => {
      p == null || p.scaleTo(Ra(v, B == null ? void 0 : B.duration, () => S(!0)), L);
    }) : Promise.resolve(!1);
  }
  function H(L, B) {
    return v ? new Promise((S) => {
      p == null || p.scaleBy(Ra(v, B == null ? void 0 : B.duration, () => S(!0)), L);
    }) : Promise.resolve(!1);
  }
  function N(L) {
    p == null || p.scaleExtent(L);
  }
  function I(L) {
    p == null || p.translateExtent(L);
  }
  function R(L) {
    const B = !jn(L) || L < 0 ? 0 : L;
    p == null || p.clickDistance(B);
  }
  return {
    update: C,
    destroy: g,
    setViewport: w,
    setViewportConstrained: _,
    getViewport: V,
    scaleTo: E,
    scaleBy: H,
    setScaleExtent: N,
    setTranslateExtent: I,
    syncViewport: k,
    setClickDistance: R
  };
}
var Jl;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Jl || (Jl = {}));
var I0 = /* @__PURE__ */ ie('<div role="button" tabindex="-1"><!></div>');
function gr(e, t) {
  me(t, !1);
  const [n, r] = vt(), o = () => oe(U, "$connectable", n), i = () => oe(he, "$connectionRadius", n), a = () => oe(ge, "$domNode", n), s = () => oe(de, "$nodeLookup", n), l = () => oe(F, "$connectionMode", n), u = () => oe($e, "$lib", n), c = () => oe(Ne, "$autoPanOnConnect", n), d = () => oe(Ve, "$flowId", n), p = () => oe(ke, "$isValidConnectionStore", n), v = () => oe(ue, "$onedgecreate", n), h = () => oe(ce, "$onConnectAction", n), b = () => oe(fe, "$onConnectStartAction", n), x = () => oe(ae, "$onConnectEndAction", n), C = () => oe(le, "$viewport", n), g = () => oe(it, "$connection", n), _ = () => oe(qe, "$edges", n), w = () => oe(Le, "$connectionLookup", n), k = /* @__PURE__ */ se(), V = /* @__PURE__ */ se(), E = /* @__PURE__ */ se(), H = /* @__PURE__ */ se(), N = /* @__PURE__ */ se(), I = /* @__PURE__ */ se(), R = /* @__PURE__ */ se(), L = /* @__PURE__ */ se();
  let B = y(t, "id", 12, void 0), S = y(t, "type", 12, "source"), $ = y(t, "position", 28, () => ze.Top), M = y(t, "style", 12, void 0), T = y(t, "isValidConnection", 12, void 0), P = y(t, "onconnect", 12, void 0), O = y(t, "ondisconnect", 12, void 0), A = y(t, "isConnectable", 12, void 0), X = y(t, "class", 12, void 0);
  const W = Mr("svelteflow__node_id"), U = Mr("svelteflow__node_connectable"), Q = tt(), {
    connectionMode: F,
    domNode: ge,
    nodeLookup: de,
    connectionRadius: he,
    viewport: le,
    isValidConnection: ke,
    lib: $e,
    addEdge: He,
    onedgecreate: ue,
    panBy: J,
    cancelConnection: Me,
    updateConnection: K,
    autoPanOnConnect: Ne,
    edges: qe,
    connectionLookup: Le,
    onconnect: ce,
    onconnectstart: fe,
    onconnectend: ae,
    flowId: Ve,
    connection: it
  } = Q;
  function rt(Ie) {
    const ut = Rc(Ie);
    (ut && Ie.button === 0 || !ut) && P0.onPointerDown(Ie, {
      handleId: f(E),
      nodeId: W,
      isTarget: f(k),
      connectionRadius: i(),
      domNode: a(),
      nodeLookup: s(),
      connectionMode: l(),
      lib: u(),
      autoPanOnConnect: c(),
      flowId: d(),
      isValidConnection: T() ?? p(),
      updateConnection: K,
      cancelConnection: Me,
      panBy: J,
      onConnect: (je) => {
        var Be;
        const ct = v() ? v()(je) : je;
        ct && (He(ct), (Be = h()) == null || Be(je));
      },
      onConnectStart: (je, Be) => {
        var ct;
        (ct = b()) == null || ct(je, {
          nodeId: Be.nodeId,
          handleId: Be.handleId,
          handleType: Be.handleType
        });
      },
      onConnectEnd: (je, Be) => {
        var ct;
        (ct = x()) == null || ct(je, Be);
      },
      getTransform: () => [
        C().x,
        C().y,
        C().zoom
      ],
      getFromHandle: () => g().fromHandle
    });
  }
  let te = /* @__PURE__ */ se(null), Fe = /* @__PURE__ */ se();
  be(() => re(S()), () => {
    ee(k, S() === "target");
  }), be(
    () => (re(A()), o()),
    () => {
      ee(V, A() !== void 0 ? A() : o());
    }
  ), be(() => re(B()), () => {
    ee(E, B() || null);
  }), be(
    () => (re(P()), re(O()), _(), w(), re(S()), re(B())),
    () => {
      (P() || O()) && (_(), ee(Fe, w().get(`${W}-${S()}${B() ? `-${B()}` : ""}`)));
    }
  ), be(
    () => (f(te), f(Fe), re(O()), re(P())),
    () => {
      if (f(te) && !Rh(f(Fe), f(te))) {
        const Ie = f(Fe) ?? /* @__PURE__ */ new Map();
        Rl(f(te), Ie, O()), Rl(Ie, f(te), P());
      }
      ee(te, f(Fe) ?? /* @__PURE__ */ new Map());
    }
  ), be(() => g(), () => {
    ee(H, !!g().fromHandle);
  }), be(
    () => (g(), re(S()), f(E)),
    () => {
      var Ie, ut, je;
      ee(N, ((Ie = g().fromHandle) == null ? void 0 : Ie.nodeId) === W && ((ut = g().fromHandle) == null ? void 0 : ut.type) === S() && ((je = g().fromHandle) == null ? void 0 : je.id) === f(E));
    }
  ), be(
    () => (g(), re(S()), f(E)),
    () => {
      var Ie, ut, je;
      ee(I, ((Ie = g().toHandle) == null ? void 0 : Ie.nodeId) === W && ((ut = g().toHandle) == null ? void 0 : ut.type) === S() && ((je = g().toHandle) == null ? void 0 : je.id) === f(E));
    }
  ), be(
    () => (l(), g(), re(S()), f(E)),
    () => {
      var Ie, ut, je;
      ee(R, l() === Or.Strict ? ((Ie = g().fromHandle) == null ? void 0 : Ie.type) !== S() : W !== ((ut = g().fromHandle) == null ? void 0 : ut.nodeId) || f(E) !== ((je = g().fromHandle) == null ? void 0 : je.id));
    }
  ), be(() => (f(I), g()), () => {
    ee(L, f(I) && g().isValid);
  }), Vt(), Xe();
  var ve = I0();
  Ee(ve, "data-nodeid", W);
  let jt;
  var Xt = Y(ve);
  Lt(Xt, t, "default", {}), j(ve), Se(
    (Ie, ut) => {
      Ee(ve, "data-handleid", f(E)), Ee(ve, "data-handlepos", $()), Ee(ve, "data-id", `${d() ?? ""}-${W ?? ""}-${(B() || "") ?? ""}-${S() ?? ""}`), jt = Dt(ve, 1, Ie, null, jt, ut), $t(ve, M());
    },
    [
      () => En(Bt([
        "svelte-flow__handle",
        `svelte-flow__handle-${$()}`,
        "nodrag",
        "nopan",
        $(),
        X()
      ])),
      () => ({
        valid: f(L),
        connectingto: f(I),
        connectingfrom: f(N),
        source: !f(k),
        target: f(k),
        connectablestart: f(V),
        connectableend: f(V),
        connectable: f(V),
        connectionindicator: f(V) && (!f(H) || f(R))
      })
    ],
    _e
  ), ft("mousedown", ve, rt), ft("touchstart", ve, rt), z(e, ve);
  var un = ye({
    get id() {
      return B();
    },
    set id(Ie) {
      B(Ie), m();
    },
    get type() {
      return S();
    },
    set type(Ie) {
      S(Ie), m();
    },
    get position() {
      return $();
    },
    set position(Ie) {
      $(Ie), m();
    },
    get style() {
      return M();
    },
    set style(Ie) {
      M(Ie), m();
    },
    get isValidConnection() {
      return T();
    },
    set isValidConnection(Ie) {
      T(Ie), m();
    },
    get onconnect() {
      return P();
    },
    set onconnect(Ie) {
      P(Ie), m();
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
      return X();
    },
    set class(Ie) {
      X(Ie), m();
    }
  });
  return r(), un;
}
pe(
  gr,
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
var R0 = /* @__PURE__ */ ie("<!> <!>", 1);
function Fi(e, t) {
  const n = gt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  gt(n, ["data", "targetPosition", "sourcePosition"]), me(t, !1);
  let r = y(t, "data", 28, () => ({ label: "Node" })), o = y(t, "targetPosition", 12, void 0), i = y(t, "sourcePosition", 12, void 0);
  Xe();
  var a = R0(), s = Ce(a);
  const l = /* @__PURE__ */ _e(() => o() ?? ze.Top);
  gr(s, {
    type: "target",
    get position() {
      return f(l);
    }
  });
  var u = q(s), c = q(u);
  const d = /* @__PURE__ */ _e(() => i() ?? ze.Bottom);
  return gr(c, {
    type: "source",
    get position() {
      return f(d);
    }
  }), Se(() => {
    var p;
    return bt(u, ` ${((p = r()) == null ? void 0 : p.label) ?? ""} `);
  }), z(e, a), ye({
    get data() {
      return r();
    },
    set data(p) {
      r(p), m();
    },
    get targetPosition() {
      return o();
    },
    set targetPosition(p) {
      o(p), m();
    },
    get sourcePosition() {
      return i();
    },
    set sourcePosition(p) {
      i(p), m();
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
var q0 = /* @__PURE__ */ ie(" <!>", 1);
function Qc(e, t) {
  const n = gt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  gt(n, ["data", "sourcePosition"]), me(t, !1);
  let r = y(t, "data", 28, () => ({ label: "Node" })), o = y(t, "sourcePosition", 12, void 0);
  Xe(), Re();
  var i = q0(), a = Ce(i), s = q(a);
  const l = /* @__PURE__ */ _e(() => o() ?? ze.Bottom);
  return gr(s, {
    type: "source",
    get position() {
      return f(l);
    }
  }), Se(() => {
    var u;
    return bt(a, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), z(e, i), ye({
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
var Z0 = /* @__PURE__ */ ie(" <!>", 1);
function ed(e, t) {
  const n = gt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  gt(n, ["data", "targetPosition"]), me(t, !1);
  let r = y(t, "data", 28, () => ({ label: "Node" })), o = y(t, "targetPosition", 12, void 0);
  Xe(), Re();
  var i = Z0(), a = Ce(i), s = q(a);
  const l = /* @__PURE__ */ _e(() => o() ?? ze.Top);
  return gr(s, {
    type: "target",
    get position() {
      return f(l);
    }
  }), Se(() => {
    var u;
    return bt(a, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), z(e, i), ye({
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
var B0 = /* @__PURE__ */ ie("<div><!></div>");
function nd(e, t) {
  me(t, !1);
  const [n, r] = vt(), o = () => oe(i, "$domNode", n), { domNode: i } = tt();
  Xe();
  var a = B0(), s = Y(a);
  Lt(s, t, "default", {}), j(a), Nt(a, (l, u) => Gi == null ? void 0 : Gi(l, u), () => ({
    target: ".svelte-flow__edgelabel-renderer",
    domNode: o()
  })), z(e, a), ye(), r();
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
var j0 = /* @__PURE__ */ ie('<div class="svelte-flow__edge-label" role="button" tabindex="-1"><!></div>');
function od(e, t) {
  me(t, !1);
  let n = y(t, "style", 12, void 0), r = y(t, "x", 12, void 0), o = y(t, "y", 12, void 0);
  const i = rd(), a = Mr("svelteflow__edge_id");
  return Xe(), nd(e, {
    children: (s, l) => {
      var u = j0();
      let c;
      var d = Y(u);
      Lt(d, t, "default", {}), j(u), Se(() => c = $t(u, "pointer-events: all;" + n(), c, {
        transform: `translate(-50%, -50%) translate(${r() ?? ""}px,${o() ?? ""}px)`
      })), ft("keyup", u, () => {
      }), ft("click", u, () => {
        a && i(a);
      }), z(s, u);
    },
    $$slots: { default: !0 }
  }), ye({
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
var X0 = /* @__PURE__ */ Oe('<path fill="none" class="svelte-flow__edge-interaction"></path>'), Y0 = /* @__PURE__ */ Oe('<path fill="none"></path><!><!>', 1);
function ni(e, t) {
  me(t, !1);
  let n = y(t, "id", 12, void 0), r = y(t, "path", 12), o = y(t, "label", 12, void 0), i = y(t, "labelX", 12, void 0), a = y(t, "labelY", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "markerStart", 12, void 0), u = y(t, "markerEnd", 12, void 0), c = y(t, "style", 12, void 0), d = y(t, "interactionWidth", 12, 20), p = y(t, "class", 12, void 0), v = d() === void 0 ? 20 : d();
  Xe();
  var h = Y0(), b = Ce(h), x = q(b);
  {
    var C = (w) => {
      var k = X0();
      Ee(k, "stroke-opacity", 0), Ee(k, "stroke-width", v), Se(() => Ee(k, "d", r())), z(w, k);
    };
    xe(x, (w) => {
      v && w(C);
    });
  }
  var g = q(x);
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
          var E = Ye();
          Se(() => bt(E, o())), z(k, E);
        },
        $$slots: { default: !0 }
      });
    };
    xe(g, (w) => {
      o() && w(_);
    });
  }
  return Se(
    (w) => {
      Ee(b, "id", n()), Ee(b, "d", r()), Dt(b, 0, w), Ee(b, "marker-start", l()), Ee(b, "marker-end", u()), $t(b, c());
    },
    [
      () => En(Bt(["svelte-flow__edge-path", p()]))
    ],
    _e
  ), z(e, h), ye({
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
      return p();
    },
    set class(w) {
      p(w), m();
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
  ]), me(t, !1);
  const r = /* @__PURE__ */ se(), o = /* @__PURE__ */ se(), i = /* @__PURE__ */ se();
  let a = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), p = y(t, "sourceX", 12), v = y(t, "sourceY", 12), h = y(t, "sourcePosition", 12), b = y(t, "targetX", 12), x = y(t, "targetY", 12), C = y(t, "targetPosition", 12);
  return be(
    () => (f(r), f(o), f(i), re(p()), re(v()), re(b()), re(x()), re(h()), re(C())),
    () => {
      ((g) => (ee(r, g[0]), ee(o, g[1]), ee(i, g[2])))(qc({
        sourceX: p(),
        sourceY: v(),
        targetX: b(),
        targetY: x(),
        sourcePosition: h(),
        targetPosition: C()
      }));
    }
  ), Vt(), Xe(), ni(e, {
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
  }), ye({
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
      return p();
    },
    set sourceX(g) {
      p(g), m();
    },
    get sourceY() {
      return v();
    },
    set sourceY(g) {
      v(g), m();
    },
    get sourcePosition() {
      return h();
    },
    set sourcePosition(g) {
      h(g), m();
    },
    get targetX() {
      return b();
    },
    set targetX(g) {
      b(g), m();
    },
    get targetY() {
      return x();
    },
    set targetY(g) {
      x(g), m();
    },
    get targetPosition() {
      return C();
    },
    set targetPosition(g) {
      C(g), m();
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
  ]), me(t, !1);
  const r = /* @__PURE__ */ se(), o = /* @__PURE__ */ se(), i = /* @__PURE__ */ se();
  let a = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), p = y(t, "sourceX", 12), v = y(t, "sourceY", 12), h = y(t, "sourcePosition", 12), b = y(t, "targetX", 12), x = y(t, "targetY", 12), C = y(t, "targetPosition", 12);
  return be(
    () => (f(r), f(o), f(i), re(p()), re(v()), re(b()), re(x()), re(h()), re(C())),
    () => {
      ((g) => (ee(r, g[0]), ee(o, g[1]), ee(i, g[2])))(Ki({
        sourceX: p(),
        sourceY: v(),
        targetX: b(),
        targetY: x(),
        sourcePosition: h(),
        targetPosition: C()
      }));
    }
  ), Vt(), Xe(), ni(e, {
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
  }), ye({
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
      return p();
    },
    set sourceX(g) {
      p(g), m();
    },
    get sourceY() {
      return v();
    },
    set sourceY(g) {
      v(g), m();
    },
    get sourcePosition() {
      return h();
    },
    set sourcePosition(g) {
      h(g), m();
    },
    get targetX() {
      return b();
    },
    set targetX(g) {
      b(g), m();
    },
    get targetY() {
      return x();
    },
    set targetY(g) {
      x(g), m();
    },
    get targetPosition() {
      return C();
    },
    set targetPosition(g) {
      C(g), m();
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
  ]), me(t, !1);
  const r = /* @__PURE__ */ se(), o = /* @__PURE__ */ se(), i = /* @__PURE__ */ se();
  let a = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), p = y(t, "sourceX", 12), v = y(t, "sourceY", 12), h = y(t, "targetX", 12), b = y(t, "targetY", 12);
  return be(
    () => (f(r), f(o), f(i), re(p()), re(v()), re(h()), re(b())),
    () => {
      ((x) => (ee(r, x[0]), ee(o, x[1]), ee(i, x[2])))(cs({
        sourceX: p(),
        sourceY: v(),
        targetX: h(),
        targetY: b()
      }));
    }
  ), Vt(), Xe(), ni(e, {
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
  }), ye({
    get label() {
      return a();
    },
    set label(x) {
      a(x), m();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(x) {
      s(x), m();
    },
    get style() {
      return l();
    },
    set style(x) {
      l(x), m();
    },
    get markerStart() {
      return u();
    },
    set markerStart(x) {
      u(x), m();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(x) {
      c(x), m();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(x) {
      d(x), m();
    },
    get sourceX() {
      return p();
    },
    set sourceX(x) {
      p(x), m();
    },
    get sourceY() {
      return v();
    },
    set sourceY(x) {
      v(x), m();
    },
    get targetX() {
      return h();
    },
    set targetX(x) {
      h(x), m();
    },
    get targetY() {
      return b();
    },
    set targetY(x) {
      b(x), m();
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
  ]), me(t, !1);
  const r = /* @__PURE__ */ se(), o = /* @__PURE__ */ se(), i = /* @__PURE__ */ se();
  let a = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), p = y(t, "sourceX", 12), v = y(t, "sourceY", 12), h = y(t, "sourcePosition", 12), b = y(t, "targetX", 12), x = y(t, "targetY", 12), C = y(t, "targetPosition", 12);
  return be(
    () => (f(r), f(o), f(i), re(p()), re(v()), re(b()), re(x()), re(h()), re(C())),
    () => {
      ((g) => (ee(r, g[0]), ee(o, g[1]), ee(i, g[2])))(Ki({
        sourceX: p(),
        sourceY: v(),
        targetX: b(),
        targetY: x(),
        sourcePosition: h(),
        targetPosition: C(),
        borderRadius: 0
      }));
    }
  ), Vt(), Xe(), ni(e, {
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
  }), ye({
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
      return p();
    },
    set sourceX(g) {
      p(g), m();
    },
    get sourceY() {
      return v();
    },
    set sourceY(g) {
      v(g), m();
    },
    get sourcePosition() {
      return h();
    },
    set sourcePosition(g) {
      h(g), m();
    },
    get targetX() {
      return b();
    },
    set targetX(g) {
      b(g), m();
    },
    get targetY() {
      return x();
    },
    set targetY(g) {
      x(g), m();
    },
    get targetPosition() {
      return C();
    },
    set targetPosition(g) {
      C(g), m();
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
function W0(e, t) {
  const n = e.set, r = t.set, o = G(e), i = G(t);
  let a = o.length === 0 && i.length > 0 ? i : o;
  e.set(a);
  const s = (l) => {
    const u = n(l);
    return a = u, r(a), u;
  };
  e.set = t.set = s, e.update = t.update = (l) => s(l(a));
}
function K0(e, t) {
  const n = e.set, r = t.set;
  let o = G(t);
  e.set(o);
  const i = (a) => {
    n(a), r(a), o = a;
  };
  e.set = t.set = i, e.update = t.update = (a) => i(a(o));
}
const F0 = (e, t, n) => {
  if (!n)
    return;
  const r = G(e), o = t.set, i = n.set;
  let a = n ? G(n) : { x: 0, y: 0, zoom: 1 };
  t.set(a), t.set = (s) => (o(s), i(s), a = s, s), n.set = (s) => (r == null || r.syncViewport(s), o(s), i(s), a = s, s), t.update = (s) => {
    t.set(s(a));
  }, n.update = (s) => {
    n.set(s(a));
  };
}, G0 = (e, t, n, r = [0, 0], o = Bi, i, a, s, l, u, c, d, p) => {
  const { subscribe: v, set: h, update: b } = Pe([]);
  let x = e, C = {}, g = !0;
  const _ = (E) => {
    const H = Bc(E, t, n, {
      elevateNodesOnSelect: g,
      nodeOrigin: r,
      nodeExtent: o,
      defaults: C,
      checkEquality: !1
    });
    return G(i) && H && G(l) && (Yh({
      nodes: t,
      width: G(u),
      height: G(c),
      panZoom: G(l),
      minZoom: G(d),
      maxZoom: G(p)
    }, G(a)).then((N) => {
      var I;
      (I = G(s)) == null || I.resolve(N), s.set(null);
    }), i.set(!1), a.set(void 0)), x = E, h(x), x;
  }, w = (E) => _(E(x)), k = (E) => {
    C = E;
  }, V = (E) => {
    g = E.elevateNodesOnSelect ?? g;
  };
  return _(x), {
    subscribe: v,
    set: _,
    update: w,
    setDefaultOptions: k,
    setOptions: V
  };
}, U0 = (e, t, n, r) => {
  const { subscribe: o, set: i, update: a } = Pe([]);
  let s = e, l = {};
  const u = (p) => {
    const v = l ? p.map((h) => ({ ...l, ...h })) : p;
    Xc(t, n, v), s = v, i(s);
  }, c = (p) => u(p(s)), d = (p) => {
    l = p;
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
}, J0 = ({ nodes: e = [], edges: t = [], width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) => {
  const s = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), d = i ?? [0, 0], p = a ?? Bi;
  Bc(e, s, l, {
    nodeExtent: p,
    nodeOrigin: d,
    elevateNodesOnSelect: !1,
    checkEquality: !1
  }), Xc(u, c, t);
  let v = { x: 0, y: 0, zoom: 1 };
  if (o && n && r) {
    const V = ei(s, {
      filter: (E) => !!((E.width || E.initialWidth) && (E.height || E.initialHeight))
    });
    v = js(V, n, r, 0.5, 2, 0.1);
  }
  const h = Pe(!1), b = Pe(void 0), x = Pe(null), C = Pe(null), g = Pe(500), _ = Pe(500), w = Pe(0.5), k = Pe(2);
  return {
    flowId: Pe(null),
    nodes: G0(e, s, l, d, p, h, b, x, C, g, _, w, k),
    nodeLookup: cn(s),
    parentLookup: cn(l),
    edgeLookup: cn(c),
    visibleNodes: cn([]),
    edges: U0(t, u, c),
    visibleEdges: cn([]),
    connectionLookup: cn(u),
    width: g,
    height: _,
    minZoom: w,
    maxZoom: k,
    nodeOrigin: Pe(d),
    nodeDragThreshold: Pe(1),
    nodeExtent: Pe(p),
    translateExtent: Pe(Bi),
    autoPanOnNodeDrag: Pe(!0),
    autoPanOnConnect: Pe(!0),
    fitViewQueued: h,
    fitViewOptions: b,
    fitViewResolver: x,
    panZoom: C,
    snapGrid: Pe(null),
    dragging: Pe(!1),
    selectionRect: Pe(null),
    selectionKeyPressed: Pe(!1),
    multiselectionKeyPressed: Pe(!1),
    deleteKeyPressed: Pe(!1),
    panActivationKeyPressed: Pe(!1),
    zoomActivationKeyPressed: Pe(!1),
    selectionRectMode: Pe(null),
    selectionMode: Pe(ji.Partial),
    nodeTypes: Pe(ld),
    edgeTypes: Pe(ud),
    viewport: Pe(v),
    connectionMode: Pe(Or.Strict),
    domNode: Pe(null),
    connection: cn(ss),
    connectionLineType: Pe(Wr.Bezier),
    connectionRadius: Pe(20),
    isValidConnection: Pe(() => !0),
    nodesDraggable: Pe(!0),
    nodesConnectable: Pe(!0),
    elementsSelectable: Pe(!0),
    selectNodesOnDrag: Pe(!0),
    markers: cn([]),
    defaultMarkerColor: Pe("#b1b1b7"),
    lib: cn("svelte"),
    onlyRenderVisibleElements: Pe(!1),
    onerror: Pe(Kh),
    ondelete: Pe(void 0),
    onedgecreate: Pe(void 0),
    onconnect: Pe(void 0),
    onconnectstart: Pe(void 0),
    onconnectend: Pe(void 0),
    onbeforedelete: Pe(void 0),
    nodesInitialized: Pe(!1),
    edgesInitialized: Pe(!1),
    viewportInitialized: Pe(!1),
    initialized: cn(!1)
  };
};
function Q0(e) {
  const t = cr([
    e.edges,
    e.nodes,
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.viewport,
    e.width,
    e.height
  ], ([n, , r, o, i, a, s]) => o && a && s ? n.filter((l) => {
    const u = r.get(l.source), c = r.get(l.target);
    return u && c && o0({
      sourceNode: u,
      targetNode: c,
      width: a,
      height: s,
      transform: [i.x, i.y, i.zoom]
    });
  }) : n);
  return cr([t, e.nodes, e.nodeLookup, e.connectionMode, e.onerror], ([n, , r, o, i]) => n.reduce((a, s) => {
    const l = r.get(s.source), u = r.get(s.target);
    if (!l || !u)
      return a;
    const c = d0({
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
      zIndex: r0({
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
function e2(e) {
  return cr([
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
  const s = J0({
    nodes: e,
    edges: t,
    width: n,
    height: r,
    fitView: o,
    nodeOrigin: i,
    nodeExtent: a
  });
  function l($) {
    s.nodeTypes.set({
      ...ld,
      ...$
    });
  }
  function u($) {
    s.edgeTypes.set({
      ...ud,
      ...$
    });
  }
  function c($) {
    const M = G(s.edges);
    s.edges.set(s0($, M));
  }
  const d = ($, M = !1) => {
    var T;
    const P = G(s.nodeLookup);
    for (const [O, A] of $) {
      const X = (T = P.get(O)) == null ? void 0 : T.internals.userNode;
      X && (X.position = A.position, X.dragging = M);
    }
    s.nodes.update((O) => O);
  };
  function p($) {
    var M, T, P;
    const O = G(s.nodeLookup), A = G(s.parentLookup), { changes: X, updatedInternals: W } = w0($, O, G(s.parentLookup), G(s.domNode), G(s.nodeOrigin));
    if (W) {
      g0(O, A, { nodeOrigin: i, nodeExtent: a });
      for (const U of X) {
        const Q = (M = O.get(U.id)) == null ? void 0 : M.internals.userNode;
        if (Q)
          switch (U.type) {
            case "dimensions": {
              const F = { ...Q.measured, ...U.dimensions };
              U.setAttributes && (Q.width = ((T = U.dimensions) == null ? void 0 : T.width) ?? Q.width, Q.height = ((P = U.dimensions) == null ? void 0 : P.height) ?? Q.height), Q.measured = F;
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
  function v($) {
    const M = G(s.fitViewResolver) ?? Jh();
    return s.fitViewQueued.set(!0), s.fitViewOptions.set($), s.fitViewResolver.set(M), s.nodes.set(G(s.nodes)), M.promise;
  }
  function h($, M) {
    const T = G(s.panZoom);
    return T ? T.scaleBy($, M) : Promise.resolve(!1);
  }
  function b($) {
    return h(1.2, $);
  }
  function x($) {
    return h(1 / 1.2, $);
  }
  function C($) {
    const M = G(s.panZoom);
    M && (M.setScaleExtent([$, G(s.maxZoom)]), s.minZoom.set($));
  }
  function g($) {
    const M = G(s.panZoom);
    M && (M.setScaleExtent([G(s.minZoom), $]), s.maxZoom.set($));
  }
  function _($) {
    const M = G(s.panZoom);
    M && (M.setTranslateExtent($), s.translateExtent.set($));
  }
  function w($) {
    let M = !1;
    return $.forEach((T) => {
      T.selected && (T.selected = !1, M = !0);
    }), M;
  }
  function k($) {
    var M;
    (M = G(s.panZoom)) == null || M.setClickDistance($);
  }
  function V($) {
    w(($ == null ? void 0 : $.nodes) || G(s.nodes)) && s.nodes.set(G(s.nodes)), w(($ == null ? void 0 : $.edges) || G(s.edges)) && s.edges.set(G(s.edges));
  }
  s.deleteKeyPressed.subscribe(async ($) => {
    var M;
    if ($) {
      const T = G(s.nodes), P = G(s.edges), O = T.filter((U) => U.selected), A = P.filter((U) => U.selected), { nodes: X, edges: W } = await Nc({
        nodesToRemove: O,
        edgesToRemove: A,
        nodes: T,
        edges: P,
        onBeforeDelete: G(s.onbeforedelete)
      });
      (X.length || W.length) && (s.nodes.update((U) => U.filter((Q) => !X.some((F) => F.id === Q.id))), s.edges.update((U) => U.filter((Q) => !W.some((F) => F.id === Q.id))), (M = G(s.ondelete)) == null || M({
        nodes: X,
        edges: W
      }));
    }
  });
  function E($) {
    const M = G(s.multiselectionKeyPressed);
    s.nodes.update((T) => T.map((P) => {
      const O = $.includes(P.id), A = M && P.selected || O;
      return P.selected = A, P;
    })), M || s.edges.update((T) => T.map((P) => (P.selected = !1, P)));
  }
  function H($) {
    const M = G(s.multiselectionKeyPressed);
    s.edges.update((T) => T.map((P) => {
      const O = $.includes(P.id), A = M && P.selected || O;
      return P.selected = A, P;
    })), M || s.nodes.update((T) => T.map((P) => (P.selected = !1, P)));
  }
  function N($) {
    var M;
    const T = (M = G(s.nodes)) == null ? void 0 : M.find((P) => P.id === $);
    if (!T) {
      console.warn("012", ro.error012($));
      return;
    }
    s.selectionRect.set(null), s.selectionRectMode.set(null), T.selected ? T.selected && G(s.multiselectionKeyPressed) && V({ nodes: [T], edges: [] }) : E([$]);
  }
  function I($) {
    const M = G(s.viewport);
    return b0({
      delta: $,
      panZoom: G(s.panZoom),
      transform: [M.x, M.y, M.zoom],
      translateExtent: G(s.translateExtent),
      width: G(s.width),
      height: G(s.height)
    });
  }
  const R = Pe(ss), L = ($) => {
    R.set({ ...$ });
  };
  function B() {
    R.set(ss);
  }
  function S() {
    s.selectionRect.set(null), s.selectionRectMode.set(null), s.snapGrid.set(null), s.isValidConnection.set(() => !0), V(), B();
  }
  return {
    // state
    ...s,
    // derived state
    visibleEdges: Q0(s),
    visibleNodes: e2(s),
    connection: cr([R, s.viewport], ([$, M]) => $.inProgress ? {
      ...$,
      to: ti($.to, [M.x, M.y, M.zoom])
    } : { ...$ }),
    markers: cr([s.edges, s.defaultMarkerColor, s.flowId], ([$, M, T]) => f0($, { defaultColor: M, id: T })),
    initialized: (() => {
      let $ = !1;
      const M = G(s.nodes).length, T = G(s.edges).length;
      return cr([s.nodesInitialized, s.edgesInitialized, s.viewportInitialized], ([P, O, A]) => $ || (M === 0 ? $ = A : T === 0 ? $ = A && P : $ = A && P && O, $));
    })(),
    // actions
    syncNodeStores: ($) => W0(s.nodes, $),
    syncEdgeStores: ($) => K0(s.edges, $),
    syncViewport: ($) => F0(s.panZoom, s.viewport, $),
    setNodeTypes: l,
    setEdgeTypes: u,
    addEdge: c,
    updateNodePositions: d,
    updateNodeInternals: p,
    zoomIn: b,
    zoomOut: x,
    fitView: ($) => v($),
    setMinZoom: C,
    setMaxZoom: g,
    setTranslateExtent: _,
    setPaneClickDistance: k,
    unselectNodesAndEdges: V,
    addSelectedNodes: E,
    addSelectedEdges: H,
    handleNodeSelection: N,
    panBy: I,
    updateConnection: L,
    cancelConnection: B,
    reset: S
  };
}
function tt() {
  const e = Mr(xa);
  if (!e)
    throw new Error("In order to use useStore you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
function t2({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) {
  const s = cd({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a });
  return Qr(xa, {
    getStore: () => s
  }), s;
}
function eu(e, t) {
  const { panZoom: n, minZoom: r, maxZoom: o, initialViewport: i, viewport: a, dragging: s, translateExtent: l, paneClickDistance: u } = t, c = A0({
    domNode: e,
    minZoom: r,
    maxZoom: o,
    translateExtent: l,
    viewport: i,
    paneClickDistance: u,
    onDraggingChange: s.set
  }), d = c.getViewport();
  return a.set(d), n.set(c), c.update(t), {
    update(p) {
      c.update(p);
    }
  };
}
var n2 = /* @__PURE__ */ ie('<div class="svelte-flow__zoom svelte-4xkw84"><!></div>');
const r2 = {
  hash: "svelte-4xkw84",
  code: ".svelte-flow__zoom.svelte-4xkw84 {width:100%;height:100%;position:absolute;top:0;left:0;z-index:4;}"
};
function dd(e, t) {
  me(t, !1), ot(e, r2);
  const [n, r] = vt(), o = () => oe(P, "$panActivationKeyPressed", n), i = () => oe(B, "$minZoom", n), a = () => oe(S, "$maxZoom", n), s = () => oe(O, "$zoomActivationKeyPressed", n), l = () => oe(L, "$selectionRect", n), u = () => oe(M, "$translateExtent", n), c = () => oe(T, "$lib", n), d = /* @__PURE__ */ se(), p = /* @__PURE__ */ se(), v = /* @__PURE__ */ se();
  let h = y(t, "initialViewport", 12, void 0), b = y(t, "onMoveStart", 12, void 0), x = y(t, "onMove", 12, void 0), C = y(t, "onMoveEnd", 12, void 0), g = y(t, "panOnScrollMode", 12), _ = y(t, "preventScrolling", 12), w = y(t, "zoomOnScroll", 12), k = y(t, "zoomOnDoubleClick", 12), V = y(t, "zoomOnPinch", 12), E = y(t, "panOnDrag", 12), H = y(t, "panOnScroll", 12), N = y(t, "paneClickDistance", 12);
  const {
    viewport: I,
    panZoom: R,
    selectionRect: L,
    minZoom: B,
    maxZoom: S,
    dragging: $,
    translateExtent: M,
    lib: T,
    panActivationKeyPressed: P,
    zoomActivationKeyPressed: O,
    viewportInitialized: A
  } = tt(), X = (F) => I.set({
    x: F[0],
    y: F[1],
    zoom: F[2]
  });
  hn(() => {
    Di(A, !0);
  }), be(() => re(h()), () => {
    ee(d, h() || { x: 0, y: 0, zoom: 1 });
  }), be(
    () => (o(), re(E())),
    () => {
      ee(p, o() || E());
    }
  ), be(
    () => (o(), re(H())),
    () => {
      ee(v, o() || H());
    }
  ), Vt(), Xe();
  var W = n2(), U = Y(W);
  Lt(U, t, "default", {}), j(W), Nt(W, (F, ge) => eu == null ? void 0 : eu(F, ge), () => ({
    viewport: I,
    minZoom: i(),
    maxZoom: a(),
    initialViewport: f(d),
    dragging: $,
    panZoom: R,
    onPanZoomStart: b(),
    onPanZoom: x(),
    onPanZoomEnd: C(),
    zoomOnScroll: w(),
    zoomOnDoubleClick: k(),
    zoomOnPinch: V(),
    panOnScroll: f(v),
    panOnDrag: f(p),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: g() || dr.Free,
    zoomActivationKeyPressed: s(),
    preventScrolling: typeof _() == "boolean" ? _() : !0,
    noPanClassName: "nopan",
    noWheelClassName: "nowheel",
    userSelectionActive: !!l(),
    translateExtent: u(),
    lib: c(),
    paneClickDistance: N(),
    onTransformChange: X
  })), z(e, W);
  var Q = ye({
    get initialViewport() {
      return h();
    },
    set initialViewport(F) {
      h(F), m();
    },
    get onMoveStart() {
      return b();
    },
    set onMoveStart(F) {
      b(F), m();
    },
    get onMove() {
      return x();
    },
    set onMove(F) {
      x(F), m();
    },
    get onMoveEnd() {
      return C();
    },
    set onMoveEnd(F) {
      C(F), m();
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
      return E();
    },
    set panOnDrag(F) {
      E(F), m();
    },
    get panOnScroll() {
      return H();
    },
    set panOnScroll(F) {
      H(F), m();
    },
    get paneClickDistance() {
      return N();
    },
    set paneClickDistance(F) {
      N(F), m();
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
var o2 = /* @__PURE__ */ ie("<div><!></div>");
const i2 = {
  hash: "svelte-1esy7hx",
  code: ".svelte-flow__pane.svelte-1esy7hx {position:absolute;top:0;left:0;width:100%;height:100%;}"
};
function fd(e, t) {
  me(t, !1), ot(e, i2);
  const [n, r] = vt(), o = () => oe($, "$panActivationKeyPressed", n), i = () => oe(B, "$selectionKeyPressed", n), a = () => oe(R, "$selectionRect", n), s = () => oe(I, "$elementsSelectable", n), l = () => oe(L, "$selectionRectMode", n), u = () => oe(T, "$connection", n), c = () => oe(E, "$edges", n), d = () => oe(V, "$nodeLookup", n), p = () => oe(H, "$viewport", n), v = () => oe(S, "$selectionMode", n), h = () => oe(N, "$dragging", n), b = /* @__PURE__ */ se(), x = /* @__PURE__ */ se(), C = /* @__PURE__ */ se();
  let g = y(t, "panOnDrag", 12, void 0), _ = y(t, "selectionOnDrag", 12, void 0);
  const w = fa(), {
    nodes: k,
    nodeLookup: V,
    edges: E,
    viewport: H,
    dragging: N,
    elementsSelectable: I,
    selectionRect: R,
    selectionRectMode: L,
    selectionKeyPressed: B,
    selectionMode: S,
    panActivationKeyPressed: $,
    unselectNodesAndEdges: M,
    connection: T
  } = tt();
  let P = /* @__PURE__ */ se(), O = null, A = [], X = !1;
  function W(ue) {
    if (X || u().inProgress) {
      X = !1;
      return;
    }
    w("paneclick", { event: ue }), M(), L.set(null);
  }
  function U(ue) {
    var J, Me;
    if (O = f(P).getBoundingClientRect(), !I || !f(x) || ue.button !== 0 || ue.target !== f(P) || !O)
      return;
    (Me = (J = ue.target) == null ? void 0 : J.setPointerCapture) == null || Me.call(J, ue.pointerId);
    const { x: K, y: Ne } = Wn(ue, O);
    M(), R.set({
      width: 0,
      height: 0,
      startX: K,
      startY: Ne,
      x: K,
      y: Ne
    });
  }
  function Q(ue) {
    if (!f(x) || !O || !a())
      return;
    X = !0;
    const J = Wn(ue, O), Me = a().startX ?? 0, K = a().startY ?? 0, Ne = {
      ...a(),
      x: J.x < Me ? J.x : Me,
      y: J.y < K ? J.y : K,
      width: Math.abs(J.x - Me),
      height: Math.abs(J.y - K)
    }, qe = A.map((ae) => ae.id), Le = ls(A, c()).map((ae) => ae.id);
    A = Tc(
      d(),
      Ne,
      [
        p().x,
        p().y,
        p().zoom
      ],
      v() === ji.Partial,
      !0
    );
    const ce = ls(A, c()).map((ae) => ae.id), fe = A.map((ae) => ae.id);
    (qe.length !== fe.length || fe.some((ae) => !qe.includes(ae))) && k.update((ae) => ae.map(nu(fe))), (Le.length !== ce.length || ce.some((ae) => !Le.includes(ae))) && E.update((ae) => ae.map(nu(ce))), L.set("user"), R.set(Ne);
  }
  function F(ue) {
    var J, Me;
    ue.button === 0 && ((Me = (J = ue.target) == null ? void 0 : J.releasePointerCapture) == null || Me.call(J, ue.pointerId), !f(x) && l() === "user" && ue.target === f(P) && (W == null || W(ue)), R.set(null), A.length > 0 && Di(L, "nodes"), i() && (X = !1));
  }
  const ge = (ue) => {
    var J;
    if (Array.isArray(f(b)) && (J = f(b)) != null && J.includes(2)) {
      ue.preventDefault();
      return;
    }
    w("panecontextmenu", { event: ue });
  };
  be(
    () => (o(), re(g())),
    () => {
      ee(b, o() || g());
    }
  ), be(
    () => (i(), a(), re(_()), f(b)),
    () => {
      ee(x, i() || a() || _() && f(b) !== !0);
    }
  ), be(
    () => (s(), f(x), l()),
    () => {
      ee(C, s() && (f(x) || l() === "user"));
    }
  ), Vt(), Xe();
  var de = o2(), he = /* @__PURE__ */ Te(() => f(C) ? void 0 : tu(W, f(P))), le = /* @__PURE__ */ Te(() => tu(ge, f(P)));
  let ke;
  var $e = Y(de);
  Lt($e, t, "default", {}), j(de), zn(de, (ue) => ee(P, ue), () => f(P)), Se(
    (ue) => ke = Dt(de, 1, "svelte-flow__pane svelte-1esy7hx", null, ke, ue),
    [
      () => ({
        draggable: g() === !0 || Array.isArray(g()) && g().includes(0),
        dragging: h(),
        selection: f(x)
      })
    ],
    _e
  ), ft("click", de, function(...ue) {
    var J;
    (J = f(he)) == null || J.apply(this, ue);
  }), ft("pointerdown", de, function(...ue) {
    var J;
    (J = f(C) ? U : void 0) == null || J.apply(this, ue);
  }), ft("pointermove", de, function(...ue) {
    var J;
    (J = f(C) ? Q : void 0) == null || J.apply(this, ue);
  }), ft("pointerup", de, function(...ue) {
    var J;
    (J = f(C) ? F : void 0) == null || J.apply(this, ue);
  }), ft("contextmenu", de, function(...ue) {
    var J;
    (J = f(le)) == null || J.apply(this, ue);
  }), z(e, de);
  var He = ye({
    get panOnDrag() {
      return g();
    },
    set panOnDrag(ue) {
      g(ue), m();
    },
    get selectionOnDrag() {
      return _();
    },
    set selectionOnDrag(ue) {
      _(ue), m();
    }
  });
  return r(), He;
}
pe(fd, { panOnDrag: {}, selectionOnDrag: {} }, ["default"], [], !0);
var a2 = /* @__PURE__ */ ie('<div class="svelte-flow__viewport xyflow__viewport svelte-1floaup"><!></div>');
const s2 = {
  hash: "svelte-1floaup",
  code: ".svelte-flow__viewport.svelte-1floaup {width:100%;height:100%;position:absolute;top:0;left:0;}"
};
function vd(e, t) {
  me(t, !1), ot(e, s2);
  const [n, r] = vt(), o = () => oe(i, "$viewport", n), { viewport: i } = tt();
  Xe();
  var a = a2(), s = Y(a);
  Lt(s, t, "default", {}), j(a), Se(() => $t(a, `transform: translate(${o().x ?? ""}px, ${o().y ?? ""}px) scale(${o().zoom ?? ""})`)), z(e, a), ye(), r();
}
pe(vd, {}, ["default"], [], !0);
function Ji(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: a } = t, s = C0({
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
function l2({ width: e, height: t, initialWidth: n, initialHeight: r, measuredWidth: o, measuredHeight: i }) {
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
var u2 = /* @__PURE__ */ ie("<div><!></div>");
function pd(e, t) {
  me(t, !1);
  const [n, r] = vt(), o = () => oe(de, "$nodeTypes", n), i = () => oe(He, "$elementsSelectable", n), a = () => oe(ue, "$nodesDraggable", n), s = () => oe(Ne, "$connectableStore", n), l = /* @__PURE__ */ se(void 0, !0), u = /* @__PURE__ */ se(void 0, !0), c = /* @__PURE__ */ se(void 0, !0), d = /* @__PURE__ */ se(void 0, !0);
  let p = y(t, "node", 13), v = y(t, "id", 13), h = y(t, "data", 29, () => ({})), b = y(t, "selected", 13, !1), x = y(t, "draggable", 13, void 0), C = y(t, "selectable", 13, void 0), g = y(t, "connectable", 13, !0), _ = y(t, "deletable", 13, !0), w = y(t, "hidden", 13, !1), k = y(t, "dragging", 13, !1), V = y(t, "resizeObserver", 13, null), E = y(t, "style", 13, void 0), H = y(t, "type", 13, "default"), N = y(t, "isParent", 13, !1), I = y(t, "positionX", 13), R = y(t, "positionY", 13), L = y(t, "sourcePosition", 13, void 0), B = y(t, "targetPosition", 13, void 0), S = y(t, "zIndex", 13), $ = y(t, "measuredWidth", 13, void 0), M = y(t, "measuredHeight", 13, void 0), T = y(t, "initialWidth", 13, void 0), P = y(t, "initialHeight", 13, void 0), O = y(t, "width", 13, void 0), A = y(t, "height", 13, void 0), X = y(t, "dragHandle", 13, void 0), W = y(t, "initialized", 13, !1), U = y(t, "parentId", 13, void 0), Q = y(t, "nodeClickDistance", 13, void 0), F = y(t, "class", 13, "");
  const ge = tt(), {
    nodeTypes: de,
    nodeDragThreshold: he,
    selectNodesOnDrag: le,
    handleNodeSelection: ke,
    updateNodeInternals: $e,
    elementsSelectable: He,
    nodesDraggable: ue
  } = ge;
  let J = /* @__PURE__ */ se(void 0, !0), Me = /* @__PURE__ */ se(null, !0);
  const K = fa(), Ne = Pe(g());
  let qe = /* @__PURE__ */ se(void 0, !0), Le = /* @__PURE__ */ se(void 0, !0), ce = /* @__PURE__ */ se(void 0, !0);
  Qr("svelteflow__node_id", v()), Qr("svelteflow__node_connectable", Ne), Ns(() => {
    var te;
    f(Me) && ((te = V()) == null || te.unobserve(f(Me)));
  });
  function fe(te) {
    C() && (!G(le) || !x() || G(he) > 0) && ke(v()), K("nodeclick", { node: p().internals.userNode, event: te });
  }
  be(() => re(H()), () => {
    ee(l, H() || "default");
  }), be(() => (o(), f(l)), () => {
    ee(u, !!o()[f(l)]);
  }), be(
    () => (o(), f(l), Fi),
    () => {
      ee(c, o()[f(l)] || Fi);
    }
  ), be(
    () => (f(u), re(H())),
    () => {
      f(u) || console.warn("003", ro.error003(H()));
    }
  ), be(
    () => (re(O()), re(A()), re(T()), re(P()), re($()), re(M())),
    () => {
      ee(d, l2({
        width: O(),
        height: A(),
        initialWidth: T(),
        initialHeight: P(),
        measuredWidth: $(),
        measuredHeight: M()
      }));
    }
  ), be(() => re(g()), () => {
    Ne.set(!!g());
  }), be(
    () => (f(qe), f(l), f(Le), re(L()), f(ce), re(B()), re(v()), f(J)),
    () => {
      (f(qe) && f(l) !== f(qe) || f(Le) && L() !== f(Le) || f(ce) && B() !== f(ce)) && requestAnimationFrame(() => $e(/* @__PURE__ */ new Map([
        [
          v(),
          {
            id: v(),
            nodeElement: f(J),
            force: !0
          }
        ]
      ]))), ee(qe, f(l)), ee(Le, L()), ee(ce, B());
    }
  ), be(
    () => (re(V()), f(J), f(Me), re(W())),
    () => {
      V() && (f(J) !== f(Me) || !W()) && (f(Me) && V().unobserve(f(Me)), f(J) && V().observe(f(J)), ee(Me, f(J)));
    }
  ), Vt(), Xe(!0);
  var ae = lt(), Ve = Ce(ae);
  {
    var it = (te) => {
      var Fe = u2();
      let ve, jt;
      var Xt = Y(Fe);
      const un = /* @__PURE__ */ _e(() => b() ?? !1), Ie = /* @__PURE__ */ _e(() => C() ?? i() ?? !0), ut = /* @__PURE__ */ _e(() => _() ?? !0), je = /* @__PURE__ */ _e(() => x() ?? a() ?? !0);
      Gu(Xt, () => f(c), (Be, ct) => {
        ct(Be, {
          get data() {
            return h();
          },
          get id() {
            return v();
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
            return B();
          },
          get zIndex() {
            return S();
          },
          get dragging() {
            return k();
          },
          get draggable() {
            return f(je);
          },
          get dragHandle() {
            return X();
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
      }), j(Fe), Nt(Fe, (Be, ct) => Ji == null ? void 0 : Ji(Be, ct), () => ({
        nodeId: v(),
        isSelectable: C(),
        disabled: !1,
        handleSelector: X(),
        noDragClass: "nodrag",
        nodeClickDistance: Q(),
        onNodeMouseDown: ke,
        onDrag: (Be, ct, Qt, Ht) => {
          K("nodedrag", { event: Be, targetNode: Qt, nodes: Ht });
        },
        onDragStart: (Be, ct, Qt, Ht) => {
          K("nodedragstart", { event: Be, targetNode: Qt, nodes: Ht });
        },
        onDragStop: (Be, ct, Qt, Ht) => {
          K("nodedragstop", { event: Be, targetNode: Qt, nodes: Ht });
        },
        store: ge
      })), zn(Fe, (Be) => ee(J, Be), () => f(J)), tn(() => ft("click", Fe, fe)), tn(() => ft("mouseenter", Fe, (Be) => K("nodemouseenter", { node: p(), event: Be }))), tn(() => ft("mouseleave", Fe, (Be) => K("nodemouseleave", { node: p(), event: Be }))), tn(() => ft("mousemove", Fe, (Be) => K("nodemousemove", { node: p(), event: Be }))), tn(() => ft("contextmenu", Fe, (Be) => K("nodecontextmenu", { node: p(), event: Be }))), Se(
        (Be, ct) => {
          Ee(Fe, "data-id", v()), ve = Dt(Fe, 1, Be, null, ve, ct), jt = $t(Fe, `${E() ?? "" ?? ""};${f(d).width ?? ""}${f(d).height ?? ""}`, jt, {
            "z-index": S(),
            transform: `translate(${I() ?? ""}px, ${R() ?? ""}px)`,
            visibility: W() ? "visible" : "hidden"
          });
        },
        [
          () => En(Bt([
            "svelte-flow__node",
            `svelte-flow__node-${f(l)}`,
            F()
          ])),
          () => ({
            dragging: k(),
            selected: b(),
            draggable: x(),
            connectable: g(),
            selectable: C(),
            nopan: x(),
            parent: N()
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
  var rt = ye({
    get node() {
      return p();
    },
    set node(te) {
      p(te), m();
    },
    get id() {
      return v();
    },
    set id(te) {
      v(te), m();
    },
    get data() {
      return h();
    },
    set data(te) {
      h(te), m();
    },
    get selected() {
      return b();
    },
    set selected(te) {
      b(te), m();
    },
    get draggable() {
      return x();
    },
    set draggable(te) {
      x(te), m();
    },
    get selectable() {
      return C();
    },
    set selectable(te) {
      C(te), m();
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
      return E();
    },
    set style(te) {
      E(te), m();
    },
    get type() {
      return H();
    },
    set type(te) {
      H(te), m();
    },
    get isParent() {
      return N();
    },
    set isParent(te) {
      N(te), m();
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
      return B();
    },
    set targetPosition(te) {
      B(te), m();
    },
    get zIndex() {
      return S();
    },
    set zIndex(te) {
      S(te), m();
    },
    get measuredWidth() {
      return $();
    },
    set measuredWidth(te) {
      $(te), m();
    },
    get measuredHeight() {
      return M();
    },
    set measuredHeight(te) {
      M(te), m();
    },
    get initialWidth() {
      return T();
    },
    set initialWidth(te) {
      T(te), m();
    },
    get initialHeight() {
      return P();
    },
    set initialHeight(te) {
      P(te), m();
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
      return X();
    },
    set dragHandle(te) {
      X(te), m();
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
var c2 = /* @__PURE__ */ ie('<div class="svelte-flow__nodes svelte-tf4uy4"></div>');
const d2 = {
  hash: "svelte-tf4uy4",
  code: ".svelte-flow__nodes.svelte-tf4uy4 {width:100%;height:100%;position:absolute;left:0;top:0;}"
};
function gd(e, t) {
  me(t, !1), ot(e, d2);
  const [n, r] = vt(), o = () => oe(c, "$visibleNodes", n), i = () => oe(d, "$nodesDraggable", n), a = () => oe(v, "$elementsSelectable", n), s = () => oe(p, "$nodesConnectable", n), l = () => oe(b, "$parentLookup", n);
  let u = y(t, "nodeClickDistance", 12, 0);
  const {
    visibleNodes: c,
    nodesDraggable: d,
    nodesConnectable: p,
    elementsSelectable: v,
    updateNodeInternals: h,
    parentLookup: b
  } = tt(), x = typeof ResizeObserver > "u" ? null : new ResizeObserver((_) => {
    const w = /* @__PURE__ */ new Map();
    _.forEach((k) => {
      const V = k.target.getAttribute("data-id");
      w.set(V, { id: V, nodeElement: k.target, force: !0 });
    }), h(w);
  });
  Ns(() => {
    x == null || x.disconnect();
  }), Xe();
  var C = c2();
  Zt(C, 5, o, (_) => _.id, (_, w) => {
    const k = /* @__PURE__ */ _e(() => !!f(w).selected), V = /* @__PURE__ */ _e(() => !!f(w).hidden), E = /* @__PURE__ */ _e(() => !!(f(w).draggable || i() && typeof f(w).draggable > "u")), H = /* @__PURE__ */ _e(() => !!(f(w).selectable || a() && typeof f(w).selectable > "u")), N = /* @__PURE__ */ _e(() => !!(f(w).connectable || s() && typeof f(w).connectable > "u")), I = /* @__PURE__ */ _e(() => f(w).deletable ?? !0), R = /* @__PURE__ */ _e(() => l().has(f(w).id)), L = /* @__PURE__ */ _e(() => f(w).type ?? "default"), B = /* @__PURE__ */ _e(() => f(w).internals.z ?? 0), S = /* @__PURE__ */ _e(() => Ac(f(w)));
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
        return f(E);
      },
      get selectable() {
        return f(H);
      },
      get connectable() {
        return f(N);
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
      resizeObserver: x,
      get nodeClickDistance() {
        return u();
      },
      $$events: {
        nodeclick($) {
          Ue.call(this, t, $);
        },
        nodemouseenter($) {
          Ue.call(this, t, $);
        },
        nodemousemove($) {
          Ue.call(this, t, $);
        },
        nodemouseleave($) {
          Ue.call(this, t, $);
        },
        nodedrag($) {
          Ue.call(this, t, $);
        },
        nodedragstart($) {
          Ue.call(this, t, $);
        },
        nodedragstop($) {
          Ue.call(this, t, $);
        },
        nodecontextmenu($) {
          Ue.call(this, t, $);
        }
      }
    });
  }), j(C), z(e, C);
  var g = ye({
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
var f2 = /* @__PURE__ */ Oe('<svg><g role="img"><!></g></svg>');
function hd(e, t) {
  me(t, !1);
  const [n, r] = vt(), o = () => oe(F, "$edgeTypes", n), i = () => oe(ge, "$flowId", n), a = () => oe(de, "$elementsSelectable", n), s = () => oe(Q, "$edgeLookup", n), l = /* @__PURE__ */ se(void 0, !0), u = /* @__PURE__ */ se(void 0, !0), c = /* @__PURE__ */ se(void 0, !0), d = /* @__PURE__ */ se(void 0, !0), p = /* @__PURE__ */ se(void 0, !0);
  let v = y(t, "id", 13), h = y(t, "type", 13, "default"), b = y(t, "source", 13, ""), x = y(t, "target", 13, ""), C = y(t, "data", 29, () => ({})), g = y(t, "style", 13, void 0), _ = y(t, "zIndex", 13, void 0), w = y(t, "animated", 13, !1), k = y(t, "selected", 13, !1), V = y(t, "selectable", 13, void 0), E = y(t, "deletable", 13, void 0), H = y(t, "hidden", 13, !1), N = y(t, "label", 13, void 0), I = y(t, "labelStyle", 13, void 0), R = y(t, "markerStart", 13, void 0), L = y(t, "markerEnd", 13, void 0), B = y(t, "sourceHandle", 13, void 0), S = y(t, "targetHandle", 13, void 0), $ = y(t, "sourceX", 13), M = y(t, "sourceY", 13), T = y(t, "targetX", 13), P = y(t, "targetY", 13), O = y(t, "sourcePosition", 13), A = y(t, "targetPosition", 13), X = y(t, "ariaLabel", 13, void 0), W = y(t, "interactionWidth", 13, void 0), U = y(t, "class", 13, "");
  Qr("svelteflow__edge_id", v());
  const {
    edgeLookup: Q,
    edgeTypes: F,
    flowId: ge,
    elementsSelectable: de
  } = tt(), he = fa(), le = rd();
  function ke(K) {
    const Ne = s().get(v());
    Ne && (le(v()), he("edgeclick", { event: K, edge: Ne }));
  }
  function $e(K, Ne) {
    const qe = s().get(v());
    qe && he(Ne, { event: K, edge: qe });
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
      ee(p, V() ?? a());
    }
  ), Vt(), Xe(!0);
  var He = lt(), ue = Ce(He);
  {
    var J = (K) => {
      var Ne = f2();
      let qe;
      var Le = Y(Ne);
      let ce;
      var fe = Y(Le);
      const ae = /* @__PURE__ */ _e(() => E() ?? !0);
      Gu(fe, () => f(u), (Ve, it) => {
        it(Ve, {
          get id() {
            return v();
          },
          get source() {
            return b();
          },
          get target() {
            return x();
          },
          get sourceX() {
            return $();
          },
          get sourceY() {
            return M();
          },
          get targetX() {
            return T();
          },
          get targetY() {
            return P();
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
            return N();
          },
          get labelStyle() {
            return I();
          },
          get data() {
            return C();
          },
          get style() {
            return g();
          },
          get interactionWidth() {
            return W();
          },
          get selectable() {
            return f(p);
          },
          get deletable() {
            return f(ae);
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
      }), j(Le), j(Ne), Se(
        (Ve, it) => {
          qe = $t(Ne, "", qe, { "z-index": _() }), ce = Dt(Le, 0, Ve, null, ce, it), Ee(Le, "data-id", v()), Ee(Le, "aria-label", X() === null ? void 0 : X() ? X() : `Edge from ${b()} to ${x()}`);
        },
        [
          () => En(Bt(["svelte-flow__edge", U()])),
          () => ({
            animated: w(),
            selected: k(),
            selectable: f(p)
          })
        ],
        _e
      ), ft("click", Le, ke), ft("contextmenu", Le, (Ve) => {
        $e(Ve, "edgecontextmenu");
      }), ft("mouseenter", Le, (Ve) => {
        $e(Ve, "edgemouseenter");
      }), ft("mouseleave", Le, (Ve) => {
        $e(Ve, "edgemouseleave");
      }), z(K, Ne);
    };
    xe(ue, (K) => {
      H() || K(J);
    });
  }
  z(e, He);
  var Me = ye({
    get id() {
      return v();
    },
    set id(K) {
      v(K), m();
    },
    get type() {
      return h();
    },
    set type(K) {
      h(K), m();
    },
    get source() {
      return b();
    },
    set source(K) {
      b(K), m();
    },
    get target() {
      return x();
    },
    set target(K) {
      x(K), m();
    },
    get data() {
      return C();
    },
    set data(K) {
      C(K), m();
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
      return E();
    },
    set deletable(K) {
      E(K), m();
    },
    get hidden() {
      return H();
    },
    set hidden(K) {
      H(K), m();
    },
    get label() {
      return N();
    },
    set label(K) {
      N(K), m();
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
      return B();
    },
    set sourceHandle(K) {
      B(K), m();
    },
    get targetHandle() {
      return S();
    },
    set targetHandle(K) {
      S(K), m();
    },
    get sourceX() {
      return $();
    },
    set sourceX(K) {
      $(K), m();
    },
    get sourceY() {
      return M();
    },
    set sourceY(K) {
      M(K), m();
    },
    get targetX() {
      return T();
    },
    set targetX(K) {
      T(K), m();
    },
    get targetY() {
      return P();
    },
    set targetY(K) {
      P(K), m();
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
      return X();
    },
    set ariaLabel(K) {
      X(K), m();
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
  return r(), Me;
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
  me(t, !1);
  let n = y(t, "onMount", 12, void 0), r = y(t, "onDestroy", 12, void 0);
  return hn(() => {
    var o;
    return (o = n()) == null || o(), r();
  }), Xe(), ye({
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
var v2 = /* @__PURE__ */ Oe("<defs></defs>");
function yd(e, t) {
  me(t, !1);
  const [n, r] = vt(), o = () => oe(i, "$markers", n), { markers: i } = tt();
  Xe();
  var a = v2();
  Zt(a, 5, o, (s) => s.id, (s, l) => {
    wd(s, mt(() => f(l)));
  }), j(a), z(e, a), ye(), r();
}
pe(yd, {}, [], [], !0);
var p2 = /* @__PURE__ */ Oe('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), g2 = /* @__PURE__ */ Oe('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), h2 = /* @__PURE__ */ Oe('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function wd(e, t) {
  me(t, !1);
  let n = y(t, "id", 12), r = y(t, "type", 12), o = y(t, "width", 12, 12.5), i = y(t, "height", 12, 12.5), a = y(t, "markerUnits", 12, "strokeWidth"), s = y(t, "orient", 12, "auto-start-reverse"), l = y(t, "color", 12, void 0), u = y(t, "strokeWidth", 12, void 0);
  Xe();
  var c = h2(), d = Y(c);
  {
    var p = (h) => {
      var b = p2();
      Se(() => {
        Ee(b, "stroke", l()), Ee(b, "stroke-width", u());
      }), z(h, b);
    }, v = (h, b) => {
      {
        var x = (C) => {
          var g = g2();
          Se(() => {
            Ee(g, "stroke", l()), Ee(g, "stroke-width", u()), Ee(g, "fill", l());
          }), z(C, g);
        };
        xe(
          h,
          (C) => {
            r() === Bo.ArrowClosed && C(x);
          },
          b
        );
      }
    };
    xe(d, (h) => {
      r() === Bo.Arrow ? h(p) : h(v, !1);
    });
  }
  return j(c), Se(() => {
    Ee(c, "id", n()), Ee(c, "markerWidth", `${o()}`), Ee(c, "markerHeight", `${i()}`), Ee(c, "markerUnits", a()), Ee(c, "orient", s());
  }), z(e, c), ye({
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
var m2 = /* @__PURE__ */ ie('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!> <!></div>');
function bd(e, t) {
  me(t, !1);
  const [n, r] = vt(), o = () => oe(s, "$visibleEdges", n), i = () => oe(c, "$elementsSelectable", n);
  let a = y(t, "defaultEdgeOptions", 12);
  const {
    visibleEdges: s,
    edgesInitialized: l,
    edges: { setDefaultOptions: u },
    elementsSelectable: c
  } = tt();
  hn(() => {
    a() && u(a());
  }), Xe();
  var d = m2(), p = Y(d), v = Y(p);
  yd(v, {}), j(p);
  var h = q(p, 2);
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
  var b = q(h, 2);
  {
    var x = (g) => {
      md(g, {
        onMount: () => {
          Di(l, !0);
        },
        onDestroy: () => {
          Di(l, !1);
        }
      });
    };
    xe(b, (g) => {
      o().length > 0 && g(x);
    });
  }
  j(d), z(e, d);
  var C = ye({
    get defaultEdgeOptions() {
      return a();
    },
    set defaultEdgeOptions(g) {
      a(g), m();
    }
  });
  return r(), C;
}
pe(bd, { defaultEdgeOptions: {} }, [], [], !0);
var y2 = /* @__PURE__ */ ie('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const w2 = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function Ks(e, t) {
  me(t, !1), ot(e, w2);
  let n = y(t, "x", 12, 0), r = y(t, "y", 12, 0), o = y(t, "width", 12, 0), i = y(t, "height", 12, 0), a = y(t, "isVisible", 12, !0);
  var s = lt(), l = Ce(s);
  {
    var u = (c) => {
      var d = y2();
      let p;
      Se(() => p = $t(d, "", p, {
        width: typeof o() == "string" ? o() : `${o()}px`,
        height: typeof i() == "string" ? i() : `${i()}px`,
        transform: `translate(${n()}px, ${r()}px)`
      })), z(c, d);
    };
    xe(l, (c) => {
      a() && c(u);
    });
  }
  return z(e, s), ye({
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
  me(t, !1);
  const [n, r] = vt(), o = () => oe(a, "$selectionRect", n), i = () => oe(s, "$selectionRectMode", n), { selectionRect: a, selectionRectMode: s } = tt();
  Xe();
  const l = /* @__PURE__ */ _e(() => !!(o() && i() === "user")), u = /* @__PURE__ */ _e(() => {
    var v;
    return (v = o()) == null ? void 0 : v.width;
  }), c = /* @__PURE__ */ _e(() => {
    var v;
    return (v = o()) == null ? void 0 : v.height;
  }), d = /* @__PURE__ */ _e(() => {
    var v;
    return (v = o()) == null ? void 0 : v.x;
  }), p = /* @__PURE__ */ _e(() => {
    var v;
    return (v = o()) == null ? void 0 : v.y;
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
      return f(p);
    }
  }), ye(), r();
}
pe(xd, {}, [], [], !0);
var b2 = /* @__PURE__ */ ie('<div class="selection-wrapper nopan svelte-5pxri" role="button" tabindex="-1"><!></div>');
const x2 = {
  hash: "svelte-5pxri",
  code: ".selection-wrapper.svelte-5pxri {position:absolute;top:0;left:0;z-index:7;pointer-events:all;}"
};
function $d(e, t) {
  me(t, !1), ot(e, x2);
  const [n, r] = vt(), o = () => oe(l, "$selectionRectMode", n), i = () => oe(c, "$nodeLookup", n), a = () => oe(u, "$nodes", n), s = tt(), { selectionRectMode: l, nodes: u, nodeLookup: c } = s, d = fa();
  let p = /* @__PURE__ */ se(null);
  function v(g) {
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
      o() === "nodes" && (ee(p, ei(i(), { filter: (g) => !!g.selected })), a());
    }
  ), Vt(), Xe();
  var b = lt(), x = Ce(b);
  {
    var C = (g) => {
      var _ = b2(), w = Y(_);
      Ks(w, { width: "100%", height: "100%", x: 0, y: 0 }), j(_), Nt(_, (k, V) => Ji == null ? void 0 : Ji(k, V), () => ({
        disabled: !1,
        store: s,
        onDrag: (k, V, E, H) => {
          d("nodedrag", { event: k, targetNode: null, nodes: H });
        },
        onDragStart: (k, V, E, H) => {
          d("nodedragstart", { event: k, targetNode: null, nodes: H });
        },
        onDragStop: (k, V, E, H) => {
          d("nodedragstop", { event: k, targetNode: null, nodes: H });
        }
      })), tn(() => ft("contextmenu", _, v)), tn(() => ft("click", _, h)), tn(() => ft("keyup", _, () => {
      })), Se(() => $t(_, `width: ${f(p).width ?? ""}px; height: ${f(p).height ?? ""}px; transform: translate(${f(p).x ?? ""}px, ${f(p).y ?? ""}px)`)), z(g, _);
    };
    xe(x, (g) => {
      o() === "nodes" && f(p) && jn(f(p).x) && jn(f(p).y) && g(C);
    });
  }
  z(e, b), ye(), r();
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
      }, { modifier: d, key: p, callback: v, preventDefault: h, enabled: b } = c;
      if (b) {
        if (d.length && !(Array.isArray(d) ? d : [d]).map(
          (x) => typeof x == "string" ? [x] : x
        ).some(
          (x) => x.every((C) => l[C])
        ))
          continue;
        if (a.key === p) {
          h && a.preventDefault();
          const x = {
            node: e,
            trigger: c,
            originalEvent: a
          };
          e.dispatchEvent(new CustomEvent("shortcut", { detail: x })), v == null || v(x);
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
  me(t, !1);
  let n = y(t, "selectionKey", 12, "Shift"), r = y(t, "multiSelectionKey", 28, () => Wi() ? "Meta" : "Control"), o = y(t, "deleteKey", 12, "Backspace"), i = y(t, "panActivationKey", 12, " "), a = y(t, "zoomActivationKey", 28, () => Wi() ? "Meta" : "Control");
  const {
    selectionKeyPressed: s,
    multiselectionKeyPressed: l,
    deleteKeyPressed: u,
    panActivationKeyPressed: c,
    zoomActivationKeyPressed: d,
    selectionRect: p
  } = tt();
  function v(g) {
    return g !== null && typeof g == "object";
  }
  function h(g) {
    return v(g) ? g.modifier || [] : [];
  }
  function b(g) {
    return g == null ? "" : v(g) ? g.key : g;
  }
  function x(g, _) {
    return (Array.isArray(g) ? g : [g]).map((w) => {
      const k = b(w);
      return {
        key: k,
        modifier: h(w),
        enabled: k !== null,
        callback: _
      };
    });
  }
  function C() {
    p.set(null), s.set(!1), l.set(!1), u.set(!1), c.set(!1), d.set(!1);
  }
  return Xe(), ft("blur", Kt, C), ft("contextmenu", Kt, C), Nt(Kt, (g, _) => xt == null ? void 0 : xt(g, _), () => ({
    trigger: x(n(), () => s.set(!0)),
    type: "keydown"
  })), Nt(Kt, (g, _) => xt == null ? void 0 : xt(g, _), () => ({
    trigger: x(n(), () => s.set(!1)),
    type: "keyup"
  })), Nt(Kt, (g, _) => xt == null ? void 0 : xt(g, _), () => ({
    trigger: x(r(), () => l.set(!0)),
    type: "keydown"
  })), Nt(Kt, (g, _) => xt == null ? void 0 : xt(g, _), () => ({
    trigger: x(r(), () => l.set(!1)),
    type: "keyup"
  })), Nt(Kt, (g, _) => xt == null ? void 0 : xt(g, _), () => ({
    trigger: x(o(), (g) => {
      !(g.originalEvent.ctrlKey || g.originalEvent.metaKey || g.originalEvent.shiftKey) && !t0(g.originalEvent) && u.set(!0);
    }),
    type: "keydown"
  })), Nt(Kt, (g, _) => xt == null ? void 0 : xt(g, _), () => ({
    trigger: x(o(), () => u.set(!1)),
    type: "keyup"
  })), Nt(Kt, (g, _) => xt == null ? void 0 : xt(g, _), () => ({
    trigger: x(i(), () => c.set(!0)),
    type: "keydown"
  })), Nt(Kt, (g, _) => xt == null ? void 0 : xt(g, _), () => ({
    trigger: x(i(), () => c.set(!1)),
    type: "keyup"
  })), Nt(Kt, (g, _) => xt == null ? void 0 : xt(g, _), () => ({
    trigger: x(a(), () => d.set(!0)),
    type: "keydown"
  })), Nt(Kt, (g, _) => xt == null ? void 0 : xt(g, _), () => ({
    trigger: x(a(), () => d.set(!1)),
    type: "keyup"
  })), ye({
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
var $2 = /* @__PURE__ */ Oe('<path fill="none" class="svelte-flow__connection-path"></path>'), C2 = /* @__PURE__ */ Oe('<svg class="svelte-flow__connectionline"><g><!><!></g></svg>');
function _d(e, t) {
  me(t, !1);
  const [n, r] = vt(), o = () => oe(v, "$connection", n), i = () => oe(h, "$connectionLineType", n), a = () => oe(d, "$width", n), s = () => oe(p, "$height", n);
  let l = y(t, "containerStyle", 12, ""), u = y(t, "style", 12, ""), c = y(t, "isCustomComponent", 12, !1);
  const {
    width: d,
    height: p,
    connection: v,
    connectionLineType: h
  } = tt();
  let b = /* @__PURE__ */ se(null);
  be(
    () => (o(), re(c()), i(), f(b), cs),
    () => {
      if (o().inProgress && !c()) {
        const { from: w, to: k, fromPosition: V, toPosition: E } = o(), H = {
          sourceX: w.x,
          sourceY: w.y,
          sourcePosition: V,
          targetX: k.x,
          targetY: k.y,
          targetPosition: E
        };
        switch (i()) {
          case Wr.Bezier:
            ((N) => ee(b, N[0]))(qc(H));
            break;
          case Wr.Step:
            ((N) => ee(b, N[0]))(Ki({ ...H, borderRadius: 0 }));
            break;
          case Wr.SmoothStep:
            ((N) => ee(b, N[0]))(Ki(H));
            break;
          default:
            ((N) => ee(b, N[0]))(cs(H));
        }
      }
    }
  ), Vt(), Xe();
  var x = lt(), C = Ce(x);
  {
    var g = (w) => {
      var k = C2(), V = Y(k), E = Y(V);
      Lt(E, t, "connectionLine", {});
      var H = q(E);
      {
        var N = (I) => {
          var R = $2();
          Se(() => {
            Ee(R, "d", f(b)), $t(R, u());
          }), z(I, R);
        };
        xe(H, (I) => {
          c() || I(N);
        });
      }
      j(V), j(k), Se(
        (I) => {
          Ee(k, "width", a()), Ee(k, "height", s()), $t(k, l()), Dt(V, 0, I);
        },
        [
          () => En(Bt([
            "svelte-flow__connection",
            qh(o().isValid)
          ]))
        ],
        _e
      ), z(w, k);
    };
    xe(C, (w) => {
      o().inProgress && w(g);
    });
  }
  z(e, x);
  var _ = ye({
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
var _2 = /* @__PURE__ */ ie("<div><!></div>");
function ri(e, t) {
  const n = gt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = gt(n, ["position", "style", "class"]);
  me(t, !1);
  const [o, i] = vt(), a = () => oe(d, "$selectionRectMode", o), s = /* @__PURE__ */ se();
  let l = y(t, "position", 12, "top-right"), u = y(t, "style", 12, void 0), c = y(t, "class", 12, void 0);
  const { selectionRectMode: d } = tt();
  be(() => re(l()), () => {
    ee(s, `${l()}`.split("-"));
  }), Vt(), Xe();
  var p = _2();
  let v;
  var h = Y(p);
  Lt(h, t, "default", {}), j(p), Se(
    (x) => v = sn(p, v, {
      class: x,
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
  ), z(e, p);
  var b = ye({
    get position() {
      return l();
    },
    set position(x) {
      l(x), m();
    },
    get style() {
      return u();
    },
    set style(x) {
      u(x), m();
    },
    get class() {
      return c();
    },
    set class(x) {
      c(x), m();
    }
  });
  return i(), b;
}
pe(ri, { position: {}, style: {}, class: {} }, ["default"], [], !0);
var k2 = /* @__PURE__ */ ie('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function kd(e, t) {
  me(t, !1);
  let n = y(t, "proOptions", 12, void 0), r = y(t, "position", 12, "bottom-right");
  Xe();
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
          var c = k2();
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
  return z(e, o), ye({
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
const E2 = (e) => Object.keys(e);
function ou(e, t) {
  E2(t).forEach((n) => {
    const r = t[n];
    r !== void 0 && e[n].set(r);
  });
}
function S2() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function M2(e = "light") {
  return cn("light", (t) => {
    if (e !== "system") {
      t(e);
      return;
    }
    const n = S2(), r = () => t(n != null && n.matches ? "dark" : "light");
    return t(n != null && n.matches ? "dark" : "light"), n == null || n.addEventListener("change", r), () => {
      n == null || n.removeEventListener("change", r);
    };
  });
}
var P2 = /* @__PURE__ */ ie('<!> <!> <div class="svelte-flow__edgelabel-renderer"></div> <div class="svelte-flow__viewport-portal"></div> <!> <!>', 1), V2 = /* @__PURE__ */ ie("<!> <!>", 1), O2 = /* @__PURE__ */ ie("<div><!> <!> <!> <!></div>");
const H2 = {
  hash: "svelte-18e9ir1",
  code: ".svelte-flow.svelte-18e9ir1 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgba(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function Ed(e, t) {
  const n = j1(t), r = gt(t, [
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
  me(t, !1), ot(e, H2);
  const [i, a] = vt(), s = () => oe(_(), "$viewport", i), l = () => oe(yo, "$initialized", i), u = () => oe(f(c), "$colorModeClass", i), c = /* @__PURE__ */ se();
  let d = y(t, "id", 12, "1"), p = y(t, "nodes", 12), v = y(t, "edges", 12), h = y(t, "fitView", 12, void 0), b = y(t, "fitViewOptions", 12, void 0), x = y(t, "minZoom", 12, void 0), C = y(t, "maxZoom", 12, void 0), g = y(t, "initialViewport", 12, void 0), _ = y(t, "viewport", 12, void 0), w = y(t, "nodeTypes", 12, void 0), k = y(t, "edgeTypes", 12, void 0), V = y(t, "selectionKey", 12, void 0), E = y(t, "selectionMode", 12, void 0), H = y(t, "panActivationKey", 12, void 0), N = y(t, "multiSelectionKey", 12, void 0), I = y(t, "zoomActivationKey", 12, void 0), R = y(t, "nodesDraggable", 12, void 0), L = y(t, "nodesConnectable", 12, void 0), B = y(t, "nodeDragThreshold", 12, void 0), S = y(t, "elementsSelectable", 12, void 0), $ = y(t, "snapGrid", 12, void 0), M = y(t, "deleteKey", 12, void 0), T = y(t, "connectionRadius", 12, void 0), P = y(t, "connectionLineType", 12, void 0), O = y(t, "connectionMode", 28, () => Or.Strict), A = y(t, "connectionLineStyle", 12, ""), X = y(t, "connectionLineContainerStyle", 12, ""), W = y(t, "onMoveStart", 12, void 0), U = y(t, "onMove", 12, void 0), Q = y(t, "onMoveEnd", 12, void 0), F = y(t, "isValidConnection", 12, void 0), ge = y(t, "translateExtent", 12, void 0), de = y(t, "nodeExtent", 12, void 0), he = y(t, "onlyRenderVisibleElements", 12, void 0), le = y(t, "panOnScrollMode", 28, () => dr.Free), ke = y(t, "preventScrolling", 12, !0), $e = y(t, "zoomOnScroll", 12, !0), He = y(t, "zoomOnDoubleClick", 12, !0), ue = y(t, "zoomOnPinch", 12, !0), J = y(t, "panOnScroll", 12, !1), Me = y(t, "panOnDrag", 12, !0), K = y(t, "selectionOnDrag", 12, void 0), Ne = y(t, "autoPanOnConnect", 12, !0), qe = y(t, "autoPanOnNodeDrag", 12, !0), Le = y(t, "onerror", 12, void 0), ce = y(t, "ondelete", 12, void 0), fe = y(t, "onedgecreate", 12, void 0), ae = y(t, "attributionPosition", 12, void 0), Ve = y(t, "proOptions", 12, void 0), it = y(t, "defaultEdgeOptions", 12, void 0), rt = y(t, "width", 12, void 0), te = y(t, "height", 12, void 0), Fe = y(t, "colorMode", 12, "light"), ve = y(t, "onconnect", 12, void 0), jt = y(t, "onconnectstart", 12, void 0), Xt = y(t, "onconnectend", 12, void 0), un = y(t, "onbeforedelete", 12, void 0), Ie = y(t, "oninit", 12, void 0), ut = y(t, "nodeOrigin", 12, void 0), je = y(t, "paneClickDistance", 12, 0), Be = y(t, "nodeClickDistance", 12, 0), ct = y(t, "defaultMarkerColor", 12, "#b1b1b7"), Qt = y(t, "style", 12, void 0), Ht = y(t, "class", 12, void 0), Qn = /* @__PURE__ */ se(), yt = /* @__PURE__ */ se(), Ct = /* @__PURE__ */ se();
  const Pn = s() || g(), at = _1(xa) ? tt() : t2({
    nodes: G(p()),
    edges: G(v()),
    width: rt(),
    height: te(),
    fitView: h(),
    nodeOrigin: ut(),
    nodeExtent: de()
  });
  hn(() => (at.width.set(f(yt)), at.height.set(f(Ct)), at.domNode.set(f(Qn)), at.syncNodeStores(p()), at.syncEdgeStores(v()), at.syncViewport(_()), h() !== void 0 && at.fitViewQueued.set(h()), b() && at.fitViewOptions.set(b()), ru(at, {
    nodeTypes: w(),
    edgeTypes: k(),
    minZoom: x(),
    maxZoom: C(),
    translateExtent: ge(),
    paneClickDistance: je()
  }), () => {
    at.reset();
  }));
  const { initialized: yo } = at;
  let er = /* @__PURE__ */ se(!1);
  be(
    () => (f(yt), f(Ct)),
    () => {
      f(yt) !== void 0 && f(Ct) !== void 0 && (at.width.set(f(yt)), at.height.set(f(Ct)));
    }
  ), be(
    () => (f(er), l(), re(Ie())),
    () => {
      var Z;
      !f(er) && l() && ((Z = Ie()) == null || Z(), ee(er, !0));
    }
  ), be(
    () => (re(d()), re(P()), re(T()), re(E()), re($()), re(ct()), re(R()), re(L()), re(S()), re(he()), re(F()), re(Ne()), re(qe()), re(Le()), re(ce()), re(fe()), re(O()), re(B()), re(ve()), re(jt()), re(Xt()), re(un()), re(ut()), ou),
    () => {
      const Z = {
        flowId: d(),
        connectionLineType: P(),
        connectionRadius: T(),
        selectionMode: E(),
        snapGrid: $(),
        defaultMarkerColor: ct(),
        nodesDraggable: R(),
        nodesConnectable: L(),
        elementsSelectable: S(),
        onlyRenderVisibleElements: he(),
        isValidConnection: F(),
        autoPanOnConnect: Ne(),
        autoPanOnNodeDrag: qe(),
        onerror: Le(),
        ondelete: ce(),
        onedgecreate: fe(),
        connectionMode: O(),
        nodeDragThreshold: B(),
        onconnect: ve(),
        onconnectstart: jt(),
        onconnectend: Xt(),
        onbeforedelete: un(),
        nodeOrigin: ut()
      };
      ou(at, Z);
    }
  ), be(
    () => (re(w()), re(k()), re(x()), re(C()), re(ge()), re(je())),
    () => {
      ru(at, {
        nodeTypes: w(),
        edgeTypes: k(),
        minZoom: x(),
        maxZoom: C(),
        translateExtent: ge(),
        paneClickDistance: je()
      });
    }
  ), be(
    () => re(Fe()),
    () => {
      tv(ee(c, M2(Fe())), "$colorModeClass", i);
    }
  ), Vt(), Xe();
  var zt = O2();
  let br;
  var xr = Y(zt);
  Cd(xr, {
    get selectionKey() {
      return V();
    },
    get deleteKey() {
      return M();
    },
    get panActivationKey() {
      return H();
    },
    get multiSelectionKey() {
      return N();
    },
    get zoomActivationKey() {
      return I();
    }
  });
  var zr = q(xr, 2);
  const wo = /* @__PURE__ */ _e(() => le() === void 0 ? dr.Free : le()), si = /* @__PURE__ */ _e(() => ke() === void 0 ? !0 : ke()), li = /* @__PURE__ */ _e(() => $e() === void 0 ? !0 : $e()), Ea = /* @__PURE__ */ _e(() => He() === void 0 ? !0 : He()), Sa = /* @__PURE__ */ _e(() => ue() === void 0 ? !0 : ue()), Ma = /* @__PURE__ */ _e(() => J() === void 0 ? !1 : J()), Pa = /* @__PURE__ */ _e(() => Me() === void 0 ? !0 : Me()), D = /* @__PURE__ */ _e(() => je() === void 0 ? 0 : je());
  dd(zr, {
    initialViewport: Pn,
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
      return f(Ea);
    },
    get zoomOnPinch() {
      return f(Sa);
    },
    get panOnScroll() {
      return f(Ma);
    },
    get panOnDrag() {
      return f(Pa);
    },
    get paneClickDistance() {
      return f(D);
    },
    children: (Z, st) => {
      const Ke = /* @__PURE__ */ _e(() => Me() === void 0 ? !0 : Me());
      fd(Z, {
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
          var pt = V2(), ht = Ce(pt);
          vd(ht, {
            children: (tr, nr) => {
              var Mt = P2(), Ar = Ce(Mt);
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
                  return X();
                },
                get style() {
                  return A();
                },
                isCustomComponent: n.connectionLine,
                $$slots: {
                  connectionLine: (Ge, fb) => {
                    var el = lt(), $f = Ce(el);
                    Lt($f, t, "connectionLine", {}), z(Ge, el);
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
              var xf = q(ci, 2);
              $d(xf, {
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
              }), z(tr, Mt);
            },
            $$slots: { default: !0 }
          });
          var Yt = q(ht, 2);
          xd(Yt, {}), z(Ze, pt);
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
  Lt(we, t, "default", {}), j(zt), zn(zt, (Z) => ee(Qn, Z), () => f(Qn)), Se(
    (Z) => br = sn(
      zt,
      br,
      {
        style: Qt(),
        class: Z,
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
  ), ml(zt, "clientWidth", (Z) => ee(yt, Z)), ml(zt, "clientHeight", (Z) => ee(Ct, Z)), ft("dragover", zt, function(Z) {
    Ue.call(this, t, Z);
  }), ft("drop", zt, function(Z) {
    Ue.call(this, t, Z);
  }), z(e, zt);
  var De = ye({
    get id() {
      return d();
    },
    set id(Z) {
      d(Z), m();
    },
    get nodes() {
      return p();
    },
    set nodes(Z) {
      p(Z), m();
    },
    get edges() {
      return v();
    },
    set edges(Z) {
      v(Z), m();
    },
    get fitView() {
      return h();
    },
    set fitView(Z) {
      h(Z), m();
    },
    get fitViewOptions() {
      return b();
    },
    set fitViewOptions(Z) {
      b(Z), m();
    },
    get minZoom() {
      return x();
    },
    set minZoom(Z) {
      x(Z), m();
    },
    get maxZoom() {
      return C();
    },
    set maxZoom(Z) {
      C(Z), m();
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
      return V();
    },
    set selectionKey(Z) {
      V(Z), m();
    },
    get selectionMode() {
      return E();
    },
    set selectionMode(Z) {
      E(Z), m();
    },
    get panActivationKey() {
      return H();
    },
    set panActivationKey(Z) {
      H(Z), m();
    },
    get multiSelectionKey() {
      return N();
    },
    set multiSelectionKey(Z) {
      N(Z), m();
    },
    get zoomActivationKey() {
      return I();
    },
    set zoomActivationKey(Z) {
      I(Z), m();
    },
    get nodesDraggable() {
      return R();
    },
    set nodesDraggable(Z) {
      R(Z), m();
    },
    get nodesConnectable() {
      return L();
    },
    set nodesConnectable(Z) {
      L(Z), m();
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
      return $();
    },
    set snapGrid(Z) {
      $(Z), m();
    },
    get deleteKey() {
      return M();
    },
    set deleteKey(Z) {
      M(Z), m();
    },
    get connectionRadius() {
      return T();
    },
    set connectionRadius(Z) {
      T(Z), m();
    },
    get connectionLineType() {
      return P();
    },
    set connectionLineType(Z) {
      P(Z), m();
    },
    get connectionMode() {
      return O();
    },
    set connectionMode(Z) {
      O(Z), m();
    },
    get connectionLineStyle() {
      return A();
    },
    set connectionLineStyle(Z) {
      A(Z), m();
    },
    get connectionLineContainerStyle() {
      return X();
    },
    set connectionLineContainerStyle(Z) {
      X(Z), m();
    },
    get onMoveStart() {
      return W();
    },
    set onMoveStart(Z) {
      W(Z), m();
    },
    get onMove() {
      return U();
    },
    set onMove(Z) {
      U(Z), m();
    },
    get onMoveEnd() {
      return Q();
    },
    set onMoveEnd(Z) {
      Q(Z), m();
    },
    get isValidConnection() {
      return F();
    },
    set isValidConnection(Z) {
      F(Z), m();
    },
    get translateExtent() {
      return ge();
    },
    set translateExtent(Z) {
      ge(Z), m();
    },
    get nodeExtent() {
      return de();
    },
    set nodeExtent(Z) {
      de(Z), m();
    },
    get onlyRenderVisibleElements() {
      return he();
    },
    set onlyRenderVisibleElements(Z) {
      he(Z), m();
    },
    get panOnScrollMode() {
      return le();
    },
    set panOnScrollMode(Z) {
      le(Z), m();
    },
    get preventScrolling() {
      return ke();
    },
    set preventScrolling(Z) {
      ke(Z), m();
    },
    get zoomOnScroll() {
      return $e();
    },
    set zoomOnScroll(Z) {
      $e(Z), m();
    },
    get zoomOnDoubleClick() {
      return He();
    },
    set zoomOnDoubleClick(Z) {
      He(Z), m();
    },
    get zoomOnPinch() {
      return ue();
    },
    set zoomOnPinch(Z) {
      ue(Z), m();
    },
    get panOnScroll() {
      return J();
    },
    set panOnScroll(Z) {
      J(Z), m();
    },
    get panOnDrag() {
      return Me();
    },
    set panOnDrag(Z) {
      Me(Z), m();
    },
    get selectionOnDrag() {
      return K();
    },
    set selectionOnDrag(Z) {
      K(Z), m();
    },
    get autoPanOnConnect() {
      return Ne();
    },
    set autoPanOnConnect(Z) {
      Ne(Z), m();
    },
    get autoPanOnNodeDrag() {
      return qe();
    },
    set autoPanOnNodeDrag(Z) {
      qe(Z), m();
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
      return ae();
    },
    set attributionPosition(Z) {
      ae(Z), m();
    },
    get proOptions() {
      return Ve();
    },
    set proOptions(Z) {
      Ve(Z), m();
    },
    get defaultEdgeOptions() {
      return it();
    },
    set defaultEdgeOptions(Z) {
      it(Z), m();
    },
    get width() {
      return rt();
    },
    set width(Z) {
      rt(Z), m();
    },
    get height() {
      return te();
    },
    set height(Z) {
      te(Z), m();
    },
    get colorMode() {
      return Fe();
    },
    set colorMode(Z) {
      Fe(Z), m();
    },
    get onconnect() {
      return ve();
    },
    set onconnect(Z) {
      ve(Z), m();
    },
    get onconnectstart() {
      return jt();
    },
    set onconnectstart(Z) {
      jt(Z), m();
    },
    get onconnectend() {
      return Xt();
    },
    set onconnectend(Z) {
      Xt(Z), m();
    },
    get onbeforedelete() {
      return un();
    },
    set onbeforedelete(Z) {
      un(Z), m();
    },
    get oninit() {
      return Ie();
    },
    set oninit(Z) {
      Ie(Z), m();
    },
    get nodeOrigin() {
      return ut();
    },
    set nodeOrigin(Z) {
      ut(Z), m();
    },
    get paneClickDistance() {
      return je();
    },
    set paneClickDistance(Z) {
      je(Z), m();
    },
    get nodeClickDistance() {
      return Be();
    },
    set nodeClickDistance(Z) {
      Be(Z), m();
    },
    get defaultMarkerColor() {
      return ct();
    },
    set defaultMarkerColor(Z) {
      ct(Z), m();
    },
    get style() {
      return Qt();
    },
    set style(Z) {
      Qt(Z), m();
    },
    get class() {
      return Ht();
    },
    set class(Z) {
      Ht(Z), m();
    }
  });
  return a(), De;
}
pe(
  Ed,
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
function Sd(e, t) {
  me(t, !1);
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
  }), Xe();
  var u = lt(), c = Ce(u);
  return Lt(c, t, "default", {}), z(e, u), ye({
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
  Sd,
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
var T2 = /* @__PURE__ */ ie("<button><!></button>");
function Po(e, t) {
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
  me(t, !1);
  let o = y(t, "class", 12, void 0), i = y(t, "bgColor", 12, void 0), a = y(t, "bgColorHover", 12, void 0), s = y(t, "color", 12, void 0), l = y(t, "colorHover", 12, void 0), u = y(t, "borderColor", 12, void 0);
  Xe();
  var c = T2();
  let d;
  var p = Y(c);
  return Lt(p, t, "default", { class: "button-svg" }), j(c), Se(
    (v) => d = sn(c, d, {
      type: "button",
      class: v,
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
  ), ft("click", c, function(v) {
    Ue.call(this, t, v);
  }), z(e, c), ye({
    get class() {
      return o();
    },
    set class(v) {
      o(v), m();
    },
    get bgColor() {
      return i();
    },
    set bgColor(v) {
      i(v), m();
    },
    get bgColorHover() {
      return a();
    },
    set bgColorHover(v) {
      a(v), m();
    },
    get color() {
      return s();
    },
    set color(v) {
      s(v), m();
    },
    get colorHover() {
      return l();
    },
    set colorHover(v) {
      l(v), m();
    },
    get borderColor() {
      return u();
    },
    set borderColor(v) {
      u(v), m();
    }
  });
}
pe(
  Po,
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
var N2 = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function Md(e) {
  var t = N2();
  z(e, t);
}
pe(Md, {}, [], [], !0);
var L2 = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function Pd(e) {
  var t = L2();
  z(e, t);
}
pe(Pd, {}, [], [], !0);
var D2 = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function Vd(e) {
  var t = D2();
  z(e, t);
}
pe(Vd, {}, [], [], !0);
var z2 = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function Od(e) {
  var t = z2();
  z(e, t);
}
pe(Od, {}, [], [], !0);
var A2 = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function Hd(e) {
  var t = A2();
  z(e, t);
}
pe(Hd, {}, [], [], !0);
var I2 = /* @__PURE__ */ ie("<!> <!>", 1), R2 = /* @__PURE__ */ ie("<!> <!> <!> <!> <!> <!>", 1);
function Td(e, t) {
  me(t, !1);
  const [n, r] = vt(), o = () => oe(P, "$nodesDraggable", n), i = () => oe(O, "$nodesConnectable", n), a = () => oe(A, "$elementsSelectable", n), s = () => oe($, "$viewport", n), l = () => oe(M, "$minZoom", n), u = () => oe(T, "$maxZoom", n), c = /* @__PURE__ */ se(), d = /* @__PURE__ */ se(), p = /* @__PURE__ */ se(), v = /* @__PURE__ */ se();
  let h = y(t, "position", 12, "bottom-left"), b = y(t, "showZoom", 12, !0), x = y(t, "showFitView", 12, !0), C = y(t, "showLock", 12, !0), g = y(t, "buttonBgColor", 12, void 0), _ = y(t, "buttonBgColorHover", 12, void 0), w = y(t, "buttonColor", 12, void 0), k = y(t, "buttonColorHover", 12, void 0), V = y(t, "buttonBorderColor", 12, void 0), E = y(t, "ariaLabel", 12, void 0), H = y(t, "style", 12, void 0), N = y(t, "orientation", 12, "vertical"), I = y(t, "fitViewOptions", 12, void 0), R = y(t, "class", 12, "");
  const {
    zoomIn: L,
    zoomOut: B,
    fitView: S,
    viewport: $,
    minZoom: M,
    maxZoom: T,
    nodesDraggable: P,
    nodesConnectable: O,
    elementsSelectable: A
  } = tt(), X = {
    bgColor: g(),
    bgColorHover: _(),
    color: w(),
    colorHover: k(),
    borderColor: V()
  }, W = () => {
    L();
  }, U = () => {
    B();
  }, Q = () => {
    S(I());
  }, F = () => {
    ee(c, !f(c)), P.set(f(c)), O.set(f(c)), A.set(f(c));
  };
  be(
    () => (o(), i(), a()),
    () => {
      ee(c, o() || i() || a());
    }
  ), be(() => (s(), l()), () => {
    ee(d, s().zoom <= l());
  }), be(() => (s(), u()), () => {
    ee(p, s().zoom >= u());
  }), be(() => re(N()), () => {
    ee(v, N() === "horizontal" ? "horizontal" : "vertical");
  }), Vt(), Xe();
  const ge = /* @__PURE__ */ _e(() => Bt([
    "svelte-flow__controls",
    f(v),
    R()
  ])), de = /* @__PURE__ */ _e(() => E() ?? "Svelte Flow controls");
  ri(e, {
    get class() {
      return f(ge);
    },
    get position() {
      return h();
    },
    "data-testid": "svelte-flow__controls",
    get "aria-label"() {
      return f(de);
    },
    get style() {
      return H();
    },
    children: (le, ke) => {
      var $e = R2(), He = Ce($e);
      Lt(He, t, "before", {});
      var ue = q(He, 2);
      {
        var J = (fe) => {
          var ae = I2(), Ve = Ce(ae);
          Po(Ve, mt(
            {
              class: "svelte-flow__controls-zoomin",
              title: "zoom in",
              "aria-label": "zoom in",
              get disabled() {
                return f(p);
              }
            },
            X,
            {
              $$events: { click: W },
              children: (rt, te) => {
                Md(rt);
              },
              $$slots: { default: !0 }
            }
          ));
          var it = q(Ve, 2);
          Po(it, mt(
            {
              class: "svelte-flow__controls-zoomout",
              title: "zoom out",
              "aria-label": "zoom out",
              get disabled() {
                return f(d);
              }
            },
            X,
            {
              $$events: { click: U },
              children: (rt, te) => {
                Pd(rt);
              },
              $$slots: { default: !0 }
            }
          )), z(fe, ae);
        };
        xe(ue, (fe) => {
          b() && fe(J);
        });
      }
      var Me = q(ue, 2);
      {
        var K = (fe) => {
          Po(fe, mt(
            {
              class: "svelte-flow__controls-fitview",
              title: "fit view",
              "aria-label": "fit view"
            },
            X,
            {
              $$events: { click: Q },
              children: (ae, Ve) => {
                Vd(ae);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        xe(Me, (fe) => {
          x() && fe(K);
        });
      }
      var Ne = q(Me, 2);
      {
        var qe = (fe) => {
          Po(fe, mt(
            {
              class: "svelte-flow__controls-interactive",
              title: "toggle interactivity",
              "aria-label": "toggle interactivity"
            },
            X,
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
          C() && fe(qe);
        });
      }
      var Le = q(Ne, 2);
      Lt(Le, t, "default", {});
      var ce = q(Le, 2);
      Lt(ce, t, "after", {}), z(le, $e);
    },
    $$slots: { default: !0 }
  });
  var he = ye({
    get position() {
      return h();
    },
    set position(le) {
      h(le), m();
    },
    get showZoom() {
      return b();
    },
    set showZoom(le) {
      b(le), m();
    },
    get showFitView() {
      return x();
    },
    set showFitView(le) {
      x(le), m();
    },
    get showLock() {
      return C();
    },
    set showLock(le) {
      C(le), m();
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
      return E();
    },
    set ariaLabel(le) {
      E(le), m();
    },
    get style() {
      return H();
    },
    set style(le) {
      H(le), m();
    },
    get orientation() {
      return N();
    },
    set orientation(le) {
      N(le), m();
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
  return r(), he;
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
var fr;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(fr || (fr = {}));
var q2 = /* @__PURE__ */ Oe("<circle></circle>");
function Nd(e, t) {
  me(t, !1);
  let n = y(t, "radius", 12, 5), r = y(t, "class", 12, "");
  Xe();
  var o = q2();
  return Se(
    (i) => {
      Ee(o, "cx", n()), Ee(o, "cy", n()), Ee(o, "r", n()), Dt(o, 0, i);
    },
    [
      () => En(Bt([
        "svelte-flow__background-pattern",
        "dots",
        r()
      ]))
    ],
    _e
  ), z(e, o), ye({
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
var Z2 = /* @__PURE__ */ Oe("<path></path>");
function Ld(e, t) {
  me(t, !1);
  let n = y(t, "lineWidth", 12, 1), r = y(t, "dimensions", 12), o = y(t, "variant", 12, void 0), i = y(t, "class", 12, "");
  Xe();
  var a = Z2();
  return Se(
    (s) => {
      Ee(a, "stroke-width", n()), Ee(a, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), Dt(a, 0, s);
    },
    [
      () => En(Bt([
        "svelte-flow__background-pattern",
        o(),
        i()
      ]))
    ],
    _e
  ), z(e, a), ye({
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
const B2 = {
  [fr.Dots]: 1,
  [fr.Lines]: 1,
  [fr.Cross]: 6
};
var j2 = /* @__PURE__ */ Oe('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
const X2 = {
  hash: "svelte-1r7pe8d",
  code: ".svelte-flow__background.svelte-1r7pe8d {position:absolute;width:100%;height:100%;top:0;left:0;}"
};
function Dd(e, t) {
  me(t, !1), ot(e, X2);
  const [n, r] = vt(), o = () => oe(k, "$flowId", n), i = () => oe(w, "$viewport", n), a = /* @__PURE__ */ se(), s = /* @__PURE__ */ se(), l = /* @__PURE__ */ se(), u = /* @__PURE__ */ se(), c = /* @__PURE__ */ se();
  let d = y(t, "id", 12, void 0), p = y(t, "variant", 28, () => fr.Dots), v = y(t, "gap", 12, 20), h = y(t, "size", 12, 1), b = y(t, "lineWidth", 12, 1), x = y(t, "bgColor", 12, void 0), C = y(t, "patternColor", 12, void 0), g = y(t, "patternClass", 12, void 0), _ = y(t, "class", 12, "");
  const { viewport: w, flowId: k } = tt(), V = h() || B2[p()], E = p() === fr.Dots, H = p() === fr.Cross, N = Array.isArray(v()) ? v() : [v(), v()];
  be(
    () => (o(), re(d())),
    () => {
      ee(a, `background-pattern-${o()}-${d() ? d() : ""}`);
    }
  ), be(() => i(), () => {
    ee(s, [
      N[0] * i().zoom || 1,
      N[1] * i().zoom || 1
    ]);
  }), be(() => i(), () => {
    ee(l, V * i().zoom);
  }), be(() => (f(l), f(s)), () => {
    ee(u, H ? [f(l), f(l)] : f(s));
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
  ), Vt(), Xe();
  var I = j2();
  let R;
  var L = Y(I), B = Y(L);
  {
    var S = (P) => {
      const O = /* @__PURE__ */ _e(() => f(l) / 2);
      Nd(P, {
        get radius() {
          return f(O);
        },
        get class() {
          return g();
        }
      });
    }, $ = (P) => {
      Ld(P, {
        get dimensions() {
          return f(u);
        },
        get variant() {
          return p();
        },
        get lineWidth() {
          return b();
        },
        get class() {
          return g();
        }
      });
    };
    xe(B, (P) => {
      E ? P(S) : P($, !1);
    });
  }
  j(L);
  var M = q(L);
  j(I), Se(
    (P) => {
      Dt(I, 0, P, "svelte-1r7pe8d"), R = $t(I, "", R, {
        "--xy-background-color-props": x(),
        "--xy-background-pattern-color-props": C()
      }), Ee(L, "id", f(a)), Ee(L, "x", i().x % f(s)[0]), Ee(L, "y", i().y % f(s)[1]), Ee(L, "width", f(s)[0]), Ee(L, "height", f(s)[1]), Ee(L, "patternTransform", `translate(-${f(c)[0]},-${f(c)[1]})`), Ee(M, "fill", `url(#${f(a)})`);
    },
    [
      () => En(Bt(["svelte-flow__background", _()]))
    ],
    _e
  ), z(e, I);
  var T = ye({
    get id() {
      return d();
    },
    set id(P) {
      d(P), m();
    },
    get variant() {
      return p();
    },
    set variant(P) {
      p(P), m();
    },
    get gap() {
      return v();
    },
    set gap(P) {
      v(P), m();
    },
    get size() {
      return h();
    },
    set size(P) {
      h(P), m();
    },
    get lineWidth() {
      return b();
    },
    set lineWidth(P) {
      b(P), m();
    },
    get bgColor() {
      return x();
    },
    set bgColor(P) {
      x(P), m();
    },
    get patternColor() {
      return C();
    },
    set patternColor(P) {
      C(P), m();
    },
    get patternClass() {
      return g();
    },
    set patternClass(P) {
      g(P), m();
    },
    get class() {
      return _();
    },
    set class(P) {
      _(P), m();
    }
  });
  return r(), T;
}
pe(
  Dd,
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
var Y2 = /* @__PURE__ */ Oe("<rect></rect>");
function zd(e, t) {
  me(t, !1);
  let n = y(t, "x", 12), r = y(t, "y", 12), o = y(t, "width", 12, 0), i = y(t, "height", 12, 0), a = y(t, "borderRadius", 12, 5), s = y(t, "color", 12, void 0), l = y(t, "shapeRendering", 12), u = y(t, "strokeColor", 12, void 0), c = y(t, "strokeWidth", 12, 2), d = y(t, "selected", 12, !1), p = y(t, "class", 12, "");
  Xe();
  var v = Y2();
  let h;
  return Se(
    (b, x) => {
      h = Dt(v, 0, b, null, h, x), Ee(v, "x", n()), Ee(v, "y", r()), Ee(v, "rx", a()), Ee(v, "ry", a()), Ee(v, "width", o()), Ee(v, "height", i()), $t(v, `${s() ? `fill: ${s()};` : ""}${u() ? `stroke: ${u()};` : ""}${c() ? `stroke-width: ${c()};` : ""}`), Ee(v, "shape-rendering", l());
    },
    [
      () => En(Bt(["svelte-flow__minimap-node", p()])),
      () => ({ selected: d() })
    ],
    _e
  ), z(e, v), ye({
    get x() {
      return n();
    },
    set x(b) {
      n(b), m();
    },
    get y() {
      return r();
    },
    set y(b) {
      r(b), m();
    },
    get width() {
      return o();
    },
    set width(b) {
      o(b), m();
    },
    get height() {
      return i();
    },
    set height(b) {
      i(b), m();
    },
    get borderRadius() {
      return a();
    },
    set borderRadius(b) {
      a(b), m();
    },
    get color() {
      return s();
    },
    set color(b) {
      s(b), m();
    },
    get shapeRendering() {
      return l();
    },
    set shapeRendering(b) {
      l(b), m();
    },
    get strokeColor() {
      return u();
    },
    set strokeColor(b) {
      u(b), m();
    },
    get strokeWidth() {
      return c();
    },
    set strokeWidth(b) {
      c(b), m();
    },
    get selected() {
      return d();
    },
    set selected(b) {
      d(b), m();
    },
    get class() {
      return p();
    },
    set class(b) {
      p(b), m();
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
  const n = V0({
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
var W2 = /* @__PURE__ */ Oe("<title> </title>"), K2 = /* @__PURE__ */ Oe('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>');
function Ad(e, t) {
  me(t, !1);
  const [n, r] = vt(), o = () => oe(Me, "$flowId", n), i = () => oe(He, "$viewport", n), a = () => oe(ue, "$containerWidth", n), s = () => oe(J, "$containerHeight", n), l = () => oe($e, "$nodeLookup", n), u = () => oe(ke, "$nodes", n), c = () => oe(K, "$panZoom", n), d = () => oe(Ne, "$translateExtent", n), p = /* @__PURE__ */ se(), v = /* @__PURE__ */ se(), h = /* @__PURE__ */ se(), b = /* @__PURE__ */ se(), x = /* @__PURE__ */ se(), C = /* @__PURE__ */ se(), g = /* @__PURE__ */ se(), _ = /* @__PURE__ */ se(), w = /* @__PURE__ */ se(), k = /* @__PURE__ */ se(), V = /* @__PURE__ */ se(), E = /* @__PURE__ */ se(), H = /* @__PURE__ */ se();
  let N = y(t, "position", 12, "bottom-right"), I = y(t, "ariaLabel", 12, "Mini map"), R = y(t, "nodeStrokeColor", 12, "transparent"), L = y(t, "nodeColor", 12, void 0), B = y(t, "nodeClass", 12, ""), S = y(t, "nodeBorderRadius", 12, 5), $ = y(t, "nodeStrokeWidth", 12, 2), M = y(t, "bgColor", 12, void 0), T = y(t, "maskColor", 12, void 0), P = y(t, "maskStrokeColor", 12, void 0), O = y(t, "maskStrokeWidth", 12, void 0), A = y(t, "width", 12, void 0), X = y(t, "height", 12, void 0), W = y(t, "pannable", 12, !0), U = y(t, "zoomable", 12, !0), Q = y(t, "inversePan", 12, void 0), F = y(t, "zoomStep", 12, void 0), ge = y(t, "style", 12, ""), de = y(t, "class", 12, "");
  const he = 200, le = 150, {
    nodes: ke,
    nodeLookup: $e,
    viewport: He,
    width: ue,
    height: J,
    flowId: Me,
    panZoom: K,
    translateExtent: Ne
  } = tt(), qe = L() === void 0 ? void 0 : qa(L()), Le = qa(R()), ce = qa(B()), fe = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  ), ae = `svelte-flow__minimap-desc-${o()}`;
  let Ve = /* @__PURE__ */ se(f(p));
  const it = () => f(C);
  be(
    () => (i(), a(), s()),
    () => {
      ee(p, {
        x: -i().x / i().zoom,
        y: -i().y / i().zoom,
        width: a() / i().zoom,
        height: s() / i().zoom
      });
    }
  ), be(
    () => (l(), f(p), u()),
    () => {
      ee(Ve, l().size > 0 ? zc(ei(l(), { filter: (ve) => !ve.hidden }), f(p)) : f(p)), u();
    }
  ), be(() => re(A()), () => {
    ee(v, A() ?? he);
  }), be(() => re(X()), () => {
    ee(h, X() ?? le);
  }), be(
    () => (f(Ve), f(v)),
    () => {
      ee(b, f(Ve).width / f(v));
    }
  ), be(
    () => (f(Ve), f(h)),
    () => {
      ee(x, f(Ve).height / f(h));
    }
  ), be(
    () => (f(b), f(x)),
    () => {
      ee(C, Math.max(f(b), f(x)));
    }
  ), be(() => (f(C), f(v)), () => {
    ee(g, f(C) * f(v));
  }), be(
    () => (f(C), f(h)),
    () => {
      ee(_, f(C) * f(h));
    }
  ), be(() => f(C), () => {
    ee(w, 5 * f(C));
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
    ee(E, f(g) + f(w) * 2);
  }), be(() => (f(_), f(w)), () => {
    ee(H, f(_) + f(w) * 2);
  }), Vt(), Xe();
  const rt = /* @__PURE__ */ _e(() => ge() + (M() ? `;--xy-minimap-background-color-props:${M()}` : "")), te = /* @__PURE__ */ _e(() => Bt(["svelte-flow__minimap", de()]));
  ri(e, {
    get position() {
      return N();
    },
    get style() {
      return f(rt);
    },
    get class() {
      return f(te);
    },
    "data-testid": "svelte-flow__minimap",
    children: (ve, jt) => {
      var Xt = lt(), un = Ce(Xt);
      {
        var Ie = (ut) => {
          var je = K2();
          Ee(je, "aria-labelledby", ae);
          let Be;
          var ct = Y(je);
          {
            var Qt = (yt) => {
              var Ct = W2();
              Ee(Ct, "id", ae);
              var Pn = Y(Ct, !0);
              j(Ct), Se(() => bt(Pn, I())), z(yt, Ct);
            };
            xe(ct, (yt) => {
              I() && yt(Qt);
            });
          }
          var Ht = q(ct);
          Zt(Ht, 1, u, (yt) => yt.id, (yt, Ct) => {
            var Pn = lt();
            const at = /* @__PURE__ */ _e(() => l().get(f(Ct).id));
            var yo = Ce(Pn);
            {
              var er = (zt) => {
                const br = /* @__PURE__ */ _e(() => wr(f(at))), xr = /* @__PURE__ */ _e(() => qe == null ? void 0 : qe(f(at))), zr = /* @__PURE__ */ _e(() => Le(f(at))), wo = /* @__PURE__ */ _e(() => ce(f(at)));
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
                      return S();
                    },
                    get strokeColor() {
                      return f(zr);
                    },
                    get strokeWidth() {
                      return $();
                    },
                    shapeRendering: fe,
                    get class() {
                      return f(wo);
                    }
                  }
                ));
              };
              xe(yo, (zt) => {
                f(at) && Ac(f(at)) && zt(er);
              });
            }
            z(yt, Pn);
          });
          var Qn = q(Ht);
          j(je), Nt(je, (yt, Ct) => iu == null ? void 0 : iu(yt, Ct), () => ({
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
          })), Se(() => {
            Ee(je, "width", f(v)), Ee(je, "height", f(h)), Ee(je, "viewBox", `${f(k) ?? ""} ${f(V) ?? ""} ${f(E) ?? ""} ${f(H) ?? ""}`), Be = $t(je, "", Be, {
              "--xy-minimap-mask-background-color-props": T(),
              "--xy-minimap-mask-stroke-color-props": P(),
              "--xy-minimap-mask-stroke-width-props": O() ? O() * f(C) : void 0
            }), Ee(Qn, "d", `M${f(k) - f(w)},${f(V) - f(w)}h${f(E) + f(w) * 2}v${f(H) + f(w) * 2}h${-f(E) - f(w) * 2}z
      M${f(p).x ?? ""},${f(p).y ?? ""}h${f(p).width ?? ""}v${f(p).height ?? ""}h${-f(p).width}z`);
          }), z(ut, je);
        };
        xe(un, (ut) => {
          c() && ut(Ie);
        });
      }
      z(ve, Xt);
    },
    $$slots: { default: !0 }
  });
  var Fe = ye({
    get position() {
      return N();
    },
    set position(ve) {
      N(ve), m();
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
      return B();
    },
    set nodeClass(ve) {
      B(ve), m();
    },
    get nodeBorderRadius() {
      return S();
    },
    set nodeBorderRadius(ve) {
      S(ve), m();
    },
    get nodeStrokeWidth() {
      return $();
    },
    set nodeStrokeWidth(ve) {
      $(ve), m();
    },
    get bgColor() {
      return M();
    },
    set bgColor(ve) {
      M(ve), m();
    },
    get maskColor() {
      return T();
    },
    set maskColor(ve) {
      T(ve), m();
    },
    get maskStrokeColor() {
      return P();
    },
    set maskStrokeColor(ve) {
      P(ve), m();
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
      return X();
    },
    set height(ve) {
      X(ve), m();
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
      return de();
    },
    set class(ve) {
      de(ve), m();
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
const au = (e) => Bh(e);
function Jt() {
  const { zoomIn: e, zoomOut: t, fitView: n, onbeforedelete: r, snapGrid: o, viewport: i, width: a, height: s, minZoom: l, maxZoom: u, panZoom: c, nodes: d, edges: p, domNode: v, nodeLookup: h, nodeOrigin: b, edgeLookup: x, connectionLookup: C } = tt(), g = (k) => {
    var V, E;
    const H = G(h), N = au(k) ? k : H.get(k.id), I = N.parentId ? Uh(N.position, N.measured, N.parentId, H, G(b)) : N.position, R = {
      ...N,
      position: I,
      width: ((V = N.measured) == null ? void 0 : V.width) ?? N.width,
      height: ((E = N.measured) == null ? void 0 : E.height) ?? N.height
    };
    return io(R);
  }, _ = (k, V, E = { replace: !1 }) => {
    var H;
    const N = (H = G(h).get(k)) == null ? void 0 : H.internals.userNode;
    if (!N)
      return;
    const I = typeof V == "function" ? V(N) : V;
    E.replace ? d.update((R) => R.map((L) => L.id === k ? au(I) ? I : { ...L, ...I } : L)) : (Object.assign(N, I), d.update((R) => R));
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
    getEdge: (k) => G(x).get(k),
    getEdges: (k) => k === void 0 ? G(p) : su(G(x), k),
    setZoom: (k, V) => {
      const E = G(c);
      return E ? E.scaleTo(k, { duration: V == null ? void 0 : V.duration }) : Promise.resolve(!1);
    },
    getZoom: () => G(i).zoom,
    setViewport: async (k, V) => {
      const E = G(i), H = G(c);
      return H ? (await H.setViewport({
        x: k.x ?? E.x,
        y: k.y ?? E.y,
        zoom: k.zoom ?? E.zoom
      }, { duration: V == null ? void 0 : V.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => G(i),
    setCenter: async (k, V, E) => {
      const H = typeof (E == null ? void 0 : E.zoom) < "u" ? E.zoom : G(u), N = G(c);
      return N ? (await N.setViewport({
        x: G(a) / 2 - k * H,
        y: G(s) / 2 - V * H,
        zoom: H
      }, { duration: E == null ? void 0 : E.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    fitView: n,
    fitBounds: async (k, V) => {
      const E = G(c);
      if (!E)
        return Promise.resolve(!1);
      const H = js(k, G(a), G(s), G(l), G(u), (V == null ? void 0 : V.padding) ?? 0.1);
      return await E.setViewport(H, { duration: V == null ? void 0 : V.duration }), Promise.resolve(!0);
    },
    getIntersectingNodes: (k, V = !0, E) => {
      const H = Zl(k), N = H ? k : g(k);
      return N ? (E || G(d)).filter((I) => {
        const R = G(h).get(I.id);
        if (!R || !H && I.id === k.id)
          return !1;
        const L = io(R), B = jo(L, N);
        return V && B > 0 || B >= N.width * N.height;
      }) : [];
    },
    isNodeIntersecting: (k, V, E = !0) => {
      const H = Zl(k) ? k : g(k);
      if (!H)
        return !1;
      const N = jo(H, V);
      return E && N > 0 || N >= H.width * H.height;
    },
    deleteElements: async ({ nodes: k = [], edges: V = [] }) => {
      const { nodes: E, edges: H } = await Nc({
        nodesToRemove: k,
        edgesToRemove: V,
        nodes: G(d),
        edges: G(p),
        onBeforeDelete: G(r)
      });
      return E && d.update((N) => N.filter((I) => !E.some(({ id: R }) => R === I.id))), H && p.update((N) => N.filter((I) => !H.some(({ id: R }) => R === I.id))), {
        deletedNodes: E,
        deletedEdges: H
      };
    },
    screenToFlowPosition: (k, V = { snapToGrid: !0 }) => {
      const E = G(v);
      if (!E)
        return k;
      const H = V.snapToGrid ? G(o) : !1, { x: N, y: I, zoom: R } = G(i), { x: L, y: B } = E.getBoundingClientRect(), S = {
        x: k.x - L,
        y: k.y - B
      };
      return ti(S, [N, I, R], H !== null, H || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (k) => {
      const V = G(v);
      if (!V)
        return k;
      const { x: E, y: H, zoom: N } = G(i), { x: I, y: R } = V.getBoundingClientRect(), L = Yi(k, [E, H, N]);
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
      edges: G(p).map((k) => ({ ...k })),
      viewport: { ...G(i) }
    }),
    updateNode: _,
    updateNodeData: (k, V, E) => {
      var H;
      const N = (H = G(h).get(k)) == null ? void 0 : H.internals.userNode;
      if (!N)
        return;
      const I = typeof V == "function" ? V(N) : V;
      N.data = E != null && E.replace ? I : { ...N.data, ...I }, d.update((R) => R);
    },
    getNodesBounds: (k) => {
      const V = G(h), E = G(b);
      return jh(k, { nodeLookup: V, nodeOrigin: E });
    },
    getHandleConnections: ({ type: k, id: V, nodeId: E }) => {
      var H;
      return Array.from(((H = G(C).get(`${E}-${k}-${V ?? null}`)) == null ? void 0 : H.values()) ?? []);
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
var F2 = /* @__PURE__ */ ie('<div class="svelte-flow__node-toolbar"><!></div>');
function Id(e, t) {
  me(t, !1);
  const [n, r] = vt(), o = () => oe(_, "$nodes", n), i = () => oe(g, "$nodeLookup", n), a = () => oe(C, "$viewport", n), s = () => oe(x, "$domNode", n), l = /* @__PURE__ */ se(), u = /* @__PURE__ */ se(), c = /* @__PURE__ */ se();
  let d = y(t, "nodeId", 12, void 0), p = y(t, "position", 12, void 0), v = y(t, "align", 12, void 0), h = y(t, "offset", 12, void 0), b = y(t, "isVisible", 12, void 0);
  const { domNode: x, viewport: C, nodeLookup: g, nodes: _ } = tt(), { getNodesBounds: w } = Jt(), k = Mr("svelteflow__node_id");
  let V = /* @__PURE__ */ se(), E = /* @__PURE__ */ se([]), H = h() !== void 0 ? h() : 10, N = p() !== void 0 ? p() : ze.Top, I = v() !== void 0 ? v() : "center";
  be(
    () => (o(), re(d()), i()),
    () => {
      o();
      const $ = Array.isArray(d()) ? d() : [d() || k];
      ee(E, $.reduce(
        (M, T) => {
          const P = i().get(T);
          return P && M.push(P), M;
        },
        []
      ));
    }
  ), be(
    () => (f(E), a()),
    () => {
      const $ = w(f(E));
      $ && ee(V, v0($, a(), N, H, I));
    }
  ), be(() => f(E), () => {
    ee(l, f(E).length === 0 ? 1 : Math.max(...f(E).map(($) => ($.internals.z || 5) + 1)));
  }), be(() => o(), () => {
    ee(u, o().filter(($) => $.selected).length);
  }), be(
    () => (re(b()), f(E), f(u)),
    () => {
      ee(c, typeof b() == "boolean" ? b() : f(E).length === 1 && f(E)[0].selected && f(u) === 1);
    }
  ), Vt(), Xe();
  var R = lt(), L = Ce(R);
  {
    var B = ($) => {
      var M = F2();
      let T;
      var P = Y(M);
      Lt(P, t, "default", {}), j(M), Nt(M, (O, A) => Gi == null ? void 0 : Gi(O, A), () => ({ domNode: s() })), Se(
        (O) => {
          Ee(M, "data-id", O), T = $t(M, "", T, {
            position: "absolute",
            transform: f(V),
            "z-index": f(l)
          });
        },
        [
          () => f(E).reduce((O, A) => `${O}${A.id} `, "").trim()
        ],
        _e
      ), z($, M);
    };
    xe(L, ($) => {
      s() && f(c) && f(E) && $(B);
    });
  }
  z(e, R);
  var S = ye({
    get nodeId() {
      return d();
    },
    set nodeId($) {
      d($), m();
    },
    get position() {
      return p();
    },
    set position($) {
      p($), m();
    },
    get align() {
      return v();
    },
    set align($) {
      v($), m();
    },
    get offset() {
      return h();
    },
    set offset($) {
      h($), m();
    },
    get isVisible() {
      return b();
    },
    set isVisible($) {
      b($), m();
    }
  });
  return r(), S;
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
function Dr(e) {
  const { nodes: t, nodeLookup: n } = tt();
  let r = [], o = !0;
  return cr([t, n], ([, i], a) => {
    var s;
    const l = [], u = Array.isArray(e), c = u ? e : [e];
    for (const d of c) {
      const p = (s = i.get(d)) == null ? void 0 : s.internals.userNode;
      p && l.push({
        id: p.id,
        type: p.type,
        data: p.data
      });
    }
    (!x0(l, r) || o) && (r = l, a(u ? l : l[0] ?? null), o = !1);
  });
}
const lu = "tinyflow-component";
class G2 {
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
const U2 = () => {
  const e = Pe([]), t = Pe([]), n = Pe({ x: 250, y: 100, zoom: 1 });
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
}, Si = U2();
var J2 = /* @__PURE__ */ ie("<button><!></button>");
function Je(e, t) {
  me(t, !0);
  const n = y(t, "children", 7), r = /* @__PURE__ */ Ot(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children"
  ]);
  var o = J2();
  let i;
  var a = Y(o);
  return Pr(a, () => n() ?? Et), j(o), Se(() => i = sn(o, i, {
    type: "button",
    ...r,
    class: `tf-btn nopan nodrag ${t.class ?? ""}`
  })), z(e, o), ye({
    get children() {
      return n();
    },
    set children(s) {
      n(s), m();
    }
  });
}
pe(Je, { children: {} }, [], [], !0);
var Q2 = /* @__PURE__ */ ie("<input>");
function Rd(e, t) {
  me(t, !0);
  const n = /* @__PURE__ */ Ot(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Q2();
  ur(r);
  let o;
  Se(() => o = sn(r, o, {
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), z(e, r), ye();
}
pe(Rd, {}, [], [], !0);
var em = /* @__PURE__ */ ie('<div><input type="hidden"> <!> <!></div>');
const tm = {
  hash: "svelte-1swt2gg",
  code: ".tf-chosen.svelte-1swt2gg {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function qd(e, t) {
  me(t, !0), ot(e, tm);
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
  var l = em();
  let u;
  var c = Y(l);
  ur(c);
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
  var p = q(d, 2);
  return Je(p, {
    onclick: (v) => {
      var h;
      (h = a()) == null || h(o(), r(), v);
    },
    style: "padding: 3px",
    children: (v, h) => {
      Re();
      var b = Ye();
      Se(() => bt(b, i())), z(v, b);
    },
    $$slots: { default: !0 }
  }), j(l), Se(() => {
    u = sn(
      l,
      u,
      {
        ...s,
        class: `tf-chosen nopan nodrag ${t.class ?? ""}`
      },
      "svelte-1swt2gg"
    ), bi(c, o());
  }), z(e, l), ye({
    get placeholder() {
      return n();
    },
    set placeholder(v) {
      n(v), m();
    },
    get label() {
      return r();
    },
    set label(v) {
      r(v), m();
    },
    get value() {
      return o();
    },
    set value(v) {
      o(v), m();
    },
    get buttonText() {
      return i();
    },
    set buttonText(v = "选择...") {
      i(v), m();
    },
    get onChosen() {
      return a();
    },
    set onChosen(v) {
      a(v), m();
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
var nm = /* @__PURE__ */ ie("<input>");
function _t(e, t) {
  me(t, !0);
  const n = /* @__PURE__ */ Ot(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = nm();
  ur(r);
  let o;
  Se(() => o = sn(r, o, {
    type: "text",
    spellcheck: "false",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), z(e, r), ye();
}
pe(_t, {}, [], [], !0);
var rm = /* @__PURE__ */ ie("<textarea></textarea>");
function Pt(e, t) {
  me(t, !0);
  const n = y(t, "value", 7), r = /* @__PURE__ */ Ot(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "value"
  ]);
  var o = rm();
  D1(o);
  let i;
  return Se(() => i = sn(o, i, {
    spellcheck: "false",
    ...r,
    class: `tf-textarea nodrag nowheel ${t.class ?? ""}`,
    value: n() || ""
  })), z(e, o), ye({
    get value() {
      return n();
    },
    set value(a) {
      n(a), m();
    }
  });
}
pe(Pt, { value: {} }, [], [], !0);
var om = /* @__PURE__ */ ie('<div role="button"><!></div>'), im = /* @__PURE__ */ ie("<div></div>");
function Zd(e, t) {
  const n = gt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = gt(n, ["items", "onChange", "activeIndex"]);
  me(t, !1);
  let o = y(t, "items", 28, () => []), i = y(t, "onChange", 12, () => {
  }), a = y(t, "activeIndex", 12, 0);
  function s(c, d) {
    var p;
    a(d), (p = i()) == null || p(c, d);
  }
  Xe();
  var l = im();
  let u;
  return Zt(l, 5, o, eo, (c, d, p) => {
    var v = om();
    Ee(v, "tabindex", p), v.__click = () => s(f(d), p), v.__keydown = (C) => {
      (C.key === "Enter" || C.key === " ") && (C.preventDefault(), s(f(d), p));
    };
    var h = Y(v);
    {
      var b = (C) => {
        var g = Ye();
        Se(() => bt(g, f(d).label)), z(C, g);
      }, x = (C) => {
        var g = lt(), _ = Ce(g);
        Pr(_, () => f(d).label ?? Et), z(C, g);
      };
      xe(h, (C) => {
        typeof f(d).label == "string" ? C(b) : C(x, !1);
      });
    }
    j(v), Se(() => Dt(v, 1, `tf-tabs-item ${p === a() ? "active" : ""}`)), z(c, v);
  }), j(l), Se(() => u = sn(l, u, {
    ...r,
    class: `tf-tabs ${r.class ?? ""}`
  })), z(e, l), ye({
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
var am = (e, t, n) => t(f(n)), sm = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(f(n)));
}, lm = /* @__PURE__ */ ie('<span class="tf-collapse-item-title-icon"><!></span>'), um = /* @__PURE__ */ ie('<div class="tf-collapse-item-description"><!></div>'), cm = /* @__PURE__ */ ie('<div class="tf-collapse-item-content"><!></div>'), dm = /* @__PURE__ */ ie('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), fm = /* @__PURE__ */ ie("<div></div>");
const vm = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function Bd(e, t) {
  me(t, !0), ot(e, vm);
  let n = y(t, "items", 7), r = y(t, "onChange", 7), o = y(t, "activeKeys", 31, () => wn([]));
  function i(s) {
    var l;
    o().includes(s.key) ? o(o().filter((u) => u !== s.key)) : (o().push(s.key), o(o())), (l = r()) == null || l(s, o());
  }
  var a = fm();
  return Zt(a, 21, n, eo, (s, l, u) => {
    var c = dm(), d = Y(c);
    Ee(d, "tabindex", u), d.__click = [am, i, l], d.__keydown = [sm, i, l];
    var p = Y(d);
    {
      var v = (w) => {
        var k = lm(), V = Y(k);
        sr(V, {
          get target() {
            return f(l).icon;
          }
        }), j(k), z(w, k);
      };
      xe(p, (w) => {
        f(l).icon && w(v);
      });
    }
    var h = q(p, 2);
    sr(h, {
      get target() {
        return f(l).title;
      }
    });
    var b = q(h, 2);
    j(d);
    var x = q(d, 2);
    {
      var C = (w) => {
        var k = um(), V = Y(k);
        sr(V, {
          get target() {
            return f(l).description;
          }
        }), j(k), z(w, k);
      };
      xe(x, (w) => {
        f(l).description && w(C);
      });
    }
    var g = q(x, 2);
    {
      var _ = (w) => {
        var k = cm(), V = Y(k);
        sr(V, {
          get target() {
            return f(l).content;
          }
        }), j(k), z(w, k);
      };
      xe(g, (w) => {
        o().includes(f(l).key) && w(_);
      });
    }
    j(c), Se((w) => Dt(b, 1, `tf-collapse-item-title-arrow ${w ?? ""}`, "svelte-1jfktzw"), [
      () => o().includes(f(l).key) ? "rotate-90" : ""
    ]), z(s, c);
  }), j(a), Se(() => {
    $t(a, t.style), Dt(a, 1, `tf-collapse ${t.class ?? ""}`, "svelte-1jfktzw");
  }), z(e, a), ye({
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
function sr(e, t) {
  me(t, !0);
  let n = y(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = lt(), o = Ce(r);
  {
    var i = (s) => {
      var l = lt(), u = Ce(l);
      Pr(u, () => n() ?? Et), z(s, l);
    }, a = (s) => {
      var l = lt(), u = Ce(l);
      Ts(u, n), z(s, l);
    };
    xe(o, (s) => {
      typeof n() == "function" ? s(i) : s(a, !1);
    });
  }
  return z(e, r), ye({
    get target() {
      return n();
    },
    set target(s) {
      n(s), m();
    }
  });
}
pe(sr, { target: {} }, [], [], !0);
var pm = (e, t, n) => t(f(n)), gm = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), hm = /* @__PURE__ */ ie('<div class="tf-select-content-children"><!></div>'), mm = /* @__PURE__ */ ie('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), ym = /* @__PURE__ */ ie('<div class="tf-select-content nopan nodrag"><!></div>'), wm = /* @__PURE__ */ ie("<!> <!>", 1), bm = /* @__PURE__ */ ie('<div class="tf-select-input-placeholder"> </div>'), xm = /* @__PURE__ */ ie('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), $m = /* @__PURE__ */ ie("<div><!></div>");
function gn(e, t) {
  me(t, !0);
  const n = (g, _ = Et) => {
    var w = lt(), k = Ce(w);
    Zt(k, 19, _, (V, E) => `${E}_${V.value}`, (V, E) => {
      var H = mm(), N = Ce(H);
      N.__click = [pm, h, E];
      var I = Y(N), R = Y(I);
      {
        var L = (M) => {
          var T = gm();
          z(M, T);
        };
        xe(R, (M) => {
          f(E).children && f(E).children.length > 0 && M(L);
        });
      }
      j(I);
      var B = q(I, 2);
      sr(B, {
        get target() {
          return f(E).label;
        }
      }), j(N);
      var S = q(N, 2);
      {
        var $ = (M) => {
          var T = hm(), P = Y(T);
          n(P, () => f(E).children), j(T), z(M, T);
        };
        xe(S, (M) => {
          f(E).children && f(E).children.length > 0 && (s() || u().includes(f(E).value)) && M($);
        });
      }
      z(V, H);
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
  ]), p = /* @__PURE__ */ Te(() => {
    const g = [], _ = (w) => {
      for (let k of w)
        i().length > 0 ? i().includes(k.value) && g.push(k) : a().includes(k.value) && g.push(k), k.children && k.children.length > 0 && _(k.children);
    };
    return _(r()), g;
  }), v;
  function h(g) {
    var _;
    v == null || v.hide(), (_ = o()) == null || _(g);
  }
  var b = $m();
  let x;
  var C = Y(b);
  return zn(
    mo(C, {
      floating: (g) => {
        var _ = ym(), w = Y(_);
        n(w, r), j(_), z(g, _);
      },
      children: (g, _) => {
        var w = xm();
        let k;
        var V = Y(w);
        Zt(
          V,
          23,
          () => f(p),
          (E, H) => `${H}_${E.value}`,
          (E, H, N) => {
            var I = lt(), R = Ce(I);
            {
              var L = (S) => {
                var $ = lt(), M = Ce($);
                {
                  var T = (P) => {
                    sr(P, {
                      get target() {
                        return f(H).label;
                      }
                    });
                  };
                  xe(M, (P) => {
                    f(N) === 0 && P(T);
                  });
                }
                z(S, $);
              }, B = (S) => {
                var $ = wm(), M = Ce($);
                sr(M, {
                  get target() {
                    return f(H).label;
                  }
                });
                var T = q(M, 2);
                {
                  var P = (O) => {
                    var A = Ye(",");
                    z(O, A);
                  };
                  xe(T, (O) => {
                    f(N) < f(p).length - 1 && O(P);
                  });
                }
                z(S, $);
              };
              xe(R, (S) => {
                l() ? S(B, !1) : S(L);
              });
            }
            z(E, I);
          },
          (E) => {
            var H = bm(), N = Y(H, !0);
            j(H), Se(() => bt(N, c())), z(E, H);
          }
        ), j(V), Re(2), j(w), Se(() => k = sn(w, k, {
          class: "tf-select-input nopan nodrag",
          ...d
        })), z(g, w);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (g) => v = g,
    () => v
  ), j(b), Se(() => x = sn(b, x, {
    ...d,
    class: `tf-select ${d.class ?? ""}`
  })), z(e, b), ye({
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
  gn,
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
const Yo = Math.min, Kr = Math.max, Qi = Math.round, Hn = (e) => ({
  x: e,
  y: e
}), Cm = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, _m = {
  start: "end",
  end: "start"
};
function fs(e, t, n) {
  return Kr(e, Yo(t, n));
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
function jd(e) {
  return e === "x" ? "y" : "x";
}
function Fs(e) {
  return e === "y" ? "height" : "width";
}
function Sr(e) {
  return ["top", "bottom"].includes(Tr(e)) ? "y" : "x";
}
function Gs(e) {
  return jd(Sr(e));
}
function km(e, t, n) {
  n === void 0 && (n = !1);
  const r = ii(e), o = Gs(e), i = Fs(o);
  let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (a = ea(a)), [a, ea(a)];
}
function Em(e) {
  const t = ea(e);
  return [vs(e), t, vs(t)];
}
function vs(e) {
  return e.replace(/start|end/g, (t) => _m[t]);
}
function Sm(e, t, n) {
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
function Mm(e, t, n, r) {
  const o = ii(e);
  let i = Sm(Tr(e), n === "start", r);
  return o && (i = i.map((a) => a + "-" + o), t && (i = i.concat(i.map(vs)))), i;
}
function ea(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Cm[t]);
}
function Pm(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Xd(e) {
  return typeof e != "number" ? Pm(e) : {
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
  const i = Sr(t), a = Gs(t), s = Fs(a), l = Tr(t), u = i === "y", c = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, p = r[s] / 2 - o[s] / 2;
  let v;
  switch (l) {
    case "top":
      v = {
        x: c,
        y: r.y - o.height
      };
      break;
    case "bottom":
      v = {
        x: c,
        y: r.y + r.height
      };
      break;
    case "right":
      v = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      v = {
        x: r.x - o.width,
        y: d
      };
      break;
    default:
      v = {
        x: r.x,
        y: r.y
      };
  }
  switch (ii(t)) {
    case "start":
      v[a] -= p * (n && u ? -1 : 1);
      break;
    case "end":
      v[a] += p * (n && u ? -1 : 1);
      break;
  }
  return v;
}
const Vm = async (e, t, n) => {
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
  } = uu(u, r, l), p = r, v = {}, h = 0;
  for (let b = 0; b < s.length; b++) {
    const {
      name: x,
      fn: C
    } = s[b], {
      x: g,
      y: _,
      data: w,
      reset: k
    } = await C({
      x: c,
      y: d,
      initialPlacement: r,
      placement: p,
      strategy: o,
      middlewareData: v,
      rects: u,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = g ?? c, d = _ ?? d, v = {
      ...v,
      [x]: {
        ...v[x],
        ...w
      }
    }, k && h <= 50 && (h++, typeof k == "object" && (k.placement && (p = k.placement), k.rects && (u = k.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : k.rects), {
      x: c,
      y: d
    } = uu(u, p, l)), b = -1);
  }
  return {
    x: c,
    y: d,
    placement: p,
    strategy: o,
    middlewareData: v
  };
};
async function Yd(e, t) {
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
    altBoundary: p = !1,
    padding: v = 0
  } = oi(t, e), h = Xd(v), b = s[p ? d === "floating" ? "reference" : "floating" : d], x = ta(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(b))) == null || n ? b : b.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: l
  })), C = d === "floating" ? {
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
    rect: C,
    offsetParent: g,
    strategy: l
  }) : C);
  return {
    top: (x.top - w.top + h.top) / _.y,
    bottom: (w.bottom - x.bottom + h.bottom) / _.y,
    left: (x.left - w.left + h.left) / _.x,
    right: (w.right - x.right + h.right) / _.x
  };
}
const Om = (e) => ({
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
    const d = Xd(c), p = {
      x: n,
      y: r
    }, v = Gs(o), h = Fs(v), b = await a.getDimensions(u), x = v === "y", C = x ? "top" : "left", g = x ? "bottom" : "right", _ = x ? "clientHeight" : "clientWidth", w = i.reference[h] + i.reference[v] - p[v] - i.floating[h], k = p[v] - i.reference[v], V = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
    let E = V ? V[_] : 0;
    (!E || !await (a.isElement == null ? void 0 : a.isElement(V))) && (E = s.floating[_] || i.floating[h]);
    const H = w / 2 - k / 2, N = E / 2 - b[h] / 2 - 1, I = Yo(d[C], N), R = Yo(d[g], N), L = I, B = E - b[h] - R, S = E / 2 - b[h] / 2 + H, $ = fs(L, S, B), M = !l.arrow && ii(o) != null && S !== $ && i.reference[h] / 2 - (S < L ? I : R) - b[h] / 2 < 0, T = M ? S < L ? S - L : S - B : 0;
    return {
      [v]: p[v] + T,
      data: {
        [v]: $,
        centerOffset: S - $ - T,
        ...M && {
          alignmentOffset: T
        }
      },
      reset: M
    };
  }
}), Hm = function(e) {
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
        fallbackPlacements: p,
        fallbackStrategy: v = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: b = !0,
        ...x
      } = oi(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const C = Tr(o), g = Sr(s), _ = Tr(s) === s, w = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), k = p || (_ || !b ? [ea(s)] : Em(s)), V = h !== "none";
      !p && V && k.push(...Mm(s, b, h, w));
      const E = [s, ...k], H = await Yd(t, x), N = [];
      let I = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && N.push(H[C]), d) {
        const $ = km(o, a, w);
        N.push(H[$[0]], H[$[1]]);
      }
      if (I = [...I, {
        placement: o,
        overflows: N
      }], !N.every(($) => $ <= 0)) {
        var R, L;
        const $ = (((R = i.flip) == null ? void 0 : R.index) || 0) + 1, M = E[$];
        if (M) {
          var B;
          const P = d === "alignment" ? g !== Sr(M) : !1, O = ((B = I[0]) == null ? void 0 : B.overflows[0]) > 0;
          if (!P || O)
            return {
              data: {
                index: $,
                overflows: I
              },
              reset: {
                placement: M
              }
            };
        }
        let T = (L = I.filter((P) => P.overflows[0] <= 0).sort((P, O) => P.overflows[1] - O.overflows[1])[0]) == null ? void 0 : L.placement;
        if (!T)
          switch (v) {
            case "bestFit": {
              var S;
              const P = (S = I.filter((O) => {
                if (V) {
                  const A = Sr(O.placement);
                  return A === g || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  A === "y";
                }
                return !0;
              }).map((O) => [O.placement, O.overflows.filter((A) => A > 0).reduce((A, X) => A + X, 0)]).sort((O, A) => O[1] - A[1])[0]) == null ? void 0 : S[0];
              P && (T = P);
              break;
            }
            case "initialPlacement":
              T = s;
              break;
          }
        if (o !== T)
          return {
            reset: {
              placement: T
            }
          };
      }
      return {};
    }
  };
};
async function Tm(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = Tr(n), s = ii(n), l = Sr(n) === "y", u = ["left", "top"].includes(a) ? -1 : 1, c = i && l ? -1 : 1, d = oi(t, e);
  let {
    mainAxis: p,
    crossAxis: v,
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
  return s && typeof h == "number" && (v = s === "end" ? h * -1 : h), l ? {
    x: v * c,
    y: p * u
  } : {
    x: p * u,
    y: v * c
  };
}
const Nm = function(e) {
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
      } = t, l = await Tm(t, e);
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
}, Lm = function(e) {
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
          fn: (x) => {
            let {
              x: C,
              y: g
            } = x;
            return {
              x: C,
              y: g
            };
          }
        },
        ...l
      } = oi(e, t), u = {
        x: n,
        y: r
      }, c = await Yd(t, l), d = Sr(Tr(o)), p = jd(d);
      let v = u[p], h = u[d];
      if (i) {
        const x = p === "y" ? "top" : "left", C = p === "y" ? "bottom" : "right", g = v + c[x], _ = v - c[C];
        v = fs(g, v, _);
      }
      if (a) {
        const x = d === "y" ? "top" : "left", C = d === "y" ? "bottom" : "right", g = h + c[x], _ = h - c[C];
        h = fs(g, h, _);
      }
      const b = s.fn({
        ...t,
        [p]: v,
        [d]: h
      });
      return {
        ...b,
        data: {
          x: b.x - n,
          y: b.y - r,
          enabled: {
            [p]: i,
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
function Dm(e) {
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
function zm(e) {
  let t = hr(e);
  for (; An(t) && !so(t); ) {
    if (Us(t))
      return t;
    if (Ca(t))
      return null;
    t = hr(t);
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
function hr(e) {
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
  const t = hr(e);
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
const Am = /* @__PURE__ */ Hn(0);
function Jd(e) {
  const t = an(e);
  return !Js() || !t.visualViewport ? Am : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Im(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== an(e) ? !1 : t;
}
function Wo(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Ud(e);
  let a = Hn(1);
  t && (r ? _n(r) && (a = Fr(r)) : a = Fr(e));
  const s = Im(i, n, r) ? Jd(i) : Hn(0);
  let l = (o.left + s.x) / a.x, u = (o.top + s.y) / a.y, c = o.width / a.x, d = o.height / a.y;
  if (i) {
    const p = an(i), v = r && _n(r) ? an(r) : r;
    let h = p, b = ps(h);
    for (; b && r && v !== h; ) {
      const x = Fr(b), C = b.getBoundingClientRect(), g = kn(b), _ = C.left + (b.clientLeft + parseFloat(g.paddingLeft)) * x.x, w = C.top + (b.clientTop + parseFloat(g.paddingTop)) * x.y;
      l *= x.x, u *= x.y, c *= x.x, d *= x.y, l += _, u += w, h = an(b), b = ps(h);
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
function Rm(e) {
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
    const v = Wo(r);
    u = Fr(r), c.x = v.x + r.clientLeft, c.y = v.y + r.clientTop;
  }
  const p = a && !d && !i ? Qd(a, l, !0) : Hn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + p.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + p.y
  };
}
function qm(e) {
  return Array.from(e.getClientRects());
}
function Zm(e) {
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
function Bm(e, t) {
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
function jm(e, t) {
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
    r = Bm(e, n);
  else if (t === "document")
    r = Zm(Un(e));
  else if (_n(t))
    r = jm(t, n);
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
  const n = hr(e);
  return n === t || !_n(n) || so(n) ? !1 : kn(n).position === "fixed" || ef(n, t);
}
function Xm(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Fd(e, []).filter((s) => _n(s) && ho(s) !== "body"), o = null;
  const i = kn(e).position === "fixed";
  let a = i ? hr(e) : e;
  for (; _n(a) && !so(a); ) {
    const s = kn(a), l = Us(a);
    !l && s.position === "fixed" && (o = null), (i ? !l && !o : !l && s.position === "static" && o && ["absolute", "fixed"].includes(o.position) || ai(a) && !l && ef(e, a)) ? r = r.filter((u) => u !== a) : o = s, a = hr(a);
  }
  return t.set(e, r), r;
}
function Ym(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? Ca(t) ? [] : Xm(t, this._c) : [].concat(n), r], a = i[0], s = i.reduce((l, u) => {
    const c = du(t, u, o);
    return l.top = Kr(c.top, l.top), l.right = Yo(c.right, l.right), l.bottom = Yo(c.bottom, l.bottom), l.left = Kr(c.left, l.left), l;
  }, du(t, a, o));
  return {
    width: s.right - s.left,
    height: s.bottom - s.top,
    x: s.left,
    y: s.top
  };
}
function Wm(e) {
  const {
    width: t,
    height: n
  } = Gd(e);
  return {
    width: t,
    height: n
  };
}
function Km(e, t, n) {
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
      const v = Wo(t, !0, i, t);
      l.x = v.x + t.clientLeft, l.y = v.y + t.clientTop;
    } else o && u();
  i && !r && o && u();
  const c = o && !r && !i ? Qd(o, s) : Hn(0), d = a.left + s.scrollLeft - l.x - c.x, p = a.top + s.scrollTop - l.y - c.y;
  return {
    x: d,
    y: p,
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
    let o = hr(e);
    for (; o && !so(o); ) {
      if (_n(o) && !Za(o))
        return o;
      o = hr(o);
    }
    return n;
  }
  let r = fu(e, t);
  for (; r && Dm(r) && Za(r); )
    r = fu(r, t);
  return r && so(r) && Za(r) && !Us(r) ? n : r || zm(e) || n;
}
const Fm = async function(e) {
  const t = this.getOffsetParent || tf, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Km(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Gm(e) {
  return kn(e).direction === "rtl";
}
const Um = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Rm,
  getDocumentElement: Un,
  getClippingRect: Ym,
  getOffsetParent: tf,
  getElementRects: Fm,
  getClientRects: qm,
  getDimensions: Wm,
  getScale: Fr,
  isElement: _n,
  isRTL: Gm
}, Jm = Nm, Qm = Lm, ey = Hm, ty = Om, ny = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Um,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return Vm(e, t, {
    ...o,
    platform: i
  });
}, ry = ({
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
    const C = document.querySelector(e);
    if (C)
      e = C;
    else
      throw new Error("element not found by document.querySelector('" + e + "')");
  }
  let u;
  if (typeof n == "string") {
    const C = document.querySelector(n);
    if (C)
      u = C;
    else
      throw new Error("element not found by document.querySelector('" + n + "')");
  } else
    u = n;
  let c;
  l && (c = document.createElement("div"), c.style.position = "absolute", c.style.backgroundColor = "#222", c.style.width = "8px", c.style.height = "8px", c.style.transform = "rotate(45deg)", c.style.display = "none", u.firstElementChild.before(c));
  function d() {
    ny(e, u, {
      placement: r,
      middleware: [
        Jm(o),
        // 手动偏移配置
        ey(i),
        //自动翻转
        Qm(a),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [ty({ element: c })] : []
      ]
    }).then(({ x: C, y: g, placement: _, middlewareData: w }) => {
      if (Object.assign(u.style, {
        left: `${C}px`,
        top: `${g}px`
      }), l) {
        const { x: k, y: V } = w.arrow, E = {
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
          [E]: "2px"
        });
      }
    });
  }
  let p = !1;
  function v() {
    u.style.display = "block", u.style.visibility = "block", u.style.position = "absolute", l && (c.style.display = "block"), p = !0, d();
  }
  function h() {
    u.style.display = "none", l && (c.style.display = "none"), p = !1;
  }
  function b(C) {
    C.stopPropagation(), p ? h() : v();
  }
  function x(C) {
    u.contains(C.target) || h();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach((C) => {
    e.addEventListener(C, b);
  }), document.addEventListener("click", x), {
    destroy() {
      t.forEach((C) => {
        e.removeEventListener(C, b);
      }), document.removeEventListener("click", x);
    },
    hide() {
      h();
    },
    isVisible() {
      return p;
    }
  };
};
var oy = /* @__PURE__ */ ie('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function mo(e, t) {
  me(t, !0);
  const n = y(t, "children", 7), r = y(t, "floating", 7), o = y(t, "placement", 7, "bottom");
  let i, a, s;
  hn(() => (s = ry({
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
  var u = oy(), c = Y(u), d = Y(c);
  Pr(d, n), j(c), zn(c, (h) => i = h, () => i);
  var p = q(c, 2), v = Y(p);
  return Pr(v, r), j(p), zn(p, (h) => a = h, () => a), j(u), z(e, u), ye({
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
  me(t, !0);
  const n = y(t, "children", 7), r = y(t, "level", 7, 1), o = y(t, "mt", 7), i = y(t, "mb", 7);
  var a = lt(), s = Ce(a);
  return X1(s, () => `h${r()}`, !1, (l, u) => {
    let c;
    Se(() => c = sn(l, c, {
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var d = lt(), p = Ce(d);
    Pr(p, () => n() ?? Et), z(u, d);
  }), z(e, a), ye({
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
var iy = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const ay = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function ka(e, t) {
  me(t, !0), ot(e, ay);
  const n = /* @__PURE__ */ Ot(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  Je(e, mt(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = iy();
      z(r, i);
    },
    $$slots: { default: !0 }
  })), ye();
}
pe(ka, {}, [], [], !0);
const sy = () => {
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
}, ly = () => {
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
}, mr = () => Mr("tinyflow_options");
function St() {
  return Mr("svelteflow__node_id");
}
var uy = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), cy = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), dy = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), fy = /* @__PURE__ */ ie('<div class="input-item svelte-1jesvb7">执行条件： <!></div>'), vy = (e, t, n) => {
  const r = e.target.checked;
  t(n, { async: r });
}, py = /* @__PURE__ */ ie('<div class="settings svelte-1jesvb7"><div class="input-item svelte-1jesvb7">节点名称： <!></div> <div class="input-item svelte-1jesvb7">参数描述： <!></div> <!> <label class="input-item-inline svelte-1jesvb7"><span>异步执行：</span> <input type="checkbox"></label></div>'), gy = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), hy = /* @__PURE__ */ ie('<div class="tf-node-toolbar svelte-1jesvb7"><!> <!> <!> <!></div>'), my = /* @__PURE__ */ ie('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const yy = {
  hash: "svelte-1jesvb7",
  code: ".tf-node-toolbar.svelte-1jesvb7 {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-1jesvb7 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-1jesvb7 .input-item:where(.svelte-1jesvb7) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}.settings.svelte-1jesvb7 .input-item-inline:where(.svelte-1jesvb7) {display:flex;align-items:center;font-size:12px;color:#666;}"
};
function Mn(e, t) {
  me(t, !0), ot(e, yy);
  const n = y(t, "data", 7), r = y(t, "id", 7, ""), o = y(t, "icon", 7), i = y(t, "handle", 7), a = y(t, "children", 7), s = y(t, "allowExecute", 7, !0), l = y(t, "allowCopy", 7, !0), u = y(t, "allowDelete", 7, !0), c = y(t, "allowSetting", 7, !0), d = y(t, "allowSettingOfCondition", 7, !0), p = y(t, "showSourceHandle", 7, !0), v = y(t, "showTargetHandle", 7, !0), h = y(t, "onCollapse", 7);
  let b = n().expand ? ["key"] : [];
  const { updateNodeData: x, getNode: C } = Jt(), g = /* @__PURE__ */ Te(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: a()
    }
  ]), { deleteNode: _ } = sy(), { copyNode: w } = ly(), k = mr(), V = () => {
    var O;
    (O = k.onNodeExecute) == null || O.call(k, C(r()));
  };
  let E = St();
  var H = my(), N = Ce(H);
  {
    var I = (O) => {
      Id(O, {
        get position() {
          return ze.Top;
        },
        align: "end",
        children: (A, X) => {
          var W = hy(), U = Y(W);
          {
            var Q = ($e) => {
              Je($e, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  _(r());
                },
                children: (He, ue) => {
                  var J = uy();
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
                children: (He, ue) => {
                  var J = cy();
                  z(He, J);
                },
                $$slots: { default: !0 }
              });
            };
            xe(F, ($e) => {
              l() && $e(ge);
            });
          }
          var de = q(F, 2);
          {
            var he = ($e) => {
              Je($e, {
                class: "tf-node-toolbar-item",
                onclick: V,
                children: (He, ue) => {
                  var J = dy();
                  z(He, J);
                },
                $$slots: { default: !0 }
              });
            };
            xe(de, ($e) => {
              s() && $e(he);
            });
          }
          var le = q(de, 2);
          {
            var ke = ($e) => {
              mo($e, {
                placement: "bottom",
                floating: (He) => {
                  var ue = py(), J = Y(ue), Me = q(Y(J));
                  _t(Me, {
                    style: "width: 100%;",
                    onchange: (ae) => {
                      const Ve = ae.target.value;
                      x(E, { title: Ve });
                    },
                    get value() {
                      return n().title;
                    }
                  }), j(J);
                  var K = q(J, 2), Ne = q(Y(K));
                  Pt(Ne, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (ae) => {
                      const Ve = ae.target.value;
                      x(E, { description: Ve });
                    },
                    get value() {
                      return n().description;
                    }
                  }), j(K);
                  var qe = q(K, 2);
                  {
                    var Le = (ae) => {
                      var Ve = fy(), it = q(Y(Ve));
                      Pt(it, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (rt) => {
                          const te = rt.target.value;
                          x(E, { condition: te });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), j(Ve), z(ae, Ve);
                    };
                    xe(qe, (ae) => {
                      d() && ae(Le);
                    });
                  }
                  var ce = q(qe, 2), fe = q(Y(ce), 2);
                  ur(fe), fe.__change = [vy, x, E], j(ce), j(ue), Se(() => F1(fe, !!n().async)), z(He, ue);
                },
                children: (He, ue) => {
                  Je(He, {
                    class: "tf-node-toolbar-item",
                    children: (J, Me) => {
                      var K = gy();
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
          j(W), z(A, W);
        },
        $$slots: { default: !0 }
      });
    };
    xe(N, (O) => {
      (s() || l() || u()) && O(I);
    });
  }
  var R = q(N, 2), L = q(Y(R), 2), B = Y(L);
  Bd(B, {
    get items() {
      return f(g);
    },
    activeKeys: b,
    onChange: (O, A) => {
      var X;
      x(r(), { expand: A == null ? void 0 : A.includes("key") }), (X = h()) == null || X(A != null && A.includes("key") ? "key" : "");
    }
  }), j(L), j(R);
  var S = q(R, 2);
  {
    var $ = (O) => {
      gr(O, {
        type: "target",
        get position() {
          return ze.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    xe(S, (O) => {
      v() && O($);
    });
  }
  var M = q(S, 2);
  {
    var T = (O) => {
      gr(O, {
        type: "source",
        get position() {
          return ze.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    xe(M, (O) => {
      p() && O(T);
    });
  }
  var P = q(M, 2);
  return Pr(P, () => i() ?? Et), z(e, H), ye({
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
      return p();
    },
    set showSourceHandle(O = !0) {
      p(O), m();
    },
    get showTargetHandle() {
      return v();
    },
    set showTargetHandle(O = !0) {
      v(O), m();
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
  Mn,
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
], wy = [
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
var by = /* @__PURE__ */ ie('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), xy = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), $y = /* @__PURE__ */ ie('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const Cy = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function rf(e, t) {
  me(t, !0), ot(e, Cy);
  const [n, r] = vt(), o = () => oe(f(l), "$node", n), i = y(t, "parameter", 7), a = y(t, "index", 7);
  let s = St(), l = /* @__PURE__ */ Te(() => Dr(s)), u = /* @__PURE__ */ Te(() => {
    var N, I;
    return {
      ...i(),
      ...(I = (N = o()) == null ? void 0 : N.data) == null ? void 0 : I.parameters[a()]
    };
  });
  const { updateNodeData: c } = Jt(), d = (N, I) => {
    c(s, (R) => {
      let L = R.data.parameters;
      return L[a()][N] = I, { parameters: L };
    });
  }, p = (N) => {
    const I = N.target.value;
    d("name", I);
  }, v = (N) => {
    const I = N.target.checked;
    d("required", I);
  }, h = (N) => {
    const I = N.value;
    I && d("dataType", I);
  };
  let b;
  const x = () => {
    c(s, (N) => {
      let I = N.data.parameters;
      return I.splice(a(), 1), { parameters: [...I] };
    }), b == null || b.hide();
  };
  var C = $y(), g = Ce(C), _ = Y(g);
  _t(_, {
    style: "width: 100%;",
    get value() {
      return f(u).name;
    },
    placeholder: "请输入参数名称",
    oninput: p
  }), j(g);
  var w = q(g, 2), k = Y(w);
  Rd(k, {
    get checked() {
      return f(u).required;
    },
    onchange: v
  }), j(w);
  var V = q(w, 2), E = Y(V);
  zn(
    mo(E, {
      placement: "bottom",
      floating: (N) => {
        var I = by(), R = Y(I), L = q(Y(R));
        const B = /* @__PURE__ */ Te(() => f(u).dataType ? [f(u).dataType] : ["String"]);
        gn(L, {
          items: nf,
          style: "width: 100%",
          onSelect: h,
          get value() {
            return f(B);
          }
        }), j(R);
        var S = q(R, 2), $ = q(Y(S));
        Pt($, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return f(u).defaultValue;
          },
          onchange: (A) => {
            const X = A.target.value;
            d("defaultValue", X);
          }
        }), j(S);
        var M = q(S, 2), T = q(Y(M));
        Pt(T, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return f(u).description;
          },
          onchange: (A) => {
            const X = A.target.value;
            d("description", X);
          }
        }), j(M);
        var P = q(M, 2), O = Y(P);
        Je(O, {
          onclick: x,
          children: (A, X) => {
            Re();
            var W = Ye("删除");
            z(A, W);
          },
          $$slots: { default: !0 }
        }), j(P), j(I), z(N, I);
      },
      children: (N, I) => {
        Je(N, {
          class: "input-btn-more",
          children: (R, L) => {
            var B = xy();
            z(R, B);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (N) => b = N,
    () => b
  ), j(V), z(e, C);
  var H = ye({
    get parameter() {
      return i();
    },
    set parameter(N) {
      i(N), m();
    },
    get index() {
      return a();
    },
    set index(N) {
      a(N), m();
    }
  });
  return r(), H;
}
pe(rf, { parameter: {}, index: {} }, [], [], !0);
var _y = /* @__PURE__ */ ie('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), ky = /* @__PURE__ */ ie('<div class="none-params svelte-3n0wca">无输入参数</div>'), Ey = /* @__PURE__ */ ie('<div class="input-container svelte-3n0wca"><!> <!></div>');
const Sy = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function of(e, t) {
  me(t, !0), ot(e, Sy);
  const [n, r] = vt(), o = () => oe(f(a), "$node", n);
  let i = St(), a = /* @__PURE__ */ Te(() => Dr(i)), s = /* @__PURE__ */ Te(() => {
    var p, v;
    return [...((v = (p = o()) == null ? void 0 : p.data) == null ? void 0 : v.parameters) || []];
  });
  var l = Ey(), u = Y(l);
  {
    var c = (p) => {
      var v = _y();
      Re(4), z(p, v);
    };
    xe(u, (p) => {
      f(s).length !== 0 && p(c);
    });
  }
  var d = q(u, 2);
  Zt(
    d,
    19,
    () => f(s),
    (p) => p.id,
    (p, v, h) => {
      rf(p, {
        get parameter() {
          return f(v);
        },
        get index() {
          return f(h);
        }
      });
    },
    (p) => {
      var v = ky();
      z(p, v);
    }
  ), j(l), z(e, l), ye(), r();
}
pe(of, {}, [], [], !0);
const na = (e) => (!e || e.length == 0 || e.forEach((t) => {
  t.id || (t.id = lo()), na(t.children);
}), e), qn = () => {
  const { updateNodeData: e } = Jt();
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
var My = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), Py = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Vy = /* @__PURE__ */ ie('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const Oy = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function af(e, t) {
  me(t, !0), ot(e, Oy);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ot(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = St(), { addParameter: i } = qn();
  return Mn(e, mt(() => r, {
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
      var l = Vy(), u = Ce(l), c = Y(u);
      nt(c, {
        level: 3,
        children: (v, h) => {
          Re();
          var b = Ye("输入参数");
          z(v, b);
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
        children: (v, h) => {
          var b = Py();
          z(v, b);
        },
        $$slots: { default: !0 }
      }), j(u);
      var p = q(u, 2);
      of(p, {}), z(a, l);
    },
    $$slots: { icon: !0, default: !0 }
  })), ye({
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
  for (let r of n)
    r.target === t && r.source && (e.push(r.source), sf(e, r.source, n));
}, vu = (e, t) => {
  if (e.type === "startNode") {
    const n = e.data.parameters, r = [];
    if (n)
      for (const o of n)
        r.push({
          label: o.name + (t ? ` (Array<${o.dataType || "String"}>)` : ` (${o.dataType || "String"})`),
          value: e.id + "." + o.name
        });
    return {
      label: e.data.title,
      value: e.id,
      children: r
    };
  } else {
    if (e.type === "loopNode" && t)
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
      const n = e.data.outputDefs;
      if (n) {
        const r = (o, i) => !o || o.length === 0 ? [] : o.map((a) => ({
          label: a.name + (t ? ` (Array<${a.dataType || "String"}>)` : ` (${a.dataType || "String"})`),
          // label: param.name ,
          value: i + "." + a.name,
          children: r(a.children, i + "." + a.name)
        }));
        return {
          label: e.data.title,
          value: e.id,
          children: r(n, e.id)
        };
      }
    }
  }
}, Hy = (e = !1) => {
  const t = St(), n = Dr(t), { nodes: r, edges: o } = tt();
  return cr([n, r, o], ([i, a, s]) => {
    const l = [];
    if (e) {
      for (let u of a)
        if (u.parentId === i.id) {
          const c = vu(u, u.parentId === i.id);
          c && l.push(c);
        }
    } else {
      const u = [];
      sf(u, t, s);
      for (let c of a)
        if (u.includes(c.id)) {
          const d = vu(c, c.parentId === i.id);
          d && l.push(d);
        }
    }
    return l;
  });
};
var Ty = /* @__PURE__ */ ie('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), Ny = /* @__PURE__ */ ie('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const Ly = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function lf(e, t) {
  me(t, !0), ot(e, Ly);
  const [n, r] = vt(), o = () => oe(f(c), "$node", n), i = () => oe(_, "$selectItems", n);
  hn(() => {
    f(d).refType || x({ value: "ref" });
  });
  const a = y(t, "parameter", 7), s = y(t, "index", 7), l = y(t, "dataKeyName", 7);
  let u = St(), c = /* @__PURE__ */ Te(() => Dr(u)), d = /* @__PURE__ */ Te(() => {
    var $;
    return {
      ...a(),
      ...($ = o()) == null ? void 0 : $.data[l()][s()]
    };
  });
  const { updateNodeData: p } = Jt(), v = ($, M) => {
    p(u, (T) => {
      let P = T.data[l()];
      return P[s()] = { ...P[s()], [$]: M }, { [l()]: P };
    });
  }, h = ($, M) => {
    const T = M.target.value;
    v($, T);
  }, b = ($) => {
    const M = $.value;
    v("ref", M);
  }, x = ($) => {
    const M = $.value;
    v("refType", M);
  };
  let C;
  const g = () => {
    p(u, ($) => {
      let M = $.data[l()];
      return M.splice(s(), 1), { [l()]: [...M] };
    }), C == null || C.hide();
  }, _ = Hy();
  var w = Ny(), k = Ce(w), V = Y(k);
  const E = /* @__PURE__ */ Te(() => f(d).nameDisabled === !0);
  _t(V, {
    style: "width: 100%;",
    get value() {
      return f(d).name;
    },
    placeholder: "请输入参数名称",
    get disabled() {
      return f(E);
    },
    oninput: ($) => h("name", $)
  }), j(k);
  var H = q(k, 2), N = Y(H);
  {
    var I = ($) => {
      _t($, {
        get value() {
          return f(d).value;
        },
        placeholder: "请输入参数值",
        oninput: (M) => h("value", M)
      });
    }, R = ($, M) => {
      {
        var T = (P) => {
          const O = /* @__PURE__ */ Te(() => [f(d).ref]);
          gn(P, {
            get items() {
              return i();
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return f(O);
            },
            expandAll: !0,
            onSelect: b
          });
        };
        xe(
          $,
          (P) => {
            f(d).refType !== "input" && P(T);
          },
          M
        );
      }
    };
    xe(N, ($) => {
      f(d).refType === "fixed" ? $(I) : $(R, !1);
    });
  }
  j(H);
  var L = q(H, 2), B = Y(L);
  zn(
    mo(B, {
      placement: "bottom",
      floating: ($) => {
        var M = Ty(), T = Y(M), P = q(Y(T));
        const O = /* @__PURE__ */ Te(() => f(d).refType ? [f(d).refType] : []);
        gn(P, {
          items: wy,
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return f(O);
          },
          onSelect: x
        }), j(T);
        var A = q(T, 2), X = q(Y(A));
        Pt(X, {
          rows: 1,
          style: "width: 100%;",
          onchange: (ge) => {
            h("defaultValue", ge);
          },
          get value() {
            return f(d).defaultValue;
          }
        }), j(A);
        var W = q(A, 2), U = q(Y(W));
        Pt(U, {
          rows: 3,
          style: "width: 100%;",
          onchange: (ge) => {
            h("description", ge);
          },
          get value() {
            return f(d).description;
          }
        }), j(W);
        var Q = q(W, 2), F = Y(Q);
        Je(F, {
          onclick: g,
          children: (ge, de) => {
            Re();
            var he = Ye("删除");
            z(ge, he);
          },
          $$slots: { default: !0 }
        }), j(Q), j(M), z($, M);
      },
      children: ($, M) => {
        ka($, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    ($) => C = $,
    () => C
  ), j(L), z(e, w);
  var S = ye({
    get parameter() {
      return a();
    },
    set parameter($) {
      a($), m();
    },
    get index() {
      return s();
    },
    set index($) {
      s($), m();
    },
    get dataKeyName() {
      return l();
    },
    set dataKeyName($) {
      l($), m();
    }
  });
  return r(), S;
}
pe(lf, { parameter: {}, index: {}, dataKeyName: {} }, [], [], !0);
var Dy = /* @__PURE__ */ ie('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), zy = /* @__PURE__ */ ie('<div class="none-params svelte-1sm1mgi"> </div>'), Ay = /* @__PURE__ */ ie('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Iy = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function rn(e, t) {
  me(t, !0), ot(e, Iy);
  const [n, r] = vt(), o = () => oe(f(l), "$node", n), i = y(t, "noneParameterText", 7, "无输入参数"), a = y(t, "dataKeyName", 7, "parameters");
  let s = St(), l = /* @__PURE__ */ Te(() => Dr(s)), u = /* @__PURE__ */ Te(() => {
    var b;
    return [...((b = o()) == null ? void 0 : b.data[a()]) || []];
  });
  var c = Ay(), d = Y(c);
  {
    var p = (b) => {
      var x = Dy();
      Re(4), z(b, x);
    };
    xe(d, (b) => {
      f(u).length !== 0 && b(p);
    });
  }
  var v = q(d, 2);
  Zt(
    v,
    19,
    () => f(u),
    (b) => b.id,
    (b, x, C) => {
      lf(b, {
        get parameter() {
          return f(x);
        },
        get index() {
          return f(C);
        },
        get dataKeyName() {
          return a();
        }
      });
    },
    (b) => {
      var x = zy(), C = Y(x, !0);
      j(x), Se(() => bt(C, i())), z(b, x);
    }
  ), j(c), z(e, c);
  var h = ye({
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
    }
  });
  return r(), h;
}
pe(rn, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var Ry = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), qy = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Zy = /* @__PURE__ */ ie('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const By = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function uf(e, t) {
  me(t, !0), ot(e, By);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ot(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = St(), { addParameter: i } = qn();
  return Mn(e, mt(
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
        var s = Ry();
        z(a, s);
      },
      children: (a, s) => {
        var l = Zy(), u = Ce(l), c = Y(u);
        nt(c, {
          level: 3,
          children: (v, h) => {
            Re();
            var b = Ye("输出参数");
            z(v, b);
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
          children: (v, h) => {
            var b = qy();
            z(v, b);
          },
          $$slots: { default: !0 }
        }), j(u);
        var p = q(u, 2);
        rn(p, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs"
        }), z(a, l);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ye({
    get data() {
      return n();
    },
    set data(a) {
      n(a), m();
    }
  });
}
pe(uf, { data: {} }, [], [], !0);
const Ba = (e) => JSON.parse(JSON.stringify(e));
var jy = /* @__PURE__ */ Oe('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), Xy = /* @__PURE__ */ ie('<div class="input-more-item svelte-1cfeest"><!></div>'), Yy = /* @__PURE__ */ ie('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), Wy = /* @__PURE__ */ ie('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const Ky = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function cf(e, t) {
  me(t, !0), ot(e, Ky);
  const [n, r] = vt(), o = () => oe(f(u), "$node", n), i = y(t, "parameter", 7), a = y(t, "position", 7), s = y(t, "dataKeyName", 7);
  let l = St(), u = /* @__PURE__ */ Te(() => Dr(l)), c = /* @__PURE__ */ Te(() => {
    var T;
    let P = (T = o()) == null ? void 0 : T.data[s()], O;
    if (P && a().length > 0) {
      let A = P;
      for (let X = 0; X < a().length; X++) {
        const W = a()[X];
        X == a().length - 1 ? O = A[W] : A = A[W].children;
      }
    }
    return { ...i(), ...O };
  });
  const { updateNodeData: d } = Jt(), p = (T, P) => {
    d(l, (O) => {
      const A = O.data[s()];
      if (A && a().length > 0) {
        let X = A;
        for (let W = 0; W < a().length; W++) {
          const U = a()[W];
          W == a().length - 1 ? X[U] = { ...X[U], [T]: P } : X = X[U].children;
        }
      }
      return {
        [s()]: [...Ba(A)]
      };
    });
  }, v = (T, P) => {
    const O = P.target.value;
    p(T, O);
  }, h = (T) => {
    const P = T.value;
    p("dataType", P);
  };
  let b;
  const x = () => {
    d(l, (T) => {
      let P = T.data[s()];
      if (P && a().length > 0) {
        let O = P;
        for (let A = 0; A < a().length; A++) {
          const X = a()[A];
          A == a().length - 1 ? O.splice(X, 1) : O = O[X].children;
        }
      }
      return {
        [s()]: [...Ba(P)]
      };
    }), b == null || b.hide();
  }, C = () => {
    d(l, (T) => {
      let P = T.data[s()];
      if (P && a().length > 0) {
        let O = P;
        for (let A = 0; A < a().length; A++) {
          const X = a()[A];
          A == a().length - 1 ? O[X].children ? O[X].children.push({
            id: lo(),
            name: "newParam",
            dataType: "String"
          }) : O[X].children = [
            {
              id: lo(),
              name: "newParam",
              dataType: "String"
            }
          ] : O = O[X].children;
        }
      }
      return {
        [s()]: [...Ba(P)]
      };
    });
  };
  var g = Wy(), _ = Ce(g), w = Y(_);
  {
    var k = (T) => {
      var P = lt(), O = Ce(P);
      Zt(O, 17, a, eo, (A, X) => {
        Re();
        var W = Ye(" ");
        z(A, W);
      }), z(T, P);
    };
    xe(w, (T) => {
      a().length > 1 && T(k);
    });
  }
  var V = q(w, 2);
  const E = /* @__PURE__ */ Te(() => f(c).nameDisabled === !0);
  _t(V, {
    style: "width: 100%;",
    get value() {
      return f(c).name;
    },
    placeholder: "请输入参数名称",
    oninput: (T) => {
      v("name", T);
    },
    get disabled() {
      return f(E);
    }
  }), j(_);
  var H = q(_, 2), N = Y(H);
  const I = /* @__PURE__ */ Te(() => f(c).dataType ? [f(c).dataType] : []), R = /* @__PURE__ */ Te(() => f(c).dataTypeDisabled === !0);
  gn(N, {
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
  var L = q(N, 2);
  {
    var B = (T) => {
      Je(T, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: C,
        children: (P, O) => {
          var A = jy();
          z(P, A);
        },
        $$slots: { default: !0 }
      });
    };
    xe(L, (T) => {
      (f(c).dataType === "Object" || f(c).dataType === "Array") && f(c).addChildDisabled !== !0 && T(B);
    });
  }
  j(H);
  var S = q(H, 2), $ = Y(S);
  zn(
    mo($, {
      placement: "bottom",
      floating: (T) => {
        var P = Yy(), O = Y(P), A = q(Y(O));
        const X = /* @__PURE__ */ Te(() => f(c).defaultValue || "");
        Pt(A, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return f(X);
          },
          onchange: (de) => {
            v("defaultValue", de);
          }
        }), j(O);
        var W = q(O, 2), U = q(Y(W));
        const Q = /* @__PURE__ */ Te(() => f(c).description || "");
        Pt(U, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return f(Q);
          },
          onchange: (de) => {
            v("description", de);
          }
        }), j(W);
        var F = q(W, 2);
        {
          var ge = (de) => {
            var he = Xy(), le = Y(he);
            Je(le, {
              onclick: x,
              children: (ke, $e) => {
                Re();
                var He = Ye("删除");
                z(ke, He);
              },
              $$slots: { default: !0 }
            }), j(he), z(de, he);
          };
          xe(F, (de) => {
            f(c).deleteDisabled !== !0 && de(ge);
          });
        }
        j(P), z(T, P);
      },
      children: (T, P) => {
        ka(T, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (T) => b = T,
    () => b
  ), j(S), z(e, g);
  var M = ye({
    get parameter() {
      return i();
    },
    set parameter(T) {
      i(T), m();
    },
    get position() {
      return a();
    },
    set position(T) {
      a(T), m();
    },
    get dataKeyName() {
      return s();
    },
    set dataKeyName(T) {
      s(T), m();
    }
  });
  return r(), M;
}
pe(cf, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0);
var Fy = /* @__PURE__ */ ie("<!> <!>", 1), Gy = /* @__PURE__ */ ie('<div class="none-params svelte-1sm1mgi"> </div>'), Uy = /* @__PURE__ */ ie('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), Jy = /* @__PURE__ */ ie('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Qy = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Jn(e, t) {
  me(t, !0), ot(e, Qy);
  const [n, r] = vt(), o = () => oe(f(u), "$node", n), i = (x, C = Et, g = Et) => {
    var _ = lt(), w = Ce(_);
    Zt(
      w,
      19,
      C,
      (k) => `${k.id}_${k.children ? k.children.length : 0}`,
      (k, V, E) => {
        var H = Fy(), N = Ce(H);
        const I = /* @__PURE__ */ Te(() => [...g(), f(E)]);
        cf(N, {
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
        var R = q(N, 2);
        {
          var L = (B) => {
            var S = /* @__PURE__ */ _e(() => [...g(), f(E)]);
            i(B, () => f(V).children, () => f(S));
          };
          xe(R, (B) => {
            f(V).children && B(L);
          });
        }
        z(k, H);
      },
      (k) => {
        var V = lt(), E = Ce(V);
        {
          var H = (N) => {
            var I = Gy(), R = Y(I, !0);
            j(I), Se(() => bt(R, a())), z(N, I);
          };
          xe(E, (N) => {
            g().length === 0 && N(H);
          });
        }
        z(k, V);
      }
    ), z(x, _);
  }, a = y(t, "noneParameterText", 7, "无输出参数"), s = y(t, "dataKeyName", 7, "outputDefs");
  let l = St(), u = /* @__PURE__ */ Te(() => Dr(l)), c = /* @__PURE__ */ Te(() => {
    var x;
    return [...((x = o()) == null ? void 0 : x.data[s()]) || []];
  });
  var d = Jy(), p = Y(d);
  {
    var v = (x) => {
      var C = Uy();
      Re(4), z(x, C);
    };
    xe(p, (x) => {
      f(c).length !== 0 && x(v);
    });
  }
  var h = q(p, 2);
  i(h, () => f(c) || [], () => []), j(d), z(e, d);
  var b = ye({
    get noneParameterText() {
      return a();
    },
    set noneParameterText(x = "无输出参数") {
      a(x), m();
    },
    get dataKeyName() {
      return s();
    },
    set dataKeyName(x = "outputDefs") {
      s(x), m();
    }
  });
  return r(), b;
}
pe(Jn, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var ew = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), tw = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), nw = (e, t, n) => t(n, { temperature: parseFloat(e.target.value) }), rw = (e, t, n) => t(n, { topP: parseFloat(e.target.value) }), ow = (e, t, n) => t(n, { topK: parseInt(e.target.value) }), iw = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), aw = /* @__PURE__ */ ie('<div class="heading svelte-q0cqsa"><!> <!></div> <!> <!> <div class="setting-title svelte-q0cqsa">模型</div> <div class="setting-item svelte-q0cqsa"><!> <!></div> <div class="setting-title svelte-q0cqsa">采样参数</div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="100" step="1"></div></div> <div class="setting-title svelte-q0cqsa">系统提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="setting-title svelte-q0cqsa">用户提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="heading svelte-q0cqsa"><!> <!> <!></div> <!>', 1);
const sw = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function df(e, t) {
  me(t, !0), ot(e, sw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ot(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = St(), { addParameter: i } = qn(), a = mr();
  let s = /* @__PURE__ */ It(wn([]));
  hn(async () => {
    var c, d;
    const p = await ((d = (c = a.provider) == null ? void 0 : c.llm) == null ? void 0 : d.call(c));
    f(s).push(...p || []);
  });
  const { updateNodeData: l } = Jt(), u = (c) => {
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
  return xn(() => {
    n().outType || u("text");
  }), Mn(e, mt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var d = ew();
        z(c, d);
      },
      children: (c, d) => {
        var p = aw(), v = Ce(p), h = Y(v);
        nt(h, {
          level: 3,
          children: (J, Me) => {
            Re();
            var K = Ye("输入参数");
            z(J, K);
          },
          $$slots: { default: !0 }
        });
        var b = q(h, 2);
        Je(b, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (J, Me) => {
            var K = tw();
            z(J, K);
          },
          $$slots: { default: !0 }
        }), j(v);
        var x = q(v, 2);
        rn(x, {});
        var C = q(x, 2);
        nt(C, {
          level: 3,
          mt: "10px",
          children: (J, Me) => {
            Re();
            var K = Ye("模型设置");
            z(J, K);
          },
          $$slots: { default: !0 }
        });
        var g = q(C, 4), _ = Y(g);
        const w = /* @__PURE__ */ Te(() => n().llmId ? [n().llmId] : []);
        gn(_, {
          get items() {
            return f(s);
          },
          style: "width: 100%",
          placeholder: "请选择模型",
          onSelect: (J) => {
            const Me = J.value;
            l(o, () => ({ llmId: Me }));
          },
          get value() {
            return f(w);
          }
        });
        var k = q(_, 2);
        ka(k, {}), j(g);
        var V = q(g, 4), E = Y(V), H = Y(E), N = Y(H);
        j(H);
        var I = q(H, 2);
        ur(I), I.__input = [nw, l, o], j(E), j(V);
        var R = q(V, 2), L = Y(R), B = Y(L), S = Y(B);
        j(B);
        var $ = q(B, 2);
        ur($), $.__input = [rw, l, o], j(L), j(R);
        var M = q(R, 2), T = Y(M), P = Y(T), O = Y(P);
        j(P);
        var A = q(P, 2);
        ur(A), A.__input = [ow, l, o], j(T), j(M);
        var X = q(M, 4), W = Y(X);
        const U = /* @__PURE__ */ Te(() => n().systemPrompt || "");
        Pt(W, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%",
          get value() {
            return f(U);
          },
          oninput: (J) => {
            l(o, { systemPrompt: J.target.value });
          }
        }), j(X);
        var Q = q(X, 4), F = Y(Q);
        const ge = /* @__PURE__ */ Te(() => n().userPrompt || "");
        Pt(F, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%",
          get value() {
            return f(ge);
          },
          oninput: (J) => {
            l(o, { userPrompt: J.target.value });
          }
        }), j(Q);
        var de = q(Q, 2), he = Y(de);
        nt(he, {
          level: 3,
          mt: "10px",
          children: (J, Me) => {
            Re();
            var K = Ye("输出参数");
            z(J, K);
          },
          $$slots: { default: !0 }
        });
        var le = q(he, 2);
        const ke = /* @__PURE__ */ Te(() => n().outType ? [n().outType] : []);
        gn(le, {
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
              children: (Me, K) => {
                var Ne = iw();
                z(Me, Ne);
              },
              $$slots: { default: !0 }
            });
          };
          xe($e, (J) => {
            n().outType === "json" && J(He);
          });
        }
        j(de);
        var ue = q(de, 2);
        Jn(ue, {}), Se(() => {
          bt(N, `Temperature: ${n().temperature ?? 0.5 ?? ""}`), bi(I, n().temperature ?? 0.5), bt(S, `Top P: ${n().topP ?? 0.9 ?? ""}`), bi($, n().topP ?? 0.9), bt(O, `Top K: ${n().topK ?? 50 ?? ""}`), bi(A, n().topK ?? 50);
        }), z(c, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ye({
    get data() {
      return n();
    },
    set data(c) {
      n(c), m();
    }
  });
}
go(["input"]);
pe(df, { data: {} }, [], [], !0);
var lw = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), uw = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), cw = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), dw = /* @__PURE__ */ ie('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const fw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function ff(e, t) {
  me(t, !0), ot(e, fw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ot(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  hn(() => {
    n().engine || a(o, () => ({ engine: "qlexpress" }));
  });
  const o = St(), { addParameter: i } = qn(), { updateNodeData: a } = Jt(), s = [
    { label: "QLExpress", value: "qlexpress" },
    { label: "Groovy", value: "groovy" },
    { label: "JavaScript", value: "js" }
  ];
  return Mn(e, mt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = lw();
        z(l, u);
      },
      children: (l, u) => {
        var c = dw(), d = Ce(c), p = Y(d);
        nt(p, {
          level: 3,
          children: (I, R) => {
            Re();
            var L = Ye("输入参数");
            z(I, L);
          },
          $$slots: { default: !0 }
        });
        var v = q(p, 2);
        Je(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (I, R) => {
            var L = uw();
            z(I, L);
          },
          $$slots: { default: !0 }
        }), j(d);
        var h = q(d, 2);
        rn(h, {});
        var b = q(h, 2);
        nt(b, {
          level: 3,
          mt: "10px",
          children: (I, R) => {
            Re();
            var L = Ye("代码");
            z(I, L);
          },
          $$slots: { default: !0 }
        });
        var x = q(b, 4), C = Y(x);
        const g = /* @__PURE__ */ Te(() => n().engine ? [n().engine] : ["qlexpress"]);
        gn(C, {
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
        }), j(x);
        var _ = q(x, 4), w = Y(_);
        const k = /* @__PURE__ */ Te(() => n().code || "");
        Pt(w, {
          rows: 10,
          placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result.put(key, value)",
          style: "width: 100%",
          onchange: (I) => {
            a(o, () => ({ code: I.target.value }));
          },
          get value() {
            return f(k);
          }
        }), j(_);
        var V = q(_, 2), E = Y(V);
        nt(E, {
          level: 3,
          mt: "10px",
          children: (I, R) => {
            Re();
            var L = Ye("输出参数");
            z(I, L);
          },
          $$slots: { default: !0 }
        });
        var H = q(E, 2);
        Je(H, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (I, R) => {
            var L = cw();
            z(I, L);
          },
          $$slots: { default: !0 }
        }), j(V);
        var N = q(V, 2);
        Jn(N, {}), z(l, c);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ye({
    get data() {
      return n();
    },
    set data(l) {
      n(l), m();
    }
  });
}
pe(ff, { data: {} }, [], [], !0);
var vw = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), pw = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), gw = /* @__PURE__ */ ie('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const hw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function vf(e, t) {
  me(t, !0), ot(e, hw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ot(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = St(), { addParameter: i } = qn(), { updateNodeData: a } = Jt();
  return xn(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && i(o, "outputDefs", {
      name: "output",
      dataType: "String",
      dataTypeDisabled: !0,
      deleteDisabled: !0
    });
  }), Mn(e, mt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (s) => {
        var l = vw();
        z(s, l);
      },
      children: (s, l) => {
        var u = gw(), c = Ce(u), d = Y(c);
        nt(d, {
          level: 3,
          children: (k, V) => {
            Re();
            var E = Ye("输入参数");
            z(k, E);
          },
          $$slots: { default: !0 }
        });
        var p = q(d, 2);
        Je(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (k, V) => {
            var E = pw();
            z(k, E);
          },
          $$slots: { default: !0 }
        }), j(c);
        var v = q(c, 2);
        rn(v, {});
        var h = q(v, 2);
        nt(h, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (k, V) => {
            Re();
            var E = Ye("模板内容");
            z(k, E);
          },
          $$slots: { default: !0 }
        });
        var b = q(h, 2), x = Y(b);
        const C = /* @__PURE__ */ Te(() => n().template || "");
        Pt(x, {
          rows: 10,
          placeholder: "请输入模板内容",
          style: "width: 100%",
          onchange: (k) => {
            a(o, () => ({ template: k.target.value }));
          },
          get value() {
            return f(C);
          }
        }), j(b);
        var g = q(b, 2), _ = Y(g);
        nt(_, {
          level: 3,
          mt: "10px",
          children: (k, V) => {
            Re();
            var E = Ye("输出参数");
            z(k, E);
          },
          $$slots: { default: !0 }
        }), j(g);
        var w = q(g, 2);
        Jn(w, {}), z(s, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ye({
    get data() {
      return n();
    },
    set data(s) {
      n(s), m();
    }
  });
}
pe(vf, { data: {} }, [], [], !0);
var mw = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), yw = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ww = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), bw = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), xw = /* @__PURE__ */ ie('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), $w = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Cw = /* @__PURE__ */ ie('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), _w = /* @__PURE__ */ ie('<div style="width: 100%"><!></div>'), kw = /* @__PURE__ */ ie('<div style="width: 100%"><!></div>'), Ew = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Sw = /* @__PURE__ */ ie('<div class="heading svelte-1mo2w1q"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1mo2w1q"><!> <!></div> <!> <!> <div class="radio-group svelte-1mo2w1q"><label class="svelte-1mo2w1q"><!>none</label> <label class="svelte-1mo2w1q"><!>form-data</label> <label class="svelte-1mo2w1q"><!>x-www-form-urlencoded</label> <label class="svelte-1mo2w1q"><!>json</label> <label class="svelte-1mo2w1q"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1mo2w1q"><!> <!></div> <!>', 1);
const Mw = {
  hash: "svelte-1mo2w1q",
  code: ".heading.svelte-1mo2w1q {display:flex;margin-bottom:10px;}.radio-group.svelte-1mo2w1q {display:flex;margin:10px 0;}.radio-group.svelte-1mo2w1q label:where(.svelte-1mo2w1q) {display:flex;font-size:14px;}"
};
function pf(e, t) {
  me(t, !0), ot(e, Mw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ot(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  hn(() => {
    n().method || s(i, () => ({ method: "get" }));
  });
  const o = [
    { value: "get", label: "GET" },
    { value: "post", label: "POST" },
    { value: "put", label: "PUT" },
    { value: "delete", label: "DELETE" },
    { value: "head", label: "HEAD" },
    { value: "patch", label: "PATCH" }
  ], i = St(), { addParameter: a } = qn(), { updateNodeData: s } = Jt();
  return Mn(e, mt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = mw();
        z(l, u);
      },
      children: (l, u) => {
        var c = Sw(), d = Ce(c), p = Y(d);
        nt(p, {
          level: 3,
          children: (ce, fe) => {
            Re();
            var ae = Ye("输入参数");
            z(ce, ae);
          },
          $$slots: { default: !0 }
        });
        var v = q(p, 2);
        Je(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i);
          },
          children: (ce, fe) => {
            var ae = yw();
            z(ce, ae);
          },
          $$slots: { default: !0 }
        }), j(d);
        var h = q(d, 2);
        rn(h, {});
        var b = q(h, 2);
        nt(b, {
          level: 3,
          mt: "10px",
          children: (ce, fe) => {
            Re();
            var ae = Ye("URL 地址");
            z(ce, ae);
          },
          $$slots: { default: !0 }
        });
        var x = q(b, 2), C = Y(x), g = Y(C);
        const _ = /* @__PURE__ */ Te(() => n().method ? [n().method] : ["get"]);
        gn(g, {
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
        }), j(C);
        var w = q(C, 2), k = Y(w);
        const V = /* @__PURE__ */ Te(() => n().url || "");
        _t(k, {
          placeholder: "请输入url",
          style: "width: 100%",
          onchange: (ce) => {
            s(i, () => ({ url: ce.target.value }));
          },
          get value() {
            return f(V);
          }
        }), j(w), j(x);
        var E = q(x, 2), H = Y(E);
        nt(H, {
          level: 3,
          children: (ce, fe) => {
            Re();
            var ae = Ye("Http 头信息");
            z(ce, ae);
          },
          $$slots: { default: !0 }
        });
        var N = q(H, 2);
        Je(N, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "headers");
          },
          children: (ce, fe) => {
            var ae = ww();
            z(ce, ae);
          },
          $$slots: { default: !0 }
        }), j(E);
        var I = q(E, 2);
        rn(I, { dataKeyName: "headers" });
        var R = q(I, 2);
        nt(R, {
          level: 3,
          mt: "10px",
          children: (ce, fe) => {
            Re();
            var ae = Ye("Body");
            z(ce, ae);
          },
          $$slots: { default: !0 }
        });
        var L = q(R, 2), B = Y(L), S = Y(B);
        const $ = /* @__PURE__ */ Te(() => !n().bodyType);
        _t(S, {
          type: "radio",
          name: "bodyType",
          value: "",
          get checked() {
            return f($);
          },
          onchange: (ce) => {
            var fe;
            (fe = ce.target) != null && fe.checked && s(i, { bodyType: "" });
          }
        }), Re(), j(B);
        var M = q(B, 2), T = Y(M);
        const P = /* @__PURE__ */ Te(() => n().bodyType === "form-data");
        _t(T, {
          type: "radio",
          name: "bodyType",
          value: "form-data",
          get checked() {
            return f(P);
          },
          onchange: (ce) => {
            var fe;
            (fe = ce.target) != null && fe.checked && s(i, { bodyType: "form-data" });
          }
        }), Re(), j(M);
        var O = q(M, 2), A = Y(O);
        const X = /* @__PURE__ */ Te(() => n().bodyType === "x-www-form-urlencoded");
        _t(A, {
          type: "radio",
          name: "bodyType",
          value: "x-www-form-urlencoded",
          get checked() {
            return f(X);
          },
          onchange: (ce) => {
            var fe;
            (fe = ce.target) != null && fe.checked && s(i, { bodyType: "x-www-form-urlencoded" });
          }
        }), Re(), j(O);
        var W = q(O, 2), U = Y(W);
        const Q = /* @__PURE__ */ Te(() => n().bodyType === "json");
        _t(U, {
          type: "radio",
          name: "bodyType",
          value: "json",
          get checked() {
            return f(Q);
          },
          onchange: (ce) => {
            var fe;
            (fe = ce.target) != null && fe.checked && s(i, { bodyType: "json" });
          }
        }), Re(), j(W);
        var F = q(W, 2), ge = Y(F);
        const de = /* @__PURE__ */ Te(() => n().bodyType === "raw");
        _t(ge, {
          type: "radio",
          name: "bodyType",
          value: "raw",
          get checked() {
            return f(de);
          },
          onchange: (ce) => {
            var fe;
            (fe = ce.target) != null && fe.checked && s(i, { bodyType: "raw" });
          }
        }), Re(), j(F), j(L);
        var he = q(L, 2);
        {
          var le = (ce) => {
            var fe = xw(), ae = Ce(fe), Ve = Y(ae);
            nt(Ve, {
              level: 3,
              children: (te, Fe) => {
                Re();
                var ve = Ye("参数");
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
                var ve = bw();
                z(te, ve);
              },
              $$slots: { default: !0 }
            }), j(ae);
            var rt = q(ae, 2);
            rn(rt, { dataKeyName: "formData" }), z(ce, fe);
          };
          xe(he, (ce) => {
            n().bodyType === "form-data" && ce(le);
          });
        }
        var ke = q(he, 2);
        {
          var $e = (ce) => {
            var fe = Cw(), ae = Ce(fe), Ve = Y(ae);
            nt(Ve, {
              level: 3,
              children: (te, Fe) => {
                Re();
                var ve = Ye("Body 参数");
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
                var ve = $w();
                z(te, ve);
              },
              $$slots: { default: !0 }
            }), j(ae);
            var rt = q(ae, 2);
            rn(rt, { dataKeyName: "formUrlencoded" }), z(ce, fe);
          };
          xe(ke, (ce) => {
            n().bodyType === "x-www-form-urlencoded" && ce($e);
          });
        }
        var He = q(ke, 2);
        {
          var ue = (ce) => {
            var fe = _w(), ae = Y(fe);
            Pt(ae, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (Ve) => {
                s(i, { bodyJson: Ve.target.value });
              }
            }), j(fe), z(ce, fe);
          };
          xe(He, (ce) => {
            n().bodyType === "json" && ce(ue);
          });
        }
        var J = q(He, 2);
        {
          var Me = (ce) => {
            var fe = kw(), ae = Y(fe);
            Pt(ae, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (Ve) => {
                s(i, { bodyRaw: Ve.target.value });
              }
            }), j(fe), z(ce, fe);
          };
          xe(J, (ce) => {
            n().bodyType === "raw" && ce(Me);
          });
        }
        var K = q(J, 2), Ne = Y(K);
        nt(Ne, {
          level: 3,
          mt: "10px",
          children: (ce, fe) => {
            Re();
            var ae = Ye("输出参数");
            z(ce, ae);
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
          children: (ce, fe) => {
            var ae = Ew();
            z(ce, ae);
          },
          $$slots: { default: !0 }
        }), j(K);
        var Le = q(K, 2);
        Jn(Le, {}), z(l, c);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ye({
    get data() {
      return n();
    },
    set data(l) {
      n(l), m();
    }
  });
}
pe(pf, { data: {} }, [], [], !0);
var Pw = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), Vw = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ow = /* @__PURE__ */ ie('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Hw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function gf(e, t) {
  me(t, !0), ot(e, Hw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ot(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = St(), { addParameter: i } = qn(), a = mr();
  let s = /* @__PURE__ */ It(wn([]));
  hn(async () => {
    var u, c;
    const d = await ((c = (u = a.provider) == null ? void 0 : u.knowledge) == null ? void 0 : c.call(u));
    f(s).push(...d || []);
  });
  const { updateNodeData: l } = Jt();
  return xn(() => {
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
  }), Mn(e, mt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = Pw();
        z(u, c);
      },
      children: (u, c) => {
        var d = Ow(), p = Ce(d), v = Y(p);
        nt(v, {
          level: 3,
          children: (L, B) => {
            Re();
            var S = Ye("输入参数");
            z(L, S);
          },
          $$slots: { default: !0 }
        });
        var h = q(v, 2);
        Je(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (L, B) => {
            var S = Vw();
            z(L, S);
          },
          $$slots: { default: !0 }
        }), j(p);
        var b = q(p, 2);
        rn(b, {});
        var x = q(b, 2);
        nt(x, {
          level: 3,
          mt: "10px",
          children: (L, B) => {
            Re();
            var S = Ye("知识库设置");
            z(L, S);
          },
          $$slots: { default: !0 }
        });
        var C = q(x, 4), g = Y(C);
        const _ = /* @__PURE__ */ Te(() => n().knowledgeId ? [n().knowledgeId] : []);
        gn(g, {
          get items() {
            return f(s);
          },
          style: "width: 100%",
          placeholder: "请选择知识库",
          onSelect: (L) => {
            const B = L.value;
            l(o, () => ({ knowledgeId: B }));
          },
          get value() {
            return f(_);
          }
        }), j(C);
        var w = q(C, 4), k = Y(w);
        _t(k, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (L) => {
            const B = L.target.value;
            l(o, () => ({ keyword: B }));
          }
        }), j(w);
        var V = q(w, 4), E = Y(V);
        const H = /* @__PURE__ */ Te(() => n().limit || "");
        _t(E, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          onchange: (L) => {
            const B = L.target.value;
            l(o, () => ({ limit: B }));
          },
          get value() {
            return f(H);
          }
        }), j(V);
        var N = q(V, 2), I = Y(N);
        nt(I, {
          level: 3,
          mt: "10px",
          children: (L, B) => {
            Re();
            var S = Ye("输出参数");
            z(L, S);
          },
          $$slots: { default: !0 }
        }), j(N);
        var R = q(N, 2);
        Jn(R, {}), z(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ye({
    get data() {
      return n();
    },
    set data(u) {
      n(u), m();
    }
  });
}
pe(gf, { data: {} }, [], [], !0);
var Tw = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), Nw = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Lw = /* @__PURE__ */ ie('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">搜索引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">搜索数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Dw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function hf(e, t) {
  me(t, !0), ot(e, Dw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ot(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = St(), { addParameter: i } = qn(), a = mr();
  let s = /* @__PURE__ */ It(wn([]));
  hn(async () => {
    var u, c;
    const d = await ((c = (u = a.provider) == null ? void 0 : u.searchEngine) == null ? void 0 : c.call(u));
    f(s).push(...d || []);
  });
  const { updateNodeData: l } = Jt();
  return xn(() => {
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
  }), Mn(e, mt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = Tw();
        z(u, c);
      },
      children: (u, c) => {
        var d = Lw(), p = Ce(d), v = Y(p);
        nt(v, {
          level: 3,
          children: (R, L) => {
            Re();
            var B = Ye("输入参数");
            z(R, B);
          },
          $$slots: { default: !0 }
        });
        var h = q(v, 2);
        Je(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (R, L) => {
            var B = Nw();
            z(R, B);
          },
          $$slots: { default: !0 }
        }), j(p);
        var b = q(p, 2);
        rn(b, {});
        var x = q(b, 2);
        nt(x, {
          level: 3,
          mt: "10px",
          children: (R, L) => {
            Re();
            var B = Ye("搜索引擎设置");
            z(R, B);
          },
          $$slots: { default: !0 }
        });
        var C = q(x, 4), g = Y(C);
        const _ = /* @__PURE__ */ Te(() => n().engine ? [n().engine] : []);
        gn(g, {
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
        }), j(C);
        var w = q(C, 4), k = Y(w);
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
        }), j(w);
        var V = q(w, 4), E = Y(V);
        _t(E, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (R) => {
            const L = R.target.value;
            l(o, () => ({ limit: L }));
          }
        }), j(V);
        var H = q(V, 2), N = Y(H);
        nt(N, {
          level: 3,
          mt: "10px",
          children: (R, L) => {
            Re();
            var B = Ye("输出参数");
            z(R, B);
          },
          $$slots: { default: !0 }
        }), j(H);
        var I = q(H, 2);
        Jn(I, {}), z(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ye({
    get data() {
      return n();
    },
    set data(u) {
      n(u), m();
    }
  });
}
pe(hf, { data: {} }, [], [], !0);
var zw = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), Aw = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Iw = /* @__PURE__ */ ie('<div class="heading svelte-md8tgj"><!> <!></div> <!> <div class="heading svelte-md8tgj"><!></div> <!>', 1);
const Rw = {
  hash: "svelte-md8tgj",
  code: ".heading.svelte-md8tgj {display:flex;margin-bottom:10px;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function mf(e, t) {
  me(t, !0), ot(e, Rw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ot(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = St(), { addParameter: i } = qn();
  return Mn(e, mt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (a) => {
        var s = zw();
        z(a, s);
      },
      handle: (a) => {
        gr(a, {
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
        var l = Iw(), u = Ce(l), c = Y(u);
        nt(c, {
          level: 3,
          children: (x, C) => {
            Re();
            var g = Ye("循环变量");
            z(x, g);
          },
          $$slots: { default: !0 }
        });
        var d = q(c, 2);
        Je(d, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (x, C) => {
            var g = Aw();
            z(x, g);
          },
          $$slots: { default: !0 }
        }), j(u);
        var p = q(u, 2);
        rn(p, {});
        var v = q(p, 2), h = Y(v);
        nt(h, {
          level: 3,
          mt: "10px",
          children: (x, C) => {
            Re();
            var g = Ye("输出参数");
            z(x, g);
          },
          $$slots: { default: !0 }
        }), j(v);
        var b = q(v, 2);
        Jn(b, {}), z(a, l);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), ye({
    get data() {
      return n();
    },
    set data(a) {
      n(a), m();
    }
  });
}
pe(mf, { data: {} }, [], [], !0);
const qw = {
  startNode: af,
  codeNode: ff,
  llmNode: df,
  templateNode: vf,
  httpNode: pf,
  knowledgeNode: gf,
  searchEngineNode: hf,
  loopNode: mf,
  endNode: uf
};
var Zw = /* @__PURE__ */ ie("<!> ", 1);
function gs(e, t) {
  me(t, !0);
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
      var u = Zw(), c = Ce(u);
      Ts(c, n);
      var d = q(c);
      Se(() => bt(d, ` ${r() ?? ""}`)), z(s, u);
    },
    $$slots: { default: !0 }
  }), ye({
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
var Bw = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), jw = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), Xw = /* @__PURE__ */ ie('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function yf(e, t) {
  me(t, !0);
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
  ], a = [], s = mr(), l = s.customNodes;
  if (l) {
    const C = Object.keys(l).sort((g, _) => (l[g].sortNo || 0) - (l[_].sortNo || 0));
    for (let g of C)
      l[g].group === "base" ? o.push({ type: g, ...l[g] }) : a.push({
        icon: l[g].icon,
        title: l[g].title,
        type: g
      });
    o.sort((g, _) => (g.sortNo || 0) - (_.sortNo || 0));
  }
  if (s.hiddenNodes) {
    const C = typeof s.hiddenNodes == "function" ? s.hiddenNodes() : s.hiddenNodes;
    if (Array.isArray(C)) {
      for (let g of C)
        for (let _ = 0; _ < o.length; _++)
          if (o[_].type === g) {
            o.splice(_, 1);
            break;
          }
    }
  }
  var u = Xw(), c = Y(u), d = Y(c), p = Y(d);
  Zd(p, {
    style: "width: 100%",
    items: i,
    onChange: (C) => {
      ee(n, C.value.toString(), !0);
    }
  }), j(d);
  var v = q(d, 2), h = Y(v);
  Zt(h, 21, () => o, eo, (C, g) => {
    gs(C, mt(() => f(g)));
  }), j(h);
  var b = q(h, 2);
  Zt(b, 21, () => a, eo, (C, g) => {
    gs(C, mt(() => f(g)));
  }), j(b), j(v), j(c);
  var x = q(c, 2);
  Je(x, {
    onclick: () => {
      ee(r, f(r) ? "" : "show", !0);
    },
    children: (C, g) => {
      var _ = lt(), w = Ce(_);
      {
        var k = (E) => {
          var H = Bw();
          z(E, H);
        }, V = (E) => {
          var H = jw();
          z(E, H);
        };
        xe(w, (E) => {
          f(r) === "show" ? E(k) : E(V, !1);
        });
      }
      z(C, _);
    },
    $$slots: { default: !0 }
  }), j(u), Se(() => {
    Dt(u, 1, `tf-toolbar ${f(r) ?? ""}`), $t(h, `display: ${f(n) === "base" ? "flex" : "none"}`), $t(b, `display: ${f(n) !== "base" ? "flex" : "none"}`);
  }), z(e, u), ye();
}
pe(yf, {}, [], [], !0);
const Yw = () => {
  const { nodeLookup: e } = tt();
  return {
    getNode: (t) => {
      var n;
      return (n = G(e).get(t)) == null ? void 0 : n.internals.userNode;
    }
  };
}, Ww = () => {
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
}, Kw = () => {
  const { edges: e } = tt();
  return {
    getEdgesByTarget: (t) => G(e).filter((n) => n.target === t)
  };
};
var Fw = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Gw = /* @__PURE__ */ ie('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), Uw = /* @__PURE__ */ ie('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Jw = /* @__PURE__ */ ie('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Qw = /* @__PURE__ */ ie('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input></div></div>', 1), eb = /* @__PURE__ */ ie('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), tb = /* @__PURE__ */ ie('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), nb = /* @__PURE__ */ Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), rb = /* @__PURE__ */ ie('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), ob = /* @__PURE__ */ ie("<!> <!> <div></div> <!>", 1);
const ib = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function wf(e, t) {
  var n;
  me(t, !0), ot(e, ib);
  const r = y(t, "data", 7), o = /* @__PURE__ */ Ot(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), i = St(), { addParameter: a } = qn(), s = Jt(), { updateNodeData: l } = s, u = (C) => {
    l(i, C);
  }, c = (C, g) => {
    var _;
    u({ [C]: (_ = g.target) == null ? void 0 : _.value });
  }, d = { ...o, id: i, data: r() }, p = document.createElement("div"), v = mr().customNodes[t.type];
  (n = v.render) == null || n.call(v, p, d, s);
  const h = v.forms;
  let b;
  xn(() => {
    r().expand && b && b.append(p);
  }), xn(() => {
    var C;
    r() && ((C = v.onUpdate) == null || C.call(v, p, { ...d, data: r() }));
  }), xn(() => {
    !r().parameters && v.parameters && u({
      parameters: na(JSON.parse(JSON.stringify(v.parameters)))
    });
  }), xn(() => {
    !r().outputDefs && v.outputDefs && u({
      outputDefs: na(JSON.parse(JSON.stringify(v.outputDefs)))
    });
  });
  const x = /* @__PURE__ */ Te(() => ({
    ...r(),
    description: v.description
  }));
  return Mn(e, mt(
    {
      get data() {
        return f(x);
      }
    },
    () => o,
    {
      icon: (C) => {
        var g = lt(), _ = Ce(g);
        Ts(_, () => v.icon), z(C, g);
      },
      children: (C, g) => {
        var _ = ob(), w = Ce(_);
        {
          var k = (R) => {
            var L = Gw(), B = Ce(L), S = Y(B);
            nt(S, {
              level: 3,
              children: (P, O) => {
                Re();
                var A = Ye("输入参数");
                z(P, A);
              },
              $$slots: { default: !0 }
            });
            var $ = q(S, 2);
            {
              var M = (P) => {
                Je(P, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    a(i);
                  },
                  children: (O, A) => {
                    var X = Fw();
                    z(O, X);
                  },
                  $$slots: { default: !0 }
                });
              };
              xe($, (P) => {
                v.parametersAddEnable !== !1 && P(M);
              });
            }
            j(B);
            var T = q(B, 2);
            rn(T, {}), z(R, L);
          };
          xe(w, (R) => {
            v.parametersEnable !== !1 && R(k);
          });
        }
        var V = q(w, 2);
        {
          var E = (R) => {
            var L = lt(), B = Ce(L);
            Zt(B, 17, () => h, eo, (S, $) => {
              var M = lt(), T = Ce(M);
              {
                var P = (A) => {
                  var X = Uw(), W = Ce(X), U = Y(W, !0);
                  j(W);
                  var Q = q(W, 2), F = Y(Q);
                  const ge = /* @__PURE__ */ Te(() => r()[f($).name] || f($).defaultValue);
                  _t(F, mt(
                    {
                      get placeholder() {
                        return f($).placeholder;
                      },
                      style: "width: 100%",
                      get value() {
                        return f(ge);
                      }
                    },
                    () => f($).attrs,
                    {
                      onchange: (de) => {
                        c(f($).name, de);
                      }
                    }
                  )), j(Q), Se(() => bt(U, f($).label)), z(A, X);
                }, O = (A, X) => {
                  {
                    var W = (Q) => {
                      var F = Jw(), ge = Ce(F), de = Y(ge, !0);
                      j(ge);
                      var he = q(ge, 2), le = Y(he);
                      const ke = /* @__PURE__ */ Te(() => r()[f($).name] || f($).defaultValue);
                      Pt(le, mt(
                        {
                          rows: 3,
                          get placeholder() {
                            return f($).placeholder;
                          },
                          style: "width: 100%",
                          get value() {
                            return f(ke);
                          }
                        },
                        () => f($).attrs,
                        {
                          onchange: ($e) => {
                            c(f($).name, $e);
                          }
                        }
                      )), j(he), Se(() => bt(de, f($).label)), z(Q, F);
                    }, U = (Q, F) => {
                      {
                        var ge = (he) => {
                          var le = Qw(), ke = Ce(le), $e = Y(ke, !0);
                          j(ke);
                          var He = q(ke, 2), ue = Y(He), J = Y(ue), Me = Y(J);
                          j(J);
                          var K = q(J, 2);
                          ur(K);
                          var Ne = (Le) => u({
                            [f($).name]: parseFloat(Le.target.value)
                          });
                          let qe;
                          j(ue), j(He), Se(() => {
                            bt($e, f($).label), bt(Me, `${f($).description ?? ""}: ${r()[f($).name] ?? f($).defaultValue ?? ""}`), qe = sn(
                              K,
                              qe,
                              {
                                class: "nodrag",
                                type: "range",
                                ...f($).attrs,
                                value: r()[f($).name] ?? f($).defaultValue,
                                oninput: Ne
                              },
                              "svelte-q0cqsa"
                            );
                          }), z(he, le);
                        }, de = (he, le) => {
                          {
                            var ke = (He) => {
                              var ue = eb(), J = Ce(ue), Me = Y(J, !0);
                              j(J);
                              var K = q(J, 2), Ne = Y(K);
                              const qe = /* @__PURE__ */ Te(() => f($).options || []), Le = /* @__PURE__ */ Te(() => r()[f($).name] ? [r()[f($).name]] : [f($).defaultValue]);
                              gn(Ne, {
                                get items() {
                                  return f(qe);
                                },
                                style: "width: 100%",
                                get placeholder() {
                                  return f($).placeholder;
                                },
                                onSelect: (ce) => {
                                  const fe = ce.value;
                                  u({ [f($).name]: fe });
                                },
                                get value() {
                                  return f(Le);
                                }
                              }), j(K), Se(() => bt(Me, f($).label)), z(He, ue);
                            }, $e = (He, ue) => {
                              {
                                var J = (K) => {
                                  var Ne = tb(), qe = Ce(Ne), Le = Y(qe, !0);
                                  j(qe);
                                  var ce = q(qe, 2), fe = Y(ce);
                                  qd(fe, {
                                    style: "width: 100%",
                                    get placeholder() {
                                      return f($).placeholder;
                                    },
                                    onChosen: (ae, Ve, it) => {
                                      var rt, te;
                                      (te = (rt = f($).chosen) == null ? void 0 : rt.onChosen) == null || te.call(rt, u, ae, Ve, it);
                                    },
                                    get value() {
                                      var ae;
                                      return r()[((ae = f($).chosen) == null ? void 0 : ae.valueDataKey) || ""];
                                    },
                                    get label() {
                                      var ae;
                                      return r()[((ae = f($).chosen) == null ? void 0 : ae.labelDataKey) || ""];
                                    }
                                  }), j(ce), Se(() => bt(Le, f($).label)), z(K, Ne);
                                }, Me = (K, Ne) => {
                                  {
                                    var qe = (Le) => {
                                      nt(Le, mt({ level: 3, mt: "10px" }, () => f($).attrs, {
                                        children: (ce, fe) => {
                                          Re();
                                          var ae = Ye();
                                          Se(() => bt(ae, f($).label)), z(ce, ae);
                                        },
                                        $$slots: { default: !0 }
                                      }));
                                    };
                                    xe(
                                      K,
                                      (Le) => {
                                        f($).type === "heading" && Le(qe);
                                      },
                                      Ne
                                    );
                                  }
                                };
                                xe(
                                  He,
                                  (K) => {
                                    f($).type === "chosen" ? K(J) : K(Me, !1);
                                  },
                                  ue
                                );
                              }
                            };
                            xe(
                              he,
                              (He) => {
                                f($).type === "select" ? He(ke) : He($e, !1);
                              },
                              le
                            );
                          }
                        };
                        xe(
                          Q,
                          (he) => {
                            f($).type === "slider" ? he(ge) : he(de, !1);
                          },
                          F
                        );
                      }
                    };
                    xe(
                      A,
                      (Q) => {
                        f($).type === "textarea" ? Q(W) : Q(U, !1);
                      },
                      X
                    );
                  }
                };
                xe(T, (A) => {
                  f($).type === "input" ? A(P) : A(O, !1);
                });
              }
              z(S, M);
            }), z(R, L);
          };
          xe(V, (R) => {
            h && R(E);
          });
        }
        var H = q(V, 2);
        zn(H, (R) => b = R, () => b);
        var N = q(H, 2);
        {
          var I = (R) => {
            var L = rb(), B = Ce(L), S = Y(B);
            nt(S, {
              level: 3,
              mt: "10px",
              children: (P, O) => {
                Re();
                var A = Ye("输出参数");
                z(P, A);
              },
              $$slots: { default: !0 }
            });
            var $ = q(S, 2);
            {
              var M = (P) => {
                Je(P, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    a(i, "outputDefs");
                  },
                  children: (O, A) => {
                    var X = nb();
                    z(O, X);
                  },
                  $$slots: { default: !0 }
                });
              };
              xe($, (P) => {
                v.outputDefsAddEnable !== !1 && P(M);
              });
            }
            j(B);
            var T = q(B, 2);
            Jn(T, {}), z(R, L);
          };
          xe(N, (R) => {
            v.outputDefsEnable !== !1 && R(I);
          });
        }
        Se(() => {
          $t(H, v.rootStyle || ""), Dt(H, 1, En(v.rootClass), "svelte-q0cqsa");
        }), z(C, _);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ye({
    get data() {
      return r();
    },
    set data(C) {
      r(C), m();
    }
  });
}
pe(wf, { data: {} }, [], [], !0);
const ab = () => {
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
var sb = /* @__PURE__ */ ie('<div class="panel-content svelte-1oe15vw"><div>边属性设置</div> <div class="setting-title svelte-1oe15vw">边条件设置</div> <div class="setting-item"><!></div></div>'), lb = /* @__PURE__ */ ie("<!> <!> <!> <!>", 1), ub = /* @__PURE__ */ ie('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const cb = {
  hash: "svelte-1oe15vw",
  code: ".panel-content.svelte-1oe15vw {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-1oe15vw {margin:10px 0;font-size:12px;color:#999;}"
};
function bf(e, t) {
  me(t, !0), ot(e, cb);
  const [n, r] = vt(), o = () => oe(H, "$nodes", n), i = () => oe(N, "$edges", n), a = () => oe(I, "$viewport", n), s = y(t, "onInit", 7), l = Jt();
  s()(l);
  let u = /* @__PURE__ */ It(!1), c = /* @__PURE__ */ It(void 0);
  const { updateEdgeData: d } = ab(), p = (P) => {
    P.preventDefault(), P.dataTransfer && (P.dataTransfer.dropEffect = "move");
  }, v = (P) => {
    var O;
    P.preventDefault();
    const A = l.screenToFlowPosition({
      x: P.clientX - 250,
      y: P.clientY - 100
    }), X = (O = P.dataTransfer) == null ? void 0 : O.getData("application/tinyflow"), W = X ? JSON.parse(X) : {}, U = {
      id: `node_${lo()}`,
      position: A,
      data: {},
      ...W
    };
    Si.addNode(U), Si.selectNodeOnly(U.id);
  }, { getNode: h } = Yw(), b = (P) => {
    const O = h(P.source), A = h(P.target);
    if (P.sourceHandle === "loop_handle" || O.parentId) {
      const X = l.getEdges();
      for (let W of X)
        if (W.target === P.target) {
          const U = h(W.source);
          if (P.sourceHandle === "loop_handle" && U.parentId !== O.id || O.parentId && U.parentId !== O.parentId)
            return !1;
        }
    }
    return !(!O.parentId && A.parentId && A.parentId !== O.id);
  }, { ensureParentInNodesBefore: x } = Ww(), C = (P, O) => {
    if (!O.isValid)
      return;
    const A = O.toNode;
    if (A.parentId)
      return;
    const X = O.fromNode, W = O.fromHandle, U = { position: { ...A.position } };
    if (W.id === "loop_handle" ? U.parentId = X.id : X.parentId && (U.parentId = X.parentId), U.parentId) {
      const Q = h(U.parentId);
      U.position = {
        x: A.position.x - Q.position.x,
        y: A.position.y - Q.position.y
      }, x(U.parentId, A.id), l.updateNode(A.id, U);
    }
  }, { getEdgesByTarget: g } = Kw(), _ = (P) => {
    P.edges.forEach((O) => {
      const A = h(O.target);
      if (A && A.parentId) {
        const X = g(O.target), W = h(A.parentId);
        if (X.length === 0)
          l.updateNode(A.id, {
            parentId: void 0,
            position: {
              x: A.position.x + W.position.x,
              y: A.position.y + W.position.y
            }
          });
        else {
          let U = !1;
          for (let Q = 0; Q < X.length; Q++) {
            const F = X[Q], ge = h(F.source);
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
  }, w = (P, O) => {
  }, k = (P) => {
  }, V = {}, E = mr().customNodes;
  if (E)
    for (let P of Object.keys(E))
      V[P] = wf;
  const { nodes: H, edges: N, viewport: I } = tt(), R = mr().onDataChange;
  R && (H.subscribe(() => {
    R(
      {
        nodes: o(),
        edges: i(),
        viewport: a()
      },
      { eventType: "nodesChange" }
    );
  }), N.subscribe(() => {
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
  var L = ub(), B = Y(L);
  const S = /* @__PURE__ */ Te(() => ({ ...qw, ...V })), $ = /* @__PURE__ */ Te(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: Bo.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  Ed(B, mt(
    {
      get nodeTypes() {
        return f(S);
      }
    },
    Si,
    {
      class: "tinyflow-logo",
      isValidConnection: b,
      onconnectend: C,
      onconnectstart: w,
      onconnect: k,
      connectionRadius: 50,
      ondelete: _,
      onclick: (P) => {
        const O = P.target;
        O.classList.contains("svelte-flow__edge-interaction") || O.classList.contains("panel-content") || O.closest(".panel-content") || (ee(u, !1), ee(c, null));
      },
      get defaultEdgeOptions() {
        return f($);
      },
      $$events: {
        drop: v,
        dragover: p,
        edgeclick: (P) => {
          ee(u, !0), ee(c, P.detail.edge, !0);
        }
      },
      children: (P, O) => {
        var A = lb(), X = Ce(A);
        Dd(X, {});
        var W = q(X, 2);
        Td(W, {});
        var U = q(W, 2);
        Ad(U, {});
        var Q = q(U, 2);
        {
          var F = (ge) => {
            ri(ge, {
              children: (de, he) => {
                var le = sb(), ke = q(Y(le), 4), $e = Y(ke);
                const He = /* @__PURE__ */ Te(() => {
                  var ue, J;
                  return (J = (ue = f(c)) == null ? void 0 : ue.data) == null ? void 0 : J.condition;
                });
                Pt($e, {
                  rows: 3,
                  placeholder: "请输入边条件",
                  style: "width: 100%",
                  get value() {
                    return f(He);
                  },
                  onchange: (ue) => {
                    f(c) && d(f(c).id, { condition: ue.target.value });
                  }
                }), j(ke), j(le), z(de, le);
              },
              $$slots: { default: !0 }
            });
          };
          xe(Q, (ge) => {
            f(u) && ge(F);
          });
        }
        z(P, A);
      },
      $$slots: { default: !0 }
    }
  ));
  var M = q(B, 2);
  yf(M, {}), j(L), z(e, L);
  var T = ye({
    get onInit() {
      return s();
    },
    set onInit(P) {
      s(P), m();
    }
  });
  return r(), T;
}
pe(bf, { onInit: {} }, [], [], !0);
function db(e, t) {
  me(t, !0);
  const n = y(t, "options", 7), r = y(t, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  return Si.init((o == null ? void 0 : o.nodes) || [], (o == null ? void 0 : o.edges) || []), Qr("tinyflow_options", n()), Sd(e, {
    fitView: !0,
    children: (i, a) => {
      bf(i, {
        get onInit() {
          return r();
        }
      });
    },
    $$slots: { default: !0 }
  }), ye({
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
customElements.define("tinyflow-component", pe(db, { options: {}, onInit: {} }, [], [], !1));
const gb = Cf((e, t) => {
  const n = tl(null), r = tl(null);
  _f(t, () => ({
    getData: () => r.current ? r.current.getData() : (console.warn("Tinyflow instance is not initialized"), null)
  }));
  const { data: o, style: i, className: a } = e;
  return kf(() => {
    if (n.current) {
      const s = new G2({
        ...e,
        element: n.current
        // data: data
      });
      return r.current = s, () => {
        s.destroy(), r.current = null;
      };
    }
  }, [o]), /* @__PURE__ */ Pf.jsx("div", { ref: n, style: { height: "600px", ...i }, className: a });
});
export {
  gb as Tinyflow
};
//# sourceMappingURL=index.js.map
